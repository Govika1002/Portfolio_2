import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

export default function Education() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="education" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12,
          }}>
            <GraduationCap size={16} />
            Education
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Academic Journey
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            My educational background and qualifications
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          style={{
            maxWidth: 700,
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Timeline Line */}
          <div
            style={{
              position: 'absolute',
              left: 24,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, var(--color-primary), var(--color-accent), transparent)',
            }}
          />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              style={{
                position: 'relative',
                paddingLeft: 64,
                marginBottom: index < education.length - 1 ? 40 : 0,
              }}
            >
              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                style={{
                  position: 'absolute',
                  left: 14,
                  top: 24,
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: '0 0 15px rgba(108, 99, 255, 0.4)',
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#fff',
                  }}
                />
              </motion.div>

              {/* Education Card */}
              <motion.div
                className="glass-card"
                whileHover={{ x: 8 }}
                style={{
                  padding: 28,
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '4px 12px',
                      borderRadius: 20,
                      background: 'rgba(108, 99, 255, 0.1)',
                      color: 'var(--color-primary-light)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                    }}
                  >
                    <Calendar size={14} />
                    {edu.year}
                  </div>
                </div>

                <p
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.95rem',
                    marginBottom: 12,
                  }}
                >
                  {edu.institution}
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '6px 14px',
                    borderRadius: 8,
                    background: 'rgba(0, 212, 170, 0.1)',
                    border: '1px solid rgba(0, 212, 170, 0.2)',
                  }}
                >
                  <Award size={14} style={{ color: 'var(--color-accent)' }} />
                  <span
                    style={{
                      color: 'var(--color-accent)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    {edu.scoreLabel}: {edu.score}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
