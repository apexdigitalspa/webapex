import { config } from '../config.js';

export function Hero() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, me gustaría agendar una breve conversación sobre un requerimiento de software / web para nuestra empresa.')}`;

  return `
    <section id="inicio" class="relative pt-32 pb-20 lg:pt-44 lg:pb-28 border-b border-white/[0.08]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          <!-- Columna Izquierda: Discurso Ejecutivo y Propuesta de Valor -->
          <div class="lg:col-span-7 space-y-7 reveal-up">
            
            <!-- Índice Editorial (Estilo consultora boutique) -->
            <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-sky-400">
              <span>00 // FIRMA DE INGENIERÍA DE SOFTWARE</span>
              <span class="w-8 h-[1px] bg-sky-400/40"></span>
              <span class="text-slate-400">CHILE</span>
            </div>

            <!-- Título Principal Obligatorio -->
            <h1 class="font-heading font-bold text-3xl sm:text-5xl lg:text-[3.35rem] text-white tracking-tight leading-[1.12]">
              Desarrollo de Software y Páginas Web a Medida para Empresas.
            </h1>

            <!-- Subtítulo Obligatorio -->
            <p class="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
              Transformamos requerimientos complejos en plataformas digitales rápidas, seguras y escalables para potenciar negocios en Chile.
            </p>

            <!-- Contexto Ejecutivo Humano -->
            <p class="text-sm text-slate-400 leading-relaxed max-w-xl border-l-2 border-sky-500/50 pl-4">
              Acompañamos a gerencias, equipos de operaciones y empresas en crecimiento que requieren sistemas confiables, bien documentados y diseñados para durar, sin las limitaciones de las agencias de marketing tradicionales.
            </p>

            <!-- Llamado a la Acción Dual -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a 
                href="${whatsappUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-executive-primary inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md text-sm font-semibold tracking-wide"
              >
                <span>Conversar con Ingeniería por WhatsApp</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>

              <a 
                href="#servicios" 
                class="btn-executive-secondary inline-flex items-center justify-center px-7 py-4 rounded-md text-sm font-semibold tracking-wide"
              >
                <span>Ver Soluciones</span>
              </a>
            </div>
          </div>

          <!-- Columna Derecha: Ficha de Arquitectura & Estándar de Entrega (Serio, Ejecutivo, Realista) -->
          <div class="lg:col-span-5 reveal-up">
            <div class="executive-panel rounded-lg overflow-hidden">
              
              <!-- Encabezado de Ficha Técnica -->
              <div class="px-6 py-4 bg-[#0B0F19] border-b border-white/[0.08] flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <img src="/logo-circle.jpg" alt="ApexDigital" class="w-8 h-8 rounded-full object-cover border border-white/15" />
                  <div>
                    <h2 class="text-xs font-mono uppercase tracking-wider text-white font-semibold">Estándar de Ejecución Técnica</h2>
                    <p class="text-[11px] text-slate-400">Protocolo corporativo ApexDigital</p>
                  </div>
                </div>
                <span class="text-[11px] font-mono text-sky-400 bg-sky-500/10 border border-sky-400/20 px-2.5 py-0.5 rounded">
                  B2B · CHILE
                </span>
              </div>

              <!-- Cuerpo de Ficha: 3 Etapas Reales de Trabajo con Gerencia -->
              <div class="p-6 divide-y divide-white/[0.07]">
                
                <div class="pb-4">
                  <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>FASE I · LEVANTAMIENTO</span>
                    <span class="text-sky-400">Semana 1</span>
                  </div>
                  <h3 class="text-sm font-heading font-bold text-white">Diagnóstico Operativo y Alcance</h3>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed">
                    Definición formal de requerimientos, reglas de negocio, arquitectura de datos y plazos cerrados por contrato antes de iniciar el desarrollo.
                  </p>
                </div>

                <div class="py-4">
                  <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>FASE II · INGENIERÍA</span>
                    <span class="text-sky-400">Desarrollo Iterativo</span>
                  </div>
                  <h3 class="text-sm font-heading font-bold text-white">Construcción Modular y Entorno de Pruebas</h3>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed">
                    Acceso a un servidor privado de pre-producción para que tu equipo revise avances reales en tiempo real, con validaciones de seguridad y rendimiento.
                  </p>
                </div>

                <div class="pt-4">
                  <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>FASE III · PUESTA EN MARCHA</span>
                    <span class="text-emerald-400">Entrega Llave en Mano</span>
                  </div>
                  <h3 class="text-sm font-heading font-bold text-white">Despliegue, Propiedad del Código y Soporte</h3>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed">
                    Paso a producción sin interrumpir tu operación actual. Entrega íntegra de accesos, código fuente y acompañamiento técnico continuo.
                  </p>
                </div>

              </div>

              <!-- Pie de Ficha -->
              <div class="px-6 py-3.5 bg-[#0B0F19]/80 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span class="text-slate-400">Trato directo con ingeniería</span>
                <span class="font-mono text-slate-200">${config.brand.location}</span>
              </div>

            </div>
          </div>

        </div>

        <!-- Barra Inferior de Compromisos Ejecutivos (Reemplaza las métricas falsas de IA) -->
        <div class="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p class="text-xs font-mono uppercase tracking-wider text-sky-400 mb-1">01 / Propiedad Intelectual</p>
            <p class="text-sm font-heading font-semibold text-white">100% Titularidad del Cliente</p>
            <p class="text-xs text-slate-400 mt-1">Sin licencias mensuales atadas ni dependencia forzada de proveedor.</p>
          </div>
          <div>
            <p class="text-xs font-mono uppercase tracking-wider text-sky-400 mb-1">02 / Rendimiento Técnico</p>
            <p class="text-sm font-heading font-semibold text-white">Optimización Core Web Vitals</p>
            <p class="text-xs text-slate-400 mt-1">Tiempos de respuesta inmediatos en equipos de escritorio y móviles.</p>
          </div>
          <div>
            <p class="text-xs font-mono uppercase tracking-wider text-sky-400 mb-1">03 / Interlocución</p>
            <p class="text-sm font-heading font-semibold text-white">Sin Vendedores Intermediarios</p>
            <p class="text-xs text-slate-400 mt-1">Comunicación directa con quien diseña y programa tu plataforma.</p>
          </div>
          <div>
            <p class="text-xs font-mono uppercase tracking-wider text-sky-400 mb-1">04 / Escalabilidad</p>
            <p class="text-sm font-heading font-semibold text-white">Arquitectura Preparada</p>
            <p class="text-xs text-slate-400 mt-1">Código estructurado para crecer en módulos y volumen de usuarios.</p>
          </div>
        </div>

      </div>
    </section>
  `;
}
