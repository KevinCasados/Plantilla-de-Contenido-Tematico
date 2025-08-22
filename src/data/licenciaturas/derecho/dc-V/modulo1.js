/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LD", // Licenciatura en Derecho
  courseId: "DCV", // Derecho Civil V
  id: "DCV-mod1",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Derecho Civil V",
  title: "Módulo 1. Contratos preparatorios y traslativos de dominio",
  semestre: "5.º (Quinto)",
  teacher: "Ma. de Lourdes Suárez Hernández",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Que el alumno conozca los conceptos fundamentales de los contratos preparatorios —en particular la promesa de contrato y sus características— y de los contratos traslativos de dominio y su clasificación; que identifique y comprenda la permuta y la donación (definición, elementos, donación entre vivos y mortis causa, efectos, revocación) y el mutuo (simple y con interés) con sus elementos.",
  competencies: [
    "Distinguir entre contratos preparatorios y contratos traslativos de dominio.",
    "Explicar la promesa de contrato, sus características y supuestos (a término y bajo condición suspensiva).",
    "Clasificar los contratos traslativos de dominio y describir su función jurídica.",
    "Analizar la compraventa: características generales, clasificación, elementos personales, reales y formales, materia, capacidad, obligaciones de las partes, entrega y modalidades.",
    "Comparar permuta y compraventa: semejanzas y diferencias esenciales.",
    "Definir la donación y sus elementos; diferenciar donación universal, entre vivos y mortis causa; identificar quiénes pueden recibir donaciones; explicar efectos, perjuicio a acreedores y revocación.",
    "Caracterizar el mutuo simple y el mutuo con interés e identificar sus elementos.",
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
      numbering: "Unidad 1",
      title: "Contratos preparatorios y traslativos de dominio",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad delimita, con enfoque sistemático y práctico, el estudio de los contratos preparatorios —en particular, la promesa de contrato— y de los contratos traslativos de dominio: compraventa, permuta, donación y mutuo. La meta es que el estudiante domine conceptos, elementos y efectos, y sea capaz de identificar, redactar y validar acuerdos con solvencia técnica. Partimos de la noción de contrato como acuerdo de voluntades generador de obligaciones y situamos a los preparatorios como etapa de aseguramiento de la futura contratación definitiva (obligaciones de hacer, condiciones y términos). En la vertiente traslativa de dominio, el acento recae en la transmisión de la propiedad o de un derecho real, atendiendo a su estructura, modalidades y límites. A lo largo de la unidad se trabajará con esquemas comparativos, checklists de validez (capacidad, objeto, forma) y criterios de motivación jurídica, de modo que cada figura se comprenda en su contexto normativo y económico. El hilo conductor será la función social y económica del tráfico jurídico: asignar bienes y riesgos con seguridad y equidad.",
        },
        {
          type: "paragraph",
          text: "Los contratos preparatorios cumplen una función jurídica —no económica inmediata—: generan obligaciones de hacer encaminadas a la futura celebración de un contrato definitivo. La promesa de contrato, eje de esta familia, exige precisión en sujetos, objeto, contraprestación (si la hubiere) y plazo o condición, pues sólo así orienta con eficacia la negociación hacia el acuerdo final. Analizaremos la promesa ‘a término’, que fija un horizonte temporal cierto para cumplir, y la promesa ‘bajo condición suspensiva’, donde la exigibilidad depende de un acontecimiento futuro e incierto. Para un uso profesional, es crucial distinguir actos preparatorios de ofertas o cartas de intención sin efectos vinculantes, y documentar la voluntad con lenguaje claro, salvaguardas de responsabilidad y mecanismos de solución de controversias. El estudiante aprenderá a detectar riesgos típicos —indeterminación del objeto, plazos ambiguos, condiciones imposibles o ilícitas— y a corregirlos con cláusulas técnicas. Así, la promesa deja de ser una formalidad para convertirse en herramienta de gestión del proyecto contractual.",
        },
        {
          type: "paragraph",
          text: "Dentro de los contratos traslativos de dominio, la compraventa es el arquetipo: el vendedor se obliga a transferir la propiedad de una cosa o derecho, y el comprador a pagar un precio en dinero. Se estudiará su clasificación civil/mercantil, elementos personales, reales y formales, así como su importancia y función jurídica en el tráfico de bienes. Revisaremos la ‘materia’ de la compraventa (bienes presentes, determinación y licitud), la capacidad de las partes, las obligaciones nucleares (entregar, pagar, sanear) y el ‘momento de la entrega’ (real, jurídica, virtual). Se atenderán modalidades frecuentes —reserva de dominio, a plazos o abonos, ad corpus, de esperanza y cosa esperada— y su impacto en la transferencia y el riesgo. El objetivo es que el estudiante pueda auditar rápidamente un contrato, identificar si la forma exigida es solemne o ad probationem, y evaluar la suficiencia de las garantías. La metodología combina lectura guiada, estudio de casos y ejercicios de calificación y redacción.",
        },
        {
          type: "paragraph",
          text: "La permuta, la donación y el mutuo completan el mosaico de figuras traslativas. La permuta estructura un intercambio de cosa por cosa, con similitudes funcionales a la compraventa pero sin precio en dinero; se analizarán sus efectos y su utilidad práctica cuando el valor no se expresa monetariamente. La donación, negocio esencialmente gratuito, exige atención especial a su definición, elementos (donante, donatario, bienes presentes, forma y aceptación), clases (entre vivos y mortis causa, universal), efectos y causales de revocación, además del potencial perjuicio a acreedores. En el mutuo —simple o con interés— se transfiere dinero o bienes fungibles con obligación de restituir de la misma especie y calidad, explorando límites a los intereses y la prohibición de anatocismo. El abordaje comparado permitirá reconocer puntos de contacto y diferencias, anticipar contingencias (nulidades, vicios del consentimiento, exceso de onerosidad) y diseñar cláusulas de prevención y remedios adecuados.",
        },
        {
          type: "paragraph",
          text: "Para consolidar competencias, la unidad empleará instrumentos de control de calidad contractual: matrices de validez (capacidad–objeto–forma), listas de verificación por figura, rúbricas de análisis de riesgo y guías de motivación de decisiones. Se promoverá el razonamiento probatorio (¿qué documentos acreditan titularidad, capacidad y forma?) y la trazabilidad de la operación (desde la promesa hasta la entrega o restitución). El estudiante elaborará cuadros sinópticos que contrasten compraventa y permuta, y fichas de decisión sobre donación y mutuo según contexto económico y finalidad. Al cierre, se espera que pueda explicar, con seguridad y lenguaje técnico, cuándo usar cada contrato, cómo evitar errores frecuentes y cómo justificar la elección de cláusulas ante revisión judicial o notarial. La premisa es simple y exigente: la excelencia en técnica contractual reduce litigios, baja costos de transacción y añade valor jurídico real a las partes.",
        },

        {
          type: "accordion",
          header: "Mapa de navegación — Unidad 1",
          open: false,
          items: [
            {
              header: "Nivel 1 · Estructura y competencias",
              text: "Objetivo, competencias y resultados de aprendizaje; panorama de preparatorios vs. traslativos; criterios de validez (capacidad, objeto, forma) y de eficacia (entrega, aceptación, restitución).",
            },
            {
              header: "Nivel 2 · Claves doctrinales",
              text: "Promesa a término y bajo condición; elementos y modalidades de la compraventa; permuta vs. compraventa; donación (clases, efectos, revocación, perjuicio a acreedores); mutuo simple y con interés.",
            },
            {
              header: "Nivel 3 · Operativa profesional",
              text: "Checklists de revisión, redacción de cláusulas, evidencias probatorias mínimas, gestión de riesgos y criterios para negociar condiciones y garantías.",
            },
          ],
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        /* 1. CONTRATOS PREPARATORIOS */
        {
          id: "1.1",
          numbering: "1",
          title: "Contratos preparatorios",
          content: [
            {
              type: "paragraph",
              text: "Los contratos preparatorios son acuerdos jurídicos cuyo objetivo es organizar y asegurar la futura celebración de un contrato definitivo (v. gr., compraventa, donación, mutuo). Su función es estrictamente jurídica —no económica inmediata—: no transmiten por sí el dominio ni satisfacen prestaciones finales, pero generan una obligación de hacer consistente en otorgar el contrato prometido cuando se cumplan los supuestos pactados. En esta unidad se abordan su razón de ser, sus límites y su utilidad profesional: convertir una negociación incierta en un itinerario verificable con plazos, condiciones, documentos y remedios. La pieza paradigmática es la promesa de contrato, que exige precisión en sujetos, tipo contractual prometido y elementos esenciales, así como una temporalidad clara (término o condición). Con ello, se evita que la operación dependa de la ‘buena voluntad’ futura y se cierran espacios para retractaciones oportunistas. El enfoque didáctico prioriza la técnica de redacción, la trazabilidad probatoria y la coordinación con notaría/autoridades, de modo que el alumno pueda pasar de la teoría del precontrato a la práctica de un cierre limpio y oponible.",
            },
            {
              type: "paragraph",
              text: "Para que un preparatorio sea eficaz debe cumplir tres exigencias: determinación, temporalidad y gobernanza. Determinación implica identificar con nitidez el contrato definitivo (su tipo y contenido esencial) y describir el objeto de manera determinada o determinable, con referencias técnicas (planos, inventarios, claves catastrales, certificados). La temporalidad se expresa mediante un término (hecho futuro cierto: fecha) o una condición suspensoria (hecho futuro e incierto: autorización, liberación de gravamen, aprobación de crédito) que activa la exigibilidad. La gobernanza articula el ‘cómo’: reglas de cooperación (qué gestiona cada parte), estándares de evidencia (qué documento probará cada hito), prohibiciones de gravar o disponer durante el intermedio y el marco de solución de controversias. Sin estas piezas, la promesa deviene ambigua, difícil de ejecutar y propensa al litigio; con ellas, se transforma en herramienta de gestión de riesgos y de disciplina contractual.",
            },
            {
              type: "paragraph",
              text: "La dimensión probatoria es el ancla del preparatorio. Toda obligación condicionada o sujeta a término requiere evidencias objetivas y oportunas: solicitudes con acuse, resoluciones, certificaciones registrales, constancias fiscales, actas de verificación o fe notarial/digital. La redacción debe anticipar qué documento hará plena fe del acaecimiento del término/condición y quién lo obtiene. También conviene sincronizar vigencias: certificados de libertad de gravamen, catastro, avalúos y dictámenes expiran; si sus fechas no dialogan con la fecha de cierre, el expediente se recalienta y desplaza la culpa. Un diseño profesional incluye ventanas de renovación y backstops (fechas tope) que evitan la ‘hibernación’ del proyecto. Asimismo, la confidencialidad y la exclusividad —cuando se justifiquen— protegen el valor de la negociación y desincentivan prácticas dilatorias, sin aislar al acuerdo de controles de legalidad y competencia.",
            },
            {
              type: "paragraph",
              text: "Desde la perspectiva remedial, el incumplimiento del preparatorio activa vías de tutela que deben quedar expresamente previstas. En operaciones de alta especificidad (un inmueble singular), el remedio natural será el cumplimiento específico (otorgamiento forzoso del contrato definitivo) si la legislación lo permite; en operaciones fungibles, la resolución con indemnización puede ser suficiente. Las cláusulas penales por mora o incumplimiento deben ser proporcionales y con causa; los intereses moratorios no deben encubrir anatocismo. El uso de cuentas de garantía (‘escrow’) y entregas condicionadas al cumplimiento de hitos probados reduce el incentivo al incumplimiento. Por su parte, los mecanismos alternativos de solución de controversias (mediación y arbitraje) preservan relaciones y reducen costos de transacción, siempre que se definan competencia, sede, idioma, reglas y medidas cautelares disponibles. El mensaje operativo es claro: remedios nítidos disuaden la inercia y favorecen cierres voluntarios.",
            },
            {
              type: "paragraph",
              text: "Metodológicamente, se trabajará con plantillas y checklists aplicables a promesa a término y a condición: identificación y capacidad de partes; tipo contractual prometido y esenciales; descripción técnica del objeto; cronograma con responsables; matriz de evidencia; reglas de conservación; política de cambios; y plan de salida ordenada si la condición falla. Se propondrán cuadros comparativos (promesa vs. carta de intención; promesa vs. contrato definitivo) y ejercicios de auditoría rápida de riesgos (indeterminación, condiciones potestativas, forma, competencia territorial). El objetivo es que el estudiante adquiera reflejos profesionales: leer, detectar vacíos, corregir con cláusulas y justificar decisiones ante revisión notarial o judicial. La excelencia en contratos preparatorios no reside en ‘saber definiciones’, sino en diseñar rutas de cierre eficaces, legales y verificables que reduzcan litigios y protejan el interés de ambas partes.",
            },
            {
              type: "accordion",
              header: "Mapa de estudio — Contratos preparatorios",
              open: false,
              items: [
                {
                  header: "Nivel 1 · Concepto y alcance",
                  text: "Qué son, para qué sirven y qué NO hacen (no transfieren dominio). Diferencias con ofertas/carta de intención y con el contrato definitivo.",
                },
                {
                  header: "Nivel 2 · Estructura mínima",
                  text: "Tipo contractual prometido y elementos esenciales • Objeto determinado/determinable • Término o condición • Cooperación y evidencia • Prohibiciones y conservación.",
                },
                {
                  header: "Nivel 3 · Operativa y control",
                  text: "Cronograma y backstops • Matriz probatoria • Cláusulas de remedios (cumplimiento específico/penalidades/ADR) • Errores frecuentes y su corrección.",
                },
              ],
            },
          ],
          subthemes: [
            {
              id: "1.1.1",
              numbering: "1.1",
              title: "Promesa de contrato",
              content: [
                {
                  type: "paragraph",
                  text: "La promesa de contrato es el prototipo de contrato preparatorio: su función es encauzar la voluntad de las partes hacia la celebración futura de un contrato definitivo, dotando a la negociación de certeza, exigibilidad y horizonte temporal. En palabras sencillas, es el instrumento por el cual las partes se comprometen a contratar ‘de verdad’ más adelante, una vez cumplidos ciertos requisitos (plazo, condición, documentación, autorizaciones). En el plano dogmático, la promesa no transmite propiedad ni despliega, por sí, los efectos económicos del contrato final; genera, en cambio, una obligación de hacer: otorgar el contrato prometido cuando se actualicen los supuestos pactados. Esta naturaleza explica que su eficacia dependa de precisión: sujetos claramente identificados, objeto determinado o determinable, señalamiento del contrato prometido y sus elementos esenciales, y previsión de un término o condición que active la exigibilidad. De ahí que, en la práctica, la promesa funcione como un ‘cinturón de seguridad’ de la negociación: impide retractaciones oportunistas, ordena la documentación previa y reduce el riesgo de litigio por expectativas defraudadas. Su utilidad didáctica radica en mostrar, con nitidez, la frontera entre querer negociar y obligarse jurídicamente a concluir un negocio típico con requisitos de validez completos.",
                },

                {
                  type: "paragraph",
                  text: "El material subraya el valor práctico de la promesa: brinda certeza temporal (‘cuándo’), delimita el contenido mínimo del negocio (‘qué’) y define la conducta debida (‘cómo’ se concluirá). Para alcanzar ese estándar, la redacción debe reflejar con fidelidad el tipo contractual prometido (v. gr., compraventa de inmueble, donación entre vivos, mutuo con interés), incorporando sus elementos esenciales: capacidad, objeto lícito y determinado, forma, precio/contraprestación cuando proceda. La estipulación de un **plazo** cierto convierte la promesa en un compromiso exigible a fecha; la previsión de una **condición suspensiva** (p. ej., autorización administrativa, expedición de certificados registrales, obtención de crédito) hace depender la exigibilidad de un hecho futuro e incierto. Un buen diseño separa con claridad condiciones potestativas ilícitas (depender únicamente del arbitrio de una parte) de condiciones legítimas ligadas a hechos verificables. Finalmente, deben agregarse cláusulas de continuidad (cooperación, entrega de documentos), remedios (indemnización por incumplimiento, ejecución forzosa si la ley lo admite) y mecanismos de solución de controversias. Así, la promesa abandona la vaguedad y se convierte en herramienta profesional.",
                },

                {
                  type: "accordion",
                  header: "Elementos mínimos de una promesa eficaz",
                  open: false,
                  text: "Sujetos identificados • Tipo y contenido esencial del contrato prometido • Objeto determinado/determinable y lícito • Plazo o condición • Reglas de cooperación (documentos, gestiones) • Remedios ante incumplimiento • Vía de solución de controversias.",
                },

                {
                  type: "paragraph",
                  text: "Desde la perspectiva probatoria, lo decisivo es la **trazabilidad**: toda promesa debe anclarse en documentos que acrediten facultades y riesgos. Si se promete enajenar un bien, el promitente vendedor debe exhibir indicios serios de titularidad o disponibilidad (títulos, antecedentes registrales, situación fiscal y gravámenes). Si se promete un mutuo, conviene probar solvencia o fuentes de fondeo. La carga de la prueba del incumplimiento —y de la actualización del término/condición— se aligera cuando la promesa prevé qué documentos, certificados o constancias harán fe suficiente. De no hacerlo, la controversia se desplaza a discutir si hubo o no cooperación, retrasando la conclusión del negocio definitivo. El material enfatiza que, aun cuando el contrato preparatorio tiene ‘función jurídica pero no económica’, su impacto económico es indirecto: al disciplinar el proceso, abarata costos de transacción y mitiga conductas oportunistas.",
                },

                {
                  type: "paragraph",
                  text: "Conviene distinguir la promesa de otras figuras afines. No es una ‘carta de intención’ sin fuerza obligatoria: en la promesa hay vínculo jurídico para celebrar el contrato futuro. Tampoco es el contrato definitivo: la transferencia del dominio o la entrega del dinero (según el tipo prometido) ocurrirá al celebrarse el negocio principal, no por el mero otorgamiento de la promesa. En compraventa de inmuebles, por ejemplo, la promesa ordena las verificaciones previas (situación registral, gravámenes, posesión, licencias), pacta el precio y los pagos escalonados, define quién asume gastos e impuestos, y fija la fecha o condición para elevar a escritura el contrato definitivo. En donación, puede reservar tiempo para obtener autorizaciones o clarificar el alcance (universal/entre vivos/mortis causa). En mutuo, la promesa puede depender de la disponibilidad de fondos o de la evaluación de riesgo del deudor. La clave es que la promesa sea operativa y verificable.",
                },

                {
                  type: "accordion",
                  header: "Errores frecuentes (y cómo evitarlos)",
                  open: false,
                  text: "Objeto indeterminado → describir con precisión. • Plazo ambiguo → fijar fecha o evento verificable. • Condición potestativa ilícita → sustituir por condición objetiva. • Confundir promesa con contrato definitivo → separar efectos y tiempos. • Falta de remedios → prever indemnización/ejecución.",
                },

                {
                  type: "paragraph",
                  text: "En síntesis, la promesa de contrato es un **compromiso exigible** que prepara la celebración del negocio definitivo. Su fuerza proviene de la claridad del objeto y del itinerario hacia el contrato final: documentación, plazos/condiciones, cooperación y remedios. Bien diseñada, evita que la negociación se disuelva en meras ‘pláticas’; mal redactada, genera litigios por incumplimiento o, peor aún, por falta de determinación. El módulo insiste en su función institucional: crear una situación previa que haga posible y seguro el contrato futuro; esto reclama técnica en redacción, previsión de pruebas y una administración responsable de tiempos y contingencias.",
                },
              ],
            },
            {
              id: "1.1.2",
              numbering: "1.2",
              title: "Características",
              content: [
                {
                  type: "paragraph",
                  text: "Las características de los contratos preparatorios, conforme al módulo, resaltan su **función jurídica y no económica inmediata**. Ello significa que, por sí solos, no transfieren dominio ni provocan los efectos patrimoniales del contrato definitivo; generan, en cambio, obligaciones de hacer encaminadas a la futura perfección del negocio prometido. De esta naturaleza derivan rasgos identificables: (i) su objeto es la **obligación de celebrar** un contrato típico a futuro; (ii) su eficacia requiere precisión de elementos esenciales del negocio prometido (v. gr., en compraventa: cosa y precio; en mutuo: cantidad, especie y, en su caso, interés); (iii) son instrumentos de **gestión de riesgo**: fijan plazos o condiciones, definen cooperación documental y asignan costos; (iv) su incumplimiento activa remedios de responsabilidad, e incluso, cuando la legislación lo admite, **ejecución forzosa** de otorgamiento. Estas notas impiden trivializar la promesa como ‘precontrato inocuo’: si está bien redactada, disciplina la negociación y hace exigible el cierre; si es imprecisa, en cambio, dificulta probar incumplimiento y contamina el proyecto contractual. En suma, su utilidad reside en atar cabos: convertir voluntad en compromiso verificable.",
                },

                {
                  type: "paragraph",
                  text: "Otra característica central es la **determinabilidad** del objeto y del contenido mínimo del contrato futuro. El material advierte que no basta la mera intención de contratar; hay que plasmar con suficiente claridad el tipo contractual y sus elementos esenciales para que, llegado el término o cumplida la condición, sea posible exigir el otorgamiento del contrato definitivo sin agregar voluntad nueva sustancial. En la práctica, esto exige descripciones técnicas de bienes o derechos, referencias a planos, catastro o inventarios, y reglas de sustitución si el bien no coincide con lo esperado (p. ej., tolerancias en superficies en ventas ‘ad corpus’). En paralelo, se recomienda blindar la promesa con **cláusulas de cooperación** (gestiones ante registro, solicitudes de crédito, entrega de constancias), **de conservación** (prohibición de gravámenes y actos de disposición que frustren el contrato futuro) y **de confidencialidad y no negociación en paralelo**. Así, la promesa no sólo compromete, sino que también **organiza** el tránsito hacia el contrato final, reduciendo sorpresas.",
                },

                {
                  type: "accordion",
                  header: "Rasgos nucleares",
                  open: false,
                  text: "Función jurídica (no económica inmediata) • Obligación de hacer (otorgar contrato definitivo) • Precisión de elementos esenciales • Determinabilidad del objeto • Plazo/condición • Cooperación y conservación • Remedios por incumplimiento.",
                },

                {
                  type: "paragraph",
                  text: "Sobre la **temporalidad**, la promesa puede estar sujeta a término (fecha cierta) o a condición suspensiva (hecho futuro e incierto). El término dota de previsibilidad y permite coordinar otros contratos conexos (financiamiento, obras, mudanzas); la condición, por su parte, es útil cuando la exigibilidad depende de terceros o de trámites (p. ej., autorización administrativa, levantamiento de un gravamen). La clave es evitar condiciones potestativas puras —que dependan del capricho de una parte— y favorecer condiciones objetivas y verificables. En ambos supuestos, el expediente probatorio debe prever **qué documento** acreditará el acaecimiento del término/condición (certificado, resolución, fe notarial), para impedir discusiones sobre su cumplimiento. La promesa bien temporalizada evita el ‘tiempo muerto’ que erosiona la confianza y el valor del proyecto.",
                },

                {
                  type: "paragraph",
                  text: "En materia de **capacidad y forma**, rigen las reglas generales: quienes prometen deben tener capacidad para obligarse en el contrato definitivo y observar, si así lo exige el negocio futuro, la forma solemne desde la promesa (v. gr., promesa relativa a inmueble documentada por escrito y con firmas reconocibles para evidenciar autenticidad). Aunque la ley no siempre impone solemnidades a la promesa, el estándar profesional aconseja documentarla con precisión, anexar identificaciones, poderes, títulos y constancias fiscales, y autenticar firmas cuando el riesgo lo justifique. El material insiste en que la promesa no es una formalidad vacía: es una **etapa ordenadora** que condiciona el éxito o fracaso del contrato final. Por eso, la selección de la forma y del nivel de autenticación es una decisión técnica —no estética— con efectos probatorios decisivos.",
                },

                {
                  type: "accordion",
                  header: "Checklist de redacción segura",
                  open: false,
                  text: "• Identidad y facultades de las partes • Descripción técnica del objeto • Tipo contractual prometido + esenciales • Plazo/condición y documento acreditante • Obligaciones de cooperación • Prohibiciones de gravar/disponer • Remedios y jurisdicción/medio alterno.",
                },

                {
                  type: "paragraph",
                  text: "Finalmente, las **consecuencias del incumplimiento** deben quedar nítidas. Si el promitente se rehúsa a otorgar el contrato definitivo vencido el término o cumplida la condición, procede exigir el cumplimiento o, en su caso, la resolución y daños. En negocios de alta especificidad (p. ej., enajenación de un bien único), el remedio natural será el **cumplimiento específico**; en operaciones fungibles, la indemnización puede ser suficiente. Lo importante es que la promesa señale el foro, el estándar probatorio y, si se opta por mecanismos alternativos, el procedimiento (mediación, arbitraje). El diseño claro de remedios desalienta el incumplimiento y, paradójicamente, promueve el cierre voluntario: nadie litiga una promesa sólida si cumplir resulta más racional que incumplir.",
                },
              ],
            },
            {
              id: "1.1.3",
              numbering: "1.3",
              title: "Planes",
              content: [
                {
                  type: "paragraph",
                  text: "En el índice del módulo, ‘Planes’ nombra el contenido que debe explicitarse en la promesa para llevar a puerto el contrato definitivo. Traducido a operativa, se trata de diseñar el **plan de cierre**: qué pasos concretos darán las partes, en qué secuencia y bajo qué estándares, para arribar, sin fricciones, al negocio final. La idea es simple y poderosa: lo que no se planea, se improvisa; y la improvisación es el principal enemigo de la seguridad jurídica. Por eso, los planes se construyen con listas de tareas verificables (entrega de títulos y constancias, obtención de certificados, levantamiento de gravámenes), **cronogramas** (líneas de tiempo con responsables) y **criterios de calidad probatoria** (qué documento acreditará cada hito). Al hacerlo, la promesa deja de ser un mero ‘compromiso de voluntad’ y se convierte en un **proyecto** con hitos de avance y condiciones de aceptación. Así, los planes integran la promesa con su logística.",
                },

                {
                  type: "paragraph",
                  text: "El contenido mínimo de un buen plan incluye: (i) **documentación**: relación de títulos, poderes, identificaciones, comprobantes fiscales, certificados registrales, constancias de libertad de gravamen o de existencia de gravámenes a levantar; (ii) **tareas y responsables**: quién solicita qué, ante qué autoridad y en qué plazo; (iii) **dependencias**: qué hitos dependen de otros (p. ej., sólo se firma el definitivo tras la emisión del certificado registral y la verificación de cargas); (iv) **criterios de aceptación**: cuándo se considera satisfecha una condición o idóneo un documento (p. ej., vigencia no mayor a X días); (v) **mecanismos de control de cambios**: cómo se modifica el plan ante contingencias (retrasos, documentos defectuosos, nuevas cargas). Este diseño responde a la función del preparatorio: crear una ‘situación previa’ ordenada que haga posible el contrato final sin sorpresas.",
                },

                {
                  type: "accordion",
                  header: "Plan de cierre — plantilla mínima",
                  open: false,
                  text: "Documentos exigidos • Cronograma con responsables • Dependencias entre hitos • Criterios de aceptación/verificación • Gestión de riesgos y cambios • Entregables finales (escritura, pagarés, recibos).",
                },

                {
                  type: "paragraph",
                  text: "En contratos prometidos de **compraventa de inmueble**, el plan suele contemplar: verificación de identidad y facultades, obtención de certificados (catastro, registro, libertad de gravamen), revisión de trazos y superficies (‘ad corpus’ o medidas precisas), saneamiento de adeudos fiscales y de servicios, preparación de minuta, programación de firma y pagos escalonados, y registro. En **donación**, los planes aclaran si es universal o particular, entre vivos o mortis causa, quién acepta y en qué forma (expresa/tácita), y qué autorizaciones se requieren. En **mutuo**, el plan fija la transferencia, el calendario de restitución, el interés (si lo hay) dentro de los límites legales, y las garantías. Estandarizar estos planes con listas de verificación reduce fricciones y baja el costo de coordinación entre abogados, notaría y partes.",
                },

                {
                  type: "paragraph",
                  text: "Los planes también deben atender **riesgos**: ¿qué pasa si el certificado vence antes de la firma? ¿y si aparece un gravamen oculto? ¿y si el financiamiento no se autoriza? La promesa puede incorporar cláusulas de **backstop** (fecha máxima para cerrar), **reajuste** (prórrogas automáticas dentro de un margen), y **salida ordenada** (resolución sin responsabilidad si un tercero niega una autorización esencial). Esto evita que la operación se convierta en rehén de contingencias ajenas. En paralelo, debe definirse el **modo de comunicación** y el estándar de evidencia (correos, acuses, fe digital/notarial) para acreditar cumplimiento. Así, el plan no sólo asigna tareas, sino que también crea una cultura de rendición de cuentas.",
                },

                {
                  type: "accordion",
                  header: "Riesgos y mitigaciones",
                  open: false,
                  text: "Vencimiento de certificados → renovar con ventana de X días • Gravamen imprevisto → saneamiento o cuenta de garantía • Financiamiento negado → condición fallida/resolución • Retrasos → prórroga automática con penalidad.",
                },

                {
                  type: "paragraph",
                  text: "Finalmente, un plan serio incluye **cierres alternativos** (closing alternatives). Si el contrato definitivo exige presencia física pero surge un impedimento logístico, el plan puede contemplar firma escalonada, poderes especiales o firma electrónica cuando la normativa lo permita. Si el precio se paga en tramos, se prefiguran cuentas de garantía (‘escrow’), liberaciones condicionadas y facturación secuencial. En todos los casos, la coherencia con el tipo contractual prometido es innegociable: el plan es eficaz cuando cada paso conduce, sin salto lógico, al otorgamiento del contrato final con validez y oponibilidad. Esa es la idea fuerza que el módulo transmite: planear es hacer exigible la calidad jurídica del cierre.",
                },
              ],
            },
            {
              id: "1.1.4",
              numbering: "1.4",
              title: "La promesa y contrato a término",
              content: [
                {
                  type: "paragraph",
                  text: "La promesa y el contrato a término se definen por la incorporación de un plazo cierto que determina el momento en que nace la exigibilidad de la obligación de concluir el contrato definitivo —o, en su caso, de ejecutar la prestación principal—. La esencia del ‘término’ es temporal y objetiva: el acaecimiento no depende de la voluntad de las partes, sino del simple transcurso del tiempo o de una fecha pactada. Esta estructura dota de previsibilidad a la negociación: permite coordinar diligencias, financiamiento, agendas notariales y entrega de documentos, y convierte a la promesa en un compromiso exigible a fecha. En contextos prácticos (p. ej., obras y servicios asociados a construcción o remodelación), la promesa a término asegura que la actividad concluya dentro de una ventana de tiempo determinada; si el término vence sin cumplimiento, se actualiza el incumplimiento y proceden los remedios pactados o legales. El material didáctico enfatiza, mediante ejemplos, la utilidad de esta modalidad para comprometer la conclusión de una obra dentro de un plazo cierto y para anclar responsabilidades por retraso o incumplimiento. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "Dogmáticamente, el término se distingue de la condición en que la llegada del plazo es un hecho futuro **cierto** (inevitable si transcurre el tiempo), mientras que la condición es un hecho **incierto**. Por eso, la técnica contractual exige definir: (i) fecha o calendario con precisión (día, mes, año, hora si es relevante); (ii) reglas de cómputo (naturales/hábiles, zona horaria, tolerancias); (iii) efectos de vencimiento (exigibilidad automática, mora ex re, penalidades, intereses o cláusula penal); y (iv) supuestos de prórroga por causas no imputables (fuerza mayor, caso fortuito, actos de autoridad). Además, debe alinearse el término con el ritmo probatorio: certificados con vigencias definidas, avalúos, constancias fiscales y registrales, cuyo vencimiento puede desfasar la fecha de cierre si no se planifica su renovación. Un contrato a término mal temporalizado genera fricciones: vencimientos cruzados de documentos, imposibilidad de escriturar o de recibir financiamiento, y litigios por mora. La solución no es ‘flexibilizar’ sin método, sino diseñar términos con backstops y ventanas de gracia monitorizadas.",
                },

                {
                  type: "accordion",
                  header: "Checklist de redacción a término",
                  open: false,
                  text: "• Fecha/periodicidad inequívoca • Reglas de cómputo (hábiles/naturales) • Backstop y prórroga tasada • Efectos del vencimiento (mora, penalidad) • Sincronía con vigencias de documentos • Plan de renovación y alertas.",
                },

                {
                  type: "paragraph",
                  text: "En operaciones de transmisión de dominio, un término bien diseñado articula hitos financieros y jurídicos. Por ejemplo, en una compraventa inmobiliaria: (1) fecha para tener lista la minuta; (2) fecha para liberar gravámenes; (3) fecha para integrar expediente fiscal y registral; (4) fecha de firma y pago; y (5) fecha de inscripción. Si la promesa establece un término único para ‘cerrar’, el plan adjunto debe desglosar subfechas y dependencias. En proyectos de obra, el término puede dividirse en ‘entregables’ (avance del 30%/60%/100%) asociados a pagos; la promesa, entonces, no sólo encamina al contrato definitivo, sino que también alinea desempeño y flujo de caja. Desde la perspectiva del acreedor, la fijación de término reduce la incertidumbre; desde la del deudor, evita exigencias prematuras y permite organizar recursos.",
                },
                {
                  type: "paragraph",
                  text: "La gobernanza del término requiere un sistema de **notificaciones y constancias**: avisos de cumplimiento, actas de verificación, certificaciones de avance, fe notarial o digital. La prueba documental es el ancla de la exigibilidad. De poco sirve fijar una fecha si no se prevé cómo demostrar, de modo objetivo, que se cumplieron las etapas o que el incumplimiento es imputable. En la planificación, son críticas las ‘ventanas’ de renovación de documentos (libertad de gravamen, no adeudo, catastro), pues el vencimiento casual reprograma el cierre y contamina la responsabilidad. Cláusulas de cooperación y de ‘best efforts’ —vinculadas a hitos verificables— ayudan a demostrar diligencia; su ausencia alimenta controversias sobre mora o culpa.",
                },

                {
                  type: "accordion",
                  header: "Riesgos comunes y mitigaciones",
                  open: false,
                  text: "• Vencimiento de certificados → renovación automática y calendario • Retrasos de terceros → prórroga tasada con prueba • Términos ambiguos → fechas exactas y zona horaria • Multiplicidad de plazos → cronograma maestro con dependencias.",
                },

                {
                  type: "paragraph",
                  text: "Remedios. Vencido el término sin cumplimiento, procede la **exigibilidad** del otorgamiento (cumplimiento específico) cuando la ley lo permite, o la resolución con daños y perjuicios. La cláusula penal liquida anticipadamente el daño por retraso o incumplimiento; no debe ser confiscatoria ni desproporcionada. También pueden pactarse intereses moratorios, retenciones en garantía o cuentas de depósito (‘escrow’) que liberen fondos sólo si se acredita el avance. Por último, un diseño prudente incorpora mecanismos alternativos de solución de controversias para preservar relaciones comerciales y reducir costos de transacción. El material docente ilustra el uso del término en contextos de obra y la relevancia de su cumplimiento oportuno como condición de éxito del proyecto y de tutela del acreedor. :contentReference[oaicite:2]{index=2}",
                },
              ],
            },
            {
              id: "1.1.5",
              numbering: "1.5",
              title: "Promesa y contrato bajo condición suspensoria",
              content: [
                {
                  type: "paragraph",
                  text: "La condición suspensoria es la cláusula por la cual la exigibilidad de la obligación queda sujeta a la realización de un hecho futuro e incierto; mientras la condición no se cumple, la obligación existe en estado latente y no puede exigirse. Trasladada a los contratos preparatorios, la promesa ‘bajo condición’ asegura que el otorgamiento del contrato definitivo sólo proceda si acontece el evento pactado: autorización administrativa, obtención de financiamiento, liberación de un gravamen, emisión de un certificado registral, entre otros. Esta ingeniería protege a las partes frente a contingencias no controlables y evita cierres forzados sin condiciones de seguridad jurídica o económica. El material del módulo lo explica con claridad: la condición suspensoria puede suspender el cumplimiento de una obligación hasta que el hecho ocurra; sólo entonces deviene exigible. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "paragraph",
                  text: "La técnica de redacción exige: (i) **definir con precisión** el evento condicionante, en términos verificables y no potestativos; (ii) **asignar cargas de gestión** (quién tramita, ante qué autoridad, con qué plazos); (iii) **establecer evidencia suficiente** del acaecimiento (resolución, certificado, fe notarial); y (iv) prever el **escenario de fracaso**: si la condición no se cumple en un plazo máximo (long stop date), ¿se extingue la promesa sin responsabilidad? ¿procede devolución de anticipos? ¿se activan gastos reembolsables? En condiciones complejas, conviene segmentar subcondiciones (p. ej., financiamiento aprobado, avalúo mínimo, no variación adversa material ‘MAC’) y declarar su interdependencia. El estándar profesional también pide evitar condiciones ilícitas o imposibles (contrarias a la ley o físicamente inviables), que harían nulo el pacto o convertirían la obligación en perpetuamente inejecutable. Con esta disciplina, la condición deja de ser un ‘comodín de salida’ para transformarse en verdadero **mecanismo de tutela** de la calidad del cierre.",
                },

                {
                  type: "accordion",
                  header: "Plantilla de condición suspensoria",
                  open: false,
                  text: "• Enunciado del evento futuro e incierto • Cargas de gestión y plazos • Documentos que acreditan el cumplimiento • Long stop date y efectos • Reglas de devolución/compensación • Medio alterno de solución de controversias.",
                },

                {
                  type: "paragraph",
                  text: "Prueba y cronograma. Una condición robusta se acompaña de un **plan de gestión**: lista de trámites, autoridad competente, documentos requeridos, tiempos estimados y responsables. La trazabilidad documental —solicitudes, acuses, oficios, resoluciones— acredita buena fe y diligencia, y delimita la imputabilidad del incumplimiento si la condición no acontece. El plan debe sincronizarse con la vigencia de insumos críticos (dictámenes, certificados) para evitar ‘caducidades’ que reinicien el esfuerzo. En operaciones con financiamiento, el anexo de términos bancarios (tasa, aforo, garantías) evita que un ‘aprobado condicional’ se confunda con un ‘aprobado final’; sólo el cumplimiento integral debe activar la exigibilidad del cierre. Con esto, la promesa se convierte en un proyecto administrado, no en un acto de esperanza.",
                },
                {
                  type: "paragraph",
                  text: "Tipología. Las condiciones pueden ser positivas (que ocurra algo) o negativas (que no ocurra), causales (dependen de un hecho natural o de un tercero) o mixtas (combinan esfuerzos de las partes y eventos externos). En negocios de transmisión de dominio, son frecuentes: autorización de zona restringida en compraventas a extranjeros; liberación de hipoteca; dictámenes de inexistencia de afectaciones; obtención de licencia o uso de suelo; emisión de certificado de libertad de gravamen; aprobación de crédito. En donaciones: acreditación de finalidad o de capacidad del donatario; en mutuos: aprobación crediticia y perfeccionamiento de garantías. El módulo ilustra el sentido práctico con el ejemplo de adquisición de inmueble por extranjero, supeditada a su legitimación para hacerlo: mientras no se actualice ese hecho, la obligación permanece en suspenso. :contentReference[oaicite:4]{index=4}",
                },

                {
                  type: "accordion",
                  header: "Riesgos y controles",
                  open: false,
                  text: "• Ambigüedad del evento → definir estándar objetivo y documentos • Retrasos administrativos → prórrogas tasadas y gestión proactiva • Condición ilícita/imposible → depurar en due diligence • Falta de trazabilidad → matriz de evidencia y actas de avance.",
                },

                {
                  type: "paragraph",
                  text: "Efectos del cumplimiento o del fracaso. Si la condición se cumple dentro del plazo, la obligación deviene exigible y las partes deben otorgar el contrato definitivo; si no se cumple, se extingue la promesa o se resuelve conforme a lo pactado, con liquidación de gastos y restituciones. Puede acordarse una **cláusula de break-up fee** para desalentar abandonos estratégicos o una **cláusula penal** moderada para cubrir costos hundidos. Cuando la condición depende parcialmente de la cooperación de una parte, se aplica el principio de que nadie puede aprovechar su propio incumplimiento: la conducta obstructiva impide invocar el fracaso de la condición. Finalmente, conviene coordinar condiciones suspensivas con **términos**: una fecha tope (long stop) evita que la promesa ‘hiberne’ indefinidamente y equilibra la seguridad con la flexibilidad operativa.",
                },
                {
                  type: "paragraph",
                  text: "Cierre operativo. Para que la condición suspensoria funcione como salvaguarda —y no como fuente de litigio—, hay que convertirla en un **algoritmo verificable**: evento definido, evidencia objetiva, responsable y plazo máximo. El expediente debe contener, desde el inicio, las rutas de cumplimiento (checklist y cronograma), así como el formato de las constancias que acreditarán cada hito. La promesa debe indicar el foro y el medio alterno de solución de controversias, y prever un plan de salida ordenada si el evento no acontece: devolución de anticipos, liberación de garantías, cancelación de inscripciones preventivas, notificaciones a terceros. En suma, la condición suspensoria es una herramienta de calidad contractual: permite cerrar sólo cuando el negocio es jurídicamente posible y económicamente sensato, protegiendo a ambas partes con reglas claras y prueba suficiente. :contentReference[oaicite:5]{index=5}",
                },
              ],
            },
          ],
        },

        /* 2. CONTRATOS TRASLATIVOS DE DOMINIO */
        {
          id: "1.2",
          numbering: "2",
          title: "Contratos traslativos de dominio",
          content: [
            {
              type: "paragraph",
              text: "Los contratos traslativos de dominio son aquellos mediante los cuales se transmite la propiedad —o un derecho real equivalente— de una cosa o derecho de un patrimonio a otro. Integran la columna vertebral del tráfico jurídico porque convierten expectativas en circulación efectiva de bienes y asignan riesgos con reglas verificables. En esta unidad estudiaremos sus figuras paradigmáticas: la compraventa (precio en dinero), la permuta (intercambio de cosa por cosa), la donación (transferencia gratuita con sus límites y revocaciones) y el mutuo (entrega de bienes fungibles con obligación de restituir). El foco no será memorizar definiciones, sino dominar su ingeniería: cómo se acredita la legitimación del enajenante, cómo se determina el objeto con precisión técnica, cómo se fija y prueba el precio o la contraprestación, qué forma exige la ley y qué publicidad hace oponible la transmisión frente a terceros. La meta es que el estudiante sepa pasar de la teoría al cierre operativo: diseñar cláusulas claras, reunir evidencia suficiente y coordinar plazos, condiciones y garantías para que la transmisión sea válida, eficaz y defendible.",
            },
            {
              type: "paragraph",
              text: "Dogmáticamente, estos contratos comparten un andamiaje común: consentimiento válido (sin vicios), capacidad y legitimación para disponer, objeto lícito y determinado o determinable, y forma cuando la ley la exige. Su especificidad radica en los efectos reales: el acuerdo no solo crea obligaciones recíprocas, sino que conduce a la transferencia del dominio cuando concurren título y modo conforme al régimen aplicable. En inmuebles, la regla profesional impone escritura e inscripción; en muebles registrables, constancias y padrones; en bienes no registrables, trazabilidad documental robusta. La seguridad del tráfico descansa en correspondencias finas: descripción del bien y su folio real; precio cierto o método determinable; estado de la cosa y asignación de riesgos; publicidad e oponibilidad. Sin estas piezas, la conmutatividad se vacía y la transmisión queda expuesta a nulidades, evicción o impugnaciones de terceros. El operador no “llenará formatos”: diseñará un sistema contractual donde cada elemento tenga evidencia y cada evidencia tenga función jurídica.",
            },
            {
              type: "paragraph",
              text: "La gobernanza del riesgo es el núcleo práctico. Antes de prometer o transmitir, se audita la **cadena de títulos**, se mapean **gravámenes** y **servidumbres**, y se alinea la **situación fiscal**. Durante la ejecución, se documenta la **entrega** (real, jurídica o virtual), se fija el **momento del riesgo** y se dispone el **saneamiento** por evicción y vicios con procedimientos de revisión y denuncia. En pagos diferidos, se anclan **garantías** (reserva de dominio, prenda, hipoteca) y mecanismos de **escrow** o liberación condicionada. La publicidad —registral o sectorial— es parte del diseño, no un trámite residual. Todo se sostiene en una **matriz probatoria**: qué documento acredita cada hito (certificados, actas, fotografías con metadatos, informes técnicos, folios). Así, el contrato deja de ser promesa retórica y se convierte en un dispositivo de cumplimiento controlado que resiste auditoría judicial o arbitral.",
            },
            {
              type: "paragraph",
              text: "Operativamente, estos contratos exigen sincronizar **tiempos** y **dependencias**: verificaciones previas (títulos, cargas, licencias), preparación de minuta, obtención de certificados con vigencia suficiente, firma, pago, entrega e inscripción. Las **modalidades** (al contado o a plazos; ad corpus o ad mensuram; cosa presente o futura; precio fijo o variable) no son adornos, sino herramientas para alinear valor y riesgo. Debe definirse el estado de la cosa al entregar, la asignación de gastos e impuestos, la coordinación con contratos conexos (arrendamientos, financiamiento, seguros) y los escenarios de contingencia (retrasos de terceros, documentos defectuosos, diferencias de superficie o calidad). El estándar de excelencia es simple y exigente: que un tercero técnico pueda leer el contrato y su expediente y verificar, sin interpretaciones creativas, que la transmisión fue válida, oponible y equitativa.",
            },
            {
              type: "paragraph",
              text: "Metodología de trabajo en la unidad: partiremos de plantillas ‘vivas’ y checklists para cada figura (compraventa, permuta, donación, mutuo). Construiremos cuadros comparativos por elementos (personales, reales, formales) y por remedios (cumplimiento específico, resolución, daños, cláusula penal). Practicaremos la redacción de **condiciones suspensivas** y **términos** orientados a cierres seguros, y el diseño de **planes de cierre** con hitos y evidencia. Cerraremos con estudios de caso que exijan calificar la operación, escoger modalidad, asignar riesgos, redactar cláusulas y justificar la solución probatoria. El resultado esperado: profesionales capaces de transformar un acuerdo de voluntades en una transmisión jurídico-económica bien documentada, que proteja a las partes y sostenga la confianza del mercado.",
            },
            {
              type: "accordion",
              header: "Mapa de navegación — Contratos traslativos de dominio",
              open: false,
              items: [
                {
                  header: "Nivel 1 · Taxonomía y efectos",
                  text: "Compraventa, permuta, donación y mutuo; onerosidad/gratuidad; título y modo; efectos reales y oponibilidad.",
                },
                {
                  header: "Nivel 2 · Validez y evidencia",
                  text: "Capacidad y legitimación; objeto y precio/contraprestación; forma e inscripción; matriz probatoria (qué documento prueba cada hito).",
                },
                {
                  header: "Nivel 3 · Riesgo y remedios",
                  text: "Asignación de riesgos (entrega, transporte, inscrpción); saneamiento por evicción y vicios; incumplimiento, cláusula penal y MASC.",
                },
              ],
            },
          ],
          subthemes: [
            /* 2.1 La compraventa */
            {
              id: "1.2.1",
              numbering: "2.1",
              title: "La compraventa",
              content: [
                {
                  type: "paragraph",
                  text: "La compraventa es el contrato por el cual una parte (vendedor) se obliga a transferir la propiedad de una cosa o un derecho a otra (comprador), quien a su vez se compromete a pagar un precio **cierto en dinero**. Su rasgo diferenciador respecto de la permuta es precisamente la **pecuniariedad** del precio. En la práctica, la compraventa articula la circulación de bienes y derechos, desde muebles de consumo hasta inmuebles y activos intangibles, y admite variantes funcionales como la venta con **reserva de dominio** —el vendedor retiene la titularidad hasta el pago total— y la venta **en abonos** —el precio se cubre en parcialidades—. Como negocio traslativo de dominio, exige un diseño claro de objeto, precio, forma de pago, entrega y saneamiento, de modo que el traslado sea oponible frente a terceros y operativo en la ejecución. Esta figura, clásica y a la vez actual, se sostiene en tres pilares: **consenso válido**, **objeto idóneo** y **publicidad/forma** cuando la ley lo exige, para compatibilizar la voluntad privada con la seguridad del tráfico.",
                },
                {
                  type: "paragraph",
                  text: "En cuanto a **características**, la compraventa es **consensual** (se perfecciona por el acuerdo), **bilateral** (genera obligaciones recíprocas), **onerosa** (existe contraprestación), **conmutativa** (prestaciones equivalentes) y **típica** o nominada. Su **clasificación** relevante distingue entre compraventa **civil** y **mercantil**: la primera se rige por el derecho civil y busca primordialmente satisfacer necesidades de las partes; la segunda se integra al circuito de intercambio profesional y se rige por el derecho mercantil, con ánimo de lucro y reglas propias complementarias. En la práctica mexicana, muchas operaciones tienen **aplicación mixta**: aspectos personales y de capacidad se reconducen al Código Civil, en tanto que ciertas consecuencias comerciales o el carácter especulativo pueden quedar bajo el paraguas del Código de Comercio y leyes especiales. Este encuadre no es meramente académico: orienta la **forma**, las **pruebas** y la **responsabilidad** aplicables.",
                },
                {
                  type: "paragraph",
                  text: "Sus **elementos** se agrupan en personales, reales y formales. En lo **personal**, las partes deben tener **capacidad de goce** (titularidad de derechos) y **de ejercicio** (aptitud para obligarse), o actuar mediante representación válida. En lo **real**, el objeto —cosa o derecho— ha de ser **lícito**, **posible** y **determinado o determinable**, con identificación suficiente (serie, folio, linderos, cabida, cargas). En lo **formal**, rige la consensualidad, pero el ordenamiento puede exigir **escritura** e **inscripción** para inmuebles y otros bienes registrables, consolidando la oponibilidad ante terceros. Además, la **forma** sirve como matriz probatoria: fija precio, condiciones, garantías, gastos, lugar y tiempo de **entrega**, y previsiones de **saneamiento** por evicción y **vicios ocultos**. Una arquitectura clara de estos elementos previene nulidades y reduce litigiosidad, transformando la intención en un acto defendible.",
                },
                {
                  type: "paragraph",
                  text: "Su **importancia y función jurídica** desbordan el ámbito privado: desde el tránsito histórico del **trueque** a la moneda, la compraventa vertebra el intercambio social y económico. Jurídicamente, opera como vehículo de **traslación de dominio** y asignación eficiente de recursos: el vendedor debe transmitir la propiedad y entregar la cosa en el estado convenido; el comprador debe **pagar el precio** en tiempo, lugar y forma. En la 'materia' de la compraventa, se recuerda un principio axial: **nadie puede vender lo que no es suyo**; la venta de cosa ajena es ineficaz y puede generar responsabilidad por daños cuando media dolo o mala fe. En inmuebles, la diligencia previa debe verificar **libertad de gravamen**, situación física y jurídica; en muebles, se exige igualmente trazabilidad (facturas, certificados, cadena de titularidad). Todo ello reafirma la función ordenadora del contrato como mecanismo de certeza y equilibrio.",
                },
                {
                  type: "paragraph",
                  text: "En la **ejecución**, destacan (i) las **obligaciones**: el vendedor debe entregar y sanear; el comprador, pagar y recibir; (ii) las **modalidades de entrega**: **real** (material), **jurídica** (cuando la ley la tiene por recibida) y **virtual** (a disposición del comprador), con asignación coherente de riesgos y gastos; y (iii) las **modalidades de la compraventa**: con **reserva de dominio**, **a plazo o en abonos**, **ad corpus**, con **pactos de preferencia** o **de no vender a determinada persona**, y las ventas de **esperanza** y de **cosa esperada**, que gestionan el alea de la existencia o cantidad. La buena práctica define disparadores de incumplimiento, reglas de **mora**, orden de imputación de pagos y remedios proporcionados, para que el contrato no sólo sea válido en abstracto, sino **exigible, verificable y defendible** en la realidad.",
                },
                {
                  type: "accordion",
                  header: "Mapa de navegación — Compraventa",
                  open: false,
                  items: [
                    {
                      header: "Nivel 1 · Naturaleza y clasificación",
                      text: "Consensual, bilateral, onerosa y conmutativa • Civil vs. mercantil y aplicaciones mixtas • Precio en dinero como rasgo distintivo.",
                    },
                    {
                      header: "Nivel 2 · Elementos y forma",
                      text: "Capacidad/representación • Objeto lícito, posible y determinado • Escritura/inscripción en bienes registrables • Saneamiento por evicción y vicios.",
                    },
                    {
                      header: "Nivel 3 · Ejecución y modalidades",
                      text: "Entrega real/jurídica/virtual • Asignación de riesgos y gastos • Reserva de dominio, abonos, ad corpus, preferencia, no vender a determinada persona, esperanza/cosa esperada.",
                    },
                  ],
                },
              ],
              subthemes: [
                {
                  id: "1.2.1.1",
                  numbering: "2.1.1",
                  title: "Características generales",
                  content: [
                    {
                      type: "paragraph",
                      text: "La compraventa es el arquetipo de los contratos traslativos de dominio: el vendedor se obliga a transferir la propiedad de una cosa o un derecho, y el comprador a pagar un precio en dinero. Su fisonomía jurídica conjuga rasgos nucleares: es consensual (en principio se perfecciona por el mero consentimiento), bilateral y sinalagmática (obligaciones recíprocas), onerosa (precio vs. cosa), conmutativa (intercambio equivalente) y nominada (tipificada por la ley). Desde el punto de vista funcional, organiza el tráfico patrimonial al convertir el valor en circulación efectiva de bienes y derechos; por ello, exige precisión del objeto, del precio y de la forma cuando la ley la impone (p. ej., inmuebles). El módulo subraya que su alcance rebasa lo doctrinal: sirve de ‘modelo’ para entender obligaciones de dar, saneamiento, transmisión de riesgos, modalidades y remedios por incumplimiento. Esta centralidad justifica estudiarla con enfoque operativo: cómo se determina la cosa, cómo se acredita la titularidad, cuándo y cómo se transmite el dominio, qué se entiende por entrega real, jurídica o virtual, y qué garantías respaldan su ejecución.",
                    },
                    {
                      type: "paragraph",
                      text: "Como contrato de intercambio, la compraventa demanda equilibrio estructural. El precio ha de ser cierto, en dinero y susceptible de determinación objetiva; la cosa, presente o futura, debe ser lícita, posible y determinada o determinable. La eficacia descansa en tres pilares: (i) idoneidad del **consentimiento** (sin vicios), (ii) **capacidad** de las partes (de goce y de ejercicio para obligarse válidamente), y (iii) **forma** cuando la ley la exige ad solemnitatem (escritura pública, inscripción registral) o ad probationem (prueba). El material docente recuerda que, aunque el consentimiento basta para el perfeccionamiento en la regla general, la oponibilidad frente a terceros y la seguridad del tráfico requieren documentación adecuada e inscripción cuando proceda. La compraventa, así entendida, no es sólo ‘un acuerdo’; es un conjunto de decisiones técnicas —descripción del bien, fijación del precio, verificación de gravámenes, elección de forma— que determinan su éxito o su nulidad.",
                    },

                    {
                      type: "accordion",
                      header: "Rasgos esenciales (recordatorio rápido)",
                      open: false,
                      text: "Consensual • Bilateral • Onerosa • Conmutativa • Nominada • Traslativa de dominio • Precio cierto en dinero • Cosa lícita y determinable • Forma cuando la ley la exige. :contentReference[oaicite:1]{index=1}",
                    },

                    {
                      type: "paragraph",
                      text: "En términos patrimoniales, la compraventa articula la circulación de riqueza con protección de expectativas. El **saneamiento** por evicción y por vicios ocultos estabiliza el intercambio: el vendedor garantiza que nadie con mejor derecho despoje al comprador y que la cosa carece de defectos que la hagan impropia o disminuyan su valor. El **momento de la entrega** —real, jurídica o virtual— impacta la transferencia de riesgos: quién soporta la pérdida o deterioro por caso fortuito antes del dominio o la posesión útil. De allí la importancia de pactar condiciones de entrega, estado de la cosa y asunción de riesgos. El precio puede satisfacerse al contado o a plazos; cuando se difiere, surgen figuras como la **reserva de dominio** o esquemas de garantías que preservan la equivalencia del intercambio. Todo ello se apoya en reglas de prueba (facturas, recibos, actas) y de publicidad registral.",
                    },
                    {
                      type: "paragraph",
                      text: "La realidad económica pluraliza la compraventa: civil o mercantil según sujetos y ánimo de lucro; de bienes presentes o futuros; de cosa determinada o genérica; al contado o en abonos; con cláusulas especiales (pactos de preferencia, de no vender a cierta persona, pactos de reserva) y variantes como ‘ad corpus’, ‘de esperanza’ y ‘de cosa esperada’. Cada modalidad reconfigura la distribución de riesgos, el régimen de prueba y la dinámica de cumplimiento. El abordaje del módulo invita a identificar la **finalidad** del negocio (consumo, inversión, producción), pues de ello dependen cláusulas operativas —plazos, garantías, penalidades— y la selección del marco normativo (civil/mercantil).",
                    },

                    {
                      type: "accordion",
                      header: "Checklist de validez y eficacia",
                      open: false,
                      text: "• Consentimiento libre de vicios • Capacidad de las partes • Objeto lícito y determinable • Precio cierto en dinero • Forma (si aplica) • Saneamiento (evicción/vicios) • Reglas de entrega • Publicidad/inscripción cuando proceda. :contentReference[oaicite:2]{index=2}",
                    },

                    {
                      type: "paragraph",
                      text: "Finalmente, la **gobernanza documental** es decisiva. En inmuebles: títulos, antecedentes registrales, certificados de libertad de gravamen, situación fiscal, plano o cabida y linderos; en muebles registrables: constancias de propiedad, padrón, garantías. La congruencia entre objeto, precio, forma y publicidad evita litigios por nulidad o por incumplimiento. La enseñanza práctica es inequívoca: dominar la compraventa implica orquestar derecho sustantivo, evidencia y gestión del riesgo para lograr un intercambio válido, oponible y eficiente. :contentReference[oaicite:3]{index=3}",
                    },
                  ],
                },
                {
                  id: "1.2.1.2",
                  numbering: "2.1.2",
                  title: "Clasificación",
                  content: [
                    {
                      type: "paragraph",
                      text: "Clasificar la compraventa permite anticipar el régimen aplicable y los riesgos. La primera partición del módulo distingue **civil** y **mercantil**. La compraventa civil se rige por el Código Civil y responde, típicamente, a finalidades no lucrativas inmediatas (satisfacción de necesidades); la mercantil, por el Código de Comercio y leyes especiales, con propósito de **intermediación** y **lucro**. Muchas operaciones son ‘mixtas’: un mismo contrato puede atraer reglas de ambos regímenes según la condición de las partes y el propósito de la operación. La consecuencia no es menor: cambia el estatuto de prueba, la prescripción, la interpretación y, en ocasiones, las formas exigibles. Por eso, al calificar una operación hay que mirar sujetos, objeto y finalidad real, no sólo etiquetas contractuales. El material subraya que la mercantilidad no se presume: debe desprenderse de la naturaleza del acto y del ánimo profesional del enajenante. :contentReference[oaicite:4]{index=4}",
                    },
                    {
                      type: "paragraph",
                      text: "Otra clasificación se refiere a la **temporalidad del pago**: al contado o a **plazos/abonos**. En la venta a plazos, el precio se difiere total o parcialmente; ello invita a introducir garantías (prenda, hipoteca, reserva de dominio) y a regular la mora (intereses, penalidades, resolución). Estas ventas incrementan el riesgo de crédito y exigen trazabilidad de pagos (recibos, estados de cuenta) y mecanismos de **aceleración** ante incumplimiento. En contraste, la venta al contado simplifica el intercambio, pero no elimina la necesidad de saneamiento y prueba. La elección entre uno u otro esquema depende del flujo financiero de las partes y de la naturaleza del bien: bienes de alto valor unitario tienden a demandar pagos escalonados con controles reforzados.",
                    },

                    {
                      type: "accordion",
                      header: "Civil vs. mercantil — claves",
                      open: false,
                      text: "Sujetos y ánimo de lucro • Marco normativo aplicable • Estatuto probatorio • Prescripción e interpretación • Formas exigibles y publicidad. :contentReference[oaicite:5]{index=5}",
                    },

                    {
                      type: "paragraph",
                      text: "Una tercera clasificación atiende a la **naturaleza del objeto**: bienes **presentes** o **futuros**; **determinados** o **genéricos**. En bienes futuros aparecen dos variantes relevantes: la **compraventa de esperanza**, donde el comprador asume el riesgo de inexistencia del bien futuro y paga un precio cierto (el ‘alea’ justifica el precio), y la **compraventa de cosa esperada**, subordinada a la condición de que la cosa llegue a existir. La venta de cosa genérica traslada el riesgo de forma distinta a la de cosa específica; por ello, la identificación del bien (especificación, individualización) es un hito jurídico que conviene documentar. En inmuebles, la distinción entre venta ‘ad corpus’ y ‘ad mensuram’ repercute en tolerancias de cabida y en remedios por diferencias de superficie.",
                    },
                    {
                      type: "paragraph",
                      text: "También es útil diferenciar por **estructura del precio**: fijo, variable (p. ej., indexado a avalúo final o a métricas de producción) o mixto. Los precios variables exigen algoritmos verificables, fuentes de información independientes y ventanas de ajuste para evitar controversias. En ciertos sectores (commodities), se emplean referencias públicas (p. ej., índices) que reducen asimetrías de información. Cuando el precio depende de un tercero (perito), conviene pactar su forma de designación y la impugnación por error manifiesto. Estas decisiones no son meramente económicas: definen la ejecutabilidad del contrato y la previsibilidad de sus efectos.",
                    },

                    {
                      type: "accordion",
                      header: "Objeto y precio — clasificación operativa",
                      open: false,
                      text: "• Presentes/futuros • Determinados/genéricos • Ad corpus/ad mensuram • Esperanza/cosa esperada • Precio fijo/variable/mixto • Pericia/índices de referencia. :contentReference[oaicite:6]{index=6}",
                    },

                    {
                      type: "paragraph",
                      text: "Finalmente, la compraventa puede **modularse** por pactos especiales: preferencia (derecho del vendedor a recomprar en igualdad de condiciones), pacto de no vender a determinada persona, reserva de dominio, entre otros. Cada pacto reconfigura derechos y límites: la preferencia crea un circuito de recompras potenciales; la prohibición de vender a alguien concreto tutela intereses legítimos sin convertir la cosa en inalienable; la reserva de dominio preserva el poder jurídico del vendedor hasta el pago total. La clasificación, en suma, no es academicismo: es un mapa para escoger forma, garantías, remedios y publicidad adecuados a la operación concreta. :contentReference[oaicite:7]{index=7}",
                    },
                  ],
                },
                {
                  id: "1.2.1.3",
                  numbering: "2.1.3",
                  title: "Elementos personales, reales y formales",
                  content: [
                    {
                      type: "paragraph",
                      text: "La estructura jurídica de la compraventa descansa en tres categorías de elementos: personales, reales y formales. Los **elementos personales** identifican a las partes (vendedor y comprador) y su aptitud para contratar; los **elementos reales** corresponden a la cosa y al precio —núcleo del intercambio—; y los **elementos formales** determinan el modo en que el contrato debe exteriorizarse para ser válido u oponible frente a terceros. Este triángulo no es decorativo: condiciona la existencia, validez y eficacia del negocio. Si falla la capacidad o hay vicio del consentimiento, el contrato es anulable; si la cosa es ilícita o el precio indeterminado, el contrato carece de objeto o causa; si la ley exige solemnidad y ésta se omite (p. ej., escritura pública en inmuebles), el acto puede ser ineficaz o inexistente. Por ello, el operador jurídico debe auditar la compraventa como audita un sistema: verificar que las partes estén habilitadas y representadas correctamente; que la cosa sea lícita, existente o determinable; que el precio sea cierto y en dinero; y que la forma cumpla con el estándar normativo. Sólo entonces el intercambio transita con seguridad del plano obligacional al de la transmisión de dominio, con respaldo probatorio y publicitario.",
                    },
                    {
                      type: "paragraph",
                      text: "En los **elementos personales**, el foco es la **capacidad** y la **legitimación**. Capacidad significa poder jurídico para obligarse; legitimación, poder para disponer de la cosa o adquirirla. Un vendedor sin derecho de propiedad (o sin facultades de disposición en su mandato o poder) compromete la validez y, sobre todo, el saneamiento por evicción. Deben revisarse prohibiciones específicas (p. ej., restricciones para ciertos funcionarios, límites del régimen matrimonial, administración de bienes de menores o incapacitados), así como conflictos de interés cuando el representante contrata consigo mismo (autocontrato), que requiere autorización expresa. La representación puede ser legal (tutor, padre en ciertos supuestos) o voluntaria (mandato/poder); en ambos casos, el alcance y la vigencia del poder deben coincidir con el acto (enajenar/adquirir, gravar, precio máximo o mínimo, condiciones). En compraventas complejas intervienen terceros (fiadores, avalistas, beneficiarios de garantías); su incorporación ordenada previene nulidades y disputas posteriores. La **identidad** de las partes, su domicilio, su régimen fiscal y, en su caso, su naturaleza mercantil son piezas de la trazabilidad contractual.",
                    },
                    {
                      type: "paragraph",
                      text: "Los **elementos reales** abarcan **cosa** y **precio**. La **cosa** debe ser **lícita**, **posible** y **determinada o determinable**. Si es específica (cuerpo cierto), bastan sus señas y ubicación; si es genérica, hay que individualizarla (especificación, conteo, separación), ya que de ello depende la traslación del riesgo. La cosa puede ser **presente** o **futura**; en este último caso, la compraventa admite modalidades como la **de esperanza** (el comprador asume el riesgo de inexistencia) o la **de cosa esperada** (condicionada a que llegue a existir). En bienes registrables se requiere correlación precisa con sus asientos (folio real, cabida y linderos, placas o número de serie). La **licitud** excluye objetos prohibidos; la **posibilidad** descarta objetos físicamente o jurídicamente imposibles. Cuando la cosa es compleja (conjuntos de activos), se recomienda inventario y anexos técnicos; cuando está gravada, deben establecerse reglas para liberar o subrogar gravámenes antes de la entrega o simultáneamente con ella.",
                    },
                    {
                      type: "paragraph",
                      text: "El **precio** ha de ser **cierto**, **en dinero** y **determinable**. Certeza no equivale a fijar una cantidad única inmutable: puede definirse por un **método** (pericia, indexación, fórmula matemática, referencia a un índice público). Lo inadmisible es la total indeterminación o la potestad unilateral de una parte para fijarlo sin control objetivo. El precio simulado (aparente) o vil (manifiestamente desproporcionado) puede acarrear nulidad relativa, simulación o lesión en regímenes que la contemplen. Si el precio depende de un tercero (perito), conviene pactar su designación, plazos y eventual sustitución para evitar vacíos de ejecutabilidad. En ventas a plazos, el precio se fracciona y se acompaña de intereses, cláusula penal y garantías; en ventas al contado, el énfasis se traslada a recibos, facturación y entrega libre de gravámenes. La coordinación del precio con la **capacidad de pago** y con la **forma de entrega** evita que la ecuación económica deteriore la validez jurídica.",
                    },
                    {
                      type: "paragraph",
                      text: "Respecto de los **elementos formales**, la regla general es que la compraventa se perfecciona por el **consentimiento**; sin embargo, para ciertos bienes o por razones de seguridad y publicidad, la ley **exige forma**. En inmuebles suele requerirse **escritura pública** e **inscripción** para oponibilidad; en muebles registrables (vehículos, aeronaves), constancias y padrones; en bienes de comercio ordinario, factura y documentos de transporte. La **forma ad solemnitatem** es constitutiva (su omisión invalida el acto); la **forma ad probationem** fortalece la prueba frente a terceros. La falta de forma o de inscripción afecta no sólo la relación entre partes, sino la tutela de terceros adquirentes de buena fe. Por eso, el operador debe alinear **plazos** de firma e inscripción, **títulos** previos y **situación fiscal** para evitar una cadena débil de transmisión.",
                    },
                    {
                      type: "accordion",
                      header: "Checklist — Elementos personales",
                      open: false,
                      text: "• Capacidad de goce y de ejercicio • Legitimación para disponer/adquirir • Representación (alcance y vigencia del poder) • Prohibiciones y conflictos de interés • Identidad y domicilio fiscal • Trazabilidad de firmas y facultades.",
                    },
                    {
                      type: "accordion",
                      header: "Checklist — Elementos reales y formales",
                      open: false,
                      text: "• Cosa lícita, posible, determinada/determinable • Individualización (genérica vs. específica) • Gravámenes y cargas • Precio cierto/en dinero/determinable (método o pericia) • Forma exigida (escritura/inscripción) • Cadena de títulos y constancias.",
                    },
                    {
                      type: "paragraph",
                      text: "Metodológicamente, conviene trabajar con una **matriz de elementos** que conecte cada requisito con su evidencia: capacidad (identificaciones, poderes), legitimación (títulos, folio registral), cosa (inventarios, planos, números de serie), precio (fórmula o peritaje), y forma (minuta, escritura, inscripción). Esta matriz permite detectar riesgos: vicios del consentimiento (error, dolo, violencia), indeterminación del objeto, precio potestativo, falta de forma o gravámenes no liberados. El remedio no es ‘llenar espacios’ a última hora, sino **diseñar** la operación desde el inicio: definir quién hace qué y cuándo, con documentos verificables y plazos coordinados. Así, los elementos personales, reales y formales dejan de ser una lista académica para convertirse en un **sistema operativo** que garantiza validez y eficacia de la compraventa.",
                    },
                  ],
                },
                {
                  id: "1.2.1.4",
                  numbering: "2.1.4",
                  title: "Importancia y función jurídica",
                  content: [
                    {
                      type: "paragraph",
                      text: "La **importancia** de la compraventa en el orden jurídico es estructural: constituye el vehículo central de **circulación de bienes y derechos** y el patrón con el que se comprenden obligaciones de dar, transmisión de riesgos, saneamiento y remedios por incumplimiento. En su función **económico-social**, permite reasignar recursos hacia usos más valiosos, facilita la movilidad patrimonial y fomenta la inversión. Desde el punto de vista **jurídico**, ofrece una gramática común de consentimiento, objeto, precio y forma que se proyecta a otras figuras (permuta, suministro, arrendamiento financiero) y a sectores regulados (inmobiliario, agroindustrial, energía). La seguridad del tráfico depende de su disciplina interna: sin compraventas válidas, probadas y publicitadas, la confianza en el mercado se erosiona y el crédito se encarece. Por eso, el estudio del contrato no es un fin en sí, sino la base de una arquitectura de certeza que involucra registros, notariado, autoridades fiscales y actores financieros.",
                    },
                    {
                      type: "paragraph",
                      text: "Su **función jurídica** se manifiesta en tres planos. **Sustantivo**: define el contenido mínimo para que la transferencia sea válida (cosa y precio) y asigna el riesgo entre las partes (entrega real/jurídica/virtual, pérdida fortuita). **Probatorio**: crea un expediente que hace fe (títulos, certificados, facturas, recibos), soporte de la oponibilidad y de la ejecutabilidad. **Publicitario**: mediante inscripciones y avisos, protege a terceros de buena fe y evita dobles ventas. Este triple plano habilita a los jueces y árbitros para tutelar expectativas con criterios objetivos: en evicción se restituye el precio y daños; en vicios ocultos proceden acciones **redhibitoria** o **quanti minoris**; en mora, intereses y cláusula penal razonables. La previsibilidad de estos remedios reduce litigios y orienta conductas de cumplimiento.",
                    },
                    {
                      type: "paragraph",
                      text: "La compraventa también ordena la **financiación** del tráfico. Ventas a plazos, reserva de dominio, prendas e hipotecas se articulan a partir de su estructura, permitiendo a las partes diferir pagos con garantías reales o personales. En cadenas productivas, la compraventa sostiene contratos derivados (suministro, transporte, seguros) y mecanismos de **factoring** o **confirming**. La claridad contractual acerca de riesgos y tiempos facilita la titulización de flujos y la gestión de inventarios, conectando el mundo jurídico con el financiero. La eficiencia surge, entonces, de alinear la letra del contrato con la realidad operativa: flujos, logística, fiscalidad y compliance.",
                    },
                    {
                      type: "paragraph",
                      text: "En el plano de **protección de partes**, la función jurídica de la compraventa equilibra posiciones. La obligación de **saneamiento** protege al comprador frente a despojos por mejor derecho o defectos ocultos; la exigencia de **precio cierto** y de **forma** previene fraudes y simulaciones; y los estándares de **información** y **calidad** inciden en ventas al consumidor. Al vendedor, la exigibilidad del pago y las garantías pactadas (cláusula penal, reserva de dominio, prenda) lo protegen de impagos y deterioros de la cosa antes del traspaso. La correcta asignación de riesgos —y su prueba— evita que el contrato se convierta en fuente de externalidades negativas (incumplimientos oportunistas, litigios costosos).",
                    },
                    {
                      type: "paragraph",
                      text: "El contrato de compraventa es, además, un **modelo pedagógico** para entrenar habilidades forenses: calificar hechos, identificar elementos esenciales, detectar vicios, proponer remedios y motivar decisiones con **prueba**. En la práctica, leer una compraventa implica responder preguntas operativas: ¿quién puede vender? ¿quién paga y cómo? ¿qué se entrega y cuándo? ¿qué documentos acreditan todo ello? ¿qué remedios siguen si algo falla? Esta forma de pensar —más ingeniería que retórica— eleva la calidad de la asesoría y de la judicatura, y reduce la fricción del tráfico.",
                    },
                    {
                      type: "accordion",
                      header: "Funciones clave (resumen ejecutivo)",
                      open: false,
                      text: "• Circulación de bienes y asignación eficiente de recursos • Estándar común de obligaciones y remedios • Publicidad y tutela de terceros • Soporte del crédito (garantías y flujos) • Protección de comprador y vendedor mediante saneamiento y forma.",
                    },
                    {
                      type: "accordion",
                      header: "Impacto práctico",
                      open: false,
                      text: "• Menos litigios: reglas claras de riesgo, entrega y prueba • Más crédito: garantías bien documentadas • Seguridad de mercado: inscripciones y trazabilidad • Calidad de asesoría: enfoque de ingeniería contractual con checklists.",
                    },
                    {
                      type: "paragraph",
                      text: "Finalmente, su **importancia contemporánea** se proyecta al comercio electrónico y a la contratación digital. La equivalencia funcional de la firma electrónica, los repositorios documentales y la trazabilidad blockchain refuerzan la prueba y aceleran cierres, sin alterar los elementos esenciales: consentimiento, cosa, precio y forma cuando sea exigida. Lejos de trivializar lo jurídico, la tecnología **exige** mayor precisión en cláusulas de identificación, autenticación y evidencia. La función de la compraventa —dar seguridad al tráfico— se mantiene; cambian los instrumentos con los que se ejecuta. El profesional del derecho debe, por ello, dominar tanto la dogmática clásica como los nuevos estándares probatorios y de cumplimiento para que el contrato siga cumpliendo su rol estabilizador en un mercado cada vez más dinámico.",
                    },
                  ],
                },
                {
                  id: "1.2.1.5",
                  numbering: "2.1.5",
                  title: "Materia de la compraventa",
                  content: [
                    {
                      type: "paragraph",
                      text: "La ‘materia’ de la compraventa es la cosa o el derecho que se transmite y el precio en dinero que se paga por ella. La cosa debe ser lícita, posible, determinada o determinable; el precio, cierto y en dinero. Esta doble exigencia no es formalismo: garantiza que el intercambio sea verificable, ejecutable y conmutativo. En bienes **determinados**, bastan señas y localización; en bienes **genéricos**, la determinación se logra por especificación (conteo, peso, medida), acto que además incide en la transferencia del riesgo. Los bienes pueden ser **presentes** o **futuros**; en estos últimos, la dogmática distingue la **venta de esperanza**, donde el comprador asume el azar de que la cosa no exista finalmente, y la **venta de cosa esperada**, sujeta a condición de existencia. En objetos complejos —un conjunto de activos— conviene anexar inventarios y fichas técnicas; en bienes registrables, la descripción debe casar con el folio y sus datos (cabida y linderos, número de serie). La licitud excluye objetos prohibidos o contrarios al orden público; la posibilidad evita obligaciones sobre imposibles físicos o jurídicos. La materia no se reduce al bien; incluye cargas, frutos, pertenencias y accesorios, que pueden pactarse incluidos o excluidos, modulando el equilibrio del intercambio.",
                    },
                    {
                      type: "paragraph",
                      text: "En operaciones inmobiliarias, la precisión de la materia se afina con referencias **catastrales y registrales**, planos, coordenadas y, cuando proceda, régimen de propiedad en condominio. La diferencia entre modalidades **ad corpus** y **ad mensuram** no es menor: en la primera, el precio se fija por el bien como conjunto, tolerando variaciones no sustanciales de superficie; en la segunda, la superficie es determinante y las diferencias habilitan ajustes o acciones resolutorias. En muebles registrables (vehículos, aeronaves), la materia incorpora número de serie, padrón y gravámenes; en intangibles (derechos, marcas), el expediente debe acreditar titularidad, extensión y límites. Por su parte, el **precio** no requiere ser fijo desde el inicio, pero sí **determinable** por un método objetivo (pericia, fórmula matemática, índice público); lo inadmisible es la fijación unilateral sin control. Si el precio es mixto (dinero + prestación), la compraventa subsiste mientras el componente predominante sea dinerario; de lo contrario, podría reclasificarse como permuta. Esta arquitectura asegura conmutatividad y previsibilidad, pilares del tráfico seguro.",
                    },

                    {
                      type: "accordion",
                      header: "Materia — verificación operativa",
                      open: false,
                      text: "• Determinación técnica del bien (planos, inventarios, folio real, serie) • Inclusión/exclusión de accesorios y frutos • Gravámenes y afectaciones • Naturaleza presente/futura y, en su caso, condición • Precio cierto o determinable por método objetivo.",
                    },

                    {
                      type: "paragraph",
                      text: "El tratamiento de **accesorios** y **pertenencias** merece cláusula expresa: en inmuebles, instalaciones fijas y mejoras; en empresas, existencias, contratos y licencias; en maquinaria, refacciones y herramientas. La regla supletoria puede ser insuficiente para corresponder al valor esperado por las partes. Parecido cuidado requiere la **situación posesoria**: no basta transmitir dominio si la posesión útil se halla retenida por arrendatarios o terceros; conviene pactar entrega material, cesión de contratos o subrogación, así como garantías por desocupación. Otro aspecto central es el **estado de la cosa**: descripciones y declaraciones sobre uso, mantenimiento, cargas ambientales o defectos conocidos delimitan la esfera del saneamiento por vicios ocultos y reducen litigiosidad. En bienes fungibles, la determinación cualitativa (calidad, norma, lote) es tan relevante como la cuantitativa (peso, volumen), pues impacta la aptitud del bien para su destino económico. La experiencia muestra que la precisión en estos puntos anticipa problemas y abarata su corrección.",
                    },
                    {
                      type: "paragraph",
                      text: "Cuando la materia es un **derecho** (p. ej., nuda propiedad, usufructo, crédito), el expediente debe identificar su fuente, extensión, limitaciones y oponibilidad. En cesión de créditos, certificaciones de saldo, inexistencia de compensaciones y ausencia de litigio dan contenido a la materia transmitida; en derechos reales limitados, el radio del goce y la preferencia frente a terceros resultan esenciales. En **conjuntos patrimoniales** (fondo de comercio), la materia engloba intangibles, existencias, contratos, clientela; el precio se desagrega y se gobierna con cláusulas de no competencia y transmisión ordenada. Todo ello no es retórica: determina qué se sanea, qué se entrega, qué se inscribe y cómo se paga. El contrato debe exponerlo con un nivel de detalle tal que un tercero técnico pueda verificar la equivalencia entre lo prometido y lo entregado sin acudir a interpretaciones benévolas o creativas.",
                    },

                    {
                      type: "accordion",
                      header: "Precio — diseño y prueba",
                      open: false,
                      text: "• Método de determinación (perito/índice/fórmula) • Calendario de pagos y moneda • Condiciones de ajuste (cambios de superficie/calidad) • Evidencias (facturas, recibos, estados) • Consecuencias por variación sustancial (penalidad/resolución/compensación).",
                    },

                    {
                      type: "paragraph",
                      text: "El **método de determinación** del precio requiere un algoritmo verificable. Si depende de **pericia**, deben fijarse criterios (experiencia, registro, plazos) y eventual sustitución por inactividad o error manifiesto. Si se indexa a un **índice público**, ha de identificarse la serie y la fuente, así como las reglas ante cambios metodológicos. En fórmulas mixtas (avaluación + múltiplos de producción), la transparencia de fuentes evita asimetrías de información. La **moneda** de pago y el riesgo cambiario requieren tratamiento explícito, igual que impuestos, gastos y retenciones. Finalmente, conviene definir la **consecuencia** de desviaciones sustanciales en la materia (p. ej., diferencia de cabida): ajustes automáticos, compensaciones o derecho de resolución. Cerrar bien la ‘materia’ equivale a blindar la esencia de la compraventa: qué pasa de un patrimonio a otro y cómo se cuantifica con justicia.",
                    },
                    {
                      type: "paragraph",
                      text: "En suma, la materia de la compraventa no es una mera descripción estética: es la **arquitectura del intercambio**. Determinar con precisión qué se vende, con qué límites y a qué precio —directo o determinable— es condición de validez, eficacia y paz jurídica. Un contrato que domina su materia reduce la incertidumbre, acota el saneamiento y acelera la circulación de riqueza. Por el contrario, la vaguedad en estos puntos convierte la operación en apuesta costosa. El estándar profesional exige por ello inventarios, planos, folios, certificaciones, métodos de precio y cláusulas de ajuste; es decir, un diseño que haga **operable** la promesa de intercambio.",
                    },
                  ],
                },
                {
                  id: "1.2.1.6",
                  numbering: "2.1.6",
                  title: "Capacidad dentro de la compraventa",
                  content: [
                    {
                      type: "paragraph",
                      text: "La **capacidad** es presupuesto de validez: sin capacidad de goce y de ejercicio, el consentimiento carece de eficacia. En compraventa interesa tanto la capacidad para **obligarse** como la **legitimación** para **disponer** o **adquirir**. La primera reside en la aptitud general para celebrar actos jurídicos; la segunda, en el poder concreto para vender un bien o para adquirirlo sin restricciones. En personas físicas, los límites derivan de minoría de edad, interdicciones o restricciones judiciales; en personas morales, de su objeto social, estatutos y reglas de representación. El contrato debe **acreditar** esta capacidad/legitimación con documentos: identificaciones, poderes, actas, inscripciones y, cuando se actúa por representación, con mandatos vigentes y suficientes para enajenar o adquirir. La diligencia previa no es ceremonial: previene nulidad, simulación y procesos por evicción. En suma, la capacidad convierte la intención en voluntad **jurídicamente eficaz**.",
                    },
                    {
                      type: "paragraph",
                      text: "La **representación** plantea desafíos particulares. El apoderado sólo puede hacer lo que el poder le permite: enajenar, gravar, fijar precio, pactar modalidades. Los límites cuantitativos (precios mínimos/máximos) y cualitativos (tipos de bienes) deben respetarse; de lo contrario, el acto podría ser inoponible o exigirse su ratificación. El **autocontrato** —representante que contrata consigo mismo— requiere autorización expresa para evitar conflictos de interés. En administración de bienes ajenos (tutelas, curatelas, patrimonio de menores), suelen exigirse autorizaciones judiciales para enajenar; su ausencia contamina la cadena de transmisión. En personas morales, la verificación del **órgano competente** (administrador, consejo) y del quórum decisional es tan esencial como el poder individual: vender un activo relevante puede requerir acuerdo corporativo previo. Estas cautelas cierran la puerta a impugnaciones que socaven la estabilidad del intercambio.",
                    },

                    {
                      type: "accordion",
                      header: "Capacidad/legitimación — verificación",
                      open: false,
                      text: "• Personas físicas: mayoría de edad y no restricción • Personas morales: objeto social y poderes • Representación: alcance y vigencia • Autocontrato: autorización expresa • Autorizaciones judiciales cuando procedan • Documentación: identificaciones, actas, poderes, inscripciones.",
                    },

                    {
                      type: "paragraph",
                      text: "El **régimen matrimonial** y de **sociedad** influye en la capacidad para disponer. Bajo sociedad conyugal o participación en ganancias, ciertos actos requieren consentimiento del cónyuge; su omisión expresa riesgo de nulidad relativa o inoponibilidad. En regímenes de bienes sujetos a afectación (fideicomisos), el fiduciario actúa dentro del marco del contrato y finalidades del patrimonio; la venta fuera de objeto contraría el encargo. En sociedades, la venta de ‘activos esenciales’ puede considerarse disposición extraordinaria que exige acuerdo de asamblea. El contrato debe revelar esta geografía de consentimientos, no sólo presumirla. La **capacidad para adquirir** también puede restringirse (p. ej., funcionarios, extranjeros en zonas restringidas), requiriendo salvaguardas o autorizaciones.",
                    },
                    {
                      type: "paragraph",
                      text: "La **capacidad fiscal** y regulatoria habilita la ejecución sin contingencias: cumplimiento de obligaciones fiscales, inscripción en padrones, permisos sectoriales. En sectores regulados (energía, transporte, salud), la capacidad se conecta con licencias y registros; su ausencia hace inejecutable la transmisión. La diligencia previa verifica que el vendedor esté al corriente y que el comprador tenga aptitud para recibir y operar el bien. Este enfoque evita cierres que luzcan impecables civilmente pero nazcan inviables en la práctica. El expediente debe contener constancias idóneas para pasar de la esfera obligacional a la registral y administrativa sin tropiezos.",
                    },

                    {
                      type: "accordion",
                      header: "Riesgos típicos y antídotos",
                      open: false,
                      text: "• Poder insuficiente o vencido → ratificación o sustitución • Falta de consentimiento conyugal → cofirma o autorización • Autorización judicial omitida → nulidad/inoponibilidad • Falta de licencias sectoriales → condición suspensoria • Extranjeros en zona restringida → régimen y permisos aplicables.",
                    },

                    {
                      type: "paragraph",
                      text: "En compraventas con **personas vulnerables** (adultos mayores, personas con discapacidad psicosocial), la protección reforzada impone estándares de información y, en su caso, apoyos para la toma de decisiones. La validez no se agota en la firma; requiere voluntad esclarecida. En entornos empresariales, la integridad corporativa obliga a revisar conflicto de interés y cumplimiento interno. En fin, ‘capacidad’ no es sólo un requisito abstracto: es el conjunto de condiciones que hacen **ejecutable y defendible** el contrato ante terceros y autoridades. Documentarla no es desconfiar: es profesionalizar el intercambio, blindando la transmisión de riesgos y la oponibilidad registral.",
                    },
                    {
                      type: "paragraph",
                      text: "Conclusión operativa: ningún checklist de compraventa está completo sin auditar capacidad y legitimación. Verificar facultades, obtener consentimientos, coordinar licencias y fijar condiciones suspensivas cuando proceda convierte un acuerdo frágil en una transferencia sólida. La capacidad, así entendida, es la **bisagra** que une voluntad y eficacia; cuidarla es cuidar la validez del negocio y la paz jurídica posterior.",
                    },
                  ],
                },
                {
                  id: "1.2.1.7",
                  numbering: "2.1.7",
                  title: "Obligaciones del vendedor y del comprador",
                  content: [
                    {
                      type: "paragraph",
                      text: "En la compraventa, el **vendedor** se obliga principalmente a (i) **transmitir la propiedad** o el derecho objeto del contrato; (ii) **entregar** la cosa en el tiempo, lugar y modo convenidos; y (iii) **sanear** al comprador por evicción y por vicios ocultos. La transmisión exige legitimación y cadena de títulos; la entrega puede ser real (tradición material), jurídica (documentos, llaves) o virtual (puesta a disposición), con efectos sobre el riesgo. El saneamiento por **evicción** protege frente a despojo por tercero con mejor derecho: implica restitución del precio y daños; el saneamiento por **vicios** tutela la conformidad de la cosa con su uso ordinario o pactado, habilitando acciones redhibitoria (resolución) o quanti minoris (rebaja). Además, el vendedor debe conservar la cosa hasta la entrega, abstenerse de gravarla y revelar cargas o defectos conocidos. Estas obligaciones no son meramente supletorias; pueden modularse contractualmente, pero nunca suprimirse en cuanto protegen la esencia conmutativa del intercambio.",
                    },
                    {
                      type: "paragraph",
                      text: "El **comprador** debe (i) **pagar el precio** en la cuantía, moneda y calendario convenidos; (ii) **recibir** la cosa y colaborar razonablemente para su entrega; y (iii) **verificar** la conformidad y denunciar oportunamente vicios. El pago puede condicionarse a hitos (inscripción, desocupación, liberación de gravamen) y realizarse mediante cuentas de garantía (‘escrow’) para alinear incentivos. La mora del comprador genera intereses y, en su caso, cláusula penal; la persistencia autoriza resolución. La cooperación del comprador incluye trámites, firmas y acceso a instalaciones para la entrega; su inacción no puede perjudicar al vendedor. La verificación diligente (‘inspección’) y la denuncia en plazo razonable preservan el equilibrio: evitan que se aleguen vicios extemporáneamente o que se tolere defectuosidad para luego resolver oportunistamente. Esta coreografía de obligaciones simétricas sostiene la conmutatividad del contrato.",
                    },

                    {
                      type: "accordion",
                      header: "Obligaciones — vendedor",
                      open: false,
                      text: "• Transmitir dominio/derecho • Entregar (real, jurídica, virtual) • Conservar hasta la entrega • Saneamiento por evicción y vicios • Revelación de cargas • Cooperación para inscripción/publicidad.",
                    },

                    {
                      type: "paragraph",
                      text: "El **saneamiento** merece tratamiento detallado. En **evicción**, la obligación surge cuando una sentencia firme priva al comprador de la cosa por derecho anterior; el vendedor debe restituir el precio, gastos e intereses, y responder de daños si obró de mala fe. En **vicios ocultos**, la protección se activa si el defecto preexistía y hacía la cosa impropia o disminuía significativamente su valor; los remedios varían entre resolución y rebaja, y pueden incluir reparación si se pacta. La **limitación** o **exclusión** de saneamiento sólo es válida dentro de márgenes de buena fe y transparencia; no cubre dolo ni defectos conocidos no revelados. Para seguridad de ambos, conviene fijar un **procedimiento** de revisión y denuncia, y, si procede, garantías del fabricante o pólizas que desplacen parte del riesgo.",
                    },
                    {
                      type: "paragraph",
                      text: "En ventas a **plazos**, emergen obligaciones accesorias: el vendedor debe entregar recibos y respetar la reserva de dominio si se pacta; el comprador, mantener la cosa, asegurarla y no disponer de ella sin autorización. En ventas de **cosas futuras**, la obligación del vendedor puede consistir en poner medios para su producción; el comprador, por su parte, asume riesgos en la venta de esperanza y conserva derecho a resolución si la cosa esperada no llega a existir. La **moneda** y la **indexación** de pagos requieren claridad para evitar discusiones por variación cambiaria; la **fiscalidad** (impuestos, retenciones) debe asignarse para prevenir contingencias. La disciplina de estas obligaciones evita que la compraventa se desbalancee por efectos financieros o por eventos no previstos en la operación.",
                    },

                    {
                      type: "accordion",
                      header: "Obligaciones — comprador",
                      open: false,
                      text: "• Pagar precio (calendario y moneda) • Recibir y cooperar en entrega • Verificar conformidad • Denunciar vicios en plazo • Mantener y asegurar (venta a plazos) • Respetar restricciones de disposición.",
                    },

                    {
                      type: "paragraph",
                      text: "El **incumplimiento** activa remedios graduados: **cumplimiento específico** cuando tiene sentido (entrega de cuerpo cierto), **resolución** frente a incumplimientos graves, **daños y perjuicios**, **cláusula penal** e **intereses**. La proporcionalidad gobierna la elección: no todo retraso justifica resolución; pero el retardo que frustra la finalidad económica sí. La prueba robusta —actas de entrega, fotografías, reportes técnicos, comunicaciones— simplifica la tutela judicial o arbitral. Mecanismos alternativos (mediación/arbitraje) reducen tiempos y costos si definen sede, idioma y medidas cautelares. El objetivo operativo es que el contrato no sólo declare obligaciones, sino que diseñe su **gobernanza**: cómo se cumplen, cómo se prueban y cómo se corrigen.",
                    },
                    {
                      type: "paragraph",
                      text: "En síntesis, las obligaciones del vendedor y del comprador son la **columna vertebral** de la compraventa. Redactarlas con precisión —y enlazarlas con plazos, pruebas y remedios— convierte la promesa de intercambio en un verdadero sistema de **cumplimiento controlado**. La buena técnica no es maximalista; es clara, proporcionada y probatoria. Ese es el estándar que esta unidad busca instalar.",
                    },
                  ],
                },
                {
                  id: "1.2.1.8",
                  numbering: "2.1.8",
                  title: "Momento de la entrega de la cosa vendida",
                  content: [
                    {
                      type: "paragraph",
                      text: "La entrega es el punto de inflexión operativo de la compraventa: transforma un acuerdo obligacional en una situación de posesión útil y, según el régimen aplicable y lo pactado, incide en la transmisión del riesgo. Puede realizarse de modo real (tradición material), jurídico-simbólico (entrega de llaves o títulos) o virtual (puesta a disposición con aceptación), y suele documentarse con actas, recibos, guías o constancias registrales. Fijar con precisión el ‘cuándo’ y el ‘cómo’ evita litigios sobre mora, pérdida fortuita y saneamiento. En bienes registrables, la entrega se coordina con la forma e inscripción; en mercancías, con logística y transporte. Un contrato profesional detalla el estado de la cosa al momento de entrega, quién asume riesgos entre retiro y recepción, qué pruebas bastan (fotografías, reportes técnicos) y qué sucede si hay inconformidades. Esta coreografía protege la conmutatividad: el vendedor no puede retener indefinidamente sin causa; el comprador no puede exigir sin cumplir sus contrapartidas temporales o documentales.",
                    },
                    {
                      type: "paragraph",
                      text: "La tradición material se cumple con la transferencia física del bien; es intuitiva y eficaz cuando la cosa es corpórea y fácilmente trasladable. La tradición jurídico-simbólica opera por sustitutos aceptados (llaves del inmueble; documentos representativos como certificados o títulos; entrega a un depositario designado). La tradición virtual consiste en la puesta a disposición debidamente notificada, seguida de la posibilidad real de recepción del comprador; es útil cuando medien almacenes o plataformas logísticas. Existen, además, figuras como la ‘tradición brevi manu’ (quien ya posee a título distinto pasa a poseer como comprador) y el ‘constitutum possessorium’ (el vendedor conserva la posesión, pero a nombre del comprador). Estas variantes responden a la necesidad de sincronizar economía de la operación, forma exigida y prueba suficiente. Elegir la modalidad correcta no es estética: determina eficacia, oponibilidad y reparto de riesgos.",
                    },

                    {
                      type: "accordion",
                      header: "Tipos de entrega y efectos",
                      open: false,
                      text: "• Real: traspaso físico. • Jurídico-simbólica: llaves/títulos/terceros. • Virtual: puesta a disposición aceptada. • Brevi manu/constitutum possessorium: mutación del título posesorio. → Efectos: posesión útil, impacto en riesgos, cómputo de plazos y saneamiento.",
                    },

                    {
                      type: "paragraph",
                      text: "El reparto de **riesgos** (pérdida o deterioro por caso fortuito) debe aclararse: por regla de prudencia, el riesgo sigue a quien controla la cosa, aunque la legislación y el pacto pueden ubicarlo en momentos distintos (perfección, entrega, inscripción, recepción por transportista). En compraventas con transporte, señalar el punto crítico (‘handover’): ¿en bodega del vendedor, al primer transportista, en almacén intermedio, en destino con descarga? Definir este punto vincula la **mora** con la diligencia debida: si el comprador no coopera para recibir en tiempo, puede cargar con el riesgo; si el vendedor entrega anticipadamente sin condiciones, puede perder control sin haber asegurado el pago.",
                    },
                    {
                      type: "paragraph",
                      text: "La **prueba** de entrega evita discusiones retrospectivas. Actas firmadas, reportes de lectura de medidores, inventarios contrafirmados, fotografías con metadatos, folios de almacén o fe notarial constituyen evidencia bastante. Cuando la cosa se entrega por partes, conviene instrumentar minientregas con su propio checklist: cantidad, calidad, embalaje, daños visibles, reservas del comprador. Si la entrega exige desocupación o liberación de gravámenes, la prueba debe acreditarlo con documentos oficiales. El estándar es simple: un tercero debe poder verificar, sin interpretación creativa, que la entrega ocurrió, en qué estado y bajo qué condiciones.",
                    },

                    {
                      type: "accordion",
                      header: "Checklist de entrega segura",
                      open: false,
                      text: "• Punto y modo de entrega • Estado de la cosa (checklist técnico) • Evidencias (acta, fotos, lecturas) • Riesgos entre retiro y recepción • Reglas para reservas o rechazos • Coordinación con pago/inscripción.",
                    },

                    {
                      type: "paragraph",
                      text: "Los **rechazos** y **reservas** deben tratarse con finura. Si el comprador detecta defectos aparentes, debe asentarlos al recibir; si son ocultos, la denuncia oportuna preserva acciones de saneamiento. Pueden pactarse entregas condicionadas a pruebas de funcionamiento o certificaciones; si el resultado es desfavorable, se activa reparación, sustitución, rebaja o resolución. En bienes individualizados únicos (cuerpo cierto), el remedio preferente será la reparación o la rebaja; en bienes fungibles, la sustitución es viable. No menos importante es el **calendario de pagos**: enlazar hitos de entrega con liberación de fondos (o ‘escrow’) alinea incentivos. Con todo, la entrega no es un mero acto final: es el **puente** entre la promesa y la circulación efectiva del bien, y debe diseñarse con evidencia, coordinación y proporcionalidad.",
                    },
                    {
                      type: "paragraph",
                      text: "Por último, la entrega se integra a la **publicidad** y **oponibilidad**. En inmuebles y muebles registrables, la inscripción posterior consolida la eficacia frente a terceros; en mercancías, los documentos de transporte y depósito (conocimiento, carta porte, certificados) permiten oponer titularidad. El contrato debe programar estas etapas: quién inscribe, en qué plazo, con qué costos, y qué pasa si la inscripción se retrasa por causas ajenas. Una entrega correctamente documentada y publicitada cierra el circuito jurídico: no sólo se ‘da’, sino que se **prueba y defiende** lo dado.",
                    },
                  ],
                },
                {
                  id: "1.2.1.9",
                  numbering: "2.1.9",
                  title: "Modalidades de la compraventa",
                  content: [
                    {
                      type: "paragraph",
                      text: "La compraventa admite **modalidades** que ajustan la ecuación de riesgos, tiempos y garantías sin alterar su esencia (cosa vs. precio en dinero). Entre las más frecuentes: venta **al contado** o **a plazos**; con **reserva de dominio**; **ad corpus** o **ad mensuram**; de **cosa futura** (de esperanza o de cosa esperada); con **pacto de preferencia** o **pacto de no vender a determinada persona**; con **precio variable** (pericia, índice) o mixto. Cada modalidad modifica puntos neurálgicos: momento de transmisión del dominio y del riesgo; gobernanza del pago; remedios frente a desviaciones (diferencias de superficie, calidad, inexistencia). El profesional no ‘memoriza’ modalidades: elige y combina según finalidad económica, naturaleza del bien y tolerancia al riesgo. Lo central es que toda modalidad debe traducirse en cláusulas claras y en evidencias operativas. Una modalidad mal instrumentada no añade flexibilidad: añade litigiosidad.",
                    },
                    {
                      type: "paragraph",
                      text: "En **ventas a plazos**, el precio se difiere y se escalona. La **reserva de dominio** conserva la titularidad en el vendedor hasta el pago total, protegiéndolo frente a impago y frente a acreedores del comprador; exige publicidad cuando lo establezca la ley para oponerse a terceros. La cosa debe conservarse y asegurarse; el comprador asume deberes de custodia, mantenimiento y no disposición sin autorización. En caso de mora, pueden activarse cláusula penal, intereses, vencimiento anticipado y recuperación de la cosa. El equilibrio se mantiene con transparencia en estados de cuenta, recibos y mecanismos de reestructuración limitada. Esta modalidad es útil para bienes de alto valor unitario o para facilitar acceso sin financiación bancaria plena.",
                    },

                    {
                      type: "accordion",
                      header: "Mapa de modalidades (visión rápida)",
                      open: false,
                      text: "• Pago: contado vs. plazos (reserva de dominio) • Objeto: presente/futuro; ad corpus/ad mensuram • Precio: fijo/variable/mixto • Pactos especiales: preferencia, no vender a X • Riesgos: asignación explícita según modalidad.",
                    },

                    {
                      type: "paragraph",
                      text: "Las ventas **ad corpus** fijan precio por el cuerpo cierto en su conjunto, tolerando variaciones no sustanciales de cabida; las **ad mensuram** lo atan a superficie/medida, legitimando ajustes o resolución por diferencias relevantes. La cláusula debe definir márgenes de tolerancia y cómo se acreditan (levantamientos, peritajes). En **cosa futura**, la **venta de esperanza** traslada al comprador el azar de inexistencia, justificando el precio por el ‘alea’; en la **venta de cosa esperada**, el contrato queda supeditado a que la cosa llegue a existir (condición suspensiva). Estas modalidades requieren pruebas claras de existencia o de suceso aleatorio, para evitar reclamos por incumplimiento cuando lo sucedido era, justamente, el riesgo asumido.",
                    },
                    {
                      type: "paragraph",
                      text: "El **precio variable** introduce algoritmos: pericia independiente, referencias a índices públicos o fórmulas que combinen avalúo con métricas de rendimiento. La clave es blindar el método: designación del perito, plazos, posibilidad de impugnación por error manifiesto, sustitución por inactividad; identificación precisa de índice y serie; reglas ante cambios metodológicos. La transparencia de fuentes nivela información y evita que el precio variable se convierta en discrecionalidad encubierta. En sectores volátiles, este diseño protege a ambas partes y sostiene la conmutatividad a lo largo del tiempo.",
                    },

                    {
                      type: "accordion",
                      header: "Riesgos y mitigaciones por modalidad",
                      open: false,
                      text: "• Plazos: impago → garantías y reserva • Ad mensuram: diferencias → peritaje/ajuste • Cosa futura: inexistencia → condición o asunción del alea • Precio variable: sesgos → método y fuentes objetivas.",
                    },

                    {
                      type: "paragraph",
                      text: "Los **pactos especiales** complementan modalidades. El **pacto de preferencia** otorga al vendedor derecho de recompra en condiciones equivalentes; exige plazos y procedimientos para ejercitarlo y no puede tornarse restricción absoluta de la circulación. La **prohibición de vender a determinada persona** protege intereses legítimos (conflictos, competencia), pero no debe vaciar la libre disponibilidad. En cadenas contractuales, las modalidades deben armonizarse con arrendamientos, financiamiento y garantías. La prueba es el lenguaje común de todas: sin evidencia suficiente —inventarios, mediciones, certificaciones, estados de pago—, la modalidad pierde ejecutabilidad.",
                    },
                    {
                      type: "paragraph",
                      text: "En síntesis, las modalidades no son adornos doctrinales: son **herramientas de diseño** para alinear riesgos, tiempos y valor. Elegirlas y combinarlas exige pensar como ingeniero del contrato: qué buscamos proteger, quién puede asumir qué riesgo, qué evidencia habrá para probar cada hito y qué remedio procede si algo se desvía. Modalidades bien diseñadas igualan expectativas, reducen litigios y vuelven la compraventa un instrumento tan flexible como seguro.",
                    },
                  ],
                },
              ],
            },

            /* ───────────────────────── 2.2 La permuta ───────────────────────── */
            {
              id: "1.2.2",
              numbering: "2.2",
              title: "La permuta",
              content: [
                {
                  type: "paragraph",
                  text: "La permuta es el contrato traslativo de dominio en el que cada parte se obliga a transferir la propiedad de una cosa o un derecho a cambio de otra cosa o derecho, sin que el precio en dinero sea la prestación principal. Es, en esencia, un intercambio conmutativo: ambos permutantes son simultáneamente vendedores y compradores, con obligaciones espejo de entregar y sanear. Su utilidad práctica surge cuando las partes valoran más un bien específico que el dinero equivalente —por ejemplo, maquinaria por un predio, o derechos de uso por equipos—, y desean reasignar titularidades con seguridad jurídica. La permuta no es una versión ‘menor’ de la compraventa: exige el mismo rigor técnico en identificación del objeto, acreditación de titularidad y cargas, forma e inscripción cuando el bien sea registrable, y una matriz probatoria que haga oponible la transmisión frente a terceros. Su lógica moderna abandona el trueque informal y se transforma en un proyecto de cierre con hitos, evidencia y publicidad.",
                },
                {
                  type: "paragraph",
                  text: "Elementos. En el plano personal, se requiere capacidad y legitimación para disponer y adquirir; si se actúa por representación, los poderes deben ser suficientes y vigentes para enajenar. En el plano real, cada prestación es una ‘cosa-precio’: debe ser lícita, posible y determinada o determinable. Si el objeto es un derecho (usufructo, marca, crédito), el contrato debe precisar fuente, extensión, límites y oponibilidad. En el plano formal, rige la consensualidad salvo que la ley imponga solemnidades (p. ej., escritura pública e inscripción en inmuebles y ciertos muebles registrables). La equivalencia económica —núcleo de la conmutatividad— se acredita por pericia, avalúos o métodos objetivos; si hay asimetría, puede pactarse una compensación en dinero (soulteo) sin desnaturalizar la permuta, siempre que sea accesoria y se documente con trazabilidad contable y fiscal.",
                },
                {
                  type: "paragraph",
                  text: "Riesgo y saneamiento. Al permutar, cada parte responde por **evicción** (despojo por tercero con mejor derecho) y **vicios ocultos** (defectos que hagan la cosa impropia o disminuyan sustancialmente su valor). Esta reciprocidad duplica la importancia de las declaraciones y garantías sobre titularidad, gravámenes, estado y uso del bien. El momento de transferencia del riesgo debe definirse con precisión: entrega real, jurídica o virtual; brevi manu o constitutum possessorium, según corresponda. En entregas escalonadas, se fijará el punto de traspaso del riesgo (bodega, transportista, recepción) y el procedimiento de revisión/denuncia. La prueba es la columna vertebral: inventarios firmados, fotografías con metadatos, reportes técnicos, certificados registrales y fiscales. Con gobernanza probatoria clara, la permuta ofrece la misma seguridad que una compraventa bien estructurada.",
                },
                {
                  type: "paragraph",
                  text: "Gobernanza del cierre. Todo intercambio debe planearse como un pipeline: (i) due diligence registral y técnica; (ii) valuación y método de ajuste; (iii) obtención de certificados y liberaciones; (iv) minuta y firma; (v) entrega con checklist de estado; (vi) inscripción/publicidad cuando proceda. En intercambios complejos (predio por parque de maquinaria), la coordinación entre notaría, registro, peritos y logística es crítica. Se recomiendan cláusulas de conservación (no gravar/no disponer), seguros, condiciones suspensivas para licencias o liberaciones, y backstops (fecha tope) para evitar ‘hibernaciones’. Si existen terceros interesados (arrendatarios, acreedores), se instrumentan consentimientos o sustituciones. El estándar profesional es que un tercero técnico pueda verificar, sin interpretaciones creativas, que el intercambio es válido, oponible y equitativo.",
                },
                {
                  type: "paragraph",
                  text: "Fiscalidad y modalidades. Aunque la naturaleza civil de la permuta es conmutativa, sus efectos fiscales y contables pueden diferir de la compraventa; por ello, el contrato debe asignar impuestos, gastos y retenciones, y prever documentación soporte (facturas, avalúos, constancias). Modalmente, la permuta admite soulteo, permuta de cosa futura (condicionada a existencia), entregas diferidas y garantías de conservación. El mensaje operativo es contundente: la permuta no es un ‘trueque simpático’, sino una herramienta sofisticada para reasignar activos con el mismo rigor de una compraventa. Elegirla es razonable cuando la equivalencia se puede **objetivar** y **probar**, y cuando las partes desean optimizar valor, tiempos y costos de transacción bajo un marco de certeza.",
                },
                {
                  type: "accordion",
                  header: "Mapa de navegación — Permuta",
                  open: false,
                  items: [
                    {
                      header: "Nivel 1 · Estructura y validez",
                      text: "Capacidad y legitimación • Objeto lícito/determinable • Consensualidad vs. forma solemne • Escritura e inscripción cuando proceda.",
                    },
                    {
                      header: "Nivel 2 · Conmutatividad y riesgo",
                      text: "Equivalencia (pericia/método) • Soulteo accesorio • Saneamiento por evicción y vicios • Momento del riesgo y tipos de entrega.",
                    },
                    {
                      header: "Nivel 3 · Operativa y prueba",
                      text: "Due diligence • Checklists de entrega • Matriz probatoria (inventarios, fotos, certificados) • Publicidad y coordinación con terceros.",
                    },
                  ],
                },
              ],
              subthemes: [
                /* ───────── 2.2.1 Definición ───────── */
                {
                  id: "1.2.2.1",
                  numbering: "2.2.1",
                  title: "Definición",
                  content: [
                    {
                      type: "paragraph",
                      text: "La **permuta** es el contrato traslativo de dominio por el que cada parte se obliga a transferir la propiedad de una cosa —o un derecho— a cambio de otra cosa o derecho, sin intervención de un precio en dinero como prestación principal. Su lógica es la del intercambio directo (‘cosa por cosa’) y su función económica radica en reasignar bienes cuando las partes valoran recíprocamente su utilidad en términos no dinerarios. Doctrinalmente comparte estructura con la compraventa (consentimiento, objeto y forma), pero sustituye el precio por una cosa equivalente; de ahí su carácter **oneroso y conmutativo**: cada permutante es simultáneamente vendedor y comprador, con correlativas cargas de **entregar** y **sanear**. En contextos patrimoniales complejos (intercambio de un inmueble por maquinaria, permuta de derechos), la negociación exige inventarios, avalúos y reglas de compensación (‘soulteo’) para equilibrar diferencias de valor y evitar lesión. El material docente la presenta como el ‘trueque’ moderno: un intercambio de titularidades que demanda la misma disciplina probatoria y publicitaria que la compraventa cuando el objeto es registrable. :contentReference[oaicite:1]{index=1}",
                    },
                    {
                      type: "paragraph",
                      text: "Elementos. En **personales**, interesa la **capacidad** y la **legitimación** para disponer/adquirir; las partes deben estar habilitadas y, si actúan por representación, exhibir poderes suficientes y vigentes. En **reales**, cada prestación es una ‘cosa-precio’: bienes lícitos, posibles, determinados o determinables; cuando se trata de derechos (usufructo, marcas, créditos), su fuente, extensión y límites deben constar. En **formales**, rige la regla general de consensualidad, con exigencias de **escritura e inscripción** para inmuebles u otros bienes registrables a efectos de **oponibilidad** y tutela de terceros. La equivalencia económica se acredita por pericias o referencias objetivas, y si resulta asimétrica, puede pactarse una **compensación en dinero** que no desnaturaliza la permuta cuando es accesoria. En suma, la definición operativa de la permuta no se agota en ‘cosa por cosa’: exige describir técnicamente los bienes, mapear cargas y coordinar la forma legal para que el intercambio sea válido, eficaz y defendible. :contentReference[oaicite:2]{index=2}",
                    },

                    {
                      type: "accordion",
                      header: "Checklist de validez y eficacia en permuta",
                      open: false,
                      text: "• Capacidad y legitimación de ambas partes • Identificación técnica del bien/derecho • Equivalencia valorativa (pericia o método) • Forma exigida (escritura/inscripción, si aplica) • Saneamiento y asignación de riesgos • Reglas de compensación (soulteo) y fiscalidad. :contentReference[oaicite:3]{index=3}",
                    },

                    {
                      type: "paragraph",
                      text: "Equilibrio y conmutatividad. La permuta es **conmutativa** cuando las prestaciones guardan equivalencia. Para constatarla, conviene acordar un **método de valoración** (avalúo, índice, perito tercero) y un procedimiento de ajuste: si la diferencia supera cierto umbral, se paga soulteo o se rescinde. En intercambios de bienes heterogéneos (por ejemplo, predio rústico por flotilla de equipos), se precisa detallar **estado**, **calidad**, **número de serie**, **foliación registral** y **gravámenes**. La conmutatividad también se protege mediante garantías: seguros, no gravar o disponer hasta el cierre, fianzas de conservación, y condiciones suspensivas cuando falten licencias o liberaciones. La experiencia muestra que el conflicto habitual no es ‘si hubo permuta’, sino si lo permutado equivalía a lo esperado; por eso, el contrato debe convertir la equivalencia en **algoritmo verificable** y no en mera percepción subjetiva. :contentReference[oaicite:4]{index=4}",
                    },
                    {
                      type: "paragraph",
                      text: "Saneamiento y riesgos. Al ser recíproca, la permuta **duplica** el régimen de saneamiento: cada parte debe garantizar a la otra que nadie con mejor derecho la despojará (**evicción**) y que el bien carece de **vicios ocultos** que lo hagan impropio o disminuyan su valor. Si una prestación falla, los remedios pueden ser asimétricos: resolución total (restituciones cruzadas) o ajustes parciales. El **momento del riesgo** debe definirse: si hay entrega escalonada, ¿quién responde por pérdida fortuita entre la puesta a disposición y la recepción? Los **documentos** (actas, fotografías, certificados, constancias registrales) son la ‘columna probatoria’ del intercambio. La permuta no es menos segura que la compraventa; es igual de segura cuando internaliza prueba y publicidad. :contentReference[oaicite:5]{index=5}",
                    },

                    {
                      type: "accordion",
                      header: "Riesgos comunes y mitigaciones",
                      open: false,
                      text: "• Asimetría de valor → pericia y soulteo • Gravámenes ocultos → due diligence registral • Vicios no revelados → declaraciones/garantías y procedimiento de denuncia • Retrasos de terceros → condiciones suspensivas con fecha tope • Prueba débil → matriz documental mínima.",
                    },

                    {
                      type: "paragraph",
                      text: "Forma y publicidad. Si el objeto es **inmueble** o un **mueble registrable**, la permuta requiere **escritura** e **inscripción** para oponerse a terceros, exactamente como en la compraventa. No es un ‘acto menor’: encadena **títulos previos**, **certificados de libertad de gravamen**, **situación fiscal** y, en su caso, **autorizaciones sectoriales**. En derechos inmateriales, la oponibilidad depende de **anotaciones** ante la autoridad competente (p. ej., marcas, patentes). Ignorar la publicidad convierte la permuta en un acuerdo privado difícil de defender; incorporar la publicidad la convierte en un dispositivo de circulación patrimonial seguro. :contentReference[oaicite:6]{index=6}",
                    },
                    {
                      type: "paragraph",
                      text: "Gobernanza del cierre. Un plan de trabajo separa **hitos** (valoración, verificación registral, emisión de certificados, firma, entrega y publicidad) con responsables y plazos; vincula **evidencias** a cada hito y prevé **contingencias** (prórrogas tasadas, sustitución de perito, correcciones registrales). Cuando existen terceros interesados (arrendatarios, acreedores prendarios/hipotecarios), se instrumentan **consentimientos** o **liberaciones** previas. La permuta, así concebida, no es sólo un trueque sofisticado: es un **sistema de ejecución controlada** que preserva la equivalencia, tutela a terceros y reduce la litigiosidad. :contentReference[oaicite:7]{index=7}",
                    },
                  ],
                },

                /* ───────── 2.2.2 Semejanzas y diferencias con la compraventa ───────── */
                {
                  id: "1.2.2.2",
                  numbering: "2.2.2",
                  title: "Semejanzas y diferencias con la compraventa",
                  content: [
                    {
                      type: "paragraph",
                      text: "Semejanzas nucleares. La permuta y la compraventa son **contratos traslativos de dominio**, **bilaterales**, **onerosos** y, en principio, **consensuales**. Exigen **capacidad** y **legitimación**, un **objeto** lícito y determinable, y la **forma** que la ley imponga para ciertos bienes (escritura/inscripción en inmuebles). Ambas demandan **saneamiento** por evicción y vicios, asignación de **riesgos** y una **matriz probatoria** que acredite entrega y estado de lo transmitido. En las dos figuras, la seguridad del tráfico depende de la **publicidad** y de la **trazabilidad** documental. Por tanto, no es correcto tratar la permuta como ‘contrato menor’: si el objeto es registrable, la exigencia formal y publicitaria es idéntica; si se trata de bienes no registrables, la prueba sigue siendo imprescindible para oponer el acto frente a terceros y autoridades. Estas coincidencias explican que la técnica de cierre y los checklists se parezcan: lo que cambia es la **naturaleza de la contraprestación**. :contentReference[oaicite:8]{index=8}",
                    },
                    {
                      type: "paragraph",
                      text: "Diferencia estructural. En la **compraventa** el **precio** debe ser **cierto y en dinero**; en la **permuta**, cada cosa funge como ‘precio’ de la otra. Esta diferencia impacta la **valoración**, la **fiscalidad** y, a veces, la **forma de pago** (no hay desembolso dinerario principal, aunque puede haber **soulteo** accesorio). En compraventa, el diseño se centra en precio, calendario e instrumentos de pago; en permuta, en asegurar **equivalencia** y **calidad** de lo recibido. En términos contables y tributarios, la permuta puede desencadenar tratamientos distintos (no desarrollados en el módulo), pero a nivel civil la clave es que la **conmutatividad** se acredita mediante pericia y documentación del estado de los bienes. Cualquier indeterminación de la contraprestación rompe la equivalencia y convierte el contrato en fuente de litigio. :contentReference[oaicite:9]{index=9}",
                    },

                    {
                      type: "accordion",
                      header: "Semejanzas clave (resumen)",
                      open: false,
                      text: "• Traslativas de dominio • Bilaterales, onerosas, consensuales • Capacidad y legitimación • Forma e inscripción cuando proceda • Saneamiento por evicción/vicios • Necesidad de prueba y publicidad. :contentReference[oaicite:10]{index=10}",
                    },

                    {
                      type: "paragraph",
                      text: "Riesgo y saneamiento. En **compraventa**, el vendedor sanea al comprador; en **permuta**, **ambos** sanean, pues cada uno es vendedor respecto de lo que entrega. Esto duplica la necesidad de declaraciones sobre **titularidad**, **gravámenes**, **uso** y **estado**. La asignación del **riesgo** (pérdida fortuita) se rige por el control y por lo pactado: si hay entregas escalonadas, conviene fijar puntos de traspaso del riesgo (bodega, transportista, recepción). En bienes con **vicios ocultos**, la denuncia oportuna habilita remedios: sustitución, reparación, rebaja o resolución. La **prueba** (actas, fotos, informes técnicos) es el lenguaje común que estabiliza ambos contratos. El estándar profesional exige convertir esos riesgos en **procedimientos**: cómo se revisa, cómo se denuncia, cómo se corrige. :contentReference[oaicite:11]{index=11}",
                    },
                    {
                      type: "paragraph",
                      text: "Modalidades y gobernanza. La compraventa despliega modalidades propias (a plazos, reserva de dominio, ad corpus/ad mensuram, cosa futura, precio variable). La permuta, aunque menos variada, admite **permuta con soulteo**, **permuta de cosa futura** (condición de existencia) y esquemas de **entrega diferida**. En ambas, las modalidades reconfiguran **garantías** (seguros, prohibición de gravar, conservación) y **remedios** (cláusula penal, resolución, cumplimiento específico). En operaciones con **terceros** (arrendatarios, acreedores), la gobernanza exige consentimientos previos y sincronía con **publicidad registral**. El operador jurídico debe leer el negocio final —no sólo la etiqueta— y escoger las herramientas que mejor alineen valor, tiempo y riesgo. :contentReference[oaicite:12]{index=12}",
                    },

                    {
                      type: "accordion",
                      header: "Diferencias determinantes",
                      open: false,
                      text: "• Prestación principal: precio en dinero (compraventa) vs. cosa/derecho (permuta) • Eje del diseño: calendario de pagos vs. equivalencia y calidad • Saneamiento: unidireccional vs. recíproco • Fiscalidad y contabilidad: efectos distintos (según normativa aplicable). :contentReference[oaicite:13]{index=13}",
                    },

                    {
                      type: "paragraph",
                      text: "Prueba y publicidad. Tanto en compraventa como en permuta, la **oponibilidad** frente a terceros surge de la correcta **publicidad** (inscripción en registros cuando proceda) y de un expediente **trazable**. No basta una minuta: se requieren **títulos previos**, **certificados de libertad de gravamen**, **constancias fiscales**, **inventarios** y, en su caso, **pericias** de valor. La diferencia práctica es que en la permuta debe acreditarse la **equivalencia** de ambas prestaciones, mientras que en la compraventa se acredita el **precio** y su forma de pago. Ignorar estos pivotes vuelve frágil la transmisión. La enseñanza del módulo es clara: las semejanzas permiten reutilizar plantillas y checklists; las diferencias obligan a recalibrar cláusulas y evidencia. :contentReference[oaicite:14]{index=14}",
                    },
                    {
                      type: "paragraph",
                      text: "Conclusión operativa. Permuta y compraventa comparten **arquitectura** pero tienen **centros de gravedad** distintos. En permuta, el reto es objetivar la equivalencia y asegurar la calidad de lo recibido; en compraventa, proteger el equilibrio ‘cosa–precio’ y la solvencia del pago. En ambas, la profesionalidad se mide por la capacidad de **diseñar**: identificar riesgos, asignar responsabilidades, pautar prueba y publicidad, y articular remedios proporcionados. Esta visión, coherente con el material de la unidad, convierte a ambos contratos en instrumentos eficaces de circulación patrimonial, aptos para sostener la seguridad del tráfico y la confianza del mercado. :contentReference[oaicite:15]{index=15}",
                    },
                  ],
                },
              ],
            },
            /* 2.3 La donación */
            {
              id: "1.2.3",
              numbering: "2.3",
              title: "La donación",
              content: [
                {
                  type: "paragraph",
                  text: "La donación es un contrato **gratuito** y **traslativo de dominio** por el cual una persona (donante) transfiere a otra (donatario) la propiedad de bienes o derechos **sin contraprestación** principal en dinero. Su función social es evidente: permite redistribuir riqueza y adelantar asignaciones patrimoniales bajo reglas de legalidad, forma y publicidad. A diferencia de la compraventa o la permuta, el eje no es la conmutatividad sino la **liberalidad**; sin embargo, conserva la misma exigencia de **validez**: capacidad y legitimación del donante, objeto lícito y determinado/determinable, y, cuando la ley lo impone, solemnidades (p. ej., escritura en inmuebles) para oponibilidad frente a terceros. El material del módulo delimita además sus **variedades**: donación **entre vivos** (produce efectos en vida) y **mortis causa** (condicionada al fallecimiento, próxima a lógicas testamentarias), así como la **universal** y la **particular**. En todas, el punto operativo es idéntico: la liberalidad debe ser clara, **aceptada** por el donatario y **probable** con documentos idóneos para que el traspaso no quede a merced de impugnaciones. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "La **estructura** del contrato reclama precisión técnica. En el plano personal: el donante debe tener capacidad y **disposición** sobre el bien al momento de donar; el donatario debe ser **susceptible** de recibir (incluso concebidos no nacidos, conforme a representación y viabilidad). En el plano real: sólo se donan **bienes presentes**; los bienes futuros quedan excluidos por imposibilidad de disponer de lo inexistente. En el plano formal: la regla es la consensualidad con **formas reforzadas** según naturaleza y valor del bien (verbal para objetos de escaso valor, escrita o escritura pública e **inscripción** tratándose de inmuebles u otros bienes registrables). La **aceptación** es constitutiva: sin ella la donación no perfecciona sus efectos; puede ser expresa o tácita, pero conviene documentarla para blindar la oponibilidad. Estas exigencias no son ceremonialismo: convierten una intención generosa en un **acto defendible** ante terceros y autoridades. :contentReference[oaicite:2]{index=2}",
                },
                {
                  type: "paragraph",
                  text: "Tipologías y alcance. La **donación universal** pretende abarcar la totalidad del patrimonio del donante; por su propia naturaleza, el ordenamiento la **restringe** o exige reservas para asegurar el **sustento** del donante, evitando su despojo absoluto. La **donación entre vivos** produce efectos inmediatos con pérdida de la libre disposición por el donante sobre el bien donado; la **donación mortis causa**, en cambio, supedita sus efectos al fallecimiento y conserva al donante facultades dispositivas hasta entonces, aproximándose a reglas de sucesión. Operativamente, muchas donaciones son **condicionadas** o **modales** (imponen una carga al donatario), lo que exige traducir el modo en obligaciones verificables (p. ej., conservación de un bien cultural) y prever consecuencias por incumplimiento (revocación o restitución). El diseño debe evitar ambigüedades que desdibujen el alcance del beneficio o que vulneren límites legales de orden público. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "paragraph",
                  text: "Efectos y tutela de terceros. La donación despliega efectos reales (traslación de dominio) y **personales** (cargas/modos). Para proteger a terceros, el sistema prevé **publicidad** (inscripción) y salvaguardas frente a **acreedores**: donaciones que lesionan la garantía común pueden impugnarse (incluso penalmente, según el caso, por insolvencia fraudulenta). De ahí la importancia de una **diligencia previa** básica: situación registral, existencia de gravámenes, verificación fiscal y, si aplica, autorizaciones sectoriales. Asimismo, el donante conserva **acciones de revocación** por causales típicas (p. ej., **ingratitud** o negativa injustificada del donatario a auxiliarlo cuando cae en pobreza), de alcance y requisitos tasados. En la práctica, documentar el **estado** del bien, su **libertad de gravamen** y las **condiciones** del modo reduce litigiosidad, pues fija expectativas de conservación, uso y, en su caso, restitución. :contentReference[oaicite:4]{index=4}",
                },
                {
                  type: "paragraph",
                  text: "Gobernanza documental y fiscalidad. Un cierre profesional alinea **intención–forma–publicidad**: (i) instrumento que identifique con precisión el bien o derecho, (ii) **aceptación** del donatario (misma escritura o acto separado), (iii) constancias registrales y fiscales, (iv) cláusulas de **reserva** para sustento del donante cuando proceda, (v) reglas sobre **modos** y verificación de su cumplimiento. En inmuebles, el binomio **escritura + inscripción** es ineludible; en intangibles, rigen anotaciones ante la autoridad competente. En materia fiscal y contable —aunque el módulo no profundiza— conviene asignar con claridad **impuestos, gastos y retenciones**, y generar evidencia (comprobantes, avalúos si se requieren) para evitar contingencias. Con este enfoque, la donación deja de ser un gesto informal y se consolida como un **acto jurídico robusto**, compatible con la protección del donante, la seguridad del donatario y los derechos de terceros. :contentReference[oaicite:5]{index=5}",
                },
                {
                  type: "accordion",
                  header: "Mapa de estudio — Donación",
                  open: false,
                  items: [
                    {
                      header: "Nivel 1 · Definición y naturaleza",
                      text: "Contrato gratuito y traslativo • Donante/Donatario • Entre vivos vs. mortis causa • Universal vs. particular. :contentReference[oaicite:6]{index=6}",
                    },
                    {
                      header: "Nivel 2 · Elementos y forma",
                      text: "Capacidad/legitimación • Bienes presentes y objeto determinado • Aceptación constitutiva • Escritura/inscripción cuando proceda. :contentReference[oaicite:7]{index=7}",
                    },
                    {
                      header: "Nivel 3 · Efectos, límites y revocación",
                      text: "Publicidad y tutela de acreedores • Modos/cargas y verificación • Revocación por ingratitud o causas legales • Reserva para sustento. :contentReference[oaicite:8]{index=8}",
                    },
                  ],
                },
              ],
              subthemes: [
                {
                  id: "1.2.3.1",
                  numbering: "2.3.1",
                  title: "Definición y elementos",
                  content: [
                    {
                      type: "paragraph",
                      text: "La **donación** es un contrato **gratuito** y **traslativo de dominio** por el cual el **donante** transfiere al **donatario** la propiedad de bienes o derechos sin contraprestación principal en dinero. En el enfoque del módulo, su núcleo es la **liberalidad**: un desplazamiento patrimonial voluntario que, sin dejar de ser acto de benevolencia, debe cumplir requisitos de **validez** (capacidad y legitimación), **licitud y determinación** del objeto, y, cuando la ley lo exige, **solemnidades** que aseguren **oponibilidad** frente a terceros. La **aceptación** del donatario es constitutiva: sin ella, la donación no perfecciona sus efectos; puede ser expresa o tácita, pero siempre conviene documentarla. El material destaca, además, reglas particulares (p. ej., donaciones antenupciales y supuestos de revocación), que evidencian que el régimen no es laxo: la liberalidad se inserta en una arquitectura de tutela del donante, del donatario y de terceros. :contentReference[oaicite:1]{index=1}",
                    },
                    {
                      type: "paragraph",
                      text: "En **elementos personales**, el eje es doble: **capacidad** para obligarse y **legitimación** para disponer. El donante debe poder **transmitir** (titularidad y facultad de disposición) y el donatario debe poder **adquirir** (incluso concebidos no nacidos, mediante representantes, según el módulo). En **elementos reales**, el objeto debe ser **lícito**, **posible** y **determinado o determinable**; la docencia subraya que el foco son **bienes presentes** (los bienes futuros no son objeto idóneo de donación entre vivos). En **elementos formales**, rige la consensualidad salvo que la ley imponga **escritura** e **inscripción** (inmuebles y ciertos bienes registrables) para publicidad y tutela de terceros. Esta triada (personales, reales, formales) opera como checklist de existencia, validez y eficacia del contrato.",
                    },

                    {
                      type: "accordion",
                      header: "Checklist de validez y forma",
                      open: false,
                      text: "• Donante con legitimación para disponer • Donatario hábil (o representante) • Objeto lícito y determinado • Aceptación constitutiva • Forma reforzada cuando proceda (escritura/inscripción) • Evidencia documental mínima (identificaciones, títulos, certificados).",
                    },

                    {
                      type: "paragraph",
                      text: "La **aceptación** debe tratarse con técnica: puede integrarse en el mismo instrumento o constar en acto separado; en cualquier caso, debe **notificarse** al donante para producir efectos. La **falta de aceptación** neutraliza la transmisión; la **aceptación condicionada** es viable si las cargas son claras y verificables. En donaciones modales (con **carga** a cargo del donatario) conviene describir con precisión el **modo** y su **verificación** (informes, plazos, auditoría), así como las **consecuencias** por incumplimiento (resolución o revocación). La claridad en este punto evita que el modo se convierta en fuente de disputas sobre el alcance de la obligación asumida por el beneficiario.",
                    },
                    {
                      type: "paragraph",
                      text: "El **objeto** de la donación exige la misma finura que en un contrato oneroso: identificación técnica del bien (folio real, cabida y linderos en inmuebles; número de serie en muebles registrables; expediente o registro en intangibles), **estado** y **cargas** (gravámenes, servidumbres), además de su **situación fiscal**. Cuando el objeto sea un **derecho**, debe precisarse su **fuente**, **extensión** y **límites** (p. ej., alcance de un usufructo o de un crédito). La determinación cualitativa (calidad, uso, conservación) es clave, pues el régimen de **vicios** y **saneamiento** en donación difiere de compraventa, pero no exime de describir lo donado con estándares probatorios elevados.",
                    },

                    {
                      type: "accordion",
                      header: "Riesgos típicos y mitigaciones",
                      open: false,
                      text: "• Indeterminación del objeto → anexos técnicos y folios • Ausencia de aceptación fehaciente → aceptación en instrumento • Cargas no reveladas → certificados y declaratorias • Donaciones antenupciales o con conflicto → cláusulas de reversión/condiciones • Tutela de terceros → inscripción y constancias fiscales.",
                    },

                    {
                      type: "paragraph",
                      text: "La **publicidad** no es ornamento: inscribir la donación cuando el bien lo exige protege a terceros de buena fe y consolida la **oponibilidad**. A su vez, la **tutela de acreedores** opera como límite: donaciones que **lesionan** la garantía común pueden impugnarse (acción pauliana) y, en hipótesis extremas, asociarse a **insolvencia fraudulenta** si hubo ánimo de eludir obligaciones, como advierte el material. Por ello, un expediente diligente (títulos previos, certificados de libertad de gravamen, constancias fiscales) es consustancial a la donación segura.",
                    },
                    {
                      type: "paragraph",
                      text: "Conclusión operativa: convertir la liberalidad en un **acto defendible** exige **diseño** (qué, cómo y cuándo se dona), **evidencia** (qué documento prueba cada hito) y **publicidad** (qué registro y en qué plazo). Con este enfoque, la donación preserva la voluntad del donante, protege al donatario y respeta a terceros. Es, en suma, una herramienta de política familiar y patrimonial cuya seguridad depende de la técnica con que se instrumente, no de su gratuidad. :contentReference[oaicite:2]{index=2}",
                    },
                  ],
                },
                {
                  id: "1.2.3.2",
                  numbering: "2.3.2",
                  title: "Donación universal",
                  content: [
                    {
                      type: "paragraph",
                      text: "La **donación universal** se concibe como aquella que abarca la **totalidad** de los bienes **presentes** del donante (y, doctrinalmente, nunca bienes futuros), con reservas legales para garantizar su **sustento**. El módulo la presenta como figura de gran calado, próxima al diseño sucesorio por su alcance patrimonial, y advierte la necesidad de proteger al donante frente al despojo absoluto. Operativamente, esta donación exige especial rigor en **forma** (escritura pública cuando procede) y **publicidad** (inscripción), así como en la **aceptación** del donatario, que consolida los efectos. La universalidad no altera la naturaleza **gratuita** ni el carácter **traslativo**, pero sí intensifica controles: inventarios, certificaciones, cláusulas de **reserva** (plena propiedad o usufructo) y delimitación de **modos**. :contentReference[oaicite:3]{index=3}",
                    },
                    {
                      type: "paragraph",
                      text: "Límites y reservas. Por razones de **orden público**, el sistema restringe o condiciona la donación universal: (i) no puede comprender **bienes futuros**; (ii) debe prever **reservas suficientes** para la manutención del donante, acorde con sus circunstancias; (iii) no puede vulnerar derechos mínimos de terceros. En términos de **responsabilidad**, si el donatario asume **deudas** del donante, el instrumento debe precisar el **alcance temporal** (habitualmente, las contraídas antes de la donación) y el **régimen de garantías**. Esta arquitectura evita que la liberalidad se convierta en vehículo de **insolvencia** o de traslado de pasivos no deseado. La universalidad, bien diseñada, equilibra la voluntad de transferir con la obligación de **proteger** al disponente y a su entorno jurídico.",
                    },

                    {
                      type: "accordion",
                      header: "Reglas operativas clave",
                      open: false,
                      text: "• Ámbito: sólo bienes presentes • Reserva para sustento (plena propiedad o usufructo) • Asignación de deudas (alcance y fecha de corte) • Escritura e inscripción • Inventarios y certificaciones de cargas.",
                    },

                    {
                      type: "paragraph",
                      text: "Forma y publicidad. La donación universal, por su objeto y efectos, exige **instrumentación notarial** y **registro** cuando los bienes lo requieran. El **inventario** anexo es pieza obligada: identifica bienes, cargas y estado. La **aceptación** del donatario puede plasmarse en el mismo acto; de hacerlo en documento separado, debe **notificarse** al donante. La inscripción cumple doble función: legitima la oponibilidad y disciplina la cadena de titularidad para futuras transmisiones. Sin estos peldaños, la universalidad queda expuesta a impugnaciones y a ineficacias parciales.",
                    },
                    {
                      type: "paragraph",
                      text: "Efectos. La donación universal despliega un efecto **global**: traslado de titularidad (salvo reservas), sujeción a **modos** o **cargas** pactadas y, en su caso, asunción de deudas determinadas. No debe confundirse con **testamento**: la primera produce efectos con aceptación y, tratándose de entre vivos, antes del fallecimiento; el segundo, sólo **mortis causa**. Pueden coexistir si se diseña correctamente el mapa patrimonial, pero no se sustituyen. El material enfatiza que, cualquiera sea el diseño, la **aceptación** y la **publicidad** sostienen la eficacia y la defensa frente a terceros. :contentReference[oaicite:4]{index=4}",
                    },

                    {
                      type: "accordion",
                      header: "Documentación mínima",
                      open: false,
                      text: "• Minuta con inventario anexo • Certificados de libertad de gravamen • Constancias fiscales • Aceptación del donatario • Escritura e inscripción (cuando proceda).",
                    },

                    {
                      type: "paragraph",
                      text: "Tutela de acreedores. Cualquier donación universal que deteriore la **garantía común** es susceptible de **impugnación** por los acreedores (vía pauliana). El módulo además recuerda la noción de **insolvencia fraudulenta** como figura típica cuando el disponente se coloca deliberadamente en imposibilidad de cumplir. De ahí que el expediente deba incorporar análisis **ex ante** del impacto en la solvencia del donante, y, de ser necesario, **condiciones suspensivas** o exclusiones específicas. Diseñar con esta prudencia reduce litigios y protege la liberalidad auténtica.",
                    },
                    {
                      type: "paragraph",
                      text: "Cierre operativo. Una donación universal bien estructurada es un **proyecto**: (i) levantamiento patrimonial; (ii) mapa de cargas y deudas; (iii) definición de reservas; (iv) minuta con modos y verificación; (v) aceptación; (vi) formalización e inscripción; (vii) archivo probatorio. Siguiendo esta secuencia, la figura honra la voluntad del donante sin sacrificar seguridad jurídica ni tutela de terceros. :contentReference[oaicite:5]{index=5}",
                    },
                  ],
                },
                {
                  id: "1.2.3.3",
                  numbering: "2.3.3",
                  title: "Donación entre vivos y mortis causa",
                  content: [
                    {
                      type: "paragraph",
                      text: "La distinción **entre vivos** / **mortis causa** pivota sobre **cuándo** produce efectos y **qué** poder de disposición conserva el donante. La **donación entre vivos** opera en vida del donante una vez **aceptada**, con traslado efectivo de la titularidad (salvo reservas o modos). La **donación mortis causa**, por el contrario, subordina sus efectos al **fallecimiento** del donante, quien **conserva** hasta ese momento la facultad de disponer, asemejándose —según el módulo— a la lógica de **legados** y **herencia**. Esta diferencia temporal y funcional reubica la formalidad, la publicidad y la revocabilidad, y exige que el operador califique correctamente la figura para evitar colisiones con el derecho sucesorio. :contentReference[oaicite:6]{index=6}",
                    },
                    {
                      type: "paragraph",
                      text: "Donación **entre vivos**. Elementos: voluntad dispositiva del donante, aceptación del donatario, objeto presente lícito y determinado, forma cuando la ley la exige. Efectos: pérdida por el donante del poder de disposición sobre lo donado (salvo reservas), adquisición por el donatario con la oponibilidad que confiere la inscripción. Revocación: sólo por causas **tasadas** (p. ej., **ingratitud** o supuestos legales), no por simple cambio de ánimo. Operativamente, el cierre exige inventarios, certificados y, en su caso, condiciones **modales** con verificación objetiva. Los conflictos habituales (falta de aceptación fehaciente, cargas no reveladas, publicidad defectuosa) se previenen con expediente robusto.",
                    },

                    {
                      type: "accordion",
                      header: "Comparativa — entre vivos vs. mortis causa",
                      open: false,
                      text: "• Efectos: inmediatos vs. diferidos al fallecimiento • Poder de disposición del donante: perdido vs. conservado • Revocabilidad: tasada vs. libre antes del deceso • Publicidad: inscripción inmediata vs. efectos sucesorios • Riesgos: tutela del donante y de terceros.",
                    },

                    {
                      type: "paragraph",
                      text: "Donación **mortis causa**. La eficacia queda condicionada al **fallecimiento**; hasta entonces, el donante retiene la titularidad y puede **revocar** libremente. Por su afinidad con el **derecho hereditario**, su instrumentación debe respetar las reglas **sucesorias** vigentes (p. ej., compatibilidad con testamento, capacidad para disponer, límites de legítimas donde existan). La aceptación del donatario puede diferirse; con todo, conviene que conste de manera que, llegado el evento, la transmisión no quede en suspenso por falta de manifestación. Al ser un acto de efectos póstumos, las exigencias de forma y de publicidad se sincronizan con el procedimiento sucesorio.",
                    },
                    {
                      type: "paragraph",
                      text: "Publicidad y oponibilidad. En **entre vivos**, la inscripción consolida la oponibilidad y protege a terceros. En **mortis causa**, la eficacia y la publicidad se insertan en la secuencia del **proceso sucesorio**: apertura, inventario, avalúo y adjudicación. La documentación de la voluntad del donante y de la aceptación del donatario —aunque sea diferida— simplifica la ejecución post mortem. En ambos casos, la trazabilidad probatoria (instrumentos, certificados, notificaciones) es el lenguaje que permite a jueces y terceros verificar la legitimidad del traspaso.",
                    },

                    {
                      type: "accordion",
                      header: "Gobernanza documental",
                      open: false,
                      text: "• Entre vivos: minuta + aceptación + inscripción • Mortis causa: instrumento compatible con testamento • Notificaciones y constancias • Inventarios y avalúos cuando proceda.",
                    },

                    {
                      type: "paragraph",
                      text: "Riesgos y límites. En **entre vivos**, la liberalidad no puede dejar al donante sin medios de vida (reserva). En **mortis causa**, debe coordinarse con legados y cargas del caudal. En ambos, la **tutela de acreedores** funciona como contrapeso: actos que lesionen la garantía común son impugnables. Por último, la **capacidad** del donante y la **viabilidad** del donatario (incluidos concebidos) deben verificarse, evitando nulidades sobrevenidas. Esta lectura comparada alinea voluntad, seguridad y respeto al orden público. :contentReference[oaicite:7]{index=7}",
                    },
                    {
                      type: "paragraph",
                      text: "Cierre operativo. La elección entre donación entre vivos y mortis causa depende del objetivo: **inmediatez** y pérdida del dominio vs. **diferimiento** y conservación de facultades. Con reglas claras de forma, publicidad y prueba, ambas son herramientas válidas de política patrimonial. La clave está en **diseñar**: qué se dona, cuándo produce efectos, con qué reservas y cómo se documenta; lo demás es litigio prevenible.",
                    },
                  ],
                },
                {
                  id: "1.2.3.4",
                  numbering: "2.3.4",
                  title: "Quiénes pueden recibir donaciones",
                  content: [
                    {
                      type: "paragraph",
                      text: "La regla general indica que pueden recibir donaciones todas las personas capaces de adquirir, sean físicas o morales, siempre que no exista prohibición expresa. En personas físicas, basta la capacidad de goce para ser sujeto del beneficio, aunque la de ejercicio condicionará la forma de aceptar: menores o personas con apoyos requerirán representación o autorización según el caso. En personas morales, el punto crítico es su objeto y fines: pueden aceptar donaciones cuando su estatuto lo permita y el destino sea congruente con su giro. En ambos supuestos, la aceptación es constitutiva; sin ella, la liberalidad no perfecciona efectos. Esta apertura se modula por límites de orden público y por la tutela de terceros (acreedores), de modo que el sistema admite la liberalidad sin desproteger a la comunidad jurídica.",
                    },
                    {
                      type: "paragraph",
                      text: "La recepción por **menores** o personas sujetas a medidas de apoyo impone salvaguardas. Pueden adquirir por donación mediante sus representantes, pero la forma y, en su caso, la autorización judicial, dependerán de la naturaleza y valor del bien. Si se trata de bienes registrables o de alto riesgo, la prudencia aconseja blindar la aceptación con controles adicionales (dictámenes, inventarios, aseguramiento) para garantizar conservación y uso adecuado. El diseño debe evitar que la donación se convierta en carga desproporcionada o en foco de conflictos familiares; por eso, las cláusulas de administración y supervisión pueden ser pertinentes.",
                    },

                    {
                      type: "accordion",
                      header: "Capacidad para recibir — claves",
                      open: false,
                      text: "• Personas físicas: capacidad de goce; aceptación por representante si procede • Personas morales: objeto social y fines lícitos • Aceptación constitutiva • Salvaguardas para sujetos con apoyos.",
                    },

                    {
                      type: "paragraph",
                      text: "Respecto de **personas morales no lucrativas** (asociaciones, fundaciones), la recepción de donativos está condicionada a fines **altruistas** o **de interés social** y a la observancia de su normativa interna. La congruencia entre el bien donado y el fin institucional evita desvíos. En ciertos regímenes, la posibilidad de deducibilidad fiscal exige requisitos adicionales (constancias específicas), que, aunque extracontractuales, conviene anticipar en el expediente para habilitar el objetivo del donante. La aceptación, en estas entidades, se materializa mediante el órgano competente (asamblea, patronato, dirección), con las mayorías previstas estatutariamente.",
                    },
                    {
                      type: "paragraph",
                      text: "Existen **prohibiciones y restricciones** que, por razones éticas o de integridad, impiden o acotan la recepción: funcionarios en ámbitos incompatibles, entes que comprometerían su imparcialidad, o supuestos que encubren liberalidades simuladas para burlar acreedores. Cuando la aceptación pudiera generar conflicto de interés, el contrato debe evidenciar el análisis de integridad (declaraciones y controles) y, en su caso, encauzar la donación mediante vehículos adecuados (p. ej., fideicomiso con fines determinados). La prudencia documental es el antídoto frente a cuestionamientos posteriores.",
                    },

                    {
                      type: "accordion",
                      header: "Órganos y documentos de aceptación",
                      open: false,
                      text: "• Personas físicas: firma del representante y, si corresponde, autorización • Personas morales: acta del órgano competente • Documentos: identificaciones, poderes, estatutos, constancias de fines • Evidencia: acuerdo de aceptación y destino del bien.",
                    },

                    {
                      type: "paragraph",
                      text: "La **aceptación tácita** (hechos concluyentes) puede operar en donaciones de poca entidad, pero en bienes relevantes la mejor práctica impone manifestación **expresa** y trazable. Además, la aceptación debe **notificarse** al donante para producir efectos plenos, y en bienes registrables integrarse al instrumento de formalización para permitir la inscripción. Así, el beneficiario queda investido de un derecho defendible; el donante, de la certeza de haber cumplido su voluntad; y los terceros, de la información necesaria para confiar en la transmisión.",
                    },
                    {
                      type: "paragraph",
                      text: "Conclusión operativa: pueden recibir donaciones quienes el ordenamiento no prohíba, con la forma y controles que su situación demande. La clave no es ‘quién’ de modo abstracto, sino **cómo** se acredita la capacidad, **quién** acepta válidamente y **qué** documentos lo prueban. Ese trípode convierte la legitimidad en oponibilidad y cierra el paso a impugnaciones innecesarias.",
                    },
                  ],
                },
                {
                  id: "1.2.3.5",
                  numbering: "2.3.5",
                  title: "Efectos de la donación",
                  content: [
                    {
                      type: "paragraph",
                      text: "Los efectos de la donación se proyectan en dos planos: **reales** y **personales**. En el plano real, una vez cumplidos los requisitos de validez y **aceptada** la liberalidad, se produce la **traslación del dominio** del bien donado (salvo reservas). En el plano personal, nacen las **cargas** o **modos** si se impusieron al donatario (p. ej., conservar un bien con valor cultural, destinarlo a cierto uso). Ambos efectos reclaman **publicidad** cuando el bien sea registrable, para oponer la transmisión frente a terceros. El sistema protege, además, el interés del donante con herramientas de **revocación** por causas tasadas y con límites a la **donación universal** para asegurar su sustento. Por ello, el expediente de cierre debe coordinar voluntad, prueba e inscripción.",
                    },
                    {
                      type: "paragraph",
                      text: "Un efecto esencial es la **pérdida** por el donante del poder de **disposición** sobre lo donado (en donación entre vivos) y la **adquisición** correlativa por el donatario, con los derechos y obligaciones anexos. Si existe **reserva** (p. ej., usufructo), la transmisión será parcial y el uso o goce permanecerá temporalmente en el donante. Este diseño permite liberalidades graduales, útiles en planeación patrimonial. En términos de **riesgo**, desde la entrega y con la publicidad adecuada, el donatario asume la **conservación** y responde por los deterioros que no sean resultado de caso fortuito o fuerza mayor, sin perjuicio de los pactos sobre seguros o mantenimiento.",
                    },

                    {
                      type: "accordion",
                      header: "Efectos reales",
                      open: false,
                      text: "• Traslación de dominio (salvo reservas) • Oponibilidad tras inscripción • Pérdida del poder de disposición por el donante • Asunción de riesgos conforme a entrega/publicidad.",
                    },

                    {
                      type: "paragraph",
                      text: "En el plano **personal**, los **modos** imponen deberes verificables: ejecutar una obra, conservar, destinar a un fin. Su incumplimiento genera consecuencias graduadas: requerimiento, plazo de subsanación y, en su caso, **revocación** y **restitución**. La proporcionalidad guía la respuesta: no toda desviación amerita revocar si es corregible. Por ello, la cláusula modal debe fijar métricas, evidencia y procedimientos de verificación, así como un cauce de solución de controversias. Este enfoque evita que la liberalidad derive en litigio por falta de criterios objetivos.",
                    },
                    {
                      type: "paragraph",
                      text: "Efectos frente a **terceros**. La publicidad protege a adquirentes de buena fe y a acreedores: sin inscripción, el traspaso puede ser inoponible y expuesto a doble transmisión o embargo. La tutela de acreedores aparece como límite externo: si la donación lesiona la garantía común, procede su **impugnación**. De ahí que el cierre deba incluir constancias **registrales** y **fiscales**. En paralelo, la donación no exonera automáticamente de **obligaciones preexistentes** sobre el bien; gravámenes o servidumbres subsisten si no fueron liberados, por lo que el donatario adquiere en el estado jurídico en que el bien se encuentre.",
                    },

                    {
                      type: "accordion",
                      header: "Efectos personales (modos/cargas)",
                      open: false,
                      text: "• Deberes verificables • Procedimiento de control y subsanación • Revocación por incumplimiento grave • Coordinación con seguros y mantenimiento.",
                    },

                    {
                      type: "paragraph",
                      text: "Efectos **fiscales y contables** (enunciativos). Aunque no modifican la naturaleza civil, influyen en el costo y trazabilidad de la operación: pueden existir impuestos, exenciones o requisitos de documentación (comprobantes, avalúos de referencia). El contrato debe asignar **gastos y retenciones** y prever el archivo probatorio. En entidades sin fines de lucro, ciertos donativos generan obligaciones de reporte; en personas físicas, pueden incidir en declaraciones. La previsión de estos aspectos evita contingencias posteriores que empañarían la voluntad de liberalidad.",
                    },
                    {
                      type: "paragraph",
                      text: "Conclusión operativa: los efectos de la donación no se agotan en ‘dar’; deben **probarse**, **publicitarse** y **gobernarse**. Con reservas, modos y publicidad bien diseñados, la liberalidad alcanza su objetivo sin erosionar la seguridad jurídica ni los derechos de terceros.",
                    },
                  ],
                },
                {
                  id: "1.2.3.6",
                  numbering: "2.3.6",
                  title: "Perjuicio a acreedores",
                  content: [
                    {
                      type: "paragraph",
                      text: "La donación es susceptible de control cuando **perjudica** a acreedores del donante al disminuir su patrimonio sin contraprestación. El ordenamiento tutela la **garantía común** a través de acciones de **impugnación** que permiten dejar sin efectos la liberalidad frente a quienes vieron comprometido su crédito. La racionalidad es sencilla: la libertad de donar no habilita el vaciamiento patrimonial en detrimento de terceros. Por ello, el diseño responsable de una donación exige análisis **ex ante** de solvencia, identificación de pasivos, y, si procede, exclusión de bienes necesarios para no erosionar la responsabilidad del disponente.",
                    },
                    {
                      type: "paragraph",
                      text: "El **perjuicio** se verifica cuando la liberalidad coloca al donante en **insolvencia** o agrava la existente, o cuando se prueba **intención** de defraudar. La prueba puede descansar en hechos objetivos (balance patrimonial, múltiplos de endeudamiento, inminencia de ejecuciones) y en la secuencia temporal de actos. No todo deterioro configura fraude; la clave es la **causalidad** entre donación y insatisfacción de créditos. Frente a esta realidad, la prudencia documental demanda constancias de solvencia y la exclusión o condicionamiento de bienes cuya salida pondría en jaque el cumplimiento regular de obligaciones.",
                    },

                    {
                      type: "accordion",
                      header: "Señales de riesgo (red flags)",
                      open: false,
                      text: "• Donaciones poco antes de ejecuciones • Donante sin reservas para sustento • Transferencia de bienes nucleares sin razón • Secuencia de actos que vacían patrimonio • Ocultamiento de cargas.",
                    },

                    {
                      type: "paragraph",
                      text: "El **remedio** típico de los acreedores es la **inoponibilidad** de la donación respecto de ellos o su **revocación** en la medida necesaria para recomponer la garantía. No se trata de ‘deshacer’ la liberalidad universalmente, sino de proteger el crédito legítimo. Dependiendo del régimen, los acreedores deberán acreditar la **existencia y exigibilidad** del crédito, el **perjuicio** y, en ciertos supuestos, el **ánimo defraudatorio**. El donatario de buena fe puede verse afectado, pero la protección del tráfico exige ponderación: por eso, la transparencia y la publicidad en la donación reducen el espacio de impugnación.",
                    },
                    {
                      type: "paragraph",
                      text: "Diseño preventivo. Un expediente robusto incluye: (i) inventario y valorización del patrimonio, (ii) mapeo de deudas y su tratamiento, (iii) reservas suficientes para el donante, (iv) si procede, condiciones **suspensivas** para liberar gravámenes antes de la transmisión, (v) notificaciones y certificaciones fiscales. Esta arquitectura no blinda frente a toda impugnación, pero eleva el estándar de diligencia y reduce la probabilidad de éxito de acciones rescisorias.",
                    },

                    {
                      type: "accordion",
                      header: "Mecanismos de mitigación",
                      open: false,
                      text: "• Reservas patrimoniales y exclusiones • Afectación de bienes a garantía previa • Transparencia documental y registral • Uso de condiciones suspensivas para liberaciones • Coordinación con acreedores cuando sea viable.",
                    },

                    {
                      type: "paragraph",
                      text: "Efectos prácticos. Cuando procede la impugnación, el acreedor reconstituye su garantía y puede ejecutar sobre el bien como si la donación no existiese frente a él. Ello no obsta a que, entre partes, la donación subsista, salvo conflicto insoluble. La moraleja operativa es inequívoca: donar responsablemente implica **no** perjudicar a quienes ya ostentan un derecho de crédito. El asesor debe anticipar este horizonte y, si el riesgo es alto, reencauzar la voluntad de liberalidad mediante **vehículos** que no lesionen la solvencia (p. ej., afectaciones parciales, reservas de usufructo, cronogramas graduales).",
                    },
                    {
                      type: "paragraph",
                      text: "Conclusión: el sistema no prohíbe donar; prohíbe que la donación se utilice para **defraudar**. Con solvencia acreditada, publicidad y trazabilidad, la liberalidad convive con la tutela de la garantía común. Es una cuestión de **diseño y evidencia**, no de retórica.",
                    },
                  ],
                },
                {
                  id: "1.2.3.7",
                  numbering: "2.3.7",
                  title: "Revocación de la donación",
                  content: [
                    {
                      type: "paragraph",
                      text: "La revocación es el mecanismo extraordinario por el cual el donante puede resolver la donación **entre vivos** por causas **tasadas**. No es un derecho discrecional: la estabilidad del tráfico exige que, perfeccionada la liberalidad, sólo decaiga por supuestos legalmente previstos (p. ej., **ingratitud** del donatario, incumplimiento grave de **modos** o **cargas**, aparición de hijos según regímenes clásicos). La revocación tutela al donante sin convertir la donación en acto precario; de ahí su carácter excepcional y su tramitación sujeta a prueba y a plazos. El diseño contractual puede ordenar el procedimiento (requerimientos, periodos de subsanación, árbitro técnico), pero nunca ampliar de manera abusiva las causas legales.",
                    },
                    {
                      type: "paragraph",
                      text: "La **ingratitud** suele comprender comportamientos gravemente ofensivos o dañosos hacia el donante, tipificados por la ley (p. ej., delitos contra su persona, injurias graves, negativa injustificada de auxilio cuando cae en pobreza). No toda desavenencia habilita revocar: deben verificarse hechos objetivos, proporcionales y probados. La carga probatoria recae en el donante; por ello, conviene documentar los eventos, requerimientos y negativas. La finalidad no es castigar la autonomía del beneficiario, sino preservar mínimos de lealtad que justificaron la liberalidad.",
                    },

                    {
                      type: "accordion",
                      header: "Causas típicas de revocación",
                      open: false,
                      text: "• Ingratitud (hechos graves tipificados) • Incumplimiento esencial de modos • Supuestos especiales (aparición de descendencia, según régimen) • Fraude y perjuicio a acreedores (vía específica).",
                    },

                    {
                      type: "paragraph",
                      text: "El **incumplimiento de modos** autoriza revocar cuando la carga era esencial para la voluntad del donante y su incumplimiento frustra la finalidad del acto. La técnica aconseja: (i) definir con precisión el modo, (ii) establecer métricas y evidencia de cumplimiento, (iii) prever un **procedimiento de subsanación** antes de la revocación, y (iv) acordar el régimen de **restitución** del bien y de los frutos. De este modo, la respuesta es proporcional y respeta el principio de conservación del acto cuando el incumplimiento sea corregible.",
                    },
                    {
                      type: "paragraph",
                      text: "Efectos de la revocación. Declarada procedente, la donación se **resuelve** y el donatario debe **restituir** el bien, salvo reglas especiales para terceros de buena fe. El tratamiento de **frutos** y **mejoras** debe ser proporcional: frutos percibidos pueden restituirse o compensarse; mejoras útiles podrían indemnizarse según el régimen aplicable. Si el bien ha sido enajenado a un tercero protegido, la tutela del donante podría traducirse en indemnización frente al donatario. Estos escenarios refuerzan la necesidad de **publicidad** oportuna y de pactos que desincentiven disposiciones apresuradas.",
                    },

                    {
                      type: "accordion",
                      header: "Gobernanza del procedimiento",
                      open: false,
                      text: "• Requerimiento previo y plazo de subsanación • Evidencia del hecho (ingratitud/modo) • Vía de solución (judicial o MASC) • Efectos: restitución/indemnización • Protección de terceros de buena fe.",
                    },

                    {
                      type: "paragraph",
                      text: "Plazos y caducidad. Las acciones de revocación están sometidas a **términos**; el silencio prolongado puede cerrar la puerta por seguridad jurídica. Por ello, el asesor debe auditar la **oportunidad** de la pretensión y su **viabilidad probatoria** antes de intentar la vía. Asimismo, una vez firme la revocación, se deben **reinscribir** las titularidades para recomponer la cadena registral y evitar dobles transmisiones o incertidumbres sobre la posesión.",
                    },
                    {
                      type: "paragraph",
                      text: "Conclusión: la revocación equilibra la liberalidad con la justicia del caso concreto. Bien entendida, no es amenaza contra la estabilidad de las donaciones, sino **válvula de corrección** ante conductas que traicionan la confianza del donante o neutralizan la finalidad del modo. La prevención —definir causas, procedimiento y efectos— reduce su activación; pero si deviene necesaria, un expediente sólido y una ruta clara permiten restituir la legalidad sin desordenar el tráfico.",
                    },
                  ],
                },
              ],
            },

            /* 2.4 El mutuo */
            {
              id: "1.2.4",
              numbering: "2.4",
              title: "El mutuo",
              content: [
                {
                  type: "paragraph",
                  text: "El **mutuo** es el contrato por el cual una parte (mutuante) **transfiere la propiedad** de dinero o de bienes **fungibles** a otra (mutuario), quien se **obliga a restituir** otro tanto de la **misma especie, calidad y cantidad**. Su función económica es obvia: provee liquidez o insumos fungibles para consumo o circulación; su función jurídica es estructurar esa entrega con reglas de validez, ejecución y remedios. A diferencia de la compraventa o la permuta, el mutuo no intercambia propiedad por precio o cosa, sino propiedad por **restitución futura**. El material del módulo recalca esta noción con una definición llana: prestar dinero o bienes para que el deudor devuelva lo mismo en especie, calidad y cantidad, encuadrando además las variantes **simple** y **con interés**. La clave operativa es entender que, al tratarse de fungibles, el mutuario se convierte en **dueño** de lo recibido y, por ello, asume los **riesgos** de pérdida o deterioro, quedando obligado a restituir en los términos pactados. :contentReference[oaicite:0]{index=0}",
                },
                {
                  type: "paragraph",
                  text: "Naturaleza y elementos. Tradicionalmente, y siguiendo su origen romanista, el mutuo se considera **contrato real**: se **perfecciona con la entrega** del dinero o la cosa (a diferencia de los contratos puramente consensuales). De ahí que la ‘promesa de mutuo’ sea, en rigor, un **preparatorio** que sólo deviene mutuo cuando ocurre la entrega. Elementos personales: **capacidad** y **legitimación** de las partes; si actúan representantes, poderes suficientes y vigentes. Elementos reales: objeto **lícito**, **posible**, **fungible** y **determinado o determinable** (monto, especie, calidad). Elementos formales: en principio **no solemne**; basta instrumento privado idóneo, sin perjuicio de exigir formas reforzadas por cuantía, finalidad o para facilitar **prueba y ejecución** (p. ej., reconocimiento de adeudo, título de crédito o garantía real). Esta arquitectura mínima debe completarse con reglas claras sobre **plazo**, **lugar y forma** de pago, **destino** (si es relevante) y eventos de **incumplimiento**.",
                },
                {
                  type: "paragraph",
                  text: "Mutuo **simple** y **con interés**. En el **simple**, no se pacta remuneración; la función es puramente crediticia sin costo financiero. En el **con interés**, se añade una **retribución** por el uso del capital hasta su devolución. El material docente enfatiza límites a la usura: el interés **convencional** no debe exceder ciertos topes y, además, es **nulo** pactar **capitalización de intereses** para que produzcan intereses (anatocismo) fuera de los supuestos legales; también advierte que no puede fijarse un interés superior a umbrales que revelen **aprovechamiento del apuro** o **ignorancia** del deudor. Por técnica, el contrato debe precisar **tasa nominal**, **base de cálculo** (año comercial o civil), **periodicidad** y **moratoria**, dejando trazabilidad de estados de cuenta. Si hay **amortización** en parcialidades, conviene adjuntar **cronograma** y prever reglas ante pagos anticipados (penalidad o no) y reestructuras.",
                },
                {
                  type: "paragraph",
                  text: "Obligaciones y riesgo. El **mutuante** debe **entregar** la suma o bienes en el **tiempo, lugar y modo** pactados; puede retener si no se cumplen condiciones previas (p. ej., otorgamiento de garantías). El **mutuario** debe **restituir** en plazo y, si se pactó, **pagar intereses**; en mora, proceden **intereses moratorios**, **cláusula penal** y, en su caso, **vencimiento anticipado**. Como el mutuario es dueño de los fungibles, la **pérdida fortuita** no lo libera de restituir: debe devolver el equivalente. En destinaciones específicas (crédito finalista), el incumplimiento del **destino** puede activar remedios (resolución, anticipación de vencimientos). Es recomendable designar **lugar de pago**, reglas de **imputación** (intereses → capital) y orden de aplicación en caso de pagos parciales, para evitar controversias.",
                },
                {
                  type: "paragraph",
                  text: "Gobernanza documental. Un mutuo profesional se instrumenta con: (i) **contrato** que identifique con precisión monto, plazo, tasa, calendario y garantías; (ii) **evidencia de entrega** (transferencias, recibos); (iii) **garantías** (prenda o hipoteca) cuando proceda, con inscripción para oponibilidad; (iv) mecanismos de **gestión de incumplimiento** (gracia, reestructuras, mediación); (v) **prueba** trazable (estados de cuenta, cartas de liquidación). En operaciones simples puede bastar un **reconocimiento de adeudo** o un **pagaré**; en operaciones patrimoniales, conviene un expediente completo y publicidad de la garantía. El resultado: un crédito **exigible**, **probado** y **defendible**, que protege al financiador sin asfixiar al deudor y reduce la litigiosidad gracias a reglas claras de desempeño.",
                },
                {
                  type: "accordion",
                  header: "Mapa de estudio — Mutuo",
                  open: false,
                  items: [
                    {
                      header: "Nivel 1 · Definición y naturaleza",
                      text: "Transferencia de propiedad de fungibles • Restitución en especie, calidad y cantidad • Contrato real: se perfecciona con la entrega. :contentReference[oaicite:1]{index=1}",
                    },
                    {
                      header: "Nivel 2 · Tipología y límites",
                      text: "Mutuo simple vs. con interés • Prohibición de anatocismo salvo supuestos legales • Prudencia frente a intereses desproporcionados.",
                    },
                    {
                      header: "Nivel 3 · Operativa y evidencia",
                      text: "Cronograma y reglas de pago • Garantías y publicidad • Matriz probatoria (recibos, transferencias, estados de cuenta).",
                    },
                  ],
                },
              ],
              subthemes: [
                {
                  id: "1.2.4.1",
                  numbering: "2.4.1",
                  title: "Mutuo simple",
                  content: [
                    {
                      type: "paragraph",
                      text: "El mutuo simple es el contrato por el cual una parte (mutuante) entrega a otra (mutuario) dinero o bienes fungibles, transmitiéndole la propiedad, y éste se obliga a restituir otro tanto de la misma especie, calidad y cantidad, sin que medie retribución financiera por el uso del capital. Es, por tanto, una figura de **crédito no remunerado**, útil para apoyar liquidez, consumo inmediato o provisión de insumos, preservando la equivalencia mediante la devolución futura. Su naturaleza es tradicionalmente **real**: se perfecciona con la **entrega** efectiva de la cosa fungible; antes de ello, la promesa de mutuar configura un preparatorio sin efectos propios del mutuo. Al recibir, el mutuario se convierte en **dueño** de lo entregado, asumiendo los riesgos de pérdida o deterioro y quedando obligado a restituir en los términos pactados. La clave práctica del mutuo simple no está en la tasa —inexistente—, sino en el **plazo**, el **modo de restitución** y la **prueba** de la entrega, pues estos vectores determinan la exigibilidad y evitan controversias sobre mora. Bien instrumentado, es una herramienta de cooperación patrimonial que permite circular fungibles con seguridad jurídica y con bajo costo de transacción.",
                    },
                    {
                      type: "paragraph",
                      text: "En el plano de **validez**, el contrato requiere consentimiento libre de vicios, capacidad y legitimación de las partes, y un objeto lícito, posible y determinable. Como objeto, los **fungibles** exigen precisión cuantitativa (monto, peso, volumen, unidades) y cualitativa (especie y, en su caso, estándar de calidad). Aunque el mutuo simple carece de intereses, no es por ello informal: conviene fijar **plazo cierto** o determinable, lugar y medio de pago, reglas de **imputación** en caso de pagos parciales, y criterios para la **mora** (desde cuándo corre, qué efectos produce). En operaciones de mayor cuantía, la forma escrita ordena la **trazabilidad probatoria** (recibos, transferencias, reconocimiento de adeudo). Si la devolución es en **parcialidades**, un **cronograma** anexo con fechas y montos evita ambigüedades y permite monitorear cumplimiento. Finalmente, pueden incorporarse **condiciones suspensivas** (p. ej., que el mutuario presente determinada documentación) cuya falta autoriza no entregar sin incurrir en incumplimiento.",
                    },

                    {
                      type: "accordion",
                      header: "Checklist operativo — Mutuo simple",
                      open: false,
                      text: "• Entrega probada (recibos/transferencias) • Plazo cierto o determinable • Medio y lugar de pago • Cronograma si hay parcialidades • Reglas de mora e imputación • Documentación mínima (contrato + reconocimiento de adeudo, si aplica).",
                    },

                    {
                      type: "paragraph",
                      text: "La **obligación de restituir** es la prestación central del mutuario. Al ser dueño de lo recibido, la **pérdida fortuita** no lo exime: debe devolver el equivalente en especie, calidad y cantidad. Si la devolución es en dinero, procede el mismo monto nominal salvo pacto de actualización conforme a mecanismos objetivos y lícitos. Si es en especie (p. ej., granos o materiales), el contrato debe prever qué estándar técnico acredita **calidad** y cómo se tratarán **mermas** o **diferencias**. El mutuante, por su parte, sólo queda compelido a la **entrega** en los términos pactados; puede legítimamente retenerla si no se satisfacen condiciones previas acordadas (garantías, documentación, ausencia de incumplimientos cross-default). La coordinación de estas cargas simétricas reduce fricciones y evita que la ejecución dependa de expectativas no escritas.",
                    },
                    {
                      type: "paragraph",
                      text: "Aunque no hay **interés** remuneratorio, el sistema contempla **interés moratorio** cuando el mutuario incumple el plazo de restitución: su función no es retribuir el uso del capital, sino compensar el **retardo** y desincentivar la mora. Para que opere con proporcionalidad, el contrato debe especificar **tasa**, **base de cálculo** y **periodicidad**, evitando anatocismos no autorizados. Complementariamente, la **cláusula penal** puede graduar consecuencias por incumplimiento relevante, siempre dentro de límites de razonabilidad. Es conveniente incorporar mecanismos de **alerta temprana** (covenants informativos) y vías de **solución de controversias** (mediación, arbitraje), que permitan corregir desviaciones sin colapsar la relación jurídica.",
                    },

                    {
                      type: "accordion",
                      header: "Riesgos y mitigaciones",
                      open: false,
                      text: "• Indeterminación del objeto → cuantificar y estandarizar • Falta de prueba de entrega → anexar recibos/transferencias • Mora sin reglas → definir tasa moratoria y cálculo • Incumplimiento en especie → estándares de calidad y tolerancias • Controversias → cláusula MASC y penalidad proporcionada.",
                    },

                    {
                      type: "paragraph",
                      text: "El mutuo simple puede reforzarse con **garantías** (prendarias o hipotecarias) cuando la cuantía o el perfil de riesgo lo justifican. En tal caso, la garantía requiere su propia **publicidad** para ser oponible a terceros, y el contrato debe prever **vencimiento anticipado** ante eventos de incumplimiento sustantivos. En operaciones familiares o de confianza, conviene igualmente producir un **expediente mínimo** (contrato breve + evidencias de entrega y pagos) que facilite la defensa en caso de desavenencias. Con este diseño, el mutuo simple conserva su naturaleza solidaria y, a la vez, se vuelve **exigible, verificable y defendible**, criterios indispensables en una práctica jurídica profesional.",
                    },
                    {
                      type: "paragraph",
                      text: "Conclusión operativa: el mutuo simple no es un ‘préstamo de palabra’. Su eficacia depende de la **precisión** en el objeto, la **claridad** en plazos y reglas de cumplimiento, y la **prueba** suficiente de entrega y pagos. Incorporar estos elementos evita litigios y honra la finalidad cooperativa del contrato, garantizando que la devolución sea tan cierta como la ayuda brindada.",
                    },
                  ],
                },
                {
                  id: "1.2.4.2",
                  numbering: "2.4.2",
                  title: "Mutuo con interés",
                  content: [
                    {
                      type: "paragraph",
                      text: "El mutuo con interés añade a la estructura básica del mutuo una **retribución** por el uso del capital hasta su devolución. Mantiene la transmisión de propiedad de fungibles y la obligación de restituir, pero incorpora una **tasa convenida** que remunera al mutuante y ordena financieramente la relación. Su utilidad práctica es evidente en necesidades de liquidez que exceden la ayuda gratuita: permite planificar flujos, distribuir riesgos y asignar costos. La validez exige que el interés sea **pactado**, **determinable** por método objetivo y **proporcional**; la técnica rechaza pactos usurarios o cláusulas oscuras sobre cálculo. El diseño debe especificar **tasa nominal**, **base de cálculo** (año civil o comercial), **periodicidad** (mensual, anual), **días de devengo**, **método de amortización** (francés, alemán, americano) y **reglas de pagos anticipados** (penalización o no). Con estos parámetros, el mutuo se convierte en un sistema de cumplimiento controlado, transparente y auditable.",
                    },
                    {
                      type: "paragraph",
                      text: "Conviene distinguir **interés remuneratorio** (precio del dinero en el tiempo) del **moratorio** (sanción por retardo). El primero corre mientras el crédito está **vigente** y **al corriente**; el segundo, desde la **mora** y no debe superponerse de modo confiscatorio. En cuanto a **capitalización de intereses** (anatocismo), la prudencia normativa impone límites: sólo cuando exista **pacto** claro y dentro de supuestos admitidos se podrán computar intereses sobre intereses vencidos y no pagados. Para evitar controversias, el contrato debe prohibir capitalizaciones automáticas ambiguas y, si se autoriza, fijar umbrales, periodicidad y fórmula. La **transparencia** es también documental: estados de cuenta, recibos y cartas de liquidación deben permitir a un tercero reproducir el cálculo sin acudir a interpretaciones benévolas.",
                    },

                    {
                      type: "accordion",
                      header: "Parámetros esenciales del interés",
                      open: false,
                      text: "• Tasa nominal y base (360/365) • Periodicidad de devengo • Método de amortización • Distinción remuneratorio/moratorio • Reglas de capitalización (si procede) • Pagos anticipados y comisiones.",
                    },

                    {
                      type: "paragraph",
                      text: "El **riesgo** en el mutuo con interés se gobierna con **garantías** (prenda/hipoteca), **covenants** y eventos de **vencimiento anticipado**: falsedad de declaraciones, deterioro patrimonial grave, incumplimiento de otras obligaciones relevantes (cross-default). Para el mutuario, el contrato debe asegurar **claridad** en fechas, montos y orden de imputación (intereses → moratorios → capital), evitando sorpresas en la contabilidad de pagos. En caso de reestructuras, se documentan nuevas tasas y plazos, dejando claro el tratamiento de moratorios acumulados. La proporcionalidad es el principio rector: remedios adecuados al incumplimiento, sin convertir el interés en pena encubierta.",
                    },
                    {
                      type: "paragraph",
                      text: "En operaciones con **destino específico** (crédito finalista), el uso distinto del capital puede activar remedios (resolución o anticipación de vencimientos). Por ello, si el destino es esencial, debe describirse y vincularse a **hitos de desembolso** (liberación por tramos contra evidencia). Asimismo, resulta útil un **escrow** que libere fondos según cumplimiento de condiciones. En el plano fiscal y contable —aunque no altera la naturaleza civil—, la asignación clara de **gastos, retenciones y comisiones** evita contingencias. Un calendario de vencimientos, anexado al contrato, reduce errores operativos y dota de previsibilidad a la relación.",
                    },

                    {
                      type: "accordion",
                      header: "Riesgos y salvaguardas",
                      open: false,
                      text: "• Usura/ambigüedad → tasas y fórmula explícitas • Mora → tasa moratoria y disparador claro • Destino específico → desembolso por hitos • Pago parcial → regla de imputación • Incumplimiento relevante → garantías y vencimiento anticipado proporcionado.",
                    },

                    {
                      type: "paragraph",
                      text: "La **prueba de entrega y de pagos** es columna vertebral del mutuo con interés. Transferencias bancarias, recibos y estados de cuenta con detalle de capital, intereses y moratorios permiten reproducir el saldo. La **carta de liquidación** al cierre protege a ambas partes: acredita que nada se adeuda y frena controversias tardías. Cuando existan garantías reales, su **cancelación registral** debe integrarse al cierre para restaurar la libre disposición del deudor. Con este andamiaje, el mutuo con interés deja de ser un convenio opaco para convertirse en un **instrumento transparente** que alinea incentivos y reduce litigiosidad.",
                    },
                    {
                      type: "paragraph",
                      text: "Conclusión operativa: cobrar intereses no es un fin en sí, sino una **técnica de equilibrio** entre riesgo y tiempo. El buen contrato expone su matemática, ordena sus remedios y cuida su evidencia. Así, el mutuo con interés cumple su promesa: liquidez hoy a cambio de un flujo futuro **previsible, verificable y defendible**.",
                    },
                  ],
                },
                {
                  id: "1.2.4.3",
                  numbering: "2.4.3",
                  title: "Elementos del mutuo",
                  content: [
                    {
                      type: "paragraph",
                      text: "Los elementos del mutuo se agrupan en **personales**, **reales** y **formales**, articulados por su naturaleza de contrato **real** que se perfecciona con la **entrega**. En los personales, interesa la **capacidad** para obligarse y la **legitimación** para disponer (mutuante) y adquirir (mutuario); la representación exige poderes suficientes y vigentes. En los reales, el objeto es **fungible**, **lícito** y **determinable**: dinero o bienes cuya individualidad es irrelevante, pues lo debido es el equivalente. La determinación incluye **monto** y, si no es dinero, **especie** y **calidad**; también el **plazo** y la **forma** de restitución. En los formales, rige la no solemnidad, pero la escritura privada o pública —según cuantía y garantías— potencia **prueba** y **ejecución**. Finalmente, la **causa** es el préstamo mismo, y la **eficacia** se robustece con garantías y publicidad cuando proceda, para oponibilidad frente a terceros.",
                    },
                    {
                      type: "paragraph",
                      text: "El **consentimiento** debe ser libre de vicios. La oferta y la aceptación se traducen en un clausulado que establezca **entrega**, **plazo**, **lugar** y **modo** de pago, **intereses** si los hay, **imputación** de pagos, **mora** y **remedios**. En mutuos complejos, se añaden **declaraciones y garantías** (situación patrimonial, ausencia de litigios, cumplimiento fiscal), cuyo incumplimiento relevante puede activar **vencimiento anticipado**. El contrato también puede prever **covenants** informativos (estados financieros, notificación de eventos adversos) para monitorear riesgo. Estos elementos no burocratizan: dotan de **gobernanza** a una relación que, por su sencillez aparente, tiende a subestimar la necesidad de reglas claras.",
                    },

                    {
                      type: "accordion",
                      header: "Elementos personales y reales (resumen)",
                      open: false,
                      text: "• Mutuante/mutuario capaces y legitimados • Representación suficiente • Objeto fungible y lícito • Determinación de monto/especie/calidad • Plazo y forma de restitución.",
                    },

                    {
                      type: "paragraph",
                      text: "La **entrega** convierte la promesa en mutuo. Debe quedar **probada** (transferencias, recibos, acta), pues sin ella el deudor podría discutir la existencia o el quantum de la obligación. Si la entrega se realiza por **parcialidades**, cada desembolso genera su propia evidencia y puede vincularse a hitos (p. ej., cumplimiento de condiciones o presentación de documentos). En paralelo, el contrato debe fijar el **punto de partida** para el cómputo de intereses (si existen) y la fecha a partir de la cual corre la **mora**. Este anclaje temporal estabiliza el cálculo del saldo y evita controversias por devengos implícitos.",
                    },
                    {
                      type: "paragraph",
                      text: "Los **remedios** ante incumplimiento deben ser proporcionales y escalonados: **cumplimiento específico** (pago), **intereses moratorios**, **cláusula penal**, **vencimiento anticipado** y, si hay garantías, **ejecución** de las mismas. La proporcionalidad importa: no todo retraso amerita medidas máximas; pero el retardo que **frustra la finalidad** del crédito sí. La previsión de una **vía de solución de controversias** (mediación/arbitraje) puede acelerar resultados y reducir costos. Además, el contrato debe reglar el **orden de imputación** de pagos (intereses, moratorios, capital) para evitar desacuerdos contables.",
                    },

                    {
                      type: "accordion",
                      header: "Elementos formales y probatorios",
                      open: false,
                      text: "• Contrato escrito con clausulado esencial • Evidencia de entrega y pagos • Cronograma y estados de cuenta • Garantías y su publicidad (si aplica) • Carta de liquidación al cierre.",
                    },

                    {
                      type: "paragraph",
                      text: "Las **garantías** (prenda/hipoteca) no son elemento constitutivo, pero sí **instrumentos de eficacia** cuando la cuantía o el riesgo lo ameritan. Su validez exige requisitos propios y su **publicidad** asegura oponibilidad frente a terceros. En su ausencia, la **responsabilidad patrimonial universal** del deudor sigue siendo el respaldo, pero con menor probabilidad de cobro en escenarios adversos. El diseño debe equilibrar protección del acreedor y **no onerosidad** excesiva para el deudor, evitando que las garantías bloqueen el giro ordinario del beneficiario.",
                    },
                    {
                      type: "paragraph",
                      text: "Conclusión operativa: los elementos del mutuo no son una lista académica, sino un **sistema de ejecución**. Definir con precisión quiénes contratan, qué se entrega, cómo y cuándo se restituye, qué prueba acredita cada hito y qué remedios aplican, transforma un préstamo potencialmente conflictivo en un **crédito exigible, verificable y defendible**.",
                    },
                  ],
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
          href: "https://www.youtube.com/watch?v=z77Y1D-H5_8", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "EL CONTRATO DE MUTUO — https://www.youtube.com/watch?v=z77Y1D-H5_8",
            "LA PERMUTA — https://www.youtube.com/watch?v=pEDpJ3bOch8",
            "Código Civil para el Estado de Veracruz de Ignacio de la Llave — https://www.legisver.gob.mx/leyes/LeyesPDF/CODIGOCIVIL13062022",
            "Código de Procedimientos Civiles para el Estado de Veracruz — https://www.legisver.gob.mx/leyes/LeyesPDF/CPC03072020.pdf",
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
            "Arellano Garcia, C. (2001). Manual del abogado. Practica Jurídica. México: Porrua.",
            "Capictant, C. y. (1987). Instuituciones de derecho civil. México: Porrúa.",
            "Código Civil para el Estado de Veracruz. (s.f.). Obtenido de https://www.legisver.gob.mx/leyes/LeyesPDF/CODIGOCIVIL13062022.pdf",
            "De Pina Vara, R. (1994). Derecho Civil Mexicano. México: Porrúa.",
            "Española, R. a. (2023). Diccionario prehispanico. Obtenido de https://dpej.rae.es/lema/incapaz",
            "Floris Margadant, G. (1997). Derecho Romano. México: Esfinge.",
            "Gutiérrez y González, E. (1996). Derecho de las Obligaciones. México: Porrúa.",
            "Latra, J. (2005). Fundamentso de derecho. Mexico: McGraw-hill.",
            "Ramírez, A. (2022). Introducción al derecho civil (4.ª ed.). Editorial Jurídica.",
            "Rojina Villegas, R. (1998). Derecho Civil Mexicano Bienes, Derechos reales y Posesión. Mexico: Porrúa.",
            "Rojina Villegas, R. (2009). Compendio de derecho civil III. México: Porrúa.",
            "Rojina Villegas, R. (2014). Compendio de derecho civil, introduccion personas y familia. Mexico: Porrúa.",
            "ROJINA, V. R. (2008). Compendio De Derecho Civil II. México: Porrúa.",
            "Treviño Garcia, R. (1995). Los Contratos Civiles y sus generalidades. México: McGraw-Hill.",
            "Vara, D. P. (1965). Diccionario de Derecho. Porrua.",
            "Vazquez, A. C. (2012). Conceptos juridicos fundamentales. Mexico: Universidad Nacional Autonoma de Mexico.",
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
