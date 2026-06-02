import { Component, computed, inject } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { CareerEntry } from '../../data/portfolio.types';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss',
})
export class JourneyComponent {
  private readonly language = inject(LanguageService);

  readonly content = this.language.content;
  readonly ui = computed(() => this.content().ui.journey);

  typeLabel(entry: CareerEntry): string {
    const labels = this.ui();
    const map: Record<CareerEntry['type'], string> = {
      work: labels.typeWork,
      freelance: labels.typeFreelance,
      intern: labels.typeIntern,
    };
    return map[entry.type];
  }
}
