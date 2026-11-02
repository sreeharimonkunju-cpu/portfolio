import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, FolderGit2, Cpu, User, Mail, Award, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/sreehari.jpg';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const navItems = [
    { name: 'About Me', href: '#about', icon: User },
    { name: 'Tech Stack & Skills', href: '#skills', icon: Cpu },
    { name: 'Featured Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Get In Touch', href: '#contact', icon: Mail },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with Frosted Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md md:hidden"
            aria-hidden="true"
          />

          {/* Sliding Liquid Glass Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm liquid-glass-elevated bg-slate-900/95 border-l border-white/20 p-6 flex flex-col justify-between md:hidden shadow-2xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div>
              {/* Header inside drawer with Sreehari's photo */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 p-[1.5px] shadow-lg">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
                      <img 
                        src={profilePhoto} 
                        alt="Sreehari P.S." 
                        className="w-full h-full object-cover object-center" 
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950 shadow-[0_0_8px_#10b981]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base">Sreehari P.S.</h3>
                    <p className="text-[11px] text-cyan-300 font-mono">B.Tech AI & ML • 2030</p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full liquid-glass-subtle text-slate-300 hover:text-white"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-indigo-600/35 text-cyan-200 border border-indigo-400/50 shadow-lg'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl liquid-glass text-xs text-slate-200 hover:text-white"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl liquid-glass text-xs text-slate-200 hover:text-white"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn Network</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <p className="text-[10px] text-center text-slate-500 pt-2">
                Joy University • Kanyakumari
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
