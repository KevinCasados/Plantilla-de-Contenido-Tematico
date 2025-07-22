/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId : "doctorado-educacion",          // Programa académico
courseId  : "dec-309",                      // Diseño y Evaluación Curricular
id        : "modulo3",

/* ── Datos visibles ─────────────────────────── */
courseName: "Diseño y Evaluación Curricular",
title     : "Módulo 3. Etapas de un proyecto",
semestre  : "Tercer Semestre",
teacher   : "Dr. Jesús Agustín Zapata Velázquez",

/* ── Objetivo y competencias ────────────────── */
objective:
  "Desarrollar en los Doctorantes la capacidad para planificar, ejecutar, evaluar y dar " +
  "seguimiento a proyectos curriculares, aplicando un enfoque integral que permita gestionar " +
  "cada una de sus etapas de manera estratégica, asegurando la efectividad, sostenibilidad y " +
  "mejora continua del proceso educativo en diversos contextos.",

competencies: [
  "Diseñar proyectos curriculares efectivos, estableciendo objetivos claros, seleccionando contenidos relevantes y definiendo estrategias pedagógicas adecuadas para diversos contextos educativos.",
  "Implementar proyectos curriculares, adaptando metodologías y estrategias en el aula de acuerdo con las necesidades de los estudiantes y las características del entorno educativo.",
  "Aplicar técnicas y herramientas de evaluación para medir la efectividad de los proyectos curriculares, identificar logros y áreas de mejora, y proporcionar retroalimentación constructiva para su ajuste y optimización.",
  "Realizar un seguimiento continuo del impacto de los proyectos curriculares, asegurando su alineación con los objetivos propuestos y adaptándolos a los cambios en el contexto educativo para garantizar su sostenibilidad y mejora continua."
],

  /* ── Contenido temático (jerarquía recursiva) ─ */
  themes: [
    /* 0. Info del módulo (opcional) */
    {
      id: "X.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [],
    },

    /* 1. Unidad principal (ejemplo) */
    {
      id: "1",
      numbering: "Unidad 3",
      title: "ETAPAS DE UN PROYECTO  ",
      content: [
  /* Párrafo 1 – Transición y propósito de la unidad */
  {
    type: "paragraph",
    text:
      "La Unidad 3 marca el paso decisivo de la planeación a la acción: después de diseñar el proyecto curricular en la unidad anterior, ahora exploraremos sistemáticamente las etapas que garantizan su implementación exitosa y su sostenibilidad en el tiempo. Este recorrido consolidará tu capacidad para llevar un proyecto desde la teoría hasta la práctica, garantizando que cada fase se alinee con los objetivos educativos y responda a las demandas del contexto."
  },

  /* Párrafo 2 – Panorama de las cuatro fases críticas */
  {
    type: "paragraph",
    text:
      "Profundizaremos en cuatro fases esenciales: diseño, ejecución, evaluación y seguimiento. Comenzaremos afinando el diseño, precisando acciones y recursos; pasaremos a la ejecución, donde pondremos en práctica estrategias adaptativas; examinaremos la evaluación, clave para medir impacto y detectar mejoras; y cerraremos con el seguimiento, asegurando la pertinencia y evolución continua del currículo."
  },

  /* Párrafo 3 – Énfasis en la fase de diseño */
  {
    type: "paragraph",
    text:
      "En la fase de diseño se combinan la definición clara de objetivos —específicos, medibles, alcanzables, relevantes y temporales— con la selección y organización de contenidos y estrategias pedagógicas que motiven al estudiantado. Un plan cuidadoso de recursos y un cronograma realista son fundamentales para anticipar desafíos y garantizar la viabilidad del proyecto."
  },

  /* Párrafo 4 – Claves de una ejecución flexible y participativa */
  {
    type: "paragraph",
    text:
      "La fase de ejecución traduce el diseño a la práctica diaria del aula. Implica preparar materiales, verificar recursos tecnológicos y fomentar un aprendizaje activo y colaborativo. Resulta vital monitorear en tiempo real la participación y el progreso de los estudiantes, ajustando metodologías y tiempos cuando surjan imprevistos o nuevas necesidades."
  },

  /* Párrafo 5 – Evaluación y seguimiento para la mejora continua */
  {
    type: "paragraph",
    text:
      "Evaluar y dar seguimiento al proyecto curricular completa el ciclo de mejora continua. La evaluación mide logros y procesos, identificando brechas entre lo planificado y lo ejecutado, mientras que el seguimiento monitorea de forma constante la alineación con los objetivos, promoviendo ajustes oportunos y la sostenibilidad del currículo en contextos cambiantes."
  },

  /* Acordeón – Mapa sintético de las etapas */
  {
    type : "accordion",
    header: "Resumen de las etapas clave",
    open  : false,
    text  :
      "* **Diseño** – Definir objetivos, contenidos, estrategias y recursos.  \n" +
      "* **Ejecución** – Implementar el proyecto con flexibilidad y monitoreo constante.  \n" +
      "* **Evaluación** – Medir impacto, logros y áreas de mejora.  \n" +
      "* **Seguimiento** – Asegurar la relevancia y sostenibilidad mediante ajustes continuos."
  }
],
      subthemes: [
  {
    id       : "3.1",
    numbering: "3.1",
    title    : "Diseño",
    content: [
  /* Párrafo 1 – Qué es la fase de diseño */
  {
    type: "paragraph",
    text:
      "La fase de diseño es el punto de partida de cualquier proyecto curricular: concentra la planificación detallada de los elementos que permitirán alcanzar los objetivos educativos. Implica seleccionar contenidos, estrategias pedagógicas y disponerlos de forma coherente en un plan que guíe todo el proceso de enseñanza‑aprendizaje."
  },

  /* Párrafo 2 – Definición clara de objetivos (SMART) */
  {
    type: "paragraph",
    text:
      "El primer paso consiste en definir objetivos específicos, medibles, alcanzables, relevantes y acotados en el tiempo (SMART). Estos objetivos orientan todas las decisiones del diseño y aseguran que cada componente del currículo contribuya a los resultados deseados."
  },

  /* Párrafo 3 – Selección y organización de contenidos */
  {
    type: "paragraph",
    text:
      "Una vez establecidos los objetivos, se seleccionan y organizan los contenidos pertinentes, actualizados y adecuados a las características del grupo y del contexto. La coherencia temática garantiza un aprendizaje progresivo y significativo."
  },

  /* Párrafo 4 – Estrategias pedagógicas alineadas */
  {
    type: "paragraph",
    text:
      "La elección de estrategias pedagógicas es esencial: deben alinearse con los objetivos y responder a los estilos de aprendizaje de los estudiantes. Métodos como el aprendizaje basado en proyectos, la cooperación o la integración de tecnologías digitales fomentan la motivación y la construcción activa del conocimiento."
  },

  /* Párrafo 5 – Plan de recursos, tiempos y anticipación de desafíos */
  {
    type: "paragraph",
    text:
      "Un diseño efectivo requiere planificar recursos humanos, materiales y tecnológicos, así como un cronograma realista. También conviene anticipar desafíos (falta de recursos, resistencia al cambio, diversidad de niveles) y establecer estrategias de mitigación para mantener el proyecto alineado con sus objetivos."
  },

  /* Imagen ilustrativa */
  {
    type   : "image",
    src    : "https://identidadydesarrollo.com/wp-content/uploads/2019/07/Proceso-iterativo-de-design-thinking-1024x689.png",
    alt    : "Diagrama de la fase de diseño dentro del ciclo de proyecto curricular",
    caption: "Figura 1. Componentes interrelacionados de la fase de diseño."
  },

  /* Acordeón 1 – Pasos esenciales del diseño */
  {
    type  : "accordion",
    header: "Pasos esenciales del diseño",
    open  : false,
    text  :
      "* **1. Definir objetivos SMART**  \n" +
      "* **2. Seleccionar contenidos pertinentes**  \n" +
      "* **3. Elegir estrategias pedagógicas**  \n" +
      "* **4. Planificar recursos y cronograma**  \n" +
      "* **5. Anticipar desafíos y ajustes**"
  },

  /* Acordeón 2 – Desafíos comunes y respuestas */
  {
    type  : "accordion",
    header: "Desafíos comunes y cómo afrontarlos",
    open  : false,
    text  :
      "* **Falta de recursos** → Gestionar apoyos externos y optimizar los disponibles.  \n" +
      "* **Resistencia al cambio** → Incluir a los actores clave en la planificación y comunicar beneficios.  \n" +
      "* **Diversidad de niveles** → Diseñar actividades diferenciadas y estrategias de aprendizaje colaborativo.  \n" +
      "* **Limitaciones de tiempo** → Establecer hitos realistas y priorizar contenidos críticos."
  }
],
  },
  {
    id       : "3.2",
    numbering: "3.2",
    title    : "Ejecución",
    content: [
  /* Párrafo 1 — Preparación antes de la puesta en marcha (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "La fase de ejecución representa la transición del papel a la práctica: el proyecto curricular abandona el dominio de la planificación para materializarse en el aula. Antes de iniciar, el equipo docente debe realizar una preparación minuciosa que asegure que todos los elementos previstos en el diseño estén realmente disponibles y en condiciones operativas. Esta preparación comprende la organización secuencial de los materiales didácticos impresos y digitales, la verificación técnica de los dispositivos y plataformas que se utilizarán, y la coordinación logística con los demás actores que participarán en la experiencia (tutores, facilitadores tecnológicos o invitados externos). Asimismo, es indispensable comunicar con claridad los objetivos, las reglas de trabajo y los criterios de evaluación a los estudiantes, de modo que cada participante comprenda tanto el propósito como su rol activo dentro del proyecto. Esta comunicación inicial aumenta la motivación, reduce la incertidumbre y alinea las expectativas del grupo con los fines del currículo. Una preparación bien orquestada minimiza interrupciones, evita la improvisación y genera confianza, creando un ambiente propicio para el aprendizaje significativo."
  },

  /* Párrafo 2 — Implementación flexible y monitoreo constante (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Durante la ejecución el docente adopta el papel de facilitador que orquesta dinámicas variadas: exposiciones breves, debates guiados, retos colaborativos y espacios de investigación autónoma. Aunque el plan de clase proporciona una ruta, la realidad del aula exige una actitud flexible para responder a situaciones imprevistas, como dificultades técnicas, diferencias en el ritmo de trabajo o preguntas que abren líneas de indagación no previstas. La observación continua de la participación, la comprensión y el estado emocional de los estudiantes permite ajustar tiempos, profundizar explicaciones o diversificar recursos sin perder de vista los objetivos. Esta retroalimentación in situ se apoya en estrategias como la evaluación diagnóstica rápida, las preguntas de sondeo y el uso de aplicaciones interactivas que generan datos inmediatos sobre el progreso del grupo. La flexibilidad, lejos de implicar improvisación, se basa en decisiones fundamentadas que preservan la coherencia del proyecto y mantienen la motivación alta, garantizando que el currículo se adapte al contexto emergente sin sacrificar su dirección pedagógica."
  },

  /* Párrafo 3 — Promoción del aprendizaje activo y colaborativo (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "El éxito de la fase de ejecución reside en promover un aprendizaje activo donde los estudiantes construyan conocimiento de manera experiencial. Para ello se emplean metodologías como el aprendizaje basado en proyectos, la resolución de problemas auténticos y las simulaciones que vinculan la teoría con la práctica. Estas estrategias convierten al aula en un laboratorio de experimentación intelectual y social, donde los estudiantes investigan, discuten, crean productos y reflexionan sobre sus resultados. El trabajo colaborativo desempeña un papel central: al formar equipos heterogéneos se potencian habilidades de comunicación, liderazgo compartido y negociación, esenciales en contextos profesionales. El docente facilita recursos, plantea retos retadores y media los conflictos que surgen del diálogo crítico. Paralelamente, la integración de tecnologías —foros, wikis, pizarras digitales, herramientas de co‑creación— amplía los escenarios de interacción y favorece la inclusión de distintos estilos de aprendizaje. Cuando los estudiantes asumen la responsabilidad de su proceso, la motivación intrínseca aumenta y el currículo se transforma en una experiencia relevante y significativa."
  },

  /* Párrafo 4 — Ajustes, retroalimentación y cierre reflexivo (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "La ejecución no concluye con la última actividad programada; exige un cierre reflexivo que consolide los aprendizajes y genere insumos para la evaluación. A lo largo de la implementación, la retroalimentación continua —entre pares y del docente— orienta ajustes oportunos: reordenar contenidos, introducir ejemplos adicionales o modificar la complejidad de las tareas. Esta toma de decisiones se basa en evidencias recogidas mediante rúbricas, listas de cotejo, portafolios y registros de observación. Al finalizar el ciclo, se realiza una sesión de síntesis donde los estudiantes presentan los productos logrados, identifican aciertos y proponen mejoras. El docente, por su parte, documenta hallazgos sobre la eficacia de las estrategias, la pertinencia de los recursos y el grado de consecución de los objetivos, información que alimentará la fase de evaluación formal. Este cierre consciente convierte la experiencia vivida en conocimiento transferible y afianza la cultura de mejora continua característica de un proyecto curricular dinámico y sostenible."
  },

  /* Video ilustrativo de buenas prácticas de ejecución */
  {
    type   : "video",
    title  : "Implementación efectiva de proyectos curriculares",
    src    : "https://www.youtube.com/watch?v=nVT-ZY_xDxU",
    caption: "Caso práctico que muestra estrategias, recursos y ajustes durante la fase de ejecución."
  },

  /* Acordeón 1 — Preparación operativa */
  {
    type  : "accordion",
    header: "Checklist de preparación antes de ejecutar",
    open  : false,
    text  :
      "* Organización de materiales didácticos y copias de seguridad.  \n" +
      "* Verificación de plataformas y dispositivos tecnológicos.  \n" +
      "* Coordinación con docentes colaboradores y personal de apoyo.  \n" +
      "* Comunicación de objetivos, roles y criterios de éxito a los estudiantes."
  },

  /* Acordeón 2 — Claves durante la ejecución */
  {
    type  : "accordion",
    header: "Principios de una ejecución efectiva",
    open  : false,
    text  :
      "* Monitorear participación y comprensión de forma continua.  \n" +
      "* Ajustar tiempos y metodologías según necesidades emergentes.  \n" +
      "* Fomentar aprendizaje activo, colaborativo y contextualizado.  \n" +
      "* Mantener la motivación mediante retroalimentación inmediata y retos significativos."
  }
],
  },
  {
    id       : "3.3",
    numbering: "3.3",
    title    : "Evaluación",
    content: [
  /* Párrafo 1 — Finalidad y alcance de la evaluación (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "La fase de evaluación es el momento en que el proyecto curricular se mira al espejo: a través de evidencias sistemáticas se determina en qué medida se han alcanzado los objetivos propuestos y cómo ha operado el proceso de enseñanza‑aprendizaje. No se trata únicamente de asignar calificaciones, sino de recopilar información rigurosa y multifuente que permita tomar decisiones fundamentadas para mejorar el currículo. En este sentido, la evaluación asume una doble función: formativa, porque retroalimenta y orienta ajustes mientras el proyecto está vivo, y sumativa, porque valora los resultados al concluir un ciclo o etapa. También cumple un propósito analítico al identificar brechas entre lo planificado y lo ejecutado, revelando la eficacia de las estrategias pedagógicas y la pertinencia de los recursos utilizados. De esta forma, la evaluación se convierte en la bisagra que conecta el diseño con el seguimiento, garantizando que el proyecto no solo produzca aprendizajes significativos, sino que también se perfeccione de manera continua."
  },

  /* Imagen 1: ciclo de evaluación */
  {
    type   : "image",
    src    : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1Ov3vQql31X-DUzInkYzAzmRPIQqYdwgeWzdnSPCtm78G9Pf-N1cfK9tvkwbZNhCz6ZskNKueKZKZerBakZrUaNdTDzEoTvXw2C92bteoUVZssWZK2Ph7MJ27ORTXdMckcHU8yjVPwhzF/s640/enfoques_evaluacion1.png",
    alt    : "Diagrama del ciclo de evaluación dentro del proyecto curricular",
    caption: "Figura 1. Relación dinámica entre evaluación formativa, sumativa y diagnóstica."
  },

  /* Párrafo 2 — Diversidad de enfoques de evaluación (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Para abarcar la complejidad del aprendizaje, la evaluación adopta distintos enfoques que se complementan. La diagnóstica permite conocer el punto de partida y reajustar la ruta cuando las condiciones cambian; la formativa acompaña el proceso, entrega retroalimentación oportuna y habilita correcciones in situ; la sumativa otorga una visión de conjunto al finalizar la etapa, facilitando la rendición de cuentas y la toma de decisiones sobre la continuidad o rediseño del proyecto. Cada tipo de evaluación aporta datos específicos: la diagnóstica revela necesidades inmediatas, la formativa detecta avances y dificultades en tiempo real, y la sumativa determina el impacto global. Al integrarlas, el equipo docente dispone de un sistema robusto que ilumina tanto los logros como las áreas susceptibles de mejora, promoviendo una cultura de evidencia y aprendizaje permanente."
  },

  /* Acordeón 1 — Tipos de evaluación */
  {
    type  : "accordion",
    header: "Tipos de evaluación y sus propósitos",
    open  : false,
    text  :
      "* **Diagnóstica** – Establece el punto de partida y detecta necesidades emergentes.  \n" +
      "* **Formativa** – Proporciona retroalimentación continua para ajustar el proceso.  \n" +
      "* **Sumativa** – Valora el logro de objetivos al cierre de la etapa y guía decisiones futuras."
  },

  /* Párrafo 3 — Instrumentos y técnicas de recolección de datos (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Una evaluación significativa se apoya en una batería diversificada de instrumentos cuantitativos y cualitativos. Las pruebas y exámenes miden la adquisición de conocimientos declarativos; las rúbricas establecen criterios explícitos para tareas complejas, fomentando transparencia y objetividad; los portafolios documentan la progresión del estudiante y capturan productos auténticos; la observación directa permite valorar habilidades socio‑emocionales y actitudes; encuestas y cuestionarios recogen percepciones de estudiantes, docentes y familias, aportando una mirada holística al impacto del proyecto. La triangulación de estas fuentes incrementa la fiabilidad de los hallazgos y ofrece una comprensión profunda del aprendizaje. Además, la tecnología amplía las posibilidades de evaluación mediante plataformas interactivas que generan analíticas en tiempo real, facilitando intervenciones personalizadas y decisiones basadas en datos."
  },

  /* Imagen 2: herramientas de evaluación */
  {
    type   : "image",
    src    : "https://media.licdn.com/dms/image/v2/D4E22AQGkMG7QsKf3nA/feedshare-shrink_800/feedshare-shrink_800/0/1731254498350?e=2147483647&v=beta&t=s0xvyNfZfbsB_b-Gisyegf6VUyLmY1eLnR7ckAaiOY0",
    alt    : "Infografía de instrumentos de evaluación formativa y sumativa",
    caption: "Figura 2. Principales herramientas para una evaluación integral."
  },

  /* Acordeón 2 — Herramientas de evaluación */
  {
    type  : "accordion",
    header: "Instrumentos recomendados",
    open  : false,
    text  :
      "* **Pruebas y exámenes** – Valoración estandarizada de conocimientos.  \n" +
      "* **Rúbricas analíticas** – Criterios claros para productos complejos.  \n" +
      "* **Portafolios** – Evidencias de progreso y reflexión.  \n" +
      "* **Observación directa** – Registro de desempeño y actitudes.  \n" +
      "* **Encuestas y cuestionarios** – Percepción de actores sobre efectividad."
  },

  /* Párrafo 4 — Análisis de resultados y retroalimentación (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Una vez recopilados los datos, el análisis se convierte en el motor de la retroalimentación y la mejora. Interpretar los resultados implica comparar evidencias con los objetivos, identificar patrones de éxito y zonas críticas, y priorizar acciones correctivas. La retroalimentación debe ser específica, oportuna y constructiva: a estudiantes, para orientar su aprendizaje; a docentes, para ajustar estrategias; y a la institución, para tomar decisiones de política curricular. Este diálogo basado en evidencias alimenta el ciclo de mejora continua del proyecto. Asimismo, el análisis permite visibilizar logros, reconocer el esfuerzo de la comunidad educativa y fortalecer la cultura de evaluación como práctica profesional. Cuando la información se utiliza para aprender —y no solo para calificar— la evaluación se convierte en una palanca poderosa de innovación y calidad educativa."
  }
],
  },
  {
    id       : "3.4",
    numbering: "3.4",
    title    : "Seguimiento",
    content: [
  /* Párrafo 1 — Qué es el seguimiento y por qué es crítico (≈300 palabras) */
  {
    type: "paragraph",
    text:
      "El seguimiento es la fase que asegura que un proyecto curricular permanezca vivo, pertinente y sostenible a lo largo del tiempo. A diferencia de la evaluación —que se focaliza en medir resultados en momentos específicos— el seguimiento supone un monitoreo continuo y sistemático del desarrollo del proyecto para verificar que se mantenga alineado con los objetivos educativos y responda a las necesidades emergentes del contexto. Este acompañamiento prolongado permite detectar de manera temprana desviaciones en el rumbo, lagunas en la implementación o desajustes entre lo planeado y lo que ocurre realmente en el aula. Cuando el seguimiento se incorpora como práctica habitual, los hallazgos derivados de la evaluación dejan de quedarse en informes estáticos y se convierten en guía para la acción correctiva. De este modo, los ajustes, mejoras e innovaciones identificados en evaluaciones previas o parciales se incorporan de forma oportuna al proceso educativo, alimentando un ciclo de mejora continua. Además, el seguimiento contribuye a preservar la coherencia del currículo frente a cambios institucionales, rotación de personal o variabilidad en los recursos disponibles. En suma, brinda la visibilidad operativa que permite sostener la calidad del proyecto más allá del entusiasmo inicial y de los hitos formales de evaluación."
  },

  /* Imagen 1 — Flujo general de seguimiento */
  {
    type   : "image",
    src    : "https://fastercapital.com/es/i-es/Control-de-costos--estrategias-para-el-control-de-costos-neutral-en-efectivo--un-enfoque-de-ganar-ganar--Monitoreo-y-evaluaci-n-continua-para-la-mejora-continua.webp",
    alt    : "Flujo del seguimiento continuo en un proyecto curricular",
    caption: "Figura 1. Del monitoreo a la mejora continua."
  },

  /* Párrafo 2 — Alcances del monitoreo: qué observar y con qué fines (≈300 palabras) */
  {
    type: "paragraph",
    text:
      "Un sistema de seguimiento eficaz observa más que las calificaciones: integra información sobre el desempeño de los estudiantes, la pertinencia de las estrategias pedagógicas, el uso y suficiencia de los recursos, y la satisfacción de los distintos actores educativos. Al monitorear de manera regular estos componentes se puede distinguir si los aprendizajes avanzan al ritmo esperado, si las metodologías mantienen a los estudiantes comprometidos o si existen barreras de infraestructura que afectan la implementación. El seguimiento también funciona como radar de clima institucional: señales de resistencia, sobrecarga docente o baja participación estudiantil emergen antes de convertirse en problemas mayores cuando hay espacios para escuchar y registrar. Este monitoreo múltiple debería apoyarse en registros breves pero sistemáticos (bitácoras docentes, notas de campo, indicadores del LMS, encuestas rápidas) que permitan visualizar tendencias en periodos cortos. Con datos acumulados semana a semana, el equipo puede decidir ajustes finos: reforzar contenidos, redistribuir tiempo, incorporar apoyos tecnológicos o brindar acompañamiento a grupos con rezago. Así, el seguimiento transforma la gestión del currículo en un proceso sensible y responsivo a la realidad educativa diaria."
  },

  /* Imagen 2 — Panel de indicadores de seguimiento */
  {
    type   : "image",
    src    : "https://www.revista.unam.mx/wp-content/uploads/Figura1..png",
    alt    : "Panel de indicadores para monitorear un proyecto curricular",
    caption: "Figura 2. Ejemplo de tablero con métricas clave (participación, avance, recursos)."
  },

  /* Párrafo 3 — Estrategias y herramientas para un seguimiento sistemático (≈300 palabras) */
  {
    type: "paragraph",
    text:
      "Institucionalizar el seguimiento exige estrategias claras. Un primer paso consiste en definir indicadores de desempeño vinculados a los objetivos del proyecto: participación estudiantil, progreso por competencias, cumplimiento de hitos, y consistencia en la aplicación de estrategias didácticas. Estos indicadores deben recogerse con instrumentos comparables en el tiempo para identificar tendencias. Las reuniones periódicas de seguimiento con el equipo docente son igualmente esenciales: en ellas se comparten evidencias, se contrastan percepciones, se analizan desafíos comunes y se acuerdan ajustes coordinados. La dimensión tecnológica amplifica el alcance del seguimiento: plataformas de gestión del aprendizaje, sistemas de analíticas educativas, aplicaciones de evaluación en línea y formularios automatizados permiten recolectar datos en tiempo real y visualizar alertas tempranas. Cuando los registros digitales se combinan con la observación cualitativa del aula, se obtiene una imagen rica y accionable del estado del proyecto. Documentar cada sesión de revisión asegura trazabilidad: qué se detectó, qué acción se decidió, quién la ejecuta y en qué plazo."
  },

  /* Acordeón 1 — Estrategias de seguimiento continuo */
  {
    type  : "accordion",
    header: "Estrategias de seguimiento continuo",
    open  : false,
    text  :
      "* Revisión periódica de indicadores de desempeño.  \\n" +
      "* Reuniones de seguimiento con el equipo docente.  \\n" +
      "* Uso de plataformas y analíticas digitales para datos en tiempo real.  \\n" +
      "* Bitácoras y registros de aula para evidencias cualitativas."
  },

  /* Párrafo 4 — Ajustes, participación y sostenibilidad (≈300 palabras) */
  {
    type: "paragraph",
    text:
      "El verdadero valor del seguimiento se concreta cuando los datos conducen a decisiones: ajustar metodologías, introducir nuevos recursos, reprogramar actividades o incluso replantear objetivos si cambian las condiciones del contexto. Este enfoque adaptativo previene la obsolescencia del currículo y protege la inversión académica realizada en su diseño. Para que los ajustes sean legítimos y sostenibles deben involucrar a todos los actores educativos: docentes, estudiantes, familias y directivos. Espacios de retroalimentación (encuestas breves, foros, grupos focales) permiten recoger percepciones sobre la pertinencia de las actividades, la carga de trabajo o las barreras de acceso tecnológico. La participación amplia no solo mejora la calidad de la información; también fortalece el sentido de corresponsabilidad y el compromiso con la implementación. Un proyecto que se revisa colectivamente tiende a sostenerse mejor en el tiempo porque las mejoras responden a necesidades compartidas. Convertir los ciclos de seguimiento en práctica institucional —por ejemplo, revisiones bimestrales documentadas— consolida una cultura de mejora continua que mantiene al currículo actualizado, relevante y centrado en los aprendizajes."
  },

  /* Acordeón 2 — Acciones de ajuste y sostenibilidad */
  {
    type  : "accordion",
    header: "Acciones derivadas del seguimiento",
    open  : false,
    text  :
      "* Ajustar metodologías o secuencias didácticas.  \\n" +
      "* Incorporar / redistribuir recursos materiales y tecnológicos.  \\n" +
      "* Modificar actividades o cargas de trabajo según evidencias.  \\n" +
      "* Reorientar objetivos ante cambios de contexto.  \\n" +
      "* Involucrar a estudiantes, familias y comunidad en la toma de decisiones."
  }
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
          href: "https://www.youtube.com/watch?v=2-Pf2LA9l_o", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Fases del proyecto curricular. https://www.youtube.com/watch?v=MZ17wltJPVs",
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
  "De Alba Ceballos, A. (2018). *Teoría curricular: Nuevas tendencias y perspectivas.* Ciudad de México: Siglo XXI Editores.",
  "Díaz Barriga, A. (2018). *Metodología de diseño curricular: Un enfoque centrado en competencias.* Ciudad de México, México: Editorial Trillas.",
  "Gimeno Sacristán, J. (2017). *El currículum: Una reflexión sobre la práctica.* Madrid, España: Ediciones Morata.",
  "Zabalza, M. Á. (2019). *Diseño y desarrollo curricular: Cómo planificar e implementar el currículo en la educación superior.* Madrid, España: Narcea Ediciones."
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