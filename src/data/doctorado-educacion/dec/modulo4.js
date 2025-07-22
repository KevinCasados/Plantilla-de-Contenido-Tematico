/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId : "doctorado-educacion",          // Programa académico
courseId  : "dec-309",                      // Diseño y Evaluación Curricular
id        : "modulo4",

/* ── Datos visibles ─────────────────────────── */
courseName: "Diseño y Evaluación Curricular",
title     : "Módulo 4. Características del diseño curricular",
semestre  : "Tercer Semestre",
teacher   : "Dr. Jesús Agustín Zapata Velázquez",

/* ── Objetivo y competencias ────────────────── */
objective:
  "Analizar la evolución histórica del concepto de currículo y los fundamentos conceptuales "
+ "de las principales teorías curriculares, así como las diferentes modalidades de currículo "
+ "y sus implicaciones teórico‑metodológicas, con el fin de proporcionar a los Doctorantes "
+ "una comprensión integral que les permita identificar los principios y enfoques que influyen "
+ "en el diseño curricular contemporáneo y aplicarlos en diversos contextos educativos.",   // :contentReference[oaicite:0]{index=0}

competencies: [
  "Analizar la evolución histórica del concepto de currículo, identificando los cambios y continuidades en su desarrollo en relación con diversos contextos sociales, políticos y educativos.",  // :contentReference[oaicite:1]{index=1}
  "Evaluar críticamente los fundamentos conceptuales de las principales teorías curriculares, comprendiendo sus aportaciones y limitaciones en la configuración del currículo.",                // :contentReference[oaicite:2]{index=2}
  "Distinguir entre las diferentes modalidades del currículo (formal, informal, oculto, etc.) y analizar sus implicaciones teórico‑metodológicas en el diseño y la práctica educativa.",       // :contentReference[oaicite:3]{index=3}
  "Aplicar los principios y enfoques teóricos del diseño curricular en la reflexión sobre casos concretos, considerando las necesidades específicas de diversos contextos educativos.",        // :contentReference[oaicite:4]{index=4}
],

