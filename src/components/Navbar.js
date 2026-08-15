import { config } from '../config.js';

export function Navbar() {
  return `
    <header class="header" id="header">
      <div class="container nav-container">
        <a href="#" class="logo" style="display: flex; align-items: center;">
          <img src="/logo.png" alt="Apex Digital Logo" style="height: 38px; width: auto; object-fit: contain; border-radius: 4px;" />
        </a>
        
        <div style="display: flex; align-items: center; gap: 1.2rem; order: 2;">
          <!-- Botón de cambio de tema (Sol / Luna) -->
          <button class="theme-toggle-btn" id="theme-toggle" aria-label="Cambiar tema">
            <!-- Moon Icon (Se muestra por defecto para pasar a Oscuro) -->
            <svg class="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <!-- Sun Icon (Se muestra en Modo Oscuro para volver a Claro) -->
            <svg class="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
          
          <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menú">
            ☰
          </button>
        </div>

        <nav style="order: 1;">
          <ul class="nav-menu" id="nav-menu">
            <li><a href="#soluciones" class="nav-link">Servicios</a></li>
            <li><a href="#sello" class="nav-link">Sello Ingeniería</a></li>
            <li><a href="#planificador" class="nav-link">Planificar Web</a></li>
            <li><a href="#contacto" class="nav-link btn btn-secondary" style="padding: 0.5rem 1.2rem;">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

export function initNavbar() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const themeToggle = document.getElementById('theme-toggle');

  // Inicializar tema: por defecto claro, a menos que se haya guardado 'dark'
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode'); // Asegurar claro por defecto
  }

  // Toggle de Tema (Claro / Oscuro)
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const activeTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', activeTheme);
    });
  }

  // Cambiar estilo de header al hacer scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Toggle menú móvil
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
  }

  // Cerrar menú móvil al hacer click en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) {
        navMenu.classList.remove('active');
      }
      if (menuToggle) {
        menuToggle.textContent = '☰';
      }
    });
  });
}
