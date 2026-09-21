import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/manifest';
import scrollShot1 from '../assets/scroll-shot-1.png';
import scrollShot2 from '../assets/scroll-shot-2.png';
import scrollShot3 from '../assets/scroll-shot-3.png';
import archImage from '../assets/arch-image.png';
import FactoryModel from '../components/FactoryModel';
import TalentPipeline from '../components/TalentPipeline';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Count-up stat chip — the "40+ roles" style numbers roll in once visible.
   Numbers land instantly for reduced-motion users. */
function CountUp({ to, suffix = '', duration = 900 }) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setVal(to);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          const t0 = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / duration);
            setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <strong ref={ref} data-num={to}>{val}{suffix}</strong>;
}

/* The edu.google.com scroll showcase — ONE pinned tablet mockup. The device
   holds its spot in the viewport while a tall section scrolls past it: it
   tilts in from the right, settles flat, then drifts up and away. The copy
   steps ("acts") light up in sequence and the screen crossfades between the
   shots below. Screen transforms stay on the compositor; reduced motion
   collapses everything to a static, fully visible stack. */

// Slide per act. Slide 1 is the confirmed screen — drop the extra screenshots
// in here (any aspect; `object-fit: cover` fills the 4:3 screen edge to edge).
const SCROLL_SHOTS = [
  { key: 'admit', src: scrollShot1, alt: 'AI-powered skills assessment mapping each learner to their future role' },
  { key: 'build', src: scrollShot2, alt: 'Hands-on product engineering labs in the factory' },
  { key: 'deploy', src: scrollShot3, alt: 'Deployment into enterprise teams as Day-1 billable professionals' },
];

const ACTS = [
  { num: '01', title: 'Assess & admit', text: 'AI-powered skills assessments map each learner to the role they will ship into.' },
  { num: '02', title: 'Train & build', text: 'Hands-on product labs turn theory into portfolio work that ships to real users.' },
  { num: '03', title: 'Deploy & certify', text: 'Talent graduates as Day-1 billable professionals inside enterprise teams.' },
];

function ParallaxBanner() {
  const secRef = React.useRef(null);
  const deviceRef = React.useRef(null);
  const tabletRef = React.useRef(null);
  const [active, setActive] = React.useState(0);

  /* The mockup takes the primary screenshot's own size: the frame is capped
     at 650px so the device anchors the showcases field, and the inner
     screen's ratio is set to the image's exact ratio (compensating for the
     10px bezel padding) — zero crop. */
  React.useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const t = tabletRef.current;
      const wrap = t ? t.parentNode : null;
      if (!t || !wrap || img.naturalWidth <= 0 || img.naturalHeight <= 0) return;
      const inset = 2 * 10; // 10px bezel padding, box-sizing: border-box
      const apply = () => {
        const cap = wrap.clientWidth || 0;
        const nw = img.naturalWidth;
        const nh = img.naturalHeight;
        const w = Math.min(nw, 610, cap > 0 ? cap : nw);
        const innerH = (w - inset) * (nh / nw);
        t.style.width = `${w}px`;
        t.style.height = `${innerH + inset}px`;
        t.style.aspectRatio = 'auto';
        t.style.maxWidth = '100%';
      };
      apply();
      window.addEventListener('resize', apply);
      return () => window.removeEventListener('resize', apply);
    };
    img.src = SCROLL_SHOTS[0].src;
  }, []);

  React.useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;
    if (prefersReducedMotion()) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const r = sec.getBoundingClientRect();
      const total = sec.offsetHeight - vh; // distance the pin travels
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;

      // Device: tilt-to-flat entrance (from the right), settle, then drift up
      // and scale away as the pin exits — Google's settle-and-leave gesture.
      const enter = p < 0.16 ? 1 - p / 0.16 : 0;
      const exit = p > 0.9 ? (p - 0.9) / 0.1 : 0;
      const e = enter * enter;
      const rise = enter * 56 - exit * 92;
      const sk = 1 - enter * 0.08 - exit * 0.12;
      if (deviceRef.current) {
        deviceRef.current.style.transform =
          `perspective(1500px) translate3d(${(enter * 46).toFixed(2)}px, ${rise.toFixed(2)}px, 0)` +
          ` rotateY(${(e * -16).toFixed(2)}deg) rotateX(${(e * 8).toFixed(2)}deg) scale(${sk.toFixed(3)})`;
        deviceRef.current.style.opacity = (1 - exit * 0.85).toFixed(2);
      }

      setActive(Math.min(ACTS.length - 1, Math.max(0, Math.floor(p * ACTS.length))));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="tab-scroll" id="edu-scroll" ref={secRef}>
      <div className="tab-pin">
        <div className="tab-copy">
          <span className="eyebrow">The EmpowerED Experience</span>
          <h2>One scroll.<br /><mark>The whole factory</mark> comes alive.</h2>
          <p>Watch talent move from raw potential to Day-1 billable — engineered through the same scroll.</p>
          <ol className="acts">
            {ACTS.map((a, n) => (
              <li key={a.num} className={n === active ? 'on' : ''} onClick={() => setActive(n)} role="button" tabIndex={0} aria-pressed={n === active} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(n); } }}>
                <span className="act-num">{a.num}</span>
                <div><strong>{a.title}</strong><span>{a.text}</span></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="tab-device" ref={deviceRef}>
          <div className="tablet" ref={tabletRef}>
            <span className="tab-cam" aria-hidden="true"></span>
            <span className="tab-btn tab-btn-l" aria-hidden="true"></span>
            <span className="tab-btn tab-btn-t" aria-hidden="true"></span>
            <div className="tab-screen">
              {SCROLL_SHOTS.map((s, n) => (
                <img key={s.key} src={s.src} alt={s.alt} className={n === active ? 'on' : ''} loading="eager" decoding="async" />
              ))}
            </div>
          </div>
          <span className="tab-glow" aria-hidden="true"></span>
        </div>
      </div>
      <svg className="tab-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 60 Q 240 20 480 45 T 960 45 T 1440 40 V90 H0 Z" fill="#F5F9FE" /><path d="M0 70 Q 300 40 600 58 T 1200 58 T 1440 55 V90 H0 Z" fill="#E9F3FC" /></svg>
    </section>
  );
}

