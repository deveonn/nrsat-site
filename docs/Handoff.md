# Handoff: Site Institucional NRSAT Tecnologia e Monitoramento

## Overview
Site institucional single-page (com âncoras) para a **NRSAT Tecnologia e Monitoramento**, empresa de rastreamento e monitoramento veicular (carros, motos, caminhões/frotas e embarcações). Objetivo de negócio: **converter o visitante em contato via WhatsApp** ("Orçamento on-line"), com entrada secundária para a **Área do Cliente** (app de rastreamento). Tom corporativo tradicional, tema claro, transmitindo confiança, credibilidade e segurança.

## About the Design Files
Os arquivos deste pacote são **referências de design criadas em HTML** — um protótipo que mostra a aparência e o comportamento pretendidos, **não código de produção para copiar diretamente**. A tarefa é **recriar este design em Angular** (ver seção "Implementação em Angular" abaixo), usando os padrões do framework. Abra `NRSAT Site Institucional.dc.html` no navegador (com `support.js` na mesma pasta) para ver o resultado final; todo o markup e os estilos inline dentro do arquivo são a fonte da verdade para medidas, cores e tipografia.

## Fidelity
**High-fidelity (hifi).** Cores, tipografia, espaçamentos, conteúdo e interações são finais. Recriar pixel-perfect. Exceções sinalizadas no próprio design com colchetes e fonte monoespaçada, ex.: `[ IMAGEM: ... ]`, `[ (DDD) 0000-0000 ]` — são **placeholders intencionais** a preencher com dados reais do cliente. **Não inventar** dados, depoimentos ou números.

## Implementação em Angular (pedido do cliente)
- Angular 17+ com **standalone components** e novo control flow (`@if`/`@for`).
- Estrutura sugerida (um componente por seção, todos usados por um `LandingPageComponent`):
  - `HeaderComponent` (fixo, com menu mobile), `HeroComponent`, `TrustBarComponent`, `ServicesComponent`, `HowItWorksComponent`, `WhyNrsatComponent`, `AppSectionComponent`, `TestimonialsComponent`, `FinalCtaComponent`, `FooterComponent`.
- Centralizar dados configuráveis em um `environment`/serviço de configuração:
  - `whatsappNumber` (E.164, só dígitos — placeholder atual `5500000000000`)
  - `areaClienteUrl`, `instagramUrl`, telefone, e-mail, endereço, horário.
- Links de WhatsApp: `https://wa.me/{numero}?text={mensagem URL-encoded}` com mensagens pré-preenchidas por contexto (ver "Interactions").
- Estilos: SCSS por componente é aceitável; converter os estilos inline do protótipo em classes. Manter os mesmos valores (tokens abaixo).
- Menu mobile: breakpoint **920px** (`matchMedia` ou CSS). No protótipo o estado é JS; em Angular usar um `signal`/property `menuOpen` + `BreakpointObserver` do CDK.
- Rolagem suave: `scroll-behavior: smooth` no `html`; âncoras `#inicio`, `#servicos`, `#como-funciona`, `#empresa`, `#app`, `#depoimentos`, `#contato`. Todas as seções têm `scroll-margin-top: 90px` (compensa o header fixo de 72px).
- SEO: definir `<title>` e meta tags no `index.html` (são estáticas). Valores exatos na seção "Meta tags".

## Meta tags (usar exatamente)
- `title`: `NRSAT Tecnologia e Monitoramento — Rastreamento Veicular 24h`
- `description`: `Rastreamento e monitoramento veicular 24 horas para carros, motos, caminhões, frotas e embarcações. Central própria, bloqueio remoto e pronta resposta. Faça um orçamento pelo WhatsApp.`
- `og:title`: `NRSAT Tecnologia e Monitoramento`
- `og:description`: `Proteção e rastreamento 24 horas para o seu veículo. Carros, motos, caminhões, frotas e embarcações.`
- `og:type`: `website` · idioma do documento: `pt-BR`

## Screens / Views (ordem no documento)

