import { motion } from 'framer-motion';
import { User, Target, BookOpen, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from '../hooks/useScrollAnimation';

const highlights = [
  { icon: Target, label: 'Goal-Oriented', desc: 'Focused on building impactful solutions' },
  { icon: BookOpen, label: 'Continuous Learner', desc: 'Always exploring new technologies' },
  { icon: Sparkles, label: 'Clean Code', desc: 'Writing maintainable & efficient code' },
];

export default function About() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="about" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12,
          }}>
            <User size={16} />
            About Me
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Know Me Better
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            A passionate developer on a mission to build great software
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 40,
          alignItems: 'start',
        }}>
          {/* About Text */}
          <motion.div variants={fadeInLeft}>
            <div className="glass-card" style={{ padding: 32 }}>
              {personalInfo.aboutMe.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    marginBottom: i < 2 ? 20 : 0,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={fadeInRight}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-card"
                  whileHover={{ x: 8 }}
                  style={{
                    padding: 24,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    cursor: 'default',
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: 'var(--gradient-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} color="#fff" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        marginBottom: 4,
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {item.label}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12,
              }}
            >
              {[
                { value: '150+', label: 'DSA Problems' },
                { value: '3+', label: 'Projects' },
                { value: '50+', label: 'GitHub Stars' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="glass-card"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '20px 12px',
                    textAlign: 'center',
                    cursor: 'default',
                  }}
                >
                  <div
                    className="gradient-text"
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-text-muted)',
                      marginTop: 4,
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