/* ── Contenido temático (jerarquía recursiva) ─────────── */
themes: [
  /* 0. Página Info (opcional) */
  {
    id: "4.info",
    numbering: "Info",
    title: "Información general del módulo",
    isUnitInfo: true,
    content: [],
  },

  /* 1. Unidad principal */
  {
    id: "4",
    numbering: "Unidad 4",
    title: "Características del diseño curricular",
    content: [
  /* Párrafo 1 */
  {
    type: "paragraph",
    text:
      "A lo largo de la historia, el currículo ha sido mucho más que una lista de asignaturas: es el reflejo de los valores, las prioridades y las aspiraciones de cada sociedad. Comprender su evolución resulta indispensable para cualquier educador que pretenda diseñar proyectos pertinentes y transformadores. En esta unidad analizaremos cómo el concepto de currículo ha pasado de centrarse en la transmisión de saberes básicos —propia de los modelos clásicos— a promover la formación integral y la ciudadanía global. Reconoceremos los hitos que marcaron esta trayectoria, desde los trivium y quadrivium medievales hasta la irrupción de enfoques basados en competencias. De esta forma, estableceremos el marco histórico que sustenta las decisiones curriculares contemporáneas."
  },

  /* Párrafo 2 */
  {
    type: "paragraph",
    text:
      "Nuestro recorrido se iniciará con una reseña histórica que evidenciará la influencia de los contextos sociales, políticos y económicos en la configuración del currículo. Veremos cómo los movimientos humanistas del Renacimiento ampliaron el repertorio de saberes e impulsaron una visión más laica del conocimiento; cómo la Ilustración introdujo la racionalidad y la sistematicidad; y cómo la Revolución Industrial exigió un currículo orientado a la utilidad y la preparación para el trabajo. Esta mirada diacrónica nos permitirá comprender que el currículo no surge de la nada: obedece a necesidades concretas y busca dar respuesta a los retos de cada época."
  },

  /* Párrafo 3 */
  {
    type: "paragraph",
    text:
      "En segundo término, profundizaremos en los fundamentos conceptuales de las teorías curriculares. Revisaremos las propuestas tecnocráticas centradas en la planificación por objetivos —representadas por Ralph Tyler— y contrastaremos sus límites con las teorías críticas de Paulo Freire y Henry Giroux, que conciben el currículo como un espacio de emancipación social. También abordaremos las teorías constructivistas y reflexivas que ponen el acento en la construcción activa del conocimiento y la mejora continua de la práctica docente. Este mosaico teórico nos proporcionará criterios para valorar la pertinencia y las implicaciones de cada enfoque."
  },

  /* Párrafo 4 */
  {
    type: "paragraph",
    text:
      "Posteriormente, examinaremos las distintas modalidades curriculares —formal, informal y oculto— para reconocer que la experiencia educativa trasciende los documentos oficiales. Analizaremos cómo el currículo formal estandariza contenidos y métodos; cómo el informal amplía oportunidades de aprendizaje a través de actividades extracurriculares; y cómo el currículo oculto transmite normas y valores implícitos que pueden reforzar o contradecir los objetivos declarados. Reflexionar sobre estas interacciones permitirá diseñar propuestas más coherentes, inclusivas y sensibles a las dinámicas escolares reales."
  },

  /* Párrafo 5 */
  {
    type: "paragraph",
    text:
      "Cerraremos la introducción destacando las características que definen a los diseños curriculares contemporáneos: flexibilidad, relevancia, interdisciplinariedad, enfoque por competencias y apertura a la innovación tecnológica. También discutiremos la importancia de la educación inclusiva, la sostenibilidad y la ciudadanía global como ejes transversales que desafían a los proyectos curriculares a reinventarse constantemente. Con esta base, la Unidad 4 dotará a los doctorantes de herramientas conceptuales para diagnosticar, diseñar y evaluar currículos que respondan a los desafíos educativos del siglo XXI."
  },

  /* Acordeón de síntesis */
  {
    type  : "accordion",
    header: "Mapa conceptual de la unidad",
    open  : false,
    text  :
      "* **Nivel 1 — Evolución histórica**  \n" +
      "  * De los trivium/quadrivium al currículo por competencias.  \n\n" +
      "* **Nivel 2 — Teorías curriculares**  \n" +
      "  * Tecnocráticas, críticas, constructivistas y reflexivas.  \n\n" +
      "* **Nivel 3 — Modalidades y características actuales**  \n" +
      "  * Currículo formal, informal y oculto; flexibilidad, relevancia y enfoque inclusivo."
  }
],

    /* → Subtemas de primer nivel */
    subthemes: [
      {
        id: "4.1",
        numbering: "4.1",
        title: "Reseña histórica del currículum",
        content: [
  /* Párrafo 1 — Orígenes clásicos (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "La palabra currículum proviene del latín «currere», que aludía a la carrera que debía recorrer el aprendiz para formarse como ciudadano pleno. En las civilizaciones griega y romana esa ruta se concretó en el trivium —gramática, retórica y lógica— y el quadrivium —aritmética, geometría, música y astronomía—, considerados saberes esenciales para participar en la vida pública. El centro era la transmisión de conocimientos canónicos y la formación moral. Con la caída del Imperio romano y el auge de la Edad Media, la enseñanza quedó bajo la tutela eclesiástica: monasterios y catedrales conservaron el trivium – quadrivium, pero ahora como camino hacia la comprensión de lo divino. Este predominio religioso configuró un currículum rígido, basado en la memorización de textos sagrados y el latín como lingua franca del saber. Aun así, se sentaron las bases de la sistematización curricular: listas de contenidos jerarquizados y etapas secuenciales de aprendizaje."
  },

  /* Párrafo 2 — Renacimiento e Ilustración (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "El Renacimiento introdujo un giro humanista: al redescubrir las lenguas clásicas, la historia y las ciencias naturales, amplió el horizonte del currículum más allá de lo teológico. Aparecen las primeras gramáticas impresas, se fundan universidades laicas y los contenidos se diversifican. La Ilustración profundizó este cambio: la razón se erigió en criterio de verdad y el saber se organizó bajo la lógica de la enciclopedia. Filósofos como Locke y Rousseau defendieron una educación útil al progreso social, lo que condujo a currículos que valoraban la experimentación científica, la matemática aplicada y las lenguas modernas. Se pasa del «currículum de erudición» al «currículum de utilidad», preludio de la escolarización masiva que acompañaría a la Revolución Industrial."
  },

  /* Párrafo 3 — Revolución Industrial y tecnocracia curricular (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "El siglo XIX trajo la fábrica y con ella la necesidad de mano de obra alfabetizada y disciplinada. Los Estados nación implantaron sistemas escolares públicos y estandarizados: se fijaron planes de estudio obligatorios, calendarios y manuales de texto uniformes. En el siglo XX, Ralph Tyler formalizó esta lógica tecnocrática con su modelo de cuatro preguntas, centrado en objetivos medibles, selección secuencial de contenidos y evaluación de resultados. El currículum se convirtió en instrumento de eficiencia, alineado con la racionalidad científica y la rendición de cuentas. Sin embargo, dicha orientación reduccionista fue criticada por limitarse a logros cuantificables y descuidar el desarrollo integral y crítico del estudiante."
  },

  /* Párrafo 4 — Perspectivas críticas y constructivistas (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "A partir de la segunda mitad del siglo XX emergieron teorías que cuestionaron el carácter neutral del currículum. Paulo Freire y Henry Giroux lo interpretaron como un espacio de disputa ideológica: debía servir para la emancipación y la justicia social, no para la reproducción de inequidades. Paralelamente, el constructivismo de Piaget y Vygotsky desplazó el foco del contenido al aprendizaje activo: el estudiante construye significado a partir de experiencias. Estos enfoques introdujeron la reflexión, la colaboración y el diálogo como ejes curriculares, dando lugar a diseños flexibles, centrados en proyectos y problemas reales."
  },

  /* Párrafo 5 — Tendencias del siglo XXI (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "En la actualidad, la globalización, la revolución digital y los retos planetarios impulsan un currículum basado en competencias transversales: pensamiento crítico, creatividad, ciudadanía global y sostenibilidad. La personalización del aprendizaje, la interdisciplinariedad y la integración de tecnologías emergentes —realidad aumentada, analíticas de datos, inteligencia artificial— redefinen la experiencia escolar. Los documentos curriculares incorporan enfoques inclusivos y decoloniales que reconocen la diversidad cultural y lingüística. Así, el currículum se entiende como un proceso dinámico, susceptible de ser co‑creado por docentes y estudiantes, capaz de adaptarse a contextos cambiantes y de promover la formación integral para la vida en sociedades complejas."
  },

  /* Acordeón 1 — Línea de tiempo esencial */
  {
    type  : "accordion",
    header: "Hitos históricos del currículum",
    open  : false,
    text  :
      "* **Antigüedad clásica** – Trivium y quadrivium.  \n" +
      "* **Edad Media** – Currículum teológico‑monástico.  \n" +
      "* **Renacimiento** – Humanismo y saber secular.  \n" +
      "* **Ilustración** – Enciclopedismo y utilidad social.  \n" +
      "* **Revolución Industrial** – Estandarización escolar.  \n" +
      "* **Siglo XX** – Modelo tecnocrático de Tyler.  \n" +
      "* **Siglo XXI** – Competencias, flexibilidad e inclusión."
  },

  /* Acordeón 2 — Corrientes y autores clave */
  {
    type  : "accordion",
    header: "Principales corrientes y pensadores",
    open  : false,
    text  :
      "* **Tecnocrática** – Ralph Tyler, H. Taba.  \n" +
      "* **Crítica / emancipadora** – Paulo Freire, Henry Giroux.  \n" +
      "* **Constructivista** – Jean Piaget, Lev Vygotsky.  \n" +
      "* **Reflexiva** – Donald Schön, Philippe Perrenoud.  \n" +
      "* **Competencial** – David Spencer, UNESCO (2015)."
  },

  /* Video ilustrativo */
  {
    type   : "video",
    title  : "Evolución del currículum: de la antigüedad al siglo XXI",
    src    : "https://www.youtube.com/watch?v=MDPDY_nN9DU",
    caption: "Documental breve que resume los hitos históricos y corrientes curriculares."
  }
],
      },
      {
        id: "4.2",
        numbering: "4.2",
        title: "Fundamentos conceptuales de las teorías curriculares",
        content: [
  /* Párrafo 1 — Panorama general de las teorías curriculares (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Las teorías curriculares constituyen el armazón filosófico y pedagógico que orienta qué, cómo y por qué enseñar. Surgieron como respuesta a contextos sociohistóricos concretos y condensan distintas concepciones de conocimiento, aprendizaje y sociedad. Las primeras corrientes, de corte tecnocrático y conductista, concibieron el currículo como un plan detallado que debía traducirse en objetivos conductuales observables. Ralph Tyler sintetizó esta perspectiva con su modelo de cuatro preguntas, poniendo énfasis en la planificación racional y la evaluación de resultados. A mediados del siglo XX, las teorías críticas comenzaron a impugnar la supuesta neutralidad del currículo, argumentando que reproduce relaciones de poder y desigualdad. Autores como Paulo Freire y Henry Giroux propusieron un currículo emancipador, que fomente la reflexión y la acción transformadora. Paralelamente, el constructivismo —inspirado en Piaget y Vygotsky— desplazó la atención al proceso de construcción activa del conocimiento, subrayando la importancia del contexto sociocultural y la interacción. En la actualidad, los enfoques por competencias integran saberes, habilidades y actitudes, aspirando a formar ciudadanos capaces de responder a los desafíos de un mundo cambiante. Comprender estos fundamentos conceptuales es esencial para diseñar proyectos curriculares que sean pertinentes, inclusivos y flexibles."
  },

  /* Imagen 1 — Mapa de corrientes curriculares */
  {
    type   : "image",
    src    : "https://thumbnails.genially.com/632e9422c8d29500185f6165/screenshots/ca74b261-ae45-40a3-b4d5-b113e7c15f9b.jpg",
    alt    : "Mapa mental de corrientes y autores clave",
    caption: "Figura 1. Principales teorías curriculares y sus representantes."
  },

  /* Párrafo 2 — Teoría tecnocrática y enfoque de objetivos (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "El paradigma tecnocrático concibe el diseño curricular como un proceso de ingeniería educativa. Parte de la premisa de que la realidad puede descomponerse en conductas observables y susceptibles de ser entrenadas. Ralph Tyler propuso definir objetivos precisos, seleccionar experiencias de aprendizaje alineadas, organizarlas de forma lógica y evaluar su logro mediante pruebas estandarizadas. Hilda Taba refinó este enfoque introduciendo la formulación inductiva de unidades y la participación docente en la selección de contenidos. Si bien este modelo aporta claridad y coherencia, tiende a reducir la complejidad del aprendizaje a resultados medibles, dejando en segundo plano dimensiones afectivas y socioculturales. La crítica contemporánea señala que la estandarización excesiva puede limitar la creatividad docente y la pertinencia contextual. No obstante, los principios de planificación racional y evaluación de evidencias siguen influyendo en políticas públicas y marcos de rendición de cuentas."
  },

  /* Acordeón 1 — Características de la teoría tecnocrática */
  {
    type  : "accordion",
    header: "Teoría tecnocrática (objetivos conductuales)",
    open  : false,
    text  :
      "* Planificación lineal y jerárquica.  \n" +
      "* Objetivos específicos y medibles.  \n" +
      "* Enfoque en la eficiencia y la estandarización.  \n" +
      "* Evaluación cuantitativa de resultados."
  },

  /* Párrafo 3 — Teoría crítica y currículo como praxis emancipadora (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "La teoría crítica reivindica el currículo como campo de disputa ideológica. Para Paulo Freire, la educación bancaria —que deposita contenidos en la mente del estudiante— reproduce la opresión; en contraste, la pedagogía problematizadora fomenta la conciencia crítica y la acción colectiva. Henry Giroux amplió esta perspectiva, señalando que toda selección de contenidos implica posicionamientos ético‑políticos. El currículo crítico promueve la inclusión de voces marginadas, la reflexión sobre la justicia social y la transformación de la realidad. Sus dispositivos pedagógicos privilegian el diálogo horizontal, la investigación‑acción y los proyectos comunitarios. Este enfoque desafía la neutralidad del conocimiento y exige al docente asumir un rol de intelectual transformador. Entre sus retos se cuentan la resistencia institucional y la necesidad de articular demandas sociales con los requisitos formales del sistema educativo."
  },

  /* Imagen 2 — Pirámide de enfoques curriculares */
  {
    type   : "image",
    src    : "https://imgv2-2-f.scribdassets.com/img/document/587823704/original/bbd05683a4/1?v=1",
    alt    : "Comparativa entre enfoques tecnocrático, constructivista y crítico",
    caption: "Figura 2. Contraste de finalidades y metodologías en tres enfoques."
  },

  /* Párrafo 4 — Constructivismo y currículo centrado en el estudiante (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "El constructivismo parte de la idea de que el conocimiento se construye activamente a partir de la interacción entre la nueva información y los esquemas previos del aprendiz. Jean Piaget aportó la noción de etapas cognitivas, mientras que Lev Vygotsky introdujo la zona de desarrollo próximo y la mediación sociocultural. Un currículo constructivista diseña experiencias significativas, contextualizadas y colaborativas. Favorece metodologías como el aprendizaje basado en proyectos, la resolución de problemas y las comunidades de práctica. Evalúa procesos de pensamiento más que la simple reproducción de contenidos. Al reconocer la diversidad de ritmos y estilos de aprendizaje, demanda flexibilidad y adaptaciones constantes. Sus críticos advierten el riesgo de dispersión si no se establecen anclas conceptuales claras; sin embargo, su potencial para desarrollar habilidades de investigación y autonomía es ampliamente reconocido."
  },

  /* Acordeón 2 — Comparativa entre enfoques críticos y constructivistas */
  {
    type  : "accordion",
    header: "Crítico vs. Constructivista: puntos de convergencia",
    open  : false,
    text  :
      "* **Aprendizaje activo** – Estudiante como protagonista.  \n" +
      "* **Contextualización** – Conocimiento vinculado a la realidad.  \n" +
      "* **Reflexión** – Pensamiento crítico sobre contenidos y procesos.  \n" +
      "* **Transformación** – Cambio personal (constructivista) y social (crítico)."
  },

  /* Video ilustrativo */
  {
    type   : "video",
    title  : "Principales teorías curriculares y su impacto en el aula",
    src    : "https://www.youtube.com/watch?v=RjLAULtHDfI",
    caption: "Resumen animado de los enfoques tecnocrático, crítico y constructivista."
  }
],
      },
      {
        id: "4.3",
        numbering: "4.3",
        title: "Modalidades del currículum e implicaciones teórico‑metodológicas",
        content: [
  /* Párrafo 1 — Panorama de las modalidades curriculares (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Hablar de modalidades curriculares implica reconocer que la experiencia educativa excede el plan de estudios oficial. El currículo se manifiesta de manera plural: el formal recoge los objetivos, contenidos y criterios de evaluación aprobados por la autoridad; el informal engloba las vivencias no planificadas que ocurren en clubes, proyectos comunitarios y entornos digitales; y el currículo oculto transmite normas, actitudes y jerarquías implícitas a través de la cultura escolar. Cada modalidad responde a distintos fines y revela concepciones divergentes sobre el conocimiento, la enseñanza y la sociedad. Comprender cómo interactúan permite diseñar propuestas coherentes, inclusivas y contextualizadas, capaces de articular lo prescrito con lo vivido y lo deseado."
  },

  /* Imagen 1 — Diagrama de las modalidades */
  {
    type   : "image",
    src    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcli7nfo8gf5qCfZSOSeo9FYoXdQ2ziI0JQ&s",
    alt    : "Diagrama interrelacionado de currículo formal, informal y oculto",
    caption: "Figura 1. Convergencia de las tres modalidades curriculares."
  },

  /* Párrafo 2 — Currículo formal y sus implicaciones teórico‑metodológicas (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "El currículo formal es la columna vertebral del sistema educativo: fija estándares mínimos y garantiza la equidad de acceso al conocimiento básico. Su fundamento teórico suele apoyarse en modelos tecnocráticos o por competencias, lo que se traduce en objetivos claros, secuenciación lógica de contenidos y evaluación estandarizada. Metodológicamente favorece la planificación detallada y la selección rigurosa de recursos. Sin embargo, su carácter prescriptivo puede limitar la creatividad docente y la pertinencia para contextos locales. Por ello, los diseños contemporáneos incorporan márgenes de flexibilidad —adaptaciones curriculares, integración de proyectos y aprendizajes basados en la resolución de problemas— para equilibrar uniformidad y contextualización."
  },

  /* Acordeón 1 — Tipos de currículo según el PDF */
  {
    type  : "accordion",
    header: "Modalidades descritas en el módulo",
    open  : false,
    text  :
      "* **Currículo formal** – Plan oficial con objetivos, contenidos y evaluación estandarizada.  \n" +
      "* **Currículo informal** – Aprendizajes no planificados en clubes, talleres, comunidad.  \n" +
      "* **Currículo oculto** – Normas y valores implícitos transmitidos por la cultura escolar.  \n" +
      "* **Centrado en contenidos** – Enfoque disciplinar tradicional.  \n" +
      "* **Centrado en el estudiante** – Aprendizaje activo y personalizado.  \n" +
      "* **Basado en competencias** – Desarrollo integral y aplicabilidad práctica."
  },

  /* Párrafo 3 — Currículo informal y oculto: valor pedagógico y riesgos (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "El currículo informal, lejos de ser accesorio, complementa la formación integral: proyectos extracurriculares, emprendimientos escolares y el uso creativo de entornos digitales refuerzan la motivación, la autonomía y la responsabilidad social. Sus fundamentos se nutren del aprendizaje experiencial y la teoría socio‑cultural, promoviendo metodologías activas y colaborativas. En contraste, el currículo oculto opera de manera subterránea: reproduce roles de género, expectativas de éxito y jerarquías implícitas. Si los educadores no lo analizan críticamente, puede perpetuar desigualdades. Las implicaciones metodológicas incluyen la necesidad de generar espacios de reflexión ética, co‑construcción de normas y evaluación de clima institucional, para alinear valores declarados con prácticas cotidianas."
  },

  /* Imagen 2 — Comparativa de enfoques */
  {
    type   : "image",
    src    : "https://blog.pearsonlatam.com/hs-fs/hubfs/Blog%20HED/Multimedia/Im%C3%A1genes%20de%20Blog/objetivos.png?width=800&name=objetivos.png",
    alt    : "Tabla comparativa de modalidades curriculares y métodos de enseñanza",
    caption: "Figura 2. Diferencias clave en objetivos, estrategias y evaluación."
  },

  /* Párrafo 4 — Modalidades centradas en competencias y estudiante (≈ 300 palabras) */
  {
    type: "paragraph",
    text:
      "Las modalidades centradas en el estudiante y en el desarrollo de competencias responden al desafío de preparar ciudadanos para contextos inciertos. Su sustento teórico combina constructivismo, aprendizaje situado y teorías del desarrollo humano. Metodológicamente incorporan proyectos interdisciplinarios, resolución de problemas auténticos y evaluación mediante rúbricas y portafolios. Requieren docentes mediadores capaces de personalizar itinerarios formativos y de integrar tecnologías digitales. Una implicación crítica es la necesidad de redefinir la organización escolar: horarios flexibles, agrupamientos heterogéneos y espacios híbridos entre aula y comunidad. Además, exigen sistemas de evaluación que valoren tanto procesos como productos, fomentando la metacognición y la transferencia de aprendizajes."
  },

  /* Acordeón 2 — Implicaciones teórico‑metodológicas */
  {
    type  : "accordion",
    header: "Implicaciones metodológicas por modalidad",
    open  : false,
    text  :
      "* **Formal** – Planificación lineal, evaluación estandarizada.  \n" +
      "* **Informal** – Aprendizaje experiencial, motivación intrínseca.  \n" +
      "* **Oculto** – Gestión de clima y equidad implícita.  \n" +
      "* **Centrado en contenidos** – Exposición magistral, pruebas objetivas.  \n" +
      "* **Centrado en estudiante** – Proyectos, tutoría personalizada.  \n" +
      "* **Por competencias** – Desempeños auténticos, rúbricas analíticas."
  }
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
          href: "https://www.youtube.com/watch?v=RjLAULtHDfI ", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Fundamentos del Currículo: https://www.youtube.com/watch?v=LW_7Gz6eOHg",
            //  Añade aquí las referencias reales extraídas del PDF
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
            "Coll, C. & Solé, I. (2020). *Currículum y evaluación en la educación obligatoria: Desafíos y perspectivas.* Barcelona, España: Editorial Graó.",
            "Perrenoud, P. (2019). *La evaluación de los alumnos: De la producción de la excelencia a la regulación de los aprendizajes.* Madrid, España: Editorial Morata.",
            "De Alba Ceballos, A. (2018). *Teoría curricular: Nuevas tendencias y perspectivas.* Ciudad de México: Siglo XXI Editores.",
            "Díaz Barriga, A. (2018). *Metodología de diseño curricular: Un enfoque centrado en competencias.* Ciudad de México, México: Editorial Trillas.",
            "Gimeno Sacristán, J. (2017). *El currículum: Una reflexión sobre la práctica.* Madrid, España: Ediciones Morata.",
            "Zabalza, M. Á. (2019). *Diseño y desarrollo curricular: Cómo planificar e implementar el currículo en la educación superior.* Madrid, España: Narcea Ediciones."
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
