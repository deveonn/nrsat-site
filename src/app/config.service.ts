import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  readonly whatsappNumber = environment.whatsappNumber;
  readonly areaClienteUrl = environment.areaClienteUrl;
  readonly instagramUrl = environment.instagramUrl;

  wa(msg: string): string {
    const num = this.whatsappNumber.replace(/\D/g, '');
    return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  }

  get waOrcamento() {
    return this.wa('Olá! Gostaria de fazer um orçamento de rastreamento veicular.');
  }
  get waCarro() {
    return this.wa('Olá! Gostaria de um orçamento de rastreamento para meu carro.');
  }
  get waMoto() {
    return this.wa('Olá! Gostaria de um orçamento de rastreamento para minha moto.');
  }
  get waFrota() {
    return this.wa('Olá! Gostaria de um orçamento de rastreamento para caminhão/frota.');
  }
  get waNautico() {
    return this.wa('Olá! Gostaria de um orçamento de rastreamento para embarcação.');
  }
}
