/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MED",
  courseId: "MED-DPC",
  id: "MED-DPC-mod1",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Didáctica de los procesos cognitivos",
  title: "Módulo 1. El papel de la didáctica en la formación docente",
  semestre: "Tercer semestre",
  teacher: "Dra. Rosa Dianeth Hernández Aguilera",

  /* ── Objetivo y competencias ────────────────── */
  objective: "Analizar el papel de la didáctica en la formación docente.",
  competencies: [
    "Identifica la importancia de la didáctica y su aplicabilidad en el quehacer profesional.",
    "Distingue concepciones y funciones del docente y su incidencia en el aprendizaje.",
    "Analiza enfoques y estilos de enseñanza para orientar la práctica a contextos reales.",
    "Integra didáctica, evaluación y currículo como ejes de mejora de la práctica docente.",
    "Reflexiona críticamente sobre la formación y actualización docente desde marcos constructivistas.",
  ],

  /* ── Contenido temático (jerarquía recursiva) ─────────── */
  themes: [
    /* 0. Página Info (opcional) */
    {
      id: "X.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [
        {
          type: "list",
          style: "bulleted",
          items: [
            "Programa académico: Maestría en educación",
            "Semestre: Tercer semestre",
            "Materia: Didáctica de los procesos cognitivos",
            "Unidad o tema: 1",
            "Docente: Dra. Rosa Dianeth Hernández Aguilera",
          ],
        },
        {
          type: "paragraph",
          text: "Objetivo: Analizar el papel de la didáctica en la formación docente.",
        },
        {
          type: "paragraph",
          text: "Competencia: A través del conocimiento de la didáctica, el alumno identificará su importancia en la formación docente y cómo esta es aplicable en su quehacer profesional.",
        },
      ],
    },

    /* 1. Unidad principal */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "El papel de la didáctica en la formación docente",
      content: [
        {
          type: "paragraph",
          text: "La didáctica, entendida como disciplina que estudia e interviene en el proceso de enseñanza-aprendizaje, constituye el puente entre la teoría educativa y la práctica cotidiana del aula. En esta unidad se asume una postura firme: la calidad de los aprendizajes no es un accidente, es el resultado de decisiones didácticas conscientes y comprobables. De ahí que el papel del docente trascienda la transmisión de información para convertirse en diseñador de experiencias, mediador cultural y evaluador formativo. Hablar del papel de la didáctica en la formación docente implica reconocer que las elecciones sobre objetivos, secuenciación, metodologías, recursos, organización del tiempo y evaluación se articulan en un diseño que debe ser pertinente al contexto y coherente con los fines educativos. Así, la didáctica aporta categorías y procedimientos para planear con claridad, enseñar con intención y evaluar con evidencias, evitando la improvisación. Con ello, la formación docente se orienta a desarrollar competencias profesionales: dominio disciplinar, competencia pedagógica, habilidades socioemocionales y ética del cuidado. Esta unidad propone una mirada operativa: traducir principios en prácticas observables, sostenidas por criterios de calidad y por procesos de reflexión sistemática sobre la propia enseñanza.",
        },
        {
          type: "paragraph",
          text: "Desde una perspectiva constructivista, el aprendizaje es una construcción activa que el estudiante realiza a partir de saberes previos, intereses y experiencias, con la mediación de otros y de herramientas culturales. En consecuencia, el rol docente se centra en organizar situaciones de aprendizaje retadoras y alcanzables, brindar andamiaje oportuno, promover la interacción significativa y sostener un clima socioemocional seguro. El docente planifica para activar la motivación, orientar la atención y favorecer la elaboración profunda mediante preguntas de alto nivel cognitivo, tareas auténticas y oportunidades de metacognición. La evaluación, concebida como parte del proceso, regula el aprendizaje: recoge evidencias, ofrece retroalimentación específica y guía la toma de decisiones didácticas. Esta visión exige precisión en objetivos y criterios, transparencia en expectativas y consistencia en la retroalimentación. Por ello, la formación docente no puede reducirse a técnicas aisladas; debe integrar fundamentos teóricos, herramientas metodológicas y criterios de valoración que permitan justificar, ajustar y mejorar la práctica. En síntesis, el foco se desplaza de lo que el profesor explica a lo que el estudiante logra comprender, aplicar y transferir.",
        },

        {
          type: "accordion",
          header: "Ejes de la unidad: diseño, mediación y evaluación",
          open: false,
          text:
            "- Diseño didáctico: alineación entre propósitos, contenidos, actividades y evidencias.\n" +
            "- Mediación pedagógica: andamiaje, interacción y clima socioemocional seguro.\n" +
            "- Evaluación formativa: criterios claros, evidencias válidas y retroalimentación accionable.",
        },

        {
          type: "paragraph",
          text: "Planear con rigor didáctico supone tomar decisiones alineadas con el currículo y con el perfil de egreso, pero también con las condiciones reales del grupo y del contexto institucional. La planificación precisa objetivos observables, mapea contenidos esenciales y selecciona metodologías pertinentes (estudio de casos, aprendizaje basado en proyectos, clases invertidas, aprendizaje cooperativo) en función de los resultados de aprendizaje esperados. Asimismo, establece criterios e instrumentos de evaluación congruentes con los objetivos (rúbricas, listas de cotejo, protocolos de observación, diarios de aprendizaje) y asegura oportunidades de práctica deliberada con retroalimentación. La atención a la diversidad demanda diferenciación: variar el nivel de apoyo, los productos o los caminos para demostrar dominio, sin renunciar a estándares altos. Los recursos se seleccionan por su valor didáctico, no por moda: materiales multimodales, TIC con propósito claro y actividades que promuevan el pensamiento crítico y creativo. Finalmente, una planificación sólida anticipa riesgos (tiempos, sobrecarga, barreras de acceso) e integra estrategias de autorregulación para sostener el esfuerzo y la atención del grupo.",
        },

        {
          type: "accordion",
          header: "Principios operativos de una clase con calidad didáctica",
          open: false,
          text:
            "- Alineación constructiva: cada actividad y cada evidencia se justifican por el objetivo.\n" +
            "- Andamiaje intencional: ayudas temporales, preguntas guía y ejemplos modelo.\n" +
            "- Transferencia: tareas auténticas que conectan con problemas y contextos reales.",
        },

        {
          type: "paragraph",
          text: "La innovación pedagógica es significativa cuando mejora la comprensión y la transferencia, no cuando solo añade novedad. Incorporar tecnologías o estrategias activas tiene sentido si incrementa la participación cognitiva y social del estudiantado, si facilita la retroalimentación en tiempo oportuno y si provee datos útiles para ajustar la enseñanza. Por ejemplo, herramientas digitales para sondeos rápidos, foros de discusión estructurados o gestores de evidencias permiten visibilizar avances y dificultades, fortaleciendo la evaluación para el aprendizaje. A la vez, la innovación responsable protege la carga cognitiva: secuencia los contenidos, fragmenta tareas complejas, ofrece modelos y promueve la metacognición. En este marco, el docente cultiva hábitos profesionales: documenta sus decisiones, analiza evidencias, contrasta resultados con criterios de éxito y toma acciones de mejora. De esta forma, la didáctica se convierte en un proceso iterativo de diseño, implementación y ajuste que incrementa la efectividad de la enseñanza.",
        },
        {
          type: "paragraph",
          text: "La formación docente continua es condición de posibilidad para sostener buenas prácticas. Implica estudio disciplinar actualizado, dominio de enfoques y métodos, competencias comunicativas y socioemocionales, y ética profesional orientada al bien del estudiante. La reflexión sistemática sobre la práctica (individual y colegiada) permite identificar supuestos, evidenciar logros y reconocer áreas de mejora. La observación entre pares, la investigación-acción y el análisis de evidencias promueven una cultura de mejora continua. En paralelo, la responsabilidad social del docente demanda inclusión, equidad y pertinencia cultural: diseñar experiencias que reconozcan la diversidad y amplíen oportunidades de aprendizaje para todos. Finalmente, el propósito es claro y verificable: que los estudiantes aprendan de manera significativa, que desarrollen pensamiento crítico y creativo, y que puedan transferir lo aprendido a situaciones nuevas. Esta unidad ofrece criterios, herramientas y ejemplos para que cada decisión didáctica pueda explicarse, evaluarse y mejorarse con profesionalismo.",
        },

        {
          type: "accordion",
          header: "Criterios de calidad para la práctica docente",
          open: false,
          text:
            "- Pertinencia contextual: decisiones ajustadas al grupo, al tiempo y a los recursos disponibles.\n" +
            "- Coherencia metodológica: métodos y recursos al servicio de objetivos explícitos.\n" +
            "- Evidencia de aprendizaje: productos y desempeños que demuestran comprensión y transferencia.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "Conceptualización del docente",
          content: [
            {
              type: "paragraph",
              text: "Conceptualizar al docente exige superar la imagen reduccionista del ‘transmisor de información’ y reconocerlo como profesional que diseña, media y evalúa experiencias de aprendizaje. En el marco de esta unidad, se asume una postura clara: la calidad de los aprendizajes no depende del azar, sino de decisiones profesionales sostenidas por fundamentos didácticos. El docente opera en la intersección de tres elementos —contenidos, estudiantes y tareas— y sus elecciones (objetivos, secuenciación, metodologías, recursos, tiempos e instrumentos de evaluación) configuran oportunidades reales para aprender. Históricamente, se han propuesto tipologías que ayudan a entender prácticas y creencias: del docente tradicionalista (centrado en la exposición y en la verificación del resultado) al docente reflexivo (que ajusta su enseñanza a partir de evidencias y retroalimentación), y al docente constructivista (que prioriza procesos, saberes previos, actividad mental y cooperación). Cada perfil implica supuestos sobre cómo se aprende, qué cuenta como ‘éxito’ y cómo se acompaña el error. Esta conceptualización impacta la vida cotidiana del aula: define el tipo de tareas (memorísticas, procedimentales, de comprensión, de opinión), el grado de andamiaje, la forma de organizar equipos y la naturaleza de la evaluación. En síntesis, un docente profesional integra dominio disciplinar, competencia didáctica y sensibilidad socioemocional; actualiza su repertorio a partir de la reflexión, la evidencia y el contexto; y asume que su responsabilidad no es ‘decir’ contenidos, sino **provocar comprensión, práctica deliberada y transferencia**.",
            },

            {
              type: "accordion",
              header: "Tipologías y estilos: qué mirar y por qué importa",
              open: false,
              text:
                "- Docente tradicionalista → foco en exposición y producto; control unilateral de la actividad.\n" +
                "- Docente reflexivo → observa la clase, ajusta sobre la marcha, retroalimenta con criterios claros.\n" +
                "- Docente constructivista → activa saberes previos, diseña tareas significativas y evalúa proceso y resultado.",
            },

            {
              type: "paragraph",
              text: "Los **estilos de intervención** modulan el clima de aula y la participación: los enfoques autocrático, democrático y laissez-faire describen grados de control y co-decisión; el estilo dominador versus integrador expresa la diferencia entre imponer y construir un clima de reconocimiento; y las categorías instrumental, expresiva e instrumental-expresiva muestran cómo algunos docentes priorizan metas académicas, otros necesidades afectivas y otros un balance deliberado. Ninguna etiqueta, por sí sola, garantiza aprendizaje; lo determinante es la coherencia entre **metas, actividades y evaluación**. Así, un estilo más democrático o integrador no equivale a “menos exigencia”, sino a exigir con acompañamiento: metas claras, andamiaje y retroalimentación accionable. En el plano operativo, estas distinciones ayudan a **diagnosticar** prácticas (¿quién toma decisiones? ¿cómo se distribuyen los turnos? ¿qué criterios de éxito se explicitan?) y a **mejorarlas** (más diálogo instruccional, tareas auténticas, protocolos de cooperación, evaluación formativa). Asumir una conceptualización profesional del rol implica documentar decisiones, explicarlas con base didáctica y someterlas a revisión. Cuando el docente se reconoce diseñador y mediador, la clase deja de ser un conjunto de actividades sueltas y se convierte en una **arquitectura intencional**: cada tarea responde a un propósito, cada interacción favorece la comprensión, y cada evidencia informa ajustes.",
            },

            {
              type: "accordion",
              header: "Implicaciones didácticas inmediatas",
              open: false,
              text:
                "- Alineación: objetivos observables → tareas pertinentes → evidencias congruentes.\n" +
                "- Clima y participación: protocolos de diálogo, roles rotativos y evaluación formativa.\n" +
                "- Tareas con sentido: memorísticas, procedimentales, de comprensión u opinión, según el objetivo.",
            },

            {
              type: "paragraph",
              text: "Comprender el rol docente demanda mirar las **tareas** como núcleo de la experiencia: modelan el ambiente, orientan la atención y determinan las prácticas cognitivas implicadas. Por eso, el profesor decide no solo contenidos, sino **qué tipo de trabajo intelectual** hará el estudiante: repetir, aplicar, interpretar, argumentar, crear. Esta mirada exige pensar la clase en tres fases: preactiva (planificación y selección de tareas, recursos y criterios), interactiva (mediación, monitoreo de la activación emocional y cognitiva, retroalimentación) y postactiva (análisis de evidencias, valoración del impacto, ajuste). En paralelo, el docente opera dentro de un sistema curricular con determinantes múltiples (político-administrativos, organizativos, culturales, técnico-pedagógicos e innovadores), por lo que su profesionalidad incluye interpretar el currículo, adaptarlo al contexto y **rendir cuentas** con indicadores de aprendizaje. En síntesis, conceptualizar al docente es describir una práctica situada, ética y técnicamente fundada, que persigue comprensión profunda y transferencia, no la mera cobertura de contenidos.",
            },
          ],
        },
        {
          id: "1.2",
          numbering: "1.2",
          title: "Formación del docente",
          content: [
            {
              type: "paragraph",
              text: "La formación docente es condición estratégica para la calidad educativa. No se limita a ‘actualizar’ técnicas, sino a desarrollar **competencias profesionales integrales** que articulen conocimiento disciplinar, didáctica, recursos instrumentales y rasgos personales. Ante contextos cambiantes —diversidad cultural, inclusión, expansión tecnológica, nuevas formas de organización del trabajo en el aula— la actualización continua deja de ser opcional y se convierte en una **responsabilidad ética**. La literatura especializada propone marcos claros: competencia cultural (dominio de la materia y lectura del entorno), competencia pedagógica (planificación, tutoría, investigación-acción, gestión de aula y atención a la diversidad), competencia instrumental (TIC, lenguajes visuales e hipertextuales) y competencia personal (equilibrio emocional, empatía, comunicación). Estas dimensiones no se “toman” en cursos aislados; se construyen mediante ciclos iterativos de diseño, implementación, observación y ajuste, con evidencia de aprendizaje como eje de mejora. Una buena formación, además, abraza el paradigma constructivista: prioriza procesos, hace visibles los criterios de calidad, y entrena al profesorado para **evaluar para el aprendizaje** (no solo del aprendizaje), utilizando la retroalimentación como palanca de avance.",
            },

            {
              type: "accordion",
              header: "Dimensiones clave de la competencia docente",
              open: false,
              text:
                "- Cultural: dominio disciplinar y comprensión del contexto.\n" +
                "- Pedagógica: planificación, mediación, evaluación formativa e investigación-acción.\n" +
                "- Instrumental y personal: TIC, comunicación, autorregulación y ética del cuidado.",
            },

            {
              type: "paragraph",
              text: "En términos operativos, la formación eficaz se organiza en **itinerarios** que conectan teoría y práctica. En el frente didáctico: diseño de secuencias alineadas, tareas auténticas (proyectos, estudios de caso, simulaciones) y evaluación con rúbricas que describen niveles de desempeño. En el frente metodológico: estrategias activas (aprendizaje cooperativo, aula invertida, debates estructurados) que elevan la participación cognitiva y social. En el frente tecnológico: integración de TIC con propósito (sondeos en vivo, gestores de evidencias, foros académicos, grabación de microclases) para ampliar oportunidades de práctica y feedback. En el frente reflexivo: **observación entre pares**, diarios de docencia, análisis de productos de aprendizaje y comunidades profesionales de aprendizaje que sostienen la mejora continua. Finalmente, en el frente socioemocional: habilidades de regulación, comunicación asertiva y gestión de conflictos, porque enseñar implica trabajar con personas y sus emociones. Así, la formación deja de ser acumulación de cursos y pasa a ser **desarrollo profesional** con metas, evidencias y seguimiento.",
            },

            {
              type: "accordion",
              header: "Itinerarios de actualización sugeridos",
              open: false,
              text:
                "- Diseño y evaluación: planificación por competencias, rúbricas y retroalimentación efectiva.\n" +
                "- Metodologías activas: ABP, estudio de casos, simulación y cooperativo con roles.\n" +
                "- Integración de TIC: instrumentos para sondeo, gestión de portafolios y micro-contenidos.",
            },

            {
              type: "paragraph",
              text: "Una política de formación con impacto también reconoce el **ecosistema curricular** en el que actúa el profesorado. El currículo se concreta en decisiones estatales, institucionales y de aula; los materiales y recursos median su implementación; y la evaluación —bien diseñada— actúa como **regulador** que alinea lo prescrito con lo practicado. Por ello, la formación debe capacitar para interpretar normas, negociar espacios de autonomía pedagógica y crear materiales con criterios de accesibilidad y pertinencia. Asimismo, debe enseñar a diseñar **tareas** que convoquen procesos cognitivos deseados (memoria, aplicación, interpretación, argumentación, creación) y a documentar su efecto en el aprendizaje. Cerrar el círculo implica fortalecer la investigación-acción: identificar un problema de enseñanza, intervenir con un diseño didáctico, recoger evidencias, analizarlas y ajustar. Esta lógica traslada la mejora desde el discurso a la práctica cotidiana, y convierte la formación docente en un **motor sostenible** de calidad educativa centrada en el aprendizaje del estudiantado.",
            },
          ],
        },
        {
          id: "1.3",
          numbering: "1.3",
          title: "El papel de la didáctica en la formación docente",
          content: [
            {
              type: "paragraph",
              text: "Hablar del papel de la didáctica en la formación docente es afirmar que la calidad de los aprendizajes es una consecuencia directa de decisiones profesionales deliberadas y coherentes. La didáctica opera como el puente entre los fines educativos y las prácticas concretas de aula, articulando objetivos, contenidos, metodologías, recursos, tiempos y evaluación bajo criterios de pertinencia y evidencias. Desde una posición firme, la formación docente debe abandonar el eclecticismo improvisado y asumir el diseño didáctico como una competencia central: definir intencionalidades de aprendizaje observables, seleccionar tareas que convoquen operaciones cognitivas relevantes (recordar, aplicar, interpretar, argumentar, crear) y anticipar cómo se recogerán evidencias válidas de progreso. Esta visión exige comprender la clase como una arquitectura intencional y no como un agregado de actividades simpáticas: cada decisión se justifica por su contribución al objetivo. Del mismo modo, el enfoque constructivista obliga a mirar los saberes previos del estudiantado, su motivación y el clima socioemocional como condiciones de posibilidad del aprendizaje. La didáctica, entonces, no es un recetario, sino un marco de razonamiento: especifica qué aprender, por qué, con qué secuencia y bajo qué criterios se considerará logrado. Para la formación docente, esto implica cultivar pensamiento de diseño, dominio de metodologías activas, manejo de la carga cognitiva y competencia para evaluar formativamente. En síntesis, el papel de la didáctica es profesionalizar la práctica: convertir las buenas intenciones en planificación rigurosa, mediación precisa y evaluación con sentido.",
            },

            {
              type: "accordion",
              header: "Mapa de decisión didáctica (6 pasos operativos)",
              open: false,
              text:
                "1) Clarificar el resultado de aprendizaje (verbo + contenido + criterio).\n" +
                "2) Diagnosticar saberes previos y contexto del grupo.\n" +
                "3) Elegir tareas que convoquen el proceso cognitivo deseado.\n" +
                "4) Planear andamiajes (modelado, ejemplos, preguntas guía).\n" +
                "5) Definir evidencias y criterios (rúbricas, listas, protocolos).\n" +
                "6) Delinear retroalimentación y ajustes previstos.",
            },

            {
              type: "paragraph",
              text: "En implementación, la didáctica se traduce en mediación pedagógica: cómo se presenta un problema, qué preguntas ordenan la exploración, qué apoyos se retiran y cuándo, qué interacciones se promueven y cómo se gestiona la activación emocional y la carga cognitiva. La formación docente debe entrenar la capacidad de leer la situación de aula en tiempo real y ajustar. Por ejemplo, tareas complejas se fragmentan en micro-retos con criterios visibles; se proporcionan modelos y contraejemplos; se explicitan expectativas y se practican estrategias metacognitivas (planificar, monitorear, evaluar). La diversidad exige diferenciación razonable: variar la entrada (materiales, soportes), el proceso (tiempos, apoyos) o el producto (formatos) manteniendo la exigencia. La evaluación dejó de ser el final del camino: como regulación del aprendizaje, acompaña la enseñanza recolectando evidencias frecuentes, ofreciendo retroalimentación específica y activando mejoras inmediatas. Este ciclo enseñanza–evaluación–ajuste convierte al aula en un laboratorio de aprendizaje. Nada de esto funciona sin un clima socioemocional seguro y desafiante: la emoción abre o cierra la atención. Formar docentes en didáctica es, por tanto, formar en diseño con datos, mediación sensible y evaluación formativa.",
            },

            {
              type: "accordion",
              header: "Instrumentos esenciales de evaluación formativa",
              open: false,
              text:
                "- Rúbricas analíticas: describen niveles de desempeño alineados al objetivo.\n" +
                "- Protocolos de observación: focalizan evidencias conductuales/cognitivas.\n" +
                "- Portafolio y diarios de aprendizaje: hacen visible el proceso y la reflexión.",
            },

            {
              type: "paragraph",
              text: "El impacto de la didáctica se sostiene con ciclos de mejora continua. La formación docente eficaz enseña a documentar decisiones (por qué esa tarea, por qué ese criterio), a analizar evidencias (qué funcionó, para quién), a comparar resultados con estándares y a tomar decisiones de ajuste. La investigación-acción y la observación entre pares institucionalizan esta lógica: se define un problema, se interviene con un diseño, se recogen datos, se analizan, se ajusta. Del mismo modo, se promueve una cultura de coherencia: objetivos, tareas y evaluación apuntan a lo mismo; los recursos se eligen por su valor didáctico, no por moda; la tecnología se integra si amplía práctica deliberada y retroalimentación. Profesionalizar la didáctica supone aprender a **renunciar**: quitar lo accesorio que no contribuye al logro, reducir ruido cognitivo y socioemocional y concentrar energía en lo esencial. Cuando la formación docente asume este estándar, la clase deja de depender del carisma ocasional y pasa a garantizar aprendizajes transferibles y evaluables. Ese es, en definitiva, el papel irrenunciable de la didáctica en la formación del profesorado.",
            },
          ],
        },
        {
          id: "1.4",
          numbering: "1.4",
          title: "Gimeno Sacristán: reflexiones sobre la práctica docente",
          content: [
            {
              type: "paragraph",
              text: "Recuperar a Gimeno Sacristán es recordar que el currículo no es un documento neutro, sino una práctica social e histórica que se concreta en decisiones de aula. Su aporte central interpela al profesorado como **agente curricular**: quien interpreta, contextualiza y resignifica lo prescrito a la luz de su grupo y su comunidad. Desde esta óptica, el aula es un espacio de deliberación pedagógica donde la selección de contenidos, las metodologías y la evaluación expresan valores e intereses; por lo tanto, requieren argumentación pública y responsabilidad. La práctica no es una aplicación mecánica de teorías, sino una actividad reflexiva que integra conocimiento práctico, juicio y ética. Para Gimeno, la cultura escolar —sus rutinas, tiempos, contratos, expectativas— condiciona lo que los estudiantes pueden llegar a aprender; por ello, transformar la práctica implica también transformar la organización escolar. Su crítica a la ilusión tecnocrática es vigente: los métodos no funcionan por sí mismos, funcionan en manos de docentes que comprenden la finalidad educativa y que toman decisiones en contextos reales, con restricciones y posibilidades. La innovación didáctica, entonces, debe ser sensata: orientada a ampliar oportunidades de aprendizaje y a combatir la exclusión, no a seguir modas. Esta perspectiva robustece la identidad profesional docente y la aleja del rol de “aplicador” para afirmarla como **intelectual práctico** comprometido con el bien común.",
            },

            {
              type: "accordion",
              header: "Ideas fuerza en clave de aula (según Gimeno)",
              open: false,
              text:
                "- El currículo como práctica: se decide y se hace en la escuela, no solo se dicta.\n" +
                "- Contextualización: adaptar es profesionalizar, no ‘rebajar’ el estándar.\n" +
                "- Docente como agente moral y político: enseñar es tomar partido por la inclusión y la justicia.",
            },

            {
              type: "paragraph",
              text: "Una lectura operativa de Gimeno sugiere revisar los **niveles de decisión** del currículo (macro, meso, micro) y sus determinantes (político-administrativos, organizativos, culturales, técnico-pedagógicos e innovadores) para entender por qué a veces lo planeado no se realiza. También llama a visibilizar el **currículo oculto**: lo que se enseña sin declararlo —expectativas, trato, participación— que moldea identidades y oportunidades. En evaluación, su enfoque desarma la lógica selectiva: evaluar para clasificar reproduce desigualdades; evaluar para aprender corrige trayectorias y amplía posibilidades. Por ello, propone prácticas que democratizan el acceso al éxito: criterios públicos, apoyos diferenciados, tareas significativas y participación estudiantil en la regulación del propio aprendizaje. Esta mirada no es complaciente: sostiene la exigencia, pero promueve justicia curricular, entendiendo que equidad no es dar lo mismo a todos, sino lo que cada quien necesita para alcanzar los objetivos. Para el docente, el reto es doble: **argumentar** sus decisiones con razones didácticas y **rendir cuentas** con evidencias de aprendizaje. Solo así la práctica gana espesor profesional y legitimidad.",
            },

            {
              type: "accordion",
              header:
                "Preguntas de diseño (para planear con la lente de Gimeno)",
              open: false,
              text:
                "- ¿Qué cultura escolar estoy reforzando con esta secuencia (tiempos, voces, expectativas)?\n" +
                "- ¿Qué tareas amplían o restringen oportunidades de aprendizaje y participación?\n" +
                "- ¿Cómo harán visibles los estudiantes sus progresos y cómo usaré esa evidencia para decidir?",
            },

            {
              type: "paragraph",
              text: "Llevar estas reflexiones a la práctica implica **procedimientos concretos**. Al planear una unidad, se hace explícita la justificación curricular: por qué estos contenidos aquí y para quién; se definen objetivos observables y se diseñan tareas que convoquen comprensión y transferencia, no solo repetición. En la implementación, se abren espacios de voz estudiantil (protocolos de discusión, coevaluación con criterios públicos) y se regula la participación para evitar silencios sistemáticos. La evaluación combina evidencias de proceso y producto, con rúbricas que describen progresiones y retroalimentación que enseña a mejorar. A nivel institucional, se promueven acuerdos de centro sobre criterios comunes de calidad, observación entre pares y análisis de evidencias para alinear expectativas. Así, la innovación deja de reducirse a “cambiar actividades” y se convierte en un **proyecto ético-pedagógico**: ampliar el derecho a aprender con prácticas que hagan posible el éxito de más estudiantes. La contribución de Gimeno, lejos de ser teórica, ofrece una brújula para decidir con responsabilidad en el terreno: qué mantener, qué ajustar, qué abandonar y qué crear para que enseñar sea, efectivamente, un acto de justicia educativa.",
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
          href: "https://youtu.be/ySkzpOls3cI?si=ir5uIuJj0ZFHdOu", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Entrevista a José Gimeno Sacristán – Márgenes https://youtu.be/ySkzpOls3cI?si=ir5uIuJj0ZFHdOuK",
            "Video de la semana 1 https://youtu.be/64i56Xvc_m0",
            "La función abierta de la obra y su contenido (artículo SciELO) http://www.scielo.org.mx/pdf/sine/n34/n34a9.pdf",
            "La didáctica como marco para la formación docente y la mejora de la calidad de la educación universitaria (artículo Dialnet) https://dialnet.unirioja.es/descarga/articulo/5436873.pdf",
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
            "Bennett, N. (1979). *Estilos de enseñanza y progreso de los alumnos.* Madrid: Morata.",
            "Carrera, B. & Mazzarella, C. (2001). *Vygotsky: enfoque sociocultural.* Caracas: Educere.",
            "Chacin, M. & Morales, N. (2003). *Representaciones y Construcciones didácticas para la vida.* Caracas: UNESR.",
            "Coll, C. & Solé, E. (1990). *La interacción profesor-alumno en el proceso enseñanza y aprendizaje.* Madrid: Alianza.",
            "Coll, C., Martín, E., Mauri, T., Miras, M., Onrubia, J., Solé, I. & Zabala, A. (1999). *El constructivismo en el aula.* Barcelona: Graó.",
            "Diaz Herrera, D. (1999). *La didáctica universitaria: referencia imprescindible para una enseñanza de calidad.* Revista electrónica universitaria de Formación del profesorado, 2(1), 107–116.",
            "Díaz, F. & Hernández, G. (2010). *Estrategias docentes para un aprendizaje significativo.* México: McGraw-Hill.",
            "Flanders, N. A. (1984). *Análisis de la interacción didáctica.* Madrid: Anaya.",
            "Gimeno Sacristán, J. & Pérez, A. (1996). *Comprender y transformar la enseñanza.* Madrid: Morata.",
            "Gimeno Sacristán, J. (1991). *El currículo: Una reflexión sobre la práctica.* Madrid: Morata.",
            "Woolfolk, A. (2010). *Psicología educativa.* México: Pearson.",
            "Zabalza, M. A. (2002). *La enseñanza universitaria. El escenario y sus protagonistas.* Madrid: Narcea.",
            "Zabalza, M. A. (2003). *Competencias docentes del profesorado universitario. Calidad y desarrollo profesional.* Madrid: Narcea.",
            "Zubieta, E. & Valencia, J. (2006). *Representaciones sociales e identidad social: Origen y desarrollo de la inteligencia y el rol docente.* Revista del Instituto de Investigaciones de la Facultad de Psicología, 11(13), 145–169.",
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
