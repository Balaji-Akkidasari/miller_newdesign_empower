import heroBg from '../../assets/career-paths/hero-career-paths.webp';
import badgeIcon from '../../assets/career-paths/badge-career-paths.svg';

export default function CareerPathsHero() {
  return (
    <section
      aria-labelledby="heading-career-paths-hero"
      className="relative bg-cover bg-[73%_center] sm:bg-center flex items-end sm:items-center px-[20px] sm:px-[40px] lg:px-[80px] pb-[40px] sm:pb-0 sm:py-0 pt-[80px] sm:pt-0"
      style={{ backgroundImage: `url(${heroBg})`, minHeight: '560px' }}
    >
      {/* Mobile-only dark tint overlay */}
      <div className="absolute inset-0 bg-black/50 sm:hidden" />
      <div className="relative z-10 flex flex-col gap-[10px] items-start max-w-[633px]">
        <div className="border-[1.3px] border-white sm:border-[#005c2f] rounded-full h-[52px] flex items-center gap-[10px] px-[20px]">
          <img src={badgeIcon} alt="" className="size-[21px] brightness-0 invert sm:brightness-100 sm:invert-0" />
          <span className="text-white sm:text-[#005c2f] text-[16px] font-medium">Career Paths</span>
        </div>
        <h1
          id="heading-career-paths-hero"
          className="text-[36px] sm:text-[50px] font-medium text-white sm:text-black leading-[1.1] max-w-[567px]"
        >
          Role-Based Pathways with Clear Progression
        </h1>
        <p className="text-white sm:text-black text-[16px] leading-[1.75] max-w-[542px]">
          From entry-level associate to advanced architect — clear career progression across 6 horizontal skill towers.
        </p>
      </div>
    </section>
  );
}
