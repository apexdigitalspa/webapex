import { config } from '../config.js';

export function Hero() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, busco asesoría para el desarrollo de un proyecto web / software a medida.')}`;

  return `
    <section id="inicio" class="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden apex-radial-glow">
      <!-- Luz ambiental técnica sutil -->
      <div class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-sky-500/10 blur-[130px] rounded-full"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          <!-- Columna Izquierda: Propuesta de Valor B2B -->
          <div class="lg:col-span-7 space-y-8 reveal-up">
            <!-- Insignia Técnica -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-500/[0.08] border border-sky-400/20 text-sky-300 text-xs font-mono uppercase tracking-widest">
              <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>Ingeniería de Software & Soluciones B2B</span>
            </div>

            <!-- Título Principal Obligatorio -->
            <h1 class="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white tracking-tight leading-[1.12]">
              Desarrollo de Software y <span class="text-apex-gradient">Páginas Web a Medida</span> para Empresas.
            </h1>

            <!-- Subtítulo Obligatorio -->
            <p class="text-lg sm:text-xl text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              Transformamos requerimientos complejos en plataformas digitales rápidas, seguras y escalables para potenciar negocios en Chile.
            </p>

            <!-- Llamado a la acción dual -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a 
                href="${whatsappUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-semibold text-white bg-apex-gradient shadow-[0_10px_30px_-5px_rgba(14,165,233,0.45)] hover:shadow-[0_15px_35px_-5px_rgba(56,189,248,0.65)] transition-all duration-200 border border-sky-300/25"
              >
                <span>Iniciar Proyecto por WhatsApp</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>

              <a 
                href="#servicios" 
                class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-sky-400/40 transition-all duration-200"
              >
                <span>Ver Soluciones</span>
              </a>
            </div>

            <!-- Métricas de Rigor Técnico -->
            <div class="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p class="font-heading font-bold text-2xl text-white">99.9%</p>
                <p class="text-xs text-slate-400 mt-0.5">Uptime & Estabilidad</p>
              </div>
              <div>
                <p class="font-heading font-bold text-2xl text-sky-400">&lt; 1.2s</p>
                <p class="text-xs text-slate-400 mt-0.5">Carga Core Web Vitals</p>
              </div>
              <div>
                <p class="font-heading font-bold text-2xl text-white">100%</p>
                <p class="text-xs text-slate-400 mt-0.5">Código a Medida</p>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Panel de Arquitectura e Identidad Corporativa (Cero ilustraciones infantiles) -->
          <div class="lg:col-span-5 reveal-up">
            <div class="apex-glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden">
              <!-- Cabecera de Terminal / Sistema -->
              <div class="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                  <span class="ml-2 text-xs font-mono text-slate-400">apex-core-architecture.ts</span>
                </div>
                <span class="px-2.5 py-0.5 text-[11px] font-mono rounded bg-sky-500/10 text-sky-400 border border-sky-400/20">
                  PRODUCTION READY
                </span>
              </div>

              <!-- Sello Visual del Logotipo + Telemetría -->
              <div class="flex items-center gap-4 p-4 rounded-xl bg-[#0B0F19]/90 border border-white/[0.06] mb-5">
                <img src="/logo-circle.jpg" alt="ApexDigital Logo Oficial" class="w-16 h-16 rounded-full object-cover border border-sky-400/30 shrink-0 shadow-md" />
                <div>
                  <div class="text-xs font-mono text-sky-400 uppercase tracking-wider">Infraestructura B2B</div>
                  <div class="text-base font-heading font-bold text-white mt-0.5">ApexDigital Engineering</div>
                  <div class="text-xs text-slate-400 mt-0.5">Puerto Montt · Cobertura Nacional Chile</div>
                </div>
              </div>

              <!-- Código de Ingeniería Realista -->
              <div class="rounded-xl bg-[#070A12] p-4 border border-white/[0.05] font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
<pre class="m-0"><code><span class="text-sky-400">export async function</span> <span class="text-white">deployEnterpriseSystem</span>(config) {
  <span class="text-slate-500">// Arquitectura modular &amp; segura</span>
  <span class="text-sky-400">const</span> cluster = <span class="text-sky-400">await</span> ApexCloud.<span class="text-sky-300">initialize</span>({
    region: <span class="text-amber-300">'cl-south-1'</span>,
    security: <span class="text-amber-300">'SSL-TLS-1.3 / OWASP'</span>,
    database: <span class="text-amber-300">'PostgreSQL-HA'</span>,
    vitalsScore: <span class="text-emerald-400">100</span>
  });

  <span class="text-sky-400">return</span> cluster.<span class="text-sky-300">scale</span>({ status: <span class="text-emerald-400">'ONLINE'</span> });
}</code></pre>
              </div>

              <!-- Indicadores de Estado de Ingeniería -->
              <div class="mt-5 grid grid-cols-2 gap-3 text-xs">
                <div class="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <span class="text-slate-400">Seguridad API</span>
                  <span class="font-mono text-emerald-400 font-medium">Encriptado</span>
                </div>
                <div class="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <span class="text-slate-400">Rendimiento SEO</span>
                  <span class="font-mono text-sky-400 font-medium">99 / 100</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
