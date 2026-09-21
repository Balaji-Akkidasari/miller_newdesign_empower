import React from 'react';
import { assets } from '../assets/manifest';

export default function AIForEveryone() {
  return (
    <>
<section className="pagehead">
    <span className="glow"></span><span className="grid-ovl"></span>
    <div className="inner">
      <div className="txt">
        <span className="eyebrow">Empowered Human + AI Portfolio</span>
        <h1>AI for Everyone.<br/>Every profession. <mark>AI enabled</mark>. Future ready.</h1>
        <p className="sub">AI is the new digital literacy. We equip students, professionals, entrepreneurs, and organizations with practical, profession-specific AI skills that improve productivity, decision-making, creativity, and career growth.</p>
        <div className="ctas"><a href="#solutions" className="btn btn-yellow" data-nav>Find Your Pathway</a><a href="#programs" className="btn btn-ghost" data-nav>Explore Programs</a></div>
      </div>
      <img
  className="rail-img"
  src={assets['hero-ai-everyone']}
  alt="Every profession connected to AI"
  style={{
    width: "100%",
    maxWidth: "700px",
    height: "auto",
    display: "block",
    objectFit: "contain",
    transform: "scale(2.4)",
  }}
/>
    </div>
  </section>

  <section>
    <div className="tier-callout reveal" style={{marginTop: '0'}}><p><b style={{color: 'var(--yellow)'}}>Not a generic AI course.</b> &nbsp;Learners apply AI to the workflows, decisions, and outcomes of their own profession.</p></div>
    <div className="shead reveal" style={{marginTop: '48px'}}><span className="eyebrow">Five-Level Learning Journey</span><h2>One journey. Multiple pathways. Measurable outcomes.</h2></div>
    <div className="journey reveal">
      <div className="jstep"><div className="jico jico-img"><img src={assets['aie-journey-1-awareness']} alt="A professional discovering AI capability with wonder"/></div><span className="jn">01</span><h4>AI Awareness</h4><p>AI fundamentals, prompt engineering, responsible AI, and everyday tools.</p></div>
      <div className="jstep"><div className="jico jico-img"><img src={assets['aie-journey-2-productivity']} alt="A professional working efficiently with an AI assistant"/></div><span className="jn">02</span><h4>AI Productivity</h4><p>Copilots and AI tools for research, documents, presentations, and data.</p></div>
      <div className="jstep"><div className="jico jico-img"><img src={assets['aie-journey-3-profession']} alt="Professionals from different fields unified by AI tools"/></div><span className="jn">03</span><h4>AI for Your Profession</h4><p>Role-specific workflows, templates, decision support, and automation.</p></div>
      <div className="jstep"><div className="jico jico-img"><img src={assets['aie-journey-4-projects']} alt="Two professionals collaborating over a project board"/></div><span className="jn">04</span><h4>Applied AI Projects</h4><p>Hands-on domain projects that create portfolio-ready professional outputs.</p></div>
      <div className="jstep"><div className="jico jico-img"><img src={assets['aie-journey-5-career']} alt="A professional stepping through a golden archway with a certificate"/></div><span className="jn">05</span><h4>Career Readiness</h4><p>Assessment, certification, portfolio building, mock interviews, and coaching.</p></div>
    </div>
  </section>

  <section className="dark">
    <span className="glow" style={{top: '-60px', right: '12%'}}></span><span className="grid-ovl"></span>
    <div className="inner">
      <div className="shead reveal"><span className="eyebrow">One Entry Point. Six Progression Pathways.</span><h2>Wherever you are, there's a pathway.</h2></div>
      <div className="paths reveal">
        <div className="card" style={{background: 'var(--card-dark)', borderColor: 'var(--border-dark)'}}><img className="path-img" src={assets['aie-path-everyone']} alt="Diverse professionals united by AI"/><h3 style={{color: '#fff'}}>AI for Everyone</h3><p style={{color: 'rgba(255,255,255,.65)'}}>AI literacy and workplace transformation for every profession.</p></div>
        <div className="card" style={{background: 'var(--card-dark)', borderColor: 'var(--border-dark)'}}><img className="path-img" src={assets['aie-path-professionals']} alt="A business professional working with AI dashboards"/><h3 style={{color: '#fff'}}>AI for Professionals</h3><p style={{color: 'rgba(255,255,255,.65)'}}>Role-based upskilling across finance, HR, marketing, sales, legal, and operations.</p></div>
        <div className="card" style={{background: 'var(--card-dark)', borderColor: 'var(--border-dark)'}}><img className="path-img" src={assets['aie-path-engineers']} alt="An engineer surrounded by code and cloud panels"/><h3 style={{color: '#fff'}}>AI for Engineers</h3><p style={{color: 'rgba(255,255,255,.65)'}}>AI, data, cloud, cybersecurity, software, automation, and IoT pathways.</p></div>
        <div className="card" style={{background: 'var(--card-dark)', borderColor: 'var(--border-dark)'}}><img className="path-img" src={assets['aie-path-leaders']} alt="An executive presenting an AI strategy dashboard"/><h3 style={{color: '#fff'}}>AI for Leaders</h3><p style={{color: 'rgba(255,255,255,.65)'}}>AI strategy, governance, transformation, and responsible adoption.</p></div>
        <div className="card" style={{background: 'var(--card-dark)', borderColor: 'var(--border-dark)'}}><img className="path-img" src={assets['aie-path-enterprises']} alt="Professionals around an organizational transformation diagram"/><h3 style={{color: '#fff'}}>AI for Enterprises</h3><p style={{color: 'rgba(255,255,255,.65)'}}>Workforce transformation, corporate academies, AI CoEs, and change management.</p></div>
        <div className="card" style={{background: 'var(--card-dark)', borderColor: 'var(--border-dark)'}}><img className="path-img" src={assets['aie-path-government']} alt="Public-sector professionals beside a civic building"/><h3 style={{color: '#fff'}}>AI for Government &amp; Education</h3><p style={{color: 'rgba(255,255,255,.65)'}}>Capability building for public-sector teams, universities, colleges, and schools.</p></div>
      </div>
    </div>
  </section>

  <section>
    <div className="shead reveal"><span className="eyebrow">Who Can Benefit</span><h2>Every discipline. And what they'll learn.</h2></div>
    <div className="grid3 reveal">
      <div className="card"><img className="prof-img" src={assets['aie-prof-business']} alt="A business analyst studying charts"/><h3>Business &amp; Commerce</h3><p>B.Com, BBA, MBA, finance, accounting, banking, insurance, HR, sales.</p><div className="learn">Analysis · Forecasting · Reporting · Excel/Power BI · automation</div></div>
      <div className="card"><img className="prof-img" src={assets['aie-prof-healthcare']} alt="A healthcare professional with a caring posture"/><h3>Healthcare</h3><p>Doctors, nurses, pharmacists, physiotherapists, lab &amp; hospital teams.</p><div className="learn">Clinical support · documentation · analytics · AI assistants</div></div>
      <div className="card"><img className="prof-img" src={assets['aie-prof-legal']} alt="A legal professional beside a document panel and scales of justice"/><h3>Legal &amp; Compliance</h3><p>Lawyers, legal consultants, compliance and risk professionals.</p><div className="learn">Legal research · contract review · policy analysis · case prep</div></div>
      <div className="card"><img className="prof-img" src={assets['aie-prof-education']} alt="An educator beside a lesson board"/><h3>Education</h3><p>Teachers, professors, trainers, faculty, and school administrators.</p><div className="learn">Lesson planning · content creation · assessment · personalized learning</div></div>
      <div className="card"><img className="prof-img" src={assets['aie-prof-creative']} alt="A creative designer with a stylus tablet"/><h3>Creative &amp; Media</h3><p>Designers, animators, editors, photographers, creators, marketers.</p><div className="learn">Generative AI · image/video · branding · campaign content</div></div>
      <div className="card"><img className="prof-img" src={assets['aie-prof-hospitality']} alt="A hospitality professional with a welcoming gesture"/><h3>Hospitality &amp; Tourism</h3><p>Hotel management, travel consultants, event-management teams.</p><div className="learn">Customer service · trip planning · personalization · operations</div></div>
      <div className="card"><img className="prof-img" src={assets['aie-prof-manufacturing']} alt="An industrial professional beside factory machinery"/><h3>Manufacturing &amp; Supply Chain</h3><p>Production, quality, logistics, maintenance, procurement teams.</p><div className="learn">Predictive analytics · quality inspection · forecasting · automation</div></div>
      <div className="card"><img className="prof-img" src={assets['aie-prof-construction']} alt="An architect holding blueprints beside a wireframe building"/><h3>Construction &amp; Real Estate</h3><p>Civil professionals, architects, interiors, surveyors, PMs.</p><div className="learn">AI design · BIM + AI · planning · cost estimation · digital twins</div></div>
      <div className="card"><img className="prof-img" src={assets['aie-prof-government']} alt="A public administrator at a records panel"/><h3>Government &amp; Public Sector</h3><p>Government employees, municipal teams, citizen-service functions.</p><div className="learn">Productivity · document intelligence · citizen services · policy analytics</div></div>
    </div>
    <p className="cmp-note reveal" style={{marginTop: '26px'}}>AI-enabled career directions: <b>AI Finance Analyst · AI Business Analyst · AI HR Specialist · AI Sales Consultant</b></p>
  </section>

  <section className="ctaband"><span className="glow"></span><span className="grid-ovl"></span><div className="inner reveal">
    <h2>From AI awareness to career impact.</h2>
    <p>AI for Everyone can stand alone, or serve as the universal entry point into our wider Human + AI portfolio.</p>
    <div className="ctas"><a href="#contact" className="btn btn-yellow" data-nav>Get Started</a><a href="#solutions" className="btn btn-ghost" data-nav>See Solutions</a></div>
  </div></section>
    </>
  );
}
