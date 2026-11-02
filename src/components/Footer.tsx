import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 liquid-glass-subtle bg-slate-950/80 backdrop-blur-2xl py-12 px-4 sm:px-6 lg:px-8 mt-12 mb-16 md:mb-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-heading font-extrabold text-white text-base tracking-tight">
              Sreehari P.S.
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/30">
              Portfolio 2026
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Crafted with Material Design 3 guidelines & Modern Liquid Glassmorphism.
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            Joy University • Computer Science (AI & ML)
          </p>
        </div>

        {/* Social Links & Back-To-Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full liquid-glass text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full liquid-glass text-slate-300 hover:text-white hover:border-sky-400/40 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-sky-400" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-full liquid-glass text-slate-300 hover:text-white hover:border-indigo-400/40 transition-colors"
            aria-label="Send direct email"
          >
            <Mail className="w-4 h-4 text-indigo-300" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full liquid-glass text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-colors ml-2"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
