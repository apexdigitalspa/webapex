import { config } from '../config.js';

export function Authority() {
  const principles = [
    {
      code: "CRITERIO 01",
      title: "Enfoque de Ingeniería Informática Real",
      description: "A diferencia de las agencias tradicionales que ensamblan plantillas prefabricadas lentas y vulnerables, en ApexDigital diseñamos software desde sus cimientos. Analizamos la lógica de tu negocio para construir plataformas robustas, seguras y libres de código basura."
    },
    {
      code: "CRITERIO 02",
      title: "Código Limpio, Mantenible y Documentado",
      description: "Escribimos código bajo estándares internacionales de la industria. Esto garantiza que tu plataforma sea fácil de mantener, auditar o escalar en el futuro, entregándote un activo tecnológico duradero y no un problema técnico a mediano plazo."
    },
    {
      code: "CRITERIO 03",
      title: "Rendimiento Optimizado (Core Web Vitals)",
      description: "En el entorno B2B, la lentitud destruye la credibilidad. Optimizamos cada consulta, imagen y línea de ejecución para que tu sitio o sistema cargue en fracciones de segundo tanto en fibra óptica de oficina como en conexiones móviles en terreno."
    },
    {
      code: "CRITERIO 04",
      title: "Atención Directa con quien Construye tu Sistema",
      description: "Eliminamos la burocracia de los ejecutivos de cuentas que prometen lo que no conocen técnicamente. Te comunicas de forma directa con el ingeniero responsable de tu arquitectura, logrando respuestas precisas, plazos realistas y total transparencia."
    }
  ];

  const principlesHtml = principles.map(p => `
    <div class="p-7 sm:p-8 bg-[#0F1523] border border-white/[0.08] hover:border-sky-400/30 transition-colors reveal-up">
      <div class="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-semibold mb-2">
        ${p.code}
      </div>
      <h3 class="font-heading font-bold text-lg text-white mb-3">
        ${p.title}
      </h3>
      <p class="text-sm text-slate-300/90 leading-relaxed">
        ${p.description}
      </p>
    </div>
  `).join('');

  return `
    <section id="enfoque" class="py-24 lg:py-32 border-b border-white/[0.08] bg-[#090D16]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          <!-- Columna Izquierda: Carta Ejecutiva / Visión -->
          <div class="lg:col-span-5 reveal-up space-y-6">
            <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-sky-400">
              <span>02 // ENFOQUE &amp; COMPROMISO TÉCNICO</span>
            </div>

            <h2 class="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Por qué las empresas confían su infraestructura digital a ApexDigital
            </h2>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
              Sabemos que contratar desarrollo de software suele generar incertidumbre: plazos que se extienden, costos ocultos o sistemas que quedan obsoletos al poco tiempo de entregarse.
            </p>

            <p class="text-sm text-slate-400 leading-relaxed">
              Fundamos <strong class="text-white font-semibold">${config.brand.name}</strong> en <strong class="text-slate-200 font-medium">${config.brand.location}</strong> con una premisa clara: llevar el estándar de la ingeniería de software corporativa a empresas chilenas que valoran la seriedad, el orden técnico y el cumplimiento estricto de los acuerdos.
            </p>

            <!-- Cuadro de Comparativa Ejecutiva -->
            <div class="p-6 rounded-lg bg-[#0F1523] border border-white/[0.08] space-y-4 mt-4">
              <div class="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span class="text-xs font-mono uppercase tracking-wider text-white font-semibold">Garantías de Trabajo</span>
                <span class="text-xs font-mono text-emerald-400">Estándar Activo</span>
              </div>
              <ul class="space-y-2.5 text-xs text-slate-300">
                <li class="flex items-center justify-between">
                  <span class="text-slate-400">Entrega de código fuente y accesos</span>
                  <span class="font-mono text-white font-medium">100% Propiedad Cliente</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-slate-400">Dependencia de plantillas pagadas</span>
                  <span class="font-mono text-white font-medium">Ninguna (0%)</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-slate-400">Canal de soporte post-lanzamiento</span>
                  <span class="font-mono text-sky-400 font-medium">Directo con Ingeniería</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Columna Derecha: Grilla Arquitectónica de 4 Criterios -->
          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            ${principlesHtml}
          </div>

        </div>

      </div>
    </section>
  `;
}
