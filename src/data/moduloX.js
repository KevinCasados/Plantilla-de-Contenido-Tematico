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

    /* ───────── Material Complementario ───────── */
    {
      id: "cc",
      numbering: "Material Complementario",
      title: "Material Complementario",
      content: [
        {
          type : "paragraph",
          text :
            "Aquí encontrarás recursos (PDF, videos, enlaces externos) que amplían lo visto en el módulo.",
        },

        /* Animación decorativa (Lottie) */
        {
          type: "lottie",
          src : "TODO‑URL‑animacion‑material.lottie",
        },

        /* Botón / enlace destacado (puede ser video, PDF, sitio web…) */
        {
          type       : "download",
          text       : "TODO‑Texto del botón",
          href       : "TODO‑URL‑recurso",
          openInNewTab: true,
          icon       : "TODO‑URL‑icono‑lottie.json", // opcional
        },

        /* Lista de recursos complementarios */
        {
          type : "list",
          style: "unordered",
          items: [
            "TODO: recurso 1 – enlace",
            "TODO: recurso 2 – enlace",
          ],
        },
      ],
    },

    /* ───────────────── Bibliografía ───────────── */
    {
      id: "bib",
      numbering: "Bibliografía",
      title: "Bibliografía",
      content: [
        {
          type : "list",
          style: "unordered",
          items: [
            "TODO: referencia bibliográfica 1",
            "TODO: referencia bibliográfica 2",
          ],
        },
        /* Animación opcional al final */
        {
          type: "lottie",
          src : "TODO‑URL‑animacion‑bibliografia.lottie",
        },
      ],
    },
  ],
};