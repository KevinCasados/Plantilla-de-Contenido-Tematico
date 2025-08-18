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
    // Párrafo 1 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Introducir la Gestión de Recursos Humanos (GRH) supone partir de un concepto operativo de ‘gestión’. Gestionar no es solo ejecutar tareas: es asumir la responsabilidad de un proceso, prever los recursos y estructuras que lo hacen posible y coordinar actividades e interacciones para alcanzar objetivos definidos. Trasladada a la función de personas, esta idea se traduce en planear, organizar y administrar los flujos de trabajo vinculados al talento con una orientación explícita a resultados. Por ello, la GRH funge como sistema articulador entre capacidades individuales, prácticas organizativas y metas estratégicas. La introducción establece, además, que la GRH agrega valor cuando convierte el potencial humano en desempeño observable, medible y sostenible en el tiempo. En términos formativos, esta perspectiva insta a construir un lenguaje común —procesos, estándares, evidencias— que permita comparar prácticas, delimitar su alcance y justificar intervenciones con criterios de eficacia y eficiencia. La noción de gestión que aquí se adopta enfatiza dos pilares: la disposición oportuna de recursos (personas, información, tecnología, estructura) y la coordinación intencional de actividades dentro de cadenas de valor que no operan de manera aislada. Desde este punto de partida, el subtema traza la hoja de ruta para las secciones posteriores del programa (definiciones, clasificaciones y niveles) y sitúa a la GRH como un medio para producir bienes y servicios alineados con las necesidades del mercado a través del trabajo organizado de las personas."
    },

    // Acordeón 1 — Viñetas textuales del PDF sobre “gestión”
    {
      type: "accordion",
      header: "Qué entendemos por gestión (síntesis de viñetas del PDF)",
      open: false,
      text:
        "• Asumir y llevar a cabo responsabilidades sobre un proceso (conjunto de actividades).  \n" +
        "• Preocuparse por la disposición de recursos y estructuras necesarias para que el proceso tenga lugar.  \n" +
        "• Coordinar sus actividades y las interacciones con procesos semejantes para alcanzar objetivos.  \n" +
        "• Gestión: conjunto de procedimientos y acciones para lograr un fin previamente planteado."
    },

    // Párrafo 2 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "La introducción a la GRH pone el acento en su finalidad práctica: crear condiciones para que las personas alcancen los objetivos con los estándares definidos por la organización. Dicho propósito se sostiene en un ciclo de talento que integra actividades clave —reclutar, seleccionar, orientar, recompensar, desarrollar, auditar y dar seguimiento— y en una base de información fiable que habilita decisiones justas y oportunas. Este ciclo no se limita a incorporar personas; busca también cimentar compromiso y sentido de pertenencia como prerrequisitos de la productividad y la calidad. En línea con esa visión, el alcance de la GRH abarca un conjunto amplio de áreas interdependientes: retribución, gestión del talento, formación en la empresa, selección, movilidad, clima laboral, evaluación del desempeño, gestión del cambio, resolución de conflictos, implantación de políticas y tareas administrativas que hacen operativas dichas prácticas. El enfoque introductorio invita a observar estas áreas como un sistema: la calidad de cada práctica es tan relevante como su coherencia con las demás. La propuesta pedagógica del subtema es, por tanto, aprender a mapear procesos de personas con métricas pertinentes, identificar brechas y diseñar mejoras que conecten la experiencia del colaborador con la propuesta de valor al cliente. En suma, la GRH se presenta como la función que planifica, organiza y administra el trabajo con personas para traducir estrategia en resultados, evitando activismos que no demuestran impacto."
    },

    // Imagen (del PDF) para reforzar la idea de GRH como sistema
    {
      type: "image",
      src: "https://lucid.app/systemTemplates/thumb/c4791af6-8bc1-4205-89ef-487404d65cd6/0/124/NULL/2400/true?clipToPage=false",
      caption: "Gestión de Recursos Humanos: visión sistémica de procesos y resultados.",
      alt: "Diagrama conceptual sobre Gestión de Recursos Humanos",
      text: ""
    },

    // Acordeón 2 — Viñetas del proceso GRH (tabla/etapas y funciones)
    {
      type: "accordion",
      header: "Proceso de GRH — Etapas y funciones (síntesis de la tabla del PDF)",
      open: false,
      text:
        "**Provisión (¿Quién trabaja?):** Investigación de mercado, reclutamiento, selección.  \n" +
        "**Organización (¿Qué harán?):** Inducción, diseño de puestos, evaluación del desempeño.  \n" +
        "**Retención (¿Cómo retener?):** Remuneración, prestaciones, higiene y seguridad, relaciones sindicales.  \n" +
        "**Desarrollo (¿Cómo crecer?):** Capacitación, desarrollo organizacional.  \n" +
        "**Evaluación (¿Qué logran?):** Sistemas de información, controles y auditorías de personal."
    },

    // Párrafo 3 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Como toda introducción rigurosa, este subtema también delimita condiciones y desafíos de implementación. En la práctica, el área de GRH opera con ‘medios’ (personas y procesos) para impactar ‘fines’ organizacionales, lo que la obliga a coordinarse con múltiples funciones cuyos resultados no controla directamente. Además, trabaja con recursos vivos: capacidades, motivaciones y conductas que evolucionan en el tiempo y dependen del contexto, la cultura y el liderazgo. Por ello, la medición del desempeño —y su gestión consecuente— requiere instrumentos válidos y confiables, comunicación clara de propósitos, retroalimentación oportuna y una mirada de aprendizaje continuo. La introducción insiste en que las evaluaciones deben adaptarse al tipo de trabajo y al momento de la organización, evitando formatos rígidos que desalienten la mejora. En paralelo, la función de RR. HH. debe demostrar su contribución con evidencias ligadas a resultados del negocio: eficiencia, eficacia, calidad y diferenciación. De hecho, el desarrollo de capacidades difíciles de imitar y la orquestación flexible del talento son las fuentes mediante las cuales la GRH habilita ventajas competitivas sostenibles. Con este encuadre, el estudiante queda preparado para transitar de una comprensión conceptual a un diagnóstico aplicado: reconocer el mapa de procesos, distinguir cuellos de botella, priorizar intervenciones y construir indicadores que conecten personas y estrategia con trazabilidad. Así, la introducción no solo describe qué es la GRH, sino que fija criterios para practicarla con sentido, ética y evidencia."
    }
  ],
      },
      {
        id: "7.3",
        numbering: "7.3",
        title: "Definición",
        content: [
    // Párrafo 1 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Definir la Gestión de Recursos Humanos (GRH) exige comenzar por el concepto operativo de ‘gestión’. Gestionar implica asumir la responsabilidad sobre un proceso —es decir, un conjunto de actividades encadenadas—, proveer los recursos y estructuras que lo hacen posible, y coordinar sus interacciones con otros procesos para alcanzar un fin preestablecido. Trasladada al ámbito de las personas, esta noción se concreta en planificar, organizar y administrar las tareas y activos relacionados con quienes integran la organización. En sentido práctico, la GRH no es una lista de trámites; es un sistema deliberado que alinea capacidades humanas, prácticas organizativas e indicadores de resultado. Cuando una empresa define con claridad qué espera del trabajo humano, habilita los medios (perfiles, puestos, herramientas, reglas de operación, información y métricas) y asegura la coordinación con procesos semejantes (por ejemplo, producción o servicio), convierte potencial en desempeño medible. Así, la ‘definición’ de GRH que adopta este curso integra dos ideas clave: i) su naturaleza como función que articula medios y condiciones para que el trabajo ocurra con estándares, y ii) su orientación a objetivos verificables, no a actividades aisladas. Bajo esta lógica, el lenguaje de la GRH es el de los procesos (qué, quién, cuándo), los recursos (con qué) y los resultados (para qué), reconociendo que toda práctica de RR. HH. se justifica por su contribución demostrable al logro de metas estratégicas y a la sostenibilidad del desempeño en el tiempo."
    },

    // Lista 1 — Complemento práctico para “operacionalizar” la definición
    {
      type: "list",
      style: "unordered",
      items: [
        "Redacta definiciones funcionales: qué proceso de personas se gestiona, con qué recursos y para qué resultado.",
        "Alinea cada definición con indicadores (p. ej., cobertura de inducción, tiempo de vacante, % evaluaciones al día).",
        "Explicita interdependencias: cómo interactúa el proceso de RR. HH. con producción, servicio, finanzas o TI.",
        "Diferencia medios (políticas, flujos, datos) de fines (calidad, productividad, satisfacción del cliente).",
        "Versiona tus definiciones: revisa y ajusta según evidencia, evitando activismo operativo sin impacto."
      ],
      text: ""
    },

    // Párrafo 2 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Desagregar la definición de GRH ayuda a dimensionar su alcance. Primero, la finalidad: crear condiciones para que las personas alcancen objetivos con los estándares fijados por la organización. Segundo, el ciclo de talento que la sustenta: reclutar, seleccionar, orientar, recompensar, desarrollar, auditar y dar seguimiento, apoyado en una base de información confiable para decisiones justas y oportunas. Tercero, las áreas que la integran: retribución, gestión del talento, formación en la empresa, selección y movilidad, clima laboral, evaluación del desempeño, gestión del cambio, resolución de conflictos e implantación de políticas, además de las tareas administrativas derivadas. Vistas como sistema, estas áreas operan en coherencia: la calidad de cada práctica tiene sentido en la medida en que contribuye a la integralidad del modelo y a los resultados del negocio. Por eso, la definición de GRH no se agota en un enunciado; se valida en la práctica con métricas pertinentes (eficacia, eficiencia, calidad, diferenciación) y con mecanismos de aprendizaje continuo que conectan datos, decisiones e iteraciones. Dicho de otro modo: definimos la GRH como la función que planifica, organiza y administra el trabajo con personas para traducir estrategia en resultados sostenibles, fomentando pertenencia y compromiso, y convirtiendo la experiencia del colaborador en valor para el cliente. Esta definición, además, exige sensibilidad ante cambios del entorno (tecnología, regulación, demografía) y capacidad para ajustar procesos de manera ágil, sin perder trazabilidad ni claridad en los propósitos."
    },

    // Imagen de apoyo (misma referencia usada en la unidad)
    {
      type: "image",
      src: "https://uaeh.edu.mx/scige/boletin/tepeji/n8/multimedia/a13/a13_8.jpg",
      caption: "Gestión de Recursos Humanos: definición operativa y alcance sistémico.",
      alt: "Diagrama conceptual de la gestión de recursos humanos",
      text: ""
    },

    // Lista 2 — Indicadores útiles para ‘probar’ la definición en la práctica
    {
      type: "list",
      style: "ordered",
      items: [
        "Tiempo de cobertura de vacantes (days-to-fill) y calidad de contratación a 90 días.",
        "Porcentaje de inducciones completas dentro del SLA interno.",
        "Cobertura y puntualidad de evaluaciones de desempeño (y % con planes de mejora).",
        "Rotación voluntaria e involuntaria, y su costo asociado.",
        "Horas de formación por FTE y tasa de transferencia al puesto (evidencias).",
        "Índice de clima o compromiso y su relación con métricas de servicio/producción.",
        "Accidentes/incidentes por millón de horas y medidas preventivas implementadas."
      ],
      text: ""
    },

    // Párrafo 3 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "La definición se robustece cuando se vincula a un mapa de procesos comprensible. En GRH, un esquema clásico —adaptado de la literatura especializada— organiza el trabajo en cinco etapas: Provisión (¿quién trabaja?), Organización (¿qué harán?), Retención (¿cómo retener?), Desarrollo (¿cómo crecer?) y Evaluación (¿qué logran?). Cada etapa agrupa acciones y funciones específicas del área: investigación de mercado, reclutamiento y selección (Provisión); inducción, diseño de puestos y evaluación del desempeño (Organización); remuneración, prestaciones, higiene y seguridad, y relaciones laborales (Retención); capacitación y desarrollo organizacional (Desarrollo); y sistemas de información, controles y auditorías de personal (Evaluación). Este desglose no cambia la definición; la hace operativa al mostrar cómo se materializa en decisiones que afectan el día a día. Asimismo, recuerda que RR. HH. ‘trabaja con medios’ y con recursos vivos: capacidades y motivaciones que cambian; por tanto, sus resultados no se miden por la actividad en sí, sino por su contribución a resultados organizacionales. De allí la relevancia de fijar expectativas, medir, comunicar y ajustar. Si tu definición no conduce a evidencias de logro —mejoras en eficiencia, eficacia, calidad o diferenciación—, entonces describe una intención, no una función de gestión. En síntesis, definir GRH es precisar su naturaleza de sistema orientado a fines corporativos, su alcance en procesos clave, y sus criterios de éxito observables en el desempeño cotidiano."
    }
  ],
      },
      {
        id: "7.4",
        numbering: "7.4",
        title: "Clasificación",
        content: [
    // Párrafo 1 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Clasificar la Gestión de Recursos Humanos (GRH) permite convertir una definición general en un mapa operativo que vincula propósitos, procesos y resultados. En esta unidad, la clasificación central organiza la GRH en cinco etapas que responden a preguntas guía: Provisión (¿quién trabaja?), Organización (¿qué harán?), Retención (¿cómo retener?), Desarrollo (¿cómo crecer?) y Evaluación (¿qué logran?). La etapa de Provisión concentra las decisiones que determinan la incorporación de las personas: investigación de mercado laboral, reclutamiento y selección. Organización alinea la integración del talento con la arquitectura del trabajo: inducción, diseño de puestos y evaluación del desempeño para fijar estándares y expectativas desde el inicio. Este enfoque por etapas no es meramente taxonómico; clarifica entregables, responsables e indicadores para asegurar coherencia entre lo que la empresa necesita y lo que las personas pueden y deben realizar. Entender Provisión y Organización como el inicio del ciclo de talento evita tratar el ingreso como un trámite aislado y obliga a pensar la compatibilidad entre perfiles, tareas, estructura y evaluaciones. Así, la clasificación funciona como una plantilla para diseñar o auditar procesos: define entradas, salidas, controles y riesgos típicos de cada fase. Además, facilita la comunicación entre áreas, al proveer un lenguaje común que conecta decisiones de personal con efectos en la calidad del servicio o la producción, reduciendo la fragmentación de esfuerzos y la duplicidad de actividades."
    },

    // Lista 1 — Complemento práctico para operacionalizar la clasificación
    {
      type: "list",
      style: "unordered",
      items: [
        "Definir para cada etapa: objetivo, entregables, responsables (RACI) e indicadores.",
        "Alinear ‘puertas de salida/entrada’ entre etapas (p. ej., requisitos de onboarding tras selección).",
        "Establecer datos mínimos por etapa (catálogo de puestos, perfiles, métricas de inducción, etc.).",
        "Versionar procesos: revisiones trimestrales con evidencias de desempeño y costos.",
        "Documentar riesgos comunes (sesgos en selección, rotación temprana, brechas de habilidades)."
      ],
      text: ""
    },

    // Párrafo 2 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Las etapas de Retención, Desarrollo y Evaluación completan la clasificación y dan continuidad al ciclo de talento. Retención responde a la pregunta ‘¿cómo retener?’ y articula prácticas que sostienen la permanencia con bienestar y equidad: remuneración, prestaciones, higiene y seguridad, y relaciones laborales, creando condiciones que favorecen el compromiso y la estabilidad. Desarrollo responde a ‘¿cómo crecer?’ mediante capacitación y desarrollo organizacional, cerrando brechas de habilidades y preparando a las personas para nuevos retos. Evaluación responde a ‘¿qué logran?’ y provee el sistema de información, controles y auditorías de personal, habilitando decisiones con datos y trazabilidad. Este tridente asegura la retroalimentación continua del ciclo y su mejora: sin retención no hay continuidad del aprendizaje; sin desarrollo no hay actualización competitiva; sin evaluación no hay evidencia para decidir. Clasificar así permite asignar presupuestos por etapa, diferenciar métricas (p. ej., días para cubrir vacantes vs. cobertura de inducción vs. porcentaje de evaluaciones al día) y auditar dónde se generan cuellos de botella (rotación voluntaria temprana, baja transferencia del entrenamiento al puesto, evaluaciones inconclusas). En consecuencia, la clasificación no debe verse como un esquema estático: cada etapa se adapta al contexto, a la estrategia y a la madurez de la organización, manteniendo un hilo conductor que hace visibles las relaciones entre prácticas de personas y resultados del negocio."
    },

    // Lista 2 — Enfoques de clasificación complementarios (útiles en la práctica)
    {
      type: "list",
      style: "ordered",
      items: [
        "Por horizonte de decisión: estratégico (políticas y portafolios de talento), táctico (programas) y operativo (procedimientos).",
        "Por dominio de procesos: adquisición (atracción/selección), desempeño (objetivos/feedback), desarrollo (learning), compensación/beneficios, relaciones laborales y bienestar.",
        "Por stakeholder: individuo (experiencia del empleado), equipo (dinámicas y colaboración), organización (cultura, estructura, cambio).",
        "Por evidencia: indicadores de eficacia (cumplimiento de objetivos), eficiencia (costos/tiempos), calidad (estándares), diferenciación (ventajas competitivas).",
        "Por madurez del sistema: inicial (ad hoc), definido (políticas), gestionado (KPIs) y optimizado (mejora continua)."
      ],
      text: ""
    },

    // Párrafo 3 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Clasificar también ayuda a entender las limitaciones y retos de la función: RR. HH. trabaja con ‘medios’ (personas, procesos e información) para impactar ‘fines’ que se materializan en otras áreas, opera con recursos vivos (capacidades y motivaciones que cambian) y convive con responsabilidades distribuidas a lo largo de la organización. Por ello, la clasificación debe usarse como guía para gestionar interdependencias y expectativas, no como un corsé burocrático. Al auditar por etapas es posible detectar desajustes: perfiles definidos sin análisis de puesto, inducciones que no aterrizan estándares, compensaciones desalineadas con el mercado, programas formativos sin métricas de transferencia o evaluaciones sin propósito formativo. El cierre conceptual es claro: la efectividad de RR. HH. no se mide por la suma de actividades en cada etapa, sino por su contribución a resultados organizacionales; cuando los directivos conocen qué prácticas mejoran la calidad de la gestión y qué resultados esperar, la inversión en RR. HH. gana credibilidad. En síntesis, la clasificación por etapas —complementada con marcos por horizonte, dominio, stakeholder, evidencia y madurez— ofrece al profesional una herramienta para diseñar, diagnosticar y mejorar el sistema de personas con criterio y trazabilidad, anclando decisiones en datos y en la coherencia entre procesos y estrategia."
    }
  ],
      },
      {
        id: "7.5",
        numbering: "7.5",
        title: "Niveles de gestión",
        content: [
    // Párrafo 1 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Hablar de niveles de gestión en Recursos Humanos (RR. HH.) es precisar cómo se distribuyen responsabilidades y decisiones a lo largo de la organización para que el trabajo con personas ocurra con estándares definidos. Partimos del sentido operativo de ‘gestión’: asumir responsabilidades sobre un proceso (conjunto de actividades), dotarlo de recursos y estructuras, y coordinar sus interacciones para alcanzar un objetivo previamente planteado. Trasladada a RR. HH., esta noción implica planificar, organizar y administrar tareas y activos relacionados con las personas de forma deliberada y orientada a resultados. En la práctica, los niveles de gestión se entienden como planos de decisión que van desde la definición de políticas y metas, hasta la ejecución diaria en los puestos, pasando por la orquestación de equipos y áreas. La existencia de estructuras y jerarquías formales en los puestos —con autoridad y responsabilidades— exige articular el ‘quién decide qué’ y ‘con qué evidencia’, evitando tanto la microgestión como la delegación difusa. Esta unidad presenta los niveles como un marco para asignar objetivos, indicadores y entregables, de modo que la estrategia se traduzca en procesos y éstos, a su vez, en resultados observables. Comprender los niveles también permite reconocer las fronteras de RR. HH.: trabaja con medios (personas, procesos, información) para impactar fines que se materializan en otras áreas; por eso, coordinar, priorizar y medir es imprescindible. Con este mapa, podrás ubicar qué decisiones corresponden a la dirección (políticas, portafolios de talento), a las jefaturas (metas, capacidades del equipo) y a los puestos (estándares, evidencias), asegurando coherencia entre los distintos planos."
    },

    // Acordeón 1 — Marco de referencia complementario
    {
      type: "accordion",
      header: "Tres niveles clásicos: estratégico, táctico y operativo",
      open: false,
      text:
        "**Estratégico (organización):** define políticas de personas, prioridades del portafolio de talento, criterios de inversión y metas globales.  \n" +
        "**Táctico (equipos/áreas):** convierte políticas en programas y metas de equipo; gestiona capacidades, cargas y flujos inter-áreas.  \n" +
        "**Operativo (puestos):** ejecuta tareas con estándares claros; genera evidencias (productividad, calidad, seguridad, servicio) y retroalimenta mejoras.  \n" +
        "Clave práctica: alinear objetivos, indicadores y cadencias de revisión por nivel (OKR/KPI), evitando actividades sin impacto."
    },

    // Párrafo 2 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "En RR. HH., los niveles de gestión deben dialogar con una realidad compleja: la función asesora y habilita, pero no controla todos los resultados del negocio. De hecho, gran parte del trabajo ocurre en áreas donde RR. HH. no tiene jurisdicción directa; trata con recursos vivos —personas que cambian, aprenden y se adaptan— y convive con responsabilidades distribuidas entre líderes de línea. Por ello, los niveles ayudan a delimitar responsabilidades y a reducir ambigüedad: la dirección fija estándares y marcos de actuación (por ejemplo, política salarial y arquitectura de puestos); las jefaturas gestionan metas del equipo, feedback, riesgos de rotación y planes de desarrollo; las personas en puesto ejecutan con calidad y registran evidencias. En paralelo, los niveles ‘cruzan’ el ciclo de talento (provisión, organización, retención, desarrollo y evaluación): a nivel estratégico se priorizan inversiones y capacidades críticas; a nivel táctico se calibran flujos (selección, inducción, desempeño, capacitación); y a nivel operativo se cumple el estándar, se documentan resultados y se proponen mejoras. Este andamiaje facilita auditar el sistema: si la rotación voluntaria temprana aumenta, el diagnóstico por nivel aclara si el problema proviene de una decisión estratégica (propuesta de valor), táctica (inducción, liderazgo) u operativa (condiciones del puesto). Del mismo modo, alinea la medición: eficiencia y eficacia globales, métricas de programa y productividad/ calidad a nivel de puesto. En suma, sin una noción explícita de niveles, RR. HH. corre el riesgo de dispersarse en tareas; con niveles, concentra foco, evidencia y mejora continua."
    },

    // Acordeón 2 — Sugerencias accionables por nivel
    {
      type: "accordion",
      header: "Acciones y métricas por nivel (guía rápida)",
      open: false,
      text:
        "**Estratégico:** mapa de capacidades, prioridades de contratación/desarrollo, bandas salariales, metas anuales; indicadores de eficacia (cumplimiento de objetivos) y diferenciación.  \n" +
        "**Táctico:** planes de dotación, cobertura de inducción, porcentaje de evaluaciones al día, transferencia del entrenamiento; indicadores de eficiencia (costos/tiempos) y calidad.  \n" +
        "**Operativo:** estándares de puesto, checklists de seguridad/calidad/servicio, evidencias de logro; métricas diarias y semanales que alimentan tableros.  \n" +
        "Consejo: define ‘puertas’ entre niveles (entradas/salidas) y una cadencia de revisión (mensual/trimestral) para asegurar coherencia."
    },

    // Párrafo 3 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "El vínculo entre niveles de gestión y resultados se hace explícito cuando se observan las **etapas del proceso de RR. HH.**. En **Provisión (¿quién trabaja?)**, el nivel estratégico delimita perfiles críticos y mercado objetivo; el táctico asegura reclutamiento y selección de calidad; el operativo ejecuta entrevistas y pruebas con criterios consistentes. En **Organización (¿qué harán?)**, la dirección estandariza arquitectura de puestos y política de inducción; las jefaturas operan programas de onboarding y fijan expectativas/objetivos; en el puesto se adoptan rutinas y se reportan avances. En **Retención (¿cómo retener?)**, la dirección define filosofía de compensación; los mandos aplican reglas con equidad y velan por clima y seguridad; las personas cumplen protocolos y participan en retroalimentaciones. En **Desarrollo (¿cómo crecer?)**, el nivel estratégico prioriza brechas de capacidades; los equipos despliegan capacitación y acciones de DO; en el puesto, se practica y evidencia la transferencia del aprendizaje. Finalmente, en **Evaluación (¿qué logran?)**, la dirección establece el sistema de información y criterios; las jefaturas conducen evaluaciones formativas y cierres; el puesto aporta evidencias válidas y oportunas. Esta lectura por niveles favorece decisiones más precisas y prepara el terreno para el subtema **7.5.1 Gestión del desempeño profesional**, donde la expectativa, medición y mejora se convierten en un ciclo continuo. Operativamente, la consigna es clara: cada decisión de personas debe ubicar su ‘nivel dueño’, explicitar su indicador y describir su flujo con entradas, salidas y responsables; solo así la cadena talento → resultados mantiene trazabilidad."
    },

    // Video (referencia de apoyo)
    {
      type: "video",
      title: "Gestión del talento humano — Introducción (aplica al enfoque por niveles)",
      src: "https://www.youtube.com/watch?v=yZ7-ckjDE1I",
      caption: "Recordatorio del sistema de GRH; úsalo como repaso antes de abordar 7.5.1.",
      text: ""
    }
  ],

        /* → Sub‑subtemas */
        subthemes: [
          {
            id: "7.5.1",
            numbering: "7.5.1",
            title: "Gestión del desempeño profesional",
            content: [
    // Párrafo 1 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "La gestión del desempeño profesional se concibe como un proceso integral y continuo orientado a asegurar que las personas alcancen los estándares definidos por la organización y contribuyan a los objetivos corporativos. Esta visión supera la evaluación como evento aislado y la ubica como un ciclo que se inicia desde el mismo momento de la selección: al perfilar con claridad las competencias requeridas, la organización establece las condiciones para que el desempeño posterior sea medible, justo y coherente con la estrategia. En consecuencia, la gestión del desempeño enlaza decisiones sobre identificación de perfiles, inducción, capacitación y entrenamiento, factores motivacionales y elementos culturales que fortalecen el compromiso y la pertenencia. El foco no es únicamente ‘valorar’ a las personas, sino crear contextos donde puedan desplegar su potencial, explicitar expectativas y proveer retroalimentación oportuna que habilite mejoras reales. Los resultados de una gestión del desempeño bien implementada se reflejan en el ámbito corporativo: productividad, calidad y cumplimiento de metas, producto de un balance permanente entre fortalezas y áreas de oportunidad. Desde esta perspectiva, el desempeño no es una fotografía, sino una película que combina metas claras, evidencias válidas, conversaciones de desarrollo y decisiones consistentes sobre formación, reconocimiento y crecimiento. En suma, gestionar el desempeño es articular medios (procesos, instrumentos, datos) para alcanzar fines (resultados organizacionales y bienestar), con un hilo conductor que va del perfil al resultado y que exige trazabilidad en cada paso."
    },

    // Párrafo 2 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Operativamente, conducir un proceso de gestión del desempeño implica atender con rigor ciertas condiciones. Primero, reconocer la presión que puede generar en las personas pasar por entrevistas, cuestionarios y feedback; por ello, es indispensable clarificar propósitos, alcances e intervenciones para evitar interpretaciones equivocadas y resistencias innecesarias. Segundo, comprender que los formatos varían entre organizaciones —e incluso dentro de la misma en distintos momentos—, desde plantillas estandarizadas hasta hojas en blanco orientadas a nuevos desafíos; sea cual sea el formato, la consigna es garantizar calidad, veracidad, oportunidad y confiabilidad de la información recabada. Tercero, usar instrumentos que realmente sirvan como materia prima para la toma de decisiones: evidencias pertinentes que permitan acordar metas, detectar brechas, seleccionar acciones formativas y calibrar recompensas con criterios explícitos. La forma, entonces, debe estar al servicio del fondo: propiciar conversaciones con sentido, sostener ciclos de mejora y documentar lo suficiente para dar seguimiento sin burocratizar. Finalmente, la gestión del desempeño adquiere legitimidad cuando conecta con indicadores del negocio —eficacia, eficiencia, calidad, diferenciación— y demuestra de manera transparente su contribución a los resultados. Allí reside buena parte de su valor: no en la acumulación de formularios, sino en la capacidad de traducir la estrategia en comportamientos observables y en decisiones de desarrollo que elevan la capacidad competitiva de la organización."
    },

    // Párrafo 3 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "La práctica contemporánea de la gestión del desempeño se enfrenta a tendencias que obligan a adaptar criterios, instrumentos y ritmos. La diversidad laboral exige procesos inclusivos capaces de reconocer condiciones particulares y ajustar expectativas y evidencias sin perder equidad; lejos de ser un añadido, esta mirada favorece desempeño sostenible y mejores resultados financieros cuando se integra con coherencia. La readaptación profesional, impulsada por cambios tecnológicos y modalidades de trabajo, demanda oportunidades de aprendizaje que eleven la confianza, abran trayectorias y amplíen la base de conocimientos aplicados en el puesto. La digitalización, por su parte, plantea el reto de dotar a los equipos con herramientas adecuadas y de capturar datos de desempeño que sean útiles —no invasivos— para el aprendizaje continuo. A ello se suma el auge del coaching laboral como mecanismo para empoderar, mejorar la comunicación y convertir el feedback en acciones concretas; y la autoevaluación como fuente complementaria para comprender la contribución cotidiana y promover autonomía responsable. Integrar estas corrientes no diluye la exigencia: refuerza la necesidad de criterios claros, instrumentos válidos y conversaciones de calidad. En última instancia, una gestión del desempeño madura se juzga por su impacto en los resultados organizacionales y por su capacidad de alinear desarrollo humano con estrategia, manteniendo un equilibrio entre exigencia y cuidado que promueva pertenencia, aprendizaje y logro."
    }
  ],
            subthemes: [
              {
                id: "7.5.1.1",
                numbering: "7.5.1.1",
                title: "Introducción",
                content: [
    {
      type: "paragraph",
      text:
        "Introducir la gestión del desempeño profesional implica asumirla como un proceso continuo que comienza antes del primer día de trabajo y acompaña todo el ciclo de la persona en la organización. Su punto de partida está en la selección y definición de perfiles: identificar con precisión las competencias y responsabilidades de cada puesto es condición para evaluar con justicia y orientar el desarrollo a lo largo del tiempo. A partir de ahí, la inducción, la capacitación y el entrenamiento, junto con los factores motivacionales y los rasgos culturales de la empresa, alinean expectativas y fomentan pertenencia; no son anexos, sino medios para que el desempeño deseado sea posible y sostenible. Bajo esta perspectiva, la gestión del desempeño no se reduce a un formulario anual: se traduce en metas claras, evidencias válidas y conversaciones de mejora que articulan objetivos, aprendizajes y resultados. El énfasis, por tanto, está en crear condiciones —recursos, información, reglas de juego— que hagan viable el logro con estándares definidos y verificables. Al desplegarse así, la gestión del desempeño se refleja en el ámbito corporativo: productividad, calidad y cumplimiento se sostienen en un equilibrio deliberado entre fortalezas que conviene potenciar y brechas que es necesario cerrar, con trazabilidad sobre lo que funciona y lo que debe ajustarse. Esta mirada integral prepara el terreno para precisar definiciones, instrumentos y responsabilidades en los apartados siguientes del subtema, manteniendo el hilo conductor entre perfil, proceso y resultado, y reforzando la contribución estratégica del trabajo con personas."
    },
    {
      type: "paragraph",
      text:
        "Como toda introducción rigurosa, conviene enmarcar la gestión del desempeño en su finalidad práctica y en las condiciones que le dan credibilidad. En lo esencial, su propósito es asegurar que las personas alcancen los objetivos con los estándares de la organización, vinculando logros individuales y colectivos con necesidades reales del negocio. Para ello, la función de Recursos Humanos define procesos y provee medios —políticas, datos, rutinas de seguimiento—, pero los resultados se materializan en las áreas operativas; por eso, importa tanto el diseño del sistema como la calidad de su ejecución. Desde el inicio, la evaluación debe entenderse como un medio para aprender y decidir, no como un fin en sí: qué metas se pactan, qué evidencias se recogen y qué acciones se emprenden después (reconocimiento, formación, reconfiguración del trabajo). Además, los instrumentos deben ser confiables, oportunos y útiles para la toma de decisiones, aun reconociendo que los formatos pueden variar entre organizaciones y momentos. Una introducción efectiva deja claro el camino: perfilar y contratar con criterio; orientar y equipar para el logro; medir con sentido; conversar con oportunidad; y traducir hallazgos en mejoras reales. Con este marco, la gestión del desempeño se vuelve un sistema vivo que conecta estrategia, cultura y prácticas cotidianas, y establece una base común para profundizar en definiciones y tipos de evaluación en las siguientes secciones del tema."
    }
  ],
              },
              {
                id: "7.5.1.2",
                numbering: "7.5.1.2",
                title: "Definición",
                content: [
    // Párrafo 1 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Definir la gestión del desempeño profesional exige separarla de la idea reducida de ‘evaluación anual’ y entenderla como un sistema continuo que alinea personas, procesos y resultados. Su finalidad es asegurar el logro de los objetivos con los estándares fijados por la organización; por ello, no comienza en la calificación, sino desde la selección misma, cuando se identifican perfiles y competencias; continúa con la inducción y la capacitación; y se fortalece con factores motivacionales y componentes culturales que consolidan compromiso y pertenencia. Esa trayectoria permite que las metas sean claras, que las evidencias sean válidas y que la retroalimentación conduzca a decisiones coherentes (formación, reconocimiento, movilidad). La definición operativa, entonces, afirma que gestionar el desempeño es articular medios —procesos, instrumentos y datos— para alcanzar fines —productividad, calidad y cumplimiento—, manteniendo trazabilidad entre el perfil de entrada y los resultados de salida. El ‘qué’ y el ‘cómo’ quedan integrados: qué resultados se esperan y cómo se crean condiciones para lograrlos de forma justa y sostenible. Cuando se despliega con rigor, la gestión del desempeño se refleja en el plano corporativo mediante un balance deliberado de fortalezas y áreas de oportunidad que habilita mejoras reales en el día a día. Esta comprensión ofrece un lenguaje común para las secciones siguientes (tipos, instrumentos y responsabilidades), y sienta la base para evaluar la contribución del trabajo con personas a la estrategia organizacional de manera medible y verificable. "
        + "De este modo, la gestión del desempeño trasciende el formulario: se convierte en el ciclo que traduce expectativas en evidencias y decisiones informadas. "
        + ""
    },

    // Acordeón 1 — Plantilla mínima para “definir” el proceso en tu contexto
    {
      type: "accordion",
      header: "Definición operativa del proceso (plantilla aplicable)",
      open: false,
      text:
        "• Propósito: ¿qué objetivos y estándares asegura el proceso de desempeño?  \n" +
        "• Alcance: ¿desde qué momento inicia (selección/inducción) y qué incluye (metas, evidencias, feedback, decisiones)?  \n" +
        "• Entradas: perfiles, descripciones de puesto, metas, competencias y recursos.  \n" +
        "• Salidas: acuerdos de desarrollo, reconocimientos, ajustes de rol y métricas de negocio.  \n" +
        "• Controles: calendarios, calibraciones, validez de instrumentos y trazabilidad de acuerdos."
    },

    // Imagen de apoyo (citada en el material)
    {
      type: "image",
      src: "https://cdn.slidesharecdn.com/ss_thumbnails/objetivosdelreaderecursoshumanos1-10-110503220151-phpapp02-thumbnail.jpg?width=640&height=640&fit=bounds",
      caption: "Gestión del desempeño: de la intención a los resultados medibles.",
      alt: "Esquema visual de objetivos en Recursos Humanos",
      text: ""
    },

    // Párrafo 2 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Operativamente, la definición se valida en las condiciones que garantizan su credibilidad. Primero, reconocer la presión que generan las evaluaciones: entrevistas, cuestionarios y retroalimentaciones pueden vivirse con ansiedad si el proceso no explica con claridad propósitos e intervenciones; por ello es imprescindible enunciar objetivos, reglas de juego y usos de la información. Segundo, aceptar la diversidad de formatos: en una misma organización es normal que convivan plantillas estructuradas y ejercicios abiertos; lo crítico no es la forma, sino que los instrumentos cumplan estándares de calidad, veracidad, oportunidad y confiabilidad, pues serán la materia prima de la toma de decisiones. Tercero, asegurar que las evidencias conecten con decisiones útiles (metas, desarrollo, reconocimiento) y con indicadores del negocio, evitando activismo documental sin impacto. Finalmente, entender que el proceso debe adaptarse al contexto: equipos diversos, roles en readaptación, digitalización del trabajo y prácticas como coaching o autoevaluación exigen que la definición sea explícita y a la vez flexible, sin perder equidad ni trazabilidad. En suma, la ‘definición’ no es un párrafo aislado: es un marco operativo que fija propósito, límites y requisitos de calidad para que el desempeño sea gestionado como un ciclo vivo de acuerdos, evidencias y mejoras, anclado en resultados organizacionales. "
        + "Con estos criterios, el área de RR. HH. y los líderes de línea comparten un mapa común para alinear expectativas, medir con sentido y convertir el aprendizaje en acciones. "
        + ""
    },

    // Acordeón 2 — Buenas prácticas y anti‑patrones (guía rápida)
    {
      type: "accordion",
      header: "Buenas prácticas y anti‑patrones al definir el proceso",
      open: false,
      text:
        "**Buenas prácticas**  \n" +
        "• Calibraciones entre evaluadores y ejemplos ancla por competencia.  \n" +
        "• Cadencia clara (trimestral/semestral) con checkpoints breves y un cierre anual ligero.  \n" +
        "• Feedback bidireccional y acciones inmediatas (micro‑hábitos, coaching, learning on‑the‑job).  \n" +
        "• Vínculo explícito con indicadores de eficacia, eficiencia, calidad y diferenciación.  \n\n" +
        "**Anti‑patrones**  \n" +
        "• Formularios extensos sin decisiones posteriores.  \n" +
        "• Metas vagas o no medibles; evidencias sin criterios.  \n" +
        "• ‘Una sola talla’ para todos los roles; ausencia de adaptación a contextos.  \n" +
        "• Evaluar para castigar, en vez de aprender y mejorar."
    }
  ],
              },
              {
                id: "7.5.1.3",
                numbering: "7.5.1.3",
                title: "Tipos",
                content: [
    // Párrafo 1 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Los tipos de gestión del desempeño profesional pueden organizarse atendiendo a tres preguntas: quién evalúa, qué se evalúa y cómo se evalúa. Esta clasificación parte de una premisa del propio material: el desempeño es un proceso continuo con propósito organizacional y estándares definidos, cuyo impacto debe reflejarse en resultados corporativos; por ello, las modalidades no se reducen a una ‘calificación anual’ y deben enlazarse con decisiones de aprendizaje, reconocimiento y mejora. En el plano de quién evalúa, las variantes típicas abarcan la autoevaluación, el feedback del jefe directo (90°), la combinación jefe‑colaborador (180°), la incorporación de pares y clientes internos (270°) y la retroalimentación integral (360°). El propio documento destaca dos enfoques que hoy cuentan como métodos válidos: el coaching laboral —que promueve conversaciones de desarrollo y feedback útiles— y la autoevaluación —que aporta evidencia sobre autonomía y contribución cotidiana—. En cuanto a qué se evalúa, las opciones se agrupan en metas/objetivos (MBO/OKR), competencias conductuales, resultados clave (KPI), potencial y, en algunos contextos, evidencias de dominio técnico. Finalmente, el cómo responde a instrumentos y formatos: desde plantillas pre‑diseñadas hasta ejercicios abiertos (‘hoja en blanco’) para afrontar nuevos desafíos, con la condición de que los instrumentos acrediten calidad, veracidad, oportunidad y confiabilidad, al ser la materia prima para decidir. Así, la elección del ‘tipo’ no es estética: debe alinear agente evaluador, objeto de evaluación y evidencia con el propósito del sistema y con las necesidades de cada rol, manteniendo trazabilidad entre perfil, metas, evidencias y decisiones posteriores."
    },

    // Acordeón 1 — Tipos por “quién evalúa” (guía práctica)
    {
      type: "accordion",
      header: "Según quién evalúa (90°, 180°, 270°, 360° y autoevaluación)",
      open: false,
      text:
        "• 90° (jefatura → colaborador): útil para roles operativos con estándares claros; requiere check‑ins frecuentes.  \n" +
        "• 180° (jefatura ↔ colaborador): añade la voz del evaluado y acuerdos de desarrollo; evita sesgos unidireccionales.  \n" +
        "• 270° (jefatura + pares/clientes internos): ilumina colaboración inter‑áreas; exige calibraciones.  \n" +
        "• 360° (incluye reportes, pares, jefes y a veces clientes externos): recomendado para liderazgo y funciones de influencia; cuidar confidencialidad y fatiga de encuesta.  \n" +
        "• Autoevaluación: incrementa reflexión y responsabilidad; debe anclarse en criterios y ejemplos ancla para evitar auto‑indulgencia."
    },

    // Párrafo 2 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "La decisión sobre el tipo también depende del canal y del instrumento. En contextos de trabajo híbrido o digital, conviene combinar cadencias breves (check‑ins mensuales) con cierres semestrales o anuales ligeros, registrando evidencias útiles —no invasivas— de productividad, calidad, seguridad o servicio. Entre los instrumentos más usados se encuentran: escalas gráficas, escalas conductuales ancladas (BARS), incidentes críticos, rúbricas por competencia, listas de verificación, portafolios de evidencia y tableros de objetivos (OKR/KPI). En organizaciones intensivas en conocimiento, los ejercicios abiertos orientados a retos (‘hoja en blanco’) permiten capturar logros no estandarizados; en operaciones con alta repetitividad, las plantillas estructuradas facilitan consistencia y comparabilidad. Sea cual sea el formato, el proceso debe explicitar propósitos y alcances para evitar resistencias y malos entendidos, y asegurar que la información sea oportuna y confiable, pues de ella dependen decisiones de desarrollo y reconocimiento. En línea con las tendencias actuales, la digitalización favorece trazabilidad y análisis, mientras que el enfoque de coaching convierte el feedback en acciones concretas con seguimiento; la autoevaluación complementa la visión del jefe y aporta contexto sobre la contribución diaria. La brújula, en todos los casos, es el impacto: un tipo de evaluación solo es pertinente si conduce a acuerdos claros, aprendizaje aplicable y mejora verificable en los resultados del área y de la organización. Definir así los ‘tipos’ facilita adaptar el sistema a cada familia de puestos y madurez del equipo, con criterios de equidad y evidencia."
    },

    // Acordeón 2 — Según qué y cómo se evalúa (instrumentos y evidencias)
    {
      type: "accordion",
      header: "Según qué y cómo se evalúa (instrumentos frecuentes)",
      open: false,
      text:
        "• Por objetivos (MBO/OKR): metas claras con resultados clave verificables; ideal para roles con entregables definidos.  \n" +
        "• Por competencias: comportamientos observables con rúbricas y ejemplos ancla; útil para liderazgo y servicio.  \n" +
        "• Escalas conductuales (BARS) e incidentes críticos: aumentan validez y reducen ambigüedad; requieren capacitación de evaluadores.  \n" +
        "• Portafolio de evidencias/bitácoras: proyectos, entregables y aprendizajes; favorece reflexión y transferencias.  \n" +
        "• Check‑ins + cierre ligero: cadencia mensual/trimestral para ajustar rumbo y un resumen anual para decisiones."
    }
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
          href: "https://www.youtube.com/watch?v=3pzTlYo0Ppw&t=66s ", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
  "EOI — Mentoring: nueva tendencia en la gestión de RR. HH. https://www.eoi.es/blogs/mtelcon/2012/05/08/mentoring-nueva-tendencia-en-la-gestion-de-recursos-humanos/",
  "Manager’s Magazine — Resizing, Rightsizing y Downsizing en las organizaciones https://managersmagazine.com/index.php/2011/10/resizing-rightsizing-y-downsizing-en-las-organizaciones/",
  "Infoviews/Bitam — Balanced Scorecard http://www.infoviews.com.mx/Bitam/ScoreCard/",
  "Manuel Guerrero Cano — Los 10 mandamientos de la mejora continua (Kaizen) https://manuelguerrerocano.com/kaizen-los-10-mandamientos-de-la-mejora-continua/",
  "Focus3 (traducción automática) — Principios de liderazgo: 8 fundamentos que todo líder debe conocer https://translate.google.com/translate?hl=es&sl=en&u=https://focus3.com/leadership-skills-8-principles-every-leader-should-know/&prev=search&pto=aue",
  "Factorial HR — Novedades en RR. HH.: cinco tendencias que se impondrán en 2021 https://factorialhr.es/blog/novedades-rrhh-2021/",
  "EOI — Importancia de la Gestión de Recursos Humanos https://www.eoi.es/blogs/mintecon/2015/05/04/gestion-de-recursos-humanos-importancia-y-objetivos/",
  "UNAM (SUAyED) — Apuntes: Castillo & Narcia (2005) http://fcasua.contad.unam.mx/apuntes/interiores/docs/2005/contaduria/opt/0285.pdf",
  "YouTube — Entrevista a Robert Kaplan, creador del BSC https://www.youtube.com/watch?v=3pzTlYo0Ppw&t=66s",
  "Hoffmann, W. — El gerente devuelve la pelota. Herramientas de Coaching (pp. 11–24) https://books.google.com.mx/books?id=bESNuVRldMwC&printsec=frontcover&hl=es#v=onepage&q&f=false",
  "Alles, M. — ¿Qué entendemos por Coaching? (pp. 165–175) https://www.academia.edu/25639584/Desarrollo_Del_Talento_Humano_Alles_1ed",
  "Alles, M. — Mentoring o programa de tutoría (pp. 197–204) https://www.academia.edu/25639584/Desarrollo_Del_Talento_Humano_Alles_1ed",
  "Snell & Bohlander — Administración de Recursos Humanos (pp. 7–11) https://www.academia.edu/33378179/ADMINISTRACI%C3%93N_de_RECURSOS_HUMANOS",
  "Montoya, C. A. — Balanced Scorecard como herramienta de evaluación (Visión de Futuro) https://www.redalyc.org/articulo.oa?id=357935478003",
  "Sans Zapata, M. — ¿Qué es el coaching? Orígenes, metodologías y principios https://dialnet.unirioja.es/servlet/articulo?codigo=4817930"
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
  "Alles, M. (2016). *Dirección estratégica de Recursos Humanos.* Buenos Aires, Argentina: Granica.",
  "AMEDIRH. (2021). Cómo se transforman el empleo y el liderazgo en otras regiones. *Creando valor RH*, 17.",
  "Chiavenato, I. (2019). *Administración de Recursos Humanos.* Mc Graw Hill.",
  "Dessler, G., & Varela, R. (2017). *Administración de Recursos Humanos. Enfoque Latinoamericano* (6a ed.). Pearson.",
  "Dessler, G., & R. V. (2011). *Administración de Recursos Humanos.* México: Pearson.",
  "Guerrero, M. (2017, 5 de julio). Los 10 mandamientos de la mejora continua (Kaizen). Recuperado de: https://manuelguerrerocano.com/kaizen-los-10-mandamientos-de-la-mejora-continua/",
  "Mora Vanegas, C. (2011, 1 de octubre). Resizing, Rightsizing y Downsizing en las Organizaciones. Recuperado de: https://managersmagazine.com/index.php/2011/10/resizing-rightsizing-y-downsizing-en-las-organizaciones/",
  "Vallejo Cheves, L. (2016). *Gestión del Talento Humano.* Ecuador: ESIC.",
  "Westreicher, G. (2020, 1 de agosto). Gestión. Economipedia. Recuperado de: https://economipedia.com/definiciones/gestion.html"
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
