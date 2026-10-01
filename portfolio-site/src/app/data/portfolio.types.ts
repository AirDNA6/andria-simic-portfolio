export interface CareerEntry {
  period: string;
  role: string;
  company: string;
  location?: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
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
  skipToContent: string;
  getInTouch: string;
  toggleNav: string;
  switchToEn: string;
  switchToSrb: string;
  switchToDark: string;
  switchToLight: string;
  hero: {
    status: string;
    remote: string;
    viewExperience: string;
    githubProfile: string;
    flowLabel: string;
    flowCaption: string;
    replay: string;
  };
  about: {
    title: string;
    education: string;
    languages: string;
  };
  journey: {
    title: string;
    desc: string;
    employment: string;
    freelance: string;
    stack: string;
  };
  skills: {
    title: string;
    desc: string;
  };
  projects: {
    title: string;
    desc: string;
    viewOnGithub: string;
  };
  contact: {
    title: string;
    desc: string;
    copyEmail: string;
    copied: string;
  };
  footer: {
    crafted: string;
    backToTop: string;
  };
  twin: {
    launcher: string;
    open: string;
    close: string;
    title: string;
    subtitle: string;
    welcome: string;
    suggestionsLabel: string;
    suggestions: string[];
    placeholder: string;
    send: string;
    thinking: string;
    stillThinking: string;
    newChat: string;
    you: string;
    twinName: string;
    errorGeneric: string;
    errorBusy: string;
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
  freelance: CareerEntry[];
  education: EducationEntry[];
  languages: LanguageEntry[];
  skillGroups: SkillGroup[];
  projects: ProjectEntry[];
  navLinks: NavLink[];
  ui: PortfolioUi;
}
