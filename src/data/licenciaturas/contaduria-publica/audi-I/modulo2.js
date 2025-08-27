/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
    /* ── Metadatos ──────────────────────────────── */
  programId : "LCP",            // Programa: Contaduría Pública
  courseId  : "AUDI-I",         // Materia: Auditoría I
  id        : "AUDI-I-M2",      // Módulo 2

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Auditoría I",
  title     : "Módulo 2. Papeles de trabajo y NIF aplicables a partidas específicas",
  semestre  : "7º",
  teacher   : "M.F. Aldo Ariel Cárdenas García",

  /* ── Objetivo y competencias ────────────────── */
  objective: "Identificar los elementos que integran los papeles de trabajo y su utilidad en el proceso de auditoría, reconociendo su vínculo con las NIA, así como distinguir las NIF y su relación con los procedimientos de auditoría sobre partidas específicas.",
  competencies: [
    "Aplicar principios éticos e independencia profesional",
    "Diseñar y ejecutar una planificación basada en riesgos",
    "Evaluar y validar el control interno",
    "Obtener y analizar evidencia de auditoría",
    "Emitir informes y recomendaciones fundamentadas",
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

  /* Unidad 2 — Papeles de trabajo */
  {
    id: "1",
    numbering: "Unidad 2",
    title: "Papeles de trabajo en auditoría",
    content: [
    {
      type: "paragraph",
      text:
        "Los papeles de trabajo son el soporte documental de todo el proceso de auditoría. Integran, de manera sistemática, la evidencia obtenida, los procedimientos aplicados y las conclusiones alcanzadas, de modo que un auditor experimentado —sin vínculo previo con el encargo— pueda comprender la naturaleza, el momento de realización y la extensión de las pruebas, así como sus resultados. Bajo la NIA 230 (Documentación de auditoría), esta documentación debe ser suficiente y apropiada para sustentar el juicio profesional y, en su caso, la opinión sobre los estados financieros. En la práctica, los papeles de trabajo articulan la planeación (NIA 300), la ejecución (NIA 315/330 y 500) y el cierre (NIA 700), garantizando trazabilidad entre riesgos identificados, respuestas del auditor y evidencia reunida."
    },
    {
      type: "paragraph",
      text:
        "Su finalidad es múltiple y estratégica: i) respaldar el dictamen del auditor; ii) demostrar el cumplimiento de las NIA y de los requisitos legales aplicables; iii) facilitar la supervisión y revisión del trabajo (calidad y consistencia); iv) servir de base para auditorías futuras (aprendizaje organizacional); v) brindar protección legal y profesional al auditor, al evidenciar la racionalidad de sus juicios; y vi) propiciar la mejora continua del proceso. Cada papel de trabajo debe mostrar objetivos, procedimientos, resultados, referencias cruzadas y conclusiones, además de las firmas de preparación y revisión. Cuando estos elementos se omiten o son incompletos, se compromete la validez del trabajo y aumenta el riesgo de conclusiones no sustentadas."
    },
    {
      type: "paragraph",
      text:
        "En la fase de planeación, los papeles de trabajo capturan la estrategia global y el programa de auditoría: riesgos de incorrección material por rubro, enfoque de pruebas de controles y sustantivas, recursos y calendarización. Durante la ejecución, documentan cédulas sumarias y analíticas, análisis de variaciones, confirmaciones, conciliaciones, inspecciones físicas, recálculos y toda evidencia pertinente (NIA 500). Por ejemplo, en inventarios, se incluyen hojas de conteo físico, conciliaciones con registros, soportes de valuación y fotografías del almacén, concluyendo —con fundamento— si las diferencias detectadas afectan de forma material la razonabilidad de los saldos. El cierre integra evaluaciones de materialidad (NIA 320), recapitulaciones de incorrecciones y el vínculo con la forma de opinión."
    },
    {
      type: "paragraph",
      text:
        "Desde el punto de vista ético-legal, la documentación pertenece al auditor (conforme a la NIA 230), pero está sujeta a estrictos deberes de confidencialidad de acuerdo con el Código de Ética de IFAC. La divulgación sólo procede con base legal o requerimiento de autoridad competente, debidamente documentado. En cuanto a conservación, las mejores prácticas y la NIA 230 exigen completar el archivo final en un plazo acotado tras la fecha del informe y conservarlo por al menos cinco años; en México, el CFF obliga a conservar la contabilidad y papeles relacionados por un periodo mínimo legal. Estas reglas protegen a los usuarios, a la firma y al interés público."
    },
    {
      type: "paragraph",
      text:
        "Operativamente, el legajo se organiza en archivo permanente (contratos, actas, políticas contables, organigramas, manuales) y archivo corriente (papeles del ejercicio: planeación, por rubro, y cierre). El control se refuerza con índices (alfanuméricos por área) y marcas o tick marks con leyendas claras (p. ej., √ comprobado contra original; C confirmación recibida; R-12 referencia cruzada). Toda cédula debe incluir datos de identificación (cliente, periodo, fecha, preparó/revisó), objetivo, procedimiento, evidencia, resultado y conclusión. La consistencia en referencias cruzadas entre papeles —por ejemplo, inventarios ↔ costo de ventas— asegura trazabilidad y reduce el riesgo de omisiones. Un legajo bien estructurado acelera revisiones internas/externas y eleva la calidad del aseguramiento."
    },
    {
      type: "accordion",
      header: "Guía rápida (mapa mental en tres capas)",
      open: false,
      items: [
        {
          header: "Capa 1 — Qué son y para qué sirven",
          text:
            "Evidencia suficiente y apropiada de la auditoría (NIA 230/500) que respalda conclusiones y opinión (NIA 700), demuestra cumplimiento normativo, permite supervisión (NIA 220) y sirve de base para auditorías futuras (NIA 300)."
        },
        {
          header: "Capa 2 — Estructura del legajo",
          text:
            "Permanente: contratos, políticas, actas. Corriente: planeación (estrategia, riesgos), ejecución (cédulas por rubro, pruebas), cierre (recapitulaciones, materialidad, carta de manifestaciones). Índices alfanuméricos y referencias cruzadas."
        },
        {
          header: "Capa 3 — Reglas críticas de calidad",
          text:
            "Claridad y trazabilidad; objetivos-procedimientos-resultados-conclusión en cada papel; marcas con leyenda; confidencialidad (IFAC); cierre oportuno del archivo y conservación mínima; si falta forma o evidencia, aumenta el riesgo de nulidad o opinión inadecuada."
        }
      ]
    }
  ],
    subthemes: [
      /* 2.1 Concepto y definición */
{
  id: "1.1",
  numbering: "2.1",
  title: "Concepto y definición",
  content: [
    { type: "paragraph", text: "Los papeles de trabajo son el conjunto organizado de registros, cédulas y evidencias que documentan la naturaleza, el momento y la extensión de los procedimientos aplicados por el auditor, así como los resultados obtenidos y las conclusiones alcanzadas. En términos de la NIA 230, su propósito es permitir que un auditor experimentado, sin conexión previa con el encargo, comprenda qué se hizo, por qué se hizo y cómo se sustentó el juicio profesional. Esta documentación articula la planeación, la ejecución y el cierre, y deja trazabilidad entre riesgos, pruebas, hallazgos y opinión. :contentReference[oaicite:0]{index=0}" },
    { type: "paragraph", text: "La documentación adecuada debe ser suficiente y apropiada. “Suficiente” alude a la cantidad mínima necesaria para respaldar el dictamen; “apropiada” se refiere a la calidad (relevancia y fiabilidad). En la práctica, esto implica describir con precisión el objetivo de cada procedimiento, la población auditada, el método de selección, el criterio de evaluación y el resultado, vinculando cada papel con referencias cruzadas a cédulas madre y analíticas. La ausencia de claridad o de referencias cruzadas dificulta la supervisión y pone en riesgo la defensa del trabajo ante revisiones externas o controversias. :contentReference[oaicite:1]{index=1}" },

    /* Acordeón 1 */
    {
      type: "accordion",
      header: "Guía rápida de documentación (NIA 230)",
      open: false,
      items: [
        { header: "Qué debe mostrar", text: "Propósito del procedimiento; alcance (qué, cuánto, cuándo); resultado (hallazgos y evidencia); conclusión y su efecto en la opinión. :contentReference[oaicite:2]{index=2}" },
        { header: "Cómo debe presentarse", text: "Orden lógico; referencias cruzadas; identificadores (cliente, periodo, preparó/revisó/fechas); marcas de auditoría con leyenda. :contentReference[oaicite:3]{index=3}" },
        { header: "Cuándo es suficiente", text: "Cuando un auditor independiente puede replicar el entendimiento del trabajo y verificar la razonabilidad del juicio profesional. :contentReference[oaicite:4]{index=4}" }
      ]
    },

    { type: "paragraph", text: "Ejemplos frecuentes incluyen cédulas de inventarios con conteos físicos, conciliaciones con registros, copias de órdenes de compra y fotografías de almacén. En cuentas por cobrar, suelen integrarse confirmaciones externas, conciliaciones de antigüedad y pruebas de corte. En propiedad, planta y equipo, se adjuntan facturas, cálculos de depreciación y evidencias de existencia física. Cada papel debe culminar con una conclusión explícita, diferenciando hallazgo de interpretación, y señalando si el objetivo de la prueba se cumplió y con qué grado de seguridad. :contentReference[oaicite:5]{index=5}" },

    /* Imagen intercalada (ejemplo didáctico del propio material) */
    { type: "image", src: "assets/auditoria/ejemplo-papel-inventarios.png", alt: "Ejemplo de papel de trabajo de inventarios", caption: "Cédula analítica de inventarios: conteo físico vs. sistema y conclusión (diferencia 0.9% sin materialidad). :contentReference[oaicite:6]{index=6}" },

    { type: "paragraph", text: "La consistencia formal es clave: índices y marcas (tick marks) facilitan navegación, revisión y reconstrucción del trabajo. Las marcas deben tener leyenda (“√” cotejado con original, “C” confirmado, “Δ” diferencia en investigación, etc.) y las referencias deben conectar cédulas sumarias con analíticas, así como papeles entre rubros (p. ej., inventarios ↔ costo de ventas). Una taxonomía estable ahorra tiempo en revisiones de supervisión y en auditorías futuras. :contentReference[oaicite:7]{index=7}" },
    { type: "paragraph", text: "En materia de propiedad y confidencialidad, la NIA 230 y el Código de Ética del IFAC señalan que el legajo pertenece al auditor y que su contenido es confidencial, con revelación sólo cuando la ley lo exige. Por ello, toda solicitud de terceros debe documentarse y responderse preservando la cadena de custodia y la integridad del archivo, delimitando el alcance de lo solicitado. Esta disciplina protege al profesional y a la firma ante controversias. :contentReference[oaicite:8]{index=8}" },

    /* Acordeón 2 */
    {
      type: "accordion",
      header: "Checklist de calidad del papel de trabajo",
      open: false,
      items: [
        { header: "Encabezado e identificación", text: "Cliente, periodo, objetivo de la prueba, preparó, revisó, fecha, referencia. :contentReference[oaicite:9]{index=9}" },
        { header: "Contenido mínimo", text: "Población, método de selección, procedimiento aplicado, evidencia obtenida (anexos) y resultado cuantitativo/cualitativo. :contentReference[oaicite:10]{index=10}" },
        { header: "Cierre y trazabilidad", text: "Conclusión clara, impacto en riesgos/materialidad, referencias cruzadas y marcas con leyenda. :contentReference[oaicite:11]{index=11}" }
      ]
    },

    { type: "paragraph", text: "Finalmente, el legajo se integra con secciones permanente y corriente. La permanente alberga documentos de larga vigencia (contratos, políticas contables, actas), mientras que la corriente contiene la evidencia específica del ejercicio (planeación, ejecución por rubros y conclusiones). La NIA 230 fija plazos de cierre y conservación del archivo final, lo que obliga a un control documental oportuno y disciplinado. Un legajo completo y ordenado incrementa la calidad del encargo y la credibilidad del dictamen. :contentReference[oaicite:12]{index=12}" }
  ]
},

/* 2.2 Propósito e importancia */
{
  id: "1.2",
  numbering: "2.2",
  title: "Propósito e importancia",
  content: [
    { type: "paragraph", text: "Los papeles de trabajo soportan el dictamen, evidencian cumplimiento normativo, permiten la supervisión y sirven de base para auditorías futuras. Constituyen además protección legal y un mecanismo de mejora continua. En suma, operan como puente entre riesgos identificados, pruebas diseñadas y conclusiones sobre las aseveraciones de los estados financieros (existencia, integridad, valuación, presentación y revelación). :contentReference[oaicite:13]{index=13}" },
    { type: "paragraph", text: "Su rol probatorio es doble: interno, al facilitar la revisión del socio y del control de calidad; y externo, al demostrar ante organismos de supervisión o tribunales que el encargo se realizó conforme a NIA aplicables y requisitos legales. Cada papel debe revelar la racionalidad del juicio profesional y el vínculo con la estrategia global y el programa de auditoría. :contentReference[oaicite:14]{index=14}" },

    /* Acordeón 1 */
    {
      type: "accordion",
      header: "Seis propósitos nucleares",
      open: false,
      items: [
        { header: "Respaldar el dictamen", text: "Soporte documental de la opinión emitida. :contentReference[oaicite:15]{index=15}" },
        { header: "Demostrar cumplimiento NIA", text: "Rastros de NIA 230/500/315/330, etc. en cada prueba. :contentReference[oaicite:16]{index=16}" },
        { header: "Supervisión y revisión", text: "Facilitan coaching, control de calidad y EQCR. :contentReference[oaicite:17]{index=17}" }
      ]
    },

    { type: "paragraph", text: "La documentación también es capital organizacional: acumula conocimiento del cliente (ciclos, TI, estimaciones, contingencias) y reduce curvatura de aprendizaje en ejercicios subsecuentes. En planeación, los papeles del año anterior alimentan la matriz de riesgos; en ejecución, permiten replicar técnicas que funcionaron; en cierre, agilizan la evaluación de incorrecciones y la consistencia de revelaciones. :contentReference[oaicite:18]{index=18}" },

    /* Imagen intercalada (tabla de propósitos del material) */
    { type: "image", src: "assets/auditoria/tabla-propositos-pt.png", alt: "Tabla de propósitos de papeles de trabajo", caption: "Resumen de propósitos y relación con NIA (extracto didáctico). :contentReference[oaicite:19]{index=19}" },

    { type: "paragraph", text: "Como salvaguarda legal, un legajo íntegro ayuda a demostrar diligencia y apego normativo en caso de reclamaciones. Para ello, es indispensable conservar versiones finales y controlar acceso (confidencialidad). La estandarización de índices, marcas y formatos reduce la ambigüedad y facilita la verificación cruzada. :contentReference[oaicite:20]{index=20}" },

    /* Acordeón 2 */
    {
      type: "accordion",
      header: "Base para mejora continua",
      open: false,
      items: [
        { header: "Lecciones aprendidas", text: "Identificación de cuellos de botella y rediseño de programas. :contentReference[oaicite:21]{index=21}" },
        { header: "Reutilización eficiente", text: "Plantillas y matrices validadas; ahorro de tiempo en planeación. :contentReference[oaicite:22]{index=22}" },
        { header: "Evidencia para capacitación", text: "Casos reales anonimizados para entrenar equipos. :contentReference[oaicite:23]{index=23}" }
      ]
    },

    { type: "paragraph", text: "En síntesis, el valor de los papeles de trabajo excede la mera formalidad: convierten el juicio profesional en conocimiento verificable, blindan la calidad del encargo y permiten a la firma gestionar riesgos de auditoría y de reputación. La efectividad de la documentación, no su volumen, determina su capacidad para sostener la opinión y resistir escrutinio técnico o jurídico. :contentReference[oaicite:24]{index=24}" }
  ],
  subthemes: [
    /* 2.2.1 */
    {
      id: "1.2.1",
      numbering: "2.2.1",
      title: "Propósitos centrales de los papeles de trabajo",
      content: [
        { type: "paragraph", text: "Los propósitos nucleares abarcan: evidenciar la obtención de evidencia suficiente y apropiada (NIA 500), sustentar conclusiones (NIA 230), respaldar el dictamen (NIA 700), demostrar cumplimiento normativo, facilitar supervisión (NIA 220), servir como base de auditorías futuras (NIA 300) y asegurar continuidad metodológica. La tabla de propósitos del material ejemplifica cómo cada objetivo se enlaza con una norma y con un ejemplo práctico. :contentReference[oaicite:25]{index=25}" },
        { type: "paragraph", text: "En términos operativos, cada papel debe contener objetivo, procedimiento, evidencia, resultado y conclusión. Esta estructura garantiza el “hilo de auditoría” entre riesgo y respuesta. Por ejemplo, en ingresos, el propósito de comprobar corte adecuado se traduce en pruebas de corte con facturas próximas al cierre y conciliaciones con CFDI; el papel dejará constancia de la muestra, el resultado y la inferencia respecto de la aseveración. :contentReference[oaicite:26]{index=26}" },

        /* Acordeón breve */
        {
          type: "accordion",
          header: "Matriz propósito–norma–evidencia",
          open: false,
          items: [
            { header: "Evidencia de auditoría", text: "NIA 500 ↔ contratos, confirmaciones, cálculos; confiabilidad y pertinencia. :contentReference[oaicite:27]{index=27}" },
            { header: "Cumplimiento NIA", text: "NIA 230 ↔ referencias y juicio significativo documentado. :contentReference[oaicite:28]{index=28}" },
            { header: "Supervisión", text: "NIA 220 ↔ marcas de revisión y notas del socio. :contentReference[oaicite:29]{index=29}" }
          ]
        },

        { type: "paragraph", text: "El vínculo con la planeación es directo: los propósitos se derivan de los riesgos valorados. Si el riesgo significativo es la valuación de inventarios, los propósitos asociarán pruebas de existencia, valuación (NIF C-4) y presentación. La documentación debe dejar trazado el razonamiento, evitando “conclusiones implícitas”. :contentReference[oaicite:30]{index=30}" },
        { type: "paragraph", text: "Asimismo, los propósitos orientan el nivel de detalle: en pruebas de controles, se busca concluir sobre el diseño/operación; en pruebas sustantivas, sobre las aseveraciones del saldo. En ambos casos, el papel debe reflejar representatividad de la muestra y suficiencia del tamaño, sustentando la inferencia estadística o no estadística aplicada. :contentReference[oaicite:31]{index=31}" },
        { type: "paragraph", text: "Una redacción precisa evita ambigüedad y fortalece la defensa técnica. Recomendación: redactar conclusiones en modo declarativo, indicando si el objetivo se cumplió, el efecto en la materialidad y, en su caso, las correcciones propuestas. :contentReference[oaicite:32]{index=32}" },
        { type: "paragraph", text: "Conclusión: los propósitos convierten papeles en evidencia útil; sin propósitos claros, la documentación se vuelve archivo inerte que no soporta ni guía decisiones de auditoría. :contentReference[oaicite:33]{index=33}" }
      ]
    },

    /* 2.2.2 */
    {
      id: "1.2.2",
      numbering: "2.2.2",
      title: "Importancia de los papeles de trabajo en auditoría",
      content: [
        { type: "paragraph", text: "La importancia radica en seis ejes: soporte del dictamen, evidencia de cumplimiento de NIA, facilitación de supervisión y revisión, base para auditorías futuras, protección legal y mejora continua. Cada eje tiene reflejo práctico en la calidad del encargo y en la gestión de riesgos de la firma. :contentReference[oaicite:34]{index=34}" },

        /* Acordeón breve */
        {
          type: "accordion",
          header: "Seis impactos prácticos",
          open: false,
          items: [
            { header: "Dictamen defendible", text: "Conexión clara entre pruebas y opinión (NIA 700). :contentReference[oaicite:35]{index=35}" },
            { header: "Cumplimiento demostrable", text: "Rastros explícitos de NIA en cada papel (NIA 230). :contentReference[oaicite:36]{index=36}" },
            { header: "Memoria institucional", text: "Reuso eficiente de lecciones y plantillas (NIA 300). :contentReference[oaicite:37]{index=37}" }
          ]
        },

        { type: "paragraph", text: "Como mecanismo de control de calidad, los papeles favorecen el coaching y la consistencia: el revisor identifica rápidamente brechas (p. ej., falta de definición de población o de conclusión), lo que se traduce en acciones correctivas y en ajustes al programa para próximos encargos. :contentReference[oaicite:38]{index=38}" },

        /* Imagen intercalada (importancia ↔ NIA del material) */
        { type: "image", src: "assets/auditoria/tabla-importancia-pt.png", alt: "Importancia de los papeles de trabajo", caption: "Mapa de importancia y su relación con NIA relevantes. :contentReference[oaicite:39]{index=39}" },

        { type: "paragraph", text: "Frente a terceros, la documentación robustece la posición del auditor: exhibe diligencia, metodología y evidencia. En controversias, un legajo ordenado marca la diferencia entre afirmaciones y pruebas. Por ello, calendario de cierre, control de versiones y custodia son prácticas críticas. :contentReference[oaicite:40]{index=40}" },
        { type: "paragraph", text: "Finalmente, como instrumento de mejora, permite estandarizar formatos, enriquecer guías y acelerar la curva de aprendizaje de equipos, contribuyendo a encargos más eficientes y a una menor dispersión en la calidad. :contentReference[oaicite:41]{index=41}" },
        { type: "paragraph", text: "Conclusión: sin papeles de trabajo robustos, no hay dictamen defendible; con documentación clara, el juicio profesional se vuelve verificable, repetible y enseñable. :contentReference[oaicite:42]{index=42}" }
      ],
            subthemes: [
              {
  id: "1.2.2.1",
  numbering: "2.2.2.1",
  title: "Soporte del dictamen del auditor",
  content: [
    { type: "paragraph", text: "El dictamen no se sustenta en percepciones: se apoya en papeles de trabajo completos, trazables y evaluables. La función del archivo de auditoría es demostrar que la opinión emitida está conectada con evidencia suficiente y apropiada, y que cada conclusión relevante tiene respaldo documental y técnico. Esto exige referencias cruzadas claras, juicios profesionales explicados y el enlace entre riesgos identificados, procedimientos aplicados y hallazgos alcanzados." },
    { type: "paragraph", text: "El soporte eficaz del dictamen se articula con la NIA 230 (documentación), la NIA 500 (evidencia) y la NIA 700 (formación de la opinión). No basta con acumular documentos: hay que demostrar calidad, pertinencia y oportunidad. Un papel de trabajo robusto identifica objetivo, alcance, fuente de información, técnica aplicada, resultados y conclusión. Sin esa cadena lógica, la conclusión es vulnerable." },
    { type: "image", src: "images/auditoria-dictamen-soporte.png", alt: "Trazabilidad dictamen–papeles de trabajo", caption: "De riesgos a opinión: mapa de trazabilidad dictamen–evidencia." },
    { type: "paragraph", text: "La estructura mínima: cédula sumaria con el objetivo del rubro, cédulas analíticas, test de controles (si procede), pruebas sustantivas, reconcilias, excepciones y evaluación de incorrecciones. Cada hoja señala quién preparó, quién revisó y en qué fecha. Las marcas (tick marks) codifican validaciones, confirmaciones y cotejos. El dictamen se defiende porque el archivo cuenta la historia completa, paso a paso." },
    { type: "accordion", header: "Buenas prácticas de soporte", open: false, items: [
      { header: "Referencias cruzadas efectivas", text: "Conecta cada hallazgo con su evidencia (contrato, confirmación, cálculo). Evita islas documentales." },
      { header: "Juicios significativos", text: "Expón supuestos, materialidad, y por qué un riesgo es significativo. Documenta alternativas consideradas." },
      { header: "Conclusión inequívoca", text: "Una línea final por rubro que responda: ¿se cumple razonablemente el marco de información financiera?" }
    ]},
    { type: "paragraph", text: "El soporte no es solo técnico: también es pedagógico. Permite que un auditor con experiencia, ajeno al encargo, comprenda qué se hizo, por qué se hizo y qué se concluyó. Esa inteligibilidad es el mejor seguro de calidad, continuidad y defensa profesional." },
    { type: "accordion", header: "Errores frecuentes que debilitan el dictamen", open: false, items: [
      { header: "Evidencia insuficiente", text: "Listados sin comprobación externa, pruebas sin tamaño muestral justificable o sin criterio de selección." },
      { header: "Falta de vínculo con riesgos", text: "Procedimientos genéricos que no responden al riesgo valorado (NIA 315/330)." },
      { header: "Conclusiones ambiguas", text: "Cierres sin responder al objetivo de auditoría o sin evaluar incorrecciones vs. materialidad." }
    ]}
  ]
},
{
  id: "1.2.2.2",
  numbering: "2.2.2.2",
  title: "Evidencia del cumplimiento de las NIA",
  content: [
    { type: "paragraph", text: "Los papeles de trabajo deben evidenciar que la auditoría se realizó conforme a las NIA aplicables. Eso implica señalar, en cada cédula, la norma relevante y cómo el procedimiento ejecutado satisface su exigencia (por ejemplo, NIA 505 para confirmaciones, NIA 520 para procedimientos analíticos, NIA 540 para estimaciones contables)." },
    { type: "paragraph", text: "La evidencia de cumplimiento no es decorar con citas normativas; es demostrar trazabilidad de requisitos a acciones: planificación documentada (NIA 300), identificación/valoración de riesgos (NIA 315), respuestas (NIA 330), obtención de evidencia (NIA 500) y conclusión (NIA 700). Cada fase deja huella verificable, fechada y revisada." },
    { type: "image", src: "images/nia-cumplimiento-matriz.png", alt: "Matriz NIA–procedimiento–evidencia", caption: "Matriz de cumplimiento: norma ↔ procedimiento ↔ evidencia." },
    { type: "paragraph", text: "La matriz NIA–procedimiento–evidencia sintetiza el enfoque: por rubro, el papel indica la NIA, el objetivo del procedimiento, la técnica aplicada (recalculo, inspección, confirmación, observación, indagación), el resultado y la conclusión. Los juicios críticos (estimaciones, imparidades) se complementan con evaluación de sesgo de la dirección y sensibilidad de supuestos." },
    { type: "accordion", header: "Señales de cumplimiento sólido", open: false, items: [
      { header: "Etiquetado normativo consistente", text: "Cada cédula referencia la NIA pertinente y su párrafo guía." },
      { header: "Resultados reproducibles", text: "Otro auditor puede replicar cálculos y cotejos con el archivo." },
      { header: "Revisión con evidencia", text: "Firmas, fechas y comentarios que acreditan supervisión (NIA 220)." }
    ]},
    { type: "paragraph", text: "Finalmente, el cierre integra evaluación de incorrecciones (NIA 450) y comunicación con los responsables del gobierno (NIA 260). La congruencia entre papeles y reporte de auditoría es crucial: cualquier omisión en archivo debilita la defensa del trabajo y la credibilidad del informe." },
    { type: "accordion", header: "Brechas típicas a corregir", open: false, items: [
      { header: "Norma citada sin sustancia", text: "Referencia a la NIA sin mostrar cómo se aplicó." },
      { header: "Falta de evidencia apropiada", text: "Evidencia relevante pero no fiable (fotocopias ilegibles, fuentes no independientes)." },
      { header: "Juicios no documentados", text: "No se explican bases, alternativas ni sensibilidad." }
    ]}
  ]
},
{
  id: "1.2.2.3",
  numbering: "2.2.2.3",
  title: "Facilitar la supervisión y revisión del trabajo",
  content: [
    { type: "paragraph", text: "Los papeles de trabajo son, también, una herramienta de gestión de calidad. Permiten que seniors, gerentes y el socio revisor verifiquen diseño y ejecución de pruebas, evalúen suficiencia de evidencia y orienten al equipo mediante comentarios oportunos. Sin un archivo ordenado, la revisión es ineficiente y el riesgo de error se eleva." },
    { type: "paragraph", text: "La supervisión útil deja rastro: marcas de revisión, notas explicativas, solicitudes de ampliación, y cierre de hallazgos. El ciclo preparar–revisar–resolver–cerrar, con fechas y responsables, demuestra que el encargo fue conducido bajo control de calidad (NIA 220) y que las conclusiones pasaron por escrutinio crítico." },
    { type: "image", src: "images/flujo-supervision-revision.png", alt: "Flujo de supervisión y revisión", caption: "Ciclo preparar–revisar–resolver–cerrar con marcas y evidencias." },
    { type: "paragraph", text: "La legibilidad importa: índices claros, nomenclatura consistente, referencias cruzadas y sumarios ejecutivos por rubro. El revisor debe poder saltar del riesgo al procedimiento y a la evidencia en segundos. Cualquier ‘isla documental’ rompe la cadena de control y complica el cierre." },
    { type: "accordion", header: "Claves para una revisión eficaz", open: false, items: [
      { header: "Sumario por rubro", text: "Una página que sintetice riesgos, pruebas, excepciones y conclusión." },
      { header: "Checklists inteligentes", text: "Usar listas para normas críticas (NIA 230/500/700) sin burocracia." },
      { header: "Control de versiones", text: "Evitar duplicados y asegurar trazabilidad de cambios." }
    ]},
    { type: "paragraph", text: "En encargos de mayor riesgo, la Revisión de Control de Calidad del Encargo (EQCR) exige documentación específica: selección del revisor, alcance de su trabajo y observaciones resueltas antes del informe. El archivo debe acreditarlo de forma inequívoca." },
    { type: "accordion", header: "Alertas de calidad", open: false, items: [
      { header: "Notas sin respuesta", text: "Comentarios del revisor no atendidos ni cerrados." },
      { header: "Fechas incongruentes", text: "Procedimientos posteriores fechados antes de su ejecución." },
      { header: "Conclusiones sin evidencia", text: "Afirmaciones no reconciliadas con hallazgos." }
    ]}
  ]
},
{
  id: "1.2.2.4",
  numbering: "2.2.2.4",
  title: "Base para auditorías futuras",
  content: [
    { type: "paragraph", text: "El archivo es memoria institucional. Estructurado en legajo permanente (contratos, políticas, procesos) y corriente (evidencia del ejercicio), permite acelerar planeación, identificar riesgos recurrentes y evaluar la eficacia de respuestas históricas. Es, en esencia, un activo de aprendizaje." },
    { type: "paragraph", text: "Una buena práctica es la ‘hoja de experiencia’: qué funcionó, qué no, y qué se mejorará. Vincular esa hoja a la estrategia del siguiente encargo (NIA 300) crea un bucle de mejora: riesgos refinados, pruebas más focalizadas y tiempos mejor estimados." },
    { type: "image", src: "images/legajo-permanente-corriente.png", alt: "Legajo permanente y corriente", caption: "Doble archivo: permanente (contexto) y corriente (ejercicio)." },
    { type: "paragraph", text: "También facilita la continuidad del equipo: un nuevo integrante puede incorporarse con rapidez si el archivo anterior es claro. En entornos regulados, la trazabilidad histórica mitiga riesgos de incumplimiento y sustenta decisiones de materialidad y muestreo." },
    { type: "accordion", header: "Componentes que deben ‘sobrevivir’ año con año", open: false, items: [
      { header: "Mapa de procesos clave", text: "Ciclos de ingresos, compras, inventarios y TI." },
      { header: "Matriz de riesgos", text: "Riesgos significativos y controles relevantes." },
      { header: "Hallazgos y recomendaciones", text: "Seguimiento a remediaciones y efectos residuales." }
    ]},
    { type: "paragraph", text: "Cuidado con el arrastre acrítico: no se trata de copiar pruebas, sino de revaluar riesgos y actualizar procedimientos. El archivo previo orienta, pero no sustituye el juicio profesional ante cambios en negocio, TI o marcos normativos." },
    { type: "accordion", header: "Riesgos al reutilizar archivos", open: false, items: [
      { header: "Obsolescencia", text: "Procesos o sistemas cambiaron y el plan no se adapta." },
      { header: "Sesgo de confirmación", text: "Se buscan resultados similares sin cuestionar supuestos." },
      { header: "Documentos ‘plantilla’", text: "Papeles genéricos sin sustancia ni evidencia real." }
    ]}
  ]
},
{
  id: "1.2.2.5",
  numbering: "2.2.2.5",
  title: "Protección legal y profesional",
  content: [
    { type: "paragraph", text: "Los papeles de trabajo son propiedad del auditor y constituyen la defensa documental ante controversias. Un archivo completo, ordenado y fechado demuestra diligencia, cumplimiento normativo y razonabilidad del juicio profesional, reduciendo exposición a reclamaciones." },
    { type: "paragraph", text: "La confidencialidad es irrenunciable: el archivo contiene información sensible y solo se comparte por mandato legal o con autorización expresa. Debe documentarse la cadena de custodia, los accesos y cualquier entrega a terceros, manteniendo registro de qué, a quién y por qué se compartió." },
    { type: "image", src: "images/confidencialidad-custodia.png", alt: "Custodia y confidencialidad", caption: "Propiedad del auditor, acceso controlado y retención normativa." },
    { type: "paragraph", text: "En materia de retención, el cierre del archivo final dentro del plazo (p. ej., 60 días) y su conservación por el periodo requerido es esencial. Políticas de destrucción segura, cifrado y respaldos integran el control. Toda modificación posterior al cierre debe quedar registrada con fecha, motivo y autorización." },
    { type: "accordion", header: "Controles imprescindibles", open: false, items: [
      { header: "Control de accesos", text: "Listas de distribución mínimas y bitácoras." },
      { header: "Integridad documental", text: "Sellos de tiempo, firmas electrónicas y hash." },
      { header: "Retención y destrucción", text: "Calendario y procedimientos seguros." }
    ]},
    { type: "paragraph", text: "Frente a litigios, la coherencia interna del archivo es decisiva: objetivos, procedimientos, evidencia y conclusiones deben alinearse. El mejor momento para ‘defender’ la auditoría es antes del informe, documentando bien. Después, solo se exhibe lo que ya se hizo con rigor." },
    { type: "accordion", header: "Errores que exponen legalmente", open: false, items: [
      { header: "Alteraciones sin registro", text: "Cambios post–cierre no documentados." },
      { header: "Vacíos críticos", text: "Áreas de alto riesgo sin prueba suficiente." },
      { header: "Confidencialidad vulnerada", text: "Entrega no autorizada de información del cliente." }
    ]}
  ]
},
{
  id: "1.2.2.6",
  numbering: "2.2.2.6",
  title: "Mejora continua del proceso de auditoría",
  content: [
    { type: "paragraph", text: "El archivo no solo respalda: enseña. El análisis post–encargo identifica cuellos de botella, pruebas redundantes y oportunidades de automatización. Documentar lecciones aprendidas e integrarlas a la metodología produce auditorías más eficientes y con mejor enfoque de riesgo." },
    { type: "paragraph", text: "La mejora se apoya en indicadores: tiempos por rubro, tasas de excepción, retrabajos, notas de revisión reabiertas. Convertir el archivo en fuente de datos (KPIs) permite priorizar cambios de alto impacto, reducir costos y elevar la calidad de la evidencia." },
    { type: "image", src: "images/kpi-mejora-auditoria.png", alt: "KPIs de mejora en auditoría", caption: "De papeles de trabajo a indicadores de calidad y eficiencia." },
    { type: "paragraph", text: "Incorporar analítica (pruebas masivas, correlaciones, detección de outliers) y plantillas vivas (checklists inteligentes, matrices de riesgo) transforma la ejecución. La capacitación se nutre de casos reales del archivo, fortaleciendo criterio profesional y escepticismo." },
    { type: "accordion", header: "Herramientas de mejora", open: false, items: [
      { header: "Lecciones aprendidas", text: "Documento obligatorio con responsables y fechas de implementación." },
      { header: "Biblioteca de cédulas modelo", text: "Plantillas por rubro con enlaces a NIA y NIF." },
      { header: "Analítica de datos", text: "Scripts reutilizables para pruebas sustantivas." }
    ]},
    { type: "paragraph", text: "La mejora continua no es opcional: es el puente entre cumplimiento y excelencia. Un archivo que evoluciona reduce riesgo, eleva la confiabilidad del dictamen y aporta valor al cliente mediante recomendaciones relevantes y oportunas." },
    { type: "accordion", header: "Señales de madurez", open: false, items: [
      { header: "Menos retrabajo", text: "Descenso sostenido de notas reabiertas." },
      { header: "Mejor focalización", text: "Pruebas alineadas a riesgos significativos." },
      { header: "Tiempo optimizado", text: "Ciclos de cierre de archivo más cortos sin sacrificar calidad." }
    ]}
  ]
}
            ],
          },
        ],
      },

      {
  id: "1.3",
  numbering: "2.3",
  title: "Planeación (documentación del encargo)",
  content: [
    { type: "paragraph", text: "La planeación en auditoría es el esqueleto que articula estrategia, programa y asignación de recursos. Conforme a la NIA 300, el auditor documenta una visión global del encargo y un plan detallado con riesgos identificados, procedimientos previstos, cronograma y distribución de tareas. Esta documentación permite que un auditor experimentado, ajeno al trabajo, entienda la naturaleza, el momento y el alcance de las pruebas, los resultados y las conclusiones alcanzadas, preservando la trazabilidad de juicios profesionales significativos. :contentReference[oaicite:0]{index=0}" },
    { type: "paragraph", text: "En la práctica, la planeación se plasma en cédulas que integran: estrategia, matriz de riesgos por rubro y aseveración, y el programa de auditoría. Todo ello se vincula con la materialidad y con la respuesta a riesgos —pruebas de control y sustantivas— para sustentar la suficiencia y adecuación de la evidencia. El propósito es optimizar el esfuerzo, reducir el riesgo de auditoría a un nivel aceptablemente bajo y asegurar la consistencia con el marco de información financiera aplicable. :contentReference[oaicite:1]{index=1}" },

    { type: "image", alt: "Mapa de planeación del encargo (estrategia → riesgos → programa → cronograma)", caption: "Esquema de planeación basado en NIA 300 (elaboración propia a partir del material de la sesión). :contentReference[oaicite:2]{index=2}" },

    { type: "paragraph", text: "Un ejemplo típico en manufactura: identificar como riesgo principal el costo de ventas por uso de costeo estándar. La planeación asigna responsables, define procedimientos (análisis de variaciones, observación de inventarios, pruebas de corte) y agenda visitas a planta. El papel de trabajo conserva esta ruta crítica y las decisiones clave: umbrales de materialidad, enfoque por componentes, uso de especialistas, y coordinación con auditoría interna cuando corresponda. :contentReference[oaicite:3]{index=3}" },

    { type: "accordion", header: "Guía de planeación (3 capas)", open: false, items: [
      { header: "Capa 1 — Estrategia global", text: "Objetivo del encargo, alcance, equipo, cronograma y dependencias; vínculo con NIA 300 y NIA 200 (aseguramiento razonable)." },
      { header: "Capa 2 — Riesgos y materialidad", text: "Identificar riesgos significativos por aseveración; definir materialidad global, de desempeño y para clases de transacciones; establecer respuestas." },
      { header: "Capa 3 — Programa y evidencia", text: "Diseñar pruebas de control y sustantivas; detallar naturaleza, oportunidad y extensión; referenciar a NIA 330/500 para calidad de evidencia. :contentReference[oaicite:4]{index=4}" },
    ]},

    { type: "paragraph", text: "El expediente de planeación se integra al archivo de auditoría y habilita la supervisión y revisión por niveles. Además, funciona como base para auditorías futuras, pues conserva el entendimiento del negocio, las áreas susceptibles de error material y las lecciones aprendidas del ciclo anterior." },
    { type: "accordion", header: "Checklist mínimo del papel de planeación", open: false, items: [
      { header: "Contenido indispensable", text: "Estrategia, matriz de riesgos, programa, cronograma, asignación de equipo, determinación de materialidad, dependencias de terceros." },
      { header: "Trazabilidad", text: "Cruces a cédulas por rubro, a cálculo de materialidad y a comunicación con la administración/TCG." },
      { header: "Evidencia de revisión", text: "Firmas/initials de preparador y revisor, marcas de revisión y comentarios de seguimiento. :contentReference[oaicite:5]{index=5}" },
    ]},

    { type: "paragraph", text: "Culmina con la aprobación del socio responsable y la comunicación inicial de alcance y tiempos a la administración. Una planeación bien documentada es, en sí misma, evidencia de calidad y cumplimiento normativo." }
  ],
},

/* 2.4 Propiedad y confidencialidad */
{
  id: "1.4",
  numbering: "2.4",
  title: "Propiedad y confidencialidad",
  content: [
    { type: "paragraph", text: "La documentación de auditoría pertenece al auditor; no obstante, su manejo se rige por estrictos deberes de confidencialidad. El material establece que, aunque el legajo es propiedad del auditor, su contenido solo puede revelarse con autorización del cliente o por mandato legal/judicial, y siempre documentando el requerimiento, el análisis y el alcance de lo entregado. Este principio se alinea con la NIA 230 (párrafo A21) y el Código de Ética del IFAC. :contentReference[oaicite:6]{index=6}" },
    { type: "paragraph", text: "En términos operativos, el despacho debe implementar controles de acceso (físicos y lógicos), políticas de retención y destrucción segura, y protocolos ante incidentes de seguridad. La confidencialidad se mantiene también frente a consultas profesionales: solo se comparte lo estrictamente necesario, preservando datos sensibles del cliente y anonimización cuando procede. :contentReference[oaicite:7]{index=7}" },

    { type: "image", alt: "Ciclo de vida del legajo: creación → acceso controlado → uso → archivo → conservación → disposición", caption: "Ciclo de vida y puntos de control de confidencialidad (elaboración propia con base en NIA 230/Código IFAC). :contentReference[oaicite:8]{index=8}" },

    { type: "paragraph", text: "Ante un oficio judicial, el auditor documenta la solicitud, consulta asesoría legal, delimita el universo de papeles pertinentes y registra qué se entrega, a quién y cuándo. Si la autoridad solicita información fuera de su competencia o sin formalidades, se rechaza fundadamente y se deja constancia en papeles de trabajo." },

    { type: "accordion", header: "Política práctica (3 apartados)", open: false, items: [
      { header: "Dueños y custodios", text: "El socio del encargo es propietario del legajo; TI y administración son custodios de sistemas/archivos; todo acceso se registra." },
      { header: "Clasificación de información", text: "Pública, interna, confidencial, altamente confidencial; controles escalonados según categoría (cifrado, doble factor, NDA)." },
      { header: "Respuestas a requerimientos", text: "Checklist legal, minimización de datos, registro de entrega y resguardo de evidencia de envío/recepción. :contentReference[oaicite:9]{index=9}" },
    ]},

    { type: "paragraph", text: "El incumplimiento expone al auditor a riesgos legales y disciplinarios. Por ello, la formación continua en ética y protección de datos es parte del sistema de control de calidad del despacho." },

    { type: "accordion", header: "Errores frecuentes y cómo evitarlos", open: false, items: [
      { header: "Compartir por canales inseguros", text: "Evitar correos personales o repositorios sin control; usar plataformas con cifrado y control de versiones." },
      { header: "Entregar más de lo requerido", text: "Aplicar principio de minimización; revisar línea por línea lo solicitado vs. lo enviado." },
      { header: "Falta de documentación", text: "Cualquier divulgación (o negativa) debe respaldarse con nota en el legajo y evidencias de la decisión. :contentReference[oaicite:10]{index=10}" },
    ]},

    { type: "paragraph", text: "La regla de oro: confidencialidad por diseño. Si el proceso resguarda la información desde el origen, el riesgo residual de divulgación indebida se reduce de manera significativa." }
  ],
},

/* 2.5 Clases y datos que debe contener */
{
  id: "1.5",
  numbering: "2.5",
  title: "Clases y datos que debe contener",
  content: [
    { type: "paragraph", text: "Los papeles de trabajo se estructuran en clases estandarizadas que facilitan la revisión, los cruces y la trazabilidad: cédulas sumarias y analíticas, análisis de cuentas, copias de documentos clave, evidencia de procedimientos aplicados, firmas de revisión, conclusiones y referencias cruzadas. Cada papel debe incluir datos de identificación (cliente, periodo, preparador, revisor, fecha y código de referencia). :contentReference[oaicite:11]{index=11}" },
    { type: "paragraph", text: "La cédula sumaria sintetiza saldos por rubro y enlaza a cédulas analíticas; estas, a su vez, desglosan partidas, fuentes de evidencia y resultados de pruebas. En análisis de cuentas, se documentan variaciones relevantes, criterios de selección de muestras y conclusiones. Todas las cédulas refieren a las NIA que fundamentan la naturaleza, oportunidad y extensión de procedimientos. :contentReference[oaicite:12]{index=12}" },

    { type: "image", alt: "Diagrama de referencias cruzadas: Sumaria ↔ Analíticas ↔ Evidencia", caption: "Modelo de referencias cruzadas (ejemplo didáctico). :contentReference[oaicite:13]{index=13}" },

    { type: "paragraph", text: "Una tabla de control puede mapear cada clase con su NIA relacionada (ej. NIA 230 para documentación, NIA 500 para evidencia, NIA 520 para procedimientos analíticos) y con un ejemplo concreto (p. ej., inventarios: hoja de conteo físico y conciliación con registros). Este mapeo estandariza la calidad y acelera la supervisión. :contentReference[oaicite:14]{index=14}" },

    { type: "accordion", header: "Checklist por clase de papel", open: false, items: [
      { header: "Sumaria", text: "Total por rubro, fuentes principales, enlace a analíticas, firmas de revisión." },
      { header: "Analítica", text: "Desglose por componente, selección de muestra, hallazgos, conclusiones." },
      { header: "Evidencia", text: "Copias/escaneos, confirmaciones, cálculos, pruebas de control/sustantivas. :contentReference[oaicite:15]{index=15}" },
    ]},

    { type: "paragraph", text: "La disciplina de completar datos mínimos (encabezados, marcas, referencias cruzadas) reduce retrabajos y evita vacíos probatorios. Además, habilita comparabilidad interperiodos y sirve como base del legajo permanente y corriente." },

    { type: "accordion", header: "Datos obligatorios del encabezado", open: false, items: [
      { header: "Identificación", text: "Cliente, ejercicio, área/rubro, código del papel, fecha." },
      { header: "Responsables", text: "Preparó, revisó (fechas y firmas/marcas de revisión)." },
      { header: "Contexto y conclusión", text: "Objetivo del papel, NIA aplicables, conclusión y efectos en informe. :contentReference[oaicite:16]{index=16}" },
    ]},

    { type: "paragraph", text: "Documentar bien no es burocracia: es el medio por el cual el juicio profesional se vuelve defendible, reproducible y útil para decisiones." }
  ],
},
    ],
  },

  /* Unidad 3 — Boletines / NIA y NIF aplicables a partidas específicas */
  {
    id: "2",
    numbering: "Unidad 3",
    title: "Boletines, NIA y NIF aplicables a partidas específicas",
    content: [
    { type: "paragraph", text: "Esta unidad articula dos planos complementarios: el normativo contable (NIF) que determina cómo deben reconocerse, valuarse, presentarse y revelarse las partidas; y el normativo de auditoría (NIA/boletines) que indica cómo debe el auditor obtener evidencia suficiente y apropiada para opinar. La clave pedagógica es traducir cada criterio NIF en objetivos de auditoría por aseveración (existencia, integridad, valuación, presentación y revelación, derechos y obligaciones) y, a su vez, seleccionar procedimientos conforme a NIA que respondan al riesgo valorado. Este enfoque evita prácticas mecánicas y fomenta el juicio profesional, la trazabilidad documental y la consistencia del dictamen. Con ese marco, revisaremos partidas sensibles—efectivo, cuentas por cobrar, inventarios, propiedades-planta-equipo, pasivos y beneficios a empleados, así como impuestos a la utilidad—y conectaremos cada una con sus NIF y con las NIA de referencia para planeación, ejecución y documentación. El resultado esperado es un mapa práctico que guíe la planeación, la selección de pruebas (controles y sustantivas), el diseño de cédulas y la evaluación de revelaciones." },
    { type: "paragraph", text: "En efectivo y equivalentes (NIF C-1) y cuentas por cobrar (NIF C-3) predominan las aseveraciones de existencia, derechos y valuación. La NIA 315 orienta la identificación de riesgos (p. ej., apropiación indebida de efectivo, antigüedad y recuperabilidad de saldos), mientras que la NIA 330 guía respuestas mediante confirmaciones externas (NIA 505), recálculos y procedimientos analíticos. En efectivo, los arqueos sorpresivos, conciliaciones bancarias y la inspección de controles sobre firmas autorizadas y segregación de funciones son decisivos. En cuentas por cobrar, la estimación de incobrables exige escepticismo profesional: análisis de antigüedad, eventos posteriores, políticas de crédito y evidencia de cobranza. La consistencia entre política contable, tratamientos de deterioro y revelaciones debe quedar explícita en cédulas, con referencias cruzadas a papeles de confirmaciones, pruebas de corte y conciliaciones auxiliares-mayor." },
    { type: "paragraph", text: "En inventarios (NIF C-4) y propiedades, planta y equipo (NIF C-6) los riesgos típicos se concentran en existencia, valuación y corte. La NIA 501 establece expectativas sobre asistencia a conteos físicos, pruebas de reconteo y procedimientos dirigidos a identificación de obsolescencia o daño. Para la valuación a costo o valor neto de realización, son útiles pruebas analíticas por rotación, márgenes y variaciones inusuales, así como la reconciliación de costos estándar vs. reales. En PPE, el enfoque se traslada a la valuación inicial, depreciación sistemática, vida útil y bajas, con recálculos, inspección física selectiva y revisión de contratos de adquisición. Si existen componentes significativos o revaluaciones, el auditor puede requerir especialistas (NIA 620) y debe anclar todo en aseveraciones y revelaciones exigidas por NIF, incluyendo restricciones, garantías y cambios de estimaciones." },
    { type: "paragraph", text: "En pasivos y provisiones (NIF C-9), beneficios a empleados (NIF D-3) e impuestos a la utilidad (NIF D-4), la auditoría se centra en integridad, valuación y revelación. El riesgo de sub-registro de pasivos demanda procedimientos de “búsqueda de pasivos” (revisión de pagos posteriores, correspondencia legal y contratos). Para D-3, la medición actuarial exige evaluar supuestos (tasas de descuento, rotación y mortalidad) y, cuando proceda, recurrir a especialistas, alineando el trabajo con NIA 540 (estimaciones) y NIA 500 (confiabilidad de evidencia). En D-4, la conciliación entre utilidad contable y fiscal, diferencias temporales y cálculo del impuesto diferido requieren recálculos y contrastes con papeles fiscales. Las revelaciones deben reflejar juicios críticos, incertidumbres y sensibilidades; su omisión puede ser tan material como una cifra errónea." },
    { type: "paragraph", text: "La presentación y revelación son parte sustantiva del objetivo de auditoría. No basta verificar importes: la lectura de notas, políticas y estimaciones debe ser congruente con riesgos y con la realidad económica del ente. Una buena práctica es incorporar “tablas de correlación” NIF→aseveraciones→pruebas NIA en cada cédula sumaria por rubro, junto con la materialidad y el efecto de incorrecciones no corregidas. Esto facilita revisiones de calidad, auditorías futuras y defensa técnica del dictamen. Además, promueve la innovación metodológica: uso de analítica de datos para selección de muestras, pruebas de consistencia entre módulos (ventas-cobranza-inventarios), y evidencia electrónica con sellos de tiempo. El objetivo final es una opinión fundamentada que proteja el interés público y respalde al auditor con documentación robusta, clara y alineada al marco normativo." },
    {
      type: "accordion",
      header: "Guía rápida (NIA ↔ NIF por partida)",
      open: false,
      items: [
        { header: "Capa 1 — Matriz NIA–NIF", text: "C-1/C-3 (efectivo y CxC) ↔ NIA 315, 330, 500, 505; C-4 (inventarios) ↔ NIA 315, 330, 500, 501; C-6 (PPE) ↔ NIA 315, 330, 500, 540, 620; C-9 (pasivos) ↔ NIA 315, 330, 500; D-3 (beneficios) ↔ NIA 540/620; D-4 (impuestos) ↔ NIA 500/540." },
        { header: "Capa 2 — Paquetes de pruebas", text: "Inventarios: asistencia a conteos, reconteos, pruebas de corte, VNR. CxC: confirmaciones positivas/negativas, análisis de antigüedad, eventos posteriores. PPE: recálculo de depreciación, inspección física selectiva, revisión de bajas y restricciones." },
        { header: "Capa 3 — Alertas y buenas prácticas", text: "Riesgo de sesgo en estimaciones (NIA 540); documentación que “cuenta una historia” (NIA 230); revelaciones completas y congruentes con riesgos; uso de especialistas (NIA 620) cuando la complejidad lo exija." }
      ]
    }
  ],
    subthemes: [
      /* 3.1 Normas de auditoría (NIA y boletines) */
{
  id: "2.1",
  numbering: "3.1",
  title: "Normas de auditoría (NIA y boletines)",
  content: [
    { type: "paragraph", text: "Las Normas Internacionales de Auditoría (NIA) fijan los principios, objetivos y requerimientos mínimos que orientan la planeación, ejecución y comunicación de una auditoría de estados financieros. Su propósito central es elevar la confianza de los usuarios al proporcionar una base metodológica homogénea y verificable. Desde la documentación del trabajo (NIA 230), la planeación (NIA 300) y la obtención de evidencia (NIA 500) hasta la valoración y respuesta a riesgos (NIA 315/330), el cuerpo normativo ofrece un hilo conductor que enlaza juicio profesional, escepticismo y trazabilidad documental. Los boletines y guías emitidos en México complementan esta arquitectura traduciendo criterios internacionales a contextos locales y a partidas específicas, sin alterar el estándar de calidad exigido por las NIA. :contentReference[oaicite:0]{index=0}" },
    { type: "paragraph", text: "La NIA 230 exige que un auditor experimentado, ajeno al encargo, pueda entender la naturaleza, el momento y el alcance de los procedimientos realizados, los resultados obtenidos y las conclusiones alcanzadas. Esto obliga a que cada papel de trabajo muestre referencias cruzadas, marcas de revisión, identificación del preparador y del revisor, y un nexo explícito entre riesgo evaluado y prueba aplicada. En entornos de TI, esta norma cobra un cariz operativo: sin metadatos, sellos de tiempo y evidencia de control de versiones, la historia de auditoría se diluye y la defensa técnica del dictamen se debilita. La consecuencia práctica es contundente: lo no documentado, no existe." },
    { type: "paragraph", text: "La NIA 300 manda diseñar una estrategia global que alinee materialidad preliminar, relevancia por rubro y cronograma del equipo, y un plan de auditoría que operacionalice esa estrategia en procedimientos de control y sustantivos. En la práctica, el plan debe integrar la lectura de NIF aplicables (qué evaluar) con las NIA (cómo evaluar), y plasmarlo en matrices de riesgos con enlaces a cédulas. La retroalimentación entre hallazgos y plan es iterativa: un indicio de incorrección en inventarios puede reconfigurar el enfoque hacia pruebas de existencia, valuación y corte, con mayor tamaño de muestra y mayor detalle analítico." },
    { type: "accordion", header: "Guía de referencia rápida (NIA clave)", open: false, items: [
      { header: "NIA 315 — Identificación y valoración del riesgo", text: "Mapea riesgos a nivel de estados financieros y de aseveración; exige entender el negocio y su control interno." },
      { header: "NIA 330 — Respuestas a los riesgos valorados", text: "Diseña pruebas de controles y procedimientos sustantivos acordes con el riesgo; ajusta naturaleza, oportunidad y extensión." },
      { header: "NIA 500 — Evidencia de auditoría", text: "Define suficiencia/apropiación; jerarquiza confiabilidad de confirmaciones, inspecciones, recálculos y procedimientos analíticos." }
    ]},
    { type: "paragraph", text: "La NIA 500 precisa que la evidencia debe ser suficiente (cantidad) y apropiada (calidad/relevancia/confiabilidad). El auditor pondera la fuente (externa vs. interna), la forma (documental, física, analítica) y la consistencia entre pruebas. Un error común es acumular papeles sin conexión lógica con el riesgo identificado; otro, confiar excesivamente en evidencia interna no corroborada externamente. La mejor práctica es construir cadenas probatorias que inicien en el riesgo, pasen por la aseveración (existencia, integridad, valuación, presentación, derechos y obligaciones) y concluyan en una inferencia sustentable." },
    { type: "paragraph", text: "Los boletines y guías locales sirven como puente de especificidad: orientan sobre estimaciones contables, confirmaciones externas o uso de especialistas, y cómo articularlos con NIA 540, NIA 505 u otras. En rubros sensibles —instrumentos financieros, beneficios a empleados o impuestos a la utilidad—, estas guías ayudan a adaptar pruebas al contexto regulatorio mexicano, sin relajar el estándar internacional. En auditorías de grupos o componentes, el énfasis recae en la coordinación documental y en la consistencia de criterios de materialidad." },
    { type: "paragraph", text: "Finalmente, la coherencia normativa culmina en la opinión (NIA 700): limpia, con salvedades, adversa o abstención. La calidad del dictamen depende de la trazabilidad entre riesgos valorados, respuestas diseñadas y evidencia reunida. El cierre del legajo debe cumplirse dentro de los plazos de archivo y conservación establecidos, garantizando integridad, confidencialidad y disponibilidad para revisiones de control de calidad o requerimientos de autoridades. Este ecosistema normativo protege al interés público y, no menos importante, al propio auditor frente a controversias." },
    { type: "accordion", header: "Errores frecuentes y salvaguardas", open: false, items: [
      { header: "Documentar por cumplir", text: "Papeles voluminosos sin lógica de riesgo-aseveración-prueba-conclusión. Salvaguarda: usar matrices de trazabilidad y referencias cruzadas." },
      { header: "Confianza excesiva en evidencia interna", text: "Sin confirmación externa ni recálculo independiente. Salvaguarda: triangulación de fuentes y procedimientos analíticos robustos." },
      { header: "Materialidad incongruente", text: "Umbrales que no reflejan el riesgo del rubro. Salvaguarda: recalibrar con análisis de sensibilidad y juicio profesional documentado." }
    ]}
  ],
},

/* 3.2 Normas de información financiera (NIF) */
{
  id: "2.2",
  numbering: "3.2",
  title: "Normas de información financiera (NIF)",
  content: [
    { type: "paragraph", text: "Las NIF mexicanas establecen el marco de reconocimiento, valuación, presentación y revelación para las partidas de los estados financieros. Constituyen el “qué” se evalúa, mientras que las NIA determinan el “cómo” se audita. En partidas específicas —caja y equivalentes (NIF C-1), cuentas por cobrar (NIF C-3), inventarios (NIF C-4), propiedades, planta y equipo (NIF C-6), pasivos (NIF C-9), beneficios a empleados (NIF D-3) o impuestos a la utilidad (NIF D-4)—, el auditor debe traducir los criterios contables en objetivos de auditoría y pruebas pertinentes. Este encuadre asegura consistencia entre la evidencia recabada y la norma sustantiva aplicable. :contentReference[oaicite:1]{index=1}" },
    { type: "paragraph", text: "La interacción NIF–NIA opera en doble vía: la NIF define el atributo a verificar (por ejemplo, valuación a costo o valor neto de realización en inventarios), y la NIA 500/330 indica la combinación óptima de pruebas (observación de conteos, conciliaciones, confirmaciones y pruebas analíticas). Si la NIF C-6 exige depreciación sistemática con base en vida útil, el auditor diseña procedimientos para validar métodos, supuestos y cálculos; además, evalúa revelaciones y consistencia interperiodo. De este modo, la evidencia no solo prueba cifras, sino cumplimiento integral de reconocimiento y revelación." },
    { type: "paragraph", text: "En rubros de alta estimación —provisiones laborales (NIF D-3) o deterioro— la auditoría exige mayor escepticismo: revisión de supuestos, sensibilidad a tasas y uso de expertos donde proceda (alineado con NIA 540). La trazabilidad entre supuestos, modelos y notas es clave para detectar sesgos de administración. Un enfoque innovador es incorporar análisis de escenarios y pruebas de estrés en cédulas, explicitando umbrales de materialidad que activarían ajustes o revelaciones reforzadas." },
    { type: "accordion", header: "Mapa NIF → objetivos de auditoría", open: false, items: [
      { header: "NIF C-4 Inventarios", text: "Objetivos: existencia, integridad y valuación a costo/VNR; pruebas: observación física, conciliaciones, análisis de costo y corte." },
      { header: "NIF C-6 PPE", text: "Objetivos: valuación y depreciación; pruebas: recálculo, inspección física selectiva y revisión de vidas útiles y métodos." },
      { header: "NIF D-4 Impuestos", text: "Objetivos: cálculo y revelación de impuesto corriente/diferido; pruebas: conciliaciones, revisión de diferencias temporales y soporte fiscal." }
    ]},
    { type: "paragraph", text: "La presentación y revelación forman parte inseparable de la auditoría financiera. Muchas incorrecciones surgen no por cifras erróneas sino por omisiones de revelación exigidas por NIF. El auditor debe verificar esquemas de notas, políticas contables significativas y consistencia con riesgos y juicios críticos. La concordancia entre cuerpo de los estados y notas —por ejemplo, en contratos de arrendamiento, instrumentos financieros o contingencias— evita conclusiones engañosas del usuario." },
    { type: "paragraph", text: "Para reforzar eficiencia y calidad, conviene estructurar papeles por rubro con cédulas sumarias y analíticas que reflejen: (i) criterio NIF aplicable, (ii) objetivo de auditoría por aseveración, (iii) procedimientos ejecutados y evidencia, y (iv) conclusión y efectos en el dictamen. Este formato, ya recomendado para inventarios y PPE, es extensible a instrumentos financieros (valuación a valor razonable, revelaciones de riesgo) y a ingresos (corte y reconocimiento), integrando pruebas sustantivas y de control cuando existan sistemas robustos." },
    { type: "paragraph", text: "La convergencia NIF–NIA, documentada en tablas de correlación dentro del legajo, facilita revisiones de calidad y auditorías futuras. Además, delimita responsabilidades: la gerencia prepara la información conforme a NIF; el auditor, con base en NIA, obtiene evidencia suficiente y apropiada para opinar. Esta delimitación, bien documentada, protege el interés público y brinda seguridad jurídica ante controversias, al mostrar que el dictamen descansa sobre normas sustantivas y procedimentales sólidas y coherentes." },
    { type: "accordion", header: "Checklist de revelación por rubro (extracto)", open: false, items: [
      { header: "Inventarios (NIF C-4)", text: "Método de valuación, política de costo, VNR, pérdidas por deterioro, restricciones y garantías." },
      { header: "PPE (NIF C-6)", text: "Modelo de medición, vidas útiles, método de depreciación, bajas relevantes, restricciones." },
      { header: "Beneficios a empleados (NIF D-3)", text: "Supuestos actuariales clave, sensibilidad, políticas y pasivos por pensiones/indemnizaciones." }
    ]}
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
