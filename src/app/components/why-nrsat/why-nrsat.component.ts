import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-why-nrsat',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './why-nrsat.component.html',
  styleUrl: './why-nrsat.component.scss',
})
export class WhyNrsatComponent {}
