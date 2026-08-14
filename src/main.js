// Importar Hojas de Estilo para que Vite las procese
import './styles/navbar.css';
import './styles/hero.css';
import './styles/services.css';
import './styles/process.css';
import './styles/planner.css';
import './styles/contact.css';
import './styles/footer.css';

// Importar Componentes
import { Navbar, initNavbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Services } from './components/Services.js';
import { Process } from './components/Process.js';
import { ProjectPlanner, initProjectPlanner } from './components/ProjectPlanner.js';
import { Contact, initContact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

// Renderizar la Estructura en el DOM
const app = document.querySelector('#app');
if (app) {
  app.innerHTML = `
    ${Navbar()}
    <main>
      ${Hero()}
      ${Services()}
      ${Process()}
      ${ProjectPlanner()}
      ${Contact()}
    </main>
    ${Footer()}
  `;

  // Inicializar la interactividad de cada componente
  initNavbar();
  initProjectPlanner();
  initContact();

  // Observador de Intersección para animaciones automáticas al hacer scroll (Aesthetics Boost)
  const animElements = document.querySelectorAll('.animate-fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
}