export default function Home() {
  // Scroll-linked hero parallax — the scene recedes and drifts as the story
  // begins, an invitation to keep scrolling. No-op under reduced motion.
  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const onScroll = () => {
      const y = Math.min(window.scrollY, 900);
      document.documentElement.style.setProperty('--sp', (y / 600).toFixed(3));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.documentElement.style.removeProperty('--sp');
    };
  }, []);

  return (
    <>
<section className="hero">
    <div className="inner">
      <div className="statement reveal">
        <h1>
          <span className="row">
            <span>Build</span>
            <span className="pillrow" role="img" aria-label="AI Talent Factory emblem">
              <span className="pil pil-tint" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg></span>
              <span className="pil pil-mon" aria-hidden="true">ED</span>
              <button className="pil pil-play" type="button" aria-label="Watch the factory tour"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg></button>
            </span>
            <span>Your</span>
          </span>
          <span className="row row2">AI career edge</span>
        </h1>
      </div>

      <div className="stage">
        <div className="col col-l reveal" style={{ '--d': '.08s' }}>
          <div className="mnfst">
            <span className="badge-mini">AI Talent Factory</span>
            <p>A next-generation Talent Transformation Company. Our AI Talent Factory turns raw potential into enterprise-ready professionals — through role-based pathways, hands-on product engineering, and real-world deployment.</p>
            <div className="fcard">
              <div className="fh"><span className="tag">Fellowship 01</span><span className="live">Open</span></div>
              <div className="fb">
                <span className="fic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></span>
                <div><h4>AI Engineering Residency</h4><p className="subline">12-Week Residency · Hybrid</p></div>
              </div>
              <div className="ff"><span>Next cohort: rolling admissions</span><b>Spots limited</b></div>
            </div>
            <div className="alumni">
              <div className="stack"><span className="av">AK</span><span className="av">PS</span><span className="av">JR</span></div>
              <p className="ap"><b><CountUp to={2400} suffix="+" /></b> alumni placed at Azure, AWS &amp; enterprise tech hubs</p>
            </div>
            <Link to="/programs" className="btn btn-hero">Explore the programs <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></Link>
          </div>
        </div>

        <div className="col col-c reveal" style={{ '--d': '.18s' }}>
          <div className="arch">
            <span className="halo" aria-hidden="true"></span>
            <div className="frame">
              <img src={archImage} alt="EmpowerED AI talent factory hero visual" />
              <span className="veil" aria-hidden="true"></span>
              <div className="hud">
                <div className="row"><span className="tag"><span className="dot" aria-hidden="true"></span>EmpowerED Labs</span><span className="val">96% Day-1 ready</span></div>
                <div className="bar"><i aria-hidden="true"></i></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col col-r reveal" style={{ '--d': '.28s' }}>
          <div className="mcard">
            <div className="thumb">
              <img src={assets['track-ai-data']} alt="Generative AI and data engineering pathway" />
              <span className="flag">Pathway track</span>
              <span className="rate">★ 4.9</span>
            </div>
            <h3>Generative AI &amp; Data Engineering</h3>
            <p className="author">Led by industry leads from Microsoft, Lenovo &amp; Teceze.</p>
            <div className="foot">
              <button className="book" type="button" aria-label="Save this pathway"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg></button>
              <Link to="/programs" className="cur">Syllabus <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg></Link>
            </div>
          </div>
          <div className="accr">
            <span>Built on enterprise partnerships</span>
            <b>Delivered with the Teceze ecosystem</b>
          </div>
        </div>
      </div>

      <div className="partnerbar reveal" style={{ '--d': '.38s' }}>
        <span className="lbl">Powering alliances &amp; output</span>
        <div className="logos">
          <span>Microsoft Azure</span><span>AWS</span><span>Google Cloud</span><span>Lenovo</span><span>Dell</span><span>HP</span><span>CrowdStrike</span><span>Zoho</span>
        </div>
      </div>

      <a className="cue reveal" href="#edu-scroll" style={{ '--d': '.48s' }}><span className="cue-pip"></span><span>Scroll to explore</span></a>
    </div>
  </section>

  <ParallaxBanner />

  <section className="adv-sec">
    <span className="glow g1" style={{ top: '-90px', left: '12%' }} aria-hidden="true"></span>
    <span className="glow g2" style={{ bottom: '-140px', right: '4%' }} aria-hidden="true"></span>
    <span className="grid-ovl" aria-hidden="true"></span>
    <div className="shead reveal">
      <span className="eyebrow">Enterprise Talent Advantage</span>
      <h2>A trusted <mark>pipeline of high-quality talent</mark> for employers.</h2>
      <p className="muted">AI-verified skills, measured outcomes and enterprise-readiness — a workforce built for deployment day one.</p>
    </div>

    <div className="adv-device reveal">
      <div className="tablet adv-tab">
        <span className="tab-cam" aria-hidden="true"></span>
        <span className="tab-btn tab-btn-l" aria-hidden="true"></span>
        <span className="tab-btn tab-btn-t" aria-hidden="true"></span>
        <div className="tab-screen adv-screen">
          <div className="adv-pane">
            <span className="qr-pin"><span className="dot" aria-hidden="true"></span>Live talent pipeline</span>
            <h3>Your next role is a scan away</h3>
            <p>Register once to join a talent pipeline trusted by 50+ enterprise hiring partners — AI-matched, portfolio-backed, referral-free.</p>
            <ul className="adv-points">
              <li><i aria-hidden="true"></i>AI-verified, portfolio-backed profiles</li>
              <li><i aria-hidden="true"></i>Matched to open enterprise roles</li>
              <li><i aria-hidden="true"></i>Direct connect with hiring partners</li>
            </ul>
          </div>
          <div className="qr-zone">
            <img className="qr-img" src={assets['qrcode']} alt="Scan to connect QR code" />
            <div className="qr-info">
              <p className="qr-scan">Scan &amp; join the talent pipeline in seconds</p>
              <div className="qr-meta"><span>✓ Instant access</span><span>✓ No sign-up</span></div>
            </div>
          </div>
          <div className="adv-stats advantage reveal">
            <div className="adv"><div className="iconwrap ic" style={{ margin: '0', padding: '8px' }}><svg className="ico" viewBox="0 0 32 32"><rect fill="#10A09C" x="6" y="6" width="20" height="20" rx="5"/><rect fill="#27AAE1" x="11" y="11" width="10" height="10" rx="2.5"/><rect fill="#27AAE1" x="14.6" y="1.5" width="2.8" height="5"/><rect fill="#27AAE1" x="14.6" y="25.5" width="2.8" height="5"/><rect fill="#27AAE1" x="1.5" y="14.6" width="5" height="2.8"/><rect fill="#27AAE1" x="25.5" y="14.6" width="5" height="2.8"/></svg></div><div><strong>AI</strong><span>AI-Powered Assessments</span></div></div>
            <div className="adv"><div className="iconwrap ic" style={{ margin: '0', padding: '8px' }}><svg className="ico" viewBox="0 0 32 32"><rect fill="#10A09C" x="5" y="18" width="22" height="10" rx="5"/><circle fill="#27AAE1" cx="16" cy="10" r="6.5"/></svg></div><div><CountUp to={40} suffix="+" /><span>Enterprise Roles</span></div></div>
            <div className="adv"><div className="iconwrap ic" style={{ margin: '0', padding: '8px' }}><svg className="ico" viewBox="0 0 32 32"><polygon fill="#10A09C" points="16,4 30,11 16,18 2,11"/><rect fill="#27AAE1" x="9" y="14" width="14" height="10" rx="1.5"/><rect fill="#27AAE1" x="27" y="11" width="2.4" height="9" rx="1.2"/></svg></div><div><CountUp to={10} suffix="+" /><span>Learning Tracks</span></div></div>
            <div className="adv"><div className="iconwrap ic" style={{ margin: '0', padding: '8px' }}><svg className="ico" viewBox="0 0 32 32"><rect fill="#10A09C" x="3" y="15" width="7" height="13" rx="1"/><rect fill="#10A09C" x="12.5" y="9" width="7" height="19" rx="1"/><rect fill="#10A09C" x="22" y="4" width="7" height="24" rx="1"/><rect fill="#27AAE1" x="3" y="26" width="26" height="3"/></svg></div><div><CountUp to={10} suffix="+" /><span>Industry Verticals</span></div></div>
            <div className="adv"><div className="iconwrap ic" style={{ margin: '0', padding: '8px' }}><svg className="ico" viewBox="0 0 32 32"><rect fill="#10A09C" x="4" y="15" width="24" height="10" rx="5"/><circle fill="#10A09C" cx="12" cy="15" r="6"/><circle fill="#10A09C" cx="20" cy="13" r="7.5"/><rect fill="#27AAE1" x="11" y="18" width="10" height="3" rx="1.5"/></svg></div><div><CountUp to={100} suffix="+" /><span>Real-World Labs</span></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="shead reveal"><span className="eyebrow">The Impact We Create</span>
      <h2>From raw potential to <mark>Day-1 billable</mark> professionals.</h2>
      <p className="muted">Our AI Talent Factory integrates structured learning, hands-on labs, real-world projects, industry mentorship, continuous assessment, and career deployment into one comprehensive transformation journey.</p></div>
    <img src={assets['home-pipeline']} alt="A figure transforming through three stages into a confident professional" className="banner-illustration reveal"/>
    <TalentPipeline />
  </section>

  
      <FactoryModel />

<section>
    <div className="shead reveal"><span className="eyebrow">Traditional vs. Empowered Model</span>
      <h2>Traditional learning creates trainees.<br/>Industry needs <mark>product builders</mark>.</h2></div>
    <div className="cmp reveal">
      <div className="card old"><img src={assets['contrast-classroom']} alt="A passive learner in a static classroom" className="contrast-img"/><h3>Traditional Education</h3><ul>
        <li><i>—</i>Theory-first, lecture-heavy</li><li><i>—</i>Isolated assignments, no agile exposure</li><li><i>—</i>6–12 months to productivity</li><li><i>—</i>Success measured by course completion</li>
      </ul></div>
      <div className="card new"><img src={assets['contrast-factory']} alt="An active learner building in a dynamic factory setting" className="contrast-img"/><h3>EmpowerED Factory</h3><ul>
        <li><i>✓</i>Product-first, agile squads</li><li><i>✓</i>Real deployments &amp; sprint delivery</li><li><i>✓</i>Day-1 billable professionals</li><li><i>✓</i>Success measured by career outcomes</li>
      </ul></div>
    </div>
    <p className="cmp-note reveal">“The gap between graduation and employability isn't a skills gap. <b>It's an engineering culture gap.</b>” — EmpowerED Careers Founding Philosophy</p>
  </section>

  
  <section className="dark strip">
    <span className="glow" style={{bottom: '-100px', right: '10%'}}></span><span className="grid-ovl"></span>
    <div className="inner">
      <div className="shead reveal"><span className="eyebrow">Inside the Factory</span>
        <h2>One pathway. Three stages.</h2>
        <p>Foundational capability, deep Specialization, and deployed Expertise — the whole journey, structured end to end.</p></div>
      <div className="row reveal">
        <div className="box"><div className="num" style={{background: '#27AAE1'}}>1</div><small>≈ 12 WEEKS</small><h3>Foundational</h3><p>A common baseline for every professional, from any background.</p></div>
        <div className="box"><div className="num" style={{background: '#10A09C'}}>2</div><small>8–16 WEEKS</small><h3>Specialization</h3><p>Deep capability in one high-demand domain.</p></div>
        <div className="box"><div className="num" style={{background: '#FFD166'}}>3</div><small>ENTERPRISE READY</small><h3>Expertise</h3><p>Deployed on real enterprise work until Day-1 billable.</p></div>
      </div>
      <Link to="/programs" className="btn btn-green">Explore the programs →</Link>
    </div>
  </section>

  
  <section>
    <div className="hero-grid" style={{alignItems: 'center'}}>
      <div className="reveal">
        <span className="eyebrow">AI for Everyone</span>
        <h2 style={{fontSize: 'clamp(26px,3.4vw,38px)', margin: '14px 0 14px'}}>Every profession. <mark>AI enabled</mark>. Future ready.</h2>
        <p className="muted" style={{fontSize: '16px', marginBottom: '22px'}}>AI is the new digital literacy. We equip students, professionals, entrepreneurs, and organizations with practical, profession-specific AI skills that improve productivity, decision-making, creativity, and career growth.</p>
        <Link to="/ai-for-everyone" className="btn btn-outline">Explore AI for Everyone →</Link>
      </div>
      <div className="reveal"><img src={assets['home-ai-teaser']} alt="A professional working naturally alongside an AI assistant"/></div>
    </div>
  </section>

  
  <section className="band">
    <div className="shead reveal"><span className="eyebrow">Who We Serve</span>
      <h2>End-to-end talent transformation for everyone.</h2>
      <p className="muted">We help individuals, enterprises, institutions, startups, and governments build future-ready Human + AI capabilities.</p></div>
    <div className="offers reveal">
      <Link to="/solutions#sol-enterprises" className="offer lead"><div className="iconwrap"><svg className="ico" viewBox="0 0 32 32"><rect fill="#9ED9F1" x="5" y="7" width="22" height="21" rx="2.5"/><rect fill="#FFD166" x="9" y="11" width="5" height="5" rx="1"/><rect fill="#FFD166" x="18" y="11" width="5" height="5" rx="1"/><rect fill="#FFD166" x="9" y="19" width="5" height="5" rx="1"/><rect fill="#FFD166" x="18" y="19" width="5" height="5" rx="1"/></svg></div><span className="tg">For Enterprises</span><h3>Your managed, enterprise-ready talent pipeline.</h3><p>Capability assessment, graduate hiring &amp; deployment, BOT talent models, and dedicated AI Talent Factories.</p><span className="lnk">Explore →</span></Link>
      <Link to="/solutions#sol-institutions" className="offer sub"><div className="iconwrap"><svg className="ico" viewBox="0 0 32 32"><polygon fill="#9ED9F1" points="16,2 28,8.5 28,23.5 16,30 4,23.5 4,8.5"/><polygon fill="#FFD166" points="16,9 18.6,14.6 24.5,15.2 20,19.2 21.3,25 16,22 10.7,25 12,19.2 7.5,15.2 13.4,14.6"/></svg></div><span className="tg">For Universities</span><h3>Turn your campus into a future-workforce hub.</h3><p>Industry-aligned curriculum, AI Centres of Excellence, faculty development, and placement readiness.</p><span className="lnk">Explore →</span></Link>
      <Link to="/solutions#sol-students" className="offer sub"><div className="iconwrap"><svg className="ico" viewBox="0 0 32 32"><polygon fill="#10A09C" points="16,1.5 22.5,15 16,11.5 9.5,15"/><rect fill="#10A09C" x="12.5" y="11" width="7" height="13" rx="1"/><polygon fill="#10A09C" points="9.5,15 5,25 9.5,22"/><polygon fill="#10A09C" points="22.5,15 27,25 22.5,22"/><circle fill="#27AAE1" cx="16" cy="13" r="3.2"/><rect fill="#27AAE1" x="13.8" y="24" width="4.4" height="6.5" rx="2.2"/></svg></div><span className="tg">For Students &amp; Professionals</span><h3>Launch or reinvent your career.</h3><p>Career-readiness pathways, upskilling &amp; reskilling, certifications, and career assurance.</p><span className="lnk">Explore →</span></Link>
    </div>
    <div style={{textAlign: 'center', marginTop: '26px'}}><Link to="/solutions" className="btn btn-dark">See all six client types →</Link></div>
  </section>

  
  <section>
    <div className="shead center reveal" style={{margin: '0 auto 36px'}}><span className="eyebrow">In Collaboration with Teceze</span>
      <h2>Transforming the AI era together</h2>
      <p className="muted">A global partnership ecosystem across cloud, networking, cybersecurity, and enterprise platforms — powering real-world labs and enterprise deployment.</p></div>
    <div className="marquee reveal" aria-label="Partner ecosystem"><div className="mtrack"><div className="plist mset"><span>Microsoft Azure</span><span>AWS</span><span>Google Cloud</span><span>Lenovo</span><span>Dell</span><span>HP</span><span>CrowdStrike</span><span>Fortinet</span><span>Mimecast</span><span>Zoho</span><span>Infosys</span><span>HCL</span><span>Wipro</span></div><div className="plist mset" aria-hidden="true"><span>Microsoft Azure</span><span>AWS</span><span>Google Cloud</span><span>Lenovo</span><span>Dell</span><span>HP</span><span>CrowdStrike</span><span>Fortinet</span><span>Mimecast</span><span>Zoho</span><span>Infosys</span><span>HCL</span><span>Wipro</span></div></div></div>
  </section>

  
  <section className="band">
    <div className="shead center reveal" style={{margin: '0 auto 40px'}}><span className="eyebrow">Proof</span>
      <h2>From potential to production</h2></div>
    <div className="tst reveal">
      <div className="q"><p>“EmpowerED transformed my career. Hands-on AI engineering and real production experience gave me the confidence to land my dream role. I was billable from day one.”</p><div className="who"><span className="av">PS</span><div><strong>Priya Sharma</strong><span>AI Engineer</span></div></div></div>
      <div className="q"><p>“From a non-IT background, I was skeptical. But the structured AWS pathway and enterprise simulations prepared me perfectly. I switched careers in just 18 weeks.”</p><div className="who"><span className="av">RK</span><div><strong>Rajesh Kumar</strong><span>Cloud Engineer</span></div></div></div>
      <div className="q"><p>“The enterprise partnership connected me directly with my employer. Working real SIEM platforms inside an agile squad made all the difference.”</p><div className="who"><span className="av">AP</span><div><strong>Aisha Patel</strong><span>Cybersecurity Analyst</span></div></div></div>
    </div>
  </section>

  <section className="ctaband"><svg className="cta-shape top" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 60 Q 360 0 720 30 T 1440 20 V60 H0 Z" fill="var(--paper)"/></svg><span className="glow"></span><span className="grid-ovl"></span><span className="cta-blob b1"></span><span className="cta-blob b2"></span><span className="cta-blob b3"></span><div className="inner reveal">
    <img src={assets['hero-handshake-detail-v3']} alt="A robotic hand and a human hand clasped together" className="cta-img"/>
    <h2>Learn. Build. Validate. Deploy.</h2>
    <p>We transform talent into enterprise-ready professionals equipped to succeed in the AI-powered future of work.</p>
    <div className="ctas"><Link to="/contact" className="btn btn-yellow">Get Started</Link><Link to="/#factory-model" className="btn btn-ghost">Explore the Factory</Link></div>
  </div><svg className="cta-shape bot" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0 H1440 V28 Q 1080 64 720 34 T 0 46 Z" fill="#1D4677"/></svg></section>
    </>
  );
}
