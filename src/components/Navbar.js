import { config } from '../config.js';

/**
 * Isotipo SVG vectorial fiel al logo de ApexDigital (La 'A' geométrica con la flecha ascendente en degradado azul)
 */
export function ApexLogoMark(sizeClass = "w-9 h-9") {
  return `
    <div class="relative flex items-center justify-center ${sizeClass} rounded-full bg-[#111827] border border-sky-400/30 shadow-[0_0_15px_rgba(56,189,248,0.18)] overflow-hidden shrink-0 group-hover:border-sky-400/60 transition-colors">
      <img src="/logo-circle.jpg" alt="ApexDigital Isotipo" class="w-full h-full object-cover scale-[1.15]" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
      <svg style="display:none;" viewBox="0 0 64 64" fill="none" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="apexGrad" x1="8" y1="54" x2="54" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#1D4ED8"/>
            <stop offset="50%" stop-color="#0EA5E9"/>
            <stop offset="100%" stop-color="#7DD3FC"/>
          </linearGradient>
        </defs>
        <!-- Letra A estructural -->
        <path d="M30 10L12 50H21L30 28L39 50H48L30 10Z" fill="url(#apexGrad)" opacity="0.9"/>
        <!-- Flecha de impulso ascendente -->
        <path d="M10 48L24 34L31 41L50 18M50 18H37M50 18V31" stroke="#38BDF8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  `;
}

export function Navbar() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, me gustaría cotizar un proyecto de software / página web para mi empresa.')}`;

  return `
    <header id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/[0.06] bg-[#0B0F19]/85 backdrop-blur-xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo / Identidad Visual a la izquierda -->
          <a href="#" class="flex items-center gap-3.5 group focus:outline-none">
            ${ApexLogoMark("w-11 h-11")}
            <div class="flex flex-col">
              <div class="flex items-center tracking-tight font-heading font-extrabold text-xl sm:text-2xl leading-none">
                <span class="text-white">APEX</span>
                <span class="text-apex-gradient">DIGITAL</span>
              </div>
              <span class="text-[10px] tracking-[0.22em] text-slate-400 font-semibold mt-1 uppercase">
                Soluciones Digitales
              </span>
            </div>
          </a>

          <!-- Enlaces de Navegación Limpios (Desktop) -->
          <nav class="hidden md:flex items-center gap-8" aria-label="Navegación Principal">
            <a href="#servicios" class="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors">
              Servicios
            </a>
            <a href="#enfoque" class="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors">
              Enfoque / Sobre mí
            </a>
            <a href="#contacto" class="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors">
              Contacto
            </a>
          </nav>

          <!-- Botón Destacado a la derecha -->
          <div class="hidden md:flex items-center">
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-apex-gradient shadow-[0_0_25px_rgba(14,165,233,0.3)] hover:shadow-[0_0_32px_rgba(56,189,248,0.5)] transition-all duration-200 border border-sky-300/20"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
              </svg>
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          <!-- Botón Menú Móvil -->
          <div class="flex md:hidden">
            <button 
              id="mobile-menu-btn" 
              type="button" 
              class="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Abrir menú principal"
              aria-expanded="false"
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

      <!-- Menú Desplegable Móvil -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-white/10 bg-[#0B0F19]/98 backdrop-blur-2xl">
        <div class="px-4 pt-4 pb-6 space-y-2">
          <a href="#servicios" class="mobile-nav-link block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-sky-400 transition-colors">
            Servicios
          </a>
          <a href="#enfoque" class="mobile-nav-link block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-sky-400 transition-colors">
            Enfoque / Sobre mí
          </a>
          <a href="#contacto" class="mobile-nav-link block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-sky-400 transition-colors">
            Contacto
          </a>
          <div class="pt-3">
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg text-sm font-semibold text-white bg-apex-gradient shadow-lg"
            >
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
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
        btn.setAttribute('aria-expanded', 'true');
      } else {
        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}
