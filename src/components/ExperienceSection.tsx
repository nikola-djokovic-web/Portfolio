import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceSectionProps {
  currentLang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentLang }) => {
  const t = (key: string) => UI_TEXT[key]?.[currentLang] || key;

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
            {t('experienceHeading')}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl">
            {t('experienceSubheading')}
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-10">
          {WORK_EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Marker Dot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-500 border-4 border-slate-950 dark:border-slate-950 light:border-white shadow-sm"></span>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mb-1">
                <span className="inline-flex items-center gap-1 font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
                <span>•</span>
                <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                {item.role[currentLang]}{' '}
                <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 font-normal">
                  @ {item.company}
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4 max-w-2xl">
                {item.description[currentLang]}
              </p>

              {/* Technologies used in this role */}
              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
