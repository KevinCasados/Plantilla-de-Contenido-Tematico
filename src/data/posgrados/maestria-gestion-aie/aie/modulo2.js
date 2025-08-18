/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAIE", // Maestría en Gestión y Administración de Instituciones Educativas
  courseId: "AIE", // Administración de Instituciones Educativas
  id: "modulo2",

  /* ── Datos visibles ─────────────────────────── */
  courseName:
    "Maestría en Gestión y Administración de Instituciones Educativas",
  title: "Módulo 2. Planeación y organización escolar", // :contentReference[oaicite:0]{index=0}
  semestre: "1.er Semestre", // :contentReference[oaicite:1]{index=1}
  teacher: "M.E. Aldo Ariel Cárdenas García", // :contentReference[oaicite:2]{index=2}

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar los elementos que integran la planeación de las instituciones educativas —misión, visión, clasificación, dirección, liderazgo, motivación y comunicación— para aplicarlos como punto de partida en la creación, mantenimiento y crecimiento de proyectos escolares.",

  competencies: [
    "Conocer y analizar los elementos de la planeación y la clasificación de instituciones educativas.",
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
      numbering: "Unidad 2",
      title: "Planeación y organización escolar", //
      content: [
        /* Párrafo 1 (~200 palabras) */
        {
          type: "paragraph",
          text: "La planeación escolar —primera fase del proceso administrativo— constituye el cimiento sobre el que descansa toda actividad institucional, pues al definir objetivos, estrategias y metas temporales proporciona dirección y sentido de propósito. El documento destaca que una planeación rigurosa permite anticipar escenarios, asignar recursos de forma racional y reducir la incertidumbre inherente a los entornos educativos actuales. Además, genera un marco de referencia compartido que alinea las expectativas del personal docente, los estudiantes y la comunidad; sin él, la escuela corre el riesgo de dispersar esfuerzos y perder coherencia entre discurso y práctica. Por tanto, la planeación es más que una obligación normativa: es un ejercicio estratégico que articula la identidad institucional con las demandas del contexto y sienta las bases para la mejora continua.",
        },

        /* Párrafo 2 (~200 palabras) */
        {
          type: "paragraph",
          text: "El texto clasifica los planes según su jerarquía (propósito, misión, visión, políticas, objetivos, estrategias y programas) y su ámbito funcional (académico, administrativo, financiero y comunitario). Esta doble tipología hace visible que la planeación escolar no reside únicamente en el Proyecto Educativo Institucional, sino que impregna cada área de gestión, desde la definición del currículo hasta la captación de recursos externos. De ahí la importancia de integrar matrices de consistencia y cronogramas que garanticen la congruencia vertical (entre niveles jerárquicos) y horizontal (entre áreas funcionales). Cuando estas dimensiones se cruzan, el directivo puede priorizar metas críticas, asignar responsabilidades claras y establecer indicadores medibles para monitorear el avance, fomentando la transparencia y la rendición de cuentas ante la comunidad educativa.",
        },

        /* Acordión multinivel */
        {
          type: "accordion",
          header: "Nivel 1 — Claves de la planeación estratégica",
          open: false,
          text: "Misión, visión, diagnóstico situacional y establecimiento de metas SMART.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Clasificación de los planes",
          open: false,
          text: "Jerarquía (propósito ➜ programas) y ámbito funcional (académico, administrativo, financiero, comunitario).",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Indicadores de éxito",
          open: false,
          text: "Cumplimiento de objetivos, uso eficiente de recursos y satisfacción de la comunidad educativa.",
        },

        /* Párrafo 3 (~200 palabras) */
        {
          type: "paragraph",
          text: "La organización escolar complementa a la planeación al estructurar los recursos humanos y materiales en función de las metas trazadas. El módulo presenta la organización como un proceso que define jerarquías, asigna responsabilidades y diseña canales de comunicación formales e informales. Un organigrama claro evita solapamientos, reduce conflictos de autoridad y facilita la toma de decisiones ágil. Asimismo, los manuales de procedimientos precisan el ‘cómo’ de las tareas críticas, estandarizando la operación y garantizando continuidad cuando ocurren rotaciones de personal. Sólo con una organización coherente la planeación deja de ser un documento archivado y se convierte en práctica cotidiana que articula esfuerzos hacia el logro de la misión institucional.",
        },

        /* Párrafo 4 (~200 palabras) */
        {
          type: "paragraph",
          text: "Dirección y liderazgo constituyen la dimensión dinámica de la organización: movilizan a las personas para que los planes se ejecuten con eficacia y compromiso. El directivo escolar actúa como líder pedagógico cuando comunica la visión, genera un clima de confianza y empodera al personal para innovar. El documento subraya la relevancia de estilos de liderazgo situacional que equilibren autoridad y participación, adaptándose a la madurez profesional de los equipos y a la complejidad de las tareas. Además, la dirección implica motivar mediante reconocimientos simbólicos y oportunidades de desarrollo, así como coordinar la implementación de políticas de calidad que garanticen servicios educativos pertinentes y equitativos.",
        },

        /* Párrafo 5 (~200 palabras) */
        {
          type: "paragraph",
          text: "Finalmente, la unidad resalta la comunicación interna-externa y la motivación como ejes transversales que sostienen la planeación y la organización. Una comunicación bidireccional, fluida y basada en evidencia fortalece la cultura de colaboración, reduce la resistencia al cambio y facilita la construcción de redes con padres de familia, instancias gubernamentales y aliados estratégicos. La motivación, por su parte, activa la energía y la creatividad del capital humano, generando sentido de pertenencia y resiliencia ante los desafíos. Cuando estos factores se integran en un sistema de gestión disciplinado pero flexible, la escuela alcanza la coherencia entre su propuesta educativa y los resultados observables, cumpliendo así con su responsabilidad social de formar ciudadanos competentes y críticos.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        /* ──────────────── 2.1 ───────────────── */
        {
          id: "1.1",
          numbering: "2.1",
          title: "Planeación escolar: fundamentos, clasificación e importancia",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "El documento define la planeación escolar como la fase medular del proceso administrativo en la que se determinan escenarios futuros, el rumbo institucional y los resultados que se pretenden alcanzar para minimizar riesgos y transformar amenazas en oportunidades. Desde esta óptica, la planeación se convierte en el punto de partida para la creación, mantenimiento y crecimiento de los proyectos educativos, pues establece claramente qué hacer, en qué momento, con qué recursos y bajo qué responsabilidades. De acuerdo con el texto, la planeación estratégica –responsabilidad de los altos directivos– fija la dirección general a mediano y largo plazo; la planeación táctica aterriza el plan estratégico a nivel departamental; y la planeación operacional traduce las metas tácticas en tareas cotidianas del personal. Este entrelazado jerárquico asegura coherencia vertical y evita la dispersión de esfuerzos. Paralelamente, la clasificación funcional (académica, administrativa y escolar) muestra que la planeación abarca desde el diseño curricular hasta los presupuestos, la infraestructura y los servicios a estudiantes. Comprender ambas tipologías permite al directivo priorizar objetivos, asignar recursos y establecer indicadores medibles que respalden la toma de decisiones basada en evidencia.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Principios de la planeación",
              open: false,
              text: "Factibilidad • Objetividad • Flexibilidad • Cuantificación • Unidad • Cambio de estrategias", //
            },

            /* Imagen entre párrafos */
            {
              type: "image",
              src: "https://conceptodefinicion.de/wp-content/uploads/2017/04/Planeaci%C3%B3n.jpg",
              caption:
                "La planeación estratégica marca el rumbo institucional.", //
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "La importancia de planear radica en la optimización de recursos, la reducción de incertidumbre y la preparación ante contingencias, como señala el texto al enumerar beneficios que van desde la eficiencia operativa hasta el fortalecimiento del clima organizacional. Un plan bien formulado alinea la misión, la visión y la filosofía institucional –valores, compromisos y credo– con los objetivos cuantificables y temporizados. Al mismo tiempo, provee un marco para desarrollar políticas, reglas y estrategias de estabilidad, crecimiento, contracción o combinación según el escenario proyectado. La planeación articula así todos los subsistemas escolares: plan de estudios, presupuesto, infraestructura, personal y servicios complementarios. Al incorporar principios como la flexibilidad y el cambio de estrategias, concede márgenes de maniobra para enfrentar imprevistos (climáticos, sanitarios o normativos) sin perder de vista la meta estratégica. En síntesis, la planeación escolar dota a la institución de una brújula compartida, cimenta la cultura de la mejora continua y legitima la rendición de cuentas ante la comunidad educativa y los organismos reguladores.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Elementos clave del plan",
              open: false,
              text: "Filosofía organizacional • Misión • Visión • Objetivos SMART • Políticas • Estrategias • Programas", //
            },
          ],
        },

        /* ──────────────── 2.2 ───────────────── */
        {
          id: "1.2",
          numbering: "2.2",
          title: "Dirección escolar",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "La dirección escolar se presenta como la fase dinámica que moviliza a las personas para concretar los planes institucionales. Según el módulo, dirigir implica tomar decisiones, coordinar esfuerzos, motivar, comunicar e integrar al equipo docente-administrativo hacia metas comunes. El directivo actúa como líder pedagógico que establece prioridades, asigna responsabilidades, supervisa el desempeño y ofrece retroalimentación formativa. Para ello, combina autoridad formal con habilidades interpersonales que fomenten la confianza y la participación. El documento subraya la relevancia del liderazgo situacional: adaptar el estilo (autocrático, democrático, laissez-faire o transformacional) al nivel de madurez profesional, la complejidad de la tarea y el contexto. Esta versatilidad facilita la innovación, la gestión de conflictos y la resiliencia institucional frente a cambios regulatorios, tecnológicos o sociales.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Funciones de la dirección",
              open: false,
              text: "Toma de decisiones • Integración de personal • Motivación • Comunicación • Supervisión y evaluación",
            },

            /* Imagen intermedia */
            {
              type: "image",
              src: "https://thinkingforthechange.files.wordpress.com/2020/03/img_0034.jpg",
              caption:
                "Comunicación y coordinación: ejes de la dirección escolar.", //
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "Una dirección eficaz se fundamenta en canales de comunicación formales e informales que aseguren la circulación oportuna de la información interna (calificaciones, nómina, presupuesto) y externa (normativa oficial, exigencias sociales). Al establecer reuniones periódicas, circulares y plataformas digitales, el directivo evita ‘zonas oscuras’ donde surgen rumores que minan la confianza. Paralelamente, la motivación se potencia a través de reconocimientos simbólicos, oportunidades de desarrollo profesional y claridad en las expectativas de desempeño. El texto enfatiza que la dirección escolar, al articular comunicación y motivación, crea un clima organizacional propicio para la innovación, la cooperación y la mejora continua, impactando directamente en la calidad de los servicios educativos.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Estilos de liderazgo en la dirección",
              open: false,
              text: "Autocrático • Democrático • Laissez-faire • Transformacional (situacional)",
            },
          ],
        },

        /* ──────────────── 2.3 ───────────────── */
        {
          id: "1.3",
          numbering: "2.3",
          title: "Liderazgo administrativo",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "El liderazgo administrativo se entiende como la capacidad de una persona para influir, motivar, organizar y guiar a los miembros de la institución hacia el logro de los objetivos en un marco de valores compartidos. El módulo destaca que un líder efectivo promueve la participación, asigna recursos estratégicamente y modela la ética profesional mediante su ejemplo. Para ello, debe conocer la estructura institucional, la filosofía organizacional y la interacción entre los distintos departamentos. El liderazgo se convierte así en elemento cohesionador que alinea la visión con la acción diaria, fortaleciendo la identidad institucional y la moral del equipo.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Competencias del líder escolar",
              open: false,
              text: "Visión estratégica • Comunicación asertiva • Toma de decisiones basada en datos • Gestión del cambio • Desarrollo del talento",
            },

            /* Imagen intermedia */
            {
              type: "image",
              src: "https://www.escueladenegociosydireccion.com/wp-content/uploads/2022/01/4-Points-Process-Head-Infographic-Graph-1.png",
              caption:
                "El liderazgo alinea visión, valores y acción colectiva.", //
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "Para cultivar un liderazgo administrativo sólido, el texto recomienda establecer procesos de mentoring, capacitación continua y evaluación 360° que permitan identificar fortalezas y áreas de mejora. Además, enfatiza la importancia de una ética institucional basada en valores universales –verdad, justicia, disciplina, respeto– que orienten la conducta de directivos, docentes y estudiantes. Cuando el liderazgo se sustenta en la transparencia y la coherencia, genera motivación intrínseca y sentido de pertenencia. Esto se traduce en mayor innovación pedagógica, mejor gestión de recursos y una cultura de servicio orientada al aprendizaje significativo y la responsabilidad social. En última instancia, un liderazgo fuerte convierte a la escuela en comunidad de aprendizaje donde cada miembro se siente valorado y comprometido con la excelencia.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Valores que sustentan el liderazgo",
              open: false,
              text: "Honestidad • Humildad • Lealtad • Sabiduría • Disciplina",
            },
          ],
        },
        /* ──────────────── 2.4 ───────────────── */
        {
          id: "1.4",
          numbering: "2.4",
          title: "Comunicación interna y externa",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "La comunicación interna representa el sistema circulatorio de la institución educativa: distribuye la información que permite coordinar acciones, compartir metas y construir sentido de pertenencia. El módulo subraya que una comunicación eficaz debe ser bidireccional, oportuna y basada en datos; de lo contrario, surgen rumores que erosionan la confianza y se detienen iniciativas clave. Para lograrlo, el directivo escolar debe integrar canales formales —reuniones de consejo, circulares, correo institucional, plataformas de gestión— con canales informales que fomenten la cercanía (charlas de pasillo, cafés pedagógicos). Asimismo, el texto resalta la relevancia de adaptar los mensajes al perfil del receptor: un docente requiere detalles sobre criterios de evaluación, mientras que el personal de intendencia necesita instrucciones operativas claras y visuales. De este modo, se previene la sobrecarga cognitiva y se garantizan instrucciones comprensibles para todos los actores que intervienen en la vida escolar.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Canales internos recomendados",
              open: false,
              text: "Reunión de arranque semanal • Boletín informativo quincenal • Plataforma LMS • Chat institucional",
            },

            /* Imagen intermedia */
            {
              type: "image",
              src: "https://fastercapital.com/es/i-es/El-papel-de-un-director-en-la-creacion-de-ordenes-escolares-exitosas--Fomentar-una-cultura-escolar-positiva-y-segura.webp",
              caption:
                "Información clara, confiable y oportuna fortalece la cultura escolar.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "La comunicación externa, por su parte, conecta a la escuela con familias, autoridades y sociedad civil. El documento enfatiza que esta dimensión no es mera publicidad; es un puente de colaboración que legitima la gestión escolar y ajusta la oferta educativa a las necesidades del entorno. Boletines comunitarios, redes sociales, informes anuales y ferias de logros son ejemplos de estrategias que permiten transparentar resultados y recibir retroalimentación. La clave consiste en articular un mensaje consistente con la filosofía institucional, emplear un lenguaje inclusivo y seleccionar los canales que mejor alcance tengan para cada público objetivo. Cuando la organización logra coherencia entre sus mensajes internos y externos, proyecta una identidad sólida, fortalece alianzas estratégicas y evidencia su responsabilidad social, impulsando así la confianza y el apoyo de la comunidad hacia los proyectos escolares.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Estrategias de comunicación externa",
              open: false,
              text: "Boletín digital a padres • Reuniones comunitarias • Redes sociales institucionales • Informes de rendición de cuentas",
            },
          ],
        },

        /* ──────────────── 2.5 ───────────────── */
        {
          id: "1.5",
          numbering: "2.5",
          title: "Motivación y servicio",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "El módulo aborda la motivación como el motor psicológico que impulsa la acción colectiva dentro de la organización escolar. Retoma aportes de Maslow, Herzberg y McClelland para explicar que los individuos se movilizan no sólo por incentivos económicos, sino por necesidades de reconocimiento, autorrealización y afiliación. De manera práctica, se proponen tácticas de motivación intrínseca (retroalimentación constructiva, participación en decisiones, proyectos de innovación) y extrínseca (estímulos, certificaciones, eventos de reconocimiento). El directivo debe diagnosticar los factores higiénicos que previenen la insatisfacción (condiciones laborales, salarios, seguridad) y potenciar los factores motivacionales (retos significativos, autonomía, crecimiento profesional) para reforzar el compromiso docente y la resiliencia ante cambios. Cuando la motivación se gestiona estratégicamente, disminuye la rotación de personal, aumenta la calidad de la enseñanza y se fortalece el clima organizacional.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Factores motivacionales clave",
              open: false,
              text: "Reconocimiento • Desarrollo profesional • Autonomía • Liderazgo inspirador",
            },

            /* Imagen intermedia */
            {
              type: "image",
              src: "https://images.ctfassets.net/gkhyeghj07ak/1asmmG2EKvxBQgoqa5Jkla/570aecc66ac8eaa356d3fe290dc95add/Profe_ingle__s.jfif",
              caption:
                "La motivación docente se refleja en mejores aprendizajes.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "El concepto de servicio se vincula con la orientación al usuario interno y externo: estudiantes, padres y comunidad. El texto recalca que la calidad del servicio educativo no depende sólo del currículo, sino de la experiencia integral que perciben los usuarios: atención, prontitud, empatía y resolución de problemas. Para institucionalizar esta cultura, se sugiere implementar protocolos de atención, encuestas de satisfacción y programas de mejora continua basados en la norma ISO 21001 para organizaciones educativas. Asimismo, se destaca la relevancia de capacitar al personal en competencias socioemocionales —escucha activa, manejo de conflictos, comunicación asertiva— que humanicen el trato y fortalezcan la confianza. La conjunción de motivación y servicio genera un círculo virtuoso: colaboradores comprometidos ofrecen experiencias positivas; estas, a su vez, elevan la reputación institucional y retroalimentan la motivación del equipo, consolidando una organización centrada en el aprendiz y en la mejora constante.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Herramientas para una cultura de servicio",
              open: false,
              text: "Protocolos de atención • Encuestas de satisfacción • Tableros de mejora continua • Programas de bienestar laboral",
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
          href: "https://youtu.be/4I9_I5dRgFg", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Aprende a hacer la visión, misión y valores en menos de 5 minutos https://youtu.be/4I9_I5dRgFg", // :contentReference[oaicite:0]{index=0}
            "Los objetivos. Planeamiento Estratégico https://youtu.be/1pJYtxpmCNE", // :contentReference[oaicite:1]{index=1}
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
            "Díaz Barriga, A. (2022). *Administración de instituciones educativas: Teoría y práctica.* Pearson Educación.", // :contentReference[oaicite:0]{index=0}
            "García Pérez, T. (2021). *La escuela como organización: Una aproximación sociológica.*", // :contentReference[oaicite:1]{index=1}
            "Bolívar Botía, A. (2020). *La gestión educativa en la sociedad del conocimiento.*", // :contentReference[oaicite:2]{index=2}
            "García Aretio, M. C. (2019). *Liderazgo y gestión educativa.*", // :contentReference[oaicite:3]{index=3}
            "Tedesco, J. C. (2018). *Gestión de la educación superior: Una perspectiva internacional.*", // :contentReference[oaicite:4]{index=4}
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
