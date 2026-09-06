import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Project } from '../types';
import { UI_TEXT } from '../data/translations';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Code2, ArrowUpRight, Cpu } from 'lucide-react';

interface ProjectsSectionProps {
  currentLang: Language;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  currentLang,
  onOpenCaseStudy,
}) => {
  const [filter, setFilter] = useState<'all' | 'react' | 'vue'>('all');
  const t = (key: string) => UI_TEXT[key]?.[currentLang] || key;

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'react') return project.tags.includes('React') || project.tags.includes('Next.js');
    if (filter === 'vue') return project.tags.includes('Vue.js');
    return true;
  });

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
              {t('projectsHeading')}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              {t('projectsSubheading')}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 self-start sm:self-auto">
            {(['all', 'react', 'vue'] as const).map((cat) => {
              const label =
                cat === 'all'
                  ? t('filterAll')
                  : cat === 'react'
                  ? t('filterReact')
                  : t('filterVue');
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid with Silky Smooth AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-colors duration-200 hover:border-cyan-500/50 shadow-sm dark:shadow-none hover:shadow-md dark:hover:border-cyan-500/40"
              >
                <div>
                  {/* Header / Client or Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-700 dark:text-cyan-400">
                      {project.badge ? project.badge[currentLang] : project.client || 'FEATURED APP'}
                    </span>
                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Production
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.description[currentLang]}
                  </p>

                  {/* Key Metrics on the Card */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 mb-6 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-left">
                        <div className="text-xs sm:text-sm font-bold font-mono text-cyan-700 dark:text-cyan-400">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                          {metric.label[currentLang]}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{t('viewCaseStudy')}</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 inline-flex items-center gap-1"
                        title="Inspect Architecture"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-slate-800 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 inline-flex items-center gap-1"
                      >
                        <span>{t('liveApp')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

