import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TrustBarComponent } from './components/trust-bar/trust-bar.component';
import { ServicesComponent } from './components/services/services.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { WhyNrsatComponent } from './components/why-nrsat/why-nrsat.component';
import { AppSectionComponent } from './components/app-section/app-section.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    TrustBarComponent,
    ServicesComponent,
    HowItWorksComponent,
    WhyNrsatComponent,
    AppSectionComponent,
    TestimonialsComponent,
    FinalCtaComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
