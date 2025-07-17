/* ———————————————————————————————————————————————————————————————
   Doctorado en Educación · Asignatura: Diseño y Evaluación Curricular
   MÓDULO 1 · Nociones Generales
   ——————————————————————————————————————————————————————————————— */
export default {
  /* ─── Metadatos ─────────────────────────────────────────── */
  programId: "doctorado-educacion",
  courseId: "dec", // abreviatura de la asignatura
  id: "modulo1",

  courseName: "Diseño y Evaluación Curricular",
  title: "Módulo 1. Nociones Generales",
  semestre: "Tercer Semestre",
  teacher: "Dr. Jesús Agustín Zapata Velázquez",

  /* ─── Objetivo general ─────────────────────────────────── */
  objective:
    "Desarrollar en los Doctorantes una comprensión integral y crítica de los " +
    "conceptos fundamentales de diseño y evaluación curricular, permitiéndoles " +
    "identificar y analizar las definiciones, los procesos involucrados y los " +
    "diferentes tipos de evaluación del currículo, con el fin de aplicar estos " +
    "conocimientos en la mejora de proyectos curriculares.",

  /* ─── Competencias ─────────────────────────────────────── */
  competencies: [
    "Definir y explicar con precisión los conceptos de diseño y evaluación curricular.",
    "Identificar y diferenciar los procesos involucrados en el diseño y la evaluación curricular.",
    "Comparar y contrastar los tipos de evaluación (interna y externa) valorando su impacto.",
    "Aplicar los conceptos de diseño y evaluación curricular en casos prácticos.",
  ],

  /* ─── Contenido temático ───────────────────────────────── */
  themes: [
    /* Información general (pantalla inicial del módulo) */
    {
      id: "1.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [],
    },

    /* Unidad / Nodo principal ------------------------------------------ */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Nociones generales",
      content: [
        {
          type: "paragraph",
          text:
            "En el ámbito educativo, el currículo es mucho más que un listado " +
            "de contenidos: constituye el marco estructurado que orienta todo el " +
            "proceso de enseñanza‑aprendizaje. De su diseño y posterior evaluación " +
            "depende la coherencia, pertinencia y eficacia de las experiencias " +
            "formativas que viven los estudiantes.",
        },
        {
          type: "paragraph",
          text:
            "Diseñar el currículo implica planificar, organizar y secuenciar " +
            "objetivos, contenidos, métodos y recursos atendiendo a las " +
            "características del contexto y de la población. Este proceso, lejos " +
            "de ser estático, es dinámico: debe adaptarse a los cambios sociales, " +
            "culturales y tecnológicos que atraviesan la educación.",
        },
        {
          type: "paragraph",
          text:
            "La evaluación curricular, por su parte, valora la pertinencia y " +
            "eficacia del diseño implementado. Involucra la recolección y el " +
            "análisis sistemático de evidencias —cuantitativas y cualitativas— " +
            "para emitir juicios y, sobre todo, para retroalimentar la toma de " +
            "decisiones en pro de la mejora continua.",
        },
        {
          type: "paragraph",
          text:
            "Ambos procesos están estrechamente vinculados en un ciclo permanente " +
            "de diseño‑implementación‑evaluación‑rediseño. Así, la calidad del " +
            "currículo depende de la solidez con que se integren las fases de " +
            "planificación, desarrollo y valoración.",
        },
        {
          type: "paragraph",
          text:
            "Durante esta unidad se revisarán las definiciones básicas, los " +
            "procesos y los distintos tipos de evaluación (interna y externa). " +
            "El objetivo es que el doctorando disponga de referentes conceptuales " +
            "claros antes de adentrarse en estudios más profundos o en la " +
            "construcción de proyectos curriculares propios.",
        },

        /* Acordeón síntesis de la unidad -------------------- */
        {
          type: "accordion",
          header: "Resumen de la unidad",
          open: true,
          text:
            "* **1.1 Definición de diseño y evaluación curricular**  \n" +
            "* **1.2 En qué consiste el diseño y la evaluación curricular**  \n" +
            "* **1.3 Tipos de evaluación del currículum**  \n" +
            "  * 1.3.1 Evaluación interna  \n" +
            "  * 1.3.2 Evaluación externa",
        },
      ],

      /* Subtemas vacíos para rellenar */
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "Definición de diseño y evaluación curricular",
          content: [
            /* ─── 5 párrafos introductorios ───────────────────────── */
            {
              type: "paragraph",
              text:
                "El **diseño curricular** se entiende como el proceso sistemático y " +
                "reflexivo mediante el cual se planifican y articulan los objetivos, " +
                "contenidos, métodos, recursos y evaluaciones de un programa de " +
                "estudios. Su finalidad es garantizar la coherencia entre las " +
                "necesidades sociales, las expectativas institucionales y los " +
                "aprendizajes que se espera alcancen los estudiantes.",
            },
            {
              type: "paragraph",
              text:
                "Por su parte, la **evaluación curricular** consiste en la recogida y " +
                "análisis de información rigurosa acerca del diseño y la aplicación " +
                "del currículo, con el propósito de juzgar su pertinencia y mejorar " +
                "continuamente su calidad. Incluye la valoración de resultados de " +
                "aprendizaje, la adecuación de los materiales y la efectividad de las " +
                "estrategias didácticas.",
            },
            {
              type: "paragraph",
              text:
                "Ambos procesos se retroalimentan: la evaluación ofrece evidencias " +
                "objetivas que permiten rediseñar el currículo y ajustar los " +
                "componentes que no responden a las metas formativas o a los cambios " +
                "del contexto.",
            },
            {
              type: "image",
              src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60",
              alt: "Docente planificando un currículo",
              caption: "Planificación del currículo",
            },
            {
              type: "paragraph",
              text:
                "El diseño parte de preguntas clave: ¿qué deben aprender los " +
                "estudiantes?, ¿por qué es importante?, ¿cómo se enseñará y con qué " +
                "recursos?, ¿cómo sabremos que han aprendido?  La evaluación responde " +
                "a interrogantes complementarias: ¿se lograron los objetivos?, " +
                "¿fueron adecuados los métodos?, ¿qué aspectos requieren mejora?",
            },
            {
              type: "paragraph",
              text:
                "Comprender la definición y el alcance de estos conceptos resulta " +
                "fundamental para el profesional de la educación que aspira a " +
                "transformar la práctica docente y la gestión curricular desde una " +
                "perspectiva crítica y basada en evidencia.",
            },

            /* ─── Acordeón ─────────────────────────────────────── */
            {
              type: "accordion",
              style: "toggle",
              items: [
                {
                  id: "puntos",
                  heading: "Puntos clave",
                  content: [
                    {
                      type: "list",
                      style: "unordered",
                      items: [
                        "**Diseño** → planificación sistemática del currículo.",
                        "**Evaluación** → valoración del currículo para mejorarlo.",
                        "Se retroalimentan en un ciclo continuo de mejora.",
                        "Responden al *qué, por qué, cómo* y *para qué* enseñar.",
                      ],
                    },
                  ],
                },
              ],
            },
            /* ─── Imágenes ─────────────────────────────────────── */
            {
              type: "image",
              src: "https://observatorio.tec.mx/wp-content/uploads/2023/01/Evaluacionparaunamejorensenanza.losmaestrostambiennecesitanayuda.jpg",
              alt: "Equipo docente analizando resultados",
              caption: "Evaluación de resultados",
            },

            /* ─── Vídeo ────────────────────────────────────────── */
            {
              type: "video",
              src: "https://www.youtube.com/embed/xb7bkl92Nbs",
              title: "Diseño y evaluación curricular: conceptos básicos",
              caption: "Fuente: Canal Educación 360 (10 min)",
            },
          ],
        },
        /* ---------- 1.2 En qué consiste el diseño y la evaluación curricular ---------- */
        {
          id: "1.2",
          numbering: "1.2",
          title: "En qué consiste el diseño y la evaluación curricular",
          content: [
            /* ─── 4 párrafos (~100 palabras c/u) ──────────────────────────────── */
            {
              type: "paragraph",
              text: "El diseño curricular es el proceso sistemático de seleccionar, organizar y secuenciar \
los aprendizajes que una institución considera valiosos. Supone partir de un diagnóstico de \
necesidades sociales y profesionales, traducirlo en perfiles de egreso y, finalmente, definir \
competencias, contenidos y experiencias que permitan alcanzarlos. No se trata solo de “qué \
enseñar”, sino de justificar por qué y para quién, proyectando resultados de formación coherentes \
con la misión de la escuela y las tendencias del campo disciplinar.",
            },
            {
              type: "paragraph",
              text: "La evaluación curricular, por su parte, verifica el grado en que ese diseño se implementa \
y produce los efectos previstos. Abarca la evaluación del **contexto** (pertinencia), de la \
**entrada** (recursos), del **proceso** (prácticas de aula) y del **producto** (logros de aprendizaje \
y satisfacción de los actores). Así, diseño y evaluación conforman un ciclo iterativo: se diseña, \
se implementa, se recoge evidencia y se realimenta el plan para mejorarlo continuamente.",
            },
            {
              type: "paragraph",
              text: "En la práctica, diseñar y evaluar requieren tomar decisiones sobre la secuencia de \
contenidos, la integración interdisciplinar, la elección de metodologías activas y la \
coherencia entre prácticas de evaluación y objetivos. Las preguntas clave son: ¿responde el \
currículum a los retos actuales?, ¿favorece la equidad?, ¿desarrolla pensamiento crítico y \
creatividad?, ¿se apoya en evidencias pedagógicas sólidas? Responderlas implica trabajo \
colaborativo entre docentes, directivos, estudiantes y expertos externos.",
            },
            {
              type: "paragraph",
              text: "Un currículum de calidad no es estático: necesita revisiones periódicas que incorporen \
nuevas políticas, hallazgos de la investigación y cambios socio‑culturales. La evaluación \
curricular proporciona datos —cuantitativos y cualitativos— que orientan estas revisiones. De \
este modo, la mejora deja de ser un acto esporádico y se convierte en una cultura institucional \
basada en la reflexión y en la toma de decisiones informadas.",
            },

            /* ─── Imagen de apoyo ─────────────────────────────────────────────── */
            {
              type: "image",
              src: "https://www.mejoredu.gob.mx/images/blog/el_cambio/colaboracion-1.jpg",
              alt: "Equipo docente analizando la estructura de un plan de estudios en un panel visual",
              caption:
                "Figura 1. Trabajo colaborativo para la revisión curricular.",
            },

            /* ─── Acordeón con puntos clave (primera pestaña abierta) ────────── */
            {
              type: "accordion",
              header: "Puntos clave",
              open: true, // se despliega por defecto
              text:
                "* **Ciclo continuo**: diagnóstico → diseño → implementación → evaluación → rediseño.\n" +
                "* **Coherencia interna**: objetivos ↔ contenidos ↔ metodologías ↔ evaluación.\n" +
                "* **Participación colegiada**: equipos inter‑y trans‑disciplinarios para decidir y valorar.\n" +
                "* **Evidencias diversas**: indicadores cuantitativos (notas, encuestas) y cualitativos (portafolios, entrevistas).\n" +
                "* **Equidad y pertinencia**: el currículum ha de adaptarse a la diversidad y responder a contextos cambiantes.",
            },
          ],
        },
        /* ----------------------------------------------------------------------------- */
        {
          id: "1.3",
          numbering: "1.3",
          title: "Tipos de evaluación del currículum",
          content: [
            /* ─── Introducción (5 párrafos) ─────────────────────── */
            {
              type: "paragraph",
              text: "La evaluación curricular es un proceso multifacético que permite valorar la pertinencia, la coherencia y el impacto real de un programa de estudios. Tradicionalmente se distingue entre una mirada interna —realizada por los propios actores institucionales— y una externa —encargada a especialistas ajenos a la organización. Ambas perspectivas son complementarias y, juntas, ofrecen un diagnóstico más completo sobre la calidad del currículo.",
            },
            {
              type: "paragraph",
              text: "La evaluación interna se caracteriza por su alto nivel de contextualización. Docentes, coordinadores y estudiantes revisan continuamente la congruencia entre objetivos, contenidos, estrategias didácticas y resultados de aprendizaje. Esta auto‐observación facilita ajustes rápidos y pertinentes, dado que quienes evalúan conocen de primera mano las particularidades del entorno educativo.",
            },
            {
              type: "image",
              src: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
              alt: "Docentes revisando evidencias de aprendizaje durante una sesión de evaluación interna.",
            },
            {
              type: "paragraph",
              text: "En contraste, la evaluación externa demanda la intervención de agentes que no participan en el proceso de enseñanza‑aprendizaje cotidiano. Su valor radica en aportar objetividad y garantizar la rendición de cuentas ante criterios o estándares oficiales (regionales, nacionales o internacionales). Al comparar los hallazgos de ambas evaluaciones, una institución puede identificar sesgos internos y validar sus propios logros frente a referentes más amplios.",
            },
            {
              type: "paragraph",
              text: "Una buena práctica consiste en articular ambas aproximaciones dentro de un ciclo de mejora continua: los hallazgos de la evaluación externa alimentan procesos internos de reflexión; a su vez, los resultados de la evaluación interna brindan insumos concretos para la siguiente visita o auditoría externa. De esta forma, “diagnóstico–retroalimentación–ajuste” se convierten en un circuito permanente orientado a la excelencia académica.",
            },

            {
              type: "paragraph",
              text: "Más allá del tipo de evaluación, los especialistas coinciden en que el foco debe centrarse tanto en los productos (aprendizajes alcanzados) como en los procesos (estrategias y condiciones que los posibilitan). Un currículo de calidad es aquel que demuestra evidencias de mejora sostenida gracias a un sistema de evaluación riguroso, participativo y transparente.",
            },

            /* ─── Video complementario ─────────────────────────── */
            {
              type: "video",
              src: "https://www.youtube.com/embed/xD0iVnUHCik", // “Evaluación Curricular Interna y Externa – Nitzia Tavarez”
              caption:
                "Evaluación curricular interna y externa (Tavarez, 2023).",
            },

            /* ─── Acordeón de reflexión ────────────────────────── */
            {
              type: "accordion",
              header: "Preguntas para la reflexión",
              style: "toggle", // opcional, si quieres que se comporten como toggle
              open: false, // todos cerrados por defecto
              items: [
                {
                  id: "why-evaluate",
                  heading: "¿Por qué evaluar el currículo?",
                  text:
                    "La evaluación permite verificar la pertinencia del diseño, " +
                    "detectar áreas de mejora y sustentar decisiones basadas en evidencia. " +
                    "Sin un sistema de evaluación riguroso, el currículo corre el riesgo " +
                    "de volverse obsoleto o incoherente con las necesidades del contexto.",
                },
                {
                  id: "internal-eval",
                  heading: "¿Qué caracteriza a la evaluación interna?",
                  text:
                    "Está a cargo de los actores de la propia institución. Su énfasis es **formativo**: " +
                    "identificar fortalezas y debilidades para introducir ajustes inmediatos. " +
                    "Aporta conocimiento contextual profundo, aunque puede sesgarse por la cercanía de los evaluadores.",
                },
                {
                  id: "external-eval",
                  heading: "¿Qué caracteriza a la evaluación externa?",
                  text:
                    "La realizan especialistas ajenos a la organización. Aporta **objetividad** y " +
                    "comparabilidad con estándares nacionales o internacionales. Completa la mirada interna " +
                    "y promueve la rendición de cuentas ante la sociedad.",
                },
              ],
            },
          ], // ← ← ←  <‑‑ necesario aunque quede vacío
          subthemes: [
            {
              id: "1.3.1",
              numbering: "1.3.1",
              title: "Evaluación interna",
              content: [
                /* ─────────── Párrafo 1 ─────────── */
                {
                  type: "paragraph",
                  text:
                    "La **evaluación interna** es el proceso sistemático que realizan los propios agentes que diseñan, gestionan o imparten un currículo para conocer su pertinencia y efectividad. " +
                    "Implica la revisión de los propósitos, los contenidos, la organización didáctica y los resultados que se obtienen en la práctica, de tal manera que la comunidad educativa adquiera información " +
                    "fiable para la mejora continua. En contextos de educación superior —y muy especialmente en programas de posgrado— cobra relevancia porque permite al equipo académico ajustar oportunamente " +
                    "las experiencias de aprendizaje y los criterios de calidad sin depender exclusivamente de evaluaciones externas periódicas.",
                },

                /* ─────────── Párrafo 2 ─────────── */
                {
                  type: "paragraph",
                  text:
                    "Un rasgo distintivo de la evaluación interna es su **enfoque formativo**: no busca emitir juicios finales sino generar evidencia que retroalimente la toma de decisiones. " +
                    "Por ello se apoya en técnicas de recogida de datos cualitativos y cuantitativos, tales como encuestas a estudiantes, análisis de portafolios, reuniones de claustro y rúbricas de desempeño. " +
                    "Estos datos se triangulan para comprender cómo se alinean los objetivos, las estrategias didácticas y los aprendizajes reales alcanzados.",
                },

                /* ─── Imagen 1 ─── */
                {
                  type: "image",
                  src: "https://images.pexels.com/photos/3182772/pexels-photo-3182772.jpeg?auto=compress&cs=tinysrgb&w=840",
                  alt: "Ejemplo de matriz de evaluación interna",
                  caption:
                    "Figura 1. Matriz diagnóstica utilizada para valorar la coherencia entre competencias, actividades y evidencias.",
                },

                /* ─────────── Párrafo 3 ─────────── */
                {
                  type: "paragraph",
                  text:
                    "Siguiendo a **Scriven (1991)**, la evaluación interna puede dividirse en fases diagnóstica, formativa y sumativa. En la primera, se recaba información sobre necesidades y contexto; " +
                    "en la segunda, se monitorea el desarrollo del currículo y se introducen ajustes; y en la tercera, se valoran los logros al concluir un ciclo lectivo. " +
                    "El carácter cíclico de estas fases refuerza la cultura de mejora y evita que la evaluación sea un acto aislado o impositivo.",
                },

                /* ─── Video ─── */
                {
                  type: "video",
                  src: "https://www.youtube.com/embed/GfuqashgdHo",
                  title: "Evaluación interna de programas educativos",
                },

                /* ─────────── Párrafo 4 ─────────── */
                {
                  type: "paragraph",
                  text:
                    "Para garantizar la validez de los hallazgos, es indispensable que el equipo defina **criterios e indicadores** transparentes —alineados con estándares nacionales e internacionales— " +
                    "y que documente claramente los procedimientos. Asimismo, la participación de estudiantes y egresados aporta una visión holística sobre la experiencia curricular y sus resultados en el mundo " +
                    "laboral. De este modo, la evaluación interna se convierte en un **instrumento de gestión académica** que fortalece la pertinencia social del currículo y fomenta la innovación pedagógica.",
                },

                /* ─── Imagen 2 ─── */
                {
                  type: "image",
                  src: "https://safetyculture.com/_next/image/?url=https%3A%2F%2Fwp-website.safetyculture.com%2Fwp-content%2Fuploads%2Fsites%2F3%2F2023%2F12%2FEl-ciclo-PDCA.png&w=1200&q=75",
                  alt: "Ciclo de mejora continua",
                  caption:
                    "Figura 2. Ciclo PDCA aplicado a la evaluación interna del currículo.",
                },
              ],
            },
            {
              id: "1.3.2",
              numbering: "1.3.2",
              title: "Evaluación externa",
              content: [
                /* ─────────── Párrafo 1 ─────────── */
                {
                  type: "paragraph",
                  text:
                    "La **evaluación externa** es el proceso mediante el cual una institución educativa invita a agentes " +
                    "independientes —organismos acreditadores, consultores especializados o pares académicos de otras " +
                    "universidades— a emitir un juicio sobre la calidad y pertinencia de su currículo. A diferencia de la " +
                    "evaluación interna, su principal valor radica en la objetividad: los evaluadores aplican estándares " +
                    "regionales, nacionales o internacionales que permiten comparar el programa con referentes amplios. " +
                    "Al hacerlo, aportan evidencia creíble frente a la comunidad y a los entes reguladores, fortaleciendo " +
                    "la transparencia y la rendición de cuentas. Además, revelan buenas prácticas que pueden transferirse " +
                    "a otras áreas y señalan carencias que el equipo interno quizá no percibe por familiaridad o hábito.",
                },

                /* ─────────── Párrafo 2 ─────────── */
                {
                  type: "paragraph",
                  text:
                    "El procedimiento de una evaluación externa suele incluir tres fases: **revisión documental**, " +
                    "**visita in situ** y **emisión de informe**. En la primera, los pares analizan planes de estudio, " +
                    "sílabos, evidencias de aprendizaje y métricas de desempeño. En la visita observan clases, entrevistan " +
                    "a docentes, estudiantes y empleadores, y verifican la infraestructura y los servicios de apoyo. Por " +
                    "último, redactan un informe que destaca fortalezas, formula recomendaciones y otorga, en su caso, " +
                    "una acreditación o certificación con vigencia limitada. Este ciclo obliga a la institución a sostener " +
                    "un proceso de mejora continua para conservar el reconocimiento obtenido.",
                },

                /* ─────────── Imagen ─────────── */
                {
                  type: "image",
                  src: "https://www.unir.net/wp-content/uploads/2019/08/secun.jpg",
                  alt: "Equipo de evaluadores externos revisando evidencias académicas",
                  caption:
                    "Figura 1. Comité externo analizando informes y portafolios estudiantiles.",
                },

                /* ─────────── Párrafo 3 ─────────── */
                {
                  type: "paragraph",
                  text:
                    "Entre los **principios** que guían la evaluación externa destacan la validez, la fiabilidad y la " +
                    "equidad. La **validez** exige que los criterios de evaluación midan realmente la calidad del currículo " +
                    "y no aspectos periféricos. La **fiabilidad** se refiere a la consistencia de los resultados cuando " +
                    "diferentes evaluadores aplican los mismos estándares. Por último, la **equidad** implica considerar " +
                    "las particularidades sociales y culturales del contexto educativo para evitar juicios sesgados. " +
                    "Cumplir estos principios demanda protocolos claros, formadores de pares y la triangulación de datos " +
                    "(cuantitativos y cualitativos) a lo largo del proceso.",
                },

                /* ─────────── Acordeón 1 ─────────── */
                {
                  type: "accordion",
                  header: "Ventajas de la evaluación externa",
                  open: false,
                  items: [
                    {
                      heading: "Objetividad y credibilidad",
                      text: "Al provenir de evaluadores ajenos a la institución, los hallazgos tienen mayor peso para la comunidad y los stakeholders.",
                    },
                    {
                      heading: "Comparabilidad con estándares",
                      text: "Permite contrastar el programa con referentes nacionales o internacionales y detectar brechas de calidad.",
                    },
                    {
                      heading: "Reconocimiento y posicionamiento",
                      text: "Una acreditación externa fortalece la reputación institucional y facilita la movilidad académica de estudiantes y docentes.",
                    },
                  ],
                },

                /* ─────────── Párrafo 4 ─────────── */
                {
                  type: "paragraph",
                  text:
                    "A pesar de sus beneficios, la evaluación externa también presenta **desafíos**. El primero es el coste " +
                    "económico y logístico asociado a las visitas y al levantamiento de evidencias. El segundo es la " +
                    "resistencia que puede generar en la comunidad académica, sobre todo si se percibe como un control " +
                    "impositivo. Finalmente, la estandarización de criterios corre el riesgo de desatender la singularidad " +
                    "de los contextos locales. Superar estos retos pasa por una comunicación transparente, la preparación " +
                    "anticipada de los equipos internos y la negociación de criterios que incorporen la diversidad cultural.",
                },

                /* ─────────── Video ─────────── */
                {
                  type: "video",
                  src: "https://www.youtube.com/embed/SiyhdkfOn-M",
                  title: "Evaluación curricular externa – Conceptos clave",
                },

                /* ─────────── Párrafo 5 ─────────── */
                {
                  type: "paragraph",
                  text:
                    "En síntesis, la evaluación externa complementa a la interna al ofrecer una mirada imparcial y basada " +
                    "en estándares de amplio alcance. Integrar sus recomendaciones al plan de mejora institucional " +
                    "favorece la actualización del currículo, la innovación pedagógica y la alineación con las exigencias " +
                    "del mercado laboral. Cuando ambas evaluaciones convergen en un sistema articulado, el resultado es " +
                    "un currículo dinámico, pertinente y con garantía pública de calidad.",
                },

                /* ─────────── Acordeón 2 ─────────── */
                {
                  type: "accordion",
                  header: "Buenas prácticas para preparar una visita externa",
                  open: false,
                  items: [
                    {
                      heading: "Compilar evidencias claras",
                      text: "Mantén actualizado un repositorio digital con sílabos, rúbricas, portafolios y resultados de aprendizaje.",
                    },
                    {
                      heading: "Sensibilizar a la comunidad",
                      text: "Realiza sesiones informativas con docentes, estudiantes y administrativos sobre objetivos y beneficios de la evaluación.",
                    },
                    {
                      heading: "Asignar un equipo coordinador",
                      text: "Designa responsables por área para gestionar logística, documentación y acompañamiento a los pares evaluadores.",
                    },
                  ],
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
            "¿Qué es el diseño curricular? ✔ [Concepto, Autores y Antecedentes] https://www.youtube.com/watch?v=ldhpS8R5ods",
            "Diseño Curricular QUÉ ES y CÓMO se HACE EJEMPLOS https://www.youtube.com/watch?v=3IOkwLKyHNE",
            "Evaluación Curricular Interna Y Externa || Nitzia Tavarez || https://www.youtube.com/watch?v=OR6YlkxNtps",
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
            "Coll, C. & Solé, I. (2020). *Currículum y evaluación en la educación obligatoria: Desafíos y perspectivas.* Barcelona: Editorial Graó.",
            "Perrenoud, P. (2019). *La evaluación de los alumnos: De la producción de la excelencia a la regulación de los aprendizajes.* Madrid: Editorial Morata.",
            "De Alba Ceballos, A. (2018). *Teoría curricular: Nuevas tendencias y perspectivas.* Ciudad de México: Siglo XXI Editores.",
            "Díaz Barriga, A. (2018). *Metodología de diseño curricular: Un enfoque centrado en competencias.* Ciudad de México: Editorial Trillas.",
            "Gimeno Sacristán, J. (2017). *El currículum: Una reflexión sobre la práctica.* Madrid: Ediciones Morata.",
            "Zabalza, M. Á. (2019). *Diseño y desarrollo curricular: Cómo planificar e implementar el currículo en la educación superior.* Madrid: Narcea Ediciones.",
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
