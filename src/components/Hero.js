import { config } from '../config.js';

export function Hero() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('Hola ApexDigital, les escribo desde su web porque queremos evaluar un proyecto para nuestra empresa.')}`;

  return `
    <section id="inicio" class="relative bg-executive-steel text-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Composición Arquitectónica Asimétrica (7 columnas + 5 columnas) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          <!-- Columna Principal: Propuesta de Valor y Acción (6 cols en lg para dar espacio amplio al showcase visual) -->
          <div class="lg:col-span-6">
            <h1 class="hero-stagger-1 font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3rem] text-white tracking-tight leading-[1.13]">
              Ingeniería de software, páginas web y aplicaciones móviles para empresas en Chile.
            </h1>

            <p class="hero-stagger-2 mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              Desde <strong class="text-white font-semibold">${config.brand.location}</strong>, diseñamos y programamos herramientas digitales sobrias, rápidas y hechas a la medida de tu operación: desde tu sitio web corporativo hasta sistemas internos con base de datos y aplicaciones para Android e&nbsp;iOS.
            </p>

            <!-- Botones de Acción con respuesta física (btn-tactile) -->
            <div class="hero-stagger-3 mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="${whatsappUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-tactile inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg text-base font-semibold text-[#0B1120] bg-white hover:bg-slate-100 shadow-lg"
              >
                <span>Conversar proyecto por WhatsApp</span>
                <svg class="w-4 h-4 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>

              <a 
                href="#servicios" 
                class="btn-tactile inline-flex items-center justify-center px-7 py-4 rounded-lg text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-600"
              >
                <span>Revisar catálogo de soluciones</span>
              </a>
            </div>

            <!-- Microcopy de reducción de fricción -->
            <p class="hero-stagger-3 mt-4 text-xs sm:text-sm text-slate-300">
              Trato directo con quien programa tu proyecto · Evaluación técnica sin costo.
            </p>
          </div>

          <!-- Columna Derecha: Composición Original ApexDigital (Web Corporativa + Sistema de Gestión + App Móvil) -->
          <div class="lg:col-span-6 hero-stagger-4">
            <div class="relative mx-auto max-w-[580px] lg:max-w-none h-[460px] sm:h-[520px] select-none" aria-label="Muestra de proyectos de ApexDigital: Sitio web corporativo, sistema de gestión de inventario y aplicación móvil">
              
              <!-- 1. VENTANA PRINCIPAL (Arriba Derecha: Web Corporativa de Logística & Maquinaria del Sur) -->
              <div class="absolute top-0 right-0 left-[14%] sm:left-[18%] rounded-xl overflow-hidden shadow-2xl border border-slate-700/90 bg-[#0B1120] z-10">
                <!-- Barra de navegador -->
                <div class="bg-[#1E293B] px-3.5 py-2 flex items-center justify-between border-b border-slate-700">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                  </div>
                  <div class="bg-[#0F172A] px-3 py-0.5 rounded text-[10px] font-medium text-slate-300 border border-slate-700/80">
                    maquinariasur.cl
                  </div>
                  <span class="w-6"></span>
                </div>

                <!-- Navbar interna del sitio web -->
                <div class="bg-[#0F172A] px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-4 bg-[#38BDF8] rounded-xs"></span>
                    <span class="font-heading font-extrabold text-[10px] sm:text-[11px] text-white tracking-wider">MAQUINARIA<span class="text-[#38BDF8]">SUR</span></span>
                  </div>
                  <div class="hidden sm:flex items-center gap-3.5 text-[8.5px] font-semibold text-slate-300">
                    <span>Flota</span>
                    <span>Arriendo</span>
                    <span>Proyectos</span>
                    <span>Contacto</span>
                  </div>
                  <span class="bg-[#38BDF8] text-[#0B1120] text-[8px] font-bold px-2.5 py-1 rounded"> Reserva en Línea </span>
                </div>

                <!-- Hero de la Web Corporativa -->
                <div class="relative px-5 sm:px-7 py-6 sm:py-8 bg-gradient-to-br from-[#0B1120] via-[#172554] to-[#0F172A] text-white min-h-[220px] sm:min-h-[255px]">
                  <span class="inline-block px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-[7.5px] font-semibold text-[#38BDF8] uppercase tracking-wider mb-2">
                    Arriendo de Equipos · Puerto Montt a Chiloé
                  </span>
                  <p class="font-heading font-extrabold text-sm sm:text-lg leading-snug text-white max-w-[88%]">
                    Maquinaria pesada y logística operativa para obras civiles e industria
                  </p>
                  <p class="mt-2 text-[9px] sm:text-[10.5px] text-slate-300 leading-relaxed max-w-[85%]">
                    Catálogo con disponibilidad en tiempo real, cotizador automático para empresas y seguimiento de flota en faena.
                  </p>
                  <div class="mt-4 flex items-center gap-2">
                    <span class="bg-white text-[#0B1120] text-[8.5px] sm:text-[9.5px] font-bold px-3 py-1.5 rounded">Ver catálogo disponible</span>
                    <span class="bg-slate-800/90 border border-slate-600 text-slate-200 text-[8.5px] sm:text-[9.5px] font-semibold px-2.5 py-1.5 rounded">Ficha técnica PDF</span>
                  </div>
                </div>
              </div>

              <!-- 2. PANEL DE SOFTWARE A MEDIDA (Abajo Derecha: Sistema de Gestión / Inventario & Órdenes) -->
              <div class="absolute bottom-2 right-0 w-[62%] sm:w-[60%] rounded-xl overflow-hidden shadow-2xl border border-slate-600/90 bg-white text-slate-900 z-20">
                <!-- Cabecera del Panel de Gestión -->
                <div class="bg-[#0F172A] text-white px-3.5 py-2.5 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                    <span class="font-heading font-bold text-[9.5px] sm:text-[11px] tracking-tight">Panel de Operaciones y Bodega</span>
                  </div>
                  <span class="text-[8px] font-semibold bg-slate-800 text-slate-200 px-2 py-0.5 rounded border border-slate-700">Sincronizado</span>
                </div>

                <!-- Cuerpo del Dashboard -->
                <div class="p-3.5 sm:p-4 bg-[#F8FAFC]">
                  <!-- Indicadores rápidos -->
                  <div class="grid grid-cols-3 gap-2 mb-3">
                    <div class="bg-white p-2 rounded-lg border border-slate-200">
                      <p class="text-[7.5px] text-slate-500 font-semibold uppercase">Despachos Hoy</p>
                      <p class="font-heading font-extrabold text-xs sm:text-sm text-slate-900 mt-0.5">24 activos</p>
                    </div>
                    <div class="bg-white p-2 rounded-lg border border-slate-200">
                      <p class="text-[7.5px] text-slate-500 font-semibold uppercase">Stock Crítico</p>
                      <p class="font-heading font-extrabold text-xs sm:text-sm text-[#15803D] mt-0.5">99.2% OK</p>
                    </div>
                    <div class="bg-white p-2 rounded-lg border border-slate-200">
                      <p class="text-[7.5px] text-slate-500 font-semibold uppercase">Ventas Mes</p>
                      <p class="font-heading font-extrabold text-xs sm:text-sm text-[#1E3A8A] mt-0.5">+38% mes</p>
                    </div>
                  </div>

                  <!-- Filas de órdenes recientes -->
                  <div class="bg-white rounded-lg border border-slate-200 divide-y divide-slate-100 text-[8.5px] sm:text-[9.5px]">
                    <div class="px-2.5 py-2 flex items-center justify-between">
                      <span class="font-semibold text-slate-800">Orden #4092 · Planta Salmones</span>
                      <span class="px-1.5 py-0.5 rounded bg-[#DCFCE7] text-[#166534] font-bold text-[7.5px]">Entregado</span>
                    </div>
                    <div class="px-2.5 py-2 flex items-center justify-between">
                      <span class="font-semibold text-slate-800">Orden #4093 · Bodega Central</span>
                      <span class="px-1.5 py-0.5 rounded bg-[#DBEAFE] text-[#1E40AF] font-bold text-[7.5px]">En ruta</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 3. SMARTPHONE EN PRIMER PLANO CON PROPORCIÓN REAL DE TELÉFONO (Izquierda, alto y estilizado) -->
              <div class="absolute bottom-0 left-0 w-[195px] sm:w-[228px] h-[380px] sm:h-[430px] rounded-[2.25rem] bg-[#090D16] p-2.5 shadow-2xl border-2 border-slate-600/90 z-30 flex flex-col">
                
                <!-- Pantalla interna vertical completa -->
                <div class="bg-[#F8FAFC] rounded-[1.75rem] overflow-hidden text-slate-900 flex-1 flex flex-col justify-between">
                  
                  <!-- Parte superior: Barra de estado + Header de la App -->
                  <div>
                    <!-- Barra de estado + Isla dinámica del teléfono -->
                    <div class="bg-[#0F172A] text-white px-4 pt-2 pb-1 flex items-center justify-between text-[8px] font-semibold">
                      <span>09:41</span>
                      <span class="w-12 h-3 rounded-full bg-black"></span>
                      <span>5G · 100%</span>
                    </div>

                    <!-- Cabecera de la App Móvil -->
                    <div class="bg-[#0F172A] text-white pt-2 pb-3.5 px-3.5 border-b border-slate-800">
                      <div class="flex items-center justify-between">
                        <span class="text-[8px] font-bold uppercase tracking-wider text-[#38BDF8]">App Android &amp; iOS</span>
                        <span class="inline-flex items-center gap-1 text-[8px] text-[#4ADE80] font-semibold">
                          <span class="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span> En línea
                        </span>
                      </div>
                      <p class="font-heading font-bold text-xs sm:text-sm text-white mt-0.5">Control en Terreno</p>
                      <p class="text-[8.5px] text-slate-300">Sincronizado con bodega central</p>
                    </div>

                    <!-- Tarjetas operativas dentro de la pantalla del celular -->
                    <div class="p-3 space-y-2.5">
                      <!-- Tarjeta 1: Orden activa -->
                      <div class="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                        <div class="flex items-center justify-between">
                          <span class="text-[8px] font-bold text-[#1E3A8A] bg-[#DBEAFE] px-2 py-0.5 rounded">Ruta #18</span>
                          <span class="text-[8px] font-semibold text-slate-500">10:45 hrs</span>
                        </div>
                        <p class="font-bold text-[10px] sm:text-[11px] text-slate-900 mt-1.5">Inspección y Entrega</p>
                        <p class="text-[8.5px] text-slate-600 mt-0.5">Puerto Montt · Sector Industrial</p>
                      </div>

                      <!-- Tarjeta 2: Checklist / Inventario -->
                      <div class="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                        <div>
                          <p class="text-[8px] text-slate-500 font-semibold uppercase">Guía de Despacho</p>
                          <p class="text-[9.5px] sm:text-[10px] font-bold text-slate-900 mt-0.5">Equipos verificados (12/12)</p>
                        </div>
                        <span class="w-5 h-5 rounded-full bg-[#DBEAFE] text-[#1E3A8A] flex items-center justify-center font-bold text-[10px] shrink-0">✓</span>
                      </div>

                      <!-- Tarjeta 3: Estado de Firma / PDF -->
                      <div class="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                        <div>
                          <p class="text-[8px] text-slate-500 font-semibold uppercase">Reporte Cliente PDF</p>
                          <p class="text-[9.5px] sm:text-[10px] font-bold text-[#15803D] mt-0.5">Firmado y enviado</p>
                        </div>
                        <span class="w-5 h-5 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-bold text-[10px] shrink-0">✓</span>
                      </div>
                    </div>
                  </div>

                  <!-- Parte inferior: Botón de acción + Barra gestual del teléfono -->
                  <div class="px-3 pb-2 pt-1 bg-white border-t border-slate-200/80">
                    <div class="bg-[#0F172A] text-white text-center py-2 rounded-xl text-[9px] sm:text-[10px] font-bold tracking-wide shadow-xs">
                      + Registrar nueva orden
                    </div>
                    <div class="w-16 h-1 rounded-full bg-slate-300 mx-auto mt-2"></div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
