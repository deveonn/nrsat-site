import { Component, inject } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly cfg = inject(ConfigService);
}
