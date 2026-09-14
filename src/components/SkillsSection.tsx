'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

type SkillItem = { name: string; level: number };

interface SkillBarProps {
  skill: SkillItem;
  delay: number;
  isInView: boolean;
}

function SkillBar({ skill, delay, isInView }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex justify-between mb-1.5">
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: '#e6edf3',
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#00d9ff',
          }}
        >
          {skill.level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(48, 54, 61, 0.6)' }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, #00d9ff, #39ff88)`,
            boxShadow: '0 0 8px rgba(0, 217, 255, 0.4)',
          }}
        />
      </div>
    </motion.div>
  );
}

interface ChipGroupProps {
  items: readonly string[];
  delay: number;
  isInView: boolean;
  color?: string;
}

function ChipGroup({ items, delay, isInView, color = '#00d9ff' }: ChipGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, delay: delay + i * 0.05 }}
          className="tech-chip"
          style={{ color, borderColor: `${color}33` }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '{ }',
    skills: resumeData.skills.languages,
    type: 'bar' as const,
    color: '#00d9ff',
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Tools',
    icon: '⚙',
    skills: resumeData.skills.frameworks,
    type: 'bar' as const,
    color: '#39ff88',
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '🗄',
    skills: resumeData.skills.databases,
    type: 'bar' as const,
    color: '#a855f7',
  },
  {
    id: 'web',
    label: 'Web Technologies',
    icon: '</> ',
    skills: resumeData.skills.web,
    type: 'bar' as const,
    color: '#f97316',
  },
];

const toolsAndExploring = [
  ...resumeData.skills.tools.map((t) => t.name),
  'Maven',
  'Spring @Scheduled',
  'MVC Architecture',
  'REST APIs',
];

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-28 overflow-hidden"
      style={{ background: 'rgba(13, 17, 23, 0.5)' }}
    >
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
            02.
          </span>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#e6edf3' }}>
            technical_skills
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(48,54,61,0.8), transparent)' }} />
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: cat.color,
                    opacity: 0.9,
                  }}
                >
                  {cat.icon}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#e6edf3',
                  }}
                >
                  {cat.label}
                </span>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={catIndex * 0.1 + i * 0.08}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & DevOps chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card p-6"
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#e6edf3',
              marginBottom: 16,
            }}
          >
            🛠 Tools & DevOps
          </div>
          <ChipGroup
            items={toolsAndExploring}
            delay={0.6}
            isInView={isInView}
            color="#00d9ff"
          />
        </motion.div>

        {/* Currently exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 glass-card p-6"
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#e6edf3',
              marginBottom: 16,
            }}
          >
            🚀 Currently Exploring
          </div>
          <ChipGroup
            items={resumeData.skills.exploring}
            delay={0.8}
            isInView={isInView}
            color="#39ff88"
          />
        </motion.div>
      </div>
    </section>
  );
}
