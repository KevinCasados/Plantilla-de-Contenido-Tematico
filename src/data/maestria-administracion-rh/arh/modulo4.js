/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId: "MARH",
courseId: "MARH-101",
id: "MARH101-mod5",

/* ── Datos visibles ─────────────────────────── */
courseName: "Administración de Recursos Humanos",
title: "Módulo 4. Características del diseño curricular",
semestre: "1er semestre",
teacher: "Mtra. Mirna Angélica Palafox Mariscal",

/* ── Objetivo y competencias ────────────────── */
objective:
  "Al término del módulo, el estudiante será capaz de analizar, comparar y "
  + "aplicar las características esenciales del diseño curricular —coherencia, "
  + "pertinencia, alineación constructiva, flexibilidad, evaluabilidad e inclusión— "
  + "para diagnosticar planes de estudio y proponer mejoras justificadas con base "
  + "en modelos teóricos y evidencia de aprendizaje.",

competencies: [
  "Identifica las características estructurales del diseño curricular (perfil de egreso, resultados de aprendizaje, malla, secuenciación y congruencia vertical/horizontal).",
  "Analiza y compara modelos de diseño curricular (por objetivos, por competencias, enfoque de Tyler/Taba/Stenhouse/DACUM) valorando su pertinencia en educación superior y formación profesional.",
  "Aplica criterios de calidad (coherencia interna, pertinencia externa, transversalidad, flexibilidad e inclusión) para evaluar unidades y módulos existentes.",
  "Construye alineación constructiva entre resultados de aprendizaje, contenidos, actividades, metodologías y evidencias de evaluación, usando taxonomías como Bloom/solo para asegurar niveles cognitivos adecuados.",
  "Diseña o rediseña una unidad didáctica proponiendo resultados de aprendizaje medibles, indicadores, rúbrica y estrategias de evaluación formativa y sumativa.",
  "Integra principios de accesibilidad e inclusión (UDL/WCAG) y enfoque de equidad de género e interculturalidad en decisiones de diseño curricular.",
  "Selecciona y utiliza herramientas digitales para mapear el currículo (matrices de alineación, mapas de resultados, tableros de seguimiento) y versionar iteraciones.",
  "Argumenta y comunica decisiones de rediseño curricular mediante un informe técnico sustentado en evidencias (datos de desempeño, retroalimentación y buenas prácticas)."
],

  /* ── Contenido temático (jerarquía recursiva) ─────────── */
