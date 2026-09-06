import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, Clock, Globe2, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [copied, setCopied] = useState(false);

  const t = (key: string) => UI_TEXT[key]?.[currentLang] || key;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
            {t('contactHeading')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            {t('contactSubheading')}
          </p>
        </div>

        {/* 3 Core Contact Cards: Email, LinkedIn, GitHub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* Email Card */}
          <div className="flex flex-col justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm hover:border-cyan-500/50 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Direct Email
              </span>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1 mb-2 break-all">
                {PERSONAL_INFO.email}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Fastest way to get in touch for hiring, contracts, or interview invitations.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="contact-email-btn"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-sm transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t('sendEmailBtn')}</span>
              </a>

              {/* Copy Email Icon Button with Tooltip */}
              <div className="relative group/copy">
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  aria-label={copied ? t('emailCopied') : t('copyEmail')}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500 shadow-sm transition-all"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <div
                  role="tooltip"
                  className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900 shadow-md opacity-0 group-hover/copy:opacity-100 transition-opacity duration-150 z-30"
                >
                  {copied ? t('emailCopied') : t('copyEmail')}
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="flex flex-col justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm hover:border-cyan-500/50 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Professional Network
              </span>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1 mb-2">
                LinkedIn Profile
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Connect for career updates, mutual colleagues, and technical endorsements.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-btn"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all"
              >
                <span>{t('linkedinBtn')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="flex flex-col justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm hover:border-cyan-500/50 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Code & Open Source
              </span>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1 mb-2">
                GitHub Repositories
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Inspect component architecture, test suites, clean commits, and starter templates.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-btn"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500 transition-all"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Recruiter Quick Snapshot Box */}
        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/40 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            <Globe2 className="w-4 h-4" />
            <span>Hiring & Work Preferences</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700 dark:text-slate-300 pt-1">
            <div className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1"></span>
              <div>
                <strong className="block text-slate-900 dark:text-slate-100">Availability</strong>
                <span>Open for Full-Time & Contract frontend roles</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0 mt-1"></span>
              <div>
                <strong className="block text-slate-900 dark:text-slate-100">Timezone & Location</strong>
                <span>Central European Time (CET) • Remote worldwide or hybrid</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1"></span>
              <div>
                <strong className="block text-slate-900 dark:text-slate-100">Response Commitment</strong>
                <span>Direct replies within 24 hours guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

