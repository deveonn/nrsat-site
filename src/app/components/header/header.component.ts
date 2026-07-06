import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly cfg = inject(ConfigService);
  readonly menuOpen = signal(false);
  isDesktop = window.matchMedia('(min-width: 921px)').matches;

  private mq = window.matchMedia('(min-width: 921px)');
  private mqListener = (e: MediaQueryListEvent) => {
    this.isDesktop = e.matches;
    if (e.matches) this.menuOpen.set(false);
  };

  constructor() {
    this.mq.addEventListener('change', this.mqListener);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.menuOpen.set(false);
  }
}
