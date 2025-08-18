/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "EFD", // Especialidad en Formación Docente
  courseId: "EFD-IEIE", // Implicaciones Educativas de la Inteligencia Emocional
  id: "EFD-IEIE-mod1",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Implicaciones Educativas de la Inteligencia Emocional",
  title: "Módulo 1. La teoría de las inteligencias múltiples",
  semestre: "Segundo semestre",
  teacher: "Dra. Rosa Dianeth Hernández Aguilera",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar el constructo de la inteligencia desde las diferentes aristas.",
  competencies: [
    "A través del conocimiento del constructo de la inteligencia, el alumno identificará lo que es la inteligencia desde las diferentes posturas teóricas y cómo se puede evidenciar en el aula y qué podría hacer al respecto.",
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
          type: "paragraph",
          text: "En este módulo se realiza una remembranza del constructo de la inteligencia hasta \
llegar a las inteligencias múltiples. La sesión 1 aborda dos temas: ¿Qué es la inteligencia? \
y ¿Cómo se mide la inteligencia?.",
        },
      ],
    },

    /* 1. Unidad principal (según el PDF) */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "La teoría de las inteligencias múltiples",
      content: [
        // Párrafo 1 — Propósito y alcance de la unidad
        {
          type: "paragraph",
          text: "Esta unidad introduce un mapa claro del constructo de la inteligencia y su relevancia educativa. \
Se parte de dos preguntas guía: ¿qué entendemos por ‘inteligencia’ y cómo se ha medido históricamente? \
El énfasis está en reconocer que el concepto no es estático: ha evolucionado desde definiciones \
filológicas y filosóficas hacia marcos científicos contrastables, y de ahí a modelos que consideran el \
contexto y la diversidad de talentos. El itinerario se organiza en tres tramos: (a) una revisión conceptual \
e histórica, (b) un panorama de la medición psicométrica y sus límites, y (c) la llegada de las \
inteligencias múltiples como propuesta que dialoga con el aula. Con esta ruta, el estudiante comprenderá \
por qué distintas corrientes han descrito la inteligencia de modos diferentes y cómo esas diferencias \
impactan en la evaluación, el diseño de tareas y la atención a la diversidad en el entorno escolar. La \
unidad concluye articulando implicaciones pedagógicas: criterios para seleccionar instrumentos, \
precauciones de uso e ideas para planear experiencias que reconozcan perfiles diversos sin renunciar a \
la exigencia académica y a la evidencia de aprendizaje. :contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14}",
        },

        // Párrafo 2 — De los orígenes a la medición psicométrica
        {
          type: "paragraph",
          text: "Históricamente, el término ‘inteligencia’ hunde sus raíces en la tradición clásica (logos, nous) y en el \
latín intelligentia, asociado a comprender y discernir, antes de convertirse en objeto de indagación \
psicológica a finales del siglo XIX. Con la consolidación de la psicología científica, el primer gran empuje \
vino de la medición: Binet y Simon elaboraron una escala para estimar funciones superiores y derivaron \
la noción de edad mental; posteriormente se formalizó el cociente intelectual (CI) y aparecieron \
instrumentos alternativos como las Matrices de Raven. Wechsler estandarizó baterías por grupos de \
edad (WAIS, WISC) con subpruebas verbales y de ejecución, mientras que las aportaciones de Kaufman \
y otros ampliaron el catálogo con marcos teóricos como fluida vs. cristalizada. Estos desarrollos \
permitieron comparar desempeños y construir normas, pero también suscitaron preguntas sobre validez, \
contexto y sesgos. Comprender este legado es clave: muchas prácticas escolares aún descansan —de \
modo explícito o implícito— en supuestos psicométricos, por lo que conviene conocer tanto su potencia \
como sus límites para evitar interpretaciones reduccionistas de las capacidades del estudiante. :contentReference[oaicite:15]{index=15} :contentReference[oaicite:16]{index=16}",
        },

        // Acordeón 1 — Brújula de estudio (se intercala para guiar la lectura)
        {
          type: "accordion",
          header: "Brújula de estudio de la unidad",
          open: false,
          items: [
            {
              title: "Preguntas clave",
              text: "¿Qué es ‘ser inteligente’ en distintos marcos teóricos? ¿Qué miden realmente las pruebas? \
¿Cómo traducir estas ideas en decisiones didácticas concretas?",
            },
            {
              title: "Productos de aprendizaje esperados",
              text: "Mapa comparativo de teorías, criterios para elegir instrumentos y una propuesta de actividad \
aula alineada con perfiles de inteligencia.",
            },
            {
              title: "Criterios de evaluación",
              text: "Claridad conceptual, uso crítico de evidencias y pertinencia pedagógica de las propuestas.",
            },
          ],
          text: "",
        },

        // Párrafo 3 — Familias de teorías: psicométricas, biológicas y del desarrollo
        {
          type: "paragraph",
          text: "Las teorías psicométricas se organizaron alrededor del análisis factorial. Spearman propuso un \
factor general (g) junto con factores específicos, mientras Thurstone defendió habilidades primarias \
independientes; Cattell distinguió entre inteligencia fluida y cristalizada, y Carroll integró niveles en su \
modelo de tres estratos. En paralelo, enfoques biológicos exploraron correlatos cerebrales y herencia, \
aunque la evidencia correlacional entre tamaño cerebral y CI es modesta y los usos ideológicos de la \
cranometría o del determinismo heredado han sido ampliamente criticados. Las teorías del desarrollo, \
por su parte, ofrecen lentes para comprender cómo emergen y se reorganizan las capacidades: Piaget \
planteó estadios y equilibrio adaptativo; Vygotsky subrayó la mediación sociocultural y la diferencia entre \
desarrollo real y potencial (zona de desarrollo próximo). Este mosaico teórico no compite por ‘verdades \
exclusivas’: aporta piezas complementarias para entender la complejidad del rendimiento humano y para \
diseñar experiencias de aprendizaje y evaluación que sean válidas, contextualizadas y éticamente \
responsables. :contentReference[oaicite:17]{index=17} :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19}",
        },

        // Párrafo 4 — El giro hacia las inteligencias múltiples y modelos afines
        {
          type: "paragraph",
          text: "Con Howard Gardner, la inteligencia se redefine como un potencial biopsicológico para resolver \
problemas y crear productos valiosos en contextos culturales. Inicialmente propuso siete inteligencias \
(lingüística, lógico-matemática, musical, cinestésico-corporal, espacial, interpersonal e intrapersonal) y \
más tarde añadió la naturalista y la existencial; el propio debate amplió la discusión hacia otras \
posibilidades. En la misma constelación, Sternberg planteó su teoría triárquica (analítica, experiencial y \
contextual), destacando la adaptación y la selección/modificación del entorno; y De Beauport propuso \
un marco inspirado en neuroanatomía funcional y procesos (neocorteza, sistema límbico y cerebro \
básico) con distintas ‘inteligencias’ asociadas. Estas perspectivas no eliminan la psicometría, pero \
invitan a una mirada ecológica y plural de las capacidades, con implicaciones directas en currículo, \
evaluación y estrategias didácticas: ofrecer entradas variadas, tareas auténticas y oportunidades para \
que diferentes talentos cuenten en el aprendizaje. :contentReference[oaicite:20]{index=20} :contentReference[oaicite:21]{index=21} :contentReference[oaicite:22]{index=22}",
        },

        // Acordeón 2 — Pautas para llevarlo al aula
        {
          type: "accordion",
          header: "Del concepto a la práctica docente",
          open: false,
          items: [
            {
              title: "Diseño de actividades",
              text: "Planifica tareas con múltiples formatos de entrada/salida (texto, visual, corporal, musical) para \
dar cabida a perfiles diversos sin bajar el nivel de exigencia.",
            },
            {
              title: "Evaluación formativa",
              text: "Combina evidencias de desempeño con rúbricas y autoevaluación; explicita criterios y da \
retroalimentación específica y accionable.",
            },
            {
              title: "Equidad y contexto",
              text: "Evita usar un único puntaje como sinónimo de ‘capacidad’; interpreta resultados a la luz de \
oportunidades, apoyos y cultura escolar.",
            },
          ],
          text: "",
        },

        // Párrafo 5 — Cierre: implicaciones educativas y promesa de la unidad
        {
          type: "paragraph",
          text: "El valor práctico de esta unidad reside en traducir teorías en decisiones pedagógicas: seleccionar \
instrumentos pertinentes, interpretar datos con cautela, diseñar actividades que convoquen distintos \
recursos cognitivos y emocionales, y reconocer que el aprendizaje significativo requiere tanto reto como \
andamiaje. Desde la perspectiva de formación docente, comprender la pluralidad de miradas sobre la \
inteligencia permite evitar etiquetas reductoras y orientar estrategias hacia el desarrollo de potenciales \
diversos. La unidad propone, además, criterios para que el docente conecte objetivos curriculares con \
evidencias observables y contextos auténticos de desempeño. En síntesis, no se trata de escoger una \
‘teoría ganadora’, sino de construir un repertorio profesional que combine rigor conceptual, sensibilidad \
contextual y herramientas evaluativas que promuevan la mejora. Con ello, el aula se vuelve un espacio \
en el que la evaluación orienta, la diversidad cuenta y el aprendizaje se hace visible. :contentReference[oaicite:23]{index=23} :contentReference[oaicite:24]{index=24}",
        },
      ],

      /* → Subtemas de primer nivel (según índice del PDF) */
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "¿Qué es la inteligencia?",
          content: [
            // Párrafo 1 — Concepto, etimología y doble mirada (coloquial vs. científica)
            {
              type: "paragraph",
              text: "Para abordar qué entendemos por inteligencia conviene iniciar por su sustrato histórico-conceptual y \
por los usos que la comunidad académica y la cultura cotidiana hacen del término. Desde la tradición \
clásica, el concepto se relaciona con logos y nous: el primero apela a recoger, discriminar y articular un \
discurso razonado; el segundo alude a la facultad de pensar, meditar y memorizar. En español, \
‘inteligencia’ proviene de intelligentia, ligada a comprender y darse cuenta, lo que explica que, en el uso \
coloquial, se suela identificar a la persona inteligente con quien entiende y se entiende a sí misma. Este \
plano coloquial convive con una visión científica sustentada en evidencia: mientras la primera descansa en \
creencias y juicios cotidianos, la segunda exige definiciones operables y mediciones de desempeño \
intelectual. En esa línea, Sternberg distingue entre teorías implícitas —de sentido común, sin respaldo \
empírico directo— y teorías explícitas, basadas en investigación y resultados de evaluación cognitiva. Esta \
distinción no es solo taxonómica; orienta cómo se definen constructos, se eligen instrumentos y se \
interpretan puntajes. Así, cuando llevamos el término al aula, debemos clarificar de qué ‘inteligencia’ \
hablamos: de la que invocan las percepciones cotidianas o de la que sustentan modelos y pruebas \
psicológicas. Reconocer ambas capas evita reduccionismos y prepara el terreno para comprender por qué \
surgen controversias —por ejemplo, sobre el peso del contexto— y cómo se traducen en decisiones \
pedagógicas y de evaluación. :contentReference[oaicite:19]{index=19} :contentReference[oaicite:20]{index=20} :contentReference[oaicite:21]{index=21} :contentReference[oaicite:22]{index=22}",
            },

            // Acordeón 1 — Clasificación según Sternberg
            {
              type: "accordion",
              header: "Clasificación y alcances del concepto (Sternberg)",
              open: false,
              items: [
                {
                  title: "Teorías implícitas vs. explícitas",
                  text: "Implícitas: juicios de sentido común sin base empírica directa. \
Explícitas: se apoyan en mediciones del funcionamiento intelectual y en investigación sistemática.",
                },
                {
                  title: "Qué miden y para qué sirven",
                  text: "Las teorías explícitas proponen estructuras y procesos del funcionamiento inteligente; \
orientan instrumentos, interpretación de puntajes y decisiones educativas.",
                },
                {
                  title: "Limitaciones reportadas",
                  text: "Entre sus críticas: difícil falseabilidad, validez ecológica discutible y escasa \
consideración del contexto de las conductas inteligentes.",
                },
              ],
              text: "Fuente: clasificación y críticas sintetizadas de Sternberg (1990). :contentReference[oaicite:23]{index=23}",
            },

            // Párrafo 2 — Giro psicométrico e hitos de medición
            {
              type: "paragraph",
              text: "El paso de la especulación filosófica a la psicología científica trajo un viraje decisivo: \
hacer de la inteligencia un constructo mensurable. A inicios del siglo XX, Binet y Simon desarrollaron la \
primera escala para estimar funciones superiores (memoria, atención, comprensión), introduciendo la \
noción de edad mental como referencia de desempeño por niveles de dificultad. Poco después, Stern \
propuso el cociente intelectual (CI=EC/EM×100), fórmula que se volvió central en la estandarización de \
pruebas. La expansión a otros contextos impulsó baterías culturalmente menos dependientes, como las \
Matrices Progresivas de Raven, y la consolidación de escalas por grupos de edad (WAIS/WISC) en \
Wechsler, con subpruebas verbales y de ejecución que permitieron perfiles más finos. Este desarrollo \
psicométrico posibilitó comparaciones normativas y decisiones educativas más objetivadas, pero también \
activó un debate sobre supuestos y límites: ¿qué tan bien representan los puntajes el desempeño \
real?, ¿cómo ponderar el contexto sociocultural?, ¿hasta dónde llega la validez ecológica de las tareas de \
prueba? Tales preguntas no invalidan el valor de medir; le dan un marco crítico para su uso responsable en \
educación, donde los resultados deben leerse como evidencias entre otras (desempeños auténticos, \
rúbricas, observación), y no como definiciones exhaustivas de capacidad. :contentReference[oaicite:24]{index=24} :contentReference[oaicite:25]{index=25} :contentReference[oaicite:26]{index=26} :contentReference[oaicite:27]{index=27} :contentReference[oaicite:28]{index=28}",
            },

            // Acordeón 2 — Hitos psicométricos del PDF
            {
              type: "accordion",
              header: "Hitos y conceptos clave de la psicometría",
              open: false,
              items: [
                {
                  title: "Binet-Simon y la edad mental",
                  text: "Primera escala para funciones superiores; introduce la noción de edad mental \
a partir de ítems con dificultad graduada.",
                },
                {
                  title: "CI, Raven y Wechsler",
                  text: "Stern formaliza el CI; Raven busca minimizar sesgos culturales; Wechsler consolida \
WAIS/WISC con subpruebas verbales y de ejecución.",
                },
                {
                  title: "Propósito de las pruebas",
                  text: "Medida objetiva, confiable y válida de funciones superiores; base para estandarización \
y comparación normativa.",
                },
              ],
              text: "Síntesis de Binet-Simon, CI, Raven y Wechsler. :contentReference[oaicite:29]{index=29} :contentReference[oaicite:30]{index=30} :contentReference[oaicite:31]{index=31} :contentReference[oaicite:32]{index=32}",
            },

            // Párrafo 3 — Principales marcos teóricos (visión comparada)
            {
              type: "paragraph",
              text: "Comprender el ‘qué’ de la inteligencia requiere mirar cómo las teorías la estructuran. \
Las propuestas psicométricas se apoyan en el análisis factorial y ofrecen modelos complementarios: \
Spearman plantea un factor general (g) junto con factores específicos; Thurstone objeta la hegemonía de \
g y propone un perfil aptitudinal sustentado en siete habilidades primarias (comprensión y fluidez verbal, \
aptitud numérica, ubicación espacial, memoria, razonamiento y velocidad perceptual); Guilford describe \
la ‘Estructura del Intelecto’ cruzando operaciones, contenidos y productos para explicar la diversidad de \
desempeños; Cattell distingue entre inteligencia fluida (adaptación a la novedad, menos dependiente de \
la cultura) y cristalizada (conocimiento acumulado); y modelos jerárquicos como el de Carroll integran \
capacidades específicas en estratos superiores hasta llegar a un nivel general. En conjunto, estos marcos \
no solo ofrecen taxonomías: orientan el qué y el cómo de la evaluación (qué procesos consideramos, qué \
tareas elegimos, qué inferencias hacemos). Para la práctica docente, su valor reside en traducirlos a \
decisiones pedagógicas: usar pruebas con criterio, combinar fuentes de evidencia y diseñar actividades \
en las que distintos procesos —memoria, razonamiento, lenguaje, atención— tengan oportunidades reales \
de manifestarse. :contentReference[oaicite:33]{index=33} :contentReference[oaicite:34]{index=34} :contentReference[oaicite:35]{index=35} :contentReference[oaicite:36]{index=36}",
            },

            // Video — puedes sustituir el ID por el de tu plataforma
            {
              type: "video",
              title: "¿Qué es la inteligencia? — Panorama histórico y teórico",
              src: "https://www.youtube.com/embed/MXQ7kcsWFVg",
              text: "Video guía para reforzar los conceptos vistos: definiciones, medición y principales marcos teóricos. \
Si tu aula virtual cuenta con un video institucional (IEIE-Sem1), reemplaza el VIDEO_ID por el correspondiente.",
            },
          ],
        },
        {
          id: "1.2",
          numbering: "1.2",
          title: "¿Cómo se mide la inteligencia?",
          content: [
            {
              type: "paragraph",
              text: "Medir la inteligencia implica traducir un constructo teórico en evidencias observables mediante \
instrumentos estandarizados. Desde el enfoque psicométrico, las pruebas se diseñan para ofrecer \
medidas objetivas, confiables y válidas de funciones psicológicas superiores; su estandarización se logra \
registrando y analizando respuestas bajo condiciones controladas y comparándolas con normas \
poblacionales. El punto de partida histórico es la escala de Binet-Simon (1905), concebida para diferenciar \
desempeños por nivel de dificultad y estimar la edad mental —comparando el rendimiento observado con el \
esperado para la edad—. Poco después, Stern formaliza el cociente intelectual (CI=EC/EM×100), lo que \
facilita la comparación entre individuos y grupos. Para reducir sesgos culturales, se proponen pruebas \
como las Matrices Progresivas de Raven; en paralelo, Wechsler desarrolla escalas por grupos de edad \
(WAIS para adultos; WISC para niños) con subpruebas verbales y de ejecución que permiten perfilar áreas \
específicas (p. ej., vocabulario, semejanzas, retención de dígitos; diseño de cubos, rompecabezas, \
claves). Con el tiempo surgen baterías alternativas (p. ej., Kaufman) y extensiones que dialogan con \
modelos teóricos más amplios. En la práctica educativa, ningún puntaje agota el fenómeno: la \
interpretación responsable triangula resultados psicométricos con desempeños auténticos, rúbricas y \
observación contextual, evitando decisiones reduccionistas. Así, medir es aportar evidencias para la toma \
de decisiones pedagógicas, no etiquetar esencias inmutables. :contentReference[oaicite:11]{index=11} :contentReference[oaicite:12]{index=12} :contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14} :contentReference[oaicite:15]{index=15} :contentReference[oaicite:16]{index=16}",
            },

            // Lista 1 — Instrumentos habituales y usos
            {
              type: "list",
              style: "bullets",
              title: "Instrumentos habituales y usos orientativos",
              items: [
                "Binet-Simon (histórica): detección temprana de necesidades educativas y estimación de edad mental.",
                "Raven (matrices): razonamiento analógico y detección de patrones con menor carga verbal/cultural.",
                "WAIS/WISC (Wechsler): perfil cognitivo con subpruebas verbales y de ejecución para adultos y niños.",
                "Kaufman (K-ABC/KABC-II): procesamiento simultáneo/secuencial y referencias a Gf/Gc en algunas versiones.",
                "Aplicación en centros educativos: tamizajes, orientaciones y derivaciones; nunca como único criterio.",
              ],
              text: "Usa cada instrumento con fines definidos, respetando manuales técnicos, normas y límites de inferencia.",
            },

            {
              type: "paragraph",
              text: "El desarrollo de las pruebas está íntimamente ligado al análisis factorial, que busca reducir muchas \
variables a factores latentes. Desde esa óptica, Spearman planteó un factor general (g) acompañado de \
factores específicos, para explicar la covariación entre tareas cognitivas. Thurstone objetó la hegemonía de \
g y propuso un perfil de Habilidades Mentales Primarias (comprensión y fluidez verbal, aptitud numérica, \
ubicación espacial, memoria, razonamiento, velocidad perceptual), enfatizando diferencias de patrón aun \
con CI similar. Más tarde, los modelos jerárquicos y bifactoriales integraron perspectivas, y Cattell distinguió \
entre inteligencia fluida (Gf) —adaptación a la novedad, menos dependiente de la cultura— y cristalizada \
(Gc) —conocimiento acumulado mediado por escolaridad y cultura—. Estos marcos orientan tanto el \
diseño de ítems como la lectura de puntajes: si un estudiante muestra fortaleza en tareas visuoespaciales \
pero debilidad en memoria de trabajo, la intervención pedagógica puede reforzar estrategias de codificación \
y recuperación, sin suponer déficit global. Metodológicamente, toda interpretación debe situarse en el \
contexto del alumno (lengua, cultura, oportunidades de aprendizaje) y comunicar hallazgos de forma \
formativa, con recomendaciones de apoyo más que con etiquetas. :contentReference[oaicite:17]{index=17} :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19} :contentReference[oaicite:20]{index=20}",
            },

            // Lista 2 — Buenas prácticas de aplicación e interpretación
            {
              type: "list",
              style: "bullets",
              title: "Buenas prácticas en evaluación cognitiva (uso educativo)",
              items: [
                "Definir propósito evaluativo (tamizaje, seguimiento, orientación) antes de seleccionar la prueba.",
                "Respetar estandarización: ambiente, instrucciones y tiempos según manual; registrar incidencias.",
                "Preferir enfoque multimétodo/multifuente: pruebas + tareas auténticas + observación + entrevistas.",
                "Interpretar puntajes como rangos con error de medición; evitar decisiones de alto impacto con un solo test.",
                "Considerar lengua/cultura/accesibilidad; usar apoyos razonables para minimizar sesgos.",
                "Devolver resultados en clave formativa: fortalezas, áreas a potenciar y estrategias pedagógicas concretas.",
              ],
              text: "Estas pautas ayudan a que la medición contribuya a decisiones pedagógicas justas y eficaces.",
            },

            // Imagen — ejemplo de ítem tipo matrices (bajo demanda, sustituible por recurso institucional)
            {
              type: "image",
              src: "https://neuronup.com/wp-content/uploads/2024/02/Ejemplo-test-de-matrices-progresivas-de-Raven.webp",
              alt: "Ejemplo ilustrativo de matriz tipo Raven",
              caption:
                "Representación esquemática de un ítem de matrices progresivas: selección de la pieza que completa el patrón.",
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
          href: "https://www.youtube.com/watch?v=MXQ7kcsWFVg", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Inteligencia, historia y tipos de inteligencia https://www.youtube.com/watch?v=MXQ7kcsWFVg",
            "IEIE-Sem1 — Video de la semana https://youtu.be/NnAWTh9uiwY",
            "Inteligencia. ¿Qué sabemos y qué nos falta por investigar? http://www.scielo.org.co/pdf/racefn/v35n134/v35n134a09.pdf",
            "Evolución de los conceptos sobre inteligencia. Planteamientos actuales de la inteligencia emocional para la orientación educativa https://www.redalyc.org/pdf/706/70600506.pdf",
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
            "Gardner, H. (2001). La inteligencia reformulada. Barcelona: Paidós.",
            "Gardner, H. (1997). Estructuras de la mente: La teoría de las inteligencias múltiples. Santafé de Bogotá: Fondo de Cultura Económica.",
            "Sternberg, R. (1990). Más allá del cociente intelectual: Una teoría triárquica de la inteligencia humana. Bilbao: Desclée de Brouwer.",
            "Piaget, J. (1979). Psicología de la inteligencia. Buenos Aires: Psique.",
            "Vigotsky, L. (1979). El desarrollo de los procesos psicológicos superiores. Barcelona: Grijalbo.",
            "Cattell, R. (1987). Intelligence: Its Structure, Growth and Action. Ámsterdam: Elsevier.",
            "Guilford, P. (1986). La naturaleza de la inteligencia humana. Buenos Aires: Paidós.",
            "Nunnally, J. (1973). Introducción a la medición psicológica. Buenos Aires: Paidós.",
            "Gregory, R. (2001). Evaluación psicológica: Historia, principios y aplicaciones. México: Manual Moderno.",
            "Sattler, J. (2003). Evaluación infantil. México: Manual Moderno.",
            "Geary, D. (2008). El origen de la mente: Evolución del cerebro, cognición e inteligencia. México: Manual Moderno.",
            "Gomis, N. (2007). Evaluación de las inteligencias múltiples en el contexto educativo a través de expertos, padres y maestros. Tesis doctoral, Universidad de Alicante.",
            "Gould, S. (1984). La falsa medida del hombre. Madrid: Orbis.",
            "Flynn, J. (2009). ¿Qué es la inteligencia? Más allá del efecto Flynn. Madrid: TEA.",
            "De Beauport, E. (2008). Las tres caras de la mente. Caracas: Alfa.",
            "Martín, M. (2007). Análisis histórico y conceptual de las relaciones entre la inteligencia y la razón. Tesis doctoral, Universidad de Murcia.",
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
