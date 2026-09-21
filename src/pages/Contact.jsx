import React from 'react';
import { assets } from '../assets/manifest';

const INTEREST_OPTIONS = [
  'Students & Graduates — launch my career',
  'Working Professional — upskill / reskill',
  'University / Institution partnership',
  'Enterprise — build a talent pipeline',
  'Startup — product & talent on demand',
  'Government & Public Sector',
];

export default function Contact() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    interest: INTEREST_OPTIONS[0],
    message: '',
  });
  const [status, setStatus] = React.useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setStatus('success');
      setForm({ name: '', email: '', interest: INTEREST_OPTIONS[0], message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <section className="pagehead">
        <span className="glow"></span><span className="grid-ovl"></span>
        <div className="inner">
          <div className="txt">
            <span className="eyebrow">Contact</span>
            <h1>Empowering Human Potential.<br />Enabling <mark>AI Futures</mark>.</h1>
            <p className="sub">Tell us what you're building — a career, a campus program, or a workforce — and we'll take it from there.</p>
          </div>
          <img className="rail-img" src={assets['hero-contact']} alt="A professional reaching out to connect" style={{transform: "translateX(-250px) scale(2.4)"}}/>
        </div>
      </section>

      <section>
        <div className="contact-grid">
          <form className="form reveal" onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: '6px' }}>Get in touch</h3>
            <p className="muted" style={{ fontSize: '14px' }}>We're here to help you build your career or your workforce.</p>

            <label htmlFor="cf-name">Name</label>
            <input id="cf-name" name="name" type="text" placeholder="Your name"
                   value={form.name} onChange={handleChange} required />

            <label htmlFor="cf-email">Email</label>
            <input id="cf-email" name="email" type="email" placeholder="you@company.com"
                   value={form.email} onChange={handleChange} required />

            <label htmlFor="cf-interest">I'm interested in</label>
            <select id="cf-interest" name="interest" value={form.interest} onChange={handleChange}>
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>

            <label htmlFor="cf-message">Message</label>
            <textarea id="cf-message" name="message" rows="4" placeholder="Tell us about your goals…"
                      value={form.message} onChange={handleChange} required></textarea>

            <button type="submit" className="btn btn-yellow" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <p style={{ color: 'var(--accent)', marginTop: '12px', fontSize: '14px' }}>
                Thanks — we've received your message and will be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#c0392b', marginTop: '12px', fontSize: '14px' }}>
                {errorMsg}
              </p>
            )}
          </form>

          <img
src={assets['contact-illustration']}
  alt="A friendly professional reaching out with a message panel"
  className="banner-illustration reveal"
  style={{
    width: "100%",
    height: "100%",
    maxWidth: "750px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto",
    transform: "scale(1.3)"
  }}
/>

          <div className="cinfo reveal">
            <div className="box"><strong>Talk to Us</strong><span>+91-75399 99500</span></div>
            <div className="box"><strong>Email</strong><span>info@empoweredcareers.ai</span></div>
            <div className="box"><strong>Address</strong><span>Sai Pride, 4th floor, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032</span></div>
            <div className="box"><strong>Web</strong><span>www.empoweredcareers.ai</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
