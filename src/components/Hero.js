import { config } from '../config.js';

export function Hero() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, les escribo desde su web porque queremos evaluar un proyecto para nuestra empresa.')}`;

  return `
    <section id="inicio" class="relative bg-executive-steel text-white py-20 sm:py-28 lg:py-32 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="max-w-3xl">
          <!-- Título directo, balanceado y sin kicker en mayúsculas encima -->
          <h1 class="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-[1.15]">
            Desarrollamos páginas web, sistemas de gestión y apps móviles para empresas en Chile.
          </h1>

          <!-- Subtítulo humano con alto contraste -->
          <p class="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
            Desde ${config.brand.location}, ayudamos a negocios y organizaciones de todo el país a profesionalizar su presencia comercial en internet, ordenar su operación diaria con software a medida y llevar sus servicios al teléfono de sus clientes.
          </p>

          <!-- Botones de Acción -->
          <div class="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg text-base font-semibold text-[#0F172A] bg-white hover:bg-slate-100 shadow-md transition-all"
            >
              <span>Conversar un proyecto por WhatsApp</span>
              <svg class="w-4 h-4 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>

            <a 
              href="#servicios" 
              class="inline-flex items-center justify-center px-7 py-4 rounded-lg text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/25 transition-all"
            >
              <span>Ver catálogo de soluciones</span>
            </a>
          </div>
        </div>

        <!-- Franja inferior sobria con contraste WCAG AA -->
        <div class="mt-16 pt-8 border-t border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm text-slate-200">
          <div class="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span><strong class="text-white font-semibold">Webs Corporativas:</strong> presencia comercial y Google SEO</span>
            <span class="hidden sm:inline text-slate-400">·</span>
            <span><strong class="text-white font-semibold">Sistemas a Medida:</strong> inventario, clientes, reservas y reportes</span>
            <span class="hidden sm:inline text-slate-400">·</span>
            <span><strong class="text-white font-semibold">Apps Móviles:</strong> Android y iOS independientes o sincronizadas</span>
          </div>
        </div>

      </div>
    </section>
  `;
}
