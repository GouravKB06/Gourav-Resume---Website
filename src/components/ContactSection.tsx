'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(resumeData.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const contactLinks = [
    {
      label: 'GitHub',
      value: `github.com/${resumeData.personal.githubUsername}`,
      href: resumeData.personal.github,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      color: '#e6edf3',
    },
    {
      label: 'LinkedIn',
      value: `linkedin.com/in/${resumeData.personal.linkedinUsername}`,
      href: resumeData.personal.linkedin,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: '#0a66c2',
    },
    {
      label: 'Email',
      value: resumeData.personal.email,
      href: `mailto:${resumeData.personal.email}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      color: '#00d9ff',
    },
  ];

  return (
    <section ref={ref} id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 circuit-bg pointer-events-none opacity-30" />

      {/* Ambient glow at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,217,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#00d9ff', opacity: 0.7 }}>
            05.
          </span>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#e6edf3' }}>
            contact
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(48,54,61,0.8), transparent)' }} />
        </motion.div>

        {/* CTA text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: '#00d9ff',
              opacity: 0.7,
              marginBottom: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            What&apos;s next?
          </div>
          <h3
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              fontWeight: 700,
              color: '#e6edf3',
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Together</span>
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#8b949e',
              lineHeight: 1.7,
              maxWidth: 560,
              margin: '0 auto 32px',
            }}
          >
            I&apos;m a second-year student always open to internships, collaborations, or just great conversations about
            backend engineering, cloud computing, and building real-world systems.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <a
            href={`mailto:${resumeData.personal.email}`}
            className="btn-glow inline-flex items-center gap-3 px-8 py-4 rounded-xl font-mono text-base transition-all duration-300"
            style={{
              fontFamily: 'var(--font-mono)',
              background: 'rgba(0, 217, 255, 0.08)',
              border: '1px solid rgba(0, 217, 255, 0.4)',
              color: '#00d9ff',
              fontSize: '0.95rem',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Say Hello
          </a>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-5 flex flex-col items-center gap-3 group cursor-pointer"
              style={{ textDecoration: 'none' }}
            >
              <div
                className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'rgba(22, 27, 34, 0.8)',
                  border: '1px solid rgba(48, 54, 61, 0.6)',
                  color: '#8b949e',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = link.color;
                  e.currentTarget.style.borderColor = `${link.color}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8b949e';
                  e.currentTarget.style.borderColor = 'rgba(48, 54, 61, 0.6)';
                }}
              >
                {link.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#484f58',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 2,
                  }}
                >
                  {link.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#8b949e',
                  }}
                >
                  {link.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Email copy button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          onClick={copyEmail}
          className="inline-flex items-center gap-2 transition-all duration-200"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: copied ? '#39ff88' : '#484f58',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Copied to clipboard!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              Click to copy email
            </>
          )}
        </motion.button>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-20 pt-8 text-center"
        style={{ borderTop: '1px solid rgba(48, 54, 61, 0.3)' }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#484f58',
            lineHeight: 1.8,
          }}
        >
          <div>
            Designed & Built by{' '}
            <span className="gradient-text" style={{ fontWeight: 600 }}>
              Gourav Kesarla B
            </span>
          </div>
          <div className="mt-1">
            <span style={{ color: '#30363d' }}>{'<'}</span>
            Built with Next.js · TypeScript · Tailwind · Framer Motion
            <span style={{ color: '#30363d' }}>{'>'}</span>
          </div>
          <div className="mt-1" style={{ color: '#30363d' }}>
            {new Date().getFullYear()} · Bengaluru, India
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
