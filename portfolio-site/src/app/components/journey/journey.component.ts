import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { CareerEntry, PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss',
})
export class JourneyComponent {
  readonly portfolio = PORTFOLIO;

  typeLabel(entry: CareerEntry): string {
    const labels: Record<CareerEntry['type'], string> = {
      work: 'Full-time',
      freelance: 'Freelance',
      intern: 'Internship',
    };
    return labels[entry.type];
  }
}
