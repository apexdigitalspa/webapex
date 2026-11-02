import { config } from '../config.js';

export function ApexLogoMark(sizeClass = "w-10 h-10") {
  return `
    <div class="relative flex items-center justify-center ${sizeClass} rounded-full bg-slate-900 border border-slate-200 overflow-hidden shrink-0">
      <img src="/logo-circle.jpg" alt="ApexDigital Logo" class="w-full h-full object-cover scale-[1.14]" />
    </div>
  `;
}

export function Navbar() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, me comunico desde su sitio web para consultar por un proyecto.')}`;

  return `
    <header id="navbar" class="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo + Nombre -->
          <a href="#" class="flex items-center gap-3 focus:outline-none">
            ${ApexLogoMark("w-10 h-10")}
            <div class="flex flex-col">
              <div class="flex items-baseline tracking-tight font-heading font-extrabold text-xl leading-none">
                <span class="text-slate-900">Apex</span>
                <span class="text-sky-600">Digital</span>
              </div>
              <span class="text-[10px] tracking-widest text-slate-500 font-medium mt-0.5 uppercase">
                Soluciones Digitales
              </span>
            </div>
          </a>

          <!-- Enlaces Desktop -->
          <nav class="hidden md:flex items-center gap-8" aria-label="Navegación Principal">
            <a href="#servicios" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Servicios
            </a>
            <a href="#enfoque" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Enfoque / Sobre mí
            </a>
            <a href="#contacto" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Contacto
            </a>
          </nav>

          <!-- Botón de Contacto Sobrio -->
          <div class="hidden md:flex items-center">
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          <!-- Botón Menú Móvil -->
          <div class="flex md:hidden">
            <button 
              id="mobile-menu-btn" 
              type="button" 
              class="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
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

      <!-- Menú Móvil -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
        <a href="#servicios" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50">
          Servicios
        </a>
        <a href="#enfoque" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50">
          Enfoque / Sobre mí
        </a>
        <a href="#contacto" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50">
          Contacto
        </a>
        <div class="pt-2">
          <a 
            href="${whatsappUrl}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800"
          >
            Cotizar por WhatsApp
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
