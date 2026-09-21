import progressionBg from '../../assets/career-paths/progression-bg.png';

const stats = [
  { years: '0-2 Years', label: 'Entry Level Roles' },
  { years: '2-5 Years', label: 'Intermediate Roles' },
  { years: '5+ Years', label: 'Advanced Architecture Roles' },
];

export default function ClearCareerProgression() {
  return (
    <section
      className="px-[20px] sm:px-[40px] lg:px-[79px] py-[50px] sm:py-[80px] flex flex-col gap-[40px] sm:gap-[60px] items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${progressionBg})` }}
    >
      <div className="flex flex-col gap-[18px] items-center text-center max-w-[1141px]">
        <h2 className="text-[28px] sm:text-[34px] font-bold text-black">Clear Career Progression</h2>

        <p className="text-[18px] leading-[1.5] text-black">
          Each skill tower provides a clear pathway from entry-level positions to advanced architect roles. Our programs
          are designed to help you progress through these stages with industry-recognized certifications, hands-on
          experience, and enterprise project work.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[32px] items-center justify-center w-full">
        {stats.map((s) => (
          <div
            key={s.years}
            className="w-full max-w-[380px] min-h-[170px] rounded-[20px] px-[30px] py-[45px] flex flex-col items-center justify-center gap-[18px] bg-black/[0.08] backdrop-blur-sm border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <p className="text-[#005C2F] text-[34px] font-bold leading-none">{s.years}</p>

            <p className="text-black text-[18px] font-semibold text-center">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
