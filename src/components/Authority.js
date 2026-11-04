import { config } from '../config.js';

export function Authority() {
  const pillars = [
    {
      title: "Ingeniería informática real, sin plantillas genéricas",
      desc: "Construimos software bien estructurado desde la base. Eso se traduce en plataformas estables que no se caen ni quedan obsoletas a los pocos meses."
    },
    {
      title: "Velocidad y rendimiento (Core Web Vitals)",
      desc: "Optimizamos cada detalle para que tu sitio web o sistema cargue de forma instantánea en celulares y computadores, mejorando tu posicionamiento en Google."
    },
    {
      title: "Trato humano y directo sin intermediarios",
      desc: "Te comunicas directamente con el ingeniero responsable de tu proyecto. Sin vendedores que prometen cosas irreales ni burocracia innecesaria."
    },
    {
      title: "Seguridad y propiedad total de tu plataforma",
      desc: "Aplicamos protocolos modernos de seguridad y al finalizar te entregamos el control total de tu dominio, tus accesos y tu sistema."
    }
  ];

  const pillarsHtml = pillars.map(p => `
    <div class="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
      <h3 class="font-heading font-bold text-lg text-[#0F172A] mb-2">
        ${p.title}
      </h3>
      <p class="text-sm text-slate-600 leading-relaxed">
        ${p.desc}
      </p>
    </div>
  `).join('');

  return `
    <section id="enfoque" class="py-20 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Columna Izquierda: Respaldo de Marca e Identidad -->
          <div class="lg:col-span-5 space-y-5">
            <div class="inline-flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-[#0F172A] p-2 flex items-center justify-center">
                <img src="/a-circuit.png" alt="Isotipo A Circuito" class="w-full h-full object-contain" />
              </div>
              <span class="text-xs font-bold uppercase tracking-widest text-[#1E3A5F]">
                Respaldo &amp; Compromiso Técnico
              </span>
            </div>

            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-tight">
              ¿Por qué confiar el proyecto de tu empresa a ApexDigital?
            </h2>

            <p class="text-slate-600 text-base leading-relaxed">
              Sabemos que para un gerente o dueño de empresa lo más importante es la <strong class="text-[#0F172A] font-semibold">confianza, el cumplimiento de los plazos y que el sistema funcione sin dar problemas</strong>.
            </p>

            <p class="text-slate-600 text-sm leading-relaxed">
              Desde <strong class="text-[#0F172A] font-semibold">${config.brand.location}</strong> trabajamos con empresas de todo Chile entregando soluciones tecnológicas sobrias, bien documentadas y con acompañamiento directo en cada etapa.
            </p>
          </div>

          <!-- Columna Derecha: 4 Tarjetas Limpias -->
          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            ${pillarsHtml}
          </div>

        </div>

      </div>
    </section>
  `;
}
