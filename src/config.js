export const config = {
  brand: {
    name: "Apex Digital",
    tagline: "Ingeniería de Software & Diseño Web Premium",
    description: "Creamos soluciones web de alto impacto visual y rendimiento técnico excepcional. Liderado por ingenieros, diseñado para tu negocio.",
    logo: "▲ Apex Digital"
  },
  contact: {
    email: "contacto@apexdigital.cl", // Cambiar por tu correo real
    whatsapp: "+56912345678"       // Cambiar por tu WhatsApp real en formato internacional
  },
  services: [
    {
      id: "landing",
      title: "Landing Page de Alta Conversión",
      description: "Diseños de una sola página ultra rápidos y optimizados para campañas publicitarias (Google Ads, Meta Ads). Ideales para captar leads o promocionar un producto/servicio específico."
    },
    {
      id: "corporate",
      title: "Sitio Web Corporativo Profesional",
      description: "Múltiples secciones estructuradas para dar a conocer tu empresa, servicios, portafolio y canal de contacto. Incluye optimización SEO completa para posicionamiento en Google."
    },
    {
      id: "ecommerce",
      title: "Tienda Online (E-commerce)",
      description: "Plataformas de venta autoadministrables integradas con métodos de pago chilenos (Webpay, Flow). Control de stock, cupones de descuento y catálogo interactivo de productos."
    },
    {
      id: "custom",
      title: "Aplicaciones & Sistemas Web a Medida",
      description: "Desarrollo de software específico (sistemas de reserva, portales de clientes, automatizaciones). Soluciones robustas diseñadas a partir de tus requerimientos de negocio."
    }
  ],
  planner: {
    types: [
      { label: "Landing Page (Una página)", value: "landing" },
      { label: "Web Corporativa (Multisección)", value: "corporate" },
      { label: "Tienda Online (E-commerce)", value: "ecommerce" },
      { label: "Aplicación o Sistema a Medida", value: "custom" }
    ],
    features: [
      { label: "Integrar pasarelas de pago (Webpay/Flow)", value: "payments" },
      { label: "Formulario de contacto o cotización dinámico", value: "forms" },
      { label: "Panel autoadministrable (para subir contenido)", value: "admin" },
      { label: "Optimización SEO avanzada (Google)", value: "seo" },
      { label: "Sistema de reservas / agenda online", value: "booking" },
      { label: "Integración con redes sociales / WhatsApp", value: "social" }
    ],
    timeframes: [
      { label: "Urgente (menos de 2 semanas)", value: "urgent" },
      { label: "Plazo estándar (3 a 5 semanas)", value: "normal" },
      { label: "Flexible (+6 semanas)", value: "flexible" }
    ]
  }
};
