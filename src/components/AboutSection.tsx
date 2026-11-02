import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  Brain, 
  Target, 
  CheckCircle,
  Lightbulb,
  Workflow,
  Sparkles,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/sreehari.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-chip mb-3"
          >
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs uppercase tracking-wider font-semibold">About Me</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Engineering at the Intersection of <br className="hidden sm:block" />
            <span className="text-shimmer">
              AI Intelligence & Human Interaction
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            From low-latency autonomous local agents to explainable computer-vision screening pipelines,
            I build software where cutting-edge AI is accessible, dependable, and delightfully fluid.
          </motion.p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 liquid-glass-elevated rounded-3xl p-7 sm:p-9 border border-white/15 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/30 transition-all duration-300"
          >
            {/* Specular gloss sweep */}
            <div className="glass-gloss-sweep" />

            <div>
              {/* Header with mini-profile avatar */}
              <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-white/20 p-0.5 bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-md">
                    <img 
                      src={profilePhoto} 
                      alt="Sreehari P.S." 
                      className="w-full h-full object-cover object-center rounded-[14px]"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">Focus & Mindset</h3>
                    <p className="text-xs text-slate-400">Transforming AI Research into Living Software</p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  Product Developer
                </span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a passionate <strong className="text-white font-semibold">B.Tech student in Artificial Intelligence & Machine Learning</strong> at Joy University. My journey is rooted in turning ambitious algorithmic ideas into practical, deployed systems that people can touch, hear, and interact with.
                </p>
                <p>
                  My technical focus spans <strong className="text-cyan-300 font-semibold">Generative AI, agentic architectures, and applied computer vision</strong>. Whether it's screening identity credentials for subtle digital tampering in <em className="text-indigo-300 not-italic font-medium">TrustLens AI</em>, designing a hybrid local/cloud cognitive voice assistant in <em className="text-indigo-300 not-italic font-medium">Jarvis</em>, or investigating predictive diagnostics in healthcare, I prioritize system reliability, explainability, and speed.
                </p>
                <p>
                  As an advocate for modern <strong className="text-purple-300 font-semibold">Vibe Coding</strong> and AI-assisted development tools, I embrace the rapid transition from prompt-driven concepting to robust full-stack engineering.
                </p>
              </div>
            </div>

            {/* Fast Strengths Bar with Interactive Scale */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {[
                { label: 'Learning Agility', value: 'Rapid' },
                { label: 'Product Mindset', value: 'User First' },
                { label: 'Execution', value: 'Self-Driven' },
                { label: 'Communication', value: 'Clear & Open' }
              ].map((s) => (
                <div 
                  key={s.label} 
                  className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all transform hover:-translate-y-1"
                >
                  <span className="text-[10px] text-slate-400 block mb-0.5">{s.label}</span>
                  <span className="text-xs font-bold text-cyan-200">{s.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Education & Core Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="liquid-glass rounded-3xl p-6 sm:p-7 border border-white/15 hover:border-indigo-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Education</h3>
                  <p className="text-xs text-slate-400">Academic Foundation</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="text-sm font-bold text-white leading-tight">
                    B.Tech in Artificial Intelligence & Machine Learning
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 shrink-0 ml-2">
                    Exp. 2030
                  </span>
                </div>
                <p className="text-xs text-indigo-300 font-medium">Joy University, Kanyakumari</p>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Foundations in machine learning algorithms, computer vision, data structures, and autonomous systems.
                </p>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="px-3 py-2 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400 text-[11px]">Class XII (CBSE)</span>
                  <span className="font-mono font-semibold text-slate-200">62%</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400 text-[11px]">Class X (CBSE)</span>
                  <span className="font-mono font-semibold text-slate-200">75%</span>
                </div>
              </div>
            </motion.div>

            {/* Core Domain Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="liquid-glass rounded-3xl p-6 sm:p-7 border border-white/15 space-y-3"
            >
              <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-purple-400" />
                Primary Engineering Pillars
              </h3>

              {PERSONAL_INFO.pillars.map((pillar) => (
                <div 
                  key={pillar.title}
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-400/40 hover:bg-white/[0.06] transition-all transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-bold text-white">{pillar.title}</h4>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/30">
                      {pillar.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
