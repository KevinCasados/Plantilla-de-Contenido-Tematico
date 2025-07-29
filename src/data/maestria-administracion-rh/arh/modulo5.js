/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MARH",
  courseId: "MARH-101",
  id: "MARH101-mod5",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Administración de Recursos Humanos",
  title:
    "Módulo 5. Propuestas contemporáneas de Administración de Recursos Humanos",
  semestre: "1er semestre",
  teacher: "Mtra. Mirna Angélica Palafox Mariscal",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Identificar, conocer y destacar la vinculación de algunas propuestas contemporáneas " +
    "para hacer más efectiva la Administración de Recursos Humanos y con ello mejorar la " +
    "gestión en el área y, como consecuencia, las aportaciones productivas de la organización " +
    "que le permitan ingresar, mantenerse y crecer, aportando mediante el esfuerzo del capital " +
    "humano bienes y servicios adecuados a las necesidades y deseos del mercado.",

  competencies: [
    "Adapta las características y contenidos de propuestas contemporáneas —coaching, mentoring, rightsizing, balanced scorecard, capital intelectual, ABC costing, mandamientos Kaizen y 8 leadership principles— a la administración efectiva de recursos humanos.",
    "Promueve la creatividad y la capacidad crítica para enfrentar los retos y desafíos del manejo del capital humano en las organizaciones.",
    "Reconoce el compromiso económico, social y cultural de la organización con su entorno en la toma de decisiones sobre personas.",
    "Desarrolla agudeza para establecer líneas de acción adecuadas en la resolución de problemas e implicaciones en decisiones relativas al personal.",
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
      id: "8",
      numbering: "Unidad 8",
      title: "Propuestas contemporáneas de Administración de Recursos Humanos",
      content: [
        // Párrafo 1
        {
          type: "paragraph",
          text: "Esta unidad introduce un conjunto de propuestas contemporáneas que, aplicadas con criterio, elevan la efectividad de la Administración de Recursos Humanos (ARH). El foco no es ‘acumular técnicas’, sino comprender la lógica que las vincula con los resultados del negocio y con el desarrollo de las personas. De manera explícita, el objetivo formativo plantea identificar, conocer y destacar esas vinculaciones para mejorar la gestión del área y, como consecuencia, las aportaciones productivas de la organización. En este marco, revisaremos ocho palancas: Coaching, Mentoring, Rightsizing, Balanced Scorecard, Capital Intelectual, ABC costing, los Mandamientos Kaizen y Ocho principios de liderazgo. Cada propuesta se estudiará como un medio para traducir estrategia en práctica, establecer estándares y medir impacto. La premisa es clara: cuando una organización decide con evidencia sobre personas y procesos, sus iniciativas dejan de ser iniciativas aisladas y se convierten en sistemas consistentes de ejecución. El recorrido que emprendes a lo largo de la unidad te permitirá evaluar la pertinencia de cada enfoque, priorizar su adopción de acuerdo con el contexto y articularlos en una hoja de ruta realista, con trazabilidad entre los objetivos y los resultados esperados.",
        },

        // Párrafo 2
        {
          type: "paragraph",
          text: "El hilo conductor de la unidad es el equilibrio: cómo armonizar la presión por resultados en entornos dinámicos y demandantes con el reconocimiento de las necesidades básicas de quienes colaboran en la organización. Analizar los elementos y procedimientos de la administración moderna de recursos humanos implica observar el impacto de las decisiones en productividad, calidad, costos y aprendizaje, sin perder de vista que la ejecución descansa en personas con motivaciones y circunstancias diversas. Por ello, en cada propuesta contemporánea se enfatiza su ‘puesta en obra’: qué condiciones habilitan su efectividad, qué indicadores permiten juzgar avances y qué riesgos conviene anticipar (fatiga de procesos, implementaciones parciales, métricas sin uso). Este encuadre no pretende estandarizar experiencias dispares, sino ofrecer criterios para adaptar, combinar y secuenciar herramientas de forma coherente. Así, la unidad te invita a construir un mapa de decisiones de ARH con prioridades explícitas y acuerdos verificables, donde el aprendizaje es continuo y las mejoras se sostienen en evidencia y retroalimentación oportuna.",
        },

        // Párrafo 3
        {
          type: "paragraph",
          text: "Metodológicamente, partimos de una exposición breve de cada propuesta para ubicar su razón de ser y su aporte distintivo al sistema de gestión de personas. El propósito es que puedas discernir cuándo conviene aplicarlas, a qué problema responden y cómo interactúan entre sí (por ejemplo, cómo el coaching y el mentoring fortalecen capacidades críticas definidas estratégicamente, o cómo el Balanced Scorecard otorga visibilidad a resultados no financieros que sustentan el desempeño). Este abordaje favorece una visión integradora: lejos de competir entre sí, las propuestas se refuerzan cuando se orquestan con un lenguaje común de metas, indicadores y rutinas de seguimiento. La unidad también insistirá en la necesidad de ‘aterrizar’ cada idea en procesos y roles: quién decide, quién ejecuta, qué se mide y con qué cadencia. Con este marco, pasarás de conceptos a prácticas con resultados observables, manteniendo coherencia entre expectativas, recursos y estándares de logro.",
        },

        // Acordeón — 3 niveles de aplicación
        {
          type: "accordion",
          header:
            "Ruta de aplicación por niveles (estratégico, táctico y operativo)",
          open: false,
          text:
            "**Nivel estratégico (dirección):** definir capacidades críticas, priorizar inversiones (formación, tecnología, rediseño organizacional) y fijar metas transversales que articulen las propuestas. Asegurar patrocinios, políticas claras y un tablero de control que conecte personas con resultados.  \n\n" +
            "**Nivel táctico (jefaturas/equipos):** convertir prioridades en programas con responsables, criterios de entrada/salida y métricas de flujo (cobertura de inducción, rotación temprana, transferencia del aprendizaje). Integrar coaching/mentoring como rutinas de desarrollo y alinear iniciativas Kaizen con objetivos del área.  \n\n" +
            "**Nivel operativo (puestos):** ejecutar con estándares, registrar evidencias y proponer mejoras. Usar check‑ins breves para ajustar rumbo, aplicar herramientas simples de resolución de problemas y mantener la trazabilidad entre objetivos, actividades y resultados individuales.",
        },

        // Párrafo 4
        {
          type: "paragraph",
          text: "Para evaluar la adopción de estas propuestas contemporáneas te sugerimos trabajar con un conjunto mínimo de criterios: claridad de propósito (qué problema resuelve), condiciones de implementación (recursos, competencias, tiempos), indicadores de resultado (eficacia y eficiencia) y mecanismos de aprendizaje (cómo se incorporan los hallazgos al siguiente ciclo). En términos de gobernanza, la unidad promueve responsabilidad compartida: la dirección establece el marco y los incentivos; las jefaturas administran flujos y capacidades; las personas en los puestos entregan evidencias y participan activamente en su desarrollo. A medida que avances, procura vincular cada propuesta con casos reales o simulaciones de tu contexto para decidir qué adoptar primero, qué adaptar y qué descartar por el momento. El objetivo no es ‘tener de todo’, sino construir una cartera de prácticas congruente con la estrategia y con el momento de la organización.",
        },

        // Párrafo 5
        {
          type: "paragraph",
          text: "En síntesis, la unidad aspira a que reconozcas las propuestas contemporáneas como medios para mejorar la gestión de ARH y, por esa vía, las aportaciones productivas de la organización. El cierre esperado es doble: por un lado, que puedas comunicar con precisión la lógica de cada herramienta (qué es, para qué sirve, cómo se mide) y, por otro, que propongas una hoja de ruta que conecte decisiones de personas con resultados del negocio (ingresar, mantenerse y crecer), aportando bienes y servicios acordes con las necesidades del mercado. Esta perspectiva integradora no solo eleva la efectividad operativa; también refuerza la legitimidad del área de recursos humanos al demostrar, con evidencia, su contribución al desempeño sostenible y al desarrollo del talento.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "8.1",
          numbering: "8.1",
          title: "Coaching",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "Para comprender el coaching en la Administración de Recursos Humanos conviene partir de su sentido y su evolución conceptual. En el plano etimológico, el término se asocia con la idea de ‘transportar’: ayudar a una persona a pasar de donde está a donde quiere estar, una metáfora que describe con precisión el objetivo de acompañamiento y progreso propio del coaching. En el ámbito profesional, la International Coach Federation (ICF) lo define como un proceso continuo de colaboración que permite al cliente obtener resultados satisfactorios en su vida personal y profesional; mediante ese proceso, profundiza en sus conocimientos, mejora su rendimiento y revaloriza su calidad de vida. Este encuadre evita reducir el coaching a una charla motivacional o a un consejo puntual: su propósito es estructurar conversaciones, objetivos y prácticas que habiliten cambios observables en el desempeño. Trasladado a las organizaciones, el coaching aporta un marco para alinear expectativas, fortalecer la responsabilidad personal y movilizar capacidades hacia metas que importan al negocio y a las personas. La relación coach–coachee se construye con comunicación abierta y bidireccional, apoyo exigente y acciones consistentes en el tiempo, cimentando respeto y confianza. Así entendido, el coaching no sustituye la gestión; la potencia, porque articula medios —objetivos, feedback, reflexión guiada— que facilitan resultados sostenibles. Esta unidad examina el coaching como palanca de aprendizaje acelerado en contextos de cambio, destacando su contribución a la efectividad de RR. HH. y a la competitividad organizacional.",
            },

            // Acordeón 1 — Viñetas del PDF: “Qué necesitas saber al comienzo”
            {
              type: "accordion",
              header: "Qué necesitas saber al comienzo (síntesis del PDF)",
              open: false,
              text:
                "• Todas las personas necesitan sentirse valiosas.  \n" +
                "• Todas las personas responden bien al aliento.  \n" +
                "• La motivación es natural en las personas.  \n" +
                "• Se cree primero en la persona y después en su liderazgo.",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "Operativamente, el enfoque que interesa a esta unidad es el **coaching organizacional**. Se trata de un proceso de apoyo orientado a fines particulares, con roles y metas formalmente establecidos, y una dinámica de establecimiento de objetivos, planeación y aprendizaje acelerados en un contexto específico. Su finalidad explícita es doble: mejorar la satisfacción y el desempeño en el trabajo y, por esa vía, obtener mejores resultados en el negocio. Para cumplir ese objetivo, el coaching en RR. HH. adopta una metodología basada en la comunicación y el diálogo, organizada para promover autoconocimiento, auto‑observación, aprendizaje personal y resolución de problemas individuales y grupales. Es decir, el coaching profesional no es un adorno cultural; es una **herramienta de gestión** que convierte conversaciones en acuerdos de acción y que, con cadencia y evidencia, sostiene mejoras en el corto y mediano plazo. En organizaciones que operan con retos crecientes y cambios frecuentes, este acompañamiento acelera la transferencia del aprendizaje al puesto, reduce la ambigüedad de expectativas y hace explícito el vínculo entre metas del área, comportamientos observables y resultados. La clave práctica es cuidar las condiciones de credibilidad: claridad de propósito, roles definidos, acuerdos trazables y una cultura de respeto que entienda que el reconocimiento y la exigencia no se excluyen, se equilibran. Cuando esas condiciones se cumplen, el coaching fortalece la autonomía responsable, favorece la colaboración y habilita decisiones de talento mejor informadas.",
            },

            // Acordeón 2 — Viñetas del PDF: “Áreas del coaching”
            {
              type: "accordion",
              header: "Áreas del coaching (según el PDF)",
              open: false,
              text:
                "• Coaching personal (life coaching).  \n" +
                "• Coaching ejecutivo (executive coaching).  \n" +
                "• Coaching organizacional (corporate coaching).",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "El valor del coaching en RR. HH. se reconoce por sus efectos acumulativos en el sistema de trabajo. Al estructurar objetivos y conversaciones de calidad, se mejora la claridad de rol, se acelera el aprendizaje y se reduce el desajuste entre expectativas y desempeño. Metodológicamente, el proceso combina escucha activa, preguntas poderosas, acuerdos específicos y revisión periódica de evidencias, lo cual favorece cambios conductuales observables y la consolidación de hábitos que aportan a los resultados. En la práctica, los beneficios transitan desde la persona —mayor autoconciencia, enfoque y confianza— hacia el equipo —mejor coordinación, resolución de conflictos, feedback útil— y el negocio —productividad, calidad y cumplimiento—. Este ‘encadenamiento’ explica por qué el coaching se considera piedra angular para fortalecer a la organización y acompañar el crecimiento profesional: cuando el acompañamiento es consistente, el desarrollo se aprende y, sobre todo, se aplica. Ahora bien, su efectividad depende de condiciones básicas: patrocinios claros, confidencialidad, competencias del coach, metas realistas y trazables, y una cadencia de seguimiento que evite tanto la burocracia como la improvisación. Bajo estas premisas, el coaching organizacional se convierte en un catalizador de mejora continua y en un mecanismo de alineación cultural que refuerza el liderazgo cotidiano. El resultado deseable es un entorno donde el respeto se gana en el tiempo, la comunicación es bidireccional y el apoyo convive con la exigencia, elementos que crean confianza y generan impacto sostenible.",
            },

            // Video (apoyo didáctico)
            {
              type: "video",
              title:
                "Coaching organizacional — Fundamentos y práctica (introducción)",
              src: "https://www.youtube.com/watch?v=B5lGkZQDaYI",
              caption:
                "Video de apoyo para repasar conceptos de gestión aplicables al coaching organizacional.",
              text: "",
            },
          ],
        },
        {
          id: "8.2",
          numbering: "8.2",
          title: "Mentoring",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "El mentoring, en el contexto de la Administración de Recursos Humanos, se concibe como una relación profesional orientada al aprendizaje y a la proyección de carrera, donde una persona con amplia experiencia acompaña a otra para acelerar su desarrollo. La esencia del proceso reside en el juicio experto del mentor, su disposición a aconsejar y a promover el crecimiento del mentee, y la posibilidad de que este último comprenda y asimile conocimientos con mayor rapidez que si avanzara en solitario. En organizaciones contemporáneas, el mentoring se integra como filosofía y práctica: una herramienta centrada en los logros del individuo y en su crecimiento personal, que busca formar líderes efectivos y confiables capaces de contribuir con impacto. La figura del mentor implica invertir tiempo, compartir conocimiento tácito y explícito, y dedicar esfuerzo sostenido para enriquecer el modo de pensar del mentorizado y ampliar su repertorio de decisiones. No es un vínculo casual: es una relación de acompañamiento deliberada que habilita la transferencia de experiencia, la reflexión guiada y la consolidación de hábitos profesionales. En síntesis, el mentoring traduce conocimiento en capacidad de acción y prepara a la persona para afrontar retos complejos con juicio, criterio y autonomía creciente, al tiempo que fortalece la cultura de aprendizaje y el liderazgo distribuido dentro de la organización.",
            },

            // Lista 1 — Viñetas del PDF (mentalidad/acciones del mentor)
            {
              type: "list",
              style: "unordered",
              items: [
                "Haz del desarrollo de otro tu máxima prioridad.",
                "Limita la cantidad de gente que llevas contigo.",
                "Desarrolla relaciones antes de empezar.",
                "Brinda ayuda incondicionalmente.",
                "Déjalos volar contigo por un tiempo.",
                "Proporciona herramientas para su crecimiento personal (1. Yo lo hago; 2. Yo lo hago y tú miras; 3. Tú lo haces y yo miro; 4. Tú lo haces).",
                "Quédate con ellos hasta que puedan desempeñarse solos.",
                "Ayúdalos a repetir el proceso.",
              ],
              text: "",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "Operativamente, el mentoring se implementa como un programa personalizado ‘uno a uno’, con metas explícitas, acuerdos de confidencialidad y una cadencia de trabajo que combina conversaciones estructuradas, observación y práctica en situaciones reales. Su naturaleza flexible permite adaptarlo a cada persona y momento de carrera: desde onboarding acelerado hasta preparación para nuevas responsabilidades. Entre sus ventajas se encuentra que el aprendizaje se produce por la vía del comportamiento y de la experiencia acompañada, más que por la instrucción teórica tradicional; el mentor funge como estimulador e inspirador, ayudando a transformar conocimientos en decisiones y hábitos observables. El proceso típico arranca con el establecimiento de objetivos y un diagnóstico de capacidades, continúa con sesiones periódicas de revisión y tareas entre encuentros (lecturas, ejercicios, retos en el puesto), e integra evidencias para verificar avances. El éxito del programa depende de condiciones de credibilidad: claridad de roles, expectativas compartidas, seguimiento trazable y respeto mutuo. En contextos de cambio, el mentoring acelera la transferencia al puesto, reduce la incertidumbre ante nuevos retos y habilita conversaciones de carrera que alinean aspiraciones individuales con necesidades organizacionales. Lejos de competir con el coaching, el mentoring lo complementa: mientras el coaching enfatiza preguntas y autodescubrimiento, el mentoring agrega la voz de la experiencia directa y el modelaje de conductas, útil para formar criterio técnico y de gestión en escenarios específicos.",
            },

            // Imagen (referenciada en el material)
            {
              type: "image",
              src: "https://previews.123rf.com/images/rashadashurov/rashadashurov1911/rashadashurov191102261/133749261-mentoring-infographic-10-steps-concept-direction-training-motivation-success-simple-icons.jpg",
              caption:
                "Mentoring: acompañamiento experto y aprendizaje por comportamiento.",
              alt: "Ilustración conceptual de mentoring",
              text: "",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "Los resultados deseables de un buen programa de mentoring se manifiestan en independencia para ejecutar, mejor toma de decisiones y mejoras en productividad, calidad y satisfacción laboral. A medida que el mentorizado fortalece saberes y habilidades, puede innovar, adaptar y enriquecer su trabajo con creciente autonomía; el mentor administra la distancia óptima para que la persona asuma desafíos sin perder el acompañamiento necesario. Además, la relación mentora demanda compromiso y empatía: no se limita al traspaso de técnicas, sino al interés genuino por el desarrollo humano y profesional, lo que propicia vínculos de confianza y culturas de colaboración. Desde la perspectiva de la función de RR. HH., el mentoring es un medio para reducir tiempos de aprendizaje, mitigar rotación temprana, mejorar la movilidad interna y consolidar reservas de talento listas para asumir mayores responsabilidades. Para sostener su impacto, conviene fijar indicadores simples pero útiles (por ejemplo, tiempo a productividad en nuevas funciones, porcentaje de objetivos de desarrollo alcanzados, percepciones de confianza y apoyo, o tasa de promociones al cabo de 12 meses) y documentar hallazgos para ajustar el diseño del programa. En suma, el mentoring no es un fin en sí mismo: es una palanca para convertir la experiencia organizacional en ventaja competitiva, siempre que se practique con rigor, ética y una orientación clara a resultados tanto individuales como de negocio.",
            },

            // Lista 2 — Complementos prácticos (para diseñar/medir el programa)
            {
              type: "list",
              style: "ordered",
              items: [
                "Definir objetivos de desarrollo por rol y horizonte (90/180/360 días) y alinearlos con metas del área.",
                "Diseñar el ‘match’ mentor–mentee con criterios (competencias, trayectoria, disponibilidad) y un acuerdo de confidencialidad.",
                "Establecer cadencia y artefactos: plan de sesiones, bitácora de acuerdos, tareas entre sesiones y checklist de evidencias.",
                "Formar a mentores en habilidades clave: escucha activa, feedback efectivo, preguntas de indagación y modelaje de conducta.",
                "Medir impacto: tiempo a productividad, permanencia, movilidad interna y satisfacción del mentorizado y del mentor.",
                "Revisar y ajustar trimestralmente: renovar objetivos, rotar pares cuando convenga y escalar hallazgos a iniciativas de formación.",
              ],
              text: "",
            },
          ],
        },
        {
          id: "8.3",
          numbering: "8.3",
          title: "Rightsizing",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "El rightsizing es una estrategia de ajuste organizacional cuyo propósito es dar a la empresa su tamaño adecuado: reducirla cuando ha crecido en exceso o ampliarla cuando es insuficiente, buscando estructuras descentralizadas pero integradas. En términos prácticos, no se limita a ‘recortar’ o ‘contratar’; implica rediseñar el sistema de trabajo para que la organización recupere coherencia entre su carga real de procesos, su portafolio de servicios y su base de capacidades. En este marco, el análisis se centra en la cadena de valor: ¿qué actividades generan valor y cuáles añaden complejidad sin beneficio?, ¿qué procesos pueden acortarse o simplificarse sin comprometer calidad o cumplimiento?, ¿qué decisiones conviene acercar a donde ocurre el trabajo para ganar velocidad, responsabilidad y aprendizaje? La lógica del rightsizing rechaza los ajustes lineales y privilegia decisiones selectivas con evidencia: eliminar lo que no añade valor, simplificar flujos y empoderar a quienes resuelven, preservando la coordinación sistémica. De este modo, la pregunta no es ‘¿cuántas personas?’ sino ‘¿qué estructura y procesos permiten entregar resultados sostenibles al menor costo de complejidad?’. La meta es combinar foco y agilidad sin perder control, favoreciendo una organización más plana en lo operativo, más clara en lo decisorio y más capaz de adaptarse al entorno. Esta es la noción de rightsizing recogida en el material de estudio del módulo. :contentReference[oaicite:15]{index=15}",
            },

            // Acordeón 1 — Principios (del PDF)
            {
              type: "accordion",
              header: "Principios básicos del rightsizing (síntesis del PDF)",
              open: false,
              text:
                "• Analizar y eliminar áreas o actividades que no generen valor.  \n" +
                "• Reducir y simplificar procesos para hacerlos más cortos y eficientes.  \n" +
                "• Favorecer la descentralización de decisiones, modificando la actitud de las personas.",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "Para llevar a la práctica el rightsizing conviene enmarcarlo en un diagnóstico con trazabilidad: mapa de procesos, costos de complejidad, tiempos de ciclo, capacidad instalada, variabilidad de la demanda y riesgos operativos. A diferencia de los ajustes lineales, este enfoque prioriza evidencias y secuencia intervenciones: primero se clarifica la contribución de cada actividad al valor; luego se reconfiguran procesos, roles y fronteras; y, si procede, se adecúa el tamaño de la plantilla con criterios explícitos. Aquí conviene distinguir un concepto asociado: downsizing. Mientras el rightsizing persigue el ‘tamaño correcto’ (arriba o abajo) a partir del rediseño de procesos y estructura, el downsizing se enfoca en reducir la plantilla. En el material se señalan dos causas típicas del downsizing: costos elevados con baja productividad que desajustan a la empresa frente a cambios del mercado o del sector, y reducciones de personal derivadas de procesos de fusión. Ambas situaciones exigen prudencia técnica y ética: los recortes deben ser lógicos, organizados y acordes con las condiciones reales del negocio; además, cuando la reducción está asociada a innovación o nuevas tecnologías, la organización asume el compromiso de capacitar y actualizar competencias para facilitar la transición. Estas cautelas no son decorativas: reducen los efectos adversos sobre desempeño y clima, y preparan la base para un redimensionamiento sostenible. :contentReference[oaicite:16]{index=16} :contentReference[oaicite:17]{index=17} :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19}",
            },

            // Acordeón 2 — Guía complementaria (aplicable)
            {
              type: "accordion",
              header:
                "Guía práctica para implementar un rightsizing responsable",
              open: false,
              text:
                "• Alinea propósito y criterios: define el ‘tamaño correcto’ con métricas de demanda, productividad y servicio.  \n" +
                "• Diseña por etapas: (1) elimina no‑valor, (2) simplifica procesos, (3) acerca decisiones al trabajo, (4) ajusta plantilla si es necesario.  \n" +
                "• Protege el know‑how: planes de transición, retención de roles críticos y re‑skilling donde haya tecnología nueva.  \n" +
                "• Comunicación y soporte: explica el ‘por qué’ y el ‘cómo’; ofrece acompañamiento y salvaguardas.  \n" +
                "• Evalúa el impacto: calidad, tiempos de ciclo, carga de trabajo, seguridad, satisfacción del cliente interno y externo.",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "Evaluar el éxito de un rightsizing requiere indicadores que midan tanto la efectividad técnica del rediseño como su impacto humano. En lo técnico, el tablero mínimo incluye reducción de tiempos de ciclo, simplificación documentada de procesos (pasos, retrabajos), mejora de productividad y costos de conversión, así como calidad y cumplimiento normativo. En lo humano, conviene monitorear rotación, ausentismo, carga percibida, seguridad y clima, con especial atención al efecto psicológico de los ajustes: el propio material advierte que, si no se gestiona, la reducción o el ajuste de personal puede provocar impactos emocionales que terminen mermando la productividad. Por eso, incluso cuando el objetivo es una estructura descentralizada e integrada, la implementación debe acompañarse con información clara, participación de los equipos, formación para nuevos roles y soportes de transición. El cierre conceptual es simple y exigente: rightsizing no equivale a ‘recortar’; equivale a sintonizar tamaño, procesos y decisiones con la realidad del negocio y con la capacidad de las personas para sostener resultados. Hacerlo bien implica combinar datos y juicio, orientar cada cambio a un resultado observable y preservar la dignidad de quienes viven el proceso, porque de ese equilibrio depende que el ajuste sea sostenible y, sobre todo, que la organización se fortalezca. :contentReference[oaicite:20]{index=20} :contentReference[oaicite:21]{index=21}",
            },
          ],
        },
        {
          id: "8.4",
          numbering: "8.4",
          title: "Balanced Scorecard",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "El Balanced Scorecard (BSC) es un sistema de gestión estratégica que traduce la estrategia en objetivos, indicadores, metas e iniciativas, organizados en un tablero que permite observar el desempeño de forma integral. Históricamente, se reconoce su surgimiento a inicios de los años noventa y su adopción generalizada como marco para la gerencia estratégica. Su aporte principal consiste en superar la visión exclusivamente financiera e incorporar otras perspectivas que explican por qué se logran —o no— los resultados económicos. En el ámbito de Recursos Humanos (RR. HH.), el BSC resulta especialmente valioso porque vincula las decisiones sobre personas (capacidades, clima, seguridad, compromiso, aprendizaje) con los resultados de clientes y procesos, y, en última instancia, con el desempeño financiero. En vez de acumular iniciativas aisladas, el cuadro de mando obliga a explicitar la relación causa–efecto entre competencias, procesos y resultados, y a seleccionar unas pocas métricas que de verdad muevan la aguja. Operativamente, trabajar con BSC implica definir con rigor el propósito (qué problema estratégico se quiere resolver), formular objetivos claros por perspectiva, elegir indicadores confiables, establecer metas exigentes pero alcanzables y acordar iniciativas con responsables y plazos. Finalmente, el BSC no es un reporte más: es un lenguaje de ejecución que facilita conversaciones de dirección, revisiones periódicas y aprendizaje organizacional, dando trazabilidad a cómo RR. HH. aporta a la estrategia.",
            },

            // Acordeón 1 — Perspectivas del BSC (aplicadas a RR. HH.)
            {
              type: "accordion",
              header: "Las cuatro perspectivas del BSC y ejemplos para RR. HH.",
              open: false,
              text:
                "**Finanzas:** productividad laboral, costo de rotación, costo por contratación, ausentismo con impacto en margen.  \n" +
                "**Clientes:** NPS interno, tiempos de respuesta a áreas usuarias, satisfacción con servicios de RR. HH.  \n" +
                "**Procesos internos:** tiempo de cobertura de vacantes, cobertura de inducción, % evaluaciones al día, incidentes críticos resueltos.  \n" +
                "**Aprendizaje/innovación:** horas de formación/FTE, tasa de transferencia al puesto, capacidades críticas cubiertas, propuestas de mejora implementadas.",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "Un rasgo distintivo del BSC es la **integración de perspectivas**: financiera, cliente, procesos internos y aprendizaje/innovación. Esta mirada evita sesgos de corto plazo y alinea esfuerzos de RR. HH. con la cadena de valor: construir capacidades y hábitos (aprendizaje) que habilitan procesos confiables (selección, inducción, desempeño, seguridad), que a su vez mejoran la experiencia del cliente (interno y externo) y finalmente sostienen resultados económicos saludables. Para diseñarlo con sentido, conviene comenzar por formular **objetivos estratégicos** que describan la contribución deseada —por ejemplo, “reducir rotación temprana en posiciones críticas” o “acelerar tiempo a productividad en nuevas contrataciones”—; después, seleccionar **indicadores** que midan el avance, **metas** que definan el nivel de logro y **iniciativas** que conviertan los objetivos en proyectos concretos (p. ej., rediseño de onboarding, capacitación de evaluadores, mejora del flujo de requisiciones). El valor del BSC se multiplica cuando se enlaza con **mapas causa–efecto**: flechas que muestran cómo una iniciativa de formación mueve un indicador de desempeño de procesos y, con retraso, afecta la satisfacción del cliente y el resultado financiero. Además, al trabajar con tableros visuales y datos provenientes de los sistemas de la organización, se favorecen revisiones ejecutivas más productivas y decisiones basadas en evidencia. Así, RR. HH. deja de defenderse con anécdotas y pasa a conversar con datos y prioridades comunes.",
            },

            // Acordeón 2 — Fases de implementación y cautelas
            {
              type: "accordion",
              header: "Cómo implementar el BSC (fases y recomendaciones)",
              open: false,
              text:
                "**Fase 1 — Concepto estratégico:** misión, visión, retos, oportunidades y plan del proyecto.  \n" +
                "**Fase 2 — Objetivos, vectores y medidas:** definir objetivos estratégicos, indicadores y palancas de valor.  \n" +
                "**Fase 3 — Vectores, metas e iniciativas:** detallar objetivos específicos, modelo causa–efecto y metas por indicador; acordar iniciativas estratégicas.  \n" +
                "**Fase 4 — Comunicación e implantación:** divulgar, automatizar, alinear planes de acción y desplegar a toda la organización.  \n\n" +
                "**Cautelas prácticas:** evita tableros con métricas excesivas; prioriza indicadores accionables, establece una cadencia de revisión (mensual/trimestral) y asegúrate de que cada iniciativa tenga un responsable y una fecha de valor.",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "Para que el BSC aporte a RR. HH., hay que **anclarlo en decisiones de talento** y no reducirlo a un tablero decorativo. Un enfoque eficaz empieza por identificar capacidades críticas (seguridad, servicio, analítica, liderazgo) y por clarificar brechas; con base en ello, se definen objetivos por perspectiva y se eligen indicadores que conecten el día a día con la estrategia. Por ejemplo, si la meta es ‘acortar el tiempo a productividad’, RR. HH. puede medir la cobertura de inducción en 30/60/90 días, la calidad de contratación a 90 días y el porcentaje de objetivos de rol definidos en la primera semana; si la prioridad es ‘disminuir rotación temprana’, conviene monitorear motivos de salida, calidad del liderazgo y condiciones del puesto. Además, el tablero debe **vivir**: generar reuniones ejecutivas breves, decisiones sobre priorización, ajustes de iniciativas y aprendizaje continuo. Como regla, comienza minimalista (tres a cinco objetivos por perspectiva), valida datos, calibra metas y crece solo cuando el sistema demuestra utilidad sostenida. Finalmente, recuerda que el BSC es un **medio**: su éxito no se mide por lo perfecto del tablero, sino por la mejora verificable en eficiencia, calidad, seguridad, servicio y resultados financieros, y por la claridad con la que todos entienden cómo su trabajo contribuye al desempeño integral.",
            },
          ],
        },
        {
          id: "8.5",
          numbering: "8.5",
          title: "Capital Intelectual",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "El capital intelectual es, ante todo, un activo intangible que condensa el conocimiento aplicado dentro de la organización y, por ello, influye de manera directa en su competitividad y en sus resultados. A diferencia de los activos físicos o financieros, el capital intelectual no se ‘posee’ en sentido estricto: se construye y se moviliza cuando las personas, los procesos y las relaciones con el entorno funcionan como un sistema capaz de aprender, innovar y ejecutar con calidad. Desde una perspectiva práctica, conviene reconocer su composición tripartita: el **capital humano** (competencias, experiencia, motivaciones y potencial de aprendizaje de las personas); el **capital económico de mercado** (o relacional), que abarca reputación, fidelidad de clientes, alianzas, posicionamiento y acceso a canales; y el **capital estructural**, integrado por procesos, normas, tecnologías, datos y rutinas que convierten el conocimiento en capacidad operativa. Esta taxonomía ayuda a evitar reduccionismos, porque impide entender el valor intelectual como ‘talento individual’ sin más, y obliga a conectar lo que las personas saben con los artefactos organizacionales que permiten que ese saber fluya, se comparta y se escale. Gestionar capital intelectual, entonces, supone identificar dónde reside, cómo se usa, de qué modo se protege y con qué mecanismos se multiplica su efecto en productividad, calidad, servicio e innovación. Observado así, deja de ser un concepto abstracto y se vuelve un portafolio de capacidades accionables que sustenta la estrategia: traducir conocimiento en ventaja competitiva repetible.",
            },

            // Imagen (referencia del material)
            {
              type: "image",
              src: "https://www.monempresarial.com/wp-content/uploads/2019/09/2.jpg",
              caption:
                "Capital intelectual: del conocimiento al desempeño organizacional.",
              alt: "Esquema conceptual de capital intelectual en la empresa",
              text: "",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "¿Por qué conviene fortalecer el capital intelectual? Porque habilita ciclos más rápidos de innovación, aprendizaje y respuesta al mercado. En su dimensión humana, impulsa que las personas generen y apliquen ideas con mayor asertividad; en lo relacional, consolida relaciones que abren y resguardan canales de distribución estratégicos; y, en lo estructural, promueve procesos, datos y tecnologías que vuelven repetible la calidad de la ejecución. En la práctica, esto se traduce en varias ventajas: la organización puede **cimentar ofertas innovadoras** y mantenerse a la vanguardia al incorporar avances tecnológicos con mayor velocidad; puede **responder con agilidad** a las oportunidades y **reducir riesgo comercial** al introducir nuevas propuestas con mejor entendimiento del cliente y del canal; y puede **cambiar la mentalidad** del personal, empoderando decisiones cercanas al trabajo, rompiendo barreras ideológicas y organizacionales, y resolviendo problemas con mayor rapidez. Estas palancas evitan el estancamiento y crean condiciones para que el conocimiento no solo se genere sino que se **aplique** allí donde produce valor. Desde RR. HH., fortalecer el capital intelectual exige orquestar selección y desarrollo con gestión del conocimiento, gobierno de datos, plataformas de colaboración y una arquitectura de procesos que documente, comparta y escale buenas prácticas. Si la empresa logra integrar estas piezas, el resultado se observa en indicadores tangibles: tiempo a productividad más corto, mayor tasa de transferencia del aprendizaje, reducción de retrabajos y mejoras sostenidas en satisfacción del cliente interno y externo.",
            },

            // Lista 1 — Beneficios clave (síntesis del material)
            {
              type: "list",
              style: "unordered",
              items: [
                "Impulsa ofertas innovadoras y facilita mantenerse a la vanguardia tecnológica.",
                "Acelera la respuesta a oportunidades y reduce riesgo comercial al introducir nuevas propuestas.",
                "Favorece un cambio de mentalidad: mayor poder de decisión, menos barreras y resolución ágil de problemas.",
              ],
              text: "",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "Gestionar capital intelectual también plantea retos. Las **barreras** típicas son la falta de trabajo en equipo, la escasa colaboración entre áreas y prácticas de inclusión deficientes que excluyen a participantes clave del flujo de conocimiento. Cuando estos factores están presentes, el saber se fragmenta, los aprendizajes se quedan en individuos o equipos aislados y la organización pierde velocidad para resolver problemas y adaptarse. Por eso, la estrategia para fortalecer el capital intelectual debe cuidar el ‘cuándo’ y el ‘cómo’: diseñar una hoja de ruta con prioridades, patrocinios, mecanismos de reconocimiento y herramientas que incentiven compartir, documentar y reutilizar. Algunas decisiones críticas incluyen: documentar procesos y lecciones aprendidas en repositorios vivos; crear comunidades de práctica; promover rotación intencional para amplificar el aprendizaje; y medir transferencia del conocimiento al puesto. En paralelo, es indispensable alinear la gestión del talento (atracción, inducción, desempeño, formación) con una arquitectura de **datos** y **tecnología** que asegure trazabilidad, seguridad y accesibilidad. Finalmente, conviene recordar que el capital intelectual se capitaliza en la ejecución: su valor se prueba cuando se traduce en mejores resultados —calidad, eficiencia, servicio, crecimiento— y en la capacidad de sostenerlos con personas que trabajan en entornos donde aprender y aportar es la norma. Sin ese puente entre conocimiento y acción, la inversión intelectual se diluye en iniciativas sin impacto.",
            },

            // Lista 2 — Pautas prácticas para medir/activar el capital intelectual (complemento)
            {
              type: "list",
              style: "ordered",
              items: [
                "Componentes a mapear: capital humano, capital económico de mercado (relacional) y capital estructural.",
                "Indicadores sugeridos: tiempo a productividad, tasa de transferencia del aprendizaje, reutilización de activos de conocimiento, cobertura de documentación crítica, índice de colaboración interáreas.",
                "Mecanismos: comunidades de práctica, repositorios de lecciones aprendidas, mentoring para transferencia tácita, tableros de mejora continua.",
                "Gobernanza: responsables por dominio de conocimiento, política de datos y cadencias de revisión (mensual/trimestral).",
                "Resultados esperados: reducción de retrabajos, mejoras en NPS interno/externo, innovación aplicada y resiliencia operativa.",
              ],
              text: "",
            },
          ],
        },
        {
          id: "8.6",
          numbering: "8.6",
          title: "ABC costing",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "El modelo de costos ABC (Activity‑Based Costing) asigna y distribuye los costos indirectos con base en las **actividades** realizadas por la organización o por un departamento en particular. En este enfoque, una ‘actividad’ es el conjunto de acciones que agrega valor al producto o servicio a lo largo del proceso, por lo que se convierte en la unidad mínima de análisis para entender dónde se consumen recursos y por qué. A diferencia de los esquemas tradicionales que reparten gastos generales de forma global, el ABC identifica **pools de costos** por actividad y define **cost drivers** (generadores de costo) que explican su comportamiento; con ello mejora la trazabilidad del gasto y habilita decisiones más finas sobre simplificación de procesos, rediseño de tareas, precios, mix de productos y prioridades de mejora. Aplicado a Recursos Humanos, el ABC permite conocer el costo real de servicios internos (reclutamiento, inducción, capacitación, administración de nómina, seguridad e higiene), relacionando horas, transacciones y complejidad con el valor generado para áreas usuarias. El propósito no es ‘contabilizar por contabilizar’, sino crear una visión causal de cómo se consumen los recursos para orientar la eficiencia sin deteriorar la calidad ni el cumplimiento. Esta lectura, sustentada en actividades, evita recortes lineales y favorece ajustes selectivos donde realmente hay desperdicio, además de exhibir el impacto de la variedad (de productos/servicios) sobre la estructura de costos. En síntesis: el ABC es un **método de gestión** que conecta procesos con costos y resultados, y que, bien implementado, se convierte en una ventaja para decidir con evidencia.",
            },

            // Lista 1 — Pasos prácticos para implementar ABC (complemento)
            {
              type: "list",
              style: "unordered",
              items: [
                "Mapea procesos y define actividades (nivel adecuado de granularidad).",
                "Crea pools de costos por actividad e identifica generadores de costo (cost drivers).",
                "Asigna costos indirectos a cada actividad según su driver; valida supuestos con datos.",
                "Calcula el costo por producto/servicio (o por ‘servicio de RR. HH.’) a partir del consumo de actividades.",
                "Itera: contrasta resultados con indicadores de calidad/servicio y ajusta drivers o granularidad.",
              ],
              text: "",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "Desde el punto de vista operativo, el material de la unidad explicita **actividades** típicas que el ABC ayuda a focalizar cuando el objetivo es reducir costos sin perder valor: homologar productos, negociar precios, clasificar proveedores, recibir materiales, planificar la producción, expedir pedidos, facturar, cobrar y diseñar nuevos productos, entre otras. Retener esta lista no es un ejercicio teórico: permite distinguir dónde se concentran esfuerzos y variabilidad, y qué mejoras son viables (automatización, estandarización, eliminación de pasos redundantes, etc.). Asimismo, el documento identifica **procesos** usualmente impactados por la lógica ABC: procesos (core), compras, ventas, finanzas, personal, planeación e investigación y desarrollo. Cuando RR. HH. incorpora esta mirada, puede cuantificar —por ejemplo— cuánto cuesta cubrir una vacante por familia de puestos (consumo de actividades de reclutamiento y selección), o cuál es el costo de inducir a un grupo de ingreso (actividades de onboarding), y contrastar ese costo con la **calidad** y la **oportunidad** del servicio provisto. Este marco evita debates abstractos al convertir la conversación en causalidad y evidencia. En términos metodológicos, el orden correcto es: i) describir con precisión las actividades; ii) medir su frecuencia y carga; iii) identificar el driver más explicativo; iv) asignar costos; y v) decidir sobre rediseño, automatización o tercerización. Con este ciclo, el ABC deja de ser un tablero contable y se vuelve palanca de mejora continua.",
            },

            // Imagen (apoyo visual)
            {
              type: "image",
              src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
              caption:
                "De actividades a costos: del mapeo al análisis de drivers.",
              alt: "Tablero analítico y gráficos que ilustran asignación de costos por actividades",
              text: "",
            },

            // Lista 2 — Errores comunes y métricas útiles (complemento)
            {
              type: "list",
              style: "ordered",
              items: [
                "Evita drivers poco causales (p. ej., ‘% de ventas’) cuando la carga proviene de variabilidad o retrabajo.",
                "No sobrerrepresentes actividades: demasiada granularidad eleva costo de medición sin valor adicional.",
                "Incluye capacidad ociosa/útil para no distorsionar decisiones (dimensionamiento y SLAs).",
                "Conecta costos con calidad y servicio: mide tiempos de ciclo, retrabajos, satisfacción interna y cumplimiento.",
                "Para RR. HH.: costo por contratación, costo por hora de formación efectiva, costo por colaborador atendido y costo de nómina procesada con cero incidencias.",
              ],
              text: "",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "Una implementación creíble de ABC requiere estándares y consistencia. El material insiste en que actividades y procesos deben ser **homogéneos** para medirlos con criterios operativos comparables; traducido a la práctica: define con claridad qué incluye cada actividad, documenta el método de medición, establece periodos de observación y valida la confiabilidad de las fuentes (sistemas, muestreos, bitácoras). La homogeneidad evita que los costos ‘se muevan’ por cambios en definiciones y no por mejoras reales. Asimismo, conviene alinear ABC con el gobierno de datos de la organización (responsables, cadencias, controles) y con los tableros de gestión (BSC u otros), de modo que la discusión sobre costos siempre aparezca junto a **calidad**, **seguridad**, **servicio** y **productividad**. En RR. HH., el valor del ABC se ve cuando ayuda a responder preguntas concretas: ¿qué actividad encarece la cobertura de vacantes?, ¿qué driver explica mejor el esfuerzo de capacitación (número de grupos, horas alumno, complejidad del contenido)?, ¿qué parte de la carga de nómina proviene de incidencias evitables? El objetivo es decidir con datos dónde simplificar, qué automatizar, qué consolidar o qué tercerizar, cuidando el clima y la experiencia del cliente interno. En síntesis, el ABC no es un fin en sí mismo: es un método para **racionalizar** la estructura de costos y **elevar** la efectividad, siempre que se sostenga en mediciones estables, drivers causales y un diálogo continuo con los responsables de proceso.",
            },
          ],
        },
        {
          id: "8.7",
          numbering: "8.7",
          title: "Mandamientos Kaizen",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "La filosofía Kaizen centra su propuesta en la mejora continua de los procesos de gestión para eliminar ineficiencias y elevar la calidad de los resultados. Trasladada a la Administración de Recursos Humanos (RR. HH.), su promesa es clara: mejores procesos y servicios, con estándares explícitos y aprendizaje constante. Kaizen no se limita a grandes proyectos; su potencia reside en pequeños cambios sostenidos que, encadenados, corrigen causas raíz y fortalecen la disciplina operativa. La calidad, recuerda el material, se asocia con la capacidad de las personas para ejecutar tareas conforme a las especificaciones del sistema de producción; por ello, RR. HH. actúa como habilitador de competencias, hábitos y condiciones que hacen posible el desempeño. Al adoptar los mandamientos Kaizen, las organizaciones no solo incrementan la participación de las personas, sino que también establecen objetivos concretos y medibles en función de la estandarización requerida en cada fase del proceso. Desde esta perspectiva, Kaizen es una forma de trabajar: observar el flujo, identificar desperdicios (retrabajo, esperas, sobre‑proceso), experimentar soluciones simples y normalizar lo que funciona. El resultado buscado es doble: procesos más cortos y estables, y personas más involucradas porque entienden el ‘por qué’, el ‘qué’ y el ‘cómo’ de las mejoras. De aquí se deriva una gobernanza práctica: metas claras, ciclos breves de revisión y evidencias que permitan verificar si la mejora se sostiene en el tiempo.",
            },

            // Acordeón 1 — Mandamientos Kaizen (del material)
            {
              type: "accordion",
              header: "Los 10 mandamientos Kaizen (síntesis del PDF)",
              open: false,
              text:
                "• Abre tu mente para cambiar.  \n" +
                "• Piensa “Sí puedo, si …”.  \n" +
                "• Siempre ataca a los procesos, no a las personas.  \n" +
                "• Busca soluciones sencillas.  \n" +
                "• Si está roto y arreglarlo.  \n" +
                "• Utilice la creatividad, no el capital.  \n" +
                "• Los problemas son oportunidades disfrazadas.  \n" +
                "• Corregir la causa raíz: pregunta “por qué” cinco veces (en lugar de quién).  \n" +
                "• La sabiduría de muchos es mejor que el conocimiento de uno.  \n" +
                "• No hay un destino final en el viaje.",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "Los mandamientos anteriores funcionan como heurísticos de comportamiento para orientar la mejora en el día a día. ‘Ataca procesos, no personas’ previene la culpabilización y enfoca la energía en el diseño del trabajo; ‘soluciones sencillas’ exige eliminar complejidad superflua antes de invertir en tecnología; ‘creatividad antes que capital’ evoca la obligación de experimentar con recursos disponibles; y el ‘por qué x5’ evita tratamientos superficiales. En RR. HH., la traducción operativa implica revisar prácticas con lentes Kaizen: reclutamiento (reducir esperas entre etapas y errores de traspaso), inducción (estandarizar checklists 30‑60‑90), desempeño (feedback breve y frecuente), capacitación (cerrar ciclos con transferencia al puesto) y seguridad/higiene (inspecciones tipo gemba con acción inmediata). Kaizen también requiere marcos de participación: círculos de mejora, tableros visuales y rutinas de resolución de problemas que integren a quienes ejecutan el trabajo. El criterio es inequívoco: mejora que no se ve en calidad, seguridad, servicio o costo es activismo; para evitarlo, cada cambio debe venir con una métrica, un responsable y una cadencia de revisión. En paralelo, RR. HH. sostiene la cultura: forma a líderes en hábitos de observación, preguntas y coaching, reconoce contribuciones y asegura que lo estandarizado se mantenga vivo. Con ello, Kaizen se convierte en un sistema de aprendizaje continuo que alinea metas, comportamientos y resultados tangibles.",
            },

            // Acordeón 2 — Guía práctica Kaizen en RR. HH. (complemento)
            {
              type: "accordion",
              header: "Cómo aplicar Kaizen en RR. HH.: guía de 6 pasos",
              open: false,
              text:
                "1) Define el problema con datos (tiempos de ciclo, retrabajos, incidencias).  \n" +
                "2) Observa donde sucede el trabajo (gemba) y mapea el flujo.  \n" +
                "3) Ejecuta ‘por qué x5’ y separa causa de síntoma; genera contramedidas simples.  \n" +
                "4) Pilota en pequeño (PDCA) con checklists/estándares provisionales.  \n" +
                "5) Normaliza lo que funciona (estándar visual) y capacita al equipo.  \n" +
                "6) Mide sostenibilidad (calidad, seguridad, servicio, costo) y reinicia el ciclo.",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "Para que Kaizen sea creíble, la medición debe descansar en estándares consistentes. El material subraya que actividades y procesos han de ser homogéneos para medirlos con eficiencia; traducido a la práctica: define con precisión el alcance de cada proceso, sus entradas/salidas y los criterios de aceptación, y mantén estable la forma de medir para distinguir mejoras reales de variaciones por cambio de definición. Además, la guía del documento invita a formular preguntas que alinean mentalidad y acción: ¿por qué mejorar siempre?, ¿qué no es perfecto aún?, ¿qué estoy dispuesto a cambiar o a no repetir?, ¿cómo lograr las mejoras necesarias y disfrutar del proceso?, ¿puedo ejecutar la solución elegida? Estas preguntas permiten sostener el ciclo de mejora con propósito y disciplina. En términos de gobierno, conviene vincular cada iniciativa a un tablero donde convivan métricas de calidad, seguridad, servicio y costo, con responsables y cadencias de revisión mensuales o trimestrales. Igualmente, es clave cuidar el impacto humano: involucrar a quienes realizan el trabajo, reconocer avances, gestionar la carga y proteger el conocimiento estándar para que la mejora no dependa de héroes sino del sistema. En síntesis: Kaizen es una forma de operar la organización; su éxito se mide por mejoras observables y sostenibles, y por la capacidad de aprender y estandarizar sin perder agilidad.",
            },
          ],
        },
        {
          id: "8.8",
          numbering: "8.8",
          title: "Ocho principios de liderazgo",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "El liderazgo ocupa un lugar decisivo en la Administración de Recursos Humanos (ARH) porque actúa como bisagra entre la estrategia y el trabajo cotidiano. En la práctica, el líder es quien comunica con claridad la importancia de cumplir los objetivos empresariales, alinea prioridades y moviliza a las personas para que esas metas se vuelvan resultados. Por ello, su función no se agota en dirigir: también es agente de cambio, promueve la motivación, canaliza actitudes y capacidades, y crea condiciones donde el desarrollo individual y colectivo sea posible. Esta mirada humanista reconoce que las personas dan vida a la organización y que su participación determina el éxito o fracaso; de ahí que la dirección de RR. HH. deba ejercer un liderazgo explícito, capaz de vincular políticas, procesos y decisiones con los fines de la empresa. En tal contexto, los ocho principios de liderazgo que revisa esta unidad condensan criterios de actuación que refuerzan la dignidad humana y la responsabilidad por resultados. No se trata de ‘mandamientos’ decorativos, sino de guías prácticas para decidir y comportarse: comenzar por la persona y su ejemplo, privilegiar la influencia por encima de la autoridad, escuchar con la misma maestría con la que se comunica, cultivar sabiduría antes que la mera inteligencia, aprender a seguir para poder guiar, crear estabilidad mientras se impulsa el cambio, empoderar a otros compartiendo poder y actuar con coraje. Integrados al sistema de gestión, estos principios dan consistencia al día a día, evitan arbitrariedades y sostienen culturas donde la exigencia convive con el respeto.",
            },

            // Acordeón 1 — Los 8 principios (síntesis y aplicación)
            {
              type: "accordion",
              header:
                "Los ocho principios de liderazgo (síntesis y cómo aplicarlos)",
              open: false,
              text:
                "1) **Comienza con la persona**: lidera desde el ejemplo; alinea conducta con valores.  \n" +
                "2) **Influencia > autoridad**: persuade con propósito y evidencia; evita el mando vacío.  \n" +
                "3) **Escuchar y comunicar**: alterna escucha activa con mensajes claros y verificables.  \n" +
                "4) **Sabiduría > inteligencia**: decide con juicio, contexto y consecuencias.  \n" +
                "5) **Aprende a seguir**: identifica referentes, practica humildad y reciprocidad.  \n" +
                "6) **Estabilidad y cambio**: asegura estándares mientras habilitas mejoras.  \n" +
                "7) **Empodera a otros**: delega con criterios, da autonomía y responsabilidades reales.  \n" +
                "8) **Coraje**: afronta decisiones difíciles con transparencia y cuidado.",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "Aplicar estos principios en RR. HH. exige traducirlos a rutinas observables. Empezar por la persona implica cultivar coherencia: que el líder recorra el camino que quiere que su equipo recorra, porque la autoridad moral nace del ejemplo. La primacía de la influencia sobre la autoridad se materializa en conversaciones de calidad, establecimiento de expectativas claras y acuerdos medibles; escuchar tanto como comunicar reduce ruido, previene errores de coordinación y eleva la confianza. El énfasis en la sabiduría recuerda que el buen juicio integra datos, contexto y consecuencias; por eso, el líder evita dogmas y decide con trazabilidad. Aprender a seguir desarrolla humildad y respeto por la experiencia, habilidades cruciales para construir colaboración. La dualidad estabilidad‑cambio se resuelve con una gobernanza simple: estándares vivos para operar hoy y experimentos controlados para mejorar mañana. Empoderar a otros significa transferir poder con criterios (mandato, límites, métricas) para multiplicar la capacidad de decisión donde ocurren las tareas; y el coraje se expresa al abordar conflictos, proteger la dignidad y sostener el rumbo cuando hay presión. En conjunto, los principios se integran a procesos de ARH —selección, inducción, desempeño, formación, seguridad— dando forma a un liderazgo que habilita resultados, aprendizaje y confianza. Cuando el líder se pone al servicio del potencial de los demás, el sistema de trabajo gana velocidad y sentido.",
            },

            // Acordeón 2 — Guía de implementación y métricas (complemento)
            {
              type: "accordion",
              header:
                "Cómo llevarlos a la práctica (hábitos y métricas útiles)",
              open: false,
              text:
                "**Hábitos clave**  \n" +
                "• Check‑ins quincenales 1:1 (escucha + acuerdos).  \n" +
                "• Reglas explícitas de delegación (mandato, límites, cadencia).  \n" +
                "• Rituales de aprendizaje (retro, lecciones aprendidas, reconocimiento).  \n" +
                "**Métricas sugeridas**  \n" +
                "• % objetivos claros por rol; tasa de acuerdos cumplidos.  \n" +
                "• NPS interno del liderazgo; rotación voluntaria temprana.  \n" +
                "• Cobertura de feedback (trimestral); % acciones de desarrollo completadas.  \n" +
                "**Antipatrones**  \n" +
                "• Autoridad sin evidencia; feedback esporádico; delegación sin criterio; tolerar faltas de respeto.",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "La perspectiva filosófica que inspira estos principios entiende el liderazgo como un servicio. No se orienta a conducir ciegamente a otros tras la visión del líder, sino a ayudar a cada persona a conducirse hacia su propia visión y objetivos, con acompañamiento de quien ya recorrió ese camino y puede despertar potencial. En términos organizacionales, esto se traduce en prácticas que equilibren exigencia y cuidado: establecer estándares y objetivos desafiantes, sí, pero también proveer recursos, feedback y protección frente a la ambigüedad. Comunicar la relevancia de las metas del negocio, propiciar estructuras flexibles y canalizar capacidades individuales hacia un propósito común son tareas cotidianas del liderazgo en RR. HH. Desde esta ética, empoderar a otros no es ceder control indiscriminadamente, sino compartir poder para multiplicar capacidades y asegurar estabilidad mientras se impulsa el cambio. Exigir coraje significa abordar decisiones difíciles con transparencia: enfrentar conflictos, decir ‘no’ a prácticas nocivas y sostener el interés de largo plazo. El efecto acumulado es un entorno donde las personas comprenden el ‘por qué’ y el ‘cómo’ de su trabajo, se sienten escuchadas y tienen margen para contribuir con juicio. Cuando esos comportamientos se vuelven norma, la cultura se vuelve más confiable, la coordinación mejora y los resultados —productividad, calidad, servicio— se sostienen en el tiempo. Así, los ocho principios dejan de ser enunciados abstractos y se convierten en la arquitectura práctica del liderazgo cotidiano.",
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
            "Sans Zapata, M. — ¿Qué es el coaching? Orígenes, metodologías y principios https://dialnet.unirioja.es/servlet/articulo?codigo=4817930",
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
            "Westreicher, G. (2020, 1 de agosto). Gestión. Economipedia. Recuperado de: https://economipedia.com/definiciones/gestion.html",
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
