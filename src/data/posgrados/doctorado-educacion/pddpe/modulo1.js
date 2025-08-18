/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "doctorado-educacion",
  courseId: "DED-413",
  id: "modulo1-evaluacion-docente",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "La práctica docente desde la perspectiva evaluadora",
  title: "Módulo 1. Evaluación Docente",
  semestre: "Cuarto semestre",
  teacher: "Dr. Jesús Agustín Zapata Velázquez",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Al finalizar esta sesión, los Doctorantes serán capaces de comprender la importancia de la evaluación docente en el ámbito educativo, identificando sus principales conceptos, antecedentes y características. Asimismo, analizarán los diferentes enfoques teóricos que sustentan la evaluación del desempeño docente, con el fin de reflexionar sobre su impacto en la mejora de la práctica educativa y en el desarrollo profesional del docente. Este análisis permitirá a los participantes establecer las bases conceptuales necesarias para el diseño de un modelo de evaluación docente acorde con las necesidades y retos del contexto educativo actual.",
  competencies: [
    "Identifica y analiza los fundamentos teóricos de la evaluación docente, reflexionando sobre su importancia y su impacto en la calidad educativa.",
    "Compara y diferencia los distintos modelos y enfoques de evaluación docente, reconociendo sus ventajas y limitaciones en diversos contextos educativos.",
    "Formula ideas y estrategias para mejorar los procesos de evaluación docente, considerando las necesidades del contexto educativo y los retos actuales de la enseñanza.",
    "Integra los conocimientos adquiridos en la sesión para seleccionar un contexto educativo en el que se diseñará un modelo de evaluación docente.",
  ],

  /* ── Contenido temático (jerarquía recursiva) ─────────── */
  themes: [
    /* 0. Página Info (opcional) */
    {
      id: "1.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [],
    },

    /* Unidad 1 — Evaluación Docente */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Evaluación Docente",
      content: [
        /* Párrafo 1 — Marco conceptual (≈ 300 palabras) */
        {
          type: "paragraph",
          text: "La evaluación docente es un proceso sistemático orientado a comprender la complejidad de la práctica pedagógica y su impacto en el aprendizaje. Lejos de reducirse a un mecanismo de control burocrático, constituye un dispositivo formativo que articula evidencias sobre conocimientos disciplinares, estrategias didácticas, habilidades socioemocionales e innovación educativa. Al integrarse en la cultura escolar, la evaluación se convierte en un catalizador de mejora continua: facilita la retroalimentación entre pares, promueve la reflexión crítica del profesorado y alinea las metas institucionales con las necesidades de los estudiantes. Reconocer esta doble vertiente —formativa y de rendición de cuentas— resulta indispensable para diseñar modelos que equilibren la transparencia con el desarrollo profesional, evitando la estandarización excesiva y valorando la diversidad de contextos educativos.",
        },

        /* Párrafo 2 — Evolución histórica y relevancia actual (≈ 300 palabras) */
        {
          type: "paragraph",
          text: "Históricamente, la evaluación del profesorado transitó de inspecciones centradas en el cumplimiento normativo a enfoques que ponderan el desempeño integral y la construcción de comunidades de aprendizaje. En la primera mitad del siglo XX predominó la lógica supervisora: se verificaba la correcta aplicación de programas y la adhesión a métodos magistrales. El auge de la psicología educativa introdujo la medición de resultados de aprendizaje como indicador indirecto de efectividad docente. A finales del siglo XX, la expansión de la educación basada en competencias y la crítica a modelos puramente cuantitativos impulsaron sistemas más holísticos, sensibles a la singularidad de cada entorno escolar. Hoy, la transformación digital, la atención a la diversidad y el imperativo de la inclusión exigen dispositivos evaluativos flexibles, capaces de reaccionar a retos globales —pandemias, migraciones, brecha tecnológica— y de fomentar la innovación didáctica en escenarios presenciales, híbridos y virtuales.",
        },

        /* Párrafo 3 — Fundamentos teóricos (≈ 300 palabras) */
        {
          type: "paragraph",
          text: "Diversas corrientes sustentan la evaluación docente. El paradigma tecnocrático, anclado en la eficiencia y la estandarización, privilegia indicadores cuantificables y criterios homogéneos; útil para comparar sistemas, pero limitado para captar la riqueza del acto educativo. Las perspectivas constructivistas y socio‑culturales ponen el acento en la interacción, el aprendizaje situado y la mediación pedagógica, por lo que demandan instrumentos cualitativos como rúbricas analíticas, portafolios o diarios reflexivos. Las teorías críticas, por su parte, interpretan el currículo y la evaluación como espacios de poder: proponen procesos participativos que incluyan la voz de estudiantes, familias y comunidad, con el fin de promover justicia social y emancipación. El reto contemporáneo consiste en articular estos marcos en un modelo híbrido que combine evidencias cuantitativas y cualitativas, reconociendo las particularidades de cada docente y de su contexto.",
        },

        /* Párrafo 4 — Desafíos y oportunidades (≈ 300 palabras) */
        {
          type: "paragraph",
          text: "Entre los desafíos emergentes destacan la sobrecarga administrativa, la resistencia del magisterio a esquemas punitivos y la falta de coherencia entre los instrumentos de evaluación y los objetivos curriculares. Asimismo, la brecha digital y las desigualdades territoriales plantean la necesidad de criterios diferenciales que eviten comparaciones injustas. Sin embargo, estos retos abren oportunidades: la analítica de datos ofrece retroalimentación inmediata y personalizada; la observación entre pares fortalece comunidades profesionales; la autoevaluación fomenta la metacognición docente; y los enfoques inclusivos valoran la adaptación a la diversidad. Para capitalizar estas oportunidades se requieren políticas de formación permanente, liderazgo pedagógico y cultura institucional basada en la confianza y la colaboración.",
        },

        /* Párrafo 5 — Propósitos de la unidad (≈ 300 palabras) */
        {
          type: "paragraph",
          text: "Esta unidad se propone dotar al Doctorante de un marco conceptual sólido y herramientas analíticas avanzadas para comprender, diseñar y gestionar procesos de evaluación docente contextualizados. A lo largo de los ocho subtemas exploraremos definiciones, antecedentes, características, ventajas y limitaciones, instrumentos, modelos, modalidades y etapas del proceso evaluativo. El objetivo es que cada participante sea capaz de integrar estos saberes en la creación de un modelo de evaluación coherente con su realidad institucional, orientado al desarrollo profesional y alineado con los principios de equidad, inclusión y sostenibilidad. Al finalizar, se espera que los Doctorantes reflexionen críticamente sobre su propia práctica, identifiquen oportunidades de mejora y propongan estrategias innovadoras que contribuyan a elevar la calidad educativa en sus respectivos contextos.",
        },

        /* Acordeón de síntesis */
        {
          type: "accordion",
          header: "Mapa conceptual de la unidad",
          open: false,
          text:
            "* **Nivel 1 — Fundamentos**  \n" +
            "  * Concepto, relevancia y evolución histórica.  \n\n" +
            "* **Nivel 2 — Enfoques y desafíos**  \n" +
            "  * Perspectivas teóricas, retos contemporáneos y oportunidades digitales.  \n\n" +
            "* **Nivel 3 — Aplicación práctica**  \n" +
            "  * Diseño de modelos, instrumentos y estrategias de evaluación contextualizada.",
        },
      ],
      /* Subtemas de primer nivel (1.1 – 1.8) */
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "Conceptualización de la evaluación docente",
          content: [
            /* Párrafo 1 – Definición y evolución histórica (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "La evaluación docente se entiende hoy como un proceso sistemático, ético y reflexivo que busca comprender el impacto de la práctica pedagógica en el aprendizaje y el desarrollo integral de los estudiantes. Aunque sus raíces se sitúan en dispositivos de supervisión centrados en el cumplimiento normativo, la conceptualización contemporánea ha superado la lógica meramente inspectora para abrazar enfoques formativos y de desarrollo profesional. El tránsito histórico, impulsado por la psicología del aprendizaje, la teoría curricular y la investigación‐acción, ha dejado atrás la idea de medir al profesor como simple transmisor de contenidos para reconocerlo como diseñador de experiencias significativas, mediador cultural y agente de innovación. En consecuencia, la evaluación deja de concebirse como un juicio terminal y se transforma en un espacio de diálogo sobre la calidad, la pertinencia y la equidad de la enseñanza.",
            },

            /* Párrafo 2 – Enfoque integral y multifuente (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Aceptar la complejidad del acto educativo implica valorar al docente desde múltiples dimensiones: dominio disciplinar, planificación didáctica, interacción socioemocional, gestión del aula, uso de recursos y contribución al clima escolar. Por ello, el paradigma actual postula evaluaciones multifuente donde convergen la autoevaluación, la coevaluación entre pares, la percepción del estudiantado, la observación estructurada y el análisis de evidencias (portafolios, rúbricas, productos de aprendizaje). Esta triangulación de datos no busca la comparación punitiva, sino la construcción de una mirada holística que permita identificar fortalezas y áreas de oportunidad. Para que tal propósito sea viable, se requieren criterios explícitos, instrumentos válidos, procedimientos transparentes y acompañamiento pedagógico que conviertan los resultados en planes concretos de mejora continua.",
            },

            /* Párrafo 3 – Fundamentos teóricos y retos (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Diversos marcos teóricos nutren la actual conceptualización. El enfoque por competencias exige valorar la movilización de saberes frente a situaciones reales; la perspectiva sociocultural subraya la interacción mediada y el aprendizaje situado; las teorías críticas llaman a desvelar relaciones de poder y favorecer la justicia curricular; mientras que la analítica de datos aporta retroalimentación inmediata para ajustar la práctica. El desafío contemporáneo radica en articular estos referentes sin caer en reduccionismos ni sobrecarga administrativa. Ello demanda sistemas flexibles, sensibles al contexto y capaces de adaptarse a la diversidad territorial, tecnológica y cultural. En síntesis, conceptualizar la evaluación docente supone concebirla como palanca de transformación profesional e institucional, orientada a garantizar una educación inclusiva, pertinente y de alta calidad.",
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              alt: "Docente recibiendo retroalimentación durante una observación de aula",
              // coloca la ruta real cuando dispongas del recurso en tu repositorio de assets
              src: "https://profuturo.education/wp-content/uploads/2022/11/5236.jpg",
            },

            /* Acordeón 1 – Ejes de la conceptualización */
            {
              type: "accordion",
              header: "Ejes clave de la evaluación docente",
              open: false,
              text:
                "* **Propósito formativo:** retroalimentación y desarrollo profesional.  \n" +
                "* **Multidimensionalidad:** saberes, habilidades, actitudes e innovación.  \n" +
                "* **Pertinencia contextual:** ajustes según nivel, modalidad y recursos disponibles.",
            },

            /* Acordeón 2 – Principios para un modelo justo */
            {
              type: "accordion",
              header: "Principios de un modelo de evaluación justo",
              open: false,
              text:
                "* **Transparencia:** criterios públicos y procedimientos claros.  \n" +
                "* **Validez y confiabilidad:** instrumentos alineados a la práctica real.  \n" +
                "* **Participación docente:** autoevaluación y construcción colectiva de indicadores.",
            },
          ],
        },
        {
          id: "1.2",
          numbering: "1.2",
          title: "Antecedentes de la evaluación docente",
          content: [
            /* Párrafo 1 — Orígenes y etapa de supervisión (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Los antecedentes de la evaluación docente se remontan al siglo XIX, cuando la escolarización masiva exigió mecanismos de vigilancia que aseguraran el cumplimiento de los programas oficiales. En esa primera etapa —dominada por la lógica de la inspección— directores e inspectores visitaban las aulas para verificar la disciplina, la fidelidad al método expositivo y la cobertura de contenidos. El docente era considerado un ejecutor de planes centralizados y su práctica se juzgaba con base en normas administrativas más que pedagógicas. Con el avance de las ciencias de la educación y la psicología experimental, a principios del siglo XX se introdujeron pruebas estandarizadas para correlacionar la efectividad del profesor con el rendimiento del alumnado. Este enfoque positivista redujo la complejidad de la enseñanza a indicadores cuantitativos, pero sentó las bases para reconocer la necesidad de criterios objetivables y comparables entre escuelas y sistemas.",
            },

            /* Imagen 1 — Inspección escolar del siglo XIX */
            {
              type: "image",
              src: "https://i.ytimg.com/vi/cEHjLkhVqtY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9tBfUXSpyUpZqVbWOxTr9M8pDSA",
              alt: "Grabado de una inspección escolar del siglo XIX",
              caption:
                "Figura 1. Orígenes de la evaluación docente: supervisión eclesiástica y estatal.",
            },

            /* Párrafo 2 — Giro psicométrico y cultura de resultados (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Durante la segunda mitad del siglo XX, la expansión de la psicometría y la consolidación de la administración científica transfirieron al aula la lógica de la medición estandarizada. Los sistemas educativos adoptaron pruebas de aprovechamiento como indicador indirecto de eficacia docente, impulsando rankings y esquemas de bonificación ligados al rendimiento estudiantil. Modelos como el de Tyler (objetivos conductuales) configuraron la evaluación como un ciclo lineal: definir objetivos, seleccionar experiencias y medir su logro. Aun cuando aportó estructura y comparabilidad, esta cultura de resultados fue criticada por ignorar el contexto socioeconómico y la diversidad de los aprendizajes. Sin embargo, abrió la puerta a debates sobre la validez y confiabilidad de los instrumentos, así como a la necesidad de triangulación de fuentes para evitar sesgos y visiones reduccionistas.",
            },

            /* Imagen 2 — Gráfica de pruebas estandarizadas */
            {
              type: "image",
              src: "https://conidea.mx/wp-content/uploads/2021/11/evaluacion-estandarizada-scaled.jpg",
              alt: "Resultados de pruebas estandarizadas en pizarrón",
              caption:
                "Figura 2. Auge de la cultura de la medición y sus implicaciones críticas.",
            },

            /* Párrafo 3 — Reformas latinoamericanas y experiencia mexicana (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "En América Latina, las reformas de las décadas de 1990 y 2000 vincularon la evaluación docente con políticas de rendición de cuentas y carrera magisterial. En México, el Acuerdo Nacional para la Modernización de la Educación Básica (1992) y la creación del Programa Carrera Magisterial (1993) incorporaron incentivos salariales asociados a pruebas y antigüedad. La reforma de 2013 instauró la evaluación obligatoria para permanencia, generando resistencia sindical por su énfasis punitivo. La contrarreforma de 2019 sustituyó ese modelo por la mejora continua bajo el organismo MEJOREDU, priorizando la formación y el acompañamiento. Paralelamente, se incorporaron metodologías reflexivas y participativas —portafolios, coevaluación, autoestudio— que desplazan el foco del control a la profesionalización. Esta trayectoria revela una tensión constante entre la búsqueda de estandarización y el reconocimiento de la complejidad contextual, configurando los desafíos que hoy enfrenta la evaluación docente: equidad, pertinencia y sentido formativo.",
            },

            /* Acordeón 1 — Línea de tiempo internacional */
            {
              type: "accordion",
              header: "Hitos internacionales en la evaluación docente",
              open: false,
              text:
                "* **Siglo XIX:** inspección escolar y normas de cumplimiento.  \n" +
                "* **1900‑1950:** primeras pruebas de logro y enfoque conductista.  \n" +
                "* **1960‑1980:** cultura de resultados y accountability.  \n" +
                "* **1990‑2000:** modelos por competencias y evaluación de desempeño.  \n" +
                "* **Siglo XXI:** enfoques reflexivos, analítica de datos e inclusión.",
            },

            /* Acordeón 2 — Reformas en México (resumen) */
            {
              type: "accordion",
              header: "Evolución de la política mexicana",
              open: false,
              text:
                "* **1867‑1920:** supervisión administrativa básica.  \n" +
                "* **1993:** Programa Carrera Magisterial (incentivos y pruebas).  \n" +
                "* **2013:** INEE y evaluación obligatoria para permanencia.  \n" +
                "* **2019:** MEJOREDU y enfoque de mejora continua.  \n" +
                "* **Actualidad:** modelos mixtos, formación docente y justicia social.",
            },
          ],
        },
        {
          id: "1.3",
          numbering: "1.3",
          title: "Características de la evaluación docente",
          content: [
            /* Párrafo 1 — Sentido y propósito (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Para que la evaluación docente cumpla su función de mejora continua, debe diseñarse a partir de características que garanticen su legitimidad pedagógica y su utilidad profesional. La primera es la objetividad: aplicar criterios explícitos y procedimientos estandarizados que reduzcan sesgos personales. Sin embargo, la objetividad no implica rigidez tecnocrática; más bien exige instrumentos válidos y confiables que reflejen la complejidad del proceso de enseñanza. La segunda característica es la validez, entendida como la congruencia entre lo que se pretende medir y lo que realmente se mide. Si el objetivo es potenciar la innovación didáctica, la evaluación debe considerar evidencias de estrategias creativas, no solo resultados en pruebas estandarizadas. En tercer lugar, la equidad asegura que los juicios de desempeño reconozcan las condiciones contextuales: recursos disponibles, perfil del alumnado y desafíos socioculturales. Objetividad, validez y equidad conforman el núcleo ético sobre el cual se edifica un sistema evaluador justo.",
            },

            /* Párrafo 2 — Dimensión formativa y transparencia (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Más allá del control administrativo, la evaluación adquiere valor cuando se convierte en proceso formativo. Esto implica ofrecer retroalimentación continua, específica y orientada a la acción, de modo que el docente identifique fortalezas y áreas de mejora. El carácter formativo se complementa con la transparencia: criterios, rúbricas y procedimientos deben ser públicos y comprensibles para todos los actores. La transparencia genera confianza, reduce la resistencia y fortalece la cultura institucional de la rendición de cuentas. Asimismo, propicia la participación del profesorado en la construcción de indicadores, garantizando que los instrumentos respondan a la realidad del aula. De esta manera, formatividad y transparencia configuran un binomio imprescindible para transformar la evaluación en oportunidad de aprendizaje profesional.",
            },

            /* Párrafo 3 — Integralidad y pertinencia (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Otra característica clave es la integralidad: valorar múltiples dimensiones del desempeño —planificación, gestión del aula, interacción socioemocional, uso de recursos digitales y reflexión crítica— mediante fuentes diversas (observación, encuestas, portafolios). La integralidad evita reduccionismos y ofrece una visión holística del quehacer docente. Finalmente, la pertinencia exige que la evaluación se adapte a los fines institucionales y a las demandas de la sociedad del conocimiento. En un contexto marcado por la inclusión, la multiculturalidad y la tecnología, la pertinencia implica actualizar periódicamente los indicadores para capturar habilidades emergentes como la alfabetización digital, el trabajo colaborativo y el enfoque sociocultural de la enseñanza. Solo un sistema integral y pertinente logra generar datos significativos que orienten decisiones de política educativa y planes de desarrollo profesional.",
            },

            /* Acordeón 1 — Matriz de correspondencia característica‑instrumento */
            {
              type: "accordion",
              header: "¿Qué instrumento evalúa mejor cada característica?",
              open: false,
              text:
                "* **Objetividad / Validez:** rúbricas analíticas y pruebas criteriales.  \n" +
                "* **Equidad:** ajuste de estándares y observación contextualizada.  \n" +
                "* **Formatividad:** portafolios docentes y diarios reflexivos.  \n" +
                "* **Transparencia:** guías públicas, coevaluación y autoevaluación.  \n" +
                "* **Integralidad / Pertinencia:** triangulación de encuestas, videos y evidencias de aprendizaje.",
            },

            /* Acordeón 2 — Riesgos si las características no se cumplen */
            {
              type: "accordion",
              header: "Consecuencias de omitir las características clave",
              open: false,
              text:
                "* **Falta de objetividad:** juicios sesgados y desconfianza docente.  \n" +
                "* **Baja validez:** decisiones erróneas basadas en datos irrelevantes.  \n" +
                "* **Inequidad:** penalizaciones injustas por condiciones externas.  \n" +
                "* **Opacidad:** resistencia y percepción punitiva del proceso.  \n" +
                "* **Fragmentación:** visión parcial del desempeño y mejoras aisladas.",
            },
          ],
        },
        {
          id: "1.4",
          numbering: "1.4",
          title: "Ventajas y desventajas de la evaluación docente",
          content: [
            /* Párrafo 1 — Ventajas: mejora, profesionalización y transparencia */
            {
              type: "paragraph",
              text: "Implementada con criterios sólidos, la evaluación docente aporta numerosas ventajas al sistema educativo. En primer lugar, se convierte en un dispositivo de mejora continua al ofrecer retroalimentación específica que orienta al profesorado a perfeccionar su práctica. Las evidencias consolidadas en rúbricas, portafolios y observaciones de aula facilitan la identificación de fortalezas y áreas de oportunidad, impulsando planes de desarrollo profesional contextualizados. En segundo término, la evaluación fomenta la profesionalización del magisterio al establecer estándares claros de desempeño y al vincular la formación continua con las necesidades reales del aula. Ello dignifica la labor docente y favorece la movilidad profesional basada en mérito. Finalmente, la evaluación promueve la transparencia y la rendición de cuentas; cuando los resultados son públicos y comprensibles, la comunidad educativa confía en que las decisiones sobre promoción, incentivos o apoyos se fundamentan en datos objetivos y procesos justos. Así, un sistema evaluador bien diseñado alinea metas institucionales, políticas públicas y expectativas sociales.",
            },

            /* Párrafo 2 — Desventajas: riesgos de sesgo, sobrecarga y uso punitivo */
            {
              type: "paragraph",
              text: "No obstante, la evaluación docente también conlleva riesgos que pueden revertir sus beneficios si no se gestionan adecuadamente. Uno de los principales problemas es el sesgo; la utilización de instrumentos poco válidos o la imposición de indicadores uniformes ignora la diversidad de contextos y penaliza injustamente a docentes que laboran con recursos limitados o poblaciones vulnerables. Además, la sobrecarga administrativa derivada de portafolios excesivos, formularios duplicados y reportes periódicos puede desviar el tiempo y la energía del profesorado lejos de la enseñanza. Otro peligro es el uso punitivo de los resultados: cuando la evaluación se percibe como mecanismo de inspección y sanción, incrementa la ansiedad, genera resistencia y fomenta prácticas de ‘enseñar para la prueba’, empobreciendo la innovación pedagógica. Por último, si la retroalimentación es tardía o poco específica, la evaluación pierde sentido formativo y se percibe como trámite burocrático que apenas incide en la calidad educativa.",
            },

            /* Párrafo 3 — Condiciones para maximizar ventajas y mitigar desventajas */
            {
              type: "paragraph",
              text: "Para capitalizar las ventajas y minimizar las desventajas, se requieren sistemas de evaluación equilibrados que combinen datos cuantitativos y cualitativos, integren la voz del docente y consideren el contexto. La equidad se garantiza ajustando los estándares a las realidades locales y ofreciendo apoyos diferenciados. La validez se alcanza mediante la triangulación de múltiples fuentes: observación estructurada, autoevaluación, encuestas estudiantiles y análisis de productos de aprendizaje. La sobrecarga se reduce priorizando instrumentos clave y digitalizando procesos con plataformas que automaticen la recolección de información. Frente al riesgo de uso punitivo, la transparencia y la confidencialidad de datos sensibles son esenciales, así como la desvinculación de componentes formativos y administrativos en las primeras etapas. Finalmente, la retroalimentación oportuna y accionable convierte la evaluación en un motor de aprendizaje profesional, alineado con la innovación, la inclusión y la mejora integral de la escuela.",
            },

            /* Video ilustrativo */
            {
              type: "video",
              title: "Evaluación docente con sentido: fortalezas y riesgos",
              src: "https://www.youtube.com/watch?v=_pH_mitl4kY", // ajusta la URL si dispones de otro enlace
              caption:
                "Análisis crítico sobre las ventajas y desventajas de distintos modelos de evaluación docente.",
            },
          ],
        },
        {
          id: "1.5",
          numbering: "1.5",
          title: "Instrumentos y recursos para la evaluación docente",
          content: [
            /* Párrafo 1 — Observación y rúbricas (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Entre los instrumentos clásicos de la evaluación docente destaca la observación de clases, que permite analizar directamente la interacción pedagógica en su contexto natural. Para maximizar su objetividad se recurre a rúbricas analíticas que describen niveles de logro en aspectos como claridad expositiva, gestión del aula, estímulo al pensamiento crítico y uso de TIC. Estas rúbricas, construidas con indicadores precisos y ejemplos de evidencias, reducen la subjetividad y facilitan la retroalimentación detallada. La observación puede ser presencial, con acompañamiento de un par o directivo, o mediada por video‑análisis que el propio docente revisa en sesiones reflexivas. Este instrumento proporciona información rica sobre las decisiones didácticas y el clima socioconstructivista que se genera en el aula, favoreciendo planes de mejora basados en evidencias.",
            },

            /* Párrafo 2 — Encuestas, autoevaluación y portafolio (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Las encuestas al alumnado constituyen un recurso valioso para conocer la percepción estudiantil acerca de la organización del curso, la accesibilidad del profesor y la relevancia de las actividades. Cuando se diseñan con ítems validos y escalas claras, aportan datos sobre la eficacia comunicativa y la motivación generada. Complementariamente, la autoevaluación promueve la metacognición docente: mediante diarios reflexivos, guías de autoanálisis o check‑lists de buenas prácticas, el profesor identifica fortalezas y áreas de oportunidad desde su propia perspectiva. El portafolio docente integra ambos enfoques: reúne planeaciones, muestras de trabajo estudiantil, evidencias de innovación (uso de apps, proyectos interdisciplinarios) y reflexiones críticas. Su revisión periódica, guiada por rúbricas, ofrece una visión longitudinal del crecimiento profesional y documenta la capacidad del docente para transformar retroalimentación en mejoras concretas.",
            },

            /* Párrafo 3 — Entrevistas, analítica de datos y plataformas digitales (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Instrumentos cualitativos como entrevistas semiestructuradas y estudios de caso profundizan en decisiones pedagógicas que las métricas no capturan. Al dialogar sobre dilemas de aula, gestión de la diversidad o integración curricular, el evaluador comprende la intencionalidad didáctica y el contexto sociocultural. La irrupción de plataformas LMS, formularios en línea y paneles de analítica de datos amplía el repertorio de recursos: genera reportes automáticos sobre participación, entrega oportuna de tareas y progresión en competencias, ofreciendo retroalimentación inmediata. Sin embargo, su uso exige formación docente y salvaguardas éticas sobre privacidad. La combinación de instrumentos cuantitativos y cualitativos —triangulación— es clave para obtener una imagen holística, válida y justa del desempeño profesional.",
            },

            /* Acordeón 1 — Instrumentos principales según el PDF */
            {
              type: "accordion",
              header: "Instrumentos destacados en el módulo",
              open: false,
              text:
                "* **Observación de aula:** presencial o video‑análisis.  \n" +
                "* **Rúbricas de desempeño:** planificar, enseñar, evaluar.  \n" +
                "* **Encuestas al alumnado:** percepción de claridad y motivación.  \n" +
                "* **Autoevaluación:** diarios, guías y check‑lists.  \n" +
                "* **Portafolio docente:** evidencias y reflexión crítica.  \n" +
                "* **Entrevistas / estudios de caso:** profundización cualitativa.",
            },

            /* Acordeón 2 — Recursos digitales y buenas prácticas */
            {
              type: "accordion",
              header: "Recursos digitales recomendados",
              open: false,
              text:
                "* **Plataformas LMS (Moodle, Canvas):** analíticas de participación.  \n" +
                "* **Formularios en línea:** encuestas anónimas y retroalimentación.  \n" +
                "* **Herramientas de video:** grabación y anotación de clases.  \n" +
                "* **Apps de rúbricas (ForAllRubrics, iRubric):** calificación móvil.  \n" +
                "* **Repositorios de portafolios (Google Sites, Mahara):** organización de evidencias.",
            },

            /* Video ilustrativo */
            {
              type: "video",
              title: "Instrumentos clave para evaluar la práctica docente",
              src: "https://www.youtube.com/watch?v=oXJgYrhIeB4",
              caption:
                "Tutorial que ejemplifica el uso de rúbricas, portafolios y encuestas en la evaluación docente.",
            },
          ],
        },
        {
          id: "1.6",
          numbering: "1.6",
          title: "Modelos de evaluación del desempeño docente",
          content: [
            /* Párrafo 1 — Modelo basado en resultados y modelo por competencias */
            {
              type: "paragraph",
              text: "Los primeros modelos de evaluación del desempeño docente surgieron en la segunda mitad del siglo XX bajo la influencia de la gestión por resultados. El **modelo basado en resultados** equipara la efectividad del profesor con el rendimiento del alumnado en pruebas estandarizadas, argumentando que los puntajes reflejan la calidad de la enseñanza. Su principal fortaleza radica en la comparabilidad de datos y la rendición de cuentas; sin embargo, adolece de reduccionismo al obviar factores contextuales y promover la enseñanza centrada en la prueba. En contraste, el auge de la educación por competencias dio paso al **modelo de evaluación por competencias**, que valora la capacidad del docente para movilizar saberes, habilidades y actitudes en situaciones auténticas. Este enfoque se apoya en rúbricas descriptivas, observación estructurada y portafolios de evidencias, aportando una visión integral del proceso pedagógico. Aunque requiere mayor inversión formativa y tiempo, constituye un avance frente a la visión puramente cuantitativa de los resultados.",
            },

            /* Párrafo 2 — Modelo de práctica reflexiva y modelo integral */
            {
              type: "paragraph",
              text: "El **modelo de práctica reflexiva** desplaza el foco del control externo a la autorregulación profesional. Inspirado en Schön y la investigación‑acción, concibe al docente como investigador de su propia práctica. Diarios, bitácoras y transcripción de clases se convierten en insumos para el análisis crítico, la coevaluación entre pares y la generación de conocimiento pedagógico situado. Su aporte clave es la internalización de la mejora continua, aunque puede carecer de comparabilidad si se implementa en ausencia de criterios consensuados. Como respuesta, surge el **modelo integral**, que triangula información de múltiples fuentes: observación de aula, encuestas a estudiantes, autoevaluación, juicio de directivos y análisis de logros. Esta combinación reduce sesgos unidimensionales y ofrece una perspectiva holística del desempeño; exige, no obstante, una infraestructura organizativa robusta y capacitación especializada para mantener la coherencia entre datos cualitativos y cuantitativos.",
            },

            /* Párrafo 3 — Modelo contextualizado y tendencia digital */
            {
              type: "paragraph",
              text: "Los sistemas educativos latinoamericanos han advertido la necesidad de modelos sensibles a la diversidad. El **modelo contextualizado** ajusta estándares e instrumentos a las realidades socioculturales; evita comparaciones injustas y promueve la equidad al valorar la creatividad pedagógica frente a la carencia de recursos. Su reto es balancear flexibilidad con rigurosidad. En paralelo, la **tendencia digital** integra plataformas LMS, paneles de analítica de aprendizaje e inteligencia artificial para generar retroalimentación en tiempo real. Este enfoque complementa cualquier modelo previo, pero introduce desafíos éticos sobre la privacidad de datos y la brecha tecnológica. En síntesis, los modelos de evaluación docente evolucionan desde enfoques centrados en resultados hacia propuestas colaborativas, reflexivas y contextualizadas, articuladas con recursos digitales que potencian la personalización y la transparencia.",
            },

            /* Lista 1 — Modelos principales (síntesis del PDF) */
            {
              type: "list",
              style: "unordered",
              items: [
                "Modelo basado en resultados • Logros de estudiantes como indicador central.",
                "Modelo por competencias • Desempeños integrales en situaciones auténticas.",
                "Modelo de práctica reflexiva • Autoevaluación y coevaluación entre pares.",
                "Modelo integral • Triangulación de observación, encuestas y portafolio.",
                "Modelo contextualizado • Ajuste de criterios según entorno y recursos.",
                "Tendencia digital • Analítica de datos e IA para retroalimentación inmediata.",
              ],
            },

            /* Lista 2 — Ventajas y limitaciones de cada modelo */
            {
              type: "list",
              style: "ordered",
              items: [
                "**Resultados** – +Comparabilidad / –Reduce complejidad contextual.",
                "**Competencias** – +Visión holística / –Mayor carga de observación.",
                "**Reflexivo** – +Autonomía profesional / –Escasa estandarización.",
                "**Integral** – +Perspectiva 360° / –Requiere recursos logísticos.",
                "**Contextualizado** – +Equidad territorial / –Dificulta benchmarking.",
                "**Digital** – +Retroalimentación en tiempo real / –Brecha tecnológica.",
              ],
            },

            /* Video ilustrativo */
            {
              type: "video",
              title:
                "Lo que debes saber sobre la evaluación del desempeño docente",
              src: "https://www.youtube.com/watch?v=6F_2fco5tLs", // enlace citado en el PDF
              caption:
                "Analista educativo explica ventajas y desafíos de los distintos modelos de evaluación docente.",
            },
          ],
        },
        {
          id: "1.7",
          numbering: "1.7",
          title: "Modalidades de la evaluación docente",
          content: [
            /* Párrafo 1 — Evaluación formativa, sumativa y diagnóstica (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Las modalidades de evaluación docente responden a diferentes propósitos y momentos del proceso pedagógico. La **evaluación formativa** es continua y participativa: busca generar retroalimentación oportuna que oriente la mejora inmediata de la práctica. Se apoya en observaciones con rúbricas, diarios reflexivos y conversaciones entre pares. Su valor radica en que convierte la evaluación en aprendizaje profesional, no en juicio terminal. En contraste, la **evaluación sumativa** se aplica al cierre de un periodo y está ligada a decisiones administrativas —certificación, promoción o permanencia—; se apoya en indicadores estandarizados y aporta comparabilidad, aunque corre el riesgo de reducir la complejidad de la docencia a números. Entre ambos extremos se sitúa la **evaluación diagnóstica**, que precede a los planes de formación: identifica necesidades de desarrollo mediante cuestionarios, entrevistas y análisis de contexto. Al combinar estas tres modalidades, las instituciones articulan un ciclo virtuoso de diagnóstico, acompañamiento y rendición de cuentas que equilibra justicia y mejora continua.",
            },

            /* Párrafo 2 — Evaluación colegiada/interna y externa (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "La **evaluación colegiada** —o por pares— promueve la colaboración profesional: docentes observan clases, analizan portafolios y comparten buenas prácticas. Esta modalidad fortalece la autonomía y genera comunidades de aprendizaje, pero exige cultura de confianza y criterios consensuados para evitar subjetividad. Vinculada a ella está la **evaluación interna**, realizada por directivos o coordinadores académicos que conocen la misión institucional; permite ajustar criterios a la realidad de cada escuela y vincular la evaluación con la planificación estratégica. Su contrapeso es la **evaluación externa**, conducida por organismos acreditadores o expertos ajenos a la institución; aporta objetividad, garantiza la alineación con estándares nacionales y facilita la comparabilidad interinstitucional. No obstante, si se aplica sin sensibilidad contextual puede resultar invasiva o punitiva. La tendencia actual es complementar la mirada interna con la externa para lograr equilibrio entre pertinencia local y validez sistémica.",
            },

            /* Párrafo 3 — Evaluación integral e híbridos digitales (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Las experiencias contemporáneas convergen en la **evaluación integral**, que combina modalidades formativa, sumativa, diagnóstica, colegiada, interna y externa para ofrecer una visión 360° del desempeño docente. Este enfoque incorpora asimismo recursos digitales: plataformas de aprendizaje recogen analíticas de participación y desempeño en tiempo real; aplicaciones móviles permiten autoevaluaciones rápidas y encuestas al alumnado; sistemas de gestión de portafolios centralizan evidencias y facilitan la retroalimentación asincrónica. De esta hibridación emergen modalidades mixtas —presenciales‑virtuales— que reducen la sobrecarga administrativa y potencian la personalización de la retroalimentación. El desafío es garantizar la equidad digital y la protección de datos, así como desarrollar competencias tecnopedagógicas que permitan interpretar la información de manera crítica. En definitiva, las modalidades de evaluación docente evolucionan hacia sistemas flexibles, inclusivos y apoyados por tecnología, capaces de responder tanto a la diversidad de contextos como a la exigencia de calidad y transparencia.",
            },

            /* Acordeón 1 — Modalidades destacadas (según viñetas del PDF) */
            {
              type: "accordion",
              header: "Modalidades señaladas en el módulo",
              open: false,
              text:
                "* **Formativa** – Retroalimentación continua y plan de mejora.  \n" +
                "* **Sumativa** – Certificación, promoción, permanencia.  \n" +
                "* **Diagnóstica** – Detección de necesidades de formación.  \n" +
                "* **Colegiala / por pares** – Observación y diálogo profesional.  \n" +
                "* **Interna** – Evaluación contextualizada por directivos.  \n" +
                "* **Externa** – Acreditación y estándares nacionales.  \n" +
                "* **Integral** – Triangulación de múltiples fuentes y momentos.",
            },

            /* Acordeón 2 — Ventajas y desafíos de cada modalidad */
            {
              type: "accordion",
              header: "Ventajas y desafíos",
              open: false,
              text:
                "* **Formativa:** +Mejora inmediata / –Requiere cultura reflexiva.  \n" +
                "* **Sumativa:** +Comparabilidad / –Riesgo punitivo.  \n" +
                "* **Diagnóstica:** +Enfoque en necesidades / –Puede quedar aislada.  \n" +
                "* **Colegiala:** +Aprendizaje entre pares / –Posible sesgo de amistad.  \n" +
                "* **Interna:** +Pertinencia local / –Menor objetividad percibida.  \n" +
                "* **Externa:** +Objetividad y prestigio / –Costos y poca flexibilidad.  \n" +
                "* **Integral:** +Visión completa / –Alta exigencia logística.",
            },
          ],
        },
        {
          id: "1.8",
          numbering: "1.8",
          title: "Etapas del proceso de evaluación",
          content: [
            /* Párrafo 1 — Planificación y recolección (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "El proceso de evaluación docente inicia con la **planificación**, fase en la que se precisan propósito, alcance y criterios. Definir si la evaluación será formativa, sumativa o diagnóstica orienta la selección de instrumentos y el nivel de evidencia exigido. Se elaboran rúbricas, listas de cotejo y guías de observación vinculadas a estándares profesionales y al contexto institucional. Además, se calendarizan actividades y se comunican expectativas para garantizar transparencia. Con la estructura delineada, se pasa a la **recolección de información**: aplicación de encuestas a estudiantes, observación en aula, revisión de portafolios y entrevistas. Esta fase exige rigor metodológico para asegurar validez y confiabilidad; por ello, se combinan fuentes cuantitativas (puntuaciones, frecuencias) y cualitativas (notas de campo, testimonios), reduciendo el sesgo inherente a cada método. La participación activa del docente, mediante autoevaluaciones y evidencias seleccionadas, refuerza el carácter reflexivo del proceso. Sin una planificación clara y una recolección rigurosa, las etapas posteriores carecerán de sustento empírico sólido.",
            },

            /* Párrafo 2 — Análisis, interpretación y retroalimentación (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Con los datos disponibles, la **fase de análisis e interpretación** busca convertir cifras y descripciones en narrativas comprensibles. Se triangulan resultados: observaciones se contrastan con percepciones de estudiantes y autoevaluaciones; los portafolios se cotejan con las rúbricas de desempeño. Este enfoque múltiple atenúa la subjetividad y ofrece una visión holística del desempeño docente. Herramientas estadísticas básicas permiten detectar tendencias y diferenciales, mientras el análisis cualitativo identifica patrones de interacción, gestión del aula y uso de recursos. A continuación, se desarrolla la **retroalimentación y toma de decisiones**. Los hallazgos se presentan al docente de manera clara, específica y orientada a la mejora; se discuten fortalezas, áreas de oportunidad y se acuerdan planes de desarrollo profesional. La retroalimentación es constructiva, se apoya en ejemplos concretos y se enlaza a recursos formativos (talleres, mentorías). De esta manera, la evaluación trasciende su rol de medición para convertirse en catalizadora de cambio pedagógico.",
            },

            /* Párrafo 3 — Seguimiento, ajuste y cultura de mejora (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "La **fase de seguimiento y ajuste** cierra el ciclo evaluativo, asegurando que las acciones acordadas tengan impacto en la práctica docente. Incluye tutorías periódicas, observaciones de acompañamiento y revisión de nuevos portafolios para verificar la evolución. Cuando los progresos son insuficientes, se reorientan las estrategias o se proporcionan apoyos adicionales; cuando existen avances, se reconocen y documentan para inspirar buenas prácticas. Paralelamente, el comité evaluador analiza la pertinencia de criterios e instrumentos: si algún indicador resulta ambiguo o poco relevante, se ajusta para la siguiente iteración. Este enfoque cíclico consolida una **cultura de mejora continua**, donde la evaluación no es evento aislado sino práctica permanente que legitima la profesionalización docente y la rendición de cuentas. Al integrarse con sistemas digitales, el seguimiento se automatiza mediante analíticas de aprendizaje y recordatorios de progreso, lo que permite respuestas ágiles y personalizadas. Así, cada nueva vuelta del ciclo enriquece la calidad educativa y fortalece la autonomía profesional.",
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkINzYWVh90G9K8oNytcEeBCbFwtlS0ZL2AxdFDo7a593FtyMf-TV6WJxLkZv8Y-i4EtQVnOCV3KVBEX3UkNDD6Dsm0-Adbht6chDQ7X7u41FqSo8Q4A_BhkLXdRNsCnRCkGARonb3jGg1/s1600/Etapas+Evaluaci%25C3%25B3n+Docente+2.png", // diagrama simplificado de las cinco etapas
              alt: "Ciclo de evaluación docente: planificación, recolección, análisis, retroalimentación y seguimiento",
              caption: "Figura 1. Etapas del proceso de evaluación docente.",
            },

            /* Acordeón 1 — Etapas clave (viñetas del PDF) */
            {
              type: "accordion",
              header: "Resumen de etapas",
              open: false,
              text:
                "* **Planificación:** objetivos, criterios, estándares.  \n" +
                "* **Recolección de información:** observación, encuestas, portafolio.  \n" +
                "* **Análisis e interpretación:** triangulación de datos, identificación de patrones.  \n" +
                "* **Retroalimentación y decisiones:** diálogo docente‑evaluador, plan de mejora.  \n" +
                "* **Seguimiento y ajuste:** monitoreo de avances, revisión de instrumentos.",
            },

            /* Acordeón 2 — Roles y herramientas por etapa */
            {
              type: "accordion",
              header: "Roles y herramientas",
              open: false,
              text:
                "* **Comité evaluador:** diseña rúbricas, coordina observaciones.  \n" +
                "* **Docente:** provee evidencias, participa en la autoevaluación.  \n" +
                "* **Estudiantes:** responden encuestas de percepción.  \n" +
                "* **Herramientas digitales:** LMS, formularios en línea, panel de analíticas.  \n" +
                "* **Instrumentos cualitativos:** diarios de campo, entrevistas, estudio de casos.",
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
          href: "https://www.youtube.com/watch?v=W5RJCxYtrpE", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Evaluación docente con sentido (Buenos ejemplos para enseñar mejor). https://www.youtube.com/watch?v=KwOxlrVyt60 ",
            "“LO QUE DEBES SABER SOBRE LA EVALUCIÓN DEL DESEMPEÑO DOCENTE 2025 | ¡IMPRESCINDIBLE!” https://www.youtube.com/watch?v=z8z_vl_JD5k",
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
            "Coll, C. & Solé, I. (2020). *Currículum y evaluación en la educación obligatoria: Desafíos y perspectivas.* Barcelona: Graó.",
            "De Alba Ceballos, A. (2018). *Teoría curricular: Nuevas tendencias y perspectivas.* Ciudad de México: Siglo XXI Editores.",
            "Díaz Barriga, A. (2018). *Currículum, enseñanza y evaluación.* Ciudad de México: Trillas.",
            "Gimeno Sacristán, J. (2017). *Comprender y transformar la enseñanza.* Madrid: Morata.",
            "Perrenoud, P. (2008). *Diez nuevas competencias para enseñar.* Barcelona: Graó.",
            "Stufflebeam, D. & Shinkfield, A. (2007). *Evaluación sistemática: Teoría y práctica.* Barcelona: Paidós.",
            "Zabalza, M. Á. (2003). *Competencias docentes del profesorado universitario: Calidad y desarrollo profesional.* Madrid: Narcea Ediciones.",
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
