/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId : "EFD",                 // Especialidad en Formación Docente
courseId  : "EFD-IEIE",            // Implicaciones Educativas de la Inteligencia Emocional
id        : "EFD-IEIE-mod2",

/* ── Datos visibles ─────────────────────────── */
courseName: "Implicaciones Educativas de la Inteligencia Emocional",   // :contentReference[oaicite:12]{index=12}
title     : "Módulo 2. Tipos de inteligencia (Inteligencias múltiples)", // síntesis del contenido temático: 1.3 Tipos de inteligencia :contentReference[oaicite:13]{index=13}
semestre  : "Segundo semestre",                                         // :contentReference[oaicite:14]{index=14}
teacher   : "Dra. Rosa Dianeth Hernández Aguilera",                      // :contentReference[oaicite:15]{index=15}

/* ── Objetivo y competencias ────────────────── */
objective:
  "Analizar los tipos de inteligencia centrándose en las inteligencias múltiples.",  // :contentReference[oaicite:16]{index=16}

competencies: [
  "Identifica los distintos tipos de inteligencia con énfasis en las inteligencias múltiples.",                     // :contentReference[oaicite:17]{index=17}
  "Reconoce la importancia de detectarlas en el aula para seleccionar estrategias que favorezcan el aprendizaje.", // :contentReference[oaicite:18]{index=18}
  "Relaciona perfiles de inteligencia con decisiones didácticas alineadas a metas de aprendizaje.",                // derivada del enunciado de competencias y finalidad didáctica :contentReference[oaicite:19]{index=19}
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
    title: "Tipos de inteligencia (Inteligencias múltiples)", // Tema 1.3
    content: [
    // Párrafo 1 — Propósito y alcance de la unidad
    {
      type: "paragraph",
      text:
        "Esta unidad profundiza en el tránsito desde un entendimiento monolítico de la \
inteligencia hacia una concepción plural y contextualizada. Partimos del recordatorio de que la \
asignatura ya estableció el constructo y su medición; ahora, el foco se sitúa en los **tipos de \
inteligencia** según el enfoque de las **inteligencias múltiples** (IM). El objetivo didáctico es doble: \
(1) describir con rigor cada tipo de inteligencia y sus manifestaciones; y (2) traducir esa comprensión \
a decisiones pedagógicas concretas —diseño de tareas, selección de instrumentos e interpretación de \
evidencias— para favorecer aprendizajes significativos y equitativos. El programa fija explícitamente \
el desglose temático que orienta nuestro itinerario: 1.3 Tipos de inteligencia con siete subtemas \
(lingüística, lógico-matemática, espacial, musical, corporal y cinética, personal e interpersonal). \
Conservar esta numeración garantiza trazabilidad entre el aula virtual y el material fuente, y evita \
ambigüedades al momento de evaluar o asignar actividades. En suma, el propósito es robustecer tu \
criterio profesional para reconocer perfiles diversos sin sacrificar la exigencia académica ni la calidad \
de la evidencia recogida. :contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14}"
    },

    // Párrafo 2 — Fundamentos del enfoque de Gardner
    {
      type: "paragraph",
      text:
        "El enfoque de **Howard Gardner** reconfigura el concepto: la inteligencia se entiende como \
un **potencial biopsicológico** para resolver problemas o crear productos valiosos en determinados \
contextos. No niega la psicometría, pero desplaza la mirada hacia la **diversidad funcional** y la \
relevancia cultural de las habilidades. Gardner y su equipo identificaron un conjunto de inteligencias \
—comúnmente ocho en la literatura— y subrayaron que su desarrollo depende de factores **biológicos**, \
**histórico-culturales** y de la **vida personal**. Esta perspectiva, publicada inicialmente en 1983, \
abre una vía fértil para el campo educativo: diseñar experiencias que convoquen distintas rutas de \
acceso al conocimiento y múltiples modos de demostrarlo. En esta unidad nos alineamos con esa \
orientación, enfatizando **descripciones operativas**, ejemplos de aula y criterios para la observación \
formativa. Esta base teórica no es meramente declarativa: articula decisiones de planificación (qué \
habilidades se proponen), de mediación (cómo se enseñan) y de evaluación (cómo se evidencian y \
retroalimentan). Así, el énfasis no recae en etiquetar, sino en ampliar oportunidades de aprendizaje \
desde una lectura funcional del desempeño. :contentReference[oaicite:15]{index=15} :contentReference[oaicite:16]{index=16}"
    },

    // Párrafo 3 — Evitar reduccionismos: más allá de las calificaciones
    {
      type: "paragraph",
      text:
        "El material advierte contra los **reduccionismos**: la inteligencia no puede equipararse sin más \
a las **calificaciones** escolares ni a un único perfil de destrezas. Resulta habitual confundir ‘ser \
inteligente’ con ‘obtener buenas notas’ o con destacar en un área específica —por ejemplo, matemáticas—, \
desconociendo competencias valiosas en otros dominios —como la ejecución musical, la comunicación \
o la coordinación corporal—. Por ello, el enfoque de IM se propone como contrapeso crítico y \
propositivo, al tiempo que reconoce la necesidad de seguir **investigando** su validez y su impacto \
educativo. Para nuestro trabajo, esto implica diseñar tareas que permitan **manifestar competencias \
heterogéneas** y sostener una **lectura formativa** de la evidencia: identificar fortalezas, delimitar \
zonas de mejora y proponer andamiajes específicos en vez de reforzar etiquetas rígidas. Como \
continuación de la primera unidad, aquí consolidamos ese cambio de lente: de una ‘medida única’ a \
un **portafolio de capacidades** con valor pedagógico. :contentReference[oaicite:17]{index=17} :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19}"
    },

    // Párrafo 4 — Implicaciones didácticas y evaluación
    {
      type: "paragraph",
      text:
        "Tras delimitar el marco, el énfasis se traslada a la **acción docente**. Cada tipo de inteligencia \
demanda **configuraciones de tarea** y **evidencias de desempeño** acordes: en lingüística, \
argumentación y producción escrita; en lógico-matemática, resolución de problemas y modelado; en \
espacial, representación y rotación mental; en musical, percepción, producción y análisis; en corporal y \
cinética, coordinación y expresión; en personal e interpersonal, autoconciencia, autorregulación, \
empatía y colaboración. La **evaluación** debe triangulase (rúbricas + productos + observación), \
pensarse como **formativa** y reportarse con retroalimentación **específica y accionable**. Este \
andamiaje incrementa la validez ecológica de nuestras inferencias y favorece el **transfer** a contextos \
auténticos. Finalmente, la secuenciación de contenidos seguirá el desglose oficial del módulo, de modo \
que al finalizar cuentes con un mapa operativo de intervenciones diferenciadas por perfil de inteligencia, \
sus indicadores observables y criterios de logro. :contentReference[oaicite:20]{index=20} :contentReference[oaicite:21]{index=21}"
    },

    // Párrafo 5 — Activación inicial y recursos
    {
      type: "paragraph",
      text:
        "Como activación, el material sugiere el visionado del video **“El modelo de las Inteligencias \
Múltiples de Howard Gardner”** disponible en el **documento de Material complementario**. Este \
recurso permite alinear marcos conceptuales con ejemplos concretos antes de ingresar al análisis \
fino de cada subtema. Te invito a registrar en tu cuaderno dos columnas: *hallazgos conceptuales* \
(definiciones, criterios, indicadores) y *ideas de aplicación* (tareas, recursos, criterios de evaluación). \
Con ello, la discusión en clase se sostendrá en **evidencias** y facilitará la transferencia a tus diseños \
didácticos. En las próximas secciones, cada inteligencia será abordada con: definiciones operativas, \
manifestaciones observables, actividades de aula y pautas de evaluación. El cierre integrará un \
cuadro de relaciones entre perfiles, tareas y estándares de desempeño para guiar futuras decisiones \
curriculares. :contentReference[oaicite:22]{index=22}"
    },

    // Acordeón — Brújula didáctica de la unidad
    {
      type: "accordion",
      header: "Brújula didáctica de la unidad",
      open: false,
      items: [
        {
          title: "Qué aprenderás",
          text:
            "Identificar y describir los siete tipos de inteligencia; reconocer sus manifestaciones \
observables y sus implicaciones en el diseño de tareas y en la evaluación. :contentReference[oaicite:23]{index=23}"
        },
        {
          title: "Productos de aprendizaje",
          text:
            "Mapa comparativo de inteligencias; prototipos de actividades diferenciadas; rúbricas \
con criterios alineados a cada perfil (desempeños, evidencias y niveles de logro)."
        },
        {
          title: "Criterios de evaluación",
          text:
            "Claridad conceptual; pertinencia pedagógica; uso responsable de evidencias; \
retroalimentación específica y accionable, con enfoque formativo. :contentReference[oaicite:24]{index=24}"
        }
      ],
      text: ""
    }
  ],

    /* → Subtemas de primer nivel (tema 1.3 y su desglose) */
    subthemes: [
      {
        id: "1.3",
        numbering: "1.3",
        title: "Tipos de inteligencia",
        content: [
          { type: "paragraph", text: "Panorama general del enfoque de inteligencias múltiples." },
        ],

        /* → Sub-subtemas (1.3.1 a 1.3.7) */
        subthemes: [
          {
            id: "1.3.1",
            numbering: "1.3.1",
            title: "La inteligencia lingüística",
            content: [{ type: "paragraph", text: "Introducción pendiente." }],
          },
          {
            id: "1.3.2",
            numbering: "1.3.2",
            title: "La inteligencia lógica-matemática",
            content: [{ type: "paragraph", text: "Introducción pendiente." }],
          },
          {
            id: "1.3.3",
            numbering: "1.3.3",
            title: "La inteligencia espacial",
            content: [{ type: "paragraph", text: "Introducción pendiente." }],
          },
          {
            id: "1.3.4",
            numbering: "1.3.4",
            title: "La inteligencia musical",
            content: [{ type: "paragraph", text: "Introducción pendiente." }],
          },
          {
            id: "1.3.5",
            numbering: "1.3.5",
            title: "La inteligencia corporal y cinética",
            content: [{ type: "paragraph", text: "Introducción pendiente." }],
          },
          {
            id: "1.3.6",
            numbering: "1.3.6",
            title: "La inteligencia personal",
            content: [{ type: "paragraph", text: "Introducción pendiente." }],
          },
          {
            id: "1.3.7",
            numbering: "1.3.7",
            title: "La inteligencia interpersonal",
            content: [{ type: "paragraph", text: "Introducción pendiente." }],
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
