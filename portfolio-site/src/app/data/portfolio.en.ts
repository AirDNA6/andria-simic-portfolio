import { PortfolioContent } from './portfolio.types';

export const PORTFOLIO_EN: PortfolioContent = {
  pageTitle: 'Andria Simić — Full Stack Developer',
  name: 'Andria Simić',
  title: 'Full Stack Developer',
  tagline: 'Building scalable systems where enterprise rigor meets sharp execution.',
  email: 'simic.andria06@gmail.com',
  github: 'https://github.com/AirDNA6',
  location: 'Belgrade, Serbia',

  about: `I'm a medior full-stack developer with a foundation in electrical and computer engineering, specializing in .NET backends, Angular frontends, and cloud-native architectures. I thrive at the intersection of clean architecture and delivery speed—whether leading Talend ESB migrations, shipping real-time notification microservices with Kafka and SignalR, or refining APIs for long-term maintainability.

Across enterprise and freelance engagements, I've partnered with stakeholders through weekly syncs, standardized integrations via custom NuGet packages, and pushed performance with Redis, Elasticsearch, and AWS. I bring a systems mindset to every sprint: measurable impact, reliable code, and interfaces that feel intentional.`,

  career: [
    {
      period: 'Mar 2023 — Present',
      role: 'Medior Full Stack Developer',
      company: 'ExamRoom.AI',
      location: 'Belgrade',
      type: 'work',
      highlights: [
        'Developed a notification microservice with .NET, Angular, SignalR, DynamoDB, and Kafka for scalable real-time updates across multiple products.',
        'Created custom NuGet packages for SignalR and Kafka to standardize integration across services.',
        'Implemented Redis caching to reduce database load and improve response times.',
        'Developed and integrated new modules; refactored Minimal API structure for maintainability.',
      ],
    },
    {
      period: 'Feb 2022 — Feb 2023',
      role: 'Full-Stack Developer',
      company: 'Sirius — Management Systems Certification (ISO)',
      location: 'Freelance',
      type: 'freelance',
      highlights: [
        'New module development and adaptive maintenance on Sirius application (Angular, .NET Web API, MS SQL).',
      ],
    },
    {
      period: 'Mar 2021 — Mar 2023',
      role: 'Software Developer',
      company: 'V-IT Construction & Engineering D.O.O',
      location: 'Belgrade',
      type: 'work',
      highlights: [
        'Maintained and developed web apps with .NET MVC, Angular, and Spring Boot.',
        'Led Talend ESB project migration; integrated Elasticsearch and ActiveMQ.',
        'Conducted weekly meetings with key users to align development with business needs.',
        'Built Android CRUD app using Swagger employee API for access control.',
      ],
    },
    {
      period: 'Jun 2020 — Jul 2020',
      role: 'Intern — Java',
      company: 'SDDITG',
      location: 'Belgrade',
      type: 'intern',
      highlights: ['Foundation in professional Java development within an enterprise setting.'],
    },
  ],

  education: [
    {
      period: '2017 — 2020',
      degree: 'Bachelor in Information Systems',
      institution: 'School of Electrical and Computer Engineering',
    },
    {
      period: '2013 — 2017',
      degree: 'Process Control Electrician',
      institution: 'Technical School, Smederevo',
    },
  ],

  languages: [
    { name: 'Serbian', level: 'Native' },
    { name: 'English', level: 'Professional — speaking, reading, writing' },
  ],

  skillGroups: [
    {
      label: 'Backend & APIs',
      items: ['C#', '.NET Web API', '.NET MVC', 'SignalR', 'Entity Framework', 'Dapper', 'Spring Boot', 'Minimal APIs'],
    },
    {
      label: 'Frontend',
      items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'JavaScript', 'Bootstrap', 'Material UI', 'DevExtreme'],
    },
    {
      label: 'Data & Messaging',
      items: ['MS SQL', 'DynamoDB', 'Redis', 'Elasticsearch', 'Kafka', 'ActiveMQ', 'Talend ESB'],
    },
    {
      label: 'Cloud & DevOps',
      items: ['AWS', 'S3', 'EC2', 'SQS', 'IAM', 'ElastiCache', 'Secrets Manager', 'GitHub', 'GitLab', 'Jira', 'Scrum'],
    },
  ],

  projects: [
    {
      title: 'react-nbs',
      url: 'https://github.com/AirDNA6/react-nbs',
      description:
        'Integrates the National Bank of Serbia API, persisting data in MySQL. Node.js and Express handle processing; React delivers a responsive frontend.',
      tags: ['React', 'Node.js', 'Express', 'MySQL', 'REST API'],
    },
    {
      title: 'Cinema Crypt',
      url: 'https://github.com/AirDNA6/crypt',
      description:
        'Cinema discovery web app powered by The Movie Database (TMDB) API, built with React for smooth browsing and search.',
      tags: ['React', 'TMDB API', 'SPA'],
    },
  ],

  navLinks: [
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],

  ui: {
    getInTouch: 'Get in touch',
    toggleNav: 'Toggle navigation',
    switchToEn: 'Switch to English',
    switchToSrb: 'Switch to Serbian',
    hero: {
      eyebrow: 'Available for impactful engineering roles',
      viewJourney: 'View my journey',
      githubProfile: 'GitHub profile',
      yearsInTech: 'Years in tech',
      angularStack: '& Angular stack',
      basedRemote: 'Based · Remote-ready',
      scroll: 'Scroll',
    },
    about: {
      label: 'About me',
      title: 'Engineering with intent',
      education: 'Education',
      languages: 'Languages',
    },
    journey: {
      label: 'Career journey',
      title: 'From intern to medior full-stack',
      desc: 'A trajectory through enterprise software, integration platforms, and real-time distributed systems.',
      typeWork: 'Full-time',
      typeFreelance: 'Freelance',
      typeIntern: 'Internship',
    },
    skills: {
      label: 'Technical arsenal',
      title: 'Stack & tooling',
      desc: 'Production-grade technologies across backend, frontend, data, and cloud operations.',
    },
    projects: {
      label: 'Personal projects',
      title: 'Built outside the sprint',
      desc: 'Side projects that sharpen API integration, data persistence, and polished UIs.',
      viewOnGithub: 'View on GitHub',
    },
    contact: {
      label: 'Contact',
      title: "Let's build something remarkable",
      desc: "Open to full-time roles, contract work, and technical collaborations. Reach out and I'll respond promptly.",
    },
    footer: {
      crafted: 'Crafted with Angular.',
      backToTop: 'Back to top ↑',
    },
  },
};
