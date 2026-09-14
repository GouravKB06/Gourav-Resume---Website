'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface LaptopBootProps {
  onComplete: () => void;
}

const bootSequence = [
  { text: '> Initializing gourav.dev...', delay: 0, color: '#00d9ff' },
  { text: '> Loading core modules...', delay: 600, color: '#8b949e' },
  { text: '> Connecting to cloud services...', delay: 1100, color: '#8b949e' },
  { text: '> Compiling Java 17 runtime...', delay: 1600, color: '#8b949e' },
  { text: '> Mounting Spring Boot context...', delay: 2000, color: '#8b949e' },
  { text: '> STATUS: All systems nominal ✓', delay: 2500, color: '#39ff88' },
];

export default function LaptopBoot({ onComplete }: LaptopBootProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [bootLines, setBootLines] = useState<number[]>([]);
  const [showName, setShowName] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    // Step 1: Open laptop lid
    const t1 = setTimeout(() => setIsOpen(true), 400);

    // Step 2: Show boot lines one by one
    bootSequence.forEach((_, i) => {
      const t = setTimeout(
        () => setBootLines((prev) => [...prev, i]),
        800 + bootSequence[i].delay
      );
    });

    // Step 3: Show name
    const t3 = setTimeout(() => setShowName(true), 4000);

    // Step 4: Exit
    const t4 = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800);
    }, 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete, shouldReduceMotion]);

  const skipAnimation = () => {
    setIsExiting(true);
    setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="laptop-boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Circuit grid background */}
          <div className="absolute inset-0 circuit-bg pointer-events-none" />

          {/* Ambient glow */}
          <div className="absolute inset-0 hero-radial pointer-events-none" />

          {/* Laptop Scene */}
          <div className="laptop-scene relative flex flex-col items-center">
            {/* Laptop Base + Screen Assembly */}
            <div className="relative max-w-[90vw]" style={{ width: isMobile ? 290 : 440, height: isMobile ? 205 : 320 }}>

              {/* ── SCREEN / LID ── */}
              <motion.div
                className="absolute top-0 left-0 right-0 laptop-lid"
                style={{
                  height: isMobile ? 175 : 275,
                  transformOrigin: 'bottom center',
                }}
                animate={{
                  rotateX: isOpen ? 0 : -125,
                }}
                initial={{ rotateX: -125 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.3,
                }}
              >
                {/* Outer lid shell */}
                <div
                  className="absolute inset-0 rounded-t-xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #1a2030, #0d1117)',
                    border: '2px solid #30363d',
                    borderBottom: 'none',
                    boxShadow: '0 -4px 20px rgba(0,0,0,0.6)',
                  }}
                >
                  {/* Apple logo style accent */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      width: 32,
                      height: 32,
                      background: 'rgba(0, 217, 255, 0.08)',
                      border: '1px solid rgba(0, 217, 255, 0.2)',
                    }}
                  />
                </div>

                {/* Screen bezel (inside lid) */}
                <div
                  className="absolute rounded-t-lg overflow-hidden"
                  style={{
                    inset: '6px 10px 0 10px',
                    background: '#050810',
                    border: '1px solid #1a2030',
                  }}
                >
                  {/* Screen content area */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="h-full flex flex-col"
                      >
                        {/* Terminal header bar */}
                        <div
                          className="flex items-center gap-2 px-3 py-2"
                          style={{
                            background: 'rgba(22, 27, 34, 0.9)',
                            borderBottom: '1px solid #30363d',
                          }}
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-80" />
                          <span
                            className="ml-2 text-xs opacity-50"
                            style={{ fontFamily: 'var(--font-mono)', color: '#8b949e', fontSize: '0.6rem' }}
                          >
                            gourav@dev ~ zsh
                          </span>
                        </div>

                        {/* Terminal content */}
                        <div className="flex-1 p-3 overflow-hidden relative">
                          {/* Boot lines */}
                          <div className="space-y-1">
                            {bootSequence.map((line, i) => (
                              <AnimatePresence key={i}>
                                {bootLines.includes(i) && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                      fontFamily: 'var(--font-mono)',
                                      fontSize: isMobile ? '0.5rem' : '0.65rem',
                                      color: line.color,
                                      whiteSpace: 'nowrap',
                                      overflow: 'hidden',
                                    }}
                                  >
                                    {line.text}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            ))}
                          </div>

                          {/* Name reveal */}
                          <AnimatePresence>
                            {showName && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="absolute inset-0 flex flex-col items-center justify-center"
                                style={{ background: 'rgba(5, 8, 16, 0.9)' }}
                              >
                                <motion.div
                                  initial={{ scale: 0.8 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.4, ease: 'backOut' }}
                                  style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: isMobile ? '0.8rem' : '1.1rem',
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #00d9ff, #39ff88)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textAlign: 'center',
                                  }}
                                >
                                  Gourav Kesarla B
                                </motion.div>
                                <div
                                  style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: isMobile ? '0.5rem' : '0.65rem',
                                    color: '#8b949e',
                                    marginTop: 4,
                                    textAlign: 'center',
                                  }}
                                >
                                  Information Science Engineer
                                </div>
                                <div className="terminal-cursor mt-2" style={{ width: 6, height: '0.9em' }} />
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Scan line */}
                          {isOpen && !showName && <div className="scan-line" />}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Screen glow overlay */}
                  {isOpen && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(0,217,255,0.04) 0%, transparent 70%)',
                      }}
                    />
                  )}
                </div>
              </motion.div>

              {/* ── KEYBOARD BASE ── */}
              <div
                className="absolute bottom-0 left-0 right-0 rounded-b-xl"
                style={{
                  height: isMobile ? 32 : 52,
                  background: 'linear-gradient(180deg, #1a2030 0%, #0d1117 100%)',
                  border: '2px solid #30363d',
                  borderTop: '1px solid #21262d',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}
              >
                {/* Keyboard rows */}
                {[0.85, 0.75, 0.65].map((w, i) => (
                  <div
                    key={i}
                    style={{
                      width: `${w * (isMobile ? 85 : 88)}%`,
                      height: isMobile ? 2 : 4,
                      background: 'linear-gradient(90deg, transparent, rgba(48,54,61,0.6), transparent)',
                      borderRadius: 2,
                    }}
                  />
                ))}
                {/* Trackpad */}
                <div
                  style={{
                    width: isMobile ? '22%' : '26%',
                    height: isMobile ? 6 : 10,
                    marginTop: 2,
                    background: 'rgba(48,54,61,0.5)',
                    borderRadius: 3,
                    border: '1px solid rgba(48,54,61,0.8)',
                  }}
                />
              </div>
            </div>

            {/* Loading text below */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="mt-8 text-center"
              style={{ fontFamily: 'var(--font-mono)', color: '#484f58', fontSize: '0.75rem' }}
            >
              {!showName
                ? 'Booting system...'
                : 'Launch sequence complete — entering portfolio...'}
            </motion.div>

            {/* Skip button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              onClick={skipAnimation}
              className="mt-4 text-xs opacity-40 hover:opacity-70 transition-opacity"
              style={{ fontFamily: 'var(--font-mono)', color: '#8b949e', fontSize: '0.7rem' }}
            >
              [ press to skip ]
            </motion.button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
