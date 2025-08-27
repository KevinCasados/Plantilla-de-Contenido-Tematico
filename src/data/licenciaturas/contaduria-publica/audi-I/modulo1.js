/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "CP", // Contaduría Pública
  courseId: "AUDITORIA-I",
  id: "AUDI-I-M1",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Auditoría I",
  title: "Módulo 1. Fundamentos de la auditoría de estados financieros",
  semestre: "7º",
  teacher: "M.F. Aldo Ariel Cárdenas García",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "El estudiante identifica, comprende y aplica los fundamentos teóricos, normativos y éticos de la auditoría de estados financieros, reconociendo su clasificación, características esenciales y principios de actuación profesional. Analiza y evalúa la función del contador público auditor, las teorías que justifican la auditoría y la metodología basada en riesgos, con el fin de planificar y ejecutar revisiones financieras conforme a las NIA y al Código de Ética del IESBA, garantizando independencia, objetividad y razonabilidad en la emisión de opiniones.",

  competencies: [
    "Comprender los fundamentos y objetivos de la auditoría de estados financieros.",
    "Identificar y aplicar principios éticos y de independencia del auditor.",
    "Evaluar riesgos y planificar procedimientos de auditoría.",
    "Obtener y analizar evidencia suficiente y competente para emitir opiniones.",
    "Mantener objetividad, escepticismo profesional y debido cuidado en el trabajo auditor.",
  ],

  /* ── Contenido temático (versión reducida con sub-subtemas) ───── */
  themes: [
    /* 0. Página Info (opcional) */
  {
    id: "X.info",
    numbering: "Info",
    title: "Información general del módulo",
    isUnitInfo: true,
    content: [],
  },
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Fundamentos de auditoría de estados financieros",
      content: [
        {
          type: "paragraph",
          text: "La auditoría de estados financieros es un examen independiente y sistemático cuyo objetivo es incrementar el grado de confianza de los usuarios en la información presentada por la entidad. Bajo las Normas Internacionales de Auditoría (NIA), el auditor obtiene seguridad razonable —no absoluta— de que los estados están libres de errores materiales, ya sea por fraude o por error, y emite una opinión profesional sobre su razonabilidad conforme al marco contable aplicable. Este encuadre exige independencia, escepticismo profesional y juicio informado, así como una clara definición del alcance y de la materialidad. Metodológicamente, la auditoría se estructura en planeación, ejecución y conclusión, con documentación suficiente que sustente cada conclusión. La función social es nítida: proteger el interés público fortaleciendo la credibilidad de los informes financieros. Por ello, el auditor debe entender el negocio, su entorno regulatorio y los riesgos que podrían distorsionar la información, para responder con procedimientos pertinentes y proporcionados. Así, la auditoría deja de ser un ejercicio de cumplimiento formal para convertirse en un proceso de aseguramiento que agrega valor y disciplina a la rendición de cuentas.",
        },
        {
          type: "paragraph",
          text: "Para ordenar el estudio, es útil clasificar la auditoría según su finalidad, origen y alcance. Por finalidad: la auditoría financiera se concentra en la razonabilidad de los estados; la operativa evalúa eficiencia y eficacia de procesos; y la de cumplimiento verifica observancia de leyes y regulaciones. Por origen: la auditoría interna, ejecutada por personal de la entidad, orienta la mejora de controles y la gestión de riesgos; la auditoría externa, a cargo de un tercero independiente, proporciona confianza a inversionistas, acreedores y reguladores. Por alcance: pueden desarrollarse auditorías integrales (combinan enfoques financiero, operativo y de cumplimiento) o auditorías específicas (enfocadas en rubros o procesos críticos). En el curso nos centraremos en la auditoría financiera externa, sin perder de vista los puentes con los otros tipos, porque en la práctica las conclusiones financieras descansan sobre procesos, controles y cumplimiento. Esta clasificación no es meramente taxonómica: guía elecciones metodológicas, determina el perfil de evidencia requerida y clarifica el destinatario primario del informe.",
        },
        {
          type: "paragraph",
          text: "Las características esenciales de una auditoría de calidad son indeclinables: objetividad, independencia de fondo y de apariencia, planeación estratégica, obtención de evidencia suficiente y competente, razonabilidad en el juicio y escepticismo profesional permanente. La objetividad implica evaluar hechos sin sesgos; la independencia exige ausencia de intereses que comprometan el criterio; la planeación conecta riesgos con procedimientos específicos y recursos; la evidencia pertinente y fiable sustenta cada conclusión; la razonabilidad orienta la evaluación de errores en relación con la materialidad; el escepticismo obliga a mantener una alerta informada ante la posibilidad de representaciones erróneas. Estas características, operadas con juicio profesional, se traducen en decisiones sobre naturaleza, oportunidad y extensión de pruebas. En suma, no hay opinión válida sin evidencia robusta; no hay evidencia robusta sin planeación basada en riesgos; y no hay planeación eficaz sin independencia y comprensión profunda de la entidad y su entorno.",
        },
        {
          type: "paragraph",
          text: "El contador público auditor cumple un rol técnico y ético: planifica el trabajo identificando áreas significativas, evalúa el control interno para calibrar riesgos, diseña y ejecuta procedimientos (pruebas de controles y sustantivas), obtiene evidencia apropiada y suficiente, y concluye emitiendo una opinión debidamente fundamentada. Además, comunica debilidades relevantes del control (cuando corresponda) y formula recomendaciones de mejora sin invadir funciones de gestión, preservando su independencia. En la práctica, esto supone construir programas de auditoría alineados al modelo de riesgos, seleccionar muestras representativas, aplicar confirmaciones externas, observaciones físicas, recalculos y analítica sustantiva, y documentar hallazgos con trazabilidad. La ética profesional —integridad, objetividad, competencia y debido cuidado, confidencialidad y comportamiento profesional— no es decorativa: es la condición de posibilidad para que el informe sea creíble. El resultado final, la opinión, sintetiza un proceso disciplinado, evidenciado y revisable.",
        },
        {
          type: "paragraph",
          text: "El enfoque basado en riesgos es la columna vertebral de la auditoría contemporánea. El riesgo de auditoría (RA) se descompone en riesgo inherente (RI), riesgo de control (RC) y riesgo de detección (RD): RA = RI × RC × RD. Primero, el auditor comprende el negocio, su estrategia, procesos clave y entorno normativo para identificar dónde podrían originarse errores materiales. Luego valora la eficacia del control interno para modular la naturaleza y la extensión de las pruebas. Finalmente, diseña respuestas: si el riesgo es alto, incrementa pruebas sustantivas de detalle, combina procedimientos y ajusta la oportunidad (por ejemplo, pruebas a la fecha de cierre). La documentación conecta cada riesgo con los procedimientos aplicados y las conclusiones derivadas. La consecuencia pedagógica es clara: aprender auditoría es aprender a pensar en términos de riesgo y evidencia. Sin esta lógica, la auditoría deviene un checklist ineficaz; con ella, se convierte en un instrumento robusto de aseguramiento.",
        },
        {
          type: "accordion",
          header: "Guía rápida (mapa mental en tres capas)",
          open: false,
          items: [
            {
              header: "Capa 1 — Conceptos nucleares",
              text: "Objetivo: aumentar la confianza de usuarios. Seguridad razonable, no absoluta. Opinión sobre razonabilidad conforme a marco contable. Tipologías: por finalidad (financiera/operativa/cumplimiento), por origen (interna/externa) y por alcance (integral/específica). Ética: integridad, objetividad, competencia, confidencialidad y comportamiento profesional. Escepticismo y juicio profesional como hilo conductor.",
            },
            {
              header: "Capa 2 — Ruta del encargo (de punta a punta)",
              text: "Planeación → Entendimiento y riesgos → Materialidad → Respuesta (pruebas de control y sustantivas) → Evaluación de hallazgos → Conclusiones y comunicación → Opinión. Documentación que vincula riesgos ↔ procedimientos ↔ evidencia ↔ conclusión.",
            },
            {
              header: "Capa 3 — Claves de validez y calidad",
              text: "Independencia de fondo y apariencia; evidencia suficiente y competente; trazabilidad documental; alineación a NIA; consistencia entre riesgos identificados y pruebas ejecutadas; claridad y oportunidad en comunicaciones sobre debilidades de control y ajustes propuestos.",
            },
          ],
        },
      ],
      subthemes: [
        /* 1.1 */
        {
          id: "1.1",
          numbering: "1.1",
          title: "Concepto, objetivo y marco normativo",
          content: [
            {
              type: "paragraph",
              text: "La auditoría de estados financieros es un encargo de aseguramiento cuyo objetivo es incrementar el grado de confianza de los usuarios sobre la información presentada por la entidad. Esto se logra mediante la emisión de una opinión profesional, formulada con base en evidencia suficiente y adecuada, respecto de si los estados financieros están preparados conforme al marco de información financiera aplicable. La NIA 200 articula los objetivos globales del auditor, las responsabilidades éticas y la necesidad de escepticismo profesional y juicio profesional a lo largo de todo el trabajo, dejando claro que el aseguramiento alcanzable es razonable y no absoluto por las limitaciones inherentes al proceso. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "Desde una perspectiva metodológica, el encargo exige una planeación eficaz, la comprensión del negocio y de su entorno, la identificación y valoración de riesgos de incorrección material y el diseño de respuestas de auditoría consistentes con tales riesgos. La planeación, a su vez, orienta la asignación de recursos, la naturaleza, oportunidad y extensión de los procedimientos, y la coordinación del equipo. La evidencia obtenida debe ser competente (fiable) y suficiente (en cantidad) en relación con la materialidad y el riesgo, para sustentar conclusiones que permitan al auditor expresar una opinión conforme a las NIA 700 y relacionadas. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "accordion",
              header: "Guía rápida — objetivo, alcance y límites",
              open: false,
              items: [
                {
                  header: "Objetivo (NIA 200)",
                  text: "Aumentar la confianza de los usuarios mediante una opinión sobre la razonabilidad de los estados financieros. Implica escepticismo y juicio profesional continuos. :contentReference[oaicite:2]{index=2}",
                },
                {
                  header: "Alcance",
                  text: "Examen basado en riesgos; incluye pruebas de control y sustantivas según la valoración de riesgos y materialidad; no proporciona certeza absoluta. :contentReference[oaicite:3]{index=3}",
                },
                {
                  header: "Límites",
                  text: "Controles internos imperfectos, uso de muestreo, juicios contables y restricciones de tiempo/costo impiden garantía total; el aseguramiento es razonable. :contentReference[oaicite:4]{index=4}",
                },
              ],
            },
            {
              type: "paragraph",
              text: "El marco normativo de referencia comprende, en lo técnico, las Normas Internacionales de Auditoría emitidas por el IAASB (NIA 200, 300, 315, 500, 700, entre otras) y, en lo ético, el Código Internacional de Ética del IESBA (integridad, objetividad, competencia y debido cuidado, confidencialidad y comportamiento profesional). Estas fuentes establecen requisitos y orientaciones que gobiernan la independencia (de mente y de apariencia), la evaluación de amenazas y salvaguardas, y la conducta profesional que preserva el interés público. :contentReference[oaicite:5]{index=5}",
            },
            {
              type: "paragraph",
              text: "La justificación económica y social de la auditoría se comprende también a la luz de teorías como la de credibilidad, agencia y señalización, que explican cómo la opinión del auditor reduce asimetrías de información, disciplina conductas y agrega valor reputacional. En consecuencia, la función del auditor trasciende la detección de fraude: se centra en obtener seguridad razonable sobre la ausencia de errores materiales y en comunicar resultados con transparencia, claridad y fundamento técnico, contribuyendo a la calidad de la información y a la toma de decisiones de los usuarios. :contentReference[oaicite:6]{index=6}",
            },
            {
              type: "paragraph",
              text: "El trabajo práctico se estructura en fases: planeación (definir estrategia y programa), ejecución (aplicar pruebas de controles y sustantivas) y conclusión/comunicación (evaluación de hallazgos, materialidad de incorrecciones no corregidas y emisión del informe). A lo largo de estas fases, el auditor documenta su comprensión del negocio, los riesgos identificados, los procedimientos aplicados y las conclusiones alcanzadas, cumpliendo con los requerimientos de documentación que respaldan la calidad del encargo y la trazabilidad del juicio profesional ejercido. :contentReference[oaicite:7]{index=7}",
            },
            {
              type: "accordion",
              header: "Mapa mental — del riesgo a la opinión",
              open: false,
              items: [
                {
                  header: "Entrada",
                  text: "Entorno y marco contable → comprensión de la entidad y su control interno → definición de materialidad. :contentReference[oaicite:8]{index=8}",
                },
                {
                  header: "Proceso",
                  text: "Identificar/valorar riesgos (NIA 315) → respuesta de auditoría (NIA 330) → evidencia suficiente y competente (NIA 500). :contentReference[oaicite:9]{index=9}",
                },
                {
                  header: "Salida",
                  text: "Evaluación final, incorrecciones no corregidas, comunicación con los encargados del gobierno y dictamen (NIA 700). :contentReference[oaicite:10]{index=10}",
                },
              ],
            },
          ],
          subthemes: [
            {
              id: "1.1.1",
              numbering: "1.1.1",
              title: "Objetivo y alcance según NIA 200",
              content: [
                {
                  type: "paragraph",
                  text: "La NIA 200 define el objetivo global del auditor independiente: aumentar el grado de confianza de los usuarios en los estados financieros mediante la expresión de una opinión sobre si se encuentran preparados, en todos los aspectos materiales, de conformidad con el marco de información financiera aplicable. Este objetivo se persigue obteniendo seguridad razonable —no absoluta— debido a limitaciones inherentes como el uso de muestreo, la naturaleza persuasiva (no concluyente) de la evidencia y la presencia de juicios contables. El alcance abarca la planificación del encargo, la obtención de comprensión de la entidad y su entorno, la identificación y valoración de riesgos de incorrección material, el diseño y ejecución de respuestas de auditoría, y la formación de una conclusión sustentada en evidencia suficiente y competente, culminando en la emisión del informe conforme a la NIA 700. :contentReference[oaicite:11]{index=11}",
                },
                {
                  type: "paragraph",
                  text: "El estándar exige escepticismo profesional continuo para reconocer la posibilidad de incorrección material por fraude o error y para evaluar críticamente la evidencia obtenida. El auditor debe ejercer juicio profesional al decidir la naturaleza, oportunidad y extensión de los procedimientos, al determinar la materialidad y al evaluar la razonabilidad de las estimaciones contables. La NIA 200 también vincula el objetivo con el cumplimiento de requerimientos éticos pertinentes, destacando la independencia (de mente y apariencia) y los principios del Código del IESBA: integridad, objetividad, competencia y debido cuidado, confidencialidad y comportamiento profesional. Estas condiciones son sine qua non para que la opinión goce de credibilidad ante terceros y resguarde el interés público. :contentReference[oaicite:12]{index=12}",
                },
                {
                  type: "accordion",
                  header: "Claves operativas del alcance (checklist)",
                  open: false,
                  items: [
                    {
                      header: "Planeación y estrategia",
                      text: "Definir estrategia global y programa detallado; asignar recursos; establecer materialidad; coordinar equipo y especialistas. :contentReference[oaicite:13]{index=13}",
                    },
                    {
                      header: "Riesgos y respuesta",
                      text: "Comprensión del negocio y controles (NIA 315) → respuesta de auditoría (NIA 330) ajustada a riesgos significativos. :contentReference[oaicite:14]{index=14}",
                    },
                    {
                      header: "Conclusión e informe",
                      text: "Evaluar evidencia, incorrecciones no corregidas y comunicación con gobierno corporativo; emitir opinión (NIA 700). :contentReference[oaicite:15]{index=15}",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "La seguridad razonable se soporta en un diseño de trabajo proporcional al riesgo. En áreas de alto riesgo —por ejemplo, reconocimiento de ingresos o estimaciones complejas— se incrementa la extensión y la precisión de los procedimientos sustantivos (pruebas de detalle, confirmaciones externas, procedimientos analíticos sustantivos robustos) y se evalúa la eficacia de controles relevantes. En áreas de menor riesgo, la evidencia puede ser más analítica y menos intensiva. Esta asignación diferenciada de esfuerzos, coherente con la materialidad, optimiza la eficiencia y fortalece la probabilidad de detectar incorrecciones materiales. :contentReference[oaicite:16]{index=16}",
                },
                {
                  type: "paragraph",
                  text: "El alcance incluye, además, responsabilidades de comunicación: con los encargados del gobierno de la entidad sobre asuntos significativos de auditoría, deficiencias de control interno que merecen atención y, cuando proceda, con autoridades regulatorias. En todos los casos, la documentación es la columna vertebral del encargo: registra la base del juicio, la oportunidad y extensión de pruebas, y las conclusiones. Sin evidencia documentada, no hay evidencia de calidad del trabajo ni base defendible para la opinión. :contentReference[oaicite:17]{index=17}",
                },
                {
                  type: "accordion",
                  header:
                    "Mapa mental — seguridad razonable ≠ certeza absoluta",
                  open: false,
                  items: [
                    {
                      header: "Limitaciones",
                      text: "Muestreo; juicio; controles no infalibles; colusión; restricciones de tiempo; evidencia persuasiva. :contentReference[oaicite:18]{index=18}",
                    },
                    {
                      header: "Mitigaciones",
                      text: "Planificación, enfoque basado en riesgos, materialidad, combinación de pruebas, escepticismo y supervisión. :contentReference[oaicite:19]{index=19}",
                    },
                    {
                      header: "Resultado",
                      text: "Opinión fundamentada que incrementa la confianza de los usuarios en la información financiera. :contentReference[oaicite:20]{index=20}",
                    },
                  ],
                },
              ],
            },
            {
              id: "1.1.2",
              numbering: "1.1.2",
              title: "Limitaciones y aseguramiento razonable",
              content: [
                {
                  type: "paragraph",
                  text: "El aseguramiento razonable es el máximo nivel de seguridad alcanzable en una auditoría de estados financieros; es alto pero no absoluto. Esta naturaleza deriva de limitaciones inherentes: el empleo de muestreo, la posibilidad de colusión y override de controles, la materialidad como umbral práctico, la naturaleza persuasiva de gran parte de la evidencia y la existencia de estimaciones contables sujetas a incertidumbre. Por ello, aun una auditoría bien planificada y ejecutada puede no detectar algunas incorrecciones materiales. El auditor mitiga estas limitaciones mediante un enfoque basado en riesgos, la combinación de pruebas de control y sustantivas y el mantenimiento de escepticismo profesional a lo largo del encargo. :contentReference[oaicite:21]{index=21}",
                },
                {
                  type: "paragraph",
                  text: "La gestión adecuada de la materialidad permite focalizar esfuerzos donde la probabilidad e impacto de error son mayores; a su vez, el juicio profesional del auditor calibra la naturaleza, oportunidad y extensión de los procedimientos. En estimaciones sujetas a alta incertidumbre —p. ej., deterioro de activos, provisiones, instrumentos financieros complejos— se requieren procedimientos reforzados: pruebas de modelos y supuestos, datos externos, técnicas analíticas avanzadas o uso de especialistas. La documentación debe demostrar cómo esas decisiones responden a riesgos identificados y cómo la evidencia obtenida respalda la conclusión de que el riesgo de auditoría se ha reducido a un nivel aceptablemente bajo. :contentReference[oaicite:22]{index=22}",
                },
                {
                  type: "accordion",
                  header: "Límites típicos y respuestas del auditor",
                  open: false,
                  items: [
                    {
                      header: "Muestreo y selección",
                      text: "Riesgo de no seleccionar partidas con error → aumentar tamaño de muestra o cambiar enfoque (dirigido a riesgos). :contentReference[oaicite:23]{index=23}",
                    },
                    {
                      header: "Colusión/override",
                      text: "Controles pueden ser burlados por gerencia → pruebas impredecibles, confirmaciones externas, procedimientos forenses. :contentReference[oaicite:24]{index=24}",
                    },
                    {
                      header: "Evidencia persuasiva",
                      text: "Corroborar con múltiples fuentes; preferir evidencia externa a interna cuando sea viable. :contentReference[oaicite:25]{index=25}",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "El escepticismo profesional —una actitud de alerta y mente inquisitiva— opera como salvaguarda frente a sesgos de anclaje, confirmación o exceso de confianza. Impulsa al auditor a considerar la posibilidad de fraude, a evaluar la consistencia entre fuentes de evidencia y a diseñar procedimientos alternativos cuando la explicación de la administración sea insuficiente. Igualmente, la independencia —de mente y en apariencia— preserva la objetividad del juicio y la credibilidad de la opinión. La combinación de escepticismo e independencia es el cimiento práctico del aseguramiento razonable. :contentReference[oaicite:26]{index=26}",
                },
                {
                  type: "paragraph",
                  text: "En la comunicación con los encargados del gobierno de la entidad, el auditor debe transparentar las limitaciones inherentes, el concepto de materialidad y el alcance realista del encargo. Esta comunicación alinea expectativas (cierra la brecha expectativa-desempeño), facilita la comprensión de las decisiones tomadas y contribuye a que la administración remedie deficiencias de control interno que incrementan el riesgo. Así, aun cuando el aseguramiento razonable no sea una garantía, el proceso disciplinado de auditoría crea valor al mejorar controles, calidad de información y gobernanza. :contentReference[oaicite:27]{index=27}",
                },
                {
                  type: "accordion",
                  header: "Mapa mental — de la limitación a la transparencia",
                  open: false,
                  items: [
                    {
                      header: "Identificar",
                      text: "¿Qué limita el trabajo? Muestreo, juicios, controles débiles, complejidad. :contentReference[oaicite:28]{index=28}",
                    },
                    {
                      header: "Responder",
                      text: "Procedimientos adicionales, especialistas, evidencia externa, imprevisibilidad. :contentReference[oaicite:29]{index=29}",
                    },
                    {
                      header: "Comunicar",
                      text: "Explicar materialidad, alcance y hallazgos a gobierno corporativo; documentar racional. :contentReference[oaicite:30]{index=30}",
                    },
                  ],
                },
              ],
            },
            {
              id: "1.1.3",
              numbering: "1.1.3",
              title: "Marco de información financiera aplicable",
              content: [
                {
                  type: "paragraph",
                  text: "El marco de información financiera aplicable (MIFA) es el conjunto de principios, normas y criterios que la entidad utiliza para preparar sus estados financieros (por ejemplo, NIIF/IFRS, NIF mexicanas u otro marco regulatorio). La NIA 200 exige que el auditor determine la aceptabilidad del MIFA atendiendo a la finalidad de los estados, las necesidades de los usuarios y la normativa vigente. Esta evaluación guía la identificación de áreas susceptibles de incorrección material: políticas contables complejas, estimaciones significativas, revelaciones obligatorias y consistencia en la aplicación de criterios. Un entendimiento sólido del MIFA es imprescindible para juzgar la razonabilidad de las cifras y de la presentación y revelación del reporte financiero. :contentReference[oaicite:31]{index=31}",
                },
                {
                  type: "paragraph",
                  text: "La aceptabilidad del marco se juzga por su relevancia, fiabilidad, neutralidad y comprensibilidad, así como por la integridad de las revelaciones exigidas. Si el marco es de propósito general, el auditor evalúa si refleja de forma fidedigna la situación financiera, rendimiento y flujos de efectivo. En marcos de propósito especial —p. ej., bases fiscales o contractuales— se incrementa la importancia de revelar el propósito, las bases de preparación y las limitaciones de uso. El auditor también verifica la consistencia interperiodo y la adecuación de políticas contables, advirtiendo cambios que requieran reexpresión o revelación. :contentReference[oaicite:32]{index=32}",
                },
                {
                  type: "accordion",
                  header: "Puntos críticos al evaluar el MIFA",
                  open: false,
                  items: [
                    {
                      header: "Políticas y estimaciones",
                      text: "Elección/mantenimiento de políticas; estimaciones con alta incertidumbre (deterioros, provisiones, instrumentos financieros). :contentReference[oaicite:33]{index=33}",
                    },
                    {
                      header: "Revelaciones",
                      text: "Integridad y claridad de notas: juicios clave, riesgos, partes relacionadas, contingencias, eventos subsecuentes. :contentReference[oaicite:34]{index=34}",
                    },
                    {
                      header: "Consistencia",
                      text: "Aplicación uniforme entre periodos; tratamiento de cambios contables y corrección de errores. :contentReference[oaicite:35]{index=35}",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "El entendimiento del MIFA se integra en la valoración de riesgos (NIA 315) y en la selección de procedimientos sustantivos (NIA 330). Por ejemplo, bajo NIIF, la medición a valor razonable introduce riesgos de estimación que demandan pruebas sobre la fuente de datos, la metodología y los supuestos clave. Bajo NIF con costo histórico, el énfasis puede desplazarse a deterioros, vida útil y depreciaciones. En ambos casos, el auditor debe evaluar si la presentación es fiel, si las revelaciones cumplen el marco y si la información es suficiente para que los usuarios comprendan la naturaleza y riesgos de las partidas. :contentReference[oaicite:36]{index=36}",
                },
                {
                  type: "paragraph",
                  text: "Cuando el MIFA resulta inaceptable para el propósito de los estados financieros, o su aplicación es inadecuada, el auditor considera las implicaciones para el informe: desde la modificación de opinión por incorrección material hasta la abstención cuando el efecto potencial es generalizado y la evidencia es insuficiente. Asimismo, si existen limitaciones en el uso del marco (p. ej., estados preparados para un financiador específico), el auditor evalúa la inclusión de párrafos de énfasis y otras comunicaciones necesarias para evitar interpretaciones erróneas por parte de los usuarios. :contentReference[oaicite:37]{index=37}",
                },
                {
                  type: "accordion",
                  header:
                    "Mapa mental — MIFA → riesgos → procedimientos → opinión",
                  open: false,
                  items: [
                    {
                      header: "MIFA",
                      text: "Identificar marco (NIIF/NIF/otro) y su aceptabilidad. :contentReference[oaicite:38]{index=38}",
                    },
                    {
                      header: "Riesgos",
                      text: "Derivados de políticas, estimaciones y revelaciones clave. :contentReference[oaicite:39]{index=39}",
                    },
                    {
                      header: "Respuesta y reporte",
                      text: "Pruebas dirigidas; evaluar presentación/revelación; determinar tipo de opinión y párrafos adicionales. :contentReference[oaicite:40]{index=40}",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* 1.2 */
        {
          id: "1.2",
          numbering: "1.2",
          title: "Alcance y tipologías de auditoría",
          content: [
            {
              type: "paragraph",
              text: "Al clasificar los encargos de auditoría por finalidad, origen y alcance se obtiene un mapa operativo que orienta el propósito, el público destinatario y la profundidad de las pruebas. Esta taxonomía no es meramente académica: condiciona la determinación de la materialidad, el modelo de riesgos, la selección de procedimientos y la forma del informe. En la planificación, el equipo debe explicitar qué se pretende asegurar (razonabilidad de estados financieros, eficiencia de procesos o cumplimiento normativo), quién ejecuta el trabajo (auditor interno o externo) y cuán amplia será la cobertura (integral o específica). La claridad sobre estos tres ejes alinea expectativas con la dirección y los usuarios externos, evita malentendidos sobre el nivel de aseguramiento y optimiza recursos, al concentrar pruebas donde el riesgo es más alto y el beneficio informativo es mayor para la toma de decisiones.",
            },
            {
              type: "paragraph",
              text: "Por su finalidad, distinguimos tres grandes familias. La auditoría financiera busca emitir una opinión profesional sobre si los estados financieros, en su conjunto, están preparados conforme al marco aplicable; centra su análisis en riesgos de incorrección material por fraude o error y en las aserciones de existencia, integridad, valuación, presentación, y derechos y obligaciones. La auditoría operativa evalúa eficacia, eficiencia y economía de procesos, con métricas de desempeño y recomendaciones de mejora; suele ser liderada por auditoría interna y se apoya en observación, entrevistas y análisis de indicadores. La auditoría de cumplimiento contrasta transacciones y conductas con leyes, regulaciones o políticas contractuales, documentando desviaciones y acciones correctivas para mitigar sanciones, contingencias y daños reputacionales, especialmente en sectores altamente regulados.",
            },
            {
              type: "paragraph",
              text: "Por su origen, la auditoría puede ser interna o externa. La función interna, con independencia funcional respecto de la administración y reporte al Consejo o Comité de Auditoría, aporta conocimiento del negocio, cobertura continua y verificación de la eficacia del sistema de control interno y gestión de riesgos. La auditoría externa, realizada por profesionales independientes, se rige por normas de ética y de auditoría, mantiene escepticismo profesional y emite una opinión dirigida primordialmente a terceros (inversionistas, acreedores, reguladores). Una coordinación madura entre ambas —sin menoscabo de la responsabilidad exclusiva del auditor externo por su opinión— reduce duplicidades, mejora la cobertura de riesgos y fortalece la gobernanza bajo el modelo de “tres líneas”, asignando roles nítidos a gestión, control y aseguramiento.",
            },
            {
              type: "paragraph",
              text: "Por su alcance, el encargo puede ser integral o específico. Un alcance integral aborda de forma coordinada dominios financieros, operativos y de cumplimiento, con equipos multidisciplinarios y una matriz de riesgos holística que conecta procesos habilitadores (p. ej., TI y compras) con efectos en la información financiera y las obligaciones regulatorias. Un alcance específico se concentra en un rubro, proceso o norma concreta —inventarios, ingresos, nómina, cibercontroles, prevención de lavado— con mayor profundidad, densidad de muestreo y entregables focalizados. La elección depende del apetito de riesgo, de la criticidad del proceso, de la materialidad y del contexto (transformaciones tecnológicas, reorganizaciones, nuevas regulaciones), y debe documentarse en la carta de encargo y en el plan de auditoría.",
            },
            {
              type: "paragraph",
              text: "Operativamente, la combinación de finalidad–origen–alcance determina criterios de evaluación, universo de prueba, técnicas de muestreo, evidencia requerida y formato de reporte. Así, una auditoría financiera externa y específica sobre ingresos exigirá pruebas sustantivas y de controles sobre corte, existencia y validez de CFDI; una auditoría operativa interna integral priorizará indicadores de desempeño, walkthroughs y pruebas de diseño/efectividad de controles; una auditoría de cumplimiento específica revisará trazabilidad documental y tipologías de incumplimiento. En todos los casos, conviene establecer materialidad (monetaria u operativa), matriz de riesgos, procedimientos por aserción o criterio, y un plan de comunicación de hallazgos con responsables y plazos de remediación, asegurando transparencia, trazabilidad y utilidad para la toma de decisiones.",
            },

            {
              type: "accordion",
              header: "Guía rápida de tipologías y decisiones de alcance",
              open: false,
              items: [
                {
                  header: "Finalidad (¿qué asegurar?)",
                  text: "Financiera: opinión sobre estados; Operativa: eficacia/eficiencia; Cumplimiento: observancia normativa/contractual.",
                },
                {
                  header: "Origen (¿quién audita?)",
                  text: "Interna: mejora y monitoreo continuo, reporte al Comité; Externa: aseguramiento independiente para terceros.",
                },
                {
                  header: "Alcance (¿hasta dónde?)",
                  text: "Integral: visión holística con equipos mixtos; Específica: foco profundo en rubros/procesos de mayor riesgo.",
                },
              ],
            },
          ],
          subthemes: [
            /* 1.2.1 Por su finalidad */
            {
              id: "1.2.1",
              numbering: "1.2.1",
              title:
                "Por su finalidad: financiera, operativa y de cumplimiento",
              content: [
                {
                  type: "paragraph",
                  text: "La clasificación por finalidad identifica la razón inmediata que persigue cada encargo: emitir una opinión sobre estados financieros (auditoría financiera), valorar la eficiencia/eficacia de procesos (auditoría operativa) o verificar observancia normativa (auditoría de cumplimiento). Esta tipología orienta objetivos, criterios, evidencia y el tipo de conclusiones, de modo que el auditor define desde el planeamiento qué riesgos son relevantes, qué aserciones probar y qué procedimientos son pertinentes. En auditoría financiera, la materialidad monetaria y el riesgo de incorrección material gobiernan el alcance; en la operativa, dominan métricas de desempeño y economía; mientras que, en cumplimiento, la norma aplicable y los hechos constitutivos de infracción marcan el compás. La correcta distinción evita expectativas erróneas del usuario y mejora la calidad del informe.",
                },
                {
                  type: "paragraph",
                  text: "En auditoría financiera, el objetivo es opinar si los estados están preparados conforme al marco de información financiera aplicable, con aseguramiento razonable y enfoque en riesgos de incorrección material. Se privilegian pruebas sustantivas y de controles sobre aserciones de existencia, integridad, valuación, presentación y derechos/obligaciones. La evidencia proviene de confirmaciones externas, recálculos, observación de inventarios, análisis analíticos y pruebas de detalle, entre otras. El dictamen resultante interesa a terceros (inversionistas, bancos y reguladores) porque incrementa la confiabilidad del reporte anual y habilita decisiones económicas informadas. :contentReference[oaicite:0]{index=0}",
                },
                {
                  type: "paragraph",
                  text: "La auditoría operativa indaga si la organización hace “lo correcto” y “de la manera correcta”. Examina procesos, indicadores clave (tiempos de ciclo, costos unitarios, desperdicio), controles operativos y la alineación con políticas internas. Suele realizarla auditoría interna y puede culminar en hallazgos con recomendaciones de mejora y planes de acción verificables. Su éxito depende de la combinación de evidencia documental (procedimientos, reportes de desempeño), observación en sitio, entrevistas y pruebas de walkthrough. El valor para la dirección es doble: mitiga riesgos de desempeño y revela oportunidades de eficiencia que repercuten en la rentabilidad y en la satisfacción del cliente. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "La auditoría de cumplimiento contrasta conductas, registros y transacciones con leyes y regulaciones (fiscales, laborales, ambientales, de prevención de lavado, entre otras) o con obligaciones contractuales. Aquí, la evidencia se centra en autorizaciones, permisos, reportes regulatorios, contratos y trazabilidad documental. El resultado puede ser una conclusión de cumplimiento, con observaciones de incumplimiento y recomendaciones correctivas. En sectores altamente regulados, estas auditorías son críticas para evitar sanciones, contingencias y daño reputacional. En entornos públicos, además, respaldan la rendición de cuentas y la transparencia, reforzando la confianza de la ciudadanía en la gestión de recursos. :contentReference[oaicite:2]{index=2}",
                },
                {
                  type: "paragraph",
                  text: "La elección de finalidad no es excluyente: un encargo puede combinar matices (p. ej., una revisión financiera con pruebas de cumplimiento tributario o de control operativo en inventarios). No obstante, es esencial documentar en carta de encargo el objetivo, el marco y el tipo de informe, alineando expectativas y delimitando responsabilidades. Asimismo, la finalidad condiciona la materialidad (monetaria u operacional), la naturaleza y oportunidad de procedimientos, y la forma del reporte (opinión, informe de hallazgos o conclusiones de cumplimiento). Esta claridad metodológica fortalece la gobernanza y la utilidad del trabajo para quienes toman decisiones. :contentReference[oaicite:3]{index=3}",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Guía rápida por finalidad",
                  open: false,
                  items: [
                    {
                      header: "Financiera",
                      text: "Opinión sobre razonabilidad de estados financieros; materialidad monetaria; pruebas sustantivas y de controles; usuarios externos clave.",
                    },
                    {
                      header: "Operativa",
                      text: "Eficiencia/eficacia; métricas de desempeño; recomendaciones de mejora; foco en controles del proceso.",
                    },
                    {
                      header: "Cumplimiento",
                      text: "Observancia de leyes y políticas; contraste normativo; evidencia documental; mitigación de sanciones.",
                    },
                  ],
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Riesgos típicos y evidencias",
                  open: false,
                  items: [
                    {
                      header: "Financiera",
                      text: "Riesgo de incorrección material por fraude o error; confirmaciones externas, recálculos, corte de operaciones.",
                    },
                    {
                      header: "Operativa",
                      text: "Riesgos de proceso (cuellos de botella, reprocesos); observación directa, análisis de tiempos y costos.",
                    },
                    {
                      header: "Cumplimiento",
                      text: "Riesgos sancionatorios; revisión de expedientes regulados, permisos, declaraciones y contratos.",
                    },
                  ],
                },
              ],
            },

            /* 1.2.2 Por su origen */
            {
              id: "1.2.2",
              numbering: "1.2.2",
              title: "Por su origen: auditoría interna y externa",
              content: [
                {
                  type: "paragraph",
                  text: "La distinción por origen se refiere a quién ejecuta el encargo y para qué audiencia se emite el informe. La auditoría interna, dependiente de la organización, evalúa y mejora la eficacia de gestión de riesgos, control y gobierno; reporta al Consejo o al Comité de Auditoría, con independencia funcional. La auditoría externa, realizada por un profesional independiente, emite una opinión dirigida a terceros sobre estados financieros. La interacción entre ambas es complementaria: la interna aporta conocimiento del negocio y monitoreo continuo; la externa brinda credibilidad independiente y disciplina metodológica.",
                },
                {
                  type: "paragraph",
                  text: "Auditoría interna: su misión se centra en crear valor y mejorar las operaciones. Planifica de forma basada en riesgos corporativos, cubre procesos clave (finanzas, operaciones, TI, cumplimiento) y prioriza auditorías temáticas. Sus productos típicos son informes de hallazgos con matriz de riesgos, calificación de control, responsables y plazos de remediación. Requiere independencia organizacional y acceso irrestricto a información; su eficacia depende de un estatuto aprobado por el Consejo y del seguimiento sistemático de acciones correctivas.",
                },
                {
                  type: "paragraph",
                  text: "Auditoría externa: el auditor independiente debe cumplir requisitos de ética e independencia, aplicar Normas Internacionales de Auditoría, determinar materialidad y riesgo, y diseñar procedimientos suficientes para sustentar su opinión. La calidad del encargo se apoya en el control de calidad del despacho, la revisión de engagement, el escepticismo profesional y la documentación rigurosa. Su informe incrementa la confianza de inversionistas, acreedores y reguladores, facilitando acceso a financiamiento y comparabilidad.",
                },
                {
                  type: "paragraph",
                  text: "En la práctica, el auditor externo puede apoyarse en el trabajo de auditoría interna cuando su objetividad y competencia son adecuadas, y cuando la cobertura y la calidad del trabajo interno satisfacen las NIA. Esta sinergia evita duplicidades, optimiza tiempos y costos, y mejora la cobertura de riesgos, siempre que el auditor externo mantenga responsabilidad exclusiva por su opinión y re-performance selectivo sobre áreas significativas.",
                },
                {
                  type: "paragraph",
                  text: "Un esquema de gobernanza robusto define líneas claras: el Consejo/Comité de Auditoría supervisa tanto a la función interna como la relación con el auditor externo; la administración ejecuta controles y atiende hallazgos; los auditores reportan con transparencia. Esta arquitectura de “tres líneas” fortalece el sistema de control interno y la rendición de cuentas. :contentReference[oaicite:4]{index=4}",
                },

                {
                  type: "accordion",
                  header: "Mapa: roles y reportes",
                  open: false,
                  items: [
                    {
                      header: "Auditoría interna",
                      text: "Cliente: Consejo/Comité; producto: informes de hallazgos y seguimiento; foco: mejora continua y riesgos.",
                    },
                    {
                      header: "Auditoría externa",
                      text: "Cliente: terceros (mercado/regulador); producto: dictamen; foco: razonabilidad de estados financieros.",
                    },
                    {
                      header: "Coordinación",
                      text: "Reuniones de planificación, intercambio de matrices de riesgo, evaluación de uso del trabajo interno por el externo.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Claves de independencia",
                  open: false,
                  items: [
                    {
                      header: "Interna",
                      text: "Independencia funcional; acceso irrestricto; estatuto aprobado por el Consejo; rotación de jefatura.",
                    },
                    {
                      header: "Externa",
                      text: "Independencia de hecho y de apariencia; salvaguardas frente a amenazas (autorrevisión, interés propio, familiaridad).",
                    },
                    {
                      header: "Ética",
                      text: "Integridad, objetividad, competencia profesional, confidencialidad y comportamiento profesional (IESBA).",
                    },
                  ],
                },
              ],
            },

            /* 1.2.3 Por su alcance */
            {
              id: "1.2.3",
              numbering: "1.2.3",
              title: "Por su alcance: integral vs. específica",
              content: [
                {
                  type: "paragraph",
                  text: "El criterio por alcance delimita la cobertura del encargo: una auditoría integral revisa, de manera coordinada, ámbitos financieros, operativos y de cumplimiento; una auditoría específica profundiza en un proceso, rubro o área concreta (p. ej., inventarios, ingresos, TI, nómina). La decisión se fundamenta en el apetito de riesgo, la criticidad de procesos y la materialidad. En ambos casos, el planeamiento debe explicitar objetivos, alcance, criterios de evaluación, universo de prueba y la combinación de procedimientos para obtener evidencia suficiente y apropiada.",
                },
                {
                  type: "paragraph",
                  text: "La auditoría integral exige una matriz de riesgos holística que conecte estados financieros con procesos habilitadores y obligaciones regulatorias. Integra equipos multidisciplinarios (finanzas, operaciones, TI, fiscal) y secuencia pruebas para evitar duplicidad: primero controles generales, luego pruebas sustantivas focalizadas. El informe presenta hallazgos por dominio, su calificación y las interdependencias (p. ej., un control deficiente de TI que afecta integridad de ventas y cumplimiento fiscal). Su beneficio es ofrecer una visión sistémica para priorizar iniciativas de control. :contentReference[oaicite:5]{index=5}",
                },
                {
                  type: "paragraph",
                  text: "La auditoría específica se concentra en riesgos clave de un área, alcanzando mayor profundidad y densidad de muestreo. Ejemplos: pruebas de valuación y obsolescencia de inventarios; conciliaciones de ingresos y corte; segregación de funciones en pagos; o revisión de cumplimiento de una norma puntual. El resultado es un conjunto de hallazgos accionables y un plan de remediación focalizado, con indicadores de logro y fechas objetivo. La especificidad minimiza costos y tiempos cuando el riesgo está bien acotado.",
                },
                {
                  type: "paragraph",
                  text: "La selección entre integral y específica debe considerar el ciclo de auditoría plurianual, el calendario regulatorio y la madurez del control interno. Organizaciones con funciones de control maduras se benefician de auditorías específicas iterativas que profundizan en áreas de mayor volatilidad; mientras que contextos de cambio acelerado (transformación digital, fusiones, entrada a mercados regulados) justifican auditorías integrales que recalibran la exposición total.",
                },
                {
                  type: "paragraph",
                  text: "Independientemente del alcance, el auditor documenta criterios, universo y metodología; comunica limitaciones y, cuando corresponda, restricciones de uso del informe. Esta transparencia mejora la interpretabilidad de hallazgos y evita extrapolaciones indebidas. Al explicitar alcance y límites, se alinea la expectativa del usuario con el valor real del trabajo y se protege la credibilidad del auditor. :contentReference[oaicite:6]{index=6}",
                },

                {
                  type: "accordion",
                  header: "Elección del alcance (árbol de decisión)",
                  open: false,
                  items: [
                    {
                      header: "¿Riesgo concentrado?",
                      text: "Si está acotado a un proceso/rubro → específica; si es transversal o incierto → integral.",
                    },
                    {
                      header: "¿Recursos y tiempo?",
                      text: "Limitados → específica con muestreo intensivo; suficientes → integral con equipos mixtos.",
                    },
                    {
                      header: "¿Contexto regulatorio?",
                      text: "Cambios normativos amplios → integral; revisión puntual (p. ej., inventarios) → específica.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Entregables y métricas",
                  open: false,
                  items: [
                    {
                      header: "Integral",
                      text: "Mapa de riesgos integrado, hallazgos por dominio, heatmap y plan maestro de remediación.",
                    },
                    {
                      header: "Específica",
                      text: "Hallazgos focalizados, KPIs de mejora (tiempos, costos, reprocesos), evidencias y responsables.",
                    },
                    {
                      header: "Seguimiento",
                      text: "Semáforo de avances, pruebas de re-ejecución y validación de cierres de hallazgos.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* 1.3 */
        {
          id: "1.3",
          numbering: "1.3",
          title: "Principios éticos e independencia",
          content: [
            {
              type: "paragraph",
              text: "La auditoría de estados financieros no descansa solo en técnicas y papeles de trabajo; su legitimidad proviene del marco ético que guía cada decisión del auditor. El Código Internacional de Ética del IESBA y la NIA 200 constituyen los referentes que exigen actuar con integridad, objetividad, competencia profesional con debido cuidado, confidencialidad y comportamiento profesional. Estos principios, además de vincular la labor del auditor con el interés público, marcan límites prácticos: qué aceptar, qué rechazar, cuándo profundizar y cómo comunicar. La ética, en suma, no es un extra normativo: es la condición para que el aseguramiento razonable sea creíble y útil para los usuarios de la información financiera. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "La independencia se expresa en dos planos: mental (de fondo) y en apariencia. La primera exige libertad real frente a influencias o intereses; la segunda evita situaciones que harían dudar a un tercero informado sobre la imparcialidad del auditor. Un ejemplo típico: poseer inversiones en el cliente afecta ambas dimensiones y debe prohibirse. Estas nociones se encuentran en el material base y operan como salvaguarda transversal para todos los principios, en especial la objetividad y el escepticismo profesional, que orientan el juicio en áreas complejas o de alto riesgo. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "paragraph",
              text: "Junto con la independencia, el escepticismo profesional obliga a mantener una actitud de alerta permanente ante errores o fraude, evaluando evidencia con espíritu crítico. En la práctica, esto significa diseñar procedimientos adicionales ante señales inusuales (por ejemplo, facturas del 31 de diciembre) y no conformarse con explicaciones verbales. La NIA 200 (y la NIA 240 para fraude) recalcan que el escepticismo es un principio operativo que impregna toda la auditoría, desde la planificación hasta la formación de la opinión. :contentReference[oaicite:3]{index=3}",
            },
            {
              type: "paragraph",
              text: "La competencia profesional y el debido cuidado exigen mantener conocimientos actualizados y aplicar diligencia técnica proporcional a los riesgos. Si el encargo involucra estimaciones complejas o instrumentos financieros, el auditor debe recurrir a especialistas o reforzar pruebas para asegurar evidencia suficiente y apropiada. El propio material subraya este deber con ejemplos y remisiones expresas a la Sección 113 del IESBA y a la NIA 200 (párrs. 8–9). :contentReference[oaicite:4]{index=4}",
            },
            {
              type: "paragraph",
              text: "Finalmente, la confidencialidad y el comportamiento profesional cierran el círculo: resguardar información obtenida y evitar conductas que desacrediten a la profesión. No divulgar datos salvo deber legal, y jamás ‘suavizar’ hallazgos para complacer a la administración, son reglas que protegen la confianza pública en la auditoría. El incumplimiento ético compromete independencia, acarrea sanciones y erosiona la credibilidad del informe de auditoría. :contentReference[oaicite:5]{index=5} :contentReference[oaicite:6]{index=6}",
            },

            /* Acordeones (2) */
            {
              type: "accordion",
              header: "Mapa rápido de principios (qué exigir en cada etapa)",
              open: false,
              items: [
                {
                  header: "Planeación",
                  text: "Independencia y escepticismo desde el inicio; identificar amenazas y establecer salvaguardas; asignar especialistas cuando la complejidad lo exija. :contentReference[oaicite:7]{index=7}",
                },
                {
                  header: "Ejecución",
                  text: "Competencia y debido cuidado para obtener evidencia suficiente y apropiada; profundizar cuando haya indicios de error o fraude. :contentReference[oaicite:8]{index=8} :contentReference[oaicite:9]{index=9}",
                },
                {
                  header: "Cierre y reporte",
                  text: "Integridad y comportamiento profesional al comunicar hallazgos; confidencialidad y juicio profesional en la redacción del informe. :contentReference[oaicite:10]{index=10}",
                },
              ],
            },
            {
              type: "accordion",
              header: "Checklist de independencia (mental y en apariencia)",
              open: false,
              items: [
                {
                  header: "Conflictos financieros",
                  text: "Sin inversiones, préstamos o vínculos económicos con el cliente o partes relacionadas. :contentReference[oaicite:11]{index=11}",
                },
                {
                  header: "Relaciones personales",
                  text: "Evitar encargos con vínculos familiares o personales relevantes con la entidad auditada. :contentReference[oaicite:12]{index=12}",
                },
                {
                  header: "Salvaguardas",
                  text: "Declaraciones de independencia, rotación de equipo, involucrar revisor de calidad cuando proceda. (Marco IESBA / NIA 220, por remisión del material). :contentReference[oaicite:13]{index=13}",
                },
              ],
            },
          ],

          subthemes: [
            /* 1.3.1 */
            {
              id: "1.3.1",
              numbering: "1.3.1",
              title:
                "Principios: integridad, objetividad, competencia, confidencialidad y comportamiento",
              content: [
                {
                  type: "paragraph",
                  text: "Los principios del IESBA definen el ‘cómo’ del trabajo del auditor. Integridad impone honestidad y veracidad en todas las relaciones; objetividad exige neutralidad libre de prejuicios; competencia y debido cuidado demandan actualización técnica y diligencia; confidencialidad obliga a resguardar información; y el comportamiento profesional requiere cumplir leyes y evitar conductas que desacrediten la profesión. Estas reglas son la base de la confianza pública e iluminan decisiones cotidianas: aceptar o no un encargo, ampliar pruebas, comunicar hallazgos sensibles o manejar información estratégica. :contentReference[oaicite:14]{index=14} :contentReference[oaicite:15]{index=15} :contentReference[oaicite:16]{index=16}",
                },
                {
                  type: "paragraph",
                  text: "Integridad se prueba especialmente al reportar fraudes o incumplimientos: el auditor debe informar sin alterar ni suavizar conclusiones para ‘proteger’ a la entidad. Objetividad, por su parte, se pone a prueba cuando existen incentivos, regalos o presiones para omitir procedimientos; el rechazo a beneficios y la evaluación de conflictos son salvaguardas mínimas. El material que compartiste ofrece ejemplos concretos de ambas tensiones y remite a las secciones 110 (Integridad) y 120 (Objetividad) del IESBA, además de la NIA 200. :contentReference[oaicite:17]{index=17} :contentReference[oaicite:18]{index=18}",
                },
                {
                  type: "paragraph",
                  text: "La competencia y el debido cuidado se materializan en diseñar procedimientos adecuados al riesgo, supervisar al equipo y, cuando sea necesario, involucrar especialistas. En entornos complejos (valuación de instrumentos financieros, modelos actuariales), la diligencia incluye contrastar supuestos con mercado y documentación independiente. El documento base lo ilustra con el ejemplo del especialista cuando el equipo no domina una materia, atando el principio a la calidad del trabajo y al aseguramiento razonable que exige la NIA 200. :contentReference[oaicite:19]{index=19}",
                },
                {
                  type: "paragraph",
                  text: "La confidencialidad protege la reputación de las entidades, el valor de su información y el rol del auditor como tercero confiable. El principio admite excepciones legales (tribunales, reguladores), pero fuera de ellas obliga a restringir el acceso y el uso de datos. Divulgaciones indebidas dañan la confianza del mercado y la percepción de independencia del auditor. El material cita la Sección 114 del IESBA y la guía de la NIA 200 (A18) como soporte. :contentReference[oaicite:20]{index=20}",
                },
                {
                  type: "paragraph",
                  text: "Por último, el comportamiento profesional articula el respeto a leyes, reglamentos y normas con la responsabilidad de no desacreditar a la profesión. Emitir opiniones falsas o condescender ante la gerencia son conductas proscritas; sostener criterios técnicos y éticos aun ante presión es parte del deber profesional. Las notas del material insisten en que el quebranto ético compromete independencia y credibilidad y puede acarrear sanciones. :contentReference[oaicite:21]{index=21} :contentReference[oaicite:22]{index=22}",
                },

                /* Acordeones (2) */
                {
                  type: "accordion",
                  header: "Ejemplos aplicados por principio",
                  open: false,
                  items: [
                    {
                      header: "Integridad",
                      text: "Reportar fraude sin ‘maquillar’ el informe; remisión IESBA 110 / NIA 200. :contentReference[oaicite:23]{index=23}",
                    },
                    {
                      header: "Objetividad",
                      text: "Rechazar viajes/regalos del cliente; documentar conflictos y salvaguardas. :contentReference[oaicite:24]{index=24}",
                    },
                    {
                      header: "Confidencialidad",
                      text: "No divulgar información sensible salvo obligación legal; control de acceso a papeles de trabajo. :contentReference[oaicite:25]{index=25}",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Normas clave para profundizar",
                  open: false,
                  items: [
                    {
                      header: "IESBA (Partes 1 y 2)",
                      text: "Principios fundamentales y marco conceptual de amenazas y salvaguardas (secc. 110–120, 113–115). :contentReference[oaicite:26]{index=26}",
                    },
                    {
                      header: "NIA 200",
                      text: "Objetivos globales, juicio profesional y aseguramiento razonable (párrs. 8–16). :contentReference[oaicite:27]{index=27}",
                    },
                    {
                      header: "NIA 240",
                      text: "Responsabilidades relacionadas con fraude; refuerzo del escepticismo. :contentReference[oaicite:28]{index=28}",
                    },
                  ],
                },
              ],
            },

            /* 1.3.2 */
            {
              id: "1.3.2",
              numbering: "1.3.2",
              title: "Independencia: amenazas y salvaguardas",
              content: [
                {
                  type: "paragraph",
                  text: "La independencia es la piedra de toque de la credibilidad del informe de auditoría. Implica dos dimensiones inseparables: independencia mental (de fondo), que exige criterio libre de influencias, y independencia en apariencia, que evita situaciones que harían dudar a un tercero informado. El material de estudio lo enuncia con claridad y ejemplifica restricciones típicas, como la prohibición de vínculos económicos con el cliente. :contentReference[oaicite:29]{index=29}",
                },
                {
                  type: "paragraph",
                  text: "Las amenazas a la independencia se agrupan normalmente en interés propio (beneficios financieros), autorrevisión (evaluar el propio trabajo), abogacía (promover intereses del cliente), familiaridad (relaciones cercanas) e intimidación (presiones). Aunque el documento base no desarrolla la taxonomía completa, sí anticipa ejemplos: inversiones del auditor, regalos, viajes o relaciones que comprometen la objetividad. La respuesta profesional es identificar la amenaza y aplicar salvaguardas proporcionales. :contentReference[oaicite:30]{index=30} :contentReference[oaicite:31]{index=31}",
                },
                {
                  type: "paragraph",
                  text: "Entre las salvaguardas más recurrentes están: declaraciones de independencia firmadas por el equipo, rotación de socios clave, revisión de control de calidad del encargo por un revisor independiente, segregación de funciones y, en casos límite, la renuncia al encargo. En encargos complejos o de alto riesgo, la planificación efectiva exige, además, reforzar supervisión y confidencialidad desde el arranque. :contentReference[oaicite:32]{index=32}",
                },
                {
                  type: "paragraph",
                  text: "La independencia no se negocia con resultados: aun cuando el cliente presione por rapidez o por ‘suavizar’ hallazgos, el auditor debe sostener criterios técnicos y éticos. La pérdida de independencia inutiliza el trabajo: cualquier opinión emitida bajo conflicto es vulnerable y afecta a los usuarios de la información financiera. De ahí que las firmas institucionalicen políticas estrictas de aceptación y continuidad del cliente, así como recusaciones por conflicto. :contentReference[oaicite:33]{index=33}",
                },
                {
                  type: "paragraph",
                  text: "En síntesis: detectar amenazas, documentar evaluación y salvaguardas, y monitorear cambios durante el encargo. Un enfoque vivo de independencia garantiza que la objetividad y el escepticismo profesional no se erosionen con el paso del tiempo o las presiones del entorno. :contentReference[oaicite:34]{index=34}",
                },

                /* Acordeones (2) */
                {
                  type: "accordion",
                  header: "Banderas rojas de independencia",
                  open: false,
                  items: [
                    {
                      header: "Financieras",
                      text: "Inversiones, préstamos, honorarios condicionados, dependencia económica del cliente. :contentReference[oaicite:35]{index=35}",
                    },
                    {
                      header: "Relacionales",
                      text: "Vínculos familiares o cercanos con la administración; ofertas de regalos/hospitalidad. :contentReference[oaicite:36]{index=36}",
                    },
                    {
                      header: "Operativas",
                      text: "Servicios no aseguramiento que derivan en autorrevisión si no se separan equipos y responsables.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Salvaguardas típicas",
                  open: false,
                  items: [
                    {
                      header: "Previas al encargo",
                      text: "Evaluación de independencia, recusación de miembros, acuerdos de confidencialidad. :contentReference[oaicite:37]{index=37}",
                    },
                    {
                      header: "Durante el encargo",
                      text: "Revisión de calidad independiente, rotación de socio, consulta técnica documentada.",
                    },
                    {
                      header: "Al cierre",
                      text: "Evaluación final de independencia y declaración en el expediente.",
                    },
                  ],
                },
              ],
            },

            /* 1.3.3 */
            {
              id: "1.3.3",
              numbering: "1.3.3",
              title: "Escepticismo y juicio profesional",
              content: [
                {
                  type: "paragraph",
                  text: "El escepticismo profesional es una actitud: estar alerta a condiciones que puedan indicar posible incorrección material por error o fraude y evaluar críticamente la evidencia. La NIA 200 lo exige en todo el encargo, y la NIA 240 lo enfatiza frente al fraude. El material ofrece ejemplos prácticos (p. ej., facturas fechadas al 31 de diciembre) que piden extender pruebas y corroborar con fuentes independientes. :contentReference[oaicite:38]{index=38}",
                },
                {
                  type: "paragraph",
                  text: "El juicio profesional es el uso de criterio técnico y ético basado en experiencia y normas para decidir en situaciones complejas: evaluar materialidad, seleccionar procedimientos, interpretar evidencia contradictoria o valorar estimaciones contables. El documento que compartiste lo asocia directamente a la NIA 200, párrafo 16, como facultad esencial del auditor para resolver dilemas sin perder rigor. :contentReference[oaicite:39]{index=39}",
                },
                {
                  type: "paragraph",
                  text: "Un escepticismo robusto evita dos errores: confiar ciegamente en manifestaciones de la administración y diseñar pruebas que solo ‘confirmen’ hipótesis. La combinación con juicio profesional lleva a diseñar pruebas que intenten refutar hipótesis, usar fuentes externas y mantener trazabilidad en papeles de trabajo. Cuando la evidencia es ambigua, el auditor debe ampliar el alcance o solicitar especialistas. :contentReference[oaicite:40]{index=40}",
                },
                {
                  type: "paragraph",
                  text: "El enfoque basado en riesgos ayuda a focalizar escepticismo y juicio donde más impacto tendría un error material (por ejemplo, préstamos sin garantía en bancos o estimaciones de deterioro de activos). Esto articula la NIA 315 con la NIA 500: identificar riesgos, diseñar respuestas y obtener evidencia suficiente y apropiada. :contentReference[oaicite:41]{index=41} :contentReference[oaicite:42]{index=42}",
                },
                {
                  type: "paragraph",
                  text: "Documentar el escepticismo y el juicio no es accesorio: demostrar en el expediente por qué se eligieron ciertos procedimientos, cómo se pesó la evidencia y qué alternativas se descartaron protege la calidad del trabajo y apoya revisiones de control de calidad. De nuevo, la planificación efectiva y la supervisión refuerzan estas dos piezas del ‘cómo’ auditar. :contentReference[oaicite:43]{index=43}",
                },

                /* Acordeones (2) */
                {
                  type: "accordion",
                  header: "Cuándo intensificar el escepticismo",
                  open: false,
                  items: [
                    {
                      header: "Señales de cierre",
                      text: "Transacciones de fin de periodo inusuales; ajustes manuales relevantes; conciliaciones pendientes. :contentReference[oaicite:44]{index=44}",
                    },
                    {
                      header: "Estimaciones críticas",
                      text: "Deterioro de activos, provisiones, valor razonable sin mercado activo. :contentReference[oaicite:45]{index=45}",
                    },
                    {
                      header: "Control débil",
                      text: "Hallazgos de control interno que elevan riesgo de incorrección material. :contentReference[oaicite:46]{index=46}",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas de juicio profesional",
                  open: false,
                  items: [
                    {
                      header: "Contraste de hipótesis",
                      text: "Diseña procedimientos que puedan refutar explicaciones de la administración (no solo confirmarlas).",
                    },
                    {
                      header: "Evidencia externa",
                      text: "Prioriza confirmaciones y fuentes independientes cuando el riesgo es alto (NIA 500).",
                    },
                    {
                      header: "Documentación",
                      text: "Deja rastro claro de alternativas evaluadas y razones de tus decisiones clave. :contentReference[oaicite:47]{index=47}",
                    },
                  ],
                },
              ],
            },
          ],
        },
        /* 1.4 */
        {
          id: "1.4",
          numbering: "1.4",
          title: "Enfoque basado en riesgos y planeación",
          content: [
            {
              type: "paragraph",
              text: "El enfoque basado en riesgos (EBR) centra el esfuerzo del auditor en aquellas áreas con mayor probabilidad e impacto de error material. Esta lógica prioriza recursos, profundiza pruebas donde el riesgo es significativo y busca reducir el riesgo de auditoría a un nivel aceptablemente bajo, de conformidad con las NIA 315 y 330. En la práctica, el EBR evita revisiones uniformes o rutinarias y exige una comprensión del negocio, su entorno, controles y marcos aplicables; con base en ello, se formula la respuesta de auditoría (naturaleza, oportunidad y extensión de las pruebas) para cada riesgo identificado. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "El punto de partida es entender el Riesgo de Auditoría (RA) como función de tres componentes: Riesgo Inherente (RI), Riesgo de Control (RC) y Riesgo de Detección (RD). La relación multiplicativa RA = RI × RC × RD traduce que un componente alto presiona a reforzar el resto de respuestas; por ejemplo, RI elevado en estimaciones contables complejas obliga a intensificar pruebas sustantivas o de control, según corresponda. Esta arquitectura conceptual está explicitada en las NIA 200 y 315 y guía todas las decisiones de planeación y ejecución. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "Con el mapa de riesgos preliminar, el equipo diseña una estrategia global y un programa de auditoría. La estrategia (alto nivel) define el enfoque, los recursos y el cronograma macro; el programa operativiza procedimientos por rubro, responsables y pruebas específicas. La NIA 300 demanda que la planificación sea dinámica, proporcional a riesgos y que incorpore consideraciones de materialidad, controles relevantes y uso del trabajo de otros (internos o expertos). Esto conduce a asignar más horas y pruebas más persuasivas donde el riesgo lo exige, y a racionalizar tareas en zonas de riesgo bajo. :contentReference[oaicite:2]{index=2}",
            },

            {
              type: "accordion",
              header: "Guía rápida de implementación del EBR",
              open: false,
              items: [
                {
                  header: "1) Identificar riesgos significativos",
                  text: "Analizar entidad, entorno, marco de información financiera y procesos clave; detectar riesgos por fraude y por error. Ej.: ingresos en empresas intensivas en suscripciones. :contentReference[oaicite:3]{index=3}",
                },
                {
                  header: "2) Evaluar y priorizar",
                  text: "Clasificar por probabilidad e impacto para concentrar recursos donde más se necesitan; documentar criterios y umbrales. :contentReference[oaicite:4]{index=4}",
                },
                {
                  header: "3) Diseñar y responder",
                  text: "Seleccionar pruebas de control y/o sustantivas; ajustar naturaleza, oportunidad y extensión (N/O/E) a la evaluación del riesgo; reconsiderar si surgen hallazgos. :contentReference[oaicite:5]{index=5}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "En la respuesta a riesgos, la N/O/E de los procedimientos es la palanca operativa. Un riesgo relevante en ingresos puede exigir confirmaciones positivas a clientes, procedimientos analíticos de alta precisión y pruebas de corte; un riesgo de control en tesorería puede llevar a pruebas de controles (segregación, autorizaciones, conciliaciones) antes de decidir el grado de pruebas sustantivas. La NIA 330 obliga a que las respuestas sean consistentes con la evaluación y a que el auditor obtenga evidencia suficiente y adecuada. :contentReference[oaicite:6]{index=6}",
            },
            {
              type: "paragraph",
              text: "La reevaluación es continua: el enfoque basado en riesgos no es un evento de planeación única. Hallazgos en trabajo de campo (p.ej., diferencias relevantes en inventarios o debilidades de TI) pueden elevar el riesgo evaluado y forzar ampliaciones del alcance o introducción de nuevas pruebas. El objetivo es sostener la “seguridad razonable”, nunca absoluta, alineada con el concepto de materialidad y con las limitaciones inherentes al trabajo de auditoría. :contentReference[oaicite:7]{index=7}",
            },
            {
              type: "paragraph",
              text: "Finalmente, el EBR mejora eficiencia y calidad: enfoca el esfuerzo, incrementa probabilidad de detectar errores materiales y alinea la práctica con estándares internacionales. Un ejemplo típico: en una empresa tecnológica con alta valoración de intangibles y controles de licenciamiento débiles, el equipo direcciona más horas a ingresos y activos intangibles y reduce pruebas en rubros de bajo riesgo (p. ej., caja chica). :contentReference[oaicite:8]{index=8}",
            },

            {
              type: "accordion",
              header: "Checklist de planeación (NIA 300) para tu programa",
              open: false,
              items: [
                {
                  header: "Estrategia global",
                  text: "Riesgos clave, materialidad y su relación; composición del equipo; calendario; uso de expertos/otros auditores. :contentReference[oaicite:9]{index=9}",
                },
                {
                  header: "Programa de auditoría",
                  text: "Procedimientos por rubro (N/O/E), pruebas de control vs. sustantivas; umbrales de selección; documentación requerida. :contentReference[oaicite:10]{index=10}",
                },
                {
                  header: "Reevaluación continua",
                  text: "Gatillos para ajustar alcance (hallazgos, debilidades en control, eventos posteriores) y evidencia a reunir adicional. :contentReference[oaicite:11]{index=11}",
                },
              ],
            },
          ],

          subthemes: [
            // 1.4.1 — Componentes del riesgo
            {
              id: "1.4.1",
              numbering: "1.4.1",
              title:
                "Componentes del riesgo de auditoría (RI, RC, RD) y RA = RI×RC×RD",
              content: [
                {
                  type: "paragraph",
                  text: "El Riesgo Inherente (RI) refleja la susceptibilidad de un rubro a errores materiales antes de considerar los controles. Sectores con alta estimación (reservas, deterioro, intangibles) suelen exhibir RI elevado por complejidad, subjetividad o volatilidad. La valoración del RI requiere conocimiento del negocio, del marco contable y de prácticas sectoriales, y debe documentarse con ejemplos específicos. :contentReference[oaicite:12]{index=12}",
                },
                {
                  type: "paragraph",
                  text: "El Riesgo de Control (RC) es la probabilidad de que los controles internos no prevengan ni detecten oportunamente errores materiales. Debilidades como falta de segregación, ausencia de conciliaciones o accesos de TI inadecuados elevan el RC. Las pruebas de controles permiten, si se concluyen eficaces, reducir la extensión de pruebas sustantivas, pero su diseño debe ser pertinente al riesgo identificado. :contentReference[oaicite:13]{index=13}",
                },
                {
                  type: "paragraph",
                  text: "El Riesgo de Detección (RD) corresponde a la posibilidad de que los procedimientos del auditor no detecten un error material existente. RD depende de la calidad del diseño de pruebas, su oportunidad (interina vs. cierre) y su extensión (tamaño de muestra, precisión analítica). Un RD demasiado alto obliga a incrementar la contundencia de la evidencia (por ejemplo, confirmaciones positivas en lugar de negativas). :contentReference[oaicite:14]{index=14}",
                },

                {
                  type: "accordion",
                  header: "Fórmula y lectura práctica",
                  open: false,
                  items: [
                    {
                      header: "RA = RI×RC×RD",
                      text: "Si cualquiera es alto, el riesgo total se dispara; por ello, elevar calidad/alcance de pruebas reduce RD, y fortalecer controles (o probarlos) reduce RC. :contentReference[oaicite:15]{index=15}",
                    },
                    {
                      header: "Ejemplo aplicado",
                      text: "Ingresos con manipulación potencial (RI alto) + controles débiles (RC alto) ⇒ pruebas sustantivas extensas y pruebas de control específicas para ventas y TI. :contentReference[oaicite:16]{index=16}",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La evaluación del riesgo no es estática. Conforme avanza el trabajo, hallazgos (p. ej., diferencias de inventario, conciliaciones tardías) pueden aumentar el RC y forzar una reconsideración del RD, exigiendo mayor extensión o pruebas más persuasivas. Esta adaptación continua garantiza que el nivel de RA se mantenga bajo el umbral aceptable. :contentReference[oaicite:17]{index=17}",
                },
                {
                  type: "paragraph",
                  text: "La documentación debe enlazar claramente cada riesgo con su respuesta: por cada riesgo significativo se detalla N/O/E de pruebas, criterios de selección, y cómo la evidencia obtenida aborda la aserción afectada (existencia, integridad, valuación, etc.). Esto respalda el juicio profesional y la coherencia del enfoque. :contentReference[oaicite:18]{index=18}",
                },
                {
                  type: "paragraph",
                  text: "En suma, desagregar RA en RI, RC y RD convierte una noción abstracta en un tablero de control accionable: identifica dónde mirar, qué tanto probar y cuándo intensificar la evidencia, alineando el trabajo con el objetivo de seguridad razonable. :contentReference[oaicite:19]{index=19}",
                },
              ],
            },

            // 1.4.2 — Planeación (NIA 300)
            {
              id: "1.4.2",
              numbering: "1.4.2",
              title: "Estrategia global y programa (NIA 300)",
              content: [
                {
                  type: "paragraph",
                  text: "Planear bajo NIA 300 implica definir una estrategia global (enfoque, recursos, calendario y supervisión) y traducirla en un programa detallado por rubros. El plan debe considerar el perfil de riesgos, la materialidad, el uso del trabajo de internos/externos y la necesidad de expertos, así como cuestiones de independencia y asignación del equipo. :contentReference[oaicite:20]{index=20}",
                },
                {
                  type: "paragraph",
                  text: "La estrategia guía el ‘qué’ y el ‘cuándo’; el programa, el ‘cómo’. Por ejemplo, si se detectan riesgos significativos en ingresos y TI, la estrategia puede prever mayor dedicación y especialistas, mientras que el programa concreta confirmaciones, pruebas de corte, procedimientos analíticos avanzados y pruebas de controles de acceso/registro. :contentReference[oaicite:21]{index=21}",
                },

                {
                  type: "accordion",
                  header: "Estrategia vs. Programa — diferencias clave",
                  open: false,
                  items: [
                    {
                      header: "Estrategia",
                      text: "Visión macro, recursos, tiempos, umbrales de materialidad, uso de expertos, supervisión. :contentReference[oaicite:22]{index=22}",
                    },
                    {
                      header: "Programa",
                      text: "Matriz de procedimientos por cuenta/aserción (N/O/E), tamaño de muestra, responsables y plazos. :contentReference[oaicite:23]{index=23}",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La planeación efectiva es iterativa: conforme surgen hallazgos, se ajusta el programa para mantener la coherencia con la evaluación de riesgo. La documentación debe permitir rastrear estos cambios, justificando por qué se incrementó la extensión o se incorporaron pruebas adicionales. :contentReference[oaicite:24]{index=24}",
                },
                {
                  type: "paragraph",
                  text: "Los entregables típicos de planeación incluyen: memorando de estrategia, matriz de riesgos y respuestas, programa de auditoría por rubro y cronograma. Esta base ordena el trabajo de campo, facilita la supervisión y soporta la calidad de la opinión final. :contentReference[oaicite:25]{index=25}",
                },
                {
                  type: "paragraph",
                  text: "Vincular planeación con materialidad y con las aserciones asegura proporcionalidad: cuanto mayor el riesgo y la sensibilidad del rubro, mayor robustez de la evidencia. Así, la planeación deja de ser un trámite y se convierte en la columna vertebral del encargo. :contentReference[oaicite:26]{index=26}",
                },

                {
                  type: "accordion",
                  header: "Checklist mínimo (documentación de NIA 300)",
                  open: false,
                  items: [
                    {
                      header: "Memorando de estrategia",
                      text: "Riesgos, materialidad, recursos, calendario, expertos y alcance de filiales. :contentReference[oaicite:27]{index=27}",
                    },
                    {
                      header: "Programa por rubro",
                      text: "Procedimientos concretos, N/O/E, tamaño de muestra y criterios de selección. :contentReference[oaicite:28]{index=28}",
                    },
                  ],
                },
              ],
            },

            // 1.4.3 — Respuesta a los riesgos (NIA 315/330)
            {
              id: "1.4.3",
              numbering: "1.4.3",
              title:
                "Respuesta a riesgos (NIA 315/330): pruebas de control y sustantivas",
              content: [
                {
                  type: "paragraph",
                  text: "La NIA 315 requiere identificar y valorar riesgos de incorrección material; la NIA 330 ordena diseñar y aplicar respuestas. Cuando se confía en controles para reducir pruebas sustantivas, es obligatorio probar su diseño, implementación y, si procede, su eficacia operativa. Si los controles no son confiables o el riesgo es significativo, predominan pruebas sustantivas de alta contundencia. :contentReference[oaicite:29]{index=29}",
                },
                {
                  type: "paragraph",
                  text: "Las pruebas de control se enfocan en autorizaciones, segregación de funciones, conciliaciones y controles de TI relevantes (p. ej., accesos y trazabilidad). Su eficacia puede permitir menor extensión sustantiva, pero nunca elimina la necesidad de evidencia sustantiva en riesgos significativos de fraude, como ingresos. :contentReference[oaicite:30]{index=30}",
                },

                {
                  type: "accordion",
                  header: "¿Cuándo priorizar pruebas de control?",
                  open: false,
                  items: [
                    {
                      header: "Controles bien diseñados y estables",
                      text: "Procesos maduros con baja rotación y evidencia histórica de eficacia; permiten un enfoque combinado. :contentReference[oaicite:31]{index=31}",
                    },
                    {
                      header: "Riesgos de TI",
                      text: "Si registros clave dependen de sistemas, probar accesos, cambios y parámetros es fundamental antes de confiar en reportes. :contentReference[oaicite:32]{index=32}",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Las pruebas sustantivas abarcan procedimientos analíticos (de precisión y desarrollo) y pruebas de detalle (confirmaciones, recálculos, inspección de documentos y físicos). En riesgos de ingresos, por ejemplo, son comunes confirmaciones positivas, pruebas de corte y analíticos de tendencias con expectativas independientes. :contentReference[oaicite:33]{index=33}",
                },
                {
                  type: "paragraph",
                  text: "Naturaleza, oportunidad y extensión (N/O/E) dependen de la valoración de riesgos y de la calidad de los controles. Riesgos altos demandan evidencia más persuasiva (externa, directa, obtenida al cierre) y mayor tamaño de muestra. La oportunidad interina puede requerir procedimientos de roll-forward para cubrir el periodo completo. :contentReference[oaicite:34]{index=34}",
                },

                {
                  type: "accordion",
                  header: "Técnicas sustantivas — ejemplos rápidos",
                  open: false,
                  items: [
                    {
                      header: "Ingresos",
                      text: "Confirmaciones a clientes, pruebas de corte, conciliación con CFDI y análisis de variaciones. :contentReference[oaicite:35]{index=35}",
                    },
                    {
                      header: "Inventarios",
                      text: "Observación de conteos físicos sorpresivos en áreas con riesgo de robo; recálculos de costeo. :contentReference[oaicite:36]{index=36}",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La respuesta concluye con una reevaluación: si la evidencia no es suficiente o aparecen desviaciones, se amplían procedimientos o se reconsidera el riesgo. Esta disciplina mantiene el RA en el umbral aceptable y robustece la base para la opinión del auditor. :contentReference[oaicite:37]{index=37}",
                },
              ],
            },
          ],
        },

        /* 1.5 */
        {
          id: "1.5",
          numbering: "1.5",
          title: "Evidencia, materialidad y opinión",
          content: [
            {
              type: "paragraph",
              text: "En auditoría de estados financieros, la tríada evidencia–materialidad–opinión articula el propósito de aumentar la confianza de los usuarios. La NIA 200 fija el objetivo global del auditor y, junto con la NIA 500 y la NIA 320, orienta cómo obtener evidencia suficiente y apropiada y cómo establecer y usar la materialidad para planear y ejecutar el encargo. El juicio profesional y el escepticismo sostienen todo el proceso: sin ellos, la evaluación de riesgos, el diseño de procedimientos y la valoración de incorrecciones perderían sustento. Así, el auditor busca reducir el riesgo de auditoría a un nivel aceptablemente bajo (relación RA=RI×RC×RD), documenta la lógica de sus pruebas y, finalmente, emite una opinión conforme a la NIA 700/705/706, comunicando además asuntos relevantes a la administración y a los encargados del gobierno corporativo. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "La materialidad (importancia relativa) opera en tres momentos: planeación, ejecución y evaluación final. Primero, el auditor fija la materialidad para los estados financieros en su conjunto y, cuando corresponde, materialidades de desempeño para dirigir la naturaleza, oportunidad y extensión de los procedimientos. Segundo, aplica umbrales prácticos para acumular incorrecciones, sin perder de vista factores cualitativos (por ejemplo, el incumplimiento de cláusulas contractuales o la afectación de tendencias clave) que pueden tornar material un error pequeño en términos cuantitativos. Tercero, evalúa el efecto agregado—incluidas las no corregidas—sobre los estados y concluye si se requiere una modificación de la opinión o comunicaciones específicas. Esta idea evita la falsa dicotomía entre “todo o nada” y favorece un enfoque proporcionado a los riesgos identificados. :contentReference[oaicite:1]{index=1}",
            },

            {
              type: "accordion",
              header: "Guía rápida • Materialidad en práctica",
              open: false,
              items: [
                {
                  header: "Capa 1 — Definiciones clave",
                  text: "Materialidad de planeación (global); materialidad de desempeño (colchón operativo); umbral de trivialidad (no acumular). Factores cualitativos pueden prevalecer sobre lo cuantitativo.",
                },
                {
                  header: "Capa 2 — Cálculo inicial",
                  text: "Seleccionar base (utilidad antes de impuestos, ingresos, activos, patrimonio) y porcentaje de referencia acorde al entorno y al usuario. Ajustar por volatilidad y riesgos.",
                },
                {
                  header: "Capa 3 — Evaluación final",
                  text: "Acumular incorrecciones, considerar su efecto neto y cualitativo, solicitar ajustes y, si no se corrigen, valorar el impacto en la opinión (NIA 450/700/705).",
                },
              ],
            },

            {
              type: "paragraph",
              text: "La evidencia de auditoría es la información utilizada para llegar a conclusiones en las que se basa la opinión. Debe ser suficiente (cantidad) y apropiada (calidad: relevancia y fiabilidad). La NIA 500 describe fuentes y procedimientos: inspección de documentos y activos, observación, confirmación externa, recálculo, reprocesamiento y procedimientos analíticos, entre otros. La fiabilidad varía: evidencia externa directa suele ser más persuasiva que la generada internamente sin controles robustos. El auditor correlaciona hallazgos, indaga inconsistencias y, cuando las estimaciones contables son complejas, puede apoyarse en expertos (NIA 620). La documentación debe permitir a un revisor experimentado entender el trabajo realizado, la base de las conclusiones y quién lo ejecutó y revisó (NIA 230). :contentReference[oaicite:2]{index=2}",
            },

            {
              type: "image",
              src: "https://cdn.actualicese.com/Imagen-editoriales/IF-Evaluacion-materialidad.png",
              alt: "Esquema de relación entre evidencia, materialidad y opinión",
              caption:
                "Mapa conceptual: evidencia → materialidad → opinión (conexiones con RA=RI×RC×RD).",
            },

            {
              type: "paragraph",
              text: "Concluida la ejecución, el auditor evalúa las incorrecciones acumuladas, su efecto cualitativo y cuantitativo y la respuesta de la administración. Si permanecen errores materiales no corregidos o existen limitaciones al alcance, debe ponderar el tipo de informe: opinión con salvedades, adversa o abstención (NIA 705). Incluso con opinión no modificada, puede ser pertinente un párrafo de énfasis o de otras cuestiones (NIA 706) para llamar la atención del lector. Además, se comunican debilidades significativas de control interno (NIA 265) y asuntos relevantes de auditoría cuando apliquen (NIA 701). El hilo conductor es la transparencia: explicar lo que se hizo, lo que se halló y por qué la conclusión es razonable para los usuarios. :contentReference[oaicite:3]{index=3}",
            },

            {
              type: "accordion",
              header: "Errores comunes y buenas prácticas",
              open: false,
              items: [
                {
                  header: "Subestimar factores cualitativos",
                  text: "Evita basar la materialidad solo en porcentajes. Considera cláusulas, covenants, tendencias y sensibilidad de usuarios.",
                },
                {
                  header: "Evidencia sin fiabilidad suficiente",
                  text: "Prioriza terceros independientes, confirma saldos críticos y contrasta fuentes. Documenta la cadena lógica del hallazgo a la conclusión.",
                },
                {
                  header: "Desalineación RA–pruebas–opinión",
                  text: "Si el riesgo es alto, incrementa pruebas (naturaleza, oportunidad, extensión) y recalibra materialidad de desempeño antes de concluir.",
                },
              ],
            },
          ],
          subthemes: [
            {
              id: "1.5.1",
              numbering: "1.5.1",
              title: "Evidencia suficiente y apropiada (NIA 500)",
              content: [
                {
                  type: "paragraph",
                  text: "La suficiencia (cantidad) y la propiedad (calidad) de la evidencia están interrelacionadas: a mayor calidad, menor cantidad necesaria, y viceversa. El auditor define combinaciones de pruebas para responder a riesgos específicos, privilegiando fuentes independientes y diseñando procedimientos que incrementen la fiabilidad (confirmaciones directas, inspección de originales, observación de inventarios). El escepticismo guía la valoración de contradicciones y anomalías, y obliga a profundizar cuando surgen señales de fraude o sesgos en estimaciones. Una evidencia robusta es persuasiva en conjunto, no necesariamente concluyente pieza por pieza. :contentReference[oaicite:4]{index=4}",
                },
                {
                  type: "paragraph",
                  text: "Los procedimientos clásicos comprenden: (i) inspección de registros, documentos y activos; (ii) observación de procesos; (iii) indagación con corroboración; (iv) confirmaciones externas; (v) recálculo y reprocesamiento; y (vi) procedimientos analíticos sustantivos. La selección depende de la aserción probada (existencia, integridad, valuación, presentación) y del riesgo asignado a la partida. Por ejemplo, en cuentas por cobrar con riesgo de sobrestimación, las confirmaciones positivas a clientes clave combinadas con conciliaciones y análisis de antigüedad son más eficaces que indagaciones no corroboradas. :contentReference[oaicite:5]{index=5}",
                },

                {
                  type: "accordion",
                  header: "Jerarquía práctica de fiabilidad",
                  open: false,
                  items: [
                    {
                      header: "Nivel alto",
                      text: "Evidencia obtenida directamente por el auditor de terceros independientes (confirmaciones, respuestas de abogados, extractos bancarios).",
                    },
                    {
                      header: "Nivel medio",
                      text: "Evidencia interna corroborada por controles efectivos o contrastada con fuentes externas (reportes del sistema + conciliaciones bancarias).",
                    },
                    {
                      header: "Nivel bajo",
                      text: "Indagaciones a la gerencia sin corroboración, documentos internos sin trazabilidad ni control.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Cuando el asunto excede la competencia técnica del equipo (por ejemplo, modelos actuariales, valuación de instrumentos complejos), puede recurrirse a un experto del auditor (NIA 620). En tal caso, el equipo debe evaluar la competencia, capacidad y objetividad del experto, acordar la naturaleza y alcance del trabajo y valorar la adecuación de sus hallazgos como evidencia. La responsabilidad de la opinión sigue siendo del auditor: incorporar el trabajo del experto no delega el juicio final ni la obligación de comprender cómo se generan los supuestos críticos y la sensibilidad de los resultados. :contentReference[oaicite:6]{index=6}",
                },

                {
                  type: "image",
                  src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEid4lmamKhn1ebay9DJ1zmRwvcfMo97NgS-y3QSsbifo3VL0zNEONVC3XTHI5EnhWL0M_6N4brA0I9g4SIUkXAzH_LLmxD_6H2AA60QF_6z5j6fMLbj18z84637Q0iETdH15kHbgh1Vm4w/s1600/tecnicas+de+audotira.jpg",
                  alt: "Flujo de trabajo para obtener evidencia conforme a NIA 500",
                  caption:
                    "Diseño de pruebas por aserción → obtención → evaluación → documentación.",
                },

                {
                  type: "paragraph",
                  text: "El muestreo de auditoría ayuda a obtener evidencia sobre poblaciones extensas con eficiencia y control de riesgo de muestreo. La definición de la población, la unidad de muestreo y los parámetros (tolerable, esperado, confianza) deben documentarse con claridad. El auditor complementa con procedimientos dirigidos a partidas de alto riesgo (selección intencional) y considera el sesgo por omisión de ítems inusuales. Toda evidencia debe quedar documentada en papeles de trabajo: objetivo del procedimiento, población y criterios de selección, ejecución, resultados, conclusiones y revisiones. Documentar bien es tan importante como ejecutar bien. :contentReference[oaicite:7]{index=7}",
                },
              ],
            },

            {
              id: "1.5.2",
              numbering: "1.5.2",
              title: "Materialidad y evaluación de incorrecciones (NIA 320)",
              content: [
                {
                  type: "paragraph",
                  text: "La NIA 320 pide fijar la materialidad para los estados en su conjunto considerando las necesidades razonables de los usuarios y, cuando proceda, materialidades de desempeño por debajo de la global. La base (utilidad, ingresos, activos o patrimonio) y el porcentaje se justifican por el modelo de negocio, volatilidad, apalancamiento y sensibilidad de indicadores. Además, el auditor puede establecer materialidades específicas para partidas o revelaciones particulares (p.ej., cumplimiento de covenants), atendiendo factores cualitativos que pueden volver material una incorrección cuantitativamente pequeña. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "paragraph",
                  text: "Durante la ejecución, el auditor acumula incorrecciones identificadas y proyectadas, distinguiendo entre las triviales (por debajo del umbral de no acumulación) y las que ameritan evaluación. Al cierre, valora el efecto neto sobre los estados, también en términos de presentación y revelación. La administración debe recibir una solicitud clara de corrección; si decide no ajustar, el auditor evalúa si la suma—junto con su cualidad—supera la materialidad y afecta la opinión. La consistencia con la materialidad inicial no impide ajustes: si surgen riesgos nuevos o cambios de escenario, la materialidad puede revisarse. :contentReference[oaicite:9]{index=9}",
                },

                {
                  type: "accordion",
                  header: "Checklist • Materialidad en 7 pasos",
                  open: false,
                  items: [
                    {
                      header: "1. Base y %",
                      text: "Elegir base adecuada y justificar el porcentaje.",
                    },
                    {
                      header: "2. Desempeño",
                      text: "Fijar materialidad de desempeño (buffer).",
                    },
                    {
                      header: "3. Trivialidad",
                      text: "Definir umbral para no acumular.",
                    },
                    {
                      header: "4. Específicas",
                      text: "Establecer materialidades específicas si procede.",
                    },
                    {
                      header: "5. Acumulación",
                      text: "Registrar hallazgos y proyectadas.",
                    },
                    {
                      header: "6. Revisión",
                      text: "Revisar materialidad si cambia el entorno.",
                    },
                    {
                      header: "7. Conclusión",
                      text: "Evaluar efecto agregado y comunicar.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Los factores cualitativos son decisivos: una incorrección que convierte una pérdida en utilidad, que genera incumplimiento de una cláusula financiera o que oculta transacciones con partes relacionadas puede ser material aunque sea pequeña. Igualmente, errores que afectan tendencias clave o métricas utilizadas por inversionistas pueden tornarse significativos. Por eso, la discusión con los encargados del gobierno corporativo debe explicar no solo montos, sino narrativas: qué historia cuentan—o distorsionan—las cifras. :contentReference[oaicite:10]{index=10}",
                },

                {
                  type: "image",
                  src: "https://www.strategicforesight.es/wp-content/uploads/2020/12/Matriz-Probabilidad-Impacto-escala-cualitativa--1024x629.png",
                  alt: "Matriz de materialidad: probabilidad vs impacto cualitativo/cuantitativo",
                  caption:
                    "Visual para discutir incorrecciones con la administración y el comité de auditoría.",
                },

                {
                  type: "paragraph",
                  text: "La comunicación de incorrecciones no corregidas (NIA 450) requiere precisión: describir cada ítem, su efecto en resultados y en el balance, su naturaleza (error vs sesgo de estimación) y la razón de no corrección. El auditor considera si existe sesgo generalizado de la gerencia (p. ej., optimismo sistemático en estimaciones) y su efecto acumulado. La decisión final sobre la opinión (no modificada o modificada) debe alinearse con esta evaluación, y la documentación ha de dejar rastro del juicio aplicado y de las alternativas consideradas. :contentReference[oaicite:11]{index=11}",
                },
              ],
            },

            {
              id: "1.5.3",
              numbering: "1.5.3",
              title: "Formas de opinión y comunicación de resultados",
              content: [
                {
                  type: "paragraph",
                  text: "Con base en la NIA 700, el auditor emite una opinión no modificada cuando, en su juicio profesional, los estados financieros están, en todos los aspectos materiales, presentados razonablemente. De lo contrario, la NIA 705 guía opiniones modificadas: con salvedades (incongruencias materiales pero no generalizadas), adversa (incorrección material y generalizada) o abstención (limitación al alcance material y generalizada). La decisión depende de la naturaleza, magnitud y generalización del asunto, así como de si afecta presentaciones aisladas o el conjunto de los estados. :contentReference[oaicite:12]{index=12}",
                },
                {
                  type: "paragraph",
                  text: "La NIA 706 prevé párrafos de énfasis (resaltan asuntos presentados adecuadamente que son fundamentales para entender los estados) y de otras cuestiones (abordan cuestiones no presentadas en los estados pero relevantes para la comprensión del informe). Estos párrafos no modifican la opinión; son herramientas de comunicación para orientar al usuario hacia áreas críticas (por ejemplo, incertidumbre sobre negocio en marcha adecuadamente revelada). La consistencia interna entre la opinión, los párrafos adicionales y la evidencia documentada es esencial para la credibilidad del informe. :contentReference[oaicite:13]{index=13}",
                },

                {
                  type: "accordion",
                  header: "Mapa del informe del auditor (resumen estructural)",
                  open: false,
                  items: [
                    {
                      header: "Sección de opinión",
                      text: "Tipo de opinión y referencia al marco aplicable (NIF/NIIF).",
                    },
                    {
                      header: "Fundamento de la opinión",
                      text: "Cumplimiento NIA, independencia y ética; resumen de trabajo.",
                    },
                    {
                      header: "Responsabilidades",
                      text: "Gerencia y auditor (incluye escepticismo, riesgos y evidencia).",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Más allá del informe público, el auditor comunica resultados a la administración y al gobierno corporativo: deficiencias significativas de control (NIA 265), asuntos relevantes de auditoría (cuando se emiten RAs según estándares locales), observaciones y recomendaciones. El tono es constructivo: describir la condición, el criterio, la causa y el efecto; proponer acciones de mejora; y, cuando aplique, establecer prioridades y plazos razonables. La comunicación oportuna favorece correcciones antes del cierre y reduce sorpresas al final. :contentReference[oaicite:14]{index=14}",
                },

                {
                  type: "image",
                  src: "https://ahaslides.com/wp-content/uploads/2023/08/SEO4451-thumb.png",
                  alt: "Diagrama de decisión para tipos de opinión (NIA 705) y párrafos (NIA 706)",
                  caption:
                    "¿Incorrección vs. limitación? ¿Material vs. generalizada? Guía para seleccionar la opinión.",
                },

                {
                  type: "paragraph",
                  text: "La coherencia entre riesgos identificados, respuestas de auditoría, evidencia acumulada y conclusiones es la prueba ácida de calidad. Antes de firmar, el socio debe realizar una lectura de “hilo rojo”: ¿la estrategia (NIA 300) responde a los riesgos (NIA 315)? ¿La evidencia (NIA 500) respalda los juicios sobre materialidad (NIA 320) y la forma de opinión (NIA 700/705/706)? ¿La documentación (NIA 230) permitiría a un revisor llegar a conclusiones similares? Esta alineación asegura informes útiles y defendibles frente a usuarios y reguladores. :contentReference[oaicite:15]{index=15}",
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
          href: "https://youtu.be/zTcUDnMorUQ", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Introducción Auditoría financiera — https://youtu.be/zTcUDnMorUQ",
            "Auditoría interna — https://youtu.be/E4nXUYT8Nts",
            "Conceptos e introducción a la auditoría — https://youtu.be/tNBy4K9Sy5U",
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
            "International Auditing and Assurance Standards Board (IAASB). (2023). Normas Internacionales de Auditoría (NIA). International Federation of Accountants.",
            "International Ethics Standards Board for Accountants (IESBA). (2023). Código Internacional de Ética para Profesionales de la Contabilidad, incluidas las Normas Internacionales de Independencia. International Federation of Accountants.",
            "Arens, A. A., Elder, R. J., & Beasley, M. S. (2020). Auditoría: Un enfoque integral (16.ª ed.). Pearson Educación.",
            "Boynton, W. C., Johnson, R. N., & Kell, W. G. (2016). Auditoría (8.ª ed.). Cengage Learning.",
            "Messier, W. F., Glover, S. M., & Prawitt, D. F. (2017). Auditoría: Un enfoque basado en riesgos (9.ª ed.). McGraw-Hill.",
            "Hayes, R., Wallage, P., & Gortemaker, H. (2014). Principles of Auditing: An Introduction to International Standards on Auditing (3rd ed.). Pearson Education.",
            "Jensen, M. C., & Meckling, W. H. (1976). Theory of the firm: Managerial behavior, agency costs and ownership structure. Journal of Financial Economics, 3(4), 305–360.",
            "Porter, B. (1993). An empirical study of the audit expectation-performance gap. Accounting and Business Research, 24(93), 49–68.",
            "Spence, M. (1973). Job market signaling. The Quarterly Journal of Economics, 87(3), 355–374.",
            "García-Blandon, J., Argilés-Bosch, J. M., & Ravenda, D. (2020). Audit firm tenure and audit quality. Journal of International Financial Management & Accounting, 31(1), 35–64.",
            "Alzeban, A. (2020). Influence of internal audit reporting line and implementing internal audit recommendations on financial reporting quality. Meditari Accountancy Research, 28(1), 26–50.",
            "Horton, J., Livne, G., & Pettinicchio, A. (2020). Empirical evidence on audit quality under a dual mandatory auditor rotation rule. European Accounting Review, 30(1), 1–29.",
            "Alzoubi, E. (2020). Auditor independence and audit quality: Theoretical approach. Corporate Ownership & Control, 17(2), 125–140.",
            "Noch, M. Y. (2020). Audit and the role of auditing: An exposition of the underpinning theories. International Journal of Auditing.",
            "Saliha, S., & Flayyih, A. (2020). Audit risk and detection risk in modern auditing. Journal of Finance and Auditing Studies.",
            "Lambru, D., et al. (2020). The effectiveness of risk-based audit in financial institutions. Journal of Management & Finance.",
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
