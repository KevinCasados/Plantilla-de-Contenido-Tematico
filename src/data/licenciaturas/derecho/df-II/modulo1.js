/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LDE", // Licenciatura en Derecho
  courseId: "DFISCAL2", // Derecho Fiscal II
  id: "modulo1-fiscal2",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Derecho Fiscal II",
  title:
    "Módulo 1. Procedimientos paraprocesales, facultades de autoridad y visitas domiciliarias",
  semestre: "Séptimo semestre", // según ficha del material
  teacher: "Dra. Alondra Lilí Villanueva Márquez",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Comprender la diferencia entre proceso y procedimiento, así como las facultades inherentes a las autoridades fiscales y administrativas, incluyendo también los aspectos característicos que regulan sus funciones.",

  competencies: [
    // Competencia declarada en el material
    "Identificar conceptos básicos que inciden en la reglamentación y funcionamiento de los procedimientos administrativos y fiscales.",

    // Derivadas del temario del Módulo 1 (Unidades 1–3)
    "Distinguir proceso y procedimiento en sede administrativa, y reconocer procedimientos paraprocesales y contenciosos.",
    "Explicar y aplicar las facultades de las autoridades fiscales y administrativas (SHCP/SAT): rectificación de errores, requerimientos, visitas y obtención de pruebas en delitos fiscales.",
    "Interpretar y fundamentar actos administrativos y fiscales con base en la LFPA, CFF y su Reglamento, atendiendo a competencia, motivación y formalidades esenciales.",
    "Describir y documentar el procedimiento de visitas domiciliarias: orden de visita, aseguramiento de bienes, actas parcial y final, plazos y cierre.",
    "Verificar requisitos de comprobantes fiscales digitales (CFDI) y derechos/obligaciones del contribuyente durante la fiscalización.",
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
          text: "Objetivo: comprender la diferencia entre proceso y procedimiento, así como las facultades de las autoridades fiscales y administrativas y el procedimiento de visitas domiciliarias.",
        },
        {
          type: "list",
          style: "bullets",
          items: [
            "Unidad 1: Procedimientos paraprocesales y contenciosos en sede administrativa.",
            "Unidad 2: Facultades de las autoridades fiscales y administrativas (SHCP/SAT).",
            "Unidad 3: Procedimiento de visitas domiciliarias y requisitos del CFDI.",
          ],
        },
      ],
    },

    /* 1. Unidad 1 */
    {
      id: "1",
      numbering: "Unidad 1",
      title:
        "Procedimientos paraprocesales en materia administrativa y teoría del proceso",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad establece, con rigor conceptual, el punto de partida: no es lo mismo proceso que procedimiento. El material define el proceso como la sucesión coordinada de actos encaminados a un resultado —resolución de un conflicto—, mientras que el procedimiento es el orden en que esos actos se realizan conforme a la ley o a la convención de las partes. La distinción no es semántica; determina competencias, formalidades y consecuencias jurídicas. Bajo la perspectiva de la teoría del proceso, el Estado social y democrático exige cauces formales que aseguren legalidad, eficacia y tutela de derechos antes, durante y después de la decisión. Así, el estudiante debe identificar el “itinerario” de actuación administrativa —desde la petición y la verificación hasta la resolución— y diferenciar cuándo se está ante un trámite preparatorio y cuándo ante la controversia que reclama decisión de autoridad. Esta claridad terminológica evita usos impropios, errores de estrategia y nulidades por vicios formales. :contentReference[oaicite:0]{index=0}",
        },
        {
          type: "paragraph",
          text: "La distinción técnica se robustece: el proceso presupone litigio —pretensión resistida—, demanda, secuencia de actos y sentencia; el procedimiento es la vía, el conjunto de formas de actuación, que puede existir incluso de manera previa o ajena al litigio. En sede administrativa, múltiples procedimientos organizan la relación entre la administración y los administrados: solicitudes, autorizaciones, verificaciones, recursos y medios de control de legalidad. La doctrina citada en el material subraya que el procedimiento no puede usarse como sinónimo de proceso; hay procedimientos administrativos, notariales, registrales, fiscales, etc., cada uno con reglas y finalidades propias. Para efectos didácticos, conviene visualizar al procedimiento como el “camino” y al proceso como la “controversia que se decide” al final de ese camino. En términos de estrategia jurídica, la correcta elección y conducción del procedimiento es condición de validez y de eficacia de cualquier acto administrativo. :contentReference[oaicite:1]{index=1}",
        },
        {
          type: "paragraph",
          text: "Los procedimientos paraprocesales son trámites voluntarios, no contenciosos, que requieren intervención legal sin que medie un conflicto a decidir por un juzgador. En el ámbito administrativo y, específicamente, fiscal, el material ilustra su dinámica con actos como la orden de visita, identificación de visitadores, designación de testigos, requerimientos de documentación, levantamiento de actas iniciales, parciales y final, así como el escrito de aclaraciones. Estos engranajes cumplen finalidades de aseguramiento, documentación y transparencia de la actuación estatal. En pedagogía aplicada, se recomienda trazar la “línea de tiempo” del expediente: qué acto inicia el trámite, qué derechos de audiencia existen, qué plazos corren y qué consecuencias acarrea cada omisión. Comprender estos pasos permite al operador jurídico anticipar contingencias, preservar evidencia y, de ser necesario, escalar a la fase contenciosa con un expediente sólido. El énfasis está en la gobernanza del trámite: quién es competente, qué debe fundarse y motivarse, y cómo se documenta cada diligencia. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "paragraph",
          text: "Cuando emerge el litigio, ingresamos a los procedimientos contenciosos. El material reseña la evolución institucional del Tribunal Federal de Justicia Administrativa desde su creación en 1936 y la promulgación de la Ley Federal de Procedimiento Contencioso Administrativo en 2005, contexto clave para entender competencia, pretensiones y efectos de las sentencias. La transición de un esquema centrado en nulidad/validez a un contencioso administrativo más robusto ensancha remedios y tutela efectiva. Para el fiscalista, la ruta típica es: fiscalización → actas → determinación → impugnación ante el TFJA (o bien medios alternos, según el caso). Aquí, precisión formal es sustantiva: plazos, legitimación, agotamiento de instancias y ofrecimiento de pruebas. La frontera entre lo para-procesal y lo contencioso no es difusa: la marca la existencia de una controversia susceptible de decisión con efectos vinculantes. Dominar esa frontera evita confundir actos preparatorios con resoluciones impugnables. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "paragraph",
          text: "Finalmente, la unidad enlaza esta arquitectura con el marco normativo operativo: Ley Federal de Procedimiento Administrativo (requisitos del acto, competencia, motivación, notificación), Ley Orgánica de la Administración Pública Federal (estructura, centralización/paraestatal), Reglamento Interior de la SHCP y Reglamento del Código Fiscal de la Federación (distribución de facultades). En fiscalización, se añaden reglas de visitas domiciliarias, aseguramientos y plazos; y tratándose de comprobantes fiscales digitales (CFDI), requisitos específicos que impactan validez probatoria y cumplimiento. La tesis pedagógica es firme: la validez de la actuación administrativa depende tanto del respeto a la competencia y a la forma como de la adecuada documentación del expediente. Por ello, el profesional debe diseñar estrategias de cumplimiento y defensa ancladas en la trazabilidad del procedimiento, desde el primer requerimiento hasta, en su caso, la sentencia del órgano contencioso. :contentReference[oaicite:4]{index=4}",
        },
        {
          type: "accordion",
          header: "Guía rápida (mapa mental en tres capas)",
          open: false,
          items: [
            {
              header: "Capa 1 — Conceptos nucleares",
              text: "Proceso = litigio, demanda, sentencia. Procedimiento = vía, secuencia formal de actos (puede ser no contenciosa). Paraprocesal = trámite voluntario sin conflicto; Contencioso = resolución de controversia por autoridad. :contentReference[oaicite:5]{index=5}",
            },
            {
              header: "Capa 2 — Ruta administrativa/fiscal",
              text: "Orden de visita → identificación → testigos → requerimientos → actas (inicial, parciales, final) → determinación → (eventual) impugnación ante TFJA. Documentar siempre competencia, fundamento y motivación. :contentReference[oaicite:6]{index=6}",
            },
            {
              header: "Capa 3 — Claves de validez",
              text: "Competencia material/territorial; formalidades esenciales (notificación, plazos, audiencia); requisitos del acto; conservación de evidencia (CFDI, actas, sellos de tiempo). Un error formal puede acarrear nulidad. :contentReference[oaicite:7]{index=7}",
            },
          ],
        },
      ],
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "Proceso y procedimiento",
          content: [
            {
              type: "paragraph",
              text: "En esta materia conviene fijar, desde el inicio, dos nociones que el material distingue con claridad: el proceso y el procedimiento. El primero es una secuencia coordinada de actos que persiguen un resultado final —la decisión de una controversia— y, por ello, presupone litigio, demanda, instrucción y sentencia. El segundo, en cambio, es el orden en que los actos se realizan conforme a una disposición normativa o a la convención de las partes; es la «vía» que organiza la actuación, exista o no conflicto. El proceso se explica por su finalidad decisoria; el procedimiento, por su función organizativa. En sede administrativa y fiscal, esta distinción evita confundir el expediente de verificación (procedimiento) con la resolución impugnable (acto de culminación del proceso contencioso). Un lenguaje técnico preciso reduce nulidades por vicios formales y orienta la estrategia defensiva. Así, comprender qué es cada cosa permite situar correctamente derechos de audiencia, plazos, cargas probatorias y vías de impugnación, con impacto directo en la validez de los actos y en la eficacia del control de legalidad.",
            },
            {
              type: "paragraph",
              text: "El material de estudio subraya que la concatenación de actos que constituye el proceso no agota la realidad administrativa: hay numerosos procedimientos no litigiosos que ordenan trámites, verificaciones y autorizaciones. El procedimiento opera como arquitectura de legalidad: delimita la competencia material/territorial, fija formalidades esenciales (fundamentación, motivación y notificación) e impone estándares de documentación. La administración, para actuar válidamente, debe producir actos dentro de procedimientos previstos; el particular, para conservar sus derechos, debe identificar hitos del trámite (inicio, requerimientos, actas, cierres) y registrar evidencia. La diferencia conceptual produce consecuencias prácticas: no todo acto de autoridad es una «sentencia», ni todo trámite admite recursos propios del contencioso. La ruta adecuada depende de si estamos ante verificación, determinación, imposición de sanción o resolución final. La elección errónea de vía —tratar un requerimiento como si fuera resolución— suele conducir a improcedencia o extemporaneidad.",
            },
            {
              type: "paragraph",
              text: "Desde la teoría del proceso, el Estado social y democrático exige procedimientos como garantías formales de legalidad previa a la decisión. El expediente administrativo —con actas, acuses, oficios y constancias— materializa la trazabilidad que más tarde será objeto de control por el Tribunal competente. Por su parte, el proceso contencioso, cuando se actualiza, exige contradicción, prueba y decisión jurisdiccional. La clave pedagógica es observar la «línea de tiempo» del caso: ¿qué acto lo inicia?, ¿qué autoridad es competente?, ¿cuáles plazos rigen?, ¿qué efectos produce cada omisión? Identificar esa secuencia permite al operador jurídico tomar decisiones informadas (aclarar, subsanar, ofrecer pruebas, autocomponer, impugnar). En fiscalización, por ejemplo, distinguir acta parcial de acta final es crucial para ejercer el derecho de presentar documentación o de corregir la situación fiscal antes del cierre.",
            },
            {
              type: "image",
              src: "https://static.docsity.com/documents_first_pages/2020/06/02/6c5a6191f8f455d4755cb5577b0deecd.png",
              alt: "Diagrama comparativo: proceso (litigio/decisión) vs. procedimiento (vía/forma)",
              caption:
                "Mapa conceptual (elaboración propia a partir del material): proceso como secuencia decisoria; procedimiento como vía formal.",
            },
            {
              type: "paragraph",
              text: "En términos normativos, el procedimiento administrativo federal se rige por la Ley Federal de Procedimiento Administrativo (LFPA): define requisitos del acto, notificación, plazos, recursos y ámbitos de aplicación; a su vez, la Organización de la Administración Pública (LOAPF) y reglamentos interiores distribuyen competencias, delegaciones y suplencias. En materia fiscal, el Código Fiscal de la Federación (CFF) y su Reglamento precisan modalidades de verificación, formas de actas, plazos para visitas y elementos del CFDI. Estas fuentes, articuladas, imponen condiciones de validez y eficacia: objeto lícito y determinable, finalidad de interés público, firma de autoridad competente, fundamentación y motivación, y sujeción al procedimiento. Un solo vicio (incompetencia, ausencia de motivación, notificación defectuosa) puede acarrear nulidad. Por ello, la correcta lectura del material no es meramente teórica: orienta la práctica forense cotidiana.",
            },
            {
              type: "accordion",
              header: "Claves prácticas — Proceso vs. procedimiento",
              open: false,
              items: [
                {
                  header: "Definición operativa",
                  text: "Proceso = resolución de conflicto con sentencia; Procedimiento = orden de actuación, con o sin litigio.",
                },
                {
                  header: "Consecuencias",
                  text: "Vías de impugnación distintas; formalidades y plazos propios; efectos probatorios del expediente.",
                },
                {
                  header: "Estrategia",
                  text: "Trazabilidad del caso; conservación de evidencia; elección correcta de momento para impugnar o subsanar.",
                },
              ],
            },
            {
              type: "accordion",
              header: "Checklist de validez del acto administrativo",
              open: false,
              items: [
                {
                  header: "Competencia",
                  text: "Autoridad material, territorial y jerárquicamente competente.",
                },
                {
                  header: "Fundamentación y motivación",
                  text: "Norma aplicable y razones del caso concreto.",
                },
                {
                  header: "Notificación y plazos",
                  text: "Forma idónea, constancia y cómputo correcto.",
                },
              ],
            },
          ],
        },

        {
          id: "1.2",
          numbering: "1.2",
          title: "Distinción entre proceso y procedimiento",
          content: [
            {
              type: "paragraph",
              text: "La distinción no es meramente terminológica. En el material se explica que el proceso es un conjunto unitario de procedimientos que culmina en una decisión de una autoridad con efectos dirimentes, mientras que el procedimiento es la forma de actuación —la secuencia— que puede operar incluso antes o fuera de un litigio. El proceso exige presupuesto: pretensión resistida; el procedimiento, en cambio, puede existir para autorizar, verificar, registrar o documentar, sin contradicción de partes. Así, dentro del ámbito administrativo conviven múltiples procedimientos (notariales, registrales, administrativos, fiscales) con finalidades diversas. Llamar «proceso» a lo que solo es «procedimiento» induce a interponer medios de defensa improcedentes o a perder la oportunidad de subsanar. De ahí que la doctrina, recogida en el material, insista en distinguir cuidadosamente ambas categorías y asentar, en cada caso, cuál es el objeto y el punto de cierre jurídico.",
            },
            {
              type: "paragraph",
              text: "En fiscalización, la diferencia se advierte con nitidez. El requerimiento de información, la orden de visita, el levantamiento de actas parciales y la oportunidad para presentar documentación conforman un procedimiento; la determinación de créditos fiscales y su impugnación abren el proceso contencioso. No se recomiendan estrategias defensivas prematuras (p. ej., impugnar actas preparatorias), porque el diseño legal reserva la discusión plena para la resolución definitiva. Por su parte, la vía procedimental permite aclaraciones y correcciones que, si se aprovechan oportunamente, evitan litigio. En términos pedagógicos, la Distinción se traduce en un cuadro de control: ¿qué naturaleza tiene el acto?, ¿qué trámite lo antecede?, ¿qué remedios caben ahora?, ¿qué efectos produce su desatención?",
            },
            {
              type: "paragraph",
              text: "La validez también se modula por esta diferencia. En el procedimiento, violaciones a formalidades esenciales —competencia, motivación, notificación— pueden anular el acto subsecuente, incluso si después se dicta una resolución de fondo. En el proceso, los principios de contradicción y defensa gobiernan la admisión, desahogo y valoración de pruebas. La articulación correcta evita un doble riesgo: formalismo vacío (cumplir formas sin tutela) y decisionismo (decidir sin formas). Para el operador, ello implica diseñar escritos y actuaciones con conciencia de estadio: en el procedimiento, pedir vista, ofrecer documentos y recabar constancias; en el proceso, plantear causales de nulidad, violaciones al procedimiento y falta de debida motivación.",
            },
            {
              type: "image",
              src: "https://static.docsity.com/documents_first_pages/2021/05/28/f4ba63e7575bd82991f3e7b4c7eb8daa.png",
              alt: "Matriz comparativa de actos procedimentales y actos de proceso",
              caption:
                "Matriz de decisión: ¿estoy ante trámite (procedimiento) o controversia (proceso)?",
            },
            {
              type: "paragraph",
              text: "Finalmente, la Distinción impacta el cómputo de plazos y la caducidad de facultades. El material refiere que la LFPA y el CFF marcan tiempos distintos para actuaciones (requerimientos, visitas, actas) y para decisiones (determinaciones, resoluciones definitivas). No confundir estos relojes es vital: perder un plazo de trámite puede cerrar la puerta a subsanaciones; perder un plazo contencioso puede tornar firme un acto anulable. Por ello, se recomienda construir cronogramas de expediente y mapas de riesgo que anticipen qué debe hacerse en cada momento —y con qué pruebas— para, llegado el caso, litigar con el expediente ordenado y autosuficiente.",
            },
            {
              type: "accordion",
              header: "Errores frecuentes y cómo evitarlos",
              open: false,
              items: [
                {
                  header: "Impugnación prematura",
                  text: "Atacar actas preparatorias en lugar de esperar la resolución definitiva.",
                },
                {
                  header: "Plazos mezclados",
                  text: "Confundir términos de trámite con términos del juicio contencioso.",
                },
                {
                  header: "Falta de trazabilidad",
                  text: "No documentar recepción, identificación y firmas en diligencias.",
                },
              ],
            },
            {
              type: "accordion",
              header: "Guía breve de clasificación",
              open: false,
              items: [
                {
                  header: "¿Hay litigio?",
                  text: "Si hay pretensión resistida y órgano decisor: proceso; si no, procedimiento.",
                },
                {
                  header: "¿Cuál es el cierre?",
                  text: "Acta o resolución preparatoria (procedimiento) vs. sentencia o resolución definitiva (proceso).",
                },
                {
                  header: "¿Qué remedio cabe?",
                  text: "Aclaración/subsanación (procedimiento) vs. medio de defensa (proceso).",
                },
              ],
            },
          ],
        },

        {
          id: "1.3",
          numbering: "1.3",
          title: "Procedimientos paraprocesales en materia administrativa",
          content: [
            {
              type: "paragraph",
              text: "Los procedimientos paraprocesales, explica el material, son trámites voluntarios y no contenciosos que requieren intervención legal sin que exista controversia a decidir. En el ámbito administrativo y, con particular intensidad, en el fiscal, su función es ordenar diligencias, asegurar información y documentar actuaciones. Entre los ejemplos destacan: orden de visita y sus requisitos; identificación de visitadores; designación de testigos; requerimientos de exhibición; levantamiento de actas inicial, parciales y final; escrito de aclaraciones; y resolución definitiva. Cada paso deja huella documental y cada omisión acarrea consecuencias. El operador eficaz configura desde el inicio una carpeta probatoria: acuses, sellos de tiempo, copias certificadas, constancias de notificación y, en su caso, correcciones voluntarias. Estos trámites, bien gestionados, permiten desvirtuar observaciones o, al menos, preparar un proceso contencioso con fundamentos y evidencias sólidas.",
            },
            {
              type: "paragraph",
              text: "La lógica paraprocesal articula garantías: audiencia, asesoría institucional (p. ej., PRODECON), presentación de pruebas y corrección voluntaria. El material insiste en ubicar las ventanas temporales —antes del acta final— en que el contribuyente puede aportar documentación o corregir su situación fiscal. Asimismo, precisa que la autoridad debe fundamentar y motivar cada requerimiento, identificar a los visitadores, respetar la designación de testigos y observar los plazos para levantar actas parciales y final. Cuando ello no ocurre, el expediente exhibe vicios que más tarde pueden ser causa de nulidad. La pedagogía práctica reclama elaborar una «línea de tiempo» de la visita, con hitos, plazos y responsables, para evitar desorden documental.",
            },
            {
              type: "paragraph",
              text: "La naturaleza no contenciosa no impide que los hechos asentados en actas tengan valor probatorio. Por el contrario, los hechos u omisiones consignados hacen prueba de su existencia para efectos de contribuciones del periodo revisado, por lo que el cuidado al momento de la diligencia —objeciones, manifestaciones, designación de testigos y firma— es determinante. La estrategia sugerida por el material es intervenir activamente: preparar la documentación, emitir manifestaciones claras en actas y conservar copia íntegra del expediente. Esto maximiza el margen de defensa futura y reduce el riesgo de determinaciones basadas en interpretaciones incompletas o descontextualizadas.",
            },
            {
              type: "image",
              src: "https://website-assets.studocu.com/img/document_thumbnails/078b677e85b4051e663137695695607f/thumb_1200_900.png",
              alt: "Línea de tiempo de visita domiciliaria: del citatorio al acta final",
              caption:
                "Secuencia típica de un trámite de verificación fiscal (síntesis didáctica).",
            },
            {
              type: "paragraph",
              text: "El material también ilustra que no todo trámite administrativo tiene carácter paraprocesal. Algunos procedimientos son puramente registrales o de autorización; otros, preparatorios de un eventual proceso. La clave está en la finalidad: si no se pretende resolver una controversia, sino ordenar una actuación o constatar hechos, estamos ante lo paraprocesal. En todos los casos, las formalidades esenciales se mantienen: autoridad competente, motivación, notificación idónea y respeto a plazos. La omisión de cualquiera genera fragilidad del acto y potencial nulidad. Por ello, se recomienda institucionalizar checklists y protocolos internos para visitas y requerimientos, con responsables, plazos y plantillas preaprobadas.",
            },
            {
              type: "accordion",
              header: "Paraprocesal fiscal — piezas del engranaje",
              open: false,
              items: [
                {
                  header: "Orden y verificación",
                  text: "Orden escrita, identificación de visitadores, designación de testigos.",
                },
                {
                  header: "Documentación",
                  text: "Requerimientos, actas parciales/finales, escrito de aclaraciones.",
                },
                {
                  header: "Ventanas de corrección",
                  text: "Plazos para aportar pruebas y corregir situación fiscal antes del cierre.",
                },
              ],
            },
            {
              type: "accordion",
              header: "Buenas prácticas en diligencias",
              open: false,
              items: [
                {
                  header: "Trazabilidad",
                  text: "Acuses, sellos de tiempo y copias íntegras del expediente.",
                },
                {
                  header: "Manifestaciones",
                  text: "Asentarlas con claridad en actas; objetar cuando proceda.",
                },
                {
                  header: "Asesoría",
                  text: "Acompañamiento de PRODECON y del área jurídica interna.",
                },
              ],
            },
          ],
        },

        {
          id: "1.4",
          numbering: "1.4",
          title: "Procedimientos contenciosos",
          content: [
            {
              type: "paragraph",
              text: "Cuando aparece el litigio —pretensión resistida— ingresamos al terreno contencioso. El material reseña la evolución institucional: creación del entonces Tribunal Fiscal de la Federación por decreto de 26 de agosto de 1936 (inicio de labores el 1.º de enero de 1937), su ampliación competencial hacia lo administrativo y, posteriormente, la expedición en 2005 de la Ley Federal de Procedimiento Contencioso Administrativo, que fortaleció la tutela jurisdiccional. En este marco, el proceso contencioso se rige por principios de contradicción y defensa, con reglas para demanda, contestación, pruebas y sentencia. La frontera con lo paraprocesal es nítida: allí donde hay resolución definitiva impugnable, hay proceso; donde hay trámites preparatorios, hay procedimiento. Esta identificación correcta condiciona la procedencia de los medios de defensa y el éxito de la estrategia.",
            },
            {
              type: "paragraph",
              text: "El itinerario típico que el material sugiere mapear es: fiscalización → actas → determinación → impugnación ante el Tribunal Federal de Justicia Administrativa (TFJA). En cada estación, plazos y formalidades varían: la falta de ofrecimiento oportuno de pruebas o la imprecisión en los conceptos de impugnación puede llevar a la confirmación del acto. La transición de un esquema centrado en nulidad/validez a uno con remedios más robustos demanda escritos técnicos, precisión fáctica y narrativa probatoria coherente con el expediente. La prueba documental administrativa —actas, oficios, acuses— juega un papel nuclear en el éxito procesal.",
            },
            {
              type: "paragraph",
              text: "El proceso contencioso no sustituye al procedimiento, lo fiscaliza. De ahí la importancia del expediente bien formado: un vicio procedimental (incompetencia, falta de motivación, notificación defectuosa) puede anular el acto controvertido. El material enfatiza, además, la coordinación con el marco constitucional (art. 14 y 16) y legal (LFPA, CFF) que impone el debido proceso y formalidades esenciales. Para el litigante, la mejor práctica es diseñar una teoría del caso que enlace irregularidades procedimentales con agravios sustantivos, apoyada en cronologías, cuadros comparativos y citas precisas del expediente.",
            },
            {
              type: "image",
              src: "https://i.ytimg.com/vi/IEkzuhjtbnM/maxresdefault.jpg",
              alt: "Flujo del juicio contencioso administrativo ante el TFJA",
              caption:
                "De la resolución impugnada a la sentencia: demanda, pruebas y decisión.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el material ubica al TFJA en un proceso de expansión competencial y modernización procedimental. Ello se traduce en exigencias mayores de técnica procesal: identificación de la autoridad emisora y de la competente para cumplir; claridad en los actos impugnados; conservación de la prueba electrónica (p. ej., buzón tributario); y gestión probatoria estratégica. El aprendizaje esperado es doble: (i) saber «cerrar» bien el procedimiento administrativo para evitar el juicio, y (ii) cuando el juicio sea inevitable, litigar con expediente sólido y teoría del caso depurada. Todo ello parte de comprender, con precisión, dónde termina el procedimiento y dónde comienza el proceso.",
            },
            {
              type: "accordion",
              header: "Arquitectura del juicio contencioso",
              open: false,
              items: [
                {
                  header: "Presupuesto",
                  text: "Pretensión resistida y resolución impugnable.",
                },
                {
                  header: "Fases",
                  text: "Demanda, contestación, pruebas, alegatos y sentencia.",
                },
                {
                  header: "Ejes de nulidad",
                  text: "Competencia, motivación, notificación, indebida fundamentación.",
                },
              ],
            },
            {
              type: "accordion",
              header: "Estrategia probatoria",
              open: false,
              items: [
                {
                  header: "Expediente",
                  text: "Actas, oficios, acuses, sellos de tiempo, CFDI.",
                },
                {
                  header: "Cronología",
                  text: "Línea de tiempo congruente con plazos legales.",
                },
                {
                  header: "Narrativa",
                  text: "Vincular vicios procedimentales con agravios sustantivos.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* 2. Unidad 2 */
    {
      id: "2",
      numbering: "Unidad 2",
      title:
        "Facultades de comprobación de las autoridades fiscales y administrativas",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad coloca al estudiante en el centro del andamiaje de control estatal: las facultades de comprobación. El punto de partida es dominar qué es un acto administrativo y qué es un acto fiscal. El primero es toda declaración de voluntad, deseo, conocimiento o juicio emitida por un órgano de la Administración en ejercicio de potestad pública; el segundo, por su parte, identifica las actuaciones de las autoridades reputadas como fiscales (SHCP, SAT, entidades coordinadas) dentro del marco del Código Fiscal de la Federación. La Ley Federal de Procedimiento Administrativo establece requisitos de validez (competencia, objeto, finalidad, forma escrita, fundamentación y motivación, notificación, entre otros), aunque su aplicación en materia fiscal es particular: rigen primordialmente las leyes fiscales y, supletoriamente, los códigos procesales civiles. Entender estos cimientos evita dos riesgos prácticos: atacar como inválido lo que es sólo un trámite subsanable o, a la inversa, dejar firme una resolución por desconocer el régimen aplicable. En suma: concepto claro, fuente normativa correcta y lectura fina de la competencia material, territorial y jerárquica de quien actúa. :contentReference[oaicite:0]{index=0}",
        },
        {
          type: "paragraph",
          text: "La arquitectura orgánica explica el alcance de la fiscalización. La Administración Pública Federal se estructura en administración centralizada y paraestatal (LOAPF). En el sector hacendario, la Secretaría de Hacienda y Crédito Público conduce la política fiscal y, por delegación y desconcentración, el Servicio de Administración Tributaria ejecuta funciones de administración, comprobación, determinación y cobro de ingresos federales. El Reglamento Interior de la SHCP prevé la delegación de atribuciones vía acuerdos publicados, mientras que el Reglamento del CFF define quiénes son “autoridades fiscales” a efectos del ejercicio de facultades. Esta cartografía institucional no es retórica: ancla la validez de cada diligencia (orden escrita, firma autógrafa, competencia por materia y territorio) y condiciona la eficacia probatoria de actas, oficios y requerimientos. Un operador competente inicia cada caso preguntándose: ¿quién actúa?, ¿con base en qué norma?, ¿en qué calidad? Sólo así se diseñan rutas de cumplimiento o de defensa con posibilidades reales de éxito. :contentReference[oaicite:1]{index=1}",
        },
        {
          type: "paragraph",
          text: "En el plano operativo, dos engranes marcan el inicio de muchos expedientes: la rectificación de errores y los requerimientos. La autoridad puede rectificar errores aritméticos u omisiones detectadas en declaraciones y, en su caso, imponer multas atenuables si el contribuyente corrige en plazo. El requerimiento, por su parte, es el acto típico mediante el cual el SAT solicita aclaraciones (inscripción al RFC, declaraciones omitidas, errores, créditos, parcialidades), otorgando términos específicos para atender. La enseñanza práctica es contundente: cada requerimiento detona un reloj procesal y una oportunidad de subsanar, aportar evidencia o corregir. Desaprovechar esa ventana convierte un problema administrativo en un litigio innecesario; atenderlo con trazabilidad documental (acuse, sellos de tiempo, identificación de anexos) fortalece la posición del contribuyente y, si el caso escala, alimenta una teoría del caso sólida. La gestión profesional consiste en leer el requerimiento, identificar la norma de apoyo, calendarizar plazos y responder con documentos pertinentes, claros y completos. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "paragraph",
          text: "Las visitas domiciliarias son el vértice de las facultades de comprobación. Exigen orden escrita con firma de autoridad competente, identificación de visitadores y designación de testigos. La diligencia se documenta en actas (inicial, parciales y final) que consignan hechos y omisiones con valor probatorio. Entre la última acta parcial y la final corre un plazo —en principio, veinte días— para desvirtuar observaciones o corregir la situación fiscal; incumplir formalidades (competencia, motivación, notificación) fragiliza el acto y habilita su eventual nulidad. Además, los visitadores pueden asegurar contabilidad y bienes sin impedir la operación del contribuyente, siempre que se respete inventario y constancia. La clave táctica es intervenir activamente: hacer manifestaciones, ofrecer documentación, cuidar la cadena de custodia del expediente y verificar que los plazos legales —incluido el máximo para concluir la visita— se observen. En visitas simultáneas, las actas parciales se integran al acta final; la negativa a firmar no invalida por sí misma la diligencia, pero debe asentarse. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "paragraph",
          text: "Finalmente, el material aborda la vertiente penal: la SHCP puede tener carácter de víctima u ofendida en delitos fiscales, y su intervención (querella, declaratorias) es presupuesto de procedibilidad para múltiples figuras. Aquí convergen dos mundos: lo administrativo, que forma evidencia (actas, oficios, aseguramientos, requerimientos) y lo penal, que exige estándares probatorios específicos. Para el profesional, esto impone controles internos de cumplimiento (CFDI, contabilidad, contratos) y protocolos de respuesta ante aseguramientos y embargos, con especial atención a límites cuantitativos y temporales. La estrategia integral prioriza prevenir (cumplimiento y documentación), corregir oportunamente (ventanas antes de acta final) y, si el asunto deviene contencioso o penal, litigar con expediente limpio y cronología verificable. La conclusión metodológica es clara: conocer el “qué”, “quién”, “cómo” y “cuándo” de cada facultad de comprobación es la mejor garantía para transformar una fiscalización en un proceso controlado y previsible, evitando sanciones innecesarias y maximizando la seguridad jurídica. :contentReference[oaicite:4]{index=4}",
        },
        {
          type: "accordion",
          header: "Guía rápida — Facultades de comprobación (3 niveles)",
          open: false,
          items: [
            {
              header: "Nivel 1 · Marco y actores",
              text: "Constitución, LOAPF, LFPA (régimen general), CFF y reglamentos; SHCP (dirección) y SAT (ejecución). Identificar siempre competencia material, territorial y jerárquica. :contentReference[oaicite:5]{index=5}",
            },
            {
              header: "Nivel 2 · Ruta operativa",
              text: "Rectificación de errores y requerimientos → visitas (orden, identificación, testigos, actas) → acta final/determinación → (eventual) impugnación. Responder en tiempo y con evidencia. :contentReference[oaicite:6]{index=6}",
            },
            {
              header: "Nivel 3 · Riesgos y controles",
              text: "Vicios formales (incompetencia, falta de motivación, notificación defectuosa), pérdida de plazos, aseguramientos excesivos. Controles: cronograma, checklist de validez y expediente trazable. :contentReference[oaicite:7]{index=7}",
            },
          ],
        },
      ],
      subthemes: [
        {
          /* 2.1 Qué es un acto administrativo y fiscal */
          id: "2.1",
          numbering: "2.1",
          title: "Qué es un acto administrativo y fiscal",
          content: [
            {
              type: "paragraph",
              text: "En sentido técnico, el acto administrativo es toda declaración de voluntad, deseo, conocimiento o juicio emitida por un órgano de la Administración en ejercicio de potestad pública. Esta noción —que la doctrina formula con amplitud— explica por qué desde una orden de visita hasta una resolución determinante comparten una misma lógica de validez: competencia, objeto, finalidad, forma y motivación. En el régimen mexicano, tales elementos se positivizan en la Ley Federal de Procedimiento Administrativo (LFPA), que exige, entre otros extremos, emisión por autoridad competente, objeto posible y determinado, finalidad de interés público, forma escrita con firma autógrafa, debida fundamentación y motivación, sujeción al procedimiento y notificación válida. Cuando alguno de estos requisitos falla, el acto deviene anulable. Esta matriz conceptual es el punto de partida para distinguir el ‘acto fiscal’: no es otra categoría distinta, sino la manifestación del acto administrativo realizada por autoridades fiscales en el marco del Código Fiscal de la Federación (CFF) y su Reglamento. Por ello, la revisión de validez exige siempre dos preguntas guía: ¿quién actúa? (competencia material, territorial y jerárquica) y ¿cómo actúa? (forma, motivación, notificación y oportunidad). Responderlas con rigor evita confundir meras irregularidades subsanables con vicios que comprometen la eficacia y legalidad del acto. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "La ‘competencia’ opera como condición habilitante y límite. Se distribuye por materia (fiscal/administrativa), territorio (ámbito geográfico) y jerarquía (órgano emisor). Un oficio firmado por quien carece de atribuciones, una orden de visita practicada fuera de la circunscripción o una resolución emitida por unidad no investida de potestad decisoria, padecen vicios de nulidad. El ‘objeto’ debe ser jurídicamente posible y determinado (o determinable); la ‘finalidad’ debe coincidir con el interés público que tutela la norma habilitante, proscribiéndose desvíos. La ‘forma’ no es ritualismo: la LFPA exige constancia escrita y firma autógrafa, salvo autorización legal de otra modalidad; el CFF y sus reglas técnicas añaden parámetros (p. ej., formalidades de órdenes y actas). ‘Fundamentación’ y ‘motivación’ conectan el acto con su base normativa y con los hechos probados del caso concreto; no bastan citas genéricas, se requiere una relación inteligible entre hechos, pruebas y preceptos aplicados. El incumplimiento de cualquiera de estos requisitos puede conducir a la nulidad lisa y llana o a la nulidad para efectos, según su gravedad y la tutela que el ordenamiento quiera privilegiar en cada hipótesis. :contentReference[oaicite:1]{index=1}",
            },

            {
              type: "accordion",
              header:
                "Checklist de validez (uso práctico en auditoría y defensa)",
              open: false,
              items: [
                {
                  header: "Competencia",
                  text: "Verifique investidura, materia, territorio y jerarquía del firmante (acuerdos de delegación publicados). :contentReference[oaicite:2]{index=2}",
                },
                {
                  header: "Forma y notificación",
                  text: "Orden/oficio escrito, firma autógrafa, cita de preceptos, notificación idónea y en plazo. :contentReference[oaicite:3]{index=3}",
                },
                {
                  header: "Fundamentación/motivación",
                  text: "Hechos, pruebas y normas explicitadas, pertinentes y congruentes. :contentReference[oaicite:4]{index=4}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "La frontera entre acto administrativo y acto fiscal sirve, además, para calibrar la supletoriedad normativa. La LFPA es de orden público para la Administración Pública Federal, pero en materia estrictamente fiscal prevalecen las leyes fiscales y, supletoriamente, los códigos procesales civiles. En la práctica, esto significa que la validez formal de una visita domiciliaria se juzga conforme al CFF (p. ej., requisitos del artículo 44) y, sólo ante un vacío, se acude a la LFPA. Igual ocurre con la notificación de resoluciones determinantes, los plazos para desvirtuar observaciones o el valor probatorio de actas: el CFF y sus reglamentos establecen un micro-sistema procesal especial. Saber qué cuerpo normativo aplica primero y cómo se integran sus disposiciones impide construir defensas sobre bases improcedentes o, en sentido inverso, desperdiciar causales de anulación por citar la ley incorrecta. Así, la teoría se traduce en táctica: identificar norma rectora, verificar requisitos y documentar cada hito del procedimiento. :contentReference[oaicite:5]{index=5}",
            },

            {
              type: "image",
              src: "https://imgv2-1-f.scribdassets.com/img/document/93406759/original/a640bbba79/1?v=1",
              alt: "Esquema de elementos del acto administrativo y su proyección al acto fiscal",
              caption:
                "Esquema de referencia: elementos de validez (LFPA) y su concreción en actuaciones fiscales (CFF). Elaboración propia a partir del material. :contentReference[oaicite:6]{index=6}",
            },

            {
              type: "paragraph",
              text: "Desde la perspectiva contenciosa, la invalidez puede afirmarse por vicios de competencia, de forma o de motivación. El contencioso administrativo federal evolucionó —históricamente— desde un esquema de mera nulidad/validez hacia un modelo más robusto, con posibilidad de tutela efectiva y control de legalidad de los actos administrativos y fiscales. En la ruta de defensa, el expediente debe exhibir trazabilidad: copia de orden y notificación, identificación de visitadores, designación de testigos, actas parciales y final, manifestaciones presentadas, plazos computados y respuesta de la autoridad. En sede administrativa, aprovechar ventanas de corrección y desvirtuación refuerza la posición procesal; en sede jurisdiccional, la congruencia interna del acto (hechos-norma-conclusión) es escrutada con lupa. Toda revisión seria vuelve a las preguntas iniciales: ¿quién dictó el acto? ¿Qué norma y hechos lo sostienen? ¿Cómo y cuándo se notificó? Sólo con ese control mínimo de legalidad es posible sostener —o derribar— la presunción de validez que ampara a la Administración. :contentReference[oaicite:7]{index=7}",
            },

            {
              type: "accordion",
              header:
                "Errores comunes que llevan a nulidad (y cómo prevenirlos)",
              open: false,
              items: [
                {
                  header: "Incompetencia o firma no válida",
                  text: "Acuerdos de delegación no publicados o firma de servidor no investido. Prevención: verificar DOF y Reglamento Interior aplicable. :contentReference[oaicite:8]{index=8}",
                },
                {
                  header: "Motivación insuficiente",
                  text: "Citas normativas sin enlace con hechos probados. Prevención: construir narrativa probatoria en el acto. :contentReference[oaicite:9]{index=9}",
                },
                {
                  header: "Notificación defectuosa",
                  text: "Domicilio distinto, horarios inhábiles sin habilitación o falta de acuse. Prevención: revisar constancias y sellos de tiempo. :contentReference[oaicite:10]{index=10}",
                },
              ],
            },
          ],
        },

        {
          /* 2.2 Facultades de la SHCP */
          id: "2.2",
          numbering: "2.2",
          title: "Facultades de la SHCP",
          content: [
            {
              type: "paragraph",
              text: "La Secretaría de Hacienda y Crédito Público (SHCP) encabeza la conducción de la política hacendaria y coordina, en el ámbito federal, la administración, comprobación, determinación y cobro de ingresos. Su estatus orgánico y funcional se entiende desde la arquitectura de la Administración Pública Federal: organización centralizada y paraestatal (LOAPF). En el sector hacendario, el Servicio de Administración Tributaria (SAT) funge como órgano administrativo desconcentrado que ejecuta la administración tributaria y aduanera. La distribución de competencias no es retórica: define quién puede ordenar, firmar y practicar diligencias; condiciona la validez de órdenes, requerimientos y actas; y determina el cauce de impugnación. Por ello, todo operador debe dominar la cartografía normativa (Constitución, LOAPF, Reglamento Interior de la SHCP, Reglamento del CFF) y los acuerdos de delegación publicados que habilitan a titulares y subalternos. Desde ahí se decide si un acto es formalmente válido y, por tanto, goza de presunción de legalidad, o si adolece de vicio que lo torna anulable. :contentReference[oaicite:11]{index=11}",
            },
            {
              type: "paragraph",
              text: "El Reglamento Interior de la SHCP precisa la mecánica de delegación: el Secretario puede delegar atribuciones en servidores públicos subalternos mediante acuerdos publicados en el Diario Oficial, sin perjuicio de ejercerlas directamente. Esta regla, clave en fiscalización, permite que administraciones desconcentradas y unidades regionales firmen actos en nombre de la Secretaría cuando así lo prevean los acuerdos. A su vez, el Reglamento del CFF delimita qué unidades son ‘autoridades fiscales’, incluyendo áreas de la SHCP, del SAT, entidades federativas coordinadas y organismos descentralizados en la órbita de sus competencias. La coherencia entre atribución normativa y firma concreta es el primer filtro de legalidad: una orden de visita emitida por órgano incompetente, o un oficio sin sustento en delegación vigente, compromete la validez de todo el procedimiento subsecuente. La práctica profesional exige, por tanto, una auditoría de competencia antes de entrar al fondo. :contentReference[oaicite:12]{index=12}",
            },

            {
              type: "accordion",
              header: "Mapa rápido — ¿Quién puede qué?",
              open: false,
              items: [
                {
                  header: "SHCP (nivel dirección)",
                  text: "Conduce política fiscal; dicta lineamientos y emite acuerdos de delegación. :contentReference[oaicite:13]{index=13}",
                },
                {
                  header: "SAT (ejecución)",
                  text: "Administra, comprueba, determina y cobra ingresos; práctica de visitas, requerimientos y determinaciones. :contentReference[oaicite:14]{index=14}",
                },
                {
                  header: "Unidades coordinadas",
                  text: "Entidades federativas coordinadas y organismos que ejercen facultades fiscales en sus ámbitos. :contentReference[oaicite:15]{index=15}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Saber ‘cómo’ se expresa la competencia importa tanto como saber ‘quién’ la ostenta. La cadena documental típica en fiscalización incluye: orden escrita con firma de autoridad competente, identificación de quienes ejecutan, acta circunstanciada (inicial, parciales y final), oficios de observaciones y resoluciones. Cada eslabón debe citar preceptos, detallar hechos y garantizar derecho de audiencia. Por razones de economía procesal y tutela eficaz, el sistema prevé ventanas de corrección (p. ej., entre última acta parcial y acta final) y plazos máximos para concluir visitas o revisiones (reglas especiales para sistema financiero, verificación de origen y precios de transferencia). Estas pautas —eminentemente orgánico-procedimentales— forman el armazón de legalidad que sostiene la actuación hacendaria y delimitan el ámbito de defensa del contribuyente. :contentReference[oaicite:16]{index=16}",
            },

            {
              type: "image",
              src: "https://imgv2-2-f.scribdassets.com/img/document/478479068/original/67cb5a916c/1?v=1",
              alt: "Organigrama esencial del sector hacendario y puntos de control",
              caption:
                "Organigrama esencial (SHCP/SAT) y puntos de control de competencia y forma en fiscalización. Elaboración propia con base en LOAPF y Reglamentos.",
            },

            {
              type: "paragraph",
              text: "En la trinchera operativa, la regla de oro es la trazabilidad: toda orden debe poder conectarse con la atribución que la respalda; todo firmante, con el acuerdo de delegación vigente; toda diligencia, con el mandato legal que la regula. La verificación sistemática de estos extremos no sólo previene nulidades, también racionaliza la defensa al distinguir incidencias subsanables (p. ej., faltas menores en actas) de vicios estructurales (incompetencia, falta de motivación). Finalmente, recordar que, aunque la LFPA es de orden público para la Administración Federal, en materia fiscal rigen preferentemente las leyes fiscales y, supletoriamente, los códigos procesales civiles. Identificar el régimen aplicable —y su jerarquía— es condición para diseñar estrategias de cumplimiento y litigio con probabilidad real de éxito. :contentReference[oaicite:18]{index=18}",
            },

            {
              type: "accordion",
              header: "Buenas prácticas de verificación de competencia",
              open: false,
              items: [
                {
                  header: "Antes de atender",
                  text: "Exija copia de la orden y confirme firma/atribuciones con acuerdos de delegación. :contentReference[oaicite:19]{index=19}",
                },
                {
                  header: "Durante la diligencia",
                  text: "Consigne incidencias en acta; pida citar preceptos aplicables y objeto preciso. :contentReference[oaicite:20]{index=20}",
                },
                {
                  header: "Después",
                  text: "Arme expediente con constancias de notificación, plazos y respuestas; valore medios de defensa. :contentReference[oaicite:21]{index=21}",
                },
              ],
            },
          ],
        },

        {
          /* 2.3 Rectificación de errores */
          id: "2.3",
          numbering: "2.3",
          title: "Rectificación de errores",
          content: [
            {
              type: "paragraph",
              text: "La rectificación de errores es una de las facultades nucleares de la autoridad fiscal para depurar declaraciones y otros escritos de los contribuyentes. Comprende correcciones de errores aritméticos, omisiones u otros yerros ostensibles que aparecen en declaraciones, solicitudes o avisos. La lógica es sencilla: si la autoridad detecta un desajuste, puede requerir documentación y, en su caso, notificar la diferencia para que el obligado la cubra con accesorios. El régimen sancionatorio distingue trato atenuado cuando el contribuyente corrige dentro de los plazos que la propia notificación fija: en términos del CFF, la multa por omisión por error aritmético oscila entre el 20% y el 25% de las contribuciones omitidas, pero se reduce a la mitad si el pago se efectúa dentro de los quince días hábiles siguientes a la notificación de la diferencia, sin necesidad de resolución adicional. Esta ventana de corrección procura eficiencia y evita litigios innecesarios, siempre que el contribuyente actúe con diligencia y trace documentalmente su cumplimiento. :contentReference[oaicite:22]{index=22}",
            },
            {
              type: "paragraph",
              text: "En el plano operativo, el requerimiento que acompaña a la rectificación es el detonador del ‘reloj procesal’. Debe expresar la irregularidad detectada, las disposiciones aplicables, los documentos solicitados y el plazo para atender. La atención oportuna —acompañada de papeles de trabajo, conciliaciones y evidencias— puede concluir el asunto sin consecuencias mayores. Desatender el requerimiento, en cambio, transforma un problema adminstrativo en un frente sancionatorio o incluso en una vía de determinación de créditos. Por ello, los equipos de cumplimiento deben implementar tableros de control de requerimientos, definir responsables y estandarizar respuestas con anexos probatorios (CFDI, estados de cuenta, nóminas, contratos) para reducir fricciones y tiempos. En caso de discrepancia, procede argumentar mediante escritos fundados y motivados, haciendo notar, por ejemplo, que la diferencia obedece a un criterio contable razonable o a un asiento posterior ya corregido. :contentReference[oaicite:23]{index=23}",
            },

            {
              type: "accordion",
              header: "Ruta práctica de atención a rectificaciones",
              open: false,
              items: [
                {
                  header: "Paso 1 · Diagnóstico",
                  text: "Leer requerimiento; identificar rubros, periodos y preceptos; estimar impacto económico. :contentReference[oaicite:24]{index=24}",
                },
                {
                  header: "Paso 2 · Evidencias",
                  text: "Integrar papeles de trabajo y CFDI; preparar conciliaciones y narrativas de hechos. :contentReference[oaicite:25]{index=25}",
                },
                {
                  header: "Paso 3 · Decisión",
                  text: "Corregir y pagar con reducción, o controvertir con fundamento; documentar todo el flujo. :contentReference[oaicite:26]{index=26}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "La política de cumplimiento fiscal inteligente reconoce que no todas las rectificaciones merecen resistencia. Cuando el yerro es evidente y el costo de litigio supera la diferencia, la estrategia óptima es aprovechar la reducción legal y cerrar el expediente. Distinto es el escenario en que la autoridad confunde un ‘error’ con una opción válida dentro del marco normativo (por ejemplo, un método de valuación o un criterio de acumulación tratado por reglas misceláneas). Ahí corresponde acreditar la razonabilidad de la postura del contribuyente, destacando documentos, asientos y reglas aplicables. Un expediente persuasivo enlaza hechos con normas y muestra la congruencia del registro versus la base legal. Presentar esta narrativa dentro del plazo legal —y solicitar, de ser necesario, la valoración integral de las pruebas— es decisivo para evitar una determinación improcedente. :contentReference[oaicite:27]{index=27}",
            },

            {
              type: "image",
              src: "https://blogposgrado.ucontinental.edu.pe/hs-fs/hubfs/Fotos%202022/Derecho/derecho-administrativo-errores-materiales.jpg?width=1080&height=630&name=derecho-administrativo-errores-materiales.jpg",
              alt: "Flujo de trabajo para atender rectificaciones y requerimientos",
              caption:
                "Del requerimiento a la corrección o controversia: cronograma de 15 días hábiles y reducción de multa. Elaboración propia con base en CFF. :contentReference[oaicite:28]{index=28}",
            },

            {
              type: "paragraph",
              text: "La gestión documental es el blindaje del contribuyente. Acreditar fechas de recepción (acuse, buzón), identificar con precisión los rubros observados, anexar papeles de trabajo auditables y explicar, en lenguaje llano y técnico, la procedencia de cifras y asientos, incrementa la probabilidad de cierre temprano. Cuando, pese a ello, sobreviene una determinación, la plataforma probatoria ya integrada simplifica el tránsito al medio de defensa. En suma: la rectificación de errores no debe verse como sanción inevitable, sino como oportunidad de corrección y depuración de la relación jurídico-tributaria. El profesional competente convierte ese espacio en una vía de diálogo probatorio con la autoridad, optimizando costos y asegurando certeza. La clave reside en anticipar requerimientos, mantener contabilidad viva y alinear los procesos internos con los plazos y formas del sistema fiscal. :contentReference[oaicite:29]{index=29}",
            },

            {
              type: "accordion",
              header: "Errores típicos del contribuyente (y cómo evitarlos)",
              open: false,
              items: [
                {
                  header: "Omisión de plazos",
                  text: "Perder la ventana de 15 días para reducción de multa. Solución: tablero de control y alertas. :contentReference[oaicite:30]{index=30}",
                },
                {
                  header: "Evidencia incompleta",
                  text: "Responder sin anexos trazables (CFDI/papeles de trabajo). Solución: checklist documental. :contentReference[oaicite:31]{index=31}",
                },
                {
                  header: "Narrativa deficiente",
                  text: "No explicar el porqué del ajuste. Solución: escrito fundado y motivado con conciliaciones. :contentReference[oaicite:32]{index=32}",
                },
              ],
            },
          ],
        },
      ],
    },

    /* 3. Unidad 3 */
    {
      id: "3",
      numbering: "Unidad 3",
      title: "Procedimiento de visitas domiciliarias",
      content: [
        {
          type: "paragraph",
          text: "La visita domiciliaria es el instrumento de fiscalización mediante el cual la autoridad verifica, en el domicilio fiscal del contribuyente, el cumplimiento de obligaciones tributarias. Se trata de un procedimiento reglado que inicia, típicamente, con un citatorio y continúa con la formal entrega de la orden y la práctica de diligencias. La validez de todo lo actuado depende de requisitos de competencia, forma, fundamentación y motivación, así como de una notificación eficaz. Desde el primer contacto, los visitadores deben identificarse y dejar constancia circunstanciada en acta de los hechos u omisiones que observen. El contribuyente, por su parte, conserva derechos procesales que incluyen ser informado, designar testigos y aportar documentación para desvirtuar observaciones. La secuencia, tiempos y documentos del procedimiento (orden, actas parciales y acta final) están diseñados para asegurar trazabilidad, control de legalidad y tutela efectiva. Comprender esta arquitectura —qué puede hacer la autoridad y cuándo— permite preparar una estrategia de cumplimiento o defensa con oportunidad. Esta unidad expone las reglas esenciales: requisitos de la orden, aseguramiento de contabilidad o bienes, levantamiento de actas, plazos para concluir la visita y verificación de comprobantes fiscales digitales, con base en el marco positivo aplicable. :contentReference[oaicite:0]{index=0}",
        },
        {
          type: "paragraph",
          text: "La orden de visita debe emitirse por autoridad competente, constar por escrito con firma autógrafa y precisar lugar, objeto, alcance y fundamentos legales. Al presentarse, los visitadores se identifican ante la persona con quien se entienda la diligencia y le requieren para designar dos testigos; si no los nombra o no aceptan, los visitadores pueden designarlos, sin que ello afecte la validez. Si al acudir no se encuentra el visitado o su representante, se deja citatorio para el día hábil siguiente a hora cierta y, de persistir la inasistencia, la visita procede con quien se encuentre. Toda actuación se documenta en actas circunstanciadas: parciales cuando la visita se realiza en varios lugares o etapas, y final al cierre de la diligencia. Los hechos asentados hacen prueba para efectos fiscales del periodo revisado, sin perjuicio del derecho del contribuyente de aportar elementos que los desvirtúen. La negativa a firmar o recibir copia del acta se hace constar y no invalida la diligencia. Esta disciplina formal protege tanto la eficacia de la función comprobadora como los derechos de los particulares, y es el eje de valoración jurisdiccional posterior. :contentReference[oaicite:1]{index=1}",
        },
        {
          type: "paragraph",
          text: "El aseguramiento de contabilidad y bienes es una medida instrumental destinada a preservar evidencias. Los visitadores pueden sellar libros, correspondencia, archivos o muebles donde se encuentren, o dejarlos en depósito al visitado, levantando inventario, siempre que no se impida el giro normal de las operaciones (se considera no impedimento cuando se asegura documentación no vinculada con el mes en curso y los dos anteriores). Si se detectan bienes o mercancías sujetos a control o autorización sin haberse cumplido obligaciones, procede su aseguramiento. En casos de peligro de ocultamiento o maniobras dilatorias, es posible asegurar la contabilidad desde el inicio. En paralelo, para hacer efectivo un crédito fiscal exigible, la autoridad puede embargar cuentas o bienes hasta por el monto actualizado del adeudo con accesorios, notificando oportunamente y liberando excesos si los hubiere. El aseguramiento no es sanción, sino cautela probatoria y patrimonial; por ello, su práctica debe constar puntual y proporcionalmente en acta, incluyendo ubicación, numeración de sellos y relación de documentos, para permitir control posterior y garantizar el debido proceso. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "paragraph",
          text: "El componente temporal de la visita es tan relevante como el formal. Las diligencias se practican en días y horas hábiles (7:30 a 18:00), salvo verificación de mercancías en transporte, que admite 24/7. Entre la última acta parcial y el acta final debe mediar, al menos, un plazo de veinte días para que el contribuyente presente documentos, registros o, en su caso, opte por corregir su situación; si se revisa más de un ejercicio, el plazo puede ampliarse quince días adicionales mediante aviso en tiempo. La autoridad debe concluir la visita o revisión dentro del plazo máximo legal (en términos generales, doce meses desde el inicio notificado, con supuestos especiales de ampliación para sectores y verificaciones específicos). El incumplimiento de estos plazos puede aparejar la conclusión de la visita, dejando sin efectos la orden y las actuaciones subsecuentes. En consecuencia, resulta esencial llevar un control finísimo del “reloj procesal”: fechas de citatorio, de inicio, de cada acta parcial, del otorgamiento del plazo de 20 días, y de cierre, así como cualquier ampliación justificada, para articular defensas por extemporaneidad o por caducidad. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "paragraph",
          text: "Finalmente, las visitas pueden tener un enfoque específico: verificar la expedición de CFDI. En este frente, el ordenamiento prevé medidas como la restricción temporal del certificado de sello digital (CSD) y el procedimiento de aclaración con plazos breves para subsanar irregularidades o desvirtuar causales, durante el cual puede restituirse provisionalmente el uso del certificado. En cuanto a los CFDI, su validez material exige el cumplimiento de requisitos mínimos (entre otros: RFC y régimen fiscal del emisor, folio y sellos digitales, lugar y fecha, RFC y código postal del receptor, concepto con cantidad y unidad, valor unitario e importe, y, en su caso, requisitos específicos). La falta de estos datos puede erosionar deducibilidad, acreditamiento y trazabilidad, además de detonar actuaciones de verificación. Por ello, la defensa eficaz combina orden documental, comprensión de la medida cautelar y respuesta en tiempo a oficios y requerimientos vinculados con sellos digitales y comprobación de operaciones. Todo ello queda documentado en las actas y resoluciones que integran el expediente de la visita. :contentReference[oaicite:4]{index=4}",
        },
        {
          type: "accordion",
          header:
            "Guía práctica de la visita: tres llaves para el cumplimiento",
          open: false,
          items: [
            {
              header: "Arranque correcto",
              text: "Verifique la orden (autoridad, firma, objeto, alcance y fundamentos); identifique a visitadores; designe y asiente testigos; documente incidencias y resguarde copias de todo lo actuado desde el primer minuto. :contentReference[oaicite:5]{index=5}",
            },
            {
              header: "Actas y plazos críticos",
              text: "Revise cada acta parcial; anote la fecha que dispara el plazo de 20 días para desvirtuar y/o corregir; lleve un calendario con el límite máximo para concluir la visita y cualquier ampliación legalmente procedente. :contentReference[oaicite:6]{index=6}",
            },
            {
              header: "CFDI y medidas cautelares",
              text: "Si se restringe el CSD, active de inmediato la aclaración con pruebas; audite requisitos de CFDI por muestreo; cierre brechas de emisión/recepción y trace evidencia de subsanación para el acta final. :contentReference[oaicite:7]{index=7}",
            },
          ],
        },
      ],
      subthemes: [
        /* 3.1 Orden de visita */
        {
          id: "3.1",
          numbering: "3.1",
          title: "Orden de visita",
          content: [
            {
              type: "paragraph",
              text: "La orden de visita es el acto habilitante que delimita competencia, objeto, alcance y bases jurídicas de la fiscalización en domicilio. Debe constar por escrito con firma autógrafa de autoridad competente, identificar al visitado y precisar el lugar o lugares a revisar. Su ejecución inicia con la identificación de los visitadores y el requerimiento para designar dos testigos; si el visitado no los nombra o estos no aceptan, los visitadores pueden designarlos, sin afectar la validez de la diligencia. Toda actuación se hace constar en acta circunstanciada, dejando huella de cada hecho u omisión detectado. Estas formalidades garantizan control de legalidad y trazabilidad del procedimiento. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "Si al presentarse los visitadores no se encuentra el visitado o su representante, se deja citatorio para el día hábil siguiente a hora determinada. De persistir la inasistencia, la visita se inicia con quien se encuentre en el lugar. Cuando la visita deba practicarse simultáneamente en varios sitios, se levantan actas parciales en cada uno y se integran al acta final. Los hechos consignados hacen prueba para efectos de contribuciones del periodo revisado, sin perjuicio del derecho del contribuyente a desvirtuarlos con documentación. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "image",
              alt: "Flujo básico de una visita domiciliaria: orden → inicio/identificación → actas parciales → plazo de 20 días → acta final",
              src: "https://imgv2-2-f.scribdassets.com/img/document/736843603/original/d7874b59fa/1?v=1",
            },
            {
              type: "paragraph",
              text: "Entre la última acta parcial y el levantamiento del acta final debe mediar, al menos, un plazo de veinte días para que el visitado aporte libros, registros o correcciones. Si se revisan varios ejercicios, el plazo puede ampliarse quince días adicionales previa manifestación dentro del plazo inicial. La negativa a firmar o recibir copia de las actas se asienta en la propia diligencia y no afecta su validez ni su fuerza probatoria. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "accordion",
              header: "Checklist del contribuyente al recibir la orden",
              open: false,
              items: [
                {
                  header: "Verificación formal",
                  text: "Autoridad emisora y firma; fundamento y motivación; identificación de visitadores; objeto, alcance y lugares. Documente todo desde el primer contacto. :contentReference[oaicite:3]{index=3}",
                },
                {
                  header: "Desarrollo de la diligencia",
                  text: "Designación de testigos; control de copias certificadas; registro de incidencias; solicitud de sellos y numeraciones en aseguramientos. :contentReference[oaicite:4]{index=4}",
                },
              ],
            },
            {
              type: "accordion",
              header: "Errores frecuentes que generan nulidad o defensa",
              open: false,
              items: [
                {
                  header: "Competencia y firma",
                  text: "Falta de competencia o firma autógrafa; omisiones en identificación de visitadores; imprecisiones en el objeto de la visita. :contentReference[oaicite:5]{index=5}",
                },
                {
                  header: "Plazos",
                  text: "No respetar el plazo mínimo de 20 días entre última parcial y acta final; falta de integración de actas parciales al acta final. :contentReference[oaicite:6]{index=6}",
                },
              ],
            },
          ],
        },

        /* 3.2 Aseguramiento de bienes */
        {
          id: "3.2",
          numbering: "3.2",
          title: "Aseguramiento de bienes",
          content: [
            {
              type: "paragraph",
              text: "El aseguramiento es una medida instrumental para preservar evidencia o garantizar créditos fiscales: puede recaer sobre contabilidad, correspondencia, bienes o mercancías. Los visitadores están facultados para sellar o marcar documentos, muebles u oficinas, o dejar los bienes en depósito al visitado previa elaboración de inventario. La regla es no impedir el giro normal; se considera no impedimento cuando se asegura documentación no vinculada con el mes en curso y los dos anteriores, permitiendo extraer puntualmente lo indispensable frente a la autoridad. :contentReference[oaicite:7]{index=7}",
            },
            {
              type: "paragraph",
              text: "Respecto del embargo para hacer efectivo un crédito fiscal exigible, la autoridad requerirá pago y, de no acreditarse, trabará embargo sobre bienes suficientes o sobre depósitos y seguros, sin exceder el monto actualizado del crédito con accesorios. Las instituciones financieras deben informar a la autoridad dentro de tres días la ejecución del embargo y la autoridad notificar al contribuyente en igual plazo; si hubiera exceso, procede liberar recursos en exceso en tres días. Estas salvaguardas preservan proporcionalidad y control. :contentReference[oaicite:8]{index=8}",
            },
            {
              type: "image",
              alt: "Diagrama de aseguramiento de contabilidad y embargo de cuentas",
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQol2_bsYv0dQ-lviKBq8KIRPPvmx4zHno07A&s",
            },
            {
              type: "paragraph",
              text: "En casos de riesgo de ocultamiento o maniobras dilatorias, la contabilidad puede asegurarse desde el inicio. Si se detectan bienes cuya importación o tenencia requiera manifestación o autorización y esta no existe, procede su aseguramiento inmediato. Toda medida debe quedar circunstanciada: ubicación, numeración de sellos, relación de bienes o documentos, responsables y condiciones. La ausencia de detalle puede erosionar la validez probatoria y abrir flancos de defensa. :contentReference[oaicite:9]{index=9}",
            },
            {
              type: "accordion",
              header: "Buenas prácticas al enfrentar un aseguramiento",
              open: false,
              items: [
                {
                  header: "Inventario y sellos",
                  text: "Exija inventario detallado; pida numeración de sellos y fotografías; deje constancia de lo esencial para continuidad operativa. :contentReference[oaicite:10]{index=10}",
                },
                {
                  header: "Proporcionalidad",
                  text: "Documente afectaciones y solicite ajustes; si hay exceso en embargo de cuentas, promueva liberación con base en los topes legales. :contentReference[oaicite:11]{index=11}",
                },
              ],
            },
            {
              type: "accordion",
              header: "Claves de defensa",
              open: false,
              items: [
                {
                  header: "Motivación insuficiente",
                  text: "Cuestione la necesidad y proporcionalidad de la medida; verifique correspondencia con el objeto de la visita y el crédito exigible. :contentReference[oaicite:12]{index=12}",
                },
                {
                  header: "Cadena de custodia documental",
                  text: "Reclame lagunas en actas sobre ubicación, sellos, depósito y custodia; pida fe de hechos omisos. :contentReference[oaicite:13]{index=13}",
                },
              ],
            },
          ],
        },

        /* 3.3 Acta parcial */
        {
          id: "3.3",
          numbering: "3.3",
          title: "Acta parcial",
          content: [
            {
              type: "paragraph",
              text: "Las actas parciales dejan constancia de hechos, omisiones o circunstancias específicas detectadas durante la visita, incluidas aquellas relativas a terceros. Si la visita se practica en varios lugares, se levantará un acta parcial en cada sitio, integrándose todas al acta final. Entre la última acta parcial y el acta final debe transcurrir un plazo mínimo de veinte días para que el contribuyente aporte documentación, libros o registros y, en su caso, opte por corregir su situación fiscal. :contentReference[oaicite:14]{index=14}",
            },
            {
              type: "paragraph",
              text: "Adicionalmente, cuando la autoridad detecte hechos u omisiones que puedan entrañar incumplimiento, debe informar al contribuyente por buzón tributario, al menos diez días hábiles antes de la última acta parcial, su derecho a acudir a las oficinas para conocer el estado del procedimiento y, si lo desea, solicitar acompañamiento de la PRODECON. Este contacto temprano fomenta el derecho de audiencia y mejora la calidad de la decisión final. :contentReference[oaicite:15]{index=15}",
            },
            {
              type: "paragraph",
              text: "Cuando al inicio de la visita existan omisiones contables en plazos legales, los registros solo podrán efectuarse después de asentarse la omisión en acta parcial. Aun si la autoridad designa depositario distinto, el contribuyente debe continuar llevando su contabilidad. La disciplina de actas parciales robustece la motivación y facilita la defensa, en tanto fija con precisión el universo fáctico que será valorado en el acta final. :contentReference[oaicite:16]{index=16}",
            },
            {
              type: "accordion",
              header: "Contenido mínimo sugerido del acta parcial",
              open: false,
              items: [
                {
                  header: "Identificación y alcance",
                  text: "Autoridad, visitadores, lugar, fecha y objeto puntual de la actuación. :contentReference[oaicite:17]{index=17}",
                },
                {
                  header: "Hallazgos",
                  text: "Hechos/omisiones descritos circunstanciadamente, evidencia y referencias documentales. :contentReference[oaicite:18]{index=18}",
                },
              ],
            },
            {
              type: "accordion",
              header: "Estrategia durante la etapa intermedia (20 días)",
              open: false,
              items: [
                {
                  header: "Priorización probatoria",
                  text: "Organice libros y CFDI críticos; elabore escritos de desvirtuación con soporte. :contentReference[oaicite:19]{index=19}",
                },
                {
                  header: "Corrección",
                  text: "Valore autocorrección parcial para atenuar riesgos sancionatorios. :contentReference[oaicite:20]{index=20}",
                },
              ],
            },
          ],
        },

        /* 3.4 Cierre del acta final */
        {
          id: "3.4",
          numbering: "3.4",
          title: "Cierre del acta final",
          content: [
            {
              type: "paragraph",
              text: "Si al cierre del acta final no está presente el visitado o su representante, se deja citatorio para el día siguiente a hora determinada; de no presentarse, el acta se levanta con quien se encuentre. Firmarán cualquiera de los visitadores, la persona con quien se entendió la diligencia y los testigos; la negativa a firmar o a recibir copia se asienta y no afecta la validez ni el valor probatorio del acta. Las actas parciales forman parte integrante del acta final. :contentReference[oaicite:21]{index=21}",
            },
            {
              type: "paragraph",
              text: "El incumplimiento de los plazos para levantar el acta final, notificar el oficio de observaciones o concluir la revisión, produce la terminación de la visita a esa fecha, dejando sin efectos la orden y actuaciones subsecuentes. Por ello, el control fino del calendario procesal (fechas de cada acta, otorgamiento del plazo de 20 días, ampliaciones y cierre) es una salvaguarda esencial de la defensa. :contentReference[oaicite:22]{index=22}",
            },
            {
              type: "image",
              alt: "Acta final: estructura y relación con actas parciales",
              src: "https://www.stratego-st.com/wp-content/uploads/2020/08/Diagrama-visita-1024x345.jpg",
            },
            {
              type: "accordion",
              header: "Buenas prácticas de cierre",
              open: false,
              items: [
                {
                  header: "Revisión in situ",
                  text: "Solicite lectura íntegra del acta; verifique inclusión de aclaraciones y anexos; pida copias legibles. :contentReference[oaicite:23]{index=23}",
                },
                {
                  header: "Constancias clave",
                  text: "Deje asentadas incidencias (falta de firma, sustitución de testigos, etc.) y numere anexos probatorios. :contentReference[oaicite:24]{index=24}",
                },
              ],
            },
            {
              type: "accordion",
              header: "Focos rojos que se impugnan",
              open: false,
              items: [
                {
                  header: "Vicios formales",
                  text: "Defectos en competencias, firmas, notificaciones o integración de actas. :contentReference[oaicite:25]{index=25}",
                },
                {
                  header: "Vicios temporales",
                  text: "Exceso en plazos legales o falta de respeto al periodo de 20 días. :contentReference[oaicite:26]{index=26}",
                },
              ],
            },
          ],
        },

        /* 3.5 Plazo para concluir visitas domiciliarias */
        {
          id: "3.5",
          numbering: "3.5",
          title: "Plazo para concluir visitas domiciliarias",
          content: [
            {
              type: "paragraph",
              text: "Las diligencias se realizan en días y horas hábiles —de 7:30 a 18:00—; en verificación de bienes y mercancías en transporte, todos los días y horas son hábiles. En términos generales, la autoridad debe concluir la visita en el domicilio fiscal o la revisión de contabilidad en oficinas dentro de un plazo máximo de 12 meses contados desde la notificación del inicio de facultades de comprobación. :contentReference[oaicite:27]{index=27}",
            },
            {
              type: "paragraph",
              text: "Existen supuestos especiales: el plazo es de 18 meses respecto de contribuyentes del sistema financiero y ciertos regímenes; y de 24 meses cuando la autoridad solicita información a autoridades fiscales del extranjero o verifica obligaciones específicas (por ejemplo, precios de transferencia u obligaciones informativas previstas en la Ley del ISR). Superado el plazo sin conclusión válida, la visita se entiende concluida, con los efectos procesales que ello conlleva. :contentReference[oaicite:28]{index=28}",
            },
            {
              type: "image",
              alt: "Línea de tiempo de 12–18–24 meses para concluir visitas",
              src: "https://lh3.googleusercontent.com/pP46jxXhavcTf6IN9hMVwICpeqqfdaZn-UU0qurKP2ZQZuvxOAOBG0HFh3QfRjdqFAvuZsQ8veFVZXp0WpgMBhE7K0wNxnXTETCjDamXZbSDJGDQPLFNRKEgK26RdcsqslOXG64oQASQRPyA8Q",
            },
            {
              type: "accordion",
              header: "Gestión de plazos en la práctica",
              open: false,
              items: [
                {
                  header: "Calendario maestro",
                  text: "Registre hitos (inicio, actas, 20 días, ampliaciones, cierre) y alerte vencimientos con 5–10 días de antelación. :contentReference[oaicite:29]{index=29}",
                },
                {
                  header: "Estrategia",
                  text: "Decida si conviene aportar pruebas temprano o reservarlas para medios de defensa, sin perder ventanas legales. :contentReference[oaicite:30]{index=30}",
                },
              ],
            },
            {
              type: "accordion",
              header: "Preguntas frecuentes",
              open: false,
              items: [
                {
                  header: "¿Puede prorrogarse oficiosamente?",
                  text: "Solo en los supuestos previstos; la simple carga de trabajo no habilita extender el plazo máximo. :contentReference[oaicite:31]{index=31}",
                },
                {
                  header: "¿Qué pasa si se excede el plazo?",
                  text: "La visita se entiende concluida y decaen actuaciones derivadas, sin perjuicio de nuevas facultades válidamente ejercidas. :contentReference[oaicite:32]{index=32}",
                },
              ],
            },
          ],
        },

        /* 3.6 Visitas para verificar expedición de comprobantes fiscales */
        {
          id: "3.6",
          numbering: "3.6",
          title: "Visitas para verificar expedición de comprobantes fiscales",
          content: [
            {
              type: "paragraph",
              text: "Estas visitas se concentran en corroborar la debida expedición de CFDI y la integridad del ciclo emisor–receptor. Ante irregularidades, la autoridad puede restringir temporalmente el uso del certificado de sello digital (CSD). El contribuyente cuenta con 40 días hábiles para presentar solicitud de aclaración y aportar pruebas que subsanen o desvirtúen las causas; al día siguiente de la solicitud se restablece el uso del CSD de forma provisional hasta que se emita resolución. :contentReference[oaicite:33]{index=33}",
            },
            {
              type: "paragraph",
              text: "La autoridad debe resolver en un plazo máximo de 10 días hábiles y notificar por buzón tributario. Una gestión diligente del expediente —políticas internas de emisión y recepción de CFDI, conciliaciones periódicas y resguardo de XML/PDF— reduce tiempos de aclaración y riesgos de reiteración. Paralelamente, la visita sigue reglas generales de identificación, actas y plazos, con énfasis en trazabilidad documental. :contentReference[oaicite:34]{index=34}",
            },
            {
              type: "image",
              alt: "Proceso de restricción y aclaración del CSD en verificación de CFDI",
              src: "https://elconta.mx/wp-content/uploads/2023/08/CSD_REDES.jpg",
            },
            {
              type: "accordion",
              header: "Ruta rápida ante restricción de CSD",
              open: false,
              items: [
                {
                  header: "Diagnóstico",
                  text: "Identifique causal de restricción; levante evidencias de operaciones reales y de cumplimiento de requisitos del CFDI. :contentReference[oaicite:35]{index=35}",
                },
                {
                  header: "Aclaración",
                  text: "Presente solicitud con anexos técnicos y contractuales; dé seguimiento por buzón hasta resolución. :contentReference[oaicite:36]{index=36}",
                },
              ],
            },
            {
              type: "accordion",
              header: "Controles preventivos",
              open: false,
              items: [
                {
                  header: "Política de emisión",
                  text: "Validación automática de catálogos (uso, clave producto/servicio, unidad) y conciliación contra ERP. :contentReference[oaicite:37]{index=37}",
                },
                {
                  header: "Backups y auditoría",
                  text: "Resguardo cifrado de XML y bitácoras de timbrado; auditorías internas trimestrales. :contentReference[oaicite:38]{index=38}",
                },
              ],
            },
          ],
        },

        /* 3.7 Requisitos que deben contener los comprobantes fiscales (CFDI) */
        {
          id: "3.7",
          numbering: "3.7",
          title:
            "Requisitos que deben contener los comprobantes fiscales (CFDI)",
          content: [
            {
              type: "paragraph",
              text: "Los CFDI deben cumplir con requisitos mínimos para surtir efectos fiscales: identificación del emisor y receptor, folios y sellos digitales, datos de la operación y otros previstos por disposiciones de carácter general. Su omisión incide en deducibilidad, acreditamiento y trazabilidad, pudiendo detonar actos de verificación. :contentReference[oaicite:39]{index=39}",
            },
            {
              type: "list",
              style: "bulleted",
              items: [
                "RFC, nombre/razón social del emisor y régimen fiscal; domicilio del local donde se expida (si aplica). :contentReference[oaicite:40]{index=40}",
                "Número de folio, sello del SAT y del emisor. :contentReference[oaicite:41]{index=41}",
                "Lugar y fecha de expedición. :contentReference[oaicite:42]{index=42}",
                "RFC, nombre/razón social del receptor, código postal de su domicilio fiscal y clave del uso del CFDI. :contentReference[oaicite:43]{index=43}",
                "Cantidad, unidad de medida y descripción de bienes/servicios o del uso o goce otorgado. :contentReference[oaicite:44]{index=44}",
                "Valor unitario e importe total (en número o letra conforme a 29-A). :contentReference[oaicite:45]{index=45}",
                "Requisitos específicos para mercancías de importación y otros que establezcan reglas de carácter general. :contentReference[oaicite:46]{index=46}",
              ],
            },
            {
              type: "image",
              alt: "Plantilla anotada de CFDI con campos obligatorios",
              src: "https://siemprealdia.co/mexico/wp-content/uploads/sites/4/2025/07/Cancelacion-del-Certificado-de-Sello-Digital-en-Mexico.jpg",
            },
            {
              type: "accordion",
              header: "Buenas prácticas de emisión y resguardo",
              open: false,
              items: [
                {
                  header: "Validación previa",
                  text: "Verificación automática de catálogos y congruencia de impuestos; revisión de complementos aplicables. :contentReference[oaicite:47]{index=47}",
                },
                {
                  header: "Conservación",
                  text: "Resguardo íntegro de XML y acuses de cancelación por el plazo legal; controles de integridad. :contentReference[oaicite:48]{index=48}",
                },
              ],
            },
            {
              type: "accordion",
              header: "Incidencias comunes y cómo evitarlas",
              open: false,
              items: [
                {
                  header: "Datos del receptor",
                  text: "Errores en RFC o CP inhabilitan efectos; implemente validaciones en alta de clientes. :contentReference[oaicite:49]{index=49}",
                },
                {
                  header: "Clave producto/servicio",
                  text: "Selección imprecisa provoca rechazos; utilice tablas maestras y capacitación continua. :contentReference[oaicite:50]{index=50}",
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
          href: "https://www.youtube.com/watch?v=vxtIMg4steU", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "JurídicaMente. (2020). El Acto Administrativo / Requisitos / Jurisprudencia. https://www.youtube.com/watch?v=vxtIMg4steU",
            "Ríos, G. (Coord.). (2020). Manual de Derecho Fiscal. Universidad Nacional Autónoma de México. https://biblio.juridicas.unam.mx/bjv/detalle-libro/6278-manual-de-derecho-fiscal",
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
            "Gómez, C., & Briseño, M. E. (2016). *Nuevos paradigmas del Derecho Procesal.* México: IIJ-UNAM. https://biblio.juridicas.unam.mx/bjv/detalle-libro/4250-nuevos-paradigmas-del-derecho-procesal",
            "Soberanes, O., & Soberanes, S. V. (2018). *Manual teórico-práctico sobre medios de defensa en materia administrativa.*",
            "Said, A. (1999). *Algunos procedimientos paraprocesales en materia administrativa bajo la perspectiva de género.*",
            "Zanobini, G. (1947). *Curso de Derecho Administrativo.* Milán.",
            "Secretaría de Hacienda y Crédito Público & Servicio de Administración Tributaria. (2025). Portal de atención al contribuyente. http://www2.sat.gob.mx/sitio_internet/6_394.html",
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
