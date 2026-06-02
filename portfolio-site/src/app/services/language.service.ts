import { computed, effect, Injectable, signal } from '@angular/core';
import { PORTFOLIO_EN } from '../data/portfolio.en';
import { PORTFOLIO_SRB } from '../data/portfolio.srb';
import { PortfolioContent } from '../data/portfolio.types';

export type AppLanguage = 'en' | 'srb';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<AppLanguage>(this.loadLanguage());
  readonly content = computed<PortfolioContent>(() =>
    this.lang() === 'en' ? PORTFOLIO_EN : PORTFOLIO_SRB
  );

  constructor() {
    effect(() => {
      const lang = this.lang();
      const content = this.content();
      document.documentElement.lang = lang === 'en' ? 'en' : 'sr';
      document.title = content.pageTitle;
    });
  }

  setLanguage(language: AppLanguage): void {
    if (this.lang() === language) {
      return;
    }
    this.lang.set(language);
    localStorage.setItem(STORAGE_KEY, language);
  }

  toggleLanguage(): void {
    this.setLanguage(this.lang() === 'en' ? 'srb' : 'en');
  }

  private loadLanguage(): AppLanguage {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'srb' ? 'srb' : 'en';
  }
}
