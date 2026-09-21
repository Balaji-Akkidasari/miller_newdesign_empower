import React from 'react';
import { assets } from '../assets/manifest';
import HorizontalSkillTowers from '../components/career-paths/HorizontalSkillTowers';

export default function CareerPaths() {
  return (
    <>
<section className="pagehead">
    <span className="glow"></span><span className="grid-ovl"></span>
    <div className="inner">
      <div className="txt">
        <span className="eyebrow">Role-Based Deployment Model</span>
        <h1>Career paths with <mark>clear progression</mark>.</h1>
        <p className="sub">Every professional builds a foundation across six horizontal skill towers before specializing — from entry-level associate to advanced architect.</p>
        <div className="ctas"><a href="#programs" className="btn btn-yellow" data-nav>See the Programs</a><a href="#contact" className="btn btn-ghost" data-nav>Start Your Career</a></div>
      </div>
     <img
  className="rail-img"
  src={assets['hero-career-paths']}
  alt="A staircase branching into multiple career paths"
  style={{
    width: "100%",
    maxWidth: "700px",
    height: "auto",
    display: "block",
    objectFit: "contain",
    transform: "scale(2.1)",
    transformOrigin: "center center"
  }}
/>
    </div>
  </section>

  <HorizontalSkillTowers />

  <section className="band" id="programs">
    <div className="shead reveal"><span className="eyebrow">Clear Career Progression</span><h2>From associate to architect</h2></div>
    <div className="progression reveal">
      <div className="prog"><img className="prog-img" src={assets['career-entry']} alt="A junior professional on the first step of a staircase"/><span className="pn">01</span><h4>Entry-Level Roles</h4><p>0–2 years · Associate roles applying foundational and specialization capability on real work.</p></div>
      <div className="prog"><img className="prog-img" src={assets['career-intermediate']} alt="A mid-level professional explaining to a junior colleague"/><span className="pn">02</span><h4>Intermediate Roles</h4><p>2–5 years · Engineer and specialist roles owning delivery, quality, and systems.</p></div>
      <div className="prog"><img className="prog-img" src={assets['career-advanced']} alt="A senior architect at the top of the staircase"/><span className="pn">03</span><h4>Advanced Architecture Roles</h4><p>5+ years · Architect and consultant roles setting technical direction across the enterprise.</p></div>
    </div>
  </section>

  <section className="ctaband" id="contact"><span className="glow"></span><span className="grid-ovl"></span><div className="inner reveal">
    <h2>Find your path.</h2>
    <p>Every track begins with the same foundation and ends in an enterprise-ready role.</p>
    <div className="ctas"><a href="#contact" className="btn btn-yellow" data-nav>Start Your Career</a><a href="#programs" className="btn btn-ghost" data-nav>Explore Programs</a></div>
  </div></section>
    </>
  );
}
