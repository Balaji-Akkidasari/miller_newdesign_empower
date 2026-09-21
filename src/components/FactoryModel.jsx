import vector1 from '../assets/factory-model/vector1.svg';
import vector2 from '../assets/factory-model/vector2.svg';
import vector3 from '../assets/factory-model/vector3.svg';
import vector4 from '../assets/factory-model/vector4.svg';
import vector5 from '../assets/factory-model/vector5.svg';
import vector6 from '../assets/factory-model/vector6.svg';

const steps = [
  {
    num: '1',
    title: 'Student',
    desc: 'Begins the journey with strong academic foundations and a growth mindset, ready to transform learning into real-world impact through structured AI and engineering programs.',
    img: vector2,
  },
  {
    num: '2',
    title: 'Squad Member',
    desc: 'Collaborates within agile engineering squads, participating in sprint planning, peer learning, and team-based product development to build industry-ready skills.',
    img: vector6,
  },
  {
    num: '3',
    title: 'Engineer',
    desc: 'Applies technical expertise to develop, test, and deploy real enterprise solutions, gaining hands-on experience with modern tools, frameworks, and AI technologies.',
    img: vector5,
  },
  {
    num: '4',
    title: 'Product Contributor',
    desc: 'Contributes directly to production-grade features, solving business challenges while building a portfolio of real-world engineering achievements.',
    img: vector4,
  },
  {
    num: '5',
    title: 'Enterprise Professional',
    desc: 'Graduates as a day-one billable professional, equipped with technical excellence, product thinking, and enterprise experience to thrive in global organizations.',
    img: vector1,
  },
];

