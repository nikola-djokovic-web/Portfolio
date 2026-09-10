import React, { useEffect } from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { PERSONAL_INFO, WORK_EXPERIENCE, SKILLS_DATA } from '../data/portfolioData';
import { X, Printer, Mail, Download, MapPin, Globe, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const t = (key: string) => UI_TEXT[key]?.[currentLang] || key;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Header */}
        <div className="p-4 px-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between gap-4 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
              Curriculum Vitae • Nikola Djokovic
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-800 leading-relaxed font-sans">
          {/* Header */}
          <div className="border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-6">
            <h1 className="text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-950 tracking-tight mb-1">
              Nikola Djokovic
            </h1>
            <p className="text-base font-medium text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mb-3">
              Frontend Developer
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Niš, Serbia
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                Serbian (Native), English (Advanced), Spanish (Intermediate), German (Basic)
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700">
              Frontend Developer with several years of professional experience building, maintaining, and scaling modern web applications in real production environments. Strong focus on clean architecture, user experience, and maintainable code. Experienced with React, Vue.js, TypeScript, Laravel, REST APIs, and enterprise-level web applications. I also use modern AI tools to improve development workflows and deliver reliable, efficient solutions.
            </p>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mb-3">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <div className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 mb-1">
                  Frontend & UI Craft
                </div>
                <div className="text-slate-400 dark:text-slate-400 light:text-slate-600 space-y-0.5">
                  React, Vue.js, TypeScript, JavaScript, HTML, CSS, Bootstrap, PrimeVue, jQuery
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <div className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 mb-1">
                  Backend, DB & Mobile
                </div>
                <div className="text-slate-400 dark:text-slate-400 light:text-slate-600 space-y-0.5">
                  Laravel (PHP), ASP.NET REST APIs, REST API integration, MySQL, CRUD
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <div className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 mb-1">
                  AI Workflow & Tooling
                </div>
                <div className="text-slate-400 dark:text-slate-400 light:text-slate-600 space-y-0.5">
                  Git, GitHub, GitHub Copilot, DATEV, Yousign, Stripe APIs, jsPDF
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mb-4">
              Work Experience
            </h2>
            <div className="space-y-4">
              {WORK_EXPERIENCE.map((job, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm">
                      {job.role.en} @ {job.company}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                    {job.description.en}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between gap-3 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
          <div className="text-xs text-slate-400">
            Direct Contact: <span className="font-mono text-cyan-400">{PERSONAL_INFO.email}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
          >
            {t('closeModal')}
          </button>
        </div>
      </div>
    </div>
  );
};
