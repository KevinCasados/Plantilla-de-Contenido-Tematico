/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MED", // Maestría en Educación
  courseId: "PAE", // Paradigmas Actuales de la Enseñanza
  id: "modulo3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Paradigmas actuales de la enseñanza",
  title: "Módulo 3. La función del docente para la transformación educativa",
  semestre: "4º semestre",
  teacher: "Mtra. Lucila Yolanda Sánchez Orea",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Valorar la habilidad creativa del docente en el mejor desempeño áulico para atender las necesidades de las nuevas generaciones que requieren una formación integral.", // :contentReference[oaicite:0]{index=0}
  competencies: [
    "Identificar las habilidades docentes para propiciar ambientes y espacios creativos.",
    "Valorar la importancia de la creatividad en el diseño de clases para mejores encuentros en el proceso educativo dentro del aula.",
    "Reconocer el desempeño docente ante los retos de una enseñanza dinámica e interesante para el alumno en formación.", // :contentReference[oaicite:1]{index=1}
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
      title: "La función del docente para la transformación educativa",
      content: [
        /* Párrafo 1 */
        {
          type: "paragraph",
          text: "La Nueva Escuela Mexicana concibe al profesorado como agente clave de cambio; exige educadores que sitúen al alumno en el centro y generen condiciones que favorezcan el aprendizaje significativo. La creatividad es aquí el motor de la transformación: involucra cuestionar rutinas, reimaginar la planeación y ensayar escenarios didácticos que conecten con los intereses contemporáneos de la juventud. Desde esta perspectiva, la labor docente trasciende la simple transmisión de contenidos y se orienta a diseñar experiencias formativas con propósito, rigor y sensibilidad. De ese modo, se consolidan aulas inclusivas, motivantes y coherentes con los retos de un mundo en permanente evolución, en el que el saber ya no puede limitarse a reproducir información, sino a movilizarla para resolver problemas reales y fomentar la autonomía intelectual del estudiante.",
        },

        /* Párrafo 2 */
        {
          type: "paragraph",
          text: "No obstante, el sistema escolar arrastra inercias que derivan en clases monótonas, calendarios saturados y programas inflexibles. Con frecuencia se sacrifica la exploración creativa para ‘cubrir temarios’, lo que conduce a la desmotivación y a la pasividad en el aula. Esta realidad se agudiza cuando los estudiantes se exponen a entornos digitales altamente estimulantes fuera de la escuela y perciben un desfase entre esos contextos y la experiencia educativa formal. El profesor comprometido debe reconocer este desfase y responder mediante estrategias que inspiren curiosidad, provoquen preguntas y ofrezcan relevancia contextual. Diseñar ambientes interactivos, introducir problemas auténticos y permitir la co-creación de conocimientos son pasos esenciales para reactivar el interés y lograr que los alumnos asuman un rol protagónico en su propio proceso formativo.",
        },

        /* Párrafo 3 */
        {
          type: "paragraph",
          text: "Entender la creatividad como ‘cambiar’ implica asumirla como una competencia profesional deliberada. Amegan la define como la capacidad de articular combinaciones novedosas a partir de elementos preexistentes; trasladada al espacio escolar, exige al docente diseñar planeaciones flexibles que incluyan materiales, dinámicas y evaluaciones diversas. Esto supone diagnosticar al grupo, dosificar contenidos según su naturaleza conceptual, procedimental o actitudinal, y seleccionar recursos pertinentes que abran múltiples vías de acceso al conocimiento. La creatividad didáctica, por tanto, no se reduce a actividades lúdicas ocasionales; es un enfoque de fondo que integra reflexión teórica, objetivos claros y una ética de cuidado hacia los ritmos y estilos de aprendizaje de cada estudiante, garantizando pertinencia y equidad en la experiencia educativa.",
        },

        /* Párrafo 4 */
        {
          type: "paragraph",
          text: "Para materializar esa visión transformadora, el docente requiere competencias sólidas: académica, para dominar el saber disciplinar; organizativa, para planificar y gestionar procesos; didáctica, para traducir teorías en prácticas motivadoras; comunicativa, para construir diálogos significativos; e integradora, para orquestar la diversidad del grupo con sensibilidad e inclusión. Estas competencias se articulan en un perfil profesional que valora la innovación, la evaluación formativa y la colaboración. Su desarrollo continuo demanda autoevaluación, actualización pedagógica y apertura al riesgo creativo, comprendiendo que cada intento fallido aporta datos valiosos para refinar la práctica y aproximarse a metas educativas más ambiciosas y humanistas.",
        },

        /* Párrafo 5 */
        {
          type: "paragraph",
          text: "Entre las estrategias que demuestran la potencia de la creatividad se encuentran las ‘pausas activas’, breves intervenciones corporales y cognitivas que rompen la rutina, oxigenan el cerebro y restauran la atención. Implementarlas requiere planificar momentos específicos dentro de la sesión para estiramientos, dinámicas lúdicas o ejercicios de respiración profunda. Los beneficios van más allá del bienestar físico: elevan la concentración, disminuyen el estrés y despiertan la curiosidad, facilitando la conexión con contenidos complejos. Integradas con criterio, estas pausas ejemplifican cómo pequeñas decisiones metodológicas pueden transformar el clima del aula y potenciar el aprendizaje significativo, reforzando la percepción del docente como diseñador de experiencias integradoras.",
        },

        /* Acordiones (tres niveles) */
        {
          type: "accordion",
          header: "Nivel 1 — Visión global de la transformación educativa",
          open: false,
          text: "Explora la redefinición del rol docente, la centralidad del estudiante y la importancia de la creatividad como eje articulador del cambio escolar.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Estrategias didácticas creativas",
          open: false,
          text: "Presenta ejemplos de metodologías activas: aprendizaje basado en problemas, proyectos interdisciplinares, pausas activas y uso estratégico de TIC.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Competencias y evaluación del desempeño docente",
          open: false,
          text: "Detalla las competencias académica, organizativa, didáctica, comunicativa e integradora, proponiendo indicadores para su autoevaluación y mejora continua.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "La escuela y la creatividad",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "Las aulas del siglo XXI se han convertido en espacios de convivencia entre la cultura digital —rápida, visual e interactiva— y la estructura escolar tradicional, frecuentemente rígida y secuencial. Esa tensión evidencia la urgencia de que el docente asuma la creatividad como una competencia profesional estratégica; no basta con dominar el temario, es preciso rediseñar la experiencia didáctica para rescatar la curiosidad y la motivación intrínseca del alumnado. Lograrlo implica cuestionar rutinas, reconfigurar tiempos y generar actividades que favorezcan el asombro, la exploración y la colaboración, elementos que reactivan el aprendizaje significativo y otorgan sentido a los saberes escolares.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Indicadores de creatividad en la práctica docente",
              open: false,
              text: "El documento resalta cuatro componentes que permiten evaluar si una práctica es realmente creativa: métodos, técnicas, contenidos y recursos. Cada componente actúa como palanca para estimular la percepción del entorno, desarrollar competencias de resolución de problemas y activar la capacidad de ideación. Así, un método variado (p. ej. aprendizaje basado en proyectos), técnicas flexibles (rotación de roles, lluvia de ideas), contenidos contextualizados y recursos multisensoriales son señales objetivas de un diseño creativo. Estos indicadores orientan la autoevaluación docente y garantizan que la innovación no sea fortuita sino sistemática.",
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "Adoptar estos indicadores exige una mirada crítica a la organización escolar misma. Cuando el programa se reduce a ‘cubrir contenidos’, la presión por avanzar desplaza toda posibilidad de juego intelectual; de ahí que la creatividad pase también por negociar espacios de flexibilidad curricular, redistribuir el mobiliario o articular proyectos interdisciplinares que permitan mayor profundidad conceptual. Bajo esta óptica, la escuela deja de ser un lugar donde se consumen conocimientos para convertirse en un laboratorio donde se producen ideas, se cometen errores valiosos y se celebra la diversidad cognitiva.",
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://antoniballester.com/wp-content/uploads/2020/11/4-La-creatividad-en-el-aula-1080x675.jpg",
              caption:
                "Ambientes creativos: del orden estático a la exploración colaborativa.",
            },

            /* Párrafo 3 */
            {
              type: "paragraph",
              text: "En este marco, los indicadores mencionados operan como brújula pedagógica. Por ejemplo, el componente ‘métodos’ invita a alternar exposiciones breves con discusiones socráticas; ‘técnicas’ sugiere integrar dramatizaciones o portafolios digitales; ‘contenidos’ reclama pertinencia cultural y relevancia para la vida cotidiana; y ‘recursos’ exhorta al uso creativo de TIC, materiales reciclables o entornos comunitarios. La suma de estos elementos genera experiencias de aprendizaje en las que el estudiante se asume protagonista de su propio proceso, fortalece la autonomía intelectual y cultiva la capacidad de transformar su realidad inmediata.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Barreras institucionales y cómo sortearlas",
              open: false,
              text: "Las principales barreras son la inflexibilidad curricular, la sobrecarga administrativa y la resistencia al cambio. Para sortearlas se proponen tres acciones: (1) Negociar micro-espacios de innovación (un ‘viernes creativo’ mensual) que permitan probar metodologías activas sin comprometer el calendario global; (2) Implementar comunidades de práctica entre docentes para compartir materiales listos-para-usar y minimizar tiempo de preparación; (3) Emplear evidencias de aprendizaje —productos, rúbricas, portafolios— que convenzan a directivos sobre la pertinencia de estrategias creativas y faciliten su institucionalización.",
            },

            /* Párrafo 4 */
            {
              type: "paragraph",
              text: "Superar los obstáculos anteriores requiere liderazgo distribuido: el docente impulsor debe articular redes de colaboración con colegas, directivos y familias para legitimar cambios y garantizar continuidad. Además, la documentación sistemática de logros —incremento de participación estudiantil, mejora en la retención de conceptos o proyectos divulgados en la comunidad— funge como evidencia para sostener la transformación más allá de entusiasmos individuales. Con este enfoque, la creatividad deja de ser un lujo anecdótico y se consolida como parte intrínseca de la cultura escolar.",
            },
          ],
        },

        {
          id: "1.2",
          numbering: "1.2",
          title: "El proceso didáctico creativo",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "El proceso didáctico creativo inicia con un diagnóstico profundo del grupo para identificar intereses, estilos de aprendizaje y saberes previos; continúa con la formulación de objetivos retadores y la selección de metodologías activas —proyectos, estudios de caso, gamificación— que propicien participación genuina. Esta secuencia flexible se sustenta en la evaluación formativa constante, que retroalimenta y redefine la ruta pedagógica, consolidando un círculo virtuoso entre planeación, acción y reflexión docente.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Fases del proceso didáctico creativo",
              open: false,
              text: "1) Diagnóstico: recolección de información sobre el alumnado para alinear contenidos con intereses reales. 2) Ideación: lluvia de ideas de estrategias, selección de recursos y diseño de actividades divergentes. 3) Prototipado: secuenciación de las actividades, definición de roles y recursos. 4) Implementación: puesta en marcha con flexibilidad para ajustes inmediatos. 5) Reflexión y evaluación formativa: análisis de evidencias y retroalimentación para iterar el diseño didáctico.",
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "Una vez delineadas las fases, la creatividad se materializa en la selección de estrategias: desde ‘pausas activas’ que re-oxigenan la atención hasta proyectos interdisciplinares que conectan con la comunidad. La clave es concebir cada recurso como engranaje de un sistema coherente, donde métodos, contenidos y evaluación convergen en torno a retos auténticos. Tal coherencia facilita que el alumnado transite de receptor pasivo a agente constructor de significado, capaz de transferir aprendizajes a situaciones nuevas.",
            },

            /* Imagen motivacional */
            {
              type: "image",
              src: "https://www.eha.cl/upload/blog/portada/small/-pedagogia-de-la-creatividad-impulsada-desde-frutillar-fue-reconocida-por-unesco-5bde50e343d4f458d750b107e15f7aea.webp",
              caption:
                "Iterar, prototipar, reflexionar: la espiral de la creatividad docente.",
            },

            /* Párrafo 3 */
            {
              type: "paragraph",
              text: "El componente evaluativo en un proceso creativo debe trascender la calificación numérica y orientarse a la retroalimentación continua. Para ello, rúbricas abiertas, diarios de aprendizaje y portafolios digitales se integran como instrumentos que revelan niveles de logro, obstáculos y rutas de mejora. Este enfoque convierte la evaluación en acto dialógico y co-responsable, reforzando la autonomía del estudiante al permitirle monitorizar su propio progreso, reajustar estrategias y celebrar hallazgos.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header:
                "Ejemplos de estrategias flexibles y evaluaciones formativas",
              open: false,
              text: "• Aprendizaje basado en problemas con rúbricas co-creadas. • Proyectos STEAM que concluyen en ferias virtuales y autoevaluaciones. • ‘Pausas activas’ acompañadas de diarios de atención. • Debates estructurados con fichas de auto- y heteroevaluación. • Portafolios digitales donde el alumnado integra evidencias multimodales (videos, bitácoras, infografías) discutidas en tutorías.",
            },

            /* Párrafo 4 */
            {
              type: "paragraph",
              text: "Finalmente, la sostenibilidad de un proceso didáctico creativo depende de la cultura escolar: directivos que legitimen el riesgo pedagógico, horarios que permitan ajustes y acceso a recursos que faciliten la experimentación. Cuando estas condiciones convergen, el docente se consolida como diseñador de experiencias significativas y el aula se transforma en un ecosistema donde la curiosidad guida y el error se valora como motor de mejora continua.",
            },
          ],
        },
        {
          id: "1.3",
          numbering: "1.3",
          title: "Estimuladora del pensamiento creativo",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "Para estimular el pensamiento creativo en el aula el docente debe trascender el papel de mero transmisor de información y convertirse en detonador de ideas. El módulo plantea que el educador asume nuevos roles y funciones encaminados a fomentar actitudes innovadoras en sus estudiantes, de modo que cada sesión se convierta en un espacio para imaginar posibilidades y transformar la realidad inmediata :contentReference[oaicite:0]{index=0}. Esta responsabilidad implica diseñar retos intelectuales donde las preguntas abiertas, la investigación guiada y la reflexión metacognitiva despierten la curiosidad y el asombro. Dichos retos han de apoyarse en los cuatro componentes básicos de la creatividad escolar —métodos, técnicas, contenidos y recursos— que, articulados, desarrollan la capacidad de ideación, la adaptación a situaciones nuevas y la resolución original de problemas :contentReference[oaicite:1]{index=1}. Cuando el docente incorpora estos componentes a su planeación, invita al alumnado a experimentar, errar y aprender de los errores, convirtiendo cada clase en un laboratorio de pensamiento divergente y crítico.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "En la práctica cotidiana, uno de los mayores obstáculos para la creatividad es la rutina que deriva de calendarios apretados y programas rígidos. El documento destaca cómo, en muchas aulas, la prisa por ‘cubrir contenidos’ deriva en sesiones monótonas que terminan apagando la motivación intrínseca del alumnado :contentReference[oaicite:2]{index=2}. Para contrarrestar esta inercia, el profesor creativo introduce técnicas breves y potentes: lluvias de ideas relámpago, mapas mentales colectivos, retos de diseño con materiales cotidianos o debates exprés que exijan a los estudiantes sintetizar su pensamiento en tiempo limitado. La clave radica en alternar momentos de alta intensidad cognitiva con pausas activas y actividades lúdicas que oxigenen la mente. De esta manera, el proceso de enseñanza-aprendizaje se reconfigura como una dinámica vibrante en la que cada participante se siente interpelado a aportar soluciones originales y a valorar la diversidad de perspectivas.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Técnicas detonadoras de ideas",
              open: false,
              text: '• Brainstorming visual con imágenes ambiguas.\n• SCAMPER aplicado a problemas reales del entorno escolar.\n• Role-playing de profesiones para idear respuestas alternativas.\n• "La peor idea posible", seguida de un giro para volverla viable.',
            },

            /* Imagen inspiradora entre párrafos */
            {
              type: "image",
              src: "https://www.escueladesarts.com/wp-content/uploads/BLOG-GESN-SAN-3.png",
              caption:
                "La experimentación creativa exige un clima seguro y colaborativo.",
            },

            /* Párrafo 3 (~300 palabras) */
            {
              type: "paragraph",
              text: "La literatura consultada subraya que la creatividad educativa florece cuando el diseño de clase integra conscientemente los componentes antes mencionados. Por ejemplo, un método centrado en proyectos comunitarios puede combinar la técnica del ‘design thinking’ con contenidos disciplinares y recursos digitales de libre acceso; así se genera una experiencia auténtica donde el estudiante identifica un problema, propone soluciones, crea un prototipo y reflexiona sobre el impacto social de su propuesta. Cada fase exige pensamiento divergente, selección informada de información y comunicación clara, habilidades que construyen el andamiaje del pensamiento creativo profesional :contentReference[oaicite:4]{index=4}. Bajo este enfoque, la evaluación deja de ser un acto punitivo y se transforma en retroalimentación continua que orienta al alumno a refinar sus ideas y profundizar en su proceso de creación.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Criterios para diseñar retos de pensamiento",
              open: false,
              text: "1. Autenticidad: vincular el reto con la realidad del alumno.\n2. Ambigüedad productiva: múltiples soluciones posibles.\n3. Recursos abiertos: permitir diferentes medios y soportes.\n4. Reflexión: incluir momentos de metacognición y feedback.",
            },

            /* Párrafo 4 (~300 palabras) */
            {
              type: "paragraph",
              text: "Finalmente, la capacidad de estimular el pensamiento creativo demanda que el docente domine competencias académicas, organizativas y comunicativas. Debe saber transformar los contenidos de su disciplina en narrativas sugerentes, gestionar el tiempo con flexibilidad y mantener una comunicación empática que legitime todas las voces del aula. El módulo enfatiza que impulsar estas competencias no es un lujo, sino una condición para que los estudiantes desarrollen autonomía intelectual y disposición para la innovación permanente :contentReference[oaicite:5]{index=5}. Cuando la escuela consolida esta visión, el aprendizaje deja de ser una carrera para memorizar datos y se convierte en la aventura de producir conocimiento significativo, crítico y socialmente relevante.",
            },
          ],
        },

        {
          id: "1.4",
          numbering: "1.4",
          title: "La creatividad en contenidos y materiales de enseñanza",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "Seleccionar y adaptar contenidos con un enfoque creativo significa cuestionar la linealidad del temario y priorizar experiencias que conecten con las realidades de los alumnos. El módulo recalca la importancia de elegir recursos pertinentes, incluidas las tecnologías digitales, y de organizar el aula de acuerdo con la naturaleza de los aprendizajes esperados :contentReference[oaicite:6]{index=6}. Este principio obliga al docente a revisar críticamente los planes de estudio, identificar oportunidades interdisciplinarias y secuenciar los temas de modo que cada uno despierte la curiosidad y ofrezca retos cognitivos graduales. Bajo esta lógica, la planeación se concibe como un acto de diseño donde los contenidos funcionan como materia prima para construir proyectos, debates, simulaciones o productos artísticos que den sentido a la teoría.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "La creatividad en los materiales de enseñanza no se reduce al uso de dispositivos electrónicos; implica aprovechar objetos cotidianos, arte, literatura, juegos y entornos comunitarios como fuentes de aprendizaje. En palabras del documento, las estrategias deben ser variadas, innovadoras y retadoras, fomentando indagación, pensamiento crítico y colaboración :contentReference[oaicite:7]{index=7}. Así, una simple caja de cartón puede transformarse en modelo arquitectónico, un mural colectivo en soporte para explicar procesos históricos y una playlist musical en disparador de análisis sociolingüístico. Cada recurso, físico o virtual, se selecciona por su potencial para expandir la experiencia sensorial y cognitiva, permitiendo que los estudiantes interactúen con la temática desde múltiples ángulos.",
            },

            /* Imagen entre párrafos */
            {
              type: "image",
              src: "https://1.bp.blogspot.com/_Vu4cDVjjvVI/TOcXSPYsOmI/AAAAAAAACuQ/_edb5EQR6Gs/w1200-h630-p-k-no-nu/artclass3.jpg",
              caption:
                "Materiales diversos convierten el aula en un taller de creación.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Criterios de selección de materiales",
              open: false,
              text: "• Pertinencia cultural y contextual.\n• Accesibilidad económica y logística.\n• Potencial multisensorial.\n• Capacidad de reutilización y sostenibilidad.",
            },

            /* Párrafo 3 (~300 palabras) */
            {
              type: "paragraph",
              text: "El texto indica que métodos, técnicas, contenidos y recursos deben interactuar como un sistema coherente que estimule la percepción, la ideación y la transformación del entorno :contentReference[oaicite:9]{index=9}. Aplicado a los materiales, esto supone que cada recurso cumpla una función precisa dentro de la secuencia didáctica: introducir, profundizar, aplicar o evaluar. Por ejemplo, un podcast puede servir para contextualizar un tema; un laboratorio improvisado con materiales reciclados, para experimentar conceptos científicos; y una infografía interactiva, para sintetizar hallazgos. Al articular estas piezas, el docente otorga continuidad narrativa a la experiencia de aprendizaje y evita la fragmentación que produce el uso de recursos aislados.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Ejemplos de recursos creativos",
              open: false,
              text: "◦ Laboratorios de cocina para explorar química.\n◦ Cajas misteriosas con objetos históricos.\n◦ Realidad aumentada para visualizar anatomía.\n◦ Dramatizaciones con vestuario reciclado.\n◦ Podcasts estudiantiles para divulgar descubrimientos.",
            },

            /* Párrafo 4 (~300 palabras) */
            {
              type: "paragraph",
              text: "Una planificación creativa de contenidos y materiales exige, además, una evaluación congruente que valore la originalidad, la profundidad y la transferencia de lo aprendido. Rúbricas flexibles, portafolios digitales y exposiciones públicas son estrategias sugeridas para documentar el proceso y el producto de los estudiantes. El módulo subraya que el éxito de esta propuesta depende de la disposición del profesor para actualizarse, colaborar con sus pares y asumir el riesgo de experimentar con nuevas combinaciones pedagógicas :contentReference[oaicite:10]{index=10}. Solo así se consolida un ambiente donde la creatividad no sea un evento aislado, sino un componente estructural que potencia la calidad y la pertinencia de la educación.",
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
          href: "https://www.youtube.com/watch?v=CgHaqeOTkwE", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Actividad introductoria — «Paradigmas» (Educaplay). https://es.educaplay.com/recursos-educativos/9937171-paradigmas.html", // :contentReference[oaicite:0]{index=0}
            "SEP (2021). PERFILES PROFESIONALES, CRITERIOS E INDICADORES PARA DOCENTES. http://creson.edu.mx/docs/Perfiles_profesionales_Criterios_e_Indicadores_para_Docentes_Ciclo_Escolar_2021-2022.pdf", // :contentReference[oaicite:1]{index=1}
            "SEP (2019). Principios y orientación pedagógica de la Nueva Escuela Mexicana. https://dfa.edomex.gob.mx/sites/dfa.edomex.gob.mx/files/files/NEM%20principios%20y%20orientacio%C3%ADn%20pedago%C3%ADgica.pdf", // :contentReference[oaicite:2]{index=2}
            "Manual de estrategias didácticas (Orientación Andújar). https://www.orientacionandujar.es/wp-content/uploads/2015/03/Manual-estrategias-didacticas.pdf", // :contentReference[oaicite:3]{index=3}
            "Vídeo — «¿Cómo despertar la creatividad?» Angélica Sátiro. https://www.youtube.com/watch?v=CgHaqeOTkwE", // :contentReference[oaicite:4]{index=4}
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
            "Alvarado, L. (2003). *La creatividad en la escuela.* México: DAL. Soluciones Creativas.", // :contentReference[oaicite:0]{index=0}
            "Amegan, S. (2010). *Para una Pedagogía Activa y Creativa.* México: Trillas.", // :contentReference[oaicite:1]{index=1}
            "Frola, P. (2011). *Desarrollo de competencias docentes.* México: FROVEL.", // :contentReference[oaicite:2]{index=2}
            "Galvis, R. (2007). *El proceso creativo en la formación docente.* Venezuela: Laurus.", // :contentReference[oaicite:3]{index=3}
            "Mañú, J. (2011). *Docentes Competentes.* México: Narcea.", // :contentReference[oaicite:4]{index=4}
            "SEP. (2019). *La Nueva Escuela Mexicana.* Recuperado de https://dfa.edomex.gob.mx/sites/dfa.edomex.gob.mx/files/files/NEM%20principios%20y%20orientacio%C3%ADn%20pedago%C3%ADgica.pdf", // :contentReference[oaicite:5]{index=5}
            "SEP. (2021). *Perfiles profesionales, criterios e indicadores para docentes.* Recuperado de http://creson.edu.mx/docs/Perfiles_profesionales_Criterios_e_Indicadores_para_Docentes_Ciclo_Escolar_2021-2022.pdf", // :contentReference[oaicite:6]{index=6}
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
