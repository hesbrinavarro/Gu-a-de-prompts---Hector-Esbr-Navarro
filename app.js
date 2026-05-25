const dimensionsData = [
  {
    id: "gestion-docente",
    title: "1. Gestión docente",
    prompts: [
      {
        title: "Objetivo 1: Automatizar cronogramas y tareas organizativas.",
        clear: {
          C: "Rol de coordinador.",
          L: "Flujo temporal.",
          E: "Normativa vigente.",
          A: "Contexto ESO/Bach.",
          R: "Formato tabular."
        },
        template: "Actúa como coordinador pedagógico. Genera un cronograma para la Unidad de [Tema] cumpliendo con la LOMLOE para [Curso]. Distribuye las sesiones en [N.º] semanas. Restricción: Devuelve solo una tabla con: Semana, Saberes Básicos, Actividades y Criterios. Sin texto previo.",
        restriction: "El resultado debe carecer de saludos o prosa explicativa, ciñéndose estrictamente a la matriz solicitada."
      },
      {
        title: "Objetivo 2: Redactar actas de reuniones de departamento.",
        clear: {
          C: "Secretario de departamento.",
          L: "Orden del día.",
          E: "Acuerdos tomados.",
          A: "Tono formal institucional.",
          R: "Extensión límite."
        },
        template: "Actúa como secretario de departamento en un instituto. Redacta el acta de la reunión basándote en estas notas brutas: [Pegar notas]. Utiliza un tono académico y formal. Restricción: El documento no debe superar una página e incluirá apartados fijos para Asistentes, Orden del Día y Acuerdos.",
        restriction: "Verificar que la IA no invente acuerdos (\"alucinaciones\") que no estuvieran en las notas originales."
      },
      {
        title: "Objetivo 3: Diseñar comunicaciones estructuradas para las familias.",
        clear: {
          C: "Tutor de curso.",
          L: "Motivo y cierre.",
          E: "Fechas y datos.",
          A: "Tono empático.",
          R: "Sin tecnicismos."
        },
        template: "Actúa como tutor de [Curso] de ESO. Redacta un correo electrónico dirigido a las familias para informar sobre [Motivo/Excursión/Reunión]. Mantén un tono empático, cercano pero profesional. Restricción: No utilices jerga pedagógica técnica y estructura la información clave en una lista de viñetas.",
        restriction: "Asegurar que el tono refleje la línea de comunicación del centro y que los datos clave destaquen visualmente."
      }
    ]
  },
  {
    id: "creacion-materiales",
    title: "2. Creación de materiales de enseñanza",
    prompts: [
      {
        title: "Objetivo 1: Diseñar textos introductorios adaptados.",
        clear: {
          C: "Diseñador instruccional.",
          L: "Simple a complejo.",
          E: "Límite de palabras.",
          A: "Intereses del alumno.",
          R: "Nivel de vocabulario."
        },
        template: "Actúa como docente de [Asignatura]. Escribe un texto explicativo sobre [Concepto] para alumnos de [Edad] años. Utiliza analogías relacionadas con [Interés del alumnado, ej. deportes/tecnología]. Restricción: Máximo [N.º] palabras. Termina con 3 preguntas de comprensión.",
        restriction: "Comprobar que el centro de interés utilizado como analogía sea adecuado para el nivel madurativo del grupo."
      },
      {
        title: "Objetivo 2: Generar múltiples analogías para conceptos abstractos.",
        clear: {
          C: "Experto en didáctica.",
          L: "Desglose conceptual.",
          E: "Múltiples perspectivas.",
          A: "Alumnado de secundaria.",
          R: "Prohibido repetir."
        },
        template: "Actúa como profesor experto. El alumnado de [Curso] tiene dificultades para entender [Concepto abstracto]. Genera 4 analogías diferentes y precisas para explicar este concepto. Restricción: Cada analogía debe provenir de un ámbito distinto (naturaleza, vida cotidiana, tecnología, arte) sin repetir enfoques.",
        restriction: "Validar que las comparaciones no simplifiquen en exceso el rigor académico del concepto central."
      },
      {
        title: "Objetivo 3: Crear casos prácticos o situaciones de aprendizaje.",
        clear: {
          C: "Especialista metodológico.",
          L: "Contexto y problema.",
          E: "Roles del alumno.",
          A: "Entorno real.",
          R: "Sin software de pago."
        },
        template: "Actúa como experto en Aprendizaje Basado en Problemas. Diseña un caso práctico sobre [Tema] donde los alumnos de [Curso] asuman el rol de [Profesión/Cargo]. Define el problema inicial y los recursos necesarios. Restricción: La solución no debe ser evidente y debe requerir investigación por parte del alumno.",
        restriction: "Confirmar que el escenario plantea un reto cognitivo genuino y no una simple búsqueda de información literal."
      }
    ]
  },
  {
    id: "evaluacion",
    title: "3. Evaluación de los estudiantes",
    prompts: [
      {
        title: "Objetivo 1: Diseñar rúbricas analíticas fiables.",
        clear: {
          C: "Evaluador experto.",
          L: "Escala progresiva.",
          E: "Criterios observables.",
          A: "Instrumento técnico.",
          R: "Sin adjetivos ambiguos."
        },
        template: "Actúa como evaluador experto. Crea una rúbrica analítica para un/a [Ensayo/Exposición] sobre [Tema] en [Curso]. Evalúa: [Criterio 1], [Criterio 2] y [Criterio 3] en cuatro niveles de logro. Restricción: Estructura en tabla. Usa descriptores de conducta observables, evitando adjetivos subjetivos como 'bueno' o 'suficiente'.",
        restriction: "Constatar que la diferencia de ejecución entre los niveles de logro esté descrita de forma operativa y clara."
      },
      {
        title: "Objetivo 2: Crear cuestionarios formativos de bajo riesgo.",
        clear: {
          C: "Diseñador de pruebas.",
          L: "Pregunta y alternativas.",
          E: "Distractores fuertes.",
          A: "Nivel del examen.",
          R: "Sin \"todas las anteriores\"."
        },
        template: "Actúa como creador de pruebas diagnósticas. Elabora [N.º] preguntas de opción múltiple sobre [Tema] para [Curso]. Restricción: Cada pregunta debe tener 4 opciones. Los distractores deben basarse en errores conceptuales comunes. Prohibido usar opciones como 'Todas las anteriores'. Incluye la clave de respuestas al final.",
        restriction: "Revisar manualmente que los distractores sean plausibles y evalúen comprensión, no solo memoria."
      },
      {
        title: "Objetivo 3: Extraer patrones de error de respuestas abiertas.",
        clear: {
          C: "Analista de datos educativos.",
          L: "Agrupación temática.",
          E: "Frecuencia de errores.",
          A: "Feedback grupal.",
          R: "Solo datos provistos."
        },
        template: "Actúa como analista docente. Revisa este listado de respuestas breves de mis alumnos: [Pegar respuestas anónimas]. Identifica los patrones comunes de incomprensión. Restricción: Enumera los 3 errores conceptuales más frecuentes y sugiere una estrategia de 5 minutos para aclararlos en la siguiente clase. Cíñete al texto.",
        restriction: "El docente debe ejercer su rol human-in-the-loop para decidir si la estrategia sugerida encaja en su programación."
      }
    ]
  },
  {
    id: "empoderamiento",
    title: "4. Empoderamiento del estudiante",
    prompts: [
      {
        title: "Objetivo 1: Guiar la investigación y la alfabetización informacional.",
        clear: {
          C: "Mentor digital.",
          L: "Pasos de verificación.",
          E: "Criterios de fiabilidad.",
          A: "Autonomía del alumno.",
          R: "Enfoque antiplagio."
        },
        template: "Actúa como especialista en alfabetización informacional. Crea una guía de 5 pasos para que alumnos de [Curso] investiguen sobre [Tema] en internet de forma autónoma. Restricción: Incluye explícitamente un método rápido (ej. lectura lateral) para verificar la fiabilidad académica de las fuentes antes de usarlas.",
        restriction: "La guía debe promover la evaluación crítica de la IA y los buscadores, fomentando el uso ético."
      },
      {
        title: "Objetivo 2: Tutor socrático para la resolución autónoma de dudas.",
        clear: {
          C: "Tutor socrático.",
          L: "Mayéutica.",
          E: "Preguntas guía.",
          A: "Nivel de competencia.",
          R: "Prohibido dar la respuesta."
        },
        template: "Actúa como un tutor socrático para un alumno de [Curso] que tiene dudas sobre [Concepto]. Tu objetivo no es explicarle el tema, sino hacerle preguntas progresivas que le ayuden a deducir la respuesta por sí mismo. Restricción: Está estrictamente prohibido que le des la respuesta directa final en ninguna de tus interacciones.",
        restriction: "Comprobar que la IA mantiene el rol de facilitador, obligando al alumno a activar su pensamiento de orden superior."
      },
      {
        title: "Objetivo 3: Autoevaluación metacognitiva del proceso de estudio.",
        clear: {
          C: "Orientador educativo.",
          L: "Reflexión personal.",
          E: "Estrategias usadas.",
          A: "Hábitos del alumno.",
          R: "Formato de plantilla."
        },
        template: "Actúa como orientador de estudio. Diseña una plantilla de autoevaluación metacognitiva para que los alumnos de [Curso] reflexionen sobre cómo han preparado el examen de [Asignatura]. Restricción: Limítate a 5 preguntas cerradas (escala Likert) y 2 abiertas enfocadas en la gestión del tiempo y las distracciones.",
        restriction: "Validar que el lenguaje invite a la reflexión interna sin que el alumno lo perciba como un control punitivo."
      }
    ]
  },
  {
    id: "diversidad",
    title: "5. Atención a la diversidad",
    prompts: [
      {
        title: "Objetivo 1: Simplificación sintáctica para dificultades de lectura.",
        clear: {
          C: "Especialista en DUA.",
          L: "Ideas principales.",
          E: "Textos accesibles.",
          A: "Alumno con dislexia.",
          R: "Salvaguardar currículo."
        },
        template: "Actúa como especialista en accesibilidad cognitiva. Adapta el siguiente texto: [Pegar texto] a formato de Lectura Fácil para un alumno de [Curso]. Restricción: Usa frases cortas (sujeto-verbo-predicado), evita oraciones subordinadas complejas y resalta en negrita los 4 conceptos curriculares esenciales. No infantilices el tono.",
        restriction: "Garantizar que la reducción de carga cognitiva no implique la eliminación de los saberes básicos mínimos."
      },
      {
        title: "Objetivo 2: Ampliación y enriquecimiento para Altas Capacidades.",
        clear: {
          C: "Profesor de enriquecimiento.",
          L: "Conexión interdisciplinar.",
          E: "Reto intelectual.",
          A: "Altas Capacidades.",
          R: "Sin avanzar temario."
        },
        template: "Actúa como mentor de Altas Capacidades. Diseña una actividad de ampliación basada en [Tema actual de clase] para un alumno de [Curso]. Restricción: La actividad debe requerir síntesis creativa o investigación interdisciplinar (ej. vincular con historia o ciencia). Prohibido adelantar contenidos de cursos superiores.",
        restriction: "Verificar que el reto motive al estudiante mediante la profundidad del conocimiento, no mediante el aumento de carga de trabajo."
      },
      {
        title: "Objetivo 3: Adaptación estructural para alumnos con TDAH.",
        clear: {
          C: "Orientador PT.",
          L: "Fragmentación visual.",
          E: "Pasos cortos.",
          A: "Alumno con TDAH.",
          R: "Formato visual claro."
        },
        template: "Actúa como especialista en Pedagogía Terapéutica. Toma estas instrucciones de un proyecto de [Asignatura]: [Pegar instrucciones] y adáptalas para un alumno con TDAH. Restricción: Fragmenta el texto en una lista de tareas de un solo paso (Checklist). Incluye estimaciones de tiempo (máximo 15 min) para cada pequeño bloque.",
        restriction: "Comprobar que la saturación visual es mínima y que las recompensas o descansos están pautados lógicamente."
      }
    ]
  },
  {
    id: "motivacion",
    title: "6. Motivación del estudiante",
    prompts: [
      {
        title: "Objetivo 1: Diseño de situaciones gamificadas.",
        clear: {
          C: "Diseñador de juegos.",
          L: "Narrativa y reglas.",
          E: "Mecánicas de juego.",
          A: "Intereses de la clase.",
          R: "Viabilidad en aula."
        },
        template: "Actúa como experto en gamificación educativa. Transforma una sesión de repaso de [Tema] para [Curso] en una actividad narrativa basada en [Interés: ej. un misterio detectivesco / escape room]. Restricción: Utiliza únicamente recursos físicos del aula (pizarra, papel). Define claramente la misión y 3 pruebas progresivas.",
        restriction: "La narrativa no debe eclipsar el objetivo de aprendizaje; el contenido curricular debe ser la clave para \"ganar\"."
      },
      {
        title: "Objetivo 2: Conexión del currículo con el mundo real o actualidad.",
        clear: {
          C: "Divulgador experto.",
          L: "Teoría a práctica.",
          E: "Contexto actual.",
          A: "Alumnado adolescente.",
          R: "Rigor académico."
        },
        template: "Actúa como un divulgador científico/cultural juvenil. Explica la importancia práctica de [Concepto del currículo, ej. funciones matemáticas / métrica poética] conectándolo directamente con [Tema de actualidad/Música urbana/Deportes]. Restricción: Mantén el rigor académico y diseña una pregunta provocadora para abrir un debate en clase.",
        restriction: "Confirmar que el vínculo con la actualidad sea preciso y no fuerce paralelismos incorrectos."
      },
      {
        title: "Objetivo 3: Creación de dinámicas de Role-play o debates.",
        clear: {
          C: "Moderador de debates.",
          L: "Posturas opuestas.",
          E: "Roles asignados.",
          A: "Dinámica de grupo.",
          R: "Respeto y pluralidad."
        },
        template: "Actúa como diseñador de debates educativos. Crea una estructura de 'Role-play' sobre [Dilema ético o histórico del currículo] para [Curso]. Genera 4 perfiles de personajes distintos, cada uno con 2 argumentos clave para defender su postura. Restricción: Ningún perfil debe ser evidentemente 'el malo'; todos deben tener matices defendibles.",
        restriction: "Velar por que la dinámica fomente la empatía cognitiva y el respeto de turnos de palabra en el aula física."
      }
    ]
  },
  {
    id: "tecnica",
    title: "7. Competencia técnica y privacidad",
    prompts: [
      {
        title: "Objetivo 1: Auditoría de sesgos y verificación ética.",
        clear: {
          C: "Auditor de equidad.",
          L: "Análisis crítico.",
          E: "Estereotipos.",
          A: "Material de aula.",
          R: "Solo detectar, no reescribir."
        },
        template: "Actúa como un auditor de equidad y diversidad educativa. Analiza el siguiente texto/examen: [Pegar texto]. Identifica si existe algún sesgo de género, cultural o representatividad desequilibrada. Restricción: No reescribas el texto. Limítate a señalar los posibles sesgos en una lista y sugiere brevemente cómo neutralizarlos.",
        restriction: "Garantiza la supervisión pedagógica (human-in-the-loop); el docente evalúa si la IA detectó un sesgo real."
      },
      {
        title: "Objetivo 2: Metaprompting (IA como ingeniero para mejorar instrucciones).",
        clear: {
          C: "Ingeniero de prompts.",
          L: "Análisis y mejora.",
          E: "Marco CLEAR.",
          A: "Docente no experto.",
          R: "Devolver solo el prompt."
        },
        template: "Actúa como un experto en ingeniería de prompts educativos. Mi instrucción original es: [Escribir idea básica]. Mejora esta instrucción aplicando el modelo CLEAR (Conciso, Lógico, Explícito, Adaptativo, Restrictivo) para que me devuelva un material perfecto para Secundaria. Restricción: Explícame por qué has hecho los cambios y dame el prompt final listo para copiar y pegar.",
        restriction: "Mitiga la barrera técnica del profesorado ayudándoles a refinar sus propias peticiones sin frustración operativa."
      },
      {
        title: "Objetivo 3: Tratamiento seguro y anonimización de datos.",
        clear: {
          C: "Gestor de privacidad.",
          L: "Sustitución de datos.",
          E: "Eliminar PII.",
          A: "Informes escolares.",
          R: "Cero contenido inventado."
        },
        template: "Actúa como un especialista en protección de datos (RGPD). Voy a proporcionarte un informe de evaluación cualitativo. Tu única tarea es anonimizarlo por completo: sustituye nombres propios por [Alumno A, B...], elimina referencias a ubicaciones específicas y borra cualquier dato médico o familiar identificable. Restricción: No alteres el contenido académico ni generes texto nuevo.",
        restriction: "Disipa los miedos éticos del claustro, asegurando el cumplimiento normativo antes de procesar evaluaciones complejas."
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('dimensions-container');
  const navLinks = document.getElementById('nav-links');

  // Render Navigation and Content
  dimensionsData.forEach(dim => {
    // Nav Link
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${dim.id}">${dim.title}</a>`;
    navLinks.appendChild(li);

    // Dimension Section
    const section = document.createElement('section');
    section.id = dim.id;
    section.className = 'dimension-section';

    const title = document.createElement('h2');
    title.className = 'dimension-title';
    title.textContent = dim.title;
    section.appendChild(title);

    // Render Prompts (Cards)
    dim.prompts.forEach((prompt, index) => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3 class="card-title">${prompt.title}</h3>
        
        <div class="accordion">
          <div class="accordion-header" onclick="toggleAccordion(this)">
            <span>Estructura de componentes CLEAR</span>
            <svg class="accordion-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-body">
            <div class="accordion-content">
              <div class="clear-item"><strong>C: Conciso</strong>${prompt.clear.C}</div>
              <div class="clear-item"><strong>L: Lógico</strong>${prompt.clear.L}</div>
              <div class="clear-item"><strong>E: Explícito</strong>${prompt.clear.E}</div>
              <div class="clear-item"><strong>A: Adaptativo</strong>${prompt.clear.A}</div>
              <div class="clear-item"><strong>R: Restrictivo</strong>${prompt.clear.R}</div>
            </div>
          </div>
        </div>

        <div class="prompt-block">
          <div class="prompt-label">Plantilla del prompt final (Editable)</div>
          <div class="prompt-text">${prompt.template}</div>
        </div>

        <button class="copy-btn" onclick="copyToClipboard(this, \`${prompt.template.replace(/'/g, "\\'")}\`)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copiar plantilla
        </button>

        <div class="warning-note">
          <svg class="warning-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <div class="warning-content">
            <h4>Restricciones y validación técnica</h4>
            <p>${prompt.restriction}</p>
          </div>
        </div>
      `;

      section.appendChild(card);
    });

    container.appendChild(section);
  });

  // Highlight Nav on Scroll
  const sections = document.querySelectorAll('.dimension-section');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(li => {
      li.classList.remove('active');
      if (li.getAttribute('href').includes(current)) {
        li.classList.add('active');
      }
    });
  });

  // Mobile menu
  const mobileToggle = document.getElementById('mobile-toggle');
  const sidebar = document.getElementById('sidebar');

  mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Close sidebar on link click (mobile)
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
      }
    });
  });
});

// Accordion toggle function
window.toggleAccordion = function(element) {
  element.classList.toggle('active');
  const body = element.nextElementSibling;
  if (element.classList.contains('active')) {
    body.style.maxHeight = body.scrollHeight + "px";
  } else {
    body.style.maxHeight = null;
  }
}

// Copy to clipboard function
window.copyToClipboard = function(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.innerHTML;
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      ¡Copiado!
    `;
    btn.style.backgroundColor = 'var(--accent-hover)';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.backgroundColor = '';
    }, 2000);
  });
}
