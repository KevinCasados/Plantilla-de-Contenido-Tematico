/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId : "MGAIE",                                               // Maestría en Gestión y Administración de Instituciones Educativas
courseId  : "DDPE",                                                // Diseño y Desarrollo de Proyectos Educativos
id        : "modulo1",

/* ── Datos visibles ─────────────────────────── */
courseName: "Maestría en Gestión y Administración de Instituciones Educativas",
title     : "Módulo 1. Métodos y herramientas para el diseño del proyecto",   // :contentReference[oaicite:0]{index=0}
semestre  : "3.er Semestre",                                                  // :contentReference[oaicite:1]{index=1}
teacher   : "Dr. Jesús Agustín Zapata Velázquez",                             // :contentReference[oaicite:2]{index=2}

/* ── Objetivo y competencias ────────────────── */
objective : "Identificar los principales métodos y herramientas para el diseño de proyectos educativos.",  // :contentReference[oaicite:3]{index=3}

competencies: [
  "Domina el concepto de proyecto educativo.",                                   // :contentReference[oaicite:4]{index=4}
  "Identifica las ventajas de aplicar proyectos de mejora en el ámbito escolar.", // :contentReference[oaicite:5]{index=5}
  "Aplica los principales métodos y herramientas en la formulación de proyectos." // :contentReference[oaicite:6]{index=6}
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
    title: "Métodos y herramientas para el diseño del proyecto",          // :contentReference[oaicite:0]{index=0}
    content: [
      {
        type: "paragraph",
        text:
          "En esta unidad se analizan los fundamentos conceptuales del proyecto educativo y se describen los métodos, técnicas e instrumentos que permiten diagnosticar necesidades, elaborar un plan de acción y evaluar su viabilidad. Asimismo, se revisan los errores más frecuentes que surgen en la planeación y la puesta en marcha, con el fin de anticiparlos y garantizar la mejora continua."  // :contentReference[oaicite:1]{index=1}
      },
    ],

    /* → Subtemas de primer nivel (del listado “CONTENIDO TEMÁTICO DE LA UNIDAD”) */
    subthemes: [
      {
        id: "1.1",
        numbering: "1.1",
        title: "Métodos y herramientas para el diseño del proyecto",      // :contentReference[oaicite:2]{index=2}
        content: [
          { type: "paragraph", text: "Contenido del subtema 1.1." },
        ],
        subthemes: [],
      },
      {
        id: "1.2",
        numbering: "1.2",
        title: "Elementos para la justificación del proyecto, viable y factible", // :contentReference[oaicite:3]{index=3}
        content: [
          { type: "paragraph", text: "Contenido del subtema 1.2." },
        ],
        subthemes: [],
      },
      {
        id: "1.3",
        numbering: "1.3",
        title: "Método FODA",                                             // :contentReference[oaicite:4]{index=4}
        content: [
          { type: "paragraph", text: "Contenido del subtema 1.3." },
        ],
        subthemes: [],
      },
      {
        id: "1.4",
        numbering: "1.4",
        title: "Errores del proyecto",                                    // :contentReference[oaicite:5]{index=5}
        content: [
          { type: "paragraph", text: "Contenido del subtema 1.4." },
        ],
        subthemes: [],
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
