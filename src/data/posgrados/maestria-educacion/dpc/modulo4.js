/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MED",
  courseId: "MED-DPC",
  id: "MED-DPC-mod4",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Didáctica de los procesos cognitivos",
  title:
    "Módulo 4. ¿Qué, cuándo y cómo enseñar desde la perspectiva constructivista?",
  semestre: "3er semestre",
  teacher: "Dra. Rosa Dianeth Hernández Aguilera",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar qué, cómo y cuándo enseñar desde el enfoque constructivista para planear, implementar y evaluar situaciones de aprendizaje significativo en el aula.",

  competencies: [
    "Identifica, desde la perspectiva constructivista, qué contenidos enseñar, cómo organizarlos y cuándo abordarlos para promover aprendizajes significativos.",
    "Integra conocimientos previos, procesos cognitivos básicos y estrategias metacognitivas en la planificación didáctica.",
    "Diseña situaciones de aprendizaje con equilibrio entre contenidos declarativos, procedimentales y actitudinales.",
    "Implementa métodos colaborativos y evaluación diagnóstica, formativa y sumativa coherentes con el enfoque constructivista.",
    "Reflexiona sobre su práctica e incorpora criterios éticos, de diversidad y funcionalidad del aprendizaje en la valoración de los logros del alumnado.",
  ],

  /* ── Contenido temático (jerarquía recursiva) ─────────── */
  themes: [
    /* 0. Página Info (opcional) */
    {
      id: "X.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [],
    },

    /* 1. Unidad principal (según PDF) */
    {
      id: "4",
      numbering: "Unidad 4",
      title:
        "¿Qué, cuándo y cómo enseñar desde la perspectiva constructivista?",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad ofrece un encuadre práctico sobre cómo llevar el constructivismo al aula sin perder de vista el currículo y los resultados de aprendizaje. Partimos de una idea clave: aprender no es copiar la realidad, sino construir significados cada vez más elaborados a partir de los conocimientos previos, las metas y las interacciones socioculturales. En consecuencia, la labor docente deja de ser la mera transmisión de contenidos para convertirse en diseño y mediación de experiencias de aprendizaje retadoras, emocionalmente seguras y culturalmente relevantes. En esta guía trabajaremos tres decisiones didácticas que deben articularse entre sí: qué enseñar (selección y organización de contenidos), cuándo enseñarlo (secuenciación y progresión) y cómo enseñarlo (métodos, recursos y evaluación). A lo largo de la unidad se revisarán condiciones para el aprendizaje significativo, tipos de conocimiento implicados (declarativo, procedimental y actitudinal), procesos cognitivos básicos y modalidades de evaluación coherentes con el enfoque (diagnóstica, formativa y sumativa). La meta es que puedas traducir principios en procedimientos: planear situaciones auténticas que conecten con la experiencia del estudiante, promover la cooperación y el pensamiento estratégico, y acompañar con retroalimentación que haga visible el progreso.",
        },
        {
          type: "paragraph",
          text: "Desde la perspectiva constructivista, el punto de partida es el estado actual de comprensión del alumno. Por ello, la exploración de saberes previos y de intereses es más que un ritual de inicio: orienta la selección de ejemplos, la dificultad de las tareas y el andamiaje necesario. Una unidad didáctica bien diseñada ofrece retos óptimos: suficientemente desafiantes para demandar reorganización cognitiva, pero alcanzables con apoyo. Esto exige que el docente module la carga cognitiva y emocional: anticipar obstáculos, graduar la complejidad, alternar momentos de input, práctica guiada y práctica autónoma, e integrar experiencias de metacognición. A su vez, los contenidos deben organizarse en redes de significados, identificando ideas clave, relaciones causales, principios y procedimientos. La significatividad no depende solo del tema, sino de cómo se presenta: conectores con contextos reales, preguntas generadoras, tareas con propósito y criterios de logro explícitos. Finalmente, el aprendizaje social cobra un papel decisivo: se aprende conversando, comparando puntos de vista y negociando significados; de ahí la necesidad de diseñar interacciones estructuradas (roles, protocolos de diálogo y rúbricas) que favorezcan la co-construcción.",
        },
        {
          type: "paragraph",
          text: "Para responder al ‘qué enseñar’, es útil distinguir entre contenidos declarativos, procedimentales y actitudinales. Los declarativos (conceptos, datos, principios) requieren organizadores previos, mapas de ideas y ejemplos contrastados que permitan anclar la nueva información a esquemas existentes. Los procedimentales (estrategias, técnicas, métodos) demandan modelamiento explícito, práctica distribuida y feedback inmediato sobre el desempeño. Los actitudinales (valores, normas, disposiciones) se aprenden en situaciones socialmente significativas, mediante el ejemplo docente, acuerdos de convivencia y contextos que hagan funcional la elección ética. El ‘cuándo enseñar’ se resuelve con una progresión que avance de experiencias globales hacia análisis más finos, alternando consolidación y extensión; aquí conviene explicitar objetivos por sesión, criterios observables y evidencias esperadas. El ‘cómo enseñar’ incluye elegir metodologías activas pertinentes (estudio de casos, aprendizaje basado en problemas o proyectos, simulaciones, estaciones de aprendizaje), así como recursos que optimicen la atención (material visual, manipulativos, TIC) y reduzcan la fricción innecesaria en el acceso al contenido.",
        },
        {
          type: "paragraph",
          text: "Los procesos cognitivos básicos –atención, memoria, pensamiento y metacognición– son el ‘motor invisible’ del aprendizaje. En atención, importa diseñar entradas breves y con foco, gestionar transiciones y alternar modalidades sensoriales. En memoria, favorecer codificación profunda mediante elaboración (explicar con propias palabras), organización (mapas y tablas) y recuperación espaciada (quizzes de bajo riesgo). En pensamiento, activar operaciones como comparar, clasificar, relacionar causa–efecto, argumentar y transferir a casos nuevos. La metacognición, por su parte, convierte al estudiante en agente de su progreso: planificar (¿qué sé?, ¿qué necesito?), monitorear (¿me funciona?, ¿qué ajusto?) y evaluar (¿qué logré?, ¿qué evidencias tengo?). En paralelo, la dimensión socioemocional sostiene el desempeño ejecutivo: un clima de seguridad psicológica, expectativas altas y apoyo emocional posibilita perseverar ante la dificultad y solicitar ayuda de manera oportuna. La docencia eficaz integra estas capas en secuencias breves, claras y con propósito, donde cada actividad tiene un porqué pedagógico explícito.",
        },
        {
          type: "paragraph",
          text: "La evaluación, coherente con el constructivismo, acompaña y orienta la construcción de significados. La diagnóstica identifica puntos de partida y ajusta la enseñanza; la formativa ofrece retroalimentación frecuente, específica y accionable sobre el proceso; la sumativa certifica logros con criterios públicos y tareas auténticas. Para ‘hacer visible’ el aprendizaje, conviene combinar técnicas informales (observación, preguntas, tickets de salida), semiformales (diarios, portafolios, mapas conceptuales) y formales (rúbricas de desempeño, proyectos, estudios de caso). Una retroalimentación bien diseñada nombra la fortaleza, acota la brecha y sugiere el siguiente paso; idealmente, incluye oportunidades de revisión. En todo momento, la evaluación debe ser ética: respetar la dignidad del estudiante, valorar procesos y no solo productos, y reconocer diversidad de rutas hacia la competencia. Esta unidad te brindará plantillas y ejemplos para alinear objetivos, actividades y evaluación, de modo que cada decisión didáctica responda a la pregunta guía: ¿cómo se construirá el significado en esta experiencia y cómo sabremos que ocurrió?",
        },

        /* Acordeón con tres niveles (tres paneles) */
        {
          type: "accordion",
          header: "Nivel 1 — Marco conceptual y preguntas guía",
          open: false,
          text:
            "- Aprendizaje como construcción activa y social de significados.\n" +
            "- Tres decisiones integradas: ¿qué?, ¿cuándo? y ¿cómo enseñar?\n" +
            "- Criterios de calidad: significatividad, funcionalidad y transferencia.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Diseño didáctico operativo",
          open: false,
          text:
            "- Explora conocimientos previos y metas del grupo.\n" +
            "- Planifica secuencias con reto óptimo y andamiaje visible.\n" +
            "- Selecciona metodologías activas y recursos que reduzcan fricción.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Evaluación alineada y retroalimentación",
          open: false,
          text:
            "- Usa evaluación diagnóstica para ajustar el punto de partida.\n" +
            "- Integra evaluación formativa con feedback específico y accionable.\n" +
            "- Certifica con tareas auténticas y criterios públicos (rúbricas).",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "4.1",
          numbering: "4.1",
          title: "Aproximación constructivista del aprendizaje y la enseñanza",
          content: [
            {
              type: "paragraph",
              text: "Adoptar una aproximación constructivista al aprendizaje y la enseñanza supone reconocer que el conocimiento no se transfiere mecánicamente, sino que se construye activamente a partir de los esquemas previos del estudiante en interacción con un entorno cultural y social significativo. En la práctica, esto exige diseñar situaciones didácticas en las que el alumnado movilice saberes previos, confronte nuevas informaciones, negocie significados con otros y reestructure sus representaciones mediante actividades intelectualmente retadoras y emocionalmente seguras. El docente, lejos de ser un emisor unidireccional, actúa como mediador: guía la atención, plantea problemas auténticos, estructura ayudas temporales (andamiajes) y modela estrategias metacognitivas para que el alumnado aprenda a aprender. Esta mediación se concreta en decisiones de planificación que articulan contenidos (factuales, conceptuales, procedimentales y actitudinales), métodos (situaciones de indagación, resolución de problemas, proyectos), secuenciación (de lo simple a lo complejo, de lo general a lo específico) y organización social (trabajo individual, parejas, equipos cooperativos). Un rasgo clave es la funcionalidad: que lo aprendido sea útil fuera del contexto de instrucción, lo cual se favorece con tareas ancladas en escenarios verosímiles y con evaluaciones que privilegian evidencias del proceso (cómo se aprende) y del producto (qué se logra). En suma, la aproximación constructivista integra lo cognitivo, lo afectivo y lo social para promover aprendizajes significativos y transferibles, haciendo explícitas las metas, los criterios de calidad y los caminos de mejora.",
            },
            {
              type: "accordion",
              header: "Principios operativos de la mediación docente",
              open: false,
              text:
                "- Activar y diagnosticar conocimientos previos antes de enseñar.\n" +
                "- Plantear retos óptimos (ni triviales ni inalcanzables) con apoyos temporales.\n" +
                "- Hacer visible el cómo: modelado, pensamiento en voz alta y metacognición.\n" +
                "- Evaluar para aprender: retroalimentación descriptiva y criterios claros.",
            },
            {
              type: "paragraph",
              text: "En términos de diseño instruccional, la aproximación constructivista se traduce en secuencias donde cada actividad tiene una función cognitiva clara: explorar ideas iniciales, introducir un conflicto o discrepancia, reconstruir significados con nuevas evidencias, consolidar mediante representaciones múltiples (mapas, tablas, explicaciones orales y escritas) y aplicar en situaciones novedosas para comprobar comprensión y transferir. La evaluación se integra desde el inicio con un propósito formativo: recolecta evidencias del progreso (portafolios, rúbricas, listas de cotejo, diarios de aprendizaje), orienta acciones de mejora y permite ajustar las ayudas docentes. Las normas de interacción y el clima de aula son condiciones de posibilidad: la seguridad psicológica y la expectativa de logro sostienen la participación, el error se resignifica como dato para aprender y la diversidad se aborda como fuente de recursos cognitivos. La organización social del trabajo —alternando momentos individuales y colaborativos— busca que cada estudiante asuma un rol productivo (investigador, relator, verificador, sintetizador) para que la cooperación sea genuina y no una suma de esfuerzos aislados. Con ello, el aula deviene comunidad de práctica donde se legitiman las preguntas, se argumenta con evidencias y se establecen puentes entre contenidos escolares y experiencias del mundo real.",
            },
            {
              type: "accordion",
              header: "Planificación en cuatro dimensiones (guía rápida)",
              open: false,
              text:
                "- Contenidos: definir saberes declarativos, procedimentales y actitudinales.\n" +
                "- Métodos: seleccionar problemas, proyectos y prácticas guiadas pertinentes.\n" +
                "- Secuenciación: progresión de complejidad y revisitas a ideas potentes.\n" +
                "- Organización social: alternar trabajo individual, parejas y equipos cooperativos.",
            },
            {
              type: "paragraph",
              text: "Para que la aproximación constructivista sea sostenible, conviene institucionalizar rutinas y herramientas que estandaricen la calidad sin sofocar la creatividad docente. Entre ellas destacan: preguntas esenciales que enmarcan cada unidad, criterios de éxito visibles para alumnado y familias, matrices de retroalimentación ligadas a las competencias a desarrollar, protocolos de diálogo académico (escucha activa, parafraseo, evidencia y contraejemplo) y ciclos breves de reflexión-acción (planear–actuar–observar–reflexionar). Asimismo, la coordinación entre docentes evita la fragmentación curricular y permite orquestar progresiones de aprendizaje inter-áreas, donde conceptos, procedimientos y actitudes se reencuentran en contextos variados incrementando su transferibilidad. Finalmente, el componente socioemocional no es accesorio: gestionar carga cognitiva y emocional, brindar opciones de elección informada en tareas, y explicitar estrategias de autorregulación fortalece la autonomía del aprendiz. Esta arquitectura didáctica, lejos de aumentar burocracia, libera tiempo para lo esencial: observar el pensamiento del alumnado, ofrecer ayuda justa a tiempo y cultivar una cultura de aula donde la comprensión profunda, la colaboración y la ética del trabajo bien hecho sean los indicadores de éxito.",
            },
            {
              type: "paragraph",
              text: "El resultado esperado de esta aproximación no es un repertorio de ‘actividades bonitas’, sino trayectorias de aprendizaje con sentido y evidencia de crecimiento. Por eso, la documentación pedagógica cobra relieve: colecciones de trabajos con anotaciones del proceso, registros de debate, fotografías de producciones, videos de presentaciones, y metas personales con seguimiento. Integrar estas evidencias en portafolios dialogados permite al alumnado narrar su aprendizaje, reconocer avances y planear pasos siguientes, mientras que al docente le ofrece bases para ajustar su mediación. La escuela, a su vez, cuenta con insumos para retroalimentar su proyecto educativo, identificar buenas prácticas y fortalecer la formación docente. Cuando esta lógica se sostiene, el aula se convierte en un espacio donde los estudiantes aprenden contenidos y, simultáneamente, aprenden a pensar, a convivir y a participar críticamente en su comunidad; y el profesor consolida un rol profesional centrado en la deliberación, la toma de decisiones informada y la mejora continua. Así, enseñar desde el constructivismo deja de ser una consigna retórica para convertirse en una práctica deliberada, verificable y escalable.",
            },
          ],
        },
        {
          id: "4.2",
          numbering: "4.2",
          title: "El aprendizaje significativo en el contexto escolar",
          content: [
            {
              type: "paragraph",
              text: "El aprendizaje significativo se distingue por la relación no arbitraria ni literal entre la nueva información y los conocimientos previos relevantes del estudiante, de modo que los nuevos significados se anclan en ideas inclusoras y reorganizan la estructura cognitiva. En la escuela, esta cualidad no emerge por azar: depende de tres condiciones didácticas mínimas. Primero, la potencial significatividad lógica del material (claridad conceptual, coherencia interna y conexión con ideas potentes del currículo). Segundo, la significatividad psicológica (que el estudiante disponga de conocimientos previos pertinentes y de motivos para aprender). Tercero, la disposición del alumno a relacionar de manera sustantiva lo nuevo con lo que ya sabe. Traducir estas condiciones implica comenzar por un diagnóstico fino de ideas previas, diseñar organizadores previos y metáforas que preparen el terreno, y plantear tareas que obliguen a explicar, comparar, clasificar, argumentar y aplicar. El objetivo no es memorizar definiciones, sino reconstruir significados que hagan sentido dentro y fuera del aula. Por ello, se privilegia la comprensión sobre la repetición, la transferencia sobre la mera evocación, y la evaluación formativa sobre la calificación puntual.",
            },
            {
              type: "accordion",
              header:
                "Condiciones para la significatividad (lista de verificación)",
              open: false,
              text:
                "- Material potencialmente significativo: conceptos claros, ejemplos y contraejemplos.\n" +
                "- Anclaje: activar y depurar ideas previas con organizadores y preguntas guía.\n" +
                "- Disposición: metas compartidas, relevancia percibida y clima de seguridad.",
            },
            {
              type: "paragraph",
              text: "En términos metodológicos, favorecer el aprendizaje significativo exige tareas auténticas que obliguen a usar el conocimiento en situaciones de creciente complejidad. Las estrategias incluyen estudios de caso, resolución de problemas, proyectos, simulaciones y prácticas de laboratorio o de campo, siempre acompañadas de andamiajes que se retiran gradualmente. La representación múltiple —gráficas, mapas conceptuales, modelos físicos o digitales, explicaciones escritas y orales— permite ‘ver’ el mismo concepto desde distintos ángulos y promueve conexiones entre ideas. La consolidación requiere ciclos de práctica deliberada con retroalimentación específica y oportuna que enfoque procesos (qué hice bien, qué falta y cómo mejorar). Al mismo tiempo, se monitoriza la carga cognitiva: se fracciona la tarea, se usan ejemplos trabajados antes de los problemas, y se dosifica el desafío para evitar saturación. La colaboración estructurada aporta diversidad de perspectivas y obliga a verbalizar el razonamiento, reforzando la comprensión y corrigiendo concepciones alternativas que no resisten el contraste con evidencias.",
            },
            {
              type: "accordion",
              header: "Evaluación para el aprendizaje (instrumentos sugeridos)",
              open: false,
              text:
                "- Portafolios con rúbricas centradas en comprensión y transferencia.\n" +
                "- Mapas conceptuales comparativos (inicial vs. final) para evidenciar reestructuración.\n" +
                "- Diario de aprendizaje con foco metacognitivo y plan de mejora.",
            },
            {
              type: "paragraph",
              text: "El vínculo entre significatividad y funcionalidad es crucial: aprendemos de forma duradera aquello que podemos usar para interpretar, decidir o resolver en contextos diversos. Por eso, las actividades deben conectar con preguntas vitales del alumnado y con problemas socialmente relevantes, evitando el encapsulamiento académico. La explicitación de criterios de éxito (qué cuenta como buen desempeño y por qué) ayuda a orientar el esfuerzo y a construir juicio de calidad. A su vez, la reflexión metacognitiva —planear, monitorear y evaluar la propia comprensión— transforma al alumno en agente de su aprendizaje, incrementando autonomía y autorregulación. La retroalimentación, más que un veredicto, funciona como guía para la siguiente iteración: describe evidencias, sugiere acciones concretas y alinea expectativas. Con estos elementos, el aprendizaje significativo deja de ser una etiqueta y se convierte en un estándar operativo de la práctica docente: se planifica, se enseña y se evalúa para que el conocimiento adquiera sentido, se organice con coherencia y se use con intención.",
            },
            {
              type: "paragraph",
              text: "Finalmente, sostener la significatividad requiere coherencia institucional: acuerdos curriculares que identifiquen ideas nucleares, progresiones de comprensión a lo largo de grados, espacios para la colaboración docente y una cultura de mejora continua informada por evidencias. Las decisiones sobre tiempo, materiales y evaluación deben alinearse con la idea de profundizar en menos temas para comprender mejor, en lugar de cubrir un temario extenso superficialmente. La escuela que prioriza el aprendizaje significativo invierte en formación docente, en sistemas de observación y retroalimentación entre pares, y en el uso inteligente de datos para ajustar prácticas. Desde esta perspectiva, el aula se asume como laboratorio pedagógico donde se prueban hipótesis didácticas y se documentan sus efectos en la comprensión. El horizonte no es producir estudiantes que repitan definiciones, sino ciudadanos capaces de interpretar fenómenos, argumentar con evidencias, colaborar con otros y aprender de manera continua a lo largo de la vida.",
            },
          ],
        },
        {
          id: "4.3",
          numbering: "4.3",
          title: "Tipos y situaciones del aprendizaje escolar",
          content: [
            {
              type: "paragraph",
              text: "En el marco constructivista, los tipos de aprendizaje escolar se comprenden mejor si se articulan con los contenidos y con las situaciones didácticas que les dan vida. En cuanto a contenidos, el currículo integra tres grandes dominios: declarativo (saber qué: datos, conceptos, principios), procedimental (saber hacer: estrategias, técnicas, métodos) y actitudinal (saber ser/convivir: valores, normas y disposiciones). Cada dominio demanda experiencias diferenciadas: explicar y relacionar para lo declarativo; practicar con variación y retroalimentación para lo procedimental; y vivir situaciones de cooperación, deliberación y responsabilidad para lo actitudinal. A su vez, podemos distinguir aprendizajes por recepción comprensiva y por descubrimiento guiado, ambos legítimos si se orientan a la comprensión y la transferencia. La clave es no confundir tipo de actividad con calidad de aprendizaje: una exposición puede ser significativa si se integra en una secuencia con activación de ideas previas, preguntas esenciales y tareas de aplicación; un proyecto puede ser estéril si no exige conceptualización rigurosa. Por eso hablamos de ‘situaciones’ y no sólo de ‘técnicas’: escenarios con propósito, recursos, roles, criterios y evidencias claros.",
            },
            {
              type: "accordion",
              header: "Situaciones didácticas frecuentes (usos y cautelas)",
              open: false,
              text:
                "- Resolución de problemas: ideal para conceptos y procedimientos; requiere modelado y andamiaje.\n" +
                "- Proyectos: integran saberes; pedir productos intermedios para evitar dilución conceptual.\n" +
                "- Estudios de caso y simulaciones: favorecen transferencia; cuidar autenticidad y criterios.",
            },
            {
              type: "paragraph",
              text: "Para operacionalizar estos tipos y situaciones, conviene diseñar tareas auténticas con criterios de éxito explícitos. Los mapas conceptuales son útiles para el dominio declarativo, porque hacen visible la red de relaciones entre conceptos; los protocolos paso a paso, las prácticas deliberadas y los ejercicios con retroalimentación específica benefician el dominio procedimental; y las dinámicas cooperativas con roles rotativos y acuerdos de convivencia activan lo actitudinal. La evaluación debe ser coherente con la situación: en problemas, se valora el proceso de modelado y verificación; en proyectos, la integración y la calidad del producto con su documentación; en estudios de caso, la pertinencia del razonamiento y el uso de evidencias. Además, alternar formatos (orales, escritos, gráficos, performativos) permite que distintos perfiles de aprendizaje muestren comprensión. Integrar momentos de reflexión metacognitiva —qué aprendí, qué estrategias usé, qué mejoraré— refuerza la transferencia y evita que las experiencias queden como episodios desconectados.",
            },
            {
              type: "accordion",
              header: "Instrumentos de evaluación alineados",
              open: false,
              text:
                "- Rúbricas analíticas por dominio (declarativo, procedimental, actitudinal).\n" +
                "- Portafolios con evidencias del proceso (borradores, registros, auto/coevaluaciones).\n" +
                "- Mapas conceptuales comparativos y diarios de aprendizaje.",
            },
            {
              type: "paragraph",
              text: "No menos importante es la gestión de la carga cognitiva y emocional en cada situación. Una buena situación didáctica regula la complejidad intrínseca del contenido (graduando pasos), reduce la carga extrínseca (materiales claros, consignas precisas) y aumenta la carga germana (esfuerzo invertido en construir esquemas). En la práctica: comenzar con ejemplos trabajados antes de problemas, dividir tareas, ofrecer pistas graduadas, alternar tiempos de trabajo individual y colaborativo, y pautar descansos cognitivos. El clima del aula debe sostener el riesgo intelectual: equivocarse forma parte del proceso y los errores informan ajustes. Finalmente, la coordinación interdocente garantiza continuidad: que los tipos de aprendizaje y las situaciones no sean episodios aislados sino parte de una progresión a lo largo del grado y del ciclo. Cuando esto ocurre, la escuela logra que el alumnado transite de la ejecución ritual a la comprensión profunda, y de la repetición a la transferencia; exactamente el objetivo que persiguen los enfoques constructivistas.",
            },
            {
              type: "paragraph",
              text: "Para cerrar, conviene recordar que la variedad no es un fin en sí misma; es un medio para ajustar la enseñanza a la naturaleza del contenido, a la diversidad del alumnado y a las metas formativas. Elegir una situación u otra debe responder a la pregunta: ¿qué proceso cognitivo y socioemocional quiero activar?, ¿qué evidencia de comprensión busco? Cuando el docente puede responder con precisión, elige con criterio y maximiza el impacto del tiempo de instrucción. De ese modo, las ‘situaciones’ dejan de ser etiquetas y se convierten en decisiones profesionales que articulan currículo, pedagogía y evaluación. Esta mirada, al mismo tiempo exigente y flexible, permite construir una cultura de aula donde las ideas se elaboran con rigor, las habilidades se practican con intención, y las actitudes se viven en comunidad. El resultado es un aprendizaje escolar que merece tal nombre: tiene sentido, se recuerda y se usa.",
            },
          ],
        },
        {
          id: "4.4",
          numbering: "4.4",
          title: "Condiciones promotoras del aprendizaje significativo",
          content: [
            {
              type: "paragraph",
              text: "Promover aprendizaje significativo exige diseñar experiencias en las que el nuevo contenido pueda anclarse de forma sustantiva y no arbitraria a los conocimientos previos del alumnado. Esto implica tres decisiones troncales: (1) preparar el terreno activando esquemas previos con preguntas generadoras, organizadores previos o breves casos que hagan ‘sentido’ del tema; (2) presentar materiales potencialmente significativos, es decir, bien estructurados, con ideas inclusoras claras, progresión de lo simple a lo complejo y lenguaje comprensible; y (3) asegurar una disposición motivacional adecuada, reduciendo amenazas innecesarias y explicitando el propósito y la utilidad del contenido. Cuando estas condiciones convergen, los estudiantes no solo recuerdan más, sino que reestructuran su marco conceptual, lo que incrementa la transferencia. En términos prácticos, el docente debe anticipar posibles concepciones alternativas, planear andamiajes (modelado, pistas, ejemplos graduales) y prever momentos de metacognición para que el alumnado haga explícitos sus procesos de comprensión y regulación.",
            },
            {
              type: "paragraph",
              text: "La calidad de las tareas es determinante: las consignas han de demandar organización de información, comparación, explicación causal y uso en contextos auténticos, evitando ejercicios puramente reproductivos. El aula debe ofrecer tiempo suficiente para ‘elaborar’ la información (relectura guiada, mapas, analogías, simulaciones), porque la elaboración semántica es el mecanismo por excelencia para construir significado. Es recomendable alternar momentos de instrucción directa (para clarificar conceptos clave) con estrategias activas (aprendizaje cooperativo, estudio de casos, debates estructurados), de modo que los estudiantes puedan contrastar ideas, justificar decisiones y recibir retroalimentación oportuna. La evaluación se integra al proceso con carácter formativo: listas de cotejo, rúbricas y microcomentarios que informan ‘qué mejorar y cómo’ mientras la tarea aún está en curso, favoreciendo la autorregulación.",
            },

            {
              type: "accordion",
              header: "Condiciones esenciales (operativización rápida)",
              open: false,
              text:
                "- Activación de conocimientos previos con organizadores o preguntas guía.\n" +
                "- Material potencialmente significativo: estructura clara e ideas inclusoras.\n" +
                "- Clima emocional seguro y propósito explícito de la tarea.\n" +
                "- Tareas con demanda cognitiva (explicar, aplicar, transferir).\n" +
                "- Andamiajes visibles (modelado, ejemplos graduados, pistas, retirada progresiva).\n" +
                "- Evaluación formativa y metacognición integrada al trabajo.",
            },

            {
              type: "paragraph",
              text: "Otro factor clave es la secuencia didáctica. La progresión recomendada parte de una visión global (macroideas) y avanza a diferenciaciones progresivas. Cada nueva sección debe vincularse explícitamente con lo anterior (reconciliación integradora) para evitar la ‘colección de temas’ inconexos. Es eficaz cerrar cada bloque con síntesis co-elaboradas (p. ej., una matriz comparativa o un mapa canónico acordado) que establezcan organizadores comunes para la clase. En paralelo, conviene explicitar estrategias de estudio y de monitoreo (resumir, autoexplicar, elaborar preguntas, verificar comprensión), pues enseñar contenido sin enseñar a aprender lo vuelve frágil ante el olvido. Finalmente, las consignas deben adoptar un lenguaje de criterios (qué significa ‘bien hecho’), y la retroalimentación debe ser específica, breve y accionable para sostener el progreso.",
            },

            {
              type: "accordion",
              header: "Errores frecuentes y cómo evitarlos",
              open: false,
              text:
                "- Presentar demasiada información sin estructura → Usar ideas organizadoras y ejemplos ancla.\n" +
                "- Evaluar solo el resultado final → Insertar microtareas con feedback durante el proceso.\n" +
                "- Actividades ‘ocupadas’ sin demanda cognitiva → Pedir explicaciones, justificaciones y transferencia.\n" +
                "- Suponer motivación sin propósito → Explicitar relevancia y uso del contenido desde el inicio.\n" +
                "- Ignorar concepciones alternativas → Elicitarlas y contrastarlas con evidencia y contraejemplos.",
            },

            {
              type: "paragraph",
              text: "Cuando las condiciones promotoras se planifican como un sistema coherente, el aula transita de la memorización episódica a la comprensión durable. La activación de esquemas disminuye la carga cognitiva extrínseca; la organización del material, el andamiaje y la práctica variada incrementan la carga germana (la que construye esquemas); la evaluación formativa y la metacognición convierten el error en información; y el clima de seguridad psicológica sostiene la participación. En conjunto, estas piezas construyen el entorno donde el aprendizaje significativo deja de ser un ideal y se vuelve un resultado probable. La mejor evidencia del diseño logrado son producciones estudiantiles que muestran reestructuración conceptual (no solo repetición), uso flexible del conocimiento en tareas nuevas y un vocabulario disciplinar progresivamente más preciso.",
            },
          ],
        },
        {
          id: "4.5",
          numbering: "4.5",
          title: "Tipos de conocimiento implicados en el aprendizaje",
          content: [
            {
              type: "paragraph",
              text: "En la escuela convergen distintos tipos de conocimiento, cada uno con naturaleza, formas de enseñanza y evidencias de logro particulares. El conocimiento declarativo (‘saber qué’) refiere a datos, conceptos y principios; se organiza en redes semánticas y se evidencia cuando el estudiante define, describe, clasifica y explica relaciones. El conocimiento procedimental (‘saber cómo’) comprende estrategias, técnicas, métodos y algoritmos; se despliega en la ejecución y supone práctica deliberada con criterios de calidad. El conocimiento actitudinal o valorativo (‘saber ser/convivir’) abarca normas, valores y disposiciones que orientan la conducta y la convivencia. A estos se suma el conocimiento condicional o estratégico (‘cuándo y por qué’ utilizar procedimientos y conceptos), que decide la aplicación contextual pertinente, y el metacognitivo, que regula la planificación, el monitoreo y la evaluación de la propia actuación. Diseñar para todos ellos exige variar métodos, consignas y criterios de evaluación.",
            },
            {
              type: "paragraph",
              text: "Para el declarativo, funcionan bien los organizadores previos, mapas conceptuales, analogías institucionalizadas y explicaciones con ejemplos y contraejemplos; su evaluación privilegia explicaciones causales, comparaciones y resolución de preguntas de transferencia cercana. En el procedimental, el núcleo es el modelado experto (pienso-en-voz-alta), la práctica guiada y la retirada gradual del apoyo; se evalúa mediante rúbricas de desempeño, listas de cotejo y productos que permitan observar la calidad del proceso, no solo el resultado. El actitudinal requiere experiencias vividas y reflexionadas (acuerdos de aula, roles, proyectos con impacto social) y evidencia a través de incidentes críticos, coevaluación y rúbricas socioemocionales. El condicional se fortalece con tareas auténticas que exijan elegir la estrategia idónea y justificarla; y la metacognición se enseña de forma explícita con diarios, protocolos de autoexplicación y mini-paradas de control durante la tarea.",
            },

            {
              type: "accordion",
              header:
                "Evidencias e instrumentos sugeridos por tipo de conocimiento",
              open: false,
              text:
                "- Declarativo: preguntas explicativas, mapas conceptuales, cuadros comparativos, mini-ensayos.\n" +
                "- Procedimental: rúbricas de proceso/producto, prácticas con criterios, portafolios.\n" +
                "- Actitudinal: rúbricas socioemocionales, auto/coevaluación, análisis de incidentes críticos.\n" +
                "- Condicional: estudios de caso, simulaciones, problemas mal estructurados con justificación.\n" +
                "- Metacognitivo: diarios, planillas de planificación/monitoreo, ‘post-mortem’ de tareas.",
            },

            {
              type: "paragraph",
              text: "La secuenciación también varía. Una ruta eficaz para integrar los tipos de conocimiento comienza presentando una visión panorámica del dominio (declarativo macro) y un ejemplo canónico completamente modelado (procedimental). Luego, se propone práctica guiada con variaciones controladas y, progresivamente, tareas cada vez menos estructuradas que obliguen a decidir estrategias (condicional). Paralelamente, se negocian normas y roles (actitudinal) y se instalan rutinas breves de metacognición (planificar la aproximación, monitorear el avance, evaluar el resultado y ajustar). La clave está en hacer visibles los criterios de calidad y en permitir múltiples borradores con retroalimentación oportuna, de modo que el aprendizaje sea una espiral de aproximaciones sucesivas y no un evento de ‘todo-o-nada’. Esta lógica incrementa la transferencia y reduce las brechas entre saber, saber hacer y saber cuándo.",
            },

            {
              type: "accordion",
              header:
                "Diseño didáctico: alineación objetivo–enseñanza–evaluación",
              open: false,
              text:
                "- Objetivos claros por tipo de conocimiento y verbo cognitivo asociado.\n" +
                "- Enseñanza alineada: modelado, práctica guiada, andamiaje y retiro progresivo.\n" +
                "- Evaluación coherente: evidencias auténticas, criterios explícitos y feedback accionable.\n" +
                "- Inclusión sistemática de metacognición: planificar–monitorear–evaluar–ajustar.\n" +
                "- Espacios para la dimensión actitudinal: acuerdos, roles, proyectos con sentido.",
            },

            {
              type: "paragraph",
              text: "Finalmente, integrar los tipos de conocimiento no significa ‘sumarlos’, sino diseñar experiencias donde se necesiten mutuamente. Una secuencia bien calibrada permite que los conceptos orienten la acción, que los procedimientos hagan tangible el concepto, que las actitudes sostengan el clima y la ética del trabajo, que la condicionalidad guíe la elección estratégica y que la metacognición mantenga el control del proceso. Cuando se logra, los estudiantes producen evidencias que muestran comprensión profunda (pueden explicar, aplicar, adaptar y justificar), desempeño competente (ejecutan con calidad y con criterios) y autonomía creciente (planifican, se autoevalúan y corrigen). Ese es el horizonte formativo de una didáctica que toma en serio la diversidad de conocimientos implicados en aprender.",
            },
          ],
        },
        {
          id: "4.6",
          numbering: "4.6",
          title: "Procesos cognitivos básicos",
          content: [
            {
              type: "paragraph",
              text: "En el enfoque constructivista, los procesos cognitivos básicos constituyen la infraestructura que hace posible cualquier aprendizaje significativo: atención, memoria, pensamiento y metacognición. La atención regula qué información ingresa al sistema y con qué prioridad, filtrando estímulos para permitir el procesamiento dirigido a metas. Cuando el clima emocional del aula reduce la amenaza y provee andamiaje claro (consignas breves, objetivos visibles, ejemplos modelo), la atención sostenida aumenta y mejora la codificación. La memoria de trabajo, por su parte, mantiene temporalmente la información relevante; su limitada capacidad exige secuenciar contenido, alternar formatos (visual, verbal, manipulativo) y activar organizadores previos. La memoria a largo plazo almacena representaciones (esquemas, guiones, conceptos y principios) que se integran mejor cuando la nueva información se vincula explícitamente con conocimientos previos y se practica en contextos variados. El pensamiento, entendido como manipulación de representaciones para resolver problemas, inferir, comparar o tomar decisiones, se estimula con tareas auténticas que requieren explicar, justificar y transferir. Finalmente, la metacognición —conocer y regular los propios procesos— habilita al alumno para planificar, monitorear y evaluar su desempeño, cerrando un ciclo autorregulador que convierte la experiencia en aprendizaje durable. Enseñar ‘sobre’ contenido implica, por tanto, enseñar ‘con’ estos procesos: visibilizarlos, nombrarlos y entrenarlos. Una planeación que combine atención dirigida, codificación elaborativa, práctica espaciada y reflexión metacognitiva incrementa la probabilidad de comprensión profunda y retención a largo plazo. Este marco no añade carga gratuita al docente; organiza la didáctica alrededor de cómo aprende el cerebro en interacción social, dando criterios claros para decidir qué decir, qué modelar, qué practicar y qué evaluar.",
            },

            {
              type: "accordion",
              header: "Atención y memoria: pautas didácticas inmediatas",
              open: false,
              text:
                "• Señaliza el objetivo con un enunciado de una línea y un ejemplo resuelto.\n" +
                "• Alterna exposición de 8–10 minutos con práctica breve guiada.\n" +
                "• Usa organizadores previos (mapas, preguntas guía) y práctica espaciada (volver a lo clave en sesiones siguientes).\n" +
                "• Reduce distractores: una tarea por vez, instrucciones numeradas, materiales listos.",
            },

            {
              type: "paragraph",
              text: "Precisar cada proceso ayuda a traducirlo en decisiones de aula. La atención puede descomponerse en selección (qué atender), mantenimiento (por cuánto tiempo) y cambio (flexibilidad). Intervenciones efectivas combinan señalización (resaltar lo relevante), segmentación (micro-pasos) y activación (preguntas de predicción). En memoria, la codificación elaborativa —hacer conexiones, analogías, ejemplos propios— supera el simple subrayado. La recuperación frecuente (pruebas de práctica con retroalimentación) fortalece huellas mnésicas más que el reestudio pasivo. El pensamiento requiere variedad de operaciones: comparar y contrastar, clasificar con criterio explícito, analizar causas y consecuencias, generar hipótesis y evaluar evidencias. Diseñar rúbricas que describan cada operación con indicadores observables orienta la retroalimentación y hace transparente el éxito. Por su parte, la metacognición se enseña modelando el diálogo interno del experto (‘¿Qué sé ya? ¿Qué estrategia usaré? ¿Cómo sabré si funcionó?’) y pidiendo al alumnado que planifique (antes), monitoree (durante) y evalúe (después) su desempeño con breves formatos de autoexplicación. La clave es integrar estas prácticas en la tarea disciplinar, no tratarlas como ‘extra’: pensar en voz alta al resolver un problema, solicitar una justificación de dos líneas, pedir una conexión con el tema anterior o implementar un minuto de cierre con la pregunta ‘¿qué cambio mañana en mi estrategia?’ son ejemplos de bajo costo y alto impacto.",
            },

            {
              type: "accordion",
              header: "Metacognición aplicable mañana mismo",
              open: false,
              text:
                "• Antes: ‘En una frase, ¿qué voy a intentar aprender y con qué estrategia?’\n" +
                "• Durante: ‘Si me atasco, pruebo: releer la consigna, buscar el ejemplo, pedir pista nivel 1’.\n" +
                "• Después: ‘¿Qué funcionó?, ¿qué no?, ¿qué haré distinto en la próxima tarea?’\n" +
                "• Evidencia: mini-diarios, tickets de salida, checklist de estrategias.",
            },

            {
              type: "paragraph",
              text: "Operacionalizar los procesos cognitivos básicos exige evaluación alineada. La evidencia no debe limitarse al producto final, sino incluir trazas del proceso: bosquejos, borradores, mapas y explicaciones intermedias. Las técnicas pueden ser informales (observación, preguntas de sondeo), semiformales (tareas en clase, ejercicios aplicados) y formales (pruebas, mapas conceptuales, rúbricas de desempeño), con retroalimentación específica sobre atención (¿seguí el criterio?), memoria (¿qué conexión hice?), pensamiento (¿qué regla apliqué y por qué?) y metacognición (¿qué aprendí sobre mi forma de estudiar?). En este marco, la diversidad se atiende modulando la carga cognitiva (tamaño de paso, ejemplos graduados), ofreciendo andamiaje temporal (pistas escalonadas) y multiplicando las vías de representación (texto, gráfico, demostración). La cultura de aula —acuerdos, roles, protocolos— crea seguridad psicológica para practicar estrategias sin penalizar el ensayo y error. Cuando el alumnado aprende a dirigir su atención, codificar de forma elaborada, recuperar en momentos espaciados, razonar con criterios y regularse, el contenido disciplinar se vuelve accesible y transferible: no es solo ‘lo que sabe’, sino ‘cómo lo aprendió’ y ‘cómo puede usarlo en contextos nuevos’.",
            },
          ],
        },
        {
          id: "4.7",
          numbering: "4.7",
          title: "El aprendizaje de los contenidos curriculares",
          content: [
            {
              type: "paragraph",
              text: "En el currículo, los contenidos se organizan en tres grandes tipos que exigen tratamientos didácticos diferenciados y complementarios: declarativos (saber qué: datos, conceptos, principios), procedimentales (saber hacer: habilidades, métodos, estrategias) y actitudinales (saber ser/convivir: valores, normas, disposiciones). El aprendizaje significativo ocurre cuando el alumno integra lo declarativo en redes conceptuales con anclajes claros, automatiza lo procedimental hasta disponer de recursos atencionales para la comprensión y practica lo actitudinal en situaciones sociales reales que otorgan sentido. De ahí que la secuenciación eficaz progrese de lo general a lo específico, alterne exposición breve con práctica guiada y autónoma, y retorne a ideas clave en ciclos espaciados. La evaluación, coherente con esta triada, debe recoger evidencias de comprensión (explicar con sus palabras, representar, ejemplificar), de desempeño (resolver tareas auténticas con criterios explícitos) y de participación ética (escucha, colaboración, responsabilidad). Planear con este prisma no solo aumenta la probabilidad de éxito: facilita a docentes y estudiantes saber ‘qué cuenta como evidencia’ y por qué.",
            },

            {
              type: "accordion",
              header: "Secuenciación y organización: del mapa a la tarea",
              open: false,
              text:
                "• Inicia con una pregunta guía y un mapa de ideas clave (declarativo).\n" +
                "• Modela el procedimiento con pasos visibles + criterios de calidad (procedimental).\n" +
                "• Diseña una tarea con impacto real (producto para otro curso o público) y normas de trabajo (actitudinal).\n" +
                "• Cierra con una síntesis y planificación de la siguiente práctica (espaciado).",
            },

            {
              type: "paragraph",
              text: "La selección de contenidos debe atender relevancia (valor formativo y social), coherencia (alineación con propósitos y evaluación) y factibilidad (tiempo, recursos, contexto). En la práctica, esto se traduce en secuencias didácticas que comienzan activando conocimientos previos (lluvia de ideas, analogías, ejemplos cercanos), establecen criterios de logro (rúbricas breves y legibles), modelan el proceso experto (pensar en voz alta, demostración paso a paso), ofrecen práctica guiada (con retroalimentación oportuna y específica) y consolidan con práctica autónoma espaciada y variada (problemas mixtos, aplicación en otro dominio, explicación a un par). Para el componente actitudinal, se definen expectativas observables (roles, protocolos de diálogo, acuerdos de clase) y se colectan evidencias (autoevaluación y coevaluación breves). Esta arquitectura reduce la carga extrínseca y maximiza la carga germana: el esfuerzo se orienta a construir esquemas útiles, no a descifrar qué se espera.",
            },

            {
              type: "accordion",
              header: "Evaluación alineada a contenidos (triangulación)",
              open: false,
              text:
                "• Declarativo → evidencias: mapa, explicación breve, ejemplo propio, mini-quiz de recuperación.\n" +
                "• Procedimental → evidencias: tarea auténtica, lista de cotejo de pasos, demostración grabada.\n" +
                "• Actitudinal → evidencias: rúbrica de colaboración, auto/coevaluación, registro de acuerdos.\n" +
                "• Retroalimentación: específica, orientada a próxima acción, con oportunidad de reintento.",
            },

            {
              type: "paragraph",
              text: "La diversidad del aula obliga a diseñar rutas de acceso múltiples al mismo objetivo. En contenidos declarativos, ofrecer diferentes representaciones (texto, infografía, ejemplo concreto) y solicitar explicaciones en formatos variados (oral, escrito, gráfico) habilita a más estudiantes a demostrar comprensión. En procedimentales, el andamiaje debe ser decreciente: primero, checklist y ejemplos; después, pistas graduadas; finalmente, desempeño autónomo con criterios internos. En actitudinales, la cultura de aula se entrena con prácticas breves y recurrentes (apertura/cierre emocional, acuerdos revisables, protocolos de resolución de conflictos), no con sermones ocasionales. La evaluación continua —diagnóstica para conocer puntos de partida; formativa para regular el proceso; sumativa para certificar logros— funciona como ciclo de mejora si cada instancia informa ajustes inmediatos: reenseñar un paso, brindar una pista, revisar la consigna o simplificar el producto. Cuando la planeación integra esta lógica, ‘contenido’ deja de ser una lista a cubrir y se convierte en un conjunto vivo de conocimientos, destrezas y actitudes que el estudiante puede movilizar con sentido en contextos reales.",
            },

            {
              type: "paragraph",
              text: "Finalmente, la transferencia es el indicador de que el aprendizaje de contenidos curriculares ha sido genuino. Para promoverla, conviene variar el contexto (cambiar datos superficiales), alterar la modalidad (de resolver a explicar; de leer a construir un ejemplo), y elevar gradualmente el nivel de abstracción (de caso concreto a principio general). También ayuda explicitar el ‘por qué’ del contenido: a qué problemas da respuesta, cómo interactúa con otros saberes y dónde se usa fuera del aula. El docente puede cerrar cada secuencia con un ‘reto de aplicación’ de baja carga administrativa pero alto valor formativo: elaborar una guía para un estudiante de otro curso, diseñar una pregunta de examen con su respuesta explicada, o conectar el tema con una situación comunitaria. Estas prácticas consolidan lo declarativo, automatizan lo procedimental y encarnan lo actitudinal, preparando al alumnado para aprender a aprender a lo largo de su trayectoria académica y profesional.",
            },
          ],
        },
      ],
    },

    /* -------------- Material Complementario -------------- */
    {
      id: "cc",
      numbering: "Material Complementario",
      title: "Material Complementario",
      content: [
        {
          type: "paragraph",
          text:
            "Aquí encontrarás un PDF con videos y sitios externos que amplían lo visto " +
            "en el módulo.",
        },

        /* Animación central (usa DotLottieReact en el componente) */
        {
          type: "lottie",
          src: "https://lottie.host/c0d4b22d-190c-499c-ae7c-fbdc65bdec18/uwM2ByDoCU.lottie",
        },

        /* ② Botón que abre el vídeo complementario */
        {
          type: "download", // reutilizamos el mismo bloque
          text: "Ver video complementario",
          href: "https://youtu.be/2ehu2llOAhw", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Actividades constructivismo https://youtu.be/h_CFtG6eYME",
            "DPC-Sem4 https://youtu.be/2ehu2llOAhw",
            "Los constructivismos y sus implicaciones para la educación http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-26982008000400003",
            "Aproximación constructivista de la enseñanza vivencial de las ciencias en Tamaulipas https://www.redalyc.org/pdf/654/65414209.pdf",
          ],
        },
      ],
    },

    /* ---------------------- Bibliografía ------------------- */
    {
      id: "bib",
      numbering: "Bibliografía",
      title: "Bibliografía",
      content: [
        {
          type: "list",
          style: "unordered",
          items: [
            "Alfaro, M. (2000). *Evaluación del aprendizaje.* Maracaibo: IUPEL.",
            "Arancibia, V., Herrera, P. & Strasser, K. (2007). *Manual de psicología educacional.* Santiago: Digitalia.",
            "Arguelles, D. & Nagles, N. (2007). *Estrategias para promover procesos de aprendizaje autónomo.* Bogotá: Alfaomega.",
            "Beltrán, Ll. J. & Bueno, J. (1995). *Psicología de la educación.* México: Alfa Omega.",
            "Burén, J. (1990). *Enseñar a aprender: Introducción a la metacognición.* Bilbao: Mensajero.",
            "Campirán, A. (1999). *Las habilidades de pensamiento en la perspectiva de las competencias.* En: Campirán, A., Guevara, G. & Sánchez, L. (Comps.), *Habilidades de Pensamiento Crítico y Creativo* (pp. 56–57). Xalapa: Universidad Veracruzana.",
            "Coll, C. (1996). Constructivismo y educación escolar: Ni hablamos siempre de lo mismo ni lo hacemos desde la misma postura epistemológica. *Anuario de Psicología, 69*, 153–178.",
            "Coll, C. (2001). Constructivismo y educación: La concepción constructivista de la enseñanza y el aprendizaje. En C. Coll, J. Palacios & A. Marchesi (comps.), *Desarrollo psicológico y educación 2. Psicología de la educación escolar.* Madrid: Alianza.",
            "Coll, S. C. (1990). *Aprendizaje escolar y construcción del conocimiento.* Madrid: Paidós.",
            "Del Prado, I. L. (2011). *Aprendizaje Significativo (David Ausubel).* Educ.ar. Disponible en: http://portal.educ.ar/debates/eid/docenteshoy/materiales-escolares/aprendizaje-significativo-davi.php",
            "Díaz Barriga Arceo, F. & Hernández Rojas, G. (1998). *Estrategias docentes para un aprendizaje significativo.* México: McGraw Hill.",
            "Díaz, F. & Hernández, G. (2002). *Estrategias docentes para un aprendizaje significativo* (2ª ed.). México: McGraw Hill.",
            "Ducret, J. J. (2001). Constructivismos: usos y perspectivas en la educación. *Perspectivas, 31*(2), 157–169.",
            "Moreno, C. (2012). La construcción del conocimiento: un nuevo enfoque de la educación actual. *Sophia: Colección de Filosofía de la Educación, (13).*",
            "Pozo, J. I. & Postigo, Y. (1993). *Las estrategias de aprendizaje como contenido del currículo.* En C. Monereo (Comp.), *Las estrategias de aprendizaje: Procesos, contenidos e interacción.* Barcelona: Domènech.",
            "Querales, E. (1994). Cómo evaluar el Aprendizaje. En: IUPEL, *Evaluación de los aprendizajes* (pp. 11–18). Maracaibo: IUPEL.",
            "Woolfolk, A. (2010). *Psicología educativa.* México: Pearson.",
          ],
        },

        /* ⬇⬇ NUEVO bloque para la animación ⬇⬇ */
        {
          type: "lottie",
          src: "https://lottie.host/822f7426-9c06-4a7f-85ad-f9e795d72fd6/09OzrRtAat.json",
          // pon aquí la animación que quieras
        },
      ],
    },
  ],
};