### 1. Header fixo
- `position: fixed; top: 0`, altura **72px**, fundo `#FFFFFF`, borda inferior `1px #E9E3E2`, sombra `0 1px 8px rgba(60,20,22,0.06)`, z-index 100. Conteúdo em container `max-width: 1180px; padding: 0 20px`.
- Logo: quadrado 38×38, raio 8, fundo `#871619`, ícone de escudo branco (stroke 2) + wordmark "NRSAT" (Archivo 800, 20px, `#871619`, letter-spacing 0.5px) e sub-linha "TECNOLOGIA E MONITORAMENTO" (10px, 600, uppercase, letter-spacing 1.6px, `#71605F`).
- Desktop (>920px): nav com 5 links (Início · Serviços · Como Funciona · A Empresa · Contato), 15px/600, cor `#4C3E3F`, hover `#871619`; botão secundário "Área do Cliente" (borda 1.5px `#D9C2C2`, texto `#871619`, raio 6, hover fundo `#F9F2F2` + borda `#871619`); botão primário "Orçamento no WhatsApp" (fundo `#17A05E`, hover `#12854D`, texto branco 14px/700, raio 6, ícone WhatsApp 16px, sombra `0 2px 6px rgba(23,160,94,0.28)`).
- Mobile (≤920px): botão compacto "Orçamento" (verde) + botão hambúrguer 44×44 (borda 1.5px `#D9C2C2`, ícone 3 linhas `#871619`). Menu abre como painel abaixo do header: links 16px/600 com divisores `#EFF3F7`-equivalente (`1px` claro), e botão "Área do Cliente" full-width no final. Fechar o menu ao clicar em qualquer link.

### 2. Hero (`#inicio`)
- Fundo gradiente `linear-gradient(180deg,#F7F4F3 0%,#FFFFFF 100%)`, borda inferior `1px #EDE7E6`. Layout flex 2 colunas (texto `flex:1 1 440px`, imagem `flex:1 1 380px`), gap 48px, quebra em mobile. Padding vertical `clamp(48px,7vw,88px)` / `clamp(44px,6vw,72px)`.
- Badge pill: "Segurança patrimonial veicular" — 13px/700 uppercase, letter-spacing 1.2px, cor `#871619`, fundo `#F5E8E8`, raio 100px, ícone escudo 14px.
- H1: **"Proteção e rastreamento 24 horas para o seu veículo"** — Archivo 800, `clamp(32px,4.6vw,50px)`, line-height 1.12, cor `#33191B`.
- Subtítulo: "Monitoramento em tempo real, bloqueio remoto e equipe de pronta resposta para recuperação em caso de roubo ou furto. Carros, motos, caminhões, frotas e embarcações." — `clamp(17px,1.8vw,19px)`, lh 1.6, `#5C4C4D`, max-width 540px.
- CTAs: primário "Faça um orçamento" (verde `#17A05E`, 17px/700, padding 16px 28px, raio 8, ícone WhatsApp, **animação de pulso** — ver Animações); secundário "Rastrear meu veículo" (branco, borda 1.5px `#D2B6B7`, texto `#871619`, ícone alvo/GPS) → Área do Cliente.
- Coluna de imagem: **placeholder** com aspect-ratio 4/3, raio 12, borda tracejada 2px `#C4A9A9`, fundo listrado (`repeating-linear-gradient(135deg,#F3EFEE 0 14px,#EBE4E3 14px 28px)`), ícone pin e texto mono `[ IMAGEM: mapa com veículo monitorado ou foto da central de monitoramento ]`. Substituir por imagem real com `alt` descritivo.

### 3. Faixa de credibilidade (fundo `#871619`)
- Grid `repeat(auto-fit,minmax(220px,1fr))`, gap 28px, padding 34px 20px.
- 4 itens (ícone linear 30px stroke `#DFA6A7` + título Archivo 700 17px branco + descrição 14px `#EDCFCF`):
  1. **Monitoramento 24h/7** (com ponto verde `#7DE3A8` 8px pulsando — "ao vivo") — "Central ativa todos os dias, sem interrupção."
  2. **Cobertura nacional** — "Rastreamento em todo o território brasileiro."
  3. **Central própria** — "Estrutura e equipe de monitoramento próprias."
  4. **Pronta resposta** — "Equipe acionada imediatamente em caso de roubo ou furto."
