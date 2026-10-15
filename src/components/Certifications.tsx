import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const providerColors: Record<string, string> = {
  Coursera: '#0056D2',
  Udemy: '#A435F0',
  HackerRank: '#2EC866',
};

export default function Certifications() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="certifications" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12,
          }}>
            <Award size={16} />
            Certifications
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Credentials & Certifications
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Validated skills through recognized platforms
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 20,
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {certifications.map((cert, index) => {
            const providerName = Object.keys(providerColors).find((p) =>
              cert.provider.includes(p)
            );
            const accentColor = providerName
              ? providerColors[providerName]
              : 'var(--color-primary)';

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card"
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: 28,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                {/* Accent Corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 80,
                    height: 80,
                    background: `radial-gradient(circle at top right, ${accentColor}20, transparent 70%)`,
                    borderRadius: '0 16px 0 0',
                  }}
                />

                {/* Certificate Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${accentColor}15`,
                    border: `1px solid ${accentColor}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <Award size={22} style={{ color: accentColor }} />
                </div>

                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {cert.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--color-text-secondary)',
                    marginBottom: 16,
                  }}
                >
                  {cert.provider}
                </p>

                {cert.link && (
                  <motion.a
                    whileHover={{ x: 4 }}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      color: accentColor,
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    View Credential
                    <ExternalLink size={14} />
                  </motion.a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
