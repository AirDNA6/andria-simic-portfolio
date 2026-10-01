import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly language = inject(LanguageService);

  readonly content = this.language.content;
  readonly ui = computed(() => this.content().ui.footer);
  readonly year = new Date().getFullYear();

  scrollToTop(event: Event): void {
    event.preventDefault();
    document.getElementById('hero')?.scrollIntoView();
  }
}
