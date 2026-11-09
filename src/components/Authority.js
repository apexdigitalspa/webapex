import { config } from '../config.js';

export function Authority() {
  const principles = [
    {
      num: "01",
      title: "Hablamos en claro, sin rodeos técnicos",
      desc: "No necesitas saber de programación para trabajar con nosotros. Escuchamos cómo funciona tu negocio, te proponemos una solución práctica y te explicamos cada etapa en un lenguaje directo."
    },
    {
      num: "02",
      title: "Trato directo con quien programa tu proyecto",
      desc: "En muchas agencias hablas con un vendedor que nunca más ves después de pagar. En ApexDigital tratas directamente con el ingeniero a cargo de construir tu sistema, de principio a fin."
    },
    {
      num: "03",
      title: "Sistemas rápidos, estables y hechos para durar",
      desc: "Cuidamos la ingeniería detrás de cada proyecto: que cargue rápido en celulares, que tenga buena presencia en Google (SEO), que sea seguro y que no falle cuando más lo necesitas."
    }
  ];

  const rowsHtml = principles.map(p => `
    <div class="py-7 first:pt-0 last:pb-0 border-b last:border-b-0 border-slate-200 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
      <span class="font-heading font-extrabold text-2xl text-[#1E3A5F] shrink-0">
        ${p.num}.
      </span>
      <div>
        <h3 class="font-heading font-bold text-lg sm:text-xl text-[#0F172A] mb-2">
          ${p.title}
        </h3>
        <p class="text-slate-700 text-sm sm:text-base leading-relaxed">
          ${p.desc}
        </p>
      </div>
    </div>
  `).join('');

  return `
    <section id="enfoque" class="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <!-- Columna Izquierda: Sin kicker artificial arriba del h2 -->
          <div class="lg:col-span-5 space-y-5">
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-tight">
              Tecnología bien hecha, con compromiso real.
            </h2>

            <p class="text-slate-700 text-base leading-relaxed">
              Sabemos que encargar una página web o un software suele generar dudas: proyectos que quedan a medias, plazos que no se cumplen o soporte que desaparece.
            </p>

            <p class="text-slate-700 text-sm sm:text-base leading-relaxed">
              Desde <strong class="text-[#0F172A] font-semibold">${config.brand.location}</strong> trabajamos con empresas de todo Chile bajo una regla simple: <strong class="text-[#0F172A] font-semibold">comprometer solo lo que podemos cumplir con excelencia</strong> y acompañar a cada cliente como su socio tecnológico de&nbsp;confianza.
            </p>
          </div>

          <!-- Columna Derecha: Diseño Editorial en Filas -->
          <div class="lg:col-span-7 lg:pl-6 lg:border-l lg:border-slate-200">
            ${rowsHtml}
          </div>

        </div>

      </div>
    </section>
  `;
}
