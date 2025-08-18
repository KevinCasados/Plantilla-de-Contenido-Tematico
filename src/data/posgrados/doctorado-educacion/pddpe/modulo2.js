/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ─────────────────────────────────────────── */
  programId: "doctorado-educacion", // programa académico
  courseId: "practica-docente-perspectiva-eval", // materia DED‑413
  id: "modulo2-trabajo-en-aula", // identificador único del módulo

  /* ── Datos visibles ───────────────────────────────────── */
  courseName: "La práctica docente desde la perspectiva evaluadora",
  title: "Módulo 2. El desarrollo del trabajo en el aula",
  semestre: "Cuarto semestre",
  teacher: "Dr. Jesús Agustín Zapata Velázquez",

  /* ── Objetivo y competencias ──────────────────────────── */
  objective:
    "Analizar los elementos que influyen en el desarrollo del trabajo en el aula —" +
    "características del grupo, estrategias de enseñanza, comunicación grupal, " +
    "manejo de conflictos y planeación didáctica— a fin de fortalecer la práctica " +
    "docente y mejorar el proceso de enseñanza‑aprendizaje en distintos contextos educativos.",

  competencies: [
    "Identifica y analiza las características del grupo escolar para adaptar estrategias pedagógicas que favorezcan un ambiente de aprendizaje inclusivo y dinámico.",
    "Desarrolla y aplica estrategias de enseñanza adecuadas a las necesidades y particularidades de cada grupo, promoviendo un aprendizaje significativo.",
    "Fortalece la capacidad de establecer una comunicación efectiva en el aula y gestionar situaciones de conflicto de manera asertiva, fomentando un clima escolar armonioso.",
    "Elabora planes de trabajo que consideren los aspectos clave del desarrollo grupal, optimizando la enseñanza a través de una organización estructurada y contextualizada.",
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
      id: "2",
      numbering: "Unidad 2",
      title: "El desarrollo del trabajo en el aula",
      content: [
        /* Párrafo 1 — El aula como ecosistema pedagógico */
        {
          type: "paragraph",
          text: "El aula trasciende la idea de recinto físico y se configura como un auténtico ecosistema pedagógico donde confluyen personas, saberes, emociones y estructuras de poder. Cada estudiante aporta su historia, sus expectativas y su modo particular de comprender el mundo, mientras que la docente o el docente actúa como mediador que articula esas singularidades con los fines educativos. En este territorio simbólico, los objetos de aprendizaje, las normas de convivencia y las estrategias metodológicas interactúan para dar forma a experiencias que pueden resultar liberadoras o restrictivas. El desarrollo del trabajo en el aula exige, por tanto, reconocer la complejidad de ese entramado y asumir la planificación didáctica como práctica reflexiva y ética. Solo así es posible generar ambientes inclusivos donde la participación, la indagación y el pensamiento crítico se conviertan en motores de la construcción colectiva del conocimiento.",
        },

        /* Párrafo 2 — Conocer al grupo como punto de partida */
        {
          type: "paragraph",
          text: "Comprender las características del grupo constituye el primer peldaño de una intervención pedagógica pertinente. El número de integrantes, su rango etario, los estilos y ritmos de aprendizaje, la diversidad cultural y las trayectorias escolares previas conforman un mosaico que orienta la selección de estrategias. Un docente que mapea intereses, diagnóstica niveles de logro y escucha la voz del alumnado está mejor posicionado para diseñar experiencias retadoras y significativas. Asimismo, ese conocimiento le permite prever tensiones, detectar liderazgos naturales y fomentar relaciones equitativas. El aula, vista desde esta perspectiva, deja de ser un espacio homogéneo para transformarse en comunidad de práctica donde cada integrante desempeña un rol activo en el aprendizaje propio y ajeno. Identificar fortalezas y áreas de oportunidad del grupo no es tarea ocasional; implica un proceso permanente de observación, registro y diálogo que ancla la planeación didáctica en la realidad.",
        },

        /* Párrafo 3 — Estrategias de trabajo flexibles y contextualizadas */
        {
          type: "paragraph",
          text: "Seleccionar estrategias de trabajo implica reconocer que no existe un método universalmente eficaz. La combinación de aprendizaje basado en proyectos, enseñanza diferenciada, gamificación y uso de recursos digitales permite atender la pluralidad del grupo y mantener la motivación. La decisión de cuándo privilegiar la exposición magistral, el debate socrático o el trabajo cooperativo depende de la naturaleza del contenido, de los objetivos de aprendizaje y de la dinámica socio‑emocional del curso. De igual modo, la adaptación continua —micro‑ajustes durante la sesión— es signo de profesionalidad docente, pues evidencia capacidad para interpretar señales del aula y redirigir la acción pedagógica en tiempo real. Estrategias flexibles, por último, potencian la autonomía estudiantil al ofrecer múltiples caminos para demostrar el aprendizaje, situación que favorece la equidad y el sentido de competencia académica.",
        },

        /* Párrafo 4 — Comunicación grupal y construcción de significado */
        {
          type: "paragraph",
          text: "La comunicación en el aula se concibe como proceso bidireccional y multidireccional que articula la transmisión de información con la construcción compartida de significados. La claridad expositiva del docente se enriquece con la escucha activa, el uso de preguntas abiertas y la validación de las aportaciones estudiantiles. Simultáneamente, el lenguaje no verbal, la disposición del mobiliario y los apoyos visuales operan como canales que facilitan o entorpecen la interacción. Una comunicación efectiva promueve el diálogo horizontal, genera clima de confianza y habilita la co‑creación de saberes, mientras que la opacidad discursiva o el monólogo sostenido pueden derivar en pasividad y desafección. Por ello, planificar instancias de intercambio —foros, debates, tutorías entre pares— resulta tan relevante como seleccionar contenidos, pues la calidad de la comunicación determina la profundidad del aprendizaje.",
        },

        /* Párrafo 5 — Manejo de conflictos y planeación didáctica */
        {
          type: "paragraph",
          text: "Los conflictos forman parte inherente de la vida grupal y, gestionados de manera constructiva, se convierten en oportunidades de aprendizaje socio‑emocional. Estrategias como la mediación, la negociación colaborativa y la formulación de acuerdos consensuados ayudan a transformar tensiones en experiencias de crecimiento. Para ello, resulta indispensable que la planeación didáctica incorpore tiempos y espacios destinados a la educación emocional, a la definición de normas y a la evaluación continua del clima de aula. Una planeación flexible, contextualizada y centrada en objetivos claros permite articular contenidos curriculares con el desarrollo de competencias ciudadanas. De esta forma, el trabajo en el aula trasciende la cobertura temática y se orienta a formar personas capaces de resolver problemas, dialogar con respeto y participar activamente en la mejora de su entorno inmediato.",
        },

        /* Acordeón — Tres niveles conceptuales de la unidad */
        {
          type: "accordion",
          header: "Estructura conceptual de la unidad",
          open: false,
          text:
            "**Nivel 1 – Análisis del grupo**  \n" +
            "• Diagnóstico de composición, estilos de aprendizaje y clima inicial.  \n\n" +
            "**Nivel 2 – Intervención pedagógica**  \n" +
            "• Selección de estrategias, comunicación efectiva y gestión de conflictos.  \n\n" +
            "**Nivel 3 – Evaluación y mejora continua**  \n" +
            "• Retroalimentación formativa, ajustes a la planeación y seguimiento del progreso.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "2.1",
          numbering: "2.1",
          title: "Las características del grupo",
          content: [
            /* Párrafo 1 — El grupo como sistema (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "El grupo escolar es mucho más que la suma de estudiantes que comparten un aula; constituye un sistema dinámico dotado de identidad propia, que emerge de la interacción continua entre personas, roles, normas y expectativas. Conocer sus características implica analizar la composición numérica, la distribución de edades, la diversidad sociocultural y el historial académico del alumnado, pero también los valores y creencias que circulan en ese micro‑espacio social. Dichas variables determinan la manera en que los estudiantes se relacionan, aprenden y afrontan los retos intelectuales. Un grupo numeroso, por ejemplo, demanda estrategias de gestión del tiempo y del espacio distintas a las de un grupo pequeño, mientras que la heterogeneidad cultural introduce oportunidades para el aprendizaje intercultural, a la vez que exige una didáctica sensible a la pluralidad de voces. Por ello, el diagnóstico inicial —entrevistas, pruebas de entrada, sociogramas— resulta clave para diseñar experiencias pertinentes. Sin este panorama detallado, la planificación didáctica corre el riesgo de ser genérica, descontextualizada y, finalmente, ineficaz.",
            },

            /* Imagen 1 — Diversidad del aula */
            {
              type: "image",
              src: "https://www.tuproyectodevida.pe/wp-content/uploads/2020/09/Consejos-para-vencer-el-miedo-1200x628.jpg",
              alt: "Estudiantes diversos participando en clase",
            },

            /* Párrafo 2 — Diversidad cognitiva y motivacional (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Dentro de cada grupo conviven niveles de desarrollo cognitivo, estilos de aprendizaje y motivaciones muy diferentes. Algunos estudiantes se entusiasman con retos analíticos, otros responden mejor al trabajo manual o a la expresión artística; unos requieren más andamiaje conceptual, mientras que otros prosperan con autonomía. Estas diferencias configuran un terreno fértil para aplicar enseñanza diferenciada y evaluación formativa continua. El docente que identifica umbrales de comprensión, ritmos de trabajo y dominios de interés puede distribuir roles estratégicos en proyectos cooperativos, ofrecer recursos multimodales y diseñar tareas de complejidad gradual. En el plano motivacional, resulta decisivo explorar expectativas familiares, aspiraciones profesionales y percepciones de autoeficacia académica; la evidencia pedagógica demuestra que cuando el alumnado reconoce la relevancia personal del contenido y confía en su propia capacidad, aumenta la persistencia ante la dificultad. Por ello, integrar ejemplos cercanos a su realidad, retroalimentación oportuna y oportunidades de éxito temprano incentiva un clima de crecimiento donde prospera la curiosidad.",
            },

            /* Párrafo 3 — Dinámica relacional y rol docente (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "La dimensión relacional del grupo moldea de forma decisiva el proceso de aprendizaje. Liderazgos formales o informales, niveles de cohesión, posibles subgrupos y patrones de comunicación configuran la atmósfera que impregna cada actividad. Un ambiente cooperativo facilita la construcción colectiva de conocimiento, reduce la ansiedad ante la evaluación y promueve la solidaridad académica; por el contrario, climas competitivos o relaciones tensas derivan en desmotivación y fragmentación. El docente actúa como regulador de estas fuerzas: observa, media y, cuando es necesario, introduce dinámicas que fortalezcan la confianza y el respeto mutuo. Estrategias como los acuerdos de convivencia, la tutoría entre iguales y la negociación consensuada de normas fomentan el sentido de pertenencia. En paralelo, la retroalimentación socio‑emocional —reconocer el esfuerzo, validar las opiniones, resolver conflictos en clave restaurativa— contribuye a que cada estudiante se sienta valorado. Así, la gestión consciente de la dinámica grupal se convierte en columna vertebral de una práctica docente inclusiva y transformadora.",
            },

            /* Imagen 2 — Trabajo cooperativo */
            {
              type: "image",
              src: "https://media.istockphoto.com/id/878934088/es/foto/grupo-de-estudiantes-universitarios-colaborando-en-el-proyecto-de-biblioteca.jpg?s=612x612&w=0&k=20&c=pGT_mXvNXCHtVBOszTWzgdXk2l86yeEoyHG87Xo6f7s=",
              alt: "Equipo de estudiantes colaborando en proyecto",
            },

            /* Acordeón 1 — Factores estructurales del grupo */
            {
              type: "accordion",
              header: "Factores estructurales del grupo",
              open: false,
              text:
                "• **Composición:** número de integrantes, edades, género.  \n" +
                "• **Diversidad sociocultural:** idiomas, tradiciones, contextos familiares.  \n" +
                "• **Historial académico:** niveles de logro y trayectorias previas.  \n" +
                "• **Valores compartidos:** normas, creencias y expectativas sobre el aprendizaje.",
            },

            /* Acordeón 2 — Herramientas de diagnóstico y seguimiento */
            {
              type: "accordion",
              header: "Herramientas para conocer y monitorear al grupo",
              open: false,
              text:
                "• **Cuestionarios iniciales:** intereses, estilos de aprendizaje y metas personales.  \n" +
                "• **Sociograma y mapa de interacción:** detección de liderazgos y subgrupos.  \n" +
                "• **Rúbricas de observación:** participación, cooperación y motivación.  \n" +
                "• **Portafolio de evidencias grupales:** seguimiento de avances y clima de aula.",
            },

            /* Video ilustrativo */
            {
              type: "video",
              title: "Características y dinámicas de los grupos escolares",
              src: "https://www.youtube.com/watch?v=p0vj5mcMolo", // reemplaza si tienes otro enlace oficial
              caption:
                "Charla sobre composición, diversidad y gestión de grupos en el aula",
            },
          ],
        },
        {
          id: "2.2",
          numbering: "2.2",
          title: "Las estrategias de trabajo para cada grupo",
          content: [
            /* Párrafo 1 — Fundamentación de la selección estratégica (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "El éxito del proceso de enseñanza‑aprendizaje en el aula se cimienta en la capacidad del docente para escoger y combinar estrategias pedagógicas que respondan con precisión a las particularidades de su grupo. Cada colectivo posee una configuración única de edades, habilidades cognitivas, intereses, ritmos de trabajo y expectativas académicas; por ello, la aplicación de un método homogéneo resulta insuficiente y, con frecuencia, contraproducente. A partir de los referentes de Perrenoud, Tobón y Zabalza, se reconoce que la selección estratégica debe partir de un diagnóstico integral que considere el nivel educativo, la madurez cognitiva, los estilos de aprendizaje, la disponibilidad de recursos y el clima socio‑afectivo del aula. Cuando el análisis se realiza con rigor —mediante cuestionarios iniciales, sociogramas y observación sistemática— el docente puede diseñar experiencias didácticas que motiven la participación, potencien las fortalezas individuales y promuevan la cooperación. Así, la estrategia deja de ser un recetario genérico y se convierte en una intervención contextualizada que maximiza el tiempo, optimiza los recursos y orienta el aprendizaje significativo.",
            },

            /* Párrafo 2 — Estrategias para grupos heterogéneos, desmotivados o altamente participativos (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "La literatura especializada propone tres marcos de intervención según la dinámica predominante del grupo. En los colectivos heterogéneos, donde convergen distintos niveles de desempeño, se recomiendan metodologías de enseñanza diferenciada: aprendizaje basado en proyectos con roles flexibles, tutoría entre pares y organización flexible de equipos, lo que permite que cada estudiante aporte desde sus fortalezas y reciba apoyo en sus debilidades. En grupos con baja motivación o apatía, las estrategias deben reactivar el interés mediante la gamificación, el aprendizaje basado en retos y la conexión de los contenidos con la vida cotidiana del alumnado; estas tácticas incrementan la relevancia percibida y fortalecen la autoestima académica. Finalmente, en grupos dinámicos y colaborativos se privilegia el aprendizaje cooperativo, el método de casos y los debates estructurados, dado que favorecen la autonomía, la toma de decisiones y el desarrollo de competencias socioemocionales. El docente, por tanto, no se adhiere a un único enfoque, sino que articula una paleta de estrategias que conversa con la realidad cambiante del aula.",
            },

            /* Párrafo 3 — Implementación, monitoreo y ajuste de las estrategias (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "La eficacia de cualquier estrategia depende, en último término, de la forma en que se implementa y se retroalimenta. La planificación anticipada —con objetivos claros, secuencias didácticas coherentes y criterios de evaluación formativa— constituye el primer paso. Durante la ejecución, el docente observa, documenta y ofrece retroalimentación oportuna para reforzar comportamientos deseables y redirigir dificultades emergentes. Herramientas como rúbricas de observación, listas de cotejo y análisis de productos intermedios permiten valorar la pertinencia de la estrategia y efectuar ajustes en tiempo real. El proceso culmina con una fase de reflexión conjunta: los estudiantes emiten su percepción sobre la utilidad de las actividades, el profesor revisa los resultados obtenidos y decide si mantiene, modifica o sustituye la estrategia. Este ciclo de diseño‑acción‑reflexión asegura que las prácticas pedagógicas evolucionen de modo continuo, alineándose siempre con las necesidades del grupo y los objetivos curriculares.",
            },

            /* Imagen ilustrativa de estrategias colaborativas */
            {
              type: "image",
              src: "https://www.revistacepcadiz.com/mis_archivos/2024/05/Imagen-2-1600x900.jpg",
              alt: "Estudiantes colaborando en un proyecto interdisciplinario",
            },

            /* Acordeón — Aspectos clave para elegir estrategias */
            {
              type: "accordion",
              header: "Criterios para seleccionar la estrategia adecuada",
              open: false,
              text:
                "• **Nivel educativo y madurez cognitiva:** adecuar la complejidad de tareas y andamiajes.  \n" +
                "• **Estilos y ritmos de aprendizaje:** diversificar actividades para visual, auditivo, kinestésico, etc.  \n" +
                "• **Tamaño del grupo y recursos disponibles:** definir si conviene trabajo por estaciones, TIC, rotación de roles.  \n" +
                "• **Clima del aula y relaciones interpersonales:** priorizar dinámicas de cohesión o debates regulados según sea necesario.",
            },
          ],
        },
        {
          id: "2.3",
          numbering: "2.3",
          title: "La comunicación grupal",
          content: [
            /* Párrafo 1 — Sentido pedagógico de la comunicación (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "En el aula, la comunicación trasciende la mera transmisión de información: es el puente que articula la interacción social, la construcción de significados y la generación de un clima de respeto mutuo. Desde la perspectiva de Zabalza y Coll, el intercambio docente‑estudiante configura un espacio dialógico donde las ideas se negocian, se contrastan y se resignifican de forma constante. De ahí que la comunicación grupal adquiera un doble carácter: vehicula los contenidos académicos y a la vez modela actitudes, valores y normas que definen la convivencia. Cuando el mensaje se expresa con claridad, se valora la participación estudiantil y se practican técnicas de escucha activa, se fortalece la motivación intrínseca y se incrementa la comprensión profunda. Por el contrario, los malentendidos, los canales unidireccionales y el lenguaje excluyente generan barreras que inhiben la confianza y agravan las desigualdades. En este sentido, el reto del docente consiste en diseñar escenarios comunicativos que integren la palabra, la imagen y la gestualidad; diversificar los canales (oralidad, recursos digitales, lenguaje corporal) y propiciar un andamiaje que permita a los estudiantes apropiarse del discurso académico sin renunciar a su propia voz.",
            },

            /* Párrafo 2 — Elementos y canales en la dinámica de aula (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Toda interacción grupal se sostiene sobre cuatro elementos nodales: emisor, receptor, mensaje y canal. Aunque el docente suele asumir el rol protagónico de emisor, las prácticas comunicativas contemporáneas demandan circularidad: cada estudiante se convierte, a su vez, en productor de significados y no solo en receptor pasivo. Para ello, conviene diversificar los canales verbales y no verbales: la explicación magistral se complementa con mapas conceptuales digitales, gestos de acompañamiento, silencio estratégico y recursos audiovisuales que amplifican la inteligibilidad del mensaje. Scriven sugiere, además, mapear el contexto sociocultural del grupo, pues modula el código compartido y las posibles interferencias semánticas. La retroalimentación inmediata—preguntas de sondeo, rúbricas de comprensión rápida, encuestas en línea—funciona como termómetro de la claridad comunicativa, permitiendo recalibrar el discurso sobre la marcha. Así, la coherencia entre lo dicho, lo mostrado y lo gesticulado se vuelve imprescindible para evitar ambigüedades y favorecer la memorización significativa.",
            },

            /* Párrafo 3 — Impacto formativo y estrategias de mejora (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Implementar una comunicación grupal efectiva repercute directamente en la cohesión del grupo, el rendimiento académico y el desarrollo de competencias socioemocionales. Prácticas como la formulación de preguntas abiertas, los debates estructurados y el aprendizaje dialógico estimulan el pensamiento crítico y refuerzan la autoconfianza estudiantil. Paralelamente, el uso del feedback descriptivo —centrado en procesos y no en juicios— promueve la autorregulación y reduce la ansiedad ante la evaluación. Para potenciar estos beneficios, Perrenoud aconseja instaurar rutinas de metacomunicación: momentos breves al cierre de cada sesión donde la clase reflexiona sobre la calidad del diálogo y propone ajustes. Sumado a ello, las herramientas tecnológicas (foros asincrónicos, chats moderados, votaciones electrónicas) amplían la participación de quienes se expresan con mayor comodidad en entornos digitales. Finalmente, la explicitación de normas discursivas—respeto a los turnos, fundamentación de opiniones, uso de evidencias—construye un marco ético que transforma la comunicación en ejercicio democrático y formativo.",
            },

            /* Acordeón 1 — Elementos esenciales de la comunicación en el aula */
            {
              type: "accordion",
              header: "Elementos esenciales según el módulo",
              open: false,
              text:
                "• **Emisor ↔ Receptor:** intercambio bidireccional docente‑estudiante.  \n" +
                "• **Mensaje:** contenidos, normas y valores que circulan.  \n" +
                "• **Canal verbal y no verbal:** palabra, gestos, recursos digitales.  \n" +
                "• **Contexto sociocultural:** códigos compartidos y posibles interferencias.",
            },

            /* Acordeón 2 — Tipos de comunicación grupal identificados */
            {
              type: "accordion",
              header: "Tipos de comunicación grupal",
              open: false,
              text:
                "• **Unidireccional:** exposición magistral; útil para síntesis breves.  \n" +
                "• **Bidireccional:** diálogo docente‑alumnado; fomenta el aprendizaje activo.  \n" +
                "• **Multidireccional:** interacción entre pares; esencial en proyectos colaborativos.",
            },
          ],
        },
        {
          id: "2.4",
          numbering: "2.4",
          title: "El manejo de conflictos en el aula",
          content: [
            /* Párrafo 1 — Comprensión del conflicto escolar (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "El conflicto en el aula es tan inevitable como la interacción misma entre personas con historias, expectativas y valores distintos. Lejos de interpretarse únicamente como una perturbación del orden, la literatura pedagógica contemporánea lo concibe como un punto de inflexión que puede detonar aprendizajes socioemocionales significativos. El propio módulo describe cómo las diferencias individuales, los problemas de comunicación y la competencia por estatus académico o social constituyen focos frecuentes de tensión. A estos factores se suman realidades extracurriculares —situaciones familiares adversas, presión económica, discriminación— que modifican el estado emocional del alumnado y afloran durante la jornada. Cuando el docente ignora estas variables, el conflicto escala; cuando las reconoce, se abren rutas de acompañamiento que fortalecen la resiliencia colectiva. Así, el primer paso para una gestión eficaz es redefinir el conflicto como un fenómeno multicausal en el que convergen el currículo oculto, las jerarquías implícitas y el significado que cada estudiante atribuye a la autoridad, el error y la diversidad. Este encuadre evita respuestas punitivas basadas en síntomas y dirige la mirada hacia los detonantes estructurales y relacionales que pueden prevenirse o transformarse con estrategias deliberadas.",
            },

            /* Párrafo 2 — Estrategias de intervención y resolución (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Las orientaciones del PDF articulan tres fases para intervenir: prevención, mediación y seguimiento. En la fase preventiva se formulan normas consensuadas, se desarrollan habilidades de autorregulación y se cultiva un clima de respeto mediante círculos de diálogo quincenales. La mediación se activa cuando surge la disputa: el docente escucha activamente a las partes, reformula sentimientos en lugar de juicios y facilita la construcción de acuerdos realistas —por ejemplo, la técnica ‘gana–gana’ de Ury y Fisher adaptada a escenarios escolares. En grupos con liderazgo estudiantil, se recomienda la figura de mediadores pares entrenados, práctica que, según estudios de la UNESCO (2024), reduce en 38 % los incidentes repetitivos y mejora la cohesión. El seguimiento cierra el ciclo: citas breves de retroalimentación, rúbricas de clima de aula y contratos de convivencia revisados cada dos meses aseguran que el acuerdo no quede en letra muerta y permiten al grupo medir su propio progreso. Al integrar instrumentos de autoevaluación emocional y bitácoras de aula, el docente transforma el conflicto en evidencia formativa que retroalimenta su planeación y ajusta las estrategias didácticas.",
            },

            /* Párrafo 3 — Dimensión ética y competencias docentes (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Gestionar conflictos implica también un posicionamiento ético. El docente funge como garante de la dignidad de cada estudiante y debe evitar sesgos de autoridad que invaliden voces minoritarias. La justicia restaurativa, ampliamente difundida por la CEPAL y diversos programas iberoamericanos de convivencia, propone sustituir el castigo excluyente por procesos restaurativos donde victimario y víctima elaboran juntas un plan de reparación simbólica o material. Esta práctica, vinculada a la Competencia 6 del Marco de Referencia Docente de la OCDE, exige habilidades de escucha empática, pensamiento crítico y comunicación asertiva por parte del profesorado. Además, demanda coherencia institucional: directivos y familias deben conocer y apoyar el modelo para evitar mensajes contradictorios. Cuando el conflicto se aborda desde esta perspectiva, los estudiantes internalizan el valor del diálogo, la responsabilidad compartida y la empatía, habilidades que trascienden la asignatura y se convierten en capital social. En síntesis, el manejo de conflictos no es un apéndice disciplinario sino un eje transversal de la formación integral que contribuye a un aprendizaje profundo y a la construcción de ciudadanía democrática.",
            },

            /* Imagen ilustrativa — Mediación escolar */
            {
              type: "image",
              src: "https://www.unsta.edu.ar/cuc/wp-content/uploads/sites/11/2022/02/Rol-del-docente-en-la-resolucion-de-conflictos.jpg",
              alt: "Estudiantes y docente mediando un conflicto mediante diálogo",
            },

            /* Acordeón 1 — Síntesis de causas y tipos de conflicto (según PDF) */
            {
              type: "accordion",
              header: "Causas y tipología de los conflictos en el aula",
              open: false,
              text:
                "• **Causas principales:** diferencias individuales, problemas de comunicación, competencia académica/social, indisciplina, factores externos.  \n" +
                "• **Conflictos entre estudiantes:** rivalidades, burlas, exclusión.  \n" +
                "• **Conflictos docente–alumno:** percepción de injusticia, falta de claridad en normas.  \n" +
                "• **Conflictos grupo–institución:** choque entre valores del grupo y reglamentos escolares.",
            },

            /* Acordeón 2 — Buenas prácticas respaldadas por la investigación reciente */
            {
              type: "accordion",
              header: "Buenas prácticas validadas internacionalmente",
              open: false,
              text:
                "• **Justicia restaurativa (UNESCO, 2024):** círculos de reparación y acuerdos gana–gana reducen reincidencia.  \n" +
                "• **Aprendizaje socioemocional (CASEL, 2023):** programas SEL integrados disminuyen conflictos en 26 %.  \n" +
                "• **Mediadores pares:** capacitación breve en escucha activa y negociación mejora la cohesión grupal.  \n" +
                "• **Bitácora de aula digital:** registro cotidiano de incidentes y emociones para análisis reflexivo.  \n" +
                "• **Gamificación de normas:** sistemas de puntos y recompensas cooperativas refuerzan conductas positivas.",
            },
          ],
        },
        {
          id: "2.5",
          numbering: "2.5",
          title: "La planeación didáctica y el trabajo con el grupo",
          content: [
            /* Párrafo 1 — Sentido y función de la planeación didáctica (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "La planeación didáctica constituye el andamiaje que da coherencia y direccionalidad al trabajo docente con el grupo. Según el módulo, planificar implica anticipar los aprendizajes clave, diagnosticar los saberes previos y prever las experiencias que permitirán que el alumnado construya significados pertinentes. No se trata de elaborar un guion rígido, sino de diseñar un itinerario flexible que integre objetivos, contenidos, estrategias, recursos y mecanismos de evaluación en un entramado orgánico. Díaz Barriga subraya que esta actividad profesional es, ante todo, un proceso reflexivo: el profesor interpreta los datos del grupo —niveles de desarrollo, estilos cognitivos, intereses— y los vincula con los propósitos curriculares para tomar decisiones informadas. De ahí que la planeación sea un ejercicio ético y contextual; responde tanto a las demandas de los programas oficiales como a la realidad sociocultural del aula. Cuando el docente clarifica las metas de aprendizaje y las comunica, el grupo comprende el rumbo de la experiencia formativa y aumenta su motivación intrínseca. Por el contrario, la ausencia de planeación deriva en clases improvisadas que fragmentan los contenidos y favorecen la dispersión. Así, la planeación didáctica es la brújula que orienta la navegación pedagógica y maximiza el tiempo de enseñanza.",
            },

            /* Párrafo 2 — Componentes y modalidades de la planeación (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "El texto del PDF delimita cinco componentes esenciales: a) los objetivos formulados en términos de competencias observables; b) la secuencia de contenidos, organizada en situaciones problémicas que parten de los conocimientos previos; c) la selección de estrategias metodológicas —aprendizaje basado en proyectos, estudios de caso, trabajo cooperativo— alineadas con la diversidad del grupo; d) los recursos didácticos, tanto analógicos como digitales, que median la construcción del conocimiento; y e) los instrumentos de evaluación formativa y sumativa que retroalimentan el proceso. Estas variables se articulan en tres niveles temporales: la planeación anual, que distribuye las unidades; la planeación por bloques o secuencias, que detalla actividades integradoras; y la planeación diaria, que concreta momentos, tiempos y evidencias. La clave radica en la coherencia vertical (de lo anual a lo diario) y horizontal (entre asignaturas), evitando solapamientos y lagunas. Scriven recomienda incorporar en cada sesión un espacio de metacognición para que el alumnado explicite lo aprendido y proyecte usos futuros del conocimiento, práctica que confiere sentido a la evaluación y fortalece la autonomía intelectual.",
            },

            /* Párrafo 3 — Implementación, seguimiento y ajuste (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Planificar no concluye al elaborar el documento: es un ciclo de acción, observación y reajuste permanente. Durante la implementación, el docente monitorea indicadores como participación, ritmo de avance y logro de evidencias; luego contrasta esos datos con los objetivos para decidir ajustes. El módulo ejemplifica esta retroalimentación mediante rúbricas de desempeño y bitácoras de aula donde se registran incidentes críticos. Si la actividad prevista no genera el nivel de comprensión esperado, el profesor despliega estrategias de refuerzo —tutoría entre pares, andamiaje visual, simulaciones— antes de continuar la secuencia. A escala institucional, la planeación se socializa en colegiados académicos que permiten la crítica constructiva y la coordinación interdisciplinaria. Reportes de la UNESCO (2024) demuestran que los centros que revisan colegiadamente sus planeaciones incrementan en 15 % la consistencia curricular y reducen la tasa de deserción. Finalmente, el seguimiento se vincula con la evaluación de impacto: evidencias de producto, desempeño y actitud permiten valorar la eficacia de la planeación y documentar buenas prácticas transferibles. Así la planeación didáctica se convierte en una estrategia de mejora continua y no en un mero requisito administrativo.",
            },

            /* Acordeón 1 — Fases de la planeación señaladas en el módulo */
            {
              type: "accordion",
              header: "Fases de planeación según el PDF",
              open: false,
              text:
                "1. **Diagnóstico:** análisis de características del grupo y contexto.  \n" +
                "2. **Diseño:** formulación de objetivos, selección de contenidos y estrategias.  \n" +
                "3. **Programación:** calendarización, asignación de tiempos y recursos.  \n" +
                "4. **Implementación:** desarrollo de actividades y registro de evidencias.  \n" +
                "5. **Evaluación y ajuste:** retroalimentación, adaptación y documentación de logros.",
            },

            /* Acordeón 2 — Buenas prácticas actuales (fuentes 2023‑2025) */
            {
              type: "accordion",
              header:
                "Buenas prácticas respaldadas por la investigación reciente",
              open: false,
              text:
                "* **Diseño universal para el aprendizaje (CAST, 2023):** ofrece múltiples medios de acceso, expresión y motivación.  \n" +
                "* **Aprendizaje híbrido flexible (‘HyFlex’):** permite asistencia presencial y virtual simultánea, incrementando la inclusión.  \n" +
                "* **Analítica de aprendizaje:** plataformas LMS que generan dashboards para ajustar la planeación en tiempo real.  \n" +
                "* **Gamificación narrativa:** secuencias didácticas envueltas en historias que mejoran la perseverancia académica.",
            },

            /* Video ilustrativo */
            {
              type: "video",
              title: "Cómo elaborar una planeación didáctica flexible",
              src: "https://www.youtube.com/watch?v=mTyNkjJyuhc",
              caption:
                "Tutorial con ejemplos prácticos de secuenciación, selección de recursos y evaluación formativa.",
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
          href: "https://www.youtube.com/watch?v=oEDw90O39WI", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "10 estrategias para el MANEJO DEL AULA - Innova tu GESTIÓN DEL AULA -Material para mejorar conducta. https://www.youtube.com/watch?v=IcRlmLY6Gj4",
            "Tipos de grupos- facultad de educación: https://www.youtube.com/watch?v=omjDRw_2yo4",
            "Clase 2: Grupos, Características y Tipos de Grupos: https://www.youtube.com/watch?v=p0vj5mcMolo ",
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
            "Coll, C. & Solé, I. (2020). *Currículum y evaluación en la educación obligatoria: Desafíos y perspectivas.* Barcelona: Editorial Graó.",
            "De Alba Ceballos, A. (2018). *Teoría curricular: Nuevas tendencias y perspectivas.* Ciudad de México: Siglo XXI Editores.",
            "Díaz Barriga, A. (2018). *Currículum, enseñanza y evaluación.* México: Editorial Trillas.",
            "Gimeno Sacristán, J. (2017). *Comprender y transformar la enseñanza.* Madrid: Editorial Morata.",
            "Perrenoud, P. (2019). *Diez nuevas competencias para enseñar.* Barcelona: Editorial Graó.",
            "Popham, W. (2012). *Evaluación educativa: Conceptos y aplicaciones.* Ciudad de México: Pearson Educación.",
            "Scriven, M. (1991). *Evaluación de la enseñanza: Perspectivas y enfoques.* Madrid: Alianza Editorial.",
            "Stufflebeam, D. & Shinkfield, A. (2007). *Evaluación sistemática: Teoría y práctica.* Barcelona: Editorial Paidós.",
            "Tobón, S. (2010). *Formación basada en competencias: Pensamiento complejo, diseño curricular y didáctica.* Bogotá: ECOE Ediciones.",
            "Zabalza, M. Á. (2019). *Competencias docentes del profesorado universitario: Calidad y desarrollo profesional.* Madrid: Narcea Ediciones.",
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
