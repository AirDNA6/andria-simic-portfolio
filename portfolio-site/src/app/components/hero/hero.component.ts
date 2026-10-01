import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly language = inject(LanguageService);

  readonly content = this.language.content;
  readonly ui = computed(() => this.content().ui.hero);
  readonly nameParts = computed(() => this.content().name.split(' '));

  /** The notification service stack, in the order an event travels through it. */
  readonly flowNodes = ['Kafka', '.NET', 'SignalR', 'Angular'];

  /** Bumping this re-creates the diagram, which restarts its one-shot animation. */
  readonly flowRun = signal(0);

  replay(): void {
    this.flowRun.update((run) => run + 1);
  }

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView();
  }
}
