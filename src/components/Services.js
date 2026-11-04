import { config } from '../config.js';

export function Services() {
  const whatsappBase = `https://wa.me/${config.contact.whatsapp}?text=`;

  const services = [
    {
      num: "01",
      tag: "PRESENCIA CORPORATIVA",
      title: "Sitios Web y Landing Pages de Alto Rendimiento",
      description: "Diseñamos páginas web sobrias, rápidas y enfocadas en negocios para empresas que necesitan proyectar solidez frente a sus clientes y posicionarse en los primeros lugares de Google.",
      items: [
        "Diseño profesional adaptado a teléfonos móviles y computadores",
        "Optimización técnica SEO y velocidad de carga inmediata",
        "Formularios seguros y botones de contacto directo"
      ],
      query: "Hola ApexDigital, me interesa cotizar un Sitio Web Corporativo / Landing Page de alto rendimiento."
    },
    {
      num: "02",
      tag: "SOFTWARE DE GESTIÓN",
      title: "Sistemas Web a Medida y Bases de Datos",
      description: "Desarrollamos plataformas internas e intranets para ordenar y digitalizar la operación de tu empresa: gestión de clientes, inventarios, cotizaciones, órdenes de trabajo o paneles de control.",
      items: [
        "Bases de datos seguras, centralizadas y respaldadas",
        "Paneles administrativos intuitivos con perfiles de usuario",
        "Reportes ejecutivos y exportación de datos en tiempo real"
      ],
      query: "Hola ApexDigital, me interesa cotizar un Sistema Web a Medida con base de datos y panel de gestión."
    },
    {
      num: "03",
      tag: "DESARROLLO MÓVIL",
      title: "Aplicaciones para Celular (Sincronizadas con tu Web)",
      description: "Creamos aplicaciones móviles para Android y iOS conectadas directamente con el sistema web de tu empresa, permitiendo que tu personal en terreno o tus clientes operen desde su teléfono.",
      items: [
        "Sincronización instantánea entre la App del celular y el panel Web",
        "Ideal para equipos en terreno, repartos, reservas o atención a clientes",
        "Experiencia rápida, moderna y publicada bajo tu marca"
      ],
      query: "Hola ApexDigital, me interesa cotizar el desarrollo de una Aplicación Móvil sincronizada con plataforma web."
    },
    {
      num: "04",
      tag: "CONVERSIÓN & PROCESOS",
      title: "Automatización Digital y Pasarelas de Pago",
      description: "Integramos herramientas digitales que ahorran horas de trabajo administrativo, automatizan la recepción de solicitudes y habilitan pagos o reservas en línea las 24 horas.",
      items: [
        "Integración con Webpay Plus, Flow o transferencias automatizadas",
        "Sistemas de agendamiento y cotizadores en línea",
        "Vinculación directa con WhatsApp corporativo y correo"
      ],
      query: "Hola ApexDigital, me interesa consultar por soluciones de automatización y pagos en línea."
    }
  ];

  const cardsHtml = services.map(s => `
    <article class="executive-card p-8 flex flex-col justify-between relative overflow-hidden">
      <!-- Borde superior sutil en Azul Marino Imperial -->
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F172A] via-[#1E3A5F] to-slate-400"></div>

      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold uppercase tracking-widest text-[#1E3A5F] bg-slate-100 px-3 py-1 rounded">
            ${s.tag}
          </span>
          <span class="font-heading font-extrabold text-lg text-slate-300">
            ${s.num}
          </span>
        </div>

        <h3 class="font-heading font-bold text-xl text-[#0F172A] mb-3 leading-snug">
          ${s.title}
        </h3>

        <p class="text-slate-600 text-sm leading-relaxed mb-6">
          ${s.description}
        </p>

        <ul class="space-y-2.5 mb-8 border-t border-slate-100 pt-5">
          ${s.items.map(item => `
            <li class="flex items-start gap-2.5 text-sm text-slate-700">
              <svg class="w-4 h-4 text-[#1E3A5F] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <a 
        href="${whatsappBase}${encodeURIComponent(s.query)}"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-between w-full px-5 py-3 rounded-lg text-sm font-semibold text-[#0F172A] bg-slate-100 hover:bg-[#0F172A] hover:text-white transition-colors group"
      >
        <span>Solicitar cotización de esta solución</span>
        <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </a>
    </article>
  `).join('');

  return `
    <section id="servicios" class="py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Encabezado de Servicios -->
        <div class="max-w-3xl mb-14">
          <p class="text-xs font-bold uppercase tracking-widest text-[#1E3A5F] mb-2">
            Áreas de Desarrollo
          </p>
          <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            Soluciones Tecnológicas a la Medida de tu Empresa
          </h2>
          <p class="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Desarrollamos herramientas sólidas, claras y fáciles de usar para mejorar tus ventas y el control de tu operación diaria.
          </p>
        </div>

        <!-- Grilla 2x2 de Tarjetas Ejecutivas -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${cardsHtml}
        </div>

        <!-- Bloque Especial Destacado: Sincronización Web + App Móvil -->
        <div id="sincronizacion" class="mt-16 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-sm">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-8 space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs font-bold uppercase tracking-wider">
                <span>Arquitectura Integrada</span>
              </div>
              <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-[#0F172A]">
                Tu Página Web y tu App Móvil funcionando sincronizadas en tiempo real
              </h3>
              <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                Si tu empresa necesita tanto presencia web como una aplicación para celular, las conectamos a un único núcleo central. Cualquier pedido, reserva, cambio de stock o reporte ingresado desde un teléfono se refleja al instante en el panel de control de tu oficina, sin duplicar trabajo.
              </p>
              <div class="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium text-slate-700">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#1E3A5F]"></span>
                  <span>1. Panel Web en Oficina</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#1E3A5F]"></span>
                  <span>2. Base de Datos Única en la Nube</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#1E3A5F]"></span>
                  <span>3. App Móvil en Terreno / Clientes</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div class="w-full sm:w-auto bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                <img src="/favicon-ad.png" alt="ApexDigital AD" class="w-16 h-16 mx-auto mb-3 object-contain" />
                <p class="font-heading font-bold text-base text-[#0F172A]">¿Buscas integrar Web + App?</p>
                <p class="text-xs text-slate-500 mt-1 mb-4">Evaluamos la arquitectura ideal para tu caso.</p>
                <a 
                  href="${whatsappBase}${encodeURIComponent('Hola ApexDigital, me gustaría consultar por un proyecto que conecte Página Web y Aplicación Móvil sincronizadas.')}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-apex-primary inline-flex items-center justify-center w-full px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider"
                >
                  Consultar Integración
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}
