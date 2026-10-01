import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { AppLanguage, LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

const DESKTOP_NAV_MIN_WIDTH = 1024;

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly language = inject(LanguageService);
  private readonly themeService = inject(ThemeService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  readonly content = this.language.content;
  readonly lang = this.language.lang;
  readonly theme = this.themeService.theme;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = signal('');

  readonly toggleLangLabel = computed(() =>
    this.lang() === 'en' ? this.content().ui.switchToSrb : this.content().ui.switchToEn
  );
  readonly toggleThemeLabel = computed(() =>
    this.theme() === 'dark' ? this.content().ui.switchToLight : this.content().ui.switchToDark
  );

  constructor() {
    effect(() => document.body.classList.toggle('no-scroll', this.menuOpen()));
    this.destroyRef.onDestroy(() => document.body.classList.remove('no-scroll'));
    afterNextRender(() => {
      this.onScroll();
      this.observeSections();
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= DESKTOP_NAV_MIN_WIDTH) {
      this.menuOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      this.menuButton()?.nativeElement.focus();
    }
  }

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView();
  }

  /** Moves keyboard focus into the page content, which scrolling alone does not do. */
  skipToContent(event: Event): void {
    event.preventDefault();
    document.getElementById('main')?.focus();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  setLanguage(language: AppLanguage): void {
    this.language.setLanguage(language);
    this.menuOpen.set(false);
  }

  /** Marks the nav link of the section that currently crosses the middle of the viewport. */
  private observeSections(): void {
    const ids = ['hero', ...this.content().navLinks.map((link) => link.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
