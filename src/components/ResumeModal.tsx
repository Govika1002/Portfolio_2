import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Download, Printer, ExternalLink, Mail, Phone, MapPin,
  Award, BookOpen, Briefcase, Code, Sparkles, Copy, Check
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  personalInfo, education, internship, projects,
  certifications, achievements, skillCategories
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'modern' | 'ats'>('modern');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generatePlainTextResume = () => {
    return `${personalInfo.name.toUpperCase()}
${personalInfo.title} | ${personalInfo.location}
Phone: ${personalInfo.phone} | Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

PROFESSIONAL SUMMARY
------------------------------------------------------------
${personalInfo.aboutMe}

TECHNICAL SKILLS
------------------------------------------------------------
${skillCategories.map(cat => `${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}

EXPERIENCE / INTERNSHIP
------------------------------------------------------------
${internship.role} | ${internship.company} (${internship.period})
${internship.highlights.map(h => `- ${h}`).join('\n')}

KEY PROJECTS
------------------------------------------------------------
${projects.map(p => `${p.title}
Tech Stack: ${p.techStack.join(', ')}
${p.description}
Key Highlights:
${p.features.map(f => `  * ${f}`).join('\n')}`).join('\n\n')}

EDUCATION
------------------------------------------------------------
${education.map(e => `${e.degree}
${e.institution} | ${e.year} | ${e.scoreLabel}: ${e.score}`).join('\n\n')}

CERTIFICATIONS & ACHIEVEMENTS
------------------------------------------------------------
Certifications:
${certifications.map(c => `- ${c.name} (${c.provider})`).join('\n')}

Achievements:
${achievements.map(a => `- ${a.title}: ${a.description}`).join('\n')}
`;
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generatePlainTextResume());
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = generatePlainTextResume();
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const isAts = viewMode === 'ats';

  return (
    <AnimatePresence>
      <div
        className="resume-modal-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: 'rgba(5, 5, 16, 0.88)',
          backdropFilter: 'blur(14px)',
          overflowY: 'auto',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="resume-modal-content"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '880px',
            maxHeight: '92vh',
            overflowY: 'auto',
            background: isAts
              ? '#ffffff'
              : 'linear-gradient(135deg, rgba(18, 18, 38, 0.98) 0%, rgba(10, 10, 26, 0.99) 100%)',
            color: isAts ? '#111827' : 'var(--color-text-primary)',
            border: isAts
              ? '1px solid #d1d5db'
              : '1px solid rgba(108, 99, 255, 0.3)',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: isAts
              ? '0 25px 60px rgba(0, 0, 0, 0.45)'
              : '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(108, 99, 255, 0.15)',
            transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Action Bar Header */}
          <div
            className="resume-no-print"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
              borderBottom: isAts ? '1px solid #e5e7eb' : '1px solid rgba(108, 99, 255, 0.2)',
              marginBottom: '26px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {/* Title & View Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: isAts ? '#f3f4f6' : 'rgba(108, 99, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isAts ? '#4f46e5' : 'var(--color-primary)',
                }}
              >
                <Sparkles size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: isAts ? '#111827' : '#ffffff' }}>
                  Curriculum Vitae
                </h3>
                <span style={{ fontSize: '0.8rem', color: isAts ? '#6b7280' : 'var(--color-text-muted)' }}>
                  ATS-Friendly Interactive Resume
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div
                style={{
                  display: 'flex',
                  background: isAts ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  padding: '3px',
                  borderRadius: '10px',
                  border: isAts ? '1px solid #e5e7eb' : '1px solid rgba(255, 255, 255, 0.08)',
                  gap: '4px',
                  marginLeft: '4px',
                }}
              >
                <button
                  type="button"
                  onClick={() => setViewMode('modern')}
                  style={{
                    padding: '5px 12px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    borderRadius: '7px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    background: !isAts ? 'var(--color-primary)' : 'transparent',
                    color: !isAts ? '#ffffff' : '#6b7280',
                  }}
                >
                  Dark UI
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('ats')}
                  style={{
                    padding: '5px 12px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    borderRadius: '7px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    background: isAts ? '#111827' : 'transparent',
                    color: isAts ? '#ffffff' : 'var(--color-text-muted)',
                  }}
                >
                  ATS Document
                </button>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={handleCopyText}
                className={isAts ? '' : 'btn-outline'}
                style={{
                  padding: '7px 12px',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderRadius: '10px',
                  border: isAts ? '1px solid #d1d5db' : '1px solid rgba(108, 99, 255, 0.3)',
                  background: isAts ? '#f9fafb' : 'rgba(108, 99, 255, 0.1)',
                  color: isAts ? '#111827' : '#ffffff',
                }}
                title="Copy formatted plain text resume for job portals"
              >
                {copied ? <Check size={15} style={{ color: '#10b981' }} /> : <Copy size={15} />}
                {copied ? 'Copied ATS Text!' : 'Copy Text'}
              </button>

              <button
                onClick={handlePrint}
                className={isAts ? '' : 'btn-outline'}
                style={{
                  padding: '7px 12px',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderRadius: '10px',
                  border: isAts ? '1px solid #d1d5db' : '1px solid rgba(108, 99, 255, 0.3)',
                  background: isAts ? '#f9fafb' : 'rgba(108, 99, 255, 0.1)',
                  color: isAts ? '#111827' : '#ffffff',
                }}
                title="Print or Save as PDF"
              >
                <Printer size={15} />
                Print / Save PDF
              </button>

              <a
                href="/Govika_M_Resume.pdf"
                download="Govika_M_Resume.pdf"
                className="btn-primary"
                style={{
                  padding: '7px 14px',
                  fontSize: '0.82rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                title="Download PDF File"
              >
                <Download size={15} />
                Download PDF
              </a>

              <button
                onClick={onClose}
                aria-label="Close modal"
                style={{
                  background: isAts ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  border: isAts ? '1px solid #d1d5db' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  color: isAts ? '#374151' : 'var(--color-text-secondary)',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  marginLeft: '4px',
                }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div
            id="printable-resume"
            style={{
              color: isAts ? '#111827' : 'var(--color-text-primary)',
              fontFamily: isAts ? 'Arial, Helvetica, sans-serif' : 'var(--font-body)',
              lineHeight: 1.55,
            }}
          >
            {/* Header / Intro */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h1
                style={{
                  fontSize: '2.1rem',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  marginBottom: '4px',
                  background: isAts ? 'none' : 'var(--gradient-primary)',
                  WebkitBackgroundClip: isAts ? 'none' : 'text',
                  WebkitTextFillColor: isAts ? '#111827' : 'transparent',
                  color: '#111827',
                }}
              >
                {personalInfo.name}
              </h1>
              <p
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: isAts ? '#4f46e5' : 'var(--color-accent)',
                  marginBottom: '12px',
                }}
              >
                {personalInfo.title}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '14px',
                  fontSize: '0.84rem',
                  color: isAts ? '#4b5563' : 'var(--color-text-muted)',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <MapPin size={13} style={{ color: isAts ? '#4f46e5' : 'var(--color-primary)' }} />
                  {personalInfo.location}
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'inherit', textDecoration: 'none' }}
                >
                  <Mail size={13} style={{ color: isAts ? '#4f46e5' : 'var(--color-primary)' }} />
                  {personalInfo.email}
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'inherit', textDecoration: 'none' }}
                >
                  <Phone size={13} style={{ color: isAts ? '#4f46e5' : 'var(--color-primary)' }} />
                  {personalInfo.phone}
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'inherit', textDecoration: 'none' }}
                >
                  <FaLinkedin size={13} style={{ color: '#0A66C2' }} />
                  LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'inherit', textDecoration: 'none' }}
                >
                  <FaGithub size={13} style={{ color: isAts ? '#111827' : '#ffffff' }} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div style={{ marginBottom: '22px' }}>
              <div
                className="resume-section-divider"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: isAts ? '1.5px solid #111827' : '1px solid rgba(108, 99, 255, 0.25)',
                  paddingBottom: '5px',
                  marginBottom: '10px',
                }}
              >
                <Sparkles size={15} style={{ color: isAts ? '#4f46e5' : 'var(--color-primary)' }} />
                <h4
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    margin: 0,
                    color: isAts ? '#111827' : '#ffffff',
                  }}
                >
                  Professional Summary
                </h4>
              </div>
              <p
                style={{
                  fontSize: '0.88rem',
                  lineHeight: '1.65',
                  color: isAts ? '#374151' : 'var(--color-text-secondary)',
                  margin: 0,
                }}
              >
                {personalInfo.aboutMe}
              </p>
            </div>

            {/* Technical Skills (Dynamic) */}
            <div style={{ marginBottom: '22px' }}>
              <div
                className="resume-section-divider"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: isAts ? '1.5px solid #111827' : '1px solid rgba(108, 99, 255, 0.25)',
                  paddingBottom: '5px',
                  marginBottom: '10px',
                }}
              >
                <Code size={15} style={{ color: isAts ? '#4f46e5' : 'var(--color-primary)' }} />
                <h4
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    margin: 0,
                    color: isAts ? '#111827' : '#ffffff',
                  }}
                >
                  Technical Skills
                </h4>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '9px',
                  fontSize: '0.84rem',
                }}
              >
                {skillCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="resume-card-box"
                    style={{
                      background: isAts ? '#f9fafb' : 'rgba(255, 255, 255, 0.02)',
                      padding: '9px 13px',
                      borderRadius: '8px',
                      border: isAts ? '1px solid #e5e7eb' : '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <strong
                      style={{
                        color: isAts ? '#111827' : 'var(--color-primary-light)',
                        marginRight: '6px',
                      }}
                    >
                      {cat.title}:
                    </strong>
                    <span style={{ color: isAts ? '#4b5563' : 'var(--color-text-secondary)' }}>
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience / Internship */}
            <div style={{ marginBottom: '22px' }}>
              <div
                className="resume-section-divider"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: isAts ? '1.5px solid #111827' : '1px solid rgba(108, 99, 255, 0.25)',
                  paddingBottom: '5px',
                  marginBottom: '10px',
                }}
              >
                <Briefcase size={15} style={{ color: isAts ? '#4f46e5' : 'var(--color-primary)' }} />
                <h4
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    margin: 0,
                    color: isAts ? '#111827' : '#ffffff',
                  }}
                >
                  Experience / Internship
                </h4>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: '4px',
                  }}
                >
                  <h5
                    style={{
                      fontSize: '0.93rem',
                      fontWeight: 700,
                      margin: 0,
                      color: isAts ? '#111827' : '#ffffff',
                    }}
                  >
                    {internship.role}{' '}
                    <span style={{ color: isAts ? '#4f46e5' : 'var(--color-primary)' }}>
                      • {internship.company}
                    </span>
                  </h5>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: isAts ? '#4b5563' : 'var(--color-accent)',
                    }}
                  >
                    {internship.period}
                  </span>
                </div>
                <ul
                  style={{
                    margin: '6px 0 0 18px',
                    padding: 0,
                    fontSize: '0.84rem',
                    color: isAts ? '#374151' : 'var(--color-text-secondary)',
                    lineHeight: '1.6',
                  }}
                >
                  {internship.highlights.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div style={{ marginBottom: '22px' }}>
              <div
                className="resume-section-divider"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: isAts ? '1.5px solid #111827' : '1px solid rgba(108, 99, 255, 0.25)',
                  paddingBottom: '5px',
                  marginBottom: '10px',
                }}
              >
                <Code size={15} style={{ color: isAts ? '#4f46e5' : 'var(--color-primary)' }} />
                <h4
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    margin: 0,
                    color: isAts ? '#111827' : '#ffffff',
                  }}
                >
                  Key Projects
                </h4>
              </div>
              {projects.map((proj, idx) => (
                <div key={idx} style={{ marginBottom: '14px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                      gap: '4px',
                    }}
                  >
                    <h5
                      style={{
                        fontSize: '0.93rem',
                        fontWeight: 700,
                        margin: 0,
                        color: isAts ? '#111827' : '#ffffff',
                      }}
                    >
                      {proj.title}
                    </h5>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: isAts ? '#4f46e5' : 'var(--color-primary-light)',
                            fontSize: '0.78rem',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '3px',
                          }}
                        >
                          <ExternalLink size={12} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: isAts ? '#4b5563' : 'var(--color-text-muted)',
                      margin: '3px 0',
                      lineHeight: '1.5',
                    }}
                  >
                    {proj.description}
                  </p>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: isAts ? '#1e40af' : 'var(--color-accent)',
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    <strong>Tech Stack:</strong> {proj.techStack.join(', ')}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div style={{ marginBottom: '22px' }}>
              <div
                className="resume-section-divider"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: isAts ? '1.5px solid #111827' : '1px solid rgba(108, 99, 255, 0.25)',
                  paddingBottom: '5px',
                  marginBottom: '10px',
                }}
              >
                <BookOpen size={15} style={{ color: isAts ? '#4f46e5' : 'var(--color-primary)' }} />
                <h4
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    margin: 0,
                    color: isAts ? '#111827' : '#ffffff',
                  }}
                >
                  Education
                </h4>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '12px',
                }}
              >
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="resume-card-box"
                    style={{
                      background: isAts ? '#f9fafb' : 'rgba(255, 255, 255, 0.02)',
                      padding: '11px 15px',
                      borderRadius: '10px',
                      border: isAts ? '1px solid #e5e7eb' : '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <strong style={{ color: isAts ? '#111827' : '#ffffff', fontSize: '0.88rem' }}>
                        {edu.degree}
                      </strong>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: isAts ? '#4f46e5' : 'var(--color-accent)',
                        }}
                      >
                        {edu.year}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '0.82rem',
                        color: isAts ? '#4b5563' : 'var(--color-text-muted)',
                        marginTop: '3px',
                      }}
                    >
                      {edu.institution}
                    </div>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: isAts ? '#047857' : 'var(--color-primary-light)',
                        marginTop: '3px',
                        fontWeight: 600,
                      }}
                    >
                      {edu.scoreLabel}: {edu.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div style={{ marginBottom: '8px' }}>
              <div
                className="resume-section-divider"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: isAts ? '1.5px solid #111827' : '1px solid rgba(108, 99, 255, 0.25)',
                  paddingBottom: '5px',
                  marginBottom: '10px',
                }}
              >
                <Award size={15} style={{ color: isAts ? '#4f46e5' : 'var(--color-primary)' }} />
                <h4
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    margin: 0,
                    color: isAts ? '#111827' : '#ffffff',
                  }}
                >
                  Certifications & Achievements
                </h4>
              </div>
              <ul
                style={{
                  margin: '0 0 0 18px',
                  padding: 0,
                  fontSize: '0.84rem',
                  color: isAts ? '#374151' : 'var(--color-text-secondary)',
                  lineHeight: '1.65',
                }}
              >
                {certifications.map((cert, idx) => (
                  <li key={idx}>
                    <strong style={{ color: isAts ? '#111827' : '#ffffff' }}>{cert.name}</strong> — {cert.provider}
                  </li>
                ))}
                {achievements.map((ach, idx) => (
                  <li key={`ach-${idx}`}>
                    <strong style={{ color: isAts ? '#111827' : '#ffffff' }}>{ach.title}</strong>: {ach.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
