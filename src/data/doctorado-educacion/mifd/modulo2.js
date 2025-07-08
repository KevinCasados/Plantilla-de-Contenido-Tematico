/*  ──────────────────────────────────────────────────────────────
    MÓDULO 2 · Modelos de formación de formadores
    Fuente: MaterialDeEstudio-Modulo2.pdf
    ────────────────────────────────────────────────────────────── */
const base = process.env.PUBLIC_URL + '/assets/MaterialComplementario/mifd';
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
      /* ───────────────────────── NODO II (enriquecido) ───────────────────────── */

        id: '2',
        numbering: 'Nodo II',
        title: 'Modelos de formación de formadores',
        content: [
          /* ───────── 5 párrafos extensos ───────── */
          {
            type: 'paragraph',
            text:
              'A lo largo del siglo XX, la investigación educativa ha ido delineando **modelos de '
              + 'formación docente** que reflejan maneras muy distintas de entender la enseñanza y '
              + 'el aprendizaje. Cada modelo se construye en diálogo —y a veces en tensión— con los '
              + 'paradigmas didácticos revisados en la sesión anterior. Así, mientras el paradigma '
              + 'presagio-producto privilegia las cualidades personales del maestro, el modelo '
              + 'artesanal traduce esa lógica en un aprendizaje por imitación; el paradigma '
              + 'proceso-producto desemboca en modelos donde el dominio disciplinar y la técnica '
              + 'eficaz se vuelven eje; el paradigma mediacional proyecta modelos que sitúan el '
              + 'desarrollo personal y la práctica reflexiva en el centro; finalmente, el paradigma '
              + 'ecológico inspira visiones sociocríticas que conciben al formador como un agente de '
              + 'transformación. Comprender estos modelos es crucial, pues todavía conviven —a '
              + 'veces de forma híbrida— en nuestras instituciones y configuran las oportunidades de '
              + 'aprendizaje de los futuros profesores.',
          },
          {
            type: 'paragraph',
            text:
              'Hablar de **modelos** implica reconocer que la formación docente no es un proceso '
              + 'neutral: cada perspectiva selecciona qué rasgos cultivar, qué saberes priorizar y qué '
              + 'formas de evaluar legitimar. El modelo artesanal, por ejemplo, concibe la maestría '
              + 'como algo que se absorbe de un experto y se perfecciona con la experiencia; en el '
              + 'modelo académico, la excelencia radica en un dominio enciclopédico o comprensivo '
              + 'de la disciplina; la versión técnica, inspirada en la racionalidad instrumental, exige '
              + 'adiestrar al futuro profesor en métodos validados empíricamente; los modelos '
              + 'humanistas y prácticos, en cambio, sitúan el autodesarrollo y la reflexión crítica como '
              + 'condición para enseñar; por último, la orientación socio-reconstruccionista asume la '
              + 'docencia como praxis política que persigue justicia y emancipación.',
          },
          {
            type: 'paragraph',
            text:
              'Analizar estos enfoques a la luz de las necesidades contemporáneas revela tensiones '
              + 'importantes. Las sociedades de hoy exigen docentes capaces de aprender de manera '
              + 'continua, dialogar con la diversidad cultural y diseñar ambientes de aprendizaje '
              + 'flexibles y colaborativos. El modelo artesanal resulta limitado en contextos que '
              + 'requieren respuestas creativas e interdisciplinarias; la versión estrictamente '
              + 'técnica corre el riesgo de convertir la enseñanza en mera aplicación de recetas y '
              + 'desatender la dimensión ética; los modelos humanistas y reflexivos, aunque potentes '
              + 'para el desarrollo personal, necesitan complementarse con una sólida base '
              + 'disciplinar y un manejo crítico de la información. La perspectiva ecológica propone '
              + 'una síntesis: reconoce la complejidad de los sistemas educativos y llama a articular '
              + 'la reflexión personal con la acción transformadora.',
          },
          {
            type: 'paragraph',
            text:
              'Desde el punto de vista **investigativo**, cada modelo ha originado métodos y '
              + 'herramientas específicas: el artesanal se apoya en historias de vida y análisis de '
              + 'casos ejemplares; el académico privilegia el estudio de plan de estudios y la '
              + 'evaluación de contenidos; el técnico recurre a diseños cuasi-experimentales para '
              + 'medir la eficacia de estrategias; el modelo personalista explora testimonios, diarios '
              + 'y escalas de autopercepción; la perspectiva práctica utiliza la investigación-acción y '
              + 'el análisis de la reflexión en la acción; la orientación sociocrítica incorpora el '
              + 'estudio etnográfico y la crítica de políticas educativas. Conocer estas metodologías '
              + 'empodera al formador para seleccionar evidencias pertinentes y diseñar programas '
              + 'de desarrollo profesional contextualizados.',
          },
          {
            type: 'paragraph',
            text:
              'En síntesis, revisar los **Modelos de formación de formadores** no es ejercicio '
              + 'histórico nostálgico, sino paso necesario para repensar la formación inicial y en '
              + 'servicio. Cada modelo aporta ideas valiosas y, al mismo tiempo, deja preguntas '
              + 'abiertas. ¿Qué combinaciones resultan más potentes hoy? ¿Cómo construir itinerarios '
              + 'flexibles que articulen saber disciplinar, reflexión ética, destreza técnica y compromiso '
              + 'social? A lo largo de los subtemas profundizaremos en seis modelos históricos, '
              + 'analizando sus principios, fortalezas y limitaciones con el fin de diseñar propuestas '
              + 'formativas más coherentes con la complejidad de la práctica docente contemporánea.',
          },

          /* ───────── Acordeón (6 pestañas), primera abierta ───────── */
          {
            type: 'accordion',
            header: '2.1 Modelo artesanal',
            open: true,
            text:
              'Basado en la **imitación** del maestro “ejemplar”. Confía en la práctica repetida y la '
              + 'experiencia intuitiva; subestima la reflexión sistemática y el análisis teórico. Vigente '
              + 'en contextos donde la formación se produce casi exclusivamente en el aula de '
              + 'práctica.',
          },
          {
            type: 'accordion',
            header: '2.2 Modelo académico',
            text:
              'Entiende la enseñanza como **transmisión disciplinar**. El docente es ante todo un '
              + 'especialista en su campo; la pedagogía queda en segundo plano. Incluye dos variantes: '
              + '*enciclopédico* (centrado en la acumulación de datos) y *comprensivo* '
              + '(profundiza en la epistemología y los procesos de producción del conocimiento).',
          },
          {
            type: 'accordion',
            header: '2.3 Modelo técnico',
            text:
              'Inspirado en la **racionalidad instrumental**. Forma a un docente “técnico” capaz de '
              + 'aplicar métodos efectivos y medir resultados. Se apoya en la psicología conductista y '
              + 'en la investigación proceso-producto; promueve la estandarización.',
          },
          {
            type: 'accordion',
            header: '2.4 Modelo personalista (humanista)',
            text:
              'Ubica al **desarrollo personal** del docente en el centro. La autoexploración, la '
              + 'autoestima y la congruencia son claves. Se basa en la psicología humanista '
              + '(Rogers, Maslow) y valora la relación empática como medio principal de influencia '
              + 'educativa.',
          },
          {
            type: 'accordion',
            header: '2.5 Perspectiva práctica (profesor reflexivo)',
            text:
              'Concibe la enseñanza como **actividad compleja y contextualizada**. El profesor es un '
              + 'práctico reflexivo que aprende en y sobre la acción mediante investigación-acción y '
              + 'colaboración entre pares.',
          },
          {
            type: 'accordion',
            header: '2.6 Orientación social-reconstruccionista',
            text:
              'Enraizada en el paradigma ecológico, ve al docente como **intelectual crítico** encargado '
              + 'de transformar la sociedad. La formación promueve conciencia política, justicia '
              + 'curricular y emancipación de grupos oprimidos.',
          },

          /* ───────── Vídeo de cierre ───────── */
          {
            type: 'video',
            title: 'Comparativa de modelos de formación docente',
            src: 'https://www.youtube.com/watch?v=lj0vEKD5n-o',
            caption: '8 min · Síntesis visual de los seis modelos, con ejemplos de aula.',
          },
        ],
      /* ───────────────────────────────────────────────────────────────────────── */


      subthemes: [
        /* -------------- 2.1 Modelo artesanal (4 párrafos + vídeo) -------------- */
      {
        id: '2.1',
        numbering: '2.1',
        title: 'Modelo artesanal',
        content: [
          /* — Párrafo 1 — */
          {
            type: 'paragraph',
            text:
              'El **modelo artesanal** se remonta a los primeros sistemas de formación '
              + 'docente, cuando la profesión se transmitía como un oficio. El aspirante '
              + 'observaba a un maestro con reputación de experto, reproducía sus rutinas '
              + 'y ajustaba la práctica con base en la retroalimentación implícita que '
              + 'proporcionaba la experiencia cotidiana. La lógica subyacente afirma que '
              + 'la maestría reside en acciones corporizadas y saberes tácitos difíciles '
              + 'de verbalizar, de modo que el aprendizaje se produce por imitación y '
              + 'participación progresiva en la comunidad escolar.',
          },

          /* — Párrafo 2 — */
          {
            type: 'paragraph',
            text:
              'Dentro de este enfoque, los **planes de estudio** son flexibles o, en su '
              + 'versión más tradicional, inexistentes. El currículo lo conforma la '
              + 'práctica viva: manejo de aula, improvisación de explicaciones, uso de '
              + 'recursos locales y negociación de la disciplina. Se asume que la '
              + 'intuición docente—afinada tras años de experiencia—es más valiosa que la '
              + 'teoría. De ahí la famosa consigna: _“el maestro se hace en la práctica, '
              + 'no en los libros”_.',
          },

          /* — Párrafo 3 — */
          {
            type: 'paragraph',
            text:
              'Si bien el modelo artesanal dignifica la **sabiduría práctica** y reconoce '
              + 'la relevancia de la inmersión en contextos reales, también presenta '
              + 'limitaciones. Puede perpetuar prácticas obsoletas, reforzar sesgos '
              + 'personales y descuidar los fundamentos pedagógicos que permiten adaptar '
              + 'la enseñanza a poblaciones diversas. Además, otorga poca visibilidad a '
              + 'la reflexión sistemática y a la investigación educativa como fuentes de '
              + 'mejora continua.',
          },

          /* — Párrafo 4 — */
          {
            type: 'paragraph',
            text:
              'Hoy, varias instituciones combinan la **aprendizaje-aprendiz** de este '
              + 'modelo con la mentoría reflexiva y el análisis de casos, buscando un '
              + 'equilibrio entre experiencia situada y fundamentos teóricos. Programas '
              + 'de residencia docente y “clínicas de práctica” modernos se inspiran en '
              + 'la premisa artesanal de aprender haciendo, pero añaden tutoría guiada, '
              + 'observación focalizada y conversación crítica sobre la toma de '
              + 'decisiones pedagógicas.',
          },

          /* — Vídeo ilustrativo — */
          {
            type: 'video',
            title: 'Aprender a enseñar por inmersión',
            src: 'https://www.youtube.com/watch?v=kMU3GbereKw',
            caption: '6 min · Ejemplo de residencia docente en un modelo artesanal contemporáneo.',
          },
        ],
      },
      /* ----------------------------------------------------------------------- */

      /* -------------- 2.2 Modelo académico (5 párrafos + imagen) -------------- */
      {
        id: '2.2',
        numbering: '2.2',
        title: 'Modelo académico',
        content: [
          /* — Párrafo 1 — */
          {
            type: 'paragraph',
            text:
              'El **modelo académico** concibe la formación docente como un proceso de '
              + 'profundización disciplinar. La excelencia del profesor reside en el '
              + 'conocimiento enciclopédico —o comprensivo— de la materia que “transmite”. '
              + 'Se alimenta de la tradición universitaria napoleónica, donde la función '
              + 'docente es extensión natural de la investigación y la erudición.',
          },

          /* — Párrafo 2 — */
          {
            type: 'paragraph',
            text:
              'Los **planes de estudio** privilegian cursos teóricos, seminarios de '
              + 'monografía, análisis crítico de fuentes primarias y metodologías de la '
              + 'investigación disciplinar. La pedagogía suele relegarse a un par de '
              + 'asignaturas generales; se asume que quien conoce a fondo su campo '
              + 'sabrá simplificarlo para los neófitos. La evaluación se centra en '
              + 'pruebas escritas, ensayos y exposiciones orales donde el candidato '
              + 'demuestra rigor conceptual y exactitud factual.',
          },

          /* — Párrafo 3 — */
          {
            type: 'paragraph',
            text:
              'Entre sus **fortalezas** destaca la solidez del saber científico, la '
              + 'vinculación con comunidades académicas y la promoción de hábitos '
              + 'intelectuales como la argumentación respaldada por evidencia. Sin '
              + 'embargo, adolece de una “ceguera didáctica”: el dominio conceptual no '
              + 'garantiza la capacidad de traducir ideas complejas a experiencias de '
              + 'aprendizaje significativas, especialmente para alumnado diverso.',
          },

          /* — Párrafo 4 — */
          {
            type: 'paragraph',
            text:
              'Para superar esa brecha surge la noción de **conocimiento pedagógico del '
              + 'contenido** (Shulman, 1986), que integra saber disciplinar y saber '
              + 'enseñar. Actualmente muchos programas académicos incluyen laboratorios '
              + 'de didáctica específica —por ejemplo, “Didáctica de la Historia” o '
              + '“Química en contexto”— donde los futuros profesores diseñan unidades '
              + 'didácticas basadas en sus dominios de investigación.',
          },

          /* — Párrafo 5 — */
          {
            type: 'paragraph',
            text:
              'En la era de la información, el modelo académico se renueva con '
              + '**recursos abiertos**, cultura maker e indagación guiada. El profesor '
              + 'pasa de expositor magistral a curador de conocimiento y mentor de '
              + 'proyectos. El reto es equilibrar la profundidad disciplinar con la '
              + 'responsabilidad de crear puentes hacia realidades estudiantiles y '
              + 'problemas sociales, evitando caer en el elitismo enciclopedista.',
          },

          /* — Imagen ilustrativa — */
          {
            type: 'image',
            src: 'https://lh6.googleusercontent.com/-tQeOnjPrxBo/UBdVlJhadLI/AAAAAAAAAHY/CVrinx1qeZo/s461/tpack_espan%25CC%2583ol.jpg',
            alt: 'Pirámide del conocimiento disciplinar y pedagógico',
            caption: 'Figura 5. Relación entre conocimiento disciplinar y conocimiento pedagógico del contenido.',
          },
        ],
      },
      /* ------------------------------------------------------------------------ */
        /* -------------- 2.3 Modelo técnico (5 párrafos + acordeón + 2 imágenes) -------------- */
        {
          id: '2.3',
          numbering: '2.3',
          title: 'Modelo técnico',
          content: [
            /* — Párrafo 1 — */
            {
              type: 'paragraph',
              text:
                'El **modelo técnico** emerge en los años 1970-1980 influido por la racionalidad '
                + 'instrumental y la psicología conductista. Su premisa central es que la docencia puede '
                + 'descomponerse en **técnicas eficientes**, demostrables y replicables, de manera que '
                + 'el profesor opere como “ingeniero” del aprendizaje: aplica procedimientos validados, '
                + 'mide resultados y ajusta la instrucción siguiendo protocolos estandarizados.',
            },

            /* — Párrafo 2 — */
            {
              type: 'paragraph',
              text:
                'La formación docente, en consecuencia, se asemeja a un **manual de laboratorio**: '
                + 'se entrena al futuro profesor en habilidades observables —claridad de objetivos, '
                + 'variedad de preguntas, proporción de refuerzos, control del tiempo— y se evalúa la '
                + 'fidelidad con que reproduce dichas conductas. El éxito se mide a través de pruebas '
                + 'cuantitativas que comparan grupos control y tratamiento, usando métricas como “ganancia '
                + 'media estandarizada” o puntajes normalizados.',
            },

            /* — Imagen 1 — */
            {
              type: 'image',
              src: 'https://www.redalyc.org/journal/5216/521665144003/521665144003_gf2.png',
              alt: 'Ciclo técnico: objetivos ↔ métodos ↔ evaluación',
              caption: 'Figura 6. Ciclo básico del enfoque técnico.',
            },

            /* — Párrafo 3 — */
            {
              type: 'paragraph',
              text:
                'En su vertiente clásica, el modelo técnico produce **planes micro-enseñanza** y rúbricas '
                + 'detalladas que indican cuántas preguntas abiertas por minuto debe hacer el docente o '
                + 'qué proporción de elogios resulta óptima para mantener la atención. Investigaciones '
                + 'proceso-producto (Rosenshine, Brophy) sustentan estas recetas con análisis estadístico '
                + 'riguroso, lo que otorga una aureola de objetividad y “ciencia dura” a la formación.',
            },

            /* — Párrafo 4 — */
            {
              type: 'paragraph',
              text:
                'Las **críticas** señalan que tal enfoque cosifica la enseñanza, la reduce a una serie de '
                + 'inputs-outputs y desatiende la complejidad ética, cultural y emocional del aula. El '
                + 'modelo técnico tiende a ignorar la voz de los estudiantes, prioriza la eficacia sobre el '
                + 'sentido y puede convertirse en instrumento de control burocrático cuando los indicadores '
                + 'se transforman en fines en sí mismos.',
            },

            /* — Párrafo 5 — */
            {
              type: 'paragraph',
              text:
                'No obstante, la mirada técnica ha dejado un legado valioso: la **cultura de la evidencia** '
                + 'y la importancia de la evaluación formativa. Hoy se resignifica dentro de enfoques '
                + 'basados en datos (Learning Analytics), combinándose con perspectivas reflexivas y '
                + 'críticas para equilibrar métrica y significado.',
            },

            /* — Acordeón (4 pestañas, 1ª abierta) — */
            {
              type: 'accordion',
              header: 'Principios del modelo técnico',
              open: true,
              text:
                '* **Objetivos operativos**: conductas observables y medibles.\n'
                + '* **Medios-fin**: relación lineal entre estrategia aplicada y resultado.\n'
                + '* **Estandarización**: fidelidad de implementación como garantía de calidad.\n'
                + '* **Evaluación cuantitativa**: pruebas objetivas y análisis estadístico.',
            },
            {
              type: 'accordion',
              header: 'Fortalezas',
              text:
                'Ofrece un lenguaje común para describir la enseñanza, promueve la cultura de la '
                + 'evidencia y la evaluación formativa, facilita la capacitación inicial.',
            },
            {
              type: 'accordion',
              header: 'Limitaciones',
              text:
                'Reduce la complejidad del aula, ignora la dimensión cultural y afectiva, puede '
                + 'desempoderar al docente como creador y al estudiante como agente activo.',
            },
            {
              type: 'accordion',
              header: 'Re-lecturas contemporáneas',
              text:
                'Learning Analytics, micro-enseñanza reflexiva, diseño instruccional ágil y uso de '
                + 'dashboards de datos para toma de decisiones pedagógicas.',
            },

            /* — Imagen 2 — */
            {
              type: 'image',
              src: 'https://duranc74.wordpress.com/wp-content/uploads/2015/02/microensec3b1anza1.jpg',
              alt: 'Ejemplo de rúbrica técnica de micro-enseñanza',
              caption: 'Figura 7. Fragmento de rúbrica empleada en micro-enseñanza técnica.',
            },
          ],
        },
        /* ----------------------------------------------------------------------------- */
        /* -------------- 2.4 Modelo personalista (5 párrafos + vídeo) -------------- */
        {
          id: '2.4',
          numbering: '2.4',
          title: 'Modelo personalista (humanista)',
          content: [
            /* — Párrafo 1 — */
            {
              type: 'paragraph',
              text:
                'El **modelo personalista**, arraigado en la psicología humanista de Rogers y Maslow, '
                + 'sitúa el desarrollo integral del futuro docente en el centro del proceso formativo. '
                + 'Parte de la convicción de que “el maestro enseña lo que es” y que la congruencia '
                + 'entre pensamiento, emoción y acción constituye la base de toda relación educativa '
                + 'auténtica. Por ello, la formación prioriza la construcción de un autoconcepto positivo '
                + 'y la exploración de valores personales antes que la simple adquisición de técnicas.',
            },

            /* — Párrafo 2 — */
            {
              type: 'paragraph',
              text:
                'Los entornos formativos personalistas fomentan **climas de aceptación incondicional**: '
                + 'el estudiante‐docente se siente escuchado, comprendido y retado a autorealizarse. '
                + 'Las experiencias vivenciales (dinámicas de grupo, narrativas autobiográficas, '
                + 'teatro pedagógico) facilitan el contacto con la propia emocionalidad y la empatía. '
                + 'La evaluación se reconceptualiza como diálogo reflexivo, donde la pregunta clave '
                + 'es “¿quién soy como educador y cómo crezco a partir de la experiencia?”.',
            },

            /* — Párrafo 3 — */
            {
              type: 'paragraph',
              text:
                'En cuanto al **currículo**, se integran talleres de conciencia corporal, mindfulness, '
                + 'escucha activa y comunicación no violenta. El aprendizaje académico no desaparece, '
                + 'pero se vincula a proyectos de vida y a la búsqueda de sentido. El docente mentor '
                + 'modela la autenticidad: comparte dudas, reconoce errores y celebra la singularidad '
                + 'de cada participante. La meta es favorecer la **congruencia personal** —coherencia '
                + 'entre lo que se piensa, se siente y se hace— como condición para generar relaciones '
                + 'educativas sanas.',
            },

            /* — Párrafo 4 — */
            {
              type: 'paragraph',
              text:
                'Entre sus fortalezas destaca la creación de comunidades de aprendizaje basadas en la '
                + 'confianza y el crecimiento mutuo; sin embargo, el modelo puede ser criticado por su '
                + 'tendencia al **individualismo** si descuida la dimensión social y política de la '
                + 'docencia. Para evitarlo, los programas contemporáneos incorporan componentes de '
                + 'justicia social y trabajo colaborativo, de modo que la autorealización personal se '
                + 'articule con metas colectivas.',
            },

            /* — Párrafo 5 — */
            {
              type: 'paragraph',
              text:
                'En la era pospandemia, el enfoque humanista cobra nueva relevancia: el bienestar emocional, '
                + 'la resiliencia y la gestión de la incertidumbre se vuelven competencias docentes '
                + 'críticas. Modelos híbridos de formación combinan *coaching* personal, mentoring '
                + 'reflexivo y análisis de casos para acompañar al docente novel en la construcción de '
                + 'una identidad profesional sólida, empática y ética.',
            },

            /* — Vídeo inspirador — */
            {
              type: 'video',
              title: 'La docencia como encuentro auténtico',
              src: 'https://www.youtube.com/watch?v=XNpXmGqFjtk',   // reemplázalo si lo deseas
              caption: '5 min · Fragmento de conferencia sobre educación humanista.',
            },
          ],
        },
        /* ------------------------------------------------------------------------ */
        /* -------------- 2.5 Perspectiva práctica (5 párrafos + acordeón) -------------- */
        {
          id: '2.5',
          numbering: '2.5',
          title: 'Perspectiva práctica',
          content: [
            /* — Párrafo 1 — */
            {
              type: 'paragraph',
              text:
                'La **perspectiva práctica** (o enfoque del “profesor reflexivo”) entiende la enseñanza '
                + 'como una actividad situada y compleja donde las decisiones se toman en segundos, entre '
                + 'múltiples demandas y condiciones cambiantes. Surgida con Schön, Zeichner y Elbaz, se '
                + 'opone a la idea de aplicar recetas universales: cada contexto genera problemas únicos y '
                + 'exige interpretación profesional.',
            },

            /* — Párrafo 2 — */
            {
              type: 'paragraph',
              text:
                'El docente se concibe como un **practicante reflexivo** que analiza la acción en medio de '
                + 'la acción (reflection-in-action) y después de ella (reflection-on-action). La reflexión '
                + 'no es introspección aislada: involucra diálogo con colegas, revisión de evidencias, '
                + 'investigación-acción y articulación teoría-práctica para reconstruir el sentido de la '
                + 'tarea educativa.',
            },

            /* — Párrafo 3 — */
            {
              type: 'paragraph',
              text:
                'Los programas formativos basados en esta perspectiva incluyen **diarios de práctica**, '
                + '**portafolios reflexivos**, videograbación de clases y seminarios de discusión. El futuro '
                + 'profesor aprende a identificar dilemas pedagógicos, formular hipótesis, experimentar '
                + 'intervenciones y evaluar su impacto con criterios múltiples (cognitivos, afectivos, '
                + 'sociales).',
            },

            /* — Párrafo 4 — */
            {
              type: 'paragraph',
              text:
                'Entre sus fortalezas: promueve la **autonomía profesional**, favorece la adaptación a '
                + 'entornos diversos y legitima el conocimiento práctico como “teoría en uso”. Como '
                + 'limitación, puede caer en un relativismo donde todo vale si se justifica reflexivamente; '
                + 'de ahí la importancia de combinar la visión práctica con marcos éticos y evidencias '
                + 'investigativas.',
            },

            /* — Párrafo 5 — */
            {
              type: 'paragraph',
              text:
                'Hoy, la perspectiva práctica dialoga con pedagogías críticas y con analítica de datos: la '
                + 'reflexión docente incorpora dashboards de aprendizaje, feedback de estudiantes y '
                + 'observación entre pares para sostener ciclos de mejora continua basados en evidencia y '
                + 'justicia curricular.',
            },

            /* — Acordeón (4 pestañas, 1ª abierta) — */
            {
              type: 'accordion',
              header: 'Fases de la reflexión',
              open: true,
              text:
                '1. **Describo** la situación de aula.\n'
                + '2. **Problematizo**: ¿qué me inquieta?, ¿por qué?\n'
                + '3. **Hipotetizo** soluciones fundamentadas.\n'
                + '4. **Actúo y observo** los efectos.\n'
                + '5. **Replanteo** teorías de acción.',
            },
            {
              type: 'accordion',
              header: 'Herramientas de indagación',
              text:
                '* Diarios de campo.\n* Grabación y análisis de vídeo.\n* Entrevistas con estudiantes.\n* Protocolos de autoevaluación.',
            },
            {
              type: 'accordion',
              header: 'Roles colaborativos',
              text:
                'Mentor, colega crítico, comunidad profesional de aprendizaje y redes docentes '
                + 'online que comparten prácticas y reflexiones.',
            },
            {
              type: 'accordion',
              header: 'Indicadores de éxito',
              text:
                'Ajustes pedagógicos basados en datos, mayor autonomía estudiantil, inclusión de voces '
                + 'diversas y mejora sostenida del clima de aula.',
            },
          ],
        },
        /* ---------------------------------------------------------------------------- */

        /* -------- 2.6 Orientación social-reconstruccionista (5 ¶ + acordeón + 2 img + vídeo) -------- */
        {
          id: '2.6',
          numbering: '2.6',
          title: 'Orientación social-reconstruccionista',
          content: [
            /* — Párrafo 1 — */
            {
              type: 'paragraph',
              text:
                'La **orientación social-reconstruccionista** concibe al docente como un '
                + 'intelectual crítico y agente de cambio comprometido con la justicia '
                + 'social. Inspirado en Dewey, Freire, Giroux y Apple, defiende que la '
                + 'educación es una práctica política: inevitablemente reproduce o transforma '
                + 'estructuras de poder. La formación docente, por tanto, debe generar '
                + 'conciencia histórica y capacidad de acción colectiva para re-significar '
                + 'la realidad.',
            },

            /* — Párrafo 2 — */
            {
              type: 'paragraph',
              text:
                'Los programas formativos socio-reconstruccionistas priorizan el '
                + '**currículo problematizador**: parten de temas generadores derivados de '
                + 'las contradicciones sociales (desigualdad, género, ambiente) y vinculan '
                + 'la teoría a proyectos de intervención comunitaria. El conocimiento '
                + 'académico se pone al servicio de la emancipación y del desarrollo '
                + 'sostenible.',
            },

            /* — Imagen 1 — */
            {
              type: 'image',
              src: 'https://www.redalyc.org/journal/3995/399573187013/1809-4465-ensaio-30-117-01112-gf02.jpg',   // cámbiala si dispones de recursos propios
              alt: 'Espiral praxis: reflexión-acción-reflexión',
              caption: 'Figura 8. Ciclo de praxis emancipadora según Freire.',
            },

            /* — Párrafo 3 — */
            {
              type: 'paragraph',
              text:
                'La **investigación-acción participativa** (IAP) se vuelve método estrella: '
                + 'docentes y estudiantes investigan juntos un problema local, implementan '
                + 'cambios, evalúan resultados y difunden hallazgos. Esta práctica cuestiona '
                + 'la separación entre productor y consumidor de conocimiento, convirtiendo '
                + 'a la escuela en laboratorio social y cultural.',
            },

            /* — Párrafo 4 — */
            {
              type: 'paragraph',
              text:
                'En términos de evaluación, se privilegian evidencias de **impacto social** '
                + '—campañas de sensibilización, mejoras ambientales, construcción de redes '
                + 'interculturales— y narrativas de aprendizaje transformador. La rúbrica '
                + 'incluye criterios éticos, de colaboración y de incidencia comunitaria, '
                + 'más allá de los logros cognitivos individuales.',
            },

            /* — Imagen 2 — */
            {
              type: 'image',
              src: 'https://fastercapital.com/es/i-es/Expansion-del-mercado--Liberacion-del-potencial--crecimiento-de-las-ventas-a-traves-de-la-expansion-del-mercado--Construcci-n-de-alianzas-estrategicas.webp',
              alt: 'Mapa de alianzas escuela-comunidad-universidad',
              caption: 'Figura 9. Tejido de alianzas en proyectos socio-críticos.',
            },

            /* — Párrafo 5 — */
            {
              type: 'paragraph',
              text:
                'Finalmente, la orientación social-reconstruccionista invita al docente a '
                + 'revisar su **posición de poder** y a practicar la pedagogía del diálogo. '
                + 'Implica cultivar humildad epistemológica, escuchar las voces marginadas y '
                + 'co-diseñar experiencias de aprendizaje que empoderen a los estudiantes '
                + 'para actuar sobre su realidad. En plena crisis climática y de desigualdad, '
                + 'este modelo ofrece una hoja de ruta para una docencia comprometida con '
                + 'la dignidad humana y el bien común.',
            },

            /* — Acordeón (5 pestañas, primera abierta) — */
            {
              type: 'accordion',
              header: 'Principios fundacionales',
              open: true,
              text:
                '* Pedagogía crítica y diálogo problematizador.\n'
                + '* Conocimiento situado y contextual.\n'
                + '* Compromiso ético-político.\n'
                + '* Investigación-acción emancipadora.',
            },
            {
              type: 'accordion',
              header: 'Metodologías clave',
              text:
                'Aprendizaje-servicio, proyectos comunitarios, IAP, debates '
                + 'socráticos y foros deliberativos.',
            },
            {
              type: 'accordion',
              header: 'Rol del docente',
              text:
                'Facilitador, co-investigador, activista pedagógico y mediador de '
                + 'conflictos socioculturales.',
            },
            {
              type: 'accordion',
              header: 'Competencias del estudiante',
              text:
                'Pensamiento crítico, agencia ciudadana, trabajo colaborativo, '
                + 'alfabetización mediática y resiliencia cultural.',
            },
            {
              type: 'accordion',
              header: 'Indicadores de impacto',
              text:
                'Cambios comunitarios medibles, empoderamiento de grupos '
                + 'vulnerables, desarrollo de redes solidarias y políticas escolares inclusivas.',
            },

            /* — Vídeo final — */
            {
              type: 'video',
              title: 'Pedagogía crítica en acción',
              src: 'https://www.youtube.com/watch?v=RG62Q-zRx3c',  // reemplaza si lo prefieres
              caption: '10 min · Caso de investigación-acción en escuela rural.',
            },
          ],
        },
        /* ----------------------------------------------------------------------------------------- */
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
          'Aquí aparecerán enlaces a PDFs, videos y sitios externos que amplían lo visto '
          + 'en el módulo.'
      },

      /* Animación central (usa DotLottieReact en el componente) */
        {
          type : 'lottie',
          src  : 'https://lottie.host/c0d4b22d-190c-499c-ae7c-fbdc65bdec18/uwM2ByDoCU.lottie',
        },
        
      {
        type : 'download',
        text : 'Descargar guías PDF',
        files: [
            `${base}/MaterialComplementario-Modulo2.pdf`,
        ],
        icon : 'https://lottie.host/03d343e5-0ec1-42a0-a414-9fc13133b936/DH3U5C7VP7.json'
      }
    ]
  },

  /* ---------------------- Bibliografía ------------------- */
  {
    id: 'bib',
    numbering: 'Bibliografía',
    title: 'Bibliografía',
    content: [
      {
        type: 'paragraph',
        text:
          'En esta sección se listarán las referencias completas utilizadas en el módulo.'
      }
    ]
  }
  ],
};