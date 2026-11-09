import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { FeaturedProjectComponent } from '../featured-project/featured-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FeaturedProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly language = inject(LanguageService);

  readonly content = this.language.content;
  readonly ui = computed(() => this.content().ui.projects);
}
