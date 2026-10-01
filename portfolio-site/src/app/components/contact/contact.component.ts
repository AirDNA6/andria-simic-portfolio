import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

const COPIED_FLASH_MS = 2000;

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly language = inject(LanguageService);

  readonly content = this.language.content;
  readonly ui = computed(() => this.content().ui.contact);
  readonly copied = signal(false);

  /** The clipboard API is missing on insecure origins; the mailto link still works there. */
  readonly canCopy = typeof navigator !== 'undefined' && !!navigator.clipboard;

  private copiedTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.copiedTimer));
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.content().email);
    } catch {
      return;
    }
    this.copied.set(true);
    clearTimeout(this.copiedTimer);
    this.copiedTimer = setTimeout(() => this.copied.set(false), COPIED_FLASH_MS);
  }
}
