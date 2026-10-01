import { effect, Injectable, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';
const THEME_COLOR: Record<AppTheme, string> = { light: '#eceff3', dark: '#0c1724' };

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // Light unless the visitor has explicitly chosen dark; the OS setting is deliberately ignored.
  readonly theme = signal<AppTheme>(this.storedTheme() ?? 'light');

  private transitionTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    effect(() => {
      const theme = this.theme();
      document.documentElement.dataset['theme'] = theme;
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme]);
    });
  }

  toggle(): void {
    const next: AppTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.animateSwitch();
    this.theme.set(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked; the choice still applies for this visit.
    }
  }

  private storedTheme(): AppTheme | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'dark' || stored === 'light' ? stored : null;
    } catch {
      return null;
    }
  }

  /** Cross-fades colours for the moment of the switch only, so scrolling and hovering stay snappy. */
  private animateSwitch(): void {
    const root = document.documentElement;
    root.classList.add('theme-switching');
    clearTimeout(this.transitionTimer);
    this.transitionTimer = setTimeout(() => root.classList.remove('theme-switching'), 400);
  }
}
