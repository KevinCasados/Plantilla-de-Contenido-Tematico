/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LAE", // Licenciatura en Administración de Empresas
  courseId: "LAE-105", // Sugerido: clave interna del curso
  id: "LAE-105.modulo1", // Sugerido: <courseId>.modulo1

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Introducción al estudio del Derecho",
  title: "Módulo 1. Ser humano, sociedad y cultura; el derecho y la norma",
  semestre: "1º",
  teacher: "Mtra. Rosalia del Carmen Arostegui Silva",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar los conceptos fundamentales del ser humano, la sociedad, la cultura y la ciencia, así como los principios y clasificación del derecho y las normas, con el fin de comprender su importancia en la regulación de la conducta humana y en la organización del Estado y la convivencia social.",
  competencies: [
    "Identificar y explicar los elementos esenciales del ser humano, la sociedad y la cultura, y su relación con la creación de normas jurídicas.",
    "Reconocer y clasificar los distintos tipos de normas y leyes, evaluando su función, ámbito de validez y relevancia en la vida cotidiana y profesional.",
    "Aplicar los conceptos de derecho, normas y leyes para interpretar situaciones jurídicas básicas, desarrollando análisis crítico y toma de decisiones informadas.",
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

    /* ── Unidad 1 ───────────────────────────────────────── */
    {
      id: "1",
      numbering: "1",
      title: "SER HUMANO, SOCIEDAD Y CULTURA",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad introduce la relación indisoluble entre el ser humano, la sociedad y la cultura como base de toda organización colectiva y, por extensión, del Derecho. Partimos de una constatación fundamental: la persona no vive aislada, sino que se desarrolla en interacción constante con otros, aprendiendo normas, valores y prácticas que orientan su conducta. Estas pautas de convivencia se traducen en reglas de diversa naturaleza (morales, religiosas, sociales y jurídicas) que buscan armonizar intereses y evitar conflictos. En este marco, el Derecho emerge como un conjunto de normas formales, creadas por autoridad competente, que regulan comportamientos con pretensión de justicia y paz social. Comprender cómo la cultura nutre los contenidos del Derecho y cómo la sociedad les da sentido y eficacia permite interpretar de manera crítica las instituciones jurídicas. Así, el estudio integrador de lo humano, lo social y lo cultural no es un adorno teórico, sino una condición para leer con lucidez los problemas públicos y privados, situarlos históricamente y proponer soluciones compatibles con la dignidad de las personas y el interés general.",
        },

        {
          type: "paragraph",
          text: "El ser humano se distingue por su racionalidad, lenguaje y capacidad de deliberar sobre fines y medios, elementos que le permiten construir proyectos de vida y asumir responsabilidades. La biología explica nuestra constitución y límites; la psicología aporta claves sobre cognición y emoción; la filosofía interroga el sentido, la libertad y la moralidad. Estas miradas convergen en una idea práctica: toda decisión personal tiene impactos sociales y jurídicos, porque afecta expectativas, recursos y derechos de otros. Un ejemplo ilustrativo es el proceso educativo: estudiar implica planificar, esforzarse y colaborar, y al mismo tiempo vincularse con instituciones y normas (reglamentos escolares, criterios de evaluación, certificaciones). Reconocer esta trama de relaciones ayuda a entender por qué la autonomía personal requiere marcos de convivencia: la libertad no es mero arbitrio, sino ejercicio responsable en contextos normados. De ahí que la reflexión sobre el “ser humano” inaugure la unidad: nos sitúa frente al sujeto de derechos y deberes cuya conducta busca orientarse mediante reglas que, idealmente, reflejen valores compartidos.",
        },

        {
          type: "paragraph",
          text: "La sociedad puede definirse como el entramado de relaciones entre personas y grupos que comparten un territorio, instituciones y códigos de conducta. Es dinámica: cambia con innovaciones tecnológicas, transformaciones económicas y nuevas sensibilidades culturales. Distintos tipos de sociedades (tradicionales, modernas, virtuales) conviven hoy y moldean expectativas de rol, jerarquías y mecanismos de coordinación. En una empresa, por ejemplo, operan normas internas, incentivos y procedimientos que, junto con la legislación aplicable, organizan la cooperación para alcanzar objetivos productivos. En un barrio, usos y costumbres establecen reglas informales sobre cortesía, seguridad y apoyo mutuo. Comprender la lógica de lo social implica ver cómo emergen las instituciones, cómo se legitiman las autoridades y cómo las reglas facilitan la acción colectiva. Esta perspectiva permite analizar conflictos (de recursos, de valores, de poder) y evaluar la pertinencia de respuestas normativas, distinguiendo entre lo deseable, lo posible y lo jurídicamente exigible.",
        },

        {
          type: "paragraph",
          text: "La cultura reúne valores, creencias, símbolos, conocimientos, artes, costumbres y modos de vida que dan identidad a un grupo. Su influencia en el Derecho es directa: aquello que una comunidad aprecia o rechaza se traduce en prioridades normativas, tipos de sanción y formas de protección de bienes jurídicos. Sociedades que privilegian la autonomía individual tienden a enfatizar la propiedad, la libertad contractual y la responsabilidad personal; culturas más comunitarias resaltan la solidaridad, la reciprocidad y la función social de los derechos. El diálogo entre cultura y Derecho no es unidireccional: las normas también educan, corrigen prácticas y proponen horizontes de convivencia. Por eso, al estudiar instituciones jurídicas conviene reconocer su trasfondo cultural y su evolución histórica. Solo así podemos evitar anacronismos, leer correctamente el sentido de las reglas y proponer reformas que no rompan el tejido social, sino que lo fortalezcan con criterios de justicia, equidad y eficacia.",
        },

        {
          type: "paragraph",
          text: "Finalmente, el enfoque científico aporta método y rigor. La ciencia —formal, fáctica y aplicada— organiza conocimientos verificables para explicar fenómenos y resolver problemas. La ciencia jurídica, en particular, estudia el Derecho: su origen, estructura, interpretación y efectos sociales. Analiza cómo se crean las normas, cómo se integran en sistemas coherentes y cómo deben aplicarse a casos concretos. Al articular ser humano, sociedad y cultura con el método científico, la unidad sienta bases para comprender por qué existen distintos tipos de normas (morales, religiosas, sociales y jurídicas), cómo se clasifican los ámbitos de validez (espacial, temporal, material y personal) y qué criterios orientan la clasificación de ramas jurídicas (público, privado y social). Este andamiaje conceptual permitirá, en las secciones siguientes, evaluar la justificación de las reglas, su legitimidad cultural y su efectividad práctica, con miras a decisiones informadas en contextos académicos, profesionales y ciudadanos.",
        },

        {
          type: "accordion",
          header: "Nivel 1 — Ideas fuerza de la unidad",
          open: false,
          text: "La persona es un ser social y cultural; las normas expresan valores y coordinan conductas; el Derecho institucionaliza esas normas con pretensión de justicia y paz. La cultura inspira contenidos jurídicos y el método científico aporta criterios para su análisis y mejora. Comprender estas relaciones evita simplificaciones y orienta decisiones responsables.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Conexiones prácticas (Administración de Empresas)",
          open: false,
          text: "Toda organización opera con reglas formales (leyes, contratos, reglamentos) e informales (usos y costumbres). Reconocer su origen cultural y su función social mejora el cumplimiento, la gestión de riesgos y la resolución de conflictos, desde políticas internas hasta relaciones laborales y con consumidores.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ruta de estudio sugerida",
          open: false,
          text: "1) Leer los conceptos básicos de ser humano, sociedad y cultura; 2) identificar ejemplos cercanos (empresa, barrio, aula); 3) contrastar con el papel del Derecho en esos escenarios; 4) relacionar con tipos de normas y ámbitos de validez; 5) preparar preguntas para discusión sobre tensiones entre valores culturales y exigencias jurídicas.",
        },
      ],
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "Ser humano",
          content: [
            {
              type: "paragraph",
              text: "El ser humano es, ante todo, un ser social por naturaleza que desarrolla su vida en constante interacción con otras personas y con un entorno cultural que le proporciona significados, normas y expectativas. Desde el nacimiento, la interdependencia se manifiesta en el aprendizaje del lenguaje, la interiorización de pautas de conducta y la adquisición de habilidades cognitivas y emocionales que hacen posible la cooperación. Esta dimensión relacional no elimina la singularidad: cada persona posee conciencia, capacidad de deliberación y una orientación axiológica que le permite distinguir y escoger cursos de acción. Por ello, el estudio del ser humano requiere entender cómo se entrelazan la biología (que aporta condiciones y límites), la psicología (que explica procesos mentales y afectivos) y la filosofía (que indaga por la libertad, la moral y el sentido), para comprender por qué nuestras decisiones son simultáneamente personales y sociales, y cómo esa doble naturaleza funda la necesidad de normas y, en última instancia, del Derecho.",
            },
            {
              type: "paragraph",
              text: "Biológicamente, el ser humano es un organismo con una dotación genética que condiciona su desarrollo, pero que no lo determina en solitario: el medio socio-cultural moldea capacidades y orienta elecciones. La plasticidad cerebral y la apertura al aprendizaje hacen posible la transmisión de conocimientos entre generaciones, fenómeno que, con la educación formal e informal, configura hábitos, destrezas y valores. Por su parte, la psicología describe procesos de percepción, memoria, atención y emoción, y muestra cómo estos influyen en la toma de decisiones. En el plano moral, la deliberación práctica obliga a ponderar consecuencias, deberes y virtudes, y a reconocer la dignidad de los demás. Esta conjunción de factores explica por qué el desarrollo integral no puede concebirse en aislamiento: la persona florece en comunidad y, al mismo tiempo, la comunidad se perfecciona cuando reconoce y protege la autonomía responsable de cada individuo.",
            },
            {
              type: "paragraph",
              text: "La socialidad humana genera estructuras de cooperación —familia, escuela, empresa, comunidad— que articulan roles y reglas. Tales arreglos institucionales distribuyen tareas, establecen expectativas y resuelven conflictos. En un salón de clases, por ejemplo, las normas definen criterios de evaluación y convivencia; en una empresa, los reglamentos y contratos coordinan esfuerzos hacia fines productivos; en el vecindario, usos y costumbres orientan la cortesía y la seguridad mutua. Estas formas de organización emergen porque las necesidades humanas (materiales y simbólicas) exigen mecanismos estables de coordinación. Cuando las reglas son congruentes con valores compartidos, la cooperación se vuelve más eficiente y legítima. De ahí que el análisis del ser humano como sujeto de derechos y deberes no pueda separarse del estudio de los marcos normativos que ordenan la vida en común, anticipando, previniendo y sancionando conductas contrarias al bien colectivo.",
            },

            {
              type: "accordion",
              header: "Aporte integrador: de la persona a las instituciones",
              open: false,
              text: "La interacción entre biología, psicología y filosofía explica cómo la persona transforma sus capacidades en prácticas sociales estables. Las instituciones —familia, escuela, empresa— cristalizan aprendizajes y expectativas, y sirven de puente entre la autonomía individual y las exigencias de convivencia, preparando el terreno para la normatividad jurídica.",
            },

            {
              type: "paragraph",
              text: "El carácter racional y comunicativo del ser humano introduce un elemento decisivo: la posibilidad de justificar las propias acciones frente a otros. Justificar es ofrecer razones que los demás puedan comprender y, eventualmente, aceptar; esa práctica discursiva supone reglas de argumentación y estándares de corrección. En el ámbito moral, la justificación apela a principios y bienes humanos básicos; en el ámbito social, recurre a prácticas compartidas y a sus fines; en el ámbito jurídico, se encarna en procedimientos formales que garantizan imparcialidad y previsibilidad. Así, la racionalidad práctica no solo guía elecciones individuales, sino que impulsa la creación de sistemas normativos que pretenden estabilizar expectativas recíprocas, proteger bienes jurídicos y arbitrar desacuerdos por vías pacíficas.",
            },
            {
              type: "paragraph",
              text: "El aprendizaje normativo comienza con reglas simples —saludar, esperar turno, cuidar los bienes comunes— y progresa hacia normas más complejas —contratos, reglamentos, leyes—. En este tránsito, la persona internaliza criterios de corrección y desarrolla virtudes cívicas (respeto, responsabilidad, justicia) que posibilitan la confianza social. Cuando los hábitos personales y las reglas institucionales se refuerzan mutuamente, la cooperación florece; cuando divergen (por corrupción, arbitrariedad o indiferencia), surgen tensiones que afectan la paz social. Por eso, el estudio del ser humano exige examinar no solo su capacidad de elegir, sino también las condiciones que vuelven razonables y justas esas elecciones, y los mecanismos mediante los cuales una comunidad transforma convicciones morales difusas en normas jurídicas generales y coercibles.",
            },

            {
              type: "accordion",
              header: "Conexión con el Derecho: del hábito a la norma jurídica",
              open: false,
              text: "Las reglas de cortesía y los usos sociales ordenan la vida cotidiana, pero su eficacia depende del reconocimiento voluntario. Cuando los bienes en juego son colectivos y vulnerables (vida, integridad, propiedad, seguridad), la comunidad institucionaliza expectativas en normas jurídicas generales, dotadas de autoridad y sanción, para garantizar previsibilidad y equidad.",
            },

            {
              type: "paragraph",
              text: "Un ejemplo integrador ayuda a fijar ideas: quien cursa estudios universitarios planifica metas, organiza su tiempo y persevera; al mismo tiempo, se somete a reglamentos, criterios de evaluación y calendarios institucionales. El éxito académico no es solo resultado de esfuerzo individual, sino del entramado normativo y cultural que lo sostiene: políticas de admisión, planes de estudio, derechos y obligaciones estudiantiles. Este microcosmos refleja la tesis de la unidad: la persona singular despliega capacidades en contextos sociales y culturales que, a su vez, se regulan mediante normas de diverso rango. El Derecho, como sistema de normas jurídicas, se comprende mejor cuando se lo ve nacer de la vida social y cultural concreta: es una herramienta para organizar la convivencia, resolver disputas y promover la justicia, y encuentra su legitimidad en la medida en que protege a las personas y favorece su desarrollo integral.",
            },
          ],
        },
        // Fragmento para integrarse en themes[0].subthemes (Unidad 1)

        // ——— 1.1.2 Sociedad ————————————————————————————————
        {
          id: "1.1.2",
          numbering: "1.1.2",
          title: "Sociedad",
          content: [
            {
              type: "paragraph",
              text: "La sociedad puede comprenderse como el entramado estable de relaciones mediante el cual las personas coordinan acciones, comparten significados y producen bienes materiales y simbólicos. Este entramado no es meramente agregado de individuos, sino un sistema de posiciones, roles y expectativas que otorgan continuidad a la vida colectiva y hacen posible la cooperación a gran escala. Su estructura se manifiesta en instituciones —familia, escuela, empresa, Estado— que organizan funciones y asignan responsabilidades; en normas —formales e informales— que regulan el comportamiento; y en recursos —económicos, tecnológicos, culturales— que habilitan o restringen proyectos. Entender la sociedad implica estudiar su cambio: migraciones, innovación tecnológica, reconfiguraciones económicas y transformaciones culturales que modifican los patrones de interacción. En contextos contemporáneos, además, emergen esferas híbridas (redes digitales, plataformas) donde la pertenencia ya no depende de la proximidad geográfica, sino de intereses, afinidades y algoritmos. Esta complejidad exige herramientas analíticas rigurosas para distinguir causas y efectos, evitar reduccionismos y evaluar políticas públicas y reglas privadas con criterios de justicia, eficiencia y legitimidad.",
            },
            {
              type: "paragraph",
              text: "Una caracterización operativa distingue entre tres planos: a) el micro, donde interactúan personas y pequeños grupos; b) el meso, que recoge organizaciones y comunidades; y c) el macro, relativo a sistemas políticos, económicos y jurídicos. En el plano micro se fraguan hábitos, virtudes cívicas y confianza; en el meso se institucionalizan procedimientos (reglamentos, contratos, códigos de conducta) que estabilizan expectativas; y en el macro se diseñan arreglos constitucionales, políticas públicas y marcos regulatorios. La eficacia normativa depende del acoplamiento entre estos niveles: reglas que ignoran prácticas locales suelen fracasar; usos informales que contradicen la ley erosionan su autoridad. Para gestores y profesionales, mapear estos planos permite anticipar resistencias, alinear incentivos y priorizar intervenciones. Por ejemplo, una política de cumplimiento en una empresa requerirá refuerzos culturales (micro), rediseños procedimentales (meso) e integración con el marco regulatorio (macro), de modo que la norma no sea percibida como imposición externa sino como práctica sensata y compartida.",
            },
            {
              type: "paragraph",
              text: "Las tipologías societales aportan una lente útil para comprender variaciones institucionales: en sociedades tradicionales, la autoridad se legitima por la costumbre y el linaje; en sociedades modernas, por la legalidad racional y el desempeño; en entornos en red, la coordinación se apoya en reputación, datos y protocolos tecnológicos. Ninguna tipología agota la realidad: coexisten capas históricas y dispositivos organizativos que responden a problemas concretos (seguridad, provisión, innovación, cuidado). De ahí que el análisis de la sociedad deba atender tanto a estructuras formales (leyes, jerarquías, presupuestos) como a tramas informales (confianza, liderazgos, narrativas). Esta doble mirada evita errores frecuentes: creer que basta con promulgar una regla para modificar conductas o suponer que todo cambio proviene de la espontaneidad cultural. La experiencia muestra que los avances sostenibles combinan buena ingeniería institucional con aprendizaje social y ciclos de retroalimentación que permiten corregir desajustes sin destruir el tejido comunitario.",
            },

            {
              type: "accordion",
              header: "Niveles de análisis y diseño normativo",
              open: false,
              text: "El diseño de normas eficaces articula lo micro (hábitos y motivos individuales), lo meso (procesos y estructuras organizacionales) y lo macro (marcos jurídicos y políticas). El desalineamiento entre estos niveles explica gran parte de los problemas de cumplimiento y de legitimidad percibida.",
            },

            {
              type: "paragraph",
              text: "Una consecuencia práctica de lo anterior es la necesidad de traducir valores compartidos en reglas claras y procedimientos verificables. En barrios, escuelas y empresas, las normas sociales (cortesía, reciprocidad) sostienen la vida cotidiana, pero cuando los bienes en juego son altamente vulnerables o de interés público —vida, integridad, competencia económica, medio ambiente— se requieren normas jurídicas, dotadas de autoridad y sanción. La sociedad, por tanto, no solo genera cultura y organización; también produce Derecho como técnica institucional de resolución pacífica de conflictos y de coordinación equitativa. Las organizaciones que reconocen esta función no delegan el cumplimiento a un departamento aislado: difunden estándares, miden riesgos, corrigen incentivos y fomentan denuncia y reparación. La clave es lograr que las reglas sean comprensibles, razonables y aplicables, evitando tanto el formalismo vacío como la laxitud que disuelve responsabilidades y castiga a quienes sí cumplen.",
            },
            {
              type: "paragraph",
              text: "La sociedad contemporánea exhibe tensiones entre velocidad de cambio y capacidad institucional de adaptación. La digitalización multiplica interacciones y produce asimetrías de información; la globalización integra mercados pero fragmenta pertenencias; las crisis ambientales y sanitarias obligan a repensar bienes comunes y solidaridad intergeneracional. Estas tensiones requieren nuevas competencias: alfabetización digital crítica, habilidades de cooperación en diversidad y ética de la responsabilidad. También demandan rediseños normativos que combinen flexibilidad con garantías: marcos que permitan innovar sin relajar derechos fundamentales ni erosión del Estado de derecho. En ese horizonte, el rol de profesionales y directivos es articular soluciones que alineen estrategia, cumplimiento y valor social, comprendiendo que la legitimidad es un activo frágil que se gana con resultados y coherencia, no solo con retórica.",
            },

            {
              type: "accordion",
              header: "Sociedad, legitimidad y cumplimiento",
              open: false,
              text: "La legitimidad de una regla depende de su justificación pública, de su coherencia con valores compartidos y de su factibilidad práctica. El cumplimiento sostenible combina incentivos, capacidades y cultura: sin capacidades, la gente no puede; sin incentivos, no quiere; sin cultura, no sabe por qué hacerlo.",
            },

            {
              type: "paragraph",
              text: "A manera de síntesis, concebir la sociedad como sistema de cooperación conlleva dos principios guía para la acción: primero, toda intervención normativa debe estar informada por evidencia (diagnósticos, datos, evaluación de impacto) y no únicamente por intuiciones; segundo, las soluciones efectivas son adaptativas, iterativas y sensibles al contexto. Quien diseña reglas o dirige organizaciones ha de calibrar proporcionalidad entre fines y medios, prever efectos no deseados y crear mecanismos de revisión. Las comunidades que internalizan estos principios generan círculos virtuosos de confianza, innovación y cumplimiento, mejorando su resiliencia frente a shocks. Así, el estudio de la sociedad no es un ejercicio contemplativo: es una plataforma para gobernar mejor, para proteger derechos y para expandir oportunidades reales de desarrollo humano, en armonía con el marco jurídico y con la cultura que les da sentido.",
            },
          ],
        },

        // ——— 1.1.3 Cultura y Derecho ————————————————————————
        {
          id: "1.1.3",
          numbering: "1.1.3",
          title: "Cultura y Derecho",
          content: [
            {
              type: "paragraph",
              text: "La cultura designa el conjunto de valores, creencias, símbolos, prácticas y saberes que una colectividad transmite y actualiza para orientar la vida en común. No es un adorno, sino la matriz de significados que permite reconocer lo valioso, lo permitido y lo debido. Desde esta perspectiva, el Derecho no flota en el vacío: bebe de la cultura para definir sus fines (qué proteger), sus bienes jurídicos (vida, libertad, patrimonio, ambiente) y sus formas (procedimientos, sanciones, remedios). A su vez, el Derecho retroalimenta la cultura al educar expectativas, estabilizar conductas y desincentivar prácticas lesivas. Esta interdependencia explica por qué las reformas legales que ignoran tradiciones y sensibilidades suelen producir cumplimiento cosmético o resistencia activa, mientras que las que dialogan con los valores vivos de una comunidad logran apropiación social y eficacia sin recurrir desmedidamente a la coerción.",
            },
            {
              type: "paragraph",
              text: "Un análisis fino distingue entre cultura declarada (lo que se dice valorar) y cultura efectiva (lo que realmente se practica). En organizaciones y sociedades, ambas pueden divergir: discursos sobre transparencia coexisten con tolerancia a la opacidad, o eslóganes de inclusión conviven con sesgos implícitos. El Derecho enfrenta entonces un reto doble: traducir principios en reglas operativas y, a la vez, cerrar brechas entre lo declarado y lo practicado mediante incentivos, rendición de cuentas y pedagogía cívica. Las políticas públicas exitosas combinan campañas de cultura cívica, rediseño de procesos y sanciones proporcionadas. En la empresa, códigos de ética y programas de cumplimiento ganan tracción cuando están conectados con decisiones estratégicas y con ejemplos consistentes de liderazgo, no cuando se limitan a manuales olvidados o cursos de trámite.",
            },
            {
              type: "paragraph",
              text: "Las comparaciones interculturales muestran cómo las prioridades jurídicas varían: entornos más individualistas enfatizan autonomía, propiedad y libertad contractual; contextos comunitarios subrayan solidaridad, reciprocidad y función social de la propiedad. Ningún modelo es neutral: cada uno resuelve tensiones reales entre libertad e igualdad, innovación y protección, eficiencia y equidad. Para el operador jurídico, esta heterogeneidad demanda sensibilidad contextual: interpretar una norma requiere conocer el trasfondo axiológico que le dio origen y los bienes en juego. Para el directivo, implica adaptar políticas corporativas a los marcos culturales y regulatorios locales sin abdicar de estándares éticos globales. El arte consiste en encontrar intersecciones robustas: mínimos irrenunciables (derechos humanos) y máximos flexibles (modos de implementación) que permitan convergencia sin uniformidad empobrecedora.",
            },

            {
              type: "accordion",
              header: "De valores a reglas: el puente cultural",
              open: false,
              text: "Los valores culturales determinan qué bienes se consideran dignos de protección y con qué intensidad. El Derecho convierte esa axiología en normas generales y procedimientos aplicables a casos, procurando estabilidad y justicia. Cuando el puente falla, aparecen reglas ineficaces o culturalmente ilegítimas.",
            },

            {
              type: "paragraph",
              text: "En el terreno aplicado, la cultura influye en el diseño de remedios y sanciones. Sociedades con alta aversión al conflicto privilegian mecanismos restaurativos y mediación; otras, con énfasis en disuasión, fortalecen sanciones ejemplares. La elección no es puramente técnica: comunica una teoría de justicia y moldea comportamientos. Asimismo, la narrativa jurídica —cómo se cuentan y justifican las decisiones— afecta la aceptación social: sentencias claras, motivadas y accesibles refuerzan la confianza; resoluciones oscuras la erosionan. En política pública, la participación ciudadana amplía legitimidad y calidad de las normas, al incorporar conocimiento distribuido y perspectivas diversas. Diseñar foros de deliberación significativos —más que meras consultas formales— es una inversión en capital cívico que reduce costos de implementación y litigio futuro.",
            },
            {
              type: "paragraph",
              text: "El cambio cultural es gradual, pero puede acelerarse con palancas adecuadas: educación, incentivos, ejemplos de liderazgo y experiencias que revelen beneficios de nuevas prácticas. El Derecho funciona como catalizador cuando fija metas claras (por ejemplo, transición energética), alinea señales económicas (impuestos, subsidios) y crea infraestructura institucional (agencias, estándares, datos abiertos) para escalar comportamientos deseables. Sin embargo, la ingeniería normativa debe cuidar riesgos de backlash: reformas percibidas como imposiciones identitarias o cargas desproporcionadas pueden deslegitimar causas valiosas. Por ello, el diseño jurídico culturalmente inteligente empieza con escucha activa, prototipado regulatorio y evaluación iterativa, antes que con decretos monolíticos.",
            },

            {
              type: "accordion",
              header: "Cultura de legalidad y desempeño",
              open: false,
              text: "Una cultura de legalidad sostenible combina convicción (comprender por qué cumplir), capacidad (saber cómo) y consecuencias (qué ocurre si no). Las organizaciones de alto desempeño integran estos tres componentes en sus procesos clave y miden resultados con indicadores públicos y verificables.",
            },

            {
              type: "paragraph",
              text: "En síntesis, cultura y Derecho forman un circuito de retroalimentación: la cultura inspira fines, criterios de justicia y estilos de coordinación; el Derecho concreta esas intuiciones en instituciones y procedimientos que, al operar, reconfiguran creencias y hábitos. Gobiernos y organizaciones que reconocen este circuito diseñan intervenciones más precisas, legitiman sus decisiones y elevan la calidad de la convivencia. Por el contrario, separar artificialmente normas de valores alimenta cinismo y oportunismo, pues invita a cumplir solo por temor a sanciones. La apuesta estratégica es cultivar culturas que aprecien la legalidad como condición de cooperación productiva y de protección de la dignidad humana, haciendo del Derecho no un obstáculo, sino una palanca de desarrollo y cohesión social.",
            },
          ],
        },
        {
          id: "1.2",
          numbering: "1.2",
          title: "Concepto de Ciencia",
          content: [
            {
              type: "paragraph",
              text: "La ciencia puede definirse como un cuerpo de conocimientos sistemáticos, críticos y públicos que busca describir, explicar y, en su caso, predecir fenómenos mediante métodos explícitos de observación, medición y razonamiento. Su rasgo distintivo no es solo acumular datos, sino someterlos a contrastación y revisión por pares para depurar sesgos y asegurar fiabilidad. A diferencia de las creencias o meras opiniones, las afirmaciones científicas deben ser justificables con evidencia y estar abiertas al escrutinio y a la refutación. Esta exigencia de transparencia metodológica genera un ciclo virtuoso: hipótesis claras, diseños que permiten replicación, análisis que cuantifican incertidumbre y discusión que reconoce límites y fuentes de error. Por ello, hablar de ciencia es hablar de prácticas institucionales —laboratorios, revistas, comités de ética, repositorios— que hacen posible la cooperación a gran escala. La ciencia, además, no es monolítica: conviven disciplinas que operan con modelos formales (matemáticas, lógica), otras que estudian hechos del mundo (física, biología, sociología) y campos aplicados que traducen conocimiento en soluciones. Esta variedad demanda un alfabeto común: precisión conceptual, cuidado con inferencias causales y atención a la validez interna y externa de los resultados.",
            },
            {
              type: "paragraph",
              text: "Un mapa operativo distingue entre ciencias formales, fácticas y aplicadas. Las primeras trabajan con sistemas axiomáticos y deducción (matemáticas, lógica); las segundas investigan fenómenos empíricos mediante observación y experimentación (física, biología, psicología, sociología); las aplicadas buscan resolver problemas concretos aprovechando hallazgos previos (ingeniería, medicina, políticas públicas). Aunque sus métodos difieren, comparten un ideal: reducir la incertidumbre con argumentos y pruebas mejores que las alternativas disponibles. En este sentido, los criterios de demarcación —falsabilidad, reproducibilidad, revisión crítica— funcionan como salvaguardas frente a la pseudociencia, que ofrece certezas sin evidencia controlable. La práctica científica moderna incorpora además herramientas estadísticas para estimar efectos y separar señal de ruido, y protocolos preregistrados que limitan el sesgo de confirmación. Nada de esto elimina el error, pero lo vuelve detectables y corregible, que es la fortaleza del método científico frente a dogmas inmunes a la crítica.",
            },

            {
              type: "accordion",
              header: "Criterios de calidad científica",
              open: false,
              text: "Claridad de hipótesis; medición válida y confiable; diseño que permita inferencias causales cuando proceda; análisis transparente con manejo de incertidumbre; revisión por pares; datos y código disponibles cuando sea posible; replicación independiente; evaluación ética de riesgos y beneficios.",
            },

            {
              type: "paragraph",
              text: "La investigación progresa con preguntas bien formuladas y diseños ajustados al fenómeno. Cuando se persiguen relaciones causales, el estándar son experimentos controlados o cuasi-experimentos con estrategias de identificación (aleatorización, diferencias en diferencias, variables instrumentales). Cuando el objetivo es comprender significados y prácticas, métodos cualitativos (entrevistas, etnografías, análisis documental) resultan más idóneos. En ambos casos, la calidad depende de la coherencia entre pregunta, datos y técnica. La ciencia, por otra parte, es acumulativa: se construye sobre teorías existentes que se refinan o se sustituyen tras anomalías reiteradas. De ahí la importancia de practicar una lectura crítica que distinga entre resultados preliminares y consensos robustos. Esta conciencia histórica y epistemológica previene entusiasmos infundados y favorece decisiones prudentes cuando el conocimiento es aún incierto, como suele ocurrir ante innovaciones tecnológicas o crisis sanitarias donde la evidencia se produce en tiempo real.",
            },
            {
              type: "paragraph",
              text: "El valor de la ciencia no reside solo en el descubrimiento, sino en su poder para orientar la acción en contextos complejos. Las organizaciones que toman decisiones informadas por evidencia —en educación, salud, seguridad, cumplimiento normativo— aprenden más rápido y fallan de manera menos costosa. La cultura de la evaluación convierte políticas y programas en hipótesis que se ponen a prueba, corrigen rumbos y justifican el uso de recursos. Este enfoque evita falsas dicotomías entre teoría y práctica: toda intervención encarna supuestos causales, y la buena gestión los hace explícitos y medibles. En entornos de alta incertidumbre, el método científico sugiere ciclos iterativos de prototipado y aprendizaje, con métricas alineadas a objetivos públicos. Así, la ciencia aporta no certezas absolutas, sino procedimientos para aproximarse a la verdad y para decidir responsablemente cuando la verdad completa aún no está disponible, articulando conocimiento, prudencia y rendición de cuentas.",
            },

            {
              type: "accordion",
              header: "Errores frecuentes a evitar",
              open: false,
              text: "Confundir correlación con causalidad; seleccionar resultados a conveniencia (p-hacking); extrapolar más allá del contexto de estudio; ignorar sesgos de selección; usar métricas sin validez; desatender consideraciones éticas y de privacidad al recolectar datos.",
            },

            {
              type: "paragraph",
              text: "Finalmente, la ciencia es una empresa ética y social: se financia con recursos públicos y privados, afecta vidas y, por tanto, debe someterse a escrutinio democrático y reglas de integridad. La apertura de datos y la ciencia reproducible amplían la confianza ciudadana y facilitan la corrección de errores. También obligan a una reflexión sobre riesgos, particularmente cuando el conocimiento habilita tecnologías de alto impacto (inteligencia artificial, biotecnología) que pueden reproducir sesgos o alterar ecosistemas sociales. El compromiso con el método no exonera de responsabilidades: investigadores y decisores deben prever daños, establecer salvaguardas y diseñar compensaciones. En síntesis, la ciencia es una herramienta civilizatoria que ennoblece la deliberación pública, pues eleva el estándar de prueba para afirmar, justificar y decidir. Esta unidad la vincula con el Derecho, que ofrece un cauce institucional para canalizar expectativas y resolver disputas, y con la cultura, que dota de sentido a los fines que la investigación pretende servir.",
            },
            {
              type: "paragraph",
              text: "Para el estudiante y el profesional, alfabetizarse científicamente significa dominar nociones de validez, confiabilidad, tamaño de efecto y replicación; comprender cuándo un resultado es sólido y cuándo es provisional; y saber leer críticamente gráficos, tablas y modelos. Significa también cultivar una ética de la duda razonable: evitar afirmaciones categóricas sin respaldo y estar dispuesto a revisar creencias a la luz de nueva evidencia. Esta actitud se traduce en mejores decisiones cotidianas: desde evaluar información en medios hasta diseñar políticas internas en una organización. La ciencia no promete infalibilidad, promete aprendizaje disciplinado. Adoptar ese espíritu —curioso, riguroso y humilde— es preparar el terreno para prácticas profesionales que combinen eficiencia con justicia, innovación con seguridad y libertad con responsabilidad, que son las tensiones permanentes de la vida social y jurídica.",
            },
          ],
        },
        {
          id: "1.3",
          numbering: "1.3",
          title: "Ciencia Jurídica.",
          content: [
            {
              type: "paragraph",
              text: "La ciencia jurídica es el estudio sistemático del Derecho como orden normativo que orienta y limita la conducta humana en sociedad. Su tarea no se agota en describir leyes vigentes: también las interpreta, las organiza en sistemas coherentes, identifica sus principios y examina su legitimidad y eficacia. Este enfoque integrador combina perspectivas dogmáticas —que reconstruyen el contenido de las normas a partir de fuentes formales— con miradas analíticas, históricas, filosóficas y sociológicas que explican su origen, evolución y efectos sociales. A diferencia de las ciencias naturales, que describen hechos, la ciencia jurídica opera en el ámbito del deber ser y formula juicios de corrección normativa: qué disposición es aplicable, cómo resolver antinomias, qué interpretación se ajusta mejor a valores y fines constitucionales. Así, ofrece criterios para decidir casos concretos con razones públicas, controlables y replicables por otros intérpretes calificados.",
            },
            {
              type: "paragraph",
              text: "Metodológicamente, la ciencia jurídica trabaja con técnicas como la exégesis de textos normativos, la sistematización conceptual (categorías, instituciones, principios), la interpretación conforme a la Constitución y a los derechos humanos, y la argumentación racional de decisiones. Cuando enfrenta lagunas o contradicciones, apela a reglas de resolución —jerarquía, cronología, especialidad— y a principios —proporcionalidad, igualdad, dignidad— que orientan la ponderación. A la par, dialoga con disciplinas empíricas: la sociología del derecho observa cómo se aplican realmente las normas; la economía del derecho estudia incentivos y costos; la ciencia política analiza diseños institucionales y distribución de poder. Estas conexiones permiten evaluar no solo la validez formal de una regla, sino su eficacia social y su justicia material, cerrando la brecha entre el texto y la realidad vivida por las personas.",
            },

            {
              type: "accordion",
              header: "Instrumental metodológico",
              open: false,
              text: "Interpretación gramatical, sistemática, histórica y teleológica; control de constitucionalidad y convencionalidad; análisis de casos y precedentes; principios de resolución de antinomias; técnicas de ponderación y justificación de sentencias; métodos empíricos para evaluación de impacto regulatorio.",
            },

            {
              type: "paragraph",
              text: "El objeto de la ciencia jurídica incluye normas (reglas y principios), fuentes (Constitución, leyes, reglamentos, jurisprudencia), instituciones (contrato, propiedad, responsabilidad) y procesos (legislativo, administrativo, jurisdiccional). Sobre este objeto formula preguntas recurrentes: ¿cuál es el contenido y alcance de una disposición?, ¿qué ocurre si dos normas colisionan?, ¿cómo se integra el ordenamiento ante vacíos?, ¿qué efectos produce una reforma en la conducta de los destinatarios?, ¿cuándo una restricción de derechos supera el escrutinio de proporcionalidad? Responder exige un arte de la distinción —casos— y una disciplina del argumento —razones— que se someten a estándares de corrección intersubjetiva. Por eso, la buena dogmática no es mera erudición: es tecnología conceptual al servicio de decisiones públicas y privadas que deben ser previsibles, razonables y controlables.",
            },
            {
              type: "paragraph",
              text: "La ciencia jurídica contemporánea se desarrolla en un ecosistema crecientemente digitalizado. Bases de datos jurisprudenciales, lenguajes de marcado legislativo y herramientas de análisis textual masivo permiten detectar patrones interpretativos, medir consistencia y proyectar escenarios de litigio. Estas innovaciones, bien utilizadas, incrementan transparencia y calidad argumentativa; mal empleadas, pueden fosilizar sesgos o confundir correlaciones con causalidades. De ahí la importancia de la alfabetización en métodos y datos para juristas, junto con una prudencia ética que preserve debidos procesos, privacidad y derechos fundamentales. La tecnología es un medio, no un oráculo: la decisión jurídica sigue requiriendo juicio, deliberación y responsabilidad institucional.",
            },

            {
              type: "accordion",
              header: "Buenas prácticas de investigación jurídica",
              open: false,
              text: "Definir preguntas claras conectadas a un problema real; revisar fuentes de forma exhaustiva y actualizada; explicitar método y límites; distinguir entre descripción, interpretación y valoración; aportar criterios operativos para casos; abrir datos y anexos cuando sea posible; someter resultados a crítica entre pares.",
            },

            {
              type: "paragraph",
              text: "Una nota crucial distingue validez, vigencia y eficacia. Validez refiere a la pertenencia de una norma al sistema conforme a reglas de producción; vigencia, a su entrada en fuerza temporal y espacial; eficacia, a su obediencia y aplicación efectivas. Una disposición puede ser válida y vigente, pero ineficaz si su cumplimiento es residual, lo que obliga a repensar diseño institucional o incentivos. La ciencia jurídica, al mapear estas dimensiones, ayuda a priorizar reformas: a veces conviene ajustar el texto (claridad, técnica legislativa); otras, mejorar capacidad administrativa o rediseñar sanciones. Esta aproximación evita confundir problemas de redacción con fallas de implementación, o déficits de legitimidad con carencias de recursos.",
            },
            {
              type: "paragraph",
              text: "En suma, la ciencia jurídica cumple tres funciones estratégicas: (i) esclarece el contenido del Derecho positivo con criterios de coherencia y consistencia; (ii) evalúa su justicia material a la luz de principios constitucionales y derechos humanos; y (iii) analiza su desempeño real, proponiendo mejoras normativas e institucionales. Vincula, por tanto, teoría y práctica, texto y contexto, seguridad jurídica y justicia. Para el estudiante y el profesional, dominar este enfoque no es opcional: es condición para argumentar con rigor, prevenir riesgos, diseñar políticas o contratos robustos y resolver conflictos de forma pacífica y legítima, contribuyendo a una cultura de legalidad que eleve la calidad de la convivencia.",
            },
          ],
          subthemes: [
            {
              id: "1.3.1",
              numbering: "1.3.1",
              title: "El Derecho como objeto de estudio de la ciencia jurídica",
              content: [
                {
                  type: "paragraph",
                  text: "Cuando afirmamos que el Derecho es objeto de estudio de la ciencia jurídica, especificamos que lo investigado no es un hecho natural, sino un entramado normativo compuesto por reglas y principios, instituciones y procedimientos, prácticas e interpretaciones. Este objeto tiene una doble cara: textual —corpus de fuentes formales— y social —formas de aplicación y recepción—. La ciencia jurídica, por tanto, se ocupa de describir su arquitectura (jerarquía, competencias, relaciones entre normas), reconstruir su significado (métodos interpretativos), integrar sus vacíos (analogía, principios generales) y evaluar su legitimidad y desempeño. La pregunta central no solo es qué dicen los textos, sino qué deben significar a la luz de la Constitución y de los derechos humanos, y cómo impactan a las personas en contextos reales. Esta complejidad explica el diálogo con disciplinas auxiliares —historia, filosofía, economía, sociología— que iluminan el origen, sentido y efectos del Derecho positivo.",
                },
                {
                  type: "paragraph",
                  text: "Una primera dimensión del objeto atiende a la producción normativa: quién puede crear Derecho, con qué procedimiento, bajo qué límites y controles. Aquí se analiza la validez conforme a reglas de competencia y forma, la vigencia en el tiempo y espacio, y la coherencia con normas superiores. La constitucionalización de los ordenamientos ha intensificado esta mirada, pues somete leyes y actos a estándares de supremacía constitucional y convencional, con mecanismos de control que van desde acciones abstractas hasta el examen difuso en casos concretos. La ciencia jurídica estudia así el ciclo completo: iniciativa, deliberación, promulgación, publicación, entrada en vigor, derogación y reforma, junto con la jurisprudencia que, al interpretar, también produce Derecho en cierta medida.",
                },

                {
                  type: "accordion",
                  header: "Tres ejes del objeto jurídico",
                  open: false,
                  text: "(i) Texto: fuentes y técnicas de interpretación; (ii) Sistema: coherencia, jerarquía, antinomias, lagunas; (iii) Práctica: aplicación por autoridades y particulares, efectos y cumplimiento. La ciencia jurídica integra los tres con criterios de validez, vigencia y eficacia.",
                },

                {
                  type: "paragraph",
                  text: "La segunda dimensión focaliza la interpretación y la integración. Interpretar no es solo leer, es atribuir significado conforme a métodos (gramatical, sistemático, histórico, teleológico) y a principios superiores. Integrar es responder ante vacíos o contradicciones, aplicando reglas de preferencia (jerarquía, especialidad, cronología) o acudiendo a principios generales —buena fe, proporcionalidad, igualdad— que permiten resolver el caso de manera razonable. El resultado debe ser justificable: ofrecer razones suficientes, consistentes y controlables por terceros. Esta exigencia de racionalidad pública disuade arbitrariedades y fortalece previsibilidad, condición de la seguridad jurídica y de la confianza en las instituciones.",
                },
                {
                  type: "paragraph",
                  text: "Una tercera dimensión examina la eficacia social del Derecho: cómo influyen las normas en la conducta y qué efectos generan en distintos grupos. La ciencia jurídica se apoya aquí en evidencia empírica para evaluar cumplimiento, litigiosidad, costos de transacción, distribución de beneficios y cargas, y posibles impactos no intencionales. Este análisis alimenta la mejora regulatoria: si una regla válida y vigente es sistemáticamente incumplida, puede requerir rediseño, simplificación, incentivos distintos o fortalecimiento de capacidades institucionales. La legitimidad no se agota en el origen formal; se robustece cuando el Derecho protege efectivamente derechos y resuelve problemas reales sin crear otros mayores.",
                },

                {
                  type: "accordion",
                  header: "Ruta analítica para casos",
                  open: false,
                  text: "1) Identificar hechos relevantes; 2) delimitar la cuestión jurídica; 3) ubicar normas aplicables y jerarquía; 4) interpretar con métodos y principios; 5) resolver antinomias o lagunas; 6) justificar la decisión con razones públicas; 7) prever efectos y cumplimiento.",
                },

                {
                  type: "paragraph",
                  text: "La ciencia jurídica también estudia la relación del Derecho con la justicia. Aunque no toda norma válida es justa, el orden constitucional impone principios que orientan la interpretación hacia resultados compatibles con la dignidad humana, la igualdad y la libertad. La proporcionalidad sirve como técnica para revisar restricciones a derechos: fin legítimo, idoneidad, necesidad y ponderación. Asimismo, el principio de igualdad exige trato igual a los iguales y diferente a los desiguales cuando existan razones suficientes. Estas pautas, aun cuando no siempre dicten una única respuesta correcta, establecen un marco de racionalidad que reduce discrecionalidad y arbitrariedad, favoreciendo decisiones más consistentes y defendibles públicamente.",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, entender el Derecho como objeto de estudio exige reconocer su historicidad y su apertura al cambio. Reformas legislativas, virajes jurisprudenciales y transformaciones sociales —tecnológicas, económicas, culturales— introducen problemas inéditos (protección de datos, inteligencia artificial, bioética) que obligan a reinterpretar categorías tradicionales o a crear nuevas instituciones. La ciencia jurídica, si quiere ser relevante, debe combinar fidelidad al texto con sensibilidad al contexto, y proponer soluciones que mantengan el núcleo de derechos y garantías mientras permiten la innovación social. Ese equilibrio —entre estabilidad y adaptación— es, en última instancia, la contribución decisiva del enfoque científico al gobierno de la convivencia en sociedades pluralistas.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* ── Unidad 2 ───────────────────────────────────────── */
    {
      id: "2",
      numbering: "2",
      title: "EL DERECHO Y LA NORMA",
      content: [
        {
          type: "paragraph",
          text: "Hablar de “El derecho y la norma” es ingresar al núcleo técnico de la convivencia. El Derecho no es un conjunto disperso de mandatos, sino un sistema de normas generales y abstractas que orientan conductas, resuelven conflictos y protegen bienes colectivos. A su alrededor interactúan otros órdenes normativos —moral, religioso y social— que moldean hábitos y expectativas. Diferenciarlos con precisión evita malentendidos: la moral apela a la conciencia, la religión a una comunidad de fe, lo social a la coordinación y la cortesía, y lo jurídico al interés público con autoridad y sanción. Esta unidad establece el mapa para navegar esa ecología normativa: clarificaremos “regla”, “norma” y “ley”; revisaremos tipos de normas y sus rasgos característicos; y aplicaremos la cuadrícula de ámbitos de validez (espacial, temporal, material y personal). El objetivo es doble: dotarte de categorías operativas para leer textos normativos con rigor y entrenarte en un método que permita decidir justificadamente en contextos reales, evitando tanto el formalismo vacío como el voluntarismo que ignora reglas. Con esa brújula, el Derecho deja de ser un laberinto y se convierte en una tecnología de soluciones públicas y privadas.",
        },

        {
          type: "paragraph",
          text: "El punto de partida es la distinción conceptual. “Regla” nombra cualquier pauta que guía la conducta; “norma” designa el género que integra reglas morales, religiosas, sociales y jurídicas; “ley” identifica la norma jurídica emanada de autoridad competente, de carácter general y abstracto, con consecuencias previstas para el incumplimiento. Esta taxonomía no es erudición: ordena la acción. En la vida cotidiana solemos confundir expectativas sociales con obligaciones legales o convicciones íntimas con deberes estatales. Por ello, conviene preguntar siempre: ¿quién crea la regla?, ¿con qué procedimiento?, ¿qué sanción prevé?, ¿a quién obliga?, ¿dónde y durante qué periodo rige? Responder con precisión reduce fricciones, clarifica responsabilidades y mejora la calidad de las decisiones. La cultura cívica y la técnica jurídica se encuentran en esta práctica de preguntas, que convierte el estudio de normas en una herramienta para planear, prevenir conflictos y actuar con previsibilidad.",
        },

        {
          type: "paragraph",
          text: "El segundo eje es comprender estructura y rasgos de cada tipo normativo. Las normas morales son autónomas, unilaterales, interiores e incoercibles: guían por convicción y su infracción genera culpa o reproche ético. Las religiosas comparten interioridad y pertenencia comunitaria, con sanciones espirituales o disciplinarias internas. Las sociales coordinan por reputación y usos, sin coacción estatal. La norma jurídica, en cambio, es heterónoma, bilateral, exterior y coercible; se expresa como “supuesto de hecho + consecuencia jurídica” y cuenta con procedimientos de creación y aplicación. Estas esferas no compiten: se complementan. Donde la cortesía funciona, la ley interviene menos; cuando fallan convicciones y usos, el Derecho fija un piso común de protección. Evitamos así dos errores simétricos: el moralismo que pretende gobernarlo todo por virtud y el legalismo que cree que basta promulgar para transformar conductas.",
        },

        {
          type: "paragraph",
          text: "El tercer eje introduce los ámbitos de validez, una cuadrícula imprescindible para aplicar correctamente cualquier disposición: espacial (dónde rige), temporal (desde y hasta cuándo), material (sobre qué materias) y personal (a quiénes alcanza). Esta matriz convierte el Derecho en una herramienta previsible: al identificar los cuatro ejes, cada sujeto sabe si debe cumplir, si puede exigir, qué autoridad es competente y cuándo procede hacerlo. El legislador responsable los explicita con técnica (territorios, transitorios, definiciones y sujetos), y el intérprete los armoniza con Constitución y derechos humanos. En la práctica profesional, auditar ámbitos evita errores típicos: aplicar normas derogadas, extrapolar reglas entre jurisdicciones, confundir materias o extender obligaciones a destinatarios no previstos. Dominar esta cuadrícula es el antídoto contra la improvisación.",
        },

        {
          type: "paragraph",
          text: "Finalmente, esta unidad propone un método de estudio y de intervención. Primero, definir con precisión el problema y clasificar la norma involucrada. Segundo, verificar sus ámbitos de validez con una lista de control disciplinada. Tercero, anticipar efectos, riesgos y costos de cumplimiento, eligiendo soluciones proporcionales y factibles. Cuarto, comunicar con claridad: razones, fuentes y procedimientos. Esta secuencia eleva la calidad de las decisiones públicas y privadas, y articula las lecciones de la Unidad 1 —ser humano, sociedad y cultura— con el diseño normativo que las vuelve operativas. El resultado esperado es que leas, enseñes y apliques “el derecho y la norma” con solvencia técnica y criterio práctico, sabiendo cuándo basta la pedagogía social, cuándo es necesaria la persuasión moral y cuándo debe intervenir la autoridad con la fuerza legítima del Estado.",
        },

        {
          type: "accordion",
          header: "Nivel 1 — Conceptos clave",
          open: false,
          text: "Regla (pauta de conducta), Norma (género: moral, religiosa, social, jurídica), Ley (norma jurídica estatal, general y abstracta). Rasgos típicos: autónoma/heterónoma; unilateral/bilateral; interior/exterior; incoercible/coercible.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Ámbitos de validez",
          open: false,
          text: "Espacial: ¿dónde rige? Temporal: ¿cuándo rige? Material: ¿qué materias cubre? Personal: ¿quiénes son los destinatarios? Regímenes transitorios, competencia y definiciones.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ruta de estudio sugerida",
          open: false,
          text: "1) Distinguir regla, norma y ley; 2) identificar el tipo de norma en casos reales; 3) auditar ámbitos de validez; 4) construir soluciones proporcionales; 5) documentar razones, fuentes y procedimientos.",
        },
      ],
      subthemes: [
        {
          id: "2.1",
          numbering: "2.1",
          title: "Conceptos de ley, regla y norma.",
          content: [
            {
              type: "paragraph",
              text: "En sentido estricto, una ley es una norma jurídica creada por una autoridad competente del Estado mediante un procedimiento formal y público. Posee generalidad —se dirige a categorías de sujetos— y abstracción —regula tipos de conductas—, y su incumplimiento activa consecuencias previstas (sanciones, nulidades, ineficacias). Junto a la ley conviven otras reglas que orientan la vida social sin necesariamente provenir del legislador: directrices morales, religiosas y sociales que prescriben lo debido en contextos concretos. Para comprender la convivencia regulada es útil ordenar los conceptos: ‘regla’ nombra cualquier pauta que guía conductas; ‘norma’ designa el género que agrupa reglas de diversa naturaleza; y ‘ley’ identifica la especie jurídica con pretensión de validez institucional y coercibilidad. Esta distinción evita confundir autoridad moral con autoridad jurídica y permite interpretar de modo más fino qué expectativas de conducta están en juego cuando alguien habla de ‘normas’ en la vida cotidiana o en contextos profesionales.",
            },
            {
              type: "paragraph",
              text: "La diferencia decisiva entre ley y otras reglas reside en la obligatoriedad y el tipo de sanción. En las normas morales, el incumplimiento produce culpa o reproche interno; en las sociales, desaprobación o exclusión del grupo; en las religiosas, consecuencias dentro de la propia comunidad de fe. La ley, en cambio, prevé sanciones externas aplicadas por autoridades y respaldadas por la fuerza legítima del Estado. Esto no significa que toda ley sea perfecta ni que todas las demás reglas sean opcionales: en sociedades cohesionadas, los diversos órdenes normativos suelen reforzarse y alinear expectativas. Pero cuando colisionan —por ejemplo, una costumbre contraria a derechos fundamentales— prevalece la ley, interpretada conforme a la Constitución y los derechos humanos. Así se garantiza un piso común de protección y se preserva la seguridad jurídica, sin impedir que la moral y las buenas costumbres sigan desempeñando su función educativa y cívica.",
            },

            {
              type: "accordion",
              header: "Mapa conceptual mínimo",
              open: false,
              text: "Regla = pauta de conducta. Norma = género que incluye reglas morales, religiosas, sociales y jurídicas. Ley = norma jurídica estatal, general y abstracta, con sanción prevista y mecanismos institucionales de aplicación.",
            },

            {
              type: "paragraph",
              text: "Desde el punto de vista de sus fuentes, las leyes surgen de procesos legislativos (constitución, leyes, reglamentos) y también de la creación judicial o administrativa en ciertos sistemas, mientras que las normas morales y sociales emergen de tradiciones, usos y acuerdos implícitos. Su estructura difiere: la ley suele formularse como supuesto de hecho + consecuencia jurídica; las reglas sociales se expresan como expectativas situadas (‘haz fila’, ‘da las gracias’); las religiosas como preceptos de una comunidad de fe. En la práctica, los individuos se mueven entre estos órdenes: la cortesía suaviza interacciones, la moral sostiene integridad y la ley protege bienes colectivos sensibles (vida, seguridad, propiedad, medio ambiente). Ver esta ecología normativa permite diseñar políticas y reglas organizacionales más efectivas, que combinen pedagogía social, incentivos y sanciones proporcionadas.",
            },
            {
              type: "paragraph",
              text: "Ejemplos ayudan a fijar la diferencia: detenerse ante un semáforo en rojo es una norma jurídica de tránsito cuya infracción acarrea multa; ceder el asiento a una persona mayor es una norma social cuya infracción genera desaprobación; no mentir por convicción es una norma moral cuya infracción produce culpa. En todos los casos hay un ‘deber’ de comportamiento, pero cambia el fundamento y la consecuencia. Esta comparación ilumina por qué el derecho no puede reemplazar por completo a la moral ni a las costumbres: la coerción jurídica es costosa y limitada; las virtudes cívicas y los hábitos sociales multiplican el cumplimiento voluntario y reducen necesidad de intervención estatal, liberando recursos para los casos en que la coerción es indispensable.",
            },

            {
              type: "accordion",
              header: "Criterios para distinguir normas",
              open: false,
              text: "Origen (Estado, comunidad, conciencia), destinatarios (universales, miembros de un grupo), sanción (externa, social, interna), grado de formalidad (escrita/no escrita), ámbito (público/privado) y propósito (protección de bienes colectivos, convivencia, perfeccionamiento moral).",
            },

            {
              type: "paragraph",
              text: "La noción de ‘norma’ como género es útil para el análisis dogmático que sigue: permite clasificar según características (autónomas/heterónomas; unilaterales/bilaterales; interiores/exteriores; incoercibles/coercibles) y según ámbitos de validez (espacial, temporal, material y personal). Estas taxonomías no son ejercicios académicos estériles: ofrecen un instrumental práctico para resolver dudas interpretativas, identificar antinomias y diseñar políticas más precisas. En suma, ley, regla y norma son conceptos emparentados pero no equivalentes; diferenciarlos con rigor eleva la calidad del debate público y la toma de decisiones en ámbitos profesionales y ciudadanos.",
            },
            {
              type: "paragraph",
              text: "Con este marco, la unidad avanza hacia los ‘tipos de normas y sus características’. Analizaremos las normas morales, religiosas, sociales y jurídicas, destacando su fundamento, su modo de obligatoriedad y sus efectos sobre la conducta. El objetivo es dotar al estudiante de un criterio operativo para reconocer en situaciones reales qué tipo de norma está en juego, por qué conviene cumplirla y cómo reaccionar ante conflictos entre órdenes normativos, priorizando siempre la dignidad de las personas y el bien común tal como lo exige el orden jurídico.",
            },
          ],
        },
        {
          id: "2.2",
          numbering: "2.2",
          title: "Tipos de normas y sus características",
          content: [
            {
              type: "paragraph",
              text: "La norma moral regula la conducta desde el fuero interno de la persona, apelando a la conciencia y a la deliberación sobre el bien y el mal. Su obligatoriedad no proviene de una autoridad externa con poder de coacción, sino de la convicción íntima y de la educación moral recibida en la familia, la escuela y la comunidad. Por ello se dice que es autónoma: el sujeto se da a sí mismo la pauta de conducta al reconocer razones suficientes para actuar de cierta manera. El incumplimiento no conlleva sanción estatal, pero sí consecuencias psíquicas y sociales: culpa, remordimiento, pérdida de confianza. En contextos de vida cotidiana, la norma moral opera como brújula que orienta decisiones difíciles cuando el derecho guarda silencio o admite varias soluciones, favoreciendo honestidad, responsabilidad y solidaridad como virtudes públicas que, a la larga, abaratan costos de supervisión y fortalecen la cooperación.",
            },
            {
              type: "paragraph",
              text: "Definiciones doctrinales la describen como el conjunto de criterios valorativos que guían conductas desde la distinción entre lo correcto e incorrecto. Estas pautas se nutren de tradiciones, creencias y hábitos sedimentados, pero también evolucionan mediante reflexión crítica y experiencia social. A diferencia de la simple etiqueta, la moral pretende universalidad práctica: ‘actúa con honestidad’, ‘cumple tus compromisos’, ‘no dañes al prójimo’. Su cumplimiento voluntario es decisivo para la salud de una comunidad, porque reduce la necesidad de coerción y legitima las instituciones. La educación moral, así entendida, no impone dogmas cerrados; cultiva hábitos de deliberación, empatía y autocontrol que permiten reconocer razones que otros también podrían aceptar, base de una convivencia respetuosa en sociedades plurales.",
            },

            {
              type: "accordion",
              header: "Rasgos característicos",
              open: false,
              text: "Autónoma (se asume por convicción), unilateral (impone deberes sin correlato exigible), interior (se asienta en la conciencia), e incoercible (no admite imposición por la fuerza estatal).",
            },

            {
              type: "paragraph",
              text: "La relación entre moral y derecho es compleja: muchas leyes presuponen estándares morales mínimos (prohibición de daño injustificado, deber de veracidad en declaraciones, lealtad contractual), pero no toda inmoralidad debe convertirse en ilícito. El principio de intervención mínima aconseja reservar la coerción para bienes especialmente vulnerables o de alto interés público. Al mismo tiempo, la moral sirve como criterio interpretativo del derecho vigente: cuando un texto admite varias lecturas, se prefiere la que armoniza con valores constitucionales y derechos humanos. Esta interacción dinámica evita tanto el moralismo jurídico —que invade la intimidad— como el positivismo ciego —que olvida la razón de ser de las normas—, y mantiene abierto el diálogo entre convicción personal y exigencias de la vida en común.",
            },
            {
              type: "paragraph",
              text: "Ejemplos ilustran su alcance: decir la verdad aun cuando no hay sanción legal por mentir en contextos privados; devolver un bien encontrado sin obligación jurídica expresa; ayudar a quien lo necesita más allá de lo contractualmente debido. Estos comportamientos, motivados por principios y virtudes, sostienen la confianza social que luego facilita el cumplimiento del derecho positivo. En sentido inverso, hábitos de engaño, cinismo o oportunismo deterioran la cooperación y obligan a aumentar controles y sanciones, con altos costos para todos. Por eso, cultivar normas morales sólidas es una estrategia de desarrollo institucional, no solo un ideal ético abstracto.",
            },

            {
              type: "accordion",
              header: "Ejemplos frecuentes",
              open: false,
              text: "Ser honesto; cumplir promesas; respetar a los mayores; apoyar a las personas del entorno; actuar con prudencia ante conflictos de interés.",
            },

            {
              type: "paragraph",
              text: "Distinciones clásicas ayudan a situarla frente a otros órdenes: a) frente a la norma social, la moral no depende de la mirada ajena sino de la conciencia; b) frente a la religiosa, no requiere adscripción de fe y se justifica con razones públicas; c) frente a la jurídica, no prevé sanción estatal ni procedimientos de ejecución. Aun así, interactúa con todas: una cultura cívica robusta traduce convicciones morales en hábitos sociales y, cuando es necesario, en leyes. Esta triangulación da estabilidad a expectativas y protege bienes comunes. En síntesis, la norma moral es el primer eslabón de una cadena que va del carácter a las instituciones, y su fortaleza explica gran parte del éxito de las comunidades para resolver problemas sin recurrir constantemente a la coerción legal.",
            },
            {
              type: "paragraph",
              text: "Como cierre, conviene subrayar dos riesgos: el relativismo paralizante (todo vale según la costumbre) y el dogmatismo (imponer convicciones privadas como si fueran verdades indiscutibles). La educación moral madura evita ambos extremos al combinar principios firmes —dignidad, justicia, no daño— con sensibilidad al contexto y apertura al diálogo. Este equilibrio permite que las normas morales sigan siendo fuente de motivación y de legitimidad para el conjunto del orden normativo, en coherencia con los fines del derecho: paz social, protección de derechos y resolución pacífica de conflictos.",
            },
          ],
          subthemes: [
            {
              id: "2.2.1",
              numbering: "2.2.1",
              title: "Norma moral",
              content: [
                {
                  type: "paragraph",
                  text: "La norma moral regula la conducta desde el fuero interno de la persona, apelando a la conciencia y a la deliberación sobre el bien y el mal. Su obligatoriedad no proviene de una autoridad externa con poder de coacción, sino de la convicción íntima y de la educación moral recibida en la familia, la escuela y la comunidad. Por ello se dice que es autónoma: el sujeto se da a sí mismo la pauta de conducta al reconocer razones suficientes para actuar de cierta manera. El incumplimiento no conlleva sanción estatal, pero sí consecuencias psíquicas y sociales: culpa, remordimiento, pérdida de confianza. En contextos de vida cotidiana, la norma moral opera como brújula que orienta decisiones difíciles cuando el derecho guarda silencio o admite varias soluciones, favoreciendo honestidad, responsabilidad y solidaridad como virtudes públicas que, a la larga, abaratan costos de supervisión y fortalecen la cooperación.",
                },
                {
                  type: "paragraph",
                  text: "Definiciones doctrinales la describen como el conjunto de criterios valorativos que guían conductas desde la distinción entre lo correcto e incorrecto. Estas pautas se nutren de tradiciones, creencias y hábitos sedimentados, pero también evolucionan mediante reflexión crítica y experiencia social. A diferencia de la simple etiqueta, la moral pretende universalidad práctica: ‘actúa con honestidad’, ‘cumple tus compromisos’, ‘no dañes al prójimo’. Su cumplimiento voluntario es decisivo para la salud de una comunidad, porque reduce la necesidad de coerción y legitima las instituciones. La educación moral, así entendida, no impone dogmas cerrados; cultiva hábitos de deliberación, empatía y autocontrol que permiten reconocer razones que otros también podrían aceptar, base de una convivencia respetuosa en sociedades plurales.",
                },

                {
                  type: "accordion",
                  header: "Rasgos característicos",
                  open: false,
                  text: "Autónoma (se asume por convicción), unilateral (impone deberes sin correlato exigible), interior (se asienta en la conciencia), e incoercible (no admite imposición por la fuerza estatal).",
                },

                {
                  type: "paragraph",
                  text: "La relación entre moral y derecho es compleja: muchas leyes presuponen estándares morales mínimos (prohibición de daño injustificado, deber de veracidad en declaraciones, lealtad contractual), pero no toda inmoralidad debe convertirse en ilícito. El principio de intervención mínima aconseja reservar la coerción para bienes especialmente vulnerables o de alto interés público. Al mismo tiempo, la moral sirve como criterio interpretativo del derecho vigente: cuando un texto admite varias lecturas, se prefiere la que armoniza con valores constitucionales y derechos humanos. Esta interacción dinámica evita tanto el moralismo jurídico —que invade la intimidad— como el positivismo ciego —que olvida la razón de ser de las normas—, y mantiene abierto el diálogo entre convicción personal y exigencias de la vida en común.",
                },
                {
                  type: "paragraph",
                  text: "Ejemplos ilustran su alcance: decir la verdad aun cuando no hay sanción legal por mentir en contextos privados; devolver un bien encontrado sin obligación jurídica expresa; ayudar a quien lo necesita más allá de lo contractualmente debido. Estos comportamientos, motivados por principios y virtudes, sostienen la confianza social que luego facilita el cumplimiento del derecho positivo. En sentido inverso, hábitos de engaño, cinismo o oportunismo deterioran la cooperación y obligan a aumentar controles y sanciones, con altos costos para todos. Por eso, cultivar normas morales sólidas es una estrategia de desarrollo institucional, no solo un ideal ético abstracto.",
                },

                {
                  type: "accordion",
                  header: "Ejemplos frecuentes",
                  open: false,
                  text: "Ser honesto; cumplir promesas; respetar a los mayores; apoyar a las personas del entorno; actuar con prudencia ante conflictos de interés.",
                },

                {
                  type: "paragraph",
                  text: "Distinciones clásicas ayudan a situarla frente a otros órdenes: a) frente a la norma social, la moral no depende de la mirada ajena sino de la conciencia; b) frente a la religiosa, no requiere adscripción de fe y se justifica con razones públicas; c) frente a la jurídica, no prevé sanción estatal ni procedimientos de ejecución. Aun así, interactúa con todas: una cultura cívica robusta traduce convicciones morales en hábitos sociales y, cuando es necesario, en leyes. Esta triangulación da estabilidad a expectativas y protege bienes comunes. En síntesis, la norma moral es el primer eslabón de una cadena que va del carácter a las instituciones, y su fortaleza explica gran parte del éxito de las comunidades para resolver problemas sin recurrir constantemente a la coerción legal.",
                },
                {
                  type: "paragraph",
                  text: "Como cierre, conviene subrayar dos riesgos: el relativismo paralizante (todo vale según la costumbre) y el dogmatismo (imponer convicciones privadas como si fueran verdades indiscutibles). La educación moral madura evita ambos extremos al combinar principios firmes —dignidad, justicia, no daño— con sensibilidad al contexto y apertura al diálogo. Este equilibrio permite que las normas morales sigan siendo fuente de motivación y de legitimidad para el conjunto del orden normativo, en coherencia con los fines del derecho: paz social, protección de derechos y resolución pacífica de conflictos.",
                },
              ],
            },
            {
              id: "2.2.2",
              numbering: "2.2.2",
              title: "Norma religiosa",
              content: [
                {
                  type: "paragraph",
                  text: "Las normas religiosas son pautas de conducta derivadas de un conjunto de creencias, doctrinas y ritos que ordenan la relación del ser humano con lo divino y con su comunidad de fe. Su origen se atribuye a una autoridad sagrada —revelación, tradición, magisterio— y su justificación descansa en la obediencia a mandatos que expresan una visión del bien, la vida y la dignidad. A diferencia de la norma jurídica, su obligatoriedad no proviene del Estado, sino del compromiso libre de quienes profesan esa religión. Por ello, su incumplimiento no acarrea sanción estatal, aunque sí consecuencias espirituales (pecado, penitencia), disciplinarias dentro de la comunidad (amonestaciones, restricciones de participación) y sociales (pérdida de reputación entre correligionarios). Estas normas configuran estilos de vida, tiempos sagrados, prohibiciones alimentarias y exigencias rituales; también inspiran virtudes como la caridad, la templanza y la veracidad, que, cuando se internalizan, refuerzan la cooperación y la paz social. En sociedades plurales, el derecho protege la libertad religiosa, permitiendo que cada persona viva su fe sin imponerla a terceros, y trazando límites cuando prácticas religiosas lesionan derechos fundamentales o el orden público.",
                },
                {
                  type: "paragraph",
                  text: "Desde el punto de vista conceptual, pueden definirse como reglas de conducta cuyo fundamento es teológico o espiritual, dirigidas exclusivamente a los miembros de una confesión y explicitadas en fuentes como escrituras sagradas, catecismos, cánones y códigos de disciplina interna. Su destinatario es, por tanto, quien voluntariamente se adhiere a la comunidad y reconoce su autoridad. La heteronomía es aquí relativa: el creyente acepta preceptos dictados por una instancia superior, pero lo hace por convicción íntima; la sanción no es coercible por la fuerza estatal, sino que opera en la conciencia, en la esfera sacramental o en la pertenencia institucional. Ejemplos frecuentes incluyen la observancia de sacramentos en el catolicismo, las prescripciones dietéticas en el judaísmo y ciertas obligaciones de caridad presentes en múltiples religiones. En todos los casos, la norma religiosa pretende ordenar la vida a la luz de un bien trascendente, por lo que su lenguaje apela a virtudes, fines últimos y actos de culto, antes que a categorías jurídicas como nulidad, multa o pena privativa de libertad.",
                },

                {
                  type: "accordion",
                  header: "Alcance y límites en un Estado laico",
                  open: false,
                  text: "Protección de la libertad religiosa (creer, no creer, cambiar de religión, practicar en privado o en público). Límite: derechos fundamentales de terceros y orden público. La objeción de conciencia requiere cauces legales específicos y no puede vaciar de contenido derechos ajenos.",
                },

                {
                  type: "paragraph",
                  text: "Históricamente, las normas religiosas han influido en el desarrollo del derecho positivo: muchas instituciones jurídicas —matrimonio, descanso semanal, protección del necesitado— nacen de tradiciones religiosas y, con el tiempo, adquieren formulaciones seculares. Este trasvase no implica identidad: una vez positivizadas, las reglas se desprenden de su fundamento teológico y pasan a justificarse por razones públicas accesibles a creyentes y no creyentes. En sentido inverso, una religación excesiva del derecho a dogmas particulares amenaza el pluralismo y la igualdad; por ello, los Estados constitucionales garantizan neutralidad religiosa y exigen que las normas generales se justifiquen con argumentos compartibles. Así, la convivencia democrática articula dos vectores: (i) respeto a la conciencia y al culto; (ii) sujeción de todos a un marco jurídico común que protege bienes y derechos con independencia de creencias. Reconocer esta doble vía permite valorar el aporte ético de las religiones sin confundirlo con la obligación jurídica general.",
                },
                {
                  type: "paragraph",
                  text: "En la práctica cotidiana, las normas religiosas producen comportamientos verificables: celebración de festividades, observancia de ayunos, elección de vestimenta, prácticas de oración y rituales de paso. Su incumplimiento genera mecanismos internos de corrección y, en ocasiones, mediación comunitaria para reparar daños simbólicos o materiales. Muchas comunidades complementan sus preceptos con códigos de conducta que regulan convivencia, administración de recursos y resolución de disputas internas, aproximándose a formas de ‘derecho canónico’ o estatutos confesionales. Esta institucionalidad interna refuerza identidad, pertenencia y propósito, y puede cooperar con el orden estatal mediante convenios en materia educativa, cultural o asistencial, siempre bajo principio de legalidad y control de constitucionalidad.",
                },

                {
                  type: "accordion",
                  header: "Ejemplos típicos",
                  open: false,
                  text: "Catolicismo: cumplimiento de sacramentos y preceptos. Judaísmo: circuncisión y prescripciones dietéticas (kashrut). Tradiciones diversas: limosna y asistencia a necesitados.",
                },

                {
                  type: "paragraph",
                  text: "Para el estudiante de derecho, comprender las normas religiosas importa por tres razones: primero, porque esclarece el mapa completo de los órdenes normativos que influyen en la conducta; segundo, porque permite anticipar conflictos entre conciencia individual y deberes legales, orientando soluciones de acomodación razonable; y tercero, porque facilita el diálogo intercultural al reconocer que muchas controversias públicas se originan en axiologías distintas. La clave profesional es traducir diferencias de convicción en problemas jurídicos bien planteados —competencias, límites, garantías— y resolverlos con proporcionalidad, evitando tanto la imposición confesional como la hostilidad laicista. Una sociedad que logra este equilibrio protege libertades, fomenta cooperación y asegura que ninguna persona sea forzada a actuar contra conciencia sin razones públicas de peso, ni autorizada a invocar su fe para vulnerar derechos ajenos.",
                },
                {
                  type: "paragraph",
                  text: "En síntesis, la norma religiosa es un orden de deberes que guía la vida del creyente y fortalece comunidades de sentido. Su fuerza reside en la convicción y en la pedagogía de virtudes más que en la coacción. Cuando dialoga con el derecho desde el respeto mutuo, aporta capital social y ético; cuando pretende reemplazarlo o subordinarlo, fractura la igualdad ante la ley. El Estado constitucional ofrece el marco donde ambas dimensiones —fe y legalidad— coexisten y se enriquecen sin confundirse: derechos para todos, autonomía para cada culto y límites claros allí donde la libertad de uno invade la dignidad y los derechos de otros.",
                },
              ],
            },
            {
              id: "2.2.3",
              numbering: "2.2.3",
              title: "Norma o convencionalismo social",
              content: [
                {
                  type: "paragraph",
                  text: "Las normas sociales, también llamadas convencionalismos, son pautas de conducta que nacen de usos y costumbres compartidos y que facilitan la convivencia cotidiana. No emanan del Estado ni de una autoridad religiosa, sino de expectativas recíprocas que, al repetirse, adquieren estabilidad y fuerza orientadora: modos de saludo, reglas de cortesía, turnos en una fila, formas de vestir en contextos específicos, prácticas de higiene y cuidado de espacios comunes. Su incumplimiento no acarrea sanción jurídica, pero sí reacciones de desaprobación, reproche o exclusión, instrumentos con los que una comunidad protege bienes relacionales como el respeto, la confianza y la reputación. En su núcleo hay una lógica de coordinación: si todos seguimos ciertas pautas, reducimos fricciones y costos de interacción; por eso, aun siendo informales, las normas sociales tienen gran capacidad de ordenar comportamientos y de sostener, como un andamiaje invisible, actividades más complejas reguladas por el derecho positivo.",
                },
                {
                  type: "paragraph",
                  text: "Caracterizarlas ayuda a distinguirlas de otros órdenes. Son heterónomas en sentido sociológico —provienen del grupo—, unilaterales —imponen deberes sin correlato de exigibilidad jurídica—, exteriores —se manifiestan en la conducta observable— e incoercibles —no admiten imposición por la fuerza estatal—. Su sanción típica es el juicio social: gestos de desaprobación, pérdida de prestigio, invitaciones a corregir o, en casos graves, aislamiento. Estas reacciones funcionan como recordatorios de pertenencia y como mecanismos de aprendizaje cultural. Sin embargo, la presión social puede volverse tiránica si exige conformidad ciega; de ahí que el derecho establezca contrapesos cuando usos y costumbres lesionan derechos (discriminación, acoso, violencia simbólica). El desafío práctico es convertir lo mejor de las convenciones —cooperación espontánea, confianza— en hábitos inclusivos y respetuosos, y reformar aquellas prácticas que perpetúan injusticias, guiando el cambio con educación y con normas jurídicas cuando sea necesario.",
                },

                {
                  type: "accordion",
                  header: "Ejemplos cotidianos",
                  open: false,
                  text: "Asearse y cuidar la presentación personal; comer con la boca cerrada; esperar el turno en una fila; ceder el asiento; saludar y despedirse con fórmulas de cortesía apropiadas al contexto.",
                },

                {
                  type: "paragraph",
                  text: "En organizaciones, los convencionalismos sociales se traducen en ‘códigos de convivencia’ que, aunque informales, impactan fuertemente el clima laboral y la productividad: puntualidad en reuniones, escucha activa, respeto de turnos de palabra, cuidado de espacios compartidos, reconocimiento de logros. Cuando estos hábitos se alinean con reglamentos y políticas, las instituciones funcionan con menos fricción y requieren menos control; cuando se desalinean, proliferan conflictos y costos de supervisión. Desde la perspectiva del diseño de reglas, conviene mapear qué prácticas ya existen y cuáles convendría formalizar, por ejemplo, en manuales de convivencia o protocolos de servicio, siempre con mecanismos de retroalimentación que permitan corregir desviaciones sin crear burocracia innecesaria.",
                },
                {
                  type: "paragraph",
                  text: "El cambio en normas sociales suele ser gradual, impulsado por líderes de opinión, experiencias compartidas y evidencias de beneficio colectivo. Campañas de cultura cívica, educación temprana y ejemplos consistentes de autoridades ayudan a sustituir prácticas nocivas (littering, conducción temeraria, violencia en estadios) por conductas responsables. Las plataformas digitales introducen nuevas convenciones (netiqueta, privacidad, atribución de autoría) cuya infracción genera sanciones reputacionales rápidas. Aquí, derecho y convencionalismo interactúan: políticas de moderación, leyes de protección de datos y delitos informáticos codifican expectativas que ya circulan como usos en las comunidades en línea. Comprender esta interacción permite diseñar respuestas proporcionales y respetuosas de libertades, evitando pánicos morales y sobrerregulación.",
                },

                {
                  type: "accordion",
                  header: "Rasgos distintivos",
                  open: false,
                  text: "Origen social (usos y costumbres), sanción no jurídica (aprobación/reprobación), orientación a la cortesía y coordinación, flexibilidad según contexto cultural y temporal.",
                },

                {
                  type: "paragraph",
                  text: "Para el estudiante y el profesional, distinguir los convencionalismos sociales de las normas jurídicas y morales no es un detalle academicista: define estrategias de intervención. Un problema de convivencia escolar puede resolverse con educación y acuerdos de aula, no necesariamente con sanciones legales; una práctica discriminatoria arraigada quizá requiera, además, cambios normativos y medidas de protección para grupos vulnerables. El criterio operativo es evaluar naturaleza del bien afectado, grado de daño y posibilidades de corrección voluntaria. Una cultura cívica madura no desprecia las convenciones: las cultiva y las renueva, integrándolas a un ecosistema normativo donde moral orienta, convencionalismo coordina y derecho garantiza, en beneficio de una convivencia digna y eficiente.",
                },
                {
                  type: "paragraph",
                  text: "En suma, las normas sociales son la ‘gramática’ de la vida cotidiana. No reemplazan a la moral ni al derecho, pero hacen posible que ambos se apliquen con economía de fuerzas: allí donde la cortesía y el respeto son hábitos, la ley interviene menos y la moral florece en ejemplos visibles. Reformarlas exige paciencia, pedagogía y coherencia, virtudes que convierten pequeños gestos —hacer fila, cuidar el espacio común, hablar con respeto— en cimientos de confianza y productividad en cualquier comunidad humana.",
                },
              ],
            },
            {
              id: "2.2.4",
              numbering: "2.2.4",
              title: "Norma jurídica",
              content: [
                {
                  type: "paragraph",
                  text: "La norma jurídica es la pauta de conducta emanada de autoridad competente del Estado, general y abstracta, dotada de obligatoriedad y coercibilidad. Su finalidad es proteger bienes jurídicos, resolver conflictos y asegurar condiciones de justicia y paz social. Se expresa en textos normativos —Constitución, leyes, reglamentos— y en decisiones jurisdiccionales que, en ciertos sistemas, integran y precisan el contenido del ordenamiento. A diferencia de las normas morales, religiosas o sociales, la norma jurídica cuenta con mecanismos institucionales de aplicación —administrativos y jurisdiccionales— y con sanciones externas previstas para el caso de incumplimiento, que van desde multas y nulidades hasta penas privativas de libertad. Su legitimidad deriva del procedimiento de creación, del respeto a la jerarquía normativa y de su compatibilidad con los derechos humanos. Por ello, interpretar y aplicar el derecho exige articular legalidad, razonabilidad y proporcionalidad, de modo que el poder no se convierta en arbitrariedad.",
                },
                {
                  type: "paragraph",
                  text: "Entre sus rasgos destacan la heteronomía —es impuesta por una instancia distinta del destinatario—, la bilateralidad —reconoce correlativamente derechos y deberes entre sujetos—, el carácter exterior —regula conductas observables— y la coercibilidad —admite uso legítimo de la fuerza para asegurar cumplimiento—. Estos rasgos no operan en el vacío: presuponen instituciones capaces de legislar con técnica adecuada, administrar con imparcialidad y juzgar con independencia. Cuando alguna de estas condiciones falla, la eficacia de la norma se debilita y crecen incentivos a incumplir. Por eso, la teoría distingue entre validez (pertenencia al sistema), vigencia (entrada en fuerza en tiempo y espacio) y eficacia (grado real de cumplimiento). Un orden jurídico sano se ocupa de las tres: produce normas válidas, las promulga y difunde correctamente, y genera capacidades para que la ciudadanía pueda conocerlas y acatarlas sin costos desproporcionados.",
                },

                {
                  type: "accordion",
                  header: "Características de las normas (pares clásicos)",
                  open: false,
                  text: "Autónoma/Heterónoma; Unilateral/Bilateral; Interior/Exterior; Incoercible/Coercible. La norma jurídica es típicamente heterónoma, bilateral, exterior y coercible.",
                },

                {
                  type: "paragraph",
                  text: "La estructura típica de una disposición jurídica combina un supuesto de hecho con una consecuencia normativa: ‘Si ocurre X, entonces debe/queda prohibido/permitido Y’. Esta forma permite prever efectos y, por ende, planear conductas. El sistema completa la disposición con reglas de competencia (quién puede hacer qué), de procedimiento (cómo debe hacerse) y de interpretación (cómo resolver dudas o antinomias). Cuando dos normas colisionan, se aplican criterios de jerarquía (la superior prevalece sobre la inferior), especialidad (la especial sobre la general) y cronología (la posterior sobre la anterior). La práctica judicial, a través de precedentes, añade estabilidad, pues ofrece razones públicas que pueden replicarse en casos análogos, mejorando previsibilidad y trato igual.",
                },
                {
                  type: "paragraph",
                  text: "En la vida diaria, la norma jurídica se concreta en comportamientos como pagar impuestos, respetar límites de velocidad, cumplir contratos y observar medidas de seguridad e higiene. Su incumplimiento acarrea sanciones que, además de castigar, buscan prevenir daños, reparar a víctimas y disuadir a terceros. De ahí la importancia de diseñar sanciones proporcionales y de asegurar vías efectivas de defensa: debido proceso, presunción de inocencia, derecho de audiencia y recursos. La confianza ciudadana en el derecho depende menos de la severidad que de la equidad y consistencia en la aplicación de las reglas. Un sistema percibido como arbitrario o corrupto erosiona la motivación a cumplir incluso entre quienes desean hacerlo.",
                },

                {
                  type: "accordion",
                  header: "Ejemplos y efectos",
                  open: false,
                  text: "Ejemplos: pagar impuestos, respetar el semáforo, cumplir contratos. Efectos del incumplimiento: multas, nulidades, sanciones administrativas o penales. Finalidad: seguridad jurídica, justicia y paz social.",
                },

                {
                  type: "paragraph",
                  text: "El estudio de la norma jurídica incluye sus ámbitos de validez: espacial (dónde aplica), temporal (desde cuándo y hasta cuándo), material (sobre qué materias) y personal (a quiénes obliga). Estos ámbitos previenen conflictos de competencia, evitan vacíos y garantizan que las reglas respondan al contexto. También abarca la técnica legislativa —claridad, precisión, sistematicidad— y la mejora regulatoria —evaluar costos y beneficios, impacto en grupos, alternativas menos gravosas—. Para el profesional, dominar estas nociones no es un lujo teórico: permite diseñar contratos robustos, políticas internas eficaces y estrategias de cumplimiento realistas. La norma jurídica es, en suma, la columna vertebral de la convivencia organizada: convierte expectativas en garantías, canaliza desacuerdos por vías pacíficas y protege, con fuerza legítima, aquello que una comunidad considera digno de tutela.",
                },
                {
                  type: "paragraph",
                  text: "Como cierre, conviene subrayar que la norma jurídica no actúa sola: requiere apoyo de la moral (que motiva convicciones) y de los convencionalismos sociales (que facilitan coordinación). Cuando estos órdenes se alinean, el cumplimiento es más alto y menos costoso; cuando se contradicen, el sistema entero sufre tensiones que pueden desembocar en desobediencia o en sobrerregulación. El objetivo de un buen diseño institucional es mantener ese alineamiento mediante educación cívica, participación pública, transparencia y rendición de cuentas, de modo que la ciudadanía perciba al derecho no como un obstáculo, sino como una herramienta de libertad, igualdad y prosperidad compartida.",
                },
              ],
            },
          ],
        },
        {
          id: "2.3",
          numbering: "2.3",
          title: "Ámbitos de validez de las normas jurídicas",
          content: [
            {
              type: "paragraph",
              text: "Los ámbitos de validez delimitan el alcance de aplicación de una norma para evitar ambigüedades y conflictos. En términos operativos, toda disposición se define por su ámbito espacial (dónde rige), temporal (desde y hasta cuándo rige), material (sobre qué materias versa) y personal (a quiénes obliga o faculta). Esta cuadrícula permite planear, ejecutar y controlar la acción pública y privada con previsibilidad, pues cada sujeto puede anticipar las consecuencias jurídicas de su conducta al identificar si está dentro del espacio, tiempo, materia y universo de destinatarios previstos. En un orden democrático, esta claridad no es un lujo técnico: es condición de la seguridad jurídica y del principio de legalidad, que prohíben sancionar o exigir más allá de lo que el ordenamiento autoriza de manera expresa y comprensible.",
            },
            {
              type: "paragraph",
              text: "El ámbito espacial localiza la norma en un territorio y una jurisdicción concretos: federación, entidad federativa, municipio, o incluso zonas especiales (fronterizas, ambientales, fiscales). Esta localización interactúa con reglas de competencia y con regímenes de coordinación entre niveles de gobierno. El ámbito temporal, por su parte, se expresa en entrada en vigor, vigencias parciales, cláusulas de expiración, reformas y derogaciones, además de supuestos de retroactividad prohibida o excepcionalmente permitida cuando favorece a la persona. El ámbito material delimita la materia: civil, penal, administrativo, laboral, mercantil, ambiental, entre otras, para ordenar la especialización y evitar solapamientos. Finalmente, el ámbito personal identifica sujetos obligados o beneficiados: personas físicas, morales, autoridades, grupos en situación de vulnerabilidad, gremios o sectores regulados.",
            },

            {
              type: "accordion",
              header: "Mapa de ámbitos y preguntas guía",
              open: false,
              text: "Espacial: ¿En qué territorio y jurisdicción? Temporal: ¿Desde cuándo y hasta cuándo? Material: ¿Qué materias o actividades cubre? Personal: ¿Quiénes están obligados o facultados?",
            },

            {
              type: "paragraph",
              text: "Los ámbitos no operan aisladamente: se combinan. Una licencia ambiental (materia) de un estado (espacio) rige desde su publicación (tiempo) para titulares y autoridades competentes (personas). Esta combinación requiere técnica normativa: si se deroga una norma temporalmente sin prever régimen transitorio, pueden surgir vacíos; si se invade materia reservada a otro orden de gobierno, habrá invalidez por incompetencia; si se extiende el ámbito personal más allá de lo razonable, se lesionan principios de igualdad y proporcionalidad. Por eso, además de definir ámbitos, el legislador debe cuidar consistencia y el intérprete debe armonizar la lectura con Constitución y tratados de derechos humanos.",
            },
            {
              type: "paragraph",
              text: "En la práctica, los ámbitos de validez orientan decisiones cotidianas. Quien celebra un contrato interestatal debe preguntar qué ley material es aplicable y en qué tribunal se dirimirán controversias (espacio y materia). Una política interna de una empresa multinacional deberá revisarse a la luz de leyes locales de protección de datos y trabajo (espacio y materia) y de su vigencia (tiempo), además de delimitar qué personas quedan alcanzadas (personal). Los errores típicos incluyen aplicar una norma derogada, extrapolar reglas de una jurisdicción a otra, invocar una norma fuera de su materia o exigir a sujetos no contemplados. El profesional competente audita sistemáticamente estos cuatro ejes antes de actuar o aconsejar.",
            },

            {
              type: "accordion",
              header: "Errores frecuentes a evitar",
              open: false,
              text: "Citar normas sin verificar vigencia; confundir jurisdicción territorial con competencia material; omitir regímenes transitorios; extender obligaciones a sujetos no previstos; ignorar cláusulas de excepción o ámbitos personales diferenciados (menores, servidores públicos, sectores regulados).",
            },

            {
              type: "paragraph",
              text: "Las controversias sobre ámbitos suelen resolverse con reglas de preferencia y principios. En caso de conflicto espacial entre orden federal y local, prevalece el competente según la Constitución; ante choque temporal, rige el principio tempus regit actum y los regímenes transitorios; ante solapamiento material, se acude a especialidad y jerarquía; frente a dudas personales, se atiende a la ratio legis y a cláusulas de inclusión/exclusión. El control de constitucionalidad y convencionalidad funciona como salvaguarda última: una norma válida en sus ámbitos no puede desconocer derechos humanos ni el reparto de competencias. Esta arquitectura asegura que el derecho sea instrumento de coordinación, no fuente de confusión.",
            },
            {
              type: "paragraph",
              text: "Finalmente, los ámbitos de validez contribuyen a la calidad regulatoria: facilitan medir impacto, distribuir responsabilidades y diseñar sanciones proporcionales. Cuando el texto normativo explicita con precisión los cuatro ámbitos, las autoridades ejecutan mejor, los particulares cumplen con menor costo y los tribunales reducen litigios innecesarios. Por el contrario, ámbitos nebulosos multiplican interpretaciones, incentivan arbitrariedad y alimentan desconfianza. La técnica legislativa y la práctica interpretativa deben, por ello, tomarlos como un checklist ineludible en toda creación, reforma y aplicación del derecho.",
            },
          ],
          subthemes: [
            {
              id: "2.3.1",
              numbering: "2.3.1",
              title: "Espacial",
              content: [
                {
                  type: "paragraph",
                  text: "El ámbito espacial identifica el territorio donde una norma despliega sus efectos: país, entidad federativa, municipio, zona económica especial o áreas con régimen particular (puertos, aeropuertos, reservas naturales). Esta localización descansa en el principio de territorialidad del derecho público y en reglas de competencia que reparten materias entre niveles de gobierno. Su función práctica es doble: (i) comunicar de manera inteligible a los destinatarios dónde deben cumplir o pueden ejercer un derecho; (ii) limitar la actuación de las autoridades a su jurisdicción, previniendo extralimitaciones. El espacio de validez, además, interactúa con la movilidad de personas y bienes, lo que obliga a prever mecanismos de coordinación intergubernamental y reconocimiento de actos emitidos por otras autoridades dentro del Estado federal.",
                },
                {
                  type: "paragraph",
                  text: "No todo es territorialidad estricta. Existen supuestos de extraterritorialidad o efectos fuera del territorio por razones de nacionalidad, protección de bienes jurídicos nacionales, o compromisos internacionales (por ejemplo, delitos cometidos en el extranjero con efectos en el país). En materias privadas, las reglas de Derecho internacional privado resuelven conflictos de leyes y determinan jurisdicción competente, evitando vacíos o dobles imposiciones. En la vida cotidiana, estas distinciones explican por qué una licencia o un permiso pueden ser válidos en un estado pero no en otro, o por qué una disposición municipal no puede contradecir una ley estatal o federal en materias reservadas. La clave profesional es verificar siempre la base de competencia y el territorio de aplicación antes de exigir o prometer efectos jurídicos.",
                },

                {
                  type: "accordion",
                  header: "Preguntas clave para auditar el espacio",
                  open: false,
                  text: "¿Cuál es la autoridad competente? ¿Cuál es el territorio de aplicación? ¿Hay zonas o regímenes especiales? ¿Existen acuerdos de coordinación o reconocimiento mutuo?",
                },

                {
                  type: "paragraph",
                  text: "El ejemplo clásico ilustra el alcance: las leyes de tránsito de la Ciudad de México rigen dentro de su territorio y no en entidades vecinas; quien conduce fuera debe ajustarse a las reglas locales. Los permisos de uso de suelo, las licencias de funcionamiento y las regulaciones ambientales municipales siguen lógica análoga: su validez es espacialmente acotada y su incumplimiento se evalúa con base en ordenanzas del lugar de comisión. A nivel judicial, la competencia también tiene un componente espacial: juzgados y tribunales conocen asuntos según el territorio asignado por la ley orgánica y por las reglas de turnos, lo que garantiza cercanía y acceso a la justicia. Un error frecuente es elegir un foro incompetente, con la consiguiente nulidad de actuaciones y pérdida de tiempo y recursos.",
                },
                {
                  type: "paragraph",
                  text: "En la gestión pública y empresarial, mapear el ámbito espacial permite planificar operaciones y cumplimiento normativo. Empresas con presencia multisitio deben armonizar políticas internas con marcos locales de protección civil, seguridad e higiene, residuos y horarios comerciales. Gobiernos subnacionales, por su parte, coordinan políticas con la federación para evitar contradicciones que obstaculicen inversiones o servicios. Las smart cities añaden capas de regulación espacial mediante ordenanzas sobre movilidad, datos urbanos y uso del espacio público, que demandan enfoques integrados entre dependencias. En todos los casos, el profesional del derecho actúa como arquitecto de coherencia espacial, evitando superposiciones y zonas grises.",
                },

                {
                  type: "accordion",
                  header: "Buenas prácticas de diseño espacial",
                  open: false,
                  text: "Definir con precisión el territorio; publicar mapas y anexos; coordinar con normas colindantes; prever reconocimiento de actos; evaluar impactos fronterizos; establecer cláusulas de prevalencia y solución de controversias.",
                },

                {
                  type: "paragraph",
                  text: "Finalmente, el ámbito espacial debe leerse a la luz de la supremacía constitucional y del bloque de convencionalidad: ninguna entidad puede, bajo el pretexto de su territorio, desconocer derechos humanos ni invadir competencias federales. La técnica de validez espacial, bien aplicada, potencia la autonomía local al tiempo que preserva la unidad del ordenamiento. Así se garantiza que la diversidad territorial conviva con la igualdad de derechos y con la eficacia del sistema jurídico en su conjunto.",
                },
              ],
            },
            {
              id: "2.3.2",
              numbering: "2.3.2",
              title: "Temporal",
              content: [
                {
                  type: "paragraph",
                  text: "El ámbito temporal fija el periodo de vigencia de una norma: fecha de entrada en vigor, duración, eventuales prórrogas y fecha de derogación o abrogación. Esta dimensión traduce el principio de seguridad jurídica en tiempo, evitando que las personas queden sujetas a reglas inciertas o retroactivas. La técnica legislativa utiliza instrumentos como vacatio legis (lapso entre publicación y vigencia), regímenes transitorios (para transición ordenada entre marcos jurídicos) y cláusulas sunset (expiración automática salvo renovación), útiles cuando se regulan situaciones cambiantes o se experimenta con políticas públicas. El operador jurídico debe dominar estas herramientas para asesorar sobre cumplimiento, diseñar calendarios de implementación y litigar con base en reglas aplicables en el momento de los hechos (tempus regit actum).",
                },
                {
                  type: "paragraph",
                  text: "La retroactividad es, en principio, prohibida cuando perjudica a las personas, salvo excepciones favorables (por ejemplo, la ley penal más benigna). Esta prohibición protege expectativas legítimas y evita que el poder normativo deshaga situaciones ya consolidadas. La irretroactividad convive con supuestos de aplicación inmediata de normas procesales o de orden público, lo cual exige distinguir entre relaciones jurídicas en curso y consumadas. En el ámbito administrativo y fiscal, los cambios de tarifa, requisitos o procedimientos deben respetar plazos razonables y publicarse adecuadamente para no sorprender a los contribuyentes. La claridad temporal también facilita evaluar políticas: sin fechas definidas, es imposible medir resultados, asignar responsabilidades y exigir rendición de cuentas.",
                },

                {
                  type: "accordion",
                  header: "Checklist temporal",
                  open: false,
                  text: "¿Publicación y vacatio? ¿Rige de inmediato o con transición? ¿Hay cláusula de expiración? ¿Deroga o modifica otras normas? ¿Cómo trata hechos iniciados antes de su vigencia?",
                },

                {
                  type: "paragraph",
                  text: "Ejemplos ilustran su importancia: una ley fiscal aplicable solo durante un ejercicio no puede cobrarse fuera de ese periodo; una reforma laboral que introduce nuevos derechos debe prever plazos para adecuar contratos y capacitaciones; un programa de estímulos con fecha de término exige reglas claras para solicitudes presentadas al filo del cierre. En litigios, la parte exitosa suele ser quien documenta mejor el calendario normativo: cuándo se publicó, desde cuándo rigió, qué transitorios regularon la transición y qué disposiciones quedaron derogadas. Este control temporal, aunque minucioso, reduce drásticamente incertidumbre y costos de cumplimiento.",
                },
                {
                  type: "paragraph",
                  text: "En investigación y docencia, enseñar el ámbito temporal refuerza competencias de lectura normativa: identificar encabezados con fechas, transitorios, tablas de derogaciones, notas de vigencia y reformas. La práctica profesional se beneficia al incorporar sistemas de alertas de cambios normativos y matrices de aplicabilidad por periodos, especialmente en sectores regulados con alta frecuencia de actualización (financiero, sanitario, ambiental). La alfabetización temporal evita tanto incumplimientos involuntarios como oportunismos que explotan zonas grises en perjuicio del interés público o de la competencia leal.",
                },

                {
                  type: "accordion",
                  header: "Buenas prácticas para transitorios",
                  open: false,
                  text: "Diseñar reglas simples y calendarizadas; definir claramente qué ocurre con procedimientos en curso; establecer fechas de corte; evitar superposiciones y vacíos; comunicar guías de implementación a autoridades y particulares.",
                },

                {
                  type: "paragraph",
                  text: "Como síntesis, el ámbito temporal convierte el derecho en un arte de secuencias: ninguna obligación o derecho existe en abstracto, sino en una línea de tiempo que debe ser inteligible. Atender a esta dimensión es proteger expectativas legítimas, evitar arbitrariedad y asegurar que el cambio normativo —inevitable en sociedades dinámicas— ocurra sin sacrificar la confianza en las instituciones.",
                },
              ],
            },
            {
              id: "2.3.3",
              numbering: "2.3.3",
              title: "Material",
              content: [
                {
                  type: "paragraph",
                  text: "El ámbito material define la materia o el objeto sobre el que recae la regulación: contratos, propiedad, delitos, procedimientos administrativos, seguridad e higiene, medio ambiente, competencia económica, datos personales, entre otras. Esta delimitación promueve especialización, evita solapamientos y permite a las personas identificar con rapidez el conjunto de reglas aplicables a una actividad. En sistemas federales, la materia es, además, criterio para distribuir competencias: el texto constitucional asigna ciertos temas a la federación, otros a estados y municipios. Por ello, confundir materia no solo genera interpretaciones erradas, también invalidez por incompetencia. La dogmática jurídica organiza cada materia en categorías, instituciones y principios propios, lo que facilita la argumentación y la resolución de casos con consistencia.",
                },
                {
                  type: "paragraph",
                  text: "Las materias no son compartimentos estancos; existen zonas de intersección que exigen coordinación normativa: por ejemplo, la protección de datos personales cruza derecho administrativo, civil, laboral y constitucional; el desarrollo urbano integra ordenamiento territorial, medio ambiente y propiedad; el comercio electrónico conecta consumidores, mercantil y fiscal. En estas intersecciones, la regla de especialidad y los criterios de jerarquía ayudan a decidir qué norma prevalece, pero el profesional debe, sobre todo, construir lecturas armónicas que eviten contradicciones y apliquen el máximo de protección de derechos. La claridad material también orienta el diseño institucional: agencias reguladoras se crean con competencias temáticas definidas, y tribunales especializados resuelven controversias complejas con mayor pericia técnica.",
                },

                {
                  type: "accordion",
                  header: "Claves para delimitar materia",
                  open: false,
                  text: "Identificar el bien jurídico protegido; ubicar la institución principal; revisar definiciones y objetivos de la ley; detectar remisiones a otras normas; aplicar reglas de especialidad y jerarquía cuando proceda.",
                },

                {
                  type: "paragraph",
                  text: "Ejemplos cotidianos ayudan a ilustrar: el Código Penal aborda delitos y penas (materia penal), mientras que el Código Civil regula personas, familia, bienes, sucesiones y obligaciones (materia civil). Una norma de seguridad e higiene laboral pertenece a la materia laboral y administrativa, con sanciones específicas; una norma de etiquetado alimentario entra en materia sanitaria y de consumidores. Confundir estas materias origina errores de cumplimiento, como invocar precedentes penales para un conflicto netamente contractual, o exigir requisitos administrativos ajenos a una actividad. El operador jurídico competente construye mapas de materia para cada proyecto y los revisa ante reformas o nuevas actividades.",
                },
                {
                  type: "paragraph",
                  text: "En la enseñanza, el ámbito material sirve para estructurar el plan de estudios y para ejercitar la clasificación de casos. En la práctica, permite diseñar cláusulas contractuales que remiten a la legislación aplicable correcta, preparar estrategias de cumplimiento multisector y anticipar autoridades competentes. En el litigio, delimitar la materia correcta ahorra años de trámite, pues dirige el asunto al órgano especializado y al marco normativo adecuado. Por estas razones, la materia no es una etiqueta cualquiera: es la brújula que ordena el razonamiento jurídico y la acción institucional.",
                },

                {
                  type: "accordion",
                  header: "Errores a evitar",
                  open: false,
                  text: "Forzar una materia para beneficiarse de un foro; ignorar remisiones a leyes especiales; mezclar categorías de distintas ramas; construir analogías sin atender diferencias sustantivas.",
                },

                {
                  type: "paragraph",
                  text: "En síntesis, el ámbito material convierte el mosaico de normas en un sistema comprensible al agruparlas por temas coherentes. Al identificar correctamente la materia, se fortalecen la calidad regulatoria, la seguridad jurídica y la eficacia del cumplimiento, al tiempo que se reduce el litigio por confusiones evitables.",
                },
              ],
            },
            {
              id: "2.3.4",
              numbering: "2.3.4",
              title: "Personal",
              content: [
                {
                  type: "paragraph",
                  text: "El ámbito personal determina a qué sujetos se dirige la norma: personas físicas, morales, autoridades, gremios, sectores regulados o grupos en situación de vulnerabilidad. Establece, además, si el deber u otorgamiento de derecho es general o si se reserva a categorías específicas (por ejemplo, servidores públicos, concesionarios, menores de edad, consumidores). Esta delimitación protege la igualdad al tratar igual a los iguales y distinto a los desiguales cuando hay razones suficientes. También previene abusos, pues impide extender obligaciones a quienes el legislador no contempló o negar derechos a quienes sí fueron previstos. En términos prácticos, el ámbito personal exige revisar definiciones legales de ‘sujeto obligado’, ‘autoridad’, ‘particular’, ‘titular’, entre otras, y las cláusulas de inclusión o exclusión expresas.",
                },
                {
                  type: "paragraph",
                  text: "En materia laboral, por ejemplo, las normas protegen a trabajadores en relación de subordinación respecto de empleadores; en materia de consumidores, protegen a personas físicas o morales que adquieren bienes o servicios como destinatarios finales; en transparencia, obligan a sujetos públicos y a particulares que reciben recursos públicos o ejercen funciones equiparables. El error habitual consiste en confundir categorías y aplicar una norma de consumidores a relaciones entre empresas o pretender derechos laborales sin relación laboral. Distinguir correctamente el ámbito personal evita litigios y permite diseñar contratos, políticas y programas que asignen deberes y beneficios a quienes corresponde, con proporcionalidad y racionalidad.",
                },

                {
                  type: "accordion",
                  header: "Guía para delimitar destinatarios",
                  open: false,
                  text: "Revisar definiciones legales; identificar cláusulas de inclusión/exclusión; comprobar si hay regímenes especiales (menores, personas con discapacidad, pueblos indígenas); verificar si la norma alcanza a autoridades y a particulares.",
                },

                {
                  type: "paragraph",
                  text: "El ámbito personal también protege a minorías y grupos históricamente discriminados mediante acciones afirmativas y ajustes razonables. Estas medidas, lejos de vulnerar igualdad, la realizan materialmente al remover barreras que impiden ejercicio real de derechos. El diseño cuidadoso de destinatarios incluye prever salvaguardas para evitar efectos adversos no deseados y mecanismos de revisión periódica. En sentido inverso, algunas normas limitan derechos de ciertas categorías por razones justificadas (por ejemplo, inhabilidades para servidores públicos), lo que obliga a justificar con estándares de proporcionalidad y a prever vías de impugnación. Esta arquitectura asegura que las diferencias de trato tengan base constitucional y fines legítimos, no preferencias arbitrarias.",
                },
                {
                  type: "paragraph",
                  text: "En la vida cotidiana, el ámbito personal clarifica expectativas: quién debe presentar declaraciones, quién puede acceder a beneficios, quién está obligado a informar, quién tiene derecho a representación o defensa. En procedimientos, delimita quiénes son parte, terceros interesados o testigos, con consecuencias en cargas probatorias y recursos. En cumplimiento corporativo, define a qué empleados o unidades aplica una política y qué proveedores quedan sujetos a cláusulas de integridad. La precisión con los destinatarios reduce costos de comunicación, enforcement y litigio, pues cada quien sabe qué se espera de él o de ella.",
                },

                {
                  type: "accordion",
                  header: "Errores comunes y cómo evitarlos",
                  open: false,
                  text: "Asumir que toda persona es destinataria; no verificar definiciones legales; ignorar regímenes especiales; extender obligaciones por analogía sin base normativa expresa.",
                },

                {
                  type: "paragraph",
                  text: "En conclusión, el ámbito personal traduce la idea de igualdad en reglas operativas: define a quién alcanza una norma y por qué. Bien diseñado, fortalece legitimidad y eficacia del derecho; mal trazado, genera injusticias y conflictos. Por ello, cada creación o reforma normativa debe explicitar con precisión sus destinatarios y revisar su congruencia con los demás ámbitos, garantizando coherencia del sistema y protección efectiva de derechos.",
                },
              ],
            },
          ],
        },
        {
          id: "2.4",
          numbering: "2.4",
          title: "Noción y trascendencia del derecho",
          content: [
            {
              type: "paragraph",
              text: "El derecho puede comprenderse como el conjunto de normas generales y abstractas que regulan la conducta humana en sociedad con pretensión de justicia, seguridad y bien común. No se trata de un inventario de prohibiciones y permisos aislados, sino de un sistema que articula fuentes (Constitución, leyes, reglamentos, jurisprudencia), procedimientos y autoridades para ordenar la convivencia y resolver conflictos por vías pacíficas. Su noción incorpora tres dimensiones que conviene distinguir: validez (pertenencia al orden jurídico conforme a reglas de producción), vigencia (entrada en fuerza en un tiempo y espacio determinados) y eficacia (grado real de cumplimiento y aplicación). A partir de esta tríada, el derecho se revela como técnica civilizatoria: reduce la violencia, estabiliza expectativas y canaliza desacuerdos en formatos racionales de decisión. Por ello se le estudia no solo como texto, sino como institución viva que impacta la experiencia cotidiana de las personas y de las organizaciones.",
            },
            {
              type: "paragraph",
              text: "La trascendencia del derecho se observa en su capacidad para proteger bienes esenciales: vida, integridad, libertad, propiedad, ambiente, orden público, competencia leal. Al reconocer derechos y establecer procedimientos de tutela, convierte aspiraciones morales en garantías exigibles. Su fuerza transformadora depende de la legitimidad del proceso legislativo y jurisdiccional, de la calidad técnica de las normas y de la capacidad institucional para aplicarlas sin arbitrariedad. Un derecho opaco o contradictorio erosiona la confianza; uno claro y justo reduce costos de transacción y estimula cooperación. En democracias constitucionales, además, el derecho limita al poder: distribuye competencias, somete autoridades a controles y abre cauces para que la ciudadanía impugne decisiones injustas, consolidando un círculo virtuoso entre legalidad, derechos y rendición de cuentas.",
            },

            {
              type: "accordion",
              header: "Funciones esenciales del Derecho",
              open: false,
              text: "(i) Ordenar la convivencia; (ii) proteger derechos y bienes jurídicos; (iii) resolver conflictos; (iv) distribuir y limitar el poder; (v) promover fines públicos con proporcionalidad y control.",
            },

            {
              type: "paragraph",
              text: "El derecho refleja, además, la cultura y la historia de un pueblo: traduce en reglas los valores predominantes y, al operar, los reconfigura. De ahí que no existan sistemas jurídicos idénticos, aunque compartan principios comunes. La comparación entre ordenamientos muestra distintas maneras de equilibrar libertad e igualdad, eficiencia y equidad, estabilidad e innovación. Esta diversidad no relativiza los derechos humanos —núcleo duro del constitucionalismo contemporáneo—, pero sí exige sensibilidad contextual para interpretar y aplicar normas en sociedades concretas. El profesional competente evita trasplantes mecánicos: adapta soluciones a instituciones y prácticas locales, cuidando que la importación normativa no rompa el tejido social ni genere efectos no deseados.",
            },
            {
              type: "paragraph",
              text: "La trascendencia práctica del derecho se aprecia en organizaciones y mercados. Contratos, reglamentos internos, licencias, permisos, políticas de privacidad y cumplimiento son expresiones del orden jurídico en la vida económica. Cuando los marcos regulan con claridad y proporcionalidad, florecen la inversión y la innovación; cuando son laberínticos o inestables, se multiplican costos de agencia, corrupción y litigiosidad. Por ello, la mejora regulatoria —evaluar impactos, consultar actores, simplificar trámites, digitalizar procedimientos— es una política pública clave que actualiza la promesa del derecho: facilitar proyectos legítimos y sancionar conductas lesivas sin frenar el dinamismo social.",
            },

            {
              type: "accordion",
              header: "Tríada operativa: validez, vigencia y eficacia",
              open: false,
              text: "Validez: pertenencia al sistema; Vigencia: fuerza obligatoria en tiempo y espacio; Eficacia: cumplimiento real. Buen diseño normativo atiende a las tres a la vez.",
            },

            {
              type: "paragraph",
              text: "En el plano educativo y ciudadano, el derecho pauta expectativas recíprocas: todos saben qué pueden exigir y qué deben cumplir. Esta claridad favorece soluciones cooperativas y reduce la necesidad de fuerza. La alfabetización jurídica —entender derechos, procedimientos básicos y autoridades competentes— empodera a las personas para prevenir abusos y utilizar correctamente las instituciones. Del mismo modo, la cultura de legalidad —aprecio por las reglas justas y por la rendición de cuentas— fortalece el tejido cívico y hace sostenible el cumplimiento. Sin ese soporte cultural, ninguna norma funciona: la letra de la ley, sin convicciones y capacidades, se convierte en formalismo vacío.",
            },
            {
              type: "paragraph",
              text: "Como síntesis, la noción de derecho integra razón práctica y organización institucional: convierte razones en reglas, y reglas en decisiones que afectan vidas. Su trascendencia radica en ofrecer un lenguaje común para resolver conflictos en sociedades plurales, asegurando que las diferencias no desemboquen en violencia, sino en debate con límites y resultados revisables. Estudiarlo es aprender a argumentar, a ponderar y a construir acuerdos duraderos que honren la dignidad de las personas y el interés general.",
            },
          ],
        },
        {
          id: "2.4.1",
          numbering: "2.4.1",
          title: "Clasificación del derecho",
          content: [
            {
              type: "paragraph",
              text: "Clasificar el derecho es ordenar un universo complejo de normas, instituciones y procedimientos para facilitar su comprensión y aplicación. No se trata de una taxonomía caprichosa, sino de un mapa conceptual que permite ubicar rápidamente qué reglas rigen un caso, qué principios orientan la interpretación y qué autoridades resultan competentes. Las clasificaciones más utilizadas en este módulo son las parejas conceptuales: derecho natural/derecho vigente, derecho objetivo/derecho subjetivo, y derecho sustantivo/derecho adjetivo. Cada una ilumina un ángulo distinto: la primera contrasta fundamentos (moralidad y justicia frente a positividad y vigencia); la segunda distingue sistema de normas frente a facultades individuales; la tercera separa contenido de derechos y obligaciones respecto de los cauces procesales para hacerlos valer.",
            },
            {
              type: "paragraph",
              text: "El valor pedagógico de clasificar reside en prevenir errores interpretativos. Sin distinguir entre derecho objetivo y subjetivo, se confunden facultades con mandatos generales; sin separar sustantivo y adjetivo, se mezclan contenidos con procedimientos y se litiga en foros inadecuados; sin diferenciar natural y vigente, se desatienden principios de justicia o, en el extremo opuesto, se absolutiza el texto al margen de su legitimidad. La clasificación, por tanto, no es una camisa de fuerza, sino una guía para razonar con precisión, decidir con proporcionalidad y argumentar con transparencia frente a terceros.",
            },

            {
              type: "accordion",
              header: "Parejas conceptuales de referencia",
              open: false,
              text: "Natural/Vigente: fundamento axiológico vs. positividad. Objetivo/Subjetivo: sistema de normas vs. facultades individuales. Sustantivo/Adjetivo: contenidos vs. procedimientos.",
            },

            {
              type: "paragraph",
              text: "Además de estas parejas, existe otra clasificación de gran uso: la tripartición en derecho público, privado y social, que se desarrolla más adelante. Aunque su ubicación canónica es posterior (2.5), conviene advertir su diálogo con las parejas tratadas: el derecho público tiende a organizar competencias y procedimientos (adjetivo) para fines colectivos; el privado refuerza facultades individuales (subjetivo) en ámbitos de autonomía; el social incorpora principios de justicia material para equilibrar asimetrías. Ver estos cruces enriquece el análisis y evita simplismos que oponen categorías como si fueran excluyentes.",
            },
            {
              type: "paragraph",
              text: "Las clasificaciones, sin embargo, tienen límites. Ninguna agota la realidad normativa ni sustituye el juicio práctico. Casos complejos desbordan categorías y exigen ponderar valores, interpretar finalidades y atender consecuencias. Por eso, el uso maduro de clasificaciones descansa en dos virtudes: flexibilidad para no forzar los hechos en moldes inadecuados y disciplina para no invocar etiquetas de manera oportunista. La buena docencia enseña a emplearlas como instrumentos, no como dogmas.",
            },

            {
              type: "accordion",
              header: "Criterios de uso responsable",
              open: false,
              text: "Definir el problema antes de clasificar; justificar la categoría elegida; reconocer solapamientos; revisar si otra pareja conceptual aporta más claridad; ajustar la clasificación si los hechos cambian.",
            },

            {
              type: "paragraph",
              text: "En la práctica, dominar estas parejas conceptuales acelera la solución de asuntos: permite construir escritos forenses con estructura clara, diseñar contratos que separan condiciones sustantivas y vías de solución de controversias, y evaluar políticas públicas con métricas alineadas a fines. También habilita diálogos interdisciplinarios, pues traduce problemas jurídicos a esquemas comprensibles por economistas, administradores o ingenieros. El resultado es un profesional capaz de navegar sistemas normativos complejos sin perder de vista la justicia material que las normas persiguen.",
            },
            {
              type: "paragraph",
              text: "Como cierre, la clasificación del derecho cumple una función epistémica y práctica: organiza conocimiento y guía acción. En combinación con el estudio de fuentes, ámbitos de validez y técnicas de interpretación, ofrece un andamiaje robusto para aprender, enseñar y aplicar el derecho con rigor y sentido de realidad.",
            },
          ],
          subthemes: [
            {
              id: "2.4.1.1",
              numbering: "2.4.1.1",
              title: "Derecho natural y derecho vigente",
              content: [
                {
                  type: "paragraph",
                  text: "La contraposición entre derecho natural y derecho vigente aborda el fundamento del deber jurídico. El iusnaturalismo sostiene que existen principios de justicia anteriores y superiores a cualquier ley positiva, cognoscibles por la razón o, según corrientes históricas, por la revelación. Tales principios marcan un estándar para evaluar la validez moral del derecho en vigor y justifican la desobediencia civil ante normas gravemente injustas. El positivismo, en cambio, afirma que el derecho es el conjunto de normas efectivamente vigentes creadas por autoridad competente conforme a procedimientos establecidos; separa el ‘ser’ del ‘deber ser’ y deja el juicio moral a otras disciplinas. En la práctica contemporánea, la tensión se resuelve mediante el constitucionalismo de derechos: el orden positivo incorpora principios que expresan exigencias de justicia —dignidad, igualdad, libertad— y mecanismos de control para invalidar normas contrarias a ellos.",
                },
                {
                  type: "paragraph",
                  text: "Las fuentes del derecho natural se han formulado de diversas maneras: desde la ‘recta razón’ de la tradición clásica (Aristóteles, Cicerón), pasando por concepciones teológicas medievales, hasta formulaciones seculares modernas que anclan esos principios en la naturaleza racional y social de la persona. En el aula, más que optar por una etiqueta, interesa reconocer la función crítica del derecho natural: ofrecer un metro para juzgar el derecho vigente cuando se aparta de la justicia. El exceso, por supuesto, es dogmatizarlo, sustituyendo deliberación democrática por moral privada; de ahí que su uso responsable exija traducir convicciones en razones públicas, accesibles a todos en un foro plural.",
                },

                {
                  type: "accordion",
                  header: "Ideas clave",
                  open: false,
                  text: "El derecho natural aporta criterios de justicia; el derecho vigente ofrece certeza y mecanismo de aplicación. El constitucionalismo integra ambos: positiviza principios y habilita controles para corregir injusticias normativas.",
                },

                {
                  type: "paragraph",
                  text: "El derecho vigente —también llamado positivo— concentra su atención en reglas efectivamente en vigor. Su fortaleza es la seguridad jurídica: permite a las personas planear su conducta con base en normas conocidas y procedimientos claros. Sin embargo, cuando se disocia por completo de consideraciones de justicia, corre el riesgo de legitimar arbitrariedades. Por ello, los sistemas contemporáneos no son puramente positivistas: sujetan la producción normativa a constituciones rígidas y tratados de derechos humanos, y someten la aplicación de las leyes a jueces independientes que ejercen control de constitucionalidad y convencionalidad.",
                },
                {
                  type: "paragraph",
                  text: "Ejemplos cotidianos ilustran la distinción: el derecho a la vida o a la igualdad se invocan como exigencias morales universales —propias del lenguaje del derecho natural—, mientras que los códigos civil o penal contienen las reglas positivas que, en un tiempo y lugar, especifican cómo se protegen esos bienes. Cuando el texto positivo contradice el núcleo de derechos, los mecanismos de control —tribunales constitucionales, organismos internacionales— corrigen la desviación. Este diálogo continuo explica por qué el derecho no puede reducirse ni a pura moral ni a pura positividad: requiere razones y procedimientos a la vez.",
                },

                {
                  type: "accordion",
                  header: "Ejemplos prácticos",
                  open: false,
                  text: "Derecho natural: dignidad humana, igualdad ante la ley, prohibición de tortura. Derecho vigente: códigos y reglamentos vigentes en un territorio y tiempo determinados que positivizan y desarrollan esos principios.",
                },

                {
                  type: "paragraph",
                  text: "En el terreno profesional, esta pareja conceptual guía decisiones delicadas: objeción de conciencia, ponderación de derechos, interpretación conforme a la Constitución. También ilumina debates sobre reformas: no basta preguntar si una ley es viable técnicamente; hay que indagar si es justa y si respeta el núcleo de derechos humanos. La formación jurídica responsable enseña a armonizar ambas dimensiones, evitando moralismos que ignoran institucionalidad y positivismos que olvidan la finalidad ética del derecho.",
                },
                {
                  type: "paragraph",
                  text: "Como cierre, derecho natural y derecho vigente no son enemigos inevitables: son planos complementarios de una misma empresa civilizatoria. El primero ofrece brújula axiológica; el segundo, cartas de navegación y barcos concretos. Sin brújula, se navega a ciegas; sin barcos, no se navega. Integrarlos con prudencia es tarea del jurista y de las instituciones en un Estado constitucional de derecho.",
                },
              ],
            },
            // 2.4.1.2 intencionalmente ausente según el listado proporcionado
            {
              id: "2.4.1.3",
              numbering: "2.4.1.3",
              title: "Derecho objetivo y derecho subjetivo",
              content: [
                {
                  type: "paragraph",
                  text: "‘Derecho objetivo’ designa el sistema de normas jurídicas que rigen la convivencia —mandatos, prohibiciones y permisos—, mientras que ‘derecho subjetivo’ nombra las facultades o poderes de que goza una persona, reconocidas por el ordenamiento, para realizar intereses legítimos. La distinción es analíticamente útil: explica cómo de un mismo texto pueden derivar, además de deberes generales, posiciones jurídicas individuales (propiedad, libertad de expresión, acciones para exigir cumplimiento). También aclara que no hay derecho subjetivo sin respaldo del objetivo: las facultades existen porque una norma las reconoce y delimita. Esta dependencia evita convertir preferencias privadas en ‘derechos’ sin base normativa y, a la vez, protege a las personas al hacer exigible el respeto a sus posiciones garantizadas por el sistema.",
                },
                {
                  type: "paragraph",
                  text: "Desde el punto de vista dogmático, el derecho objetivo se expresa en fuentes formales (Constitución, leyes, reglamentos, jurisprudencia) y organiza instituciones (contrato, responsabilidad, propiedad). Sobre ese suelo, emergen los derechos subjetivos como facultades concretas, ejercibles por titulares determinados. La propiedad permite usar, disfrutar y disponer; el crédito, exigir pago; los derechos fundamentales, oponerse a injerencias desproporcionadas del poder público. La correlación típica es ‘derecho para uno, deber para otro’: mi derecho a cobrar implica tu deber de pagar; mi libertad de expresión impone al Estado deberes de abstención y, en ocasiones, de protección frente a particulares.",
                },

                {
                  type: "accordion",
                  header: "Diferencias operativas",
                  open: false,
                  text: "Objetivo: conjunto de normas, general y abstracto. Subjetivo: facultades concretas conferidas a un titular. Vínculo: no hay derecho subjetivo sin norma objetiva que lo reconozca.",
                },

                {
                  type: "paragraph",
                  text: "La distinción orienta soluciones prácticas. Ante un incumplimiento contractual, el juez no ‘crea’ la facultad de exigir, sino que la reconoce en el derecho objetivo y la atribuye al acreedor como derecho subjetivo; al mismo tiempo, define el correlativo deber del deudor. En materia de derechos humanos, la Constitución positiva derechos subjetivos que los tribunales tutelan frente a leyes o actos incompatibles. De aquí se desprende un principio de técnica legislativa: redactar disposiciones que identifiquen claramente quién es titular de qué facultad y quién soporta el deber correlativo, para evitar ambigüedades y litigios innecesarios.",
                },
                {
                  type: "paragraph",
                  text: "Existen, además, derechos subjetivos de configuración legal: facultades que la Constitución ordena crear o que la ley diseña fijando requisitos, contenido y límites (prestaciones sociales, acceso a información, beneficios fiscales). Su diseño exige equilibrio: demasiada indeterminación crea expectativas imposibles; exceso de rigidez impide adaptarse a contextos cambiantes. La interpretación debe resguardar el núcleo esencial del derecho, pero permitir ajustes razonables que atiendan capacidad institucional y sostenibilidad financiera.",
                },

                {
                  type: "accordion",
                  header: "Errores comunes",
                  open: false,
                  text: "Llamar ‘derecho’ a preferencias sin base normativa; ignorar deberes correlativos; confundir límites razonables con violaciones; olvidar que el ejercicio de derechos está sujeto a reglas de convivencia y a principios de proporcionalidad.",
                },

                {
                  type: "paragraph",
                  text: "Ejemplos prácticos consolidan la idea: el derecho subjetivo de propiedad se traduce en acciones para reivindicar un bien o reparar daños; el derecho de crédito habilita a exigir cumplimiento o resolución; los derechos político-electorales permiten votar y ser votado. En todos los casos, el derecho objetivo provee el andamiaje: define contenido, límites (función social de la propiedad, buena fe contractual, restricciones razonables de propaganda) y vías de tutela (juicios, recursos). Esta arquitectura balancea libertad individual con orden colectivo, que es, al final, la promesa del derecho en sociedades plurales.",
                },
                {
                  type: "paragraph",
                  text: "Como corolario, comprender la dupla objetivo/subjetivo previene excesos de individualismo (facultades sin deberes) y de estatismo (mandatos sin facultades). El jurista maduro razona en ambos registros, cuidando que las soluciones preserven la coherencia del sistema y la protección efectiva de personas concretas.",
                },
              ],
            },
            {
              id: "2.4.1.4",
              numbering: "2.4.1.4",
              title: "Derecho sustantivo y derecho adjetivo",
              content: [
                {
                  type: "paragraph",
                  text: "La pareja sustantivo/adjetivo distingue entre el contenido de las relaciones jurídicas y los cauces para hacer valer ese contenido. Derecho sustantivo es el conjunto de normas que establecen derechos y obligaciones —qué está permitido, prohibido u obligado— en materias como civil, penal, mercantil, laboral o administrativa. Derecho adjetivo es el conjunto de normas procesales que regulan cómo se aplican y tutelan esos derechos ante autoridades: competencia, procedimientos, plazos, pruebas, recursos y ejecución. La distinción es didáctica y operativa: permite separar la pregunta por el ‘qué’ de la pregunta por el ‘cómo’, evitando confundir pretensiones con vías y garantizando debido proceso.",
                },
                {
                  type: "paragraph",
                  text: "Ejemplos claros ayudan a fijar ideas. El Código Civil —sustantivo— define contratos, responsabilidad y propiedad; el Código de Procedimientos Civiles —adjetivo— establece cómo presentar demandas, ofrecer pruebas, impugnar resoluciones y ejecutar sentencias. En materia penal, el Código Penal describe delitos y penas (sustantivo), mientras que el Código Nacional de Procedimientos Penales regula investigación, juicio y recursos (adjetivo). En lo laboral, la Ley Federal del Trabajo contiene reglas sustantivas sobre jornadas, salarios y despidos, y la ley procesal determina conciliación, jurisdicción y carga probatoria. Sin cauces adecuados, los derechos quedan en papel; sin contenidos claros, los procedimientos devienen ritual vacío.",
                },

                {
                  type: "accordion",
                  header: "Cómo distinguir en casos",
                  open: false,
                  text: "Pregúntate: ¿Esta regla define un derecho/obligación (sustantivo) o regula el trámite para hacerlo valer (adjetivo)? ¿Pertenece a un ‘qué’ o a un ‘cómo’?",
                },

                {
                  type: "paragraph",
                  text: "La técnica legislativa conecta ambas esferas mediante reglas transitorias que facilitan la transición cuando cambia el procedimiento o el contenido. Por ejemplo, una reforma procesal suele aplicar de inmediato a los asuntos en trámite (por su naturaleza instrumental), mientras que las reformas sustantivas se aplican hacia el futuro para respetar expectativas legítimas. Esta coordinación temporal evita indefensión y asegura eficiencia. De igual modo, la jurisprudencia afina la relación: criterios sobre carga de la prueba, estándar probatorio o medidas cautelares pueden tornar efectivo un derecho que, en abstracto, parecía robusto pero que en la práctica resultaba inaccesible.",
                },
                {
                  type: "paragraph",
                  text: "Desde la perspectiva de diseño institucional, el derecho adjetivo es un poderoso palanca de mejora. Procedimientos simples, plazos razonables, audiencias orales y uso inteligente de tecnologías reducen costos y tiempos, elevando la confianza en la justicia. A la inversa, ritualismos innecesarios y formalismos opacos incentivan corrupción y desalientan el ejercicio de derechos. Por eso, las reformas procesales suelen acompañar expansiones de derechos sustantivos: sin canales eficaces, las promesas normativas se quedan sin destinatario real.",
                },

                {
                  type: "accordion",
                  header: "Ejemplos típicos",
                  open: false,
                  text: "Sustantivo: Código Civil, Código Penal, Ley Federal del Trabajo. Adjetivo: Códigos de procedimientos, leyes de amparo, reglas de competencia y recursos.",
                },

                {
                  type: "paragraph",
                  text: "Un error común consiste en intentar resolver, por la vía procesal, problemas de diseño sustantivo —o viceversa—. Si el contenido del derecho es ambiguo, el litigio se multiplica aunque el procedimiento sea eficiente; si el trámite es impracticable, el mejor derecho se vuelve inútil. El jurista prudente aborda ambos planos: clarifica conceptos y depura procedimientos. Así, la dupla sustantivo/adjetivo no es un tecnicismo, sino una brújula para tomar decisiones que hagan realidad la justicia material con garantías de debido proceso.",
                },
                {
                  type: "paragraph",
                  text: "En conclusión, distinguir con precisión entre lo sustantivo y lo adjetivo robustecen la coherencia del sistema jurídico: dota de contenido a la libertad y a la igualdad, y provee caminos confiables para tutelarlas. Esta coordinación convierte el derecho en herramienta eficaz para resolver conflictos y promover el desarrollo humano en un marco de respeto a la dignidad y al Estado de derecho.",
                },
              ],
            },
          ],
        },
        {
          id: "2.5",
          numbering: "2.5",
          title: "Derecho público, derecho privado y derecho social",
          content: [
            {
              type: "paragraph",
              text: "La tripartición clásica del ordenamiento en derecho público, derecho privado y derecho social funciona como un mapa conceptual para orientarse en un sistema jurídico complejo. No es una división hermética, sino una herramienta de análisis que ubica problemas, fuentes, principios y autoridades competentes. El derecho público regula las relaciones en las que el Estado actúa con potestad de imperio para tutelar el interés general; el derecho privado ordena relaciones entre particulares que interactúan en condiciones de igualdad jurídica y autonomía de la voluntad; el derecho social surge para corregir asimetrías estructurales y proteger a grupos o bienes colectivos cuya salvaguarda requiere normas de tutela reforzada. Comprender sus lógicas evita confusiones prácticas: no es lo mismo litigar frente a una autoridad que imponer condiciones a un proveedor; tampoco es igual un conflicto salarial que una compraventa entre particulares. Esta unidad, al sistematizar la tripartición, ofrece criterios para elegir el foro adecuado, identificar normas aplicables, anticipar cargas probatorias y diseñar soluciones compatibles con principios constitucionales, con especial atención a la interpenetración contemporánea entre ramas (constitucionalización del derecho privado, expansión de derechos sociales y controles públicos sobre actividades privadas de interés general).",
            },
            {
              type: "paragraph",
              text: "El derecho público se define por la presencia del poder público y por la finalidad de interés general. Comprende, entre otras, las ramas constitucional, administrativa, fiscal, penal, procesal e internacional público. Sus principios característicos incluyen supremacía constitucional, legalidad estricta, competencia y procedimiento, publicidad, rendición de cuentas, proporcionalidad y debido proceso. En este terreno, la autoridad no negocia desde un plano de igualdad: decide con potestades regladas y, cuando procede, usa la fuerza legítima para hacer cumplir la ley. Los actos administrativos se presumen válidos, pero son impugnables mediante recursos y juicios que controlan legalidad y razonabilidad. En materia penal, por ejemplo, rigen principios de taxatividad y presunción de inocencia; en fiscal, el de reserva de ley y exacta aplicación de tributos; en administrativo, el de servicio al interés público y la proscripción de desviación de poder. El profesional que opera en esta esfera debe dominar procedimientos, plazos y formalidades, porque la validez de las decisiones depende tanto del fondo como de la forma, y los errores procesales pueden anular actos con costos significativos para la gestión pública y para los particulares.",
            },

            {
              type: "accordion",
              header: "Ramas y ejemplos del derecho público",
              open: false,
              text: "Constitucional (control de normas, derechos fundamentales), Administrativo (licencias, sanciones), Fiscal (impuestos), Penal (delitos y penas), Procesal (cauces de decisión), Internacional público (tratados, responsabilidad estatal).",
            },

            {
              type: "paragraph",
              text: "El derecho privado regula relaciones entre particulares bajo los principios de autonomía de la voluntad, igualdad jurídica y buena fe. Sus ramas emblemáticas son la civil (personas, familia, bienes, sucesiones, obligaciones) y la mercantil (actos de comercio, sociedades, títulos de crédito, insolvencia), además del derecho internacional privado que resuelve conflictos de leyes y jurisdicción entre ordenamientos. En este ámbito dominan normas dispositivas —susceptibles de ser moduladas por contrato— junto a normas imperativas que protegen orden público y terceros (consumidores, acreedores, menores). La responsabilidad civil, la contratación y las garantías reales son instituciones medulares. A diferencia del derecho público, la carga de estructurar relaciones equilibradas recae en la pericia de las partes: una mala cláusula hoy es un litigio mañana. Por eso, el oficio privado combina técnica de redacción, gestión de riesgos y ética de la confianza: interpretar buena fe, equilibrar prestaciones, prever remedios y diseñar mecanismos alternativos de solución de controversias que reduzcan costos y preserven relaciones de largo plazo.",
            },
            {
              type: "paragraph",
              text: "El derecho social responde a la constatación de desigualdades materiales que hacen insuficiente la igualdad formal. Su misión es garantizar un piso de dignidad y de oportunidades efectivas mediante normas de protección reforzada y principios de justicia material. Ramas centrales: derecho del trabajo (condiciones mínimas, libertad sindical, negociación colectiva, seguridad e higiene), agrario (propiedad social, ejidos, comunidad agraria) y seguridad social (salud, pensiones, riesgos de trabajo). Sus principios típicos incluyen irrenunciabilidad de derechos, primacía de la realidad, continuidad de la relación laboral, protección del más débil y progresividad. En esta esfera, la autonomía privada cede frente a normas imperativas que corrigen asimetrías en la relación capital‑trabajo o en el acceso a bienes básicos. La efectividad del derecho social exige instituciones capaces de inspección y conciliación, jueces especializados y políticas públicas coherentes; sin ello, la promesa de tutela queda enunciada pero vacía. La constitucionalización de derechos sociales y su justiciabilidad progresiva han ampliado herramientas para exigir prestaciones, sin perder de vista sostenibilidad y gradualidad.",
            },

            {
              type: "accordion",
              header: "Ramas y principios del derecho social",
              open: false,
              text: "Trabajo (irrenunciabilidad, primacía de la realidad), Agrario (propiedad social, función social de la tierra), Seguridad social (universalidad, suficiencia, solidaridad), con el principio transversal de progresividad de derechos.",
            },

            {
              type: "paragraph",
              text: "Las fronteras entre público, privado y social son porosas. Existen zonas mixtas: contratos administrativos (privados sometidos a régimen público), servicios públicos prestados por particulares bajo regulación intensa, protección de datos y competencia económica que imponen deberes públicos a empresas, consumo que blinda a la parte débil con normas imperativas, y responsabilidad patrimonial del Estado que se parece a la civil pero con criterios propios. A la inversa, el ‘bloque de constitucionalidad’ impregna relaciones privadas a través de derechos fundamentales —antidiscriminación, privacidad, libertad de expresión— y deberes de respeto a la dignidad. Esta interpenetración obliga a un método: primero identificar el interés protegido y la posición de las partes; luego clasificar el régimen predominante y, finalmente, construir soluciones armónicas que respeten el núcleo de cada rama sin sacrificar tutela efectiva. El reto contemporáneo consiste en regular actividades tecnológicas y globales donde las categorías clásicas ayudan, pero no bastan sin un enfoque de riesgos y derechos.",
            },
            {
              type: "paragraph",
              text: "En términos prácticos, clasificar correctamente un asunto impacta estrategia, plazos y costos. Del lado público, es clave agotar recursos administrativos oportunamente, dominar pruebas documentales y periciales, y preparar control judicial de legalidad y proporcionalidad. En el privado, conviene invertir en debida diligencia, contratos claros, cumplimiento y mecanismos alternativos de solución de controversias. En lo social, la asesoría preventiva y la negociación colectiva reducen litigios, mientras que, en juicio, rigen reglas probatorias particulares y criterios protectores. La docencia debe entrenar al jurista para moverse entre ramas con solvencia, integrando principios constitucionales, técnicas de redacción y ética profesional, pues la legitimidad del sistema depende de decisiones que combinen justicia material con seguridad jurídica.",
            },

            {
              type: "accordion",
              header: "Criterios para clasificar un caso",
              open: false,
              text: "¿Quiénes son las partes (autoridad/particulares)? ¿Cuál es el bien protegido (interés general/intereses particulares/justicia social)? ¿Qué principios dominan (legalidad/autonomía/ tutela reforzada)? ¿Qué autoridad y procedimiento corresponden?",
            },

            {
              type: "paragraph",
              text: "Como cierre, la tripartición no sustituye el juicio práctico, pero sí lo encuadra. Provee un lenguaje común para discutir fines, límites y herramientas del Derecho en contextos diversos. Dominada con madurez, permite construir soluciones creativas: contratos que respetan derechos fundamentales, políticas públicas que incentivan innovación sin desproteger a consumidores y trabajadores, y programas sociales sostenibles que expanden oportunidades reales. El objetivo no es encajar forzadamente cada problema en una caja, sino emplear el mapa para no perder de vista el territorio: personas concretas que requieren reglas justas, claras y eficaces para vivir, producir y colaborar en paz.",
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
          href: "", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Campa, S. F. (2018). Ética 1. México: Pearson.",
            "Martinez, J. L. (2017). Derecho. Mexico: Marya.",
            "Purón, R. A. (2019). Derecho 1. México: Patria Educación.",
            "Vargas, R. R. (2014). Derecho. México: Marya.",
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
            "Campa, S. F. (2018). Ética 1. México: Pearson.",
            "Martinez, J. L. (2017). Derecho. Mexico: Marya.",
            "Purón, R. A. (2019). Derecho 1. México: Patria Educación.",
            "Vargas, R. R. (2014). Derecho. México: Marya.",
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
