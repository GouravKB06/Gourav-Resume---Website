'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((v) => {
      setScrolled(v > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  useEffect(() => {
    const sections = navItems.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10, 14, 20, 0.9)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(48,54,61,0.5)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#00d9ff',
            }}
          >
            <span className="opacity-50">&lt;</span>
            GKB
            <span className="opacity-50">/&gt;</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="nav-link"
              style={{
                color: activeSection === item.href.slice(1) ? '#00d9ff' : undefined,
              }}
            >
              <span className="text-accent opacity-60 mr-1" style={{ color: '#00d9ff' }}>
                {String(i + 1).padStart(2, '0')}.
              </span>
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="/Gourav_Kesarla_B_Resume.pdf"
            download
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="btn-glow px-4 py-2 rounded-lg text-sm font-mono border border-accent text-accent"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: '#00d9ff',
              borderColor: 'rgba(0, 217, 255, 0.5)',
            }}
          >
            resume.pdf
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 bg-current transition-transform"
            style={{
              background: '#00d9ff',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-opacity"
            style={{ background: '#00d9ff', opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 bg-current transition-transform"
            style={{
              background: '#00d9ff',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border-color"
          style={{ background: 'rgba(10, 14, 20, 0.97)', backdropFilter: 'blur(16px)' }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="nav-link text-lg"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}
              >
                <span style={{ color: '#00d9ff', opacity: 0.6 }}>{String(i + 1).padStart(2, '0')}.</span>{' '}
                {item.label}
              </a>
            ))}
            <a
              href="/Gourav_Kesarla_B_Resume.pdf"
              download
              className="btn-glow px-4 py-2 rounded-lg text-center border border-accent text-accent w-fit"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00d9ff', borderColor: 'rgba(0,217,255,0.5)' }}
            >
              resume.pdf
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
