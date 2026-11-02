import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Terminal, 
  BrainCircuit, 
  MessageSquareCode, 
  FileJson, 
  Database, 
  Layers, 
  Palette, 
  Wind, 
  Video, 
  Code2, 
  Globe, 
  Zap, 
  Workflow, 
  Send, 
  GitBranch, 
  Cloud,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { Skill } from '../types';
import { useRipple } from './M3Ripple';

// Icon Map for dynamic icon rendering
const iconMap: Record<string, React.ElementType> = {
  Terminal,
  BrainCircuit,
  MessageSquareCode,
  FileJson,
  Database,
  Layers,
  Palette,
  Wind,
  Video,
  Code2,
  Globe,
  Zap,
  Workflow,
  Send,
  GitBranch,
  Cloud,
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const { createRipple, RippleContainer } = useRipple();

  const categories = [
    'All',
    'Core AI & Languages',
    'Frontend & Design',
    'Systems, Data & Tools'
  ];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-chip mb-3"
          >
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs uppercase tracking-wider font-semibold">Technical Arsenal</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Mastered Technologies & <br className="hidden sm:block" />
            <span className="text-shimmer">
              Liquid Glass Toolkit
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            A versatile spectrum ranging from core Python AI logic and modern Material Design 3 interfaces 
            to rapid prompt-driven vibe coding and multimedia editing.
          </motion.p>
        </div>

        {/* MD3 Segmented Filter Category Chips with Framer Motion Layout */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12" role="tablist" aria-label="Filter Skills by Category">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={(e) => {
                  createRipple(e);
                  setActiveCategory(category);
                }}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-[0_0_24px_rgba(99,102,241,0.5)] border border-white/40 scale-105'
                    : 'liquid-glass-subtle text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <RippleContainer />
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid: Frosted Liquid-Glass Chips & Interactive Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.iconName] || Terminal;
              const isSelected = selectedSkill?.name === skill.name;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.93, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.35 }}
                  key={skill.name}
                  onClick={() => setSelectedSkill(isSelected ? null : skill)}
                  className={`group relative liquid-glass rounded-2xl p-5 border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isSelected
                      ? 'border-cyan-400/70 bg-slate-800/85 shadow-[0_0_30px_rgba(6,182,212,0.3)]'
                      : 'border-white/10 hover:border-white/30 hover:bg-slate-800/60 hover:-translate-y-1'
                  }`}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isSelected}
                  aria-label={`${skill.name} - Proficiency ${skill.level}%`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedSkill(isSelected ? null : skill);
                    }
                  }}
                >
                  {/* Specular gloss sweep */}
                  <div className="glass-gloss-sweep" />

                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
                        skill.highlight
                          ? 'bg-gradient-to-tr from-indigo-500/30 to-cyan-500/30 border border-indigo-400/50 text-cyan-300 shadow-sm'
                          : 'bg-white/[0.04] border border-white/10 text-slate-300'
                      }`}>
                        <IconComponent className="w-5 h-5 group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-white text-base flex items-center gap-1.5">
                          {skill.name}
                          {skill.highlight && (
                            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" aria-label="Key Skill" />
                          )}
                        </h3>
                        <span className="text-[11px] text-slate-400">{skill.category}</span>
                      </div>
                    </div>

                    {/* Numerical Level Pill */}
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900/90 text-cyan-300 border border-cyan-500/40 shadow-inner">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level Progress Bar with Glowing Head */}
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden mb-3.5 p-0.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className={`h-full rounded-full relative ${
                        skill.highlight
                          ? 'bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]'
                          : 'bg-slate-400 group-hover:bg-cyan-400'
                      }`}
                    />
                  </div>

                  {/* Skill Description */}
                  <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Highlighted Core Portfolio Skill Badges Strip */}
        <div className="mt-14 liquid-glass-elevated rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/25 to-indigo-500/25 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-white text-base sm:text-lg">
                  Core Portfolio Focus Technologies
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Python • Generative AI • React • Material Design 3 • Data Serialization • CapCut Video Editing
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-2">
              {['Python', 'Generative AI', 'React', 'Material Design', 'Data Serialization', 'CapCut Video Editing'].map((tag) => (
                <span key={tag} className="liquid-chip text-xs text-cyan-200 font-medium hover:scale-105">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