export default function FactoryModel() {
  return (
    <section
      id="factory-model"
      aria-labelledby="heading-factory-model"
      className="relative bg-[#052010] py-[80px] lg:py-[100px] px-[20px] sm:px-[40px] overflow-hidden"
      style={{
        scrollMarginTop: '110px',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      {/* Background glow effects */}
      <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#efb81c]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">

        {/* Interactive Responsive Layout wrapper */}
        <div className="relative w-full h-auto lg:h-[850px] flex flex-col lg:block items-center">

          {/* SVG Connecting lines layer for desktop — electric lightning effect */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none hidden lg:block"
            viewBox="0 0 1200 850"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Electric glow filter */}
              <filter id="lightning-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Outer soft glow */}
              <filter id="outer-glow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Spark particle glow */}
              <filter id="spark-glow" x="-200%" y="-200%" width="500%" height="500%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Gradient along paths for color variation */}
              <linearGradient id="lightning-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#EFB81C" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFF176" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="lightning-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF176" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#EFB81C" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            <style>{`
              /* Base flicker for all lines */
              @keyframes flicker {
                0%,100% { opacity: 1; }
                8%       { opacity: 0.55; }
                16%      { opacity: 1; }
                24%      { opacity: 0.7; }
                40%      { opacity: 1; }
                56%      { opacity: 0.6; }
                72%      { opacity: 1; }
                88%      { opacity: 0.8; }
              }
              @keyframes flicker2 {
                0%,100% { opacity: 1; }
                12%      { opacity: 0.4; }
                28%      { opacity: 1; }
                44%      { opacity: 0.65; }
                60%      { opacity: 1; }
                76%      { opacity: 0.5; }
              }
              @keyframes flicker3 {
                0%,100% { opacity: 0.9; }
                20%      { opacity: 0.35; }
                36%      { opacity: 0.9; }
                52%      { opacity: 0.55; }
                68%      { opacity: 0.9; }
              }
              @keyframes flicker4 {
                0%,100% { opacity: 1; }
                6%       { opacity: 0.5; }
                18%      { opacity: 0.9; }
                34%      { opacity: 0.4; }
                50%      { opacity: 1; }
                66%      { opacity: 0.7; }
                82%      { opacity: 0.95; }
              }
              @keyframes flicker5 {
                0%,100% { opacity: 0.95; }
                10%      { opacity: 0.45; }
                22%      { opacity: 1; }
                38%      { opacity: 0.6; }
                54%      { opacity: 0.95; }
                70%      { opacity: 0.35; }
                86%      { opacity: 0.9; }
              }

              /* Spark particle travel animations for each path */
              @keyframes spark-path1 {
                0%   { offset-distance: 0%;   opacity: 0; transform: scale(0.5); }
                5%   { opacity: 1;             transform: scale(1.4); }
                90%  { opacity: 0.8;           transform: scale(1); }
                100% { offset-distance: 100%; opacity: 0;             transform: scale(0.3); }
              }
              @keyframes spark-path2 {
                0%   { offset-distance: 0%;   opacity: 0; transform: scale(0.5); }
                5%   { opacity: 1;             transform: scale(1.4); }
                90%  { opacity: 0.8;           transform: scale(1); }
                100% { offset-distance: 100%; opacity: 0;             transform: scale(0.3); }
              }
              @keyframes spark-path3 {
                0%   { offset-distance: 0%;   opacity: 0; transform: scale(0.5); }
                5%   { opacity: 1;             transform: scale(1.4); }
                90%  { opacity: 0.8;           transform: scale(1); }
                100% { offset-distance: 100%; opacity: 0;             transform: scale(0.3); }
              }
              @keyframes spark-path4 {
                0%   { offset-distance: 0%;   opacity: 0; transform: scale(0.5); }
                5%   { opacity: 1;             transform: scale(1.4); }
                90%  { opacity: 0.8;           transform: scale(1); }
                100% { offset-distance: 100%; opacity: 0;             transform: scale(0.3); }
              }
              @keyframes spark-path5 {
                0%   { offset-distance: 0%;   opacity: 0; transform: scale(0.5); }
                5%   { opacity: 1;             transform: scale(1.4); }
                90%  { opacity: 0.8;           transform: scale(1); }
                100% { offset-distance: 100%; opacity: 0;             transform: scale(0.3); }
              }

              .spark1 {
                offset-path: path("M 600 230 C 600 310, 565 310, 565 390");
                animation: spark-path1 1.8s ease-in-out infinite;
              }
              .spark1b {
                offset-path: path("M 600 230 C 600 310, 565 310, 565 390");
                animation: spark-path1 1.8s ease-in-out infinite;
                animation-delay: 0.9s;
              }
              .spark2 {
                offset-path: path("M 870 310 C 765 310, 765 425, 660 425");
                animation: spark-path2 2.1s ease-in-out infinite;
                animation-delay: 0.3s;
              }
              .spark2b {
                offset-path: path("M 870 310 C 765 310, 765 425, 660 425");
                animation: spark-path2 2.1s ease-in-out infinite;
                animation-delay: 1.35s;
              }
              .spark3 {
                offset-path: path("M 870 740 C 765 740, 765 460, 660 460");
                animation: spark-path3 2.4s ease-in-out infinite;
                animation-delay: 0.6s;
              }
              .spark3b {
                offset-path: path("M 870 740 C 765 740, 765 460, 660 460");
                animation: spark-path3 2.4s ease-in-out infinite;
                animation-delay: 1.8s;
              }
              .spark4 {
                offset-path: path("M 330 740 C 435 740, 435 460, 540 460");
                animation: spark-path4 2.2s ease-in-out infinite;
                animation-delay: 0.15s;
              }
              .spark4b {
                offset-path: path("M 330 740 C 435 740, 435 460, 540 460");
                animation: spark-path4 2.2s ease-in-out infinite;
                animation-delay: 1.25s;
              }
              .spark5 {
                offset-path: path("M 330 340 C 435 340, 435 425, 540 425");
                animation: spark-path5 1.9s ease-in-out infinite;
                animation-delay: 0.45s;
              }
              .spark5b {
                offset-path: path("M 330 340 C 435 340, 435 425, 540 425");
                animation: spark-path5 1.9s ease-in-out infinite;
                animation-delay: 1.4s;
              }

              /* Dash flow for secondary paths */
              @keyframes dash-flow {
                to { stroke-dashoffset: -28; }
              }
              .dash-flow { animation: dash-flow 0.6s linear infinite; }
            `}</style>

            {/* ─── PATH 1 : Factory → Student (Top Center) ─── */}
            <g style={{ animation: 'flicker 3.2s ease-in-out infinite' }}>
              {/* Outer soft glow */}
              <path d="M 600 230 C 600 310, 565 310, 565 390" stroke="#EFB81C" strokeWidth="8" strokeLinecap="round" opacity="0.18" filter="url(#outer-glow)" />
              {/* Main electric core */}
              <path d="M 600 230 C 600 310, 565 310, 565 390" stroke="url(#lightning-grad-1)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lightning-glow)" opacity="0.95" />
              {/* Inner bright white core */}
              <path d="M 600 230 C 600 310, 565 310, 565 390" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              {/* Dashed energy flow */}
              <path d="M 600 230 C 600 310, 565 310, 565 390" stroke="#FFF9C4" strokeWidth="1.5" strokeDasharray="4 10" strokeLinecap="round" opacity="0.7" className="dash-flow" />
            </g>

            {/* ─── PATH 2 : Factory → Squad Member (Middle Right) ─── */}
            <g style={{ animation: 'flicker2 2.8s ease-in-out infinite' }}>
              <path d="M 870 310 C 765 310, 765 425, 660 425" stroke="#EFB81C" strokeWidth="8" strokeLinecap="round" opacity="0.18" filter="url(#outer-glow)" />
              <path d="M 870 310 C 765 310, 765 425, 660 425" stroke="url(#lightning-grad-2)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lightning-glow)" opacity="0.95" />
              <path d="M 870 310 C 765 310, 765 425, 660 425" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <path d="M 870 310 C 765 310, 765 425, 660 425" stroke="#FFF9C4" strokeWidth="1.5" strokeDasharray="4 10" strokeLinecap="round" opacity="0.7" className="dash-flow" style={{ animationDelay: '-0.3s' }} />
            </g>

            {/* ─── PATH 3 : Factory → Engineer (Bottom Right) ─── */}
            <g style={{ animation: 'flicker3 3.5s ease-in-out infinite' }}>
              <path d="M 870 740 C 765 740, 765 460, 660 460" stroke="#EFB81C" strokeWidth="8" strokeLinecap="round" opacity="0.18" filter="url(#outer-glow)" />
              <path d="M 870 740 C 765 740, 765 460, 660 460" stroke="url(#lightning-grad-1)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lightning-glow)" opacity="0.95" />
              <path d="M 870 740 C 765 740, 765 460, 660 460" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <path d="M 870 740 C 765 740, 765 460, 660 460" stroke="#FFF9C4" strokeWidth="1.5" strokeDasharray="4 10" strokeLinecap="round" opacity="0.7" className="dash-flow" style={{ animationDelay: '-0.6s' }} />
            </g>

            {/* ─── PATH 4 : Factory → Product Contributor (Bottom Left) ─── */}
            <g style={{ animation: 'flicker4 2.6s ease-in-out infinite' }}>
              <path d="M 330 740 C 435 740, 435 460, 540 460" stroke="#EFB81C" strokeWidth="8" strokeLinecap="round" opacity="0.18" filter="url(#outer-glow)" />
              <path d="M 330 740 C 435 740, 435 460, 540 460" stroke="url(#lightning-grad-2)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lightning-glow)" opacity="0.95" />
              <path d="M 330 740 C 435 740, 435 460, 540 460" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <path d="M 330 740 C 435 740, 435 460, 540 460" stroke="#FFF9C4" strokeWidth="1.5" strokeDasharray="4 10" strokeLinecap="round" opacity="0.7" className="dash-flow" style={{ animationDelay: '-0.9s' }} />
            </g>

            {/* ─── PATH 5 : Factory → Enterprise Professional (Middle Left) ─── */}
            <g style={{ animation: 'flicker5 3s ease-in-out infinite' }}>
              <path d="M 330 340 C 435 340, 435 425, 540 425" stroke="#EFB81C" strokeWidth="8" strokeLinecap="round" opacity="0.18" filter="url(#outer-glow)" />
              <path d="M 330 340 C 435 340, 435 425, 540 425" stroke="url(#lightning-grad-1)" strokeWidth="2.5" strokeLinecap="round" filter="url(#lightning-glow)" opacity="0.95" />
              <path d="M 330 340 C 435 340, 435 425, 540 425" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <path d="M 330 340 C 435 340, 435 425, 540 425" stroke="#FFF9C4" strokeWidth="1.5" strokeDasharray="4 10" strokeLinecap="round" opacity="0.7" className="dash-flow" style={{ animationDelay: '-0.15s' }} />
            </g>

            {/* ─── SPARK PARTICLES ─── */}
            {/* Path 1 sparks */}
            <circle className="spark1" r="5" fill="#ffffff" filter="url(#spark-glow)" />
            <circle className="spark1b" r="3.5" fill="#EFB81C" filter="url(#spark-glow)" />
            {/* Path 2 sparks */}
            <circle className="spark2" r="5" fill="#ffffff" filter="url(#spark-glow)" />
            <circle className="spark2b" r="3.5" fill="#EFB81C" filter="url(#spark-glow)" />
            {/* Path 3 sparks */}
            <circle className="spark3" r="5" fill="#ffffff" filter="url(#spark-glow)" />
            <circle className="spark3b" r="3.5" fill="#EFB81C" filter="url(#spark-glow)" />
            {/* Path 4 sparks */}
            <circle className="spark4" r="5" fill="#ffffff" filter="url(#spark-glow)" />
            <circle className="spark4b" r="3.5" fill="#EFB81C" filter="url(#spark-glow)" />
            {/* Path 5 sparks */}
            <circle className="spark5" r="5" fill="#ffffff" filter="url(#spark-glow)" />
            <circle className="spark5b" r="3.5" fill="#EFB81C" filter="url(#spark-glow)" />

            {/* ─── ENDPOINT PULSE RINGS at each node connection ─── */}
            {/* Student top */}
            <circle cx="600" cy="230" r="6" fill="#EFB81C" opacity="0.9" filter="url(#spark-glow)">
              <animate attributeName="r" values="4;9;4" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="565" cy="390" r="5" fill="#ffffff" opacity="0.8" filter="url(#spark-glow)">
              <animate attributeName="r" values="3;8;3" dur="2s" begin="0.3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.15;0.8" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            {/* Squad Member right */}
            <circle cx="870" cy="310" r="6" fill="#EFB81C" opacity="0.9" filter="url(#spark-glow)">
              <animate attributeName="r" values="4;9;4" dur="2.1s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.1s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="660" cy="425" r="5" fill="#ffffff" opacity="0.8" filter="url(#spark-glow)">
              <animate attributeName="r" values="3;8;3" dur="2.1s" begin="0.9s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.15;0.8" dur="2.1s" begin="0.9s" repeatCount="indefinite" />
            </circle>
            {/* Engineer bottom right */}
            <circle cx="870" cy="740" r="6" fill="#EFB81C" opacity="0.9" filter="url(#spark-glow)">
              <animate attributeName="r" values="4;9;4" dur="2.3s" begin="1.0s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.3s" begin="1.0s" repeatCount="indefinite" />
            </circle>
            <circle cx="660" cy="460" r="5" fill="#ffffff" opacity="0.8" filter="url(#spark-glow)">
              <animate attributeName="r" values="3;8;3" dur="2.3s" begin="1.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.15;0.8" dur="2.3s" begin="1.4s" repeatCount="indefinite" />
            </circle>
            {/* Product Contributor bottom left */}
            <circle cx="330" cy="740" r="6" fill="#EFB81C" opacity="0.9" filter="url(#spark-glow)">
              <animate attributeName="r" values="4;9;4" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.2s" begin="0.7s" repeatCount="indefinite" />
            </circle>
            <circle cx="540" cy="460" r="5" fill="#ffffff" opacity="0.8" filter="url(#spark-glow)">
              <animate attributeName="r" values="3;8;3" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.15;0.8" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
            </circle>
            {/* Enterprise Professional left */}
            <circle cx="330" cy="340" r="6" fill="#EFB81C" opacity="0.9" filter="url(#spark-glow)">
              <animate attributeName="r" values="4;9;4" dur="1.9s" begin="0.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.9s" begin="0.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="540" cy="425" r="5" fill="#ffffff" opacity="0.8" filter="url(#spark-glow)">
              <animate attributeName="r" values="3;8;3" dur="1.9s" begin="0.65s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.15;0.8" dur="1.9s" begin="0.65s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Central Factory Model node */}
          <div className="relative lg:absolute lg:top-[42%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 flex flex-col items-center justify-center gap-0 whitespace-nowrap mt-[40px] lg:mt-0 order-first lg:order-none mb-[40px] lg:mb-0">
            <img
              src={vector3}
              alt="Factory Model"
              className="w-[280px] sm:w-[400px] lg:w-[520px] h-[280px] sm:h-[400px] lg:h-[520px] object-contain shrink-0"
            />
            <div className="flex flex-col items-center -mt-[80px] sm:-mt-[110px] lg:-mt-[150px]">
              <h2
                id="heading-factory-model"
                style={{
                  fontSize: '40px',
                  fontWeight: 800,
                  lineHeight: '1.1',
                  textAlign: 'center',
                  background: 'linear-gradient(53deg, #EFB81C -1.15%, #005C2F 61.33%, #C3852B 89.73%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                Factory<br />Model
              </h2>
              <div
                style={{
                  color: '#a3b8cc',
                  fontSize: 18,
                  marginTop: 6,
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                }}
              >
                How It Works!
              </div>
            </div>
          </div>
        </div>

        {/* Step 1: Student (Top Center) */}
        <div className="w-full sm:w-[340px] lg:absolute lg:left-[50%] lg:top-[-20%] lg:-translate-x-1/2 flex flex-col items-center text-center mb-[40px] lg:mb-0 bg-black/10 lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-white/5 lg:border-none z-10">
          <div className="relative w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] flex items-center justify-center mb-[10px]">
            <img src={steps[0].img} alt={steps[0].title} className="w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] object-contain relative z-10" />
          </div>
          <div className="flex gap-[8px] items-center mt-[-90px] sm:mt-[-130px] justify-center">
            <span className="size-[22px] rounded-full border border-[#efb81c] text-[#efb81c] text-[12px] font-bold flex items-center justify-center">
              1
            </span>
            <p className="text-[#efb81c] text-[18px] font-semibold">{steps[0].title}</p>
          </div>
          <p className="text-white/80 text-[14px] leading-[1.6] mt-[8px]">{steps[0].desc}</p>
        </div>

        {/* Step 2: Squad Member (Middle Right) */}
        <div className="w-full sm:w-[320px] lg:absolute lg:right-[7%] lg:top-[18%] flex flex-col items-center text-center mb-[40px] lg:mb-0 bg-black/10 lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-white/5 lg:border-none z-10">
          <div className="relative w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] flex items-center justify-center mb-[10px]">
            <img src={steps[1].img} alt={steps[1].title} className="w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] object-contain relative z-10" />
          </div>
          <div className="flex gap-[8px] items-center mt-[-70px] sm:mt-[-110px] justify-center">
            <span className="size-[22px] rounded-full border border-[#efb81c] text-[#efb81c] text-[12px] font-bold flex items-center justify-center">
              2
            </span>
            <p className="text-[#efb81c] text-[18px] font-semibold">{steps[1].title}</p>
          </div>
          <p className="text-white/80 text-[14px] leading-[1.6] mt-[8px]">{steps[1].desc}</p>
        </div>

        {/* Step 3: Engineer (Bottom Right) */}
        <div className="w-full sm:w-[320px] lg:absolute lg:right-[6%] lg:bottom-[-18%] flex flex-col items-center text-center mb-[40px] lg:mb-0 bg-black/10 lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-white/5 lg:border-none z-10">
          <div className="relative w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] flex items-center justify-center mb-[10px]">
            <img src={steps[2].img} alt={steps[2].title} className="w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] object-contain relative z-10" />
          </div>
          <div className="flex gap-[8px] items-center mt-[-70px] sm:mt-[-110px] justify-center">
            <span className="size-[22px] rounded-full border border-[#efb81c] text-[#efb81c] text-[12px] font-bold flex items-center justify-center">
              3
            </span>
            <p className="text-[#efb81c] text-[18px] font-semibold">{steps[2].title}</p>
          </div>
          <p className="text-white/80 text-[14px] leading-[1.6] mt-[8px]">{steps[2].desc}</p>
        </div>

        {/* Step 4: Product Contributor (Bottom Left) */}
        <div className="w-full sm:w-[320px] lg:absolute lg:left-[6%] lg:bottom-[-15%] flex flex-col items-center text-center mb-[40px] lg:mb-0 bg-black/10 lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-white/5 lg:border-none z-10">
          <div className="relative w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] flex items-center justify-center mb-[10px]">
            <img src={steps[3].img} alt={steps[3].title} className="w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] object-contain relative z-10" />
          </div>
          <div className="flex gap-[8px] items-center mt-[-60px] sm:mt-[-90px] justify-center">
            <span className="size-[22px] rounded-full border border-[#efb81c] text-[#efb81c] text-[12px] font-bold flex items-center justify-center">
              4
            </span>
            <p className="text-[#efb81c] text-[18px] font-semibold">{steps[3].title}</p>
          </div>
          <p className="text-white/80 text-[14px] leading-[1.6] mt-[8px]">{steps[3].desc}</p>
        </div>

        {/* Step 5: Enterprise Professional (Middle Left) */}
        <div className="w-full sm:w-[320px] lg:absolute lg:left-[2%] lg:top-[10%] flex flex-col items-center text-center mb-[40px] lg:mb-0 bg-black/10 lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-white/5 lg:border-none z-10">
          <div className="relative w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] flex items-center justify-center mb-[10px]">
            <img src={steps[4].img} alt={steps[4].title} className="w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] object-contain relative z-10" />
          </div>
          <div className="flex gap-[8px] items-center mt-[-70px] sm:mt-[-110px] justify-center">
            <span className="size-[22px] rounded-full border border-[#efb81c] text-[#efb81c] text-[12px] font-bold flex items-center justify-center">
              5
            </span>
            <p className="text-[#efb81c] text-[18px] font-semibold">{steps[4].title}</p>
          </div>
          <p className="text-white/80 text-[14px] leading-[1.6] mt-[8px]">{steps[4].desc}</p>
        </div>

      </div>

      {/* Process chain at bottom */}
      <div className="w-full text-center mt-[40px] lg:mt-[140px] border-t border-white/10 pt-[30px]">
        <p className="text-[#e2e8f0] text-[16px] sm:text-[20px] leading-[1.8] font-medium tracking-wide">
          Enters with academic knowledge <span className="text-[#efb81c] mx-[6px]">→</span>
          Joins an agile engineering pod <span className="text-[#efb81c] mx-[6px]">→</span>
          Contributes production code <span className="text-[#efb81c] mx-[6px]">→</span>
          Ships features to production <span className="text-[#efb81c] mx-[6px]">→</span>
          Day-1 billable professional
        </p>
      </div>
    </section>
  );
}
