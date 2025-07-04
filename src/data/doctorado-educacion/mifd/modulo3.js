// ────────────────────────────────────────────────────────────────────────────────
// Modulo 3 – Nodo III. Mutaciones paradigmáticas (primera parte)
// Materia: Modelo Integrador de Formación Docente
// Programa: Doctorado en Educación
// ────────────────────────────────────────────────────────────────────────────────

export default {
  programId : 'doctorado-educacion',
courseId  : 'mifd',
id        : 'modulo3',

courseName : 'Modelo Integrador de Formación Docente',
title      : 'Módulo 3. Mutaciones paradigmáticas',
semestre   : 'Primer Semestre',
teacher    : 'Dr. Héctor Martínez Guerrero',

objective :
  'Introducir a los doctorandos en el conocimiento y la reflexión de los ' +
  'aportes del paradigma emergente —o nuevas ciencias de la vida— para ' +
  'valorar sus implicaciones en el ámbito de la formación docente.',

competencies : [
  'Conocer los principales aportes del paradigma emergente y las nuevas ciencias de la vida.',
  'Reflexionar, a partir de lecturas, videos y experiencias propias, sobre su impacto en la educación.',
  'Diseñar un mapa conceptual que sintetice dichos aportes y sus implicaciones en la formación docente.'
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
      id: '3',
      numbering: 'Nodo III',
      title: 'Mutaciones paradigmáticas',
      // ──────────────────────────────────────────────────────────────────
      // Contenido a nivel de nodo (introductorio). 1-2 párrafos resumen.
      // ──────────────────────────────────────────────────────────────────


      /* ─────────────────────── Nodo III. Mutaciones paradigmáticas ─────────────────────── */
        content: [
        /* — Párrafo 1 — */
        {
            type: 'paragraph',
            text:
            'Las ciencias del siglo XXI —física cuántica, biología de sistemas, neurociencia, '
            + 'teoría del caos— han erosionado la concepción cartesiana-mecanicista que reducía la '
            + 'realidad a partes aisladas y leyes lineales. El llamado **paradigma emergente** '
            + 'propone mirar la naturaleza como una red dinámica de procesos interdependientes, '
            + 'donde el todo es más que la suma de sus componentes.'
        },

        /* — Párrafo 2 — */
        {
            type: 'paragraph',
            text:
            'En educación, esta mutación paradigmática obliga a superar la metáfora del aula “máquina” '
            + 'regida por input-output medibles. El aprendizaje se concibe ahora como fenómeno '
            + 'no-lineal, sensible a las condiciones iniciales y fuertemente influido por la '
            + 'auto-organización de las comunidades escolares.'
        },

        /* — Párrafo 3 — */
        {
            type: 'paragraph',
            text:
            'Autores como **Edgar Morin**, **Ilya Prigogine** y **Francisco Varela** subrayan la '
            + 'necesidad de educar en la incertidumbre: aprender a “navegar en un océano de '
            + 'incertidumbres a través de archipiélagos de certezas” (Morin). Esto implica cultivar '
            + 'pensamiento complejo, diálogo de saberes y responsabilidad planetaria.'
        },

        /* — Lista de focos emergentes — */
        {
            type: 'list',
            style: 'unordered',
            items: [
            'Complejidad y pensamiento sistémico',
            'Autopoiesis y auto-organización',
            'Gaia y sostenibilidad ecológica',
            'Neuroplasticidad y aprendizaje emergente',
            'Ética del cuidado y solidaridad global'
            ]
        },

        /* — Párrafo 4 — */
        {
            type: 'paragraph',
            text:
            'Estos focos desplazan al docente desde el rol de transmisor de verdades estáticas '
            + 'al de **diseñador de ecologías de aprendizaje**: ambientes abiertos, colaborativos '
            + 'y sensibles al contexto donde estudiantes y profesores investigan juntos problemas '
            + 'reales y construyen significado colectivo.'
        },

        /* — Imagen 1 — */
        {
            type: 'image',
            src: 'https://0701.static.prezi.com/preview/v2/wcxfofzxvh76dl7ou62wqu2fh36jc3sachvcdoaizecfr3dnitcq_3_0.png',
            alt: 'Red compleja de nodos interconectados',
            caption: 'Figura 1. La realidad como red dinámica (metáfora del paradigma emergente).'
        },

        /* — Párrafo 5 — */
        {
            type: 'paragraph',
            text:
            'Adoptar el paradigma emergente en la formación docente demanda repensar currículo, '
            + 'evaluación y gestión escolar. Supone articular ciencia, arte y vida cotidiana; '
            + 'tecnología y ética; local y global. En suma, instaurar una pedagogía de la '
            + 'complejidad que prepare a los educadores para afrontar riesgos civilizatorios y '
            + 'co-crear futuros más justos y sostenibles.'
        },

        /* — Imagen 2 — */
        {
            type: 'image',
            src: 'https://fastercapital.com/es/i-es/Auto--organizacion-y-emergencia-en-las-redes-de-klingeroscillator--Comprensi-n-de-la-autoorganizaci-n-y-emergencia-en-las-redes-de-klingeroscillator.webp',
            alt: 'Espiral de auto-organización en sistemas vivos',
            caption: 'Figura 2. Auto-organización y emergencia en sistemas biológicos.'
        }
        ],
        /* ─────────────────────────────────────────────────────────────────────────────────── */

      // ──────────────────────────────────────────────────────────────────
      // Sub-temas
      // ──────────────────────────────────────────────────────────────────
      subthemes: [
        // 3.1 El paradigma emergente de las ciencias
        {
          id: '3.1',
          numbering: '3.1',
          title: 'El paradigma emergente de las ciencias',
          content: [
            /* — Párrafo 1 — */
            {
                type: 'paragraph',
                text:
                'Durante tres siglos la ciencia newtoniana-cartesiana explicó el mundo a ' +
                'partir de leyes lineales, causalidad única y separación sujeto-objeto. ' +
                'El paradigma emergente —nutrido por la física cuántica, la teoría del ' +
                'caos, la auto-organización y la complejidad— rompe esa mirada: introduce ' +
                'incertidumbre, probabilidad y redes interdependientes como claves para ' +
                'comprender la realidad.'
            },

            /* — Párrafo 2 — */
            {
                type: 'paragraph',
                text:
                'En la física, conceptos como **superposición** y **entrelazamiento** ' +
                'muestran que partículas distantes pueden correlacionarse instantáneamente; ' +
                'la biología de sistemas revela que la célula es un tejido de procesos ' +
                'químicos auto-regulados; la matemática del caos prueba que pequeños ' +
                'cambios iniciales generan comportamientos impredecibles (efecto mariposa).'
            },

            /* — Lista 1 · Rasgos distintivos (unordered) — */
            {
                type: 'list',
                style: 'unordered',
                items: [
                'Relaciones holísticas y no lineales.',
                'Énfasis en procesos y flujos, no en objetos estáticos.',
                'Auto-organización y emergencia de orden a partir del desorden.',
                'Importancia del contexto y las condiciones iniciales.'
                ]
            },

            /* — Párrafo 3 — */
            {
                type: 'paragraph',
                text:
                'Estos hallazgos inspiran nuevas metáforas educativas: **aula-ecosistema**, ' +
                '**conocimiento en red**, **aprendizaje auto-organizado**. Implican pasar ' +
                'de programar conductas a diseñar entornos fértiles donde la creatividad y ' +
                'la cooperación emergen de manera espontánea.'
            },

            /* — Imagen 1 — */
            {
                type: 'image',
                src: 'https://photos1.blogger.com/img/240/2029/1024/Imagen%20Fractal%20Web.jpg',
                alt: 'Fractal que representa la auto-similaridad en la naturaleza',
                caption: 'Figura 3. Geometría fractal: patrón de auto-organización y complejidad.'
            },

            /* — Párrafo 4 — */
            {
                type: 'paragraph',
                text:
                'La ética también se transforma: si todo está tejido, el cuidado mutuo se ' +
                'convierte en condición de supervivencia. Capra habla de “alfabetización ' +
                'ecológica”; Morin de “política de la civilización”. Para la formación ' +
                'docente, esto significa cultivar pensamiento relacional y co-responsable.'
            },

            /* — Lista 2 · Implicaciones educativas (ordered) — */
            {
                type: 'list',
                style: 'ordered',
                items: [
                'Reemplazar currículos fragmentados por proyectos interdisciplinares.',
                'Evaluar procesos (reflexión, colaboración, resiliencia) junto a productos.',
                'Fomentar comunidades de aprendizaje auto-gestionadas.',
                'Incorporar incertidumbre y experimentación como experiencias valiosas.'
                ]
            },

            /* — Párrafo 5 — */
            {
                type: 'paragraph',
                text:
                'Adoptar el paradigma emergente no supone desechar la ciencia clásica, sino ' +
                'integrarla como caso límite de sistemas simples. La aventura intelectual ' +
                'consiste en navegar entre la certeza y el asombro, y educar para la vida ' +
                'en un mundo complejo, interdependiente y cambiante.'
            },

            /* — Imagen 2 — */
            {
                type: 'image',
                src: 'https://www.cienciacognitiva.org/files/2021-18-f1-e.jpg',
                alt: 'Red neuronal que ilustra la interconexión compleja',
                caption: 'Figura 4. Interconexión: analogía entre redes neuronales y redes sociales.'
            },

            /* — Vídeo final — */
            {
                type: 'video',
                title: 'El paradigma emergente en las ciencias',
                src: 'https://www.youtube.com/watch?v=07JCwI0i9Jk',
                caption: '3 min · Documental que resume la transición al paradigma emergente.'
            }
            ],
            /* ─────────────────────────────────────────────────────────────── */
        },

        // 3.2 Las nuevas ciencias de la vida y la educación
        {
          id: '3.2',
          numbering: '3.2',
          title: 'Las nuevas ciencias de la vida y la educación',
          /* ───────── 3.2 Las nuevas ciencias de la vida y la educación ───────── */
            content: [
            /* — Párrafo 1 — */
            {
                type: 'paragraph',
                text:
                'La biología de sistemas, la teoría de la autopoiesis y las neurociencias '
                + 'contemporáneas están remodelando nuestro entendimiento de la vida. '
                + 'Lejos de ser máquinas genéticas predeterminadas, los organismos se '
                + 'presentan como redes auto-organizadoras que intercambian materia, energía '
                + 'e información con su entorno. Este marco invita a repensar la escuela '
                + 'como un ecosistema vivo donde emergen patrones de aprendizaje.'
            },

            /* — Párrafo 2 — */
            {
                type: 'paragraph',
                text:
                'Según **Maturana y Varela**, un sistema vivo se define por su '
                + 'autopoiesis: la capacidad de producir continuamente sus propios '
                + 'componentes y mantener su organización. Trasladado a la educación, '
                + 'ello sugiere que los saberes auténticos se generan cuando las '
                + 'comunidades escolares producen, validan y re-configuran conocimiento de '
                + 'forma colaborativa, en lugar de recibirlo como paquete cerrado.'
            },

            /* — Imagen 1 — */
            {
                type: 'image',
                src: 'https://www.researchgate.net/publication/259903880/figure/fig3/AS:339518650634241@1457958962214/Figura-4-Circularidad-de-la-autopoiesis.png',
                alt: 'Célula auto-organizándose (autopoiesis)',
                caption: 'Figura 5. Estructura autopoiética: el sistema vive manteniendo su organización.'
            },

            /* — Párrafo 3 — */
            {
                type: 'paragraph',
                text:
                'La **resonancia mórfica** propuesta por Rupert Sheldrake, si bien '
                + 'controvertida, enfatiza la idea de campos de información que guían la '
                + 'forma y la conducta. En términos pedagógicos, refuerza la intuición de '
                + 'que cada aula posee un “clima” o campo cultural que influye en la '
                + 'motivación y la creatividad, más allá de los estímulos individuales.'
            },

            /* — Acordeón 1 — */
            {
                type: 'accordion',
                header: 'Implicaciones de la autopoiesis en el aula',
                open: true,
                text:
                '* **Aprendizaje auto-dirigido**: los estudiantes co-diseñan rutas y '
                + 'recursos.\n'
                + '* **Docente como perturbador positivo**: introduce desafíos que el '
                + 'sistema incorpora y reorganiza.\n'
                + '* **Evaluación formativa**: retroalimentación que alimenta la '
                + 'auto-reorganización, no sólo califica resultados.'
            },

            /* — Párrafo 4 — */
            {
                type: 'paragraph',
                text:
                'Las neurociencias añaden la noción de **neuroplasticidad**: el cerebro '
                + 'se reconfigura durante toda la vida en respuesta a la experiencia. Esto '
                + 'refuerza la urgencia de ambientes ricos en estímulos significativos, '
                + 'emocionalmente seguros y socialmente colaborativos.'
            },

            /* — Imagen 2 — */
            {
                type: 'image',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0gEgyH3RiQCnHSUEYmjdx5cMELBMNJyNQw&s',
                alt: 'Red sináptica cambiando con la experiencia',
                caption: 'Figura 6. Neuroplasticidad: el aprendizaje altera la red neuronal.'
            },

            /* — Párrafo 5 — */
            {
                type: 'paragraph',
                text:
                'Convergencias entre autopoiesis, complejidad y neuroplasticidad apuntan '
                + 'a un paradigma educativo centrado en la **vida que aprende**: flexible, '
                + 'interconectado y orientado al bienestar colectivo. El reto es diseñar '
                + 'políticas y prácticas que honren esa vitalidad.'
            },

            /* — Acordeón 2 — */
            {
                type: 'accordion',
                header: 'Claves didácticas desde las nuevas ciencias',
                text:
                '1. **Proyectos transdisciplinarios** que integren ciencia, arte y ética.\n'
                + '2. **Ambientes sensoriales** que estimulen cuerpo y emoción.\n'
                + '3. **Ritmos biopedagógicos**: respetar ciclos de atención y descanso.\n'
                + '4. **Retroalimentación resonante**: diálogo que enciende la motivación '
                + 'intrínseca y la conciencia ecológica.'
            },

            /* — Vídeo final — */
            {
                type: 'video',
                title: 'Autopoiesis y aprendizaje complejo',
                src: 'https://www.youtube.com/watch?v=hMzjoaRTR3M',
                caption: '9 min · Conversatorio sobre biología de la cognición y educación.'
            }
            ],
        /* ────────────────────────────────────────────────────────────────────── */
        },
         // 3.3 Saberes necesarios para la educación del futuro
        {
          id: '3.3',
          numbering: '3.3',
          title: 'Saberes necesarios para la educación del futuro',
          /* ───────── 3.3 Saberes necesarios para la educación del futuro ───────── */
            content: [
            /* — Párrafo 1 — */
            {
                type: 'paragraph',
                text:
                'Frente a la incertidumbre planetaria, la educación del futuro exige un cuerpo '
                + 'de saberes que trascienda la fragmentación disciplinar y posibilite una visión '
                + 'integral de los problemas humanos y ecológicos. Edgar Morin sintetiza este reto '
                + 'en la idea de *“enseñar la condición humana en la era de la complejidad”.*'
            },

            /* — Párrafo 2 — */
            {
                type: 'paragraph',
                text:
                'La revolución científica contemporánea muestra que los sistemas vivos son redes '
                + 'auto-organizadoras, interdependientes y abiertas a la incertidumbre. Por ello, '
                + 'los futuros educadores necesitan **pensamiento complejo** para religar saberes, '
                + 'detectar bucles de causalidad y actuar sin reducir la realidad a variables '
                + 'aisladas.'
            },

            /* — Párrafo 3 — */
            {
                type: 'paragraph',
                text:
                'Otro saber clave es la **identidad terrenal**: reconocer que todos compartimos la '
                + 'misma biosfera y que las decisiones locales repercuten en la salud global. Esto '
                + 'implica alfabetización ecológica, ética del cuidado y compromiso con la justicia '
                + 'socio-ambiental.'
            },

            /* — Párrafo 4 — */
            {
                type: 'paragraph',
                text:
                'El currículo también debe cultivar la **comprensión humana**: la capacidad de '
                + 'empatizar con el otro, dialogar en la diferencia y construir paz cultural. Ello '
                + 'se nutre de historias de vida, arte, filosofía y experiencias de cooperación '
                + 'intercultural.'
            },

            /* — Párrafo 5 — */
            {
                type: 'paragraph',
                text:
                'Finalmente, la **ética del género humano** articula estos saberes en acciones '
                + 'concretas: evaluar el impacto de la tecnología, defender la diversidad y '
                + 'promover economías solidarias. Sin esta brújula ética, la educación corre el '
                + 'riesgo de reproducir lógicas que agravan la crisis civilizatoria.'
            },

            /* — Acordeón (7 pestañas, 1ª abierta) — */
            {
                type: 'accordion',
                header: 'Los siete saberes de Edgar Morin',
                open: true,
                text:
                '1. **Las cegueras del conocimiento** (error e ilusión)\n'
                + '2. **Principios del conocimiento pertinente**\n'
                + '3. **Enseñar la condición humana**\n'
                + '4. **Identidad terrenal**\n'
                + '5. **Enfrentar las incertidumbres**\n'
                + '6. **Enseñar la comprensión**\n'
                + '7. **Ética del género humano**'
            },

            /* — Vídeo de apoyo — */
            {
                type: 'video',
                title: 'Los siete saberes para la educación del futuro',
                src: 'https://www.youtube.com/watch?v=ZzA2kEtwDig',
                caption: '6 min · Animación explicativa sobre la propuesta de Edgar Morin.'
            }
            ],
            /* ─────────────────────────────────────────────────────────────────────── */
        },

        // 3.4 Resignificar el sentido de la educación y del aprendizaje
        {
          id: '3.4',
          numbering: '3.4',
          title: 'Resignificar el sentido de la educación y del aprendizaje',
          /* ───────── 3.4 Resignificar el sentido de la educación y del aprendizaje ───────── */
          /* ───────── 3.4 Resignificar el sentido de la educación y del aprendizaje ───────── */
            content: [
            /* — Párrafo 1 — */
            {
                type: 'paragraph',
                text:
                'La crisis civilizatoria evidencia que aprender no puede reducirse a acumular '
                + 'información: requiere **sentido**. Resignificar la educación implica alinear '
                + 'conocimiento, emoción y acción al servicio del bienestar personal, social y '
                + 'planetario.'
            },

            /* — Párrafo 2 — */
            {
                type: 'paragraph',
                text:
                'David Bohm sugiere que el aprendizaje significativo surge cuando el pensamiento '
                + 'se abre a la “totalidad del movimiento”. Esto exige entornos donde ciencia, '
                + 'arte y espiritualidad dialoguen para despertar asombro y propósito.'
            },

            /* — Imagen 1 — */
            {
                type: 'image',
                src: 'https://i.imgur.com/US9xcJz.png',
                alt: 'Convergencia ciencia-arte-espiritualidad',
                caption: 'Figura 1. Trenzar razón, emoción y trascendencia da sentido al aprender.'
            },

            /* — Párrafo 3 — */
            {
                type: 'paragraph',
                text:
                'El vacío de sentido se manifiesta en prácticas mecánicas y evaluación punitiva. '
                + 'Superarlo requiere conectar los contenidos con los dilemas vitales del '
                + 'estudiante y con los problemas de la comunidad.'
            },

            /* — Acordeón 1 — */
            {
                type: 'accordion',
                header: 'Señales de aprendizaje sin sentido',
                open: true,
                text:
                '- Memorización descontextualizada\n'
                + '- Motivación extrínseca dominante\n'
                + '- Desconexión entre aula y vida\n'
                + '- Rutina y desafección emocional'
            },

            /* — Párrafo 4 — */
            {
                type: 'paragraph',
                text:
                'Resignificar supone **estética y ética**: experiencias hermosas que conmuevan y '
                + 'preguntas éticas que orienten la acción. El arte escolar, el servicio a la '
                + 'comunidad y la reflexión ética se integran como ejes curriculares.'
            },

            /* — Imagen 2 — */
            {
                type: 'image',
                src: 'https://observatorio.tec.mx/wp-content/uploads/2020/02/ProfesionalizaciC3B3ndocenteCompetenciasenelsigloXXI.jpg',
                alt: 'Aprender con propósito y belleza',
                caption: 'Figura 2. El aula como espacio de propósito compartido.'
            },

            /* — Párrafo 5 — */
            {
                type: 'paragraph',
                text:
                'Así, el docente transita de transmisor a **mentor de significado**: acompaña la '
                + 'búsqueda de propósito, facilita proyectos con impacto real y promueve la '
                + 'reflexión narrativa sobre el camino recorrido.'
            },

            /* — Acordeón 2 — */
            {
                type: 'accordion',
                header: 'Estrategias para cultivar sentido',
                text:
                '1. Preguntas generadoras ligadas a dilemas reales\n'
                + '2. Aprendizaje-servicio con impacto social\n'
                + '3. Portafolios reflexivos y evaluación narrativa\n'
                + '4. Diálogos de propósito y bienestar'
            }
            ],
            /* ─────────────────────────────────────────────────────────────────────────────── */
        }
      ]
    },
          /* -------------- Contenido Complementario -------------- */
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
  ]
};