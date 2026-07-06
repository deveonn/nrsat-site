import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent {}