- Sub-faixa separada por `1px rgba(255,255,255,0.14)` com métricas **placeholder** em mono 13px `#D9A0A1`: `[ X ] anos de mercado` · `[ X mil ] veículos monitorados` · `[ XX% ] de índice de recuperação`. Preencher com números reais; remover itens sem dado real.

### 4. Serviços (`#servicos`, fundo branco)
- Kicker "SERVIÇOS" (13px/700, uppercase, letter-spacing 1.6px, `#871619`), H2 centrado "Proteção sob medida para cada tipo de veículo" (Archivo 700, `clamp(26px,3.4vw,36px)`, `#33191B`), lead 17px `#5C4C4D`.
- Grid `repeat(auto-fit,minmax(250px,1fr))`, gap 22px. 4 cards: borda 1px `#E7DFDE`, raio 10, padding 30px 26px; hover: `box-shadow 0 10px 28px rgba(60,20,22,0.1)` + `translateY(-3px)` (transition .2s).
- Card = ícone linear 28px `#871619` em chip 52×52 raio 10 fundo `#F5E8E8` + H3 Archivo 700 20px + parágrafo 15px lh 1.6 + link "Saber mais →" (14px/700 `#871619`, hover `#6B1114`) abrindo WhatsApp com mensagem específica.
  - **Carros** — "Rastreamento em tempo real e bloqueio remoto para o seu carro. Tranquilidade no dia a dia e agilidade na recuperação."
  - **Motos** — "Proteção dedicada para motos, alvo frequente de furtos. Alertas imediatos e localização precisa a qualquer hora."
  - **Caminhões e Frotas** — "Gestão e segurança para frotas de qualquer porte: rotas, paradas, relatórios e proteção da carga em tempo real."
  - **Embarcações / Náutico** — "Monitoramento para lanchas, barcos e jet skis. Localização e segurança do seu patrimônio também na água."

### 5. Como Funciona (`#como-funciona`, fundo `#F7F4F3`, bordas top/bottom `#EDE7E6`)
- Kicker + H2 "Simples de contratar, eficaz na proteção". Grid `minmax(230px,1fr)`, 4 cards brancos (borda `#E7DFDE`, raio 10, padding 28px 24px) com número em círculo 40px fundo `#871619` texto branco Archivo 700:
  1. **Instalação do rastreador** — "Técnico especializado instala o equipamento no seu veículo de forma rápida e discreta."
  2. **Monitoramento contínuo** — "Acompanhe pelo aplicativo enquanto nossa central monitora seu veículo 24 horas por dia."
  3. **Alertas e bloqueio remoto** — "Receba alertas em tempo real e conte com o bloqueio remoto do veículo quando necessário."
  4. **Pronta resposta** — "Em caso de roubo ou furto, nossa equipe é acionada imediatamente para a recuperação."

### 6. A Empresa / Por que a NRSAT (`#empresa`, fundo branco)
- 2 colunas (texto + placeholder de foto 4/3 igual ao do hero, legenda `[ FOTO: equipe ou central de monitoramento NRSAT ]`).
- Kicker "POR QUE A NRSAT", H2 "Uma empresa dedicada à segurança do seu patrimônio", parágrafo institucional.
- Lista de 5 diferenciais com check verde (círculo `#EAF7F0`/`#CDEBDB`, check `#17A05E`): Central de monitoramento própria · Atendimento humano · Aplicativo próprio (Android e iOS) · Bloqueio remoto · Agilidade na recuperação (textos completos no HTML).

