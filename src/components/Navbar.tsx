import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled
            ? 'rgba(10, 10, 26, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(108, 99, 255, 0.15)'
            : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none',
              color: 'var(--color-text-primary)',
              fontWeight: 800,
              fontSize: '1.3rem',
              letterSpacing: '-0.02em',
            }}
          >
            <Code2 size={28} style={{ color: 'var(--color-primary)' }} />
            <span className="gradient-text">GM</span>
          </motion.a>

          {/* Desktop Nav */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                whileHover={{ y: -2 }}
                style={{
                  textDecoration: 'none',
                  color:
                    activeSection === link.href.slice(1)
                      ? 'var(--color-primary-light)'
                      : 'var(--color-text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  padding: '8px 14px',
                  borderRadius: 8,
                  transition: 'all 0.3s ease',
                  background:
                    activeSection === link.href.slice(1)
                      ? 'rgba(108, 99, 255, 0.1)'
                      : 'transparent',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <button
              onClick={onOpenResume}
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.85rem', marginLeft: 8, cursor: 'pointer' }}
            >
              <FileText size={16} />
              Resume
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              padding: 8,
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '75%',
              maxWidth: 320,
              height: '100vh',
              background: 'rgba(10, 10, 26, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 99,
              padding: '100px 32px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              borderLeft: '1px solid rgba(108, 99, 255, 0.2)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  textDecoration: 'none',
                  color:
                    activeSection === link.href.slice(1)
                      ? 'var(--color-primary-light)'
                      : 'var(--color-text-secondary)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  padding: '14px 16px',
                  borderRadius: 10,
                  background:
                    activeSection === link.href.slice(1)
                      ? 'rgba(108, 99, 255, 0.1)'
                      : 'transparent',
                  transition: 'all 0.3s ease',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenResume?.();
              }}
              className="btn-primary"
              style={{ marginTop: 16, justifyContent: 'center', cursor: 'pointer' }}
            >
              <FileText size={16} />
              View Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.5)',
              zIndex: 98,
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
