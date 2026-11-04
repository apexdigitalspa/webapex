import { config } from '../config.js';

export function ApexLogoMark(sizeClass = "w-11 h-11") {
  return `
    <div class="relative flex items-center justify-center ${sizeClass} shrink-0">
      <img src="/favicon-ad.png" alt="ApexDigital Monograma AD" class="w-full h-full object-contain drop-shadow-sm" />
    </div>
  `;
}

export function Navbar() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, me comunico desde su sitio web para consultar por el desarrollo de un proyecto.')}`;

  return `
    <header id="navbar" class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_1px_3px_rgba(15,23,42,0.03)]">
      <!-- Cintillo Superior Corporativo (Acero / Azul Marino Profundo) -->
      <div class="hidden lg:block bg-[#0F172A] text-slate-300 text-xs border-b border-slate-800">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
          <div class="flex items-center gap-6">
            <span class="font-medium text-white tracking-wide">APEXDIGITAL · SOLUCIONES DIGITALES E INGENIERÍA DE SOFTWARE</span>
            <span class="text-slate-600">|</span>
            <span class="text-slate-400">Ubicación: <strong class="text-slate-200 font-medium">${config.brand.location}</strong></span>
          </div>
          <div class="flex items-center gap-6">
            <a href="mailto:${config.contact.email}" class="hover:text-white transition-colors">${config.contact.email}</a>
            <span class="text-slate-600">|</span>
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:text-white font-medium transition-colors">
              WhatsApp Directo: ${config.contact.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <!-- Barra Principal -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Identidad Visual con Monograma Metálico AD -->
          <a href="#" class="flex items-center gap-3.5 group focus:outline-none">
            ${ApexLogoMark("w-12 h-12")}
            <div class="flex flex-col">
              <div class="flex items-baseline tracking-tight font-heading font-extrabold text-xl sm:text-2xl leading-none">
                <span class="text-[#0F172A]">APEX</span>
                <span class="text-[#1E3A5F]">DIGITAL</span>
              </div>
              <span class="text-[10px] tracking-[0.22em] text-slate-500 font-semibold mt-1 uppercase">
                Soluciones Digitales
              </span>
            </div>
          </a>

          <!-- Enlaces Desktop -->
          <nav class="hidden md:flex items-center gap-9" aria-label="Navegación Principal">
            <a href="#servicios" class="text-sm font-semibold text-slate-600 hover:text-[#0F172A] transition-colors">
              Catálogo de Soluciones
            </a>
            <a href="#enfoque" class="text-sm font-semibold text-slate-600 hover:text-[#0F172A] transition-colors">
              Enfoque Técnico
            </a>
            <a href="#contacto" class="text-sm font-semibold text-slate-600 hover:text-[#0F172A] transition-colors">
              Contacto
            </a>
          </nav>

          <!-- Botón Ejecutivo a la derecha -->
          <div class="hidden md:flex items-center">
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-apex-primary inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              <span>Cotizar Proyecto</span>
              <svg class="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>

          <!-- Botón Menú Móvil -->
          <div class="flex md:hidden">
            <button 
              id="mobile-menu-btn" 
              type="button" 
              class="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 focus:outline-none"
              aria-label="Abrir menú"
            >
              <svg id="menu-icon-open" class="w-6 h-6 block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Menú Móvil Desplegable -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
        <a href="#servicios" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">
          Catálogo de Soluciones
        </a>
        <a href="#enfoque" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">
          Enfoque Técnico
        </a>
        <a href="#contacto" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50">
          Contacto
        </a>
        <div class="pt-3 border-t border-slate-100">
          <a 
            href="${whatsappUrl}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-apex-primary w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold"
          >
            Cotizar por WhatsApp (${config.contact.whatsappDisplay})
          </a>
        </div>
      </div>
    </header>
  `;
}

export function initNavbar() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isHidden = menu.classList.contains('hidden');
      if (isHidden) {
        menu.classList.remove('hidden');
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      });
    });
  }
}
