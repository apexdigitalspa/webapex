export function Process() {
  return `
    <section class="process-section" id="proceso">
      <div class="container">
        <div class="section-header animate-fade-in" style="max-width: 600px; margin-bottom: 3rem;">
          <span class="section-tag" style="color: var(--primary-color);">METODOLOGÍA</span>
          <h2 class="section-title" style="font-size: clamp(2.3rem, 5vw, 3rem); font-weight: 800; letter-spacing: -0.04em;">
            Cómo Construimos tu Proyecto
          </h2>
          <p class="section-subtitle" style="font-size: 1.05rem; line-height: 1.6; color: var(--text-muted); margin-top: 1rem;">
            Abordamos cada desarrollo mediante fases estructuradas para garantizar un resultado profesional, transparente y sin sorpresas.
          </p>
        </div>

        <div class="process-grid">
          <!-- Paso 1 -->
          <div class="process-card animate-fade-in">
            <div class="process-step">01</div>
            <h3 class="process-title">Diagnóstico</h3>
            <p class="process-desc">
              Analizamos los objetivos comerciales de tu marca, las necesidades de tus clientes y definimos los requerimientos técnicos del sitio.
            </p>
          </div>

          <!-- Paso 2 -->
          <div class="process-card animate-fade-in" style="animation-delay: 0.1s;">
            <div class="process-step">02</div>
            <h3 class="process-title">Diseño & Estructura</h3>
            <p class="process-desc">
              Creamos la propuesta visual e intuitiva del sitio. Definimos la experiencia de usuario antes de escribir una sola línea de código.
            </p>
          </div>

          <!-- Paso 3 -->
          <div class="process-card animate-fade-in" style="animation-delay: 0.2s;">
            <div class="process-step">03</div>
            <h3 class="process-title">Código e Ingeniería</h3>
            <p class="process-desc">
              Programamos el sitio web a medida con código optimizado, limpio, veloz (SEO) y adaptabilidad responsiva para celulares.
            </p>
          </div>

          <!-- Paso 4 -->
          <div class="process-card animate-fade-in" style="animation-delay: 0.3s;">
            <div class="process-step">04</div>
            <h3 class="process-title">Lanzamiento</h3>
            <p class="process-desc">
              Configuramos el hosting gratuito, vinculamos tu dominio .cl, hacemos las pruebas de seguridad y te entregamos el sitio listo para vender.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
