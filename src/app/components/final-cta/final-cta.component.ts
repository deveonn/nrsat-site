import { Component, inject } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss',
})
export class FinalCtaComponent {
  readonly cfg = inject(ConfigService);
}
