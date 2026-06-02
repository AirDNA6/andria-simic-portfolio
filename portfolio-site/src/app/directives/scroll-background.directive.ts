import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollBackground]',
  standalone: true,
})
export class ScrollBackgroundDirective implements OnInit, OnDestroy {
  private rafId = 0;

  private readonly onScroll = (): void => {
    if (this.rafId) {
      return;
    }
    this.rafId = requestAnimationFrame(() => {
      this.rafId = 0;
      const distance = window.innerHeight * 1.15;
      const progress = Math.min(1, window.scrollY / distance);
      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
    });
  };

  ngOnInit(): void {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    document.documentElement.style.removeProperty('--scroll-progress');
  }
}
