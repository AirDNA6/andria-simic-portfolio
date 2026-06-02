import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly portfolio = PORTFOLIO;
  readonly aboutParagraphs = PORTFOLIO.about.split('\n\n').filter(Boolean);
}
