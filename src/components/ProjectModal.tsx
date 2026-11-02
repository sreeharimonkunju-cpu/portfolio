import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Bot, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
        {/* Frosted Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
          aria-hidden="true"
        />

        {/* Modal Window: Elevated Liquid Glass Pane */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          className="relative w-full max-w-3xl liquid-glass-elevated bg-slate-900/90 rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full liquid-glass-subtle text-slate-300 hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-start gap-4 mb-6 pr-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500/25 to-cyan-500/25 border border-indigo-400/40 flex items-center justify-center text-cyan-300 shrink-0">
              {project.id === 'jarvis' && <Bot className="w-6 h-6" />}
              {project.id === 'fako-trustlens' && <ShieldCheck className="w-6 h-6" />}
              {project.id === 'style-muse' && <Sparkles className="w-6 h-6" />}
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                {project.category}
              </span>
              <h2 id="project-modal-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Metrics Strip */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block mb-0.5">{m.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Narrative */}
          <div className="space-y-4 mb-6">
            {project.problemStatement && (
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20">
                <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">
                  The Problem Solved
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            )}

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                System Overview
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.fullOverview}
              </p>
            </div>
          </div>

          {/* Architectural Highlights */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Engineering Highlights
            </h4>
            <div className="space-y-2">
              {project.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="liquid-chip text-xs font-mono text-cyan-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="m3-button-primary text-xs py-2.5 px-5"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="m3-button-glass text-xs py-2.5 px-5"
            >
              <Github className="w-4 h-4" />
              <span>View Source</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
