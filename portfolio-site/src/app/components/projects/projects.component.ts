import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly portfolio = PORTFOLIO;
}
