import { config } from '../config.js';
import { ApexLogoMark } from './Navbar.js';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, me comunico desde su sitio web para evaluar un proyecto empresarial.')}`;

  return `
    <!-- Sección de Contacto Ejecutivo Directo -->
    <section id="contacto" class="py-24 lg:py-28 bg-[#0B0F19]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="executive-panel rounded-lg p-8 sm:p-12 lg:p-14 reveal-up">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div class="lg:col-span-7 space-y-4">
              <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-sky-400">
                <span>03 // INICIAR CONVERSACIÓN</span>
              </div>
              <h2 class="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                ¿Tienes un proyecto o requerimiento técnico en mente?
              </h2>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Escríbenos directamente para agendar una breve reunión de diagnóstico o enviarnos los detalles de tu iniciativa. Te responderemos con una propuesta técnica clara, honesta y ajustada a los objetivos de tu empresa.
              </p>
            </div>

            <div class="lg:col-span-5 flex flex-col gap-3.5">
              <a 
                href="${whatsappUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-executive-primary w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-md text-sm font-semibold tracking-wide"
              >
                <span>Contactar por WhatsApp (${config.contact.whatsappDisplay})</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>

              <a 
                href="mailto:${config.contact.email}" 
                class="btn-executive-secondary w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md text-sm font-medium"
              >
                <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>Enviar correo a ${config.contact.email}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- Pie de Página Corporativo (Footer) -->
    <footer class="bg-[#070A11] border-t border-white/[0.08] pt-16 pb-12 text-slate-400">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          <!-- Identidad Corporativa -->
          <div class="md:col-span-5 space-y-4">
            <a href="#" class="inline-flex items-center gap-3.5 focus:outline-none">
              ${ApexLogoMark("w-10 h-10")}
              <div class="flex flex-col">
                <div class="flex items-baseline tracking-tight font-heading font-extrabold text-xl leading-none">
                  <span class="text-white">APEX</span>
                  <span class="text-sky-400">DIGITAL</span>
                </div>
                <span class="text-[9px] tracking-[0.24em] text-slate-400 font-medium mt-1 uppercase">
                  Soluciones Digitales
                </span>
              </div>
            </a>
            <p class="text-sm text-slate-400 max-w-sm leading-relaxed">
              ${config.brand.description}
            </p>
          </div>

          <!-- Navegación -->
          <div class="md:col-span-3 space-y-3">
            <h4 class="font-mono text-xs uppercase tracking-widest text-white font-semibold">
              Navegación
            </h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="#inicio" class="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" class="hover:text-white transition-colors">Servicios Modulares</a></li>
              <li><a href="#enfoque" class="hover:text-white transition-colors">Enfoque Técnico</a></li>
              <li><a href="#contacto" class="hover:text-white transition-colors">Contacto Directo</a></li>
            </ul>
          </div>

          <!-- Información Oficial de Contacto -->
          <div class="md:col-span-4 space-y-3">
            <h4 class="font-mono text-xs uppercase tracking-widest text-white font-semibold">
              Canales Oficiales
            </h4>
            <ul class="space-y-2.5 text-sm">
              <li>
                <span class="text-slate-500">WhatsApp:</span>
                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="ml-1.5 text-slate-200 hover:text-sky-400 font-medium transition-colors">
                  ${config.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <span class="text-slate-500">Correo:</span>
                <a href="mailto:${config.contact.email}" class="ml-1.5 text-slate-200 hover:text-sky-400 font-medium transition-colors">
                  ${config.contact.email}
                </a>
              </li>
              <li>
                <span class="text-slate-500">Ubicación:</span>
                <span class="ml-1.5 text-slate-200 font-medium">${config.brand.location}</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Línea de Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; ${currentYear} <strong class="text-slate-300 font-medium">ApexDigital.cl</strong>. Todos los derechos reservados.</p>
          <p class="font-mono text-[11px] text-slate-400">${config.brand.location} · Desarrollo de Software &amp; Sitios Web para Empresas</p>
        </div>

      </div>
    </footer>
  `;
}
