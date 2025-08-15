/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "UEH-MI", // Sugerido: Maestría en Impuestos (UEH)
  courseId: "MI-IMP-INT", // Sugerido: Impuestos Internacionales
  id: "MI-IMP-INT-M4", // Sugerido: Módulo 4 de la materia

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Impuestos Internacionales",
  title:
    "Módulo 4. Residentes en el extranjero con generación de ingresos en México",
  semestre: "4°",
  teacher: "Mtra. Eloisa Barrientos Landa",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Identificar, analizar y comprender el tratamiento fiscal aplicable a los residentes en el extranjero con generación de ingresos en México.",
  competencies: [
    "Actitudinales: perseverancia y responsabilidad en el análisis fiscal.",
    "Instrumentales: manejo de fuentes legales y normativas tributarias.",
    "Cognitivas: comprensión del marco jurídico interno/externo y sus implicaciones.",
    "Capacidades: aprendizaje autónomo, comunicación eficaz y planificación.",
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

    /* 1. Nodo / Unidad principal (mapea la Unidad III del PDF) */
    {
      id: "1",
      numbering: "Unidad 3",
      title: "Residentes en el extranjero con generación de ingresos en México",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad establece el marco para comprender cómo tributan, en México, los residentes en el extranjero que obtienen ingresos con fuente de riqueza ubicada en territorio nacional. Partimos del objetivo formativo de identificar, analizar y comprender su tratamiento fiscal, articulando los conceptos básicos con la estructura del Título V de la LISR. El temario abarca desde la determinación de los sujetos obligados hasta el tratamiento por tipo de ingreso (salarios, honorarios, uso o goce temporal, enajenaciones, dividendos, intereses y regalías, entre otros), con énfasis en reglas de retención, tasas, exenciones y obligaciones formales. Asimismo, se revisa la noción de establecimiento permanente y su impacto en la atribución de ingresos. Este panorama introductorio permitirá al estudiante reconocer patrones comunes entre categorías, así como diferencias clave que condicionan el cálculo del impuesto y la forma de enterarlo. La ruta de aprendizaje sigue el desarrollo temático de la unidad y su relación con el Capítulo V de la LISR, que regula específicamente estos supuestos, asegurando coherencia entre el marco legal y los procedimientos operativos que se aplican en la práctica profesional. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1} :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "paragraph",
          text: "Comenzamos con los sujetos del impuesto. El artículo 153 de la LISR establece que están obligados los residentes en el extranjero que obtengan ingresos en efectivo, en bienes, en servicios o en crédito, provenientes de fuentes de riqueza situadas en territorio nacional, cuando no tengan establecimiento permanente en el país o, teniéndolo, los ingresos no sean atribuibles a éste. La norma precisa que también se consideran ingresos ciertos pagos que beneficien al residente en el extranjero (incluso si le evitan una erogación) y que, tratándose de operaciones con partes relacionadas, deberán determinarse ingresos, utilidades y, en su caso, deducciones conforme a precios y márgenes que se hubieran pactado entre independientes. La ley también prevé reglas específicas cuando los ingresos se obtienen mediante fideicomisos y establece responsabilidades para los retenedores cuando el impuesto deba enterarse por retención. Al entender este punto de partida, el alumno podrá distinguir quién debe pagar, cómo se determina la base y quién está obligado a retener y enterar el impuesto, cuestiones que se repetirán, con matices, en cada tipo de ingreso de la unidad. :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5} :contentReference[oaicite:6]{index=6}",
        },
        {
          type: "paragraph",
          text: "En ingresos por salarios, el artículo 154 fija un esquema de tasas progresivas aplicables al total del ingreso obtenido: una exención inicial, una tasa intermedia y una tasa máxima. Además, define la obligación de retención para quien efectúe el pago cuando sea residente en México o residente en el extranjero con establecimiento permanente relacionado con el servicio, y, en su defecto, la obligación del contribuyente de presentar declaración dentro de los quince días siguientes a la obtención del ingreso. La norma también contempla supuestos particulares asociados con la fracción VII del artículo 94 (p. ej., opciones sobre acciones), y prevé la posibilidad de garantizar el pago del impuesto mediante depósito en cuentas previstas en el CFF. Estas reglas no sólo determinan el ‘cuánto’, sino el ‘cómo’ del cumplimiento, y sientan un precedente metodológico para analizar el resto de categorías: identificar la fuente de riqueza, ubicar las tasas, confirmar si procede retención y precisar el momento de entero o declaración, con el fin de asegurar seguridad jurídica y trazabilidad documental. :contentReference[oaicite:7]{index=7} :contentReference[oaicite:8]{index=8} :contentReference[oaicite:9]{index=9}",
        },
        {
          type: "paragraph",
          text: "En honorarios y, en general, servicios personales independientes (art. 156), la fuente de riqueza se ubica en México cuando el servicio se presta en el país. La ley presume que el servicio se presta totalmente en México si se acredita que una parte se realizó aquí, salvo que el contribuyente demuestre la porción efectivamente prestada en el extranjero; en ese caso, el impuesto se calcula sobre la parte de la contraprestación atribuible a México. También se presume la prestación en territorio nacional cuando un residente en México o un EP paga a su parte relacionada residente en el extranjero. La determinación del impuesto es sencilla en su forma: se aplica una tasa del 25% sobre el total del ingreso, sin deducción alguna. Si quien paga es residente en el país (o EP relacionado), debe efectuar la retención; en los demás casos, el propio contribuyente enterará el impuesto por declaración dentro de los quince días siguientes. Este tratamiento pone de relieve la importancia de delimitar correctamente el lugar de prestación, la relación entre las partes y la vía de entero para evitar contingencias. :contentReference[oaicite:10]{index=10} :contentReference[oaicite:11]{index=11} :contentReference[oaicite:12]{index=12} :contentReference[oaicite:13]{index=13}",
        },
        {
          type: "paragraph",
          text: "Finalmente, el temario se expande hacia otras categorías frecuentes en la práctica: uso o goce temporal de bienes muebles e inmuebles, enajenación (incluida la de acciones o títulos valor), dividendos o utilidades, ingresos por conducto de personas morales no lucrativas, intereses, regalías y asistencia técnica o publicidad, así como construcción de obra, obtención de premios, actividades artísticas o deportivas y supuestos vinculados con regímenes fiscales preferentes. Cada rubro presenta reglas específicas de sujeción, base, tasa, retención y, en su caso, exenciones o limitantes (p. ej., umbrales de tiempo de estancia o condiciones del pagador). A lo largo de la unidad, iremos trazando equivalencias, contrastes y puntos de control que permitan al profesional anticipar riesgos y documentar adecuadamente la posición fiscal, con soporte normativo y evidencia transaccional. Este enfoque comparado facilitará la toma de decisiones consistentes y el diseño de políticas internas de cumplimiento al interactuar con contrapartes extranjeras. :contentReference[oaicite:14]{index=14} :contentReference[oaicite:15]{index=15}",
        },

        /* ── Acordeón (3 niveles) ────────────────── */
        {
          type: "accordion",
          header: "Mapa de la Unidad (Capítulo V LISR)",
          open: false,
          text: "La Unidad III se organiza de lo general a lo particular: primero identifica a los sujetos del impuesto y la noción de fuente de riqueza, y después desglosa el tratamiento por tipo de ingreso. El itinerario incluye salarios, honorarios, uso o goce temporal, enajenaciones (con énfasis en acciones o títulos), dividendos, intereses, regalías y asistencia técnica, además de construcción de obra, premios, actividades artísticas o deportivas, regímenes fiscales preferentes y otros ingresos gravables. Este mapa temático ayuda a ubicar, en cada caso, quién debe retener, cuál es la tasa aplicable, cómo se calcula la base y qué exenciones o presunciones operan. Con esta vista panorámica, el estudiante podrá conectar cada regla con su artículo fuente y reconocer los puntos de control que se repiten a lo largo del Título V. :contentReference[oaicite:16]{index=16} :contentReference[oaicite:17]{index=17}",
        },
        {
          type: "accordion",
          header: "Conceptos clave para iniciar",
          open: false,
          text: "Dos nociones vertebran la unidad: ‘residente en el extranjero’ y ‘fuente de riqueza en territorio nacional’. La sujeción al ISR surge cuando un no residente obtiene ingresos vinculados con México, aun sin tener establecimiento permanente o cuando, teniéndolo, el ingreso no le es atribuible. Desde el inicio, es crucial distinguir si el pago se realiza por un residente en México o por un EP, pues generalmente ello activa obligaciones de retención. Además, en operaciones con partes relacionadas, la ley exige determinar ingresos y utilidades con criterios de plena competencia, utilizando precios o márgenes comparables a los de partes independientes. Estos ejes conceptuales aseguran consistencia al analizar cada capítulo de la unidad y orientan el armado del expediente de sustento (contratos, evidencia de la fuente de riqueza, cálculos, constancias de retención y entero). :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19}",
        },
        {
          type: "accordion",
          header: "Precauciones de cumplimiento y control",
          open: false,
          text: "Para evitar contingencias, es recomendable: (1) verificar, por categoría de ingreso, si procede retención y quién es el sujeto obligado a enterar; (2) documentar la determinación de la base y la tasa aplicable; (3) monitorear presunciones y umbrales temporales (por ejemplo, días de estancia o presunciones de prestación en México); y (4) cuidar los supuestos especiales (fideicomisos, pagos por cuenta del contribuyente, o remuneraciones en acciones). La LISR prevé que, cuando el impuesto se pague por retención, el retenedor debe enterar una cantidad equivalente a la que debió retener en la fecha de exigibilidad o pago, lo que ocurra primero; si no hay retenedor obligado, el propio contribuyente presenta la declaración en plazo breve (p. ej., quince días). Estos controles operativos, repetidos en varios artículos, son la línea base para una ejecución ordenada y auditable del cumplimiento. :contentReference[oaicite:20]{index=20} :contentReference[oaicite:21]{index=21}",
        },
      ],

      /* → Subtemas de primer nivel (3.1 – 3.15) */
      subthemes: [
        {
          id: "1.1",
          numbering: "3.1",
          title: "Sujetos del impuesto",
          content: [
            {
              type: "paragraph",
              text: "El Título V de la LISR regula la tributación de los residentes en el extranjero que obtienen ingresos con fuente de riqueza en México. En términos prácticos, son sujetos del impuesto quienes perciben ingresos por conceptos específicos (p. ej., salarios, honorarios, uso o goce temporal de bienes, enajenación de bienes, dividendos, intereses o regalías) y cuya ‘fuente’ se ubica en territorio nacional conforme a reglas legales. Así, la sujeción no depende de que el perceptor viva en México, sino de que el hecho imponible esté jurídicamente vinculado al país.",
            },
            {
              type: "paragraph",
              text: "La identificación del sujeto obligado se refuerza artículo por artículo: en salarios se establecen bases y tarifas según el pagador y la residencia del trabajador; en honorarios se definen supuestos y exenciones de retención; en uso o goce de inmuebles se fija la fuente de riqueza por ubicación del bien y se prevé retención; en enajenaciones se delinean reglas sustantivas y de opción; y tratándose de acciones, se considera fuente de riqueza cuando el emisor sea mexicano o más del 50% del valor provenga de inmuebles situados en el país. Estas normas concretan el alcance subjetivo del Título V. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1} :contentReference[oaicite:2]{index=2} :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4}",
            },
            {
              type: "image",
              alt: "Mapa conceptual de sujetos, fuente de riqueza y tipos de ingreso (elaboración propia)",
              caption:
                "Relación entre cada tipo de ingreso y el criterio de fuente de riqueza aplicable.",
              src: "https://fastercapital.com/es/i-es/Comprension-del-papel-de-la-publicacion-525-del-IRS-en-el-calculo-de-su-ingreso-imponible--Comprensi-n-de-los-diferentes-tipos-de-ingresos.webp",
            },
            {
              type: "accordion",
              header:
                "Con establecimiento permanente vs. sin establecimiento permanente",
              open: false,
              text: "Cuando un residente en el extranjero opera mediante establecimiento permanente (EP) en México, normalmente tributa como si fuera residente por los ingresos atribuibles a ese EP, aplicando reglas de determinación y deducibilidad propias del Título II/IV, además de obligaciones formales y de comprobación. En ausencia de EP, la regla usual es la retención como pago definitivo por parte del pagador residente o EP, bajo tasas y bases que varían según el tipo de ingreso. Esta distinción ordena procedimientos, declaraciones y responsables de entero, además de condicionar el acceso a opciones (por ejemplo, calcular sobre la ganancia en ciertas enajenaciones) o a beneficios de tratados cuando se acredite residencia y se cumplan requisitos de procedencia.",
            },
            {
              type: "paragraph",
              text: "Operativamente, identificar al sujeto del impuesto exige mapear: (1) quién paga o acredita el ingreso, (2) la naturaleza del ingreso, (3) dónde se ubica la fuente de riqueza, (4) si existe EP, y (5) si aplica un convenio para evitar doble imposición. Ese mapa determina si el impuesto se retiene, si procede declaración directa, qué tasas rigen y cuáles son las obligaciones de información (RFC, constancias, avisos y, en su caso, representante legal).",
            },
            {
              type: "accordion",
              header: "Comprobación de residencia y efectos en la sujeción",
              open: false,
              text: "La residencia fiscal del perceptor puede modificar la sujeción y el monto del impuesto cuando exista tratado. Para acceder a beneficios, el contribuyente debe acreditar su residencia con certificado vigente emitido por la autoridad competente de su país. La correcta obtención y conservación de esa constancia —junto con la documentación de la operación— permite aplicar reglas distributivas (p. ej., exclusivas del Estado de residencia o con límites de tasa en la fuente) y, en su caso, invocar procedimientos amistosos. Sin acreditación, prevalece el régimen interno y la retención como pago definitivo con las tasas domésticas.",
            },
          ],
        },

        {
          id: "1.2",
          numbering: "3.2",
          title: "Ingresos por salarios",
          content: [
            {
              type: "paragraph",
              text: "Los salarios pagados a residentes en el extranjero por servicios prestados en territorio nacional están sujetos a impuesto en México. La norma diferencia supuestos según la duración de la estancia, quién es el empleador y si el costo se deduce en México, previendo que cuando el pagador sea residente en el país o EP, retenga el impuesto conforme a tarifa específica prevista para este capítulo. El diseño busca gravar la retribución por trabajo realizado en México sin importar dónde se pague. :contentReference[oaicite:5]{index=5}",
            },
            {
              type: "paragraph",
              text: "El esquema de retención contempla límites máximos, supuestos de exención o no sujeción por estancias breves y reglas para viáticos o prestaciones conexas. Cuando el salario excede determinados umbrales, se aplican tasas progresivas, mientras que si no se rebasan ciertos límites pueden operar reducciones. El objetivo es equilibrar equidad y practicidad, minimizando cumplimiento para casos de baja cuantía. :contentReference[oaicite:6]{index=6}",
            },
            {
              type: "image",
              alt: "Flujo de determinación de retención por salarios (elaboración propia)",
              caption:
                "Identifica pagador, ubicación del servicio y aplica tarifa/beneficio de tratado.",
              src: "https://conocimiento.blob.core.windows.net/conocimiento/2020/Contables/ContabilidadBancos/CasosPracticos/CP_Timbrado_de_retenciones/drex_ejemplos_de_retenciones_custom_2.png",
            },
            {
              type: "paragraph",
              text: "En la práctica, el empleador residente o EP calcula y entera la retención como pago definitivo, emite constancia y conserva evidencia de la fuente de riqueza (contratos, ubicación del puesto, bitácoras de estancias). Si existe tratado, se revisa si la remuneración queda gravada sólo en el Estado de residencia del trabajador cuando no se exceden umbrales de días, no se paga por un empleador residente en México ni se deduce el costo en el país; de no cumplirse esos requisitos, procede la imposición en la fuente.",
            },
            {
              type: "accordion",
              header: "Errores comunes y controles",
              open: false,
              text: "Errores frecuentes: acreditar indebidamente estancias cortas sin verificar umbrales; omitir la retención porque el pago se hace desde el exterior; y no distinguir entre servicios efectivos en México vs. teletrabajo. Controles recomendados: calendario de días de presencia, mapeo de centros de costos, validación documental de residencia y del empleador, y conciliación contable de deducibilidad.",
            },
            {
              type: "paragraph",
              text: "En auditoría, la autoridad verifica coherencia entre la deducción del gasto en México y la ausencia de retención. Si el costo se dedujo en el país, es indicio de que la fuente de riqueza está aquí y de que debió retenerse. Ante diferencias, pueden determinarse créditos fiscales, recargos y multas.",
            },
          ],
        },

        {
          id: "1.3",
          numbering: "3.3",
          title: "Ingresos por honorarios",
          content: [
            {
              type: "paragraph",
              text: "Los honorarios percibidos por residentes en el extranjero se gravan cuando el servicio se presta en México o cuando sus efectos se materializan en territorio nacional bajo los criterios de fuente. La ley prevé reglas de retención y supuestos de excepción (por ejemplo, ciertos honorarios técnicos sin presencia en el país, si se cumplen condiciones), además de obligaciones de documentación para acreditar la naturaleza del servicio y el lugar de realización. :contentReference[oaicite:7]{index=7}",
            },
            {
              type: "paragraph",
              text: "Si el pagador es residente en México o EP, debe practicar retención como pago definitivo, usualmente calculada sobre el monto del pago. La norma también contempla casos en los que no procede retención, así como requisitos para reconocer la exención; omitirlos implica que el pagador deba enterar el impuesto. La distinción entre servicios independientes, dependientes y actividades empresariales es clave para clasificar correctamente el ingreso. :contentReference[oaicite:8]{index=8}",
            },
            {
              type: "accordion",
              header: "Servicios técnicos y asistencia técnica",
              open: false,
              text: "En servicios técnicos especializados, asistencia o transferencia de conocimientos, la acreditación del lugar de aprovechamiento cobra especial relevancia. Protocolos mínimos: contrato con alcance y entregables, evidencia de ejecución (reportes, bitácoras, repositorios), y rastro de comunicación. Si el soporte beneficia procesos o activos ubicados en México, la autoridad puede sostener que la fuente es mexicana y exigir retención.",
            },
            {
              type: "paragraph",
              text: "Desde la perspectiva de cumplimiento, conviene alinear facturación, contratos y pagos. En due diligence, inconsistencias entre descripciones genéricas y resultados tangibles suelen detonar ajustes; por ello, el desglose de actividades, fechas y responsables ayuda a sostener la correcta tributación.",
            },
            {
              type: "accordion",
              header: "Honorarios frente a EP",
              open: false,
              text: "Si la prestación recurrente de servicios configura EP (por ejemplo, por contar con lugar fijo de negocios o agente dependiente), se migra del régimen de retenciones a la determinación de utilidad atribuible con reglas de gastos deducibles y documentación de precios de transferencia. Anticipar este umbral evita contingencias relevantes.",
            },
          ],
        },

        {
          id: "1.4",
          numbering: "3.4",
          title:
            "Ingresos por el uso o goce temporal de bienes muebles e inmuebles",
          content: [
            {
              type: "paragraph",
              text: "Tratándose de uso o goce temporal de bienes, la fuente de riqueza se ubica en México cuando el bien inmueble está situado en el país o, en el caso de muebles, cuando se aprovechan económicamente en territorio nacional. La ley establece como regla la retención a cargo del pagador residente o EP, con tasas y bases que difieren según se trate de inmuebles, muebles u otros activos. :contentReference[oaicite:9]{index=9}",
            },
            {
              type: "paragraph",
              text: "En inmuebles, la retención suele ser un porcentaje sobre el monto total pagado, sin deducciones, y tiene carácter definitivo. Para bienes muebles, existen supuestos con tasas específicas, además de la necesidad de acreditar dónde se usa el bien para asignar correctamente la jurisdicción tributaria. La norma también prevé obligaciones de información para el retenedor. :contentReference[oaicite:10]{index=10}",
            },
            {
              type: "image",
              alt: "Esquema de determinación en arrendamientos y afines (elaboración propia)",
              caption:
                "Paso a paso: identificar bien, ubicación/aprovechamiento, tasa y entero.",
              src: "https://mandeguidelines.iom.int/sites/g/files/tmzbdl2306/files/inline-images/figura-4.2_0.png",
            },
            {
              type: "accordion",
              header: "Cláusulas contractuales recomendadas",
              open: false,
              text: "Para mitigar riesgos: especificar claramente ubicación del inmueble, periodos de uso, moneda, frecuencia de pago, desglose de conceptos (mantenimiento, seguros), obligación de proporcionar constancias fiscales y, cuando aplique, acreditación de residencia para beneficios de tratado. Estas cláusulas reducen incertidumbre al momento de calcular y enterar retenciones.",
            },
            {
              type: "paragraph",
              text: "En auditoría, la autoridad contrasta CFDI, contratos y flujos bancarios. Los desajustes entre el domicilio del bien y la tasa aplicada o la omisión de retención suelen derivar en créditos. Mantener un expediente con avalúos, pólizas y evidencia del uso del bien facilita la defensa.",
            },
            {
              type: "accordion",
              header: "Bienes intangibles y equiparables",
              open: false,
              text: "Cuando el uso o goce recae sobre intangibles (marcas, software, know-how), suele discutirse si el ingreso es regalía o un ‘uso de bien’ equiparable. La calificación influye en la tasa y en el tratamiento en tratados. Describir con precisión los derechos otorgados (reproducción, modificación, sublicencia) es clave para una correcta tributación.",
            },
          ],
        },

        {
          id: "1.5",
          numbering: "3.5",
          title: "Ingresos por enajenación",
          content: [
            {
              type: "paragraph",
              text: "La enajenación hecha por residentes en el extranjero está gravada cuando la fuente de riqueza se ubica en México conforme a reglas de la LISR. En el régimen interno, la mecánica puede prever retención definitiva por el adquirente residente o EP, opciones para calcular sobre la ganancia en ciertos casos y obligaciones de declarar en plazos breves. La determinación depende del tipo de bien, forma de transmisión y documentación de costo y avalúos. :contentReference[oaicite:11]{index=11}",
            },
            {
              type: "paragraph",
              text: "En operaciones formalizadas ante fedatario público, existen deberes de información y, si la autoridad practica avalúo que excede la contraprestación en más de 10%, la diferencia puede considerarse ingreso del adquirente con una tasa definitiva sobre ese diferencial. También se contemplan facilidades de pago en parcialidades cuando así se pacte en escritura, sujeto a garantizar el interés fiscal. :contentReference[oaicite:12]{index=12} :contentReference[oaicite:13]{index=13}",
            },
            {
              type: "image",
              alt: "Diagrama de flujo para enajenaciones (elaboración propia)",
              caption:
                "¿Hay escritura? ¿Avalúo >10%? ¿Parcialidades? Define retención u obligación directa.",
              src: "https://factura.com/blog/wp-content/uploads/2022/04/Cuerpo-blog-1-2.png",
            },
            {
              type: "accordion",
              header: "Donativos y supuestos exceptuados",
              open: false,
              text: "Determinados ingresos recibidos a título gratuito pueden exceptuarse del impuesto cuando encuadran en los supuestos del artículo 93 (p. ej., ciertos donativos), siempre que se cumplan las condiciones y límites de la norma aplicable y se documente adecuadamente la operación. La excepción no elimina la necesidad de informar cuando la disposición lo requiera. :contentReference[oaicite:14]{index=14}",
            },
            {
              type: "paragraph",
              text: "En la práctica, la ruta crítica es: (1) identificar el bien y la forma de transmisión; (2) revisar si la operación se consignará en escritura; (3) definir si retiene el adquirente o declara el enajenante; (4) determinar base (precio vs. avalúo) y, en su caso, ganancia; (5) enterar el impuesto en plazo. Un expediente robusto de costo comprobado y avalúos reduce riesgos de ajustes.",
            },
            {
              type: "accordion",
              header: "Pago en parcialidades y garantías",
              open: false,
              text: "Cuando el precio se pacta a más de 18 meses, la ley permite enterar el impuesto conforme se exijan los pagos, siempre que se garantice el interés fiscal. Este mecanismo alinea flujo de efectivo e impuesto, pero exige controles de calendario, pólizas de garantía y conciliación de pagos para evitar recargos. :contentReference[oaicite:15]{index=15}",
            },
          ],
        },

        {
          id: "1.6",
          numbering: "3.6",
          title: "Enajenación de acciones o títulos valor",
          content: [
            {
              type: "paragraph",
              text: "En la enajenación de acciones o títulos valor por residentes en el extranjero, se considera que la fuente de riqueza está en México cuando el emisor es residente en el país o cuando más del 50% del valor contable de las acciones provenga directa o indirectamente de inmuebles ubicados en territorio nacional. Bajo estos supuestos, procede la imposición en México como Estado de la fuente. :contentReference[oaicite:16]{index=16}",
            },
            {
              type: "paragraph",
              text: "La norma equipara a ‘enajenación de acciones’ diversos actos: venta de participaciones en asociaciones en participación que realicen actividades empresariales en México; constitución o cesión de usufructo o uso de acciones; y transmisiones del derecho a percibir rendimientos de las acciones. En estos casos, cuando se actualizan los supuestos, el impuesto suele determinarse aplicando una tasa definitiva sobre el monto total de la operación, sin deducción, y con retención a cargo del adquirente residente o EP. :contentReference[oaicite:17]{index=17}",
            },
            {
              type: "image",
              alt: "Árbol de decisión para enajenación de acciones (elaboración propia)",
              caption:
                "¿Emisor mexicano? ¿>50% inmuebles? ¿AP/Usufructo? ¿Intermediario retenedor?",
              src: "https://www.plandemejora.com/wp-content/uploads/Ejemplo-1-5.png",
            },
            {
              type: "accordion",
              header: "Opción de gravar sobre la ganancia y excepciones",
              open: false,
              text: "Cuando el contribuyente cuenta con representante en México que cumpla los requisitos del art. 174 y no se trata de ingresos sujetos a REFIPRE ni de países con imposición territorial, puede optar por calcular el impuesto sobre la ganancia aplicando la tasa máxima de la tarifa del art. 152. Esta opción no aplica a ciertos actos (p. ej., usufructo de acciones) donde la ley exige gravar el monto total. Documentar representante, costo comprobado y ajustes es indispensable. :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19}",
            },
            {
              type: "paragraph",
              text: "En mercados con intermediarios, la retención puede practicarla el adquirente residente o el intermediario cuando corresponda; si no hay retenedor obligado, el contribuyente debe declarar y pagar dentro de 15 días de haber obtenido el ingreso. La precisión operativa en la cadena de liquidación evita duplicidades u omisiones. :contentReference[oaicite:20]{index=20}",
            },
            {
              type: "accordion",
              header: "Casos especiales: fondos de inversión y avalúo >10%",
              open: false,
              text: "Para acciones de fondos de inversión de renta variable, la ley prevé una retención específica (pago definitivo) sobre la ganancia; además, si la autoridad practica avalúo que excede en más de 10% la contraprestación, la diferencia se considera ingreso del adquirente y puede implicar un tratamiento particular en la base y tasa aplicables. Registrar adecuadamente precios de adquisición y enajenación, y conservar estados de cuenta e informes del fondo, es crucial. :contentReference[oaicite:21]{index=21} :contentReference[oaicite:22]{index=22}",
            },
          ],
        },
        {
          id: "1.7",
          numbering: "3.7",
          title: "Ingresos por dividendos o utilidades",
          content: [
            {
              type: "paragraph",
              text: "Los dividendos o utilidades distribuidos por sociedades residentes en México a favor de personas residentes en el extranjero generan ISR en territorio nacional por provenir de fuente de riqueza ubicada en el país. La mecánica general parte de considerar como ingreso gravado la percepción del dividendo y, en su caso, ciertos reembolsos de capital que, por su naturaleza, se asimilan a utilidades distribuidas si provienen de CUCA agotada o de partidas no aportadas por los socios. En términos prácticos, el sujeto obligado a retener es la persona moral pagadora: la retención se calcula sobre el monto efectivamente distribuido, sin deducción alguna, aplicando la tasa que establece la Ley y las reglas especiales para supuestos como reducción de capital o liquidación. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "En el régimen para residentes en el extranjero, la tasa aplicable a la distribución directa de dividendos se determina conforme a la Ley del ISR y puede verse modificada por los convenios para evitar la doble tributación, cuando resulten aplicables (p. ej., cláusulas de limitación de beneficios o requisitos de beneficiario efectivo). La sociedad fuente de pago debe identificar el carácter del ingreso, su fecha de exigibilidad y si existe convenio aplicable con el país de residencia del receptor, además de verificar los documentos probatorios de residencia fiscal y de beneficiario efectivo. La trazabilidad contable del saldo de CUFIN y de CUCA resulta indispensable para calificar adecuadamente los flujos como dividendos gravados, dividendos provenientes de utilidades ya gravadas o reembolsos con efectos fiscales.",
            },
            {
              type: "accordion",
              header: "Determinación y bases de retención",
              open: false,
              text: "Operativamente, la empresa que paga el dividendo identifica el monto distribuible y lo clasifica: (i) utilidades gravadas registradas en CUFIN (que, al haberse sometido a ISR corporativo, pueden tener un tratamiento específico), (ii) utilidades no CUFIN (gravadas en la distribución) y (iii) reembolsos de capital con posible asimilación a utilidades distribuidas. La retención al residente en el extranjero se practica sobre el total del dividendo o utilidad distribuida sin deducción, aplicando la tasa legal o, en su defecto, la preferencial prevista en un convenio vigente siempre que el perceptor cumpla los requisitos materiales y formales para su aplicación. La documentación soporte debe incluir constancias de retención, comprobantes de residencia, evidencia de beneficiario efectivo y, en su caso, certificados de CUFIN/CUCA que acrediten la naturaleza del flujo. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "En reducciones de capital y liquidaciones es crucial distinguir la parte que corresponde a aportaciones contra la que deriva de utilidades acumuladas: si la CUCA resulta insuficiente, el remanente tiene el tratamiento de dividendo para efectos de retención. Además, cuando el receptor es un vehículo transparente o una entidad pasiva en el exterior, deben evaluarse las reglas de beneficiario efectivo y posibles cláusulas antiabuso contenidas en los convenios. La empresa pagadora también debe revisar si existen obligaciones de información complementaria (p. ej., declaraciones informativas) y el correcto timbrado o documentación del pago para fines de auditoría.",
            },
            {
              type: "paragraph",
              text: "En escenarios intercoyunturales (por ejemplo, dividendos extraordinarios, recapitalizaciones o reorganizaciones intragrupo) la sustancia económica y la evidencia del negocio subyacente son determinantes. Asimismo, es recomendable evaluar el impacto de reglas de subcapitalización, de capitalización delgada o de no deducibilidad de pagos a partes relacionadas cuando, previo a la distribución, se instrumentaron operaciones de financiamiento o aportaciones que afecten la base distributiva. La coordinación entre las áreas de tesorería, fiscal y contable reduce el riesgo de retenciones insuficientes y de recar​gos o sanciones posteriores.",
            },
            {
              type: "accordion",
              header: "Implicaciones con tratados y beneficiario efectivo",
              open: false,
              text: "Los convenios para evitar la doble tributación pueden reducir la tasa de retención sobre dividendos condicionada a umbrales de tenencia accionaria, períodos mínimos de participación o a que el receptor sea el beneficiario efectivo del cobro. La empresa mexicana debe solicitar la prueba de residencia fiscal vigente y comprobar la calidad de beneficiario efectivo, evitando estructuras interpuestas sin sustancia. La correcta aplicación del convenio exige, además, revisar la cláusula de limitación de beneficios y las definiciones del propio tratado. El incumplimiento documental da lugar a aplicar la tasa doméstica sin beneficios y a eventuales revisiones de la autoridad. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "paragraph",
              text: "En síntesis, el tratamiento de dividendos para residentes en el extranjero combina reglas domésticas de fuente de riqueza y retención con la posible prevalencia de tratados. La clave es calificar el flujo (dividendo, reembolso asimilado), acreditar la residencia del perceptor y documentar la procedencia de beneficios, manteniendo soportes de CUFIN/CUCA y constancias de retención. Las áreas responsables deben anticipar el calendario de distribución, validar impactos en flujo de efectivo y preparar dossiers de defensa con papeles de trabajo que expliquen la determinación. :contentReference[oaicite:3]{index=3}",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.8",
          numbering: "3.8",
          title: "Ingresos por conducto de persona moral no lucrativa",
          content: [
            {
              type: "paragraph",
              text: "Cuando un residente en el extranjero percibe ingresos en México a través de una persona moral con fines no lucrativos, la Ley del ISR prevé un tratamiento específico para delimitar la sujeción al impuesto y la obligación de retener. El eje es identificar si la entidad no lucrativa funge como conducto (canal de pago) y si el beneficio económico se traslada al residente en el extranjero. En ese caso, la fuente de riqueza se ubica en México y se configura la obligación de retención por parte del pagador nacional, incluso si el pago se instrumenta vía la entidad no lucrativa. Esta regla busca evitar que la interposición de una organización sin fines de lucro desnaturalice la carga tributaria. :contentReference[oaicite:4]{index=4}",
            },
            {
              type: "paragraph",
              text: "La operativa exige distinguir entre donativos genuinos y pagos que encubren contraprestaciones por bienes o servicios. Si la entidad no lucrativa actúa únicamente como intermediaria o administradora de recursos, sin que exista causa donativa propiamente dicha, el flujo puede considerarse ingreso gravable para el beneficiario extranjero y activar la retención en México. Por ello, el análisis de contratos, políticas internas y estados de cuenta resulta indispensable para demostrar la naturaleza del pago y su destino final. Las obligaciones informativas y de comprobación recaen en quien efectúa el pago y, en su caso, en la propia entidad no lucrativa.",
            },
            {
              type: "accordion",
              header: "Documentación y prueba del beneficiario",
              open: false,
              text: "Para acreditar la procedencia de beneficios y la correcta aplicación de retenciones, el pagador en México debe recabar: (i) constancia de residencia fiscal del beneficiario final, (ii) evidencia de la relación jurídica subyacente (contratos, convenios de colaboración), (iii) estados de cuenta que muestren el traspaso al extranjero y (iv) documentación de la entidad no lucrativa que confirme su papel. En ausencia de claridad, la autoridad podría presumir que la entidad es un simple conducto y exigir la retención correspondiente, con recargos y actualización. :contentReference[oaicite:5]{index=5}",
            },
            {
              type: "paragraph",
              text: "En escenarios en los que exista un convenio para evitar la doble imposición, pueden operar requisitos adicionales como la prueba de beneficiario efectivo, cláusulas antiabuso y limitación de beneficios. El uso de entidades no lucrativas como vehículos exige especial cuidado para no vulnerar dichas cláusulas. La evaluación de sustancia económica, actividades reales y capacidad operativa de la entidad es una defensa relevante para demostrar que no hay artificios y que la operación responde a fines legítimos, por ejemplo, la ejecución de proyectos académicos, culturales o de investigación.",
            },
            {
              type: "paragraph",
              text: "El cumplimiento adecuado incluye la emisión de constancias de retención, la presentación de declaraciones informativas cuando proceda y el resguardo de evidencia del destino final de los recursos. Para las instituciones mexicanas es recomendable establecer políticas internas de due diligence cuando interactúen con entidades no lucrativas que canalizan pagos al exterior, incluyendo checklists de documentación mínima y revisiones periódicas de cumplimiento. Con ello se mitiga el riesgo de retenciones omitidas o de ajustes en revisión.",
            },
            {
              type: "accordion",
              header: "Riesgos y mejores prácticas",
              open: false,
              text: "Riesgos: calificación de simulación, desconocimiento de donativos, ajustes por retención no practicada, sanciones y afectación reputacional. Mejores prácticas: mapear flujos, identificar al beneficiario final y validar que el objeto social de la entidad no lucrativa sea congruente con la operación. En caso de duda, practicar la retención doméstica y, si procede, gestionar devoluciones o aclaraciones posteriores con soporte documental robusto. :contentReference[oaicite:6]{index=6}",
            },
            {
              type: "paragraph",
              text: "En resumen, cuando median personas morales no lucrativas como conducto de pagos a un no residente, la clave es la transparencia del flujo, la prueba del beneficiario y la aplicación correcta de las reglas de fuente de riqueza y retención. La coordinación entre jurídico, fiscal y tesorería permite prevenir contingencias y asegurar un cierre ordenado de cada operación. :contentReference[oaicite:7]{index=7}",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.9",
          numbering: "3.9",
          title: "Ingresos por intereses",
          content: [
            {
              type: "paragraph",
              text: "Para residentes en el extranjero, la Ley del ISR considera gravados en México los intereses cuando la fuente de riqueza se ubica en el país. En términos generales, la fuente se configura si el capital se coloca o utiliza en territorio nacional, cuando el deudor es residente en México o un establecimiento permanente en el país, o cuando los intereses se pagan desde México. La ley define ‘interés’ de manera amplia, abarcando rendimientos de créditos, instrumentos de deuda y, en ciertos casos, pagos accesorios. Estas reglas conviven con exenciones específicas para créditos a gobierno y financiamientos preferenciales, así como con disposiciones de retención a cargo del pagador. :contentReference[oaicite:8]{index=8}",
            },
            {
              type: "paragraph",
              text: "Existen exenciones relevantes: intereses de créditos concedidos al Gobierno Federal o al Banco de México, intereses de ciertos bonos emitidos por dichas entidades y créditos a plazo de tres o más años otorgados o garantizados por entidades extranjeras de fomento a la exportación, entre otros. Cuando no es posible identificar al beneficiario efectivo extranjero en estos supuestos, los intermediarios financieros pueden quedar relevados de retener y de la responsabilidad solidaria, conforme a reglas de carácter general emitidas por el SAT. Todo ello exige verificar documentación de soporte y, en su caso, aplicar las tasas o exenciones correspondientes. :contentReference[oaicite:9]{index=9} :contentReference[oaicite:10]{index=10}",
            },
            {
              type: "accordion",
              header: "Base gravable y tasas",
              open: false,
              text: "La retención se determina, en principio, sobre el monto del interés pagado, sin deducción. La tasa depende del tipo de instrumento y del beneficiario (por ejemplo, bancos extranjeros, organismos internacionales, fondos de pensiones o inversionistas en bonos gubernamentales), así como de la aplicación de tratados para evitar la doble imposición que pueden reducir la retención. Es indispensable identificar al beneficiario efectivo y el carácter del título o crédito para seleccionar la tasa correcta y documentar la procedencia del tratamiento preferencial cuando exista. :contentReference[oaicite:11]{index=11}",
            },
            {
              type: "paragraph",
              text: "En operaciones con intermediarios financieros y custodios, la principal complejidad radica en probar la residencia del beneficiario efectivo y no confundir al tenedor aparente con quien realmente percibe el rendimiento. Las reglas administrativas permiten, en determinados casos, exceptuar de retención a intermediarios cuando no sea posible identificar al beneficiario, lo que hace aún más relevante mantener expedientes de KYC y de residencia actualizados para no perder beneficios ni incurrir en incumplimientos. :contentReference[oaicite:12]{index=12}",
            },
            {
              type: "paragraph",
              text: "En presencia de tratados, deben revisarse artículos relativos a intereses (definición, fuente, tasas máximas y beneficiario efectivo) y cláusulas antiabuso. La coordinación con el área legal para la revisión de contratos (tasas, fechas de pago, amortizaciones, primas y descuentos) ayuda a delimitar qué parte es interés, qué parte es ganancia de capital y qué pagos accesorios no integran la base de retención. Así se minimiza el riesgo de discrepancias con la autoridad fiscal.",
            },
            {
              type: "accordion",
              header: "Exenciones frecuentes en intereses",
              open: false,
              text: "Entre las exenciones más comunes destacan: créditos a gobierno y Banco de México, bonos gubernamentales colocados entre el gran público inversionista con beneficiario efectivo extranjero y financiamientos preferenciales de entidades de fomento a exportaciones o a instituciones donatarias autorizadas. Su aplicación debe sustentarse con constancias de colocación, contratos de crédito y, en su caso, cartas de organismos internacionales o bancos de desarrollo que acrediten el carácter preferencial del instrumento. :contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14}",
            },
            {
              type: "paragraph",
              text: "En conclusión, la tributación de intereses para no residentes se apoya en la identificación de la fuente de riqueza, el tipo de instrumento, la calidad del perceptor y la existencia de convenio aplicable. La higiene documental (residencia, beneficiario efectivo, términos del instrumento) es el mejor mitigante para asegurar tasas correctas y evitar contingencias en auditorías.",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.10",
          numbering: "3.10",
          title: "Ingresos por regalías, asistencia técnica o publicidad",
          content: [
            {
              type: "paragraph",
              text: "Para efectos de ISR, se considera que la fuente de riqueza de regalías, asistencia técnica o publicidad se encuentra en México cuando el bien o derecho por el cual se paga se aprovecha en territorio nacional, o cuando el pago lo realiza un residente en México o un establecimiento permanente en el país. Este criterio de territorialidad, previsto en el artículo 167, opera con independencia de dónde se firme el contrato o dónde se encuentre físicamente el titular del derecho, y obliga al pagador en México a practicar la retención correspondiente sobre el ingreso bruto del beneficiario extranjero. :contentReference[oaicite:15]{index=15}",
            },
            {
              type: "paragraph",
              text: "La Ley establece tasas diferenciadas: 5% para el uso temporal de carros de ferrocarril, contenedores, remolques/semirremolques importados temporalmente y ciertas embarcaciones con concesión federal; 1% para aviones concesionados explotados comercialmente; y 25% para regalías distintas de las anteriores y para la asistencia técnica. Para patentes, certificados de invención o mejora, marcas y nombres comerciales, así como por publicidad, aplica la tasa máxima de la tarifa del artículo 152 sobre el excedente del límite inferior. El impuesto se calcula sobre el ingreso sin deducción alguna. :contentReference[oaicite:16]{index=16} :contentReference[oaicite:17]{index=17}",
            },
            {
              type: "accordion",
              header: "Conceptos, alcance y ‘uso o goce’",
              open: false,
              text: "Se entiende que también hay ‘uso o goce’ cuando se enajenan los bienes o derechos referidos en el artículo 15-B del CFF, si la enajenación queda condicionada a productividad, uso o disposición ulterior del bien; en ese caso, las tasas se aplican sobre el ingreso obtenido sin deducción. Adicionalmente, se considera uso o concesión de derechos de autor la retransmisión (satélite, cable, fibra óptica u otros medios) de imágenes y/o sonidos protegidos, o permitir el acceso del público a dichos contenidos. Todo pagador en México debe retener y enterar el impuesto en los plazos legales. :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19}",
            },
            {
              type: "paragraph",
              text: "En contratos mixtos (p. ej., patente + asistencia técnica), el impuesto se determina separando la parte del pago que corresponda a cada concepto y aplicando la tasa respectiva; si no es posible distinguir, se aplica la tasa de la fracción II (25%). Esta regla incentiva una redacción contractual clara con asignación de valores por componente, respaldada por estudios y referencias de mercado para evitar reclasificaciones en auditoría. :contentReference[oaicite:20]{index=20}",
            },
            {
              type: "paragraph",
              text: "En materia de tratados, la definición de regalías puede variar respecto de la doméstica (incluyendo o excluyendo ciertos pagos por software, know-how o servicios técnicos). Por ello, antes de aplicar una tasa reducida conviene verificar si el concepto cae dentro del artículo de regalías, del de servicios empresariales, o si queda fuera del tratado (y, por tanto, se aplica la ley doméstica). Asimismo, las cláusulas de beneficiario efectivo y de limitación de beneficios pueden condicionar el acceso a tasas preferenciales.",
            },
            {
              type: "accordion",
              header: "Buenas prácticas contractuales",
              open: false,
              text: "• Definir con precisión el objeto (derecho de uso, transmisión, asistencia técnica, publicidad). • Establecer métricas de aprovechamiento en México (territorio, audiencia, medios). • Fraccionar el precio por componente y anexar soportes técnicos. • Prever obligaciones de retención, constancias y documentación de residencia/beneficiario efectivo. • Incluir cláusulas de cooperación para auditorías. Estas prácticas facilitan la correcta clasificación, el cálculo de retenciones y la defensa ante la autoridad. :contentReference[oaicite:21]{index=21} :contentReference[oaicite:22]{index=22}",
            },
            {
              type: "paragraph",
              text: "En síntesis, el artículo 167 articula una regla de fuente por aprovechamiento y por pagador residente, con tasas específicas y obligaciones de retención. La claridad contractual y la evidencia del uso en México son determinantes para la correcta tributación y para evitar controversias sobre si un pago es regalía, servicio u otro concepto distinto. :contentReference[oaicite:23]{index=23}",
            },
          ],
          subthemes: [],
        },

        {
          id: "1.11",
          numbering: "3.11",
          title: "Ingresos por servicios de construcción de obra",
          content: [
            {
              type: "paragraph",
              text: "Los servicios de construcción de obra, instalación, mantenimiento o montaje en inmuebles ubicados en México —así como actividades de inspección o supervisión relacionadas— se consideran con fuente de riqueza en territorio nacional cuando se realizan en el país. En consecuencia, si el prestador es residente en el extranjero, el pago queda sujeto a retención de ISR por parte de quien efectúa el pago en México. La determinación legal prevé una tasa aplicable sobre el ingreso bruto, sin deducción alguna, con opción a un tratamiento alternativo para quienes cuenten con representante en el país que cumpla los requisitos del artículo 174. :contentReference[oaicite:24]{index=24}",
            },
            {
              type: "paragraph",
              text: "La tasa doméstica es del 25% sobre el monto efectivamente pagado, sin deducción. Esta mecánica simplifica la administración, pero puede resultar onerosa frente a márgenes reducidos. Por ello, la figura de representante en México permite a ciertos contribuyentes optar por aplicar la ‘tasa máxima’ de la tarifa del artículo 152 sobre el excedente del límite inferior (esquema progresivo) cuando se cumplan las condiciones, lo que puede optimizar la carga fiscal efectiva. En todos los casos, la persona que paga está obligada a retener y enterar el impuesto en los plazos legales. :contentReference[oaicite:25]{index=25}",
            },
            {
              type: "accordion",
              header: "Alcance y delimitaciones",
              open: false,
              text: "El artículo 168 abarca construcción, instalación, mantenimiento y montaje en inmuebles, además de inspección o supervisión vinculadas; cubre tanto obras nuevas como trabajos de adecuación o modernización. La clave es que la actividad se ejecute en México, independientemente del lugar donde se firme el contrato o se facture. Cuando la operación se realice a través de un EP (establecimiento permanente), la tributación podría migrar al Título II conforme a reglas de EP; en ausencia de EP, rige el esquema de retención sobre ingreso bruto. :contentReference[oaicite:26]{index=26}",
            },
            {
              type: "paragraph",
              text: "Desde el punto de vista operativo, los contratos deben especificar objeto, ubicación de la obra, calendario, hitos de pago y criterios de avance físico. Esto permite determinar con precisión el momento de la retención y el monto sujeto a impuesto. Asimismo, es conveniente desglosar si existen suministros de bienes o sólo prestación de servicios, para evitar confusiones con regímenes de importación o con otras figuras impositivas locales que puedan incidir indirectamente en el proyecto.",
            },
            {
              type: "paragraph",
              text: "En proyectos complejos (p. ej., EPC, llave en mano), la desagregación de actividades (ingeniería, procura, construcción) y la segmentación de pagos reducen controversias sobre la base gravable y facilitan la aplicación de tasas correctas. Cuando intervienen subcontratistas extranjeros, el contratante principal debe verificar si actúa como retenedor por los pagos que canaliza y confirmar que cada subcontratista cumpla con sus propias obligaciones de registro y documentación.",
            },
            {
              type: "accordion",
              header: "Controles y documentación",
              open: false,
              text: "Buenas prácticas: (i) checklists de requisitos del representante en México para ejercer la opción de tarifa; (ii) constancias de retención y enteros oportunos; (iii) evidencia de localización de la obra y bitácoras de campo; (iv) contratos con desgloses claros de conceptos; (v) expedientes de KYC de subcontratistas; y (vi) revisión de tratados para evaluar si hay beneficios aplicables (aunque usualmente construcción se grava por fuente en México). Estas medidas fortalecen la defensa en auditoría y reducen riesgos de ajustes. :contentReference[oaicite:27]{index=27}",
            },
            {
              type: "paragraph",
              text: "En conclusión, el régimen de construcción de obra para no residentes se basa en una regla territorial nítida y una retención simple sobre base bruta. La planeación contractual y la gestión documental son esenciales para asegurar el cálculo correcto, aprovechar opciones disponibles y sostener la posición del contribuyente ante eventuales revisiones. :contentReference[oaicite:28]{index=28}",
            },
          ],
          subthemes: [],
        },
        {
          id: "1.12",
          numbering: "3.12",
          title: "Ingresos por obtención de premios",
          content: [
            {
              type: "paragraph",
              text: "Este apartado se centra en la tributación aplicable cuando un residente en el extranjero obtiene premios vinculados con loterías, rifas, sorteos, juegos con apuestas y concursos celebrados en México. La fuente de riqueza se ubica en territorio nacional cuando el evento se celebra en el país; salvo prueba en contrario, se presume celebrado en México cuando el premio se paga en el mismo. Esta regla de localización es clave para definir la sujeción al Título V de la LISR y determinar las obligaciones de retención o, en su caso, de declaración directa por parte del contribuyente o del pagador del premio. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "En términos de tasas, la LISR prevé un tratamiento diferenciado: para premios de loterías, rifas, sorteos y concursos, se aplica 1% sobre el valor del premio por cada boleto o billete entero si las entidades federativas no gravan (o gravan hasta 6%); cuando el impuesto local excede 6%, la tasa federal sube a 21%. En juegos con apuestas, el 1% se calcula sobre el monto total a distribuir entre los boletos premiados. El reintegro del costo del billete no se considera premio. Estos parámetros operativos definen la base y facilitan la determinación de la retención. :contentReference[oaicite:1]{index=1}",
            },

            /* Imagen entre los párrafos 2 y 3 */
            {
              type: "image",
              src: "https://www.soyconta.com/wp-content/uploads/2022/09/beneficio_empresarial_y_fuente_de_riqueza.png",
              alt: "Esquema de fuente de riqueza y tasas aplicables a premios (1% / 21%)",
            },

            {
              type: "paragraph",
              text: "Respecto del entero del impuesto, si quien paga el premio es residente en México o residente en el extranjero con establecimiento permanente en el país, procede la retención; si el pagador es un residente en el extranjero sin EP en México, el contribuyente realiza el pago mediante declaración en oficinas autorizadas en los quince días siguientes a la obtención del ingreso. Esta secuencia asegura que el ingreso gravado por premio quede efectivamente sujeto a control y trazabilidad ante la autoridad fiscal. :contentReference[oaicite:2]{index=2}",
            },

            /* Acordeón 1 (texto largo) */
            {
              type: "accordion",
              header: "Determinantes de la fuente de riqueza en premios",
              open: false,
              text: "La noción de celebración del evento en territorio nacional opera como gatillo jurídico para configurar la sujeción al Título V. Si el sorteo o concurso se organiza y paga en México, se integra la fuente de riqueza mexicana y, con ello, la obligación de retener o declarar. Para mitigar controversias de localización, la presunción iuris tantum de que el evento se celebra en el país cuando el premio se paga aquí aporta seguridad operativa al retenedor. En la práctica, los organizadores deben documentar bases del sorteo, reglas de participación, mecanismos de pago y comprobantes de entrega del premio; esa evidencia sustenta el cálculo de la base (valor del premio por boleto o billete) y la aplicación de la tasa correcta (1% o 21%, según el gravamen local). Finalmente, distinguir el reintegro del billete del concepto de ‘premio’ evita sobredeterminaciones de la base y asegura consistencia contable y fiscal conforme a la LISR. :contentReference[oaicite:3]{index=3}",
            },

            /* Acordeón 2 (texto largo) */
            {
              type: "accordion",
              header: "Retenciones y calendario de entero",
              open: false,
              text: "Cuando el pagador del premio sea un residente en México o un EP de residente en el extranjero, la retención es el mecanismo primario de recaudación. La obligación de enterar el impuesto retenido recae en el retenedor dentro de los plazos establecidos por las disposiciones generales de retenciones del Título V; si el pagador es un no residente sin EP, la carga se traslada al ganador, quien debe presentar la declaración y efectuar el pago dentro de los quince días siguientes a la obtención del ingreso. Documentar la determinación de la base (valor del premio) y la tasa aplicable, así como conservar los CFDI y acuses, resulta crucial para efectos de comprobación. La coherencia entre las reglas del evento, el comprobante de pago y la liquidación del impuesto es el mejor salvavidas ante revisiones. :contentReference[oaicite:4]{index=4}",
            },
          ],
          subthemes: [],
        },

        /* 3.13. Ingresos por actividades artísticas o deportivas */
        {
          id: "1.13",
          numbering: "3.13",
          title: "Ingresos por actividades artísticas o deportivas",
          content: [
            {
              type: "paragraph",
              text: "Comprende los ingresos que obtienen personas físicas o morales por actividades artísticas o deportivas realizadas en México. La regla de fuente de riqueza descansa en el lugar de la ejecución de la actividad; así, cuando el espectáculo, función o presentación se lleva a cabo en territorio nacional, los pagos derivados se sujetan a la tributación aplicable a residentes en el extranjero. Esta calificación opera con independencia de que el contratista y el artista/deportista sean entidades distintas, siempre que el desempeño (actuación, concierto, torneo) ocurra en el país. :contentReference[oaicite:5]{index=5}",
            },
            {
              type: "paragraph",
              text: "La LISR (art. 170) estructura la determinación del impuesto con base en el ingreso efectivamente pagado o acreditado, habilitando la retención por el pagador residente en México o con establecimiento permanente en el país. En proyectos con múltiples fechas, la coordinación tributaria implica calendarizar pagos y retenciones por evento, además de identificar viáticos, derechos de transmisión, patrocinios y otros conceptos que puedan integrar el ingreso gravado. En contratos triangulados (agencia o management), el análisis debe mirar quién disfruta materialmente de la contraprestación y si ésta beneficia a un no residente, a fin de no subestimar la base. :contentReference[oaicite:6]{index=6}",
            },

            /* Imagen entre los párrafos 2 y 3 */
            {
              type: "image",
              src: "https://imagenes.eleconomista.com.mx/files/image_768_768/uploads/2022/03/25/66e45181e1ca1.jpeg",
              alt: "Diagrama de flujos: promotor, artista/deportista y retención en México",
            },

            {
              type: "paragraph",
              text: "Operativamente, la contratación debe prever cláusulas de retención, comprobación y reembolsos, así como lineamientos sobre derechos de imagen y transmisión que puedan generar ingresos complementarios. En giras internacionales, conviene alinear el calendario fiscal con el itinerario para evitar acumulaciones de pago al cierre que compliquen el entero oportuno. El expediente documental (contrato, CFDI, nóminas artísticas cuando proceda, evidencia de eventos y pagos bancarios) es la prueba de control de riesgos frente a revisiones.",
            },

            /* Acordeón 1 (texto largo) */
            {
              type: "accordion",
              header: "Casos con intermediarios y derechos conexos",
              open: false,
              text: "Cuando interviene una promotora o productora, la determinación del sujeto del impuesto exige identificar si el artista o deportista percibe el ingreso directamente o a través de un vehículo. Si el beneficiario efectivo es no residente y el evento se realizó en México, el ingreso queda sujeto a la mecánica del Título V, correspondiendo al pagador en México practicar la retención. También deben revisarse pagos por derechos de imagen, sincronización o transmisión, pues aunque no siempre dependan del desempeño en vivo, pueden vincularse a la misma explotación económica y generar obligaciones de retener en el país.",
            },

            /* Acordeón 2 (texto largo) */
            {
              type: "accordion",
              header: "Checklist de cumplimiento",
              open: false,
              text: "1) Confirmar lugar y fechas de las presentaciones; 2) Clasificar los conceptos pagados (honorarios artísticos/deportivos, viáticos, derechos, patrocinios); 3) Identificar al beneficiario efectivo; 4) Incluir cláusulas de retención y entero; 5) Emitir CFDI/constancias de retención; 6) Conservar evidencia del evento (programas, boletaje, contratos con recintos); 7) Verificar posibles tratados para evitar la doble imposición, sin omitir la mecánica doméstica del Título V.",
            },
          ],
          subthemes: [],
        },

        /* 3.14. Ingresos por mediaciones sujetos a regímenes fiscales preferentes */
        {
          id: "1.14",
          numbering: "3.14",
          title:
            "Ingresos por mediaciones sujetos a regímenes fiscales preferentes",
          content: [
            {
              type: "paragraph",
              text: "Este rubro aborda ingresos por ‘mediaciones’ (comisiones, corretajes, agencia, distribución, consignación, estimatorio, entre otros) obtenidos por no residentes y sujetos a regímenes fiscales preferentes. La LISR establece una tasa del 40% sobre dichos ingresos, sin deducción alguna, cuando se configuran las condiciones previstas, operando como regla especial frente a las disposiciones generales del Título V. La fuente de riqueza se ubica en México si el pagador es residente en el país o un establecimiento permanente de un no residente. :contentReference[oaicite:7]{index=7} :contentReference[oaicite:8]{index=8}",
            },
            {
              type: "paragraph",
              text: "Existen excepciones relevantes: no aplica la regla del 40% a dividendos y utilidades distribuidas por personas morales, ni a ciertos intereses pagados a bancos extranjeros o a intereses derivados de la colocación de títulos, los cuales se rigen por artículos específicos (10, 77 y 166 LISR), siempre que se cumplan los requisitos de tales disposiciones. Estas salvedades delimitan el alcance de la figura y evitan solapamientos con otros capítulos de la ley. :contentReference[oaicite:9]{index=9}",
            },

            /* Imagen entre los párrafos 2 y 3 */
            {
              type: "image",
              src: "https://imgv2-2-f.scribdassets.com/img/document/419463398/original/207ce16eca/1?v=1",
              alt: "Mapa conceptual de mediaciones y tasa del 40% con excepciones",
            },

            {
              type: "paragraph",
              text: "En la práctica, la calificación como ‘mediación’ requiere revisar el contrato y el desempeño real (gestión de intereses ajenos) y acreditar que el ingreso proviene de servicios de intermediación. El pagador debe incluir cláusulas de retención, conservar contratos y acuses de entero, y confirmar si aplica una excepción. La correcta identificación evita una indebida aplicación de la tasa general del Título V o, por el contrario, omitir la regla especial del 40%. :contentReference[oaicite:10]{index=10}",
            },

            /* Acordeón 1 (texto largo) */
            {
              type: "accordion",
              header: "Alcance del concepto ‘mediaciones’",
              open: false,
              text: "‘Mediaciones’ abarca comisiones y servicios de interposición en negocios ajenos: corretaje, agencia, distribución, consignación o estimatorio, así como la gestión de intereses de terceros. El denominador común es la intermediación: el mediador no adquiere la titularidad del negocio final, sino que lo facilita. En esquemas transfronterizos, el punto crítico es demostrar dónde reside el pagador y si existe establecimiento permanente en México, pues ambos factores activan la fuente de riqueza y la obligación de retener. :contentReference[oaicite:11]{index=11}",
            },

            /* Acordeón 2 (texto largo) */
            {
              type: "accordion",
              header: "Excepciones y coordinación normativa",
              open: false,
              text: "Las excepciones sobre dividendos e intereses delinean un perímetro de aplicación que remite a regímenes y tasas propios en los artículos 10, 77 y 166. Esta coordinación evita doble gravamen sobre la misma base y reubica la carga en los supuestos expresamente regulados (por ejemplo, intereses bancarios del exterior y títulos colocados). Antes de retener 40%, verifique si el pago encaja en una excepción y si se cumplen sus requisitos formales (p. ej., documentación de la naturaleza del instrumento financiero). :contentReference[oaicite:12]{index=12}",
            },
          ],
          subthemes: [],
        },

        /* 3.15. Otros ingresos gravables */
        {
          id: "1.15",
          numbering: "3.15",
          title: "Otros ingresos gravables",
          content: [
            {
              type: "paragraph",
              text: "Además de los supuestos específicos del Título V, la LISR contempla ‘otros ingresos’ gravables para residentes en el extranjero con fuente de riqueza en México. Entre ellos destacan: i) el importe de deudas perdonadas por un acreedor residente en México o residente en el extranjero con establecimiento permanente en el país; ii) pagos por otorgar el derecho a participar en un negocio o inversión, o para celebrar actos jurídicos; y iii) los derivados de indemnizaciones por perjuicios y de cláusulas penales o penas convencionales, cuando el pagador sea residente en México o EP de no residente. :contentReference[oaicite:13]{index=13}",
            },
            {
              type: "paragraph",
              text: "Estos conceptos se consideran gravables por mandato del artículo 172 LISR, que amplía el espectro de ingresos sujetos a retención o pago. En todos los casos, el eje es la fuente de riqueza mexicana: se atiende al lugar de realización del acto (p. ej., el negocio o inversión en México) o a la residencia del pagador (residente en México o EP de no residente). Esta lógica evita vacíos cuando los ingresos no encajan en categorías previas del Título V, pero materialmente implican capacidad contributiva vinculada al país. :contentReference[oaicite:14]{index=14} :contentReference[oaicite:15]{index=15}",
            },

            /* Imagen entre los párrafos 2 y 3 */
            {
              type: "image",
              src: "https://static.wixstatic.com/media/6a8ed8_e77d92077b79483385a94d42926797d5~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6a8ed8_e77d92077b79483385a94d42926797d5~mv2.jpg",
              alt: "Tabla-resumen de ‘otros ingresos’ gravables (deudas perdonadas, derechos para participar, indemnizaciones)",
            },

            {
              type: "paragraph",
              text: "En materia de cumplimiento, la persona que efectúe el pago suele fungir como retenedor y debe enterar el impuesto en los plazos marcados por la norma; cuando proceda declaración, el entero se realiza dentro de los quince días siguientes al pago del ingreso. Para mitigar contingencias, es recomendable documentar la naturaleza del acto, la residencia de las partes y los soportes del cálculo (contratos, liquidaciones, constancias de retención, pagos bancarios). :contentReference[oaicite:16]{index=16}",
            },

            /* Acordeón 1 (texto largo) */
            {
              type: "accordion",
              header:
                "Deudas perdonadas, derechos para participar e indemnizaciones",
              open: false,
              text: "El perdón de deudas configura un ingreso cuando existe un acreedor residente en México (o EP de no residente) que condona total o parcialmente la obligación. Los pagos para participar en negocios o inversiones —u otros actos jurídicos— serán gravables si el negocio o acto se realiza en territorio nacional, salvo que se trate de aportaciones al capital social. En indemnizaciones por perjuicios o penas convencionales, la residencia del pagador activa la fuente de riqueza. En todos los casos, el expediente debe sustentar el nexo territorial, la cuantía y el momento de acumulación a efectos de retención. :contentReference[oaicite:17]{index=17}",
            },

            /* Acordeón 2 (texto largo) */
            {
              type: "accordion",
              header: "Control interno y evidencia de cumplimiento",
              open: false,
              text: "Para pagos únicos y no recurrentes, conviene activar un flujo de revisión exprés: 1) identificar el supuesto del art. 172 aplicable; 2) verificar residencia del pagador y, en su caso, lugar de realización del acto; 3) determinar la base (importe total del pago/condonación) y proceder a la retención o a la declaración; 4) emitir CFDI o constancia de retención; 5) archivar contrato, comprobantes y acuses de entero. Este control de punta a punta reduce el riesgo de omisiones y facilita respuestas ante requerimientos. :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19}",
            },
          ],
          subthemes: [],
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
          href: "", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Normas APA (7.ª edición) — Guía en PDF https://normas-apa.org/wp-content/uploads/Guia-Normas-APA-7ma-edicion.pdf",
            // Fuente: Plantilla de Material Complementario - Sesión 4
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
            "México. Congreso de la Unión. (Texto vigente). *Ley del Impuesto sobre la Renta (LISR).* Diario Oficial de la Federación — Título V (p. ej., arts. 153, 152 y 167).",
            "México. Congreso de la Unión. (Texto vigente). *Código Fiscal de la Federación (CFF).* Diario Oficial de la Federación — (p. ej., arts. 26 y 58-A).",
            "México. Congreso de la Unión. (Texto vigente). *Ley Aduanera.* Diario Oficial de la Federación — disposiciones sobre importación temporal aplicables.",
            "Universidad Euro Hispanoamericana. (2024). *Material de estudio – Impuestos Internacionales. Unidad III: Residentes en el extranjero con generación de ingresos en México.* UEH en línea.",
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
