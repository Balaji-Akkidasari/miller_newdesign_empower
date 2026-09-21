import { useCallback, useEffect, useRef, useState } from 'react';
import './IntroTransition.css';

/* --------------------------------------------------------------------------
   Full-screen intro film that shatters like glass into the live site.

   Beat map of the film, in seconds:
     0.0  hands enter from both sides
     2.0  the clasp lands
     3.5  the mark builds around the handshake
     4.7  "EmpowerED" wipes in
    11.3  light sweep, the world turns white
    12.0  lockup settles      <- we shatter just after this
   -------------------------------------------------------------------------- */
const DEFAULT_SHATTER_AT = 12.55;
const FALLBACK_RUNTIME = 3400;

// Glass geometry. Rings x sectors quads, plus one core piece at the impact.
const RINGS = [0.07, 0.2, 0.38, 0.62, 1.25];
const SECTORS = 14;
const JITTER = 0.055; // how irregular the cracks are

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* sessionStorage throws in some embedded and privacy contexts. Never let a
   storage failure cost someone the site. */
const store = {
  get(key) {
    try {
      return window.sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch {
      /* no-op */
    }
  },
};

const rand = (a, b) => a + Math.random() * (b - a);

/**
 * Paints the video's current frame into a viewport-sized canvas using the same
 * cover crop the <video> uses, so the shards line up pixel-for-pixel with what
 * the viewer was just looking at. Returns a data URL, or null if the frame
 * can't be read (no dimensions yet, or a tainted canvas).
 */
function captureFrame(video) {
  try {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (!video || !video.videoWidth || !video.videoHeight) return null;

    const canvas = document.createElement('canvas');
    canvas.width = vw;
    canvas.height = vh;
    const ctx = canvas.getContext('2d');

    const scale = Math.max(vw / video.videoWidth, vh / video.videoHeight);
    const dw = video.videoWidth * scale;
    const dh = video.videoHeight * scale;
    ctx.drawImage(video, (vw - dw) / 2, (vh - dh) / 2, dw, dh);

    return canvas.toDataURL('image/jpeg', 0.82);
  } catch {
    return null; // tainted canvas or no 2d context — caller falls back to a fade
  }
}

/**
 * Builds irregular glass shards radiating from an impact point. Each shard is
 * a clip-path polygon in viewport percentages, plus the vector it should fly
 * along. Aspect is corrected so sectors stay wedge-shaped on wide screens.
 */
function buildShards(cx = 50, cy = 46) {
  const aspect = window.innerWidth / window.innerHeight;
  const shards = [];

  // angle boundaries, jittered so no two wedges are identical
  const angles = [];
  for (let s = 0; s < SECTORS; s += 1) {
    angles.push((s / SECTORS) * Math.PI * 2 + rand(-0.12, 0.12));
  }
  angles.push(angles[0] + Math.PI * 2);

  const pointAt = (radius, angle, jitter) => {
    const r = radius * (1 + rand(-jitter, jitter)) * 100;
    return [cx + (Math.cos(angle) * r) / aspect, cy + Math.sin(angle) * r];
  };

  for (let ring = 0; ring < RINGS.length; ring += 1) {
    const rIn = ring === 0 ? 0 : RINGS[ring - 1];
    const rOut = RINGS[ring];

    for (let s = 0; s < SECTORS; s += 1) {
      const a0 = angles[s];
      const a1 = angles[s + 1];
      const j = ring === 0 ? 0 : JITTER;

      const pts =
        ring === 0
          ? [[cx, cy], pointAt(rOut, a0, j), pointAt(rOut, a1, j)]
          : [
              pointAt(rIn, a0, j),
              pointAt(rOut, a0, j),
              pointAt(rOut, a1, j),
              pointAt(rIn, a1, j),
            ];

      const mid = (a0 + a1) / 2;
      const depth = (rIn + rOut) / 2;

      shards.push({
        clip: `polygon(${pts.map(([x, y]) => `${x.toFixed(2)}% ${y.toFixed(2)}%`).join(', ')})`,
        dx: (Math.cos(mid) * depth * rand(70, 150)) / aspect,
        dy: Math.sin(mid) * depth * rand(70, 150) + depth * 60, // gravity bias
        rot: rand(-70, 70) * depth,
        delay: depth * 260 + rand(0, 90), // inner glass lets go first
        ring,
      });
    }
  }
  return shards;
}

export default function IntroTransition({
  mp4 = '/assets/empowered-intro.mp4',
  mp4Mobile = '/assets/empowered-intro-mobile.mp4',
  webm = '/assets/empowered-intro.webm',
  poster = '/assets/intro-poster.jpg',
  logoFull = '/assets/logo-full.png',
  logoMark = '/assets/logo-mark.png',
  shatterAt = DEFAULT_SHATTER_AT,
  playbackRate = 1,
  once = 'session', // 'session' | 'always' | 'never'
  storageKey = 'empowered:intro-played',
  onReveal,
  onDone,
}) {
  const shouldSkip =
    once === 'never' || (once === 'session' && store.get(storageKey) === '1');

  const [mounted, setMounted] = useState(!shouldSkip);
  const [phase, setPhase] = useState('playing'); // playing | shatter | done
  const [useFallback, setUseFallback] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shards, setShards] = useState(null);
  const [frame, setFrame] = useState(null);

  const videoRef = useRef(null);
  const shattered = useRef(false);
  const revealed = useRef(false);

  const fireReveal = useCallback(() => {
    if (revealed.current) return;
    revealed.current = true;
    document.body.classList.remove('eg-intro-locked');
    onReveal?.();
  }, [onReveal]);

  const finish = useCallback(() => {
    setPhase('done');
    window.setTimeout(() => setMounted(false), 200);
    onDone?.();
  }, [onDone]);

  /* ---- the shatter: the film breaks and the site is behind it ------------ */
  const runShatter = useCallback(() => {
    if (shattered.current) return;
    shattered.current = true;
    store.set(storageKey, '1');

    const video = videoRef.current;
    if (video) {
      video.pause();
      // Hold on the settled lockup rather than letting it drift.
      if (Number.isFinite(video.duration)) {
        video.currentTime = Math.min(shatterAt, Math.max(0, video.duration - 0.05));
      }
    }

    const reduced = prefersReducedMotion();
    const shot = reduced || useFallback ? null : captureFrame(video);

    // No frame to break (reduced motion, autoplay fallback, tainted canvas)?
    // Cross-fade instead — the site still arrives, just quietly.
    if (!shot) {
      setPhase('shatter');
      fireReveal();
      window.setTimeout(finish, reduced ? 300 : 620);
      return;
    }

    setFrame(shot);
    setShards(buildShards());
    setPhase('shatter');

    // The page starts pushing forward while the glass is still falling — the
    // overlap is what makes it read as one motion instead of two.
    window.setTimeout(fireReveal, 180);
    window.setTimeout(finish, 1750);
  }, [fireReveal, finish, shatterAt, storageKey, useFallback]);

  /* ---- lifecycle -------------------------------------------------------- */
  useEffect(() => {
    if (!mounted) {
      fireReveal();
      onDone?.();
      return;
    }
    if (prefersReducedMotion()) {
      // No film for anyone who asked for stillness. Straight to the site.
      fireReveal();
      setMounted(false);
      onDone?.();
      return;
    }
    document.body.classList.add('eg-intro-locked');
    return () => document.body.classList.remove('eg-intro-locked');
  }, [mounted, fireReveal, onDone]);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') runShatter();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mounted, runShatter]);

  /* Start playback; drop to the CSS version if autoplay is refused. */
  useEffect(() => {
    if (!mounted || useFallback) return;
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = playbackRate;
    const attempt = video.play();
    if (attempt?.catch) attempt.catch(() => setUseFallback(true));

    // If nothing has painted after 2.5s, assume the file isn't coming.
    const guard = window.setTimeout(() => {
      if (video.currentTime < 0.05) setUseFallback(true);
    }, 2500);
    return () => window.clearTimeout(guard);
  }, [mounted, useFallback, playbackRate]);

  /* Fallback runs on a timer instead of a media clock. */
  useEffect(() => {
    if (!mounted || !useFallback) return;
    const t = window.setTimeout(runShatter, FALLBACK_RUNTIME);
    return () => window.clearTimeout(t);
  }, [mounted, useFallback, runShatter]);

  if (!mounted) return null;

  const handleTimeUpdate = (e) => {
    const v = e.currentTarget;
    setProgress(Math.min(1, v.currentTime / shatterAt));
    if (v.currentTime >= shatterAt) runShatter();
  };

  return (
    <div
      className="eg-intro"
      data-phase={phase}
      data-glass={shards && frame ? 'true' : 'false'}
      role="presentation"
    >
      <div className="eg-intro__plane">
        {useFallback ? (
          <CssHandshake logoMark={logoMark} logoFull={logoFull} />
        ) : (
          <video
            ref={videoRef}
            className="eg-intro__video"
            poster={poster}
            muted
            playsInline
            autoPlay
            preload="auto"
            crossOrigin="anonymous"
            onTimeUpdate={handleTimeUpdate}
            onEnded={runShatter}
            /* React listens for `error` in the capture phase at the root, so a
               <source> that the browser merely SKIPS (the mobile file, whose
               media query doesn't match on desktop) also lands here. Only treat
               a failure of the <video> itself as a real failure — otherwise the
               fallback fires before the webm is ever tried. */
            onError={(e) => {
              if (e.target === videoRef.current) setUseFallback(true);
            }}
          >
            <source src={mp4Mobile} type="video/mp4" media="(max-width: 640px)" />
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
          </video>
        )}
        <div className="eg-intro__vignette" />
      </div>

      {/* The broken glass: each shard carries the frame the film ended on. */}
      {shards && frame && (
        <div className="eg-glass" aria-hidden="true">
          {shards.map((s, i) => (
            <span
              key={i}
              className="eg-glass__shard"
              style={{
                backgroundImage: `url(${frame})`,
                clipPath: s.clip,
                WebkitClipPath: s.clip,
                '--dx': `${s.dx.toFixed(1)}px`,
                '--dy': `${s.dy.toFixed(1)}px`,
                '--rot': `${s.rot.toFixed(1)}deg`,
                animationDelay: `${s.delay.toFixed(0)}ms`,
              }}
            />
          ))}
          <span className="eg-glass__flash" />
        </div>
      )}

      {phase === 'playing' && (
        <>
          <button type="button" className="eg-intro__skip" onClick={runShatter}>
            Skip intro
          </button>
          <div className="eg-intro__progress" aria-hidden="true">
            <i style={{ width: `${progress * 100}%` }} />
          </div>
        </>
      )}
    </div>
  );
}

