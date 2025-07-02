/*  ──────────────────────────────────────────────────────────────
    MÓDULO 2 · Modelos de formación de formadores
    Fuente: MaterialDeEstudio-Modulo2.pdf
    ────────────────────────────────────────────────────────────── */

export default {
  /* 1 · claves de ruteo */
  programId: 'doctorado-educacion',   // carpeta de programa
  courseId : 'mifd',                  // “Modelo Integrador de Formación Docente”
  id       : 'modulo2',

  /* 2 · metadatos */
  courseName: 'Modelo Integrador de Formación Docente',
  title     : 'Módulo 2. Modelos de formación de formadores',
  semestre  : 'Primer Semestre',
  teacher   : 'Dr. Héctor Martínez Guerrero',

  /* 3 · objetivo y competencias */
  objective:
    'Que los doctorandos identifiquen y analicen los modelos de formación \
docente que han predominado en la investigación didáctica y reflexionen sobre \
sus implicaciones en la formación de los futuros profesores y en los resultados \
de la práctica educativa.',

  competencies: [
    'Analizar los modelos de formación docente imperantes.',
    'Observar videos y lecturas para comparar los modelos.',
    'Construir un cuadro de doble entrada que valore sus efectos en la práctica.',
  ],

  /* 4 · temario */
  themes: [
    /* — información general de la unidad — */
    {
      id: '2.info',
      numbering: 'Info',
      title: 'Información general del módulo',
      content: [],
      isUnitInfo: true,
    },

    /* — Nodo II — */
    {
      id: '2',
      numbering: 'Nodo II',
      title: 'Modelos de formación de formadores',
      content: [
        { type: 'paragraph',
          text: 'Se analizan seis modelos históricos que han guiado la \
preparación de docentes; cada uno se vincula a un paradigma didáctico y se \
evalúan sus alcances y limitaciones.' },
      ],
      subthemes: [
        {
          id: '2.1',
          numbering: '2.1',
          title: 'Modelo artesanal',
          content: [
            { type: 'paragraph',
              text: 'Aprender a enseñar por imitación del maestro experto; la \
intuición y la experiencia directa sustituyen la reflexión teórica.' },
          ],
        },
        {
          id: '2.2',
          numbering: '2.2',
          title: 'Modelo académico',
          content: [
            { type: 'paragraph',
              text: 'La formación se centra en el dominio enciclopédico o \
comprensivo de la disciplina que el docente “transmite”.' },
          ],
        },
        {
          id: '2.3',
          numbering: '2.3',
          title: 'Modelo técnico',
          content: [
            { type: 'paragraph',
              text: 'Basado en la racionalidad técnica: el profesor es un \
ejecutor de métodos “científicos” de enseñanza, entrenado en técnicas \
eficaces.' },
          ],
        },
        {
          id: '2.4',
          numbering: '2.4',
          title: 'Modelo personalista (humanista)',
          content: [
            { type: 'paragraph',
              text: 'Coloca al futuro docente y su autodesarrollo en el centro; \
favorece el autoconcepto positivo y la congruencia personal.' },
          ],
        },
        {
          id: '2.5',
          numbering: '2.5',
          title: 'Perspectiva práctica',
          content: [
            { type: 'paragraph',
              text: 'La enseñanza es una actividad compleja: el docente reflexivo \
analiza y reconstruye su práctica sobre la marcha.' },
          ],
        },
        {
          id: '2.6',
          numbering: '2.6',
          title: 'Orientación social-reconstruccionista',
          content: [
            { type: 'paragraph',
              text: 'Concibe al profesor como un intelectual crítico comprometido \
con la justicia y la transformación social mediante investigación-acción.' },
          ],
        },
      ],
    },
  ],
};