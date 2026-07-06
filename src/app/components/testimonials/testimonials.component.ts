import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {}