themes: [
  /* 0. Página Info (opcional) */
  {
    id: "4.info",
    numbering: "Info",
    title: "Información general del módulo",
    isUnitInfo: true,
    content: [],
  },

  /* 1. Unidad principal (según el PDF) */
  {
    id: "7",
    numbering: "Unidad 7",
    title: "Gestión de Recursos Humanos",
    content: [
  {
    type: "paragraph",
    text:
      "La Gestión de Recursos Humanos (GRH) es un sistema estratégico que articula personas, procesos y resultados organizacionales. En esta unidad se analizarán sus fundamentos y su aporte directo al desempeño de la empresa: atraer y desarrollar talento, consolidar pertenencia y alinear capacidades con metas del negocio. Entender la GRH exige mirar más allá de tareas administrativas para reconocerla como un habilitador de valor: cuando las personas cuentan con entornos, herramientas y políticas claras, la organización transforma su potencial en productividad observable. La GRH coordina decisiones sobre puestos, flujos de trabajo, evaluación y reconocimiento, pero también respalda la adaptación ante cambios del entorno y la competencia. Por ello, se estudiarán los elementos que permiten a la GRH pasar de la mera operación a la generación de ventajas sostenibles. En síntesis, esta unidad contextualiza la GRH como palanca de ingreso, permanencia y crecimiento laboral, enfatizando su impacto en la calidad de bienes y servicios y en la satisfacción de las necesidades del mercado que la organización atiende. Así, se traza un marco de comprensión integral para la toma de decisiones con base en evidencias y resultados."
  },
  {
    type: "paragraph",
    text:
      "Gestionar implica asumir responsabilidad sobre un proceso y coordinar recursos y actividades de forma intencional. Trasladado a la GRH, ese principio se traduce en planear, organizar y administrar tareas y activos vinculados a las personas, garantizando coherencia entre lo que la organización necesita y lo que su gente puede y sabe hacer. De ahí que la GRH abarque ámbitos como retribución, atracción y selección, formación y desarrollo, clima laboral, evaluación del desempeño, movilidad, resolución de conflictos e implantación de políticas. Esta amplitud confirma que la GRH no es una función aislada, sino un tejido que conecta decisiones operativas y direccionales. En la práctica, el énfasis está en asegurar los medios (recursos, estructuras, información) para que los procesos de personas ocurran con calidad y oportunidad. Gestionar no es solo ejecutar acciones: es construir condiciones de posibilidad, medir su efecto e iterar. Por eso, los apartados del programa (aspectos generales, introducción, definición y clasificación) proveen lenguaje común y taxonomías útiles para delimitar el alcance y comparar prácticas."
  },
  {
    type: "paragraph",
    text:
      "El corazón de la GRH es el ciclo de talento: reclutar, seleccionar, orientar, recompensar, desarrollar, auditar y dar seguimiento. Un ciclo sano parte de perfiles claros, procesos justos y datos confiables para decidir; culmina en sentido de pertenencia, compromiso y desempeño sostenible. La orientación inicial acelera la integración cultural; la formación y el desarrollo fortalecen competencias técnicas y conductuales; la compensación y las prestaciones sostienen la retención; la higiene y seguridad promueven bienestar; las auditorías e indicadores aportan trazabilidad. Todo ello reduce la incertidumbre y incrementa la efectividad cotidiana. La GRH, bien diseñada, enlaza cada eslabón con métricas pertinentes y retroalimentación continua. En esta unidad trabajaremos con una mirada sistémica: cada práctica se observará tanto por su aporte individual como por su congruencia con las demás. El resultado esperado es que el estudiante pueda mapear su proceso de personas, detectar cuellos de botella e impulsar mejoras puntuales y medibles, con la ética profesional y el respeto por la diversidad como principios transversales."
  },
  {
    type: "paragraph",
    text:
      "Cuando la GRH consolida procesos y rutinas de calidad, la organización obtiene ventajas difíciles de imitar. Primero, eleva la eficiencia y la eficacia: equipos motivados y bien entrenados encuentran modos de reducir costos y crear propuestas diferenciales para usuarios o clientes. Segundo, integra conocimiento tácito y explícito en prácticas reproducibles, aumentando el capital intelectual. Tercero, permite la orquestación de habilidades en nuevas tareas, multiplicando la capacidad de respuesta ante cambios. Por ello, la unidad enfatiza una GRH que conecta aprendizaje organizacional, innovación y resultados, no solo cumplimiento de procedimientos. Desde esta óptica, la evaluación de desempeño se entiende como medio y no como fin: un mecanismo para aprender, ajustar y crecer. En suma, se asume que toda práctica de GRH debe justificarse por su impacto en resultados corporativos y bienestar, documentando su contribución con indicadores pertinentes y comunicación clara a las áreas involucradas."
  },
  {
    type: "paragraph",
    text:
      "El temario de la unidad organiza el estudio en una progresión lógica: de los aspectos generales y la introducción conceptual, a la definición y la clasificación de la GRH, para culminar en los niveles de gestión y, de manera específica, en la gestión del desempeño profesional. Esta estructura facilita ubicar cada concepto en su función: la definición fija el alcance; la clasificación permite comparar familias de prácticas y marcos; los niveles de gestión ayudan a distribuir responsabilidades entre individuos, equipos y organización. La gestión del desempeño profesional, por su parte, integra criterios, instrumentos e intervenciones formativas que, aplicados con rigor y empatía, convierten datos en decisiones. De esta forma, el estudiante dispondrá de un mapa para relacionar políticas, procesos y cultura, y será capaz de proponer mejoras graduadas según la madurez de su contexto. La unidad, por tanto, opera como un puente entre teoría y ejecución, con foco en la pertinencia y la viabilidad operativa."
  },

  {
  type: "accordion",
  header: "Mapa en 3 niveles — Unidad 7: Gestión de Recursos Humanos",
  open: true,
  text:
    "**Nivel 1 — Definición y alcance de la GRH**  \n" +
    "• ‘Gestión’ como coordinación de recursos y actividades para objetivos.  \n" +
    "• Alcance de la GRH: provisión, selección, orientación, desempeño, compensación, clima, cambio.  \n" +
    "• Aporte: traducir capacidades en resultados y ventajas sostenibles.  \n\n" +

    "**Nivel 2 — Clasificación y procesos clave**  \n" +
    "• Provisión: investigación de mercado, reclutamiento y selección.  \n" +
    "• Organización: inducción, diseño de puestos, evaluación del desempeño.  \n" +
    "• Retención: compensación, prestaciones, higiene y seguridad, relaciones laborales.  \n" +
    "• Desarrollo: capacitación y desarrollo organizacional.  \n" +
    "• Evaluación: SI de RH, controles y auditorías de personal.  \n\n" +

    "**Nivel 3 — Niveles de gestión y desempeño profesional**  \n" +
    "• Niveles: individual, equipo, organizacional (alineación con metas y cultura).  \n" +
    "• Gestión del desempeño: expectativas claras, evidencias, feedback y formación.  \n" +
    "• Mejora continua: indicadores → decisiones → acciones de desarrollo."
}
],

    /* → Subtemas de primer nivel */
    subthemes: [
      {
        id: "7.1",
        numbering: "7.1",
        title: "Aspectos generales",
        content: [
    // Párrafo 1 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Comprender los aspectos generales de la Gestión de Recursos Humanos (GRH) exige partir de una noción operacional de ‘gestión’: asumir responsabilidades sobre un proceso, dotarlo de recursos y estructuras y coordinar sus actividades para alcanzar objetivos previamente definidos. En la práctica de la GRH, esto se traduce en planear, organizar y administrar tareas y activos vinculados a las personas con una orientación explícita a resultados. La GRH, por tanto, no se limita a trámites o funciones administrativas; constituye un sistema que integra políticas, procedimientos y decisiones que conectan el desempeño individual y colectivo con la estrategia de la organización. Tal enfoque exige coherencia entre lo que la empresa necesita (metas, calidad, productividad, satisfacción del cliente) y lo que su gente puede y quiere aportar; además, demanda información confiable, criterios claros de priorización y rutinas de mejora continua. En este subtema se subraya que las personas son el medio para producir bienes y servicios acordes con las necesidades del mercado, y que la GRH agrega valor cuando convierte esa capacidad potencial en resultados observables y sostenibles. Así, la unidad fija un lenguaje común —gestión, procesos de talento, métricas, evidencias— que servirá para ordenar definiciones, clasificaciones y niveles de gestión posteriores. En suma, hablar de aspectos generales implica sentar bases: por qué la GRH importa, qué alcance tiene, qué principios la orientan y cómo se justifica su contribución en términos de eficacia, eficiencia y ventaja competitiva sostenida."
    },

    // Acordeón 1 — síntesis operativa del PDF (intercalado)
    {
      type: "accordion",
      header: "¿Qué entendemos por “gestión” en GRH? (síntesis operativa)",
      open: false,
      text:
        "• Asumir un proceso y proveerle recursos y estructuras.  \n" +
        "• Coordinar actividades e interacciones con procesos semejantes.  \n" +
        "• Orientar todo a un objetivo definido y medible.  \n" +
        "• En GRH: planear, organizar y administrar tareas y activos relacionados con las personas."
    },

    // Párrafo 2 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Desde una visión sistémica, la GRH agrupa áreas interdependientes cuyo desempeño se retroalimenta: retribución, gestión del talento, formación en la empresa, selección, movilidad, clima laboral, evaluación del desempeño, gestión del cambio, resolución de conflictos e implantación de políticas, además de las tareas administrativas derivadas. Esta amplitud no es decorativa; responde a la necesidad de articular prácticas que, coordinadas, produzcan estándares de desempeño acordes con la estrategia. De ahí la relevancia del ciclo de talento —reclutar, seleccionar, orientar, recompensar, desarrollar, auditar y dar seguimiento— soportado en bases de datos confiables que permitan decidir con evidencia y construir sentido de pertenencia. Solo así emergen productividad y calidad de forma consistente. A su vez, el entorno impone cambios tecnológicos, sociales y regulatorios que obligan a revisar procesos, actualizar capacidades y sostener el aprendizaje organizacional. En los aspectos generales se enfatiza que la GRH debe medir lo que importa —indicadores de cobertura, rotación, desempeño, bienestar— y comunicar hallazgos de manera oportuna para ajustar políticas y prácticas. En síntesis, la GRH genera valor cuando asegura coherencia entre propósitos, capacidades y resultados; cuando integra la experiencia del colaborador con la propuesta de valor al cliente; y cuando conecta la toma de decisiones de personas con métricas del negocio, evitando el activismo operativo sin rumbo."
    },

    // Acordeón 2 — complemento con referencias externas (intercalado)
    {
      type: "accordion",
      header: "Información adicional (definiciones y guías internacionales)",
      open: false,
      text:
        "**Definición SHRM de HRM:** la gestión de recursos humanos abarca todas las dimensiones de la gestión de personas para cumplir los objetivos de la organización.  \n" +
        "**Guías de la OIT:** los sistemas de gestión de RR. HH. deben estructurarse formalmente, apoyarse en datos y alinear prácticas con condiciones de trabajo decentes y aprendizaje continuo.  \n" +
        "• Implicación práctica: sin procesos definidos, datos confiables y evaluación de impacto, la función de RR. HH. difícilmente demostrará su contribución estratégica."
    },

    // Párrafo 3 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Una razón clave para estudiar los aspectos generales es explicitar cómo la GRH aporta ventajas competitivas. Primero, mediante **eficiencia y eficacia**: equipos bien integrados encuentran formas de disminuir costos, acortar tiempos de ciclo y ofrecer propuestas singulares a clientes o usuarios. Segundo, a través de **capacidades difíciles de imitar**: habilidades, conocimientos y rutinas que, organizadas en procesos reproducibles, elevan el capital intelectual. Tercero, por la **orquestación del talento**: la GRH posibilita recombinar personas y conocimientos para responder a nuevos retos con rapidez. Estos beneficios dependen de prácticas que alineen expectativas, instrumentos y evidencias: descripciones de puesto claras, procesos de selección rigurosos, inducciones efectivas, formación pertinente, evaluación con propósito formativo, reconocimiento justo y políticas inclusivas. Asimismo, la GRH debe permanecer atenta a tendencias del entorno laboral —tecnología, demografía, regulación, cultura de bienestar— y traducirlas a decisiones de personas. En este marco, el criterio general es sencillo: cada práctica de RR. HH. se justifica por su impacto verificable en desempeño y bienestar. De este modo, los aspectos generales no solo introducen conceptos; proveen un marco de evaluación para que el estudiante identifique cuellos de botella, priorice mejoras y sostenga decisiones informadas que conecten sistemáticamente a las personas con los resultados de la organización."
    },

    // Video (referencia introductoria)
    {
      type: "video",
      title: "Gestión del talento humano — Introducción",
      src: "https://www.youtube.com/watch?v=yZ7-ckjDE1I",
      caption: "Panorama introductorio a la GRH y su contribución al desempeño."
    }
  ],
      },
      {
        id: "7.2",
        numbering: "7.2",
        title: "Introducción",
        content: [
          { type: "paragraph", text: "Contenido del subtema 7.2 (pendiente de desarrollar)." },
        ],
      },
      {
        id: "7.3",
        numbering: "7.3",
        title: "Definición",
        content: [
          { type: "paragraph", text: "Contenido del subtema 7.3 (pendiente de desarrollar)." },
        ],
      },
      {
        id: "7.4",
        numbering: "7.4",
        title: "Clasificación",
        content: [
          { type: "paragraph", text: "Contenido del subtema 7.4 (pendiente de desarrollar)." },
        ],
      },
      {
        id: "7.5",
        numbering: "7.5",
        title: "Niveles de gestión",
        content: [
          { type: "paragraph", text: "Contenido del subtema 7.5 (pendiente de desarrollar)." },
        ],

        /* → Sub‑subtemas */
        subthemes: [
          {
            id: "7.5.1",
            numbering: "7.5.1",
            title: "Gestión del desempeño profesional",
            content: [
              { type: "paragraph", text: "Contenido del subtema 7.5.1 (pendiente de desarrollar)." },
            ],
            subthemes: [
              {
                id: "7.5.1.1",
                numbering: "7.5.1.1",
                title: "Introducción",
                content: [
                  { type: "paragraph", text: "Contenido del sub‑subtema 7.5.1.1 (pendiente de desarrollar)." },
                ],
              },
              {
                id: "7.5.1.2",
                numbering: "7.5.1.2",
                title: "Definición",
                content: [
                  { type: "paragraph", text: "Contenido del sub‑subtema 7.5.1.2 (pendiente de desarrollar)." },
                ],
              },
              {
                id: "7.5.1.3",
                numbering: "7.5.1.3",
                title: "Tipos",
                content: [
                  { type: "paragraph", text: "Contenido del sub‑subtema 7.5.1.3 (pendiente de desarrollar)." },
                ],
              },
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
