/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAIE", // :contentReference[oaicite:0]{index=0}
  courseId: "DDPE", // :contentReference[oaicite:1]{index=1}
  id: "modulo2",

  /* ── Datos visibles ─────────────────────────── */
  courseName:
    "Maestría en Gestión y Administración de Instituciones Educativas", // :contentReference[oaicite:2]{index=2}
  title: "Módulo 2. Diagnóstico del estado de la institución", // :contentReference[oaicite:3]{index=3}
  semestre: "Tercer semestre", // :contentReference[oaicite:4]{index=4}
  teacher: "Dr. Jesús Agustín Zapata Velázquez", // :contentReference[oaicite:5]{index=5}

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Identificar los principales elementos que debe llevar un diagnóstico integral de una institución educativa.", // :contentReference[oaicite:6]{index=6}

  competencies: [
    "Identifica las problemáticas más importantes de una institución educativa.", // :contentReference[oaicite:7]{index=7}
    "Jerarquiza las problemáticas según la importancia de estas.", // :contentReference[oaicite:8]{index=8}
    "Proyecta el éxito y seguimiento del proyecto.", // :contentReference[oaicite:9]{index=9}
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
      numbering: "Unidad 2",
      title: "Diagnóstico del estado de la institución", // :contentReference[oaicite:0]{index=0}
      content: [
        /* Párrafo 1 (~200 palabras) */
        {
          type: "paragraph",
          text: "Diagnosticar el estado de una institución no es un trámite previo al proyecto; es el acto fundacional que define con precisión qué debe cambiar y por qué. Un buen diagnóstico convierte percepciones dispersas en conocimiento útil, triangulando evidencias cuantitativas (matrícula, resultados académicos, eficiencia terminal, asistencia) y cualitativas (clima escolar, cultura profesional, relaciones con familias). Este proceso exige una pregunta rectora clara —¿qué problema público queremos resolver?— y un marco de referencia que ordene la observación (dimensiones pedagógica, organizativa, comunitaria y de recursos). Sin ese andamiaje, se confunden síntomas con causas, se sobrerreaccionan incidentes y se terminan financiando soluciones vistosas pero irrelevantes. La regla es simple y firme: toda afirmación debe estar respaldada por datos verificables y por el testimonio de los actores involucrados. El producto final no es un inventario infinito, sino una síntesis priorizada que señale brechas, explique su origen y sugiera rutas factibles de intervención.",
        },

        /* Párrafo 2 (~200 palabras) */
        {
          type: "paragraph",
          text: "El diagnóstico institucional es, ante todo, un ejercicio colectivo. Implica escuchar a estudiantes, docentes, directivos, personal de apoyo y familias, para reconstruir una mirada polifónica de la vida escolar. La participación no es decorativa: cuando la comunidad contrasta sus percepciones con evidencias, emerge una narrativa común que legitima las decisiones siguientes. Por ello, el proceso requiere reglas de juego explícitas: calendario de sesiones, roles (coordinación, relatoría, resguardo de evidencias), criterios de confidencialidad y compromisos de seguimiento. La transparencia es condición de posibilidad: actas, bases de datos anonimizadas y visualizaciones simples (tableros) hacen inteligible la información y mueven la conversación del “creo que” al “vemos que”. El resultado es doble: por un lado, un mapa claro de fortalezas, debilidades, oportunidades y amenazas; por otro, una comunidad capaz de sostener los acuerdos porque los considera propios.",
        },

        /* Párrafo 3 (~200 palabras) */
        {
          type: "paragraph",
          text: "Un diagnóstico robusto integra herramientas analíticas complementarias. El FODA ayuda a separar lo controlable (procesos internos, capacidades del personal, infraestructura) de lo condicionado por el contexto (políticas locales, características socioeconómicas, servicios públicos). El análisis de causa-raíz (árbol de problemas, Ishikawa) obliga a distinguir entre efectos visibles y mecanismos subyacentes. Los indicadores de proceso y resultado permiten medir magnitud y evolución de las brechas, evitando juicios impresionistas. Además, la revisión del archivo histórico —planes previos, auditorías, evaluaciones externas— ofrece continuidad y aprendizaje institucional: no empezamos de cero, capitalizamos aciertos y evitamos repetir errores. Con estas piezas, el diagnóstico no se limita a describir; explica y, sobre todo, orienta: de la información se derivan hipótesis de intervención, criterios de prioridad y riesgos a gestionar.",
        },

        /* Párrafo 4 (~200 palabras) */
        {
          type: "paragraph",
          text: "La priorización es el corazón del diagnóstico. No todo problema merece el mismo nivel de atención ni todos requieren un proyecto. Se decide con una matriz que cruce impacto esperado, urgencia, factibilidad y costo de oportunidad. La pregunta es estratégica: ¿qué intervención mueve más la aguja respecto a la misión de la escuela con los recursos disponibles? La alineación con valores, misión y visión actúa como filtro: si una acción contradice la identidad institucional, su éxito será efímero. Asimismo, se evalúa la equidad: priorizar no es favorecer a quien más grita, sino atender a quien más lo necesita. Esta disciplina evita el activismo disperso y permite concentrar esfuerzos en problemas resolubles con alta rentabilidad social. Elegir bien es ya transformar.",
        },

        /* Párrafo 5 (~200 palabras) */
        {
          type: "paragraph",
          text: "El cierre del diagnóstico debe dejar listos los ‘puentes’ hacia la planeación: metas medibles, líneas de acción tentativas, supuestos críticos y riesgos principales. Cada hallazgo se traduce en un indicador de seguimiento y en una pregunta de evaluación: ¿cómo sabremos que la situación mejoró? Paralelamente, se traza un mapa de actores y alianzas necesarias (autoridades, comunidad, organizaciones locales) y se estiman recursos humanos, materiales y presupuestales con realismo. La ética de datos no es opcional: se resguarda la privacidad, se evitan comparaciones estigmatizantes y se privilegia la mejora por encima del castigo. Un buen diagnóstico se reconoce porque permite decidir con serenidad, comunicar con claridad y ejecutar con disciplina. Desde ahí, el proyecto no improvisa: continúa un camino ya trazado por la evidencia.",
        },

        /* Acordeón 1 (texto en párrafo) */
        {
          type: "accordion",
          header: "Nivel 1 — Propósito y alcance del diagnóstico",
          open: false,
          text: "El diagnóstico existe para responder dos preguntas esenciales: ¿qué brechas afectan hoy el derecho a aprender y a enseñar en esta institución?, y ¿qué tan cerca o lejos estamos del horizonte definido por nuestros valores, misión y visión? Su alcance se delimita por tiempo, espacios y poblaciones: se prefieren ventanas de análisis claras (últimos tres ciclos), áreas priorizadas (académica, convivencia, gestión) y grupos focales representativos. Este encuadre evita dispersión, facilita la recolección de evidencias pertinentes y produce una narrativa coherente que oriente la acción.",
        },

        /* Acordeón 2 (texto en párrafo) */
        {
          type: "accordion",
          header: "Nivel 2 — Metodología y evidencias",
          open: false,
          text: "La metodología combina fuentes y técnicas para garantizar validez: bases administrativas depuradas, observación de aula, entrevistas y cuestionarios, revisión de archivo histórico y análisis FODA. Cada dato se documenta en un portafolio (fuente, fecha, responsable) y se visualiza en tableros que permitan detectar patrones y excepciones. La triangulación entre cifras y testimonios evita sesgos; la anonimización protege a las personas. El criterio es estricto: ninguna conclusión sin evidencia; ninguna evidencia sin interpretación colegiada.",
        },

        /* Acordeón 3 (texto en párrafo) */
        {
          type: "accordion",
          header: "Nivel 3 — Priorización y salida hacia el plan",
          open: false,
          text: "Concluida la fase analítica, se prioriza mediante una matriz que cruce impacto, urgencia, factibilidad y costo de oportunidad. Los problemas estratégicos seleccionados se convierten en objetivos preliminares con indicadores, riesgos y supuestos críticos identificados. Se esbozan líneas de acción y se define la gobernanza del siguiente tramo (responsables, calendario, comunicación). De esta manera, el diagnóstico desemboca naturalmente en el plan estratégico: de la evidencia a la decisión, y de la decisión a la ejecución.",
        },
      ],
      /* → Subtemas de primer nivel (según 'Contenido temático de la unidad') */
      subthemes: [
        {
          id: "1.1",
          numbering: "2.1",
          title: "Análisis de la problemática",
          content: [
            {
              type: "paragraph",
              text: "Analizar la problemática es el puente entre el diagnóstico institucional y la formulación de objetivos accionables. En esta etapa se depuran los hallazgos del FODA y se contrasta la ‘escuela actual’ con la ‘escuela deseada’ para acotar el núcleo del problema. Un análisis sólido comienza por situar la magnitud del fenómeno (línea base), explicitar sus causas probables y mapear a los actores clave. Para ello, es recomendable triangulación de fuentes: historiales académicos, reportes internos, entrevistas al personal docente y encuestas a familias. El propósito no es acumular datos, sino identificar los cuellos de botella que limitan el logro de los aprendizajes y la calidad del servicio. El análisis debe registrar recursos disponibles (humanos, materiales y financieros) y restricciones del contexto, pues la viabilidad depende de esa ecuación. Finalmente, se elabora una hipótesis de problema-causa-efecto que oriente la toma de decisiones: si el problema es X, causado por Y, entonces intervenir con Z debería modificar el indicador W en un periodo T. Esta lógica conecta con la posterior evaluación, al establecer desde el inicio el antes y el después que se medirá. En síntesis, el análisis de la problemática clarifica el ‘qué’ y el ‘por qué’, y crea condiciones para diseñar un ‘cómo’ realista y verificable.",
            },
            // :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}

            {
              type: "accordion",
              header: "Formulación de objetivos a partir del problema",
              open: false,
              text: "De un problema bien delimitado derivan objetivos claros. Se sugiere enunciar un objetivo general (amplio, temporalmente acotado) y varios objetivos específicos (contribuyen al general). Redáctalos con verbo en infinitivo y estructura de tres partes: qué se hará, cómo se hará y para qué se hará. Para conservar trazabilidad, cada objetivo debe vincularse a la causa priorizada y a un indicador evaluable. La literatura sugiere apoyarse en taxonomías (p. ej., Bloom o Marzano) para seleccionar verbos de desempeño congruentes con el nivel de complejidad cognitiva esperado; esto evita metas vagas y facilita construir instrumentos de valoración consistentes. Así, el análisis deja de ser descriptivo y se convierte en el fundamento lógico del proyecto: de las causas emanan los objetivos, y de los objetivos, las metas e intervenciones.",
            },
            // :contentReference[oaicite:2]{index=2}
            {
              type: "paragraph",
              text: "Para jerarquizar la problemática conviene aplicar criterios explícitos: impacto en el aprendizaje, alcance poblacional, urgencia, factibilidad técnica y costo de oportunidad. Cada criterio se pondera y se asigna un puntaje a las alternativas de intervención; la priorización resultante se discute colegiadamente para legitimar la selección. Este proceso reduce sesgos y favorece la corresponsabilidad. El producto del análisis debe incluir: (1) descripción operativa del problema, (2) evidencia y línea base, (3) causas controlables por la escuela y supuestos externos, (4) población objetivo, (5) riesgos y medidas de mitigación, (6) objetivos preliminares, e (7) indicadores tentativos. Documentar estos elementos constituye la ‘memoria de diseño’ del proyecto y permite auditar decisiones a lo largo del ciclo. Además, deja lista la estructura lógica para definir metas cuantificables e instrumentos de verificación. Recordemos que el diagnóstico y su análisis son el primer paso de mejora: al profundizar en las causas, aumenta la probabilidad de diseñar acciones pertinentes y de demostrar cambio respecto del punto de partida.",
            },
            // :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4}

            {
              type: "accordion",
              header: "Criterios de priorización y trazabilidad",
              open: false,
              text: "Priorización: pondera impacto, urgencia, factibilidad y recursos, y discútelo con el claustro. Trazabilidad: enlaza problema→causa→objetivo→meta→indicador→evidencia. Desde el inicio define qué se medirá (línea base y meta) para poder comparar el antes y el después y atribuir resultados a la intervención. Este encadenamiento lógico es el que, más tarde, facilitará el seguimiento y la evaluación de logros.",
            },
            // :contentReference[oaicite:5]{index=5}
          ],
        },

        {
          id: "1.2",
          numbering: "2.2",
          title: "Valores, misión y visión",
          content: [
            {
              type: "paragraph",
              text: "La identidad institucional —valores, misión y visión— es el marco que legitima y orienta cualquier proyecto de mejora. La misión define la razón de ser actual de la escuela (quiénes somos, qué hacemos, para quién y con qué fortalezas); debe ser clara, realista y comprensible para la comunidad. La visión, por su parte, proyecta a mediano plazo (3–5 años) el estado deseado y debe ser alcanzable, medible, atractiva y coherente con el contexto. Los valores establecen las reglas éticas y de convivencia que traducen esa identidad en prácticas cotidianas; se recomienda un conjunto breve (5–7) para evitar la dilución. Cuando una institución no cuenta con este ‘corazón ideológico’, el proceso de redacción colegiada funciona además como ejercicio de alineación cultural y de compromiso con el cambio. Integrar el proyecto al marco identitario evita esfuerzos inconexos: la intervención deja de ser un apéndice y se convierte en una expresión operativa de lo que la escuela dice ser y querer llegar a ser.",
            },
            // :contentReference[oaicite:6]{index=6}

            {
              type: "accordion",
              header: "Cómo evaluar misión y visión",
              open: false,
              text: "Para revisar misión y visión, utiliza listas de cotejo simples: (1) Objetivos: ¿expresan con claridad la razón de ser y el horizonte de cambio? (2) Contexto: ¿reflejan la realidad cultural y organizacional? (3) Claridad: ¿se entienden por todos los actores? (4) Viabilidad y realismo: ¿se pueden cumplir con recursos disponibles? (5) Diferenciación e identidad: ¿son originales y apropiadas? (6) Temporalidad: ¿la visión define un plazo de revisión? Estas preguntas fortalecen la coherencia entre cultura, proyecto y práctica pedagógica.",
            },
            // :contentReference[oaicite:7]{index=7}

            {
              type: "image",
              src: "https://fastercapital.com/es/i-es/Mision-y-vision--Alinear-su-mision-y-vision-con-su-estrategia-empresarial--Garantizar-que-su-visi-n-se-traduzca-en-acci-n.webp",
              alt: "Diagrama de misión, visión y valores",
              caption:
                "Misión, visión y valores como marco de alineación del proyecto.",
            },

            {
              type: "paragraph",
              text: "Operativamente, alinear el proyecto con la misión y la visión implica traducirlas en criterios de decisión. Por ejemplo: si la misión declara ‘servicio educativo de calidad con enfoque inclusivo’, las estrategias deberán priorizar barreras de aprendizaje y participación; si la visión aspira a ‘mejorar los resultados en comprensión lectora’, entonces objetivos, metas e indicadores deberán enfocarse explícitamente en ese ámbito. Los valores, a su vez, guían el ‘cómo’: respeto, corresponsabilidad, transparencia y compromiso se reflejan en mecanismos de participación y rendición de cuentas. Esta coherencia vertical (identidad→estrategia→acciones→evidencias) eleva la legitimidad del proyecto, sostiene el cambio más allá de personas concretas y facilita la comunicación con la comunidad. Al cierre, el propio proceso de revisión identitaria actúa como intervención cultural: clarifica expectativas, distribuye liderazgo y crea condiciones para el aprendizaje organizacional.",
            },
            // :contentReference[oaicite:8]{index=8}

            {
              type: "accordion",
              header: "Selección y despliegue de valores",
              open: false,
              text: "Selecciona 5–7 valores que conecten con la misión y visión y que respondan al contexto real. Clasifícalos en competitividad (p. ej., puntualidad, calidad), convivencia (respeto, empatía) y ética profesional (responsabilidad, honestidad). Defínelos operativamente: conductas observables, responsables y evidencias. Comunícalos y evalúalos de forma periódica; de lo contrario, permanecerán como enunciados y no como cultura viva.",
            },
            // :contentReference[oaicite:9]{index=9}
          ],
        },

        {
          id: "1.3",
          numbering: "2.3",
          title: "Plan estratégico de acción",
          content: [
            {
              type: "paragraph",
              text: "El plan estratégico de acción es la hoja de ruta que operacionaliza objetivos y metas en estrategias, actividades, responsables, recursos, tiempos e indicadores de seguimiento. Su formato puede adoptar una matriz o un diagrama de Gantt que ordene fases y permita visualizar dependencias y hitos. Cada actividad debe especificar qué se hará, quién lo hará, con qué recursos, cuándo y cómo se verificará. Esta explicitación no es burocracia: alinea equipos, previene desvíos y facilita el control de calidad. El plan también define mecanismos de coordinación y comunicación, así como los espacios formales de monitoreo (reuniones de seguimiento con actas y tablero de indicadores). Se recomienda iniciar con pilotos controlados para ajustar supuestos y escalar con evidencia. En suma, el plan convierte la intención en ejecución disciplinada y genera información útil para aprender y corregir a tiempo.",
            },
            // :contentReference[oaicite:10]{index=10}

            {
              type: "accordion",
              header: "Componentes mínimos del plan",
              open: false,
              text: "Incluye, como mínimo: (1) objetivos y metas; (2) acciones/estrategias; (3) responsables y roles; (4) recursos (humanos, materiales, financieros); (5) calendario con hitos; (6) evaluación (indicadores de proceso y de resultado); (7) seguimiento (ritmo de revisión y toma de decisiones). Un buen plan explicita supuestos, riesgos y criterios de éxito para cada acción, y documenta evidencias que permitan auditar el avance.",
            },
            // :contentReference[oaicite:11]{index=11}

            {
              type: "image",
              src: "https://assets.asana.biz/transform/2625256d-fc68-4d2f-8609-05b539bf4bf5/inline-project-management-project-integration-management-1-es-2x",
              alt: "Ejemplo visual de plan de acción",
              caption:
                "Plan de acción: cronograma, responsables y recursos integrados.",
            },

            {
              type: "paragraph",
              text: "Para sostener la ejecución, incorpora un ciclo de mejora continua: planear–hacer–verificar–actuar. En cada revisión, compara el avance contra el cronograma y los indicadores definidos; si existen brechas, identifica causas (diseño, implementación, recursos, contexto) y define decisiones de ajuste. Establece reglas claras para gestionar cambios de alcance y prioriza acciones de alto impacto. Garantiza, además, la documentación de evidencias (reportes, registros de aula, productos de estudiantes) para alimentar el tablero y para la rendición de cuentas interna y externa. Finalmente, cierra cada ciclo con reflexión colegiada: qué funcionó, qué no, qué se aprende. Esta disciplina convierte el plan en un sistema de aprendizaje organizacional, incrementa la probabilidad de logro de metas y prepara el terreno para una evaluación honesta de resultados.",
            },
            // :contentReference[oaicite:12]{index=12} :contentReference[oaicite:13]{index=13}

            {
              type: "accordion",
              header: "Seguimiento, evaluación y ajustes",
              open: false,
              text: "Define desde el arranque los espacios de seguimiento (semanales/quincenales), quién convoca, qué tablero se revisa y cómo se registran acuerdos. Utiliza indicadores explícitos y datos accesibles para decidir con evidencia; cuando sea oportuno, ajusta estrategias, reasigna recursos o reprograma actividades para mantener la pertinencia del proyecto y asegurar su viabilidad.",
            },
            // :contentReference[oaicite:14]{index=14}
          ],
        },
        {
          id: "1.4",
          numbering: "2.4",
          title: "Metas del proyecto",
          content: [
            {
              type: "paragraph",
              text: "Las metas del proyecto son la traducción cuantificable de los objetivos: convierten una intención general en un resultado medible dentro de un horizonte temporal específico. Su función principal es fijar el nivel de desempeño esperado respecto de una línea base verificable, de modo que la comparación entre el “antes” y el “después” permita valorar el efecto de la intervención. Para ser útiles, las metas deben describir con claridad qué se espera lograr, en qué población, en qué proporción y para cuándo, cuidando la coherencia con el diagnóstico y con los recursos disponibles. La guía práctica recomienda metas finitas (con fecha), realistas (acorde con capacidades y restricciones), pertinentes (alineadas a prioridades institucionales) y evaluables mediante indicadores simples. Así, por ejemplo, en lugar de afirmar “mejorar la comprensión lectora”, una meta robusta diría: “Al término del ciclo 2025–2026, 70% del alumnado de 3.º resolverá textos narrativos de complejidad media con al menos 4/5 criterios de la rúbrica”. Además, se sugiere limitar el número de metas para evitar la dispersión y priorizar las de mayor impacto educativo. Cuando la comunidad participa en su redacción, crece el compromiso con el logro y se facilita la rendición de cuentas, ya que cada meta se convierte en un pacto explícito sobre lo que se considerará éxito y cómo se verificará. // Referencia: ‘Metas del proyecto’ e ‘Indicadores’ en el PDF de la Unidad 2.",
            },

            {
              type: "accordion",
              header: "Criterios para redactar metas sólidas",
              open: false,
              text: "Una meta sólida captura rumbo y medida. Propón metas específicas (definen población y logro), medibles (con indicador claro), alcanzables (con recursos disponibles), pertinentes (conectadas al objetivo) y temporales (con fecha). Usa números razonables: no existe porcentaje ideal universal; el colectivo define el umbral con base en la línea base y la ambición posible. Asegúrate de que cada meta esté respaldada por instrumentos de verificación (rúbricas, listas de cotejo, registros administrativos) y vincúlala a un responsable operativo. Documenta supuestos: ¿de qué condiciones depende cumplirla? Esta claridad facilita monitorear, ajustar y comunicar avances sin ambigüedades.",
            },

            {
              type: "image",
              src: "https://nailted.com/blog/wp-content/uploads/2024/04/Imagenes-blog-1024x682-39.png",
              alt: "Esquema de metas SMART",
              caption:
                "Metas claras y medibles: del objetivo general al resultado verificable.",
            },

            {
              type: "paragraph",
              text: "El par inseparable de la meta es el indicador: una regla para observar el progreso con consistencia. El material distingue indicadores cuantitativos (porcentajes, tasas, promedios) y cualitativos (observación con criterios, entrevistas estructuradas), ambos válidos si cuentan con definición operacional. Para construirlos, especifica: qué mide (definición), con qué instrumento (fuente de datos), cómo se calcula (fórmula) y cuándo se mide (frecuencia). La línea base se establece con datos del diagnóstico; la meta fija el valor deseado al cierre. Procura que el dato sea accesible y confiable, evitando indicadores que dependan de mediciones costosas o esporádicas. Un tablero mínimo con 3–5 indicadores por meta es suficiente para el seguimiento y permite decidir ajustes en tiempos y estrategias. Por último, contrasta metas e indicadores con el criterio de equidad: ¿a qué grupos priorizan? ¿qué barreras enfrentan? Este filtro ético evita mejoras promedio que esconden rezagos en subpoblaciones. Convertir metas e indicadores en acuerdos públicos fortalece la legitimidad del proyecto y habilita evaluaciones honestas de logro. // Referencia: sección de ‘Indicadores: definición y tipos’ en el PDF.",
            },

            {
              type: "accordion",
              header: "Errores comunes y cómo evitarlos",
              open: false,
              text: "Errores frecuentes: metas vagas (“mejorar”), porcentajes arbitrarios sin línea base, indicadores sin instrumento, metas no temporales o que dependen de factores fuera de control escolar. Para evitarlos, inicia siempre con línea base, valida factibilidad con el equipo, asegura instrumentos de medición accesibles y establece revisiones intermedias. Si el contexto cambia, ajusta de forma explícita: deja rastro en actas, comunica la razón del cambio y recalibra el indicador. Mejor una meta realista y bien medida que una promesa grandilocuente imposible de verificar.",
            },
          ],
          subthemes: [],
        },
        {
          id: "1.5",
          numbering: "2.5",
          title: "Recursos materiales y presupuestales",
          content: [
            {
              type: "paragraph",
              text: "Toda acción del plan requiere recursos humanos, materiales y económicos, y la probabilidad de éxito depende de cómo se alineen con las metas. La primera tarea es inventariar con detalle lo existente: personal y sus competencias, infraestructura y equipamiento, insumos de operación, apoyos externos disponibles y márgenes presupuestales. Luego, vincula cada actividad con su canasta de recursos: quién la ejecuta y con qué tiempo disponible; qué materiales se requieren y cómo se repondrán; qué costos directos e indirectos implica; y qué restricciones normativas existen. El presupuesto debe reflejar esa arquitectura: partidas, montos, supuestos y fuentes de financiamiento (internas o a gestionar). En contextos escolares, es común que el rubro económico sea limitado; por ello, planear con realismo implica priorizar compras críticas, aprovechar infraestructura subutilizada, calendarizar adquisiciones y explorar sinergias con la comunidad. La transparencia es central: difundir el presupuesto proyectado y el ejecutado fortalece la confianza y evita fricciones. Finalmente, cubre el frente de riesgos: identifica posibles sobrecostos, retrasos de suministro o indisponibilidades de personal, y define planes de contingencia. Un presupuesto vivo —que se revisa y ajusta con datos— es un instrumento de gobierno del proyecto, no un trámite contable. // Referencia: apartado ‘Recursos materiales y presupuestales’ del PDF.",
            },

            {
              type: "accordion",
              header: "Mapa de recursos y responsables",
              open: false,
              text: "Construye una matriz que cruce acciones con recursos y responsables. Por fila, cada acción del plan; por columna: responsable nominal, equipo de apoyo, materiales, servicios, tiempos, costos y fuente de financiamiento. Añade una columna de riesgos (p. ej., retraso de entrega) y otra de mitigación (proveedor alterno, reprogramación). Este mapa hace visible la carga de trabajo, previene cuellos de botella y permite negociar apoyos a tiempo. Revisa y actualiza la matriz en cada reunión de seguimiento para mantenerla como ‘foto actualizada’ del proyecto.",
            },

            {
              type: "image",
              src: "https://new.growketing.com/wp-content/uploads/2022/07/67-La-distribucion-de-presupuesto-ideal-para-impulsar-el-trafico-en-retail.jpg",
              alt: "Distribución presupuestal",
              caption:
                "Vincular costos a acciones facilita priorizar y rendir cuentas.",
            },

            {
              type: "paragraph",
              text: "Para el componente presupuestal, tres prácticas elevan la calidad de la ejecución. Primero, diferenciar costos directos (insumos de la acción) e indirectos (gestión, comunicación, mantenimiento) para evitar subestimaciones que ‘ahogan’ la operación. Segundo, adoptar una lógica de presupuesto base-cero para partidas nuevas: cada peso debe justificarse por su contribución a la meta. Tercero, registrar ejecución mensual: devengado vs. programado y motivo de desviaciones. Este registro, junto con evidencias de compra y uso (vales, inventarios, fotografías), alimenta el portafolio del proyecto y legitima decisiones. Cuando el presupuesto depende de áreas externas o de asociaciones de familias, incorpora acuerdos formales y cronogramas de ministración. La escasez de recursos económicos no impide innovar si se gobierna bien lo disponible: la clave es ordenar, priorizar y rendir cuentas. // Referencia: desarrollo de recursos humanos/materiales/económicos en el PDF.",
            },

            {
              type: "accordion",
              header: "Buenas prácticas de gestión y control",
              open: false,
              text: "Estandariza requisiciones y compras; mantén inventario actualizado; separa funciones (solicita, autoriza, paga, recibe); publica cortes mensuales; documenta donaciones y préstamos; y establece reglas simples de mantenimiento preventivo. Estas prácticas reducen pérdidas, maximizan el uso de activos y aumentan la confianza de la comunidad en el proyecto.",
            },
          ],
          subthemes: [],
        },
        {
          id: "1.6",
          numbering: "2.6",
          title: "Pertinencia del proyecto",
          content: [
            {
              type: "paragraph",
              text: "La pertinencia es el ‘filtro final’ antes de implementar: juzga si el proyecto, tal como está diseñado, es relevante para la comunidad, coherente con la identidad institucional y viable con los recursos y el contexto. Este alto en el camino evita invertir energía en iniciativas técnicamente correctas pero poco significativas o insostenibles. Para valorarla se recomienda un instrumento simple —lista de cotejo, rúbrica o escala estimativa— que considere al menos: alineación con misión y visión; prioridad del problema atendido; beneficiarios y equidad; coherencia diagnóstica; realismo de metas e indicadores; suficiencia de recursos; análisis de riesgos; y gobernanza para la ejecución y el seguimiento. Idealmente, esta valoración la realiza un grupo ampliado (equipo del proyecto + representantes docentes y familias) y se deja registro de la decisión (seguir, ajustar o detener). La pertinencia no es un juicio abstracto: conecta con el derecho a aprender, con el sentido público de la escuela y con la posibilidad real de cumplir lo prometido. Cuando se aplica con honestidad, fortalece la legitimidad y mejora la tasa de éxito de los proyectos. // Referencia: apartado ‘Pertinencia del proyecto’ del PDF.",
            },

            {
              type: "accordion",
              header: "Instrumentos para valorar la pertinencia",
              open: false,
              text: "Usa una lista de cotejo o rúbrica con criterios y descriptores: relevancia del problema, alineación a misión/visión, impacto estimado, cobertura, viabilidad (tiempo/recursos), riesgos y mitigaciones, indicadores y mecanismos de seguimiento. Asigna puntajes y define un umbral mínimo para continuar. Si el proyecto no alcanza el umbral, documenta ajustes necesarios (alcance, metas, recursos, plazos) y programa una segunda valoración. La clave es convertir la pertinencia en una decisión colegiada, argumentada y trazable.",
            },

            {
              type: "image",
              src: "https://fourweekmba.com/wp-content/uploads/2020/11/gono-go-decision-making.png",
              alt: "Lista de cotejo para decisión go/no-go",
              caption:
                "Una valoración sencilla y colegiada previene implementaciones fallidas.",
            },

            {
              type: "paragraph",
              text: "Tras la valoración, explicita ‘puertas de decisión’: condiciones para arranque (financiamiento, responsables confirmados, materiales críticos), reglas para ajustes durante la ejecución (qué cambios requieren aprobación y por quién) y criterios de éxito intermedio (hitos). Comunica el resultado a la comunidad y actualiza el expediente del proyecto con la versión pertinente. Si el veredicto es ‘ajustar’, no lo vivas como fracaso: es señal de madurez institucional; mejor corregir en mesa que improvisar en el aula. Por último, define cómo se mantendrá viva la pertinencia durante la ejecución: revisiones quincenales o mensuales con el instrumento, y una valoración final que cierre el ciclo de aprendizaje. La pertinencia bien gobernada convierte el proyecto en una promesa responsable: lo que se hará, se puede hacer y vale la pena hacerlo aquí y ahora. // Referencia: uso de instrumentos simples de evaluación previa en el PDF.",
            },

            {
              type: "accordion",
              header: "Criterios de decisión y seguimiento",
              open: false,
              text: "Define umbrales y rutas: si el proyecto ≥ umbral, continúa; si está cerca pero insuficiente, ajusta y revalora; si está lejos, archiva con lecciones. En la ejecución, aplica el mismo instrumento de forma periódica para vigilar que el proyecto siga siendo pertinente ante cambios del contexto. Documentar cada veredicto permite aprender como organización.",
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
          href: "https://www.youtube.com/watch?v=cUw-rOYt1pE", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "“Indicadores: Cómo se definen, interpretan y construyen” https://www.youtube.com/watch?v=cUw-rOYt1pE",
            "¿Cómo redactar objetivos, metas y acciones? Programa Escolar de Mejora Continua https://www.youtube.com/watch?v=_-_JhK7oeOc",
            "¿Qué es un diagrama de Gantt? https://www.youtube.com/watch?v=KGOG7x18lEk",
            "Ruta de mejora escolar — En sala de maestros https://www.youtube.com/watch?v=pb5HRIEivXo",
            "Ejemplo de misión, visión y valores — Colegio San Cristóbal https://www.sancristobalsl.com/proposito-y-vision/",
            "Ejemplo de misión, visión y valores — Colegio Juan Valdez https://www.juandevaldes.es/es/mision-vision-valores",
            "Ejemplo de misión, visión y valores — UAEH Preparatoria N.º 2 https://www.uaeh.edu.mx/campus/preparatoria2/mision.html",
            "Ejemplo de misión, visión y valores — Colegio San Miguel https://colegiosanmiguel.edu.mx/Web/mision.html",
            "Plan de mejora continua — CONALEP Plantel Valle de Aragón https://www.conalepmex.edu.mx/pdf/VozCliente/PMC2019/PMC_2019_Plantel-ValleDeAragon.pdf",
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
            "Casassus, J. (1999). La gestión en busca del sujeto. Santiago de Chile: UNESCO.",
            "CONEVAL. (2014). Manual para el diseño y la construcción de indicadores para el monitoreo de programas sociales de México. Ciudad de México: CONEVAL.",
            "Fierro, C. (1999). Transformando la práctica docente. México: Trillas.",
            "Iglesias Cortizas, M. J. (2006). Diagnóstico escolar: teoría, ámbitos y técnicas. Madrid: Pearson Educación.",
            "Martos Calpena, R. (2009). Cultura corporativa: Misión, Visión y Valores en la gestión estratégica. Barcelona: Universitat Politècnica de Catalunya.",
            "Organización de Estados Iberoamericanos. (2017). El diagnóstico institucional. Buenos Aires: OEI.",
            "SEP. (2017). PEMC: orientaciones. Ciudad de México: SEP.",
            "Universidad Autónoma de Nayarit. (2014). Proyectos de gestión directiva. Tepic, México: Universidad Autónoma de Nayarit.",
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
