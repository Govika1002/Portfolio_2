import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';
import { useState } from 'react';

export default function Projects() {
  const { ref, controls } = useScrollAnimation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12,
          }}>
            <FolderGit2 size={16} />
            Projects
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Featured Work
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Projects that showcase my skills and passion
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card"
              style={{
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Gradient Top Bar */}
              <div
                style={{
                  height: 4,
                  background: project.gradient,
                  width: '100%',
                }}
              />

              <div style={{ padding: '32px 32px 28px' }}>
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 16,
                    flexWrap: 'wrap',
                    gap: 16,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        marginBottom: 12,
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 20,
                  }}
                >
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '5px 14px',
                        borderRadius: 20,
                        background: 'rgba(108, 99, 255, 0.1)',
                        border: '1px solid rgba(108, 99, 255, 0.2)',
                        color: 'var(--color-primary-light)',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Details */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ paddingBottom: 20 }}>
                    {/* Features */}
                    <h4
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        marginBottom: 12,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                      }}
                    >
                      Key Features
                    </h4>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 8,
                        marginBottom: 20,
                      }}
                    >
                      {project.features.map((feature, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.88rem',
                          }}
                        >
                          <ChevronRight
                            size={14}
                            style={{ color: 'var(--color-accent)', flexShrink: 0 }}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Challenges & Learnings */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 16,
                      }}
                    >
                      <div
                        style={{
                          padding: 16,
                          borderRadius: 12,
                          background: 'rgba(255, 165, 0, 0.05)',
                          border: '1px solid rgba(255, 165, 0, 0.15)',
                        }}
                      >
                        <h5
                          style={{
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            color: '#FFA500',
                            marginBottom: 8,
                          }}
                        >
                          ⚡ Challenges
                        </h5>
                        <p
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--color-text-muted)',
                            lineHeight: 1.6,
                          }}
                        >
                          {project.challenges}
                        </p>
                      </div>
                      <div
                        style={{
                          padding: 16,
                          borderRadius: 12,
                          background: 'rgba(0, 212, 170, 0.05)',
                          border: '1px solid rgba(0, 212, 170, 0.15)',
                        }}
                      >
                        <h5
                          style={{
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            color: 'var(--color-accent)',
                            marginBottom: 8,
                          }}
                        >
                          🎓 Learnings
                        </h5>
                        <p
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--color-text-muted)',
                            lineHeight: 1.6,
                          }}
                        >
                          {project.learnings}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Footer */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 16,
                    borderTop: '1px solid rgba(108, 99, 255, 0.1)',
                    flexWrap: 'wrap',
                    gap: 12,
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-primary-light)',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '8px 0',
                    }}
                  >
                    {expandedIndex === index ? 'Show Less' : 'View Details'}
                    <motion.span
                      animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight size={16} />
                    </motion.span>
                  </motion.button>

                  <div style={{ display: 'flex', gap: 12 }}>
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '8px 16px',
                          borderRadius: 8,
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: 'var(--color-text-secondary)',
                          textDecoration: 'none',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <FaGithub size={16} />
                        Source Code
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '8px 16px',
                          borderRadius: 8,
                          background: 'var(--gradient-primary)',
                          color: '#fff',
                          textDecoration: 'none',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                        }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
