import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Open modal if URL has #resume hash
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#resume') {
        setIsResumeOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleCloseResume = () => {
    setIsResumeOpen(false);
    if (window.location.hash === '#resume') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      {/* Animated Background */}
      <div className="animated-bg">
        <div
          className="floating-orb"
          style={{
            width: 400,
            height: 400,
            background: 'rgba(108, 99, 255, 0.08)',
            top: '30%',
            left: '60%',
          }}
        />
      </div>

      {/* Particle Grid */}
      <div className="particle-grid" />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </>
  );
}

export default App;
