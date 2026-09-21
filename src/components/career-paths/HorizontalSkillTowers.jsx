import { Link } from 'react-router-dom';

import zapIcon from '../../assets/career-paths/icon-zap.svg';
import arrowIcon from '../../assets/career-paths/icon-arrow.svg';

import aiPhoto from '../../assets/career-paths/track-ai.webp';
import cloudPhoto from '../../assets/career-paths/track-cloud.webp';
import cyberPhoto from '../../assets/career-paths/track-cyber.webp';
import enterprisePhoto from '../../assets/career-paths/track-enterprise.webp';
import iotPhoto from '../../assets/career-paths/track-iot.webp';
import dataPhoto from '../../assets/career-paths/track-data.webp';

// `to` points at this site's Programs page — the source site had a detail page
// per track (/programs/<slug>), which doesn't exist in this project's routes.
const tracks = [
  {
    photo: aiPhoto,
    to: '/programs',
    title: 'AI & Data Intelligence',
    subtitle: 'Build intelligent systems that learn and adapt',
    steps: [
      { level: 'Entry Level · 0–2 yrs', role: 'AI Associate' },
      { level: 'Intermediate · 2–5 yrs', role: 'AI Engineer' },
      { level: 'Advanced · 5+ yrs', role: 'AI Solution Architect' },
    ],
  },
  {
    photo: cloudPhoto,
    to: '/programs',
    title: 'Cloud & Platform Engineering',
    subtitle: 'Scale resilient infrastructure for the modern enterprise',
    steps: [
      { level: 'Entry Level · 0–2 yrs', role: 'Cloud Support Engineer' },
      { level: 'Intermediate · 2–5 yrs', role: 'Cloud Engineer' },
      { level: 'Advanced · 5+ yrs', role: 'Platform Architect' },
    ],
  },
  {
    photo: cyberPhoto,
    to: '/programs',
    title: 'Cybersecurity & Digital Trust',
    subtitle: 'Defend systems and earn the trust of every user',
    steps: [
      { level: 'Entry Level · 0–2 yrs', role: 'SOC Analyst L1' },
      { level: 'Intermediate · 2–5 yrs', role: 'Security Engineer' },
      { level: 'Advanced · 5+ yrs', role: 'Cyber Architect' },
    ],
  },
  {
    photo: enterprisePhoto,
    to: '/programs',
    title: 'Enterprise Technology',
    subtitle: 'Power the business with reliable enterprise platforms',
    steps: [
      { level: 'Entry Level · 0–2 yrs', role: 'Service Desk Analyst' },
      { level: 'Intermediate · 2–5 yrs', role: 'Platform Specialist' },
      { level: 'Advanced · 5+ yrs', role: 'Enterprise Consultant' },
    ],
  },
  {
    photo: iotPhoto,
    to: '/programs',
    title: 'IoT / Industry 4.0',
    subtitle: 'Connect the physical and digital worlds at the edge',
    steps: [
      { level: 'Entry Level · 0–2 yrs', role: 'IoT Associate' },
      { level: 'Intermediate · 2–5 yrs', role: 'Edge AI Engineer' },
      { level: 'Advanced · 5+ yrs', role: 'IIoT Architect' },
    ],
  },
  {
    photo: dataPhoto,
    to: '/programs',
    title: 'Data Engineering',
    subtitle: 'Turn raw data into pipelines that drive decisions',
    steps: [
      { level: 'Entry Level · 0–2 yrs', role: 'Data Associate' },
      { level: 'Intermediate · 2–5 yrs', role: 'Data Engineer' },
      { level: 'Advanced · 5+ yrs', role: 'Data Architect' },
    ],
  },
];

