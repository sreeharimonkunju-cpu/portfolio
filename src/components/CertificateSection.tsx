import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Copy, Check, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { CERTIFICATE_DATA } from '../data/portfolioData';

export const CertificateSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(CERTIFICATE_DATA.certificateId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-chip mb-3"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs uppercase tracking-wider font-semibold">Honors & Workshops</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Google for Developers <br className="hidden sm:block" />
            <span className="text-shimmer">
              Vibe Coding Certification
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Recognized participation in the state-level modern AI development and vibe coding initiative.
          </motion.p>
        </div>

        {/* Certificate Display Card: Specular Frosted Glass */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative liquid-glass-elevated rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl overflow-hidden group hover:border-amber-400/40 transition-all duration-300"
        >
          {/* Specular gloss sweep */}
          <div className="glass-gloss-sweep" />

          {/* Top Brand Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              {/* Google colored dots */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
                <span className="text-xs font-semibold text-white ml-1">Google for Developers</span>
              </div>
              
              <span className="text-slate-500 hidden sm:inline">•</span>
              
              <span className="px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 text-xs font-semibold">
                StartupTN
              </span>
            </div>

            {/* Verified Credential Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-400/40 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Participation</span>
            </div>
          </div>

          {/* Certificate Main Content */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Certificate of Participation
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {CERTIFICATE_DATA.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Awarded to <strong className="text-white font-semibold">{CERTIFICATE_DATA.recipient}</strong> for successfully mastering AI-driven rapid prototyping, agentic prompt engineering, and production web deployment at the Noorul Islam Centre for Higher Education, Kumaracoil, Kanniyakumari.
              </p>

              {/* Skills covered */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Competencies Mastered:
                </span>
                <div className="flex flex-wrap gap-2">
                  {CERTIFICATE_DATA.skillsLearned.map((s) => (
                    <span key={s} className="liquid-chip text-xs text-indigo-200 hover:scale-105">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Meta Column: Signatory & Copy ID */}
            <div className="lg:col-span-4 flex flex-col justify-center p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <div>
                <span className="text-[10px] uppercase font-mono text-slate-400 block mb-0.5">
                  Signatory Authority
                </span>
                <p className="text-sm font-bold text-white">{CERTIFICATE_DATA.signatory}</p>
                <p className="text-xs text-slate-400">{CERTIFICATE_DATA.signatoryRole}</p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] uppercase font-mono text-slate-400 block mb-0.5">
                  Date of Issue
                </span>
                <p className="text-xs font-mono font-medium text-slate-300">
                  {CERTIFICATE_DATA.date}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">
                  Certificate ID
                </span>
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-950/80 border border-white/15">
                  <span className="font-mono text-xs text-cyan-300 font-semibold truncate">
                    {CERTIFICATE_DATA.certificateId}
                  </span>
                  <button
                    onClick={handleCopyId}
                    className="p-1 rounded-md text-slate-400 hover:text-white transition-colors"
                    aria-label="Copy Certificate ID"
                    title="Copy Certificate ID"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[10px] text-emerald-400 mt-1 block">
                    Copied to clipboard!
                  </span>
                )}
              </div>
            </div>

          </div>

          {/* Ambient Corner Flare */}
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-tr from-amber-500/20 via-rose-500/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};
