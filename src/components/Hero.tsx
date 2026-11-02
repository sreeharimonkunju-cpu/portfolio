import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  BrainCircuit, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2,
  Bot,
  Zap,
  GraduationCap,
  Terminal,
  Activity
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useRipple } from './M3Ripple';
import { GlassTiltCard } from './GlassTiltCard';
import profilePhoto from '../assets/sreehari.jpg';

export const Hero: React.FC = () => {
  const { createRipple: rippleWork, RippleContainer: RippleWork } = useRipple();
  const { createRipple: rippleConnect, RippleContainer: RippleConnect } = useRipple();
  const [photoLoaded, setPhotoLoaded] = useState(false);

  // Floating animation variants for orbital badges
  const floatingBadge = (delay: number, yRange: number = 8) => ({
    animate: {
      y: [-yRange, yRange, -yRange],
      transition: {
        duration: 4.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      },
    },
  });

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Core Copy & Material Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          
          {/* M3 Ambient Status Pill with Pulsing Ring */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-glass-subtle bg-indigo-950/40 border border-indigo-400/30 text-indigo-200 text-xs font-medium mb-6 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-ring-emerald absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
            </span>
            <span className="font-semibold tracking-wide">Available for AI Trainee Roles & Product Development</span>
          </motion.div>

          {/* Primary Headline with Shimmering Liquid Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Hi, I'm <br />
            <span className="text-shimmer drop-shadow-[0_0_35px_rgba(99,102,241,0.4)]">
              {PERSONAL_INFO.name}
            </span>
          </motion.h1>

          {/* Subheadline with MD3 Typography scale */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
          >
            <span className="text-white font-semibold">B.Tech CS Student</span> | Building intelligent solutions with <span className="text-cyan-300 font-medium">Python</span>, <span className="text-purple-300 font-medium">Generative AI</span>, and <span className="text-indigo-300 font-medium">Modern Web Tech</span>.
          </motion.p>

          {/* Quick Context Highlights Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mb-9"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full liquid-glass-subtle">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full liquid-glass-subtle">
              <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
              <span>Joy University • Expected 2030</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full liquid-glass-subtle">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Google for Devs '26</span>
            </div>
          </motion.div>

          {/* Action Buttons: Frosted Material Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => rippleWork(e as any)}
              className="m3-button-primary w-full sm:w-auto py-3.5 px-8 text-sm font-semibold group shadow-glow-primary"
            >
              <RippleWork />
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </a>

            <a
              href="#contact"
              onClick={(e) => rippleConnect(e as any)}
              className="m3-button-glass w-full sm:w-auto py-3.5 px-8 text-sm font-semibold"
            >
              <RippleConnect />
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Connect</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Sreehari's Portrait in a 3D Liquid Glass Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center order-1 lg:order-2"
        >
          {/* Ambient Multi-Hue Liquid Glow behind photo */}
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-indigo-500/30 via-cyan-400/25 to-purple-600/35 blur-2xl opacity-80" />

          {/* 3D Tilt Card Container */}
          <GlassTiltCard 
            className="w-full max-w-sm sm:max-w-md" 
            glowColor="rgba(56, 189, 248, 0.3)" 
            maxTilt={12}
          >
            <div className="relative liquid-glass-elevated rounded-[32px] p-3.5 sm:p-4 border border-white/25 shadow-2xl overflow-hidden preserve-3d">
              
              {/* Photo Viewport */}
              <div className="relative w-full aspect-[4/5] rounded-[26px] overflow-hidden bg-slate-950/80 border border-white/15">
                
                {/* Fallback shimmer before load */}
                {!photoLoaded && (
                  <div className="absolute inset-0 bg-slate-900 animate-pulse flex items-center justify-center">
                    <BrainCircuit className="w-10 h-10 text-slate-700 animate-spin" />
                  </div>
                )}

                {/* Sreehari's High-Resolution Portrait */}
                <img
                  src={profilePhoto}
                  alt="Sreehari PS - AI Developer and B.Tech CS Student"
                  onLoad={() => setPhotoLoaded(true)}
                  className={`w-full h-full object-cover object-center filter saturate-[1.08] contrast-[1.04] transition-all duration-700 group-hover:scale-105 ${
                    photoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Glass Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-black/20 pointer-events-none" />

                {/* Specular gloss sweep */}
                <div className="glass-gloss-sweep" />

                {/* Bottom Overlay Label inside the photo */}
                <div className="absolute bottom-3 inset-x-3 liquid-glass rounded-2xl p-3 border border-white/20 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight">
                        Sreehari PS
                      </h3>
                      <p className="text-[11px] text-cyan-300 font-mono flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        AI & Machine Learning Scholar
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-[10px] text-emerald-300 font-semibold shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Active
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom Meta Bar */}
              <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                  Joy Univ • 2030
                </span>
                <span className="text-[10px] text-slate-500">vibe_coder::v2.6</span>
              </div>
            </div>

            {/* Orbital Floating Liquid Glass Badges with Parallax Bobbing */}
            
            {/* Badge 1: Top Left - AI Systems */}
            <motion.div
              variants={floatingBadge(0, 7)}
              animate="animate"
              className="absolute -top-3 -left-3 sm:-left-5 liquid-glass-elevated rounded-2xl px-3.5 py-2 border border-white/30 shadow-xl flex items-center gap-2 z-20"
            >
              <div className="w-7 h-7 rounded-xl bg-indigo-500/30 border border-indigo-400/40 flex items-center justify-center text-cyan-300">
                <BrainCircuit className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] text-slate-400 block font-mono">Core Focus</span>
                <span className="text-xs font-bold text-white">AI & Agents</span>
              </div>
            </motion.div>

            {/* Badge 2: Top Right - Vibe Coding */}
            <motion.div
              variants={floatingBadge(1.2, 9)}
              animate="animate"
              className="absolute -top-3 -right-3 sm:-right-5 liquid-glass-elevated rounded-2xl px-3.5 py-2 border border-white/30 shadow-xl flex items-center gap-2 z-20"
            >
              <div className="w-7 h-7 rounded-xl bg-amber-500/25 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] text-slate-400 block font-mono">Workflow</span>
                <span className="text-xs font-bold text-white">Vibe Coding</span>
              </div>
            </motion.div>

            {/* Badge 3: Bottom Right - Google Certified */}
            <motion.div
              variants={floatingBadge(2.2, 8)}
              animate="animate"
              className="absolute -bottom-4 -right-2 sm:-right-4 liquid-glass-elevated rounded-2xl px-3.5 py-2 border border-white/30 shadow-xl flex items-center gap-2 z-20"
            >
              <div className="w-7 h-7 rounded-xl bg-emerald-500/25 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] text-slate-400 block font-mono">Recognized</span>
                <span className="text-xs font-bold text-white">Google Dev '26</span>
              </div>
            </motion.div>

            {/* Badge 4: Bottom Left - Jarvis Assistant */}
            <motion.div
              variants={floatingBadge(0.6, 6)}
              animate="animate"
              className="absolute -bottom-4 -left-2 sm:-left-4 liquid-glass-elevated rounded-2xl px-3.5 py-2 border border-white/30 shadow-xl flex items-center gap-2 z-20"
            >
              <div className="w-7 h-7 rounded-xl bg-cyan-500/25 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                <Bot className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] text-slate-400 block font-mono">Assistant</span>
                <span className="text-xs font-bold text-white">Jarvis Architect</span>
              </div>
            </motion.div>

          </GlassTiltCard>

        </motion.div>

      </div>
    </section>
  );
};
