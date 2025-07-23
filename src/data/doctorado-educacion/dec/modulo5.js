/* — PLANTILLA DE MÓDULO (v5) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId : "doctorado-educacion",          // Programa académico
courseId  : "dec-309",                      // Diseño y Evaluación Curricular
id        : "modulo5",

/* ── Datos visibles ─────────────────────────── */
courseName: "Diseño y Evaluación Curricular",
title     : "Módulo 5. Características y modalidades de los diseños curriculares",
semestre  : "Tercer Semestre",
teacher   : "Dr. Jesús Agustín Zapata Velázquez",

/* ── Objetivo y competencias ────────────────── */
objective:
  "Aplicar los principios y características del diseño curricular contemporáneo en el " +
  "desarrollo de proyectos educativos innovadores, analizando tendencias actuales —" +
  "tecnología digital, personalización del aprendizaje e inclusión— con el fin de capacitar " +
  "a los Doctorantes para crear propuestas curriculares efectivas, pertinentes y adaptadas " +
  "a las necesidades y desafíos del contexto educativo actual.",

competencies: [
  "Aplicar las características del diseño curricular contemporáneo en la creación de proyectos educativos innovadores, integrando flexibilidad, relevancia y adaptabilidad.",
  "Incorporar tecnologías digitales en el diseño curricular para promover experiencias de aprendizaje personalizadas, interactivas y accesibles.",
  "Evaluar estudios de casos de proyectos curriculares efectivos e innovadores, identificando buenas prácticas y áreas de mejora para su contexto educativo.",
  "Diseñar currículos inclusivos que consideren la diversidad del estudiantado y promuevan equidad, diversidad y sostenibilidad en el entorno educativo."
],


