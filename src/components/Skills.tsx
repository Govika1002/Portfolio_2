import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';
import { useState } from 'react';

export default function Skills() {
  const { ref, controls } = useScrollAnimation();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12,
          }}>
            <Wrench size={16} />
            Technical Skills
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            My Tech Arsenal
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 24,
          }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={fadeInUp}
              className="glass-card"
              style={{ padding: 28, overflow: 'hidden' }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginBottom: 24,
                  color: 'var(--color-text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 20,
                    borderRadius: 4,
                    background: 'var(--gradient-primary)',
                    display: 'inline-block',
                  }}
                />
                {category.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  const isHovered = hoveredSkill === `${catIndex}-${skillIndex}`;

                  return (
                    <motion.div
                      key={skillIndex}
                      onMouseEnter={() =>
                        setHoveredSkill(`${catIndex}-${skillIndex}`)
                      }
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{ cursor: 'default' }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: 8,
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                          }}
                        >
                          <Icon
                            size={18}
                            style={{
                              color: isHovered
                                ? 'var(--color-primary)'
                                : 'var(--color-text-secondary)',
                              transition: 'color 0.3s ease',
                            }}
                          />
                          <span
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: 500,
                              color: isHovered
                                ? 'var(--color-text-primary)'
                                : 'var(--color-text-secondary)',
                              transition: 'color 0.3s ease',
                            }}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '0.8rem',
                            color: 'var(--color-primary-light)',
                            fontWeight: 600,
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div
                        style={{
                          width: '100%',
                          height: 6,
                          background: 'rgba(108, 99, 255, 0.1)',
                          borderRadius: 3,
                          overflow: 'hidden',
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: catIndex * 0.1 + skillIndex * 0.08,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          style={{
                            height: '100%',
                            borderRadius: 3,
                            background: isHovered
                              ? 'var(--gradient-primary)'
                              : 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
                            boxShadow: isHovered
                              ? '0 0 12px rgba(108, 99, 255, 0.5)'
                              : 'none',
                            transition: 'background 0.3s ease, box-shadow 0.3s ease',
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
