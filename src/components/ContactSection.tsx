import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useRipple } from './M3Ripple';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { createRipple, RippleContainer } = useRipple();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch with animation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-chip mb-3"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs uppercase tracking-wider font-semibold">Get In Touch</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Let's Collaborate on <br className="hidden sm:block" />
            <span className="text-shimmer">
              Intelligent Solutions
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Whether you are seeking an AI developer trainee, looking to build a high-performance hackathon MVP, or discussing generative architectures, I am eager to connect.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Contact Frosted Card */}
            <div className="liquid-glass-elevated rounded-3xl p-6 sm:p-7 border border-white/15 space-y-6 relative overflow-hidden group hover:border-cyan-400/30 transition-all duration-300">
              <div className="glass-gloss-sweep" />

              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Contact Details
              </h3>

              {/* Email item with copy button */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-3 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-slate-400 block">Direct Email</span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 truncate block transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl liquid-glass text-slate-300 hover:text-white transition-colors shrink-0"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 hover:border-indigo-400/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Phone & WhatsApp</span>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 block font-mono transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 hover:border-purple-400/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-white block">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-2 flex flex-col gap-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Professional Profiles
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl liquid-glass hover:bg-slate-800/80 border border-white/15 flex items-center justify-between text-slate-200 hover:text-white transition-all transform hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 group-hover:text-cyan-300 transition-colors" />
                      <span className="text-xs font-semibold">GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition-colors" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl liquid-glass hover:bg-slate-800/80 border border-white/15 flex items-center justify-between text-slate-200 hover:text-white transition-all transform hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-sky-400 group-hover:text-sky-300 transition-colors" />
                      <span className="text-xs font-semibold">LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-300 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Liquid Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="liquid-glass-elevated rounded-3xl p-6 sm:p-9 border border-white/15 shadow-2xl relative overflow-hidden group hover:border-indigo-400/30 transition-all duration-300">
              <div className="glass-gloss-sweep" />

              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below and I will get back to you promptly.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center rounded-2xl bg-emerald-950/40 border border-emerald-400/40 space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I've received your query and will respond to your inbox shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl liquid-glass bg-slate-950/60 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-2xl liquid-glass bg-slate-950/60 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / AI Collaboration / Question"
                      className="w-full px-4 py-3 rounded-2xl liquid-glass bg-slate-950/60 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project requirements, opportunities, or just say hello..."
                      className="w-full px-4 py-3 rounded-2xl liquid-glass bg-slate-950/60 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={(e) => createRipple(e as any)}
                    className="m3-button-primary w-full py-3.5 px-6 text-sm font-semibold flex items-center justify-center gap-2 mt-2"
                  >
                    <RippleContainer />
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}

              {/* Ambient Glass Highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-2xl pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
