/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId : "doctorado-educacion",
courseId  : "pdpe",                 // ajusta si usas otro identificador interno
id        : "pdpe-modulo3",

/* ── Datos visibles ─────────────────────────── */
courseName: "La práctica docente desde la perspectiva evaluadora",
title     : "Módulo 3. La organización del trabajo en el grupo",
semestre  : "Cuarto semestre",
teacher   : "Dr. Jesús Agustín Zapata Velázquez",

/* ── Objetivo y competencias ────────────────── */
objective:
  "Analizar la organización del trabajo en el grupo escolar, considerando la distribución del tiempo y el espacio en el aula, la planificación de actividades individuales y colectivas, y la estructuración de instrucciones para el desarrollo de la clase, con el propósito de mejorar la gestión del aprendizaje y favorecer un ambiente educativo estructurado, inclusivo y efectivo.",

competencies: [
  "Diseña y gestiona la distribución del espacio y el tiempo en el aula, considerando las necesidades del grupo y favoreciendo un ambiente propicio para el aprendizaje.",
  "Diseña estrategias para la distribución equilibrada de actividades individuales y colectivas, promoviendo la participación activa de los estudiantes.",
  "Desarrolla habilidades para planificar y comunicar instrucciones claras, estructuradas y adaptadas a las características del grupo, facilitando la comprensión y el desarrollo de la clase.",
  "Analiza el impacto de la organización del trabajo en el grupo en la calidad del aprendizaje y propone mejoras en la gestión del aula con base en enfoques pedagógicos actualizados.",
],


  /* ── Contenido temático (jerarquía recursiva) ─────────── */
