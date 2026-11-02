import { config } from '../config.js';

export function Authority() {
  const pillars = [
    {
      num: "01",
      title: "Enfoque de Ingeniería Informática Real",
      desc: "No dependemos de constructores visuales pesados ni plantillas genéricas. Diseñamos arquitecturas de software sólidas, mantenibles y documentadas que responden a la lógica real de tu negocio."
    },
    {
      num: "02",
      title: "Código Limpio y Seguridad por Diseño",
      desc: "Escribimos código modular y estandarizado, aplicando buenas prácticas de sanitización de entradas, protección de rutas, certificados SSL/TLS y resguardo de bases de datos empresariales."
    },
    {
      num: "03",
      title: "Rendimiento Optimizado (Core Web Vitals)",
      desc: "Cada milisegundo impacta en tus ventas. Optimizamos la carga de activos, tiempos de respuesta del servidor e indexación técnica en Google para lograr puntuaciones sobresalientes."
    },
    {
      num: "04",
      title: "Atención Directa sin Intermediarios",
      desc: "Tratas directamente con el ingeniero a cargo de tu arquitectura. Esto elimina teléfonos descompuestos, acelera los tiempos de entrega y garantiza una asesoría técnica honesta y precisa."
    }
  ];

  const pillarsHtml = pillars.map(p => `
    <div class="apex-glass-card rounded-2xl p-7 border border-white/[0.08] reveal-up">
      <div class="flex items-start gap-4">
        <span class="font-mono text-sm font-bold px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-400/20 shrink-0">
          ${p.num}
        </span>
        <div>
          <h3 class="font-heading font-bold text-lg text-white mb-2">
            ${p.title}
          </h3>
          <p class="text-sm text-slate-300/85 leading-relaxed">
            ${p.desc}
          </p>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section id="enfoque" class="py-24 lg:py-32 relative border-t border-white/[0.06] bg-[#080C14]/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <!-- Columna Izquierda: Manifiesto Técnico y Autoridad -->
          <div class="lg:col-span-5 reveal-up lg:sticky lg:top-28">
            <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3">
              <span>// Por qué elegir ApexDigital</span>
            </div>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Rigor de Ingeniería Aplicado a tus Objetivos Comerciales
            </h2>
            <p class="mt-5 text-slate-300/90 text-base leading-relaxed">
              En <strong class="text-white font-semibold">${config.brand.name}</strong> entendemos que un sitio o sistema corporativo no es un gasto decorativo, sino un activo de infraestructura crítica para tu empresa.
            </p>
            <p class="mt-4 text-slate-400 text-sm leading-relaxed">
              Desde <strong class="text-slate-200">${config.brand.location}</strong> trabajamos junto a empresas y organizaciones de todo el país, entregando soluciones llave en mano listas para operar y escalar sin fricciones técnicas.
            </p>

            <!-- Tarjeta de Garantía Técnica -->
            <div class="mt-8 p-5 rounded-xl bg-gradient-to-r from-sky-500/10 via-blue-600/5 to-transparent border border-sky-400/20">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-300 shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-heading font-bold text-white">Propiedad Total del Código y Dominio</h4>
                  <p class="text-xs text-slate-400 mt-0.5">Entregamos repositorios limpios y configuraciones transparentes sin ataduras ocultas.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Los 4 Pilares -->
          <div class="lg:col-span-7 grid grid-cols-1 gap-5">
            ${pillarsHtml}
          </div>

        </div>

      </div>
    </section>
  `;
}
