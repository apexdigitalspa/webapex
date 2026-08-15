import { config } from '../config.js';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <img src="/logo.png" alt="Apex Digital Logo" style="height: 46px; width: auto; object-fit: contain; margin-bottom: 1rem; border-radius: 4px;" />
          <p>${config.brand.description}</p>
          <p style="margin-top: 1.2rem; font-size: 0.85rem; color: var(--secondary-color); font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;">
            Ingeniería de Software & Consultoría Web
          </p>
        </div>

        <div class="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#soluciones">Servicios</a></li>
            <li><a href="#sello">Sello Ingeniería</a></li>
            <li><a href="#planificador">Planificar Proyecto</a></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Contacto</h4>
          <ul>
            <li><a href="mailto:${config.contact.email}">${config.contact.email}</a></li>
            <li><a href="https://wa.me/${config.contact.whatsapp}" target="_blank">Chat de WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div class="container footer-bottom" style="justify-content: center; text-align: center;">
        <p>&copy; ${currentYear} ${config.brand.name}. Todos los derechos reservados. Hecho en Chile 🇨🇱</p>
      </div>
    </footer>
  `;
}
