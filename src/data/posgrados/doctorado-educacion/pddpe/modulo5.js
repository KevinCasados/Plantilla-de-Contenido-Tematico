/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "DEC", // Doctorado en Educación
  courseId: "DED413", // Ajusta si tu convención interna usa otro código
  id: "DED413-modulo5", // Id único del módulo

  /* ── Datos visibles ─────────────────────────── */
  courseName: "La práctica docente desde la perspectiva evaluadora",
  title: "Módulo 5. Observación y práctica • Proyecto de evaluación docente",
  semestre: "Cuarto semestre",
  teacher: "Dr. Jesús Agustín Zapata Velázquez",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Consolidar la propuesta de modelo de evaluación docente a través de la planeación, desarrollo y presentación de resultados, asegurando su viabilidad y aplicabilidad en un contexto educativo real.",

  competencies: [
    "Analiza y aplica los principios de organización y planificación educativa para consolidar un modelo de evaluación docente estructurado y fundamentado.",
    "Emplea instrumentos de observación y registro para analizar el proceso de enseñanza‑aprendizaje y sustentar la toma de decisiones en la evaluación docente.",
    "Diseña y desarrolla un proyecto de evaluación docente con criterios claros de planeación, ejecución y presentación de resultados, considerando su viabilidad y pertinencia en el contexto educativo.",
    "Reflexiona sobre la importancia de la evaluación docente como herramienta para la mejora continua, identificando áreas de oportunidad y estrategias para optimizar la enseñanza.",
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

    /* 1) Unidad 5 — Observación y práctica */
    {
      id: "5",
      numbering: "Unidad 5",
      title: "Observación y práctica",
      content: [
        /* Párrafo 1 — Sentido de la unidad */
        {
          type: "paragraph",
          text: "La Unidad 5 consolida el tránsito desde la fundamentación teórica hacia la praxis evaluativa: observar, registrar y analizar la enseñanza en situaciones reales. Bajo esta premisa, la observación no es un acto puntual, sino un proceso sistemático que exige criterios explícitos, instrumentos válidos y procedimientos de registro estandarizados. Esta unidad propone articular tres núcleos clave: (a) el orden y la enseñanza, como expresión de una organización pedagógica coherente; (b) la organización de contenidos y su traducción operativa en planes de trabajo y de clase; y (c) el registro de la experiencia, entendido como evidencia robusta para la reflexión y la toma de decisiones. El foco está en que el doctorante diseñe y use herramientas de observación y documentación que alimenten su propio modelo de evaluación docente, asegurando validez, confiabilidad y utilidad para la mejora continua.",
        },

        /* Párrafo 2 — Observación como dispositivo formativo */
        {
          type: "paragraph",
          text: "La observación docente, cuando es guiada por rúbricas analíticas, listas de cotejo y protocolos claros, permite convertir lo que sucede en el aula en datos interpretables. El énfasis se desplaza del juicio subjetivo al análisis criterial: gestión del tiempo, secuenciación de contenidos, interacción pedagógica, diversidad de estrategias didácticas, claridad comunicativa, feedback y uso de recursos. Esta mirada criterial debe ir acompañada de una concepción formativa de la evaluación: observar para comprender, comprender para retroalimentar y retroalimentar para transformar. De esta manera, la observación se transforma en un dispositivo formativo que favorece el desarrollo profesional, nutre planes de mejora y, sobre todo, cierra el ciclo evaluación–acción–reevaluación.",
        },

        /* Párrafo 3 — Organización y planificación como evidencia evaluable */
        {
          type: "paragraph",
          text: "El orden y la enseñanza se operacionalizan en documentos y prácticas: planes de trabajo, planes de clase, secuencias didácticas, cronogramas, mapas de progreso y matrices de evaluación. Estos insumos son evaluables porque hacen visible la alineación entre objetivos, contenidos, estrategias y evidencias de aprendizaje. En esta unidad se promueve que el doctorante diseñe criterios y rúbricas para valorar la coherencia vertical (del currículo al aula) y horizontal (entre actividades, recursos e instrumentos). Planificar no es solo distribuir tiempos, sino anticipar decisiones pedagógicas, prever alternativas para la atención a la diversidad y explicitar cómo se recogerán y utilizarán los datos para retroalimentar los aprendizajes y la propia enseñanza.",
        },

        /* Párrafo 4 — Registro de la experiencia y triangulación */
        {
          type: "paragraph",
          text: "Registrar la experiencia (diarios reflexivos, portafolios docentes, protocolos de observación, analíticas de participación en LMS, entrevistas y encuestas) fortalece la validez del proceso evaluativo. La triangulación —cruzar fuentes, momentos y agentes— permite distinguir patrones, detectar inconsistencias y priorizar acciones de mejora con base en evidencias. En consecuencia, todo registro debe diseñarse con criterios de calidad: pertinencia (responde a las preguntas evaluativas), completitud (captura dimensiones clave del desempeño), sistematicidad (se aplica con procedimientos explícitos) y utilidad (alimenta decisiones pedagógicas concretas).",
        },

        /* Párrafo 5 — Cierre: del dato a la acción */
        {
          type: "paragraph",
          text: "La Unidad 5 culmina invitándote a cerrar el ciclo evaluativo: del dato a la interpretación, de la interpretación al plan de mejora y del plan de mejora a la recolección de nueva evidencia para verificar avances. El propósito no es “evaluar por cumplir”, sino construir un mecanismo estable de mejora continua anclado en la práctica real. Por ello, a lo largo de los subtemas se te pedirá diseñar instrumentos, aplicar observaciones, organizar contenidos y documentar la experiencia, de modo que el modelo de evaluación docente que vienes construyendo gane en robustez metodológica, sensibilidad contextual y potencial de transformación.",
        },

        /* Acordeón — Tres niveles de organización de la unidad */
        {
          type: "accordion",
          header: "Mapa de la Unidad 5: niveles y productos esperados",
          open: false,
          text:
            "### Nivel 1. Principios organizadores (¿Qué observar y por qué?)\n" +
            "- Orden y coherencia en la enseñanza.\n" +
            "- Alineación currículo–objetivos–estrategias–evaluación.\n" +
            "- Enfoque formativo y de mejora continua.\n\n" +
            "### Nivel 2. Instrumentos e implementación (¿Con qué y cómo observar?)\n" +
            "- Rúbricas, listas de cotejo y protocolos de observación.\n" +
            "- Plan de trabajo y plan de clase como evidencias evaluables.\n" +
            "- Registros sistemáticos: diarios, portafolios, analíticas y encuestas.\n\n" +
            "### Nivel 3. Uso de resultados (¿Para qué observar?)\n" +
            "- Retroalimentación criterial y planes de mejora.\n" +
            "- Triangulación de fuentes para decisiones informadas.\n" +
            "- Ajustes iterativos al modelo de evaluación docente.",
        },
      ],
      subthemes: [
        {
          id: "5.1",
          numbering: "5.1",
          title: "El orden y la enseñanza",
          content: [
            /* Párrafo 1 — Por qué el “orden” es un criterio evaluable (≈300 palabras) */
            {
              type: "paragraph",
              text: "El orden en la enseñanza es un criterio central para evaluar el desempeño docente porque hace visible cómo el profesor articula objetivos, contenidos, estrategias, tiempos y evidencias de aprendizaje en una secuencia lógica y progresiva. No se trata solo de “tener un plan”, sino de demostrar coherencia interna entre lo que se pretende que el estudiante logre (competencias, resultados de aprendizaje), los insumos didácticos que se movilizan y la evaluación que valida el proceso. Desde una perspectiva formativa, el orden funciona como un andamiaje que reduce la ambigüedad, delimita expectativas y facilita la autorregulación del alumnado. Por ello, los modelos de evaluación robustos incorporan indicadores que observan la claridad de la secuencia didáctica, la pertinencia de las actividades respecto de los objetivos, la distribución del tiempo y la articulación entre teoría, práctica y metacognición. En términos prácticos, evaluar el orden implica mirar tanto el “papel” (plan de trabajo, plan de clase, portafolio) como la “acción” (lo que ocurre efectivamente en la sesión): la sincronía entre planificación y ejecución es un rasgo de calidad. A la par, instrumentos como rúbricas de diseño didáctico, listas de cotejo para la observación de clase y portafolios docentes permiten objetivar el juicio evaluativo y dar retroalimentación específica. Asumir el orden como objeto evaluable ayuda a desplazar la mirada del control administrativo hacia la mejora profesional: identificar quiebres, redundancias o saltos conceptuales en la secuencia es, en realidad, abrir oportunidades para rediseñar el itinerario formativo y hacerlo más inclusivo, significativo y retador.",
            },

            /* Acordeón 1 — Qué mirar cuando evaluamos el “orden” */
            {
              type: "accordion",
              header:
                "Criterios observables para valorar el orden en la enseñanza",
              open: false,
              text:
                "* **Alineación curricular:** coherencia entre objetivos, contenidos, actividades y evaluación.  \n" +
                "* **Secuenciación lógica:** progresión de lo simple a lo complejo y activación de conocimientos previos.  \n" +
                "* **Gestión del tiempo:** tiempos realistas por fase (inicio, desarrollo, cierre) y ajustes oportunos.  \n" +
                "* **Claridad comunicativa:** consignas precisas, criterios explícitos y evidencias esperadas.  \n" +
                "* **Articulación teoría–práctica:** alternancia planificada entre explicación, aplicación y metacognición.",
            },

            /* Párrafo 2 — Instrumentos para medir el orden y cómo usarlos (≈300 palabras) */
            {
              type: "paragraph",
              text: "Para evaluar el orden en la enseñanza conviene triangular instrumentos cuantitativos y cualitativos. La **observación de clases** (presencial o mediante videoanálisis) permite verificar si la secuencia prevista se implementa realmente y cómo se gestiona el tiempo, el ritmo y las transiciones. Las **rúbricas de diseño didáctico** describen niveles de logro respecto a la coherencia entre objetivos, contenidos, actividades y evaluación, reduciendo la subjetividad del evaluador y orientando la retroalimentación. El **portafolio docente** evidencia longitudinalmente la capacidad de planificar, ajustar y reflexionar sobre la propia práctica; cuando se revisa con rúbricas, ofrece pistas finas sobre la progresión en la competencia de planificar. A ello se suman las **listas de cotejo** para verificar componentes mínimos (objetivos claros, secuencia explícita, estrategias diversificadas, criterios de evaluación conocidos por el alumnado) y los **instrumentos de percepción estudiantil**, que agregan la mirada del aprendiz sobre la claridad y estructura del curso. Un punto clave es definir cómo los hallazgos alimentarán planes de mejora: no basta con calificar el orden; hay que **transformar la evidencia en acciones** (rediseño de secuencias, uso de organizadores previos, incorporación de estrategias de diferenciación, micro‑planificación de tiempos para andamiajes específicos, etc.). Finalmente, es recomendable institucionalizar ciclos breves de revisión—acción—seguimiento (por ejemplo, al cierre de cada unidad) para que el orden sea un eje vivo del desarrollo profesional y no un requisito burocrático.",
            },

            /* Acordeón 2 — Errores frecuentes y cómo corregirlos */
            {
              type: "accordion",
              header:
                "Desajustes típicos en la secuencia didáctica (y estrategias de mejora)",
              open: false,
              text:
                "* **Objetivos genéricos o poco medibles:** redáctalos con verbos observables, criterios e indicadores.  \n" +
                "* **Actividades desconectadas de los objetivos:** mapea cada actividad contra el resultado de aprendizaje.  \n" +
                "* **Evaluaciones finales sin evaluación formativa:** inserta micro‑evidencias y retroalimentación continua.  \n" +
                "* **Saltos de complejidad:** utiliza andamiajes graduales, ejemplos puente y pilotajes rápidos.  \n" +
                "* **Gestión del tiempo irreal:** cronometra fases, prioriza esenciales y diseña planes B (ajustes rápidos).",
            },

            /* Párrafo 3 — Enfoque por competencias y metaevaluación del orden (≈300 palabras) */
            {
              type: "paragraph",
              text: "En modelos basados en competencias, el orden didáctico se vuelve aún más crítico porque las actividades deben movilizar saberes en contextos auténticos, articular evaluación formativa y promover la reflexión del estudiante sobre su propio progreso. Esto exige que el docente diseñe secuencias donde la complejidad crezca de manera intencional y transparente, con criterios de logro claramente compartidos (rúbricas, descriptores) y con evidencias distribuidas a lo largo del proceso, no solo al final. Evaluar el orden, entonces, no es auditar formatos, sino estimar la **capacidad del docente para estructurar trayectorias de aprendizaje significativas**, sensibles a la diversidad y sostenidas por retroalimentación oportuna. De ahí la importancia de la **metaevaluación**: revisar periódicamente los instrumentos y criterios con los que juzgamos el orden para evitar que se vuelvan rígidos o descontextualizados. Incluir al propio docente en la lectura de sus evidencias (portafolio, diarios reflexivos, coevaluación entre pares) incrementa la validez formativa del proceso, fortalece la apropiación de los resultados y favorece el rediseño iterativo de la secuencia didáctica. En suma, cuando el orden se convierte en un constructo evaluado con rigor y acompañado de apoyos para la mejora, la evaluación docente deja de ser punitiva y se transforma en una **palanca de desarrollo profesional continuo**.",
            },

            /* Video de apoyo */
            {
              type: "video",
              title:
                "Planificación y orden didáctico: del objetivo a la evaluación",
              src: "https://www.youtube.com/watch?v=dQ-l5NdJ4mw",
              caption:
                "Guía práctica para alinear objetivos, contenidos, actividades y evaluación usando rúbricas y secuencias graduales.",
            },
          ],
        },
        {
          id: "5.2",
          numbering: "5.2",
          title: "Organización de los contenidos",
          content: [
            /* Párrafo 1 — Sentido pedagógico y evaluativo de organizar contenidos (≈300 palabras) */
            {
              type: "paragraph",
              text: "Organizar los contenidos es una decisión curricular y didáctica estratégica: determina qué, cuándo y cómo se enseña, y condiciona los indicadores con los que luego se evaluará la eficacia del proceso. Desde una perspectiva de evaluación docente, la organización revela la coherencia entre objetivos, secuencias, metodologías e instrumentos de evaluación. Una estructuración cuidadosa permite transitar de la información a las competencias, favorece la transferencia y evita redundancias o vacíos conceptuales. Por ello, los criterios de organización (cronológico, temático, por complejidad, espiral, interdisciplinario, por proyectos, entre otros) deben dialogar con el perfil de egreso, el mapa curricular y las necesidades reales del grupo. En clave formativa, la organización de contenidos actúa como una ‘cartografía’ que facilita al estudiantado comprender la progresión del aprendizaje, anticipar qué se espera de él y autogestionar su avance. Asimismo, posibilita al docente justificar pedagógicamente sus decisiones de secuenciación, explicitar los vínculos entre contenidos declarativos, procedimentales y actitudinales, y seleccionar evidencias de evaluación pertinentes. De cara al modelo de evaluación docente que estás construyendo, conviene incluir rúbricas o listas de cotejo que valoren si la planificación exhibe progresión cognitiva, alineación constructiva (objetivos–actividades–evaluación) y oportunidades de retroalimentación oportuna. Finalmente, la organización debe ser flexible: se reajusta con base en diagnósticos iniciales, avances reales del grupo y hallazgos de la evaluación formativa; documentar estos ajustes (p. ej., en el portafolio docente) robustece la trazabilidad y la transparencia del proceso evaluativo.",
            },

            /* Lista 1 — Criterios robustos para organizar contenidos (con título) */
            {
              type: "list",
              title: "Criterios robustos para organizar contenidos",
              style: "bullets",
              items: [
                "Alineación constructiva: los contenidos se ordenan en función de los resultados de aprendizaje y las evidencias que los demostrarán.",
                "Progresión cognitiva: de lo concreto a lo abstracto, de lo simple a lo complejo, con andamiajes explícitos.",
                "Relevancia y pertinencia: selección basada en problemas, contextos y demandas reales del campo profesional.",
                "Interdisciplinariedad y articulación horizontal/vertical: conexiones entre asignaturas y entre niveles o semestres.",
                "Flexibilidad y adaptabilidad: posibilidad de re-secuenciar ante diagnósticos, retroalimentaciones o contingencias.",
              ],
            },

            /* Párrafo 2 — Modelos de secuenciación y riesgos frecuentes (≈300 palabras) */
            {
              type: "paragraph",
              text: "Existen modelos de secuenciación que pueden combinarse según el propósito formativo. El enfoque espiral permite reintroducir un mismo concepto con mayor profundidad en momentos sucesivos, favoreciendo la consolidación y la transferencia. La organización por proyectos o por problemas (ABP/ABPy) prioriza la integración de saberes, moviliza competencias y hace que la evaluación se centre en desempeños auténticos. La organización por niveles de complejidad (taxonomías de Bloom revisada o Marzano & Kendall) asegura que el estudiante progrese desde el recuerdo y la comprensión hasta la metacognición y la creación. No obstante, hay riesgos habituales: currículos ‘enciclopédicos’ que impiden profundizar; secuencias sin coherencia lógica o temporal; escasa correspondencia entre los criterios de evaluación y los aprendizajes esperados; o nula visibilización de contenidos actitudinales y socioemocionales. Para mitigarlos, es clave triangular evidencias (documentos de planeación, observaciones de clase, portafolios de los estudiantes) y utilizar rúbricas que expliciten la calidad de la organización y su impacto en la enseñanza. Desde la perspectiva de la evaluación docente, la pregunta central es: ¿la forma en que el docente organiza los contenidos potencia la comprensión profunda, el aprendizaje significativo y el desarrollo de competencias evaluables? Si la respuesta es afirmativa, entonces hay consistencia (constructive alignment); si no, la evaluación revelará desajustes que orienten acciones de mejora, formación continua o rediseños curriculares. Documentar estas decisiones y sus efectos en el aprendizaje constituye evidencia crítica para un modelo de evaluación sólido.",
            },

            /* Imagen intercalada */
            {
              type: "image",
              src: "https://mydidacticali.wordpress.com/wp-content/uploads/2018/08/planeacion-de-secuencias-didacticas-1-728.jpg", // reemplázala por tu ruta local si lo prefieres
              alt: "Docente organizando contenidos curriculares en un plan de clase",
              caption:
                "Visualizar la progresión de contenidos facilita la alineación entre objetivos, actividades y evaluación.",
            },

            /* Lista 2 — Buenas prácticas y errores a evitar (con título) */
            {
              type: "list",
              title: "Buenas prácticas y errores a evitar",
              style: "bullets",
              items: [
                "Buenas prácticas: mapear resultados de aprendizaje ↔ evidencias ↔ instrumentos; hacer explícita la progresión de complejidad; incluir momentos de retroalimentación formativa planificados.",
                "Buenas prácticas: visibilizar contenidos actitudinales y socioemocionales y cómo se evaluarán; transparentar la secuencia a los estudiantes (syllabus, infografías, LMS).",
                "Errores a evitar: sobrecargar de contenidos ‘por cobertura’; desalinear contenidos, actividades y evaluación; no ajustar la secuencia tras diagnósticos o evidencias de dificultad.",
                "Errores a evitar: evaluar solo resultados finales sin mirar el proceso y las micro‑progresiones; ignorar la diversidad y los ritmos de aprendizaje del grupo.",
              ],
            },

            /* Párrafo 3 — Organización de contenidos como criterio del modelo de evaluación docente (≈300 palabras) */
            {
              type: "paragraph",
              text: "Incorporar la organización de los contenidos como un **criterio explícito** en tu modelo de evaluación docente aporta objetividad y foco en la mejora continua. Puedes operacionalizarlo en dimensiones e indicadores: (1) Coherencia: correspondencia entre objetivos, contenidos, actividades y evaluación; (2) Progresión: evidencia de andamiajes y creciente complejidad cognitiva; (3) Pertinencia: vinculación con problemas auténticos, competencias profesionales y contexto; (4) Flexibilidad: reajustes documentados a partir de diagnósticos o retroalimentaciones; (5) Transparencia: comunicación clara de la secuencia al estudiantado. Para valorar estas dimensiones, combina análisis documental (planes de trabajo, planes de clase, syllabus), observación de clases y revisión de portafolios estudiantiles. Integra instrumentos mixtos: listas de cotejo para verificar mínimos de calidad, rúbricas para discriminar niveles de logro y registros narrativos para captar decisiones pedagógicas que las métricas no muestran. Complementa con analítica de aprendizaje (participación, entregas, desempeños por unidad) para detectar cuellos de botella de manera temprana. Finalmente, cierra el ciclo con retroalimentación específica (feed‑up, feedback, feed‑forward) que indique al docente qué mantener, qué mejorar y cómo hacerlo; ese circuito es, en sí mismo, evidencia del uso pedagógico de la evaluación. Así, la organización de los contenidos deja de ser un trámite administrativo y se convierte en un eje verificable —y perfectible— de la práctica docente.",
            },
          ],
          subthemes: [
            {
              id: "5.2.1",
              numbering: "5.2.1",
              title: "Diseño del plan de trabajo",
              content: [
                /* Párrafo 1 (~300 palabras) — Sentido y enfoque del plan de trabajo */
                {
                  type: "paragraph",
                  text: "El plan de trabajo es la carta de navegación pedagógica que articula, en un horizonte temporal definido (unidad, trimestre o semestre), los objetivos de aprendizaje, los contenidos, las estrategias didácticas, los recursos, la evaluación y el cronograma. Desde la perspectiva de la evaluación docente, constituye una evidencia documental privilegiada porque permite inferir el grado de coherencia interna del proceso de enseñanza (alineamiento entre objetivos, actividades y evidencias de logro), así como la pertinencia contextual (adecuación al nivel, al grupo y a los recursos disponibles). Perrenoud (2008) recuerda que planificar no es sólo ordenar tareas, sino anticipar decisiones instruccionales que reduzcan la improvisación y abran espacio a la diferenciación pedagógica. Por su parte, Tobón (2010) subraya que, en un enfoque por competencias, el plan de trabajo debe movilizar saberes (saber, saber hacer y saber ser) hacia desempeños integrales, lo que implica explicitar problemas, proyectos o situaciones reales que demanden la aplicación de conocimientos. En clave evaluativa, el plan debe transparentar: 1) criterios y rúbricas que orientarán la valoración del aprendizaje; 2) momentos, funciones y técnicas de evaluación (diagnóstica, formativa y sumativa); 3) mecanismos de retroalimentación y mejora continua. Finalmente, Zabalza (2003) insiste en concebirlo como un documento vivo, flexible y perfectible: registrar ajustes, reprogramaciones y decisiones pedagógicas fundamentadas convierte al plan en un dispositivo para el aprendizaje profesional del docente y en un insumo robusto para la evaluación de su desempeño.",
                },

                /* Lista 1 — Checklist mínimo del plan de trabajo */
                {
                  type: "list",
                  title:
                    "Checklist mínimo del plan de trabajo (qué no puede faltar)",
                  style: "unordered",
                  items: [
                    "Datos de identificación (asignatura, docente, periodo, grupo, horas).",
                    "Objetivos / resultados de aprendizaje claros, medibles y alineados al currículo.",
                    "Contenidos organizados (temáticos, por complejidad, cronológicos o interdisciplinarios).",
                    "Estrategias metodológicas (ABP, estudio de caso, aprendizaje cooperativo, etc.).",
                    "Secuenciación temporal (calendario con hitos, entregables y evaluaciones).",
                    "Estrategia de evaluación (criterios, instrumentos, rúbricas, evidencias requeridas).",
                    "Recursos y apoyos (TIC, bibliografía, laboratorios, materiales).",
                    "Atención a la diversidad (ajustes razonables, andamiajes, apoyos).",
                    "Plan de retroalimentación y mejora (momentos, formatos, responsables).",
                  ],
                },

                /* Párrafo 2 (~300 palabras) — Alineamiento constructivo y evaluación */
                {
                  type: "paragraph",
                  text: "El corazón del plan de trabajo es el alineamiento constructivo: que los objetivos expresen con precisión los desempeños esperados; que las actividades de aprendizaje activen los procesos cognitivos, metacognitivos y socioemocionales necesarios para lograrlos; y que los instrumentos de evaluación recojan evidencias válidas y confiables sobre esos mismos desempeños. Scriven (1991) advierte que la evaluación pierde validez si no se diseña en coherencia con los propósitos formativos y las tareas de aprendizaje; por ello, el plan de trabajo debe explicitar cómo cada actividad será evaluada (qué criterios, con qué rúbrica, en qué momento, con qué peso). En escenarios de alta diversidad, el plan debe prever trayectorias diferenciadas, ritmos flexibles y opciones de demostración del aprendizaje (principios del Diseño Universal para el Aprendizaje), de modo que la equidad se vuelva un criterio operativo y verificable. Además, es deseable que el plan incorpore ciclos iterativos de evaluación formativa (diagnóstico inicial, monitoreo continuo, retroalimentación oportuna y re-enseñanza), registrando los ajustes que el docente hará a partir de la evidencia recogida. Para efectos de evaluación del desempeño, esto permite valorar no sólo la planificación inicial, sino la capacidad del docente para gestionar el currículo en acción, tomar decisiones basadas en datos y documentar la mejora continua. Así, el plan de trabajo deja de ser un requisito administrativo para convertirse en un instrumento de desarrollo profesional docente y de aseguramiento de la calidad educativa.",
                },

                /* Lista 2 — Errores frecuentes y cómo evitarlos */
                {
                  type: "list",
                  title:
                    "Errores frecuentes al diseñar el plan de trabajo (y cómo evitarlos)",
                  style: "ordered",
                  items: [
                    "Objetivos vagos o no medibles → Formular con verbos observables, niveles de desempeño y condiciones de logro.",
                    "Actividades que no dialogan con los objetivos → Mapear cada actividad con el objetivo y el criterio de evaluación correspondiente.",
                    "Evaluaciones desconectadas del aprendizaje → Diseñar instrumentos que recojan exactamente las evidencias que los objetivos demandan.",
                    "Cronogramas irrealistas → Estimar cargas de trabajo reales, contemplar tiempos de retroalimentación y recuperación.",
                    "Ausencia de estrategias para la diversidad → Incorporar adaptaciones curriculares, andamiajes y rutas alternativas.",
                    "No registrar ajustes ni decisiones durante la implementación → Incorporar un apartado de seguimiento y lecciones aprendidas.",
                  ],
                },

                /* Párrafo 3 (~300 palabras) — Gestión, seguimiento y mejora continua */
                {
                  type: "paragraph",
                  text: "Un plan de trabajo sólido también especifica cómo se gestionará su seguimiento: qué indicadores se monitorean (avance de contenidos, logro de resultados, participación, retención, satisfacción), con qué periodicidad y quiénes son responsables de analizarlos. La incorporación de herramientas digitales (LMS, formularios, paneles de analítica de aprendizaje) facilita capturar datos de progreso y generar alertas tempranas, pero exige criterios éticos de privacidad y uso responsable de la información. En clave de mejora continua, el plan debería cerrar con un protocolo de retroalimentación: momentos y formatos de devolución a estudiantes, espacios de reflexión docente (diarios, reuniones colegiadas, lecciones aprendidas) y acciones de ajuste (replanificación, rediseño de actividades, fortalecimiento de apoyos). Desde la mirada evaluativa, estos componentes evidencian la competencia del docente para gestionar el curriculum vivo, ajustar su enseñanza con base en evidencias y sostener procesos de evaluación formativa. Además, permiten que la evaluación externa (pares, directivos, acreditadores) valore la trazabilidad entre lo planificado, lo ejecutado y lo aprendido. Finalmente, un buen plan de trabajo deja explícitos los productos o evidencias que se archivarán (portafolios, rúbricas calificadas, matrices de seguimiento, informes de retroalimentación) para nutrir los procesos de autoevaluación, coevaluación y evaluación institucional. En suma, el diseño del plan de trabajo no es un trámite previo a la docencia, sino el dispositivo estratégico que articula coherencia pedagógica, transparencia evaluativa y rendición de cuentas orientada al aprendizaje.",
                },

                /* Imagen ilustrativa */
                {
                  type: "image",
                  src: "https://i.pinimg.com/736x/b8/e3/76/b8e376c5c890e8e34f9c70c207591140.jpg",
                  alt: "Esquema visual de un plan de trabajo docente alineado (objetivos, actividades, evaluación y cronograma)",
                  caption:
                    "Componentes clave de un plan de trabajo: objetivos, secuenciación, estrategias didácticas, evaluación y seguimiento.",
                },
              ],
            },
            {
              id: "5.2.2",
              numbering: "5.2.2",
              title: "Diseño del plan de clase",
              content: [
                /* Párrafo 1 (~300 palabras) — Propósito y estructura mínima */
                {
                  type: "paragraph",
                  text: "El plan de clase es la unidad microcurricular que operacionaliza, en una o pocas sesiones, la intención formativa prevista en el plan de trabajo. A diferencia de este último —más amplio y de proyección temporal mayor—, el plan de clase concentra objetivos específicos, contenidos puntuales, estrategias didácticas, momentos y tiempos, así como evidencias e instrumentos de evaluación asociados a resultados concretos. Desde la lógica de la evaluación docente, constituye una evidencia privilegiada porque permite verificar la coherencia vertical (entre el currículo, el plan de trabajo y la clase) y la coherencia horizontal (entre objetivos, actividades, recursos y evaluación). Un diseño sólido inicia definiendo con precisión qué se espera que el estudiantado sea capaz de hacer al término de la sesión (objetivos formulados con verbos de desempeño observables), para luego seleccionar contenidos nucleares, disponer estrategias metodológicas pertinentes (ABP, aprendizaje cooperativo, estudio de caso, aula invertida, entre otras) y organizar secuencias didácticas que contemplen activación de saberes previos, construcción guiada y aplicación/transferencia. A ello se suma la explicitación de criterios, indicadores y herramientas de evaluación (rúbricas, listas de cotejo, escalas descriptivas) que permitan recoger evidencias válidas y útiles para la retroalimentación. Finalmente, todo plan de clase debe contemplar adaptaciones razonables (diferenciación) frente a la diversidad del grupo, prever los recursos materiales y tecnológicos necesarios, y asegurar un cierre metacognitivo que invite al alumnado a reflexionar sobre lo aprendido y cómo lo aprendió, alimentando así la mejora continua del propio docente.",
                },

                /* Lista 1 — Elementos indispensables del plan de clase */
                {
                  type: "list",
                  title:
                    "Checklist de elementos indispensables del plan de clase",
                  ordered: false,
                  items: [
                    "Datos generales: asignatura, docente, fecha, duración y grupo.",
                    "Objetivos de aprendizaje claros, medibles y alineados al currículo/competencias.",
                    "Contenidos pertinentes y acotados al tiempo disponible.",
                    "Secuencia didáctica con tres momentos: inicio, desarrollo y cierre/metacognición.",
                    "Estrategias y métodos (ABP, estudio de caso, aula invertida, aprendizaje cooperativo, etc.).",
                    "Recursos y materiales (incluyendo TIC) explícitos y disponibles.",
                    "Evaluación: criterios, indicadores, evidencias e instrumentos (rúbricas, listas de cotejo).",
                    "Adecuaciones y apoyos para la atención a la diversidad.",
                    "Seguimiento y retroalimentación planificada (formativa y oportuna).",
                  ],
                },

                /* Párrafo 2 (~300 palabras) — Secuencia didáctica, tiempos y evaluación formativa */
                {
                  type: "paragraph",
                  text: "El corazón operativo del plan de clase es la secuencia didáctica. En el momento de inicio se activan conocimientos previos, se explicitan metas y se generan expectativas de logro; en el desarrollo se producen las experiencias clave de aprendizaje (exploración, modelamiento, práctica guiada y autónoma, socialización de hallazgos), mientras que el cierre asegura síntesis conceptual, verificación del logro y metacognición. El cronometraje realista (time on task) y la previsión de transiciones fluidas entre actividades evitan pérdidas de foco y maximizan el involucramiento del estudiantado. En paralelo, la evaluación formativa debe permear toda la sesión: mini‑rúbricas rápidas, tickets de salida, preguntas de sondeo, auto y coevaluaciones breves, así como el uso de herramientas digitales de respuesta inmediata (p. ej., formularios o quizzes en LMS) permiten ajustar en tiempo real la enseñanza. Un rasgo distintivo de un buen plan de clase es la alineación entre objetivos, tareas y evidencias: si el objetivo demanda argumentar, la tarea debe requerir producir argumentos y la evidencia debe ser evaluada con criterios que valoren coherencia, pertinencia y sustento. Finalmente, la explicitación de criterios en lenguaje accesible y compartido con los estudiantes mejora la transparencia y facilita la autorregulación. Esta triple coherencia —objetivos‑actividades‑evaluación— no solo fortalece el aprendizaje, sino que provee insumos sólidos para valorar el desempeño docente desde marcos de calidad, pertinencia y equidad.",
                },

                /* Lista 2 — Buenas prácticas (y errores comunes) en el diseño del plan de clase */
                {
                  type: "list",
                  title:
                    "Buenas prácticas (y errores comunes) al diseñar el plan de clase",
                  ordered: false,
                  items: [
                    "Buenas prácticas: redactar objetivos con verbos observables y criterios explícitos.",
                    "Buenas prácticas: planear evaluaciones formativas insertas en cada momento de la clase.",
                    "Buenas prácticas: anticipar apoyos y extensiones para atender la diversidad (UDA, DUA).",
                    "Buenas prácticas: cerrar siempre con metacognición y compromisos de mejora.",
                    "Errores comunes: confundir objetivos con actividades o descriptores vagos del proceso.",
                    "Errores comunes: plantear demasiados contenidos para el tiempo disponible.",
                    "Errores comunes: evaluar con instrumentos que no miden el desempeño declarado en los objetivos.",
                    "Errores comunes: omitir la retroalimentación específica y accionable.",
                  ],
                },

                /* Párrafo 3 (~300 palabras) — Flexibilidad, diferenciación y documentación para la evaluación docente */
                {
                  type: "paragraph",
                  text: "Aunque el plan de clase es un guion intencional, debe concebirse como un documento vivo y flexible. La realidad del aula —tiempos reales, ritmos, necesidades emergentes, incidentes críticos— obliga al docente a reconfigurar tareas, recursos o evaluaciones sin perder de vista los objetivos. Esta flexibilidad no equivale a improvisación: supone prever rutas alternativas (plan B) y estrategias de diferenciación (andamiajes, agrupamientos flexibles, niveles de complejidad escalonada, opciones de producto) que hagan posible el acceso y la participación de todo el estudiantado. Desde la evaluación del desempeño docente, la calidad del plan de clase se aprecia tanto en su diseño como en su implementación documentada: portafolios de evidencias, registros de observación, rúbricas completadas, tickets de salida y análisis posterior (qué funcionó, qué ajustar, qué aprender) constituyen insumos clave para la retroalimentación y la mejora continua. Integrar estos registros al modelo de evaluación docente permite demostrar coherencia, reflexividad y capacidad de ajuste —dimensiones cada vez más valoradas por los marcos de calidad educativa—. En síntesis, un plan de clase sólido articula claridad (objetivos y criterios), coherencia (alineación entre propósitos, actividades y evaluación), flexibilidad (respuestas contextualizadas y diferenciadas) y reflexividad (uso de datos para mejorar). Con estos componentes, no solo se optimiza la experiencia de aprendizaje, sino que se generan evidencias robustas para sustentar decisiones de evaluación docente formativa, justa y orientada al desarrollo profesional.",
                },

                /* Imagen ilustrativa */
                {
                  type: "image",
                  src: "https://juandomingofarnos.wordpress.com/wp-content/uploads/2024/01/what-do-instructional-designers-do-job-description.png",
                  alt: "Docente planificando una clase con objetivos, secuencias y rúbricas sobre la mesa.",
                  caption:
                    "El plan de clase como guion flexible: objetivos claros, actividades alineadas y evaluación formativa continua.",
                },
              ],
            },
          ],
        },
        {
          id: "5.3",
          numbering: "5.3",
          title: "Registro de la experiencia",
          content: [
            /* Párrafo 1 — Sentido y funciones del registro (≈300 palabras) */
            {
              type: "paragraph",
              text: "El registro de la experiencia docente es una práctica sistemática que documenta, organiza y analiza la acción pedagógica con el propósito de mejorarla. Más que un mero repositorio de evidencias, constituye un dispositivo metacognitivo que posibilita al docente reconstruir lo que hizo, cómo lo hizo y por qué tomó determinadas decisiones didácticas. En clave evaluativa, los registros aportan evidencia objetiva para sustentar juicios sobre el desempeño: permiten contrastar lo planificado con lo ejecutado, identificar la coherencia entre objetivos, estrategias y evaluaciones, y visibilizar los aprendizajes logrados por los estudiantes. Portafolios, diarios reflexivos, actas de observación de clases, rúbricas aplicadas, análisis de resultados de aprendizaje, encuestas al alumnado y matrices de seguimiento conforman un ecosistema de instrumentos complementarios que, triangulados, ofrecen una imagen más válida y fiable del quehacer docente. Así, el registro se vuelve insumo esencial para la retroalimentación formativa, la autoevaluación, la coevaluación entre pares y la toma de decisiones para el desarrollo profesional continuo.",
            },

            /* Párrafo 2 — Tipologías de registro y criterios de calidad (≈300 palabras) */
            {
              type: "paragraph",
              text: "Las tipologías de registro pueden agruparse en (a) narrativas reflexivas (diarios, bitácoras, relatos de práctica), (b) documentales-evidenciales (portafolios, planificaciones, materiales, evidencias de desempeño estudiantil), (c) observacionales (listas de cotejo, rúbricas, notas de campo, protocolos de observación con time sampling o event sampling) y (d) analítico‑evaluativas (reportes de resultados, matrices de indicadores, tableros de analítica del aprendizaje). Cualquiera sea el tipo, su calidad depende de cuatro criterios: validez (¿lo registrado refleja lo que realmente interesa evaluar del desempeño?), confiabilidad (¿el procedimiento de registro es consistente y replicable?), trazabilidad (¿puede seguirse la pista entre la evidencia, el criterio y el juicio evaluativo?) y utilidad (¿el registro informa decisiones de mejora?). Para ello, conviene normalizar formatos, explicitar criterios mediante rúbricas analíticas, calendarizar momentos de captura de evidencias y establecer protocolos de almacenamiento seguro y ético (protección de datos de estudiantes, consentimiento informado, anonimización cuando sea pertinente).",
            },

            /* Párrafo 3 — Uso formativo del registro y ciclo de mejora (≈300 palabras) */
            {
              type: "paragraph",
              text: "Un registro adquiere sentido cuando alimenta un ciclo de mejora: planear‑actuar‑observar‑reflexionar‑reajustar. Tras cada unidad, el docente puede contrastar evidencias (producciones estudiantiles, observaciones de clase, métricas de participación en el LMS) con los criterios declarados, identificar brechas y formular micro‑metas de desarrollo (p. ej., diversificar estrategias de retroalimentación, fortalecer la evaluación auténtica, aumentar la participación de estudiantes rezagados). Integrar sesiones de análisis colegiado (lesson study, comunidades profesionales de aprendizaje) favorece la interpretación compartida de los registros y la co‑construcción de acciones de mejora. Asimismo, disponer de tableros de análisis simples (indicadores de logro por competencia, distribución de calificaciones, mapas de progreso) facilita que los hallazgos se comuniquen de forma clara y accionable. De este modo, el registro deja de ser un trámite burocrático para convertirse en palanca de innovación pedagógica.",
            },

            /* Párrafo 4 — Lineamientos para integrarlo al modelo de evaluación (≈300 palabras) */
            {
              type: "paragraph",
              text: "Para incrustar el registro de la experiencia en un modelo de evaluación docente, se recomienda: (1) definir explícitamente qué dimensiones del desempeño se documentarán (planificación, gestión del aula, evaluación del aprendizaje, inclusión y atención a la diversidad, innovación y desarrollo profesional); (2) mapear cada dimensión con evidencias concretas (plan de clase, rúbricas aplicadas, secuencias didácticas, muestras de trabajos estudiantiles con retroalimentación, resultados de encuestas, videograbaciones con guías de observación); (3) establecer estándares y rúbricas para valorar la calidad de las evidencias y la reflexión docente; (4) calendarizar hitos de recopilación, análisis y retroalimentación; (5) habilitar espacios de devolución formativa y acuerdos de mejora con seguimiento; y (6) garantizar políticas de resguardo ético y protección de datos. La consistencia metodológica entre criterios, instrumentos, registros y decisiones de mejora aumenta la legitimidad del modelo evaluativo y su potencia transformadora en el desarrollo profesional docente.",
            },

            /* Acordeón 1 — Instrumentos y ejemplos prácticos */
            {
              type: "accordion",
              header: "Instrumentos de registro y ejemplos de uso",
              open: false,
              text:
                "* **Diario/bitácora reflexiva**: describe decisiones didácticas, dificultades, evidencias de participación y ajustes realizados.  \n" +
                "* **Portafolio docente**: compila planificaciones, materiales, evidencias de aprendizaje, rúbricas aplicadas y reflexiones críticas.  \n" +
                "* **Protocolos de observación**: guiones con indicadores (claridad expositiva, gestión del tiempo, andamiaje, evaluación formativa).  \n" +
                "* **Encuestas a estudiantes**: percepción de claridad, retroalimentación, motivación y ambiente de aula.  \n" +
                "* **Analítica del aprendizaje (LMS)**: tasas de acceso, participación en foros, entregas puntuales, progreso por competencia.  \n" +
                "* **Matrices de indicadores**: resumenan resultados por dimensión del desempeño y orientan planes de mejora.",
            },

            /* Acordeón 2 — Buenas prácticas para la validez, ética y uso de datos */
            {
              type: "accordion",
              header:
                "Buenas prácticas para asegurar calidad, ética y uso formativo",
              open: false,
              text:
                "* **Triangulación**: combina fuentes (docente, pares, estudiantes) e instrumentos (rúbricas, observaciones, encuestas) para robustecer la validez.  \n" +
                "* **Rúbricas transparentes**: criterios explícitos, niveles descritos con ejemplos, socializados antes de registrar/evaluar.  \n" +
                "* **Protección de datos**: anonimización de estudiantes, consentimiento informado, resguardo seguro y control de accesos.  \n" +
                "* **Retroalimentación accionable**: cada hallazgo va acompañado de una sugerencia concreta de mejora y un indicador de seguimiento.  \n" +
                "* **Metarregistro**: documentar cómo se registró (instrumento, momento, responsable) para garantizar trazabilidad y confiabilidad.",
            },
          ],
        },
      ],
    },

    /* 2) Unidad 6 — Proyecto de evaluación docente */
    {
      id: "6",
      numbering: "Unidad 6",
      title: "Proyecto de evaluación docente",
      content: [
        /* Párrafo 1 — Sentido y propósito del proyecto */
        {
          type: "paragraph",
          text: "El Proyecto de Evaluación Docente constituye la culminación operativa de todo el trayecto formativo recorrido: sintetiza los principios, enfoques y herramientas estudiadas para convertirlos en un dispositivo aplicable, válido y útil en contextos reales. Su propósito no se agota en medir el desempeño, sino en habilitar procesos de mejora continua, toma de decisiones informada y desarrollo profesional docente. Por ello, el proyecto debe anclarse a un marco conceptual explícito (por ejemplo, competencias, enfoques formativos o modelos integrales) y, simultáneamente, responder a las condiciones específicas del centro educativo en el que se insertará. Delimitar con precisión el problema que se busca atender, las preguntas evaluativas y los usuarios de la información (docentes, directivos, instancias externas) permitirá definir metas alcanzables y coherentes con los recursos disponibles. Finalmente, el proyecto debe prever mecanismos claros de devolución de resultados y acompañamiento pedagógico, asegurando que la evaluación no sea un evento aislado, sino un ciclo que articula planificación, aplicación, análisis, retroalimentación y seguimiento.",
        },

        /* Párrafo 2 — Planeación: dimensiones, criterios e instrumentos */
        {
          type: "paragraph",
          text: "La fase de planeación exige traducir el marco conceptual en un diseño técnico operativo: dimensiones, criterios, indicadores y evidencias. Una dimensión puede ser la planificación didáctica; otra, la gestión del aula; otra, la evaluación del aprendizaje; y otra, la reflexión profesional. Cada una debe operacionalizarse en criterios claros (por ejemplo, coherencia entre objetivos, actividades y evaluación) y en indicadores observables. A su vez, la selección de instrumentos ha de garantizar validez y confiabilidad, favoreciendo la triangulación: rúbricas analíticas para observación de clase, listas de cotejo para planes de trabajo, encuestas a estudiantes para percepción de la enseñanza, portafolio docente para evidencias longitudinales, y entrevistas o grupos focales para profundizar cualitativamente. Es imprescindible especificar quién aplica cada instrumento, con qué frecuencia, bajo qué protocolos éticos (consentimiento informado, confidencialidad) y qué estrategias de pilotaje se usarán para ajustar formatos antes de su uso definitivo.",
        },

        /* Párrafo 3 — Desarrollo: aplicación rigurosa y gestión de datos */
        {
          type: "paragraph",
          text: "Durante el desarrollo, la prioridad es asegurar la estandarización de la aplicación y la trazabilidad de los datos. Esto implica capacitar a evaluadores y coevaluadores, disponer de guías de observación con ejemplos anclados a niveles de logro, y calendarizar las mediciones para minimizar sesgos (por ejemplo, evitar observar siempre al docente en la misma tipología de clase). La captura y almacenamiento de la información debe contemplar matrices de datos o repositorios digitales, con esquemas de codificación que faciliten análisis estadísticos descriptivos e inferenciales cuando corresponda, y análisis de contenido para la información cualitativa. La transparencia metodológica —protocolos, bases de datos anonimizadas, criterios de limpieza y depuración— incrementa la credibilidad del proceso, habilitando la posibilidad de auditorías internas o externas y la replicabilidad del modelo en otros contextos educativos.",
        },

        /* Párrafo 4 — Presentación de resultados y retroalimentación formativa */
        {
          type: "paragraph",
          text: "La presentación de resultados debe ser clara, accionable y diferenciada por públicos: reportes ejecutivos para directivos, informes individuales con retroalimentación específica para los docentes, y síntesis institucionales para los órganos colegiados. El uso de visualizaciones (tablas de frecuencias, distribuciones de niveles de logro, mapas de calor por indicador) facilita la comprensión y la priorización de áreas críticas. Cada informe debe integrar recomendaciones concretas, rutas de mejora y compromisos de seguimiento, así como propuestas de formación continua y acompañamiento pedagógico. Un componente clave es la negociación de metas de desarrollo profesional con el docente evaluado, de manera que los hallazgos se conviertan en planes de acción viables y monitoreables, vinculados a tutorías, comunidades de práctica o microcredenciales de actualización.",
        },

        /* Párrafo 5 — Ética, sostenibilidad y mejora continua del modelo */
        {
          type: "paragraph",
          text: "Todo proyecto de evaluación docente debe sustentarse en principios éticos (equidad, transparencia, confidencialidad, uso responsable de la información) y en una visión de sostenibilidad: procedimientos documentados, roles claros, ciclos periódicos y presupuestos realistas. Es indispensable instaurar un metaevaluación del propio modelo (evaluar la evaluación): revisar anualmente la pertinencia de dimensiones, la calidad psicométrica de los instrumentos, la utilidad que los actores atribuyen a los resultados y el impacto efectivo en la práctica docente. De este modo, el proyecto no se fosiliza, sino que evoluciona en función de cambios curriculares, necesidades institucionales y hallazgos empíricos. La mejora continua del modelo —mediante pilotajes, ajustes y validaciones sucesivas— garantiza que la evaluación permanezca como un motor legítimo y eficaz de transformación pedagógica y no como una carga burocrática sin sentido.",
        },

        /* Acordeón — Tres niveles del proyecto */
        {
          type: "accordion",
          header:
            "Estructura del proyecto: planeación, desarrollo y resultados",
          open: false,
          text:
            "**Nivel 1. Planeación del proyecto**  \n" +
            "- Definición del propósito, preguntas evaluativas y usuarios de la información.  \n" +
            "- Dimensiones, criterios, indicadores y evidencias.  \n" +
            "- Selección y pilotaje de instrumentos; protocolo ético y de confidencialidad.  \n\n" +
            "**Nivel 2. Desarrollo / Implementación**  \n" +
            "- Capacitación de evaluadores y estandarización de la aplicación.  \n" +
            "- Recolección, gestión y aseguramiento de la calidad de los datos.  \n" +
            "- Análisis triangulado (cuantitativo/cualitativo) y control de sesgos.  \n\n" +
            "**Nivel 3. Presentación y uso de resultados**  \n" +
            "- Informes diferenciados, visualizaciones y recomendaciones accionables.  \n" +
            "- Planes de mejora personalizados y acompañamiento formativo.  \n" +
            "- Metaevaluación del modelo y ciclo de mejora continua.",
        },
      ],
      subthemes: [
        {
          id: "6.1",
          numbering: "6.1",
          title: "Planeación del proyecto de evaluación",
          content: [
            /* Párrafo 1 — Propósito y preguntas rectoras (≈300 palabras) */
            {
              type: "paragraph",
              text: "La planeación del proyecto de evaluación docente es el cimiento metodológico que asegura que el proceso sea válido, confiable, pertinente y útil para la mejora profesional. No se trata solo de decidir qué instrumentos se van a usar, sino de explicitar con claridad el para qué, el qué, el cómo, el cuándo y el quién del sistema evaluativo. En consecuencia, la fase de planeación debe iniciar con la formulación de objetivos específicos y medibles, alineados con los propósitos institucionales y con las necesidades reales del contexto donde se implementará el modelo. Preguntas rectoras como: ¿qué dimensiones del desempeño docente se evaluarán?, ¿con qué propósito formativo o sumativo?, ¿qué actores participarán (pares, directivos, estudiantes, autoevaluación)?, ¿qué evidencias se recopilarán y cómo se garantizará su calidad?, y ¿qué uso se dará a los resultados?, permiten construir una arquitectura robusta del proyecto. Desde la perspectiva de Scriven (1991) y Tobón (2010), planear implica anticipar criterios y estándares, definir procedimientos de recolección y análisis de datos, y prever los mecanismos de retroalimentación y seguimiento. Finalmente, la planeación debe contemplar la transparencia del proceso, estrategias para disminuir sesgos (triangulación, calibración de evaluadores, rúbricas analíticas) y lineamientos éticos respecto de confidencialidad, consentimiento informado y uso responsable de la información.",
            },

            /* Acordeón 1 — Componentes mínimos de la planeación (según el módulo) */
            {
              type: "accordion",
              header: "Componentes mínimos de la planeación del proyecto",
              open: false,
              text:
                "* **Objetivos de la evaluación**: formativos, sumativos, diagnósticos y de mejora continua.  \n" +
                "* **Dimensiones a evaluar**: planificación y desarrollo de la enseñanza, dominio disciplinar, gestión del aula, interacción pedagógica, reflexión profesional.  \n" +
                "* **Metodología**: enfoque mixto (cuantitativo–cualitativo), procedimientos, momentos y responsables.  \n" +
                "* **Instrumentos**: rúbricas, listas de cotejo, observación de clases, portafolios, encuestas, entrevistas.  \n" +
                "* **Plan de análisis y reporte**: criterios, técnicas de análisis, formatos de informe y rutas de retroalimentación.",
            },

            /* Párrafo 2 — Dimensiones, criterios y estándares (≈300 palabras) */
            {
              type: "paragraph",
              text: "Un proyecto de evaluación bien planeado delimita con precisión las dimensiones del desempeño docente y sus respectivos criterios e indicadores. Siguiendo a Perrenoud (2008) y Zabalza (2003), estas dimensiones suelen agruparse en: (a) planificación didáctica (coherencia entre objetivos, contenidos, metodologías y evaluación); (b) implementación pedagógica (claridad expositiva, estrategias activas, inclusión, uso de TIC); (c) evaluación del aprendizaje (validez, diversidad de instrumentos, retroalimentación formativa); (d) gestión del aula (clima, tiempo, normas y resolución de conflictos); y (e) desarrollo profesional y reflexión crítica sobre la práctica. Cada dimensión debe operativizarse en indicadores observables y medibles, acompañados de estándares o niveles de logro descritos en rúbricas analíticas que reduzcan la subjetividad en la valoración. Además, es clave anticipar los pesos relativos de cada dimensión, los puntos de corte para la toma de decisiones y los mecanismos para atender desacuerdos o apelaciones. Esta definición temprana evita arbitrariedades, fortalece la transparencia del modelo y facilita que los docentes comprendan el sentido formativo de la evaluación. En suma, sin un mapa claro de dimensiones, criterios e indicadores, el proyecto corre el riesgo de derivar en prácticas evaluativas fragmentadas y poco útiles para la mejora continua.",
            },

            /* Acordeón 2 — Criterios de calidad del modelo (validez, confiabilidad, utilidad, equidad) */
            {
              type: "accordion",
              header: "Criterios de calidad que debe cumplir la planeación",
              open: false,
              text:
                "* **Validez**: los instrumentos realmente miden las dimensiones definidas.  \n" +
                "* **Confiabilidad**: consistencia entre evaluadores y en el tiempo (calibración, rúbricas claras).  \n" +
                "* **Utilidad**: resultados accionables que orientan decisiones y planes de mejora.  \n" +
                "* **Equidad y pertinencia contextual**: criterios adaptados al contexto institucional y a las condiciones reales de la práctica.  \n" +
                "* **Transparencia y ética**: reglas claras, consentimiento informado, resguardo de datos y retroalimentación formativa.",
            },

            /* Párrafo 3 — Instrumentos, triangulación y gestión de datos (≈300 palabras) */
            {
              type: "paragraph",
              text: "La planeación debe especificar con detalle el repertorio de instrumentos a emplear y la lógica de triangulación que permitirá contrastar resultados. La combinación de observación de clases (presencial o videoanálisis), rúbricas de desempeño, portafolios docentes, encuestas a estudiantes y entrevistas semiestructuradas genera una visión holística del quehacer docente, reduce sesgos y aumenta la credibilidad de los hallazgos. Tan importante como elegir instrumentos es anticipar la **gestión de los datos**: quién los recopila, cómo se almacenan y codifican, qué software o matrices se utilizarán para el análisis, y qué procedimientos estadísticos o de análisis cualitativo se aplicarán. Definir desde el inicio los protocolos de resguardo y anonimización es una exigencia ética ineludible. Asimismo, la planeación debe prever la **calibración de evaluadores** (talleres, casos de entrenamiento, consensos de interpretación de rúbricas) para maximizar la confiabilidad interjueces. Finalmente, el plan debe contemplar un cronograma detallado de recolección, análisis y devolución de resultados, con tiempos realistas y responsables claramente identificados, de modo que la evaluación no se convierta en un ejercicio burocrático sino en un proceso formativo, iterativo y con seguimiento.",
            },

            /* Video ilustrativo */
            {
              type: "video",
              title:
                "Cómo planear un proyecto de evaluación docente paso a paso",
              src: "https://www.youtube.com/watch?v=CDW56wbn4Z0",
              caption:
                "Video guía que resume objetivos, dimensiones, instrumentos y criterios de calidad en la planeación de un modelo de evaluación docente.",
            },

            /* Párrafo 4 — Ética, retroalimentación y uso de resultados (≈300 palabras) */
            {
              type: "paragraph",
              text: "Un componente frecuentemente subestimado en la planeación es el **dispositivo de retroalimentación y seguimiento**. De poco sirve un modelo técnicamente impecable si los resultados no se traducen en acciones de mejora concretas. Por ello, el proyecto debe prever formatos de informe (individual e institucional), momentos de devolución dialógica con los docentes, planes de desarrollo profesional personalizados y mecanismos de monitoreo para verificar avances. En línea con Scriven (1991), la evaluación solo tiene sentido si es **accionable**: los hallazgos deben derivar en decisiones, apoyos, tutorías entre pares, comunidades de práctica y rutas de formación continua. Igualmente, la planeación debe incorporar reglas claras sobre confidencialidad, protección de datos y uso responsable de la información, evitando usos punitivos o meramente administrativos. Finalmente, establecer un ciclo de mejora continua —planear, evaluar, retroalimentar, acompañar, volver a evaluar— permitirá ajustar iterativamente el modelo (instrumentos, pesos, criterios) a partir de la evidencia generada. Así, la planeación del proyecto de evaluación docente se convierte en una garantía metodológica y ética para que la evaluación sea justa, formativa y transformadora del ejercicio profesional.",
            },
          ],
        },
        {
          id: "6.2",
          numbering: "6.2",
          title: "Desarrollo del proyecto de evaluación",
          content: [
            /* Párrafo 1 — Del plan al despliegue operativo (≈300 palabras) */
            {
              type: "paragraph",
              text: "El desarrollo del proyecto de evaluación docente supone operacionalizar lo planeado: pasar de la matriz de objetivos, dimensiones e instrumentos a la ejecución controlada, con roles, tiempos, protocolos y mecanismos de aseguramiento de la calidad claramente definidos. En esta fase se activan los dispositivos de recolección de información (observaciones, rúbricas, encuestas, portafolios, entrevistas) y se ponen en marcha los procedimientos de capacitación y calibración de evaluadores para garantizar criterios homogéneos. También se establecen canales de comunicación y soporte técnico‑pedagógico para resolver incidencias, resguardar datos y sostener la motivación de los participantes. Un elemento crítico es la **gestión del cambio**: informar a los docentes qué se espera de ellos, cómo se usará la información, qué beneficios formativos obtendrán y cómo se salvaguardará la confidencialidad. La logística contempla cronogramas detallados, asignación de evaluadores por área, rutas de entrega de evidencias y validaciones de integridad de los datos. Finalmente, se documentan minuciosamente los procedimientos (SOPs) para que la implementación sea replicable y auditable, asegurando transparencia y trazabilidad.",
            },

            /* Lista 1 — Tareas operativas clave durante el desarrollo */
            {
              type: "list",
              style: "unordered",
              items: [
                "Capacitación y calibración de evaluadores (rúbricas, criterios, ejemplos ancla).",
                "Pilotaje de instrumentos y ajustes finos según resultados del piloto.",
                "Programación de observaciones y entregas de portafolios con cronograma público.",
                "Protocolos de captura, codificación y resguardo de datos (seguridad y anonimización).",
                "Soporte y mesa de ayuda (pedagógica y tecnológica) para los docentes participantes.",
                "Monitoreo de cumplimiento (dashboards de avance y alertas tempranas).",
              ],
            },

            /* Párrafo 2 — Recolección, control de calidad y ética (≈300 palabras) */
            {
              type: "paragraph",
              text: "La recolección de datos exige un **control de calidad** permanente. Ello implica verificar consistencia entre evaluadores (con pruebas de fiabilidad interjueces), revisar registros incompletos, chequear la congruencia entre indicadores y evidencia aportada, y documentar cualquier desviación del protocolo. Se utilizan listas de cotejo internas para confirmar que cada instrumento se aplicó de acuerdo con las instrucciones y que las rúbricas fueron interpretadas con los mismos estándares. Igualmente, se resguardan los principios éticos: consentimiento informado, confidencialidad, derecho a réplica y apego a normativas institucionales. Desde el punto de vista técnico, se define un repositorio centralizado (LMS, DMS o base de datos) con versiones controladas, respaldos periódicos y permisos diferenciados según el rol. El equipo coordinador emite reportes de avance semanales o quincenales con indicadores clave (porcentaje de evidencias recibidas, observaciones realizadas, encuestas contestadas, incidencias resueltas) para tomar decisiones rápidas. En paralelo, se habilitan espacios de acompañamiento para docentes (tutorías, círculos de práctica, FAQ vivas) con el fin de mantener el carácter formativo del proceso y no convertirlo en un ejercicio meramente burocrático.",
            },

            /* Lista 2 — Indicadores de seguimiento del desarrollo (KPI/monitoreo) */
            {
              type: "list",
              style: "unordered",
              items: [
                "Cobertura de aplicación por instrumento (observaciones, encuestas, portafolios, etc.).",
                "Fiabilidad interevaluador (coeficientes de acuerdo, correlaciones intra‑clase).",
                "Tiempos de ciclo: aplicación → captura → validación → retroalimentación.",
                "Porcentaje de incidencias resueltas dentro del SLA definido.",
                "Satisfacción de docentes con el proceso (encuestas breves de pulso).",
                "Cumplimiento de los protocolos éticos (consentimiento, anonimización, uso formativo).",
              ],
            },

            /* Párrafo 3 — Triangulación, análisis preliminar y retroalimentación temprana (≈300 palabras) */
            {
              type: "paragraph",
              text: "A medida que avanza el desarrollo, resulta estratégico generar **análisis preliminares** y retroalimentación temprana (feedback loops) para ajustar a tiempo. La triangulación combina resultados de rúbricas, percepciones estudiantiles, autoevaluaciones y evidencias del portafolio, con el fin de detectar convergencias y divergencias. Estos cortes intermedios permiten identificar: (a) dimensiones poco discriminantes que requieren refinamiento, (b) instrumentos con problemas de consistencia, (c) necesidades emergentes de formación y (d) riesgos éticos o de comunicación que deban mitigarse. La retroalimentación temprana a los docentes —individual y colectiva— mantiene el sentido formativo del proyecto y evita que los resultados lleguen “tarde” para incidir en la práctica. Paralelamente, el equipo metodológico evalúa la pertinencia de los pesos asignados a las dimensiones, la claridad de los descriptores de las rúbricas y la suficiencia de la evidencia recolectada. Todo ajuste debe quedar versionado y documentado para asegurar transparencia y trazabilidad. Con esto, el desarrollo del proyecto no es un bloque monolítico, sino un proceso adaptativo y controlado que persigue la mejora continua.",
            },
          ],
        },
        {
          id: "6.3",
          numbering: "6.3",
          title: "Presentación de resultados",
          content: [
            /* Párrafo 1 — Propósito y criterios para comunicar resultados (≈300 palabras) */
            {
              type: "paragraph",
              text: "La presentación de resultados es la bisagra que convierte los datos recolectados durante la evaluación docente en conocimiento accionable. No basta con tabular puntajes o describir tendencias: es imprescindible transformarlos en hallazgos claros, contextualizados y vinculados con decisiones de mejora. Por ello, un buen informe debe partir de un propósito explícito (formativo, sumativo, diagnóstico o mixto), declarar sus criterios y estándares, y explicar los alcances y límites de los instrumentos aplicados. Asimismo, debe organizar la información con una narrativa lógica: de los objetivos y la metodología, a los principales hallazgos, para culminar con recomendaciones priorizadas y un plan de seguimiento. Visualizaciones sencillas (tablas, gráficos de barras, diagramas de radar para competencias) ayudan a sintetizar patrones y facilitan la discusión colegiada. La transparencia metodológica –qué, cómo, cuándo y con qué fiabilidad se midió– fortalece la credibilidad del proceso y la disposición del profesorado para utilizar los resultados. Igualmente importante es el tono: el reporte debe ser respetuoso, descriptivo y orientado a la mejora, evitando juicios ad hominem. Finalmente, todo informe debe cerrar con un mapa de acciones (qué se hará, quién es responsable, en qué plazo y con qué evidencia de logro) y con los mecanismos de retroalimentación continua (tutorías, comunidades de práctica, ciclos de micro‑mejora) que permitirán convertir el resultado en transformación de la práctica.",
            },

            /* Acordeón 1 — Plantillas y formatos recomendados (insertado entre párrafos) */
            {
              type: "accordion",
              header: "Plantillas y formatos recomendados para reportar",
              open: false,
              text:
                "* **Resumen ejecutivo (1–2 páginas):** objetivos, métodos, hallazgos clave y 3–5 recomendaciones priorizadas.  \n" +
                "* **Informe técnico completo:** marco conceptual, validez/confiabilidad de instrumentos, análisis detallado (cuantitativo y cualitativo) y anexos.  \n" +
                "* **Dashboards interactivos (LMS/BI):** gráficas comparativas por dimensión/indicador, filtros por cohorte y alertas tempranas.  \n" +
                "* **Ficha individual de retroalimentación docente:** síntesis de fortalezas, áreas de oportunidad y micro‑metas SMART con fechas de revisión.",
            },

            /* Párrafo 2 — Estrategias de comunicación y gestión del cambio (≈300 palabras) */
            {
              type: "paragraph",
              text: "La forma de comunicar los resultados condiciona su aceptación e impacto. Una estrategia efectiva combina reportes escritos con espacios dialógicos: reuniones uno a uno para profundizar en el perfil individual, sesiones colegiadas para discutir patrones institucionales y talleres de co‑diseño de planes de mejora. Presentar la información con un enfoque apreciativo —visibilizando fortalezas y oportunidades— incrementa la autoeficacia y reduce la resistencia. Además, conviene separar con nitidez los usos formativos (mejora) de los administrativos (promoción, incentivos), explicando reglas y criterios desde el inicio. Para sostener el cambio, los hallazgos deben traducirse en compromisos concretos: metas medibles, recursos asignados (tiempo, acompañamiento pedagógico, materiales) y un cronograma de seguimiento. Las rúbricas de progreso, los ciclos cortos de experimentación docente (plan‑do‑study‑act) y la mentoría entre pares son palancas que convierten el informe en un proceso continuo. Finalmente, la ética de datos es innegociable: anonimización cuando corresponda, acceso diferenciado a la información, resguardo seguro y comunicación responsable que evite estigmatizar a personas o programas. Un sistema de retroalimentación bidireccional —donde los docentes puedan cuestionar, complementar y reinterpretar los resultados— aumenta la validez percibida y refuerza la cultura de mejora continua.",
            },

            /* Acordeón 2 — Errores comunes y cómo evitarlos (insertado entre párrafos) */
            {
              type: "accordion",
              header:
                "Errores frecuentes al presentar resultados (y cómo evitarlos)",
              open: false,
              text:
                "* **Saturar con tablas sin interpretación:** agrega resúmenes ejecutivos y visualizaciones clave.  \n" +
                "* **Reducir el desempeño a un único índice:** triangula evidencias cualitativas y cuantitativas.  \n" +
                "* **Culpar al docente sin considerar el contexto:** incorpora variables de entorno y condiciones de trabajo.  \n" +
                "* **No proponer rutas de mejora:** acompaña cada hallazgo con acciones, responsables, plazos e indicadores.  \n" +
                "* **Confundir usos formativos y punitivos:** explicita propósitos, audiencias y consecuencias desde el inicio.",
            },

            /* Párrafo 3 — Del informe al plan de mejora y al seguimiento (≈300 palabras) */
            {
              type: "paragraph",
              text: "El valor real de la presentación de resultados se verifica en el **después**: cuando la institución y el profesorado convierten los hallazgos en planes de mejora con metas SMART (específicas, medibles, alcanzables, relevantes y temporales) y establecen ciclos de seguimiento. Un buen cierre incluye matrices de acciones (qué, cómo, con qué recursos), indicadores de proceso y de resultado, así como momentos de revisión intermedia para ajustar la estrategia. Es recomendable institucionalizar un **tablero de control pedagógico** que concentre avances, alertas y evidencias (planificaciones ajustadas, nuevas rúbricas, resultados de aprendizajes, productos de aula). La retroalimentación debe ser iterativa: breve, frecuente y orientada a la práctica, idealmente acompañada por coaching instruccional o comunidades de práctica. Además, compartir buenas prácticas identificadas en los informes —mediante seminarios internos, repositorios de portafolios o micro‑credenciales— genera efectos de arrastre positivos y reduce la percepción de la evaluación como mecanismo sancionador. Finalmente, documentar el proceso (qué funcionó, qué no, por qué) alimenta una memoria institucional que mejora la calidad metodológica de futuras evaluaciones. Así, el informe deja de ser un documento estático para convertirse en un **ciclo de mejora continua**, trazable y verificable, que impacta directamente en la enseñanza y en el aprendizaje.",
            },

            /* Video de apoyo */
            {
              type: "video",
              title:
                "Cómo presentar resultados de evaluación docente para la mejora continua",
              src: "https://www.youtube.com/watch?v=oXJgYrhIeB4",
              caption:
                "Guía práctica para transformar datos en decisiones pedagógicas y planes de mejora accionables.",
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
          href: "https://www.youtube.com/watch?v=oO53ib3b1PM&t=36s ", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "EN VIVO | ¿QUÉ OBSERVAR EN UNA CLASE? | ¿VISITAS TÉCNICAS PEDAGÓGICAS? https://www.youtube.com/watch?v=mlqjbtXVfZU",
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
            "Perrenoud, P. (2019). Diez nuevas competencias para enseñar. Barcelona, España: Editorial Graó.",
            "Popham, W. J. (2012). Evaluación educativa: Conceptos y aplicaciones. Ciudad de México: Pearson.",
            "Scriven, M. (1991). Evaluación de la enseñanza: Perspectivas y enfoques. Madrid, España: Alianza Editorial.",
            "Tobón, S. (2010). Formación basada en competencias: pensamiento complejo, diseño curricular y didáctica. Bogotá, Colombia: ECOE Ediciones.",
            "Zabalza, M. A. (2003). Competencias docentes del profesorado universitario: Calidad y desarrollo profesional. Madrid, España: Narcea Ediciones.",
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
