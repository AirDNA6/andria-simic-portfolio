import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-journey',
  standalone: true,
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss',
})
export class JourneyComponent {
  private readonly language = inject(LanguageService);

  readonly content = this.language.content;
  readonly ui = computed(() => this.content().ui.journey);

  /** Employment first, then freelance work as its own group, as the CV lays it out. */
  readonly groups = computed(() => {
    const { career, freelance } = this.content();
    const ui = this.ui();
    return [
      { id: 'employment', title: ui.employment, hideTitle: true, entries: career },
      ...(freelance.length ? [{ id: 'freelance', title: ui.freelance, hideTitle: false, entries: freelance }] : []),
    ];
  });
}
