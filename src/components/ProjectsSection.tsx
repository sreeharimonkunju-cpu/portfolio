import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Bot, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Info,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { useRipple } from './M3Ripple';
import { GlassTiltCard } from './GlassTiltCard';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { createRipple, RippleContainer } = useRipple();

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'jarvis':
        return <Bot className="w-5 h-5 text-indigo-300" />;
      case 'fako-trustlens':
        return <ShieldCheck className="w-5 h-5 text-cyan-300" />;
      case 'style-muse':
        return <Sparkles className="w-5 h-5 text-amber-300" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-300" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-chip mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs uppercase tracking-wider font-semibold">Featured Work</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Floating Panes of <br className="hidden sm:block" />
            <span className="text-shimmer">
              Intelligent Software
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Engineered with modern hybrid AI pipelines, robust client-side algorithms, and liquid glass surfaces.
          </motion.p>
        </div>

        {/* Responsive Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex"
            >
              <GlassTiltCard 
                className="w-full flex" 
                maxTilt={8}
                glowColor={
                  project.id === 'jarvis' 
                    ? 'rgba(99, 102, 241, 0.35)' 
                    : project.id === 'fako-trustlens' 
                    ? 'rgba(6, 182, 212, 0.35)' 
                    : 'rgba(245, 158, 11, 0.35)'
                }
              >
                <div className="relative w-full liquid-glass-elevated rounded-3xl p-6 sm:p-7 border border-white/15 flex flex-col justify-between overflow-hidden group-hover:border-white/30 transition-all duration-300">
                  
                  {/* Specular gloss sweep */}
                  <div className="glass-gloss-sweep" />

                  {/* Top Meta Strip */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/15 flex items-center justify-center">
                          {getProjectIcon(project.id)}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                            {project.category}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {project.featuredBadge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-400/30">
                          {project.featuredBadge}
                        </span>
                      )}
                    </div>

                    {/* Project Title & Tagline */}
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white group-hover:text-cyan-200 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-indigo-300/90 mb-3">
                      {project.tagline}
                    </p>

                    {/* Brief Description */}
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Bullet Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {project.architectureHighlights.slice(0, 2).map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span className="line-clamp-2">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Area: Tech Stack Tags & Actions */}
                  <div>
                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/10">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="liquid-chip text-[11px] font-mono text-slate-200 bg-white/[0.04] border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons: View Source & Architecture Deep Dive */}
                    <div className="flex items-center justify-between gap-2.5">
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => createRipple(e as any)}
                        className="m3-button-glass flex-1 py-2.5 px-3 text-xs font-semibold text-slate-100 hover:text-white"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <RippleContainer />
                        <Github className="w-3.5 h-3.5" />
                        <span>View Source</span>
                      </a>

                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full liquid-glass text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-all transform hover:scale-110"
                          aria-label={`Open live demo for ${project.title}`}
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : null}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-2.5 rounded-full liquid-glass text-indigo-300 hover:text-white hover:bg-indigo-500/20 transition-all transform hover:scale-110"
                        aria-label={`Open architecture details for ${project.title}`}
                        title="Architecture Deep Dive"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Ambient Corner Flare */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.05] to-transparent rounded-tr-3xl pointer-events-none" />
                </div>
              </GlassTiltCard>
            </motion.div>
          ))}
        </div>

        {/* Modal for Deep Dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
