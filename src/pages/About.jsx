import React from 'react';
import { assets } from '../assets/manifest';

export default function About() {
  return (
    <>
<section className="hero hero-light">
    <span className="glow g1"></span><span className="grid-ovl"></span>
    <div className="inner hlrow">
      <div className="txt">
        <span className="badge">Who We Are</span>
        <h1 style={{marginTop: '16px'}}>Building the workforce of the <mark>AI era</mark>.</h1>
        <p className="sub">EmpowerED Careers by Teceze is a next-generation Talent Transformation Company developing an enterprise-ready Human + AI workforce through an industry-led, outcome-driven ecosystem.</p>
      </div>
      <img className="hl-banner" src={assets['hero-about']} alt="A group of professionals standing together" style={{transform: "translateX(150px) scale(1.6)"}}/>
    </div>
  </section>

  <section>
    <div className="shead reveal"><span className="eyebrow">The Impact We Create</span><h2>Founded to bridge the gap.</h2>
      <p className="muted">The world is entering a new era where every profession will be transformed by AI. Organizations no longer look for qualifications alone — they need professionals who think critically, solve complex problems, collaborate, and leverage AI to create measurable business value. Unlike traditional institutes that measure success by course completion, we measure success by career outcomes, business impact, and workforce readiness.</p></div>
    <img src={assets['about-vision']} alt="A wide group of professionals standing together, unified purpose" className="banner-illustration reveal" style={{margin: '24px 0'}}/>
    <a href="#about" className="btn btn-outline" data-scroll="about-leadership" data-nav>Meet Our Leadership</a>
  </section>

  <section className="band">
    <div className="shead reveal"><span className="eyebrow">What Makes Us Different</span><h2>Real-world engineering that transforms careers</h2></div>
    <div className="grid3 reveal">
      <div className="card"><img className="prof-img" src={assets['diff-curriculum']} alt="A professional pointing at a real enterprise workflow diagram"/><h3>Industry-First Curriculum</h3><p>Not theory-first — every module designed around real enterprise use cases, tools, and workflows.</p></div>
      <div className="card"><img className="prof-img" src={assets['diff-handson']} alt="A professional assembling hands-on project blocks"/><h3>50% Hands-On Expertise</h3><p>Half of every program dedicated to practical labs, live projects, and sandbox environments.</p></div>
      <div className="card"><img className="prof-img" src={assets['diff-capstone']} alt="A professional presenting a completed project dashboard"/><h3>Capstone Projects</h3><p>Every learner delivers a production-grade capstone for an actual industry vertical.</p></div>
      <div className="card"><img className="prof-img" src={assets['about-mentors']} alt="Experienced mentors guiding learners"/><h3>Industry Mentors</h3><p>Active practitioners with 10+ years of experience — not just academic instructors.</p></div>
      <div className="card"><img className="prof-img" src={assets['diff-certifications']} alt="A professional holding a glowing certification badge"/><h3>Industry Certifications</h3><p>Earn credentials in AI, Cloud, and Cybersecurity recognized by top MNCs.</p></div>
      <div className="card"><img className="prof-img" src={assets['diff-consulting']} alt="A mentor guiding a colleague through a career panel"/><h3>Career Consulting</h3><p>Resume building, interview prep, MNC connections — every step of your journey.</p></div>
    </div>
  </section>

  
  <section className="dark">
    <span className="glow" style={{top: '-60px', right: '14%'}}></span><span className="grid-ovl"></span>
    <div className="inner">
      <div className="hero-grid" style={{alignItems: 'flex-start', gap: '40px'}}>
        <div className="reveal">
          <span className="eyebrow">Our Vision</span>
          <h2 style={{color: '#fff', fontSize: 'clamp(26px,3.4vw,36px)', margin: '14px 0 20px'}}>Empowering Human Potential. Enabling <mark>AI Futures</mark>.</h2>
          <div className="quote">“Our mission is to bridge the gap between education and industry, creating enterprise-ready professionals who can thrive in a rapidly evolving digital economy. Through inclusive leadership, collaborative partnerships, and a passion for lifelong learning, we are building a workforce that reflects diverse perspectives, drives innovation, and creates sustainable careers.”</div>
        </div>
        <img src={assets['about-capabilities']} alt="Five professionals each holding a symbol of a capability pillar" className="banner-illustration reveal" style={{marginBottom: '20px'}}/>
        <div className="cap5 reveal">
          <div className="c"><div className="iconwrap ic" style={{margin: '0'}}><svg className="ico" viewBox="0 0 32 32"><rect fill="#10A09C" x="6" y="6" width="20" height="20" rx="5"/><rect fill="#27AAE1" x="11" y="11" width="10" height="10" rx="2.5"/><rect fill="#27AAE1" x="14.6" y="1.5" width="2.8" height="5"/><rect fill="#27AAE1" x="14.6" y="25.5" width="2.8" height="5"/><rect fill="#27AAE1" x="1.5" y="14.6" width="5" height="2.8"/><rect fill="#27AAE1" x="25.5" y="14.6" width="5" height="2.8"/></svg></div><div><h4>AI &amp; Digital Skills</h4><p>Leveraging technology and automation to work smarter, faster, and at scale.</p></div></div>
          <div className="c"><div className="iconwrap ic" style={{margin: '0'}}><svg className="ico" viewBox="0 0 32 32"><rect fill="#10A09C" x="14.7" y="10" width="2.6" height="8"/><rect fill="#10A09C" x="9" y="18" width="8" height="2.6" transform="rotate(38 9 18)"/><rect fill="#10A09C" x="18" y="18.5" width="8" height="2.6" transform="rotate(-38 18 18.5)"/><circle fill="#27AAE1" cx="16" cy="6.5" r="4.5"/><circle fill="#10A09C" cx="6.5" cy="25" r="4.5"/><circle fill="#10A09C" cx="25.5" cy="25" r="4.5"/></svg></div><div><h4>Industry Domain Expertise</h4><p>Sector-specific knowledge that drives real-world problem solving and credibility.</p></div></div>
          <div className="c"><div className="iconwrap ic" style={{margin: '0'}}><svg className="ico" viewBox="0 0 32 32"><rect fill="#10A09C" x="5" y="7" width="22" height="21" rx="2.5"/><rect fill="#27AAE1" x="9" y="11" width="5" height="5" rx="1"/><rect fill="#27AAE1" x="18" y="11" width="5" height="5" rx="1"/><rect fill="#27AAE1" x="9" y="19" width="5" height="5" rx="1"/><rect fill="#27AAE1" x="18" y="19" width="5" height="5" rx="1"/></svg></div><div><h4>Enterprise Process Excellence</h4><p>Designing and optimizing complex processes to deliver consistent business outcomes.</p></div></div>
          <div className="c"><div className="iconwrap ic" style={{margin: '0'}}><svg className="ico" viewBox="0 0 32 32"><polygon fill="#10A09C" points="16,2 21.5,11.5 10.5,11.5"/><polygon fill="#27AAE1" points="28,22 18.5,27.5 18.5,16.5"/><polygon fill="#27AAE1" points="4,22 13.5,27.5 13.5,16.5"/></svg></div><div><h4>IT + OT Convergence</h4><p>Bridging digital systems with physical operations for a connected, resilient enterprise.</p></div></div>
          <div className="c"><div className="iconwrap ic" style={{margin: '0'}}><svg className="ico" viewBox="0 0 32 32"><polygon fill="#10A09C" points="16,2 20,12 30.5,12 22,18.5 25.2,29 16,22.5 6.8,29 10,18.5 1.5,12 12,12"/><circle fill="#27AAE1" cx="16" cy="16" r="4"/></svg></div><div><h4>Innovation &amp; Human-Centered Leadership</h4><p>Building cultures where people, ideas, and adaptive leadership drive lasting change.</p></div></div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="shead center reveal" style={{margin: '0 auto 40px'}}><span className="eyebrow">Our Impact</span><h2>Transforming careers at scale</h2></div>
    <div className="impact reveal">
      <div className="i"><strong>18+</strong><span>Career Programs</span></div>
      <div className="i"><strong>6</strong><span>Tech Domains</span></div>
      <div className="i"><strong>100+</strong><span>Enterprise Partners</span></div>
      <div className="i"><strong>40+</strong><span>Job Roles Covered</span></div>
      <div className="i"><strong>10+</strong><span>Industry Certifications</span></div>
      <div className="i"><strong>50-70%</strong><span>Faster Onboarding</span></div>
    </div>
  </section>

  
  <section className="band">
    <div className="shead reveal"><span className="eyebrow">World-Class Infrastructure</span><h2>Where the building happens</h2></div>
    <div className="infra reveal">
      <div className="lab"><div className="pic"><img src={assets['lab-smart-classroom']} alt="A modern classroom with an interactive display panel"/></div><div className="b"><h4>Smart Classrooms</h4><p>AI-enabled interactive displays, wireless presentation, HD conferencing.</p></div></div>
      <div className="lab"><div className="pic"><img src={assets['lab-infra']} alt="A professional beside an open server rack cabinet"/></div><div className="b"><h4>Infrastructure Labs</h4><p>Enterprise hardware, Cisco/Juniper networking, VMware clusters.</p></div></div>
      <div className="lab"><div className="pic"><img src={assets['lab-cybersecurity']} alt="A professional monitoring security-alert panels"/></div><div className="b"><h4>Cybersecurity Lab</h4><p>Isolated attack simulation, Kali Linux, SIEM platforms.</p></div></div>
      <div className="lab"><div className="pic"><img src={assets['lab-iot']} alt="Hands assembling a circuit board with sensors"/></div><div className="b"><h4>IoT Hardware Lab</h4><p>Arduino, ESP32, Raspberry Pi, PLC stations.</p></div></div>
      <div className="lab"><div className="pic"><img src={assets['lab-aiml']} alt="A professional beside a neural-network training graph"/></div><div className="b"><h4>AI/ML Cluster</h4><p>GPU workstations, JupyterHub, containerized ML environments.</p></div></div>
      <div className="lab"><div className="pic"><img src={assets['lab-cloud']} alt="A professional gesturing at a cloud-architecture diagram"/></div><div className="b"><h4>Cloud Labs</h4><p>AWS sandbox accounts, Azure subscriptions, isolated VPC per learner.</p></div></div>
    </div>
  </section>

  
  <section>
    <div className="shead reveal"><span className="eyebrow">In Collaboration with Teceze</span><h2>Our global partnership ecosystem</h2></div>
    <div className="reveal">
      <div className="pgroup"><div className="pl">Cloud Services</div><div className="plist"><span>Microsoft Azure</span><span>AWS</span><span>Google Cloud</span></div></div>
      <div className="pgroup"><div className="pl">Networking &amp; Data Center</div><div className="plist"><span>Lenovo</span><span>Dell</span><span>HP</span></div></div>
      <div className="pgroup"><div className="pl">Cybersecurity</div><div className="plist"><span>CrowdStrike</span><span>Fortinet</span><span>Mimecast</span></div></div>
      <div className="pgroup"><div className="pl">Digital Workplace &amp; ITSM</div><div className="plist"><span>Zoho</span><span>BlueCat</span><span>NetBrain</span></div></div>
      <div className="pgroup"><div className="pl">Global System Integrators</div><div className="plist"><span>Genpact</span><span>HCL</span><span>Infosys</span><span>Atos</span><span>Wipro</span><span>World Wide Technology</span></div></div>
    </div>
  </section>

  <section className="band" id="about-leadership" style={{scrollMarginTop: '120px'}}>
    <div className="shead reveal"><span className="eyebrow">Leadership</span><h2>Meet our leadership team</h2></div>
    <div className="leaders reveal">
      <div className="leader"><div className="ph">SV</div><h4>Sharmila Veerabagu</h4><span>Co-Founder &amp; Leadership Team</span></div>
      <div className="leader"><div className="ph">T</div><h4>Thushita</h4><span>Co-Founder &amp; Leadership Team</span></div>
    </div>
  </section>

  <section className="ctaband"><span className="glow"></span><span className="grid-ovl"></span><div className="inner reveal">
    <h2>Join the transformation.</h2>
    <p>Partner with a team building the enterprise-ready workforce of the AI era.</p>
    <div className="ctas"><a href="#contact" className="btn btn-yellow" data-nav>Get Started</a><a href="#programs" className="btn btn-ghost" data-nav>Explore Programs</a></div>
  </div></section>
    </>
  );
}
