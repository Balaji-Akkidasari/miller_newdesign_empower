const STAGES = [
  { key: 'source', label: 'Source', caption: 'High-potential talent', badge: null },
  { key: 'foundation', label: 'Foundation', caption: 'Common baseline', badge: '1' },
  { key: 'specialization', label: 'Specialization', caption: 'Deep in one domain', badge: '2' },
  { key: 'expertise', label: 'Expertise', caption: 'Live enterprise work', badge: '3' },
  { key: 'deployed', label: 'Deployed', caption: 'Day-1 billable', badge: 'check' },
];

// Duration/activity for the gap between each pair of stages — the information
// the old flat line was missing.
const SEGMENTS = ['Assess & select', '≈ 12 weeks', '8–16 weeks', 'Live sprints'];

const X = [90, 320, 550, 780, 1000];
const TRACK_Y = 110;

export default function TalentPipeline() {
  return (
    <div className="viz-card reveal" style={{ background: 'var(--paper-alt)', borderColor: 'var(--line)' }}>
      {/* ── Desktop / tablet: horizontal pipeline ─────────────────────────── */}
      <svg
        className="viz hidden sm:block"
        viewBox="0 0 1200 210"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Talent pipeline: Source, Foundation, Specialization, Expertise, Deployed"
      >
        <defs>
          {/* Raw talent (grey) → foundation (deep green) → capability (accent) → billable (gold) */}
          {/* userSpaceOnUse: a horizontal <line> has a zero-height bounding box,
              so the default objectBoundingBox units would collapse the gradient. */}
          <linearGradient id="tp-track" gradientUnits="userSpaceOnUse" x1={X[0]} y1="0" x2={X[4]} y2="0">
            <stop offset="0%" stopColor="#9aa8a0" />
            <stop offset="28%" stopColor="#10A09C" />
            <stop offset="70%" stopColor="#27AAE1" />
            <stop offset="100%" stopColor="#FFD166" />
          </linearGradient>
          <filter id="tp-soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        <style>{`
          @keyframes tp-flow  { to { stroke-dashoffset: -36; } }
          @keyframes tp-pulse {
            0%   { offset-distance: 0%;   opacity: 0; }
            8%   { opacity: 1; }
            88%  { opacity: 1; }
            100% { offset-distance: 100%; opacity: 0; }
          }
          @keyframes tp-halo  {
            0%   { transform: scale(1);   opacity: .5; }
            70%  { transform: scale(1.9); opacity: 0; }
            100% { transform: scale(1.9); opacity: 0; }
          }
          .tp-dash  { animation: tp-flow 1.1s linear infinite; }
          .tp-spark {
            offset-path: path("M 90 ${TRACK_Y} L ${X[4]} ${TRACK_Y}");
            animation: tp-pulse 3.4s cubic-bezier(.45,0,.55,1) infinite;
          }
          .tp-spark-b { animation-delay: 1.13s; }
          .tp-spark-c { animation-delay: 2.26s; }
          .tp-halo {
            transform-box: fill-box;
            transform-origin: center;
            animation: tp-halo 2.4s ease-out infinite;
          }
        `}</style>

        {/* Base rail */}
        <line x1={X[0]} y1={TRACK_Y} x2={X[4]} y2={TRACK_Y} stroke="#d9e4da" strokeWidth="7" strokeLinecap="round" />
        {/* Gradient progression rail */}
        <line x1={X[0]} y1={TRACK_Y} x2={X[4]} y2={TRACK_Y} stroke="url(#tp-track)" strokeWidth="7" strokeLinecap="round" opacity=".95" />
        {/* Directional flow */}
        <line
          x1={X[0]} y1={TRACK_Y} x2={X[4]} y2={TRACK_Y}
          stroke="#ffffff" strokeWidth="2.5" strokeDasharray="5 31" strokeLinecap="round"
          opacity=".75" className="tp-dash"
        />

        {/* Segment chips: what happens between the stages */}
        <g fontFamily="Manrope" textAnchor="middle">
          {SEGMENTS.map((text, i) => {
            const cx = (X[i] + X[i + 1]) / 2;
            const w = text.length * 6.6 + 26;
            return (
              <g key={text}>
                <rect x={cx - w / 2} y="50" width={w} height="26" rx="13" fill="#ffffff" stroke="#dbe6dc" />
                <text x={cx} y="67" fontSize="12.5" fontWeight="700" fill="#10A09C">{text}</text>
                <line x1={cx} y1="76" x2={cx} y2={TRACK_Y - 6} stroke="#cbd8cc" strokeWidth="1.5" strokeDasharray="2 3" />
              </g>
            );
          })}
        </g>

        {/* Travelling energy */}
        <circle className="tp-spark" r="5.5" fill="#fff" filter="url(#tp-soft)" opacity="0" />
        <circle className="tp-spark tp-spark-b" r="4" fill="#FFD166" opacity="0" />
        <circle className="tp-spark tp-spark-c" r="4" fill="#9ED9F1" opacity="0" />

        {/* Stage nodes */}
        <g fontFamily="Manrope" textAnchor="middle">
          {STAGES.map((s, i) => {
            const cx = X[i];
            const isLast = s.badge === 'check';
            const isSource = s.badge === null;
            const r = isLast ? 21 : isSource ? 13 : 17;
            return (
              <g key={s.key}>
                {/* tick down to the label */}
                <line x1={cx} y1={TRACK_Y + r + 3} x2={cx} y2="146" stroke="#cbd8cc" strokeWidth="1.5" />

                {isLast && <circle cx={cx} cy={TRACK_Y} r={r} fill="#10A09C" className="tp-halo" />}

                {isSource ? (
                  <>
                    <circle cx={cx} cy={TRACK_Y} r={r} fill="#fff" stroke="#9aa8a0" strokeWidth="2.5" />
                    <circle cx={cx} cy={TRACK_Y} r="5" fill="#9aa8a0" />
                  </>
                ) : isLast ? (
                  <>
                    <circle cx={cx} cy={TRACK_Y} r={r} fill="#10A09C" />
                    <path
                      d={`M ${cx - 8} ${TRACK_Y} l 5.5 5.5 l 10 -10`}
                      stroke="#FFD166" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </>
                ) : (
                  <>
                    <circle cx={cx} cy={TRACK_Y} r={r} fill="#fff" stroke="#10A09C" strokeWidth={2 + i * 0.5} />
                    <text x={cx} y={TRACK_Y + 5} fontSize="14" fontWeight="800" fill="#10A09C">{s.badge}</text>
                  </>
                )}

                <text x={cx} y="168" fontSize="16" fontWeight="800" fill={isLast ? '#10A09C' : '#235591'}>
                  {s.label}
                </text>
                <text x={cx} y="189" fontSize="12.5" fontWeight="500" fill="#5E6E85" fontFamily="Inter">
                  {s.caption}
                </text>
              </g>
            );
          })}
        </g>

        {/* Deployment fan — one graduate branching into enterprise roles */}
        <g>
          <path d={`M ${X[4] + 22} ${TRACK_Y} C 1055 ${TRACK_Y}, 1055 84, 1082 84`} stroke="#cbd8cc" strokeWidth="2" fill="none" />
          <path d={`M ${X[4] + 22} ${TRACK_Y} L 1082 ${TRACK_Y}`} stroke="#cbd8cc" strokeWidth="2" fill="none" />
          <path d={`M ${X[4] + 22} ${TRACK_Y} C 1055 ${TRACK_Y}, 1055 136, 1082 136`} stroke="#cbd8cc" strokeWidth="2" fill="none" />
          <circle cx="1090" cy="84" r="6.5" fill="#10A09C" />
          <circle cx="1090" cy={TRACK_Y} r="6.5" fill="#27AAE1" />
          <circle cx="1090" cy="136" r="6.5" fill="#10A09C" />
          <text x="1112" y={TRACK_Y + 4} fontSize="12.5" fontWeight="700" fill="#5E6E85" fontFamily="Manrope" textAnchor="start">
            40+ roles
          </text>
        </g>
      </svg>

      {/* ── Mobile: the same pipeline, stacked so it stays legible ────────── */}
      <ol className="sm:hidden flex flex-col gap-0 m-0 p-0 list-none">
        {STAGES.map((s, i) => {
          const isLast = s.badge === 'check';
          const isSource = s.badge === null;
          return (
            <li key={s.key} className="flex gap-[14px]">
              <div className="flex flex-col items-center shrink-0">
                <span
                  className={`flex items-center justify-center rounded-full font-extrabold text-[13px] ${
                    isLast
                      ? 'size-[34px] bg-[#10A09C] text-[#FFD166]'
                      : isSource
                        ? 'size-[26px] bg-white border-[2.5px] border-[#9aa8a0]'
                        : 'size-[30px] bg-white border-[2.5px] border-[#10A09C] text-[#10A09C]'
                  }`}
                >
                  {isLast ? '✓' : isSource ? '' : s.badge}
                </span>
                {i < STAGES.length - 1 && (
                  <span
                    className="w-[3px] flex-1 min-h-[34px] rounded-full my-[4px]"
                    style={{ background: 'linear-gradient(#D8F0FA, #10A09C, #27AAE1)' }}
                  />
                )}
              </div>
              <div className="pb-[18px]">
                <p className="text-[15px] font-extrabold text-[#235591] leading-tight">{s.label}</p>
                <p className="text-[13px] text-[#5E6E85]">{s.caption}</p>
                {i < SEGMENTS.length && (
                  <span className="inline-block mt-[7px] rounded-full border border-[#D8E7F6] bg-white px-[10px] py-[3px] text-[11.5px] font-bold text-[#10A09C]">
                    {SEGMENTS[i]}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
