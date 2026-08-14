import { config } from '../config.js';

function getPlannerIcon(type, val) {
  const size = 26;
  const strokeWidth = 1.8;
  
  if (type === 'type') {
    switch (val) {
      case 'landing':
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        `;
      case 'corporate':
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        `;
      case 'ecommerce':
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        `;
      case 'custom':
        return `
          <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="15" x2="23" y2="15"></line>
          </svg>
        `;
    }
  }

  if (type === 'feature') {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 16 16 12 12 8"></polyline>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    `;
  }

  if (type === 'timeframe') {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    `;
  }

  return '';
}

export function ProjectPlanner() {
  const typeOptions = config.planner.types.map(t => `
    <div class="option-card" data-type="radio" data-name="project-type" data-value="${t.value}">
      <input type="radio" name="project-type" value="${t.value}">
      <div class="option-icon" style="color: var(--secondary-color);">${getPlannerIcon('type', t.value)}</div>
      <span class="option-label">${t.label}</span>
    </div>
  `).join('');

  const featureOptions = config.planner.features.map(f => `
    <div class="option-card" data-type="checkbox" data-name="project-features" data-value="${f.value}">
      <input type="checkbox" name="project-features" value="${f.value}">
      <div class="option-icon" style="color: var(--primary-color);">${getPlannerIcon('feature', f.value)}</div>
      <span class="option-label">${f.label}</span>
    </div>
  `).join('');

  const timeframeOptions = config.planner.timeframes.map(tf => `
    <div class="option-card" data-type="radio" data-name="project-timeframe" data-value="${tf.value}">
      <input type="radio" name="project-timeframe" value="${tf.value}">
      <div class="option-icon" style="color: var(--secondary-color);">${getPlannerIcon('timeframe', tf.value)}</div>
      <span class="option-label">${tf.label}</span>
    </div>
  `).join('');

  return `
    <section id="planificador">
      <div class="container">
        <div class="section-header animate-fade-in">
          <span class="section-tag">Planificador Interactivo</span>
          <h2 class="section-title">Diseña tu Sitio Web</h2>
          <p class="section-subtitle">
            Cuéntanos qué necesitas y estructuraremos una propuesta técnica a la medida de tu proyecto, sin compromisos.
          </p>
        </div>

        <div class="planner-card glass animate-fade-in">
          <!-- Indicadores de Pasos -->
          <div class="step-indicator">
            <div class="indicator-line" id="indicator-line"></div>
            <div class="step-dot active" data-step="1">1</div>
            <div class="step-dot" data-step="2">2</div>
            <div class="step-dot" data-step="3">3</div>
            <div class="step-dot" data-step="4">4</div>
          </div>

          <!-- Paso 1: Tipo de Proyecto -->
          <div class="planner-step active" data-step="1">
            <h3 class="planner-title">¿Qué tipo de sitio web necesitas?</h3>
            <p class="planner-subtitle">Elige la opción que mejor se ajuste a tu objetivo actual.</p>
            <div class="options-grid">
              ${typeOptions}
            </div>
          </div>

          <!-- Paso 2: Funcionalidades -->
          <div class="planner-step" data-step="2">
            <h3 class="planner-title">¿Qué funcionalidades requieres?</h3>
            <p class="planner-subtitle">Selecciona todas las características que consideres clave para tu proyecto.</p>
            <div class="options-grid">
              ${featureOptions}
            </div>
          </div>

          <!-- Paso 3: Detalles y Plazos -->
          <div class="planner-step" data-step="3">
            <h3 class="planner-title">Detalles adicionales del Proyecto</h3>
            <p class="planner-subtitle">Ayúdanos a entender el contexto de tu marca o negocio.</p>
            
            <div class="options-grid" style="margin-bottom: 1.5rem;">
              ${timeframeOptions}
            </div>

            <div class="form-group">
              <label class="form-label" for="project-desc">Cuéntanos un poco sobre tu idea o negocio</label>
              <textarea id="project-desc" class="form-control" rows="4" placeholder="Ej: Quiero vender ropa deportiva y necesito que se conecte con Webpay. También me gustaría poder subir fotos de nuevos productos yo mismo..."></textarea>
            </div>

            <div class="form-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div>
                <label class="form-label" for="client-name">Tu Nombre</label>
                <input type="text" id="client-name" class="form-control" placeholder="Juan Pérez">
              </div>
              <div>
                <label class="form-label" for="client-email">Correo de Contacto</label>
                <input type="email" id="client-email" class="form-control" placeholder="juan@ejemplo.cl">
              </div>
            </div>
          </div>

          <!-- Paso 4: Resumen y Contacto -->
          <div class="planner-step" data-step="4">
            <h3 class="planner-title">¡Todo listo! Revisa tu resumen</h3>
            <p class="planner-subtitle">Confirmaremos la viabilidad técnica de tu proyecto a la brevedad.</p>
            
            <div class="summary-container">
              <div class="summary-item">
                <span class="summary-label">Tipo de Web:</span>
                <span class="summary-value" id="sum-type">No seleccionado</span>
              </div>
              <div class="summary-item">
                <span class="summary-label">Funcionalidades:</span>
                <span class="summary-value" id="sum-features">Ninguna</span>
              </div>
              <div class="summary-item">
                <span class="summary-label">Plazo estimado:</span>
                <span class="summary-value" id="sum-timeframe">No especificado</span>
              </div>
              <div class="summary-item">
                <span class="summary-label">Cliente:</span>
                <span class="summary-value" id="sum-client">No especificado</span>
              </div>
            </div>

            <div class="form-group" style="text-align: center;">
              <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
                Al hacer click en enviar, abriremos un chat de WhatsApp con un mensaje redactado con todos tus requerimientos para agilizar tu asesoría.
              </p>
              <button class="btn btn-primary" id="btn-submit-planner" style="gap: 0.6rem; display: inline-flex; align-items: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Enviar Planificación por WhatsApp
              </button>
            </div>
          </div>

          <!-- Navegación -->
          <div class="planner-nav">
            <button class="btn btn-secondary" id="btn-prev" style="visibility: hidden;">Anterior</button>
            <button class="btn btn-primary" id="btn-next">Siguiente</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initProjectPlanner() {
  let currentStep = 1;
  const totalSteps = 4;

  const steps = document.querySelectorAll('.planner-step');
  const dots = document.querySelectorAll('.step-dot');
  const indicatorLine = document.getElementById('indicator-line');
  const btnNext = document.getElementById('btn-next');
  const btnPrev = document.getElementById('btn-prev');
  const optionCards = document.querySelectorAll('.option-card');

  // Guardar datos temporalmente
  const plannerData = {
    type: '',
    typeLabel: '',
    features: [],
    featuresLabels: [],
    timeframe: '',
    timeframeLabel: '',
    desc: '',
    name: '',
    email: ''
  };

  // Manejar selección de tarjetas de opción
  optionCards.forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.type;
      const name = card.dataset.name;
      const val = card.dataset.value;
      const input = card.querySelector('input');
      const label = card.querySelector('.option-label').textContent;

      if (type === 'radio') {
        // Deseleccionar otros del mismo grupo
        document.querySelectorAll(`.option-card[data-name="${name}"]`).forEach(c => {
          c.classList.remove('selected');
          c.querySelector('input').checked = false;
        });

        card.classList.add('selected');
        input.checked = true;

        if (name === 'project-type') {
          plannerData.type = val;
          plannerData.typeLabel = label;
        } else if (name === 'project-timeframe') {
          plannerData.timeframe = val;
          plannerData.timeframeLabel = label;
        }
      } else if (type === 'checkbox') {
        card.classList.toggle('selected');
        input.checked = !input.checked;

        if (input.checked) {
          if (!plannerData.features.includes(val)) {
            plannerData.features.push(val);
            plannerData.featuresLabels.push(label);
          }
        } else {
          plannerData.features = plannerData.features.filter(v => v !== val);
          plannerData.featuresLabels = plannerData.featuresLabels.filter(l => l !== label);
        }
      }
    });
  });

  function updateSteps() {
    // Actualizar vista de pasos
    steps.forEach(step => {
      step.classList.remove('active');
      if (parseInt(step.dataset.step) === currentStep) {
        step.classList.add('active');
      }
    });

    // Actualizar dots indicadores
    dots.forEach(dot => {
      const stepVal = parseInt(dot.dataset.step);
      dot.classList.remove('active', 'completed');
      
      if (stepVal === currentStep) {
        dot.classList.add('active');
      } else if (stepVal < currentStep) {
        dot.classList.add('completed');
      }
    });

    // Línea de progreso
    const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;
    if (indicatorLine) {
      indicatorLine.style.width = `${progressPercent}%`;
    }

    // Botones Nav
    if (currentStep === 1) {
      btnPrev.style.visibility = 'hidden';
    } else {
      btnPrev.style.visibility = 'visible';
    }

    if (currentStep === totalSteps) {
      btnNext.style.display = 'none';
      renderSummary();
    } else {
      btnNext.style.display = 'inline-flex';
      btnNext.textContent = 'Siguiente';
    }
  }

  function renderSummary() {
    plannerData.desc = document.getElementById('project-desc').value;
    plannerData.name = document.getElementById('client-name').value;
    plannerData.email = document.getElementById('client-email').value;

    document.getElementById('sum-type').textContent = plannerData.typeLabel || 'No seleccionado';
    document.getElementById('sum-features').textContent = plannerData.featuresLabels.length > 0 
      ? plannerData.featuresLabels.join(', ') 
      : 'Ninguna';
    document.getElementById('sum-timeframe').textContent = plannerData.timeframeLabel || 'No especificado';
    document.getElementById('sum-client').textContent = `${plannerData.name || 'Invitado'} (${plannerData.email || 'Sin correo'})`;
  }

  // Navegación click
  btnNext.addEventListener('click', () => {
    // Validar entradas básicas antes de seguir
    if (currentStep === 1 && !plannerData.type) {
      alert('Por favor selecciona un tipo de sitio web para continuar.');
      return;
    }
    if (currentStep === 3) {
      const nameVal = document.getElementById('client-name').value;
      const emailVal = document.getElementById('client-email').value;
      if (!nameVal || !emailVal) {
        alert('Por favor completa tu nombre y correo para armar el resumen.');
        return;
      }
    }

    if (currentStep < totalSteps) {
      currentStep++;
      updateSteps();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateSteps();
    }
  });

  // Enviar a WhatsApp
  const btnSubmit = document.getElementById('btn-submit-planner');
  if (btnSubmit) {
    btnSubmit.addEventListener('click', () => {
      const featuresStr = plannerData.featuresLabels.join(', ') || 'Ninguna seleccionada';
      const textMessage = `Hola *${config.brand.name}*, me gustaría cotizar un proyecto web:
- *Tipo de Proyecto:* ${plannerData.typeLabel}
- *Funcionalidades Clave:* ${featuresStr}
- *Plazo:* ${plannerData.timeframeLabel || 'Flexible'}
- *Nombre:* ${plannerData.name}
- *Correo:* ${plannerData.email}
- *Detalles:* ${plannerData.desc || 'Sin comentarios adicionales.'}`;

      const encodedMessage = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
    });
  }
}
