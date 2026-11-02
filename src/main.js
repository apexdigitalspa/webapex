// Importar Componentes B2B de ApexDigital
import { Navbar, initNavbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Services } from './components/Services.js';
import { Authority } from './components/Authority.js';
import { Footer } from './components/Footer.js';

// Renderizar la Estructura en el DOM
const app = document.querySelector('#app');
if (app) {
  app.innerHTML = `
    ${Navbar()}
    <main>
      ${Hero()}
      ${Services()}
      ${Authority()}
    </main>
    ${Footer()}
  `;

  // Inicializar interactividad del menú móvil y navegación
  initNavbar();

  // Observador de Intersección para animaciones sutiles de entrada (reveal-up)
  const revealElements = document.querySelectorAll('.reveal-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(el => observer.observe(el));
}