function TrackCard({ track, reverse }) {
  return (
    <div
      className={`bg-white border border-black/10 rounded-[30px] flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } overflow-hidden transition-shadow duration-300 hover:shadow-xl shadow-[0_0_180px_rgba(243,179,0,0.10)]`}
    >
      <div
        className="relative bg-cover bg-center flex flex-col justify-end p-[25px] sm:p-[40px] py-[35px] sm:py-[55px] w-full md:w-[630px] shrink-0 min-h-[300px]"
        style={{ backgroundImage: `url(${track.photo})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
        <div className="relative flex flex-col gap-[10px] text-white">
          <h3 className="text-[32px] font-semibold">{track.title}</h3>
          <p className="text-[16px]">{track.subtitle}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between px-[20px] sm:px-[35px] py-[30px] sm:py-[45px] gap-[30px]">
        <div className="flex flex-col gap-[20px] relative">
          {track.steps.map((step, i) => {
            const isLast = i === track.steps.length - 1;
            return (
              <div key={step.role} className="flex items-center gap-[23px] relative">
                {/* Vertical connecting line */}
                {!isLast && (
                  <div className="absolute left-[16px] top-[34px] w-[2px] h-[calc(100%+20px)] bg-[#cfe0d6]" />
                )}

                <div
                  className={`relative shrink-0 rounded-full size-[34px] flex items-center justify-center text-[14px] font-black z-10 ${
                    isLast ? 'bg-[#005c2f] text-white' : 'bg-white border-[3px] border-[#cfe0d6] text-[#005c2f]'
                  }`}
                >
                  {i + 1}
                </div>

                <div
                  className={`flex-1 rounded-[23px] px-[16px] sm:px-[24px] py-[12px] sm:py-[18px] flex items-center justify-between gap-[10px] sm:gap-0 flex-wrap sm:flex-nowrap ${
                    isLast ? 'bg-[#005c2f]' : 'bg-white border border-[#e3ece6]'
                  }`}
                >
                  <div>
                    <p
                      className={`text-[12px] sm:text-[14px] font-semibold uppercase tracking-[0.9px] ${
                        isLast ? 'text-white/70' : 'text-[#66736b]'
                      }`}
                    >
                      {step.level}
                    </p>
                    <p
                      className={`text-[16px] sm:text-[22px] font-bold leading-[1.2] mt-[2px] ${
                        isLast ? 'text-white' : 'text-[#17211b]'
                      }`}
                    >
                      {step.role}
                    </p>
                  </div>
                  {isLast && (
                    <span className="bg-[#f3b300] rounded-full px-[11px] py-[6px] text-[14px] font-bold uppercase text-[#17211b] shrink-0">
                      Architect
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-dashed border-[#e3ece6] pt-[30px] flex items-center justify-between flex-wrap gap-[12px]">
          <p className="text-[#66736b] text-[17px] font-semibold">Industry-recognized certifications</p>
          <Link
            to={track.to}
            className="flex items-center gap-[8px] text-[#005c2f] text-[20px] font-bold transition-all duration-200 hover:gap-[12px]"
          >
            Start your Career <img src={arrowIcon} alt="" className="size-[23px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalSkillTowers() {
  return (
    <section
      className="px-[20px] sm:px-[40px] lg:px-[80px] py-[50px] sm:py-[80px] flex flex-col gap-[40px] sm:gap-[55px] items-center"
      style={{ background: 'linear-gradient(to right, #ffffff 0%, #e8f5ee 50%, #d4eddf 100%)' }}
    >
      <div className="flex flex-col gap-[25px] items-center text-center">
        <div className="bg-[#005c2f] rounded-full h-[47px] flex items-center gap-[10px] px-[24px]">
          <img src={zapIcon} alt="" className="size-[21px]" />
          <span className="text-white text-[16px] font-semibold">6 Career Tracks</span>
        </div>
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#17211b] leading-[1.2]">
            Horizontal Skill Towers
          </h2>
          <p className="text-[#66736b] text-[15px] sm:text-[16px] max-w-[700px]">
            Choose your domain and follow a clear, three-stage path from associate to architect — designed with industry
            partners.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[20px] w-full max-w-[1279px]">
        {tracks.map((track, i) => (
          <TrackCard key={track.title} track={track} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
