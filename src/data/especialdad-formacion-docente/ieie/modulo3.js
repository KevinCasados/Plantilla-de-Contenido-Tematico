/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "EFD", // Especialidad en Formación Docente
  courseId: "EFD-IEIE",
  id: "EFD-IEIE-mod3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Implicaciones Educativas de la Inteligencia Emocional",
  title:
    "Módulo 3. La teoría de las inteligencias múltiples y sus implicaciones en la educación",
  semestre: "Segundo semestre",
  teacher: "Dra. Rosa Dianeth Hernández Aguilera",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar la teoría de las inteligencias múltiples así como su implicación en la educación.",
  competencies: [
    // Declarada en el PDF
    "Identificar la teoría de las inteligencias múltiples y sus matices para aplicarla a la práctica profesional.",
    // Derivadas del contenido temático señalado en la unidad
    "Explicar el crecimiento natural de la inteligencia y sus implicaciones educativas.",
    "Describir las etapas del desarrollo y relacionarlas con el aprendizaje escolar.",
    "Argumentar la necesidad de evaluar la inteligencia y los aprendizajes en contextos educativos.",
    "Proponer estrategias para entrenar o fortalecer inteligencias específicas en el aula.",
    "Diseñar intervenciones didácticas que consideren la pluralidad de inteligencias del alumnado.",
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
      id: "2",
      numbering: "Unidad 2",
      title:
        "La teoría de las inteligencias múltiples y sus implicaciones en la educación",
      content: [
        {
          type: "paragraph",
          text: "El diseño curricular es el proceso sistemático mediante el cual una institución define, organiza y articula los aprendizajes que desea lograr, así como las experiencias, recursos y evaluaciones que los harán posibles. No se reduce a un documento programático, sino que constituye un entramado de decisiones pedagógicas, epistemológicas, éticas y organizativas que dan coherencia a toda la experiencia formativa. Entre sus rasgos centrales destacan la pertinencia (responder a necesidades sociales y del estudiantado), la coherencia interna (alineación entre fines, contenidos, metodologías y evaluación), la viabilidad (factibilidad en tiempo, recursos y normativa) y la flexibilidad (capacidad de adaptación a contextos y a la diversidad). Asimismo, el diseño curricular contemporáneo integra enfoques por competencias, inclusión y accesibilidad, evaluación auténtica, integración de tecnologías y énfasis en el desarrollo socioemocional. Entendido así, el currículo deja de ser un listado de temas y deviene un mapa de aprendizaje centrado en el desarrollo de capacidades transferibles para la vida, el trabajo y la ciudadanía. Esta unidad examina dichas características, sus implicaciones didácticas y los criterios que permiten diagnosticar, mejorar y asegurar la calidad del currículo en contextos reales.",
        },
        {
          type: "paragraph",
          text: "La pertinencia curricular exige vincular los resultados de aprendizaje con problemas y demandas auténticas del entorno, sin perder el horizonte formativo de largo plazo. Para ello se triangula información proveniente de marcos normativos, tendencias disciplinares, expectativas de empleadores/comunidades y proyectos de vida del estudiantado. La pertinencia también es temporal (actualización), cultural (reconocimiento de identidades y saberes locales), territorial (contexto regional) y ética (impacto social). En la práctica, se expresa en perfiles de egreso claros, desagregados en competencias observables y medibles que se rastrean a lo largo del plan de estudios. La congruencia entre esas competencias y las experiencias de aprendizaje requiere matrices de alineación constructiva que aseguren que cada actividad aporta evidencias válidas del logro. Un currículo pertinente reconoce brechas de acceso y propone medidas de nivelación y apoyos (tutorías, recursos accesibles, rutas diferenciadas), de modo que el punto de partida no determine el punto de llegada. Evaluar la pertinencia no es un acto único, sino un ciclo continuo de recopilación y análisis de datos (desempeño, inserción, satisfacción, retroalimentación de stakeholders) para realimentar decisiones.",
        },
        {
          type: "paragraph",
          text: "La coherencia interna del diseño curricular se verifica cuando existe alineación vertical (de perfiles institucionales a resultados de curso) y horizontal (entre asignaturas del mismo nivel), evitando redundancias improductivas o vacíos formativos. Esta coherencia descansa en mapas de competencias y de contenidos que explicitan progresiones (de lo básico a lo complejo) y relaciones entre áreas (inter/multidisciplinariedad). La didáctica elegida debe ser consistente con la naturaleza de los resultados: si se busca resolución de problemas, se privilegian metodologías activas (ABP, estudio de casos, simulaciones); si se espera comunicación académica, se entrenan géneros discursivos y retroalimentación formativa. La evaluación, por su parte, se define antes de la instrucción: se diseñan rúbricas y tareas auténticas que evidencien el desempeño esperado y orienten la enseñanza. La coherencia también es documental (sílabos, guías, criterios) y operativa (calendarios, cargas, secuencias), y se expresa en una gobernanza clara (comités curriculares con roles y flujos de decisión). Cuando esta coherencia falta, el aprendizaje se fragmenta; cuando se cuida, se potencia la transferencia y se reduce la carga cognitiva innecesaria.",
        },
        {
          type: "paragraph",
          text: "La flexibilidad y la inclusividad son rasgos indispensables en currículos contemporáneos. La flexibilidad admite rutas formativas, optativas, reconocimientos de saberes previos, modalidades combinadas (presencial/virtual) y ajustes razonables ante necesidades específicas. Desde el Diseño Universal para el Aprendizaje (DUA), el currículo ofrece múltiples medios de representación (materiales diversos y accesibles), de acción/expresión (formatos de evidencia alternativos) y de implicación (estrategias motivacionales diferenciadas). La inclusividad implica remover barreras para el aprendizaje y la participación: lenguaje claro, accesibilidad digital, recursos adaptados y evaluación justa. La flexibilidad no es improvisación; se gobierna con reglas explícitas para asegurar equidad y estándares. Las tecnologías, bien integradas, expanden esta flexibilidad (objetos interactivos, analítica de aprendizaje para retroalimentación oportuna), pero requieren criterios de selección (valor pedagógico, privacidad, sostenibilidad). La atención a la diversidad cultural y lingüística enriquece la experiencia: ejemplos, casos y proyectos se contextualizan, y se promueve el trabajo con comunidades para que el aprendizaje tenga sentido y repercusión real.",
        },
        {
          type: "paragraph",
          text: "La factibilidad y la mejora continua completan el cuadro de características. Un diseño curricular valioso pero impracticable fracasa en la implementación; de ahí la importancia del costeo, la planeación de cargas docentes/estudiantiles, la disponibilidad de recursos (laboratorios, bibliografía, tecnología) y la capacitación del profesorado. La fase piloto, con monitoreo y evaluación, permite ajustar antes del despliegue total. La mejora continua se estructura como un ciclo: planificar (diagnóstico y objetivos), implementar (docencia y recursos), evaluar (evidencias de aprendizaje, indicadores de eficiencia y satisfacción), actuar (ajustes curriculares y de soporte). Los mecanismos de aseguramiento (acreditación, auditorías internas, revisión por pares externos) agregan una mirada crítica y comparativa. La cultura de datos es clave: se definen indicadores, se recogen sistemáticamente y se comparten con transparencia para sostener decisiones. Finalmente, la participación de estudiantes, egresados y empleadores en la gobernanza curricular legitima los cambios y mantiene al currículo vivo, conectado con la realidad y con el proyecto educativo institucional.",
        },

        {
          type: "accordion",
          header: "Tres niveles del diseño curricular (macro, meso y micro)",
          open: false,
          items: [
            {
              title: "Nivel macro (estratégico-institucional)",
              text: "Define misión, perfil de egreso, políticas de evaluación y líneas formativas; estructura el mapa de competencias y los resultados de programa; establece estándares de calidad, criterios de acceso y mecanismos de aseguramiento. Productos típicos: perfil de egreso, plan de estudios, política de evaluación, lineamientos DUA y de integridad académica.",
            },
            {
              title: "Nivel meso (plan/área/ciclo)",
              text: "Alinea asignaturas, evita redundancias y vacíos, secuencia progresiones, define cargas y prerequisitos, y establece articulaciones interdisciplinarias. Productos típicos: matrices de alineación, mapas de contenidos/competencias por semestre, itinerarios/optativas, calendarios, criterios comunes de evaluación y rúbricas compartidas.",
            },
            {
              title: "Nivel micro (asignatura/aula)",
              text: "Diseña experiencias y evidencias: resultados de aprendizaje del curso, actividades activas, recursos accesibles, evaluación auténtica y retroalimentación oportuna. Productos típicos: programa/sílabo con RAs claros, secuencias didácticas, rúbricas, guías de trabajo, objetos digitales y plan de mejora con base en datos del curso.",
            },
          ],
          text: "",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "2.1",
          numbering: "2.1",
          title: "El crecimiento natural de la inteligencia",
          content: [
            {
              type: "paragraph",
              text: "Este apartado introduce la noción de inteligencia como una habilidad general presente en todos los individuos, en diferentes grados, íntimamente vinculada con la resolución eficaz de problemas y con la adaptación a demandas del entorno. En el marco de la unidad, el crecimiento natural de la inteligencia se comprende mejor al observar cómo las personas aprenden a describir, explicar y predecir su realidad, y cómo esa competencia se consolida mediante la práctica y la interacción con contextos educativos significativos. Desde la tradición psicopedagógica, se reconoce que la inteligencia ha sido medida por la psicología con pruebas que, aplicadas responsablemente, ofrecen estimaciones fiables del rendimiento escolar futuro; sin embargo, su interpretación requiere criterio pedagógico para no reducir la complejidad del constructo a un único puntaje. El módulo ubica este tema como el primero de cinco núcleos: además del crecimiento natural, se revisan etapas del desarrollo, la necesidad de evaluar, el entrenamiento de inteligencias específicas y la integración de la pluralidad de inteligencias en la escuela, lo que ayuda a situar este contenido en un mapa conceptual de progresión. En suma, el crecimiento natural de la inteligencia no es un fenómeno estático ni un don inmutable, sino un potencial que, sin perder su base individual, es moldeado por experiencias culturales, por las oportunidades de aprendizaje y por la calidad de la mediación docente. Reconocerlo así permite orientar la enseñanza hacia retos graduales, feedback formativo y tareas auténticas que activen procesos de comprensión, transferencia y autorregulación, en lugar de centrarse exclusivamente en el desempeño inmediato en pruebas estandarizadas. ",
            },
            {
              type: "accordion",
              header: "Pistas clave para comprender el “crecimiento natural”",
              open: false,
              text:
                "• Potencial distribuido: la inteligencia aparece en todos con diferente grado y se expresa primero como competencia para resolver problemas cotidianos y académicos.  \n" +
                "• Medición responsable: las pruebas psicológicas estiman con fiabilidad ciertos desempeños futuros, pero deben leerse como insumos para decisiones pedagógicas, no como etiquetas fijas.  \n" +
                "• Secuencia en el módulo: este tema prepara etapas del desarrollo, evaluación, entrenamiento específico y gestión de la pluralidad de inteligencias en el aula.",
            },
            {
              type: "paragraph",
              text: "Comprender el crecimiento natural también supone aceptar que el concepto de inteligencia ha evolucionado: de una visión unitaria, altamente asociada al éxito en pruebas y al razonamiento lógico, hacia perspectivas que la pluralizan y contextualizan. Esto no niega el valor de las mediciones; más bien llama a interpretarlas a la luz del desarrollo humano y de metas educativas amplias. En la práctica, la inteligencia se robustece cuando el estudiante enfrenta problemas auténticos, explica sus estrategias, conecta ideas nuevas con previas y recibe retroalimentación oportuna. El docente, por su parte, favorece el crecimiento cuando crea situaciones de andamiaje, proporciona vocabulario conceptual y promueve la metacognición: qué sé, cómo lo sé y qué haré para aprender mejor. Además, el crecimiento es sensible a la cultura escolar: expectativas altas, tiempo para pensar, evaluación formativa y oportunidades para mostrar el aprendizaje en productos con sentido. Finalmente, ubicar este tema como puerta de entrada de la unidad es estratégico: prepara al estudiante para analizar cómo las etapas del desarrollo condicionan la manifestación de la inteligencia, por qué y para qué evaluarla, de qué maneras entrenarla (según perfil) y cómo integrar su diversidad en el aula. Esta ruta evita falsas disyuntivas (o pruebas o desarrollo; o general o específico) y propone una síntesis: una inteligencia que crece porque se nutre de experiencias, se evalúa con propósito y se entrena de manera situada en tareas significativas. ",
            },
            {
              type: "accordion",
              header: "Del concepto a la acción pedagógica",
              open: false,
              text:
                "• Tareas con transferencia: problemas del mundo real que exijan explicar, justificar y generalizar (no solo repetir).  \n" +
                "• Retroalimentación formativa: comentarios ligados a criterios y siguientes pasos específicos.  \n" +
                "• Altas expectativas: tiempo para pensar, lenguaje académico explícito y revisión iterativa del trabajo.",
            },
          ],
        },

        {
          id: "2.2",
          numbering: "2.2",
          title: "Etapas del desarrollo",
          content: [
            {
              type: "paragraph",
              text: "Situar la inteligencia en la trayectoria vital exige comprender el desarrollo cognitivo. Con base en Piaget y la psicología evolutiva, el material recuerda que el pensamiento cambia cuantitativa y cualitativamente conforme avanza la edad. Durante el estadio sensoriomotor (0–2 años), la actividad mental se centra en la experiencia inmediata y en la exploración de objetos; la manipulación y la coordinación motriz permiten organizar percepciones y construir las primeras categorías. Al emerger el lenguaje, el pensamiento da un salto: las palabras simbolizan objetos y acciones, y entre los 3 y 6 años aparece el llamado “pensamiento mágico”, con dificultades para adoptar otras perspectivas. Hacia los 6 años, los niños comprenden operaciones lógicas concretas y, más adelante, en la adolescencia, se desarrolla el pensamiento analítico y la capacidad de formular conclusiones generales a partir de casos particulares, con mayor flexibilidad y criticidad. Además de las etapas, conviene mirar áreas del desarrollo —psicomotor, lenguaje, intelectual y socioafectivo— porque orientan decisiones de enseñanza: detectar si el estudiante está listo para ciertos aprendizajes, si requiere apoyos o un programa alternativo. En suma, etapas y áreas no son etiquetas rígidas, sino marcos para ajustar el diseño didáctico, reconocer diferencias individuales y articular la progresión de contenidos con la progresión del pensamiento. ",
            },
            {
              type: "accordion",
              header: "Etapas según Piaget (síntesis operativa)",
              open: false,
              text:
                "• Sensoriomotor (0–2): pensamiento ligado a acción/percepción; exploración de objetos y coordinación sensorio-motriz.  \n" +
                "• Preoperatorio (~2–6): simbolización mediante lenguaje; pensamiento egocéntrico y “mágico”.  \n" +
                "• Operaciones concretas y formales (~6–adolescencia): lógica sobre lo concreto; luego análisis, abstracción y flexibilidad.",
            },
            {
              type: "paragraph",
              text: "Para el aula, el valor de las etapas reside en orientar el tipo de experiencias que ofrecer. En edades tempranas, el énfasis en manipulación, juego y lenguaje nutre la formación de categorías y símbolos; en primaria, las tareas deben conectar lo concreto con reglas lógicas (clasificar, medir, comparar, justificar); en secundaria, conviene introducir proyectos con hipótesis, variables y evidencia, abriendo espacio a la discusión y al pensamiento crítico. Complementariamente, los docentes pueden monitorear las cuatro áreas del desarrollo para decidir “cuándo” y “cómo” intensificar ciertos desafíos cognitivos o socioemocionales. Así, un alumno con avance psicomotor notable y lenguaje emergente quizá requiera más mediación verbal y menos abstracción temprana; uno con fuerte desarrollo socioafectivo puede asumir roles de tutoría entre pares. Este enfoque evita el uso normativo de las etapas y las convierte en una brújula para diferenciar la enseñanza. La inteligencia, entendida como capacidad de aprender, interpretar y actuar, se despliega a través de esas etapas y áreas, por lo que enseñar “a destiempo” suele traducirse en carga cognitiva excesiva o en tareas subestimulantes. La meta es diseñar experiencias que se sitúen en la zona de desarrollo próxima del estudiante y crezcan con él, sumando lenguaje académico, organización del pensamiento y metas de autorregulación. ",
            },
            {
              type: "accordion",
              header: "Áreas del desarrollo a considerar en el aula",
              open: false,
              text:
                "• Psicomotor: habilidades gruesas y finas que habilitan exploración y manipulación significativa.  \n" +
                "• Lenguaje/Intelectual: vocabulario, estructuras y razonamiento; base para explicar, justificar y generalizar.  \n" +
                "• Socioafectivo: regulación emocional, cooperación y pertenencia; personalidad en relación con otros.",
            },
          ],
        },

        {
          id: "2.3",
          numbering: "2.3",
          title: "La necesidad de evaluar",
          content: [
            {
              type: "paragraph",
              text: "El texto subraya que la evaluación ha sido necesaria para otorgar certeza a las teorías y para orientar decisiones en educación. Más que un evento aislado, se concibe como un recurso que provee información sobre procesos, la cual debe valorarse para tomar decisiones fundadas por parte de quienes enseñan o gobiernan los sistemas educativos. En el plano del aula, la evaluación de alumnos implica valorar conocimientos en dimensiones específicas y contrastarlos con criterios u objetivos deseables; por ello, evalúa no solo el grado de cambio en la conducta o en el desempeño, sino la adecuación de esos resultados a referentes de calidad. Hecha con sentido formativo, la evaluación fortalece aprendizajes y constata logros de objetivos; además, ayuda a identificar necesidades prioritarias y a asegurar congruencia entre saber y desempeño, condición indispensable para una educación de calidad. En síntesis, evaluar es generar evidencias útiles para mejorar la enseñanza, no un trámite para clasificar. Esta visión enlaza con la idea de que el crecimiento de la inteligencia, lejos de reducirse a un puntaje, se nutre de información de progreso, retroalimentación específica y ajustes didácticos oportunos. Por eso, la evaluación debe ser continua e integrarse al proceso, de la entrada a la salida del ciclo, combinando técnicas diversas (observación, desempeño, pruebas) y promoviendo la reflexión del estudiante sobre sus propios avances, dificultades y siguientes pasos, lo que convierte los datos en decisiones pedagógicas concretas. ",
            },
            {
              type: "accordion",
              header: "Funciones y alcances de la evaluación",
              open: false,
              text:
                "• Referencia a criterios: valorar la adecuación de resultados respecto de objetivos, no solo el cambio observado.  \n" +
                "• Fortalecer aprendizajes y metas: evidenciar logros y brechas para ajustar enseñanza.  \n" +
                "• Asegurar calidad: detectar necesidades prioritarias y alinear saber con desempeño.",
            },
            {
              type: "paragraph",
              text: "El documento enfatiza además que una evaluación congruente debe trascender el salón de clase y permear niveles de gestión, de modo que las decisiones de docentes, directivos y autoridades estén alineadas. Para ello, su práctica ha de concebirse como extensión del proceso de enseñanza-aprendizaje, continua y formativa, integrando múltiples evidencias y ofreciendo oportunidades de mejora. La evaluación que ilumina la enseñanza registra fortalezas, talentos y obstáculos individuales y grupales, enmarcándolos en un plan de acción con metas claras; también documenta el progreso en relación con aprendizajes clave del currículo. En términos de diseño, esto se traduce en instrumentos con criterios explícitos, tareas de desempeño (productos, proyectos, explicaciones orales), momentos de auto y coevaluación, y espacios para analizar resultados con estudiantes y familias. De esta forma, evaluar se convierte en el puente entre “lo que se quiere” y “lo que se logra”, cerrando la brecha con ajustes curriculares y didácticos informados. Finalmente, el material recuerda que la coherencia evaluativa requiere sostenerse institucionalmente: los hallazgos deben escalar para mejorar prácticas, formación docente y políticas internas, evitando que la evaluación quede como un ejercicio aislado sin impacto real en la calidad de los aprendizajes. ",
            },
            {
              type: "accordion",
              header: "Orientaciones prácticas para una evaluación útil",
              open: false,
              text:
                "• Continuidad y variedad: observación, rúbricas, tareas auténticas y pruebas (evitar un único instrumento).  \n" +
                "• Retroalimentación accionable: comentarios vinculados a criterios y siguientes pasos.  \n" +
                "• Coherencia sistémica: escalar hallazgos a equipos y centro para ajustar planeaciones y apoyos.",
            },
          ],
        },
        {
          id: "2.4",
          numbering: "2.4",
          title: "¿Cómo entrenar la inteligencia específica?",
          content: [
            {
              type: "paragraph",
              text: "Entrenar una inteligencia específica no significa forzar a todos por el mismo carril, sino identificar ventanas de oportunidad y ofrecer experiencias deliberadas para que cada perfil se expanda con tareas auténticas. El documento subraya que la estimulación temprana es clave: los primeros seis años optimizan la asimilación de estímulos variados, lo que ayuda a evitar la primacía rígida de una sola inteligencia y a potenciar el conjunto. Desde el aula, esto se traduce en secuencias que integren expresión verbal, reflexión emocional, retos lógicos, exploración corporal y trabajo con imágenes y espacio. De forma concreta, se propone reforzar la inteligencia lingüística-verbal mediante escritura creativa y lectura grupal interactiva; la corporal-cinestésica, con dramatizaciones, juegos motores y danza. Estas acciones no son adorno: anclan el aprendizaje en contextos significativos y desarrollan destrezas transferibles a otras áreas del currículo.",
            },
            {
              type: "accordion",
              header:
                "Guía de entrenamiento por inteligencia (síntesis del PDF)",
              open: false,
              text:
                "Lingüística-verbal: escritura creativa, lectura en voz alta, debates y microclases impartidas por el alumnado. \n" +
                "Corporal-cinestésica: obras de teatro, dramatizaciones, juegos y ejercicios físicos planificados. \n" +
                "Lógico-matemática: acertijos, enigmas, juegos de cartas y retos de patrón-regla. \n" +
                "Musical: práctica instrumental/coral y juegos rítmicos. \n" +
                "Visuo-espacial: diseño, dibujo, fotografía, maquetas, rompecabezas y laberintos. \n" +
                "Intra e interpersonal: diarios reflexivos, reconocimiento emocional y dinámicas de empatía y cooperación.",
            },
            {
              type: "paragraph",
              text: "Para sostener el progreso, conviene planear ciclos de práctica con metas observables, variedad de formatos y evaluación formativa. En lo lógico-matemático, los problemas graduados y el juego estratégico entrenan la abstracción; la práctica musical cultiva percepción auditiva y regulación atencional. La inteligencia visuo-espacial se fortalece con retos de orientación, composición y lectura de gráficos; la intrapersonal e interpersonal, con tutoría entre pares, conversaciones estructuradas y proyectos colaborativos. El enfoque práctico del material insiste en construir oportunidades accesibles para todo el grupo, ampliando la visión de ‘ser inteligente’ más allá de lenguaje y matemáticas, y complementando áreas menos desarrolladas mediante las fortalezas ya presentes en cada estudiante.",
            },
            {
              type: "accordion",
              header: "Recomendaciones de implementación (plan y evaluación)",
              open: false,
              text:
                "Planifica un ciclo semanal con experiencias variadas para cada inteligencia; documenta evidencias (portafolios, diarios, prototipos, audios) y retroalimenta con criterios claros. \n" +
                "Crea ‘oportunidades para todos’ en cada sesión y evita que solo brillen las competencias tradicionales. \n" +
                "Diversifica tareas y mantén la dificultad óptima (zona de desarrollo próxima) para que las zonas menos fuertes se nutran a partir de las fortalezas existentes.",
            },
          ],
        },
        {
          id: "2.5",
          numbering: "2.5",
          title: "¿Cómo enfrentarse a la pluralidad de inteligencias?",
          content: [
            {
              type: "paragraph",
              text: "Enfrentar la pluralidad de inteligencias implica romper con la idea de una capacidad única y con su evaluación como vara universal. La tradición ha promovido un paradigma según el cual ‘se tiene o no se tiene’ inteligencia, reforzado por pruebas estandarizadas que clasifican al alumnado y condicionan trayectorias. Esta mirada reduccionista empobrece la planificación didáctica y la justicia educativa. La propuesta, en cambio, parte de reconocer múltiples vías de competencia: estudiantes y docentes pueden hacerse más hábiles en las ocho inteligencias, expandiendo el abanico de oportunidades; esto exige repensar organización de clase, criterios de logro, instrumentos de evaluación y comunicación con familias. La pluralidad no es relativismo: demanda intencionalidad metodológica, metas claras y evidencias de desempeño en productos, procesos y actitudes.",
            },
            {
              type: "accordion",
              header: "Principios de diseño didáctico para la pluralidad",
              open: false,
              text:
                "Crea un ‘ciclo planificado’ de experiencias que fomente cada inteligencia. \n" +
                "Garantiza oportunidades accesibles a todo el grupo y alterna formatos (oral, escrito, gráfico, corporal, musical, cooperativo, reflexivo). \n" +
                "La diversidad de tareas amplía la visión de la inteligencia y permite complementar zonas menos desarrolladas con las fortalezas existentes.",
            },
            {
              type: "paragraph",
              text: "Operativamente, la pluralidad se traduce en currículos flexibles, rúbricas multimodales y productos equivalentes en valor formativo (ensayo, maqueta, podcast, performance, proyecto de datos). Cuando la escuela ofrece oportunidades sistemáticas y una ecología variada de tareas, el alumnado encuentra más puntos de entrada al conocimiento. Conviene ampliar la visión más allá de matemáticas y lectura, articular experiencias con el resto de áreas y sostener ciclos que distribuyan oportunidades en el tiempo. La evaluación formativa, con devolución específica y criterios transparentes, hace visible el progreso en distintas inteligencias sin perder rigor. Aunque exista debate académico sobre la cientificidad de la teoría, su utilidad educativa es clara: orientar prácticas hacia la diversidad fortalece participación, motivación y equidad.",
            },
            {
              type: "accordion",
              header: "Criterios de evaluación y comunicación",
              open: false,
              text:
                "Define criterios por producto y por proceso; recoge evidencias multimodales y comunica el progreso con descriptores de desempeño observable. \n" +
                "Explica a familias y estudiantes cómo las tareas diversificadas mantienen el rigor académico y amplían la noción de logro más allá de pruebas tradicionales. \n" +
                "Escala hallazgos a nivel de equipo y centro para ajustar planeaciones, apoyos y acuerdos comunes.",
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
          href: "https://youtu.be/n9UCvjpkXIw", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Las Inteligencias Múltiples en la infancia y la educación — Video https://youtu.be/sat0UreNcNk",
            "IEIE-Sem3 — Video https://youtu.be/n9UCvjpkXIw",
            "Las inteligencias múltiples en el aula de clases — Artículo (Redalyc) https://www.redalyc.org/pdf/3761/376140372009.pdf",
            "Inteligencias múltiples: una innovación pedagógica para potenciar el proceso enseñanza-aprendizaje — Artículo (Redalyc) https://www.redalyc.org/pdf/658/65822264005.pdf",
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
            "Achenbach, T. M. (1991). Investigación Psicológica del Desarrollo: Conceptos, Estrategias y Métodos. México: Manual Moderno.",
            "Beltrán, Ll. J. & Bueno, J. (1995). Psicología de la educación. México: Alfa Omega.",
            "Bijou, S. W. & Baer, D. M. (1971). Psicología del Desarrollo infantil: Teoría empírica y sistemática de la conducta. México: Trillas.",
            "Bisquerra Alzina, R. (2009). Psicopedagogía de las emociones. Madrid: Síntesis.",
            "Buss, A. (1981). Psicología general. México: Limusa.",
            "Coll, C. (1990). Aprendizaje escolar y construcción del conocimiento. Madrid: Paidós.",
            "Craig, G. J. & Baucum, D. (2009). Desarrollo psicológico. México: Prentice Hall.",
            "Díaz Barriga Arceo, F. & Hernández Rojas, G. (1998). Estrategias docentes para un aprendizaje significativo. México: McGraw-Hill.",
            "Feldman, R. S. (2005). Psicología: con aplicaciones en países de habla hispana. México: McGraw-Hill.",
            "Fitzgerald, H. E., Strommen, E. A. & McKin-Ney, J. P. (1980). Psicología del desarrollo. México: Manual Moderno.",
            "Flavell, J. H. (1986). La psicología evolutiva de Jean Piaget. Buenos Aires: Paidós.",
            "Gardner, H. (2010). La inteligencia reformulada: las inteligencias múltiples en el siglo XXI. Barcelona: Paidós.",
            "Gardner, H. (2014). Inteligencias múltiples: la teoría en la práctica. Barcelona: Paidós.",
            "Gimeno Sacristán, J. (2008). El valor del tiempo en la educación. Madrid: Morata.",
            "Good, L. T. & Brophy, J. (1997). Psicología educativa contemporánea. México: McGraw-Hill.",
            "Good, T. L. & Brophy, J. (1998). Psicología educativa. México: McGraw-Hill.",
            "Hurlock, E. (1991). Desarrollo del niño. México: McGraw-Hill.",
            "Marchesi, A. & Palacios, J. (1986). Psicología evolutiva: teorías y métodos. Madrid: Alianza.",
            "Marx, M. H. & Hillix, W. A. (1987). Sistemas y teorías psicológicas contemporáneas. México: Paidós.",
            "Pallarés, M. (2010). Emociones y sentimientos: dónde se forman y cómo se transforman. Barcelona: Marge Books.",
            "Patterson, C. H. (1982). Bases para una teoría de la enseñanza y psicología de la educación. México: Manual Moderno.",
            "Piaget, J. (1981). Psicología del niño. Madrid: Morata.",
            "Piaget, J. (2000). El nacimiento de la inteligencia en el niño. Barcelona: Crítica.",
            "Puente, A. (1998). Cognición y aprendizaje. Madrid: Pirámide.",
            "Woolfolk, A. (1999). Psicología educativa. México: Prentice Hall",
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
