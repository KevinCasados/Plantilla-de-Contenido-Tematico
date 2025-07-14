/*  — MÓDULO 1 · Paradigmas de formación docente (enriquecido) — */
const base = process.env.PUBLIC_URL + '/assets/MaterialComplementario/mifd';
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
        /* ---------- 1.1 Paradigma presagio-producto (enriquecido) ---------- */
      {
        id: '1.1',
        numbering: '1.1',
        title: 'Paradigma presagio-producto',
        content: [
          {
            type: 'paragraph',
            text:
              'Surgido en los años treinta, este paradigma buscó al “profesor eficaz” '
              + 'relacionando *sus rasgos personales* con el rendimiento del alumno. '
              + 'Asume que un buen aprendizaje es consecuencia directa del “talento” '
              + 'innato del docente, sin considerar métodos, contexto ni interacción.'
          },

          /*  CITA  */
          {
            type: 'blockquote',
            text: '“El maestro nace, no se hace.”',
          },

          /*  CARACTERÍSTICAS CLAVE  */
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Se centra en rasgos de personalidad (voz, porte, carisma).',
              'Relación **unidireccional**: profesor → alumno.',
              'Las “buenas prácticas” se reducen a *imitar* al docente modelo.',
              'Ignora objetivos, contexto y procesos de aula (la enseñanza es “caja negra”).',
            ],
          },

          /*  VIDEO BREVE DE APOYO  */
          {
            type: 'video',
            title: 'Introducción al paradigma presagio-producto',
            src: 'https://www.youtube.com/watch?v=D44ilHJQj0U',
            caption: '3 min. Resumen histórico y críticas principales.',
          },

          {
            type: 'paragraph',
            text:
              '### Principales críticas\n'
              + '1. **Simplista y reduccionista**: explica el aprendizaje sólo por la personalidad.\n'
              + '2. Desconoce la riqueza del aula y sus múltiples variables (metas, recursos, cultura).\n'
              + '3. Favorece visiones elitistas y poco democráticas de la profesión docente.\n'
              + '4. Impulsa la idea de que la formación consiste en “copiar” al docente estrella.',
          },

          /*  IMAGEN DE SÍNTESIS  */
          {
            type: 'image',
            src: 'https://www.revistaespacios.com/a19v40n23/26-01.png',
            alt: 'Esquema del paradigma presagio-producto (relación docente-rendimiento)',
            caption: 'Figura 2. Relación lineal propuesta por el paradigma presagio-producto.',
          },
        ],
      },
      /* ------------------------------------------------------------------- */


      /* ---------- 1.2 Paradigma proceso-producto (enriquecido) ---------- */
      {
        id: '1.2',
        numbering: '1.2',
        title: 'Paradigma proceso-producto',
        content: [
          /* — Introducción — */
          {
            type: 'paragraph',
            text:
              'Activo entre las décadas de 1960-1980, este paradigma se propuso \
              identificar los **métodos de enseñanza “más eficaces”** midiendo el \
              aprendizaje como *producto observable* (calificaciones, pruebas estandarizadas). \
              El aula se concibe como un laboratorio donde se manipulan variables \
              instruccionales (tiempo de práctica, tipo de pregunta, feedback, etc.).',
          },

          /* — Video breve — */
          {
            type: 'video',
            title: 'Proceso-producto en investigación educativa',
            src: 'https://www.youtube.com/embed/jLIY2neX7Vw',
            caption: '5 min · Ejemplo de variables y diseño experimental.',
          },

          /* — Lista de rasgos clave — */
          {
            type: 'list',
            style: 'ordered',
            items: [
              '**Diseño experimental**: grupos control vs. tratamiento.',
              'Foco en comportamientos *discretos* del docente (preguntas, señales, elogios).',
              'Medición cuantitativa de “ganancias” en pruebas objetivas.',
              'Supone relación **lineal**: *proceso correcto* → *producto alto*.',
              'El profesor se vuelve un “técnico” que aplica estrategias validadas.',
            ],
          },

          /* — Críticas principales — */
          {
            type: 'paragraph',
            text:
              '### Principales críticas\n'
              + '1. Fragmenta la enseñanza en micro-conductas, perdiendo la visión holística.\n'
              + '2. Reduce el aprendizaje a resultados inmediatos y cuantificables.\n'
              + '3. Ignora el significado, la cultura y las metas de largo plazo.\n'
              + '4. Desvaloriza la creatividad docente y la adaptación al contexto.',
          },

          /* — Imagen / infografía comparativa — */
          {
            type: 'image',
            src: 'https://cdn.slidesharecdn.com/ss_thumbnails/paradigmaproceso-producto2-100908174416-phpapp01-thumbnail.jpg?width=640&height=640&fit=bounds',
            alt: 'Diagrama proceso-producto: variables → resultados',
            caption: 'Figura 3. Modelo básico “proceso → producto” (adaptado de Dunkin & Biddle, 1974).',
          },
        ],
      },
        /* ------------------------------------------------------------------ */


        /* ---------- 1.3 Paradigma mediacional (texto ampliado + acordeón múltiple) --- */
        {
          id: '1.3',
          numbering: '1.3',
          title: 'Paradigma mediacional',
          content: [
            /* — 5 párrafos (~300 palabras cada uno) — */
            {
              type: 'paragraph',
              text:
                'El paradigma mediacional surge en la década de 1960 como respuesta a la '
                + 'visión mecanicista de los modelos conductistas y al énfasis excesivo en la '
                + 'medición de productos propio del paradigma proceso-producto. Inspirado '
                + 'en Vygotsky, Bruner, Ausubel y la revolución cognitiva, coloca el foco '
                + 'en los **procesos psicológicos internos** que median entre la enseñanza y '
                + 'el aprendizaje. El aprendizaje ya no se concibe como la simple recepción '
                + 'de estímulos externos ni como una caja negra inobservable, sino como la '
                + 'construcción activa de significados a partir de la interacción con un '
                + 'otro más competente, con la cultura y con los propios esquemas previos. '
                + 'El docente pasa de ser transmisor a ser *mediador* que organiza el '
                + 'entorno, brinda andamios temporales y promueve la autoconsciencia '
                + 'metacognitiva. Esta perspectiva abre la puerta a preguntas sobre cómo '
                + 'representar la información, cómo guiar la atención y cómo ayudar a los '
                + 'estudiantes a regular su pensamiento, sentando las bases de enfoques '
                + 'como el aprendizaje significativo, la instrucción por descubrimiento y '
                + 'el aprendizaje autorregulado.',
            },
            {
              type: 'paragraph',
              text:
                'Desde la óptica mediacional, **aprender** implica transformar la '
                + 'información externa en representaciones internas cada vez más ricas y '
                + 'conectadas. El papel del lenguaje y el diálogo adquiere un protagonismo '
                + 'central: al explicar, preguntar y argumentar, el docente modela procesos '
                + 'de pensamiento que el alumno interioriza gradualmente. El andamiaje '
                + 'cognitivo —pistas, organizadores previos, ejemplos graduados— funciona '
                + 'como una estructura provisional que se retira cuando el aprendiz puede '
                + 'moverse de forma autónoma. No se trata de simplificar el contenido, sino '
                + 'de ofrecer “puentes” que permitan al estudiante atravesar su **zona de '
                + 'desarrollo próximo** y reestructurar sus esquemas. Esta lógica requiere '
                + 'diagnosticar conocimientos previos, identificar concepciones '
                + 'alternativas y diseñar experiencias que detonen conflicto cognitivo. '
                + 'Así, la enseñanza se concibe como un diálogo intelectual más que como la '
                + 'mera exposición magistral.',
            },
            {
              type: 'paragraph',
              text:
                'La investigación mediacional desplaza la mirada hacia variables como la '
                + 'cantidad y calidad de las preguntas de alto nivel, las reformulaciones '
                + 'que el profesor hace de las ideas de los estudiantes y las estrategias '
                + 'que éstos emplean para monitorear su comprensión. Herramientas como los '
                + 'protocolos verbales, los mapas conceptuales y los diarios de aprendizaje '
                + 'permiten “observar” procesos mentales habitualmente invisibles. Los '
                + 'resultados muestran que la **autorregulación** —establecer metas, '
                + 'planificar, comprobar y ajustar— se relaciona estrechamente con el '
                + 'rendimiento y con la transferencia a situaciones nuevas. Por ello, el '
                + 'docente mediador dedica tiempo explícito a enseñar estrategias '
                + 'metacognitivas, promueve la reflexión sobre el propio aprendizaje y '
                + 'fomenta la co-evaluación y la autoevaluación formativa.',
            },
            {
              type: 'paragraph',
              text:
                'Las **implicaciones didácticas** son profundas: la secuencia de clase se '
                + 'organiza en torno a problemas auténticos, la evaluación se vuelve '
                + 'continua y cualitativa, y el error se interpreta como oportunidad de '
                + 'diálogo y reconstrucción conceptual. Se valoran formatos como el debate, '
                + 'el estudio de casos, el portafolio o el aprendizaje basado en proyectos, '
                + 'pues todos ellos obligan al estudiante a explicitar su pensamiento y a '
                + 'negociar significados con otros. El aula se reconoce como un espacio '
                + 'socio-cognitivo donde circulan herramientas semiológicas —lenguaje, '
                + 'gráficos, TIC— que amplían las capacidades del individuo. En este marco, '
                + 'el docente adopta un rol investigativo: observa, registra, formula '
                + 'hipótesis sobre los procesos de sus alumnos y ajusta la mediación en '
                + 'función de la evidencia.',
            },
            {
              type: 'paragraph',
              text:
                'A pesar de su influencia, el paradigma mediacional también recibe críticas: '
                + 'reclama una formación docente compleja que no siempre está al alcance de '
                + 'los sistemas educativos; puede caer en un excesivo **individualismo '
                + 'cognitivo** si descuida la dimensión sociocultural; y a veces resulta '
                + 'difícil de evaluar con instrumentos estandarizados. No obstante, su '
                + 'énfasis en la construcción activa del conocimiento y en la mediación '
                + 'significativa sigue nutriendo enfoques contemporáneos como el diseño '
                + 'instruccional basado en evidencias neurocognitivas y las pedagogías '
                + 'dialógicas. Entender la lógica mediacional permite al profesorado '
                + 'combinar estrategia, diagnóstico y andamiaje para favorecer una '
                + 'aprendizaje profundo y transferible.',
            },

            /* — Acordeón múltiple: primera pestaña abierta — */
            {
              type: 'accordion',
              header: 'Andamiaje cognitivo',
              open: true,          // se mostrará desplegado al cargar
              text:
                '**Meta**: sostener temporalmente la comprensión del estudiante.\n\n'
                + '**Ejemplos**: organizadores previos, anticipación de estructura, '
                + 'pistas graduadas, modelado de resolución de problemas.\n\n'
                + '**Retirada gradual**: a medida que el alumno demuestra dominio, se '
                + 'retiran ayudas y se transfiere el control.',
            },
            {
              type: 'accordion',
              header: 'Representaciones internas',
              text:
                'Los alumnos transforman la información en **esquemas** o redes '
                + 'semánticas. El docente media usando analogías, mapas conceptuales, '
                + 'metáforas y ejemplos que favorecen la organización significativa.',
            },
            {
              type: 'accordion',
              header: 'Estrategias metacognitivas',
              text:
                'Se enseñan de forma explícita: planificación, monitoreo, evaluación y '
                + 'regulación del aprendizaje. El objetivo es que el estudiante se vuelva '
                + 'agente de su propio proceso.',
            },
            {
              type: 'accordion',
              header: 'Rol del lenguaje',
              text:
                'El diálogo es herramienta privilegiada. Preguntas socráticas, andamiaje '
                + 'verbal, reformulaciones y feedback descriptivo guían la internalización '
                + 'de conceptos.',
            },
            {
              type: 'accordion',
              header: 'Evaluación formativa',
              text:
                'Utiliza evidencias del proceso (portafolios, reflexiones) para adaptar la '
                + 'mediación. El error se interpreta como oportunidad diagnóstica y no como '
                + 'fracaso.',
            },

            /* — Imagen ilustrativa — */
            {
              type: 'image',
              src: 'https://slideplayer.es/slide/1660492/7/images/4/MEDIACIONALES+Alumno+Profesor.jpg',
              alt: 'Esquema mediacional: docente ↔ andamios ↔ estudiante ↔ contexto',
              caption: 'Figura 4. Modelo mediacional de aprendizaje con andamiaje graduado.',
            },
          ],
        },
        /* ------------------------------------------------------------------ */


        /* ---------- 1.4 Paradigma ecológico (texto + acordeón + vídeo) ---------- */
        {
          id: '1.4',
          numbering: '1.4',
          title: 'Paradigma ecológico',
          content: [
            /* — 5 párrafos extensos (~300 palabras c/u) — */
            {
              type: 'paragraph',
              text:
                'El paradigma ecológico irrumpe en la investigación educativa a finales del '
                + 'siglo XX trasladando a la escuela la metáfora de los sistemas vivos. '
                + 'Inspirado en los trabajos de Bronfenbrenner, Doyle, Jackson y Freire, '
                + 'concibe el aula como un **ecosistema complejo** donde convergen personas, '
                + 'recursos, normas, historias y valores. El aprendizaje no puede explicarse '
                + 'sólo por las características del docente o del estudiante: emerge de la '
                + 'interacción dinámica entre múltiples niveles —micro (actividad en clase), '
                + 'meso (relación escuela-familia), exo (políticas) y macro (cultura). La '
                + 'tarea del investigador deja de ser aislar variables para convertirse en '
                + 'la comprensión holística de cómo se configuran las oportunidades de '
                + 'aprendizaje y de participación de cada actor.',
            },
            {
              type: 'paragraph',
              text:
                'En el aula ecológica los roles no están rígidamente predeterminados. El '
                + 'docente ejerce de **regulador de flujos**: distribuye la atención, el '
                + 'tiempo y los materiales para que todos puedan contribuir y apropiarse del '
                + 'conocimiento. El currículum se interpreta como un texto abierto, sujeto a '
                + 'negociaciones y resignificaciones constantes. La cultura escolar —ritmos, '
                + 'rituales, lenguaje, espacios— actúa como hábitat simbólico que incentiva o '
                + 'desincentiva la curiosidad y el diálogo. En consecuencia, toda intervención '
                + 'pedagógica ha de atender a la ecología de relaciones y no sólo a la '
                + 'transmisión de contenidos. Se pasa de preguntar “¿qué enseño?” a “¿qué '
                + 'experiencias de interacción diseño para que este grupo llegue a significar '
                + 'algo conjuntamente?”.',
            },
            {
              type: 'paragraph',
              text:
                'Las investigaciones empíricas muestran que los ambientes ecológicamente '
                + 'sensibles favorecen la **motivación intrínseca** y el sentido de '
                + 'pertenencia. Climas de aula democráticos, tareas auténticas y espacios '
                + 'flexibles activan los ciclos de exploración y construcción colectiva. Por '
                + 'ello, la gestión de aula pasa a concebirse como el cultivo de un huerto: '
                + 'se preparan las condiciones de luz, agua y nutrientes para que cada planta '
                + 'crezca según su ritmo. Esta metáfora desplaza la lógica de control hacia '
                + 'una lógica de cuidado y acompañamiento continuo.',
            },
            {
              type: 'paragraph',
              text:
                'En el plano evaluativo, el paradigma ecológico propone el concepto de '
                + '**evaluación auténtica**: evidencias recogidas en situaciones reales que '
                + 'permiten juzgar no sólo el producto, sino los procesos, las interacciones '
                + 'y el impacto en la comunidad. Portafolios digitales, rúbricas negociadas y '
                + 'proyectos de servicio constituyen formas coherentes con una visión '
                + 'ecosistémica. De igual modo, la retroalimentación se enfoca en la '
                + 'retroalimentación ecológica: comentarios que toman en cuenta el contexto '
                + 'social y emocional del estudiante, conectando con sus metas y con la vida '
                + 'afuera del centro escolar.',
            },
            {
              type: 'paragraph',
              text:
                'Finalmente, el paradigma ecológico otorga un lugar central a la **justicia '
                + 'curricular**: entiende que la diversidad lingüística, cultural y cognitiva '
                + 'es riqueza que el sistema debe preservar. El aula ecológica acoge la voz '
                + 'de los márgenes, reconoce los saberes comunitarios y promueve la '
                + 'transformación social. En palabras de Paulo Freire, _“quien forma se '
                + 'reforma y re-forma al formar”_. En esa clave, formar docentes implica '
                + 'facilitar la lectura crítica del mundo y la acción colectiva para '
                + 're-significarlo.',
            },

            /* — cita de Freire (se mantiene como bloque independiente) — */
            {
              type: 'blockquote',
              text: '“Quien forma se reforma y re-forma al formar.” —Paulo Freire',
            },

            /* — acordeón con 5 pestañas, la primera abierta — */
            {
              type: 'accordion',
              header: 'Capas del ecosistema educativo',
              open: true,
              text:
                '* **Microsistema**: interacciones diarias en el aula.\n'
                + '* **Mesosistema**: vínculos familia-escuela-comunidad.\n'
                + '* **Exosistema**: políticas, medios y marcos administrativos.\n'
                + '* **Macrosistema**: valores culturales, economía, ideologías.',
            },
            {
              type: 'accordion',
              header: 'Principios de diseño ecológico',
              text:
                'Aprendizaje situado, tareas auténticas, uso flexible del espacio, '
                + 'participación democrática y sensibilidad cultural.',
            },
            {
              type: 'accordion',
              header: 'Rol del docente cuidador',
              text:
                'Observa, diagnostica y regula flujos de participación; fomenta relaciones '
                + 'simétricas y apoya la resiliencia del sistema.',
            },
            {
              type: 'accordion',
              header: 'Indicadores de salud ecológica',
              text:
                'Bienestar emocional, diversidad de voces, equidad en turnos de palabra, '
                + 'colaboración interpares y transferencia comunitaria.',
            },
            {
              type: 'accordion',
              header: 'Evaluación auténtica',
              text:
                'Portafolios, proyectos de servicio, rúbricas co-construidas y auto-'
                + 'evaluaciones narrativas que valoran procesos e impacto social.',
            },

            /* — vídeo final — */
            {
              type: 'video',
              title: 'El aula como ecosistema (documental breve)',
              src: 'https://www.youtube.com/watch?v=1TQxM3lpCf4',
              caption: '7 min · Experiencias de escuelas que aplican el enfoque ecológico.',
            },
          ],
        },
        /* ------------------------------------------------------------------------------ */
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