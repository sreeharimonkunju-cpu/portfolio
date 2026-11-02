import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { useRipple } from './M3Ripple';
import profilePhoto from '../assets/sreehari.jpg';

interface NavbarProps {
  onOpenMobileDrawer: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileDrawer, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const { createRipple, RippleContainer } = useRipple();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div 
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          scrolled
            ? 'liquid-glass bg-slate-900/75 shadow-2xl border-white/20 backdrop-blur-2xl'
            : 'liquid-glass-subtle bg-slate-900/45 border-white/10'
        }`}
      >
        {/* Brand Logo & Name with Real Photo Avatar */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-full"
          aria-label="Sreehari P.S. Homepage"
        >
          <div className="relative w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 shadow-md">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center transition-transform group-hover:scale-105">
              <img 
                src={profilePhoto} 
                alt="Sreehari P.S." 
                className="w-full h-full object-cover object-center" 
              />
            </div>
            {/* Live Active Status Pulse */}
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950 shadow-[0_0_8px_#10b981]" />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              Sreehari P.S.
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
              AI & Python Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with Smooth Pill Highlight */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/10" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-indigo-500/35 shadow-[0_0_14px_rgba(99,102,241,0.45)] border border-indigo-400/50'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            onClick={(e) => createRipple(e as any)}
            className="m3-button-primary hidden sm:inline-flex text-xs py-2 px-4.5"
          >
            <RippleContainer />
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
            <span>Connect</span>
          </a>

          {/* Mobile Drawer Hamburger Button */}
          <button
            onClick={onOpenMobileDrawer}
            className="md:hidden relative p-2 rounded-full liquid-glass-subtle text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
