export function Services() {
  const catalog = [
    {
      category: "Páginas Web de Empresa",
      title: "Sitios Web Corporativos y Páginas de Ventas",
      description: "Si un potencial cliente busca tu empresa en internet, lo que ve define si te pide una cotización o pasa de largo. Diseñamos sitios sobrios, rápidos y claros que explican bien tu servicio y facilitan el contacto directo.",
      examples: "Ejemplos habituales: sitios para empresas de servicios, constructoras, clínicas, consultoras, estudios profesionales y comercio local."
    },
    {
      category: "Software Interno y Operación",
      title: "Sistemas Web a Medida y Bases de Datos",
      description: "Cuando las planillas de Excel o los cuadernos quedan cortos, programamos un sistema privado para tu empresa. Entras con tu clave desde cualquier computador o celular para controlar el día a día de tu negocio.",
      examples: "Ejemplos habituales: control de stock y bodega, órdenes de trabajo, fichas de clientes, generación de cotizaciones en PDF y paneles de administración."
    },
    {
      category: "Teléfonos Android & iOS",
      title: "Aplicaciones Móviles para Celular",
      description: "Creamos aplicaciones móviles desde cero para publicar en tiendas o para uso interno de tu personal. Podemos desarrollar tu App como un proyecto 100% independiente, o bien conectarla con tu página web para que trabajen sincronizadas en tiempo real.",
      examples: "Ejemplos habituales: apps de pedidos o reservas para clientes, apps para técnicos o repartidores en terreno y catálogos móviles."
    },
    {
      category: "Ventas y Ahorro de Tiempo",
      title: "Pagos en Línea y Automatización de Procesos",
      description: "Conectamos tu plataforma digital con medios de pago chilenos y herramientas que reducen el trabajo manual de tu oficina, permitiendo que tu negocio reciba solicitudes, reservas o ventas las 24 horas.",
      examples: "Ejemplos habituales: cobros con Webpay Plus o Flow, agendas de horas en línea, alertas automáticas al correo o WhatsApp y formularios de cotización."
    }
  ];

  const cardsHtml = catalog.map(item => `
    <article class="executive-card p-8 sm:p-9 flex flex-col justify-between bg-white">
      <div>
        <p class="text-xs font-semibold uppercase tracking-wider text-[#1E3A5F] mb-2">
          ${item.category}
        </p>

        <h3 class="font-heading font-bold text-xl sm:text-2xl text-[#0F172A] mb-3 leading-snug">
          ${item.title}
        </h3>

        <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          ${item.description}
        </p>
      </div>

      <div class="pt-4 border-t border-slate-100">
        <p class="text-xs text-slate-500 leading-relaxed">
          ${item.examples}
        </p>
      </div>
    </article>
  `).join('');

  return `
    <section id="servicios" class="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-2xl mb-14">
          <p class="text-xs font-bold uppercase tracking-widest text-[#1E3A5F] mb-2">
            Catálogo de Soluciones
          </p>
          <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            ¿Qué podemos construir para tu empresa?
          </h2>
          <p class="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Desarrollamos desde una página corporativa limpia hasta un sistema de gestión o una aplicación móvil completa.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}
