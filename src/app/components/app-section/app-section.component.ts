import { Component, inject } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-app-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './app-section.component.html',
  styleUrl: './app-section.component.scss',
})
export class AppSectionComponent {
  readonly cfg = inject(ConfigService);
}
