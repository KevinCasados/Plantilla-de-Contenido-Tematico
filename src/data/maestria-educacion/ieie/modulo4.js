/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "EFD", // Especialidad en Formación Docente
  courseId: "EFD-IEIE", // Implicaciones Educativas de la Inteligencia Emocional
  id: "EFD-IEIE-mod4",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Implicaciones Educativas de la Inteligencia Emocional",
  title: "Módulo 4. Inteligencia emocional y práctica educativa",
  semestre: "2º semestre",
  teacher: "Dra. Rosa Dianeth Hernández Aguilera",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar el concepto de inteligencia emocional así como su implicación en el ámbito educativo.",
  competencies: [
    "Identifica qué es una emoción y su función adaptativa en el aprendizaje y la convivencia escolar.",
    "Explica la génesis de la inteligencia emocional y los principales modelos teóricos relacionados.",
    "Relaciona la inteligencia emocional con la praxis docente y la transmisión de conocimientos.",
    "Aplica estrategias básicas para el manejo y desarrollo de la inteligencia emocional en el aula.",
    "Valora un enfoque de escuela centrada en el individuo para integrar la dimensión afectiva en el currículo.",
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

    /* 1. Unidad principal (según el PDF) */
    {
      id: "3",
      numbering: "Unidad 3",
      title: "Inteligencia emocional",
      content: [
        {
          type: "paragraph",
          text: "La inteligencia emocional (IE) aporta un marco operativo para comprender cómo los procesos afectivos influyen en la atención, la memoria, la toma de decisiones y, por tanto, en el aprendizaje. En una escuela que busca equidad y excelencia, ignorar la dimensión emocional es un lujo que no podemos permitirnos: regula la disposición para aprender, el clima de aula y la calidad de las interacciones. Aquí trabajaremos definiciones de emoción e inteligencia emocional, sus bases neuropsicológicas fundamentales y las implicaciones para la práctica docente. La propuesta es pragmática: integrar la IE en la planeación, la mediación pedagógica y la evaluación, con estrategias concretas para reconocer, nombrar y regular emociones propias y ajenas. No se trata de “suavizar” el currículo, sino de hacerlo más potente: cuando el alumnado gestiona mejor sus estados afectivos, aumenta la concentración, mejora la colaboración y se sostienen metas desafiantes. Esta unidad alinea teoría y acción para transformar rutinas de aula.",
        },
        {
          type: "paragraph",
          text: "Comprender la emoción como respuesta psicofisiológica adaptativa nos permite desactivar malentendidos frecuentes. Expresiones motoras, variaciones autonómicas y patrones atencionales son parte del fenómeno emocional; no son ‘ruido’, sino información sobre cómo el estudiante evalúa una situación. Desde la IE, el foco no es reprimir, sino reconocer y modular. La neurociencia educativa muestra el papel de circuitos como amígdala, corteza cingulada y prefrontal en la valoración de estímulos y en la autorregulación. Traducido al aula: un andamiaje que disminuya la carga emocional negativa y enseñe microhabilidades (respirar, pausar, reencuadrar, pedir ayuda) facilita la entrada a tareas cognitivamente exigentes. Esta visión habilita a docentes y estudiantes a leer señales tempranas de escalamiento emocional, intervenir a tiempo y sostener la intencionalidad pedagógica sin sacrificar bienestar. La meta: autonomía emocional al servicio del aprendizaje profundo.",
        },
        {
          type: "paragraph",
          text: "La IE no es un ‘contenido extra’, sino una competencia transversal que se teje con el currículo. Diseñar secuencias que incorporen activadores emocionales adecuados (reto pertinente, sentido, propósito, feedback claro) eleva el compromiso y la perseverancia. En la práctica, podemos abrir clases con chequeos emocionales breves, explicitar el lenguaje de emociones en consignas y rúbricas, y cerrar con micro-reflexiones que conecten avances cognitivos con estados afectivos (‘¿qué emoción predominó cuando te atascaste?, ¿qué hiciste para regularte?’). También conviene establecer acuerdos de convivencia co-construidos, practicar la escucha activa y enseñar estrategias de resolución de conflictos. Estas acciones, sistematizadas, reducen conductas disruptivas, mejoran la autoeficacia y aumentan el tiempo comprometido con la tarea. La IE, bien implementada, no ‘quita’ tiempo de contenido: libera capacidad atencional.",
        },
        {
          type: "paragraph",
          text: "Desde la gestión docente, la IE exige coherencia: planeación emocionalmente informada, mediación serena y evaluación que retroalimente sin dañar la motivación. Recomendamos criterios observables para habilidades emocionales (reconocer, nombrar, regular, empatizar, colaborar) y evidencias multimodales (autoinformes, observación, productos con metacognición). La retroalimentación eficaz describe conducta, ofrece alternativas y modela lenguaje emocional específico; evita etiquetas fijas (‘siempre impulsivo’) y se centra en el ‘todavía no’. Para la mejora continua, los equipos docentes pueden analizar datos de clima de aula, acuerdos cumplidos, incidentes críticos y estrategias de co-regulación efectivas. Este ciclo de indagación permite ajustar prácticas, redistribuir apoyos y sostener altas expectativas con cuidado genuino. La IE se convierte así en palanca de liderazgo pedagógico.",
        },
        {
          type: "paragraph",
          text: "La integración institucional de la IE apunta a una escuela centrada en la persona: políticas de convivencia restaurativa, espacios para la voz del alumnado, tutorías entre pares y alianzas con familias. Un plan escolar de IE articula formación docente, secuencias por grado, recursos y protocolos de crisis. Sugerimos comenzar pequeño (rutinas emocionales en clase), escalar con coherencia (rúbricas y proyectos) y consolidar con cultura (lenguaje común, tiempos protegidos, evaluación institucional). En contextos complejos, la IE no es un ‘extra bonito’, sino infraestructura para sostener aprendizajes. Esta unidad ofrecerá herramientas listas para usar y marcos para adaptarlas a tu realidad. La consigna es clara: diseñar experiencias que enseñen contenidos y, simultáneamente, mejoren la capacidad del grupo para pensar con claridad aun bajo presión.",
        },

        // Acordeones (3 niveles)
        {
          type: "accordion",
          header: "Nivel 1 · Conceptos y bases",
          open: false,
          text:
            "• Emoción: respuesta psicofisiológica adaptativa con componentes cognitivos, corporales y conductuales.  \n" +
            "• Inteligencia emocional: reconocer, comprender, expresar y regular emociones propias y ajenas para orientar la acción.  \n" +
            "• Neurobases: interacción amígdala–corteza prefrontal–cingulada para valoración, regulación y toma de decisiones.",
        },
        {
          type: "accordion",
          header: "Nivel 2 · Estrategias de aula",
          open: false,
          text:
            "• Rutinas: chequeo emocional breve, lenguaje emocional explícito en consignas, cierres metacognitivos.  \n" +
            "• Co-regulación: pausas, respiración guiada, reencuadre cognitivo, acuerdos de convivencia y roles cooperativos.  \n" +
            "• Feedback: descriptivo, accionable y respetuoso; centra el ‘siguiente paso’ y evita etiquetas.",
        },
        {
          type: "accordion",
          header: "Nivel 3 · Evaluación y mejora continua",
          open: false,
          text:
            "• Evidencias: autoevaluaciones, observaciones, productos con reflexión emocional y rúbricas específicas.  \n" +
            "• Datos para decidir: indicadores de clima, incidentes críticos, participación y tiempo on-task.  \n" +
            "• Escalamiento: formación docente, protocolos y cultura escolar centrada en la persona.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "3.0",
          numbering: "3.0",
          title: "Inteligencia emocional",
          content: [
            {
              type: "paragraph",
              text: "La inteligencia emocional (IE) se trabaja aquí como un marco integrador que articula procesos afectivos, cognitivos y conductuales relevantes para el aprendizaje. En educación, comprender la IE implica reconocer que las emociones no son ‘ruido’ del sistema, sino información que orienta la atención, prepara respuestas fisiológicas y condiciona la toma de decisiones del alumnado y del profesorado. Las evidencias provenientes de la psicología y la neurociencia señalan que la emoción organiza la experiencia: sesga la percepción, prioriza recuerdos, influye en el juicio y, por lo tanto, en la conducta académica. Por ello, abordar la IE no es añadir un tema accesorio, sino incorporar una capa de análisis que explica por qué, ante iguales contenidos y métodos, unos estudiantes prosperan y otros se estancan. Desde esta perspectiva, la IE se entiende como la capacidad de percibir, comprender, usar y regular las emociones en uno mismo y en los demás para adaptarse al entorno y alcanzar metas personales y colectivas. En el aula, esto se traduce en tres implicaciones prácticas: (1) diseñar ambientes que reduzcan la sobrecarga emocional (ansiedad, frustración no elaborada) y potencien la motivación; (2) enseñar explícitamente habilidades de autorregulación (conciencia emocional, reencuadre cognitivo, estrategias de afrontamiento) y (3) alinear evaluación, retroalimentación y clima escolar con metas socioemocionales claras. De este modo, la IE deja de ser una etiqueta difusa y pasa a ser un conjunto operacional de competencias que puede observarse, entrenarse y evaluarse con criterios pedagógicos.",
            },
            {
              type: "paragraph",
              text: "Comprender la base psicobiológica de la IE ayuda a traducirla en decisiones didácticas. La respuesta emocional implica redes subcorticales y corticales que trabajan coordinadas. La amígdala, por su conectividad con estructuras del sistema límbico y con el hipotálamo, confiere valor afectivo a los estímulos y activa respuestas de alerta; la corteza cingulada anterior integra información visceral, atencional y emocional modulando el control del conflicto; y la corteza prefrontal participa en la valoración de ‘placer–displacer’, en la guía de la conducta hacia metas y en la inhibición de respuestas impulsivas. En términos pedagógicos, esto significa que un exceso de activación (estrés, temor al error público, evaluaciones percibidas como amenazantes) interfiere con procesos ejecutivos esenciales para aprender (memoria de trabajo, flexibilidad cognitiva, planificación). Inversamente, la seguridad psicológica y el interés emocionalmente significativo favorecen la consolidación del aprendizaje. Así, cuando una secuencia didáctica contempla activadores afectivos adecuados (preguntas generadoras, ejemplos relevantes, cooperación con sentido), la probabilidad de atención sostenida aumenta. Y cuando se acompaña de prácticas de regulación (respiración consciente breve, pausas de carga, acuerdos de convivencia, etiquetado emocional), el sistema atencional ‘recupera’ capacidad de procesamiento para el contenido disciplinar. Por eso, enseñar a sentir y pensar a la vez no es retórica: es habilitar el circuito que hace viable el aprendizaje intencional.",
            },
            {
              type: "paragraph",
              text: "En su dimensión histórica y conceptual, la IE emerge como un diálogo entre varias tradiciones. De un lado, los trabajos de Salovey y Mayer definieron la IE como la habilidad de percibir, comprender y manejar emociones, y de utilizar ese conocimiento para dirigir el pensamiento y la acción. De otro, la popularización de Goleman impulsó un enfoque por competencias que subrayó la relevancia práctica de la autorregulación, la automotivación, la empatía y las habilidades sociales para el desempeño en la vida cotidiana y profesional. También se han propuesto modelos mixtos (como Bar-On) que integran dimensiones personales y sociales para explicar la adaptación. Aunque existe debate sobre su medición y límites, hay dos apoyos empíricos robustos: (a) evidencia neuropsicológica que identifica redes cerebrales implicadas en la experiencia y regulación emocional y (b) resultados psicométricos que muestran que la IE guarda relación con el rendimiento y la adaptación, sin ser reducible al CI. Para el docente, estas discusiones se vuelven operativas cuando se formulan preguntas concretas: ¿qué indicadores observaré para valorar conciencia emocional?, ¿qué estrategias de reencuadre entrenaré?, ¿cómo retroalimentaré para promover autorregulación?, ¿qué normas de interacción sostendrán la empatía y el conflicto productivo? Responderlas permite alinear el discurso de IE con prácticas observables y con evidencias de aprendizaje socioemocional.",
            },
            {
              type: "paragraph",
              text: "Trasladada al aula, la IE implica tres planos de intervención. En el plano individual, se cultiva la metacognición emocional: reconocer señales corporales, nombrar estados afectivos con precisión y vincularlos a metas (por ejemplo, ‘tensión antes de exponer’ → respiración cuadrada + ensayo con feedback). En el plano interpersonal, se diseñan interacciones que enseñan a negociar significados y a coordinar acciones: roles en equipos, protocolos de diálogo, escucha activa, validación y desacuerdo respetuoso. En el plano institucional, se modela un clima que reduce amenazas innecesarias y promueve expectativas desafiantes alcanzables, con evaluación formativa y enfoque de crecimiento. Las estrategias incluyen rituales de apertura/cierre emocional, rúbricas que incorporan autorregulación, tareas con elección informada (para activar motivación), momentos breves de atención plena, y andamiaje de habilidades sociales en proyectos colaborativos. La idea no es ‘suavizar’ las demandas académicas, sino optimizar las condiciones afectivas para que el esfuerzo sostenido sea posible. En síntesis, la IE bien implementada mejora la atención, la memoria, la toma de decisiones y la convivencia, y por tanto eleva el aprendizaje y el bienestar. De ahí que esta unidad articule definiciones, bases neuropsicológicas, modelos y aplicaciones, proporcionando un repertorio práctico que puedas incorporar en planeaciones, enseñanza y evaluación.",
            },

            /* Acordeones de apoyo (dos niveles) */
            {
              type: "accordion",
              header: "Definiciones operativas y claves pedagógicas",
              open: false,
              text:
                "- IE como capacidad para reconocer, discriminar y nombrar emociones propias y ajenas, y para guiar conducta y pensamiento hacia metas.\n" +
                "- Emoción como organizadora de atención y decisión; exceso de activación dificulta el razonamiento y el aprendizaje intencional.\n" +
                "- Enfoque práctico: observar indicadores (conciencia, uso, regulación), entrenar estrategias (etiquetado, reencuadre, pausa) y evaluar con evidencias.",
            },
            {
              type: "accordion",
              header: "Modelos principales y qué tomar de cada uno",
              open: false,
              text:
                "- Habilidad (Salovey & Mayer): percibir, comprender, usar y regular → útil para diseñar progresiones de competencia.\n" +
                "- Competencias (Goleman): autoconocimiento, autorregulación, automotivación, empatía y habilidades sociales → útil para rúbricas y retroalimentación.\n" +
                "- Mixto (Bar-On): integra factores personales y sociales → útil para diagnósticos y planes de acción tutorial.",
            },
          ],
        },
        {
          id: "3.1",
          numbering: "3.1",
          title: "¿Qué es una emoción y para qué sirve?",
          content: [
            {
              type: "paragraph",
              text: "Una emoción es una reacción psicofisiológica que prepara al organismo para responder de forma rápida y adaptativa ante un estímulo del entorno —persona, objeto, suceso o recuerdo— y que se expresa en cambios atencionales, cognitivos, conductuales y corporales. En educación, entender esta naturaleza compuesta es clave: las emociones sesgan dónde ponemos la atención, qué información codificamos, cómo la recordamos y qué conductas emitimos durante la situación de aprendizaje. La literatura distingue, además, entre emociones (procesos breves, de origen más automático) y sentimientos (estados subjetivos más duraderos y verbalizables que emergen de la evaluación consciente de la experiencia emocional). Esta diferenciación no es meramente académica; permite al docente elegir estrategias de andamiaje socioemocional acordes a la temporalidad y profundidad del estado afectivo del alumnado, por ejemplo, contención y respiración diafragmática para emociones de alta intensidad en el momento, o ejercicios de metarreflexión para sentimientos persistentes ligados a creencias de autoeficacia. En el nivel fisiológico, la respuesta emocional implica patrones coordinados: variaciones en la actividad del sistema nervioso autónomo y endocrino, ajustes musculares y vocales, microexpresiones faciales y cambios en la postura. En paralelo, a nivel psicológico se producen reorientaciones atencionales que facilitan el acceso a recuerdos, guiones y esquemas almacenados en la memoria, con lo cual el alumno tenderá a repetir respuestas que en el pasado resultaron eficaces o que están sobreaprendidas en su contexto sociocultural.",
            },
            {
              type: "paragraph",
              text: "¿Para qué sirven, entonces, las emociones? Primero, cumplen una función de supervivencia: activan programas de acción que aumentan la probabilidad de afrontar amenazas u oportunidades con eficiencia. Segundo, guían la toma de decisiones al proveer señales somáticas que sintetizan valoraciones complejas de costo/beneficio cuando el tiempo o los recursos cognitivos son limitados. Tercero, tienen un papel comunicativo y social: dan información a otros sobre nuestra disposición de ánimo y necesidades, coordinando conductas colectivas (p. ej., la empatía y el cuidado ante la tristeza). Cuarto, modulan el aprendizaje: estados de activación óptimos (ni demasiado bajos ni excesivos) facilitan la consolidación mnésica y la transferencia; la activación extrema, por el contrario, estrecha el foco atencional y puede interferir con tareas de razonamiento. En el aula, esto se traduce en que la ‘buena enseñanza’ no solo transmite contenidos, sino que regula climas emocionales: alterna retos con pausas, segmenta tareas difíciles, introduce señales de seguridad psicológica y valida la experiencia afectiva del grupo. La finalidad no es “eliminar” emociones, sino alfabetizar en su lectura y manejo para maximizar el aprendizaje.",
            },
            {
              type: "paragraph",
              text: "Desde el punto de vista analítico, una emoción puede desglosarse en componentes que interactúan entre sí: (1) evaluación o ‘appraisal’ (la interpretación que damos al estímulo y su relevancia para nuestros objetivos), (2) tendencia a la acción (impulsos motores preparados, como acercarse, evitar, defenderse), (3) cambios fisiológicos (autónomos y endocrinos), (4) expresión (facial, postural, prosódica) y (5) sentimiento subjetivo (la cualidad fenomenológica, lo que “se siente por dentro”). Este marco ayuda a diseñar intervenciones docentes con dianas específicas. Por ejemplo, si el problema es el appraisal catastrofista ante un examen, conviene trabajar reestructuración cognitiva y evidencias; si predomina la hiperactivación fisiológica, serán más pertinentes técnicas de respiración, relajación muscular y biofeedback; si la dificultad radica en la expresión, se entrenan habilidades de comunicación asertiva y etiquetado emocional. Un foco pedagógico inteligente parte de identificar el componente predominante y seleccionar la microtécnica correspondiente, manteniendo siempre la coherencia con los objetivos curriculares y el contexto sociocultural del grupo.",
            },
            {
              type: "paragraph",
              text: "La regulación emocional constituye la competencia instrumental que conecta emoción y aprendizaje. Existen estrategias centradas en el antecedente (selección de situaciones, modificación de situaciones, orientación atencional y reevaluación cognitiva) y otras centradas en la respuesta (supresión expresiva, respiración, relajación, descarga motora dirigida). La evidencia sugiere que la reevaluación es, en promedio, más adaptativa que la supresión, porque mantiene el acceso a la información afectiva sin los costos atencionales de ocultarla. En términos didácticos, los docentes pueden operacionalizar esta distinción: estructurar el entorno para prevenir disparadores innecesarios (higiene de estímulos), usar señales y rutinas que anticipen transiciones, enseñar a ‘nombrar para domar’ (labeling) y brindar guías de autoanálisis posterior al evento (qué pensé, qué sentí, qué hice, qué funcionó). La meta no es estandarizar reacciones, sino expandir el repertorio regulatorio del alumnado para que elijan, con conciencia, la estrategia correcta según el objetivo académico y el momento del proceso instruccional.",
            },

            /* Acordeones */
            {
              type: "accordion",
              header: "Diferenciar emoción vs. sentimiento",
              open: false,
              text:
                "• Temporalidad y verbalización: las emociones son breves y automáticas; los sentimientos, más duraderos y verbalizables.  \n" +
                "• Marcadores fisiológicos: las emociones muestran patrones autonómicos más claros; los sentimientos se sostienen más por procesos cognitivos y de memoria.  \n" +
                "• Implicaciones didácticas: para emociones intensas → pausas, respiración y señal de seguridad; para sentimientos persistentes → escritura reflexiva, tutoría, reencuadre y planes de acción.",
            },
            {
              type: "accordion",
              header: "Funciones adaptativas principales",
              open: false,
              text:
                "• Supervivencia y decisión: activan programas de acción y proveen ‘atajos’ somáticos para decidir con recursos limitados.  \n" +
                "• Comunicación social: sincronizan conductas, negocian normas y facilitan apoyo; su lectura experta mejora el clima de aula.  \n" +
                "• Aprendizaje y memoria: modulan atención y consolidación; el reto docente es sostener activación óptima para comprensión y transferencia.",
            },
          ],
        },
        {
          id: "3.2",
          numbering: "3.2",
          title: "La génesis de la inteligencia emocional",
          content: [
            {
              type: "paragraph",
              text: "Hablar del ‘origen’ de la inteligencia emocional (IE) implica, por un lado, trazar su genealogía conceptual y, por otro, describir las condiciones biopsicosociales que la hacen posible. En el plano histórico, el término aparece esbozado en la literatura a mediados del siglo XX y se consolida a partir de los años noventa con la propuesta de la IE como capacidad —percibir, usar, comprender y manejar emociones— formulada por autores que la definieron de manera operativa y medible. Este giro supuso desplazar la discusión desde un atributo difuso hacia un conjunto de habilidades evaluables y entrenables. Paralelamente, se difundieron concepciones de IE de corte mixto que integran rasgos de personalidad, competencias sociales y motivacionales. La coexistencia de estas líneas —‘capacidad’ vs. ‘rasgo/mix’— no es un capricho terminológico: traduce la tensión entre medir procesos cognitivo-emocionales ‘puros’ y medir repertorios disposicionales más amplios que también predicen desempeño académico y laboral. En el aula resulta pragmático reconocer ambas familias, clarificar la que se adopta para cada objetivo y asegurarse de que las evidencias y rúbricas de evaluación sean consistentes con esa elección teórica.",
            },
            {
              type: "paragraph",
              text: "En su fase de popularización, la IE se instaló en el discurso educativo gracias a obras de amplia difusión que enfatizaron su impacto en el liderazgo, el trabajo en equipo y el rendimiento. Aunque esta expansión trajo entusiasmo y buenas prácticas, también generó confusiones: a veces se confundió IE con ‘ser amable’, otras se pretendió que sustituyera habilidades académicas. Un enfoque maduro reconoce que la IE no compite con la cognición fría ni la suple; la complementa al optimizar la gestión de recursos atencionales, la motivación y la autorregulación. La maduración teórica ha venido acompañada por modelos de evaluación distintos (tests de desempeño para la IE-capacidad, inventarios de autoinforme para la IE-rasgo) y por programas de intervención que oscilan desde el entrenamiento en percepción emocional (reconocimiento de expresiones, prosodia) hasta currículos completos de educación socioemocional, con resultados que suelen ser modestos pero consistentes en clima de aula, conducta prosocial y reducción de problemas internalizantes.",
            },
            {
              type: "paragraph",
              text: "La base neurobiológica de la IE sugiere un diálogo entre sistemas: circuitos límbicos (p. ej., amígdala, hipocampo) que detectan relevancia y valencia del estímulo; corteza prefrontal ventromedial/dorsolateral implicada en control ejecutivo, reevaluación y toma de decisiones; y redes saliencia-ejecutivas que ajustan el foco atencional según demandas del contexto. Lejos de la dicotomía ‘razón vs. emoción’, hoy se modela la IE como un bucle recursivo: la emoción orienta la cognición y la cognición regula la emoción. Para la práctica docente, este marco neurorregulatorio se traduce en una consigna clara: diseñar tareas con una carga emocional óptima (relevancia personal, propósito) y con andamiajes de control (pausas, retroalimentación, estructura de elecciones) que permitan a los estudiantes ejercitar el ciclo percibir-comprender-regular en condiciones progresivamente más desafiantes.",
            },
            {
              type: "paragraph",
              text: "¿Cómo ‘nace’ y se desarrolla la IE en el estudiante? La respuesta combina maduración, aprendizaje vicario y práctica deliberada. En educación básica, el énfasis recae en etiquetar emociones, reconocer señales corporales y practicar estrategias de regulación contextualizadas (respiración, reevaluación, solución de problemas). En secundaria, se priorizan habilidades interpersonales complejas (negociación, liderazgo servicial, retroalimentación efectiva) y autorregulación metacognitiva para tareas académicas extendidas. En educación superior y formación docente, la IE se operacionaliza como competencia profesional: diseño de climas socioemocionales, evaluación formativa con foco en esfuerzo y estrategias, y cuidado del docente (prevención de burnout) como pilar para sostener la calidad educativa. Así, la ‘génesis’ no es un instante, sino una trayectoria entrenable que responde a principios de progresión, práctica distribuida y transferencia: se enseña explícitamente, se practica con propósito, se evalúa con criterios claros y se retroalimenta con evidencias.",
            },

            /* Acordeones */
            {
              type: "accordion",
              header: "Hitos históricos de la IE",
              open: false,
              text:
                "• Formulación académica: consolidación como habilidades de percibir, usar, comprender y regular emociones; foco en medición por desempeño.  \n" +
                "• Difusión y modelos mixtos: popularización que integró competencias socioemocionales (asertividad, resiliencia) distintas de la IE-capacidad.  \n" +
                "• Evolución reciente: mayor precisión en evaluación (desempeño vs. autoinforme), integración con neurociencia y programas escolares con efectos modestos pero robustos.",
            },
            {
              type: "accordion",
              header: "Modelos de IE (comparativo operativo)",
              open: false,
              text:
                "• IE como capacidad (habilidad): evalúa desempeño en percepción/comprensión/regulación; útil para progresiones de competencia y rúbricas.  \n" +
                "• IE de rasgo/mixta: mapea rasgos y competencias socioemocionales amplias; útil para clima y tutoría aunque menos ‘pura’ psicométricamente.  \n" +
                "• Evaluación: alinear instrumentos con el modelo adoptado; combinar desempeño + observación + evidencias para decisiones pedagógicas.",
            },
          ],
        },
        {
          id: "3.3",
          numbering: "3.3",
          title: "La inteligencia emocional y su praxis",
          content: [
            {
              type: "paragraph",
              text: "Aplicar la inteligencia emocional (IE) en el aula implica traducir un marco conceptual en decisiones pedagógicas observables: cómo iniciamos las clases, qué tipo de tareas diseñamos, cómo retroalimentamos, de qué modo gestionamos el conflicto y qué normas de convivencia modelamos. La praxis de la IE parte de reconocer que la emoción organiza la atención y, por tanto, el aprendizaje. Cuando el alumnado se percibe seguro, valorado y con metas claras, la activación fisiológica se mantiene en un rango óptimo que favorece la memoria de trabajo y la toma de decisiones; si predomina la ansiedad o el temor a la evaluación, la energía cognitiva se “fuga” hacia el control de la amenaza. Por ello, una práctica docente con enfoque de IE se ocupa de crear climas emocionales protectores y desafiantes a la vez, integrando rituales breves de apertura/cierre emocional, acuerdos explícitos de interacción y tareas con sentido personal. Igual de importante es entrenar la automotivación: ayudar a que los estudiantes fijen metas académicas significativas, monitoreen su progreso y celebren avances, pues la motivación intrínseca es uno de los mecanismos más vinculados con la persistencia y el rendimiento. Asimismo, la IE se ejerce en clave social: las habilidades emocionales facilitan la interacción con pares y docentes, habilitan la cooperación y amortiguan conflictos. En síntesis, la praxis de la IE no es un “extra” sino una forma de enseñar que alinea contenidos, estrategias y evaluación con la dimensión afectiva del aprendizaje.",
            },

            {
              type: "accordion",
              header: "Principios operativos para llevar la IE al aula",
              open: false,
              text:
                "- Seguridad psicológica: reglas claras, evaluación formativa y validación del esfuerzo.\n" +
                "- Activación óptima: aperturas breves (respiración, check-in emocional) y pausas de carga.\n" +
                "- Metas y automotivación: objetivos específicos, monitoreo visible y retroalimentación oportuna.",
            },

            {
              type: "paragraph",
              text: "Una praxis sólida de IE contempla tres capas de intervención. En la capa individual, se promueve la metacognición emocional: identificar señales corporales, etiquetar con precisión los estados afectivos y vincularlos a estrategias (reencuadre cognitivo, autoinstrucciones, pausas atencionales). En la capa interpersonal, se enseña a colaborar con procedimientos: roles rotativos, protocolos de diálogo, escucha activa, validación del punto de vista ajeno y negociación de acuerdos. En la capa institucional, se sostienen prácticas consistentes: rituales de comienzo/cierre, rutinas de resolución de conflictos, criterios de evaluación que incluyen autorregulación y convivencia. Estas capas se refuerzan mutuamente: la autorregulación aumenta la disponibilidad atencional para aprender; las interacciones competentes reducen la fricción social y mejoran la permanencia en tarea; y un marco institucional coherente desincentiva conductas de riesgo y fortalece la motivación. La articulación de capas convierte a la IE en un “andamiaje emocional” que soporta el aprendizaje intencional.",
            },

            {
              type: "accordion",
              header: "Estrategias rápidas (listas para usar mañana)",
              open: false,
              text:
                "- Inicio de clase en 3 pasos: pregunta generadora, conexión con experiencia, meta del día.\n" +
                "- Semáforo emocional: rojo/amarillo/verde para ajustar ritmo y apoyo.\n" +
                "- Cierre reflexivo: ¿qué sentí?, ¿qué aprendí?, ¿qué haré distinto?",
            },

            {
              type: "paragraph",
              text: "La praxis de IE también tiene un componente preventivo y de bienestar. Integrar educación emocional reduce factores de riesgo (conflictividad, desregulación, conductas violentas) y mejora la calidad de los vínculos, la cooperación y el sentido de pertenencia. Esto repercute directamente en el desempeño académico, porque el estudiantado dispone de más recursos para sostener la atención, perseverar ante la dificultad y pedir ayuda a tiempo. En paralelo, la IE potencia la competencia docente: facilita detectar señales tempranas de saturación emocional, ajustar la dificultad de las tareas y ofrecer retroalimentación que articula cognición y emoción. Cuando el proceso de enseñanza-aprendizaje se acompasa con la dimensión afectiva —metas claras, andamiaje emocional y evaluación con sentido— el aula se vuelve un entorno de alto desafío y alta contención: un contexto donde aprender es exigente, pero posible y deseable. Allí, la IE deja de ser eslogan y se transforma en práctica cotidiana.",
            },
          ],
        },

        {
          id: "3.4",
          numbering: "3.4",
          title:
            "El manejo de la inteligencia emocional y la transmisión de conocimientos",
          content: [
            {
              type: "paragraph",
              text: "Transmitir conocimiento no es solo seleccionar contenidos y explicarlos: es diseñar condiciones emocionales que hagan viable comprender, recordar y transferir lo aprendido. Manejar la IE en clase supone alinear objetivos, métodos y evaluación con procesos emocionales previsibles. Por ejemplo, antes de introducir un concepto difícil, conviene activar interés (pregunta provocadora, caso cercano), reducir incertidumbre (mapa de la sesión) y acordar criterios de éxito (qué significa hacerlo bien). Durante la explicación, se monitorea la activación: si hay signos de sobrecarga (inquietud, evitación), se intercalan micro-pausas o se fragmenta la tarea. En la práctica guiada, se promueve el ensayo con feedback inmediato, validando el error como información y ofreciendo reencuadres que transformen la frustración en oportunidad de mejora. En la práctica autónoma, se entrenan hábitos de autorregulación (gestión del tiempo, autoinstrucciones, chequeos de progreso). Esta coreografía didáctica convierte a la emoción en aliada de la transmisión: el mensaje llega porque el canal está abierto.",
            },

            {
              type: "accordion",
              header: "Checklist de diseño didáctico con IE",
              open: false,
              text:
                "- Activación del interés: anclajes significativos y preguntas guía.\n" +
                "- Claridad de ruta: objetivos visibles, criterios de logro y ejemplos modelo.\n" +
                "- Regulación en marcha: pausas, reencuadre del error y feedback sensible al esfuerzo.",
            },

            {
              type: "paragraph",
              text: "El manejo de IE también implica atender la dimensión social del aprendizaje. La interacción con iguales y docentes es un motor de comprensión: debatir, enseñar a otros, negociar significados y producir en colaboración acelera la construcción de conocimiento. Para que esto ocurra, se requieren “reglas emocionales de la conversación”: escucha activa, turnos, paráfrasis, desacuerdo respetuoso y validación. Asimismo, cultivar un clima de aceptación disminuye barreras afectivas (miedo a hablar, temor a equivocarse) y multiplica oportunidades de práctica deliberada. La IE orienta entonces la arquitectura social del aula: quién trabaja con quién, con qué roles, por cuánto tiempo y bajo qué protocolos. La coherencia entre tareas cooperativas y normas emocionales incrementa la calidad de la interacción y, por ende, la profundidad del aprendizaje.",
            },

            {
              type: "accordion",
              header: "Retroalimentación con enfoque emocional-cognitivo",
              open: false,
              text:
                "- Específica y procesual: qué hiciste bien, qué falta y cómo hacerlo.\n" +
                "- Temporoportuna: pronto, frecuente y ligada a la tarea.\n" +
                "- Motivadora: reconoce el esfuerzo, promueve mentalidad de crecimiento y sugiere el siguiente paso.",
            },

            {
              type: "paragraph",
              text: "Finalmente, gestionar IE durante la evaluación equilibra exigencia y cuidado. Antes: explicitar criterios, mostrar ejemplos de calidad y realizar una práctica de bajo riesgo reduce ansiedad y clarifica expectativas. Durante: ofrecer recordatorios de estrategias (respiración breve, lectura atenta de ítems, gestión del tiempo) y validar emociones sin bajar el estándar. Después: usar la evaluación como insumo de aprendizaje —rubricas comentadas, conferencias breves uno a uno, planes de mejora— convierte el resultado en retroalimentación útil. Esta secuencia ayuda a que la afectividad sume: la motivación autoinducida, la interacción social eficaz y la regulación del estrés amplifican la transmisión de conocimientos y elevan el rendimiento sostenible a lo largo del curso.",
            },
          ],
        },

        {
          id: "3.5",
          numbering: "3.5",
          title: "La escuela centrada en el individuo",
          content: [
            {
              type: "paragraph",
              text: "Una escuela centrada en el individuo reconoce la diversidad de ritmos, historias y perfiles cognitivo-emocionales del alumnado. Desde esta perspectiva, la IE no es un anexo sino un principio organizador: educar supone apoyar el desarrollo de autoconcepto y autoestima a través de experiencias de éxito ajustadas, relaciones de aceptación y retroalimentación que oriente sin etiquetar. La pertenencia al grupo —sentirse visto, escuchado e incluido— es determinante para el bienestar y el desempeño; cuando las experiencias sociales son de rechazo o invisibilización, emergen inseguridad y dudas sobre las propias capacidades. Por el contrario, contextos de aceptación habilitan un autoconcepto positivo y predisponen a la exploración. Este enfoque exige observar el aula como ecosistema: pares, docentes y normas interactúan configurando oportunidades o barreras. Una escuela centrada en el individuo crea múltiples puertas de entrada al aprendizaje, valida diferentes formas de participación y reconoce que la afectividad es constitutiva de la experiencia escolar.",
            },

            {
              type: "accordion",
              header: "Lineamientos para una escuela centrada en la persona",
              open: false,
              text:
                "- Pertenencia: rituales de bienvenida, acuerdos co-creados y roles inclusivos.\n" +
                "- Expectativas altas y alcanzables: metas claras y andamiaje visible.\n" +
                "- Evaluación formativa: retroalimentación frecuente, planes de mejora y valoración del progreso.",
            },

            {
              type: "paragraph",
              text: "El centro en la persona también supone flexibilidad didáctica para responder a necesidades diversas. Esto incluye ofrecer opciones en tareas (producto, proceso o tema), secuenciar apoyos (de lo concreto a lo abstracto) y diseñar experiencias multisensoriales que conecten con distintas fortalezas. La IE guía esas decisiones: identificar estados emocionales, ajustar el ritmo, prevenir escaladas de conflicto y promover cooperación. En paralelo, las relaciones con pares adquieren estatus de “contenido”: se enseñan habilidades sociales como parte del currículo (asertividad, negociación, reparación). La escuela se convierte así en un laboratorio de prácticas sociales y emocionales que fortalecen la identidad personal y la capacidad de vincularse.",
            },

            {
              type: "accordion",
              header: "Prácticas inclusivas con foco socioemocional",
              open: false,
              text:
                "- Aprendizaje cooperativo con protocolos (roles, tiempos, síntesis compartidas).\n" +
                "- Contratos de clase para gestionar desacuerdos sin perder el vínculo.\n" +
                "- Tutoría entre pares y mediación escolar con guías paso a paso.",
            },

            {
              type: "paragraph",
              text: "Finalmente, una escuela centrada en el individuo vincula IE con ciudadanía y prevención. Cuando se sistematiza la educación emocional —nombrar emociones, usar estrategias de regulación, desarrollar empatía— disminuyen conductas de riesgo y escaladas de violencia, y aumenta la capacidad de pedir ayuda y ofrecerla. La institución deja de operar solo como transmisora de contenidos para asumirse como comunidad de aprendizaje donde cada estudiante encuentra un lugar valioso y exigente a la vez. Este equilibrio se traduce en mejores resultados académicos, mayor bienestar y trayectorias escolares más estables. En suma, poner a la persona en el centro, con la IE como brújula, no reduce el nivel: lo vuelve sostenible y significativo para todas y todos.",
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
          href: "https://youtu.be/NzKpmoTZgBU", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Inteligencia Emocional - El Vídeo Que Te Cambiará la Vida (Resumen animado) https://youtu.be/NzKpmoTZgBU",
            "IEIE-Sem4 https://youtu.be/pteCysau0mE",
            "La educación emocional, su importancia en el proceso de aprendizaje https://www.redalyc.org/pdf/440/44023984007.pdf",
            "La inteligencia emocional en el contexto educativo: hallazgos científicos de sus efectos en el aula https://www.educacionyfp.gob.es/dam/jcr:6b5bc679-e550-47d9-804e-e86b8f4b4603/re3320611443-pdf.pdf",
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
            "Aichhorn, A. (2006). *Juventud desamparada.* Barcelona: Gedisa.",
            "Bar-On, R. (2006). The Bar-On model of emotional-social intelligence (ESI). *Psicothema, 18*(1), 13-18.",
            "Beldoch, M. (1964). Sensitivity to expression of emotional meaning in three modes of communication. En J. R. Davitz & M. Beldoch (Eds.), *The Communication of Emotional Meaning* (pp. 31-42). New York: McGraw-Hill.",
            "Bisquerra, R. (2006). *Educación emocional y bienestar.* Madrid: Wolters Kluwer.",
            "Bisquerra Alzina, R. (2009). *Psicopedagogía de las emociones.* Madrid: Síntesis.",
            "Bisquerra, R. (2011). *Educación emocional. Propuestas para educadores y familias.* Bilbao: Desclée de Brouwer.",
            "Bisquerra, R. (2012). *¿Cómo educar las emociones? La inteligencia emocional en la infancia y la adolescencia.* Barcelona: Faros-Cuadernos.",
            "Goleman, D. (1995). *Inteligencia emocional.* Barcelona: Kairós.",
            "Goleman, D. (1997). *La inteligencia emocional.* Buenos Aires: Javier Vergara Editor.",
            "González, E. (2005). *Padres, hijos y amigos. La educación del adolescente.* Madrid: CCS.",
            "González, E. (2007). *Aprendizajes y diversidad educativa.* Madrid: CCS.",
            "Kandel, E. R., Schwartz, J. H. & Jessell, T. M. (2001). *Principios de neurociencia.* Madrid: McGraw-Hill.",
            "Labos, E., Slachevsky, A., Torralva, T., Fuentes, P. & Manes, F. (2018). Neuroanatomía funcional de las emociones. En *Tratado de Neuropsicología Clínica.* Buenos Aires: Akadia.",
            "Mayer, J. D. & Salovey, P. (1997). What is emotional intelligence? En P. Salovey & D. Sluyter (Eds.), *Emotional Development and Emotional Intelligence: Implications for Educators* (pp. 3-31). New York: Basic Books.",
            "Pallarés, M. (2010). *Emociones y sentimientos. Dónde se forman y cómo se transforman.* Barcelona: Marge Books.",
            "Payne, W. L. (1986). *A study of emotion: developing emotional intelligence…* (Tesis doctoral). Ann Arbor, MI.",
            "Salovey, P. & Mayer, J. D. (1990). Emotional intelligence. *Imagination, Cognition and Personality, 9*(3), 185-211.",
            "Simmons, S. (1998). *Cómo medir la inteligencia emocional.* Madrid: EDAF.",
            "Triglia, A., Regader, B. & García-Allen, J. (2018). *¿Qué es la inteligencia? Del CI a las inteligencias múltiples.* Barcelona: EMSE.",
            "Trujillo Flores, M. M. & Rivas Tovar, L. A. (2005). Orígenes, evolución y modelos de inteligencia emocional. *Innovar, 15*(25), 9-24.",
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
