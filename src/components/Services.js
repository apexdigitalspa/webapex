export function Services() {
  const catalog = [
    {
      title: "Sitios Web Corporativos y Páginas de Ventas",
      subtitle: "Presencia comercial sólida y captación de clientes en Google",
      description: "Tu sitio web es la primera impresión comercial de tu empresa. Desarrollamos páginas corporativas sobrias, rápidas y bien estructuradas que proyectan respaldo profesional, presentan tus servicios con claridad y convierten visitas en oportunidades reales de negocio.",
      deliverables: [
        "Diseño corporativo a medida",
        "Optimización para Google (SEO)",
        "Carga rápida en celulares",
        "Contacto directo a WhatsApp y correo"
      ],
      examples: "Ideal para empresas de servicios, constructoras, clínicas, consultoras, estudios profesionales y comercio establecido."
    },
    {
      title: "Sistemas Web a Medida y Bases de Datos",
      subtitle: "Plataformas privadas para ordenar la operación diaria de tu negocio",
      description: "Cuando las planillas de Excel o los cuadernos quedan cortos, programamos un sistema privado para tu empresa. Entras con tu usuario y clave desde cualquier computador o celular para controlar cada área de tu operación con información centralizada.",
      deliverables: [
        "Control de stock y bodega",
        "Órdenes de trabajo y seguimiento",
        "Fichas de clientes y proveedores",
        "Cotizaciones y reportes en PDF"
      ],
      examples: "Ideal para empresas que necesitan ordenar su inventario, terreno, ventas o administración interna sin depender de hojas de cálculo."
    },
    {
      title: "Aplicaciones Móviles para Celular (Android & iOS)",
      subtitle: "Proyectos móviles independientes o sincronizados con tu plataforma web",
      description: "Creamos aplicaciones móviles desde cero para publicar en tiendas o para uso interno de tu personal. Podemos desarrollar tu App como un proyecto 100% independiente, o bien conectarla con tu página web para que trabajen sincronizadas en tiempo real.",
      deliverables: [
        "Apps nativas / híbridas Android e iOS",
        "Modalidad 100% independiente disponible",
        "Sincronización web en tiempo real opcional",
        "Perfiles para clientes o personal en terreno"
      ],
      examples: "Ideal para apps de pedidos, reservas de clientes, control de técnicos o repartidores en ruta y catálogos móviles interactivos."
    },
    {
      title: "Pagos en Línea y Automatización de Procesos",
      subtitle: "Cobros digitales y reducción de tareas manuales en tu oficina",
      description: "Conectamos tu plataforma digital con medios de pago chilenos y herramientas que reducen el trabajo repetitivo de tu equipo, permitiendo que tu negocio reciba solicitudes, reservas o ventas pagadas las 24 horas del día.",
      deliverables: [
        "Pasarelas Webpay Plus y Flow",
        "Agendamiento de horas en línea",
        "Notificaciones automáticas por correo",
        "Formularios de cotización inteligentes"
      ],
      examples: "Ideal para negocios que buscan vender en línea, cobrar reservas por adelantado o automatizar la recepción de solicitudes."
    }
  ];

  const rowsHtml = catalog.map((item) => `
    <article class="swiss-catalog-row p-7 sm:p-10 lg:p-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        <!-- Columna 1: Título y Alcance Principal (4 cols) -->
        <div class="lg:col-span-4">
          <h3 class="font-heading font-extrabold text-xl sm:text-2xl text-[#0B1120] leading-snug">
            ${item.title}
          </h3>
          <p class="mt-2 text-sm font-semibold text-[#1E3A5F] leading-relaxed">
            ${item.subtitle}
          </p>
        </div>

        <!-- Columna 2: Explicación Clara y Casos de Uso (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          <p class="text-slate-800 text-base leading-relaxed">
            ${item.description}
          </p>
          <p class="text-xs sm:text-sm text-slate-700 bg-[#F4F6F9] px-4 py-3 rounded-lg border border-slate-300/80 leading-relaxed">
            <strong class="text-[#0B1120] font-semibold">Aplicación práctica:</strong> ${item.examples}
          </p>
        </div>

        <!-- Columna 3: Entregables Concretos (3 cols) -->
        <div class="lg:col-span-3 lg:border-l lg:border-slate-200 lg:pl-8">
          <p class="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            Capacidades incluidas
          </p>
          <ul class="space-y-2.5">
            ${item.deliverables.map(del => `
              <li class="flex items-start gap-2.5 text-sm text-slate-800 font-medium leading-snug">
                <span class="w-1.5 h-1.5 rounded-full bg-[#1E3A5F] mt-2 shrink-0" aria-hidden="true"></span>
                <span>${del}</span>
              </li>
            `).join('')}
          </ul>
        </div>

      </div>
    </article>
  `).join('');

  return `
    <section id="servicios" class="py-20 sm:py-28 bg-[#F4F6F9] border-b border-slate-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Encabezado Editorial de Sección -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div class="max-w-2xl">
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1120] tracking-tight">
              Catálogo de Soluciones Digitales
            </h2>
            <p class="mt-3 text-slate-800 text-base sm:text-lg leading-relaxed">
              Construimos herramientas digitales completas según la etapa y necesidad real de tu empresa, sin paquetes rígidos ni funciones de relleno.
            </p>
          </div>
          <div class="shrink-0">
            <span class="deliverable-chip">
              Desarrollo a medida · Web, Software &amp; Apps
            </span>
          </div>
        </div>

        <!-- Matriz Arquitectónica Suiza (Reemplaza la cuadrícula 2x2 de tarjetas genéricas) -->
        <div class="swiss-grid-frame rounded-xl overflow-hidden">
          ${rowsHtml}
        </div>

      </div>
    </section>
  `;
}
