import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid rgba(108, 99, 255, 0.1)',
        padding: '40px 24px',
        background: 'rgba(10, 10, 26, 0.5)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontWeight: 800,
            fontSize: '1.2rem',
          }}
        >
          <Code2 size={24} style={{ color: 'var(--color-primary)' }} />
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.div>

        {/* Tagline */}
        <p
          style={{
            color: 'var(--color-text-muted)',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
        >
          Python Developer · Backend Engineer · Problem Solver
        </p>

        {/* Copyright */}
        <p
          style={{
            color: 'var(--color-text-muted)',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          © {currentYear} {personalInfo.name}. Made with{' '}
          <Heart size={14} style={{ color: '#ff4757', fill: '#ff4757' }} />{' '}
          and React
        </p>
      </div>
    </footer>
  );
}
