import { config } from '../config.js';
import { ApexLogoMark } from './Navbar.js';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, les escribo desde su página web para hacer una consulta.')}`;

  return `
    <!-- Sección de Contacto Simple -->
    <section id="contacto" class="py-20 bg-slate-50 border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="clean-card p-8 sm:p-10 bg-white">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            <div class="max-w-xl">
              <h2 class="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                Hablemos sobre tu proyecto
              </h2>
              <p class="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                Cuéntanos qué necesitas desarrollar o mejorar en tu empresa. Te responderemos a la brevedad con una orientación clara y un presupuesto sin compromiso.
              </p>
              <div class="mt-4 space-y-1 text-sm text-slate-600">
                <p>WhatsApp directo: <strong class="text-slate-900">${config.contact.whatsappDisplay}</strong></p>
                <p>Correo electrónico: <strong class="text-slate-900">${config.contact.email}</strong></p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a 
                href="${whatsappUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors"
              >
                Escribir por WhatsApp
              </a>
              <a 
                href="mailto:${config.contact.email}" 
                class="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Enviar un Correo
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Pie de Página (Footer) -->
    <footer class="bg-slate-900 text-slate-400 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          
          <div>
            <div class="flex items-center gap-3">
              ${ApexLogoMark("w-9 h-9")}
              <span class="font-heading font-bold text-lg text-white">ApexDigital</span>
            </div>
            <p class="text-sm text-slate-400 mt-3 max-w-xs leading-relaxed">
              Desarrollo de software y páginas web a medida para empresas en Chile.
            </p>
          </div>

          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-white mb-3">Enlaces</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#inicio" class="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" class="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#enfoque" class="hover:text-white transition-colors">Enfoque</a></li>
              <li><a href="#contacto" class="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-white mb-3">Contacto</h4>
            <ul class="space-y-2 text-sm">
              <li>WhatsApp: <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:text-white">${config.contact.whatsappDisplay}</a></li>
              <li>Correo: <a href="mailto:${config.contact.email}" class="text-slate-200 hover:text-white">${config.contact.email}</a></li>
              <li>Ubicación: <span class="text-slate-200">${config.brand.location}</span></li>
            </ul>
          </div>

        </div>

        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>&copy; ${currentYear} ApexDigital.cl. Todos los derechos reservados.</p>
          <p>${config.brand.location}</p>
        </div>
      </div>
    </footer>

    <!-- Botón Flotante de WhatsApp (Siempre visible en esquina inferior derecha) -->
    <a 
      href="${whatsappUrl}" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      class="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
    >
      <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
      </svg>
      <span class="hidden sm:inline">WhatsApp</span>
    </a>
  `;
}
