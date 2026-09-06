import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { STATS } from '../data/portfolioData';
import { Sparkles, Layers, CheckCircle2, TrendingUp } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = (key: string) => UI_TEXT[key]?.[currentLang] || key;

  return (
    <section id="about" className="py-16 md:py-20 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mb-3">
            {t('aboutHeading')}
          </h2>
          <div className="w-12 h-0.5 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Narrative Bio */}
        <div className="space-y-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed max-w-3xl mb-14">
          <p>{t('aboutP1')}</p>
          <p>{t('aboutP2')}</p>
          <p>{t('aboutP3')}</p>
          <p>{t('aboutP4')}</p>
        </div>

        {/* Flat, Mathematical Stat Metrics Grid - Anti-slop: No card-in-card nesting */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-5 rounded-xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-300/80 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50/90 transition-all hover:border-cyan-500/30"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 leading-snug mb-1">
                {stat.label[currentLang]}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                {stat.subtext[currentLang]}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hiring Manager Value Pillars */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 dark:text-cyan-400 light:text-cyan-600" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600">
              {t('aboutHiringHighlightsTitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl border border-slate-800/70 dark:border-slate-800/70 light:border-slate-300/80 bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-50/70">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                {t('whyHire1Title')}
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {t('whyHire1Desc')}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-800/70 dark:border-slate-800/70 light:border-slate-300/80 bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-50/70">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 dark:text-blue-400 light:text-blue-700 mb-3">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                {t('whyHire2Title')}
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {t('whyHire2Desc')}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-800/70 dark:border-slate-800/70 light:border-slate-300/80 bg-slate-900/30 dark:bg-slate-900/30 light:bg-slate-50/70">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 dark:text-emerald-400 light:text-emerald-700 mb-3">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                {t('whyHire3Title')}
              </h4>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {t('whyHire3Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
