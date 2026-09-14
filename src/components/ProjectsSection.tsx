'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

type Project = (typeof resumeData.projects)[number];

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const accentColor = project.color === 'accent' ? '#00d9ff' : '#39ff88';
  const accentColorDim = project.color === 'accent' ? 'rgba(0, 217, 255, 0.1)' : 'rgba(57, 255, 136, 0.1)';
  const accentBorder = project.color === 'accent' ? 'rgba(0, 217, 255, 0.25)' : 'rgba(57, 255, 136, 0.25)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute -top-3 left-6 z-10 px-3 py-0.5 rounded-full text-xs"
          style={{
            fontFamily: 'var(--font-mono)',
            background: accentColorDim,
            border: `1px solid ${accentBorder}`,
            color: accentColor,
            letterSpacing: '0.05em',
          }}
        >
          ★ FLAGSHIP PROJECT
        </div>
      )}

      <div
        className="glass-card-hover h-full flex flex-col cursor-pointer transition-all duration-500"
        style={{
          borderColor: isExpanded ? accentBorder : 'rgba(48, 54, 61, 0.8)',
          boxShadow: isExpanded
            ? `0 8px 32px rgba(0, 0, 0, 0.4), 0 0 30px ${accentColorDim}`
            : '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
        onClick={() => setIsExpanded((v) => !v)}
      >
        {/* Card header */}
        <div className="p-6 pb-0">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div
              className="p-2.5 rounded-xl"
              style={{ background: accentColorDim, border: `1px solid ${accentBorder}` }}
            >
              {project.id === 'meditrack' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0H5m4 0h10m0 0v7m0-7v-4" />
                  <path d="M12 11v4m0 0v4m0-4h4m-4 0H8" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              )}
            </div>

            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{
                    background: 'rgba(22, 27, 34, 0.8)',
                    border: '1px solid rgba(48, 54, 61, 0.6)',
                    color: '#8b949e',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = accentColor;
                    e.currentTarget.style.borderColor = accentBorder;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8b949e';
                    e.currentTarget.style.borderColor = 'rgba(48, 54, 61, 0.6)';
                  }}
                  aria-label="View on GitHub"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="p-2"
                style={{ color: '#484f58' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.div>
            </div>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: accentColor,
              opacity: 0.8,
              marginBottom: 4,
              letterSpacing: '0.05em',
            }}
          >
            {project.type}
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#e6edf3' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#8b949e', marginTop: 2 }}>
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <div className="p-6 pb-4 flex-1">
          <p style={{ fontSize: '0.875rem', color: '#8b949e', lineHeight: 1.7 }}>
            {project.description}
          </p>
        </div>

        {/* Expandable highlights */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-4">
            <div
              className="h-px mb-4"
              style={{ background: `linear-gradient(90deg, ${accentBorder}, transparent)` }}
            />
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: accentColor,
                marginBottom: 8,
                letterSpacing: '0.08em',
              }}
            >
              KEY HIGHLIGHTS
            </div>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span style={{ color: accentColor, marginTop: 2, flexShrink: 0 }}>▸</span>
                  <span style={{ fontSize: '0.8rem', color: '#8b949e', lineHeight: 1.6 }}>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Tech stack chips */}
        <div className="px-6 pb-6">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="tech-chip"
                style={{ color: accentColor, borderColor: accentBorder, fontSize: '0.7rem' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 circuit-bg pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#00d9ff', opacity: 0.7 }}>
            03.
          </span>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#e6edf3' }}>
            projects
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(48,54,61,0.8), transparent)' }} />
        </motion.div>

        {/* Instruction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-8 flex items-center gap-2"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#484f58' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          Click a card to expand key highlights
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resumeData.projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: '#484f58',
            }}
          >
            More projects in the works —{' '}
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
              style={{ color: '#00d9ff' }}
            >
              github.com/{resumeData.personal.githubUsername}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