/* ── Contenido temático (jerarquía recursiva) ─────────── */
themes: [
  /* 0. Página Info (opcional) */
  {
    id: "5.info",
    numbering: "Info",
    title: "Información general del módulo",
    isUnitInfo: true,
    content: [],
  },

  /* Unidad 4 — se mantiene y se amplía con los nuevos subtemas */
  {
    id: "4",
    numbering: "Unidad 4",
    title: "Características del diseño curricular",
    content: [
  /* Párrafo 1 */
  {
    type: "paragraph",
    text:
      "Hablar de las características del diseño curricular es reconocer que el currículo es una arquitectura de saberes, experiencias y valores que busca formar sujetos competentes para la vida contemporánea. Su primera gran cualidad es la flexibilidad: la capacidad de ajustarse a contextos cambiantes, responder a necesidades emergentes y evolucionar con la ciencia y la tecnología sin perder coherencia interna. Esta flexibilidad se traduce en planes de estudio abiertos que permiten adaptaciones locales, itinerarios formativos personalizados y la incorporación de contenidos interdisciplinarios. Al mismo tiempo, el currículo debe salvaguardar la pertinencia y la relevancia social, es decir, demostrar que lo que se enseña tiene sentido para el estudiante y aporta soluciones a los retos de la comunidad. De esta tensión entre estabilidad y cambio surgen diseños curriculares que equilibran estructuras básicas con márgenes de innovación pedagógica."
  },

  /* Párrafo 2 */
  {
    type: "paragraph",
    text:
      "Una segunda característica fundamental es la alineación vertical y horizontal. Vertical porque cada nivel educativo debe articularse con el anterior y preparar el terreno para el siguiente, evitando solapamientos o lagunas de aprendizaje; horizontal porque las disciplinas deben dialogar entre sí, favoreciendo la integración de saberes y la resolución de problemas complejos desde múltiples perspectivas. Esta alineación exige criterios claros de secuenciación de contenidos, progresión de competencias y criterios comunes de evaluación. Asimismo, obliga a los docentes a coordinarse, compartir objetivos y construir puentes entre asignaturas, lo que fortalece la coherencia global del proyecto educativo y facilita la transferencia de aprendizajes a situaciones reales."
  },

  /* Párrafo 3 */
  {
    type: "paragraph",
    text:
      "El enfoque por competencias constituye la tercera característica decisiva. Ya no basta con dominar contenidos; se requiere movilizar saberes, habilidades y actitudes en contextos auténticos. Diseñar por competencias implica partir de situaciones problemáticas, definir desempeños observables y planificar experiencias que desarrollen pensamiento crítico, creatividad, colaboración y comunicación. Esto modifica la lógica del currículo: de la lista de temas se pasa a mapas de desempeño; de la clase expositiva a proyectos y retos interdisciplinares; de la prueba memorística a rúbricas analíticas y portafolios. El foco se desplaza del enseñar al aprender, y el docente adopta el rol de mediador que orienta, retroalimenta y evalúa procesos y productos significativos."
  },

  /* Párrafo 4 */
  {
    type: "paragraph",
    text:
      "Otra característica emergente es la integración de tecnologías digitales y recursos abiertos. Plataformas de aprendizaje, analíticas de datos, simuladores, realidad aumentada y repositorios de objetos de aprendizaje expanden los límites del aula y favorecen modalidades híbridas. Esto exige diseñar itinerarios que combinen la presencialidad con entornos virtuales, promuevan la autorregulación y garanticen la accesibilidad. Al mismo tiempo, la inclusión y la perspectiva intercultural se convierten en criterios transversales: el currículo debe considerar la diversidad lingüística, cultural y funcional del estudiantado, incorporando adaptaciones y materiales que respeten identidades y estilos de aprendizaje. Solo así se cumple el principio de equidad educativa."
  },

  /* Párrafo 5 */
  {
    type: "paragraph",
    text:
      "Finalmente, un diseño curricular contemporáneo se caracteriza por su orientación hacia la mejora continua y la sostenibilidad. La evaluación deja de ser un acto terminal y pasa a ser un proceso cíclico de recopilación de evidencias, análisis de datos y toma de decisiones informadas. Indicadores de logro, encuestas de satisfacción, observaciones de aula y analíticas de plataforma alimentan un sistema de retroalimentación que permite ajustar objetivos, contenidos, metodologías y recursos. La sostenibilidad implica, además, considerar el impacto ecológico y social de las decisiones curriculares: reducir el uso de materiales desechables, promover proyectos con valor comunitario y alinear el currículo con los Objetivos de Desarrollo Sostenible. De este modo, el diseño curricular se convierte en un instrumento estratégico para construir una educación de calidad, inclusiva y pertinente."
  },

  /* Acordeón de síntesis */
  {
    type  : "accordion",
    header: "Resumen jerárquico de características",
    open  : false,
    text  :
      "* **Nivel 1 — Estructura y alineación**  \n" +
      "  * Flexibilidad, progresión vertical y coherencia horizontal.  \n\n" +
      "* **Nivel 2 — Enfoque pedagógico**  \n" +
      "  * Competencias, aprendizaje activo, evaluación continua.  \n\n" +
      "* **Nivel 3 — Innovación y sostenibilidad**  \n" +
      "  * Integración tecnológica, inclusión y responsabilidad social."
  }
],

    subthemes: [
      /* Subtema 4.4 — nuevo en esta sesión */
      {
        id: "4.4",
        numbering: "4.4",
        title: "Características y modalidades de los diseños curriculares",
        content: [
  /* Párrafo 1 — Concepto y propósito (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "En el ámbito de la planificación educativa, el diseño curricular se concibe como la ruta estratégica que ordena, articula y proyecta los aprendizajes deseados. Sus características básicas —flexibilidad, relevancia, coherencia y adaptabilidad— garantizan que esta ruta no sea un esquema rígido, sino un entramado capaz de responder a los desafíos de contextos y estudiantes diversos. La flexibilidad permite ajustes continuos conforme cambian tecnologías, políticas y perfiles de ingreso; la relevancia conecta contenidos con la vida del alumnado y las demandas sociales; la coherencia alinea objetivos, metodologías y evaluación; y la adaptabilidad mantiene el currículum vigente ante descubrimientos científicos o crisis inesperadas. Juntas, estas cualidades convierten al currículo en un ecosistema dinámico que, además de transmitir saberes, cultiva competencias para la resolución de problemas reales y la participación crítica en la sociedad. Comprenderlas es el primer paso para seleccionar la modalidad curricular más pertinente a cada proyecto educativo."
  },

  /* Párrafo 2 — Características esenciales (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Un currículo efectivo se caracteriza por integrar con equilibrio la claridad estructural y la apertura a la innovación. La claridad se expresa en la secuenciación lógica de contenidos y en la definición de indicadores de logro verificables, lo que proporciona una brújula común para docentes, estudiantes y evaluadores. La innovación, en cambio, se plasma en la incorporación de metodologías activas, recursos digitales y perspectivas inclusivas que transforman el aula en un laboratorio de experiencias significativas. De ahí que la coherencia interior del currículo —alineación de objetivos, contenidos, metodologías y evaluación— deba complementarse con la coherencia externa: compatibilidad con políticas nacionales y estándares internacionales, así como pertinencia cultural y lingüística. Cuando ambas coherencias se equilibran, el currículo evita la fragmentación disciplinar y la descontextualización, potenciando la transferencia de aprendizajes a la vida cotidiana."
  },

  /* Imagen de apoyo */
  {
    type   : "image",
    src    : "https://cdn.slidesharecdn.com/ss_thumbnails/modalidadesdelcurrculum-161206151956-thumbnail.jpg?width=640&height=640&fit=bounds",
    alt    : "Diagrama que vincula características y modalidades del diseño curricular",
    caption: "Figura 1. Relación entre características esenciales y modalidades curriculares."
  },

  /* Párrafo 3 — Modalidades: concepto y necesidad (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Las modalidades de diseño curricular ofrecen enfoques diferenciados para materializar las características antes descritas. Elegir una modalidad implica decidir desde qué perspectiva se seleccionan contenidos, se organizan experiencias de aprendizaje y se evalúan resultados. El currículo centrado en contenidos prioriza la secuencia disciplinar y la rigurosidad conceptual; el centrado en el estudiante se apoya en la motivación intrínseca y en la construcción activa del conocimiento; el basado en competencias articula saberes, habilidades y actitudes orientados a desempeños auténticos; y el diseño interdisciplinario rompe las barreras disciplinares para abordar problemas complejos desde miradas múltiples. Cada modalidad responde a fundamentos teórico‑metodológicos distintos: el tecnocrático, el constructivista o el socio‑crítico. Conocer sus ventajas y límites permite a los diseñadores curriculares mezclar elementos y generar propuestas híbridas que maximicen la pertinencia y la calidad educativa."
  },

  /* Párrafo 4 — Implicaciones teórico‑metodológicas (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Seleccionar una modalidad conlleva implicaciones que atraviesan todo el proceso pedagógico. Un diseño centrado en contenidos demandará secuencias expositivas, evaluaciones objetivas y materiales de referencia exhaustivos; el centrado en el estudiante exigirá proyectos abiertos, rúbricas analíticas y espacios de autoevaluación; el basado en competencias requerirá escenarios auténticos, integración de tecnologías y evidencias de desempeño; mientras que el interdisciplinario demandará coordinación docente, proyectos holísticos y criterios de evaluación transversales. En todos los casos, la sostenibilidad y la inclusión emergen como ejes transversales: reducir la huella ecológica del currículo y garantizar la participación de estudiantes con perfiles diversos. La clave está en equilibrar estructura y flexibilidad para que los principios pedagógicos se traduzcan en prácticas viables, evaluables y capaces de ajustarse a los cambios vertiginosos del siglo XXI."
  },

  /* Acordeón 1 — Características esenciales */
  {
    type  : "accordion",
    header: "Características clave del diseño curricular",
    open  : false,
    text  :
      "* **Flexibilidad** – Ajuste a necesidades y contextos cambiantes.  \n" +
      "* **Relevancia** – Conexión con intereses del estudiante y demandas sociales.  \n" +
      "* **Coherencia** – Alineación interna y externa de todos los componentes.  \n" +
      "* **Adaptabilidad** – Actualización frente a avances científicos‑tecnológicos."
  },

  /* Acordeón 2 — Modalidades destacadas */
  {
    type  : "accordion",
    header: "Modalidades curriculares y énfasis pedagógico",
    open  : false,
    text  :
      "* **Centrado en contenidos** – Profundidad disciplinar, secuencia lineal.  \n" +
      "* **Centrado en el estudiante** – Aprendizaje activo y personalizado.  \n" +
      "* **Basado en competencias** – Desempeños auténticos y evaluación por rúbricas.  \n" +
      "* **Interdisciplinario** – Integración de saberes para resolver problemas complejos."
  }
],    // ← lo llenaremos paso a paso
      },

      /* Subtema 4.5 — nuevo en esta sesión */
      {
        id: "4.5",
        numbering: "4.5",
        title: "La orientación de los proyectos curriculares actuales",
        content: [
  /* Párrafo 1 — Competencias como eje articulador (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "En el panorama educativo contemporáneo, uno de los rasgos más visibles de los proyectos curriculares es su orientación hacia el desarrollo de competencias transferibles. Esto significa que los objetivos de aprendizaje se formulan no solo como acumulación de contenidos, sino como desempeños integrales que combinan saberes, habilidades y actitudes. La lógica competencial responde a la necesidad de preparar ciudadanos capaces de actuar con solvencia en contextos sociales, académicos y profesionales cambiantes. Por ello, las propuestas curriculares actuales describen resultados de aprendizaje que se evidencian en situaciones auténticas: resolución de problemas complejos, comunicación efectiva, pensamiento crítico, creatividad, colaboración y alfabetización digital. La planificación se organiza en torno a secuencias didácticas basadas en retos y proyectos interdisciplinarios; la evaluación emplea rúbricas analíticas, portafolios y productos tangibles que muestran la capacidad del estudiante para movilizar recursos de manera pertinente. Este giro competencial supone también una reconfiguración del rol docente: de transmisor de información a mediador que diseña experiencias, orienta procesos y retroalimenta el aprendizaje continuo."
  },

  /* Párrafo 2 — Integración tecnológica y personalización (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Otra orientación determinante es la integración de tecnologías digitales para personalizar el aprendizaje. Plataformas LMS, analíticas de datos, simuladores, realidad aumentada y recursos abiertos permiten establecer itinerarios formativos adaptados a los estilos, ritmos y necesidades de cada estudiante. La tecnología facilita el seguimiento individualizado, ofrece retroalimentación inmediata y amplía los escenarios de interacción más allá del aula física. Esto posibilita modelos híbridos y flexibles —blended learning, flipped classroom, aprendizaje móvil— que optimizan el tiempo presencial para actividades de alto valor cognitivo y relegan la exposición de contenidos a entornos virtuales accesibles 24/7. Al mismo tiempo, la alfabetización digital se convierte en competencia transversal y condición de ciudadanía. Sin embargo, la personalización tecnológica plantea desafíos éticos y de equidad: garantizar acceso universal, proteger datos personales y evitar la fragmentación del currículo. Por ello, los proyectos curriculares actuales incluyen políticas de inclusión digital y desarrollo docente continuo en el uso pedagógico de las TIC."
  },

  /* Párrafo 3 — Inclusión y sostenibilidad (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "La educación inclusiva y la sostenibilidad atraviesan los proyectos curriculares de este siglo. La inclusión se concibe como principio que reconoce y valora la diversidad lingüística, cultural, funcional y socioeconómica del estudiantado. Implica diseñar entornos accesibles, materiales adaptados, metodologías diferenciadas y sistemas de apoyo que garanticen la participación y el aprendizaje de todos. Complementariamente, la sostenibilidad introduce la perspectiva ecológica y ética: formar ciudadanos comprometidos con la justicia social y el cuidado del planeta. Esto exige integrar contenidos sobre cambio climático, consumo responsable y economía circular; promover la reflexión ética y la acción comunitaria; y adoptar prácticas escolares que reduzcan la huella ambiental. De este modo, los proyectos curriculares actuales trascienden la dimensión académica para contribuir a la construcción de sociedades más equitativas y resilientes."
  },

  /* Párrafo 4 — Interdisciplinariedad y colaboración (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Finalmente, la orientación interdisciplinaria y colaborativa redefine la organización del conocimiento en la escuela. Frente a problemas globales complejos —salud pública, migraciones, inteligencia artificial—, el currículo agrupa saberes de distintas disciplinas y fomenta el trabajo cooperativo como estrategia de aprendizaje y producción de conocimiento. Los proyectos curriculares incorporan metodologías como el aprendizaje basado en proyectos, el design thinking y el aprendizaje‑servicio, que articulan contenidos de ciencias, humanidades y artes en torno a preguntas significativas. El trabajo en equipo desarrolla habilidades socioemocionales y prepara a los estudiantes para entornos laborales que valoran la colaboración y la gestión de la diversidad. Para el profesorado, esta orientación implica coordinarse horizontalmente, diseñar criterios de evaluación integrados y gestionar tiempos flexibles. En síntesis, la interdisciplinariedad conecta el aprendizaje con la realidad, potencia la creatividad y refuerza el sentido de pertinencia del currículo."
  },

  /* Video ilustrativo */
  {
    type   : "video",
    title  : "Modalidades curriculares y tendencias actuales",
    src    : "https://www.youtube.com/watch?v=Ru3Fu-5lk4Q",
    caption: "Animación didáctica que resume competencias, inclusión y tecnología en el currículo."
  },

  /* Acordeón 1 — Orientaciones emergentes */
  {
    type  : "accordion",
    header: "Orientaciones clave de los proyectos curriculares",
    open  : false,
    text  :
      "* **Enfoque por competencias** – Desempeños auténticos y transferibles.  \n" +
      "* **Integración tecnológica** – Entornos híbridos y analíticas de aprendizaje.  \n" +
      "* **Personalización** – Itinerarios adaptados y retroalimentación inmediata.  \n" +
      "* **Inclusión** – Accesibilidad universal y respeto a la diversidad.  \n" +
      "* **Sostenibilidad** – Conciencia ecológica y responsabilidad global."
  },

  /* Acordeón 2 — Estrategias metodológicas destacadas */
  {
    type  : "accordion",
    header: "Estrategias asociadas a estas orientaciones",
    open  : false,
    text  :
      "* **Aprendizaje basado en proyectos** – Resolución de problemas reales.  \n" +
      "* **Aprendizaje colaborativo** – Trabajo en equipo y habilidades sociales.  \n" +
      "* **Flipped classroom** – Uso eficiente del tiempo presencial.  \n" +
      "* **Aprendizaje‑servicio** – Vinculación con la comunidad.  \n" +
      "* **Design thinking** – Creatividad e innovación centradas en el usuario."
  }
],    // ← lo llenaremos después
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
          href: "https://www.youtube.com/watch?v=Nm58WpYp2Rw", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Ejemplo de un diseño curricular: https://www.youtube.com/watch?v=wLpzLWrXQXc",
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
            "Coll, C. & Solé, I. (2020). *Currículum y evaluación en la educación obligatoria: Desafíos y perspectivas.* Barcelona, España: Editorial Graó.",
            "Perrenoud, P. (2019). *La evaluación de los alumnos: De la producción de la excelencia a la regulación de los aprendizajes.* Madrid, España: Editorial Morata.",
            "De Alba Ceballos, A. (2018). *Teoría curricular: Nuevas tendencias y perspectivas.* Ciudad de México: Siglo XXI Editores.",
            "Díaz Barriga, A. (2018). *Metodología de diseño curricular: Un enfoque centrado en competencias.* Ciudad de México, México: Editorial Trillas.",
            "Gimeno Sacristán, J. (2017). *El currículum: Una reflexión sobre la práctica.* Madrid, España: Ediciones Morata.",
            "Zabalza, M. Á. (2019). *Diseño y desarrollo curricular: Cómo planificar e implementar el currículo en la educación superior.* Madrid, España: Narcea Ediciones."
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
