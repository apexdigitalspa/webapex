import { config } from '../config.js';

export function Hero() {
  return `
    <section class="hero-section" id="inicio">
      <div class="glow-spot" style="top: -10%; left: -10%;"></div>
      <div class="container hero-grid">
        <div class="hero-content animate-fade-in">
          <div class="hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.4rem; display: inline-block; vertical-align: middle;">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Ingeniería de Software & Soluciones Web
          </div>
          <h1 class="hero-title" style="letter-spacing: -0.04em; font-weight: 800;">
            Sitios Web a Medida con <br>
            <span class="text-gradient">Arquitectura de Ingeniería</span>
          </h1>
          <p class="hero-description" style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 2.5rem;">
            En <strong>${config.brand.name}</strong> desarrollamos software y páginas web optimizadas para el mercado chileno. Diseñamos con código limpio, modular y preparado para escalar sin límites, asegurando alta velocidad y conversión.
          </p>
          <div class="hero-actions">
            <a href="#planificador" class="btn btn-primary">Planificar mi Proyecto</a>
            <a href="#soluciones" class="btn btn-secondary">Ver Servicios</a>
          </div>
        </div>
        
        <!-- Editor de Código de Alta Fidelidad (Identidad de Ingeniería Real) -->
        <div class="hero-visual animate-fade-in" style="animation-delay: 0.2s;">
          <div class="visual-glow"></div>
          <div class="mockup-window glass" style="height: auto; min-height: 320px; max-width: 480px; text-align: left; font-family: monospace;">
            <div class="mockup-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
              <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: auto; font-family: var(--font-body); font-weight: 500;">checkout.js</span>
            </div>
            <div class="mockup-body" style="padding: 1.2rem; font-size: 0.82rem; line-height: 1.5; color: #a5b4fc; background: #0b0f17; overflow-x: auto;">
              <div style="color: #6366f1;"><span style="color: #f43f5e;">import</span> { WebpayPlus } <span style="color: #f43f5e;">from</span> <span style="color: #10b981;">'transbank-sdk'</span>;</div>
              <br>
              <div style="color: #94a3b8;">// Integración de Pagos Chile</div>
              <div style="color: #6366f1;"><span style="color: #f43f5e;">async function</span> <span style="color: #60a5fa;">iniciarPago</span>(buyOrder, amount) {</div>
              <div style="color: #cbd5e1; padding-left: 1.2rem;">
                <span style="color: #f43f5e;">const</span> token = <span style="color: #f43f5e;">await</span> WebpayPlus.Transaction.<span style="color: #60a5fa;">create</span>({
              </div>
              <div style="color: #38bdf8; padding-left: 2.2rem;">
                buyOrder: buyOrder,
              </div>
              <div style="color: #38bdf8; padding-left: 2.2rem;">
                sessionId: <span style="color: #10b981;">"session_apex_91"</span>,
              </div>
              <div style="color: #38bdf8; padding-left: 2.2rem;">
                amount: amount,
              </div>
              <div style="color: #38bdf8; padding-left: 2.2rem;">
                returnUrl: <span style="color: #10b981;">"https://apexdigital.cl/retorno"</span>
              </div>
              <div style="color: #cbd5e1; padding-left: 1.2rem;">
                });
              </div>
              <div style="color: #f43f5e; padding-left: 1.2rem;">return</span> token;
              <div style="color: #6366f1;">}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
