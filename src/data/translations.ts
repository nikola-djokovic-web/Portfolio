import { Language } from '../types';

export const UI_TEXT: Record<string, Record<Language, string>> = {
  // Nav
  navAbout: {
    en: 'About',
    de: 'Über mich',
    sr: 'O meni',
  },
  navProjects: {
    en: 'Projects',
    de: 'Projekte',
    sr: 'Projekti',
  },
  navSkills: {
    en: 'Skills',
    de: 'Fähigkeiten',
    sr: 'Veštine',
  },
  navExperience: {
    en: 'Experience',
    de: 'Erfahrung',
    sr: 'Iskustvo',
  },
  navContact: {
    en: 'Contact',
    de: 'Kontakt',
    sr: 'Kontakt',
  },
  statusAvailable: {
    en: 'Building thoughtful digital experiences',
    de: 'Ich entwickle durchdachte digitale Erlebnisse',
    sr: 'Gradim promišljena digitalna iskustva',
  },
  viewResume: {
    en: 'View Resume',
    de: 'Lebenslauf ansehen',
    sr: 'Pogledaj CV',
  },
  
  // Hero
  heroBadge: {
    en: 'FRONTEND DEVELOPER',
    de: 'FRONTEND-ENTWICKLER',
    sr: 'FRONTEND DEVELOPER',
  },
  heroIntro: {
    en: 'I build modern, fast, and clear web applications with a strong focus on UX, component architecture, and long-term maintainability.',
    de: 'Ich entwickle moderne, schnelle und klare Webanwendungen mit starkem Fokus auf UX, Komponentenarchitektur und langfristige Wartbarkeit.',
    sr: 'Gradim moderne, brze i pregledne web aplikacije sa snažnim fokusom na UX, arhitekturu komponenti i dugoročnu održivost.',
  },
  heroFocusLabel: {
    en: 'Focus:',
    de: 'Fokus:',
    sr: 'Fokus:',
  },
  heroFocusText: {
    en: 'React, Vue.js, TypeScript, design-system thinking, and production performance.',
    de: 'React, Vue.js, TypeScript, Designsysteme und produktive Performance.',
    sr: 'React, Vue.js, TypeScript, sistemi dizajna i produkcione performanse.',
  },
  ctaProjects: {
    en: 'Explore Selected Work',
    de: 'Projekte ansehen',
    sr: 'Pregledaj radove',
  },
  ctaContact: {
    en: "Let's Talk",
    de: 'Kontakt aufnehmen',
    sr: 'Kontaktirajte me',
  },
  copyEmail: {
    en: 'Copy Email',
    de: 'E-Mail kopieren',
    sr: 'Kopiraj email',
  },
  emailCopied: {
    en: 'Copied to clipboard!',
    de: 'In die Zwischenablage kopiert!',
    sr: 'Kopirano u privremenu memoriju!',
  },

  // About Section
  aboutHeading: {
    en: 'About Me',
    de: 'Über mich',
    sr: 'O meni',
  },
  aboutP1: {
    en: 'I develop web products that feel modern, clear, and easy to use. My core focus is high-quality UX, readable code, and resilient frontend architecture in React, Next.js, and Vue.js.',
    de: 'Ich entwickle Webprodukte, die sich modern, klar und intuitiv anfühlen. Mein Hauptfokus liegt auf erstklassiger UX, lesbarem Code und stabiler Frontend-Architektur in React, Next.js und Vue.js.',
    sr: 'Razvijam web proizvode koji pružaju moderan, jasan i intuitivan osećaj. Moj primarni fokus je vrhunski UX, čitljiv kod i stabilna frontend arhitektura u React-u, Next.js-u i Vue.js-u.',
  },
  aboutP2: {
    en: 'From concept to implementation, I combine engineering precision with design thinking. For UI engineering, I work with Tailwind CSS and modern component libraries like shadcn/ui to build accessible, pixel-perfect interfaces quickly.',
    de: 'Vom Konzept bis zur Umsetzung verbinde ich technische Präzision mit durchdachtem Design. Im UI-Engineering nutze ich Tailwind CSS und moderne Komponentenbibliotheken wie shadcn/ui für barrierefreie, pixelgenaue Oberflächen.',
    sr: 'Od ideje do realizacije, spajam inženjersku preciznost sa dizajnerskim razmišljanjem. Za izradu interfejsa oslanjam se na Tailwind CSS i moderne biblioteke poput shadcn/ui za kreiranje pristupačnih i preciznih rešenja.',
  },
  aboutP3: {
    en: 'While frontend is my core domain, I bring practical full-stack capabilities: building apps in Laravel and full-stack Next.js, modeling relational schemas with PostgreSQL and Prisma ORM, and crafting mobile experiences in React Native.',
    de: 'Obwohl mein Schwerpunkt im Frontend liegt, verfüge ich über praxiserprobte Full-Stack-Erfahrung: Entwicklung von Web-Apps mit Laravel und Next.js, relationale Datenmodellierung mit PostgreSQL und Prisma ORM sowie mobile Apps mit React Native.',
    sr: 'Iako mi je frontend primarna ekspertiza, posedujem i praktično full-stack iskustvo: izrada aplikacija u Laravel-u i Next.js-u, relaciono modelovanje baza sa PostgreSQL-om i Prisma ORM-om, kao i mobilni razvoj uz React Native.',
  },
  aboutP4: {
    en: 'In my daily engineering workflow, I also treat AI tools like Claude, Gemini, and Codex as companions for rapid prototyping, edge-case analysis, and refactoring — always paired with strict manual code review, type safety, and craftsmanship.',
    de: 'In meinem täglichen Workflow nutze ich KI-Tools wie Claude, Gemini und Codex als Begleiter für schnelles Prototyping, Edge-Case-Analysen und Refactoring – stets gesteuert durch manuelle Code-Reviews, Typsicherheit und Handwerk.',
    sr: 'U svakodnevnom radu koristim AI alate kao što su Claude, Gemini i Codex kao partnere za brzo prototipisanje, proveru graničnih slučajeva i refaktorisanje — uvek uz rigoroznu ličnu proveru koda, tipsku bezbednost i visoke standarde.',
  },
  aboutHiringHighlightsTitle: {
    en: 'Why Engineering Teams Value My Work',
    de: 'Warum Entwicklungsteams meine Arbeit schätzen',
    sr: 'Zašto timovi cene moj rad',
  },
  whyHire1Title: {
    en: 'Zero-Friction Design Handoff',
    de: 'Reibungslose Design-Übergabe',
    sr: 'Besprekoran prenos dizajna u kod',
  },
  whyHire1Desc: {
    en: '1:1 pixel accuracy from Figma, respecting spacing tokens, accessible color contrasts, and subtle responsive dynamics.',
    de: 'Exakte Umsetzung von Figma-Layouts mit konsistenten Spacing-Tokens, barrierefreien Kontrasten und flüssiger Responsivität.',
    sr: '1:1 preciznost iz Figme, poštovanje tokena razmaka, kontrastnih boja i fluidna prilagodljivost ekranima.',
  },
  whyHire2Title: {
    en: 'Clean Component Contracts',
    de: 'Saubere Komponenten-Schnittstellen',
    sr: 'Čisti interfejsi komponenti',
  },
  whyHire2Desc: {
    en: 'Strict TypeScript interfaces, self-contained domain boundaries, and predictable states avoiding prop drilling and cascading re-renders.',
    de: 'Strikte TypeScript-Typen, klare Modulgrenzen und verlässliche Zustände ohne unkontrolliertes Re-Rendering.',
    sr: 'Striktni TypeScript tipovi, izolovane celine i predvidljiva stanja bez suvišnih osvežavanja interfejsa.',
  },
  whyHire3Title: {
    en: 'Business Impact & Speed',
    de: 'Geschäftswert & Geschwindigkeit',
    sr: 'Poslovni rezultat i brzina',
  },
  whyHire3Desc: {
    en: 'Proactive communication, pragmatism in shipping tested code, and keen awareness of real-world user conversion metrics.',
    de: 'Proaktive Kommunikation, pragmatische und getestete Umsetzung mit direktem Blick auf Benutzerzufriedenheit und Conversion.',
    sr: 'Proaktivna komunikacija, pragmatična isporuka testiranog koda i svest o poslovnim konverzijama.',
  },

  // Projects Section
  projectsHeading: {
    en: 'Selected Projects',
    de: 'Ausgewählte Projekte',
    sr: 'Izabrani projekti',
  },
  projectsSubheading: {
    en: 'Production applications engineered with strict performance standards, complex state flows, and refined aesthetics.',
    de: 'Produktionsreife Anwendungen mit höchsten Performance-Standards, anspruchsvollen Datenabläufen und minimalistischer Ästhetik.',
    sr: 'Aplikacije u produkciji sa visokim standardima performansi, kompleksnim tokovima stanja i prefinjenom estetikom.',
  },
  filterAll: {
    en: 'All Projects',
    de: 'Alle Projekte',
    sr: 'Svi projekti',
  },
  filterReact: {
    en: 'React & Next.js',
    de: 'React & Next.js',
    sr: 'React & Next.js',
  },
  filterVue: {
    en: 'Vue.js & Pinia',
    de: 'Vue.js & Pinia',
    sr: 'Vue.js & Pinia',
  },
  viewCaseStudy: {
    en: 'Architecture Deep Dive',
    de: 'Architektur-Detailansicht',
    sr: 'Detaljan uvid u arhitekturu',
  },
  liveApp: {
    en: 'Live App',
    de: 'Live-Demo',
    sr: 'Aktivna aplikacija',
  },

  // Case Study Modal
  caseStudyTitle: {
    en: 'Case Study & Frontend Architecture',
    de: 'Fallstudie & Frontend-Architektur',
    sr: 'Studija slučaja i arhitektura',
  },
  challengeTab: {
    en: 'The Challenge',
    de: 'Die Herausforderung',
    sr: 'Izazov',
  },
  solutionTab: {
    en: 'The Solution',
    de: 'Die Lösung',
    sr: 'Rešenje',
  },
  architectureTab: {
    en: 'Architecture Highlights',
    de: 'Architektur-Highlights',
    sr: 'Arhitektonske stavke',
  },
  impactTab: {
    en: 'Measured Impact',
    de: 'Messbare Ergebnisse',
    sr: 'Merljivi rezultati',
  },
  codePreviewTab: {
    en: 'Code Sample',
    de: 'Code-Auszug',
    sr: 'Primer koda',
  },
  closeModal: {
    en: 'Close',
    de: 'Schließen',
    sr: 'Zatvori',
  },

  // Skills Section
  skillsHeading: {
    en: 'Skills & Workflow',
    de: 'Fähigkeiten & Arbeitsweise',
    sr: 'Veštine i radni proces',
  },
  skillsSubheading: {
    en: 'A battle-tested stack honed for building dependable, high-density web products.',
    de: 'Ein praxiserprobtes Toolkit zur Erstellung zuverlässiger, leistungsstarker Webanwendungen.',
    sr: 'Isprobane tehnologije usmerene na izgradnju pouzdanih web rešenja visokog kvaliteta.',
  },
  skillsCategoryFrontend: {
    en: 'Frontend & UI Craft',
    de: 'Frontend & UI-Design',
    sr: 'Frontend & UI',
  },
  skillsCategoryBackend: {
    en: 'Backend, Databases & Mobile',
    de: 'Backend, Datenbanken & Mobile',
    sr: 'Backend, baze i mobilne aplikacije',
  },
  skillsCategoryTools: {
    en: 'AI, Tooling & Ecosystem',
    de: 'KI, Tools & Ökosystem',
    sr: 'AI, alati i ekosistem',
  },
  skillsCategoryPrinciples: {
    en: 'Engineering Standards',
    de: 'Engineering-Standards',
    sr: 'Inženjerski standardi',
  },
  skillsFilterAll: {
    en: 'All Stacks',
    de: 'Alle Bereiche',
    sr: 'Sve tehnologije',
  },
  skillsFilterFrontend: {
    en: 'Frontend',
    de: 'Frontend',
    sr: 'Frontend',
  },
  skillsFilterBackend: {
    en: 'Backend & DB',
    de: 'Backend & DB',
    sr: 'Bekend & Baze',
  },
  skillsFilterAi: {
    en: 'AI Workflow',
    de: 'KI-Workflow',
    sr: 'AI alati',
  },
  skillsFilterPrinciples: {
    en: 'Standards',
    de: 'Standards',
    sr: 'Standardi',
  },

  // Experience Section
  experienceHeading: {
    en: 'Career & Track Record',
    de: 'Berufserfahrung & Meilensteine',
    sr: 'Radno iskustvo i karijera',
  },
  experienceSubheading: {
    en: 'Hands-on frontend engineering in client services, high-compliance platforms, and agile teams.',
    de: 'Praktische Frontend-Entwicklung in B2B-Projekten, regulierten Umgebungen und agilen Teams.',
    sr: 'Praktičan frontend razvoj u poslovnim aplikacijama, regulisanim sistemima i agilnim timovima.',
  },

  // Contact Section
  contactHeading: {
    en: "Let's Build Something",
    de: 'Lassen Sie uns etwas aufbauen',
    sr: 'Hajde da gradimo zajedno',
  },
  contactSubheading: {
    en: 'I am open to frontend roles and product collaborations where quality, speed, and user experience are important.',
    de: 'Ich bin offen für Frontend-Rollen und Projektzusammenarbeiten, bei denen Qualität, Tempo und Nutzererlebnis zählen.',
    sr: 'Otvoren sam za frontend uloge i saradnje na proizvodima gde su kvalitet, brzina i korisničko iskustvo na prvom mestu.',
  },
  sendEmailBtn: {
    en: 'Send Email',
    de: 'E-Mail senden',
    sr: 'Pošalji email',
  },
  linkedinBtn: {
    en: 'LinkedIn Profile',
    de: 'LinkedIn-Profil',
    sr: 'LinkedIn profil',
  },
  githubBtn: {
    en: 'GitHub',
    de: 'GitHub',
    sr: 'GitHub',
  },
  quickMessageTitle: {
    en: 'Direct Message',
    de: 'Direktnachricht',
    sr: 'Direktna poruka',
  },
  formName: {
    en: 'Your Name',
    de: 'Ihr Name',
    sr: 'Vaše ime',
  },
  formEmail: {
    en: 'Your Email / Company',
    de: 'Ihre E-Mail / Unternehmen',
    sr: 'Vaš email / firma',
  },
  formMessage: {
    en: 'Tell me about your role or project...',
    de: 'Erzählen Sie mir von Ihrer Rolle oder Ihrem Projekt...',
    sr: 'Napišite nekoliko detalja o poziciji ili projektu...',
  },
  formSubmit: {
    en: 'Send Message',
    de: 'Nachricht senden',
    sr: 'Pošalji poruku',
  },
  formSentSuccess: {
    en: 'Message dispatched! Nikola will reply promptly.',
    de: 'Nachricht gesendet! Nikola wird sich zeitnah melden.',
    sr: 'Poruka je uspešno poslata! Nikola će odgovoriti uskoro.',
  },
  workPreference: {
    en: 'Timezone: CET (Central European Time) • Full-Time, Contract, Remote or Hybrid',
    de: 'Zeitzone: MEZ (Mitteleuropäische Zeit) • Vollzeit, Freiberuflich, Remote oder Hybrid',
    sr: 'Vremenska zona: CET • Puno radno vreme, ugovor, rad na daljinu ili hibridno',
  },

  // Footer
  footerCrafted: {
    en: 'Engineered with React 19, TypeScript, Tailwind CSS & Motion.',
    de: 'Entwickelt mit React 19, TypeScript, Tailwind CSS & Motion.',
    sr: 'Izrađeno uz React 19, TypeScript, Tailwind CSS i Motion.',
  },
  footerRights: {
    en: 'All rights reserved.',
    de: 'Alle Rechte vorbehalten.',
    sr: 'Sva prava zadržana.',
  },
};
