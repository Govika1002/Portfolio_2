import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, ChevronDown, FileText } from 'lucide-react';
import { SiPython } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const floatingIcons = [
  { icon: '🐍', x: '10%', y: '20%', delay: 0, size: 32 },
  { icon: '⚡', x: '85%', y: '15%', delay: 1.5, size: 24 },
  { icon: '🔧', x: '75%', y: '70%', delay: 3, size: 28 },
  { icon: '💻', x: '15%', y: '75%', delay: 2, size: 30 },
  { icon: '🚀', x: '90%', y: '45%', delay: 4, size: 26 },
  { icon: '📊', x: '5%', y: '50%', delay: 1, size: 22 },
];

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}
    >
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ delay: item.delay, duration: 0.8 }}
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
            fontSize: item.size,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <motion.span
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ display: 'block' }}
          >
            {item.icon}
          </motion.span>
        </motion.div>
      ))}

      {/* Hero Content */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: 800,
          zIndex: 2,
          position: 'relative',
        }}
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 20px',
            borderRadius: 50,
            background: 'rgba(0, 212, 170, 0.1)',
            border: '1px solid rgba(0, 212, 170, 0.3)',
            marginBottom: 32,
            fontSize: '0.85rem',
            color: 'var(--color-accent)',
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--color-accent)',
              display: 'inline-block',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          Open to Work
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontSize: '1.2rem',
            color: 'var(--color-text-secondary)',
            marginBottom: 12,
            fontWeight: 400,
          }}
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: '-0.03em',
          }}
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            fontWeight: 600,
            marginBottom: 24,
            minHeight: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}
        >
          <SiPython style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
          <TypeAnimation
            sequence={personalInfo.roles.flatMap((role) => [role, 2000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: 'var(--color-text-secondary)' }}
          />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-muted)',
            maxWidth: 600,
            margin: '0 auto 40px',
            lineHeight: 1.8,
          }}
        >
          Building robust web applications & APIs with Python, Django, and
          modern backend technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button onClick={onOpenResume} className="btn-primary" style={{ cursor: 'pointer' }}>
            <FileText size={18} />
            View Resume
          </button>
          <a href="/Govika_M_Resume.pdf" download="Govika_M_Resume.pdf" className="btn-outline">
            <Download size={18} />
            Download CV
          </a>
          <a
            href="#contact"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'var(--color-text-muted)',
          fontSize: '0.75rem',
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
}
