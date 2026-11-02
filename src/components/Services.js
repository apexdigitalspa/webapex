import { config } from '../config.js';

export function Services() {
  const whatsappBase = `https://wa.me/${config.contact.whatsapp}?text=`;

  const services = [
    {
      step: "01",
      title: "Sitios Web y Landing Pages Corporativas",
      description: "Diseñamos páginas web profesionales, limpias y rápidas para empresas que buscan presentar sus servicios con claridad, posicionarse en Google (SEO) y captar nuevos clientes.",
      points: [
        "Diseño sobrio y adaptado a celulares",
        "Optimización SEO y alta velocidad de carga",
        "Integración de formularios y contacto directo"
      ],
      query: "Hola ApexDigital, me interesa cotizar un Sitio Web / Landing Page corporativa."
    },
    {
      step: "02",
      title: "Sistemas Web a Medida y Paneles de Gestión",
      description: "Desarrollamos sistemas internos e intranets con bases de datos para ordenar la operación de tu empresa: control de clientes, inventarios, reservas, reportes o estados de pedidos.",
      points: [
        "Bases de datos seguras y centralizadas",
        "Panel de administración fácil de usar",
        "Acceso con usuarios y permisos para tu equipo"
      ],
      query: "Hola ApexDigital, me interesa cotizar un Sistema Web a Medida con panel de gestión."
    },
    {
      step: "03",
      title: "Apps para Celular y Sincronización Web + App",
      description: "Desarrollamos aplicaciones móviles (Android y iOS) conectadas directamente con tu plataforma web. Todo cambio o registro en el celular se actualiza al instante en el panel web de tu oficina.",
      points: [
        "Aplicaciones móviles intuitivas para clientes o personal en terreno",
        "Sincronización en tiempo real entre la Web y la App",
        "Notificaciones, pedidos, reportes y gestión desde el teléfono"
      ],
      query: "Hola ApexDigital, me interesa cotizar el desarrollo de una App móvil sincronizada con sistema web."
    },
    {
      step: "04",
      title: "Automatización y Soluciones Orientadas a Ventas",
      description: "Modernizamos tus canales digitales para ahorrar tiempo administrativo, automatizar cotizaciones frecuentes y facilitar que tus clientes compren o agenden en línea.",
      points: [
        "Flujos de cotización y reservas en línea",
        "Integración de pagos (Webpay / Flow) si lo requieres",
        "Conexión directa con tu WhatsApp y correo corporativo"
      ],
      query: "Hola ApexDigital, me interesa consultar por soluciones de automatización y ventas en línea."
    }
  ];

  const cardsHtml = services.map(item => `
    <article class="clean-card p-7 sm:p-8 flex flex-col justify-between">
      <div>
        <span class="inline-block text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-md mb-4">
          Solución ${item.step}
        </span>

        <h3 class="font-heading font-bold text-xl text-slate-900 mb-3 leading-snug">
          ${item.title}
        </h3>

        <p class="text-slate-600 text-sm leading-relaxed mb-6">
          ${item.description}
        </p>

        <ul class="space-y-2.5 mb-8 border-t border-slate-100 pt-5">
          ${item.points.map(p => `
            <li class="flex items-start gap-2.5 text-sm text-slate-700">
              <span class="text-sky-600 font-bold">•</span>
              <span>${p}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <a 
        href="${whatsappBase}${encodeURIComponent(item.query)}"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
      >
        Consultar por esta solución
      </a>
    </article>
  `).join('');

  return `
    <section id="servicios" class="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-2xl mb-12">
          <p class="text-xs font-semibold uppercase tracking-widest text-sky-700 mb-2">
            Nuestros Servicios
          </p>
          <h2 class="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Soluciones prácticas y bien construidas para tu negocio
          </h2>
          <p class="mt-3 text-slate-600 text-base leading-relaxed">
            Desde una página corporativa hasta un ecosistema completo con sistema web y aplicación móvil funcionando sincronizados.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}