/* --------------------------------------------------------------------------
   No-video path: the two halves of the mark fly in from opposite sides and
   lock — the same handshake, rebuilt with transforms. ~40KB instead of 1.7MB.
   -------------------------------------------------------------------------- */
function CssHandshake({ logoMark, logoFull }) {
  return (
    <div className="eg-fallback">
      <div className="eg-fallback__mark" style={{ '--eg-mark-src': `url(${logoMark})` }}>
        <span className="eg-fallback__half eg-fallback__half--l" />
        <span className="eg-fallback__half eg-fallback__half--r" />
        <span className="eg-fallback__flash" />
      </div>
      <div className="eg-fallback__word">
        <img src={logoFull} alt="EmpowerED Careers" />
        <span className="eg-fallback__sheen" />
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Wrap the app in this so the page arrives out of depth as the glass falls.
   -------------------------------------------------------------------------- */
export function SiteStage({ state, children }) {
  const [phase, setPhase] = useState(state === 'ready' ? 'ready' : 'waiting');

  useEffect(() => {
    if (state !== 'entering') {
      setPhase(state);
      return;
    }
    setPhase('entering');
    const t = window.setTimeout(() => setPhase('ready'), 1000);
    return () => window.clearTimeout(t);
  }, [state]);

  return (
    <div className="eg-site" data-state={phase}>
      <div className="eg-site__inner">{children}</div>
    </div>
  );
}
