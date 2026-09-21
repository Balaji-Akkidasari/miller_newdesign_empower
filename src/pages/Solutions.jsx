import React from 'react';
import { assets } from '../assets/manifest';

export default function Solutions() {
  return (
    <>
<section className="pagehead">
    <span className="glow"></span><span className="grid-ovl"></span>
    <div className="inner">
      <div className="txt">
        <span className="eyebrow">Solutions · Our Offers</span>
        <h1>End-to-end <mark>talent transformation</mark> solutions.</h1>
        <p className="sub">We help individuals, enterprises, institutions, startups, and governments build future-ready Human + AI capabilities.</p>
      </div>
      <img className="rail-img" src={assets['hero-solutions']} alt="Five different organizations connected by pathways"/>
    </div>
  </section>

  <section>
    <div className="offers reveal">
      <div className="offer sub" id="sol-students"><img className="offer-img" src={assets['sol-students']} alt="Graduates walking forward with laptops toward opportunity"/><span className="tg">For Students &amp; Fresh Graduates</span><h3>Launch your career.</h3><p>AI &amp; Industry 4.0 career-readiness programs, certifications, hands-on labs, hackathons, and live projects.</p><p>End-to-end support: internships, deployment programs, interview coaching, placement assistance, and career assurance.</p><a href="#contact" className="lnk" data-nav>Start your journey →</a></div>
      <div className="offer sub" id="sol-professionals"><img className="offer-img" src={assets['sol-professionals']} alt="A professional stepping up to a higher career platform"/><span className="tg">For Working Professionals</span><h3>Upskill &amp; reskill for AI.</h3><p>Upskilling and reskilling across AI, Cloud, Cybersecurity, Data, and Software Engineering with professional certification bootcamps.</p><p>Leadership, executive AI literacy, mentoring, and career-transition programs for the AI era.</p><a href="#contact" className="lnk" data-nav>Start your journey →</a></div>
      <div className="offer sub" id="sol-institutions"><img className="offer-img" src={assets['sol-institutions']} alt="Faculty and students beside a campus building"/><span className="tg">For Universities &amp; Institutions</span><h3>A future-workforce hub on campus.</h3><p>Industry-aligned curriculum design with AI Centres of Excellence, faculty development, and campus innovation labs.</p><p>University–industry partnerships with live projects, mentorship, and placement-readiness programs.</p><a href="#contact" className="lnk" data-nav>Partner with us →</a></div>
    </div>
    <div className="offers reveal" style={{marginTop: '20px'}}>
      <div className="offer lead" id="sol-enterprises"><img className="offer-img" src={assets['sol-enterprises']} alt="Ready professionals in front of a corporate building"/><span className="tg">For Enterprises</span><h3>Your managed, enterprise-ready talent pipeline.</h3><p>AI workforce transformation strategy with corporate academy design, technical and functional upskilling, and Human + AI workforce development.</p><p>Enterprise talent solutions: capability assessment, graduate hiring &amp; deployment, BOT talent models, and dedicated AI Talent Factories.</p><a href="#contact" className="lnk" data-nav>Build your pipeline →</a></div>
      <div className="offer sub" id="sol-startups"><img className="offer-img" src={assets['sol-startups']} alt="Founders around a product roadmap panel"/><span className="tg">For Startups</span><h3>Product &amp; talent on demand.</h3><p>Product engineering and AI solution development through startup innovation labs, technical co-development, and live project teams.</p><p>Flexible internship, project workforce, and talent-on-demand services to accelerate delivery at scale.</p><a href="#contact" className="lnk" data-nav>Build with us →</a></div>
      <div className="offer sub" id="sol-government"><img className="offer-img" src={assets['sol-government']} alt="Public-sector professionals in front of a civic building"/><span className="tg">For Government &amp; Public Sector</span><h3>Capability building at scale.</h3><p>AI capability building for public-sector teams, universities, colleges, and schools — with government skill missions and citizen-service enablement.</p><a href="#contact" className="lnk" data-nav>Talk to us →</a></div>
    </div>
  </section>

  
  <section className="band">
    <div className="shead reveal"><span className="eyebrow">Corporate Engagement Model</span>
      <h2>Flexible workforce models for enterprise demand</h2>
      <p className="muted">Hiring partners report zero onboarding time for EmpowerED alumni — deployable engineering professionals from Day 1.</p></div>
    <div className="grid2 reveal">
      <div className="card"><img className="model-img" src={assets['model-train-to-hire']} alt="A professional guided directly into a corporate doorway"/><h3>Train-to-Hire</h3><p>Custom programs aligned to your specific technology stack and hiring needs — talent prepared for your tools, processes, and culture.</p><div className="best">Best for: specific tech stack requirements</div></div>
      <div className="card"><img className="model-img" src={assets['model-hire-train-deploy']} alt="Professionals moving through three archway gates"/><h3>Hire-Train-Deploy</h3><p>End-to-end talent pipeline management. We hire, prepare, and deploy talent to your organization.</p><div className="best">Best for: rapid scaling &amp; bulk hiring</div></div>
      <div className="card"><img className="model-img" src={assets['model-talent-pools']} alt="Six professionals inside a glowing readiness circle"/><h3>Dedicated Talent Pools</h3><p>Access pre-certified talent ready for immediate deployment across AI, Cloud, Cybersecurity, and Digital Engineering roles.</p><div className="best">Best for: immediate hiring requirements</div></div>
      <div className="card"><img className="model-img" src={assets['model-ld-service']} alt="An instructor beside a learning dashboard with a seated team"/><h3>L&amp;D as a Service</h3><p>Complete learning &amp; development outsourcing. Upskill internal teams through enterprise-focused digital capability programs.</p><div className="best">Best for: internal team upskilling</div></div>
    </div>
  </section>

  <section className="ctaband"><span className="glow"></span><span className="grid-ovl"></span><div className="inner reveal">
    <h2>Build your future workforce.</h2>
    <p>Whichever way you plug in, it starts with one conversation.</p>
    <div className="ctas"><a href="#contact" className="btn btn-yellow" data-nav>Get Started</a><a href="#career-paths" className="btn btn-ghost" data-nav>See Career Paths</a></div>
  </div></section>
    </>
  );
}
