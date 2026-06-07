const dimensionsData = [
  {
    "id": "gestion-docente",
    "title": "1. Gestión docente",
    "prompts": [
      {
        "title": "Objetivo 1: Automatizar cronogramas y tareas organizativas.",
        "clear": {
          "C": "Rol de coordinador.",
          "L": "Flujo temporal.",
          "E": "Normativa vigente.",
          "A": "Permite la personalización del prompt alterando el enfoque legislativo hacia decretos específicos o modificando la estructura de salida para facilitar su posterior volcado en hojas de cálculo y cuadernos docentes digitales.",
          "R": "Requiere evaluar si la carga lectiva generada por la inteligencia artificial resulta realista y viable. Si las actividades propuestas carecen de coherencia, el especialista debe reformular el prompt para acotar los saberes básicos."
        },
        "template": "Actúa como coordinador pedagógico. Genera un cronograma para la Unidad de [Tema] cumpliendo con la normativa vigente para [Curso]. Distribuye las sesiones en [N.º] semanas. Devuelve exclusivamente una tabla con las columnas: Semana, Saberes Básicos, Actividades y Criterios. Omite saludos, justificaciones y texto explicativo adicional.",
        "restriction": "Requiere evaluar si la carga lectiva generada por la inteligencia artificial resulta realista y viable. Si las actividades propuestas carecen de coherencia, el especialista debe reformular el prompt para acotar los saberes básicos."
      },
      {
        "title": "Objetivo 2: Redactar actas de reuniones de departamento.",
        "clear": {
          "C": "Secretario de departamento.",
          "L": "Orden del día.",
          "E": "Acuerdos tomados.",
          "A": "La instrucción es susceptible de calibración para abordar diversas tipologías de claustros o reuniones de coordinación, ajustando el registro desde un nivel puramente informativo hasta un estándar burocrático de máxima formalidad.",
          "R": "Constituye una exigencia contrastar la veracidad de los acuerdos para evaluar posibles alucinaciones del modelo. Ante un nivel de síntesis excesivo, el usuario debe iterar la solicitud exigiendo el desglose analítico de las intervenciones de cada asistente."
        },
        "template": "Actúa como secretario de departamento en un centro educativo. Redacta el acta de la reunión fundamentándote estrictamente en las siguientes notas brutas: [Pegar notas]. Emplea un registro académico, objetivo e institucional. El documento final no excederá una página y se estructurará innegociablemente en los epígrafes: Asistentes, Orden del Día y Acuerdos Formalizados.",
        "restriction": "Constituye una exigencia contrastar la veracidad de los acuerdos para evaluar posibles alucinaciones del modelo. Ante un nivel de síntesis excesivo, el usuario debe iterar la solicitud exigiendo el desglose analítico de las intervenciones de cada asistente."
      },
      {
        "title": "Objetivo 3: Diseñar comunicaciones estructuradas para las familias.",
        "clear": {
          "C": "Tutor de curso.",
          "L": "Motivo y cierre.",
          "E": "Fechas y datos.",
          "A": "El parámetro de salida permite su reconfiguración para plataformas de mensajería instantánea escolar que exijan economía del lenguaje, o bien su adaptación tonal para abordar situaciones de índole disciplinaria.",
          "R": "Conviene evaluar si el tono empático de la IA dificulta la lectura de la información práctica. Si los datos clave se pierden en el texto, se deberá ajustar el prompt para destacar de forma clara los plazos y las autorizaciones."
        },
        "template": "Actúa como tutor de [Curso] de Educación Secundaria. Redacta un correo electrónico dirigido a las familias para notificar sobre [Motivo/Excursión/Reunión]. Emplea un tono empático y conciliador, manteniendo un rigor estrictamente profesional. Prescinde de jerga psicopedagógica y estructura la información crítica (fechas, ubicaciones, plazos de entrega) mediante una lista de viñetas de alta legibilidad.",
        "restriction": "Conviene evaluar si el tono empático de la IA dificulta la lectura de la información práctica. Si los datos clave se pierden en el texto, se deberá ajustar el prompt para destacar de forma clara los plazos y las autorizaciones."
      }
    ]
  },
  {
    "id": "creacion-materiales",
    "title": "2. Creación de materiales de enseñanza",
    "prompts": [
      {
        "title": "Objetivo 1: Diseñar textos introductorios adaptados.",
        "clear": {
          "C": "Diseñador instruccional.",
          "L": "Simple a complejo.",
          "E": "Límite de palabras.",
          "A": "Permite modificar el centro de interés o la analogía utilizada (deportes, tecnología, música) para conectar con las motivaciones específicas del grupo, así como ajustar el límite de extensión.",
          "R": "Requiere evaluar si la analogía generada respeta el rigor del concepto original o si lo simplifica en exceso. Si el vocabulario resulta inadecuado para el nivel madurativo, se debe ajustar el prompt para acotar la complejidad léxica."
        },
        "template": "Actúa como docente de [Asignatura]. Escribe un texto explicativo sobre [Concepto] para alumnos de [Edad] años. Utiliza analogías relacionadas con [Interés del alumnado]. Máximo [N.º] palabras. Termina con 3 preguntas de comprensión. Omite introducciones genéricas.",
        "restriction": "Requiere evaluar si la analogía generada respeta el rigor del concepto original o si lo simplifica en exceso. Si el vocabulario resulta inadecuado para el nivel madurativo, se debe ajustar el prompt para acotar la complejidad léxica."
      },
      {
        "title": "Objetivo 2: Generar múltiples analogías para conceptos abstractos.",
        "clear": {
          "C": "Experto en didáctica.",
          "L": "Desglose conceptual.",
          "E": "Múltiples perspectivas.",
          "A": "La instrucción puede calibrarse para solicitar analogías provenientes de campos disciplinares específicos (arte, ciencia, vida cotidiana) según los conocimientos previos del alumnado.",
          "R": "Es fundamental revisar que las comparaciones no desvirtúen el rigor académico del concepto central. Si la analogía resulta confusa, iterar solicitando un desglose paso a paso de la correspondencia entre el concepto y la metáfora."
        },
        "template": "Actúa como profesor experto en didáctica. El alumnado de [Curso] presenta dificultades para asimilar [Concepto abstracto]. Genera 4 analogías distintas y precisas para explicarlo. Cada analogía debe provenir de un ámbito disciplinar diferente y no repetir enfoques. Excluye saludos y entrega directamente las analogías.",
        "restriction": "Es fundamental revisar que las comparaciones no desvirtúen el rigor académico del concepto central. Si la analogía resulta confusa, iterar solicitando un desglose paso a paso de la correspondencia entre el concepto y la metáfora."
      },
      {
        "title": "Objetivo 3: Crear casos prácticos o situaciones de aprendizaje.",
        "clear": {
          "C": "Especialista metodológico.",
          "L": "Contexto y problema.",
          "E": "Roles del alumno.",
          "A": "Facilita la adaptación del entorno real propuesto a contextos locales o de actualidad, así como la variación del producto final esperado (informe, debate, artefacto digital).",
          "R": "Se debe comprobar que el caso plantee un reto cognitivo genuino y no una simple búsqueda de información. Si la solución resulta evidente, el docente debe modificar el prompt para añadir restricciones o variables inesperadas al problema."
        },
        "template": "Actúa como especialista en [Aprendizaje Basado en Problemas]. Diseña un caso práctico sobre [Tema] donde los alumnos de [Curso] asuman el rol de [Profesión/Cargo]. Define el problema inicial, los recursos necesarios y el producto final esperado. La solución no debe ser evidente ni requerir software de pago. Estructura la salida con epígrafes claros y sin prosa introductoria.",
        "restriction": "Se debe comprobar que el caso plantee un reto cognitivo genuino y no una simple búsqueda de información. Si la solución resulta evidente, el docente debe modificar el prompt para añadir restricciones o variables inesperadas al problema."
      }
    ]
  },
  {
    "id": "evaluacion",
    "title": "3. Evaluación de los estudiantes",
    "prompts": [
      {
        "title": "Objetivo 1: Diseñar rúbricas analíticas fiables.",
        "clear": {
          "C": "Evaluador experto.",
          "L": "Escala progresiva.",
          "E": "Criterios observables.",
          "A": "Permite ajustar la rúbrica a diferentes instrumentos de evaluación (portfolio, debate, proyecto) y modificar el número de niveles de logro según la escala de calificación exigida por el centro educativo.",
          "R": "Es imprescindible verificar que los descriptores de conducta sean verdaderamente observables y no dependan de la interpretación subjetiva del evaluador. Si los niveles de logro resultan difusos, se debe iterar para exigir métricas operativas y cuantificables."
        },
        "template": "Actúa como evaluador experto. Crea una rúbrica analítica para un/a [Ensayo/Exposición] sobre [Tema] en [Curso]. Evalúa: [Criterio 1], [Criterio 2] y [Criterio 3] en [Nº] niveles de logro. Estructura el resultado en una tabla. Emplea descriptores observables, evitando adjetivos subjetivos o ambiguos como 'bueno' o 'suficiente'. Omite cualquier texto introductorio.",
        "restriction": "Es imprescindible verificar que los descriptores de conducta sean verdaderamente observables y no dependan de la interpretación subjetiva del evaluador. Si los niveles de logro resultan difusos, se debe iterar para exigir métricas operativas y cuantificables."
      },
      {
        "title": "Objetivo 2: Crear cuestionarios formativos de bajo riesgo.",
        "clear": {
          "C": "Diseñador de pruebas.",
          "L": "Pregunta y alternativas.",
          "E": "Distractores fuertes.",
          "A": "Facilita la graduación de la dificultad cognitiva de las preguntas, orientándolas hacia la recuperación, comprensión o análisis, según el nivel taxonómico deseado para la prueba diagnóstica.",
          "R": "Exige una revisión exhaustiva para garantizar que los distractores representen errores conceptuales plausibles y no sean descartables por simple lógica. Si las opciones incorrectas resultan evidentes, se debe reformular el prompt exigiendo mayor complejidad deductiva."
        },
        "template": "Actúa como creador de pruebas diagnósticas. Elabora [N.º] preguntas de opción múltiple sobre [Tema] para [Curso]. Cada pregunta debe contener 4 opciones de respuesta. Los distractores deben fundamentarse en errores conceptuales frecuentes del alumnado. Queda estrictamente prohibido utilizar la opción 'Todas las anteriores'. Incluye la clave de respuestas al final, sin añadir justificaciones complementarias.",
        "restriction": "Exige una revisión exhaustiva para garantizar que los distractores representen errores conceptuales plausibles y no sean descartables por simple lógica. Si las opciones incorrectas resultan evidentes, se debe reformular el prompt exigiendo mayor complejidad deductiva."
      },
      {
        "title": "Objetivo 3: Extraer patrones de error de respuestas abiertas.",
        "clear": {
          "C": "Analista de datos educativos.",
          "L": "Agrupación temática.",
          "E": "Frecuencia de errores.",
          "A": "Permite modificar el formato de salida para obtener tipologías de agrupamiento específicas según el criterio de evaluación, o adaptar la duración y formato de la estrategia de mitigación propuesta.",
          "R": "Requiere que el docente valide si la estrategia de corrección sugerida es viable dentro de la programación temporal del aula. Resulta innegociable mantener el rol human-in-the-loop para no delegar el juicio pedagógico crítico a la máquina."
        },
        "template": "Actúa como analista docente. Revisa analíticamente este listado de respuestas breves elaboradas por el alumnado: [Pegar respuestas anónimas]. Identifica los patrones comunes de incomprensión. Enumera los 3 errores conceptuales más recurrentes y sugiere una estrategia metodológica de 5 minutos para solventarlos en la siguiente sesión. Cíñete exclusivamente a los datos provistos y no alucines información.",
        "restriction": "Requiere que el docente valide si la estrategia de corrección sugerida es viable dentro de la programación temporal del aula. Resulta innegociable mantener el rol human-in-the-loop para no delegar el juicio pedagógico crítico a la máquina."
      }
    ]
  },
  {
    "id": "empoderamiento",
    "title": "4. Empoderamiento del estudiante",
    "prompts": [
      {
        "title": "Objetivo 1: Guiar la investigación y la alfabetización informacional.",
        "clear": {
          "C": "Mentor digital.",
          "L": "Pasos de verificación.",
          "E": "Criterios de fiabilidad.",
          "A": "Permite adaptar el nivel de profundidad de la investigación, orientándola hacia la búsqueda de fuentes primarias, secundarias o la validación específica de resultados generados por otras herramientas de IA.",
          "R": "Requiere comprobar que la guía elaborada promueva una verdadera evaluación crítica (como la lectura lateral) y fomente el uso ético de la información, evitando que el alumno se limite a copiar sin asimilar. En caso contrario, iterar exigiendo metodologías de contraste de fuentes más estrictas."
        },
        "template": "Actúa como un mentor digital. Crea una guía de 5 pasos para que alumnos de [Curso] investiguen sobre [Tema] en internet de forma autónoma. Incluye un método rápido y efectivo (ej. lectura lateral) para verificar la fiabilidad académica de las fuentes antes de su uso. Omite introducciones superfluas.",
        "restriction": "Requiere comprobar que la guía elaborada promueva una verdadera evaluación crítica (como la lectura lateral) y fomente el uso ético de la información, evitando que el alumno se limite a copiar sin asimilar. En caso contrario, iterar exigiendo metodologías de contraste de fuentes más estrictas."
      },
      {
        "title": "Objetivo 2: Tutor socrático para la resolución autónoma de dudas.",
        "clear": {
          "C": "Tutor socrático.",
          "L": "Mayéutica.",
          "E": "Preguntas guía.",
          "A": "La instrucción es modulable para ajustarse al nivel de competencia cognitiva del discente, permitiendo transitar desde un andamiaje más directivo hasta un interrogatorio socrático de máxima exigencia analítica.",
          "R": "Constituye una obligación ineludible monitorizar que el modelo mantenga su rol de facilitador. Si la inteligencia artificial claudica y proporciona la respuesta directa, se deberá reformular el prompt reforzando la prohibición absoluta de resolución unilateral."
        },
        "template": "Actúa como un tutor socrático para un alumno de [Curso] que presenta dudas sobre [Concepto]. Tu objetivo no es explicar el contenido, sino formular preguntas progresivas que le induzcan a deducir la respuesta por sí mismo. Queda estrictamente prohibido proporcionar la respuesta directa final en cualquiera de tus interacciones.",
        "restriction": "Constituye una obligación ineludible monitorizar que el modelo mantenga su rol de facilitador. Si la inteligencia artificial claudica y proporciona la respuesta directa, se deberá reformular el prompt reforzando la prohibición absoluta de resolución unilateral."
      },
      {
        "title": "Objetivo 3: Autoevaluación metacognitiva del proceso de estudio.",
        "clear": {
          "C": "Orientador de estudio.",
          "L": "Reflexión personal.",
          "E": "Estrategias empleadas.",
          "A": "El formato es susceptible de adaptación para focalizarse en fases concretas del aprendizaje (planificación previa, ejecución o revisión) o en metodologías de estudio específicas (técnica Pomodoro, recuperación activa).",
          "R": "Es preceptivo validar que la formulación lingüística del instrumento invite genuinamente a la introspección y no sea percibida por el estudiante como un mecanismo de control punitivo. Si el tono es en exceso inquisitivo, ajustar la instrucción hacia un registro de acompañamiento."
        },
        "template": "Actúa como orientador de estudio. Diseña una plantilla de autoevaluación metacognitiva para que los alumnos de [Curso] reflexionen sobre la preparación de su examen de [Asignatura]. Limítate a 5 preguntas cerradas mediante escala Likert y 2 cuestiones abiertas centradas en la gestión del tiempo y las distracciones. Excluye cualquier texto introductorio.",
        "restriction": "Es preceptivo validar que la formulación lingüística del instrumento invite genuinamente a la introspección y no sea percibida por el estudiante como un mecanismo de control punitivo. Si el tono es en exceso inquisitivo, ajustar la instrucción hacia un registro de acompañamiento."
      }
    ]
  },
  {
    "id": "diversidad",
    "title": "5. Atención a la diversidad",
    "prompts": [
      {
        "title": "Objetivo 1: Simplificación sintáctica para dificultades de lectura.",
        "clear": {
          "C": "Especialista en DUA.",
          "L": "Ideas principales.",
          "E": "Textos accesibles.",
          "A": "Permite modular el nivel de simplificación sintáctica según el grado de dislexia o dificultad lectora del alumno, así como ajustar el formato visual (interlineado, tipografía) si el entorno de volcado lo soporta.",
          "R": "Es innegociable garantizar que la reducción de la carga cognitiva no suponga la supresión de los saberes básicos mínimos. Si el texto resultante pierde rigor conceptual, iterar el prompt exigiendo la restitución de los términos curriculares clave."
        },
        "template": "Actúa como especialista en accesibilidad cognitiva y Diseño Universal para el Aprendizaje. Adapta el siguiente texto: [Pegar texto] a formato de Lectura Fácil para un alumno de [Curso]. Emplea estructuras sintácticas simples (sujeto-verbo-predicado), elude oraciones subordinadas complejas y resalta tipográficamente en negrita los conceptos curriculares esenciales. Queda terminantemente prohibido infantilizar el tono o suprimir el rigor académico.",
        "restriction": "Es innegociable garantizar que la reducción de la carga cognitiva no suponga la supresión de los saberes básicos mínimos. Si el texto resultante pierde rigor conceptual, iterar el prompt exigiendo la restitución de los términos curriculares clave."
      },
      {
        "title": "Objetivo 2: Ampliación y enriquecimiento para Altas Capacidades.",
        "clear": {
          "C": "Profesor experto en altas capacidades.",
          "L": "Conexión interdisciplinar.",
          "E": "Reto intelectual.",
          "A": "Facilita la redirección del enriquecimiento hacia las áreas de alto interés del discente (STEM, humanidades, artes), permitiendo variar el producto final exigido (ensayo, prototipo, exposición).",
          "R": "Resulta imperativo verificar que el reto intelectual se fundamente en la profundidad del conocimiento y no en un mero aumento punitivo de la carga de trabajo. Si la IA adelanta contenidos de cursos superiores, se debe reformular la instrucción para anclarla al currículo vigente."
        },
        "template": "Actúa como mentor especializado en Altas Capacidades. Diseña una actividad de enriquecimiento y ampliación fundamentada en [Tema actual de clase] para un discente de [Curso]. La actividad exigirá síntesis creativa o investigación interdisciplinar (v. gr., vinculación con historia o ciencia). Queda estrictamente prohibido anticipar contenidos curriculares correspondientes a niveles académicos superiores.",
        "restriction": "Resulta imperativo verificar que el reto intelectual se fundamente en la profundidad del conocimiento y no en un mero aumento punitivo de la carga de trabajo. Si la IA adelanta contenidos de cursos superiores, se debe reformular la instrucción para anclarla al currículo vigente."
      },
      {
        "title": "Objetivo 3: Adaptación estructural para alumnos con TDAH.",
        "clear": {
          "C": "Orientador PT.",
          "L": "Fragmentación visual.",
          "E": "Pasos cortos.",
          "A": "Permite calibrar la estimación temporal de los bloques de trabajo según los ciclos de atención sostenida del alumno, pudiendo adaptar el formato hacia mapas visuales o listas de cotejo interactivas.",
          "R": "Se debe comprobar empíricamente que la saturación visual del documento generado sea mínima y que las pausas funcionales estén pautadas de manera lógica. Si el desglose resulta aún excesivamente denso, iterar para forzar una mayor atomicidad de las tareas."
        },
        "template": "Actúa como especialista en Pedagogía Terapéutica. Analiza las presentes instrucciones de un proyecto de [Asignatura]: [Pegar instrucciones] y adáptalas estructuralmente para un alumno con TDAH. Fragmenta el texto ineludiblemente en una lista de tareas de un único paso (Checklist). Incorpora estimaciones temporales precisas (máximo 15 minutos) para cada bloque de ejecución.",
        "restriction": "Se debe comprobar empíricamente que la saturación visual del documento generado sea mínima y que las pausas funcionales estén pautadas de manera lógica. Si el desglose resulta aún excesivamente denso, iterar para forzar una mayor atomicidad de las tareas."
      }
    ]
  },
  {
    "id": "motivacion",
    "title": "6. Motivación del estudiante",
    "prompts": [
      {
        "title": "Objetivo 1: Diseño de situaciones gamificadas.",
        "clear": {
          "C": "Diseñador de juegos.",
          "L": "Narrativa y reglas.",
          "E": "Mecánicas de juego.",
          "A": "Permite ajustar la narrativa temática según las motivaciones coyunturales del alumnado (videojuegos, cine, literatura), así como modular la complejidad de las mecánicas en función de los recursos espaciales y materiales disponibles en el aula.",
          "R": "Exige contrastar si la parte lúdica eclipsa el objetivo de aprendizaje. En caso de que las mecánicas distraigan de los saberes básicos, iterar el prompt forzando que la superación de las pruebas dependa estrictamente de la movilización del conocimiento curricular."
        },
        "template": "Actúa como experto en gamificación educativa. Transforma una sesión de repaso de [Tema] para [Curso] en una actividad narrativa fundamentada en [Interés del alumnado]. Utiliza únicamente recursos físicos del aula. Define explícitamente la misión principal y estructura 3 pruebas progresivas. Omite preámbulos y salutaciones.",
        "restriction": "Exige contrastar si la parte lúdica eclipsa el objetivo de aprendizaje. En caso de que las mecánicas distraigan de los saberes básicos, iterar el prompt forzando que la superación de las pruebas dependa estrictamente de la movilización del conocimiento curricular."
      },
      {
        "title": "Objetivo 2: Conexión del currículo con el mundo real o actualidad.",
        "clear": {
          "C": "Divulgador experto.",
          "L": "Teoría a práctica.",
          "E": "Contexto actual.",
          "A": "Facilita la adaptación de los anclajes de actualidad a las realidades socioculturales o tendencias de consumo de información específicas de la cohorte adolescente a la que se dirige la instrucción.",
          "R": "Constituye un requisito indispensable verificar que el isomorfismo entre el concepto académico y el elemento de actualidad sea riguroso y no incurra en analogías falaces. Si la conexión resulta forzada, ajustar la petición requiriendo una fundamentación más sólida."
        },
        "template": "Actúa como divulgador académico juvenil. Explica la trascendencia práctica de [Concepto del currículo] vinculándolo analíticamente con [Tema de actualidad/Interés]. Exige rigor académico absoluto en la comparativa y diseña una pregunta socrática final destinada a propiciar el debate en el aula. Genera directamente la explicación sin introducciones.",
        "restriction": "Constituye un requisito indispensable verificar que el isomorfismo entre el concepto académico y el elemento de actualidad sea riguroso y no incurra en analogías falaces. Si la conexión resulta forzada, ajustar la petición requiriendo una fundamentación más sólida."
      },
      {
        "title": "Objetivo 3: Creación de dinámicas de Role-play o debates.",
        "clear": {
          "C": "Moderador de debates.",
          "L": "Posturas opuestas.",
          "E": "Roles asignados.",
          "A": "La instrucción posibilita la graduación del nivel de controversia del dilema planteado, así como el número de roles intervinientes para ajustarse a las dinámicas de pequeños grupos o al grupo-clase completo.",
          "R": "Resulta imperativo auditar la equidistancia y solidez argumental de los perfiles generados. Si el modelo incurre en maniqueísmo o caricaturización de posturas, el docente debe reformular el prompt exigiendo rigor y matices defendibles para cada facción."
        },
        "template": "Actúa como diseñador de debates metodológicos. Estructura una dinámica de 'Role-play' sobre [Dilema ético o histórico] para discentes de [Curso]. Configura 4 perfiles de personajes diferenciados, proveyendo a cada uno de 2 argumentos cardinales para la defensa de su posición. Ningún perfil tendrá falta de matices; todos poseerán defensas lógicas y plausibles. Entrega el resultado sin preámbulos.",
        "restriction": "Resulta imperativo auditar la equidistancia y solidez argumental de los perfiles generados. Si el modelo incurre en maniqueísmo o caricaturización de posturas, el docente debe reformular el prompt exigiendo rigor y matices defendibles para cada facción."
      }
    ]
  },
  {
    "id": "tecnica",
    "title": "7. Competencia técnica y privacidad",
    "prompts": [
      {
        "title": "Objetivo 1: Auditoría de sesgos y verificación ética.",
        "clear": {
          "C": "Auditor de equidad.",
          "L": "Análisis crítico.",
          "E": "Estereotipos.",
          "A": "Permite calibrar la tipología de sesgo a auditar (género, cultural, neurodivergencia) en función de las características demográficas del grupo-clase, así como focalizar el análisis en diversos materiales (exámenes, libros de texto, unidades didácticas).",
          "R": "Garantiza la supervisión pedagógica indispensable (human-in-the-loop). Constituye un imperativo ético que el docente evalúe críticamente si la inteligencia artificial ha detectado un sesgo real o incurre en una hipersensibilidad algorítmica desprovista de contexto."
        },
        "template": "Actúa como auditor de equidad y diversidad educativa. Analiza el siguiente texto: [Pegar texto]. Identifica de forma objetiva la existencia de cualquier sesgo de género, cultural o representatividad desequilibrada. Limítate a señalar los posibles sesgos mediante una enumeración y sugiere de forma concisa cómo neutralizarlos. Queda terminantemente prohibido que reescribas el texto original.",
        "restriction": "Garantiza la supervisión pedagógica indispensable (human-in-the-loop). Constituye un imperativo ético que el docente evalúe críticamente si la inteligencia artificial ha detectado un sesgo real o incurre en una hipersensibilidad algorítmica desprovista de contexto."
      },
      {
        "title": "Objetivo 2: Metaprompting (IA como ingeniero para mejorar instrucciones).",
        "clear": {
          "C": "Ingeniero de prompts.",
          "L": "Análisis y mejora.",
          "E": "Marco CLEAR.",
          "A": "Facilita la transpolación de la instrucción básica a múltiples contextos curriculares y permite ajustar la complejidad del marco metodológico exigido, mitigando la barrera técnica de los docentes con menor competencia digital.",
          "R": "Requiere que el usuario cuestione la fundamentación de los cambios propuestos por la IA. Si la instrucción resultante es excesivamente hermética, se deberá iterar exigiendo una simplificación procedimental sin menoscabo del rigor académico."
        },
        "template": "Actúa como un experto en ingeniería de prompts aplicados al ámbito educativo. Mi instrucción original es: [Escribir idea básica]. Optimiza esta instrucción implementando rigurosamente el modelo CLEAR (Conciso, Lógico, Explícito, Adaptativo, Reflexivo) para generar un material didáctico inmejorable para Educación Secundaria. Explica la fundamentación técnica de las modificaciones implementadas y proporciona el prompt final listo para su ejecución directa.",
        "restriction": "Requiere que el usuario cuestione la fundamentación de los cambios propuestos por la IA. Si la instrucción resultante es excesivamente hermética, se deberá iterar exigiendo una simplificación procedimental sin menoscabo del rigor académico."
      },
      {
        "title": "Objetivo 3: Tratamiento seguro y anonimización de datos.",
        "clear": {
          "C": "Gestor de privacidad.",
          "L": "Sustitución de datos.",
          "E": "Eliminar PII.",
          "A": "Permite configurar el nivel de anonimización requerido según el destinatario final del informe (claustro, familias, inspección educativa), ajustando las variables de sustitución (iniciales, seudónimos, códigos alfanuméricos).",
          "R": "Disipa las dudas del claustro, pero obliga al docente a ejecutar una doble comprobación manual. Resulta innegociable verificar que no haya quedado ningún rastro identificable (PII) antes de procesar evaluaciones sensibles en herramientas de terceros."
        },
        "template": "Actúa como especialista en protección de datos y cumplimiento del RGPD. Proporciono el siguiente informe de evaluación cualitativo: [Pegar informe]. Tu encomienda exclusiva radica en su total anonimización: sustituye los nombres propios por [Alumno A, B...], suprime referencias a ubicaciones específicas y purga cualquier dato de índole médica o familiar identificable. Queda estrictamente prohibido alterar el contenido académico subyacente o generar texto inédito.",
        "restriction": "Disipa las dudas del claustro, pero obliga al docente a ejecutar una doble comprobación manual. Resulta innegociable verificar que no haya quedado ningún rastro identificable (PII) antes de procesar evaluaciones sensibles en herramientas de terceros."
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
              <div class="clear-item"><strong>R: Reflexivo</strong>${prompt.clear.R}</div>
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
