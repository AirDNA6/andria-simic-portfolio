export interface CareerEntry {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
  type: 'work' | 'freelance' | 'intern';
}

export interface EducationEntry {
  period: string;
  degree: string;
  institution: string;
}

export interface ProjectEntry {
  title: string;
  url: string;
  description: string;
  tags: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface NavLink {
  id: string;
  label: string;
}

export interface LanguageEntry {
  name: string;
  level: string;
}

export interface PortfolioUi {
  getInTouch: string;
  toggleNav: string;
  switchToEn: string;
  switchToSrb: string;
  hero: {
    eyebrow: string;
    viewJourney: string;
    githubProfile: string;
    yearsInTech: string;
    angularStack: string;
    basedRemote: string;
    scroll: string;
  };
  about: {
    label: string;
    title: string;
    education: string;
    languages: string;
  };
  journey: {
    label: string;
    title: string;
    desc: string;
    typeWork: string;
    typeFreelance: string;
    typeIntern: string;
  };
  skills: {
    label: string;
    title: string;
    desc: string;
  };
  projects: {
    label: string;
    title: string;
    desc: string;
    viewOnGithub: string;
  };
  contact: {
    label: string;
    title: string;
    desc: string;
  };
  footer: {
    crafted: string;
    backToTop: string;
  };
}

export interface PortfolioContent {
  pageTitle: string;
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  location: string;
  about: string;
  career: CareerEntry[];
  education: EducationEntry[];
  languages: LanguageEntry[];
  skillGroups: SkillGroup[];
  projects: ProjectEntry[];
  navLinks: NavLink[];
  ui: PortfolioUi;
}
