import { Component, inject } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly cfg = inject(ConfigService);
}
