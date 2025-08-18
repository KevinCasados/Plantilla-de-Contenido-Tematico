/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "mi",
  courseId: "impuestos-internacionales",
  id: "mi-ii-mod1",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Impuestos internacionales",
  title: "Módulo 1. Precios de transferencia y partes relacionadas",
  semestre: "4°",
  teacher: "Mtra. Eloisa Barrientos Landa",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Identificar qué se entiende por precios de transferencia y partes relacionadas; \
conocer su fundamento legal y los métodos para determinar precios de transferencia \
conforme a la LISR y a las directrices internacionales (OCDE).",

  competencies: [
    "Aplica criterios actitudinales, instrumentales y cognitivos en el análisis de operaciones intercompañía.",
    "Demuestra capacidad de aprendizaje autónomo, planificación y perseverancia en estudios de precios de transferencia.",
    "Comunica con eficacia hallazgos, supuestos y conclusiones técnicas derivadas del diagnóstico y la documentación comprobatoria.",
    "Selecciona y justifica el método de precios de transferencia más apropiado (PCNC, precio de reventa, costo adicionado, partición de utilidades, residual, márgenes transaccionales) según la comparabilidad.",
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

    /* 1. Unidad principal (según PDF) */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Precios de transferencia y partes relacionadas",
      content: [
        {
          type: "paragraph",
          text: "Los precios de transferencia constituyen el conjunto de criterios para valorar operaciones entre empresas que forman parte de un mismo grupo, de modo que reflejen el precio que habrían pactado partes independientes en circunstancias comparables (principio de plena competencia). Su relevancia ha crecido a nivel internacional por el impulso del G20 y la OCDE para combatir la erosión de bases y el traslado de utilidades, lo que se traduce en exigencias de documentación, análisis de comparabilidad y reportes estandarizados. En México, la Ley del Impuesto sobre la Renta (LISR) adopta este principio y exige a los contribuyentes que transan con partes relacionadas—nacionales o extranjeras—demostrar que sus precios se ubican en rangos de mercado. Desde una perspectiva de gestión, el tema no es solo de cumplimiento: diseñar políticas consistentes de precios de transferencia mejora la trazabilidad de márgenes, la asignación de riesgos y la coherencia estratégica entre compañías del grupo. Por ello, esta unidad articula marco conceptual, operaciones sujetas, métodos de valoración y mecanismos de certidumbre previa, para que el profesional vincule técnica fiscal, gobierno corporativo y decisión financiera con una visión integral y operativa del negocio.",
        },

        {
          type: "paragraph",
          text: "El punto de partida es precisar quiénes son ‘partes relacionadas’ y cuándo una transacción queda sujeta a reglas de precios de transferencia. Son partes relacionadas las personas o entidades entre las que existe participación directa o indirecta en administración, control o capital (incluidos establecimientos permanentes y asociaciones en participación). En ese marco, quedan típicamente sujetas: i) la enajenación, uso o goce de bienes; ii) la prestación de servicios; iii) la explotación o transmisión de intangibles; y iv) los préstamos o descuentos sobre créditos, donde deben ponderarse variables como monto, plazo, garantías y solvencia. La verificación se apoya en el análisis de comparables—internos o externos—y en la determinación de si las condiciones pactadas se asemejan a las que hubieran convenido partes independientes. Este enfoque obliga a levantar evidencia robusta (contratos, políticas, funciones y riesgos, características de los bienes/servicios, condiciones económicas) y a justificar ajustes razonables cuando existan diferencias materiales. En síntesis, la comparabilidad ancla la defensa técnica y reduce controversias: si la transacción es comparable y el rango está sustentado, la probabilidad de ajustes fiscales desciende de forma significativa.",
        },

        {
          type: "accordion",
          header: "Marco conceptual y principio de plena competencia",
          open: false,
          text: "El principio de plena competencia exige reproducir el resultado económico que se observaría entre independientes. Para aplicarlo, el análisis funcional identifica funciones, activos e intangibles utilizados y riesgos asumidos por cada parte, pues el precio o margen debe remunerar de forma consistente esa combinación. La noción de parte relacionada abarca tanto vínculos societarios como influencia en la administración o el control, e incluye a las casas matrices y otros establecimientos permanentes de la misma entidad. Bajo este prisma, la documentación no es un fin en sí mismo: es la narración probatoria que explica por qué el precio, margen o distribución de utilidades es congruente con el mercado. Cuando se instrumenta de manera disciplinada, el principio se vuelve una guía de gestión: alinea incentivos, previene arbitrajes internos y promueve la transparencia ante autoridades y terceros.",
        },

        {
          type: "accordion",
          header: "Marco normativo en México (arts. 179 y 180 LISR)",
          open: false,
          text: "La LISR incorpora expresamente precios de transferencia. El artículo 179 define el alcance, las partes relacionadas y la obligación de sujetarse a condiciones de mercado; el 180 establece los métodos aceptados y su jerarquía. Se privilegia el método de Precio Comparable No Controlado (CUP) y, cuando no resulte apropiado, pueden usarse: Precio de Reventa, Costo Adicionado, Partición de Utilidades, Partición Residual y Márgenes Transaccionales de Utilidad de Operación (TNMM). Si hay múltiples comparables, se construyen rangos y se aplica el ajuste intercuartílico; la mediana del rango funciona como punto de conformidad cuando el precio declarado queda fuera. La norma exige demostrar que el método elegido es el más apropiado con la información disponible y, en métodos basados en costos o ventas, acreditar que tales bases están a precios de mercado conforme a normas de información financiera. Este armazón otorga previsibilidad metodológica y acota la discrecionalidad en auditoría.",
        },

        {
          type: "paragraph",
          text: "Desde la óptica de valoración, los métodos aceptados comparten un hilo conductor: replicar el comportamiento de agentes independientes. El CUP compara precios o contraprestaciones ‘transacción a transacción’, por lo que su potencia descansa en la calidad de comparables y ajustes; el Precio de Reventa parte del precio al tercero y descuenta un margen bruto de mercado; el Costo Adicionado añade a los costos un margen bruto comparable. Cuando existen intangibles únicos o contribuciones significativas de ambas partes, la Partición de Utilidades y su variante Residual permiten distribuir la utilidad operativa global conforme a elementos objetivos (activos, costos, gastos, intangibles). Finalmente, el TNMM compara márgenes operativos sobre ventas, costos o activos. Complementariamente, la literatura operativa reconoce enfoques ‘universales’—valor de mercado o costo de producción—útiles como referencia cuando la evidencia directa es limitada. La selección no es arbitraria: recae en la fiabilidad de datos y en la congruencia con funciones y riesgos.",
        },

        {
          type: "paragraph",
          text: "A efectos de control y defensa, la documentación debe integrar—con consistencia interna—el análisis funcional, la segmentación de información financiera, la búsqueda y depuración de comparables, los ajustes de comparabilidad y la conclusión sobre el rango. La trazabilidad contable (con base en NIF) y la congruencia entre contratos, flujos operativos y márgenes reportados son críticas para sostener la posición del contribuyente. En operaciones recurrentes, conviene institucionalizar políticas internas que reduzcan asimetrías de información y establezcan umbrales y revisiones periódicas. La gobernanza del expediente también importa: versiones ejecutivas para dirección, anexos técnicos para fiscal y ‘data rooms’ que faciliten la interacción con autoridades. Así, el estudio deja de ser un documento reactivo y se convierte en un sistema de control de calidad que anticipa riesgos y acelera respuestas en auditorías o procedimientos amistosos.",
        },

        {
          type: "accordion",
          header: "Acuerdos de Precios Anticipados (APA): certidumbre previa",
          open: false,
          text: "El APA es un acuerdo entre el contribuyente y la autoridad para fijar por adelantado la metodología (o márgenes) aplicable a ciertas transacciones durante un periodo. Puede ser unilateral, bilateral o multilateral. Sus ventajas incluyen reducción de doble tributación, mayor seguridad jurídica y menor litigio; sus costos: preparación intensiva, plazos y seguimiento. La solicitud suele describir transacciones, funciones y riesgos, intangibles, condiciones económicas, estrategia de negocios y método propuesto. Si se aprueba, la administración se compromete a no realizar ajustes mientras se cumplan las condiciones pactadas. En términos de estrategia empresarial, el APA alinea el plan de negocios y las políticas de precios de transferencia con un estándar aceptado por la autoridad, lo que mejora la previsibilidad financiera y la relación cooperativa con el fisco.",
        },

        {
          type: "paragraph",
          text: "En conclusión, dominar precios de transferencia exige combinar solvencia técnica con disciplina documental. La definición precisa de partes relacionadas, la identificación de operaciones sujetas y la selección del método más apropiado se conectan a través del análisis de comparabilidad. El marco de la LISR—al priorizar el CUP, establecer métodos alternos, rangos y mediana—ofrece una ruta estructurada para acreditar plena competencia. A su vez, los APA brindan un canal de certidumbre previa en escenarios complejos. La recomendación profesional es clara: instaurar políticas, calendarios de revisión y tableros de indicadores que integren negocio, finanzas y cumplimiento; con ello, la organización reduce ajustes potenciales, fortalece su gobierno corporativo y crea un lenguaje común entre áreas operativas, fiscal y auditoría externa.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "Concepto y sujetos de precios de transferencia",
          content: [
            {
              type: "paragraph",
              text: "En el ámbito fiscal internacional, los precios de transferencia se entienden como el conjunto de reglas y métodos que aseguran que las operaciones entre partes relacionadas se realicen conforme al principio de plena competencia (arm’s length). En términos prácticos, esto implica que el precio o la contraprestación pactados en transacciones intragrupo deben corresponder a los que habrían acordado partes independientes en operaciones comparables. La relevancia de este marco ha crecido de manera sostenida por los esfuerzos del G20 y de la OCDE para combatir la erosión de bases y el traslado artificial de utilidades, promoviendo estándares de reporte y documentación homogéneos. En México, este andamiaje se integra a la Ley del Impuesto sobre la Renta (LISR) y su reglamentación, estableciendo la obligación de elaborar y conservar estudios técnicos que acrediten la razonabilidad de los precios pactados. Son sujetos obligados los contribuyentes —personas morales y físicas— que realizan operaciones con partes relacionadas, nacionales o extranjeras, y que, por su volumen o naturaleza, se encuentran dentro de los supuestos legales. Además, la legislación precisa la noción de parte relacionada cuando existe participación directa o indirecta en la administración, el control o el capital entre dos o más entidades; incluye también los establecimientos permanentes respecto de su casa matriz y demás sucursales. A falta de prueba en contrario, se presume relación cuando se interactúa con entidades sujetas a regímenes fiscales preferentes. En suma, el régimen exige sustentar con comparables y metodología la alineación a mercado, reduciendo el riesgo de ajustes, sanciones y doble tributación.",
            },
            {
              type: "accordion",
              header: "Principio de plena competencia en la práctica",
              open: false,
              text: "Aplicar el principio de plena competencia exige identificar adecuadamente la transacción controlada, perfilar funciones, activos y riesgos de cada parte (análisis FAR) y seleccionar comparables confiables. Ello demanda filtrar bases de datos por sector, geografía y período; depurar outliers; y ajustar diferencias materiales (por ejemplo, capital de trabajo o activos intangibles) para obtener un rango defendible. El objetivo es demostrar, con evidencia verificable, que el resultado económico del contribuyente (precio, margen o reparto de utilidades) es consistente con el que obtendría un operador independiente en condiciones equivalentes. Esta disciplina documental no es un fin en sí mismo: habilita decisiones de negocio informadas y reduce la exposición a controversias.",
            },
            {
              type: "paragraph",
              text: "La determinación de sujetos y alcances abarca, además, supuestos específicos: asociaciones en participación, donde sus integrantes se consideran partes relacionadas entre sí; establecimientos permanentes, que se vinculan con su matriz y con otros permanentes del mismo grupo; y la presunción de vinculación ante regímenes fiscales preferentes, salvo prueba en contrario. Operativamente, el contribuyente debe mantener un expediente local con las transacciones detalladas (contratos, políticas, análisis funcional y metodología) y, cuando proceda, adoptar reportes maestros y país por país que acrediten coherencia a escala multinacional. Esta arquitectura informativa permite alinear políticas internas —como listas de precios intragrupo, términos de crédito, regalías y cánones— con la sustancia económica, evitando discrepancias entre lo contractual y lo fáctico. La consecuencia estratégica es clara: una política de precios de transferencia bien diseñada no solo cumple con la LISR y las guías internacionales, sino que ordena las relaciones intercompañía, facilita auditorías y mitiga riesgos reputacionales. En un entorno de fiscalización más sofisticado, la anticipación —vía políticas y documentación robustas— es la mejor defensa del contribuyente.",
            },
            {
              type: "accordion",
              header: "¿Quiénes están obligados y qué deben documentar?",
              open: false,
              text: "Están obligados quienes realicen operaciones con partes relacionadas nacionales o extranjeras. La documentación debe acreditar comparabilidad y metodología: contratos, análisis funcional (funciones, activos, riesgos), caracterización del contribuyente (fabricante, distribuidor, prestador de servicios, tenedor de intangibles), selección del método y del indicador de rentabilidad, soporte de comparables y ajustes, cálculo del rango (p. ej., intercuartil) y conclusión. Cuando la normatividad lo exige, se suma la información global del grupo (reporte maestro) y la declaración país por país. Esta trazabilidad reduce la probabilidad de ajustes y facilita la defensa ante la autoridad.",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.2",
          numbering: "1.2",
          title: "Operaciones sujetas a precios de transferencia",
          content: [
            {
              type: "paragraph",
              text: "Quedan sujetas al escrutinio de precios de transferencia las transacciones controladas en las que el valor pactado pudiera divergir del que acordarían partes independientes en condiciones comparables. La LISR y la práctica internacional contemplan, entre otras, cuatro categorías recurrentes: i) enajenación, uso o goce temporal de bienes; ii) prestación de servicios; iii) explotación o transmisión de intangibles; y iv) operaciones financieras como préstamos o descuentos de créditos. En la enajenación o uso de bienes, la atención se centra en la naturaleza del activo, el momento de la transacción, la duración del uso y las condiciones de mercado. En servicios intragrupo —administrativos, técnicos, de soporte—, además del precio, la autoridad valora la existencia de beneficio (benefit test), la duplicidad con funciones locales y el markup apropiado. Los intangibles exigen especial cuidado: identificar titularidad, contribuciones al desarrollo, mejora, mantenimiento, protección y explotación (DEMPE) y definir regalías coherentes con la creación de valor. En préstamos y descuentos, los vectores críticos son monto, plazo, garantías, solvencia, moneda y tasas de referencia. La comparabilidad requiere analizar la sustancia económica, ajustar diferencias materiales y demostrar que el resultado (precio, tasa o margen) cae dentro de un rango de mercado defendible. Un error común es replicar referencias internas sin validar su independencia o vigencia; otro, mezclar funciones y riesgos heterogéneos en un mismo set de comparables, sesgando el análisis.",
            },
            {
              type: "accordion",
              header: "Criterios de comparabilidad y ajustes frecuentes",
              open: false,
              text: "La comparabilidad descansa en cinco pilares: características del bien o servicio; funciones, activos e intangibles; términos contractuales; circunstancias económicas; y estrategias de negocio. Para cerrar brechas con el mercado, son habituales ajustes de capital de trabajo (cuentas por cobrar, por pagar e inventarios), de estructura de activos (intensidad de capital), de riesgo de mercado (beta implícita), de gastos no recurrentes o extraordinarios, y de diferencias en políticas contables. Estos ajustes buscan neutralizar sesgos y aproximar los resultados a condiciones ‘manzana con manzana’.",
            },
            {
              type: "paragraph",
              text: "En la práctica, el contribuyente debe cartografiar su ecosistema transaccional: ventas intragrupo, licencias de tecnología, servicios compartidos, financiamientos, garantías, descuentos y bonificaciones, acuerdos de costo compartido, entre otros. A cada tipo de operación le corresponde un set metodológico y de evidencia: contratos consistentes con la realidad, estudios de mercado actuales, papeles de trabajo reproducibles y un repositorio de comparables con filtros transparentes. Cuando existan referencias internas (precios a terceros o de terceros hacia la entidad), se privilegian por su cercanía económica, siempre que cumplan con el estándar de independencia. Si no las hay, las externas deben seleccionarse con rigor y depurarse estadísticamente. El resultado debe expresarse en un rango —comúnmente intercuartílico— y en una conclusión clara: o bien el precio/margen está dentro del rango (cumplimiento), o bien se requiere un ‘true-up’ para alinear la política. Integrar esta disciplina al ciclo operativo —presupuestos, cierres, auditorías— evita ajustes ex post y consolida una cultura de cumplimiento preventivo.",
            },
            {
              type: "accordion",
              header: "Servicios intragrupo e intangibles: focos rojos",
              open: false,
              text: "En servicios, el ‘benefit test’ es ineludible: debe probarse que el receptor obtiene una ventaja económica o funcional identificable. Los cargos duplicados, de accionista o sin sustancia son vulnerables. En intangibles, la autoridad indaga quién controla y asume riesgos DEMPE: no basta ser propietario legal; hay que demostrar contribuciones reales y remuneración acorde. Las regalías deben correlacionarse con ventas, utilidades o hitos técnicos pertinentes, evitando estructuras nominales sin sustancia.",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.3",
          numbering: "1.3",
          title:
            "Métodos para determinar los precios de transferencia conforme a la legislación nacional",
          content: [
            {
              type: "paragraph",
              text: "La LISR establece una jerarquía metodológica con preferencia por el Método de Precio Comparable No Controlado (PCNC), y, cuando no resulte apropiado, permite emplear Precio de Reventa, Costo Adicionado, Partición de Utilidades, Residual de Partición y Márgenes Transaccionales de Utilidad de Operación (MTUO). El PCNC compara directamente el precio de la transacción controlada con el de operaciones independientes comparables, por lo que exige evidencias sólidas de mercado; si no existen comparables directos o hay diferencias insalvables, se recurre a métodos basados en márgenes. El Precio de Reventa parte del valor de reventa a terceros y descuenta un margen bruto comparable; es idóneo para distribuidores que no agregan valor significativo. El Costo Adicionado suma a los costos un margen bruto de referencia; suele aplicarse a fabricantes por encargo o prestadores de servicios rutinarios. La Partición de Utilidades asigna la utilidad operativa global entre partes relacionadas con base en contribuciones (activos, costos, gastos, funciones e intangibles), y su versión Residual separa primero una ‘utilidad mínima’ rutinaria y reparte luego la residual por intangibles significativos. El MTUO compara la rentabilidad operativa mediante indicadores como ROS, mark-up sobre costos u ORA sobre activos. Cualquiera sea el método, el resultado debe expresarse en rangos —ajustados frecuentemente por el intercuartil— y, si el contribuyente queda fuera, se referencia a la mediana.",
            },
            {
              type: "accordion",
              header: "Selección del método y defensa del rango",
              open: false,
              text: "Elegir el ‘método más apropiado’ depende de la sustancia: disponibilidad/calidad de comparables, perfil funcional, naturaleza del intangible, y confiabilidad de los ajustes. En métodos de margen (Reventa, Costo Adicionado, MTUO), documente el set de comparables, justifique filtros y explique ajustes. En Partición/Residual, motive el racional de reparto y la valoración de intangibles. Un rango estadísticamente defendible (intercuartil) exige transparencia metodológica y replicabilidad.",
            },
            {
              type: "paragraph",
              text: "La propia legislación orienta la aplicación preferente del PCNC y permite utilizar los otros métodos cuando aquel no sea adecuado conforme a las Guías de la OCDE. Adicionalmente, reconoce que ‘precios de mercado’ pueden acreditarse cuando el contribuyente obtiene una resolución favorable (p. ej., un acuerdo anticipado) o cuando demuestra que su costo y precio de venta se encuentran a mercado al amparo de los métodos permitidos. En la ejecución, es crítico definir el periodo probado, la moneda funcional y la consistencia contable (NIF) para asegurar comparabilidad. Asimismo, conviene establecer políticas internas de ajuste (‘true-up’) al cierre para corregir desviaciones frente al rango, así como gobernanza documental: repositorio de contratos, papeles de trabajo, set de comparables y memorandos de conclusión. Finalmente, integrar un calendario de revisión periódica —actualización de comparables y de supuestos de negocio— evita obsolescencias y fortalece la posición defensiva ante auditorías. Este enfoque preventivo reduce la probabilidad de ajustes, multas y controversias, alinea la política intragrupo con la creación real de valor y aporta certidumbre a la planificación financiera.",
            },
            {
              type: "accordion",
              header: "Rangos, mediana e intercuartil: implicaciones prácticas",
              open: false,
              text: "Cuando existen dos o más comparables, se construye un rango que suele depurarse con la técnica intercuartil para mitigar outliers. Si el resultado del contribuyente cae dentro del rango ajustado, se considera alineado a mercado; si queda fuera, la referencia es la mediana. Esto implica que las políticas internas prevean ajustes al cierre y que la dirección financiera monitoree mensualmente el desempeño para evitar desviaciones significativas. La clave es gestionar el rango como un ‘guardarraíl’ operativo, no como un trámite estadístico.",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.4",
          numbering: "1.4",
          title:
            "Métodos universales para determinar los precios de transferencia",
          content: [
            {
              type: "paragraph",
              text: "Hablar de métodos universales en precios de transferencia implica reconocer un conjunto de principios y herramientas que permiten fijar o verificar el valor de las transacciones entre partes relacionadas de modo consistente con lo que habrían pactado partes independientes en condiciones comparables. La exigencia central es el principio de plena competencia, que obliga a probar que los precios o márgenes aplicados reflejan el comportamiento del mercado y no una manipulación para erosionar bases gravables o trasladar utilidades. En la práctica, la determinación del precio no se reduce a una fórmula; requiere análisis funcional (funciones, activos y riesgos), caracterización de la transacción, identificación de comparables internos/externos, así como ajustes de comparabilidad que neutralicen diferencias materiales. Todo ello converge en métodos estandarizados —como el precio comparable no controlado, precio de reventa, costo adicionado, partición de utilidades, partición residual y márgenes transaccionales— que, aplicados con rigor, producen rangos de mercado (a menudo depurados mediante criterios estadísticos como el intercuartílico). Esta arquitectura metodológica, además, se integra con exigencias documentales y de gobernanza fiscal: políticas internas, trazabilidad de supuestos y decisiones, y evidencia contemporánea. El objetivo último es doble: por un lado, robustecer la certidumbre jurídica del contribuyente; por el otro, ofrecer a la autoridad un marco verificable que minimice controversias, alinee incentivos y reduzca el espacio para arbitrajes no deseados en cadenas de valor transnacionales.",
            }, // :contentReference[oaicite:0]{index=0}
            {
              type: "paragraph",
              text: "Desde una perspectiva operativa, la selección del método no es arbitraria: se privilegia aquel que, con la información disponible, resulte más apropiado y confiable para la transacción analizada. En términos generales, se observa una preferencia por métodos transaccionales directos cuando existen comparables de precio suficientemente cercanos (por ejemplo, PCNC), y se recurre a métodos basados en márgenes cuando la comparabilidad a nivel de precio es difícil o los intangibles/funciones difieren sustancialmente. La calidad del análisis depende, entre otros factores, de la segmentación contable (para aislar la operación bajo revisión), la consistencia de políticas de inventario, la homogeneidad temporal, la correcta identificación de partes probadas y contrapartes, así como de la robustez estadística de los rangos. El empleo de ajustes —por plazo, volumen, términos contractuales, riesgos crediticios o capital empleado— permite mejorar la comparabilidad, pero exige criterios transparentes y reproducibles. Por ello, además de los cálculos, la narrativa técnica es esencial: documenta la lógica de negocios, el razonamiento de selección y los límites de la evidencia, habilitando una evaluación informada por parte de terceros y autoridades fiscales.",
            }, // :contentReference[oaicite:1]{index=1}

            /* ── Acordeón 1 ── */
            {
              type: "accordion",
              header:
                "Arquitectura de selección del método (del hecho a la evidencia)",
              open: false,
              text: "Un proceso sólido de selección parte del mapeo detallado de la cadena de valor: ¿qué funciones ejecuta cada entidad?, ¿qué activos tangibles e intangibles emplea y quién asume cada riesgo operativo o de mercado? Con ese fundamento, se perfila la transacción económica (no solo la forma legal) y se buscan comparables con disciplina: primero internos —cuando existan operaciones con terceros— y, subsidiariamente, externos. La determinación del método obedece a esta jerarquía empírica: si hay precios observables, un método transaccional directo suele ofrecer la señal más limpia; si no, los métodos de márgenes cobran relevancia, siempre que se asegure segmentación contable confiable y se apliquen ajustes razonables. Finalmente, se verifica la robustez del rango (por ejemplo, con el criterio intercuartílico) y se valida la coherencia con la lógica de negocio y la rentabilidad consolidada. Cada decisión queda trazada en papeles de trabajo y en la documentación local, de grupo y país por país, reduciendo asimetrías de información y fortaleciendo la defensa técnica.",
            }, // :contentReference[oaicite:2]{index=2}

            {
              type: "paragraph",
              text: "La práctica demuestra que la ‘universalidad’ de los métodos no implica uniformidad mecánica. En industrias intensivas en intangibles —tecnología, farmacéutica, marcas de consumo— la relevancia de activos difíciles de valorar empuja a enfoques de partición (plena o residual) que capturan contribuciones diferenciadas. En distribución comercial con funciones rutinarias, métodos de margen (precio de reventa o TMUO) ofrecen trazabilidad operativa y contrastabilidad con muestras amplias. En manufactura por encargo, costo adicionado con comparables de margen bruto suele ser idóneo. Y cuando existen transacciones de commodities con cotizaciones públicas, el PCNC reaparece con fuerza, siempre que se controlen incoterms, fechas, calidades y estructuras de descuento. La clave está en alinear la historia económica de la transacción con el lente metodológico, evitando sesgos de selección a conveniencia. Así, la consistencia interanual, la simetría entre partes y la congruencia entre política de precios y resultados agregados constituyen señales que fortalecen la credibilidad del estudio.",
            }, // :contentReference[oaicite:3]{index=3}

            /* Imagen ilustrativa intercalada */
            {
              type: "image",
              src: "https://cdn.slidesharecdn.com/ss_thumbnails/precios-de-transferenciacopia-230726092303-41d2f0a7-thumbnail.jpg?width=640&height=640&fit=bounds",
              alt: "Esquema comparativo de métodos de precios de transferencia y flujo de selección",
              caption:
                "Métodos universales: ruta de selección, fuentes de comparables y validaciones estadísticas.",
            },

            {
              type: "paragraph",
              text: "Otro elemento transversal es la gobernanza documental. Más allá del cumplimiento formal, la documentación debe ser útil para la gestión: explicar por qué la opción elegida refleja la realidad económica, cómo se construyó la muestra, qué supuestos sustentan los ajustes y cuáles son los límites de la inferencia. En periodos de alta volatilidad —shocks de precios, disrupciones logísticas, cambios regulatorios— es aconsejable incorporar análisis de sensibilidad, políticas de retro-pricing o mecanismos de compensación intragrupo que mantengan la alineación al mercado. La coordinación con planeación financiera, fiscalidad internacional y compliance normativo (p. ej., LISR, guías OCDE, APA) evita fricciones y refuerza la defensa ante auditoría. En síntesis, los métodos universales operan como un lenguaje común entre contribuyentes y autoridades: cuando se aplican con transparencia y profundidad técnica, maximizan la probabilidad de converger en rangos razonables, disminuyendo riesgos de ajustes, sanciones y doble tributación.",
            }, // :contentReference[oaicite:4]{index=4}

            /* ── Acordeón 2 ── */
            {
              type: "accordion",
              header: "Rangos, estadística e intercuartiles: buenas prácticas",
              open: false,
              text: "Los rangos derivados de comparables múltiples no son cifras ornamentales: acotan la incertidumbre inherente a la comparación entre empresas con realidades distintas. La depuración por criterios de calidad (persistencia operativa, ausencia de partes relacionadas, similitud funcional) previene sesgos. Cuando el rango se construye, la mediana ofrece una referencia robusta y el uso del intercuartílico reduce el peso de extremos influenciados por eventos no recurrentes. Es indispensable reconciliar los márgenes con estados financieros auditados, explicar exclusiones y documentar la replicabilidad de consultas en bases de datos. En revisiones, la narrativa debe conectar: hipótesis → selección → cálculos → conclusiones. Si la compañía se sitúa fuera del rango, conviene explorar ajustes razonables o, en su caso, mecanismos preventivos como acuerdos anticipados (APA), que trasladan la discusión de la auditoría al diseño metodológico, dando certidumbre por varios ejercicios.",
            }, // :contentReference[oaicite:5]{index=5}
          ],

          /* → Sub-subtemas (1.4.1 – 1.4.4) */
          subthemes: [
            {
              id: "1.4.1",
              numbering: "1.4.1",
              title: "Entre empresas relacionadas",
              content: [
                {
                  type: "paragraph",
                  text: "Cuando ambas contrapartes pertenecen al mismo grupo, el análisis funcional adquiere protagonismo: identificar quién diseña la estrategia, quién asume riesgos clave (mercado, inventario, crédito), qué intangibles únicos o valiosos intervienen y cómo se retribuyen. Si existen ventas con terceros comparables (internos), un PCNC puede ser concluyente; de lo contrario, métodos de márgenes (TMUO en distribución/servicios rutinarios; costo adicionado en manufactura por encargo) emergen como alternativas. La selección de la ‘parte probada’ recae típicamente en la entidad con funciones más simples y sin intangibles únicos, lo que facilita encontrar comparables y defender la política de precios. La consistencia intercompañía —coherencia entre acuerdos, facturación, flujos y KPIs— es crítica para que el método elegido resista escrutinio.",
                }, // :contentReference[oaicite:6]{index=6}
                {
                  type: "paragraph",
                  text: "En grupos con plataformas de IP, la partición de utilidades (plena o residual) ofrece un marco para asignar la ganancia de operación según contribuciones relativas. Primero se calcula la utilidad global de la transacción; luego se asigna una utilidad mínima a funciones rutinarias y, finalmente, la utilidad residual se distribuye atendiendo a intangibles significativos y drivers económicos. El reto es empírico: medir contribuciones sin sobre-atribuir rentas a entidades de baja sustancia. La documentación debe describir la arquitectura de intangibles, la sustancia operativa (personal, decisiones, riesgos) y la racionalidad de los factores de reparto. Esta aproximación, aunque más compleja, tiende a ser más fiel en modelos de negocio donde el valor proviene de activos difíciles de comparar en el mercado abierto.",
                }, // :contentReference[oaicite:7]{index=7}
              ],
            },

            {
              id: "1.4.2",
              numbering: "1.4.2",
              title: "En la prestación de servicios",
              content: [
                {
                  type: "paragraph",
                  text: "La valoración de servicios intragrupo exige demostrar beneficio para el receptor y evitar doble remuneración de funciones ya remuneradas en otras transacciones. Para servicios de bajo valor añadido (back-office, soporte estandarizado), es habitual el enfoque cost-plus con márgenes modestos sustentados en comparables. Para servicios especializados (consultoría estratégica, I+D, TI de misión crítica), la comparabilidad es más desafiante y puede requerir proxies de mercado o, en su caso, particiones cuando concurren intangibles relevantes. La clave es la trazabilidad de costos —bases consistentes, exclusión de partidas pas-through—, políticas de reparto transparentes y contratos que definan alcance, responsabilidades y criterios de actualización periódica. Controles de materialidad y tests de duplicidad refuerzan la defensa.",
                }, // :contentReference[oaicite:8]{index=8}
                {
                  type: "paragraph",
                  text: "Operativamente, conviene segmentar por familias de servicios, mapear centros de costos y anclar los márgenes a paneles de comparables con filtros de calidad (industrias, funciones, riesgo). En contextos volátiles, mecanismos de true-up anual ayudan a mantener los márgenes dentro del rango. La evidencia del beneficio puede incluir mejoras en KPIs, evitación de costos, sinergias o cumplimiento regulatorio. Cuando el servicio se apoya en plataformas tecnológicas propietarias, debe aclararse si la remuneración al IP ya se capta en licenciamientos o si procede una componente adicional por know-how; evitar pagos superpuestos es esencial para alinear el resultado al principio de plena competencia y mitigar ajustes por parte de la autoridad.",
                }, // :contentReference[oaicite:9]{index=9}
              ],
            },

            {
              id: "1.4.3",
              numbering: "1.4.3",
              title: "En la enajenación de bienes tangibles e intangibles",
              content: [
                {
                  type: "paragraph",
                  text: "Para bienes tangibles, cuando existen cotizaciones públicas o listas de precios confiables, el método comparable directo es preferente, controlando variables como calidad, incoterms, plazos y descuentos. En su ausencia, márgenes de reventa o costo adicionado permiten aproximarse a condiciones de mercado; la segmentación correcta (por líneas, canales o geografías) es esencial. En commodities, la disciplina de fechas y puntos de entrega evita sesgos. En cadenas de manufactura por encargo, la remuneración del ‘toller’ se fija normalmente sobre costos operativos controlables, dejando el riesgo de mercado en la entidad emprendedora. La narrativa debe explicar por qué el método y los comparables elegidos reflejan la realidad económica específica y no una abstracción estadística.",
                }, // :contentReference[oaicite:10]{index=10}
                {
                  type: "paragraph",
                  text: "En intangibles, el reto es mayor: la unicidad, obsolescencia y sinergias dificultan comparables perfectos. Modelos de licenciamiento deben relacionar estructura de regalías con la contribución al negocio (tamaño del mercado, margen incremental, duración, exclusividad). Cuando coexisten aportaciones de IP en varias jurisdicciones, una partición residual puede capturar mejor la creación de valor. La documentación debe describir el desarrollo, mejora, mantenimiento, protección y explotación del intangible (marco DEMPE), así como la sustancia decisoria de las entidades que lo gestionan. Tasaciones y análisis de sensibilidad fortalecen la posición técnica, especialmente en reorganizaciones, transferencias intragrupo de IP o en la creación de plataformas de marca compartida.",
                }, // :contentReference[oaicite:11]{index=11}
              ],
            },

            {
              id: "1.4.4",
              numbering: "1.4.4",
              title: "En actos de competencia desleal",
              content: [
                {
                  type: "paragraph",
                  text: "Cuando se detectan condiciones que pudieran sugerir competencia desleal —descuentos inusualmente altos, financiamientos no a valor de mercado, transferencias de intangibles sin contraprestación suficiente— el análisis de precios de transferencia debe reforzar sus salvaguardas. Esto incluye contrastes con prácticas independientes bajo condiciones similares, explicación de racionalidades económicas (salida de inventario obsoleto, remedios de liquidez, mitigación de riesgos) y, si procede, ajustes que normalicen los términos. La carga de la prueba recae en demostrar que, pese a la apariencia, el arreglo mantiene coherencia con el principio de plena competencia. La trazabilidad contractual, los respaldos de comité y las evaluaciones prospectivas/retrospectivas resultan determinantes para sostener la política aplicada.",
                }, // :contentReference[oaicite:12]{index=12}
                {
                  type: "paragraph",
                  text: "Además, conviene incorporar políticas internas de ‘bandera roja’ y protocolos de aprobación escalonados para operaciones sensibles, con métricas que detecten desalineaciones tempranas (p. ej., márgenes persistentes fuera de rango, condiciones de crédito asimétricas, tasas efectivas anómalas). En controversias, mecanismos preventivos como acuerdos anticipados (APA) o procedimientos amistosos pueden trasladar la discusión al terreno metodológico, reduciendo riesgos de doble tributación. La consistencia entre narrativa de negocio, evidencia documental y resultados contables es la mejor defensa frente a señalamientos de manipulación. El objetivo no es solo cumplir, sino construir decisiones defendibles, comparables y replicables en el tiempo.",
                }, // :contentReference[oaicite:13]{index=13}
              ],
            },
          ],
        },

        {
          id: "1.5",
          numbering: "1.5",
          title:
            "Metodología para determinar el acuerdo anticipado de precio (APA)",
          content: [
            {
              type: "paragraph",
              text: "Un Acuerdo Anticipado de Precios (APA, por sus siglas en inglés) es un mecanismo de cooperación entre el contribuyente y la administración tributaria que establece, con antelación y por un periodo determinado, la metodología, supuestos críticos y parámetros para fijar precios de transferencia en operaciones con partes relacionadas. Su objetivo es otorgar certidumbre jurídica, prevenir controversias y, cuando aplica, mitigar la doble tributación. Los APA pueden ser unilaterales (entre el contribuyente y su autoridad local), bilaterales (dos jurisdicciones) o multilaterales (tres o más), y se sustentan en el principio de plena competencia y en criterios de comparabilidad coherentes con la legislación doméstica y las guías internacionales. El proceso típicamente inicia a petición del contribuyente e involucra rondas sucesivas de intercambio de información y validación técnica hasta alcanzar una resolución que blinda, por los años acordados, la política de precios de transferencia siempre que se cumplan las condiciones pactadas. Esta herramienta no sustituye la obligación de análisis anual, pero sí ofrece un marco previamente aprobado que reduce la exposición a ajustes, optimiza la planeación y mejora el diálogo institucional con la autoridad fiscal, especialmente en grupos multinacionales con cadenas de valor complejas y uso de intangibles significativos. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "Metodológicamente, la preparación de un APA exige una narrativa robusta del negocio y un estudio técnico que articule función por función cómo se crean y capturan los resultados económicos en cada transacción controlada. El expediente debe cubrir, al menos: (i) descripción de las operaciones intragrupo que se someterán al acuerdo; (ii) características de los bienes o servicios; (iii) análisis funcional detallado (funciones, activos –tangibles e intangibles– y riesgos); (iv) términos contractuales y condiciones económicas relevantes; (v) estrategias de negocio y supuestos críticos; y (vi) la metodología propuesta (método, indicadores, comparables, ajustes y rango esperado). Durante la negociación, la administración revisa la consistencia del método frente a operaciones comparables, valida la razonabilidad de los supuestos y puede solicitar ampliaciones de información. Concluido el intercambio, la autoridad emite una resolución que otorga seguridad al contribuyente por un número de ejercicios, condicionada al cumplimiento de la metodología y al seguimiento periódico de los supuestos críticos (por ejemplo, la estabilidad del perfil funcional o del mix de productos y mercados). :contentReference[oaicite:1]{index=1}",
            },

            /* ── Acordeón 1 ── */
            {
              type: "accordion",
              header: "Información que suele requerirse en un APA",
              open: false,
              text: "Para sustentar un APA, la autoridad suele solicitar un conjunto de evidencias que permitan reproducir el razonamiento técnico y verificar la aplicación del principio de plena competencia a lo largo del tiempo. Entre ellas destacan: mapeo de transacciones específicas a incluir en el acuerdo; desglose de propiedades y servicios involucrados; contratos intragrupo y políticas de precios; análisis funcional (quién hace qué, con qué activos, y qué riesgos asume); descripción de intangibles utilizados y su titularidad; cuantificación de circunstancias económicas (ciclos, regulaciones sectoriales, poder de negociación, barreras de entrada); estrategias de negocio vigentes; y propuesta metodológica con justificación del método elegido, selección y cribado de comparables, ajustes de comparabilidad, métrica de rentabilidad, rango esperado y tratamiento de años atípicos. A partir de esta base, la discusión se centra en validar la pertinencia de los supuestos críticos (p. ej., no aparición de nuevos intangibles, estabilidad del mercado objetivo) y en acordar un procedimiento de seguimiento (reportes anuales, indicadores de alerta) que asegure la continuidad de las condiciones que dieron origen al acuerdo. :contentReference[oaicite:2]{index=2}",
            },

            {
              type: "paragraph",
              text: "Un componente clave del APA es la alineación entre la metodología acordada y los métodos previstos en la legislación nacional (por ejemplo, precio comparable no controlado, precio de reventa, costo adicionado, partición de utilidades, residual de partición o márgenes transaccionales de utilidad de operación). En la práctica, la autoridad evaluará que el método propuesto sea el más apropiado según la información disponible y que la implementación produzca resultados dentro de un rango razonable (usualmente, intercuartílico) derivado de comparables defendibles, con ajustes que traten diferencias materiales. La resolución suele contemplar el periodo de vigencia, mecanismos de renovación o revisión, y la forma de documentar el cumplimiento anual. Si los supuestos críticos se desvían, el contribuyente debe informar y, en su caso, negociar una modificación o concluir el APA. Esta disciplina preventiva convierte al APA en un instrumento de gobernanza tributaria que promueve consistencia metodológica, reduce la litigiosidad y fortalece la transparencia en grupos con operaciones transfronterizas intensivas en bienes, servicios o intangibles. :contentReference[oaicite:3]{index=3}",
            },

            /* ── Imagen conceptual intercalada ── */
            {
              type: "image",
              src: "https://facturama.mx/blog/wp-content/uploads/2022/06/apa-advance-pricing-agreement-que-es.webp",
              alt: "Ciclo conceptual de un APA: solicitud, análisis, negociación, resolución, seguimiento.",
              caption: "Acuerdo anticipado de precio (APA).",
            },

            {
              type: "paragraph",
              text: "Entre las ventajas típicamente asociadas a un APA se encuentran: (i) la reducción significativa de la incertidumbre y de la probabilidad de ajustes en auditorías; (ii) la potencial eliminación de doble tributación en APAs bilaterales o multilaterales, al coordinar criterios entre jurisdicciones; (iii) una relación más cooperativa con la administración tributaria; y (iv) eficiencias administrativas por menor litigio y mejor previsibilidad de flujos fiscales. No obstante, no es una herramienta gratuita: la preparación y negociación demandan tiempo y recursos, se requiere seguimiento anual para demostrar el cumplimiento, y existe el riesgo de que cambios sustanciales del negocio o del entorno invaliden supuestos críticos y obliguen a reabrir la discusión. Por ello, antes de solicitar un APA conviene evaluar costo–beneficio, materialidad de las operaciones, estabilidad del modelo de negocio y capacidad interna para sostener la documentación y el monitoreo, de modo que el acuerdo se traduzca en valor a largo plazo y no solo en una certificación formal de corto alcance. :contentReference[oaicite:4]{index=4}",
            },

            /* ── Acordeón 2 ── */
            {
              type: "accordion",
              header: "Limitaciones, riesgos y buenas prácticas",
              open: false,
              text: "Las principales limitaciones de un APA derivan de su complejidad técnica y del compromiso de mantenimiento: la administración analizará con el mismo rigor que en una fiscalización y exigirá evidencia suficiente; adicionalmente, el contribuyente deberá reportar periódicamente para acreditar que la realidad operativa sigue alineada con los supuestos críticos. Entre los riesgos figuran la inversión de tiempo y costo de oportunidad durante la negociación y la posibilidad de que, por cambios del mercado, el método o los comparables dejen de ser representativos. Como buenas prácticas, conviene: (1) preparar un análisis funcional granular con trazabilidad a estados financieros y contratos; (2) definir comparables con filtros objetivos y ajustes justificados; (3) establecer indicadores de alerta que activen revisiones internas; (4) documentar un plan de comunicación con la autoridad si cambian los supuestos; y (5) alinear el APA con la estrategia de negocio y con los métodos previstos en la legislación doméstica para fortalecer su resiliencia técnica. :contentReference[oaicite:5]{index=5}",
            },

            {
              type: "paragraph",
              text: "En síntesis, la metodología de un APA combina un examen técnico profundo de las operaciones intragrupo con un marco procedimental que produce certidumbre prospectiva. Su valor no reside solo en ‘fijar un rango’, sino en construir una narrativa verificable sobre cómo y por qué la política de precios de transferencia refleja la creación de valor y la asunción de riesgos dentro del grupo, de modo consistente con el principio de plena competencia. Cuando el expediente integra información exhaustiva de transacciones, funciones, activos, riesgos y condiciones económicas; cuando el método seleccionado es el más apropiado dadas las particularidades del negocio; y cuando se establecen mecanismos de seguimiento que preservan los supuestos críticos, el APA se vuelve una palanca de gobernanza tributaria que alinea cumplimiento, planeación y transparencia, reduciendo litigios y favoreciendo la cooperación entre contribuyentes y autoridades. :contentReference[oaicite:6]{index=6}",
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
          href: "https://www.youtube.com/watch?v=ldhpS8R5ods", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Normas APA (7.ª edición) — Guía oficial de citación y referencias: https://normas-apa.org/wp-content/uploads/Guia-Normas-APA-7ma-edicion.pdf",
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
            "Ernesto, F. Z. (2020). Elementos de Finanzas públicas Mexicanas. México: UNAM.",
            "sostenibilidad, C. M. (2024). Normas de Información financiera. México: Instituto Mexicano de Contadores Públicos.",
            "Unión, C. d. (2024). Ley del Impuesto sobre la renta. México.",
            "Precios de transferencia en México. (s.f.). Recuperado de https://grupoconsultorefe.com/servicio/precios-de-transferencia/pais/mexico",
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
