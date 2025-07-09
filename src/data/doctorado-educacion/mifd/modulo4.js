// ────────────────────────────────────────────────────────────────────────────────
// Módulo 4 – Nodo IV. Modelo integral para la formación docente
// Materia: Modelo Integrador de Formación Docente
// Programa: Doctorado en Educación
// ────────────────────────────────────────────────────────────────────────────────
const base = process.env.PUBLIC_URL + '/assets/MaterialComplementario/mifd';
export default {
  programId : 'doctorado-educacion',
courseId  : 'mifd',
id        : 'modulo4',

courseName : 'Modelo Integrador de Formación Docente',
title      : 'Módulo 4. Modelo integral para la formación docente',
semestre   : 'Primer Semestre',
teacher    : 'Dr. Héctor Martínez Guerrero',

objective  :
  'Que los doctorandos analicen y reflexionen los aportes de la propuesta “La Educación Relacional” para contar con un marco de referencia que les permita diseñar un Modelo Integral de Formación Docente.',

competencies : [
  'Analizar y reflexionar los aportes de las sesiones anteriores y contrastarlos con la lectura “Educación Relacional”.',
  'Valorar la pertinencia de dichos aportes para diseñar un Modelo Integral de Formación Docente.'
],
  themes: [
    {
      id: '1.info',
      numbering: 'Info',
      title: 'Información general del módulo',
      isUnitInfo: true,
      content: [],
    },

    {
      /* --------------------------- NODO IV --------------------------- */
      id: '4',
      numbering: 'Nodo IV',
      title: 'Modelo integral para la formación docente',

      /* —───────────────────── Nodo IV · Modelo integral para la formación docente ───────────────────── */
        content: [
        /* — Párrafo 1 — */
        {
            type: 'paragraph',
            text:
            'El **Modelo Integral de Formación Docente** se fundamenta en la Educación '
            + 'Relacional, perspectiva que articula los hallazgos de la biología de sistemas, '
            + 'la complejidad y la pedagogía crítica para superar la visión mecanicista y '
            + 'fragmentada del profesorado.'
        },

        /* — Párrafo 2 — */
        {
            type: 'paragraph',
            text:
            'La propuesta asume que el aprendizaje emerge de redes vivas de interacción: '
            + 'sujeto, contexto y conocimiento se co-construyen. Por ello, la formación ha de '
            + 'favorecer climas de confianza, diálogo horizontal y proyectos que conecten la '
            + 'escuela con la comunidad y el planeta.'
        },

        /* — Imagen 1 — */
        {
            type: 'image',
            src: 'https://www.educacionfutura.org/wp-content/uploads/2024/11/Alumnos-1024x765.jpg',
            alt: 'Red compleja de nodos interconectados',
            caption: 'Figura 1. La escuela como red viva de relaciones.'
        },

        /* — Párrafo 3 — */
        {
            type: 'paragraph',
            text:
            'El modelo se organiza en **cuatro dimensiones**: fundamento filosófico, principios '
            + 'orientadores, componentes estructurales y dinámica estratégica. Cada dimensión se '
            + 'traduce en prácticas concretas que confluyen en un currículo en red.'
        },

        /* — Párrafo 4 — */
        {
            type: 'paragraph',
            text:
            'Adoptar esta visión implica pasar de un docente “ejecutor de programas” a un '
            + 'docente **diseñador de ecologías de aprendizaje**: fomenta autonomía, cuida la '
            + 'diversidad y alinea la acción educativa con la sostenibilidad y la justicia social.'
        },

        /* — Lista / acordeón con pestañas — */
        {
            type: 'accordion',
            header: 'Principios de la Educación Relacional',
            open: true,
            text:
            '* **Interconexión** de todos los seres vivos.\n'
            + '* **Autopoiesis** y auto-organización de los aprendizajes.\n'
            + '* **Sistémico-organizacional**: la parte refleja el todo.\n'
            + '* **Dialógica**: sujeto, contexto y saber dialogan continuamente.'
        },
        {
            type: 'accordion',
            header: 'Componentes clave del modelo',
            text:
            '1. **Sujeto aprendiente** protagonista.\n'
            + '2. **Relaciones de aprendizaje** cooperativas.\n'
            + '3. **Rol del educador** como mediador y cuidador.\n'
            + '4. **Espacios flexibles** físicos y virtuales.'
        },
        {
            type: 'accordion',
            header: 'Organización del quehacer educativo',
            text:
            'Currículo en red, núcleos generadores, proyectos transdisciplinarios y '
            + 'evaluación auténtica orientada a la transformación comunitaria.'
        },
        {
            type: 'accordion',
            header: 'Dinámica estratégica',
            text:
            'Conversación creativa, aprendizaje autónomo y vital, pensamiento complejo y '
            + 'retroalimentación resonante.'
        },

        /* — Imagen 2 — */
        {
            type: 'image',
            src: 'https://static-blogs.diariovasco.com/wp-content/uploads/sites/89/2017/09/Organizaci%C3%B3n-INTELIGENTE.png',
            alt: 'Espiral de auto-organización',
            caption: 'Figura 2. Espiral de aprendizaje auto-organizado.'
        },

        /* — Párrafo 5 — */
        {
            type: 'paragraph',
            text:
            'El reto para la formación doctoral radica en articular estos elementos en un '
            + 'proyecto viable que integre ciencia, ética y acción transformadora. De este modo, '
            + 'el educador se convierte en agente clave para la construcción de futuros más '
            + 'justos y sostenibles.'
        },

        /* — Vídeo final — */
        {
            type: 'video',
            title: 'Educación relacional y complejidad',
            src: 'https://www.youtube.com/watch?v=9fE-M8NFO58',
            caption: '8 min · Conversatorio sobre el modelo integral de formación docente.'
        }
        ],
        /* ──────────────────────────────────────────────────────────────────────────────────────────────── */

      /* — Sub-temas del nodo — */
      subthemes: [
        /* 4.1 */
        {
          id: '4.1',
          numbering: '4.1',
          title: 'La educación relacional. Hacia un nuevo paradigma educativo',

          /* ───────── 4.1 La educación relacional. Hacia un nuevo paradigma educativo ───────── */
            content: [
            /* — Párrafo 1 — */
            {
                type: 'paragraph',
                text:
                'La **educación relacional** propone abandonar la concepción atomista de la escuela '
                + '—aulas estancas, disciplinas aisladas, aprendizajes individuales— para abrazar una '
                + 'visión sistémica donde el conocimiento, las emociones y la comunidad se tejen en '
                + 'red. Inspirada en la biología de la complejidad y la ética del cuidado, coloca el '
                + 'vínculo humano y ecológico en el centro del acto educativo.'
            },

            /* — Párrafo 2 — */
            {
                type: 'paragraph',
                text:
                'Este paradigma parte de la tesis de que **“todo es relación”**: los sujetos existen '
                + 'en interacción constante con otros seres y con su entorno físico-cultural. Por ello, '
                + 'aprender no es descargar información, sino participar en procesos de co-creación de '
                + 'significados que transforman simultáneamente a la persona y al colectivo.'
            },

            /* — Párrafo 3 — */
            {
                type: 'paragraph',
                text:
                'En la práctica, la educación relacional fomenta proyectos transdisciplinarios, aulas '
                + 'abiertas a la comunidad y evaluaciones dialógicas donde estudiantes, docentes y '
                + 'familias reflexionan sobre su impacto mutuo. El currículo se organiza como red de '
                + 'problemas auténticos y nodos de aprendizaje colaborativo.'
            },

            /* — Párrafo 4 — */
            {
                type: 'paragraph',
                text:
                'Adoptar este enfoque implica replantear la identidad profesional: el profesor se '
                + 'convierte en **tejedor de redes de sentido**, cuidador de la diversidad y mediador '
                + 'de conflictos, mientras que el estudiante asume un rol protagónico en la '
                + 'construcción de saberes y la mejora de su ecosistema vital.'
            },

            /* — Acordeón (3 pestañas, primera abierta) — */
            {
                type: 'accordion',
                header: 'Pilares de la educación relacional',
                open: true,
                text:
                '* **Interdependencia** de sujetos, saberes y planeta.\n'
                + '* **Dialogicidad** como método de construcción colectiva.\n'
                + '* **Ética del cuidado** y responsabilidad mutua.'
            },
            {
                type: 'accordion',
                header: 'Prácticas clave',
                text:
                '1. Aprendizaje-servicio comunitario.\n'
                + '2. Proyectos transdisciplinarios basados en problemas.\n'
                + '3. Evaluación narrativa y co-evaluación.\n'
                + '4. Rondas de diálogo socio-emocional.'
            },
            {
                type: 'accordion',
                header: 'Retos de implementación',
                text:
                '- Superar la cultura de la estandarización.\n'
                + '- Formar docentes en pensamiento complejo y comunicación empática.\n'
                + '- Alinear políticas escolares con principios de sostenibilidad y justicia.'
            }
            ],
            /* ─────────────────────────────────────────────────────────────────────────────── */
        },

        /* 4.2 */
        {
          id: '4.2',
          numbering: '4.2',
          title: 'Fundamentos y principios de la educación relacional',
          /* ───────── 4.2 Fundamentos y principios de la educación relacional ───────── */
            content: [
            /* — Párrafo 1 — */
            {
                type: 'paragraph',
                text:
                'La educación relacional se apoya en una ontología de la **interconexión**: '
                + 'toda realidad --biológica, social, cultural-- es un entramado de procesos '
                + 'que se co-determinan. Desde esta perspectiva, enseñar y aprender no son '
                + 'actos aislados, sino movimientos de un sistema vivo que se transforma al '
                + 'intercambiar energía, información y sentido.'
            },

            /* — Párrafo 2 — */
            {
                type: 'paragraph',
                text:
                'El modelo integra principios provenientes de la complejidad, la biología de '
                + 'sistemas y la ética del cuidado. Reconoce que la escuela sólo puede '
                + 'cumplir su misión cuando cultiva relaciones de mutuo reconocimiento que '
                + 'trascienden la transmisión de contenidos para abrazar el bienestar '
                + 'individual, colectivo y planetario.'
            },

            /* — Lista 1 · Principios nucleares (unordered) — */
            {
                type: 'list',
                style: 'unordered',
                items: [
                '**Interconexión** de seres, saberes y ecosistemas.',
                '**Autonomía vital**: capacidad de auto-regulación y sentido personal.',
                '**Auto-organización** de los procesos de aprendizaje.',
                '**Dialógica**: construcción de significado mediante el diálogo.',
                '**Incertidumbre creativa** como motor de investigación.',
                '**Comunicabilidad**: compartir saber y afecto para co-evolucionar.'
                ]
            },

            /* — Párrafo 3 — */
            {
                type: 'paragraph',
                text:
                'La **trascendencia** constituye otro fundamento: todo proceso educativo ha '
                + 'de abrir la conciencia más allá del yo individual hacia la comunidad y la '
                + 'biosfera. Formar docentes relacionales exige, por tanto, experiencias de '
                + 'servicio, diálogo intercultural y reflexión ética sobre la interdependencia.'
            },

            /* — Párrafo 4 — */
            {
                type: 'paragraph',
                text:
                'El principio **sistémico-organizacional** recuerda que una innovación no '
                + 'florece si el entorno institucional la contradice. Por ello, el modelo '
                + 'propone articular estructuras, currículos y políticas que favorezcan la '
                + 'coherencia entre valores relacionales y prácticas cotidianas.'
            },

            /* — Lista 2 · Implicaciones para la formación docente (ordered) — */
            {
                type: 'list',
                style: 'ordered',
                items: [
                'Diseñar **proyectos transdisciplinarios** con impacto social real.',
                'Fomentar **rúbricas dialógicas** que valoren colaboración y cuidado.',
                'Crear **espacios flexibles** (presenciales y virtuales) para la co-creación.',
                'Practicar **investigación-acción** como estrategia de auto-organización.',
                'Promover **ecologías de apoyo** entre pares, familias y comunidad.'
                ]
            },

            /* — Párrafo 5 — */
            {
                type: 'paragraph',
                text:
                'Adoptar estos fundamentos requiere docentes capaces de moverse entre la '
                + 'certeza y la complejidad, sostener el diálogo intercultural y liderar la '
                + 'transformación institucional. El reto es formar profesionales que vivan '
                + 'la interconexión como identidad y la colaboración como estrategia de '
                + 'supervivencia planetaria.'
            }
            ],
            /* ───────────────────────────────────────────────────────────────────────────── */
        },

        /* 4.3 */
        {
          id: '4.3',
          numbering: '4.3',
          title: 'Componentes de la educación relacional',
          /* ───────── 4.3 Componentes de la educación relacional ───────── */
            content: [
            /* — Párrafo 1 — */
            {
                type: 'paragraph',
                text:
                'La Educación Relacional se articula en cuatro **componentes** inseparables: '
                + 'el sujeto aprendiente, las relaciones de aprendizaje, el rol del educador y '
                + 'los espacios donde acontece la experiencia. Juntos conforman la ecología en '
                + 'la cual el conocimiento se co-crea y se re-significa.'
            },

            /* — Párrafo 2 — */
            {
                type: 'paragraph',
                text:
                'El **sujeto aprendiente** se concibe como una identidad en continua construcción; '
                + 'posee autonomía vital y capacidad de auto-organizar su proceso formativo. '
                + 'Desde este enfoque, cada estudiante es fuente de saber y no receptor pasivo.'
            },

            /* — Párrafo 3 — */
            {
                type: 'paragraph',
                text:
                'Las **relaciones de aprendizaje** integran el cuidado, la horizontalidad y el '
                + 'diálogo. Son el tejido que sostiene la curiosidad, la confianza y la '
                + 'responsabilidad mutua, condición imprescindible para la emergencia de la '
                + 'inteligencia colectiva.'
            },

            /* — Párrafo 4 — */
            {
                type: 'paragraph',
                text:
                'El **rol del educador** trasciende la transmisión de contenidos: deviene '
                + '**tejedor de redes** y diseñador de ecologías de aprendizaje. Media, provoca, '
                + 'acompaña y retroalimenta sin anular la autonomía del grupo.'
            },

            /* — Párrafo 5 — */
            {
                type: 'paragraph',
                text:
                'Los **espacios de aprendizaje** —físicos, virtuales o híbridos— se diseñan como '
                + 'ambientes flexibles, estéticos y multisensoriales que favorecen la creatividad, '
                + 'el diálogo intercultural y la conexión con la naturaleza.'
            },

            /* — Acordeón (4 pestañas, primera abierta) — */
            {
                type: 'accordion',
                header: 'Sujeto aprendiente',
                open: true,
                text:
                'Autonomía vital · Identidad en co-evolución · Conciencia ecológica · '
                + 'Propósito trascendente.'
            },
            {
                type: 'accordion',
                header: 'Relaciones de aprendizaje',
                text:
                'Cuidado mutuo · Diálogo horizontal · Colaboración creativa · Retroalimentación '
                + 'resonante.'
            },
            {
                type: 'accordion',
                header: 'Rol del educador',
                text:
                'Tejedor de redes · Mediador de conflictos · Facilitador de proyectos · '
                + 'Curador de recursos.'
            },
            {
                type: 'accordion',
                header: 'Espacios de aprendizaje',
                text:
                'Ambientes flexibles · Conexión con la naturaleza · Integración de tecnologías · '
                + 'Estética y bienestar.'
            },

            /* — Imagen ilustrativa — */
            {
                type: 'image',
                src: 'https://www.redalyc.org/journal/4418/441857903007/441857903007_gf8.png',
                alt: 'Red de interacciones entre sujeto, educador, relaciones y espacio',
                caption: 'Figura 7. Los cuatro componentes de la educación relacional en interacción.'
            }
            ],
            /* ─────────────────────────────────────────────────────────────── */
        },

        /* 4.4 */
        {
          id: '4.4',
          numbering: '4.4',
          title:
            'La organización del quehacer educativo desde el enfoque relacional',
          /* ───────── 4.4 La organización del quehacer educativo desde el enfoque relacional ───────── */
            content: [
            /* — Párrafo 1 — */
            {
                type: 'paragraph',
                text:
                'Organizar el quehacer educativo desde la Educación Relacional supone pasar '
                + 'de asignaturas lineales a un **currículo en red** articulado por grandes '
                + 'áreas transversales (cognitiva, socioemocional, ética-ecológica) que dialogan '
                + 'entre sí y con el contexto comunitario.'
            },

            /* — Párrafo 2 — */
            {
                type: 'paragraph',
                text:
                'El corazón operativo son los **núcleos generadores**: problemas, preguntas o '
                + 'retos significativos que interpelan a la comunidad escolar. Cada núcleo se '
                + 'desglosa en **nodos de aprendizaje**; estos nodos funcionan como puntos de '
                + 'convergencia transdisciplinar donde estudiantes y docentes tejen saberes, '
                + 'habilidades y valores.'
            },

            /* — Párrafo 3 — */
            {
                type: 'paragraph',
                text:
                'La programación temporal se organiza en **módulos flexibles**. El tiempo deja '
                + 'de ser una cuadrícula rígida de 50 minutos y se convierte en bloques de '
                + 'investigación, creación o servicio, ajustados a los ritmos del proyecto y '
                + 'a los ciclos de energía del grupo.'
            },

            /* — Párrafo 4 — */
            {
                type: 'paragraph',
                text:
                'La **evaluación** también se re-configura: cada nodo culmina con evidencias de '
                + 'impacto (portafolios, prototipos, acciones comunitarias) que se auto-evalúan, '
                + 'co-evalúan y reciben retroalimentación narrativa. De este modo, el currículo '
                + 'se convierte en un tejido vivo que muestra el aprendizaje como proceso y '
                + 'como servicio a la comunidad.'
            },

            /* — Párrafo 5 — */
            {
                type: 'paragraph',
                text:
                'Para sostener esta organización, la escuela adopta una **gobernanza relacional** '
                + 'basada en círculos de decisión por consentimiento. Docentes, familias y '
                + 'estudiantes definen juntos los núcleos y monitorizan el avance mediante '
                + 'reuniones regulares de reflexión dialógica.'
            },

            /* — Vídeo ilustrativo — */
            {
                type: 'video',
                title: 'Currículo en red y núcleos generadores de aprendizaje',
                src: 'https://www.youtube.com/watch?v=2-41ZWp0ORo',  /* sustitúyelo si tienes otro recurso */
                caption: '7 min · Ejemplo práctico de organización relacional del currículo.'
            }
            ],
            /* ─────────────────────────────────────────────────────────────────────────────── */
        },

        /* 4.5 */
        {
          id: '4.5',
          numbering: '4.5',
          title: 'Dinámica y estrategia educativa en el enfoque relacional',
          /* ───────── 4.5 Dinámica y estrategia educativa en el enfoque relacional ───────── */
            content: [
            /* — Párrafo 1 — */
            {
                type: 'paragraph',
                text:
                'La dinámica educativa relacional se centra en **cultivar vínculos** que hagan del aula una comunidad de investigación y cuidado. Las estrategias no parten de recetas, sino de principios vivos que orientan la interacción: diálogo generativo, cooperación creativa y reflexión continua sobre el impacto colectivo.'
            },

            /* — Párrafo 2 — */
            {
                type: 'paragraph',
                text:
                'El proceso inicia con la **conversación creativa**: preguntas abiertas que despiertan la curiosidad y conectan la temática con la experiencia personal y social. Esta fase siembra un campo relacional fértil donde pueden emerger ideas, hipótesis y proyectos significativos.'
            },

            /* — Lista 1 · Herramientas de conversación (unordered) — */
            {
                type: 'list',
                style: 'unordered',
                items: [
                'Preguntas socráticas y rondas de pensamiento visible',
                'Mapas mentales colaborativos en pizarras digitales',
                'Círculos de diálogo y escucha activa',
                'Story-telling de experiencias y dilemas reales'
                ]
            },

            /* — Párrafo 3 — */
            {
                type: 'paragraph',
                text:
                'A partir de esa semilla dialógica se despliegan **proyectos auto-organizados**. Los estudiantes, con guía del docente, definen metas, distribuyen roles, gestionan recursos y ajustan el rumbo mediante retroalimentación formativa. El énfasis está en el aprendizaje **autónomo y vital**: conocimientos aplicados a situaciones que importan a la comunidad.'
            },

            /* — Párrafo 4 — */
            {
                type: 'paragraph',
                text:
                'El pensamiento complejo actúa como brújula epistemológica: anima a ver conexiones ocultas, aceptar la incertidumbre y transitar entre perspectivas disciplinares. Para sostener esta movilidad cognitiva se emplean rutinas de metacognición y análisis sistémico que ayudan a los equipos a revisar supuestos y tomar decisiones informadas.'
            },

            /* — Lista 2 · Rutinas metacognitivas (ordered) — */
            {
                type: 'list',
                style: 'ordered',
                items: [
                'Planificar → Actuar → Observar → Reflexionar (ciclo PAOR)',
                'Diarios reflexivos con preguntas guía',
                'Auto-evaluación basada en rúbricas dialógicas',
                'Reuniones “retro” para detectar aprendizajes y pendientes'
                ]
            },

            /* — Párrafo 5 — */
            {
                type: 'paragraph',
                text:
                'Finalmente, la estrategia relacional se consolida con **retroalimentación resonante**: comentarios descriptivos que reconocen logros, señalan oportunidades y alinean la acción con los valores del proyecto. Así, la dinámica de aula se convierte en un espiral de aprendizaje compartido que fortalece la autonomía, la pertenencia y la responsabilidad ética.'
            },

            /* — Acordeón (3 pestañas, primera abierta) — */
            {
                type: 'accordion',
                header: 'Roles clave en la dinámica',
                open: true,
                text:
                '* **Facilitador**: promueve el diálogo y cuida el clima emocional.\n'
                + '* **Investigador**: recopila datos, analiza y comparte evidencias.\n'
                + '* **Cuidador**: vela por la inclusión y la gestión del conflicto.'
            },
            {
                type: 'accordion',
                header: 'Fases del proceso relacional',
                text:
                '1. Sintonización (pregunta generadora).\n'
                + '2. Exploración cooperativa.\n'
                + '3. Creación de prototipos / acciones.\n'
                + '4. Socialización y reflexión crítica.'
            },
            {
                type: 'accordion',
                header: 'Indicadores de éxito',
                text:
                '- Autonomía y corresponsabilidad del grupo.\n'
                + '- Calidad del diálogo y la toma de decisiones.\n'
                + '- Impacto social o comunitario del proyecto.\n'
                + '- Bienestar y motivación de los participantes.'
            }
            ],
            /* ─────────────────────────────────────────────────────────────────────────────── */
        },

        /* 4.6 */
        {
          id: '4.6',
          numbering: '4.6',
          title: 'El sentido del aprendizaje y la formación docente',
          /* ───────── 4.6 El sentido del aprendizaje y la formación docente ───────── */
            content: [
            /* — Párrafo 1 — */
            {
                type: 'paragraph',
                text:
                'La pregunta **¿para qué aprendemos?** atraviesa toda la Educación Relacional. '
                + 'El sentido configura la energía vital que impulsa al sujeto aprendiente; sin él, '
                + 'los contenidos se vacían y la motivación se reduce a la recompensa externa.'
            },

            /* — Párrafo 2 — */
            {
                type: 'paragraph',
                text:
                'Recuperar el sentido implica conectar el currículo con los propósitos personales, '
                + 'la identidad comunitaria y los desafíos planetarios. Así, la formación docente '
                + 'deviene un proceso de búsqueda permanente donde cada experiencia se lee como '
                + 'oportunidad de transformación ética y social.'
            },

            /* — Lista 1 · Fuentes de sentido (unordered) — */
            {
                type: 'list',
                style: 'unordered',
                items: [
                'Pertinencia para la vida cotidiana y el trabajo digno.',
                'Contribución al bien común y la sostenibilidad.',
                'Coherencia con la biografía, la cultura y la espiritualidad.',
                'Estética y alegría de descubrir.'
                ]
            },

            /* — Párrafo 3 — */
            {
                type: 'paragraph',
                text:
                'Cuando el aprendizaje carece de significado surgen prácticas rutinarias, '
                + 'evaluaciones mecánicas y desafección. Por ello, la educación relacional '
                + 'plantea romper con actividades sin propósito, devolviendo protagonismo al '
                + 'estudiante para que formule preguntas genuinas y trace rutas de indagación.'
            },

            /* — Acordeón 1 — */
            {
                type: 'accordion',
                header: 'Indicadores de pérdida de sentido',
                open: true,
                text:
                '- Aprendizaje memorístico sin transferencia.\n'
                + '- Baja participación y apatía emocional.\n'
                + '- Docencia centrada en el control y la calificación.'
            },

            /* — Párrafo 4 — */
            {
                type: 'paragraph',
                text:
                'Lograr un aprendizaje con sentido exige estrategias de **co-diseño curricular**, '
                + 'evaluación narrativa y proyectos de impacto social que permitan al estudiante '
                + 'ver la utilidad y la belleza de lo que aprende.'
            },

            /* — Lista 2 · Estrategias para cultivar sentido (ordered) — */
            {
                type: 'list',
                style: 'ordered',
                items: [
                'Preguntas generadoras basadas en dilemas reales.',
                'Aprendizaje-servicio vinculado a la comunidad.',
                'Portafolios reflexivos que muestren evolución personal.',
                'Celebración pública de los logros colectivos.'
                ]
            },

            /* — Párrafo 5 — */
            {
                type: 'paragraph',
                text:
                'En este horizonte, el docente se concibe como **mentor de sentido**: escucha, '
                + 'provoca y acompaña la construcción de proyectos vitales. Al mismo tiempo, '
                + 'cuida su propio itinerario de aprendizaje para no caer en la rutina y la '
                + 'desesperanza profesional.'
            },

            /* — Acordeón 2 — */
            {
                type: 'accordion',
                header: 'Prácticas docentes que potencian el sentido',
                text:
                '* Conversaciones de propósito al inicio y al cierre de cada proyecto.\n'
                + '* Evaluación dialógica centrada en la historia de aprendizaje.\n'
                + '* Redes de apoyo entre pares para sostener la motivación profesional.'
            },

            /* — Imagen inspiradora — */
            {
                type: 'image',
                src: 'https://miro.medium.com/v2/resize:fit:1400/1*0X0omBHrM5rY_MwyxKqPYQ.png',   /* sustituye si tienes recurso propio */
                alt: 'Rutas convergentes de sentido en el aprendizaje',
                caption: 'Figura 8. El sentido como fuerza convergente en el proceso formativo.'
            }
            ],
            /* ─────────────────────────────────────────────────────────────────────────────── */
        }
      ]
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
            `${base}/MaterialComplementario-Modulo4.pdf`,
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
  type : 'list',
  style: 'unordered',
    items: [
        'Assmann, H. (2002). *Placer y ternura en la educación. Hacia una sociedad aprendiente.* Barcelona: Narcea Ediciones.',
        'Calvo Muñoz, C. (2008). *Del mapa escolar al territorio educativo. Diseñando la escuela desde la educación.* Santiago de Chile: Nueva Miranda Ediciones.',
        'Canal Martínez, M., Del Callejo, D., Hernández Á., Ochoa C., O., Peredo C., B. & Velasco T., J. (2011). *La educación relacional: Hacia un nuevo paradigma educativo.* Xalapa, México: Arana Editores.',
        'Gutiérrez Pérez, F. & Prieto Castillo, D. (1994). *Mediación pedagógica para la educación popular.* San José, Costa Rica: RNTC.',
        'Wagensberg, J. (2007). *El gozo intelectual. Teoría y práctica sobre la inteligibilidad y la belleza.* Barcelona: Tusquets.'
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