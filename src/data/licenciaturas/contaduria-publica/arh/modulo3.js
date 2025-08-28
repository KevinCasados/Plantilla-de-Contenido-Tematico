/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LCP", // Licenciatura en Contaduría Pública
  courseId: "ARH", // Administración de Recursos Humanos
  id: "ARH-M3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Administración de Recursos Humanos",
  title:
    "Módulo 3. Higiene y seguridad en el trabajo; auditoría y evaluación de programas de RH",
  semestre: "Quinto",
  teacher: "Esp. Eduardo Antonio Alfaro Hernández",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Conocer los factores que forman parte de la higiene y salud dentro de las organizaciones.",
  competencies: [
    "Análisis y comprensión de la normativa de higiene y salud en el ambiente organizacional.",
  ],

  /* ── Contenido temático (versión reducida y priorizada) ─────────── */
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
          text: "Objetivo: conocer factores de higiene y seguridad en el trabajo y su regulación; comprender la auditoría y evaluación de programas de RH.",
        }, // :contentReference[oaicite:0]{index=0}
        {
          type: "list",
          style: "check",
          items: [
            "Higiene y seguridad: conceptos, factores, prevención e indicadores.",
            "Marco legal básico: comisiones de seguridad e higiene.",
            "Auditoría de RH: concepto, etapas y áreas críticas de revisión.",
          ],
        }, // :contentReference[oaicite:1]{index=1}
      ],
    },

    /* 1. Unidad principal (Sesión 3) */
    {
      id: "1",
      numbering: "Unidad 1",
      title:
        "Higiene y seguridad en el trabajo; auditoría y evaluación de programas de RH",
      content: [
        {
          type: "paragraph",
          text: "La higiene y la seguridad en el trabajo constituyen pilares de la Administración de Recursos Humanos, porque protegen la integridad física y mental de las personas y sostienen la continuidad operativa. Bajo el referente de la OMS, la “salud” no se reduce a la ausencia de enfermedad, sino que implica bienestar físico, mental y social; de ahí que la gestión preventiva integre normas, procedimientos y condiciones materiales del puesto y su entorno. Una política efectiva de higiene y seguridad no solo minimiza siniestros y costos asociados, también fortalece la moral del personal, reduce ausentismo y rotación, y mejora la productividad. En este marco, la higiene laboral diagnostica y previene males ocupacionales mediante el control de variables humanas y ambientales; la seguridad, por su parte, organiza medidas técnicas, educativas, médicas y psicológicas para eliminar condiciones y actos inseguros. La unidad presentará conceptos, factores de riesgo, métricas e instrumentos de control, además de los componentes de auditoría de RH como subsistema orientado al mejoramiento continuo de políticas y prácticas. :contentReference[oaicite:0]{index=0}",
        },
        {
          type: "paragraph",
          text: "La higiene en el trabajo se enfoca al estudio y control del ambiente físico y de los procesos que pueden afectar la salud del trabajador. Tres grupos de condiciones influyen en el desempeño: ambientales (iluminación, ruido y condiciones atmosféricas), de tiempo (jornadas, horas extra, descansos) y sociales (organización informal, estatus, relaciones). Aunque la higiene prioriza las condiciones ambientales, interactúa con las demás. Un plan robusto contempla: (1) organización de servicios médicos y de enfermería proporcionales al tamaño de la empresa; (2) exámenes de admisión, atención de urgencias y registros; (3) prevención de riesgos químicos, físicos y biológicos; y (4) servicios complementarios de información y colaboración con instituciones externas. La prevención de enfermedades ocupacionales exige detección y eliminación o reducción de riesgos, así como educación constante del personal. Estas acciones deben documentarse y revisarse con indicadores para sostener la mejora. :contentReference[oaicite:1]{index=1}",
        },
        {
          type: "paragraph",
          text: "La seguridad laboral articula medidas técnicas y formativas para prevenir accidentes, ya sea eliminando condiciones inseguras del entorno o modificando conductas riesgosas. Su éxito depende del compromiso visible de la dirección y la participación activa del personal. Como responsabilidad de línea y función de staff, cada jefe es responsable de la seguridad en su área con asesoría del departamento especializado. Entre los ejes operativos, los lineamientos tipo OSHA proponen: compromiso directivo y participación; análisis del lugar de trabajo; prevención y control; y capacitación continua. Las causas de los accidentes suelen agruparse en: agente y parte del agente, condición insegura, tipo de accidente, acto inseguro y factores personales (fatiga, visión deficiente, desconocimiento de normas). Un programa eficaz establece normas claras, procedimientos de reporte e investigación, corrección oportuna y retroalimentación para evitar reincidencias, todo ello acompañado de sensibilización permanente. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "paragraph",
          text: "Para evaluar la siniestralidad y orientar decisiones, se emplean indicadores estandarizados: el Índice de Frecuencia (accidentes con ausencia por cada millón de horas-hombre), el Índice de Gravedad (días perdidos y computados por cada millón de horas-hombre) y el Índice de Siniestralidad (personas siniestradas por cada mil trabajadores en un año). Su cálculo exige registros confiables de horas trabajadas, días perdidos y clasificación de incapacidades. Con estos indicadores es posible comparar desempeño entre periodos, áreas y organizaciones, y medir el impacto de intervenciones de higiene/seguridad. Además, el marco jurídico refuerza la prevención: la Ley Federal del Trabajo exige comisiones mixtas de seguridad e higiene para investigar causas, proponer medidas y vigilar su cumplimiento. Integrar métricas con obligaciones legales y prácticas de gestión asegura trazabilidad, enfoque en causas raíz y sustentabilidad de los resultados obtenidos. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "paragraph",
          text: "La auditoría y evaluación de programas de RH complementa la prevención al verificar eficacia y eficiencia de políticas y prácticas. Se entiende como el análisis sistemático de subsistemas (integración, organización, retención y desarrollo) y su desempeño real, seguido de recomendaciones. El proceso de control incluye: (1) establecer estándares en cantidad, calidad, tiempo y costo; (2) supervisar el desempeño y recabar evidencia; (3) comparar contra estándares y tolerancias; y (4) ejecutar acciones correctivas cuando existan desviaciones. En el alcance típico se auditan análisis de puesto, retribución, reclutamiento y selección, rotación, ausentismo y siniestros, con el objetivo educativo de desarrollar sensibilidad diagnóstica en los responsables de línea. Vincular resultados de auditoría con planes de capacitación, rediseño de procesos y metas de seguridad genera un ciclo virtuoso de mejora continua, alineado con la misión y visión organizacionales. :contentReference[oaicite:4]{index=4}",
        },

        {
          type: "accordion",
          header: "Guía rápida (mapa mental en tres capas)",
          open: false,
          items: [
            {
              header: "Capa 1 — Conceptos nucleares",
              text: "Higiene laboral = normas y procedimientos para proteger integridad física y mental; variables: persona y ambiente. Seguridad = medidas técnicas, educativas, médicas y psicológicas para prevenir accidentes; responsabilidad de línea con apoyo de staff. Salud (OMS) = bienestar físico, mental y social. Auditoría de RH = revisión de políticas y prácticas para asegurar eficacia/eficiencia y mejora continua. :contentReference[oaicite:5]{index=5}",
            },
            {
              header: "Capa 2 — Ruta operativa de prevención",
              text: "Plan de higiene: organización de servicios médicos, registros y exámenes; prevención de riesgos químicos, físicos y biológicos; programas informativos y convenios externos. Seguridad: compromiso directivo y participación; análisis del lugar de trabajo; control y prevención de accidentes; capacitación continua (enfoque tipo OSHA). Investigación de incidentes: identificación de agente/parte, condición/acto inseguro y factores personales; corrección y seguimiento. :contentReference[oaicite:6]{index=6}",
            },
            {
              header: "Capa 3 — Indicadores y marco normativo",
              text: "Índice de Frecuencia (accidentes/millón de horas), Índice de Gravedad (días perdidos/millón de horas), e Índice de Siniestralidad (casos por mil trabajadores) para comparar periodos y áreas. Marco legal: comisiones mixtas de seguridad e higiene (LFT, art. 509) con atribuciones de investigar causas, proponer medidas y vigilar su cumplimiento; articulación con auditorías de RH para cierre de brechas. :contentReference[oaicite:7]{index=7}",
            },
          ],
        },
      ],

      /* → Subtemas clave (reducidos) */
      subthemes: [
        /* 1.1 Higiene en el trabajo */
        {
          id: "1.1.1",
          numbering: "1.1.1",
          title: "Concepto e importancia",
          content: [
            {
              type: "paragraph",
              text: "La higiene en el trabajo se entiende como el conjunto de normas y procedimientos orientados a proteger la integridad física y mental de las personas colaboradoras, resguardándolas de los riesgos inherentes a las tareas y al ambiente físico donde estas se realizan. A diferencia de iniciativas puntuales de seguridad centradas en evitar accidentes, la higiene laboral adopta una mirada preventiva y sistémica: estudia la relación entre el ser humano y su entorno, identifica fuentes de daño potencial (químicas, físicas y biológicas) y establece controles para eliminarlas o, cuando ello no sea posible, reducirlas a niveles aceptables. Esta perspectiva no solo disminuye enfermedades ocupacionales y ausentismo, sino que también impacta en la moral, el clima y la productividad. En términos organizacionales, su relevancia es doble: (1) protege un activo crítico —la salud de la fuerza de trabajo— y (2) asegura continuidad operativa al reducir interrupciones por siniestros o contingencias sanitarias. Su campo de acción abarca diagnóstico, prevención, educación, señalización, dotación de EPP y vigilancia de condiciones ambientales, todo ello documentado y trazable. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "Desde la perspectiva de gestión de recursos humanos, la higiene laboral es un habilitador del desempeño sostenible: cuando iluminación, ruido, temperatura y ventilación se mantienen dentro de rangos seguros, disminuye la fatiga, mejora la concentración y se eleva la calidad de ejecución. Además, su institucionalización —mediante políticas, procedimientos y comisiones internas— genera accountability y favorece la colaboración transversal entre líneas operativas, mantenimiento, medicina del trabajo y seguridad industrial. Esta transversalidad es clave para que las medidas preventivas no se queden en documentos, sino que se traduzcan en hábitos cotidianos (orden y limpieza, manejo de químicos, pausas activas, reporte oportuno de riesgos). En suma, higiene y seguridad no son compartimentos estancos: se entrelazan para sostener continuidad productiva y bienestar. En el fondo, como señala la doctrina, la seguridad es responsabilidad de línea y función de staff: cada jefatura responde por su área, mientras que un equipo especializado asesora y estandariza. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "La importancia estratégica de la higiene se refleja también en su conexión con el marco legal-laboral y con métricas de control. Normativas como las que sustentan comisiones mixtas obligan a investigar causas de accidentes y enfermedades, proponer medidas correctivas y vigilar su cumplimiento; ello convierte a la higiene en un ciclo de mejora continua más que en una lista de chequeo. Del lado de las métricas, los índices de frecuencia, gravedad y siniestralidad permiten comparar el desempeño preventivo entre plantas y con referentes sectoriales, priorizar inversiones y evaluar el retorno de programas (por ejemplo, cabinas acústicas, sistemas de extracción localizada o protocolos para agentes biológicos). Gestionar la higiene con datos habilita decisiones informadas y anticipación. Esta combinación de obligaciones legales, participación de personal y medición objetiva explica por qué la higiene laboral pasó de práctica reactiva a disciplina central de la gestión moderna de personas. :contentReference[oaicite:2]{index=2}",
            },

            {
              type: "accordion",
              header: "Mapa rápido: higiene vs. seguridad",
              open: false,
              items: [
                {
                  header: "Higiene (enfoque preventivo-ambiental)",
                  text: "Normas y procedimientos para eliminar/reducir riesgos de salud derivados de tareas y ambiente (químicos, físicos, biológicos). Diagnóstico, control y educación. :contentReference[oaicite:3]{index=3}",
                },
                {
                  header: "Seguridad (enfoque antiaccidente)",
                  text: "Medidas técnicas, educativas, médicas y psicológicas para prevenir accidentes y controlar resultados; responsabilidad de línea con apoyo de staff. :contentReference[oaicite:4]{index=4}",
                },
                {
                  header: "Interdependencia",
                  text: "Higiene reduce exposición crónica; seguridad evita eventos súbitos. Juntas sostienen continuidad operativa y bienestar. :contentReference[oaicite:5]{index=5}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Operativamente, instalar un sistema de higiene eficaz implica recorrer varias capas: (a) identificar peligros (inventario de sustancias, fuentes de ruido, focos de calor, agentes biológicos); (b) evaluar exposición (mediciones, hojas de datos de seguridad, observación de tareas); (c) establecer controles jerarquizados —eliminación, sustitución, ingeniería, administrativos y EPP—; (d) capacitar a todo el personal en prácticas seguras y hábitos saludables; (e) verificar y ajustar con indicadores. La verificación no se limita a auditorías internas: requiere análisis de causas de eventos, seguimiento de recomendaciones y transparencia en tableros visibles para equipos de línea. Esta trazabilidad es la que, en última instancia, reduce variabilidad y sostiene resultados. En paralelo, integrar medicina del trabajo (ingresos, periódicos, vigilancia de la salud) permite detectar tempranamente alteraciones, asociarlas a exposiciones y corregir procesos. :contentReference[oaicite:6]{index=6}",
            },
            {
              type: "paragraph",
              text: "A nivel cultural, la higiene se asienta cuando los microcomportamientos se alinean: reportar condiciones inseguras sin temor a represalias, detener la tarea ante riesgo evidente, limpiar derrames inmediatamente, respetar códigos de colores y rutas de evacuación. Estos hábitos se refuerzan con liderazgo visible (walkthroughs, conversaciones de seguridad, reconocimiento de conductas seguras) y con sistemas que facilitan hacer lo correcto (puntos de hidratación, dispensadores de EPP, señalización clara). En ese ecosistema, las campañas informativas no son eventos aislados, sino parte de un “sistema inmune organizacional” que aprende y reacciona. En síntesis, la higiene laboral importa porque protege personas, estabiliza procesos y construye reputación responsable, todo a la vez. :contentReference[oaicite:7]{index=7}",
            },

            {
              type: "accordion",
              header: "Checklist esencial de higiene",
              open: false,
              items: [
                {
                  header: "Ambiente físico",
                  text: "Iluminación, ruido, ventilación/temperatura y control de contaminantes (captación/extracción). :contentReference[oaicite:8]{index=8}",
                },
                {
                  header: "Controles y equipos",
                  text: "Sustitución de agentes peligrosos, barreras, resguardos, EPP y señalización. :contentReference[oaicite:9]{index=9}",
                },
                {
                  header: "Gestión y cultura",
                  text: "Comisiones mixtas, investigación de causas, capacitación, indicadores (frecuencia/gravedad). :contentReference[oaicite:10]{index=10}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Finalmente, la higiene no debe verse como un costo, sino como inversión con retorno: menos ausentismo, menos rotación asociada a condiciones adversas, menos paros por incidentes y mejor calidad (al reducir errores por fatiga o molestias). Además, prepara a la organización para responder a contingencias sanitarias, pues ya cuenta con protocolos de monitoreo ambiental, limpieza y protección personal. En términos de madurez, pasar de un enfoque reactivo a uno proactivo y, luego, a uno predictivo (basado en datos) es el camino recomendado. Esto exige gobernanza clara, presupuestos asignados y accountability en cascada. Con ello, la higiene del trabajo cumple su promesa: proteger la salud mientras impulsa el desempeño sostenido. :contentReference[oaicite:11]{index=11}",
            },
          ],
        },
        {
          id: "1.1.2",
          numbering: "1.1.2",
          title:
            "Factores del medio ambiente interno (iluminación, ruido, condiciones atmosféricas)",
          content: [
            {
              type: "paragraph",
              text: "La higiene laboral se ocupa de las condiciones ambientales del trabajo, es decir, del conjunto de circunstancias físicas que rodean a la persona mientras desempeña su función. Entre los factores de mayor impacto destacan: iluminación, ruido y condiciones atmosféricas (temperatura, humedad, ventilación y calidad del aire). Estos elementos, cuando se desvían de rangos seguros, inciden directamente en la fatiga, en la precisión de movimientos, en la atención sostenida y en la propensión a errores y accidentes. Una iluminación insuficiente o con deslumbramientos provoca forzar la vista y adoptar posturas inadecuadas; el ruido excesivo eleva el estrés, entorpece la comunicación y, a largo plazo, puede generar hipoacusia; temperaturas extremas o ventilación deficiente aumentan el cansancio, la deshidratación o la exposición a contaminantes. Intervenir el ambiente interno, por tanto, no es un lujo estético: es prevención primaria. :contentReference[oaicite:12]{index=12}",
            },
            {
              type: "paragraph",
              text: "Gestionar la iluminación implica evaluar niveles (lux) según tipo de tarea (de precisión vs. general), evitar sombras duras, reducir reflejos y asegurar mantenimiento de luminarias. Soluciones frecuentes incluyen rediseño del layout para aprovechar luz natural sin deslumbramientos, luminarias regulables, difusores y esquemas de mantenimiento preventivo (limpieza y reposición). En ruido, la jerarquía de controles recomienda: (1) eliminación/sustitución de fuentes ruidosas, (2) controles de ingeniería (encapsulado, barreras, amortiguación, mantenimiento), (3) controles administrativos (rotación de puestos, pausas) y (4) EPP auditado (orejeras, tapones) con pruebas de ajuste. En condiciones atmosféricas, los principios pasan por extracción localizada de contaminantes, ventilación adecuada, aislamiento térmico y monitoreo de temperatura/humedad. :contentReference[oaicite:13]{index=13}",
            },

            {
              type: "accordion",
              header: "Guía express de intervención ambiental",
              open: false,
              items: [
                {
                  header: "Iluminación",
                  text: "Uniformidad, temperatura de color adecuada y control de deslumbramiento; mantenimiento periódico. :contentReference[oaicite:14]{index=14}",
                },
                {
                  header: "Ruido",
                  text: "Control en la fuente y en la vía de transmisión; mediciones y mapa de ruido; EPP como última barrera. :contentReference[oaicite:15]{index=15}",
                },
                {
                  header: "Atmósfera",
                  text: "Extracción localizada, renovación de aire, control térmico e inspecciones programadas. :contentReference[oaicite:16]{index=16}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Además de controles técnicos, es crucial la dimensión conductual: señalizar zonas ruidosas con límites de exposición y requisitos de EPP, capacitar en montaje correcto de protectores auditivos, comunicar protocolos ante picos de temperatura, y promover reportes tempranos de molestias (visión borrosa, zumbidos, mareos). La participación de las personas es clave para identificar “puntos ciegos” (deslumbramientos en ciertos horarios, corrientes de aire, vibraciones) que los medidores no captan por sí solos. La comisión mixta puede canalizar estas observaciones hacia acciones rápidas (p. ej., reorientar luminarias, instalar cortinas acústicas, ajustar ventilación). :contentReference[oaicite:17]{index=17}",
            },

            {
              type: "accordion",
              header: "Checklist de verificación periódica",
              open: false,
              items: [
                {
                  header: "Mediciones y umbrales",
                  text: "Lux por tarea, dB(A) por zona, CO₂/partículas, temperatura y humedad registradas. :contentReference[oaicite:18]{index=18}",
                },
                {
                  header: "Mantenimiento",
                  text: "Limpieza de luminarias y filtros; revisión de extractores y sellos; calibración de instrumentos. :contentReference[oaicite:19]{index=19}",
                },
                {
                  header: "Gestión documental",
                  text: "Registros de inspecciones, no conformidades y acciones correctivas con responsables y fecha. :contentReference[oaicite:20]{index=20}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Por último, debe existir coherencia entre diseño de puestos y ambiente: tareas de precisión requieren niveles lumínicos más altos y control fino de reflejos; líneas con maquinaria vibrante exigen planes de mantenimiento que reduzcan ruido en la fuente; manipulación de químicos o agentes biológicos demanda cabinas y extracción localizada. Integrar estas decisiones desde ingeniería y compras evita “parches” posteriores. Con un enfoque plan–do–check–act, el ambiente interno se convierte en un sistema vivo de prevención, medido por indicadores (frecuencia y gravedad de incidentes, quejas por ambiente, rotación asociada) y evaluado en auditorías internas. Resultado: menos errores, más bienestar y mejor desempeño sostenido. :contentReference[oaicite:21]{index=21}",
            },
          ],
        },
        {
          id: "1.1.3",
          numbering: "1.1.3",
          title:
            "Prevención de enfermedad en el trabajo (riesgos químicos, físicos y biológicos)",
          content: [
            {
              type: "paragraph",
              text: "La prevención de enfermedades ocupacionales se centra en detectar, diagnosticar y eliminar o reducir riesgos ambientales derivados de agentes químicos, físicos y biológicos. En el eje químico, destacan intoxicaciones y dermatitis industriales asociadas a solventes, ácidos, vapores o polvos; en el físico, ruidos, temperaturas extremas y radiaciones ionizantes/no ionizantes; en el biológico, microorganismos patógenos y otros agentes capaces de provocar infecciones. El abordaje moderno parte del inventario de peligros, la evaluación de exposición (mediciones, hojas de datos de seguridad, observación de tareas) y la adopción de controles jerarquizados (eliminación, sustitución, ingeniería, administrativos, EPP). Este enfoque escalonado asegura que el EPP sea la última barrera, no la primera. :contentReference[oaicite:22]{index=22}",
            },
            {
              type: "paragraph",
              text: "Para riesgos químicos, la prioridad es sustituir sustancias peligrosas por alternativas menos nocivas; cuando no sea viable, confinar procesos (campanas, cabinas, sellos), automatizar transferencias para evitar salpicaduras o vaporizaciones, y asegurar ventilación/extracción localizada con mantenimiento documentado. Complementariamente, estandarizar etiquetado y almacenamiento, capacitar en lectura de HDS y respuesta a derrames, y establecer higiene personal (lavado, ropa de trabajo) reduce la carga corporal. En el plano físico, las medidas incluyen aislamiento/encapsulado de fuentes de ruido, control térmico (aislamientos, barreras, pausas e hidratación) y protocolos frente a radiaciones (blindajes, tiempos de exposición, dosimetría cuando aplique). Para agentes biológicos, la contención por niveles, el flujo de materiales, la desinfección programada y el manejo de residuos son pilares. :contentReference[oaicite:23]{index=23}",
            },

            {
              type: "accordion",
              header: "Riesgos y controles — vista de 1 página",
              open: false,
              items: [
                {
                  header: "Químicos",
                  text: "Sustitución, cierre de procesos, extracción localizada, HDS, kits de derrames y capacitación específica. :contentReference[oaicite:24]{index=24}",
                },
                {
                  header: "Físicos",
                  text: "Ruido (barreras, mantenimiento, EPP), calor/frío (aislamiento, pausas), radiaciones (blindajes, tiempo/distancia). :contentReference[oaicite:25]{index=25}",
                },
                {
                  header: "Biológicos",
                  text: "Cabinas, limpieza y desinfección, segregación de residuos, vacunación/ vigilancia de la salud cuando corresponda. :contentReference[oaicite:26]{index=26}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "La vigilancia de la salud cierra el ciclo preventivo: exámenes de ingreso y periódicos orientados a riesgos específicos detectan precozmente alteraciones (p. ej., umbrales auditivos, dermatitis, síntomas respiratorios). Los hallazgos deben retroalimentar ingeniería y organización del trabajo (rotaciones, pausas, rediseño de tareas). La gestión documental —registros de mediciones, capacitaciones, entrega de EPP, incidentes y acciones correctivas— proporciona trazabilidad para auditorías internas o de autoridad, y permite analizar tendencias (incidencia por área, eficacia de controles). El objetivo no es “cumplir por cumplir”, sino reducir la exposición real y consolidar hábitos que perduren. :contentReference[oaicite:27]{index=27}",
            },

            {
              type: "accordion",
              header: "Checklist operativo de prevención",
              open: false,
              items: [
                {
                  header: "Antes de la tarea",
                  text: "Verificar controles de ingeniería activos, EPP disponible y en buen estado, y lectura de HDS/procedimientos. :contentReference[oaicite:28]{index=28}",
                },
                {
                  header: "Durante",
                  text: "Monitorear condiciones (ruido/temperatura/ventilación), reportar desviaciones, respetar pausas y rutas de flujo. :contentReference[oaicite:29]{index=29}",
                },
                {
                  header: "Después",
                  text: "Limpieza de área/equipos, disposición de residuos, registro de observaciones e incidentes, mantenimiento requerido. :contentReference[oaicite:30]{index=30}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Una cultura preventiva madura asume que la exposición cero rara vez es posible; por ello, diseña capas de protección y mide su efectividad. El liderazgo visible (recorridos, diálogos de seguridad) y la participación de las personas (reportes sin culpa, comités activos) son tan importantes como la tecnología. Finalmente, la integración con seguridad —investigación de causas, lecciones aprendidas, métricas de frecuencia/gravedad y siniestralidad— permite tomar decisiones basadas en evidencia y priorizar inversiones donde el riesgo residual sea mayor. Con este andamiaje, la organización protege la salud de su gente, mejora su continuidad operativa y cumple sus obligaciones legales y éticas. :contentReference[oaicite:31]{index=31}",
            },
          ],
        },

        /* 1.2 Seguridad en el trabajo */
        {
          id: "1.2",
          numbering: "1.2",
          title: "Seguridad en el trabajo",
          content: [
            {
              type: "paragraph",
              text: "La seguridad laboral se define como el conjunto de medidas técnicas, educativas, médicas y psicológicas destinadas a prevenir accidentes, ya sea eliminando condiciones inseguras del ambiente o instruyendo a las personas para que apliquen prácticas preventivas. Desde la perspectiva de la administración, la seguridad es responsabilidad de línea y función de staff: cada jefe responde por la seguridad de su área con apoyo del departamento especializado. Este enfoque reconoce que la prevención es posible si se establecen normas, procedimientos y trabajo en equipo debidamente respaldados por la dirección. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "El programa de seguridad debe partir del compromiso visible de la dirección y de la participación de los trabajadores. La OSHA resume una ruta en cuatro puntos: (1) compromiso directivo y participación; (2) análisis sistemático del lugar de trabajo para identificar peligros; (3) procedimientos de prevención y control; y (4) capacitación a todos los niveles. Esta secuencia promueve claridad de reglas, acciones correctivas oportunas y cultura de autocuidado, elementos que reducen la siniestralidad y elevan la moral. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "La detección de riesgos sanitarios comprende actividades de diagnóstico y reducción de riesgos químicos (intoxicaciones, dermatitis), físicos (ruido, temperaturas extremas, radiaciones) y biológicos (microorganismos patógenos). A ello se suman servicios médicos adecuados (exámenes de admisión, primeros auxilios, registros clínicos, supervisión de higiene) y servicios adicionales de educación para la salud. Todo programa debe apoyarse en registros y estadísticas para orientar decisiones. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "paragraph",
              text: "Para medir y comparar resultados entre organizaciones y ramas industriales, la VI Conferencia Internacional de Estadísticas Laborales recomienda emplear tres razones: índice de frecuencia (accidentes con ausencia por cada millón de horas-hombre), índice de gravedad (días perdidos por cada millón de horas-hombre) e índice de siniestralidad (trabajadores siniestrados por cada mil trabajadores expuestos en el año). Estos indicadores permiten evaluar tendencias, priorizar intervenciones y verificar la efectividad del programa. :contentReference[oaicite:3]{index=3}",
            },
            {
              type: "paragraph",
              text: "El marco normativo mexicano exige además la organización de comisiones mixtas de seguridad e higiene (artículo 509 LFT), con representación paritaria de trabajadores y patrón para investigar causas de accidentes y enfermedades, proponer medidas preventivas y vigilar el cumplimiento. Integrar el componente legal con prácticas de gestión, estadísticas y formación crea un sistema de prevención robusto, capaz de sostener la continuidad operativa y el bienestar del personal. :contentReference[oaicite:4]{index=4}",
            },

            /* Acordiones (2) */
            {
              type: "accordion",
              header: "Ruta de implementación en 4 pasos",
              open: false,
              items: [
                {
                  header: "1) Compromiso y participación",
                  text: "La dirección fija políticas, asigna recursos y mide el desempeño; trabajadores co-diseñan y ejecutan. :contentReference[oaicite:5]{index=5}",
                },
                {
                  header: "2) Análisis del lugar de trabajo",
                  text: "Inspecciones, análisis de tareas, revisión de incidentes y mapeo de peligros (químicos, físicos, biológicos). :contentReference[oaicite:6]{index=6}",
                },
                {
                  header: "3–4) Control y capacitación",
                  text: "Procedimientos, EPP, mantenimiento y formación continua para directivos, supervisores y personal operativo. :contentReference[oaicite:7]{index=7}",
                },
              ],
            },
            {
              type: "accordion",
              header: "Indicadores clave",
              open: false,
              items: [
                {
                  header: "Índice de frecuencia",
                  text: "Accidentes con ausencia por millón de horas-hombre trabajadas; permite comparaciones válidas. :contentReference[oaicite:8]{index=8}",
                },
                {
                  header: "Índice de gravedad",
                  text: "Días perdidos por millón de horas-hombre; mide severidad de las lesiones y el impacto operativo. :contentReference[oaicite:9]{index=9}",
                },
                {
                  header: "Índice de siniestralidad",
                  text: "Trabajadores siniestrados por cada mil expuestos en el año; visibiliza magnitud del problema. :contentReference[oaicite:10]{index=10}",
                },
              ],
            },
          ],
          subthemes: [
            /* 1.2.1 */
            {
              id: "1.2.1",
              numbering: "1.2.1",
              title:
                "Concepto, riesgo y accidente laboral (definiciones OMS/NSC)",
              content: [
                {
                  type: "paragraph",
                  text: "La OMS define accidente como un hecho no premeditado del cual se deriva un daño considerable; el National Safety Council lo concibe como una serie de hechos que, cuando ocurren sin intención, producen lesiones, muerte o daños materiales. En el ámbito laboral, se considera accidente aquel que se deriva del trabajo, incluyendo los de trayecto, y que ocasiona lesión corporal o reducción —temporal o permanente— de la capacidad para laborar. Estas definiciones subrayan dos ideas: el carácter prevenible de la mayoría de los eventos y la necesidad de políticas integrales para controlarlos. :contentReference[oaicite:11]{index=11}",
                },
                {
                  type: "paragraph",
                  text: "Comprender el riesgo exige distinguir entre agente (objeto o sustancia involucrada), parte del agente (componente asociado con la lesión), condición insegura (fallo físico o mecánico del entorno), tipo de accidente (forma de contacto) y acto inseguro (violación de un procedimiento seguro). A ello se suma el factor personal de inseguridad (deficiencia o alteración mental/física que permite el acto inseguro). Este mapa causal ayuda a priorizar controles de ingeniería, administrativos y de comportamiento. :contentReference[oaicite:12]{index=12}",
                },
                {
                  type: "paragraph",
                  text: "Los accidentes se clasifican en sin ausencia (se registra, investiga y estadística) y con ausencia, que a su vez pueden generar incapacidad temporal o parcial y permanente. La diferenciación es clave para el registro, la investigación, la determinación de días perdidos y la toma de decisiones sobre modificaciones al puesto, reintegración laboral y compensación. La precisión en la tipología sostiene la validez de los indicadores de frecuencia y gravedad. :contentReference[oaicite:13]{index=13}",
                },
                {
                  type: "paragraph",
                  text: "Prevenir requiere ir más allá de la definición: implica observar el trabajo real, detectar desviaciones y diseñar barreras (protecciones, resguardos, señalización, permisos de trabajo) que neutralicen condiciones y actos inseguros. La formación específica, la supervisión activa y la participación del personal en la identificación de peligros consolidan una cultura de seguridad que incide en la reducción sostenida de incidentes. :contentReference[oaicite:14]{index=14}",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, el marco organizacional —comisiones mixtas y liderazgo de línea— asegura que los hallazgos se traduzcan en acciones y que las responsabilidades estén claras. Seguridad e higiene no son iniciativas aisladas sino sistemas de gestión con metas, métricas, revisiones y mejora continua. :contentReference[oaicite:15]{index=15}",
                },

                /* Acordiones (2) */
                {
                  type: "accordion",
                  header: "Mapa causal del accidente",
                  open: false,
                  items: [
                    {
                      header: "Agente / parte del agente",
                      text: "Máquinas, equipos, superficies y su elemento lesivo inmediato. :contentReference[oaicite:16]{index=16}",
                    },
                    {
                      header: "Condición insegura",
                      text: "Falla física o mecánica del entorno que pudo protegerse/corregirse. :contentReference[oaicite:17]{index=17}",
                    },
                    {
                      header: "Acto inseguro / factor personal",
                      text: "Violación del procedimiento y condiciones personales que la posibilitan. :contentReference[oaicite:18]{index=18}",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Clasificación útil para registrar",
                  open: false,
                  items: [
                    {
                      header: "Sin ausencia",
                      text: "No interrumpe la jornada; se investiga y registra. :contentReference[oaicite:19]{index=19}",
                    },
                    {
                      header: "Con ausencia (temporal)",
                      text: "Implica días perdidos; impacta el índice de gravedad. :contentReference[oaicite:20]{index=20}",
                    },
                    {
                      header: "Parcial y permanente",
                      text: "Reducción permanente de la capacidad laboral. :contentReference[oaicite:21]{index=21}",
                    },
                  ],
                },
              ],
            },

            /* 1.2.2 */
            {
              id: "1.2.2",
              numbering: "1.2.2",
              title:
                "Prevención e investigación: programa en 4 puntos (compromiso, análisis del lugar, control y capacitación)",
              content: [
                {
                  type: "paragraph",
                  text: "Un sistema efectivo de prevención articula cuatro componentes: compromiso de la dirección y participación de los trabajadores; análisis riguroso del lugar de trabajo; procedimientos de prevención y control; y capacitación sistemática. El liderazgo define metas y dota recursos; la participación asegura apropiación y retroalimentación desde la operación; el análisis identifica peligros y prioriza riesgos; el control implementa medidas de ingeniería y administrativas; y la capacitación cierra brechas de competencia. :contentReference[oaicite:22]{index=22}",
                },
                {
                  type: "paragraph",
                  text: "El análisis del lugar de trabajo combina inspecciones, revisión de incidentes, análisis de tareas y evaluación de exposición a agentes químicos, físicos y biológicos. Los hallazgos se documentan en formatos estandarizados y alimentan el plan anual de seguridad e higiene, con responsables, plazos y métricas. Esta disciplina permite anticipar fallas, no solo reaccionar a eventos, y sostiene la trazabilidad de decisiones. :contentReference[oaicite:23]{index=23}",
                },
                {
                  type: "paragraph",
                  text: "La prevención y el control se materializan en jerarquías de medidas: eliminación/sustitución del peligro; controles de ingeniería (encapsulamiento, ventilación, resguardos); controles administrativos (permisos de trabajo, rotación, mantenimiento planificado); y uso de equipo de protección personal. La investigación de incidentes alimenta mejoras, pero también el diseño de estándares de trabajo seguro y señalización. :contentReference[oaicite:24]{index=24}",
                },
                {
                  type: "paragraph",
                  text: "El componente de salud ocupacional integra servicios médicos (admisión, primeros auxilios, registros clínicos, exámenes periódicos) y servicios adicionales educativos para hábitos saludables. En paralelo, la detección de riesgos para la salud se enfoca en ambientes con agentes químicos, físicos y biológicos, con protocolos de monitoreo y límites de acción. :contentReference[oaicite:25]{index=25}",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, la formación a directivos, supervisores y trabajadores garantiza el conocimiento de peligros, materiales y equipos, y la aplicación consistente de prácticas preventivas. La mezcla de teoría, práctica y evaluación de competencias asegura transferencia al puesto y disminuye la variabilidad conductual. :contentReference[oaicite:26]{index=26}",
                },

                /* Acordiones (2) */
                {
                  type: "accordion",
                  header: "Checklist mínimo del programa",
                  open: false,
                  items: [
                    {
                      header: "Política y metas",
                      text: "Declaración firmada, objetivos medibles, presupuesto asignado. :contentReference[oaicite:27]{index=27}",
                    },
                    {
                      header: "Análisis y control",
                      text: "Inspecciones, permisos, EPP, mantenimiento, señalización. :contentReference[oaicite:28]{index=28}",
                    },
                    {
                      header: "Registros y métricas",
                      text: "Incidentes, días perdidos, IF, IG, capacitación y auditorías internas. :contentReference[oaicite:29]{index=29}",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Servicios de salud ocupacional",
                  open: false,
                  items: [
                    {
                      header: "Atención y seguimiento",
                      text: "Primeros auxilios, exámenes de ingreso y periódicos, registros. :contentReference[oaicite:30]{index=30}",
                    },
                    {
                      header: "Prevención de riesgos",
                      text: "Monitoreo de agentes químicos, físicos y biológicos. :contentReference[oaicite:31]{index=31}",
                    },
                    {
                      header: "Educación y vínculos",
                      text: "Programas informativos y colaboración con instituciones locales. :contentReference[oaicite:32]{index=32}",
                    },
                  ],
                },
              ],
            },

            /* 1.2.3 */
            {
              id: "1.2.3",
              numbering: "1.2.3",
              title: "Índices clave: frecuencia, gravedad y siniestralidad",
              content: [
                {
                  type: "paragraph",
                  text: "El índice de frecuencia (IF) representa el número de accidentes con ausencia por cada millón de horas-hombre trabajadas en el periodo. Al normalizar por horas, permite comparar entre empresas de distintos tamaños y giros. El cálculo requiere: promedio de empleados, horas trabajadas-hombre (incluyendo horas extra y excluyendo horas pagadas no trabajadas) y el conteo de accidentes con ausencia. Un IF alto orienta a fortalecer controles en tareas, equipos o áreas con mayor exposición. :contentReference[oaicite:33]{index=33}",
                },
                {
                  type: "paragraph",
                  text: "El índice de gravedad (IG) expresa los días perdidos por cada millón de horas-hombre trabajadas. Incluye días perdidos (desde el día siguiente al accidente hasta el alta), días trasladados y días acreditados por muerte o incapacidad permanente conforme a tablas convencionales. El IG mide la severidad y sus causas, orientando intervenciones clínicas, ergonómicas y de rediseño del trabajo para evitar lesiones incapacitantes. :contentReference[oaicite:34]{index=34}",
                },
                {
                  type: "paragraph",
                  text: "El índice de siniestralidad (IS) refleja cuántos trabajadores resultan siniestrados al año por cada mil expuestos, incorporando además enfermedades profesionales. Es un indicador de impacto poblacional que, junto con IF e IG, completa la visión de ocurrencia, severidad y alcance. Usados en conjunto, los tres índices sustentan metas de reducción, benchmarking sectorial y la valoración de la eficacia de programas y comisiones mixtas. :contentReference[oaicite:35]{index=35}",
                },
                {
                  type: "paragraph",
                  text: "Para que los índices sean útiles, la clasificación del accidente debe ser precisa (sin ausencia; con ausencia: temporal; parcial y permanente) y la captura de horas trabajadas rigurosa. La consistencia metodológica asegura series históricas comparables y decisiones basadas en evidencia, desde la redistribución de EPP hasta la priorización de capacitaciones y cambios de ingeniería. :contentReference[oaicite:36]{index=36}",
                },
                {
                  type: "paragraph",
                  text: "El análisis de tendencias (por centro de costo, turno, tarea o agente) potencia los índices al identificar patrones y ‘picos’ de riesgo. Integrar estos indicadores en tableros mensuales y revisarlos en comités de seguridad contribuye a la mejora continua y a alinear seguridad, productividad y cumplimiento legal. :contentReference[oaicite:37]{index=37}",
                },

                /* Acordiones (2) */
                {
                  type: "accordion",
                  header: "Datos necesarios por índice",
                  open: false,
                  items: [
                    {
                      header: "IF",
                      text: "Accidentes con ausencia y horas-hombre trabajadas del periodo. :contentReference[oaicite:38]{index=38}",
                    },
                    {
                      header: "IG",
                      text: "Días perdidos, trasladados y acreditados; horas-hombre. :contentReference[oaicite:39]{index=39}",
                    },
                    {
                      header: "IS",
                      text: "Trabajadores siniestrados y plantilla promedio expuesta. :contentReference[oaicite:40]{index=40}",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas de registro",
                  open: false,
                  items: [
                    {
                      header: "Definiciones uniformes",
                      text: "Asegurar criterios únicos de ‘accidente con ausencia’. :contentReference[oaicite:41]{index=41}",
                    },
                    {
                      header: "Trazabilidad",
                      text: "Vincular parte médico, investigación y horas-hombre. :contentReference[oaicite:42]{index=42}",
                    },
                    {
                      header: "Revisión periódica",
                      text: "Validar datos en comisiones mixtas y auditorías internas. :contentReference[oaicite:43]{index=43}",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* 1.3 Marco legal esencial */
        {
          id: "1.3",
          numbering: "1.3",
          title: "Reglamentación y comisiones mixtas",
          content: [
            {
              type: "paragraph",
              text: "La reglamentación en materia de higiene y seguridad laboral cumple una doble función: establece obligaciones mínimas de prevención para la empresa y crea instrumentos de participación bipartita para investigar causas de accidentes, proponer medidas y vigilar su cumplimiento. En México, el eje de esta arquitectura lo constituye la figura de la comisión mixta de seguridad e higiene, con integración paritaria entre representantes del patrón y de los trabajadores. Su propósito no es sólo correctivo (investigar siniestros), sino eminentemente preventivo, ya que fomenta una cultura de mejora continua en el lugar de trabajo. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "Desde la perspectiva de Recursos Humanos (RH), cumplir la normativa no se limita a ‘tener actas’ o ‘llenar formatos’; implica articular políticas, procesos y registros que demuestren el análisis del puesto, los factores de riesgo del ambiente de trabajo (iluminación, ruido, temperatura) y la trazabilidad de acciones correctivas. De este modo, la función de RH se convierte en un puente entre la gestión operativa del riesgo y las obligaciones legales, integrando diagnósticos, campañas de capacitación y seguimiento de indicadores de siniestralidad. :contentReference[oaicite:1]{index=1}",
            },

            {
              type: "accordion",
              header: "Marco legal clave (guía de lectura rápida)",
              open: false,
              items: [
                {
                  header: "Comisiones mixtas (LFT art. 509)",
                  text: "Integración paritaria; atribuciones: investigar, proponer y vigilar medidas de seguridad e higiene en cada centro de trabajo. :contentReference[oaicite:2]{index=2}",
                },
                {
                  header: "Obligaciones preventivas",
                  text: "Programas y normas internas: identificación de riesgos, matrices de control, evidencia de capacitación y registros médicos/accidentarios. :contentReference[oaicite:3]{index=3}",
                },
                {
                  header: "Evidencia documental",
                  text: "Actas de comisión, reportes de investigación, bitácoras de seguimiento, indicadores (frecuencia, gravedad, siniestralidad). :contentReference[oaicite:4]{index=4}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "La comisión no sustituye la responsabilidad de línea: cada jefe es responsable de la seguridad de su área. RH y la comisión actúan como staff experto que asesora, audita y da seguimiento. La eficacia regulatoria se refleja en la coherencia entre normas internas y prácticas cotidianas (uso de EPP, orden y limpieza, bloqueo/etiquetado, etc.). Cuando esa coherencia falla, el marco legal prevé sanciones, pero también mecanismos de mejora (planes correctivos con responsables y plazos). :contentReference[oaicite:5]{index=5}",
            },
            {
              type: "paragraph",
              text: "Operativamente, la reglamentación exige clasificar las causas de los accidentes (agente, parte del agente, condición insegura, acto inseguro, factor personal), lo que permite orientar inversiones (protecciones, resguardos, ventilación, iluminación) y campañas de capacitación específicas. Esta taxonomía también ayuda a priorizar acciones de alto impacto, por ejemplo, intervenir condiciones inseguras recurrentes en maquinaria o rediseñar procedimientos con puntos de control claros. :contentReference[oaicite:6]{index=6}",
            },

            {
              type: "accordion",
              header: "Checklist para la comisión mixta",
              open: false,
              items: [
                {
                  header: "Integración y calendario",
                  text: "Nombramientos vigentes, quorum, plan anual de recorridos e investigación de incidentes. :contentReference[oaicite:7]{index=7}",
                },
                {
                  header: "Registros mínimos",
                  text: "Actas, reportes de accidentes, estadísticas, programas de capacitación, listas de verificación del sitio. :contentReference[oaicite:8]{index=8}",
                },
                {
                  header: "Indicadores",
                  text: "Índice de frecuencia, gravedad y siniestralidad; metas y brechas con planes de acción. :contentReference[oaicite:9]{index=9}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Una política eficaz traduce la norma a estándares medibles (tolerancias de ruido, lux de iluminación, límites de temperatura) y a prácticas de observación y retroalimentación en piso. RH debe integrar estos estándares al análisis y descripción de puestos, para que el control de riesgos sea inseparable de la gestión del talento (inducción, evaluación de desempeño, reconocimientos por cumplimiento). :contentReference[oaicite:10]{index=10}",
            },
            {
              type: "paragraph",
              text: "Finalmente, el valor regulatorio se potencia cuando la comisión empata sus hallazgos con auditorías internas de RH y con el tablero ejecutivo. Así, la reglamentación deja de ser ‘costo de cumplimiento’ y se convierte en una palanca de continuidad operativa y reputación, con evidencia sólida para inspecciones y certificaciones. :contentReference[oaicite:11]{index=11}",
            },
          ],
        },

        /* 1.4 Auditoría de RH (núcleo) */
        /* 1.4 Auditoría de RH (núcleo) */
        {
          id: "1.4",
          numbering: "1.4",
          title: "Auditoría y evaluación de los programas de Recursos Humanos",
          content: [
            {
              type: "paragraph",
              text: "La auditoría de RH es un sistema de revisión y control del programa de personal: analiza políticas y prácticas, evalúa su funcionamiento y recomienda mejoras. Su propósito es comprobar contribución y eficacia, detectar prácticas onerosas o ineficientes y alinear la gestión de personas con la estrategia corporativa. Opera sobre evidencias: registros, indicadores y comparaciones contra estándares definidos. :contentReference[oaicite:12]{index=12}",
            },
            {
              type: "paragraph",
              text: "A diferencia de auditorías puramente financieras, la de RH requiere una mirada sistémica: integración (reclutamiento/selección), organización (análisis de puestos), retención (compensación y clima), desarrollo (capacitación/carrera) y seguridad e higiene. La premisa es que los resultados en negocio dependen de la calidad del sistema de gestión de personas y de su cumplimiento normativo. :contentReference[oaicite:13]{index=13}",
            },

            {
              type: "accordion",
              header: "Proceso de auditoría (4 etapas)",
              open: false,
              items: [
                {
                  header: "1) Estándares",
                  text: "Definir criterios de cantidad, calidad, tiempo y costo (p. ej., SLA de cobertura de vacantes, tasa objetivo de rotación). :contentReference[oaicite:14]{index=14}",
                },
                {
                  header: "2) Supervisión",
                  text: "Dar seguimiento y medir desempeño con fuentes confiables (legajos, encuestas, KPIs). :contentReference[oaicite:15]{index=15}",
                },
                {
                  header: "3) Comparación y 4) Corrección",
                  text: "Analizar brechas vs. tolerancias y ejecutar acciones correctivas priorizadas. :contentReference[oaicite:16]{index=16}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "El alcance típico incluye relaciones organizacionales, decisiones del staff de RH y suficiencia de recursos. Se examinan registros (análisis de puesto, evaluaciones, expedientes), se contrastan contra normas internas y externas, y se elabora un informe con recomendaciones viables. La función es en gran medida educativa: desarrollar sensibilidad diagnóstica en los administradores de línea. :contentReference[oaicite:17]{index=17}",
            },
            {
              type: "paragraph",
              text: "Para ser útil, la auditoría debe apoyarse en indicadores: tiempo de cobertura, calidad de contratación, ausentismo, rotación, accidentes, eficacia de capacitación, costo por empleado, cumplimiento regulatorio. La lectura de estos KPIs debe ligarse a causas raíz y a decisiones: rediseñar procesos, reforzar capacitación, actualizar políticas o invertir en herramientas. :contentReference[oaicite:18]{index=18}",
            },

            {
              type: "accordion",
              header: "Áreas críticas a evaluar",
              open: false,
              items: [
                {
                  header: "Análisis y descripción de puestos",
                  text: "Calidad de perfiles y actualización vs. realidad operativa. :contentReference[oaicite:19]{index=19}",
                },
                {
                  header: "Retribución y equidad",
                  text: "Consistencia interna vs. mercado, estructura salarial y prestaciones. :contentReference[oaicite:20]{index=20}",
                },
                {
                  header: "Seguridad e higiene",
                  text: "Cumplimiento, comisiones mixtas y resultados (índices de siniestralidad). :contentReference[oaicite:21]{index=21}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "La documentación es clave: sin papeles de trabajo y trazabilidad, las conclusiones carecen de peso. Por ello, se recomiendan legajos por proceso (talento, compensación, seguridad) con evidencias de controles, reportes periódicos y planes de acción. La periodicidad puede ser anual, con seguimientos trimestrales para temas críticos. :contentReference[oaicite:22]{index=22}",
            },
            {
              type: "paragraph",
              text: "Finalmente, la auditoría de RH sólo crea valor si cierra el ciclo de mejora: comunica resultados, acuerda responsables y plazos, y verifica efectividad. Así, conecta cumplimiento, eficiencia y experiencia del empleado con la competitividad del negocio. :contentReference[oaicite:23]{index=23}",
            },
          ],
          subthemes: [
            {
              id: "1.4.1",
              numbering: "1.4.1",
              title: "Concepto, objetivos y tipos de auditoría de RH",
              content: [
                {
                  type: "paragraph",
                  text: "Conceptualmente, la auditoría de RH es el examen independiente y sistemático del sistema de gestión de personas para asegurar su adecuación, eficacia y cumplimiento. Sus objetivos: verificar alineación estratégica, medir eficiencia de procesos (p. ej., reclutamiento, capacitación), acreditar cumplimiento normativo y proponer mejoras de alto impacto. :contentReference[oaicite:24]{index=24}",
                },
                {
                  type: "paragraph",
                  text: "Entre los tipos comunes están la auditoría de cumplimiento (enfocada en leyes y políticas), de desempeño (eficacia/eficiencia de procesos), de mejores prácticas (benchmark) y auditorías temáticas (p. ej., seguridad e higiene, compensación). La elección depende del riesgo y de la madurez del sistema. :contentReference[oaicite:25]{index=25}",
                },
              ],
            },
            {
              id: "1.4.2",
              numbering: "1.4.2",
              title:
                "Etapas del proceso de auditoría (estándares, supervisión, comparación, corrección)",
              content: [
                {
                  type: "paragraph",
                  text: "El control funciona como proceso secuencial: (1) establecer estándares deseados (cantidad, calidad, tiempo y costo), (2) supervisar desempeño con datos confiables, (3) comparar vs. tolerancias y (4) aplicar acciones correctivas. La claridad de estándares y la calidad de la medición determinan la utilidad del hallazgo. :contentReference[oaicite:26]{index=26}",
                },
                {
                  type: "paragraph",
                  text: "Herramientas útiles: mapas de proceso, indicadores, tableros de mando, entrevistas y revisión de legajos. El informe final debe priorizar causas raíz y vincular recomendaciones con beneficios esperados, costos y riesgos mitigados. :contentReference[oaicite:27]{index=27}",
                },
              ],
            },
            {
              id: "1.4.3",
              numbering: "1.4.3",
              title: "Áreas críticas a auditar",
              content: [
                {
                  type: "paragraph",
                  text: "Las áreas recurrentes incluyen: análisis de puesto, sistema de retribución, reclutamiento y selección, rotación, ausentismo y seguridad e higiene. En cada una se revisa diseño, ejecución, métricas y cumplimiento, buscando coherencia entre políticas, práctica y resultados. :contentReference[oaicite:28]{index=28}",
                },
                {
                  type: "paragraph",
                  text: "El enfoque pragmático es identificar ‘brechas que duelen’: tiempos de cobertura excesivos, estructuras salariales desalineadas, índices de accidentes elevados o ausentismo crónico. De ahí se derivan planes de mejora con responsables, plazos e indicadores de éxito. :contentReference[oaicite:29]{index=29}",
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
          href: "https://youtu.be/gD8_pKgD4JM?feature=shared", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "¿Qué es la higiene industrial? https://youtu.be/gD8_pKgD4JM?feature=shared",
            "Auditoría de la gestión de recursos humanos. https://youtu.be/7WPtHa1k0tk?feature=shared",
            // Añade aquí más recursos si el curso lo requiere.
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
            "Chiavenato, I. (2011). Administración de Recursos Humanos. McGraw-Hill Educación.",
            "Dessler, G., & Varela, R. (2004). Administración de Recursos Humanos. Enfoque Latinoamericano. Pearson Educación.",
            "Gómez-Mejía, L. (2008). Gestión de Recursos Humanos. Pearson Educación.",
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
