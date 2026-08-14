import { config } from '../config.js';

function getServiceIcon(id) {
  const size = 28;
  const strokeWidth = 1.8;
  switch (id) {
    case 'landing':
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      `;
    case 'corporate':
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      `;
    case 'ecommerce':
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      `;
    case 'custom':
      default:
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="15" x2="23" y2="15"></line>
        </svg>
      `;
  }
}

export function Services() {
  const serviceCards = config.services.map(service => `
    <div class="service-card ${service.id} glass animate-fade-in">
      <div>
        <div class="service-icon">${getServiceIcon(service.id)}</div>
        <h3 class="service-title">${service.title}</h3>
      </div>
      <p class="service-desc">${service.description}</p>
    </div>
  `).join('');

  return `
    <section id="soluciones">
      <div class="glow-spot" style="bottom: 10%; right: -10%;"></div>
      <div class="container">
        <div class="section-header animate-fade-in" style="text-align: left; max-width: 700px; margin-bottom: 6rem;">
          <span class="section-tag" style="font-weight: 600; font-size: 0.85rem; letter-spacing: 0.05em; color: var(--primary-color);">SERVICIOS</span>
          <h2 class="section-title" style="font-size: clamp(2.5rem, 5vw, 3.2rem); font-weight: 800; letter-spacing: -0.04em; margin-top: 0.5rem; margin-bottom: 1.5rem;">
            Desarrollo Web & <br>Arquitectura de Software
          </h2>
          <p class="section-subtitle" style="font-size: 1.1rem; line-height: 1.7; margin: 0;">
            Creamos soluciones sólidas a nivel de código y experiencia de usuario para impulsar tu presencia digital y automatizar tus procesos comerciales.
          </p>
        </div>

        <div class="services-grid">
          ${serviceCards}
        </div>
      </div>
    </section>

    <section class="engineering-section" id="sello" style="padding: 8rem 0; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
      <div class="container engineering-grid" style="gap: 5rem;">
        <div class="animate-fade-in">
          <span class="section-tag" style="font-weight: 600; font-size: 0.85rem; letter-spacing: 0.05em; color: var(--primary-color); margin-bottom: 0.5rem; display: block;">METODOLOGÍA</span>
          <h2 class="section-title" style="font-size: clamp(2rem, 4vw, 2.6rem); font-weight: 800; letter-spacing: -0.03em; margin-bottom: 1.5rem;">
            Desarrollo de Software Riguroso
          </h2>
          <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7; margin-bottom: 3.5rem;">
            No usamos constructores visuales lentos ni plantillas prefabricadas sobrecargadas. Abordamos cada proyecto con el rigor de la ingeniería, garantizando código limpio, velocidad de carga óptima, seguridad y modularidad.
          </p>
          
          <ul class="engineering-list" style="display: flex; flex-direction: column; gap: 2.5rem; list-style: none; padding: 0;">
            <li class="engineering-item" style="display: flex; gap: 2rem; align-items: start;">
              <div style="font-family: var(--font-heading); font-size: 2.2rem; font-weight: 800; color: var(--primary-color); opacity: 0.8; line-height: 1; min-width: 45px;">01</div>
              <div class="eng-text">
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.4rem; letter-spacing: -0.02em;">Código Optimizado (Performance)</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">Nuestros sitios logran tiempos de carga óptimos, lo que mejora la experiencia de usuario y te posiciona mejor en Google.</p>
              </div>
            </li>
            <li class="engineering-item" style="display: flex; gap: 2rem; align-items: start;">
              <div style="font-family: var(--font-heading); font-size: 2.2rem; font-weight: 800; color: var(--primary-color); opacity: 0.8; line-height: 1; min-width: 45px;">02</div>
              <div class="eng-text">
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.4rem; letter-spacing: -0.02em;">Seguridad & Buenas Prácticas</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">Implementamos configuraciones de seguridad robustas para proteger tus formularios, bases de datos y la privacidad de tus usuarios.</p>
              </div>
            </li>
            <li class="engineering-item" style="display: flex; gap: 2rem; align-items: start;">
              <div style="font-family: var(--font-heading); font-size: 2.2rem; font-weight: 800; color: var(--primary-color); opacity: 0.8; line-height: 1; min-width: 45px;">03</div>
              <div class="eng-text">
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.4rem; letter-spacing: -0.02em;">Arquitectura Modular</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">Diseñamos tu sitio en módulos independientes. Si a futuro quieres agregar un carro de compras o un sistema de reservas, no habrá que rehacer la web desde cero.</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="tech-stack-container animate-fade-in" style="animation-delay: 0.2s; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 3rem 2.5rem;">
          <h3 style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 1rem;">Tecnologías de Producción</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 2.5rem;">
            Utilizamos tecnologías modernas que aseguran un desarrollo ágil y resultados de nivel profesional:
          </p>
          
          <div class="tech-tag-group" style="gap: 0.6rem;">
            <span class="tech-tag" style="border-radius: 4px; padding: 0.6rem 1rem;">HTML5 / Semantic CSS3</span>
            <span class="tech-tag" style="border-radius: 4px; padding: 0.6rem 1rem;">JavaScript ES6+</span>
            <span class="tech-tag" style="border-radius: 4px; padding: 0.6rem 1rem;">React.js</span>
            <span class="tech-tag" style="border-radius: 4px; padding: 0.6rem 1rem;">Vite</span>
            <span class="tech-tag" style="border-radius: 4px; padding: 0.6rem 1rem;">Node.js</span>
            <span class="tech-tag" style="border-radius: 4px; padding: 0.6rem 1rem;">MySQL / PostgreSQL</span>
            <span class="tech-tag" style="border-radius: 4px; padding: 0.6rem 1rem;">Git / GitHub</span>
            <span class="tech-tag" style="border-radius: 4px; padding: 0.6rem 1rem;">REST APIs</span>
            <span class="tech-tag" style="border-radius: 4px; padding: 0.6rem 1rem;">Webpay & Flow Integrations</span>
            <span class="tech-tag" style="border-radius: 4px; padding: 0.6rem 1rem;">SEO Optimization</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
