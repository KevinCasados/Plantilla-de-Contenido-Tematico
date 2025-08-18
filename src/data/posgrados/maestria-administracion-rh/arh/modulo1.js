/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MARH", // Maestría en Administración de Recursos Humanos
  courseId: "MARH-101",
  id: "MARH-101-modulo1",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Administración de Recursos Humanos",
  title: "Módulo 1. Administración de Recursos Humanos",
  semestre: "Primer semestre",
  teacher: "Mtra. Mirna Angélica Palafox Mariscal",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Al término del módulo, los aprendientes conocerán y analizarán las generalidades, objetivos y funciones primordiales de la Administración de Recursos Humanos para reconocer y valorar la importancia de las personas en la organización, sentando las bases para una mejor toma de decisiones respecto a la elección, incorporación y administración del capital humano.",

  competencies: [
    "Identifica y comprende el contenido de las unidades temáticas y los lineamientos del curso.",
    "Reconoce la importancia de las personas en las organizaciones y su participación dentro de ellas.",
    "Visualiza a la organización como un sistema e identifica el lugar y las funciones básicas del área de Recursos Humanos y sus componentes.",
    "Sienta las bases para la adecuada comprensión y análisis de los temas subsecuentes del curso.",
  ],

  /* ── Contenido temático (jerarquía recursiva) ─────────── */
  themes: [
    /* 0) Página Info (opcional) */
    {
      id: "X.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [],
    },

    /* 1) Unidad 1 — Administración de Recursos Humanos */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Administración de Recursos Humanos",
      content: [
        /* Párrafo 1 (≈200 palabras) — ¿Por qué estudiar ARH hoy? */
        {
          type: "paragraph",
          text: "La Administración de Recursos Humanos (ARH) parte de una premisa central: las personas no son solo un “factor de producción”, sino el activo estratégico que habilita (o limita) la ejecución de cualquier estrategia organizacional. En un entorno caracterizado por la digitalización, la globalización de los mercados laborales, la presión competitiva y la demanda de trabajo flexible, la ARH se convierte en el puente entre la estrategia corporativa y las capacidades del capital humano. En esta unidad delinearemos los fundamentos conceptuales, las funciones nucleares y el rol estratégico del área, de modo que puedas comprender cómo se articulan procesos como la planeación de personal, el reclutamiento y la selección, la capacitación y el desarrollo, la evaluación del desempeño y la compensación, con la creación sostenida de valor. El énfasis no será únicamente operativo: analizaremos cómo la ARH contribuye a construir culturas organizacionales éticas, inclusivas y de alto rendimiento, capaces de atraer, comprometer y retener talento en contextos de cambio permanente.",
        },

        /* Párrafo 2 (≈200 palabras) — Personas, capital humano y capital intelectual */
        {
          type: "paragraph",
          text: "Diferenciar entre “recursos humanos”, “capital humano” y “capital intelectual” es clave para entender el alcance de la función. Mientras que el primer término describe a las personas que laboran en la organización, el capital humano enfatiza el acervo de conocimientos, habilidades y actitudes que poseen y que tiene valor económico. El capital intelectual, por su parte, subraya la suma de ese acervo convertido en ventaja competitiva sostenible. Desde esta óptica, gestionar personas implica diagnosticar brechas de competencias, diseñar trayectorias formativas, impulsar la transferencia del conocimiento y generar mecanismos de aprendizaje continuo. La ARH moderna, por tanto, abandona la lógica meramente administrativa y adopta un enfoque sistémico y estratégico: alinea la arquitectura de puestos, los sistemas de recompensas, la evaluación del desempeño y los planes de carrera con los objetivos del negocio. Esta visión exige métricas (KPIs) que permitan demostrar el impacto de las decisiones de personal en productividad, innovación, clima laboral y resultados financieros.",
        },

        /* Párrafo 3 (≈200 palabras) — Funciones clásicas y retos contemporáneos */
        {
          type: "paragraph",
          text: "Históricamente, la función de personal transitó desde un rol centrado en el control administrativo hacia otro de carácter consultivo‑estratégico. Hoy, además de cumplir con la normativa laboral, administrar nómina y asegurar la salud y seguridad ocupacional, el área lidera procesos críticos: planeación estratégica de RH, reclutamiento y selección basados en evidencias, inducción eficaz, capacitación y desarrollo orientados al futuro, gestión del desempeño con retroalimentación continua y esquemas retributivos competitivos y equitativos. A estos pilares se suman desafíos emergentes: analítica de personas (people analytics) para la toma de decisiones, gestión de la diversidad e inclusión, teletrabajo e híbridos, bienestar integral, sostenibilidad y responsabilidad social, así como la adopción de tecnologías (ATS, LMS, HRIS) que permitan escalar procesos sin perder la dimensión humana. Esta complejidad demanda profesionales de RH capaces de dialogar con finanzas, operaciones y tecnología, y de traducir necesidades estratégicas en políticas y prácticas de talento coherentes.",
        },

        /* Párrafo 4 (≈200 palabras) — Planeación estratégica de RH como bisagra */
        {
          type: "paragraph",
          text: "La planeación estratégica de recursos humanos es la bisagra que conecta la estrategia corporativa con las capacidades presentes y futuras de la plantilla. Implica anticipar escenarios de oferta y demanda de talento, identificar roles críticos, mapear competencias estratégicas, definir brechas y convertirlas en programas de atracción, desarrollo, movilidad interna y sucesión. También supone decidir, con criterios éticos y de sostenibilidad, cuándo conviene internalizar, subcontratar (outsourcing), deslocalizar (offshoring) o automatizar determinadas funciones. Planear no es solo proyectar números de dotación: es diseñar una arquitectura organizacional ágil, con estructuras, procesos y culturas que faciliten la colaboración, el aprendizaje y la innovación. En esta unidad revisaremos los pasos, herramientas y métricas de la planeación (workforce planning), así como sus vínculos con la gestión del desempeño, la compensación estratégica y la formación basada en competencias, para asegurar que cada decisión sobre personas esté alineada con el rumbo de la organización.",
        },

        /* Párrafo 5 (≈200 palabras) — De la evaluación del desempeño al desarrollo continuo */
        {
          type: "paragraph",
          text: "Finalmente, la ARH actual desplaza los enfoques evaluativos centrados exclusivamente en el pasado hacia marcos de mejora continua y conversación permanente sobre el desempeño. Esto significa rediseñar los sistemas de evaluación para que sean válidos, equitativos y útiles: incorporar retroalimentación 360°, rúbricas claras, metas SMART alineadas al negocio y planes individuales de desarrollo. El objetivo no es “clasificar” personas, sino acelerar su aprendizaje, potenciar el desempeño colectivo y sostener el compromiso. En paralelo, la capacitación y el desarrollo dejan de ser eventos aislados para convertirse en ecosistemas de aprendizaje (L&D) que combinan formación formal, aprendizaje social y experiencias en el puesto, apalancadas por plataformas digitales y analítica del aprendizaje. Con esta mirada integral, la ARH se posiciona como función estratégica que cuida simultáneamente la productividad y el bienestar, construyendo organizaciones más resilientes, innovadoras y humanamente sostenibles.",
        },

        /* Acordeón — 3 niveles de síntesis de la unidad */
        {
          type: "accordion",
          header: "Mapa en 3 niveles de la Unidad 1",
          open: false,
          text:
            "**Nivel 1 – Visión estratégica**  \n" +
            "• Las personas como ventaja competitiva.  \n" +
            "• ARH como socio estratégico del negocio.  \n" +
            "• Planeación de RH alineada a la estrategia corporativa.  \n\n" +
            "**Nivel 2 – Procesos clave**  \n" +
            "• Planeación, reclutamiento, selección e inducción.  \n" +
            "• Capacitación, desarrollo y gestión del desempeño.  \n" +
            "• Compensación, relaciones laborales, seguridad y salud.  \n\n" +
            "**Nivel 3 – Retos emergentes**  \n" +
            "• People analytics, digitalización y trabajo híbrido.  \n" +
            "• Diversidad, equidad e inclusión; bienestar integral.  \n" +
            "• Sostenibilidad, ética y responsabilidad social.",
        },
      ],
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "Generalidades",
          content: [
            /* Párrafo 1 (≈300 palabras) — Concepto y propósito de la ARH */
            {
              type: "paragraph",
              text: "Las generalidades de la Administración de Recursos Humanos (ARH) parten del reconocimiento de las personas como el factor estratégico que convierte la estrategia en resultados. Bajo esta perspectiva, la ARH deja de ser un departamento meramente administrativo para convertirse en un socio estratégico que provee, desarrolla, compromete y retiene el talento necesario para ejecutar el plan de negocio. En términos amplios, la ARH comprende un conjunto de políticas, procesos y prácticas integradas —planeación de personal, reclutamiento y selección, inducción, capacitación y desarrollo, evaluación del desempeño, compensaciones y beneficios, relaciones laborales, seguridad y salud ocupacional— que buscan alinear las capacidades individuales y colectivas con los objetivos organizacionales. Su razón de ser es doble: por un lado, asegurar la productividad y la sostenibilidad competitiva de la empresa; por el otro, garantizar condiciones de trabajo dignas, justas y orientadas al bienestar integral de las y los colaboradores. Estas dos lógicas (negocio y personas) no se oponen, se articulan: cuando la organización gestiona de forma ética, transparente y basada en evidencias su capital humano, eleva el compromiso, la innovación, la calidad del servicio y, en consecuencia, el desempeño global.",
            },

            /* Párrafo 2 (≈300 palabras) — Evolución histórica y rol estratégico */
            {
              type: "paragraph",
              text: "Históricamente, la función de personal pasó por cuatro etapas: (1) una fase legal‑administrativa, centrada en nómina y cumplimiento normativo; (2) una fase de relaciones industriales, enfocada en la negociación colectiva y el clima laboral; (3) una fase de gestión de recursos humanos, con procesos estructurados para atraer, desarrollar y compensar talento; y (4) la etapa actual, estratégica y basada en datos (people analytics), donde RH contribuye al diseño organizacional, la transformación cultural y la creación de ventajas competitivas sostenibles. Este tránsito implicó profesionalizar la función, adoptar metodologías de planeación estratégica de la fuerza laboral (workforce planning), desarrollar tableros de indicadores (KPI & OKR) y establecer mecanismos de gobernanza del talento (comités de sucesión, planes de carrera, esquemas de desempeño continuo). En paralelo, emergieron nuevas prioridades: diversidad, equidad e inclusión; salud mental y bienestar; modelos híbridos de trabajo; automatización y reskilling; así como el uso de tecnologías (HRIS, ATS, LMS) para escalar procesos sin perder la centralidad de lo humano. La ARH, en síntesis, hoy es un agente de cambio que traduce la estrategia en capacidades y cultura.",
            },

            /* Párrafo 3 (≈300 palabras) — Marco normativo, ética y sostenibilidad */
            {
              type: "paragraph",
              text: "Las generalidades también abarcan el marco normativo y ético que rige la gestión de personas. Toda práctica de ARH debe observar el cumplimiento de la legislación laboral vigente (contratación, jornadas, salarios, seguridad social, igualdad y no discriminación), de las normas de seguridad y salud en el trabajo, y de las políticas internas de integridad corporativa. Pero el cumplimiento —aunque necesario— es insuficiente si no se acompaña de principios éticos: transparencia en los procesos de selección y promoción, equidad salarial, confidencialidad de los datos personales, meritocracia real y mecanismos efectivos para atender acoso, violencia y discriminación. En la misma línea, la sostenibilidad social invita a concebir la ARH como una práctica que favorece la empleabilidad futura de las personas (aprendizaje continuo), la conciliación trabajo‑vida y la participación corresponsable en la construcción de culturas organizacionales saludables. Así, la ARH opera en la intersección entre resultados del negocio, derechos laborales y responsabilidad social.",
            },

            /* Párrafo 4 (≈300 palabras) — Procesos, métricas y analítica de personas */
            {
              type: "paragraph",
              text: "Operativamente, las generalidades de la ARH se materializan en procesos cíclicos e interdependientes: atraer (employer branding, reclutamiento y selección basada en evidencias), integrar (inducción y socialización), desarrollar (capacitación, mentoring, coaching, planes de carrera), evaluar (gestión del desempeño con metas SMART, feedback continuo, 360°), recompensar (compensación total: salario fijo, variable, beneficios y reconocimientos no monetarios) y retener (engagement, clima, movilidad interna, sucesión). Para gestionarlos con rigor, se requieren métricas que permitan demostrar impacto: rotación voluntaria por roles críticos, tiempo de cobertura de vacantes, calidad de contratación, ROI de capacitación, productividad por FTE, eNPS, índices de equidad salarial, entre otros. La analítica de personas (people analytics) habilita pasar de la intuición al análisis causal y predictivo, identificando patrones (por ejemplo, factores que explican la rotación) y diseñando intervenciones más efectivas. Estas capacidades cuantitativas deben combinarse con herramientas cualitativas (entrevistas, focus groups, mapas de experiencia del empleado) para una comprensión holística del ciclo de vida del talento.",
            },

            /* Acordeón 1 — Ideas fuerza del subtema (según el PDF) */
            {
              type: "accordion",
              header: "Claves del subtema 1.1 — Generalidades",
              open: false,
              text:
                "* **Las personas como ventaja competitiva:** del recurso al capital humano/intelectual.  \n" +
                "* **RH como socio estratégico:** alinea política de talento con la estrategia corporativa.  \n" +
                "* **Procesos integrados:** atraer, desarrollar, evaluar, compensar y retener.  \n" +
                "* **Marco ético‑legal:** cumplimiento, equidad, no discriminación, confidencialidad.  \n" +
                "* **People analytics:** decisiones basadas en datos y evidencia.  \n" +
                "* **Bienestar y DEI:** diversidad, equidad, inclusión y salud integral como ejes.",
            },

            /* Acordeón 2 — Términos y distinciones esenciales */
            {
              type: "accordion",
              header: "Glosario mínimo y distinciones conceptuales",
              open: false,
              text:
                "* **Recursos Humanos vs. Capital Humano vs. Capital Intelectual**  \n" +
                "* **Workforce Planning (Planeación de RH)**  \n" +
                "* **Employee Experience (EX) y Engagement**  \n" +
                "* **Gestión del desempeño continuo vs. evaluación anual tradicional**  \n" +
                "* **Compensación total (Total Rewards)**  \n" +
                "* **People/HR Analytics y métricas clave (KPI/OKR)**",
            },

            /* Video de apoyo */
            {
              type: "video",
              title:
                "Introducción estratégica a la Administración de Recursos Humanos",
              src: "https://www.youtube.com/watch?v=b4TGfBqLFjM",
              caption:
                "Panorama general sobre el paso de RH operativo a socio estratégico del negocio.",
            },
          ],
        },
        {
          id: "1.2",
          numbering: "1.2",
          title: "La gestión de recursos humanos",
          content: [
            /* Párrafo 1 (~300 palabras) — Enfoque, propósito y alcance estratégico */
            {
              type: "paragraph",
              text: "La gestión de recursos humanos (GRH) trasciende la visión administrativa tradicional para convertirse en un sistema estratégico que alinea las prácticas de atracción, desarrollo, compensación y retención del talento con los objetivos del negocio. Su foco ya no se limita a ‘hacer que las personas cumplan funciones’, sino a crear condiciones para que el capital humano —conocimientos, habilidades, actitudes y potencial innovador— se traduzca en ventaja competitiva sostenible. Ello implica comprender la organización como un sistema socio‑técnico donde las decisiones sobre personas impactan productividad, calidad, clima laboral y reputación corporativa. Desde esta óptica, la GRH integra procesos como la planificación estratégica de personal (prever oferta y demanda de talento, perfiles críticos y brechas de capacidades), el diseño de estructuras y puestos, la selección basada en competencias, la inducción efectiva, la capacitación y el desarrollo profesional continuo, así como la evaluación del desempeño con retroalimentación formativa. También asume funciones transversales clave: la gestión del cambio cultural, la promoción del bienestar y la salud ocupacional, la comunicación interna, la igualdad, diversidad e inclusión, y la ética en la toma de decisiones. Finalmente, la digitalización y el uso de analítica de personas (people analytics) permiten pasar de prácticas reactivas a decisiones basadas en datos, elevando la precisión en el diagnóstico, la intervención y la medición del impacto.",
            },

            /* Lista 1 — Componentes clave de la GRH (bullets) */
            {
              type: "list",
              style: "bulleted",
              title: "Componentes clave de la gestión de recursos humanos",
              items: [
                "Planificación estratégica de RH: alinear personas, capacidades y estructura con la estrategia corporativa.",
                "Atracción, selección e inducción basadas en competencias y ajuste cultural.",
                "Capacitación, formación continua y gestión del conocimiento para sostener la empleabilidad interna.",
                "Evaluación del desempeño y retroalimentación con enfoque formativo, no solo punitivo.",
                "Compensaciones y beneficios competitivos y equitativos (retributivos, emocionales y de desarrollo).",
                "Bienestar, seguridad y salud laboral como parte del valor integral al colaborador.",
                "Gestión del cambio, comunicación interna y cultura organizacional.",
                "People analytics y digitalización de procesos (LMS, ATS, HRIS, paneles de indicadores).",
              ],
            },

            /* Párrafo 2 (~300 palabras) — Tendencias, digitalización y people analytics */
            {
              type: "paragraph",
              text: "Las transformaciones tecnológicas, la globalización y los cambios demográficos han reconfigurado radicalmente el quehacer de la GRH. Hoy, la digitalización habilita procesos más ágiles (ATS para reclutamiento, LMS para formación, HRIS para la administración integral del ciclo de vida del empleado) y abre la puerta a la analítica avanzada para anticipar rotación, mapear habilidades críticas, personalizar el aprendizaje o correlacionar prácticas de liderazgo con resultados de negocio. Este uso intensivo de datos exige, sin embargo, un marco ético y de privacidad bien definido: medir para mejorar, no para vigilar; generar transparencia en los criterios; y convertir los insights en decisiones que incrementen el valor para la persona y la organización. En paralelo, la flexibilidad laboral (teletrabajo, esquemas híbridos, horarios flexibles) demanda rediseñar políticas, métricas de desempeño y prácticas de liderazgo, poniendo acento en confianza, autonomía, resultados y bienestar psicosocial. Asimismo, la agenda de diversidad, equidad e inclusión (DEI) pasa a ser un imperativo estratégico que influye en reputación, innovación y atracción de talento. La GRH, entonces, se convierte en un socio estratégico capaz de integrar perspectivas jurídicas, económicas, tecnológicas y psicosociales, gestionando tensiones entre eficiencia y humanismo, control y empoderamiento, estandarización y personalización. El reto es construir arquitecturas de gestión que garanticen coherencia entre el discurso y la práctica, articulando procesos ‘duros’ (políticas, indicadores, sistemas) con procesos ‘blandos’ (cultura, liderazgo, sentido del trabajo).",
            },

            /* Lista 2 — Retos actuales y respuestas estratégicas (numerada) */
            {
              type: "list",
              style: "numbered",
              title: "Retos actuales y respuestas estratégicas de la GRH",
              items: [
                "Escasez de talento crítico → Mapas de sucesión, upskilling/reskilling y academias internas.",
                "Alta rotación y desenganche → Experiencia del empleado (EX), liderazgo inclusivo y gestión del propósito.",
                "Transformación digital acelerada → People analytics, automatización de procesos y alfabetización de datos en RH.",
                "Trabajo híbrido/remoto → Políticas flexibles, medición por OKR/KPI y programas de bienestar integral.",
                "Exigencias de equidad y transparencia → Modelos retributivos claros, evaluaciones objetivas y métricas DEI públicas.",
                "Sostenibilidad y responsabilidad social → Integrar ESG en indicadores de talento y en la propuesta de valor al empleado.",
              ],
            },

            /* Párrafo 3 (~300 palabras) — Planificación estratégica de RH y medición del impacto */
            {
              type: "paragraph",
              text: "La planificación estratégica de recursos humanos constituye el núcleo operativo que permite convertir la estrategia organizacional en capacidades concretas. Inicia con un diagnóstico de la situación interna (inventario de competencias, análisis de puestos, desempeño, clima, rotación y absentismo) y del entorno (tendencias del mercado laboral, marcos regulatorios, disrupciones tecnológicas). A partir de ahí se definen brechas (gap analysis) entre las competencias actuales y las requeridas para ejecutar la estrategia. Las respuestas pueden incluir rediseño de la estructura, incorporación de nuevos perfiles, programas de reskilling, movilidad interna, red de talento contingente (outsourcing, freelancers) o acuerdos de colaboración academia‑empresa. El éxito de la planificación depende de la gobernanza de datos y de tableros (dashboards) que permitan monitorear indicadores críticos: tiempo de cobertura de vacantes críticas, costo por contratación, índice de rotación voluntaria en talento clave, cobertura de planes de sucesión, impacto de la capacitación en desempeño, equidad salarial, eNPS o índice de compromiso, entre otros. Medir es imprescindible, pero no suficiente: se requiere traducir los hallazgos en decisiones ágiles, cerrar el ciclo con retroalimentación a líderes y colaboradores, y ajustar las políticas cuando el contexto varíe. En síntesis, la GRH estratégica no es un conjunto de trámites, sino un sistema de creación de valor que integra datos, procesos, personas y cultura para asegurar que la organización tenga —hoy y mañana— el talento correcto, con las capacidades correctas, en el lugar correcto, al costo correcto y bajo condiciones de trabajo dignas y sostenibles.",
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://grhpidec.wordpress.com/wp-content/uploads/2017/06/image394.gif",
              alt: "Ciclo estratégico de la gestión de recursos humanos",
              caption:
                "Del diagnóstico al impacto: planificación, ejecución y medición continua en la GRH.",
            },
          ],
          subthemes: [
            {
              id: "1.2.1",
              numbering: "1.2.1",
              title: "Conceptos básicos",
              content: [
                /* Párrafo 1 (~300 palabras) — ¿Qué entendemos por GRH y por qué “recursos” ya no basta? */
                {
                  type: "paragraph",
                  text: "Antes de operar cualquier proceso de talento es indispensable aclarar el vocabulario mínimo común. Tradicionalmente se hablaba de Administración de Personal para referirse a un conjunto de tareas administrativas (nómina, altas y bajas, control de expedientes). La Gestión de Recursos Humanos (GRH), en cambio, desplaza el foco hacia la alineación estratégica entre las personas y los objetivos del negocio. De ahí que, cada vez con más frecuencia, se hable de Gestión del Talento o de Personas, subrayando que los colaboradores no son un ‘recurso’ intercambiable, sino portadores de conocimiento, capacidades de aprendizaje y potencial innovador. En este marco, el capital humano se entiende como el stock de competencias, experiencia y actitudes que un individuo aporta; mientras que el capital intelectual agrega los activos intangibles colectivos (rutinas organizacionales, cultura, propiedad intelectual, redes, datos) que la empresa es capaz de preservar y escalar. Conceptos como competencia (combinación observable de saber, saber hacer y saber ser aplicada a un contexto), puesto (conjunto de responsabilidades y atribuciones formales), rol (expectativas dinámicas asociadas a la contribución dentro de un equipo) y descripción/valuación de puestos (documentos y métodos para definir y asignar valor relativo a cada función) constituyen la gramática operativa del área. Finalmente, la noción de ciclo de vida del colaborador (employee lifecycle) integra estas piezas en etapas: atracción, selección, onboarding, desarrollo, evaluación, compensación, movilidad y salida; cada etapa con métricas, riesgos y decisiones específicas.",
                },

                /* Acordeón 1 — Diccionario mínimo de conceptos */
                {
                  type: "accordion",
                  header: "Diccionario mínimo para hablar el mismo idioma",
                  open: false,
                  text:
                    "* **Administración de Personal:** enfoque operativo/administrativo centrado en el cumplimiento. \n" +
                    "* **Gestión de Recursos Humanos (GRH):** sistema estratégico que alinea prácticas de personas y estrategia. \n" +
                    "* **Gestión del Talento / People Management:** énfasis en capacidades críticas, desarrollo y potencial. \n" +
                    "* **Capital humano:** competencias individuales (conocimientos, habilidades, actitudes). \n" +
                    "* **Capital intelectual:** activos intangibles colectivos (procesos, cultura, datos, know‑how). \n" +
                    "* **Competencia:** desempeño observable que integra saber, saber hacer y saber ser. \n" +
                    "* **Puesto vs. rol:** el primero es formal y relativamente estable; el segundo, dinámico y situacional. \n" +
                    "* **Employee lifecycle:** recorrido completo del colaborador por la organización.",
                },

                /* Párrafo 2 (~300 palabras) — Principios rectores y marcos de referencia */
                {
                  type: "paragraph",
                  text: "Definir conceptos también implica abrazar principios que operativizan la función. El primero es la coherencia estratégica: toda política de personas debe probar cómo contribuye (directa o indirectamente) a una meta corporativa. El segundo, la equidad interna y competitividad externa: las estructuras salariales, los criterios de promoción y los mecanismos de reconocimiento deben ser justos hacia adentro y atractivos frente al mercado. El tercero, la transparencia y la ética: reglas claras, criterios comunicados y resguardo de datos sensibles. El cuarto, la orientación a la evidencia: la intuición gerencial se complementa con indicadores, analítica y experimentación controlada (people analytics). Finalmente, la centralidad de la experiencia del empleado (EX) y el aprendizaje continuo: la GRH moderna diseña journeys de talento donde la persona encuentra sentido, oportunidades de crecimiento, seguridad psicológica y flexibilidad para conciliar vida‑trabajo. Para sostener estos principios, se recurre a marcos y estándares: la gestión por competencias, los sistemas de gestión de la calidad (p. ej., ISO 9001 aplicados a procesos de RH), los modelos de madurez (HR Maturity Models), los OKR/KPI como arquitectura de medición y los códigos de conducta y cumplimiento laboral. Todos ellos otorgan lenguaje, prácticas y umbrales de desempeño que ayudan a evitar arbitrariedades y a hacer comparables los resultados entre áreas, periodos y organizaciones.",
                },

                /* Acordeón 2 — Métricas esenciales que deberías monitorear desde el día 1 */
                {
                  type: "accordion",
                  header:
                    "Métricas esenciales (KPI) en conceptos básicos de GRH",
                  open: false,
                  text:
                    "* **Time to fill / time to hire:** días para cubrir una vacante / para emitir oferta aceptada. \n" +
                    "* **Costo por contratación:** inversión total del proceso / número de contrataciones. \n" +
                    "* **Rotación voluntaria / no voluntaria:** porcentaje por periodo, diferenciando talento crítico. \n" +
                    "* **eNPS / engagement:** termómetro del compromiso y recomendación de la organización. \n" +
                    "* **Coverage de planes de sucesión:** % de puestos críticos con sucesores listos (ready now/ready later). \n" +
                    "* **Equidad salarial interna:** dispersión y brechas por género, nivel y rol. \n" +
                    "* **Horas de formación por FTE e impacto en desempeño:** relación esfuerzo‑resultado.",
                },

                /* Párrafo 3 (~300 palabras) — Del concepto a la práctica: roles, políticas y gobierno de datos */
                {
                  type: "paragraph",
                  text: "Aterrizar los conceptos básicos en la práctica diaria exige clarificar roles (qué hace RH corporativo, qué hacen los HR Business Partners, qué responsabilidades tienen los líderes de línea y qué derechos y deberes poseen los colaboradores) y formalizar políticas (reclutamiento, igualdad y no discriminación, compensaciones, teletrabajo, protección de datos personales, prevención del acoso, etc.). Igualmente, se necesita una arquitectura tecnológica mínima: un HRIS para el registro maestro de personas, un ATS para el reclutamiento, un LMS para la formación y, de ser posible, una capa de business intelligence para consolidar y visualizar indicadores. El gobierno de datos (data governance) en RH es otro pilar: definir qué se mide, cómo se mide, quién accede, con qué propósito y bajo qué resguardos legales/éticos. Con ello, los conceptos dejan de ser definiciones aisladas para convertirse en un sistema operativo que permite comparar escenarios, tomar decisiones basadas en evidencias y demostrar el retorno de la inversión en iniciativas de talento. En síntesis, ‘Conceptos básicos’ no es un glosario decorativo: es el cimiento semántico, metodológico y ético que evita ambigüedades, mitiga riesgos y maximiza el valor que la gestión de personas aporta al negocio y a la sociedad.",
                },

                /* Video de apoyo */
                {
                  type: "video",
                  title:
                    "Gestión de Recursos Humanos: conceptos esenciales y alcance estratégico",
                  src: "https://www.youtube.com/watch?v=P17YiH08Z4Y", // reemplaza por el que prefieras usar en tu plataforma
                  caption:
                    "Resumen audiovisual de los términos y principios base de la GRH contemporánea.",
                },
              ],
            },
            {
              id: "1.2.2",
              numbering: "1.2.2",
              title: "Planificación estratégica de recursos humanos",
              content: [
                /* Párrafo 1 (~300 palabras) — ¿Qué es la planificación estratégica de RH (SWP) y por qué es clave? */
                {
                  type: "paragraph",
                  text: "La planificación estratégica de recursos humanos (Strategic Workforce Planning, SWP) es el proceso sistemático mediante el cual una organización anticipa la oferta y la demanda futura de talento para asegurar que, en el momento correcto, cuente con las personas adecuadas, con las competencias pertinentes y en el costo óptimo. A diferencia de la planificación operativa, que suele reaccionar al corto plazo (llenar vacantes, cubrir incapacidades o picos de producción), la SWP alinea el mapa de capacidades con los objetivos estratégicos, los escenarios de negocio y las transformaciones tecnológicas. Implica traducir la estrategia corporativa (crecer en X mercados, digitalizar procesos, migrar a modelos híbridos, automatizar la cadena de suministro) en requerimientos de roles, skills y headcount proyectados. Para ello, se combinan métodos cuantitativos (proyecciones de demanda, tasas históricas de rotación, modelos de productividad) con insumos cualitativos (entrevistas con líderes, análisis de riesgos críticos, mapeo de capacidades distintivas). El resultado no es solo un número de FTEs requeridos, sino un portafolio de iniciativas: re‑skill y up‑skill de la plantilla existente, atracción selectiva de talento crítico, automatización de tareas de bajo valor, outsourcing/insourcing, rediseño de puestos y planes de sucesión. Cuando la SWP se implementa con rigor, reduce costos de contratación reactiva, acelera el time‑to‑productivity, protege posiciones clave y habilita una asignación de recursos más equitativa y basada en evidencia. Además, hace visible la brecha entre las competencias actuales y las que exige el futuro del trabajo, permitiendo priorizar inversiones de aprendizaje y desarrollo con impacto directo en la ventaja competitiva.",
                },

                /* Lista 1 — Pasos esenciales del proceso de SWP */
                {
                  type: "list",
                  style: "unordered",
                  items: [
                    "Traducción de la estrategia de negocio a capacidades críticas (capability mapping).",
                    "Proyección de demanda de talento (roles, headcount, skills) por escenario.",
                    "Análisis de oferta interna: inventario de competencias, desempeño y potencial.",
                    "Detección de brechas (gap analysis) y priorización según criticidad y riesgo.",
                    "Diseño de portafolio de soluciones: build (L&D), buy (reclutamiento), borrow (outsourcing), bot (automatización).",
                    "Roadmap, presupuesto, métricas (KPI/OKR) y gobernanza del plan.",
                    "Monitoreo continuo y revisión de supuestos (ciclos trimestrales o semestrales).",
                  ],
                },

                /* Párrafo 2 (~300 palabras) — Herramientas, datos y métricas para decidir con evidencia */
                {
                  type: "paragraph",
                  text: "La efectividad de la planificación estratégica de RH depende en gran medida de la calidad y gobernanza de los datos. Un HRIS robusto y fuentes externas (benchmarks salariales, proyecciones demográficas, tendencias del mercado laboral) alimentan modelos de analítica que estiman la demanda de talento por escenarios (optimista, base, conservador) y calculan el costo de cada alternativa para cerrar brechas. Métricas como el time to fill, turnover voluntario y no voluntario, aging de vacantes, cobertura de planes de sucesión, densidad de competencias críticas, equidad salarial y costo por FTE permiten monitorear la salud de la fuerza laboral. Asimismo, los modelos de skills‑based planning –que mueven el foco del “puesto” al “conjunto de habilidades”– facilitan reubicar personas entre funciones, reducir duplicidades y acelerar la movilidad interna. Complementariamente, los heatmaps de riesgo (por ejemplo, de salida de talento clave o de obsolescencia de competencias) ayudan a priorizar intervenciones de capacitación, retención y rediseño organizacional. La SWP moderna incorpora también técnicas de scenario planning y simulaciones Monte Carlo para estimar probabilidades de ocurrencia y bandas de confianza. Todo ello debe enmarcarse en un gobierno claro de datos: quién mide qué, con qué definiciones, periodicidad, responsables y estándares de privacidad.",
                },

                /* Imagen ilustrativa (diagrama de flujo del proceso de SWP) */
                {
                  type: "image",
                  src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", // reemplaza si usarás tus propios assets
                  alt: "Mapa de capacidades y brechas de talento",
                  caption:
                    "Del objetivo estratégico a la brecha de skills: visualizando la SWP.",
                },

                /* Lista 2 — Riesgos frecuentes y cómo mitigarlos */
                {
                  type: "list",
                  style: "unordered",
                  items: [
                    "Planear solo headcount, ignorando competencias → Adoptar catálogos y taxonomías de skills.",
                    "Trabajar con datos incompletos o desactualizados → Definir un data governance de RH y un HRIS central.",
                    "No involucrar a los líderes de línea → Co‑construir escenarios y supuestos con finanzas y áreas de negocio.",
                    "No medir impacto → Establecer KPI/OKR (p. ej., cobertura de sucesión, reducción de time‑to‑productivity, % de puestos críticos con plan de desarrollo).",
                    "Tratar la SWP como evento anual → Revisar trimestral/semestralmente para ajustar a cambios del negocio.",
                  ],
                },

                /* Párrafo 3 (~300 palabras) — Del plan al despliegue: roadmap, gobierno y cultura de talento */
                {
                  type: "paragraph",
                  text: "El verdadero valor de la planificación estratégica de RH se prueba en su ejecución. Un roadmap eficaz define marcos temporales (quick wins vs. iniciativas transformacionales), responsables (RH corporativo, HRBP, líderes de unidad), presupuesto estimado e hitos verificables. Requiere un comité de gobernanza interfuncional (RH, Finanzas, Estrategia, Operaciones) que valide supuestos, priorice inversiones y revise resultados. La comunicación transparente es clave para construir confianza: explicar por qué se priorizan determinadas competencias, cómo se tomarán decisiones de movilidad interna, qué garantías existen de equidad y cómo se protegerán los datos personales. En paralelo, se activa un frente de desarrollo: academias internas, itinerarios de upskilling/reskilling, acuerdos con instituciones educativas, mentoring y proyectos stretch. Finalmente, se institucionaliza el aprendizaje del proceso: después de cada ciclo, se comparan proyecciones vs. realidades, se ajustan fórmulas, se incorporan nuevas variables (automatización, IA generativa, regulación laboral) y se refuerza la cultura de decisiones basadas en evidencias. En síntesis, la planificación estratégica de recursos humanos es un sistema vivo: conecta la estrategia del negocio con la arquitectura de talento, traduce incertidumbre en escenarios gestionables y convierte los datos en decisiones que maximizan el valor humano y organizacional.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* 2) Unidad 2 — Área de Recursos Humanos */
    {
      id: "2",
      numbering: "Unidad 2",
      title: "Área de Recursos Humanos",
      content: [
        /* Párrafo 1 (~200 palabras) */
        {
          type: "paragraph",
          text: "El área de Recursos Humanos (RR. HH.) concentra las decisiones, políticas y prácticas que articulan la relación entre la organización y las personas que la integran. A diferencia de una visión administrativista centrada solo en trámites y nómina, hoy se concibe como un socio estratégico que alinea el talento con el plan de negocios, anticipa necesidades de capacidades y habilita la transformación cultural. Su aporte va desde lo operativo —contratación, altas, bajas, control de incidencias— hasta lo estratégico —planeación de plantillas, gestión por competencias, analítica de personas, bienestar y experiencia del empleado—. Esta doble mirada (operación + estrategia) exige procesos estandarizados, métricas claras y un liderazgo que traduzca la estrategia corporativa en objetivos de talento. Así, RR. HH. deja de ser un “centro de costo” para convertirse en un generador de valor que impacta productividad, innovación y sostenibilidad organizacional.",
        },

        /* Párrafo 2 (~200 palabras) */
        {
          type: "paragraph",
          text: "Históricamente, la función de personal evolucionó desde el control disciplinario y el cumplimiento normativo hacia modelos de desarrollo de personas, gestión del cambio y diseño de experiencias. Esta transición responde a presiones competitivas, digitalización, globalización de mercados y mayor diversidad de la fuerza laboral. En ese contexto, el área de RR. HH. debe dominar marcos legales laborales, pero también metodologías ágiles, people analytics y enfoques de diseño centrado en el colaborador (EX). La función se vuelve transversal: colabora con finanzas para optimizar costos laborales, con operaciones para vincular productividad y desempeño, y con TI para orquestar plataformas que integren el ciclo de vida del empleado (onboarding, aprendizaje, desempeño, compensación). El objetivo es construir un sistema coherente donde procesos, datos y decisiones estén alineados a la estrategia.",
        },

        /* Párrafo 3 (~200 palabras) */
        {
          type: "paragraph",
          text: "Estructuralmente, el departamento puede organizarse en tres grandes bloques: administración de personal, relaciones laborales y gestión/desarrollo del talento. El primero garantiza el cumplimiento normativo, la integridad de la información y la eficiencia transaccional (nómina, contratos, incidencias). El segundo gestiona la negociación colectiva, la mediación de conflictos, la salud y seguridad en el trabajo, así como los beneficios sociales. El tercero impulsa procesos que habilitan el desempeño superior: atracción y selección, evaluación, formación continua, gestión de competencias, planes de carrera y sucesión, compensación total y clima/cultura. Muchas organizaciones complementan esta arquitectura con un modelo de “HR Business Partners” que acompañan a cada unidad de negocio, y centros de excelencia (CoE) que diseñan políticas y herramientas especializadas para toda la compañía.",
        },

        /* Párrafo 4 (~200 palabras) */
        {
          type: "paragraph",
          text: "La digitalización reconfigura el rol del área: automatiza lo transaccional, libera tiempo para lo estratégico y habilita la toma de decisiones basada en datos. Suites HCM, tableros de analítica, encuestas pulso y algoritmos de predicción de rotación permiten a RR. HH. priorizar intervenciones y medir impacto. Sin embargo, la tecnología no sustituye el juicio profesional ni la sensibilidad ética: es imprescindible cuidar la privacidad, la equidad algorítmica y la transparencia con las personas. En paralelo, el área lidera políticas de flexibilidad laboral, modelos híbridos, bienestar integral, diversidad, equidad e inclusión (DEI) y sostenibilidad social, dimensiones que hoy son parte del valor reputacional y del cumplimiento de estándares ESG. El éxito depende de integrar estas agendas sin perder foco en resultados y productividad.",
        },

        /* Párrafo 5 (~200 palabras) */
        {
          type: "paragraph",
          text: "Finalmente, el área de RR. HH. debe ser evaluada con indicadores que demuestren su contribución tangible a los objetivos corporativos. Más allá de métricas operativas (tiempo de cobertura de vacantes, rotación, ausentismo), se requieren KPI estratégicos: correlación entre desempeño y resultados de negocio, retorno de la inversión en capacitación, impacto del liderazgo en el compromiso, brechas de competencias críticas, equidad salarial y movilidad interna. Este cuadro de mando, acompañado de ciclos de mejora continua, permite pasar de una función reactiva a una proactiva y predictiva. En síntesis, el área de Recursos Humanos contemporánea es un sistema integrado que equilibra cumplimiento y transformación, eficiencia y experiencia, datos y humanidad, para asegurar que las personas correctas, con las capacidades adecuadas, estén en el lugar y momento precisos para ejecutar la estrategia.",
        },

        /* Acordeón con 3 niveles */
        {
          type: "accordion",
          header: "Mapa en 3 niveles del Área de Recursos Humanos",
          open: false,
          text:
            "**Nivel 1 — Propósito estratégico**  \n" +
            "- Alinear talento, cultura y estructura con la estrategia del negocio.  \n" +
            "- Maximizar el valor del capital humano con decisiones basadas en datos.  \n" +
            "- Garantizar cumplimiento legal, equidad y sostenibilidad social.  \n\n" +
            "**Nivel 2 — Estructura funcional**  \n" +
            "- Administración de personal y relaciones laborales.  \n" +
            "- Gestión y desarrollo del talento (atracción, desempeño, aprendizaje, compensación).  \n" +
            "- HR Business Partners y Centros de Excelencia (CoE).  \n\n" +
            "**Nivel 3 — Procesos clave y métricas**  \n" +
            "- Planeación de plantillas, análisis y valoración de puestos, gestión por competencias.  \n" +
            "- Evaluación del desempeño, planes de carrera/sucesión, clima y compromiso.  \n" +
            "- KPI estratégicos: productividad por FTE, ROI de capacitación, rotación crítica, equidad salarial.",
        },
      ],
      subthemes: [
        {
          id: "2.1",
          numbering: "2.1",
          title: "Función del departamento de Recursos Humanos",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "La función del departamento de Recursos Humanos (RR. HH.) trasciende la tradicional administración de personal para convertirse en un actor estratégico que habilita el cumplimiento de la visión y los objetivos del negocio. En su dimensión más visible, RR. HH. gestiona el ciclo de vida del colaborador: planea las plantillas, diseña perfiles y describe puestos, atrae y selecciona talento, formaliza contrataciones, administra nómina y beneficios, y asegura el cumplimiento de la normativa laboral y de seguridad social. Pero, además, es responsable de configurar un marco de políticas, procesos y herramientas que permitan a la organización contar con las competencias críticas en el momento oportuno y al costo adecuado. Esto implica dominar la planificación de la fuerza de trabajo, anticipar brechas de capacidades, impulsar programas de formación continua y orquestar procesos de evaluación del desempeño que conecten la contribución individual con los resultados organizacionales. En suma, RR. HH. se convierte en el custodio del sistema de gestión del talento, garantizando consistencia, equidad, trazabilidad y foco en el valor.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "Desde la perspectiva del diseño organizacional, el departamento de RR. HH. funge como consultor interno que acompaña a las áreas de negocio en la definición de estructuras, puestos, responsabilidades y relaciones de reporte que optimicen la ejecución de la estrategia. A través del modelo de HR Business Partners, se acerca a las unidades operativas para traducir necesidades tácticas (por ejemplo, reducción de rotación, incremento de productividad, mejora del clima) en soluciones de talento basadas en evidencia. Por su parte, los Centros de Excelencia (CoE) diseñan políticas corporativas de compensación total, gestión del desempeño, aprendizaje, diversidad e inclusión, salud y bienestar, entre otras. Este arreglo organizativo equilibra eficiencia, estandarización y especialización, mientras que los equipos de Servicios Compartidos (Shared Services) y la digitalización (HCM, portales de autoservicio, chatbots) aseguran la operación transaccional de alto volumen con estándares de experiencia homogéneos.",
            },

            /* Párrafo 3 (~300 palabras) */
            {
              type: "paragraph",
              text: "En el plano cultural, RR. HH. promueve valores, prácticas y ritos que sostienen el propósito organizacional, la colaboración y la innovación. Impulsa políticas y programas que favorecen la experiencia del colaborador (EX), el sentido de pertenencia, el liderazgo consciente y el bienestar integral. Del mismo modo, dinamiza iniciativas de diversidad, equidad e inclusión (DEI), así como estrategias de flexibilidad laboral e híbrida que se afianzan tras los cambios postpandemia. La función articula estas agendas con la medición sistemática del clima y compromiso (engagement), gestionando planes de acción que involucran a líderes de todos los niveles. Así, la cultura deja de concebirse como un resultado espontáneo para transformarse en un sistema intencionado y gestionado con indicadores, metas y rendición de cuentas.",
            },

            /* Párrafo 4 (~300 palabras) */
            {
              type: "paragraph",
              text: "Finalmente, la función de RR. HH. se apalanca cada vez más en la analítica de personas (people analytics) para tomar decisiones basadas en datos. Esto incluye modelos predictivos de rotación, correlaciones entre variables de liderazgo y desempeño, impacto del aprendizaje en la productividad, así como evaluación de equidad salarial y movilidad interna. La adopción de tableros (dashboards) y OKR/KPI estratégicos permiten demostrar el retorno de la inversión (ROI) en iniciativas de talento y priorizar recursos en lo que realmente incrementa el valor de negocio. No obstante, este avance conlleva responsabilidades éticas: proteger la privacidad de los colaboradores, garantizar la transparencia sobre los usos de los datos y evitar sesgos algorítmicos que reproduzcan desigualdades. En síntesis, el departamento de RR. HH. es hoy un integrador que balancea cumplimiento y transformación, procesos y experiencias, datos y humanidad, con el fin de potenciar la estrategia a través de las personas.",
            },

            /* Acordeón 1 — Funciones clave (del PDF) */
            {
              type: "accordion",
              header: "Funciones clave del departamento de RR. HH.",
              open: false,
              text:
                "* **Planificación y organización del talento:** análisis de puestos, descripciones, planeación de plantillas, presupuestos de personal.  \n" +
                "* **Atracción y selección:** employer branding, reclutamiento, entrevistas por competencias, pruebas psicométricas.  \n" +
                "* **Contratación, nómina y beneficios:** contratación formal, altas/bajas, compensación total, prestaciones y administración de incidencias.  \n" +
                "* **Desarrollo y desempeño:** formación continua, evaluación 360°, planes de carrera y sucesión, gestión por competencias.  \n" +
                "* **Relaciones laborales y cumplimiento:** normatividad laboral, seguridad y salud ocupacional, mediación de conflictos.  \n" +
                "* **Clima, cultura y DEI:** medición de engagement, bienestar, diversidad, equidad e inclusión.  \n" +
                "* **People analytics:** tableros, KPIs estratégicos, modelos predictivos y decisiones basadas en evidencia.",
            },

            /* Acordeón 2 — KPI estratégicos y tableros */
            {
              type: "accordion",
              header: "KPI estratégicos para demostrar valor",
              open: false,
              text:
                "* **Tiempo de cobertura / calidad de contratación (QoH).**  \n" +
                "* **Rotación total y rotación crítica (voluntaria / involuntaria).**  \n" +
                "* **Equidad salarial (pay equity) y brechas por género/área.**  \n" +
                "* **Engagement / eNPS (Employee Net Promoter Score).**  \n" +
                "* **ROI de la capacitación y correlación desempeño–resultados.**  \n" +
                "* **Movilidad interna y porcentaje de posiciones cubiertas con talento interno.**  \n" +
                "* **Absentismo, accidentabilidad y cumplimiento normativo.**",
            },

            /* Video ilustrativo */
            {
              type: "video",
              title: "El rol estratégico del área de Recursos Humanos",
              src: "https://www.youtube.com/watch?v=Zt3Wq2Sobck",
              caption:
                "Video guía para comprender cómo RR. HH. pasa de lo transaccional a lo estratégico mediante datos, cultura y experiencia del colaborador.",
            },
          ],
        },
        {
          id: "2.2",
          numbering: "2.2",
          title: "Concepto y organización del departamento de Recursos Humanos",
          content: [
            /* Párrafo 1 — Concepto y razón de ser (~300 palabras) */
            {
              type: "paragraph",
              text: "El departamento de Recursos Humanos (RR. HH.) es la unidad organizacional responsable de alinear la gestión de las personas con la estrategia del negocio. Su concepto ha evolucionado desde una visión administrativa y transaccional —centrada en el cumplimiento normativo y el control de personal— hacia un enfoque estratégico que reconoce al capital humano como fuente de ventaja competitiva sostenible. En este sentido, el DRH ya no solo “administra” nóminas, expedientes o altas y bajas; hoy diseña políticas que impactan directamente en la atracción, desarrollo, compromiso, bienestar y permanencia del talento. Esta ampliación del alcance implica incorporar metodologías de planificación estratégica de personas, gestión por competencias, people analytics, modelos de liderazgo distribuido, programas de desarrollo y sucesión, esquemas de compensaciones basadas en valor y métricas de impacto (KPIs y OKR) que den evidencia del aporte de RR. HH. al logro de objetivos corporativos. La función, además, se convierte en un socio de negocio (HR Business Partner) que acompaña a cada área para traducir los desafíos de productividad, innovación y experiencia del cliente en decisiones sobre roles, capacidades, estructuras y cultura. Por ello, conceptualizar adecuadamente al departamento supone entenderlo como un sistema de procesos integrados —reclutamiento y selección, onboarding, formación y desarrollo, evaluación del desempeño, compensaciones y beneficios, relaciones laborales, clima y cultura, salud y seguridad, analítica de personas— que, coordinados, crean condiciones para que las personas desplieguen su mejor aporte en contextos de cambio acelerado, digitalización, diversidad e inclusión, y trabajo híbrido.",
            },

            /* Párrafo 2 — Organización interna y modelos estructurales (~300 palabras) */
            {
              type: "paragraph",
              text: "Organizar el departamento de Recursos Humanos implica definir arquitectura, roles y flujos de trabajo que aseguren cobertura eficiente a todas las necesidades del ciclo de vida del empleado. Tradicionalmente, el área se estructuraba en funciones verticales (Administración de Personal, Relaciones Laborales, Capacitación, Reclutamiento y Selección, Compensaciones). Sin embargo, las organizaciones contemporáneas tienden a combinar tres grandes pilares: (1) HR Business Partners (HRBP), que se integran a las unidades de negocio para comprender su estrategia y traducirla en iniciativas de talento; (2) Centros de Excelencia (CoE), equipos expertos que diseñan políticas, metodologías y herramientas especializadas —por ejemplo, Compensaciones Totales, Gestión del Desempeño, Desarrollo del Liderazgo, Diversidad e Inclusión—; y (3) Shared Services o Servicios Compartidos, que estandarizan y automatizan procesos transaccionales de alto volumen (nómina, administración de beneficios, gestión documental, mesa de ayuda). Esta arquitectura facilita escalar servicios, reducir costos, asegurar consistencia y, a la vez, personalizar la respuesta estratégica a cada unidad. La madurez digital también modifica la organización: surgen roles como People Analytics Lead, HRIS Manager (gestión del sistema de información de RR. HH.), Employee Experience Designer, People Operations o People Care. A su vez, se consolidan modelos ágiles que conforman squads multifuncionales para resolver desafíos específicos (por ejemplo, rediseñar el onboarding o implementar un marco de performance habilitado por datos). La clave no es el “organigrama ideal”, sino la coherencia entre estrategia corporativa, tamaño, complejidad, regulaciones, cultura y madurez tecnológica. Un DRH pequeño puede empezar con roles generalistas, mientras que uno corporativo global requerirá especialización, gobernanza matricial y acuerdos de nivel de servicio (SLA) claros.",
            },

            /* Imagen ilustrativa de la estructura del DRH */
            {
              type: "image",
              src: "https://www.mercer.com/es-pe/solutions/transformation/hr-transformation/hr-operating-model-design/_jcr_content/root/content-well/container/inline_image_2045121167/embed-image/image.coreimg.85.1024.png/1697662614219/infographic-exemplary-target-interaction-model-2880x1468.png",
              alt: "Estructura típica del Departamento de Recursos Humanos con HRBP, Centros de Excelencia y Servicios Compartidos",
              caption:
                "Arquitectura moderna de RR. HH.: HR Business Partners, Centros de Excelencia y Servicios Compartidos.",
            },

            /* Párrafo 3 — Procesos, gobierno y métricas (~300 palabras) */
            {
              type: "paragraph",
              text: "Diseñar la organización del DRH también exige establecer un sistema de gobierno (políticas, procedimientos, comités, niveles de aprobación) y un set de métricas accionables que midan eficacia (cumplimiento normativo, tiempos de cobertura, precisión de nómina), eficiencia (coste por contratación, coste administrativo por empleado), y valor estratégico (engagement, rotación crítica, tiempo a la productividad, índice de movilidad interna, diversidad en posiciones clave, brechas de habilidades, impacto de programas de liderazgo). La analítica de personas (people analytics) permite detectar patrones —por ejemplo, predecir rotación, identificar cuellos de botella en promociones o correlacionar variables de clima con desempeño— y orientar intervenciones basadas en evidencia. El gobierno de datos (data governance) se vuelve central para asegurar calidad, privacidad y ética en su uso. Complementariamente, el DRH debe articularse con áreas como Jurídico, Finanzas, TI y Operaciones para sincronizar decisiones sobre estructuras, presupuestos, automatización, ciberseguridad y cumplimiento. Finalmente, en contextos de transformación, RR. HH. asume el liderazgo del cambio cultural: modela comportamientos, impulsa comunicación interna, acompaña a líderes en la gestión del impacto humano de las decisiones y diseña itinerarios de reskilling/upskilling que sostengan la estrategia digital.",
            },

            /* Párrafo 4 — Tendencias: EX, diversidad, agilidad y automatización (~300 palabras) */
            {
              type: "paragraph",
              text: "Cuatro tendencias están redefiniendo la organización del departamento: (a) **Employee Experience (EX)**: RR. HH. diseña de punta a punta el viaje del colaborador (candidatura, onboarding, desarrollo, reconocimiento, bienestar, offboarding) usando herramientas de diseño de servicio y métricas como eNPS o CES interno. (b) **Diversidad, Equidad e Inclusión (DEI)**: surgen equipos dedicados a cerrar brechas salariales, aumentar la representación en roles directivos y crear políticas inclusivas (lenguaje, accesibilidad, protocolos de no discriminación). (c) **Agilidad organizacional**: se adoptan estructuras flexibles, equipos autogestionados, OKR y ciclos cortos de revisión del desempeño para responder al cambio y reducir la burocracia. (d) **Automatización e IA**: chatbots para servicios al empleado, RPA para procesos repetitivos, matching algorítmico para reclutamiento interno/externo y analítica prescriptiva para apoyar decisiones de talento. Estas tendencias exigen al DRH nuevas competencias: pensamiento sistémico, data literacy, diseño centrado en las personas, gestión del cambio y ética digital. En síntesis, el “concepto” del departamento migra hacia una función habilitadora del negocio, creadora de cultura y arquitecta de capacidades; su “organización” debe ser lo suficientemente robusta para garantizar cumplimiento, pero lo bastante ágil para iterar, aprender y escalar soluciones de talento en tiempo real.",
            },

            /* Acordeón 1 — Modelos de estructura organizativa del DRH */
            {
              type: "accordion",
              header: "Modelos de estructura del Departamento de RR. HH.",
              open: false,
              text:
                "* **Funcional clásico:** áreas verticales (Administración de Personal, Selección, Capacitación, Compensaciones, Relaciones Laborales).\\n" +
                "* **HRBP + CoE + Shared Services:** HR como socio estratégico, centros de expertise que diseñan políticas y un hub transaccional estandarizado.\\n" +
                "* **People Operations (estilo tech):** equipos lean, orientados a procesos automatizados, autoservicio y analítica; foco en Employee Experience.\\n" +
                "* **Modelo ágil híbrido:** squads multifuncionales temporales, governance ligera, decisiones basadas en datos y ciclos iterativos.",
            },

            /* Acordeón 2 — Buenas prácticas para organizar RR. HH. (extra) */
            {
              type: "accordion",
              header: "Buenas prácticas para (re)organizar RR. HH.",
              open: false,
              text:
                "* **Mapea el journey del colaborador** y alinea procesos de RR. HH. a los “momentos que importan”.\\n" +
                "* **Define KPIs y OKR claros** por pilar (atracción, desarrollo, compensación, EX, DEI).\\n" +
                "* **Implanta un HRIS sólido** (por ejemplo, SAP SuccessFactors, Workday, Oracle HCM) y estándares de datos.\\n" +
                "* **Establece catálogos de servicios y SLA** para Shared Services.\\n" +
                "* **Desarrolla capacidades analíticas** en el equipo (people analytics, visualización, storytelling con datos).\\n" +
                "* **Crea un comité de talento** que priorice sucesión, movilidad interna y planes de desarrollo para roles críticos.",
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
          href: "https://www.youtube.com/watch?v=wB1HuNmfljQ", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Werther, W. & Davis, K. (2008). *Administración de Recursos Humanos* – Cap. “Elementos esenciales del capital humano”, págs. 3‑14. Disponible en: https://cucjonline.com/biblioteca/files/original/c2f2989d851e80e2cc6aa0ebf3a54cb0.pdf",
            "Snell, S. & Bohlander, G. (2018). *Administración de Recursos Humanos* – “Desafíos y recompensas de la ARH”, págs. 2‑11. Disponible en: https://www.academia.edu/33378179/ADMINISTRACI%C3%93N_de_RECURSOS_HUMANOS",
            "Albizu, E. & Landeta, R. (2013). *Dirección Estratégica de los Recursos Humanos* – “La función y dirección de RR. HH.”, págs. 25‑33. Disponible en: https://books.google.com.mx/books?id=M86UBQAAQBAJ",
            "Snell, S. & Bohlander, G. (2013). *Administración de Recursos Humanos* – “Estrategia y planeación de RR. HH.”, págs. 38‑75. Disponible en: https://repositorio.uide.edu.ec/handle/37000/4186",
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
            "Albizu, E. y. (2013). *Dirección Estratégica de los Recursos Humanos.* Madrid, España: Pirámide.",
            "Alles, M. (2016). *Dirección Estratégica de Recursos Humanos.* Buenos Aires, Argentina: Granica.",
            "Bohlander, G. S. (2018). *Administración de Recursos Humanos.* México: CENGAGE Learning.",
            "Bohlander, S. y. (2013). *Administración de Recursos Humanos.* México: CENGAGE Learning.",
            "Cardy, R. L. (2016). *Gestión de Recursos Humanos.* México: Pearson Educación.",
            "Dessler, G., & Juárez, R. V. (2011). *Administración de Recursos Humanos.* México: Pearson Educación.",
            "Durán, C., & de Urbina, C. O. (2018). *Fundamentos de Recursos Humanos.* Madrid, España: Pearson Educación.",
            "López Cabrales, A. V. (2018). *Fundamentos para la gestión estratégica de los Recursos Humanos.* UOC.",
            "Werther, W. y. (2008). *Administración de Recursos Humanos.* México: McGraw‑Hill.",
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
