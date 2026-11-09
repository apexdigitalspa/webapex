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

          <!-- Columna Derecha: Composición Visual Multi-Dispositivo (2 Webs Empresas del Sur + Celular en línea) -->
          <div class="lg:col-span-6 hero-stagger-4">
            <div class="relative mx-auto max-w-[560px] lg:max-w-none h-[390px] sm:h-[450px] select-none" aria-label="Muestra visual de sitios web corporativos y asistente móvil desarrollados por ApexDigital">
              
              <!-- 1. VENTANA WEB PRINCIPAL (Fondo Arriba/Centro: Empresa Submarina ROV) -->
              <div class="absolute top-0 left-[6%] sm:left-[10%] right-[4%] sm:right-[6%] rounded-xl overflow-hidden shadow-2xl border border-slate-700/80 bg-white">
                <!-- Barra de navegador macOS -->
                <div class="bg-[#E2E8F0] px-3.5 py-2 flex items-center gap-3 border-b border-slate-300">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                  </div>
                  <span class="text-[11px] font-medium text-slate-600 tracking-tight">verticalrov.cl</span>
                </div>

                <!-- Topbar oscura del sitio ROV -->
                <div class="bg-[#090D16] text-slate-300 px-4 py-1 flex items-center justify-between text-[8px] sm:text-[9px]">
                  <span>+56 9 4662 5167 &nbsp;|&nbsp; contacto@verticalrov.cl</span>
                  <span class="hidden sm:inline text-white font-medium">Escríbenos por WhatsApp</span>
                </div>

                <!-- Navbar blanca del sitio ROV -->
                <div class="bg-white px-4 py-2.5 flex items-center justify-between border-b border-slate-100">
                  <div class="flex items-center gap-1">
                    <span class="bg-[#0F172A] text-white font-heading font-extrabold text-[9px] sm:text-[10px] px-1.5 py-0.5 tracking-wider">VERTICAL</span>
                    <span class="text-[#0F172A] font-heading font-bold text-[9px] sm:text-[10px] border border-slate-800 px-1.5 py-0.5 tracking-wider">ROV</span>
                  </div>
                  <div class="hidden sm:flex items-center gap-3 text-[8px] font-bold text-slate-700 tracking-wider">
                    <span>INICIO</span>
                    <span>NOSOTROS</span>
                    <span>SERVICIOS</span>
                    <span>EQUIPOS</span>
                    <span>CLIENTES</span>
                  </div>
                  <span class="bg-[#1E3A8A] text-white text-[8px] font-bold px-2.5 py-1 rounded-sm tracking-wider">COTIZAR</span>
                </div>

                <!-- Hero submarino del sitio ROV -->
                <div class="relative px-5 sm:px-7 py-6 sm:py-8 bg-gradient-to-br from-[#0F293A] via-[#134E4A] to-[#0A1E2E] text-white overflow-hidden min-h-[215px] sm:min-h-[250px]">
                  <!-- Efecto de luz submarina sutil -->
                  <div class="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_20%,#38BDF8,transparent_60%)]"></div>
                  <div class="relative z-10 max-w-[72%]">
                    <p class="font-heading font-extrabold text-base sm:text-xl leading-[1.15] tracking-tight text-white">
                      Inspecciones y Trabajos Submarinos con ROV
                    </p>
                    <div class="w-24 h-0.5 bg-white/80 my-2.5"></div>
                    <p class="text-[10px] sm:text-xs italic font-semibold text-slate-100">
                      Remotely Operated Vehicle
                    </p>
                    <p class="mt-1.5 text-[8.5px] sm:text-[10px] text-slate-200 leading-relaxed">
                      Operaciones submarinas profesionales para acuicultura, minería y obras marítimas con registro en video e informe técnico.
                    </p>
                  </div>
                </div>
              </div>

              <!-- 2. VENTANA WEB SECUNDARIA (Abajo Izquierda: Seguridad Los Lagos) -->
              <div class="absolute bottom-2 left-0 w-[60%] sm:w-[56%] rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-[#0F172A] z-20">
                <!-- Barra de navegador macOS -->
                <div class="bg-[#E2E8F0] px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-300">
                  <span class="w-2 h-2 rounded-full bg-slate-400"></span>
                  <span class="w-2 h-2 rounded-full bg-slate-400"></span>
                  <span class="w-2 h-2 rounded-full bg-slate-400"></span>
                </div>

                <!-- Navbar interna Seguridad Los Lagos -->
                <div class="bg-[#0B1120] px-3 py-2 flex items-center justify-between border-b border-slate-800">
                  <div class="flex items-center gap-1.5">
                    <span class="w-3.5 h-3.5 rounded-full bg-[#2563EB] inline-flex items-center justify-center text-[7px] font-bold text-white">S</span>
                    <span class="text-[8px] font-bold text-white tracking-tight">Seguridad <span class="text-[#60A5FA]">Los Lagos</span></span>
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="bg-[#16A34A] text-white text-[6.5px] font-semibold px-1.5 py-0.5 rounded">WhatsApp</span>
                    <span class="bg-[#2563EB] text-white text-[6.5px] font-semibold px-1.5 py-0.5 rounded hidden sm:inline">Solicitar cotización</span>
                  </div>
                </div>

                <!-- Hero Seguridad Los Lagos -->
                <div class="relative p-3.5 sm:p-4 bg-gradient-to-br from-[#0B132B] via-[#1E293B] to-[#0F172A] text-white">
                  <span class="inline-block px-2 py-0.5 rounded-full bg-[#1E3A8A]/80 border border-[#3B82F6]/40 text-[6.5px] text-slate-200 tracking-wider uppercase mb-1.5">
                    Seguridad Privada · Región de los Lagos
                  </span>
                  <p class="font-heading font-extrabold text-xs sm:text-sm leading-tight text-white">
                    Protegemos lo que más <span class="text-[#60A5FA]">importa para su empresa</span>
                  </p>
                  <p class="mt-1.5 text-[7.5px] sm:text-[8.5px] text-slate-300 leading-relaxed">
                    Guardias de seguridad, supervisión 24/7, control de acceso y resguardo industrial en la Región de los Lagos.
                  </p>
                  <div class="mt-2.5 flex items-center gap-1.5">
                    <span class="bg-[#2563EB] text-white text-[7px] font-semibold px-2 py-1 rounded">Solicitar cotización</span>
                    <span class="border border-slate-600 text-slate-200 text-[7px] font-medium px-2 py-1 rounded">Contactar por WhatsApp</span>
                  </div>
                </div>
              </div>

              <!-- 3. CELULAR CON ASISTENTE EN LÍNEA (Abajo Derecha) -->
              <div class="absolute bottom-0 right-0 w-[44%] sm:w-[40%] max-w-[215px] rounded-[1.75rem] sm:rounded-[2rem] bg-[#090D16] p-2 sm:p-2.5 shadow-2xl border border-slate-700 z-30">
                <!-- Notch superior del teléfono -->
                <div class="w-14 sm:w-16 h-3 bg-[#090D16] rounded-b-xl mx-auto relative z-10 -mb-1.5"></div>
                
                <!-- Pantalla blanca del teléfono -->
                <div class="bg-[#F8FAFC] rounded-[1.35rem] sm:rounded-[1.5rem] overflow-hidden text-slate-900">
                  
                  <!-- Cabecera del Asistente -->
                  <div class="bg-white pt-4 pb-2.5 px-3 sm:px-3.5 border-b border-slate-200 flex items-center gap-2.5">
                    <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2563EB] shrink-0 flex items-center justify-center text-white font-heading font-bold text-[10px]">
                      AD
                    </div>
                    <div class="leading-tight">
                      <p class="font-heading font-bold text-[10px] sm:text-[11px] text-slate-900">Asistente</p>
                      <p class="font-heading font-bold text-[10px] sm:text-[11px] text-slate-900">ApexDigital</p>
                      <p class="text-[8.5px] sm:text-[9px] font-semibold text-[#15803D] mt-0.5">En línea</p>
                    </div>
                  </div>

                  <!-- Conversación de Chat -->
                  <div class="p-2.5 sm:p-3 space-y-2 bg-[#F1F5F9]/70 min-h-[185px] sm:min-h-[215px] flex flex-col justify-center">
                    <!-- Mensaje 1: Asistente -->
                    <div class="bg-white border border-slate-200/80 rounded-xl rounded-tl-sm p-2 sm:p-2.5 shadow-sm max-w-[92%]">
                      <p class="text-[8.5px] sm:text-[10px] text-slate-800 leading-snug">
                        Hola 👋 ¿En qué podemos ayudarte?
                      </p>
                    </div>

                    <!-- Mensaje 2: Cliente -->
                    <div class="bg-[#DBEAFE] rounded-xl rounded-tr-sm p-2 sm:p-2.5 shadow-sm max-w-[92%] self-end">
                      <p class="text-[8.5px] sm:text-[10px] text-[#1E3A8A] font-medium leading-snug">
                        Necesito una página para mi empresa.
                      </p>
                    </div>

                    <!-- Mensaje 3: Asistente -->
                    <div class="bg-white border border-slate-200/80 rounded-xl rounded-tl-sm p-2 sm:p-2.5 shadow-sm max-w-[94%]">
                      <p class="text-[8.5px] sm:text-[10px] text-slate-800 leading-snug">
                        Podemos ayudarte con diseño web, sistemas, apps y automatización.
                      </p>
                    </div>
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
