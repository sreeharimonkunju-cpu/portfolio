import React, { useState, useEffect } from 'react';
import { LiquidBackground } from './components/LiquidBackground';
import { Navbar } from './components/Navbar';
import { MobileDrawer } from './components/MobileDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificateSection } from './components/CertificateSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070b14] text-slate-100 flex flex-col justify-between selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic Animated Liquid Glass Gradient Background */}
      <LiquidBackground />

      {/* Frosted Top Navigation Bar */}
      <Navbar
        onOpenMobileDrawer={() => setIsMobileDrawerOpen(true)}
        activeSection={activeSection}
      />

      {/* Sliding Liquid Glass Drawer (Mobile) */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificateSection />
        <ContactSection />
      </main>

      {/* Frosted Bottom Navigation Dock (Mobile Only) */}
      <MobileBottomNav activeSection={activeSection} />

      {/* Clean Frosted Footer */}
      <Footer />
    </div>
  );
};

export default App;
