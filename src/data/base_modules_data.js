/* ———————————————————————————————————————————————————————————————
   Doctorado en Educación · Asignatura: Diseño y Evaluación Curricular
   MÓDULO 1 · Nociones Generales
   ——————————————————————————————————————————————————————————————— */
export default {
  /* ─── Metadatos ─────────────────────────────────────────── */
  programId : 'doctorado-educacion',
  courseId  : 'dec',              // abreviatura de la asignatura
  id        : 'modulo1',

  courseName : 'Diseño y Evaluación Curricular',
  title      : 'Módulo 1. Nociones Generales',
  semestre   : 'Tercer Semestre',
  teacher    : 'Dr. Jesús Agustín Zapata Velázquez',

  /* ─── Objetivo general ─────────────────────────────────── */
  objective:
    'Desarrollar en los Doctorantes una comprensión integral y crítica de los ' +
    'conceptos fundamentales de diseño y evaluación curricular, permitiéndoles ' +
    'identificar y analizar las definiciones, los procesos involucrados y los ' +
    'diferentes tipos de evaluación del currículo, con el fin de aplicar estos ' +
    'conocimientos en la mejora de proyectos curriculares.',

  /* ─── Competencias ─────────────────────────────────────── */
  competencies: [
    'Definir y explicar con precisión los conceptos de diseño y evaluación curricular.',
    'Identificar y diferenciar los procesos involucrados en el diseño y la evaluación curricular.',
    'Comparar y contrastar los tipos de evaluación (interna y externa) valorando su impacto.',
    'Aplicar los conceptos de diseño y evaluación curricular en casos prácticos.',
  ],

  /* ─── Contenido temático ───────────────────────────────── */
  themes: [
    /* Información general (pantalla inicial del módulo) */
    {
      id        : '1.info',
      numbering : 'Info',
      title     : 'Información general del módulo',
      isUnitInfo: true,
      content   : [],
    },

    /* Unidad / Nodo principal ------------------------------------------ */
    {
      id       : '1',
      numbering: 'Unidad 1',
      title    : 'Nociones Generales',
      content  : [],   // Texto introductorio (añádelo después)

      /* Subtemas vacíos para rellenar */
      subthemes: [
        {
          id: '1.1',
          numbering: '1.1',
          title: 'Definición de diseño y evaluación curricular',
          content: [],
        },
        {
          id: '1.2',
          numbering: '1.2',
          title: 'En qué consiste el diseño y la evaluación curricular',
          content: [],
        },
        {
          id: '1.3',
          numbering: '1.3',
          title: 'Tipos de evaluación del currículum',
          content  : [],        // ← ← ←  <‑‑ necesario aunque quede vacío
          subthemes: [
            {
              id: '1.3.1',
              numbering: '1.3.1',
              title: 'Evaluación interna',
              content: [],
            },
            {
              id: '1.3.2',
              numbering: '1.3.2',
              title: 'Evaluación externa',
              content: [],
            },
          ],
        },
      ],
    },

          /* -------------- Material Complementario -------------- */
  {
    id: 'cc',
    numbering: 'Material Complementario',
    title: 'Material Complementario',
    content: [
      {
        type: 'paragraph',
        text:
          'Aquí encontrarás un PDF con videos y sitios externos que amplían lo visto '
          + 'en el módulo.'
      },

      /* Animación central (usa DotLottieReact en el componente) */
        {
          type : 'lottie',
          src  : 'https://lottie.host/c0d4b22d-190c-499c-ae7c-fbdc65bdec18/uwM2ByDoCU.lottie',
        },
        
      /* ② Botón que abre el vídeo complementario */
    {
      type        : 'download',              // reutilizamos el mismo bloque
      text        : 'Ver video complementario',
      href        : 'https://www.youtube.com/watch?v=E1iU30_0kGs', // vídeo hallado en el PDF
      openInNewTab: true,                    // ← abre en pestaña nueva
      icon        : 'https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json'
    },

    /* ③ Lista de bibliografía específica de este material */
    {
      type : 'list',
      style: 'unordered',
      items: [
        'Capra, Fritjof (1998). El punto crucial. Ciencia, sociedad y cultura naciente. Editorial Buenos Aires, Argentina. en: https://docs.google.com/file/d/0ByRMadzMwWYHMzBoX2JocThGQU0/view?resourcekey=0--kUINoHrlTptF00O6X8rVQ',
        'La infografía. Disponible en: https://es.venngage.com/blog/como-hacer-una-infografia/',
        'Pérez Gómez A. (2008). Comprender y transformar la enseñanza.  La función y formación del profesor/a, en la enseñanza para la comprensión. Diferentes Perspectivas; Edit. Morata. Madrid. Disponible en: https://ariselaortega.files.wordpress.com/2013/11/2-comprender-y-transformarla-ensec3b1anza-sacristc3a1n.pdf',
        'Ruiz, B. Carmen (2001). Tesis Doctoral: Evaluación de programas de formación de formadores. La formación de formadores: paradigmas y modelos de Universidad de Barcelona. en:  https://www.tdx.cat/bitstream/handle/10803/5003/crb03de12.pdf?sequence=3&isAllowed=y',
        //  Añade aquí las referencias reales extraídas del PDF
      ]
    },
    ]
  },

  /* ---------------------- Bibliografía ------------------- */
{
  id: 'bib',
  numbering: 'Bibliografía',
  title: 'Bibliografía',
  content: [
    {
      type : 'list',
      style: 'unordered',
      items: [
        'Calvo Muñoz, C. (2013). *Del mapa escolar al territorio educativo. Diseñando la escuela desde la educación* (5.ª ed.). Universidad de la Serena. Disponible en: https://ipecal.edu.mx/wp-content/uploads/Del-mapa-escolar-al-territorio-educativo-Diso%C3%B1ando-la-escuela-desde-la-educaci%C3%B3n-by-Carlos-Calvo-Mu%C3%B1oz-z-lib.org_.pdf',
        'Capra, F. (1998). *El punto crucial. Ciencia, sociedad y cultura naciente.* Editorial Estaciones. Disponible en: https://docs.google.com/file/d/0ByRMadzMwWYHMzBoX2JocThGQU0/view',
        'Freire, P. (2004). *Pedagogía de la autonomía.* Paz e Terra. Disponible en: https://www.buenosaires.gob.ar/areas/salud/dircap/mat/matbiblio/freire.pdf',
        'Gutiérrez, F. (1994). *La mediación pedagógica para la educación.* RNTC, San José (Costa Rica).',
        'Ornelas, C. (2013). *El Sistema Educativo Mexicano. La transición de fin de siglo.* Fondo de Cultura Económica.',
        'Pérez Gómez, A. (2008). *Comprender y transformar la enseñanza. La función y formación del profesor/a.* Editorial Morata. Disponible en: https://ariselaortega.files.wordpress.com/2013/11/2-comprender-y-transformar-la-ensec3b1anza-sacristc3a1n.pdf',
        'Rodríguez, A. (1994). *Problemas, desafíos y mitos en la formación docente.* Perfiles Educativos, 63, Instituto sobre la Universidad y la Educación.',
        'Ruiz Bueno, C. (2001). *Evaluación de programas de formación de formadores: paradigmas y modelos de formación* (Tesis doctoral). Universidad de Barcelona. Disponible en: https://www.tdx.cat/bitstream/handle/10803/5003/crb03de12.pdf'
      ]
    },

     /* ⬇⬇ NUEVO bloque para la animación ⬇⬇ */
    {
      type : 'lottie',
      src  : 'https://lottie.host/822f7426-9c06-4a7f-85ad-f9e795d72fd6/09OzrRtAat.json'
            // pon aquí la animación que quieras
    }
  ]
},
  ],
};