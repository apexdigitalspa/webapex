import { config } from '../config.js';

export function Authority() {
  const reasons = [
    {
      title: "Enfoque de ingeniería informática real",
      desc: "No hacemos parches ni usamos plantillas pesadas que fallan al mes. Estructuramos cada proyecto con criterio técnico para que funcione de manera estable a largo plazo."
    },
    {
      title: "Código limpio y sitios rápidos",
      desc: "Cuidamos el rendimiento (Core Web Vitals) para que tu página cargue rápido tanto en computadores de oficina como en celulares, mejorando tu presencia en Google."
    },
    {
      title: "Comunicación directa sin intermediarios",
      desc: "Tratas directamente con quien diseña y programa tu sistema. Explicamos cada paso en un lenguaje claro, sin tecnicismos innecesarios y cumpliendo los plazos acordados."
    },
    {
      title: "Transparencia y acompañamiento",
      desc: "Te asesoramos honestamente sobre qué tecnología conviene más para el tamaño actual de tu empresa, evitando gastos innecesarios."
    }
  ];

  const reasonsHtml = reasons.map(r => `
    <div class="clean-card p-6 sm:p-7">
      <h3 class="font-heading font-bold text-base sm:text-lg text-slate-900 mb-2">
        ${r.title}
      </h3>
      <p class="text-sm text-slate-600 leading-relaxed">
        ${r.desc}
      </p>
    </div>
  `).join('');

  return `
    <section id="enfoque" class="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div class="lg:col-span-5">
            <p class="text-xs font-semibold uppercase tracking-widest text-sky-700 mb-2">
              Sobre nuestro trabajo
            </p>
            <h2 class="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-snug">
              ¿Por qué trabajar con ApexDigital?
            </h2>
            <p class="mt-4 text-slate-600 text-base leading-relaxed">
              En <strong class="text-slate-900 font-semibold">${config.brand.name}</strong> creemos que la tecnología debe simplificar el trabajo de las empresas, no complicarlo.
            </p>
            <p class="mt-3 text-slate-600 text-sm leading-relaxed">
              Desde <strong class="text-slate-800 font-medium">${config.brand.location}</strong> apoyamos a pymes, profesionales y empresas de todo Chile que buscan un socio tecnológico responsable, cercano y comprometido con entregar un buen resultado.
            </p>
          </div>

          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            ${reasonsHtml}
          </div>

        </div>

      </div>
    </section>
  `;
}
