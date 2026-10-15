import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { internship } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';

export default function Experience() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="experience" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12,
          }}>
            <Briefcase size={16} />
            Experience
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Professional Experience
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Internship experience and contributions
          </p>
        </motion.div>

        {/* Internship Card */}
        <motion.div
          variants={fadeInUp}
          style={{ maxWidth: 750, margin: '0 auto' }}
        >
          <div
            className="glass-card"
            style={{
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Top Accent */}
            <div
              style={{
                height: 4,
                background: 'var(--gradient-primary)',
                width: '100%',
              }}
            />

            <div style={{ padding: 32 }}>
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      marginBottom: 4,
                    }}
                  >
                    {internship.role}
                  </h3>
                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '1rem',
                    }}
                  >
                    {internship.company}
                  </p>
                </div>
                <div
                  style={{
                    padding: '6px 16px',
                    borderRadius: 20,
                    background: 'rgba(0, 212, 170, 0.1)',
                    border: '1px solid rgba(0, 212, 170, 0.2)',
                    color: 'var(--color-accent)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {internship.period}
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: 'rgba(108, 99, 255, 0.1)',
                  margin: '20px 0',
                }}
              />

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {internship.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      style={{
                        color: 'var(--color-accent)',
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    <p
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Skills Used */}
              <div
                style={{
                  marginTop: 24,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                }}
              >
                {['Django', 'Python', 'REST APIs', 'PostgreSQL', 'Git', 'Agile'].map(
                  (skill, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '4px 12px',
                        borderRadius: 16,
                        background: 'rgba(108, 99, 255, 0.08)',
                        border: '1px solid rgba(108, 99, 255, 0.15)',
                        color: 'var(--color-primary-light)',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
