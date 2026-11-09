import { config } from '../config.js';

export function ApexLogoMark(sizeClass = "w-9 h-9") {
  return `
    <div class="relative flex items-center justify-center ${sizeClass} shrink-0">
      <img src="/favicon-ad.png" alt="ApexDigital" width="36" height="36" class="w-full h-full object-contain" />
    </div>
  `;
}

export function Navbar() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, me comunico desde su sitio web para consultar por el desarrollo de un proyecto.')}`;

  return `
    <header id="navbar" class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20 gap-6">
          
          <!-- Marca limpia en una sola línea (sin subtítulo redundante que desborde) -->
          <a href="#" class="flex items-center gap-3 shrink-0 whitespace-nowrap focus:outline-none">
            ${ApexLogoMark("w-9 h-9 sm:w-10 sm:h-10")}
            <span class="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#0B1120]">
              APEX<span class="text-[#1E3A5F]">DIGITAL</span>
            </span>
          </a>

          <!-- Navegación Desktop: concisa, de 1 palabra por ítem y sin saltos de línea -->
          <nav class="hidden md:flex items-center gap-8 lg:gap-10 whitespace-nowrap" aria-label="Navegación Principal">
            <a href="#servicios" class="text-sm font-semibold text-slate-700 hover:text-[#0B1120] transition-colors">
              Soluciones
            </a>
            <a href="#enfoque" class="text-sm font-semibold text-slate-700 hover:text-[#0B1120] transition-colors">
              Enfoque
            </a>
            <a href="#preguntas" class="text-sm font-semibold text-slate-700 hover:text-[#0B1120] transition-colors">
              Preguntas
            </a>
            <a href="#contacto" class="text-sm font-semibold text-slate-700 hover:text-[#0B1120] transition-colors">
              Contacto
            </a>
          </nav>

          <!-- Botón Ejecutivo compacto de una sola línea -->
          <div class="hidden md:flex items-center shrink-0">
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-tactile whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0B1120] hover:bg-[#1E3A5F] shadow-sm"
            >
              <span>Contáctanos</span>
              <svg class="w-4 h-4 text-slate-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>

          <!-- Botón Menú Móvil -->
          <div class="flex md:hidden">
            <button 
              id="mobile-menu-btn" 
              type="button" 
              aria-expanded="false"
              aria-controls="mobile-menu"
              class="btn-tactile inline-flex items-center justify-center p-2.5 rounded-lg text-slate-800 hover:text-slate-950 hover:bg-slate-100 border border-slate-300 focus:outline-none"
              aria-label="Abrir menú de navegación"
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

      <!-- Menú Móvil Desplegable con transición suave origin-aware -->
      <div id="mobile-menu" data-open="false" class="mobile-menu-panel md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-xl">
        <a href="#servicios" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-900 hover:bg-slate-100">
          Soluciones
        </a>
        <a href="#enfoque" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-900 hover:bg-slate-100">
          Enfoque
        </a>
        <a href="#preguntas" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-900 hover:bg-slate-100">
          Preguntas
        </a>
        <a href="#contacto" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-900 hover:bg-slate-100">
          Contacto
        </a>
        <div class="pt-3 border-t border-slate-200">
          <a 
            href="${whatsappUrl}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-tactile w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-[#0B1120] hover:bg-[#1E3A5F]"
          >
            Hablar por WhatsApp (${config.contact.whatsappDisplay})
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

  function setMenuState(isOpen) {
    if (!btn || !menu || !iconOpen || !iconClose) return;
    menu.setAttribute('data-open', isOpen ? 'true' : 'false');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) {
      iconOpen.classList.add('hidden');
      iconClose.classList.remove('hidden');
    } else {
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  }

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = menu.getAttribute('data-open') === 'true';
      setMenuState(!isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.getAttribute('data-open') === 'true') {
        setMenuState(false);
        btn.focus();
      }
    });
  }
}
