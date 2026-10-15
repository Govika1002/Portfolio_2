import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from '../hooks/useScrollAnimation';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const { ref, controls } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, integrate with EmailJS or backend
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
  ];

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 12,
    border: '1px solid rgba(108, 99, 255, 0.2)',
    background: 'rgba(255, 255, 255, 0.03)',
    color: 'var(--color-text-primary)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--color-primary)';
    e.target.style.boxShadow = '0 0 0 3px rgba(108, 99, 255, 0.15)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(108, 99, 255, 0.2)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section id="contact" className="section-container">
      <motion.div ref={ref} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12,
          }}>
            <Mail size={16} />
            Contact
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Let's Connect
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Have an opportunity or want to chat? Reach out!
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: 32,
          maxWidth: 1000,
          margin: '0 auto',
        }}>
          {/* Contact Info */}
          <motion.div variants={fadeInLeft} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ x: 8 }}
                  className="glass-card"
                  style={{
                    padding: 24,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    textDecoration: 'none',
                    cursor: item.href === '#' ? 'default' : 'pointer',
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(108, 99, 255, 0.1)',
                    border: '1px solid rgba(108, 99, 255, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: 2 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              {[
                { icon: FaLinkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: FaGithub, url: personalInfo.github, label: 'GitHub' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                    style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: 'rgba(108, 99, 255, 0.08)',
                      border: '1px solid rgba(108, 99, 255, 0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-text-secondary)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(108, 99, 255, 0.15)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--color-primary-light)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(108, 99, 255, 0.08)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)';
                    }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInRight}>
            <form onSubmit={handleSubmit} className="glass-card" style={{ padding: 32 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputStyle}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                />
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={handleFocus as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
                  onBlur={handleBlur as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: 120,
                  }}
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '16px 32px',
                    fontSize: '1rem',
                  }}
                >
                  {submitted ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
