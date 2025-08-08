/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAIE", // Maestría en Gestión y Administración de Instituciones Educativas
  courseId: "AIE", // Administración de Instituciones Educativas
  id: "modulo4",

  /* ── Datos visibles ─────────────────────────── */
  courseName:
    "Maestría en Gestión y Administración de Instituciones Educativas",
  title: "Módulo 4. Dimensión organizativa-operacional", // :contentReference[oaicite:0]{index=0}
  semestre: "1.er Semestre", // :contentReference[oaicite:1]{index=1}
  teacher: "M.E. Aldo Ariel Cárdenas García", // :contentReference[oaicite:2]{index=2}

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Hablar de la organización y el control interno de las instituciones educativas para culminar las fases del proceso administrativo, analizando la división de actividades y el mejoramiento de éstas para garantizar su funcionamiento eficiente.", // :contentReference[oaicite:3]{index=3}

  competencies: [
    "Conocer, comprender y analizar la forma de organizar una institución educativa mediante organigramas que establezcan jerarquías, autoridad y responsabilidad en cada puesto.", // :contentReference[oaicite:4]{index=4}
    "Aplicar mecanismos de control interno que detecten fallas y permitan cumplir de manera eficiente el trabajo institucional.", // :contentReference[oaicite:5]{index=5}
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
      numbering: "Unidad 4",
      title: "Dimensión organizativa-operacional", // :contentReference[oaicite:0]{index=0}
      content: [
        /* Párrafo 1 (~200 palabras) */
        {
          type: "paragraph",
          text: "La dimensión organizativa-operacional culmina el ciclo administrativo al poner en acción la voluntad estratégica de la institución educativa. Tras haber definido misión, programas y presupuestos, esta fase se concentra en diseñar la arquitectura interna que hará posible el servicio académico con estándares de eficiencia y transparencia. El material subraya que ello implica precisar políticas rectoras, delimitar jerarquías, asignar responsabilidades y establecer sistemas de control que garanticen la correcta interacción entre personas, procesos y recursos . En otras palabras, la organización y el control operan como engranajes gemelos: la primera estructura el trabajo; el segundo verifica que se cumpla conforme a los propósitos y normas vigentes. Sin esta dupla, la planeación se desvanece en buenas intenciones y el financiamiento corre el riesgo de ser mal utilizado.",
        },

        /* Párrafo 2 (~200 palabras) */
        {
          type: "paragraph",
          text: "Organizar supone traducir la filosofía institucional en un organigrama coherente que alinee autoridad, comunicación y flujo de tareas. El documento destaca que una estructura eficaz parte de la naturaleza del servicio educativo —nivel, modalidad, población atendida— y equilibra centralización con autonomía operativa: lo estratégico permanece en la alta dirección, mientras que las decisiones pedagógicas se acercan al aula. Asimismo, recomienda acompañar el organigrama de un manual de funciones que describa perfiles, procesos y líneas de reporte para evitar solapamientos y lagunas de responsabilidad. Este mapa funcional se convierte en referente para la inducción de nuevo personal, la evaluación de desempeño y la redistribución de cargas cuando la matrícula crece o se incorporan programas innovadores .",
        },

        /* Acordeón: tres niveles jerárquicos */
        {
          type: "accordion",
          header: "Nivel 1 — Políticas rectoras",
          open: false,
          text: "Definen principios y criterios que orientan toda decisión operativa: calidad académica, transparencia financiera, responsabilidad social.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Estructura organizativa",
          open: false,
          text: "Organigrama, manuales de puesto, flujos de comunicación y descripción de procesos clave.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Sistemas de control interno",
          open: false,
          text: "Indicadores, auditorías, reportes y retroalimentación que permiten corregir desvíos y mejorar continuamente.",
        },

        /* Párrafo 3 (~200 palabras) */
        {
          type: "paragraph",
          text: "En cuanto al control, el texto distingue dos ámbitos: el **control interno preventivo**, que se materializa en códigos de conducta, segregación de funciones y formularios normalizados; y el **control correctivo**, que analiza desviaciones a través de auditorías académicas, financieras y de infraestructura . Se propone un tablero de mando integrado con indicadores clave (aprovechamiento escolar, índice de morosidad, rotación de personal, cumplimiento de mantenimiento) para monitorear la salud institucional en tiempo real. Cada indicador se asocia a un umbral de alerta y a un responsable de acción correctiva, de modo que la información no quede en reportes estáticos, sino que active decisiones oportunas y comunicadas a toda la comunidad educativa.",
        },

        /* Párrafo 4 (~200 palabras) */
        {
          type: "paragraph",
          text: "La dimensión operativa también contempla la gestión del cambio. Toda modificación —nueva política, reingeniería de procesos, actualización tecnológica— debe pasar por un protocolo que incluya diagnóstico de impacto, plan de capacitación, calendario de implementación y métricas de éxito. El módulo enfatiza que la resistencia al cambio disminuye cuando la comunicación es clara, los beneficios se documentan y los actores participan en las decisiones que les afectan . Además, se aconseja pilotar innovaciones en áreas pequeñas antes de escalarlas, aprovechando los aprendizajes para ajustar procedimientos y reducir costos de adaptación.",
        },

        /* Párrafo 5 (~200 palabras) */
        {
          type: "paragraph",
          text: "Finalmente, la unidad destaca la interdependencia entre los elementos organizativos y el ambiente externo. La normativa educativa, las tendencias demográficas y los avances tecnológicos demandan estructuras ágiles capaces de autoevaluarse y reinventarse. Así, el control interno se complementa con mecanismos de **accountability** hacia la sociedad: informes de resultados, certificaciones de calidad y participación en rankings académicos. Estas prácticas fortalecen la reputación institucional, atraen recursos y consolidan alianzas estratégicas. En síntesis, la dimensión organizativa-operacional convierte la visión educativa en un sistema vivo, regulado y en evolución constante, asegurando que cada recurso —humano, material o financiero— se traduzca en oportunidades de aprendizaje significativo para la comunidad que la escuela sirve .",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        /* ──────────────── 4.1 ───────────────── */
        {
          id: "1.1",
          numbering: "4.1",
          title: "Política general de la institución educativa",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "En la administración escolar, la política general funge como carta de navegación: enuncia principios y criterios que guían toda decisión operativa y aseguran coherencia con la misión. El documento explica que estas directrices se articulan en tres ejes—educativo, administrativo y social—y constituyen el marco de referencia para diseñar reglamentos, manuales y programas de mejora. Entre los principios destacan el de la misión (toda actividad debe aportar al fin formativo), la especialización (asignar funciones a personal competente), la jerarquía (definir niveles de autoridad) y la paridad autoridad-responsabilidad (cada puesto detenta autoridad proporcional a su obligación) :contentReference[oaicite:0]{index=0}. Gracias a esta arquitectura normativa, la institución evita la burocracia improductiva, asigna recursos donde generan valor y mantiene transparencia ante la comunidad. Sin políticas claras, la operación degenera en acciones aisladas, aumento de costos y pérdida de confianza.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Principios rectores de la política",
              open: false,
              text: "Misión • Especialización • Jerarquía • Paridad autoridad-responsabilidad • Unidad de mando • Difusión",
            },

            /* Imagen representativa */
            {
              type: "image",
              src: "https://www.iberdrola.com/documents/20125/41878/politica-gestion-personas-746x419.jpg/12b7c7a0-e88e-cfbb-5e01-ab7c4aed1a69?t=1737550289893",
              caption:
                "Una política clara alinea personas, procesos y recursos.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "La implementación de la política general sigue un proceso en cascada: 1) formulación participativa por el consejo directivo; 2) difusión mediante manuales, talleres y plataformas internas; 3) aplicación a través de reglamentos y procedimientos; y 4) evaluación anual basada en indicadores de eficacia y satisfacción. El PDF remarca que la eficacia depende de la **difusión**: todo colaborador debe conocer sus funciones y límites mediante documentos accesibles y capacitación continua :contentReference[oaicite:1]{index=1}. Además, la política debe revisarse cuando cambian la normativa oficial, la matrícula o la infraestructura tecnológica, manteniendo la continuidad sin caer en rigidez. Así, la política se convierte en instrumento vivo que equilibra estabilidad institucional y adaptación al entorno.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Fases de gestión de la política",
              open: false,
              text: "Formulación • Difusión • Ejecución • Evaluación • Retroalimentación continua",
            },
          ],

          /* → Sub-subtema 4.1.1 */
          subthemes: [
            {
              id: "1.1.1",
              numbering: "4.1.1",
              title: "Política educativa, administrativa y social",
              content: [
                /* Párrafo 1 */
                {
                  type: "paragraph",
                  text: "La política educativa se centra en garantizar pertinencia curricular, equidad y calidad pedagógica; fija criterios de selección docente, diseño de programas y evaluación del aprendizaje. La política administrativa regula procesos de finanzas, recursos humanos y materiales, buscando eficiencia y transparencia. Por su parte, la política social vincula a la institución con la comunidad: becas, responsabilidad ambiental y programas de servicio. El texto señala que estos tres ámbitos convergen en la propuesta de valor de la escuela: formar ciudadanos competentes en un entorno sostenible y financieramente sano :contentReference[oaicite:2]{index=2}.",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Ejemplos de cada ámbito",
                  open: false,
                  text: "Educativa: criterios de evaluación formativa • Administrativa: manual de compras • Social: programa de becas comunitarias",
                },

                /* Imagen mínima */
                {
                  type: "image",
                  src: "https://www.webyempresas.com/wp-content/uploads/2024/09/Tipos-de-Dimensiones-Organizacionales.jpg",
                  caption:
                    "Tres dimensiones que sostienen la misión institucional.",
                },

                /* Párrafo 2 */
                {
                  type: "paragraph",
                  text: "La coherencia entre políticas se logra al alinear objetivos y establecer comités interdepartamentales que supervisen su cumplimiento. Por ejemplo, al aprobar un nuevo laboratorio, la política educativa justifica la pertinencia académica; la administrativa asegura el financiamiento y la licitación; y la social verifica accesibilidad y cuidado ambiental. La evaluación de impacto integra indicadores pedagógicos, financieros y de servicio comunitario para retroalimentar ajustes, garantizando que la política siga siendo un instrumento de mejora y no un documento estático :contentReference[oaicite:3]{index=3}.",
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Indicadores transversales",
                  open: false,
                  text: "Tasa de aprobación • Ejecución presupuestal • Horas de servicio comunitario por alumno",
                },
              ],
            },
          ],
        },

        /* ──────────────── 4.2 ───────────────── */
        {
          id: "1.2",
          numbering: "4.2",
          title: "Los directivos y sus funciones",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "El PDF define al directivo escolar como líder pedagógico y gestor estratégico cuya misión es alinear la visión institucional con la operación diaria. Entre sus funciones clave se encuentran: planificar, organizar, dirigir y controlar; representar legalmente a la escuela; gestionar recursos; y fomentar el desarrollo profesional de su equipo. El texto subraya la importancia del **liderazgo situacional**: el directivo ajusta su estilo—autocrático, participativo o delegador—según el nivel de madurez del personal y la complejidad de las tareas :contentReference[oaicite:4]{index=4}. Además, debe cultivar habilidades de comunicación asertiva y negociación para construir alianzas con autoridades, familias y comunidad.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Funciones esenciales del directivo",
              open: false,
              text: "Planear • Organizar • Dirigir • Controlar • Representar",
            },

            /* Imagen entre párrafos */
            {
              type: "image",
              src: "https://elartedegestionarproyectos.com/wp-content/uploads/2024/05/liderazgo_ejemplo.jpg",
              caption: "Liderar es inspirar, coordinar y rendir cuentas.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "Para ejecutar estas funciones con eficacia, el directivo cuenta con tres herramientas: organigrama, manuales y tablero de indicadores. El organigrama clarifica jerarquías y flujos de comunicación; los manuales describen procesos y responsabilidades; el tablero monitorea KPIs como aprovechamiento escolar, rotación de personal y eficiencia presupuestal. El documento advierte que la labor directiva se vuelve ineficaz si no se delegan tareas: el director se concentra en planeación y supervisión estratégica mientras los jefes de departamento gestionan la operación táctica. Asimismo, la retroalimentación oportuna al personal—basada en observación de clases, análisis de resultados y clima organizacional—fortalece la mejora continua. Cuando estas prácticas se institucionalizan, la escuela se convierte en comunidad de aprendizaje que innova, aprende de sus errores y rinde cuentas con transparencia :contentReference[oaicite:5]{index=5}.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Indicadores para evaluar la gestión directiva",
              open: false,
              text: "Aprovechamiento escolar • Ejecución presupuestal • Clima organizacional • Satisfacción de la comunidad",
            },
          ],
        },

        /* ──────────────── 4.3 ───────────────── */
        {
          id: "1.3",
          numbering: "4.3",
          title: "Departamentos administrativos",
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "Los departamentos administrativos constituyen la columna vertebral operativa de la institución educativa porque agrupan y especializan funciones que, de atenderse aisladamente, generarían duplicidad, costos innecesarios y pérdida de control. El módulo sostiene que la departamentalización parte de la división racional del trabajo: describir procesos, agrupar actividades afines y jerarquizar puestos según autoridad y responsabilidad. Así surgen áreas como control escolar, recursos financieros, recursos materiales, servicios psicopedagógicos y titulación, cada una con métricas específicas y personal calificado para tomar decisiones tácticas :contentReference[oaicite:0]{index=0}. La correcta configuración de estos departamentos permite a la dirección concentrarse en la planeación estratégica mientras delega la operación a especialistas que conocen normas, tecnologías y mejores prácticas de su ámbito.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Criterios de departamentalización",
              open: false,
              text: "Afinidad funcional • Economías de escala • Claridad de autoridad • Facilitación del control interno",
            },

            {
              type: "image",
              src: "https://0901.static.prezi.com/preview/v2/jql5rmjuis3ml2ag4n67poloox6jc3sachvcdoaizecfr3dnitcq_3_0.png",
              caption:
                "Los departamentos se relacionan como engranajes de un reloj: precisión y coordinación.",
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "La eficiencia de los departamentos depende de manuales actualizados que especifiquen procesos, indicadores y flujos de comunicación. El PDF subraya que dichos manuales —organizacionales, departamentales y de procedimientos— evitan la ‘fuga de responsabilidad’, estandarizan la atención a estudiantes y aceleran la inducción de nuevo personal :contentReference[oaicite:1]{index=1}. Adicionalmente, la departamentalización facilita el control concurrente: cada jefe analiza desviaciones de su área, propone correctivos y reporta a dirección, creando un ciclo de mejora continua. Cuando las áreas operan como células interdependientes—no como silos—la institución incrementa productividad, reduce tiempos de respuesta y optimiza recursos, alineándose con el principio de coordinación descrito en los principios de organización.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Indicadores departamentales sugeridos",
              open: false,
              text: "Control escolar: exactitud de calificaciones y asistencias • Financiero: margen operativo • Materiales: índice de rotación de inventario • Psico-pedagógico: casos atendidos/resueltos",
            },
          ],

          /* → Sub-subtemas */
          subthemes: [
            /* ─────────── 4.3.1 ─────────── */
            {
              id: "1.3.1",
              numbering: "4.3.1",
              title: "Sistema de administración escolar",
              content: [
                /* Párrafo 1 */
                {
                  type: "paragraph",
                  text: "El sistema de administración escolar (SAE) integra plataformas y procedimientos que gestionan matrícula, historiales académicos, horarios, pagos y reportes regulatorios. El módulo explica que un SAE efectivo reduce errores manuales, mejora la trazabilidad de la información y libera tiempo docente para la labor pedagógica. Entre sus funciones básicas se incluyen la inscripción en línea, generación automática de kardex, control de becas y emisión de boletas oficiales compatibles con la SEP. Para asegurar la calidad de los datos, se establece un flujo de validación: captura por el área de servicios escolares, verificación por control escolar y auditoría aleatoria por la dirección académica :contentReference[oaicite:2]{index=2}.",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Módulos críticos del SAE",
                  open: false,
                  text: "Matrícula • Evaluación • Cobranza • Reportes SEP • Análisis de deserción",
                },

                {
                  type: "image",
                  src: "https://administracionescolar.mx/wp-content/uploads/2023/03/6911306-scaled.jpg",
                  caption:
                    "El SAE consolida datos para decisiones basadas en evidencia.",
                },

                /* Párrafo 2 */
                {
                  type: "paragraph",
                  text: "Para seleccionar un SAE se recomienda una matriz de decisión que evalúe interoperabilidad (API con contabilidad y LMS), escalabilidad en la nube, soporte técnico local y cumplimiento de la Ley Federal de Protección de Datos Personales. El texto enfatiza la capacitación de usuarios finales y la asignación de roles con privilegios diferenciados para evitar violaciones de seguridad. Un tablero de indicadores dentro del propio sistema permite detectar en tiempo real alumnos en riesgo, tendencias de recaudación y eficiencia en la asignación de aulas. De esta forma, el SAE se convierte en herramienta estratégica y no solo en base de datos transaccional :contentReference[oaicite:3]{index=3}.",
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Buenas prácticas de implementación",
                  open: false,
                  text: "Capacitación por perfiles • Respaldo diario en nube • Roles y permisos claros • Soporte 24/7",
                },
              ],
            },

            /* ─────────── 4.3.2 ─────────── */
            {
              id: "1.3.2",
              numbering: "4.3.2",
              title: "Servicios escolares",
              content: [
                /* Párrafo 1 */
                {
                  type: "paragraph",
                  text: "El departamento de servicios escolares es la “ventanilla única” para alumnos y docentes: recibe solicitudes, emite constancias, gestiona bajas, libera exámenes extraordinarios y coordina horarios. El PDF señala que su eficacia se mide por el tiempo de respuesta y el índice de satisfacción estudiantil. Para lograrlo, se implantan procesos estandarizados con indicadores de cumplimiento (SLA): constancias en ≤ 48 h, reimpresión de credenciales en ≤ 24 h y resolución de conflictos de horario en ≤ 3 días :contentReference[oaicite:4]{index=4}. Asimismo, se promueve la digitalización de trámites para reducir filas y errores de captura.",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Trámites más frecuentes",
                  open: false,
                  text: "Constancia de estudios • Reposición de credencial • Gestión de extraordinarios • Cambios de grupo",
                },

                {
                  type: "image",
                  src: "https://blogs.iadb.org/administracion-publica/wp-content/uploads/sites/21/2021/04/gob-digital-1024.jpg",
                  caption:
                    "Digitalizar servicios reduce tiempos y aumenta satisfacción.",
                },

                /* Párrafo 2 */
                {
                  type: "paragraph",
                  text: "El módulo propone un sistema de tickets integrado al SAE que asigne folio, prioridad y responsable a cada solicitud, enviando notificaciones al correo institucional del estudiante. Para garantizar la transparencia, se publican reportes mensuales de tiempos promedio y porcentaje de trámites concluidos dentro del SLA. Complementariamente, se crea un programa de ‘Embajadores de Servicio’ donde alumnos capacitados orientan a sus pares, descargando carga operativa del personal. La mejora continua se alimenta de encuestas semestrales y grupos focales que identifican cuellos de botella y necesidades emergentes, lo que refuerza la cultura de servicio y la reputación institucional :contentReference[oaicite:5]{index=5}.",
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Indicadores de desempeño",
                  open: false,
                  text: "Tiempo promedio de trámite • % SLA cumplido • Satisfacción del usuario • Nº de quejas resueltas",
                },
              ],
            },

            /* ─────────── 4.3.3 ─────────── */
            {
              id: "1.3.3",
              numbering: "4.3.3",
              title: "Control escolar",
              content: [
                /* Párrafo 1 */
                {
                  type: "paragraph",
                  text: "El control escolar custodia la integridad académica mediante el registro y verificación de calificaciones, asistencias y trayectoria del alumno. De acuerdo con el texto, sus funciones abarcan: validar actas de evaluación, calcular promedios, verificar el 80 % de asistencia mínima y emitir constancias oficiales para titulación :contentReference[oaicite:6]{index=6}. Para ello utiliza el SAE y coordina con los coordinadores académicos la captura oportuna de notas. Cualquier inconsistencia —cálculos erróneos o ausencia de firmas— deriva en un reporte que se envía al docente para subsanar antes del cierre de ciclo.",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Responsabilidades clave",
                  open: false,
                  text: "Captura y verificación de calificaciones • Cálculo de promedios • Resguardo de expedientes • Emisión de actas oficiales",
                },

                {
                  type: "image",
                  src: "https://www.redalyc.org/journal/340/34056722004/34056722004_gf5.png",
                  caption:
                    "Exactitud y oportunidad: pilares del control escolar.",
                },

                /* Párrafo 2 */
                {
                  type: "paragraph",
                  text: "Para fortalecer la confiabilidad, se implementan auditorías aleatorias a los registros y se compara la asistencia digital con listas físicas. Las desviaciones se corrigen mediante recaptura supervisada y capacitación docente en manejo de plataforma. El departamento también colabora con titulación para verificar cumplimiento del plan de estudios y con recursos financieros para bloquear certificados si existen adeudos. La meta es garantizar que todo egresado posea documentación veraz, condición indispensable para la reputación académica y la validez de los programas. Como indicador principal se utiliza la tasa de expedientes completos al cierre de cada ciclo, con meta ≥ 98 % :contentReference[oaicite:7]{index=7}.",
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Indicadores de control escolar",
                  open: false,
                  text: "Expedientes completos • Errores de captura • Tiempo de cierre de actas • Solicitudes de corrección",
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
          href: "https://youtu.be/ObkDNj_EeK0", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "¿Qué es, y para qué sirve el MOF? Manual de Organización y Funciones para tu Empresa. https://youtu.be/ObkDNj_EeK0", // :contentReference[oaicite:0]{index=0}
            "4 PASOS PARA ELABORAR UN MANUAL DE PUESTOS https://youtu.be/YDxpX7l3E_c", // :contentReference[oaicite:1]{index=1}
            "¿Qué es un DIAGRAMA DE FLUJO? Cómo HACER Diagramas de Flujo Paso a Paso + Ejemplos https://youtu.be/Kucgc6NpGwc", // :contentReference[oaicite:2]{index=2}
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
            // Bibliografía oficial del Módulo 4
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
