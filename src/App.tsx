import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { LanguagePicker } from './components/LanguagePicker';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { WhoWeAre } from './pages/WhoWeAre';
import { WhatWeDo } from './pages/WhatWeDo';
import { HowWeThink } from './pages/HowWeThink';
import { WhoWeWorkWith } from './pages/WhoWeWorkWith';
import { VantorView } from './pages/VantorView';
import { VantorViewArticle } from './pages/VantorViewArticle';
import { Legal } from './pages/Legal';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <>
      <LanguagePicker />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/how-we-think" element={<HowWeThink />} />
              <Route path="/who-we-work-with" element={<WhoWeWorkWith />} />
              <Route path="/the-vantor-view" element={<VantorView />} />
              <Route path="/the-vantor-view/:slug" element={<VantorViewArticle />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
