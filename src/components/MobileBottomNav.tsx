import React from 'react';
import { User, Cpu, FolderGit2, Award, Mail } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeSection }) => {
  const navTabs = [
    { id: 'about', label: 'About', href: '#about', icon: User },
    { id: 'skills', label: 'Skills', href: '#skills', icon: Cpu },
    { id: 'projects', label: 'Projects', href: '#projects', icon: FolderGit2 },
    { id: 'certifications', label: 'Certs', href: '#certifications', icon: Award },
    { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden">
      <nav 
        className="max-w-md mx-auto liquid-glass-elevated bg-slate-900/80 backdrop-blur-2xl border border-white/20 rounded-full px-2 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center justify-around"
        aria-label="Mobile Bottom Quick Navigation"
      >
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;

          return (
            <a
              key={tab.id}
              href={tab.href}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-full transition-all duration-200 ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Material Design 3 Active Pill Indicator */}
              {isActive && (
                <span className="absolute inset-0 bg-indigo-500/35 border border-indigo-400/40 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.4)]" />
              )}
              <Icon className={`relative z-10 w-4 h-4 transition-transform ${isActive ? 'scale-110 text-cyan-300' : ''}`} />
              <span className={`relative z-10 text-[9px] font-medium tracking-tight mt-0.5 ${isActive ? 'font-semibold text-cyan-200' : ''}`}>
                {tab.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};