### 7. Aplicativo / Área do Cliente (`#app`, fundo escuro `#33191B`)
- 2 colunas: placeholder de smartphone (aspect-ratio 9/17, raio 28, borda tracejada `#8A5A59`, `[ CAPTURA DE TELA do app de rastreamento ]`) + texto.
- Kicker claro `#E0A9A8` "APLICATIVO E ÁREA DO CLIENTE", H2 branco "Seu veículo na palma da mão", parágrafo `#C79C9B`-tom claro.
- **Uma única entrada de login**: botão branco "Acessar Área do Cliente" (ícone cadeado, texto `#33191B`) → `areaClienteUrl`. *(Requisito do cliente: o site antigo confundia "sistema" e "sistema novo" — aqui existe apenas um acesso.)*
- Badges "App Store" / "Google Play" como placeholders (borda 1.5px `#6B4342`, hover borda clara) + nota mono `[ substituir pelos links reais das lojas ]`.

### 8. Depoimentos (`#depoimentos`, fundo `#F7F4F3`)
- Kicker + H2 "Quem confia na NRSAT". Grid `minmax(270px,1fr)`, 3 cards `<figure>` brancos com ícone de aspas, citação em itálico 15px e rodapé com avatar "?" (42px, fundo `#F5E8E8`, `#871619`).
- **Todo o conteúdo é placeholder** (`[ Depoimento real de cliente ... ]`, `[ Nome do cliente ]`, `[ Cidade · tipo de veículo ]`). Não publicar sem depoimentos reais.

### 9. CTA final (fundo `#871619`)
- Flex space-between: H2 branco Archivo 800 "Proteja seu veículo agora" + parágrafo 18px `#EDCFCF` "Faça um orçamento sem compromisso. Atendimento rápido e direto pelo WhatsApp." + botão verde grande "Fazer orçamento no WhatsApp" (18px/700, padding 18px 34px, **pulso contínuo**).

### 10. Rodapé (`#contato`, fundo `#24090A`)
- Grid `minmax(230px,1fr)`, gap 40px, 4 colunas:
  1. Logo invertido + descrição 14px `#B79B9C` + link **Instagram** (ícone correto de Instagram — nunca rotular como Twitter) → `instagramUrl`.
  2. **Contato** (ícones `#E0A9A8`): telefone/WhatsApp, e-mail, endereço, horário — todos placeholders mono a preencher.
  3. **Navegação**: âncoras internas, cor `#B79B9C`, hover branco.
  4. **Acesso rápido**: botão outline "Área do Cliente" + botão verde "Orçamento no WhatsApp".
- Barra final: `© 2026 NRSAT Tecnologia e Monitoramento. Todos os direitos reservados.` (13px `#9E8182`, borda top `rgba(255,255,255,0.1)`).

## Interactions & Behavior
- **WhatsApp** (todos com `target="_blank" rel="noopener"`), mensagens pré-preenchidas:
  - Geral/orçamento: `Olá! Gostaria de fazer um orçamento de rastreamento veicular.`
  - Carro: `Olá! Gostaria de um orçamento de rastreamento para meu carro.`
  - Moto: `Olá! Gostaria de um orçamento de rastreamento para minha moto.`
  - Frota: `Olá! Gostaria de um orçamento de rastreamento para caminhão/frota.`
  - Náutico: `Olá! Gostaria de um orçamento de rastreamento para embarcação.`
- Menu mobile: hambúrguer alterna painel; clicar em link fecha o menu; `aria-expanded` no botão.
- Hovers: links de nav mudam para `#871619`; cards de serviço elevam (`translateY(-3px)` + sombra); botões verdes escurecem para `#12854D`; botões outline ganham fundo suave.
- Navegação por âncoras com rolagem suave.

