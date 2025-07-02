/*  — MÓDULO 1 · Paradigmas de formación docente (enriquecido) — */
export default {
  programId : 'doctorado-educacion',
  courseId  : 'mifd',
  id        : 'modulo1',

  courseName : 'Modelo Integrador de Formación Docente',
  title      : 'Módulo 1. Paradigmas de formación docente',
  semestre   : 'Primer Semestre',
  teacher    : 'Dr. Héctor Martínez Guerrero',

  objective:
    'Que los doctorandos identifiquen el concepto de formación y formación docente y analicen los paradigmas predominantes, reflexionando sobre sus implicaciones en la práctica educativa.',

  competencies: [
    'Identificar los conceptos de formación y formación docente.',
    'Analizar paradigmas presagio-producto, proceso-producto, mediacional y ecológico.',
    'Reflexionar críticamente sobre la práctica docente y su contexto.',
    'Elaborar una infografía colaborativa que sintetice los paradigmas.',
  ],

  themes: [
    {
      id: '1.info',
      numbering: 'Info',
      title: 'Información general del módulo',
      isUnitInfo: true,
      content: [],
    },

    /* ——— NODO I ——— */
    {
      id: '1',
      numbering: 'Nodo I',
      title: 'Paradigmas de formación docente',
      content: [
        {
          type: 'paragraph',
          text: 'En este nodo se describen los paradigmas que han marcado la investigación sobre formación docente a lo largo del siglo XX y XXI. Cada paradigma responde a una manera diferente de concebir al docente, al aprendizaje y al contexto escolar.',
        },
        {
          type: 'video',
          title: '¿Qué es un paradigma educativo?',
          src: 'https://www.youtube.com/embed/-PXMjDkq8gQ',
          caption: 'Video introductorio (4 min).',
        },
        {
          type: 'paragraph',
          text: 'Reflexiona: mientras observas el video, identifica elementos que todavía persisten en tu práctica o en la cultura escolar de tu institución.',
        },
        {
          type: 'list',
          style: 'unordered',
          items: [
            'Los paradigmas no se sustituyen completamente: suelen coexistir.',
            'Cada paradigma privilegia ciertos indicadores de “éxito” docente.',
            'La formación inicial reproduce, consciente o inconscientemente, estas visiones.',
          ],
        },
        {
          type: 'image',
          src: 'https://efdeportes.com/efd139/la-eva3.jpg',
          alt: 'Evolución de paradigmas de formación',
          caption: 'Figura 1. Evolución de los paradigmas (EFD Deportes).',
        },
      ],
      subthemes: [
        {
          id: '1.1',
          numbering: '1.1',
          title: 'Paradigma presagio-producto',
          content: [
            {
              type: 'paragraph',
              text: 'Relaciona las características personales del profesor con el rendimiento del alumno, asumiendo una relación lineal entre “buen docente” y “buen aprendizaje”.',
            },
            {
              type: 'blockquote',
              text: '“El maestro nace, no se hace.”',
            },
          ],
        },
        {
          id: '1.2',
          numbering: '1.2',
          title: 'Paradigma proceso-producto',
          content: [
            {
              type: 'paragraph',
              text: 'Se centra en los métodos de enseñanza “más eficaces” y en la medición observable de resultados de aprendizaje.',
            },
            {
              type: 'list',
              style: 'ordered',
              items: [
                'Diseño experimental para comparar métodos.',
                'Énfasis en resultados cuantitativos estandarizados.',
                'Visión instrumentista del profesorado.',
              ],
            },
          ],
        },
        {
          id: '1.3',
          numbering: '1.3',
          title: 'Paradigma mediacional',
          content: [
            {
              type: 'paragraph',
              text: 'Incorpora los procesos cognitivos de docentes y discentes; el aprendizaje depende de las estrategias internas de procesamiento de información.',
            },
          ],
        },
        {
          id: '1.4',
          numbering: '1.4',
          title: 'Paradigma ecológico',
          content: [
            {
              type: 'paragraph',
              text: 'Considera el aula como un ecosistema complejo donde contexto, interacciones y cultura configuran la enseñanza-aprendizaje.',
            },
            {
              type: 'blockquote',
              text: '“Quien forma se reforma y re-forma al formar.” —Paulo Freire',
            },
          ],
        },
      ],
    },
  ],
};