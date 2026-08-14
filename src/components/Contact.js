import { config } from '../config.js';

export function Contact() {
  return `
    <section id="contacto" style="background-image: radial-gradient(circle at 50% 120%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);">
      <div class="container">
        <div class="section-header animate-fade-in">
          <span class="section-tag">¿Hablamos?</span>
          <h2 class="section-title">Inicia tu Transformación Digital</h2>
          <p class="section-subtitle">
            Si tienes dudas o quieres comentarnos un requerimiento especial, envíanos un mensaje. Responderemos en menos de 24 horas.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Datos de Contacto Directo -->
          <div class="contact-info animate-fade-in">
            <a href="mailto:${config.contact.email}" class="contact-card glass">
              <div class="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="contact-details">
                <h4>Correo Electrónico</h4>
                <p>${config.contact.email}</p>
              </div>
            </a>

            <a href="https://wa.me/${config.contact.whatsapp}" target="_blank" class="contact-card glass">
              <div class="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <div class="contact-details">
                <h4>WhatsApp Directo</h4>
                <p>Escríbenos directamente</p>
              </div>
            </a>
          </div>

          <!-- Formulario de Consulta General -->
          <div class="contact-form-container glass animate-fade-in" style="animation-delay: 0.2s;">
            <form id="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="contact-name">Nombre Completo</label>
                  <input type="text" id="contact-name" class="form-control" required placeholder="Ej: Alejandra Silva">
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-email">Correo Electrónico</label>
                  <input type="email" id="contact-email" class="form-control" required placeholder="Ej: alejandra@correo.cl">
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label" for="contact-subject">Asunto</label>
                <input type="text" id="contact-subject" class="form-control" required placeholder="Ej: Consulta sobre sitio corporativo">
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-message">Tu Mensaje</label>
                <textarea id="contact-message" class="form-control" rows="5" required placeholder="Cuéntanos brevemente en qué podemos ayudarte..."></textarea>
              </div>

              <div style="text-align: right;">
                <button type="submit" class="btn btn-primary" id="btn-send-contact">Enviar Mensaje</button>
              </div>
            </form>
            <div id="form-success-msg" style="display: none; text-align: center; margin-top: 1.5rem; color: var(--secondary-color); font-weight: 600;">
              ✓ ¡Mensaje generado! Redireccionando a tu correo...
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContact() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success-msg');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;

      // Generar mailto link interactivo
      const body = `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`;
      const mailtoUrl = `mailto:${config.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      if (successMsg) {
        successMsg.style.display = 'block';
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 5000);
      }

      // Abrir cliente de correo
      window.location.href = mailtoUrl;
    });
  }
}
