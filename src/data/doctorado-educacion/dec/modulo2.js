/* — PLANTILLA GENÉRICA DE MÓDULO (v2, con sub‑subtemas) — */
const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ─────────────────────────────────────────── */
  programId: "doctorado-educacion", // Programa académico
  courseId: "dec-309", // Diseño y Evaluación Curricular (cód. 309)
  id: "modulo2",

  /* ── Datos visibles ───────────────────────────────────── */
  courseName: "Diseño y Evaluación Curricular",
  title: "Módulo 2. Diseño de un proyecto",
  semestre: "Tercer Semestre",
  teacher: "Dr. Jesús Agustín Zapata Velázquez",

  /* ── Objetivo y competencias ──────────────────────────── */
  objective:
    "Desarrollar en los Doctorantes la capacidad de diseñar un proyecto curricular integral, " +
    "que incluya la identificación de necesidades educativas, la definición de objetivos, la " +
    "selección y organización de contenidos, el diseño de estrategias pedagógicas, y la " +
    "planificación de la evaluación, con el fin de crear propuestas educativas innovadoras y " +
    "adaptadas a contextos específicos.",

  competencies: [
    "Identificar y analizar las necesidades educativas de un contexto específico, utilizando herramientas y metodologías adecuadas para realizar un diagnóstico preciso que sirva como base para el diseño curricular.",
    "Definir objetivos educativos claros y alcanzables, y seleccionar y organizar contenidos de manera lógica y coherente, asegurando que el proyecto curricular esté alineado con las metas educativas propuestas.",
    "Diseñar estrategias pedagógicas innovadoras y adaptativas que promuevan un aprendizaje significativo y contextualizado, respondiendo a las características y necesidades de los estudiantes.",
    "Integrar mecanismos de evaluación dentro del proyecto curricular, diseñando herramientas y procedimientos que permitan medir la efectividad del currículo y realizar ajustes durante su implementación.",
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

    /* 1. Unidad principal */
    {
      id: "2", // corresponde a la Unidad 2 del curso
      numbering: "Unidad 2",
      title: "Diseño de un proyecto",
      content: [
        {
          type: "paragraph",
          text: "Habiendo culminado la Unidad 1, contamos ya con un andamiaje teórico sólido sobre diseño y evaluación curricular. Allí exploramos definiciones, tipos de evaluación y la lógica que articula ambos procesos. Ese bagaje conceptual es la plataforma desde la cual ahora daremos el salto a la acción: el diseño de un proyecto curricular completo. El tránsito no es menor. Pasamos de describir qué es un currículo y cómo se valora su eficacia, a demostrar que podemos convertir conceptos en realidades educativas tangibles. La premisa central de esta unidad es, entonces, comprobar que el conocimiento adquiere sentido solo cuando se aplica de modo contextualizado y pertinente, alineado con las necesidades de docentes, estudiantes y comunidad educativa.",
        },
        {
          type: "paragraph",
          text: "El diseño curricular nunca es un ejercicio estático. Requiere creatividad, análisis crítico y sensibilidad ante los cambios sociales, culturales y tecnológicos. En esta segunda unidad asumimos ese carácter dinámico: aprenderemos a transformar diagnósticos en objetivos, objetivos en contenidos y contenidos en experiencias de aprendizaje significativas. Será necesario manejar simultáneamente la macro‑planificación (alineación con políticas institucionales) y la micro‑planificación (actividades concretas y recursos cotidianos). Esta integración multiescalar asegura que cada decisión —desde la selección de un recurso digital hasta la redacción de una rúbrica— responda a un marco coherente orientado al aprendizaje profundo y a la mejora continua.",
        },
        {
          type: "paragraph",
          text: "El primer reto operativo será diagnosticar con precisión la situación problema. Sin un diagnóstico riguroso, el currículo corre el riesgo de apoyarse en suposiciones o generalizaciones que distorsionen la realidad. De ahí que dediquemos especial atención a caracterizar el contexto socio‑educativo, identificar expectativas de la comunidad y reconocer los recursos disponibles. Esta fase alimenta todo lo demás: permite establecer objetivos viables, seleccionar contenidos pertinentes y, sobre todo, justificar cada estrategia pedagógica con evidencia contextual. Al ejercer este enfoque, evitamos diseñar ‘desde el escritorio’ y aseguramos que la propuesta responda a problemas y oportunidades reales.",
        },
        {
          type: "paragraph",
          text: "Otro eje vertebrador será la evaluación con sentido formativo. Ya no concebimos la evaluación como paso final, sino como proceso cíclico que debe planificarse desde la misma gestación del proyecto. En esta unidad aprenderás a definir indicadores, elegir instrumentos y proyectar momentos de recolección de evidencias que permitan monitorear avances, retroalimentar oportunamente y ajustar el diseño. Este enfoque garantiza que el currículo sea un ‘documento vivo’, capaz de adaptarse conforme cambian las necesidades del estudiantado y las demandas del entorno. Diseñar pensando en la evaluación desde el inicio es, en definitiva, asegurar la sostenibilidad y la pertinencia de la propuesta.",
        },
        {
          type: "paragraph",
          text: "Finalmente, esta transición te invita a reflexionar sobre el equilibrio entre teoría y práctica. Una propuesta curricular sin fundamento teórico puede carecer de dirección, mientras que la teoría sin aplicación efectiva se vuelve estéril. Nuestro desafío es integrar ambos planos para crear un proyecto innovador, adaptable y socialmente relevante. Al concluir la Unidad 2 deberás ser capaz de articular un diseño que transforme necesidades detectadas en aprendizajes significativos y verificables, contribuyendo así a la mejora de tu contexto educativo. Con esta meta clara, te damos la bienvenida al apasionante proceso de concebir y materializar un proyecto curricular que impacte de forma positiva en la realidad educativa.",
        },
        {
          type: "accordion",
          header: "Guía de profundización",
          open: false,
          text:
            "* **Nivel 1 — Ejes conceptuales**  \n" +
            "  * Papel del diagnóstico, objetivos y contenidos.  \n\n" +
            "* **Nivel 2 — Desafíos de implementación**  \n" +
            "  * Gestión de recursos, roles docentes y tiempos.  \n\n" +
            "* **Nivel 3 — Evaluación y mejora continua**  \n" +
            "  * Indicadores, retroalimentación y ajustes iterativos.",
        },
      ],

      /* → Subtemas de primer nivel (2.1 a 2.7) */
      subthemes: [
        {
          id: "2.1",
          numbering: "2.1",
          title: "Diagnóstico de la situación problema",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "Diagnosticar la situación problema constituye el punto de partida de cualquier proyecto curricular. Implica identificar las brechas entre la realidad educativa actual y la visión deseada, así como comprender las causas subyacentes que generan esas discrepancias. Para ello se combinan métodos cuantitativos —estadísticas institucionales, resultados de pruebas estandarizadas— y cualitativos —entrevistas, grupos focales y observaciones de aula—. El propósito no es solo describir carencias, sino contextualizarlas: es distinto abordar bajos niveles de comprensión lectora en un entorno urbano con alta conectividad que en una comunidad rural con acceso limitado a recursos. Este enfoque situacional orienta las decisiones posteriores de diseño y asegura la pertinencia de la propuesta curricular.",
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "Un diagnóstico riguroso debe contemplar cuatro dimensiones interrelacionadas: (1) el perfil y las necesidades de aprendizaje del estudiantado; (2) las prácticas y competencias del profesorado; (3) los recursos materiales y tecnológicos disponibles; y (4) los lineamientos institucionales y normativos que enmarcan la acción educativa. Cada dimensión provee evidencias que, en conjunto, configuran una fotografía integral del contexto. Esta fotografía sirve para priorizar problemas, jerarquizar objetivos y seleccionar estrategias pedagógicas realistas. De nada sirve detectar una necesidad si no se cuenta con la infraestructura, el tiempo o la formación docente para atenderla.",
            },

            /* Imagen 1: Mapa de actores */
            {
              type: "image",
              src: "https://assets.isu.pub/document-structure/240809224719-2c0e14c2eaf6c2aca4c1c6cc7928829a/v1/459f3125d541ee83b4fc5f12dbb1f977.jpeg", // coloca la imagen en la misma carpeta del módulo
              alt: "Mapa de actores y flujos de información",
              caption:
                "Figura 1. Identificación y relaciones de los actores clave en el contexto educativo.",
            },

            /* Párrafo 3 */
            {
              type: "paragraph",
              text: "La triangulación de datos es esencial para elevar la confiabilidad del diagnóstico. Un único instrumento puede reflejar sesgos o limitarse a una perspectiva parcial; en cambio, cruzar encuestas con observaciones de clase y análisis documental permite contrastar resultados y detectar patrones coherentes. Por ejemplo, si las calificaciones bajas coinciden con la percepción docente de falta de motivación y con registros de inasistencia, el problema se configura como una cuestión de compromiso estudiantil más que de falta de contenidos. Esta convergencia de evidencias facilita la formulación de objetivos específicos y acciones focalizadas.",
            },

            /* Acordeón: Pasos del diagnóstico */
            {
              type: "accordion",
              header: "Ruta metodológica del diagnóstico",
              open: false,
              text:
                "* **Paso 1 — Recolección de datos**  \n" +
                "  * Aplicar encuestas, entrevistas y análisis de registros académicos.  \n\n" +
                "* **Paso 2 — Análisis e interpretación**  \n" +
                "  * Triangular la información para identificar tendencias y causas subyacentes.  \n\n" +
                "* **Paso 3 — Socialización y validación**  \n" +
                "  * Presentar hallazgos a la comunidad escolar para corroborar su pertinencia.",
            },

            /* Párrafo 4 */
            {
              type: "paragraph",
              text: "Un aspecto frecuentemente subestimado es la participación de los actores implicados en la fase de diagnóstico. Involucrar a estudiantes, docentes, directivos y familias no solo legitima el proceso, sino que enriquece la comprensión de la problemática. Además, promueve un sentido de corresponsabilidad: quienes contribuyen a identificar las necesidades se comprometen con mayor facilidad en la búsqueda de soluciones. En proyectos con alcance comunitario, la inclusión de representantes locales y organizaciones civiles puede proveer una mirada externa valiosa sobre los desafíos y oportunidades del entorno.",
            },

            /* Imagen 2: Matriz de priorización */
            {
              type: "image",
              src: "https://tecnosoluciones.com/wp-content/uploads/2023/05/matriz-de-eisenhower-o-matriz-de-priorizacion-01.png",
              alt: "Matriz de priorización de necesidades",
              caption:
                "Figura 2. Ejemplo de matriz para ponderar la urgencia y factibilidad de las necesidades detectadas.",
            },

            /* Párrafo 5 */
            {
              type: "paragraph",
              text: "Finalmente, el informe de diagnóstico debe traducir los hallazgos en insumos operativos: problemas priorizados, causas probables y un mapa de recursos disponibles. Este documento se convertirá en la ‘brújula’ para las etapas siguientes del diseño curricular. Al referirnos después a la definición de objetivos, a la selección de contenidos o a la asignación de recursos, tendremos siempre presente qué necesidades pretendemos resolver y con qué limitaciones o fortalezas contamos. De este modo, el proyecto curricular nace anclado a la realidad y con un claro sentido de propósito.",
            },
          ],
        },
        {
          id: "2.2",
          numbering: "2.2",
          title: "Definición de estrategias",
          content: [
            /* Párrafo 1 – Propósito general */
            {
              type: "paragraph",
              text: "Tras el diagnóstico, la definición de estrategias pedagógicas se convierte en la pieza que enlaza las necesidades identificadas con las acciones concretas de enseñanza‑aprendizaje. Las estrategias determinan no solo cómo se presentarán los contenidos, sino también la forma en que los estudiantes interactuarán con ellos y entre sí. Elegirlas implica analizar su pertinencia, viabilidad y coherencia con los objetivos del currículo, garantizando que el aprendizaje sea significativo y contextualizado.",
            },

            /* Párrafo 2 – Relación con el currículo */
            {
              type: "paragraph",
              text: "Según Coll y Solé (2020), las estrategias actúan como puentes entre los contenidos y los resultados esperados, transformando conceptos complejos en experiencias accesibles que motivan al alumnado. Este proceso no es arbitrario: cada estrategia debe alinearse con las competencias a desarrollar y con los hallazgos del diagnóstico, de modo que el currículo mantenga coherencia vertical y horizontal.",
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://opendigital.es/wp-content/uploads/2020/09/strategy-and-tactics-pro--1024x576.png",
              alt: "Diagrama de conexión entre diagnóstico, estrategias y resultados",
              caption:
                "Figura 4. Traducción del diagnóstico en estrategias curriculares.",
            },

            /* Párrafo 3 – Impacto en la dinámica de aula */
            {
              type: "paragraph",
              text: "Perrenoud (2019) subraya que la eficacia de una estrategia radica en su capacidad para involucrar activamente a los estudiantes, relacionar nuevos conocimientos con experiencias previas y fomentar la reflexión crítica. Por tanto, la elección de estrategias no puede desentenderse de la realidad del aula: tamaño del grupo, recursos disponibles, estilos de aprendizaje y cultura escolar.",
            },

            /* Acordeón 1 – Tipos de estrategias pedagógicas */
            {
              type: "accordion",
              header: "Tipos de estrategias pedagógicas",
              open: false,
              text:
                "* **Enseñanza directa**  \n" +
                "  * Estas estrategias, también conocidas como instrucción tradicional, se centran en la transmisión de conocimientos desde el docente hacia los estudiantes. Incluyen métodos como la lección magistral, la explicación directa, y la demostración. Aunque a veces se consideran métodos tradicionales, estas estrategias pueden ser muy efectivas cuando se utilizan para introducir nuevos conceptos o para aclarar temas complejos. De Alba (2018) destaca que la enseñanza directa sigue siendo relevante en contextos donde se requiere una explicación clara y estructurada de conceptos difíciles, siempre y cuando se complemente con otras estrategias que promuevan la participación activa.  \n\n" +
                "* **Aprendizaje activo**  \n" +
                "  *  En contraste con la enseñanza directa, las estrategias de aprendizaje activo se centran en la participación activa de los estudiantes en el proceso de aprendizaje. Estas estrategias incluyen métodosresolución de problemas. Estas metodologías permiten a los estudiantes explorar y aplicar los conocimientos de manera práctica, desarrollando habilidades críticas como el trabajo en equipo, la resolución de conflictos, y el pensamiento crítico. El aprendizaje activo fomenta un mayor compromiso de los estudiantes, ya que los involucra directamente en el proceso de aprendizaje y les permite ser protagonistas de su propia educación.  \n\n" +
                "* **Enseñanza diferenciada**  \n" +
                "  * La enseñanza diferenciada es una estrategia que reconoce y responde a la diversidad de los estudiantes en el aula. Esta estrategia implica la adaptación de los contenidos, los métodos de enseñanza, y los recursos para atender las diferentes necesidades, intereses, y estilos de aprendizaje de los estudiantes. Según Zabalza (2019), la enseñanza diferenciada permite a los docentes personalizar la educación para que cada estudiante tenga la oportunidad de aprender de la manera que mejor se adapte a sus capacidades y necesidades. Esto es especialmente relevante en contextos educativos donde la diversidad es un factor predominante.   \n\n" +
                "* **Uso de tecnología educativa**  \n" +
                "  * En la era digital, la integración de tecnologías en el aula ha transformado las estrategias pedagógicas. Las tecnologías educativas, como las plataformas de aprendizaje en línea, los recursos multimedia, y las herramientas de colaboración digital, ofrecen nuevas oportunidades para enriquecer el aprendizaje. Según Coll y Solé (2020) la tecnología educativa no solo facilita el acceso a recursos y contenidos, sino que también permite la creación de ambientes de aprendizaje más dinámicos e interactivos. Sin embargo, es importante que la tecnología se utilice de manera pedagógicamente adecuada y no solo como un recurso suplementario. ",
            },

            /* Párrafo 4 – Articulación de estrategias */
            {
              type: "paragraph",
              text: "Una estrategia aislada pierde eficacia si no se integra en una secuencia lógica y progresiva. Por ello se articulan en dos dimensiones: la horizontal, que sincroniza asignaturas y proyectos interdisciplinarios, y la vertical, que asegura la profundización de contenidos a lo largo de los semestres. Esta coherencia evita redundancias y garantiza la progresión del aprendizaje.",
            },

            /* Párrafo 5 – Participación de los actores */
            {
              type: "paragraph",
              text: "La definición de estrategias es un proceso colegiado. Involucrar a docentes, estudiantes y directivos favorece la factibilidad operativa y promueve la apropiación compartida del currículo. Además, la retroalimentación continua de estos actores permite ajustar las estrategias a lo largo de la implementación y mejorar su impacto.",
            },

            /* Acordeón 2 – Criterios para la selección de estrategias */
            {
              type: "accordion",
              header: "Criterios para la selección de estrategias",
              open: false,
              text:
                "* **Coherencia con objetivos**  \n" +
                "  * Las estrategias pedagógicas deben estar alineadas con los objetivos educativos establecidos en el currículo. Perrenoud (2019) enfatiza que cada estrategia debe estar diseñada para facilitar el logro de un objetivo específico, asegurando que los estudiantes adquieran las competencias necesarias. Por ejemplo, si el objetivo es desarrollar habilidades de pensamiento crítico, se deben elegir estrategias que promuevan la reflexión y el análisis profundo, como el debate o el estudio de casos.   \n\n" +
                "* **Adaptabilidad al contexto**  \n" +
                "  * Las estrategias seleccionadas deben ser viables dentro del contexto específico en el que se implementarán. Esto incluye considerar factores como el tamaño de la clase, los recursos disponibles, y las características culturales y sociales de los estudiantes. Según De Alba (2018) una estrategia que funcione bien en un contexto puede no ser efectiva en otro, por lo que es crucial adaptar las estrategias a las condiciones particulares de cada entorno.   \n\n" +
                "* **Inclusión y diversidad**  \n" +
                "  * Las estrategias deben ser inclusivas y considerar las diferencias en estilos de aprendizaje, habilidades, y necesidades de los estudiantes. La enseñanza diferenciada y el uso de múltiples modalidades de enseñanza son esenciales para asegurar que todos los estudiantes tengan la oportunidad de aprender de manera efectiva. La diversidad en el aula requiere estrategias pedagógicas flexibles que puedan adaptarse a diferentes perfiles de estudiantes, garantizando la equidad en el acceso al aprendizaje.  \n\n" +
                "* **Evaluabilidad**  \n" +
                "  * Es importante que las estrategias pedagógicas seleccionadas sean susceptibles de evaluación. Esto significa que deben permitir la recolección de datos sobre su efectividad, lo que es esencial para realizar ajustes y mejoras en el diseño curricular. Zabalza (2019) sugiere que la evaluación de las estrategias pedagógicas no solo permite medir su éxito, sino también identificar áreas de mejora y adaptar el currículo en función de los resultados obtenidos.",
            },

            /* Párrafo 6 – Cierre y proyección */
            {
              type: "paragraph",
              text: "Al concluir esta fase, disponemos de un conjunto de estrategias coherentes, pertinentes y evaluables que guiarán la selección de actividades, recursos y criterios de evaluación. En la siguiente sección se argumentará la elección realizada, vinculándola con teorías pedagógicas y evidencias empíricas para robustecer el proyecto curricular.",
            },
          ],
        },
        {
          id: "2.3",
          numbering: "2.3",
          title: "Justificación de la estrategia asumida",
          content: [
            /* Párrafo 1 – Fundamentación teórica */
            {
              type: "paragraph",
              text: "Justificar la estrategia asumida implica explicar, con base en teorías del aprendizaje sólidas, por qué la combinación de métodos seleccionados facilitará el logro de los objetivos curriculares. El enfoque constructivista respalda el uso de estrategias activas —como proyectos y resolución de problemas— al considerar que los estudiantes construyen conocimiento a partir de experiencias significativas. De igual forma, la teoría del aprendizaje social sustenta los componentes colaborativos, ya que el intercambio entre pares potencia la internalización de conceptos y habilidades.",
            },

            /* Párrafo 2 – Evidencia práctica */
            {
              type: "paragraph",
              text: "Diversos estudios de caso demuestran la efectividad de estas estrategias en contextos semejantes. Investigaciones reportadas por De Alba (2018) muestran mejoras de hasta 25 % en la retención de contenidos cuando se combinan actividades de aprendizaje activo con evaluación formativa continua. De este modo, la estrategia no solo es coherente con la teoría, sino también con resultados empíricos que avalan su pertinencia.",
            },

            /* Imagen de apoyo */
            {
              type: "image",
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8ypjRzvFl1XdxoLxiHb5aaU9MJtYsKFqDw&s",
              alt: "Relación entre teoría, práctica y contexto en la justificación de la estrategia",
              caption:
                "Figura 5. Ejes de la justificación: teoría del aprendizaje, evidencia empírica y pertinencia contextual.",
            },

            /* Párrafo 3 – Pertinencia contextual */
            {
              type: "paragraph",
              text: "La estrategia se adapta al perfil socio‑cultural del alumnado diagnosticado en la Unidad 2.1: grupos heterogéneos, acceso moderado a tecnología y necesidad de incrementar la motivación. Por ello se integran recursos digitales de bajo costo, actividades colaborativas y momentos de reflexión guiada, garantizando viabilidad operativa y relevancia para los estudiantes.",
            },

            /* Párrafo 4 – Coherencia con los objetivos */
            {
              type: "paragraph",
              text: "Cada componente estratégico se alinea con los objetivos del proyecto: las tareas de indagación desarrollan pensamiento crítico; los proyectos colaborativos fortalecen la comunicación y el trabajo en equipo; y las rúbricas analíticas aseguran que la evaluación sea transparente y formativa. De esta forma se cierra el círculo entre necesidades detectadas, metas de aprendizaje y métodos de intervención.",
            },

            /* Video ilustrativo */
            {
              type: "video",
              title:
                "Proyecto Curricular – Diseño Curricular (ejemplo práctico)",
              src: "https://www.youtube.com/watch?v=ldhpS8R5ods",
              caption:
                "Ejemplo de aplicación real que respalda la estrategia asumida.",
            },

            /* Párrafo 5 – Evaluabilidad de la estrategia */
            {
              type: "paragraph",
              text: "La estrategia incorpora indicadores claros y herramientas de recolección de evidencias (portafolios, rúbricas y diarios reflexivos) que permiten medir su impacto en tiempo real. Esta evaluabilidad posibilita ajustes iterativos durante la implementación, asegurando que el currículo permanezca como un documento vivo y pertinente.",
            },

            /* Párrafo 6 – Cierre y proyección */
            {
              type: "paragraph",
              text: "Al justificar la estrategia asumida se garantiza que cada decisión metodológica responda a fundamentos teóricos, evidencias prácticas y condiciones contextuales. Esta coherencia legitima el proyecto curricular ante la comunidad educativa y sienta las bases para su evaluación y mejora continua en etapas posteriores.",
            },
          ],
        },
        {
          id: "2.4",
          numbering: "2.4",
          title: "Objetivos del proyecto",
          content: [
            /* Párrafo 1 – Importancia de los objetivos */
            {
              type: "paragraph",
              text: "Los objetivos del proyecto curricular son declaraciones que definen con claridad qué se espera lograr a través de la implementación del currículo; constituyen el punto de referencia que guía todas las decisiones de diseño, ejecución y evaluación del programa educativo.", // :contentReference[oaicite:0]{index=0}
            },

            /* Párrafo 2 – Objetivo general: definición y rasgos */
            {
              type: "paragraph",
              text: "El objetivo general representa la finalidad global del proyecto. Debe ser amplio, claro y conciso, alinearse con la misión institucional y responder a las necesidades diagnosticadas. En palabras de Zabalza (2019), este objetivo ‘captura la esencia del propósito educativo’ y marca la dirección para los objetivos específicos y las estrategias pedagógicas.", // :contentReference[oaicite:1]{index=1}
            },

            /* Párrafo 3 – Ejemplo ilustrativo de objetivo general */
            {
              type: "paragraph",
              text: "Ejemplo de objetivo general citado en el módulo: «Desarrollar en los estudiantes competencias críticas, creativas y colaborativas que les permitan enfrentar los desafíos del mundo contemporáneo mediante un currículo innovador que promueva el aprendizaje significativo, la reflexión autónoma y la responsabilidad social».", // :contentReference[oaicite:2]{index=2}
            },

            /* Párrafo 4 – Objetivos específicos: propósito y características */
            {
              type: "paragraph",
              text: "Los objetivos específicos desglosan el objetivo general en metas concretas, medibles y alcanzables; cada uno se vincula directamente con un aspecto del proceso de enseñanza‑aprendizaje, facilitando la planificación detallada y la evaluación del éxito del proyecto.", // :contentReference[oaicite:3]{index=3}
            },

            /* Párrafo 5 – Ejemplos de objetivos específicos */
            {
              type: "paragraph",
              text: "Entre los ejemplos propuestos se incluyen: fomentar el pensamiento crítico mediante debates y resolución de problemas, fortalecer el trabajo colaborativo a través de proyectos interdisciplinarios y promover la integración de tecnologías digitales para incrementar la participación estudiantil.", // :contentReference[oaicite:4]{index=4}
            },

            /* Imagen de apoyo */
            {
              type: "image",
              src: "https://i.ytimg.com/vi/3mwQP4suSDc/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGA8gZShTMA8=&rs=AOn4CLBfipuR0Q2AOA7USAXGZGv-szQ71A",
              alt: "Estructura jerárquica de objetivos curriculares",
              caption:
                "Figura 6. Relación entre objetivo general y objetivos específicos.",
            },

            /* Acordeón – Directrices para formular objetivos */
            {
              type: "accordion",
              header: "Guía rápida para redactar objetivos",
              open: false,
              text:
                "* **Claridad** – Usar verbos de acción precisos (analizar, diseñar, evaluar).  \n" +
                "* **Pertinencia** – Alinear con necesidades del diagnóstico y políticas institucionales.  \n" +
                "* **Medibilidad** – Establecer criterios e indicadores verificables.  \n" +
                "* **Alcance** – Diferenciar entre el propósito global (general) y las metas concretas (específicos).  \n" +
                "* **Temporalidad** – Definir plazos realistas para su consecución.",
            },
          ],

          /* → Sub‑subtemas de 2.4 */
          subthemes: [
            {
              id: "2.4.1",
              numbering: "2.4.1",
              title: "Objetivo general",
              content: [
                /* Párrafo 1 – Finalidad y alineación institucional */
                {
                  type: "paragraph",
                  text: "El objetivo general expresa la finalidad global que se desea alcanzar con el proyecto curricular; debe reflejar la misión institucional, las políticas educativas vigentes y las necesidades detectadas en el diagnóstico. Funciona como punto de referencia para todas las decisiones de diseño, ejecución y evaluación, garantizando coherencia entre propósitos y acciones.",
                },

                /* Párrafo 2 – Rasgos esenciales según la literatura */
                {
                  type: "paragraph",
                  text: "Para ser eficaz, un objetivo general ha de ser amplio, claro y conciso. Describe el resultado final esperado, captura la esencia del propósito educativo y orienta la formulación de objetivos específicos y estrategias pedagógicas. Su redacción debe evitar tecnicismos innecesarios y emplear verbos de acción que precisen la transformación buscada.",
                },

                /* Párrafo 3 – Ejemplo tomado del módulo */
                {
                  type: "paragraph",
                  text: "Ejemplo: «Desarrollar en los estudiantes competencias críticas, creativas y colaborativas que les permitan enfrentar de manera efectiva los desafíos del mundo contemporáneo mediante un currículo innovador que promueva el aprendizaje significativo, la reflexión autónoma y la responsabilidad social».",
                },

                /* Párrafo 4 – Coherencia con el contexto */
                {
                  type: "paragraph",
                  text: "La pertinencia contextual implica que el objetivo general responda a las particularidades socio‑culturales del entorno y a los recursos disponibles. De este modo se asegura que la propuesta sea factible y relevante para los actores educativos involucrados.",
                },

                /* Párrafo 5 – Evaluabilidad y mejora continua */
                {
                  type: "paragraph",
                  text: "Un buen objetivo general incluye indicadores implícitos que facilitan su evaluación posterior. Al establecer criterios de éxito desde el inicio, se posibilita el monitoreo y la retroalimentación continua, convirtiendo al currículo en un documento vivo capaz de ajustarse a nuevas demandas.",
                },

                /* Imagen de apoyo */
                {
                  type: "image",
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMBp2W-ZDlEkTTVTValmYzitAQhDUk6TCYg&s",
                  alt: "Diagrama del objetivo general dentro del marco curricular",
                  caption:
                    "Figura 7. El objetivo general como eje articulador del currículo.",
                },

                /* Acordeón 1 – Elementos de un objetivo general */
                {
                  type: "accordion",
                  header: "Elementos de un objetivo general",
                  open: false,
                  text:
                    "* **Verbo de acción** – Indica la transformación deseada.  \n" +
                    "* **Destinatario** – Define a quién se dirige (estudiantes, docentes…).  \n" +
                    "* **Contenido** – Área de saber o competencia a desarrollar.  \n" +
                    "* **Propósito** – Resultado o impacto esperado.  \n" +
                    "* **Contexto** – Condiciones y ámbito de aplicación.",
                },

                /* Acordeón 2 – Ejemplo desglosado del módulo */
                {
                  type: "accordion",
                  header: "Ejemplo comentado",
                  open: false,
                  text:
                    "* **Verbo**: Desarrollar.  \n" +
                    "* **Destinatario**: estudiantes.  \n" +
                    "* **Contenido**: competencias críticas, creativas y colaborativas.  \n" +
                    "* **Propósito**: enfrentar desafíos del mundo contemporáneo.  \n" +
                    "* **Contexto**: mediante un currículo innovador y socialmente responsable.",
                },
              ],
            },
            {
              id: "2.4.2",
              numbering: "2.4.2",
              title: "Objetivos específicos",
              content: [
                /* Párrafo 1 – Definición y función */
                {
                  type: "paragraph",
                  text: "Los objetivos específicos desglosan la finalidad global del proyecto curricular en metas concretas, medibles y alcanzables. Sirven como referencia operativa para seleccionar contenidos, estrategias pedagógicas y mecanismos de evaluación, asegurando que todas las actividades se orienten al logro de resultados precisos.", // :contentReference[oaicite:0]{index=0}
                },

                /* Párrafo 2 – Características esenciales */
                {
                  type: "paragraph",
                  text: "Para ser eficaces, estos objetivos deben formularse de manera observ­able y verificable, utilizando verbos de acción como analizar, aplicar, desarrollar o evaluar. Además, han de vincularse con dimensiones del aprendizaje (contenidos, habilidades, actitudes y valores) y con los hallazgos del diagnóstico contextual.", // :contentReference[oaicite:1]{index=1}
                },

                /* Párrafo 3 – Valor pedagógico */
                {
                  type: "paragraph",
                  text: "Al detallar lo que se espera lograr en cada fase del proceso educativo, los objetivos específicos facilitan la planificación secuenciada, el seguimiento del progreso y la retroalimentación continua. De esta forma se transforman en la guía para docentes y estudiantes durante la implementación del currículo.", // :contentReference[oaicite:2]{index=2}
                },

                /* Párrafo 4 – Relación con la evaluación */
                {
                  type: "paragraph",
                  text: "La presencia de indicadores implícitos en cada objetivo específico posibilita medir avances y tomar decisiones de mejora. Así, la evaluación deja de ser un evento aislado y se convierte en un proceso sistemático alineado desde el inicio con las metas planteadas.", // :contentReference[oaicite:3]{index=3}
                },

                /* Párrafo 5 – Ejemplos destacados del módulo */
                {
                  type: "paragraph",
                  text: "El PDF del módulo propone ejemplos ilustrativos que abarcan el desarrollo del pensamiento crítico, el trabajo colaborativo, la integración de tecnologías digitales y la responsabilidad social del estudiantado, mostrando cómo cada objetivo se conecta con actividades concretas y criterios de logro.", // :contentReference[oaicite:4]{index=4}
                },

                /* Párrafo 6 – Síntesis y proyección */
                {
                  type: "paragraph",
                  text: "Una formulación rigurosa de los objetivos específicos garantiza la coherencia interna del currículo y su pertinencia con las necesidades educativas detectadas. En las unidades posteriores, estos objetivos se materializarán en actividades, recursos y criterios de evaluación alineados.", // :contentReference[oaicite:5]{index=5}
                },

                /* Acordeón 1 – Ejemplos de objetivos específicos (tomados del PDF) */
                {
                  type: "accordion",
                  header: "Ejemplos de objetivos específicos",
                  open: false,
                  text:
                    "* **Pensamiento crítico y analítico** – Implementar actividades de resolución de problemas y debates para fortalecer la argumentación y el razonamiento lógico.【turn14:file0†L69-L75】  \n\n" +
                    "* **Trabajo colaborativo y comunicación** – Desarrollar proyectos grupales interdisciplinarios que integren saberes de distintas áreas.【turn14:file0†L85-L89】  \n\n" +
                    "* **Integración de tecnologías digitales** – Incorporar plataformas en línea y recursos multimedia para aumentar la participación y la motivación estudiantil.【turn14:file5†L57-L63】  \n\n" +
                    "* **Responsabilidad social** – Promover actividades de aprendizaje‑servicio que conecten el currículo con la realidad comunitaria.【turn14:file5†L73-L79】",
                },

                /* Acordeón 2 – Criterios de redacción de objetivos específicos */
                {
                  type: "accordion",
                  header: "Criterios para redactar objetivos específicos",
                  open: false,
                  text:
                    "* **Claridad** – Usar verbos de acción observables.  \n" +
                    "* **Relevancia** – Responder a necesidades diagnosticadas.  \n" +
                    "* **Medibilidad** – Incluir indicadores o evidencias de logro.  \n" +
                    "* **Factibilidad** – Ajustarse a recursos y tiempo disponibles.  \n" +
                    "* **Pertinencia formativa** – Vincularse con la evaluación continua.",
                },
              ],
            },
          ],
        },
        {
          id: "2.5",
          numbering: "2.5",
          title: "Resultados o productos esperados",
          content: [
            /* Párrafo 1 – Concepto de resultados */
            {
              type: "paragraph",
              text: "Los resultados o productos esperados constituyen las evidencias concretas de que los objetivos planteados se han alcanzado. En el módulo se subraya que no se trata solo de calificaciones finales, sino de manifestaciones tangibles —portafolios, proyectos, presentaciones— y evidencias de desempeño —rúbricas, listas de cotejo— que demuestran el desarrollo de competencias.", //
            },

            /* Párrafo 2 – Categorías de productos */
            {
              type: "paragraph",
              text: "El documento agrupa los productos en tres categorías: (1) académicos, como informes de investigación o ensayos críticos; (2) tecnológicos, tales como videos tutoriales, infografías digitales o aplicaciones sencillas; y (3) sociales, que incluyen propuestas de intervención comunitaria o actividades de aprendizaje‑servicio.", //
            },

            /* Párrafo 3 – Criterios de calidad */
            {
              type: "paragraph",
              text: "Para garantizar la pertinencia de estos productos se establecen criterios de calidad vinculados a los objetivos específicos: relevancia del contenido, rigurosidad metodológica, creatividad en la presentación y utilidad para la comunidad educativa. Dichos criterios se plasman en rúbricas que servirán como herramientas de evaluación formativa y sumativa.", //
            },

            /* Párrafo 4 – Uso en la evaluación y retroalimentación */
            {
              type: "paragraph",
              text: "Los resultados esperados no solo evidencian el aprendizaje, sino que alimentan el proceso de retroalimentación continua. Al revisar los productos, docentes y estudiantes identifican fortalezas y áreas de mejora, ajustando estrategias y actividades para incrementar la eficacia del proyecto curricular.", //
            },

            /* Párrafo 5 – Proyección a fases posteriores */
            {
              type: "paragraph",
              text: "Finalmente, la definición clara de resultados posibilita la planificación de las actividades (Unidad 2.6) y la asignación de recursos (Unidad 2.7). Al saber qué se espera producir, el equipo docente puede seleccionar con mayor precisión las estrategias didácticas, los materiales y los tiempos necesarios para concretar cada producto.", //
            },

            /* Video ilustrativo */
            {
              type: "video",
              title: "Portafolio de productos finales – Ejemplo práctico",
              src: "https://www.youtube.com/watch?v=3IOkwLKyHNE",
              caption:
                "Caso real que muestra evidencias de aprendizaje alineadas con los resultados esperados.",
            },
          ],
        },
        {
          id: "2.6",
          numbering: "2.6",
          title: "Actividades",
          content: [
            /* Párrafo 1 – Importancia de las actividades */
            {
              type: "paragraph",
              text: "Las actividades constituyen el componente operativo del proyecto curricular: son las experiencias concretas mediante las cuales se implementan las estrategias pedagógicas y se logran los objetivos de aprendizaje. Para ser efectivas deben alinearse con el enfoque del currículo, responder a las necesidades diagnosticadas y propiciar la participación activa del estudiantado.",
            },

            /* Párrafo 2 – Enfoque teórico */
            {
              type: "paragraph",
              text: "Siguiendo a Coll y Solé (2020), las actividades han de concebirse como experiencias de aprendizaje significativo que conecten conocimientos previos con nuevos contenidos, fomenten la reflexión crítica y favorezcan la construcción autónoma del saber. De este modo, cada actividad se vuelve un puente entre la teoría curricular y su aplicación en el aula.",
            },

            /* Lista 1 – Tipos de actividades recomendadas */
            {
              type: "list",
              style: "unordered",
              items: [
                "Introducción y motivación: dinámicas de presentación, lluvia de ideas, análisis de casos.",
                "Desarrollo de contenidos: lecturas guiadas, debates, resolución de problemas, talleres prácticos.",
                "Aprendizaje colaborativo: proyectos grupales interdisciplinarios, estudios de caso compartidos.",
                "Evaluación y retroalimentación: rúbricas, autoevaluaciones, presentaciones orales, pruebas formativas.",
                "Extensión y aplicación: visitas de campo, aprendizaje‑servicio, ferias científicas, productos multimedia.",
              ],
            },

            /* Párrafo 3 – Planificación y secuenciación */
            {
              type: "paragraph",
              text: "Una planificación cuidadosa asegura la coherencia interna del currículo: las actividades se disponen en una secuencia lógica y progresiva que retoma aprendizajes previos y prepara los subsiguientes. Además, se contempla la diversidad de estilos de aprendizaje, ofreciendo múltiples vías de acceso al contenido.",
            },

            /* Lista 2 – Criterios para diseñar actividades */
            {
              type: "list",
              style: "unordered",
              items: [
                "Coherencia con los objetivos y resultados esperados.",
                "Adaptabilidad al contexto y recursos disponibles.",
                "Inclusión y atención a la diversidad estudiantil.",
                "Evaluabilidad: posibilidad de recolectar evidencias claras.",
                "Flexibilidad para ajustes según retroalimentación continua.",
              ],
            },

            /* Acordeón – Secuencia para implementar actividades */
            {
              type: "accordion",
              header: "Ruta de implementación de actividades",
              open: false,
              text:
                "* **Paso 1 — Selección**  \n" +
                "  * Elegir actividades pertinentes al objetivo y al diagnóstico. \n\n" +
                "* **Paso 2 — Diseño detallado**  \n" +
                "  * Definir recursos, tiempos, roles y criterios de evaluación. \n\n" +
                "* **Paso 3 — Ejecución**  \n" +
                "  * Desarrollar la actividad propiciando la participación activa. \n\n" +
                "* **Paso 4 — Evaluación y retroalimentación**  \n" +
                "  * Analizar evidencias, emitir comentarios y registrar hallazgos. \n\n" +
                "* **Paso 5 — Ajuste**  \n" +
                "  * Modificar actividades futuras a partir de los resultados obtenidos.",
            },

            /* Párrafo 4 – Evaluación integrada */
            {
              type: "paragraph",
              text: "Cada actividad incorpora momentos de evaluación formativa que permiten monitorear el progreso estudiantil y ajustar la enseñanza en tiempo real. Esta evaluación continua convierte al currículo en un documento vivo, capaz de adaptarse dinámicamente.",
            },

            /* Párrafo 5 – Proyección hacia la asignación de recursos */
            {
              type: "paragraph",
              text: "La definición precisa de actividades facilita la identificación y asignación de los recursos materiales necesarios (Unidad 2.7), asegurando que la implementación del proyecto sea viable y alineada con los resultados y productos esperados.",
            },
          ],
        },
        {
          id: "2.7",
          numbering: "2.7",
          title: "Recursos materiales necesarios",
          content: [
            /* Párrafo 1 – Visión general */
            {
              type: "paragraph",
              text: "La viabilidad del proyecto curricular depende de una provisión adecuada de recursos humanos, materiales y tecnológicos. Estos insumos sostienen la implementación de estrategias, actividades y evaluaciones, evitando que el diseño quede en un plano meramente teórico.",
            },

            /* Párrafo 2 – Relevancia del análisis contextual */
            {
              type: "paragraph",
              text: "El diagnóstico institucional recomienda valorar la infraestructura física, la dotación tecnológica, los materiales didácticos y la capacitación docente. Este mapeo de recursos revela oportunidades y limitaciones, garantizando un currículo realista y pertinente.",
            },

            /* Lista 1 – Recursos humanos clave */
            {
              type: "list",
              style: "unordered",
              items: [
                "Docentes especialistas en diseño y evaluación curricular",
                "Facilitadores de apoyo tecnológico / aula virtual",
                "Asesores externos para evaluación de calidad",
                "Personal administrativo para logística y seguimiento",
              ],
            },

            /* Párrafo 3 – Expectativas de la comunidad educativa */
            {
              type: "paragraph",
              text: "Incluir a directivos, docentes, estudiantes y familias en la planeación de recursos favorece el compromiso colectivo y la sostenibilidad del proyecto. Su participación garantiza que los insumos respondan a necesidades reales y cuenten con respaldo institucional.",
            },

            /* Lista 2 – Recursos materiales y tecnológicos */
            {
              type: "list",
              style: "unordered",
              items: [
                "Aulas con proyector, sonido y conexión a internet estable",
                "Plataforma LMS institucional con licencias vigentes",
                "Bibliografía física y digital actualizada",
                "Laboratorios o espacios de demostración específicos",
                "Software de autor y herramientas colaborativas en línea",
              ],
            },

            /* Párrafo 4 – Sistema dinámico de recursos */
            {
              type: "paragraph",
              text: "Los recursos se conciben como un sistema dinámico que requiere actualización, mantenimiento y evaluación continua. Definir mecanismos de seguimiento evita obsolescencia y asegura su alineación con los objetivos del currículo.",
            },

            /* Acordeón – Gestión y optimización */
            {
              type: "accordion",
              header: "Gestión de recursos",
              open: false,
              text:
                "* **Planificación y priorización**  \n" +
                "  * Calendario de adquisiciones y responsables claros.  \n\n" +
                "* **Estrategias de obtención**  \n" +
                "  * Convenios con editoriales, proveedores de tecnología y fondos externos.  \n\n" +
                "* **Sostenibilidad y evaluación**  \n" +
                "  * Indicadores de uso pedagógico y revisiones semestrales del inventario.",
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
          href: "https://www.youtube.com/watch?v=EomYNp_7nqE", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Diagnóstico Curricular CNEPB https://www.youtube.com/watch?v=ziU0g0mh4BA ",
            "Propuesta de diseño curricular https://www.youtube.com/watch?v=wHer2oNa-wI",
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
            "Coll, C. & Solé, I. (2020). *Currículum y evaluación en la educación obligatoria: Desafíos y perspectivas.* Barcelona, España: Editorial Graó.",
            "Perrenoud, P. (2019). *La evaluación de los alumnos: De la producción de la excelencia a la regulación de los aprendizajes.* Madrid, España: Editorial Morata.",
            "De Alba Ceballos, A. (2018). *Teoría curricular: Nuevas tendencias y perspectivas.* Ciudad de México: Siglo XXI Editores.",
            "Díaz Barriga, A. (2018). *Metodología de diseño curricular: Un enfoque centrado en competencias.* Ciudad de México, México: Editorial Trillas.",
            "Gimeno Sacristán, J. (2017). *El currículum: Una reflexión sobre la práctica.* Madrid, España: Ediciones Morata.",
            "Zabalza, M. Á. (2019). *Diseño y desarrollo curricular: Cómo planificar e implementar el currículo en la educación superior.* Madrid, España: Narcea Ediciones.",
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
