import { config } from '../config.js';

export function Hero() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, me gustaría conversar sobre un proyecto web / software para mi empresa.')}`;

  return `
    <section id="inicio" class="py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-3xl">
          <!-- Etiqueta Sobria -->
          <p class="text-xs font-semibold uppercase tracking-widest text-sky-700 mb-4">
            Ingeniería de Software &amp; Desarrollo Web · ${config.brand.location}
          </p>

          <!-- Título Principal -->
          <h1 class="font-heading font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-[1.15]">
            Desarrollo de Software y Páginas Web a Medida para Empresas.
          </h1>

          <!-- Subtítulo -->
          <p class="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Transformamos requerimientos complejos en plataformas digitales rápidas, seguras y escalables para potenciar negocios en Chile.
          </p>

          <!-- Botones de Acción Simples y Directos -->
          <div class="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors"
            >
              <span>Conversar por WhatsApp</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>

            <a 
              href="#servicios" 
              class="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <span>Ver Soluciones</span>
            </a>
          </div>

          <!-- Resumen claro y humano de cómo trabajamos -->
          <div class="mt-14 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p class="font-semibold text-slate-900">Trato directo y cercano</p>
              <p class="text-slate-500 mt-1">Hablas directamente con el ingeniero a cargo de tu proyecto, sin intermediarios.</p>
            </div>
            <div>
              <p class="font-semibold text-slate-900">Trabajo bien hecho</p>
              <p class="text-slate-500 mt-1">Sitios rápidos, seguros y programados a medida según lo que tu negocio necesita.</p>
            </div>
            <div>
              <p class="font-semibold text-slate-900">Propiedad total</p>
              <p class="text-slate-500 mt-1">Entregamos el sistema funcionando junto con todos tus accesos y dominio propio.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
