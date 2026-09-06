import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { SKILLS_DATA } from '../data/portfolioData';
import { Code, Server, Cpu, ShieldCheck, Check } from 'lucide-react';

interface SkillsSectionProps {
  currentLang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentLang }) => {
  const t = (key: string) => UI_TEXT[key]?.[currentLang] || key;

  const frontendSkills = SKILLS_DATA.filter((s) => s.category === 'frontend');
  const backendSkills = SKILLS_DATA.filter((s) => s.category === 'backend');
  const aiAndToolsSkills = [
    ...SKILLS_DATA.filter((s) => s.category === 'ai'),
    ...SKILLS_DATA.filter((s) => s.category === 'tools'),
  ];
  const principles = SKILLS_DATA.filter((s) => s.category === 'principles');

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mb-3">
            {t('skillsHeading')}
          </h2>
          <div className="w-12 h-0.5 bg-cyan-500 rounded-full mb-3"></div>
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            {t('skillsSubheading')}
          </p>
        </div>

        {/* Minimalist 2x2 Domain Grid - No scrolling tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* 1. Frontend & UI Craft */}
          <div>
            <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <Code className="w-4 h-4 text-cyan-400 dark:text-cyan-400 light:text-cyan-700" />
              <h3 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-200 dark:text-slate-200 light:text-slate-800">
                {t('skillsCategoryFrontend')}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500/40 transition-colors shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* 2. Backend, Databases & Mobile */}
          <div>
            <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <Server className="w-4 h-4 text-cyan-400 dark:text-cyan-400 light:text-cyan-700" />
              <h3 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-200 dark:text-slate-200 light:text-slate-800">
                {t('skillsCategoryBackend')}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500/40 transition-colors shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* 3. AI, Tooling & Ecosystem */}
          <div>
            <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <Cpu className="w-4 h-4 text-cyan-400 dark:text-cyan-400 light:text-cyan-700" />
              <h3 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-200 dark:text-slate-200 light:text-slate-800">
                {t('skillsCategoryTools')}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {aiAndToolsSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/50 dark:bg-slate-900/50 light:bg-white text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500/40 transition-colors shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* 4. Engineering Standards */}
          <div>
            <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
              <ShieldCheck className="w-4 h-4 text-cyan-400 dark:text-cyan-400 light:text-cyan-700" />
              <h3 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-200 dark:text-slate-200 light:text-slate-800">
                {t('skillsCategoryPrinciples')}
              </h3>
            </div>
            <div className="space-y-2.5">
              {principles.map((principle) => (
                <div
                  key={principle.name}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700"
                >
                  <span className="p-0.5 rounded text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-medium text-slate-200 dark:text-slate-200 light:text-slate-900">
                      {principle.name}
                    </span>
                    {principle.note && (
                      <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 block sm:inline sm:ml-1.5">
                        — {principle.note[currentLang]}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
