import React, { useState, useEffect } from 'react';
import { Language, Theme, Project } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { PERSONAL_INFO } from './data/portfolioData';
import { Command, Check, Copy, Sparkles, Terminal } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showKeyboardHints, setShowKeyboardHints] = useState(false);

  // Sync theme with HTML root class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // Section observer for scroll spy
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcuts for power users & recruiters
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      if (e.key.toLowerCase() === 't') {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
        showToast('Theme switched');
      } else if (e.key.toLowerCase() === 'l') {
        setCurrentLang((prev) => (prev === 'en' ? 'de' : prev === 'de' ? 'sr' : 'en'));
        showToast('Language toggled');
      } else if (e.key.toLowerCase() === 'c') {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        showToast('Email copied to clipboard');
      } else if (e.key.toLowerCase() === 'r') {
        setIsResumeOpen((prev) => !prev);
      } else if (e.key === '?') {
        setShowKeyboardHints((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2200);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-slate-950 text-slate-100'
          : 'bg-slate-50 text-slate-900 light'
      }`}
    >
      {/* Ambient background grid pattern */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-60 z-0"></div>

      {/* Main App Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Header
          currentLang={currentLang}
          onSelectLang={setCurrentLang}
          theme={theme}
          onToggleTheme={toggleTheme}
          activeSection={activeSection}
        />

        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* About Section */}
        <AboutSection currentLang={currentLang} />

        {/* Projects Section */}
        <ProjectsSection
          currentLang={currentLang}
          onOpenCaseStudy={(proj) => setSelectedProject(proj)}
        />

        {/* Skills & Workflow Section */}
        <SkillsSection currentLang={currentLang} />

        {/* Experience Section */}
        <ExperienceSection currentLang={currentLang} />

        {/* Contact Section */}
        <ContactSection currentLang={currentLang} />

        {/* Footer */}
        <Footer currentLang={currentLang} />
      </div>

      {/* Detailed Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        currentLang={currentLang}
      />

      {/* Instant CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        currentLang={currentLang}
      />

      {/* Floating Keyboard Shortcuts Hint Button */}
      <div className="fixed bottom-4 right-4 z-40 hidden sm:block">
        <button
          onClick={() => setShowKeyboardHints(!showKeyboardHints)}
          className="p-2 rounded-full border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-700 shadow-md backdrop-blur-sm transition-all"
          title="Keyboard shortcuts (?)"
        >
          <Command className="w-4 h-4" />
        </button>

        {showKeyboardHints && (
          <div className="absolute bottom-12 right-0 w-60 p-3 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 bg-slate-900 dark:bg-slate-900 light:bg-white text-xs shadow-2xl space-y-2">
            <div className="font-mono text-[11px] font-semibold text-cyan-400 dark:text-cyan-400 light:text-cyan-700 uppercase tracking-wider flex items-center justify-between">
              <span>Quick Shortcuts</span>
              <kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">?</kbd>
            </div>
            <div className="space-y-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700 font-mono text-[11px]">
              <div className="flex justify-between items-center">
                <span>Toggle Theme</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">T</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span>Switch Language</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">L</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span>Copy Email</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">C</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span>View Resume</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">R</kbd>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium bg-cyan-500 text-slate-950 shadow-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Check className="w-3.5 h-3.5" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
