import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Copy, Check, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const t = (key: string) => UI_TEXT[key]?.[currentLang] || key;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase border border-cyan-600/30 dark:border-cyan-500/40 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
            {t('heroBadge')}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>CET (Europe) • Remote / Hybrid</span>
          </div>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-6 leading-[1.08]"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Main Value Proposition Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-lg sm:text-2xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed max-w-3xl mb-4"
        >
          {t('heroIntro')}
        </motion.p>

        {/* Focus Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="flex flex-wrap items-baseline gap-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 font-normal"
        >
          <span className="font-semibold text-cyan-700 dark:text-cyan-400">
            {t('heroFocusLabel')}
          </span>
          <span>{t('heroFocusText')}</span>
        </motion.div>

        {/* CTA Buttons & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          {/* Primary Action: View Projects */}
          <a
            href="#projects"
            id="hero-cta-projects"
            className="group flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all cursor-pointer font-semibold"
          >
            <span>{t('ctaProjects')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary Action: Email Button */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            id="hero-cta-email"
            className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-400 transition-all shadow-sm"
            title={PERSONAL_INFO.email}
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
            <span className="sm:hidden">Email</span>
          </a>

          {/* Quick Copy Email with Tooltip (Icon Only) */}
          <div className="relative group">
            <button
              id="hero-copy-email-btn"
              onClick={handleCopyEmail}
              aria-label={copied ? t('emailCopied') : t('copyEmail')}
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500 shadow-sm transition-all"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
            {/* Tooltip */}
            <div
              role="tooltip"
              className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900 shadow-md opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150 z-30"
            >
              {copied ? t('emailCopied') : t('copyEmail')}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-100" />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-social-linkedin"
              aria-label="Nikola's LinkedIn Profile"
              title="LinkedIn Profile"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500 shadow-sm transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-social-github"
              aria-label="Nikola's GitHub Profile"
              title="GitHub Profile"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500 shadow-sm transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
