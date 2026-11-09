import { config } from '../config.js';

export function Authority() {
  const pillars = [
    {
      title: "Hablamos en claro, sin rodeos técnicos",
      problem: "El problema habitual: agencias que hablan en jerga informática confusa y entregan algo distinto a lo que pediste.",
      solution: "No necesitas saber de programación para trabajar con nosotros. Escuchamos cómo opera tu negocio, te proponemos una solución práctica y te explicamos cada avance en un lenguaje directo."
    },
    {
      title: "Trato directo con quien programa tu proyecto",
      problem: "El problema habitual: hablas con un vendedor comercial que promete todo y desaparece una vez firmado el presupuesto.",
      solution: "En ApexDigital tratas directamente con el ingeniero a cargo de diseñar y programar tu plataforma, desde la primera reunión hasta la puesta en marcha."
    },
    {
      title: "Plataformas rápidas, estables y bien construidas",
      problem: "El problema habitual: sitios lentos hechos con plantillas sobrecargadas que fallan al primer cambio.",
      solution: "Cuidamos la arquitectura técnica detrás de cada entrega: velocidad de carga en celulares, estructura optimizada para Google (SEO), seguridad y estabilidad operativa."
    }
  ];

  const pillarsHtml = pillars.map(p => `
    <div class="p-7 sm:p-8 bg-white border border-slate-300 rounded-xl shadow-[0_2px_10px_rgba(11,17,32,0.03)]">
      <h3 class="font-heading font-bold text-xl text-[#0B1120] mb-2">
        ${p.title}
      </h3>
      <p class="text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 px-3.5 py-2 rounded-md border border-slate-200 mb-3.5">
        ${p.problem}
      </p>
      <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
        ${p.solution}
      </p>
    </div>
  `).join('');

  return `
    <section id="enfoque" class="py-20 sm:py-28 bg-white border-b border-slate-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <!-- Columna Izquierda: Manifiesto Ejecutivo Oscuro (5 cols) -->
          <div class="lg:col-span-5 bg-executive-steel text-white p-8 sm:p-10 rounded-xl border border-slate-800 shadow-xl">
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Tecnología bien hecha, con compromiso real.
            </h2>

            <p class="mt-5 text-slate-200 text-base leading-relaxed">
              Sabemos que encargar una página web o un sistema suele generar dudas: proyectos que quedan a medias, plazos que no se cumplen o soporte que desaparece cuando más se necesita.
            </p>

            <p class="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed">
              Desde <strong class="text-white font-semibold">${config.brand.location}</strong> trabajamos con empresas de todo Chile bajo una regla simple: <strong class="text-white font-semibold">comprometer solo lo que podemos cumplir con excelencia</strong> y acompañar a cada cliente como su socio tecnológico de confianza.
            </p>

            <!-- Secuencia Real de Trabajo en 3 Pasos -->
            <div class="mt-8 pt-7 border-t border-slate-700/90 space-y-4">
              <h3 class="font-heading font-bold text-sm uppercase tracking-wider text-slate-200">
                Cómo trabajamos cada proyecto
              </h3>
              <ol class="space-y-3 text-sm text-slate-200">
                <li class="flex items-start gap-3">
                  <span class="font-heading font-bold text-white bg-slate-800 border border-slate-600 rounded px-2 py-0.5 text-xs shrink-0 mt-0.5 tabular-nums">Paso 1</span>
                  <span><strong class="text-white font-semibold">Diagnóstico claro:</strong> conversamos sobre tu necesidad y definimos alcances y plazos reales.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="font-heading font-bold text-white bg-slate-800 border border-slate-600 rounded px-2 py-0.5 text-xs shrink-0 mt-0.5 tabular-nums">Paso 2</span>
                  <span><strong class="text-white font-semibold">Desarrollo con avances:</strong> revisas el progreso de tu web o sistema antes de finalizar.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="font-heading font-bold text-white bg-slate-800 border border-slate-600 rounded px-2 py-0.5 text-xs shrink-0 mt-0.5 tabular-nums">Paso 3</span>
                  <span><strong class="text-white font-semibold">Publicación y marcha:</strong> dejamos todo operativo y te enseñamos a usarlo con facilidad.</span>
                </li>
              </ol>
            </div>
          </div>

          <!-- Columna Derecha: Estándares Comparativos (7 cols) -->
          <div class="lg:col-span-7 space-y-5">
            ${pillarsHtml}
          </div>

        </div>

      </div>
    </section>
  `;
}
