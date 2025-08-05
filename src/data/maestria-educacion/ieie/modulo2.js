/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId : "EFD",                 // Especialidad en Formación Docente
courseId  : "EFD-IEIE",            // Implicaciones Educativas de la Inteligencia Emocional
id        : "EFD-IEIE-mod2",

/* ── Datos visibles ─────────────────────────── */
courseName: "Implicaciones Educativas de la Inteligencia Emocional",   // :contentReference[oaicite:12]{index=12}
title     : "Módulo 2. Tipos de inteligencia (Inteligencias múltiples)", // síntesis del contenido temático: 1.3 Tipos de inteligencia :contentReference[oaicite:13]{index=13}
semestre  : "Segundo semestre",                                         // :contentReference[oaicite:14]{index=14}
teacher   : "Dra. Rosa Dianeth Hernández Aguilera",                      // :contentReference[oaicite:15]{index=15}

/* ── Objetivo y competencias ────────────────── */
objective:
  "Analizar los tipos de inteligencia centrándose en las inteligencias múltiples.",  // :contentReference[oaicite:16]{index=16}

competencies: [
  "Identifica los distintos tipos de inteligencia con énfasis en las inteligencias múltiples.",                     // :contentReference[oaicite:17]{index=17}
  "Reconoce la importancia de detectarlas en el aula para seleccionar estrategias que favorezcan el aprendizaje.", // :contentReference[oaicite:18]{index=18}
  "Relaciona perfiles de inteligencia con decisiones didácticas alineadas a metas de aprendizaje.",                // derivada del enunciado de competencias y finalidad didáctica :contentReference[oaicite:19]{index=19}
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
    id: "1",
    numbering: "Unidad 1",
    title: "Tipos de inteligencia (Inteligencias múltiples)", // Tema 1.3
    content: [
    // Párrafo 1 — Propósito y alcance de la unidad
    {
      type: "paragraph",
      text:
        "Esta unidad profundiza en el tránsito desde un entendimiento monolítico de la \
inteligencia hacia una concepción plural y contextualizada. Partimos del recordatorio de que la \
asignatura ya estableció el constructo y su medición; ahora, el foco se sitúa en los **tipos de \
inteligencia** según el enfoque de las **inteligencias múltiples** (IM). El objetivo didáctico es doble: \
(1) describir con rigor cada tipo de inteligencia y sus manifestaciones; y (2) traducir esa comprensión \
a decisiones pedagógicas concretas —diseño de tareas, selección de instrumentos e interpretación de \
evidencias— para favorecer aprendizajes significativos y equitativos. El programa fija explícitamente \
el desglose temático que orienta nuestro itinerario: 1.3 Tipos de inteligencia con siete subtemas \
(lingüística, lógico-matemática, espacial, musical, corporal y cinética, personal e interpersonal). \
Conservar esta numeración garantiza trazabilidad entre el aula virtual y el material fuente, y evita \
ambigüedades al momento de evaluar o asignar actividades. En suma, el propósito es robustecer tu \
criterio profesional para reconocer perfiles diversos sin sacrificar la exigencia académica ni la calidad \
de la evidencia recogida."
    },

    // Párrafo 2 — Fundamentos del enfoque de Gardner
    {
      type: "paragraph",
      text:
        "El enfoque de **Howard Gardner** reconfigura el concepto: la inteligencia se entiende como \
un **potencial biopsicológico** para resolver problemas o crear productos valiosos en determinados \
contextos. No niega la psicometría, pero desplaza la mirada hacia la **diversidad funcional** y la \
relevancia cultural de las habilidades. Gardner y su equipo identificaron un conjunto de inteligencias \
—comúnmente ocho en la literatura— y subrayaron que su desarrollo depende de factores **biológicos**, \
**histórico-culturales** y de la **vida personal**. Esta perspectiva, publicada inicialmente en 1983, \
abre una vía fértil para el campo educativo: diseñar experiencias que convoquen distintas rutas de \
acceso al conocimiento y múltiples modos de demostrarlo. En esta unidad nos alineamos con esa \
orientación, enfatizando **descripciones operativas**, ejemplos de aula y criterios para la observación \
formativa. Esta base teórica no es meramente declarativa: articula decisiones de planificación (qué \
habilidades se proponen), de mediación (cómo se enseñan) y de evaluación (cómo se evidencian y \
retroalimentan). Así, el énfasis no recae en etiquetar, sino en ampliar oportunidades de aprendizaje \
desde una lectura funcional del desempeño."
    },

    // Párrafo 3 — Evitar reduccionismos: más allá de las calificaciones
    {
      type: "paragraph",
      text:
        "El material advierte contra los **reduccionismos**: la inteligencia no puede equipararse sin más \
a las **calificaciones** escolares ni a un único perfil de destrezas. Resulta habitual confundir ‘ser \
inteligente’ con ‘obtener buenas notas’ o con destacar en un área específica —por ejemplo, matemáticas—, \
desconociendo competencias valiosas en otros dominios —como la ejecución musical, la comunicación \
o la coordinación corporal—. Por ello, el enfoque de IM se propone como contrapeso crítico y \
propositivo, al tiempo que reconoce la necesidad de seguir **investigando** su validez y su impacto \
educativo. Para nuestro trabajo, esto implica diseñar tareas que permitan **manifestar competencias \
heterogéneas** y sostener una **lectura formativa** de la evidencia: identificar fortalezas, delimitar \
zonas de mejora y proponer andamiajes específicos en vez de reforzar etiquetas rígidas. Como \
continuación de la primera unidad, aquí consolidamos ese cambio de lente: de una ‘medida única’ a \
un **portafolio de capacidades** con valor pedagógico."
    },

    // Párrafo 4 — Implicaciones didácticas y evaluación
    {
      type: "paragraph",
      text:
        "Tras delimitar el marco, el énfasis se traslada a la **acción docente**. Cada tipo de inteligencia \
demanda **configuraciones de tarea** y **evidencias de desempeño** acordes: en lingüística, \
argumentación y producción escrita; en lógico-matemática, resolución de problemas y modelado; en \
espacial, representación y rotación mental; en musical, percepción, producción y análisis; en corporal y \
cinética, coordinación y expresión; en personal e interpersonal, autoconciencia, autorregulación, \
empatía y colaboración. La **evaluación** debe triangulase (rúbricas + productos + observación), \
pensarse como **formativa** y reportarse con retroalimentación **específica y accionable**. Este \
andamiaje incrementa la validez ecológica de nuestras inferencias y favorece el **transfer** a contextos \
auténticos. Finalmente, la secuenciación de contenidos seguirá el desglose oficial del módulo, de modo \
que al finalizar cuentes con un mapa operativo de intervenciones diferenciadas por perfil de inteligencia, \
sus indicadores observables y criterios de logro."
    },

    // Párrafo 5 — Activación inicial y recursos
    {
      type: "paragraph",
      text:
        "Como activación, el material sugiere el visionado del video **“El modelo de las Inteligencias \
Múltiples de Howard Gardner”** disponible en el **documento de Material complementario**. Este \
recurso permite alinear marcos conceptuales con ejemplos concretos antes de ingresar al análisis \
fino de cada subtema. Te invito a registrar en tu cuaderno dos columnas: *hallazgos conceptuales* \
(definiciones, criterios, indicadores) y *ideas de aplicación* (tareas, recursos, criterios de evaluación). \
Con ello, la discusión en clase se sostendrá en **evidencias** y facilitará la transferencia a tus diseños \
didácticos. En las próximas secciones, cada inteligencia será abordada con: definiciones operativas, \
manifestaciones observables, actividades de aula y pautas de evaluación. El cierre integrará un \
cuadro de relaciones entre perfiles, tareas y estándares de desempeño para guiar futuras decisiones \
curriculares."
    },

    // Acordeón — Brújula didáctica de la unidad
    {
      type: "accordion",
      header: "Brújula didáctica de la unidad",
      open: false,
      items: [
        {
          title: "Qué aprenderás",
          text:
            "Identificar y describir los siete tipos de inteligencia; reconocer sus manifestaciones \
observables y sus implicaciones en el diseño de tareas y en la evaluación."
        },
        {
          title: "Productos de aprendizaje",
          text:
            "Mapa comparativo de inteligencias; prototipos de actividades diferenciadas; rúbricas \
con criterios alineados a cada perfil (desempeños, evidencias y niveles de logro)."
        },
        {
          title: "Criterios de evaluación",
          text:
            "Claridad conceptual; pertinencia pedagógica; uso responsable de evidencias; \
retroalimentación específica y accionable, con enfoque formativo."
        }
      ],
      text: ""
    }
  ],

    /* → Subtemas de primer nivel (tema 1.3 y su desglose) */
    subthemes: [
      {
        id: "1.3",
        numbering: "1.3",
        title: "Tipos de inteligencia",
        content: [
    // Párrafo 1 — Propósito y alcance de la unidad
    {
      type: "paragraph",
      text:
        "Esta unidad profundiza en el tránsito desde un entendimiento monolítico de la \
inteligencia hacia una concepción plural y contextualizada. Partimos del recordatorio de que la \
asignatura ya estableció el constructo y su medición; ahora, el foco se sitúa en los **tipos de \
inteligencia** según el enfoque de las **inteligencias múltiples** (IM). El objetivo didáctico es doble: \
(1) describir con rigor cada tipo de inteligencia y sus manifestaciones; y (2) traducir esa comprensión \
a decisiones pedagógicas concretas —diseño de tareas, selección de instrumentos e interpretación de \
evidencias— para favorecer aprendizajes significativos y equitativos. El programa fija explícitamente \
el desglose temático que orienta nuestro itinerario: 1.3 Tipos de inteligencia con siete subtemas \
(lingüística, lógico-matemática, espacial, musical, corporal y cinética, personal e interpersonal). \
Conservar esta numeración garantiza trazabilidad entre el aula virtual y el material fuente, y evita \
ambigüedades al momento de evaluar o asignar actividades. En suma, el propósito es robustecer tu \
criterio profesional para reconocer perfiles diversos sin sacrificar la exigencia académica ni la calidad \
de la evidencia recogida."
    },

    // Párrafo 2 — Fundamentos del enfoque de Gardner
    {
      type: "paragraph",
      text:
        "El enfoque de **Howard Gardner** reconfigura el concepto: la inteligencia se entiende como \
un **potencial biopsicológico** para resolver problemas o crear productos valiosos en determinados \
contextos. No niega la psicometría, pero desplaza la mirada hacia la **diversidad funcional** y la \
relevancia cultural de las habilidades. Gardner y su equipo identificaron un conjunto de inteligencias \
—comúnmente ocho en la literatura— y subrayaron que su desarrollo depende de factores **biológicos**, \
**histórico-culturales** y de la **vida personal**. Esta perspectiva, publicada inicialmente en 1983, \
abre una vía fértil para el campo educativo: diseñar experiencias que convoquen distintas rutas de \
acceso al conocimiento y múltiples modos de demostrarlo. En esta unidad nos alineamos con esa \
orientación, enfatizando **descripciones operativas**, ejemplos de aula y criterios para la observación \
formativa. Esta base teórica no es meramente declarativa: articula decisiones de planificación (qué \
habilidades se proponen), de mediación (cómo se enseñan) y de evaluación (cómo se evidencian y \
retroalimentan). Así, el énfasis no recae en etiquetar, sino en ampliar oportunidades de aprendizaje \
desde una lectura funcional del desempeño."
    },

    // Párrafo 3 — Evitar reduccionismos: más allá de las calificaciones
    {
      type: "paragraph",
      text:
        "El material advierte contra los **reduccionismos**: la inteligencia no puede equipararse sin más \
a las **calificaciones** escolares ni a un único perfil de destrezas. Resulta habitual confundir ‘ser \
inteligente’ con ‘obtener buenas notas’ o con destacar en un área específica —por ejemplo, matemáticas—, \
desconociendo competencias valiosas en otros dominios —como la ejecución musical, la comunicación \
o la coordinación corporal—. Por ello, el enfoque de IM se propone como contrapeso crítico y \
propositivo, al tiempo que reconoce la necesidad de seguir **investigando** su validez y su impacto \
educativo. Para nuestro trabajo, esto implica diseñar tareas que permitan **manifestar competencias \
heterogéneas** y sostener una **lectura formativa** de la evidencia: identificar fortalezas, delimitar \
zonas de mejora y proponer andamiajes específicos en vez de reforzar etiquetas rígidas. Como \
continuación de la primera unidad, aquí consolidamos ese cambio de lente: de una ‘medida única’ a \
un **portafolio de capacidades** con valor pedagógico."
    },

    // Párrafo 4 — Implicaciones didácticas y evaluación
    {
      type: "paragraph",
      text:
        "Tras delimitar el marco, el énfasis se traslada a la **acción docente**. Cada tipo de inteligencia \
demanda **configuraciones de tarea** y **evidencias de desempeño** acordes: en lingüística, \
argumentación y producción escrita; en lógico-matemática, resolución de problemas y modelado; en \
espacial, representación y rotación mental; en musical, percepción, producción y análisis; en corporal y \
cinética, coordinación y expresión; en personal e interpersonal, autoconciencia, autorregulación, \
empatía y colaboración. La **evaluación** debe triangulase (rúbricas + productos + observación), \
pensarse como **formativa** y reportarse con retroalimentación **específica y accionable**. Este \
andamiaje incrementa la validez ecológica de nuestras inferencias y favorece el **transfer** a contextos \
auténticos. Finalmente, la secuenciación de contenidos seguirá el desglose oficial del módulo, de modo \
que al finalizar cuentes con un mapa operativo de intervenciones diferenciadas por perfil de inteligencia, \
sus indicadores observables y criterios de logro.}"
    },

    // Párrafo 5 — Activación inicial y recursos
    {
      type: "paragraph",
      text:
        "Como activación, el material sugiere el visionado del video **“El modelo de las Inteligencias \
Múltiples de Howard Gardner”** disponible en el **documento de Material complementario**. Este \
recurso permite alinear marcos conceptuales con ejemplos concretos antes de ingresar al análisis \
fino de cada subtema. Te invito a registrar en tu cuaderno dos columnas: *hallazgos conceptuales* \
(definiciones, criterios, indicadores) y *ideas de aplicación* (tareas, recursos, criterios de evaluación). \
Con ello, la discusión en clase se sostendrá en **evidencias** y facilitará la transferencia a tus diseños \
didácticos. En las próximas secciones, cada inteligencia será abordada con: definiciones operativas, \
manifestaciones observables, actividades de aula y pautas de evaluación. El cierre integrará un \
cuadro de relaciones entre perfiles, tareas y estándares de desempeño para guiar futuras decisiones \
curriculares."
    },

    // Acordeón — Brújula didáctica de la unidad
    {
      type: "accordion",
      header: "Brújula didáctica de la unidad",
      open: false,
      items: [
        {
          title: "Qué aprenderás",
          text:
            "Identificar y describir los siete tipos de inteligencia; reconocer sus manifestaciones \
observables y sus implicaciones en el diseño de tareas y en la evaluación."
        },
        {
          title: "Productos de aprendizaje",
          text:
            "Mapa comparativo de inteligencias; prototipos de actividades diferenciadas; rúbricas \
con criterios alineados a cada perfil (desempeños, evidencias y niveles de logro)."
        },
        {
          title: "Criterios de evaluación",
          text:
            "Claridad conceptual; pertinencia pedagógica; uso responsable de evidencias; \
retroalimentación específica y accionable, con enfoque formativo."
        }
      ],
      text: ""
    }
  ],

/* → Sub-subtemas (1.3.1 a 1.3.7) */
subthemes: [
  {
  id: "1.3.1",
  numbering: "1.3.1",
  title: "La inteligencia lingüística",
  content: [
    {
      type: "paragraph",
      text:
        "La inteligencia lingüística se reconoce como una de las capacidades humanas más decisivas para la vida en sociedad: posibilita expresar y comprender ideas, construir significados y coordinar acciones a gran escala mediante el lenguaje. Se manifiesta en la comunicación oral y escrita, pero también en la lectura del gesto y el símbolo, contemplando la habilidad de modular sintaxis y semántica según contextos y propósitos. En términos más amplios, abarca la sensibilidad a los sonidos, ritmos y estructuras del idioma, así como la competencia para elegir palabras precisas y encadenarlas con coherencia y cohesión. Implica, además, la destreza para ajustar el registro (formal, coloquial, técnico) y el tono (asertivo, conciliador, descriptivo) en función de la audiencia y del objetivo comunicativo. Esta inteligencia convoca procesos de percepción, memoria de trabajo verbal y control ejecutivo: planificar lo que se quiere decir, monitorear la claridad del mensaje y revisar su forma para asegurar que la intención se entienda sin ambigüedades. También comprende la interpretación de implícitos, metáforas y actos de habla indirectos, así como la capacidad de construir narrativas que organicen experiencias y persuadan con argumentos fundados. En contextos educativos y profesionales, su relevancia es transversal: explica por qué un informe técnico puede resultar comprensible y convincente, por qué una clase bien explicada mejora la retención, o por qué una campaña pública logra movilizar conductas. Finalmente, no se limita al idioma materno: en entornos bilingües y multilingües incluye el manejo flexible de varios códigos, la alternancia lingüística responsable y la metaconciencia para elegir la lengua o variedad más adecuada según fines, normas socioculturales y consideraciones de inclusión."
    },
    {
      type: "paragraph",
      text:
        "Desde edades tempranas se advierte en conductas como leer, conversar, escribir, contar chistes, jugar con palabras y aprender nuevas lenguas. No se restringe a ‘hablar bien’; implica reconocer fonemas, grafías y otros sistemas de signos, asociándolos con significados y utilizándolos estratégicamente para comprender, persuadir, relatar o crear. En la infancia, el gusto por los cuentos, las canciones, las rimas y los juegos fonológicos construye el cimiento de la conciencia lingüística; más adelante, la curiosidad por el significado de palabras nuevas, el interés por la ortografía y la puntuación, y la habilidad para resumir o parafrasear textos marcan hitos de desarrollo. En la adolescencia, se amplía el repertorio: defensa de ideas en debates, producción de textos expositivo-argumentativos, análisis de discursos mediáticos y sensibilidad a sesgos o falacias. En el tránsito a la adultez, esta inteligencia se proyecta en la escritura académica y profesional, la comunicación efectiva en equipos de trabajo y la participación ciudadana informada. Es importante subrayar que el desarrollo no es lineal: puede haber fortalezas orales con debilidades en escritura, o una gran comprensión con dificultades para sintetizar; por ello, la enseñanza debe ofrecer prácticas diferenciadas. Asimismo, factores como el acceso a materiales de lectura, la calidad del diálogo en casa y escuela, y la exposición a lenguajes disciplinares (científico, artístico, jurídico) influyen significativamente. La meta educativa es múltiple: fomentar gusto por la lectura, precisión conceptual, ética comunicativa (citar fuentes, evitar desinformación), y capacidad para traducir conocimiento técnico a formatos accesibles, asegurando que la expresión sea un vehículo de comprensión y no un obstáculo."
    },
    {
      type: "paragraph",
      text:
        "Profesionalmente, suele destacarse en ámbitos donde el uso del lenguaje es núcleo de desempeño: política, periodismo, literatura, dramaturgia y actuación, entre otros. Su desarrollo aporta beneficios como mayor imaginación y creatividad, agilidad mental, mejor comprensión, ortografía más sólida y disposición para nuevos intereses. En el ejercicio de la docencia, por ejemplo, permite diseñar explicaciones claras, formular preguntas que promuevan pensamiento de orden superior y brindar retroalimentación específica y accionable. En comunicación corporativa y mercadotecnia, se traduce en mensajes estratégicos coherentes con la identidad de marca y sensibles a la diversidad cultural; en derecho, en la capacidad de construir argumentaciones consistentes y de interpretar textos normativos complejos; en salud, en comunicar diagnósticos y cuidados con empatía y precisión terminológica. La creatividad lingüística, por su parte, alimenta sectores culturales y creativos, desde la escritura de guiones hasta la adaptación de obras para distintos públicos. Además, la inteligencia lingüística soporta habilidades transversales como la negociación y la mediación de conflictos, donde el uso cuidadoso del lenguaje puede acercar posiciones y evitar malentendidos. Por último, en entornos cada vez más digitales, también comprende la alfabetización mediática: discernir fuentes confiables, reconocer manipulación retórica y escribir para formatos digitales con criterios de claridad, brevedad y accesibilidad, cuidando licencias y derechos de autor. Estas competencias incrementan la empleabilidad y la participación crítica en la vida social."
    },
    {
      type: "paragraph",
      text:
        "En educación, su fortalecimiento puede promoverse con debates, lectura oral, exposiciones, escritura de diarios, producción de cuentos, proyectos de comprensión lectora y uso guiado de recursos digitales para registrar y reelaborar la expresión verbal. Una secuencia didáctica efectiva combina instrucción explícita (modelar cómo planificar, redactar y revisar), andamiajes (organizadores gráficos, listas de verificación, rúbricas) y práctica deliberada (borradores, retroalimentación entre pares, edición final). La comprensión lectora se potencia con estrategias como predicción, formulación de preguntas, aclaración de conceptos, síntesis jerárquica y elaboración de inferencias, promoviendo la metacognición: ¿qué entendí?, ¿qué no?, ¿qué evidencia respalda mi interpretación? La oralidad se trabaja mediante presentaciones breves con tiempos definidos, roles claros y criterios públicos que contemplen contenido, organización, recursos paralingüísticos y manejo del tiempo. En escritura, el ciclo planificar-escribir-revisar-editar ayuda a construir textos cada vez más precisos; conviene incluir tareas auténticas (cartas al editor, reseñas de libros, micro-ensayos, fichas técnicas) que conecten con propósitos reales. La evaluación formativa triangula evidencias (portafolio, rúbricas, observación), provee ejemplos de referencia y evita confundir fluidez con profundidad. Finalmente, la inclusión requiere considerar estudiantes multilingües o con necesidades específicas, ofreciendo adaptaciones (lectura asistida, dictado por voz, tipografías accesibles), sin renunciar a estándares de calidad: el objetivo es que todos puedan demostrar su pensamiento con herramientas ajustadas a sus condiciones y metas."
    }
  ]
},
{
  id: "1.3.2",
  numbering: "1.3.2",
  title: "La inteligencia lógica-matemática",
  content: [
    {
      type: "paragraph",
      text:
        "La inteligencia lógico-matemática alude a la capacidad de conceptualizar relaciones lógicas entre acciones o símbolos y resolver problemas siguiendo reglas formales. Integra pensamiento lógico y manejo de cantidades, patrones y estructuras; por ello, históricamente se la confundió con la ‘inteligencia en bruto’, pese a ser solo una faceta del potencial humano. En su base operan procesos de razonamiento (deductivo, inductivo, abductivo), modelización (traducir fenómenos a expresiones simbólicas), control ejecutivo (planificar, monitorear, inhibir impulsos) y metacognición (evaluar la pertinencia de una estrategia). Esta inteligencia se expresa al identificar regularidades, formular conjeturas y someterlas a prueba, valorar contraejemplos y generalizar resultados; también al manejar ideas de estructura (conjuntos, relaciones, funciones), magnitud y medida, proporcionalidad, combinatoria, probabilidad y estadística. La representación múltiple —concreta, pictórica, simbólica— facilita el tránsito de lo intuitivo a lo formal, y la visualización apoya la comprensión de relaciones complejas. A nivel emocional, exige tolerancia a la frustración y curiosidad por la evidencia; a nivel ético, compromiso con la precisión y la claridad. En la vida diaria, se manifiesta al estimar tiempos y costos, comparar alternativas, evaluar riesgos o interpretar gráficos; en lo profesional, sostiene desempeños en ingeniería, ciencias, economía, finanzas, informática y políticas públicas, donde los modelos, simulaciones y análisis de sensibilidad son esenciales. Reconocerla como parte de un repertorio más amplio invita a enseñarla con sentido: no basta con ejercicios mecánicos, se requieren experiencias que conecten conceptos, procedimientos y resolución de problemas no rutinarios."
    },
    {
      type: "paragraph",
      text:
        "Se expresa en la detección de regularidades, la formulación y verificación de hipótesis, el razonamiento inductivo-deductivo y el uso del método científico. En la infancia suele evidenciarse en el gusto por rompecabezas, acertijos, juegos de estrategia, conteo y ejercicios de lógica. El desarrollo educativo efectivo comienza con la comprensión de cantidades y relaciones mediante materiales manipulativos (bloques, regletas, balanzas) y representaciones visuales (diagramas, rectas numéricas, tablas), avanzando progresivamente hacia la simbolización y la demostración. Es clave entrenar el cálculo con sentido, la estimación razonable y el análisis de errores, así como promover discusiones matemáticas en las que los estudiantes expliquen por qué un procedimiento funciona, cuándo no y cómo se puede mejorar. Los problemas contextualizados, el aprendizaje basado en proyectos y el análisis de datos reales favorecen la transferencia y la motivación; por ejemplo, modelar el crecimiento de una planta, planificar un presupuesto escolar o comparar la eficiencia de rutas de transporte. La práctica espaciada, la intercalación de tareas y la recuperación activa consolidan la retención y la flexibilidad estratégica. Tecnologías como hojas de cálculo, software de geometría dinámica, lenguajes de programación educativos y sistemas de álgebra computacional permiten experimentar con parámetros, visualizar patrones y depurar ideas. La evaluación formativa debe triangular evidencias: cuadernos de trabajo (rastro del pensamiento), explicaciones orales, miniproyectos y pruebas escritas con ítems que midan comprensión conceptual, procedimientos y razonamiento, explicitando criterios de precisión, eficiencia, justificación y comunicación. Finalmente, el clima emocional importa: normalizar el error, reforzar metas de dominio y enseñar a planificar, comprobar y revisar, convierte la matemática en un hábito de pensamiento riguroso y creativo."
    },
    {
      type: "paragraph",
      text:
        "A nivel profesional, se asocia con ciencias, ingeniería, economía, investigación académica e, incluso, con disciplinas que exigen planeación estratégica (como el ajedrez). Su desarrollo apoya la toma de decisiones cuantitativas y el análisis de procesos y fórmulas, con aplicaciones en finanzas, operaciones y gestión. En ingeniería, por ejemplo, la capacidad para traducir requerimientos a modelos, establecer supuestos, resolver sistemas y evaluar la sensibilidad de resultados es condición para la seguridad y la eficiencia. En ciencias, el diseño experimental, el análisis estadístico y la interpretación de incertidumbre sustentan hallazgos confiables; en economía y finanzas, la modelización de escenarios, el cálculo de riesgo-retorno y la optimización de portafolios guían decisiones con impacto social. En informática y ciencia de datos, la lógica algorítmica y la razonabilidad numérica son cruciales para construir soluciones robustas y éticas. Más allá de sectores técnicos, esta inteligencia potencia la ciudadanía crítica: detectar falacias cuantitativas, interpretar encuestas, distinguir correlación de causalidad y cuestionar visualizaciones engañosas. El dominio profesional requiere, además, habilidades de comunicación para explicar supuestos, límites y consecuencias de un modelo a audiencias no técnicas; por ello, la integración con competencias lingüísticas y digitales resulta estratégica. En síntesis, el valor de esta inteligencia no reside sólo en “hacer cuentas”, sino en estructurar problemas, justificar soluciones y anticipar implicaciones."
    },
    {
      type: "paragraph",
      text:
        "Para promoverla en el aula se recomiendan problemas abstractos graduados, cálculo mental, juegos con números, entrevistas cuantitativas y uso crítico de calculadoras y software, cuidando la transferencia entre contextos para consolidar el razonamiento formal. Una planificación eficaz parte de metas claras (qué concepto se pretende comprender y con qué nivel de desempeño) y se apoya en tareas con múltiples rutas de solución que obliguen a comparar estrategias. El docente modela pensamiento en voz alta (cómo elige una vía, cómo verifica un resultado), plantea preguntas que hacen visible el razonamiento (“¿qué pasaría si…?”) y promueve discusiones donde se argumente con datos y contraejemplos. La diferenciación instruccional ofrece retos escalonados y apoyos (andamiajes) para quien lo requiera, con retirada gradual de ayudas. El uso de rúbricas transparentes evita que la evaluación se limite a respuestas correctas, incorporando criterios de justificación, representación y comunicación. Es recomendable programar ciclos cortos de retroalimentación y reintentos, de modo que el error sea insumo de mejora. Para robustecer la memoria a largo plazo, la práctica distribuida, la intercalación de temas y la recuperación activa superan a la repetición masiva; complementar con diarios metacognitivos ayuda a que el estudiante monitoree su progreso, identifique sesgos (por ejemplo, apego a un algoritmo) y ajuste estrategias. Finalmente, conectar la matemática con problemas reales y dilemas éticos (modelos que afectan decisiones públicas, sesgos en datos) refuerza el sentido y la responsabilidad del saber cuantitativo."
    }
  ]
},
  {
  id: "1.3.3",
  numbering: "1.3.3",
  title: "La inteligencia espacial",
  content: [
    {
      type: "paragraph",
      text:
        "La inteligencia espacial —también denominada visual-espacial— es la capacidad de percibir, imaginar, recrear y transformar objetos y trayectorias en tres dimensiones, decodificar información gráfica y operar mentalmente con rotaciones y desplazamientos. Permite observar el mundo desde diversos puntos de vista y elaborar representaciones mentales precisas que guían la acción, el diseño y la resolución de problemas. En su base convergen procesos perceptivos (detección de bordes, contraste, color), de memoria de trabajo visoespacial (retener y manipular imágenes o posiciones temporales) y de razonamiento espacial (rotación, traslación, simetría, escalamiento). Esta inteligencia no se limita al dibujo o a “tener buena mano”, sino que abarca la lectura de mapas y planos, la interpretación de diagramas técnicos, la navegación por entornos complejos y la anticipación de interacciones entre piezas o volúmenes. La imagen mental funciona como un “simulador” que permite predecir resultados antes de actuar físicamente: cómo encajará un componente, qué ruta minimizará giros, qué perspectiva comunica mejor un concepto. Culturalmente, se nutre del contacto con representaciones visuales (cartografía, fotografía, cine, infografías) y del uso de herramientas que externalizan el pensamiento espacial (croquis, maquetas, software de diseño). En términos educativos, su valor es transversal: mejora la comprensión de geometría y física, clarifica estructuras en biología (órganos, sistemas), apoya la lectura de fenómenos geográficos y facilita el pensamiento computacional cuando se trabaja con entornos de simulación o modelado. Lejos de ser un talento fijo, se entrena mediante práctica deliberada que combina percepción y acción, con retroalimentación que afina la precisión de la imagen mental y su traducción efectiva a soportes materiales o digitales."
    },
    {
      type: "paragraph",
      text:
        "Se evidencia en la relación flexible entre color, forma, línea, figura y espacio, así como en la navegación y la rotación de objetos mentales. Las personas con fortaleza espacial suelen sobresalir en dibujo, pintura, lectura de mapas, apreciación del arte, resolución de laberintos y construcción con materiales físicos o virtuales. Sin embargo, estas manifestaciones no son uniformes: algunas personas destacan en la visualización dinámica (imaginar transformaciones en el tiempo), otras en la composición estática (equilibrio, proporción) y otras en la exactitud métrica (escalas, medidas). La exposición temprana a rompecabezas, bloques de construcción, origami, maquetas y videojuegos de exploración o construcción puede cultivar estrategias de orientación y planificación visoespacial, siempre que exista guía para transferir lo aprendido a situaciones académicas (geometría, física, tecnología). En contextos cotidianos, se advierte en la habilidad para reorganizar espacios con eficiencia, seleccionar rutas óptimas, interpretar rápidamente señalética y decodificar interfaces visuales. También se expresa en la sensibilidad al detalle y en la capacidad para “ver” errores de alineación o proporción que pasan desapercibidos a otros. En la práctica profesional, esta inteligencia se combina con otras (lógico-matemática para modelar, lingüística para comunicar decisiones, interpersonal para trabajar en equipo), conformando perfiles de desempeño complejos. Para robustecerla, es útil alternar tareas de percepción (reconocer patrones, identificar transformaciones) con tareas de producción (dibujar, modelar, prototipar), y cerrar cada ciclo con revisión crítica: ¿la representación transmite lo que pretendía?, ¿qué ajustes mejoran su legibilidad?, ¿cómo impactan los cambios de escala o perspectiva en la comprensión del receptor?"
    },
    {
      type: "paragraph",
      text:
        "Profesiones y oficios típicos incluyen arquitectura, diseño industrial y gráfico, urbanismo, fotografía, publicidad, artes visuales, ingeniería mecánica y civil, topografía, geología, cirugía asistida por imagen y áreas donde la orientación espacial y la lectura de representaciones técnicas resultan críticas. En arquitectura y urbanismo, por ejemplo, la anticipación de recorridos peatonales y visuales, la incidencia de la luz y el diálogo entre volúmenes exige imaginar escenarios y validar soluciones mediante planos, maquetas y modelos tridimensionales. En ingeniería, la comprensión de ensamblajes, tolerancias y rutas de mantenimiento requiere visualizar interacciones espaciales antes de fabricar; en medicina, la correlación entre cortes tomográficos, anatomía tridimensional y trayectorias instrumentales es determinante para la seguridad. La fotografía y el cine exploran composición, profundidad de campo, ángulos y movimiento; la publicidad combina jerarquías visuales, color y forma para orientar la atención; el diseño de interfaces se apoya en principios de proximidad, alineación y flujo para optimizar la experiencia de usuario. En logística y aviación, la navegación basada en cartas, instrumentos y visualización de rutas demanda sólidos recursos espaciales. Más allá del “talento artístico”, estas ocupaciones requieren entrenamiento sistemático, criterios de calidad y dominio de herramientas de representación y verificación, desde el croquis rápido hasta el CAD/BIM o los simuladores de alto realismo."
    },
    {
      type: "paragraph",
      text:
        "En el aula, su desarrollo se favorece mediante actividades artísticas, mapas conceptuales y geográficos, visualizaciones guiadas, metáforas visuales, videos y juegos de construcción, integrando tanto representación como interpretación de información gráfica. Una progresión eficaz inicia con tareas de discriminación perceptiva (formas, simetrías, patrones), continúa con bocetado libre y guiado (trazos básicos, proporción, sombreado) y avanza hacia modelado con materiales (arcilla, cartón, impresión 3D) y herramientas digitales (geometría dinámica, CAD escolar, realidad aumentada). La cartografía escolar y el uso de brújula o GPS en actividades de orientación fortalecen la relación entre representación y territorio; las rúbricas deben valorar precisión, legibilidad, justificación de decisiones de diseño e iteración (capacidad para mejorar el prototipo tras retroalimentación). La inclusión demanda ofrecer múltiples formas de interacción: manipulativos táctiles, contrastes altos, plantillas, verbalizaciones de lo que se observa y apoyo tecnológico para estudiantes con baja visión o dificultades motoras. Para evitar reduccionismos, conviene conectar el componente estético con el funcional (diseños bellos y útiles) y promover la transferencia a otras áreas: diagramas de procesos en ciencias, esquemas de argumentos en lenguaje, cronografías visuales en historia. Finalmente, la evaluación formativa debe incluir autoexplicaciones del proceso de diseño, comparación de versiones y reflexión sobre cómo la elección de perspectiva, escala o codificación gráfica afecta la comprensión del mensaje."
    }
  ]
},
{
  id: "1.3.4",
  numbering: "1.3.4",
  title: "La inteligencia musical",
  content: [
    {
      type: "paragraph",
      text:
        "La inteligencia musical-auditiva refiere al reconocimiento, organización y producción de elementos sonoros como altura (frecuencia/pitch), timbre (calidad del sonido), ritmo (patrón temporal) y armonía (relaciones simultáneas entre notas). Es universal y entrenable: todas las culturas estructuran paisajes sonoros, repertorios y prácticas que socializan la escucha y el hacer musical. Cognitivamente, involucra percepción fina (discriminación de intervalos, contornos melódicos), memoria auditiva, sincronización motora, anticipación de patrones y regulación emocional mediada por la música. Diversas áreas cerebrales participan en la interpretación y composición, la ejecución instrumental y la apreciación analítica; además, la actividad musical compromete sistemas de recompensa y atención sostenida, lo que favorece la práctica deliberada y el aprendizaje por ensayo y error. Esta inteligencia no se reduce a “tocar un instrumento”: incluye cantar afinado, reconocer estructuras (compases, escalas), improvisar con reglas, leer y escribir notación, y escuchar analíticamente. En términos educativos, asume valor propio por su capacidad expresiva, su aporte a la identidad cultural y su papel en la construcción de comunidad; cualquier efecto de transferencia a otras áreas debe tratarse con prudencia metodológica, evitando promesas simplistas. La alfabetización musical combina vivencia (cantar, moverse, tocar), comprensión (lenguaje musical) y creación (arreglos, improvisación), invitando a los estudiantes a convivir con la música como práctica significativa y no sólo como contenido teórico."
    },
    {
      type: "paragraph",
      text:
        "Quienes la manifiestan con fuerza aprenden y discriminan sonidos con facilidad, disfrutan del canto y la ejecución de instrumentos, y suelen componer o identificar patrones rítmicos complejos. Algunas personas presentan oído absoluto o, más comúnmente, oído relativo muy afinado; otras destacan por su sentido rítmico y coordinación para ensambles. La práctica sistemática (individual y grupal) potencia la precisión temporal, la afinación, la dinámica y la expresividad; la retroalimentación inmediata del sonido facilita el ajuste fino. En la infancia, juegos de palmas, ecos rítmicos, canciones tradicionales y exploración de objetos sonoros crean repertorios de patrones que luego se formalizan en lectura y escritura musical. En la adolescencia, la participación en coros, bandas y orquestas desarrolla escucha horizontal (propia y de los demás), liderazgo compartido y responsabilidad colectiva por el pulso y el balance. En la adultez temprana, la composición y la producción digital abren campos creativos y técnicos: edición, mezcla, diseño de sonido y arreglo. La música también funciona como regulador emocional y recurso de bienestar, útil para transiciones de actividad, concentración o expresión personal; su uso pedagógico debe combinar disfrute con metas claras (qué se busca escuchar, reconocer o producir) y evidencias de logro (ejecución, análisis, creación)."
    },
    {
      type: "paragraph",
      text:
        "En educación, se estimula cantando, tocando instrumentos, escuchando activamente, asistiendo a conciertos y usando recursos sonoros; en etapas tempranas se sugiere crear ambientes musicales, juegos rítmicos y disponibilidad de instrumentos u objetos sonoros para la exploración. Una progresión didáctica eficaz transita de la experiencia corporal (pulso, desplazamiento, percusión corporal) a la discriminación auditiva (alturas, timbres), y de ahí a la representación (gráficos no convencionales, notación) y la creación (variaciones sobre un ostinato, improvisación guiada, arreglos sencillos). Las tecnologías —DAWs educativos, metrónomos y afinadores digitales, bibliotecas de loops— democratizan la producción musical y ofrecen feedback visual y auditivo que acelera el aprendizaje. La evaluación formativa debe considerar criterios de afinación, ritmo, precisión técnica, escucha de conjunto y expresividad; rúbricas claras, grabaciones comparativas y autoevaluaciones ayudan a objetivar el progreso. Para la inclusión, conviene disponer de instrumentos accesibles (percusión variada, teclados con sensibilidad ajustable), partituras con tipografías legibles y andamiajes por capas (línea rítmica, bordón, melodía). Vincular música con otras áreas enriquece el currículo: patrones rítmicos para comprender fracciones, paisajes sonoros en ciencia y ambiente, análisis de letras en lengua, o bandas sonoras para proyectos audiovisuales. El propósito no es convertir a todos en músicos profesionales, sino que cada estudiante desarrolle una relación competente, crítica y disfrutable con el lenguaje musical."
    }
  ]
},
{
  id: "1.3.5",
  numbering: "1.3.5",
  title: "La inteligencia corporal y cinética",
  content: [
    {
      type: "paragraph",
      text:
        "Esta inteligencia implica coordinar movimientos y utilizar el cuerpo para expresar ideas y emociones o manipular objetos con precisión. Abarca fuerza, velocidad, flexibilidad, equilibrio, coordinación óculo-manual y propriocepción, entendida esta como la conciencia del cuerpo en el espacio y del esfuerzo requerido para una acción. Se reconoce a lo largo de las culturas como un medio fundamental de comunicación, creación y trabajo: del ritual y la danza a la artesanía, el deporte o la cirugía. Desde la perspectiva de la cognición corporizada, el movimiento no es un simple vehículo que “transporta” la mente; participar activamente en tareas físicas modula la atención, la memoria y la toma de decisiones, integrando información sensorial con objetivos y reglas. En términos de aprendizaje, la manipulación de objetos y la dramatización de conceptos abstractos (p. ej., representar fuerzas o trayectorias con el cuerpo) ayudan a construir intuiciones y a fijar recuerdos. Esta inteligencia combina planificación motora (secuenciar acciones), control postural, timing y ajuste por retroalimentación (propia y externa), y requiere hábitos de autorregulación (calentamiento, respiración, recuperación) que cuidan el cuerpo como herramienta de desempeño. Además, se articula con dimensiones sociales y emocionales: la sincronía en equipo, el respeto por turnos, la gestión del riesgo y la comunicación no verbal. En suma, el dominio corporal y cinético es una competencia compleja que se cultiva con práctica deliberada, instrucción clara y evaluación situada en la tarea real."
    },
    {
      type: "paragraph",
      text:
        "Durante la infancia suele expresarse en el disfrute del movimiento: danza, actuación, imitación de gestos, deporte, correr, saltar y juegos motores. Profesiones afines incluyen danza, actuación, deporte, fisioterapia, rehabilitación, cirugía, artes plásticas y oficios de precisión, donde el dominio corporal y técnico resulta crítico. En contextos deportivos, se conjugan habilidades condicionales (fuerza, resistencia) con coordinativas (ritmo, equilibrio, reacción), además de lectura táctica del juego y regulación emocional ante la presión; en artes escénicas, el cuerpo es lenguaje que narra y sugiere, y la técnica se pone al servicio de la expresividad y del cuidado de la salud. En oficios, la destreza manual y el conocimiento de materiales determinan calidad y seguridad. En la vida diaria, esta inteligencia se observa en la eficiencia para aprender gestos técnicos, en la conciencia postural frente al trabajo prolongado y en la capacidad para ajustar movimientos a espacios y herramientas. Su desarrollo también tiene una dimensión de salud pública: combatir el sedentarismo, mejorar la motricidad fina para la escritura o el uso de dispositivos, y fomentar hábitos de descanso y nutrición alineados con la demanda física de las tareas. Importa destacar que no todos los estudiantes parten del mismo nivel ni tienen los mismos intereses; la oferta educativa debe contemplar trayectorias diferenciadas, objetivos graduados y variedad de roles (ejecutante, árbitro, coreógrafo, técnico), de modo que todos puedan asumir responsabilidades significativas."
    },
    {
      type: "paragraph",
      text:
        "En la escuela puede promoverse mediante teatro, danza, actividades manuales, relajación, uso de materiales táctiles y práctica deportiva planificada, integrando metas de expresión, precisión y autocuidado. Una secuencia didáctica efectiva inicia con activaciones que preparan el cuerpo (movilidad articular, respiración), establece objetivos claros por sesión (técnicos y expresivos) y define criterios de logro observables (alineación, control, coordinación, seguridad). El enfoque debe equilibrar técnica y creatividad: enseñar patrones motores y, a la vez, dar espacio a la improvisación guiada y a la composición de pequeñas piezas, para que el estudiante tome decisiones y reflexione sobre ellas. La retroalimentación ha de ser específica, respetuosa y oportuna, apoyada en demostraciones y en el modelado entre pares; la videograbación brinda evidencia para análisis post-ejecución. Para la inclusión, el diseño universal de aprendizaje sugiere opciones de acceso (niveles de intensidad, apoyos, variantes de materiales), instrucciones multimodales y libertad para elegir el rol dentro de una tarea colectiva. La seguridad es innegociable: calzado y superficies adecuadas, reconocimiento de límites personales, hidratación y protocolos ante lesiones. La evaluación formativa debe considerar progreso y dedicación, no solo resultados; rúbricas con descriptores claros y autoevaluaciones ayudan a construir autonomía. Integrar esta inteligencia con otras áreas potencia el currículo: dramatizar escenas literarias, modelar moléculas con el cuerpo, coreografiar procesos históricos o diseñar artefactos en tecnología combinan movimiento, comprensión y creatividad, haciendo el aprendizaje más memorable y significativo."
    }
  ]
},
  {
    id: "1.3.6",
    numbering: "1.3.6",
    title: "La inteligencia personal",
    content: [
      {
        type: "paragraph",
        text:
          "La llamada ‘inteligencia personal’ en el material corresponde a la dimensión intrapersonal: conocerse a sí mismo, reconocer y regular emociones, focalizar la atención y alinear metas con acciones. Supone introspección, conciencia de fortalezas y áreas de mejora, y capacidad de autorregularse ante demandas del entorno."
      },
      {
        type: "paragraph",
        text:
          "En etapas escolares se refleja en preferencia por el trabajo autónomo, establecimiento de metas personales, disciplina para alcanzarlas y reflexión sobre estados afectivos y conductas. Su desarrollo favorece el equilibrio emocional, la productividad y la toma de decisiones responsable."
      },
      {
        type: "paragraph",
        text:
          "En el aula, puede cultivarse con instrucción individualizada, actividades de autoestima, redacción de diarios reflexivos, proyectos personales y prácticas de atención plena, siempre con acompañamiento y evaluación formativa."
      }
    ],
  },
  {
    id: "1.3.7",
    numbering: "1.3.7",
    title: "La inteligencia interpersonal",
    content: [
      {
        type: "paragraph",
        text:
          "La inteligencia interpersonal remite a comprender a otras personas: captar intenciones, emociones y matices del discurso (objetivo, contenido, entonación), anticipar conflictos y responder de manera empática y estratégica. Es central cuando se trabaja con grupos diversos y en contextos de colaboración."
      },
      {
        type: "paragraph",
        text:
          "En edades tempranas se aprecia en la facilidad para conversar, trabajar en equipo, ayudar a otros, mediar y vincularse con personas nuevas. Profesiones típicas son docencia, psicología, terapia, abogacía y, en general, ámbitos educativos y sociales."
      },
      {
        type: "paragraph",
        text:
          "Para su desarrollo educativo se recomiendan aprendizaje cooperativo, tutorías entre pares, dinámicas de juego con reglas sociales y dramatizaciones breves que permitan practicar escucha activa, empatía y asertividad."
      }
    ],
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
          href: "https://www.youtube.com/watch?v=ldhpS8R5ods", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "¿Qué es el diseño curricular? ✔ [Concepto, Autores y Antecedentes] https://www.youtube.com/watch?v=ldhpS8R5ods",
            "Diseño Curricular QUÉ ES y CÓMO se HACE EJEMPLOS https://www.youtube.com/watch?v=3IOkwLKyHNE",
            "Evaluación Curricular Interna Y Externa || Nitzia Tavarez || https://www.youtube.com/watch?v=OR6YlkxNtps",
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
            "Coll, C. & Solé, I. (2020). *Currículum y evaluación en la educación obligatoria: Desafíos y perspectivas.* Barcelona: Editorial Graó.",
            "Perrenoud, P. (2019). *La evaluación de los alumnos: De la producción de la excelencia a la regulación de los aprendizajes.* Madrid: Editorial Morata.",
            "De Alba Ceballos, A. (2018). *Teoría curricular: Nuevas tendencias y perspectivas.* Ciudad de México: Siglo XXI Editores.",
            "Díaz Barriga, A. (2018). *Metodología de diseño curricular: Un enfoque centrado en competencias.* Ciudad de México: Editorial Trillas.",
            "Gimeno Sacristán, J. (2017). *El currículum: Una reflexión sobre la práctica.* Madrid: Ediciones Morata.",
            "Zabalza, M. Á. (2019). *Diseño y desarrollo curricular: Cómo planificar e implementar el currículo en la educación superior.* Madrid: Narcea Ediciones.",
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
