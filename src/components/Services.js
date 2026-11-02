import { config } from '../config.js';

export function Services() {
  const whatsappBase = `https://wa.me/${config.contact.whatsapp}?text=`;

  const services = [
    {
      index: "01",
      category: "PRESENCIA CORPORATIVA & POSICIONAMIENTO",
      title: "Sitios Web y Landing Pages Corporativas de Alto Rendimiento",
      summary: "Desarrollamos portales institucionales y páginas de aterrizaje sobrias, veloces y estructuradas técnicamente para posicionar a tu empresa en Google y convertir visitas en oportunidades comerciales.",
      idealFor: "Empresas B2B, firmas de servicios profesionales, industrias y marcas que requieren proyectar solidez corporativa.",
      deliverables: [
        "Arquitectura de información orientada a tomadores de decisión",
        "Optimización técnica SEO y velocidad de carga sobresaliente",
        "Adaptabilidad móvil milimétrica y formularios con validación segura"
      ],
      query: "Hola ApexDigital, nos interesa cotizar un Sitio Web Corporativo / Landing Page de alto rendimiento para nuestra empresa."
    },
    {
      index: "02",
      category: "PLATAFORMAS INTERNAS & OPERACIONES",
      title: "Sistemas Web a Medida, Bases de Datos y Paneles de Gestión",
      summary: "Construimos software web específico para resolver cuellos de botella operativos: desde intranets y portales de clientes hasta sistemas de control de inventario, órdenes de trabajo o reportería ejecutiva.",
      idealFor: "Operaciones logísticas, empresas en expansión y equipos que necesitan reemplazar planillas dispersas por un sistema centralizado.",
      deliverables: [
        "Diseño e integración de bases de datos relacionales seguras",
        "Paneles de administración (Dashboards) con accesos por rol de usuario",
        "Integración con pasarelas de pago, APIs externas o servicios en la nube"
      ],
      query: "Hola ApexDigital, nos interesa evaluar el desarrollo de un Sistema Web a Medida con base de datos y panel de gestión."
    },
    {
      index: "03",
      category: "EFICIENCIA COMERCIAL & DIGITALIZACIÓN",
      title: "Automatización y Experiencias Digitales Orientadas a Conversión",
      summary: "Implementamos flujos digitales interactivos que califican prospectos automáticamente, agilizan cotizaciones técnicas y conectan tus canales de venta directamente con tu equipo comercial.",
      idealFor: "Equipos comerciales que buscan reducir tiempos de respuesta al cliente y estandarizar su proceso de cotización.",
      deliverables: [
        "Cotizadores interactivos y flujos de captura de requerimientos",
        "Integración directa con WhatsApp corporativo y correo electrónico",
        "Interfaces limpias y sin fricción enfocadas en el cierre de negocios"
      ],
      query: "Hola ApexDigital, nos interesa automatizar nuestros flujos de captación y mejorar la conversión digital."
    }
  ];

  const cardsHtml = services.map(service => `
    <article class="executive-panel rounded-lg p-7 sm:p-8 flex flex-col justify-between reveal-up">
      <div>
        <!-- Índice y Categoría -->
        <div class="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
          <span class="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-semibold">
            ${service.category}
          </span>
          <span class="text-xs font-mono text-slate-500">
            [${service.index}]
          </span>
        </div>

        <!-- Título -->
        <h3 class="font-heading font-bold text-xl text-white mb-3 leading-snug">
          ${service.title}
        </h3>

        <!-- Resumen Ejecutivo -->
        <p class="text-sm text-slate-300 leading-relaxed mb-5">
          ${service.summary}
        </p>

        <!-- Caso de Uso / Ideal para -->
        <div class="p-3.5 rounded bg-[#0B0F19] border border-white/[0.06] mb-6">
          <p class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">Perfil de implementación:</p>
          <p class="text-xs text-slate-200 leading-relaxed">${service.idealFor}</p>
        </div>

        <!-- Entregables -->
        <div class="mb-8">
          <p class="text-xs font-semibold text-white uppercase tracking-wider mb-3">Alcance técnico incluido:</p>
          <ul class="space-y-2.5">
            ${service.deliverables.map(item => `
              <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Acción de Consulta -->
      <div class="pt-4 border-t border-white/[0.08]">
        <a 
          href="${whatsappBase}${encodeURIComponent(service.query)}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors group"
        >
          <span>Solicitar evaluación de este módulo</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </article>
  `).join('');

  return `
    <section id="servicios" class="py-24 lg:py-32 border-b border-white/[0.08]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Encabezado Editorial -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 reveal-up">
          <div class="lg:col-span-7">
            <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-sky-400 mb-3">
              <span>01 // ÁREAS DE PRÁCTICA E INGENIERÍA</span>
            </div>
            <h2 class="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Soluciones Digitales Modulares
            </h2>
          </div>
          <div class="lg:col-span-5">
            <p class="text-sm sm:text-base text-slate-400 leading-relaxed">
              Cada proyecto se diseña bajo una estructura modular. Puedes iniciar con una plataforma corporativa de alto impacto e integrar bases de datos o paneles administrativos a medida que tu operación lo requiera.
            </p>
          </div>
        </div>

        <!-- 3 Tarjetas Ejecutivas -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-7">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}
