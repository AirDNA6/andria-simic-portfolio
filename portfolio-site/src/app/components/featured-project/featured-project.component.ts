import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

/** The lead personal project, told as a case study: what it is, how it works, what was built. */
@Component({
  selector: 'app-featured-project',
  standalone: true,
  templateUrl: './featured-project.component.html',
  styleUrl: './featured-project.component.scss',
})
export class FeaturedProjectComponent {
  private readonly language = inject(LanguageService);

  readonly project = computed(() => this.language.content().featuredProject);
  readonly ui = computed(() => this.language.content().ui.projects);
}
