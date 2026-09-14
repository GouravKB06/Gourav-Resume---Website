'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Timeline line draw
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '100%', '100%']);

  const exp = resumeData.experience[0];

  return (
    <section
      ref={ref}
      id="experience"
      className="relative py-28 overflow-hidden"
      style={{ background: 'rgba(13, 17, 23, 0.5)' }}
    >
      <div className="absolute inset-0 circuit-bg pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#00d9ff', opacity: 0.7 }}>
            04.
          </span>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#e6edf3' }}>
            involvement
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(48,54,61,0.8), transparent)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Animated line */}
          <div
            className="absolute left-0 top-0 w-0.5 rounded-full overflow-hidden"
            style={{ height: '100%', background: 'rgba(48, 54, 61, 0.4)' }}
          >
            <motion.div
              style={{
                height: lineHeight,
                background: 'linear-gradient(to bottom, #00d9ff, #39ff88)',
                boxShadow: '0 0 8px rgba(0, 217, 255, 0.5)',
              }}
            />
          </div>

          {/* Experience entry */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mb-12"
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5, type: 'spring' }}
              className="absolute -left-10 top-1 w-3.5 h-3.5 rounded-full"
              style={{
                background: '#00d9ff',
                boxShadow: '0 0 12px rgba(0, 217, 255, 0.7)',
              }}
            />

            <div className="glass-card p-6">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: '#00d9ff',
                      opacity: 0.8,
                      marginBottom: 4,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {exp.type.toUpperCase()} — {exp.date}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e6edf3' }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#8b949e', marginTop: 2 }}>
                    {exp.organization}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#484f58', marginTop: 1 }}>
                    {exp.location}
                  </p>
                </div>
                <div
                  className="px-3 py-1 rounded-full"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#39ff88',
                    background: 'rgba(57, 255, 136, 0.08)',
                    border: '1px solid rgba(57, 255, 136, 0.25)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {exp.scale}
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span style={{ color: '#00d9ff', marginTop: 3, flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: '0.875rem', color: '#8b949e', lineHeight: 1.7 }}>{h}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Organized by / associated with */}
              <div
                className="pt-4"
                style={{ borderTop: '1px solid rgba(48, 54, 61, 0.5)' }}
              >
                <div style={{ fontSize: '0.75rem', color: '#484f58', marginBottom: 6, fontFamily: 'var(--font-mono)' }}>
                  ORGANIZED BY
                </div>
                <p style={{ fontSize: '0.8rem', color: '#8b949e' }}>{exp.organizedBy}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.associatedWith.map((org) => (
                    <span
                      key={org}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: 6,
                        background: 'rgba(22, 27, 34, 0.8)',
                        border: '1px solid rgba(48, 54, 61, 0.6)',
                        color: '#8b949e',
                      }}
                    >
                      {org}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* AWS Cloud interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7, type: 'spring' }}
              className="absolute -left-10 top-1 w-3.5 h-3.5 rounded-full"
              style={{
                background: '#39ff88',
                boxShadow: '0 0 12px rgba(57, 255, 136, 0.7)',
              }}
            />

            <div className="glass-card p-6">
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: '#39ff88',
                  opacity: 0.8,
                  marginBottom: 4,
                  letterSpacing: '0.05em',
                }}
              >
                ONGOING · 2024–Present
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e6edf3' }}>
                Cloud & Community Building
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#8b949e', marginTop: 2, marginBottom: 12 }}>
                JSS Academy of Technology — AWS Cloud Club Interest
              </p>
              <ul className="space-y-2">
                {[
                  'Actively exploring AWS Cloud Fundamentals — EC2, S3, Lambda, IAM',
                  'Aspiring to join the founding team of the college\'s upcoming AWS/Cloud Club (Events track)',
                  'Planning to run workshops and hands-on labs to build a cloud-learning community for peers',
                  'Bringing practical, project-based development experience to help structure technical events',
                ].map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span style={{ color: '#39ff88', marginTop: 3, flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: '0.875rem', color: '#8b949e', lineHeight: 1.7 }}>{h}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {['AWS', 'EC2', 'S3', 'Lambda', 'IAM', 'Cloud Computing', 'Community Events'].map((tag) => (
                  <span
                    key={tag}
                    className="tech-chip"
                    style={{ color: '#39ff88', borderColor: 'rgba(57,255,136,0.25)', fontSize: '0.7rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
