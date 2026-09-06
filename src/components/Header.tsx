import React from 'react';
import { Language, Theme } from '../types';
import { UI_TEXT } from '../data/translations';
import { Moon, Sun, Globe, FileText } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  theme: Theme;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  theme,
  onToggleTheme,
  activeSection,
}) => {
  const t = (key: string) => UI_TEXT[key]?.[currentLang] || key;

  const navItems = [
    { id: 'about', label: t('navAbout') },
    { id: 'projects', label: t('navProjects') },
    { id: 'skills', label: t('navSkills') },
    { id: 'experience', label: t('navExperience') },
    { id: 'contact', label: t('navContact') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-950/85 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Logo & Availability Status - always in one row */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-bold tracking-tight hover:opacity-90 transition-opacity whitespace-nowrap"
            id="header-logo-link"
          >
            <span className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 dark:border-cyan-500/40 flex items-center justify-center text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 shrink-0">
              NÐ
            </span>
            <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">
              Nikola Djokovic
            </span>
          </a>

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                id={`nav-link-${item.id}`}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Language, Theme, Resume */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 p-0.5">
            <div className="px-1 text-slate-500 hidden sm:block">
              <Globe className="w-3.5 h-3.5" />
            </div>
            {(['en', 'de', 'sr'] as Language[]).map((lang) => (
              <button
                key={lang}
                id={`lang-btn-${lang}`}
                onClick={() => onSelectLang(lang)}
                className={`px-2 py-1 text-xs font-mono uppercase rounded transition-all ${
                  currentLang === lang
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
                title={lang === 'en' ? 'English' : lang === 'de' ? 'Deutsch' : 'Srpski'}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label="Toggle dark/light mode"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Resume Modal Trigger */}
          <a
            id="open-resume-btn"
            href="/assets/NIKOLA-DJOKOVIC-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-cyan-600/30 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('viewResume')}</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </div>
    </header>
  );
};

