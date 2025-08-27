/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LCP", // Licenciatura en Contaduría Pública
  courseId: "ARH", // Administración de Recursos Humanos
  id: "ARH-Mod1",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Administración de Recursos Humanos",
  title: "Módulo 1. Administración de Recursos Humanos",
  semestre: "Quinto",
  teacher: "Esp. Eduardo Antonio Alfaro Hernández",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Adquirir los conocimientos básicos e iniciales acerca de la Administración de Recursos Humanos.",
  competencies: [
    "Reflexionar sobre la definición e importancia de los recursos humanos en el ambiente organizacional.",
    "Reconocer los antecedentes y evolución del área (Relaciones Industriales → Administración de Personal → Recursos Humanos).",
    "Identificar y describir las cinco áreas funcionales de la ARH: dotación, desarrollo, remuneración, seguridad y salud, y relaciones laborales.",
    "Explicar funciones típicas del departamento de personal (remuneraciones, reclutamiento/contratación, capacitación, relaciones laborales, seguridad e higiene).",
    "Comprender y aplicar el proceso de reclutamiento y selección: planeación de vacantes, fuentes y métodos, preselección, entrevistas y decisión.",
    "Relacionar prácticas de ARH con el cumplimiento de la legislación laboral y con un entorno de trabajo seguro y equitativo.",
    "Distinguir y articular procesos de capacitación y desarrollo: análisis de necesidades, diseño, validación y evaluación de la formación.",
  ],

  /* ── Contenido temático (jerarquía recursiva) ─────────── */
  themes: [
    /* 0. Página Info (opcional) */
    {
      id: "X.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [
        {
          type: "paragraph",
          text: "Objetivo: Adquirir los conocimientos básicos e iniciales acerca de la Administración de Recursos Humanos.",
        },
        {
          type: "list",
          style: "bulleted",
          items: [
            "Competencia: Reflexionar sobre la definición e importancia de los Recursos Humanos en el ambiente organizacional.",
          ],
        },
      ],
    },

    /* 1. Unidad principal */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Administración de Recursos Humanos",
      content: [
        {
          type: "paragraph",
          text: "La Administración de Recursos Humanos (ARH) estudia y gestiona cómo se coordinan las personas para alcanzar los objetivos organizacionales. En su núcleo se encuentra la idea de que todo directivo logra resultados a través de otros, por lo que las prácticas relativas a dotación, desarrollo, remuneración, seguridad y relaciones laborales se vuelven críticas. La ARH articula procesos como el análisis de puestos, la planeación de personal, el reclutamiento, la selección, la evaluación del desempeño y la capacitación, además de asegurar ambientes seguros y relaciones laborales sanas. Estos procesos deben integrarse en un sistema coherente que conecte estrategia, estructura y cultura, para alinear las capacidades del talento con las metas del negocio, sosteniendo tanto la productividad como el bienestar. En suma, la ARH es el puente entre las necesidades de la organización y las aspiraciones de las personas, transformando políticas y procedimientos en comportamientos cotidianos que generan valor medible y sustentable.",
        }, // :contentReference[oaicite:0]{index=0}

        {
          type: "paragraph",
          text: "Históricamente, la función evolucionó desde las Relaciones Industriales —enfocadas en mediar conflictos capital-trabajo— hacia la Administración de Personal, y después a la concepción moderna de Recursos Humanos. Este tránsito refleja cambios económicos y sociales (industrialización, globalización, complejidad tecnológica) y un viraje conceptual: de ver a las personas como ‘recursos’ pasivos a reconocerlas como socias activas y portadoras de capital humano, inteligencia y creatividad. Hoy, el énfasis está en ‘administrar con las personas’, no ‘a las personas’. Este enfoque demanda estructuras flexibles, liderazgo ético, aprendizaje continuo y gestión por competencias. La ARH contemporánea es situacional y sistémica: responde al contexto, misión y estrategia de cada organización, y se nutre de la cultura interna y del entorno regulatorio. Por ello, sus prácticas deben diseñarse con sensibilidad organizacional, evidencias y mejora continua, evitando recetas únicas.",
        }, // :contentReference[oaicite:1]{index=1}

        {
          type: "paragraph",
          text: "Las áreas funcionales clásicas de la ARH —dotación, desarrollo, remuneración, seguridad y salud, y relaciones laborales— conforman un sistema integrado. Dotación comprende planeación de la fuerza de trabajo, análisis y descripción de puestos, y reclutamiento/selección; desarrollo incluye inducción, capacitación, planes de carrera y evaluación del desempeño; remuneración abarca sueldos, incentivos y prestaciones con criterios de equidad interna y competitividad externa; seguridad y salud promueven condiciones seguras y cumplimiento normativo; y relaciones laborales gestionan la comunicación, la participación y, cuando aplica, el vínculo sindicato-empresa. Gestionadas en conjunto, estas áreas elevan el compromiso, disminuyen la rotación y sus costos, mejoran la productividad y sostienen la propuesta de valor al colaborador. Su madurez se evidencia en políticas claras, métricas pertinentes (tiempo de cobertura, rotación, ausentismo, NPS del empleado) y procesos estandarizados con espacio para la adaptación local.",
        }, // :contentReference[oaicite:2]{index=2}

        {
          type: "paragraph",
          text: "El ciclo de talento inicia con el reclutamiento y la selección. Reclutar es atraer candidatos suficientes y calificados, desde fuentes internas (promoción y movilidad) y externas (universidades, bolsas, referidos), utilizando métodos adecuados (anuncios, redes, ferias) con una propuesta de valor clara. Seleccionar es decidir a quién contratar mediante evidencias: entrevistas estructuradas, pruebas psicométricas o técnicas, verificación de referencias y, cuando procede, exámenes médicos. La calidad del proceso depende de definir bien el perfil y de medir consistentemente las características clave para el desempeño. Tras la contratación, la socialización/inducción acelera la integración cultural y reduce la curva de aprendizaje. Finalmente, la evaluación del desempeño y la retroalimentación alimentan decisiones de desarrollo, compensación y sucesión, cerrando el bucle de mejora sobre personas y procesos.",
        }, // :contentReference[oaicite:3]{index=3}

        {
          type: "paragraph",
          text: "La capacitación es un pilar del desempeño sostenible y se apoya en cinco etapas: análisis de necesidades (brechas de competencias), diseño instruccional (objetivos, contenidos, métodos), validación (pilotos y ajustes), ejecución (entrega formativa) y evaluación/seguimiento (reacción, aprendizaje, transferencia y resultados). Un buen programa conecta objetivos del negocio con objetivos de aprendizaje y se adapta al nivel del público. En paralelo, gestionar la compensación (sueldos, incentivos y prestaciones) exige equidad y alineación a mercado; la seguridad y salud requieren prevención activa y cumplimiento; y las relaciones laborales, comunicación transparente y mecanismos de diálogo y disciplina justos. En conjunto, estas prácticas sostienen la propuesta de valor al empleado y refuerzan la competitividad al traducir la estrategia en comportamientos y resultados, con datos y evidencias que permitan aprender y ajustar el sistema de ARH de forma continua.",
        }, // :contentReference[oaicite:4]{index=4}

        {
          type: "accordion",
          header: "Mapa mental de la ARH (3 capas)",
          open: false,
          items: [
            {
              header: "Capa 1 — Núcleo y propósito",
              text: "Coordinar personas para cumplir objetivos; integrar análisis de puestos, dotación, desarrollo, compensación, seguridad/salud y relaciones laborales. De ‘recursos’ pasivos a socios activos con capital humano y aprendizaje continuo.",
            }, // :contentReference[oaicite:5]{index=5}
            {
              header: "Capa 2 — Procesos clave del ciclo de talento",
              text: "Planeación de personal → reclutamiento (fuentes/métodos) → selección (evidencias) → inducción/socialización → capacitación y desarrollo → evaluación del desempeño → compensación y carrera → clima y relaciones laborales.",
            }, // :contentReference[oaicite:6]{index=6}
            {
              header: "Capa 3 — Buenas prácticas y métricas",
              text: "Políticas claras y cumplimiento; seguridad y salud; equidad retributiva; indicadores (tiempo de cobertura, rotación, ausentismo, satisfacción); evaluación y seguimiento de la capacitación (reacción, aprendizaje, transferencia, resultados).",
            }, // :contentReference[oaicite:7]{index=7}
          ],
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        /* 1.1 Antecedentes */
        {
          id: "1.1",
          numbering: "1.1",
          title: "Antecedentes",
          content: [
            {
              type: "paragraph",
              text: "La Administración de Recursos Humanos (ARH) surge como respuesta al crecimiento y complejidad de las tareas organizacionales a inicios del siglo XX, en el contexto de la Revolución Industrial. En su etapa primigenia —bajo la denominación de Relaciones Industriales— actuó como instancia mediadora entre capital y trabajo para atenuar conflictos y armonizar objetivos individuales y corporativos. Hacia la década de 1950 el enfoque evolucionó a Administración de Personal, con un énfasis mayor en la observancia de la legislación laboral y en la atención de conflictos de intereses. Ya en los 60 y 70 se consolidó la noción de Recursos Humanos y, gradualmente, el tránsito desde la gestión “de” personas a la gestión “con” personas, reconociéndolas como agentes activos, dotados de iniciativa, creatividad y competencias, esenciales para la competitividad y sostenibilidad organizacional.",
            }, // :contentReference[oaicite:0]{index=0}
            {
              type: "paragraph",
              text: 'Ese cambio conceptual también supuso abandonar la mirada mecanicista de la era industrial —que equiparaba a las personas con recursos homogéneos— para asumir una visión sistémica, situada y contingente: la ARH depende de la cultura, la estructura y el estilo directivo, así como del entorno, el negocio, la misión y las capacidades de la organización. En el marco de la economía global y de alta competencia, la gestión efectiva con personas subraya su rol como capital humano —"alma, sangre, inteligencia y dinamismo" de la empresa— y resalta la necesidad de administrarlas como socias activas del negocio, no como simples insumos de producción.',
            }, // :contentReference[oaicite:1]{index=1}
            {
              type: "accordion",
              header: "Línea de tiempo — Evolución de la ARH",
              open: false,
              items: [
                {
                  header: "Relaciones Industriales (inicios s. XX)",
                  text: "Mediación capital-trabajo; foco en reducción de conflictos derivados de la industrialización.",
                }, // :contentReference[oaicite:2]{index=2}
                {
                  header: "Administración de Personal (≈1950s)",
                  text: "Cumplimiento de legislación laboral y atención de controversias de intereses.",
                }, // :contentReference[oaicite:3]{index=3}
                {
                  header: "Recursos Humanos (1960–1970s+)",
                  text: "Personas como capital clave; tránsito a administrar CON personas en entornos dinámicos.",
                }, // :contentReference[oaicite:4]{index=4}
              ],
            },
            {
              type: "paragraph",
              text: "En paralelo con la evolución conceptual, la práctica de la ARH se estructuró en áreas funcionales que articulan un sistema integrado: dotación (planear y asegurar el número y perfil de personas), desarrollo (inducción, capacitación y aprendizaje continuo), remuneración (sueldos, incentivos y prestaciones), seguridad y salud (ambientes seguros) y relaciones laborales. Estas funciones permiten alinear la contribución individual con los objetivos corporativos y, sobre todo, proveer mecanismos para atraer, retener y comprometer talento en el largo plazo.",
            }, // :contentReference[oaicite:5]{index=5}
            {
              type: "image",
              src: "https://imgv2-1-f.scribdassets.com/img/document/400128993/original/d05b891571/1?v=1",
              alt: "Evolución histórica de la ARH: de Relaciones Industriales a gestión con personas",
              caption:
                "Esquema de evolución y factores impulsores (industria, legislación, globalización).",
            },
            {
              type: "paragraph",
              text: "La literatura aplicada refuerza que la ARH no se limita al cumplimiento normativo; comprende prácticas y políticas que abarcan análisis de puestos, planeación de personal, reclutamiento y selección, capacitación, evaluación del desempeño, remuneración, incentivos, prestaciones, comunicación y disciplina, así como el aseguramiento de la seguridad y salud laboral. Integrar estas prácticas en procesos consistentes incrementa la confianza, reduce riesgos y sostiene el desempeño.",
            }, // :contentReference[oaicite:6]{index=6}
            {
              type: "accordion",
              header: "Claves de contexto y enfoque",
              open: false,
              items: [
                {
                  header: "Visión sistémica",
                  text: "La ARH es sensible a cultura, estructura, estilo de dirección y entorno competitivo; no hay recetas únicas.",
                }, // :contentReference[oaicite:7]{index=7}
                {
                  header: "Personas como capital",
                  text: "De ‘recurso’ a ‘socio’: creatividad, juicio y competencias como ventaja competitiva.",
                }, // :contentReference[oaicite:8]{index=8}
                {
                  header: "Integración funcional",
                  text: "Dotación, desarrollo, remuneración, seguridad y relaciones laborales conectadas con la estrategia.",
                }, // :contentReference[oaicite:9]{index=9}
              ],
            },
            {
              type: "paragraph",
              text: "Finalmente, en contextos latinoamericanos, el reclutamiento y la selección enfrentan retos particulares —desde mercados laborales con alta postulación hasta la identificación de fuentes y métodos más productivos—, lo que obliga a profesionalizar los procesos y a estrechar la colaboración entre RH y las áreas de línea. De la calidad de estas decisiones dependerá, en gran medida, la capacidad organizacional para ejecutar su estrategia y adaptarse con agilidad.",
            }, // :contentReference[oaicite:10]{index=10}
          ],
        },

        /* 1.2 Definición */
        {
          id: "1.2",
          numbering: "1.2",
          title: "Definición",
          content: [
            {
              type: "paragraph",
              text: "Hoy se conserva la denominación ‘Recursos Humanos’ por razones de marca e identidad organizacional, pero el concepto vigente supera la antigua lógica de recurso inerte: las personas son socios activos, proactivos y portadores de capital humano. Son la fuente de habilidades esenciales, juicio, creatividad y aprendizaje continuo que habilitan la competitividad y la sostenibilidad del negocio. En consecuencia, definir ARH implica reconocerla como el conjunto de políticas y procesos que coordinan la participación de individuos para alcanzar metas organizacionales, administrando con las personas —no sobre ellas— desde una perspectiva de colaboración y corresponsabilidad.",
            }, // :contentReference[oaicite:11]{index=11}
            {
              type: "paragraph",
              text: "La definición operativa incluye prácticas integradas: análisis de puestos, planeación de necesidades, reclutamiento y selección, inducción y capacitación, desarrollo de talento, administración de sueldos y salarios, incentivos y prestaciones, evaluación del desempeño, comunicación y disciplina, así como el cumplimiento de normas de seguridad y salud. En su conjunto, estas prácticas constituyen un sistema de gestión de personas que contribuye a la creación de valor y a la alineación entre estrategia, procesos y cultura.",
            }, // :contentReference[oaicite:12]{index=12}
            {
              type: "accordion",
              header: "Definición: clásica vs. contemporánea",
              open: false,
              items: [
                {
                  header: "Clásica (era industrial)",
                  text: "Personas tratadas como recursos estandarizados; énfasis en control y cumplimiento.",
                }, // :contentReference[oaicite:13]{index=13}
                {
                  header: "Contemporánea (era de la información)",
                  text: "Personas como socios que aportan capital humano; foco en aprendizaje, innovación y agilidad.",
                }, // :contentReference[oaicite:14]{index=14}
                {
                  header: "Implicación",
                  text: "La ARH pasa de ‘administrar a’ a ‘administrar con’ personas, integrándolas en decisiones y procesos clave.",
                }, // :contentReference[oaicite:15]{index=15}
              ],
            },
            {
              type: "paragraph",
              text: "La ARH es eminentemente contingente y situacional. Su diseño y despliegue dependen de la cultura, del estilo de liderazgo, de la estructura organizativa, del sector, de la estrategia competitiva y de las condiciones del entorno. No existe una única ‘mejor práctica’; lo esencial es articular políticas coherentes con la misión y visión, con métricas claras y ciclos de retroalimentación que permitan experimentar, aprender y ajustar.",
            }, // :contentReference[oaicite:16]{index=16}
            {
              type: "image",
              src: "https://cdn.aicad.es/asset/img/2/planificacin-de-los-recursos-humanos-02.jpg",
              alt: "Sistema de prácticas de ARH y su enlace con la estrategia",
              caption:
                "Mapa de prácticas (atraer-desarrollar-retener) vinculadas a objetivos y cultura.",
            },
            {
              type: "paragraph",
              text: "Desde la perspectiva de los procesos, la ARH incluye rutas estandarizadas para atraer y evaluar candidatos, incorporar y socializar colaboradores, y desarrollar competencias mediante programas de capacitación y planes de carrera. La consistencia documental —descripciones de puesto, perfiles, matrices de competencias, evaluaciones— sostiene la transparencia, facilita la toma de decisiones y fortalece la confianza de empleados y directivos.",
            }, // :contentReference[oaicite:17]{index=17}
            {
              type: "accordion",
              header: "Variables de diseño de la ARH",
              open: false,
              items: [
                {
                  header: "Cultura y liderazgo",
                  text: "Modelos de relación y toma de decisiones que condicionan la experiencia del colaborador.",
                }, // :contentReference[oaicite:18]{index=18}
                {
                  header: "Estrategia y entorno",
                  text: "Prioridades competitivas y restricciones regulatorias que definen políticas y métricas.",
                }, // :contentReference[oaicite:19]{index=19}
                {
                  header: "Capacidades internas",
                  text: "Procesos, tecnología y datos para escalar prácticas de talento con calidad.",
                }, // (síntesis coherente con el documento)
              ],
            },
            {
              type: "paragraph",
              text: "En suma, ‘Definición’ no se agota en una frase; es un marco de referencia que combina principios (personas como socios), prácticas (atraer-desarrollar-retener) y un enfoque de diseño (contingente y sistémico). Al operacionalizarla, RH sirve como puente entre estrategia y ejecución, habilitando que las personas consigan —y superen— los resultados que la organización persigue de manera ética, sostenible y medible.",
            },
          ],
        },

        /* 1.3 Departamento de personal: funciones */
        {
          id: "1.3",
          numbering: "1.3",
          title: "Departamento de personal: funciones",
          content: [
            {
              type: "paragraph",
              text: "El área de RH se organiza en puestos y responsabilidades especializadas que, en conjunto, soportan el ciclo de vida del empleado. Entre las funciones típicas destacan: remuneraciones (diseño de estructuras salariales y administración de prestaciones), reclutamiento y contratación (vinculación con el mercado de talento), capacitación (planeación y ejecución de programas formativos), relaciones laborales (asesoría en la relación sindicato-empresa) y seguridad e higiene (gestión de riesgos y cumplimiento en seguridad y salud). Estas funciones operan coordinadamente para asegurar la disponibilidad, desarrollo y bienestar del capital humano.",
            }, // :contentReference[oaicite:20]{index=20}
            {
              type: "paragraph",
              text: "Las prioridades del área tienden a variar con el tiempo. De acuerdo con reportes citados en el material, el reclutamiento, la selección y la colocación integran, con frecuencia, el núcleo de las tres prioridades principales de los gerentes de RH, sin perjuicio de la relevancia de la capacitación y el desarrollo, la administración de prestaciones, la remuneración y la gestión de las relaciones laborales. Este énfasis responde a dinámicas de mercado (escasez o abundancia de talento), a las necesidades estratégicas y a la evolución regulatoria.",
            }, // :contentReference[oaicite:21]{index=21}
            {
              type: "accordion",
              header: "Funciones clave del departamento",
              open: false,
              items: [
                {
                  header: "Remuneraciones",
                  text: "Estructuras salariales, prestaciones y equidad interna/externa.",
                }, // :contentReference[oaicite:22]{index=22}
                {
                  header: "Atracción y selección",
                  text: "Vinculación con fuentes internas/externas, procesos de evaluación y decisión.",
                }, // :contentReference[oaicite:23]{index=23}
                {
                  header: "Formación y relaciones laborales",
                  text: "Capacitación continua y administración de la relación colectiva.",
                }, // :contentReference[oaicite:24]{index=24}
              ],
            },
            {
              type: "paragraph",
              text: "Para cumplir su misión, el departamento de personal articula procesos robustos de contratación y socialización. El documento detalla el flujo de reclutamiento y selección (planeación de la fuerza laboral, generación de candidatos, solicitudes, técnicas de evaluación, entrevistas y decisión final), así como la relevancia de integrar al nuevo colaborador mediante inducción y capacitación inicial. La efectividad de estos procesos depende tanto del área de RH como de los jefes de línea, que aportan conocimiento técnico del puesto.",
            }, // :contentReference[oaicite:25]{index=25}
            {
              type: "image",
              src: "https://www.gestiopolis.com/wp-content/uploads/2012/02/reclutamiento-seleccion-e-induccion.jpg",
              alt: "Flujo de reclutamiento, selección e inducción",
              caption:
                "Del pronóstico de vacantes a la decisión de contratación y socialización.",
            },
            {
              type: "paragraph",
              text: "Asimismo, se describen las fuentes y métodos de reclutamiento (internas y externas) y la importancia de seleccionar canales productivos —universidades, asociaciones profesionales, anuncios en prensa o medios en línea— equilibrando costos y efectividad. En entornos con alta demanda de empleo, la criba y evaluación exigen instrumentos válidos y criterios claros para sostener decisiones justas y orientadas al desempeño.",
            }, // :contentReference[oaicite:26]{index=26}
            {
              type: "accordion",
              header: "Capacitación: del diagnóstico al seguimiento",
              open: false,
              items: [
                {
                  header: "5 etapas del proceso",
                  text: "Análisis de necesidades → diseño instruccional → validación piloto → implantación → evaluación/seguimiento.",
                }, // :contentReference[oaicite:27]{index=27}
                {
                  header: "Objetivos claros",
                  text: "Propósitos y metas medibles alineadas a resultados del puesto y de negocio.",
                }, // :contentReference[oaicite:28]{index=28}
                {
                  header: "Rol del supervisor",
                  text: "Acompaña, retroalimenta y transfiere aprendizaje al trabajo diario.",
                }, // :contentReference[oaicite:29]{index=29}
              ],
            },
            {
              type: "paragraph",
              text: "Finalmente, el área de RH sostiene la mejora continua mediante la evaluación de la capacitación (reacción, aprendizaje y desempeño) y la coordinación con la línea para cerrar brechas de habilidades. La documentación rigurosa —perfiles, registros de formación, evidencias de desempeño— fortalece la trazabilidad y la rendición de cuentas, además de facilitar auditorías internas y externas sobre prácticas laborales y de seguridad.",
            }, // :contentReference[oaicite:30]{index=30}
          ],
          subthemes: [
            /* 1.3.1 Remuneraciones y prestaciones */
            {
              id: "1.3.1",
              numbering: "1.3.1",
              title: "Remuneraciones y prestaciones",
              content: [
                {
                  type: "paragraph",
                  text: "La gestión de remuneraciones y prestaciones persigue alinear la retribución con la estrategia, garantizando equidad interna, competitividad externa y cumplimiento normativo. Implica diseñar estructuras salariales, políticas de incrementos, esquemas de incentivos y el portafolio de prestaciones (obligatorias y superiores a la ley). En organizaciones medianas y grandes suele existir la figura del gerente de remuneraciones, responsable de construir y administrar estos sistemas, así como de comunicar criterios de elegibilidad y gobernanza de comités de compensación. Un sistema sano de compensación debe ser transparente, predecible y estar documentado, pues funge como señal organizacional sobre lo que la empresa valora y busca reforzar en el desempeño. :contentReference[oaicite:0]{index=0}",
                },
                {
                  type: "paragraph",
                  text: "La equidad interna se apoya en el análisis y valuación de puestos: describir responsabilidades, conocimientos, habilidades y condiciones de trabajo para asignar grados o bandas salariales. Con ello se evita la arbitrariedad y se habilitan decisiones consistentes ante promociones o movimientos laterales. En paralelo, la competitividad externa exige contrastar los rangos salariales con estudios de mercado de talento comparables por tamaño, sector y región; a partir de ese benchmark se definen políticas de posicionamiento (p. ej., pagar en el percentil 60 para roles críticos). Un componente esencial es la administración anual de mérito, bonos y reconocimientos, que debería ligarse a metas claras y trazables en el sistema de evaluación del desempeño.",
                },

                /* Acordeón 1 (entre párrafos) */
                {
                  type: "accordion",
                  header: "Guía rápida de compensación total",
                  open: false,
                  items: [
                    {
                      header: "Estructura",
                      text: "Bandas salariales, criterios de progresión, topes y pisos; integraciones conforme a ley.",
                    },
                    {
                      header: "Variable",
                      text: "Bono por desempeño, comisión, incentivos de proyecto; reglas de elegibilidad y de pago.",
                    },
                    {
                      header: "Prestaciones",
                      text: "Seguridad social, vales, seguros, planes de retiro; diferenciadores por nivel/rol.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Las prestaciones complementan el salario con elementos de valor: seguros (vida, gastos médicos), planes de ahorro, comedor, transporte, apoyo educativo, horarios flexibles o esquemas híbridos. Su diseño debe equilibrar costo-beneficio y percepción de justicia, priorizando prestaciones apreciadas por la plantilla. La comunicación es crítica: un mismo paquete puede ser subvalorado si no se explica su monetización (valor anual aproximado, tasas negociadas, coberturas). El área de remuneraciones normalmente coordina con proveedores, aseguradoras y fiscalistas para asegurar cumplimiento y eficiencia administrativa. :contentReference[oaicite:1]{index=1}",
                },

                /* Acordeón 2 (entre párrafos) */
                {
                  type: "accordion",
                  header: "Errores comunes y cómo evitarlos",
                  open: false,
                  items: [
                    {
                      header: "Compresión salarial",
                      text: "Ajustar bandas y meritocracia; no ‘congelar’ sueldos por ciclos largos.",
                    },
                    {
                      header: "Variable sin métricas",
                      text: "Definir KPIs ex ante, pesos y umbrales; documentar fórmulas.",
                    },
                    {
                      header: "Prestaciones ‘invisibles’",
                      text: "Monetizar el valor anual y capacitar a líderes para comunicarlo.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La priorización de temas de compensación varía con el contexto, pero tiende a integrar remuneración, prestaciones y relaciones laborales como focos de gestión del área de RH. En encuestas de ejecutivos de RH se observan como prioridades recurrentes la atracción de talento, la formación y el paquete retributivo integral, reflejando que compensación y beneficios siguen siendo palancas decisivas de compromiso y retención. A nivel operativo, el gerente de remuneraciones administra también el cumplimiento de obligaciones de seguridad social y fiscales asociadas a la nómina, en coordinación con finanzas y relaciones laborales para prevenir contingencias. :contentReference[oaicite:2]{index=2}",
                },
              ],
            },

            /* 1.3.2 Reclutamiento y contratación */
            {
              id: "1.3.2",
              numbering: "1.3.2",
              title: "Reclutamiento y contratación",
              content: [
                {
                  type: "paragraph",
                  text: "El reclutamiento es el proceso de atraer, en tiempo y forma, a candidatos suficientes y calificados para cubrir vacantes; la contratación, la decisión de ‘sí/no’ sobre cada postulante con base en requisitos del puesto y evidencias objetivas. Un proceso eficaz inicia con la requisición autorizada y el análisis/actualización del perfil; sigue con la definición de fuentes internas y externas (movilidad, referidos, bolsas, universidades, redes) y la publicación de la vacante con mensaje de valor claro. En el frente de selección, se combinan filtros documentales, pruebas, verificación de antecedentes, entrevistas estructuradas por competencias y, de ser necesario, exámenes médicos, garantizando igualdad de oportunidades y trazabilidad. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "paragraph",
                  text: "Un flujo típico comprende: planificación de la fuerza laboral; reclutamiento interno/externo; solicitud/registro; entrevista inicial; aplicación de técnicas de selección (psicométricas, técnicas y situacionales); envío de finalistas a la línea; entrevistas de decisión; oferta y formalización. Cada etapa debe documentarse en papeles del proceso (expediente del candidato), registrando criterios y resultados para asegurar transparencia y defensa ante auditorías o inspecciones laborales. La coordinación estrecha con líderes de área es crucial: definen prioridades, validan competencias críticas y co-conducen entrevistas para alinear expectativas y acelerar la integración del personal nuevo. :contentReference[oaicite:4]{index=4}",
                },

                /* Acordeón 1 (entre párrafos) */
                {
                  type: "accordion",
                  header: "Fuentes y métodos de reclutamiento",
                  open: false,
                  items: [
                    {
                      header: "Internas",
                      text: "Promociones, movimientos laterales, bolsa interna; refuerzan la marca empleadora.",
                    },
                    {
                      header: "Externas",
                      text: "Universidades, asociaciones, redes profesionales, portales; ampliar diversidad de talento.",
                    },
                    {
                      header: "Métodos",
                      text: "Publicaciones, ferias, reclutamiento en línea y referidos con programa de incentivos.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La decisión de contratación se fundamenta en el análisis de puesto y la evaluación contra criterios definidos (educación, experiencia, competencias, potencial). Es útil establecer ‘mínimos’ excluyentes y escalas de valoración para asegurar consistencia. Tras la oferta y aceptación, la inducción/socialización acelera el desempeño: agenda de onboarding, objetivos de los 90 días y tutor acompañante. El área de RH conserva el expediente y verifica cumplimiento de obligaciones contractuales y de seguridad social, además de programar la evaluación inicial de desempeño para detectar necesidades de capacitación y consolidar el encaje cultural del nuevo colaborador. :contentReference[oaicite:5]{index=5}",
                },

                /* Acordeón 2 (entre párrafos) */
                {
                  type: "accordion",
                  header: "Buenas prácticas de entrevista",
                  open: false,
                  items: [
                    {
                      header: "Estructura",
                      text: "Preguntas conductuales ligadas a competencias; mismas preguntas para todos los candidatos.",
                    },
                    {
                      header: "Evidencia",
                      text: "Pedir ejemplos específicos (STAR), contrastar logros y cuantificar impactos.",
                    },
                    {
                      header: "Cierre",
                      text: "Explicar siguientes pasos y tiempos; documentar impresiones y acuerdos.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Entre los retos del proceso destacan: medir características ligadas al rendimiento, evaluar motivación, decidir quién debe tomar la decisión final y evitar sesgos. El reclutamiento eficaz maximiza el tamaño y la calidad de la terna sin inflar costos ni tiempos (‘time to fill’), mientras que la contratación responsable previene rotación temprana. En Latinoamérica, la alta volatilidad laboral y la competencia por perfiles técnicos exigen cultivar marca empleadora, relaciones con universidades y programas de referidos. Un reclutamiento bien orquestado impacta directamente la productividad y la cultura, por lo que requiere monitorear métricas como calidad de contratación y desempeño del nuevo ingreso. :contentReference[oaicite:6]{index=6}",
                },
              ],
            },

            /* 1.3.3 Capacitación y desarrollo */
            {
              id: "1.3.3",
              numbering: "1.3.3",
              title: "Capacitación y desarrollo",
              content: [
                {
                  type: "paragraph",
                  text: "La capacitación y el desarrollo son inversiones estratégicas para cerrar brechas de habilidades y sostener la ventaja competitiva. Un programa sólido inicia con objetivos claros enlazados a metas del negocio; sin esa brújula, el diseño instruccional pierde foco. Los objetivos se traducen en contenidos, métodos y evaluaciones, considerando el perfil de los participantes (conocimientos previos, experiencia, motivadores). El propósito no es solo ‘impartir cursos’, sino elevar el desempeño observable en el puesto (productividad, calidad, seguridad, servicio). Un portafolio efectivo combina formación inicial, entrenamiento en el trabajo, microlearning, coaching y rutas de carrera que habiliten movilidad y sucesión. :contentReference[oaicite:7]{index=7}",
                },
                {
                  type: "paragraph",
                  text: "El ciclo recomendado comprende cinco etapas: (1) análisis de necesidades para identificar ‘huecos’ de competencia frente a los requisitos del puesto; (2) diseño de la instrucción con objetivos, secuencia de contenidos, ejercicios y materiales alineados; (3) validación/piloto para ajustar; (4) impartición con facilitadores preparados; y (5) evaluación y seguimiento en cuatro niveles: reacción, aprendizaje, transferencia al puesto y resultados. Documentar cada etapa permite evidenciar eficacia y orientar mejoras. Este enfoque evita programas genéricos, favoreciendo intervenciones específicas y medibles, respaldadas por indicadores de negocio. :contentReference[oaicite:8]{index=8}",
                },

                /* Acordeón 1 (entre párrafos) */
                {
                  type: "accordion",
                  header: "Matriz de necesidades (del puesto a la acción)",
                  open: false,
                  items: [
                    {
                      header: "Competencia requerida",
                      text: "Conocimiento/habilidad/actitud crítica para el rol.",
                    },
                    {
                      header: "Brecha",
                      text: "Evidencia del ‘gap’ (evaluaciones, KPIs, auditorías).",
                    },
                    {
                      header: "Intervención",
                      text: "Curso, coaching, job rotation, e-learning; indicador objetivo de éxito.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "El diseño instruccional debe especificar con precisión objetivos conductuales, recursos, secuencia, ejemplos y prácticas, además de la integración de materiales (guías, ejercicios, casos). La validación previa con un grupo piloto reduce riesgos, mejora claridad y asegura pertinencia. Posteriormente, los líderes tienen un papel clave en la transferencia: asignan retos, dan retroalimentación y remueven obstáculos para aplicar lo aprendido. Sin esta ‘gerencia del aprendizaje’, muchos programas quedan en intenciones y no en cambios de conducta. :contentReference[oaicite:9]{index=9}",
                },

                /* Acordeón 2 (entre párrafos) */
                {
                  type: "accordion",
                  header: "Métodos y evaluación",
                  open: false,
                  items: [
                    {
                      header: "Métodos",
                      text: "Aula, e-learning, simulaciones, on-the-job, mentoring; mezclar según objetivo.",
                    },
                    {
                      header: "Evaluación",
                      text: "Reacción y aprendizaje (tests), desempeño (observación), resultados (KPIs).",
                    },
                    {
                      header: "Seguimiento",
                      text: "Planes de acción a 30-60-90 días; medición de mejoras con datos.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Para sostener la mejora continua, conviene institucionalizar rutas de desarrollo por familia de puestos y un catálogo vivo de cursos con fechas, facilitadores y prerequisitos. El área de RH debe apoyar con metodologías y herramientas, pero el ‘dueño’ del desarrollo es la línea: definir las capacidades críticas del área y co-liderar las academias internas. Finalmente, la evaluación de impacto debe retroalimentar presupuesto y prioridades: programas que elevan productividad, calidad o seguridad se escalan; los que no, se rediseñan o retiran. :contentReference[oaicite:10]{index=10}",
                },
              ],
            },

            /* 1.3.4 Relaciones laborales y seguridad e higiene */
            {
              id: "1.3.4",
              numbering: "1.3.4",
              title: "Relaciones laborales y seguridad e higiene",
              content: [
                {
                  type: "paragraph",
                  text: "Las relaciones laborales velan por un entorno de cumplimiento y diálogo social, administrando el vínculo empresa-personas y, cuando existe, la relación sindicato-empresa. El gerente corporativo de relaciones laborales asesora a la dirección en negociación colectiva, manejo de conflictos y aplicación de normatividad laboral; diseña protocolos disciplinarios y de quejas, y fomenta mecanismos de participación. La seguridad e higiene, por su parte, resguarda la integridad física y la salud en el trabajo mediante cumplimiento normativo, programas preventivos y cultura de autocuidado. Ambos frentes son indisociables: un entorno seguro y justo es la base del compromiso y la productividad. :contentReference[oaicite:11]{index=11}",
                },
                {
                  type: "paragraph",
                  text: "Seguridad e higiene operan con sistemas de gestión: identificación de peligros, evaluación de riesgos, controles operativos, capacitación, investigación de incidentes y seguimiento a acciones correctivas. El gerente de seguridad e higiene inspecciona condiciones, reporta accidentes y asegura el cumplimiento del plan de capacitación, manteniendo registros para autoridades y auditorías internas. Además, articula campañas de salud y bienestar (ergonomía, pausas activas, vigilancia de la salud). La participación de comisiones mixtas fortalece la cultura preventiva y reduce la siniestralidad, con beneficios directos en costos y clima laboral. :contentReference[oaicite:12]{index=12}",
                },

                /* Acordeón 1 (entre párrafos) */
                {
                  type: "accordion",
                  header: "Relación colectiva y disciplina",
                  open: false,
                  items: [
                    {
                      header: "Negociación",
                      text: "Calendario, mandato, propuestas y cierre; comunicación a la plantilla.",
                    },
                    {
                      header: "Disciplina",
                      text: "Faltas tipificadas, gradualidad, debido proceso y documentación.",
                    },
                    {
                      header: "Quejas",
                      text: "Canales confidenciales, investigación imparcial, medidas correctivas.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Una política de relaciones laborales eficaz combina cumplimiento, prevención y construcción de confianza: auditorías laborales periódicas, mapas de riesgo de conflicto, formación a jefaturas en trato digno y liderazgo, y métricas de clima/engagement para detectar señales tempranas. El frente sindical requiere transparencia de información y negociación de buena fe, priorizando acuerdos sostenibles sobre concesiones de corto plazo. En paralelo, se promueven prácticas de diálogo social no confrontativas, con comités de productividad, seguridad y cultura que involucren a representantes de trabajadores y de la dirección. :contentReference[oaicite:13]{index=13}",
                },

                /* Acordeón 2 (entre párrafos) */
                {
                  type: "accordion",
                  header: "Seguridad e higiene: protocolo esencial",
                  open: false,
                  items: [
                    {
                      header: "Antes",
                      text: "Identificar riesgos, capacitar, EPP, simulacros; señalización y mantenimiento.",
                    },
                    {
                      header: "Durante",
                      text: "Resguardar zona, primeros auxilios, activar cadena de comunicación.",
                    },
                    {
                      header: "Después",
                      text: "Investigar causa raíz, acciones correctivas, reporte y retroalimentación.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Finalmente, la función de relaciones laborales se integra con compensación, reclutamiento y capacitación para sostener un ‘sistema de personas’ coherente: mientras compensación y beneficios ayudan a atraer/retener, la formación desarrolla capacidades y la seguridad cuida la integridad. En conjunto, estas prácticas reducen rotación, litigiosidad y ausentismo, y elevan el desempeño. La documentación rigurosa (políticas, actas, evidencias de capacitación e investigaciones de incidentes) es el mejor escudo ante inspecciones y el principal insumo para la mejora continua. :contentReference[oaicite:14]{index=14}",
                },
              ],
            },
          ],
        },
        /* 1.4 Reclutamiento, selección, evaluación y desarrollo de personal */
        {
          id: "1.4",
          numbering: "1.4",
          title:
            "Reclutamiento, selección, evaluación y desarrollo de personal",
          content: [
            {
              type: "paragraph",
              text: "La gestión del talento inicia con un reclutamiento estratégico que garantice un flujo oportuno de candidatos idóneos, continúa con procesos de selección válidos y fiables, y se consolida con sistemas de evaluación y planes formativos que sostienen el desempeño a lo largo del tiempo. Reclutar no es publicar vacantes indiscriminadamente, sino definir el perfil con base en el análisis del puesto, seleccionar fuentes internas y externas costo-efectivas y diseñar mensajes de atracción coherentes con la propuesta de valor al empleado. La selección, por su parte, compara requisitos críticos del puesto con evidencias del candidato mediante entrevistas estructuradas, pruebas psicométricas y técnicas situacionales, evitando sesgos y cumpliendo la normativa laboral. La evaluación del desempeño traduce expectativas organizacionales en indicadores observables y medibles, habilitando decisiones de retroalimentación, compensación y desarrollo. Finalmente, la capacitación y el desarrollo cierran el ciclo al reducir brechas de competencias con objetivos claros, contenidos relevantes y evaluación de resultados, conectando la mejora individual con la estrategia del negocio. Esta visión integrada evita tratar a las personas como recursos pasivos y reconoce su papel como socios activos del desempeño organizacional.",
            },
            {
              type: "paragraph",
              text: "Un programa de reclutamiento eficaz comienza con la autorización y planeación de la vacante (título, área, fecha y requisitos), continúa con la elección de fuentes (promoción interna, bolsas universitarias, asociaciones profesionales, portales especializados) y culmina con métodos adecuados (anuncios en medios idóneos, ferias, referidos, campañas digitales). La clave está en equilibrar rapidez, calidad y costo, documentando indicadores como tiempo de cobertura, calidad de contratación y diversidad. En contextos con gran volumen de solicitantes, la preselección automatizada y los filtros estructurados ayudan a concentrar el esfuerzo humano en los perfiles con mayor probabilidad de éxito. Paralelamente, la marca empleadora debe reflejar la cultura y las oportunidades reales de crecimiento. Cada candidatura genera un expediente trazable que alimenta los papeles del proceso—desde el requisición del puesto hasta la tira de entrevistas—, asegurando transparencia y cumplimiento. El objetivo no es solo cubrir la vacante, sino aumentar la probabilidad de ajuste persona-puesto y persona-cultura, condición que reduce rotación y acelera la productividad.",
            },
            {
              type: "accordion",
              header: "Guía de referencia rápida (Reclutamiento y Selección)",
              open: false,
              items: [
                {
                  header: "1) Antes de publicar",
                  text: "Analiza el puesto, prioriza competencias críticas, define fuentes y presupuesto; prepara criterios de descarte y un cronograma de entrevistas.",
                },
                {
                  header: "2) Durante la atracción",
                  text: "Mensajes claros, EVP consistente, seguimiento a postulantes; instrumenta cribas objetivas (knock-out) y pruebas válidas.",
                },
                {
                  header: "3) Decisión y onboarding",
                  text: "Entrevistas estructuradas, panel diverso, verificación de referencias; plan de inducción y metas de 30-60-90 días.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "La selección rigurosa transforma datos dispersos en evidencias de idoneidad. Las entrevistas deben ser conductuales y situacionales, con preguntas ancladas en competencias y escalas de valoración previamente consensuadas. Las pruebas se eligen por su validez predictiva (p. ej., pruebas de habilidades cognitivas, muestras de trabajo, assessment centers cuando aplica) y se aplican con estándares éticos y de confidencialidad. La decisión final contrasta resultados con los requisitos indispensables, pondera riesgos (p. ej., rotación esperada, curva de aprendizaje) y documenta razones objetivas, lo que protege legalmente a la organización. Un buen expediente de selección incluye: requisición aprobada, descripción de puesto, matriz de evaluación, evidencias de pruebas, minutas de entrevistas y la carta oferta. Esta trazabilidad facilita auditorías internas, mejora la defensa ante quejas laborales y sienta bases para futuras promociones al conservar información de potencial.",
            },
            {
              type: "image",
              src: "https://website-assets.studocu.com/img/document_thumbnails/e8d2d8621997ac04eea3b4028138b3fd/thumb_1200_777.png",
              alt: "Flujo integrado: requisición → reclutamiento → selección → evaluación → capacitación → seguimiento",
            },
            {
              type: "paragraph",
              text: "La evaluación del desempeño convierte la estrategia en conducta observable. Debe alinear objetivos organizacionales con metas individuales SMART, incorporar indicadores cualitativos y cuantitativos y prever sesiones formales de retroalimentación. Modelos mixtos—como evaluación por objetivos y competencias—permiten capturar tanto el qué (resultados) como el cómo (comportamientos). Para robustecer la equidad, se recomiendan escalas ancladas en conducta, calibraciones cruzadas entre áreas y capacitación de evaluadores para mitigar sesgos (halo, recencia, severidad). Los resultados alimentan decisiones de compensación variable, planes de mejora y sucesión. Tan importante como medir es acompañar: un plan de desarrollo debe traducir hallazgos en acciones (coaching, proyectos stretch, cursos), con fechas, responsables y métricas de resultado (ej. mejora de KPIs en un trimestre).",
            },
            {
              type: "accordion",
              header: "Diseño instruccional de capacitación (5 etapas)",
              open: false,
              items: [
                {
                  header: "Diagnóstico",
                  text: "Detecta brechas de competencias (persona, puesto y organización) y prioriza según impacto en resultados.",
                },
                {
                  header: "Diseño & Ejecución",
                  text: "Objetivos claros, contenidos pertinentes, métodos activos (70-20-10), facilitadores competentes, logística y comunicación.",
                },
                {
                  header: "Evaluación & Seguimiento",
                  text: "Mide reacción, aprendizaje y transferencia; vincula mejoras a KPIs del área (productividad, calidad, seguridad).",
                },
              ],
            },
            {
              type: "paragraph",
              text: "La capacitación eficaz parte de un análisis de necesidades sólido (puesto, persona, organización), establece objetivos medibles y enlaza contenidos con problemas reales del trabajo. El diseño instruccional integra objetivos, métodos, secuencia y materiales (guías, ejercicios, casos), y se valida en piloto antes del despliegue. La transferencia al puesto requiere soporte de jefaturas, práctica deliberada y refuerzos (p. ej., comunidades de práctica). La evaluación no termina en encuestas de reacción: combinar pruebas antes/después con indicadores de desempeño permite estimar impacto. Cuando se trata de competencias críticas (seguridad, compliance), la periodicidad y la re-certificación son esenciales. Documentar todo el ciclo—diagnóstico, diseño, ejecución, evaluación—agrega valor, estandariza aprendizajes y acelera mejoras.",
            },
            {
              type: "paragraph",
              text: "Integrar reclutamiento, selección, evaluación y desarrollo en un sistema coherente evita fricciones y pérdidas de información. Un tablero de talento puede reunir métricas clave: tiempo de cobertura, calidad de contratación, % de objetivos cumplidos, brechas de habilidades, cobertura de capacitación y tasas de promoción interna. Con ello, ARH pasa de operativo a estratégico: anticipa capacidades futuras, reduce rotación no deseada, protege la seguridad y salud laboral y fortalece relaciones laborales. En síntesis, administrar con las personas—y no sobre las personas—implica reconocer su agencia, darles voz en el diseño del trabajo y ofrecer trayectorias de crecimiento significativas. Así, la organización expande su capacidad de adaptación en entornos volátiles y competitivos.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el cumplimiento legal y la ética profesional atraviesan todo el ciclo. Desde la publicación de vacantes hasta la gestión del expediente formativo, deben observarse principios de no discriminación, confidencialidad de datos, seguridad e higiene, y relaciones laborales respetuosas. La coordinación entre ARH y mandos de línea es crítica: los jefes inmediatos conocen el trabajo y sostienen la socialización del nuevo ingreso; ARH provee método, herramientas y control de calidad. Cuando ambas partes co-diseñan perfiles, entrevistas y planes de desarrollo, aumentan las probabilidades de éxito. La consistencia documental protege a la empresa y a las personas, y convierte cada proceso en una fuente de aprendizaje organizacional acumulativo.",
            }, // :contentReference[oaicite:0]{index=0}
          ],
          subthemes: [
            /* 1.4.1 Reclutamiento */
            {
              id: "1.4.1",
              numbering: "1.4.1",
              title: "Reclutamiento: fuentes y métodos",
              content: [
                {
                  type: "paragraph",
                  text: "El reclutamiento es el proceso de atraer personas calificadas, en el momento oportuno y en cantidad suficiente, a fin de integrarlas al proceso de selección. Parte de una requisición formal y del análisis del puesto para traducir funciones y competencias en criterios objetivos de búsqueda. Las fuentes internas (promoción y movilidad) fortalecen la carrera y retienen conocimiento; las externas (universidades, asociaciones, referidos, portales) amplían el alcance y la diversidad. La combinación depende del mercado laboral, presupuesto y urgencia. Métodos como anuncios segmentados, ferias de empleo, campañas en redes profesionales y programas de referidos maximizan costo-beneficio. Un reclutamiento profesional define indicadores (tiempo de cobertura, costo por vacante, calidad de contratación), respeta la legislación vigente y cuida la experiencia del candidato desde el primer contacto.",
                },
                {
                  type: "paragraph",
                  text: "Para elevar la efectividad, conviene mapear las fuentes más productivas por tipo de puesto (p. ej., técnicos vía institutos, perfiles senior vía headhunting, jóvenes vía prácticas). En contextos de gran afluencia, los filtros iniciales deben ser claros y éticos (knock-out por requisitos indispensables) y las pruebas previas (aptitudes, muestras de trabajo) ayudan a focalizar entrevistas. La marca empleadora—un relato creíble sobre cultura, propósito y desarrollo—incrementa la tasa de conversión y reduce la deserción durante el proceso. La trazabilidad del pipeline (ATS) ordena expedientes, facilita reportes y asegura cumplimiento. Un buen reclutamiento no es solo llenar vacantes: es construir un banco de talento que agilice futuras necesidades y mejore la calidad promedio de las contrataciones.",
                },
                {
                  type: "accordion",
                  header: "Checklist operativo de reclutamiento",
                  open: false,
                  items: [
                    {
                      header: "Planeación",
                      text: "Requisición aprobada, perfil validado con el jefe, fuentes y presupuesto definidos, cronograma y responsables.",
                    },
                    {
                      header: "Atracción",
                      text: "Publicación segmentada, seguimiento a candidatos, comunicación clara de etapas y tiempos, respeto a la privacidad.",
                    },
                    {
                      header: "Medición",
                      text: "KPIs: tiempo-cobertura, costo/vacante, % ofertas aceptadas, % éxito en período de prueba.",
                    },
                  ],
                },
                {
                  type: "image",
                  src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpq4wSUix9lmrG-dAFZS0Zhh-nw-fzLgystW4lkUQ_u4X9OrHyoVED1VCQqHIU5s4KTWjO4I8imeHRIFo-Oxaey5z9kkg5elYYN0afObnpJBOEs95uYuhargdJ6echDAEsITCDzxvy_8QS/s1600/2.png",
                  alt: "Mapa de fuentes de reclutamiento por tipo de puesto",
                },
                {
                  type: "paragraph",
                  text: "La relación costo-beneficio guía la mezcla de fuentes y métodos: algunos canales son más baratos pero menos precisos; otros son costosos pero con mayor ajuste cultural. La clave es experimentar, medir y ajustar. En mercados latinoamericanos con alta oferta, conviene enfatizar cribas objetivas y comunicación empática; en nichos escasos, construir comunidades de talento, alianzas académicas y propuestas de valor diferenciadas. Documentar cada etapa—requisición, publicación, filtros, entrevistas—agrega transparencia y permite auditorías internas, protegiendo a la organización y a las personas.",
                }, // :contentReference[oaicite:1]{index=1}
              ],
            },

            /* 1.4.2 Selección */
            {
              id: "1.4.2",
              numbering: "1.4.2",
              title: "Selección: técnicas e integración",
              content: [
                {
                  type: "paragraph",
                  text: "La selección compara el perfil del puesto con la evidencia del candidato. Comienza con una revisión curricular estructurada y continúa con entrevistas estandarizadas basadas en competencias (STAR), pruebas de habilidades y, cuando añade valor, muestras de trabajo o assessment centers. La validez y confiabilidad de cada técnica deben considerarse para evitar decisiones basadas en impresiones. La integración de resultados en una matriz ponderada reduce sesgos y facilita la decisión colegiada. La verificación de referencias y, si la legislación lo permite, exámenes médicos complementan el juicio profesional. Todo se documenta en un expediente que justifica la decisión y soporta la oferta.",
                },
                {
                  type: "paragraph",
                  text: "Las entrevistas efectivas usan preguntas ancladas en conductas pasadas y escenarios hipotéticos relevantes, con escalas de calificación claras. La participación de un panel diverso mejora la calidad del juicio y disminuye la probabilidad de sesgos. Cuando hay candidatos internos y externos, deben aplicarse criterios consistentes y comunicarse retroalimentaciones útiles a quien no fue seleccionado, preservando la relación para futuras oportunidades. La decisión final equilibra ajuste técnico, cultural y potencial de desarrollo, sin perder de vista el costo de oportunidad y la urgencia operativa.",
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas de entrevistas",
                  open: false,
                  items: [
                    {
                      header: "Antes",
                      text: "Revisa el perfil y el CV, prepara preguntas por competencia, define indicadores y roles del panel.",
                    },
                    {
                      header: "Durante",
                      text: "Escucha activa, mismas preguntas núcleo para todos, notas objetivas, tiempo suficiente por entrevista.",
                    },
                    {
                      header: "Después",
                      text: "Rúbrica común, calibración entre evaluadores, decisión documentada y comunicación respetuosa.",
                    },
                  ],
                },
                {
                  type: "image",
                  src: "https://www.bizneo.com/blog/wp-content/uploads/2018/09/Seleccion-de-personal.jpg",
                  alt: "Matriz de decisión con ponderadores por competencia y evidencia",
                },
                {
                  type: "paragraph",
                  text: "Integrar selección con onboarding acorta la curva de aprendizaje: agenda de inducción, metas de 30-60-90 días y mentor asignado. El éxito se mide por permanencia, desempeño inicial y satisfacción del jefe y del nuevo ingreso. La selección, así, deja de ser un evento para convertirse en un proceso de acoplamiento productivo.",
                }, // :contentReference[oaicite:2]{index=2}
              ],
            },

            /* 1.4.3 Evaluación */
            {
              id: "1.4.3",
              numbering: "1.4.3",
              title: "Evaluación del desempeño",
              content: [
                {
                  type: "paragraph",
                  text: "La evaluación eficaz alinea estrategia, objetivos de área y metas individuales, y combina métricas de resultados con conductas clave. Modelos frecuentes: gestión por objetivos, escalas ancladas en conducta, 180°/360° y OKR. La periodicidad mínima es anual con revisiones intermedias. Para reducir sesgos, se entrena a evaluadores y se realizan calibraciones interáreas. La evaluación no solo clasifica: habilita conversaciones de mejora, decisiones de compensación variable y planes de desarrollo personalizados.",
                },
                {
                  type: "paragraph",
                  text: "La retroalimentación debe ser específica, basada en hechos y orientada al futuro. El plan de mejora (PIP) define metas, apoyos y plazos; el desarrollo de alto potencial, por su parte, prioriza proyectos retadores y formación estratégica. Los resultados agregados alimentan tableros de talento y sucesión, conectando la gestión de desempeño con la planeación de la fuerza laboral.",
                },
                {
                  type: "accordion",
                  header: "Ciclo de evaluación en 5 pasos",
                  open: false,
                  items: [
                    {
                      header: "1) Alineación",
                      text: "Traduce la estrategia en objetivos SMART por nivel y rol.",
                    },
                    {
                      header: "2) Seguimiento",
                      text: "Check-ins trimestrales, coaching y ajustes responsables.",
                    },
                    {
                      header: "3-5) Evaluar, calibrar y decidir",
                      text: "Calificación, calibración entre pares y decisiones de reconocimiento/desarrollo.",
                    },
                  ],
                },
                {
                  type: "image",
                  src: "https://info.corponet.com.mx/hubfs/evaluaci%C3%B3n%20de%20desempe%C3%B1o%20constante%20para%20los%20empleados_imgdest.png",
                  alt: "Esquema del ciclo de evaluación y su vínculo con compensación y aprendizaje",
                },
                {
                  type: "paragraph",
                  text: "El sistema debe ser simple, justo y útil. Si los formulismos superan al valor percibido, el proceso pierde credibilidad. Iterar con la retroalimentación de usuarios mejora diseño y adopción.",
                }, // :contentReference[oaicite:3]{index=3}
              ],
            },

            /* 1.4.4 Capacitación y desarrollo */
            {
              id: "1.4.4",
              numbering: "1.4.4",
              title: "Capacitación y desarrollo",
              content: [
                {
                  type: "paragraph",
                  text: "Capacitar es cerrar brechas de competencias con propósito. Comienza con un diagnóstico multifuente (estrategia, desempeño, seguridad, compliance), prioriza por impacto y diseña experiencias que combinen práctica y reflexión (70-20-10). Objetivos claros, métodos activos y evaluación en varios niveles aseguran aprendizaje y transferencia. La formación técnica convive con el desarrollo de habilidades blandas (comunicación, liderazgo, trabajo en equipo), esenciales para la efectividad operativa y la salud organizacional.",
                },
                {
                  type: "paragraph",
                  text: "El diseño instruccional define objetivos conductuales, contenidos, secuencia, materiales y evaluación. La validación piloto ajusta tiempos y actividades. Para maximizar transferencia al puesto, se involucra al jefe en metas y seguimiento, se ofrecen recursos on-the-job y se crean comunidades de práctica. La medición va más allá de la reacción: pruebas antes/después y KPIs del área permiten estimar impacto; en seguridad y normatividad, se establecen re-certificaciones periódicas.",
                },
                {
                  type: "accordion",
                  header: "Mapa de desarrollo",
                  open: false,
                  items: [
                    {
                      header: "Trayectorias",
                      text: "Rutas por familia de puestos con hitos de habilidad y certificaciones.",
                    },
                    {
                      header: "Herramientas",
                      text: "Mentoría, coaching, job rotation, proyectos especiales y micro-learning.",
                    },
                    {
                      header: "Métricas",
                      text: "Cobertura, horas/empleado, % objetivos de aprendizaje cumplidos e impacto en KPIs.",
                    },
                  ],
                },
                {
                  type: "image",
                  src: "https://www.gob.mx/cms/uploads/image/file/469900/blog_CAPACITACI_N.png",
                  alt: "Ruta de aprendizaje por rol con módulos técnicos y de habilidades blandas",
                },
                {
                  type: "paragraph",
                  text: "Un portafolio de desarrollo bien gobernado enlaza diagnóstico, ejecución y medición con un comité de talento que prioriza inversiones. Documentar el ciclo completo profesionaliza la función y asegura cumplimiento ante auditorías internas o externas.",
                }, // :contentReference[oaicite:4]{index=4}
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
          href: "https://youtu.be/s_oQrRZ3ndw", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Administración de RECURSOS HUMANOS y su IMPORTANCIA en la ORGANIZACIÓN — https://youtu.be/s_oQrRZ3ndw",
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
            "Chiavenato, I. (2011). Administración de Recursos Humanos. McGraw Hill Educación.",
            "Dessler, G. & Varela (2004). Administración de Recursos Humanos. Enfoque Latinoamericano. Pearson Educación.",
            "Gómez-Mejía, L. (2008). Gestión de Recursos Humanos. Pearson Educación.",
            "Puchol, L. (2005). Dirección y Gestión de Recursos Humanos. Díaz de Santos.",
            "Wayne, R. (2010). Administración de Recursos Humanos. Pearson Educación.",
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
