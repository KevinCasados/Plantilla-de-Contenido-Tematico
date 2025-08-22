/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "lic-derecho",
  courseId: "Derecho Civil III",
  id: "modulo1-funcion-social-y-nociones",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Derecho Civil III",
  title: "Módulo 1. Función social del Derecho y nociones fundamentales",
  semestre: "Semestre 1",
  teacher: "Dr. José Valentín Ramos Fajardo",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Asegurar que el alumnado comprenda y consolide los conceptos base de la disciplina jurídica —función social del Derecho, relación Derecho-sociedad, valores jurídicos y nociones elementales— de forma clara y perdurable para sustentar su formación posterior.",

  competencies: [
    "Comprende y describe la disciplina del Derecho, diferenciando el Derecho (objetivo) de los derechos (subjetivos).",
    "Identifica y explica las fuentes del Derecho y las etapas del proceso legislativo mexicano (iniciativa, discusión, aprobación, sanción, publicación e inicio de vigencia).",
    "Distingue las normas jurídicas de otras normas sociales mediante los pares: unilateralidad/bilateralidad; interioridad/exterioridad; coercibilidad/incoercibilidad; autonomía/heteronomía.",
    "Diferencia derecho objetivo vs. subjetivo; derecho vigente vs. positivo; derecho positivo vs. natural, y justifica ejemplos prácticos.",
    "Aplica criterios de certeza, seguridad, igualdad, libertad y justicia al análisis básico de casos y definiciones.",
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
      id: "1",
      numbering: "Unidad 1",
      title: "Función social del Derecho y nociones fundamentales",
      content: [
        {
          type: "paragraph",
          text: "Este módulo inaugura la formación jurídica del estudiante y, por ello, sienta los cimientos conceptuales sobre los que se edificará toda su trayectoria académica y profesional. Nuestro propósito es fijar con claridad la función social del Derecho y las nociones fundamentales que permiten diferenciarlo de otros sistemas normativos. Desde el inicio, subrayamos que una comprensión endeble de estos rudimentos compromete la lógica y la solvencia de la práctica futura; al contrario, su dominio favorece la lectura crítica de la realidad jurídica, el reconocimiento de las fuentes y el uso correcto del lenguaje técnico. En consecuencia, abordaremos: (i) el papel del Derecho en la organización de la vida colectiva; (ii) la tensión permanente entre libertad individual y orden social; (iii) el valor formativo de los principios y fines jurídicos; y (iv) una primera cartografía de conceptos (objetivo/subjetivo; vigente/positivo; positivo/natural) y de su procedencia legislativa. La expectativa es que el alumno adquiera un marco de referencia sólido, operativo y perdurable.",
        },
        {
          type: "paragraph",
          text: "La función social del Derecho se entiende desde su naturaleza de sistema de reglas que hace posible la convivencia. Vivir en sociedad supone coordinar expectativas, delimitar esferas de libertad y canalizar conflictos bajo criterios de justicia, certeza y seguridad. De ahí que el Derecho regule conductas, atribuya facultades, imponga deberes y, llegado el caso, prevea sanciones para restituir el orden. Este encuadre no reduce el fenómeno jurídico a coerción; por el contrario, la coacción es el último recurso del Estado para garantizar la vigencia de un pacto normativo que las personas aceptan por sus ventajas civilizatorias. Con ello, el Derecho no sólo inhibe conductas lesivas, también habilita intercambios, protege bienes y derechos, y crea condiciones de cooperación. En suma, lejos de ser un obstáculo, el Derecho es infraestructura institucional de la vida social: provee reglas del juego estables, previsibles y públicas que permiten a individuos y organizaciones realizar sus proyectos en paz y con igualdad ante la ley.",
        },
        {
          type: "paragraph",
          text: "La relación entre Derecho y sociedad es dinámica y dialéctica: el Derecho estructura la convivencia, pero al mismo tiempo recibe de la sociedad sus problemas, aspiraciones y límites. Toda integración social exige renuncias y autolimitaciones; el marco jurídico las formula y distribuye, asegurando que nadie quede sometido a la arbitrariedad del más fuerte. A la vez, el orden normativo es perfectible: debe abrir cauces para su reforma cuando los valores colectivos evolucionan (por ejemplo, en materia de acceso a la información o protección de la privacidad en entornos digitales). Así, el Derecho no sólo conserva; también canaliza el cambio social, traduciendo nuevas demandas en reglas generales y abstractas. Esta plasticidad explica por qué instituciones y procedimientos (como el proceso legislativo y los mecanismos de control judicial) actúan de bisagra entre la experiencia social y su positivación normativa, manteniendo un equilibrio razonable entre estabilidad institucional y adaptación a contextos emergentes.",
        },
        {
          type: "paragraph",
          text: "El conocimiento de los valores jurídicos cumple una función pedagógica decisiva. Sin alfabetización jurídica, la convivencia se degrada: proliferan la incertidumbre, el incumplimiento y la desconfianza. Educar en Derecho significa dotar a las personas de las categorías mínimas para comprender sus derechos y obligaciones, evaluar la legitimidad de las decisiones públicas y participar responsablemente en la vida cívica. En esa tarea, la cultura de la legalidad no es mero formalismo; es un compromiso sustantivo con la justicia, la igualdad, la libertad y la seguridad como fines que orientan la creación, interpretación y aplicación de las normas. Dado el aumento de la complejidad normativa, se exige al futuro jurista una preparación técnica rigurosa y una ética profesional sólida para explicar, defender y aplicar el orden jurídico en beneficio de la sociedad. La competencia técnica sin valores es ciega; los valores sin técnica son ineficaces. El buen Derecho exige la conjunción de ambos.",
        },
        {
          type: "paragraph",
          text: "Finalmente, presentaremos nociones esenciales para la arquitectura conceptual del curso. Distinguiremos el Derecho como sistema de normas (derecho objetivo) de los derechos como facultades conferidas a los individuos (derechos subjetivos); el derecho vigente, en cuanto válido en tiempo y territorio concretos, del derecho positivo como conjunto de normas formalmente expedidas; y el diálogo —no siempre pacífico— entre derecho positivo y derecho natural como criterios de validez y justicia. Cerraremos con la idea de fuente: reales, históricas y, sobre todo, formales, destacando que en nuestro sistema la legislación —a través del proceso legislativo— constituye la vía principal de producción normativa. Este mapa inicial permite al estudiante orientarse con precisión entre conceptos próximos pero no idénticos, anticipando las implicaciones prácticas de cada distinción en la vida académica y profesional.",
        },

        /* Acordeón de tres niveles */
        {
          type: "accordion",
          header: "Nivel 1 — Conceptual (¿Qué es y para qué sirve el Derecho?)",
          open: false,
          text: "Sintetiza la función social del Derecho como conjunto de reglas públicas que coordinan expectativas, delimitan libertades y resuelven conflictos con criterios de justicia, certeza y seguridad. Reconoce la diferencia entre Derecho (objetivo) y derechos (subjetivos), y comprende que la coacción es un último recurso estatal para asegurar el cumplimiento de normas aceptadas socialmente.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Analítico (Tensiones y distinciones clave)",
          open: false,
          text: "Examina la tensión libertad-orden, el carácter evolutivo del Derecho frente a cambios sociales y tecnológicos, y las distinciones objetivo/subjetivo; vigente/positivo; positivo/natural. Identifica cómo estas categorías inciden en la validez, interpretación y aplicación de las normas, así como en el diseño institucional que las produce.",
        },
        {
          type: "accordion",
          header:
            "Nivel 3 — Aplicado (Implicaciones para tu práctica académica)",
          open: false,
          text: "Traslada las nociones a casos sencillos: identifica la fuente formal aplicable, distingue si un enunciado se refiere a derecho vigente o sólo positivo, y argumenta con valores jurídicos (justicia, igualdad, libertad, seguridad) para justificar la solución. Practica una lectura atenta del proceso legislativo como vía principal de producción normativa en México.",
        },
      ],
      subthemes: [
        /* 1.- FUNCIÓN SOCIAL DEL DERECHO. */
        {
          id: "1.1",
          numbering: "1",
          title: "Función social del Derecho",
          content: [
            {
              type: "paragraph",
              text: "La función social del Derecho parte de un hecho elemental: la vida en sociedad exige reglas públicas que coordinen expectativas, delimiten esferas de libertad y encaucen los conflictos de forma civilizada. Sin ese marco, la incertidumbre y la fuerza bruta sustituyen a la cooperación. El Derecho provee ese andamiaje normativo mediante normas generales y abstractas que confieren facultades y fijan deberes, con procedimientos e instituciones encargadas de hacerlos exigibles. A diferencia de otros órdenes normativos —moral, religión, usos sociales—, el jurídico se caracteriza por la bilateralidad (deberes correlativos a facultades), la exterioridad (su origen social e institucional) y la coercibilidad como último recurso estatal, nunca como mecanismo ordinario. Comprender esta especificidad evita confundir el Derecho con exhortaciones morales o hábitos colectivos. En suma, su función social no se reduce a prohibir, sino a posibilitar: genera reglas del juego estables, públicas y previsibles para que personas y organizaciones proyecten y realicen planes de vida sin quedar a merced de la arbitrariedad. Por eso, lejos de ser un obstáculo, el Derecho opera como infraestructura institucional de la convivencia.",
            },
            {
              type: "paragraph",
              text: "El aporte del Derecho es simultáneamente organizador y habilitante. Organiza la convivencia al definir lo permitido, lo prohibido y lo obligatorio; pero, sobre todo, habilita prácticas valiosas que de otro modo serían frágiles o inviables. Un contrato, una asociación civil, una licencia de uso, un testamento o una adopción ilustran cómo el orden jurídico convierte aspiraciones sociales en realidades protegidas. Cuando la norma reconoce un derecho subjetivo —por ejemplo, propiedad o acceso a la información—, simultáneamente estructura deberes en otras personas o autoridades, y prevé vías para hacerlos valer. La existencia de tribunales imparciales y procedimientos con garantías cierra el circuito: previenen conflictos, los resuelven conforme a derecho y restituyen el orden cuando se quiebra. Todo ello descansa en valores orientadores —justicia, certeza, igualdad, libertad y seguridad— que otorgan sentido y límites a la regulación. En términos económicos y cívicos, el Derecho reduce costos de transacción, estabiliza expectativas y fortalece la confianza social imprescindible para cooperar.",
            },
            {
              type: "paragraph",
              text: "La relación Derecho–sociedad es dialógica. La sociedad proporciona problemas, aspiraciones y límites; el Derecho los procesa en reglas generales a través de procedimientos legítimos. Integrarse a la vida colectiva implica aceptar renuncias y autolimitaciones a cambio de los beneficios de la cooperación. De ahí que el orden jurídico contenga simultáneamente prohibiciones y habilitaciones: garantiza libertades y acceso a satisfactores, pero restringe conductas que lesionan a terceros o al interés público. Esta tensión se administra mediante instituciones: el proceso legislativo canaliza demandas sociales en normas; los controles jurisdiccionales corrigen excesos, interpretan lagunas y defienden minorías frente a mayorías circunstanciales. Además, el Derecho es plástico: se adapta a transformaciones culturales y tecnológicas (p. ej., privacidad digital, acceso a la información) sin perder continuidad institucional. Un sistema sordo al cambio se fosiliza; uno que muta sin reglas pierde autoridad. El equilibrio deseable combina estabilidad normativa y capacidad de reforma, garantizando previsibilidad sin inmovilismo.",
            },
            {
              type: "paragraph",
              text: "La función social del Derecho posee una dimensión pedagógica decisiva. La convivencia jurídica funciona mejor por adhesión racional que por coacción. Para ello, la ciudadanía debe conocer sus derechos y obligaciones, los procedimientos disponibles y los valores que orientan la toma de decisiones públicas y privadas. La educación jurídica —no sólo profesional, también cívica— fortalece la cultura de la legalidad, incrementa la confianza y reduce la necesidad de sanción. En paralelo, la complejidad creciente del ordenamiento demanda operadores jurídicos con sólida preparación técnica y ética: personas capaces de explicar normas, ayudar a usarlas en beneficio legítimo y aplicarlas con rigor. La alfabetización en categorías (derecho objetivo/subjetivo; vigente/positivo; positivo/natural) y en fuentes (históricas, reales y formales) dota de criterios para evaluar reformas, interpretar casos y exigir motivaciones claras. En síntesis, educar en Derecho es educar para la libertad en condiciones de igualdad y seguridad.",
            },
            {
              type: "paragraph",
              text: "Como cierre conceptual, conviene trazar el mapa que articulará los subtemas siguientes. Primero, se expondrá por qué el Derecho es indispensable para la vida social —no por la amenaza de la fuerza, sino por su capacidad de coordinar y habilitar—. Luego, se analizará el vínculo Derecho–sociedad destacando las renuncias que hace cada quien para convivir y los mecanismos que permiten revisar reglas injustas. A continuación, se estudiarán los valores jurídicos como brújula decisoria que orienta creación, interpretación y aplicación de normas. Finalmente, se presentarán nociones fundamentales (derecho objetivo/subjetivo; vigente/positivo; positivo/natural) y las fuentes, enfatizando que en nuestro sistema la legislación —a través del proceso legislativo— es la fuente formal por excelencia. Este recorrido ofrece un marco operativo: permite hablar con precisión, argumentar con razones y evaluar el Derecho por sus resultados en la vida de las personas.",
            },

            /* Acordeón con tres niveles */
            {
              type: "accordion",
              header:
                "Nivel 1 — Conceptual: ¿Qué es y para qué sirve el Derecho?",
              open: false,
              text: "Conjunto de normas públicas que coordinan expectativas, delimitan libertades y resuelven conflictos con criterios de justicia, certeza, igualdad, libertad y seguridad. Se distingue por bilateralidad, exterioridad y coercibilidad subsidiaria.",
            },
            {
              type: "accordion",
              header:
                "Nivel 2 — Analítico: Tensiones y criterios de evaluación",
              open: false,
              text: "Equilibrio libertad–orden; estabilidad–cambio. Pregunta por legitimidad de origen (procedimientos) y de contenido (compatibilidad con derechos). Evalúa eficacia social: ¿resuelve problemas? ¿es proporcional? ¿incluye voces diversas? ¿rinde cuentas?",
            },
            {
              type: "accordion",
              header:
                "Nivel 3 — Aplicado: Implicaciones para el estudio y la práctica",
              open: false,
              text: "Identifica derechos y deberes correlativos; ubica la fuente formal aplicable; argumenta con valores; utiliza procesos y remedios previstos; contrasta vigencia y positividad de las normas. Objetivo: soluciones justificadas y efectivas en casos reales.",
            },
          ],
          subthemes: [
            {
              id: "1.1.1",
              numbering: "1.1",
              title: "La función social del Derecho",
              content: [
                {
                  type: "paragraph",
                  text: "La función social del Derecho parte de una constatación básica: la vida humana en sociedad no es posible sin reglas públicas que coordinen expectativas, delimiten esferas de libertad y encaucen los conflictos. Vivir juntos exige certezas compartidas —qué está permitido, qué prohibido y qué exigible—, y ese marco común lo provee el Derecho como sistema normativo que confiere facultades, impone deberes y establece consecuencias ante el incumplimiento. Su razón de ser no se agota en la coacción; esta opera como último recurso del Estado para asegurar el cumplimiento general, pero el sentido profundo del orden jurídico es crear condiciones de cooperación, habilitar intercambios, proteger bienes y derechos y preservar la paz. Por eso puede afirmarse que el Derecho funge como infraestructura institucional de la vida colectiva: un conjunto de reglas del juego estables, públicas y previsibles que hacen posible que individuos y organizaciones proyecten y realicen planes de vida sin quedar a merced de la arbitrariedad. En esa medida, la función social del Derecho combina estabilidad y apertura al cambio: preserva el orden, pero admite su revisión mediante procedimientos legítimos cuando la experiencia social lo reclama.",
                },
                {
                  type: "paragraph",
                  text: "Desde una perspectiva pedagógica, comprender la función social del Derecho implica distinguirlo de otros órdenes normativos —moral, religión, usos sociales— y reconocer su especificidad: bilateralidad de relaciones (deberes correlativos a facultades), exterioridad de su origen (proviene de una voluntad pública formalizada) y, en último término, coercibilidad. Esta tríada explica por qué las normas jurídicas no dependen solamente de la conciencia individual, sino de una decisión social plasmada en leyes y aplicada por instituciones. Autores introductorios insisten en que ninguna sociedad puede sostenerse sin Derecho: sin reglas claras, la incertidumbre y la violencia simbólica o material terminan por erosionar la cooperación. En positivo, el Derecho reduce costos de transacción, establece garantías, reconoce derechos y, a través de los tribunales, provee procedimientos para resolver disputas de forma imparcial. Así, la función social del Derecho no es un enunciado abstracto: se verifica cotidianamente en contratos, responsabilidades, procedimientos y garantías que moldean conductas y expectativas.",
                },

                /* Acordeón 1 intercalado */
                {
                  type: "accordion",
                  header: "Síntesis operativa de la función social",
                  open: false,
                  text: "El Derecho coordina conductas y expectativas mediante reglas generales y abstractas que atribuyen facultades y deberes, con respaldo institucional para su cumplimiento. Su función social consiste en asegurar la convivencia pacífica, habilitar intercambios y resolver disputas con criterios de justicia, certeza, igualdad, libertad y seguridad, sin reducirse a la coacción, que sólo opera como último recurso.",
                },

                {
                  type: "paragraph",
                  text: "Para dimensionar su alcance, conviene observar que el Derecho no sólo prohíbe conductas lesivas: también habilita prácticas valiosas. Una compraventa, una asociación civil, una licencia de uso, un testamento o una adopción son ejemplos de cómo el orden jurídico convierte aspiraciones sociales en realidades protegidas. Cuando una norma define un derecho subjetivo —por ejemplo, el de propiedad o el de acceso a la información—, simultáneamente estructura deberes en otras personas o instituciones, y traza procedimientos para hacerlos valer. De esta forma, el Derecho distribuye competencias, reduce asimetrías de poder, estabiliza expectativas y genera confianza. La vida económica y cívica depende de esa confianza: sin seguridad jurídica, el cálculo racional de riesgos y beneficios se degrada y con él la cooperación. La función social del Derecho es, pues, constitutiva del desarrollo: no hay mercados funcionales ni ciudadanía efectiva sin reglas públicas y mecanismos imparciales de solución de controversias.",
                },

                /* Imagen (incluida en el PDF para esta unidad) */
                {
                  type: "image",
                  src: "https://alderechodotorg.wordpress.com/wp-content/uploads/2018/11/sociedad-abogados.jpg",
                  caption:
                    "La vida en sociedad exige reglas públicas: el Derecho como infraestructura de cooperación.",
                },

                {
                  type: "paragraph",
                  text: "Otra dimensión relevante es la temporal. El Derecho articula pasado, presente y futuro: conserva prácticas valiosas (continuidad), organiza la conducta presente (validez y vigencia) y abre cauces para el cambio (reforma legislativa, control judicial). Esta capacidad de traducir demandas sociales en reglas generales distingue al Derecho de la mera imposición coyuntural. En regímenes democráticos, la producción normativa asigna a representantes electos la tarea de identificar problemas públicos, deliberar soluciones y plasmar decisiones en leyes. El control constitucional, a su vez, corrige desbalances y salvaguarda principios superiores. La combinación de legislación y jurisdicción asegura que la función social del Derecho no derive en inmovilismo ni en inestabilidad: el orden jurídico se adapta sin dejar de ser reconocible. Así, la legitimidad de la norma descansa tanto en su forma de creación como en su aptitud para realizar valores jurídicos en la experiencia social.",
                },

                /* Acordeón 2 intercalado */
                {
                  type: "accordion",
                  header: "Claves para el estudio de la función social",
                  open: false,
                  text: "1) Distingue Derecho (objetivo) y derechos (subjetivos); 2) Identifica cómo una facultad reconocida implica deberes correlativos; 3) Observa que la coacción es subsidiaria; 4) Reconoce la dupla estabilidad/cambio: el Derecho preserva orden y habilita reformas; 5) Relaciona normas con instituciones: leyes, tribunales y procedimientos hacen efectiva la función social.",
                },

                {
                  type: "paragraph",
                  text: "Finalmente, la función social del Derecho debe evaluarse a la luz de sus resultados. ¿Reduce la arbitrariedad? ¿Aumenta la previsibilidad? ¿Garantiza acceso a mecanismos imparciales de solución de controversias? ¿Protege eficazmente a los más vulnerables? Estas preguntas guían el análisis crítico del sistema jurídico y permiten identificar déficits de legalidad o de justicia material. La educación jurídica cumple aquí un papel estratégico: alfabetizar en categorías, procedimientos y valores, de modo que las personas comprendan sus derechos y obligaciones, y participen responsablemente en la vida pública. Un buen sistema de Derecho no es únicamente un repertorio de prohibiciones; es un entramado institucional que habilita proyectos de vida en común y corrige desviaciones mediante remedios previstos ex ante. Ésta es la verdadera medida de su función social: permitir que la libertad de cada quien coexista con la libertad de los demás bajo condiciones de igualdad y seguridad.",
                },
              ],
            },
            {
              id: "1.1.2",
              numbering: "1.2",
              title: "El problema de la relación entre Derecho y Sociedad",
              content: [
                {
                  type: "paragraph",
                  text: "La relación entre Derecho y sociedad es de mutua constitución: el Derecho estructura la vida colectiva, pero a su vez recibe de la sociedad sus problemas, aspiraciones y límites. Integrarse a un orden jurídico implica aceptar renuncias y autolimitaciones para obtener los beneficios de la cooperación; a cambio, el sistema garantiza libertades, define procedimientos para resolver disputas y abre canales para reformar las reglas cuando resultan inadecuadas. Esta doble dinámica —contención y habilitación— explica por qué el Derecho no debe verse como un obstáculo, sino como la condición institucional para que la libertad individual y la justicia social coexistan. Sin embargo, la historia muestra que no todas las reglas surgen de procesos inclusivos: a veces cristalizan intereses de grupos dominantes. De ahí la importancia de mecanismos de control democrático y jurisdiccional que permitan corregir sesgos y evolucionar hacia un orden más justo.",
                },
                {
                  type: "paragraph",
                  text: "En contextos contemporáneos, la relación Derecho–sociedad destaca por su plasticidad. Cambios tecnológicos, transformaciones culturales y nuevas sensibilidades —por ejemplo, en privacidad digital, igualdad sustantiva o medio ambiente— exigen respuestas normativas oportunas. El proceso legislativo y la labor interpretativa de los tribunales operan como bisagras entre la experiencia social y su traducción jurídica. Esta traducción no es mecánica: requiere deliberación pública, evaluación de impacto y atención a principios constitucionales. La legitimidad del Derecho depende entonces tanto de su forma de producción (procedimientos abiertos, participación) como de su contenido (compatibilidad con derechos y valores). Un sistema sordo a la evolución social se fosiliza; uno que cambia sin reglas pierde autoridad. El desafío es sostener un equilibrio entre estabilidad institucional y capacidad adaptativa, de modo que la norma siga siendo reconocible y confiable al tiempo que responde a problemas emergentes.",
                },

                /* Acordeón 1 intercalado */
                {
                  type: "accordion",
                  header: "Tensión libertad–orden: clave de lectura",
                  open: false,
                  text: "Toda sociedad distribuye libertades y cargas. El Derecho hace explícita esa distribución y la somete a reglas y controles. La tensión no se resuelve suprimiendo la libertad, sino garantizándola dentro de un marco que la haga compatible con la de los demás. Por eso importan los procedimientos de reforma y los controles constitucionales.",
                },

                {
                  type: "paragraph",
                  text: "Otra arista del vínculo es la desigual capacidad de distintos actores para influir en la producción normativa. La participación ciudadana, la transparencia y la rendición de cuentas buscan nivelar ese campo, reduciendo el riesgo de capturas regulatorias. La educación jurídica de la población también incide: personas informadas identifican mejor sus derechos y pueden exigirlos, además de evaluar críticamente propuestas de política pública. En paralelo, el sistema de justicia actúa como filtro adicional, corrigiendo desbordes del poder y protegiendo a minorías frente a mayorías circunstanciales. Así, Derecho y sociedad se co-modulan: la sociedad demanda y el Derecho canaliza; el Derecho ordena y la sociedad controla. El resultado deseable es un círculo virtuoso donde la norma refuerza la confianza social y la confianza sostenga la observancia de la norma, evitando tanto la anomia como el autoritarismo.",
                },

                /* Acordeón 2 intercalado */
                {
                  type: "accordion",
                  header:
                    "Criterios para evaluar la adecuación social del Derecho",
                  open: false,
                  text: "1) Capacidad de resolver problemas reales; 2) Inclusión de voces diversas en la deliberación; 3) Compatibilidad con derechos fundamentales; 4) Mecanismos de revisión accesibles; 5) Proporcionalidad en la distribución de cargas y beneficios. Estos criterios permiten juzgar si la respuesta jurídica acompasa la evolución social.",
                },

                {
                  type: "paragraph",
                  text: "Finalmente, la relación Derecho–sociedad revela un componente ético: la orientación del sistema hacia fines jurídicos —justicia, igualdad, libertad, seguridad, certeza—. Estos valores no son ornamentos retóricos; informan la creación, interpretación y aplicación de las normas. Cuando la sociedad se reconoce en ellos, aumenta la adhesión voluntaria a la regla y disminuye la necesidad de coacción. Inversamente, cuando percibe que la norma se aparta de esos fines, proliferan la desafección y el incumplimiento. Por eso, la reforma jurídica eficaz no sólo cambia textos: reconstruye consensos valorativos. En suma, Derecho y sociedad forman una unidad dialógica: sin sociedad no hay problemas que normar; sin Derecho la sociedad carece de instrumentos para tramitar pacíficamente sus diferencias. El buen orden jurídico es el que convierte los desacuerdos inevitables en procedimientos civilizados de decisión y control.",
                },
                {
                  type: "paragraph",
                  text: "Como conclusión operativa, conviene entrenar una mirada que conecte normas con consecuencias sociales. ¿Qué incentivos crean? ¿Qué comportamientos desalientan? ¿A quién benefician o cargan? Esta evaluación ex ante y ex post, basada en evidencia, reduce el riesgo de regulaciones simbólicas o ineficaces. A nivel micro, invita a construir argumentos que atiendan no sólo a la validez formal, sino a los efectos concretos en la vida de las personas. A nivel macro, promueve instituciones que aprendan de la experiencia, corrijan errores y rindan cuentas. Ésta es la mejor garantía de que la inevitable tensión entre libertad y orden se administre sin sacrificar ni la dignidad individual ni la cohesión social.",
                },
              ],
            },
            {
              id: "1.1.3",
              numbering: "1.3",
              title: "El conocimiento de los valores jurídicos",
              content: [
                {
                  type: "paragraph",
                  text: "El conocimiento de los valores jurídicos es condición de posibilidad para que el orden normativo funcione más por adhesión que por coacción. Hablar de justicia, igualdad, libertad, seguridad y certeza no es enunciar ideales abstractos, sino referir coordenadas que orientan la producción, interpretación y aplicación de las normas. La educación jurídica de la ciudadanía —y, con especial rigor, de quienes ejercen profesionalmente el Derecho— alfabetiza en dichas coordenadas y dota de criterios para evaluar decisiones públicas y privadas. Sin esa alfabetización, se degrada la cultura de la legalidad: crecen la incertidumbre, el incumplimiento y la desconfianza. Educar en valores jurídicos implica, además, desarrollar competencias argumentativas para justificar por qué una solución es jurídicamente mejor que otra conforme a fines y principios. El resultado deseable es un ecosistema donde la obediencia al Derecho sea, ante todo, racional y convencida, y sólo subsidiariamente forzada.",
                },
                {
                  type: "paragraph",
                  text: "La complejidad creciente del orden jurídico incrementa la exigencia pedagógica. Nuevas áreas (protección de datos, ciberseguridad, inteligencia artificial, ambiente, igualdad interseccional) introducen categorías técnicas y tensiones axiológicas inéditas. Comprender sus dilemas requiere anclar la discusión en valores: ¿cómo equilibrar libertad y seguridad? ¿confidencialidad y transparencia? ¿igualdad formal e igualdad sustantiva? El estudio de casos se vuelve herramienta privilegiada para traducir principios a decisiones concretas. También lo es el razonamiento proporcional: ponderar fines, medios y afectaciones buscando la alternativa menos restrictiva y más idónea. En este marco, los valores jurídicos no son un catálogo cerrado, sino un conjunto vivo que se interpreta a la luz de nuevas realidades, sin perder continuidad con tradiciones constitucionales que dotan de estabilidad a la comunidad política.",
                },

                /* Acordeón 1 intercalado */
                {
                  type: "accordion",
                  header: "Valores como brújula decisoria",
                  open: false,
                  text: "Los valores jurídicos orientan tres momentos: 1) creación de normas (definen fines y límites), 2) interpretación (desambiguación con base en principios) y 3) aplicación (elección de remedios y sanciones). Su conocimiento robusto eleva la calidad del debate público y la legitimidad de las decisiones.",
                },

                {
                  type: "paragraph",
                  text: "A nivel institucional, los valores guían buenas prácticas: publicidad de las reglas, acceso a información, motivación de resoluciones, independencia judicial, control constitucional, participación ciudadana y rendición de cuentas. Estas prácticas fortalecen la confianza y refuerzan la observancia voluntaria. A nivel profesional, los valores delimitan deontologías: honestidad intelectual, lealtad procesal, diligencia, confidencialidad, imparcialidad y servicio a la justicia. A nivel ciudadano, informan conductas cotidianas: respeto de turnos y contratos, cuidado de lo público, rechazo a la corrupción. En suma, internalizar valores jurídicos traduce la norma en hábitos cívicos. Es una forma de prevención: cuanto más internalizados estén, menos costosa será la aplicación coercitiva del Derecho, pues la conformidad social surgirá de convicciones y no del miedo a la sanción.",
                },

                /* Acordeón 2 intercalado */
                {
                  type: "accordion",
                  header: "Criterios de evaluación axiológica",
                  open: false,
                  text: "Para revisar una norma o decisión: 1) compatibilidad con derechos; 2) idoneidad para el fin perseguido; 3) necesidad frente a alternativas menos restrictivas; 4) proporcionalidad costo/beneficio en términos de libertad, igualdad y seguridad; 5) coherencia con el sistema constitucional.",
                },

                {
                  type: "paragraph",
                  text: "También es crucial advertir que los valores pueden entrar en tensión entre sí. La libertad de expresión puede colisionar con la protección de la honra; la seguridad con la privacidad; la igualdad formal con la igualdad sustantiva. Estas tensiones no invalidan el recurso a valores; al contrario, exigen metodologías de decisión que hagan visibles los costos y razones. La ponderación, la motivación reforzada y la transparencia son herramientas para asegurar que, aun cuando una pretensión de valor sea limitada, no se desconozca su importancia. De este modo, el conocimiento de los valores jurídicos orienta decisiones más justificadas y menos arbitrarias, reforzando la legitimidad del sistema y la confianza social indispensable para su vigencia.",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, la dimensión educativa de los valores jurídicos invita a una pedagogía práctica y contextualizada. No basta con aprender definiciones; hay que ejercitar su aplicación en problemas reales, reconocer sesgos, imaginar escenarios alternativos y justificar elecciones. El aula, las clínicas jurídicas y los ejercicios de simulación procesal son espacios idóneos para ello. Con el tiempo, esa práctica forma reflejos profesionales y cívicos: preguntar por el fundamento de una decisión, exigir razones, evaluar impactos y aceptar la revisión cuando los argumentos mejoran. Ésta es la cultura de la legalidad madura: una comunidad que discute con reglas, decide con razones y corrige con dignidad.",
                },
              ],
            },
            {
              id: "1.1.4",
              numbering: "1.4",
              title: "Las nociones del Derecho",
              content: [
                {
                  type: "paragraph",
                  text: "La pregunta por la noción de Derecho abre el mapa conceptual del curso. Desde una mirada introductoria, el Derecho se concibe como disciplina normativa —no describe lo que es, sino prescribe lo que debe ser—, producto de la cultura y de las necesidades históricas de los pueblos. En cuanto fenómeno, el Derecho es un sistema de normas generales y abstractas que ordena la convivencia pacífica, sea que dichas normas estén escritas (leyes, reglamentos) o sean no escritas pero socialmente reconocidas. Esta visión permite separar tres planos analíticos: 1) el Derecho como objeto de estudio (derecho objetivo), 2) los derechos como facultades conferidas a las personas (derechos subjetivos) y 3) las fuentes que producen las normas. La claridad en estas nociones evita confusiones terminológicas y, sobre todo, errores prácticos al argumentar, legislar o juzgar.",
                },
                {
                  type: "paragraph",
                  text: "Una primera distinción cardinal: Derecho objetivo y derechos subjetivos. El primero refiere al conjunto de normas vigentes en un tiempo y espacio determinados, que permiten, prohíben u obligan conductas y definen instituciones (por ejemplo, la Constitución que organiza el sistema democrático). Los derechos subjetivos son facultades atribuidas a individuos por esas mismas normas (propiedad, educación, tránsito, información, entre otras). La correlación es perfecta: toda facultad reconocida se apoya en una norma del Derecho objetivo que la confiere; y toda norma del Derecho objetivo potencialmente crea o limita derechos subjetivos. En escritura, conviene economizar confusiones: “Derecho” con mayúscula para el fenómeno y “derechos” en minúscula para las facultades individuales.",
                },

                /* Acordeón 1 intercalado */
                {
                  type: "accordion",
                  header:
                    "Otras nociones necesarias: vigente/positivo y positivo/natural",
                  open: false,
                  text: "El derecho vigente es el que rige efectivamente en un lugar y tiempo; el derecho positivo es el conjunto de normas formalmente expedidas (pueden estar o no vigentes). La distinción positivo/natural enfrenta la fuente de validez: voluntad humana formalizada vs. principios morales universales. Entender estas nociones previene errores de calificación normativa.",
                },

                {
                  type: "paragraph",
                  text: "Una segunda distinción: derecho vigente y derecho positivo. El derecho positivo abarca todas las normas formalmente creadas por la autoridad competente; el derecho vigente es la porción de ese conjunto que se encuentra efectivamente en vigor. Una norma puede ser positiva pero no vigente (derogada, abrogada, suspendida). Esta diferenciación resalta el factor temporal de la validez y advierte la necesidad de métodos confiables para verificar vigencia (publicación, inicio de vigencia, reformas). Su utilidad práctica es inmediata: evita invocar normas caídas o inaplicables, y obliga a situar cualquier argumento en su contexto temporal y territorial.",
                },

                /* Acordeón 2 intercalado */
                {
                  type: "accordion",
                  header: "Diálogo entre derecho positivo y derecho natural",
                  open: false,
                  text: "La tradición iuspositivista funda la validez en la forma de creación; la iusnaturalista apela a principios de justicia. En la práctica, los sistemas constitucionales modernos combinan ambas intuiciones: exigen forma válida y controlan contenido a la luz de derechos fundamentales. La “mejor ley posible” sería a la vez positiva, vigente y conforme a principios de justicia.",
                },

                {
                  type: "paragraph",
                  text: "La tercera noción enlaza fenómeno y origen: las fuentes del Derecho. Se suele distinguir entre fuentes históricas (documentos que muestran cómo se han dado normas en el pasado), reales (hechos y factores sociales que influyen en el contenido de las normas) y formales (procesos de creación de normas). En nuestro sistema, el proceso legislativo es la fuente formal por excelencia: iniciativa, discusión, aprobación, sanción, publicación e inicio de vigencia. La jurisprudencia y la costumbre cumplen funciones relevantes de interpretación e inspiración, pero no desplazan a la legislación como procedimiento constitucional de producción normativa. Dominar estas nociones iniciales permite orientarse en el resto del curso y, sobre todo, argumentar con precisión cuando se estudian instituciones concretas.",
                },
                {
                  type: "paragraph",
                  text: "En conclusión, hablar con propiedad sobre el Derecho exige un léxico calibrado y un mapa conceptual claro. Derecho objetivo y derechos subjetivos, derecho vigente y derecho positivo, derecho positivo y derecho natural, fuentes históricas, reales y formales: he aquí el vocabulario mínimo para moverse con solvencia. La práctica profesional reafirmará estas nociones una y otra vez: al revisar la validez de una norma, al escoger la fuente aplicable, al argumentar con principios, al evaluar la compatibilidad de una política con la Constitución. Este andamiaje no agota la teoría, pero le da al estudiante una plataforma robusta para aprender —y desaprender— con criterio en el resto de su formación.",
                },
              ],
            },
          ],
        },

        /* 2.- UNILATERALIDAD DE LA MORAL Y BILATERALIDAD DEL DERECHO. */
        {
          id: "1.2",
          numbering: "2",
          title: "Unilateralidad de la moral y bilateralidad del Derecho",
          content: [
            {
              type: "paragraph",
              text: "Esta unidad delimita con precisión cuatro pares conceptuales que distinguen al Derecho de otros órdenes normativos: unilateralidad/bilateralidad, interioridad/exterioridad, coercibilidad/incoercibilidad y autonomía/heteronomía. El objetivo es que el estudiante identifique cuál es la fuente de obligación, cómo se estructura la exigibilidad y qué papel juegan las instituciones en la observancia de las normas. La moral puede orientar la conducta, pero carece de un aparato público para imponerla; el Derecho, en cambio, convierte expectativas en deberes correlativos y prevé procedimientos para hacerlos efectivos. Comprender estas diferencias evita confusiones frecuentes —por ejemplo, creer que todo aquello moralmente reprobable es jurídicamente sancionable— y mejora la argumentación al seleccionar la categoría adecuada en cada caso. En términos prácticos, la unidad ofrece un marco para diagnosticar si un enunciado pertenece al foro interno o al espacio público, si genera facultades exigibles por terceros y si puede activarse el uso legítimo de la fuerza estatal. Esta alfabetización conceptual es indispensable para estudiar con rigor las fuentes del Derecho, los derechos subjetivos y los remedios procesales; también para evaluar políticas públicas sin caer en reduccionismos moralistas ni en cinismos normativos que desatiendan la justicia material.",
            },
            {
              type: "paragraph",
              text: "Unilateralidad y bilateralidad describen cómo se estructuran las obligaciones. Las normas morales son unilaterales: vinculan al propio agente conforme a su conciencia, sin que exista otra persona autorizada institucionalmente para exigir su cumplimiento. La regla moral interpela desde el deber-ser interior y su incumplimiento, aunque reprochable, no genera por sí mismo una pretensión exigible ante terceros. Las normas jurídicas, en cambio, son bilaterales porque establecen correlaciones necesarias entre deberes y facultades: cuando la ley impone una obligación a un sujeto, simultáneamente reconoce en otro la facultad de exigir su observancia o de activar un remedio. Esta bilateralidad es característica del Derecho y explica la existencia de pretensiones, acciones y excepciones procesales. En el tráfico cotidiano, la diferencia es transparente: un compromiso moral de veracidad carece de un titular distinto del propio sujeto que pueda demandar su cumplimiento; un contrato de compraventa, por el contrario, otorga al acreedor acciones para exigir la prestación o su equivalente. Reconocer la bilateralidad permite además mapear relaciones jurídicas complejas donde múltiples sujetos, públicos y privados, se encuentran unidos por vínculos normativos recíprocos que el ordenamiento define, jerarquiza y protege.",
            },
            {
              type: "paragraph",
              text: "Interioridad y exterioridad aluden al origen y a la sede de la obligatoriedad. La moral se decide en el fuero interno: es el propio sujeto quien se autovincula con cierto ideal de bien y evalúa su conducta según convicciones personales —aunque esas convicciones estén socialmente influidas—. El Derecho, por el contrario, proviene del exterior de la conciencia individual: emana de procedimientos públicos de producción normativa (ley, reglamento) y de decisiones institucionales (resoluciones judiciales), y se comunica a través de actos formales con publicidad y validez determinada. Esta exterioridad no descalifica a la norma jurídica por “impuesta”; al contrario, garantiza que sea producto de una voluntad pública sujeta a controles y a mecanismos de revisión democrática o jurisdiccional. El operador jurídico debe entrenarse para rastrear la exterioridad de cada mandato: ¿cuál es su fuente formal?, ¿qué órgano la emitió?, ¿fue publicada?, ¿está vigente?, ¿cuál es su ámbito espacial y temporal? Sólo así se asegura que la aplicación de la regla responda a decisiones colectivas verificables y no a preferencias privadas. La interioridad, en cambio, remite a la convicción personal y por eso carece de los atributos de generalidad, abstracción y coercibilidad que distinguen a la norma jurídica.",
            },
            {
              type: "paragraph",
              text: "Coercibilidad e incoercibilidad distinguen la posibilidad de imponer el cumplimiento mediante el uso legítimo de la fuerza pública. La norma moral es incoercible: su observancia depende de la adhesión consciente del agente; su incumplimiento genera reproche, pero no habilita a una autoridad para imponer físicamente la conducta debida. La norma jurídica, en cambio, es coercible: se integra a un sistema de garantías que prevé sanciones, medidas de apremio, ejecución forzosa y, en casos extremos, potestad punitiva. Conviene subrayar que la coacción es subsidiaria: el ideal del Derecho es lograr cumplimiento voluntario por certeza y previsibilidad, reservando la fuerza para supuestos de resistencia. Esta estructura disuade incumplimientos estratégicos y protege a las personas frente a la justicia por mano propia. En la práctica, la coercibilidad se articula a través de jueces, autoridades administrativas y órganos de seguridad bajo legalidad estricta, control judicial y proporcionalidad. Comprender su alcance evita dos errores: reducir el Derecho a “pura fuerza” —olvidando su dimensión habilitante y cooperativa— o negar la necesidad de un respaldo institucional —ignorando que la protección de derechos exige, llegado el caso, capacidad de ejecución efectiva.",
            },
            {
              type: "paragraph",
              text: "Autonomía y heteronomía completan el cuadro. La autonomía es autolegislación moral: el sujeto reconoce como obligatoria una regla que él mismo se impone desde convicciones internas. La heteronomía, propia del Derecho, describe la sujeción a normas emanadas de una voluntad pública ajena a la del individuo, aceptadas por integrarse a una comunidad política que se gobierna mediante reglas generales. Esta aceptación no es servilismo, sino la condición de posibilidad de una libertad compatible con la libertad de los demás: al acatar leyes generales y abstractas, los ciudadanos aseguran que cualquier restricción sea pública, motivada y controlable. La heteronomía jurídica, bien entendida, es antídoto contra la arbitrariedad privada y estatal; su legitimidad depende tanto de la forma (procedimientos válidos) como del contenido (compatibilidad con derechos). En clave profesional, esta distinción orienta la argumentación: invocar la autonomía sirve para fundamentar objeciones de conciencia o espacios de autorregulación; invocar la heteronomía sirve para exigir el sometimiento de particulares y autoridades a la Constitución y a la ley, y para activar remedios cuando ese sometimiento se quiebra.",
            },

            /* Acordeón con tres niveles */
            {
              type: "accordion",
              header: "Nivel 1 — Conceptual: las cuatro parejas en síntesis",
              open: false,
              text: "Moral: unilateral, interior, incoercible y autónoma (autovinculación). Derecho: bilateral, exterior, coercible y heterónomo (vinculación por voluntad pública). El deslinde evita confundir reproche moral con sanción jurídica y guía la selección de categorías correctas al analizar casos.",
            },
            {
              type: "accordion",
              header: "Nivel 2 — Analítico: diagnóstico rápido de enunciados",
              open: false,
              text: "Pregunta si existe un “otro” autorizado a exigir (bilateralidad), si la regla proviene de un procedimiento público (exterioridad), si admite ejecución forzosa (coercibilidad) y si la obligación nace de la ley o de la conciencia (heteronomía/autonomía). Con estas claves clasificas en segundos el problema.",
            },
            {
              type: "accordion",
              header: "Nivel 3 — Aplicado: microcasos típicos",
              open: false,
              text: "Promesa de sinceridad: unilateral, interior, incoercible, autónoma. Incumplimiento contractual: bilateral, exterior, coercible, heterónomo. Objeción de conciencia razonable: espacio autónomo frente a una regla heterónoma, resuelto con pruebas de proporcionalidad y respeto a derechos de terceros.",
            },
          ],
          subthemes: [
            {
              id: "1.2.1",
              numbering: "2.1",
              title:
                "Unilateralidad y bilateralidad" /* ───────────────────────── 2.1 Unilateralidad y bilateralidad ───────────────────────── */,
              content: [
                {
                  type: "paragraph",
                  text: "Unilateralidad y bilateralidad describen la arquitectura interna de las obligaciones y, por ende, la diferencia decisiva entre moral y Derecho. Las normas morales son unilaterales porque interpelan al propio agente en su fuero interno: lo vinculan por convicción y no confieren a un tercero una pretensión institucionalmente protegida para exigir su cumplimiento. En cambio, las normas jurídicas son bilaterales: a todo deber que la ley impone corresponde una facultad en otra persona (o en la autoridad) para demandar su observancia. Este deslinde evita confundir el reproche ético con la exigibilidad legal. En la práctica, la bilateralidad se expresa en acciones, excepciones y remedios procesales que habilitan al titular a reclamar el cumplimiento, la reparación o la tutela oportuna de su derecho. Reconocer esta correlación permite diseñar conductas y estrategias jurídicas con precisión: no basta con saber que “algo está mal”; hay que identificar quién tiene el deber, quién es titular de la facultad, ante qué órgano se reclama y con qué consecuencias si la obligación se incumple.",
                },
                {
                  type: "paragraph",
                  text: "La unilateralidad moral no es debilidad, sino rasgo estructural: su fuerza proviene de la autovinculación racional con un ideal de bien, no de la amenaza de sanción externa. Por eso, el incumplimiento moral genera culpa o censura social, pero no, por sí mismo, una pretensión jurídica de cumplimiento coactivo. A la inversa, la bilateralidad jurídica exige reglas públicas, generales y abstractas que especifiquen sujetos, conductas y consecuencias. Cuando la ley define una obligación, simultáneamente atribuye a otra persona la titularidad de exigirla; cuando reconoce un derecho subjetivo, delimita un haz de deberes correlativos. El resultado es una red de relaciones recíprocas —privadas y públicas— que el ordenamiento ordena y protege. Sin bilateralidad, la tutela de derechos sería retórica: la exigibilidad convierte promesas normativas en garantías efectivas mediante procedimientos, plazos y estándares probatorios que reducen la discrecionalidad y aumentan la previsibilidad del sistema.",
                },

                /* Acordeón 1 intercalado */
                {
                  type: "accordion",
                  header: "Clave conceptual",
                  open: false,
                  text: "Unilateralidad (moral): obligación sin un tercero legitimado para exigirla. Bilateralidad (Derecho): todo deber lleva una facultad correlativa exigible. La distinción separa reproche ético de tutela jurídica y guía la elección de acciones y remedios.",
                },

                {
                  type: "paragraph",
                  text: "Los ejemplos cotidianos lo evidencian. Prometer “ser sincero” es una obligación moral cuyo incumplimiento puede acarrear reproche, pero difícilmente confiere a un tercero, como tal, acción para demandar sinceridad. En cambio, un contrato de compraventa fija prestaciones determinadas (precio y entrega) cuya inobservancia habilita acciones de cumplimiento, rescisión o daños. Lo mismo ocurre con la responsabilidad civil: la violación de un deber jurídico de no dañar confiere a la víctima la pretensión de reparación. Esta lógica bilateral explica la existencia de catálogos de acciones, la necesidad de legitimación activa y pasiva, y el diseño de procedimientos orientados a satisfacer pretensiones. Por eso, en formación jurídica conviene mapear cada enunciado en términos de “¿quién debe?”, “¿quién puede exigir?”, “¿ante quién?” y “¿con qué consecuencias?”, sustituyendo intuiciones morales por categorías operativas.",
                },

                /* Imagen (incluida en la Unidad 2 del material) */
                {
                  type: "image",
                  src: "https://img.lpderecho.pe/wp-content/uploads/2021/08/Relaciones-entre-derecho-y-moral-LP.png",
                  caption:
                    "La moral y el Derecho: normas distintas, finalidades convergentes en la vida social.",
                },

                {
                  type: "paragraph",
                  text: "Desde una perspectiva institucional, la bilateralidad no sólo habilita la exigencia, también ordena incentivos. Saber que mi incumplimiento generará una pretensión exigible disuade conductas oportunistas y favorece el cumplimiento voluntario. Esta previsibilidad reduce costos de transacción y estabiliza expectativas, fundamentales para la cooperación social y económica. En el extremo opuesto, cuando las relaciones quedan en el plano unilateral —promesas sin correlato exigible—, aumentan la incertidumbre y la dependencia de la buena fe. El sistema jurídico, entonces, convierte compromisos en obligaciones verificables y, llegado el caso, ejecutables. La corrección práctica es clara: identifica siempre el correlato de deber/facultad; si no existe, no estás ante un problema jurídico exigible, sino ante un asunto moral o social que exige otros instrumentos (ética profesional, códigos de conducta, mediación no jurídica).",
                },

                /* Acordeón 2 intercalado */
                {
                  type: "accordion",
                  header: "Diagnóstico rápido (pasos)",
                  open: false,
                  text: "1) Identifica el deber; 2) Ubica al titular de la facultad correlativa; 3) Verifica fuente (ley/contrato) y ámbito de validez; 4) Comprueba remedio disponible; 5) Evalúa consecuencias. Si falta el paso 2 o 4, probablemente no es exigible jurídicamente.",
                },

                {
                  type: "paragraph",
                  text: "La teoría clásica remarca que la bilateralidad no es mero formalismo, sino garantía de igualdad y de control del poder. Al exigir que toda obligación esté contrapesada por una facultad exigible, el Derecho limita arbitrariedades y distribuye cargas y beneficios con base en reglas públicas. Esto es especialmente relevante en relaciones asimétricas (consumo, trabajo, administración pública): la claridad sobre quién puede exigir qué, ante quién y cómo, equilibra posiciones y protege a la parte débil. Integrar esta lógica a la argumentación permite construir casos sólidos, seleccionar las acciones idóneas y descartar planteamientos que, aunque moralmente atendibles, carecen de asidero jurídico. Así, la bilateralidad se convierte en brújula para litigar, negociar y diseñar políticas con criterios de eficacia y justicia.",
                },
                {
                  type: "paragraph",
                  text: "En síntesis, unilateralidad y bilateralidad son más que etiquetas didácticas: constituyen el esqueleto de las relaciones normativas. La primera opera en el plano de convicciones y hábitos, imprescindible para la vida en común pero ajena a la coacción institucional. La segunda pertenece al ámbito del Derecho: crea un circuito completo de deberes, facultades, procedimientos y sanciones que hacen efectivos los derechos. Formarse en esta distinción eleva la calidad del juicio profesional: ayuda a separar lo decible moralmente de lo demandable jurídicamente, a diseñar remedios proporcionales y a comprender por qué el Derecho, además de prohibir, habilita prácticas valiosas bajo reglas que todos pueden conocer y prever.",
                },
              ],
            },
            {
              id: "1.2.2",
              numbering: "2.2",
              title: "Interioridad y exterioridad",
              content: [
                {
                  type: "paragraph",
                  text: "Interioridad y exterioridad remiten al origen de la obligatoriedad. La moral nace en el interior de la persona: el propio sujeto se autovincula con un ideal de bien y evalúa su conducta a la luz de convicciones que, aunque socialmente influidas, se asumen por decisión propia. El Derecho, por el contrario, proviene del exterior de la conciencia individual: su validez depende de procedimientos públicos de producción normativa (constitución, ley, reglamento) y de decisiones institucionales (resoluciones judiciales) emitidas por órganos competentes y comunicadas con publicidad y formalidades. Esta exterioridad no descalifica la regla jurídica por “impuesta”; la legitima, porque expresa una voluntad pública sujeta a controles democráticos y jurisdiccionales. Para el operador jurídico, la consecuencia es práctica: rastrear siempre la fuente formal, verificar competencia y vigencia, y situar la norma en su ámbito temporal y territorial, sustituyendo intuiciones por verificaciones objetivas.",
                },
                {
                  type: "paragraph",
                  text: "La interioridad moral opera con un lenguaje de virtudes, fines y convicciones que orientan la vida buena del agente; la exterioridad jurídica se expresa en categorías técnicas —competencia, procedimiento, publicación, vigencia— que garantizan igualdad y previsibilidad. La primera apela a la conciencia; la segunda, a instituciones. Cuando un conflicto se somete al árbitro del Derecho, las buenas razones morales no bastan: deben traducirse en argumentos jurídicos anclados en fuentes verificables y en reglas de decisión aceptadas por todos. Así, la exterioridad impide que el poder de unos se imponga como medida privada de lo justo. Al mismo tiempo, la interioridad no es indiferente al Derecho: nutre fines y principios que orientan la creación e interpretación de normas. El sistema sano permite ese diálogo, pero no confunde planos: la validez jurídica requiere forma; la corrección moral aporta dirección.",
                },

                /* Acordeón 1 intercalado */
                {
                  type: "accordion",
                  header: "Regla de oro del operador jurídico",
                  open: false,
                  text: "Antes de argumentar, identifica la fuente: ¿qué órgano expidió la norma?, ¿con qué competencia?, ¿cuándo y dónde rige?, ¿cómo se publicó?, ¿está vigente? Sin esta cadena de exterioridad, tu argumento es moral o político, no jurídico.",
                },

                {
                  type: "paragraph",
                  text: "El método jurídico convierte la exterioridad en técnica de control del poder. La exigencia de publicidad, motivación y competencia limita la arbitrariedad; la sujeción de autoridades y particulares al mismo conjunto de reglas define el Estado de derecho. En este marco, el juez no decide “por conciencia” ni “por sentido común” en abstracto; decide con base en normas externas, interpretadas a la luz de principios y precedentes. Esta neutralización de preferencias personales no elimina la dimensión valorativa —que se canaliza mediante principios constitucionales—, pero preserva la igualdad ante la ley y la previsibilidad. Cuando falta exterioridad (normas clandestinas, decisiones sin competencia, actos sin publicación), la seguridad jurídica se degrada y el sistema pierde autoridad. De allí la centralidad de procedimientos claros y de un control judicial robusto que restituya la legalidad cuando se quebranta.",
                },

                /* Acordeón 2 intercalado */
                {
                  type: "accordion",
                  header: "Checklist de exterioridad",
                  open: false,
                  text: "1) Fuente formal (constitución/ley/reglamento/sentencia); 2) Órgano competente; 3) Procedimiento cumplido; 4) Publicación; 5) Vigencia (inicio/derogación); 6) Ámbito territorial; 7) Compatibilidad constitucional. Sin uno, cuidado: hay vicio de validez.",
                },

                {
                  type: "paragraph",
                  text: "En la práctica profesional, interioridad y exterioridad se entrelazan. Éticas profesionales robustas (abogacía, judicatura, función pública) exigen convicciones internas de integridad, pero su garantía última no descansa en la virtud del agente, sino en controles externos: códigos deontológicos positivados, órganos disciplinarios, transparencia y rendición de cuentas. Del lado del ciudadano, la interioridad informa el cumplimiento voluntario: cuanto más internalizados están los fines del Derecho (justicia, libertad, igualdad, seguridad), menos necesaria es la coacción. El diseño institucional debería, por tanto, alinear la exterioridad formal con una pedagogía cívica que traduzca normas en hábitos compartidos. Un sistema que descuida la interioridad fomenta el cumplimiento mínimo; uno que desdeña la exterioridad degenera en particularismos y privilegios.",
                },
                {
                  type: "paragraph",
                  text: "La distinción también ayuda a clasificar problemas y remedios. Si el conflicto se origina en convicciones incompatibles (piedad religiosa, ética personal), probablemente la vía es deliberativa o de autorregulación social, no la imposición jurídica; si el problema es de validez y aplicación de normas, se requiere ruta jurídica con pruebas y precedentes. En litigio estratégico, esto evita batallas simbólicas estériles y enfoca el esfuerzo en construir cadenas de validez, interpretar conforme a principios y probar hechos. En política pública, impone diseñar reglas comprensibles, publicadas y accesibles que, al exteriorizarse correctamente, faciliten su apropiación interna por la comunidad. De este equilibrio depende que el Derecho sea percibido no como imposición ajena, sino como acuerdo común razonable.",
                },
                {
                  type: "paragraph",
                  text: "En suma, interioridad y exterioridad son planos complementarios: el primero aporta sentido, el segundo confiere validez y exigibilidad. Integrarlos con método —convicciones que orientan, instituciones que controlan— produce un Derecho eficaz y legítimo. Para el estudiante y el profesional, la consigna es doble: cultivar virtud cívica y dominar técnica jurídica. Sólo así se decide con razones y se obedece con libertad, porque las reglas externas, conocidas y controlables, expresan un proyecto colectivo en el que vale la pena reconocerse.",
                },
              ],
            },
            {
              id: "1.2.3",
              numbering: "2.3",
              title: "Coercibilidad e incoercibilidad",
              content: [
                {
                  type: "paragraph",
                  text: "Coercibilidad e incoercibilidad distinguen dos modos de vinculación normativa y, con ello, dos lógicas distintas de cumplimiento. La moral es, por definición, incoercible: su eficacia se apoya en la adhesión interna del sujeto a un ideal de bien, en la formación del carácter y en la fuerza social de la reputación o del ejemplo, pero no autoriza a ninguna institución a imponer físicamente su observancia. El Derecho, en cambio, es coercible, porque integra un sistema público de garantías que legitima el uso de la fuerza —en sentido amplio— para asegurar el cumplimiento de las obligaciones, restaurar derechos vulnerados y disuadir comportamientos lesivos. Esta diferencia no es puramente teórica: determina qué instrumentos resultan pertinentes en cada caso (argumentación moral vs. remedios jurídicos) y qué expectativas razonables pueden tener las partes. Donde la norma es incoercible, la persuasión, la deliberación y la educación cívica son las vías principales; donde es coercible, existen procedimientos, órganos y medidas de ejecución que buscan transformar pretensiones en resultados efectivos, bajo estándares de legalidad, motivación y proporcionalidad.",
                },
                {
                  type: "paragraph",
                  text: "Es crucial subrayar que la coercibilidad jurídica es subsidiaria: el ideal del Estado de derecho no es gobernar por la fuerza, sino por reglas conocidas que favorezcan el cumplimiento voluntario. La fuerza aparece cuando falla la adhesión o cuando el incumplimiento amenaza bienes jurídicos relevantes. Esta subsidiariedad se traduce en técnicas graduadas: apremios, multas, ejecución forzosa, medidas cautelares y, en extremos, sanciones penales. La graduación importa porque evita el doble riesgo de la impotencia (normas que nadie obedece) y del autoritarismo (fuerza desproporcionada). Por eso, la pregunta profesional no es sólo “¿puedo forzar el cumplimiento?”, sino “¿cuál es el medio menos restrictivo, más idóneo y proporcional para lograrlo?”. La respuesta exige prueba, motivación reforzada y control judicial. En la práctica civil, por ejemplo, la ejecución de una sentencia pecuniaria sigue etapas que permiten al deudor cumplir sin humillación y al acreedor cobrar sin violencia; en lo administrativo, las medidas correctivas deben estar previstas y fundadas, evitando sorpresas y arbitrariedades que erosionen la confianza en la autoridad.",
                },

                {
                  type: "accordion",
                  header: "Mapa práctico de la coercibilidad (paso a paso)",
                  open: false,
                  text: "1) Identifica la obligación y su fuente; 2) Verifica la pretensión correlativa; 3) Selecciona el remedio (cumplimiento específico, daños, tutela, cautelares); 4) Sustenta idoneidad y necesidad; 5) Acredita hechos y cuantías; 6) Solicita la medida; 7) Controla proporcionalidad en ejecución. Sin pretensión correlativa o sin fuente válida, no hay coerción legítima.",
                },

                {
                  type: "paragraph",
                  text: "La incoercibilidad moral no la vuelve irrelevante: configura expectativas, difunde estándares y moldea comportamientos sin costo institucional directo. Muchos ámbitos sociales dependen más del cumplimiento voluntario que de la amenaza de sanción (p. ej., honestidad cotidiana, urbanidad, ayuda mutua). El Derecho se apoya en esa base para operar con menor fricción: cuanto más interiorizados estén los fines jurídicos (justicia, libertad, igualdad, seguridad, certeza), menos frecuente y menos intensa será la necesidad de coerción. Esta sinergia explica por qué los sistemas eficaces invierten en educación cívica y transparencia institucional: un ciudadano que comprende el sentido de las reglas y confía en las autoridades tiende a cumplir por convicción, no por miedo. A la inversa, cuando las instituciones fallan, proliferan el oportunismo y la desobediencia estratégica, lo que empuja a usar más fuerza, con peores resultados. La calidad de la coercibilidad depende, entonces, de la calidad del tejido moral y cívico que sostiene al Derecho.",
                },
                {
                  type: "paragraph",
                  text: "Desde el punto de vista procesal, la coercibilidad se articula a través de garantías que encauzan el uso de la fuerza pública. El debido proceso, la motivación de las resoluciones, la publicidad, la defensa adecuada, la independencia judicial y la tutela judicial efectiva son límites y, a la vez, condiciones de legitimidad. No toda ejecución forzosa es válida: debe ser previsible, fundada en norma vigente, emitida por autoridad competente y razonable en su intensidad. La proporcionalidad opera aquí como herramienta analítica: exige que la medida sea idónea para el fin (lograr el cumplimiento), necesaria (no hay alternativa menos gravosa) y ponderada (beneficios superan costos en términos de afectación de derechos). Este enfoque evita abusos, autoriza ajustes en la ejecución y permite modular medidas en atención a circunstancias del caso —por ejemplo, sustituyendo prisión por mecanismos económicos o tecnológicos cuando el fin puede alcanzarse sin privar de libertad—.",
                },

                {
                  type: "accordion",
                  header: "Errores frecuentes y cómo evitarlos",
                  open: false,
                  text: "• Confundir reproche moral con sanción jurídica: antes de pedir medidas forzosas, demuestra pretensión y fuente.\n• Usar la fuerza como primera opción: argumenta subsidiariedad y agota medidas menos restrictivas.\n• Olvidar proporcionalidad: sin idoneidad, necesidad y balance, la medida será anulada.\n• Descuidar ejecución: una sentencia sin plan de ejecución concreto deviene letra muerta.",
                },

                {
                  type: "paragraph",
                  text: "Un terreno fértil para estudiar la coercibilidad es la ejecución de obligaciones de hacer y no hacer. En las primeras, el cumplimiento específico puede ser imposible o inconveniente; entonces, el sistema prevé sustituciones (daños y perjuicios) o multas que incentiven la conducta. En las segundas, la coerción se expresa en medidas inhibitorias, clausuras o retiros de efectos, según el caso. En materia de derechos fundamentales, la tutela urgente (amparo, medidas cautelares) equilibra la urgencia de proteger al titular con el deber de no causar daños irreparables al demandado, por lo que las órdenes suelen ser temporales y revisables. Finalmente, la coercibilidad penal —la más intensa— se reserva a bienes jurídicos de alto valor y se rige por los principios de mínima intervención y última ratio. Esta arquitectura evita trivializar la fuerza, preserva libertades y focaliza recursos estatales en lo que verdaderamente amenaza la convivencia.",
                },
                {
                  type: "paragraph",
                  text: "En síntesis, coercibilidad e incoercibilidad no compiten, se complementan. La moral crea el suelo fértil del cumplimiento voluntario; el Derecho aporta instrumentos para hacer efectivo lo debido cuando la persuasión fracasa. Un sistema maduro usa la fuerza con mesura, previsión y transparencia, y apuesta por la adhesión racional como primera línea de eficacia. Para el profesional, la consigna es clara: fundamentar la coerción con extremo rigor, anticipar objeciones de proporcionalidad y diseñar rutas de ejecución que traduzcan la pretensión en resultados reales sin sacrificar derechos. Sólo así la coercibilidad deja de ser un eslogan y se convierte en una técnica institucional al servicio de la justicia.",
                },
              ],
            },
            {
              id: "1.2.4",
              numbering: "2.4",
              title: "Autonomía y heteronomía",
              content: [
                {
                  type: "paragraph",
                  text: "Autonomía y heteronomía describen el origen de la obligatoriedad y la forma en que los sujetos se vinculan con las normas. En su sentido clásico, la autonomía remite a la autolegislación: el agente reconoce como obligatoria una regla que él mismo se impone, conforme a convicciones internas y a un ideal racional de vida buena. La heteronomía, propia del Derecho, designa la sujeción a normas emanadas de una voluntad pública distinta del individuo —la comunidad política organizada— y que, por su carácter general y abstracto, rigen por igual a gobernantes y gobernados. Esta contraposición no convierte a la autonomía en un refugio absoluto frente a la ley ni a la heteronomía en mera imposición: en los sistemas constitucionales, la obediencia jurídica se justifica porque las reglas externas han sido producidas mediante procedimientos legítimos, compatibles con derechos fundamentales y sujetas a control. El ciudadano obedece no por sumisión ciega, sino porque reconoce en la ley el producto revisable de una voluntad común que hace posible la libertad de todos.",
                },
                {
                  type: "paragraph",
                  text: "La autonomía cumple roles distintos en la ética y en el Derecho. En la ética, valora la capacidad del sujeto de darse fines y respetarlos por convicción; en el Derecho, aparece en figura de esferas de autorregulación y de libertad configurada: autonomía de la voluntad en contratos, libertad de empresa, asociación, expresión, culto, entre otras. Sin embargo, incluso esas zonas autónomas encuentran límites heterónomos: orden público, buenas costumbres, derechos de terceros y normas imperativas. La clave está en compatibilizar, no en oponer: la ley establece cauces y condiciones de ejercicio; la autonomía los recorre responsablemente. Por ejemplo, la autonomía contractual permite diseñar cláusulas; pero la heteronomía fija parámetros mínimos de equilibrio (información, no discriminación, nulidad de abusos). En la vida pública, las objeciones de conciencia ilustran la tensión: el sistema puede reconocer un espacio de autonomía, siempre que no cancelen los derechos de terceros ni desnaturalicen la función pública.",
                },

                {
                  type: "accordion",
                  header: "Criterios de compatibilización",
                  open: false,
                  text: "1) Legalidad: el ejercicio autónomo debe tener base y límites en normas vigentes; 2) Proporcionalidad: si se restringe, debe ser idóneo, necesario y ponderado; 3) Igualdad: no se admite autonomía que genere privilegios o discriminaciones; 4) Publicidad y motivación: decisiones heterónomas deben estar razonadas y ser accesibles.",
                },

                {
                  type: "paragraph",
                  text: "Para que la heteronomía sea legítima, no basta la forma: importa el contenido. Procedimientos democráticos y control judicial sostienen la validez, pero la justicia material guía su corrección. Por eso, las constituciones consagran derechos que limitan al legislador y al administrador, y habilitan al juez para inaplicar o expulsar normas que violen principios superiores. La heteronomía se muestra así como garantía contra arbitrariedades privadas y públicas, y como condición de posibilidad de libertades compatibles. En este equilibrio, el ciudadano no es súbdito: participa en la formación de la voluntad común, fiscaliza a sus representantes y acciona cuando la regla excede su mandato. Desde la técnica, esto exige motivaciones reforzadas cuando se limita la autonomía (p. ej., en medidas sanitarias, ambientales o de seguridad), y revisiones periódicas para evitar convertir restricciones excepcionales en normalidad.",
                },
                {
                  type: "paragraph",
                  text: "En el plano profesional, autonomía y heteronomía orientan decisiones prácticas. Un abogado que redacta contratos debe maximizar la autonomía de las partes sin vulnerar límites legales; un juez debe equilibrar la reivindicación autónoma con el marco heterónomo que garantiza igualdad; un administrador público debe motivar cómo su decisión, aunque limite esferas privadas, protege bienes comunes y supera el test de proporcionalidad. Ignorar este marco conduce a errores típicos: disfrazar como “autonomía” prácticas abusivas o, en el extremo opuesto, justificar restricciones totales en nombre de un vago interés público. La disciplina consiste en explicitar fines, medios y límites, siempre bajo el prisma de derechos fundamentales y de una cultura de rendición de cuentas.",
                },

                {
                  type: "accordion",
                  header: "Casos ilustrativos (esquemáticos)",
                  open: false,
                  text: "• Contrato de adhesión: la heteronomía impone reglas de transparencia y nulidad de cláusulas abusivas; la autonomía subsiste en la elección informada.\n• Objeción de conciencia razonable: se reconoce esfera autónoma con salvaguardas para no lesionar derechos de terceros.\n• Regulación ambiental: restricción heterónoma de actividad productiva para proteger bienes difusos; se exige proporcionalidad y compensaciones razonables.",
                },

                {
                  type: "paragraph",
                  text: "No debe confundirse autonomía con capricho ni heteronomía con verticalidad. La autonomía madura asume responsabilidades, anticipa efectos sobre terceros y se somete a la ley que posibilita la convivencia. La heteronomía constitucional, por su parte, no pretende uniformarlo todo: crea marcos para la diversidad, establece pisos de dignidad y garantiza mecanismos de solución de conflictos. De ahí que la educación jurídica deba formar tanto convicciones internas como competencias técnicas: sin virtud cívica, la ley se vuelve un límite vacío; sin ley, la virtud queda inerme frente a la fuerza. Este doble aprendizaje —conciencia y regla— otorga al profesional herramientas para decidir con razones y obedecer con libertad, y al ciudadano, criterios para exigir cuentas y participar en la construcción de un orden justo.",
                },
                {
                  type: "paragraph",
                  text: "En conclusión, la pareja autonomía/heteronomía no es una disputa por la supremacía, sino un diálogo estructural. La autonomía dota de sentido personal y social a las conductas; la heteronomía garantiza que esas conductas coexistan en paz bajo reglas públicas. El éxito del sistema se mide por su capacidad de expandir espacios de autorrealización compatibles con los derechos ajenos, y de intervenir sólo cuando sea imprescindible para proteger bienes comunes. Para el estudiante y el operador jurídico, la consigna es transparente: diseñar soluciones que reconozcan la creatividad de la autonomía y la legitimidad condicionada de la heteronomía, siempre bajo controles de legalidad, proporcionalidad y rendición de cuentas.",
                },
              ],
            },
          ],
        },

        /* 3.- TIPOS DE DERECHO. */
        {
          id: "1.3",
          numbering: "3",
          title: "Tipos de Derecho",
          content: [
            {
              type: "paragraph",
              text: "Esta unidad ofrece un mapa conceptual para distinguir con precisión tres pares clásicos de la teoría jurídica: derecho objetivo/derechos subjetivos; derecho vigente/derecho positivo; y derecho positivo/derecho natural. No se trata de sutilezas meramente terminológicas: cada distinción orienta decisiones prácticas al legislar, interpretar, litigar o asesorar. Un operador que confunde el fenómeno jurídico (el sistema de normas) con las facultades individuales, o que invoca reglas no vigentes, compromete la validez de su actuación y la eficacia de los remedios que propone. Por ello, avanzaremos de lo general a lo específico: primero, el Derecho como orden normativo y los derechos como facultades que ese orden confiere; después, el factor temporal de la validez y la diferencia entre normas formalmente expedidas y actualmente vigentes; finalmente, el debate sobre la fuente de validez de las reglas —voluntad humana formalizada o principios de justicia— y su articulación en constitucionalismo contemporáneo. El objetivo es dotarte de un léxico preciso y de criterios operativos para clasificar en segundos el problema que tienes delante y escoger la vía idónea para resolverlo con razones y con eficacia.",
            },
            {
              type: "paragraph",
              text: "La primera distinción —derecho objetivo y derechos subjetivos— separa el sistema de normas de las facultades atribuidas a las personas. El derecho objetivo designa el conjunto de reglas que, en un tiempo y espacio determinados, permiten, prohíben u obligan conductas y establecen instituciones: Constitución, leyes, reglamentos, decisiones judiciales y demás fuentes formalmente reconocidas. Los derechos subjetivos son pretensiones o facultades que esas normas confieren a individuos o colectivos: propiedad, educación, asociación, acceso a la información, entre otras. Existe correlación: a toda facultad reconocida por el orden le corresponde un haz de deberes en otros sujetos y, por regla, un conjunto de acciones y defensas para hacerla efectiva. En la escritura y en la argumentación conviene explicitar la acepción que se utiliza en cada frase, pues los deslizes terminológicos conducen a errores materiales. Como pauta práctica, usar “Derecho” (mayúscula) para referirse al fenómeno o disciplina y “derechos” (minúscula) para las facultades ayuda a mantener la distinción a la vista y previene equivocaciones en documentos, audiencias y resoluciones.",
            },
            {
              type: "paragraph",
              text: "La segunda distinción —derecho vigente y derecho positivo— introduce la variable temporal y la comprobación formal. El derecho positivo es el conjunto de normas formalmente expedidas por la autoridad competente conforme a procedimientos válidos; el derecho vigente es la porción de ese conjunto que actualmente rige. Una norma puede ser positiva y no vigente —por derogación, abrogación, suspensión o por aún no haber iniciado su vigencia—. La práctica profesional exige, por tanto, verificar siempre: fuente, competencia, procedimiento, publicación e inicio de vigencia, así como reformas y alcances territoriales. Argumentar con normas caídas erosiona la credibilidad técnica y puede invalidar actuaciones enteras. En sentido inverso, desconocer que una regla ya está en vigor puede privar de remedios oportunos. Esta dimensión temporal y formal se conecta con la seguridad jurídica: la ciudadanía debe poder conocer qué normas rigen hoy, aquí y ahora. De ahí el valor de diarios oficiales, sistemas de compilación y jurisprudencia que confirma —o corrige— lecturas sobre la aplicabilidad presente de las reglas.",
            },
            {
              type: "paragraph",
              text: "El tercer eje —derecho positivo y derecho natural— discute el fundamento último de validez. Para el iuspositivismo, la validez deriva de la forma de creación (procedimientos y competencias); para el iusnaturalismo, exige además conformidad con principios de justicia que trascienden la voluntad humana. Los ordenamientos constitucionales contemporáneos integran ambas intuiciones: exigen forma válida y controlan contenido a la luz de derechos fundamentales. La consecuencia operativa es doble. Primero, que una ley formalmente expedida puede ser expulsada o reinterpretada si vulnera principios superiores; segundo, que la invocación de valores no sustituye el requisito de positividad y vigencia. En la práctica, el “mejor” Derecho será a la vez positivo, vigente y conforme a principios; sin embargo, el sistema reconoce escenarios intermedios (normas positivas no vigentes; principios invocados para colmar lagunas) que demandan argumentación cuidadosa. Comprender este diálogo evita tanto el legalismo ciego como la moralización vacía, y aporta un marco robusto para litigar con técnica y con razones de justicia.",
            },
            {
              type: "paragraph",
              text: "Como cierre introductorio, conviene fijar una metodología de lectura: 1) identifica el plano en que te sitúas (¿hablas del sistema normativo o de facultades individuales?); 2) verifica positividad y vigencia (¿la norma existe formalmente y está en vigor aquí y ahora?); 3) contrasta el contenido con principios y derechos (¿pasa un control de constitucionalidad y proporcionalidad?); 4) deriva acciones, excepciones y remedios según la clasificación correcta. Esta ruta convierte distinciones teóricas en decisiones prácticas: delimita legitimación activa y pasiva, evita invocar reglas inaplicables, y clarifica qué estándares de prueba y motivación se requieren. En la docencia, la unidad propone ejercicios de clasificación rápida y casos breves para entrenar la mirada: una oración, tres preguntas, una clasificación. En la profesión, el hábito de ordenar mentalmente el problema según estas parejas conceptuales ahorra tiempo, previene nulidades y mejora la calidad de la tutela de derechos. Con esta brújula, entremos a los subtemas 3.1, 3.2 y 3.3.",
            },

            /* Acordeón con tres niveles */
            {
              type: "accordion",
              header: "Nivel 1 — Conceptual: tres parejas, un mapa",
              open: false,
              text: "Objetivo/subjetivo: sistema de normas vs. facultades individuales. Vigente/positivo: qué rige hoy vs. qué fue formalmente expedido. Positivo/natural: validez por forma vs. validez por principios. Distinguirlas evita errores de categoría y confiere claridad al discurso jurídico.",
            },
            {
              type: "accordion",
              header: "Nivel 2 — Analítico: pruebas de validez y control",
              open: false,
              text: "Validez formal: competencia, procedimiento, publicación, vigencia. Validez material: compatibilidad con derechos y principios, proporcionalidad y razonabilidad. La combinación de ambas define si la norma obliga y cómo debe interpretarse o ser expulsada.",
            },
            {
              type: "accordion",
              header: "Nivel 3 — Aplicado: checklist operativo",
              open: false,
              text: "1) ¿Hablo del Derecho o de un derecho? 2) ¿La norma citada está vigente? 3) ¿Cuál es la acción o remedio correlativo? 4) ¿Supera control constitucional? 5) ¿Qué evidencia necesito? 6) ¿Qué efectos prácticos busco (cumplimiento, reparación, tutela)?",
            },
          ],
          subthemes: [
            {
              id: "1.3.1",
              numbering: "3.1",
              title: "Derecho objetivo y subjetivo",
              content: [
                {
                  type: "paragraph",
                  text: "Diferenciar derecho objetivo y derechos subjetivos es esencial para hablar con precisión. El derecho objetivo nombra al sistema de normas vigentes en un tiempo y espacio determinados: Constitución, leyes, reglamentos y demás disposiciones que permiten, prohíben u obligan conductas, y crean instituciones. Los derechos subjetivos, por su parte, son las facultades que ese sistema confiere a las personas: propiedad, acceso a la información, educación, libre tránsito, entre otras. Hay correlación perfecta: toda facultad reconocida por una norma implica deberes en otros, y viceversa. En práctica profesional, perder esta distinción conduce a errores materiales —invocar “mi derecho” donde sólo hay una expectativa, o pretender crear facultades sin soporte en una norma válida—. Por eso, el método de lectura debe comenzar con dos preguntas simples: 1) ¿Estoy frente al fenómeno jurídico (orden normativo) o ante una pretensión individual?; 2) ¿Cuál es la norma del derecho objetivo que confiere la facultad alegada? La respuesta corrige el rumbo de la argumentación, clarifica quién está obligado, quién puede exigir, y qué remedios pueden activarse ante el incumplimiento.",
                },
                {
                  type: "paragraph",
                  text: "Desde una mirada introductoria, el derecho objetivo aparece como la “infraestructura institucional” de la convivencia: un conjunto de reglas generales y abstractas, públicas y previsibles, que reducen incertidumbre, estabilizan expectativas y permiten cooperar. No se trata de un agregado amorfo, sino de un sistema que organiza instituciones, procedimientos y sanciones. Los derechos subjetivos, en cambio, son el “tráfico” que circula por esa infraestructura: pretensiones individuales que el orden respalda mediante acciones, excepciones y garantías. En docencia y en litigio conviene mantener el contraste visible: usar “Derecho” (mayúscula) para referirse al fenómeno —la disciplina y el sistema— y “derechos” (minúscula) para las facultades. Con ello se evitan confusiones al redactar escritos, dictámenes y sentencias. La práctica sugiere además rastrear siempre la cadena normativa: texto constitucional o legal, reglamento aplicable y, en su caso, criterios jurisprudenciales que precisan el alcance de la facultad. Sin este anclaje, la invocación de “derechos” queda en simple proclama.",
                },

                {
                  type: "accordion",
                  header: "Clave operativa (objetivo vs. subjetivo)",
                  open: false,
                  text: "Derecho objetivo: conjunto de normas vigentes (qué está permitido/prohibido/obligado; qué instituciones existen). Derechos subjetivos: facultades atribuidas por esas normas. Toda facultad exige ubicar su norma fuente, su titular, su obligado y su remedio.",
                },

                {
                  type: "paragraph",
                  text: "Ejemplos sencillos anclan la diferencia. Enunciado A: “La Constitución organiza un sistema democrático con división de poderes”. Es derecho objetivo —describe instituciones y competencias. Enunciado B: “Toda persona tiene derecho a la educación”. Es derecho subjetivo —una facultad cuya efectividad supone obligaciones correlativas (prestar el servicio, financiarlo, garantizar acceso). Esta correlación se concreta en acciones y procedimientos: amparo, medidas cautelares, ejecución. Por eso, entrenarse en formular la relación triádica norma–facultad–remedio es decisivo. Al asesorar, litigar o juzgar, conviene mapear: (i) norma fuente (texto, vigencia, ámbito); (ii) titular y obligado; (iii) remedio y prueba. En ausencia de cualquiera de los tres elementos, la protección decae o deriva en vías no jurídicas (ética, mediación, política pública). La claridad conceptual evita pedir lo que el sistema no puede conceder o prometer lo que no puede hacerse exigible.",
                },

                {
                  type: "image",
                  src: "https://i.ytimg.com/vi/uPxZ8ut7lDs/sddefault.jpg",
                  caption:
                    "Tipos y acepciones del ‘Derecho’: mapa visual de trabajo (recurso del módulo).",
                },

                {
                  type: "paragraph",
                  text: "La distinción, además, tiene efectos en el lenguaje probatorio. Cuando alego un derecho subjetivo, no basta citar principios; debo acreditar hechos constitutivos de la pretensión y precisar el estándar de prueba. Por ejemplo, si invoco el derecho de acceso a la información, identifico la norma (constitucional y legal), demuestro la solicitud y la negativa, y elijo el remedio idóneo. En contraste, al describir derecho objetivo, el énfasis recae en jerarquías, competencia y vigencia. Esta doble epistemología —fáctica para derechos, normativa para el sistema— exige destrezas complementarias: lectura técnica de fuentes y manejo de evidencia. La pedagogía del curso propone ejercicios que alternan ambos planos para formar un criterio que no confunda categorías ni diluya responsabilidades.",
                },

                {
                  type: "accordion",
                  header: "Errores típicos (y cómo evitarlos)",
                  open: false,
                  text: "• Llamar ‘derecho’ a meras expectativas: exige norma fuente.\n• Invocar principios sin acción correlativa: localiza remedio.\n• Confundir catálogo programático con exigibilidad inmediata: verifica condiciones, plazos y autoridades.\n• Omitir legitimación: identifica titular/obligado.",
                },

                {
                  type: "paragraph",
                  text: "Finalmente, recuerda que el derecho objetivo evoluciona y, con él, los derechos subjetivos. Reformas constitucionales amplían o redefinen facultades; decisiones jurisdiccionales afinan su alcance; políticas públicas modulan su garantía. Por eso, el estudio no es solo definicional: requiere atención constante a vigencia y a interpretación. En este módulo, el enfoque histórico-crítico ayuda a entender por qué ciertas facultades emergen, se consolidan o se replantean. El operador serio no recita listas: acredita la norma, su sentido y sus efectos en casos concretos. Esta alfabetización jurídica inicial te permitirá avanzar con rigor en los demás pares conceptuales (vigente/positivo, positivo/natural) y, sobre todo, transformará tu lenguaje en herramienta precisa para proteger personas y ordenar instituciones.",
                },
              ],
            },
            {
              id: "1.3.2",
              numbering: "3.2",
              title: "Derecho vigente y positivo",
              content: [
                {
                  type: "paragraph",
                  text: "El binomio vigente/positivo introduce la variable temporal y la verificación formal de las normas. Derecho positivo es el conjunto de normas formalmente expedidas por la autoridad competente conforme a procedimientos válidos; derecho vigente es la porción de ese conjunto que actualmente rige aquí y ahora. Toda norma vigente es positiva, pero no toda norma positiva está vigente: puede haber sido derogada, abrogada, suspendida o no haber iniciado su vigencia. Esta distinción tiene consecuencias inmediatas. Quien litiga con normas no vigentes mina su credibilidad y arriesga nulidades; quien ignora una entrada en vigor pierde oportunidades de tutela. Por eso, el método profesional exige rastrear sistemáticamente fuente, competencia, procedimiento, publicación, inicio de vigencia y reformas. La seguridad jurídica —que las personas conozcan qué reglas rigen— descansa en esa comprobación rigurosa, no en intuiciones ni en usos circulantes.",
                },
                {
                  type: "paragraph",
                  text: "La verificación de vigencia no es un ritual formalista, sino técnica de control del poder. Requiere localizar el texto aplicable (constitucional y legal), corroborar su publicación en el medio oficial, revisar cláusulas de inicio de vigencia (incluida ‘vacatio legis’) y constatar si existen reformas, derogaciones o suspensiones. A esa cadena se suma la competencia del órgano emisor y la congruencia con jerarquías normativas. El objetivo es impedir “sorpresas” regulatorias, asegurar igualdad de trato y habilitar previsibilidad en contratos y acciones públicas. La ciudadanía —y el foro— necesitan reglas transparentes y estables; la vigencia es el nombre técnico de esa estabilidad. Por ello, diarios oficiales, compilaciones legislativas y criterios jurisprudenciales son instrumentos de trabajo, no bibliografía ornamental. Hacen del dato normativo un hecho verificable, y no una cita plástica acomodada a conveniencia.",
                },

                {
                  type: "accordion",
                  header: "Checklist de vigencia",
                  open: false,
                  text: "1) ¿Existe formalmente (positividad)? 2) ¿Fue emitida por órgano competente? 3) ¿Se publicó? 4) ¿Cuándo inicia vigencia? 5) ¿Ha sido reformada/derogada? 6) ¿Ámbito territorial? 7) ¿Compatibilidad constitucional? Sin estos pasos, tu argumento descansa en arena.",
                },

                {
                  type: "paragraph",
                  text: "Un error recurrente es confundir aplicabilidad con obediencia. Que una norma esté vigente no significa que se cumpla; que una norma sea positiva no la vuelve aplicable automáticamente. De ahí que la técnica del operador deba combinar verificación de vigencia con diseño de ejecución: ¿qué autoridad aplica?, ¿qué procedimiento rige?, ¿qué remedios existen? En la defensa de derechos, las preguntas se invierten: ¿hay norma vigente que respalde la pretensión?, ¿quién está obligado?, ¿cuál es la vía procesal? Así, la vigencia deja de ser un dato gramatical para convertirse en estrategia de tutela. En docencia, conviene ejercitar “mapas de vigencia” que sigan el ciclo de vida de una norma: proyecto, aprobación, sanción, publicación, inicio, reformas, derogación. El hábito evita sorpresas, nulidades y citas anacrónicas.",
                },

                {
                  type: "paragraph",
                  text: "Además, la distinción vigente/positivo dialoga con jerarquía normativa. Una ley positiva y vigente puede carecer de aplicabilidad si contradice la Constitución y es desplazada por control de constitucionalidad; inversamente, una previsión constitucional vigente puede carecer de eficacia directa y requerir desarrollo legal. Este juego obliga a pensar en términos de validez formal, validez material y eficacia práctica. El profesional no se contenta con saber si el texto “existe” o “rige”: pregunta si supera el test constitucional, si tiene operadores, si cuenta con presupuesto, si hay jurisprudencia que lo haya interpretado. Solo así la verificación de vigencia conduce a decisiones útiles y no a litigios meramente declarativos.",
                },

                {
                  type: "accordion",
                  header: "Errores frecuentes (y antídotos)",
                  open: false,
                  text: "• Citar normas derogada: confirma en diario oficial.\n• Suponer vigencia inmediata: revisa cláusulas transitorias.\n• Ignorar reformas: verifica versiones consolidadas.\n• Confundir vigencia territorial: identifica fuero federal/estatal/municipal.\n• Omitir control constitucional: contrasta con catálogo de derechos.",
                },

                {
                  type: "paragraph",
                  text: "En el aula y en la práctica, la distinción produce hábitos saludables: documentar la versión de la norma con fecha, archivar el número de decreto y el medio de publicación, y señalar expresamente el inicio de vigencia. También impulsa a diseñar cronogramas de cumplimiento: si una obligación inicia en determinada fecha, planear recursos y comunicaciones reduce fricción y costos. En litigio, citar el texto vigente con identificación precisa protege contra objeciones de forma y demuestra rigor. En asesoría, evita contratos anclados en reglas caducas. En síntesis, ‘vigente’ y ‘positivo’ no son sinónimos: el primero es el recorte temporal del segundo. Entenderlo preserva la validez de tus actos y la eficacia de los remedios.",
                },
                {
                  type: "paragraph",
                  text: "Por último, conviene asumir que la vigencia es dinámica. Reformas aceleradas, actualizaciones tecnológicas y cambios institucionales obligan a revisar permanentemente el estatus de las normas relevantes en tu campo. El profesional competente incorpora esa revisión a su flujo de trabajo y educa a sus clientes/usuarios en la importancia de operar con textos consolidados y verificables. La calidad de las decisiones —públicas y privadas— depende, en gran medida, de esa disciplina. Con esta brújula, podrás transitar al tercer debate (positivo/natural) con claridad: una cosa es que la norma exista y rija; otra, que su contenido sea conforme a principios de justicia y derechos fundamentales.",
                },
              ],
            },
            {
              id: "1.3.3",
              numbering: "3.3",
              title: "Derecho positivo y natural",
              content: [
                {
                  type: "paragraph",
                  text: "El par positivo/natural discute el fundamento último de validez del Derecho. El iuspositivismo sostiene que una norma es válida si ha sido creada por la autoridad competente conforme a procedimientos establecidos (validez formal). El iusnaturalismo afirma que, además, debe ser conforme a principios de justicia que trascienden la voluntad humana (validez material por referencia a la naturaleza humana o a la razón). Los ordenamientos constitucionales contemporáneos integran ambas intuiciones: exigen forma válida y controlan contenido a la luz de derechos fundamentales. Operativamente, esto significa que una ley positiva puede ser expulsada o reinterpretada si contradice principios superiores; y que la invocación de valores no suple la necesidad de positividad y vigencia. El resultado es un equilibrio: el sistema protege la seguridad jurídica sin renunciar a la justicia, y resiste la moralización vacía que prescinde de textos y procedimientos.",
                },
                {
                  type: "paragraph",
                  text: "El diálogo entre ambas corrientes puede ilustrarse con la idea de ‘la mejor ley posible’: aquella que es, a la vez, positiva (creada por procedimiento válido), vigente (en curso) y natural (conforme a principios de justicia). La realidad, sin embargo, ofrece combinaciones intermedias: normas positivas no vigentes (derogadas), vigentes pero injustas (susceptibles de control), principios morales compartidos que aún no se han positivado (demandan legislación). La técnica del operador consiste en identificar en qué casilla está cada problema y elegir estrategias: control constitucional, interpretación conforme, argumentación principialista, litigio estratégico o incidencia legislativa. Este mapa evita tanto el legalismo ciego —obedecer cualquier texto por ser ley— como el decisionismo moral —desconocer normas por parecer injustas sin usar los cauces previstos—.",
                },

                {
                  type: "accordion",
                  header: "Herramientas para compatibilizar forma y principios",
                  open: false,
                  text: "• Control de constitucionalidad: expulsa o corrige normas contrarias a derechos.\n• Interpretación conforme y proporcionalidad: armoniza texto y principios.\n• Legislación: positiviza consensos valorativos emergentes.\n• Ponderación: elige el medio menos restrictivo para fines legítimos.",
                },

                {
                  type: "paragraph",
                  text: "En la práctica, los valores cumplen tres funciones: orientan la creación de normas (definen fines y límites), guían la interpretación (desambiguación principialista) y condicionan la aplicación (elección de remedios menos lesivos). Pero los valores, por sí solos, no deciden casos: deben traducirse a lenguaje jurídico y someterse a procedimientos. Así, cuando una política pública limita una libertad, el test no es “me parece bien”, sino si la restricción persigue un fin legítimo, es idónea, necesaria y proporcional en sentido estricto. A la inversa, cuando una ley respalda prácticas discriminatorias, el control de constitucionalidad y la argumentación desde igualdad y dignidad permiten su corrección o expulsión. En este tránsito, la ética pública y la técnica jurídica se necesitan mutuamente: sin la primera, la ley se vuelve formalismo; sin la segunda, la justicia se vuelve voluntarismo.",
                },

                {
                  type: "paragraph",
                  text: "El estudio comparado muestra cómo consensos valorativos cambian y se positivizan: derechos civiles, igualdad sustantiva, protección de datos, integridad ambiental. La clave no es sólo ‘qué’ valores se adoptan, sino ‘cómo’ se incorporan: mediante procesos abiertos, deliberación informada y control judicial posterior. La legitimidad del resultado depende tanto del origen (procedimientos) como del contenido (principios). Por ello, las constituciones establecen catálogos de derechos, cláusulas de apertura (bloques de convencionalidad) y mecanismos de participación que reducen la distancia entre moral social y texto jurídico. Esta arquitectura institucional canaliza el cambio sin rupturas anárquicas y salvaguarda la seguridad jurídica, pilar de la confianza social.",
                },

                {
                  type: "accordion",
                  header: "Errores frecuentes (positivismo vs. naturalismo)",
                  open: false,
                  text: "• Legalismo ciego: creer que toda ley válida es justa; antídoto: control de constitucionalidad.\n• Moralismo difuso: invocar valores sin cauces jurídicos; antídoto: traducir a argumentos normativos y vías procesales.\n• Falsos dilemas: o ley o justicia; antídoto: técnicas de compatibilización (interpretación conforme, proporcionalidad).",
                },

                {
                  type: "paragraph",
                  text: "Para el profesional, el reto es convertir este debate en decisiones. Si una norma vulnera igualdad, diseña acción de inconstitucionalidad o amparo con argumentación de proporcionalidad; si un valor social carece de respaldo legal, promueve iniciativas o reglamentos que lo positivicen; si un juez enfrenta antinomias, aplica técnicas de interpretación que preserven el núcleo de los derechos. En formación, ejercicios de ‘clasificación de casos’ —ubicar cada supuesto en el diagrama de combinaciones entre positivo, vigente y natural— fortalecen la intuición jurídica. El objetivo no es tomar partido dogmático, sino dominar un instrumental que permita, en cada asunto, evaluar forma, vigencia y justicia material.",
                },
                {
                  type: "paragraph",
                  text: "En conclusión, derecho positivo y derecho natural no son trincheras irreconciliables, sino fuentes de criterios que el constitucionalismo moderno articula. La obediencia al Derecho se justifica cuando confluyen la forma válida y la justicia sustantiva; la desobediencia institucional —a través de vías procesales— se activa cuando esa confluencia falla. Para el estudiante y el operador, la consigna es doble: respeto por los procedimientos que nos igualan y compromiso con los principios que nos dignifican. Con esta brújula, es posible diseñar argumentos persuasivos, decisiones legítimas y políticas públicas que, a la vez, ofrezcan certeza y realicen valores.",
                },
              ],
            },
          ],
        },

        /* 4.- NOCIÓN DE FUENTE. */
        {
          id: "1.4",
          numbering: "4",
          title: "Noción de fuente",
          content: [
            {
              type: "paragraph",
              text: "En esta unidad abordamos la pregunta de origen: ¿de dónde surge el Derecho? El símil de la “fuente” nos ayuda a visualizar el punto de partida del fenómeno jurídico: aquello que lo produce o lo hace cognoscible. El material distingue tres categorías clásicas: fuentes históricas, reales y formales. Las históricas son los documentos y testimonios que muestran cómo se han dado normas en el pasado (por ejemplo, el Código de Hammurabi o textos constitucionales); no crean Derecho vigente, pero iluminan su evolución. Las reales son los hechos sociales que empujan contenido normativo: transformaciones culturales, tecnológicas o económicas que demandan regulación (p. ej., privacidad digital, igualdad sustantiva). Finalmente, las fuentes formales son los procesos de creación de normas: el “cómo” se vuelve Derecho. En nuestro sistema —según el enfoque del material— la **legislación** ocupa un lugar preeminente como vía constitucional y democrática para producir reglas generales y abstractas. Este marco permite separar lo que inspira o documenta (históricas y reales) de lo que **positiva** y **vigentiza** el mandato (formal). Con esta brújula, podremos evaluar costumbre, jurisprudencia y proceso legislativo, no en el plano de opiniones, sino en su **papel efectivo** dentro del orden jurídico y su contribución a la seguridad, justicia y previsibilidad del sistema.",
            },
            {
              type: "paragraph",
              text: "Detengámonos en las **fuentes históricas** y **reales**. Las primeras conservan experiencias normativas pretéritas: compendios legales, cartas magnas, ordenanzas y repertorios jurisprudenciales que, como sedimentos culturales, ofrecen soluciones y advertencias. Su utilidad es triple: (i) comparada —ilumina alternativas institucionales—; (ii) crítica —permite evitar errores del pasado—; y (iii) pedagógica —forma la sensibilidad jurídica del estudiante—. Las **fuentes reales**, por su parte, son la materia prima social de la que se nutre el legislador: hechos, movimientos y necesidades colectivas (p. ej., reconocimiento del matrimonio igualitario, protección de datos personales, tutela ambiental). No son “norma” todavía, pero condicionan su **contenido**. Así, cuando la realidad muestra nuevas vulnerabilidades, aflora la exigencia de responder con criterios de justicia, certeza y libertad. El tránsito correcto es del **hecho social** a la **deliberación pública** y de allí a la **regla general**: sólo así la energía del cambio se vuelve Derecho **previsible** y **controlable**. Sin esa traducción, la vida social queda librada a usos particulares; con ella, se integra a un orden común reconocible.",
            },
            {
              type: "paragraph",
              text: "La **costumbre** ocupa un lugar singular. Es el uso social reiterado que, en determinados supuestos, puede adquirir reconocimiento jurídico. El material enfatiza que en México **no desplaza a la ley**: donde hay norma escrita, la costumbre contraria no prevalece; su función típica es **supletoria** (a falta de ley) o **interpretativa** (aclara prácticas). Esta prudencia doctrinal protege la publicidad y generalidad del Derecho: evita que hábitos locales, acaso opacos o excluyentes, sustituyan el estándar democrático de producción normativa. A la vez, reconocer la costumbre como insumo **real** cumple dos fines: dota de **contexto** a figuras jurídicas (usos mercantiles, prácticas profesionales) y alerta sobre la necesidad de legislar cuando el uso extendido revela un vacío o disfunción. La clave operativa para el profesional es doble: (i) **verificar** siempre si existe regla positiva y vigente; sólo en su ausencia, considerar el uso como pauta supletoria; y (ii) **documentar** la práctica con rigor —reiteración, aceptación social, compatibilidad con principios— para que su invocación no sea arbitraria. Así, la costumbre aporta plasticidad al sistema sin romper su espina dorsal de legalidad y certeza.",
            },
            {
              type: "paragraph",
              text: "En cuanto a la **jurisprudencia**, el material la describe como la producción interpretativa de los tribunales que orienta y uniforma la aplicación de la ley. En México, se genera por órganos definidos (Pleno y Salas de la Suprema Corte, Plenos de Circuito, Tribunales Colegiados, Sala Superior y Salas Regionales del Tribunal Electoral) y cumple una función decisiva: **colmar vacíos**, **precisar alcances** y **garantizar coherencia** en la decisión de casos. Bajo esta visión, su papel es eminentemente **hermenéutico**: no sustituye el procedimiento democrático de creación normativa, sino que lo hace **operar** caso por caso, con criterios que tienden a estabilizar expectativas y a proteger derechos. La conclusión práctica es clara: la jurisprudencia **no debe** convertirse en “ley paralela”, pero sí es guía vinculante en la medida en que el orden así lo dispone. Para el operador, esto implica rastrear tesis aplicables, distinguir supuestos fácticos, argumentar **conforme** y, llegado el caso, promover cambios legislativos cuando la experiencia judicial revela un diseño legal deficiente. Se trata, en suma, de un **diálogo institucional** entre legislador y juez al servicio de la seguridad jurídica.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el **proceso legislativo**: la vía **formal** por excelencia para producir Derecho general y abstracto. A nivel federal —según el material— sus fases son seis: **iniciativa**, **discusión**, **aprobación**, **sanción**, **publicación** e **inicio de vigencia**. Cada etapa cumple una garantía: apertura a propuestas, deliberación pública, formación de mayorías, control del Ejecutivo, publicidad oficial y certeza temporal para que la norma comience a regir. La **legitimidad** de la ley descansa, así, en el mandato democrático y en la posibilidad de **revisión** por controles constitucionales. La técnica profesional exige dominar esta cadena para evaluar validez (competencia, procedimiento), vigencia (transitorios, derogaciones) y aplicabilidad (ámbito material y territorial). De este reconocimiento se derivan dos consecuencias operativas: (i) las transformaciones de gran calado deberían canalizarse por el **cauce legislativo**; (ii) los arreglos interpretativos o consuetudinarios pueden **informar** y **preparar** la reforma, pero no reemplazarla. Cuando estas piezas encajan, el sistema combina **estabilidad** y **adaptación**: reglas públicas, previsibles y revisables que convierten el cambio social en Derecho común.",
            },

            /* Acordeón con tres niveles */
            {
              type: "accordion",
              header: "Nivel 1 — Conceptual: mapa de fuentes",
              open: false,
              text: "Históricas (documentos del pasado que ilustran), reales (hechos y factores sociales que impulsan contenido) y formales (procedimientos que crean normas). En el enfoque del material, la legislación es la vía formal por excelencia; costumbre y jurisprudencia cumplen funciones supletoria/interpretativa.",
            },
            {
              type: "accordion",
              header: "Nivel 2 — Analítico: criterios de validez y uso",
              open: false,
              text: "Pregunta guía: ¿produce norma vigente o sólo la inspira/interpretan? Verifica: competencia, procedimiento, publicación, inicio de vigencia, compatibilidad constitucional. Si es costumbre: prueba reiteración y ausencia de ley. Si es jurisprudencia: identifica órgano, tesis aplicable y alcance.",
            },
            {
              type: "accordion",
              header: "Nivel 3 — Aplicado: checklist rápido para casos",
              open: false,
              text: "1) Localiza norma positiva y vigente. 2) Si falta, consulta usos (costumbre) con evidencia. 3) Revisa jurisprudencia pertinente y su fuerza. 4) Mapea fase legislativa si procede reforma. 5) Documenta cada paso con fechas y órganos. Resultado: argumentos claros, previsibles y controlables.",
            },
          ],
          subthemes: [
            {
              id: "1.4.1",
              numbering: "4.1",
              title: "Fuentes del Derecho",
              content: [
                {
                  type: "paragraph",
                  text: "Cuando preguntamos de dónde surge el Derecho, acudimos al símil de la “fuente”. El material distingue tres clases: históricas, reales y formales. Las primeras son los documentos que testimonian cómo se ha normado la vida colectiva (p. ej., compilaciones antiguas, constituciones), útiles para comprender el trayecto de la cultura jurídica. Las segundas son los hechos y factores sociales que empujan contenido —cambios tecnológicos, nuevas sensibilidades y movimientos— que alimentan las decisiones normativas. Las terceras, finalmente, son los procedimientos que convierten esas energías en reglas generales y abstractas aplicables a todos. Esta clasificación permite separar lo que inspira o ilustra (históricas y reales) de lo que propiamente “hace” Derecho (formales). En la perspectiva del curso, la legislación es la vía formal por excelencia, porque condensa voluntad pública, procedimientos abiertos y control constitucional. Así, podemos seguir un hilo claro: de la realidad social a la deliberación, y de allí a una norma pública, cognoscible y controlable por la ciudadanía y los tribunales.",
                },
                {
                  type: "paragraph",
                  text: "Las fuentes históricas cumplen tres funciones. Comparada: muestran alternativas institucionales y soluciones probadas (o fallidas) en otros tiempos y lugares. Crítica: advierten sobre derivas que conviene evitar y sobre principios que vale la pena preservar. Pedagógica: forman la sensibilidad jurídica del principiante, ayudándole a identificar continuidades y rupturas en el tratamiento de problemas comunes (propiedad, familia, libertad, igualdad). No generan Derecho vigente por sí mismas, pero dotan de contexto a la interpretación y a la reforma. Las fuentes reales, por su parte, son el pulso vivo de la sociedad: allí se cuecen las necesidades que demandan nuevas respuestas (privacidad digital, igualdad sustantiva, ambiente). Esos hechos no son aún normas, pero condicionan su contenido. Sin este eslabón, la legislación se vuelve ciega; con él, el Derecho se mantiene razonable, oportuno y proporcionado a los desafíos de su tiempo.",
                },

                {
                  type: "accordion",
                  header: "Mapa rápido de fuentes",
                  open: false,
                  text: "• Históricas: documentos del pasado que orientan; no son vigentes. • Reales: hechos y factores sociales que empujan contenido normativo. • Formales: procedimientos que producen normas (enfoque del curso: legislación como vía central). Función: separar inspiración/ilustración de producción normativa.",
                },

                {
                  type: "paragraph",
                  text: "La clave operativa está en las fuentes formales. Un orden democrático necesita reglas que nazcan de procedimientos identificables, con órganos competentes, publicidad y controles. Sólo así las personas pueden conocer qué rige, exigir su observancia y disputar su reforma. Por eso, en este enfoque, la legislación tiene primacía: traduce el conflicto social en normas generales, iguala a gobernantes y gobernados ante un mismo texto, y habilita controles de constitucionalidad cuando el contenido se aparta de los derechos. Costumbre y jurisprudencia tienen papeles relevantes —supletorio o interpretativo—, pero no sustituyen el cauce legislativo en cuanto a creación de Derecho general. Esta jerarquía protege la seguridad jurídica: evita que hábitos opacos o soluciones puntuales desplacen la regla pública, general y abstracta.",
                },

                {
                  type: "image",
                  src: "https://aprendederecho.com/wp-content/uploads/2023/07/Clasificacion-y-tipos-de-las-fuentes-del-derecho-768x432-1.webp",
                  caption:
                    "Clasificación de fuentes: históricas, reales y formales (recurso del módulo).",
                },

                {
                  type: "paragraph",
                  text: "Trabajar con fuentes exige método. Primero, identifica si lo que invocas produce norma vigente (formal) o si sólo aporta contexto (histórica/real). Segundo, verifica autoría, competencia y procedimiento cuando se trate de legislación; en su caso, revisa jurisprudencia aplicable como guía hermenéutica. Tercero, documenta la realidad que empuja cambios normativos: evidencia, diagnósticos y evaluación de impacto. Cuarto, articula los tres planos con una pregunta guía: ¿esta solución, además de válida, realiza fines jurídicos (justicia, igualdad, libertad, seguridad, certeza)? Con ello, las fuentes dejan de ser un listado y se convierten en una técnica para diseñar y defender mejores reglas.",
                },

                {
                  type: "accordion",
                  header: "Errores frecuentes (y cómo evitarlos)",
                  open: false,
                  text: "• Tratar costumbre o jurisprudencia como “ley paralela”. Antídoto: distinguir su función supletoria/interpretativa. • Ignorar el paso de realidad a norma: legislar sin diagnóstico. Antídoto: pruebas e impacto. • Citar fuentes históricas como si fueran vigentes. Antídoto: verificar vigencia y jerarquía.",
                },

                {
                  type: "paragraph",
                  text: "Conclusión: las fuentes son la anatomía del Derecho. Las históricas conservan memoria; las reales orientan contenido; las formales producen reglas obligatorias. En el esquema del curso, la legislación concentra la fuerza normativa general, y el resto de las fuentes acompaña: la costumbre aporta plasticidad contextual (donde no hay ley) y la jurisprudencia estabiliza interpretaciones. Con este mapa, el estudiante puede responder a tres preguntas claves en cualquier caso: ¿de dónde viene la norma?, ¿por qué dice lo que dice?, ¿cómo puedo cambiarla o hacer que se aplique mejor?",
                },
              ],
            },
            {
              id: "1.4.2",
              numbering: "4.2",
              title: "La costumbre",
              content: [
                {
                  type: "paragraph",
                  text: "La costumbre es el uso social reiterado que, en ciertos contextos, se eleva a pauta normativa. En el enfoque del material, su papel es acotado y prudente: en México no desplaza a la ley; opera sobre todo como criterio supletorio cuando falta regulación expresa o como pauta interpretativa para aclarar el sentido práctico de una institución. Esta cautela protege la publicidad y generalidad del Derecho: evita que hábitos locales, opacos o excluyentes, sustituyan la regla producida por cauces democráticos. Reconocer su valor, sin embargo, es importante: las prácticas consolidadas revelan necesidades reales, llenan huecos mientras el legislador actúa y ayudan a verificar si una solución legal es factible en la vida social. Usar costumbre exige probar reiteración, aceptación social y compatibilidad con principios, sin contrariar una norma vigente.",
                },
                {
                  type: "paragraph",
                  text: "Como fuente “real”, la costumbre funciona también como termómetro de cambio. Movimientos sociales y hábitos extendidos anticipan reformas; la práctica mercantil, profesional o comunitaria puede señalar atajos y riesgos que el legislador debe considerar. El tránsito correcto no es del hábito a la obligatoriedad ciega, sino del hábito a la deliberación y de ésta a la regla publicada. Dejar todo al uso equivale a privatizar el Derecho; absorber la realidad sin escucharla conduce a normas ineficaces. La buena técnica combina escucha (evidencia empírica de prácticas), prudencia (no contradecir la ley) y canalización formal (reforma cuando la práctica lo justifica). Así, la costumbre nutre el sistema sin romper su espina dorsal de legalidad y certeza, y el profesional cuenta con un instrumento para argumentar, siempre que justifique su existencia y su compatibilidad.",
                },

                {
                  type: "accordion",
                  header: "Cuándo invocar costumbre (checklist)",
                  open: false,
                  text: "1) A falta de ley aplicable o para interpretar su alcance. 2) Prueba de reiteración y aceptación social. 3) Compatibilidad con principios y derechos. 4) Ausencia de contradicción con norma vigente. 5) Finalidad razonable (resolver un vacío real, no evadir obligaciones).",
                },

                {
                  type: "paragraph",
                  text: "En la práctica, la costumbre aparece con fuerza en ámbitos como los usos mercantiles, las prácticas profesionales y ciertos entornos comunitarios. En comercio, por ejemplo, las partes suponen estándares de diligencia, plazos y formas que el juez puede reconocer si no hay texto expreso. En lo profesional, códigos de conducta positivados pueden cristalizar prácticas previas; mientras no lo hagan, la costumbre orienta pero no manda. En lo comunitario, conviene distinguir entre prácticas compatibles con el orden constitucional y aquellas que no lo son: sólo las primeras pueden servir como pauta interpretativa o supletoria. Este tamiz evita confundir tradición con privilegio, y protege a personas en situación de vulnerabilidad frente a usos excluyentes.",
                },

                {
                  type: "paragraph",
                  text: "Metodológicamente, invocar costumbre exige un estándar probatorio: describir la conducta, mostrar su reiteración temporal y su aceptación generalizada en el círculo relevante, y explicar por qué no contradice una norma vigente. Alegaciones genéricas (“así se hace siempre”) no bastan: se requieren documentos, testimonios, manuales o evidencia sectorial. Si la prueba es débil, la invocación puede volverse un intento de eludir la ley. Por el contrario, cuando es robusta y razonable, la costumbre evita soluciones artificiales y acerca la decisión al modo en que las personas organizan de hecho sus intercambios.",
                },

                {
                  type: "accordion",
                  header: "Errores frecuentes con costumbre",
                  open: false,
                  text: "• Pretender que prevalezca sobre la ley escrita. • Usarla para legitimar prácticas discriminatorias. • Afirmarla sin prueba. • Confundir “uso” con “conveniencia” de una de las partes. Antídoto: prueba rigurosa + control de compatibilidad con derechos.",
                },

                {
                  type: "paragraph",
                  text: "Conclusión: la costumbre, bien entendida, no es una “ley de segundo piso”, sino una vía de sensatez jurídica. Muestra cómo operan las instituciones en la vida real, ayuda a colmar vacíos y sugiere reformas cuando el uso extendido revela disfunciones. Su legitimidad depende de tres filtros: no contradecir norma vigente, respetar principios y derechos, y estar sólidamente probada. Mantenerla en su sitio —supletoria/interpretativa— preserva la seguridad jurídica y, al mismo tiempo, mantiene al Derecho conectado con la experiencia social que pretende ordenar.",
                },
              ],
            },
            {
              id: "1.4.3",
              numbering: "4.3",
              title: "La jurisprudencia",
              content: [
                {
                  type: "paragraph",
                  text: "La jurisprudencia es la labor interpretativa de los tribunales al resolver casos y uniformar criterios. En el enfoque del material, su función es eminentemente hermenéutica: colma vacíos, precisa alcances y orienta la aplicación de la ley, pero no sustituye el cauce democrático de creación normativa. En México, se genera mediante órganos determinados —Pleno y Salas de la Suprema Corte de Justicia de la Nación, Plenos de Circuito, Tribunales Colegiados de Circuito, y el Tribunal Electoral (Sala Superior y Salas Regionales)—. Que su papel sea interpretativo no la vuelve ornamental: en la práctica, estabiliza expectativas, corrige ambigüedades y protege derechos, al tiempo que revela necesidades de reforma cuando la letra legal se muestra insuficiente o contradictoria. Por ello, conviene verla como un diálogo institucional con el legislador: no crea “ley paralela”, pero sí ordena el sentido de la vigente.",
                },
                {
                  type: "paragraph",
                  text: "Trabajar con jurisprudencia exige distinguir fuerza y alcance. No toda decisión judicial produce el mismo efecto: hay criterios obligatorios (según reglas de integración y publicación) y orientadores. El operador serio identifica órgano, fecha, tipo de tesis, rubro y texto, así como el supuesto de hecho al que se aplicó. Después, compara su caso con ese patrón fáctico para decidir si hay identidad, analogía o diferencia relevante. Esta lectura evita la aplicación mecánica de enunciados y fomenta la argumentación responsable: cuando el caso difiere, la tesis puede no ser trasladable; cuando es idéntico, la coherencia exige seguirla, salvo razones constitucionales muy fuertes. En todos los escenarios, la jurisprudencia ofrece un lenguaje común que reduce la discrecionalidad y favorece la igualdad ante la ley.",
                },

                {
                  type: "accordion",
                  header: "Cómo usar la jurisprudencia (pasos)",
                  open: false,
                  text: "1) Identifica órgano y tipo de criterio. 2) Lee rubro y texto completo, no sólo el sumario. 3) Contrasta los hechos de tu caso. 4) Verifica vigencia y si ha sido superada. 5) Armoniza con Constitución y derechos. 6) Si el patrón no calza, explica la distinción.",
                },

                {
                  type: "paragraph",
                  text: "Como instrumento de garantía, la jurisprudencia ofrece remedios interpretativos: “interpretación conforme” para salvar leyes compatibles con la Constitución; “proporcionalidad” para balancear derechos en conflicto; “control difuso o concentrado” (según corresponda) para expulsar o desplazar normas contrarias a derechos. Estas técnicas no surgen de un voluntarismo judicial, sino de la necesidad de hacer operativas las cláusulas constitucionales y de asegurar que el ordenamiento, leído como sistema, no sacrifique la dignidad ni la igualdad. Por eso, la crítica correcta a un criterio no se agota en la etiqueta (“activista” o “formalista”), sino que discute evidencia, razones y efectos prácticos.",
                },

                {
                  type: "paragraph",
                  text: "La jurisprudencia también cumple una función prospectiva: cuando, caso tras caso, un problema se repite y las soluciones judiciales revelan límites de la redacción legal, el mensaje al legislador es claro: hace falta ajustar el texto. Esta retroalimentación sana el sistema: los jueces resuelven con las herramientas disponibles y, con sus criterios, señalan zonas de mejora. Entonces, el cauce correcto es la reforma, no la perpetuación de parches interpretativos. Así, se evita convertir criterios contingentes en sustitutos permanentes de la ley.",
                },

                {
                  type: "accordion",
                  header: "Errores comunes con jurisprudencia",
                  open: false,
                  text: "• Citar sólo el rubro sin el texto. • Ignorar el patrón fáctico. • Tratarla como “ley” creadora de obligaciones generales. • Desconocer vigencia y jerarquía. Antídoto: lectura integral + contraste de hechos + control constitucional.",
                },

                {
                  type: "paragraph",
                  text: "Conclusión: en el diseño del curso, la jurisprudencia es guía, no fábrica de normas generales. Su autoridad proviene de su racionalidad, de la regularidad de su emisión y de su compatibilidad con la Constitución. Usada con método, reduce incertidumbre, protege derechos y mejora la calidad de la legislación al evidenciar sus fallas. El profesional que domina su lectura argumenta mejor, evita arbitrariedades y contribuye a un Derecho más claro y más justo.",
                },
              ],
            },
            {
              id: "1.4.4",
              numbering: "4.4",
              title: "Proceso legislativo",
              content: [
                {
                  type: "paragraph",
                  text: "El proceso legislativo es, en este enfoque, la fuente formal por excelencia del Derecho general y abstracto. A nivel federal está delineado en la Constitución y se compone de seis fases: iniciativa, discusión, aprobación, sanción, publicación e inicio de vigencia. Cada etapa cumple una garantía: apertura (presentar proyectos), deliberación (debate en comisiones y plenos), construcción de mayorías (aprobación), control interorgánico (sanción del Ejecutivo), publicidad (publicación oficial) y certeza temporal (entrada en vigor). Esta cadena legitima la ley porque la vincula al mandato democrático y la somete a controles. Además, permite a la ciudadanía conocer qué rige “hoy, aquí y ahora”, y a los tribunales controlar su compatibilidad con la Constitución. En suma, el proceso legislativo convierte necesidades reales en reglas públicas y previsibles.",
                },
                {
                  type: "paragraph",
                  text: "La fase de iniciativa abre el juego a actores facultados (por ejemplo, Ejecutivo, legisladores, en ciertos casos congresos locales). No toda propuesta merece ser ley; el filtro profesional exige diagnósticos, opciones regulatorias y evaluación de impacto. Si la iniciativa supera este umbral, pasa a discusión: comisiones estudian, reciben insumos, formulan dictámenes y los someten al pleno. La calidad de la ley se cocina aquí: sin evidencia y sin escucha, la discusión se reduce a consignas. La aprobación traduce acuerdos en mayorías; la sanción agrega un control adicional del Ejecutivo; la publicación da publicidad y certeza; y el inicio de vigencia marca el momento a partir del cual la norma obliga, a veces tras una vacatio legis que permite adaptación.",
                },

                {
                  type: "accordion",
                  header: "Checklist de validez formal",
                  open: false,
                  text: "1) Órgano competente presenta iniciativa. 2) Discusión en comisiones con dictamen. 3) Aprobación por mayorías requeridas. 4) Sanción (cuando proceda). 5) Publicación en medio oficial. 6) Inicio de vigencia claro. Si falta uno, hay vicio de forma.",
                },

                {
                  type: "paragraph",
                  text: "El proceso no agota la pregunta por la justicia del contenido. Aquí entra el control constitucional: si una ley válida vulnera derechos, existen acciones y juicios para expulsarla o reinterpretarla. Lejos de ser una confrontación entre poderes, este control complementa la legitimidad democrática con la legitimidad constitucional. La técnica de interpretación conforme y los test de proporcionalidad permiten salvar el mayor contenido posible del texto, sin sacrificar derechos fundamentales. De este modo, la “mejor ley posible” resulta de una doble validación: forma estricta y sustancia compatible con la Constitución.",
                },

                {
                  type: "paragraph",
                  text: "Un aspecto frecuentemente descuidado es la implementación. La ley nace con publicación e inicio de vigencia, pero su eficacia depende de reglamentos, lineamientos, presupuestos y capacidades institucionales. Por eso, una buena iniciativa prevé transitorios claros, etapas de adopción, y esquemas de evaluación y revisión. Del mismo modo, la técnica legislativa debe evitar ambigüedades innecesarias, duplicidades y remisiones oscuras que dificulten la aplicación y multipliquen litigios. La claridad promueve cumplimiento voluntario; la oscuridad invita a la discrecionalidad.",
                },

                {
                  type: "accordion",
                  header: "Errores típicos del ciclo legislativo",
                  open: false,
                  text: "• Legislar sin diagnóstico (ley simbólica). • Omitir evaluación de impacto. • Texto ambiguo o contradictorio. • Transitorios confusos. • Ignorar costos de implementación. Antídoto: evidencia + técnica normativa + seguimiento.",
                },

                {
                  type: "paragraph",
                  text: "Conclusión: el proceso legislativo es el taller público donde se forja el Derecho común. Cada fase cumple una función de control y de calidad; cada omisión genera costos democráticos y jurídicos. En el modelo del curso, su supremacía como fuente formal asegura publicidad, previsibilidad y posibilidad de revisión. Para el profesional, dominar esta cadena permite evaluar validez, vigencia y aplicabilidad de las leyes; para la ciudadanía, ofrece un mapa para incidir, exigir razones y, cuando sea necesario, promover cambios por los cauces previstos.",
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
          href: "https://www.youtube.com/watch?v=IjB12qr5xSk", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Video: Derecho y moral — YouTube https://www.youtube.com/watch?v=IjB12qr5xSk",
            "Video: Las fuentes del Derecho y su clasificación — YouTube https://www.youtube.com/watch?v=179qUdvHUNo",
            "Lectura: El sistema jurídico mexicano — Suprema Corte de Justicia de la Nación (PDF) https://www.scjn.gob.mx/sites/default/files/material_didactico/2016-11/Sistema-Juridico-Mexicano.pdf",
            "Lectura: Diferencias entre derecho objetivo y derecho subjetivo — LP Derecho https://lpderecho.pe/diferencias-derecho-objetivo-subjetivo/",
            // Si alguna liga falla, contacto de reporte: bombela.enrique107@ueh.edu.mx
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
          items: [
            "ÁLVAREZ, M. (1995). Introducción al estudio del derecho. México, Mc Graw Hill.",
            "GARCÍA, E. (2001). Introducción al estudio del Derecho. México, Porrúa.",
            "PENICHE, E. (1974). Introducción al Derecho. México, Porrúa.",
            "PENICHE, F. (2000). Introducción al Estudio del Derecho. México, Porrúa.",
            "PEREZNIETO, L. (2009). Introducción al estudio del derecho. México, Oxford.",
            "VILLORO, M. (1994). Introducción al estudio del Derecho. México, Porrúa.",
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
