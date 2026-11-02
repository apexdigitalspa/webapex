import { config } from '../config.js';
import { ApexLogoMark } from './Navbar.js';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, me gustaría evaluar un proyecto tecnológico con ustedes.')}`;

  return `
    <!-- Sección de Contacto / Conversión Directa -->
    <section id="contacto" class="py-20 lg:py-28 relative border-t border-white/[0.06] apex-radial-glow">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="apex-glass-card rounded-3xl p-8 sm:p-12 lg:p-14 border border-sky-400/25 relative overflow-hidden reveal-up">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div class="lg:col-span-7 space-y-4">
              <span class="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold block">
                // Contacto Directo B2B
              </span>
              <h2 class="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                ¿Listo para construir tu próxima plataforma digital?
              </h2>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                Conversemos sobre los requerimientos técnicos de tu empresa. Recibirás una evaluación directa, clara y estructurada para llevar tu proyecto a producción.
              </p>
            </div>

            <div class="lg:col-span-5 flex flex-col gap-4">
              <a 
                href="${whatsappUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-apex-gradient shadow-[0_10px_25px_-5px_rgba(14,165,233,0.45)] hover:shadow-[0_15px_30px_-5px_rgba(56,189,248,0.65)] transition-all duration-200"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                </svg>
                <span>Hablar por WhatsApp (${config.contact.whatsappDisplay})</span>
              </a>

              <a 
                href="mailto:${config.contact.email}" 
                class="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 transition-colors"
              >
                <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>${config.contact.email}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Pie de Página Oficial (Footer) -->
    <footer class="bg-[#070A12] border-t border-white/[0.08] pt-16 pb-12 text-slate-400">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          <!-- Marca -->
          <div class="md:col-span-5 space-y-4">
            <a href="#" class="inline-flex items-center gap-3.5 group">
              ${ApexLogoMark("w-10 h-10")}
              <div class="flex flex-col">
                <div class="flex items-center tracking-tight font-heading font-extrabold text-xl leading-none">
                  <span class="text-white">APEX</span>
                  <span class="text-apex-gradient">DIGITAL</span>
                </div>
                <span class="text-[10px] tracking-[0.22em] text-slate-400 font-semibold mt-1 uppercase">
                  Soluciones Digitales
                </span>
              </div>
            </a>
            <p class="text-sm text-slate-400 max-w-sm leading-relaxed">
              ${config.brand.description}
            </p>
          </div>

          <!-- Enlaces Rápidos -->
          <div class="md:col-span-3 space-y-3">
            <h4 class="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Secciones
            </h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="#inicio" class="hover:text-sky-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" class="hover:text-sky-400 transition-colors">Servicios Modulares</a></li>
              <li><a href="#enfoque" class="hover:text-sky-400 transition-colors">Enfoque Técnico</a></li>
              <li><a href="#contacto" class="hover:text-sky-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <!-- Datos de Contacto Oficiales -->
          <div class="md:col-span-4 space-y-3">
            <h4 class="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Contacto Oficial
            </h4>
            <ul class="space-y-3 text-sm">
              <li>
                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 hover:text-sky-400 transition-colors">
                  <svg class="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>WhatsApp: <strong class="text-slate-200 font-medium">${config.contact.whatsappDisplay}</strong></span>
                </a>
              </li>
              <li>
                <a href="mailto:${config.contact.email}" class="inline-flex items-center gap-2.5 hover:text-sky-400 transition-colors">
                  <svg class="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>Correo: <strong class="text-slate-200 font-medium">${config.contact.email}</strong></span>
                </a>
              </li>
              <li class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Ubicación: <strong class="text-slate-200 font-medium">${config.brand.location}</strong></span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; ${currentYear} <strong class="text-slate-300 font-medium">ApexDigital.cl</strong>. Todos los derechos reservados.</p>
          <p class="font-mono text-[11px] text-slate-400">Puerto Montt, Chile · Ingeniería de Software &amp; Soluciones Digitales</p>
        </div>
      </div>
    </footer>
  `;
}
