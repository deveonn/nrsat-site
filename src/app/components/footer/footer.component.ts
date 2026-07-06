import { Component, inject } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly cfg = inject(ConfigService);
}
