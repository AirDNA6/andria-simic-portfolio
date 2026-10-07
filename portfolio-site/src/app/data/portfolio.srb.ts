import { PortfolioContent } from './portfolio.types';

export const PORTFOLIO_SRB: PortfolioContent = {
  pageTitle: 'Andria Simić — Full Stack Developer',
  name: 'Andria Simić',
  title: 'Full Stack Developer',
  tagline: 'Čista arhitektura, real-time sistemi i kod koji stiže u produkciju.',
  email: 'simic.andria06@gmail.com',
  github: 'https://github.com/AirDNA6',
  location: 'Beograd, Srbija',

  about: `Medior full-stack developer specijalizovan za .NET, Angular i cloud-native arhitekture. Real-time, event-driven sisteme uz Kafka i SignalR i pazim da API-⁠ji ostanu održivi i pouzdani.

Kroz enterprise i freelance angažmane sarađivao sam sa ključnim korisnicima, standardizovao integracije kroz custom NuGet pakete i unapredio performanse pomoću Redis-a, Elasticsearch-a i AWS-a. U svaki sprint unosim sistemski pristup: merljiv uticaj, pouzdan kod i interfejsi.`,

  career: [
    {
      period: 'Mar 2023 — danas',
      role: 'Full Stack Developer',
      company: 'ExamRoom.AI',
      location: 'Beograd',
      current: true,
      highlights: [
        'Član SWAT tima, angažovan na razvoju i održavanju finansijske aplikacije, sa fokusom na razvoj novog modula za ugovore.',
        'Razvio mikroservis za notifikacije koristeći Angular, .NET, SignalR, DynamoDB i Kafka. Event-driven arhitektura omogućava skalabilne real-time notifikacije, a servis je integrisan u više projekata.',
        'Kreirao custom NuGet pakete za SignalR i Kafka radi standardizacije upotrebe i lakše integracije kroz servise.',
        'Implementirao Redis keširanje radi boljih performansi i manjeg opterećenja baze.',
        'Razvio Bulk Item Import modul: Excel šablone za masovno kreiranje i prevođenje postojećih stavki, uz backend validaciju zasnovanu na FluentValidation-u, automatsko popunjavanje ćelija i validaciju zavisnih polja radi manje ručnog unosa i grešaka.',
        'Razvio i integrisao novi modul koji je proširio funkcionalnost aplikacije i unapredio korisničko iskustvo.',
        'Refaktorisao Minimal API strukturu radi bolje čitljivosti, održivosti i efikasnosti.',
        'Održavao i unapređivao postojeće funkcionalnosti, uz stabilnost sistema i bolje performanse.',
        'Koristim AWS Kiro AI u svakodnevnom procesu razvoja kako bih ubrzao implementaciju, refaktorisanje i ukupnu produktivnost u razvoju softvera.',
      ],
      stack: ['.NET', 'Minimal APIs', 'Angular', 'SignalR', 'Kafka', 'DynamoDB', 'Redis', 'FluentValidation', 'NuGet', 'RxJS', 'NgRx', 'CQRS', 'AWS Kiro'],
    },
    {
      period: 'Mar 2021 — Mar 2023',
      role: 'Software Developer',
      company: 'V-IT Construction & Engineering D.O.O',
      location: 'Beograd',
      highlights: [
        'Radio na internoj ÖBB (Austrijske savezne železnice) aplikaciji za upravljanje tenderima, koristeći Angular, .NET MVC i Vue.js.',
        'Razvijao i održavao ADM (Address Master) za GIS sistem koristeći Angular i Spring Boot, uključujući autentifikaciju korisnika, prijavu i oporavak lozinke.',
        'Održavao nedeljne sastanke sa ključnim korisnicima radi prikupljanja povratnih informacija, razjašnjavanja zahteva i usklađivanja rešenja sa poslovnim potrebama.',
        'Migrirao Talend ESB projekat, uz neometan prelazak i minimalne prekide u radu.',
        'Integrisao i optimizovao Elasticsearch sa Spring Boot-om i Talend-om radi bržeg pretraživanja i dobavljanja podataka.',
        'Razvijao i održavao ActiveMQ messaging integracije unutar Talend ESB-a.',
      ],
      stack: ['Angular', '.NET MVC', 'Vue.js', 'Spring Boot', 'Talend ESB', 'Elasticsearch', 'ActiveMQ'],
    },
    {
      period: 'Jun 2020 — Jul 2020',
      role: 'Praksa — Java',
      company: 'SDDITG',
      location: 'Beograd',
      highlights: [
        'Izradio Employee Access Control, nativnu Android CRUD aplikaciju koja koristi Swagger dokumentovan API za pretragu, autentifikaciju i upravljanje pristupom zaposlenih na osnovu uloga.',
      ],
      stack: ['Java', 'Android', 'Swagger'],
    },
  ],

  freelance: [
    {
      period: 'Feb 2022 — Feb 2023',
      role: 'Full-Stack Developer',
      company: 'Sirius — Management Systems Certification (ISO)',
      highlights: [
        'Razvoj novih modula i adaptivno održavanje Sirius aplikacije (Angular, .NET Web API, MS SQL).',
      ],
      stack: ['Angular', '.NET Web API', 'MS SQL'],
    },
  ],

  education: [
    {
      period: '2017 — 2020',
      degree: 'Diploma informacionih sistema',
      institution: 'Elektrotehnički fakultet',
    },
    {
      period: '2013 — 2017',
      degree: 'Električar procesne tehnike',
      institution: 'Tehnička škola, Smederevo',
    },
  ],

  languages: [
    { name: 'Srpski', level: 'Maternji jezik' },
    {
      name: 'Engleski',
      level: 'Tečno, uz snažne veštine pisane i usmene komunikacije u profesionalnom i tehničkom okruženju',
    },
  ],

  skillGroups: [
    {
      label: 'Backend i API-ji',
      items: ['C#', '.NET Web API', '.NET MVC', 'SignalR', 'Entity Framework', 'Dapper', 'Spring Boot', 'Minimal APIs', 'CQRS'],
    },
    {
      label: 'Frontend',
      items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'JavaScript', 'Bootstrap', 'Material UI', 'DevExtreme'],
    },
    {
      label: 'Podaci i messaging',
      items: ['MS SQL', 'DynamoDB', 'Redis', 'Elasticsearch', 'Kafka', 'ActiveMQ', 'Talend ESB'],
    },
    {
      label: 'Cloud i DevOps',
      items: ['AWS', 'S3', 'EC2', 'SQS', 'IAM', 'ElastiCache', 'Secrets Manager', 'GitHub', 'GitLab', 'Jira', 'Scrum'],
    },
    {
      label: 'Razvoj uz AI asistente',
      items: ['Codex', 'Claude Code'],
    },
  ],

  projects: [
    {
      title: 'Portfolio',
      url: 'https://github.com/AirDNA6/andria-simic-portfolio',
      liveUrl: 'https://andria-simic-portfolio.vercel.app/',
      description:
        'Angular portfolio sa svetlom i tamnom temom i AI digitalnim blizancem koji odgovara isključivo na osnovu sadržaja portfolija. Postavljen na Vercel.',
      tags: ['Angular', 'TypeScript', 'Vercel', 'Gemini API'],
    },
    {
      title: 'react-nbs',
      url: 'https://github.com/AirDNA6/react-nbs',
      description:
        'Integracija API-ja Narodne banke Srbije sa čuvanjem podataka u MySQL bazi. Node.js i Express obrađuju podatke; React obezbeđuje responzivan frontend.',
      tags: ['React', 'Node.js', 'Express', 'MySQL', 'REST API'],
    },
    {
      title: 'Cinema Crypt',
      url: 'https://github.com/AirDNA6/crypt',
      description:
        'Web aplikacija za otkrivanje filmova koristeći TMDB API, izgrađena u React-u za fluidno pretraživanje i pregled.',
      tags: ['React', 'TMDB API', 'SPA'],
    }
  ],

  navLinks: [
    { id: 'about', label: 'O meni' },
    { id: 'journey', label: 'Iskustvo' },
    { id: 'skills', label: 'Veštine' },
    { id: 'projects', label: 'Projekti' },
    { id: 'contact', label: 'Kontakt' },
  ],

  ui: {
    skipToContent: 'Pređi na sadržaj',
    getInTouch: 'Kontaktiraj me',
    toggleNav: 'Otvori navigaciju',
    switchToEn: 'Prebaci na engleski',
    switchToSrb: 'Prebaci na srpski',
    switchToDark: 'Prebaci na tamnu temu',
    switchToLight: 'Prebaci na svetlu temu',
    hero: {
      status: 'Otvoren za nove uloge',
      remote: 'Spreman za rad na daljinu',
      viewExperience: 'Pogledaj iskustvo',
      githubProfile: 'GitHub',
      flowLabel: 'Dijagram servisa za notifikacije: Kafka, .NET, SignalR, Angular',
      flowCaption: 'Servis za real-time notifikacije, ExamRoom.AI',
      replay: 'Ponovi',
    },
    about: {
      title: 'Inženjering sa svrhom',
      education: 'Obrazovanje',
      languages: 'Jezici',
    },
    journey: {
      title: 'Iskustvo',
      desc: 'Enterprise softver, integracione platforme i real-time sistemi, od prakse do medior uloge.',
      employment: 'Zaposlenje',
      freelance: 'Frilens',
      stack: 'Korišćene tehnologije',
    },
    skills: {
      title: 'Stack i alati',
      desc: 'Tehnologije koje koristim u produkciji: backend, frontend, podaci i cloud.',
    },
    projects: {
      title: 'Lični projekti',
      desc: 'Lični projekti usmereni na razvoj „full-stack” aplikacija i istraživanje savremenih tehnologija.',
      viewOnGithub: 'Pogledaj na GitHub-u',
      viewLive: 'Live sajt',
    },
    contact: {
      title: 'Imaš ulogu ili projekat na umu?',
      desc: 'Otvoren sam za full-time uloge, ugovorni rad i tehničke saradnje. Pošalji poruku i odgovoriću brzo.',
      copyEmail: 'Kopiraj adresu',
      copied: 'Kopirano',
    },
    footer: {
      crafted: 'Napravljeno u Angular-u.',
      backToTop: 'Nazad na vrh',
    },
    twin: {
      launcher: 'Pitaj mog digitalnog blizanca',
      open: 'Otvori ćaskanje sa mojim digitalnim blizancem',
      close: 'Zatvori ćaskanje',
      title: 'Digitalni blizanac',
      subtitle: 'AI asistent. Odgovara samo na osnovu ovog portfolija.',
      welcome:
        'Zdravo! Ja sam AI digitalni blizanac. Znam samo ono što piše u ovom portfoliju, pa me pitaj o radnom iskustvu, veštinama, projektima ili obrazovanju.',
      suggestionsLabel: 'Probaj da pitaš',
      suggestions: [
        'Čime se baviš u ExamRoom.AI?',
        'Koje tehnologije najviše koristiš?',
        'Reci mi više o servisu za real-time notifikacije',
        'Kako mogu da te kontaktiram?',
      ],
      placeholder: 'Pitaj o mom iskustvu…',
      send: 'Pošalji',
      thinking: 'Razmišljam…',
      stillThinking: 'Još radim na tome, može potrajati nekoliko sekundi…',
      newChat: 'Novo ćaskanje',
      you: 'Ti',
      twinName: 'Digitalni blizanac',
      errorGeneric: 'Izvini, trenutno ne mogu da odgovorim. Pokušaj ponovo ili mi pošalji mejl.',
      errorBusy: 'Previše pitanja u kratkom roku. Sačekaj minut pa pokušaj ponovo.',
    },
  },
};
