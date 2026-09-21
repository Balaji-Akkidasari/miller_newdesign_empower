import React from 'react';
import { assets } from '../assets/manifest';

// Squad photography ported from the AI Talent Factory "Cross-Functional
// Engineering Pods" section. There is no cybersecurity photo in that set, so
// the Cybersecurity Squad reuses the testing/security-operations shot.
import squadFullStack from '../assets/squads/squad-frontend.webp';
import squadAi from '../assets/squads/squad-ai.webp';
import squadCybersecurity from '../assets/squads/squad-testing.webp';
import squadCloud from '../assets/squads/squad-cloud.webp';
import squadData from '../assets/squads/squad-data.webp';
import squadDelivery from '../assets/squads/squad-delivery.webp';

export default function Programs() {
  return (
    <>
<section className="hero hero-light">
    <span className="glow g1"></span><span className="grid-ovl"></span>
    <div className="inner hlrow">
      <div className="txt" style={{textWidth: '100px',}}>
        <span className="badge">Programs</span>
        <h1 style={{marginTop: '16px'}}>One pathway. Three stages.<br/><mark style={{color: '#eac10e'}}>Enterprise-ready</mark> talent.</h1>
        <p className="sub">A single proven journey — Foundational, Specialization, and Expertise. Every program follows our 50% hands-on philosophy with production-grade capstone projects.</p>
      </div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* <img className="hl-banner" src={assets['hero-programs']} alt="A professional beside three ascending platforms representing staged learning"/> */}
        <div className="qr-card">
<div className="qr-title">► Scan to <mark style={{color: '#eac10e'}}>Register</mark></div>
<div className="qr-imgwrap">
<img src={assets['qrcode']} alt="Scan to connect QR code" />
</div>
<div className="qr-sub">Explore Opportunities</div>
<div className="qr-desc">Scan &amp; join our talent pipeline</div>
<div className="qr-tag">✓ Instant Access • ✓ No Sign-up</div>
</div>
      </div>

    </div>
  </section>

  <section>
    <div className="shead reveal"><span className="eyebrow">The Offering</span><h2>Three stages, from zero to deployed.</h2></div>
    <div className="tiers reveal">
      <div className="tier"><div className="acc" style={{background: '#10A09C'}}></div><img className="tierviz" src={assets['tier-foundational']} alt="Beginners building on a solid foundation platform"/><div className="thead"><span className="stg">Stage · 01</span><span className="dur">≈ 12 Weeks</span></div><h3>Foundational</h3><p className="tag">The mandatory starting point for every professional.</p><p className="dsc">A common baseline of digital, enterprise, and AI capability — so talent from any background is ready to specialize. No prior IT experience required.</p><div className="li"><i>✓</i>AI Fundamentals</div><div className="li"><i>✓</i>Digital &amp; Enterprise Skills</div><div className="li"><i>✓</i>Professional Readiness</div><div className="li"><i>✓</i>Foundational Assessments</div></div>
      <div className="tier"><div className="acc" style={{background: '#27AAE1'}}></div><img className="tierviz" src={assets['tier-specialization']} alt="A professional choosing a path among several diverging specializations"/><div className="thead"><span className="stg">Stage · 02</span><span className="dur">8–16 Weeks</span></div><h3>Specialization</h3><p className="tag">One domain, deep enough to be productive in it.</p><p className="dsc">Talent chooses a single high-demand domain and goes deep — mastering the tools and workflows enterprises actually run on.</p><div className="chips"><span className="chip">AI Engineering</span><span className="chip">Data Engineering</span><span className="chip">Cloud</span><span className="chip">Cybersecurity</span><span className="chip">Full-Stack</span><span className="chip">Enterprise Tech</span><span className="chip">Industry 4.0 / IoT</span></div></div>
      <div className="tier"><div className="acc" style={{background: '#FFD166'}}></div><img className="tierviz" src={assets['tier-expertise']} alt="A professional planting a flag at the summit, enterprise-ready"/><div className="thead"><span className="stg">Stage · 03</span><span className="dur">Enterprise Ready</span></div><h3>Expertise</h3><p className="tag">Deployed on real work until enterprise-ready.</p><p className="dsc">Specialized talent ships production work in agile squads inside the AI Talent Factory — until certified enterprise-ready and delivering from Day 1.</p><div className="li"><i>✓</i>Live Enterprise Projects</div><div className="li"><i>✓</i>Industry Mentorship</div><div className="li"><i>✓</i>Enterprise Readiness Certification</div><div className="li"><i>✓</i>Deployment &amp; Placement</div></div>
    </div>
    <div className="tier-callout reveal"><p>Want the depth behind a specialization? We share detailed track overviews as part of a conversation — tailored to your goals or your team.</p><a href="#contact" className="btn btn-yellow" data-nav>Talk to us</a></div>
  </section>

<section className="band">
    <div className="shead reveal"><span className="eyebrow">Cross-Functional Engineering Pods</span>
      <h2>Squads that mirror Fortune 500 teams</h2>
      <p className="muted">Talent joins specialized squads and ships production work together — just like a real product organization.</p></div>
    <div className="squadgrid reveal">
      <div className="squadcard"><img className="squad-img" src={squadFullStack} alt="Full Stack Squad at work"/><div className="b"><strong>Full Stack Squad</strong><span>React, TypeScript, Tailwind, Component Architecture</span></div></div>
      <div className="squadcard"><img className="squad-img" src={squadAi} alt="AI Squad at work"/><div className="b"><strong>AI Squad</strong><span>LLM Integration, Prompt Engineering, RAG, AI Agents</span></div></div>
      <div className="squadcard"><img className="squad-img" src={squadCybersecurity} alt="Cybersecurity Squad at work"/><div className="b"><strong>Cybersecurity Squad</strong><span>Network, Application, Cloud &amp; Endpoint Security</span></div></div>
      <div className="squadcard"><img className="squad-img" src={squadCloud} alt="Cloud Squad at work"/><div className="b"><strong>Cloud Squad</strong><span>AWS/Azure, CI/CD, IaC, Kubernetes, Serverless</span></div></div>
      <div className="squadcard"><img className="squad-img" src={squadData} alt="Data Squad at work"/><div className="b"><strong>Data Squad</strong><span>ETL Pipelines, Spark, Kafka, Data Lakes, BI</span></div></div>
      <div className="squadcard"><img className="squad-img" src={squadDelivery} alt="Delivery Squad at work"/><div className="b"><strong>Delivery Squad</strong><span>Scrum Masters, Product Owners, Sprint Facilitation</span></div></div>
    </div>
  </section>

<section>
    <div className="shead reveal"><span className="eyebrow">Sprint-Based Delivery Framework</span><h2>A real product cadence</h2></div>
    <img src={assets['sprint-cycle']} alt="A squad working around a circular sprint board" className="banner-illustration reveal" style={{display: 'block', margin: '0 auto'}}/>
    <div className="sprint reveal">
      <div className="sp"><b>01</b><h4>Product Vision</h4><span>Saturday strategy sessions</span></div>
      <div className="sp"><b>02</b><h4>Sprint Planning</h4><span>Sunday task allocation</span></div>
      <div className="sp"><b>03</b><h4>Execution</h4><span>Mon–Fri deep work</span></div>
      <div className="sp"><b>04</b><h4>Sprint Review</h4><span>Friday demos &amp; retro</span></div>
    </div>
    <div className="shead reveal" style={{margin: '44px 0 20px'}}><h2 style={{fontSize: '24px'}}>A day in the life</h2></div>
    <div className="reveal" style={{overflowX: 'auto'}}><table className="daytable">
      <tr><th>Time</th><th>Activity</th><th>Details</th></tr>
      <tr><td>09:00–09:30</td><td>Daily Standup</td><td>Squad updates, blocker resolution</td></tr>
      <tr><td>09:30–13:00</td><td>Deep Development</td><td>Focused coding, AI engineering, cloud setup</td></tr>
      <tr><td>13:00–14:00</td><td>Lunch + Tech Talk</td><td>Lightning talks, cross-squad sharing</td></tr>
      <tr><td>14:00–17:00</td><td>Collaboration</td><td>Pair programming, code reviews, mentor sessions</td></tr>
      <tr><td>17:00–17:30</td><td>Status Reporting</td><td>Jira updates, burndown metrics</td></tr>
    </table></div>
  </section>

<section className="dark">
    <span className="glow" style={{bottom: '-80px', left: '10%'}}></span><span className="grid-ovl"></span>
    <div className="inner">
      <div className="shead reveal"><span className="eyebrow">Proprietary Enterprise Readiness Experience</span>
        <h2>The Enterprise Talent Assurance Framework <mark>(ETAF)™</mark></h2>
        <p>A continuous, evidence-based journey that verifies talent is not only AI-enabled, but able to apply skills, collaborate, and perform in real enterprise environments.</p></div>
      <div className="etaf reveal">
        <div className="row"><img className="etaf-img" src={assets['etaf-1-assess']} alt="A professional evaluating their own skills baseline"/><span className="n">1</span><span className="t">Know Where You Stand<small>AI-Powered Skills Assessment</small></span><span className="d">Baseline &amp; continuous evaluation of AI, technical and role-specific competencies.</span><span className="ev">Skills profile + gap plan</span></div>
        <div className="row"><img className="etaf-img" src={assets['etaf-2-apply']} alt="A professional assembling project blocks"/><span className="n">2</span><span className="t">Apply Skills to Real Work<small>Hands-On Project Validation</small></span><span className="d">Industry-aligned assignments and real-world projects demonstrate practical execution.</span><span className="ev">Validated project proof</span></div>
        <div className="row"><img className="etaf-img" src={assets['etaf-3-perform']} alt="A professional presenting to evaluators"/><span className="n">3</span><span className="t">Perform in Enterprise Context<small>Enterprise Competency Evaluation</small></span><span className="d">Capability tested through role scenarios, demos, and problem solving.</span><span className="ev">Enterprise scorecard</span></div>
        <div className="row"><img className="etaf-img" src={assets['etaf-4-portfolio']} alt="A professional displaying a portfolio of project cards"/><span className="n">4</span><span className="t">Prove What You Can Deliver<small>Portfolio &amp; Capstone Review</small></span><span className="d">Work verified for relevance, quality, documentation, and job-ready value.</span><span className="ev">Verified portfolio + capstone</span></div>
        <div className="row"><img className="etaf-img" src={assets['etaf-5-collaborate']} alt="Professionals in a team discussion circle"/><span className="n">5</span><span className="t">Work Effectively With Others<small>Communication &amp; Collaboration</small></span><span className="d">Teamwork, presentation, and workplace effectiveness observed and scored.</span><span className="ev">Workplace readiness rating</span></div>
        <div className="row"><img className="etaf-img" src={assets['etaf-6-certify']} alt="A professional receiving a certification badge"/><span className="n">6</span><span className="t">Earn Enterprise Readiness<small>Career Readiness Certification</small></span><span className="d">A final multi-evidence review confirms role fit and readiness for deployment.</span><span className="ev">ETAF™ certification</span></div>
      </div>
    </div>
  </section>

<section className="band">
    <div className="shead reveal"><span className="eyebrow">The Learner Exits As</span>
      <h2>A <mark>quality-assured</mark> professional</h2>
      <p className="muted">Every graduate leaves with verified skills, assessed project evidence, a role-mapped portfolio, and certification against enterprise expectations — not simply course completion.</p></div>
    <img src={assets['programs-quality-exit']} alt="A professional stepping through a checkpoint gate with verified skill badges" className="banner-illustration reveal" style={{display: 'block', margin: '0 auto'}}/>
    <div className="exitgrid reveal">
      <div className="exit"><div className="iconwrap ic" style={{margin: '0', padding: '7px', background: 'rgba(255,255,255,.12)'}}><svg className="ico" viewBox="0 0 32 32"><rect fill="#10A09C" x="6" y="6" width="20" height="20" rx="5"/><rect fill="#27AAE1" x="11" y="11" width="10" height="10" rx="2.5"/><rect fill="#27AAE1" x="14.6" y="1.5" width="2.8" height="5"/><rect fill="#27AAE1" x="14.6" y="25.5" width="2.8" height="5"/><rect fill="#27AAE1" x="1.5" y="14.6" width="5" height="2.8"/><rect fill="#27AAE1" x="25.5" y="14.6" width="5" height="2.8"/></svg></div><div><strong>AI-Enabled</strong></div></div>
      <div className="exit"><div className="iconwrap ic" style={{margin: '0', padding: '7px', background: 'rgba(255,255,255,.12)'}}><svg className="ico" viewBox="0 0 32 32"><path fill="#10A09C" d="M16 1.5c-6.6 0-11.5 5-11.5 11.5C4.5 21.5 16 30.5 16 30.5S27.5 21.5 27.5 13c0-6.5-4.9-11.5-11.5-11.5z"/><circle fill="#27AAE1" cx="16" cy="12.5" r="4.8"/></svg></div><div><strong>Portfolio</strong><span>Proven</span></div></div>
      <div className="exit"><div className="iconwrap ic" style={{margin: '0', padding: '7px', background: 'rgba(255,255,255,.12)'}}><svg className="ico" viewBox="0 0 32 32"><rect fill="#10A09C" x="3" y="17" width="7" height="12" rx="1"/><rect fill="#10A09C" x="12.5" y="11" width="7" height="18" rx="1"/><rect fill="#27AAE1" x="22" y="4" width="7" height="25" rx="1"/></svg></div><div><strong>Market</strong><span>Ready</span></div></div>
      <div className="exit"><div className="iconwrap ic" style={{margin: '0', padding: '7px', background: 'rgba(255,255,255,.12)'}}><svg className="ico" viewBox="0 0 32 32"><rect fill="#10A09C" x="5" y="18" width="22" height="10" rx="5"/><circle fill="#27AAE1" cx="16" cy="10" r="6.5"/></svg></div><div><strong>Role</strong><span>Mapped</span></div></div>
      <div className="exit"><div className="iconwrap ic" style={{margin: '0', padding: '7px', background: 'rgba(255,255,255,.12)'}}><svg className="ico" viewBox="0 0 32 32"><rect fill="#10A09C" x="5" y="7" width="22" height="21" rx="2.5"/><rect fill="#27AAE1" x="9" y="11" width="5" height="5" rx="1"/><rect fill="#27AAE1" x="18" y="11" width="5" height="5" rx="1"/><rect fill="#27AAE1" x="9" y="19" width="5" height="5" rx="1"/><rect fill="#27AAE1" x="18" y="19" width="5" height="5" rx="1"/></svg></div><div><strong>Enterprise</strong><span>Ready</span></div></div>
      <div className="exit"><div className="iconwrap ic" style={{margin: '0', padding: '7px', background: 'rgba(255,255,255,.12)'}}><svg className="ico" viewBox="0 0 32 32"><polygon fill="#10A09C" points="16,1.5 22.5,15 16,11.5 9.5,15"/><rect fill="#10A09C" x="12.5" y="11" width="7" height="13" rx="1"/><polygon fill="#10A09C" points="9.5,15 5,25 9.5,22"/><polygon fill="#10A09C" points="22.5,15 27,25 22.5,22"/><circle fill="#27AAE1" cx="16" cy="13" r="3.2"/><rect fill="#27AAE1" x="13.8" y="24" width="4.4" height="6.5" rx="2.2"/></svg></div><div><strong>Deployment</strong><span>Ready</span></div></div>
    </div>
    <p className="cmp-note reveal" style={{marginTop: '28px'}}><b>Quality Gate Principle:</b> progress is earned. Gaps trigger targeted feedback, coaching, and revalidation before talent advances.</p>
  </section>

  <section>
    <div className="shead reveal"><span className="eyebrow">Our Capability Areas</span><h2>Where our talent goes deep</h2></div>
    <div className="capcols reveal">
      <div className="capcol"><img src={assets['capability-it-ai']} alt="A professional surrounded by cloud, server and AI-chip panels" className="cap-img"/><h3><span className="d"></span>IT &amp; AI Technology Skills</h3><ul><li>Artificial Intelligence &amp; Generative AI</li><li>Data Engineering &amp; Analytics</li><li>Cloud Engineering &amp; DevOps</li><li>Cybersecurity</li><li>Full Stack Development</li><li>Platform Engineering &amp; SRE</li><li>ServiceNow &amp; Enterprise Platforms</li><li>Automation &amp; AI Agents</li></ul></div>
      <div className="capcol"><img src={assets['capability-core-eng']} alt="A professional beside a robotic arm and circuit-board panel" className="cap-img"/><h3><span className="d"></span>AI-Aligned Core Engineering</h3><ul><li>Industrial AI &amp; Industry 4.0</li><li>IoT &amp; Smart Manufacturing</li><li>Robotics &amp; Automation</li><li>PLC, SCADA &amp; Industrial Control</li><li>Embedded Systems</li><li>Electronics &amp; VLSI</li><li>Mechatronics</li><li>Mechanical &amp; Electrical Engineering</li></ul></div>
      <div className="capcol"><img src={assets['capability-industry']} alt="Simplified buildings representing different industries" className="cap-img"/><h3><span className="d"></span>Industry Domains</h3><ul><li>Banking &amp; Financial Services</li><li>Insurance</li><li>Healthcare &amp; Life Sciences</li><li>Manufacturing &amp; Automotive</li><li>Retail &amp; Consumer Goods</li><li>Telecommunications</li><li>Energy &amp; Utilities</li><li>Government &amp; Public Sector</li></ul></div>
    </div>
  </section>

  <section className="ctaband"><span className="glow"></span><span className="grid-ovl"></span><div className="inner reveal">
    <h2>Find your pathway.</h2>
    <p>Every pathway starts with a conversation about your goals.</p>
    <div className="ctas"><a href="#career-paths" className="btn btn-yellow" data-nav>See Career Paths</a><a href="#contact" className="btn btn-ghost" data-nav>Get Started</a></div>
  </div></section>
    </>
  );
}
