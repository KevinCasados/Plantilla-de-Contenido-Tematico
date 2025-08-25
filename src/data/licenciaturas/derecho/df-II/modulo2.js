/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LDE", // Programa académico: Licenciatura en Derecho
  courseId: "DFISCAL-II", // Materia: Derecho Fiscal II
  id: "mod-2", // Identificador del módulo en este curso

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Derecho Fiscal II",
  title:
    "Módulo 2. Procedimiento administrativo, PAE y seguridad social (IMSS/INFONAVIT)",
  semestre: "Séptimo semestre",
  teacher: "Dra. Alondra Lilí Villanueva Márquez",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar la importancia del procedimiento administrativo y discernir entre recursos obligatorios y optativos, como base para sustentar y aplicar el marco jurídico correspondiente en materia administrativa, fiscal y de seguridad social.",

  competencies: [
    "Distinguir proceso, procedimiento y actos administrativos (provisionales y definitivos), así como sus efectos.",
    "Identificar actos que determinan créditos fiscales y trazar rutas de impugnación idóneas.",
    "Aplicar el Procedimiento Administrativo de Ejecución: requerimiento de pago, embargo, intervención en caja, remate, aplicación y adjudicación.",
    "Explicar el procedimiento administrativo en la Ley Federal de Procedimiento Administrativo y su sustento doctrinal.",
    "Reconocer el régimen de aportaciones de seguridad social y el procedimiento de verificación de cuotas (IMSS), incluido el recurso de inconformidad.",
    "Operar obligaciones en SUA e INFONAVIT y conocer el recurso de inconformidad ante INFONAVIT.",
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
          text: "Objetivo: comprender el procedimiento administrativo y su sustento normativo; conocer el Procedimiento Administrativo de Ejecución (PAE) y los mecanismos aplicables en materia de seguridad social (IMSS/INFONAVIT).",
        },
      ],
    },

    /* UNIDAD 4 */
    {
      id: "4",
      numbering: "Unidad 4",
      title: "Procedimientos en la Ley Federal de Procedimiento Administrativo",
      content: [
        {
          type: "paragraph",
          text: "El procedimiento administrativo es el cauce formal por el que se concreta la actuación de la Administración para realizar un fin jurídico legítimo. No es un mero conjunto de trámites inconexos, sino una secuencia ordenada y racional de actos que expresa la voluntad administrativa y encauza la relación con las personas gobernadas bajo el principio de igualdad. Desde esta óptica, el procedimiento disciplina tanto las condiciones de validez de los actos como las garantías de los particulares —audiencia, defensa y control—, a fin de producir decisiones eficaces y conformes a derecho. La Ley Federal de Procedimiento Administrativo (LFPA) fija ese marco garantista y operativo, al exigir que la autoridad ajuste su conducta a reglas preestablecidas y verificables, evitando la arbitrariedad y reforzando la previsibilidad de la respuesta estatal.",
        },
        {
          type: "paragraph",
          text: "Su estructura comprende fases de iniciación, instrucción y decisión, dentro de las cuales la autoridad puede adoptar medidas provisionales para asegurar la eficacia de la resolución, acumular expedientes por conexidad y respetar un orden riguroso de tramitación. Estas pautas no son ritualismos: constituyen límites jurídicos que permiten tutelar derechos y, simultáneamente, asegurar la consecución del interés público. En la práctica, la regularidad del procedimiento condiciona la validez del acto final; por ello, las formas esenciales —competencia, motivación, oportunidad, notificación— dejan de ser formalidades vacías para convertirse en garantías materiales de legalidad y de debido proceso administrativo.",
        },
        {
          type: "paragraph",
          text: "En ese marco, la LFPA distingue actos provisionales y actos definitivos. Los primeros son transitorios y no deciden el fondo del asunto; su razón de ser es cautelar y sujeta a la eventual emisión de otras determinaciones. Los segundos ponen fin al procedimiento, resuelven la cuestión sustantiva planteada y producen efectos jurídicos directos frente a la persona interesada. La corrección técnica de esa distinción es capital: condiciona qué puede impugnarse, en qué momento y con qué efectos; y determina, además, la procedencia de medidas de ejecución o de suspensión, así como la ruta de defensa idónea frente a la decisión administrativa.",
        },
        {
          type: "paragraph",
          text: "Una categoría de especial impacto son los actos administrativos que traen aparejada la determinación de un crédito fiscal. En materia tributaria, el Código Fiscal de la Federación (CFF) desarrolla el deber constitucional de contribuir (artículo 31, fracción IV) y regula, entre otros extremos, la clasificación de contribuciones, las facultades de comprobación y el Procedimiento Administrativo de Ejecución (PAE). Cuando un acto definitivo cuantifica un crédito y lo hace exigible, activa deberes de pago o de garantía, y proyecta consecuencias ejecutivas si el adeudo no se cubre en tiempo. La correcta identificación del acto determinante y de su notificación es, por tanto, decisiva para el cómputo de plazos y la estrategia de defensa.",
        },
        {
          type: "paragraph",
          text: "Respecto de los medios de impugnación, la unidad enfatiza la diferencia entre recursos administrativos obligatorios y optativos. La terminología legal —por ejemplo, el uso del verbo “podrán”— no autoriza, por sí sola, a omitir la vía administrativa cuando el ordenamiento la establece como presupuesto para acudir al juicio contencioso. La regla operativa es clara: si la ley prevé un recurso procedente, debe agotarse en tiempo y forma o se corre el riesgo de consentimiento del acto. Doctrinalmente, el procedimiento se concibe como una integración coordinada de actos recepticios orientados a una decisión final; de ahí que la tutela administrativa efectiva requiera formas, tiempos y recursos que no son accesorios, sino condición de validez y control.",
        },

        {
          type: "accordion",
          header: "Guía rápida (procedimiento en la LFPA — 3 niveles)",
          open: false,
          items: [
            {
              header: "Nivel 1 — Mapa del procedimiento",
              text: "Inicio (de oficio o a petición) → medidas provisionales → instrucción (pruebas, acumulación, orden de despacho) → decisión (resolución definitiva) → notificación válida → fase impugnativa. Las formas esenciales (competencia, motivación, plazos y notificación) son garantías materiales.",
            },
            {
              header: "Nivel 2 — Actos provisionales vs. definitivos",
              text: "Provisionales: transitorios, instrumentales, no deciden el fondo; orientados a asegurar eficacia. Definitivos: ponen fin al procedimiento y producen efectos directos. La calificación correcta incide en suspensión, recursos procedentes y oportunidad para acudir al contencioso.",
            },
            {
              header: "Nivel 3 — Créditos fiscales y defensa",
              text: "Acto determinante de crédito → notificación → cómputo de plazos → recurso administrativo (obligatorio u optativo según ley) → eventual juicio ante el TFJA. Si el crédito es exigible y no se paga, se activa el PAE (requerimiento, embargo, remate, adjudicación). Controlar el ‘reloj procesal’ es clave.",
            },
          ],
        },
      ],
      subthemes: [
        {
          id: "4.1",
          numbering: "4.1",
          title: "Procedimiento administrativo",
          content: [
            {
              type: "paragraph",
              text: "El procedimiento administrativo es el cauce formal de una serie ordenada de actos mediante los cuales la Administración concreta su actuación para realizar un fin jurídico legítimo. No se trata de trámites aislados, sino de un conjunto racional y secuenciado de actuaciones que encauzan la relación con los particulares y expresan la voluntad administrativa bajo el principio de igualdad. De esta caracterización se desprende que el procedimiento no sólo organiza la actividad de la autoridad, sino que constituye un sistema de garantías para las personas administradas.",
            },
            {
              type: "paragraph",
              text: "La Ley Federal de Procedimiento Administrativo (LFPA) impone que la autoridad ajuste su conducta a reglas preestablecidas y verificables, evitando la arbitrariedad. Tales reglas abarcan cuestiones de competencia, fundamentación y motivación, impulso de oficio, orden riguroso en el despacho, acumulación por conexidad y resolución de incidentes sin suspender el curso principal. El apego a estas formas esenciales no es un ritualismo: condiciona la validez de los actos y preserva el debido proceso administrativo.",
            },
            {
              type: "paragraph",
              text: "Estructuralmente el procedimiento comprende fases de iniciación, instrucción y decisión, seguidas de la notificación y, en su caso, de una fase impugnativa. En la tramitación puede acordarse la adopción de medidas provisionales para asegurar la eficacia de la resolución que pudiera recaer, siempre que existan elementos de juicio suficientes. La decisión final se plasma en una resolución definitiva que resuelve el fondo del asunto y produce efectos jurídicos directos frente a la persona interesada.",
            },
            {
              type: "paragraph",
              text: "La distinción entre actos provisionales y actos definitivos es capital para trazar la estrategia de defensa. Los primeros son transitorios e instrumentales; no deciden el fondo. Los segundos ponen fin al procedimiento y definen la situación jurídica del administrado. Esta calificación determina, entre otros extremos, el momento de impugnación, la procedencia de suspensión y la apertura del Procedimiento Administrativo de Ejecución si se trata de créditos fiscales exigibles.",
            },
            {
              type: "paragraph",
              text: "En suma, desde la óptica doctrinal y positiva, el procedimiento administrativo es una integración coordinada y racional de actos, fundamentalmente recepticios, orientados a una decisión unitaria de la Administración en resguardo del interés público. Su correcta conducción asegura eficacia decisoria, tutela los derechos de las personas y sirve de presupuesto para el control administrativo y jurisdiccional de la actividad estatal.",
            },

            {
              type: "accordion",
              header: "Guía rápida · Procedimiento en la LFPA",
              open: false,
              items: [
                {
                  header: "Mapa de fases",
                  text: "Inicio (de oficio o a petición) → instrucción (pruebas, informes, incidentes) → decisión (resolución) → notificación → recursos/contencioso. Las formas esenciales —competencia, motivación, plazos y notificación— son garantías materiales.",
                },
                {
                  header: "Medidas provisionales",
                  text: "Busca asegurar la eficacia de la resolución futura cuando hay elementos suficientes. Son transitorias, instrumentales y condicionadas a la decisión que pone fin al procedimiento.",
                },
                {
                  header: "Acto definitivo",
                  text: "Pone término al procedimiento y decide el fondo. Produce efectos jurídicos directos; abre plazos de impugnación y, en su caso, rutas de ejecución (p. ej., cobro de créditos fiscales).",
                },
              ],
            },
          ],
          subthemes: [
            {
              id: "4.1.1",
              numbering: "4.1.1",
              title: "Actos provisionales",
              content: [
                {
                  type: "paragraph",
                  text: "Los actos provisionales son decisiones de carácter transitorio dictadas durante la tramitación, con finalidad cautelar o instrumental, cuya razón de ser es asegurar la eficacia de la resolución definitiva. No definen en forma concluyente la situación jurídica de la persona administrada y, por ello, su impugnación, suspensión y ejecución obedecen a una lógica distinta a la de los actos que resuelven el fondo.",
                },
                {
                  type: "paragraph",
                  text: "Su emisión exige elementos de juicio suficientes que justifiquen la necesidad y proporcionalidad de la medida. La autoridad debe acreditar competencia, fundamento y motivación, así como la relación de instrumentalidad entre la medida y la decisión que pudiera recaer. Por su naturaleza, se sujetan a modificación, confirmación o levantamiento durante la instrucción.",
                },
                {
                  type: "paragraph",
                  text: "En la práctica, los actos provisionales pueden consistir en requerimientos de información, aseguramientos precautorios, citatorios, prevenciones o cualquier determinación que ordene medios para recabar antecedentes o evitar que el procedimiento se torne ilusorio. No obstante, su adopción no debe provocar indefensión: se preserva el derecho de audiencia y la posibilidad de hacer valer argumentos y pruebas pertinentes.",
                },
                {
                  type: "paragraph",
                  text: "Su eficacia temporal impone una vigilancia estricta de plazos y de condiciones. Por ejemplo, si la medida se dicta para evitar la pérdida de un bien o documento, debe estar limitada a lo estrictamente necesario y cesar cuando el riesgo desaparece o cuando se dicta la resolución definitiva. El exceso o desviación de finalidad puede producir su nulidad.",
                },
                {
                  type: "paragraph",
                  text: "Procesalmente, los actos provisionales no deciden el fondo ni ponen fin a la instancia; por ello, la vía de defensa ordinaria suele ser el recurso que la ley prevea para incidentes o medidas cautelares, reservando el ataque integral para la impugnación de la resolución definitiva. Esta arquitectura evita litigios prematuros y concentra el control en el acto que realmente define la situación jurídica del interesado.",
                },
              ],
            },
            {
              id: "4.1.2",
              numbering: "4.1.2",
              title: "Actos definitivos",
              content: [
                {
                  type: "paragraph",
                  text: "Los actos definitivos son aquellos que ponen término al procedimiento y resuelven el fondo del asunto planteado, produciendo efectos jurídicos directos para la persona interesada. A diferencia de las medidas provisionales, no son instrumentales ni transitorios: determinan en forma concluyente la situación jurídica del administrado y, por tanto, abren los plazos para su impugnación y, en su caso, para su ejecución.",
                },
                {
                  type: "paragraph",
                  text: "Su validez depende del respeto a las formas esenciales: competencia del órgano emisor, debida fundamentación y motivación, observancia del orden legal en la tramitación, impulso de oficio cuando proceda y notificación eficaz. La inobservancia de estas exigencias puede generar nulidad, al comprometer el derecho de defensa y la legalidad del actuar administrativo.",
                },
                {
                  type: "paragraph",
                  text: "En materia fiscal, cuando el acto definitivo determina un crédito —impuestos, derechos, aportaciones de seguridad social o contribuciones de mejora—, su notificación válida activa plazos perentorios para recursos administrativos y para la eventual vía contenciosa. Además, si el crédito es exigible y no se cubre o garantiza en tiempo, puede detonarse el Procedimiento Administrativo de Ejecución con medidas como requerimiento, embargo, remate y adjudicación.",
                },
                {
                  type: "paragraph",
                  text: "Desde la perspectiva estratégica, identificar con precisión la fecha de notificación y el contenido decisorio del acto definitivo es crucial para el cómputo de términos, la solicitud de suspensión y la elección de la vía idónea de defensa. La calificación errónea —tratar como provisional lo que decide el fondo, o viceversa— desordena los plazos y puede traducirse en consentimiento tácito.",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, aunque el acto definitivo cierra la fase decisoria, no clausura el control: abre la etapa impugnativa y, de ser el caso, la ejecutiva. Esta lógica de cierre–apertura asegura que la decisión administrativa sea contrastada con estándares de legalidad, razonabilidad y proporcionalidad, preservando el equilibrio entre eficacia pública y tutela de derechos.",
                },

                {
                  type: "accordion",
                  header:
                    "Checklist práctico · Del acto definitivo a la defensa",
                  open: false,
                  items: [
                    {
                      header: "1) Validez formal",
                      text: "Competencia, fundamento y motivación; respeto del orden legal de tramitación; resolución congruente y exhaustiva; firma válida del titular competente.",
                    },
                    {
                      header: "2) Notificación y plazos",
                      text: "Medio y fecha de notificación; constancia fehaciente; cómputo de términos para recursos obligatorios/optativos y juicio contencioso. Evaluar procedencia de suspensión.",
                    },
                    {
                      header: "3) Efectos y ejecución",
                      text: "¿Determina crédito? ¿Exigibilidad inmediata? Si no se paga/garantiza, prever etapas del PAE (requerimiento, embargo, remate, adjudicación) y riesgos patrimoniales.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        /* 4.2 Actos que determinan créditos fiscales */
        {
          id: "4.2",
          numbering: "4.2",
          title: "Actos que determinan créditos fiscales",
          content: [
            {
              type: "paragraph",
              text: "Los actos administrativos que traen aparejada la determinación de un crédito fiscal son decisiones definitivas de la autoridad hacendaria que cuantifican y hacen exigible una contribución, sus accesorios o una sanción. Tienen sustento constitucional en el deber de contribuir (art. 31, fr. IV) y marco legal en el Código Fiscal de la Federación (CFF), que clasifica las contribuciones, regula facultades de comprobación, delitos fiscales, el recurso de revocación y el Procedimiento Administrativo de Ejecución (PAE). Su correcta identificación —contenido decisorio, efectos y cierre del procedimiento— es crucial para fijar plazos de defensa, la procedencia de suspensión y, en su caso, la activación de mecanismos ejecutivos. En la práctica, suelen recaer en resoluciones de liquidación, multas, determinaciones por revisiones de gabinete o visitas domiciliarias, o en créditos por aportaciones de seguridad social cuando el ordenamiento así lo prevé. La validez del acto depende de competencia, fundamentación y motivación, respeto del procedimiento y notificación eficaz; defectos en estas condiciones impactan su eficacia y la oportunidad de impugnar.",
            },
            {
              type: "paragraph",
              text: "La estructura mínima del acto determinante comprende: (i) identificación del emisor competente; (ii) cita expresa de preceptos aplicables (fundamentación) y razones particulares del caso (motivación); (iii) hechos y medios de prueba que sustentan la cuantificación; (iv) liquidación clara del crédito y sus accesorios; (v) prevenciones sobre forma, lugar y plazo para pagar o garantizar; y (vi) advertencia de recursos procedentes. Esta arquitectura no es formalismo vacío: permite al contribuyente entender qué se le exige y por qué, y a un órgano revisor controlar la legalidad y razonabilidad de la decisión. La incongruencia, oscuridad en la liquidación, omisiones en la motivación individualizada o la cita genérica de preceptos sin conexión con los hechos concretos son vicios frecuentes que pueden llevar a la nulidad. Asimismo, la notificación debe practicarse conforme a ley, pues de ella corre el “reloj procesal” de recursos y del eventual juicio contencioso.",
            },

            {
              type: "accordion",
              header: "Checklist de validez del acto determinante",
              open: false,
              items: [
                {
                  header: "Competencia y motivación",
                  text: "Acreditar competencia material, territorial y jerárquica; motivar con hechos y pruebas del expediente; vincular norma–hecho–conclusión.",
                },
                {
                  header: "Liquidación y efectos",
                  text: "Cuadro de cálculo del principal y accesorios; exigibilidad, forma y plazo de pago o garantía; advertencias claras de medios de defensa.",
                },
                {
                  header: "Notificación y plazos",
                  text: "Medio idóneo, fecha cierta y acuse; cómputo de términos; constancias en expediente (buzón tributario, personal, estrados, etc.).",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Una vez notificado válidamente el acto, se abren alternativas: (a) pagar o garantizar dentro del plazo legal; (b) interponer el recurso administrativo procedente; o (c) acudir a la vía contenciosa, cuando la ley lo permita. En materia fiscal federal, el recurso de revocación opera como medio ordinario de revisión; su omisión puede traducirse en consentimiento tácito si era procedente. La garantía del interés fiscal —depósito, prenda, hipoteca, fianza, embargo en vía administrativa u otras— es requisito para la suspensión de la ejecución en determinadas hipótesis. Desde el ángulo estratégico, la elección de la vía de defensa exige ponderar la naturaleza y cuantía del crédito, la calidad de la prueba recabada por la autoridad y la posibilidad de desvirtuarla con documentación contable, CFDI, dictámenes o peritajes.",
            },
            {
              type: "paragraph",
              text: "La relación de estos actos con el PAE es inmediata: la falta de pago o garantía dentro del plazo detona el requerimiento y, en su caso, medidas como embargo, intervención en caja, remate y adjudicación, con preferencias de pago y formalidades estrictas. De ahí que los vicios del acto determinante y de su notificación no sean cuestiones accesorios: si no se impugnan, la ejecución avanzará sobre bienes o ingresos del contribuyente. También es capital distinguir actos provisionales (requerimientos, prevenciones) de actos definitivos: sólo estos últimos definen el fondo, producen efectos directos y abren plazos de defensa. Un error de calificación puede llevar a recursos indebidos o extemporáneos.",
            },

            {
              type: "accordion",
              header: "Línea de tiempo operativa",
              open: false,
              items: [
                {
                  header: "1) Revisión y determinación",
                  text: "Facultad de comprobación → actas/observaciones → valoración de pruebas → resolución que cuantifica el crédito.",
                },
                {
                  header: "2) Notificación y defensa",
                  text: "Notificación válida → cómputo de términos → recurso administrativo (cuando procede) → eventual juicio contencioso.",
                },
                {
                  header: "3) Ejecución",
                  text: "Si no se paga/garantiza → PAE: requerimiento, embargo, remate, adjudicación; solicitar suspensión cuando sea procedente.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "En la construcción del agravio, es útil diferenciar vicios formales (incompetencia, indebida fundamentación/motivación, notificación defectuosa, quebranto del orden de tramitación o del derecho de audiencia) de vicios sustanciales (errores de hecho o de derecho en la cuantificación, indebida apreciación de pruebas, violaciones al principio de proporcionalidad o equidad). La argumentación debe conectar claramente el defecto con la afectación concreta del derecho, evitando fórmulas abstractas. En su caso, se solicitará la suspensión de la ejecución y se ofrecerán pruebas idóneas para desvirtuar los hechos base de la liquidación.",
            },
            {
              type: "paragraph",
              text: "Finalmente, la gestión probatoria del contribuyente resulta decisiva: conservar trazabilidad de CFDI, pólizas contables, estados de cuenta, contratos y evidencias de cumplimiento permite responder a requerimientos y desvirtuar observaciones. El expediente debe documentar también la recepción de notificaciones (acuse, sellos de tiempo), para blindar el cómputo de plazos. Una cultura de cumplimiento y archivo no sólo reduce riesgos de determinaciones adversas, sino que también mejora la posición procesal en caso de impugnación, al facilitar la reconstrucción de hechos y la acreditación de deducciones, tasas, bases, objetos y sujetos del tributo.",
            },
          ],
        },

        /* 4.3 Recursos administrativos: obligatorios y optativos */
        {
          id: "4.3",
          numbering: "4.3",
          title: "Recursos administrativos: obligatorios y optativos",
          content: [
            {
              type: "paragraph",
              text: "Los recursos administrativos son mecanismos intraorgánicos de control que permiten a la propia Administración revisar la legalidad y razonabilidad de sus actos definitivos antes de acudir a la vía contenciosa. Su finalidad es corregir vicios sin necesidad de proceso judicial, depurar la actividad administrativa y garantizar tutela efectiva. En materia fiscal, el recurso de revocación es paradigmático; coexisten otras vías según el sector (p. ej., seguridad social). El punto nodal no es semántico sino funcional: cuando la ley prevé un recurso procedente, debe agotarse en tiempo y forma, pues su omisión puede implicar consentimiento del acto. Así, la elección entre “recurrir o no recurrir” no autoriza saltar directamente al juicio cuando la normatividad exige agotar la instancia previa.",
            },
            {
              type: "paragraph",
              text: "La lectura del vocablo legal “podrán” no significa libertad para optar entre interponer el recurso o demandar de inmediato; su sentido es abrir la posibilidad de impugnar ante la autoridad superior, en garantía de audiencia y defensa. Si el particular decide no hacerlo, consiente el acto; lo que no admite es obviar el recurso procedente para acudir sin más a la vía contenciosa. La claridad en esta interpretación evita caducidades y sobreseimientos. En consecuencia, la asesoría debe iniciar por verificar la procedencia del recurso (materia, cuantía, órgano emisor), la autoridad competente para conocerlo, los plazos perentorios y la necesidad de garantizar el interés fiscal para efectos suspensivos.",
            },

            {
              type: "accordion",
              header: "Checklist de procedencia y oportunidad",
              open: false,
              items: [
                {
                  header: "Identificación del acto",
                  text: "¿Es definitivo? ¿Quién lo emitió? ¿Qué efectos produce? ¿Cuándo se notificó? Fecha cierta = inicio de términos.",
                },
                {
                  header: "Recurso aplicable",
                  text: "Vía ordinaria (p. ej., revocación) u otras sectoriales; autoridad competente; requisitos del escrito y anexos.",
                },
                {
                  header: "Suspensión/garantía",
                  text: "Necesidad de garantizar el interés fiscal; medidas cautelares; efectos de la interposición sobre la ejecutoriedad.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "En el diseño del escrito, los agravios deben articular vicios formales y sustantivos. En los primeros: incompetencia, indebida fundamentación o motivación, violación de formas esenciales del procedimiento (audiencia, aportación y valoración de pruebas), notificación irregular, alteración no motivada del orden de despacho o negativa infundada de acumulación. En los segundos: indebida apreciación de hechos, errores en la determinación (objeto, base, tasa, tarifa), desconocimiento de pruebas documentales, violación a principios de proporcionalidad o equidad. La petición final debe ser congruente: nulidad lisa y llana, nulidad para efectos o modificación de la cuantía, según el caso. Adjuntar prueba documental y solicitar, cuando proceda, suspensión.",
            },
            {
              type: "paragraph",
              text: "Errores comunes que anulan estrategias: presentar el recurso ante autoridad incompetente; descuidar el cómputo de términos por notificaciones electrónicas; omitir la garantía del interés fiscal cuando es requisito para suspensión; confundir acto provisional con definitivo; y reproducir agravios estereotipados sin conexión con el expediente. La trazabilidad probatoria —acuses, sellos de tiempo, constancias de buzón— debe cuidarse tanto como el fondo. Asimismo, si se abre periodo probatorio, hay que ofrecer y desahogar pruebas oportunamente, puntualizando su alcance demostrativo.",
            },

            {
              type: "accordion",
              header: "Plantilla mínima de agravios",
              open: false,
              items: [
                {
                  header: "Agravio formal",
                  text: "Indebida fundamentación y motivación: se citan preceptos sin explicar su relación con los hechos; falta de individualización; violación de la LFPA en orden de tramitación/notificación.",
                },
                {
                  header: "Agravio sustantivo",
                  text: "Error en cuantificación del crédito: base gravable incorrecta; desconocimiento de CFDI y contabilidad; aplicación indebida de tasa/tarifa; falta de proporcionalidad.",
                },
                {
                  header: "Petición",
                  text: "Se solicita nulidad (lisa y llana o para efectos), devolución de cantidades indebidamente determinadas y suspensión de la ejecución en términos legales.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "La coordinación con medios sectoriales refuerza la defensa integral. En seguridad social, el recurso de inconformidad ante IMSS o INFONAVIT tiene reglas propias y supletoria de CFF/LFPA en ciertos extremos; la atención a plazos, competencia y requisitos específicos evita consentimientos tácitos. Finalmente, agotado el recurso y ratificados los vicios, se abre la vía contenciosa ante el Tribunal Federal de Justicia Administrativa, donde el expediente administrativo —y la trazabilidad de notificaciones y pruebas— adquiere centralidad probatoria. Un enfoque técnico, disciplinado y oportuno maximiza las probabilidades de éxito.",
            },
            {
              type: "paragraph",
              text: "En síntesis, el régimen de recursos no es un obstáculo burocrático, sino un filtro de legalidad y razonabilidad. Asumirlo como parte del diseño de cumplimiento y de gestión de riesgos fiscales permite detectar y corregir desviaciones antes de que escalen a ejecución o litigio costoso. La clave reside en: lectura precisa del acto, dominio de los plazos, narrativa probatoria sólida y petición coherente. Bajo esa lógica, el recurso deviene herramienta de tutela efectiva y de mejora regulatoria, alineada con la finalidad pública del procedimiento administrativo.",
            },
          ],
        },

        /* 4.4 Sustento doctrinario del procedimiento administrativo */
        {
          id: "4.4",
          numbering: "4.4",
          title: "Sustento doctrinario del procedimiento administrativo",
          content: [
            {
              type: "paragraph",
              text: "La doctrina discute si el procedimiento es un acto complejo —una decisión única integrada por fases inescindibles— o un encadenamiento de actos autónomos vinculados por un fin común (acto–procedimiento). La tendencia predominante le reconoce carácter procesal: actuaciones y actos administrativos cumplen funciones diversas, siguen reglas de generación y producen efectos diferenciados, pero convergen hacia una decisión final que expresa la voluntad administrativa y tutela el interés público. Esta comprensión evita confundir la unidad teleológica del procedimiento con la individualidad de los actos que lo componen, lo que tiene consecuencias directas en control de legalidad, impugnabilidad y cómputo de términos.",
            },
            {
              type: "paragraph",
              text: "Desde esa óptica, el procedimiento se configura como integración coordinada y racional de actos fundamentalmente recepticios —que requieren comunicación y producen efectos frente a terceros—; su diseño garantiza audiencia, contradicción, motivación y notificación, como límites al ejercicio del poder. La calificación de cada acto (preparatorio, provisional, definitivo) ordena el sistema de recursos y la ejecución. La doctrina también subraya que formas y plazos son garantías sustantivas, no meras solemnidades, porque preservan la igualdad y la previsibilidad en la relación administración–administrado.",
            },

            {
              type: "accordion",
              header: "Tesis doctrinales en contraste",
              open: false,
              items: [
                {
                  header: "Acto complejo",
                  text: "La decisión final absorbe las fases previas; control centrado en la resolución y su motivación integral.",
                },
                {
                  header: "Acto–procedimiento",
                  text: "Cadena de actos autónomos con unidad teleológica; cada acto es controlable y condiciona la validez de la decisión final.",
                },
                {
                  header: "Enfoque predominante",
                  text: "Carácter procesal de la vía administrativa; actos y actuaciones con reglas y efectos propios que convergen a un fin común.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "La elección teórica impacta cuestiones prácticas: ¿cuándo corre el plazo de impugnación? ¿qué vicios pueden sanearse? ¿qué actos son inmediatamente recurribles? En el esquema acto–procedimiento, vicios en actos intermedios (p. ej., denegación de prueba) pueden arrastrar la nulidad de la resolución si afectaron el derecho de defensa. A la inversa, defectos no esenciales podrían convalidarse si no generan indefensión. Esta distinción nutre criterios sobre nulidad lisa y llana o para efectos, así como sobre la procedencia de suspensión y de medidas cautelares.",
            },

            {
              type: "accordion",
              header: "Implicaciones prácticas",
              open: false,
              items: [
                {
                  header: "Control distribuido",
                  text: "Cada acto puede ser objeto de control (interno y jurisdiccional) según su naturaleza; fortalece la tutela y la calidad decisoria.",
                },
                {
                  header: "Diseño de expedientes",
                  text: "Trazabilidad documental (acuses, actas, informes) para sostener la validez de cada fase; evita nulidades por forma.",
                },
                {
                  header: "Estrategia de defensa",
                  text: "Mapear vicios formales vs. sustantivos; enfocar agravios en actos que condicionaron el fondo para maximizar efectos.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "En conclusión, el sustrato doctrinal del procedimiento administrativo refuerza su doble naturaleza: instrumento de eficacia pública y sistema de garantías. El operador jurídico debe dominar ambas dimensiones para conducir expedientes regulares y para impugnar con precisión, integrando teoría, ley y prueba.",
            },
          ],
        },

        /* 4.5 El procedimiento administrativo previsto en la ley federal */
        {
          id: "4.5",
          numbering: "4.5",
          title: "Procedimiento administrativo en la ley federal",
          content: [
            {
              type: "paragraph",
              text: "La Ley Federal de Procedimiento Administrativo (LFPA) articula reglas específicas: medidas provisionales para asegurar eficacia de la resolución cuando existan elementos suficientes; acumulación de procedimientos por conexidad —sin recurso contra el acuerdo de acumulación—; orden riguroso de despacho en asuntos de la misma naturaleza, alterable sólo por causa motivada; y tramitación de incidentes sin suspender el curso principal, incluida la recusación, que debe resolverse antes o en la misma resolución definitiva. Estas previsiones concretan garantías y a la vez dan eficiencia operativa a la Administración.",
            },
            {
              type: "paragraph",
              text: "En la práctica, iniciar el procedimiento habilita a la autoridad para dictar medidas transitorias proporcionadas al fin público perseguido; sujeta a control de motivación y a revisión posterior a la luz de la decisión final. La acumulación evita resoluciones contradictorias y optimiza recursos; exige identidad sustancial de objeto o de sujetos. El respeto del orden de despacho protege la igualdad, impide favoritismos y reduce litigiosidad. La gestión de incidentes por cuerda separada pero sin suspensión del fondo asegura continuidad y evita dilaciones indebidas.",
            },

            {
              type: "accordion",
              header: "Artículos clave (LFPA, guía rápida)",
              open: false,
              items: [
                {
                  header: "Medidas provisionales",
                  text: "Adoptables con elementos suficientes para asegurar eficacia de la resolución; naturaleza transitoria y control posterior.",
                },
                {
                  header: "Acumulación",
                  text: "Procede de oficio o a petición; contra el acuerdo no procede recurso; evita decisiones contradictorias.",
                },
                {
                  header: "Orden e incidentes",
                  text: "Orden riguroso de tramitación; alteración sólo por causa motivada. Incidentes no suspenden el trámite; la recusación se resuelve antes o en la definitiva.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Operativamente, la oficina debe documentar todo: acuerdo de inicio, medidas adoptadas, motivaciones, notificaciones con fecha cierta, y, en su caso, la razón de alteración del orden de despacho. Cada actuación alimenta la trazabilidad del expediente y soporta la legalidad de la resolución final. Para el particular, estas constancias son insumo probatorio en recursos y juicio, especialmente cuando se alegan violaciones al orden de tramitación, falta de motivación o notificación defectuosa.",
            },

            {
              type: "accordion",
              header: "Flujograma operativo",
              open: false,
              items: [
                {
                  header: "Inicio y medidas",
                  text: "Apertura del procedimiento → valoración de medidas provisionales → adopción motivada si procede.",
                },
                {
                  header: "Tramitación",
                  text: "Acumulación por conexidad → impulso de oficio → incidentes por cuerda separada → mantenimiento del orden de despacho.",
                },
                {
                  header: "Decisión y cierre",
                  text: "Resolución definitiva → notificación → apertura de fase impugnativa → (en su caso) ejecución.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Finalmente, la lectura sistemática de la LFPA con el CFF y las leyes sectoriales (IMSS, INFONAVIT) permite coherencia regulatoria: el procedimiento común convive con especialidades materiales. Esta coordinación evita vacíos y conduce a expedientes regulares, decisiones motivadas y defensas oportunas, alineadas con el estándar de tutela administrativa efectiva.",
            },
          ],
        },
      ],
    },

    /* UNIDAD 5 */
    {
      id: "5",
      numbering: "Unidad 5",
      title: "Procedimiento Administrativo de Ejecución (PAE)",
      content: [
        {
          type: "paragraph",
          text: "El Procedimiento Administrativo de Ejecución (PAE) es la vía coactiva mediante la cual la autoridad hacendaria hace efectivo el cobro de créditos fiscales firmes que no fueron pagados ni garantizados en los plazos legales. Tiene fundamento en el deber constitucional de contribuir y en el Código Fiscal de la Federación, y se apoya en reglas de la Ley Federal de Procedimiento Administrativo respecto de competencia, motivación, notificación y orden de tramitación. En su diseño, el PAE equilibra eficacia recaudatoria y tutela de derechos: cada actuación debe documentarse con exactitud (mandamiento de ejecución, requerimiento, actas, avalúos, constancias de notificación), pues los vicios formales o sustantivos pueden acarrear nulidad. La finalidad inmediata es hacer exigible el crédito y sus accesorios; la mediata, preservar la igualdad frente al cumplimiento tributario y evitar ventajas indebidas derivadas del incumplimiento. Operativamente, el PAE se activa sólo ante créditos determinados y exigibles, y progresa por fases escalonadas que incrementan su intensidad en función de la inacción del deudor.",
        },
        {
          type: "paragraph",
          text: "La primera fase es el requerimiento de pago, acto con el que la autoridad ejecutora conmina formalmente al contribuyente a cubrir el crédito o a garantizarlo en términos legales. Este requerimiento se practica con base en un mandamiento de ejecución que debe señalar autoridad emisora competente, fundamento y motivación específicos, crédito a cargo, monto actualizado y accesorios, así como prevenciones sobre forma, lugar y plazo para el pago o la garantía. La notificación válida del requerimiento fija el punto de partida para el cómputo de términos y condiciona la regularidad de actuaciones subsecuentes. En esta etapa, el contribuyente puede optar por pagar, garantizar para efectos de suspensión, o hacer valer medios de defensa conforme a las reglas de procedencia. La falta de pago o garantía abre la puerta a medidas de apremio y de aseguramiento patrimonial, siempre sujetas a proporcionalidad y a un orden legal de afectación de bienes, que busca minimizar la afectación innecesaria del giro del contribuyente.",
        },
        {
          type: "paragraph",
          text: "Si persiste el incumplimiento, procede el embargo de bienes en vía administrativa, que puede ser precautorio en hipótesis tasadas (desocupación de domicilio sin aviso, oposición a notificación de la determinación, inexistencia o insuficiencia de garantía) o definitivo para asegurar el crédito. La diligencia debe constar en acta circunstanciada con identificación de intervinientes, descripción y valuación preliminar de bienes, y advertencias legales. El orden de embargo sigue una prelación normativa: inmuebles; valores y créditos de fácil cobro; derechos de autor y de propiedad industrial; obras artísticas y objetos; dinero y metales preciosos; depósitos bancarios y ciertos componentes de ahorro; demás muebles; y, en su caso, la negociación. La autoridad puede inmovilizar cuentas a través de la CNBV u otras comisiones supervisoras, y debe notificar la conducta que originó la medida y su monto dentro de plazos breves. Salvo excepciones, los bienes pueden dejarse en poder del contribuyente bajo su responsabilidad como depositario, con obligaciones correlativas de conservación y exhibición.",
        },
        {
          type: "paragraph",
          text: "Cuando el embargo recae sobre una negociación en marcha, la autoridad puede designar interventor con cargo a la caja o administrador. El interventor separa prioritariamente salarios y créditos preferentes, y debe enterar hasta un porcentaje de los ingresos a la oficina ejecutora con la periodicidad que corresponda, preservando la continuidad operativa bajo criterios de razonabilidad. Esta figura evita la parálisis de empresas y al mismo tiempo garantiza flujo de recursos para abonar al crédito fiscal. Toda intervención requiere controles documentales estrictos (libros, estados de cuenta, reportes de caja) y una administración prudente que resguarde el valor económico de la unidad productiva. Para el contribuyente, la trazabilidad de operaciones (CFDI, estados financieros, contratos) resulta esencial para acreditar pagos, deducciones y correcciones; para la autoridad, la motivación individualizada legitima la medida y acota riesgos de nulidad por exceso, desviación de poder o desconocimiento de preferencia de créditos legalmente establecidos.",
        },
        {
          type: "paragraph",
          text: "La culminación del PAE se articula en la enajenación en remate, la adjudicación y la aplicación del producto. Procede el remate cuando el crédito es exigible y no se paga al requerimiento, se fijó base conforme a ley y no hubo comprador propuesto en término, o tras quedar firme la resolución confirmatoria del acto impugnado. Si no hay postores o no se presentan posturas legales, la autoridad puede adjudicarse el bien, usualmente al 60% del valor de avalúo, y destinarlo posteriormente a fines públicos o de beneficencia conforme a reglas aplicables. La adjudicación se formaliza en acta con efectos de escritura pública para su inscripción registral. De los ingresos por remates, se constituyen fondos específicos y se observa el orden de preferencia para pagos. Estratégicamente, el contribuyente debe evaluar la suspensión, el ofrecimiento oportuno de pruebas y la depuración de vicios desde el inicio; la autoridad, por su parte, debe cuidar legalidad y proporcionalidad de cada fase, pues el PAE no es un fin en sí mismo, sino un instrumento sujeto a control de legalidad.",
        },

        {
          type: "accordion",
          header: "Guía rápida del PAE (tres niveles)",
          open: false,
          items: [
            {
              header: "Nivel 1 — Ruta operativa",
              text: "Mandamiento → Requerimiento de pago → Embargo (acto/precautorio) → Intervención en caja/administración → Avalúo → Convocatoria → Remate → Adjudicación → Aplicación del producto.",
            },
            {
              header: "Nivel 2 — Checklist de legalidad",
              text: "Competencia; fundamentación y motivación individualizada; notificación válida; actas circunstanciadas; orden legal de embargo; proporcionalidad; preservación de créditos preferentes; constancias de buzón/acuse.",
            },
            {
              header: "Nivel 3 — Estrategia y riesgos",
              text: "Para el contribuyente: garantizar para suspensión, cuidar trazabilidad probatoria, distinguir vicios formales y sustantivos. Para la autoridad: documentar cada actuación, evitar excesos y respetar plazos y orden de tramitación.",
            },
          ],
        },
      ],
      subthemes: [
        /* Subtemas Unidad 5 — Procedimiento Administrativo de Ejecución (PAE) */
        {
          id: "5.1",
          numbering: "5.1",
          title: "Requerimiento de pago",
          content: [
            {
              type: "paragraph",
              text: "El requerimiento de pago inaugura formalmente el Procedimiento Administrativo de Ejecución frente a un crédito fiscal firme, exigible y no cubierto ni garantizado. Es un acto debido y reglado: la autoridad ejecutora debe exhibir mandamiento de ejecución con competencia, fundamento y motivación individualizada, identificar con precisión el crédito (monto, actualización y accesorios) y prevenir al contribuyente sobre sus alternativas legales (pago, garantía, medios de defensa). Su notificación válida fija los términos subsecuentes y condiciona la regularidad de todo lo que venga después: un vicio en esta pieza puede contaminar el resto de la cadena ejecutiva. La finalidad inmediata es conminar al cumplimiento; la mediata, tutelar la igualdad tributaria y evitar ventajas impropias por el incumplimiento.",
            },
            {
              type: "paragraph",
              text: "Operativamente, la diligencia se documenta en acta circunstanciada: se asientan lugar, fecha y hora; identificación de servidores públicos; datos del contribuyente o de la persona con quien se entienda; descripción del crédito y prevenciones. Desde este momento el contribuyente puede cubrir el adeudo, ofrecer garantía suficiente para suspender la ejecución o anunciar los medios de defensa procedentes. La trazabilidad documental (acta, constancias de notificación y acuses de buzón) es crítica para ambos lados: para la autoridad, legitima la coacción; para el particular, preserva material probatorio para eventual nulidad.",
            },
            {
              type: "image",
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1YsmBr_mAxnWFA9seS9Kja30WsXOv9I-kw&s",
              alt: "Esquema del acto de requerimiento de pago y sus efectos",
            },
            {
              type: "paragraph",
              text: "El requerimiento no es aislado: se inserta en una secuencia legal que gradúa la intensidad coactiva. Si el contribuyente no paga ni garantiza, la autoridad puede dictar medidas de apremio y, conforme a supuestos tasados, trabar embargo precautorio o definitivo. La proporcionalidad y el orden legal de afectación guían estas decisiones; su inobservancia expone a nulidad. En paralelo, para contribuyentes con actividad económica, resulta prudente activar estrategias de continuidad operativa y custodia de evidencias (CFDI, estados de cuenta, contratos), anticipando escenarios de intervención en caja o administración de la negociación.",
            },
            {
              type: "accordion",
              header: "Guía de verificación del requerimiento",
              open: false,
              items: [
                {
                  header: "Competencia y motivación",
                  text: "Autoridad ejecutora competente; cita expresa de fundamentos; motivación individualizada del crédito y de la diligencia.",
                },
                {
                  header: "Contenido mínimo del acta",
                  text: "Identificación de intervinientes; datos del crédito; prevenciones; firma y constancias de notificación (personal o buzón).",
                },
                {
                  header: "Efectos jurídicos",
                  text: "Inicio formal del PAE; apertura de plazos; procedencia de pago/garantía/defensa; eventual paso a embargo.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "La tutela administrativa, correctamente entendida, opera como garantía para el particular: exige que toda coacción fiscal se ajuste a formas y tiempos predeterminados y que cada afectación patrimonial sea necesaria, idónea y proporcional. En esa lógica, el requerimiento de pago es menos un “acto de sorpresa” y más un aviso formal que activa derechos (de audiencia, de ofrecer garantía, de impugnar) y deberes correlativos. La buena práctica recomienda revisar inmediatamente el estado del crédito, la suficiencia patrimonial para garantizar, y la factibilidad de regularización espontánea para evitar costos adicionales.",
            },
            {
              type: "accordion",
              header: "Errores frecuentes y cómo evitarlos",
              open: false,
              items: [
                {
                  header: "Notificación defectuosa",
                  text: "Subsanar de inmediato; reponer la notificación antes de continuar actos posteriores.",
                },
                {
                  header: "Mandamiento incompleto",
                  text: "Verificar datos del crédito y fundamentación; emitir uno nuevo si faltan elementos esenciales.",
                },
                {
                  header: "Falta de constancias",
                  text: "Digitalizar y custodiar: actas, acuses, sellos de tiempo y evidencias fotográficas de la diligencia.",
                },
              ],
            },
          ],
        },

        {
          id: "5.2",
          numbering: "5.2",
          title: "Embargo de bienes en la vía administrativa",
          content: [
            {
              type: "paragraph",
              text: "El embargo asegura el crédito cuando el contribuyente no paga ni garantiza, o como embargo precautorio en hipótesis expresas (desocupación del domicilio sin aviso, oposición a notificación, falta o insuficiencia de garantía). La diligencia debe quedar soportada en acta circunstanciada que precise razones, bienes y monto asegurado. La norma establece un orden legal de afectación: inmuebles; valores y créditos de fácil cobro; derechos de propiedad intelectual; obras y objetos; dinero y metales preciosos; depósitos y componentes de ahorro/inversión; demás muebles; y, finalmente, la negociación. Esta prelación busca minimizar el daño innecesario a la actividad del contribuyente y preservar valor para el cobro.",
            },
            {
              type: "paragraph",
              text: "En embargo precautorio, la autoridad traba por hasta dos terceras partes de la contribución determinada incluyendo accesorios, notificando dentro de los tres días la conducta que originó la medida y su monto. Puede ordenar a CNBV, CNSF o CONSAR, o directamente a la entidad financiera, la inmovilización de recursos depositados, debiendo ejecutarse dentro de tres días. Salvo depósitos y ciertos instrumentos, los bienes pueden quedar bajo custodia del propio contribuyente como depositario, con deberes de conservación y exhibición. El incumplimiento del depositario puede acarrear responsabilidades.",
            },
            {
              type: "image",
              src: "https://imagenes.eleconomista.com.mx/files/image_768_768/uploads/2024/11/07/672c6a4d5ef56.jpeg",
              alt: "Flujo del embargo: acta, orden de prelación y custodia",
            },
            {
              type: "paragraph",
              text: "El acta de embargo debe describir con detalle los bienes y su valuación preliminar, y, tratándose de inmuebles, recabar manifestación bajo protesta sobre gravámenes, embargos previos o regímenes patrimoniales. La precisión técnica favorece la posterior enajenación en remate y reduce litigiosidad. En bienes intangibles (créditos, derechos), conviene identificar deudor, título y exigibilidad; en cuentas, señalar institución, número y moneda. La autoridad debe ceñirse a proporcionalidad: asegurar lo necesario, no más.",
            },
            {
              type: "accordion",
              header: "Checklist operativo del embargo",
              open: false,
              items: [
                {
                  header: "Antes de la diligencia",
                  text: "Mandamiento válido; verificación de exigibilidad; preparación de formatos de acta y medidas de identificación.",
                },
                {
                  header: "Durante la diligencia",
                  text: "Identificación de intervinientes; inventario detallado; fotos; valuación preliminar; designación de depositario.",
                },
                {
                  header: "Después de la diligencia",
                  text: "Notificaciones complementarias; oficios a autoridades financieras; custodia de evidencias.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "Para el contribuyente, la estrategia defensiva pasa por: ofrecer garantía idónea, cuestionar la proporcionalidad, acreditar afectación a créditos preferentes o a bienes exceptuados, y documentar exhaustivamente vicios formales. Para la autoridad, el respeto a la prelación, la motivación del quantum y la oportunidad de las notificaciones son barreras frente a nulidades. La coordinación con áreas de valuación y con las plataformas de buzón tributario mejora trazabilidad y reduce riesgos.",
            },
            {
              type: "accordion",
              header: "Riesgos y mitigaciones",
              open: false,
              items: [
                {
                  header: "Embargo excesivo",
                  text: "Recalcular monto asegurado; levantar embargo sobrante; dejar constancia de corrección.",
                },
                {
                  header: "Bienes litigiosos o gravados",
                  text: "Asentar cargas y avisos; valorar viabilidad de afectación o sustitución.",
                },
                {
                  header: "Intangibles y cuentas",
                  text: "Oficio de inmovilización claro; seguimiento de plazos de ejecución por la entidad financiera.",
                },
              ],
            },
          ],
        },

        {
          id: "5.3",
          numbering: "5.3",
          title: "Intervención en caja",
          content: [
            {
              type: "paragraph",
              text: "Cuando el embargo recae en una negociación en marcha, la autoridad puede designar depositario con carácter de interventor con cargo a la caja o administrador. El interventor, tras separar salarios y créditos preferentes, debe enterar hasta el 10% de los ingresos percibidos (efectivo, transferencias, depósitos) a la oficina ejecutora, con la periodicidad que disponga el reglamento. La figura busca equilibrar recaudo y continuidad operativa, evitando la parálisis del negocio y la destrucción de valor.",
            },
            {
              type: "paragraph",
              text: "La intervención exige controles robustos: cortes diarios de caja, reportes de flujo, conciliaciones bancarias, segregación de funciones y acuses de entrega. El contribuyente debe facilitar libros, comprobantes y estados, y el interventor debe limitarse a su encargo: no sustituye al empresario, salvo que la medida escale a administración. Cualquier exceso o desvío puede generar nulidades o responsabilidades; por ello, es prudente fijar un plan de operación mínima y rutas de pago a proveedores críticos.",
            },
            {
              type: "image",
              src: "https://legamy.com/storage/imagenes/upload-publicaciones/foto17.webp",
              alt: "Diagrama de ingresos intervenidos y flujo al fisco",
            },
            {
              type: "paragraph",
              text: "Desde una perspectiva de cumplimiento, la intervención puede convivir con regularizaciones y con esquemas de garantía que permitan sustituir la medida. Una comunicación transparente con la autoridad y la entrega oportuna de reportes reduce tensiones. En negocios intensivos en efectivo, la instalación de controles tecnológicos (terminales, conciliaciones automatizadas) disminuye riesgos de omisiones y favorece la trazabilidad que exige el PAE.",
            },
            {
              type: "accordion",
              header: "Roles y límites del interventor",
              open: false,
              items: [
                {
                  header: "Prioridades de pago",
                  text: "Salarios y créditos preferentes; costos indispensables; entero del % ordenado a la autoridad ejecutora.",
                },
                {
                  header: "Obligaciones de información",
                  text: "Reportes de caja; conciliaciones; respaldo documental; disponibilidad para verificación.",
                },
                {
                  header: "Transparencia y custodia",
                  text: "Separación de fondos; prohibición de mezclas; resguardo de evidencias.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "Para el contribuyente, el objetivo es demostrar viabilidad, preservar empleo y evidenciar que la intervención no requiere escalar. Para la autoridad, la meta es asegurar flujos razonables sin destruir la fuente de pago. La medición objetiva (KPIs de ventas, márgenes, flujo) permite ajustar la retención sin asfixiar operaciones.",
            },
            {
              type: "accordion",
              header: "Buenas prácticas de continuidad",
              open: false,
              items: [
                {
                  header: "Plan de caja semanal",
                  text: "Proyecciones conservadoras de ingresos y egresos; priorización normativa.",
                },
                {
                  header: "Controles tecnológicos",
                  text: "CFDI al día; conciliaciones automáticas; resguardos digitales con sellos de tiempo.",
                },
                {
                  header: "Comunicación",
                  text: "Bitácoras de reuniones; acuerdos por escrito; evidencia de cumplimiento progresivo.",
                },
              ],
            },
          ],
        },

        {
          id: "5.4",
          numbering: "5.4",
          title: "Remate",
          content: [
            {
              type: "paragraph",
              text: "La enajenación de bienes embargados procede, entre otros supuestos, a partir del día siguiente a la fijación de bases; también cuando, siendo exigible el crédito, no se paga al requerimiento, cuando el embargado no propone comprador en el plazo legal o al quedar firme la resolución confirmatoria del acto impugnado. El remate materializa el cobro: convierte bienes en numerario para aplicarlo al crédito y accesorios.",
            },
            {
              type: "paragraph",
              text: "El éxito del remate depende de bases claras (avalúo vigente, postura legal, cargas), difusión suficiente y expedientes impecables. Vicios en embargo, avalúo o notificaciones pueden frustrar la venta o generar litigios. Por ello, es esencial documentar convocatorias, posturas y actas de celebración, así como el destino del producto. La postura legal mínima y las reglas de mejora buscan precio justo sin prolongar indefinidamente el proceso.",
            },
            {
              type: "image",
              src: "https://www.snice.gob.mx/~oracle/SNICE_DOCS/lineatiempo0122020v3-linea-tiempo-012-2020-v3_20200610-20200610.png",
              alt: "Línea de tiempo del remate: bases, convocatoria, subasta, adjudicación",
            },
            {
              type: "paragraph",
              text: "Para bienes especializados (intangibles, derechos), la autoridad debe asegurar valor con peritos idóneos y, si es viable, explorar mecanismos de venta más eficientes. En inmuebles, cuidar la inscripción de medidas cautelares y la publicidad registral. El contribuyente, por su parte, puede proponer comprador dentro de término legal para agilizar enajenación y mejorar precio, sin menoscabo de la legalidad.",
            },
            {
              type: "accordion",
              header: "Elementos clave del expediente de remate",
              open: false,
              items: [
                {
                  header: "Avalúo y cargas",
                  text: "Fecha y vigencia; identificación de gravámenes; cálculo de postura legal.",
                },
                {
                  header: "Convocatoria y publicidad",
                  text: "Medios utilizados; plazos; constancias de publicación.",
                },
                {
                  header: "Actas y posturas",
                  text: "Registro de participantes; verificación de posturas; acta de cierre.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "Una estrategia pragmática evita costos innecesarios: si el remate se vislumbra inviable, valorar alternativas como pagos parciales, dación en pago o propuestas de comprador oportuno. En todos los escenarios, la trazabilidad protege a las partes y legitima el resultado.",
            },
            {
              type: "accordion",
              header: "Riesgos típicos del remate",
              open: false,
              items: [
                {
                  header: "Avalúo desactualizado",
                  text: "Actualizar con perito; documentar metodología y supuestos.",
                },
                {
                  header: "Difusión insuficiente",
                  text: "Reforzar publicidad; ampliar canales; aplazar con causa justificada.",
                },
                {
                  header: "Impugnaciones",
                  text: "Custodia total del expediente; respuestas fundadas y motivadas.",
                },
              ],
            },
          ],
        },

        {
          id: "5.5",
          numbering: "5.5",
          title: "Aplicación y adjudicación",
          content: [
            {
              type: "paragraph",
              text: "Si no hubiere postores o no se presentan posturas legales, la autoridad puede adjudicarse el bien, usualmente al 60% del valor de avalúo. El acta de adjudicación, firmada por la autoridad ejecutora, surte efectos de escritura pública para su inscripción registral. Los bienes adjudicados pueden destinarse a obras o servicios públicos o donarse a instituciones de asistencia o beneficencia autorizadas, conforme a reglas hacendarias; mientras no se destinen, no forman parte del dominio público.",
            },
            {
              type: "paragraph",
              text: "El producto de remates se aplica siguiendo preferencia legal: se constituyen fondos específicos y se cubren gastos de administración y mantenimiento; existen porcentajes que deben enterarse a fondos de capitalización. Este esquema busca transparencia y orden en el manejo de recursos provenientes de la enajenación, a la par que asegura la trazabilidad contable-fiscal.",
            },
            {
              type: "image",
              src: "https://www.ionautofinanciamiento.com/hs-fs/hubfs/Blog_ION_Auto/Adjudicacion_Que_es_adjudicar_un_inmueble/que-es-adjudicar-un-inmueble.png?width=900&height=500&name=que-es-adjudicar-un-inmueble.png",
              alt: "Esquema de aplicación del producto y adjudicación",
            },
            {
              type: "paragraph",
              text: "Para el contribuyente, la etapa de aplicación es oportunidad para cotejar montos, verificar imputaciones a principal, actualización y recargos, y exigir entrega de saldos o cancelación de medidas si el crédito queda cubierto. Para la autoridad, la precisión contable y la comunicación clara del estado del crédito son indispensables para cerrar el ciclo de ejecución sin controversias posteriores.",
            },
            {
              type: "accordion",
              header: "Documentos esenciales en la adjudicación",
              open: false,
              items: [
                {
                  header: "Acta de adjudicación",
                  text: "Firmas, identificación del bien, valor de adjudicación, fundamentos.",
                },
                {
                  header: "Inscripción registral",
                  text: "Testimonio con efectos de escritura; cancelación de gravámenes cuando proceda.",
                },
                {
                  header: "Aplicación del producto",
                  text: "Estado de crédito; gastos; remanentes; fondos de administración y capitalización.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "La calidad de cierre del PAE se mide por legalidad y claridad: que la adjudicación se haya realizado conforme a derecho, que el producto se haya aplicado correctamente y que se levanten oportunamente las medidas cautelares. La documentación íntegra del expediente —desde el requerimiento hasta la adjudicación— es la mejor defensa ante cualquier revisión o medio de impugnación.",
            },
            {
              type: "accordion",
              header: "Buenas prácticas de cierre",
              open: false,
              items: [
                {
                  header: "Conciliación final",
                  text: "Cruzar saldos con recibos y constancias; emitir estado de cuenta final.",
                },
                {
                  header: "Levantamiento de medidas",
                  text: "Oficios de cancelación de inmovilizaciones y anotaciones preventivas.",
                },
                {
                  header: "Transparencia",
                  text: "Notificar al contribuyente el detalle de aplicación; conservar expediente digital.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* UNIDAD 6 */
    {
      id: "6",
      numbering: "Unidad 6",
      title: "Aportaciones de seguridad social",
      content: [
        {
          type: "paragraph",
          text: "Las aportaciones de seguridad social integran, junto con impuestos, derechos y contribuciones de mejoras, la clasificación de las contribuciones en el sistema tributario mexicano. Su rasgo distintivo es finalista: financian prestaciones y servicios de seguridad social (salud, riesgos de trabajo, invalidez y vida, guarderías, retiro, entre otros) que el Estado organiza y garantiza. Desde la dogmática fiscal, conservan naturaleza tributaria (nacen por ley, se exigen coactivamente y están sujetas a legalidad estricta), pero sus elementos se configuran atendiendo a la protección de las personas trabajadoras y a la sostenibilidad del sistema. Para el estudio y la práctica, conviene separar dos planos: el sustantivo (hecho generador, sujetos, base y determinación de cuotas obrero-patronales) y el procedimental (verificación, determinación de diferencias, recursos y, en su caso, ejecución). Esta unidad ofrece un mapa que articula ambos planos y enfatiza principios de competencia, fundamentación y motivación de los actos administrativos, así como la centralidad de la notificación válida como punto de partida de términos. El objetivo pedagógico es que el estudiante pueda identificar con precisión cuándo nace la obligación, cómo se calcula y bajo qué cauces se exige, sin perder de vista la teleología solidaria del régimen.",
        },
        {
          type: "paragraph",
          text: "El nacimiento de la obligación se vincula a la existencia de una relación laboral y a la integración del salario base de cotización (SBC), que incorpora percepciones fijas y variables conforme a la ley. A partir de ahí, se determinan cuotas y aportaciones, se actualizan y devengan recargos cuando hay extemporaneidad. La estructura de la obligación identifica: sujeto activo (institución de seguridad social), sujeto pasivo (principalmente el patrón; en ciertos supuestos, la persona trabajadora), base (SBC), tasa o tarifa (por rama y seguro) y época de pago (periodicidades regladas). En contexto contemporáneo, la determinación se apoya en infraestructura digital (timbrado de CFDI de nómina, SUA/IDSE u otras plataformas) que incrementa trazabilidad y reduce errores. El cumplimiento material (entero oportuno) debe acompañarse de cumplimiento formal (altas, bajas y modificaciones salariales dentro de plazo, conservación de evidencias y reportes). Una adecuada gobernanza documental —papeles de trabajo, pólizas contables, CFDI y estados de cuenta— no solo previene diferencias, sino que facilita regularizaciones tempranas y robustece la posición probatoria ante eventuales revisiones o controversias.",
        },
        {
          type: "paragraph",
          text: "La verificación de obligaciones se desarrolla a través de actos administrativos escalonados que pueden culminar en resoluciones definitivas con efectos directos para el obligado. La secuencia típica comprende requerimientos de información, visitas o revisiones de gabinete, actas y, en su caso, liquidaciones por diferencias. Cada acto debe emanar de autoridad competente, estar fundado y motivado de manera individualizada y notificarse válidamente; la inobservancia de estas exigencias compromete su eficacia y habilita su impugnación. En materia de créditos por cuotas, la prescripción opera —en términos generales— a cinco años desde que el pago pudo exigirse, con causas de interrupción y suspensión que el operador jurídico debe saber identificar. La claridad en la calificación de actos (provisionales vs. definitivos) es determinante para elegir la vía de defensa y para el cómputo de términos. Didácticamente, construir una línea de tiempo del procedimiento ayuda a detectar plazos fatales, identificar ventanas de corrección y priorizar la elaboración de pruebas idóneas (contables, contractuales y fiscales) para desvirtuar observaciones.",
        },
        {
          type: "paragraph",
          text: "En el plano operativo, las obligaciones patronales clave son: registrar e inscribir a las personas trabajadoras, presentar altas/bajas y modificaciones al SBC en plazos breves, calcular y enterar cuotas con base en nóminas correctas y mantener actualizado el expediente electrónico. La realidad empresarial exige armonizar la normativa con la gestión del talento (prestaciones fijas y variables, bonos, horas extras, vales, comisiones), evitando integraciones salariales defectuosas. Las herramientas tecnológicas —plataformas de pago referenciado, timbrado y conciliaciones automáticas— deben alinearse con políticas internas de control (doble revisión, conciliación bancaria, segregación de funciones). La cultura de archivo probatorio, con sellos de tiempo y resguardos digitales, es un escudo preventivo frente a revisiones. Especial atención requieren supuestos de tercerización, trabajos eventuales o esquemas mixtos, que demandan criterios finos para definir la base de cotización y los sujetos obligados. Finalmente, la comunicación interna entre recursos humanos, finanzas y legal es condición para cumplir de manera consistente y trazable.",
        },
        {
          type: "paragraph",
          text: "Cuando la verificación deviene en acto definitivo, se abre la ruta impugnativa. En el ámbito de seguridad social, existe un medio administrativo especializado (recurso de inconformidad) que opera como control intraorgánico y cuyo agotamiento ordenado fortalece el expediente para un eventual juicio contencioso ante el Tribunal Federal de Justicia Administrativa, cuando proceda. La estrategia de defensa debe priorizar agravios con alta probabilidad de éxito: vicios formales (incompetencia, indebida fundamentación/motivación, notificación defectuosa, violación a formas esenciales) y vicios sustantivos (errores en integración salarial, inexistencia del hecho imponible, indebida apreciación de pruebas). En paralelo, es prudente valorar la regularización voluntaria, planes de pago o garantías para suspender ejecución y evitar medidas coactivas. Desde la gestión del riesgo, auditorías internas periódicas del SBC, conciliaciones de nómina y revisión contractual disminuyen la exposición. El resultado esperado de esta unidad es que el estudiante pueda transitar del concepto a la acción, con criterios claros para decidir entre pagar, garantizar, impugnar o corregir.",
        },

        {
          type: "accordion",
          header: "Guía rápida — mapa mental de la Unidad 6",
          open: false,
          items: [
            {
              header: "Capa 1 — Conceptos nucleares",
              text: "Contribuciones: impuestos, aportaciones de seguridad social, contribuciones de mejoras y derechos. Naturaleza tributaria con fin social: financian prestaciones específicas. Elementos: sujeto activo/pasivo, hecho generador, base (SBC), tasa, época de pago.",
            },
            {
              header: "Capa 2 — Ruta de verificación",
              text: "Requerimientos → revisión (gabinete/visita) → actas/observaciones → resolución (diferencias) → notificación válida → exigibilidad → posible ejecución. Siempre: competencia, fundamentación, motivación y conservación de evidencia.",
            },
            {
              header: "Capa 3 — Defensa y cumplimiento",
              text: "Recurso de inconformidad (medio administrativo especializado) y eventual juicio contencioso. Estrategia probatoria desde el primer oficio; auditorías internas del SBC; conciliaciones de nómina; decisión informada entre pago, garantía e impugnación.",
            },
          ],
        },
      ],

      subthemes: [
        /* 6.1 Procedimiento administrativo en la ley de la materia */
        {
          id: "6.1",
          numbering: "6.1",
          title: "Procedimiento administrativo en la ley de la materia",
          content: [
            {
              type: "paragraph",
              text: "El procedimiento administrativo aplicable a las aportaciones de seguridad social replica la lógica general de ejecución fiscal: inicia con un mandamiento de ejecución y se desenvuelve mediante requerimiento de pago, embargo, avalúo, convocatoria, remate, adjudicación y aplicación del producto. Esta secuencia preserva la eficacia recaudatoria sin desatender las garantías del contribuyente (competencia, fundamentación, motivación y notificación). En este marco, la prescripción del crédito opera como válvula de seguridad: extingue en cinco años los créditos exigibles que no fueron cobrados, oponiéndose en sede administrativa o contenciosa. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "El diseño procedimental descansa en dos ideas rectoras: (i) la preferencia del fisco federal sobre otros acreedores —con excepciones como prenda, hipoteca, alimentos y salarios— y (ii) la tramitación ordenada de los incidentes, que no suspende el fondo salvo casos expresos. Con ello se evita que la dilación procesal comprometa la ejecución, sin menoscabar la tutela administrativa efectiva. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "accordion",
              header: "Checklist operativo del procedimiento",
              open: false,
              items: [
                {
                  header: "Inicio y exigibilidad",
                  text: "Mandamiento de ejecución con competencia y motivación; verificación de exigibilidad y cuantía del crédito.",
                },
                {
                  header: "Medidas y actos",
                  text: "Requerimiento, embargo (con depósito), avalúo y convocatoria; documentación íntegra en el expediente.",
                },
                {
                  header: "Cierre y control",
                  text: "Remate o adjudicación; aplicación del producto; cómputo de prescripción y control de incidencias. :contentReference[oaicite:2]{index=2}",
                },
              ],
            },
            {
              type: "paragraph",
              text: "En seguridad social, el procedimiento se aplica de forma supletoria y coordinada con la ley especial. La autoridad debe ponderar afectaciones a derechos laborales y a la continuidad de la empresa, implementando embargos idóneos y proporcionales para evitar daños irreparables. Esta ponderación incorpora el principio de conservación de la actividad productiva cuando sea compatible con el interés fiscal. :contentReference[oaicite:3]{index=3}",
            },
            {
              type: "image",
              src: "https://facturama.mx/blog/wp-content/uploads/2022/06/lfpa-ley-federal-procedimiento-administrativo-que-es.webp",
              alt: "Esquema de clasificación de contribuciones: impuestos, aportaciones de seguridad social, contribuciones de mejoras y derechos.",
              caption:
                "Clasificación legal de las contribuciones utilizada como base para ubicar las aportaciones de seguridad social. :contentReference[oaicite:4]{index=4}",
            },
            {
              type: "paragraph",
              text: "La gestión de plazos es crítica: los actos deben notificarse en forma y tiempo, y los incidentes resolverse sin paralizar el curso hacia la resolución definitiva. La sujeción a reglas preestablecidas (orden riguroso de tramitación, acumulación y medidas provisionales) reduce espacios de arbitrariedad y fortalece la seguridad jurídica del administrado. :contentReference[oaicite:5]{index=5}",
            },
            {
              type: "accordion",
              header: "Garantías y límites",
              open: false,
              items: [
                {
                  header: "Garantías del contribuyente",
                  text: "Audiencia, defensa y control de legalidad/constitucionalidad en vía administrativa y contenciosa.",
                },
                {
                  header: "Límites a la autoridad",
                  text: "Proporcionalidad de las medidas; motivación reforzada en embargos y adjudicaciones. :contentReference[oaicite:6]{index=6}",
                },
                {
                  header: "Prescripción y caducidad",
                  text: "Cómputo del quinquenio; efectos suspensivos y declaratoria de oficio o a petición. :contentReference[oaicite:7]{index=7}",
                },
              ],
            },
          ],
        },

        /* 6.2 Comprobación del pago de cuotas y carácter fiscal */
        {
          id: "6.2",
          numbering: "6.2",
          title: "Comprobación del pago de cuotas y carácter fiscal",
          content: [
            {
              type: "paragraph",
              text: "La comprobación del pago de cuotas obrero-patronales al IMSS se realiza principalmente mediante SIPARE y consultas en el portal institucional, acompañadas de CFDI de nómina y cédulas de determinación. Esta verificación acredita el cumplimiento de una obligación de naturaleza fiscal —en tanto contribución—, cuya omisión actualiza las facultades de comprobación y, en su caso, la vía ejecutiva. :contentReference[oaicite:8]{index=8}",
            },
            {
              type: "paragraph",
              text: "El carácter fiscal deriva de la clasificación legal de las contribuciones: impuestos, aportaciones de seguridad social, contribuciones de mejoras y derechos. Las aportaciones a cargo de empleadores o beneficiarios de servicios de seguridad social se insertan en esta tipología, con consecuencias en materia de determinación, actualización y recargos, así como en los medios de defensa. :contentReference[oaicite:9]{index=9}",
            },
            {
              type: "accordion",
              header: "Fuentes de evidencia en la verificación",
              open: false,
              items: [
                {
                  header: "Documental",
                  text: "SIPARE, cédulas, opiniones de cumplimiento, CFDI de nómina, acuses de entero.",
                },
                {
                  header: "Sistemática",
                  text: "Cruces con SUA/IDSE, movimientos afiliatorios y variables salariales.",
                },
                {
                  header: "Legal",
                  text: "Fundamentación en CFF para facultades de comprobación y ejecución. :contentReference[oaicite:10]{index=10}",
                },
              ],
            },
            {
              type: "paragraph",
              text: "Paralelamente, la Ley del Seguro Social impone a los patrones el registro e inscripción de personas trabajadoras, así como la comunicación de altas, bajas y modificaciones salariales dentro de cinco días hábiles; el incumplimiento genera responsabilidad y puede detonar rectificaciones, créditos y actualizaciones. :contentReference[oaicite:11]{index=11}",
            },
            {
              type: "image",
              src: "https://consolide.com/wp-content/uploads/2023/02/cuotas-patronales-en-mexico.jpg",
              alt: "Diagrama de flujo: determinación de cuotas en SUA → emisión SIPARE → pago → conciliación documental.",
              caption:
                "Flujo básico de verificación de cuotas (SUA–SIPARE–conciliación). :contentReference[oaicite:12]{index=12}",
            },
            {
              type: "paragraph",
              text: "En auditoría, la autoridad contrasta determinaciones del SUA, CFDI y variables salariales reportadas, identificando diferencias por omisiones o errores; dichos hallazgos escalan a determinaciones formales que, agotados los plazos, ingresan a ejecución. La trazabilidad documental y el archivo técnico del contribuyente son decisivos para desvirtuar observaciones. :contentReference[oaicite:13]{index=13}",
            },
            {
              type: "accordion",
              header: "Buenas prácticas del contribuyente",
              open: false,
              items: [
                {
                  header: "Control interno",
                  text: "Bitácoras de variaciones salariales y conciliación mensual SUA–CFDI–SIPARE.",
                },
                {
                  header: "Prevención",
                  text: "Atención oportuna a requerimientos y regularización espontánea para reducir recargos.",
                },
                {
                  header: "Defensa",
                  text: "Conservación de evidencia y preparación de argumentos técnico-jurídicos. :contentReference[oaicite:14]{index=14}",
                },
              ],
            },
          ],
        },

        /* 6.3 Recurso de inconformidad ante el IMSS */
        {
          id: "6.3",
          numbering: "6.3",
          title: "Recurso de inconformidad ante el IMSS",
          content: [
            {
              type: "paragraph",
              text: "El recurso de inconformidad permite a patrones, sujetos obligados, asegurados y beneficiarios controvertir actos definitivos del IMSS, conforme a su Reglamento. Los actos no impugnados en forma y término se entienden consentidos, por lo que la oportunidad procesal es crítica. :contentReference[oaicite:15]{index=15}",
            },
            {
              type: "paragraph",
              text: "La competencia se distribuye: prestaciones en especie o dinero se ventilan ante tribunales laborales; controversias entre Instituto y patrones/obligados se conocen ante el TFJA. El recurso ante IMSS opera como cauce administrativo previo que materializa la garantía de audiencia y depura el expediente. :contentReference[oaicite:16]{index=16}",
            },
            {
              type: "accordion",
              header: "Claves del recurso (IMSS)",
              open: false,
              items: [
                {
                  header: "Plazos",
                  text: "En general, quince días hábiles desde la notificación del acto definitivo (conforme al Reglamento). :contentReference[oaicite:17]{index=17}",
                },
                {
                  header: "Integración",
                  text: "Escrito, pruebas pertinentes y fijación de puntos controvertidos; supletoriedad de CFF, LFT y CFPC.",
                },
                {
                  header: "Relación con otras vías",
                  text: "La queja administrativa no sustituye la inconformidad si el acto es definitivo. :contentReference[oaicite:18]{index=18}",
                },
              ],
            },
            {
              type: "paragraph",
              text: "Además del recurso, existe la queja administrativa para insatisfacciones por actos u omisiones en la prestación de servicios médicos que no constituyan actos definitivos. Debe agotarse previamente si se pretende escalar a otros órganos o instancias; su resolución se rige por el instructivo interno correspondiente. :contentReference[oaicite:19]{index=19}",
            },

            {
              type: "paragraph",
              text: "La técnica defensiva exige al contribuyente una estrategia probatoria (documental contable y de seguridad social) y la identificación de vicios sustantivos o formales en la determinación del crédito. La claridad del agravio y la consistencia entre hechos, pruebas y normas supletorias fortalecen la viabilidad del medio de defensa. :contentReference[oaicite:21]{index=21}",
            },
            {
              type: "accordion",
              header: "Plantilla mínima del escrito",
              open: false,
              items: [
                {
                  header: "Encabezado y acto impugnado",
                  text: "Autoridad emisora, número de oficio/credencial y fecha de notificación.",
                },
                {
                  header: "Conceptos de impugnación",
                  text: "Vicios de competencia, motivación, fundamentación, cuantificación y notificación.",
                },
                {
                  header: "Ofrecimiento de pruebas",
                  text: "SUA, SIPARE, CFDI, cédulas, dictámenes y pericial contable, según corresponda.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* UNIDAD 7 */
    {
      id: "7",
      numbering: "Unidad 7",
      title: "Procedimiento del SUA y del INFONAVIT",
      content: [
        {
          type: "paragraph",
          text: "El Sistema Único de Autodeterminación (SUA) es la columna vertebral operativa para cumplir, con trazabilidad y exactitud, las obligaciones de seguridad social y vivienda a cargo del patrón. En un mismo flujo, concentra la información salarial y los movimientos afiliatorios de las personas trabajadoras, calcula las cuotas obrero-patronales del IMSS por cada ramo de aseguramiento y determina las aportaciones de vivienda al INFONAVIT, incorporando además la amortización de créditos asignados a los trabajadores. Su finalidad no es meramente informática: crea evidencia estructurada para acreditar el cumplimiento formal y material, habilita la determinación de diferencias (por errores u omisiones) y soporta pagos extemporáneos con actualización y recargos. La lógica del sistema es preventiva: cuanto mejor se alimente el catálogo de trabajadores, salarios y variaciones, menor la probabilidad de observaciones en revisiones de gabinete o visitas. Para la gestión moderna de cumplimiento, el SUA debe integrarse con el timbrado de CFDI de nómina y con los expedientes electrónicos (SIPARE u otras constancias), de modo que la autoridad y el contribuyente compartan un lenguaje de datos verificable. Esta unidad presenta criterios para operar el sistema con seguridad jurídica, anticipar riesgos y documentar, de principio a fin, la ruta de cumplimiento.",
        },
        {
          type: "paragraph",
          text: "Desde la perspectiva de procesos, el ciclo SUA parte del alta/inscripción y se alimenta continuamente con movimientos (altas, bajas y modificaciones salariales), cálculo del salario base de cotización, determinación de cuotas por ramo y emisión de archivos/pagos referenciados. El sistema genera cédulas y reportes que, junto con el CFDI de nómina y las constancias de pago, integran el expediente probatorio del patrón. Un rasgo decisivo es su capacidad para reconocer y regularizar diferencias derivadas de errores involuntarios o de revisiones de dictamen, evitando que inconsistencias de cálculo escalen a créditos firmes. El uso disciplinado del catálogo de personal (datos de trabajadores, salarios, incidencias) y su mantenimiento oportuno reduce riesgos de integración salarial defectuosa. A nivel operativo, la conciliación mensual SUA–CFDI–SIPARE es una práctica mínima: alinea la base grabable reportada con la efectivamente pagada y con lo timbrado, cerrando brechas típicas que detecta la autoridad. En caso de pagos extemporáneos, el SUA admite la captura de tasas de actualización y recargos, generando líneas de acción inmediatas para corregir el cumplimiento sin demoras innecesarias.",
        },
        {
          type: "paragraph",
          text: "El marco de obligaciones vinculado al SUA tiene umbrales claros: para patrones con cinco o más trabajadores, su uso es obligatorio; para quienes cuentan con uno a cuatro, es opcional. Más allá del umbral, la recomendación es adoptarlo por su valor probatorio y por la eficiencia en el manejo de variaciones salariales. En la práctica, la trazabilidad del SUA converge con plataformas institucionales (por ejemplo, consulta de pagos y conciliaciones) y con repositorios documentales internos. Esta convergencia habilita auditorías internas periódicas orientadas a: (i) validar que el salario base de cotización incorpora correctamente percepciones fijas y variables, (ii) asegurar que los movimientos afiliatorios se presenten dentro de plazo y (iii) cotejar que los pagos referenciados correspondan exactamente a las determinaciones del sistema. El enfoque de control interno debe promover segregación de funciones (captura–revisión–autorización), bitácoras de cambios y sellos de tiempo en documentos críticos, generando una cadena de custodia digital que soporte cualquier requerimiento. Con ello, la empresa fortalece su posición de cumplimiento y reduce la probabilidad de determinaciones por diferencias.",
        },
        {
          type: "paragraph",
          text: "El vínculo con INFONAVIT es doble: por un lado, el SUA calcula y refleja las aportaciones patronales de vivienda; por otro, incorpora la amortización de créditos otorgados a las personas trabajadoras. Este acoplamiento requiere una coordinación fina entre nómina y recursos humanos, pues variaciones salariales o incidencias (incapacidades, ausencias, bonos) impactan simultáneamente seguridad social y vivienda. En el plano institucional, el INFONAVIT cuenta con órganos y procedimientos específicos, incluida una Comisión de Inconformidades de integración tripartita, así como un recurso de inconformidad para impugnar actos que lesionen derechos de trabajadores, beneficiarios o patrones. La comprensión de esa arquitectura procedimental es clave para reaccionar ante discrepancias detectadas por el instituto o por el propio patrón. De cara a la defensa, la congruencia entre las determinaciones del SUA, las cédulas de pago y los CFDI de nómina respalda con evidencia objetiva los argumentos técnicos ante revisiones o controversias, y facilita distinguir entre observaciones de forma y de fondo, ajustando la estrategia de regularización o impugnación.",
        },
        {
          type: "paragraph",
          text: "La estrategia integral de cumplimiento en materia de SUA e INFONAVIT descansa en tres pilares: prevención, evidencia y defensa. Prevención significa gobernanza de datos (catálogo depurado, reglas de integración salarial, calendarios de movimientos), conciliaciones periódicas y capacitación continua del personal que opera el sistema. Evidencia implica conservar, organizar y relacionar archivos de determinación, recibos timbrados, acuses de pago y reportes del sistema, de manera que pueda reconstruirse, sin lagunas, el trayecto de cada obligación. Defensa supone conocer los medios administrativos idóneos —queja o inconformidad, según el caso—, identificar con precisión los actos definitivos y sus plazos, y argumentar a partir de pruebas documentales y criterios contables y jurídicos consistentes. En conjunto, estos pilares permiten gestionar con solvencia revisiones de gabinete, visitas o conciliaciones institucionales, disminuyendo la exposición a créditos firmes y a medidas de apremio. El objetivo didáctico de la unidad es que el estudiante integre un mapa procedimental completo, capaz de guiar la operación cotidiana y la respuesta ante incidencias.",
        },

        {
          type: "accordion",
          header: "Guía rápida — mapa mental en tres capas",
          open: false,
          items: [
            {
              header: "Capa 1 — Flujo base (SUA–IMSS–INFONAVIT)",
              text: "Catálogo de trabajadores → SBC → determinación de cuotas IMSS por ramos → aportaciones INFONAVIT → amortización de créditos → emisión de cédulas/archivos → pago y conciliación documental.",
            },
            {
              header: "Capa 2 — Controles y evidencia",
              text: "Conciliación mensual SUA–CFDI–SIPARE; bitácoras de movimientos; respaldo de determinaciones y acuses; revisión de diferencias e integración salarial; preparación de papeles de trabajo para auditoría.",
            },
            {
              header: "Capa 3 — Incidencias y defensa",
              text: "Atención de requerimientos; regularización de omisiones con actualización/recargos; identificación de actos definitivos; queja e inconformidad ante INFONAVIT; alineación probatoria SUA–cédulas–CFDI.",
            },
          ],
        },
      ],
      subthemes: [
        /* 7.1 y 7.2 del Módulo — Procedimiento del SUA y del INFONAVIT */
        {
          id: "7.1",
          numbering: "7.1",
          title: "Cómo se determinan las cuotas (SUA)",
          content: [
            {
              type: "paragraph",
              text: "El Sistema Único de Autodeterminación (SUA) integra, en un flujo único y verificable, la información de personas trabajadoras (altas, bajas y modificaciones salariales), calcula cuotas obrero-patronales del IMSS por ramo y determina, simultáneamente, las aportaciones de vivienda al INFONAVIT y la amortización de créditos asignados. Su propósito excede la mera operación informática: produce evidencia estandarizada para acreditar cumplimiento formal y material, facilitar la regularización de diferencias y sostener defensas cuando existan revisiones. El ciclo de determinación arranca con un catálogo depurado de trabajadores y su salario base de cotización; sigue con la captura de incidencias y el cálculo de cuotas; genera archivos de pago y reportes; y culmina en la conciliación documental con CFDI de nómina y acuses. Cuando hay pagos extemporáneos, el sistema permite integrar actualización y recargos; si existen errores u omisiones, habilita la determinación de diferencias, incluso derivadas de dictamen de contador público. La clave es gobernanza de datos y trazabilidad: un SUA bien alimentado reduce observaciones en visitas o revisiones de gabinete, mientras crea un expediente probatorio coherente.",
            },
            {
              type: "paragraph",
              text: "Los insumos críticos para una determinación correcta son: (i) la identificación precisa de cada persona trabajadora, (ii) los movimientos afiliatorios dentro de plazo, (iii) la correcta integración del salario base de cotización y (iv) el control de incidencias que modifican la base gravable. La captura sistemática de variaciones y la verificación de reglas internas minimizan discrepancias entre lo timbrado en CFDI, lo determinado en SUA y lo efectivamente enterado mediante los sistemas de pago referenciado. Operativamente, los reportes del sistema se convierten en piezas del expediente: cédulas de determinación por ramo, relación de aportaciones de vivienda, amortizaciones y constancias de pago. Esta evidencia debe conservarse ordenada por periodo, con sellos de tiempo y bitácoras de cambios, a fin de reconstruir el cálculo cuando la autoridad lo requiera. Asimismo, la conciliación mensual y el archivo lógico de soportes (determinación → pago → acuse) son la mejor defensa frente a cuestionamientos.",
            },

            {
              type: "accordion",
              header: "Checklist técnico del cálculo en SUA",
              open: false,
              items: [
                {
                  header: "1) Preparación de datos",
                  text: "Catálogo de trabajadores actualizado; altas/bajas/modificaciones cargadas; incidencias registradas; verificación de bases y periodos.",
                },
                {
                  header: "2) Determinación y emisión",
                  text: "Cálculo de cuotas por ramo; aportaciones de vivienda; amortizaciones; archivos/formatos de pago generados y validados.",
                },
                {
                  header: "3) Cierre y conciliación",
                  text: "Pago referenciado con acuse; cruce SUA–CFDI–comprobantes; archivo probatorio por periodo y bitácora de ajustes/diferencias.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "El diseño del SUA está orientado a la individualización y calidad de información. Determina cuotas y aportaciones de forma que puedan asociarse a cada persona trabajadora, lo cual exige consistencia entre el universo de personal y la nómina timbrada. Las diferencias surgen, típicamente, por desalineaciones de base gravable o por movimientos no oportunamente reflejados. Ante ello, conviene institucionalizar controles: validaciones previas al cierre de periodo, doble revisión de cambios salariales, conciliación con reportes del sistema de pagos y verificación de amortizaciones vigentes. Si se detectan extemporaneidades, el propio sistema admite la incorporación de actualización y recargos, ofreciendo una vía de regularización rápida. Todo ajuste debe documentarse con papeles de trabajo que expliquen la causa, el cálculo y el efecto en la obligación, asegurando consistencia entre determinación, pago y evidencia.",
            },
            {
              type: "paragraph",
              text: "Desde la perspectiva de cumplimiento, el patrón robusto es el que puede reconstruir, sin lagunas, el camino de cada obligación: de la determinación a su pago y a la constancia correspondiente. La autoridad valora tanto el cálculo correcto como la narrativa documental que lo respalda. Por ello, además de operar el sistema, hay que gobernarlo: definir roles y segregación de funciones (captura, revisión y autorización), fijar calendarios internos de corte y cierre, establecer protocolos de resguardo de evidencia y mantener un registro de incidencias y correcciones. Esta disciplina reduce la probabilidad de créditos firmes y fortalece la posición del contribuyente si se activa un procedimiento de revisión. En suma, la determinación en SUA no es un evento, es un proceso continuo que se sostiene en datos confiables, controles estables y evidencia accesible.",
            },

            {
              type: "accordion",
              header: "Errores frecuentes y cómo evitarlos",
              open: false,
              items: [
                {
                  header: "Bases y movimientos",
                  text: "Integración salarial incompleta; movimientos fuera de plazo; amortizaciones no actualizadas. → Implementar revisiones de cierre.",
                },
                {
                  header: "Desalineación documental",
                  text: "Cálculo SUA ≠ CFDI ≠ acuses. → Conciliación mensual formal con responsables designados y listas de cotejo.",
                },
                {
                  header: "Regularización tardía",
                  text: "Diferencias no atendidas escalan a crédito. → Usar determinación de diferencias y pagos con actualización/recargos oportunamente.",
                },
              ],
            },
          ],
        },

        {
          id: "7.2",
          numbering: "7.2",
          title: "Recurso de inconformidad ante el INFONAVIT",
          content: [
            {
              type: "paragraph",
              text: "El Instituto del Fondo Nacional de la Vivienda para los Trabajadores (INFONAVIT) es un organismo de servicio social con ley propia y órganos colegiados (Asamblea, Comisión de Vigilancia, Comisión de Inconformidades), que administra aportaciones patronales de vivienda, opera un sistema de financiamiento a favor de las personas trabajadoras y gestiona la amortización de créditos. Cuando empresas, patrones, trabajadores o beneficiarios consideren que un acto del Instituto lesiona derechos —por ejemplo, inscripción, derecho a crédito, cuantía de aportaciones o descuentos— pueden promover el recurso de inconformidad ante el propio Instituto. Este medio interno no solo canaliza la tutela de derechos, también ordena y racionaliza la solución de controversias a partir de la documentación generada por nómina, SUA, cédulas de determinación y constancias de pago. Su eficacia depende, en gran medida, de la congruencia probatoria que presente quien recurre.",
            },
            {
              type: "paragraph",
              text: "La Comisión de Inconformidades se integra de manera tripartita y conoce, entre otros asuntos, controversias sobre el valor de prestaciones en materia de habitación y, en general, actos del Instituto que inciden en la relación patrón-trabajador en el ámbito de vivienda. El procedimiento específico está reglamentado por el propio Instituto: el Reglamento determina forma, términos y documentación exigible. En lo metodológico, el primer paso es identificar el acto definitivo que se impugna; el segundo, construir un expediente con determinaciones y pagos; el tercero, exponer agravios claros, relacionando cada argumento con evidencia objetiva. Dado que la Comisión presenta dictámenes a la Comisión de Vigilancia, la claridad técnica y la organización probatoria se traducen en posibilidades reales de corrección. La representación tripartita y la vocación de servicio social del Instituto dotan de equilibrio a las resoluciones, siempre que el recurrente sostenga sus dichos con pruebas suficientes.",
            },

            {
              type: "accordion",
              header: "Mapa del recurso de inconformidad (INFONAVIT)",
              open: false,
              items: [
                {
                  header: "1) Identificación del acto",
                  text: "Precisar resolución/acto definitivo; fecha de notificación; autoridad emisora; agravio principal y consecuencias.",
                },
                {
                  header: "2) Expediente probatorio",
                  text: "Determinaciones SUA; cédulas de aportaciones; CFDI de nómina; constancias de pago; comunicaciones con el Instituto.",
                },
                {
                  header: "3) Presentación y seguimiento",
                  text: "Promoción conforme al Reglamento; control de plazos; atención de requerimientos; recepción de dictamen y, en su caso, resolución.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "El éxito del recurso descansa en demostrar, con datos, que el acto impugnado es incompatible con el marco normativo o con la realidad documentada. Por ello, el recurrente debe alinear la cronología de hechos con los soportes: cuándo se determinó la aportación, cómo se calculó, cuándo y cómo se pagó, qué acuses se generaron y qué divergencia concreta motivó la inconformidad. Si el problema deriva de integraciones erróneas, diferencias no conciliadas o amortizaciones mal aplicadas, conviene aportar papeles de trabajo que muestren el cálculo correcto y su impacto. Igualmente, es útil anexar comunicaciones previas (aclaraciones, solicitudes de corrección) para evidenciar que se intentó una solución administrativa antes del recurso. Un escrito de agravios claro y una carpeta probatoria bien indexada facilitan el análisis y aceleran la emisión de dictámenes técnicos.",
            },
            {
              type: "paragraph",
              text: "Desde la perspectiva organizacional, el recurso de inconformidad debe verse como parte de una gobernanza integral de vivienda y nómina. Así como el SUA demanda controles para determinar cuotas y aportaciones, la interacción con INFONAVIT requiere procesos para monitorear avisos, amortizaciones, variaciones salariales y conciliaciones mensuales. La prevención —mediante catálogos depurados, conciliaciones periódicas y resguardo metódico de evidencia— es la mejor defensa. Si, pese a ello, sobrevienen controversias, el recurso ofrece un cauce institucional para corregir discrepancias, proteger derechos y evitar que diferencias evolucionen hacia conflictos mayores. La práctica recomendada es asignar responsables, calendarizar cierres, estandarizar formatos y mantener un repositorio documental confiable, de modo que, llegado el caso, la organización pueda recurrir con solvencia técnica.",
            },

            {
              type: "accordion",
              header: "Pruebas indispensables y buenas prácticas",
              open: false,
              items: [
                {
                  header: "Documentales clave",
                  text: "Determinaciones y cédulas; CFDI de nómina; acuses/constancias; reportes de amortización; comunicaciones con INFONAVIT.",
                },
                {
                  header: "Papeles de trabajo",
                  text: "Cálculos que explican diferencias; cronología de hechos; cuadro comparativo determinación–pago–acuse por periodo.",
                },
                {
                  header: "Gestión de plazos",
                  text: "Control de notificaciones; calendario reglamentario; evidencia de presentación y de atención a requerimientos.",
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
          href: "https://www.youtube.com/watch?v=fPLNGoSgRz4", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "B&T (2024). Descubre todo sobre el Procedimiento Administrativo de Ejecución. https://www.youtube.com/watch?v=fPLNGoSgRz4",
            "Instituto Mexicano del Seguro Social (2025). Sistema de Pago Referenciado (SIPARE). https://www.imss.gob.mx/patrones/sipare",
            "Instituto Mexicano del Seguro Social (2025). Sistema Único de Autodeterminación (SUA). https://www.imss.gob.mx/patrones/sua",
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
            "Constitución Política de los Estados Unidos Mexicanos. (2025). H. Cámara de Diputados, LXVI Legislatura.",
            "Código Fiscal de la Federación. (2024). H. Cámara de Diputados, LXVI Legislatura.",
            "Ley Federal de Procedimiento Administrativo. (2018). H. Cámara de Diputados, LXVI Legislatura.",
            "Ley Orgánica de la Administración Pública Federal. (2025). H. Cámara de Diputados, LXVI Legislatura.",
            "Reglamento del Código Fiscal de la Federación. (2021). H. Cámara de Diputados, LXVI Legislatura.",
            "Reglamento Interior de la Secretaría de Hacienda y Crédito Público. (2024). H. Cámara de Diputados, LXVI Legislatura.",
            "Ley del Seguro Social. (2024). H. Cámara de Diputados, LXVI Legislatura.",
            "Ley del Instituto del Fondo Nacional de la Vivienda para los Trabajadores. (2025). H. Cámara de Diputados, LXVI Legislatura.",
            "Soberanes, O., & Soberanes, S. V. (2018). *Manual teórico práctico sobre medios de defensa en materia administrativa: principal y especiales.*",
            "Gómez, C., & Briseño, M. E. (2016). *Nuevos paradigmas del Derecho Procesal.* México: UNAM, Instituto de Investigaciones Jurídicas.",
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
