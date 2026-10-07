import { PortfolioContent } from './portfolio.types';

export const PORTFOLIO_EN: PortfolioContent = {
  pageTitle: 'Andria Simić — Full Stack Developer',
  name: 'Andria Simić',
  title: 'Full Stack Developer',
  tagline: 'Clean architecture, real-time systems, and code that ships.',
  email: 'simic.andria06@gmail.com',
  github: 'https://github.com/AirDNA6',
  location: 'Belgrade, Serbia',

  about: `Medior full-stack developer specializing in .NET, Angular, and cloud-native architectures. Real-time, event-driven systems with Kafka and SignalR, and keep APIs clean and maintainable.

Across enterprise and freelance engagements, I've partnered with key users, standardized integrations via custom NuGet packages, and pushed performance with Redis, Elasticsearch, and AWS. I bring a systems mindset to every sprint: measurable impact, reliable code, and interfaces that feel intentional.`,

  career: [
    {
      period: 'Mar 2023 — Present',
      role: 'Full Stack Developer',
      company: 'ExamRoom.AI',
      location: 'Belgrade',
      current: true,
      highlights: [
        'Member of the SWAT Team, contributing to the development and maintenance of the Finance application, with a focus on developing a new Contracts module.',
        'Built a notification microservice with Angular, .NET, SignalR, DynamoDB, and Kafka. Its event-driven architecture delivers scalable real-time notifications and is integrated into multiple projects.',
        'Created custom NuGet packages for SignalR and Kafka to standardize usage and simplify integration across services.',
        'Implemented Redis caching to improve performance and reduce database load.',
        'Built the Bulk Item Import module: Excel templates for bulk item creation and translation of existing items, with FluentValidation-based backend validation, automatic cell population, and dependent-field validation to reduce manual data entry and errors.',
        'Developed and integrated a new module, extending application functionality and improving the user experience.',
        'Refactored the Minimal API structure for readability, maintainability, and efficiency.',
        'Maintained and enhanced existing functionality, keeping the system stable and improving performance.',
        'Integrate AWS Kiro AI into daily development workflows to accelerate implementation, refactoring, and overall engineering productivity.',
      ],
      stack: ['.NET', 'Minimal APIs', 'Angular', 'SignalR', 'Kafka', 'DynamoDB', 'Redis', 'FluentValidation', 'NuGet', 'RxJS', 'NgRx', 'CQRS', 'AWS Kiro'],
    },
    {
      period: 'Mar 2021 — Mar 2023',
      role: 'Software Developer',
      company: 'V-IT Construction & Engineering D.O.O',
      location: 'Belgrade',
      highlights: [
        'Worked on an internal ÖBB (Austrian Federal Railways) application for managing tenders, using Angular, .NET MVC, and Vue.js.',
        'Developed and maintained ADM (Address Master) for the GIS system with Angular and Spring Boot, including user authentication, login, and password recovery.',
        'Held weekly meetings with key users to gather feedback, clarify requirements, and align solutions with business needs.',
        'Migrated a Talend ESB project, ensuring a smooth transition with minimal disruption.',
        'Integrated and optimized Elasticsearch with Spring Boot and Talend to improve data retrieval and search performance.',
        'Developed and maintained ActiveMQ messaging integrations within Talend ESB.',
      ],
      stack: ['Angular', '.NET MVC', 'Vue.js', 'Spring Boot', 'Talend ESB', 'Elasticsearch', 'ActiveMQ'],
    },
    {
      period: 'Jun 2020 — Jul 2020',
      role: 'Java Intern',
      company: 'SDDITG',
      location: 'Belgrade',
      highlights: [
        'Built Employee Access Control, a native Android CRUD app that uses a Swagger-documented API to query, authenticate, and manage role-based employee access permissions.',
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
        'New module development and adaptive maintenance of the Sirius application, built with Angular, .NET Web API, and MS SQL.',
      ],
      stack: ['Angular', '.NET Web API', 'MS SQL'],
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
    {
      name: 'English',
      level: 'Fluent, with strong written and verbal communication skills in professional and technical environments',
    },
  ],

  skillGroups: [
    {
      label: 'Backend & APIs',
      items: ['C#', '.NET Web API', '.NET MVC', 'SignalR', 'Entity Framework', 'Dapper', 'Spring Boot', 'Minimal APIs', 'CQRS'],
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
    {
      label: 'AI-assisted development',
      items: ['Codex', 'Claude Code'],
    },
  ],

  projects: [
    {
      title: 'Portfolio',
      url: 'https://github.com/AirDNA6/andria-simic-portfolio',
      liveUrl: 'https://andria-simic-portfolio.vercel.app/',
      description:
        'Angular portfolio with light and dark themes and an AI digital twin that answers questions only from the portfolio content. Deployed on Vercel.',
      tags: ['Angular', 'TypeScript', 'Vercel', 'Gemini API'],
    },
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
    }
  ],

  navLinks: [
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],

  ui: {
    skipToContent: 'Skip to content',
    getInTouch: 'Get in touch',
    toggleNav: 'Toggle navigation',
    switchToEn: 'Switch to English',
    switchToSrb: 'Switch to Serbian',
    switchToDark: 'Switch to dark theme',
    switchToLight: 'Switch to light theme',
    hero: {
      status: 'Open to new roles',
      remote: 'Remote-ready',
      viewExperience: 'See experience',
      githubProfile: 'GitHub',
      flowLabel: 'Diagram of the notification service: Kafka, .NET, SignalR, Angular',
      flowCaption: 'Real-time notification service, ExamRoom.AI',
      replay: 'Replay',
    },
    about: {
      title: 'Engineering with intent',
      education: 'Education',
      languages: 'Languages',
    },
    journey: {
      title: 'Experience',
      desc: 'Enterprise software, integration platforms, and real-time systems, from internship to medior.',
      employment: 'Employment',
      freelance: 'Freelance',
      stack: 'Technologies used',
    },
    skills: {
      title: 'Stack and tooling',
      desc: 'Technologies I use in production across backend, frontend, data, and cloud.',
    },
    projects: {
      title: 'Person projects',
      desc: 'Personal projects focused on building full-stack applications and exploring modern technologies.',
      viewOnGithub: 'View on GitHub',
      viewLive: 'Live site',
    },
    contact: {
      title: 'Have a role or project in mind?',
      desc: "I'm open to full-time roles, contract work, and technical collaborations. Send a message and I'll reply promptly.",
      copyEmail: 'Copy email',
      copied: 'Copied',
    },
    footer: {
      crafted: 'Built with Angular.',
      backToTop: 'Back to top',
    },
    twin: {
      launcher: 'Ask my digital twin',
      open: 'Open chat with my digital twin',
      close: 'Close chat',
      title: 'Digital twin',
      subtitle: 'AI assistant. Answers only from this portfolio.',
      welcome:
        "Hi! I'm Andria's AI digital twin. I only know what's in this portfolio, so ask me about my work experience, skills, projects, or education.",
      suggestionsLabel: 'Try asking',
      suggestions: [
        'What do you do at ExamRoom.AI?',
        'Which technologies do you use most?',
        'Tell me about your real-time notification service',
        'How can I contact you?',
      ],
      placeholder: 'Ask about my experience…',
      send: 'Send',
      thinking: 'Thinking…',
      stillThinking: 'Still working on it, this can take a few seconds…',
      newChat: 'New chat',
      you: 'You',
      twinName: 'Digital twin',
      errorGeneric: "Sorry, I couldn't get an answer just now. Please try again, or email me.",
      errorBusy: 'Too many questions in a short time. Please wait a minute and try again.',
    },
  },
};
