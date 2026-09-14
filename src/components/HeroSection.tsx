'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { resumeData } from '@/lib/resume-data';

const socialLinks = [
  {
    label: 'GitHub',
    href: resumeData.personal.github,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: resumeData.personal.linkedin,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: `mailto:${resumeData.personal.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg pt-28 md:pt-36 pb-16"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 hero-radial pointer-events-none"
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,217,255,0.06) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(57,255,136,0.05) 0%, transparent 70%)' }}
        />
      </div>

      {/* Main content grid: Photo on Left, Content on Right */}
      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: Photo + Status Frame ── */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative group">
              {/* Outer cyber frame with animated glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-2xl"
                style={{
                  background: 'conic-gradient(from 0deg, #00d9ff 0%, transparent 35%, #39ff88 65%, transparent 85%, #00d9ff 100%)',
                  borderRadius: '24px',
                  opacity: 0.6,
                  filter: 'blur(8px)',
                }}
              />

              {/* Photo Card Container */}
              <div
                className="relative rounded-2xl overflow-hidden p-2"
                style={{
                  background: 'rgba(13, 17, 23, 0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(0, 217, 255, 0.35)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 217, 255, 0.25)',
                }}
              >
                {/* Tech HUD header inside photo card */}
                <div className="flex items-center justify-between px-3 py-1.5 mb-2 border-b border-border-color/60 font-mono text-[10px] text-text-secondary">
                  <span className="flex items-center gap-1.5 text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    ID // GKB-2028
                  </span>
                  <span className="text-accent-green">SYS: NOMINAL</span>
                </div>

                {/* Photo */}
                <div className="relative rounded-xl overflow-hidden w-[210px] h-[245px] sm:w-[250px] sm:h-[290px]">
                  <Image
                    src="/gourav-photo.jpg"
                    alt="Gourav Kesarla B"
                    fill
                    sizes="(max-width: 640px) 210px, 250px"
                    className="object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle scanline overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Card footer tag */}
                <div className="mt-2.5 px-2 py-1 flex items-center justify-between font-mono text-[11px] text-text-secondary">
                  <span className="text-text-primary font-semibold">Gourav Kesarla B</span>
                  <span className="text-accent-green">JSSATEB</span>
                </div>
              </div>
            </div>

            {/* Status badge below photo */}
            <motion.div variants={itemVariants} className="mt-6 flex justify-center">
              <div className="status-badge">
                <div className="status-dot" />
                Open to opportunities · Bengaluru
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN: Content & CTAs ── */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Pre-name terminal indicator */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3">
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: '#00d9ff',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                &gt; Hello, World — I&apos;m
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-bold tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              <span className="gradient-text">Gourav Kesarla B</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="mt-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                color: '#8b949e',
                fontWeight: 400,
              }}
            >
              <span style={{ color: '#e6edf3' }}>Information Science Engineer</span>
              <span className="mx-2.5 opacity-30">|</span>
              <span style={{ color: '#00d9ff' }}>Backend</span>
              <span className="mx-1 opacity-30">&</span>
              <span style={{ color: '#39ff88' }}>Cloud</span>
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xl text-base sm:text-lg"
              style={{
                color: '#8b949e',
                lineHeight: 1.7,
              }}
            >
              {resumeData.personal.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="btn-glow px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  background: 'rgba(0, 217, 255, 0.1)',
                  border: '1px solid rgba(0, 217, 255, 0.5)',
                  color: '#00d9ff',
                }}
              >
                <span>view projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/Gourav_Kesarla_B_Resume.pdf"
                download
                className="btn-glow px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  border: '1px solid rgba(57, 255, 136, 0.4)',
                  color: '#39ff88',
                  background: 'rgba(57, 255, 136, 0.05)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>resume.pdf</span>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center lg:justify-start gap-3.5"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="p-3 rounded-xl transition-all duration-300 flex items-center gap-2 font-mono text-xs"
                  style={{
                    background: 'rgba(22, 27, 34, 0.8)',
                    border: '1px solid rgba(48, 54, 61, 0.8)',
                    color: '#8b949e',
                  }}
                  aria-label={link.label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00d9ff';
                    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8b949e';
                    e.currentTarget.style.borderColor = 'rgba(48, 54, 61, 0.8)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {link.icon}
                  <span className="hidden sm:inline text-[11px]">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-14 flex flex-col items-center gap-2"
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: '#484f58',
              letterSpacing: '0.1em',
            }}
          >
            scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#484f58" strokeWidth="1.5">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
