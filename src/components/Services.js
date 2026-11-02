import { config } from '../config.js';

export function Services() {
  const whatsappBase = `https://wa.me/${config.contact.whatsapp}?text=`;

  const services = [
    {
      id: "01",
      tag: "WEB CORPORATIVA & SEO",
      title: "Sitios Web y Landing Pages de Alto Rendimiento",
      description: "Diseñamos y programamos plataformas corporativas enfocadas en velocidad de carga instantánea, arquitectura SEO técnica y posicionamiento comercial para captar clientes B2B.",
      features: [
        "Optimización técnica SEO y Core Web Vitals",
        "Diseño UI/UX sobrio, adaptable a móviles (Responsivo)",
        "Arquitectura orientada a la conversión de clientes"
      ],
      query: "Hola ApexDigital, me interesa cotizar un Sitio Web Corporativo / Landing Page de alto rendimiento.",
      icon: `
        <svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
      `
    },
    {
      id: "02",
      tag: "INGENIERÍA DE SOFTWARE",
      title: "Sistemas Web a Medida y Paneles de Gestión",
      description: "Construimos aplicaciones web empresariales robustas con integración de bases de datos relacionales, control de usuarios por roles, paneles administrativos e inventario o logística.",
      features: [
        "Modelado e integración de bases de datos seguras",
        "Paneles de control (Dashboards) y métricas en tiempo real",
        "Integración de APIs, pasarelas de pago y facturación"
      ],
      query: "Hola ApexDigital, me interesa cotizar un Sistema Web a Medida con base de datos y panel de gestión.",
      icon: `
        <svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
        </svg>
      `
    },
    {
      id: "03",
      tag: "EFICIENCIA & ESCALABILIDAD",
      title: "Automatización y Experiencias Digitales Modernas",
      description: "Digitalizamos flujos operativos manuales y creamos experiencias interactivas orientadas a la conversión comercial, reduciendo tiempos de respuesta y costos operativos.",
      features: [
        "Flujos de cotización y captación automatizados",
        "Conector directo con WhatsApp Business y CRM",
        "Interfaces rápidas sin fricción para el usuario final"
      ],
      query: "Hola ApexDigital, me interesa automatizar procesos y mejorar la conversión digital de mi empresa.",
      icon: `
        <svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      `
    }
  ];

  const cardsHtml = services.map(item => `
    <article class="apex-glass-card rounded-2xl p-8 flex flex-col justify-between reveal-up group">
      <div>
        <!-- Cabecera de la tarjeta -->
        <div class="flex items-center justify-between mb-6">
          <div class="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
            ${item.icon}
          </div>
          <span class="font-mono text-xs font-semibold tracking-widest text-slate-500 group-hover:text-sky-400 transition-colors">
            // ${item.id}
          </span>
        </div>

        <span class="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-semibold block mb-2">
          ${item.tag}
        </span>

        <h3 class="font-heading font-bold text-xl text-white mb-3 leading-snug">
          ${item.title}
        </h3>

        <p class="text-slate-300/85 text-sm leading-relaxed mb-6">
          ${item.description}
        </p>

        <!-- Lista de entregables técnicos -->
        <ul class="space-y-2.5 mb-8 border-t border-white/[0.07] pt-5">
          ${item.features.map(f => `
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <svg class="w-4 h-4 text-sky-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <a 
        href="${whatsappBase}${encodeURIComponent(item.query)}"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-200 bg-white/[0.03] hover:bg-sky-500/15 border border-white/[0.08] hover:border-sky-400/40 transition-all"
      >
        <span>Consultar esta solución</span>
        <svg class="w-4 h-4 text-sky-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </article>
  `).join('');

  return `
    <section id="servicios" class="py-24 lg:py-32 relative border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Encabezado de Sección -->
        <div class="max-w-3xl mb-16 reveal-up">
          <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3">
            <span>// Catálogo de Ingeniería</span>
          </div>
          <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Soluciones Digitales Modulares para el Crecimiento Empresarial
          </h2>
          <p class="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Desarrollamos tecnología adaptada a la etapa y complejidad de tu organización, garantizando escalabilidad técnica desde el primer día.
          </p>
        </div>

        <!-- Grilla de 3 Tarjetas Profesionales -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}
