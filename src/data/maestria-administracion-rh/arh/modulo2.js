/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MARH",
  courseId: "MARH-101",
  id: "MARH101-mod2",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Administración de Recursos Humanos",
  title: "Módulo 2. Capital humano y administración estratégica de RRHH",
  semestre: "1er semestre",
  teacher: "Mtra. Mirna Angélica Palafox Mariscal",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Al término del módulo, el estudiante conocerá, explicará y reflexionará sobre la " +
    "importancia del correcto aprovisionamiento de personas, así como su formación y " +
    "desarrollo en la organización, vinculándolo con las nuevas tendencias de trabajo y " +
    "el uso de tecnologías para la Administración Estratégica de Recursos Humanos.",

  competencies: [
    "Analiza la noción de capital humano y sus implicaciones para la productividad y la competitividad organizacional.",
    "Relaciona la provisión, formación y desarrollo del personal con los objetivos estratégicos de la empresa.",
    "Explica el sentido y los componentes de la Administración Estratégica de Recursos Humanos.",
    "Valora el impacto de las tecnologías digitales (IA, e‑recruiting, analítica de datos, OKR, etc.) en los procesos de ARH.",
    "Propone lineamientos para reducir la rotación, impulsar el engagement y fortalecer el bienestar, la diversidad y la inclusión en la organización.",
  ],

  /* ── Contenido temático (jerarquía recursiva) ─────────── */
  themes: [
    /* 0) Página Info (opcional) */
    {
      id: "2.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [],
    },

    /* 1) Unidad 2 — Capital humano y administración estratégica de RH */
    {
      id: "2",
      numbering: "Unidad 2",
      title:
        "Capital humano en la empresa y administración estratégica de Recursos Humanos",
      content: [
        /* Párrafo 1 (≈200 palabras) */
        {
          type: "paragraph",
          text: "Esta unidad profundiza en dos ejes complementarios: el capital humano como activo estratégico y la administración estratégica de Recursos Humanos (ARH) como el conjunto de decisiones, políticas y procesos que alinean a las personas con los objetivos competitivos de la organización. Partimos de reconocer que el talento —sus conocimientos, habilidades, actitudes y juicio— crea valor cuando se articula con arquitecturas organizacionales, culturas y estilos de gestión que lo potencian. La digitalización, la analítica de datos, la IA y los modelos de trabajo híbridos obligan a replantear cómo se atrae, desarrolla, compromete y retiene a las personas. En este marco, el área de RH pasa de ser operativa a convertirse en un socio estratégico que diagnostica brechas, anticipa necesidades de capacidades y diseña intervenciones que maximizan la contribución de cada colaborador al propósito corporativo.",
        },

        /* Párrafo 2 (≈200 palabras) */
        {
          type: "paragraph",
          text: "El concepto de capital humano subraya que el incremento de la productividad deriva de invertir en educación, entrenamiento y experiencia. No se trata solo de acumular credenciales, sino de movilizar saberes en contextos específicos, aprender continuamente y compartir conocimiento para generar un ‘efecto multiplicador’ organizacional. A la par, variables contextuales —como la cultura, los procesos, la arquitectura tecnológica y los estilos de liderazgo— condicionan cuánto del potencial individual se convierte en resultados colectivos. Por ello, la ARH estratégica exige mirar simultáneamente al individuo (competencias, motivación, engagement, bienestar) y al sistema (estructura, prácticas, flujos de trabajo, políticas, clima ético) para asegurar coherencia entre lo que la empresa dice valorar y lo que, efectivamente, habilita mediante sus diseños y decisiones.",
        },

        /* Párrafo 3 (≈200 palabras) */
        {
          type: "paragraph",
          text: "Desde la provisión de personal —reclutamiento, selección e inducción— hasta la formación y el desarrollo, RH opera como una cadena de valor integrada. El e‑recruiting, el inbound recruiting, el pipeline de talento y la analítica predictiva permiten acelerar tiempos, reducir sesgos y elevar el ajuste persona‑puesto‑cultura. Sin embargo, la tecnología no sustituye la necesidad de criterios claros, instrumentos válidos y una comunicación transparente con los candidatos. Un buen proceso de admisión parte de justificar la vacante (productiva o vegetativa), perfilar con precisión las competencias críticas y evaluar con metodologías mixtas (rúbricas, entrevistas por competencias, pruebas psicométricas, assessment centers) que aporten evidencia sólida para decidir.",
        },

        /* Párrafo 4 (≈200 palabras) */
        {
          type: "paragraph",
          text: "La formación y el desarrollo profesional dejan de ser beneficios periféricos para convertirse en la palanca que sostiene la ventaja competitiva. Metodologías como OKR (Objectives and Key Results) ayudan a alinear el aprendizaje con la estrategia, a monitorear la consecución de resultados y a cultivar culturas de accountability. En paralelo, programas de wellbeing (físico, mental y emocional), políticas de diversidad e inclusión, y esquemas de reconocimiento fortalecen el compromiso (engagement) y reducen la rotación. La ARH estratégica, en consecuencia, combina intervenciones ‘hard’ (estructura, procesos, datos) con iniciativas ‘soft’ (liderazgo, cultura, sentido de propósito) que, integradas, maximizan el rendimiento sostenible del capital humano.",
        },

        /* Párrafo 5 (≈200 palabras) */
        {
          type: "paragraph",
          text: "Finalmente, administrar estratégicamente los recursos humanos implica demostrar, con métricas y evidencias, la contribución del sistema de personas a los indicadores clave del negocio. Esto demanda tableros de control que conecten iniciativas (p. ej., e‑recruiting, reskilling, planes de sucesión) con impactos en productividad, innovación, satisfacción del cliente y resultados financieros. Supone también rediseñar el liderazgo para entornos inciertos: líderes que habilitan equipos autónomos, prácticas colaborativas y toma de decisiones distribuida. A lo largo de la unidad revisaremos cómo diagnosticar necesidades de talento, diseñar portafolios de prácticas de RH coherentes, integrar la tecnología sin perder el foco humano y construir una narrativa de valor que posicione a RH como arquitecto del desempeño organizacional.",
        },

        /* Acordeón (3 niveles) */
        {
          type: "accordion",
          header: "Mapa de la Unidad 2 (qué, cómo y con qué lo haremos)",
          open: false,
          text:
            "**1) ¿Qué estudiaremos?**  \n" +
            "• Capital humano: talentos (conocimientos, habilidades, juicio, actitud) y contexto (arquitectura, cultura, liderazgo).  \n" +
            "• Provisión, formación y desarrollo de personal.  \n" +
            "• Administración estratégica de RH: alineación con la estrategia, métricas y analítica de personas.  \n\n" +
            "**2) ¿Cómo lo abordaremos?**  \n" +
            "• Enfoque sistémico: individuo + organización + entorno digital.  \n" +
            "• Metodologías OKR, engagement, wellbeing, diversidad e inclusión.  \n" +
            "• Herramientas digitales: e‑recruiting, IA, pipelines de talento y analítica.  \n\n" +
            "**3) ¿Con qué evidencias cerraremos?**  \n" +
            "• Diagnóstico de brechas de talento y propuesta de intervención estratégica de RH.  \n" +
            "• KPI de personas vinculados a objetivos corporativos.  \n" +
            "• Plan para robustecer el ciclo de vida del colaborador (atracción → desarrollo → retención).",
        },
      ],

      /* → Temas de primer nivel (tal como aparecen en el PDF) */
      subthemes: [
        /* ----- Tema 3 ----- */
        {
          id: "3",
          numbering: "3",
          title: "Capital humano en la empresa",
          content: [
            /* Párrafo 1 — Definición y alcance (≈300 palabras) */
            {
              type: "paragraph",
              text: "El capital humano en la empresa se entiende como el conjunto de conocimientos, habilidades, actitudes, valores, experiencias y capacidades de aprendizaje que las personas ponen al servicio de los objetivos organizacionales. A diferencia de otros activos, su valor se aprecia cuando existe un entorno que facilita su movilización: estructuras flexibles, culturas colaborativas, liderazgos que inspiran y sistemas de gestión que premian la aportación de valor. En este sentido, el capital humano se convierte en un activo estratégico porque permite innovar, adaptarse a cambios tecnológicos, elevar la productividad y construir ventajas competitivas difíciles de imitar. No basta con atraer talento: es imprescindible desarrollarlo, comprometerlo y retenerlo, asegurando que cada colaborador encuentre sentido a su trabajo y cuente con condiciones para desplegar su potencial. Asimismo, el capital humano no es un stock estático; es dinámico y se revaloriza con procesos sistemáticos de formación, experiencias retadoras, rotación planificada de puestos, feedback continuo y marcos de competencias actualizados. La empresa que concibe a las personas como ‘recurso’ tiende a operar transaccionalmente; la que las concibe como ‘capital’ diseña arquitecturas organizacionales que maximizan su contribución, midiendo rigurosamente cómo las decisiones de personas impactan la estrategia, los clientes y los resultados financieros.",
            },

            /* Acordeón 1 — Componentes y condiciones del capital humano según el módulo */
            {
              type: "accordion",
              header:
                "Acordeón 1 — Componentes y condiciones del capital humano",
              open: false,
              text:
                "* **Componentes clave:** conocimientos técnicos, habilidades blandas (comunicación, colaboración, liderazgo), actitudes (compromiso, ética, orientación a resultados) y capacidad de aprendizaje continuo.  \n" +
                "* **Condiciones para que genere valor:** cultura de cooperación, liderazgo distribuido, diseño de puestos con autonomía, sistemas de incentivos coherentes, y procesos de RH basados en evidencia.  \n" +
                "* **Riesgos frecuentes:** fuga de talento, obsolescencia de competencias, culturas que desincentivan la creatividad, métricas que solo valoran el corto plazo.",
            },

            /* Párrafo 2 — Alineación estratégica y arquitectura organizacional (≈300 palabras) */
            {
              type: "paragraph",
              text: "Gestionar el capital humano estratégicamente significa alinear la cartera de capacidades de la organización con su propuesta de valor y su posicionamiento competitivo. Ello exige claridad en la estrategia (qué ventaja queremos sostener), traducción a competencias organizacionales (qué debemos saber hacer mejor que otros) y, finalmente, derivar esas competencias en perfiles, roles y planes de desarrollo individuales. La arquitectura organizacional —procesos, estructuras, tecnología, sistemas de recompensas— actúa como ‘amplificador’ o ‘atenuador’ del valor del capital humano: si los procesos son rígidos, la burocracia alta o los incentivos contradictorios, buena parte del potencial se desperdicia. Por el contrario, cuando existe coherencia entre lo que la empresa declara (innovación, orientación al cliente, agilidad) y lo que sistemáticamente habilita (tiempos, herramientas, espacios psicológicamente seguros para experimentar), el talento se convierte en resultados sostenibles. Esta lógica se traduce en que RH deja de operar como área transaccional y asume el rol de socio estratégico: diagnostica brechas de talento frente al plan de negocio, diseña intervenciones (recruiting, reskilling, planes de sucesión, programas de liderazgo) y evalúa, con métricas, el impacto de estas acciones en productividad, innovación y satisfacción del cliente.",
            },

            /* Párrafo 3 — Ciclo de vida del colaborador y prácticas clave (≈300 palabras) */
            {
              type: "paragraph",
              text: "El valor del capital humano se maximiza gestionando de forma integrada el ciclo de vida del colaborador: atracción, selección, onboarding, desarrollo, performance, reconocimiento, movilidad interna y desvinculación responsable. En la atracción, las marcas empleadoras fuertes y el uso de analítica (e‑recruiting, IA para prefiltrado) mejoran tiempos y calidad de contratación, siempre que se controle el sesgo algorítmico. En la selección, combinar entrevistas por competencias, pruebas situacionales, assessment centers y verificación de referencias fortalece la predicción del desempeño. El onboarding acelerado, con objetivos claros y mentores, reduce la curva de aprendizaje. En el desarrollo, los itinerarios personalizados (reskilling, upskilling, itinerarios blended) y la evaluación continua (feedback en tiempo real, OKR) alinean aprendizaje y estrategia. Finalmente, en reconocimiento y compensación, los esquemas totales (total rewards) —que incluyen salario, bienestar, flexibilidad, propósito y oportunidades de crecimiento— sostienen el compromiso. Todo ello debe apoyarse en marcos de competencias vivos, tableros de control y espacios de diálogo que permitan traducir datos en decisiones sobre talento.",
            },

            /* Acordeón 2 — Métricas y tableros para demostrar valor */
            {
              type: "accordion",
              header:
                "Acordeón 2 — Métricas estratégicas para gestionar el capital humano",
              open: false,
              text:
                "* **Atracción y selección:** tiempo de cobertura, costo por contratación, calidad de contratación (desempeño a 6/12 meses), diversidad de shortlist.  \n" +
                "* **Desarrollo y aprendizaje:** horas de formación por FTE, % de competencias críticas cubiertas, ROI / ROE del aprendizaje, tasa de movilidad interna.  \n" +
                "* **Compromiso y retención:** eNPS, rotación voluntaria de alto potencial, tasa de ausentismo, indicadores de bienestar.  \n" +
                "* **Productividad y valor:** ingresos por FTE, margen por FTE, innovación (nuevos productos/servicios por equipo), impacto en NPS del cliente.  \n" +
                "* **Equidad y diversidad:** brecha salarial ajustada, representación en liderazgo, cobertura de políticas de inclusión.",
            },

            /* Párrafo 4 — Tendencias y retos (≈300 palabras) */
            {
              type: "paragraph",
              text: "Las tendencias macro transforman la manera en que entendemos y gestionamos el capital humano: automatización e IA generativa reconfiguran los mapas de puestos, el trabajo híbrido obliga a rediseñar experiencia del empleado, y la ‘economía de las habilidades’ sustituye lentamente a la ‘economía de los puestos’, priorizando portafolios de competencias sobre organigramas rígidos. La salud mental, el bienestar integral y la diversidad, equidad e inclusión (DEI) ya no son iniciativas periféricas sino condiciones para sostener el desempeño y la reputación. A la par, la ética en el uso de datos de personas (People Analytics) y la gobernanza de la IA se vuelven indispensables para evitar sesgos, proteger la privacidad y mantener la confianza. El reto para las áreas de RH es doble: desarrollar capacidades analíticas y tecnológicas, y, al mismo tiempo, preservar la dimensión profundamente humana de la gestión: escucha empática, construcción de propósito compartido, liderazgo que habilita autonomía y aprendizaje. Gestionar el capital humano hoy es, en esencia, gestionar la capacidad de la organización para aprender más rápido que el entorno, convirtiendo el talento en ventaja competitiva sostenible.",
            },
          ],
          subthemes: [
            {
              id: "3.1",
              numbering: "3.1",
              title: "La provisión de personal",
              content: [
                /* Párrafo 1 — Sentido estratégico del aprovisionamiento (≈ 300 palabras) */
                {
                  type: "paragraph",
                  text: "La provisión de personal constituye el primer gran eslabón del ciclo de gestión del talento: reclutar, seleccionar, contratar e inducir a las personas adecuadas para cada puesto, alineando sus competencias con la estrategia de la organización. Desde la perspectiva del capital humano, las personas no son un ‘costo’ que deba minimizarse, sino un activo capaz de generar ventajas competitivas sostenibles si se identifica, atrae y coloca en el contexto organizacional correcto. Por ello, el proceso de admisión debe buscar la mejor adecuación posible entre lo que la empresa necesita (perfil de puesto, objetivos, cultura, arquitectura organizacional) y lo que los candidatos pueden ofrecer (conocimientos, habilidades, actitudes, juicio y potencial de aprendizaje). El aprovisionamiento no se limita a “llenar vacantes”: parte de una justificación clara (crecimiento productivo, creación de nuevos procesos/tecnologías, bajas vegetativas, etc.) y continúa con un diseño fino del perfil profesiográfico y de los criterios de evaluación. En este marco, las etapas clásicas —reclutamiento, preselección curricular, entrevistas, pruebas psicométricas/técnicas, exámenes médicos, verificación de referencias y decisión final— deben estar respaldadas por instrumentos válidos y procedimientos transparentes. Así se reduce la rotación, el ausentismo y los costos derivados de decisiones de contratación inadecuadas, al tiempo que se incrementa la satisfacción laboral y el compromiso. Finalmente, la provisión de personal debe entenderse como un proceso sistémico: su éxito impacta directamente en los subsistemas posteriores (capacitación, desarrollo, compensación y evaluación del desempeño) y determina en gran medida la calidad de los resultados organizacionales.",
                },

                /* Lista 1 — Causas típicas para incorporar nuevo personal (según el PDF) */
                {
                  type: "list",
                  title: "Causas de incorporación (productivas y vegetativas)",
                  items: [
                    "Crecimiento de la demanda, ciclos estacionales, apertura de nuevos centros o líneas de negocio.",
                    "Implantación de nuevas tecnologías o creación de departamentos/procesos.",
                    "Bajas definitivas voluntarias, incapacidades temporales, maternidad, permisos, despidos, jubilaciones o fallecimientos.",
                  ],
                },

                /* Párrafo 2 — Reclutamiento y selección como procesos críticos (≈ 300 palabras) */
                {
                  type: "paragraph",
                  text: "Una vez justificada la incorporación, el reclutamiento y la selección se convierten en procesos críticos. Reclutar es atraer candidatos potencialmente calificados mediante fuentes internas (promociones, transferencias, referidos) y externas (bolsas de trabajo, universidades, redes sociales profesionales, ferias de empleo, headhunters, plataformas especializadas). La selección, por su parte, persigue comparar sistemáticamente el perfil del puesto con el perfil del candidato, utilizando un conjunto articulado de técnicas: revisión curricular con matrices de ponderación, entrevistas por competencias (STAR), pruebas psicométricas y técnicas, assessment centers y verificación de referencias. Un proceso de selección robusto disminuye la rotación temprana, mejora el clima laboral y asegura un mejor ajuste persona–puesto–cultura. La transparencia y la comunicación con los candidatos a lo largo del proceso evitan experiencias negativas (candidate experience) que, en un mercado laboral hiperconectado, pueden afectar la marca empleadora. Además, documentar cada etapa permite retroalimentar continuamente los descriptores de puesto, los instrumentos de evaluación y los criterios de decisión, cerrando el ciclo de mejora del subsistema de aprovisionamiento. Para maximizar la objetividad, conviene emplear rúbricas y criterios explícitos, así como la triangulación de evidencias (entrevistas, pruebas, simulaciones). Finalmente, la inducción formal —frecuentemente olvidada— es la bisagra que convierte una contratación exitosa en una integración efectiva: aclarar expectativas, socializar la cultura, asignar mentores y definir metas tempranas son prácticas que aceleran el tiempo a la productividad.",
                },

                /* Lista 2 — Buenas prácticas contemporáneas en reclutamiento (apoyo extra) */
                {
                  type: "list",
                  title:
                    "Buenas prácticas actuales en reclutamiento y selección",
                  items: [
                    "E‑recruiting y ATS (Applicant Tracking Systems) para automatizar, estandarizar y trazabilizar el proceso.",
                    "Entrevistas estructuradas por competencias y assessment centers para roles clave.",
                    "Pipeline/Talent pool permanente y employer branding para reducir tiempos de cobertura.",
                    "Analítica de datos e IA para cribar currículos, minimizar sesgos y mejorar la predicción de desempeño.",
                    "Experiencia del candidato (comunicación continua, feedback y procesos ‘mobile‑first’ y responsivos).",
                  ],
                },

                /* Párrafo 3 — Digitalización, IA y pipeline de talento (≈ 300 palabras) */
                {
                  type: "paragraph",
                  text: "La digitalización ha transformado radicalmente la provisión de personal. El uso de ATS, tableros de analítica, algoritmos de matching semántico y chatbots permite agilizar el filtrado inicial, reducir tiempos de respuesta y ofrecer una experiencia de candidato más fluida. El e‑recruiting traslada la atracción y selección a ecosistemas digitales (portales, redes sociales profesionales, comunidades técnicas), mientras que el inbound recruiting y el employer branding convierten a la organización en un imán de talento a través de contenidos de valor, propuestas de valor al empleado (EVP) claras y narrativas auténticas sobre cultura, diversidad e inclusión. Paralelamente, la construcción de pipelines de talento (talent pools vivos y segmentados) posibilita anticipar necesidades futuras y disminuir la dependencia de procesos ad‑hoc urgentes. Sin embargo, la adopción de IA exige gobernanza y ética: hay que vigilar sesgos algorítmicos, transparencia en los criterios de decisión y el cumplimiento regulatorio en privacidad y no discriminación. A futuro, la provisión de personal combinará tres capas: a) automatización para tareas repetitivas y de alto volumen (screening, agendas, recordatorios); b) analítica avanzada para priorizar candidatos con base en predictores válidos de desempeño y permanencia; y c) el juicio experto humano para interpretar contextos, valores, motivaciones y potencial de desarrollo. En síntesis, el objetivo no es “reemplazar” al profesional de RH, sino dotarlo de mejores datos, más tiempo para la interacción de calidad y herramientas que eleven la objetividad y la pertinencia estratégica del proceso.",
                },

                /* Imagen ilustrativa */
                {
                  type: "image",
                  src: "https://miameraki.com/wp-content/uploads/2024/11/Captura-de-pantalla-2024-11-29-a-las-12.44.12.png",
                  alt: "Flujo del proceso de provisión de personal: de la justificación a la inducción",
                  caption:
                    "Flujo integrado de aprovisionamiento de personal (reclutamiento, selección, decisión, inducción).",
                },
              ],
            },
            {
              id: "3.2",
              numbering: "3.2",
              title: "Formación y desarrollo del personal en la empresa",
              content: [
                /* Párrafo 1 (~300 palabras) — Sentido estratégico de la formación */
                {
                  type: "paragraph",
                  text: "La formación y el desarrollo del personal constituyen un eje estratégico de la administración de recursos humanos porque articulan la visión competitiva de la organización con las necesidades reales de aprendizaje de sus colaboradores. En entornos caracterizados por la digitalización, la volatilidad del mercado y la presión por innovar continuamente, capacitar ya no es un evento aislado, sino un proceso continuo que integra diagnóstico, diseño instruccional, implementación, seguimiento y evaluación del impacto en los resultados. Desde una perspectiva de capital humano, como señalan autores de referencia en el área, la formación incrementa el stock de conocimientos, habilidades y actitudes que posee la fuerza laboral, generando ventajas competitivas sostenibles cuando se alinea con la estrategia del negocio. Al mismo tiempo, fortalece el compromiso (engagement) del personal, pues comunica que la organización invierte en su crecimiento profesional. Por ello, los programas deben trascender los cursos puntuales y evolucionar hacia itinerarios formativos modulares, mixtos (blended) y personalizados, soportados en plataformas LMS y analítica de aprendizaje para monitorear la progresión de competencias. La clave reside en migrar de una lógica de ‘cumplimiento’ a una lógica de ‘desempeño’, donde el aprendizaje se mide por la transferencia efectiva al puesto y por los indicadores de productividad, calidad, innovación o satisfacción del cliente que se logran mejorar de manera verificable.",
                },

                /* Párrafo 2 (~300 palabras) — Ciclo de capacitación, ROI y analítica */
                {
                  type: "paragraph",
                  text: "El ciclo clásico de capacitación —detección de necesidades, diseño, ejecución y evaluación— debe hoy enriquecerse con herramientas de analítica avanzada y con modelos rigurosos de retorno de la inversión (ROI) y de valor agregado (ROE: Return on Expectations). La detección de necesidades puede apoyarse en encuestas 360°, análisis de desempeño, entrevistas con líderes y minería de datos provenientes de sistemas de gestión del talento. El diseño instruccional incorpora microlearning, simuladores, estudios de caso contextualizados y comunidades de práctica que promuevan el aprendizaje social. La ejecución, por su parte, combina modalidades síncronas y asíncronas, presenciales, virtuales e híbridas, a fin de maximizar la accesibilidad y la escalabilidad. Finalmente, la evaluación ya no se limita a medir satisfacción o aprendizaje declarativo: se rastrea la transferencia al puesto (nivel 3 de Kirkpatrick) y el impacto en indicadores clave del negocio (nivel 4), además del cálculo financiero del ROI cuando el proyecto lo justifica. En paralelo, los tableros de control (dashboards) permiten dar visibilidad continua al liderazgo sobre la adopción de habilidades críticas (por ejemplo, data literacy, uso ético de IA, metodologías ágiles, liderazgo distribuido) y priorizar inversiones donde más rentabilidad formativa se obtiene.",
                },

                /* Acordeón 1 — “Claves operativas para diseñar programas de formación” */
                {
                  type: "accordion",
                  header:
                    "Claves operativas para diseñar programas de formación",
                  open: false,
                  text:
                    "* **Diagnóstico multifuente** (desempeño, encuestas 360°, analítica de datos).  \n" +
                    "* **Alineación estratégica** con OKR y KPIs del negocio.  \n" +
                    "* **Diseño instruccional mixto** (microlearning, casos, simulaciones).  \n" +
                    "* **Evaluación con modelos robustos** (Kirkpatrick/Phillips, ROE/ROI).  \n" +
                    "* **Seguimiento con analytics** para evidenciar transferencia y resultados.",
                },

                /* Párrafo 3 (~300 palabras) — Desarrollo, reskilling/upskilling y carrera */
                {
                  type: "paragraph",
                  text: "Mientras la ‘formación’ suele enfocarse en cerrar brechas inmediatas de desempeño, el ‘desarrollo’ se orienta a preparar a la persona para asumir responsabilidades futuras, liderar equipos y transitar carreras horizontales o diagonales. En un mercado laboral que demanda reskilling y upskilling constantes, los planes de desarrollo individual (PDI) y los mapas de talento (9-box, por ejemplo) ayudan a priorizar la inversión formativa y a diseñar itinerarios que combinen experiencias formales (cursos), sociales (mentoring, coaching, comunidades) y situadas (proyectos retadores, rotaciones, job shadowing). La gestión del conocimiento cobra relevancia: documentar buenas prácticas, curar contenidos y crear repositorios de lecciones aprendidas permite que el aprendizaje trascienda a la persona y se institucionalice. Desde la perspectiva del colaborador, el desarrollo aumenta la empleabilidad interna y externa; desde la organización, disminuye la rotación, acelera la sucesión y asegura la continuidad del negocio ante cambios tecnológicos o estratégicos. Todo ello exige liderazgo pedagógico: jefes que den retroalimentación continua, construyan contextos psicológicamente seguros para experimentar y fallar, y usen la evaluación del desempeño con enfoque formativo, no punitivo.",
                },

                /* Acordeón 2 — “Tendencias actuales en L&D (Learning & Development)” */
                {
                  type: "accordion",
                  header: "Tendencias actuales en L&D (Learning & Development)",
                  open: false,
                  text:
                    "* **Learning in the flow of work**: microcontenidos integrados al flujo de trabajo.  \n" +
                    "* **IA generativa y analítica de aprendizaje** para personalizar rutas y medir impacto.  \n" +
                    "* **Ecosistemas de talento**: mentoring, coaching, comunidades de práctica.  \n" +
                    "* **Credenciales digitales y badges** para certificar micro‑competencias.  \n" +
                    "* **Experiential learning** (rotaciones, proyectos ágiles, laboratorios de innovación).",
                },

                /* Párrafo 4 (~300 palabras) — Cultura de aprendizaje y rol de RH */
                {
                  type: "paragraph",
                  text: "Implantar una verdadera cultura de aprendizaje implica desplazar el foco desde el área de Recursos Humanos como ‘proveedor de cursos’ hacia un modelo en el que toda la organización es corresponsable de aprender y enseñar. Esto exige gobernanza (políticas claras, estándares de calidad instruccional), sponsorship ejecutivo (el comité directivo aprende primero), métricas compartidas (KPI de negocio + métricas de aprendizaje) y una comunicación interna que visibilice historias de éxito. El área de RH evoluciona a socio estratégico del negocio: acompaña a las direcciones en la identificación de capacidades críticas, prioriza iniciativas formativas de alto impacto, mide retornos y facilita plataformas, metodologías y datos para que los líderes gestionen el desempeño con base en evidencias. El reto emergente es ético y cultural: garantizar la inclusión (diseño universal del aprendizaje), la equidad de acceso a oportunidades de desarrollo y el respeto a la privacidad de los datos de aprendizaje. Cuando estos pilares se cuidan, la formación y el desarrollo dejan de ser un ‘gasto’ para convertirse en una inversión que genera valor tangible, reputacional y social para la empresa y sus colaboradores.",
                },

                /* Video final */
                {
                  type: "video",
                  title:
                    "Formación y desarrollo del talento: del curso al impacto",
                  src: "https://www.youtube.com/watch?v=LAdRBUxeJCw",
                  caption:
                    "Panorama de tendencias en L&D, analítica de aprendizaje y medición del ROI.",
                },
              ],
            },
          ],
        },

        /* ----- Tema 4 ----- */
        {
          id: "4",
          numbering: "4",
          title: "Administración estratégica de Recursos Humanos",
          content: [
            /* Párrafo 1 — Qué es y por qué importa la AERH (~300 palabras) */
            {
              type: "paragraph",
              text: "La administración estratégica de Recursos Humanos (AERH) es el conjunto de políticas, prácticas y decisiones que alinean la gestión del talento con la estrategia corporativa para sostener ventajas competitivas. Implica leer el entorno —oportunidades y amenazas— y equilibrarlo con las fortalezas y debilidades internas del sistema de RH, de modo que cada proceso (provisión, desarrollo, compensación, desempeño, sucesión) contribuya de forma medible a los objetivos del negocio. Bajo este enfoque, el área de RH deja de ser meramente operativa para convertirse en un socio estratégico que aporta análisis de datos, modelado de competencias, métricas de impacto y propuestas de rediseño organizacional. Así, se demandan tableros de control que muestren cómo las decisiones sobre atracción, movilidad interna, engagement o bienestar se traducen en productividad, innovación, calidad de servicio y sostenibilidad financiera. La AERH asume además que el talento es escaso y dinámico: por ello, se requiere planificar escenarios, construir pipelines de talento, fortalecer la marca empleadora y anticipar brechas de capacidades frente a tendencias tecnológicas (IA, automatización, analítica avanzada) y sociolaborales (diversidad e inclusión, esquemas híbridos, bienestar integral). En síntesis, la pregunta estratégica que guía a RH deja de ser “¿cómo llenar vacantes?” para transformarse en “¿qué capacidades humanas necesitamos desarrollar y retener para ejecutar la estrategia hoy y mañana, y cómo evidenciamos su aporte?”.",
            },

            /* Acordeón 1 — Conceptos y piezas de la AERH */
            {
              type: "accordion",
              header: "Conceptos y piezas clave de la AERH",
              open: false,
              text:
                "* **Alineación estratégica:** metas de personas conectadas con los OKR/KPI del negocio.  \n" +
                "* **Análisis interno‑externo:** fortalezas/debilidades vs. oportunidades/amenazas.  \n" +
                "* **Métricas y evidencia:** tableros de turnover, time‑to-fill, engagement, productividad, ROI de capacitación.  \n" +
                "* **Gestión por competencias:** identificar, desarrollar y evaluar capacidades críticas.  \n" +
                "* **Planeación de la fuerza de trabajo:** escenarios, brechas, movilidad, sucesión.  \n" +
                "* **Marca empleadora y pipeline de talento:** atracción y fidelización continua.  \n" +
                "* **People analytics:** toma de decisiones basada en datos y modelos predictivos.",
            },

            /* Párrafo 2 — Estrategia vs. táctica; arquitectura, cultura y liderazgo (~300 palabras) */
            {
              type: "paragraph",
              text: "Diferenciar entre estrategia y táctica en RH es esencial: la estrategia define el rumbo (qué capacidades humanas y organizacionales debemos asegurar para competir), mientras que la táctica operacionaliza (con qué programas, procesos y herramientas lo lograremos). Desde la perspectiva estratégica, RH interviene en tres capas: (1) **arquitectura organizacional** (políticas, procesos, flujos, tecnología y gobierno de datos de personas); (2) **cultura y comportamiento** (valores, liderazgo, confianza, ética, participación, innovación, satisfacción y compromiso); y (3) **estilo de administración** (descentralización, toma de decisiones basada en evidencia, empowerment y coaching). La coherencia entre estas capas permite que el talento despliegue conocimientos, habilidades, juicio y actitudes emprendedoras. Por ejemplo, de poco sirve pedir innovación si la arquitectura de procesos castiga el error o si los estilos de liderazgo mantienen estructuras rígidas. La AERH demanda, por tanto, rediseñar roles, decisiones y sistemas de incentivos, así como habilitar liderazgo distribuido, aprendizaje continuo y mecanismos de feedback que conecten evaluación del desempeño con planes de desarrollo personalizados. En este marco, RH se vuelve custodio del “sistema social” de la empresa: vela por la inclusión y la diversidad, la salud mental y el bienestar, el engagement y las trayectorias profesionales, integrando prácticas que maximizan el valor compartido entre personas y organización.",
            },

            /* Acordeón 2 — Tendencias y desafíos estratégicos en RH (según el módulo) */
            {
              type: "accordion",
              header:
                "Tendencias estratégicas destacadas (OKR, IA, engagement, wellbeing, D&I)",
              open: false,
              text:
                "* **OKR (Objectives & Key Results):** metas ágiles y ambiciosas, alineadas y visibles para todos.  \n" +
                "* **Inteligencia Artificial en RH:** automatización del reclutamiento, people analytics predictivo, chatbots y screening avanzado.  \n" +
                "* **Rotación a la baja:** retención como prioridad para sostener continuidad operativa y conocimiento crítico.  \n" +
                "* **Engagement y marca empleadora:** compromiso, propósito y experiencias positivas del colaborador.  \n" +
                "* **Wellbeing integral:** factores físicos, mentales y emocionales que impactan el desempeño.  \n" +
                "* **Diversidad e Inclusión:** pertenencia e individuación equilibradas, innovación y productividad como resultados.  \n" +
                "* **Pipeline de talento e inbound recruiting:** comunidades de candidatos, IA para matching y experiencia del candidato optimizada.",
            },

            /* Párrafo 3 — Internet, e‑recruiting y selección basada en datos (~300 palabras) */
            {
              type: "paragraph",
              text: "La dimensión digital es hoy ineludible en la AERH. Internet y las plataformas tecnológicas han transformado radicalmente los procesos de atracción y selección: el **e‑recruiting** permite ampliar el alcance, acortar tiempos de cobertura (time‑to‑fill) y mejorar el ajuste persona‑puesto mediante algoritmos de matching y analítica de datos. Para que funcione, los flujos deben ser sencillos, responsivos y transparentes, manteniendo comunicación frecuente con los candidatos. Se consolida el **inbound recruiting**, que trata al candidato como cliente: contenido de valor, marca empleadora sólida y experiencia positiva en cada touchpoint del funnel. Paralelamente, la **IA y el people analytics** facilitan modelar el capital humano: identificar patrones de rotación, predecir riesgos de fuga del talento crítico, mapear sucesores y personalizar el aprendizaje. No obstante, estos beneficios requieren políticas robustas de ética, privacidad y explicabilidad algorítmica para evitar sesgos y discriminación. La digitalización no sustituye el juicio profesional ni la cultura de feedback; más bien, los potencia cuando se integran en marcos de decisión claros y se fortalecen capacidades críticas como la lectura de datos, la experimentación y la gestión del cambio. En consecuencia, la estrategia de RH no solo incorpora herramientas, sino que redefine competencias, rediseña procesos y mide sistemáticamente el impacto de cada iniciativa sobre los resultados del negocio y el bienestar de las personas.",
            },

            /* Párrafo 4 — Cerrar el ciclo: medir, retroalimentar y ajustar (~300 palabras) */
            {
              type: "paragraph",
              text: "Una AERH madura opera en ciclos: **planear → ejecutar → medir → retroalimentar → ajustar**. Todo comienza con un mapa claro de capacidades estratégicas (por ejemplo, data literacy, innovación, orientación al cliente, liderazgo inclusivo) y con brechas cuantificadas. La ejecución se apoya en programas de reclutamiento, formación, compensación variable, movilidad interna, sucesión y bienestar. La medición combina indicadores “duros” (productividad, rotación, ausentismo, desempeño, costos de contratación, NPS interno) con indicadores “blandos” (engagement, clima, sentido de pertenencia, inclusión). La retroalimentación debe ser oportuna, específica y acompañada de recursos de desarrollo (coaching, microlearning, mentores, proyectos stretch). Finalmente, el ajuste estratégico implica revisar supuestos, priorizar inversiones en personas y rediseñar procesos cuando la evidencia lo exige. Así, RH demuestra con datos su contribución a la ventaja competitiva, legitima su lugar en la mesa estratégica y asegura que la organización esté preparada —desde el factor humano— para responder a un entorno volátil, digital y altamente competitivo.",
            },
          ],
          subthemes: [
            {
              id: "4.1",
              numbering: "4.1",
              title: "Definición",
              content: [
                /* Párrafo 1 (~300 palabras) — Qué es la Administración Estratégica de RH */
                {
                  type: "paragraph",
                  text: "La administración estratégica de Recursos Humanos (ARH-E) se entiende como el conjunto de políticas, prácticas y decisiones integradas que, de manera deliberada, alinean la gestión de las personas con la estrategia corporativa para sostener o ampliar ventajas competitivas. No se limita a operar procesos transaccionales (reclutar, pagar nómina o administrar expedientes), sino que articula dichos procesos con los objetivos de negocio mediante un plan operativo que equilibra fortalezas y debilidades internas con oportunidades y amenazas externas. Desde esta perspectiva, el área de RH deja de ser un actor de soporte administrativo para convertirse en un socio estratégico que anticipa requerimientos de talento, modela capacidades organizacionales críticas (innovación, orientación al cliente, agilidad, digitalización) y aporta métricas que evidencian la contribución del capital humano a los resultados. En términos prácticos, la ARH-E integra: análisis del entorno (económico, tecnológico, demográfico y regulatorio), diagnóstico interno de capacidades y cultura, definición de objetivos de talento alineados al plan estratégico, diseño de iniciativas (adquisición, desarrollo, compensación, performance, bienestar y engagement) y un sistema de indicadores (KPIs y OKR) que permiten evaluar impacto y reencauzar tácticas. El énfasis está en construir coherencia entre lo que la organización declara como estrategia y las experiencias reales que viven las personas a lo largo del ciclo de vida del empleado (employee journey), evitando la fragmentación entre discursos y prácticas.",
                },

                /* Lista 1 — Componentes clave de la ARH-E (complemento) */
                {
                  type: "list",
                  title:
                    "Componentes esenciales de la administración estratégica de RH",
                  items: [
                    "Alineación explícita entre metas de negocio y metas de talento (OKR/KPIs).",
                    "Mapa de capacidades organizacionales críticas (agilidad, innovación, data literacy).",
                    "Workforce planning estratégico (oferta-demanda de talento, reskilling & upskilling).",
                    "Arquitectura de roles y competencias basada en el valor para la estrategia.",
                    "People Analytics para tomar decisiones basadas en evidencia.",
                    "Employee Experience & Engagement como palancas de desempeño sostenible.",
                  ],
                },

                /* Párrafo 2 (~300 palabras) — Proceso y lógica de implantación */
                {
                  type: "paragraph",
                  text: "Implantar la ARH-E supone adoptar una lógica de planeación iterativa y basada en datos. En la fase de análisis estratégico, RH participa en la lectura del entorno (tecnología, IA generativa, trabajo híbrido, escasez de habilidades críticas) y en la identificación de brechas de talento que pueden obstaculizar la ejecución del plan de negocios. Luego, en la formulación, se definen objetivos de talento priorizados (por ejemplo, reducir la rotación en posiciones críticas al 8 %, elevar el índice de engagement al 80 % o cerrar en 12 meses la brecha de habilidades digitales en las áreas core). En la fase de implementación, se despliegan iniciativas coherentes: rediseño de la propuesta de valor al empleado (EVP), esquemas de compensación variable ligados a resultados estratégicos, academias de aprendizaje continuo, planes de sucesión y movilidad interna, automatización de procesos con HR Tech y people analytics para optimizar decisiones. Finalmente, el control estratégico se realiza con tableros que integran indicadores financieros y de talento (time to fill, quality of hire, revenue per FTE, productividad, eNPS, rotación crítica, diversidad e inclusión), posibilitando ajustes ágiles. Esta lógica evita que RH opere de manera reactiva y táctica, y promueve una gobernanza en la que los líderes de línea asumen corresponsabilidad por la gestión del talento, mientras que RH habilita, diseña marcos y orquesta la ejecución multiactor.",
                },

                /* Imagen ilustrativa */
                {
                  type: "image",
                  src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
                  alt: "Alineación estratégica entre negocio y Recursos Humanos",
                  caption:
                    "La ARH-E integra datos, cultura y procesos para traducir la estrategia en resultados de talento.",
                },

                /* Lista 2 — Tendencias actuales que fortalecen la ARH-E */
                {
                  type: "list",
                  title:
                    "Tendencias que potencian la administración estratégica de RH",
                  items: [
                    "OKR para alinear objetivos individuales y de equipo con la estrategia corporativa.",
                    "IA y automatización en reclutamiento (e‑recruiting), analítica de desempeño y planes de sucesión.",
                    "Modelos de skills-based organization: roles, compensación y movilidad guiados por habilidades.",
                    "Estrategias de wellbeing y salud mental integradas al performance sostenible.",
                    "People Analytics avanzado (predicción de rotación, flight risk, productividad, DEI).",
                    "Diseño de experiencias del empleado (EX) centradas en datos y journey mapping.",
                  ],
                },

                /* Párrafo 3 (~300 palabras) — Valor estratégico, métricas y riesgos */
                {
                  type: "paragraph",
                  text: "El valor estratégico de la ARH-E reside en su capacidad para convertir la estrategia en comportamientos, capacidades y decisiones de talento medibles. Cuando RH muestra, con indicadores robustos, cómo iniciativas de upskilling reducen el time‑to‑productivity, cómo el rediseño del EVP baja la rotación crítica o cómo los programas de liderazgo incrementan la productividad por FTE, gana legitimidad en la mesa directiva. No obstante, existen riesgos frecuentes: (a) la desconexión entre métricas de talento y métricas de negocio, que convierte el dashboard de RH en un fin en sí mismo; (b) la sobredependencia de soluciones tecnológicas sin rediseñar procesos ni cultura, generando “teatro de la digitalización”; (c) la subestimación de la gestión del cambio y la formación de líderes de línea para que asuman el rol de people managers; y (d) la falta de governance de datos (calidad, ética, privacidad) en proyectos de People Analytics. Para mitigar estos riesgos, se recomienda instaurar una arquitectura de métricas estratégica (leading & lagging indicators), asegurar la coherencia cultural (qué se mide y recompensa) y establecer ciclos cortos de revisión (quarterly business reviews) que permitan reencauzar la cartera de iniciativas de talento. En síntesis, la ARH-E no es un documento de intención, sino un sistema vivo de decisiones que conecta, con evidencia, a las personas con los resultados organizacionales.",
                },
              ],
            },
            {
              id: "4.2",
              numbering: "4.2",
              title: "Generalidades de estrategia",
              content: [
                /* Párrafo 1 (≈300 palabras) — Qué entendemos por “estrategia” y sus niveles */
                {
                  type: "paragraph",
                  text: "Hablar de estrategia en Administración de Recursos Humanos (ARH) implica superar la visión operativa y transitar hacia una lógica de creación de valor sostenible. En sentido amplio, la estrategia es el conjunto de decisiones y acciones coherentes que, a partir de la misión, la visión y los valores de la organización, buscan construir y defender ventajas competitivas frente a un entorno cambiante. Tradicionalmente se distingue entre estrategia corporativa (qué negocios operar y cómo asignar recursos entre ellos), estrategia de negocio o competitiva (cómo competir en cada mercado) y estrategia funcional (cómo cada función —finanzas, marketing, operaciones y, por supuesto, RH— contribuye a la ejecución de los objetivos superiores). Desde esta óptica, la ARH estratégica deja de ser únicamente administradora de nóminas, contratos o capacitación aislada, para convertirse en socia del negocio que traduce las prioridades corporativas en capacidades humanas concretas: talento crítico, estructuras organizacionales ágiles, liderazgo alineado y culturas que soportan la innovación. En consecuencia, las decisiones de provisión, desarrollo, compensación y retención del talento deben derivarse de un diagnóstico riguroso del entorno (oportunidades y amenazas), de las fortalezas y debilidades internas, y de los requerimientos futuros del plan estratégico. Esta articulación exige métricas (KPIs y OKR) que conecten los resultados de la función de RH con los resultados del negocio (crecimiento, productividad, satisfacción del cliente, innovación), así como un gobierno de datos que permita anticipar brechas de capacidades, riesgos de rotación y necesidades de reskilling/upskilling.",
                },

                /* Lista 1 — Marcos y niveles estratégicos clave */
                {
                  type: "list",
                  title:
                    "Marcos y niveles estratégicos a los que RH debe alinearse",
                  ordered: false,
                  items: [
                    "Estrategia corporativa, competitiva y funcional: coherencia vertical de objetivos.",
                    "Misión, visión y valores: anclaje cultural de todas las políticas de talento.",
                    "Análisis externo (PESTEL, cinco fuerzas de Porter) e interno (VRIO, cadena de valor).",
                    "Alineación talento–estrategia: roles críticos, capacidades esenciales y brechas.",
                    "Gobernanza de datos (People Analytics) para decisiones basadas en evidencia.",
                  ],
                },

                /* Párrafo 2 (≈300 palabras) — Proceso estratégico y rol de RH */
                {
                  type: "paragraph",
                  text: "El proceso estratégico típico comprende, de manera iterativa, diagnóstico, formulación, implementación y control. En el diagnóstico, RH aporta información valiosa sobre demografía de la fuerza laboral, rotación, engagement, clima, competencias disponibles y riesgos de sucesión. En la formulación, participa traduciendo los objetivos corporativos en mapas de capacidades (qué saberes, habilidades y actitudes se necesitan para ejecutar la propuesta de valor) y en arquitecturas organizacionales que reduzcan la fricción entre equipos y aceleren la toma de decisiones. Durante la implementación, RH diseña sistemas de gestión del desempeño (OKR, MBO, rúbricas de competencias), planes de compensación estratégica (variable por resultados, incentivos a la innovación, paquetes de bienestar) y programas de aprendizaje continuo (upskilling/reskilling) apoyados en metodologías ágiles y ecosistemas digitales (LMS, microlearning, IA generativa). Finalmente, en el control, integra tableros de mando (HR Scorecard, People Analytics) que permiten monitorear indicadores de impacto (productividad, time‑to-fill, rotación estratégica, calidad de contratación, diversidad e inclusión) y retroalimentar al ciclo estratégico. Así, la ARH se posiciona como un habilitador crítico del cambio organizacional, capaz de sostener transformaciones digitales, culturales y estructurales a la velocidad que exige el entorno.",
                },

                /* Imagen ilustrativa */
                {
                  type: "image",
                  src: "https://www.webyempresas.com/wp-content/uploads/2024/10/Jerarquias-de-las-Estrategias-Organizacionales-696x522.jpg",
                  alt: "Niveles de estrategia y alineación con Recursos Humanos",
                  caption:
                    "Alineación vertical: corporativa → competitiva → funcional (RH) para ejecutar la estrategia.",
                },

                /* Párrafo 3 (≈300 palabras) — Tendencias actuales que redefinen la estrategia y el papel de RH */
                {
                  type: "paragraph",
                  text: "Las “generalidades” de la estrategia hoy incorporan dinámicas que, hace una década, eran marginales en los planes de RH. Tres destacan. Primero, la aceleración digital: inteligencia artificial, automatización de procesos (RPA) y analítica avanzada impulsan decisiones más rápidas y precisas en reclutamiento (e‑recruiting), desarrollo y planeación de la fuerza laboral. Segundo, la centralidad de la experiencia del empleado (EX) como palanca de productividad y retención: comprometer (engagement), asegurar bienestar integral (wellbeing) y diseñar culturas inclusivas no es filantropía, es estrategia de negocio, pues incide en innovación, servicio y reputación de marca empleadora. Tercero, la agilidad organizacional: estructuras menos jerárquicas, trabajo híbrido, equipos autogestionados y ciclos cortos de planeación (OKR trimestrales) demandan que RH domine el change management y el rediseño continuo de puestos y competencias. Bajo estas premisas, hablar de estrategia en RH significa anticipar escenarios, construir pipelines de talento, actualizar continuamente las capacidades críticas y orquestar sistemas de gestión que conecten personas, procesos y tecnología con los resultados estratégicos. En resumen, la estrategia deja de ser un documento estático para convertirse en un sistema vivo de aprendizaje organizacional que RH lidera junto con la alta dirección.",
                },

                /* Lista 2 — Herramientas analíticas y de ejecución para la ARH estratégica */
                {
                  type: "list",
                  title:
                    "Herramientas para operacionalizar la estrategia en RH",
                  ordered: false,
                  items: [
                    "HR Scorecard y KPIs estratégicos (rotación crítica, calidad de contratación, ROI de capacitación).",
                    "OKR para alinear objetivos individuales/equipos con metas corporativas.",
                    "People Analytics y modelos predictivos (riesgo de fuga, desempeño futuro, brechas de skills).",
                    "Mapas de talento y planes de sucesión basados en potencial/desempeño (9-box).",
                    "Programas de upskilling/reskilling soportados en LMS, microlearning e IA.",
                  ],
                },
              ],
            },
            {
              id: "4.3",
              numbering: "4.3",
              title: "Estrategia y táctica",
              content: [
                /* Párrafo 1 (≈ 300 palabras) — Diferencia conceptual */
                {
                  type: "paragraph",
                  text: "En la Administración Estratégica de Recursos Humanos (ARH) la primera distinción clave reside en comprender qué es **estrategia** y qué es **táctica**. La estrategia alude al gran plan de largo alcance que armoniza las fortalezas y debilidades internas con las oportunidades y amenazas externas para garantizar la ventaja competitiva de la organización; en ARH implica alinear todas las políticas de personal con la dirección corporativa, desde la provisión hasta la compensación. La táctica, en contraste, se centra en los procedimientos concretos, de menor alcance temporal, que permiten materializar la estrategia día a día: programas de reclutamiento trimestrales, calendarios de capacitación o campañas de clima laboral. El material de estudio enfatiza que la **administración estratégica** es “un plan operativo que se diseña para equilibrar fortalezas y debilidades internas con amenazas y oportunidades externas”. Por ende, una política salarial ligada al mercado puede ser parte de la estrategia, mientras que la táctica concreta será la ronda semestral de encuestas de remuneraciones que alimenta esa política. Comprender esta diferencia evita que el departamento de RH permanezca en actividades meramente operativas y le permite asumir el rol de socio estratégico que la literatura contemporánea exige.",
                },

                /* Acordeón 1 — Decisiones estratégicas de RRHH */
                {
                  type: "accordion",
                  header: "Ejemplos de decisiones **estratégicas** de RRHH",
                  open: false,
                  text:
                    "* **Modelo de competencias núcleo:** definir los comportamientos clave que sustentan la cultura y la ventaja competitiva.\n" +
                    "* **Política global de reclutamiento:** delinear si la organización atraerá talento en mercados locales o internacionales.\n" +
                    "* **Sistema integral de compensaciones:** vincular recompensas a la creación de valor a largo plazo (bonos diferidos, acciones fantasma).\n" +
                    "* **Arquitectura de talento crítico:** identificar puestos ‑clave y diseñar planes sucesorios a 3‑5 años.\n" +
                    "* **Estrategia de employer branding:** posicionar la marca empleadora para captar y retener capital humano escaso.",
                },

                /* Párrafo 2 (≈ 300 palabras) — Interacción y alineación */
                {
                  type: "paragraph",
                  text: "La relación entre estrategia y táctica es dialéctica: las tácticas dotan de viabilidad operativa a la estrategia, mientras que la retroalimentación táctica permite ajustar la visión de largo plazo. En ARH esto se traduce en un ciclo permanente de análisis–planificación–ejecución–evaluación. Un ejemplo citado en el módulo es el uso de análisis FODA para diagnosticar si el talento disponible se corresponde con la dirección futura (digitalización, internacionalización, trabajo híbrido); con base en dicho análisis se trazan líneas maestras (estrategia) y después se despliegan tácticas como programas de upskilling o alianzas con universidades. De esta forma, la gestión de recursos humanos no sólo reacciona a las necesidades operativas, sino que construye capacidades distintivas que sostienen la diferenciación competitiva.",
                },

                /* Acordeón 2 — Tácticas habituales de RRHH */
                {
                  type: "accordion",
                  header:
                    "Ejemplos de **tácticas** de RRHH vinculadas a la estrategia",
                  open: false,
                  text:
                    "* **Calendario de capacitación trimestral:** sesiones micro‑learning alineadas con las competencias digitales definidas.\n" +
                    "* **Campañas de bienestar específicas:** pausas activas, tele‑asistencia psicológica y retos de salud que apoyan la estrategia de sostenibilidad.\n" +
                    "* **Reclutamiento por referidos:** incentivo económico a colaboradores para atraer perfiles de nicho en menos de 30 días.\n" +
                    "* **OKR de área:** objetivos mensuales de rotación (< 8 %) y cobertura de vacantes (< 25 días) que aterrizan la meta estratégica de retención.\n" +
                    "* **Tableros de analítica de personas:** monitoreo semanal de ausentismo y desempeño para tomar decisiones tácticas rápidas.",
                },

                /* Párrafo 3 (≈ 300 palabras) — Riesgos de la desconexión estrategia‑táctica */
                {
                  type: "paragraph",
                  text: "Cuando las tácticas se implementan sin un marco estratégico, el departamento de RH cae en el activismo: muchas actividades, poco impacto. El módulo advierte que un ‘plan operativo’ aislado de la visión corporativa puede generar asignación ineficiente de recursos de capacitación o esquemas de incentivos que refuercen comportamientos contrarios a la cultura deseada. Por ejemplo, premiar horas extra en lugar de innovación contradice una estrategia de agilidad. Asimismo, si la alta dirección no comunica la estrategia de negocio, las tácticas de RH serán meramente reactivas ante crisis de rotación o carencia de habilidades. Por ello, se recomienda un **mecanismo de gobierno** (comité de talento o HR business partner) que garantice la coherencia vertical entre objetivos corporativos, indicadores estratégicos (KPI) y tácticas de ejecución. Este enfoque integrado se traduce en métricas de valor: reducción de costos de contratación, aumento del índice de compromiso y, finalmente, mejora de la rentabilidad.",
                },

                /* Imagen ilustrativa */
                {
                  type: "image",
                  src: "https://website-assets.studocu.com/img/document_thumbnails/bae69cb0d3bd8cb638b2287778f81ba4/thumb_1200_729.png",
                  caption:
                    "Relación jerárquica entre estrategia (visión de largo plazo) y táctica (acciones operativas).",
                },
              ],
            },
            {
              id: "4.4",
              numbering: "4.4",
              title: "Internet en la empresa",
              content: [
                /* Párrafo 1 — Impacto estratégico (≈ 300 palabras) */
                {
                  type: "paragraph",
                  text: "La irrupción de Internet en la empresa ha transformado la gestión de los recursos humanos al proveer herramientas que acortan distancias, aceleran los flujos de información y facilitan la toma de decisiones basada en datos. Bajo el concepto de e‑HRM, los portales internos permiten a los colaboradores acceder en tiempo real a políticas, nóminas y oportunidades de capacitación sin mediar trámites presenciales. Esto libera tiempo administrativo y orienta al área de capital humano hacia tareas estratégicas, como la analítica de personas y la planificación de la sucesión. Además, la conectividad permanente posibilita la creación de comunidades de práctica virtuales donde el conocimiento se comparte y se multiplica—tal como sugiere Vallejo (2016) cuando describe el ‘efecto multiplicador’ del capital humano. A su vez, plataformas colaborativas como Slack, Teams o Workplace fomentan la cocreación de soluciones y el aprendizaje informal entre departamentos, reforzando la cultura de innovación. No obstante, este ecosistema digital demanda políticas robustas de seguridad y un liderazgo que garantice la inclusión tecnológica, evitando brechas generacionales o de acceso. Así, el reto no es solo implantar software, sino asegurar que cada colaborador disponga de las competencias digitales básicas para usarlo, aspecto que la OIT destaca como condición para una transición laboral equitativa en la economía 4.0.",
                },

                /* Párrafo 2 — Del e‑recruiting al teletrabajo (≈ 300 palabras) */
                {
                  type: "paragraph",
                  text: "En el ámbito de la atracción de talento, Internet se ha convertido en el eje de los procesos de e‑recruiting: los anuncios publicados en bolsas de empleo, redes profesionales y sistemas de seguimiento de candidatos (ATS) multiplican el alcance de las vacantes y aplican algoritmos que filtran currículos en segundos. Este enfoque no solo reduce costos de contratación; también genera una base de datos dinámica—el ‘pipeline de talento’—que se actualiza con perfiles internos y externos listos para futuras oportunidades. Una vez incorporados, los empleados pueden completar su onboarding mediante campus virtuales y realidad aumentada, favoreciendo una curva de aprendizaje más corta. Paralelamente, el teletrabajo —impulsado por plataformas de videoconferencia y suites colaborativas en la nube— reconfigura la noción de presencia física y exige nuevos indicadores de desempeño centrados en resultados. Según Chiavenato (2009), la clave está en armonizar los objetivos organizacionales con el bienestar del colaborador: horarios flexibles, ergonomía digital y protocolos de ciberseguridad robustos. Finalmente, la evolución hacia modelos híbridos obliga al área de RR. HH. a diseñar políticas de gestión del cambio que contemplen formación continua en competencias digitales, estrategias de engagement remoto y métricas de productividad basadas en OKR. En suma, Internet no es solo una herramienta operativa, sino un habilitador estratégico que redefine la propuesta de valor al empleado y posiciona a la organización frente a sus competidores en la era de la hiperconectividad.",
                },

                /* Video ilustrativo */
                {
                  type: "video",
                  title:
                    "e-RH & Transformación Digital: de la captación al teletrabajo",
                  src: "https://www.youtube.com/watch?v=XUjyZvb2I7c",
                  caption:
                    "Masterclass que sintetiza las tendencias de e‑recruiting, analítica de personas y teletrabajo seguro.",
                },
              ],
              subthemes: [
                {
                  id: "4.4.1",
                  numbering: "4.4.1",
                  title: "E‑recruiting",
                  content: [
                    /* Párrafo 1 — De la publicación a la analítica (≈ 300 palabras) */
                    {
                      type: "paragraph",
                      text: "El e‑recruiting —también denominado reclutamiento electrónico o reclutamiento 4.0— es el conjunto de procesos y herramientas basados en Internet que las organizaciones emplean para atraer, identificar y filtrar talento de manera más ágil y rentable que los métodos tradicionales. El punto de partida suele ser la publicación multicanal: a través de agregadores de empleo, portales especializados (por ejemplo, OCC, Indeed o Computrabajo) y redes profesionales como LinkedIn, las vacantes llegan a miles de candidatos potenciales con un solo clic. Esta difusión masiva se complementa con campañas de employer branding en redes sociales, content marketing y referidos digitales, lo que amplía la visibilidad y refuerza la propuesta de valor de la empresa como lugar de trabajo. Una vez recibidas las solicitudes, el proceso continúa en los Applicant Tracking Systems (ATS), plataformas que centralizan currículos, extraen información mediante OCR y asignan puntajes automáticos según criterios definidos por Recursos Humanos. Funciones como el análisis semántico permiten detectar coincidencias entre la descripción del puesto y las competencias declaradas por los aspirantes, reduciendo tiempos de cribado hasta en un 70 %. Paralelamente, la analítica de personas (People Analytics) aprovecha los datos históricos para predecir la permanencia o el rendimiento futuro de los candidatos, alimentando modelos de aprendizaje automático que refinan cada ciclo de selección. Con ello, el e‑recruiting no solo agiliza la obtención de talento, sino que transforma la toma de decisiones en un proceso basado en métricas objetivas y trazables.",
                    },

                    /* Párrafo 2 — Ventajas, retos y tendencias (≈ 300 palabras) */
                    {
                      type: "paragraph",
                      text: "Las ventajas estratégicas del e‑recruiting se reflejan en tres dimensiones clave. La primera es el alcance global: una organización mediana puede recibir postulaciones de diferentes continentes y construir un ‘pipeline’ de talento diverso, esencial para la innovación y la competitividad en mercados globalizados. La segunda dimensión es la experiencia del candidato: los portales ‘mobile‑friendly’, las notificaciones automáticas sobre el estado del proceso y las entrevistas por videoconferencia reducen la fricción y proyectan una imagen de modernidad. Por último, la tercera dimensión es la eficiencia operativa: según datos de Deloitte (2022), las empresas con procesos de e‑recruiting maduros recortan sus costos de contratación hasta un 40 % y aceleran la cobertura de puestos críticos en un 60 %. Sin embargo, el modelo entraña desafíos. El primero es ético: los algoritmos de filtrado pueden reproducir sesgos de género o etnia si los datos históricos contienen desigualdades; por ello, la Comisión Europea recomienda auditorías periódicas de equidad algorítmica. El segundo reto es el exceso de postulaciones: la facilidad para aplicar genera ‘ruido’ y exige filtros que equilibren automatización con evaluación humana. Finalmente, la privacidad cobra relevancia debido al tratamiento masivo de datos personales; las empresas deben cumplir el RGPD y las normativas locales de protección de datos. Mirando al futuro, la integración de realidad virtual para ‘job previews’, entrevistas asincrónicas con IA y la verificación de credenciales mediante blockchain figuran entre las tendencias que marcarán la próxima década. En síntesis, el e‑recruiting aporta ventajas sustanciales, siempre que se gestione de forma responsable y centrada en la experiencia del candidato.",
                    },

                    /* Imagen ilustrativa */
                    {
                      type: "image",
                      src: "https://static-cse.canva.com/blob/1842863/long-form_kanban-boards_section-8_asset-2.png",
                      alt: "Proceso digital de reclutamiento ilustrado en un tablero Kanban virtual",
                      caption:
                        "Visualización típica de un flujo de e‑recruiting en un Applicant Tracking System.",
                    },
                  ],
                },
              ],
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
          href: "https://www.youtube.com/watch?v=wqiXEF-gPIg", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            // ── Videos ───────────────────────────────────────────────
            "Great Place to Work® – El capital humano. https://www.youtube.com/watch?v=wqiXEF-gPIg",
            "Tendencias de recursos humanos que se vienen para el 2021. https://www.youtube.com/watch?v=eJoQRDmP7LM",
            "Reclutamiento 4.0: ¿Qué es el Inbound Recruiting? https://www.youtube.com/watch?v=9wNQXbyD8Cg",

            // ── Recurso web ──────────────────────────────────────────
            "e‑recruitment (e‑recruiting). TechTarget. https://searchhrsoftware.techtarget.com/definition/e-recruiting",

            // ── Documentos / Libros / Artículos ─────────────────────
            "Alles, M. (2016). Dirección estratégica de Recursos Humanos. Buenos Aires: Granica. (Formación de personal, pp. 234‑273). https://comunicacionrrhh.files.wordpress.com/2018/04/alles-direccion-estrategica-de-recursos-humanos.pdf",
            "Armas Ortega, Y., Encalada, M. L., & Holguín, P. T. (2017). Gestión del talento humano y nuevos escenarios laborales. Samborondón, Ecuador: ECOTEC. (pp. 66‑88). https://libros.ecotec.edu.ec/index.php/editorial/catalog/view/26/22/126-1",
            "Osio Havriluk, L. (2010). El teletrabajo: Una opción en la era digital. Observatorio Laboral Revista Venezolana, 93‑109. https://comunicacionrrhh.files.wordpress.com/2018/04/alles-direccion-estrategica-de-recursos-humanos.pdf",
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
            "Alles, M. (2016). *Dirección estratégica de Recursos Humanos.* Buenos Aires: Editorial Granica.",
            "Bohlander, G. & Snell, S. (2018). *Administración de Recursos Humanos.* México: Cengage Learning.",
            "Bretones, F. D. & Rodríguez, A. (2008). *Reclutamiento y selección de personal y acogida.* En M. M. A. & A. D. (Eds.), *Recursos Humanos* (pp. 101‑134). Madrid: Editorial Pirámide.",
            "Chiavenato, I. (2009). *Gestión de talento humano.* México: McGraw‑Hill.",
            "Comunicado (2020). Organización Internacional del Trabajo. Recuperado de https://www.ilo.org (24 sep 2020).",
            "Dessler, G. & Juárez, R. V. (2011). *Administración de Recursos Humanos.* México: Pearson Educación.",
            "Durán, C. & de Urbina, C. O. (2018). *Fundamentos de Recursos Humanos.* Madrid: Pearson Educación.",
            "E‑recruiting (2020). “Cómo aplicarlo en procesos de selección.” Montaner & Asociados. https://www.montaner.com/blog/e-recruiting-como-aplicarlo-en-procesos-de-seleccion/",
            "García Castro, P., Barrientos, M. G., Sosa, E. C. et al. (2016). “Proceso de reclutamiento y las redes sociales.” *RIDE Revista Iberoamericana para la Investigación y el Desarrollo Educativo,* 6(11), 5‑18.",
            "Maynes, O. (2021). “Smart Commerce 21: Diferencia entre e‑commerce y e‑business.” https://blog.smartcommerce21.com",
            "Nájera, M. (2022). *Retos y tendencias de Recursos Humanos 2023* [Video]. YouTube.",
            "Naranjo, S. (2021). “Tendencias 2021: hacia dónde va el e‑commerce y en qué invertir.” *Forbes México.*",
            "Nárdiz, J. & Masa, E. (2023). *Tendencias de Recursos Humanos 2023* [Video]. YouTube.",
            "Porret Gelabert, M. (2012). *Gestión de personas: Manual para la gestión del capital humano en las organizaciones.* Madrid: ESIC.",
            "Vallejo Cheves, L. (2016). *Gestión del talento humano.* Quito: ESIC.",
            "Werther, W. & Davis, K. (2008). *Administración de Recursos Humanos.* México: McGraw‑Hill.",
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
