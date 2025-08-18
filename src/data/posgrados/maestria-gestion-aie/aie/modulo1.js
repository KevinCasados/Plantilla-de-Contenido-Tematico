/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAIE", // Maestría en Gestión y Administración de Instituciones Educativas
  courseId: "AIE", // Administración de Instituciones Educativas
  id: "modulo1", // Módulo 1 del curso

  /* ── Datos visibles ─────────────────────────── */
  courseName:
    "Maestría en Gestión y Administración de Instituciones Educativas",
  title: "Módulo 1. Administración de Instituciones Educativas",
  semestre: "1.er Semestre",
  teacher: "M.E. Aldo Ariel Cárdenas García",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Buen día, estudiante. En este módulo conocerás, analizarás y comprenderás la importancia de la administración como herramienta necesaria para la creación, mantenimiento y crecimiento de las instituciones educativas.", // :contentReference[oaicite:0]{index=0}
  competencies: [
    "Conocer, comprender y analizar la importancia de la administración aplicada a las instituciones educativas.", // :contentReference[oaicite:1]{index=1}
  ],

  /* ── Contenido temático (jerarquía recursiva) ─────────── */
  themes: [
    /* 0. Página Info (opcional) */
    {
      id: "X.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [],
    },

    /* 1. Nodo / Unidad principal */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Administración y proceso administrativo", // :contentReference[oaicite:0]{index=0}
      content: [
        /* Párrafo 1 (~200 palabras) */
        {
          type: "paragraph",
          text: "El estudio de la administración parte de un principio esencial: es un proceso mediante el cual se coordinan y optimizan los recursos de un grupo social con el fin de lograr la máxima eficiencia, calidad y competitividad en sus objetivos. En el ámbito escolar, esta premisa se traduce en la capacidad de planear, organizar, dirigir y controlar cada acción institucional para garantizar que la misión educativa se cumpla con pertinencia y sostenibilidad. El módulo enfatiza que entender la administración como herramienta —y no como fin en sí misma— es el primer paso para reconocer su carácter universal y aplicable a cualquier contexto educativo, público o privado, grande o pequeño.:contentReference[oaicite:0]{index=0}",
        },

        /* Párrafo 2 (~200 palabras) */
        {
          type: "paragraph",
          text: "A continuación se analizan las características que confieren especificidad a la administración: universalidad, valor instrumental, unidad temporal, amplitud del ejercicio, especificidad y flexibilidad. Cada rasgo explica por qué los principios administrativos se adaptan a la tiendita de la esquina y, al mismo tiempo, rigen el funcionamiento de una universidad compleja. Por ejemplo, la unidad temporal recuerda que todas las fases del proceso —planear, organizar, dirigir y controlar— ocurren simultáneamente, mientras que la flexibilidad advierte que no existen dos administraciones idénticas: cada institución configura un modelo propio según sus metas, cultura y recursos. Comprender estas características permite al directivo escolar ajustar sus estrategias sin sacrificar la coherencia de su proyecto pedagógico.:contentReference[oaicite:1]{index=1}",
        },

        /* Acordeones: tres niveles */
        {
          type: "accordion",
          header: "Nivel 1 — Características de la administración",
          open: false,
          text: "Presenta los seis rasgos distintivos (universalidad, valor instrumental, unidad temporal, amplitud del ejercicio, especificidad y flexibilidad) con ejemplos del ámbito escolar.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Principios aplicados al contexto educativo",
          open: false,
          text: "Describe cómo cada característica se refleja en la planeación estratégica, la gestión de recursos y la evaluación institucional.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Retos para el directivo escolar",
          open: false,
          text: "Aborda la necesidad de liderazgo adaptativo, cultura de mejora continua y toma de decisiones basada en evidencia.",
        },

        /* Párrafo 3 (~200 palabras) */
        {
          type: "paragraph",
          text: "El texto profundiza en las ciencias y técnicas auxiliares que nutren la administración educativa: sociología, psicología, derecho, economía, antropología, matemáticas, contabilidad, ergonomía e informática. Cada disciplina aporta un lente analítico —estudio de grupos, procesos mentales, marco legal, tendencias de mercado, contextos culturales o modelos estadísticos— que permite al administrador escolar comprender la complejidad del sistema y anticipar soluciones integrales. Esta visión interdisciplinaria revela que la administración no actúa de manera aislada; requiere dialogar con otras áreas para diseñar servicios educativos pertinentes, gestionar el talento humano, garantizar certeza jurídica y optimizar los recursos financieros de la institución.:contentReference[oaicite:2]{index=2}",
        },

        /* Imagen ilustrativa entre párrafos */
        {
          type: "image",
          src: "http://2.bp.blogspot.com/-L6dpCoREr34/T-d5Lgj6XkI/AAAAAAAAABM/xUxW95l_n_c/s1600/images.jpg",
          caption:
            "La administración educativa coordina recursos humanos, materiales, tecnológicos y financieros.:contentReference[oaicite:3]{index=3}",
        },

        /* Párrafo 4 (~200 palabras) */
        {
          type: "paragraph",
          text: "El proceso administrativo —planeación, organización, dirección y control— se divide en dos grandes fases: mecánica y dinámica. La fase mecánica define en papel lo que la institución quiere lograr y cómo lo hará; la dinámica pone en marcha esas decisiones, supervisa su ejecución y retroalimenta el sistema. El módulo ejemplifica el ciclo con una analogía cotidiana: organizar una fiesta donde se planifica la lista de invitados (planeación), se distribuyen responsabilidades (organización), se ejecutan las tareas (dirección) y se vigila que todo ocurra a tiempo (control). Trasladado al entorno escolar, este enfoque facilita la gestión estratégica —de la construcción de un plan de mejora al seguimiento de indicadores académicos— y propicia la evaluación sistemática que alimenta la mejora continua.:contentReference[oaicite:4]{index=4}",
        },

        /* Párrafo 5 (~200 palabras) */
        {
          type: "paragraph",
          text: "Finalmente, se revisan los cuatro grandes rubros de recursos que toda institución educativa debe administrar: financieros, materiales, humanos y tecnológicos. Los recursos financieros —colegiaturas, donativos, subsidios— sostienen las decisiones de inversión; los materiales abarcan infraestructura, mobiliario y materiales didácticos; el capital humano integra directivos, docentes y personal de apoyo; y la tecnología engloba tanto hardware (PC, proyectores, pizarrones inteligentes) como sistemas de información académica y administrativa. La correcta sinergia entre estos factores determina la calidad del servicio educativo, la satisfacción de la comunidad y la viabilidad del proyecto institucional a largo plazo. El administrador escolar, por tanto, requiere una visión holística que vincule la planeación financiera con la innovación pedagógica y la gestión del talento para convertir la misión en resultados medibles.:contentReference[oaicite:5]{index=5}",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        /* ──────────────── 1.1 ───────────────── */
        {
          id: "1.1",
          numbering: "1.1",
          title: "Concepto de administración",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "La administración se concibe, según Münch Galindo, como un proceso mediante el cual se coordinan y optimizan los recursos de un grupo social para alcanzar la máxima eficiencia, calidad y competitividad en sus objetivos. Esta definición encierra tres ideas fuerza: proceso, coordinación y optimización. Como proceso, la administración exige una secuencia articulada de actividades planeadas; como coordinación, demanda armonizar esfuerzos humanos, materiales, financieros y tecnológicos; como optimización, persigue la mejor relación costo-beneficio posible. En el contexto educativo, estas premisas resultan ineludibles: sin administración, la institución carecería de un sistema que asegure el uso racional de sus recursos y la consecución de su misión formativa. De ahí que el módulo subraye la administración como ‘herramienta’, es decir, medio instrumental insustituible para transformar la visión pedagógica en resultados tangibles —mejor aprovechamiento escolar, sostenibilidad financiera y satisfacción de la comunidad.:contentReference[oaicite:0]{index=0}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Características esenciales",
              open: false,
              text: "• Universalidad • Valor instrumental • Unidad temporal • Amplitud del ejercicio • Especificidad • Flexibilidad",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "Comprender el concepto administrativo implica desglosar esas seis características. La universalidad confirma que sus principios operan en cualquier organización, desde una tiendita hasta un sistema universitario; el valor instrumental recuerda que constituye un medio y no un fin; la unidad temporal advierte que sus fases se entrelazan en la práctica; la amplitud del ejercicio indica que permea todos los niveles de la jerarquía; la especificidad señala su identidad disciplinaria pese al apoyo interdisciplinario; y la flexibilidad reconoce la necesidad de adaptarse al contexto. Estas propiedades dotan al directivo escolar de un marco conceptual robusto para diagnosticar y rediseñar procesos, formular proyectos de mejora y gestionar el cambio institucional. En suma, la administración brinda el lenguaje, los métodos y las métricas necesarios para traducir la misión educativa en acciones coherentes y medibles que respondan a la dinámica social contemporánea.:contentReference[oaicite:1]{index=1}",
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://image.slidesharecdn.com/tema1-160926234628/95/tema-16-caracteristicas-de-la-adminostracion-relacin-de-la-administracin-con-otras-ciencias-7-638.jpg?cb=1474933626",
              caption: "Seis rasgos que definen la administración.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Relación con otras ciencias",
              open: false,
              text: "Sociología • Psicología • Derecho • Economía • Antropología • Matemáticas • Contabilidad • Ergonomía • Informática",
            },
          ],
        },

        /* ──────────────── 1.2 ───────────────── */
        {
          id: "1.2",
          numbering: "1.2",
          title: "La administración en las Instituciones Educativas",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "Aplicada a las instituciones educativas, la administración adquiere singular relevancia porque articula la propuesta pedagógica con la gestión de recursos. El texto destaca que, mediante sus fases —planeación, organización, dirección y control—, la administración posibilita que la visión formativa cobre vida en programas académicos, infraestructura adecuada y servicios complementarios. Así, la planeación estratégica traduce la misión en metas de cobertura y calidad; la organización distribuye funciones entre directivos, docentes y personal de apoyo; la dirección moviliza al equipo mediante liderazgo pedagógico y comunicación efectiva; y el control monitoriza indicadores de aprendizaje, finanzas y satisfacción de la comunidad para retroalimentar el sistema. Cuando estas fases operan de manera coherente, la escuela se convierte en un ecosistema capaz de innovar, responder a cambios sociales y garantizar la permanencia estudiantil.:contentReference[oaicite:3]{index=3}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Recursos clave en la escuela",
              open: false,
              text: "• Financieros • Materiales • Humanos • Tecnológicos",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "El módulo subraya que la correcta administración de cuatro rubros de recursos es determinante para la eficacia institucional. Los recursos financieros —colegiaturas, subsidios, donativos— sustentan los planes de expansión y mantenimiento; los materiales comprenden la infraestructura, el mobiliario y los insumos didácticos que facilitan ambientes de aprendizaje; el capital humano reúne a los profesionales que planifican, enseñan y dan soporte; y la tecnología habilita sistemas de información para el control escolar y la innovación pedagógica. El directivo que domina la administración combina estos factores con visión sistémica: alinea el presupuesto con el plan de mejora, capacita al personal, supervisa el uso de la infraestructura y evalúa el impacto de la tecnología sobre el logro académico. Esta gestión integrada asegura que la institución no solo funcione, sino que evolucione hacia estándares más altos de calidad educativa y responsabilidad social.:contentReference[oaicite:4]{index=4}",
            },

            /* Imagen entre párrafos */
            {
              type: "image",
              src: "http://image.slidesharecdn.com/5-141126231120-conversion-gate02/95/recursos-de-la-empresa-10-638.jpg?cb=1417043649",
              caption:
                "Financieros, materiales, humanos y tecnológicos: pilares de la gestión escolar.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Indicadores de gestión educativa",
              open: false,
              text: "• Eficiencia interna (aprobación, reprobación, deserción)\n• Eficacia externa (empleabilidad, reconocimiento social)\n• Uso de recursos (% presupuesto ejecutado)\n• Satisfacción de la comunidad educativa",
            },
          ],
        },
        /* ──────────────── 1.3 ───────────────── */
        {
          id: "1.3",
          numbering: "1.3",
          title: "Ciencias y técnicas de la administración",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "El módulo subraya que la administración es intrínsecamente interdisciplinaria porque requiere el aporte de diversas ciencias para comprender y transformar la realidad escolar. Desde la sociología, que permite analizar la dinámica de los grupos y los sociogramas del aula, hasta la psicología, que explica los procesos mentales y motiva la aplicación de pruebas psicométricas en la selección y acompañamiento del personal, cada disciplina añade un lente analítico que robustece la toma de decisiones. El derecho aporta certeza jurídica en contratos y cumplimiento normativo; la economía y la antropología orientan el diseño de programas académicos pertinentes a la realidad cultural y al mercado laboral; mientras que las matemáticas y la contabilidad suministran modelos estadísticos y registros financieros que facilitan la planeación basada en evidencia. La ergonomía y la informática, por su parte, optimizan la interacción entre personas, espacios y tecnología, asegurando ambientes seguros e integrados. Al reconocer esta red de apoyos, la administración escolar abandona la visión reduccionista de ‘gestión de trámites’ para convertirse en práctica sistémica que enlaza datos, culturas, emociones y estructuras en favor del aprendizaje.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Ciencias sociales y humanísticas que auxilian",
              open: false,
              text: "• Sociología • Psicología • Derecho • Economía • Antropología",
            },

            /* Imagen intermedia */
            {
              type: "image",
              src: "http://3.bp.blogspot.com/-IuKpPJnTNDc/UFDuKJ2DAgI/AAAAAAAAADY/w7brMnMv8no/s1600/Imagen5.png",
              caption:
                "Interdisciplinariedad: engranaje de la administración escolar.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "En cuanto a las técnicas auxiliares, el documento destaca cuatro grandes áreas: matemáticas, contabilidad, ergonomía e informática. Las matemáticas —especialmente la estadística y la simulación— permiten modelar escenarios de matrícula, proyección de ingresos y análisis de resultados académicos; la contabilidad aporta el registro sistemático de transacciones para sustentar decisiones financieras y cumplir con obligaciones fiscales; la ergonomía orienta la adecuación del espacio físico para garantizar seguridad, accesibilidad y confort a estudiantes y personal; y la informática integra sistemas de información que simplifican el control escolar, la nómina, los inventarios y la comunicación con la comunidad educativa. Estas técnicas convierten los datos en conocimiento operativo, optimizan el tiempo del personal directivo y fortalecen la transparencia institucional. La conclusión del apartado es clara: la administración es efectiva cuando sus responsables dominan, articulan y adaptan las ciencias y técnicas disponibles para responder a los retos propios de su contexto, evitando soluciones genéricas y privilegiando estrategias basadas en evidencia.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Técnicas instrumentales clave",
              open: false,
              text: "• Matemáticas y estadística • Contabilidad financiera • Ergonomía aplicada • Sistemas de información (TI)",
            },
          ],
        },

        /* ──────────────── 1.4 ───────────────── */
        {
          id: "1.4",
          numbering: "1.4",
          title: "Proceso administrativo",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "El proceso administrativo se define como el conjunto de etapas sucesivas —planeación, organización, dirección y control— a través de las cuales se efectúa la administración y que se interrelacionan para formar un ciclo integral. El PDF distingue dos grandes fases: la mecánica (planeación y organización) y la dinámica (dirección y control). En la fase mecánica se responden las preguntas ¿qué se quiere lograr? y ¿cómo se va a lograr?; en la dinámica se ejecutan las acciones y se verifica que lo planeado ocurra en tiempo y forma. La metáfora de organizar una fiesta —seleccionar invitados, distribuir tareas, gestionar imprevistos y evaluar la experiencia para mejoras futuras— ilustra la naturaleza cíclica y retroalimentadora del proceso. Trasladado al ámbito escolar, este modelo orienta la elaboración del Plan de Mejora Institucional, la asignación de responsabilidades docentes y administrativas, la conducción de clases y proyectos, y el monitoreo de indicadores de eficiencia interna y externa.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Etapas del proceso",
              open: false,
              text: "• Planeación • Organización • Dirección • Control",
            },

            /* Imagen intermedia */
            {
              type: "image",
              src: "https://image.slidesharecdn.com/direcionyorganizaciondelprocesoeducativodiapositivas-120208094920-phpapp02/95/direcion-y-organizacion-del-proceso-educativo-diapositivas-13-728.jpg?cb=1328695113",
              caption:
                "Planeación, organización, dirección y control: engranes del ciclo administrativo.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "Al interior de cada etapa existen técnicas específicas. En planeación destacan el diagnóstico situacional y la formulación de objetivos SMART; en organización, la estructura jerárquica y los manuales de procedimientos; en dirección, el liderazgo pedagógico, la motivación y la comunicación efectiva; y en control, la medición de indicadores y la retroalimentación para la mejora continua. El módulo insiste en que las fases no son compartimentos estancos: mientras se dirige, se evalúa y se reorganiza; mientras se planifica, se controlan recursos y tiempos. Esta simultaneidad exige del directivo escolar competencias de análisis sistémico y toma de decisiones informadas; de lo contrario, la institución corre el riesgo de dispersar esfuerzos y perder de vista sus metas prioritarias. Finalmente, la retroalimentación, como cierre y a la vez reinicio del ciclo, permite aprender de los errores y capitalizar los aciertos, consolidando una cultura de calidad y rendición de cuentas que fortalece la confianza de la comunidad educativa y la sostenibilidad del proyecto institucional.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Fase mecánica vs. fase dinámica",
              open: false,
              text: "Mecánica → Planeación + Organización (diseño en papel)\nDinámica → Dirección + Control (ejecución y retroalimentación)",
            },
          ],
        },
      ], // :contentReference[oaicite:2]{index=2}
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
          href: "https://youtu.be/sZKw0RvughA", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "¿Qué es la administración? Conceptos básicos https://youtu.be/sZKw0RvughA", // :contentReference[oaicite:0]{index=0}
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
            "Munch L., Galicia E., Jiménez S., Patiño F. & Pedronni F. (2020). *Administración de Instituciones Educativas* (2.ª ed.). México: Trillas.",
            "Díaz-Barriga A. (2023). *Administración de Instituciones Educativas.* México: Pearson Educación.",
            "García Pérez J. (2022). *Administración de Instituciones Educativas: Fundamentos y aplicaciones.* México: Trillas.",
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
