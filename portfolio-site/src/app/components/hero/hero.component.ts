import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly portfolio = PORTFOLIO;

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
