/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LAE",
  courseId: "LAE-105",
  id: "LAE-105-M2",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Introducción al Derecho",
  title: "Módulo 2. Fuentes del Derecho",
  semestre: "1º",
  teacher: "Mtra. Rosalia del Carmen Arostegui Silva",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar las fuentes del derecho, comprendiendo su clasificación en formales, reales e históricas, así como sus características y funciones, con el fin de interpretar la creación, aplicación e influencia de las normas jurídicas en la sociedad y en la práctica profesional.",
  competencies: [
    "Identificar y diferenciar las fuentes formales, reales e históricas del derecho, reconociendo su origen y alcance en la regulación jurídica.",
    "Analizar la función de la legislación, costumbre, jurisprudencia y principios generales en la creación y aplicación de normas jurídicas.",
    "Aplicar el conocimiento de las fuentes del derecho para interpretar normas y situaciones legales de manera crítica y fundamentada.",
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

    /* 1. Unidad principal */
    {
      id: "3",
      numbering: "Unidad 3",
      title: "FUENTES DEL DERECHO",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad aborda el origen y la forma en que surgen, se interpretan y se aplican las normas jurídicas. Al hablar de “fuentes del derecho” nos referimos a los procesos y realidades de los cuales emanan las reglas que ordenan la vida social. Comprenderlas es esencial para reconocer la validez y la jerarquía normativa, así como para leer con rigor el contenido de las disposiciones en casos concretos. El estudio conecta teoría y práctica: explica por qué ciertas necesidades sociales (seguridad vial, protección ambiental, economía digital) motivan la creación de nuevas reglas; muestra cómo los documentos del pasado inspiran y delimitan el derecho vigente; y detalla los procedimientos que convierten una propuesta en una norma obligatoria. De este modo, la unidad no solo ofrece definiciones, sino un método para intervenir responsablemente en contextos públicos y privados, anticipando efectos y evitando errores de interpretación que cuestan tiempo, recursos y legitimidad institucional.",
        },
        {
          type: "paragraph",
          text: "La clasificación básica distingue entre fuentes reales, históricas y formales. Las reales son factores sociales, políticos, económicos y culturales que explican el porqué de la norma: necesidades y problemas cuya regulación se vuelve inaplazable. Las históricas son documentos y códigos del pasado que permiten estudiar la evolución del derecho y sirven de antecedente para el legislador y el intérprete. Las formales son los procedimientos y medios a través de los cuales la regla se vuelve obligatoria: legislación, costumbre, jurisprudencia y principios generales del derecho. Esta tipología es operativa: conecta causas, antecedentes y formas, proporcionando un mapa para ubicar cada disposición en su sitio correcto. En la práctica, no basta “saber qué dice la ley”; es imprescindible identificar qué fuerzas la impulsaron, qué tradición interpreta su sentido y qué cauces formales le confieren obligatoriedad y vigencia.",
        },
        {
          type: "paragraph",
          text: "Metodológicamente, la unidad enseña a formular preguntas guía antes de actuar: ¿qué problema real explica la norma?, ¿qué antecedentes históricos la condicionan?, ¿qué fuente formal la convierte en derecho positivo? En el ámbito legislativo, se revisa el proceso por el cual una iniciativa se discute, aprueba, sanciona, publica e inicia su vigencia; las etapas importan porque de ellas derivan la certeza, la publicidad y el control democrático. En costumbre, se examina la práctica social constante y pública que el ordenamiento reconoce; en jurisprudencia, los criterios interpretativos uniformes que orientan decisiones futuras; y en principios, las ideas rectoras (equidad, buena fe, justicia) que suplen lagunas y guían la aplicación razonable del derecho. El objetivo es ofrecer un procedimiento claro para interpretar y decidir con base en fuentes verificables, evitando tanto el voluntarismo como el formalismo ciego.",
        },
        {
          type: "paragraph",
          text: "Las fuentes se comprenden mejor con ejemplos. Una ley de tránsito vigente tiene como fuente real la necesidad de prevenir accidentes; como fuentes históricas, los códigos previos de circulación; y como fuente formal, su promulgación y publicación oficiales que aseguran obligatoriedad. La regulación del comercio electrónico surge del crecimiento de la economía digital; sus antecedentes doctrinales y comparados iluminan su diseño; y su fuerza obligatoria proviene de la legislación y de la jurisprudencia que precisa su alcance. Los principios generales permiten ajustar la aplicación de una norma a circunstancias excepcionales para alcanzar resultados justos. Al identificar estas capas, el operador jurídico elige mejor el foro, el argumento y la prueba, disminuyendo la incertidumbre y elevando la calidad de las decisiones públicas y privadas.",
        },
        {
          type: "paragraph",
          text: "Desde la formación profesional, esta unidad busca que el estudiante identifique y diferencie las fuentes del derecho, analice la función de legislación, costumbre, jurisprudencia y principios, y aplique estos conocimientos para interpretar normas y resolver casos de forma crítica y fundamentada. Ello implica leer documentos con atención al contexto, articular razones públicas y reconocer los límites institucionales. La competencia clave es traducir problemas reales en preguntas jurídicas, ubicar la fuente pertinente y construir una solución compatible con la jerarquía normativa y los derechos fundamentales. Así, las fuentes dejan de ser una lista memorística y se convierten en herramientas para diseñar, impugnar o aplicar reglas que tutelan bienes colectivos y derechos individuales, con proporcionalidad y control.",
        },

        {
          type: "accordion",
          header: "Nivel 1 — Mapa conceptual de la unidad",
          open: false,
          text: "Fuentes reales (causas y necesidades sociales); fuentes históricas (documentos y códigos pretéritos); fuentes formales (legislación, costumbre, jurisprudencia, principios). Relación: causas → antecedentes → formalización.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Criterios operativos",
          open: false,
          text: "Preguntas guía: ¿Qué problema regula? ¿Qué antecedentes informan su sentido? ¿Qué procedimiento le da obligatoriedad? Verificar validez, vigencia y jerarquía; identificar autoridad competente y ámbito de aplicación.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Aplicación práctica",
          open: false,
          text: "Ejemplos: tránsito, comercio electrónico, protección ambiental. Uso de jurisprudencia para uniformar criterios; principios (equidad, buena fe) para suplir lagunas y evitar resultados injustos.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "3.1",
          numbering: "3.1",
          title: "Definición de fuentes del derecho",
          content: [
            {
              type: "paragraph",
              text: "Las fuentes del derecho son los orígenes y procedimientos de los cuales emanan las normas jurídicas y que determinan cómo se crean, interpretan y aplican en una sociedad. Comprenderlas es imprescindible para conocer la validez y la jerarquía normativa, así como para interpretar su contenido en casos prácticos. La noción de ‘fuente’ se usa en sentido metafórico: igual que el agua brota de un manantial, el derecho brota de ciertos procesos y realidades sociales. La literatura básica insiste en tres familias: fuentes reales (factores sociales, políticos, económicos y culturales que explican el porqué de la norma), fuentes históricas (documentos y textos del pasado que registran la evolución jurídica) y fuentes formales (los cauces y actos que convierten una regla en jurídicamente obligatoria). Esta tipología organiza un método: primero ubicar el problema real, luego reconocer antecedentes y, por último, verificar el procedimiento formal que dota de obligatoriedad a la regla.",
            },
            {
              type: "paragraph",
              text: "Diversos autores precisan el alcance del término. ‘Fuente’ designa el lugar de donde surge o se produce algo; aplicada al derecho, alude al origen de las normas. Desde este ángulo, las fuentes del derecho son la base de su existencia y transformación, pues describen quiénes producen normas, con qué procedimientos y bajo qué límites, así como dónde y cómo se aplican. Esta perspectiva permite distinguir entre lo que motiva la creación de reglas (necesidades sociales), lo que inspira su contenido (tradición jurídica) y lo que las hace obligatorias (legislación, costumbre, jurisprudencia o principios). Para fines didácticos, conviene trabajar con definiciones operativas y ejemplos que muestren cómo las tres familias interactúan en regulaciones concretas, y no como compartimentos aislados.",
            },

            {
              type: "accordion",
              header: "Mapa básico de las fuentes",
              open: false,
              text: "Reales: causas y necesidades que explican la norma. Históricas: documentos y códigos pretéritos que inspiran. Formales: procedimientos que otorgan obligatoriedad (legislación, costumbre, jurisprudencia, principios).",
            },

            {
              type: "paragraph",
              text: "Un ejemplo clarifica el método. Piénsese en una ley de tránsito vigente: su fuente real es la necesidad de prevenir accidentes y ordenar la movilidad; sus fuentes históricas incluyen códigos previos de circulación y experiencias comparadas; su fuente formal es el proceso legislativo que culmina con la promulgación y publicación en el Diario Oficial, lo que asegura su obligatoriedad. Tras identificar estas capas, el operador jurídico puede elegir argumentos y pruebas pertinentes (estadísticas de siniestralidad, antecedentes normativos, etapas del proceso), reducir la incertidumbre y elevar la calidad de la decisión pública. Esta misma lógica se replica en ámbitos como comercio electrónico, protección de datos o medio ambiente, donde causas sociales y tecnológicas exigen actualizar marcos legales con respaldo formal robusto.",
            },
            {
              type: "paragraph",
              text: "Entender las fuentes también ayuda a evitar errores comunes. En ocasiones se confunde la fuerza de una práctica social persistente con obligatoriedad jurídica; en otras, se invoca un texto histórico como si fuera vigente; a veces se pretende aplicar una ‘norma’ que no ha seguido el cauce formal correspondiente. La disciplina de preguntar por la fuente —real, histórica y formal— funciona como lista de verificación: ¿qué problema regula?, ¿qué antecedentes informan su sentido?, ¿qué procedimiento confirió validez y vigencia?, ¿qué autoridad es competente?, ¿cuáles son sus ámbitos de validez (espacial, temporal, material y personal)?",
            },

            {
              type: "accordion",
              header: "Preguntas guía para el análisis",
              open: false,
              text: "1) ¿Cuál es la causa social que justifica la norma? 2) ¿Qué documentos o tradiciones la preceden? 3) ¿Qué acto formal la volvió obligatoria? 4) ¿Cuáles son sus ámbitos de validez?",
            },

            {
              type: "paragraph",
              text: "Desde la práctica, las fuentes informan estrategias de diseño, cumplimiento y litigio. En el diseño, conectan diagnósticos con soluciones normativas factibles; en cumplimiento, permiten identificar con precisión qué reglas aplican y por qué; en litigio, orientan la prueba y la argumentación (por ejemplo, cuando se alega invalidez por vicios formales o inconstitucionalidad por motivos sustantivos). En docencia, la clasificación de fuentes ofrece un andamiaje para aprender a leer y escribir el derecho con rigor, vinculando textos, contextos y procedimientos. La competencia a adquirir no es memorizar listas, sino usar las categorías para razonar con claridad y decidir con proporcionalidad.",
            },
            {
              type: "paragraph",
              text: "Como síntesis, hablar de fuentes del derecho es articular causas, memoria y forma. Las reales definen problemas y fines; las históricas ofrecen lecciones y límites; las formales otorgan fuerza obligatoria y previsibilidad. Integradas, convierten el derecho en una herramienta de coordinación social y de protección de derechos, capaz de adaptarse a cambios sin sacrificar seguridad jurídica. El jurista competente navega estas capas con solvencia, cuidando que cada norma que aplica o propone pueda responder a la triple pregunta: ¿por qué?, ¿desde dónde? y ¿cómo se volvió obligatoria?",
            },
          ],
          subthemes: [
            {
              id: "3.1.1",
              numbering: "3.1.1",
              title: "Fuentes reales",
              content: [
                {
                  type: "paragraph",
                  text: "Las fuentes reales del derecho son los factores sociales, políticos, económicos y culturales que motivan la creación de normas y determinan su contenido. No producen por sí mismas obligatoriedad jurídica, pero explican la razón de ser de la ley y orientan su diseño. En sociedades dinámicas, nuevas tecnologías, transformaciones demográficas, riesgos ambientales o crisis sanitarias pueden operar como detonantes de reformas. Reconocer la fuente real es identificar el problema que la norma busca resolver y la finalidad que persigue, paso imprescindible para interpretar teleológicamente sus disposiciones y evaluar su eficacia. La doctrina las define como el conjunto de hechos y elementos que influyen en la aparición, desarrollo y alcance de las normas jurídicas.",
                },
                {
                  type: "paragraph",
                  text: "Esta categoría cumple funciones analíticas y prácticas. Analíticamente, permite conectar diagnóstico y regulación, evitando normas aisladas del contexto. En la práctica, obliga a recabar evidencia empírica (datos, estudios de impacto, experiencias comparadas) para justificar la intervención y calibrar instrumentos (incentivos, sanciones, estándares). Cuando la norma se aparta de su fuente real —por ejemplo, regula un problema inexistente o sobrerreacciona a casos excepcionales— genera costos, litigiosidad y pérdida de legitimidad. En cambio, cuando la regulación está bien alineada con los hechos, aumenta el cumplimiento voluntario y se reducen necesidades de coacción. Esta relación también es temporal: las fuentes reales cambian, y con ellas deben ajustarse las reglas para no quedar obsoletas.",
                },

                {
                  type: "accordion",
                  header: "Ejemplos de fuentes reales",
                  open: false,
                  text: "Crecimiento del comercio electrónico; contaminación y cambio climático; ciberseguridad; movilidad urbana; fenómenos demográficos (envejecimiento poblacional); innovación financiera (pagos digitales).",
                },

                {
                  type: "paragraph",
                  text: "Ejemplos concretos ilustran su alcance. La economía digital y la proliferación de plataformas motivan normas sobre protección de datos, comercio electrónico y competencia; la contaminación y la pérdida de biodiversidad impulsan legislación ambiental y mecanismos de evaluación de impacto; las crisis sanitarias activan marcos de emergencia, compras públicas flexibles y protocolos de salud; la movilidad urbana obliga a actualizar reglamentos de tránsito, seguridad vial y emisiones. En cada caso, la ‘realidad’ no dicta una sola respuesta normativa, pero sí acota opciones razonables y establece métricas para evaluar resultados. La identificación de la fuente real, por tanto, no es retórica: es una exigencia de buena técnica regulatoria y de rendición de cuentas.",
                },
                {
                  type: "paragraph",
                  text: "Para el intérprete, las fuentes reales aportan criterios cuando el texto admite varias lecturas. La finalidad legislativa (teleología) y los motivos que dieron origen a la norma orientan la elección de significados compatibles con el problema que se pretendía resolver, siempre dentro de los límites constitucionales. Para el litigante, sirven para construir argumentos de proporcionalidad: si la medida no se relaciona con la finalidad legítima o es excesiva frente al problema real, puede declararse inválida. Para quien diseña políticas, las fuentes reales obligan a monitorear contextos y a ajustar reglas con evaluaciones ex post que midan eficacia y costos no previstos.",
                },

                {
                  type: "accordion",
                  header: "Claves operativas",
                  open: false,
                  text: "Definir el problema público; identificar bienes jurídicos protegidos; recabar evidencia; comparar experiencias; calibrar instrumentos; medir efectos y revisar periódicamente.",
                },

                {
                  type: "paragraph",
                  text: "La enseñanza de esta materia debe enfatizar que las fuentes reales no justifican cualquier intervención: también marcan límites. No todo problema requiere norma; a veces basta con educación, autorregulación o rediseño de procesos. Además, la regulación debe respetar derechos y no imponer cargas desproporcionadas. En suma, las fuentes reales son brújula del ‘por qué’ y ‘para qué’ del derecho; usadas con rigor, acercan la norma a la realidad que pretende ordenar y legitiman su adopción ante la ciudadanía.",
                },
                {
                  type: "paragraph",
                  text: "Como cierre, conviene recordar que identificar correctamente la fuente real mejora la coordinación entre órdenes normativos (moral, social y jurídico). Cuando las reglas jurídicas responden a problemas sentidos y se comunican con claridad, las convenciones sociales se alinean, la moral pública las respalda y el cumplimiento mejora. Allí reside parte de la trascendencia práctica de estudiar las fuentes del derecho desde su dimensión real.",
                },
              ],
            },
            {
              id: "3.1.2",
              numbering: "3.1.2",
              title: "Fuentes históricas",
              content: [
                {
                  type: "paragraph",
                  text: "Las fuentes históricas del derecho son documentos, códigos y testimonios que contienen textos de derecho positivo de otras épocas y que permiten estudiar la evolución de instituciones y categorías jurídicas. No son, por sí mismas, obligatorias hoy, pero sirven como referencia para interpretar el derecho vigente y para diseñar reformas informadas por la experiencia. En la tradición occidental, ejemplos recurrentes incluyen las XII Tablas del Derecho romano, el Código de Hammurabi, el Digesto de Justiniano y los grandes códigos decimonónicos, como el Código Napoleónico, que influyeron decisivamente en la codificación civil de muchos países. En el ámbito mexicano, las recopilaciones coloniales y los primeros códigos nacionales constituyen también fuentes históricas de enorme valor.",
                },
                {
                  type: "paragraph",
                  text: "Su función principal es doble. Por un lado, preservan memoria jurídica: muestran cómo se resolvían conflictos, qué bienes se protegían y cómo evolucionaron conceptos como propiedad, obligación, contrato o delito. Por otro lado, ofrecen insumos para la interpretación sistemática: cuando un término legislativo es ambiguo, su historia puede aclarar el sentido que el legislador quiso atribuirle o revelar por qué se descartaron ciertas soluciones. La historia no encadena el presente, pero advierte riesgos y costos de diseños que ya fracasaron o que funcionaron bajo condiciones que hoy no existen. De ahí que el análisis histórico sea parte de una hermenéutica prudente, compatible con la supremacía constitucional y con la protección de derechos fundamentales.",
                },

                {
                  type: "accordion",
                  header: "Ejemplos clásicos",
                  open: false,
                  text: "XII Tablas; Código de Hammurabi; Digesto; Código Napoleónico; recopilaciones coloniales; primeros códigos mexicanos.",
                },

                {
                  type: "paragraph",
                  text: "La categoría ‘fuentes históricas’ incluye materiales muy diversos: estelas, papiros, pergaminos, compilaciones oficiales, gacetas, actas y proyectos. Su valor probatorio varía, pero su valor interpretativo se potencia cuando se contrastan entre sí y con los contextos sociales en que surgieron. En docencia, el trabajo con fuentes históricas afina habilidades de lectura crítica, comparación y analogía controlada: no se trata de copiar moldes, sino de entender razones y condiciones. En investigación, documentan genealogías conceptuales y legitiman propuestas de reforma que dialogan con la tradición sin fetichizarla.",
                },
                {
                  type: "paragraph",
                  text: "Ejemplos contemporáneos muestran su utilidad práctica. Al estudiar la evolución del derecho de familia, los códigos históricos iluminan el tránsito desde modelos patriarcales hacia esquemas de igualdad y corresponsabilidad. En derecho penal, comparaciones históricas alertan sobre excesos punitivos o sobre carencias de garantías procesales. En derecho administrativo, la genealogía de los procedimientos permite calibrar mejor reformas orientadas a simplificar trámites sin sacrificar control. En todos los casos, la fuente histórica sirve de espejo para evaluar si las soluciones actuales honran principios de justicia y eficiencia institucional.",
                },

                {
                  type: "accordion",
                  header: "Claves de uso responsable",
                  open: false,
                  text: "Contextualizar; evitar anacronismos; distinguir inspiración de obligatoriedad; privilegiar principios constitucionales y derechos humanos al interpretar.",
                },

                {
                  type: "paragraph",
                  text: "Para el litigante y el funcionario, la apelación a fuentes históricas puede reforzar argumentos de coherencia sistémica o de corrección teleológica cuando el texto es abierto. Sin embargo, debe usarse con cautela: la autoridad de un documento antiguo no sustituye el análisis constitucional ni la proporcionalidad. Las fuentes históricas iluminan, no mandan. En suma, su estudio ordenado fortalece el razonamiento jurídico, instruye en prudencia institucional y pone en diálogo tradición y cambio, dos fuerzas imprescindibles para un derecho que aspire a ser justo y eficaz.",
                },
                {
                  type: "paragraph",
                  text: "Como colofón, reconocer el papel de las fuentes históricas impide tanto el presentismo —creer que todo empieza hoy— como el tradicionalismo acrítico —creer que lo antiguo es siempre mejor—. Un derecho maduro aprende de su historia para decidir mejor en el presente, cuidando que la memoria sea instrumento de mejora y no un lastre que impida innovar cuando las personas y los contextos lo exigen.",
                },
              ],
            },
            {
              id: "3.1.3",
              numbering: "3.1.3",
              title: "Fuentes formales",
              content: [
                {
                  type: "paragraph",
                  text: "Las fuentes formales son los procedimientos y actos mediante los cuales las reglas de conducta adquieren las características externas requeridas para elevarse a la categoría de jurídicamente obligatorias. En términos operativos, responden a la pregunta ‘¿cómo’ se crea derecho válido y vigente. En nuestro horizonte, incluyen la legislación, la costumbre, la jurisprudencia y los principios generales del derecho. Cada una posee requisitos propios y un ámbito de juego particular, pero todas comparten una función: transformar expectativas y prácticas en normas con fuerza pública, capaces de orientar conductas y resolver conflictos con previsibilidad y control democrático.",
                },
                {
                  type: "paragraph",
                  text: "Desde la técnica, la legislación se produce mediante un proceso establecido constitucionalmente (iniciativa, discusión, aprobación, sanción, publicación e inicio de vigencia); la costumbre reclama práctica social constante y pública acompañada de convicción de obligatoriedad; la jurisprudencia uniforma criterios interpretativos con efectos obligatorios en ciertos supuestos; y los principios generales, aunque no escritos en un código, funcionan como normas supletorias que guían interpretación e integración ante lagunas. Saber cuándo opera cada fuente, cómo se prueba y qué jerarquía ocupa evita errores de interpretación y mejora estrategias de diseño normativo y litigio.",
                },

                {
                  type: "accordion",
                  header: "Panorama de las formales",
                  open: false,
                  text: "Legislación: proceso constitucional; Costumbre: uso constante + convicción; Jurisprudencia: uniformación de criterios; Principios: guía supletoria (equidad, buena fe, justicia).",
                },

                {
                  type: "paragraph",
                  text: "Las fuentes formales no compiten necesariamente entre sí; más bien, se coordinan. La ley suele ocupar primacía en sistemas de tradición codificada; la costumbre actúa en vacíos o como intérprete del texto; la jurisprudencia precisa alcances, corrige ambigüedades y resuelve conflictos; los principios aseguran coherencia y justicia material cuando el literalismo arrojaría resultados absurdos. Esta coordinación exige reglas claras de preferencia (jerarquía, especialidad, cronología) y cautelas metodológicas para no sustituir al legislador ni desnaturalizar la función judicial o doctrinal.",
                },
                {
                  type: "paragraph",
                  text: "En la práctica, dominar las fuentes formales se traduce en acciones verificables: redactar iniciativas sólidas, documentar prácticas sociales relevantes, identificar criterios obligatorios y construir argumentos principialistas con prudencia. También implica conocer ámbitos de validez, pues cada fuente puede operar con distinta extensión espacial, temporal, material y personal. La calidad del sistema jurídico depende menos de proclamar más reglas y más de asegurar que se creen, comuniquen y apliquen con procedimientos confiables y razones públicas.",
                },

                {
                  type: "accordion",
                  header: "Errores a evitar",
                  open: false,
                  text: "Invocar costumbre sin prueba; tratar doctrina como fuente formal; confundir precedentes persuasivos con obligatorios; aplicar principios para derogar la ley en vez de integrarla o interpretarla.",
                },

                {
                  type: "paragraph",
                  text: "Como síntesis, el capítulo de fuentes formales enseña el ‘alfabeto’ de creación y aplicación del derecho. Quien lo domina puede diseñar mejores políticas, contratos y sentencias; puede litigar con estrategias más limpias; y puede impartir o recibir justicia con mayor legitimidad. En lo que sigue se desarrollan cada una de estas fuentes con detalle: legislación, costumbre, jurisprudencia y principios generales del derecho.",
                },
              
              ],
              subthemes: [
                {
                  id: "3.1.3.1",
                  numbering: "3.1.3.1",
                  title: "Legislación",
                  content: [
                    {
                      type: "paragraph",
                      text: "La legislación es el conjunto de normas escritas dictadas por autoridad competente mediante el proceso previsto en la Constitución y en las leyes orgánicas. Se distingue por su generalidad y abstracción, por su publicidad y por la posibilidad de asegurar su cumplimiento incluso por la fuerza legítima del Estado. Su fortaleza reside en ofrecer certeza ex ante, pues las personas pueden planear su conducta con base en textos promulgados y publicados. Además, estructura el sistema, al definir competencias, procedimientos y sanciones. En la práctica, ‘ley’ incluye constituciones, leyes, códigos y reglamentos, sin perjuicio de particularidades en cada ordenamiento. La técnica legislativa exige claridad, sistematicidad y coherencia con el bloque de constitucionalidad.",
                    },
                    {
                      type: "paragraph",
                      text: "El proceso legislativo, típico de los sistemas constitucionales, comprende etapas encadenadas: iniciativa (quién puede proponer), discusión (análisis en comisiones y plenos), aprobación (votación), sanción (aceptación por el poder ejecutivo cuando procede), promulgación y publicación, seguidas de la iniciación de la vigencia —inmediata o diferida—. Estas fases garantizan debate, transparencia y control democrático. Vicios en cualquiera de ellas pueden acarrear invalidez. La ley rige dentro de ámbitos de validez definidos (espacial, temporal, material y personal) y se coordina con otras normas mediante reglas de jerarquía, especialidad y cronología. En el litigio, conocer con precisión estas reglas es tan importante como dominar el contenido sustantivo.",
                    },

                    {
                      type: "accordion",
                      header: "Checklist del proceso",
                      open: false,
                      text: "Iniciativa; discusión; aprobación; sanción; promulgación; publicación; inicio de vigencia; transitorios y derogaciones.",
                    },

                    {
                      type: "paragraph",
                      text: "La calidad de la legislación depende también de insumos de política pública: diagnósticos, consultas, análisis de impacto regulatorio y evaluaciones ex post. Sin ellos, las leyes tienden a la sobre‑promesa y a la baja eficacia. La coordinación con principios y con jurisprudencia evita excesos literalistas y mejora la justicia material en aplicación. En docencia, estudiar legislación implica aprender a leer encabezados, artículos transitorios, tablas de vigencia y notas de reformas, así como a redactar normas con lenguaje claro, criterios definidos y sanciones proporcionales.",
                    },
                    {
                      type: "paragraph",
                      text: "Ejemplos ayudan a fijar la idea: un código penal establece tipos delictivos y penas; una ley laboral define jornadas, salarios y despidos; una ley ambiental prevé estándares de emisiones y procedimientos de evaluación de impacto. En todos los casos, la legitimidad de la ley descansa en su creación conforme a competencia y procedimiento, y en su compatibilidad con la Constitución y los derechos humanos. Cuando la ley se aparta de estos parámetros, los tribunales ejercen control para restablecer la supremacía constitucional y proteger a las personas de abusos.",
                    },

                    {
                      type: "accordion",
                      header: "Errores frecuentes",
                      open: false,
                      text: "Redactar sin definir destinatarios; omitir transitorios claros; duplicar competencias; sanciones desproporcionadas; lenguaje vago que fomenta discrecionalidad.",
                    },

                    {
                      type: "paragraph",
                      text: "Como cierre, la legislación es columna vertebral del orden jurídico, pero no opera sola: necesita coordinación con costumbre, jurisprudencia y principios para lograr justicia efectiva. Diseñada y aplicada con método, traduce fines públicos en reglas previsibles; mal concebida, multiplica conflictos y mina la confianza en las instituciones. Por ello, su estudio exige tanto técnica normativa como ética de responsabilidad.",
                    },
                  ],
                },
                {
                  id: "3.1.3.2",
                  numbering: "3.1.3.2",
                  title: "Costumbre",
                  content: [
                    {
                      type: "paragraph",
                      text: "La costumbre es una práctica social constante, pública y uniforme que los miembros de una comunidad consideran jurídicamente obligatoria (opinio iuris). En ciertos ámbitos y bajo condiciones específicas, el ordenamiento reconoce esa práctica como fuente formal, ya sea para integrar vacíos legales, para interpretar textos ambiguos o, excepcionalmente, para constituir regla aplicable por sí misma. Su fuerza no proviene de un acto legislativo, sino de la repetición estable y de la convicción de obligatoriedad. Por ello, su prueba exige demostrar continuidad, generalidad y conformidad con la moral y el orden público. En sistemas codificados, la costumbre suele ser secundaria respecto de la ley, pero no por ello irrelevante.",
                    },
                    {
                      type: "paragraph",
                      text: "La tipología clásica distingue entre costumbre secundum legem (que desarrolla la ley), praeter legem (que suple vacíos) y contra legem (contraria a la ley, usualmente inadmisible). En la práctica, su reconocimiento varía por materia: tiene mayor peso en ámbitos mercantiles, rurales o de derecho internacional, y menor en materias fuertemente regladas. Su interacción con los derechos fundamentales y con el principio de igualdad obliga a depurar prácticas discriminatorias o contrarias a la dignidad. La prudencia profesional dicta verificar siempre la compatibilidad de la costumbre invocada con la Constitución y con leyes especiales, así como recabar prueba idónea (testimonios, documentos, peritajes antropológicos cuando procede).",
                    },

                    {
                      type: "accordion",
                      header: "Elementos probatorios",
                      open: false,
                      text: "Generalidad y uniformidad; continuidad temporal; publicidad; opinio iuris; compatibilidad con moral y orden público; prueba documental y testimonial suficiente.",
                    },

                    {
                      type: "paragraph",
                      text: "Ejemplos ilustran su funcionamiento. En comunidades agrarias, usos de reparto de agua o herencia pueden reconocerse si cumplen requisitos legales y se armonizan con derechos de terceros. En comercio, prácticas reiteradas entre empresas pueden integrar cláusulas tácitas. En el ámbito laboral, usos consistentes pueden orientar interpretación de contratos y reglamentos. En todos los casos, el juez debe cuidar que lo consuetudinario no legitime abusos ni desigualdades, aplicando criterios de razonabilidad y proporcionalidad. La costumbre, bien entendida, es un puente entre práctica social y sistema jurídico.",
                    },
                    {
                      type: "paragraph",
                      text: "En docencia, estudiar la costumbre afina habilidades de investigación empírica y de análisis contextual: observar prácticas, documentarlas y evaluar su compatibilidad con el marco legal. En diseño institucional, invita a regular con sensibilidad cultural, aprovechando prácticas virtuosas y corrigiendo las nocivas. La clave es reconocer que no toda repetición genera derecho: hace falta convicción de obligatoriedad y armonía con el orden jurídico. Con este enfoque, la costumbre aporta flexibilidad y cercanía al sistema, sin sacrificar seguridad jurídica.",
                    },

                    {
                      type: "accordion",
                      header: "Errores a evitar",
                      open: false,
                      text: "Invocar usos sin probar opinio iuris; pretender costumbre contra legem; desconocer impactos en derechos; confundir cortesía social con práctica normativa.",
                    },

                    {
                      type: "paragraph",
                      text: "Como síntesis, la costumbre opera como mecanismo de adaptación del derecho a contextos cambiantes y a la diversidad cultural. Reconocida con criterios claros y aplicada con prudencia, complementa la ley, reduce fricciones y legitima soluciones arraigadas en la vida real de las comunidades.",
                    },
                    
                  ],
                },
                {
                  id: "3.1.3.3",
                  numbering: "3.1.3.3",
                  title: "Jurisprudencia",
                  content: [
                    {
                      type: "paragraph",
                      text: "La jurisprudencia se entiende como el conjunto de criterios emanados de las resoluciones de los tribunales que, por su reiteración o por su jerarquía, orientan o vinculan la interpretación y aplicación del Derecho. Su función es doble: uniformar el sentido de las normas para dotar de previsibilidad al sistema y corregir ambigüedades, lagunas o antinomias que el texto legal no resuelve por sí mismo. En términos operativos, la jurisprudencia proporciona ‘razones públicas’ para decidir casos análogos, fortaleciendo la igualdad ante la ley —casos iguales deben resolverse de forma igual— y la seguridad jurídica —las personas pueden anticipar la consecuencia jurídica de su conducta—. Según el ordenamiento, su fuerza puede ser obligatoria o persuasiva; en todo caso, su autoridad deriva de la calidad argumentativa, de la consistencia con la Constitución y de su difusión accesible a operadores jurídicos y ciudadanía.",
                    },
                    {
                      type: "paragraph",
                      text: "Trabajar con jurisprudencia exige comprender la anatomía de una decisión judicial. La ‘ratio decidendi’ es la razón determinante del fallo —la regla del caso—; los ‘obiter dicta’ son consideraciones accesorias o ilustrativas. Distinguir entre ambas evita extrapolaciones indevidas. También importa identificar con precisión los hechos relevantes (matriz fáctica), la cuestión jurídica debatida (issue), el estándar probatorio aplicado y el criterio interpretativo empleado (literal, sistemático, teleológico, conforme a Constitución). Una sentencia es un argumento completo: parte de premisas normativas y fácticas, razona con principios y reglas, y culmina en una conclusión práctica (resolver, condenar, absolver, conceder un amparo, etc.). Solo así puede funcionar como precedente. La calidad de la jurisprudencia, por tanto, no se mide por autoridad desnuda, sino por su capacidad de guiar decisiones futuras con claridad y justificación suficiente.",
                    },

                    {
                      type: "accordion",
                      header: "Claves para usar precedentes",
                      open: false,
                      text: "1) Identificar la ratio decidendi; 2) delimitar hechos relevantes; 3) verificar si el precedente es obligatorio o persuasivo; 4) comprobar jerarquía y vigencia; 5) justificar analogía o distinción (distinguishing); 6) articular compatibilidad con Constitución y derechos humanos.",
                    },

                    {
                      type: "paragraph",
                      text: "La relación entre jurisprudencia y ley es de coordinación, no de sustitución. La ley fija el marco general y la jurisprudencia lo concreta en casos específicos, precisando alcances, integrando lagunas y resolviendo conflictos entre normas. Cuando una interpretación legal contradice la Constitución o los derechos humanos, la jurisprudencia —a través del control de constitucionalidad y convencionalidad— corrige la desviación. Este diálogo requiere reglas claras de preferencia: supremacía constitucional, especialidad y cronología. En sistemas de tradición codificada, los códigos ocupan el centro, pero la práctica judicial ha ganado un papel creciente como técnica de uniformación; en sistemas de common law, el precedente es fuente axial y la ley lo complementa. En ambos, el objetivo es el mismo: coherencia, estabilidad y adaptabilidad del orden jurídico.",
                    },
                    {
                      type: "paragraph",
                      text: "Desde la práctica forense, los precedentes ordenan la estrategia. Quien litiga debe construir una ruta de precedentes: identificar criterios aplicables, explicar su pertinencia y anticipar contra‑argumentos. Dos destrezas resultan esenciales: (i) la capacidad de ‘distinguir’ —mostrar por qué un precedente no aplica a los hechos del caso— y (ii) la de ‘integrar’ —conectar varios precedentes para proponer una solución armónica—. También es clave documentar la vigencia de los criterios (si fueron superados, modificados o reafirmados) y su jerarquía (tribunal emisor). Citar sin análisis o invocar precedentes desactualizados debilita la credibilidad del argumento y puede conducir a decisiones erróneas, costosas de revertir.",
                    },

                    {
                      type: "accordion",
                      header: "Errores frecuentes",
                      open: false,
                      text: "Confundir obiter dicta con ratio; citar una frase aislada sin su contexto; omitir identidad o relevancia de hechos; ignorar cambios normativos posteriores; tratar pronunciamientos persuasivos como obligatorios; desatender el control de constitucionalidad y convencionalidad.",
                    },

                    {
                      type: "paragraph",
                      text: "Ejemplos permiten visualizar su operatividad. En materia administrativa, la jurisprudencia puede definir el alcance del debido proceso en procedimientos sancionadores, obligando a la autoridad a notificar correctamente y a permitir defensa. En consumo, precedentes pueden establecer estándares de información clara y veraz para proveedores. En laboral, criterios uniformes pueden precisar la carga probatoria en despidos injustificados. En penal, la jurisprudencia contribuye a acotar tipos penales abiertos y a reforzar la presunción de inocencia. En todos los casos, su valor reside en transformar abstracciones en guías aplicables, disminuyendo incertidumbre y arbitrariedad.",
                    },
                    {
                      type: "paragraph",
                      text: "Como cierre, la jurisprudencia es una fuente dinámica que conecta pasado y futuro: conserva aprendizajes de casos resueltos y los proyecta a controversias venideras. Bien utilizada, promueve igualdad, confianza y eficiencia; mal usada, petrifica el Derecho o legitima decisiones incongruentes. La tarea profesional consiste en leerla con rigor, aplicarla con prudencia y justificar siempre la elección entre seguir, distinguir o superar un precedente, al servicio de la Constitución y de la justicia material.",
                    },
                  ],
                },
                {
                  id: "3.1.3.4",
                  numbering: "3.1.3.4",
                  title: "Principios generales del Derecho",
                  content: [
                    {
                      type: "paragraph",
                      text: "Los principios generales del Derecho son normas de alto nivel de abstracción que expresan valores y fines estructurales del orden jurídico (dignidad, igualdad, libertad, buena fe, proporcionalidad, seguridad jurídica, entre otros). Tienen fuerza normativa propia: orientan la interpretación de las reglas, integran lagunas y sirven de parámetro para controlar la validez de actos y normas cuando el literalismo llevaría a resultados injustos. No son meras máximas morales; operan con exigencias de racionalidad pública y dentro de los límites del sistema constitucional. Su función es asegurar coherencia y justicia material, de modo que el Derecho no se reduzca a un catálogo de mandatos desarticulados, sino que actúe como un conjunto ordenado por fines y razones susceptibles de justificación ante terceros.",
                    },
                    {
                      type: "paragraph",
                      text: "En la práctica jurisdiccional, los principios se activan en tres escenarios típicos: (i) interpretación, cuando un texto admite varias lecturas y debe preferirse aquella compatible con valores constitucionales; (ii) integración, cuando existe laguna normativa y el principio suple la ausencia de regla (p. ej., equidad, buena fe, enriquecimiento sin causa); y (iii) control, cuando una regla o acto aparentemente válido produce resultados desproporcionados o discriminatorios, caso en el que los principios operan como límite. Su aplicación exige método: identificar el principio pertinente, mostrar su anclaje constitucional o legal, explicitar la relación con los hechos del caso y razonar por qué la solución propuesta maximiza la protección de derechos y bienes jurídicos en juego.",
                    },

                    {
                      type: "accordion",
                      header: "Principios recurrentes",
                      open: false,
                      text: "Legalidad y seguridad jurídica; igualdad y no discriminación; dignidad humana; proporcionalidad; buena fe y confianza legítima; equidad; irretroactividad de la ley en perjuicio; debido proceso; non bis in idem.",
                    },

                    {
                      type: "paragraph",
                      text: "La herramienta analítica por excelencia para aplicar principios en conflictos de derechos es la proporcionalidad. El test exige verificar: (a) finalidad legítima; (b) idoneidad del medio para alcanzar el fin; (c) necesidad —no hay alternativa menos restrictiva con igual eficacia—; y (d) proporcionalidad en sentido estricto —balance entre beneficios públicos y costos para el derecho afectado—. Este esquema obliga a transparentar razones, evita arbitrariedad y deja huella argumentativa verificable. En el ámbito privado, principios como buena fe, abuso del derecho o función social de la propiedad cumplen tareas análogas, guiando soluciones equitativas cuando la letra rígida del contrato o de la ley no captura adecuadamente el caso concreto.",
                    },
                    {
                      type: "paragraph",
                      text: "El uso responsable de principios tiene límites claros. No autorizan a ‘derogar’ la ley por simple invocación retórica ni permiten sustituir al legislador. Su fuerza depende de su reconocimiento en el sistema y de la calidad de la justificación. Por ello, siempre debe acreditarse su fuente (constitucional, legal o jurisprudencial), su pertinencia para el caso y su compatibilidad con otras normas y principios en juego. La ponderación no es intuición; es un procedimiento con etapas y criterios, susceptible de crítica intersubjetiva. Cuando se usa para encubrir preferencias personales o para evadir reglas claras, erosiona la seguridad jurídica.",
                    },

                    {
                      type: "accordion",
                      header: "Checklist de aplicación responsable",
                      open: false,
                      text: "1) Identificar el principio y su base normativa; 2) explicar su conexión con los hechos; 3) justificar idoneidad, necesidad y balance; 4) revisar alternativas menos gravosas; 5) cuidar coherencia con precedentes y con el resto del sistema.",
                    },

                    {
                      type: "paragraph",
                      text: "Ejemplos ilustran su operatividad. En control administrativo, la confianza legítima protege a particulares frente a cambios abruptos de criterio estatal; en contratación, la buena fe impide sorpresas abusivas y favorece interpretaciones que preservan la finalidad económica del acuerdo; en sanciones, la proporcionalidad evita castigos excesivos respecto del daño causado; en igualdad y no discriminación, el principio exige justificar con razones fuertes cualquier trato diferenciado. Estos usos muestran cómo los principios conectan justicia material con previsibilidad y disciplina institucional.",
                    },
                    {
                      type: "paragraph",
                      text: "En síntesis, los principios generales del Derecho son el ‘nervio’ que preserva unidad y sentido del sistema jurídico. Bien empleados, permiten resolver casos difíciles con transparencia argumentativa y fidelidad a la Constitución; mal utilizados, abren la puerta a decisiones discrecionales. La tarea profesional y académica es dominar su contenido, su jerarquía y su método de aplicación para que la razón práctica —no el voluntarismo— gobierne la interpretación, la integración y el control del Derecho.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          id: "3.2",
          numbering: "3.2",
          title: "Clasificación entre fuentes formales, reales e históricas",
          content: [
            {
              type: "paragraph",
              text: "La clasificación de las fuentes del derecho en formales, reales e históricas permite comprender de manera ordenada de dónde emanan las normas, cómo se vuelven obligatorias y por qué surgen en un momento determinado. Las fuentes formales contienen la regla y el procedimiento que le confiere obligatoriedad (p. ej., legislación, costumbre, jurisprudencia, principios); las reales explican el trasfondo social, económico, político y cultural que motiva su creación; y las históricas conservan testimonios normativos del pasado que, aunque no vigentes, orientan la interpretación y el desarrollo del derecho positivo. Esta tríada no es puramente académica: funciona como mapa para interpretar casos concretos, jerarquizar normas y detectar vacíos que las demás fuentes (notablemente los principios) ayudan a colmar. Así, cuando el operador jurídico identifica el tipo de fuente involucrada, puede justificar mejor su razonamiento, atender a la vigencia y compatibilidad normativa, y, sobre todo, conectar la norma con la realidad que la legitima y con los antecedentes que la explican. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "En esta clasificación, las fuentes formales son cruciales porque marcan el «cómo» una regla adquiere fuerza obligatoria: la ley mediante el proceso legislativo, la costumbre por su reiteración y aceptación general, la jurisprudencia al unificar criterios y los principios generales al orientar con postulados de justicia, buena fe y equidad. Por su parte, las fuentes reales responden al «por qué» de la norma: la presión de fenómenos como el comercio electrónico, la protección al consumidor o el cambio climático obliga a diseñar reglas específicas; y las fuentes históricas, como códigos antiguos o compendios coloniales, aportan perspectiva evolutiva y técnica para evitar contradicciones y rescatar soluciones probadas. Esta distinción mejora la argumentación jurídica y evita caer en formalismos vacíos o historicismos sin efecto normativo. :contentReference[oaicite:1]{index=1}",
            },

            {
              type: "image",
              src: "https://static.docsity.com/documents_first_pages/2023/09/08/ecab10a6885c916f2344fceb71622e87.png",
              alt: "Esquema de clasificación de las fuentes del derecho: formales, reales e históricas",
            },

            {
              type: "paragraph",
              text: "La utilidad práctica de diferenciar las fuentes aparece, por ejemplo, al impugnar un acto administrativo: la defensa puede citar la ley aplicable (formal), apoyarse en jurisprudencia para interpretar sus lagunas (formal), alegar que la norma debe leerse conforme a los principios (formal) y, a la vez, argumentar que la finalidad real de la regulación es proteger determinado interés público (real). Incluso puede invocar antecedentes históricos para justificar el sentido de una figura. Esta mirada integral previene lecturas aisladas y fomenta decisiones coherentes con la finalidad del orden jurídico. :contentReference[oaicite:2]{index=2}",
            },

            {
              type: "accordion",
              header: "Mapa rápido de la clasificación",
              open: false,
              items: [
                {
                  header: "Formales",
                  text: "Legislación, costumbre, jurisprudencia, principios generales del derecho: plasman y vuelven obligatoria la regla.",
                },
                {
                  header: "Reales",
                  text: "Factores sociales, económicos, políticos y culturales que motivan el contenido de la norma.",
                },
                {
                  header: "Históricas",
                  text: "Documentos y cuerpos legales pretéritos que sirven de antecedente o inspiración interpretativa.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Ejemplos ilustran la interacción: la Ley Federal de Protección al Consumidor (formal) puede rastrear su razón de ser en prácticas abusivas del mercado (real) y nutrirse de antecedentes de derecho comparado (históricos). Del mismo modo, el reconocimiento de usos mercantiles locales podría escalar a costumbre con efectos obligatorios si cumple notas de publicidad, reiteración y aceptación, mientras que la jurisprudencia estabiliza el sentido de cláusulas ambiguas y los principios —v. gr., equidad— moderan resultados desproporcionados. En conjunto, la clasificación evita reducir el derecho a textos aislados y obliga a pensar en su finalidad y trayectoria. :contentReference[oaicite:3]{index=3}",
            },

            {
              type: "accordion",
              header: "Claves prácticas para el aula y el foro",
              open: false,
              items: [
                {
                  header: "Identifica la fuente dominante",
                  text: "¿Tu argumento depende de una regla positiva, de un principio o de un antecedente? Prioriza y jerarquiza.",
                },
                {
                  header: "Conecta con el contexto real",
                  text: "Explica por qué la sociedad necesitó esa norma (fuente real) y cómo ese fin guía su interpretación.",
                },
                {
                  header: "Consulta antecedentes",
                  text: "Revisa códigos y compendios históricos para entender la evolución y evitar contradicciones.",
                },
              ],
            },
          ],
          subthemes: [
            {
              id: "3.2.1",
              numbering: "3.2.1",
              title: "Fuentes formales",
              content: [
                {
                  type: "paragraph",
                  text: "Las fuentes formales son los procedimientos y vehículos mediante los cuales la regla jurídica se exterioriza y adquiere obligatoriedad. Comprenden la legislación (normas escritas emanadas del órgano competente), la costumbre (práctica social reiterada y aceptada), la jurisprudencia (criterios judiciales uniformes) y los principios generales (postulados de justicia que orientan la interpretación). No actúan como compartimentos estancos: una controversia puede requerir combinarlas —por ejemplo, leer una ley a la luz de la jurisprudencia aplicable y de los principios de buena fe y equidad— para alcanzar una solución coherente y socialmente justa. Esta perspectiva impide que el razonamiento se agote en el tenor literal y, en cambio, privilegia la finalidad, la coherencia sistémica y la protección de derechos. :contentReference[oaicite:4]{index=4}",
                },
                {
                  type: "paragraph",
                  text: "En la legislación, la fuerza se asienta en la formalidad del proceso de creación; en la costumbre, en la constancia pública del uso y su aceptación general; en la jurisprudencia, en la reiteración y publicación oficial de criterios; y en los principios, en su carácter supletorio y orientador cuando faltan reglas explícitas o resultan insuficientes. Al estudiar un caso, el operador jurídico examina primero si hay disposición legal aplicable; si existen vacíos o ambigüedades, recurre a la jurisprudencia y los principios; y, cuando es pertinente, verifica si una práctica social puede elevarse a regla por vía consuetudinaria. Este método escalonado da seguridad y flexibilidad al sistema. :contentReference[oaicite:5]{index=5}",
                },

                {
                  type: "image",
                  src: "https://website-assets.studocu.com/img/document_thumbnails/884fd0e765929270df4db5c8d86f7e2d/thumb_1200_729.webp",
                  alt: "Esquema de fuentes formales: ley, costumbre, jurisprudencia y principios",
                },

                {
                  type: "paragraph",
                  text: "Desde el punto de vista pedagógico, distinguir las fuentes formales ayuda a estructurar la argumentación: (i) identifica la norma aplicable, (ii) contrasta con criterios judiciales vigentes, (iii) somete el resultado a principios de justicia material, y (iv) verifica usos con pretensión de juridicidad. De este modo, la respuesta jurídica no depende solo de la literalidad sino que se integra con criterios hermenéuticos y valorativos, lo que favorece decisiones consistentes con la finalidad del ordenamiento y con las exigencias de seguridad jurídica. :contentReference[oaicite:6]{index=6}",
                },

                {
                  type: "accordion",
                  header: "Resumen operativo",
                  open: false,
                  items: [
                    {
                      header: "Legislación",
                      text: "Regla escrita del órgano competente; obligatoriedad tras proceso formal.",
                    },
                    {
                      header: "Costumbre",
                      text: "Uso social constante y aceptado con fuerza normativa en ciertos supuestos.",
                    },
                    {
                      header: "Jurisprudencia y principios",
                      text: "Interpretación uniforme y orientación axiológica para colmar lagunas.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "En la práctica forense, es frecuente que la parte actora base su pretensión en la ley y la demandada la combata invocando jurisprudencia o principios como la buena fe. La judicatura, a su vez, debe armonizar todas las fuentes, justificando por qué una prevalece o complementa a otra en el caso concreto. Esta tarea demanda claridad conceptual sobre la naturaleza y función de cada fuente formal, así como atención al contexto real que motivó la regulación y a sus antecedentes históricos. :contentReference[oaicite:7]{index=7}",
                },

                {
                  type: "accordion",
                  header: "Errores comunes y cómo evitarlos",
                  open: false,
                  items: [
                    {
                      header: "Formalismo rígido",
                      text: "Aplicar la letra sin verificar finalidad ni principios puede producir injusticias.",
                    },
                    {
                      header: "Historicismo sin efecto",
                      text: "Citar antecedentes sin conexión normativa actual aporta poco a la decisión.",
                    },
                    {
                      header: "Confundir usos con costumbre",
                      text: "No todo hábito social tiene fuerza obligatoria.",
                    },
                  ],
                },
              ],
              subthemes: [
                {
                  id: "3.2.1.1",
                  numbering: "3.2.1.1",
                  title: "Ley",
                  content: [
                    {
                      type: "paragraph",
                      text: "La ley es la norma escrita, general y obligatoria emanada del órgano legislativo competente, cuyo cumplimiento puede asegurarse coercitivamente. Su legitimidad y fuerza provienen de un proceso de creación previamente establecido, así como de su publicación oficial, que garantiza conocimiento y exigibilidad. En el sistema mexicano, la Constitución, las leyes y los códigos integran un entramado normativo jerarquizado que busca ordenar la vida social, proteger derechos y delimitar competencias. Ejemplos cotidianos: Código Penal, Ley Federal del Trabajo o Ley Federal de Protección al Consumidor. La ley ofrece previsibilidad, pero también demanda interpretación sistemática y conforme a principios cuando su literalidad no resuelve el caso. :contentReference[oaicite:8]{index=8}",
                    },
                    {
                      type: "paragraph",
                      text: "El valor práctico de la ley en la argumentación radica en su carácter de primera referencia: el litigante identifica la disposición aplicable y confronta sus elementos con los hechos. Si hay ambigüedad, precisa el sentido teleológico; si hay antinomias, acude a criterios de jerarquía, especialidad y temporalidad. Y cuando no hay regla expresa, la ley puede ser integrada con analogía, principios y jurisprudencia. Esta metodología evita arbitrariedad y proporciona un marco transparente para resolver conflictos, al tiempo que admite la flexibilidad necesaria para hacer justicia en casos singulares. :contentReference[oaicite:9]{index=9}",
                    },

                    {
                      type: "paragraph",
                      text: "Desde la enseñanza del derecho, es clave mostrar la ley no como texto aislado, sino como pieza dentro de un sistema dinámico donde interactúa con principios, costumbre y jurisprudencia. Así, se evita caer en positivismos ingenuos que desatienden el contexto de producción normativa (fuentes reales) y los antecedentes (fuentes históricas). En suma, la ley es punto de partida y eje, pero su correcta aplicación exige dialogar con las demás fuentes para alcanzar decisiones razonadas y socialmente aceptables. :contentReference[oaicite:10]{index=10}",
                    },

                    {
                      type: "accordion",
                      header: "Puntos clave de la ley",
                      open: false,
                      items: [
                        {
                          header: "Generalidad y obligatoriedad",
                          text: "Se dirige a una pluralidad de supuestos y personas.",
                        },
                        {
                          header: "Proceso formal y publicación",
                          text: "Creación conforme a reglas y entrada en vigor oficial.",
                        },
                        {
                          header: "Interpretación",
                          text: "Sistemática, teleológica y conforme a principios.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "La litigación estratégica con base en ley combina: (i) identificación precisa del precepto, (ii) interpretación que lo haga compatible con la Constitución y los derechos humanos, (iii) corroboración de criterios jurisprudenciales vigentes y (iv) exposición clara de la finalidad regulatoria que se busca tutelar. Este enfoque robustece la pretensión, resiste el escrutinio judicial y facilita que la sentencia tenga efectos coherentes y duraderos. :contentReference[oaicite:11]{index=11}",
                    },

                    {
                      type: "accordion",
                      header: "Guía de uso en escritos forenses",
                      open: false,
                      items: [
                        {
                          header: "Cita precisa",
                          text: "Artículo, fracción y tema; evita citas genéricas.",
                        },
                        {
                          header: "Compatibilidad constitucional",
                          text: "Argumenta control de regularidad y bloque de derechos.",
                        },
                        {
                          header: "Apoyo en precedentes",
                          text: "Integra criterios para fortalecer tu lectura.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "3.2.1.2",
                  numbering: "3.2.1.2",
                  title: "Proceso legislativo",
                  content: [
                    {
                      type: "paragraph",
                      text: "El proceso legislativo es la secuencia institucional mediante la cual una iniciativa se transforma en ley. Su función es doble: (i) asegura deliberación democrática —mediante discusión y revisión— y (ii) confiere validez formal a la norma, pues solo tras cumplir las etapas previstas y publicarse adquiere fuerza obligatoria. En términos generales, incluye iniciativa, discusión, aprobación, sanción, publicación y entrada en vigor. Cada fase introduce controles de calidad: comisiones especializadas, votaciones, revisiones técnicas y política pública. Entender el proceso permite impugnar irregularidades formales que afecten la validez de la ley o fundamentar su legitimidad cuando se cumplió escrupulosamente. :contentReference[oaicite:12]{index=12}",
                    },
                    {
                      type: "paragraph",
                      text: "Pedagógicamente, estudiar el proceso legislativo dota al jurista de un «lente» para leer la ley como resultado de un diálogo entre poderes y sociedad. También ayuda a detectar la intención del legislador, a partir de dictámenes y exposiciones de motivos, y a interpretar disposiciones ambiguas. En litigio, la invalidez por vicios en el proceso (competencia, quórum, publicación) puede ser determinante. Finalmente, la iniciación de la vigencia —inmediata o diferida— marca el momento a partir del cual los particulares quedan vinculados, detalle crucial en controversias sobre hechos ocurridos en transición normativa. :contentReference[oaicite:13]{index=13}",
                    },

                    {
                      type: "image",
                      src: "https://imgv2-1-f.scribdassets.com/img/document/519353126/original/152ead1f7b/1?v=1",
                      alt: "Diagrama de etapas del proceso legislativo",
                    },

                    {
                      type: "accordion",
                      header: "Controles en cada etapa",
                      open: false,
                      items: [
                        {
                          header: "Discusión técnica",
                          text: "Comisiones analizan viabilidad jurídica, económica y social.",
                        },
                        {
                          header: "Votación y sanción",
                          text: "Mayorías requeridas y revisión del ejecutivo.",
                        },
                        {
                          header: "Publicación y vigencia",
                          text: "Difusión oficial y reglas de entrada en vigor.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "En suma, el proceso legislativo no es un formalismo accesorio, sino el mecanismo que da legitimidad y previsibilidad a la ley. Su observancia permite que la ciudadanía confíe en las reglas del juego democrático y que los tribunales cuenten con parámetros objetivos para evaluar la validez de las normas y su aplicación a casos concretos. :contentReference[oaicite:14]{index=14}",
                    },

                    {
                      type: "accordion",
                      header: "Buenas prácticas para el análisis",
                      open: false,
                      items: [
                        {
                          header: "Revisar exposiciones de motivos",
                          text: "Iluminan la finalidad y guían la interpretación.",
                        },
                        {
                          header: "Verificar publicación",
                          text: "Asegura conocimiento y exigibilidad.",
                        },
                        {
                          header: "Precisar vigencia",
                          text: "Clave en hechos ocurridos durante transiciones.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "3.2.1.2.1",
                  numbering: "3.2.1.2.1",
                  title: "Etapas del proceso legislativo",
                  content: [
                    {
                      type: "paragraph",
                      text: "El proceso suele comprender: (1) Iniciativa: presentación por legisladores u otros sujetos legitimados; (2) Discusión: análisis en comisiones y plenos, donde se valora técnica y políticamente la propuesta; (3) Aprobación: votación por mayorías; (4) Sanción: aceptación formal del ejecutivo; (5) Publicación: incorporación en el órgano oficial para conocimiento general; y (6) Iniciación de la vigencia: momento a partir del cual obliga. Cada etapa cumple una función de validación y transparencia, y su omisión puede provocar invalidez o inaplicabilidad de la norma. :contentReference[oaicite:15]{index=15}",
                    },
                    {
                      type: "paragraph",
                      text: "Ejemplo práctico: una reforma educativa pasa por comisiones de educación y presupuesto, recibe ajustes lingüísticos y de técnica legislativa, se vota en el pleno, el ejecutivo la sanciona, se publica en el Diario Oficial y entra en vigor en fecha determinada. En litigios, la defensa puede cuestionar si la mayoría requerida se alcanzó, si el contenido aprobado coincide con lo publicado o si la vacatio legis fue respetada. Estas cuestiones, lejos de ser meramente formales, determinan la validez y aplicabilidad de la norma al caso concreto. :contentReference[oaicite:16]{index=16}",
                    },

                  

                    {
                      type: "accordion",
                      header: "Checklist de control",
                      open: false,
                      items: [
                        {
                          header: "Competencia",
                          text: "¿Quién presentó la iniciativa? ¿Órgano competente deliberó?",
                        },
                        {
                          header: "Trazabilidad del texto",
                          text: "¿Lo votado coincide con lo publicado?",
                        },
                        {
                          header: "Vigencia",
                          text: "¿Se respetó la fecha y condiciones de entrada en vigor?",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "Comprender y documentar cada etapa respalda la defensa o impugnación de normas, fortalece la cultura de legalidad y facilita una enseñanza del derecho que muestre a la ley como producto de un proceso público, deliberado y controlado. :contentReference[oaicite:17]{index=17}",
                    },

                    {
                      type: "accordion",
                      header: "Errores frecuentes",
                      open: false,
                      items: [
                        {
                          header: "Confundir aprobación con vigencia",
                          text: "Sin publicación y fecha de inicio, no obliga.",
                        },
                        {
                          header: "Omitir revisión de comisiones",
                          text: "Pierdes insumos interpretativos valiosos.",
                        },
                        {
                          header: "Desconocer vacatio legis",
                          text: "Afecta hechos ocurridos en transición normativa.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "3.2.1.3",
                  numbering: "3.2.1.3",
                  title: "La costumbre",
                  content: [
                    {
                      type: "paragraph",
                      text: "La costumbre es la práctica social constante, pública y aceptada que, bajo ciertas condiciones, adquiere fuerza obligatoria. Es especialmente relevante en ámbitos donde la ley es lacónica o reconoce expresamente la vigencia de usos locales (por ejemplo, algunos usos mercantiles o comunitarios). Para que sea fuente formal, suele requerir antigüedad, reiteración, publicidad y compatibilidad con el orden público y la moral. No debe confundirse con simples «usos» sociales, que carecen de obligatoriedad jurídica. En México, el pluralismo cultural ha permitido reconocer prácticas consuetudinarias en contextos específicos, siempre que se sometan a control de constitucionalidad y derechos humanos. :contentReference[oaicite:18]{index=18}",
                    },
                    {
                      type: "paragraph",
                      text: "En litigio, probar la costumbre implica acreditar su existencia y aceptación por la comunidad, lo cual puede hacerse mediante peritajes, testimonios y documentos. Una vez demostrada, el juez valora su aplicación al caso concreto, verificando que no contravenga normas de orden público. La costumbre puede complementar la ley, interpretarla o, excepcionalmente, suplir su ausencia. Su principal aporte es dotar al sistema de flexibilidad y sensibilidad cultural, permitiendo soluciones más ajustadas a realidades locales. :contentReference[oaicite:19]{index=19}",
                    },

                    

                    {
                      type: "accordion",
                      header: "Criterios para reconocer costumbre jurídica",
                      open: false,
                      items: [
                        {
                          header: "Reiteración",
                          text: "Práctica constante por un tiempo significativo.",
                        },
                        {
                          header: "Publicidad y aceptación",
                          text: "Conocida y aprobada por la comunidad.",
                        },
                        {
                          header: "Compatibilidad",
                          text: "No contraria a orden público ni a derechos fundamentales.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "Ejemplo didáctico: la forma de transmisión de tierras en comunidades rurales puede seguir costumbre local. Si un tribunal la reconoce por su reiteración, publicidad y compatibilidad, tendrá efectos obligatorios en ese ámbito. En cambio, un «uso» como saludar de cierta forma carece de consecuencias jurídicas. Distinguirlos evita errores argumentativos y refuerza la pertinencia cultural del derecho. :contentReference[oaicite:20]{index=20}",
                    },

                    {
                      type: "accordion",
                      header: "Diferenciar usos y costumbres",
                      open: false,
                      items: [
                        {
                          header: "Usos",
                          text: "Prácticas sociales sin fuerza jurídica.",
                        },
                        {
                          header: "Costumbre",
                          text: "Práctica con notas que le dan obligatoriedad en casos previstos.",
                        },
                        {
                          header: "Prueba",
                          text: "Carga probatoria sobre quien la invoca.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "3.2.1.3.1",
                  numbering: "3.2.1.3.1",
                  title: "Diferencia entre costumbre y usos",
                  content: [
                    {
                      type: "paragraph",
                      text: "La diferencia esencial radica en la fuerza obligatoria: la costumbre, cuando cumple requisitos (reiteración, publicidad, aceptación y compatibilidad), puede integrar el orden jurídico; los usos son hábitos sociales sin efectos normativos. Este deslinde es clave en ámbitos mercantiles y comunitarios, donde la práctica cotidiana estructura relaciones y expectativas. Un error frecuente en escritos forenses consiste en invocar «usos» como si fuesen costumbre, sin aportar prueba suficiente de sus notas constitutivas, lo que debilita el argumento y confunde al tribunal. :contentReference[oaicite:21]{index=21}",
                    },
                    {
                      type: "paragraph",
                      text: "Ilustremos: en un mercado local, pactar verbalmente el plazo de pago podría ser un uso; si esa práctica, por su constancia y aceptación, es reconocida por las partes y por la judicatura, puede elevarse a costumbre en ese entorno. En cambio, un trato de cortesía —como regalar envíos en fechas festivas— es un uso sin fuerza jurídica. La clave es la prueba de su obligatoriedad social y su compatibilidad con el orden público. :contentReference[oaicite:22]{index=22}",
                    },

                    {
                      type: "accordion",
                      header: "Checklist probatorio",
                      open: false,
                      items: [
                        {
                          header: "Antigüedad y constancia",
                          text: "¿Desde cuándo se observa? ¿Con qué frecuencia?",
                        },
                        {
                          header: "Aceptación general",
                          text: "¿La comunidad la considera obligatoria?",
                        },
                        {
                          header: "Compatibilidad",
                          text: "¿Se opone a normas imperativas?",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "Diferenciar correctamente ahorra controversias probatorias y encamina el litigio. Para el aula, este contraste ayuda a que el estudiantado identifique cuándo una práctica social puede escalar a norma y cuándo permanece como simple uso, afinando su criterio para la interpretación del sistema de fuentes. :contentReference[oaicite:23]{index=23}",
                    },

                    {
                      type: "accordion",
                      header: "Errores a evitar",
                      open: false,
                      items: [
                        {
                          header: "Invocar usos como costumbre",
                          text: "Sin prueba robusta, el argumento será débil.",
                        },
                        {
                          header: "Ignorar derechos humanos",
                          text: "Una costumbre incompatible no puede admitirse.",
                        },
                        {
                          header: "Generalizar localismos",
                          text: "La fuerza puede ser territorial o sectorial, no universal.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "3.2.1.4",
                  numbering: "3.2.1.4",
                  title: "Jurisprudencia",
                  content: [
                    {
                      type: "paragraph",
                      text: "La jurisprudencia reúne criterios uniformes de los tribunales que interpretan y aplican la ley, con fuerza obligatoria en los términos que el sistema prevea. Su finalidad es dar seguridad y coherencia, evitando decisiones contradictorias en casos similares. Se forma mediante reiteración y publicación oficial; en México, su difusión en el Semanario Judicial de la Federación garantiza acceso y certeza. Para la litigación, conocer la línea jurisprudencial es tan importante como dominar el texto legal: muchas controversias se deciden por la pauta interpretativa establecida. :contentReference[oaicite:24]{index=24}",
                    },
                    {
                      type: "paragraph",
                      text: "En la práctica, el abogado debe (i) localizar precedentes aplicables, (ii) acreditar su obligatoriedad y vigencia, y (iii) argumentar analogía o distinción según la similitud fáctica con su caso. Además, la jurisprudencia puede corregir interpretaciones rígidas, armonizando ley y principios. Su valor pedagógico reside en que muestra el derecho vivo: no solo el que está escrito, sino el que los tribunales construyen al resolver conflictos reales. :contentReference[oaicite:25]{index=25}",
                    },

                    {
                      type: "image",
                      src: "https://i.ytimg.com/vi/sKXdYi14qNc/maxresdefault.jpg",
                      alt: "Estructura de un criterio jurisprudencial y su aplicación",
                    },

                    {
                      type: "accordion",
                      header: "Uso estratégico",
                      open: false,
                      items: [
                        {
                          header: "Localiza",
                          text: "Palabras clave y órgano emisor.",
                        },
                        {
                          header: "Verifica",
                          text: "Vigencia, obligatoriedad y rubro.",
                        },
                        {
                          header: "Aplica",
                          text: "Analiza similitud fáctica (analogía/distinción).",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "Ejemplo: la calificación de una cláusula contractual como abusiva puede consolidarse jurisprudencialmente tras múltiples resoluciones coincidentes; en adelante, quien litigue casos similares deberá seguir esa guía salvo razones robustas para apartarse. Esto favorece la igualdad ante la ley y la previsibilidad. :contentReference[oaicite:26]{index=26}",
                    },

                    {
                      type: "accordion",
                      header: "Buenas prácticas",
                      open: false,
                      items: [
                        {
                          header: "Cita completa",
                          text: "Rubro, texto y datos de identificación.",
                        },
                        {
                          header: "Contexto",
                          text: "Explica el porqué del criterio y su alcance.",
                        },
                        {
                          header: "Actualización",
                          text: "Comprueba que no se haya superado.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "3.2.1.4.1",
                  numbering: "3.2.1.4.1",
                  title: "La doctrina",
                  content: [
                    {
                      type: "paragraph",
                      text: "La doctrina reúne estudios y análisis de juristas que, sin ser obligatorios, influyen en la legislación y la jurisprudencia al ofrecer construcciones teóricas, sistematizaciones y propuestas interpretativas. En el aula, orienta el aprendizaje; en el foro, refuerza argumentos cuando explica el sentido y finalidad de instituciones jurídicas o propone soluciones a vacíos normativos. Su valor depende de la autoridad intelectual, la consistencia metodológica y la recepción en la práctica judicial. :contentReference[oaicite:27]{index=27}",
                    },
                    {
                      type: "paragraph",
                      text: "En escritos forenses, citar doctrina pertinente (no genérica) puede dar profundidad y coherencia al argumento, sobre todo si dialoga con precedentes y con el texto legal aplicable. Asimismo, ayuda a detectar tendencias y corrientes que más tarde cristalizan en reformas o en criterios judiciales. Por ello, cultivar el hábito de lectura doctrinal es inversión segura para la formación profesional. :contentReference[oaicite:28]{index=28}",
                    },

                  

                    {
                      type: "accordion",
                      header: "Cómo usar la doctrina",
                      open: false,
                      items: [
                        {
                          header: "Pertinencia",
                          text: "Relaciona directamente con el problema jurídico.",
                        },
                        {
                          header: "Autoridad",
                          text: "Cita autores reconocidos y actuales.",
                        },
                        {
                          header: "Diálogo",
                          text: "Conecta con ley y precedentes, no la uses aislada.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "Ejemplo: al discutir la naturaleza de la equidad como principio, la doctrina ofrece marcos conceptuales para moderar la aplicación literal de la ley y orientar la decisión hacia la justicia material, sirviendo de puente entre texto normativo y solución prudente. :contentReference[oaicite:29]{index=29}",
                    },

                    {
                      type: "accordion",
                      header: "Precauciones",
                      open: false,
                      items: [
                        {
                          header: "No es obligatoria",
                          text: "Presenta como apoyo, no como fuente vinculante.",
                        },
                        {
                          header: "Actualización",
                          text: "Evita criterios superados o controvertidos sin advertencia.",
                        },
                        {
                          header: "Contextualiza",
                          text: "Aterriza en hechos y normas aplicables.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "3.2.1.5",
                  numbering: "3.2.1.5",
                  title: "Los principios generales del derecho",
                  content: [
                    {
                      type: "paragraph",
                      text: "Los principios generales son ideas-guía que orientan la creación, interpretación y aplicación del derecho. Actúan con carácter supletorio —para colmar lagunas— y como parámetros axiológicos —para evitar resultados injustos—. Entre ellos destacan la equidad, la buena fe, el respeto al debido proceso y la proporcionalidad. Su función es especialmente visible cuando la ley es ambigua o insuficiente, permitiendo decisiones coherentes con el ideal de justicia material. No sustituyen libremente a la ley; la complementan y encauzan, impidiendo interpretaciones que, aunque literales, resulten contrarias a la finalidad del sistema. :contentReference[oaicite:30]{index=30}",
                    },
                    {
                      type: "paragraph",
                      text: "Desde la enseñanza, trabajar con principios entrena el juicio prudencial: exige identificar la finalidad de la norma, ponderar bienes en tensión y argumentar con claridad por qué un principio pesa más que otro en el caso. En litigio, su invocación requiere justificación robusta y diálogo con el texto legal y la jurisprudencia, evitando caer en retórica vacía. Bien empleados, los principios fortalecen la racionalidad práctica del derecho y elevan la calidad de la decisión. :contentReference[oaicite:31]{index=31}",
                    },

                    {
                      type: "accordion",
                      header: "Principios usuales",
                      open: false,
                      items: [
                        {
                          header: "Equidad",
                          text: "Modera la ley para evitar resultados injustos.",
                        },
                        {
                          header: "Buena fe",
                          text: "Exige lealtad y honradez en el trato.",
                        },
                        {
                          header: "Proporcionalidad",
                          text: "Prohíbe sanciones o medidas excesivas.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "Ejemplos clásicos incluyen aforismos como «nadie debe ser condenado sin ser oído» o «lo accesorio sigue la suerte de lo principal», que sintetizan exigencias de debido proceso y coherencia patrimonial. En la práctica, un juez puede acudir a la equidad para ajustar una pena o moderar cláusulas penales desproporcionadas, siempre explicando su decisión a la luz de la finalidad de la regulación. :contentReference[oaicite:32]{index=32}",
                    },

                    {
                      type: "accordion",
                      header: "Guía de invocación",
                      open: false,
                      items: [
                        {
                          header: "Identifica la laguna o desproporción",
                          text: "Explica por qué la ley literal no basta.",
                        },
                        {
                          header: "Selecciona el principio idóneo",
                          text: "Justifica su pertinencia y alcance.",
                        },
                        {
                          header: "Conecta con precedentes",
                          text: "Refuerza con criterios judiciales compatibles.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "3.2.1.5.1",
                  numbering: "3.2.1.5.1",
                  title: "La equidad",
                  content: [
                    {
                      type: "paragraph",
                      text: "La equidad es el principio que permite adaptar la regla general a las particularidades del caso concreto para evitar resultados materialmente injustos. No anula la ley; la modera y orienta cuando su aplicación literal desatiende circunstancias relevantes. Es herramienta hermenéutica y de decisión prudente: obliga a ponderar bienes y a justificar por qué un ajuste conduce a mayor justicia sin vulnerar la seguridad jurídica. En el foro, su invocación exige motivación cuidadosa y, de ser posible, apoyo en precedentes o en doctrina autorizada. :contentReference[oaicite:33]{index=33}",
                    },
                    {
                      type: "paragraph",
                      text: "Un ejemplo práctico: moderar una cláusula penal desproporcionada frente al daño efectivamente causado, para evitar enriquecimiento indebido. Otro: ajustar plazos o sanciones cuando concurren causas extraordinarias no previstas por el legislador. En todos los casos, la equidad opera como puente entre la norma y la justicia del caso, reforzando la legitimidad de la decisión. :contentReference[oaicite:34]{index=34}",
                    },

                    {
                      type: "image",
                      src: "https://www.coomeva.com.co/en_equidad/publicaciones/168350/sabes-reconocer-la-equidad/info/coomeva/media/galeria186591.png",
                      alt: "Aplicación de la equidad a las particularidades del caso",
                    },

                    {
                      type: "accordion",
                      header: "Criterios de uso responsable",
                      open: false,
                      items: [
                        {
                          header: "Necesidad",
                          text: "Demuestra que la ley literal produce un resultado injusto.",
                        },
                        {
                          header: "Proporción",
                          text: "El ajuste debe ser razonable y explicable.",
                        },
                        {
                          header: "Transparencia",
                          text: "Motiva con principios y, de ser posible, con precedentes.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "En enseñanza, la equidad fomenta el paso del silogismo rígido a la deliberación prudente. En práctica, mejora la aceptación social de las sentencias al mostrar sensibilidad por las circunstancias del caso. Bien aplicada, no erosiona la certeza; la fortalece, porque explica con razones públicas por qué el derecho, además de legal, debe ser justo. :contentReference[oaicite:35]{index=35}",
                    },

                    {
                      type: "accordion",
                      header: "Errores a evitar",
                      open: false,
                      items: [
                        {
                          header: "Apelar a la equidad sin justificar",
                          text: "Debe haber motivación robusta, no intuición.",
                        },
                        {
                          header: "Contradecir texto claro",
                          text: "No puede usarse para desconocer mandatos expresos.",
                        },
                        {
                          header: "Olvidar control constitucional",
                          text: "La equidad debe ser compatible con derechos humanos.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "3.2.2",
              numbering: "3.2.2",
              title: "Fuentes reales",
              content: [
                {
                  type: "paragraph",
                  text: "Las fuentes reales del derecho son los factores sociales, políticos, económicos, culturales, tecnológicos y ambientales que motivan la creación, modificación o derogación de normas. Explican el porqué de la ley: las necesidades, conflictos o transformaciones que reclaman respuesta jurídica. A diferencia de las fuentes formales —que plasman la norma— y de las históricas —que registran su evolución—, las reales expresan el contexto material que condiciona el contenido y alcance de las disposiciones. Así, fenómenos como la inflación, la precarización laboral, la digitalización de la economía, la protección de datos personales o la emergencia climática inciden sobre la agenda normativa y orientan al legislador hacia determinadas soluciones. Entenderlas ayuda a interpretar finalidades, principios y límites de la regulación vigente, pues conectan el texto legal con las razones que le dieron origen y permiten evaluar su adecuación a los problemas que pretende resolver. :contentReference[oaicite:0]{index=0}",
                },
                {
                  type: "paragraph",
                  text: "En la práctica, identificar fuentes reales exige observar indicadores y hechos: tendencias demográficas, distribución del ingreso, productividad sectorial, innovación tecnológica, riesgos sanitarios, estándares internacionales, presiones sociales y políticas públicas. Por ejemplo, el crecimiento del comercio electrónico impulsó reglas sobre contratación a distancia, firma electrónica, prevención de fraudes y protección al consumidor; del mismo modo, la crisis ambiental y la escasez hídrica han avivado instrumentos de responsabilidad ambiental y economía circular. Estas causas no sustituyen al procedimiento legislativo, pero lo orientan y nutren; de ahí que el análisis de impacto regulatorio pregunte expresamente qué problema público se atiende, qué alternativas existen y qué efectos (costos y beneficios) se esperan. También la jurisprudencia recoge estas transformaciones cuando interpreta la ley a la luz de nuevas realidades, logrando coherencia entre la finalidad normativa y su aplicación. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "accordion",
                  header: "Guía rápida — Identificar y analizar fuentes reales",
                  open: false,
                  items: [
                    {
                      header: "1) Detección del problema público",
                      text: "Define con evidencia el hecho a regular (p. ej., siniestralidad vial, suplantación de identidad, contaminación). Formula hipótesis de causa-efecto y delimita población afectada. :contentReference[oaicite:2]{index=2}",
                    },
                    {
                      header: "2) Mapeo de actores e incentivos",
                      text: "Sector público, empresas, trabajadores, consumidores, academia y sociedad civil; identifica intereses, asimetrías de información y riesgos de captura regulatoria.",
                    },
                    {
                      header: "3) Opciones y efectos esperados",
                      text: "Compara alternativas (autorregulación, soft law, intervención mínima o robusta) y sus costos/beneficios; alinea con principios y derechos involucrados.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Un abordaje metódico de las fuentes reales integra técnicas cuantitativas (estadística descriptiva, series de tiempo, evaluación costo-beneficio) y cualitativas (entrevistas, consultas públicas, análisis comparado). En clave constitucional, ayuda a verificar la razonabilidad y proporcionalidad de la medida legislativa respecto a la finalidad perseguida. El uso de experiencias históricas también ilumina: crisis financieras han motivado reformas de solvencia bancaria; pandemias, marcos de salud pública y teletrabajo; avances en inteligencia artificial, regímenes de responsabilidad y auditoría algorítmica. Esta triangulación —evidencia empírica, derecho comparado y lecciones históricas— robustece la validez material de la norma y facilita su defensa ante eventuales controles judiciales, al mostrar que la intervención elegida responde a problemas reales y no meramente hipotéticos. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "image",
                  src: "https://fastercapital.com/es/i-es/Amplia-seleccion--una-inmersion-profunda-en-el-mundo-de-las-opciones--El-impacto-de-los-factores-sociales-y-culturales-en-nuestras-elecciones.webp",
                  alt: "Esquema de factores que impulsan la creación de normas (sociales, económicos, tecnológicos y ambientales).",
                },
                {
                  type: "paragraph",
                  text: "Casos ilustrativos muestran cómo las fuentes reales modelan instituciones completas. La economía digital empuja reglas sobre competencia en plataformas, portabilidad de datos y ciberseguridad; la transición energética conduce a incentivos fiscales verdes, estándares de eficiencia y responsabilidad extendida del productor; la movilidad urbana promueve normas de seguridad vial, micromovilidad y gestión de espacio público; la protección de grupos vulnerables dinamiza políticas antidiscriminatorias, accesibilidad y cuidados. En todos ellos, los ‘hechos’ no bastan: deben traducirse en diseños normativos eficaces, medibles y compatibles con derechos fundamentales. La calidad legislativa exige, por tanto, diagnosticar con precisión, elegir instrumentos idóneos y prever mecanismos de evaluación y revisión periódica, reconociendo que las fuentes reales evolucionan y, con ellas, las respuestas del ordenamiento. :contentReference[oaicite:4]{index=4}",
                },
                {
                  type: "accordion",
                  header: "Checklist de política pública y derecho",
                  open: false,
                  items: [
                    {
                      header: "Evidencia del problema",
                      text: "¿Qué datos lo prueban? ¿Cuán extendido y persistente es? ¿Existen externalidades o fallas de mercado que justifiquen intervención? :contentReference[oaicite:5]{index=5}",
                    },
                    {
                      header: "Coherencia normativa",
                      text: "¿Es compatible con la Constitución y tratados? ¿Respeta principios (legalidad, seguridad jurídica, proporcionalidad)?",
                    },
                    {
                      header: "Mecanismos de revisión",
                      text: "Metas, métricas, cláusulas de evaluación y sunset; canales de participación para ajustes futuros.",
                    },
                  ],
                },
              ],
            },
            {
              id: "3.2.3",
              numbering: "3.2.3",
              title: "Fuentes históricas",
              content: [
                {
                  type: "paragraph",
                  text: "Las fuentes históricas del derecho son documentos, códigos y testimonios que contienen normas del pasado y permiten reconstruir la evolución del ordenamiento. Aunque no tienen vigencia obligatoria, sirven de referencia interpretativa, inspiran nuevas regulaciones y muestran cómo sociedades previas resolvieron problemas similares. Entre los ejemplos paradigmáticos están el Código de Hammurabi, las XII Tablas y el Digesto, así como el Código Napoleónico, que influyó notablemente en codificaciones civiles de diversos países. En el ámbito mexicano, recopilaciones coloniales y códigos del siglo XIX ayudan a entender la génesis de instituciones contemporáneas. Estudiarlas aporta perspectiva histórica, identifica continuidades y rupturas, y previene errores al repetir fórmulas que fracasaron antes o al descontextualizar conceptos. :contentReference[oaicite:6]{index=6}",
                },
                {
                  type: "paragraph",
                  text: "Su función principal es hermenéutica y pedagógica. En hermenéutica, orientan la búsqueda de la ratio legis —la razón de ser— de figuras que han transitado por diferentes etapas, evitando aplicaciones literalistas desconectadas de sus fines. En pedagogía jurídica, forman criterio histórico, comparado y crítico, imprescindible para diseñar políticas y resolver casos complejos. El uso de fuentes históricas, sin embargo, tiene límites: no pueden imponerse sobre la Constitución ni sustituir la voluntad democrática actual, y su invocación exige rigor filológico (fechas, autores, contexto) para evitar anacronismos. Por ello, la doctrina sugiere citarlas como antecedentes persuasivos y no como autoridad vinculante, integrándolas con fuentes formales vigentes (ley, jurisprudencia, principios) y con el análisis de fuentes reales que explican los desafíos contemporáneos. :contentReference[oaicite:7]{index=7}",
                },
                {
                  type: "accordion",
                  header: "Mapa mental — Trabajar con fuentes históricas",
                  open: false,
                  items: [
                    {
                      header: "Localización y autenticación",
                      text: "Ubica el documento (código, compilación, sentencia) y verifica autenticidad/ediciones; revisa traducciones y aparato crítico.",
                    },
                    {
                      header: "Contexto y recepción",
                      text: "¿Qué problema buscaba resolver? ¿Cómo fue recibido por tribunales y doctrina de su época? ¿Qué instituciones perduran hoy?",
                    },
                    {
                      header: "Uso interpretativo",
                      text: "Empléalas para iluminar conceptos (p. ej., equidad, buena fe), sin desatender el marco constitucional vigente. :contentReference[oaicite:8]{index=8}",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Ejemplos de proyección histórica en México incluyen la influencia del Derecho Romano y del Código Napoleónico en la sistemática del Código Civil y en categorías como propiedad, obligaciones y contratos; o la huella de la codificación liberal en la configuración de derechos y garantías. Asimismo, compendios coloniales permiten comprender instituciones como los bienes comunales o prácticas consuetudinarias que más tarde recibieron reconocimiento legal. En derecho público, la transición desde ordenanzas coloniales a constituciones republicanas explica el paso a la división de poderes y al control judicial. Esta genealogía evita lecturas aisladas de las figuras jurídicas, favorece interpretaciones coherentes y da claves para adaptar instituciones tradicionales a problemas emergentes sin desnaturalizarlas. :contentReference[oaicite:9]{index=9}",
                },
                {
                  type: "image",
                  src: "https://imgv2-2-f.scribdassets.com/img/document/587269168/original/f6031b0019/1?v=1",
                  alt: "Línea de tiempo: Hammurabi → XII Tablas → Digesto → Código Napoleónico → Codificaciones mexicanas.",
                },
                {
                  type: "paragraph",
                  text: "Metodológicamente, el trabajo con fuentes históricas demanda crítica externa (autoría, datación, integridad) e interna (coherencia, finalidad, conceptos) y diálogo con la doctrina para reconstruir significados. Su valor probatorio en litigio es persuasivo: se usan para reforzar argumentos de principio o para mostrar que cierta interpretación tiene arraigo en la tradición jurídica. En la enseñanza, habilitan estudios de caso que conectan pasado y presente (por ejemplo, el principio de equidad como criterio de moderación judicial). El resultado buscado no es replicar mecánicamente el pasado, sino extraer lecciones y razones, integrándolas con el derecho positivo y con las demandas sociales actuales que, a su vez, nutrirán nuevas reformas. :contentReference[oaicite:10]{index=10}",
                },
                {
                  type: "accordion",
                  header:
                    "Cuadro de apoyo — Errores comunes y buenas prácticas",
                  open: false,
                  items: [
                    {
                      header: "Errores frecuentes",
                      text: "Anacronismos, citas sin fuente, confundir autoridad histórica con vigencia, extrapolar soluciones sin contexto. :contentReference[oaicite:11]{index=11}",
                    },
                    {
                      header: "Buenas prácticas",
                      text: "Citar edición crítica, contrastar con jurisprudencia y Constitución vigente, explicitar límites y finalidad del uso histórico.",
                    },
                    {
                      header: "Aplicación didáctica",
                      text: "Construye líneas de tiempo, mapas conceptuales y comparativas para fijar continuidades y rupturas.",
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
          href: "", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Campa, S. F. (2018). Ética 1. México: Pearson.",
            "Martinez, J. L. (2017). Derecho. Mexico: Marya.",
            "Purón, R. A. (2019). Derecho 1. México: Patria Educación.",
            "Vargas, R. R. (2014). Derecho. México: Marya.",
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
            "Campa, S. F. (2018). Ética 1. México: Pearson.",
            "Martinez, J. L. (2017). Derecho. Mexico: Marya.",
            "Purón, R. A. (2019). Derecho 1. México: Patria Educación.",
            "Vargas, R. R. (2014). Derecho. México: Marya.",
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
