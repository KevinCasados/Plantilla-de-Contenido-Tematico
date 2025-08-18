/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "ME-UEH", // Maestría en Educación (ajústalo si manejan otro esquema de IDs)
  courseId: "PAE", // Paradigmas actuales de la enseñanza
  id: "PAE-modulo1",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Paradigmas actuales de la enseñanza", // nombre de la materia en el PDF
  title:
    "Módulo 1. Los paradigmas actuales de la enseñanza y la práctica escolar",
  semestre: "4.º semestre",
  teacher: "Mtra. Lucila Yolanda Sánchez Orea",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Identificar las condiciones que los paradigmas actuales de la enseñanza tienen y cómo ellos han influido en la formación de formadores, hasta determinar su metodología en la docencia.",
  competencies: [
    "Reconocer la importancia de cada paradigma educativo, para que como maestros en Educación apliquen lo que cada uno aporta de manera favorable y mejore su práctica frente a grupo.",
    "Reflexionar sobre cada paradigma y las implicaciones que tuvieron o tienen en el aprendizaje de los alumnos y decidir qué conviene a los grupos escolares con los que trabajan (o pudieran trabajar).",
    "Reconocer las necesidades de las actuales generaciones y cómo estos paradigmas influyen en el logro de aprendizajes.",
    "Diferenciar las condiciones de cada paradigma y, desde la formación personal y profesional docente, decidir cuál responde a las necesidades didácticas de cada uno.",
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
      id: "1",
      numbering: "Unidad 1",
      title: "Los paradigmas actuales de la enseñanza y la práctica escolar",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad introduce el estudio comparado de los paradigmas educativos como marcos de interpretación y de acción docente. Un paradigma no es únicamente un conjunto de técnicas; es una constelación de supuestos epistemológicos (qué cuenta como conocimiento), psicológicos (cómo se aprende), axiológicos (qué se valora) y metodológicos (cómo se enseña) que organizan la práctica. Mirar la enseñanza desde los paradigmas permite abandonar el activismo sin norte y pasar a decisiones deliberadas: por qué secuencio así, por qué evalúo de este modo, por qué doy más tiempo a la práctica guiada que a la exposición. El propósito es dotarte de lentes conceptuales que te ayuden a leer el aula y a rediseñar tu intervención, entendiendo tensiones reales (eficiencia vs. equidad, cobertura vs. profundidad, estandarización vs. personalización) y cómo cada enfoque ofrece respuestas parciales. Asumimos una postura profesional crítica: en vez de adherir dogmáticamente a una corriente, reconoceremos sus aportes, límites y condiciones de uso, con la mira puesta en el aprendizaje de tus estudiantes.",
        },
        {
          type: "paragraph",
          text: "Trabajaremos cuatro referencias clásicas: el conductismo, el cognoscitivismo, el humanismo y la aproximación holística. El conductismo aporta claridad sobre conductas objetivo, práctica distribuida, retroalimentación contingente y gestión del clima para el desempeño; cuando se usa sin criterio, empobrece la comprensión si reduce todo a hábito. El cognoscitivismo explica el procesamiento de la información, los esquemas, la carga cognitiva y la metacognición; mal aplicado, se vuelve meramente declarativo. El enfoque humanista sitúa la persona al centro, integrando motivación, sentido, autoestima y clima emocional; llevado al extremo, puede diluir exigencias académicas si se confunde bienestar con ausencia de reto. La mirada holística integra dimensiones física, cognitiva, emocional, social y ética, recordándonos que el aula es un sistema vivo; su riesgo es quedarse en la retórica si no se operacionaliza en tareas, criterios y evidencias. Nuestro objetivo no es escoger un “ganador”, sino aprender a orquestarlos en secuencias coherentes.",
        },
        {
          type: "paragraph",
          text: "Para hacer operativa la comparación, distinguiremos variables de diseño: a) finalidad del aprendizaje (adquisición de repertorios observables, construcción de significados, desarrollo personal, integración de dimensiones); b) rol del alumnado (ejecutor entrenado, procesador activo, agente autodeterminado, persona íntegra en relación); c) rol docente (modelador y reforzador, mediador y andamio, facilitador y acompañante, articulador sistémico); d) tratamiento del contenido (objetivos conductuales, organizadores previos y mapas, problemas con sentido, proyectos integradores); e) evaluación (pruebas de ejecución, evidencias de comprensión, auto/coevaluación, portafolios integrados). Estas variables servirán de rúbrica para analizar casos y rediseñar experiencias de aprendizaje. En cada decisión didáctica discutiremos criterios de pertinencia: nivel del grupo, conocimientos previos, complejidad del contenido, tiempo disponible, recursos y exigencias curriculares. Así lograremos que la teoría tenga consecuencias visibles en la práctica.",
        },
        {
          type: "paragraph",
          text: "Metodológicamente, integrarás lectura guiada con estudio de casos, microdiseños y reflexión sobre tu práctica. Comenzaremos activando concepciones previas; luego, construiremos un mapa comparado de paradigmas y, con base en él, rediseñarás una sesión real que impartas (o hipotética, en su defecto). Practicaremos el principio de coherencia: metas, actividades y evaluación deben alinearse; si esperas transferencia, habrá que pedir explicaciones, justificaciones y aplicaciones, no solo reproducción. Además, trabajaremos la dimensión emocional del aprendizaje: seguridad psicológica, expectativas desafiantes alcanzables y retroalimentación específica orientada a la próxima acción. El producto final será un plan de clase breve con criterios explícitos y evidencias esperadas, listo para pilotaje. La intención es que salgas de la unidad con esquemas conceptuales y con instrumentos listos para usar.",
        },
        {
          type: "paragraph",
          text: "Como meta de logro, al finalizar podrás: (1) describir con precisión los supuestos de cada paradigma y sus implicaciones didácticas; (2) analizar críticamente una secuencia de enseñanza, identificando sesgos y oportunidades de mejora; (3) seleccionar estrategias coherentes con la naturaleza del contenido y con el perfil de tu grupo; y (4) elaborar microdiseños con criterios y evidencias alineadas. Evaluaremos mediante tres fuentes: breve prueba de conceptos clave, análisis de un caso con la rúbrica comparativa y tu microdiseño revisado por pares. La calidad se juzgará por claridad, coherencia y viabilidad. Lejos de prometer recetas universales, la unidad te ofrece un repertorio sólido para decidir mejor en contextos reales. La competencia profesional no es aplicar modas, sino razonar pedagógicamente tus elecciones y justificar por qué ese diseño es el más pertinente para ese grupo con ese contenido en ese tiempo.",
        },

        /* Acordeón (3 niveles) */
        {
          type: "accordion",
          header: "Nivel 1 · Preguntas guía de la unidad",
          open: false,
          text:
            "• ¿Qué entiende cada paradigma por ‘aprender’ y cómo se expresa eso en el aula?\n" +
            "• ¿Qué decisiones concretas (objetivos, actividades, evaluación) cambian según el paradigma?\n" +
            "• ¿Cómo combinarlos sin incoherencias para obtener mejores resultados de aprendizaje?",
        },
        {
          type: "accordion",
          header: "Nivel 2 · Mapa comparado rápido",
          open: false,
          text:
            "Conductismo → desempeño observable, práctica + refuerzo.\n" +
            "Cognoscitivismo → organización del conocimiento, carga y metacognición.\n" +
            "Humanista → sentido, motivación y clima emocional.\n" +
            "Holístico → integración de dimensiones y proyectos con impacto.",
        },
        {
          type: "accordion",
          header: "Nivel 3 · Evidencias y criterios de logro",
          open: false,
          text:
            "• Conceptos clave: precisión conceptual y ejemplos propios.\n" +
            "• Análisis de caso: identificación de decisiones alineadas y desalineadas.\n" +
            "• Microdiseño: coherencia metas–actividades–evaluación y viabilidad en aula.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "Los paradigmas educativos en la enseñanza",
          content: [
            {
              type: "paragraph",
              text: "Hablar de paradigmas educativos implica reconocer marcos teóricos y prácticos que, en distintos momentos históricos, han orientado cómo se concibe la enseñanza, qué se entiende por aprender y cuáles son los criterios para valorar si ocurrió o no el aprendizaje. En el aula, estos paradigmas se vuelven visibles en decisiones muy concretas: cómo se planifica una clase, qué materiales se seleccionan, qué funciones se le asignan al docente y al estudiante, qué lugar ocupa el error, cómo se organiza el tiempo y el espacio, y de qué manera se evalúa. Por eso, más que etiquetas abstractas, los paradigmas son lentes que moldean la práctica: desde visiones centradas en la conducta observable y en la repetición hasta enfoques que subrayan el procesamiento de la información, la construcción activa del conocimiento, el desarrollo integral o la formación de ciudadanía. Comprenderlos no es para ‘elegir dogmas’, sino para identificar aportes, límites y condiciones de pertinencia según contextos y propósitos.",
            },
            {
              type: "paragraph",
              text: "En términos operativos, conviene ubicar cuatro grandes familias que con frecuencia aparecen en la historia de la educación: el conductismo, el cognoscitivismo, el humanismo y el holismo. Cada una responde a preguntas clave con énfasis diferentes. ¿Qué es aprender? ¿Qué papel juega la motivación? ¿Cómo se diseña una actividad eficaz? ¿Qué significa evaluar bien? Por ejemplo, el conductismo asocia aprender con un cambio de conducta verificable, por lo que privilegia la práctica guiada, el reforzamiento y la observación sistemática. El cognoscitivismo concibe al estudiante como un procesador activo que organiza, relaciona y transforma información, con foco en la atención, la memoria y el razonamiento. El humanismo coloca al estudiante como persona integral, con necesidades, metas y emociones que deben ser atendidas para que el aprendizaje sea significativo y profundo. El holismo, por su parte, articula dimensiones físicas, sociales, emocionales, cognitivas y espirituales, proponiendo comunidades de aprendizaje orientadas a la vida buena y a la sustentabilidad.",
            },
            {
              type: "accordion",
              header: "¿Para qué sirve distinguir paradigmas?",
              open: false,
              text: "- Para tomar decisiones didácticas coherentes (métodos, evaluación, gestión del aula).\n- Para dialogar críticamente con las políticas y planes de estudio.\n- Para integrar aportaciones complementarias en lugar de oponer ‘escuelas’ de manera estéril.",
            },
            {
              type: "accordion",
              header: "Señales prácticas en el aula",
              open: false,
              text: "- Tipo de tareas y de preguntas que se plantean.\n- Uso del error (castigo vs. retroalimentación formativa).\n- Quién habla y decide (docente, estudiantes, ambos) y con qué propósitos.",
            },
          ],

          /* → Sub-subtemas (profundidad 2) */
          subthemes: [
            {
              id: "1.1.1",
              numbering: "1.1.1",
              title: "Conductismo",
              content: [
                {
                  type: "paragraph",
                  text: "El conductismo define el aprendizaje como un cambio relativamente permanente en la conducta como resultado de la experiencia. De ahí su insistencia en observar lo que las y los estudiantes hacen —más que lo que piensan— y en diseñar condiciones que incrementen la probabilidad de respuestas deseadas. Históricamente, se nutre del condicionamiento clásico (Pavlov) y del condicionamiento operante (Skinner), así como de la aspiración de Watson de construir una ‘ciencia de la conducta’ basada en hechos observables y medibles. En educación escolar, esta perspectiva se tradujo en secuencias de práctica y repetición, reforzamientos (sociales o materiales), control de estímulos y modulación de la dificultad a partir del desempeño. Su promesa es la claridad: objetivos conductuales explícitos, criterios de logro visibles y procedimientos replicables.",
                },
                // Imagen citada en el material
                {
                  type: "image",
                  src: "https://i.ytimg.com/vi/P9_Lh8T2SMI/maxresdefault.jpg",
                  alt: "Docente explicando con pizarra",
                  caption: "Ejemplo de imagen externa (Unsplash).",
                  maxWidth: "860px",
                },
                {
                  type: "paragraph",
                  text: "En su versión escolar más difundida durante buena parte del siglo XX, el conductismo colocó al docente como agente principal que organiza estímulos, modela respuestas y administra consecuencias (refuerzos/correcciones), con la expectativa de que el alumnado reproduzca de manera fiel lo ‘aprendido’. En contextos tradicionales, esta lógica convivió con el castigo como herramienta de control, hoy ampliamente cuestionada por razones éticas y pedagógicas. Sin embargo, el núcleo técnico de ‘reforzar lo que funciona’ no es trivial: diseñar prácticas distribuidas, ofrecer feedback inmediato, graduar la dificultad y usar rúbricas claras son descendientes sofisticados —y válidos— de esa idea. Donde el enfoque enfrenta límites es en su reduccionismo cuando ignora procesos mentales superiores, contextos socioemocionales y metas de comprensión transferible.",
                },
                {
                  type: "accordion",
                  header: "Aportes didácticos aprovechables",
                  open: false,
                  text: "- Claridad de objetivos operacionales y criterios de logro.\n- Práctica espaciada y feedback inmediato.\n- Diseño de ambientes con señales que disparan conductas deseadas (hábitos académicos).",
                },
                {
                  type: "accordion",
                  header: "Precauciones y límites",
                  open: false,
                  text: "- Evitar el uso punitivo de la evaluación o del ‘castigo’ como herramienta central.\n- No reducir el aprendizaje a mera repetición sin comprensión.\n- Complementar con estrategias cognitivas y socioemocionales.",
                },
              ],
            },
            {
              id: "1.1.2",
              numbering: "1.1.2",
              title: "Cognoscitivismo",
              content: [
                {
                  type: "paragraph",
                  text: "El cognoscitivismo emerge en diálogo crítico con el conductismo y pone el foco en procesos mentales internos: atención, memoria, codificación y recuperación de la información, formación de conceptos, solución de problemas y razonamiento. Desde esta óptica, las y los estudiantes son agentes activos que seleccionan, organizan e integran información con sus saberes previos para construir significados. De ahí que la motivación intrínseca, la claridad de metas y la relevancia percibida del contenido resulten decisivas. En educación, la pregunta cambia de ‘¿qué conducta quiero ver?’ a ‘¿qué estructura de conocimiento y qué estrategias quiero que la persona domine?’. Modelos clave aquí son Piaget (desarrollo por etapas y equilibrio), Ausubel (aprendizaje significativo y organizadores previos) y Bruner (espiral curricular y aprendizaje por descubrimiento).",
                },
                // Imagen citada en el material
                {
                  type: "image",
                  src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
                  alt: "Docente explicando con pizarra",
                  caption: "Ejemplo de imagen externa (Unsplash).",
                  maxWidth: "860px",
                },
                {
                  type: "paragraph",
                  text: "En el aula, el cognoscitivismo sugiere intervenir en tres frentes complementarios: (1) activación y reestructuración del conocimiento previo (preguntas generadoras, mapas conceptuales, analogías); (2) organización explícita de la nueva información (señalización, andamiaje, ejemplos–contraejemplos, secuenciación progresiva); y (3) entrenamiento de estrategias metacognitivas (planificar, monitorear y evaluar la propia comprensión). La evaluación se alinea con evidencias de comprensión transferible más que con la simple reproducción literal. Cuando se atiende a la carga cognitiva, al ritmo de procesamiento y a la naturaleza de la tarea, los desempeños mejoran sin necesidad de incrementar el ‘castigo’ o la presión externa. En síntesis, aprender no es sólo responder distinto: es ‘ver’ el contenido de otra manera y poder usarlo en situaciones nuevas.",
                },
                {
                  type: "accordion",
                  header: "Claves prácticas (Ausubel–Bruner–Piaget)",
                  open: false,
                  text: "- Ausubel: relacionar lo nuevo con lo que ya se sabe y usar organizadores previos.\n- Bruner: currículum en espiral y descubrimiento guiado con tareas auténticas.\n- Piaget: ajustar tareas al estadio de desarrollo y proponer desequilibrios productivos.",
                },
                {
                  type: "accordion",
                  header: "Estrategias de clase alineadas",
                  open: false,
                  text: "- Preguntas de alto orden y andamiajes visibles (plantillas, pistas, ejemplos graduados).\n- Elaboración y codificación dual (texto + gráfico), práctica intercalada y recuperación espaciada.\n- Metacognición explícita: planifico–monitoreo–ajusto–verifico.",
                },
              ],
            },
            {
              id: "1.1.3",
              numbering: "1.1.3",
              title: "Humanista",
              content: [
                {
                  type: "paragraph",
                  text: "El paradigma humanista coloca a la persona en el centro del proceso educativo y concibe la enseñanza como una experiencia que integra lo cognitivo con lo afectivo, lo ético y lo social. En este enfoque, el estudiante es un sujeto único, con historia, necesidades, intereses y metas que deben ser reconocidos para detonar su autorrealización. Por ello, la tarea del docente se reconfigura: deja de ser un transmisor exclusivo de contenidos y pasa a ser un facilitador que habilita condiciones de confianza, pertinencia y sentido para aprender. Humanizar la escuela implica generar climas emocionales seguros, relaciones basadas en la empatía y la dignidad, y experiencias de aprendizaje vivenciales en las que el alumnado participe activamente, se autoevalúe y tome decisiones informadas sobre su propio proceso. En términos curriculares, la planeación se abre a la diversidad y a la voz del estudiante: se negocian metas, se contextualizan los contenidos, se conectan con problemas y proyectos significativos, y se evalúa con criterios que consideren progreso, participación, colaboración y transferencia. La evaluación formativa cobra especial relevancia, así como la retroalimentación dialogada que acompaña la construcción de juicio y autonomía. Este marco sintoniza con propuestas contemporáneas que piden fortalecer competencias socioemocionales, convivencia democrática y respeto a la diversidad; no se trata de “suavizar” el rigor, sino de reconocer que la motivación, el sentido y el bienestar son condiciones de posibilidad del aprendizaje profundo. En suma, el humanismo aporta criterios para que la práctica docente procure experiencias integrales: aprender con otros, aprender con emoción y aprender con propósito.",
                },
                {
                  type: "accordion",
                  header: "Principios operativos del enfoque humanista",
                  open: false,
                  text:
                    "- Centralidad de la persona: dignidad, voz y elección.\n" +
                    "- Clima emocional seguro: vínculo, empatía y confianza.\n" +
                    "- Aprendizaje vivencial: participación, reflexión y autoevaluación.\n" +
                    "- Docente facilitador: guía, acompaña y modela.\n" +
                    "- Evaluación formativa: evidencia de progreso y metas de mejora.",
                },
                {
                  type: "image",
                  src: "https://www.comunidadunete.net/images/sabias_que/sabias_que5.jpg",
                  alt: "Docente explicando con pizarra",
                  caption: "Ejemplo de imagen externa (Unsplash).",
                  maxWidth: "860px",
                },
                {
                  type: "paragraph",
                  text: "Una contribución influyente del humanismo a la didáctica es el enfoque motivacional y de necesidades descrito por Abraham Maslow. Su jerarquía –que va de lo fisiológico y la seguridad, al afecto y pertenencia, la estima y la autorrealización– ayuda a los docentes a comprender por qué, en ausencia de seguridad o reconocimiento, el interés por tareas académicas disminuye; y por qué la pertenencia a un grupo y la autoestima inciden directamente en la participación y la persistencia. Desde este marco, “motivar” no es premiar, sino activar recursos internos: competencia, autonomía y sentido. En el aula se traduce en crear ambientes donde el error se usa para aprender, las metas son alcanzables y retadoras, y el estudiantado cuenta con opciones sobre productos, tiempos o modalidades para demostrar lo aprendido. Carl Rogers refuerza esta visión con su idea de aprendizaje significativo: cuando implicamos intelecto, motivos y emociones, el aprendizaje es más profundo y perdurable. De ahí que estrategias como simulaciones, proyectos con problemas reales, diarios reflexivos, rúbricas co-construidas y tutorías entre pares resulten coherentes con el paradigma. El papel del docente es mediar experiencias auténticas, ofrecer retroalimentación empática y enseñar a autorregularse (identificar emociones, dialogar, resolver conflictos y tomar decisiones responsables). Curricularmente, se promueve la integración de contenidos con valores y actitudes, así como la incorporación explícita de objetivos socioemocionales y de convivencia que fortalezcan la formación integral.",
                },
                {
                  type: "accordion",
                  header: "Estrategias didácticas alineadas",
                  open: false,
                  text:
                    "- Contratos de aprendizaje y metas personales.\n" +
                    "- Rúbricas con criterios de contenido y socioemocionales.\n" +
                    "- Simulaciones, estudios de caso y proyectos con sentido personal.\n" +
                    "- Asambleas de aula y acuerdos de convivencia.\n" +
                    "- Portafolios y auto/co-evaluación guiada.",
                },
              ],
            },
            {
              id: "1.1.4",
              numbering: "1.1.4",
              title: "Holístico",
              content: [
                {
                  type: "paragraph",
                  text: "El paradigma holístico entiende al ser humano como una totalidad interrelacionada que integra dimensiones física, biológica, emocional, intelectual y espiritual. En educación, esta mirada propone una formación integral que trasciende el rendimiento académico para incorporar competencias para la vida: aprender a manejar situaciones (incertidumbre, toma de decisiones, resiliencia), convivir (empatía, colaboración, respeto a la diversidad) y participar en la vida en sociedad (juicio crítico, derechos humanos, cultura de paz). Por diseño, la escuela holística es una comunidad de aprendizaje que entrelaza áreas curriculares en torno a problemas y proyectos significativos, con trabajo colaborativo, resolución de retos auténticos y producción de evidencias socialmente útiles. Esta perspectiva pide secuencias didácticas transdisciplinarias, donde ciencias, lengua, arte y ciudadanía se articulan para comprender fenómenos complejos (por ejemplo, salud y bienestar, cuidado del ambiente, inclusión). En el plano del aula, holístico no equivale a “hacer de todo”, sino a planear con coherencia: partir del contexto, activar saberes previos, generar experiencias con propósito, promover reflexión metacognitiva y evaluar con instrumentos que consideren conocimientos, habilidades, actitudes y valores. El rol docente se expande a diseñador, facilitador y tejedor de vínculos; la evaluación, a proceso continuo que guía decisiones y reconoce la diversidad de trayectorias. En síntesis, la propuesta holística integra lo que somos y lo que sabemos para impactar cómo vivimos juntos, aprendiendo a la vez contenidos, modos de pensar y formas de estar con otros.",
                },
                {
                  type: "accordion",
                  header: "Claves prácticas de una escuela holística",
                  open: false,
                  text:
                    "- Proyectos integradores con problemas reales del entorno.\n" +
                    "- Trabajo cooperativo con rol, normas y productos compartidos.\n" +
                    "- Integración de artes, ciencia, lenguaje y ciudadanía.\n" +
                    "- Evaluación auténtica (rúbricas, diarios, evidencias públicas).\n" +
                    "- Acompañamiento socioemocional y tutoría entre pares.",
                },
                {
                  type: "image",
                  src: "https://www.redalyc.org/journal/447/44741347022/1409-4703-aie-15-03-00459-gf2.jpg",
                  alt: "Docente explicando con pizarra",
                  caption: "Ejemplo de imagen externa (Unsplash).",
                  maxWidth: "860px",
                },
                {
                  type: "paragraph",
                  text: "La actualización de planes y programas recientes refuerza esta dirección al priorizar habilidades socioemocionales, pensamiento crítico y creativo, trabajo colaborativo y respeto a la diversidad. Se plantea formar estudiantes capaces de adaptarse a entornos cambiantes, gestionar información de múltiples fuentes, establecer metas personales y diseñar estrategias para alcanzarlas; la escuela asume un papel clave para reconocer y regular emociones, y para impulsar solidaridad y tolerancia mediante experiencias cooperativas. En la práctica, ello exige un currículo flexible, con secuenciación basada en progresiones de aprendizaje y momentos de elección del estudiante; ambientes que favorezcan seguridad psicológica, curiosidad y esfuerzo sostenido; y una evaluación que equilibre dominio conceptual con desempeño, reflexión y contribución al bien común. En términos de planeación, son útiles las “unidades integradas” con productos públicos (expos, campañas, prototipos), rúbricas transversales y tiempos de metacognición. A nivel institucional, conviene promover comunidades profesionales de aprendizaje, gestión de proyectos escolares con foco en convivencia y sostenibilidad, y uso pertinente de tecnología para investigar, crear y comunicar. Así, la escuela holística no solo organiza contenidos; diseña experiencias que conectan saberes, habilidades y valores para la vida, integrando el cuidado de sí, de los otros y del entorno en una misma práctica pedagógica.",
                },
                {
                  type: "accordion",
                  header: "Diseño curricular y evaluación (enfoque holista)",
                  open: false,
                  text:
                    "- Secuenciación por progresiones y desempeño auténtico.\n" +
                    "- Rúbricas que integran contenidos + habilidades + actitudes/valores.\n" +
                    "- Evidencias públicas y co–construcción de criterios.\n" +
                    "- Metacognición sistemática (diarios, bitácoras, retroalimentación).\n" +
                    "- Articulación escuela–familia–comunidad en proyectos.",
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
          href: "https://www.youtube.com/watch?v=ZoVusgBJoS8", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Perfiles profesionales, criterios e indicadores para docentes (SEP, 2020) http://creson.edu.mx/docs/Perfiles_profesionales_Criterios_e_Indicadores_para_Docentes_Ciclo_Escolar_2021-2022.pdf",
            "Plan y Programa 2017 — Aprendizajes clave para la educación integral https://www.sep.gob.mx/work/models/sep1/Resource/10933/1/images/Aprendizajes_clave_para_la_educacion_integral.pdf",
            "Nueva Escuela Mexicana — Principios y orientación pedagógica https://dfa.edomex.gob.mx/sites/dfa.edomex.gob.mx/files/files/NEM%20principios%20y%20orientaci%C3%B3n%20pedag%C3%B3gica.pdf",
            "Rompecabezas — HEAYODICAL • Sesión 1 (JigsawPlanet) https://www.jigsawplanet.com/?rc=play&pid=38f8e45e7d2a",
            "Video: Paradigma Humanista https://www.youtube.com/watch?v=ZoVusgBJoS8",
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
            "Aizpuru, M. (2008). La Persona como Eje Fundamental del Paradigma Humanista. https://www.redalyc.org/pdf/416/41601804.pdf",
            "Ayala, M. (2020). Paradigma humanista: qué es, características y representantes. https://www.lifeder.com/paradigma-humanista-educacion/",
            "Brocado, A. (2017). Principios de la educación holística. https://sites.google.com/site/paradigmasxix/home/educacion/educacion-holistica/principios-de-la-educacion-holistica",
            "González, A. C. (2022). Modelo Pedagógico Personalista y Comunitario. https://docplayer.es/51954703-Modelo-pedagogico-personalista-y-comunitario.html",
            "Gutiérrez, G. (1999). Ivan Petrovich Pavlov. Revista Latinoamericana de Psicología. https://www.redalyc.org/pdf/805/80531311.pdf",
            "Sarmiento Santana, M. (2007). La enseñanza de las matemáticas y las NTIC. https://www.tdx.cat/bitstream/handle/10803/8927/D-TESIS_CAPITULO_2.pdf",
            "SEP (2017). Aprendizajes Clave para la Educación Integral. https://www.planyprogramasdestudio.sep.gob.mx/descargables/APRENDIZAJES_CLAVE_PARA_LA_EDUCACION_INTEGRAL.pdf",
            "SEP (2019). NEM: principios y orientación pedagógica. https://dfa.edomex.gob.mx/sites/dfa.edomex.gob.mx/files/files/NEM%20principios%20y%20orientacio%C3%ADn%20pedago%C3%ADgica.pdf",
            "SEP (2020). Perfiles profesionales, criterios e indicadores. http://creson.edu.mx/docs/Perfiles_profesionales_Criterios_e_Indicadores_para_Docentes_Ciclo_Escolar_2021-2022.pdf",
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
