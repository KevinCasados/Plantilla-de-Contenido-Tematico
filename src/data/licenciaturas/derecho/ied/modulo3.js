/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "licenciatura-derecho",
  courseId: "introduccion-estudio-del-derecho",
  id: "modulo3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Introducción al Estudio del Derecho",
  title:
    "Módulo 3. Derecho de libertad y de acción; concepto jurídico de persona; sanción y coacción",
  semestre: "Primero",
  teacher: "Dr. José Valentín Ramos Fajardo",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar los fundamentos del derecho de libertad y del derecho de acción; distinguir el concepto jurídico de persona (física y moral) y sus atributos; y comprender la sanción y la coacción como base de la potestad estatal para garantizar la convivencia social.",
  competencies: [
    "Explica el derecho de libertad en términos jurídicos y diferencia actos ordenados, prohibidos y potestativos.",
    "Distingue el derecho de acción en sus acepciones abstracta y concreta, e identifica sus implicaciones procesales.",
    "Reconoce y aplica el concepto jurídico de persona, diferenciando persona física y persona moral y sus atributos.",
    "Comprende la relación jurídico-procesal entre partes y tribunal, y el papel de la demanda, defensa y sentencia.",
    "Analiza sanción y coacción, sus clasificaciones y la función de la pena en un Estado de derecho.",
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
          text: "Este módulo aborda: derecho de libertad; derecho de acción; concepto jurídico de persona; sanción y coacción. Unidades 11–14.",
        },
      ],
    },

    /* 11. Unidad principal */
    {
      id: "11",
      numbering: "Unidad 11",
      title: "El derecho de libertad",
      content: [
        {
          type: "paragraph",
          text: "El derecho de libertad, en sentido estrictamente jurídico, no se confunde con la mera ausencia de obstáculos físicos ni con una facultad natural indeterminada. En el orden normativo, la libertad se entiende como una autorización conferida por el Derecho para actuar u omitir dentro de un marco regulado. Esta autorización se torna inteligible cuando se contrasta con la tríada de actos ordenados, prohibidos y potestativos: los primeros imponen un deber de hacer; los segundos, un deber de abstenerse; y los terceros, un margen de elección. De ahí que la libertad no sea una ‘licencia ilimitada’, sino un espacio normativamente construido en el que el individuo decide sin invadir los ámbitos jurídicos ajenos ni contrariar mandatos imperativos. La idea de autorización explica por qué la libertad puede coexistir con reglas, procedimientos y límites; no es lo opuesto al Derecho, sino una de sus formas de expresión más altas. Entenderla así evita lecturas simplistas y sienta bases sólidas para el estudio de la licitud e ilicitud, la responsabilidad y, más adelante, la tutela jurisdiccional efectiva.",
        },

        {
          type: "paragraph",
          text: "La categoría jurídico-positiva de libertad cobra precisión cuando se vincula con la licitud. Un acto es lícito si: (a) ejecuta lo ordenado; (b) omite lo prohibido; o (c) ejecuta u omite lo no ordenado ni prohibido. Por el contrario, es ilícito si: (a) omite lo ordenado; o (b) ejecuta lo prohibido. Este cuadro lógico evidencia que la libertad jurídica vive, ante todo, en el terreno de lo potestativo: allí donde el ordenamiento no ha impuesto un deber específico, otorga al sujeto un espacio de autodeterminación. Ese ámbito libre no es residual ni marginal; permite concretar proyectos de vida, contratar, asociarse o expresarse, siempre que no se quebranten deberes positivos ni prohibiciones. La licitud funciona como test operativo para evaluar conductas y delimitar consecuencias: si el acto cae en un supuesto ilícito, emerge la respuesta sancionatoria; si es lícito, el ordenamiento lo tolera o lo promueve. Esta lectura es imprescindible para distinguir libertad de arbitrariedad y, al mismo tiempo, para comprender por qué la libertad se sostiene sobre una arquitectura de reglas.",
        },

        {
          type: "paragraph",
          text: "Desde la perspectiva institucional, la libertad jurídica presupone la existencia de un Estado que fija mandatos, prohibiciones y zonas de opción. No es un ‘fuera del Derecho’, sino una modalidad de este que ordena la convivencia. Por ello, los límites a la libertad no son anomalías, sino condiciones de posibilidad del mismo sistema: principios de generalidad, abstracción y proporcionalidad articulan la compatibilidad entre opciones individuales y bienes colectivos. Importa también separar la libertad jurídica de otras nociones: no equivale a autonomía moral ni a libertad metafísica; su gramática es normativa, se expresa en reglas, derechos y deberes. Así, la pregunta relevante nunca es si se es ‘absolutamente’ libre, sino qué autorizaciones reconoce el ordenamiento en un caso dado y bajo qué condiciones se activan límites, controles o responsabilidades. Esta aproximación evita confundir sensibilidad ética con calificación jurídica e impide extrapolar juicios morales al campo de la validez normativa sin el debido análisis de tipicidad, antijuridicidad y consecuencias.",
        },

        {
          type: "paragraph",
          text: "Operativamente, la libertad se determina caso por caso mediante un itinerario de preguntas: ¿existe un mandato expreso que ordene actuar? Si la respuesta es afirmativa, el margen de decisión se reduce al cumplimiento. ¿Hay una prohibición aplicable al supuesto? De haberla, la conducta vedada se excluye del menú de opciones. En ausencia de mandato o prohibición, el acto se sitúa en la esfera potestativa y el sujeto puede obrar u omitir. Este esquema no agota el análisis: la calificación puede verse modulada por reglas especiales, por el estatus de las partes (p. ej., autoridad vs. particular) o por contextos institucionales (educativos, sanitarios, procesales). Además, toda elección libre en el plano jurídico entraña accountability: quien opta asume efectos y cargas, particularmente cuando su conducta incide en bienes de terceros o en la esfera pública. Así, la libertad opera como capacidad para elegir responsablemente bajo reglas, no como dispensa de responder por las consecuencias.",
        },

        {
          type: "paragraph",
          text: "Comprender el derecho de libertad prepara la transición hacia problemas procesales y sancionadores. En sede procesal, la libertad conecta con la posibilidad de activar la jurisdicción cuando se estima lesionado un derecho o interés legítimo: la acción, en sus acepciones abstracta y concreta, instrumenta esa expectativa de tutela. En sede sancionatoria, las decisiones libres adquieren relevancia al momento de medir la antijuridicidad y la culpabilidad, y de graduar la respuesta coactiva del Estado. Por ello, el estudio de la libertad no es un capítulo aislado; es un nodo que articula licitud, responsabilidad, acción y sanción. A nivel pedagógico, la unidad invita a entrenar el juicio práctico: identificar normas aplicables, discriminar entre lo permitido, lo ordenado y lo prohibido, y justificar la calificación con lenguaje estrictamente jurídico. Esa destreza será crucial cuando abordemos la estructura de la relación jurídico-procesal y la clasificación de sanciones.",
        },

        {
          type: "accordion",
          header: "Nivel 1. Fundamentos: autorización, actos y licitud",
          open: false,
          text: "La libertad jurídica se concibe como autorización normativa para obrar u omitir dentro de un marco de reglas. Su inteligibilidad depende de la distinción entre actos ordenados (deber de hacer), prohibidos (deber de no hacer) y potestativos (margen de elección). En este último reside el ejercicio típico de la libertad. La licitud se determina comparando la conducta con el estatuto normativo aplicable: es lícito ejecutar lo ordenado, omitir lo prohibido y decidir sobre lo no ordenado ni prohibido; es ilícito omitir lo ordenado o ejecutar lo prohibido. Esta grilla simple, pero robusta, evita confundir el espacio de opción con arbitrariedad, y explica por qué la libertad exige reglas y, a la vez, las legitima como condiciones necesarias para una convivencia racionalmente organizada.",
        },

        {
          type: "accordion",
          header: "Nivel 2. Análisis: límites, método y responsabilidad",
          open: false,
          text: "El análisis jurídico exige un método. Primero, identificar normas generales y especiales que afecten el caso. Segundo, clasificar la conducta: ¿se trata de un mandato, una prohibición o un supuesto potestativo? Tercero, verificar límites: colisión con derechos de terceros, protección del orden público o cumplimiento de fines constitucionalmente valiosos. Cuarto, derivar consecuencias: permisos, deberes, cargas o sanciones. La libertad no opera como exención de responsabilidad; por el contrario, ‘elegir’ en Derecho implica asumir efectos y responder por ellos. Los principios de generalidad, abstracción y proporcionalidad son herramientas para calibrar límites sin vaciar el contenido de la libertad, asegurando que el control estatal sea necesario y adecuado al fin perseguido.",
        },

        {
          type: "accordion",
          header:
            "Nivel 3. Aplicación: criterio práctico y transición procesal",
          open: false,
          text: "En la práctica, calificar jurídicamente una decisión exige argumentar con normas, no con intuiciones morales. Un mismo hecho puede ser libre en un ámbito y regulado en otro, según la competencia de la autoridad y el régimen aplicable. Por ejemplo, acceder voluntariamente a un servicio puede ser potestativo, pero la prestación puede imponer deberes de seguridad o información. Esta mirada matizada prepara el puente hacia la unidad siguiente: si se estima vulnerado un derecho por la actuación de otro o de la administración, la libertad se canaliza mediante el derecho de acción para provocar la actividad jurisdiccional. De ese modo, libertad y tutela judicial se articulan: elegir dentro de la regla y activar la jurisdicción cuando la regla se infringe.",
        },
      ],
      subthemes: [
        {
          id: "11.1",
          numbering: "11.1",
          title: "Definición de libertad",
          content: [
            {
              type: "paragraph",
              text: "En el uso corriente, ‘libertad’ suele identificarse con la ausencia de obstáculos para moverse o actuar; se trata de una noción mecánica o fáctica. En cambio, el Derecho la entiende con una gramática distinta: no como simple poder natural, sino como un derecho que opera mediante ‘autorizaciones’ para obrar u omitir dentro de un marco normativo. Esta lectura, clásica en la doctrina, subraya que la libertad jurídica no es un atributo indeterminado de la naturaleza humana, sino una posición normativa definida por las reglas del ordenamiento. Por eso, distintos autores distinguen entre la libertad ‘natural’ —capacidad de autodeterminación sin coacción— y la libertad ‘jurídica’ —espacio normativo en el que la conducta está permitida. Esta diferencia explica por qué la libertad puede coexistir con leyes y procedimientos sin verse anulada. En términos comparados, la idea se ha expresado mediante verbos que aluden a ‘estar autorizado’, difícilmente traducibles con precisión al español. Lo central, sin embargo, es que en Derecho la libertad no equivale a ausencia de Estado, sino a un ámbito de acción que el propio orden jurídico diseña, estabiliza y protege. Con ello, la libertad se vuelve analizable, justificable y controlable con criterios de licitud e ilicitud, evitando confundirla con arbitrariedad o mera espontaneidad.",
            },

            {
              type: "paragraph",
              text: "Si el Derecho es un sistema de mandatos, prohibiciones y permisos, la libertad jurídica consiste en el ejercicio de estos últimos. La persona no ‘hace lo que quiere’ en abstracto, sino lo que está jurídicamente autorizado a realizar. Desde esta óptica, el ordenamiento clasifica las conductas frente a la autoridad en tres tipos: actos ordenados (imponen un deber de hacer), actos prohibidos (imponen un deber de no hacer) y actos potestativos (dejan un margen de elección). Es precisamente en este tercer ámbito donde se ubica el ejercicio típico de la libertad: el sujeto puede actuar u omitir sin incurrir en infracción, porque la norma no le manda ni le veda. Esta concepción tiene una consecuencia decisiva: la libertad ya no se define por la fuerza o la voluntad subjetiva, sino por la estructura normativa que permite, condiciona y, llegado el caso, responsabiliza. Así se entiende por qué los límites no son negación de la libertad, sino condiciones de posibilidad de una convivencia razonable, donde las opciones individuales coexisten con bienes colectivos y con los derechos de terceros.",
            },

            {
              type: "accordion",
              header: "De la libertad natural a la libertad jurídica",
              open: false,
              text: "La libertad natural describe la autodeterminación como potestad fáctica del individuo; la libertad jurídica, en cambio, precisa cuándo y cómo esa autodeterminación está autorizada por el ordenamiento. La primera responde a categorías filosóficas; la segunda, a categorías normativas: permiso, mandato, prohibición. Esta transición evita que la evaluación de conductas dependa de intuiciones morales y la reconduce al terreno de la licitud e ilicitud, con consecuencias jurídicas previsibles y controladas por instituciones.",
            },

            {
              type: "paragraph",
              text: "El esquema de licitud/ilicitud clarifica operativamente el alcance de la libertad. Un acto es lícito cuando cumple un mandato, cuando omite una prohibición, o cuando se ejecuta u omite lo que no está ni ordenado ni prohibido. Es ilícito, en cambio, omitir lo ordenado o ejecutar lo prohibido. Esta pauta, sencilla pero robusta, transforma la libertad en un criterio aplicable caso por caso: el agente es libre en la medida en que su conducta encaja en un supuesto de licitud. Lejos de ser residual, el ámbito potestativo resulta fundamental para realizar proyectos de vida, contratar, asociarse o expresarse; no obstante, la licitud exige verificar normas generales y especiales, así como eventuales límites derivados de la protección de terceros o del orden público. En suma, la libertad no actúa como dispensa frente a la regla, sino como una modalidad de la regla que, por su propia naturaleza, convive con deberes, prohibiciones y responsabilidades.",
            },

            {
              type: "paragraph",
              text: "Entender la libertad como autorización permite explicar por qué el Estado —lejos de ser su antagonista— funge como arquitecto del espacio libre. El diseño institucional fija los contornos de lo potestativo, asegura la vigencia de lo ordenado y lo prohibido, y prevé mecanismos de reacción ante los ilícitos. Ello incluye principios como generalidad y abstracción de las normas, y estándares de proporcionalidad para calibrar los límites sin vaciar de contenido las opciones individuales. Así, ‘estar autorizado’ nunca significa actuar de modo inmune; significa estar dentro de un cauce normativo que reconoce márgenes, impone cargas (información, diligencia, seguridad) y asigna consecuencias cuando la conducta traspasa lo permitido. Este enfoque preserva la libertad frente al decisionismo y la arbitrariedad, y al mismo tiempo la inscribe en una cultura de responsabilidad jurídica que hace inteligible la vida social bajo el imperio de la ley.",
            },

            {
              type: "image",
              src: "https://cdn.slidesharecdn.com/ss_thumbnails/libertadcomoderecho-120227201718-phpapp02-thumbnail.jpg?width=640&height=640&fit=bounds",
              alt: "Ilustración: libertad como derecho",
              caption:
                "Representación visual del concepto de libertad como derecho (material de estudio, Sesión #3).",
            },

            {
              type: "paragraph",
              text: "Para aplicar el concepto en situaciones reales, conviene un método de calificación: (1) identificar todas las normas relevantes (generales y especiales) que inciden en el supuesto; (2) determinar si existe un mandato o una prohibición aplicable; (3) en su ausencia, ubicar la conducta en el espacio potestativo; (4) verificar si hay límites constitucionales o legales que modulan ese espacio (p. ej., protección de derechos de terceros, seguridad, salubridad); y (5) derivar las consecuencias jurídicas (permisos, deberes accesorios, cargas o sanciones). Obsérvese que el margen potestativo no es estático: puede ampliarse o restringirse por normas sectoriales o por situaciones funcionales —piénsese en deberes reforzados de quienes prestan servicios esenciales—. Así, la libertad se mantiene como eje, pero su ejercicio concreto exige análisis contextual, evitando tanto el maximalismo permisivo como el intervencionismo innecesario. El resultado es una práctica argumentativa disciplinada, que separa convicciones morales de calificaciones jurídicas verificables.",
            },

            {
              type: "accordion",
              header: "Reglas, límites y responsabilidad",
              open: false,
              text: "La libertad jurídica opera bajo reglas. Elegir en Derecho implica asumir efectos y responder por ellos. Los límites (derechos de terceros, orden público, bienes constitucionales) no niegan la libertad; la hacen compatible con la convivencia. La proporcionalidad evita que los límites se conviertan en negaciones encubiertas y obliga a justificar cualquier restricción con necesidad y adecuación al fin legítimo perseguido.",
            },

            {
              type: "paragraph",
              text: "Finalmente, la definición de libertad prepara el tránsito hacia dos grandes ejes del módulo: la acción y la sanción. Cuando una persona estima vulnerado su ámbito de autorización —por ejemplo, porque otra conducta ilícita le impide actuar—, la tutela no se busca por la fuerza propia, sino activando la jurisdicción mediante el derecho de acción. A la inversa, cuando el sujeto traspasa los límites de la licitud, el sistema activa respuestas coactivas con distinta intensidad. De este modo, la libertad no es un capítulo aislado, sino el nodo que articula licitud, responsabilidad, tutela y coacción. En el plano formativo, dominar esta definición permite distinguir con precisión entre lo permitido, lo ordenado y lo prohibido, argumentar con normas y principios, y justificar decisiones con criterios públicos, verificables y potencialmente universalizables en sede institucional.",
            },

            {
              type: "paragraph",
              text: "En síntesis, la libertad en sentido jurídico no es ‘hacer lo que se quiere’ sin más, ni tampoco una concesión graciosa del Estado. Es un estatuto de autorización que el ordenamiento reconoce y protege con técnicas de licitud y límites razonables, a fin de hacer compatibles las opciones individuales con las exigencias de la vida social. Por ello, estudiarla exige aprender a leer normas, identificar la clase de actos en juego y ponderar los efectos de las decisiones. Esta alfabetización jurídica evita equívocos, fortalece la argumentación y construye seguridad jurídica. Con esta base conceptual podremos, en los apartados siguientes, examinar la acción —como facultad para provocar la actividad jurisdiccional— y la sanción —como respuesta institucional frente a los ilícitos—, completando el mapa que conecta libertad, proceso y coacción en un Estado de Derecho.",
            },
          ],
        },
      ],
    },

    /* 12. Unidad principal */
    {
      id: "12",
      numbering: "Unidad 12",
      title: "Derecho de acción",
      content: [
        {
          type: "paragraph",
          text: "El derecho de acción es la facultad jurídica que permite a cualquier persona poner en marcha la actividad jurisdiccional del Estado para que un órgano imparcial se pronuncie sobre una pretensión. No se identifica con la autodefensa ni con la fuerza privada; por el contrario, supone desplazar el conflicto del plano de la imposición individual al terreno institucional de los tribunales. Esta concepción ubica a la acción como pieza cardinal del proceso: sin acción, la jurisdicción no se activa; sin jurisdicción, el derecho queda sin cauce de tutela. Históricamente, su tratamiento marcó un punto de quiebre en la ciencia procesal: dejó de verse como un mero “modo de existir” del derecho subjetivo para adquirir fisonomía propia. De este modo, la acción no garantiza de antemano la razón al actor; garantiza, ante todo, el pronunciamiento del juez sobre el fondo o en la medida en que se cumplan los presupuestos procesales pertinentes. Con ello se afirma un principio civilizatorio: los conflictos se resuelven por razones y conforme a derecho, no por la mera fuerza de las partes.",
        },

        {
          type: "paragraph",
          text: "La transición desde el régimen de autodefensa hacia la tutela estatal responde a una necesidad de justicia y paz social. Mientras la justicia por propia mano incentiva espirales de violencia y privilegia al más fuerte, el Estado asume el monopolio legítimo de la solución de controversias. La función jurisdiccional se define, entonces, como la aplicación de la ley al caso concreto por un tercero imparcial. En este marco, el derecho de acción opera como la llave de acceso: habilita al individuo para presentar su caso, articular una pretensión y obtener la intervención del órgano jurisdiccional. Así entendida, la acción es un derecho público subjetivo —se ejerce frente al Estado— que organiza el intercambio dialéctico entre partes en condiciones de igualdad procesal. El acento está en la racionalidad y publicidad de las decisiones, en la sujeción a reglas y en la posibilidad de control, premisas esenciales para la seguridad jurídica y la confianza ciudadana en la justicia.",
        },

        {
          type: "paragraph",
          text: "Una línea doctrinal describe la acción en sentido abstracto: el derecho subjetivo público a desencadenar la actividad jurisdiccional con independencia de que asista o no la razón al actor. En esta clave, la acción triunfa cuando el Estado produce una sentencia —incluso desestimatoria—, pues su objeto inmediato es provocar un pronunciamiento, no asegurar un contenido material favorable. La noción de pretensión aparece como acto procesal distinto: es la afirmación dirigida al juez contra el adversario para obtener tutela. La acción funciona como presupuesto de la pretensión, y el éxito material dependerá del derecho sustantivo, de la prueba y de los presupuestos procesales. Esta arquitectura separa con nitidez tres planos: (i) el derecho a activar la jurisdicción; (ii) el derecho a un proceso con garantías; y (iii) la suerte de la pretensión, que exige acreditación y subsunción normativa. La utilidad de la tesis abstracta reside en blindar el acceso a la justicia sin anticipar resultados.",
        },

        {
          type: "image",
          src: "https://derechoyeducacion.com/wp-content/uploads/2021/01/judge-5313542_640.jpg",
          alt: "Función jurisdiccional: juez aplicando la ley",
          caption:
            "La jurisdicción como respuesta institucional a los conflictos (Sesión #3).",
          text: "",
        },

        {
          type: "paragraph",
          text: "Otra corriente sitúa la acción en sentido concreto: no bastaría con el mero acceso; se reconoce un derecho a una tutela jurisdiccional efectiva, esto es, a una sentencia útil que resuelva la controversia según presupuestos jurídico-materiales. La distinción con el “derecho al proceso” es clave: este último garantiza una resolución sobre el fondo (o en su caso sobre una cuestión impeditiva); la tutela concreta, en cambio, se condiciona a la concurrencia de requisitos sustantivos que habiliten un pronunciamiento favorable. Esta perspectiva refuerza la orientación práctica del proceso y subraya que la justicia no se agota en el “decir el derecho”, sino en hacerlo útil para las partes. Desde aquí se entiende la centralidad de principios como efectividad, congruencia y motivación suficiente, así como de instituciones que encauzan la tutela (medidas cautelares, ejecución, recursos). En suma, la idea de tutela concreta enfatiza el puente entre proceso y satisfacción del derecho sustantivo.",
        },

        {
          type: "accordion",
          header: "Fundamentos y evolución de la acción",
          open: false,
          text: "La acción surge históricamente como respuesta a los límites de la autodefensa: sustituye la razón de la fuerza por la fuerza de la razón institucionalizada. Su naturaleza es pública, pues se ejerce frente al Estado y provoca su deber de juzgar. La evolución teórica separó acción y derecho subjetivo: ya no es ‘derecho en pie de guerra’, sino el poder de activar la jurisdicción. Esta separación permitió construir garantías de acceso y, a la vez, afinar los requisitos para la tutela útil, fortaleciendo la función pacificadora del proceso.",
        },

        {
          type: "paragraph",
          text: "Una tercera posición —atribuida a Chiovenda— concibe la acción como un derecho potestativo del individuo a decidir si somete su conflicto a la jurisdicción. La utilidad pedagógica de esta visión es que resalta la disponibilidad del instrumento procesal; sin embargo, la crítica advierte su insuficiencia para explicar la dimensión pública de la acción y su engranaje con el deber estatal de juzgar. Reducirla a potestad del actor invisibiliza la red de garantías y cargas que nacen para todas las partes —incluido el juez— una vez abierto el proceso. Desde una mirada contemporánea, la tesis potestativa puede operar como intuición inicial, pero conviene integrarla en un marco que reconozca: (i) el acceso como derecho público; (ii) la tutela como finalidad; y (iii) la responsabilidad procesal de quienes accionan sin fundamento, con herramientas para prevenir abusos y preservar la buena fe.",
        },

        {
          type: "paragraph",
          text: "La apertura de la acción crea la relación jurídico-procesal, el vínculo que une a actor y demandado entre sí y con el tribunal. De ella derivan deberes y potestades: el juzgador debe prestar actividad y resolver; el actor puede provocar la jurisdicción y asumir las consecuencias de su impulso; el demandado tiene derecho de defensa y la carga de comparecer. El proceso se estructura en etapas —demanda, contestación/defensa y sentencia— y se rige por principios como contradicción, igualdad, imparcialidad y motivación. Esta relación no es meramente formal: asegura que el debate sea público, ordenado y controlable, lo cual justifica socialmente el uso de la fuerza estatal para ejecutar lo resuelto. De ahí la importancia de distinguir acceso, proceso y tutela, y de calibrar remedios y sanciones procesales para garantizar que el cauce sirva a la justicia y no a la dilación.",
        },

        {
          type: "accordion",
          header: "Modelos de acción: abstracta, concreta y potestativa",
          open: false,
          text: "Acción abstracta: derecho a provocar la actividad jurisdiccional, que culmina con una sentencia cualquiera sea su contenido; protege el acceso. Acción concreta: derecho a una tutela útil, condicionada a presupuestos jurídico-materiales; enfatiza efectividad. Acción potestativa: destaca la disponibilidad del individuo para activar el proceso, pero requiere integrarse con la naturaleza pública del deber de juzgar y con límites frente al abuso.",
        },

        {
          type: "paragraph",
          text: "En la práctica, el operador jurídico debe articular un método: 1) identificar la vía procedimental y los presupuestos procesales; 2) delimitar la pretensión y su fundamento sustantivo; 3) verificar si se busca solo acceso (abstracto) o tutela útil (concreta), precavida por medidas y por la eventual ejecución; 4) activar garantías de contradicción y prueba; 5) asegurar que la sentencia sea motivada, congruente y ejecutable. Esta secuencia preserva el equilibrio entre forma y finalidad: ni ritualismo vacío, ni decisionismo utilitarista. Con este enfoque, el derecho de acción aparece como un eje que articula paz social, orden jurídico y realización de derechos. Preparará, además, el análisis de los límites y consecuencias: cuando el marco de licitud se quiebra, entran en juego la sanción y la coacción como respuesta institucional, completando el arco conceptual del módulo.",
        },

        {
          type: "accordion",
          header: "Relación procesal y práctica forense",
          open: false,
          text: "Abierta la acción, se constituye una relación triangular: juez, actor y demandado. Se activan cargas (comparecencia, prueba), garantías (defensa, contradicción) y deberes (resolver, acatar). La utilidad práctica exige pensar en términos de tutela: medidas cautelares oportunas, economía procesal y ejecución eficaz. El norte no es litigar por litigar, sino obtener una solución justa y útil, con respeto a las formas que protegen a todos los intervinientes.",
        },
      ],
      subthemes: [
        {
          id: "12.1",
          numbering: "12.1",
          title: "Régimen de autodefensa",
          content: [
            {
              type: "paragraph",
              text: "El llamado “régimen de autodefensa” remite a un estadio histórico en el que los conflictos entre particulares se resolvían predominantemente por la fuerza y no por razones institucionalizadas. En esa fase, la solución del litigio dependía de la capacidad de imponerse del más fuerte, lo que derivaba en ciclos de retaliación, inestabilidad y, con frecuencia, injusticia. La experiencia social muestra que la violencia privada no genera paz duradera ni certeza, sino un ambiente de temor que desincentiva la cooperación y el intercambio. Desde la perspectiva del derecho, este escenario resulta disfuncional por dos motivos: primero, porque desplaza la racionalidad normativa por una lógica de poder fáctico; segundo, porque carece de mecanismos de control y de rendición de cuentas. La autodefensa, así entendida, puede ofrecer soluciones inmediatas, pero sacrifica la igualdad de los contendientes y la previsibilidad de las consecuencias. Por ello, la superación del régimen de fuerza privada constituye un punto de inflexión en la historia jurídica: implica reconocer que la convivencia exige reglas generales, órganos imparciales y un procedimiento que garantice escuchar a las partes y decidir conforme a derecho, abriendo el camino hacia la jurisdicción estatal.",
            },
            {
              type: "paragraph",
              text: "La transición desde la autodefensa hacia la tutela estatal no es lineal ni uniforme, pero responde a una misma intuición: sustituir la arbitrariedad por un orden pacificador. Ese tránsito se articula a partir de dos decisiones políticas. La primera es el reconocimiento del monopolio legítimo de la fuerza por parte del Estado, de modo que la coerción solo se ejerza bajo reglas, con límites y con control. La segunda es la creación de una vía institucional para canalizar los conflictos: un proceso en el que un tercero imparcial aplica normas generales al caso concreto. Este viraje no niega toda forma de defensa privada —pues subsisten supuestos excepcionales, como la legítima defensa bajo estrictos requisitos—, pero sí la subordina a la racionalidad pública. Como consecuencia, el énfasis se desplaza desde “quién puede más” a “quién tiene razón conforme a derecho”. La función ordenadora de la jurisdicción radica, así, en transformar disputas potencialmente violentas en controversias argumentadas, con reglas de prueba, de contradicción y de motivación, para restaurar la paz social con un mínimo de violencia.",
            },
            {
              type: "accordion",
              header: "De la fuerza privada a la tutela pública",
              open: false,
              text: "La autodefensa privilegia la imposición física y la venganza; la tutela pública organiza la respuesta en torno a normas generales, un tercero imparcial y consecuencias previsibles. El monopolio estatal de la coerción no elimina toda violencia, pero la somete a reglas y control para legitimar su uso y reducir daños colaterales.",
            },
            {
              type: "paragraph",
              text: "Optar por una solución estatal a los conflictos tiene implicaciones estructurales. En primer lugar, crea un lenguaje común: los conceptos de pretensión, defensa, prueba y sentencia. En segundo lugar, establece tiempos y formas, que si bien pueden parecer onerosos, garantizan publicidad, contradicción y posibilidad de recurso. En tercer lugar, desplaza el centro de gravedad del conflicto hacia instituciones con obligaciones: el juez debe resolver; las partes, acatar lo resuelto. La autodefensa, en cambio, confunde la calidad de parte con la de ejecutor, con todos los riesgos que ello comporta. Desde un punto de vista de política jurídica, la tutela estatal disminuye costos sociales de la violencia, protege a sujetos en desventaja y permite que los desacuerdos se resuelvan con criterios que aspiran a la universalidad, en lugar de depender de coyunturas personales o de superioridad circunstancial.",
            },
            {
              type: "paragraph",
              text: "El abandono de la autodefensa se acompaña de principios que ordenan el uso de la fuerza pública. La legalidad requiere que toda restricción derive de norma previa; la proporcionalidad exige que la respuesta sea idónea, necesaria y equilibrada; la motivación obliga al juez a explicar por qué se adopta una decisión y no otra. Estos principios no son adornos retóricos: protegen la libertad de las personas frente al poder y dotan de legitimidad a la intervención estatal. Al mismo tiempo, implican responsabilidades para quienes acceden al sistema: actuar de buena fe, evitar abusos procesales y respetar las decisiones. En suma, la superación del régimen de autodefensa no solo pacifica, sino que democratiza el acceso a la justicia al sustituir el privilegio de la fuerza por el derecho a ser oído en condiciones de igualdad.",
            },
            {
              type: "accordion",
              header:
                "Excepciones y límites (legítima defensa, estado de necesidad)",
              open: false,
              text: "El orden jurídico reconoce supuestos excepcionales de defensa privada, pero los circunscribe a requisitos estrictos (agresión ilegítima, necesidad racional del medio empleado, falta de provocación suficiente, etc.). Estas figuras no revalidan la autodefensa como regla, sino que actúan como válvulas de seguridad frente a daños inminentes cuando la reacción estatal es materialmente imposible.",
            },
            {
              type: "paragraph",
              text: "En términos pedagógicos, comprender el régimen de autodefensa como antecedente histórico y conceptual de la jurisdicción clarifica por qué la acción procesal es indispensable. El derecho de acción surge exactamente para reemplazar la imposición privada por una solicitud institucional de tutela. A partir de aquí, el conflicto deja de definirse por la fuerza y se somete a un método racional de decisión, que exige formular una pretensión, permitir la defensa del adversario y culminar con una sentencia motivada. Esta reconfiguración no es trivial: reubica al individuo como titular de un derecho público frente al Estado, y al Estado como garante de paz social mediante la aplicación imparcial de la ley. La lección es nítida: donde antes se imponía la ley del más fuerte, ahora rigen procedimientos y principios que reconocen la igual dignidad de las partes y la supremacía de las razones sobre la violencia.",
            },
          ],
        },
        {
          id: "12.2",
          numbering: "12.2",
          title: "Función jurisdiccional",
          content: [
            {
              type: "paragraph",
              text: "La función jurisdiccional es la potestad-deber del Estado de aplicar el derecho al caso concreto para resolver controversias con fuerza de cosa juzgada. Su razón de ser es impedir la justicia por propia mano y encauzar los conflictos por vías racionales y públicas. El órgano jurisdiccional —independiente e imparcial— escucha a las partes, verifica los hechos mediante reglas de prueba y subsume esos hechos en normas jurídicas, produciendo una decisión motivada. La jurisdicción se distingue de la administración y de la legislación: no crea normas generales ni ejecuta políticas, sino que dice el derecho para el caso, con sujeción a procedimientos y garantías. Este marco asegura igualdad procesal, publicidad, contradicción y motivación, y permite la revisión mediante recursos. Desde el punto de vista sistémico, la jurisdicción legitima la coerción: solo a partir de la sentencia se habilita el uso de la fuerza para ejecutar lo decidido, cerrando el ciclo que sustituye la autodefensa por la tutela pública.",
            },
            {
              type: "paragraph",
              text: "En el centro de esta función aparece el juez como tercero imparcial. Su imparcialidad no es una cualidad subjetiva cualquiera, sino una exigencia institucional: garantiza que quien decide no sea parte interesada y que su criterio esté limitado por el derecho vigente. La independencia favorece que el juez no reciba instrucciones indebidas; la imparcialidad, que no esté sesgado por interés particular. La obligación de motivar sus decisiones, por su parte, lo compromete a justificar con razones públicamente verificables por qué escoge una solución normativa. Esta arquitectura produce un efecto pacificador: los litigantes aceptan el resultado —incluso el desfavorable— cuando perciben que el proceso ha sido justo y la resolución, razonada. Así, la jurisdicción no solo decide, sino que integra socialmente, pues ofrece un foro en el que las controversias se transforman en debates y las fuerzas en argumentos.",
            },
            {
              type: "accordion",
              header:
                "Elementos de la jurisdicción: órgano, proceso y decisión",
              open: false,
              text: "Órgano: juez independiente e imparcial. Proceso: cauce reglado con garantías (publicidad, contradicción, defensa, prueba). Decisión: sentencia motivada que aplica la norma al caso y produce cosa juzgada. La ejecución jurisdiccional cierra el ciclo, habilitando el uso legítimo de la fuerza para cumplir el fallo.",
            },
            {
              type: "image",
              src: "https://derechoyeducacion.com/wp-content/uploads/2021/01/judge-5313542_640.jpg",
              alt: "Función jurisdiccional: juez aplicando la ley",
              caption:
                "La jurisdicción como respuesta institucional a los conflictos.",
              text: "",
            },
            {
              type: "paragraph",
              text: "La acción conecta al ciudadano con la jurisdicción: habilita a presentar una pretensión ante el juez y a exigir una respuesta. En la dogmática procesal moderna, el estudio de la naturaleza de la acción marcó un punto de quiebre frente a concepciones antiguas. Durante buena parte del siglo XIX dominó una visión monista, que entendía la acción como simple fase combativa del derecho subjetivo material. A partir del debate pandectístico —emblemáticamente, la controversia entre Windscheid y Muther— se impuso la distinción dualista: derecho material y acción son categorías diversas. La acción es de naturaleza pública y se ejerce frente al Estado; el derecho sustantivo puede ser público o privado, y se hace valer mediante la pretensión. Esta separación permite garantizar el acceso a la justicia sin prejuzgar el fondo, y, al mismo tiempo, afinar los presupuestos para obtener tutela útil.",
            },
            {
              type: "accordion",
              header:
                "Garantías de la decisión: motivación, congruencia y control",
              open: false,
              text: "La motivación exige exponer las razones fácticas y jurídicas del fallo; la congruencia prohíbe resolver más allá o fuera de lo pedido; el control se ejerce mediante recursos u otras vías impugnativas. Estas garantías legitiman la sentencia y favorecen su acatamiento, incluso cuando el resultado es adverso para una de las partes.",
            },
            {
              type: "paragraph",
              text: "Desde una óptica práctica, la función jurisdiccional exige que las partes asuman cargas correlativas: alegar oportunamente, aportar prueba, observar la buena fe y respetar las formas procesales. Para el juez, el deber es resolver dentro de los plazos, con sujeción a las normas y a los hechos acreditados. El proceso, por su parte, ofrece herramientas para asegurar la efectividad de la tutela: medidas cautelares para evitar daños irreparables, ejecución para hacer realidad lo resuelto, y recursos para corregir o uniformar criterios. En conjunto, estos elementos hacen de la jurisdicción un dispositivo de civilización: transforma el conflicto en diálogo, produce decisiones justificadas y permite su cumplimiento con el menor uso posible de fuerza, realizando así el ideal de un orden jurídico que prefiere razones a violencias.",
            },
          ],
        },
        {
          id: "12.3",
          numbering: "12.3",
          title: "Acción como derecho abstracto",
          content: [
            {
              type: "paragraph",
              text: "La concepción de la acción como derecho abstracto sostiene que toda persona ostenta un derecho público subjetivo para poner en marcha la actividad jurisdiccional del Estado, con independencia de que le asista o no la razón en el fondo. Lo decisivo no es el éxito material de la pretensión, sino la posibilidad de obtener una respuesta jurisdiccional. En esta clave, la acción ‘triunfa’ cuando culmina con una sentencia, incluso si es desestimatoria, porque su objeto inmediato es el pronunciamiento motivado del órgano judicial. Este enfoque separa analíticamente tres planos: (i) el derecho de acceso a los tribunales (acción); (ii) el derecho al proceso con garantías (debido proceso); y (iii) la suerte de la pretensión sustantiva, que dependerá de la prueba y de la subsunción normativa. La utilidad de esta tesis radica en blindar el acceso a la justicia, evitando que se cierre la puerta por anticipar juicios sobre el fondo y permitiendo que la razón procesal —y no la fuerza privada— ordene la resolución de los conflictos.",
            },
            {
              type: "paragraph",
              text: "Caracterizar a la acción como derecho abstracto conlleva describir sus notas típicas. Primero, su naturaleza pública: es correlativa a un deber estatal de prestar jurisdicción, razón por la cual se ejerce frente al Estado y no directamente contra el adversario. Segundo, su relatividad: el Estado, a través de sus órganos jurisdiccionales, es el obligado específico a proveer la respuesta. Tercero, su abstracción: puede ejercitarse aun cuando el actor carezca finalmente de un derecho sustantivo que hacer valer, pues esa evaluación corresponde al proceso mismo. Lejos de incentivar la temeridad, este diseño protege a los justiciables de barreras de acceso y permite que sea el procedimiento, con sus reglas de prueba y contradicción, el que discrimine entre pretensiones fundadas e infundadas. El costo de abrir la puerta se compensa con salvaguardas contra el abuso, como la imposición de costas por mala fe o la responsabilidad por litigio temerario.",
            },
            {
              type: "accordion",
              header: "Acción vs. pretensión",
              open: false,
              text: "Acción: derecho público a provocar la actividad jurisdiccional; su objeto inmediato es el pronunciamiento del juez. Pretensión: afirmación concreta frente al adversario para obtener tutela; su éxito depende del derecho sustantivo y de la prueba. La primera garantiza acceso; la segunda, satisfacción condicionada a la acreditación.",
            },
            {
              type: "paragraph",
              text: "Distinguir acción y pretensión evita confusiones frecuentes. Si la acción se confundiera con el derecho material, el acceso al juez dependería de una verificación anticipada del fondo, lo que haría inviable la tutela jurisdiccional precisamente cuando más se necesita: ante la duda razonable. En cambio, reconocer la autonomía de la acción permite que el proceso sea el espacio para resolver la controversia, con igualdad de armas. La abstracción no significa gratuidad absoluta: la ley fija presupuestos procesales —competencia, capacidad, legitimación, interés— que condicionan el examen del fondo. Cumplidos esos presupuestos, el Estado debe pronunciarse. La respuesta negativa no equivale a negar el derecho de acción, sino a desestimar la pretensión sustantiva. Este equilibrio protege simultáneamente el acceso y la seriedad del proceso.",
            },
            {
              type: "paragraph",
              text: "En la práctica, concebir la acción como abstracta ilumina el diseño de vías de acceso amplias (acciones ordinarias y especiales), así como remedios para asegurar su efectividad, como las medidas cautelares. También respalda la existencia de acciones colectivas o de interés difuso, donde el interés individual puede resultar tenue, pero el interés público justifica activar la jurisdicción. A su vez, la abstracción convive con mecanismos de filtrado que evitan la saturación del sistema: requisitos de procedencia, tasas moderadas, sanciones a la temeridad y técnicas de gestión judicial. El objetivo no es cerrar el paso, sino ordenar el flujo de casos para que la tutela llegue a quien realmente la necesita. De nuevo, el foco está en el pronunciamiento motivado como garantía democrática y como sustituto institucional de la fuerza privada.",
            },
            {
              type: "accordion",
              header: "Notas características (público, relativo, abstracto)",
              open: false,
              text: "Público: se ejerce frente al Estado; Relativo: correlativo al deber del Poder Judicial; Abstracto: su ejercicio no anticipa el éxito de la pretensión. Este trípode sostiene el acceso a la justicia y permite que el proceso determine la verdad jurídica del caso.",
            },
            {
              type: "paragraph",
              text: "Finalmente, la tesis abstracta prepara dos desplazamientos analíticos. Por un lado, permite comprender la noción de “derecho concreto a la tutela”: una capa adicional que, sin negar el acceso, exige requisitos jurídico-materiales para una sentencia favorable. Por otro, obliga a diseñar salvaguardas contra la utilización abusiva de la acción, a fin de proteger el tiempo jurisdiccional y la buena fe procesal. Lejos de ser posturas irreconciliables, las concepciones abstracta y concreta funcionan en tensión productiva: la primera garantiza que nadie quede sin juez; la segunda, que la jurisdicción sirva para otorgar soluciones útiles. Ambas, correctamente entendidas, encarnan el mismo ideal: que la razón pública reemplace a la fuerza y que el derecho, por medio del proceso, pacifique la vida social con justicia y con reglas.",
            },
          ],
        },
        {
          id: "12.4",
          numbering: "12.4",
          title: "Derecho concreto a la tutela jurídica",
          content: [
            {
              type: "paragraph",
              text: "El derecho concreto a la tutela jurídica se define como la facultad de toda persona para obtener de los tribunales una resolución justa, útil y ejecutable que satisfaga su pretensión cuando concurren los presupuestos jurídico-materiales exigidos por el ordenamiento. A diferencia de la noción de acción en sentido abstracto —centrada en provocar un pronunciamiento cualquiera—, la tutela concreta apunta a una sentencia de contenido determinado que haga efectivo el derecho sustantivo alegado. Esta idea se distingue también del ‘derecho al proceso’, cuyo objeto es garantizar una sentencia sobre el fondo (o, en su caso, una decisión debidamente motivada sobre un impedimento procesal) siempre que se cumplan los presupuestos estrictamente procesales. La tutela concreta, por su parte, añade exigencias de tipo sustantivo y probatorio: exige que el actor acredite los hechos constitutivos, la aplicabilidad de la norma y la concurrencia de condiciones como interés, legitimación y ausencia de causas excluyentes. En suma, mientras la acción abstracta asegura el acceso, y el derecho al proceso, el debate ordenado, el derecho a la tutela concreta busca un resultado materialmente protector, sin que por ello se prescinda del debido proceso ni de los límites constitucionales que encauzan la actividad jurisdiccional.",
            },
            {
              type: "paragraph",
              text: "Comprender la arquitectura de la tutela concreta exige diferenciar con precisión sus elementos. Primero, su carácter de derecho público subjetivo: se ejerce frente al Estado, que asume la correlativa obligación de administrar justicia mediante decisiones motivadas y ejecutables. Segundo, su dependencia de presupuestos jurídico-materiales: la sentencia favorable no es un ‘premio’ por litigar, sino la consecuencia de la concurrencia de hechos, normas y principios que justifican la protección pretendida. Tercero, su orientación a la efectividad: la tutela concreta no se agota en una declaración, sino que debe poder convertirse en realidad a través de medidas cautelares oportunas, condenas adecuadas, mandatos claros y procedimientos de ejecución eficaces. Esta lógica impide confundir acceso con satisfacción: se reconoce el derecho a ser oído y a obtener una respuesta, pero la obtención de una resolución estimatoria depende de la solidez jurídico-material de la pretensión. La distinción preserva el equilibrio entre apertura democrática de los tribunales y rigor técnico para proteger la seriedad del sistema.",
            },
            {
              type: "accordion",
              header: "Acción abstracta, derecho al proceso y tutela concreta",
              open: false,
              text: "Acción abstracta: derecho a provocar la actividad jurisdiccional y obtener una sentencia, incluso desestimatoria. Derecho al proceso: garantía de una decisión sobre el fondo (o sobre impedimentos) condicionada a presupuestos procesales. Tutela concreta: derecho a una sentencia útil y de contenido determinado, supeditada a presupuestos jurídico-materiales y a la acreditación probatoria.",
            },
            {
              type: "paragraph",
              text: "La exigencia de presupuestos jurídico-materiales no opera como barrera arbitraria, sino como filtro racional que orienta la función jurisdiccional hacia soluciones correctas. Entre tales presupuestos destacan: la existencia de un derecho sustantivo o interés legítimo digno de tutela; la legitimación activa y pasiva para obrar; la suficiencia de la prueba para formar convicción; y la ausencia de causas excluyentes (p. ej., prescripción, cosa juzgada, falta de interés actual). La tutela concreta se traduce en estándares de motivación reforzada: cuanto mayor sea la intensidad de la injerencia ordenada por el juez —piénsese en medidas que limitan conductas o imponen prestaciones significativas—, mayor debe ser la calidad de la justificación. Así, el norte no es ‘sentenciar siempre a favor del actor’, sino ‘sentenciar conforme a derecho y de modo útil’, preservando el balance entre protección de derechos y seguridad jurídica de todos los involucrados.",
            },
            {
              type: "paragraph",
              text: "La noción de tutela concreta también explica la función de instrumentos como las medidas cautelares, la ejecución forzosa y los remedios de cumplimiento específico. Tales piezas procesales actúan como puentes entre la declaración judicial y la realidad, evitando que la justicia llegue tarde o devenga ilusoria. La tutela cautelar resguarda el resultado del proceso ante el peligro de daño irreparable; la ejecución convierte la sentencia en hechos; los declarativos con efectos constitutivos o de condena se diseñan para que la protección no sea meramente simbólica. Esta comprensión integral impide que el proceso derive en ritualismo, al tiempo que evita el decisionismo: la efectividad no es licencia para vulnerar garantías, sino objetivo regulado por reglas de necesidad, idoneidad y proporcionalidad. Con ello, la tutela concreta fortalece la confianza ciudadana en los tribunales y cumple la promesa de sustituir la fuerza privada por razones públicas verificables.",
            },
            {
              type: "accordion",
              header: "Presupuestos jurídico-materiales (ejemplos)",
              open: false,
              text: "Hechos constitutivos acreditados; norma aplicable clara y vigente; legitimación e interés para obrar; inexistencia de causas excluyentes (prescripción, cosa juzgada, falta de interés actual); compatibilidad con derechos de terceros y con el orden público; proporcionalidad de las medidas de tutela solicitadas.",
            },
            {
              type: "paragraph",
              text: "En definitiva, el derecho concreto a la tutela jurídica completa el arco conceptual del módulo: desde la libertad como autorización, pasando por la acción y el proceso, hasta la decisión eficaz que restablece el orden jurídico. La distinción entre acceso, proceso y tutela evita confusiones perniciosas: negar la tutela no es negar el derecho de acción, y concederla sin presupuestos debilita la legitimidad de la justicia. El sistema se sostiene sobre una doble fidelidad: a las garantías del contradictorio y a la verdad jurídica del caso. Solo así la jurisdicción puede ofrecer respuestas que transformen conflictos en soluciones con sentido normativo y social. Esta es la clave pedagógica: argumentar la pretensión con pruebas, normas y principios, y comprender que la efectividad no es un adorno, sino el criterio que demuestra que el Derecho, además de ser declarado, se realiza.",
            },
          ],
        },
        {
          id: "12.5",
          numbering: "12.5",
          title: "Acción como derecho potestativo",
          content: [
            {
              type: "paragraph",
              text: "La tesis de la acción como derecho potestativo —atribuida paradigmáticamente a Chiovenda— describe la acción como el poder del individuo para decidir libremente si somete un conflicto a la jurisdicción, activando así el aparato judicial del Estado. Bajo este prisma, la esencia radica en la disponibilidad del instrumento: el sujeto, sin deber previo de accionar, cuenta con la potestad de provocar la función jurisdiccional para que un tercero imparcial dirima la controversia. Esta caracterización tuvo valor didáctico al separar la esfera de la autodefensa de la esfera institucional, subrayando que nadie está obligado a litigar si no lo desea, pero que quien decide litigar puede exigir la actividad del juez. No obstante, en su formulación clásica resulta insuficiente para describir la complejidad del fenómeno: corre el riesgo de desdibujar la naturaleza pública del acceso a la justicia, el correlativo deber estatal de juzgar y la red de garantías y cargas que nacen con la apertura del proceso. Por ello, la doctrina contemporánea la asume como intuición útil, pero no autosuficiente.",
            },
            {
              type: "paragraph",
              text: "Un enfoque más robusto integra la noción potestativa en una estructura tripartita: (i) acceso (acción en sentido abstracto), (ii) proceso (debido proceso con garantías) y (iii) tutela efectiva (derecho concreto supeditado a presupuestos jurídico-materiales). La disponibilidad del individuo para activar la jurisdicción se reconoce, pero no agota el fenómeno: en cuanto se ejerce la potestad, emergen para todos —actor, demandado y juez— deberes correlativos. El actor asume cargas de afirmación, prueba y lealtad procesal; el demandado, el derecho de defensa y la carga de contradicción; el juez, la obligación de resolver conforme a derecho y de motivar su decisión. Este encuadre preserva lo aprovechable de la tesis (la libertad de accionar) y corrige sus déficits (su silencio sobre la dimensión pública y las garantías). Así, la acción deja de ser una simple opción privada para convertirse en un poder-deber insertado en instituciones que limitan la arbitrariedad y ordenan la solución de conflictos.",
            },
            {
              type: "accordion",
              header: "Tesis de Chiovenda (síntesis)",
              open: false,
              text: "La acción como poder del individuo para decidir si somete su conflicto a la jurisdicción del Estado. Ventaja: resalta la disponibilidad del instrumento procesal. Límite: reduce la acción a una opción privada, sin explicar suficientemente su naturaleza pública, las cargas y las garantías que la acompañan.",
            },
            {
              type: "paragraph",
              text: "Las críticas contemporáneas a la fórmula potestativa apuntan a su simplicidad conceptual. Al centrar el análisis en la decisión del actor, la tesis descuida la estructura relacional del proceso y la noción de bien público asociado a la correcta administración de justicia. Un sistema que conciba la acción solo como potestad individual podría desatender el diseño de salvaguardas contra el abuso (temeridad, fraudes procesales) y el necesario equilibrio entre acceso amplio y gestión eficiente de los recursos jurisdiccionales. En cambio, una visión integrada reconoce que el derecho a accionar convive con deberes de buena fe, cargas probatorias y responsabilidades por uso indebido del proceso. El remedio no es cerrar el acceso, sino combinar lo potestativo con filtros racionales: requisitos de procedencia, sanciones por mala fe, costas y herramientas de gestión judicial que prioricen la tutela de los casos más urgentes o gravosos.",
            },
            {
              type: "paragraph",
              text: "Desde la práctica, la utilidad de mantener un componente potestativo es evidente: permite que la persona evalúe estrategias, negocie, concilie o desista sin quedar atrapada en una lógica de litigio obligatorio. La potestad de accionar es, pues, un instrumento de libertad responsable. Pero su ejercicio no exonera de consecuencias: quien abre el proceso activa cargas para sí y para su contraparte, y compromete tiempo jurisdiccional que es un recurso escaso. Por eso, la disponibilidad convive con estándares de diligencia, veracidad y cooperación procesal. Integrada en el trípode acceso-proceso-tutela, la potestad de acción aporta flexibilidad sin sacrificar la legitimidad institucional de la justicia ni su capacidad de ofrecer resultados útiles y verificables para la comunidad.",
            },
            {
              type: "accordion",
              header: "Ajustes contemporáneos: de potestad a poder-deber",
              open: false,
              text: "La acción conserva un elemento de disponibilidad individual, pero su ejercicio activa deberes (lealtad, diligencia), garantías (defensa, contradicción) y responsabilidades (costas, sanciones por temeridad). La clave es articular lo potestativo con la naturaleza pública de la jurisdicción y con la finalidad de tutela efectiva.",
            },
            {
              type: "paragraph",
              text: "En conclusión, asumir la acción como derecho potestativo tiene valor pedagógico siempre que no se tome como una teoría total. Sirve para recordar que nadie está forzado a litigar; sin embargo, una vez que se litiga, la acción deja de ser un acto estrictamente individual para insertarse en una relación jurídico-procesal triangular con reglas, principios y fines públicos. Esta lectura compuesta evita extremos: ni privatiza en exceso la justicia, ni la burocratiza hasta volverla inaccesible. La medida justa reconoce la libertad de accionar, exige responsabilidad en su despliegue y orienta el proceso a la tutela efectiva del derecho material, preservando al mismo tiempo el equilibrio de las partes y la confianza social en la administración de justicia.",
            },
          ],
        },
        {
          id: "12.6",
          numbering: "12.6",
          title: "Relación jurídico procesal",
          content: [
            {
              type: "paragraph",
              text: "La relación jurídico-procesal es el vínculo que une a las partes entre sí y con el tribunal a partir del ejercicio de la acción. No es una metáfora: se trata de una auténtica relación jurídica, con sujetos determinados, contenido obligacional y consecuencias precisas. Su efecto cardinal es doble. Por un lado, obliga al tribunal a ejercer la función jurisdiccional y a dictar sentencia motivada; por el otro, impone a las partes el deber de sujetarse a lo resuelto una vez agotadas las vías de impugnación, habilitando la ejecución. Con ello, el proceso deja de ser un mero intercambio de alegatos y se convierte en la estructura institucional que transforma el conflicto en decisión pública, verificable y —de ser necesario— coactivamente cumplible. La relación no deriva de la voluntad unilateral del juez ni de la sola pretensión del actor, sino del conjunto de actos que abren el proceso y constituyen el contradictorio en condiciones de igualdad.",
            },
            {
              type: "paragraph",
              text: "La constitución de la relación activa una red de potestades, derechos y cargas. Para el actor, supone la facultad de provocar la jurisdicción, de articular pretensiones y de aportar prueba; a la vez, implica deberes de veracidad, lealtad y asunción de consecuencias —costas, responsabilidades por temeridad—. Para el demandado, comporta la carga de comparecer y el derecho de defensa, con posibilidad de contradecir hechos, oponer excepciones y proponer prueba. Para el juzgador, nace el deber de conducir el proceso con imparcialidad, resolver en tiempo y forma y motivar suficientemente su decisión; también ostenta poderes ordenatorios y coercitivos indispensables para depurar el debate y hacer efectiva la sentencia. Esta red muestra que el proceso es un espacio público con reglas simétricas, diseñado para que la razón prevalezca sobre la fuerza, preservando la libertad y la dignidad de las personas involucradas.",
            },
            {
              type: "accordion",
              header: "Estructura triangular y deberes correlativos",
              open: false,
              text: "Juez (deber de resolver y poderes ordenatorios), Actor (facultad de accionar y cargas de afirmación/prueba), Demandado (derecho de defensa y cargas de contradicción). La relación es pública y culmina con una sentencia ejecutable que vincula a todos los intervinientes.",
            },
            {
              type: "paragraph",
              text: "La relación se despliega en etapas típicas que ordenan el debate. En la DEMANDA, el actor fija el objeto del proceso mediante la pretensión y sus fundamentos de hecho y de derecho; define la legitimación, cuantifica cuando proceda y ofrece prueba. En la DEFENSA (o contestación), el demandado controvierte hechos, admite o niega, opone excepciones y eventualmente reconviene. La SENTENCIA cierra el ciclo mediante la subsunción de los hechos probados en las normas aplicables, con motivación y congruencia. Este trayecto asegura publicidad, contradicción y economía procesal, y habilita la revisión por recursos cuando existan vicios o agravios. No se trata de formalismo: la forma garantiza la libertad de las partes frente al poder y dota de legitimidad a la decisión, que podrá ejecutarse con el respaldo de la fuerza pública si no se cumple voluntariamente.",
            },
            {
              type: "paragraph",
              text: "Los efectos de la relación se proyectan más allá del fallo. La cosa juzgada otorga estabilidad al derecho al impedir que la misma controversia sea replanteada indefinidamente; los títulos ejecutivos permiten convertir la decisión en cumplimiento real; y las medidas coercitivas proporcionan herramientas para vencer la resistencia al acatamiento. Al mismo tiempo, la relación prevé salvaguardas frente a abusos: sanciones por mala fe, nulidades por violación de garantías, responsabilidades por obstrucción o fraude procesal. Así, la fuerza del Estado no opera de manera discrecional, sino como culminación de un procedimiento que ha garantizado a todos ser oídos y contradecir, reafirmando la primacía de la razón pública sobre la violencia privada.",
            },
            {
              type: "accordion",
              header: "Etapas del proceso y efectos",
              open: false,
              text: "Demanda: fija la pretensión y el objeto del litigio. Defensa: organiza la contradicción y protege el derecho del demandado. Sentencia: aplica el derecho al caso y produce cosa juzgada; habilita la ejecución. En todo el itinerario rigen publicidad, contradicción, imparcialidad y motivación.",
            },
            {
              type: "paragraph",
              text: "En términos pedagógicos, pensar el proceso como relación ayuda a interiorizar que cada decisión estratégica —qué pedir, qué probar, qué oponer— se toma dentro de un marco de reglas que asigna cargas y responsabilidades. El buen litigio no consiste en ‘sorprender’ al adversario, sino en convencer al juez con hechos probados y argumentos jurídicos. Por eso, el estudio de la relación jurídico-procesal completa el arco iniciado con la acción y la tutela: del acceso, pasamos al cauce; del cauce, al resultado; del resultado, a la ejecución. Esta secuencia cumple la promesa civilizatoria del Derecho: reemplazar la imposición privada por decisiones públicas motivadas, ejecutadas con el menor uso posible de fuerza y con el máximo de racionalidad justificable.",
            },
          ],
        },
      ],
    },

    /* 13. Unidad principal */
    {
      id: "13",
      numbering: "Unidad 13",
      title: "Concepto jurídico de persona",
      content: [
        {
          type: "paragraph",
          text: "En el lenguaje jurídico, ‘persona’ no es un concepto moral ni psicológico, sino una categoría normativa: el sujeto capaz de ser titular de derechos y contrayente de obligaciones. Esta definición tiene dos consecuencias fundamentales. Primero, permite distinguir entre personas físicas —seres humanos concretos— y personas jurídicas —entidades creadas por el ordenamiento—, ambas dotadas de personalidad para participar en la vida jurídica. Segundo, explica por qué la ‘personalidad’ funciona como llave de acceso al Derecho: sin personalidad no hay titularidad, y sin titularidad no hay posibilidad de reclamar ni de ser exigido. El estatuto personal, por tanto, no describe cualidades íntimas, sino posiciones jurídicas que el sistema reconoce y protege. A partir de aquí se articulan los ‘atributos de la personalidad’ (nombre, capacidad, domicilio, nacionalidad, patrimonio y estado civil), que operan como coordenadas de identificación y actuación. En conjunto, estos elementos hacen posible que el Derecho trate a los sujetos como portadores de posiciones jurídicas estables, asignando responsabilidades, derechos y cargas de manera organizada. Esta construcción distingue la persona como ‘sujeto’ del patrimonio como ‘conjunto de bienes’ y del mero hecho natural de existir, subrayando que lo decisivo en términos jurídicos es el reconocimiento institucional de la titularidad y de la aptitud para intervenir en relaciones normativamente estructuradas.",
        },

        {
          type: "paragraph",
          text: "Los atributos de la personalidad presentan rasgos comunes decisivos para la seguridad jurídica. Se califican como inherentes (derivan de la condición de persona), únicos (no se duplican en el mismo orden), inalienables (no son transferibles), imprescriptibles (no se adquieren ni se pierden por el tiempo), irrenunciables (no cabe renunciar válidamente a ellos) e inembargables (no pueden ser objeto de ejecución forzosa). Cada atributo cumple una función: el nombre individualiza; la capacidad define aptitudes; el domicilio fija el punto de conexión territorial para competencia y notificaciones; la nacionalidad determina el vínculo con uno o más Estados; el patrimonio identifica el sustrato económico-jurídico; el estado civil ordena la posición familiar con efectos de amplio espectro. Esta arquitectura evita que la identidad jurídica dependa de contingencias fácticas o de la voluntad de terceros, y asegura que toda persona —física o jurídica— sea ubicable, identificable y responsable dentro del sistema. A su vez, el régimen de atributos permite resolver colisiones entre ordenamientos (por ejemplo, conflicto de leyes en materia de domicilio o nacionalidad) y garantiza que los cambios relevantes (matrimonio, divorcio, cambio de nombre en los supuestos legales) sigan procedimientos públicos y controlables, protegiendo así tanto a la persona como a la comunidad.",
        },

        {
          type: "paragraph",
          text: "La persona física —también denominada natural— es todo ser humano susceptible de adquirir derechos y contraer obligaciones. Aquí conviene distinguir dos dimensiones de la capacidad: la de goce (o jurídica), que es general, imprescriptible e irrenunciable, y la de ejercicio, que se refiere a la aptitud concreta para realizar actos válidos por sí y puede estar limitada (menores de edad, personas sujetas a tutela o curatela, situaciones de discapacidad que requieren apoyos). Cuando la capacidad de ejercicio no es plena, el ordenamiento activa mecanismos de representación o asistencia para equilibrar protección y autonomía, evitando tanto la indefensión como la anulación de la personalidad. En algunos sistemas se reconocen situaciones jurídicas especiales (p. ej., el nasciturus), a las que se otorga tutela en la medida y con los efectos que establezca la ley. Lo esencial es que la condición de persona física abre de manera inmediata la titularidad de derechos fundamentales y la posibilidad de ser parte en relaciones jurídicas, en un marco de dignidad e igualdad que la legislación y la jurisprudencia van concretando en cada ámbito (civil, laboral, administrativo, penal).",
        },

        {
          type: "image",
          src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYoQBk3QQIbahkRyTFQvB2ZdyA0PGquCNdbrEUwJbjiiz6XfkLkolwNLt7bU4fYHX9fXSkFqboG2aqtqo_WMhnWMxwZ8nlypLRMbGQWQF9j9cXK3ED-Xsg7sd9V0odFxlroGh8bWrg-Y6t/s1600/sociedad.jpg",
          alt: "Representación social de la persona en el Derecho",
          caption:
            "Ilustración del material de estudio: ‘Concepto jurídico de persona’.",
          text: "",
        },

        {
          type: "paragraph",
          text: "La persona jurídica —o moral— es una creación del ordenamiento que agrupa voluntades y bienes para la consecución de un fin lícito común. No es un ‘ser humano colectivo’, sino un sujeto técnico al que la ley confiere personalidad para adquirir derechos y asumir obligaciones. Su capacidad de goce se encuentra delimitada por su objeto social y por las normas que regulan su tipo (asociación, sociedad, fundación, cooperativa, entidad pública, etc.). Su capacidad de ejercicio se despliega siempre mediante representación: actúan personas físicas a su nombre, con facultades orgánicas o mandatarias. Esta técnica permite concentrar recursos, distribuir riesgos, profesionalizar actividades y asegurar continuidad más allá de la vida de los socios o miembros. A cambio, exige transparencia en la identificación (denominación o razón social), localización (domicilio), nacionalidad (según constitución y sede), patrimonio separado y régimen de responsabilidad. La personalidad jurídica no es un ‘privilegio’ sin límites: puede levantarse el velo cuando se utiliza abusivamente para defraudar la ley o a terceros. En términos sistémicos, la figura optimiza la cooperación social y económica, pero siempre bajo la premisa de que el Derecho es quien la crea, regula y, llegado el caso, sanciona.",
        },

        {
          type: "accordion",
          header: "Nivel 1. Atributos de la personalidad: función y rasgos",
          open: false,
          text: "Los atributos —nombre, capacidad, domicilio, nacionalidad, patrimonio y estado civil— son las coordenadas que permiten identificar y operar jurídicamente con la persona. Comparten características: inherentes, únicos, inalienables, imprescriptibles, irrenunciables e inembargables. Cumplen finalidades de paz jurídica: hacen visible a la persona ante el sistema y previenen litigios sobre identidad, competencia y responsabilidad.",
        },

        {
          type: "paragraph",
          text: "La capacidad merece un examen más fino. La de goce es la aptitud para ser titular de derechos; nace con la persona física y se reconoce a la persona jurídica en la medida que su tipo y objeto social lo permitan. La de ejercicio, en cambio, es la posibilidad de realizar válidamente actos jurídicos; presupone discernimiento y libertad, y puede restringirse por edad, sentencia o situaciones que exijan apoyos. El Derecho contemporáneo tiende a sustituir esquemas de sustitución plena por modelos de apoyos y salvaguardas, procurando la mayor autonomía posible compatible con la protección. En el ámbito de las personas jurídicas, la capacidad de ejercicio se realiza a través de órganos y representantes, con deberes de lealtad, diligencia y rendición de cuentas. Esta doble clave —goce y ejercicio— evita confusiones frecuentes y orienta soluciones equilibradas cuando la persona (física o jurídica) necesita asistencia para actuar o cuando su objeto social exige controles reforzados por impacto en terceros o en el interés público.",
        },

        {
          type: "accordion",
          header:
            "Nivel 2. Capacidad de goce y de ejercicio (personas físicas y jurídicas)",
          open: false,
          text: "Goce: titularidad abstracta de derechos y obligaciones (es general en personas físicas; en personas jurídicas está limitada por el objeto y el tipo legal). Ejercicio: aptitud para realizar actos válidos (puede requerir representación o apoyos; en personas jurídicas siempre es representada). La clave es compatibilizar autonomía con tutela, y eficiencia organizativa con responsabilidad.",
        },

        {
          type: "paragraph",
          text: "La contraposición ‘persona física vs. persona jurídica’ no es de superioridad, sino de técnica. La primera expresa la dignidad humana y sus derechos fundamentales; la segunda, un instrumento para organizar fines comunes. Ambas comparten atributos (nombre/denominación, domicilio, nacionalidad, patrimonio) y requieren reglas claras para su identificación y actuación. El estado civil sólo corresponde a personas físicas, pero las personas jurídicas pueden estar sujetas a categorías funcionales análogas (con o sin fines de lucro, públicas o privadas), con efectos normativos relevantes. El patrimonio de la persona jurídica, además, está separado del de sus miembros, principio que permite la inversión y la continuidad, pero que puede ceder ante el abuso. El estudio del ‘concepto jurídico de persona’ prepara el análisis de sanción y coacción: sólo comprendiendo quién puede ser titular y obligado tiene sentido discutir quién responde, cómo se sanciona y con qué medidas se ejecuta. En la práctica forense, dominar estas distinciones mejora la argumentación, previene nulidades y facilita soluciones justas y eficaces.",
        },

        {
          type: "accordion",
          header:
            "Nivel 3. Persona física vs. persona jurídica: simetrías y diferencias",
          open: false,
          text: "Simetrías: ambas son sujetos de derechos y obligaciones, con atributos que permiten su identificación. Diferencias: la persona física posee estado civil; la persona jurídica actúa por representación y su capacidad está ceñida al objeto social. El patrimonio es separado y puede justificar el levantamiento del velo ante el abuso. La finalidad de la categoría siempre es funcional: ordenar responsabilidades y viabilizar la vida jurídica.",
        },
      ],
      subthemes: [
        {
          id: "13.1",
          numbering: "13.1",
          title: "Definición y atributos de la personalidad",
          content: [
            {
              type: "paragraph",
              text: "En sentido jurídico, ‘persona’ no es una noción psicológica ni moral, sino el sujeto al que el ordenamiento reconoce capacidad para ser titular de derechos y asumir obligaciones. Esta construcción permite que la vida social sea gobernable: al fijar quién puede reclamar y quién puede ser exigido, se vuelven previsibles las interacciones y la asignación de responsabilidades. Sobre esta base, el sistema distingue dos grandes clases: personas físicas (seres humanos) y personas jurídicas (entes creados por la ley para fines lícitos). La personalidad es, en rigor, la ‘llave de acceso’ al Derecho: sin personalidad no hay titularidad ni posibilidad de actuación válida. A partir de ese estatuto se activan los atributos —nombre o denominación, capacidad, domicilio, nacionalidad, patrimonio y, en personas físicas, estado civil— que individualizan, localizan, conectan con un Estado, vinculan a un patrimonio y sitúan familiarmente al sujeto. Así, la categoría ‘persona’ funciona como el armazón técnico que vuelve operativa la igualdad ante la ley y que evita que los vínculos jurídicos dependan de rasgos biológicos, costumbres o fuerzas privadas.",
            },
            {
              type: "paragraph",
              text: "Los atributos presentan rasgos comunes que garantizan seguridad jurídica: son inherentes (derivan del estatuto personal), únicos (no se duplican en el mismo orden), inalienables (fuera del comercio), imprescriptibles (no se adquieren ni se pierden por el tiempo), irrenunciables (no cabe renunciar válidamente) e inembargables (no son objeto de ejecución forzosa). Cada atributo cumple una función sistémica: el nombre individualiza; la capacidad delimita aptitudes (de goce y de ejercicio); el domicilio fija la competencia y la notificación; la nacionalidad vincula con uno o más Estados; el patrimonio identifica el sustrato económico-jurídico; el estado civil organiza la posición de familia. Estas coordenadas estabilizan identidades, facilitan la prueba y reducen disputas sobre quién es quién, dónde debe responder y bajo qué ley. En suma, los atributos no son etiquetas, sino herramientas de orden público que hacen posible aplicar normas de modo igualitario y previsible.",
            },
            {
              type: "accordion",
              header: "Cuadro operativo de atributos",
              open: false,
              text: "Nombre/denominación (identificación); Capacidad (goce/ejercicio); Domicilio (competencia y notificación); Nacionalidad (vínculo estatal); Patrimonio (sustrato económico-jurídico); Estado civil (situación familiar). Rasgos: inherentes, únicos, inalienables, imprescriptibles, irrenunciables e inembargables.",
            },
            {
              type: "paragraph",
              text: "La capacidad exige un fino deslinde: la de goce (o jurídica) es la aptitud para ser titular de derechos y asumir obligaciones; en la persona física es general y se reconoce desde su condición humana; en la persona jurídica se limita por su tipo legal y su objeto social. La capacidad de ejercicio, en cambio, es la aptitud para realizar actos válidos por sí; puede requerir apoyos o representación (menores, personas con discapacidad conforme a esquemas de apoyos y salvaguardas) y, en personas jurídicas, siempre se despliega por medio de órganos o representantes. Este diseño compatibiliza autonomía con protección, evitando que la vulnerabilidad anule la personalidad o que la representación derive en abuso. El hilo conductor es claro: maximizar la agencia de la persona sin sacrificar la seguridad de terceros ni el interés público.",
            },
            {
              type: "image",
              src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYoQBk3QQIbahkRyTFQvB2ZdyA0PGquCNdbrEUwJbjiiz6XfkLkolwNLt7bU4fYHX9fXSkFqboG2aqtqo_WMhnWMxwZ8nlypLRMbGQWQF9j9cXK3ED-Xsg7sd9V0odFxlroGh8bWrg-Y6t/s1600/sociedad.jpg",
              alt: "Ilustración: concepto jurídico de persona",
              caption: "Representación visual del tema (Sesión #3).",
              text: "",
            },
            {
              type: "paragraph",
              text: "Domicilio y nacionalidad operan como ejes de conexión. El domicilio —real, legal o convencional según el régimen— determina competencia territorial, lugar de cumplimiento y punto de notificación. La nacionalidad expresa un vínculo jurídico-político con uno o varios Estados, con efectos en derechos y deberes públicos. El patrimonio, por su parte, agrega coherencia económica al sujeto: delimita la masa sobre la que recaen responsabilidades y desde la cual se ejercen derechos. En la persona jurídica, el patrimonio separado legitima la inversión y la continuidad; en la persona física, protege la esfera económica individual. Finalmente, el estado civil —propio de la persona humana— proyecta efectos en alimentos, sucesiones, régimen patrimonial del matrimonio, filiación y apellidos, entre otros.",
            },
            {
              type: "paragraph",
              text: "La utilidad pedagógica de los atributos está en su aplicación práctica. Un conflicto sobre nombre y cambio de identidad; la determinación del domicilio para la competencia; la discusión sobre nacionalidad múltiple; la responsabilidad patrimonial limitada en una sociedad; o las consecuencias del estado civil en herencia: todos estos casos muestran que los atributos no son teoría decorativa, sino la gramática diaria del Derecho. Por eso, su estudio exige vincular conceptos con pruebas y procedimientos, evitando reducciones moralistas o meramente sociológicas. La clave profesional es describir con precisión el atributo en juego, sus rasgos y sus efectos, y argumentar con base en normas de orden público.",
            },
            {
              type: "accordion",
              header: "Rasgos comunes y finalidad",
              open: false,
              text: "Los atributos son notas de orden público que individualizan, conectan territorialmente, vinculan con un Estado y proyectan responsabilidad patrimonial. Su finalidad: garantizar certeza, igualdad y previsibilidad en la asignación de derechos, deberes y cargas.",
            },
            {
              type: "paragraph",
              text: "Con esta arquitectura, el estudio avanza en dos direcciones: la persona física —titular inmediata de derechos fundamentales y con estado civil— y la persona jurídica —instrumento técnico para fines comunes—. Ambas comparten atributos, pero los despliegan de modo diferente (representación orgánica en entes colectivos, apoyos en supuestos de limitación de ejercicio, separación patrimonial). Este mapa conceptual permitirá, en las siguientes secciones, analizar cada categoría con ejemplos y criterios de calificación, cerrando luego con las principales tesis doctrinales sobre la noción de persona.",
            },
          ],
        },
        {
          id: "13.2",
          numbering: "13.2",
          title: "La persona física",
          content: [
            {
              type: "paragraph",
              text: "La persona física —o natural— es el ser humano reconocido por el ordenamiento como sujeto de derechos y obligaciones. Históricamente, su conceptualización jurídica se remonta al Derecho romano y ha evolucionado hacia una noción universalista que conecta dignidad, igualdad y titularidad. En términos etimológicos, ‘persona’ alude a la máscara (per-sonare) que amplificaba la voz en el teatro antiguo: una metáfora útil para comprender que el Derecho ‘viste’ al ser humano con un estatuto técnico que lo hace visible al sistema, sin reducirlo a su biología. Hoy, la regla es clara: por el solo hecho de existir, toda persona física posee capacidad de goce; la capacidad de ejercicio, en cambio, puede requerir apoyos o representación según edad o condiciones particulares, siempre bajo estándares que maximicen la autonomía compatible con la protección.",
            },
            {
              type: "paragraph",
              text: "La personalidad habilita a la persona física para celebrar actos jurídicos, ser parte en procesos, contraer obligaciones y reclamar derechos. La distinción capacidad de goce/ejercicio evita confundir titularidad con aptitud para actuar por sí: un menor goza de derechos, pero precisa representación para la mayoría de los actos; una persona con discapacidad puede requerir apoyos específicos, diseñados caso por caso. El Derecho contemporáneo se mueve desde el paradigma sustitutivo —interdicciones totales— hacia modelos de apoyos y salvaguardas, con controles judiciales, rendición de cuentas y revisiones periódicas. La meta es compatibilizar bienestar y agencia personal, protegiendo a la vez a terceros y al interés público.",
            },
            {
              type: "accordion",
              header: "Capacidad: goce vs. ejercicio",
              open: false,
              text: "Capacidad de goce: titularidad abstracta e imprescriptible de derechos/obligaciones. Capacidad de ejercicio: aptitud para actuar válidamente (puede requerir representación o apoyos). Clave: maximizar autonomía con protección y responsabilidad.",
            },
            {
              type: "paragraph",
              text: "El estatuto de persona física también se proyecta sobre identidad (nombre y apellidos), domicilio, nacionalidad y estado civil. El nombre individualiza; su cambio sigue procedimientos legales que tutelan seguridad y no discriminación. El domicilio fija competencia y notificación; admite modalidades (real, legal, convencional) con efectos prácticos notables. La nacionalidad vincula políticamente y habilita derechos públicos; su pluralidad requiere reglas de conflicto y cooperación entre Estados. El estado civil ordena la posición familiar y crea efectos en alimentos, sucesiones, apellidos y régimen matrimonial, entre otros. Estas coordenadas no son accesorias: definen jurisdicción, cargas probatorias y remedios, y previenen fraudes o indefensiones.",
            },
            {
              type: "paragraph",
              text: "Ciertas situaciones merecen mención especial. El nasciturus suele recibir tutela diferenciada conforme a la ley, con efectos limitados y condicionados; el fenómeno migratorio exige tratamientos que articulen derechos humanos y potestades estatales; y las tecnologías de la identidad (biometría, identidad digital) obligan a repensar garantías de privacidad y exactitud registral. En la práctica forense, estudiar persona física es aprender a operar con pruebas de identidad, certificados de estado civil, constancias de domicilio y nacionalidad, y a articular medidas que aseguren comprensión y voluntad en contratos y procesos.",
            },
            {
              type: "accordion",
              header: "Apoyos y salvaguardas",
              open: false,
              text: "Sistemas de apoyos personalizados; revisión periódica; transparencia y rendición de cuentas; preferencia por medidas menos restrictivas; participación efectiva de la persona en decisiones que le afectan.",
            },
            {
              type: "paragraph",
              text: "Finalmente, comprender la persona física como sujeto de derechos y obligaciones evita dos errores: tratar a la biografía como si fuera norma —reduccionismo sociológico— o, a la inversa, ignorar contextos que justifican apoyos —formalismo vacío—. El estándar profesional exige describir con precisión el atributo comprometido, identificar la norma aplicable, valorar evidencia de identidad y capacidad, y proponer remedios proporcionados. Este método asegura que la igualdad ante la ley se traduzca en soluciones concretas y comprobables, honrando la dignidad de la persona y la seguridad de terceros.",
            },
          ],
        },
        {
          id: "13.3",
          numbering: "13.3",
          title: "La persona jurídica (moral)",
          content: [
            {
              type: "paragraph",
              text: "La persona jurídica —o moral— es un ente creado por el ordenamiento para la consecución de fines lícitos comunes. No es un ‘humano colectivo’, sino un sujeto técnico al que la ley confiere personalidad para adquirir derechos y contraer obligaciones. Su capacidad de goce está delimitada por el tipo legal (asociación, sociedad, fundación, cooperativa, ente público, etc.) y por su objeto social; su capacidad de ejercicio siempre se despliega por medio de órganos o representantes (administradores, apoderados), con deberes de lealtad y diligencia. Esta técnica permite acumular capital, separar patrimonios, distribuir riesgos, profesionalizar la gestión y asegurar continuidad temporal más allá de la vida de miembros o socios. A cambio, exige transparencia (denominación/razón social), localización (domicilio), nacionalidad (conforme a constitución y sede efectiva), patrimonio separado y régimen de responsabilidad.",
            },
            {
              type: "paragraph",
              text: "La separación patrimonial cumple una función decisiva: estimular la cooperación económica y social sin exponer ilimitadamente el patrimonio de quienes integran la entidad. De ahí que, en principio, las deudas de la persona jurídica se satisfagan con su propio patrimonio. No obstante, el ordenamiento prevé correctivos frente al abuso, como el levantamiento del velo corporativo cuando la forma se utiliza para defraudar la ley o a terceros. En paralelo, la representación orgánica garantiza que los actos de los órganos —dentro de su competencia— vinculen a la entidad frente a terceros de buena fe. Este equilibrio, entre facilidades para la organización y controles para la probidad, es el corazón del régimen de personas jurídicas.",
            },
            {
              type: "accordion",
              header: "Elementos estructurales",
              open: false,
              text: "Acto constitutivo y registro; objeto social lícito y determinado; órganos de gobierno y administración; patrimonio separado; reglas de representación; responsabilidad y, en su caso, levantamiento del velo ante el abuso.",
            },
            {
              type: "paragraph",
              text: "Atributos en clave organizativa. La denominación o razón social identifica e individualiza a la entidad; el domicilio fija competencia, fiscalidad y notificaciones; la nacionalidad se determina por criterios de constitución y sede; el patrimonio se organiza en función del objeto y de la responsabilidad; y, aunque no tiene ‘estado civil’, sí posee categorías funcionales (con o sin fines de lucro, públicas o privadas) con efectos normativos. La capacidad de goce se interpreta de modo finalista: la entidad puede realizar actos que se encuadren razonablemente en sus fines; desvíos graves pueden acarrear nulidad, responsabilidad de administradores o intervención estatal.",
            },
            {
              type: "paragraph",
              text: "En la práctica, operar con personas jurídicas exige pericia documental y de gobierno corporativo: estatutos claros, libros y registros, poderes y límites, políticas de conflictos de interés, controles internos y auditorías. Los litigios típicos versan sobre representación aparente, abuso de la forma, responsabilidad de administradores, nulidades de asambleas y ejecución contra bienes de la entidad. La clave profesional es diagnosticar si el problema reside en el acto (vicio formal o de objeto), en el órgano (exceso de facultades) o en la estructura (fraude, confusión patrimonial) y seleccionar el remedio proporcional.",
            },
            {
              type: "accordion",
              header: "Responsabilidad y controles",
              open: false,
              text: "Separación patrimonial como regla; responsabilidad de administradores por dolo o culpa grave; nulidad por actos ultra vires; levantamiento del velo ante fraude o confusión patrimonial; publicidad registral y auditoría como garantías.",
            },
            {
              type: "paragraph",
              text: "El valor de la persona jurídica está en su funcionalidad: hacer posible proyectos colectivos bajo reglas que protegen a miembros y terceros. Bien gobernada, potencia la cooperación; mal usada, deviene instrumento de abuso. Por eso, el derecho societario y de asociaciones combina libertad de organización con deberes de transparencia y responsabilidad. En síntesis, la persona jurídica es una herramienta de civilización: amplía capacidades humanas, canaliza riesgos y somete el poder organizativo a controles públicos y privados, asegurando que la eficacia no sacrifique la legalidad.",
            },
          ],
        },
        {
          id: "13.4",
          numbering: "13.4",
          title: "Tesis sobre la persona",
          content: [
            {
              type: "paragraph",
              text: "Las teorías sobre la ‘persona’ explican cómo y por qué el Derecho reconoce sujetos. En el plano de la persona física, el consenso contemporáneo es que todo ser humano es persona y titular de derechos por el solo hecho de existir. La discusión se concentra en el alcance de la capacidad de ejercicio y en los apoyos que maximizan la autonomía compatible con la protección. En el plano de la persona jurídica, el debate clásico gira en torno a si la personalidad es una ficción útil o la expresión de una realidad social organizada. Ambas sensibilidades —la de la técnica normativa y la de la sociología del poder colectivo— conviven hoy en fórmulas mixtas que privilegian la funcionalidad: la personalidad se reconoce para fines lícitos, con controles frente al abuso y con transparencia hacia terceros.",
            },
            {
              type: "paragraph",
              text: "La ‘teoría de la ficción’ sostiene que solo los seres humanos son realidades personales, mientras que las personas jurídicas son artificios que el legislador crea para facilitar la vida económica y social. Su virtud es recordar que el Derecho no debe idolatrar formas vacías; su límite, desconocer la densidad organizativa y la necesidad de reglas especiales. La ‘teoría de la realidad’ enfatiza, por su parte, que los entes colectivos existen de hecho (organización, fines, órganos) y que el Derecho hace bien en reconocerles personalidad para canalizar responsabilidades y derechos. Su riesgo es sobrerrealizar la entidad y olvidar que la legitimidad última proviene del marco legal. La síntesis razonable: el reconocimiento jurídico es instrumental, pero debe dialogar con la realidad organizativa.",
            },
            {
              type: "accordion",
              header: "Tres enfoques didácticos",
              open: false,
              text: "Ficción (énfasis en técnica normativa), Realidad (énfasis en organización social), Funcionalismo (énfasis en fines y controles). Objetivo común: asegurar que la personalidad sirva a la justicia, la cooperación y la responsabilidad.",
            },
            {
              type: "paragraph",
              text: "En persona física, las tesis orbitan en torno a dignidad, igualdad y autonomía. Se debate sobre estatutos especiales (nasciturus), identidad de género y cambios registrales, y sobre el alcance de apoyos a la capacidad de ejercicio. La clave es no confundir convicciones morales con calificaciones jurídicas sin una mediación normativa clara. Los atributos actúan como puentes entre la biografía y el sistema, asegurando que el reconocimiento no dependa de caprichos o fuerzas privadas, sino de reglas verificables y accesibles.",
            },
            {
              type: "paragraph",
              text: "En persona jurídica, las tesis iluminan problemas de gobierno corporativo y responsabilidad. ¿La entidad responde por actos de sus órganos aunque los miembros individuales no hayan participado? Sí, dentro de su objeto y representación; la separación patrimonial lo justifica. ¿Cuándo levantar el velo? Cuando la forma se use para defraudar o burlar la ley. ¿Qué lugar ocupa la transparencia registral? Es la condición de posibilidad para que terceros confíen sin inspeccionar internamente la organización. En todas estas cuestiones, el enfoque funcional permite calibrar remedios sin sacrificar la seguridad de los intercambios.",
            },
            {
              type: "accordion",
              header: "Criterios de decisión práctica",
              open: false,
              text: "Identificar el problema (acto, órgano o estructura); verificar el atributo comprometido; contrastar con el objeto social y la representación; evaluar riesgos para terceros; escoger remedios proporcionales (nulidad, responsabilidad de administradores, levantamiento del velo).",
            },
            {
              type: "paragraph",
              text: "El estudio de las tesis sobre la persona cumple una función estratégica en la formación jurídica: dota de un marco crítico para elegir argumentos coherentes con los fines del sistema. La recomendación profesional es sobria: elaboremos diagnósticos a partir de hechos probados, apliquemos categorías con mesura y justifiquemos con normas y principios. La teoría no es un fin estético; es la brújula que alinea reconocimiento, responsabilidad y efectividad, para que la categoría ‘persona’ —física o jurídica— mantenga su promesa civilizatoria: organizar la libertad en reglas y la cooperación en instituciones.",
            },
          ],
        },
      ],
    },

    /* 14. Unidad principal */
    {
      id: "14",
      numbering: "Unidad 14",
      title: "Sanción y coacción",
      content: [
        {
          type: "paragraph",
          text: "Hablar de sanción y coacción es abordar el nervio que dota de eficacia al orden jurídico. El Derecho no se agota en prescribir conductas; requiere instrumentos para reaccionar frente a su incumplimiento (sanción) y para hacer cumplir sus decisiones (coacción). La sanción es la consecuencia jurídica prevista ante la infracción: organiza respuestas que van desde la reparación civil hasta la pena estatal, pasando por medidas administrativas, disciplinarias y procesales. La coacción, por su parte, es el empleo legítimo de la fuerza pública para ejecutar lo resuelto o para prevenir daños graves, con arreglo a reglas y controles. Esta arquitectura no legitima la violencia por sí misma: la somete a legalidad, motivación y proporcionalidad, precisamente para proteger la libertad y la igualdad. En un Estado de Derecho, sanción y coacción son técnicas de tutela, no atajos autoritarios. Por eso, su estudio exige separar con rigor fines (proteger bienes y derechos) y medios (reacciones y ejecuciones reguladas), y comprender que toda intervención estatal debe ser excepcional, necesaria y justificada. Con estas premisas, la unidad explica los conceptos, sus principios limitadores y su tipología, preparando el terreno para comprender la pena y la clasificación de Carnelutti.",
        },

        {
          type: "paragraph",
          text: "La sanción es una consecuencia normativa: no es venganza ni mero castigo, sino una respuesta institucional que repara, restituye, disciplina o previene. Se activa cuando concurren tipicidad (conducta encuadrable en una norma válida), antijuridicidad (contradicción con el ordenamiento) y, en su caso, culpabilidad o imputación subjetiva. Su legitimidad depende de principios que la acotan: legalidad y reserva (nulla poena, nulla sancio sine lege), irretroactividad de lo desfavorable, debido proceso y motivación reforzada. La proporcionalidad funciona como test de tres pasos: idoneidad (la respuesta sirve al fin), necesidad (no hay otra menos gravosa igual de eficaz) y proporcionalidad en sentido estricto (balance entre beneficio público y sacrificio individual). En clave funcional, las sanciones persiguen finalidades simultáneas y en tensión: retribuir la infracción, prevenir nuevas lesiones (general y especialmente) y, en lo posible, rehabilitar. Ninguna finalidad justifica desbordar los límites constitucionales. Por eso, la ingeniería sancionatoria moderna privilegia diseños que desincentiven la reincidencia, reparen a la víctima y minimicen daños colaterales, sin renunciar a la firmeza frente a conductas especialmente lesivas.",
        },

        {
          type: "accordion",
          header: "Nivel 1. Conceptos base: sanción vs. coacción",
          open: false,
          text: "Sanción: respuesta jurídica ante la infracción (reparación, multa, inhabilitación, pena). Coacción: empleo legítimo y reglado de la fuerza estatal para ejecutar decisiones o prevenir daños. La primera califica y reacciona; la segunda asegura eficacia. Ambas exigen legalidad, motivación y proporcionalidad.",
        },

        {
          type: "paragraph",
          text: "La coacción se distingue claramente de la violencia privada. En el plano privado, la coacción vicia el consentimiento y deslegitima actos y declaraciones (nulidad o ineficacia). En el plano público, el Estado detenta el monopolio legítimo del uso de la fuerza, pero solo bajo estrictas condiciones de legalidad, control y rendición de cuentas. La coacción judicial aparece en la ejecución de sentencias (embargos, lanzamientos, apremios) y en medidas cautelares para asegurar resultados útiles; la coacción administrativa opera en policía, inspecciones y clausuras, con control jurisdiccional. La clave es su carácter de último recurso: debe verificarse que la autoridad actuó conforme a competencia, respetó el procedimiento y justificó la necesidad. Esta racionalización evita el decisionismo y garantiza que el poder coactivo sirva a la tutela de derechos, no a su erosión. Así se reconcilian libertad y autoridad: la primera como regla; la segunda, como técnica de protección en supuestos definidos.",
        },

        {
          type: "image",
          src: "https://significado.com/wp-content/uploads/derecho/Coercibilidad-2.jpg",
          alt: "Coercibilidad del Derecho",
          caption:
            "La fuerza legítima del Estado como garantía de eficacia y tutela.",
          text: "",
        },

        {
          type: "paragraph",
          text: "Las teorías sobre la pena ilustran el esfuerzo por justificar racionalmente la respuesta más intensa del sistema. La visión retributiva centra la pena en la culpabilidad por el hecho cometido; las teorías preventivas generales buscan disuadir a la comunidad; las preventivas especiales apuntan a evitar la reincidencia a través de tratamiento, inhabilitaciones o restricciones selectivas; los enfoques resocializadores ponen el acento en la reinserción y en la disminución de riesgos. En la práctica, los ordenamientos combinan fines, pero sometidos a límites: dignidad humana, humanidad de las penas, prohibición de tratos crueles, culpabilidad personal, non bis in idem, y estricta proporcionalidad entre injusto y sanción. La pena, entonces, no es licencia para dañar; es restricción de derechos calibrada y sometida a control. En civil y administrativo, la lógica es análoga: las medidas deben ser idóneas, necesarias y razonables, con preferencia por remedios que reparen a la víctima y reconduzcan el cumplimiento.",
        },

        {
          type: "paragraph",
          text: "La tipología sancionatoria muestra que no existe un único ‘derecho sancionador’. Conviven el penal (penas y medidas de seguridad), el civil (resarcimiento y sanciones procesales), el administrativo sancionador (multas, clausuras, inhabilitaciones), el disciplinario (régimen de servidores y profesionales), los remedios premiales (reducciones por colaboración eficaz) y las sanciones sociales o económicas en ámbitos supranacionales. Cada subsistema tiene reglas propias, pero comparten principios comunes: legalidad, tipicidad, presunción de inocencia, contradicción, motivación y control jurisdiccional. Entender las coordenadas comunes evita traslaciones indebidas (p. ej., estándares penales aplicados mecánicamente a procedimientos administrativos) y favorece diseños proporcionados a los bienes jurídicos involucrados. Esta cartografía prepara el estudio de la ‘pena’ como categoría específica y de las clasificaciones doctrinales que sistematizan las formas de reacción del orden.",
        },

        {
          type: "accordion",
          header: "Nivel 2. Principios de limitación",
          open: false,
          text: "Legalidad y tipicidad (norma previa y precisa); culpabilidad (nadie responde sin responsabilidad personal); proporcionalidad (idoneidad, necesidad y balance); humanidad de las sanciones; non bis in idem (prohibición de doble sanción por el mismo hecho); motivación y control.",
        },

        {
          type: "paragraph",
          text: "La eficacia sancionatoria depende del proceso y de la ejecución. El debido proceso asegura que la calificación del hecho y la individualización de la sanción sean el resultado de un debate contradictorio, público y motivado. La ejecución cierra el ciclo con técnicas que buscan cumplir lo decidido con el menor uso de fuerza posible: facilidades de pago, sustituciones, cumplimiento específico o, en su caso, apremios. La autoridad debe justificar toda medida coactiva, explicar por qué resultan insuficientes medios menos lesivos y documentar la proporcionalidad. Cuando la sanción no se orienta a reparar o prevenir, se vacía de sentido; cuando la coacción desborda sus límites, se vuelve antijurídica. El equilibrio correcto preserva la confianza pública: el sistema reacciona con firmeza, pero jamás a costa de la dignidad humana.",
        },

        {
          type: "accordion",
          header: "Nivel 3. Operatividad práctica",
          open: false,
          text: "Secuencia para calificar un caso: 1) verificar norma aplicable y competencia; 2) constatar tipicidad y antijuridicidad; 3) valorar culpabilidad o imputación; 4) escoger sanción proporcional con motivación reforzada; 5) planificar ejecución con mínima coacción y control. Siempre: respeto a garantías y reparación a la víctima.",
        },

        {
          type: "paragraph",
          text: "En términos pedagógicos, la unidad exige entrenar un criterio doble: técnico y prudencial. Lo técnico aporta el lenguaje de tipicidad, culpabilidad, legalidad y proporcionalidad; lo prudencial evita respuestas automáticas, pondera contextos, riesgos y alternativas menos gravosas. La finalidad constante es proteger bienes y derechos con la mínima intervención necesaria, pues la fuerza pública es un remedio, no una forma de gobierno. Con este mapa, podremos abordar con mayor precisión los subtemas siguientes: la noción de sanción como consecuencia (14.1), el vínculo y distinción con la coacción (14.2), la clasificación de sanciones (14.3), la pena y sus fines (14.4) y, finalmente, la clasificación de Carnelutti (14.5), que ordena el panorama para el trabajo profesional y académico.",
        },
      ],
      subthemes: [
        {
          id: "14.1",
          numbering: "14.1",
          title: "La sanción como consecuencia de derechos",
          content: [
            {
              type: "paragraph",
              text: "En el plano jurídico, “sanción” no equivale a venganza ni a represalia emocional, sino a la consecuencia normativa prevista ante la infracción de una regla válida. Es una respuesta institucional que busca recomponer el orden jurídico lesionado, ya sea reparando, restituyendo, disciplinando o previniendo nuevas afectaciones. Por eso, en el derecho sancionatorio caben múltiples subsistemas (penal, administrativo, disciplinario, civil, procesal), cada cual con finalidades y procedimientos propios, pero todos limitados por garantías comunes: legalidad, tipicidad, debido proceso, presunción de inocencia, motivación y control. La sanción se activa cuando concurren, al menos, tipicidad (adecuación de la conducta a la hipótesis normativa), antijuridicidad (lesión del ordenamiento) y, cuando procede, culpabilidad o imputación subjetiva. Entendida así, la sanción no se justifica por el dolor que produce, sino por el bien público que protege: seguridad jurídica, confianza social, protección de bienes y de víctimas.",
            },
            {
              type: "paragraph",
              text: "El derecho sancionatorio organiza un catálogo de reacciones compatibles con distintas clases de ilicitud. En sede penal, la pena limita derechos fundamentales y, por ello, se somete a las salvaguardas más intensas. En sede civil, las sanciones se concentran en restituir el equilibrio (reparación, indemnización, condenas de hacer/no hacer) y en asegurar la lealtad procesal (multas, apercibimientos). En lo administrativo y disciplinario, se tutela el correcto funcionamiento de la Administración y de profesiones, con multas, clausuras o inhabilitaciones. Incluso existen sanciones “premiales”: beneficios por colaboración eficaz o arrepentimiento activo. Este mosaico revela que sancionar no es “castigar por castigar”, sino seleccionar la reacción idónea y necesaria para el fin legítimo perseguido, con preferencia por remedios que reparen y prevengan antes que aquellos que simplemente afligen.",
            },
            {
              type: "accordion",
              header: "Mapa conceptual de la sanción",
              open: false,
              text: "Definición: consecuencia jurídica ante la infracción. Finalidades: reparación, prevención, disciplina, retribución limitada. Subsistemas: penal, administrativo, disciplinario, civil, procesal. Requisitos: tipicidad, antijuridicidad, culpabilidad/imputación cuando proceda. Garantías: legalidad, debido proceso, motivación, control.",
            },
            {
              type: "paragraph",
              text: "La proporcionalidad opera como test de racionalidad que impide excesos. En su versión tripartita, exige: (i) idoneidad (la sanción debe contribuir al propósito legítimo: proteger un bien jurídico, restituir un derecho, asegurar cumplimiento); (ii) necesidad (no debe existir una medida menos gravosa con igual eficacia); y (iii) proporcionalidad en sentido estricto (balance razonado entre el beneficio público y el sacrificio individual). Aplicada con rigor, la proporcionalidad excluye sanciones simbólicas pero inútiles y, a la inversa, reacciones draconianas que, aun eficaces, lesionan desproporcionadamente la dignidad o la libertad. En todos los casos, la motivación de la autoridad debe explicitar este examen, para que el control judicial pueda verificar la corrección del juicio.",
            },
            {
              type: "paragraph",
              text: "Un aspecto clave del derecho sancionatorio contemporáneo es recentrar a la víctima. La reparación integral —material y moral—, la restitución y las medidas de satisfacción complementan las finalidades preventivas. Así, la sanción deja de concebirse como un diálogo exclusivo entre infractor y Estado, e incorpora a quien sufrió la lesión. Ello no autoriza a privatizar la justicia: la respuesta sigue siendo pública y motivada, pero incorpora estrategias de justicia restaurativa cuando son compatibles con la gravedad del hecho y con los derechos involucrados. El norte es doble: prevenir nuevos daños y restablecer, en la medida de lo posible, la vigencia real del derecho vulnerado.",
            },
            {
              type: "accordion",
              header: "Principios rectores del derecho sancionatorio",
              open: false,
              text: "Legalidad y tipicidad; irretroactividad de lo desfavorable; presunción de inocencia; non bis in idem; debido proceso y defensa; motivación reforzada; proporcionalidad (idoneidad, necesidad, balance); control judicial efectivo.",
            },
            {
              type: "paragraph",
              text: "En síntesis, la sanción como consecuencia de derechos no se mide por su severidad, sino por su racionalidad y utilidad pública. Se trata de proteger bienes y derechos, de desalentar la reincidencia y de restaurar equilibrios, todo dentro de un marco de garantías que preserva la legitimidad del sistema. Este entendimiento prepara el análisis del vínculo con la coacción —el “brazo ejecutor” de las decisiones— y de la tipología de respuestas que emplean los distintos subsistemas, incluyendo la pena, que por su intensidad exige el mayor escrutinio constitucional.",
            },
          ],
        },
        {
          id: "14.2",
          numbering: "14.2",
          title: "Sanción y coacción",
          content: [
            {
              type: "paragraph",
              text: "Coacción designa, en sentido privado, la presión o violencia que vicia el consentimiento: lo decidido bajo amenaza no es expresión de voluntad libre y, por ello, los actos así celebrados resultan anulables o ineficaces. Esta coacción privada, ajena a la institucionalidad, no solo deslegitima negocios y declaraciones, sino que puede eximir o atenuar responsabilidad según el grado de constricción. En clave pública, el término coacción se resignifica: el Estado detenta el monopolio legítimo del uso de la fuerza para hacer cumplir el Derecho y proteger a la comunidad. Aquí la coacción no es vicio, sino herramienta excepcional y reglada: opera bajo legalidad, competencia, procedimiento, motivación y control. El contraste es pedagógico: coacción privada invalida; coacción pública, sometida a límites, habilita la eficacia del orden jurídico.",
            },
            {
              type: "paragraph",
              text: "Distinguir sanción de coacción evita confusiones prácticas. La sanción califica y reacciona (multa, reparación, inhabilitación, pena); la coacción asegura la efectividad (embargo, lanzamiento, apremio, uso proporcional de la fuerza). Una sentencia que impone una reparación es sanción; el embargo para cobrarla, coacción. Una clausura administrativa motivada es sanción; su ejecución con auxilio de la fuerza pública, coacción. Esta lógica secuencial preserva el debido proceso: primero, se verifica la infracción y se motiva la respuesta; después, si no hay cumplimiento voluntario, se despliegan medios coactivos indispensables para hacer real lo decidido. Sin coacción, el Derecho se desdibuja en declaraciones; sin límites, la coacción erosiona derechos.",
            },
            {
              type: "accordion",
              header: "Coacción privada y vicio del consentimiento",
              open: false,
              text: "La amenaza o violencia que anula o distorsiona la voluntad invalida actos o declaraciones. Efectos: nulidad/ineficacia, responsabilidad atenuada, restitución. Finalidad: proteger libertad y autenticidad del consentimiento.",
            },
            {
              type: "paragraph",
              text: "En la práctica, la coacción estatal se manifiesta en dos grandes ámbitos. La coacción judicial, propia de la ejecución de sentencias, incorpora embargos, remociones, lanzamientos, apremios, auxilios de fuerza pública y medidas cautelares para asegurar resultados útiles. La coacción administrativa opera en actividades de policía (inspecciones, clausuras, retiros de productos) y en la ejecución de sanciones administrativas; siempre bajo control jurisdiccional ex post. En ambos espacios, rige la regla de último recurso: deben agotarse o resultar ineficaces los medios menos gravosos antes de acudir a la fuerza.",
            },
            {
              type: "image",
              src: "https://significado.com/wp-content/uploads/derecho/Coercibilidad-2.jpg",
              alt: "Coercibilidad del Derecho",
              caption:
                "El uso legítimo y reglado de la fuerza pública como garantía de eficacia.",
              text: "",
            },
            {
              type: "paragraph",
              text: "Tres pruebas de racionalidad gobiernan la coacción estatal. Legalidad estricta: la medida debe estar prevista en la ley y ser dispuesta por autoridad competente. Procedimentalidad: audiencia, notificación y posibilidad de contradicción cuando la urgencia no lo impida; motivación suficiente que explique por qué la coacción es indispensable. Proporcionalidad: selección del medio menos lesivo que logre el fin; duración acotada; y revisiones periódicas. Estas exigencias no burocratizan por capricho: legitiman la intervención y minimizan daños colaterales, preservando la confianza ciudadana.",
            },
            {
              type: "accordion",
              header: "Coacción pública: límites y controles",
              open: false,
              text: "Legalidad y competencia; procedimiento y motivación; proporcionalidad y temporalidad; control judicial; rendición de cuentas. Sin estos límites, la coacción deviene abuso; con ellos, se vuelve garantía de tutela efectiva.",
            },
            {
              type: "paragraph",
              text: "En suma, sanción y coacción son instrumentos complementarios del mismo proyecto: que el Derecho sea algo más que un enunciado. La sanción define la respuesta; la coacción, su eficacia. En el terreno didáctico, la distinción pule la estrategia: primero argumentar y decidir; después, ejecutar con el mínimo de fuerza indispensable y el máximo de justificación pública. Esta brújula permitirá clasificar con precisión los distintos tipos de sanciones y, más adelante, abordar la pena y su justificación en un Estado constitucional.",
            },
          ],
        },
        {
          id: "14.3",
          numbering: "14.3",
          title: "Clasificación de las sanciones",
          content: [
            {
              type: "paragraph",
              text: "El derecho positivo emplea múltiples familias de sanciones, cuya elección depende del bien protegido, de la intensidad de la lesión y del subsistema involucrado. Las sanciones penales se reservan para la afectación más grave de bienes jurídicos y, por su potencial de restricción de derechos fundamentales (libertad, patrimonio, derechos políticos), están sometidas a las garantías más estrictas. Las sanciones civiles se enfocan en reparar o restituir: buscan volver las cosas al estado anterior o compensar el daño causado, patrimonial o extrapatrimonial. El campo administrativo sancionador asegura el cumplimiento de deberes y estándares públicos (salud, seguridad, competencia), mediante multas, clausuras e inhabilitaciones; su legitimidad se ancla en procedimientos con contradicción y control judicial. Al lado, el régimen disciplinario tutela la probidad y la corrección de servidores y profesionales. Completan el cuadro las sanciones premiales (beneficios por colaboración) y las sanciones sociales o económicas con alcance supranacional.",
            },
            {
              type: "paragraph",
              text: "Esta tipología no pretende compartimentos estancos; al contrario, ilumina criterios para escoger la reacción idónea. En términos generales, cuanto mayor la lesividad y el desvalor de acción, más intensa la sanción y más robustas las garantías. Donde la reparación integral sea posible y eficaz, el énfasis debe estar en lo civil; donde la prevención de riesgos colectivos exija disciplina inmediata, lo administrativo opera con celeridad pero bajo control; donde la conducta ponga en jaque bienes fundamentales, entra el ius puniendi penal con máxima cautela. Las sanciones premiales —reducción de pena o beneficio por cooperación— no relativizan la ilicitud, sino que incorporan incentivos para esclarecer hechos y reducir daños. Las sanciones sociales (rechazo, ostracismo) carecen de formalidad estatal, pero condicionan comportamientos y conviene distinguirlas para no confundir moral social con legalidad.",
            },
            {
              type: "accordion",
              header: "Cuadro comparado (finalidad y garantías)",
              open: false,
              text: "Penales: protección de bienes fundamentales; garantías máximas. Civiles: reparación/restauración; énfasis en equivalencia e integralidad. Administrativas: tutela del interés público; procedimientos ágiles con control judicial. Disciplinarias: probidad y confianza; estatutos especiales. Premiales: incentivos a la colaboración; límites de proporcionalidad. Sociales/económicas: presión consuetudinaria o internacional; sin reemplazar la legalidad interna.",
            },
            {
              type: "paragraph",
              text: "Desde la práctica, dos preguntas guían la calificación: ¿cuál es el bien jurídico comprometido? y ¿qué medida logra el objetivo con menor sacrificio de derechos? La respuesta exige examinar pruebas, gravedad del daño, riesgo de reiteración y eficacia comparada de las alternativas. Por ejemplo, ante infracciones de consumo que afectan a muchos usuarios, una combinación de sanción administrativa (multa, orden de cese) y remedios civiles (reparación) puede ser más útil que abrir de inicio el frente penal, salvo fraudes masivos o peligrosa afectación a la salud. En cambio, delitos violentos con alto desvalor de acción justifican la respuesta penal, sin que ello excluya reparaciones civiles. La clave es evitar el “penalismo reflejo” y, a la vez, no trivializar conductas gravemente lesivas.",
            },
            {
              type: "paragraph",
              text: "El control de proporcionalidad debe acompañar la selección. Un mismo hecho puede recibir respuestas diversas según contexto y reincidencia. La multa administrativa pierde eficacia cuando el infractor la asume como costo de operación: allí se justifican medidas inhabilitantes o clausuras temporales. Análogamente, en sede civil, la reparación meramente patrimonial puede ser insuficiente si la lesión incluye un componente moral o de proyecto de vida; la tutela debe contemplar medidas de satisfacción y garantías de no repetición. Por su parte, las sanciones premiales requieren transparencia y límites para evitar incentivos perversos. Todo el sistema, finalmente, se articula con la ejecución: sin mecanismos coactivos, la clasificación queda en teoría.",
            },
            {
              type: "accordion",
              header: "Criterios de elección y dosificación",
              open: false,
              text: "Bien jurídico protegido; gravedad del daño; riesgo de reincidencia; eficacia de la medida; disponibilidad de reparación integral; efectos colaterales; costos de cumplimiento y de ejecución. Dosificación: gradualidad, individualización, sustitutivos y seguimiento.",
            },
            {
              type: "paragraph",
              text: "Con este mapa, la clasificación de sanciones se vuelve una herramienta de diseño y no un listado memorístico. Permite al operador jurídico justificar por qué una multa basta o por qué hace falta una inhabilitación; cuándo privilegiar la reparación civil y cuándo activar el derecho penal; cómo combinar respuesta sancionatoria con medidas restaurativas o programáticas. En todos los casos, el hilo conductor es común: proteger derechos y bienes con la mínima intervención necesaria, con garantías plenas y con una ejecución que convierta la declaración en realidad.",
            },
          ],
        },
        {
          id: "14.4",
          numbering: "14.4",
          title: "La pena",
          content: [
            {
              type: "paragraph",
              text: "La pena es la reacción más intensa del orden jurídico frente al delito: una restricción de derechos impuesta por un juez, tras un proceso con garantías, conforme a ley previa y estricta. No es un fin en sí misma; es un medio al servicio de fines legítimos en tensión: retribuir el injusto culpable, prevenir nuevas lesiones (general y especialmente), proteger a la comunidad y, cuando sea posible, favorecer la reintegración social del responsable. La modernidad constitucional ha desplazado discursos puramente retributivos hacia modelos mixtos, donde la proporcionalidad y la humanidad de las penas (prohibición de tortura y de tratos crueles) acotan el poder punitivo. El punto de equilibrio es delicado: demasiada severidad erosiona la dignidad; demasiada laxitud abandona a las víctimas y desincentiva la ley.",
            },
            {
              type: "paragraph",
              text: "La justificación de la pena exige una cadena de razones públicas. En el plano de la culpabilidad, se individualiza la responsabilidad según la capacidad de comprensión y autodeterminación, y se valora el dolo o la culpa, los móviles, la magnitud del daño y el contexto. En el plano de la prevención general, la pena comunica un estándar social de intolerancia frente a ciertas conductas; en el plano de la prevención especial, se calibran medidas orientadas a reducir la reincidencia: tratamiento, inhabilitaciones, programas educativos o de trabajo. El ideal resocializador no autoriza a desconocer el mal causado; por el contrario, lo asume con seriedad y busca que el cumplimiento tenga sentido preventivo.",
            },
            {
              type: "accordion",
              header: "Fines y tensiones de la pena",
              open: false,
              text: "Retribución limitada; prevención general (comunicación normativa); prevención especial (reducción de reincidencia); protección de la comunidad; rehabilitación y reinserción. Toda finalidad opera bajo legalidad, culpabilidad y proporcionalidad.",
            },
            {
              type: "paragraph",
              text: "El principio de proporcionalidad concreta la justicia de la pena en tres planos: (i) con el hecho (el quantum no puede exceder la gravedad objetiva y subjetiva del delito); (ii) con la persona (individualización según circunstancias y riesgo); y (iii) con el sistema (consistencia con la política criminal y con otras penas aplicables). La motivación judicial debe exhibir ese triple control, explicando por qué la pena elegida es idónea, necesaria y equilibrada. Este estándar se complementa con el principio de mínima lesividad: cuando fines preventivos puedan alcanzarse con medidas menos restrictivas (penas sustitutivas, semilibertad, restricciones específicas), deben preferirse.",
            },
            {
              type: "paragraph",
              text: "La ejecución de la pena es parte de su legitimidad. Un sistema que solo encarcela, sin programas de tratamiento, educación ni reinserción, sacrifica la prevención especial y multiplica costos sociales. La ejecución moderna incorpora progresión, incentivos por esfuerzo, evaluación de riesgo y medidas postpenitenciarias que faciliten el retorno sin recaídas. En delitos de especial gravedad, las limitaciones serán mayores, pero el estándar de humanidad permanece: no hay espacio para penas degradantes ni para regímenes que anulen toda expectativa de retorno compatible con la seguridad pública.",
            },
            {
              type: "accordion",
              header: "Límites constitucionales",
              open: false,
              text: "Legalidad estricta, culpabilidad personal (nada de responsabilidad objetiva), prohibición de penas crueles/inhumanas, non bis in idem, proporcionalidad, motivación reforzada y control judicial. Preferencia por alternativas cuando logren los mismos fines con menor sacrificio.",
            },
            {
              type: "paragraph",
              text: "En definitiva, la pena solo es legítima cuando sirve a fines constitucionalmente valiosos, con respeto estricto a garantías. Su diseño no puede decidirse por impulsos de coyuntura, sino por evidencia sobre eficacia y por principios que resguarden dignidad y seguridad. El operador jurídico debe justificar la necesidad de la pena frente a alternativas, individualizar con prudencia y asegurar que la ejecución no destruya, sino que ampare, la promesa del Estado de Derecho: proteger a la comunidad sin renunciar a su humanidad.",
            },
          ],
        },
        {
          id: "14.5",
          numbering: "14.5",
          title: "Clasificación de Carnelutti",
          content: [
            {
              type: "paragraph",
              text: "Bajo el rótulo didáctico de “clasificación de Carnelutti” se agrupa un esfuerzo por ordenar las reacciones del orden jurídico frente a la ilicitud a partir de su función. La idea central es distinguir, dentro del género sanción, especies con lógicas y técnicas diversas: unas buscan recomponer (restitución, reparación), otras impedir (medidas inhibitorias, inhabilitaciones), otras castigar con límites (penas) y otras asegurar la eficacia del derecho (coacción). Esta lectura funcional evita confundir remedios con castigos y permite dosificar respuestas en clave de utilidad pública y de garantías. Más que un dogma cerrado, el esquema es una brújula: ayuda a preguntar qué se quiere lograr en cada caso (reparar, prevenir, disuadir, ejecutar) y a escoger el instrumento menos lesivo que lo haga posible.",
            },
            {
              type: "paragraph",
              text: "Una primera familia agrupa las sanciones restitutorias y resarcitorias: devolver al estado anterior o compensar el daño causado. Son típicas del derecho civil, aunque pueden aparecer en lo penal como responsabilidad civil derivada del delito. Su racionalidad es restaurativa: priorizan a la víctima y al equilibrio roto. Una segunda familia incluye las sanciones inhibitorias o impeditivas: prohibiciones de hacer, órdenes de cesar, inhabilitaciones, decomisos o restricciones funcionales; buscan impedir que el ilícito continúe o se repita. Una tercera familia corresponde a las penas: respuestas aflictivas legítimas, pero de último recurso, con máximas garantías. Finalmente, una familia instrumental: medidas coactivas que aseguran cumplimiento (embargo, apremio) sin ser, por sí, sanciones autónomas respecto del ilícito, sino técnicas de eficacia.",
            },
            {
              type: "accordion",
              header: "Esquema funcional (síntesis)",
              open: false,
              text: "Restitutorias/Resarcitorias (reparar); Inhibitorias/Impedimento (prevenir continuación); Punitivas (penas con garantías); Coactivas (asegurar eficacia). Criterio rector: finalidad perseguida y menor lesividad posible.",
            },
            {
              type: "paragraph",
              text: "El aporte más valioso del esquema es metodológico: obliga a formular, antes de escoger la respuesta, un diagnóstico sobre el bien jurídico, la dinámica del daño y el riesgo futuro. Si el daño es reversible y no existe riesgo, la reparación basta; si el riesgo de reiteración es alto, las medidas inhibitorias o inhabilitantes cobran protagonismo; si la conducta afecta gravemente bienes fundamentales, se evalúa la pena con cautela extrema; y, en todos los casos, la coacción se reserva para asegurar ejecución cuando la persuasión fracasa. Esta secuencia racional sostiene decisiones motivadas y controlables.",
            },
            {
              type: "paragraph",
              text: "Desde la práctica forense, la utilidad del esquema se aprecia en litigios complejos: consumo masivo, competencia económica, daños ambientales, corrupción. Por ejemplo, frente a emisiones contaminantes, la reparación patrimonial al final del proceso es insuficiente si el daño continúa; se requieren medidas inhibitorias inmediatas y programas de cumplimiento. En colusión empresarial, además de multas y órdenes de cesar, pueden imponerse inhabilitaciones y mecanismos de compliance. En corrupción, la pena cumple función expresiva y preventiva, pero la restitución del patrimonio y la inhabilitación son indispensables. El criterio es modular, no acumulativo por reflejo.",
            },
            {
              type: "accordion",
              header: "Aplicación práctica y dosificación",
              open: false,
              text: "Diagnóstico (bien jurídico, daño, riesgo); Selección de familia (reparar, impedir, castigar, ejecutar); Dosificación (individualización, gradualidad, sustitutivos); Motivación y control (legalidad y proporcionalidad). Evitar el ‘penalismo reflejo’ y el ‘civilismo insuficiente’.",
            },
            {
              type: "paragraph",
              text: "En conclusión, la clasificación atribuida a Carnelutti se asume aquí como guía funcional para diseñar respuestas proporcionadas, útiles y compatibles con derechos. Su valor está en ordenar la decisión: qué fin perseguimos y con qué medios logramos el mejor resultado con el menor sacrificio posible. Con este criterio, se integran coherentemente sanción y coacción, pena y reparación, ejecución y prevención, cumpliendo el propósito del módulo: que el Derecho no solo declare, sino que efectivamente proteja y restaure.",
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
          href: "https://www.youtube.com/watch?v=gOl6j5rlPaM", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Diferencia entre persona física y persona moral (video) — https://www.youtube.com/watch?v=gOl6j5rlPaM",
            "¿Qué es el derecho de acción? ¿Quiénes tienen este derecho y cómo se materializa? (video) — https://www.youtube.com/watch?v=DBu-xzMRLHI",
            "Derecho y libertad (artículo, SciELO) — https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1405-91932011000200009",
            "El Derecho, un orden coercitivo (capítulo en PDF, UNAM) — https://archivos.juridicas.unam.mx/www/bjv/libros/4/1956/6.pdf",
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
            "GARCÍA, E. (2000). Introducción al Estudio del Derecho. México, Porrúa.",
            "PENICHE, F. (2000). Introducción al Estudio del Derecho. México, Porrúa.",
            "PEREZNIETO, L. (2009). Introducción al estudio del Derecho. México, Oxford.",
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
