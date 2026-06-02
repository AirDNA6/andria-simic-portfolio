import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { AppLanguage, LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly language = inject(LanguageService);

  readonly content = this.language.content;
  readonly lang = this.language.lang;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly toggleLangLabel = computed(() =>
    this.lang() === 'en' ? this.content().ui.switchToSrb : this.content().ui.switchToEn
  );

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  scrollTo(id: string): void {
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  setLanguage(language: AppLanguage): void {
    this.language.setLanguage(language);
    this.menuOpen.set(false);
  }
}
