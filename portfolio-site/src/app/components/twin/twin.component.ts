import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  HostListener,
  inject,
  Injector,
  signal,
  viewChild,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { MAX_QUESTION_CHARS, TwinService } from '../../services/twin.service';

/** After this long without an answer, the typing indicator explains that it is still working. */
const SLOW_AFTER_MS = 4_000;

@Component({
  selector: 'app-twin',
  standalone: true,
  templateUrl: './twin.component.html',
  styleUrl: './twin.component.scss',
})
export class TwinComponent {
  private readonly language = inject(LanguageService);
  private readonly injector = inject(Injector);
  private readonly tab = viewChild<ElementRef<HTMLButtonElement>>('tab');
  private readonly panel = viewChild<ElementRef<HTMLElement>>('panel');
  private readonly log = viewChild<ElementRef<HTMLElement>>('log');
  private readonly input = viewChild<ElementRef<HTMLInputElement>>('input');

  protected readonly twin = inject(TwinService);
  protected readonly ui = computed(() => this.language.content().ui.twin);
  protected readonly maxChars = MAX_QUESTION_CHARS;

  protected readonly open = signal(false);
  protected readonly draft = signal('');
  protected readonly canSend = computed(() => this.draft().trim().length > 0 && !this.twin.pending());
  protected readonly slow = signal(false);

  /** On phones the panel fills the screen; these follow the visible area so the keyboard never covers the input. */
  protected readonly viewportHeight = signal<string | null>(null);
  protected readonly viewportTop = signal<string | null>(null);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Keep the newest message in view.
    effect(() => {
      this.twin.messages();
      this.twin.pending();
      requestAnimationFrame(() => {
        const log = this.log()?.nativeElement;
        if (log) {
          log.scrollTop = log.scrollHeight;
        }
      });
    });

    effect((onCleanup) => {
      if (!this.twin.pending()) {
        this.slow.set(false);
        return;
      }
      const timer = setTimeout(() => this.slow.set(true), SLOW_AFTER_MS);
      onCleanup(() => clearTimeout(timer));
    });

    // The page behind a full-screen phone panel must not scroll (see styles.scss).
    effect(() => document.body.classList.toggle('twin-open', this.open()));
    destroyRef.onDestroy(() => document.body.classList.remove('twin-open'));

    effect((onCleanup) => {
      const viewport = window.visualViewport;
      if (!this.open() || !viewport) {
        return;
      }
      const sync = () => {
        this.viewportHeight.set(`${Math.round(viewport.height)}px`);
        this.viewportTop.set(`${Math.round(viewport.offsetTop)}px`);
      };
      sync();
      viewport.addEventListener('resize', sync);
      viewport.addEventListener('scroll', sync);
      onCleanup(() => {
        viewport.removeEventListener('resize', sync);
        viewport.removeEventListener('scroll', sync);
      });
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) {
      this.close();
    }
  }

  openChat(): void {
    this.open.set(true);
    // Focus moves in once the sidebar is no longer inert. A phone keyboard popping up straight
    // away would hide the suggestions, so only pointer devices focus the input; touch users land
    // on the panel itself.
    afterNextRender(
      () => {
        const target = matchMedia('(pointer: fine)').matches ? this.input() : this.panel();
        target?.nativeElement.focus({ preventScroll: true });
      },
      { injector: this.injector }
    );
  }

  close(): void {
    this.open.set(false);
    // The edge tab is re-created when the sidebar closes; put focus back on it.
    afterNextRender(() => this.tab()?.nativeElement.focus({ preventScroll: true }), { injector: this.injector });
  }

  onInput(event: Event): void {
    this.draft.set((event.target as HTMLInputElement).value);
  }

  submit(event: Event): void {
    event.preventDefault();
    if (!this.canSend()) {
      return;
    }
    const text = this.draft();
    this.draft.set('');
    void this.twin.ask(text);
  }

  askSuggestion(question: string): void {
    void this.twin.ask(question);
  }
}
