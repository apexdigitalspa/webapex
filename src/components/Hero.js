import { config } from '../config.js';

export function Hero() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, me gustaría evaluar el desarrollo de un proyecto de software, web o aplicación móvil para mi empresa.')}`;

  return `
    <section id="inicio" class="relative bg-executive-steel text-white py-20 sm:py-24 lg:py-28 border-b border-slate-800 overflow-hidden">
      <!-- Marca de agua arquitectónica muy sutil con la 'A' de circuitos oficial -->
      <img 
        src="/a-circuit.png" 
        alt="" 
        aria-hidden="true"
        class="pointer-events-none select-none absolute -right-20 -bottom-24 w-[480px] h-[480px] object-contain opacity-[0.04]"
      />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          <!-- Columna Izquierda: Propuesta de Valor Ejecutiva -->
          <div class="lg:col-span-7 space-y-7">
            
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-white/[0.06] border border-white/15 text-slate-200 text-xs font-semibold tracking-wider uppercase">
              <span class="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>Ingeniería de Software · Páginas Web · Apps Móviles</span>
            </div>

            <h1 class="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-[1.14]">
              Desarrollo de Software, Páginas Web y Apps Móviles a Medida.
            </h1>

            <p class="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              Transformamos requerimientos complejos en plataformas digitales rápidas, seguras y escalables. Desarrollamos páginas web corporativas, aplicaciones móviles independientes (Android / iOS) y sistemas de gestión adaptados a tu empresa.
            </p>

            <!-- Botones de Acción -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a 
                href="${whatsappUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg text-base font-semibold text-[#0F172A] bg-white hover:bg-slate-100 shadow-lg transition-all"
              >
                <span>Conversar con Ingeniería</span>
                <svg class="w-4 h-4 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>

              <a 
                href="#servicios" 
                class="inline-flex items-center justify-center px-7 py-4 rounded-lg text-base font-semibold text-white bg-white/[0.07] hover:bg-white/[0.12] border border-white/20 transition-all"
              >
                <span>Ver Catálogo de Soluciones</span>
              </a>
            </div>

            <!-- Pilares Rápidos en Portada -->
            <div class="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p class="font-heading font-bold text-white">Desarrollo a Medida</p>
                <p class="text-slate-400 text-xs mt-1 leading-relaxed">Proyectos diseñados según la lógica, etapa y objetivos de tu negocio.</p>
              </div>
              <div>
                <p class="font-heading font-bold text-white">Atención Sin Intermediarios</p>
                <p class="text-slate-400 text-xs mt-1 leading-relaxed">Trato directo con el equipo de ingeniería desde Puerto Montt a todo Chile.</p>
              </div>
              <div>
                <p class="font-heading font-bold text-white">Escalabilidad Técnica</p>
                <p class="text-slate-400 text-xs mt-1 leading-relaxed">Plataformas preparadas para crecer e integrarse con nuevos módulos a futuro.</p>
              </div>
            </div>

          </div>

          <!-- Columna Derecha: Presentación de Marca Oficial y Ficha Ejecutiva -->
          <div class="lg:col-span-5">
            <div class="bg-[#0F172A] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">
              
              <!-- Placa Metálica Oficial ApexDigital -->
              <div class="relative bg-[#1E293B] border-b border-slate-700/80">
                <img 
                  src="/brand-banner.jpg" 
                  alt="ApexDigital — Soluciones Digitales" 
                  class="w-full h-52 sm:h-60 object-cover object-center"
                />
              </div>

              <!-- Resumen de Capacidades Corporativas -->
              <div class="p-6 sm:p-7 space-y-4 bg-[#0F172A]">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Capacidades de Ingeniería</span>
                  <span class="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">Operación Activa</span>
                </div>

                <ul class="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li class="flex items-center justify-between">
                    <span class="text-slate-400">Sitios Web Corporativos &amp; SEO</span>
                    <span class="font-semibold text-white">Alta Velocidad</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span class="text-slate-400">Sistemas de Gestión &amp; Bases de Datos</span>
                    <span class="font-semibold text-white">Arquitectura Sólida</span>
                  </li>
                  <li class="flex items-center justify-between">
                    <span class="text-slate-400">Aplicaciones Móviles (Android / iOS)</span>
                    <span class="font-semibold text-white">Nativas o Integradas</span>
                  </li>
                </ul>

                <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Correo: <strong class="text-slate-200">${config.contact.email}</strong></span>
                  <span>${config.brand.location}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
