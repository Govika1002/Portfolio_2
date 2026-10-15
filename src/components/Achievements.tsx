import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

export default function Achievements() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="achievements" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12,
          }}>
            <Trophy size={16} />
            Achievements
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Milestones & Awards
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Recognition and accomplishments along the way
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 20,
            maxWidth: 950,
            margin: '0 auto',
          }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card"
              whileHover={{ scale: 1.03, y: -6 }}
              style={{
                padding: 32,
                textAlign: 'center',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 120,
                  height: 120,
                  background: 'radial-gradient(circle, rgba(108, 99, 255, 0.12), transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }}
              />

              <motion.div
                style={{
                  fontSize: '2.8rem',
                  marginBottom: 16,
                  display: 'block',
                  position: 'relative',
                }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {achievement.icon}
              </motion.div>

              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  marginBottom: 8,
                }}
              >
                {achievement.title}
              </h3>

              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                }}
              >
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
