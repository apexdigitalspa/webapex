import { config } from '../config.js';

export function ApexLogoMark(sizeClass = "w-10 h-10") {
  return `
    <div class="relative flex items-center justify-center ${sizeClass} rounded-full bg-[#0F1523] border border-white/15 overflow-hidden shrink-0">
      <img src="/logo-circle.jpg" alt="ApexDigital Isotipo" class="w-full h-full object-cover scale-[1.14]" />
    </div>
  `;
}

export function Navbar() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, me comunico para conversar sobre el desarrollo de un proyecto web / software para nuestra empresa.')}`;

  return `
    <header id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/[0.08]">
      <!-- Barra superior ejecutiva muy fina (Datos de operación) -->
      <div class="hidden lg:block border-b border-white/[0.05] bg-[#080B12] text-[11px] text-slate-400">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 h-8 flex items-center justify-between">
          <div class="flex items-center gap-6">
            <span class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span class="text-slate-300 font-medium">Firma de Ingeniería de Software & Consultoría Digital</span>
            </span>
            <span class="text-white/15">|</span>
            <span>Base operativa: <strong class="text-slate-200 font-normal">${config.brand.location}</strong> (Atención a todo Chile)</span>
          </div>
          <div class="flex items-center gap-6">
            <a href="mailto:${config.contact.email}" class="hover:text-white transition-colors">${config.contact.email}</a>
            <span class="text-white/15">|</span>
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300 font-medium transition-colors">
              Línea directa: ${config.contact.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <!-- Barra Principal -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Identidad Visual -->
          <a href="#" class="flex items-center gap-3.5 focus:outline-none">
            ${ApexLogoMark("w-10 h-10")}
            <div class="flex flex-col">
              <div class="flex items-baseline tracking-tight font-heading font-extrabold text-lg sm:text-xl leading-none">
                <span class="text-white">APEX</span>
                <span class="text-sky-400">DIGITAL</span>
              </div>
              <span class="text-[9px] tracking-[0.24em] text-slate-400 font-medium mt-1 uppercase">
                Soluciones Digitales
              </span>
            </div>
          </a>

          <!-- Navegación Sobria (Desktop) -->
          <nav class="hidden md:flex items-center gap-9" aria-label="Navegación Principal">
            <a href="#servicios" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#enfoque" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Enfoque / Sobre mí
            </a>
            <a href="#contacto" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          <!-- Botón Ejecutivo a la derecha -->
          <div class="hidden md:flex items-center">
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-executive-primary inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md text-xs uppercase tracking-wider font-semibold"
            >
              <span>Cotizar por WhatsApp</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>

          <!-- Botón Menú Móvil -->
          <div class="flex md:hidden">
            <button 
              id="mobile-menu-btn" 
              type="button" 
              class="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white border border-white/10 focus:outline-none"
              aria-label="Abrir menú principal"
              aria-expanded="false"
            >
              <svg id="menu-icon-open" class="w-6 h-6 block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Menú Móvil -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-white/10 bg-[#0B0F19] px-4 pt-4 pb-6 space-y-2">
        <a href="#servicios" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:bg-white/5">
          Servicios
        </a>
        <a href="#enfoque" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:bg-white/5">
          Enfoque / Sobre mí
        </a>
        <a href="#contacto" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:bg-white/5">
          Contacto
        </a>
        <div class="pt-3 border-t border-white/10 mt-2">
          <p class="px-3 text-xs text-slate-400 mb-3">${config.brand.location} · ${config.contact.whatsappDisplay}</p>
          <a 
            href="${whatsappUrl}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-executive-primary w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-xs uppercase tracking-wider font-semibold"
          >
            <span>Cotizar por WhatsApp</span>
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
