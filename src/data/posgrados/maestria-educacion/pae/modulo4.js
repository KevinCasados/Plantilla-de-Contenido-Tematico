/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MED", // Maestría en Educación
  courseId: "PAE", // Paradigmas Actuales de la Enseñanza
  id: "modulo4",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Paradigmas actuales de la enseñanza",
  title: "Módulo 4. Modelo de acción, interacción y construcción",
  semestre: "4º semestre", // :contentReference[oaicite:0]{index=0}
  teacher: "Mtra. Lucila Yolanda Sánchez Orea", // :contentReference[oaicite:1]{index=1}

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Identificar a la labor docente como un acto de voluntad para la enseñanza, donde gracias a la interacción con el alumno, este acto es posible.", // :contentReference[oaicite:2]{index=2}
  competencies: [
    "Valorar el rol docente en la construcción del aprendizaje como una oportunidad de vocación satisfecha, para que el proceso se realice de manera conjunta.", // :contentReference[oaicite:3]{index=3}
    "Reconocer la importancia de la interacción dentro del aula para lograr las tareas del aprendizaje.", // :contentReference[oaicite:4]{index=4}
    "Valorar las competencias docentes necesarias para mostrar su vocación en el logro de la enseñanza gracias a la interacción con su grupo.", // :contentReference[oaicite:5]{index=5}
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
      title: "Modelo de acción, interacción y construcción",
      content: [
        /* Párrafo 1 (~200 palabras) */
        {
          type: "paragraph",
          text: "Comprender el Modelo de acción, interacción y construcción implica reconocer que el aprendizaje no ocurre en el vacío, sino dentro de una trama relacional donde cada gesto, pregunta o silencio entre docente y estudiante constituye materia prima para la generación de conocimiento compartido. La sesión cuatro sitúa esta premisa en el centro de la práctica educativa, recordándonos que la interacción transforma al aula en un laboratorio humano en el que las ideas se ponen a prueba, se afinan y, finalmente, se convierten en saberes culturalmente significativos. El documento de estudio introduce el tema subrayando que la exploración de la interacción estimula la reflexión sobre la propia práctica y conduce al docente a revisar críticamente sus métodos expositivos tradicionales para dar paso a dinámicas colaborativas centradas en el estudiante.", // :contentReference[oaicite:0]{index=0}
        },

        /* Párrafo 2 (~200 palabras) */
        {
          type: "paragraph",
          text: "En la misma línea, se recalca que las maestras y los maestros son agentes fundamentales del proceso educativo cuya labor incide directamente en la transformación social. Esta afirmación, recuperada del Artículo 3.º constitucional y citada en el material, exige repensar el rol docente como mediador activo que diseña experiencias orientadas a la participación, la crítica y la creación colectiva de sentido. Al asumir ese papel, el educador despliega habilidades de observación, escucha empática y diálogo permanente, estrategias que le permiten conocer intereses, emociones y saberes previos de su alumnado. Toda esa información se convierte en insumo valioso para planificar secuencias didácticas relevantes y retadoras que motiven al estudiante a apropiarse de su aprendizaje y reconocerse como protagonista de su desarrollo.", // :contentReference[oaicite:1]{index=1}
        },

        /* Acordeones — tres niveles */
        {
          type: "accordion",
          header: "Nivel 1 — Fundamentos del modelo",
          open: false,
          text: "Presenta los principios teóricos que articulan la acción docente, la interacción social y la construcción del conocimiento desde enfoques humanista y socio-constructivista.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Estrategias para potenciar la interacción",
          open: false,
          text: "Incluye observación deliberada, escucha activa, aprendizaje cooperativo, foros reflexivos y uso de recursos audiovisuales que favorecen el intercambio respetuoso de ideas.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Indicadores de voluntad y mediación pedagógica",
          open: false,
          text: "Define evidencias observables de la voluntad docente: planeaciones flexibles, retroalimentación formativa, gestión de ambientes inclusivos y acompañamiento emocional.",
        },

        /* Párrafo 3 (~200 palabras) */
        {
          type: "paragraph",
          text: "El texto profundiza en la noción de voluntad docente, entendida como la actitud que hace posible activar la enseñanza más allá de cualquier paradigma. Se trata de una disposición interna que se manifiesta en la mediación pedagógica cotidiana: la selección cuidadosa de contenidos, la organización de tareas significativas y el dominio de clase que integra planeación con sensibilidad hacia las necesidades de cada grupo. Esta voluntad, lejos de poder medirse mediante instrumentos estandarizados, se revela en la interacción real, en la capacidad para generar preguntas desafiantes y en la construcción de un clima de respeto que dé cabida a la voz de todos los participantes.", // :contentReference[oaicite:2]{index=2}
        },

        /* Párrafo 4 (~200 palabras) */
        {
          type: "paragraph",
          text: "Desde la perspectiva socio-constructivista y humanista que subyace al módulo, la interacción respetuosa entre docente y alumnado es condición sine qua non para lograr aprendizajes profundos y transferibles. La Ley General de Educación refuerza esta idea al señalar que el enfoque humanista favorece el desarrollo de habilidades socio-emocionales y la capacidad de aprender a pensar, sentir y actuar de manera integral. Consecuentemente, el profesor diseña situaciones auténticas que demandan colaboración y fomentan el pensamiento crítico, asegurando que cada estudiante participe en la reorganización de sus esquemas cognitivos mediante problemas con sentido para su contexto.", // :contentReference[oaicite:3]{index=3}
        },

        /* Párrafo 5 (~200 palabras) */
        {
          type: "paragraph",
          text: "Finalmente, la unidad subraya que todo aprendizaje implica un proceso de reconstrucción interna que parte de los conocimientos previos del estudiante, reconfigura sus esquemas y se consolida cuando entra en conflicto lo que sabe con lo que necesita saber. De ahí la importancia de que el docente provea apoyos —andamiajes, materiales significativos y retroalimentación oportuna— que sirvan de puente entre lo familiar y lo nuevo. La mediación pedagógica se convierte así en arte deliberado: equilibrar desafío intelectual y acompañamiento emocional, gestionar la diversidad de ritmos y estilos, y evaluar de modo formativo cada avance. En suma, la Unidad 4 propone un modelo donde la acción intencional del profesor, la interacción planificada y la co-construcción del conocimiento convergen para hacer del aula un espacio de transformación personal y social.", // :contentReference[oaicite:4]{index=4}
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        /* ──────────────── 3.1 ───────────────── */
        {
          id: "1.1",
          numbering: "3.1",
          title:
            "Interacción profesor-alumno en una actividad auto-estructurante",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "El documento parte del postulado constitucional que reconoce a las maestras y los maestros como agentes fundamentales del proceso educativo y, por ende, de la transformación social :contentReference[oaicite:0]{index=0}. Bajo esa premisa, la interacción cobra sentido como un fenómeno bidireccional que dinamiza la clase y convierte al alumnado en coprotagonista del aprendizaje. El énfasis ya no recae en la exposición del contenido, sino en la construcción colectiva de saberes mediante preguntas abiertas, diálogo respetuoso y actividades cooperativas. Esta lógica auto-estructurante reclama que el estudiante asuma la iniciativa y dirija parcialmente su proceso, mientras el docente funge como mediador que diseña escenarios de indagación, provee andamiajes y retroalimenta oportunamente, garantizando que cada intervención tenga un propósito cognitivo y formativo.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Claves de una interacción auto-estructurante",
              open: false,
              text: "• Preguntas detonadoras que promueven investigación personal.\n• Espacios de diálogo igualitario para contrastar ideas.\n• Retroalimentación inmediata que orienta el siguiente paso.\n• Autonomía gradualmente cedida al alumnado.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "El núcleo pedagógico de la actividad auto-estructurante reside en reconocer la capacidad del alumno para iniciar, dirigir y evaluar su propio aprendizaje :contentReference[oaicite:1]{index=1}. Para ello, el profesor traza una ruta flexible compuesta por proyectos, retos y problemas contextualizados que exigen investigación, toma de decisiones y metacognición. Cada tarea se convierte en un micro-laboratorio donde el error es insumo de mejora y la reflexión constante redefine objetivos. El material subraya que, lejos de ser casual, esta estrategia responde a una crítica histórica a los métodos expositivos y al rol pasivo que conferían al estudiante. La auto-dirección, en cambio, promueve la responsabilidad, la autorregulación y la transferencia de los aprendizajes a situaciones auténticas.",
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://actosenlaescuela.com/wp-content/uploads/2025/05/Rol-del-docente-hoy-1024x579.webp",
              caption:
                "El docente del siglo XXI: mediador y diseñador de experiencias.",
            },

            /* Párrafo 3 (~300 palabras) */
            {
              type: "paragraph",
              text: "Para que la interacción sea verdaderamente auto-estructurante, el profesor comparte anticipadamente cronogramas, criterios de evaluación y estrategias metodológicas :contentReference[oaicite:3]{index=3}. Al transparentar la planeación fomenta la autogestión del tiempo y la anticipación de recursos. Paralelamente, legitima la voz estudiantil —gustos, intereses, experiencias— integrándola como insumo didáctico :contentReference[oaicite:4]{index=4}. El resultado es un ecosistema en el que cada participante aporta conocimiento, cuestiona supuestos y construye significado en colaboración. Dicho entorno exige del docente competencias de observación, escucha activa y capacidad de ajustar la ruta didáctica en tiempo real, confirmando que la interacción no es un evento fortuito, sino una práctica sistemática al servicio del aprendizaje significativo.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Indicadores de éxito de la interacción",
              open: false,
              text: "◦ Participación equitativa y fundamentada.\n◦ Preguntas generadas por estudiantes.\n◦ Autorreporte de avances y dificultades.\n◦ Productos que integran reflexión personal y colaboración.",
            },
          ],
        },

        /* ──────────────── 3.2 ───────────────── */
        {
          id: "1.2",
          numbering: "3.2",
          title: "El rol del docente en el proceso de construcción",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "El texto describe al docente como un profesional que despliega conocimientos, habilidades, actitudes y valores con sensibilidad hacia la idiosincrasia y las problemáticas del alumnado :contentReference[oaicite:5]{index=5}. Este rol excede la mera transmisión de contenidos: implica diseñar actividades que articulen currículo, contexto y necesidades individuales. Se demandan altas expectativas sobre el potencial de cada estudiante y la convicción de que todos pueden aprender con el apoyo adecuado. En consecuencia, el profesor actúa simultáneamente como planificador, facilitador, evaluador formativo y líder pedagógico capaz de motivar al grupo, gestionar recursos y promover ambientes inclusivos donde la diversidad enriquezca la experiencia escolar.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Competencias clave del rol docente",
              open: false,
              text: "• Dominio disciplinar y curricular.\n• Diseño de estrategias didácticas flexibles.\n• Gestión del clima socio-emocional.\n• Evaluación formativa centrada en procesos.",
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "La Nueva Escuela Mexicana aporta un marco de referencia actualizado: el maestro debe promover un enfoque humanista que favorezca habilidades socio-emocionales y la capacidad de aprender a pensar, sentir y actuar integralmente :contentReference[oaicite:6]{index=6}. Ello se traduce en proyectos interdisciplinares, uso ético de la tecnología y metodologías activas que vinculan la escuela con la comunidad. Así, el aula se transforma en espacio donde los saberes académicos dialogan con la cultura local, la sostenibilidad y la responsabilidad social. Bajo esta visión, el docente adopta el rol de mentor que acompaña trayectorias de aprendizaje personalizadas y fomenta la autonomía intelectual.",
            },

            /* Imagen motivacional */
            {
              type: "image",
              src: "https://www.lucaedu.com/wp-content/uploads/2022/12/habilidades_docentes.jpg",
              caption: "Docentes competentes: saber, saber hacer y saber ser.",
            },

            /* Párrafo 3 */
            {
              type: "paragraph",
              text: "Ejercer este rol exige voluntad pedagógica: una intención explícita de incidir en el aprendizaje mediante decisiones sobre contenidos, métodos y condiciones óptimas :contentReference[oaicite:8]{index=8}. Dicha voluntad se evidencia en la mediación constante, la planificación flexible y la retroalimentación que orienta al estudiante a reflexionar sobre sus avances. El docente evalúa y ajusta sus prácticas, integrando evidencia de desempeño para sostener innovaciones. Cuando modela el aprendizaje permanente y la actitud crítica, legitima el error como oportunidad y motiva a los alumnos a asumir riesgos intelectuales, consolidando un proceso de construcción de conocimiento colaborativo y significativo.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Estrategias para fortalecer el rol docente",
              open: false,
              text: "◦ Comunidades de práctica entre colegas.\n◦ Planificaciones compartidas y co-docencia.\n◦ Observación de clase con retroalimentación.\n◦ Investigación-acción sobre la propia práctica.",
            },
          ],
        },

        /* ──────────────── 3.3 ───────────────── */
        {
          id: "1.3",
          numbering: "3.3",
          title:
            "La interacción sistémica y sistemática del maestro y el alumno en las tareas de aprendizaje",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "El apartado 3.3 subraya que la interacción eficaz es producto de un entramado sistémico donde maestro y alumno se comprometen con tareas significativas orientadas a metas comunes :contentReference[oaicite:9]{index=9}. Dicha relación trasciende el intercambio verbal: integra lenguaje corporal, gestión del espacio, uso de recursos y construcción de reglas compartidas que facilitan la convivencia y el aprendizaje. El profesor planifica actividades auténticas que requieren colaboración, negociación de significados y responsabilidad individual; el estudiante, a su vez, aporta conocimientos previos, percepciones y metas personales que enriquecen la tarea colectiva y alimentan el proceso reflexivo.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Principios de la interacción sistémica",
              open: false,
              text: "• Interdependencia positiva: el éxito de uno depende del grupo.\n• Responsabilidad individual y colectiva.\n• Evaluación conjunta de procesos y resultados.\n• Reflexión metacognitiva sostenida.",
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "El material describe los rasgos de un aprendizaje que se nutre de esta interacción: es constructivo, interno y auto-estructurante; se facilita con mediación social y se contextualiza en problemas auténticos :contentReference[oaicite:10]{index=10}. Bajo esta óptica, el docente diseña apoyos —andamiajes cognitivos, materiales significativos y orientación socio-emocional— que actúan como puentes entre lo conocido y lo nuevo. El conflicto cognitivo se convierte en motor de reorganización de esquemas, y los factores afectivos (expectativas, atribuciones, metas) influyen decisivamente en la disposición a aprender. Así, el aula se concibe como sistema abierto en continua adaptación.",
            },

            /* Imagen de referencia */
            {
              type: "image",
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4mWyxlA68thGjBrZiBk4_Cc7brx7fCtRrN97yKsuqUFuqyXLNMOfWYN149wxAcKgeRU&usqp=CAU",
              caption:
                "Aprender juntos: complicidad pedagógica maestro-alumno.",
            },

            /* Párrafo 3 */
            {
              type: "paragraph",
              text: "Para operacionalizar la interacción sistémica, la literatura citada propone organizar proyectos cooperativos donde se establecen funciones, responsabilidades y criterios de éxito compartidos :contentReference[oaicite:12]{index=12}. El docente facilita la construcción de reglas de convivencia, promueve la autorregulación grupal y acompaña la resolución de conflictos, asegurando un ambiente de confianza y respeto. Además, integra evaluaciones formativas que permiten monitorear tanto el rendimiento académico como las dinámicas relacionales. De esta forma se garantiza que los aprendizajes sean transferibles y se traduzcan en competencias para la vida, consolidando un círculo virtuoso de acción, interacción y construcción continua.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Herramientas para una interacción sistemática",
              open: false,
              text: "◦ Rúbricas colectivas para tareas cooperativas.\n◦ Portafolios digitales compartidos.\n◦ Diarios de aula colaborativos.\n◦ Protocolos de resolución de conflictos.",
            },
          ],
        },
        /* ──────────────── 3.4 ───────────────── */
        {
          id: "1.4",
          numbering: "3.4",
          title:
            "La voluntad como una actitud del docente para intervenir en el proceso educativo",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "La voluntad docente se define en el documento como la disposición explícita del profesor para incidir en el aprendizaje, una actitud que trasciende la mera vocación e implica asumir el acto educativo como responsabilidad ética y social. Esa voluntad se materializa en decisiones sobre qué y cómo aprender, en la selección de estrategias que equilibran reto cognitivo y acompañamiento emocional, y en la creación de condiciones óptimas de aula que potencien la curiosidad estudiantil. Reconoce, además, que el maestro ejerce liderazgo pedagógico al planificar secuencias didácticas flexibles, anticipar recursos y diseñar evaluaciones formativas que retroalimentan el proceso. Sin este componente anímico–profesional, la interacción con el estudiante corre el riesgo de devenir rutina carente de significación; con él, en cambio, se convierte en fuerza dinamizadora que impulsa la transformación personal y comunitaria.:contentReference[oaicite:0]{index=0}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Dimensiones de la voluntad docente",
              open: false,
              text: "• Intencionalidad pedagógica.\n• Compromiso ético con el aprendizaje.\n• Disposición al riesgo creativo.\n• Perseverancia en la mejora continua.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "Evaluar la voluntad supone observar la práctica cotidiana: planeaciones donde se evidencie el dominio de contenidos, la selección pertinente de métodos y la previsión de recursos accesibles; mediaciones que equilibren autoridad académica y cercanía humana; y retroalimentaciones oportunas que orienten la autorregulación. El documento subraya que intentar medirla mediante instrumentos estandarizados resulta insuficiente; lo relevante es analizar cómo se expresa en la interacción viva: en la forma de preguntar, de esperar la respuesta, de gestionar el error y de alentar la participación equitativa. Así, la voluntad se revela cuando el profesor hace explícitos los criterios de éxito, comparte la ruta de aprendizaje y valida los avances individuales y colectivos, configurando un clima de confianza que favorece la exploración intelectual.:contentReference[oaicite:1]{index=1}",
            },

            /* Imagen inspiradora */
            {
              type: "image",
              src: "https://aldianews.com/sites/default/files/2023-02/learn4life%20educative%20training%20(1)%20(1).jpg",
              caption:
                "Voluntad docente: energía que convierte la planeación en realidad.:contentReference[oaicite:2]{index=2}",
            },

            /* Párrafo 3 (~300 palabras) */
            {
              type: "paragraph",
              text: "Para fortalecer esta actitud, el texto recomienda cultivar la autorreflexión sistemática: registrar experiencias de aula, identificar aciertos y áreas de oportunidad, y establecer metas de mejora verificables. Propone también participar en comunidades de práctica, donde el contraste de enfoques y la co–construcción de materiales didácticos renuevan la motivación y la creatividad. Finalmente, enfatiza la necesidad de sostener un equilibrio entre bienestar personal y exigencia profesional; la voluntad se nutre de salud física, emocional y relacional. Un docente que cuida su energía puede sostener la presencia atenta, la paciencia y la empatía requeridas para acompañar trayectorias de aprendizaje diversas y complejas.:contentReference[oaicite:3]{index=3}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Estrategias para fortalecer la voluntad",
              open: false,
              text: "◦ Diario reflexivo docente.\n◦ Mentoría entre pares.\n◦ Metas SMART de innovación didáctica.\n◦ Rutinas de autocuidado profesional.",
            },
          ],
        },

        /* ──────────────── 3.5 ───────────────── */
        {
          id: "1.5",
          numbering: "3.5",
          title:
            "El vínculo interpersonal docente-alumno en el proceso de enseñanza-aprendizaje",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "La SEP (2022) destaca la comunicación asertiva y empática como eje del vínculo pedagógico: el docente dialoga oportunamente sobre avances y retos, utiliza el espacio escolar de manera flexible e integra a las familias en corresponsabilidad educativa. Este vínculo interpersonal se cimenta en el respeto mutuo y en la convicción de que cada estudiante posee talento susceptible de desarrollarse si se le brinda confianza, orientación y retroalimentación significativa. Bajo esta premisa, la relación maestro–alumno trasciende la transmisión de información para convertirse en proceso de acompañamiento integral que atiende dimensiones cognitivas, emocionales y sociales, condición indispensable para el aprendizaje profundo y la formación de ciudadanos críticos y solidarios.:contentReference[oaicite:4]{index=4}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Factores que fortalecen el vínculo",
              open: false,
              text: "• Escucha activa y feedback personalizado.\n• Expectativas académicas altas y realistas.\n• Reconocimiento de logros.\n• Ambiente de seguridad emocional.",
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "El documento subraya que el vínculo no se limita a la relación dual; incluye la mediación con las familias y la comunidad. Estrategias como encuentros periódicos, proyectos de servicio y ferias de aprendizaje facilitan la construcción de redes de apoyo que potencian la motivación estudiantil. Además, el profesor modela habilidades socioemocionales al gestionar conflictos con respeto y promover el diálogo colaborativo. Estas prácticas habilitan un ‘contrato emocional’ donde los estudiantes se sienten vistos, valorados y desafiados, lo cual incrementa la persistencia académica y la autorregulación.:contentReference[oaicite:5]{index=5}",
            },

            /* Imagen entre párrafos */
            {
              type: "image",
              src: "https://concepto.de/wp-content/uploads/2015/04/docente-1-e1548810874151.jpg",
              caption:
                "Confianza y reconocimiento: cimientos del vínculo pedagógico.:contentReference[oaicite:6]{index=6}",
            },

            /* Párrafo 3 */
            {
              type: "paragraph",
              text: "El fortalecimiento del vínculo interpersonal requiere intencionalidad reflexiva: el docente planifica momentos de mentoría uno-a-uno, diseña dinámicas de cohesión grupal y aplica instrumentos de diagnóstico socioemocional que orientan intervenciones individualizadas. A nivel macro, la Nueva Escuela Mexicana concibe la escuela como red de relaciones que deben hospedar diversidad cultural, lingüística y de género; por tanto, se espera que el maestro sea facilitador de intercambios respetuosos donde la dignidad humana sea núcleo fundante. Cuando este vínculo aflora, el aula se transforma en comunidad de aprendizaje en la que la cooperación desplaza la competición y el error se resignifica como oportunidad de crecimiento.:contentReference[oaicite:7]{index=7}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Herramientas de comunicación empática",
              open: false,
              text: "◦ Rondas de bienvenida.\n◦ Protocolos de retroalimentación yo-mensaje.\n◦ Pared de gratitud.\n◦ Asambleas de aula para toma de decisiones.",
            },
          ],
        },

        /* ──────────────── 3.6 ───────────────── */
        {
          id: "1.6",
          numbering: "3.6",
          title:
            "El vínculo de interacción en el proceso de enseñanza-aprendizaje",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "El vínculo de interacción se concibe como tejido que conecta propósitos individuales con metas colectivas, desplegándose en prácticas de aprendizaje cooperativo donde la interdependencia positiva y la responsabilidad compartida son esenciales. Díaz (2010) señala que, en estos entornos, el equipo trabaja junto hasta que todos han comprendido y completado la tarea, cultivando habilidades de ayuda mutua, diálogo y tolerancia. El texto enfatiza que dicho vínculo articula dimensiones cognitiva, afectiva y cultural: los estudiantes negocian significados, expresan emociones y construyen identidad colectiva mientras resuelven problemas auténticos. De esta forma, la interacción deja de ser mero intercambio verbal para convertirse en agente estructurante del pensamiento y la acción.:contentReference[oaicite:8]{index=8}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Beneficios del vínculo de interacción",
              open: false,
              text: "• Mayor motivación intrínseca.\n• Desarrollo de pensamiento crítico.\n• Mejora de habilidades sociales.\n• Transferencia de aprendizajes a nuevas situaciones.",
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "Para operacionalizar el vínculo, el docente diseña tareas cooperativas con roles definidos, criterios de éxito consensuados y rúbricas que integran desempeño académico y relacional. El procesamiento grupal —reflexión sobre qué funciona y qué mejorar— se vuelve ritual sistemático que fortalece la autorregulación colectiva. El material de la SEP (2022) subraya la necesidad de dialogar sobre avances, usar el espacio escolar de forma flexible y coordinar acciones con las familias, extendiendo el vínculo más allá del aula. Así, el aprendizaje se enraíza en la comunidad y adquiere sentido social, alineándose con la finalidad de la Nueva Escuela Mexicana: posicionar la dignidad humana como eje de toda relación pedagógica.:contentReference[oaicite:9]{index=9}",
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://www.magisnet.com/wp-content/uploads/2022/10/AdobeStock_391344115.jpeg",
              caption:
                "Interacción cooperativa: aprender con y del otro.:contentReference[oaicite:10]{index=10}",
            },

            /* Párrafo 3 */
            {
              type: "paragraph",
              text: "Evaluar la calidad del vínculo implica monitorear indicadores como participación equitativa, co-creación de productos y uso efectivo de habilidades interpersonales. Herramientas como portafolios digitales compartidos, diarios de grupo y rúbricas colectivas ofrecen evidencia tangible del proceso y favorecen la mejora continua. El docente, como líder sistémico, facilita la construcción de normas, media conflictos y celebra logros, consolidando la cultura de colaboración. Cuando esta dinámica se institucionaliza, el aula deviene espacio de ciudadanía democrática donde cada voz contribuye al bienestar común y el aprendizaje se convierte en construcción social de significados.:contentReference[oaicite:11]{index=11}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Indicadores para evaluar el vínculo",
              open: false,
              text: "◦ Participación equilibrada por estudiante.\n◦ Evidencias de co-autoría en productos.\n◦ Resolución pacífica de conflictos.\n◦ Autoevaluación y coevaluación sistemáticas.",
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
          href: "https://www.youtube.com/watch?v=WP8WSK-6Pj0&t=1014s", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Actividad introductoria – Video https://www.youtube.com/watch?v=WP8WSK-6Pj0&t=1014s",
            "Ley General de Educación (Cámara de Diputados, 2019) https://www.diputados.gob.mx/LeyesBiblio/pdf/LGE.pdf",
            "Artículo 3.º Constitucional (Gobierno de México, 2019) http://www.ordenjuridico.gob.mx/Constitucion/articulos/3.pdf",
            "Acción, interacción y construcción (Blog Educación y Tecnología, 2017) http://las-nuevastendenciaseducativas.blogspot.com/2017/04/accion-interaccion-y-construccion-del.html",
            "La Nueva Escuela Mexicana (SEP, 2019) https://dfa.edomex.gob.mx/sites/dfa.edomex.gob.mx/files/files/NEM%20principios%20y%20orientacion%20pedagogica.pdf",
            "Perfiles profesionales, criterios e indicadores para docentes (SEP, 2021) http://creson.edu.mx/docs/Perfiles_profesionales_Criterios_e_Indicadores_para_Docentes_Ciclo_Escolar_2021-2022.pdf",
            "Plan de Estudios para Preescolar, Primaria y Secundaria (SEP, 2022) https://educacionbasica.sep.gob.mx/wp-content/uploads/2022/12/Plan-de-Estudios-para-la-Educacion-Preescolar-Primaria-y-Secundaria.pdf",
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
            "Andere, E. (2015). *La cultura del aprendizaje.* México: EduardoAndere.org.", // :contentReference[oaicite:0]{index=0}
            "Díaz, F. & Hernández, G. (2010). *Estrategias docentes para un aprendizaje significativo: Una interpretación constructivista.* México: McGraw-Hill.", // :contentReference[oaicite:1]{index=1}
            "Medina, M. & Barquero, R. (2015). *20 competencias profesionales para la práctica docente.* México: Trillas.", // :contentReference[oaicite:2]{index=2}
            "Cámara de Diputados (2019). *Ley General de Educación.* Recuperado de https://www.diputados.gob.mx/LeyesBiblio/pdf/LGE.pdf", // :contentReference[oaicite:3]{index=3}
            "Gobierno de México (2019). *Artículo 3.º Constitucional.* Recuperado de http://www.ordenjuridico.gob.mx/Constitucion/articulos/3.pdf", // :contentReference[oaicite:4]{index=4}
            "s/a. (2017). *Acción, interacción y construcción del conocimiento en situaciones educativas.* Recuperado de http://las-nuevastendenciaseducativas.blogspot.com/2017/04/accion-interaccion-y-construccion-del.html", // :contentReference[oaicite:5]{index=5}
            "SEP. (2019). *La Nueva Escuela Mexicana: Principios y orientación pedagógica.* Recuperado de https://dfa.edomex.gob.mx/.../NEM%20principios%20y%20orientacion%20pedagogica.pdf", // :contentReference[oaicite:6]{index=6}
            "SEP. (2021). *Perfiles profesionales, criterios e indicadores para docentes.* Recuperado de http://creson.edu.mx/docs/Perfiles_profesionales_Criterios_e_Indicadores_para_Docentes_Ciclo_Escolar_2021-2022.pdf", // :contentReference[oaicite:7]{index=7}
            "SEP. (2022). *Plan de estudios para la Educación Preescolar, Primaria y Secundaria.* Recuperado de https://educacionbasica.sep.gob.mx/wp-content/uploads/2022/12/Plan-de-Estudios-para-la-Educacion-Preescolar-Primaria-y-Secundaria.pdf", // :contentReference[oaicite:8]{index=8}
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
