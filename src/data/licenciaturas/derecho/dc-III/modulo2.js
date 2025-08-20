/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "lic-derecho",
  courseId: "introduccion-al-estudio-del-derecho",
  id: "modulo4-clasificacion-estado-ramas-conceptos",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Introducción al Estudio del Derecho",
  title:
    "Módulo 4. Clasificación de normas, Estado de derecho y ramas del Derecho",
  semestre: "Semestre 1",
  teacher: "Dr. José Valentín Ramos Fajardo",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Profundizar en las bases de la disciplina mediante el estudio de las clasificaciones de las normas jurídicas desde diversos enfoques; los conceptos de Estado y Estado de derecho (población, territorio, poder, soberanía y Constitución); la distinción entre Derecho público, privado y social; el panorama de sus principales ramas; y los conceptos jurídicos fundamentales (normas y supuestos, consecuencias jurídicas y hechos jurídicos), para que el alumnado ubique con precisión su ámbito de acción y argumente con rigor en casos introductorios.",

  competencies: [
    "Identifica y compara las clasificaciones de las normas jurídicas: por sistema, fuente, ámbitos (espacial, temporal, material y personal), jerarquía, sanción, cualidad, relaciones de complementación y voluntad de los particulares.",
    "Explica la noción de Estado y sus elementos (población, territorio y gobierno/poder), así como soberanía y Constitución, y los articula con el Estado de derecho.",
    "Distingue con ejemplos los ámbitos del Derecho público, privado y social, reconociendo sus consecuencias prácticas y procesales.",
    "Describe las ramas del Derecho público: constitucional, administrativo, internacional público, penal, procesal, financiero, tributario y electoral.",
    "Describe las ramas del Derecho privado: civil, mercantil, societario/corporativo, concursal e internacional privado; y del Derecho social: agrario, laboral y seguridad social.",
    "Define y ejemplifica normas jurídicas y supuestos de hecho, consecuencias jurídicas y hechos/actos jurídicos, aplicándolos a problemas básicos.",
    "Determina fuente, jerarquía y ámbitos de validez de normas aplicables (inicio de vigencia, derogación/abrogación, territorialidad) en ejercicios de clasificación.",
    "Diferencia norma general y norma individualizada (privada y pública) y establece la vía procedente para su exigibilidad.",
    "Emplea vocabulario técnico y criterios de validez para argumentar con claridad y coherencia en situaciones jurídicas introductorias.",
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

    /* Nodo / Unidad principal del Módulo 4 */
    {
      id: "1",
      numbering: "Unidades 5–9",
      title:
        "Clasificación de normas, Estado de Derecho, ramas del Derecho y conceptos fundamentales",
      content: [
        {
          type: "paragraph",
          text: "Este módulo articula cuatro ejes que el jurista empleará a diario: (i) cómo se clasifican las normas jurídicas y por qué esa clasificación condiciona su aplicación; (ii) qué significa ‘Estado’ y en qué consiste el Estado de Derecho (población, territorio, poder/soberanía y Constitución); (iii) cómo se distinguen el Derecho público, el privado y la vertiente social; y (iv) qué ramas se desprenden de esa distinción, junto con los conceptos jurídicos fundamentales que hacen operativa la técnica (normas y supuestos, consecuencias y hechos/actos jurídicos). El punto de partida es metodológico: clasificar no es un capricho, sino el primer filtro para identificar validez, vigencia, jerarquía, ámbito de aplicación y vías de exigibilidad. Sin esa brújula, el discurso jurídico se vuelve retórico y la práctica, ineficaz. Por eso, la unidad enlaza teoría y operatividad: cada par conceptual (p. ej., público/privado) se convierte en preguntas guía que orientan decisiones concretas —qué órgano es competente, qué procedimiento rige, qué remedio procede—. El resultado buscado es una mirada sintética pero rigurosa, capaz de pasar del mapa general al caso concreto con solvencia.",
        },
        {
          type: "paragraph",
          text: "El primer eje presenta las ‘diversas clasificaciones de las leyes’ desde enfoques doctrinales clásicos (García Máynez, con apoyos en Kelsen) y con aterrizajes prácticos. Se estudiará su adscripción al sistema del que forman parte (nacionales, extranjeras, de derecho uniforme); su fuente (legisladas, consuetudinarias o jurisprudenciales en su función); sus ámbitos de validez (espacial, temporal, material y personal); su jerarquía (bloque de constitucionalidad en la cúspide, leyes ordinarias y reglamentarias debajo, y normas individualizadas); la lógica de sus sanciones (perfectas, más que perfectas, menos que perfectas e imperfectas, siguiendo a Korkunov); su cualidad (permisivas/prohibitivas); sus relaciones de complementación (primarias y secundarias); y el papel de la voluntad de los particulares (taxativas y dispositivas). El objetivo es convertir el ‘catálogo’ en una herramienta de lectura: ante cada norma, identificar en segundos su ubicación en el sistema y, con ello, su fuerza obligatoria y la manera correcta de aplicarla o impugnarla.",
        },
        {
          type: "paragraph",
          text: "El segundo eje aborda el Estado de Derecho a partir del concepto de Estado y sus elementos: población (sustrato humano al que se dirigen las normas), territorio (ámbito espacial bajo dominio y jurisdicción) y poder/gobierno (organización que monopoliza la coacción legítima y estructura instituciones). Se estudiará la soberanía como atributo que describe la autoridad última para decidir dentro del territorio y la Constitución como norma fundamental que organiza el poder, fija competencias y reconoce derechos. Desde una perspectiva histórica-doctrinal (Heller, Weber) y operativa, se explicará por qué el Estado de Derecho exige que toda decisión pública se sujete a reglas previas, controles y motivación, y cómo ello se traduce en seguridad, igualdad y previsibilidad. El hilo conductor es claro: sin instituciones y Constitución no hay garantías; sin población y territorio no hay destinatarios ni ámbito; sin legalidad y control, la fuerza se desborda y la confianza social se erosiona.",
        },
        {
          type: "paragraph",
          text: "El tercer eje clarifica la división público/privado y la emergencia del Derecho social. Aunque algunas corrientes relativizan su utilidad teórica, la práctica mexicana la emplea como criterio organizador: en el Derecho público, el Estado comparece como parte defendiendo intereses generales y opera con potestades y límites específicos; en el privado, se ordenan relaciones entre particulares bajo un régimen de igualdad formal y remedios típicos; en el social, se reconocen asimetrías materiales que justifican protecciones reforzadas (agrario, laboral, seguridad social). Esta cartografía no es meramente académica: define competencias, procedimientos, cargas probatorias y remedios. Al finalizar, el estudiante podrá leer un caso y ubicarlo en la familia correcta para escoger con precisión la vía aplicable (p. ej., contencioso administrativo vs. juicio civil) y anticipar el estándar de control (legalidad estricta, proporcionalidad, tutela reforzada, etc.).",
        },
        {
          type: "paragraph",
          text: "El cuarto eje sintetiza el panorama de ramas (constitucional, administrativo, internacional público, penal, procesal, financiero, tributario y electoral; civil —incluidas obligaciones y familia—, mercantil, societario/corporativo, concursal, ambiental, internacional privado; y las del ámbito social) y cierra con los conceptos jurídicos fundamentales: la norma como regla general o individualizada; el supuesto de hecho que anticipa una situación regulable; la consecuencia jurídica que se activa cuando el supuesto se verifica; y los hechos jurídicos (naturales y humanos) y actos jurídicos como categoría de hechos voluntarios que buscan producir efectos de derecho. Estas nociones ordenan la argumentación: ningún caso se resuelve sin identificar la norma fuente, el supuesto aplicable, la consecuencia y el tipo de hecho que detona la relación jurídica. Con ello, la unidad ofrece un método replicable: clasificar, verificar, aplicar, controlar y, si procede, reformar.",
        },

        /* Acordeón con tres niveles */
        {
          type: "accordion",
          header: "Nivel 1 — Conceptual: el mapa del módulo",
          open: false,
          text: "Clasificaciones de normas (sistema, fuente, ámbitos, jerarquía, sanción, cualidad, complementación, voluntad); Estado de Derecho (población, territorio, poder/soberanía, Constitución); familias del Derecho (público, privado, social) y ramas; conceptos fundamentales (norma, supuesto, consecuencia, hechos/actos).",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Analítico: preguntas guía",
          open: false,
          text: "¿En qué ‘cajón’ cae la norma (jerarquía/ámbito)? ¿Cuál es su fuente y vigencia? ¿El caso es público, privado o social? ¿Qué rama y qué órgano son competentes? ¿Cuál es el supuesto de hecho y la consecuencia? ¿Qué hecho (natural/humano/acto) la detona? ¿Qué control aplica (legalidad, constitucionalidad, proporcionalidad)?",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Aplicado: checklist operativo",
          open: false,
          text: "1) Identifica norma fuente y verifícala (publicación, vigencia, alcance). 2) Clasifica el caso (familia y rama). 3) Determina órgano y procedimiento. 4) Formula la triada: supuesto→hecho probado→consecuencia. 5) Elige remedio idóneo. 6) Contrasta con Constitución y ajusta con técnicas (interpretación conforme, proporcionalidad).",
        },
      ],

      /* → Temas 5 a 9 según índice oficial */
      subthemes: [
        /* 5.- CLASIFICACIÓN DE LAS NORMAS JURÍDICAS. */
        {
          id: "1.5",
          numbering: "5",
          title: "Clasificación de las normas jurídicas",
          content: [
            {
              type: "paragraph",
              text: "Clasificar las normas jurídicas no es un ejercicio ornamental: es el primer filtro técnico para decidir validez, vigencia, jerarquía, ámbito de aplicación y vías de exigibilidad. Este tema ofrece un mapa operativo sustentado en la doctrina clásica (García Máynez con apoyos de Kelsen) y en el enfoque del curso. Partimos de una idea metodológica central: identificar con rapidez “dónde” cae cada norma dentro del sistema permite anticipar quién es competente, qué procedimiento corresponde y qué remedio procede. La unidad presenta, por tanto, las principales formas de clasificación: por el sistema al que pertenecen; por su fuente; por sus ámbitos de validez (espacial, temporal, material y personal); por su jerarquía; por el tipo de sanción; por su cualidad; por sus relaciones de complementación; y según el papel de la voluntad de los particulares. Con esta brújula, el estudiante podrá pasar del texto a la aplicación con solvencia, reduciendo errores de categoría que, en la práctica, cuestan nulidades, tiempo y credibilidad profesional.",
            },
            {
              type: "paragraph",
              text: "Desde el punto de vista del sistema al que pertenecen, las leyes pueden ser nacionales (expedidas por el propio país), extranjeras (provenientes de otro Estado) o de derecho uniforme cuando dos o más Estados acuerdan un mismo texto aplicable en sus jurisdicciones. En cuanto a la fuente, el material recuerda que la ley —producto del proceso legislativo— ocupa un lugar preeminente en nuestro ordenamiento y que también se habla, en sentido funcional, de derecho consuetudinario y de derecho jurisprudencial. El beneficio práctico de este doble deslinde (sistema/fuente) es inmediato: evita confundir reglas ajenas al foro con las aplicables, y distingue lo que se produjo por procedimiento legislativo de aquello que opera como pauta supletoria o interpretativa. Al asesorar, litigar o dictaminar, este primer corte permite descartar normas irrelevantes por su procedencia o por su falta de recepción en el orden interno, y enfocar la argumentación en el bloque normativo efectivamente aplicable al caso.",
            },
            {
              type: "paragraph",
              text: "El eje de los ámbitos de validez se despliega en cuatro dimensiones. El ámbito espacial delimita el territorio de aplicación (federal, estatal, municipal; e incluso categorías nacionales o generales), recordando que el territorio comprende suelo, aguas y, en su caso, espacio correspondiente. El ámbito temporal se refiere a la vigencia: inicio (frecuentemente con vacatio legis) y terminación por modificación normativa (derogación o abrogación, según determine el propio ordenamiento). El ámbito material sitúa la norma en familias de contenido (público, privado y, en México, la vertiente social). Por último, el ámbito personal distingue entre normas generales —dirigidas a clases de personas— y normas individualizadas; estas últimas pueden ser privadas (contratos, testamentos) o públicas (sentencias, concesiones). Dominar estos cuatro cortes permite responder con precisión las preguntas clave: ¿dónde rige?, ¿cuándo rige?, ¿sobre qué materia versa?, ¿a quién obliga?",
            },
            {
              type: "paragraph",
              text: "La jerarquía ordena el sistema: en la cúspide se ubica el bloque de constitucionalidad (Constitución y, en la práctica contemporánea, tratados internacionales con rango superior), seguido por leyes ordinarias y generales, después por reglamentos y disposiciones administrativas, y finalmente por normas individualizadas. Este armazón se complementa con la clasificación por sanciones (siguiendo a Korkunov y a la recepción doctrinal clásica): leyes perfectas, más que perfectas, menos que perfectas e imperfectas, según anulen actos, los castiguen o sólo fijen deberes sin sanción. A ello se suma la cualidad de las normas: permisivas (positivas) y prohibitivas (negativas). Estas tres lentes —jerarquía, sanción y cualidad— orientan la intensidad del control, la selección de remedios y la expectativa de cumplimiento. En litigio, por ejemplo, no es lo mismo impugnar una norma reglamentaria que un precepto legal; tampoco es igual exigir un permiso fundado en una norma dispositiva que defenderse ante una prohibición expresa.",
            },
            {
              type: "paragraph",
              text: "Finalmente, dos clasificaciones afinan el uso práctico. Primero, las relaciones de complementación: normas primarias (autosuficientes) y secundarias (de vigencia, explicativas, permisivas, interpretativas o sancionadoras) que completan el sentido y la operatividad del sistema. Segundo, la voluntad de los particulares: leyes taxativas (imperativas), que imponen conductas no disponibles, y leyes dispositivas, que permiten a las partes apartarse del texto dentro de márgenes legales. Con estas piezas se propone un método de trabajo: (1) ubicar la norma por sistema y fuente; (2) verificar sus ámbitos; (3) situarla en la jerarquía; (4) identificar su cualidad y sanción; (5) reconocer si requiere normas complementarias; y (6) determinar si admite configuración por particulares. El resultado es una lectura estratégica que evita improvisaciones y convierte la clasificación en decisiones concretas sobre competencia, procedimiento y remedios.",
            },

            /* Acordeón con tres niveles */
            {
              type: "accordion",
              header: "Nivel 1 — Conceptual (qué clasificar)",
              open: false,
              text: "Sistema (nacional/extranjero/uniforme) • Fuente (legislada/consuetudinaria/jurisprudencial en su función) • Ámbitos (espacial/temporal/material/personal) • Jerarquía (bloque constitucional, leyes, reglamentos, individualizadas) • Sanción (perfectas, más que perfectas, menos que perfectas, imperfectas) • Cualidad (permisivas/prohibitivas) • Complementación (primarias/secundarias) • Voluntad de los particulares (taxativas/dispositivas).",
            },
            {
              type: "accordion",
              header: "Nivel 2 — Analítico (preguntas guía)",
              open: false,
              text: "¿De qué sistema proviene? ¿Cuál es su fuente formal y su recepción? ¿Dónde/cuándo rige (publicación, vigencia, territorio)? ¿Qué materia y quiénes son los destinatarios? ¿Dónde se ubica en la jerarquía? ¿Qué sanción y cualidad tiene? ¿Requiere norma secundaria? ¿Admite configuración privada?",
            },
            {
              type: "accordion",
              header: "Nivel 3 — Aplicado (microcasos)",
              open: false,
              text: "Contrato con cláusula atípica: norma dispositiva + secundarias interpretativas; valida si respeta orden público. Reglamento que restringe un derecho: verifica jerarquía y proporcionalidad; posible nulidad. Norma general federal vs. local: analiza ámbito espacial y bloque de constitucionalidad para determinar prevalencia.",
            },
          ],
          subthemes: [
            {
              id: "1.5.1",
              numbering: "5.1",
              title: "Diversas clasificaciones de las leyes",
              content: [
                {
                  type: "paragraph",
                  text: "Antes de clasificar, el material recuerda una premisa: en nuestro enfoque didáctico, la ley es la fuente formal por excelencia del Derecho, resultado del proceso legislativo; a partir de allí, comprender cómo se agrupan y ordenan las leyes no es un ornamento, sino una técnica para aplicarlas con precisión. De hecho, clasificar permite responder rápido y bien a seis preguntas operativas: ¿de qué sistema proviene la norma?, ¿cuál es su fuente?, ¿dónde y cuándo rige?, ¿sobre qué materia versa y a quién obliga?, ¿en qué nivel de la jerarquía se ubica?, ¿qué tipo de sanción y cualidad porta?, ¿necesita normas complementarias?, y ¿admite o no configuración por particulares? El texto insiste en que la utilidad es práctica: la clasificación orienta competencias, procedimientos y remedios, evitando confundir usos sociales con reglas escritas o invocar normas inaplicables. Por eso, la unidad 5.1 organiza el estudio en ocho puntos de vista: sistema al que pertenecen; fuente; ámbitos de validez (espacial, temporal, material y personal); jerarquía; tipo de sanción; cualidad; relaciones de complementación, y voluntad de los particulares. Esta cartografía doctrinal —con apoyos en García Máynez y Kelsen— se traduce en un mapa de decisión para el foro: ubicar, verificar y aplicar con criterios estables, reduciendo nulidades, tiempos muertos y fricción institucional.",
                },
                {
                  type: "paragraph",
                  text: "Desde el punto de vista del sistema al que pertenecen, la exposición sigue a García Máynez: todas las leyes son expedidas por un país, por lo que distinguimos leyes nacionales (dictadas por el propio Estado), extranjeras (provenientes de otra nación) y, en ocasiones, de derecho uniforme cuando dos o más Estados acuerdan un mismo texto aplicable en sus jurisdicciones. Esta clave previene dos errores frecuentes: traer al foro interno reglas no recibidas o, a la inversa, ignorar instrumentos comunes que ya fueron armonizados. En el plano de la fuente, el material reconecta con la sesión previa: la ley, fruto del proceso legislativo, es derecho escrito; pero en sentido funcional se alude también a la costumbre (derecho consuetudinario) y a la jurisprudencia (derecho jurisprudencial) como referencias supletorias e interpretativas. La advertencia es clara: ni la costumbre contraria desplaza a la ley vigente, ni la jurisprudencia crea por sí una “ley paralela”; ambas cumplen un papel de apoyo. El resultado práctico de este doble deslinde sistema/fuente es un filtro inicial para concentrar la argumentación en el bloque normativo realmente aplicable al caso.",
                },

                /* Acordeón 1 intercalado */
                {
                  type: "accordion",
                  header: "Clave conceptual — Sistema y fuente",
                  open: false,
                  text: "Sistema: nacional / extranjero / derecho uniforme. Fuente: legislada (escrita) con apoyos de costumbre y jurisprudencia en funciones supletorias e interpretativas. Objetivo: evitar importar reglas ajenas o elevar usos a ‘ley’ donde ya existe texto vigente.",
                },

                {
                  type: "paragraph",
                  text: "El eje de los ámbitos de validez se despliega, con base en Kelsen (vía García Máynez), en cuatro dimensiones. El ámbito espacial delimita el territorio de aplicación: federal, estatal o municipal; e incluso se habla de leyes nacionales o generales que atraviesan niveles. Para el material, “territorio” no es sólo suelo: incluye aguas y el espacio correspondiente; por eso, la competencia espacial debe leerse con precisión para evitar extrapolaciones indebidas. El ámbito temporal alude a la vigencia: inicio (por regla, indicado en el propio texto y a veces precedido por vacatio legis) y terminación por cambios normativos. La exposición subraya que la ley deja de ser efectiva cuando otra la desplaza, y añade una nota terminológica peculiar del curso: si sólo quedan sin efecto partes de la ley pero ésta sigue rigiendo en lo demás, se habla de abrogación; cuando la norma nueva la echa atrás, se habla de derogación. En todo caso, la consigna operativa es verificar la versión vigente hoy, aquí y ahora, antes de litigar o dictaminar, documentando publicación, transitorios y reformas.",
                },

                /* Imagen intercalada (presente en el material de 5.1) */
                {
                  type: "image",
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9hkTP-m-9GOEbYC5GL8oMJlSF0YqjF1ZNQ&s",
                  caption:
                    "Clasificar para aplicar: sistema, fuente y ámbitos de validez.",
                },

                {
                  type: "paragraph",
                  text: "El ámbito material sitúa la norma en familias de contenido. Siguiendo la línea del curso (y anticipando los temas 7 y 8), se deja asentado que el Derecho se ubica, de modo general, en lo público y lo privado, y que en México se reconoce además una vertiente social. Esta ubicación no es escolástica: define órganos, procedimientos, cargas probatorias y estándares de control (legalidad estricta, proporcionalidad, tutela reforzada). Finalmente, el ámbito personal distingue entre normas generales —dirigidas a clases de personas— y normas individualizadas. Estas últimas se subdividen en privadas, creadas por la voluntad de los particulares (contratos, testamentos), y públicas, emitidas por autoridad (sentencias, concesiones). En litigio, esta llave evita errores de legitimación y de vía: no se exige igual una obligación nacida de un contrato que la ejecutoria de una sentencia; tampoco se notifica del mismo modo a un grupo indeterminado que a un destinatario singular. La lectura integral de los cuatro ámbitos (espacial, temporal, material y personal) convierte un texto en una norma verdaderamente aplicable al caso.",
                },
                {
                  type: "paragraph",
                  text: "La jerarquía ordena el sistema normativo. El material explica que la antigua pirámide kelseniana ha sido matizada por el reconocimiento del bloque de constitucionalidad: en la cúspide, Constitución y tratados internacionales que los Estados aceptan como su ley máxima. Les siguen leyes ordinarias o generales (p. ej., Ley General de Salud, Código de Comercio, Ley Federal del Trabajo), luego reglamentos y disposiciones administrativas, y finalmente normas individualizadas. Esta estructura se enlaza con la clasificación por sanciones, recibida de Korkunov: leyes perfectas (anulan el acto que las vulnera), más que perfectas (no lo anulan por imposible, pero lo castigan), menos que perfectas (no impiden la violación, pero la sancionan) e imperfectas (fijan deberes sin castigo expreso). Añade el material la distinción por cualidad: positivas o permisivas (habilitan conductas) y negativas o prohibitivas (impiden actos). Estas tres lentes —jerarquía, sanción y cualidad— determinan intensidad del control, selección de remedios y expectativas de cumplimiento en el mundo real.",
                },

                /* Acordeón 2 intercalado */
                {
                  type: "accordion",
                  header: "Jerarquía, sanción y cualidad — uso práctico",
                  open: false,
                  text: "Bloque de constitucionalidad > leyes > reglamentos > actos individualizados. Sanciones: perfectas / más que perfectas / menos que perfectas / imperfectas. Cualidad: permisivas vs. prohibitivas. Impacto: define control, remedio y estrategia procesal.",
                },

                {
                  type: "paragraph",
                  text: "Dos clasificaciones completan el cuadro operativo. Las relaciones de complementación distinguen normas primarias (autosuficientes) y secundarias —de vigencia, explicativas, permisivas, interpretativas o sancionadoras— que completan o regulan a las primeras. Esta lupa es útil para no pedir de una norma lo que no puede dar sin su complemento (p. ej., aplicar una obligación sin revisar reglas de vigencia o de sanción). Por su parte, la voluntad de los particulares separa leyes taxativas (imperativas), que imponen conductas indisponibles, y leyes dispositivas, que permiten apartarse del texto dentro de márgenes legales. La consecuencia profesional es clara: en contratos, por ejemplo, la autonomía rige hasta donde el orden público y las normas imperativas lo permiten; en cambio, en materias sancionatorias, la disponibilidad de las partes se estrecha. Con este método —sistema, fuente, ámbitos, jerarquía, sanción, cualidad, complementación y voluntad— el lector transforma la clasificación en decisiones verificables sobre competencia, procedimiento y remedios, alineando doctrina y eficacia práctica.",
                },
              ],
            },
          ],
        },

        /* 6.- ESTADO DE DERECHO. */
        {
          id: "1.6",
          numbering: "6",
          title: "Estado de Derecho",
          content: [
            {
              type: "paragraph",
              text: "El Estado de Derecho es la forma de organización política en la que el poder público se somete a un entramado de normas previas, públicas y controlables, de modo que toda decisión estatal requiere fundamento de validez, competencia y procedimiento. Para comprenderlo, el módulo parte de la noción de Estado como la máxima organización política moderna: un orden institucional que centraliza la autoridad sobre un territorio determinado, con capacidad de coacción legítima y de articulación de los fines colectivos. En clave doctrinal, se recuperan dos hitos: Heller define al Estado como estructura económica, jurídica y política de dominación que organiza la cooperación social bajo un orden legítimo; Weber, por su parte, lo caracteriza por el monopolio de la violencia legítima. Sobre esta base, “Estado de Derecho” no equivale a “gobierno de las leyes” en abstracto, sino a un sistema en el que la ley se produce por vías constitucionales, rige mediante publicidad y vigencia verificables, y se aplica con controles jurisdiccionales que previenen arbitrariedades. Su promesa es doble: seguridad jurídica para planear la vida y límites efectivos al poder para proteger derechos.",
            },
            {
              type: "paragraph",
              text: "El concepto operativo de Estado se articula, siguiendo la tradición de Jellinek, en tres elementos: población, territorio y gobierno/poder. La población no es un dato meramente estadístico: es la comunidad humana destinataria de las normas, cuya pertenencia (nacionalidad, ciudadanía) delimita derechos y deberes y distingue el ámbito propio del extraño. El territorio, por su parte, es el espacio de validez y actuación del orden jurídico: no sólo el suelo, sino también aguas y, en su caso, el espacio correspondiente. De esta dimensión se derivan categorías de competencia en México: leyes federales válidas en todo el país, leyes estatales o locales y ordenamientos municipales; además, existen normas nacionales o generales que atraviesan niveles. Comprender la territorialidad evita extrapolaciones indebidas y fija el “dónde” de la validez normativa. Finalmente, el gobierno/poder refiere a la organización que ejerce las funciones estatales mediante instituciones (legislativas, ejecutivas, jurisdiccionales), con el deber de motivar y fundamentar cada acto. Estos tres elementos, en conjunto, distinguen al Estado de otros arreglos sociales y explican el espacio en el que el Derecho despliega su fuerza obligatoria.",
            },
            {
              type: "paragraph",
              text: "Junto a esos elementos, el Estado de Derecho incorpora dos nociones clave: soberanía y Constitución. La soberanía describe la autoridad última de decisión dentro del territorio y la independencia en lo exterior; es el presupuesto que permite al Estado expedir su propio Derecho y aceptar, con jerarquía definida, tratados internacionales. La Constitución, en tanto norma fundamental, organiza el poder, distribuye competencias, reconoce derechos y establece procedimientos. La práctica contemporánea ha matizado la antigua pirámide kelseniana mediante el reconocimiento del “bloque de constitucionalidad”: Constitución y tratados con rango superior que orientan y limitan al legislador, a la administración y a los jueces. Así, el Estado de Derecho exige que todas las autoridades actúen bajo la Constitución, que las leyes se produzcan por el proceso legislativo y que existan controles para expulsar o reinterpretar normas contrarias a derechos. No se trata sólo de forma; también de contenido: la legalidad ha de ser compatible con principios de justicia que el propio texto constitucional incorpora, bajo estándares como proporcionalidad y motivación reforzada.",
            },
            {
              type: "paragraph",
              text: "En su dimensión institucional, el Estado de Derecho opera mediante legalidad, publicidad, competencia y control. La legalidad obliga a que cada decisión tenga base normativa y se ajuste al procedimiento previsto; la publicidad garantiza cognoscibilidad; la competencia fija qué órgano puede actuar; y el control (administrativo y jurisdiccional) corrige excesos y repara violaciones. El poder estatal, por definición, es coercible, pero bajo condiciones: debido proceso, motivación suficiente y respeto a derechos. De esta arquitectura se sigue un método profesional para analizar cualquier acto de autoridad: (i) identificar la norma fuente y su vigencia; (ii) verificar la competencia del órgano; (iii) revisar la forma (procedimiento, plazos, audiencia, pruebas); (iv) evaluar la motivación y la proporcionalidad de la medida; y (v) activar, en su caso, los remedios (nulidad, amparo, medidas cautelares) para restituir la legalidad. En suma, la fuerza pública no es primera opción, sino último recurso dentro de un marco regido por reglas y razones.",
            },
            {
              type: "paragraph",
              text: "El estudio del Estado de Derecho enlaza con el resto del módulo: clasificar normas (tema 5) permite ubicar jerarquía y ámbitos; distinguir lo público, lo privado y lo social (tema 7) aclara si el Estado actúa como parte con potestades específicas o si sólo provee jurisdicción; mapear las ramas (tema 8) ubica el foro competente; y dominar conceptos fundamentales (tema 9) da técnica para resolver casos (norma, supuesto, hecho, consecuencia). En términos operativos, la consigna es clara: toda controversia con componente estatal exige reconstruir la cadena de validez (Constitución–ley–reglamento–acto), situar el caso en su territorio y tiempo, y someter la decisión al test de legalidad y constitucionalidad. Este enfoque evita reducciones moralistas o decisionismos, y centra la discusión en lo que define al Estado de Derecho: gobierno sometido a reglas, ciudadanía protegida por garantías y soluciones justificadas que sostienen la confianza social.",
            },

            /* Acordeón con tres niveles */
            {
              type: "accordion",
              header: "Nivel 1 — Conceptual: ¿qué es y de qué se compone?",
              open: false,
              text: "Estado (población, territorio, gobierno/poder); soberanía; Constitución; bloque de constitucionalidad. Estado de Derecho: legalidad, publicidad, competencia y control como límites efectivos al poder y garantías para derechos.",
            },
            {
              type: "accordion",
              header: "Nivel 2 — Analítico: preguntas guía",
              open: false,
              text: "¿Cuál es la norma fuente y está vigente? ¿Qué autoridad es competente y con qué procedimiento? ¿Se motivó y justificó la medida? ¿Respeta el bloque de constitucionalidad? ¿La coacción es idónea, necesaria y proporcional?",
            },
            {
              type: "accordion",
              header: "Nivel 3 — Aplicado: checklist operativo",
              open: false,
              text: "1) Reconstruye la cadena normativa (Constitución→ley→reglamento→acto). 2) Verifica ámbitos (espacio/tiempo/materia/personas). 3) Examina competencia y forma. 4) Evalúa motivación y proporcionalidad. 5) Elige remedio (nulidad, amparo, cautelares). 6) Documenta hechos y efectos para tutela eficaz.",
            },
          ],
          subthemes: [
            {
              id: "1.6.1",
              numbering: "6.1",
              title: "Estado",
              content: [
                {
                  type: "paragraph",
                  text: "El concepto de Estado es el punto de arranque para entender el Derecho en cuanto fenómeno público organizado. El material lo presenta como la máxima forma de organización política que, desde la Europa bajomedieval, centraliza la autoridad en un territorio determinado y articula instituciones capaces de dirigir fines colectivos mediante el uso legítimo de la coacción. Heller lo define como estructura económica, jurídica y política de dominación que organiza la cooperación social con base en un orden reputado legítimo; Weber añade el rasgo operativo decisivo: el monopolio de la violencia legítima. Esta doble mirada —normativa e institucional— evita confundir al Estado con un mero gobierno de turno: aquél es la forma jurídico-política permanente; éste, la conducción temporal. Sobre esa base, comprender al Estado exige identificar tres elementos tradicionales (Jellinek): población, territorio y gobierno/poder. Sin población, el Derecho carece de destinatarios; sin territorio, no hay espacio de validez ni jurisdicción; sin poder organizado, las reglas no son más que deseos morales. El Estado es, pues, la arquitectura que permite que el Derecho sea general, público y coercible; su degeneración en arbitrariedad o impotencia desvirtúa esa promesa. En clave metodológica, el curso propone leer todo conflicto que incluya a autoridades reconstruyendo el esqueleto estatal: ¿qué órgano actúa?, ¿en qué territorio?, ¿frente a qué personas?, ¿con qué fundamento constitucional y legal?, y ¿bajo qué controles? Ese diagrama traslada la teoría a decisiones verificables.",
                },
                {
                  type: "paragraph",
                  text: "El Estado moderno se diferencia de otras formas históricas de dominación por tres rasgos concatenados: institucionalización, legalidad y publicidad. La institucionalización significa que el poder no se ejerce por vínculos personales (linajes, feudos, clientelas), sino a través de órganos con competencias definidas —legislativo, ejecutivo, jurisdiccional— y burocracias profesionalizadas. La legalidad implica que toda decisión de autoridad requiere una norma fuente válida y vigente, un procedimiento y una motivación que expliquen la razón de la medida. La publicidad vuelve cognoscible ese Derecho: reglas y actos deben publicarse en medios oficiales para poder obligar. En conjunto, estos rasgos hacen que el poder sea controlable y que la ciudadanía pueda anticipar las consecuencias jurídicas de sus conductas. Cuando alguno falta, aparecen patologías: discrecionalidad opaca, capturas privadas del poder o anomia. El material subraya, por eso, que “Estado de Derecho” no es sólo obediencia a textos, sino la conjunción de textos válidos, procedimientos abiertos y controles efectivos —jurisdiccionales y administrativos— que previenen arbitrariedades y corrigen excesos. La cultura cívica refuerza el arreglo: instituciones sólidas sin ciudadanía vigilante se agotan; ciudadanía activa sin legalidad degeneraría en decisionismo. El equilibrio es técnico y político.",
                },

                /* Acordeón 1 intercalado */
                {
                  type: "accordion",
                  header: "Tripié del Estado (Jellinek)",
                  open: false,
                  text: "Población (destinatarios y titulares de derechos/deberes) • Territorio (ámbito espacial de validez y jurisdicción) • Gobierno/Poder (organización que actúa con competencia y controles). Sin uno de los tres, no hay Estado en sentido propio.",
                },

                {
                  type: "paragraph",
                  text: "El poder estatal no es sinónimo de fuerza bruta: es capacidad jurídicamente canalizada para crear, aplicar y ejecutar normas. Por eso, el curso insiste en distinguir entre poder constituyente —que da origen y reforma la Constitución— y poderes constituidos —que gobiernan conforme a ella—. La formación del Derecho, entonces, sigue una cadena de validez: Constitución y, en la práctica contemporánea mexicana, el bloque de constitucionalidad que integra tratados internacionales; después, leyes ordinarias y generales; enseguida, reglamentos y actos individualizados. Cada eslabón limita al siguiente. Esta arquitectura ordena la producción normativa y su aplicación, asigna foros (competencias) y prescribe procedimientos que garantizan el debido proceso. En análisis de casos, reconstruir la cadena evita dos errores frecuentes: invocar normas sin rango suficiente para restringir derechos o exigir a una autoridad lo que no le compete. El operador jurídico debe mostrar, paso a paso, dónde nace la potestad, cómo se ejerce y con qué límites, y prever remedios cuando la cadena se rompe.",
                },

                /* Imagen intercalada (incluida en el material) */
                {
                  type: "image",
                  src: "https://i0.wp.com/tuguiadeaprendizaje.co/wp-content/uploads/2020/08/el-Estado.webp?fit=1280%2C720&ssl",
                  caption:
                    "Elementos del Estado: población, territorio y gobierno/poder.",
                },

                {
                  type: "paragraph",
                  text: "La perspectiva histórica ayuda a entender por qué el Estado concentra el monopolio legítimo de la coacción: evitar guerras privadas y hacer previsibles las relaciones sociales. En sociedades sin autoridad central estable, las controversias se resolvían por fuerza, venganza o pactos frágiles. La estatalidad, al contrario, crea procedimientos impersonales y universales —juicios, registros, catastro, recaudación— que igualan a gobernantes y gobernados frente a reglas públicas. Sin embargo, el monopolio, si no está sujeto a controles, se corrompe: de ahí la necesidad de tribunales independientes, órganos de fiscalización, transparencia y participación ciudadana. Esta institucionalidad, lejos de ahogar libertades, las hace practicables, porque reduce la incertidumbre y establece límites claros a la injerencia pública. El material remarca que el Estado de Derecho es equilibrio delicado entre eficacia (capacidad de actuar) y restricción (prohibición de excesos). El jurista se entrena para medir ese balance con criterios técnicos y para activar correctivos cuando fallan.",
                },
                {
                  type: "paragraph",
                  text: "Un aporte central del curso es el método para examinar actos de autoridad: (i) norma fuente y vigencia —¿qué texto habilita la medida y está vigente aquí y ahora?—; (ii) competencia —¿este órgano puede actuar en esta materia y territorio?—; (iii) procedimiento —plazos, audiencia, pruebas—; (iv) motivación reforzada cuando se afectan derechos; (v) proporcionalidad de la intervención (idoneidad, necesidad, balance). Esta secuencia transforma el discurso abstracto en auditoría concreta. Así, por ejemplo, si un reglamento restringe una libertad, se verifica jerarquía (¿puede un reglamento hacerlo?), finalidad legítima, idoneidad del medio, alternativas menos lesivas y ponderación final. Si falla un eslabón, procede nulidad o amparo. El Estado deja de ser un ente mítico para convertirse en un entramado de decisiones justificables. El oficio del abogado consiste en exigir y ofrecer razones públicas dentro de ese marco, no en sustituirlo por intuiciones morales o conveniencias coyunturales.",
                },

                /* Acordeón 2 intercalado */
                {
                  type: "accordion",
                  header: "Estado ≠ Gobierno",
                  open: false,
                  text: "Estado: forma jurídico-política permanente (instituciones, orden normativo, territorio y población). Gobierno: conducción temporal (autoridades en turno). El primero se controla con Constitución y tribunales; el segundo, además, con elecciones y rendición de cuentas.",
                },

                {
                  type: "paragraph",
                  text: "Finalmente, el Estado se legitima por resultados y por procedimientos. Resultados: seguridad jurídica, provisión de bienes públicos, tutela de derechos, resolución imparcial de conflictos. Procedimientos: legalidad, publicidad, competencia y control, que hacen verificable cada decisión. Cuando los procedimientos son buenos, pero los resultados fallan, se exige corrección de políticas; cuando los resultados son atractivos, pero los procedimientos violan reglas, peligra la igualdad y se abre la puerta a la arbitrariedad. El Derecho, tal como lo aborda esta unidad, ofrece al profesional un cuadro de mando: indicadores de validez y eficacia que, aplicados caso por caso, sostienen la confianza social. En ese sentido, la teoría del Estado no es un capítulo decorativo, sino la gramática de toda actuación pública y el resguardo último de la libertad en común.",
                },
              ],
            },
            {
              id: "1.6.2",
              numbering: "6.2",
              title: "Población",
              content: [
                {
                  type: "paragraph",
                  text: "La población es el elemento esencial del Estado: sin destinatarios y titulares de derechos y deberes, hablar de organización jurídica carece de sentido. El material subraya que la pertenencia —nacionalidad y, en su caso, ciudadanía— delimita el círculo de quienes integran políticamente la comunidad y distingue lo propio de lo ajeno. Esta pertenencia no es un dato puramente biográfico: es una relación jurídica que se adquiere por nacimiento, naturalización u otros supuestos que cada ordenamiento define. Dicha relación activa un haz de derechos (protección consular, participación política, acceso a ciertos servicios) y de obligaciones (contribuir al gasto público, cumplir la ley, lealtad constitucional). A la par, el Estado reconoce y regula la situación de los extranjeros, garantizando estándares mínimos de trato y, de acuerdo con su Constitución y tratados, ampliando o restringiendo ciertas prerrogativas. El enfoque de la unidad, por tanto, combina teoría y práctica: comprender quién es ‘población’ para el Derecho permite determinar a qué normas queda sujeto un individuo y qué remedios puede activar frente a la autoridad.",
                },
                {
                  type: "paragraph",
                  text: "La distinción analítica entre Estado y nación ayuda a evitar confusiones. La nación remite a una comunidad cultural (lengua, historia, símbolos compartidos); el Estado, a la organización jurídico-política con competencias, órganos y territorio definidos. En contextos normales, Estado y nación se solapan en gran medida; en otros, no: existen Estados plurinacionales o naciones sin Estado. Para el operador jurídico, lo relevante es que los derechos y obligaciones positivos derivan de la pertenencia al Estado (nacionalidad/ciudadanía) y de la residencia efectiva, más allá de identidades culturales. De allí que decisiones como votar, ser elegible, acceder a cargos, o beneficiarse de ciertos programas dependan de calidades jurídicas verificables. En paralelo, el material llama a reconocer la dignidad de todas las personas: aun sin ciudadanía, nadie queda fuera del amparo de derechos fundamentales, cuya titularidad es universal, aunque su ejercicio pueda condicionarse a estatutos específicos previstos en la Constitución y los tratados.",
                },

                /* Acordeón 1 intercalado */
                {
                  type: "accordion",
                  header: "Pertenencia jurídica y efectos",
                  open: false,
                  text: "Nacionalidad (vínculo jurídico con el Estado) • Ciudadanía (estatus para participación política) • Extranjería (estatuto con derechos y límites). Cada calidad activa o restringe prerrogativas y cargas; todas están bajo el paraguas de derechos fundamentales.",
                },

                {
                  type: "paragraph",
                  text: "Desde la perspectiva de políticas públicas, la población es objeto de registros, censos y padrones que convierten a la persona en sujeto de derechos prestacionales y de obligaciones fiscales. Este componente técnico importa al Derecho por tres razones. Primera, la publicidad y confiabilidad de los registros impacta el ejercicio de derechos (p. ej., identidad, educación, salud). Segunda, la planeación territorial y presupuestaria depende de datos demográficos confiables; sin ellos, la igualdad ante la ley se vacía por falta de medios. Tercera, los padrones electorales aseguran la integridad del sufragio y la correcta representación. El marco constitucional exige que estos instrumentos respeten privacidad, finalidad y seguridad de los datos; además, deben ser auditables, con mecanismos para rectificar errores. En suma, la población es una categoría normativa y, a la vez, un dato gestionado institucionalmente; el equilibrio entre ambos planos —derechos y administración— define la calidad del Estado de Derecho.",
                },
                {
                  type: "paragraph",
                  text: "El estatus de las personas en movilidad —migrantes, refugiados, solicitantes de asilo— presenta desafíos específicos. Aunque su vínculo con el Estado receptor es distinto al de los nacionales, el bloque de constitucionalidad impone estándares de trato que prohíben discriminación y garantizan mínimos irrenunciables (vida, integridad, debido proceso). Las medidas de control migratorio deben superar tests de legalidad y proporcionalidad: fines legítimos, medios idóneos y necesarios, y balance que considere vulnerabilidad y unidad familiar. Este enfoque no es concesivo, sino técnico: un Estado fuerte respeta reglas aun en contextos de presión política. Para el profesional, esto implica conocer la red de normas internas y tratados para diseñar defensas eficaces y, al mismo tiempo, asesorar a la administración sobre políticas compatibilizables con derechos y con la seguridad pública.",
                },

                /* Acordeón 2 intercalado */
                {
                  type: "accordion",
                  header: "Checklist práctico (casos con ‘población’)",
                  open: false,
                  text: "1) Identifica la calidad jurídica (nacional, ciudadano, extranjero, apátrida). 2) Verifica fuentes (Constitución, leyes de nacionalidad/migración, tratados). 3) Determina derechos/cargas asociados. 4) Examina registros y pruebas documentales. 5) Aplica proporcionalidad a restricciones. 6) Elige vía idónea (administrativa, jurisdiccional, internacional).",
                },

                {
                  type: "paragraph",
                  text: "Finalmente, el material recuerda que la población no es masa indiferenciada: está compuesta por personas con igual dignidad y por grupos que, en ocasiones, requieren tutela reforzada para que la igualdad formal se vuelva sustantiva. Niñez, pueblos indígenas, personas con discapacidad, mujeres y diversidades requieren medidas específicas previstas en Constitución y tratados. Estas acciones no rompen el principio de igualdad; lo realizan, corrigiendo asimetrías fácticas que de otro modo perpetuarían la exclusión. En términos técnicos, el operador debe justificar por qué una medida diferenciada persigue fin constitucional, es idónea y necesaria, y mantiene un balance razonable entre beneficios y costos. El Estado, a su vez, debe rendir cuentas sobre resultados, no sólo sobre intenciones. Así, la categoría ‘población’ se conecta con la idea fuerte de ciudadanía: pertenecer a un Estado de Derecho es ser reconocido por él como sujeto de derechos y deberes en condiciones de igualdad y con vías efectivas para exigirlos.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión operativa: en todo asunto con dimensión ‘población’, arranca por la calidad jurídica de las personas involucradas y por el territorio donde actúan; reconstruye la cadena normativa aplicable (constitucional, legal, reglamentaria); y exige que cualquier diferenciación supere controles de legalidad y proporcionalidad. Esta metodología transforma etiquetas sociológicas en decisiones jurídicas exactas y evita reducciones moralistas o xenófobas. La mirada del curso es deliberadamente técnica y humanista: técnica, porque todo se somete a reglas verificables; humanista, porque el Estado existe para servir a las personas que lo integran —sin ellas, la arquitectura carece de sentido—.",
                },
              ],
            },
            {
              id: "1.6.3",
              numbering: "6.3",
              title: "Territorio",
              content: [
                {
                  type: "paragraph",
                  text: "El territorio es el ámbito espacial de validez del orden jurídico estatal. No es un mero fondo geográfico, sino la condición para que el Estado despliegue competencias, ejerza la coacción legítima y garantice derechos. El material lo presenta como conjunto integrado de suelo, subsuelo, aguas y el espacio correspondiente, con fronteras que fijan dónde inicia y termina la jurisdicción. Esta idea práctica permite traducir ‘territorio’ a preguntas operativas: ¿en qué lugar rige la norma?, ¿qué autoridad es competente aquí?, ¿puede una disposición local aplicarse fuera de su demarcación? La respuesta exige leer simultáneamente el texto constitucional (distribución de competencias), la legislación (ámbitos federal, estatal, municipal) y, cuando proceda, reglas de derecho internacional que condicionan actuaciones en zonas contiguas o compartidas. Sin una precisa determinación territorial, la legalidad se diluye: se aplican normas ajenas, se invaden competencias o se crean vacíos que minan la certeza.",
                },
                {
                  type: "paragraph",
                  text: "En clave de validez espacial, el curso insiste en distinguir categorías: normas ‘nacionales’ o ‘generales’ (que atraviesan niveles), ‘federales’ (para todo el país), ‘estatales’ o ‘locales’ y ‘municipales’. Cada etiqueta trae consecuencias en materia de competencia, procedimiento y control. A la vez, el territorio implica proyección vertical (suelo/subsuelo) y horizontal (fronteras, cuerpos de agua, vías de comunicación). Por ello, actividades como aprovechamientos, servicios públicos, obras y sanciones administrativas dependen de títulos normativos con cobertura territorial clara. Una técnica recurrente es verificar el domicilio del hecho, del sujeto y de la autoridad: según esa tríada, se elige la norma aplicable y el foro. Cuando concurren espacios (p. ej., transporte interestatal), la regla es coordinar competencias sin duplicar cargas ni dejar zonas grises. Este enfoque impide que los límites políticos se vuelvan obstáculos irracionales a la tutela efectiva.",
                },

                {
                  type: "accordion",
                  header: "Ámbitos de validez espacial (recordatorio)",
                  open: false,
                  text: "Nacional/general (atraviesa niveles) • Federal (todo el país) • Estatal/local • Municipal. Clave operativa: alinear el espacio del hecho, el del sujeto y el de la autoridad con la norma fuente.",
                },

                {
                  type: "paragraph",
                  text: "El territorio se relaciona con la idea de orden y seguridad. El Estado delimita y custodia fronteras, regula entradas y salidas, y fija estándares para circulación de bienes y personas. Esta función no habilita cualquier restricción: toda medida territorialmente fundada debe superar tests de legalidad y proporcionalidad. Además, el espacio es soporte de bienes públicos (calles, plazas, redes), patrimonio natural y cultural. Por eso, planeación, uso de suelo, impacto ambiental y gestión del agua son políticas jurídicas por excelencia: sin reglas espaciales predecibles no hay inversión responsable ni protección de comunidades. La clave es armonizar intereses locales y generales con procedimientos participativos y motivación reforzada.",
                },
                {
                  type: "paragraph",
                  text: "La territorialidad también condiciona la jurisdicción. Los tribunales conocen de asuntos ocurridos en su demarcación o con elementos de conexión previstos en la ley (domicilio de partes, lugar de cumplimiento, sede de la autoridad). En derecho sancionador, la competencia territorial evita arbitrariedades y foros de conveniencia; en lo civil y mercantil, asegura cercanía probatoria y economía procesal. En regulación, asigna responsabilidades: quien habilita una actividad debe poder vigilarla. Por ello, los conflictos de competencia espacial se resuelven con reglas claras y criterios de colaboración, no con vacíos que expongan al ciudadano a duplicidades o a indefensión.",
                },

                {
                  type: "image",
                  src: "https://imgv2-1-f.scribdassets.com/img/document/723617244/original/b33ef8c7f1/1?v=1g",
                  caption: "Validez espacial: del mapa al foro competente.",
                },

                {
                  type: "paragraph",
                  text: "En administración pública, el territorio organiza la prestación de servicios (agua, transporte, residuos, seguridad) y la recaudación. La coordinación intergubernamental (convenios, acuerdos de colaboración) permite atender fenómenos que desbordan límites políticos. La técnica exige: i) base legal para cooperar; ii) claridad de responsabilidades; iii) mecanismos de evaluación; iv) transparencia. Sin ello, la cooperación degenera en opacidad. Desde la perspectiva del ciudadano, el dato territorial se traduce en trámites, inspecciones y foros a los que puede acudir. La pedagogía del curso propone ejercicios de ‘mapa normativo’: ubica el hecho, su materia, los sujetos y el órgano; luego, enlaza con la norma vigente y el procedimiento aplicable.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión operativa: el territorio no es una nota pintoresca, es la primera línea de validez del Derecho. Antes de discutir fondo, prueba dónde rige la regla y quién puede aplicarla. Verifica si concurren espacios y, de ser así, activa la coordinación prevista. Documenta siempre la conexión territorial (hecho, sujeto, autoridad) para blindar tu caso. Esta disciplina evita nulidades por incompetencia, sanciones inválidas o, en la otra orilla, omisiones culpables que lesionan bienes públicos.",
                },

                {
                  type: "accordion",
                  header: "Errores frecuentes (y antídotos)",
                  open: false,
                  text: "• Aplicar norma local fuera de su demarcación → Verifica ámbito espacial.\n• Invadir competencia federal → Reconstruye distribución constitucional.\n• Duplicar sanciones por mismo hecho → Coordina foros y evita bis in idem.\n• Omitir prueba de conexión territorial → Acredita lugar del hecho/sujeto/autoridad.",
                },
              ],
            },
            {
              id: "1.6.4",
              numbering: "6.4",
              title: "Poder",
              content: [
                {
                  type: "paragraph",
                  text: "El poder, como elemento del Estado, es capacidad institucional para crear, aplicar y ejecutar normas. No se confunde con mera fuerza: es fuerza canalizada por reglas y controlada por contrapesos. El material subraya que, sin poder organizado, la legalidad sería retórica; con poder sin reglas, deviene arbitrariedad. La solución histórica ha sido distribuir funciones (legislar, administrar, juzgar), establecer competencias, fijar procedimientos y someter todo a la Constitución. Esta arquitectura impide concentraciones peligrosas y hace operables los derechos. En la vida práctica, el poder se reconoce por su capacidad de decisión con efectos generales e individuales: dicta leyes y reglamentos, resuelve casos, presta servicios, sanciona. La pregunta jurídica no es ‘si’ hay poder, sino ‘cómo’ se ejerce: ¿qué órgano?, ¿con qué fundamento?, ¿bajo qué forma?, ¿con qué límites?, ¿qué remedios tiene la persona afectada?",
                },
                {
                  type: "paragraph",
                  text: "La teoría contemporánea distingue poder constituyente (el que crea o reforma la Constitución) y poderes constituidos (que actúan conforme a ella). Los segundos se organizan clásicamente en funciones: legislativa (norma general y abstracta), ejecutiva/administrativa (gestiona, regula, presta y sanciona) y jurisdiccional (resuelve controversias mediante decisiones motivadas). A esta tríada se suman órganos constitucionales autónomos que profesionalizan funciones técnicas (electoral, transparencia, competencia económica, fiscalización). No se trata de ‘más poder’, sino de especialización controlada: reglas de nombramiento, duración, competencia y rendición de cuentas que disminuyen riesgos de captura partidista y mejoran la calidad de las decisiones. En conjunto, el esquema busca eficacia con límites.",
                },

                {
                  type: "accordion",
                  header: "Controles del poder (frenos y contrapesos)",
                  open: false,
                  text: "• Legalidad y jerarquía normativa • Publicidad y motivación • Control jurisdiccional (amparo, nulidad, constitucionalidad) • Control político (parlamento, auditorías) • Transparencia y rendición de cuentas • Participación ciudadana (consulta, acceso a información).",
                },

                {
                  type: "paragraph",
                  text: "El ejercicio del poder debe superar estándares. Primero, competencia: un órgano sólo puede hacer aquello para lo que está habilitado. Segundo, procedimiento: forma es garantía; los trámites no son formalismos vacíos, sino cauces para escuchar, probar y motivar. Tercero, proporcionalidad: toda injerencia en derechos debe ser idónea, necesaria y ponderada. Cuarto, finalidad: perseguir fines constitucionalmente legítimos, no objetivos ajenos al mandato. Quinto, no discriminación: trato igual para iguales y diferente para diferentes, con razones. Estos criterios convierten la autoridad en razón pública justificable. En su ausencia, el poder se deforma y pierde legitimidad.",
                },
                {
                  type: "paragraph",
                  text: "En administración, el poder se expresa en actos y reglamentos. Los primeros deciden casos concretos; los segundos ordenan situaciones generales. Ambos exigen base legal, competencia y motivación. En materia sancionadora, además, rigen garantías reforzadas: tipicidad, presunción de inocencia, debido proceso, non bis in idem. En servicios públicos, el poder se traduce en deberes de universalidad, continuidad y calidad. Estas pautas evitan que la discrecionalidad administrativa derive en arbitrariedad y otorgan al ciudadano un terreno claro para reclamar.",
                },

                {
                  type: "accordion",
                  header: "Errores comunes (y cómo evitarlos)",
                  open: false,
                  text: "• Confundir ‘conveniencia’ con legalidad → Exige base normativa.\n• Usar la fuerza como primera opción → Demuestra subsidiariedad.\n• Eludir procedimiento por urgencia → Documenta excepcionalidad y control posterior.\n• Motivación aparente → Expón hechos, normas y razones con enlace lógico.",
                },

                {
                  type: "paragraph",
                  text: "El poder jurisdiccional merece mención aparte: su legitimidad proviene de la independencia, de la imparcialidad y de la motivación reforzada. Juzgar no es administrar política pública, es resolver controversias con sujeción a derecho y proteger derechos frente a mayorías circunstanciales. La ejecución de sentencias completa el circuito: un fallo sin eficacia erosiona autoridad. De ahí la relevancia de medidas cautelares y de mecanismos de cumplimiento. Finalmente, el poder debe rendir cuentas: auditorías, informes, evaluación de desempeño y acceso a la información. Sin esa luz, el control es ilusorio. Para el profesional, el método es constante: reconstruir cadena normativa, examinar competencia y forma, escrutar razones y, si procede, activar remedios. La técnica convierte el poder en servicio.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión: el poder estatal se justifica cuando produce decisiones legales, motivadas, proporcionales y controlables que resuelven problemas públicos y protegen derechos. La teoría ofrece el mapa; el oficio, la brújula diaria para navegarlo sin confundir autoridad con autoritarismo ni eficacia con arbitrariedad.",
                },
              ],
            },
            {
              id: "1.6.5",
              numbering: "6.5",
              title: "Soberanía",
              content: [
                {
                  type: "paragraph",
                  text: "La soberanía nombra la autoridad última para decidir dentro del territorio y la independencia frente al exterior. Históricamente pensada como poder absoluto, el constitucionalismo la depuró: en el Estado de Derecho, la soberanía ‘reside’ en el pueblo y se ejerce por órganos constituidos conforme a la Constitución. Esta sustitución tiene efectos técnicos: ninguna autoridad por sí sola ‘encarna’ la soberanía; todas están limitadas por jerarquías normativas, procedimientos y controles. La noción contemporánea, por tanto, no legitima decisiones arbitrarias sino la capacidad de proveerse un orden propio compatible con los derechos. En el plano internacional, la soberanía implica igualdad jurídica de los Estados, no aislamiento: los vínculos voluntariamente asumidos (tratados) obligan y forman parte del bloque de constitucionalidad cuando así lo establece el orden interno. La clave es distinguir entre renuncia y ejercicio coordinado: la cooperación no abdica la soberanía; la actualiza.",
                },
                {
                  type: "paragraph",
                  text: "La soberanía tiene dos dimensiones: interna y externa. La primera asegura que, dentro del territorio, la autoridad última de decisión corresponde al orden constitucional; la segunda, que en el concierto internacional el Estado no está subordinado a otra voluntad, aunque se sujete a reglas que aceptó. Operativamente, la dimensión interna se traduce en supremacía constitucional: ninguna ley o acto puede contrariarla; la externa, en capacidad de celebrar tratados, establecer relaciones y resolver controversias por vías pacíficas. La jurisprudencia contemporánea ha precisado que, al incorporar tratados de derechos humanos, el Estado no pierde soberanía: cumple con su propio mandato constitucional de respetar y garantizar derechos. Así, la soberanía moderna no se mide por clausura, sino por su aptitud para articularse con un derecho internacional que robustece garantías internas.",
                },

                {
                  type: "accordion",
                  header: "Claves modernas de soberanía",
                  open: false,
                  text: "• Residencia popular y ejercicio por órganos constituidos • Supremacía constitucional (dimensión interna) • Autonomía e igualdad jurídica internacional (dimensión externa) • Cooperación mediante tratados sin abdicar competencias esenciales.",
                },

                {
                  type: "paragraph",
                  text: "En sistemas federales, la soberanía se descompone orgánicamente: la Constitución reparte competencias entre Federación y entidades federativas, reservando a la primera materias estratégicas (p. ej., comercio exterior) y a las segundas ámbitos locales. Esta distribución evita ‘soberanías’ paralelas y crea mecanismos de coordinación. El discurso correcto no contrapone entidad vs. Federación en abstracto, sino que pregunta por título competencial: ¿quién puede legislar o actuar aquí? En la práctica, los conflictos por invasión de esfera se resuelven ante tribunales constitucionales, que restablecen el pacto federal. El ciudadano gana cuando la competencia está clara: sabe a quién exigir servicios y ante quién impugnar decisiones.",
                },
                {
                  type: "paragraph",
                  text: "La soberanía no excusa violaciones de derechos. El Estado no puede invocar ‘asuntos internos’ para incumplir obligaciones convencionales que libremente aceptó. En el plano interno, ninguna ‘razón de Estado’ justifica desbordar la Constitución. Este límite no debilita al Estado: lo fortalece al obligarlo a justificar sus medidas ante estándares públicos y al blindar a la ciudadanía de arbitrariedades. En materia de seguridad, por ejemplo, la soberanía se ejerce mejor con controles: legalidad de detenciones, control judicial, proporcionalidad de la fuerza. Sin esos parámetros, el concepto se degrada en cobertura retórica de abusos.",
                },

                {
                  type: "accordion",
                  header: "Errores frecuentes (y correcciones)",
                  open: false,
                  text: "• Confundir soberanía con poder ilimitado → En constitucionalismo, todo poder está sujeto a la Constitución.\n• Creer que tratados ‘quitan’ soberanía → La cooperación es ejercicio, no cesión total.\n• Invocar ‘razón de Estado’ para violar derechos → Control judicial y bloque de constitucionalidad lo impiden.",
                },

                {
                  type: "paragraph",
                  text: "Desde la perspectiva ciudadana, la soberanía se vive como capacidad de autogobierno y de acceso a vías de control. Votar, ser elegido, participar y exigir información son manifestaciones del ‘poder del pueblo’ institucionalizado. En economía, soberanía se expresa en potestades tributarias y regulatorias que, sujetas a legalidad, orientan desarrollo y corrigen fallas de mercado. En cultura y territorio, se cuida patrimonio y diversidad bajo reglas públicas. Estas expresiones concretas exigen rendición de cuentas: la mejor defensa de la soberanía es un Estado que cumple la Constitución y respeta derechos.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión: la soberanía del constitucionalismo no es grito de independencia perpetuo, sino régimen de legalidad suprema que canaliza el poder popular y lo somete a controles, mientras coopera con otros Estados para proteger derechos. Para el operador jurídico, el mandamiento es doble: invocar soberanía para afirmar supremacía constitucional y competencia propia; rechazar su uso como coartada para el abuso.",
                },
              ],
            },
            {
              id: "1.6.6",
              numbering: "6.6",
              title: "La Constitución del Estado",
              content: [
                {
                  type: "paragraph",
                  text: "La Constitución es la norma fundamental que organiza el poder, distribuye competencias, reconoce derechos y establece procedimientos para crear y aplicar el Derecho. En el modelo del curso, ocupa la cúspide del sistema y, junto con los tratados que integran el bloque de constitucionalidad, fija el estándar de validez material y formal de leyes y actos. No es sólo ‘texto supremo’: es regla operativa diaria. Todo acto de autoridad debe fundarse y motivarse conforme a ella; toda ley debe ajustarse a sus límites; toda resolución judicial debe interpretarla y protegerla. Su supremacía se verifica a través de controles concentrados o difusos de constitucionalidad y de técnicas como la interpretación conforme y la proporcionalidad. Con ello, la Constitución deja de ser símbolo y se convierte en herramienta para resolver casos y orientar políticas públicas.",
                },
                {
                  type: "paragraph",
                  text: "La parte orgánica diseña el mapa del poder: forma de Estado (unitario/federal), forma de gobierno, órganos, competencias y procedimientos. La parte dogmática reconoce derechos y principios (dignidad, libertad, igualdad, seguridad jurídica) que actúan como límites y fines de toda actuación pública. Entre ambas, las cláusulas de reforma permiten actualizar el pacto bajo reglas agravadas, y los artículos transitorios gestionan la transición normativa (entrada en vigor, adecuaciones, vacatio legis). Esta ingeniería evita rupturas anárquicas y permite adaptar el sistema a nuevas realidades sin sacrificar continuidad. La técnica legislativa y judicial consiste en leer la Constitución como un todo armónico: cada pieza cobra sentido en relación con las demás.",
                },

                {
                  type: "accordion",
                  header: "Bloque de constitucionalidad (enfoque del curso)",
                  open: false,
                  text: "Constitución + tratados válidamente incorporados (especialmente en derechos humanos) forman parámetro de control. Consecuencia: leyes y actos deben ser compatibles con ambos, bajo jerarquía reconocida por el orden interno.",
                },

                {
                  type: "paragraph",
                  text: "El control constitucional traduce la supremacía en decisiones. Vías típicas: acciones y controversias constitucionales, amparo, control de convencionalidad y de legalidad reforzada. Estándares: competencia del órgano, forma debida, finalidad legítima, idoneidad, necesidad y proporcionalidad. Remedios: invalidación total o parcial, interpretación conforme, inaplicación al caso, medidas de reparación y garantías de no repetición. Lejos de ser ‘judicialización’ de la política, este control preserva el acuerdo básico y protege minorías frente a mayorías circunstanciales. Exige, eso sí, responsabilidad: motivaciones robustas, respeto a precedentes y evaluación de impactos.",
                },
                {
                  type: "paragraph",
                  text: "En la práctica, la Constitución guía políticas públicas. Sus mandatos de progresividad, igualdad sustantiva, transparencia, máxima publicidad y rendición de cuentas imponen tareas concretas a poderes y órganos autónomos. El presupuesto, por ejemplo, debe alinearse con derechos y fines constitucionales; la regulación debe ser proporcional; la sanción, legal y motivada. Dejar la Constitución en el discurso y no en el diseño produce ‘constitucionalismo retórico’. El curso promueve lo contrario: diagnósticos, metas e indicadores constitucionalmente informados.",
                },

                {
                  type: "image",
                  src: "https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__0f891923-dcfe-4a9b-9326-8424f7bcbed2&w=3840&q=100",
                  caption:
                    "Constitución: norma fundamental y parámetro de control.",
                },

                {
                  type: "paragraph",
                  text: "La reforma constitucional merece un apartado. Su función es permitir cambios de alto calado sin ruptura del orden. Por ello, suele requerir mayorías cualificadas y procedimientos deliberativos reforzados. El parámetro no es sólo numérico: también material (cláusulas pétreas o núcleos indisponibles en ciertos sistemas). En cualquier caso, la reforma no puede usarse para burlar derechos o destruir la separación de poderes bajo apariencia de legalidad. La pedagogía del curso propone evaluar toda reforma con tres filtros: necesidad (¿qué problema real resuelve?), adecuación (¿es el mejor medio constitucionalmente disponible?) y salvaguardas (¿qué controles y revisiones prevé?).",
                },
                {
                  type: "paragraph",
                  text: "Conclusión operativa: frente a cualquier caso, reconstruye la cadena constitucional (competencia, forma, derechos, principios), verifica vigencia y trata de maximizar eficacia de derechos mediante interpretación conforme y proporcionalidad. Si una ley o acto colisiona con el bloque de constitucionalidad, activa el control con motivación sólida y remedios adecuados. La Constitución no es corsé; es guía para decidir con razones públicas y para exigir cuentas a quien ejerce el poder.",
                },

                {
                  type: "accordion",
                  header: "Checklist rápido de control constitucional",
                  open: false,
                  text: "1) Identifica parámetro (Constitución + tratados). 2) Reconstruye cadena (competencia, forma, finalidad). 3) Aplica test de proporcionalidad si hay derechos en juego. 4) Elige remedio (invalidez, inaplicación, interpretación conforme, reparación). 5) Evalúa impactos y seguimiento.",
                },
              ],
            },
          ],
        },

        /* 7.- DERECHO PÚBLICO Y PRIVADO. */
        {
          id: "1.7",
          numbering: "7",
          title: "Derecho público y privado",
          content: [
            {
              type: "paragraph",
              text: "Esta unidad ubica un mapa operativo para distinguir entre Derecho público, Derecho privado y la vertiente social. Aunque cierta doctrina contemporánea —como refiere Pereznieto— relativiza la utilidad teórica de la dicotomía público/privado por su origen decimonónico, el propio material reconoce que la práctica mexicana sigue empleándola como criterio de organización del sistema y de tramitación de asuntos. La razón es instrumental: según la familia jurídica en que caiga el caso, cambian la competencia, el procedimiento, las cargas probatorias y los estándares de control (de legalidad estricta a proporcionalidad reforzada). Por ello, aquí no se discute en abstracto la perfección de la distinción, sino su rendimiento práctico: te permitirá decidir con rapidez si estás ante un litigio en el que el poder público comparece como parte con potestades propias, o si se trata de relaciones entre particulares regidas por autonomía de la voluntad; y, además, reconocer cuándo la Constitución demanda una protección reforzada por desigualdades materiales. Este enfoque evita confusiones metodológicas (pedir a un juez contencioso que resuelva lo que corresponde a un civil, o viceversa) y ordena el razonamiento desde el inicio del caso.",
            },
            {
              type: "paragraph",
              text: "En la clave del material, el **Derecho público** se perfila cuando el Estado (cualquiera de sus poderes u órganos) interviene como parte en una relación jurídica para tutelar intereses generales. No basta que exista ‘interés público’ difuso; la nota decisiva es la comparecencia del poder público con potestades y límites propios del ius publicum: legalidad estricta, competencia reglada, finalidad constitucional, motivación suficiente y control jurisdiccional. De allí se despliegan ramas como la constitucional, administrativa, penal, procesal, financiera, tributaria y electoral. Cada una expresa un modo distinto de ejercicio y control del poder (crear normas generales, prestar servicios, sancionar, organizar la sucesión del gobierno). Operativamente, identificar que un conflicto es de Derecho público te orienta a foros contenciosos administrativos, de amparo o penales, a estándares más intensos de justificación (proporcionalidad) y a remedios que incluyen nulidad, inaplicación, invalidez o medidas cautelares. El error típico es confundir ‘conveniencia administrativa’ con legalidad: la primera no sustituye a la segunda.",
            },
            {
              type: "paragraph",
              text: "El **Derecho privado** regula las relaciones entre particulares, bajo un régimen de igualdad formal y con la autonomía de la voluntad como principio rector dentro de los límites del orden público y las buenas costumbres. En este campo, el Estado no desaparece, pero su papel predominante es proveer jurisdicción y ejecutar decisiones. Ramas paradigmáticas son el civil (con su desglose contemporáneo en obligaciones y familia), el mercantil, el societario/corporativo, el concursal, el ambiental —en su faceta de responsabilidad privada— y el internacional privado. El método cambia: la clave es reconstruir la fuente obligacional (contrato, hecho ilícito, enriquecimiento sin causa), precisar capacidad y consentimiento, identificar objeto y causa, y demostrar el cumplimiento/incumplimiento conforme a estándares probatorios propios. Los remedios también son distintos: cumplimiento, resolución, indemnización, restitución, medidas precautorias. Clasificar correctamente evita intentar someter relaciones privadas a potestades públicas que no corresponden o, a la inversa, tratar actos de autoridad como si fueran meras declaraciones de voluntad.",
            },
            {
              type: "paragraph",
              text: "La **vertiente social** (agrario, laboral, seguridad social) surge —como explica el material— para corregir asimetrías materiales que vuelven ilusoria la igualdad formal. Aquí el sistema reconoce que una de las partes se encuentra en desventaja estructural y, por ello, activa reglas de tutela reforzada: principios pro persona, estabilidad en el empleo, inversión de cargas probatorias en ciertos supuestos, irrenunciabilidad de derechos mínimos, procedimientos especializados y jurisdicciones propias. No se trata de ‘privilegios’, sino de condiciones para que la libertad y la igualdad sean efectivas. Detectar que un caso pertenece a esta familia cambia el parámetro de control y los foros competentes, así como el lenguaje de los remedios (reinstalación, pensiones, prestaciones, restitución de tierras, medidas de seguridad social). En síntesis, la categoría social complementa la dicotomía clásico-liberal con una lectura constitucional de justicia material aplicable a colectivos históricamente vulnerables.",
            },
            {
              type: "paragraph",
              text: "Metodológicamente, la unidad propone un **árbol de decisión**. Paso 1: ¿comparece el poder público como parte ejerciendo potestades? Si sí, estás en público; si no, avanza. Paso 2: ¿se trata de relaciones entre particulares con simetría razonable? Probable privado. Paso 3: ¿existe una asimetría estructural reconocida por la Constitución o las leyes que active tutelas reforzadas? Entonces estás en la vertiente social. Cualquiera que sea la respuesta, comprueba: i) fuente normativa aplicable (Constitución, ley, reglamento o norma individualizada); ii) competencia del foro; iii) procedimiento; iv) estándar de prueba y de motivación; y v) remedio idóneo. Esta técnica evita “zonas grises” por simple intuición y reduce fricción institucional. Además, prepara el terreno para la Unidad 8 (ramas) y la Unidad 9 (conceptos fundamentales), que desagregan y operativizan esta cartografía en foros concretos, acciones puntuales y vocabulario técnico verificable.",
            },

            /* Acordeón con tres niveles */
            {
              type: "accordion",
              header: "Nivel 1 — Conceptual: mapa rápido",
              open: false,
              text: "Público: el Estado es parte y ejerce potestades; límites: legalidad, competencia, motivación, proporcionalidad.\nPrivado: relaciones entre particulares; eje: autonomía de la voluntad dentro del orden público.\nSocial: tutela reforzada por asimetrías; principios pro persona y jurisdicciones especializadas.",
            },
            {
              type: "accordion",
              header: "Nivel 2 — Analítico: preguntas guía",
              open: false,
              text: "¿Quiénes son las partes? ¿Hay órgano público actuando como tal?\n¿Qué fin constitucional persigue la medida o el contrato?\n¿El caso requiere tutela reforzada (laboral, agraria, seguridad social)?\n¿Qué foro es competente y qué procedimiento rige?\n¿Cuál es el estándar de prueba y de motivación?",
            },
            {
              type: "accordion",
              header: "Nivel 3 — Aplicado: microcasos",
              open: false,
              text: "• Multa municipal a comercio: público → revisa competencia, procedimiento y proporcionalidad.\n• Incumplimiento de contrato mercantil: privado → prueba fuente obligacional y daño.\n• Despido injustificado: social → principios protectores, carga probatoria y reinstalación/indemnización.",
            },
          ],
          subthemes: [
            {
              id: "1.7.1",
              numbering: "7.1",
              title: "Tesis sobre la diferencia entre lo público y lo privado",
              content: [
                {
                  type: "paragraph",
                  text: "El material reconoce el debate doctrinal contemporáneo sobre la dicotomía público/privado —Pereznieto la juzga decimonónica—, pero advierte que en México sigue siendo un **criterio organizador operativo** del sistema y de la tramitación de casos. No es una etiqueta vacía: ubicar un conflicto en una u otra familia altera competencias, procedimientos, estándares de control y remedios. Por ello, esta unidad no discute si la bipartición es ‘filosóficamente perfecta’; parte de un realismo metodológico: **sirve** para decidir mejor. El punto de partida es distinguir cuándo el Estado comparece como parte con potestades propias (ius publicum) y cuándo se trata de relaciones entre particulares regidas por autonomía de la voluntad, con una tercera vertiente —social— que asume asimetrías materiales. Este mapa no clausura la crítica; la orienta. En la práctica, tu primera tarea es formular una pregunta binaria: ¿hay poder público actuando como tal? Si la respuesta es afirmativa, te mueves en público; si no, exploras privado o social según el grado de desigualdad estructural reconocido por la Constitución y la ley.",
                },
                {
                  type: "paragraph",
                  text: "Con ese prisma, el texto presenta tres tesis. **Primera**: el Derecho público exige legalidad estricta, competencia reglada, finalidad constitucional, publicidad y motivación; no basta el ‘interés público’ en abstracto: debe haber autoridad actuando como parte con potestades y límites específicos. **Segunda**: el Derecho privado ordena relaciones entre particulares bajo la igualdad formal y la autonomía de la voluntad dentro del orden público y las buenas costumbres; el Estado provee jurisdicción y ejecuta sentencias. **Tercera**: el Derecho social reconoce desigualdades estructurales y activa tutelas reforzadas (laboral, agrario, seguridad social). Estas tesis son instrumentales: cada una enciende **foros** y **parámetros** distintos. Confundirlas genera nulidades, vías improcedentes o estándares de prueba equivocados. La lección es inequívoca: clasificar bien no es academicismo; es prudencia profesional.",
                },

                {
                  type: "accordion",
                  header: "Enfoque del curso sobre la distinción",
                  open: false,
                  text: "• No se absolutiza la bipartición; se usa con fines operativos. • ‘Público’: el Estado actúa como parte y ejerce potestades. • ‘Privado’: relaciones entre particulares con autonomía de la voluntad. • ‘Social’: tutela reforzada por asimetrías. • El mapa define foro, procedimiento, estándar de control y remedios.",
                },

                {
                  type: "paragraph",
                  text: "En **Derecho público**, la unidad subraya que el gobierno comparece buscando proteger intereses generales y que su actuación está atada a reglas de validez y control (legalidad, competencia, proporcionalidad). Las ramas paradigmáticas —constitucional, administrativa, penal, procesal, financiera, tributaria y electoral— expresan funciones distintas: crear normas generales, prestar servicios, sancionar, arbitrar la sucesión del poder. El operador debe reconstruir la cadena normativa (Constitución→ley→reglamento→acto), verificar competencia y procedimiento, y justificar coacción bajo test de idoneidad, necesidad y balance. La **motivación** no es ritual: es el puente entre norma y hecho que legitima la decisión. Sin ella, la fuerza pierde respaldo jurídico.",
                },

                {
                  type: "image",
                  src: "https://i.ytimg.com/vi/JN7ftznLDvM/maxresdefault.jpg",
                  caption:
                    "Público vs. privado: mapa visual de familias jurídicas (recurso del módulo).",
                },

                {
                  type: "paragraph",
                  text: "En **Derecho privado**, la clave es reconstruir la **fuente obligacional** (contrato, hecho ilícito, enriquecimiento sin causa), capacidad y consentimiento, objeto y causa lícitos, así como el régimen de responsabilidad y prueba. Los remedios —cumplimiento, resolución, indemnización, restitución, medidas precautorias— se activan con estándares propios y foros ordinarios civiles o mercantiles. Aquí el Estado no desaparece, pero su papel es principalmente jurisdiccional. Por contraste, en **Derecho social** la regla es protectora: irrenunciabilidad de mínimos, inversión de cargas probatorias en supuestos, estabilidad y prestaciones. No es un ‘favor’ legislativo, sino un **mandato constitucional** que corrige asimetrías reales para que la igualdad sea efectiva. Leer un conflicto con estas lentes evita exigir potestades públicas en lo que es autonomía privada, o viceversa.",
                },
                {
                  type: "paragraph",
                  text: "El material invita a reconocer **zonas porosas** (servicios públicos concesionados, sociedades de economía mixta, contratación pública, responsabilidad del Estado) donde confluyen lógicas pública y privada. Allí la prudencia consiste en identificar el **rol** con que actúa cada parte y el **tramo** normativo que rige cada fase (formación del vínculo, ejecución, sanción, solución de controversias). La técnica es modular: unas etapas son públicas (procedimiento, competencia, transparencia) y otras privadas (riesgos contractuales, remedios patrimoniales). Este análisis evita que la etiqueta ‘interés público’ desplace garantías privadas o que la ‘autonomía’ pretenda neutralizar límites constitucionales.",
                },

                {
                  type: "accordion",
                  header: "Árbol de decisión (operativo)",
                  open: false,
                  text: "1) ¿El Estado actúa como parte con potestades? → Público. 2) Si no, ¿hay relación entre particulares con simetría? → Privado. 3) Si no, ¿existe asimetría estructural tutelada (laboral, agrario, seguridad social)? → Social. Verifica siempre: foro, procedimiento, estándar y remedio.",
                },

                {
                  type: "paragraph",
                  text: "Conclusión de 7.1: la distinción público/privado, complementada por la vertiente social, es **herramienta** de lectura y no dogma. Funciona porque produce decisiones mejores: elige foros competentes, fija parámetros de control y alinea remedios con fines constitucionales. Al operador serio le exige tres hábitos: (i) clasificar antes de litigar; (ii) justificar con normas, hechos y razones; y (iii) ajustar su estrategia cuando identifica asimetrías o confluencias de lógicas. Esta competencia es la puerta de entrada a la Unidad 8 (ramas) y prepara el terreno para aplicar los conceptos fundamentales de la Unidad 9 a casos reales.",
                },
              ],
            },
            {
              id: "1.7.2",
              numbering: "7.2",
              title: "Conclusiones",
              content: [
                {
                  type: "paragraph",
                  text: "El cierre de la unidad es deliberado: **conservar** la distinción público/privado —y añadir la vertiente social— no es nostalgia, es eficacia institucional. Aunque Pereznieto cuestione su pedigree decimonónico, la práctica mexicana demuestra que el mapa funciona porque **modula** competencias, procedimientos y estándares. Si el Estado comparece como parte con potestades, rige un parámetro de legalidad estricta y proporcionalidad reforzada; si no, el caso se somete a reglas de autonomía privada o a tutela social. Esta no es una decisión estética; define derechos de audiencia, cargas probatorias, tipos de prueba, vías de impugnación y clases de remedios. Por eso, abandonar la bipartición sin reemplazo operativo sería desarmar al foro; mantenerla críticamente nos da un **lenguaje común** para decidir con rigor.",
                },
                {
                  type: "paragraph",
                  text: "La primera conclusión es metodológica: **clasificar antes de argumentar**. El orden correcto no es ‘tesis y luego hechos’, sino ‘hechos→clasificación→tesis’. La clasificación proporciona un esqueleto: foro competente, norma fuente, procedimiento y estándar. Ubicado el esqueleto, la argumentación se vuelve concreta: ¿qué control aplica?, ¿qué prueba necesito?, ¿qué remedio procede? Esto evita el decisionismo y las generalidades moralistas. La segunda conclusión es ética pública: en lo **público**, la motivación y la transparencia no son trámites; son garantías de ciudadanía. En lo **privado**, la buena fe y la protección de la confianza legitiman la autonomía. En lo **social**, la igualdad sustantiva manda. Estas brújulas sostienen la **legitimidad** de las decisiones.",
                },

                {
                  type: "accordion",
                  header: "Guía rápida de cierre",
                  open: false,
                  text: "• Público: autoridad como parte + legalidad estricta + proporcionalidad. • Privado: autonomía con límites + remedios patrimoniales. • Social: tutela reforzada. • Siempre: foro, procedimiento, prueba y remedio acordes.",
                },

                {
                  type: "paragraph",
                  text: "La tercera conclusión es institucional: la distinción ordena **políticas públicas** y **diseño regulatorio**. En sectores híbridos (contratación pública, APP, servicios concesionados), conviene separar fases: licitación (pública), ejecución contractual (privada con cláusulas administrativas), sanción (pública), solución de controversias (mixta, según cláusulas y control judicial). Esta ingeniería de fases reduce litigiosidad improductiva y mejora resultados. En el ámbito jurisdiccional, identificar si un conflicto es público, privado o social evita foros erróneos y desperdicio probatorio; en el académico, da un marco para enseñar técnica argumentativa anclada en consecuencias verificables.",
                },
                {
                  type: "paragraph",
                  text: "La cuarta conclusión es garantista: **ninguna** de las tres familias excusa violaciones de derechos. En lo público, la ‘razón de Estado’ no deroga la Constitución; en lo privado, la autonomía no legitima cláusulas abusivas; en lo social, la tutela no avala privilegios injustificados. El parámetro último es el **bloque de constitucionalidad**: Constitución y tratados que orientan contenido, límites y remedios. Aplicar esta premisa evita que la clasificación se convierta en coartada para el abuso o en retórica para eludir responsabilidades. El profesional competente ancla siempre su análisis en el parámetro constitucional y convenido.",
                },

                {
                  type: "accordion",
                  header: "Errores a evitar (y correcciones)",
                  open: false,
                  text: "• Confundir ‘interés público’ con ‘Derecho público’ → Debe haber autoridad actuando como parte con potestades. • Tramitar privado como contencioso o viceversa → Verifica foro y competencia. • Ignorar vertiente social → Revisa asimetrías y principios protectores. • Olvidar bloque de constitucionalidad → Controla legalidad y derechos.",
                },

                {
                  type: "paragraph",
                  text: "La quinta conclusión es pedagógica: el mapa público/privado/social **facilita el aprendizaje estratégico**. Permite construir casos desde un guion uniforme: (i) identificar partes y rol estatal; (ii) clasificar la relación; (iii) seleccionar norma fuente y foro; (iv) fijar estándar probatorio; (v) anticipar remedios. Con esa rutina, el alumno transforma teoría en oficio. Además, la distinción invita a una **cultura de razones públicas**: toda decisión debe mostrar su encuadre, su justificación y su efecto práctico. La consistencia entre mapa, razones y efectos es la marca de calidad del operador jurídico.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión final: mantener la distinción —con espíritu crítico— es el mejor **punto de apoyo** para avanzar al estudio de las **ramas del Derecho** (Unidad 8) y para aplicar los **conceptos fundamentales** (Unidad 9). El objetivo no es etiquetar por etiquetar, sino **resolver** mejor: foros adecuados, procedimientos correctos, estándares precisos y remedios eficaces. Ese es el compromiso del curso: teoría al servicio de decisiones públicas y privadas que sean legales, justificadas y útiles para la comunidad.",
                },
              ],
            },
          ],
        },

        /* 8.- RAMAS DEL DERECHO. */
        {
          id: "1.8",
          numbering: "8",
          title: "Ramas del Derecho",
          content: [
            {
              type: "paragraph",
              text: "Esta unidad organiza el vasto territorio del Derecho en un mapa funcional de ramas, directamente derivado de la distinción entre lo público, lo privado y la vertiente social. El propósito no es memorizar listados, sino convertirlos en una brújula operativa para elegir foro competente, procedimiento, estándar de prueba y remedios. Clasificar por ramas permite pasar de nociones generales (Estado de Derecho, familias del Derecho) a ámbitos concretos de actuación: constitucional, administrativo, penal o electoral cuando el poder público comparece como parte; civil, mercantil, societario, concursal, ambiental o internacional privado cuando se trata de relaciones entre particulares; y agrario, laboral o seguridad social cuando el orden reconoce asimetrías materiales y despliega tutela reforzada. Esta cartografía, presentada en el material del módulo, evita el error frecuente de tramitar un asunto en la vía equivocada o con el parámetro de control inadecuado. El rendimiento pedagógico es claro: al leer un caso, identificas el rol de las partes y, con ello, ubicas la rama que gobierna el problema, el conjunto de fuentes predominantes y el lenguaje técnico que ordena la argumentación, desde la prueba hasta el tipo de sentencia esperable.",
            },
            {
              type: "paragraph",
              text: "Las ramas del **Derecho público** despliegan el ejercicio y control del poder: el **Derecho constitucional** interpreta el texto y los principios de la organización política; el **administrativo** regula la actividad de la administración y su vínculo con particulares (servicios, licencias, sanciones); el **internacional público** ordena la relación entre Estados y organismos; el **penal** define ilícitos y penas bajo estricta legalidad; el **procesal** garantiza el ‘cómo’ del poder mediante procedimientos y debido proceso; el **financiero** disciplina el gasto público; el **tributario** estructura la recaudación y reacción ante incumplimientos; y el **electoral** norma la sucesión del poder. El hilo común es doble: finalidad pública y potestades sujetas a legalidad, competencia, motivación y proporcionalidad. Cada rama tiene remedios propios (nulidad, amparo, invalidez, sanciones, medidas cautelares) y estándares de control diferenciados. Reconocerla a tiempo ordena la estrategia: qué órgano es competente, qué pruebas son pertinentes, qué límites constitucionales encuadran la decisión y qué vías proceden para impugnar o ejecutar.",
            },
            {
              type: "paragraph",
              text: "En **Derecho privado**, el Estado funge principalmente como proveedor de jurisdicción mientras rigen la autonomía de la voluntad y la igualdad formal, dentro de los límites del orden público. El **Derecho civil** cubre persona, familia y patrimonio; por su amplitud contemporánea, conviene abordarlo en dos ejes operativos: obligaciones y familia. El **mercantil** regula actos de comercio y sujetos especializados (incluye títulos de crédito y banca); el **societario/corporativo** atiende la vida de las compañías; el **concursal** gestiona insolvencias con reglas y foros propios; el **ambiental**, en su faceta privada, estructura responsabilidad y reparación de daños; y el **internacional privado** resuelve conflictos de leyes y jurisdicciones cuando el caso conecta varios ordenamientos. Aquí el método técnico arranca por identificar la fuente obligacional (contrato, hecho ilícito, enriquecimiento sin causa), capacidad y consentimiento, objeto y causa lícitos, para después seleccionar remedios típicos (cumplimiento, resolución, indemnización, restitución, medidas precautorias). Elegir correctamente la rama depura la discusión y evita invocar potestades públicas donde no existen.",
            },
            {
              type: "paragraph",
              text: "El **Derecho social** aparece cuando la igualdad formal no basta y el orden jurídico reconoce asimetrías estructurales. El **agrario** protege la tenencia y aprovechamiento de la tierra rural con reglas especiales y órganos competentes; el **laboral** tutela la relación trabajo–patrón mediante principios protectores (irrenunciabilidad de mínimos, estabilidad, seguridad e higiene, carga probatoria modulada); y el **Derecho de seguridad social** asegura prestaciones vinculadas al bienestar (salud, pensiones, riesgos de trabajo), con esquemas contributivos y solidarios. Estas ramas ajustan el parámetro de control y los remedios: reinstalación, prestaciones económicas, reconocimiento de derechos agrarios, pensiones, medidas de prevención y corrección. Leídas operativamente, no conceden privilegios arbitrarios; realizan mandatos constitucionales de justicia material. Por eso, la clave es detectar desde el inicio si concurre un supuesto de tutela reforzada: la rama social no ‘decora’ el sistema; lo hace efectivo para colectivos históricamente vulnerables.",
            },
            {
              type: "paragraph",
              text: "Para **navegar** el mapa de ramas, el material sugiere un método replicable: (1) identifica el rol estatal: ¿hay autoridad actuando como parte con potestades? Si sí, probablemente estás en público; (2) si son particulares en simetría, explora privado; (3) si hay asimetría reconocida, activa la rama social correspondiente. Luego, (4) verifica la **fuente** aplicable (Constitución/tratado, ley, reglamento, norma individualizada), (5) el **foro** competente, (6) el **procedimiento** y (7) el **remedio** idóneo. En sectores híbridos (concesiones, APP, contratación pública), separa **fases**: licitación y sanción bajo lógicas públicas; ejecución contractual con técnicas privadas moduladas por cláusulas administrativas y control judicial. Así, la clasificación de ramas deja de ser taxonomía pasiva para convertirse en ingeniería de decisiones verificables. El resultado práctico es ahorro de tiempo, claridad argumentativa y mayor probabilidad de obtener resoluciones útiles y legítimas para las personas implicadas.",
            },

            /* Acordeón con tres niveles */
            {
              type: "accordion",
              header: "Nivel 1 — Mapa de ramas",
              open: false,
              text: "Público: constitucional, administrativo, internacional público, penal, procesal, financiero, tributario, electoral. Privado: civil (obligaciones y familiar), mercantil, societario/corporativo, concursal, ambiental, internacional privado. Social: agrario, laboral, seguridad social.",
            },
            {
              type: "accordion",
              header: "Nivel 2 — Preguntas guía",
              open: false,
              text: "¿El Estado actúa como parte con potestades? ¿Existe asimetría que active tutela reforzada? ¿Qué foro es competente? ¿Cuál es la fuente predominante (Constitución/ley/reglamento/acto)? ¿Qué estándar de control aplica (legalidad, proporcionalidad, buena fe, protección reforzada)? ¿Qué remedio es coherente con la rama?",
            },
            {
              type: "accordion",
              header: "Nivel 3 — Aplicado: microcasos",
              open: false,
              text: "• Clausura municipal de un negocio: rama pública (administrativo→nulidad/amparo; proporcionalidad). • Incumplimiento de suministro entre empresas: rama privada (mercantil→cumplimiento/daños; prueba del contrato y del incumplimiento). • Despido injustificado: rama social (laboral→reinstalación/indemnización; carga probatoria modulada).",
            },
          ],
          subthemes: [
            {
              id: "1.8.1",
              numbering: "8.1",
              title: "Ramas del Derecho Público",
              content: [
                {
                  type: "paragraph",
                  text: "El Derecho público reúne las ramas en las que el Estado comparece como parte y ejerce potestades para proteger intereses generales. El material destaca ocho ámbitos: constitucional, administrativo, internacional público, penal, procesal, financiero, tributario y electoral. Este mapa no es un listado enciclopédico, sino una guía para decidir con precisión foro, procedimiento y remedios. En todas estas ramas rige la legalidad estricta: las autoridades sólo pueden hacer lo que la norma permite, con competencia, forma y motivación suficientes. Por eso el método inicia siempre con la reconstrucción de la cadena normativa (Constitución y tratados, leyes ordinarias o generales, reglamentos y actos). El parámetro de control se intensifica cuando hay derechos en juego: proporcionalidad, debido proceso y publicidad. El operador jurídico que identifica de inmediato la rama pública correcta evita nulidades por incompetencia, logra medidas cautelares oportunas y sustenta sus pretensiones en razones públicas verificables. Esta unidad convierte el catálogo de materias en una brújula práctica para litigar, asesorar y diseñar políticas, alineando la finalidad constitucional con decisiones que sean legales, justificadas y útiles para la comunidad.",
                },
                {
                  type: "paragraph",
                  text: "El Derecho constitucional está en la cúspide del sistema y funge como parámetro de validez material y formal. Interpreta el texto supremo y los principios que organizan el poder y reconocen derechos, incluidas las reglas de reforma y los transitorios que administran el cambio. Su función práctica es doble: (i) controlar que leyes y actos respeten la Constitución (acciones, controversias, amparo) y (ii) orientar la actuación de todas las autoridades bajo principios de motivación reforzada y proporcionalidad. En asuntos de libertad de expresión, igualdad o seguridad jurídica, por ejemplo, la pregunta no es si la medida ‘parece conveniente’, sino si supera un test estructurado: finalidad constitucional, idoneidad, necesidad y balance. La lectura contemporánea incorpora el “bloque de constitucionalidad” cuando el orden interno reconoce rango superior a ciertos tratados, con consecuencias directas en el parámetro de control. Así, el constitucional no es una rama meramente teórica; fija el estándar que las demás deben obedecer y suministra técnicas de corrección (invalidez, inaplicación, interpretación conforme) para asegurar que la legalidad sea compatible con los derechos.",
                },

                {
                  type: "accordion",
                  header: "Mapa express de ramas públicas",
                  open: false,
                  text: "Constitucional (parámetro y control) • Administrativo (actividad y sanción) • Internacional público (relaciones entre Estados) • Penal (ius puniendi) • Procesal (garantías del ‘cómo’) • Financiero (gasto) • Tributario (ingresos) • Electoral (sucesión del poder).",
                },

                {
                  type: "paragraph",
                  text: "El Derecho administrativo regula la actividad cotidiana del Estado: prestación de servicios, otorgamiento de licencias y concesiones, inspección y sanción. Exige base legal, competencia y procedimiento; además, publicidad y motivación que enlacen hechos, normas y razones. Sus remedios típicos son la nulidad y las medidas cautelares para evitar daños de difícil reparación. Cuando la administración sanciona, se activan garantías reforzadas: tipicidad, presunción de inocencia, debido proceso y non bis in idem. En paralelo, el Derecho internacional público fija reglas para la relación entre Estados: tratados, responsabilidad internacional, solución pacífica de controversias. Su relevancia práctica aumentó con la recepción interna de estándares convencionales —sobre todo en derechos humanos— que, al incorporarse al parámetro constitucional, moldean el contenido y los límites de las actuaciones administrativas y legislativas. La coordinación entre ambos planos (interno e internacional) evita choques normativos y fortalece la credibilidad del ordenamiento.",
                },

                {
                  type: "image",
                  src: "https://lahumanaquelegisla.wordpress.com/wp-content/uploads/2016/02/bloque-iv-derecho-i-3-728.jpg",
                  caption:
                    "Panorama de ramas del Derecho (recurso general del módulo).",
                },

                {
                  type: "paragraph",
                  text: "El Derecho penal concentra el ius puniendi: define delitos y penas bajo estricta legalidad y prohíbe sancionar sin ley previa. Su legitimidad depende del debido proceso, la presunción de inocencia y la proporcionalidad de las penas. La rama procesal, por su parte, es la ingeniería del ‘cómo’: procedimientos, plazos, medios de prueba, recursos y ejecución. Actúa como garantía transversal que obliga a todas las autoridades a respetar la forma, porque en Derecho forma es garantía. El operador debe dominar medidas cautelares, estándares probatorios y reglas de valoración de la prueba; un caso ganado con mala forma es un caso perdido en la siguiente instancia. Juntas, las ramas penal y procesal preservan el equilibrio entre eficacia y límites al poder, evitando que la seguridad pública erosione la libertad.",
                },
                {
                  type: "paragraph",
                  text: "Financiero, tributario y electoral completan el bloque. El financiero disciplina el gasto público: programación, presupuestación, ejercicio, control y evaluación con transparencia y rendición de cuentas. El tributario ordena los ingresos: creación de contribuciones por autoridad competente, con legalidad estricta, proporcionalidad y equidad; además regula la reacción frente al incumplimiento. El electoral normativiza la sucesión periódica del poder y la competencia política: derechos de votar y ser votado, financiamiento y fiscalización, reglas de campaña, organización de elecciones y calificación de resultados, generalmente por órganos constitucionales autónomos. En estas tres ramas la motivación y la publicidad son decisivas: sin razones ni luz pública, el gasto se opaca, los tributos devienen confiscatorios de facto y la representación pierde legitimidad. El profesional traduce estas exigencias en auditorías, impugnaciones y defensas eficaces.",
                },

                {
                  type: "accordion",
                  header: "Checklist operativo (ramas públicas)",
                  open: false,
                  text: "1) Reconstruye cadena normativa (Constitución/tratado→ley→reglamento→acto). 2) Verifica competencia y forma. 3) Aplica proporcionalidad si hay derechos. 4) Elige remedio idóneo (nulidad, amparo, invalidez). 5) Documenta hechos y motivación. 6) Controla publicidad y rendición de cuentas.",
                },
              ],
            },
            {
              id: "1.8.2",
              numbering: "8.2",
              title: "Ramas del Derecho Privado",
              content: [
                {
                  type: "paragraph",
                  text: "El Derecho privado regula relaciones entre particulares bajo igualdad formal y autonomía de la voluntad, dentro de los límites del orden público y las buenas costumbres. Su lógica cambia la técnica del operador: la autoridad aparece, sobre todo, como proveedora de jurisdicción; el objeto del proceso es reconstruir fuentes obligacionales y hechos para asignar consecuencias patrimoniales y personales. El material organiza esta familia en civil (con el desglose contemporáneo en obligaciones y familiar), mercantil, societario/corporativo, concursal, ambiental (en su vertiente de responsabilidad privada) e internacional privado. Cada rama posee foros, cargas probatorias y remedios característicos (cumplimiento, resolución, indemnización, restitución, medidas precautorias). En la práctica, clasificar bien significa evitar traer potestades públicas a un terreno donde rigen pactos, títulos y responsabilidad subjetiva/objetiva, y, a la inversa, no trivializar actos estatales como si fueran simples declaraciones de voluntad. El método correcto empieza por la fuente (contrato, hecho ilícito, enriquecimiento sin causa), verifica capacidad y consentimiento, y contrasta objeto y causa con orden público para blindar la pretensión o la defensa.",
                },
                {
                  type: "paragraph",
                  text: "El **Derecho civil** es troncal. En su vertiente de **obligaciones**, articula cómo nacen, se modifican y extinguen los vínculos jurídicos: formación del consentimiento (oferta, aceptación), vicios (error, dolo, violencia), objeto posible y lícito, causa, formas, cumplimiento, incumplimiento, mora y responsabilidad (contractual y extracontractual). La prueba suele girar en torno a documentos, peritajes y testigos, con estándares de verosimilitud y coherencia. En su vertiente **familiar**, el foco se desplaza a capacidad, estado civil, parentesco, matrimonio, uniones, filiación, alimentos, patria potestad, guarda y custodia, y regímenes patrimoniales. Aquí la autonomía cede ante la protección del interés superior de la niñez y de personas en situación de vulnerabilidad, modulando remedios (convivencias, pensiones, medidas cautelares). En ambos frentes, el profesional debe prever efectos registrales y de ejecución: un fallo sin inscripción o sin medidas de cumplimiento es, en la práctica, una victoria simbólica.",
                },

                {
                  type: "accordion",
                  header: "Árbol rápido en privado",
                  open: false,
                  text: "1) Identifica la fuente (contrato, hecho ilícito, enriquecimiento). 2) Verifica capacidad/consentimiento. 3) Confronta objeto/causa con orden público. 4) Define remedio (cumplimiento, resolución, daños, restitución). 5) Asegura prueba y ejecución (medidas precautorias, registros).",
                },

                {
                  type: "paragraph",
                  text: "El **Derecho mercantil** regula actos de comercio, sujetos y títulos de crédito. Sus notas son celeridad, buena fe mercantil y seguridad documental. Se cruza con banca y valores; exige prueba robusta de operaciones y solvencia. El **societario/corporativo** estructura la vida de las compañías: constitución, gobierno corporativo, responsabilidad de administradores, pactos parasociales, fusiones, escisiones y adquisiciones. En ambos, la diligencia debida y el cumplimiento normativo evitan contingencias que, de estallar, se ventilan en foros especializados. La **contratación mercantil** incorpora cláusulas de jurisdicción, arbitraje y solución alternativa de controversias; el profesional debe armonizarlas con normas imperativas y con la posibilidad de control judicial posterior (anulación/ejecución de laudos) para no multiplicar litigios ni sacrificar garantías esenciales.",
                },
                {
                  type: "paragraph",
                  text: "El **Derecho concursal** gestiona crisis de pago con lógica de preservación del valor y trato ordenado de acreedores. Su éxito depende de información veraz, medidas cautelares oportunas y un plan de reestructura o liquidación viable. En paralelo, el **ambiental** —en su faceta privada— activa responsabilidad por daño ecológico: nexo causal, daño, ilicitud y medidas de reparación, sin perder de vista la interacción con la esfera pública (permisos, sanciones administrativas y penales). En ambos, la prueba técnico-pericial es decisiva y los remedios deben ser eficaces (convenios concursales, garantías, planes de remediación). Ignorar esta complejidad genera soluciones formalmente correctas pero materialmente ineficaces.",
                },

                {
                  type: "accordion",
                  header: "Errores comunes (y antídotos)",
                  open: false,
                  text: "• Tratar un acto estatal como si fuera voluntad privada → Reconstruye rol y competencia. • Ignorar orden público en contratos → Revisa límites imperativos. • Olvidar ejecución → Prevé medidas precautorias y registrales. • Subestimar peritajes técnicos (concursal/ambiental) → Diseña estrategia probatoria temprana.",
                },

                {
                  type: "paragraph",
                  text: "El **Derecho internacional privado** resuelve conflictos de leyes y de jurisdicción cuando un caso conecta varios ordenamientos. Su método pregunta: foro competente (jurisdicción), ley aplicable (reglas de conflicto), reconocimiento y ejecución de resoluciones extranjeras (exequátur) y orden público internacional. En contratos transfronterizos, cláusulas de elección de foro y ley aplicable previenen incertidumbre; en familia (matrimonio, filiación), la coordinación protege el interés superior de la niñez; en sucesiones, los puntos de conexión (último domicilio, situación de bienes) evitan fallos inconciliables. El operador debe articular el caso con tratados y con la legislación interna, cuidando que la autonomía conflictual no choque con principios inderogables. Con ello, las ramas del privado se integran en una práctica que combina técnica documental, prueba robusta y ejecución eficaz, manteniendo la coherencia del sistema y la confianza entre particulares.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión operativa: en privado, la calidad del trabajo depende de anticipar la fuente, blindar la validez del negocio o la pretensión, y asegurar remedios ejecutables. La teoría sirve cuando reduce fricción: contratos claros, cumplimiento verificable, títulos ordenados y vías de solución de controversias coherentes con el mapa normativo. La unidad invita a abandonar la retórica y adoptar una disciplina de verificación: ¿qué regula la rama?, ¿qué prohíbe, permite o manda?, ¿cómo se prueba?, ¿cómo se ejecuta? Esa es la trinchera donde se ganan o pierden los casos.",
                },
              ],
            },
            {
              id: "1.8.3",
              numbering: "8.3",
              title: "Otras ramas del Derecho",
              content: [
                {
                  type: "paragraph",
                  text: "Bajo ‘otras ramas’ el material agrupa el **Derecho social**: agrario, laboral y seguridad social. No se trata de un anexo marginal, sino de la respuesta jurídica a desigualdades estructurales que hacen insuficiente la igualdad formal. Estas ramas ajustan el parámetro de control: principios protectores, cargas probatorias moduladas, irrenunciabilidad de mínimos y procedimientos especializados. En agrario se tutela la tenencia y el aprovechamiento de la tierra rural; en laboral, la relación trabajo–patrón y la estabilidad en el empleo; en seguridad social, el acceso a prestaciones que materializan el bienestar. El profesional debe identificar desde el inicio si concurre un supuesto de **tutela reforzada**; de ser así, cambian foro, prueba, medidas cautelares y remedios. Abordar estos casos con criterios del Derecho privado estándar o del público puro conduce a decisiones formalmente ordenadas pero socialmente ineficaces. La misión del social es hacer practicable la libertad en contextos de asimetría.",
                },
                {
                  type: "paragraph",
                  text: "El **Derecho agrario** protege formas específicas de propiedad y uso de la tierra (ejidal, comunal y pequeña propiedad), con órganos y procedimientos propios. Su razón de ser es equilibrar el poder en el campo, garantizar seguridad jurídica sobre parcelas y dotaciones, y promover aprovechamientos sustentables. Los conflictos típicos giran en torno a límites, posesión, usufructo, derechos de uso y conflictos internos de núcleos agrarios. La prueba incluye actas, planos, censos y resoluciones de asamblea; la técnica procesal requiere conocimiento de instituciones como el Registro Agrario Nacional, tribunales agrarios y procedimientos de conciliación. Los remedios buscan restituir posesión, reconocer derechos y evitar daños ambientales. Ignorar esta arquitectura confunde tutela de la tierra con propiedad civil clásica, diluyendo la protección que justifica la rama.",
                },

                {
                  type: "accordion",
                  header: "Guía exprés — rama agraria",
                  open: false,
                  text: "• Regímenes: ejidal, comunal, pequeña propiedad. • Órganos: tribunales agrarios, RAN. • Prueba: actas, planos, censos. • Remedios: restitución, reconocimiento de derechos, medidas de conservación. • Enfoque: seguridad jurídica + sustentabilidad.",
                },

                {
                  type: "paragraph",
                  text: "El **Derecho laboral** parte de la desigualdad estructural entre trabajador y empleador. Por eso instituye principios como estabilidad en el empleo, salario digno, jornada máxima, seguridad e higiene, libertad sindical y negociación colectiva. Procesalmente modula cargas probatorias (en ciertos supuestos presume despido injustificado), reconoce irrenunciabilidad de mínimos y establece jurisdicciones y procedimientos especializados. Los remedios más frecuentes son reinstalación, indemnizaciones, pago de prestaciones y medidas precautorias. El operador serio documenta relación laboral (contratos, recibos, asistencia), identifica la causa del conflicto (despido, discriminación, acoso, incumplimiento de prestaciones) y alinea su estrategia con la protección reforzada que demanda la rama. El éxito no se mide sólo por la sentencia, sino por la ejecución pronta y completa que restablece derechos sin deteriorar innecesariamente la fuente de trabajo.",
                },
                {
                  type: "paragraph",
                  text: "La **seguridad social** asegura prestaciones vinculadas al bienestar: atención médica, riesgos de trabajo, invalidez y vida, guarderías, pensiones. Su estructura combina aportaciones tripartitas, reglas de elegibilidad y mecanismos de financiamiento y control. Los litigios típicos versan sobre reconocimiento de semanas cotizadas, cálculo de pensión, riesgos y prestaciones. La prueba es documental y técnica; la interpretación favorece la continuidad de cobertura y la protección efectiva. Esta rama exige lectura coordinada con laboral y con normas administrativas: tramitar solo en clave privada ignora la finalidad pública de protección; tramitar sólo en público desconoce la relación individual que da origen a las prestaciones. El parámetro es de eficacia material: una victoria en papel que no entrega medicamentos, terapia o pensión, es un fracaso del sistema.",
                },

                {
                  type: "accordion",
                  header: "Checklist — social (laboral y seguridad social)",
                  open: false,
                  text: "1) ¿Hay asimetría estructural? 2) Verifica base legal protectora y principios. 3) Documenta relación y cotizaciones. 4) Activa medidas precautorias. 5) Prioriza remedios efectivos (reinstalación, prestaciones, pensión). 6) Vigila ejecución: la tutela es material, no sólo declarativa.",
                },

                {
                  type: "paragraph",
                  text: "El valor del Derecho social se mide por su capacidad para transformar situaciones de vulnerabilidad en protección efectiva sin anular la libertad de empresa ni el desarrollo. La clave está en el diseño de remedios proporcionados y en la coordinación interinstitucional (registro, inspección, conciliación y tribunales). Conceptualmente, el social no crea ‘privilegios’; corrige desventajas históricas para volver reales la igualdad y la dignidad. El operador que domina su gramática detecta a tiempo el foro y la norma aplicable, arma su caso con prueba adecuada y elige remedios que sí cambian la vida de las personas. El enfoque del módulo insiste en este pragmatismo: menos retórica y más técnica; menos declaraciones y más ejecución.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión operativa: agrario, laboral y seguridad social son pilares de justicia material. Identifica si el asunto cae en alguno de ellos; si sí, aplica principios protectores y ajusta estrategia procesal y probatoria. Documenta siempre la asimetría y los efectos de la solución. Con ello, ‘otras ramas’ deja de ser cajón de sastre y se convierte en una plataforma de tutela eficaz, coherente con el bloque de constitucionalidad y con el mandato de construir un orden más justo y funcional.",
                },
              ],
            },
          ],
        },

        /* 9.- CONCEPTOS JURÍDICOS FUNDAMENTALES. */
        {
          id: "1.9",
          numbering: "9",
          title: "Conceptos jurídicos fundamentales",
          content: [
            {
              type: "paragraph",
              text: "Esta unidad introduce el andamiaje mínimo que todo jurista debe dominar para transformar un texto normativo en una decisión correcta: la noción de norma jurídica, su estructura binaria (supuesto de hecho y consecuencia jurídica) y el campo de los hechos jurídicos, dentro del cual los actos jurídicos ocupan un lugar relevante. El propósito no es repetir definiciones, sino convertirlas en una técnica de lectura y aplicación: (i) identificar qué norma es fuente del caso, (ii) precisar el supuesto que describe el estado de cosas regulado, (iii) probar el hecho que lo actualiza y (iv) activar la consecuencia prevista. Con esta gramática básica se ordena cualquier controversia, desde la más sencilla hasta la más compleja, y se evita el decisionismo. La unidad, además, recuerda que las normas pueden ser generales o individualizadas y que su incumplimiento activa la coacción estatal, rasgo que las distingue de pautas morales o sociales. En suma, aquí aprendemos a pasar del ‘deber ser’ a la ‘operatividad’: de la norma escrita al acto fundado y motivado, o del derecho invocado a la sentencia que lo tutela. Sin este vocabulario, la argumentación se dispersa; con él, adquiere dirección y comprobabilidad.",
            },
            {
              type: "paragraph",
              text: "La norma jurídica es regla de conducta dictada por autoridad legítima para ordenar, permitir o prohibir comportamientos, bajo amenaza de sanción. Su validez no se agota en la obediencia fáctica: también sirve como parámetro para juzgar la legalidad de actos públicos y privados. El material destaca que las normas pueden ser generales (para clases de personas) o particulares (individualizadas), y que se manifiestan en múltiples ‘sentidos’: como disposición escrita (documento), como costumbre recibida, como unidad abstracta del discurso técnico, como premisa de un razonamiento que resuelve un caso y, en ocasiones, como norma implícita reconstruida por interpretación. Esta polifonía no es ambigüedad, sino riqueza metodológica: permite al operador escoger el nivel adecuado de análisis según la tarea (interpretar, argumentar, decidir, ejecutar). Por eso, antes de discutir el ‘qué’ del conflicto, se exige ubicar el ‘dónde’ normativo: jerarquía, fuente y ámbitos de validez. Sólo entonces la discusión sobre hechos y consecuencias cobra sentido. Concebir a la norma como ‘punto de apoyo’ y no como simple texto evita tanto el literalismo ciego como el voluntarismo retórico y conduce a decisiones justificadas.",
            },
            {
              type: "paragraph",
              text: "Toda norma articula dos elementos: el supuesto de hecho —anticipación hipotética de una situación que podría ocurrir— y la consecuencia jurídica —el efecto que el orden prevé cuando el supuesto se verifica—. Esta estructura convierte al Derecho en una máquina condicional: ‘si sucede X, entonces debe seguir Y’. La utilidad práctica es inmediata. En materia sancionadora, por ejemplo, el supuesto tipifica una conducta y la consecuencia fija la pena o medida; en obligaciones privadas, el supuesto puede ser el incumplimiento y la consecuencia, la indemnización o la resolución; en lo administrativo, el supuesto habilita o restringe una actividad y la consecuencia puede ser una autorización, una clausura o una multa. Comprender la relación supuesto→consecuencia ordena la prueba (¿qué hechos debo demostrar?), guía la motivación (¿por qué aplico esta consecuencia?) y delimita la defensa (¿faltó actualizarse el supuesto o la consecuencia es desproporcionada?). Sin esta lógica, los casos se discuten en abstracto; con ella, se vuelven auditables: el juez o la autoridad muestran ‘qué norma’, ‘qué supuesto’, ‘qué hecho’ y ‘qué efecto’.",
            },
            {
              type: "paragraph",
              text: "Los hechos jurídicos son eventos naturales u humanos a los que el orden atribuye efectos de creación, modificación o extinción de derechos y obligaciones. Se clasifican por su origen en naturales (p. ej., nacimiento o muerte) y humanos; dentro de estos últimos, los **actos jurídicos** conforman una categoría especial: hechos voluntarios realizados con la intención de producir consecuencias de Derecho, que exigen la concurrencia de sujetos capaces, objeto lícito y posible, y una relación jurídica que los vincule. La distinción no es ociosa: un desastre natural puede detonar responsabilidades y seguros sin voluntad de nadie; un contrato, en cambio, nace de la autonomía privada y desplegará efectos conforme a sus cláusulas y al orden público. En litigio, esta tipología decide el estándar probatorio y el remedio: probar un acto exige acreditar voluntad y elementos del negocio; probar un hecho natural reclama evidencia fáctica y su conexión normativa. Por ello, clasificar hechos antes de argumentar evita mezclar categorías (v. gr., exigir dolo donde basta culpa, o atribuir efectos negociales a meros comportamientos materiales).",
            },
            {
              type: "paragraph",
              text: "Integrar norma, supuesto, consecuencia y hecho constituye un método replicable para todo caso. Paso 1: identificar la norma fuente vigente y su jerarquía. Paso 2: aislar el supuesto de hecho que describe la situación relevante. Paso 3: reconstruir el hecho ocurrido con prueba idónea hasta alcanzar el estándar exigible (indicios, documental, pericial, testimonial). Paso 4: verificar la proporcionalidad y los límites de la consecuencia —especialmente si restringe derechos—. Paso 5: elegir el remedio adecuado (cumplimiento, nulidad, amparo, reparación). Este enfoque, subrayado en el material, convierte el aprendizaje conceptual en una disciplina de verificación: la argumentación deja de apoyarse en intuiciones para anclarse en condiciones verificables. En síntesis, los ‘conceptos fundamentales’ no son glosario, sino herramientas para dominar la técnica del Derecho: permiten leer una norma, mapear su hipótesis, probar el hecho que la activa y sostener —o impugnar— la consecuencia con razones públicas. Ese es el puente entre teoría y práctica que esta unidad busca consolidar.",
            },

            /* Acordeón con tres niveles */
            {
              type: "accordion",
              header: "Nivel 1 — Mapa conceptual",
              open: false,
              text: "Norma jurídica = regla de conducta (general/individualizada) • Estructura: supuesto de hecho → consecuencia jurídica • Hechos jurídicos: naturales y humanos • Actos jurídicos: hechos humanos voluntarios con efectos de Derecho.",
            },
            {
              type: "accordion",
              header: "Nivel 2 — Preguntas guía",
              open: false,
              text: "¿Cuál es la norma fuente vigente y su jerarquía? ¿Qué supuesto describe el caso? ¿Qué hecho probado actualiza el supuesto? ¿La consecuencia es legal y proporcional? ¿Qué remedio procede para exigirla o controvertirla?",
            },
            {
              type: "accordion",
              header: "Nivel 3 — Checklist aplicado",
              open: false,
              text: "1) Identifica norma y vigencia. 2) Aísla el supuesto relevante. 3) Documenta el hecho con prueba idónea. 4) Vincula hecho↔supuesto con motivación clara. 5) Activa consecuencia y remedio con control de proporcionalidad cuando corresponda.",
            },
          ],
          subthemes: [
            {
              id: "1.9.1",
              numbering: "9.1",
              title:
                "Normas de Derecho y supuestos jurídicos" /* ───────────────────────── 9.1 Normas de Derecho y supuestos jurídicos ───────────────────────── */,
              content: [
                {
                  type: "paragraph",
                  text: "Para efectos operativos, esta lección parte de la definición de norma jurídica como una regla de conducta que, más allá de su obediencia fáctica, organiza la decisión jurídica mediante una estructura binaria: (i) un supuesto de hecho que anticipa una situación que puede ocurrir y requiere regulación; y (ii) una consecuencia jurídica que el orden atribuye cuando ese supuesto se verifica. Esta arquitectura convierte al Derecho en un sistema condicional (‘si X, entonces Y’) y obliga al operador a leer cada caso aislando primero el supuesto y, enseguida, probando el hecho que lo actualiza para activar la consecuencia. Con ello se abandona el decisionismo y se gana verificabilidad: el juez o la autoridad ya no ‘opinan’, sino que muestran norma, supuesto, hecho y efecto. Esta gramática, tomada del material del módulo, es el hilo conductor de todo lo que sigue en la Unidad 9 y permite separar con rigor lo normativo de lo moral o lo meramente social, sin negar su relevancia contextual. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "El curso subraya, con apoyo en la tradición kelseniana, que la validez de la norma no se agota en su ejecución por órganos del Estado o en la obediencia de los particulares; también funge como parámetro para enjuiciar la legalidad de actos públicos y privados. Esta idea es decisiva: la norma sirve como base de control, no sólo como mandato. Aplicado a la práctica, significa que, aun cuando una autoridad desobedezca o un particular incumpla, el sistema conserva un criterio objetivo para declarar la invalidez de una medida, exigir la reparación de un daño o reconocer un derecho. Tal desplazamiento de la fuerza al argumento intensifica la centralidad de la motivación y hace de la estructura ‘supuesto→consecuencia’ una herramienta de control de poder y de previsibilidad para la ciudadanía. :contentReference[oaicite:2]{index=2}",
                },

                {
                  type: "accordion",
                  header: "Claves de lectura de la norma",
                  open: false,
                  text: "• Identifica el supuesto (qué situación describe). • Prueba el hecho (qué ocurrió). • Activa la consecuencia (qué efecto prevé el orden). • Verifica jerarquía y vigencia de la norma fuente.",
                },

                {
                  type: "paragraph",
                  text: "El material también explica que la ‘norma’ no es unívoca: posee varios sentidos jurídicos útiles. Puede entenderse i) como documento normativo dotado de autoridad (Constitución, ley, reglamento, acto); ii) como costumbre recibida por el sistema; iii) como unidad abstracta del discurso técnico empleada por juristas; iv) como premisa de un razonamiento judicial acabado que resuelve un caso concreto; y v) como norma implícita reconstruida hermenéuticamente. Esta polifonía, lejos de confundir, ofrece niveles de análisis adecuados para cada tarea: interpretar, argumentar, decidir o ejecutar. Elegir el nivel correcto es una decisión metodológica clave: en litigio se trabaja con la norma como premisa del fallo; en técnica legislativa, con documentos normativos; en dogmática, con unidades abstractas. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "paragraph",
                  text: "De la mano de esa pluralidad, el supuesto de hecho cumple una función anticipatoria: describe, con lenguaje técnico, un estado de cosas posible (acción, omisión, condición, evento natural), fija sus elementos y, al verificarse en la realidad mediante prueba suficiente, dispara la consecuencia. El operador debe por ello ‘traducir’ el relato fáctico del caso a los elementos del supuesto: sujetos, tiempo, lugar, conducta y, en su caso, ánimo o resultado. Ese calce analítico evita dos errores frecuentes: (i) aplicar consecuencias sin que el supuesto esté completo; o (ii) forzar la narrativa para ‘entrar’ en un tipo que no corresponde. La disciplina consiste en demostrar la actualización del supuesto con evidencia idónea y, sólo entonces, discutir si procede la consecuencia prevista o si existe una regla posterior o superior que la desplaza. :contentReference[oaicite:4]{index=4}",
                },

                {
                  type: "accordion",
                  header: "Checklist del supuesto de hecho",
                  open: false,
                  text: "Sujeto • Conducta/Evento • Tiempo • Lugar • Resultado/Ánimo (cuando proceda). Prueba cada elemento con documentación, testimonios o peritajes según el estándar exigible.",
                },

                {
                  type: "paragraph",
                  text: "Una derivación práctica de todo lo anterior es el orden de trabajo: primero, jerarquía y vigencia de la norma fuente (parámetro); segundo, aislamiento del supuesto relevante; tercero, reconstrucción probatoria del hecho; cuarto, examen de idoneidad y límites de la consecuencia, especialmente si restringe derechos (proporcionalidad); y quinto, elección del remedio. Este método es independiente de la materia (pública, privada o social) y convierte a los ‘conceptos’ en herramientas. Además, justifica la centralidad de la motivación: la autoridad o el juez deben enlazar texto, hechos y razones. Una motivación que no explique por qué el supuesto se actualizó o por qué la consecuencia es adecuada es aparente y, por lo mismo, inválida.",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, entender la norma en sus distintos sentidos permite navegar colisiones: una disposición escrita puede ceder por jerarquía ante la Constitución; una costumbre puede integrarse si el orden la admite; una norma implícita puede reconstruirse para preservar coherencia del sistema. Esta flexibilidad metodológica asegura que la técnica jurídica no sea formalismo vacío, sino razonamiento público controlable. Con ella, ‘norma’ y ‘supuesto’ dejan de ser glosario y se vuelven el esqueleto operativo de cualquier caso que llegue a tus manos. :contentReference[oaicite:5]{index=5}",
                },
              ],
            },
            {
              id: "1.9.2",
              numbering: "9.2",
              title:
                "Consecuencias de Derecho" /* ───────────────────────── 9.2 Consecuencias de Derecho ───────────────────────── */,
              content: [
                {
                  type: "paragraph",
                  text: "La consecuencia jurídica es el efecto que el orden prevé cuando se actualiza el supuesto de hecho descrito por la norma. En términos prácticos, es el ‘entonces’ del condicional jurídico: sanción, autorización, nulidad, obligación de reparar, reconocimiento de un derecho, etcétera. El material ilustra la idea con el ejemplo más visible del ámbito penal: si el supuesto es ‘matar a otro’, la consecuencia legítima —fijada por el legislador— es una pena privativa de libertad. La utilidad de esta noción reside en que obliga a justificar la elección de la consecuencia: debe provenir de una fuente válida, ser aplicable al caso y guardar proporción con la finalidad constitucional. Así, la pregunta no es sólo si ocurrió el hecho, sino por qué corresponde exactamente esa consecuencia y no otra menos lesiva o más idónea para el fin perseguido. :contentReference[oaicite:6]{index=6}",
                },
                {
                  type: "paragraph",
                  text: "Operativamente, conviene distinguir familias de consecuencias. Las **sancionadoras** (penales o administrativas) restringen bienes como libertad o patrimonio y por ello demandan legalidad estricta, tipicidad, debido proceso y proporcionalidad. Las **de eficacia** (p. ej., nulidad, anulabilidad, inoponibilidad) corrigen vicios que afectan validez o eficacia de actos. Las **reparadoras** (indemnización, restitución) buscan recomponer la esfera dañada y requieren acreditación de daño, nexo causal y antijuridicidad. Las **constitutivas** crean o modifican situaciones jurídicas (p. ej., reconocimiento de estado civil). Aun cuando el material se detiene en el terreno penal para ejemplificar la lógica, su alcance es transversal: en toda rama, la elección de la consecuencia debe enlazarse con el supuesto verificado y con la finalidad de la norma, bajo controles de necesidad y de suficiencia probatoria. :contentReference[oaicite:7]{index=7}",
                },

                {
                  type: "accordion",
                  header: "‘Si… entonces…’: cómo justificar la consecuencia",
                  open: false,
                  text: "1) Fuente válida y vigente. 2) Aplicabilidad al caso (encuadre del supuesto). 3) Proporcionalidad (idoneidad, necesidad, balance). 4) Motivación explícita que enlace hechos, norma y fin perseguido.",
                },

                {
                  type: "paragraph",
                  text: "El material introduce además la relevancia del **dolo** y la **culpa** al graduar la consecuencia en Derecho penal y al estimar responsabilidad en civil. Averiguar si el sujeto actuó con intención (dolo) o por negligencia (culpa) impacta la medida de la respuesta estatal: en penal, típicamente disminuyen las penas cuando hay culpa; en civil, la graduación del reproche afecta cuantía y alcance de la reparación. Esta distinción pone de relieve que la consecuencia no es automática ni plana: se ajusta según elementos subjetivos y circunstancias del caso, siempre dentro de los márgenes legales. De nuevo, la motivación es el puente decisivo: debe explicar por qué el nivel de reproche conduce a una consecuencia específica y proporcional. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "paragraph",
                  text: "En Derecho administrativo sancionador, las consecuencias—multas, clausuras, revocaciones— exigen base legal, competencia y procedimiento, y se someten al **non bis in idem** y a la proporcionalidad: la misma conducta no debe sancionarse dos veces por el mismo hecho y la medida debe ser idónea y necesaria para proteger el bien jurídico. En el registro y control de actividades (autorizaciones, licencias), la ‘consecuencia’ también puede ser favorable (habilitación) si el supuesto se verifica (cumplir requisitos). La técnica es constante: encuadre del supuesto, prueba del hecho y motivación de la consecuencia, con explícita referencia a la finalidad pública o a la tutela de derechos involucrados.",
                },

                {
                  type: "accordion",
                  header: "Errores frecuentes (y cómo evitarlos)",
                  open: false,
                  text: "• Aplicar una consecuencia sin probar el supuesto completo. • Invocar una medida sin fuente válida o vigente. • Omitir proporcionalidad cuando hay derechos en juego. • No motivar el nexo entre hecho y efecto.",
                },

                {
                  type: "paragraph",
                  text: "En Derecho privado, las consecuencias responden a lógicas de cumplimiento y reparación: ejecutar el contrato, resolverlo por incumplimiento, indemnizar daños y perjuicios, restituir lo indebidamente recibido o dictar medidas precautorias que aseguren el resultado del proceso. Incluso aquí, la proporcionalidad opera como razonabilidad del remedio elegido (p. ej., cláusulas penales excesivas pueden moderarse). El profesional responsable ordena su petición en tres pasos: (i) precisa la fuente obligacional, (ii) muestra la actualización del supuesto de incumplimiento y (iii) razona por qué su consecuencia es la más adecuada y suficiente. La unidad insiste en algo: la calidad del Derecho se mide por lo bien que enlazamos hechos con consecuencias mediante razones públicas, no por la severidad de la respuesta. :contentReference[oaicite:9]{index=9}",
                },
                {
                  type: "paragraph",
                  text: "Conclusión: la consecuencia jurídica es el mecanismo mediante el cual el sistema transforma una hipótesis normativa en efectos reales. Elegirla, graduarla y motivarla —con base en fuente válida, prueba suficiente y test de proporcionalidad cuando corresponda— es el núcleo del oficio. En penal, la diferencia entre dolo y culpa ilustra la necesidad de individualización de la respuesta; en civil y administrativo, la congruencia entre fin y medio evita sanciones o remedios arbitrarios. De este modo, las ‘consecuencias’ dejan de ser un listado y se vuelven ingeniería de justicia aplicada. :contentReference[oaicite:10]{index=10}",
                },
              ],
            },
            {
              id: "1.9.3",
              numbering: "9.3",
              title:
                "Hechos jurídicos" /* ───────────────────────── 9.3 Hechos jurídicos ───────────────────────── */,
              content: [
                {
                  type: "paragraph",
                  text: "‘Hecho jurídico’ designa cualquier evento o acción —de origen natural o humano— al que el ordenamiento atribuye efectos de creación, modificación o extinción de derechos y obligaciones. Lo central no es ‘qué pasó’ en términos coloquiales, sino que el sistema considere que ese suceso genera consecuencias de Derecho. Esta perspectiva amplía el foco más allá de la voluntad: el nacimiento, la muerte, una catástrofe sanitaria o una declaración de guerra son hechos que detonan efectos normativos sin necesidad de intención de nadie. El material insiste en esta comprensión funcional: el jurista debe identificar el hecho relevante, su conexión con el supuesto de hecho normativo y la consecuencia que se activa. A partir de ahí, la discusión deja de ser anecdótica para convertirse en técnica jurídica verificable. :contentReference[oaicite:11]{index=11}",
                },
                {
                  type: "paragraph",
                  text: "La clasificación primaria distingue **hechos naturales** y **hechos humanos** según su origen. Los primeros —terremoto, inundación, nacimiento, muerte— producen efectos sin intervención de la voluntad; los segundos provienen de conductas humanas y pueden ser lícitos o ilícitos. Esta distinción repercute en la prueba y en los remedios: un desastre natural puede activar seguros y regímenes de emergencia; una conducta antijurídica, responsabilidades civiles, administrativas o penales. El material ofrece ejemplos sencillos que fijan la idea: desde el simple hecho biológico del nacimiento (que abre personalidad jurídica) hasta la catástrofe sanitaria (que habilita medidas excepcionales), pasando por la declaración de guerra (con consecuencias internacionales). El operador debe documentar el hecho (actas, peritajes, registros) y su encuadre normativo para sostener su pretensión o defensa. :contentReference[oaicite:12]{index=12}",
                },

                {
                  type: "accordion",
                  header: "Mapa rápido de hechos",
                  open: false,
                  text: "• Naturales: ocurren sin voluntad humana (nacimiento, muerte, desastre). • Humanos: provienen de conductas; pueden ser lícitos o ilícitos. • Ejemplos típicos y efectos: seguros, responsabilidad, medidas de emergencia.",
                },

                {
                  type: "paragraph",
                  text: "Dentro de los hechos humanos, los **actos jurídicos** ocupan un lugar especial: son hechos voluntarios realizados con intención de producir consecuencias jurídicas conforme a Derecho —crear, modificar o extinguir situaciones jurídicas—. Su validez reclama la concurrencia de elementos básicos: uno o varios sujetos capaces que expresen su voluntad, un objeto o finalidad lícitos y posibles, y una relación jurídica que vincule a los sujetos con el objeto. Esta tipología explica por qué, en litigio civil o mercantil, reconstruimos oferta y aceptación, capacidad, vicios del consentimiento, objeto y causa; y por qué, en el ámbito registral, cuidamos las formas y las inscripciones. Sin estos elementos, la voluntad no se traduce en efectos jurídicos válidos y la consecuencia pretendida se frustra. :contentReference[oaicite:13]{index=13}",
                },

                {
                  type: "image",
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJffEwU6vZpxWu8DYgZjm15V1NBuc0vwGT6A&s",
                  caption:
                    "Hechos jurídicos: naturales y humanos; los actos jurídicos como subcategoría voluntaria. (Recurso del módulo).",
                },

                {
                  type: "paragraph",
                  text: "La frontera entre hechos y actos jurídicos no elimina la relevancia de elementos subjetivos como el **dolo** o la **culpa**: aunque ambos son propios del análisis de responsabilidad, su identificación incide en la consecuencia que se activa frente a un hecho humano antijurídico. Esta gradación —prevista por la ley— distingue entre quien actúa con intención y quien lo hace por negligencia, con efectos en penal (penas menores por culpa) y en civil (cuantía de la reparación), como recuerda el material. Por eso, además de probar el hecho, debe acreditarse el nivel de reproche exigido por la norma para justificar la respuesta elegida. :contentReference[oaicite:14]{index=14}",
                },

                {
                  type: "accordion",
                  header: "Checklist probatorio del ‘hecho’",
                  open: false,
                  text: "• Documento/registro (actas, certificados, resoluciones). • Testimonio y peritaje para reconstruir circunstancias. • Conexión normativa (qué supuesto actualiza). • Elementos subjetivos (dolo/culpa) cuando proceda.",
                },

                {
                  type: "paragraph",
                  text: "Desde la técnica procesal, el ‘hecho’ es el punto de apoyo del caso: sin hechos probados no hay Derecho aplicable. El método recomendado por la unidad ordena: (i) identificar la norma fuente y su supuesto; (ii) reconstruir el hecho con evidencia idónea y suficiente para el estándar aplicable (indicios, documental, testimonial, pericial); (iii) motivar con claridad la actualización de la hipótesis normativa; y (iv) activar la consecuencia con controles de proporcionalidad cuando se restringen derechos. Esta disciplina evita pedir remedios incongruentes o insuficientes y blinda la decisión frente a revisiones ulteriores. Además, integra en un mismo marco los distintos foros (administrativo, civil, penal) sin perder la especificidad de cada uno.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión: concebir los hechos jurídicos como el engranaje que pone en marcha la máquina normativa permite pasar del ‘relato’ a la ‘decisión’ con estándares claros de prueba, motivación y remedio. La clasificación natural/humano aclara orígenes; la subcategoría de actos jurídicos explica la función de la voluntad en la producción de efectos; la distinción dolo/culpa afina la respuesta. Con este mapa, la abogacía deja de ser intuición y se vuelve ingeniería de consecuencias justificadas. :contentReference[oaicite:15]{index=15}",
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
          href: "https://www.youtube.com/watch?v=rwGZrlIQrfA", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "¿Qué es el ESTADO y cuáles son sus elementos? (Video) https://www.youtube.com/watch?v=rwGZrlIQrfA",
            "Derecho PÚBLICO y derecho PRIVADO (Video) https://www.youtube.com/watch?v=JN7ftznLDvM",
            "Elementos del Estado (Lectura) https://florescalixto.gitbooks.io/estado-constitucion-y-gobierno/content/S2elementos_del_estado.html",
            "La sociedad, el Derecho y el pensamiento político (Lectura) https://www.bcn.cl/formacioncivica/detalle_guia?h=10221.3/45670",
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
            "García Máynez, E. (2000). *Introducción al Estudio del Derecho*. México: Porrúa.",
            "Heller, H. (1983). *Teoría del Estado*. México: Fondo de Cultura Económica.",
            "Peniche, F. (2000). *Introducción al Estudio del Derecho*. México: Porrúa.",
            "Pereznieto, L. (2009). *Introducción al estudio del Derecho*. México: Oxford.",
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
