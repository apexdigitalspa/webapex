import { config } from '../config.js';

export function Services() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, estuve revisando su catálogo de soluciones y me gustaría evaluar un proyecto para mi empresa.')}`;

  const catalog = [
    {
      num: "01",
      tag: "PRESENCIA CORPORATIVA",
      title: "Sitios Web y Landing Pages de Alto Rendimiento",
      description: "Diseñamos páginas web sobrias, rápidas y enfocadas en negocios para empresas que necesitan proyectar solidez frente a sus clientes y posicionarse en los primeros lugares de Google.",
      items: [
        "Diseño profesional adaptado a teléfonos móviles y computadores",
        "Optimización técnica SEO y velocidad de carga inmediata",
        "Formularios seguros y canales de contacto directo"
      ]
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
      ]
    },
    {
      num: "03",
      tag: "DESARROLLO MÓVIL",
      title: "Aplicaciones Móviles para Celular (Android & iOS)",
      description: "Desarrollamos aplicaciones móviles a medida, ya sea como un producto 100% independiente para tus usuarios o clientes, o bien conectadas como extensión de la plataforma de tu empresa.",
      items: [
        "Desarrollo de apps independientes listas para usar en celulares",
        "Interfaz intuitiva pensada para clientes finales o personal en terreno",
        "Opción adicional de sincronizar la App con tu sistema o página web"
      ]
    },
    {
      num: "04",
      tag: "CONVERSIÓN & PROCESOS",
      title: "Automatización Digital y Pasarelas de Pago",
      description: "Integramos herramientas digitales que ahorran horas de trabajo administrativo, automatizan la recepción de solicitudes y habilitan pagos o reservas en línea las 24 horas.",
      items: [
        "Integración con Webpay Plus, Flow o pagos en línea",
        "Sistemas de agendamiento, reservas y flujos automatizados",
        "Vinculación directa con los canales comerciales de tu empresa"
      ]
    }
  ];

  const cardsHtml = catalog.map(s => `
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
      </div>

      <ul class="space-y-2.5 border-t border-slate-100 pt-5">
        ${s.items.map(item => `
          <li class="flex items-start gap-2.5 text-sm text-slate-700">
            <svg class="w-4 h-4 text-[#1E3A5F] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    </article>
  `).join('');

  return `
    <section id="servicios" class="py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Encabezado de Catálogo -->
        <div class="max-w-3xl mb-14">
          <p class="text-xs font-bold uppercase tracking-widest text-[#1E3A5F] mb-2">
            Catálogo de Soluciones
          </p>
          <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            Áreas de Desarrollo e Ingeniería
          </h2>
          <p class="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Conoce las soluciones que construimos en ApexDigital. Puedes requerir un desarrollo puntual o combinar estas capacidades según lo que tu proyecto necesite.
          </p>
        </div>

        <!-- Grilla 2x2 de Catálogo Limpio -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}
