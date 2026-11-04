import { config } from '../config.js';
import { ApexLogoMark } from './Navbar.js';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, me comunico desde su sitio web para consultar por un proyecto.')}`;

  return `
    <!-- Sección de Contacto Directo Estilizada y Limpia -->
    <section id="contacto" class="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <!-- Texto de Invitación -->
          <div class="lg:col-span-5 space-y-4">
            <p class="text-xs font-bold uppercase tracking-widest text-[#1E3A5F]">
              Contacto Directo
            </p>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-tight">
              ¿Conversamos sobre tu proyecto?
            </h2>
            <p class="text-slate-600 text-base leading-relaxed">
              Escríbenos directamente por WhatsApp o correo electrónico. Revisaremos tu idea o requerimiento y te daremos una respuesta clara, honesta y sin compromiso.
            </p>
            <p class="text-sm text-slate-500 pt-1">
              Base operativa en <strong class="text-slate-800 font-semibold">${config.brand.location}</strong> · Atención remota a todo Chile.
            </p>
          </div>

          <!-- Tarjetas de Canales Directos -->
          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <!-- Tarjeta WhatsApp -->
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="executive-card p-7 sm:p-8 flex flex-col justify-between bg-white group"
            >
              <div>
                <div class="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                  </svg>
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Respuesta rápida</span>
                <h3 class="font-heading font-bold text-xl text-[#0F172A] mt-1">WhatsApp Directo</h3>
                <p class="text-slate-600 text-sm mt-2 leading-relaxed">
                  Ideal para consultas rápidas, contarnos tu idea o coordinar una llamada.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#0F172A] group-hover:text-emerald-600 transition-colors">
                <span>${config.contact.whatsappDisplay}</span>
                <span>Escribir &rarr;</span>
              </div>
            </a>

            <!-- Tarjeta Correo Electrónico -->
            <a 
              href="mailto:${config.contact.email}" 
              class="executive-card p-7 sm:p-8 flex flex-col justify-between bg-white group"
            >
              <div>
                <div class="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#1E3A5F] mb-6 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Requerimientos formales</span>
                <h3 class="font-heading font-bold text-xl text-[#0F172A] mt-1">Correo Corporativo</h3>
                <p class="text-slate-600 text-sm mt-2 leading-relaxed">
                  Envíanos documentos, detalles técnicos o solicitudes de presupuesto formal.
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#0F172A] group-hover:text-[#1E3A5F] transition-colors">
                <span>${config.contact.email}</span>
                <span>Enviar correo &rarr;</span>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>

    <!-- Pie de Página Oficial (Footer) -->
    <footer class="bg-[#0B1120] text-slate-400 pt-14 pb-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80">
          
          <!-- Identidad de Marca -->
          <div class="md:col-span-5 space-y-3">
            <div class="flex items-center gap-3.5">
              ${ApexLogoMark("w-11 h-11")}
              <div>
                <div class="font-heading font-extrabold text-xl text-white leading-none">
                  APEXDIGITAL
                </div>
                <span class="text-[10px] tracking-[0.22em] text-slate-400 font-semibold uppercase block mt-1">
                  Soluciones Digitales
                </span>
              </div>
            </div>
            <p class="text-sm text-slate-400 max-w-sm leading-relaxed pt-1">
              Ingeniería de software, páginas web corporativas y aplicaciones móviles a medida para empresas en Chile.
            </p>
          </div>

          <!-- Navegación -->
          <div class="md:col-span-3 space-y-2.5">
            <h4 class="text-xs font-bold uppercase tracking-wider text-white">Navegación</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#inicio" class="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" class="hover:text-white transition-colors">Catálogo de Soluciones</a></li>
              <li><a href="#enfoque" class="hover:text-white transition-colors">Enfoque Técnico</a></li>
              <li><a href="#contacto" class="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <!-- Datos Oficiales -->
          <div class="md:col-span-4 space-y-2.5">
            <h4 class="text-xs font-bold uppercase tracking-wider text-white">Contacto Oficial</h4>
            <ul class="space-y-2 text-sm">
              <li>WhatsApp: <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:text-white font-medium">${config.contact.whatsappDisplay}</a></li>
              <li>Correo: <a href="mailto:${config.contact.email}" class="text-slate-200 hover:text-white font-medium">${config.contact.email}</a></li>
              <li>Ubicación: <span class="text-slate-200 font-medium">${config.brand.location}</span></li>
            </ul>
          </div>

        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; ${currentYear} <strong class="text-slate-300 font-medium">ApexDigital.cl</strong>. Todos los derechos reservados.</p>
          <p>${config.brand.location} · Desarrollo de Software &amp; Apps Móviles</p>
        </div>
      </div>
    </footer>

    <!-- BOTÓN FLOTANTE DE WHATSAPP VISTOSO Y EJECUTIVO -->
    <a 
      href="${whatsappUrl}" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      class="whatsapp-float-btn fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-[#16A34A] to-[#15803D] hover:from-[#22C55E] hover:to-[#16A34A] text-white pl-3.5 pr-5 py-3 rounded-full border border-white/25"
    >
      <div class="relative flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#15803D] shadow-sm shrink-0">
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
        </svg>
        <span class="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#15803D]"></span>
      </div>
      <div class="flex flex-col text-left leading-tight">
        <span class="text-[10px] uppercase tracking-wider text-emerald-100 font-semibold">Atención Directa</span>
        <span class="text-sm font-bold text-white">Hablar por WhatsApp</span>
      </div>
    </a>
  `;
}
