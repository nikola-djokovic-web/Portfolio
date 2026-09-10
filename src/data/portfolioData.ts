import { Project, SkillItem, StatMetric, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Nikola Djokovic',
  role: 'Frontend Developer',
  email: 'nikoladjokovic90@icloud.com',
  location: 'Europe (CET)',
  availability: 'Open to Roles & Collaborations',
  github: 'https://github.com/nikola-djokovic-web',
  linkedin: 'https://linkedin.com/in/nikola-djokovic-330',
};

export const STATS: StatMetric[] = [
  {
    id: 'exp',
      value: '8+',
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
      value: '4',
    label: {
      en: 'Professional roles documented',
      de: 'Dokumentierte berufliche Stationen',
      sr: 'Dokumentovane profesionalne uloge',
    },
    subtext: {
      en: 'ITM, freelance work, and Cubes School',
      de: 'ITM, Freelance-Arbeit und Cubes School',
      sr: 'ITM, freelance rad i Cubes School',
    },
  },
  {
    id: 'stacks',
    value: '4',
    label: {
      en: 'Languages spoken',
      de: 'Gesprochene Sprachen',
      sr: 'Jezici',
    },
    subtext: {
      en: 'Serbian, English, Spanish, German',
      de: 'Serbisch, Englisch, Spanisch, Deutsch',
      sr: 'Srpski, engleski, španski, nemački',
    },
  },
  {
    id: 'performance',
      value: '2018',
    label: {
      en: 'Career started',
      de: 'Karrierestart',
      sr: 'Početak karijere',
    },
    subtext: {
      en: 'Web development since March 2018',
      de: 'Webentwicklung seit März 2018',
      sr: 'Web razvoj od marta 2018.',
    },
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'iri-website',
    title: 'Institute for Development and Innovation (IRI)',
    client: 'Freelance',
    badge: {
      en: 'Institutional Website & Admin Panel',
      de: 'Institutionelle Website & Administrationsbereich',
      sr: 'Web prezentacija i administrativni panel',
    },
    category: {
      en: 'Full-Stack Web Development',
      de: 'Full-Stack-Webentwicklung',
      sr: 'Full-Stack web razvoj',
    },
    description: {
      en: 'Website for the Institute for Development and Innovation (IRI), including a responsive public presentation and an administration panel for managing news, projects, and analytical content.',
      de: 'Website des Institute for Development and Innovation (IRI) mit responsiver Präsentation und Administrationsbereich zur Verwaltung von Nachrichten, Projekten und analytischen Inhalten.',
      sr: 'Web prezentacija Instituta za razvoj i inovacije (IRI), sa responzivnim javnim delom i administrativnim panelom za upravljanje vestima, projektima i analitičkim sadržajem.',
    },
    tags: ['Laravel', 'PHP', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
    metrics: [
      {
        value: 'Laravel',
        label: {
          en: 'Application framework',
          de: 'Anwendungsframework',
          sr: 'Framework aplikacije',
        },
      },
      {
        value: 'CRUD',
        label: {
          en: 'Content management',
          de: 'Inhaltsverwaltung',
          sr: 'Upravljanje sadržajem',
        },
      },
      {
        value: 'RBAC',
        label: {
          en: 'User access control',
          de: 'Benutzerzugriffskontrolle',
          sr: 'Kontrola pristupa korisnika',
        },
      },
    ],
    caseStudy: {
      challenge: {
        en: 'The client needed a responsive public website and a manageable way to maintain news, projects, and analytical content.',
        de: 'Der Kunde benötigte eine responsive Website und eine einfache Verwaltung von Nachrichten, Projekten und analytischen Inhalten.',
        sr: 'Klijentu je bila potrebna responzivna web prezentacija i jednostavno upravljanje vestima, projektima i analitičkim sadržajem.',
      },
      solution: {
        en: 'Built the full-stack solution with Laravel, HTML, CSS, and Bootstrap, including an administration panel, CRUD workflows, and user roles and access control.',
        de: 'Umsetzung der Full-Stack-Lösung mit Laravel, HTML, CSS und Bootstrap einschließlich Administrationsbereich, CRUD-Workflows sowie Rollen- und Zugriffskontrolle.',
        sr: 'Izrađeno je full-stack rešenje uz Laravel, HTML, CSS i Bootstrap, sa administrativnim panelom, CRUD tokovima i korisničkim ulogama i kontrolom pristupa.',
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
        en: 'Delivered an end-to-end web solution covering the public presentation, backend logic, administration, content management, and access control.',
        de: 'Umsetzung einer vollständigen Weblösung mit öffentlicher Präsentation, Backend-Logik, Administration, Inhaltsverwaltung und Zugriffskontrolle.',
        sr: 'Isporučeno je kompletno web rešenje koje obuhvata javnu prezentaciju, backend logiku, administraciju, upravljanje sadržajem i kontrolu pristupa.',
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
    id: 'erechnung2go',
    title: 'eRechnung2Go',
    client: 'ITM Technologies',
    badge: {
      en: 'Electronic Invoicing Platform',
      de: 'Plattform für elektronische Rechnungen',
      sr: 'Platforma za elektronske fakture',
    },
    category: {
      en: 'XRechnung & Workflow Automation',
      de: 'XRechnung & Workflow-Automatisierung',
      sr: 'XRechnung i automatizacija tokova',
    },
    description: {
      en: 'Web application for creating, managing, and validating electronic invoices according to German XRechnung standards. Built invoice views, PDF representations, and automated scheduling workflows for invoice creation and delivery.',
      de: 'Webanwendung zur Erstellung, Verwaltung und Validierung elektronischer Rechnungen nach dem deutschen XRechnung-Standard. Mit Rechnungsansichten, PDF-Darstellung und automatisierten Workflows für Erstellung und Versand.',
      sr: 'Web aplikacija za kreiranje, upravljanje i validaciju elektronskih faktura prema nemačkom XRechnung standardu. Razvijeni su prikazi faktura, PDF reprezentacija i automatizovani tokovi za kreiranje i slanje.',
    },
    tags: ['Vue.js', 'Composition API', 'PrimeVue', 'ASP.NET', 'REST API', 'jsPDF'],
    metrics: [
      {
        value: 'XRechnung',
        label: {
          en: 'Invoice standard',
          de: 'Rechnungsstandard',
          sr: 'Standard faktura',
        },
      },
      {
        value: 'PDF',
        label: {
          en: 'Invoice rendering',
          de: 'Rechnungsdarstellung',
          sr: 'Prikaz faktura',
        },
      },
      {
        value: 'Automated',
        label: {
          en: 'Scheduled workflows',
          de: 'Geplante Workflows',
          sr: 'Zakazani tokovi',
        },
      },
    ],
    caseStudy: {
      challenge: {
        en: 'The application needed to support reliable electronic invoicing workflows while giving users clear control over invoice creation, validation, visualization, and scheduled delivery.',
        de: 'Die Anwendung musste zuverlässige Workflows für elektronische Rechnungen unterstützen und gleichzeitig klare Kontrolle über Erstellung, Validierung, Darstellung und geplanten Versand bieten.',
        sr: 'Aplikacija je morala da podrži pouzdane tokove elektronskog fakturisanja uz jasan nadzor nad kreiranjem, validacijom, prikazom i zakazanim slanjem faktura.',
      },
      solution: {
        en: 'Developed the frontend with Vue.js Composition API and PrimeVue, integrated the ASP.NET REST API, implemented jsPDF invoice representations, and built a configuration wizard for rule-based scheduled tasks.',
        de: 'Entwicklung des Frontends mit der Vue.js Composition API und PrimeVue, Integration der ASP.NET REST-API, Umsetzung von Rechnungsdarstellungen mit jsPDF und Entwicklung eines Konfigurationsassistenten für regelbasierte Aufgaben.',
        sr: 'Frontend je razvijen uz Vue.js Composition API i PrimeVue, integrisan je ASP.NET REST API, implementirana je PDF reprezentacija uz jsPDF i napravljen konfiguracioni čarobnjak za zadatke po pravilima.',
      },
      architectureHighlights: {
        en: [
          'Invoice creation and management interfaces',
          'PDF-based invoice visualization using jsPDF',
          'Views for incoming and outgoing invoices',
          'Scheduled invoice creation and delivery workflows',
        ],
        de: [
          'Oberflächen zur Erstellung und Verwaltung von Rechnungen',
          'PDF-basierte Rechnungsdarstellung mit jsPDF',
          'Ansichten für ein- und ausgehende Rechnungen',
          'Geplante Workflows für Rechnungserstellung und -versand',
        ],
        sr: [
          'Interfejsi za kreiranje i upravljanje fakturama',
          'PDF prikaz faktura uz jsPDF biblioteku',
          'Prikazi ulaznih i izlaznih faktura',
          'Zakazani tokovi za kreiranje i slanje faktura',
        ],
      },
      impact: {
        en: 'Delivered a complete frontend workflow for electronic invoice creation, validation, visualization, and automated sending based on configurable rules and parameters.',
        de: 'Umsetzung eines vollständigen Frontend-Workflows für Erstellung, Validierung, Darstellung und automatisierten Versand elektronischer Rechnungen auf Basis konfigurierbarer Regeln und Parameter.',
        sr: 'Isporučen je kompletan frontend tok za kreiranje, validaciju, prikaz i automatsko slanje elektronskih faktura na osnovu podesivih pravila i parametara.',
      },
    },
    featured: true,
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
    period: '01/2025 - 2026',
    role: {
      en: 'Frontend Developer',
      de: 'Frontend-Entwickler',
      sr: 'Frontend programer',
    },
    company: 'ITM Technologies',
    location: 'Niš, Serbia',
    description: {
      en: 'Developed eRechnung2Go, an application for creating, managing, and validating electronic invoices according to German XRechnung standards. Built invoice interfaces, PDF representations with jsPDF, incoming and outgoing invoice views, and scheduled task workflows for automated invoice creation and delivery.',
      de: 'Entwicklung von eRechnung2Go zur Erstellung, Verwaltung und Validierung elektronischer Rechnungen nach dem deutschen XRechnung-Standard. Rechnungsoberflächen, PDF-Darstellungen mit jsPDF und geplante Workflows für Erstellung und Versand.',
      sr: 'Razvoj aplikacije eRechnung2Go za kreiranje, upravljanje i validaciju elektronskih faktura prema nemačkom XRechnung standardu. Izrada interfejsa, PDF prikaza uz jsPDF, pregleda ulaznih i izlaznih faktura i zakazanih tokova za automatizovano kreiranje i slanje.',
    },
    tech: ['Vue.js Composition API', 'PrimeVue', 'jsPDF', 'ASP.NET REST API', 'GitHub Copilot'],
  },
  {
    period: '04/2024 - 2025',
    role: {
      en: 'Frontend Web Developer',
      de: 'Frontend Webentwickler',
      sr: 'Frontend web programer',
    },
    company: 'ITM Technologies',
    location: 'Niš, Serbia',
    description: {
      en: 'Developed Stammdaten2Go for centralized management of customers, companies, contacts, legal and tax data. Built complex forms, multi-step wizards, document management, DATEV synchronization, Yousign digital signatures, and Stripe subscription flows.',
      de: 'Entwicklung von Stammdaten2Go zur zentralen Verwaltung von Kunden-, Unternehmens-, Kontakt-, Rechts- und Steuerdaten. Komplexe Formulare, Dokumentenverwaltung, DATEV-Synchronisierung, Yousign und Stripe-Workflows.',
      sr: 'Razvoj aplikacije Stammdaten2Go za centralizovano upravljanje podacima o klijentima, kompanijama, kontaktima, pravnim i poreskim podacima. Izrada složenih formi, dokumenata, DATEV sinhronizacije, Yousign potpisa i Stripe tokova.',
    },
    tech: ['Vue.js Composition API', 'PrimeVue', 'ASP.NET REST API', 'DATEV', 'Yousign', 'Stripe'],
  },
  {
    period: '11/2018 - 2023',
    role: {
      en: 'Full-Stack Web Developer',
      de: 'Full-Stack-Webentwickler',
      sr: 'Full-Stack web developer',
    },
    company: 'Freelancer - Web Developer',
    location: 'Niš, Serbia',
    description: {
      en: 'Developed and maintained the website of the Institute for Development and Innovation (IRI) using Laravel, HTML, CSS, and Bootstrap. Built an administration panel, CRUD functionality, and user roles and access control.',
      de: 'Entwicklung und Wartung der Website des Institute for Development and Innovation (IRI) mit Laravel, HTML, CSS und Bootstrap. Umsetzung eines Administrationsbereichs, von CRUD-Funktionen sowie Rollen- und Zugriffskontrolle.',
      sr: 'Razvoj i održavanje web prezentacije Instituta za razvoj i inovacije (IRI) uz Laravel, HTML, CSS i Bootstrap. Izrada administrativnog panela, CRUD funkcionalnosti i upravljanja korisničkim ulogama i pristupom.',
    },
    tech: ['Laravel', 'PHP', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
  },
  {
    period: '03/2018 - 11/2018',
    role: {
      en: 'Junior Web Developer / Intern',
      de: 'Junior Webentwickler / Praktikant',
      sr: 'Junior web developer / praktikant',
    },
    company: 'Cubes School',
    location: 'Niš, Serbia',
    description: {
      en: 'Participated in the development of a PHP web store and a Laravel blog. Learned to create CRUD functionality, host websites, and build Laravel projects from scratch.',
      de: 'Mitarbeit an einem PHP-Webshop und einem Laravel-Blog. Erstellung von CRUD-Funktionen, Hosting von Websites und Entwicklung von Laravel-Projekten von Grund auf.',
      sr: 'Učešće u razvoju web prodavnice u PHP-u i bloga u Laravel-u. Rad na CRUD funkcionalnostima, hostingu i izradi Laravel projekata od početka.',
    },
    tech: ['PHP', 'Laravel', 'MySQL', 'HTML', 'JavaScript', 'Bootstrap', 'Git'],
  },
];
