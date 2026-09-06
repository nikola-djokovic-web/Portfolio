import React, { useState, useEffect } from 'react';
import { Project, Language } from '../types';
import { UI_TEXT } from '../data/translations';
import { X, ExternalLink, Code2, Check, Copy, CheckCircle2, Cpu, FileText } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  currentLang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  currentLang,
}) => {
  const [activeTab, setActiveTab] = useState<'challenge' | 'solution' | 'architecture' | 'impact' | 'code'>('challenge');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const t = (key: string) => UI_TEXT[key]?.[currentLang] || key;
  const cs = project.caseStudy;

  const handleCopyCode = () => {
    if (!cs.codeSnippet) return;
    navigator.clipboard.writeText(cs.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 dark:text-cyan-400 light:text-cyan-700 mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>{project.category[currentLang]}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 dark:hover:text-slate-200 light:hover:text-slate-900 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="px-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center gap-2 overflow-x-auto text-xs font-medium scrollbar-none">
          <button
            onClick={() => setActiveTab('challenge')}
            className={`py-3 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'challenge'
                ? 'border-cyan-400 text-cyan-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {t('challengeTab')}
          </button>
          <button
            onClick={() => setActiveTab('solution')}
            className={`py-3 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'solution'
                ? 'border-cyan-400 text-cyan-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {t('solutionTab')}
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {t('architectureTab')}
          </button>
          <button
            onClick={() => setActiveTab('impact')}
            className={`py-3 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'impact'
                ? 'border-cyan-400 text-cyan-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {t('impactTab')}
          </button>
          {cs.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`py-3 px-3 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'code'
                  ? 'border-cyan-400 text-cyan-400 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {t('codePreviewTab')}
            </button>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed max-h-[50vh]">
          {activeTab === 'challenge' && (
            <div className="space-y-4">
              <p>{cs.challenge[currentLang]}</p>
              <div className="p-4 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <div className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Metrics Target:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {project.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-sm font-bold font-mono text-cyan-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400">{m.label[currentLang]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'solution' && (
            <div className="space-y-4">
              <p>{cs.solution[currentLang]}</p>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-2">
              <ul className="space-y-2.5">
                {cs.architectureHighlights[currentLang].map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="p-1 rounded bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-cyan-950/30 dark:bg-cyan-950/30 light:bg-cyan-50/50 border border-cyan-500/30">
                <div className="text-xs font-mono font-semibold text-cyan-400 mb-1">
                  Business & UX Impact
                </div>
                <p className="text-sm text-slate-200 dark:text-slate-200 light:text-slate-800">
                  {cs.impact[currentLang]}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'code' && cs.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                <span>{cs.codeSnippet.filename}</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                <code>{cs.codeSnippet.code}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between gap-3 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-50">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
              >
                <span>Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 dark:border-slate-700 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/60 dark:hover:bg-slate-800/60 light:hover:bg-slate-200 transition-colors"
            >
              {t('closeModal')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
