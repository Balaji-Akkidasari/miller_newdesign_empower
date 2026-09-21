import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { pngAssets } from '../assets/pngManifest';
import IconSprite from './IconSprite';

const SOLUTIONS_DROPDOWN = [
  { target: 'sol-students', label: 'Students & Graduates', sub: 'Career-launch pathways' },
  { target: 'sol-professionals', label: 'Working Professionals', sub: 'Upskill & reskill for AI' },
  { target: 'sol-institutions', label: 'Universities & Institutions', sub: 'Centers of Excellence' },
  { target: 'sol-enterprises', label: 'Enterprises', sub: 'Talent pipelines & deployment' },
  { target: 'sol-startups', label: 'Startups', sub: 'Product & talent on demand' },
  { target: 'sol-government', label: 'Government & Public Sector', sub: 'Capability building' },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const progressRef = React.useRef(null);
  const location = useLocation();

  // Frosted topbar once the page has scrolled, plus a reading-progress thread.
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const h = document.documentElement;
      const max = h.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  React.useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Smooth, elegant scrolling via Lenis (native scroll, virtual wheel). The
  // pinned scroll showcase, header parallax and reveals all key off the real
  // scroll position, so Lenis drives the same coordinates — just smoother.
  // Skipped entirely under reduced motion.
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.09,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });
    return () => lenis.destroy();
  }, []);

  // Scroll to a hash target on route/hash change (replicates the original
  // site's data-scroll anchor behavior), else scroll to top on a fresh page.
  React.useEffect(() => {
    setMobileOpen(false);
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        // slight delay lets the new page finish rendering first
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  // Reveal-on-scroll for any `.reveal` elements on the current page
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll('.reveal:not(.vis)');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);

  return (
    <>
      <IconSprite />
      <header className={`site${scrolled ? ' scrolled' : ''}`}>
        <span ref={progressRef} className="progress" aria-hidden="true"></span>
        <div className="topbar">
          <Link to="/" className="brand" aria-label="EmpowerED Careers — home">
            <img src={pngAssets.logo} alt="EmpowerED Careers" className="brand-logo" />
          </Link>

          <div className="navbar">
            <nav aria-label="Primary">
              <div className="nl">
                <Link to="/#factory-model">The Factory Model</Link>
              </div>
              <div className="nl">
                <NavLink to="/programs" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  Programs
                </NavLink>
              </div>
              <div className="nl">
                <NavLink to="/ai-for-everyone" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  AI for Everyone
                </NavLink>
              </div>
              <div className="nl">
                <NavLink to="/solutions" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  Solutions <span className="car">▾</span>
                </NavLink>
                <div className="drop">
                  {SOLUTIONS_DROPDOWN.map((item) => (
                    <Link key={item.target} to={`/solutions#${item.target}`}>
                      {item.label}<small>{item.sub}</small>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="nl">
                <NavLink to="/career-paths" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  Career Paths
                </NavLink>
              </div>
              <div className="nl">
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  About
                </NavLink>
              </div>
            </nav>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/contact" className="nav-cta">
              Get Started
            </Link>
            <button
              className={`toggle${mobileOpen ? ' open' : ''}`}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`scrim${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(false)} aria-hidden="true"></div>
      <div className={`mobile${mobileOpen ? ' open' : ''}`} role="dialog" aria-label="Site menu" aria-hidden={!mobileOpen}>
        <Link to="/">Home</Link>
        <Link to="/#factory-model">The Factory Model</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/ai-for-everyone">AI for Everyone</Link>
        <Link to="/solutions">Solutions</Link>
        <div className="sub">
          {SOLUTIONS_DROPDOWN.map((item) => (
            <Link key={item.target} to={`/solutions#${item.target}`}>› {item.label}</Link>
          ))}
        </div>
        <Link to="/career-paths">Career Paths</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="site">
        <span
          style={{
            position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
            filter: 'blur(90px)', background: 'rgba(39,170,225,.12)', right: '-80px', top: '-120px',
          }}
        ></span>
        <div className="footer-in">
          <div className="fgrid">
            <div>
              <div className="fbrand">
                <img src={pngAssets.logo} alt="EmpowerED Careers" style={{height: '80px', width: 'auto', display: 'block', marginBottom: '16px'}} />
              </div>
              <p style={{ maxWidth: '270px', fontSize: '14px' }}>
                Empowering Talent. Transforming Futures. The AI Talent Factory — a Talent Transformation Company by Teceze.
              </p>
            </div>
            <div className="fcol">
              <h4>Explore</h4>
              <Link to="/#factory-model">The Factory Model</Link>
              <Link to="/programs">Programs</Link>
              <Link to="/ai-for-everyone">AI for Everyone</Link>
              <Link to="/solutions">Solutions</Link>
              <Link to="/career-paths">Career Paths</Link>
            </div>
            <div className="fcol">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/about#about-leadership">Leadership</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="fcol">
              <h4>Contact</h4>
              <p>+91-75399 99500</p>
              <p>info@empoweredcareers.ai</p>
              <p>SIDCO Industrial Estate, Guindy, Chennai 600032</p>
            </div>
          </div>
          <div className="fbot">
            <span>© {new Date().getFullYear()} EmpowerED Careers by Teceze. All rights reserved.</span>
            <div className="lg">
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
