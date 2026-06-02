import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly portfolio = PORTFOLIO;
}
