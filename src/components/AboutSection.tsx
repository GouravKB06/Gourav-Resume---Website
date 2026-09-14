'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

const stats = [
  { label: 'CGPA', value: '9.27', suffix: '/10' },
  { label: 'Grad Year', value: '2028', suffix: '' },
  { label: 'Projects', value: '2+', suffix: '' },
  { label: 'Languages', value: '5', suffix: '' },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section ref={ref} id="about" className="relative py-28 overflow-hidden">
      {/* Faint grid */}
      <div className="absolute inset-0 circuit-bg pointer-events-none opacity-40" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        {/* Section heading */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: '#00d9ff',
              opacity: 0.7,
            }}
          >
            01.
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700,
              color: '#e6edf3',
            }}
          >
            about_me
          </h2>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(90deg, rgba(48,54,61,0.8), transparent)' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div>
            <motion.div variants={itemVariants} className="space-y-5">
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: '#8b949e',
                }}
              >
                I&apos;m a{' '}
                <span style={{ color: '#e6edf3' }}>second-year Information Science & Engineering student</span>{' '}
                at{' '}
                <span style={{ color: '#00d9ff' }}>JSS Academy of Technology, Bengaluru</span>{' '}
                (expected graduation 2028), with a strong foundation in backend development and a growing passion for cloud computing.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#8b949e' }}>
                I build production-quality applications — my flagship project,{' '}
                <span style={{ color: '#39ff88', fontFamily: 'var(--font-mono)' }}>MediTrack</span>, is a
                full-stack Spring Boot medicine inventory system featuring a fully normalized database schema, stored
                procedures, MySQL triggers, and automated cron-job monitoring.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#8b949e' }}>
                Outside of coding, I volunteer at hackathons, coordinate events, and explore AWS cloud fundamentals —
                driven by a belief that{' '}
                <span style={{ color: '#e6edf3' }}>
                  great engineers build things that actually work in the real world.
                </span>
              </p>
            </motion.div>

            {/* Education card */}
            <motion.div variants={itemVariants} className="mt-8 glass-card p-5">
              <div className="flex items-start gap-3">
                <div
                  className="mt-1 p-2 rounded-lg"
                  style={{ background: 'rgba(0, 217, 255, 0.1)', border: '1px solid rgba(0, 217, 255, 0.2)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d9ff" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00d9ff' }}>
                    Education
                  </div>
                  <div style={{ fontWeight: 600, color: '#e6edf3', marginTop: 4 }}>
                    B.E. Information Science & Engineering
                  </div>
                  <div style={{ color: '#8b949e', fontSize: '0.875rem', marginTop: 2 }}>
                    JSS Academy of Technology, Bengaluru
                  </div>
                  <div
                    className="mt-3 flex flex-wrap gap-2"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}
                  >
                    <span className="tech-chip">CGPA: 9.27</span>
                    <span className="tech-chip">Expected 2028</span>
                    <span className="tech-chip">12th: 91%</span>
                    <span className="tech-chip">10th: 81%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Languages spoken */}
            <motion.div variants={itemVariants} className="mt-5">
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#484f58',
                  marginBottom: 8,
                  letterSpacing: '0.08em',
                }}
              >
                LANGUAGES SPOKEN
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.languages.map((lang) => (
                  <span
                    key={lang.name}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 6,
                      background: 'rgba(22, 27, 34, 0.8)',
                      border: '1px solid rgba(48, 54, 61, 0.8)',
                      color: '#8b949e',
                    }}
                  >
                    {lang.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Stats + Terminal */}
          <div className="space-y-6">
            {/* Stats grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-5 text-center hover:border-accent transition-all duration-300"
                  style={{ borderColor: 'rgba(48, 54, 61, 0.8)' }}
                >
                  <div
                    className="gradient-text"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '2rem',
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                    <span style={{ fontSize: '1rem', opacity: 0.7 }}>{stat.suffix}</span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: '#484f58',
                      marginTop: 4,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Terminal bio card */}
            <motion.div
              variants={itemVariants}
              className="glass-card overflow-hidden"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{
                  background: 'rgba(13, 17, 23, 0.8)',
                  borderBottom: '1px solid rgba(48, 54, 61, 0.6)',
                }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
                <span style={{ fontSize: '0.75rem', color: '#484f58', marginLeft: 8 }}>
                  gourav@dev — profile.json
                </span>
              </div>
              {/* Terminal content */}
              <div className="p-5 text-xs space-y-1.5" style={{ color: '#8b949e', fontSize: '0.78rem', lineHeight: 1.7 }}>
                <div>
                  <span style={{ color: '#00d9ff' }}>const</span>{' '}
                  <span style={{ color: '#39ff88' }}>gourav</span>{' '}
                  <span style={{ color: '#e6edf3' }}>=</span>{' '}
                  <span style={{ color: '#e6edf3' }}>{'{'}</span>
                </div>
                <div className="pl-4">
                  <span style={{ color: '#e6edf3' }}>name</span>:{' '}
                  <span style={{ color: '#a5d6ff' }}>&quot;Gourav Kesarla B&quot;</span>,
                </div>
                <div className="pl-4">
                  <span style={{ color: '#e6edf3' }}>role</span>:{' '}
                  <span style={{ color: '#a5d6ff' }}>&quot;Information Science Engineer&quot;</span>,
                </div>
                <div className="pl-4">
                  <span style={{ color: '#e6edf3' }}>stack</span>:{' '}
                  <span style={{ color: '#e6edf3' }}>[</span>
                  <span style={{ color: '#a5d6ff' }}>&quot;Java&quot;</span>,{' '}
                  <span style={{ color: '#a5d6ff' }}>&quot;Spring Boot&quot;</span>,{' '}
                  <span style={{ color: '#a5d6ff' }}>&quot;MySQL&quot;</span>
                  <span style={{ color: '#e6edf3' }}>]</span>,
                </div>
                <div className="pl-4">
                  <span style={{ color: '#e6edf3' }}>university</span>:{' '}
                  <span style={{ color: '#a5d6ff' }}>&quot;JSS Academy, Bengaluru&quot;</span>,
                </div>
                <div className="pl-4">
                  <span style={{ color: '#e6edf3' }}>cgpa</span>:{' '}
                  <span style={{ color: '#f78166' }}>9.27</span>,
                </div>
                <div className="pl-4">
                  <span style={{ color: '#e6edf3' }}>cloudInterest</span>:{' '}
                  <span style={{ color: '#f78166' }}>true</span>,
                </div>
                <div className="pl-4">
                  <span style={{ color: '#e6edf3' }}>openToWork</span>:{' '}
                  <span style={{ color: '#f78166' }}>true</span>
                </div>
                <div>
                  <span style={{ color: '#e6edf3' }}>{'}'}</span>
                  <span className="terminal-cursor" style={{ width: 7, height: '1em' }} />
                </div>
              </div>
            </motion.div>

            {/* Certification */}
            <motion.div variants={itemVariants} className="glass-card p-4 flex items-center gap-3">
              <div
                className="p-2 rounded-lg flex-shrink-0"
                style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#e6edf3', fontWeight: 500 }}>
                  Java Programming Certification
                </div>
                <div style={{ fontSize: '0.75rem', color: '#8b949e' }}>Scaler Academy</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
