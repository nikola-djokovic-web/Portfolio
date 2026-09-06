import { Project, SkillItem, StatMetric, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Nikola Djokovic',
  role: 'Frontend Developer',
  email: 'djokovicnikola69@gmail.com',
  location: 'Europe (CET)',
  availability: 'Open to Roles & Collaborations',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};

export const STATS: StatMetric[] = [
  {
    id: 'exp',
    value: '4+',
    label: {
      en: 'Years of experience',
      de: 'Jahre Berufserfahrung',
      sr: 'Godine iskustva',
    },
    subtext: {
      en: 'Production-ready web apps',
      de: 'Produktionsreife Web-Apps',
      sr: 'Produkcione web aplikacije',
    },
  },
  {
    id: 'features',
    value: '20+',
    label: {
      en: 'Production features delivered',
      de: 'Erfolgreich gelieferte Features',
      sr: 'Isporučenih produkcionih funkcionalnosti',
    },
    subtext: {
      en: 'Across SaaS & enterprise platforms',
      de: 'In SaaS- & Enterprise-Plattformen',
      sr: 'Kroz SaaS i poslovne sisteme',
    },
  },
  {
    id: 'stacks',
    value: '2',
    label: {
      en: 'Primary frontend stacks',
      de: 'Primäre Frontend-Stacks',
      sr: 'Glavna frontend tehnološka steka',
    },
    subtext: {
      en: 'Deep expertise in React & Vue ecosystems',
      de: 'Tiefes Fachwissen in React & Vue Ökosystemen',
      sr: 'Duboka ekspertiza u React & Vue ekosistemima',
    },
  },
  {
    id: 'performance',
    value: '99+',
    label: {
      en: 'Lighthouse Performance Score',
      de: 'Lighthouse Performance-Score',
      sr: 'Lighthouse indeks performansi',
    },
    subtext: {
      en: 'Zero layout shift & sub-second TTI',
      de: 'Keine Layout-Shifts & minimale Ladezeiten',
      sr: 'Bez pomeranja rasporeda i trenutan odziv',
    },
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'mini-property',
    title: 'MiNi Property',
    badge: {
      en: 'Property Management App',
      de: 'Immobilien-Management-App',
      sr: 'Aplikacija za upravljanje nekretninama',
    },
    category: {
      en: 'Full-Cycle SaaS Platform',
      de: 'Full-Cycle SaaS Plattform',
      sr: 'Celovita SaaS platforma',
    },
    description: {
      en: 'Property management platform for tenant onboarding, lease tracking, rent collection, and maintenance workflows. Built role-based access, property listings, document management, and AI-assisted listing content for a service-focused rental experience.',
      de: 'Plattform für Mieter-Onboarding, Mietvertragsverfolgung, Mietinkasso und Instandhaltungs-Workflows. Mit rollenbasierter Zugriffskontrolle, Objektanzeigen, Dokumentenverwaltung und KI-gestützter Angebotserstellung.',
      sr: 'Platforma za upravljanje nekretninama koja pokriva registraciju stanara, praćenje ugovora o zakupu, naplatu stanarine i zahteve za održavanje. Sa ulogama pristupa, oglasima, dokumentima i AI kreiranjem sadržaja.',
    },
    tags: ['React', 'Next.js', 'Supabase', 'AI Features', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      {
        value: '99/100',
        label: {
          en: 'Lighthouse Web Vitals',
          de: 'Lighthouse Web Vitals',
          sr: 'Lighthouse Web Vitals',
        },
      },
      {
        value: '-42%',
        label: {
          en: 'Tenant Onboarding Time',
          de: 'Kürzere Onboarding-Zeit',
          sr: 'Skraćenje vremena prijave',
        },
      },
      {
        value: '100%',
        label: {
          en: 'Type-Safe Data Layer',
          de: 'Typsichere Datenschicht',
          sr: 'Tipski bezbedan sloj podataka',
        },
      },
    ],
    caseStudy: {
      challenge: {
        en: 'Rental management software often suffers from convoluted multi-screen interfaces, slow table rendering on large lease datasets, and complex permission handling between property managers and individual tenants.',
        de: 'Immobilienverwaltungssoftware leidet oft unter unübersichtlichen Oberflächen, langsamer Tabellendarstellung bei großen Datensätzen und fehleranfälligen Berechtigungsstrukturen zwischen Managern und Mietern.',
        sr: 'Softver za upravljanje zakupom često pati od pretrpanih ekrana, sporog renderovanja obimnih tabela i složene podele dozvola između menadžera i zakupaca.',
      },
      solution: {
        en: 'Architected a modular Next.js application leveraging Server Components for immediate initial data load and client-side optimistic UI for instantaneous rent tracking. Integrated Supabase Row-Level Security (RLS) and designed an intuitive AI-assisted description generator.',
        de: 'Entwicklung einer modularen Next.js-Architektur mit React Server Components für blitzschnelle Ladezeiten und optimistischem UI für verzögerungsfreie Statusaktualisierungen. Integrierte Supabase Row-Level Security (RLS) und KI-Textgenerierung.',
        sr: 'Arhitektura u Next.js-u uz Server Components za brz inicijalni prikaz i optimističan UI za trenutne promene statusa uplata. Implementirana Supabase bezbednost po redovima (RLS) i pametno AI generisanje opisa nekretnina.',
      },
      architectureHighlights: {
        en: [
          'Atomic design structure with zero unnecessary re-renders',
          'Virtualised data tables for 1,000+ unit portfolios',
          'Automated PDF invoice generation and lease status sync',
          'WCAG AA accessible form controls with robust Zod validation',
        ],
        de: [
          'Atomic-Design-Komponentenstruktur ohne unnötige Re-Renders',
          'Virtualisierte Tabellen für Bestände mit über 1.000 Einheiten',
          'Automatisierte PDF-Rechnungserstellung und Mietstatussynchronisation',
          'Barrierefreie Formulare (WCAG AA) mit robuster Zod-Validierung',
        ],
        sr: [
          'Atomic design struktura komponenti bez suvišnih osvežavanja',
          'Virtuelizovane tabele za portfolije sa preko 1.000 jedinica',
          'Automatsko generisanje PDF računa i sinhronizacija zakupa',
          'Pristupačne forme (WCAG AA) sa strogom Zod validacijom',
        ],
      },
      impact: {
        en: 'Increased property manager daily productivity by 35% and achieved a near-perfect 99/100 performance rating on mobile and desktop devices.',
        de: 'Steigerung der täglichen Produktivität von Immobilienverwaltern um 35 % bei konstant 99/100 Performance-Scores auf allen Endgeräten.',
        sr: 'Povećana dnevna produktivnost menadžera za 35% uz stabilnu ocenu performansi 99/100 na mobilnim i desktop uređajima.',
      },
      codeSnippet: {
        filename: 'src/features/leases/useOptimisticRent.ts',
        code: `export function useOptimisticRent(leaseId: string) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (payload: PaymentUpdate) => {
      return api.leases.recordPayment(leaseId, payload);
    },
    onMutate: async (newStatus) => {
      await queryClient.cancelQueries(['lease', leaseId]);
      const prev = queryClient.getQueryData(['lease', leaseId]);
      queryClient.setQueryData(['lease', leaseId], (old: any) => ({
        ...old,
        paymentStatus: newStatus.status,
        lastUpdated: new Date().toISOString()
      }));
      return { prev };
    },
    onError: (_err, _vars, context) => {
      queryClient.setQueryData(['lease', leaseId], context?.prev);
    }
  });
}`,
      },
    },
    githubUrl: 'https://github.com',
    liveUrl: 'https://mini-property.app',
    featured: true,
  },
  {
    id: 'stammdaten2go',
    title: 'Stammdaten2Go',
    client: 'ITM Technologies',
    badge: {
      en: 'Enterprise Master Data Platform',
      de: 'Enterprise Stammdaten-Plattform',
      sr: 'Platforma matičnih podataka preduzeća',
    },
    category: {
      en: 'DATEV Integration & Compliance',
      de: 'DATEV-Integration & Compliance',
      sr: 'DATEV integracija i poslovna usklađenost',
    },
    description: {
      en: 'Centralized master-data management platform with DATEV integration. Built complex multi-step forms and a digital-signature workflow system.',
      de: 'Zentralisierte Stammdaten-Management-Plattform mit DATEV-Integration. Erstellung komplexer mehrstufiger Formulare und eines digitalen Signatur-Workflows.',
      sr: 'Centralizovana platforma za upravljanje matičnim podacima sa integracijom za DATEV računovodstveni sistem. Izrađene složene višestepene forme i tok digitalnog potpisivanja ugovora.',
    },
    tags: ['Vue.js', 'TypeScript', 'Stripe API', 'Yousign', 'REST API', 'Pinia'],
    metrics: [
      {
        value: '100%',
        label: {
          en: 'DATEV Schema Compliance',
          de: 'DATEV-Schema-Konformität',
          sr: 'DATEV usklađenost šeme',
        },
      },
      {
        value: '3x',
        label: {
          en: 'Faster Signature Turnaround',
          de: 'Schnellere Signaturprozesse',
          sr: 'Brži proces potpisivanja',
        },
      },
      {
        value: '98%',
        label: {
          en: 'Form Completion Rate',
          de: 'Formularabschlussquote',
          sr: 'Stopa uspešnog unosa formi',
        },
      },
    ],
    caseStudy: {
      challenge: {
        en: 'Handling German tax and corporate compliance required zero tolerance for input discrepancies. Previous processes suffered from dropped sessions during extensive 8-step onboarding and disjointed document signature handoffs.',
        de: 'Die Einhaltung deutscher Steuer- und Compliance-Vorgaben (DATEV) verlangte absolute Fehlerfreiheit. Alte Workflows verloren oft Nutzerdaten während langer Anmeldeprozesse und hatten Medienbrüche bei Unterschriften.',
        sr: 'Nemački poreski i pravni standardi (DATEV) zahtevaju apsolutnu tačnost unosa bez grešaka. Stari proces je gubio unose tokom dužih formi i imao nepraktično potpisivanje dokumenata.',
      },
      solution: {
        en: 'Engineered a state-machine-driven form engine in Vue.js with Pinia persistence, automatic field masking for tax IDs, real-time validation against official fiscal schemas, and integrated Yousign iframe webhooks with instant Stripe billing verification.',
        de: 'Entwicklung einer zustandsgesteuerten Formular-Engine in Vue.js mit Pinia-Persistenz, automatischer Validierung von Steuernummern und nahtloser Yousign-Signaturintegration mit Stripe-Abrechnung.',
        sr: 'Kreiran mehanizam formi zasnovan na konačnim automatima (state machine) u Vue.js sa Pinia memorisanjem, validacijom poreskih brojeva u realnom vremenu i Yousign digitalnim potpisom.',
      },
      architectureHighlights: {
        en: [
          'Dynamic state-machine preventing invalid intermediate transitions',
          'Offline-safe draft persistence preventing user input loss',
          'Custom reactive validation engine for German IBAN & Tax IDs',
          'Embedded Yousign signature ceremony with real-time webhook status',
        ],
        de: [
          'Zustandsgesteuerte Übergänge für fehlerfreie Pflichtangaben',
          'Automatische Entwurfsspeicherung gegen Datenverlust',
          'Maßgeschneiderte Validierung deutscher Steuer-IDs und IBANs',
          'Nahtlose Yousign-Signaturabwicklung mit Live-Webhook-Verarbeitung',
        ],
        sr: [
          'Strogi automati stanja koji sprečavaju nevalidne prelaze',
          'Čuvanje nacrta u lokalu protiv gubitka podataka tokom unosa',
          'Namenska reaktivna validacija za nemačke PIB i IBAN brojeve',
          'Ugrađen Yousign tok potpisivanja sa praćenjem statusa u realnom vremenu',
        ],
      },
      impact: {
        en: 'Eliminated manual accounting data entry errors by 100% and reduced customer verification cycle from 3 days to under 15 minutes.',
        de: 'Reduzierung manueller Buchhaltungsübertragungsfehler auf 0 % und Verkürzung des Kundenverifizierungszyklus von 3 Tagen auf unter 15 Minuten.',
        sr: 'Eliminisane manuelne greške pri unosu u računovodstvo na 0% i skraćeno vreme verifikacije klijenta sa 3 dana na ispod 15 minuta.',
      },
      codeSnippet: {
        filename: 'src/modules/stammdaten/useDatevValidation.ts',
        code: `export function validateDatevAccount(accountNumber: string): ValidationResult {
  const sanitized = accountNumber.replace(/\\s+/g, '');
  if (!/^\\d{4,8}$/.test(sanitized)) {
    return { valid: false, message: 'DATEV accounts must contain 4-8 numeric digits' };
  }
  const checkDigit = calculateLuhnChecksum(sanitized);
  return { valid: checkDigit === 0, sanitizedValue: sanitized };
}`,
      },
    },
    githubUrl: 'https://github.com',
    liveUrl: 'https://itm-technologies.de',
    featured: true,
  },
  {
    id: 'aura-design-system',
    title: 'Aura UI & Motion Kit',
    badge: {
      en: 'Design System & Architecture',
      de: 'Designsystem & Komponenten-Kit',
      sr: 'Sistem dizajna i komponenti',
    },
    category: {
      en: 'High-Density Component Architecture',
      de: 'High-Density Komponentenarchitektur',
      sr: 'Arhitektura komponenti visoke gustine',
    },
    description: {
      en: 'A high-performance, accessible design system engineered for data-dense dashboards. Features customizable tokens, keyboard-first focus management, and fluid 60fps micro-interactions.',
      de: 'Ein hochperformantes, barrierefreies Designsystem für datendichte Dashboards. Mit anpassbaren Tokens, tastaturfreundlicher Fokussteuerung und flüssigen 60fps-Animationen.',
      sr: 'Sistem komponenti visokih performansi i pristupačnosti za složene kontrolne table. Sa tokenima dizajna, podrškom za prečice na tastaturi i fluidnim 60fps animacijama.',
    },
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Motion', 'ARIA Standards'],
    metrics: [
      {
        value: '< 11 KB',
        label: {
          en: 'Core Bundle Footprint',
          de: 'Geringe Bundle-Größe',
          sr: 'Veličina paketa skripte',
        },
      },
      {
        value: '100%',
        label: {
          en: 'WCAG 2.1 AA Compliant',
          de: 'WCAG 2.1 AA Konformität',
          sr: 'WCAG 2.1 AA standard pristupačnosti',
        },
      },
      {
        value: '60 FPS',
        label: {
          en: 'Hardware Accelerated FX',
          de: 'Hardware-beschleunigte FX',
          sr: 'Fluidne animacije na 60 FPS',
        },
      },
    ],
    caseStudy: {
      challenge: {
        en: 'Most ready-made UI libraries are either overly heavy, lack strict accessibility for keyboard power-users, or cause performance hiccups during rapid state changes.',
        de: 'Viele UI-Bibliotheken sind entweder überladen, mangelhaft barrierefrei für Tastaturbedienung oder verursachen Lags bei schnellen Datenaktualisierungen.',
        sr: 'Većina gotovih biblioteka je preobimna, nema potpunu pristupačnost preko tastature ili prouzrokuje seckanje pri brzim promenama stanja.',
      },
      solution: {
        en: 'Built an unstyled headless primitive layer using compound component patterns, paired with Tailwind utility tokens and composable motion transitions utilizing CSS transforms and will-change layers.',
        de: 'Erstellung einer Headless-Komponentenschicht mit Compound-Component-Mustern, Tailwind-Utility-Klassen und reinen CSS-Hardware-Transformationen.',
        sr: 'Razvijen sloj komponenti bez fiksnog stila uz obrazac složenih komponenti (compound components), Tailwind stilove i hardverski ubrzane transformacije.',
      },
      architectureHighlights: {
        en: [
          'Zero-runtime CSS overhead with Tailwind JIT compilation',
          'Full keyboard navigation traps & screen reader focus indicators',
          'Polymorphic `asChild` composition paradigm',
          'Tree-shakeable modular imports ensuring minimal bundle size',
        ],
        de: [
          'Null Laufzeit-CSS-Overhead dank Tailwind JIT',
          'Vollständige Tastatur-Traps und Screenreader-Fokussteuerung',
          'Polymorphes `asChild`-Kompositionsmodell',
          'Tree-shakeable Module für minimale Ladezeiten',
        ],
        sr: [
          'Bez runtime CSS opterećenja uz Tailwind kompajliranje',
          'Potpuna navigacija tasterima i podrška za čitače ekrana',
          'Polimorfni `asChild` model kompozicije',
          'Modularan uvoz komponenata koji ne opterećuje aplikaciju',
        ],
      },
      impact: {
        en: 'Adopted across multiple internal tools, reducing time-to-market for new screens from 2 weeks to 3 days while guaranteeing 100/100 accessibility scores.',
        de: 'Erfolgreich in mehreren internen Tools eingesetzt; verkürzte die Entwicklungszeit neuer Ansichten von 2 Wochen auf 3 Tage bei 100/100 Barrierefreiheit.',
        sr: 'Primenjeno u više internih projekata; skraćeno vreme izrade novih ekrana sa 2 nedelje na 3 dana uz ocenu pristupačnosti 100/100.',
      },
    },
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    featured: false,
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // Frontend Core & UI Craft
  { name: 'React', category: 'frontend', experienceYears: '4+ yrs', proficiency: 96, featured: true },
  { name: 'Vue.js', category: 'frontend', experienceYears: '3+ yrs', proficiency: 92, featured: true },
  { name: 'TypeScript', category: 'frontend', experienceYears: '4+ yrs', proficiency: 95, featured: true },
  { name: 'Next.js', category: 'frontend', experienceYears: '3+ yrs', proficiency: 90, featured: true },
  { name: 'Tailwind CSS', category: 'frontend', experienceYears: '4+ yrs', proficiency: 96, featured: true },
  { name: 'shadcn/ui', category: 'frontend', experienceYears: '2+ yrs', proficiency: 92, featured: true },
  { name: 'JavaScript (ES6+)', category: 'frontend', experienceYears: '4+ yrs', proficiency: 98 },
  { name: 'State Management (Pinia, Zustand)', category: 'frontend', experienceYears: '4+ yrs', proficiency: 92 },
  { name: 'HTML5 & Semantic Web', category: 'frontend', experienceYears: '4+ yrs', proficiency: 99 },

  // Backend, Databases & Mobile
  {
    name: 'Laravel (PHP)',
    category: 'backend',
    experienceYears: '2+ yrs',
    proficiency: 84,
    featured: true,
    note: {
      en: 'Built full-stack web applications and robust REST APIs',
      de: 'Entwicklung von Full-Stack-Webanwendungen und REST-APIs',
      sr: 'Izrada kompletnih web aplikacija i REST API servisa',
    },
  },
  {
    name: 'PostgreSQL',
    category: 'backend',
    experienceYears: '2+ yrs',
    proficiency: 86,
    featured: true,
    note: {
      en: 'Relational data modeling, indexing, and transactional integrity',
      de: 'Relationale Datenmodellierung, Indexierung und Transaktionssicherheit',
      sr: 'Relaciono modelovanje podataka, indeksiranje i integritet',
    },
  },
  {
    name: 'Prisma ORM',
    category: 'backend',
    experienceYears: '2+ yrs',
    proficiency: 88,
    featured: true,
    note: {
      en: 'Type-safe schema definitions and auto-generated queries in Next.js',
      de: 'Typsichere Datenbankschemata und Client-Modelle in Next.js',
      sr: 'Tipski bezbedne migracije i upiti u Next.js projektima',
    },
  },
  {
    name: 'Next.js Server Actions & APIs',
    category: 'backend',
    experienceYears: '3+ yrs',
    proficiency: 90,
    featured: true,
    note: {
      en: 'Full-stack server routes, data mutations, and auth validation',
      de: 'Server Actions, API-Routen und serverseitige Validierung',
      sr: 'Serverske akcije, rute i bezbedna obrada podataka',
    },
  },
  {
    name: 'React Native',
    category: 'backend',
    experienceYears: '1+ yrs',
    proficiency: 80,
    featured: true,
    note: {
      en: 'Cross-platform mobile apps for iOS & Android',
      de: 'Plattformübergreifende mobile Apps für iOS & Android',
      sr: 'Razvoj mobilnih aplikacija za iOS i Android platforme',
    },
  },
  { name: 'REST APIs & Webhooks', category: 'backend', experienceYears: '4+ yrs', proficiency: 94 },

  // AI as Engineering Companion
  {
    name: 'Claude (Anthropic)',
    category: 'ai',
    experienceYears: 'Daily companion',
    proficiency: 95,
    featured: true,
    note: {
      en: 'Architectural reasoning, deep code refactoring, and test design',
      de: 'Architektur-Konzepte, tiefes Refactoring und Testfall-Erstellung',
      sr: 'Arhitektonsko planiranje, refaktorisanje i osmišljavanje testova',
    },
  },
  {
    name: 'Gemini (Google DeepMind)',
    category: 'ai',
    experienceYears: 'Daily companion',
    proficiency: 94,
    featured: true,
    note: {
      en: 'Long-context analysis, multimodal flows, and rapid feature ideation',
      de: 'Long-Context-Analysen, multimodale Workflows und schnelle Prototypen',
      sr: 'Analiza velikih konteksta, multimodalni tokovi i brzi prototipi',
    },
  },
  {
    name: 'Codex / GitHub Copilot',
    category: 'ai',
    experienceYears: 'Daily companion',
    proficiency: 95,
    featured: true,
    note: {
      en: 'Accelerated typing speed, boilerplate elimination, and inline autocomplete',
      de: 'Beschleunigter Schreibfluss, weniger Boilerplate und Autocomplete',
      sr: 'Ubrzano kucanje koda, eliminacija ponavljajućeg koda i auto-dopuna',
    },
  },

  // Tools & Ecosystem
  { name: 'Git & GitHub', category: 'tools', experienceYears: '4+ yrs', proficiency: 94, featured: true },
  { name: 'Vite', category: 'tools', experienceYears: '3+ yrs', proficiency: 95, featured: true },
  { name: 'Figma to Code', category: 'tools', experienceYears: '4+ yrs', proficiency: 92, featured: true },
  { name: 'Supabase', category: 'tools', experienceYears: '2+ yrs', proficiency: 86 },
  { name: 'Yousign & Stripe APIs', category: 'tools', experienceYears: '2+ yrs', proficiency: 88 },
  { name: 'ESLint & Prettier', category: 'tools', experienceYears: '4+ yrs', proficiency: 94 },

  // Engineering Principles & How I Work
  {
    name: 'Component Architecture',
    category: 'principles',
    proficiency: 96,
    note: {
      en: 'Modular, maintainable, decoupled design systems',
      de: 'Modulare, wartbare und entkoppelte Designsysteme',
      sr: 'Modularan, održiv i fleksibilan sistem komponenti',
    },
    featured: true,
  },
  {
    name: 'UI Consistency & Pixel Fidelity',
    category: 'principles',
    proficiency: 95,
    note: {
      en: 'Flawless translation of design specs into responsive UI',
      de: 'Präzise Umsetzung von Figma-Designs in responsives UI',
      sr: 'Precizno prenošenje Figma dizajna u responzivni interfejs',
    },
    featured: true,
  },
  {
    name: 'Production Performance & Web Vitals',
    category: 'principles',
    proficiency: 94,
    note: {
      en: 'Zero CLS, optimized tree-shaking, minimal bundle size',
      de: 'Keine Layout-Shifts, optimiertes Tree-Shaking, kleine Bundles',
      sr: 'Bez pomeranja prikaza, optimizovan kod i minimalan bundle',
    },
    featured: true,
  },
  {
    name: 'Code Review & Clean Code',
    category: 'principles',
    proficiency: 92,
    note: {
      en: 'Strict typing, self-documenting code, thorough peer reviews',
      de: 'Strikte Typisierung, selbsterklärender Code, gewissenhafte Reviews',
      sr: 'Striktno tipiziranje, čist kod i temeljni pregledi koda',
    },
    featured: true,
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    period: '2023 - Present',
    role: {
      en: 'Frontend Developer',
      de: 'Frontend-Entwickler',
      sr: 'Frontend programer',
    },
    company: 'ITM Technologies / Client Solutions',
    location: 'Remote',
    description: {
      en: 'Lead frontend architect for Stammdaten2Go master data suite. Integrated DATEV fiscal standards, Yousign digital signature workflows, and Stripe billing. Delivered 15+ complex production features on Vue.js & TypeScript.',
      de: 'Frontend-Architektur für die Stammdaten2Go Plattform. DATEV-Anbindung, Yousign Signatur-Workflows und Stripe-Billing. Über 15 produktive Features in Vue.js & TypeScript umgesetzt.',
      sr: 'Vodeći frontend programer za Stammdaten2Go sistem matičnih podataka. Integracija DATEV računovodstvenog standarda, Yousign potpisa i Stripe naplate.',
    },
    tech: ['Vue.js', 'TypeScript', 'DATEV Integration', 'Yousign', 'Pinia', 'Tailwind CSS'],
  },
  {
    period: '2021 - 2023',
    role: {
      en: 'Frontend Web Developer',
      de: 'Frontend Webentwickler',
      sr: 'Frontend web programer',
    },
    company: 'Property SaaS & Digital Products',
    location: 'Hybrid / Remote',
    description: {
      en: 'Architected full-featured real estate management tools (MiNi Property). Designed role-based tenant portals, dynamic listing engines, and automated contract workflows in React & Next.js.',
      de: 'Konzeption und Entwicklung von Immobilien-Management-Tools (MiNi Property). Rollenbasierte Mieterportale, dynamische Inserate und automatisierte Workflows mit React & Next.js.',
      sr: 'Razvoj kompletnih alata za upravljanje nekretninama (MiNi Property). Portali za stanare, napredni oglasi i automatizovani ugovori u React-u i Next.js-u.',
    },
    tech: ['React', 'Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'REST API'],
  },
];
