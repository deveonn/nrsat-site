import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-trust-bar',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './trust-bar.component.html',
  styleUrl: './trust-bar.component.scss',
})
export class TrustBarComponent {}
