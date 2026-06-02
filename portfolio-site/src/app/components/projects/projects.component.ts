import { Component, computed, inject } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly language = inject(LanguageService);

  readonly content = this.language.content;
  readonly ui = computed(() => this.content().ui.projects);
}
