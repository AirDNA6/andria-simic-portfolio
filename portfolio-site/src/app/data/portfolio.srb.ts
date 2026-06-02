import { PortfolioContent } from './portfolio.types';

export const PORTFOLIO_SRB: PortfolioContent = {
  pageTitle: 'Andria Simić — Full Stack Developer',
  name: 'Andria Simić',
  title: 'Full Stack Developer',
  tagline: 'Gradim skalabilne sisteme gde enterprise rigor susreće preciznu realizaciju.',
  email: 'simic.andria06@gmail.com',
  github: 'https://github.com/AirDNA6',
  location: 'Beograd, Srbija',

  about: `Medior full-stack developer sa osnovom iz elektrotehnike i računarstva, specijalizovan za .NET backend, Angular frontend i cloud-native arhitekture. Najbolje radim na preseku čiste arhitekture i brzine isporuke — bilo da vodim migracije u Talend ESB-u, isporučujem mikroservise za real-time notifikacije sa Kafka i SignalR, ili doterujem API-je za dugoročnu održivost.

Kroz enterprise i freelance angažmane saradjivao sam sa korisnicima na nedeljnim sastancima, standardizovao integracije kroz custom NuGet pakete i unapredio performanse pomoću Redis-a, Elasticsearch-a i AWS-a. U svaki sprint unosim sistemski pristup: merljiv uticaj, pouzdan kod i interfejsi koji deluju namerno.`,

  career: [
    {
      period: 'Mar 2023 — danas',
      role: 'Medior Full Stack Developer',
      company: 'ExamRoom.AI',
      location: 'Beograd',
      type: 'work',
      highlights: [
        'Razvio mikroservis za notifikacije koristeći .NET, Angular, SignalR, DynamoDB i Kafka za skalabilna real-time ažuriranja u više proizvoda.',
        'Kreirao custom NuGet pakete za SignalR i Kafka radi standardizacije integracije kroz servise.',
        'Implementirao Redis keširanje radi smanjenja opterećenja baze i bržih odgovora.',
        'Razvio i integrisao nove module; refaktorisao Minimal API strukturu radi bolje održivosti.',
      ],
    },
    {
      period: 'Feb 2022 — Feb 2023',
      role: 'Full-Stack Developer',
      company: 'Sirius — Management Systems Certification (ISO)',
      location: 'Frilens',
      type: 'freelance',
      highlights: [
        'Razvoj novih modula i adaptivno održavanje Sirius aplikacije (Angular, .NET Web API, MS SQL).',
      ],
    },
    {
      period: 'Mar 2021 — Mar 2023',
      role: 'Software Developer',
      company: 'V-IT Construction & Engineering D.O.O',
      location: 'Beograd',
      type: 'work',
      highlights: [
        'Održavao i razvijao web aplikacije sa .NET MVC, Angular i Spring Boot.',
        'Vodio migraciju projekta u Talend ESB; integrisao Elasticsearch i ActiveMQ.',
        'Održavao nedeljne sastanke sa ključnim korisnicima radi usklađivanja razvoja sa poslovnim potrebama.',
        'Razvio Android CRUD aplikaciju koja koristi Swagger employee API za kontrolu pristupa.',
      ],
    },
    {
      period: 'Jun 2020 — Jul 2020',
      role: 'Praksa — Java',
      company: 'SDDITG',
      location: 'Beograd',
      type: 'intern',
      highlights: ['Osnove profesionalnog Java razvoja u enterprise okruženju.'],
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
    { name: 'Engleski', level: 'Profesionalno — govor, čitanje, pisanje' },
  ],

  skillGroups: [
    {
      label: 'Backend i API-ji',
      items: ['C#', '.NET Web API', '.NET MVC', 'SignalR', 'Entity Framework', 'Dapper', 'Spring Boot', 'Minimal APIs'],
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
  ],

  projects: [
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
    },
  ],

  navLinks: [
    { id: 'about', label: 'O meni' },
    { id: 'journey', label: 'Karijera' },
    { id: 'skills', label: 'Veštine' },
    { id: 'projects', label: 'Projekti' },
    { id: 'contact', label: 'Kontakt' },
  ],

  ui: {
    getInTouch: 'Kontaktiraj me',
    toggleNav: 'Otvori navigaciju',
    switchToEn: 'Prebaci na engleski',
    switchToSrb: 'Prebaci na srpski',
    hero: {
      eyebrow: 'Dostupan za značajne inženjerske uloge',
      viewJourney: 'Pogledaj moju karijeru',
      githubProfile: 'GitHub profil',
      yearsInTech: 'Godina u IT-u',
      angularStack: 'i Angular stack',
      basedRemote: 'Beograd · Remote spreman',
      scroll: 'Skroluj',
    },
    about: {
      label: 'O meni',
      title: 'Inženjering sa svrhom',
      education: 'Obrazovanje',
      languages: 'Jezici',
    },
    journey: {
      label: 'Karijerni put',
      title: 'Od prakse do medior full-stack uloge',
      desc: 'Put kroz enterprise softver, integracione platforme i real-time distribuirane sisteme.',
      typeWork: 'Puno radno vreme',
      typeFreelance: 'Frilens',
      typeIntern: 'Praksa',
    },
    skills: {
      label: 'Tehnički arsenal',
      title: 'Stack i alati',
      desc: 'Produkcione tehnologije za backend, frontend, podatke i cloud operacije.',
    },
    projects: {
      label: 'Lični projekti',
      title: 'Izvan sprinta',
      desc: 'Side projekti koji oštre API integracije, perzistenciju podataka i doteran UI.',
      viewOnGithub: 'Pogledaj na GitHub-u',
    },
    contact: {
      label: 'Kontakt',
      title: 'Hajde da napravimo nešto izvanredno',
      desc: 'Otvoren za full-time uloge, ugovore i tehničke saradnje. Javi se — odgovaram brzo.',
    },
    footer: {
      crafted: 'Napravljeno u Angular-u.',
      backToTop: 'Nazad na vrh ↑',
    },
  },
};
