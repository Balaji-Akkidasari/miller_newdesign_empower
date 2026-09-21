import { lazy, Suspense, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import IntroTransition, { SiteStage } from './components/IntroTransition';

const Home = lazy(() => import('./pages/Home'));
const Programs = lazy(() => import('./pages/Programs'));
const AIForEveryone = lazy(() => import('./pages/AIForEveryone'));
const Solutions = lazy(() => import('./pages/Solutions'));
const CareerPaths = lazy(() => import('./pages/CareerPaths'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));

export default function App() {
  const { pathname } = useLocation();

  const introEligible = pathname === '/';

  const [stage, setStage] = useState(introEligible ? 'waiting' : 'ready');

  return (
    <>
      {introEligible && <IntroTransition onReveal={() => setStage('entering')} />}
      <SiteStage state={stage}>
        <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center' }}>Loading…</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/ai-for-everyone" element={<AIForEveryone />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/career-paths" element={<CareerPaths />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Legal title="Terms of Service" />} />
              <Route path="/privacy" element={<Legal title="Privacy Policy" />} />
              <Route path="/cookies" element={<Legal title="Cookie Policy" />} />
              <Route path="*" element={<Legal title="Page Not Found" />} />
            </Route>
          </Routes>
        </Suspense>
      </SiteStage>
    </>
  );
}
