/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MED",
  courseId: "MED-DPC",
  id: "MED-DPC-mod2",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Didáctica de los procesos cognitivos",
  title: "Módulo 2. Enfoque constructivista",
  semestre: "Tercer semestre",
  teacher: "Dra. Rosa Dianeth Hernández Aguilera",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar el paradigma constructivista y su incorporación al proceso de enseñanza-aprendizaje.",
  competencies: [
    "Identifica los principales usos y aplicaciones del enfoque constructivista para planear clases.",
    "Diseña secuencias didácticas con criterios constructivistas para favorecer el logro del aprendizaje.",
    "Selecciona estrategias de enseñanza-aprendizaje coherentes con el paradigma constructivista en su práctica profesional.",
  ],

  /* ── Contenido temático (jerarquía recursiva) ─────────── */
  themes: [
    /* 0. Página Info (opcional) */
    {
      id: "2.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [],
    },

    /* Unidad 2 (según el PDF: “Enfoque constructivista”) */
    {
      id: "2",
      numbering: "Unidad 2",
      title: "Enfoque constructivista",
      content: [
        {
          type: "paragraph",
          text: "El enfoque constructivista parte de una premisa contundente: el conocimiento no se recibe pasivamente, se construye activamente. El estudiante organiza y re-organiza significados a partir de sus saberes previos, metas, intereses y del contexto sociocultural en el que aprende. Para la didáctica, este principio implica diseñar experiencias que convoquen a observar, preguntar, explicar, argumentar, modelar y crear, no solo a repetir. La clase deja de ser un monólogo y se convierte en un espacio de investigación guiada donde las tareas funcionan como disparadores de procesos cognitivos relevantes. La mediación del docente articula contenidos, preguntas y recursos para que el alumnado elabore representaciones más potentes, detecte errores conceptuales y logre transferir lo aprendido a situaciones nuevas. Bajo esta perspectiva, la “cobertura” de temas pierde centralidad frente a la comprensión profunda y la transferencia. El currículo se interpreta, no se aplica mecánicamente: se seleccionan ideas clave, se establecen criterios de logro, se decide la progresión de apoyos y se planifica cómo se recogerán evidencias de aprendizaje en el proceso, no solo al final. Así, el constructivismo profesionaliza la práctica: obliga a justificar cada decisión didáctica por su contribución al aprendizaje.",
        },
        {
          type: "paragraph",
          text: "Traducir el constructivismo a decisiones operativas exige alineación entre propósitos, actividades y evaluación. Primero, se definen resultados de aprendizaje observables (verbo + contenido + criterio). Segundo, se diagnostican saberes previos para ajustar la entrada y la dificultad. Tercero, se diseñan tareas auténticas que convoquen procesos deseados (interpretar, explicar, aplicar, argumentar, crear) y que conecten con problemas verosímiles. Cuarto, se planifican andamiajes: modelados, ejemplos y contraejemplos, preguntas guía, organizadores gráficos y micro-rubricas para que el estudiante sepa qué significa “hacerlo bien”. Quinto, se integra evaluación formativa: evidencias frecuentes, retroalimentación específica y oportunidades de mejora. Sexto, se gestiona el tiempo y la carga cognitiva: se fragmentan desafíos complejos, se alternan modalidades (individual/colaborativa) y se reserva espacio para la metacognición. Esta lógica evita la acumulación de actividades sueltas y favorece trayectorias de aprendizaje con sentido. El foco pasa de “terminar la guía” a “lograr el criterio”.",
        },
        {
          type: "paragraph",
          text: "El rol del docente cambia de expositor principal a diseñador y mediador de experiencias. Diseña cuando selecciona ideas nucleares, secuencia tareas y explicita criterios. Media cuando ajusta apoyos en tiempo real a partir de evidencias de comprensión (preguntas, productos intermedios, explicaciones orales), regula el clima emocional y gestiona la participación. Una mediación eficaz equilibra desafío y apoyo: si la tarea es demasiado fácil, no hay aprendizaje; si es demasiado difícil sin andamiaje, se dispara la frustración. La diferenciación es clave: se pueden variar recursos, caminos o productos sin rebajar estándares. También importa la arquitectura de las interacciones: protocolos de diálogo, roles rotativos en equipos, turnos de voz, fichas de pensamiento y rutinas metacognitivas que ayudan a externalizar el razonamiento. Gestionar la carga cognitiva significa presentar la información en bloques significativos, eliminar ruido, usar ejemplos progresivos y promover que el alumnado explique con sus palabras. Así, la comprensión se vuelve visible y, por tanto, enseñable.",
        },
        {
          type: "paragraph",
          text: "La evaluación, en clave constructivista, se concibe como regulación del aprendizaje. Más que un cierre, es el mecanismo que informa cómo avanzar. Por eso se vuelve imprescindible especificar criterios públicos de calidad, recoger evidencias frecuentes y ofrecer retroalimentación accionable: concreta, oportuna y conectada al objetivo. Las rúbricas analíticas describen niveles de desempeño; las listas de cotejo aclaran condiciones mínimas; los protocolos de observación focalizan indicadores de proceso (colaboración, argumentación, uso de fuentes); los portafolios y diarios de aprendizaje documentan progresión y reflexión. Este ecosistema permite a estudiantes y docentes tomar decisiones: repetir con mejora, re-enseñar un concepto núcleo, ampliar el desafío o cambiar de estrategia. Evaluar para aprender no significa “ser blandos”: significa sostener la exigencia con información útil. La calificación llega, pero después de que la evaluación ya cumplió su función pedagógica. El aula se convierte, entonces, en un laboratorio donde se prueban hipótesis didácticas y se toman decisiones basadas en evidencias.",
        },
        {
          type: "paragraph",
          text: "Finalmente, el constructivismo convoca una cultura de mejora continua. La innovación no se mide por la novedad del recurso, sino por el incremento en comprensión y transferencia. Las TIC se integran cuando amplían la práctica deliberada y la retroalimentación (sondeos en vivo, foros estructurados, grabación de micro-explicaciones, gestores de evidencias), no por moda. La investigación-acción y la observación entre pares institucionalizan el aprendizaje profesional: se identifica un problema, se diseña una intervención, se recogen datos, se analizan y se ajusta. Se renuncia a lo accesorio que no aporta al objetivo y se prioriza lo que genera impacto. La inclusión se entiende como diseño desde el inicio para la diversidad: accesibilidad, múltiples representaciones, opciones de expresión y distintos caminos para demostrar dominio. Con estas prácticas, el enfoque constructivista deja de ser un eslogan y se vuelve un estándar profesional: decisiones justificadas, aprendizajes visibles y evaluaciones que enseñan.",
        },

        /* Acordeón (3 niveles) */
        {
          type: "accordion",
          header: "Claves prácticas, errores comunes e indicadores de éxito",
          open: false,
          text:
            "• Claves prácticas:\n" +
            "  – Objetivos observables y criterios públicos.\n" +
            "  – Tareas auténticas con andamiaje explícito.\n" +
            "  – Evaluación formativa con evidencias frecuentes.\n\n" +
            "• Errores comunes:\n" +
            "  – Actividad sin propósito (desalineación objetivo-tarea-evidencia).\n" +
            "  – Sobrecarga de consignas y materiales.\n" +
            "  – Retroalimentación vaga o tardía.\n\n" +
            "• Indicadores de éxito:\n" +
            "  – Estudiantes que explican con sus palabras y argumentan con evidencias.\n" +
            "  – Productos que muestran progreso respecto a criterios.\n" +
            "  – Ajustes didácticos documentados a partir de datos.",
        },
      ],

      /* → Subtemas de primer nivel (seis temas del PDF) */
      subthemes: [
        {
          id: "3.3",
          numbering: "3.3",
          title: "La inteligencia emocional y su praxis",
          content: [
            {
              type: "paragraph",
              text: "Hablar de la praxis de la inteligencia emocional (IE) implica traducir definiciones y modelos en acciones concretas de aula. Desde una perspectiva pedagógica, la IE se operacionaliza como un conjunto de competencias observables —percibir, comprender, usar y regular emociones— que se entrenan en situaciones instruccionales reales. En la práctica, esto comienza por el diseño de ambientes emocionalmente seguros que reduzcan la amenaza y faciliten la atención sostenida: normas de convivencia consensuadas, expectativas claras y retroalimentación formativa que distingue desempeño de identidad. El docente introduce activadores afectivos con sentido (preguntas generadoras, dilemas morales, ejemplos culturalmente relevantes) para movilizar la curiosidad y, al mismo tiempo, ofrece andamiaje de autorregulación (pausas breves, respiración guiada, etiquetado de emociones, reencuadre cognitivo) que devuelve recursos atencionales a la tarea. La IE en acción también reorganiza tiempos y ritmos: se planifican aperturas que alinean estado emocional con propósito académico; se alternan tareas de alta y baja carga; se intercalan micro-prácticas de serenidad antes de evaluaciones. Todo ello se evalúa con evidencias: agentes y momentos de auto, co y heteroevaluación que incorporan indicadores de conciencia emocional, estrategias de regulación y calidad de la interacción social. La praxis, en suma, no adorna la didáctica: la vuelve viable bajo condiciones humanas reales.",
            },
            {
              type: "accordion",
              header: "Rutinas de aula (IE en 5 minutos)",
              open: false,
              text:
                "- Apertura emocional: una pregunta breve de clima (‘¿con qué energía llegas y por qué?’).\n" +
                "- Etiquetado + plan: nombra la emoción y define una microestrategia (‘tenso → respiración 4-4-4-4’).\n" +
                "- Cierre: ‘qué funcionó hoy y qué haré distinto’ para consolidar metacognición emocional.",
            },
            {
              type: "paragraph",
              text: "La motivación académica es un vector clave de la praxis: metas bien definidas (dominio, logro, cooperación) orientan la conducta y vinculan emoción con perseverancia. Cuando el estudiante interpreta el esfuerzo como vía de crecimiento, las emociones de logro (interés, satisfacción) se vuelven combustible para la autorregulación. Por eso, la secuencia didáctica incluye metas próximas y criterios de éxito explícitos, y convierte la retroalimentación en guía procesual (‘qué mantener/ajustar’), no en veredicto identitario. La praxis de IE también se expresa en la gestión de la interacción social: roles claros en equipos, protocolos de diálogo (escucha activa, validación, desacuerdo respetuoso) y acuerdos de reparación tras el conflicto. En este marco, la IE no se limita a “portarse bien”; se traduce en toma de turnos, negociación de significados y coordinación de acciones orientadas a metas compartidas. Finalmente, la prevención psicoeducativa integra contenidos socioemocionales al currículo: alfabetización emocional básica, práctica deliberada de empatía y análisis guiado de casos cotidianos (rumores, exclusiones, frustraciones ante la evaluación) para transferir estrategias a la vida escolar.",
            },
            {
              type: "accordion",
              header: "Indicadores de evidencia (observables de IE)",
              open: false,
              text:
                "- Conciencia: el alumno nombra estados afectivos con precisión y los vincula a la tarea.\n" +
                "- Regulación: aplica estrategias acordadas (pausa, respiración, reencuadre) sin supervisión constante.\n" +
                "- Interacción: pide/da ayuda con asertividad, repara daños y mantiene foco en la meta común.",
            },
            {
              type: "paragraph",
              text: "La praxis se robustece con un enfoque de escuela entera: coherencia entre aula, tutoría y clima institucional. Esto implica capacitar al profesorado en habilidades de IE, alinear reglamentos con prácticas restaurativas y asegurar que la evaluación incluya indicadores socioemocionales pertinentes a cada nivel educativo. Un proyecto de centro con IE evita el “activismo suelto” y propone progresiones: desde el reconocimiento básico de emociones en preescolar hasta la autorregulación estratégica y la mediación de conflictos en secundaria o educación superior. Además, vincula IE con otras prioridades (convivencia, prevención de violencia, bienestar docente) para obtener sinergias visibles: menos incidentes disciplinarios, mayor compromiso conductual y académico, mejoras en climas de aula y retención. En síntesis, la IE puesta en práctica articula estructura (normas, roles, tiempos), método (estrategias, retroalimentación) y cultura (valores vividos), de modo que el aprendizaje profundo sea sostenible y equitativo.",
            },
          ],
        },

        {
          id: "3.4",
          numbering: "3.4",
          title:
            "El manejo de la inteligencia emocional y la transmisión de conocimientos",
          content: [
            {
              type: "paragraph",
              text: "Manejar la inteligencia emocional en clase no es un extra decorativo de la enseñanza, sino una condición que modula la transmisión y construcción del conocimiento. La afectividad influye en la atención, en la memoria de trabajo y en la toma de decisiones; por tanto, ignorarla encarece cognitivamente cualquier explicación o práctica. Traducido a didáctica: el docente planifica el ‘cómo se siente’ del aprendizaje junto al ‘qué y cómo se enseña’. Antes de exponer contenidos complejos, se reducen distractores emocionales (incertidumbre sobre criterios, temor a la exposición pública), se explicitan metas y se anticipan dificultades típicas con estrategias de afrontamiento. Durante la explicación, se intercalan pausas para autorregulación y se promueven preguntas que conectan emoción y comprensión (‘¿qué parte te frustra y cómo la abordas?’). En la práctica, se fomenta el ensayo con feedback inmediato y lenguaje de crecimiento. La transmisión del conocimiento deja de ser monólogo y se vuelve diálogo regulado emocionalmente: el alumnado percibe desafío alto + apoyo alto, combinación que potencia esfuerzo sostenido y dominio conceptual.",
            },
            {
              type: "accordion",
              header: "Estrategias de regulación integradas a la instrucción",
              open: false,
              text:
                "- Preparar: micro-respiración y visualización breve antes de evaluaciones o exposiciones.\n" +
                "- Mientras: ‘pausas de carga’ cada 10–12 minutos en explicaciones densas para recuperar foco.\n" +
                "- Después: cierre emocional + plan de mejora (qué haré distinto la próxima vez y con qué apoyo).",
            },
            {
              type: "paragraph",
              text: "La transmisión efectiva requiere que el conocimiento viaje por canales relacionales saludables. Habilidades socioemocionales como la empatía, la asertividad y la conciencia social facilitan la interacción académica: pedir ayuda sin vergüenza, ofrecerla sin paternalismo, disentir sin descalificar. Cuando estos repertorios se enseñan explícitamente, disminuyen incidentes de indisciplina y violencia y aumentan la cooperación productiva. Al mismo tiempo, se atiende la motivación: metas de dominio y sentido de pertenencia protegen el esfuerzo y mediatizan emociones de frustración en “curiosidad por resolver”. La escuela que integra educación emocional no solo previene conductas de riesgo (violencia, consumo, aislamiento), también promueve bienestar y sentido de agencia, condiciones que amplifican la retención y el rendimiento.",
            },
            {
              type: "accordion",
              header: "Evaluación con lente emocional (sin bajar el rigor)",
              open: false,
              text:
                "- Rúbricas que incluyen indicadores de autorregulación e interacción (p. ej., ‘maneja frustración sin abandonar’).\n" +
                "- Coevaluación guiada con protocolos de feedback descriptivo (‘observo, interpreto, sugiero’).\n" +
                "- Evidencias mixtas: desempeño académico + registros breves de estrategias de regulación usadas.",
            },
            {
              type: "paragraph",
              text: "Para sostener el manejo emocional en la transmisión del conocimiento, el profesorado necesita cuidado y herramientas. Dos líneas son esenciales: (1) formación continua en alfabetización emocional, técnicas de regulación y comunicación no violenta; (2) políticas de bienestar docente que atiendan carga laboral, espacios de apoyo entre pares y liderazgo pedagógico que modele prácticas restaurativas. La consistencia institucional evita el ‘doble mensaje’ (promover IE al alumnado pero ignorar el estrés docente) y consolida una cultura donde enseñar y aprender es también un ejercicio de salud mental. Con ello, la clase evoluciona desde la mera entrega de información hacia experiencias de aprendizaje exigentes y humanas, donde comprender, recordar y transferir resulta más probable porque el sistema emocional trabaja a favor del objetivo educativo.",
            },
          ],
        },

        {
          id: "3.5",
          numbering: "3.5",
          title: "La escuela centrada en el individuo",
          content: [
            {
              type: "paragraph",
              text: "Una escuela centrada en el individuo reconoce la diversidad de perfiles —cognitivos, emocionales, culturales— y organiza su propuesta pedagógica para que cada estudiante encuentre un camino de participación y logro. Este enfoque dialoga con las inteligencias múltiples y con la inteligencia emocional: no presupone un ‘alumno promedio’, sino múltiples maneras válidas de comprender, expresar y relacionarse. En lo práctico, se traduce en diseño universal para el aprendizaje (DUA): múltiples formas de representación (cómo acceden a la información), de acción/expresión (cómo demuestran lo aprendido) y de implicación (cómo se motivan y perseveran). La IE entra como ‘sistema operativo’ que habilita esas opciones: conciencia de estados emocionales, estrategias de autorregulación ante la dificultad y habilidades de convivencia para trabajar con otros distintos a mí. Centrar la escuela en el individuo no diluye estándares; redistribuye apoyos y ajusta rutas para alcanzar metas comunes.",
            },
            {
              type: "accordion",
              header: "Decisiones de aula centradas en la persona",
              open: false,
              text:
                "- Opciones de producto: ensayo, póster, podcast o demostración oral con criterios compartidos.\n" +
                "- Ritmos diferenciados y checkpoints: metas próximas con tutorías breves para ajustar estrategia.\n" +
                "- Elección informada: mini-menús de tareas con distintos niveles de desafío y andamiaje.",
            },
            {
              type: "paragraph",
              text: "Este enfoque exige ampliar la noción de ‘transmisión’ hacia ‘participación con sentido’. La escuela no solo distribuye contenidos; socializa e individualiza, ayuda a construir identidad, autoconcepto y autoestima a partir de experiencias académicas y relacionales. Desde la IE, se crean oportunidades de éxito frecuente, se cuida el lenguaje evaluativo (centrado en proceso y estrategia), se reducen comparaciones desadaptativas y se modela la reparación tras los errores. En convivencia, se practican roles rotativos y mediación de conflictos; en tutoría, metas personales con seguimiento emocional; en evaluación, evidencias variadas y ciclos de retroalimentación que fortalecen agencia. Cuando el alumno se siente visto y competente, la persistencia aumenta y el clima mejora: la emoción, de amenaza, pasa a ser aliada del aprendizaje.",
            },
            {
              type: "accordion",
              header:
                "Criterios para una cultura escolar centrada en el estudiante",
              open: false,
              text:
                "- Coherencia institucional: reglamentos y prácticas restaurativas alineadas.\n" +
                "- Bienestar docente como condición de posibilidad: apoyo entre pares, tiempos realistas, liderazgo pedagógico.\n" +
                "- Indicadores de éxito: logros académicos + clima, pertenencia, participación y reducción de incidentes.",
            },
            {
              type: "paragraph",
              text: "Cimentar una escuela centrada en el individuo es un proceso gradual de mejora continua. Se empieza por una visión compartida y objetivos medibles (p. ej., aumentar la percepción de seguridad psicológica y la participación en clase), se eligen prácticas de alto impacto (rutinización de apertura/cierre emocional, opciones de producto, rúbricas con autorregulación), y se instala un ciclo de datos breve (evidencias de aprendizaje y clima) para iterar decisiones. En el tiempo, emergen efectos colaterales positivos: menor ausentismo, más compromiso conductual, relaciones más cooperativas y, sobre todo, aprendizajes más transferibles. La escuela confirma así que atender la dimensión emocional y la singularidad del estudiante no es concesión ‘blanda’, sino ingeniería pedagógica rigurosa para que el conocimiento llegue a destino en más alumnos y con mayor profundidad.",
            },
          ],
        },
        {
          id: "2.4",
          numbering: "2.4",
          title:
            "El alumno y sus diversas formas de asignación de significados",
          content: [
            {
              type: "paragraph",
              text: "Abordar la asignación de significados desde el constructivismo implica reconocer que el alumno no ‘recibe’ el conocimiento como un paquete cerrado, sino que lo reconstruye activamente a partir de sus esquemas previos, de su historia de aprendizaje, de la situación social en la que participa y de las metas que orientan su conducta. En la práctica, todo contenido escolar se encuentra con una mente que ya posee conceptos, creencias, valores y experiencias; por ello, el nuevo material solo puede ser comprendido cuando se relaciona de modo no arbitrario con esa base preexistente. La asignación de significados, entonces, no es un acto puntual ni exclusivamente cognitivo: integra componentes afectivos (interés, ansiedad, autoeficacia), sociales (normas, lenguaje compartido, mediación docente y de pares) y contextuales (tareas auténticas, propósitos claros, criterios de éxito). Desde esta perspectiva, el rol del docente se transforma: más que “transmitir”, crea condiciones para que el alumno elabore, contraste, negocie y estabilice significados progresivamente más inclusivos y diferenciados. Esto exige hacer visibles los conocimientos previos, anticipar malentendidos típicos, promover explicaciones propias, conectar con situaciones familiares y proporcionar andamiajes que permitan reorganizar la comprensión. En suma, la construcción del significado es un proceso dialéctico entre el contenido cultural ya elaborado y la actividad mental del estudiante, mediatizado por la interacción social, el lenguaje y los instrumentos simbólicos disponibles en el aula. Concebirlo así evita prácticas mecánicas y favorece trayectorias de comprensión en las que el error no se castiga sino que se interpreta como pista diagnóstica para avanzar hacia modelos explicativos más potentes y transferibles a nuevas situaciones.",
            },
            {
              type: "accordion",
              header:
                "Indicadores observables de ‘construcción de significado’",
              open: false,
              text:
                "- El estudiante explica con sus palabras y usa ejemplos propios.\n" +
                "- Reconoce y corrige malentendidos tras la retroalimentación.\n" +
                "- Conecta el nuevo contenido con experiencias o saberes previos (analogías, mapas, casos).",
            },
            {
              type: "paragraph",
              text: "Cuando el alumno asigna significado, coordina representaciones diversas (verbales, visuales, procedimentales) y las somete a contrastación con evidencias y con el punto de vista de otros. Este proceso, descrito por la psicología educativa constructivista, se ve favorecido por ciertas decisiones didácticas: (1) activar sistemáticamente conocimientos previos mediante preguntas generadoras, organizadores previos o casos ancla; (2) secuenciar tareas que exijan explicar, justificar y modelar procedimientos, no solo responder; (3) introducir discrepancias productivas—conflictos cognitivos—para provocar reestructuración; (4) promover interacción guiada en la que los estudiantes argumenten, escuchen y negocien significados; y (5) evaluar con evidencias que muestren cómo cambian las concepciones a lo largo del tiempo (borradores, diarios de aprendizaje, comparaciones ‘antes/después’). La asignación de significados también reclama atender la dimensión afectiva: sin seguridad psicológica y sin metas con sentido, el esfuerzo interpretativo decae. En consecuencia, conviene explicitar para qué se aprende, cómo se usará lo aprendido y qué estrategias de autorregulación emocional están disponibles para persistir frente a la dificultad. En este marco, el alumno deja de ser mero reproductor y asume el papel de autor de sus comprensiones; el aula, por su parte, deviene comunidad de indagación donde el lenguaje, las herramientas simbólicas y la guía del docente median la construcción compartida del conocimiento. Así se transita de definiciones superficiales a explicaciones cada vez más ricas, útiles y transferibles.",
            },
            {
              type: "accordion",
              header: "Decisiones didácticas que potencian el significado",
              open: false,
              text:
                "- Preguntas puente y organizadores previos que mapean el territorio conceptual.\n" +
                "- Andamiajes graduales (modelado → práctica guiada → autonomía con feedback).\n" +
                "- Tareas auténticas que exigen aplicar y explicar, no solo recordar.",
            },
          ],
        },

        {
          id: "2.5",
          numbering: "2.5",
          title:
            "Los conceptos, conocimientos y actitudes como ejes de la construcción del conocimiento",
          content: [
            {
              type: "paragraph",
              text: "Organizar el currículo en torno a ejes—conceptos, conocimientos y actitudes—responde a la necesidad de articular lo que los estudiantes deben comprender (marcos conceptuales), lo que deben saber y saber hacer (declarativo y procedimental) y cómo deben situarse frente a ese saber (actitudes, valores, disposiciones). En clave constructivista, estos ejes no son compartimentos estancos: se interdefinen y se fortalecen mutuamente. Un concepto adquiere sentido cuando puede usarse para explicar, predecir o resolver problemas; un conocimiento procedimental se torna potente cuando se entiende por qué funciona; una actitud favorable hacia el aprendizaje sostiene la persistencia y modula la autorregulación. Por ello, la planificación didáctica debe partir de conceptos organizadores, explicitar relaciones entre ideas, proponer prácticas deliberadas y, a la vez, promover una cultura de aula que valore el esfuerzo, la colaboración y el pensamiento crítico. Este triple enfoque exige progresiones: de nociones intuitivas a conceptos formales, de imitaciones a procedimientos estratégicos, de actitudes reactivas a disposiciones reflexivas. También demanda coherencia evaluativa: evidencias que capten comprensión conceptual (mapas, explicaciones causales), dominio procedimental (desempeños, productos) y desarrollo actitudinal (observables de participación, responsabilidad, respeto).",
            },
            {
              type: "accordion",
              header: "Criterios para secuenciar por ejes",
              open: false,
              text:
                "- Conceptos: de inclusores amplios a especializaciones, cuidando pre-requisitos.\n" +
                "- Conocimientos (declarativos y procedimentales): del modelado al desempeño autónomo.\n" +
                "- Actitudes: de normas explícitas a regulación interna con autoevaluación.",
            },
            {
              type: "paragraph",
              text: "Trabajar con ejes implica diseñar experiencias en las que el estudiante conecte conceptos con acciones y con un posicionamiento ético y colaborativo. En términos prácticos, ello se traduce en secuencias que alternan explicación y práctica significativa, integran estudio de casos, y culminan en tareas auténticas donde el alumno debe argumentar, decidir y justificar su proceder. Las actitudes se enseñan—y se aprenden—cuando el aula ofrece oportunidades reales para ejercerlas: roles de equipo, protocolos de diálogo, responsabilidad compartida en proyectos, y rúbricas que incluyan indicadores socioemocionales. Desde la perspectiva institucional, este enfoque guía la selección y organización del contenido, regula la carga cognitiva y da sentido a la evaluación formativa: permite retroalimentar de manera específica qué concepto falta integrar, qué procedimiento requiere más práctica deliberada y qué disposiciones conviene fortalecer. Así, conceptos, conocimientos y actitudes no se suman; se orquestan para producir comprensión profunda y desempeño competente en contextos diversos.",
            },
            {
              type: "accordion",
              header: "Evidencias alineadas con cada eje",
              open: false,
              text:
                "- Conceptos: explicaciones causales, comparación/contraste, mapas conceptuales.\n" +
                "- Conocimientos: resolución de problemas, productos funcionales, desempeño práctico.\n" +
                "- Actitudes: observación de participación, coevaluación guiada, diarios reflexivos.",
            },
          ],
        },

        {
          id: "2.6",
          numbering: "2.6",
          title: "Condiciones generadoras del aprendizaje significativo",
          content: [
            {
              type: "paragraph",
              text: "El aprendizaje significativo—en la tradición de Ausubel y desarrollos posteriores—se produce cuando el nuevo material se relaciona de forma sustancial y no arbitraria con los conocimientos previos del alumno, cuando existe disposición para aprender y cuando los materiales poseen significado lógico potencial. Estas tres condiciones, lejos de ser abstractas, se traducen en decisiones concretas de diseño e interacción pedagógica. En primer lugar, es necesario diagnosticar lo que los estudiantes ya saben y cómo lo saben, de modo que el docente pueda seleccionar organizadores previos, ejemplos y analogías que reduzcan la distancia conceptual. En segundo lugar, conviene trabajar la disposición: clarificar metas, dotar de sentido, ajustar desafío y apoyo, y enseñar estrategias de autorregulación que sostengan el esfuerzo (planificación, control atencional, reencuadre). En tercer lugar, los materiales deben estar estructurados para evidenciar relaciones internas—jerarquías, inclusiones, causalidades—y no constituir listas descontextualizadas. La evaluación, por su parte, debe promover explicación, transferencia y revisión de malentendidos, evitando el énfasis exclusivo en recuerdo literal. Así, las condiciones no son un ‘checklist’ eventual: operan en paralelo antes, durante y después de la instrucción, y requieren cultura de aula donde el error es insumo, la colaboración es recurso y la comprensión, el criterio principal de éxito.",
            },
            {
              type: "accordion",
              header: "Organizadores previos eficaces (antes de enseñar)",
              open: false,
              text:
                "- Presentan ideas inclusoras que ‘anclan’ lo nuevo (panorama global antes del detalle).\n" +
                "- Conectan con lo familiar mediante analogías y casos próximos al estudiante.\n" +
                "- Anticipan vocabulario clave y relaciones entre conceptos (mapas, esquemas).",
            },
            {
              type: "paragraph",
              text: "Durante la enseñanza, la condición de ‘significado no arbitrario’ se asegura cuando el docente hace explícitas las relaciones entre ideas, modela cómo se enlaza lo nuevo con lo previo y promueve que el alumnado explique con sus palabras, compare, contraste y argumente. Estrategias como el señalamiento de la estructura (resaltar inclusores, causas, consecuencias), las preguntas intercaladas que obligan a integrar (¿cómo se relaciona X con Y?, ¿qué cambiaría si…?) y las pausas de consolidación (minimapas, resúmenes parciales) refuerzan la construcción activa. Tras la enseñanza, se cristaliza el aprendizaje significativo con tareas de aplicación en contextos nuevos, revisión de errores frecuentes y retroalimentación que haga visibles procesos y no solo resultados. De forma transversal, el clima emocional importa: ansiedad y amenaza reducen memoria de trabajo y flexibilidad; seguridad y pertenencia facilitan atención y transferencia. Por ello, las condiciones generadoras no son únicamente cognitivas: incluyen normas de interacción, tiempos y ritmos que cuidan la carga afectiva, y prácticas de evaluación formativa que legitiman el ensayo y el ajuste.",
            },
            {
              type: "accordion",
              header:
                "Señalamiento y vínculo con lo familiar (durante y después)",
              open: false,
              text:
                "- Señalamiento: títulos informativos, resaltado de ideas rectoras, ejemplos no redundantes.\n" +
                "- Vínculo: analogías funcionales, diagramas de flujo, problemas isomorfos para transferir.\n" +
                "- Consolidación: cierre metacognitivo (‘qué entendí, qué evidencias tengo, qué ajustaré’).",
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
          href: "https://youtu.be/8gBgucv25Ic", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Constructivismo | Conceptos Clave | Exponentes | Postulados | Características https://youtu.be/cpeB4ncb5uE",
            "DPC-Sem1 https://youtu.be/8gBgucv25Ic",
            "El Constructivismo hoy: enfoques constructivistas en educación https://www.redalyc.org/pdf/155/15519374001.pdf",
            "El constructivismo como teoría y método de enseñanza https://www.redalyc.org/pdf/4418/441846096005.pdf",
            "La responsabilidad del estudiante en un modelo pedagógico constructivista en programas de Ciencias de la Salud http://www.scielo.org.co/pdf/sun/v27n1/v27n1a13.pdf",
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
            "Arancibia, V., Herrera, P. & Strasser, K. (2007). *Manual de psicología educacional.* Santiago: Digitalia.",
            "Ausubel, D. (1978). *Psicología Educativa desde un punto de vista cognoscitivo.* México: Trillas.",
            "Ausubel, D. P., Novak, J. D. & Hanesian, H. (1983). *Psicología Educativa.* México: Trillas.",
            "Beltrán, Ll. J. & Bueno, J. (1995). *Psicología de la educación.* México: Alfa Omega.",
            "Bigge, M. L. & Hunt, M. P. (1979). *Bases psicológicas de la educación.* México: Trillas.",
            "Coll, S. C. (1990). *Aprendizaje escolar y construcción del conocimiento.* Madrid: Paidós.",
            "Díaz Barriga Arceo, F. & Hernández Rojas, G. (1998). *Estrategias docentes para un aprendizaje significativo.* México: McGraw-Hill.",
            "Feldman, R. S. (2005). *Psicología: con aplicaciones en países de habla hispana.* México: McGraw-Hill.",
            "Good, L. T. & Boorphy, J. (1997). *Psicología Educativa Contemporánea.* México: Mc Graw Hill.",
            "Marx, M. H. & Hillix, W. A. (1987). *Sistemas y teorías. Psicológicas. Contemporáneos.* México: Paidós.",
            "Rezk, M. & Ardila, R. (1979). *Cien años de Psicología.* México: Trillas.",
            "Solé, I. & Coll, C. (1999). Los profesores y la concepción constructivista. En C. Coll et al. (Eds.), *El constructivismo en el aula* (pp. 7–23). Barcelona: Graó.",
            "Solé, I. (1999). Disponibilidad para el aprendizaje y sentido del aprendizaje. En C. Coll et al. (Eds.), *El constructivismo en el aula* (pp. 25–46). Barcelona: Graó.",
            "Vallori, A. B. (2002). *El Aprendizaje Significativo en la práctica.* Seminario de Aprendizaje Significativo. Disponible en: https://eduteka.icesi.edu.co/pdfdir/ElAprendizajeSignificativoEnLaPractica.pdf",
            "Woolfolk, A. (2010). *Psicología educativa.* México: Pearson.",
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
