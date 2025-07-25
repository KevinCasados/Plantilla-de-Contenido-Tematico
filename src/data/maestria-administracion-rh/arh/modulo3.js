/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId : "MARH",                              // Maestría en Administración de Recursos Humanos
courseId  : "MARH-101",                          // Clave asignada a la materia
id        : "MARH-101-mod3",                     // Identificador único de este módulo

/* ── Datos visibles ─────────────────────────── */
courseName: "Administración de Recursos Humanos",
title     : "Módulo 3. Internet, outsourcing y benchmarking",
semestre  : "Primer semestre",
teacher   : "Mtra. Mirna Angélica Palafox Mariscal",

/* ── Objetivo y competencias ────────────────── */
objective : "Al término de este módulo el estudiante destacará la importancia de integrar el uso de Internet a la Administración de Recursos Humanos —incluyendo teletrabajo, e-business y e-commerce— así como el outsourcing y el benchmarking como métodos alternativos de operación que optimicen la gestión del capital humano y respalden la productividad diaria de los colaboradores.",

competencies: [
  "Evalúa críticamente el teletrabajo, el e-business, el e-commerce, el outsourcing y el benchmarking como métodos operativos de la Administración de Recursos Humanos.",
  "Toma decisiones de forma lógica, imparcial y razonada para proponer soluciones originales a problemas de capital humano.",
  "Identifica alternativas creativas frente a métodos y enfoques tradicionales en la gestión de recursos humanos.",
  "Establece líneas de acción adecuadas para resolver problemas vinculados con la gestoría del talento.",
  "Demuestra flexibilidad y capacidad de adaptación ante cambios y oportunidades en el entorno organizacional."
],

/* ── Contenido temático (jerarquía recursiva) ─────────── */
themes: [
  /* 0. Página Info (opcional) */
  {
    id        : "3.info",
    numbering : "Info",
    title     : "Información general del módulo",
    isUnitInfo: true,
    content   : [],
  },

  /* ── Unidad 4 ── */
  {
    id       : "4",
    numbering: "Unidad 4",
    title    : "Internet en la empresa",
    content  : [
      // introducción de la unidad 4
    ],

    subthemes: [
      {
        id       : "4.1",
        numbering: "4.1",
        title    : "E‑business",
        content  : [],
      },
      {
        id       : "4.2",
        numbering: "4.2",
        title    : "E‑commerce",
        content  : [],
      },
      {
        id       : "4.3",
        numbering: "4.3",
        title    : "Teletrabajo",
        content  : [],
      },
    ],
  },

  /* ── Unidad 5 ── */
  {
    id       : "5",
    numbering: "Unidad 5",
    title    : "Outsourcing",
    content  : [
      // introducción de la unidad 5
    ],

    subthemes: [
      { id: "5.1", numbering: "5.1", title: "Antecedentes",                  content: [] },
      { id: "5.2", numbering: "5.2", title: "Definición",                    content: [] },
      { id: "5.3", numbering: "5.3", title: "Objetivos",                     content: [] },
      { id: "5.4", numbering: "5.4", title: "Proceso de implementación",     content: [] },
    ],
  },

  /* ── Unidad 6 ── */
  {
    id       : "6",
    numbering: "Unidad 6",
    title    : "Benchmarking",
    content  : [
      // introducción de la unidad 6
    ],

    subthemes: [
      { id: "6.1", numbering: "6.1", title: "Antecedentes",                       content: [] },
      { id: "6.2", numbering: "6.2", title: "Objetivos",                          content: [] },
      { id: "6.3", numbering: "6.3", title: "Tipos",                              content: [] },
      { id: "6.4", numbering: "6.4", title: "Resultados",                         content: [] },
      { id: "6.5", numbering: "6.5", title: "Visión del proyecto en su totalidad",content: [] },
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
