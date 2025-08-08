/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MED", // Maestría en Educación
  courseId: "IEIE", // Implicaciones Educativas de la Inteligencia Emocional
  id: "modulo5",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Maestría en Educación",
  title: "Módulo 5. Inteligencia emocional", // :contentReference[oaicite:0]{index=0}
  semestre: "2.º Semestre", // :contentReference[oaicite:1]{index=1}
  teacher: "Dra. Rosa Dianeth Hernández Aguilera", // :contentReference[oaicite:2]{index=2}

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar el concepto de inteligencia emocional, así como su implicación en el ámbito educativo.", // :contentReference[oaicite:3]{index=3}

  competencies: [
    "A través del conocimiento y práctica del concepto de inteligencia emocional, el alumno identificará su importancia en el quehacer docente y la forma de incorporarlo en el aula.", // :contentReference[oaicite:4]{index=4}
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
      numbering: "Unidad 5",
      title: "Inteligencia emocional", // :contentReference[oaicite:0]{index=0}
      content: [
        /* Párrafo 1 (~200 palabras) */
        {
          type: "paragraph",
          text: "Hablar de inteligencia emocional implica reconocer que las emociones cumplen una función adaptativa fundamental: preparan al organismo para actuar, facilitan la toma de decisiones y orientan la conducta hacia metas de supervivencia y de convivencia social. El material del módulo señala que la escuela, al centrarse tradicionalmente en el desarrollo cognitivo, ha soslayado la dimensión afectiva, pese a que el aprendizaje depende tanto de los procesos intelectuales como de la forma en que el alumno percibe, interpreta y regula sus estados internos. Así, comprender la naturaleza de la emoción –su origen neurobiológico, su expresión fisiológica y su componente cognitivo– es el primer paso para concebirla como aliada pedagógica y no como elemento disruptivo del aula. :contentReference[oaicite:0]{index=0}",
        },

        /* Párrafo 2 (~200 palabras) */
        {
          type: "paragraph",
          text: "La génesis de la inteligencia emocional, según el texto, se remonta a los trabajos de Salovey y Mayer (1990), quienes la definieron como la capacidad de percibir, comprender y manejar las propias emociones y las de los demás. Daniel Goleman popularizó el concepto en 1995 al mostrar que dichas habilidades pronostican el éxito personal y profesional con mayor precisión que el cociente intelectual. El módulo distingue entre dos grandes dominios: la inteligencia personal (autoconocimiento, autorregulación, automotivación) y la interpersonal (empatía y habilidades sociales). Esto refuerza la idea de que las emociones no son opuestas a la razón, sino sistemas de información que, bien gestionados, potencian la atención, la memoria y la resolución de problemas. :contentReference[oaicite:1]{index=1}",
        },

        /* Acordión multinivel */
        {
          type: "accordion",
          header: "Nivel 1 — Modelos de IE",
          open: false,
          text: "Habilidades (Salovey & Mayer) • Mixto (Goleman) • Multifactorial (Bar-On)",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Componentes personales",
          open: false,
          text: "Autoconocimiento • Autorregulación • Automotivación",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Componentes interpersonales",
          open: false,
          text: "Empatía • Habilidades sociales • Resolución de conflictos",
        },

        /* Párrafo 3 (~200 palabras) */
        {
          type: "paragraph",
          text: "El desarrollo de la inteligencia emocional no es innato; se adquiere mediante procesos de aprendizaje y modelado social. Durante la infancia, las emociones se expresan de forma explosiva y los adultos actúan como reguladores externos; con la madurez, se espera que el individuo interiorice estrategias de autocontrol. El documento subraya que la escuela es el escenario idóneo para este aprendizaje: el aula ofrece experiencias de cooperación, retroalimentación y confrontación de puntos de vista que favorecen la identificación y la regulación emocional. Programas de educación emocional, cuando se integran al currículo, mejoran la convivencia, reducen la violencia y elevan el rendimiento académico, pues incrementan la motivación intrínseca y la capacidad de concentración bajo estrés. :contentReference[oaicite:2]{index=2}",
        },

        /* Párrafo 4 (~200 palabras) */
        {
          type: "paragraph",
          text: "Las críticas al constructo señalan tres frentes: su delimitación conceptual, la validez de sus instrumentos de medida y la confusión entre rasgos de personalidad y competencias aprendidas. El módulo recoge objeciones de autores que consideran la IE un ‘cajón de sastre’ que incluye desde la empatía hasta la motivación, lo que dificulta establecer un marco teórico unificado. Otros cuestionan la falta de pruebas con la fiabilidad y estandarización del CI. No obstante, la respuesta de los defensores apunta a la evidencia acumulada de programas escolares que, al fortalecer la conciencia emocional, logran reducir conductas disruptivas y mejorar la autoestima del alumnado. Esto sugiere que, aun con debates metodológicos, la puesta en práctica de la IE genera beneficios visibles en el clima escolar. :contentReference[oaicite:3]{index=3}",
        },

        /* Párrafo 5 (~200 palabras) */
        {
          type: "paragraph",
          text: "Finalmente, la unidad enfatiza la responsabilidad docente en modelar la inteligencia emocional: el profesor que reconoce sus propias emociones, regula su respuesta al estrés y expresa empatía crea un ambiente seguro que facilita el aprendizaje. Estrategias como la tutoría socioemocional, el uso de diarios reflexivos y los círculos de diálogo ayudan a que los estudiantes elaboren sus experiencias afectivas y transfieran estas habilidades a la vida cotidiana. En un contexto marcado por la diversidad y los retos post-pandemia, cultivar la inteligencia emocional no es un lujo, sino un requisito para formar personas resilientes, capaces de gestionar la incertidumbre y de construir relaciones colaborativas. El reto educativo consiste en articular el saber, el saber hacer y el saber ser bajo un mismo horizonte de bienestar integral. :contentReference[oaicite:4]{index=4}",
        },
      ],
      /* → Subtemas de primer nivel (cinco temas señalados en el PDF) */
      subthemes: [
        /* ──────────────── 5.1 ───────────────── */
        {
          id: "1.1",
          numbering: "5.1",
          title: "¿Qué es una emoción y para qué sirve?",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "El módulo describe la emoción como un patrón de respuesta biopsicológica que se activa ante un estímulo relevante para la supervivencia o la convivencia social. Esta respuesta incluye cambios fisiológicos —aumento de la frecuencia cardiaca, liberación de adrenalina—, expresiones motoras —gestos faciales, postura— y una valoración cognitiva que da significado a la experiencia (¿amenaza, logro, pérdida?). Según Bisquerra (2011), la emoción funciona como un sistema de alarma que moviliza recursos energéticos y atencionales: la ira prepara para la defensa, la tristeza promueve la introspección, la alegría refuerza conductas útiles. En el ámbito escolar, estos mecanismos influyen directamente en la memoria y la motivación: un alumno ansioso focaliza su atención en la amenaza (examen) a costa del contenido, mientras que uno entusiasmado libera dopamina que potencia la consolidación de recuerdos. Comprender esta dinámica es crucial para diseñar ambientes de aprendizaje que canalicen la activación emocional hacia el reto y no hacia el bloqueo. :contentReference[oaicite:0]{index=0}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Funciones adaptativas de la emoción",
              open: false,
              text: "Supervivencia • Comunicación social • Regulación de la motivación • Priorización atencional",
            },

            /* Imagen */
            {
              type: "image",
              src: "https://www.psicoglobal.com/upload/1/1449/infografia-la-psicologia-de-las-emociones.jpg",
              caption:
                "Cada emoción moviliza al organismo para una acción específica.",
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "Las emociones se diferencian de los estados de ánimo en duración e intensidad: las primeras son breves y de alta intensidad; los segundos, difusos y prolongados. El PDF subraya que toda emoción es *adaptativa* cuando su expresión y duración corresponden al contexto: la ansiedad moderada antes de un examen impulsa a estudiar; la ira ante la injusticia cataliza la defensa de valores. Sin embargo, puede tornarse *desadaptativa* si es desproporcionada o sostenida —pánico escénico, resentimiento crónico— comprometiendo la salud y el rendimiento. De ahí la urgencia de educar en alfabetización emocional: identificar con precisión lo que se siente, nombrarlo y regularlo a través de técnicas de respiración, reestructuración cognitiva o diálogo empático. Esta alfabetización no solo mejora el clima áulico, sino que sienta las bases para la inteligencia emocional al proporcionar un vocabulario y un marco de autorreflexión que incrementan la autonomía personal. :contentReference[oaicite:1]{index=1}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Componentes de la respuesta emocional",
              open: false,
              text: "Fisiológico • Conductual • Cognitivo/valorativo",
            },
          ],
        },

        /* ──────────────── 5.2 ───────────────── */
        {
          id: "1.2",
          numbering: "5.2",
          title: "La génesis de la inteligencia emocional",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "Salovey y Mayer acuñaron el término *emotional intelligence* en 1990, definiéndolo como la capacidad de percibir, asimilar, comprender y regular las emociones propias y ajenas. Su Modelo de las Cuatro Ramas ubica estas habilidades en un continuo que va desde la percepción emocional (reconocer gestos y tonos) hasta la regulación reflexiva para promover el crecimiento personal. Goleman (1995) amplió la propuesta al incorporar competencias motivacionales y sociales, popularizando el constructo en el ámbito empresarial y educativo. El material resalta que la IE surge de la convergencia de tres tradiciones: la psicología de la emoción, la investigación sobre habilidades sociales y los estudios de metacognición. Este origen multidisciplinario explica la diversidad de modelos (habilidades, mixtos, multifactoriales) y la riqueza de intervenciones que abarca desde la terapia cognitivo-conductual hasta los programas de aprendizaje social y emocional (SEL) en escuelas de primaria. :contentReference[oaicite:2]{index=2}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Modelos fundamentales",
              open: false,
              text: "Cuatro ramas (Salovey & Mayer) • Competencias (Goleman) • Multifactorial (Bar-On)",
            },

            /* Imagen */
            {
              type: "image",
              src: "https://rieeb.ibero.mx/index.php/rieeb/article/download/5/version/5/6/13/image002.png",
              caption:
                "Percepción, comprensión, uso y regulación: el ciclo de la IE.",
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "Los mecanismos de desarrollo de la IE combinan maduración neurológica y aprendizaje socio-cultural. Durante la infancia, la corteza prefrontal —encargada de la autorregulación— está en pleno proceso de mielinización, lo que explica la impulsividad característica de los niños. A medida que maduran las conexiones con el sistema límbico, mejora la capacidad de inhibir respuestas automáticas y de considerar las consecuencias a largo plazo. Sin embargo, esta evolución no sucede en el vacío: la *co-regulación* con figuras de apego, la retroalimentación social y las normas culturales moldean los patrones de respuesta. El PDF enfatiza la plasticidad del sistema: entrenamientos breves en mindfulness, role-playing o resolución de conflictos producen cambios medibles en la activación amigdalina y en el grosor cortical prefrontal, reforzando la idea de que la IE puede y debe enseñarse explícitamente en la escuela. :contentReference[oaicite:3]{index=3}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Factores que facilitan la IE",
              open: false,
              text: "Apego seguro • Modelado docente • Retroalimentación empática • Prácticas mindfulness",
            },
          ],
        },

        /* ──────────────── 5.3 ───────────────── */
        {
          id: "1.3",
          numbering: "5.3",
          title: "La inteligencia emocional y su praxis",
          content: [
            /* Párrafo 1 */
            {
              type: "paragraph",
              text: "Aplicar la inteligencia emocional en el aula supone integrar tres niveles de intervención: intrapersonal, interpersonal y organizacional. A nivel intrapersonal, el docente fomenta el autoconocimiento mediante diarios reflexivos, escalas de auto-registro de estados de ánimo y objetivos personales de regulación. A nivel interpersonal, se implementan dinámicas cooperativas que requieren escuchar activamente, expresar discrepancias con respeto y brindar retroalimentación constructiva. El nivel organizacional se refiere a la cultura escolar: normas explícitas de convivencia, espacios seguros de diálogo y protocolos de mediación de conflictos. El módulo reporta que los centros que adoptan programas SEL observan disminución de conductas disruptivas, aumento de la retención escolar y mejora del rendimiento académico, confirmando que la IE no compite con el currículo, sino que lo potencia. :contentReference[oaicite:4]{index=4}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Estrategias prácticas",
              open: false,
              text: "Diario de gratitud • Técnicas de respiración • Juegos de rol • Círculos de paz",
            },

            {
              type: "image",
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2psgXijmw4a8wWrp0yi5Xh97HxcWpAmsBA&s",
              caption: "Cooperación y empatía, pilares de la praxis emocional.",
            },

            /* Párrafo 2 */
            {
              type: "paragraph",
              text: "Para evaluar el impacto de la IE en la práctica docente se proponen instrumentos como la Escala de Metacognición Emocional, rúbricas de clima de aula y análisis de redes de apoyo entre alumnos. El PDF sugiere combinar mediciones cuantitativas (frecuencia de conductas prosociales, registros de disciplina) con métodos cualitativos (entrevistas, grupos focales) para capturar la complejidad del cambio. Asimismo, advierte sobre la ‘falacia de la buena intención’: introducir actividades emocionales de forma esporádica, sin alinearlas al proyecto curricular, suele generar escepticismo. El éxito reside en la coherencia entre lo que se enseña y la forma en que se vive la relación pedagógica: un docente que gestiona con calma un conflicto otorga un aprendizaje implícito más poderoso que cualquier lección teórica. Para consolidar la praxis, el módulo recomienda comunidades profesionales de aprendizaje donde maestros compartan retos y celebren avances. :contentReference[oaicite:5]{index=5}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Indicadores de éxito",
              open: false,
              text: "Reducción de reportes de conducta • Mejora del clima de aula • Aumento del rendimiento • Bienestar emocional",
            },
          ],
        },

        /* ──────────────── 5.4 ───────────────── */
        {
          id: "1.4",
          numbering: "5.4",
          title:
            "El manejo de la inteligencia emocional y la transmisión de conocimientos",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "La transmisión de conocimientos no ocurre en un vacío afectivo: toda explicación, evaluación o retroalimentación activa circuitos emocionales que facilitan —o bloquean— la codificación de la información. El PDF destaca que el docente emocionalmente competente planifica las fases de la lección considerando la curva atencional: inicia con un detonante motivador que despierte curiosidad (p. ej., una pregunta retadora), administra la dificultad en espiral para evitar la saturación y cierra con un anclaje positivo que refuerce la satisfacción de logro. Este diseño se apoya en la amígdala, cuya activación moderada libera noradrenalina y dopamina, neurotransmisores que consolidan la memoria declarativa en el hipocampo. Además, la regulación emocional modelada por el profesor —tono de voz, postura abierta, escucha activa— actúa como ‘andamiaje afectivo’: los estudiantes perciben seguridad y se atreven a participar, tolerar la frustración y corregir errores. El texto cita a Vallés & Vallés (2000) para subrayar que la IE no significa reprimir las emociones, sino dirimirlas con asertividad a fin de que trabajen a favor del aprendizaje. :contentReference[oaicite:0]{index=0}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Momentos emocionales de la clase",
              open: false,
              text: "Enganche motivacional • Zona de reto óptimo • Cierre de logro",
            },

            /* Imagen intermedia */
            {
              type: "image",
              src: "https://udeki.com/wp-content/uploads/2023/06/2304.i039.008.F.m004.c9.neuro-marketing-isometric-scaled.jpg",
              caption:
                "Emoción + cognición: binomio clave en la consolidación del aprendizaje.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "Una estrategia central —señala el documento— es la **mediación emocional**: cuando surge un conflicto o una emoción intensa (miedo al examen, frustración por la calificación), el docente guía al alumno para que identifique la sensación, la nombre con precisión y explore alternativas de afrontamiento. Este proceso vincula la corteza prefrontal dorsolateral (razonamiento) con el sistema límbico (afecto), fortaleciendo las vías de autorregulación. En términos didácticos, la mediación se traduce en pausas reflexivas, autoevaluaciones guiadas y retroalimentación descriptiva (no evaluativa) centrada en el proceso más que en el resultado. El texto añade que las rutinas de metacognición emocional —semáforo del ánimo, escalas de activación, diarios de gratitud— reducen la carga cognitiva extrínseca y liberan recursos para el pensamiento abstracto. Investigaciones citadas (Bisquerra, 2012) muestran mejoras de hasta 20 % en el rendimiento cuando las prácticas de IE se integran sistemáticamente al currículo. :contentReference[oaicite:1]{index=1}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Herramientas de mediación emocional",
              open: false,
              text: "Semáforo del ánimo • Diario reflexivo • Retroalimentación descriptiva",
            },
          ],
          subthemes: [],
        },

        /* ──────────────── 5.5 ───────────────── */
        {
          id: "1.5",
          numbering: "5.5",
          title: "La escuela centrada en el individuo",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "La escuela centrada en el individuo parte del principio de que cada alumno posee un perfil emocional-cognitivo único que debe ser reconocido y nutrido. El PDF conecta esta visión con la pedagogía humanista y con la teoría de las inteligencias múltiples, resaltando que la IE actúa como eje articulador entre el saber y el ser. En una institución centrada en la persona, el currículo flexibiliza ritmos y estilos de aprendizaje, ofrece vías de elección (proyectos, portafolios, aprendizaje servicio) y valora tanto las competencias académicas como las socioemocionales. El docente se convierte en facilitador que diagnostica las necesidades afectivas, diseña apoyos diferenciados y cultiva un clima de confianza donde el error es oportunidad de crecimiento. Este enfoque exige estructuras organizativas inclusivas: asesoría personalizada, tutorías socioemocionales y participación estudiantil en la toma de decisiones. Los resultados reportados incluyen descenso de la deserción, mejora del bienestar psicológico y aumento de la resiliencia ante la adversidad. :contentReference[oaicite:2]{index=2}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Pilares de la escuela centrada en el individuo",
              open: false,
              text: "Personalización • Inclusión • Participación activa • Bienestar integral",
            },

            {
              type: "image",
              src: "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
              caption:
                "Un clima de confianza permite a cada estudiante desplegar su potencial.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "Para operacionalizar esta filosofía, la literatura propone el modelo **RULER** (Recognizing, Understanding, Labeling, Expressing, Regulating) y los principios de aprendizaje socioemocional de CASEL, que integran competencias de autoconciencia, autorregulación, toma de decisiones responsable, conciencia social y habilidades relacionales. El módulo describe cómo estos marcos se traducen en prácticas concretas: círculos de diálogo para fomentar la escucha, contratos de aula que co-construyen normas y proyectos de aprendizaje-servicio que vinculan contenidos académicos con problemas comunitarios. La evaluación adopta portafolios y rúbricas de desempeño socioemocional, reconociendo progresos en empatía, autoconfianza y colaboración. Este giro relacional no resta rigor intelectual; por el contrario, estudios longitudinales muestran que la motivación intrínseca y el sentido de pertenencia predicen mejor el éxito académico a largo plazo que el CI o las calificaciones estandarizadas. En síntesis, una escuela centrada en el individuo integra la cabeza y el corazón, preparando a los aprendices para una sociedad compleja que demanda conocimientos sólidos y competencias emocionales para la vida. :contentReference[oaicite:3]{index=3}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Prácticas clave de personalización",
              open: false,
              text: "Tutoría socioemocional • Portafolios integrados • Contratos de aula • Aprendizaje-servicio",
            },
          ],
          subthemes: [],
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
          href: "https://youtu.be/vKmrP0B08xM", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            // Video complementario
            "“IEIE-Sem5” https://youtu.be/vKmrP0B08xM", // :contentReference[oaicite:0]{index=0}

            // Lecturas de apoyo
            "“La educación emocional, su importancia en el proceso de aprendizaje” https://www.redalyc.org/pdf/440/44023984007.pdf", // :contentReference[oaicite:1]{index=1}
            "“La inteligencia emocional en el contexto educativo: hallazgos científicos de sus efectos en el aula” https://www.educacionyfp.gob.es/dam/jcr:6b5bc679-e550-47d9-804e-e86b8f4b4603/re3320611443-pdf.pdf", // :contentReference[oaicite:2]{index=2}
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
            "Aichhorn, A. (2006). *Juventud desamparada.* Barcelona: Gedisa.", // :contentReference[oaicite:0]{index=0}
            "Bar-On, R. (2006). *The Bar-On model of emotional-social intelligence (ESI).* *Psicothema, 18*(1), 13-18.", // :contentReference[oaicite:1]{index=1}
            "Bisquerra Alzina, R. (2009). *Psicopedagogía de las emociones.* Madrid: Síntesis.", // :contentReference[oaicite:2]{index=2}
            "Bisquerra, R. (2006). *Educación emocional y bienestar.* Madrid: Wolters Kluwer.", // :contentReference[oaicite:3]{index=3}
            "Bisquerra, R. (2011). *Educación emocional: Propuestas para educadores y familias.* Bilbao: Desclée de Brower.", // :contentReference[oaicite:4]{index=4}
            "Bisquerra, R. (2012). *¿Cómo educar las emociones? La inteligencia emocional en la infancia y la adolescencia.* Barcelona: FAROS Hospital Sant Joan de Déu.", // :contentReference[oaicite:5]{index=5}
            "Goleman, D. (1995). *Emotional Intelligence.* New York: Bantam Books.", // :contentReference[oaicite:6]{index=6}
            "Mayer, J. D. & Salovey, P. (1997). What is emotional intelligence? En P. Salovey & D. Sluyter (Eds.), *Emotional development and emotional intelligence: Implications for educators* (pp. 3-31). New York: Basic Books.", // :contentReference[oaicite:7]{index=7}
            "Trujillo Flores, M. M. & Rivas Tovar, L. A. (2005). Orígenes, evolución y modelos de inteligencia emocional. *Innovar, 15*(25), 9-24.*", // :contentReference[oaicite:8]{index=8}
            "Vallés, A. & Vallés, C. (2000). *Inteligencia emocional: Aplicaciones educativas.* Madrid: EOS.", // :contentReference[oaicite:9]{index=9}
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
