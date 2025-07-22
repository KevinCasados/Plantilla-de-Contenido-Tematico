/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId : "TODO-programa",
  courseId  : "TODO-curso",
  id        : "TODO-moduloX",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "TODO‑Nombre del curso",
  title     : "Módulo X. TODO‑Título",
  semestre  : "TODO‑Semestre",
  teacher   : "TODO‑Docente",

  /* ── Objetivo y competencias ────────────────── */
  objective: "TODO: objetivo general.",
  competencies: [
    "TODO: competencia 1",
    // …
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
      numbering: "Unidad 1",
      title: "TODO‑Título unidad",
      content: [
        { type: "paragraph", text: "TODO: introducción." },
      ],
      subthemes: [
        /* Sub‑tema */
        {
          id: "1.1",
          numbering: "1.1",
          title: "TODO‑Subtema 1",
          content: [
            { type: "paragraph", text: "Contenido del subtema 1." },
          ],
          /* Sub‑sub‑tema */
          subthemes: [
            {
              id: "1.1.1",
              numbering: "1.1.1",
              title: "TODO‑Sub‑subtema",
              content: [
                { type: "paragraph", text: "Detalle adicional." },
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
