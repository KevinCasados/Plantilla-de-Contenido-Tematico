/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId : "doctorado-educacion",          // Programa académico
courseId  : "dec-309",                      // Diseño y Evaluación Curricular
id        : "modulo3",

/* ── Datos visibles ─────────────────────────── */
courseName: "Diseño y Evaluación Curricular",
title     : "Módulo 3. Etapas de un proyecto",
semestre  : "Tercer Semestre",
teacher   : "Dr. Jesús Agustín Zapata Velázquez",

/* ── Objetivo y competencias ────────────────── */
objective:
  "Desarrollar en los Doctorantes la capacidad para planificar, ejecutar, evaluar y dar " +
  "seguimiento a proyectos curriculares, aplicando un enfoque integral que permita gestionar " +
  "cada una de sus etapas de manera estratégica, asegurando la efectividad, sostenibilidad y " +
  "mejora continua del proceso educativo en diversos contextos.",

competencies: [
  "Diseñar proyectos curriculares efectivos, estableciendo objetivos claros, seleccionando contenidos relevantes y definiendo estrategias pedagógicas adecuadas para diversos contextos educativos.",
  "Implementar proyectos curriculares, adaptando metodologías y estrategias en el aula de acuerdo con las necesidades de los estudiantes y las características del entorno educativo.",
  "Aplicar técnicas y herramientas de evaluación para medir la efectividad de los proyectos curriculares, identificar logros y áreas de mejora, y proporcionar retroalimentación constructiva para su ajuste y optimización.",
  "Realizar un seguimiento continuo del impacto de los proyectos curriculares, asegurando su alineación con los objetivos propuestos y adaptándolos a los cambios en el contexto educativo para garantizar su sostenibilidad y mejora continua."
],

  /* ── Contenido temático (jerarquía recursiva) ─ */
  themes: [
    /* 0. Info del módulo (opcional) */
    {
      id: "X.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [],
    },

    /* 1. Unidad principal (ejemplo) */
    {
      id: "1",
      numbering: "Unidad 3",
      title: "ETAPAS DE UN PROYECTO  ",
      content: [
  /* Párrafo 1 – Transición y propósito de la unidad */
  {
    type: "paragraph",
    text:
      "La Unidad 3 marca el paso decisivo de la planeación a la acción: después de diseñar el proyecto curricular en la unidad anterior, ahora exploraremos sistemáticamente las etapas que garantizan su implementación exitosa y su sostenibilidad en el tiempo. Este recorrido consolidará tu capacidad para llevar un proyecto desde la teoría hasta la práctica, garantizando que cada fase se alinee con los objetivos educativos y responda a las demandas del contexto."
  },

  /* Párrafo 2 – Panorama de las cuatro fases críticas */
  {
    type: "paragraph",
    text:
      "Profundizaremos en cuatro fases esenciales: diseño, ejecución, evaluación y seguimiento. Comenzaremos afinando el diseño, precisando acciones y recursos; pasaremos a la ejecución, donde pondremos en práctica estrategias adaptativas; examinaremos la evaluación, clave para medir impacto y detectar mejoras; y cerraremos con el seguimiento, asegurando la pertinencia y evolución continua del currículo."
  },

  /* Párrafo 3 – Énfasis en la fase de diseño */
  {
    type: "paragraph",
    text:
      "En la fase de diseño se combinan la definición clara de objetivos —específicos, medibles, alcanzables, relevantes y temporales— con la selección y organización de contenidos y estrategias pedagógicas que motiven al estudiantado. Un plan cuidadoso de recursos y un cronograma realista son fundamentales para anticipar desafíos y garantizar la viabilidad del proyecto."
  },

  /* Párrafo 4 – Claves de una ejecución flexible y participativa */
  {
    type: "paragraph",
    text:
      "La fase de ejecución traduce el diseño a la práctica diaria del aula. Implica preparar materiales, verificar recursos tecnológicos y fomentar un aprendizaje activo y colaborativo. Resulta vital monitorear en tiempo real la participación y el progreso de los estudiantes, ajustando metodologías y tiempos cuando surjan imprevistos o nuevas necesidades."
  },

  /* Párrafo 5 – Evaluación y seguimiento para la mejora continua */
  {
    type: "paragraph",
    text:
      "Evaluar y dar seguimiento al proyecto curricular completa el ciclo de mejora continua. La evaluación mide logros y procesos, identificando brechas entre lo planificado y lo ejecutado, mientras que el seguimiento monitorea de forma constante la alineación con los objetivos, promoviendo ajustes oportunos y la sostenibilidad del currículo en contextos cambiantes."
  },

  /* Acordeón – Mapa sintético de las etapas */
  {
    type : "accordion",
    header: "Resumen de las etapas clave",
    open  : false,
    text  :
      "* **Diseño** – Definir objetivos, contenidos, estrategias y recursos.  \n" +
      "* **Ejecución** – Implementar el proyecto con flexibilidad y monitoreo constante.  \n" +
      "* **Evaluación** – Medir impacto, logros y áreas de mejora.  \n" +
      "* **Seguimiento** – Asegurar la relevancia y sostenibilidad mediante ajustes continuos."
  }
],
      subthemes: [
  {
    id       : "3.1",
    numbering: "3.1",
    title    : "Diseño",
    content: [
  /* Párrafo 1 – Qué es la fase de diseño */
  {
    type: "paragraph",
    text:
      "La fase de diseño es el punto de partida de cualquier proyecto curricular: concentra la planificación detallada de los elementos que permitirán alcanzar los objetivos educativos. Implica seleccionar contenidos, estrategias pedagógicas y disponerlos de forma coherente en un plan que guíe todo el proceso de enseñanza‑aprendizaje."
  },

  /* Párrafo 2 – Definición clara de objetivos (SMART) */
  {
    type: "paragraph",
    text:
      "El primer paso consiste en definir objetivos específicos, medibles, alcanzables, relevantes y acotados en el tiempo (SMART). Estos objetivos orientan todas las decisiones del diseño y aseguran que cada componente del currículo contribuya a los resultados deseados."
  },

  /* Párrafo 3 – Selección y organización de contenidos */
  {
    type: "paragraph",
    text:
      "Una vez establecidos los objetivos, se seleccionan y organizan los contenidos pertinentes, actualizados y adecuados a las características del grupo y del contexto. La coherencia temática garantiza un aprendizaje progresivo y significativo."
  },

  /* Párrafo 4 – Estrategias pedagógicas alineadas */
  {
    type: "paragraph",
    text:
      "La elección de estrategias pedagógicas es esencial: deben alinearse con los objetivos y responder a los estilos de aprendizaje de los estudiantes. Métodos como el aprendizaje basado en proyectos, la cooperación o la integración de tecnologías digitales fomentan la motivación y la construcción activa del conocimiento."
  },

  /* Párrafo 5 – Plan de recursos, tiempos y anticipación de desafíos */
  {
    type: "paragraph",
    text:
      "Un diseño efectivo requiere planificar recursos humanos, materiales y tecnológicos, así como un cronograma realista. También conviene anticipar desafíos (falta de recursos, resistencia al cambio, diversidad de niveles) y establecer estrategias de mitigación para mantener el proyecto alineado con sus objetivos."
  },

  /* Imagen ilustrativa */
  {
    type   : "image",
    src    : "https://identidadydesarrollo.com/wp-content/uploads/2019/07/Proceso-iterativo-de-design-thinking-1024x689.png",
    alt    : "Diagrama de la fase de diseño dentro del ciclo de proyecto curricular",
    caption: "Figura 1. Componentes interrelacionados de la fase de diseño."
  },

  /* Acordeón 1 – Pasos esenciales del diseño */
  {
    type  : "accordion",
    header: "Pasos esenciales del diseño",
    open  : false,
    text  :
      "* **1. Definir objetivos SMART**  \n" +
      "* **2. Seleccionar contenidos pertinentes**  \n" +
      "* **3. Elegir estrategias pedagógicas**  \n" +
      "* **4. Planificar recursos y cronograma**  \n" +
      "* **5. Anticipar desafíos y ajustes**"
  },

  /* Acordeón 2 – Desafíos comunes y respuestas */
  {
    type  : "accordion",
    header: "Desafíos comunes y cómo afrontarlos",
    open  : false,
    text  :
      "* **Falta de recursos** → Gestionar apoyos externos y optimizar los disponibles.  \n" +
      "* **Resistencia al cambio** → Incluir a los actores clave en la planificación y comunicar beneficios.  \n" +
      "* **Diversidad de niveles** → Diseñar actividades diferenciadas y estrategias de aprendizaje colaborativo.  \n" +
      "* **Limitaciones de tiempo** → Establecer hitos realistas y priorizar contenidos críticos."
  }
],
  },
  {
    id       : "3.2",
    numbering: "3.2",
    title    : "Ejecución",
    content: [
  /* Párrafo 1 — Preparación antes de la puesta en marcha (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "La fase de ejecución representa la transición del papel a la práctica: el proyecto curricular abandona el dominio de la planificación para materializarse en el aula. Antes de iniciar, el equipo docente debe realizar una preparación minuciosa que asegure que todos los elementos previstos en el diseño estén realmente disponibles y en condiciones operativas. Esta preparación comprende la organización secuencial de los materiales didácticos impresos y digitales, la verificación técnica de los dispositivos y plataformas que se utilizarán, y la coordinación logística con los demás actores que participarán en la experiencia (tutores, facilitadores tecnológicos o invitados externos). Asimismo, es indispensable comunicar con claridad los objetivos, las reglas de trabajo y los criterios de evaluación a los estudiantes, de modo que cada participante comprenda tanto el propósito como su rol activo dentro del proyecto. Esta comunicación inicial aumenta la motivación, reduce la incertidumbre y alinea las expectativas del grupo con los fines del currículo. Una preparación bien orquestada minimiza interrupciones, evita la improvisación y genera confianza, creando un ambiente propicio para el aprendizaje significativo."
  },

  /* Párrafo 2 — Implementación flexible y monitoreo constante (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Durante la ejecución el docente adopta el papel de facilitador que orquesta dinámicas variadas: exposiciones breves, debates guiados, retos colaborativos y espacios de investigación autónoma. Aunque el plan de clase proporciona una ruta, la realidad del aula exige una actitud flexible para responder a situaciones imprevistas, como dificultades técnicas, diferencias en el ritmo de trabajo o preguntas que abren líneas de indagación no previstas. La observación continua de la participación, la comprensión y el estado emocional de los estudiantes permite ajustar tiempos, profundizar explicaciones o diversificar recursos sin perder de vista los objetivos. Esta retroalimentación in situ se apoya en estrategias como la evaluación diagnóstica rápida, las preguntas de sondeo y el uso de aplicaciones interactivas que generan datos inmediatos sobre el progreso del grupo. La flexibilidad, lejos de implicar improvisación, se basa en decisiones fundamentadas que preservan la coherencia del proyecto y mantienen la motivación alta, garantizando que el currículo se adapte al contexto emergente sin sacrificar su dirección pedagógica."
  },

  /* Párrafo 3 — Promoción del aprendizaje activo y colaborativo (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "El éxito de la fase de ejecución reside en promover un aprendizaje activo donde los estudiantes construyan conocimiento de manera experiencial. Para ello se emplean metodologías como el aprendizaje basado en proyectos, la resolución de problemas auténticos y las simulaciones que vinculan la teoría con la práctica. Estas estrategias convierten al aula en un laboratorio de experimentación intelectual y social, donde los estudiantes investigan, discuten, crean productos y reflexionan sobre sus resultados. El trabajo colaborativo desempeña un papel central: al formar equipos heterogéneos se potencian habilidades de comunicación, liderazgo compartido y negociación, esenciales en contextos profesionales. El docente facilita recursos, plantea retos retadores y media los conflictos que surgen del diálogo crítico. Paralelamente, la integración de tecnologías —foros, wikis, pizarras digitales, herramientas de co‑creación— amplía los escenarios de interacción y favorece la inclusión de distintos estilos de aprendizaje. Cuando los estudiantes asumen la responsabilidad de su proceso, la motivación intrínseca aumenta y el currículo se transforma en una experiencia relevante y significativa."
  },

  /* Párrafo 4 — Ajustes, retroalimentación y cierre reflexivo (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "La ejecución no concluye con la última actividad programada; exige un cierre reflexivo que consolide los aprendizajes y genere insumos para la evaluación. A lo largo de la implementación, la retroalimentación continua —entre pares y del docente— orienta ajustes oportunos: reordenar contenidos, introducir ejemplos adicionales o modificar la complejidad de las tareas. Esta toma de decisiones se basa en evidencias recogidas mediante rúbricas, listas de cotejo, portafolios y registros de observación. Al finalizar el ciclo, se realiza una sesión de síntesis donde los estudiantes presentan los productos logrados, identifican aciertos y proponen mejoras. El docente, por su parte, documenta hallazgos sobre la eficacia de las estrategias, la pertinencia de los recursos y el grado de consecución de los objetivos, información que alimentará la fase de evaluación formal. Este cierre consciente convierte la experiencia vivida en conocimiento transferible y afianza la cultura de mejora continua característica de un proyecto curricular dinámico y sostenible."
  },

  /* Video ilustrativo de buenas prácticas de ejecución */
  {
    type   : "video",
    title  : "Implementación efectiva de proyectos curriculares",
    src    : "https://www.youtube.com/watch?v=nVT-ZY_xDxU",
    caption: "Caso práctico que muestra estrategias, recursos y ajustes durante la fase de ejecución."
  },

  /* Acordeón 1 — Preparación operativa */
  {
    type  : "accordion",
    header: "Checklist de preparación antes de ejecutar",
    open  : false,
    text  :
      "* Organización de materiales didácticos y copias de seguridad.  \n" +
      "* Verificación de plataformas y dispositivos tecnológicos.  \n" +
      "* Coordinación con docentes colaboradores y personal de apoyo.  \n" +
      "* Comunicación de objetivos, roles y criterios de éxito a los estudiantes."
  },

  /* Acordeón 2 — Claves durante la ejecución */
  {
    type  : "accordion",
    header: "Principios de una ejecución efectiva",
    open  : false,
    text  :
      "* Monitorear participación y comprensión de forma continua.  \n" +
      "* Ajustar tiempos y metodologías según necesidades emergentes.  \n" +
      "* Fomentar aprendizaje activo, colaborativo y contextualizado.  \n" +
      "* Mantener la motivación mediante retroalimentación inmediata y retos significativos."
  }
],
  },
  {
    id       : "3.3",
    numbering: "3.3",
    title    : "Evaluación",
    content  : [
      // contenido pendiente
    ],
  },
  {
    id       : "3.4",
    numbering: "3.4",
    title    : "Seguimiento",
    content  : [
      // contenido pendiente
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