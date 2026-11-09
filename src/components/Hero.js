import { config } from '../config.js';

export function Hero() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, les escribo desde su web porque queremos evaluar un proyecto para nuestra empresa.')}`;

  return `
    <section id="inicio" class="relative bg-executive-steel text-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Composición Arquitectónica Asimétrica (7 columnas + 5 columnas) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          <!-- Columna Principal: Propuesta de Valor y Acción (7 cols) -->
          <div class="lg:col-span-7">
            <h1 class="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3.15rem] text-white tracking-tight leading-[1.13]">
              Ingeniería de software, páginas web y aplicaciones móviles para empresas en Chile.
            </h1>

            <p class="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              Desde <strong class="text-white font-semibold">${config.brand.location}</strong>, diseñamos y programamos plataformas digitales sobrias, rápidas y hechas a la medida de tu operación: desde tu sitio web corporativo hasta sistemas internos de gestión y apps para Android e&nbsp;iOS.
            </p>

            <!-- Botones de Acción -->
            <div class="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="${whatsappUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg text-base font-semibold text-[#0B1120] bg-white hover:bg-slate-100 shadow-lg transition-all"
              >
                <span>Conversar proyecto por WhatsApp</span>
                <svg class="w-4 h-4 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>

              <a 
                href="#servicios" 
                class="inline-flex items-center justify-center px-7 py-4 rounded-lg text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-600 transition-all"
              >
                <span>Revisar catálogo técnico</span>
              </a>
            </div>
          </div>

          <!-- Columna Derecha: Ficha Arquitectónica de Capacidades (5 cols) -->
          <div class="lg:col-span-5">
            <div class="rounded-xl bg-[#0F172A] border border-slate-700/90 shadow-2xl overflow-hidden">
              
              <!-- Cabecera de la Ficha con Sello Oficial AD -->
              <div class="px-6 py-5 bg-[#131F36] border-b border-slate-700/90 flex items-center justify-between gap-4">
                <div>
                  <h2 class="font-heading font-bold text-base sm:text-lg text-white leading-snug">
                    Áreas de Desarrollo y Alcance
                  </h2>
                  <p class="text-xs text-slate-300 mt-0.5">
                    Soluciones programadas a medida · Cobertura nacional
                  </p>
                </div>
                <img src="/favicon-ad.png" alt="Sello AD" class="w-10 h-10 object-contain shrink-0" />
              </div>

              <!-- Filas de Especificación Técnica -->
              <div class="divide-y divide-slate-800 text-sm">
                <div class="px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <p class="font-semibold text-white">Sitios Corporativos &amp; Ventas</p>
                    <p class="text-xs text-slate-300 mt-0.5">Presencia comercial, SEO en Google y contacto directo</p>
                  </div>
                  <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 shrink-0">Web &amp; SEO</span>
                </div>

                <div class="px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <p class="font-semibold text-white">Sistemas de Gestión e Intranets</p>
                    <p class="text-xs text-slate-300 mt-0.5">Bodega, inventario, clientes, órdenes y reportes PDF</p>
                  </div>
                  <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 shrink-0">Software</span>
                </div>

                <div class="px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <p class="font-semibold text-white">Apps Móviles Android &amp; iOS</p>
                    <p class="text-xs text-slate-300 mt-0.5">100% independientes o sincronizadas con tu sitio web</p>
                  </div>
                  <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 shrink-0">Móvil</span>
                </div>

                <div class="px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <p class="font-semibold text-white">Pagos y Reservas en Línea</p>
                    <p class="text-xs text-slate-300 mt-0.5">Integración con Webpay Plus, Flow y agendas automáticas</p>
                  </div>
                  <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 shrink-0">Pagos 24/7</span>
                </div>
              </div>

              <!-- Pie de Ficha -->
              <div class="px-6 py-3.5 bg-[#090E1A] border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span>Atención directa de ingeniería</span>
                <span class="font-semibold text-white">${config.brand.location}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
