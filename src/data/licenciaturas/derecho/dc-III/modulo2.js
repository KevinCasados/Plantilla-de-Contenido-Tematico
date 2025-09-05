/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LD", // Licenciatura en Derecho
  courseId: "DC-III", // Derecho Civil III
  id: "mod2", // Módulo 2

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Derecho Civil III",
  title: "Módulo 2. Clasificación de los testamentos y su validez",
  semestre: "Tercero",
  teacher: "Mtra. Ma. de Lourdes Suárez Hernández",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Que el alumno conozca de manera integral la figura del testamento: sus tipos (ordinarios y especiales), sus características y formalidades, los bienes que pueden ser objeto de disposición, así como las causas de pérdida de validez (nulidad, revocación y caducidad), para identificar y aplicar los supuestos legales en casos concretos.",

  competencies: [
    "Distinguir entre testamentos ordinarios (público abierto, notarial cerrado, autógrafo) y especiales (privado, militar, marítimo y otorgado en el extranjero).",
    "Identificar requisitos de capacidad, voluntad y formalidades notariales/testimoniales que inciden en la validez del testamento.",
    "Determinar qué bienes y derechos pueden ser objeto de disposición testamentaria y sus límites.",
    "Analizar y argumentar supuestos de nulidad, revocación y caducidad del testamento conforme a la normativa aplicable.",
    "Aplicar criterios legales para reconocer, impugnar o ejecutar testamentos en escenarios prácticos.",
    "Interpretar y contrastar disposiciones del Código Civil local (p. ej., Veracruz) con principios generales del derecho sucesorio.",
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

    /* 1. Unidad principal (según el material: Unidad 3) */
    {
      id: "3",
      numbering: "Unidad 3",
      title: "Clasificación de los testamentos",
      content: [
        {
          type: "paragraph",
          text: "La clasificación de los testamentos permite ordenar las distintas formas en que una persona expresa su voluntad para disponer de sus bienes y designar herederos o legatarios para después de su muerte. Esta tipología no es un detalle académico; cumple una función práctica decisiva: cada clase de testamento tiene formalidades, controles de autenticidad y efectos propios, que determinan su validez y el modo de ejecución. En términos amplios, la doctrina distingue entre testamentos ordinarios y especiales. Los primeros se otorgan en condiciones normales, con intervención notarial o mediante escritura autógrafa sujeta a requisitos estrictos; los segundos nacen para casos extraordinarios en los que, por urgencia o circunstancias particulares, es imposible observar el rito ordinario. Conocer estas categorías ayuda a identificar qué formalidad conviene, cómo se prueba su existencia, qué límites tiene la voluntad del testador y en qué supuestos un testamento es nulo, revocado o caduco. La unidad también aborda qué bienes pueden ser objeto de disposición testamentaria y las figuras de ineficacia que extinguen total o parcialmente sus efectos. Todo ello persigue un mismo fin: tutelar la voluntad real del causante con seguridad jurídica para herederos, legatarios y terceros.",
        },
        {
          type: "paragraph",
          text: "Dentro de los testamentos ordinarios se ubican, de modo típico, el testamento público abierto, el testamento notarial cerrado y el testamento autógrafo u holográfico. El público abierto se otorga ante fedatario (por regla, notario) y testigos, recogiéndose en escritura la voluntad que el testador declara de viva voz; su fortaleza radica en la fe pública, en la lectura y conformidad, y en registros que facilitan su localización y ejecución. El notarial cerrado permite al testador redactar su disposición por escrito, firmarla, cerrarla y presentarla al notario para su protocolización del acto de cierre; la voluntad permanece reservada hasta la muerte, pero la existencia del instrumento queda acreditada. El autógrafo, por su parte, exige que el testador escriba de su puño y letra la totalidad del documento, lo firme y cumpla requisitos temporales y de depósito que la legislación prevé para reducir riesgos de falsificación o pérdida. En los tres, la lógica es similar: reforzar autenticidad, capacidad y libre voluntad, con formalidades que, de omitirse, producen nulidad o abren espacio a impugnaciones.",
        },
        {
          type: "paragraph",
          text: "Los testamentos especiales responden a situaciones excepcionales en las que el cumplimiento del rito ordinario sería inviable o desproporcionado. Bajo esta rúbrica suelen agruparse el testamento privado, el militar, el marítimo y el otorgado en país extranjero. El privado opera cuando, por enfermedad grave, aislamiento o fuerza mayor, no es posible acudir de inmediato ante notario; requiere la presencia de testigos idóneos y, a menudo, su posterior formalización si el testador sobrevive a la urgencia. El militar contempla a quienes se hallan en campaña, heridos o en situación de combate, admitiendo simplificaciones solemnes que preserven la voluntad aun en contextos bélicos. El marítimo se prevé para quienes navegan en alta mar, con intervención del capitán y oficiales, y reglas de asiento y custodia del documento. Finalmente, el testamento hecho en el extranjero se rige por el principio de respeto al otorgamiento conforme a la ley del lugar (o a convenios), cuidando su reconocimiento y ejecución en el territorio donde deba producir efectos. En general, estos testamentos están cercados por plazos de caducidad y exigencias de confirmación para evitar fraudes.",
        },
        {
          type: "paragraph",
          text: "También interesa delimitar qué bienes pueden ser objeto del testamento y qué límites tiene la autonomía del testador. En principio, la voluntad se proyecta sobre el patrimonio transmisible: derechos y bienes presentes —y, según el ordenamiento, ciertos frutos o adquisiciones futuras vinculadas—, con respeto a cargas legales, deudas y reservas. La libertad de testar suele encontrar restricciones en instituciones protectoras de la familia, como porciones legítimas o derechos forzosos reconocidos por la ley a determinados parientes, lo cual obliga a conciliar legados, mejoras y disposiciones particulares con ese núcleo inderogable. El testador puede imponer modalidades (condiciones, plazos, cargas) siempre que no sean ilícitas o imposibles, y puede nombrar sustitutos para el caso de que el heredero o legatario no llegue a adquirir. La técnica testamentaria, además, prevé cláusulas de administración, albaceazgo y disposiciones sobre partición, que facilitan la ejecución y evitan conflictos interpretativos. Cuando exista duda, los principios de conservación e interpretación pro voluntad del causante orientan al juez y al albacea para privilegiar el sentido más conforme con el plan sucesorio.",
        },
        {
          type: "paragraph",
          text: "La unidad cierra con la extinción e ineficacia de los testamentos: nulidad, revocación y caducidad. La nulidad deriva de vicios esenciales (incapacidad, falta de formalidades, ilicitud del objeto o del fin); puede ser absoluta o relativa según la gravedad y la tutela comprometida. La revocación expresa el poder del testador de cambiar de parecer: un testamento posterior, total o parcialmente incompatible, deja sin efecto al anterior en lo revocado; también existen actos revocatorios específicos (como el retiro de un cerrado) previstos por la ley. La caducidad, en cambio, sanciona supuestos en los que la disposición pierde eficacia por hechos posteriores no imputables a la voluntad de revocar, como la muerte del heredero antes que el testador sin sustitución, la inhabilidad sobrevenida del beneficiario o el incumplimiento de formalizaciones exigidas a testamentos especiales. Comprender esta tipología y sus consecuencias permite planear, instrumentar y ejecutar la sucesión con seguridad, reduciendo litigios y preservando, en la medida de lo posible, la voluntad auténtica del testador.",
        },

        /* Acordeones (3 niveles/temas) */
        {
          type: "accordion",
          header: "Mapa general de la clasificación",
          open: false,
          text: "Ordinarios: público abierto, notarial cerrado, autógrafo. Especiales: privado, militar, marítimo, hecho en el extranjero. Bloques complementarios: bienes objeto de disposición; causas de ineficacia (nulidad, revocación, caducidad).",
        },
        {
          type: "accordion",
          header: "Testamentos ordinarios: comparación rápida",
          open: false,
          text: "Público abierto: máxima publicidad formal y fe pública; idóneo para evitar impugnaciones. Notarial cerrado: reserva del contenido con constancia de existencia. Autógrafo: simplicidad material, mayores exigencias de autenticidad y custodia.",
        },
        {
          type: "accordion",
          header: "Testamentos especiales: supuestos y cautelas",
          open: false,
          text: "Privado: urgencia/enfermedad; precisa testigos y, a menudo, confirmación. Militar y marítimo: contexto bélico o navegación; autoridad del mando/capitán. Extranjero: respeto al locus regit actum y requisitos para reconocimiento y ejecución.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "3.1",
          numbering: "3.1",
          title: "De los testamentos ordinarios",
          content: [
            {
              type: "paragraph",
              text: "La categoría de testamentos ordinarios agrupa las formas comunes de disponer para después de la muerte cuando el otorgamiento se realiza en condiciones normales, sin la premura o excepcionalidad que justifican los testamentos especiales. Su rasgo definitorio es la sujeción a formalidades solemnes y verificables que aseguran autenticidad, capacidad y libre voluntad del testador. Bajo esta rúbrica, la doctrina y la legislación positiva suelen reconocer tres especies: el testamento público abierto, el notarial cerrado y el autógrafo u holográfico. Aunque difieren en el grado de publicidad del contenido y en la forma de documentar la voluntad, los tres comparten un propósito: garantizar que la última voluntad quede constancia fehaciente, pueda encontrarse y ejecutarse con seguridad jurídica, y resista impugnaciones por vicios de forma o de consentimiento. Comprender su estructura, requisitos y efectos prácticos permite elegir con prudencia el instrumento más idóneo al contexto del testador, considerando variables como reserva de contenido, disponibilidad de fedatario, riesgos de extravío del documento, salvaguardas frente a falsificación y costos asociados a protocolización y registro.",
            },
            {
              type: "paragraph",
              text: "El eje común de los testamentos ordinarios es la solemnidad como garantía de autenticidad. En el público abierto, la voluntad se verbaliza ante notario y testigos, se lee, se aprueba y se firma en un mismo acto; la fe pública y el protocolo notarial aportan trazabilidad y localización. En el notarial cerrado, el testador redacta por su cuenta o con auxilio técnico el documento que contiene su voluntad, lo firma, lo cierra y lo presenta al notario para que levante acta del cierre; el contenido queda reservado, pero se acredita la existencia del instrumento. En el autógrafo, toda la pieza material debe estar escrita, fechada y firmada del puño y letra del testador; su simplicidad formal exige, como contrapeso, reglas estrictas de letra, firma, fecha y, en su caso, depósito o protocolización para mitigar riesgos de pérdida o falsificación. La elección entre una y otra modalidad entraña ponderar publicidad, reserva, costo, disponibilidad de fedatario y capacidad material del testador para cumplir los requisitos.",
            },
            {
              type: "accordion",
              header: "Requisitos comunes (idea-fuerza)",
              open: false,
              text: "Capacidad del testador; libertad de voluntad; objeto y fines lícitos; observancia de formalidades esenciales; firma y fecha; constancia de acto y, en su caso, protocolización/registro.",
            },
            {
              type: "paragraph",
              text: "Más allá de la forma, los testamentos ordinarios comparten reglas sustantivas: la unidad del acto (evitar intercalaciones posteriores que alteren la voluntad), la claridad en designación de herederos y legatarios, la posibilidad de nombrar sustitutos, imponer cargas lícitas y prever disposiciones de administración (albaceazgo) y partición. Asimismo, están sujetos a los límites que la ley impone para proteger a determinados parientes (porciones forzosas o legítimas, según el sistema aplicable), a la prelación de deudas y cargas de la herencia, y a las causas de ineficacia (nulidad, revocación, caducidad). La nulidad suele derivar de incapacidad, falta de formalidades esenciales o ilicitud del objeto; la revocación opera por testamento posterior o por actos revocatorios expresos; la caducidad castiga supuestos sobrevenidos (muerte del instituido sin sustitución, imposibilidad de cumplimiento, pérdida del documento sin copia auténtica, etc.).",
            },
            {
              type: "image",
              src: "https://imgv2-1-f.scribdassets.com/img/document/510103297/original/91bad5ec66/1?v=1",
              alt: "Esquema comparado de testamentos ordinarios",
              caption:
                "Comparativo: público abierto · notarial cerrado · autógrafo.",
            },
            {
              type: "paragraph",
              text: "En clave probatoria, el público abierto es el más robusto porque su contenido consta en protocolo; el cerrado protege la reserva del contenido hasta la muerte pero requiere formalidades de cierre y, a veces, de apertura y protocolización judicial; el autógrafo, por su parte, depende de la conservación material y, si se discute, de la prueba pericial en grafoscopía. La elección debe considerar también la situación personal del testador (alfabetización, estado de salud, necesidad de confidencialidad) y la accesibilidad a fedatarios. En contextos urbanos con servicios notariales disponibles, el público abierto brinda la ruta más segura; cuando se desea reserva del contenido, el cerrado equilibra confidencialidad con constancia de existencia; si se privilegia inmediatez y sencillez, el autógrafo es opción, siempre que se cumplan estrictamente sus requisitos.",
            },
            {
              type: "accordion",
              header: "Causas frecuentes de impugnación",
              open: false,
              text: "Falta de lectura/aprobación en público abierto; testigos inhábiles; defecto en el acta de cierre del cerrado; autógrafo sin fecha o sin puño y letra íntegros; violencia, dolo o error; incapacidad del testador.",
            },
            {
              type: "paragraph",
              text: "Operativamente, conviene acompañar el otorgamiento con prácticas de buena administración sucesoria: identificar albacea idóneo, describir bienes con precisión, documentar legados complejos (cuentas, acciones, derechos), anexar inventarios de referencia, y, sobre todo, mantener congruencia con actos inter vivos (donaciones, sociedades, seguros). Un testamento formalmente válido pero desconectado de la realidad patrimonial genera litigios. Finalmente, recordar que cualquier testamento ordinario es, por naturaleza, revocable: la voluntad del testador puede cambiar y la ley reconoce el acto posterior como criterio para preservar libertad y actualidad de su disposición. Esta plasticidad aconseja revisar el instrumento ante cambios relevantes en familia o patrimonio, para que siga reflejando la verdadera última voluntad.",
            },
            {
              type: "paragraph",
              text: "En síntesis, los testamentos ordinarios ofrecen un menú de formas con distintos equilibrios entre publicidad, reserva, costo y evidencia probatoria. Su correcta elección y confección, atendiendo a requisitos formales y límites sustantivos, no sólo evita ineficacias, sino que asegura una ejecución serena de la sucesión, honrando la autonomía del testador y resguardando los derechos de herederos, legatarios y terceros.",
            },
          ],
          subthemes: [
            {
              id: "3.1.1",
              numbering: "3.1.1",
              title: "Testamento público abierto",
              content: [
                {
                  type: "paragraph",
                  text: "El testamento público abierto es aquel que el testador otorga declarando de viva voz su última voluntad ante notario, quien la redacta en escritura, la lee íntegramente, la hace constar y la autoriza, normalmente con intervención de testigos hábiles cuando la ley lo exige. Su fortaleza descansa en tres pilares: la fe pública notarial, la unidad del acto con lectura y aprobación, y la protocolización que garantiza conservación y fácil localización. La solemnidad no es mero formalismo: reduce riesgos de suplantación, captura de voluntad por terceros, errores de redacción y extravío del documento. El notario verifica identidad y capacidad del testador, examina la licitud del contenido y cuida que la expresión de voluntad sea libre e informada. A la ejecución se acompaña de firmas del testador, notario y testigos, además de sellos y asientos exigidos por el régimen notarial. Esta modalidad es idónea cuando se privilegian seguridad jurídica, trazabilidad y menor probabilidad de litigios sobre forma.",
                },
                {
                  type: "paragraph",
                  text: "Las formalidades esenciales incluyen: presencia del testador; declaración de su voluntad; redacción por el notario; lectura íntegra para asegurar comprensión; aprobación expresa; y firma de quienes intervienen. Dependiendo del ordenamiento, se añaden requisitos especiales (número y cualidad de testigos, prohibiciones para testigos interesados, idioma y, en su caso, intérprete). La inobservancia de formalidades sustanciales expone al instrumento a nulidad. Por el contrario, defectos no esenciales pueden subsanarse si no afectan la integridad del acto. En materia de contenido, rigen los límites propios de la sucesión: licitud, determinación suficiente de herederos y legatarios, respeto a porciones forzosas y cargas posibles. La posibilidad de nombrar sustitutos, imponer condiciones lícitas y designar albacea y partición se despliega con amplitud, siempre dentro de los márgenes legales.",
                },
                {
                  type: "accordion",
                  header: "Ventajas prácticas",
                  open: false,
                  text: "Prueba robusta; conservación en protocolo; menor riesgo de pérdida; asesoría notarial en redacción; facilidad de localización y ejecución.",
                },
                {
                  type: "paragraph",
                  text: "Desde el prisma probatorio, el público abierto es el estándar oro: su existencia y contenido constan en un registro público de instrumentos que puede expedir copias certificadas cuando sea menester. Ante impugnaciones, la carga de la prueba recae en quien alegue vicios de voluntad o de forma; el instrumento goza de presunción de autenticidad. Operativamente, es recomendable acompañar el acto con inventarios de referencia, datos registrales de inmuebles, identificación de cuentas y pólizas, y, en su caso, instrucciones de administración. Asimismo, conviene revisar periódicamente el testamento ante cambios familiares (nacimientos, defunciones, divorcios), patrimoniales (adquisiciones, ventas) o de lugar de residencia que impliquen reglas notariales distintas. Recordar que la revocación expresa o el posterior testamento incompatible desplazan al anterior en lo revocado, preservando la libertad del testador hasta el último momento.",
                },
                {
                  type: "image",
                  src: "https://sucesionem.com/wp-content/uploads/2023/06/Acta-notarila.webp",
                  alt: "Acto notarial: lectura y aprobación",
                  caption: "Lectura, aprobación y firma en unidad de acto.",
                },
                {
                  type: "paragraph",
                  text: "La práctica forense muestra causas típicas de controversia: alegatos de incapacidad por enfermedad cognitiva, presión indebida de beneficiarios, o defectos en la intervención de testigos. La prudencia aconseja documentar, cuando sea pertinente, evaluaciones médicas sobre capacidad, evitar como testigos a potenciales beneficiarios o parientes cercanos que la ley califique como inhábiles, y dejar constancia de la lectura y de la conformidad del testador en términos inequívocos. Con estas cautelas, el testamento público abierto maximiza la probabilidad de que la voluntad del causante se ejecute sin tropiezos.",
                },
                {
                  type: "accordion",
                  header: "Causas de nulidad frecuentes",
                  open: false,
                  text: "Falta de lectura/aprobación; testigos inhábiles; ausencia de firma del testador; error esencial en identidad o contenido; vicios de voluntad.",
                },
                {
                  type: "paragraph",
                  text: "En suma, el testamento público abierto ofrece máxima seguridad jurídica a costa de menor reserva del contenido (que, no obstante, se protege por el sigilo profesional). Es la vía preferente cuando se busca blindar la prueba y simplificar la ejecución sucesoria, con acompañamiento técnico que cuide forma y sustancia de la disposición testamentaria.",
                },
              ],
            },
            {
              id: "3.1.2",
              numbering: "3.1.2",
              title: "Testamento notarial cerrado",
              content: [
                {
                  type: "paragraph",
                  text: "El testamento notarial cerrado equilibra confidencialidad del contenido y certeza de existencia. El testador redacta por sí o con asistencia técnica el documento que contiene su voluntad, lo firma, lo coloca en sobre u otro continente cerrado y lo presenta al notario, quien levanta acta de otorgamiento y cierre, identificando al otorgante, declarando que el documento fue exhibido, y sellando el continente en presencia de los testigos exigidos. El notario no conoce el contenido —salvo disposición distinta del régimen aplicable—, pero da fe del acto de cierre y conserva constancia que permite su localización. Esta modalidad resulta útil cuando se desea reservar el contenido hasta la muerte, evitando que terceros conozcan de antemano disposiciones sensibles, sin renunciar a la seguridad de un acto solemne que acredita existencia y fecha.",
                },
                {
                  type: "paragraph",
                  text: "Sus formalidades cardinales radican en la unidad y regularidad del cierre: firma del testador en el documento interno, cierre material (sellado), acta notarial que describa el continente y su estado, intervención de testigos hábiles, y, en su caso, inscripciones o registros que el derecho local prevea. La omisión de cualquiera de estos elementos abre flancos de nulidad. Tras el fallecimiento del testador, el cerrado debe ser abierto en forma legal —con participación del notario o autoridad judicial competente— y protocolizado para que su contenido adquiera plena eficacia probatoria. El procedimiento de apertura preserva cadena de custodia, evita sustituciones y permite a herederos y autoridades verificar integridad del documento. La caducidad puede operar si, sobrevivido el testador, no se observan formalidades de apertura o si se destruye el continente sin constancia auténtica de su contenido.",
                },
                {
                  type: "accordion",
                  header: "Acto de cierre (puntos críticos)",
                  open: false,
                  text: "Firma del testador en el texto interno; sellado continuo; descripción del continente en el acta; testigos hábiles; constancia de fecha y lugar; conservación/registro.",
                },
                {
                  type: "paragraph",
                  text: "La principal ventaja del cerrado es la reserva del contenido, lo que disuade presiones indeseadas y protege la privacidad del testador. Como contrapeso, exige cuidado extremo en la confección material: papel, tinta, ausencia de interlineados que no estén salvados, foliación, y, sobre todo, claridad y completitud del texto interno, pues el notario no podrá corregirlo al ignorar su contenido. En la práctica, se recomienda redacción por profesional, revisión minuciosa, firma en cada hoja, y anexos identificados. También conviene informar a persona de confianza la existencia y ubicación del instrumento para asegurar su hallazgo y apertura oportunos. El riesgo central no está en el concepto, sino en la ejecución descuidada del cierre o en la pérdida del documento.",
                },
                {
                  type: "image",
                  src: "https://scontent.fpaz4-1.fna.fbcdn.net/v/t39.30808-6/486577271_1080997244070587_8863393594646825098_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TEfpe445--cQ7kNvwFVHelB&_nc_oc=Adli6dBXRRmyaNPffST5Zuhe0VMJhOIeytbCAi_bZm4S4escWgHS26QnFEXxsXNBXOg&_nc_zt=23&_nc_ht=scontent.fpaz4-1.fna&_nc_gid=f0qhmHTCRXaRO7uxmdgvLQ&oh=00_Afb25dWLzicgrJYCG9yqvPIXA5amt8Z5rpzL6ieiMDW6Ew&oe=68C0CF0A",
                  alt: "Esquema del testamento cerrado",
                  caption:
                    "Exhibición, cierre y acta notarial; apertura y protocolización.",
                },
                {
                  type: "paragraph",
                  text: "Desde la litigación, los ataques suelen concentrarse en vicios del cierre (sellos rotos, acta imprecisa, testigos inhábiles) o en la materialidad del documento (firmas discutidas, enmiendas no salvadas). La defensa se apoya en la solidez del acta notarial y, si es necesario, en periciales documentoscópicas. Para minimizar controversias, es preferible ejecutar el acto con notario de práctica rigurosa, usar continentes aptos para sellado, dejar constancia fotográfica del estado y mantener el depósito en condiciones seguras. La apertura conforme a derecho y la protocolización posterior completan la cadena de confianza que permite ejecutar la voluntad del testador con seguridad.",
                },
                {
                  type: "accordion",
                  header: "Riesgos y mitigaciones",
                  open: false,
                  text: "Pérdida del documento → depósito seguro; vicios de cierre → notario riguroso; impugnaciones de firma → pericia y firmas en todas las hojas; demora en apertura → informar existencia y ubicación.",
                },
                {
                  type: "paragraph",
                  text: "En conclusión, el testamento notarial cerrado ofrece una alternativa seria para quienes valoran la confidencialidad sin renunciar al marco solemne. Su eficacia depende de la pulcritud del cierre y de la observancia de los procedimientos de apertura y protocolización, que son los que trasladan la voluntad reservada al plano de la prueba suficiente y de la ejecución ordenada.",
                },
              ],
            },
            {
              id: "3.1.3",
              numbering: "3.1.3",
              title: "Testamento autógrafo",
              content: [
                {
                  type: "paragraph",
                  text: "El testamento autógrafo —también denominado holográfico— es aquel íntegramente escrito, fechado y firmado por el puño y letra del testador, sin intervención necesaria de notario en el momento del otorgamiento. Su atractivo radica en la inmediatez y en la reserva: el testador puede redactarlo cuando lo desee, con su sola mano, sin revelar su contenido. Precisamente por esa simplicidad formal, la ley exige requisitos estrictos y, con frecuencia, prevé mecanismos de depósito o protocolización posterior para mitigar riesgos de extravío, destrucción o falsificación. La esencia es doble: que la pieza material dé cuenta, por sí misma, de su origen (mano del testador) y de su momento (fecha cierta), y que contenga con claridad designaciones de herederos y legatarios, disposiciones de administración y partición, y, cuando se estime oportuno, sustituciones y cargas lícitas.",
                },
                {
                  type: "paragraph",
                  text: "Los requisitos típicos son: escritura de puño y letra de la totalidad del texto (no basta llenar espacios en un formulario impreso), fecha completa (día, mes y año) y firma autógrafa al final; muchas legislaciones exigen además mayoría de edad y establecen caducidad si no se deposita o protocoliza en plazos concretos. Cualquier intervención ajena en el cuerpo del documento —máquina, impresión, escritura de tercero— vulnera su validez. La claridad material importa: tinta indeleble, papel adecuado, ausencia de tachaduras no salvadas y foliación si el texto ocupa varias hojas. La localización y conservación son el talón de Aquiles: sin depósito seguro o aviso a persona de confianza, el instrumento puede perderse, y la voluntad quedar sin ejecución.",
                },
                {
                  type: "accordion",
                  header: "Requisitos materiales indispensables",
                  open: false,
                  text: "Texto íntegro de puño y letra; fecha completa; firma al final; tinta legible; sin espacios en blanco; si son varias hojas, todas rubricadas y foliadas.",
                },
                {
                  type: "paragraph",
                  text: "Probatoriamente, el autógrafo se defiende con pericial grafoscópica que verifica correspondencia de trazos con la escritura habitual del testador y con la autenticidad de firma y fecha. Por ello, conviene evitar redacciones en condiciones físicas que alteren dramáticamente el trazo (enfermedad, temblores) sin apoyos médicos; cuando sea inevitable, anexar constancias médicas ayuda a despejar dudas. En algunos regímenes, el testador puede depositar el documento en autoridad o notaría, que dejan constancia de su recepción sin conocer el contenido; ese depósito facilita hallazgo y reduce controversias sobre existencia y fecha. También es recomendable renovar el instrumento ante cambios patrimoniales o familiares, o cuando aparezcan dudas sobre legibilidad.",
                },

                {
                  type: "paragraph",
                  text: "Las impugnaciones frecuentes alegan falta de puño y letra, firmas apócrifas, interlineados sospechosos o fechas alteradas. La prevención consiste en redacción limpia, firma en cada hoja si son varias, ausencia de espacios en blanco que permitan adiciones, y custodiar el documento en sobre sellado con anotación del contenido y fecha. Recordar, además, que el autógrafo es revocable: basta otorgar uno posterior o destruir válidamente el anterior con ánimos de revocarlo, según reglas aplicables. Si el testador desea reserva pero mayor seguridad formal, puede migrar al testamento cerrado o al público abierto, integrando su voluntad en un marco de prueba más robusto.",
                },
                {
                  type: "accordion",
                  header: "Riesgos y buenas prácticas",
                  open: false,
                  text: "Riesgo de pérdida → depósito/aviso; dudas sobre autenticidad → pericia y firmas en cada hoja; ambigüedad → redacción clara y legible; cambios vitales → revisión periódica y, en su caso, nuevo otorgamiento.",
                },
                {
                  type: "paragraph",
                  text: "En definitiva, el testamento autógrafo es una herramienta válida y eficiente si se aprecia la reserva y la inmediatez, siempre que se observe con rigor la materialidad exigida y se tomen precauciones de custodia y localización. Usado con cuidado, permite plasmar la última voluntad con economía de medios; acompañado de depósito y, eventualmente, de protocolización, alcanza un estándar razonable de seguridad para su ejecución.",
                },
              ],
            },
          ],
        },

        {
          id: "3.2",
          numbering: "3.2",
          title: "De los testamentos especiales",
          content: [
            {
              type: "paragraph",
              text: "Bajo la denominación de testamentos especiales se agrupan aquellas formas extraordinarias de disponer para después de la muerte que la ley admite cuando el testador enfrenta circunstancias anómalas que impiden o dificultan el otorgamiento por las vías ordinarias. Su razón de ser es garantizar que la última voluntad no quede sin efecto por la sola imposibilidad material de acudir a un notario o de observar solemnidades usuales. Por ello, estas formas flexibilizan ciertos requisitos formales, pero jamás renuncian a la prueba mínima de autenticidad, capacidad y libertad. El hilo conductor es el principio de necesidad: sólo proceden cuando concurren supuestos de hecho estrictos (p. ej., aislamiento, guerra, navegación), y su eficacia suele estar condicionada a confirmaciones o protocolizaciones posteriores, o a plazos de caducidad si el peligro cesa y el testador sobrevive. Comprender los supuestos, actores intervinientes, constancias exigibles y límites temporales permite emplearlos con prudencia y evitar nulidades.",
            },
            {
              type: "paragraph",
              text: "La categoría típica comprende cuatro especies: el testamento privado (otorgado sin notario ante testigos idóneos en situaciones de urgencia o imposibilidad), el militar (para miembros de fuerzas armadas en campaña o en condiciones asimiladas), el marítimo (a bordo de buques en navegación) y el testamento hecho en país extranjero (cuya validez formal se rige por reglas de derecho internacional privado). Aunque cada figura responde a un contexto, comparten cautelas: constancia escrita o, en su defecto, acta o asiento oficial; intervención de testigos hábiles; identificación del otorgante y expresión inequívoca de su voluntad; y, cuando proceda, depósito, registro o protocolización ulterior. Estas exigencias buscan equilibrar la agilidad que demanda la emergencia con la seguridad jurídica que requiere la sucesión.",
            },
            {
              type: "accordion",
              header: "Cuándo procede acudir a formas especiales",
              open: false,
              text: "Imposibilidad o grave dificultad de usar formas ordinarias; situaciones de guerra o campaña; navegación marítima; residencia o tránsito en el extranjero. Debe existir necesidad real, no mera conveniencia.",
            },
            {
              type: "paragraph",
              text: "La técnica legislativa de los testamentos especiales incorpora, además, ‘válvulas de seguridad’ temporales. Con frecuencia, si el testador sobrevive al peligro que justificó la forma extraordinaria, la ley le impone confirmar su voluntad por una vía ordinaria dentro de cierto plazo, so pena de caducidad. Con ello, se evita que disposiciones redactadas en condiciones precarias permanezcan indefinidamente sin controles probatorios robustos. Del mismo modo, se establecen reglas estrictas de inhabilidades para testigos (parientes próximos, beneficiarios) y se describen soportes documentales mínimos (libros de navegación, partes militares, actas administrativas) que facilitan la verificación judicial posterior.",
            },
            {
              type: "paragraph",
              text: "Un rasgo distintivo es la centralidad del funcionario sustituto. En el testamento marítimo, el capitán asume funciones fedatarias; en el militar, el superior o funcionario designado da fe del acto; en el privado, los testigos adquieren un peso probatorio inusual y, si existe autoridad disponible, ésta deja constancia del otorgamiento. El buen uso de estas figuras exige conocer sus límites (competencia material, territorial y funcional) y documentar con pulcritud la identidad del testador, la lectura y aprobación, y la fecha y lugar del acto. La prueba escrita —o su equivalente asentado en registros oficiales— es esencial para resistir impugnaciones.",
            },
            {
              type: "image",
              src: "https://website-assets.studocu.com/img/document_thumbnails/30d3988d683365b0a926530a085bf838/thumb_1200_927.png",
              alt: "Esquema comparado de testamentos especiales",
              caption:
                "Privado · Militar · Marítimo · Otorgado en el extranjero.",
            },
            {
              type: "paragraph",
              text: "En litigio, los testamentos especiales suelen impugnarse por dos vías: (i) falta de presupuesto fáctico (no había verdadera imposibilidad o situación extraordinaria) y (ii) defectos formales (testigos inhábiles, ausencia de constancias, omisión de apertura/protocolización). La mejor defensa es preventiva: observar con rigor los requisitos de la modalidad, conservar copias y asientos, y, si el peligro cesa, confirmar a la brevedad por vía ordinaria. Desde la práctica, conviene informar a persona de confianza sobre la existencia y ubicación del documento, y dejar señales que faciliten su hallazgo. Así, la excepcionalidad no se convierte en fuente de incertidumbre sucesoria.",
            },
            {
              type: "accordion",
              header: "Riesgos y caducidades típicas",
              open: false,
              text: "Caducidad si el testador sobrevive sin confirmar; pérdida del documento; testigos mal elegidos; incompetencia del funcionario; defectos en asientos (libro de bitácora, parte militar); idiomas y traducciones (extranjero).",
            },
            {
              type: "paragraph",
              text: "En síntesis, las formas especiales cumplen una función garantista: preservar la libertad de testar en contextos límite sin sacrificar la mínima certeza. Usadas con mesura, salvan la voluntad del causante; aplicadas sin necesidad o sin cuidado, abren flancos de nulidad. El estudio de cada subfigura aclara su campo de juego y las buenas prácticas para que la excepción cumpla su cometido.",
            },
          ],
          subthemes: [
            {
              id: "3.2.1",
              numbering: "3.2.1",
              title: "Testamento privado",
              content: [
                {
                  type: "paragraph",
                  text: "El testamento privado es la forma excepcional que permite al testador expresar su última voluntad sin intervención notarial cuando la circunstancia impide o dificulta de modo serio acudir a un fedatario. Típicamente procede ante enfermedad grave, inminencia de muerte, aislamiento geográfico, calamidades públicas o eventos que cortan el acceso a servicios notariales. La esencia está en la presencia de testigos idóneos que den fe del acto y en la materialización escrita de la voluntad, si es posible, o al menos en la constancia clara de lo acontecido. Su lógica es pragmática: ante el riesgo de dejar intestada la sucesión, la ley habilita una vía de mínima formalidad, que luego suele exigir confirmación o protocolización cuando la urgencia desaparece.",
                },
                {
                  type: "paragraph",
                  text: "Los elementos mínimos son: identificación del otorgante; expresión inequívoca de su voluntad dispositiva; fecha y lugar del otorgamiento; y presencia de un número legal de testigos hábiles —no beneficiarios ni parientes impedidos— que puedan declarar posteriormente sobre el acto. Siempre que sea posible, la voluntad se plasma por escrito y se firma; si el testador no puede firmar, se deja constancia del impedimento y se recaban firmas de los testigos. Si sólo se verbaliza, los testigos deberán reproducirla con precisión. En algunos regímenes, si hay autoridad disponible (juez, autoridad municipal), se levanta acta que refuerza la prueba.",
                },
                {
                  type: "accordion",
                  header: "Requisitos prácticos",
                  open: false,
                  text: "Testigos hábiles (número legal); texto claro y firmado; fecha y lugar; constancia del impedimento para firmar, si lo hay; acta de autoridad cuando sea posible; resguardo del documento.",
                },
                {
                  type: "paragraph",
                  text: "La eficacia del testamento privado suele estar condicionada a plazos: si el testador sobrevive al peligro que motivó esta forma, debe confirmar su voluntad —mediante testamento ordinario— dentro del término que marque la ley o, en su caso, presentar el documento ante autoridad para su protocolización. Si no lo hace, la disposición puede caducar. La ratio es clara: el derecho otorga un ‘puente’ para salvar la emergencia, pero promueve que la voluntad se consolide después bajo formas más seguras. En caso de fallecimiento inmediato, los herederos o interesados deberán promover su reconocimiento judicial aportando testigos y documentos.",
                },
                {
                  type: "image",
                  src: "https://imgv2-2-f.scribdassets.com/img/document/564092838/original/b7f25d0448/1?v=1",
                  alt: "Esquema de testamento privado",
                  caption:
                    "Voluntad + testigos → constancia/acta → eventual confirmación o protocolización.",
                },
                {
                  type: "paragraph",
                  text: "Las impugnaciones típicas alegan inhabilidad de testigos, contradicciones en sus relatos, ausencia de circunstancias que justificaran la vía privada o manipulación del documento. La prevención consiste en elegir testigos sin interés, de probada honorabilidad y capaces de recordar el acto; evitar espacios en blanco; describir con precisión herederos, legatarios y bienes; y, de ser viable, dar aviso o depósito a autoridad para sellar la existencia del instrumento. Si el testador no puede escribir, un tercero puede materializar la voluntad dictada, dejando razón del impedimento y asegurando la firma o huella del otorgante.",
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas",
                  open: false,
                  text: "Redacción en términos simples; identificación completa de personas y bienes; testigos no beneficiarios; firma/huella del otorgante; resguardo seguro; aviso a familiar o autoridad.",
                },
                {
                  type: "paragraph",
                  text: "En conclusión, el testamento privado es un salvavidas formal en situaciones límite. Su validez se juega en la necesidad, la idoneidad de testigos y la claridad de la constancia. Confirmar por vía ordinaria al cesar el peligro es la mejor manera de blindar la voluntad y evitar litigios posteriores.",
                },
              ],
            },
            {
              id: "3.2.2",
              numbering: "3.2.2",
              title: "Testamento militar",
              content: [
                {
                  type: "paragraph",
                  text: "El testamento militar habilita a miembros de las fuerzas armadas —y, según el régimen, a quienes los acompañan en campaña— para disponer de sus bienes cuando, por razón de servicio, no pueden acudir a un notario. Su presupuesto es la existencia de guerra, campaña activa, estado de sitio o condiciones asimiladas que dificultan gravemente el acceso a formas ordinarias. En este contexto, la ley confiere funciones fedatarias a mandos o funcionarios militares designados, o, en su defecto, a la constancia actuada en presencia de testigos hábiles, con asiento en documentos oficiales (partes, libros, órdenes). La finalidad es clara: no privar de la libertad de testar a quienes sirven en circunstancias extremas.",
                },
                {
                  type: "paragraph",
                  text: "Las formalidades típicas incluyen: identificación del testador (grado, unidad), declaración de su última voluntad, lectura y aprobación, firmas del otorgante y del oficial receptor o, de ser imposible, de los testigos; indicación de fecha y lugar; y asientos en la documentación militar pertinente. Cuando existe capellán o médico, su presencia puede añadirse como garantía complementaria, sin ser forzosa en todos los sistemas. Una vez otorgado, el documento se remite —por cadena de mando— a autoridad competente para su registro o resguardo. Si el testador sobrevive a la campaña, con frecuencia se exige confirmar o protocolizar por vía ordinaria dentro de determinado plazo.",
                },
                {
                  type: "accordion",
                  header: "Puntos críticos de validez",
                  open: false,
                  text: "Contexto de campaña/guerra acreditable; funcionario competente; testigos hábiles; asiento documental; traslado y resguardo; confirmación posterior si procede.",
                },
                {
                  type: "paragraph",
                  text: "El ámbito material del testamento militar es el mismo que cualquier testamento: institución de herederos, legados, nombramiento de albacea y, en su caso, sustituciones y cargas lícitas. No autoriza disposiciones contrarias a orden público ni excepciona límites sustantivos del régimen aplicable. Su excepcionalidad es formal y circunstancial. Por ello, cuidar la redacción —con nombres completos, designaciones claras y reglas de partición sencillas— reduce ambigüedades en contextos donde la prueba puede ser difícil por la volatilidad de la campaña.",
                },

                {
                  type: "paragraph",
                  text: "En impugnación, se discuten la inexistencia de contexto bélico, la incompetencia del oficial, defectos en los asientos o la inhabilidad de testigos. Por ello, es prudente que el acta haga referencia a órdenes o partes que acrediten la campaña, que precise el cargo del receptor y que describa con detalle el lugar y las circunstancias del otorgamiento. Cuando el testador retorna a la vida civil, confirmar por vía ordinaria blinda la voluntad y evita la caducidad que algunas legislaciones prevén si no se cumple ese paso.",
                },
                {
                  type: "accordion",
                  header: "Recomendaciones operativas",
                  open: false,
                  text: "Usar formatos claros; referir números de orden/parte; incluir datos de contacto de testigos; remitir copia a autoridad de archivo; instruir a familia sobre ubicación del documento.",
                },
                {
                  type: "paragraph",
                  text: "En suma, el testamento militar protege la voluntad en escenarios de riesgo. Su fuerza depende de la pulcritud con la que se documente el acto y de la diligencia posterior para registrarlo o confirmarlo cuando el servicio lo permita.",
                },
              ],
            },
            {
              id: "3.2.3",
              numbering: "3.2.3",
              title: "Testamento marítimo",
              content: [
                {
                  type: "paragraph",
                  text: "El testamento marítimo se otorga a bordo de buque en navegación cuando el acceso a notaría es impracticable. La ley inviste al capitán —o a quien haga sus veces— de facultades para recibir la declaración de última voluntad, con intervención de testigos hábiles y asiento en los libros de la nave. La procedencia se condiciona a que el buque esté efectivamente en travesía o en situación que impida acudir a formas ordinarias; en puerto con servicios disponibles, se prefiere el testamento público. La figura responde a una necesidad histórica: asegurar que la muerte en mar no deje sin voz jurídica al causante.",
                },
                {
                  type: "paragraph",
                  text: "El otorgamiento sigue una secuencia: identificación del testador (pasajero o tripulante), lectura de la disposición, aprobación y firma del otorgante, del capitán y de los testigos; indicación de fecha, hora, coordenadas aproximadas o tramo de navegación; y asiento en el libro de bitácora o registro equivalente. Cuando la nave toca puerto, el capitán debe remitir copia certificada a la autoridad marítima o consular para su depósito o protocolización. Si el testador sobrevive y desembarca, las legislaciones suelen exigir confirmación por vía ordinaria en plazo breve, bajo pena de caducidad.",
                },
                {
                  type: "accordion",
                  header: "Constancias esenciales",
                  open: false,
                  text: "Libro de bitácora; datos del buque y del capitán; identidad de testigos; descripción del tramo de navegación; firmas; envío a autoridad al arribar a puerto.",
                },
                {
                  type: "paragraph",
                  text: "El contenido del testamento marítimo puede incluir institución de herederos, legados, albacea y reglas de partición, con la misma validez sustantiva que cualquier testamento. Dada la naturaleza del entorno, es recomendable redactar con especial claridad, evitar cláusulas complejas y consignar datos identificatorios completos de beneficiarios. El capitán debe extremar cuidados de custodia, pues la pérdida del asiento o de la copia compromete la prueba. La coordinación con agente naviero y autoridad consular agiliza el depósito al arribo.",
                },

                {
                  type: "paragraph",
                  text: "Las impugnaciones apuntan a cuestionar si el buque estaba en navegación, la competencia del capitán (bandera, tipo de nave), la calidad de los testigos o la integridad del asiento. Responden dos cuidados: documentar datos del buque (nombre, matrícula, bandera), dejar constancia de ruta/posicionamiento y remitir con prontitud a la autoridad. Si el acto ocurrió en buque extranjero o en aguas internacionales, entran en juego reglas de bandera y, eventualmente, de derecho internacional privado, que conviene anticipar con asesoría al arribar a puerto.",
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas a bordo",
                  open: false,
                  text: "Plantillas para el acto; identificación oficial de intervinientes; foliar y firmar cada hoja; doble resguardo (bitácora + copia); notificación inmediata al arribar.",
                },
                {
                  type: "paragraph",
                  text: "En definitiva, el testamento marítimo legitima un acto necesario en alta mar. Su validez reposa en la observancia de formalidades de a bordo y en la diligencia del capitán para comunicar y registrar el instrumento al tocar tierra.",
                },
              ],
            },
            {
              id: "3.2.4",
              numbering: "3.2.4",
              title: "Testamento hecho en país extranjero",
              content: [
                {
                  type: "paragraph",
                  text: "El testamento otorgado en país extranjero plantea un problema de validez formal y eficacia en sede distinta a la del otorgamiento. La regla moderna de derecho internacional privado favorece la conservación del acto: suele reputarse formalmente válido si cumple la ley del lugar de otorgamiento (lex loci actus), la ley nacional o del domicilio del testador, o la ley del lugar donde los bienes se encuentren, según disponga el régimen aplicable. Esta flexibilidad busca evitar que la voluntad perezca por meras divergencias rituales entre ordenamientos. No obstante, el reconocimiento práctico exige cumplir con traducciones, legalizaciones o apostillas, y con eventuales registros o protocolizaciones para producir efectos probatorios plenos ante autoridades y notarios del país donde se pretende ejecutar.",
                },
                {
                  type: "paragraph",
                  text: "En la práctica, el itinerario incluye: obtener copia auténtica del testamento extranjero y, si procede, del acta de defunción; legalizar o apostillar los documentos conforme al Convenio de La Haya o tratados aplicables; realizar traducción oficial al idioma del foro; y presentar los instrumentos ante autoridad o fedatario competente para su protocolización o para el trámite sucesorio. Si el testamento contiene disposiciones sobre bienes sujetos a registro (inmuebles, vehículos, participaciones), se seguirán además las reglas de inscripción locales. Nada de lo anterior altera el fondo de la voluntad, pero condiciona su ejecutabilidad documental.",
                },
                {
                  type: "accordion",
                  header: "Puntos clave de reconocimiento",
                  open: false,
                  text: "Validez formal por conexión (lugar de otorgamiento, nacionalidad o domicilio del testador); apostilla/legalización; traducción oficial; protocolización o registro local; compatibilidad con orden público.",
                },
                {
                  type: "paragraph",
                  text: "El límite es el orden público del foro: aunque el testamento sea formalmente válido, no se aplicarán cláusulas que vulneren principios esenciales del sistema local. Asimismo, ciertos efectos reales pueden someterse a la lex rei sitae (ley del lugar de los bienes), lo que impone adaptar la ejecución (p. ej., requisitos registrales, impuestos). Por ello, conviene diseñar la sucesión con una mirada transnacional cuando el testador posee bienes o reside fuera de su país de nacionalidad: elegir formas aceptadas en varios foros, incluir datos claros de identificación de bienes y prever contactos para facilitar trámites.",
                },

                {
                  type: "paragraph",
                  text: "Las controversias más comunes derivan de defectos documentales (falta de apostilla, traducciones deficientes), de dudas sobre la competencia del fedatario extranjero, o de colisiones entre reglas sucesorias y derechos reales locales. La prevención pasa por verificar, al planear el testamento, que el fedatario sea competente y que la forma sea reconocible en los países relevantes; al ejecutar, por cumplir escrupulosamente con formalidades de autenticación y con los trámites registrales. Cuando hay herederos en varios países, una comunicación transparente y una coordinación interprofesional evitan duplicidades y conflictos innecesarios.",
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas transnacionales",
                  open: false,
                  text: "Comprobar competencia del fedatario; prever apostilla; enlistar bienes por país; conservar datos registrales; coordinar con notarios/autoridades de ambos foros; planificar impuestos y costos.",
                },
                {
                  type: "paragraph",
                  text: "En suma, el testamento hecho en el extranjero es plenamente utilizable si se respeta la forma válida en al menos uno de los puntos de conexión y si se cumple el ‘puente’ documental (apostilla, traducción, protocolización). Diseñado con previsión, evita intestados indeseados y permite ejecutar con orden la voluntad del causante a través de fronteras.",
                },
              ],
            },
          ],
        },

        {
          id: "3.3",
          numbering: "3.3",
          title: "De los bienes que pueden ser objeto de testamento",
          content: [
            {
              type: "paragraph",
              text: "El objeto del testamento está constituido por los bienes, derechos y acciones transmisibles mortis causa que el testador puede disponer conforme a la ley. En términos generales, puede comprender tanto la totalidad del patrimonio (a través de la institución de herederos) como atribuciones singulares (legados) sobre bienes determinados o determinables. El principio de libertad de testar se equilibra con límites de orden público: sólo pueden ser objeto del testamento los bienes que estén en el comercio, que no estén prohibidos por la ley, y aquellos sobre los cuales el causante tenga titularidad o una expectativa jurídicamente protegida al momento de su muerte. La regla práctica es sencilla: el testador puede ordenar sobre lo que es suyo y transmisible; no puede otorgar más derecho del que tiene, ni afectar derechos ajenos o intransmisibles por su naturaleza.",
            },
            {
              type: "paragraph",
              text: "Pueden incluirse bienes muebles (dinero, vehículos, mobiliario, inventarios), inmuebles (casas, terrenos, naves), frutos y productos, derechos de crédito (préstamos a favor del testador), derechos de propiedad intelectual, participaciones societarias y, en general, todo derecho patrimonial no prohibido. El legado puede describir un bien específico (p. ej., “mi departamento en…”) o genérico (“cien acciones de…”), siempre que exista determinabilidad suficiente y que el bien no haya salido del patrimonio al momento del fallecimiento. Cuando se instituye heredero universal, la disposición se extiende a todo lo que el testador deje al morir, incluso bienes adquiridos después de otorgar el testamento, salvo disposición en contrario.",
            },
            {
              type: "accordion",
              header: "Reglas de validez del objeto testamentario",
              open: false,
              text: "1) Debe recaer en bienes lícitos y comerciables. 2) Debe ser transmisible (no personalísimo). 3) Debe ser existente al morir el causante o determinable sin arbitrariedad. 4) No puede perjudicar derechos irrenunciables de terceros (v. gr. alimentos). 5) No puede disponer de bienes ajenos.",
            },
            {
              type: "paragraph",
              text: "Quedan fuera del comercio, y por ello no son objeto válido de legado, las cosas cuya enajenación prohíbe la ley o que, por su naturaleza, pertenecen a todos (p. ej., bienes de uso común) salvo concesión específica. Tampoco pueden ser objeto de testamento los derechos estrictamente personalísimos —como el ejercicio de la patria potestad o el consentimiento para actos personalísimos— ni los cargos públicos o funciones indelegables. En el mismo sentido, el testamento no puede imponer al heredero cumplir obligaciones ilícitas o contrarias a buenas costumbres; tales cargas se tienen por no puestas.",
            },
            {
              type: "paragraph",
              text: "Otra limitación práctica es la imposibilidad de legar bienes futuros como tales, esto es, cosas aún no existentes o que no formarán parte del patrimonio del causante al tiempo de su muerte. No obstante, puede legarse el producto o fruto de bienes presentes (p. ej., rentas), o instituirse heredero universal para que reciba todo lo que llegue a integrar el patrimonio hasta el deceso. Si el testador lega una cosa propia que después enajena, el legado se extingue por falta de objeto, salvo que exista sustitución o cláusula que asegure un equivalente; si la cosa se deteriora sin culpa del testador, se transmite en el estado en que se encuentre, salvo disposición distinta.",
            },
            {
              type: "image",
              src: "https://website-assets.studocu.com/img/document_thumbnails/f649265169da4eef53e9e9deead9518d/thumb_1200_729.png",
              alt: "Mapa de bienes transmisibles mortis causa",
              caption:
                "Bienes muebles e inmuebles, derechos de crédito, intangibles y participaciones.",
            },
            {
              type: "paragraph",
              text: "En materia de derechos, es válido legar créditos a favor del testador (con sus accesorios) o condonar, por vía de legado, un crédito del que el heredero o legatario era deudor (remisión). También pueden transmitirse derechos de propiedad intelectual, licencias y regalías, siempre que su régimen lo permita; en ocasiones, el legado se sujeta a avisos ante autoridades o sociedades de gestión. En cambio, no son legables los derechos que se extinguen con la persona (usufructo vitalicio, salvo pacto distinto; uso y habitación personales; alimentos como derecho personal), salvo que la ley disponga lo contrario.",
            },
            {
              type: "accordion",
              header: "Ejemplos prácticos y cautelas",
              open: false,
              text: "• Legar un inmueble hipotecado: el gravamen subsiste salvo disposición de liberar. • Legar acciones: revisar estatutos, derechos de preferencia y transmisibilidad. • Legar ‘lo que quede’ tras pagar deudas: cuida prelación de acreedores. • Legar un bien en copropiedad: se transmite la cuota; considerar tanteo. • Remisión de deuda vía legado: precisa monto y documento para evitar disputas.",
            },
            {
              type: "paragraph",
              text: "Finalmente, deben considerarse los efectos frente a terceros: los acreedores del causante tienen preferencia de cobro sobre el acervo, por lo que legados y disposiciones patrimoniales se cumplirán después de satisfechas las deudas. Además, cuando existan reglas especiales (p. ej., bienes sujetos a registro, participaciones con restricciones estatutarias, bienes con régimen conyugal o sociedad patrimonial), la ejecución de la voluntad testamentaria requerirá observar trámites y límites propios. Diseñar el testamento con inventarios claros, referencias registrales y cláusulas de sustitución reduce litigios y permite que la voluntad del causante se cumpla de forma ordenada y eficiente.",
            },
          ],
        },

        {
          id: "3.4",
          numbering: "3.4",
          title: "De la extinción de los testamentos",
          content: [
            {
              type: "paragraph",
              text: "La extinción del testamento alude al conjunto de supuestos en los que la última voluntad del causante pierde eficacia, total o parcialmente. No se trata de un único fenómeno, sino de varios regímenes con causas, momentos y efectos distintos. Para una comprensión ordenada conviene diferenciar: i) la nulidad, que mira al vicio originario del acto (capacidad, voluntad, objeto o forma) y priva de efectos lo inválido; ii) la revocación, que es un acto posterior del propio testador por el que sustituye o deja sin efecto disposiciones válidas; y iii) la caducidad, que es una ineficacia sobrevenida por hechos posteriores ajenos a la voluntad del testador (premoriencia del favorecido, pérdida del objeto, incumplimiento de condición, entre otros). Bajo el rótulo de “extinción” se estudia, pues, cómo y cuándo el ordenamiento deja de atribuir eficacia a lo dispuesto, y qué reglas supletorias operan para redirigir el caudal hereditario.",
            },
            {
              type: "paragraph",
              text: "Desde una perspectiva sistemática, la extinción puede ser total (cae el instrumento completo) o parcial (sólo algunas cláusulas). La conservación de lo válido es principio rector: si el vicio o la causa de ineficacia afectan una cláusula separable, el resto subsiste siempre que sea compatible con la voluntad general del testador. Esta pauta evita que defectos locales arrasen con el plan sucesorio. En paralelo, rigen reglas de integración: cuando una disposición se extingue, su porción se distribuye por acrecimiento entre coherederos o conforme al orden intestatario, salvo que el testamento prevea sustituciones o equivalentes (p. ej., “si la cosa no existiere, su valor…”). De ahí la importancia de diseñar testamentos con válvulas de continuidad que resistan contingencias.",
            },
            {
              type: "accordion",
              header: "Mapa conceptual de la extinción",
              open: false,
              text: "• Nulidad → vicio originario → requiere declaración judicial (por regla). • Revocación → voluntad posterior del testador → opera con nuevo testamento o actos incompatibles. • Caducidad → hecho sobrevenido ajeno a la voluntad del testador → opera ipso iure al actualizarse la causa. • Efectos: total/parcial; supletoriedad: sustitución, acrecimiento, intestada.",
            },
            {
              type: "paragraph",
              text: "En la práctica, las causas se presentan de formas diversas. Hay nulidad cuando falta una solemnidad esencial de la modalidad elegida (v. gr., ausencia de testigos hábiles donde la ley los exige), cuando el testador carecía de capacidad legal al otorgarlo o cuando la voluntad fue viciada por error, dolo o violencia. Hay revocación cuando el testador otorga un instrumento posterior incompatible, cuando lo declara expresamente, o, en supuestos específicos, cuando destruye voluntariamente un testamento cerrado. Hay caducidad cuando el legatario premuere sin sustituto, cuando el objeto legado perece sin culpa del testador y no se previó equivalencia, cuando no se cumple una condición suspensiva o cuando sobreviene imposibilidad jurídica. Cada causa exige pruebas y produce efectos temporalmente situados.",
            },
            {
              type: "paragraph",
              text: "Los efectos procesales también difieren. La nulidad se hace valer por quien tenga interés jurídico y, salvo reglas especiales, requiere declaración judicial; su éxito puede abrir total o parcialmente la intestada. La revocación se acredita mostrando el acto posterior o la incompatibilidad objetiva entre disposiciones; la llamada ‘reviviscencia’ del testamento anterior no opera automáticamente salvo previsión expresa. La caducidad se constata en la tramitación sucesoria al comprobarse el hecho sobrevenido, aplicando en seguida sustituciones, acrecimiento o, en su defecto, normas intestadas. En todos los casos, la carga de la prueba y los plazos aplicables dependen del tipo de ineficacia invocada y de la legislación local.",
            },
            {
              type: "image",
              src: "https://navarroynavarro.es/wp-content/uploads/2023/06/testamento-invalido.webp",
              alt: "Esquema de extinción del testamento",
              caption:
                "Nulidad (origen) • Revocación (acto posterior) • Caducidad (hecho sobrevenido). Efectos y supletoriedad.",
            },
            {
              type: "paragraph",
              text: "La interpretación favorece la eficacia de la voluntad real del testador. Por eso, antes de declarar extinción se exploran vías de conservación: corrección de errores materiales evidentes, interpretación conforme del sentido de las cláusulas, aplicación de sustituciones vulgares o fideicomisarias previstas, y reconocimiento de equivalentes en legados de género o de valor. Este sesgo pro-validez cede cuando el vicio afecta garantías de autenticidad (forma esencial), libertad (coacción) o licitud (objeto o causa ilícita). El equilibrio entre respeto a la voluntad y tutela del orden público sucesorio es la clave hermenéutica del juez y del notario.",
            },
            {
              type: "accordion",
              header: "Buenas prácticas de redacción para prevenir extinción",
              open: false,
              text: "• Incluir sustitución vulgar y recíproca entre coherederos. • Prever equivalentes de valor para legados de especie. • Declarar cláusula de revocación y su alcance. • Describir bienes con datos registrales. • Identificar condiciones realistas y verificables. • Consignar lectura, capacidad y voluntad con prolijidad.",
            },
            {
              type: "paragraph",
              text: "Existen, además, aristas internacionales y registrales. Testamentos otorgados en el extranjero se rigen por reglas de forma y de revocación del punto de conexión reconocido (ley del lugar del acto, de la nacionalidad o del domicilio), debiendo cumplirse legalización/apostilla y traducción para su eficacia local. La caducidad por imposibilidad jurídica puede provenir de cambios normativos o registrales que impidan la transmisión; en tales casos, conviene prever en el propio instrumento soluciones de reemplazo. Finalmente, todo análisis de extinción considera la prelación de acreedores: antes de cumplir legados, el acervo debe atender deudas y cargas de la herencia, lo que puede impactar la ejecución de disposiciones y exigir ajustes proporcionales.",
            },
            {
              type: "paragraph",
              text: "En síntesis, ‘extinción’ es un paraguas que ordena por qué, cuándo y cómo cesa la eficacia de la última voluntad. Nulidad, revocación y caducidad son rutas distintas que deben distinguirse con precisión, tanto para diseñar testamentos resistentes como para litigar o tramitar sucesiones con lealtad a la voluntad del causante y al marco legal. Un instrumento bien redactado —con sustituciones, equivalentes y cláusulas claras— reduce drásticamente la probabilidad de extinción indeseada y, cuando ésta ocurre, canaliza sus efectos de manera previsible y justa.",
            },
          ],
          subthemes: [
            {
              id: "3.4.1",
              numbering: "3.4.1",
              title: "Nulidad",
              content: [
                {
                  type: "paragraph",
                  text: "La nulidad testamentaria es la sanción jurídica que priva de efectos a un testamento, total o parcialmente, cuando adolece de vicios sustanciales. Su función es proteger la autenticidad de la voluntad y el orden público sucesorio, no castigar formalismos vacíos. En términos generales, hay causales relativas a la capacidad del testador (incapacidad legal), a la voluntad (error, dolo, violencia), al objeto (ilícito o imposible), a la causa (ilícita) y a la forma (falta de solemnidades esenciales según la modalidad elegida). La nulidad puede afectar todo el instrumento o sólo las cláusulas viciadas, conservándose el resto si es autónomo y compatible con la voluntad general del causante; este principio de conservación privilegia la eficacia de lo válido.",
                },
                {
                  type: "paragraph",
                  text: "La incapacidad para testar en los términos de la ley genera nulidad. Así ocurre, por ejemplo, cuando el testamento se otorga por quien carece de edad o discernimiento, o por quien se encuentra legalmente inhabilitado al tiempo del otorgamiento. En materia de voluntad, la coacción, el engaño determinante o el error esencial sobre la naturaleza del acto o sobre la identidad del favorecido pueden viciar el consentimiento. No cualquier influencia, consejo o insinuación convierte el acto en nulo: se exige prueba robusta de que el vicio anuló la libertad interna del testador. La jurisprudencia suele ser prudente, pues la muerte del otorgante dificulta reconstruir su ánimo; por ello cobra relevancia la pulcritud en la instrumentación.",
                },
                {
                  type: "accordion",
                  header: "Vicios y ejemplos típicos",
                  open: false,
                  text: "• Forma: ausencia de firmas, de lectura y aprobación, de testigos hábiles, o testigos impedidos. • Voluntad: presión grave, engaño determinante. • Objeto: legado de cosa fuera del comercio. • Capacidad: testar sin edad o en estado de incapacidad legal.",
                },
                {
                  type: "paragraph",
                  text: "Las solemnidades son medios de seguridad. Su omisión o cumplimiento defectuoso sólo vicia el testamento si la ley las considera esenciales para esa modalidad. Así, en el público abierto, la intervención notarial y la lectura ante testigos hábiles son cardinales; en el cerrado, la escritura, firma, sellado y acta de cierre; en los especiales, las constancias que sustituyen la fe pública (bitácora, parte militar, testigos). Las formalidades no se exigen por amor al rito, sino como salvaguarda probatoria: cuanto más extraordinarias las circunstancias, más precisas las constancias requeridas.",
                },
                {
                  type: "paragraph",
                  text: "La nulidad puede ser total o parcial. La parcialidad opera cuando la cláusula viciada es separable y su supresión no desfigura el conjunto ni frustra la voluntad esencial del testador. Por ejemplo, si un legado es inválido por imposibilidad del objeto, puede dejarse sin efecto el legado y subsistir la institución de heredero. A la inversa, si el vicio afecta la estructura misma (falta de forma esencial), el instrumento entero cae. El intérprete busca siempre preservar el núcleo válido, respetando el principio de conservación de negocios jurídicos.",
                },
                {
                  type: "image",
                  src: "https://joelmelgarejo.com/wp-content/uploads/2021/10/nulidad.png",
                  alt: "Checklist probatorio en acciones de nulidad",
                  caption:
                    "Capacidad, voluntad, forma, objeto y causa: fuentes de vicio y evidencias.",
                },
                {
                  type: "paragraph",
                  text: "La legitimación para impugnar corresponde a quienes tengan interés jurídico: herederos, legatarios, acreedores, cónyuge o parejas con derechos, e incluso al Ministerio Público en supuestos que comprometen orden público. La carga de la prueba recae en quien afirma el vicio; de ahí la importancia de los testimonios, protocolos y constancias. En cuanto a plazos, la regla varía según el ordenamiento y la naturaleza del vicio; en general, la nulidad radical por orden público no se convalida por el tiempo, mientras que nulidades relativas pueden sujetarse a caducidades o prescripciones. El efecto de la nulidad total es abrir la sucesión intestada; si es parcial, se cumple el resto conforme a su tenor.",
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas preventivas",
                  open: false,
                  text: "Identificar y documentar capacidad; lectura y aprobación expresas; testigos hábiles; actas claras; evitar ambigüedades; custodiar protocolos; asesoría profesional en casos complejos.",
                },
                {
                  type: "paragraph",
                  text: "En síntesis, la nulidad es remedio excepcional para supuestos graves. La mejor política es prevenirla con instrumentación intachable y redacción clara. Si se litiga, la estrategia probatoria y la reconstrucción del contexto del otorgamiento son decisivas. La finalidad última es tutelar la libertad real de testar y la seguridad de las transmisiones, evitando que defectos subsanables o interpretaciones rígidas frustren la voluntad legítima del causante.",
                },
              ],
            },
            {
              id: "3.4.2",
              numbering: "3.4.2",
              title: "Revocación",
              content: [
                {
                  type: "paragraph",
                  text: "La revocación es el acto por el cual el testador deja sin efecto, total o parcialmente, un testamento válido. Expresa la supremacía de la última voluntad mientras el otorgante viva y conserve capacidad: nadie puede atarse las manos con cláusulas de irrevocabilidad absoluta, pues la ley protege la libertad de modificación hasta el fallecimiento. En la práctica, la revocación puede ser expresa —mediante un nuevo testamento que así lo declare o que sea incompatible— o, en ciertos supuestos, tácita —por destrucción voluntaria del testamento cerrado, por disposición de los mismos bienes en forma incompatible, etc., según el régimen aplicable. La regla interpretativa es clara: prevalece la voluntad posterior, siempre que cumpla formalidades y no vulnere el orden público.",
                },
                {
                  type: "paragraph",
                  text: "La vía típica de revocación es el otorgamiento de un nuevo testamento. Su coexistencia con el anterior puede ser total (sustitución) o parcial (modificaciones). Cuando el nuevo instrumento no declara revocar, pero contiene disposiciones incompatibles, se entiende revocado en lo que haya contradicción y vigente en lo demás. La revocación se extiende, salvo indicación distinta, a nombramientos de albacea o tutores, cargas y sustituciones. La práctica aconseja declarar en el nuevo testamento el alcance de la revocación y, en su caso, las partes que se conservan, para evitar dudas interpretativas.",
                },
                {
                  type: "accordion",
                  header: "Formas usuales de revocar",
                  open: false,
                  text: "• Nuevo testamento público que revoca o sustituye. • Declaración expresa de revocación parcial (p. ej., legados). • Destrucción del testamento cerrado por el testador. • Disposiciones incompatibles posteriores.",
                },
                {
                  type: "paragraph",
                  text: "¿Puede ‘revivir’ un testamento revocado si se invalida el posterior? La regla general es que la reviviscencia no opera automáticamente: la invalidez del posterior no resucita por sí misma al anterior, salvo que la ley o el propio instrumento lo prevean expresamente. De ahí que, ante dudas o litigios, convenga otorgar un nuevo testamento que restablezca la voluntad deseada. También es relevante la revocación parcial de legados: si el testador dispone del bien legado en vida, por regla el legado caduca por falta de objeto, sin necesidad de acto expreso, salvo que el testamento contemple sustitución.",
                },
                {
                  type: "paragraph",
                  text: "En testamentos especiales, la revocación puede sujetarse a formalidades específicas: el militar o marítimo suelen requerir constancia en las mismas condiciones del otorgamiento y posterior protocolización. En testamentos otorgados en el extranjero, las formas de revocación válidas serán las admitidas por los puntos de conexión que el derecho internacional privado reconozca (ley del lugar del acto, nacionalidad o domicilio del testador), debiendo cumplirse los requisitos de legalización/apostilla y traducción para su eficacia en otro país.",
                },
                {
                  type: "image",
                  src: "https://i.ytimg.com/vi/6Xf5mbAvuKw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLAKILdaA5SJiHusKpPM8-4uElWxTA",
                  alt: "Flujo de revocación testamentaria",
                  caption:
                    "Voluntad posterior válida → revocación total/parcial → prevalencia de disposiciones más recientes.",
                },
                {
                  type: "paragraph",
                  text: "Procesalmente, quien invoca la revocación debe probar el hecho constitutivo: existencia del acto posterior, destrucción voluntaria del instrumento, o incompatibilidad clara. Por prevención, el asesor recomienda: 1) declarar expresamente la revocación y su alcance; 2) comunicar a personas de confianza la existencia del nuevo testamento y su localización; 3) evitar documentos contradictorios (cartas, minutas) sin valor formal que generen confusión; y 4) revisar periódicamente el testamento ante cambios vitales (matrimonio, divorcio, nacimientos, adquisiciones relevantes).",
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas del testador",
                  open: false,
                  text: "Redacción clara; cláusula de revocación; actualización tras eventos vitales; custodia y localización del instrumento; asesoría notarial o jurídica especializada.",
                },
                {
                  type: "paragraph",
                  text: "En suma, la revocación protege la libertad dinámica del testador y preserva la coincidencia entre su realidad vital y su plan sucesorio. Una revocación bien documentada evita litigios y garantiza que la última voluntad —no una versión superada por el tiempo— sea la que rija la transmisión del patrimonio.",
                },
              ],
            },
            {
              id: "3.4.3",
              numbering: "3.4.3",
              title: "Caducidad",
              content: [
                {
                  type: "paragraph",
                  text: "La caducidad testamentaria es la ineficacia sobrevenida de disposiciones válidas al nacer, por ocurrir hechos posteriores previstos en la ley o en el propio testamento. A diferencia de la nulidad (que mira a vicios originarios) y de la revocación (acto posterior del testador), la caducidad opera de pleno derecho cuando se frustra un presupuesto de eficacia: el favorecido no llega a adquirir (premoriencia, incapacidad sobrevenida, renuncia sin sustitución), el objeto desaparece sin culpa del testador ni equivalencia prevista, o transcurre un plazo o condición sin cumplirse. Su función es ajustar el plan sucesorio a la realidad al momento de la muerte y durante la liquidación, respetando siempre la voluntad expresada en la medida de lo posible mediante sustituciones y reglas supletorias.",
                },
                {
                  type: "paragraph",
                  text: "Causas típicas de caducidad de legados incluyen: 1) pérdida o enajenación del bien legado por el testador sin previsión de sustituto; 2) imposibilidad sobrevenida no imputable al testador (p. ej., destrucción por caso fortuito) cuando el legado era de especie; 3) premuerte del legatario sin asignación de sustituto o sin representación legal; 4) incumplimiento de condición suspensiva o término; 5) no aceptación dentro de plazos legales cuando así se exige; y 6) imposibilidad jurídica sobrevenida (p. ej., restricción normativa que impide transmitir). En herencias universales, la caducidad es menos frecuente y suele reconducirse por reglas de acrecimiento, representación o ab intestato.",
                },
                {
                  type: "accordion",
                  header: "Diferencias clave",
                  open: false,
                  text: "Nulidad: vicio originario; requiere declaración. Revocación: acto posterior del testador. Caducidad: ineficacia por hecho sobrevenido ajeno a la voluntad del testador; opera ipso iure cuando se actualiza la causa.",
                },
                {
                  type: "paragraph",
                  text: "La voluntad previsora mitiga la caducidad. El testador puede nombrar sustitutos (vulgar o fideicomisario), prever equivalentes (“si la cosa no existiere, se entregue su valor a la fecha de…”) o establecer reglas de distribución alternativa. Estas válvulas mantienen el espíritu del plan sucesorio frente a contingencias. Donde no hay previsión, opera la supletoriedad legal: acrece la porción entre coherederos o se defiere la parte caduca conforme a la ley intestada. La técnica testamentaria, por tanto, consiste en reducir zonas de aleatoriedad mediante cláusulas claras y escenarios contemplados.",
                },
                {
                  type: "paragraph",
                  text: "Procesalmente, la caducidad suele alegarse en la tramitación sucesoria, al momento de elaborar el inventario, tasación y partición. Se acreditan los hechos sobrevenidos con documentos (actas de defunción, escrituras de enajenación, reportes de siniestro) y se aplican las cláusulas de sustitución o las reglas de acrecimiento. La discusión más común versa sobre si un hecho es caducidad (sobrevenida) o nulidad (originaria), pues de ello dependen pruebas y efectos. Un criterio práctico: si la disposición era válida al nacer y luego algo cambió, estamos ante caducidad; si estuvo viciada desde el origen, procede la nulidad.",
                },

                {
                  type: "paragraph",
                  text: "La caducidad también puede afectar testamentos especiales si no se confirman cuando cesa el peligro o no se protocolizan en plazo —según el régimen aplicable—, aunque aquí el fenómeno se entrelaza con reglas formales específicas. En contextos internacionales, la caducidad por imposibilidad jurídica sobrevenida exige coordinarse con derecho registral y fiscal del país de ejecución. Para evitar sorpresas, conviene revisar periódicamente el testamento a la luz de cambios en patrimonio, familia y regulación.",
                },
                {
                  type: "accordion",
                  header: "Cláusulas que previenen caducidad",
                  open: false,
                  text: "Sustitución vulgar; sustitución recíproca entre coherederos; equivalencia en valor o especie; reglas de acrecimiento; plazos y condiciones realistas; actualización periódica del instrumento.",
                },
                {
                  type: "paragraph",
                  text: "En resumen, la caducidad es un mecanismo de adaptación del testamento a hechos posteriores no controlados por el testador. Lejos de contradecir la libertad de testar, la robustece cuando la técnica testamentaria incorpora sustituciones y equivalentes que preservan el propósito del causante. Una planificación cuidadosa reduce litigios y asegura que la voluntad se cumpla aun cuando la realidad cambie.",
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
          href: "https://www.youtube.com/watch?v=xD6vklztdsU", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "EL ALBACEA — https://www.youtube.com/watch?v=xD6vklztdsU",
            "LA ADMINISTRACIÓN DE BIENES EN LAS SUCESIONES — https://www.youtube.com/watch?v=-MwM3AbNlkI",
            "Código Civil para el Estado de Veracruz de Ignacio de la Llave (PDF) — https://www.legisver.gob.mx/leyes/LeyesPDF/CODIGOCIVIL13062022.pdf",
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
            "Arellano García, C. (2001). Manuella del abogado. Práctica Jurídica. México: Porrúa.",
            "Capictant, C. y. (1987). instituciones de derecho civil. México: Porrúa.",
            "Código Civil para el Estado de Veracruz. (s.f.). Obtenido de https://www.legisver.gob.mx/leyes/LeyesPDF/CODIGOCIVIL13062022.pdf",
            "De Pina Vara, R. (1994). Derecho Civil Mexicano. México: Porrúa.",
            "Floris Margadant, G. (1997). derecho Romano. México: Esfinge.",
            "Ramírez, A. (2022). Introducción al derecho civil (4.ª ed.). Editorial Jurídica.",
            "Rojina Villegas, R. (1998). Derecho Civil Mexicano Bienes, Derechos reales y Posesión. México: Porrúa.",
            "Rojina Villegas, R. (2009). Compendio de derecho civil III. México: Porrúa.",
            "ROJINA, V. R. (2008). COMPENDIO DE DERECHO CIVIL II. MÉXICO: PORRÚA.",
            "Vara, D. P. (1965). Diccionario de Derecho. Porrua.",
            "Vazquez, A. C. (2012). Conceptos juridicos fundamentales. mexico: Universidad Nacional Autonoma de Mexico.",
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
