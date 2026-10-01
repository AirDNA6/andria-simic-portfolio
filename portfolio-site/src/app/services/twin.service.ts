import { computed, inject, Injectable, signal } from '@angular/core';
import { LanguageService } from './language.service';

export const MAX_QUESTION_CHARS = 500;

/** How many past messages are sent along so follow-up questions make sense. */
const HISTORY_LIMIT = 10;
// Longer than the server's own 45s budget (server/twin.ts), so the server gives up first.
const REQUEST_TIMEOUT_MS = 55_000;

export interface TwinMessage {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  /** Failed requests are shown to the visitor but never sent back as conversation history. */
  failed?: boolean;
}

@Injectable({ providedIn: 'root' })
export class TwinService {
  private readonly language = inject(LanguageService);
  private nextId = 0;

  readonly messages = signal<TwinMessage[]>([]);
  readonly pending = signal(false);
  readonly started = computed(() => this.messages().length > 0);

  async ask(text: string): Promise<void> {
    const question = text.trim().slice(0, MAX_QUESTION_CHARS);
    if (!question || this.pending()) {
      return;
    }

    this.push('user', question);
    this.pending.set(true);

    // Only plain chat turns leave the browser. The rules and the portfolio data live on the server.
    const history = this.messages()
      .filter((message) => !message.failed)
      .slice(-HISTORY_LIMIT)
      .map(({ role, content }) => ({ role, content }));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang: this.language.lang(), messages: history }),
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
      const data: { answer?: unknown } | null = await response.json().catch(() => null);

      if (response.ok && typeof data?.answer === 'string' && data.answer) {
        this.push('assistant', data.answer);
      } else {
        this.pushError(response.status === 429);
      }
    } catch {
      this.pushError(false);
    } finally {
      this.pending.set(false);
    }
  }

  reset(): void {
    this.messages.set([]);
  }

  private pushError(busy: boolean): void {
    const ui = this.language.content().ui.twin;
    this.push('assistant', busy ? ui.errorBusy : ui.errorGeneric, true);
  }

  private push(role: TwinMessage['role'], content: string, failed = false): void {
    this.messages.update((messages) => [...messages, { id: this.nextId++, role, content, failed }]);
  }
}
