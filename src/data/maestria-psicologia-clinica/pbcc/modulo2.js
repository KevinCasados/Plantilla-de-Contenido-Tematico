/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId: "MPCL",                // Maestría en Psicología Clínica (ajústalo si tu convención interna difiere)
courseId: "MPCL-PBCC",            // Psicoterapia Breve Cognitivo‑Conductual
id: "MPCL-PBCC-mod2",             // ID único del módulo 2

/* ── Datos visibles ─────────────────────────── */
courseName: "Psicoterapia breve cognitivo-conductual",   // :contentReference[oaicite:9]{index=9}
title: "Módulo 2. Modelos conductuales",                 // “Unidad o tema: Modelos conductuales” → título del módulo. :contentReference[oaicite:10]{index=10}
semestre: "4° semestre",                                 // :contentReference[oaicite:11]{index=11}
teacher: "Mtro. Iván López Ortiz",                       // :contentReference[oaicite:12]{index=12}

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
      text:
        "En esta unidad estudiarás los modelos conductuales que articulan el puente entre los principios \
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
conductual técnicamente sólida y conceptualmente sistemática."
    },

    {
      type: "paragraph",
      text:
        "Para asegurar rigor y calidad adoptaremos las siete dimensiones de la investigación conductual aplicada \
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
evaluación de resultados, con foco en metas funcionales y en la utilidad real para el paciente."
    },

    {
      type: "accordion",
      header: "Mapa de navegación de la unidad",
      open: false,
      items: [
        {
          title: "Qué estudiarás",
          text:
            "Revisarás el método terapéutico, la relación terapéutica, técnicas de recondicionamiento \
(respondientes), técnicas operantes (moldeamiento, reforzamiento, extinción, economía de fichas), \
técnicas de modelado/aprendizaje observacional y la articulación con terapias cognitivo‑conductuales. \
El énfasis está en integrar procedimiento y función clínica, no en recetas generales."
        },
        {
          title: "Cómo lo trabajarás",
          text:
            "Partirás del análisis funcional del comportamiento para formular hipótesis de origen y mantenimiento; \
a partir de ahí seleccionarás procedimientos, definirás conductas‑objetivo observables y establecerás \
métricas de resultado. Practicarás el uso de sistemas de registro (directos e indirectos) y el formato ABC \
para construir decisiones terapéuticas basadas en datos."
        },
        {
          title: "Criterios de calidad (ABA) en la práctica",
          text:
            "Cada técnica se justificará por su principio subyacente (sistematicidad conceptual), se describirá \
tecnológicamente (replicabilidad) y se evaluará por su efectividad y generalización. La toma de decisiones \
clínicas se documentará de forma analítica para mostrar relaciones funcionales y asegurar relevancia \
aplicada para el paciente y su contexto."
        }
      ]
    },

    {
      type: "paragraph",
      text:
        "El eje metodológico será el análisis funcional del comportamiento. Describirás el problema clínico en \
términos operativos (morfología, frecuencia, duración) y, sobre todo, en función de antecedentes y \
consecuentes que lo establecen y mantienen. Distinguirás clases respondientes y operantes, \
identificando estímulos provocadores (en respondiente) y variables de reforzamiento o evitación (en \
operante). Esta lectura funcional guía la selección de procedimientos: si el problema se mantiene por \
reforzamiento negativo, el plan debe alterar esas contingencias; si implica respuestas condicionadas de \
ansiedad, recondicionamiento o desensibilización sistemática pueden ser pertinentes; si requiere \
adquisición de repertorios, recurriremos a técnicas operantes o modelado. Así, el “qué hacer” procede del \
“por qué ocurre”, fortaleciendo la coherencia entre evaluación, intervención y resultados clínicos."
    },

    {
      type: "paragraph",
      text:
        "Para tomar decisiones basadas en evidencia, emplearás sistemas de recolección de datos directos \
(observación sistemática, autorregistro) e indirectos (entrevista, autoinformes). El registro ABC —\
antecedente, conducta, consecuencia— sintetiza la triple contingencia y te permite formular y contrastar \
hipótesis funcionales, diferenciando entre contingencias de origen y de mantenimiento. Con estos \
insumos, planearás el tratamiento, definirás metas conductuales y monitorearás progreso con indicadores \
conductuales sensibles al cambio. El objetivo no es sólo significancia estadística, sino relevancia clínica, \
mantenimiento y generalización a contextos naturales. Esta disciplina de medición hará que la discusión \
sobre técnica (respondiente, operante o modelado) deje de ser ideológica y se convierta en un problema \
bien planteado de relación funcional y efectividad verificable."
    },

    {
      type: "paragraph",
      text:
        "Finalmente, ubicamos la unidad en un marco profesional responsable. La formación del psicoterapeuta \
implica dominio teórico y práctica supervisada; por ello, el estudio de procedimientos se acompaña de \
delimitaciones éticas y de alcance. En los apartados siguientes verás el método terapéutico y su \
justificación funcional; analizarás la relación terapéutica como condición de aprendizaje; recorrerás \
procedimientos de recondicionamiento para respuestas respondientes; estrategias operantes para \
excesos y déficits conductuales; y el modelado como transferencia de repertorios mediante observación. \
Cerraremos con el enlace a terapias cognitivo‑conductuales, donde los principios conductuales se \
integran con procesos cognitivos para intervenir problemas complejos conservando claridad funcional. \
El resultado esperado: intervenciones precisas, replicables y útiles para la vida diaria del paciente."
    }
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
      text:
        "El método terapéutico que trabajaremos se organiza como una secuencia clara de evaluación, \
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
resultados clínicamente significativos."
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
        "• Asignación de tareas: algunas en sesión y otras en casa (exposición gradual y práctica de respuestas)."
    },

    // Párrafo 2 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Tras la psicoeducación, la decisión central del terapeuta es seleccionar la respuesta inhibidora de la \
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
evitación y en la capacidad del paciente para exponerse y desplegar la respuesta incompatible."
    },

    // Acordeón 2 — Criterios para elegir la respuesta inhibidora
    {
      type: "accordion",
      header: "Elección de respuestas inhibidoras (criterios prácticos)",
      open: false,
      text:
        "• Asertivas → cuando la ansiedad surge en relaciones interpersonales directas.  \n" +
        "• Sexuales → cuando la ansiedad se provoca por situaciones de índole sexual.  \n" +
        "• Relajación → cuando no es posible una acción directa sobre los estímulos provocadores.  \n" +
        "• Nota metodológica: las asertivas se prestan a procedimientos operantes (moldeamiento, instigación); \
las sexuales dependen en gran medida de tareas entre sesiones; la relajación se integra frecuentemente \
en desensibilización sistemática (reacondicionamiento)."
    },

    // Párrafo 3 (≈300 palabras)
    {
      type: "paragraph",
      text:
        "Para cerrar el método, se articulan decisiones técnicas con medición continua. Cuando se eligen \
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
clínicamente significativo."
    }
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
      text:
        "En terapia conductual, la relación terapéutica no es un fin en sí mismo, sino un medio técnicamente \
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
alineando el trabajo interpersonal con los principios del análisis funcional del comportamiento."
    },

    // Imagen (ilustrativa)
    {
  type: "image",
  src: "https://kibbutzpsicologia.com/wp-content/uploads/habilidades-terapueticas.webp",
  caption: "Sesión de consejería/psicoterapia.",
  alt: "Persona en sesión de consejería con profesional",
  text: ""
},

    // Párrafo 2 (~300 palabras)
    {
      type: "paragraph",
      text:
        "Operativamente, la alianza se compone de tres acuerdos: metas, tareas y vínculo de trabajo. En el \
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
alineadas con sus metas clínicas verificables."
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
        "Plan de generalización: definir contextos y señales para trasladar logros a la vida diaria."
      ]
    },

    // Párrafo 3 (~300 palabras)
    {
      type: "paragraph",
      text:
        "La ética y los límites son parte constitutiva de la relación y cumplen una función técnica: sostienen \
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
cierre terapéutico."
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
        "Límites difusos → Reafirmar reglas de encuadre (contacto, horarios, confidencialidad, derivaciones)."
      ]
    }
  ],
      },
      {
        id: "2.6",
        numbering: "2.6",
        title: "Técnicas de recondicionamiento",
        content: [{ type: "paragraph", text: "Panorama de técnicas respondientes para reducir ansiedad condicionada. (pendiente)" }],
      },
      {
        id: "2.7",
        numbering: "2.7",
        title: "Técnicas operantes",
        content: [{ type: "paragraph", text: "Fundamentos de intervención basados en principios operantes. (pendiente)" }],
      },
      {
        id: "2.8",
        numbering: "2.8",
        title: "Técnicas de modelado",
        content: [{ type: "paragraph", text: "Uso del modelado en contextos clínicos. (pendiente)" }],
      },
      {
        id: "2.9",
        numbering: "2.9",
        title: "Terapias cognitivo‑conductuales",
        content: [{ type: "paragraph", text: "Puentes hacia la TCC breve e integración con técnicas conductuales. (pendiente)" }],
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
          href: "https://www.youtube.com/watch?v=ldhpS8R5ods", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "¿Qué es el diseño curricular? ✔ [Concepto, Autores y Antecedentes] https://www.youtube.com/watch?v=ldhpS8R5ods",
            "Diseño Curricular QUÉ ES y CÓMO se HACE EJEMPLOS https://www.youtube.com/watch?v=3IOkwLKyHNE",
            "Evaluación Curricular Interna Y Externa || Nitzia Tavarez || https://www.youtube.com/watch?v=OR6YlkxNtps",
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
            "Coll, C. & Solé, I. (2020). *Currículum y evaluación en la educación obligatoria: Desafíos y perspectivas.* Barcelona: Editorial Graó.",
            "Perrenoud, P. (2019). *La evaluación de los alumnos: De la producción de la excelencia a la regulación de los aprendizajes.* Madrid: Editorial Morata.",
            "De Alba Ceballos, A. (2018). *Teoría curricular: Nuevas tendencias y perspectivas.* Ciudad de México: Siglo XXI Editores.",
            "Díaz Barriga, A. (2018). *Metodología de diseño curricular: Un enfoque centrado en competencias.* Ciudad de México: Editorial Trillas.",
            "Gimeno Sacristán, J. (2017). *El currículum: Una reflexión sobre la práctica.* Madrid: Ediciones Morata.",
            "Zabalza, M. Á. (2019). *Diseño y desarrollo curricular: Cómo planificar e implementar el currículo en la educación superior.* Madrid: Narcea Ediciones.",
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
