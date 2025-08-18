/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MPCL", // Maestría en Psicología Clínica (ajústalo si tu convención interna difiere)
  courseId: "MPCL-PBCC", // Psicoterapia Breve Cognitivo‑Conductual
  id: "MPCL-PBCC-mod2", // ID único del módulo 2

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Psicoterapia breve cognitivo-conductual", // :contentReference[oaicite:9]{index=9}
  title: "Módulo 2. Modelos conductuales", // “Unidad o tema: Modelos conductuales” → título del módulo. :contentReference[oaicite:10]{index=10}
  semestre: "4° semestre", // :contentReference[oaicite:11]{index=11}
  teacher: "Mtro. Iván López Ortiz", // :contentReference[oaicite:12]{index=12}

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Identificar el proceso de aplicación de los procesos básicos de condicionamiento clásico y operante en la terapia conductual.", // :contentReference[oaicite:13]{index=13}

  competencies: [
    "Define las relaciones entre las diferentes prácticas del análisis de la conducta para reconocer las características distintivas de la práctica clínica basada en análisis de la conducta.", // :contentReference[oaicite:14]{index=14}
    "Identifica la estructura general de la terapia conductual con la finalidad de identificar su impacto en las terapias cognitivo-conductuales.", // :contentReference[oaicite:15]{index=15}
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

    /* Unidad 2 (según el PDF) */
    {
      id: "2",
      numbering: "Unidad 2",
      title: "Modelos conductuales", // ver ficha del material
      content: [
        {
          type: "paragraph",
          text: "En esta unidad estudiarás los modelos conductuales que articulan el puente entre los principios \
del condicionamiento y su aplicación clínica. Partimos de una constatación clave: los principios del \
condicionamiento clásico y operante se desarrollaron en la psicología básica, y su “extensión” a problemas \
socialmente relevantes se logra mediante investigación aplicada que, una vez probada, guía la práctica \
profesional. Esta perspectiva evita reduccionismos: no se trata de transplantar técnicas aisladas, sino de \
comprender cómo la evidencia transforma procedimientos en intervenciones clínicamente pertinentes. \
Trabajaremos con un hilo conductor que recorre desde el método terapéutico y la relación terapéutica, \
hasta procedimientos respondientes (recondicionamiento), operantes (reforzamiento, extinción, economía \
de fichas) y estrategias de aprendizaje observacional. La ambición de la unidad es doble: dominar los \
conceptos y saber leer los problemas clínicos a la luz de contingencias, antecedentes y consecuencias, \
con la claridad que exige una práctica responsable y verificable. Este marco te permitirá integrar cada \
técnica a la función del comportamiento objetivo —nunca al revés—, avanzando hacia una terapia \
conductual técnicamente sólida y conceptualmente sistemática.",
        },

        {
          type: "paragraph",
          text: "Para asegurar rigor y calidad adoptaremos las siete dimensiones de la investigación conductual aplicada \
(ABA) como criterios de excelencia trasladables a la clínica: aplicada, conductual, analítica, tecnológica, \
conceptualmente sistemática, efectiva y generalizable. ‘Aplicada’ exige que los objetivos tengan valor \
social; ‘conductual’ pide definir la conducta en términos observables y medibles; ‘analítica’ demanda \
demostrar relaciones funcionales entre variables independientes y dependientes; ‘tecnológica’ obliga a \
describir procedimientos replicables en términos de contingencias exactas; ‘conceptualmente sistemática’ \
vincula las técnicas con los principios subyacentes, evitando colecciones de “trucos” inconexos; ‘efectiva’ \
pone el listón en cambios clínicamente significativos; y ‘generalizable’ enfatiza mantenimiento, \
transferencia y amplitud de efecto. Estos criterios no son retórica: constituyen un filtro para decidir qué \
procedimientos adoptamos, cómo los describimos y cómo evaluamos su impacto. En la unidad los \
revisarás aplicados al diseño de intervención, la selección de técnicas respondientes u operantes y la \
evaluación de resultados, con foco en metas funcionales y en la utilidad real para el paciente.",
        },

        {
          type: "accordion",
          header: "Mapa de navegación de la unidad",
          open: false,
          items: [
            {
              title: "Qué estudiarás",
              text: "Revisarás el método terapéutico, la relación terapéutica, técnicas de recondicionamiento \
(respondientes), técnicas operantes (moldeamiento, reforzamiento, extinción, economía de fichas), \
técnicas de modelado/aprendizaje observacional y la articulación con terapias cognitivo‑conductuales. \
El énfasis está en integrar procedimiento y función clínica, no en recetas generales.",
            },
            {
              title: "Cómo lo trabajarás",
              text: "Partirás del análisis funcional del comportamiento para formular hipótesis de origen y mantenimiento; \
a partir de ahí seleccionarás procedimientos, definirás conductas‑objetivo observables y establecerás \
métricas de resultado. Practicarás el uso de sistemas de registro (directos e indirectos) y el formato ABC \
para construir decisiones terapéuticas basadas en datos.",
            },
            {
              title: "Criterios de calidad (ABA) en la práctica",
              text: "Cada técnica se justificará por su principio subyacente (sistematicidad conceptual), se describirá \
tecnológicamente (replicabilidad) y se evaluará por su efectividad y generalización. La toma de decisiones \
clínicas se documentará de forma analítica para mostrar relaciones funcionales y asegurar relevancia \
aplicada para el paciente y su contexto.",
            },
          ],
        },

        {
          type: "paragraph",
          text: "El eje metodológico será el análisis funcional del comportamiento. Describirás el problema clínico en \
términos operativos (morfología, frecuencia, duración) y, sobre todo, en función de antecedentes y \
consecuentes que lo establecen y mantienen. Distinguirás clases respondientes y operantes, \
identificando estímulos provocadores (en respondiente) y variables de reforzamiento o evitación (en \
operante). Esta lectura funcional guía la selección de procedimientos: si el problema se mantiene por \
reforzamiento negativo, el plan debe alterar esas contingencias; si implica respuestas condicionadas de \
ansiedad, recondicionamiento o desensibilización sistemática pueden ser pertinentes; si requiere \
adquisición de repertorios, recurriremos a técnicas operantes o modelado. Así, el “qué hacer” procede del \
“por qué ocurre”, fortaleciendo la coherencia entre evaluación, intervención y resultados clínicos.",
        },

        {
          type: "paragraph",
          text: "Para tomar decisiones basadas en evidencia, emplearás sistemas de recolección de datos directos \
(observación sistemática, autorregistro) e indirectos (entrevista, autoinformes). El registro ABC —\
antecedente, conducta, consecuencia— sintetiza la triple contingencia y te permite formular y contrastar \
hipótesis funcionales, diferenciando entre contingencias de origen y de mantenimiento. Con estos \
insumos, planearás el tratamiento, definirás metas conductuales y monitorearás progreso con indicadores \
conductuales sensibles al cambio. El objetivo no es sólo significancia estadística, sino relevancia clínica, \
mantenimiento y generalización a contextos naturales. Esta disciplina de medición hará que la discusión \
sobre técnica (respondiente, operante o modelado) deje de ser ideológica y se convierta en un problema \
bien planteado de relación funcional y efectividad verificable.",
        },

        {
          type: "paragraph",
          text: "Finalmente, ubicamos la unidad en un marco profesional responsable. La formación del psicoterapeuta \
implica dominio teórico y práctica supervisada; por ello, el estudio de procedimientos se acompaña de \
delimitaciones éticas y de alcance. En los apartados siguientes verás el método terapéutico y su \
justificación funcional; analizarás la relación terapéutica como condición de aprendizaje; recorrerás \
procedimientos de recondicionamiento para respuestas respondientes; estrategias operantes para \
excesos y déficits conductuales; y el modelado como transferencia de repertorios mediante observación. \
Cerraremos con el enlace a terapias cognitivo‑conductuales, donde los principios conductuales se \
integran con procesos cognitivos para intervenir problemas complejos conservando claridad funcional. \
El resultado esperado: intervenciones precisas, replicables y útiles para la vida diaria del paciente.",
        },
      ],

      /* TEMAS — solo 2.4 a 2.9 */
      subthemes: [
        {
          id: "2.4",
          numbering: "2.4",
          title: "Método terapéutico",
          id: "2.4",
          numbering: "2.4",
          title: "Método terapéutico",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "El método terapéutico que trabajaremos se organiza como una secuencia clara de evaluación, \
psicoeducación y planificación de intervención. El proceso inicia con entrevistas dirigidas a obtener \
una historia clínica funcional: se identifican dificultades y síntomas, se exploran las situaciones que \
desencadenaron el problema y los factores que agravan o atenúan la respuesta del paciente. La historia \
clínica puede recabarse en un rango de una a doce entrevistas (sesiones de 45 minutos), lo que ofrece \
suficiente resolución para formular hipótesis sin prolongar innecesariamente la fase evaluativa. Al cierre \
de esta fase, se administra un cuestionario de autosuficiencia para estimar la dificultad prevista en la \
realización de tareas terapéuticas, especialmente aquellas vinculadas con la exposición gradual y la \
práctica de respuestas que compitan con la ansiedad. A continuación, se incluye una prueba de \
neuroticismo para mapear áreas productoras de ansiedad y afinar la explicación funcional. Con esa \
información, el terapeuta ofrece una psicoeducación precisa: cómo se ha condicionado la respuesta \
ansiosa, por qué ciertas señales la disparan y de qué manera el tratamiento romperá la asociación entre \
condiciones provocadoras y reacciones del paciente. Desde este punto, se pactan actividades \
estructuradas intra y extra sesión para instaurar nuevos aprendizajes y debilitar hábitos ansiosos. Este \
andamiaje —historia clínica, medición base, prueba complementaria, explicación funcional y tareas— \
ordena la toma de decisiones posterior y garantiza trazabilidad entre evaluación, intervención y \
resultados clínicamente significativos.",
            },

            // Acordeón 1 — Secuencia del método
            {
              type: "accordion",
              header: "Secuencia del método terapéutico (resumen operativo)",
              open: false,
              text:
                "• Entrevistas iniciales para historia clínica (1–12 sesiones de 45 min).  \n" +
                "• Cuestionario de autosuficiencia para estimar dificultad en tareas terapéuticas.  \n" +
                "• Prueba de neuroticismo para ubicar áreas productoras de ansiedad.  \n" +
                "• Psicoeducación: causas por condicionamiento y plan para romper el nexo estímulo‑ansiedad.  \n" +
                "• Asignación de tareas: algunas en sesión y otras en casa (exposición gradual y práctica de respuestas).",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "Tras la psicoeducación, la decisión central del terapeuta es seleccionar la respuesta inhibidora de la \
ansiedad que mejor se ajuste a la topografía del problema y a las condiciones que lo mantienen. La \
lógica es funcional: si la ansiedad se dispara en contextos interpersonales directos, las respuestas \
asertivas —expresión de enfado, disgusto o desacuerdo— ofrecen una vía de intervención que permite \
modificar contingencias sociales y eliminar la evitación; si la ansiedad está anclada a situaciones de \
índole sexual, se recurre a repertorios sexuales adecuados; cuando el estímulo provocador no permite \
una acción directa, la relajación es una respuesta de elección para debilitar la activación condicionada. \
Este mapeo no es un “recetario” sino una guía para ensamblar procedimientos coherentes con la \
función del caso. En la práctica, se operacionalizan metas, se definen criterios de logro para cada \
actividad y se calendariza la progresión de tareas. La misma secuencia (explicación + tareas \
estructuradas) refuerza la adherencia: el paciente entiende qué objetivo persigue cada ejercicio, por qué \
se ordenan en esa secuencia y cómo mediremos el avance. Con ello, la intervención progresa de \
hipótesis a verificación: se observan cambios en la intensidad/latencia de la ansiedad, en la tasa de \
evitación y en la capacidad del paciente para exponerse y desplegar la respuesta incompatible.",
            },

            // Acordeón 2 — Criterios para elegir la respuesta inhibidora
            {
              type: "accordion",
              header:
                "Elección de respuestas inhibidoras (criterios prácticos)",
              open: false,
              text:
                "• Asertivas → cuando la ansiedad surge en relaciones interpersonales directas.  \n" +
                "• Sexuales → cuando la ansiedad se provoca por situaciones de índole sexual.  \n" +
                "• Relajación → cuando no es posible una acción directa sobre los estímulos provocadores.  \n" +
                "• Nota metodológica: las asertivas se prestan a procedimientos operantes (moldeamiento, instigación); \
las sexuales dependen en gran medida de tareas entre sesiones; la relajación se integra frecuentemente \
en desensibilización sistemática (reacondicionamiento).",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "Para cerrar el método, se articulan decisiones técnicas con medición continua. Cuando se eligen \
respuestas asertivas, su implementación se apoya en principios operantes: instigación por modelado o \
instrucciones para disparar la primera emisión, moldeamiento para aproximaciones sucesivas y \
reforzamiento diferencial para consolidar el repertorio. En repertorios sexuales, el énfasis recae en \
tareas estructuradas entre sesiones con criterios explícitos de práctica y retroalimentación. La respuesta \
de relajación, por su parte, se integra con la desensibilización sistemática: jerarquías de ansiedad \
construidas a partir de la historia clínica y la prueba de neuroticismo se recorren gradualmente mientras \
el paciente ejecuta la respuesta incompatible; este procedimiento es funcionalmente equivalente al \
reacondicionamiento clásico. El hilo conductor de todas las variantes es el mismo: análisis funcional, \
selección por función, procedimientos descritos tecnológicamente y evaluación de resultados. Con este \
marco, el plan terapéutico se convierte en un sistema vivo de hipótesis y datos: cada semana se revisa \
qué tareas se completaron, qué reacciones aparecieron, qué ajustes requiere la jerarquía o la \
programación de reforzamiento, y cómo se sostiene la generalización a contextos naturales. Así se \
garantiza que el método no solo sea teóricamente coherente, sino también eficientemente breve y \
clínicamente significativo.",
            },
          ],
        },
        {
          id: "2.5",
          numbering: "2.5",
          title: "La relación terapéutica",
          content: [
            // Párrafo 1 (~300 palabras)
            {
              type: "paragraph",
              text: "En terapia conductual, la relación terapéutica no es un fin en sí mismo, sino un medio técnicamente \
orientado a producir aprendizaje y cambio conductual con valor clínico. Por ello se define funcionalmente: \
es el conjunto de condiciones interpersonales que facilitan la evaluación precisa, la adherencia a tareas \
y la modificación de las contingencias que mantienen los problemas. Esto exige claridad de roles, acuerdos \
explícitos y medición continua. El vínculo se construye desde el primer contacto con una comunicación \
operativa (metas en términos observables, criterios de éxito) y una disposición colaborativa centrada en \
datos. El terapeuta modela conductas objetivo (p. ej., autoobservación, tolerancia a la ansiedad \
situacional, práctica deliberada) y refuerza diferencialmente aproximaciones exitosas. Paralelamente, \
protege límites éticos (confidencialidad, uso de la información, alcance de la intervención), lo cual \
incrementa la percepción de control y seguridad del paciente, y reduce la evitación como respuesta \
automantenida. En esta lógica, la alianza no se delimita por rasgos vagos (p. ej., “buena química”) sino \
por acuerdos verificables sobre metas, tareas y el vínculo de trabajo. La alianza se monitorea con \
observación sistemática y retroalimentación abierta, previniendo rupturas por discrepancias no detectadas \
en objetivos o métodos. Así, la relación se convierte en un marco de aprendizaje: cada interacción \
intercambia información funcional (antecedentes, conducta, consecuencias) y ajusta la intervención en \
tiempo real. En suma, una relación terapéutica técnicamente diseñada aumenta la probabilidad de \
adherencia, la generalización de logros a contextos naturales y la relevancia clínica de los cambios, \
alineando el trabajo interpersonal con los principios del análisis funcional del comportamiento.",
            },

            // Imagen (ilustrativa)
            {
              type: "image",
              src: "https://kibbutzpsicologia.com/wp-content/uploads/habilidades-terapueticas.webp",
              caption: "Sesión de consejería/psicoterapia.",
              alt: "Persona en sesión de consejería con profesional",
              text: "",
            },

            // Párrafo 2 (~300 palabras)
            {
              type: "paragraph",
              text: "Operativamente, la alianza se compone de tres acuerdos: metas, tareas y vínculo de trabajo. En el \
enfoque conductual, el acuerdo sobre metas implica definir conductas‑objetivo con métricas (frecuencia, \
duración, latencia) y estados deseables (p. ej., incremento de exposición, reducción de evitación). El \
acuerdo sobre tareas especifica qué hará cada parte: el terapeuta diseña, modela y ajusta procedimientos; \
el paciente practica tareas intra y extra sesión, registra datos y reporta barreras. El vínculo se expresa \
en una interacción predecible y respetuosa, con refuerzo contingente al esfuerzo y tolerancia al error \
como parte del moldeamiento. Las rupturas se analizan funcionalmente: resistencia y deserción suelen \
funcionar como evitación negativa ante tareas percibidas como aversivas o poco graduadas. La reparación \
implica recalibrar jerarquías, desglosar pasos, ajustar reforzadores y transparentar el porqué de cada \
exposición o práctica. El terapeuta evita dos riesgos: sobrerresponsabilizar al paciente (culpabilización \
si no cumple) o sobrecargar la relación con conversaciones no funcionales que refuerzan quejas y \
rumiaciones. Mantener la alianza en clave tecnológica requiere describir con precisión las contingencias \
de sesión (qué se refuerza, qué se extingue, qué se posterga), documentar hipótesis y contrastarlas con \
datos semanales. El resultado es una relación que enseña al paciente a leer su conducta y contexto en \
términos de antecedentes y consecuencias, favoreciendo la autorregulación y la toma de decisiones \
alineadas con sus metas clínicas verificables.",
            },

            // Lista 1 — Buenas prácticas conductuales para fortalecer la relación
            {
              type: "list",
              style: "unordered",
              items: [
                "Contrato conductual claro: metas operativas, criterios de logro y calendario.",
                "Uso del registro ABC conversacional para anclar cada dificultad a datos observables.",
                "Reforzamiento diferencial del esfuerzo y de las aproximaciones exitosas.",
                "Psicoeducación breve y específica sobre el porqué de cada tarea (evita recetas).",
                "Graduación realista de tareas para prevenir evitación y abandonos.",
                "Límites explícitos (horarios, comunicación, privacidad, roles) desde la primera sesión.",
                "Chequeos de alianza programados (micro‑feedback al final de la sesión).",
                "Plan de generalización: definir contextos y señales para trasladar logros a la vida diaria.",
              ],
            },

            // Párrafo 3 (~300 palabras)
            {
              type: "paragraph",
              text: "La ética y los límites son parte constitutiva de la relación y cumplen una función técnica: sostienen \
la percepción de seguridad y control, condiciones necesarias para el aprendizaje. La confidencialidad se \
explica en términos concretos (qué se registra, quién accede, cuándo se comparte), al igual que el \
consentimiento informado (objetivos, procedimientos, riesgos, alternativas). Se delimita el alcance de la \
práctica y se establecen protocolos para crisis, siempre comunicados con lenguaje claro. La diversidad \
cultural y contextual se aborda funcionalmente: no se imponen agendas, se analizan las contingencias \
reales del entorno del paciente (familia, trabajo, comunidad) y se negocian tareas viables, ajustando \
reforzadores a lo que es naturalmente disponible. La alianza se protege de microfracturas mediante \
revisión de metas, re‑acuerdo de tareas cuando aparezcan barreras y validación de la experiencia del \
paciente sin reforzar la evitación. Las rupturas mayores (p. ej., cancelaciones repetidas, nulo cumplimiento \
de tareas) se interpretan como señales para rediseñar el programa: simplificar pasos, introducir \
modelado, aumentar instigación o trabajar brevemente control estimular antes de retomar la exposición. \
Se recomienda incorporar métricas de proceso (adhesión, práctica, satisfacción con la sesión) y de \
resultado (conductas objetivo), para sustentar decisiones con evidencia y demostrar efectividad clínica. \
Con este andamiaje, la relación terapéutica es un contexto controlado donde se instauran repertorios \
útiles y se extinguen patrones desadaptativos, maximizando mantenimiento y generalización tras el \
cierre terapéutico.",
            },

            // Lista 2 — Señales de riesgo y estrategias de reparación de alianza
            {
              type: "list",
              style: "ordered",
              items: [
                "Desacuerdo en metas/tareas → Re‑contractualizar en términos operativos y reescalar dificultad.",
                "Evitación de tareas → Fragmentar pasos, incrementar modelado/instigación y ajustar reforzadores.",
                "Retroalimentación vaga o tardía → Introducir micro‑feedback estructurado al final de cada sesión.",
                "Sensación de falta de progreso → Revisar hipótesis funcionales y métricas; cambiar procedimiento si no hay efecto.",
                "Microfallos de empatía → Validar sin reforzar la queja; volver al análisis funcional de barreras reales.",
                "Límites difusos → Reafirmar reglas de encuadre (contacto, horarios, confidencialidad, derivaciones).",
              ],
            },
          ],
        },
        {
          id: "2.6",
          numbering: "2.6",
          title: "Técnicas de recondicionamiento",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "Las técnicas de recondicionamiento se apoyan en principios respondientes para debilitar respuestas de ansiedad que han sido condicionadas a ciertos estímulos (internos o externos) y sustituirlas por respuestas incompatibles. El procedimiento general es claro: primero, psicoeducación funcional para explicar cómo se estableció el vínculo estímulo-ansiedad y por qué se mantiene; segundo, construcción de una jerarquía de situaciones disparadoras graduada por intensidad; tercero, entrenamiento de la respuesta incompatible elegida (p. ej., relajación) y su práctica sistemática; cuarto, exposición ordenada a los ítems de la jerarquía mientras se ejecuta la respuesta inhibidora hasta obtener habituación y/o nuevas asociaciones inhibitorias; y quinto, verificación de progreso y generalización a contextos naturales. En esta lógica, la desensibilización sistemática es un formato paradigmático: el paciente avanza por la jerarquía (imaginada o en vivo) entrenando la respuesta incompatible y registrando descensos en la activación. El principio de inhibición recíproca explica la elección de la respuesta: no se “apaga” la ansiedad por mera voluntad, sino que se establece una conducta que compite fisiológica y conductualmente con ella; de ahí que, cuando la situación lo permite, también puedan emplearse repertorios asertivos o sexuales (según el caso) como respuestas de elección. Técnicamente, el recondicionamiento exige definir con precisión los estímulos que funcionan como EC, medir la RC (intensidad, latencia, evitación) y controlar variables de sesión (duración suficiente, repeticiones, intervalos) para lograr efectos estables. El objetivo no es solo reducir síntomas en consulta, sino consolidar aprendizaje que se mantenga y se traslade a la vida diaria.",
            },

            // Lista 1 — Preparación y dosificación (guía operativa)
            {
              type: "list",
              style: "unordered",
              items: [
                "Psicoeducación breve: modelo EC–EI→RC explicado con ejemplos del caso.",
                "Jerarquía de ansiedad: 10–20 ítems, ordenados por intensidad, con criterios concretos de avance.",
                "Respuesta incompatible entrenada antes de la exposición (p. ej., relajación, respiración diafragmática).",
                "Ensayos suficientes por ítem: duración prolongada, sin conductas de seguridad que interrumpan el aprendizaje.",
                "Registro por sesión: intensidad/latencia de la RC, evitación, recuperación espontánea y notas de generalización.",
              ],
              text: "",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "El corazón del recondicionamiento está en el **cómodo control de variables**: se avanza cuando la respuesta de ansiedad disminuye de forma consistente y la persona puede sostener la situación con la respuesta incompatible. En desensibilización sistemática, el entrenamiento en relajación (o técnicas afines) antecede a la exposición y se usa activamente durante los ítems; en aplicaciones más situacionales, la práctica puede ser en vivo, con modelado gradual y coaching atencional. Para construir la jerarquía se parte de situaciones concretas, señales contextuales y sensaciones interoceptivas, asignando puntuaciones (0–100) y describiendo conductas objetivo visibles (qué hará el paciente para permanecer en el ítem). La progresión exige evitar ‘atajos’ que reintroduzcan evitaciones sutiles (mirar al piso, respirar de forma estratégicamente evitativa, uso de distractores internos) pues interfieren con el aprendizaje. En términos de resultados, se monitorea la curva de habituación intra- e inter-sesión, la tasa de evitación y la capacidad de ejecutar la respuesta incompatible bajo demanda. Cuando la situación no permite una acción directa (p. ej., disparadores difusos), la respuesta incompatible de elección suele ser relajación; cuando el disparador es social y la evitación opera en la interacción, respuestas asertivas escaladas funcionan como inhibidoras naturales; y en casos de ansiedad de índole sexual, se planifican repertorios adecuados con práctica entre sesiones. La clave es **ajustar la respuesta inhibidora a la función del estímulo**: la técnica no se impone por rótulo, se selecciona por su capacidad para competir causalmente con la ansiedad en el contexto real del paciente.",
            },

            // Imagen — Apoyo visual
            {
              type: "image",
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjFZ8pXIJaf5kl1HeMBhR_t6iYLYQy3fxcg&s",
              caption:
                "Recondicionamiento: jerarquía, respuesta incompatible y exposición graduada.",
              alt: "Ilustración conceptual de escalera de exposición con práctica de relajación",
              text: "",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "Para garantizar mantenimiento y generalización, el plan incorpora variabilidad de estímulos y contextos: cambiar lugares, momentos del día y señales para evitar que el aprendizaje quede ‘atado’ a la consulta. También se prevé la **recuperación espontánea** y la **renovación contextual**, programando ensayos de repaso en ambientes distintos y revisitas breves a ítems superados. Un riesgo común es la convivencia inadvertida de procesos operantes que sostienen la ansiedad (p. ej., reforzamiento negativo de la evitación): por ello, el programa de recondicionamiento suele complementarse con procedimientos operantes (bloques de práctica sin escape, reforzamiento diferencial del afrontamiento) y con análisis de conductas de seguridad (identificarlas y extinguirlas). La evaluación se apoya en indicadores sensibles al cambio: reducción de intensidad/latencia de RC, disminución de evitación, incremento de tiempo de permanencia en ítems y transferencia a metas de vida. En términos de gobierno, cada sesión cierra con retroalimentación y ajuste de dosis (duración, frecuencia, paso siguiente); entre sesiones, el paciente completa tareas con instrucciones claras y criterios de logro. Desde una perspectiva ética, se establecen límites y protocolos de seguridad, especialmente cuando las exposiciones involucran contextos sociales complejos. En síntesis, el recondicionamiento es un **sistema de aprendizaje planificado**: explica, entrena, expone, mide y ajusta para que la ansiedad condicionada pierda control funcional y sea reemplazada por repertorios compatibles con los objetivos clínicos y la vida cotidiana del paciente.",
            },

            // Lista 2 — Errores frecuentes y cómo evitarlos (complemento)
            {
              type: "list",
              style: "ordered",
              items: [
                "Avanzar con ansiedad alta: espera descensos consistentes antes de subir en la jerarquía.",
                "Permitir ‘conductas de seguridad’: identificarlas, registrarlas y retirarlas de forma programada.",
                "Ensayos cortos o esporádicos: prioriza duración suficiente y práctica entre sesiones.",
                "Jerarquías vagas: define estímulos, contextos y conductas objetivo con precisión observable.",
                "No medir progreso: usa indicadores por sesión (RC, evitación, tiempo de permanencia, transferencias).",
              ],
              text: "",
            },
          ],
        },
        {
          id: "2.7",
          numbering: "2.7",
          title: "Técnicas operantes",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "Las técnicas operantes se centran en modificar la probabilidad de ocurrencia de conductas \
objetivo alterando sistemáticamente sus antecedentes y consecuencias. En la práctica clínica \
conductual, la selección e implementación de estos procedimientos jamás es arbitraria: deriva de un \
análisis funcional que distingue si el problema es primordialmente operante y qué variables lo \
mantienen (reforzamiento positivo, reforzamiento negativo, estímulos discriminativos, reglas, etc.). \
Por ello, antes de elegir reforzamiento diferencial, extinción, costo de respuesta o economías de \
fichas, se definen conductas en términos observables y se documentan datos mediante sistemas \
directos (observación, autorregistros) o indirectos (entrevistas, autoinformes), integrados en \
formatos como el registro ABC, que organiza antecedentes, conducta y consecuencias, y permite \
formular hipótesis sobre la función (por ejemplo, si una conducta se mantiene por escape/evitación). \
Este andamiaje evita caer en “técnicas sueltas” y asegura trazabilidad entre hipótesis y decisión \
procedimental. Adicionalmente, la práctica profesional toma como criterios de calidad las siete \
dimensiones de ABA: aplicada (valor social), conductual (definición y medición), analítica \
(demostración de relaciones funcionales), tecnológica (procedimientos descritos para su réplica), \
conceptualmente sistemática (vincular cada técnica con su principio), efectiva (cambio clínicamente \
significativo) y generalizable (mantenimiento y transferencia). Así, el uso de reforzadores, la \
manipulación de esquemas, el moldeamiento y el encadenamiento dejan de ser “recetas” y pasan \
a ser decisiones justificadas por función, medibles y comunicables con precisión técnica.",
            },

            // Lista 1 — Catálogo breve de técnicas operantes (apoyo para el alumno)
            {
              type: "list",
              style: "unordered",
              items: [
                "Reforzamiento diferencial (DRO, DRI, DRA, DRL) según función y topografía.",
                "Extinción: retirar la consecuencia que mantiene la conducta (cuidar estallidos).",
                "Economía de fichas y contratos conductuales con criterios y canje claros.",
                "Costo de respuesta y sobrecorrección (uso prudente y con lineamientos éticos).",
                "Moldeamiento: aproximaciones sucesivas con criterios de avance explícitos.",
                "Encadenamiento hacia atrás/adelante para habilidades complejas.",
                "Entrenamiento en discriminación y control estimular (ED/SD, reglas).",
                "Programación de reforzadores (razón/intervalo, fijo/variable) y desvanecimiento.",
              ],
              text: "",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "Operativamente, el recorrido típico inicia con la **descripción conductual** (morfología, frecuencia, \
duración y latencia) y con la **evaluación funcional** para identificar antecedentes y consecuencias \
que establecen y mantienen la conducta; en problemas operantes es clave determinar el tipo de \
reforzador en juego (p. ej., escape que reduce ansiedad) y los estímulos que señalan disponibilidad \
del reforzamiento. A partir de ello, se selecciona un arreglo de contingencias congruente con la \
función: reforzamiento diferencial del comportamiento alternativo cuando el exceso se sostiene por \
refuerzo social; extinción del escape junto con exposición graduada cuando hay evitación \
negativa; o entrenamiento de habilidades con moldeamiento y encadenamiento cuando se trate de \
déficits. El registro ABC ayuda a verificar hipótesis y a monitorear cambios sesión a sesión, \
vinculando cada ajuste con datos. En planificación, también es útil clasificar el caso como exceso o \
déficit conductual para prefigurar las familias de procedimientos efectivos (p. ej., reforzamiento \
diferencial y extinción en excesos; moldeamiento, práctica programada y economía de fichas en \
déficits). Con esta lógica, la intervención se vuelve un ciclo: formular → intervenir → medir → \
ajustar, buscando evidencia de relaciones funcionales (que la manipulación de la consecuencia o \
del antecedente produzca el cambio esperado) y no solo correlaciones incidentales. Finalmente, la \
justificación de cada técnica debe poder describirse tecnológicamente (qué reforzadores, con qué \
criterios, en qué esquema) y conectarse con el principio subyacente, evitando colecciones de trucos \
difíciles de enseñar o replicar.",
            },

            // Imagen — Ilustrativa (control estimular y contingencias)
            {
              type: "image",
              src: "https://kibbutzpsicologia.com/wp-content/uploads/tecnicas-operantes.png",
              caption:
                "Diseño de contingencias: antecedentes (SD), conducta y consecuencias (reforzadores).",
              alt: "Diagrama conceptual de control estimular y reforzamiento",
              text: "",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "El éxito clínico de las técnicas operantes depende de su **gobernanza por datos** y de su \
inserción en metas con valor social para el paciente. En términos prácticos, se definen criterios de \
maestría (por ejemplo, tres sesiones consecutivas en criterio), se documentan las contingencias de \
sesión (qué se refuerza, qué se extingue) y se establecen prácticas de generalización: variar \
contextos, personas, estímulos y demoras; planear el desvanecimiento de ayudas y reforzadores; \
y probar mantenimiento con repeticiones espaciadas. También se previenen efectos colaterales: en \
extinción, anticipar estallidos y variabilidad; en economía de fichas, asegurar reforzadores de \
calidad y un canje claro; en contratos, definir conductas por observables y verificar reciprocidad. \
Desde la ética, se prioriza el reforzamiento positivo y el entrenamiento de habilidades por encima de \
procedimientos aversivos; cuando se usan, se documentan razones, parámetros y salvaguardas. \
Finalmente, toda decisión debe aspirar a ser aplicada, efectiva y generalizable: que los cambios \
sean clínicamente relevantes (no solo estadísticos), que se mantengan en el tiempo y que ocurran \
en diversos ambientes. Con esta disciplina, las técnicas operantes dejan de ser un listado y se \
convierten en un sistema de diseño de contingencias ajustado a la función del problema, \
replicable y transparente para el paciente y para la supervisión clínica.",
            },

            // Lista 2 — Checklist de implementación y control de calidad (para la práctica)
            {
              type: "list",
              style: "ordered",
              items: [
                "Definir la conducta objetivo y las métricas (frecuencia, duración, latencia).",
                "Formular hipótesis funcional (origen/mantenimiento) con registro ABC y datos.",
                "Elegir técnica por función (no por rótulo); describir parámetros tecnológicamente.",
                "Programar reforzadores (tipo, magnitud, esquema) y plan de desvanecimiento.",
                "Monitorear indicadores sensibles (efecto, colaterales, generalización y mantenimiento).",
                "Ajustar semanalmente con base en datos; documentar decisiones y resultados.",
              ],
              text: "",
            },
          ],
        },
        {
          id: "2.8",
          numbering: "2.8",
          title: "Técnicas de modelado",
          content: [
            // Párrafo 1
            {
              type: "paragraph",
              text: "En el contexto clínico conductual, el modelado es un procedimiento de enseñanza \
basado en la observación de un repertorio objetivo ejecutado por un modelo (terapeuta, \
par, video o el propio paciente) para que el observador lo adquiera y lo reproduzca con \
criterios de desempeño definidos. Su uso se justifica cuando el análisis funcional indica \
déficits conductuales (falta de habilidades) y, por tanto, la intervención requiere \
construir topografías nuevas más que suprimir excesos. El proceso habitual incluye: \
(1) especificación operativa de la conducta meta; (2) análisis de tareas y encadenamiento \
de pasos; (3) arreglo de estímulos discriminativos (dónde, cuándo, con quién); \
(4) demostración del modelo con descomposición visible de micro-pasos; \
(5) instigación/prompting y desvanecimiento programado; (6) práctica guiada con \
retroalimentación inmediata centrada en conducta; y (7) reforzamiento diferencial y plan \
de generalización. En vivo, el terapeuta muestra la conducta, resalta claves críticas \
(“atención guiada”) y luego solicita la ejecución, ajustando ayuda y reforzadores según la \
curva de aprendizaje. En modelado participante, el paciente actúa después de cada \
subpaso hasta lograr la cadena completa. En modelado simbólico (video, audio, guion), \
se controla la complejidad del estímulo y se favorece la repetición; el auto-modelado \
usa grabaciones del propio paciente ejecutando versiones correctas (o editadas) del \
repertorio. La eficacia depende de la similitud y la competencia percibida del modelo, la \
saliencia de las claves y la contingencia del reforzamiento; por ello, se diseñan \
ensayos suficientes, con criterios explícitos de avance y métricas sensibles (frecuencia, \
duración, latencia y calidad del desempeño) que muestren adquisición y mantenimiento.",
            },

            // ── Acordeón A — Tipos de modelado (resumen operativo) ─────────────────────────
            {
              type: "accordion",
              header: "Tipos de modelado (resumen operativo)",
              open: false,
              items: [
                {
                  title: "Modelado en vivo y participante",
                  text:
                    "El terapeuta demuestra el paso; el paciente lo reproduce de inmediato. " +
                    "Útil para habilidades sociales, exposición con entrenamiento asertivo y manejo de situaciones interpersonales. " +
                    "Requiere desvanecer ayudas y reforzar aproximaciones.",
                },
                {
                  title: "Modelado simbólico (video/audio/guiones)",
                  text:
                    "Permite control de complejidad, repetición y práctica fuera de sesión. " +
                    "Incluye video-modelado, guiones con claves verbales y role-play con instrucciones escalonadas para consolidar discriminaciones.",
                },
                {
                  title: "Auto-modelado y modelado encubierto",
                  text:
                    "El paciente observa su propia ejecución ‘criterio’ (grabada/edición) o imagina la respuesta correcta paso a paso. " +
                    "Favorece autoeficacia y mantenimiento si se acompaña de práctica real y criterios objetivos.",
                },
              ],
              text: "",
            },

            // Párrafo 2
            {
              type: "paragraph",
              text: "Para implementar modelado con calidad tecnológica se parte de una línea base \
descriptiva del desempeño y de un análisis funcional que identifique antecedentes y \
consecuencias relevantes. Se redacta un análisis de tareas con metas intermedias \
observables y se eligen los prompts más económicos (verbales, gestuales, físicos \
graduados o visuales), con desvanecimiento planificado para transferir el control al \
estímulo natural. La sesión sigue un ciclo: atención → demostración → práctica \
repetida → retroalimentación específica → reforzamiento → registro. La retroalimentación \
se centra en componentes críticos (volumen de voz, latencia de respuesta, contacto \
ocular, secuencia de pasos), y se evitan juicios globales que no guían la conducta. \
Parámetros usuales incluyen número de ensayos por subpaso, criterio de maestría \
(p. ej., dos sesiones consecutivas ≥ 80% de pasos correctos sin ayuda), y pruebas breves \
de mantenimiento con demoras programadas. Para prevenir dependencia del modelo y \
de las ayudas, se varían contexto y estímulos (personas, lugares, horarios) y se promueve \
la autoevaluación con listas de cotejo. Cuando las funciones de la conducta problema \
involucran escape/evitación, el modelado se combina con bloqueos de evitación y \
reforzamiento diferencial del afrontamiento; cuando el problema es estrictamente un \
déficit, se priorizan moldeamiento y encadenamiento con reforzadores naturales \
que existan fuera de consulta.",
            },

            // ── Acordeón B — Parámetros técnicos y control de calidad ───────────────────────
            {
              type: "accordion",
              header: "Parámetros técnicos y control de calidad",
              open: false,
              items: [
                {
                  title: "Parámetros del modelo y del estímulo",
                  text:
                    "• Similitud y credibilidad del modelo para aumentar atención y adherencia.\n" +
                    "• Claves salientes (verbales/gestuales) y ritmo de demostración controlado.\n" +
                    "• Secuencia de dificultad graduada y errores prevenidos con prompts oportunos.",
                },
                {
                  title: "Métricas, reforzamiento y generalización",
                  text:
                    "• Criterios de maestría por pasos; checklist de desempeño con % de aciertos.\n" +
                    "• Reforzadores funcionales (sociales/naturales) con plan de desvanecimiento.\n" +
                    "• Pruebas de mantenimiento y variación de contextos (personas, lugares, tiempos).",
                },
              ],
              text: "",
            },

            // Párrafo 3
            {
              type: "paragraph",
              text: "Aplicaciones frecuentes del modelado incluyen entrenamiento en habilidades sociales, \
asertividad, manejo de conflictos, habilidades conversacionales, entrevista de trabajo, \
adhesión a tratamientos médicos, autocuidado y prácticas parentales. En ansiedad social, \
el modelado participante permite exposición guiada con demostración inmediata del \
repertorio meta, mientras que en habilidades complejas (p. ej., entrevistas) el video-modelado \
acorta tiempo de adquisición al estandarizar la demostración. El auto-modelado ofrece \
ganancias rápidas de autoeficacia cuando se registran avances y se editan secuencias \
criterio. Para casos con alta evitación, se combina con reforzamiento diferencial del \
afrontamiento y ensayo conductual sin escape. En la documentación, cada decisión \
debe ser tecnológicamente reproducible (qué modelo se usó, qué prompts, con qué \
parámetros y reforzadores), y estar enlazada conceptualmente a principios de \
aprendizaje (imitación, control estimular, reforzamiento, moldeamiento y \
encadenamiento). El éxito se verifica no solo por desempeño en sesión, sino por \
transferencia a contextos naturales y mantenimiento en el tiempo; por ello, se programan \
tareas entre sesiones y se acuerdan indicadores de impacto funcional (p. ej., número de \
interacciones iniciadas por semana, latencia para responder, reportes de retroalimentación \
natural del entorno).",
            },

            // Imagen (URL pública)
            {
              type: "image",
              src: "https://kibbutzpsicologia.com/wp-content/uploads/aprendizaje-observacional.png",
              caption:
                "Modelado en habilidades sociales: demostración, práctica guiada y retroalimentación.",
              alt: "Personas practicando habilidades de comunicación en un entorno formativo",
              text: "",
            },
          ],
        },
        {
          id: "2.9",
          numbering: "2.9",
          title: "Terapias cognitivo‑conductuales",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "En esta unidad, el término terapias cognitivo-conductuales (TCC) se entiende como un conjunto de intervenciones que integran principios y procedimientos conductuales —derivados de la psicología básica y consolidados vía investigación aplicada— con estrategias cognitivas que facilitan la puesta en marcha, el aprendizaje y la generalización del cambio clínico. El hilo rector es funcional: los problemas se formulan como conductas (respondientes u operantes) mantenidas por determinadas contingencias, y la intervención se diseña para alterar esas relaciones con evidencia de eficacia. Esta perspectiva evita yuxtaponer ‘técnicas’ por moda o eclecticismo y exige, en cambio, justificar cada decisión según los principios relevantes y los datos del caso. Así, el puente hacia la TCC no sustituye al análisis funcional, sino que lo amplía: se usan registros y formulaciones que aclaran antecedentes, conducta y consecuencias, y, cuando corresponde, se incorporan elementos cognitivos (psicoeducación precisa, autoinstrucciones operativas, plan de tareas, experimentos conductuales) para aumentar la probabilidad de nuevas respuestas y debilitar las pautas de evitación. En suma, “lo cognitivo” en la TCC opera como una herramienta que organiza, instruye y guía el despliegue de conductas objetivo, mientras que “lo conductual” asegura que el cambio observado sea atribuible a manipulaciones identificables y replicables (ancladas en principios), con efecto clínicamente relevante y transferible a contextos naturales.",
            },

            // Lista 1 — Componentes prácticos de una TCC breve guiada por función
            {
              type: "list",
              style: "unordered",
              items: [
                "Formulación funcional inicial (respondiente/operante) con hipótesis de mantenimiento.",
                "Uso del registro ABC y métricas sensibles (frecuencia, duración, latencia) en línea base.",
                "Psicoeducación precisa que conecte principios y plan (qué, por qué, cómo).",
                "Selección de procedimientos por función: recondicionamiento, operantes, modelado.",
                "Apoyos cognitivos: autoinstrucciones, planificación de tareas y experimentos conductuales.",
                "Criterios de maestría, generalización (variar contextos) y mantenimiento (repasos).",
              ],
              text: "",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "Operativamente, la TCC breve se despliega como un sistema de aprendizaje planificado. La evaluación delimita la topografía del problema y clarifica si predomina un proceso respondiente (ansiedad condicionada, p. ej.) u operante (conducta mantenida por reforzamiento), lo que guía la elección de procedimientos. Cuando la evidencia funcional indica ansiedad condicionada, se priorizan técnicas de recondicionamiento (p. ej., desensibilización sistemática con respuesta incompatible entrenada); si se observan excesos o déficits operantes, se emplean arreglos de contingencias (reforzamiento diferencial, extinción, moldeamiento/encadenamiento, economías de fichas). El componente cognitivo contribuye a instalar control estimular verbal útil (reglas, autoinstrucciones, planes de práctica) y a diseñar ‘experimentos conductuales’ que contrastan predicciones del paciente con datos de su propia conducta, sin perder el marco empírico: cada intervención debe estar descrita tecnológicamente (qué se hace, con qué parámetros, bajo qué condiciones) y conectada conceptualmente con los principios que la sustentan. La sesión sigue un ciclo claro: agenda → revisión de datos → intervención guiada → asignación de tareas con criterios de logro → retroalimentación y ajustes. De este modo, ‘cognitivo’ y ‘conductual’ no compiten: se integran para aumentar la probabilidad de respuestas objetivo y para documentar relaciones funcionales entre lo que el terapeuta manipula y lo que cambia en el paciente.",
            },

            // Lista 2 — Buenas prácticas y estándares de calidad (síntesis)
            {
              type: "list",
              style: "ordered",
              items: [
                "Aplicada, conductual y analítica: problemas con valor social, definición medible y demostración de relación funcional.",
                "Tecnológica y conceptualmente sistemática: procedimientos descritos en detalle y enlazados a principios, evitando ‘colecciones de trucos’.",
                "Efectiva y generalizable: cambios clínicamente relevantes que se mantienen y se trasladan a situaciones y conductas afines.",
                "Plan por función: el diseño depende de la hipótesis funcional (exceso/deficiencia) más que del rótulo de la técnica.",
                "Gobernanza por datos: registro ABC, indicadores sensibles y decisiones trazables sesión a sesión.",
                "Ética y alcance: claridad de objetivos, límites y práctica supervisada para consolidar competencia profesional.",
              ],
              text: "",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "La integración TCC cobra sentido cuando se la juzga por resultados observables y sostenibles. Esto implica adoptar estándares: (1) relevancia clínica (impacto significativo en la vida del paciente, más allá de diferencias estadísticas); (2) replicabilidad (descripciones tecnológicas que detallen contingencias entre respuestas del paciente, del terapeuta y de los materiales); (3) sistematicidad conceptual (explicar cómo cada procedimiento se deriva de principios, evitando ‘menús’ eclécticos incompatibles); y (4) generalización y mantenimiento (variar estímulos, contextos y demoras para consolidar el aprendizaje). En paralelo, se cuidan condiciones de seguridad y ética: consentimiento informado claro, vigilancia de efectos colaterales (p. ej., estallidos en extinción), y, sobre todo, formación supervisada para la adquisición de competencia clínica. En la práctica cotidiana, la TCC breve prospera cuando se sostiene en ciclos iterativos de hipótesis→intervención→medición→ajuste, y cuando el componente cognitivo se usa estratégicamente para instruir, organizar y motivar las conductas objetivo, en lugar de convertirse en discusiones abstractas que refuerzan la evitación. El objetivo final no es ‘aplicar técnicas’, sino **alterar funciones**: que los estímulos que antes disparaban evitación pierdan control, que las respuestas de afrontamiento ganen probabilidad y que el repertorio resultante sea útil, valioso y verificable en los escenarios reales del paciente.",
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
          href: "https://www.youtube.com/watch?v=zZ5uXoW74WI&ab_channel=UniversidadPeruanaLosAndes", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "EL ANÁLISIS CONDUCTUAL APLICADO (ABA) EN LA PRÁCTICA PROFESIONAL https://www.youtube.com/watch?v=zZ5uXoW74WI&ab_channel=UniversidadPeruanaLosAndes",
            "Dra. María Xesús Froxán Parga – “Análisis Funcional de la Conducta Humana” https://www.youtube.com/watch?v=XuRSFxKBqb0&ab_channel=Psicotemas",
            "Guía para la Elaboración de un Análisis Funcional del Comportamiento Humano https://pavlov.psyciencia.com/pdf/Protocolo%20ana%CC%81lisis%20funcional.pdf",
            "Análisis funcional en evaluación conductual y formulación de casos clínicos https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1130-52742013000200007",
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
            "Baer, D., Wolf, M. & Risley, T. (1968). *Some current dimensions of applied behavior analysis.* Journal of Applied Behavior Analysis, 1, 91–97.",
            "Cooper, J., Heron, T. & Heward, W. (2014). *Applied Behavior Analysis* (2.ª ed.). Pearson Education Limited.",
            "Froxán, M. (2020). *Análisis funcional de la conducta humana. Concepto, metodología y aplicaciones.* Madrid: Pirámide.",
            "Wolpe, J. (1958/1998). *Psicoterapia por inhibición recíproca* (2.ª ed.). Bilbao: Desclée de Brouwer.",
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