themes: [
  /* 0. Página Info (opcional) */
  {
    id: "3.info",
    numbering: "Info",
    title: "Información general del módulo",
    isUnitInfo: true,
    content: [],
  },

  /* 1. Unidad principal */
  {
    id: "3",
    numbering: "Unidad 3",
    title: "La organización del trabajo en el grupo",
    content: [
  /* Párrafo 1 — Sentido de “organizar el trabajo en el grupo” (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Organizar el trabajo en el grupo supone articular de manera coherente tres decisiones troncales: cómo se usa el espacio del aula, cómo se distribuye el tiempo y cómo se estructuran las interacciones pedagógicas (individuales, colaborativas y cooperativas). Esta organización no es un acto meramente logístico, sino un proceso pedagógico que condiciona la profundidad de los aprendizajes y el clima socioemocional del aula. Un aula donde los tiempos están claramente secuenciados (apertura, desarrollo y cierre), el espacio favorece la visibilidad y la accesibilidad, y las instrucciones son claras y multimodales, habilita que el alumnado participe de manera activa, comprenda qué se espera de él y autorregule su desempeño. En contraste, cuando cada clase depende de la improvisación, se fragmentan los objetivos, se diluyen los criterios de logro y el grupo opera con incertidumbre, restando foco cognitivo a la construcción de conocimiento. Por ello, esta unidad enfatiza la necesidad de diseñar, ensayar, evaluar y reajustar continuamente la organización del trabajo, entendiendo que no existe un formato único: cada grupo, con sus ritmos, intereses y necesidades, demanda configuraciones específicas que el docente debe diagnosticar y pilotear con evidencia en mano."
  },

  /* Párrafo 2 — Distribución del tiempo y del espacio como andamiaje del aprendizaje (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "El tiempo didáctico no sólo se mide en minutos, sino en oportunidades reales para activar conocimientos previos, procesar información nueva y consolidar evidencias de aprendizaje. Una clase equilibrada reconoce la necesidad de momentos de activación (preguntas detonadoras, retos, recuperaciones breves), de construcción (andamiajes, modelamientos, práctica guiada) y de cierre (síntesis, metacognición y evaluación formativa). Paralelamente, el espacio del aula deja de ser un contenedor neutro para convertirse en un instrumento didáctico: la disposición en U favorece el diálogo horizontal; el trabajo en islas potencia la cooperación estructurada; las estaciones rotativas permiten la diferenciación de tareas; los rincones de apoyo sirven para el refuerzo y la tutoría entre pares. La accesibilidad (circulación, visibilidad de recursos, señalética clara) y la inclusión (adecuaciones físicas y comunicativas) son criterios irrenunciables. Gestionar el binomio tiempo‑espacio con criterio pedagógico implica, además, anticipar transiciones fluidas —con instrucciones breves y visibles— para minimizar tiempos muertos y maximizar el involucramiento cognitivo."
  },

  /* Párrafo 3 — Modalidades de trabajo y claridad de instrucciones (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "La elección entre trabajo individual, en parejas, en pequeño grupo o cooperativo estructurado responde a intencionalidades didácticas distintas: profundizar en la autorregulación, contrastar ideas en díadas, distribuir roles para resolver problemas complejos o promover la interdependencia positiva. Sea cual sea la modalidad, la diferencia entre una actividad productiva y una caótica suele residir en la calidad de las instrucciones: deben explicitar propósito, producto esperado, criterios de logro, tiempos y roles, así como los recursos disponibles y el procedimiento paso a paso. La redundancia estratégica (oral + visual + ejemplo modelo) reduce la ambigüedad, mientras que los checklists y rúbricas operativas permiten al alumnado monitorear su propio avance. Incorporar andamiajes como guías de preguntas, plantillas de organización de información y ejemplos anotados mejora la comprensión de la tarea y disminuye el costo cognitivo asociado a la interpretación de consignas, liberando recursos mentales para el pensamiento de orden superior (análisis, síntesis, transferencia)."
  },

  /* Párrafo 4 — Evaluación y retroalimentación de la organización (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Organizar bien también implica **evaluar cómo se está organizando**. Para ello, el docente puede emplear instrumentos de monitoreo como rúbricas de observación de clima de aula, listas de cotejo sobre claridad de instrucciones, sociogramas para mapear la participación y analíticas de aprendizaje provenientes del LMS. Los datos recogidos deben traducirse en decisiones: redistribuir tiempos, redefinir roles en equipos, ajustar el nivel de desafío o variar los formatos de consignas. La retroalimentación —formativa, específica y orientada a la acción— se vuelve un eje para que el grupo entienda qué funcionó y qué requiere mejora. La evaluación del propio diseño organizativo, registrada en bitácoras docentes o portafolios de aula, fomenta la profesionalización del profesor: convierte la experiencia cotidiana en evidencia que puede discutirse en colegiados, compararse con marcos de referencia y escalarse como buena práctica. Así, la organización del trabajo deja de ser un hábito tácito para convertirse en un objeto explícito de mejora continua."
  },

  /* Párrafo 5 — Mejora continua y documentación de la práctica (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "La organización del trabajo en el grupo es un sistema dinámico que se optimiza iterativamente. Documentar decisiones (por qué esa distribución del espacio, por qué ese ritmo temporal, por qué ese formato de instrucción), cruzarlas con resultados (participación, calidad de productos, clima socioemocional) y reflexionar con el equipo docente permite instaurar ciclos de indagación‑acción. Estos ciclos sostienen la cultura de mejora continua y evitan la repetición acrítica de estructuras que quizá funcionaron con un grupo, pero no necesariamente con otro. La evidencia acumulada (bitácoras, rúbricas, registros audiovisuales, analíticas) nutre un portafolio docente que no sólo legitima la toma de decisiones, sino que habilita la transferencia de prácticas efectivas. En suma, organizar el trabajo del grupo no es ‘ordenar la clase’: es diseñar condiciones para que el aprendizaje ocurra con profundidad, equidad y sentido, y someter ese diseño a evaluación sistemática para ajustarlo cada vez que el contexto cambie o la evidencia lo exija."
  },

  /* Acordeón — Mapa de ruta en tres niveles */
  {
    type  : "accordion",
    header: "Mapa de ruta para organizar el trabajo en el grupo (3 niveles)",
    open  : false,
    text  :
      "**Nivel 1 — Estabilización básica**  \n" +
      "• Secuenciar la clase en apertura–desarrollo–cierre.  \n" +
      "• Definir normas de convivencia y roles mínimos.  \n" +
      "• Usar instrucciones orales + visuales con ejemplos modelo.  \n\n" +
      "**Nivel 2 — Optimización didáctica**  \n" +
      "• Diferenciar tiempos y productos según ritmos de aprendizaje.  \n" +
      "• Alternar modalidades (individual, parejas, cooperativo) con criterios claros.  \n" +
      "• Implementar rúbricas y checklists para auto/coevaluación.  \n\n" +
      "**Nivel 3 — Mejora continua basada en evidencias**  \n" +
      "• Monitorear participación y clima de aula con instrumentos sistemáticos.  \n" +
      "• Documentar decisiones y resultados en portafolio/bitácora docente.  \n" +
      "• Socializar, contrastar y escalar buenas prácticas en el trabajo colegiado."
  },
],

    /* → Subtemas de primer nivel */
    subthemes: [
      {
        id: "3.1",
        numbering: "3.1",
        title: "El aula y sus características",
        content  : [
    /* Párrafo 1 — El aula como ecosistema pedagógico (~300 palabras) */
    {
      type: "paragraph",
      text:
        "El aula es mucho más que un contenedor físico: es un ecosistema pedagógico en el que se articulan espacio, tiempo, materiales, relaciones y propósitos didácticos. Su configuración condiciona la forma en que circula el conocimiento, la manera en que los estudiantes interactúan entre sí y con el docente, y el grado de autonomía o cooperación que se promueve. Concebir el aula como ecosistema implica reconocer que toda decisión organizativa (posición del mobiliario, accesibilidad a recursos, visibilidad del pizarrón o de las pantallas, rutas de desplazamiento, presencia de rincones de trabajo) tiene efectos directos en la atención, la motivación y el clima socioafectivo. Desde esta perspectiva, la organización no puede ser rígida ni única: debe responder a los objetivos de aprendizaje, al número de estudiantes, a la diversidad del grupo y al tipo de tarea cognitiva que se desea activar (exploración, resolución de problemas, debate, producción colaborativa, etc.). Por ello, el docente actúa como diseñador de ambientes, ajustando continuamente el arreglo espacial y temporal para maximizar la participación y el aprendizaje significativo. Esta mirada ecosistémica también demanda integrar instrumentos de evaluación formativa que permitan verificar si la configuración del aula realmente potencia la comprensión y la colaboración, y, en caso necesario, reconfigurarla con criterios de accesibilidad, inclusión y usabilidad para todos."
    },

    /* Párrafo 2 — Configuraciones espaciales típicas y su intención didáctica (~300 palabras) */
    {
      type: "paragraph",
      text:
        "Entre las configuraciones espaciales más frecuentes se encuentran: (a) la distribución tradicional en filas, que concentra la atención en la exposición del docente y facilita el control, pero restringe la interacción horizontal; (b) los grupos o islas, que promueven la cooperación, la co‑construcción y el aprendizaje entre pares, aunque exigen una gestión fina del tiempo y de las normas de trabajo; (c) el círculo o la U, que optimiza la visibilidad recíproca, el diálogo y el debate académico; y (d) los espacios flexibles, con mobiliario móvil y estaciones de trabajo, que habilitan transiciones rápidas entre mini‑lecciones, trabajo autónomo, laboratorio de ideas y socialización de productos. Elegir una u otra configuración no es un acto estético, sino estratégico: se decide en función de los resultados de aprendizaje esperados, la complejidad cognitiva de las tareas, la necesidad de retroalimentación entre pares y el tipo de evaluación (diagnóstica, formativa o sumativa) que se implementará. En paralelo, el docente debe prever rutas claras para la circulación, zonas de materiales accesibles, visibilidad del pizarrón/pantallas y micro‑espacios para tutorías rápidas. Asimismo, considerar principios de ergonomía (iluminación, temperatura, acústica, confort visual) y neuroeducación (gestión del estímulo, pausas activas, variación postural) contribuye a sostener la atención y reducir la carga cognitiva innecesaria."
    },

    /* Párrafo 3 — Recursos, ambientación y multisensorialidad (~300 palabras) */
    {
      type: "paragraph",
      text:
        "La riqueza del aula se incrementa cuando incorpora recursos analógicos y digitales alineados con los objetivos curriculares: pizarras digitales, visualizadores, kits manipulativos, material gráfico, bibliografía accesible, simuladores, plataformas LMS y herramientas colaborativas en línea. La clave es su curaduría: no se trata de acumular recursos, sino de seleccionar aquellos que amplían la comprensión conceptual, favorecen el aprendizaje activo y permiten evidenciar procesos, no solo productos finales. La ambientación también comunica expectativas: un espacio ordenado, con consignas visibles, rúbricas transparentes, organizadores gráficos y protocolos de trabajo fomenta la autorregulación y la autonomía. Del mismo modo, disponer de “zonas funcionales” (investigación, prototipado, discusión, reflexión silenciosa) habilita itinerarios de aprendizaje diferenciados y ritmos diversos. Para garantizar inclusión, es indispensable prever apoyos visuales, accesibilidad tecnológica, materiales de lectura en distintos formatos y reglas claras de interacción. Finalmente, el aula debe ser auditable: planillas de observación, registros anecdóticos, rúbricas y artefactos evaluativos permiten analizar cómo la disposición espacial y la gestión temporal impactan en la participación y en la calidad de los desempeños."
    },

    /* Párrafo 4 — Clima, inclusión y ajuste continuo (~300 palabras) */
    {
      type: "paragraph",
      text:
        "El clima del aula —respeto, confianza, interacción dialógica y normas co‑construidas— es inseparable de su configuración material. Un diseño espacial inclusivo, sumado a instrucciones claras y tiempos razonablemente distribuidos, reduce la incertidumbre, facilita la participación de estudiantes con distintos estilos y ritmos de aprendizaje y potencia la autorregulación. Por ello, la organización del aula debe tratarse como un proceso iterativo: observar, recoger evidencias, retroalimentar y reconfigurar. Entre los indicadores a monitorear están la visibilidad de los apoyos didácticos, la equidad en la toma de la palabra, la fluidez de las transiciones entre actividades, la calidad de las interacciones en equipos y el uso efectivo del tiempo instruccional. Este ciclo de mejora continua convierte al docente en un estratega del espacio‑tiempo pedagógico, capaz de tomar decisiones informadas para sostener la atención, promover pensamiento crítico y colaboración, y asegurar que el ambiente —físico, social y evaluativo— esté al servicio del aprendizaje profundo."
    },

    /* Acordeón 1 — Configuraciones espaciales destacadas en el módulo */
    {
      type  : "accordion",
      header: "Configuraciones espaciales y su propósito didáctico",
      open  : false,
      text  :
        "* **Filas tradicionales**: foco en la exposición y el control; limitada interacción horizontal.\\n" +
        "* **Islas o grupos pequeños**: colaboración, co‑construcción, aprendizaje entre pares.\\n" +
        "* **Círculo / U**: debate, visibilidad recíproca, diálogo socrático.\\n" +
        "* **Espacios flexibles y estaciones**: transiciones rápidas entre mini‑lecciones, trabajo autónomo y socialización.\\n" +
        "* **Zonas funcionales**: lectura silenciosa, prototipado, discusión guiada, retroalimentación."
    },

    /* Acordeón 2 — Checklist de organización tiempo‑espacio */
    {
      type  : "accordion",
      header: "Checklist rápido para planificar tiempo y espacio",
      open  : false,
      text  :
        "* **Estructura temporal 10‑70‑20**: inicio (activación y objetivos) – desarrollo (práctica guiada/colaborativa) – cierre (síntesis y evaluación formativa).\\n" +
        "* **Accesibilidad y visibilidad**: todos ven, todos oyen, todos acceden a recursos.\\n" +
        "* **Movilidad prevista**: rutas claras para transiciones sin pérdida de tiempo.\\n" +
        "* **Instrumentos de seguimiento**: rúbricas, listas de cotejo, registros anecdóticos.\\n" +
        "* **Flexibilidad**: posibilidad de reconfigurar el aula según resultados y necesidades emergentes."
    },

    /* Video — sugerido en el propio módulo (organización del aula) */
    {
      type   : "video",
      title  : "5 aspectos a considerar en la organización de tu aula",
      src    : "https://www.youtube.com/watch?v=12F5YmWkD10",
      caption: "Video guía para analizar espacio, tiempo, transiciones, recursos y clima de aula."
    },
  ],
        /* → Sub‑subtema */
        subthemes: [
          {
            id: "3.1.1",
            numbering: "3.1.1",
            title: "La distribución del tiempo y el espacio",
            content: [
    /* Párrafo 1 (≈300 palabras) */
    {
      type: "paragraph",
      text:
        "La distribución del tiempo y del espacio en el aula constituye un dispositivo pedagógico de primer orden: condiciona la secuencia didáctica, la participación, la accesibilidad a los recursos y, en definitiva, el tipo de experiencias de aprendizaje que los estudiantes pueden vivir. Planificar el tiempo no es solo asignar minutos a actividades, sino definir transiciones claras, ritmos adecuados y micro-momentos de evaluación formativa que permitan reorientar la clase cuando sea necesario. A su vez, organizar el espacio implica decidir cómo se disponen los estudiantes (filas, U, islas colaborativas, estaciones de trabajo), qué tan visibles y accesibles son los materiales, y qué tanto puede desplazarse el docente para monitorear, retroalimentar y generar andamiajes oportunos. Un enfoque competente de la gestión tiempo‑espacio articula metas de aprendizaje, diversidad del grupo y metodologías activas, de modo que el aula pueda ‘moverse’ entre el trabajo individual en silencio, el diálogo socrático, el aprendizaje cooperativo o las dinámicas de indagación por proyectos, sin perder coherencia ni fluidez organizativa."
    },

    /* Párrafo 2 (≈300 palabras) */
    {
      type: "paragraph",
      text:
        "Desde la perspectiva de la evaluación del desempeño docente, la manera en que se estructura el binomio tiempo‑espacio es un indicador observable de la calidad de la gestión de aula. Distribuciones rígidas y tiempos lineales, sin pausas metacognitivas ni momentos de verificación, suelen correlacionar con baja participación y aprendizaje superficial. Por el contrario, secuencias que contemplan activación de saberes previos, construcción colaborativa, aplicación guiada y cierre reflexivo, apoyadas por una disposición espacial flexible, tienden a favorecer aprendizajes más profundos y transferencia. En este marco, resulta clave que el docente planifique bloques temporales con duración coherente a la complejidad cognitiva de cada tarea; que anticipe tiempos de transición (cambio de equipos, reconfiguración del mobiliario, distribución de materiales) y que, al mismo tiempo, defina ‘zonas pedagógicas’ en el aula (lectura silenciosa, laboratorio de ideas, mesa de prototipado, rincón de retroalimentación) que faciliten la autorregulación de los estudiantes y la diferenciación pedagógica."
    },

    /* Párrafo 3 (≈300 palabras) */
    {
      type: "paragraph",
      text:
        "Operativamente, la optimización del tiempo y del espacio demanda instrumentos de control y mejora continua: cronogramas visibles para el grupo, rúbricas de organización del aula, listas de cotejo para transiciones eficientes y protocolos de roles (coordinador, relator, responsable de materiales) que minimicen tiempos muertos. Del lado del espacio, disponer mobiliario móvil, señalética simple (qué se hace en cada zona y cómo), y acuerdos de circulación segura ayuda a sostener ambientes inclusivos y con alta participación. Para evitar la ‘entropía organizativa’, el docente puede apoyarse en micro‑instrucciones proyectadas o impresas, timers visibles, y esquemas de rotación por estaciones con tiempos equilibrados. Finalmente, la revisión periódica —con el grupo— de qué funcionó y qué no en la gestión del tiempo y el espacio, convierte a la clase en un laboratorio de mejora continua donde los estudiantes también asumen corresponsabilidad sobre la ecología del aula."
    },

    /* Imagen ilustrativa */
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      alt: "Configuraciones flexibles del aula para trabajo colaborativo",
      caption: "Ejemplo de aula flexible con islas de trabajo y zonas diferenciadas."
    },

    /* Acordeón 1 — Guía operativa para planear tiempo y espacio */
    {
      type: "accordion",
      header: "Guía operativa para planear tiempo y espacio",
      open: false,
      text:
        "• Definir bloques temporales alineados a la complejidad cognitiva de la tarea. \n" +
        "• Incluir tiempos de transición y protocolos breves para reorganizar el aula. \n" +
        "• Establecer zonas pedagógicas (individual, colaborativa, retroalimentación). \n" +
        "• Hacer visibles los objetivos, el cronograma y los productos esperados. \n" +
        "• Usar timers y micro‑instrucciones para sostener el ritmo y la claridad. \n" +
        "• Cerrar con metarreflexión: ¿cómo usamos el tiempo y el espacio? ¿qué ajustamos?"
    },

    /* Acordeón 2 — Errores frecuentes y cómo mitigarlos */
    {
      type: "accordion",
      header: "Errores frecuentes y cómo mitigarlos",
      open: false,
      text:
        "• Subestimar el tiempo de transición: diseñar procedimientos y roles para mover mobiliario y materiales. \n" +
        "• Mantener una única disposición espacial para todas las actividades: prever configuraciones alternativas (U, islas, estaciones). \n" +
        "• Actividades extensas sin pausas metacognitivas: introducir cortes breves de verificación y ajuste. \n" +
        "• Falta de visibilidad del plan de la sesión: proyectar o colocar en el aula el itinerario y los tiempos. \n" +
        "• No recoger datos para mejorar: aplicar mini‑encuestas o retroalimentación rápida al cierre para ajustar tiempos y disposición."
    }
  ],
          },
        ],
      },

      {
        id: "3.2",
        numbering: "3.2",
        title: "La distribución de actividades individuales y colectivas",
        content: [
    /* Párrafo 1 (~300 palabras) — Equilibrio pedagógico y sentido formativo */
    {
      type: "paragraph",
      text:
        "La distribución de actividades individuales y colectivas constituye una decisión pedagógica estratégica que impacta directamente en la profundidad del aprendizaje, la participación activa y el desarrollo de competencias socioemocionales y cognitivas del estudiantado. Un desequilibrio hacia lo individual puede derivar en procesos autorreferenciales, con escasa interacción dialógica, mientras que la sobrecarga de dinámicas colectivas corre el riesgo de diluir la responsabilidad personal y la evaluación precisa del desempeño. Desde un enfoque competencial, el docente debe articular secuencias didácticas que hagan transitar al estudiante entre momentos de exploración autónoma (búsqueda, análisis crítico, metacognición) y espacios de co-construcción (negociación de significados, argumentación, liderazgo compartido). Este balance requiere explicitar propósitos, criterios de logro y evidencias esperadas para cada modalidad, de modo que el estudiante comprenda el porqué del formato elegido y pueda autorregular su participación. La clave es diseñar actividades individuales con metas claras y retroalimentación formativa —que favorezcan la autorreflexión y la toma de decisiones—, y, complementarmente, tareas cooperativas estructuradas con roles definidos, reglas de interacción y mecanismos de rendición de cuentas intraequipo. La distribución no es fija: debe responder al nivel de complejidad del contenido, a la heterogeneidad del grupo, al tiempo disponible y al tipo de productos esperados. En síntesis, distribuir con criterio pedagógico las actividades individuales y colectivas permite articular autonomía con colaboración, pensamiento crítico con diálogo argumentado y responsabilidad personal con responsabilidad compartida."
    },

    /* Párrafo 2 (~300 palabras) — Criterios para decidir el “cuándo” y el “cómo” */
    {
      type: "paragraph",
      text:
        "Decidir cuándo privilegiar el trabajo individual o el colectivo exige mirar, al menos, cinco dimensiones: (1) la naturaleza del objetivo de aprendizaje (conceptual, procedimental, actitudinal o competencial); (2) la fase de la secuencia didáctica (activación de saberes previos, modelamiento, práctica guiada, transferencia, evaluación); (3) el grado de complejidad cognitiva implicado (recordar, analizar, crear); (4) el nivel de dominio autónomo del alumnado sobre las estrategias requeridas; y (5) el tiempo pedagógico disponible para garantizar una participación justa y significativa. Actividades introductorias que buscan activar conocimientos previos y posicionar preguntas orientadoras suelen funcionar mejor en formato individual breve seguido de una socialización estructurada. Las tareas de investigación, resolución de problemas auténticos o proyectos interdisciplinarios, por su propia complejidad, demandan tramos colectivos cuidadosamente coreografiados (roles, cronograma, entregables parciales) con hitos individuales que aseguren la trazabilidad del aporte personal. Por su parte, los cierres reflexivos y evaluaciones formativas pueden alternar autoevaluaciones individuales (metacognición) y coevaluaciones grupales (consensos sobre criterios, identificación de fortalezas y áreas de mejora del equipo). Esta arquitectura flexible, informada por criterios explícitos, evita que la elección del formato sea arbitraria o meramente logística, y la convierte en una decisión didáctica consciente, transparente y comunicada al grupo."
    },

    /* Lista 2 — Pasos para diseñar una secuencia que combine ambos formatos */
    {
      type: "list",
      style: "ordered",
      items: [
        "Definir el objetivo de aprendizaje y el nivel cognitivo esperado.",
        "Mapear qué parte del objetivo requiere exploración autónoma y cuál, co-construcción.",
        "Especificar roles, productos parciales y criterios de evaluación para el trabajo colaborativo.",
        "Diseñar instrumentos diferenciados para medir aportes individuales y logros grupales.",
        "Planificar retroalimentaciones iterativas (individuales y colectivas) y mecanismos de ajuste.",
        "Cerrar con síntesis integradora: cada estudiante explicita qué aprendió solo y qué aprendió con otros."
      ]
    },

    /* Párrafo 3 (~300 palabras) — Evaluación, retroalimentación y gestión del riesgo de inequidad */
    {
      type: "paragraph",
      text:
        "Una distribución eficaz de actividades individuales y colectivas debe ir acompañada de dispositivos de evaluación coherentes con cada modalidad. En el plano individual, rúbricas analíticas y diarios de aprendizaje permiten estimar la progresión real del estudiante, así como su capacidad para integrar retroalimentaciones. En el plano colectivo, la evaluación debe triangulase (heteroevaluación del producto grupal, coevaluación entre pares y autoevaluación del rol desempeñado), minimizando el clásico problema del “free rider” y otorgando visibilidad a los aportes diferenciados. Es recomendable fijar indicadores de proceso (asistencia a reuniones, cumplimiento de hitos, calidad de las contribuciones) y de resultado (pertinencia del producto, rigor metodológico, claridad comunicativa), ponderando ambos en la calificación. Para reducir inequidades, el docente puede rotar roles (coordinación, relatoría, curaduría de fuentes, síntesis final), proporcionar guías de seguimiento y habilitar instancias periódicas de check-in formativo. Asimismo, el uso de herramientas digitales colaborativas (documentos compartidos, tableros Kanban, wikis) facilita la trazabilidad de aportes y la retroalimentación oportuna. En síntesis, el éxito del equilibrio entre actividades individuales y colectivas depende de la alineación entre objetivos, tareas, tiempos, roles y evidencias; de la transparencia de los criterios; y de la calidad de la retroalimentación que impulsa ciclos iterativos de mejora."
    },

    /* Imagen ilustrativa */
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",
      alt: "Estudiantes trabajando individual y colaborativamente en el aula",
      caption: "Equilibrar autonomía y colaboración exige diseño instruccional explícito y criterios de evaluación diferenciados."
    },

    /* Lista 1 — Ejemplos de actividades individuales y su propósito */
    {
      type: "list",
      style: "unordered",
      items: [
        "Lecturas guiadas con preguntas metacognitivas (autorregulación y profundización conceptual).",
        "Resolución de problemas con protocolo de pensamiento en voz alta (explicitación de estrategias).",
        "Diarios de aprendizaje y autoevaluaciones con rúbricas (reflexión y toma de decisiones).",
        "Microensayos argumentativos (claridad expositiva y rigor en el uso de evidencias).",
        "Quizzes de bajo riesgo (feedback inmediato para ajustar el rumbo)."
      ]
    },

    
  ],
      },

      {
        id: "3.3",
        numbering: "3.3",
        title: "La planeación de instrucciones para el desarrollo de la clase",
        content  : [
    /* Párrafo 1 — Sentido pedagógico de las instrucciones (~300 palabras) */
    {
      type: "paragraph",
      text:
        "Planear instrucciones claras, secuenciadas y pertinentes es un componente medular de la gestión del aula porque conecta los objetivos de aprendizaje con la acción concreta que el estudiantado debe realizar. Más allá de decir “hagan el ejercicio”, la instrucción eficaz define el qué, cómo, con qué recursos, durante cuánto tiempo, con qué producto y bajo qué criterios de calidad será valorado. Perrenoud señala que la calidad de la enseñanza no depende solo del contenido sino de cómo se estructura la experiencia de aprendizaje; por eso, los enunciados deben minimizar ambigüedades, anticipar dudas frecuentes y modelar el desempeño esperado. En contextos de educación superior —y, con más razón, en investigación doctoral— las instrucciones operan también como dispositivos de autorregulación: orientan la planificación personal, fomentan la metacognición y clarifican expectativas evaluativas. Si el docente comunica pasos, tiempos, entregables y rúbricas, reduce la ansiedad, evita interrupciones constantes para aclarar consignas y optimiza el tiempo de interacción para profundizar conceptualmente. Además, las instrucciones bien diseñadas permiten que el alumnado transite de lo individual a lo colaborativo con fluidez, pues explicitan roles, responsabilidades y mecanismos de coordinación. En suma, instruir no es “dar órdenes”, sino diseñar rutas de acción comprensibles que conectan metas, evidencias y criterios, habilitando la autonomía y la participación informada."
    },

    /* Lista 1 — Checklist de claridad instruccional */
    {
      type : "list",
      style: "unordered",
      title: "Checklist de claridad instruccional (úsala antes de publicar la consigna)",
      items: [
        "¿El verbo de la tarea es observable y evaluable (analiza, diseña, argumenta…)?",
        "¿Se indica producto esperado, formato, extensión y fecha de entrega?",
        "¿Los criterios/rúbrica están visibles y alineados con los objetivos?",
        "¿Se explicitan recursos mínimos (bibliografía, dataset, plantilla, software)?",
        "¿La consigna está secuenciada en pasos o fases identificables?",
        "¿Existe un ejemplo/modelo o sample de calidad esperada?",
        "¿Se prevén FAQs o un canal para dudas (foro, chat, office hours)?"
      ]
    },

    /* Párrafo 2 — Rasgos de una instrucción de calidad (~300 palabras) */
    {
      type: "paragraph",
      text:
        "Una instrucción de calidad se caracteriza por cinco rasgos: claridad, precisión, coherencia, secuenciación lógica y flexibilidad. Claridad implica lenguaje directo, sin tecnicismos innecesarios y con verbos de acción observables (analiza, compara, sintetiza). Precisión supone delimitar el alcance: qué entregar, formato, extensión, fuentes mínimas, criterios de citación, fecha y forma de evaluación. Coherencia exige alinear la consigna con los resultados de aprendizaje y los instrumentos de evaluación: si se evaluará con rúbrica, la instrucción debe “adelantar” los criterios. La secuenciación lógica ordena pasos en un gradiente de complejidad, disminuyendo la carga cognitiva y evitando que el estudiantado “se pierda” en tareas extensas. Finalmente, la flexibilidad reconoce la heterogeneidad del grupo, permitiendo ajustes razonables (por ejemplo, alternativas de entrega, apoyos o tiempos diferenciados) sin perder los estándares académicos. Didácticamente, conviene acompañar las instrucciones con ejemplos modelados, mini‑checklists y FAQs; además, verificar comprensión mediante preguntas al grupo (“¿Quién puede parafrasear los pasos?”, “¿Qué entregable se espera?”) o la técnica del “teach‑back”, donde un estudiante explica el procedimiento al resto. Esta ingeniería comunicativa no solo mejora la ejecución de las tareas, sino que hace explícita la lógica evaluativa, contribuyendo a la transparencia y a la justicia en la valoración del desempeño."
    },

    /* Lista 2 — Estrategias de verificación y andamiaje */
    {
      type : "list",
      style: "unordered",
      title: "Estrategias para verificar comprensión y andamiar la ejecución",
      items: [
        "Teach‑back / parafraseo por estudiantes de los pasos clave.",
        "Micro‑entregables (drafts) con retroalimentación temprana.",
        "Rúbricas compartidas y co‑construidas (cuando sea pertinente).",
        "Video breve (2–4 min) modelando la resolución esperada.",
        "Checkpoints cronometrados dentro de la sesión.",
        "Foros asincrónicos con moderación docente y entre pares."
      ]
    },

    /* Párrafo 3 — Tipologías de instrucciones y soportes multimodales (~300 palabras) */
    {
      type: "paragraph",
      text:
        "Popham distingue entre instrucciones generales (organización de la sesión, tiempos, materiales), específicas (cómo abordar una actividad concreta) y procedimentales (pasos detallados para ejecutar una técnica, un análisis o un producto). En la práctica, el docente combina las tres, escalándolas según la complejidad de la tarea. Para mejorar su accesibilidad, es recomendable ofrecerlas en formatos multimodales: oral (explicación inicial), escrito (guía en el LMS o en el pizarrón), visual (infografía o esquema de flujo) y, cuando procede, demostraciones breves (micro‑modelado). La multimodalidad beneficia a estudiantes con distintos estilos y necesidades, y sirve de referencia estable para consultas recurrentes. Tecnológicamente, los LMS permiten insertar las instrucciones junto a rúbricas, foros de dudas y ejemplos de entregables, lo que reduce la disonancia entre lo que se pide y lo que se evalúa. Además, la analítica de la plataforma (clicks, tiempos de lectura, entregas parciales) retroalimenta al docente sobre la claridad de las consignas: si hay múltiples errores recurrentes, probablemente la instrucción requiere reescritura o un video explicativo adicional. Esta visión iterativa entiende la instrucción como un artefacto perfectible que se mejora mediante evidencia del uso real en el aula."
    },

    /* Párrafo 4 — Verificación, retroalimentación y mejora continua (~300 palabras) */
    {
      type: "paragraph",
      text:
        "Diseñar instrucciones efectivas implica también planear cómo se verificará su comprensión y qué mecanismos de retroalimentación se habilitarán durante la ejecución. Estrategias como “paradas de control” (checkpoints) con preguntas guía, rúbricas compartidas antes de iniciar, y mini‑entregables intermedios permiten detectar malentendidos a tiempo y ajustar el rumbo. La retroalimentación debe ser específica, oportuna y alineada con los criterios anunciados; de lo contrario, se erosiona la percepción de justicia evaluativa. En proyectos complejos, resulta útil el uso de matrices de planificación (objetivo → actividad → producto → evidencia → criterio → instrumento), que el docente comparte para que el estudiantado visualice la trazabilidad completa entre lo que se hace y lo que se evalúa. Finalmente, es clave institucionalizar bucles de mejora: al cierre, solicitar a los estudiantes una micro‑encuesta sobre claridad y utilidad de las instrucciones (¿qué fue confuso?, ¿qué faltó?, ¿qué sobró?) y, con base en ello, refinar el documento para futuras cohortes. Así, la planeación de instrucciones se convierte en un proceso cíclico de diseño, implementación, observación y reajuste continuo."
    },

    /* Video ilustrativo */
    {
      type   : "video",
      title  : "Cómo dar instrucciones claras y efectivas en clase",
      src    : "https://www.youtube.com/watch?v=2dJYbE18Fn8",
      caption: "Estrategias prácticas para secuenciar, verificar y retroalimentar consignas."
    }
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
          href: "https://www.youtube.com/watch?v=Jzxqu7x1WCs", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "5 aspectos a considerar en la organización de tu aula https://www.youtube.com/watch?v=12F5YmWkD10",
            "Organización de actividades y manejo de clase https://www.youtube.com/watch?v=HNc4oDnyZj0",
            //  Añade aquí las referencias reales extraídas del PDF
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
  "Perrenoud, P. (2019). *Diez nuevas competencias para enseñar*. Barcelona, España: Editorial Graó.",
  "Popham, W. (2012). *Evaluación educativa: Conceptos y aplicaciones*. Ciudad de México: Pearson.",
  "Scriven, M. (1991). *Evaluación de la enseñanza: Perspectivas y enfoques*. Madrid, España: Alianza Editorial.",
  "Tobón, S. (2010). *Formación basada en competencias: pensamiento complejo, diseño curricular y didáctica*. Bogotá, Colombia: ECOE Ediciones.",
  "Zabalza, M. (2019). *Competencias docentes del profesorado universitario: Calidad y desarrollo profesional*. Madrid, España: Narcea Ediciones."
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