## Animações (ênfase em conversão)
Easing padrão `cubic-bezier(.2,.7,.3,1)`. Respeitar `prefers-reduced-motion: reduce` (desligar tudo).
- **Entrada do hero (ao carregar, uma vez):** fade + subida de 26px, escalonado — badge (.6s), H1 (.7s, delay .08s), subtítulo (.16s), CTAs (.24s); imagem em fade .9s (.25s).
- **Pulso nos CTAs de WhatsApp** (hero, delay 1.4s, e CTA final): anel expansivo em box-shadow `rgba(23,160,94,0.42) → 13px transparente`, ciclo ~3s, infinito.
- **Ponto "ao vivo"** no item Monitoramento 24h/7: anel `rgba(125,227,168,0.7) → 8px`, ciclo 2s.
- **Reveal ao rolar** (fade + subida .8s) em: cards de serviços, passos, depoimentos, itens da faixa de credibilidade, H2s e colunas das seções Empresa/App. No protótipo usa CSS `animation-timeline: view()` (Chrome/Edge); **em Angular recomenda-se IntersectionObserver** (diretiva `appRevealOnScroll` adicionando uma classe `.is-visible`) para suporte cross-browser, disparando com ~15% do elemento visível, uma única vez.

## State Management
- `menuOpen: boolean` + breakpoint ≤920px (fechar menu ao mudar de breakpoint).
- Configuração: `whatsappNumber`, `areaClienteUrl`, `instagramUrl` (hoje props do protótipo). Nenhum fetch de dados.

## Design Tokens
**Cores** (a cor principal `#871619` é a cor oficial do cliente — não alterar):
- Primária: `#871619` · hover/escuro `#6B1114` · heading/fundo escuro `#33191B` · rodapé `#24090A`
- CTA WhatsApp: `#17A05E` · hover `#12854D` · checks: `#17A05E` sobre `#EAF7F0`/borda `#CDEBDB` · dot "ao vivo" `#7DE3A8`
- Fundos claros: branco, `#F7F4F3` (seções alternadas), tints `#F5E8E8`, `#F9F2F2`
- Bordas: `#E9E3E2`, `#E7DFDE`, `#EDE7E6`, `#D9C2C2`, `#D2B6B7`
- Texto: corpo `#5C4C4D` · nav `#4C3E3F` · secundário `#71605F`, `#7E6A6B` · sobre vermelho `#EDCFCF`/`#DFA6A7`/`#D9A0A1` · sobre escuro `#B79B9C`/`#9E8182`
- Foco (a11y): outline 3px `#B03A3E` offset 2px · seleção `#F2DCDC`
**Tipografia:** Google Fonts — **Archivo** (500–800; títulos/números/wordmark) + **Source Sans 3** (400/600/700; corpo). Placeholders em `ui-monospace/Menlo`. Escala: H1 `clamp(32px,4.6vw,50px)` · H2 `clamp(26px,3.4vw,36px)` · H3 18–20px · corpo 15–17px · kickers 13px uppercase ls 1.6px.
**Raios:** botões 6–8 · cards 10 · imagens 12 · phone 28 · pill 100. **Sombras:** header `0 1px 8px rgba(60,20,22,0.06)` · card hover `0 10px 28px rgba(60,20,22,0.1)` · CTA verde `0 4px 14px rgba(23,160,94,0.32)`.
**Layout:** container 1180px, gutter 20px; grids `auto-fit/minmax` (sem media queries exceto o menu em 920px); alvos de toque ≥44px.

## Acessibilidade
- Contraste AA nos pares usados; foco visível global; `alt`/`aria-label` em imagens e botões de ícone; `aria-expanded` no hambúrguer; navegação 100% por teclado; `prefers-reduced-motion` respeitado; idioma `pt-BR`.
- **Português revisado** — atenção a erros históricos do site antigo ("Rastreameto", "Successo"): não introduzir typos ao portar textos.

## Assets
- Nenhuma imagem real incluída — todos os visuais são placeholders sinalizados (hero, foto da empresa, screenshot do app, badges das lojas). Ícones são SVGs inline simples (stroke ~1.8, estilo linear) — em Angular podem ser mantidos inline ou trocados por uma lib de line icons consistente.
- Fontes via Google Fonts (Archivo, Source Sans 3).

## Files
- `NRSAT Site Institucional.dc.html` — protótipo completo (abrir no navegador; requer `support.js` ao lado). Todo o markup/estilo é a referência canônica.
- `support.js` — runtime do protótipo (apenas para visualização; ignorar na implementação Angular).
