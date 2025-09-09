/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAIE", // Maestría en Gestión y Administración de Instituciones Educativas
  courseId: "DDPE", // Diseño y Desarrollo de Proyectos Educativos
  id: "modulo1",

  /* ── Datos visibles ─────────────────────────── */
  courseName:
    "Diseño y desarrollo de proyectos educativos",
  title: "Módulo 1. Métodos y herramientas para el diseño del proyecto", // :contentReference[oaicite:0]{index=0}
  semestre: "3.er Semestre", // :contentReference[oaicite:1]{index=1}
  teacher: "Dr. Jesús Agustín Zapata Velázquez", // :contentReference[oaicite:2]{index=2}

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Identificar los principales métodos y herramientas para el diseño de proyectos educativos.", // :contentReference[oaicite:3]{index=3}

  competencies: [
    "Domina el concepto de proyecto educativo.", // :contentReference[oaicite:4]{index=4}
    "Identifica las ventajas de aplicar proyectos de mejora en el ámbito escolar.", // :contentReference[oaicite:5]{index=5}
    "Aplica los principales métodos y herramientas en la formulación de proyectos.", // :contentReference[oaicite:6]{index=6}
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

    /* 1. Nodo / Unidad principal */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Métodos y herramientas para el diseño del proyecto", // :contentReference[oaicite:0]{index=0}
      content: [
        /* Párrafo 1 (~200 palabras) */
        {
          type: "paragraph",
          text: "Diseñar proyectos educativos es una respuesta estratégica ante la complejidad propia de las instituciones escolares, donde convergen múltiples actores, intereses y ritmos de trabajo. La unidad parte de una premisa contundente: sin sistematización del quehacer cotidiano y sin uso óptimo de recursos humanos, materiales y financieros, la escuela pierde foco y desperdicia energía. Trabajar por proyectos traslada la mejora escolar desde la improvisación a la planeación deliberada, articulando metas compartidas, responsabilidades explícitas y evaluación continua de resultados. Esta vía no es coyuntural: forma parte de la gestión educativa desde hace décadas y se ha consolidado en prácticas institucionales de mejora continua. En consecuencia, el proyecto educativo se asume como el andamiaje que traduce la visión del centro en acciones verificables, evitando esfuerzos dispersos y generando trazabilidad de las decisiones. La conclusión es clara: una escuela que opera con proyectos bien formulados y gobernanza definida incrementa su capacidad para producir aprendizajes significativos e impacto social sostenible. :contentReference[oaicite:0]{index=0}",
        },

        /* Párrafo 2 (~200 palabras) */
        {
          type: "paragraph",
          text: "El proyecto educativo se define como un proceso que inicia con la identificación rigurosa de una problemática, continúa con el diagnóstico de la situación y culmina en un plan que precisa objetivos, estrategias, responsables y recursos. Esta visión es consistente con definiciones institucionales: organismos internacionales y autoridades educativas lo describen como un conjunto coordinado de actividades, en un tiempo y lugar determinados, que organiza recursos para alcanzar metas preestablecidas tras un análisis cuidadoso de alternativas. La diferencia entre ‘hacer actividades’ y ‘diseñar un proyecto’ radica en la lógica de decisión: el primero acumula acciones; el segundo justifica y prioriza, delimita alcances y fija criterios de éxito. Por ello, al formular un proyecto es indispensable anticipar requerimientos humanos, tecnológicos y financieros, así como establecer indicadores que permitan monitorear la ejecución y tomar decisiones correctivas sin perder el rumbo. En suma, un buen proyecto es una hipótesis de cambio testable y auditable. :contentReference[oaicite:1]{index=1}",
        },

        /* Párrafo 3 (~200 palabras) */
        {
          type: "paragraph",
          text: "La gobernanza del proyecto es tanto técnica como relacional. El directivo actúa como líder estratégico que convoca, ordena y da seguimiento; pero el éxito es siempre colectivo. Los proyectos de mejora requieren diálogo informado, corresponsabilidad y claridad de roles: quién narra acuerdos, quién integra evidencia, quién gestiona insumos, quién comunica avances a la comunidad. Este reparto de funciones, lejos de burocratizar, democratiza la toma de decisiones y multiplica la inteligencia institucional. La cultura del trabajo por proyectos reduce la lucha de egos y coloca el foco en resultados verificables. Del lado operativo, la agenda del proyecto establece entregables intermedios, ventanas de revisión y protocolos de ajuste; del lado humano, exige habilidades de escucha empática, negociación y manejo de conflictos. La tesis es inequívoca: sin liderazgo pedagógico y sin un colectivo comprometido, el mejor diseño técnico naufraga; con ambos, incluso contextos adversos pueden transformarse. :contentReference[oaicite:2]{index=2}",
        },

        /* Acordeón: tres niveles de enfoque */
        {
          type: "accordion",
          header: "Nivel 1 — Propósito y alcance",
          open: false,
          text: "Problema priorizado • Valor público del proyecto • Metas y criterios de éxito • Horizonte temporal",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Arquitectura del proyecto",
          open: false,
          text: "Diagnóstico • Objetivos y estrategias • Recursos (humanos, materiales, financieros) • Roles y responsabilidades",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ejecución y control",
          open: false,
          text: "Cronograma y entregables • Indicadores de proceso y resultado • Mecanismos de seguimiento • Protocolos de ajuste",
        },

        /* Párrafo 4 (~200 palabras) */
        {
          type: "paragraph",
          text: "El punto de partida operativo es el diagnóstico situacional: una ‘radiografía’ de la organización que identifique con evidencia las brechas entre el estado actual y el deseado. Este diagnóstico integra datos cuantitativos (matrícula, perfiles docentes, infraestructura, servicios) y cualitativos (clima escolar, cultura comunitaria), así como la voz de los distintos actores. Su valor no reside solo en describir, sino en orientar decisiones: qué priorizar, qué es viable y factible con los recursos disponibles y qué requiere gestión interinstitucional. A partir de allí se derivan objetivos específicos, líneas de acción y una matriz de responsabilidades. La planeación estratégica aporta la disciplina para calendarizar, estimar costos y prever riesgos, mientras que la evaluación continua convierte la ejecución en aprendizaje institucional. La consigna es práctica: diagnosticar con honestidad, planear con realismo y ejecutar con disciplina. :contentReference[oaicite:3]{index=3}",
        },

        /* Párrafo 5 (~200 palabras) */
        {
          type: "paragraph",
          text: "Finalmente, esta unidad advierte sobre errores recurrentes: improvisación, roles difusos, ausencia de seguimiento, comunicación deficiente y evaluación poco objetiva. Tales fallas no son inevitables si se asumen rutinas de gestión: reuniones periódicas con actas y evidencias, tableros de control con indicadores, análisis de riesgos desde el diseño y espacios de rendición de cuentas. La mejora continua no niega el error; lo procesa para aprender y reencauzar. Por ello, la unidad invita a entender el proyecto como un sistema vivo: se formula, se ejecuta, se monitorea y se ajusta en función de datos y acuerdos. Introduce así la lógica que exploraremos en los subtemas: criterios de viabilidad y factibilidad, herramientas de análisis estratégico como el FODA y una taxonomía de errores frecuentes que conviene anticipar. El mensaje es categórico: un proyecto sólido combina claridad conceptual, método y liderazgo compartido. :contentReference[oaicite:4]{index=4}",
        },
      ],

      /* → Subtemas de primer nivel (del listado “CONTENIDO TEMÁTICO DE LA UNIDAD”) */
      subthemes: [
        /* ──────────────── 1.1 ───────────────── */
        {
          id: "1.1",
          numbering: "1.1",
          title: "Métodos y herramientas para el diseño del proyecto",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "Trabajar por proyectos traslada la mejora escolar desde la improvisación a la planeación deliberada y colaborativa. El módulo parte de un diagnóstico de realidad: las escuelas son organizaciones complejas, con gran volumen de actividades y múltiples actores; por ello, resulta imprescindible sistematizar el quehacer cotidiano y maximizar el uso de recursos humanos, materiales y financieros :contentReference[oaicite:0]{index=0}. Bajo esa premisa, diseñar un proyecto no es ‘sumar actividades’, sino construir una hipótesis de cambio sustentada en evidencias y criterios de éxito. El texto define el proyecto educativo como un proceso que inicia con la detección del problema, continúa con el diagnóstico y la valoración de alternativas, y culmina en un plan con objetivos, responsables y recursos claramente definidos :contentReference[oaicite:1]{index=1}. Se incorporan definiciones institucionales (OEA; Ministerio de Educación de España) que enfatizan coordenadas esenciales: lugar, tiempo, recursos y metas preestablecidas tras un estudio cuidadoso :contentReference[oaicite:2]{index=2}. Metodológicamente, la unidad recomienda una arquitectura mínima: i) diagnóstico situacional con datos cuantitativos y cualitativos; ii) objetivos y estrategias priorizadas; iii) organización del equipo con roles explícitos; iv) calendario con hitos verificables; y v) sistema de seguimiento y evaluación continua. En síntesis, los métodos y herramientas no son accesorios: constituyen el esqueleto que da coherencia a la acción y convierte la visión institucional en resultados verificables.",
            },

            {
              type: "accordion",
              header: "Métodos fundamentales",
              open: false,
              text: "En el diseño de proyectos educativos, los métodos fundamentales operan como el esqueleto que ordena las decisiones y evita que el plan se convierta en una lista dispersa de actividades. El diagnóstico situacional permite convertir percepciones en evidencia mediante datos cuantitativos y cualitativos; la planeación estratégica por objetivos traduce esa fotografía en metas claras, medibles y calendarizadas; la gestión por resultados alinea recursos, responsables y entregables intermedios con indicadores de proceso y de resultado; y la mejora continua instala ciclos de revisión y ajuste que institucionalizan el aprendizaje organizacional. En conjunto, estos métodos promueven foco, coherencia y trazabilidad: cada acción se justifica en función del problema priorizado y del impacto esperado en los aprendizajes. El valor añadido no es solo técnico, sino cultural: fomenta corresponsabilidad, transparencia y hábitos de rendición de cuentas que sostienen el proyecto más allá de las personas que lo iniciaron.",
            },

            /* Imagen (ilustrativa del subtema en el material) */
            {
              type: "image",
              src: "https://contenidos.mineducacion.gov.co/ntg/men/planes/images/caratula_8.jpg",
              caption:
                "Proyecto educativo: de la visión institucional al plan de acción. (Fuente citada en el módulo)",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "El documento concreta una ‘caja de herramientas’ para el diseño: reuniones de trabajo colegiado (consejo técnico, PEMC), técnicas de levantamiento de información (entrevistas, formularios a estudiantes y familias, revisión del archivo histórico), y protocolos de gobernanza (asignación de roles: relator, responsable de archivo y acuerdos) :contentReference[oaicite:3]{index=3}. En paralelo, sugiere instrumentos de gestión: matriz de responsabilidades, cronogramas, tableros de control e indicadores de proceso/resultado, todo ello para evitar la “fuga de responsabilidad” y fortalecer la trazabilidad de decisiones. La planeación se concibe iterativa: se calendarizan entregables intermedios, ventanas de revisión y mecanismos de ajuste oportuno; cada ciclo de avance debe documentarse en un portafolio de evidencias para la rendición de cuentas y el aprendizaje institucional :contentReference[oaicite:4]{index=4}. La unidad insiste en distinguir entre ‘actividad’ y ‘proyecto’: lo primero es acumulativo; lo segundo, selectivo y justificable. Por eso, antes de ejecutar, se pondera la viabilidad (recursos, tiempos, apoyos) y la factibilidad (alcances reales en el contexto). La gestión por proyectos demanda, además, habilidades socioorganizacionales: escucha empática, negociación y mediación de conflictos, de modo que el liderazgo pedagógico convoque a la corresponsabilidad y evite la captura de decisiones por intereses particulares. En conclusión, el éxito técnico depende del método; la sostenibilidad, de la cultura colaborativa que lo soporta.",
            },

            {
              type: "accordion",
              header: "Instrumentos clave",
              open: false,
              text: "Los instrumentos clave actúan como ‘herramientas de taller’ para que el equipo lleve el proyecto del papel a la práctica con orden y evidencia. Formularios y entrevistas recogen la voz de estudiantes, familias y docentes; la revisión del archivo histórico aporta perspectiva de tendencias y evita repetir intentos fallidos; la matriz de roles clarifica quién coordina, quién ejecuta, quién documenta y quién valida; el cronograma con hitos define ventanas de revisión que previenen desvíos; y el tablero de indicadores convierte el avance en datos comparables para decidir ajustes a tiempo. Al integrarse en un portafolio de evidencias, estos instrumentos garantizan memoria institucional, permiten auditar decisiones y facilitan la comunicación con la comunidad. En síntesis, dotan al proyecto de control de calidad: lo hacen replicable, evaluable y escalable sin perder su sentido pedagógico.",
            },
          ],
          subthemes: [],
        },

        /* ──────────────── 1.2 ───────────────── */
        {
          id: "1.2",
          numbering: "1.2",
          title:
            "Elementos para la justificación del proyecto, viable y factible",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "Justificar un proyecto exige demostrar dos cosas: que el problema es relevante para la comunidad y que la solución propuesta es viable y factible con los recursos disponibles. El módulo propone comenzar escuchando voces diversas —docentes, directivos, estudiantes y familias— mediante estrategias concretas: reuniones de consejo técnico, asambleas con padres, formularios para alumnado, asesorías de especialistas y revisión del archivo histórico escolar :contentReference[oaicite:5]{index=5}. Con esta evidencia se socializa la problemática prioritaria y se asignan roles iniciales (relator, resguardo de archivo, toma de acuerdos), documentando todo en un portafolio de seguimiento :contentReference[oaicite:6]{index=6}. A continuación, se construye el diagnóstico institucional: ‘radiografía’ de la escuela que describe estructura, servicios y procesos, combinando instrumentos de observación como etnografía y diarios de campo para contrastar el estado actual con el deseado :contentReference[oaicite:7]{index=7}. La consigna es ser realista: maquillar datos garantiza el fracaso. Sobre esa base, la comunidad reflexiona con preguntas guía —¿La problemática es resoluble? ¿Tenemos con qué? ¿En cuánto tiempo? ¿Qué resistencias prevemos?— que orientan el encuadre del proyecto y previenen falsas salidas :contentReference[oaicite:8]{index=8}. El caso ilustrativo del mobiliario vs. abastecimiento de agua muestra cómo la participación plural y la priorización informada evitan sesgos corporativos y enfocan recursos donde mayor impacto social se genera :contentReference[oaicite:9]{index=9}.",
            },

            {
              type: "accordion",
              header: "Fuentes de evidencia para la justificación",
              open: false,
              text: "Justificar un proyecto requiere construir una base empírica plural y honesta. Las sesiones de consejo técnico y las asambleas con familias permiten identificar prioridades percibidas y contrastarlas con datos duros; los formularios al alumnado revelan barreras cotidianas que a menudo pasan inadvertidas; la asesoría de especialistas aporta criterios técnicos para dimensionar costos, riesgos y efectos colaterales; el archivo histórico escolar ofrece continuidad y memoria de esfuerzos previos, con sus aciertos y sus límites; y la observación sistemática —incluidos diarios de campo— captura la dinámica real de aula y patio. Esta triangulación evita sesgos corporativos, desarma intuiciones no verificadas y facilita que la comunidad se comprometa con problemas relevantes y solucionables. Al documentarse en un portafolio, la evidencia sustenta la legitimidad del proyecto y habilita evaluaciones posteriores del impacto logrado.",
            },

            /* Imagen (ilustrativa del trabajo colaborativo) */
            {
              type: "image",
              src: "https://www.scielo.cl/img/revistas/sophiaaust/n26//0719-5605-sophiaaus-26-259-gf1.jpg",
              caption:
                "Priorización participativa: del diagnóstico compartido a la acción.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "La justificación, advierte el texto, debe responder con precisión: ¿por qué se hace el proyecto?, ¿qué objetivos persigue?, ¿a quién beneficia?, ¿de quién depende el éxito?, ¿quién dará seguimiento? y ¿en qué plazo se observarán resultados? :contentReference[oaicite:10]{index=10}. Para sustentar la viabilidad y factibilidad se sugiere valorar dimensiones como relevancia escolar, conveniencia, implicaciones pedagógicas, impacto esperado, utilidad y riesgos; además de inventariar capacidades y límites en cuatro rubros: tiempo, recursos humanos, materiales y financieros :contentReference[oaicite:11]{index=11}. El módulo previene errores típicos: seleccionar problemas que exceden la gobernanza de la escuela, confundir urgencia con prioridad, o subestimar costos de oportunidad; de ahí la importancia de un análisis crítico, la priorización colegiada y la planeación estratégica con indicadores de logro. La viabilidad mira hacia dentro —¿podemos hacerlo?—; la factibilidad, hacia fuera —¿es pertinente y sostenible en nuestro contexto?—. Cuando ambas convergen, la justificación deja de ser un trámite retórico y se convierte en contrato social: compromete a la comunidad con metas, tiempos y responsables, legitima el uso de recursos y establece el marco evaluativo que permitirá decidir, con datos, si se escala, se ajusta o se cierra la intervención. En suma, justificar bien es el primer indicador de un proyecto serio.",
            },

            {
              type: "accordion",
              header: "Criterios de viabilidad y factibilidad",
              open: false,
              text: "Evaluar viabilidad y factibilidad es responder, con rigor, dos preguntas: ¿podemos hacerlo? y ¿tiene sentido hacerlo aquí y ahora? La primera exige estimar tiempos reales, disponibilidad y carga del personal, requerimientos materiales y techo financiero, además de mapear riesgos y sus mitigaciones. La segunda demanda analizar pertinencia pedagógica, relevancia para la comunidad, impacto esperado y sostenibilidad en el contexto: normativas, alianzas posibles y apoyos externos. Al cruzar ambos planos, se priorizan acciones con alta probabilidad de éxito y alto valor público, evitando proyectos grandilocuentes que consumen recursos sin transformar la experiencia educativa. Definir indicadores de logro y umbrales de decisión al inicio convierte la justificación en un contrato social verificable: si los datos muestran progreso, se consolida o escala; si no, se ajusta o se cierra con aprendizaje explícito.",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.3",
          numbering: "1.3",
          title: "Método FODA",
          content: [
            {
              type: "paragraph",
              text: "El análisis FODA es una herramienta de planeación estratégica que permite comprender, de manera sistémica, la situación real de una institución educativa para orientar decisiones de mejora con sustento colectivo. Su potencia radica en integrar información cualitativa y cuantitativa sobre el funcionamiento escolar y el entorno, organizándola en cuatro categorías: Fortalezas y Debilidades (factores internos bajo mayor control del centro) y Oportunidades y Amenazas (factores externos de difícil control). Al promover una lectura compartida de la realidad, el FODA alinea a directivos, docentes, administrativos, estudiantes y familias en un mismo mapa de comprensión del contexto, evitando diagnósticos fragmentados o sesgados por una sola voz. Para que el FODA sea útil, no basta llenar una matriz: se requiere explicitar criterios, registrar evidencias (actas, indicadores, experiencias), y convertir los hallazgos en decisiones—qué mantener, qué corregir, qué iniciar y qué detener. Por ello, el FODA no es un trámite administrativo, sino un puente entre el conocimiento situado de la comunidad y la acción estratégica, capaz de priorizar problemas relevantes, vislumbrar recursos disponibles y anticipar riesgos. En suma, soporta la construcción de acuerdos y la trazabilidad de por qué, cómo y con qué se intervendrá, habilitando ciclos de mejora continua donde el aprendizaje organizacional—no la intuición aislada—marca la ruta.",
            },

            {
              type: "accordion",
              header: "Fundamento y alcance del FODA",
              open: false,
              text: "Como técnica diagnóstica, el FODA pide distinguir con nitidez los planos interno y externo: las Fortalezas y Debilidades refieren a capacidades, procesos y resultados controlables por la escuela (perfiles docentes, distribución de funciones, infraestructura, gestión de recursos), mientras que las Oportunidades y Amenazas provienen del entorno (características de las familias, políticas locales, condiciones de la comunidad). Esta diferenciación evita esperar del interior lo que depende del exterior y viceversa. Un buen FODA no compila ocurrencias: contrasta percepciones con evidencias, pondera magnitud y urgencia, y ordena los elementos según su impacto en la misión institucional. Trabajado en colectivo, se convierte en un dispositivo de alineación del lenguaje: todos nombran lo mismo con las mismas palabras y justifican por qué aquello importa. Su alcance no termina en el diagnóstico: de él se desprenden líneas estratégicas, indicadores de seguimiento y riesgos a gestionar, de modo que la matriz deja de ser un artefacto estático y se transforma en el disparador de decisiones informadas y verificables.",
            },

            {
              type: "image",
              src: "https://marketplace.canva.com/EAF7m4YkVEo/1/0/1600w/canva-grafica-matriz-foda-ilustrado-beige-csutR4eIS1Y.jpg",
              alt: "Esquema conceptual de la matriz FODA",
              caption:
                "Esquema FODA: factores internos (F, D) y externos (O, A).",
            },

            {
              type: "paragraph",
              text: "Para elaborar la matriz con rigor, conviene seguir una ruta operativa clara: (1) conformar un equipo representativo (7–15 integrantes) que incluya, además de docentes, a directivos, personal de apoyo, familias y, cuando sea pertinente, estudiantes; (2) socializar avances y resultados de cada sesión a toda la comunidad para promover transparencia y corresponsabilidad; (3) calendarizar entre dos y cuatro reuniones iniciales con objetivos concretos (levantamiento de insumos, ordenamiento, priorización); (4) conducir una primera sesión de trabajo explicando la técnica, roles (incluido un relator) y forma de registro, y realizar lluvia de ideas guiada por evidencias para poblar las cuatro celdas; (5) sostener una sesión específica de análisis de problemas donde se estudien causas, impactos y factibilidad de intervención para elegir el problema estratégico que detonará el plan de mejora; (6) cerrar con una priorización consensuada y criterios de seguimiento. Adicionalmente, es recomendable ordenar la discusión en el siguiente flujo: Fortalezas → Oportunidades → Amenazas → Debilidades; este orden favorece una mirada apreciativa sin negar riesgos, y evita que la conversación derive de inmediato hacia carencias. Al finalizar, la matriz debe conectar con decisiones: qué mantener y escalar (F), qué aprovechar (O), qué prevenir y mitigar (A), y qué corregir o desarrollar (D), traducidas en acciones, responsables, recursos, plazos e indicadores.",
            },

            {
              type: "accordion",
              header: "Guía práctica para construir la matriz",
              open: false,
              text: "Inicie con insumos del diagnóstico escolar (asistencia, resultados, rezago, recursos, gestión) y clasifíquelos por dimensión. En la sesión 1, habilite la lluvia de ideas y registre todas las aportaciones sin filtrar; en la sesión 2, agrupe, depure duplicidades y asigne cada elemento a su cuadrante justificando con evidencias; en la sesión 3, valoren impacto y control, y prioricen con una escala consensuada; en la sesión 4, decidan la problemática estratégica a intervenir y bosquejen líneas de acción. Garantice trazabilidad mediante actas y un portafolio de evidencias; nombre responsables de registro y seguimiento; publique avances para toda la comunidad; use la matriz como base de un tablero de control con indicadores simples. Por último, transforme el FODA en estrategia: cruce F con O para impulsar proyectos viables; combine F con A para diseñar barreras defensivas; conecte D con O para planes de desarrollo; y atienda D con A mediante mitigaciones de riesgo. Así, el FODA deja de ser un formulario y se convierte en un motor de decisiones pedagógicas y organizativas.",
            },
          ],
        },

        {
          id: "1.4",
          numbering: "1.4",
          title: "Errores del proyecto",
          content: [
            {
              type: "paragraph",
              text: "En la gestión de proyectos educativos, los errores más frecuentes emergen antes de la implementación, durante la planeación: diagnósticos poco realistas, metas ambiguas, ausencia de indicadores y subestimación de riesgos. Dado que un proyecto depende de múltiples actores y variables, la aparición de problemas no invalida el esfuerzo; lo decisivo es la capacidad de la organización para detectarlos a tiempo, analizarlos y corregir el rumbo sin perder de vista los objetivos. La improvisación es el enemigo silencioso: cuando la ruta no está explicitada, cada área opera con su propio criterio, se diluyen responsabilidades y se confunde actividad con logro. Para prevenirlo, la planeación debe traducirse en un plan operativo con responsables, plazos, recursos y evidencias esperadas. Otro foco rojo es el liderazgo restrictivo o carismático-dependiente: si el director concentra decisiones y no distribuye funciones, el proyecto se vuelve frágil y la participación decae; cuando, en cambio, se definen roles y se institucionalizan espacios de seguimiento, el proyecto gana resiliencia. Finalmente, la comunicación deficiente—tanto horizontal como vertical—impide alinear expectativas, gestionar conflictos y sostener el compromiso. La clave no es eliminar todos los errores, sino construir rutinas organizacionales que los hagan visibles temprano, habiliten decisiones colegiadas y aseguren el aprendizaje institucional.",
            },

            {
              type: "accordion",
              header: "Errores frecuentes en la planeación",
              open: false,
              text: "Entre los tropiezos típicos destacan: nula o mala planeación (sin objetivos verificables ni ruta), distribución inadecuada de tareas (roles difusos y sobrecargas puntuales), falta de seguimiento (sin hitos ni revisiones periódicas), evaluación poco objetiva (ausencia de instrumentos y criterios) y comunicación deficiente (información encapsulada). También pesa la falta de análisis de riesgos: no anticipar amenazas, barreras y contingencias obliga a reaccionar tarde y con mayores costos. En el fondo, estos errores comparten una raíz: la distancia entre el proyecto ‘en el papel’ y la realidad operativa. La corrección pasa por un diagnóstico franco, acuerdos públicos, responsabilidades claras y tableros simples de seguimiento con indicadores y umbrales de alerta. Así, cada incidencia se vuelve retroalimentación para ajustar el plan, no una excusa para abandonarlo.",
            },

            {
              type: "image",
              src: "https://es.smartsheet.com/sites/default/files/2024-07/IC-Project-Management-Milestone-Chart-Example-27998_WORD_ES.png",
              alt: "Diagrama de seguimiento de proyectos con hitos y responsables",
              caption:
                "Planificación y control: evitar la improvisación con hitos e indicadores.",
            },

            {
              type: "paragraph",
              text: "Corregir a tiempo requiere institucionalizar tres prácticas. Primero, revisión periódica con evidencia: reuniones breves, ritmadas (quincenales o mensuales) centradas en indicadores y productos, no en opiniones generales; si un entregable no existe, se registra como alerta y se acuerda una acción correctiva. Segundo, gestión de riesgos viva: listar amenazas y supuestos críticos desde el diseño, asignar responsables de monitoreo y actualizar estatus en cada reunión; cuando un riesgo se materializa, activar planes de contingencia definidos (p. ej., redistribuir cargas, reprogramar hitos, gestionar apoyos externos). Tercero, comunicación efectiva: difundir avances a toda la comunidad, no solo al equipo núcleo, para sostener legitimidad y participación. Además, el liderazgo debe ser habilitante: distribuir funciones, empoderar a responsables y reconocer aportes; si un rol no está claro, se corrige de inmediato. En resumen, la calidad de la planeación se demuestra durante la ejecución: cuanto antes se vea y se atienda un desvío, mayor será la probabilidad de cumplir objetivos sin sacrificar aprendizajes ni confianza del colectivo.",
            },

            {
              type: "accordion",
              header: "Claves para la corrección temprana",
              open: false,
              text: "Defina una cadencia de seguimiento con un tablero mínimo: objetivo/indicador, evidencia esperada y estatus/acciones. Asegure que cada actividad tenga responsable nominal y fecha; si depende de terceros, identifique el supuesto y un plan alterno. Socialice acuerdos mediante actas y repositorios accesibles; convoque a los actores pertinentes cuando se aborde un bloqueo. Fomente la cultura de aprendizaje: cada error se documenta, se analiza la causa-raíz y se traduce en una regla de oro para futuros proyectos (ninguna actividad sin indicador; toda reunión genera acuerdos con responsables; todo riesgo tiene dueño y umbral de alerta). Con estas rutinas, el proyecto deja de depender del voluntarismo y se apoya en una arquitectura que previene, detecta y corrige oportunidades de mejora.",
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
          href: "https://www.youtube.com/watch?v=Jnd7dln9pB8&t=144s", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "¿Cómo hacer un proyecto educativo? Aspectos generales https://www.youtube.com/watch?v=Jnd7dln9pB8&t=144s", // :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}
            "¿Qué es? y ¿Cómo se hace un análisis FODA? Planeación Estratégica – DOFA – SWOT https://www.youtube.com/watch?v=_6vz0-Hx9cE", // :contentReference[oaicite:2]{index=2} :contentReference[oaicite:3]{index=3}
            "“Programa escolar de mejora continua (PEMC)” http://web.seducoahuila.gob.mx/consejo/archivos/capacitacion/infografia_programa_escolar_de_mejora_continua.pdf", // :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}
            "“Qué es un proyecto educativo” https://www.uaeh.edu.mx/docencia/VI_Lectura/maestria/documentos/LECT35.pdf", // :contentReference[oaicite:6]{index=6} :contentReference[oaicite:7]{index=7}
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
            "Casassus, J. (1999). *La gestión en busca del sujeto.* Santiago de Chile: UNESCO.",
            "García López, T., & Cano Flores, M. (2003). *El FODA: una técnica para el análisis de problemas en el contexto de la planeación en las organizaciones.* Xalapa, Veracruz: Universidad Veracruzana.",
            "Maggio Chena, E. (2019). *Estrategias de dirección.* Xalapa, México: Universidad Veracruzana.",
            "Ponce Talancón, H. (2007). Matriz FODA: alternativa de diagnóstico y determinación de estrategias de intervención en diversas organizaciones. *Enseñanza e Investigación en Psicología*, 12(1), 113–130.",
            "SEP. (2017). *PEMC. Orientaciones.* Ciudad de México: Secretaría de Educación Pública.",
            "SEP. (2018). *Análisis FODA. Diagnóstico de las condiciones internas.* Ciudad de México: Secretaría de Educación Pública.",
            "Thompson, A. A. (1998). *Dirección y administración estratégicas. Conceptos, casos y lecturas.* México: McGraw-Hill.",
            "Universidad Autónoma de Nayarit. (2014). *Proyectos de gestión directiva.* Tepic, México: UAN.",
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
