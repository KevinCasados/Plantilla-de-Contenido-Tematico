/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAP", // Maestría en Gobierno y Asuntos Públicos  :contentReference[oaicite:0]{index=0}
  courseId: "MercPol", // Mercadotecnia política                    :contentReference[oaicite:1]{index=1}
  id: "MercPol-modulo5",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Mercadotecnia política", // :contentReference[oaicite:2]{index=2}
  title: "Módulo 5. Publicidad y propaganda", // :contentReference[oaicite:3]{index=3}
  semestre: "Tercero", // :contentReference[oaicite:4]{index=4}
  teacher: "Mtro. Carlos Alejandro Olvera Jiménez", // :contentReference[oaicite:5]{index=5}

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Proyectar la imagen de un partido o candidatos ante la sociedad, por medio de campañas políticas que empleen comités, publicaciones locales, propaganda utilitaria y, sobre todo, medios masivos de comunicación.", // :contentReference[oaicite:6]{index=6}
  competencies: [
    "Capacidad de comunicación",
    "Capacidad de análisis",
    "Creatividad e innovación",
    "Ética",
    "Dotes de organización",
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

    /* 1. Unidad principal (consolidada Sesión 1 + Sesión 2) */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Estudio de la mercadotecnia política y comunicación social",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad establece las bases conceptuales y operativas de la mercadotecnia política (MP) y su vínculo con la comunicación social. Partimos de la idea de que el marketing, más que una función táctica, es un proceso organizacional que integra investigación, segmentación, diseño de mensajes, selección de canales y evaluación de resultados. Trasladado al ámbito político, ello implica construir y gestionar una propuesta pública (candidato, plataforma, imagen y compromisos) para conectar ética y eficazmente con diversos públicos. La MP no se limita a persuadir: articula diagnóstico del entorno, definición de objetivos, planeación de estrategias y control del desempeño, con énfasis en la rendición de cuentas. Esta unidad ordena dichos componentes y los alinea con la misión institucional del proyecto político: qué se ofrece (producto político), a quién (segmentos prioritarios), con qué propósito (objetivos verificables), por qué medios (canales formales y digitales) y con qué evidencia (datos e indicadores). El foco es instalar una mirada sistemática que distinga entre táctica llamativa y estrategia pertinente, evitando el activismo sin brújula y priorizando la coherencia entre mensaje, valores y necesidades sociales.",
        },
        {
          type: "paragraph",
          text: "Diferenciar necesidades y deseos es clave para decidir qué problemáticas priorizar y cómo comunicar su abordaje. Las necesidades refieren a requerimientos básicos y colectivos (seguridad, salud, pertenencia, reconocimiento), mientras que los deseos suelen ser aspiraciones condicionadas por cultura, contexto y trayectoria personal. En política, ambos coexisten: la ciudadanía puede demandar seguridad inmediata y, a la vez, aspirar a movilidad social o reconocimiento. Trabajar con esta distinción permite formular propuestas que atiendan lo estructural sin desatender lo aspiracional. Un error frecuente consiste en confundir deseos coyunturales con políticas públicas sostenibles; otro, prometer lo que excede las capacidades reales de ejecución. Por ello se analiza cómo ciertos deseos operan como necesidades percibidas de alto impacto simbólico (p. ej., conectividad digital o acceso a servicios con trato digno). Traducir estas categorías a decisiones comunicativas supone modular tono, promesa de valor y evidencias, incrementando la probabilidad de aceptación social sin caer en simplificaciones.",
        },
        {
          type: "paragraph",
          text: "El modelo de la jerarquía de necesidades de Maslow aporta un marco útil para comprender motivaciones del electorado y priorizar mensajes. Al ubicar las propuestas por nivel (fisiológicas y de seguridad; sociales; estima; autorrealización), el equipo puede calibrar la narrativa de campaña: desde garantías básicas (alimento, salud, empleo y paz) hasta metas superiores (meritocracia, creatividad, proyecto de vida), evitando contradicciones entre lo que se promete y lo que el contexto permite. Si bien Maslow fue ampliado con dimensiones cognitivas, estéticas y trascendentes, aquí interesa su potencia didáctica para segmentar argumentos y evidencias. Por ejemplo, programas de seguridad y cuidado de la salud activan niveles inferiores (urgentes y masivos), mientras que propuestas de innovación y cultura pueden resonar en segmentos que priorizan autorrealización. Este marco no sustituye al análisis empírico; lo complementa: ayuda a hipotetizar mensajes y a diseñar instrumentos de medición (encuestas y grupos de enfoque) que verifiquen supuestos e identifiquen ajustes necesarios en posicionamiento.",
        },
        {
          type: "paragraph",
          text: "El desarrollo de proceso estructura el trabajo: (1) análisis de situación, (2) objetivos verificables, (3) identificación de públicos objetivo, (4) creación de mensajes relevantes y consistentes con los valores, (5) selección de canales (medios tradicionales, entornos digitales, territorio), (6) ejecución con roles y cronograma claros, y (7) monitoreo y evaluación con indicadores de proceso y de resultado. Un principio operativo guía esta secuencia: los objetivos no se mueven; las estrategias sí. Así, la evidencia que arroja el seguimiento conduce a microajustes de medios, tiempos y piezas, sin diluir la meta. Además, el proceso integra aprendizaje organizacional: cada ciclo documenta hallazgos (qué funcionó/qué no) para replicar buenas prácticas y evitar errores. Esta lógica de mejora continua desarrolla capacidades institucionales —no solo de campaña— y fortalece la gobernanza del proyecto, pues instala mecanismos de coordinación, trazabilidad y control de calidad comunicacional que trascienden a las personas y a los periodos.",
        },
        {
          type: "paragraph",
          text: "Para operar con foco, la unidad introduce conceptos de mercado político y seguimiento: segmentación (quiénes son y qué necesitan), posicionamiento (qué lugar ocupa la oferta en la mente pública) y opinión pública (percepción colectiva sobre desempeño, viabilidad y confianza). La investigación nutre la toma de decisiones (encuestas, entrevistas, grupos de enfoque, escucha digital) y el monitoreo de medios detecta tendencias, riesgos y oportunidades. Se aborda, asimismo, el ‘producto’ político como conjunto integrado de candidato/partido, plataforma y servicios prometidos y actuales; y se presenta el marketing mix ampliado (7P: Producto, Precio, Plaza/Distribución, Promoción, Personas, Proceso y Evidencia física) para orquestar acciones coherentes. Finalmente, se subraya la dimensión ética y regulatoria de toda intervención comunicacional: la eficacia no justifica medios opacos; la legitimidad del mensaje exige transparencia, respeto a la normatividad y consistencia entre discurso y práctica.",
        },

        /* ── Acordeones: 3 niveles ── */
        {
          type: "accordion",
          header: "Marco conceptual clave",
          open: false,
          text: "La mercadotecnia política es la aplicación integral de métodos de marketing a causas, candidatos y gobiernos, con un propósito doble: comprender al electorado y proponer valor público verificable. Esto implica: definir con precisión qué se entiende por ‘producto’ político (persona, plataforma, promesas y desempeño); reconocer que las ‘necesidades’ orientan la priorización y los ‘deseos’ modulan la narrativa; y usar la jerarquía de Maslow como guía para articular mensajes por niveles motivacionales. A nivel operativo, el concepto de mercado político —con sus nociones de segmentación, posicionamiento y opinión pública— evita campañas ‘para todos’ y fomenta decisiones basadas en evidencia. El resultado buscado no es solo persuadir, sino alinear expectativas con capacidades reales, sostener la confianza y construir relaciones de largo plazo entre ciudadanía y proyecto.",
        },
        {
          type: "accordion",
          header: "Métodos e instrumentos",
          open: false,
          text: "El proceso descansa en una caja de herramientas: diagnóstico (análisis del entorno y de la competencia, incluyendo FODA); investigación de públicos (encuestas, grupos de enfoque, entrevistas, escucha en medios y plataformas); diseño de indicadores (alcance, comprensión, favorabilidad, intención de voto, participación); y tableros de seguimiento para decisiones ágiles. La planificación traduce hallazgos en objetivos SMART y en un plan editorial multicanal (medios, territorio y digital), con roles, calendario e hitos de validación. Durante la ejecución, la gestión de riesgos (temas sensibles, desinformación, crisis) y la evaluación continua aseguran coherencia narrativa y uso eficiente de recursos. El cierre de ciclo genera aprendizajes y estándares reutilizables (guías de estilo, bibliotecas de piezas, protocolos de respuesta), profesionalizando la función comunicativa.",
        },
        {
          type: "accordion",
          header: "Ética y regulación",
          open: false,
          text: "La eficacia comunicativa carece de valor si vulnera la legalidad o erosiona la confianza pública. Toda estrategia debe respetar la normativa electoral vigente y principios de transparencia, veracidad y trato digno a las personas. Ello exige atribución clara de fuentes, cuidado de datos personales, rechazo a prácticas de manipulación y compromiso con la corrección cuando se detecten errores. En términos operativos, la ética se habilita con protocolos: validación de mensajes sensibles, listas de verificación de cumplimiento, monitoreo de sesgos y trazabilidad de decisiones. La rendición de cuentas —informes periódicos, evidencias y explicaciones accesibles— fortalece legitimidad y reduce costos reputacionales. En suma: comunicar bien es comunicar con cuidado, y el cuidado se certifica con reglas, controles y cultura organizacional alineada.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "Definición",
          content: [
            {
              type: "paragraph",
              text: "La mercadotecnia, en su acepción operativa, es un proceso social y organizacional orientado a detectar necesidades y deseos, diseñar una oferta de valor y comunicarla mediante estrategias que integran investigación, segmentación, posicionamiento, mezcla de marketing y evaluación de resultados. Trasladada al ámbito político, esta lógica no se reduce a ‘publicidad electoral’: implica comprender a públicos heterogéneos, construir propuestas verificables y gestionar la reputación de candidatos y partidos con criterios de eficacia y ética. La noción de ‘satisfacer necesidades rentablemente’ cambia aquí su métrica: el ‘beneficio’ es capital político legítimo, confianza pública y resultados de política acordes con el interés general. A su vez, el proceso exige trazabilidad: de la hipótesis sobre el electorado a la evidencia que confirma o corrige decisiones.",
            },
            {
              type: "paragraph",
              text: "En la literatura de referencia se destacan definiciones que iluminan el qué y el para qué del marketing. Desde la síntesis clásica —“satisfacer necesidades de manera rentable”— hasta la concepción de proceso social de intercambio de valor, todo converge en la idea de organizar conocimiento sobre el entorno y convertirlo en decisiones. En política, ese ‘valor’ no es un producto físico, sino una promesa pública con factibilidad: plataforma, trayectoria, liderazgo, equipo y planes de gobierno. La comunicación, por tanto, no es un adorno persuasivo, sino el dispositivo que dota de sentido y evidencia a la oferta, articulando historia personal, causas y propuestas con expectativas de los públicos.",
            },
            {
              type: "paragraph",
              text: "Definir bien ‘mercadotecnia política’ evita dos reducciones dañinas: la tecnocrática (creer que todo es optimización de anuncios) y la cínica (suponer que todo es manipulación). La primera ignora motivaciones, cultura y contexto; la segunda renuncia al principio de veracidad y al marco legal. Una definición equilibrada asume investigación sistemática, diseño de propuestas pertinentes y comunicación responsable. De allí se derivan tareas concretas: formular objetivos verificables, elegir indicadores de proceso y resultado, y establecer ciclos de seguimiento que distingan entre fallas de estrategia y fallas de ejecución.",
            },
            {
              type: "accordion",
              header: "Definiciones operativas clave",
              open: false,
              text: "Mercadotecnia: proceso social/organizacional para crear, comunicar y entregar valor, y gestionar relaciones de beneficio mutuo. Mercadotecnia política: aplicación integral de ese proceso a causas, partidos y candidatos, articulando diagnóstico, propuesta y comunicación con apego ético y normativo. Comunicación social: sistema de producción y circulación de mensajes (institucionales y de campaña) que informan, posicionan y movilizan públicos en torno a un proyecto público.",
            },
            {
              type: "paragraph",
              text: "Un rasgo distintivo en política es la naturaleza simbólica del ‘producto’: imagen, credibilidad y consistencia programática. La construcción de esa imagen no es cosmética; se apoya en biografía, desempeño y coherencia entre discurso y práctica. La reputación opera como un activo acumulado que condiciona la recepción de mensajes futuros. Por ello, una definición robusta de mercadotecnia política incorpora la gestión de la confianza como variable estratégica y no delega la ética a un apéndice: transparencia, respeto a la ciudadanía, y cumplimiento de la norma electoral son requisitos de diseño, no ‘opcionales’.",
            },
            {
              type: "image",
              src: "https://d1ih8jugeo2m5m.cloudfront.net/2025/06/propuesta_de_valor_canvas.webp",
              caption:
                "De los laboratorios de aprendizaje a la TCC: integración de teoría y método.",
              alt: "Esquema conceptual sobre antecedentes de la TCC",
              text: "",
            },
            {
              type: "paragraph",
              text: "Otra consecuencia práctica de una buena definición es la gobernanza del proceso: roles claros (investigación, estrategia, contenidos, medios, territorio, analítica), flujos de validación y bitácoras de decisiones. Cuando la definición se limita a ‘hacer ruido’, el esfuerzo se dispersa; cuando adopta el enfoque de proceso, se priorizan públicos, mensajes y canales con disciplina, y se instauran rituales de evaluación que permiten aprender y corregir a tiempo. Esta comprensión ahorra recursos, reduce improvisación y eleva la probabilidad de impacto.",
            },
            {
              type: "accordion",
              header: "Implicaciones para la práctica",
              open: false,
              text: "1) Toda táctica deriva de una hipótesis validable sobre públicos y problemas. 2) Los mensajes deben ser veraces, pertinentes y consistentes con capacidades de ejecución. 3) La evaluación es parte constitutiva del proceso: se mide para decidir, no para archivar. 4) La ética y la legalidad no ‘limitan’ la estrategia; la habilitan, al sostener la legitimidad del proyecto.",
            },
          ],
          subthemes: [
            {
              id: "1.1.1",
              numbering: "1.1.1",
              title: "¿Qué es el marketing político?",
              content: [
                {
                  type: "paragraph",
                  text: "El marketing político es la aplicación articulada de investigación, segmentación, diseño de mensajes, selección de canales, movilización y seguimiento para influir de forma ética y efectiva en la opinión pública a favor de una causa, candidato o partido. Sus fines inmediatos son construir imagen positiva, generar apoyo y movilizar voto; su fin superior es alinear expectativas ciudadanas con propuestas viables y sujeto a rendición de cuentas.",
                },
                {
                  type: "paragraph",
                  text: "Operativamente comprende: 1) investigación (encuestas, grupos de enfoque, escucha digital), 2) arquitectura de mensajes (promesa de valor, evidencias, tono), 3) ecosistema de medios (prensa, radio/TV, redes, territorio), 4) relaciones públicas y gestión de eventos, y 5) analítica para seguimiento de percepción y ajuste de estrategia. La coordinación de estas piezas define la calidad de la campaña.",
                },
                {
                  type: "paragraph",
                  text: "Su medida de éxito no se reduce al resultado electoral; incluye indicadores de comprensión del mensaje, favorabilidad, confianza y congruencia percibida. El enfoque responsable rechaza la manipulación, protege datos personales y se apega a la norma electoral vigente. Así, el marketing político deviene una disciplina profesional que combina ciencia de datos, comunicación y comprensión del comportamiento político.",
                },
                {
                  type: "accordion",
                  header: "Componentes del ciclo",
                  open: false,
                  text: "Diagnóstico → Objetivos → Públicos → Mensajes → Canales → Implementación → Monitoreo/Evaluación → Aprendizaje organizacional. Cada transición exige criterios y evidencias para mantener coherencia estratégica.",
                },
                {
                  type: "accordion",
                  header: "Errores frecuentes",
                  open: false,
                  text: "Confundir notoriedad con persuasión; prometer más allá de la capacidad de ejecución; ignorar normas electorales; operar sin indicadores; descuidar la relación entre mensaje y reputación acumulada.",
                },
              ],
            },
          ],
        },

        {
          id: "1.2",
          numbering: "1.2",
          title: "Necesidades y deseos",
          content: [
            {
              type: "paragraph",
              text: "Distinguir necesidades de deseos permite jerarquizar problemas públicos y modular la narrativa de campaña. Las necesidades aluden a condiciones esenciales para el bienestar (seguridad, salud, pertenencia, reconocimiento), mientras que los deseos expresan aspiraciones condicionadas por cultura, trayectorias y contexto. En la arena política coexisten y se influyen mutuamente: demandas urgentes y aspiraciones de movilidad y reconocimiento. Al no separarlos analíticamente, se corre el riesgo de prometer soluciones atractivas pero inviables o desatender expectativas legítimas que construyen confianza.",
            },
            {
              type: "paragraph",
              text: "La práctica muestra que algunos deseos operan como ‘necesidades percibidas’ de alto impacto simbólico —conectividad digital, trato digno en servicios—, por lo que la agenda comunicativa debe reconocer esa dimensión subjetiva sin abandonar criterios de factibilidad. Por otra parte, hay expectativas que desbordan capacidades institucionales; una estrategia honesta informa límites, prioriza y explica secuenciación, evitando ofertas maximalistas que devienen frustración. La comunicación que integra evidencia y empatía tiende puentes entre urgencia y aspiración.",
            },
            {
              type: "paragraph",
              text: "El mapeo de necesidades y deseos demanda métodos mixtos: encuestas para magnitud y distribución; grupos de enfoque para matices y significados; escucha digital para tendencias y emociones; análisis socioterritorial para desigualdades. La lectura integral identifica clústeres de problemas (p. ej., seguridad–empleo–movilidad) y clústeres aspiracionales (p. ej., reconocimiento–proyecto de vida–cuidado del entorno), sobre los que se construyen paquetes de propuesta y mensajes específicos por segmento.",
            },
            {
              type: "accordion",
              header: "Criterios de priorización",
              open: false,
              text: "1) Gravedad e impacto poblacional; 2) Factibilidad y tiempo de implementación; 3) Equidad (quiénes se benefician); 4) Simbolismo y confianza; 5) Sinergias intersectoriales. Esta matriz evita que la agenda quede capturada por el ruido mediático o por impulsos de corto plazo.",
            },
            {
              type: "image",
              src: "https://website-assets.studocu.com/img/document_thumbnails/ae96b15a1fddd4a7c14492cb9ce48e28/thumb_1200_927.png",
              caption:
                "De los laboratorios de aprendizaje a la TCC: integración de teoría y método.",
              alt: "Esquema conceptual sobre antecedentes de la TCC",
              text: "",
            },
            {
              type: "paragraph",
              text: "En términos de mensaje, la distinción se traduce en dos capas: capa de garantía (compromisos concretos para necesidades prioritarias, con indicadores y plazos) y capa de aspiración (relato de futuro plausible que articula identidad, orgullo y movilidad social). La primera protege credibilidad; la segunda moviliza sentido y adhesión. La combinación ordena la promesa de valor: ‘qué cambia ahora’ y ‘hacia dónde vamos’.",
            },
            {
              type: "paragraph",
              text: "Finalmente, reconocer la dinámica temporal de necesidades y deseos —cambian por ciclo de vida, coyuntura y aprendizaje colectivo— obliga a establecer dispositivos de monitoreo que actualicen hipótesis estratégicas. Así se evitan inercias programáticas: el proyecto escucha, aprende y ajusta. Esta actitud no es concesión; es estrategia para sostener pertinencia y confianza en contextos complejos.",
            },
            {
              type: "accordion",
              header: "De la escucha a la propuesta",
              open: false,
              text: "Escucha (datos) → Interpretación (insights) → Priorización (matriz) → Propuesta (paquetes por segmento) → Mensaje (tono y evidencia) → Evaluación (recepción y efectos). Este flujo asegura coherencia y trazabilidad entre diagnóstico y comunicación.",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.3",
          numbering: "1.3",
          title: "Modelo de Maslow",
          content: [
            {
              type: "paragraph",
              text: "La jerarquía de necesidades de Maslow ofrece un marco pedagógico para comprender motivaciones del electorado y ordenar mensajes por niveles: fisiológicas y de seguridad; sociales; estima; autorrealización. Su utilidad práctica reside en calibrar prioridades y evidencias: cuando predominan carencias básicas, promesas de alto ideal corren riesgo de irrelevancia; cuando lo básico está razonablemente cubierto, crecen la demanda de reconocimiento, participación y sentido de proyecto. El enfoque evita contradicciones entre lo que se ofrece y lo que la ciudadanía percibe como urgente.",
            },
            {
              type: "paragraph",
              text: "El modelo ha sido extendido para incluir dimensiones cognitivas, estéticas y trascendentes. En clave política, ello permite reconocer públicos que valoran conocimiento, armonía pública o sentido de trascendencia cívica. Estos niveles no sustituyen a los inferiores, pero enriquecen la arquitectura del mensaje: un plan de seguridad puede coexistir con una agenda de cultura e innovación si se segmenta y secuencia con honestidad. El error común es construir una narrativa única para todos los niveles, diluyendo impacto.",
            },
            {
              type: "paragraph",
              text: "Aplicar Maslow no implica etiquetar personas, sino diseñar propuestas y relatos multipiso: asegurar lo básico (servicios, seguridad, ingreso) mientras se tienden escalones hacia pertenencia, reconocimiento y proyecto de vida. Operativamente, se traduce en matrices que cruzan niveles de necesidad con segmentos: qué promesa, con qué evidencia, por qué canal, en qué momento. La consistencia entre nivel de necesidad y recursos disponibles blinda la credibilidad del proyecto.",
            },
            {
              type: "accordion",
              header: "Maslow aplicado a mensaje",
              open: false,
              text: "Fisiología/Seguridad: garantías y protocolos; Sociales: comunidad y colaboración; Estima: reconocimiento y mérito; Autorrealización: educación, creatividad, futuro; Extensiones: conocimiento, estética, sentido cívico. Cada nivel demanda tono, vocero y prueba distintos.",
            },
            {
              type: "image",
              src: "https://www.hubspot.com/hubfs/media/03ejemplosdenecesidadesdeMaslowretail.jpeg",
              caption:
                "De los laboratorios de aprendizaje a la TCC: integración de teoría y método.",
              alt: "Esquema conceptual sobre antecedentes de la TCC",
              text: "",
            },
            {
              type: "paragraph",
              text: "La evaluación también se alinea al modelo: indicadores de corto plazo para niveles básicos (percepción de seguridad, tiempos de espera en salud), y métricas de mediano plazo para niveles superiores (participación cultural, emprendimiento, educación continua). Así se evita medir todo con la misma vara y se reconoce que distintos cambios maduran en ritmos distintos.",
            },
            {
              type: "paragraph",
              text: "Por último, el enfoque Maslow debe dialogar con contexto y cultura: en entornos donde la religiosidad o la identidad comunitaria son centrales, la capa ‘trascendente’ puede ser motor de acción; en ciudades con alta precariedad, lo básico ordena el debate. El liderazgo que entiende estas capas construye campañas más justas y eficaces, porque respeta las prioridades de la gente y ofrece caminos creíbles hacia un bienestar integral.",
            },
            {
              type: "accordion",
              header: "Riesgos y salvaguardas",
              open: false,
              text: "Riesgos: simplificar motivaciones, prometer sin capacidad, ignorar cultura local. Salvaguardas: validar hipótesis con datos, secuenciar metas, y vincular cada promesa a programas y presupuestos verificables.",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.4",
          numbering: "1.4",
          title: "Desarrollo de proceso",
          content: [
            {
              type: "paragraph",
              text: "El desarrollo de proceso en mercadotecnia política es la columna vertebral que articula planeación, ejecución y evaluación para alcanzar objetivos públicos con disciplina y evidencia. Inicia con un análisis situacional riguroso del contexto político, social y económico —incluyendo tendencias, medios, redes y clima de opinión— para traducir señales del entorno en hipótesis estratégicas. Ese diagnóstico no es un trámite: define los problemas que realmente importan a segmentos específicos del electorado y evita que la agenda sea capturada por la coyuntura o el ruido mediático. Desde allí se construye una definición de objetivos claros y medibles que orientan decisiones de priorización y asignación de recursos, dejando por sentado un principio rector: las estrategias y tácticas pueden ser flexibles; el objetivo no.",
            },
            {
              type: "paragraph",
              text: "Una vez fijados los objetivos, se delimita el público objetivo mediante segmentación socio-demográfica, psicográfica y conductual, y se realiza la arquitectura de mensajes: promesa de valor, evidencias verificables y tono coherente con la identidad de la candidatura. En paralelo, se seleccionan canales y formatos —medios, territorio, digital, eventos— en función de hábitos de consumo informativo y del lugar que ocupa la marca política en la mente de la ciudadanía. El plan resultante integra cronograma, roles, presupuestos, riesgos y protocolos de respuesta, con indicadores de proceso y de resultado que servirán para monitorear trayectoria y corregir desvíos a tiempo.",
            },
            {
              type: "paragraph",
              text: "La implementación convierte el plan en acciones coordinadas: producción de contenidos, relaciones con medios, movilización territorial, escucha digital y coordinación de voluntariado. Cada frente opera con tableros de control sencillos que registran alcance, interacción, sentimiento y señales de intención. La coordinación inter-áreas es vital para evitar mensajes contradictorios o esfuerzos superpuestos; por ello se instauran rituales de seguimiento (reuniones de situación, informes de campo, bitácoras de decisiones) que aseguran trazabilidad entre diagnóstico, mensaje y ejecución. La consistencia en el tiempo es una ventaja estratégica: crea familiaridad, refuerza posicionamiento y construye reputación.",
            },
            {
              type: "accordion",
              header: "Plantilla mínima de proceso",
              open: false,
              text: "1) Análisis de situación (datos, medios, redes, territorio). 2) Objetivos SMART y métricas. 3) Segmentos y mapas de públicos. 4) Mensajes y evidencias. 5) Canales y tácticas priorizadas. 6) Cronograma, roles y presupuesto. 7) Protocolos de monitoreo y corrección. 8) Cierre y lecciones aprendidas. Este esqueleto evita improvisación, facilita auditoría y ancla el aprendizaje organizacional.",
            },
            {
              type: "paragraph",
              text: "El monitoreo continuo del entorno y de la ejecución no es un apéndice, es parte constitutiva del proceso. Investigación de opinión, análisis de tendencias, escucha de medios y revisión de la competencia nutren tableros para tomar decisiones informadas, distinguir entre fallas de diseño y fallas de implementación, e introducir correcciones sin perder foco. Evaluar no es buscar culpables; es explicar variaciones respecto de lo esperado y reencuadrar la hipótesis estratégica. Esta lógica de mejora continua profesionaliza campañas y reduce el costo de los errores.",
            },
            {
              type: "paragraph",
              text: "La ética y la legalidad constituyen restricciones de diseño, no obstáculos: encuadran la creatividad, preservan legitimidad y blindan el proyecto ante crisis reputacionales. Además, el cumplimiento regulatorio (tiempos, financiamiento, acceso a medios, tratamiento de datos personales) debe estar codificado en el proceso para evitar contingencias sancionables. Un proceso sólido también contempla gestión de riesgos: escenarios, señales tempranas, umbrales de intervención y vocerías preparadas para responder con oportunidad y evidencia.",
            },
            {
              type: "accordion",
              header: "Errores frecuentes y cómo evitarlos",
              open: false,
              text: "• Confundir notoriedad con persuasión: medir comprensión y cambio de disposición, no solo alcance. • Prometer más de lo que puede ejecutarse: alinear mensaje con capacidades. • Operar sin indicadores accionables: definir métricas que disparen decisiones. • Ignorar gobernanza: roles, rituales y bitácoras evitan la ‘campaña orquesta’ descoordinada.",
            },
            {
              type: "paragraph",
              text: "Cerrar el ciclo implica evaluación final y documentación de lecciones: qué funcionó, por qué, en qué condiciones, con qué costos y qué replicar. Esas conclusiones retroalimentan futuras estrategias y fortalecen la memoria institucional. En suma, el desarrollo de proceso transforma intuiciones en decisiones replicables: del diagnóstico a la implementación, del monitoreo a la mejora, y de la evaluación al aprendizaje, manteniendo inalterable el objetivo público que justifica el esfuerzo.",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.5",
          numbering: "1.5",
          title: "Mercado y seguimiento",
          content: [
            {
              type: "paragraph",
              text: "El ‘mercado’ político es el conjunto de ciudadanos como destinatarios de mensajes, propuestas e identidades, donde compiten partidos y candidaturas por preferencia y voto. Tres nociones ordenan su lectura: segmentación (dividir a la población en grupos con rasgos y necesidades comunes), posicionamiento (lugar que ocupa una opción en la mente del electorado) y opinión pública (percepción agregada sobre actores, desempeño y promesas). Entender este espacio competitivo exige reemplazar intuición por evidencia y aceptar que el ‘producto’ político es, ante todo, una promesa pública evaluada por su plausibilidad y coherencia.",
            },
            {
              type: "paragraph",
              text: "El seguimiento del mercado es un sistema de monitoreo permanente que observa tendencias, señales de riesgo y oportunidades. Integra investigación de opinión (encuestas, grupos de enfoque, entrevistas), análisis de tendencias (macro y micro), escucha y análisis de medios, revisión de la competencia y evaluación de campañas en curso. El propósito no es acumular datos, sino tomar decisiones: redefinir prioridades, ajustar mensajes, cambiar mezcla de canales, fortalecer vocerías y asignar mejor los recursos para maximizar impacto con integridad.",
            },
            {
              type: "paragraph",
              text: "El componente reputacional es transversal: la trayectoria y el desempeño condicionan la recepción del mensaje. Un seguimiento serio distingue ruido coyuntural de cambios estructurales y evita reaccionar a ‘picos’ efímeros que desalinean la estrategia. La clave es construir series de tiempo y umbrales de acción: qué variación de favorabilidad dispara una intervención, qué señal de saturación indica cambiar creatividades, qué combinación de métricas (alcance + comprensión + intención) valida que un mensaje está funcionando donde importa.",
            },
            {
              type: "accordion",
              header: "Fuentes y cautelas del seguimiento",
              open: false,
              text: "Usar fuentes internas (datos de campo, resultados históricos, bases de simpatizantes) y externas (encuestas públicas, medios, redes, datos gubernamentales). Criterios: credibilidad, objetividad, actualidad. Combinar métodos para evitar sesgos y documentar toda decisión relevante en bitácoras.",
            },
            {
              type: "paragraph",
              text: "La lectura competitiva debe ser ética: estudiar movimientos de adversarios para aprender de sus fortalezas, no para degradar la calidad del debate con tácticas desinformativas. Monitorear medios implica separar cobertura informativa de contenidos tendenciosos, identificar narrativas que prenden y desconstruir ataques con evidencia. El equipo de seguimiento trabaja con matrices de riesgo, protocolos de respuesta y una ‘biblioteca’ de pruebas (datos, logros, testimonios) listas para activar.",
            },
            {
              type: "paragraph",
              text: "La evaluación de campañas —propias y ajenas— alimenta bucles de mejora. Aprender de aciertos y desaciertos exige una cultura que premie la verdad de los datos por encima de la comodidad narrativa. Un tablero bien diseñado conecta indicadores con decisiones: si un segmento no comprende la propuesta, se reformula; si recuerda el mensaje, pero no confía, se incorporan evidencias; si el canal agota su rendimiento, se rota la inversión. La disciplina del seguimiento salva campañas del autoengaño.",
            },
            {
              type: "accordion",
              header: "Del seguimiento a la acción",
              open: false,
              text: "Tracking → Insight → Decisión → Implementación → Revisión. Para cada insight, definir qué cambia (mensaje/canal/segmento), quién ejecuta, con qué recursos y en qué plazo. Sin esta cadena, el seguimiento se vuelve un archivo; con ella, es el motor de la estrategia.",
            },
            {
              type: "paragraph",
              text: "En síntesis, ‘mercado y seguimiento’ profesionalizan la toma de decisiones: segmentar para priorizar, posicionar para ser elegible, escuchar para ajustar y evaluar para aprender. La consecuencia práctica es una estrategia más justa y eficaz: respeta necesidades, evita promesas inviables y rinde cuentas con datos.",
            },
          ],
          subthemes: [
            {
              id: "1.5.1",
              numbering: "1.5.1",
              title: "Análisis de mercado",
              content: [
                {
                  type: "paragraph",
                  text: "El análisis de mercado en política es el proceso sistemático de recolectar, analizar e interpretar información sobre contexto, competencia y electorado para decidir con fundamento. Sus objetivos: identificar oportunidades, conocer a los adversarios, entender motivaciones ciudadanas y valorar factores externos (economía, coyuntura internacional, tecnología). La herramienta matriz es el FODA: fortalezas y debilidades (factores internos) y oportunidades y amenazas (factores externos), distinguiendo con rigor qué depende de la organización y qué proviene del entorno.",
                },
                {
                  type: "paragraph",
                  text: "La explotación del FODA exige evitar confusiones habituales: una ‘oportunidad’ no es una táctica ni un objetivo; es una condición positiva no generada por nosotros que puede aprovecharse. De igual modo, una ‘amenaza’ no es una excusa: obliga a diseñar mitigaciones. Este análisis se complementa con inteligencia competitiva ética y con herramientas de datos (desde hojas de cálculo hasta suites estadísticas o de visualización) que permiten validar hipótesis, segmentar y proyectar escenarios con prudencia.",
                },
                {
                  type: "accordion",
                  header: "Entregables mínimos del análisis",
                  open: false,
                  text: "Mapa de actores y competencia; FODA priorizado; clústeres de problemas y aspiraciones por segmento; hipótesis de mensaje/canal; riesgos y supuestos críticos. Todo con fuentes y fecha de corte para evitar obsolescencia.",
                },
                {
                  type: "paragraph",
                  text: "El mayor valor del análisis no es describir el mundo, sino proponer decisiones: dónde concentrar la conversación, qué propuestas activar primero, qué segmentos requieren educación cívica previa a la persuasión y qué canales son costo-efectivos para cada público. Un buen análisis deja huellas: criterios, fuentes y umbrales que más tarde explican por qué se actuó como se actuó, constituyendo aprendizaje verificable.",
                },
                {
                  type: "paragraph",
                  text: "Bien usado, el análisis protege de inercias y voluntarismos: obliga a re-examinar creencias, contrasta expectativas con datos y diferencia anécdota de evidencia. La disciplina de actualizarlo y versionarlo en campaña marca la frontera entre improvisación y profesionalismo.",
                },
              ],
            },
            {
              id: "1.5.2",
              numbering: "1.5.2",
              title: "Conducta del consumidor",
              content: [
                {
                  type: "paragraph",
                  text: "La conducta del ‘consumidor político’ estudia cómo y por qué las personas deciden apoyar, participar o votar. Incluye el análisis de necesidades y deseos, valores y creencias, percepciones, influencias sociales, experiencias previas y disponibilidad de información. Sus salidas operativas: mensajes más pertinentes, tácticas diferenciadas por segmento y relaciones de mayor calidad con ciudadanía y simpatizantes. No se trata de manipular, sino de comprender para servir mejor, con veracidad y respeto.",
                },
                {
                  type: "paragraph",
                  text: "Tipologías de electores —según participación, información, fidelidad o sensibilidad a temas— ayudan a priorizar esfuerzos, sabiendo que no son etiquetas fijas: la gente cambia de categoría por coyuntura, ciclo de vida o aprendizaje. Medir de forma continua permite anticipar movimientos, prevenir apatía y elevar la eficacia de la comunicación. En síntesis, la conducta del consumidor político ofrece un mapa dinámico para orientar decisiones con foco y empatía.",
                },
                {
                  type: "accordion",
                  header: "Aplicación práctica por etapas",
                  open: false,
                  text: "Diagnóstico: comprender motivaciones. Diseño: alinear promesa y evidencias. Implementación: elegir vocerías y canales adecuados. Evaluación: medir comprensión, confianza e intención, no solo alcance.",
                },
                {
                  type: "paragraph",
                  text: "El mayor riesgo es tratar a todos por igual. Reconocer diferencias legítimas —territoriales, culturales, generacionales— dignifica el diálogo público y mejora resultados: el mismo argumento puede movilizar a unos y alienar a otros. El estudio de la conducta evita esos costos, construyendo campañas más justas y efectivas.",
                },
                {
                  type: "paragraph",
                  text: "Cuando la conducta observada se integra en tableros de seguimiento, la campaña aprende: refuerza lo que funciona, corrige lo que falla y descontinúa lo inocuo. Esa humildad basada en evidencia es, paradójicamente, una de las mayores fortalezas de liderazgo.",
                },
              ],
            },
            {
              id: "1.5.3",
              numbering: "1.5.3",
              title: "Investigación de mercado",
              content: [
                {
                  type: "paragraph",
                  text: "La investigación de mercado político es el proceso sistemático de recolectar, analizar e interpretar datos sobre electores, preferencias y comportamientos para entender el entorno, detectar tendencias y tomar decisiones informadas. Combina métodos cuantitativos (encuestas, sondeos) y cualitativos (grupos de enfoque, entrevistas, etnografías rápidas) con analítica de medios y redes. Su meta no es ‘tener razón’, sino reducir incertidumbre y aumentar la calidad de las decisiones estratégicas.",
                },
                {
                  type: "paragraph",
                  text: "Las fuentes se organizan en internas (históricos de campaña, bases de simpatizantes, resultados de campo, datos de votación) y externas (encuestas públicas, medios, redes, informes sectoriales, bases gubernamentales). Al utilizarlas, conviene sopesar tres criterios: credibilidad, objetividad y actualidad. La mezcla de fuentes, junto con bitácoras de muestreo y fichas técnicas, protege contra sesgos y permite auditar conclusiones.",
                },
                {
                  type: "accordion",
                  header: "Del dato al insight accionable",
                  open: false,
                  text: "Dato → Patrón → Insight → Decisión. Cada insight debe vincularse a un cambio operacional (mensaje/canal/segmento) con responsable y plazo. Sin esta trazabilidad, la investigación se vuelve un repositorio estéril.",
                },
                {
                  type: "paragraph",
                  text: "Una investigación honesta también reconoce límites: márgenes de error, sesgos de deseabilidad social, efectos de no respuesta. Por eso, se triangulan métodos y se pre-registran hipótesis cuando sea posible, para evitar ‘cazar’ resultados que solo confirmen creencias. Documentar dudas y supuestos críticos no resta autoridad; la refuerza.",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, la investigación se integra a la ética del proyecto: respeta la privacidad, evita manipulación y se apega a la normativa electoral. Así, además de útil, es legítima; y la legitimidad, en política, es parte esencial del resultado.",
                },
              ],
            },
          ],
        },

        {
          id: "1.6",
          numbering: "1.6",
          title: "Segmentación de mercado",
          content: [
            {
              type: "paragraph",
              text: "La segmentación de mercado en política consiste en dividir el electorado en grupos relativamente homogéneos para ajustar mensajes, propuestas y canales con mayor precisión y menor desperdicio de recursos. Los criterios más habituales combinan variables demográficas (edad, género, escolaridad), geográficas (región, urbano/rural), psicográficas (valores, estilo de vida) y conductuales (historial de voto, participación, afinidades temáticas). El valor estratégico de segmentar no reside en multiplicar etiquetas, sino en distinguir problemas, aspiraciones y barreras de cada grupo para articular una promesa pública viable. Con esta base, la campaña diseña la mezcla de contacto que cada segmento realmente atiende —territorio, medios, digital— y define indicadores que permitan observar si el mensaje fue comprendido, creído y, eventualmente, convertido en intención o participación.",
            },
            {
              type: "paragraph",
              text: "Para pasar del ‘todos’ a los ‘alguien’ relevantes, conviene construir perfiles que integren datos y narrativas: quiénes son, qué les importa, cómo se informan, qué objeciones presentan, qué evidencias necesitan y cómo traducen promesas en expectativas. Estos perfiles no son caricaturas ni prejuicios: son hipótesis operativas sujetas a validación. En la práctica, se comienza con una segmentación macro —por territorio y densidad— y se profundiza con capas psicográficas y de comportamiento cívico, hasta identificar nichos estratégicos donde pequeños avances producen retornos desproporcionados (p. ej., indecisos informados en distritos competidos).",
            },
            {
              type: "paragraph",
              text: "La ética guía la segmentación: diferenciar públicos para servir mejor, no para excluir ni manipular. Un análisis riguroso evita sesgos de confirmación —buscar solo lo que queremos ver— y previene la ‘microsegmentación inútil’ que complejiza sin mejorar decisiones. La gobernanza de datos exige fuentes confiables, políticas de privacidad y protocolos de seguridad. En el trabajo de campo, la segmentación se traduce en rutas, micro-eventos, mensajes localizados y vocerías pertinentes; en digital, se refleja en piezas, formatos y ventanas de pauta calibradas por respuesta.",
            },
            {
              type: "accordion",
              header: "Criterios y pasos recomendados",
              open: false,
              text: "1) Delimitar objetivo electoral y métricas. 2) Reunir fuentes internas/externas recientes. 3) Definir criterios (demo-geo-psico-conductuales). 4) Generar clústeres y validar con datos y campo. 5) Priorizar segmentos por tamaño, accesibilidad e impacto. 6) Diseñar hipótesis de mensaje-canal-evidencia por segmento. 7) Medir comprensión, confianza e intención para iterar. La clave es priorizar pocos segmentos accionables y mantener versiones vivas del mapa.",
            },
            {
              type: "paragraph",
              text: "Los mapas de segmentos deben dialogar con el posicionamiento. Si una candidatura aspira a ocupar un lugar específico en la mente del electorado —competencia, integridad, cercanía, resultados—, cada segmento recibirá un encuadre y un set de pruebas distinto para que la promesa sea verosímil. En segmentos con baja confianza institucional, pesan más testimonios y hechos verificables; en segmentos altamente informados, pesan comparativos de desempeño y planes con rutas críticas. Así, la segmentación no fragmenta: orquesta una misma identidad a través de variaciones tácticas.",
            },
            {
              type: "accordion",
              header: "Errores comunes de segmentación",
              open: false,
              text: "• Confundir tamaño con prioridad: un segmento grande puede ser poco persuadible. • Duplicar segmentos por variables que no cambian decisiones. • Hiperfocalizar y perder masa crítica. • No versionar el mapa con nueva evidencia. • Ignorar el costo de acceso a cada segmento. Evítalos priorizando impacto marginal esperado y viabilidad operativa.",
            },
            {
              type: "paragraph",
              text: "Finalmente, la segmentación se integra al seguimiento. El tablero no solo muestra alcance por canal, sino aprendizaje por segmento: qué mensaje activó comprensión, qué evidencia elevó confianza, qué vocero generó identificación. Con esta disciplina, el esfuerzo se redistribuye hacia donde la probabilidad de conversión es más alta y se documenta por qué se decide lo que se decide, cerrando el ciclo de mejora continua.",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.7",
          numbering: "1.7",
          title: "¿Qué es un producto?",
          content: [
            {
              type: "paragraph",
              text: "En mercadotecnia política, ‘producto’ es la oferta integral que la candidatura pone a consideración pública: persona, trayectoria, plataforma programática, estilo de liderazgo, equipo, promesas verificables y modo de relacionarse con la ciudadanía. Aunque se exprese en piezas de comunicación, el producto esencial es una promesa de valor público que debe poder cumplirse. Por ello, la construcción de producto exige coherencia entre lo que se dice, lo que se puede y lo que se hará; la falta de concordancia genera desconfianza y erosiona la preferencia aun con campañas creativas.",
            },
            {
              type: "paragraph",
              text: "Un producto fuerte combina identidad (quiénes somos), propuesta (qué cambiaremos y cómo) y evidencias (por qué creer). La identidad resume valores y rasgos del liderazgo; la propuesta traduce problemas en políticas con prioridades, calendario y costos; las evidencias alinean logros, casos comparables y validaciones externas. Además, el producto tiene ‘empaque’ reputacional: imagen, tono, símbolos y experiencias de contacto que activan pertenencia. La marca política no sustituye la sustancia, pero la vuelve reconocible y fácil de recordar bajo presión informativa.",
            },
            {
              type: "paragraph",
              text: "Diferenciar no significa prometer lo imposible, sino resolver mejor lo que importa a los segmentos priorizados. La elección de atributos de diferenciación —competencia técnica, integridad, cercanía territorial, capacidad de ejecución— depende del espacio competitivo y del historial del actor político. En contextos polarizados, la diferenciación responsable busca ampliar mayorías sumando coincidencias; en contextos fragmentados, construye coaliciones temáticas para superar apatía y ruido.",
            },
            {
              type: "accordion",
              header: "Componentes verificables del producto",
              open: false,
              text: "• Persona y trayectoria auditables. • Plataforma con prioridades, costos y fuentes. • Evidencias (logros, evaluaciones, testimonios). • Equipo y gobernanza. • Estilo y protocolos de rendición de cuentas. • Experiencias de servicio al ciudadano (antes/durante campaña). Documentar cada elemento permite responder ataques y sostener confianza.",
            },
            {
              type: "paragraph",
              text: "El ejemplo de campañas exitosas muestra que el ‘producto’ no es solo discurso: es organización. Un liderazgo que escucha, un equipo competente, una burocracia de campaña que entrega a tiempo y una cultura ética que respeta la ley electoral constituyen parte del producto porque condicionan la viabilidad de la promesa. Sin estas capacidades, el mejor mensaje se desploma al primer escrutinio serio.",
            },
            {
              type: "accordion",
              header: "Pruebas de estrés del producto",
              open: false,
              text: "1) Coherencia: ¿cada promesa corresponde a una capacidad instalada o plan realista? 2) Verificabilidad: ¿existen datos y terceros que respalden lo dicho? 3) Resiliencia: ¿el producto soporta ataques previsibles sin cambiar de identidad? 4) Servicio: ¿hay experiencias de contacto que encarnen la promesa? Estas pruebas anticipan crisis y fortalecen la credibilidad.",
            },
            {
              type: "paragraph",
              text: "En síntesis, el producto político es simultáneamente identidad, propuesta, evidencia y organización. Su fortaleza proviene de la honestidad estratégica: decir lo que se podrá hacer y demostrar cómo se hará. Con ese cimiento, la comunicación se vuelve multiplicador, no sustituto, de la realidad.",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.8",
          numbering: "1.8",
          title: "El papel de la administración de mercadotecnia",
          content: [
            {
              type: "paragraph",
              text: "Administrar la mercadotecnia política es planear, organizar, ejecutar y controlar un sistema de decisiones que conecte la promesa pública con ciudadanos específicos, de forma ética y eficaz. Combina gobierno de datos, procesos claros, asignación de recursos, liderazgo y evaluación. Su foco no es la ‘creatividad’ aislada, sino la coherencia operativa: que cada frente —territorio, medios, digital, alianzas, recaudación— entregue resultados verificables y documentados. El director de campaña actúa como integrador: alinea objetivos, clarifica roles, establece rituales de seguimiento y garantiza aprendizaje.",
            },
            {
              type: "paragraph",
              text: "En la práctica, la administración define objetivos SMART y sus indicadores, compone equipos con mandos intermedios, construye un cronograma realista con hitos y ventanas de ajuste, y establece protocolos para riesgos y crisis. Gestiona proveedores, respeta la normativa electoral, protege datos personales y asegura trazabilidad presupuestal. Convertir esto en rutina evita la campaña ‘orquesta’ descoordinada y permite pivotear con evidencia en vez de intuición.",
            },
            {
              type: "paragraph",
              text: "La dimensión humana es decisiva: selección, formación, clima y cuidado del equipo. Personas motivadas y tratadas con justicia sostienen la disciplina; personas quemadas o confundidas la erosionan. Por eso, la administración de mercadotecnia incorpora prácticas de liderazgo distribuido, comunicación interna clara y evaluación justa del desempeño. La cultura del ‘dato por encima del ego’ reduce fricciones y acelera decisiones.",
            },
            {
              type: "accordion",
              header: "Funciones y entregables clave",
              open: false,
              text: "• Planeación: objetivos, estrategia, presupuesto, riesgos. • Organización: organigrama, RACI, manuales operativos. • Ejecución: campañas 360°, eventos, PR, pauta. • Control: tableros, auditorías rápidas, corte y replaneación. • Cumplimiento: legal, fiscal, protección de datos. Entregables claros facilitan supervisión y rendición de cuentas.",
            },
            {
              type: "paragraph",
              text: "Entre los desafíos recurrentes destacan la volatilidad informativa, la desinformación, los sesgos internos y la presión temporal. La respuesta administrativa no es censurar el entorno, sino construir resiliencia: protocolos de verificación, vocerías preparadas, simulacros de crisis y un sistema ágil de toma de decisiones. Así, la campaña preserva foco estratégico sin perder velocidad táctica.",
            },
            {
              type: "accordion",
              header: "Gobernanza y ética operativa",
              open: false,
              text: "La legitimidad es un activo de gestión. Cumplir la ley electoral, evitar uso indebido de datos, transparentar gastos y evidenciar fuentes fortalece reputación y desactiva ataques. La ética no es ‘costo’, es ventaja competitiva sostenible.",
            },
            {
              type: "paragraph",
              text: "En definitiva, la administración de mercadotecnia es el ‘sistema operativo’ de la campaña: convierte la estrategia en resultados, institucionaliza el aprendizaje y protege la promesa pública de la improvisación.",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.9",
          numbering: "1.9",
          title: "Instrumentos mercadotécnicos",
          content: [
            {
              type: "paragraph",
              text: "Los instrumentos mercadotécnicos organizan la acción en torno al marketing mix ampliado: Producto, Precio, Distribución, Promoción, Personas, Proceso y Evidencia física. En política, ‘Producto’ resume identidad, plataforma y equipo; ‘Precio’ alude a costos de campaña y, simbólicamente, al esfuerzo ciudadano que se pide; ‘Distribución’ se traduce en canales de contacto; ‘Promoción’ integra comunicación, PR y debates; ‘Personas’ destaca liderazgo y calidad del servicio; ‘Proceso’ es la cadena que hace posible la promesa; ‘Evidencia física’ son señales tangibles de seriedad (materiales, actos, presencia).",
            },
            {
              type: "paragraph",
              text: "Operativamente, cada instrumento se vuelve un módulo con objetivos, responsables, indicadores y presupuesto. Producto: actualización de plataforma y pruebas de verificación. Precio: planeación financiera y control. Distribución: rutas territoriales y parrillas de medios. Promoción: campañas 360° con narrativa y pauta calibrada. Personas: selección, entrenamiento y bienestar del equipo. Proceso: manuales, cronogramas y tableros. Evidencia física: lineamientos de marca, calidad y accesibilidad en eventos.",
            },
            {
              type: "paragraph",
              text: "La clave es la orquestación: ningún instrumento compensa la ausencia de otro. Una candidatura con narrativa sólida pero sin proceso fracasa en ejecución; una campaña con gran logística pero un producto vacío pierde confianza. Por ello, la evaluación periódica revisa el conjunto y toma decisiones inter-instrumentos (p. ej., reforzar servicio ciudadano para sostener promoción).",
            },
            {
              type: "accordion",
              header: "Checklist operativo por instrumento",
              open: false,
              text: "Producto: propuesta priorizada + evidencias. Precio: presupuesto trazable. Distribución: cobertura efectiva por segmento. Promoción: pruebas A/B por canal. Personas: organigrama y RACI vigentes. Proceso: tableros accionables. Evidencia física: consistencia de marca y accesibilidad. Si un ítem falla, no avanzar a la siguiente fase.",
            },
            {
              type: "paragraph",
              text: "En contextos regulados, el cumplimiento reforzado es ineludible: topes de gasto, acceso a medios, fiscalización y protección de datos. Integrar asesoría legal y auditoría rápida a los instrumentos evita contingencias. También conviene una ‘biblioteca’ de evidencia —documentos, datos, testimonios— lista para responder ataques y sostener el relato con hechos.",
            },
            {
              type: "accordion",
              header: "De instrumento a impacto",
              open: false,
              text: "Cada instrumento debe mapear su contribución al objetivo electoral: ¿qué mueve comprensión, confianza, intención y participación? Con esa lógica, se priorizan asignaciones, se detienen tácticas ineficaces y se escalan las que prueban impacto. Sin este vínculo causal, el mix es actividad; con él, es estrategia.",
            },
            {
              type: "paragraph",
              text: "En suma, los instrumentos mercadotécnicos no son una lista: son un sistema que ordena decisiones, crea trazabilidad y permite rendir cuentas. Bien diseñados, vuelven la campaña más justa y efectiva al alinear promesa, medios y resultados.",
            },
          ],
          subthemes: [],
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
          href: "https://www.youtube.com/watch?v=zyV1CJekb4c", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Más allá del marketing político — YouTube https://www.youtube.com/watch?v=zyV1CJekb4c",
            "Joe Biden: una campaña que demuestra el poder del marketing político — YouTube https://www.youtube.com/watch?v=fhiltDWw5JI",
            "“Comportamiento Electoral” — Dra. Marcela Ávila-Eggleton — YouTube https://www.youtube.com/watch?v=UU5_ZhiYcvo",
            "El marketing político y su importancia en 2024: un súper año electoral — UNIR México https://mexico.unir.net/noticias/comunicacion-mercadotecnia/que-es-marketing-politico/?hl=es-US",
            "¿Qué es la segmentación de mercado, cuándo se realiza y para qué sirve? — YouTube https://www.youtube.com/watch?v=-MI8RMP98kk",
            "Procesos electorales y democracia: la construcción de una agenda de campaña política — SciELO México https://www.scielo.org.mx/scielo.php?pid=S1405-14352014000100006&script=sci_arttext",
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
            "Keller, K. y. (2012). Dirección de marketing. Ciudad de México: PEARSON EDUCACIÓN.",
            "Maslow, A. (1970). Motivation and personality. Estados Unidos: Harper & Row.",
            "Maslow, A. (1971). The farther reaches of human nature. Estados Unidos: Viking Press.",
            "Menon, S. (2008, enero). Political Marketing: A Conceptual Framework. Journal of Political Marketing.",
            "Holiday, R. (2012). Confía en mí, te estoy mintiendo: Los secretos de los expertos en persuación. Estados Unidos: Paidós.",
            "AI, M. (2024). Conversación con Asistente de Meta AI (Mensaje de chat).",
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
