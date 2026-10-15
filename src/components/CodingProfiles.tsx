import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { SiGithub, SiLeetcode, SiHackerrank } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const profiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/Govika1002',
    icon: SiGithub,
    color: '#ffffff',
    bgColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/govika-m-2b10492a6/',
    icon: FaLinkedin,
    color: '#0A66C2',
    bgColor: 'rgba(10, 102, 194, 0.1)',
    borderColor: 'rgba(10, 102, 194, 0.25)',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/',
    icon: SiLeetcode,
    color: '#FFA116',
    bgColor: 'rgba(255, 161, 22, 0.1)',
    borderColor: 'rgba(255, 161, 22, 0.25)',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/',
    icon: SiHackerrank,
    color: '#2EC866',
    bgColor: 'rgba(46, 200, 102, 0.1)',
    borderColor: 'rgba(46, 200, 102, 0.25)',
  },
];

export default function CodingProfiles() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="profiles" className="section-container" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <motion.div ref={ref} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12,
          }}>
            <Globe size={16} />
            Coding Profiles
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Find Me Online
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            My presence across coding platforms
          </p>
        </motion.div>

        {/* Profile Cards */}
        <motion.div
          variants={staggerContainer}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 16,
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.a
                key={index}
                variants={fadeInUp}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -6 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '16px 28px',
                  borderRadius: 14,
                  background: profile.bgColor,
                  border: `1px solid ${profile.borderColor}`,
                  textDecoration: 'none',
                  transition: 'box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${profile.borderColor}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <Icon size={22} style={{ color: profile.color }} />
                <span
                  style={{
                    color: profile.color,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                  }}
                >
                  {profile.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
