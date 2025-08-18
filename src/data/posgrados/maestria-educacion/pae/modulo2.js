/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "ME", // Maestría en Educación
  courseId: "ME-PAE", // Paradigmas Actuales de la Enseñanza
  id: "ME-PAE-M2", // Módulo 2

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Paradigmas actuales de la enseñanza",
  title: "Módulo 2. Paradigmas actuales de la enseñanza (Sesión 2)",
  semestre: "4º semestre",
  teacher: "Mtra. Lucila Yolanda Sánchez Orea",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Valorar al paradigma constructivista como modelo de interacción y trabajo colaborativo en el proceso educativo y como parte de la formación docente que responde a necesidades actuales de los grupos escolares.",
  competencies: [
    "Identificar las condiciones del paradigma del constructivismo, para mejorar la práctica docente.",
    "Reconocer la importancia del constructivismo, para generar nuevos espacios áulicos en el trabajo colaborativo.",
    "Valorar al constructivismo como un paradigma preocupado por la búsqueda de un aprendizaje colaborativo, para que el docente ajuste y rediseñe su actuar pedagógico.",
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

    /* 1. Unidad principal (según el PDF: Unidad 1) */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Paradigmas actuales de la enseñanza y la práctica escolar",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad profundiza en el paradigma constructivista como marco para comprender cómo aprenden las personas y, sobre todo, cómo se diseña la enseñanza para que ese aprendizaje ocurra con sentido. Partimos de una idea clave: el conocimiento no se transfiere de forma mecánica del docente al alumno, sino que se construye activamente cuando el estudiante vincula nuevos contenidos con sus experiencias, saberes previos e intereses. Desde esta perspectiva, la enseñanza deja de ser un conjunto de explicaciones y ejercicios rutinarios para convertirse en el diseño de situaciones significativas: problemas auténticos, preguntas generadoras, proyectos colaborativos, estudio de casos, debates informados, exploraciones guiadas y tareas de desempeño. El papel del docente, por tanto, se redefine como mediador: quien organiza el ambiente, anticipa dificultades, ofrece andamiajes y retira apoyos de manera gradual conforme crece la autonomía. En paralelo, la evaluación migra hacia procesos formativos que retroalimentan, monitorean el progreso y hacen visibles las evidencias del aprender. Veremos cómo esta lógica se articula con las necesidades reales del aula y con los lineamientos de política educativa contemporánea que colocan a la escuela como espacio privilegiado para formar ciudadanía crítica, colaborativa y capaz de aprender a lo largo de la vida.",
        },
        {
          type: "accordion",
          header: "Claves del enfoque (en una mirada rápida)",
          open: false,
          text:
            "- El alumno construye significado activamente a partir de saberes previos.\n" +
            "- Docente como mediador: diseña, andamia, retroalimenta y retira apoyos gradualmente.\n" +
            "- Evaluación formativa: evidencias, criterios explícitos y ciclos de mejora.",
        },
        {
          type: "paragraph",
          text: "Un segundo foco de la unidad es la dimensión sociocultural del aprendizaje. Aprender no es sólo un acto individual; ocurre en interacción con otros y dentro de comunidades de práctica que comparten lenguajes, herramientas y propósitos. Por ello cobra relevancia la Zona de Desarrollo Próximo (ZDP): la distancia entre lo que un estudiante puede resolver de manera independiente y lo que logra con apoyo experto o entre pares más capaces. El andamiaje didáctico —preguntas que orientan, modelos de procedimiento, organizadores visuales, rúbricas claras, ejemplos comentados, protocolos de discusión— es la estrategia concreta con la que el docente convierte esa distancia en oportunidad. La colaboración, bien estructurada, no es “trabajo en equipo” sin más: implica roles definidos, metas compartidas, interdependencia positiva y responsabilidad individual. Así, la escuela deja de ser un espacio de memorización aislada para funcionar como laboratorio social del conocimiento, en el que los estudiantes negocian significados, contrastan evidencias, sostienen argumentos y transfieren lo aprendido a situaciones nuevas. Entender esta dinámica nos permitirá traducir el discurso constructivista en decisiones didácticas observables.",
        },
        {
          type: "paragraph",
          text: "Diseñar con enfoque constructivista exige pensar de atrás hacia adelante: primero clarificar qué productos, desempeños o transformaciones evidencian el aprendizaje; luego determinar los criterios de calidad y, por último, planear experiencias que conduzcan hasta ahí. En este itinerario, activar saberes previos resulta crucial: llaves de lectura, preguntas de anticipación, mapas conceptuales iniciales o diagnósticos breves ayudan a detectar ideas alternativas y malentendidos. Después, el docente propone situaciones retadoras pero alcanzables que conectan con problemas del contexto del alumnado. Las explicaciones magistrales no desaparecen; se reubican para ofrecer marcos, síntesis o modelos cuando se necesitan. La práctica deliberada cierra el ciclo: los estudiantes aplican, reciben retroalimentación específica y revisan su trabajo. La evaluación formativa acompaña todo el proceso, combinando instrumentos variados (listas de cotejo, rúbricas, portafolios, diarios de aprendizaje) que no sólo califican, sino que enseñan a evaluar. El resultado es una secuencia didáctica coherente, donde cada actividad tiene propósito, criterios de éxito y oportunidades reales de mejora.",
        },

        {
          type: "accordion",
          header: "Diseño didáctico paso a paso",
          open: false,
          text:
            "1) Define desempeños y criterios de calidad (qué evidenciará el aprendizaje).\n" +
            "2) Activa saberes previos y detecta ideas alternativas (diagnóstico breve).\n" +
            "3) Propón tareas auténticas con andamiajes y práctica deliberada.\n" +
            "4) Cierra con transferencia: aplicar lo aprendido en un contexto nuevo.",
        },
        {
          type: "paragraph",
          text: "Otro componente esencial es la accesibilidad del aprendizaje. El constructivismo no se reduce a ‘dejar hacer’; demanda una planificación sensible a la diversidad. Diferenciar no significa diseñar una secuencia distinta por estudiante, sino ofrecer múltiples vías de acceso al contenido (textos, gráficos, videos, demostraciones), de participación (debates, simulaciones, construcción, escritura) y de evidencias (infografías, presentaciones, proyectos, pruebas prácticas) manteniendo expectativas altas y criterios comunes. El clima emocional del aula también es pedagógicamente decisivo: sin seguridad psicológica, el error se evita y la curiosidad se retrae. Por ello se trabajan rutinas de pensamiento, acuerdos de convivencia, protocolos de crítica amable y pausas para autorregulación. Esta dimensión socioemocional no ‘suaviza’ la exigencia; la hace posible, porque devuelve a los procesos ejecutivos (atención, memoria de trabajo, planificación) la energía que la ansiedad les roba. En suma, la inclusión se vuelve una práctica concreta de diseño y mediación que amplía la participación de todos.",
        },
        {
          type: "paragraph",
          text: "Finalmente, conectamos el paradigma constructivista con la mejora de la práctica docente y la cultura escolar. La coherencia curricular se cuida articulando objetivos, metodologías y evaluación; la colaboración profesional entre docentes permite diseñar, observar y refinar clases con base en evidencias; y la comunicación con familias y comunidad alinea expectativas y multiplica oportunidades de aprendizaje fuera del aula. A nivel institucional, se promueven ciclos de indagación-acción: definir un problema de aprendizaje, probar intervenciones, recoger datos, reflexionar y ajustar. Así, el discurso se convierte en rutina organizativa. Esta unidad te proporcionará plantillas para planear por desempeños, ejemplos de andamiajes, repertorios de rutinas de pensamiento y modelos de retroalimentación descriptiva que podrás adaptar a tu contexto. El objetivo no es ‘aplicar’ el constructivismo como receta, sino desarrollar criterio didáctico para decidir con fundamento cuándo, cómo y por qué usar cada recurso. En breve: que la didáctica sea una ingeniería cuidadosa del aprendizaje significativo, colaborativo y transferible.",
        },

        /* Acordeones (3 niveles) */
        {
          type: "accordion",
          header: "Riesgos frecuentes y cómo evitarlos",
          open: false,
          text:
            "- Actividades sin propósito: explicita siempre el ‘para qué’ y los criterios.\n" +
            "- Trabajo ‘en equipo’ sin estructura: define roles, tiempos y productos.\n" +
            "- Retroalimentación vaga: usa rúbricas breves, ejemplos y comentarios accionables.",
        },
      ],

      /* → Subtemas del Tema 1 (según el PDF) */
      subthemes: [
        {
          id: "1.2",
          numbering: "1.2",
          title: "La práctica escolar dentro del enfoque constructivista",
          content: [
            /* ── Párrafo 1 (≈300 palabras) ── */
            {
              type: "paragraph",
              text: "El paradigma constructivista concibe la práctica escolar como un escenario de interacción en el que cada estudiante reelabora, contrasta y enriquece sus saberes previos a partir de experiencias culturalmente situadas. Esta visión desplaza el esquema transmisión–recepción hacia un modelo dialógico donde el conocimiento se co-construye: el docente media la actividad cognitiva de los alumnos, plantea problemas abiertos y organiza recursos que obligan a negociar significados. En consecuencia, la clase ya no se entiende como una sucesión de exposiciones magistrales, sino como una secuencia de situaciones didácticas que retan la zona de desarrollo próximo y desencadenan procesos metacognitivos. Cuando el grupo se enfrenta a tareas auténticas —explorar un fenómeno local, diseñar un experimento sencillo o resolver un dilema ético— se activan los andamios necesarios para convertir la información en aprendizaje significativo; el error se valoriza como evidencia del esfuerzo de acomodar esquemas, y la evaluación adopta un carácter formativo que alinea retroalimentación, regulación y proyección de nuevas metas.",
            },

            /* ── Párrafo 2 ── */
            {
              type: "paragraph",
              text: "Implementar esta práctica constructivista exige un diseño intencional del ambiente de aula. Los materiales se seleccionan por su potencial heurístico: textos polifónicos que susciten preguntas, modelos manipulables que permitan contrastar hipótesis y dispositivos tecnológicos que faciliten la visualización de procesos complejos. El mobiliario se dispone en islas colaborativas para propiciar la co-elaboración y la argumentación; simultáneamente, las normas de convivencia se acuerdan con los estudiantes y se revisan periódicamente para sostener la seguridad afectiva. A nivel discursivo, el profesor introduce andamiajes lingüísticos —reformular, ejemplificar, contra-preguntar— que ayudan a explicitar las operaciones mentales. Así, la mediación se convierte en un «diálogo estratégico»: cada intervención docente persigue hacer visible la lógica subyacente, relativizar las soluciones únicas y promover la transferencia a contextos inéditos.",
            },

            /* ── Acordeón 1 ── */
            {
              type: "accordion",
              header: "Estrategias clave en la práctica constructivista",
              open: false,
              text:
                "- Activar conocimientos previos con preguntas generadoras.\n" +
                "- Proponer problemas socialmente relevantes que admitan múltiples rutas de solución.\n" +
                "- Facilitar andamiajes graduados (pista, ejemplo parcial, modelo completo) y retirarlos progresivamente.",
            },

            /* ── Imagen ── */
            {
              type: "image",
              src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
              alt: "Equipo de estudiantes colaborando alrededor de una mesa con material didáctico",
              caption:
                "El aula constructivista potencia la interacción y el trabajo colaborativo.",
              maxWidth: "860px",
            },

            /* ── Párrafo 3 ── */
            {
              type: "paragraph",
              text: "La investigación reciente confirma que los entornos constructivistas fortalecen la autorregulación, la resiliencia académica y la motivación intrínseca. Cuando el alumnado percibe que sus experiencias son valoradas como punto de partida legítimo, incrementa la auto-eficacia y persiste ante la dificultad. De igual modo, la coevaluación y la retroalimentación entre pares consolidan la comprensión al requerir que los estudiantes expliciten criterios de calidad, identifiquen evidencias y sugieran mejoras. En este marco, el aprendizaje deja de ser un acto individual y se redefine como una práctica sociocultural que integra dimensiones cognitivas, afectivas y éticas. Dicho proceso no es lineal; implica ciclos de desequilibrio y reequilibrio donde el conflicto cognitivo se acompaña de emociones —curiosidad, incertidumbre, satisfacción— que el docente gestiona mediante rutinas de reflexión y técnicas de regulación emocional.",
            },

            /* ── Acordeón 2 ── */
            {
              type: "accordion",
              header: "Indicadores para evaluar una clase constructivista",
              open: false,
              text:
                "- Presencia de preguntas abiertas y tareas auténticas.\n" +
                "- Uso explícito de andamiajes y retirada gradual.\n" +
                "- Evidencia de coevaluación, autorregulación y transferencia de aprendizajes.",
            },

            /* ── Párrafo 4 ── */
            {
              type: "paragraph",
              text: "En síntesis, la práctica escolar constructivista articula tres ejes: 1) diseño de situaciones retadoras contextualizadas; 2) mediación estratégica que hace visibles los procesos de pensamiento; y 3) clima de aula que legitima la diversidad de voces y perspectivas. Al amalgamar estos elementos se crean condiciones para que el conocimiento escolar se reconstruya, se vuelva funcional y cobre sentido para los aprendices. De este modo, la escuela se alinea con el mandato contemporáneo de formar sujetos críticos, colaborativos y comprometidos con la transformación de su realidad.",
            },
          ],
          subthemes: [
            {
              id: "1.2",
              numbering: "1.2",
              title: "La práctica escolar dentro del enfoque constructivista",
              content: [
                /* — Párrafo 1 — */
                {
                  type: "paragraph",
                  text: "Hablar de práctica escolar desde el constructivismo implica reconocer que el aprendizaje no consiste en la simple transmisión de datos sino en la co-construcción de significados entre docentes, estudiantes y contexto. El aula se concibe como un micro-sistema cultural donde cada sujeto llega con estructuras previas —esquemas cognitivos, marcos afectivos y repertorios de acción— que median la interpretación de las nuevas experiencias. El propósito del docente es, por tanto, crear situaciones de desequilibrio óptimo: problemas auténticos, actividades colaborativas y andamios que inviten al alumno a revisar, ampliar y reconciliar sus ideas con otras más potentes. Este desplazamiento, descrito por Piaget como acomodación y asimilación, se vuelve visible en producciones escritas, discusiones, maquetas, proyectos o prototipos que reflejan la reorganización interna. Al centrar la práctica en dichas evidencias, se transforma la evaluación en un proceso formativo y dialógico donde error y retroalimentación apuntalan la comprensión profunda del fenómeno estudiado." /*turn245file5 L17-L27*/,
                },

                /* — Párrafo 2 — */
                {
                  type: "paragraph",
                  text: "Un segundo eje vertebral es la interacción social. Vygotsky mostró que la dimensión inter-psicológica precede a la intra-psicológica: primero se dialoga con otros y luego se interiorizan los significados. Por eso, la práctica constructivista fomenta la organización de equipos heterogéneos, tutorías entre pares y rutinas de pensamiento visible (mapas, llaves analógicas, diarios de aula) que externalizan el razonamiento y permiten al docente intervenir en la Zona de Desarrollo Próximo (ZDP). El docente se sitúa deliberadamente como mediador: ofrece preguntas que desencadenan conexiones, señala inconsistencias, modela estrategias metacognitivas y gradualmente retira la ayuda cuando la autonomía emerge. Bajo esta lógica, las metodologías activas —aprendizaje basado en proyectos, estudio de casos, simulaciones y juegos de roles— son coherentes, pues trasladan la responsabilidad del significado al alumnado mientras conservan la guía experta que asegura rigor conceptual y pertinencia ética." /*turn245file6 L95-L104*/,
                },

                /* — Párrafo 3 — */
                {
                  type: "paragraph",
                  text: "Desde el plano organizativo, el constructivismo demanda una secuenciación flexible que parta del diagnóstico de saberes previos y avance hacia tareas cada vez más complejas y desafiantes. La planeación considera metas de comprensión, criterios de éxito y productos tangibles que muestren la transferencia del conocimiento a contextos diversos. Asimismo, el aula se configura como entorno seguro para la exploración: se validan las hipótesis, se celebra el error productivo y se usan herramientas digitales (pizarras colaborativas, simuladores, foros) para extender la comunidad de aprendizaje más allá del tiempo presencial. El resultado esperado es un estudiante capaz de argumentar, contrastar fuentes, auto-regular su proceso y co-crear conocimiento con otros, cualidades alineadas con los perfiles de egreso que promueven los planes de estudio vigentes en México, según la SEP 2022." /*turn245file10 L1-L12*/,
                },

                /* — Párrafo 4 — */
                {
                  type: "paragraph",
                  text: "En síntesis, practicar el constructivismo en la escuela no es ornamentar la clase con actividades ‘creativas’, sino diseñar una ecología de aprendizaje donde los conceptos se negocian, se reconstruyen y se aplican para resolver problemas significativos. Ello entraña un cambio de rol: el docente pasa de expositor a facilitador experto; el alumno, de receptor pasivo a agente epistémico; los contenidos, de fines en sí mismos a recursos para pensar y actuar en el mundo. Esta unidad profundiza en los principios operativos y la justificación teórico-práctica de esta concepción, ofreciendo herramientas concretas para su implementación sistemática.",
                },

                /* —— Acordeones —— */
                {
                  type: "accordion",
                  header: "Claves didácticas de la práctica constructivista",
                  open: false,
                  text:
                    "- Diagnóstico constante de saberes previos.\n" +
                    "- Actividades que generen conflicto cognitivo manejable.\n" +
                    "- Andamiaje progresivo y retirada gradual de la ayuda.",
                },
                {
                  type: "accordion",
                  header: "Indicadores de éxito en el aula",
                  open: false,
                  text:
                    "- Participación equitativa y argumentada.\n" +
                    "- Evidencias de transferencia a problemas reales.\n" +
                    "- Autorregulación y metacognición explícita.",
                },

                /* —— Imagen —— */
                {
                  type: "image",
                  src: "https://images.unsplash.com/photo-1531497865144-0464ef8fbf81?auto=format&fit=crop&w=1200&q=80",
                  alt: "Estudiantes colaborando en mesa redonda",
                  caption: "Aprender construyendo significados colectivamente.",
                  maxWidth: "860px",
                },
              ],

              /* ——— Sub-subtemas ——— */
              subthemes: [
                /* ---------- 1.2.1 ---------- */
                {
                  id: "1.2.1",
                  numbering: "1.2.1",
                  title:
                    "Principios del enfoque constructivista en la educación",
                  content: [
                    {
                      type: "paragraph",
                      text: "Los principios que sostienen el enfoque constructivista se agrupan en cuatro grandes bloques: relevancia, actividad, interacción y reflexión. Relevancia significa que los contenidos poseen sentido y valor para el estudiante; se conectan con problemas de su entorno y con sus intereses vitales. La actividad subraya que aprender es hacer: experimentar, manipular, simular, debatir y crear. La interacción pone de relieve la dimensión sociocultural del aprendizaje; los significados se construyen en diálogo con otros y con herramientas culturales (lenguaje, artefactos, TIC). Finalmente, la reflexión apunta a la necesidad de tomar distancia del hacer para analizar el proceso, evaluar resultados y proyectar mejoras, lo que potencia la metacognición." /*turn245file5 L19-L27*/,
                    },
                    {
                      type: "paragraph",
                      text: "Aplicar estos principios obliga a diseñar ambientes ricos en problemas auténticos, con recursos variados y tiempos adecuados de exploración. El docente propone retos graduales que despiertan la curiosidad y que pueden resolverse de múltiples maneras, evitando respuestas únicas y privilegiando el razonamiento sobre la memorización. El intercambio argumentado permite contrastar perspectivas y enriquecer los esquemas conceptuales, mientras los andamios (preguntas guía, ejemplos, rúbricas) sostienen la comprensión sin anular la autonomía. Cuando el alumno formula hipótesis, las prueba y discute sus evidencias, moviliza operaciones cognitivas superiores —análisis, síntesis, evaluación— y genera aprendizajes significativos y duraderos.",
                    },

                    /* Acordeones */
                    {
                      type: "accordion",
                      header: "Principios resumidos",
                      open: false,
                      text:
                        "- Relevancia: contenidos con sentido personal y cultural.\n" +
                        "- Actividad: construcción activa mediante resolución de problemas.\n" +
                        "- Interacción y mediación social.\n" +
                        "- Reflexión metacognitiva constante.",
                    },
                    {
                      type: "accordion",
                      header: "Buenas prácticas de aula",
                      open: false,
                      text:
                        "- Uso de proyectos interdisciplinarios.\n" +
                        "- Evaluación continua y formativa.\n" +
                        "- Espacios para la auto-evaluación y co-evaluación.",
                    },

                    /* Imagen */
                    {
                      type: "image",
                      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
                      alt: "Docente facilitando aprendizaje basado en proyectos",
                      caption: "El andamiaje sostiene el progreso en la ZDP.",
                      maxWidth: "860px",
                    },
                  ],
                },

                /* ---------- 1.2.2 ---------- */
                {
                  id: "1.2.2",
                  numbering: "1.2.2",
                  title: "Justificación de la concepción constructivista",
                  content: [
                    {
                      type: "paragraph",
                      text: "La adopción del constructivismo se justifica por evidencias convergentes de psicología cognitiva, neurociencia y pedagogía comparada. Estudios sobre memoria de trabajo muestran que la información significativa —aquella que se relaciona con conocimientos previos— se almacena y recupera con mayor eficacia. Asimismo, la investigación sobre motivación indica que la autonomía y la relevancia personal potencian la persistencia y la autorregulación. En contextos internacionales, programas alineados con metodologías activas (PISA, TIMSS) reportan mejores resultados en resolución de problemas y pensamiento crítico, habilidades clave para sociedades basadas en el conocimiento. Por ello, organismos como la UNESCO y la OECD recomiendan modelos centrados en el estudiante, colaborativos y reflexivos." /*turn245file11 L1-L11*/,
                    },
                    {
                      type: "paragraph",
                      text: "En el ámbito nacional, el Plan de Estudios 2022 resalta que la escuela debe formar sujetos capaces de problematizar su realidad y construir proyectos colectivos para la justicia social. Esta visión coincide con la promesa del constructivismo: desarrollar competencias intelectuales, sociales y éticas mediante experiencias significativas y colaborativas. Implementarlo no es opcional sino estratégico para atender la diversidad cultural, epistémica y territorial de México. Además, responde a la demanda laboral de perfiles flexibles que sepan aprender a lo largo de la vida, trabajar en equipo y adaptarse a entornos cambiantes. Así, la justificación trasciende la teoría y se ancla en necesidades sociales concretas." /*turn245file10 L18-L27*/,
                    },

                    /* Acordeones */
                    {
                      type: "accordion",
                      header: "Fuentes que avalan el enfoque",
                      open: false,
                      text:
                        "- SEP (2022) Plan de Estudios de Educación Básica.\n" +
                        "- OECD (2018) The Future of Education and Skills.\n" +
                        "- UNESCO (2021) Reimagining our futures together.",
                    },
                    {
                      type: "accordion",
                      header: "Beneficios comprobados",
                      open: false,
                      text:
                        "- Mejora de pensamiento crítico y resolución de problemas.\n" +
                        "- Mayor motivación y autonomía en el aprendizaje.\n" +
                        "- Clima de aula colaborativo y equitativo.",
                    },

                    /* Imagen */
                    {
                      type: "image",
                      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
                      alt: "Grupos de trabajo colaborativo en aula moderna",
                      caption:
                        "La colaboración como núcleo del constructivismo.",
                      maxWidth: "860px",
                    },
                  ],
                },
              ],
            },
            /* ---------- 1.2.3 ---------- */
            {
              id: "1.2.3",
              numbering: "1.2.3",
              title: "Constructivismo y aprendizaje significativo",
              content: [
                /* — Párrafo 1 — */
                {
                  type: "paragraph",
                  text: "Cuando Ausubel acuñó el término aprendizaje significativo subrayó que la nueva información solo adquiere pleno sentido si logra anclarse en los conocimientos previos del estudiante. Desde la visión constructivista, esta ‘ancla cognitiva’ no es un depósito inerte sino una trama de conceptos, experiencias, emociones y valores que se activan ante cada reto intelectual. El docente debe, por tanto, mapear ese repertorio inicial —lo que el alumno sabe, cree o practica— y generar puentes conceptuales entre lo conocido y lo desconocido. Dichos puentes se construyen con organizadores previos, analogías, preguntas generadoras y problemas auténticos que revelan la pertinencia de las nuevas ideas. Cuando la conexión es sólida, la información deja de ser aislada y se integra como un nodo más de la red semántica; el recuerdo se vuelve durable y funcional, preparado para transferirse a situaciones novedosas.",
                },

                /* — Párrafo 2 — */
                {
                  type: "paragraph",
                  text: "El andamiaje desempeña aquí un papel crítico. Bruner lo definió como el conjunto de apoyos temporales que permite realizar una tarea inicialmente fuera del alcance autónomo del aprendiz: pistas, modelado de estrategias, ejemplos resueltos, retroalimentación correctiva… En clave constructivista, el andamiaje opera como facilitador del desequilibrio óptimo: la actividad es lo suficientemente desafiante para movilizar esquemas pero no tan difícil que provoque frustración. Este delicado balance se revisa continuamente a través de la evaluación formativa —ruedas de preguntas, diarios de clase, auto-registros— que revelan qué tanto han evolucionado los significados y qué apoyos deben retirarse o reforzarse.",
                },

                /* — Acordeón 1 — */
                {
                  type: "accordion",
                  header: "Claves para promover aprendizaje significativo",
                  open: false,
                  text:
                    "- Activar saberes previos de forma explícita.\n" +
                    "- Proveer organizadores previos y analogías ricas.\n" +
                    "- Diseñar problemas anclados en la vida real.\n" +
                    "- Revisar y ajustar el andamiaje durante la tarea.",
                },

                /* — Párrafo 3 — */
                {
                  type: "paragraph",
                  text: "Otro componente esencial es la afectividad. Las neurociencias muestran que el sistema límbico modula la consolidación de la memoria declarativa: la información cargada de valor emocional, ya sea por interés, sorpresa o relevancia personal, se fija con mayor intensidad. Por ello, el aprendizaje significativo no es solo cognición; implica generar experiencias emocionalmente resonantes que vinculen la novedad con la identidad del estudiante. Proyectos de servicio comunitario, experimentos ligados a problemas locales o narrativas que conectan el contenido con dilemas morales reales potencian la pregnancia afectiva y, en consecuencia, la permanencia del aprendizaje.",
                },

                /* — Acordeón 2 — */
                {
                  type: "accordion",
                  header: "Indicadores de significado en la práctica",
                  open: false,
                  text:
                    "- Uso espontáneo del concepto en contextos nuevos.\n" +
                    "- Capacidad de explicar con metáforas propias.\n" +
                    "- Expresión de emociones positivas hacia la tarea.\n" +
                    "- Elaboración de preguntas cada vez más profundas.",
                },

                /* — Párrafo 4 — */
                {
                  type: "paragraph",
                  text: "Finalmente, el aprendizaje significativo se valida cuando el alumno puede transferir su comprensión a dominios diferentes y comunicarla en diversos lenguajes: verbal, gráfico, matemático o corporal. El docente diseñador de experiencias constructivistas propone productos multiformato —infografías, podcasts, modelados 3D, simulaciones— que obligan al estudiante a re-configurar la idea central y comprobar su solidez. Así, la clase deja de ser un recorrido lineal de exposición-práctica-examen y se transforma en un ciclo de indagación, creación, reflexión y socialización de resultados.",
                },

                /* — Imagen — */
                {
                  type: "image",
                  src: "https://corporate-assets.lucid.co/co/99d632a3-bbac-4dba-bed0-cbd8d83da714.png?v=1745517280632",
                  alt: "Estudiantes creando mapas conceptuales colaborativos",
                  caption:
                    "Los mapas conceptuales ayudan a anclar nuevos significados en redes previas.",
                  maxWidth: "860px",
                },
              ],
            },

            /* ---------- 1.2.4 ---------- */
            {
              id: "1.2.4",
              numbering: "1.2.4",
              title:
                "La función mediadora del docente y la interacción educativa",
              content: [
                /* — Párrafo 1 — */
                {
                  type: "paragraph",
                  text: "En el constructivismo, el docente es un mediador estratégico que gestiona la Zona de Desarrollo Próximo (ZDP) de cada estudiante. Su misión consiste en diagnosticar cómo el alumno enfrenta una tarea sin ayuda y diseñar intervenciones que amplíen gradualmente ese perímetro de autonomía. La mediación se ejerce mediante preguntas socráticas, andamios, demostraciones, contra-ejemplos y retroalimentación dialogada. No se trata de simplificar el reto, sino de ofrecer ‘muletas cognitivas’ que permitan recorrer el camino hasta la comprensión independiente. A la par, el docente coordina la interacción educativa: organiza roles, tiempos y recursos para que la cooperación entre pares se transforme en co-construcción de conocimiento, evitando la división mecánica de tareas que empobrece el pensamiento compartido.",
                },

                /* — Párrafo 2 — */
                {
                  type: "paragraph",
                  text: "La interacción social es más rica cuando existe un clima de confianza intelectual. El mediador fomenta la ‘seguridad psicológica’ al modelar la aceptación del error como parte inherente al aprendizaje y al establecer normas claras de escucha activa, argumentación basada en evidencias y crítica constructiva. Las estructuras cooperativas —puzzle de Aronson, brainstorming estructurado, debate académico, rúbricas de retroalimentación entre pares— amplifican las oportunidades de explicar, contrastar y refinar ideas. Cada explicación que un estudiante ofrece reconfigura su propio esquema conceptual; cada pregunta que formula revela vacíos que guían nuevas búsquedas. La clase se convierte así en un laboratorio de metacognición distribuida.",
                },

                /* — Acordeón 1 — */
                {
                  type: "accordion",
                  header: "Herramientas de mediación efectivas",
                  open: false,
                  text:
                    "- Preguntas de alta demanda cognitiva.\n" +
                    "- Modelado de pensamiento en voz alta.\n" +
                    "- Retroalimentación descriptiva (no solo calificativa).\n" +
                    "- Contrastes entre ejemplos y no-ejemplos.",
                },

                /* — Párrafo 3 — */
                {
                  type: "paragraph",
                  text: "La mediación contemporánea incorpora recursos digitales: pizarras colaborativas, foros asincrónicos, simuladores y aprendizaje invertido (flipped classroom). Estas herramientas permiten expandir la ZDP más allá del aula física y diversificar las modalidades de interacción. Por ejemplo, los foros asincrónicos permiten reflexiones más elaboradas, mientras los simuladores ofrecen retroalimentación inmediata que el docente puede capitalizar en discusiones presenciales. El reto es evitar la tecnofilia acrítica: cada herramienta debe alinearse con el objetivo cognitivo y permitir la visibilización del proceso mental para intervenir con pertinencia.",
                },

                /* — Acordeón 2 — */
                {
                  type: "accordion",
                  header: "Indicadores de mediación exitosa",
                  open: false,
                  text:
                    "- Preguntas de los alumnos que profundizan el tema.\n" +
                    "- Aplicación autónoma de la estrategia modelada.\n" +
                    "- Transferencia de la comprensión a nuevos contextos.\n" +
                    "- Auto-evaluaciones que reconocen avances y retos.",
                },

                /* — Párrafo 4 — */
                {
                  type: "paragraph",
                  text: "En conclusión, el docente mediador reconoce la diversidad de trayectorias de aprendizaje y diseña experiencias flexibles que responden a las necesidades individuales y colectivas. Su rol no es el de ‘entregar’ conocimiento, sino el de provocar, guiar y legitimar la construcción conjunta de saberes. Esta función demanda competencias profesionales complejas: conocimiento profundo de la disciplina, sensibilidad pedagógica para leer los procesos de los estudiantes y habilidades socioemocionales para sostener un clima de aula inclusivo y desafiante. Al ejercerse con coherencia, la mediación potencia la autonomía, la motivación intrínseca y la capacidad de aprender a aprender.",
                },

                /* — Imagen — */
                {
                  type: "image",
                  src: "https://www.researchgate.net/publication/330400327/figure/fig1/AS:715386299355141@1547572793543/Figura-1-Distintos-tipos-de-interacciones-como-herramientas-de-mediacion-Fuente.ppm",
                  alt: "Docente orientando discusión en grupo cooperativo",
                  caption:
                    "La mediación docente articula la interacción y la reflexión.",
                  maxWidth: "860px",
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
          href: "https://www.youtube.com/watch?v=ldhpS8R5ods", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "PERFILES PROFESIONALES, CRITERIOS E INDICADORES PARA DOCENTES (Ciclo escolar 2021-2022). http://creson.edu.mx/docs/Perfiles_profesionales_Criterios_e_Indicadores_para_Docentes_Ciclo_Escolar_2021-2022.pdf",
            "Aprendizajes clave para la educación integral. Plan y Programa 2017. https://www.sep.gob.mx/work/models/sep1/Resource/10933/1/images/Aprendizajes_clave_para_la_educacion_integral.pdf",
            "Principios y orientación pedagógica de la Nueva Escuela Mexicana. https://dfa.edomex.gob.mx/sites/dfa.edomex.gob.mx/files/files/NEM%20principios%20y%20orientacio%C3%ADn%20pedago%C3%ADgica.pdf",
            "Actividad interactiva: crucigrama sobre paradigmas educativos (Educaplay). https://es.educaplay.com/recursos-educativos/9901529-maestria.html",
            "Video: «Paradigma Constructivista» (YouTube). https://www.youtube.com/watch?v=0_kQqKz_DYQ",
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
            "Díaz Barriga, F. & Hernández Rojas, G. (2010). *Estrategias docentes para un aprendizaje significativo: Una interpretación constructivista.* México: McGraw-Hill.",
            "Schunk, D. H. (2012). *Teorías del aprendizaje. Una perspectiva educativa.* México: Pearson.",
            "Secretaría de Educación Pública (SEP). (2022). *Plan de Estudios para Educación Preescolar, Primaria y Secundaria.* México: SEP.",
            "Carrera, B. (2001). «Vygotsky: Enfoque sociocultural». *Educere.* Recuperado de https://www.redalyc.org/pdf/356/35601309.pdf",
            "Orrú, S. (2012). «Bases conceptuales del enfoque histórico-cultural». *Estudios Pedagógicos.* Recuperado de https://www.redalyc.org/pdf/1735/173524998020.pdf",
            "Secretaría de Educación Pública (SEP). (2017). *Aprendizajes Clave para la Educación Integral.* Recuperado de https://www.planyprogramasdestudio.sep.gob.mx/descargables/APRENDIZAJES_CLAVE_PARA_LA_EDUCACION_INTEGRAL.pdf",
            "Secretaría de Educación Pública (SEP). (2020). *Perfiles profesionales, criterios e indicadores para docentes. Ciclo Escolar 2021-2022.* Recuperado de http://creson.edu.mx/docs/Perfiles_profesionales_Criterios_e_Indicadores_para_Docentes_Ciclo_Escolar_2021-2022.pdf",
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
