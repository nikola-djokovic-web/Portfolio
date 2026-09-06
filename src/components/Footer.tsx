import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = (key: string) => UI_TEXT[key]?.[currentLang] || key;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 bg-slate-950/80 dark:bg-slate-950/80 light:bg-white text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          
          <span>•</span>
          <span>{t('footerCrafted')}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-slate-400">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. {t('footerRights')}
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-700 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
