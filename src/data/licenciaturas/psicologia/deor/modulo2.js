/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LPSIC",
  courseId: "LPSIC-DO",
  id: "LPSIC-DO-M2",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Desarrollo organizacional",
  title:
    "Módulo 2. Consultoría en DO, diagnóstico organizacional e instrumentos de información",
  semestre: "Quinto",
  teacher: "Enrique Bombela Cuevas",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "El alumno comprenderá el perfil profesional de los consultores en desarrollo organizacional, así como las características principales del diagnóstico organizacional y los instrumentos para su elaboración.",
  competencies: [
    "Reconocer los niveles, competencias y actividades del consultor de desarrollo organizacional.",
    "Analizar las características, ventajas, desventajas y beneficios del diagnóstico organizacional.",
    "Conocer los principales instrumentos para la recopilación de la información necesaria para formular un diagnóstico organizacional.",
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

    /* 3. Unidad principal */
    {
      id: "3",
      numbering: "Unidad 3",
      title: "La profesión de la consultoría en desarrollo organizacional",
      content: [
        {
          type: "paragraph",
          text: "La consultoría en desarrollo organizacional (DO) se define como la práctica profesional mediante la cual un especialista externo —o un equipo— apoya a una organización para resolver problemas administrativos y de desempeño a través de procesos de cambio planificados. Su foco no es únicamente “arreglar” personas o procesos aislados, sino intervenir de forma integral sobre cultura, estructura, comunicación, liderazgo y sistemas de trabajo, con el fin de mejorar el clima organizacional y la competitividad de la empresa. Desde esta perspectiva, el consultor de DO combina sensibilidad humana y rigor metodológico: escucha, formula hipótesis, co-diseña soluciones con los actores clave y acompaña la implementación para asegurar resultados sostenibles. La disciplina exige traducir aspiraciones en metas verificables, tratando el cambio como un proceso deliberado donde se aprenden nuevas formas de colaborar y de decidir. Por ello, la consultoría en DO es una herramienta valiosa para organizaciones que buscan crecer, adaptarse al entorno y convertir la mejora continua en una capacidad instalada, no en un evento ocasional.",
        },
        {
          type: "paragraph",
          text: "El ejercicio profesional admite múltiples modalidades de colaboración: diagnósticos focalizados, proyectos de transformación integral, facilitación de equipos directivos, acompañamiento al área de recursos humanos, diseño de intervenciones formativas y revisión de procesos críticos. En todos los casos, el punto de partida es clarificar el alcance: qué problema se pretende resolver, con qué evidencia se demostrará el avance y cuáles son las restricciones técnicas, políticas y de tiempo. Asimismo, el consultor debe explicitar supuestos y condiciones de éxito: patrocinio ejecutivo, participación de mandos medios, disponibilidad de datos y apertura al aprendizaje. Esta claridad inicial protege la relación de trabajo y evita ambigüedades que, más tarde, se traducen en resistencia o expectativas incumplidas. En un mercado dinámico, las organizaciones demandan consultores capaces de combinar visión estratégica con oficio operativo, equilibrando la rapidez de entrega con el cuidado por las personas que sostienen el cambio.",
        },
        {
          type: "paragraph",
          text: "La ética profesional es un pilar de la consultoría en DO. Confidencialidad, objetividad, integridad, competencia técnica y responsabilidad social no son adornos normativos, sino garantías de confianza y de calidad de información. El consultor debe manejar datos sensibles sin exponer a las personas; emitir recomendaciones imparciales aunque resulten incómodas; declarar conflictos de interés; y mantener un compromiso genuino con el bienestar organizacional. Estos principios se formalizan en acuerdos escritos y en prácticas cotidianas: protocolos de manejo de información, reglas claras de reporte, bitácoras de decisiones y espacios de retroalimentación franca. Cuando la conducta del consultor honra estos principios, la organización coopera con mayor apertura; cuando se vulneran, emergen cinismo y bloqueo. En contextos de cambio, la ética es, además, una capacidad técnica: habilita conversaciones difíciles, reduce rumores y sostiene la legitimidad de las decisiones que transforman el sistema de trabajo.",
        },
        {
          type: "paragraph",
          text: "Metodológicamente, la práctica efectiva sigue un hilo: diagnóstico → diseño → implementación → evaluación. El diagnóstico integra datos cuantitativos y cualitativos para distinguir síntomas de causas; el diseño co-crea soluciones con quienes operan el proceso; la implementación orquesta pilotos, acuerdos de interfaz y tableros de seguimiento; la evaluación compara línea base contra resultados, documenta lecciones y ajusta. Esta secuencia se adapta a la realidad de cada empresa, pero su lógica permanece: comprender antes de decidir, decidir antes de ejecutar, ejecutar midiendo y aprender para escalar. El consultor de DO, por tanto, no vende recetas, sino que instala una disciplina de mejora basada en evidencia. Su entrega final no es solo un informe, sino una organización más capaz de diagnosticar, coordinar y aprender por sí misma.",
        },
        {
          type: "paragraph",
          text: "Para seleccionar y contratar servicios de DO, conviene responder preguntas clave que alineen expectativas: ¿qué funciona bien y qué no?, ¿quiénes son afectados y beneficiarios?, ¿qué información existe para dimensionar la brecha?, ¿qué restricciones de presupuesto y tiempo aplican?, ¿qué límites culturales o normativos condicionan la intervención? Con estas respuestas, el consultor formula una propuesta proporcional al desafío, define hitos verificables y acuerda mecanismos de gobernanza (patrocinio, roles, cadencias de revisión). Las competencias esperadas incluyen pensamiento sistémico, facilitación de grupos, manejo de datos, diseño de procesos, comunicación ejecutiva y gestión del cambio. El éxito no se mide por la elocuencia del diagnóstico, sino por la capacidad de traducirlo en acuerdos operativos, comportamientos observables y resultados sostenidos en calidad, tiempo, costo, seguridad y clima.",
        },

        {
          type: "accordion",
          header: "Nivel 1 — Ideas fuerza de la unidad",
          open: false,
          text: "Consultoría en DO = cambio planificado con rigor y ética; foco en sistema de trabajo, no en síntomas; relación basada en acuerdos claros, evidencia y aprendizaje; éxito = capacidades instaladas y resultados sostenibles.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Conexiones prácticas",
          open: false,
          text: "Contrato de trabajo (alcance, métricas, riesgos); protocolo de confidencialidad; portafolio de iniciativas priorizado; tablero antes–después; rituales de gestión (reuniones breves, retrospectivas, 1:1) para sostener la implementación.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ruta de estudio sugerida",
          open: false,
          text: "1) Revisar principios éticos y decálogo del consultor; 2) practicar el set de preguntas iniciales al cliente; 3) armar plantilla de diagnóstico y plan de trabajo; 4) definir indicadores y cadencias; 5) preparar guía de devolución de hallazgos.",
        },
      ],
      subthemes: [
        {
          id: "3.1",
          numbering: "3.1",
          title: "Preguntas claves para la profesión de la consultoría",
          content: [
            {
              type: "paragraph",
              text: "Antes de emitir una propuesta, el consultor en desarrollo organizacional (DO) formula un conjunto de preguntas estratégicas que sitúan el problema en su contexto real. La primera batería busca contrastar percepción y evidencia: ¿qué está funcionando bien y qué no?, ¿desde cuándo?, ¿con qué variabilidad?, ¿cómo lo sabemos? Esta indagación obliga a distinguir síntomas (retrasos, quejas, rotación) de causas sistémicas (metas contradictorias, información tardía, roles ambiguos). Pedir ejemplos concretos, documentos y métricas previas evita diagnósticos presuntivos y focaliza el esfuerzo en aquello que el sistema ya mide o puede medir con facilidad. El objetivo no es “cazar culpables”, sino construir un lenguaje compartido sobre el desempeño actual para que la organización tome decisiones informadas sobre alcance, secuencia y prioridades del cambio.",
            },
            {
              type: "paragraph",
              text: "Un segundo bloque de preguntas identifica actores: ¿quiénes son los afectados —y de qué forma específica— por unidad, proceso o rol? ¿quiénes serían los beneficiarios inmediatos si el problema se resolviera? Este mapeo de partes interesadas permite delinear el sistema‑cliente, localizar fronteras críticas (puntos de traspaso entre áreas) y estimar el costo político de la intervención. Pedir que se representen los flujos en un diagrama SIPOC (entradas‑proceso‑salidas‑clientes) facilita convertir narrativas en procesos, haciendo visibles acoplamientos defectuosos y reglas implícitas que hoy operan como restricciones. La claridad de ‘quién recibe qué, cómo y cuándo’ es el prerrequisito de cualquier plan de cambio responsable.",
            },
            {
              type: "paragraph",
              text: "El consultor explora recursos positivos existentes: ¿qué colaboradores o equipos son eficaces y por qué?, ¿qué prácticas podrían transferirse?, ¿qué acuerdos de interfaz ya funcionan? Identificar islas de excelencia ofrece materia prima para diseñar pilotos con mayor probabilidad de adopción. Asimismo, se pregunta por información disponible: reportes operativos, estados financieros, encuestas, manuales, minutas. Con base en esa evidencia se define la línea base para evaluar mejoras. Sin línea base, cualquier avance es opinable. Por ello, el contrato de trabajo debe incluir desde el inicio qué indicadores se usarán, de dónde provienen y quién los actualiza.",
            },
            {
              type: "paragraph",
              text: "Otro conjunto de preguntas aterriza factibilidad: ¿qué elementos consideran necesarios para la solución?, ¿con qué presupuesto cuentan para intervenir?, ¿qué tiempo real tienen los colaboradores para participar en mediciones y talleres?, ¿qué ventanas operativas existen para pilotos? Esta conversación evita diseños grandilocuentes que mueren por falta de recursos. El DO profesional formula alternativas escalonadas (mínima, intermedia, ambiciosa) con hipótesis explícitas sobre costo‑beneficio, riesgos y criterios de escalamiento. La honestidad metodológica —‘esto sí podemos, esto no todavía’— protege la relación y permite sostener el esfuerzo en el tiempo.",
            },
            {
              type: "paragraph",
              text: "Las limitaciones y riesgos se abordan sin eufemismos: ¿qué barreras culturales, sindicales, regulatorias o tecnológicas podrían frenar la implementación?, ¿qué experiencias previas de cambio condicionan la confianza?, ¿qué suposiciones están guiando decisiones hoy? Visibilizar restricciones ayuda a decidir dónde conviene fortalecer fuerzas impulsoras (patrocinio, métricas, capacitación) y dónde reducir restricciones (reglas confusas, cargas de trabajo, incentivos cruzados). Esta lógica, inspirada en el análisis de fuerzas de Lewin, convierte la entrevista inicial en un ejercicio de diseño: no sólo se recoge información, se ordena para intervenir con proporcionalidad.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el consultor discute criterios de éxito y gobernanza: ¿qué evidencia demostrará que la intervención funcionó?, ¿qué cadencias de revisión adoptaremos?, ¿quién decide y quién ejecuta?, ¿cómo escalaremos o retiraremos cambios según resultados? Definir desde el principio cómo se aprenderá protege de la ‘fatiga del cambio’ y evita proyectos sin cierre. La propuesta resultante sintetiza problema, alcance, entregables, responsabilidades, plan de medición y presupuesto. Así, las preguntas dejan de ser un trámite comercial y se convierten en el primer acto del DO: construir un marco compartido para entender, decidir y actuar.",
            },
            {
              type: "paragraph",
              text: "Ejemplos de preguntas guía (del material): qué funciona y qué no; quiénes son afectados y beneficiarios; qué colaboradores son referencia positiva; qué información existe; qué elementos consideran necesarios; presupuesto disponible; tiempo real del personal para aportar datos; y qué limitaciones prevén para ejecutar correcciones. En conjunto, estas preguntas ordenan la conversación, transforman opiniones en hipótesis y habilitan un diseño proporcional al desafío y a los recursos de la organización.",
            },
            {
              type: "accordion",
              header: "Bloques de indagación",
              open: false,
              text: "1) Desempeño actual y evidencia; 2) Actores y fronteras; 3) Recursos positivos y datos disponibles; 4) Factibilidad (presupuesto y tiempo); 5) Limitaciones y riesgos; 6) Criterios de éxito y gobernanza.",
            },
            {
              type: "accordion",
              header: "Entregables de la entrevista inicial",
              open: false,
              text: "Mapa SIPOC; lista de indicadores (línea base); hipótesis causales; riesgos y restricciones; alternativas de alcance; propuesta con métricas y cadencias.",
            },
          ],
        },
        {
          id: "3.2",
          numbering: "3.2",
          title:
            "Actividades que puede desempeñar el consultor de desarrollo organizacional",
          content: [
            {
              type: "paragraph",
              text: "Las actividades del consultor de DO abarcan el ciclo completo de cambio planeado. Inician con el diagnóstico organizacional: evaluación de la ‘salud’ del sistema para identificar fortalezas, debilidades, oportunidades y amenazas. Aquí se triangulan fuentes (observación del trabajo real, entrevistas, encuestas, documentos) y se mapean procesos críticos con herramientas como SIPOC y RACI. El resultado es un conjunto de hipótesis causales priorizadas y una línea base de indicadores de calidad, tiempo, costo, seguridad, clima y rotación. El consultor convierte datos dispersos en una narrativa operativa que explique por qué ocurre lo que ocurre y dónde intervenir con la mejor relación impacto/esfuerzo.",
            },
            {
              type: "paragraph",
              text: "A partir del diagnóstico, el consultor diseña e implementa estrategias de desarrollo: portafolios de iniciativas que integran rediseño de procesos, acuerdos de interfaz entre áreas, tableros de seguimiento, desarrollo de liderazgo y ajustes en estructuras y roles. Estas estrategias buscan elevar productividad y satisfacción, reducir desperdicio y mejorar la experiencia del cliente. Se privilegian pilotos de bajo riesgo con hipótesis explícitas y criterios de escalamiento. La gobernanza incluye comités de transformación, cadencias (diarias para operación, semanales para mandos, mensuales para dirección) y reglas de decisión que evitan la parálisis por análisis.",
            },
            {
              type: "paragraph",
              text: "La facilitación de talleres y capacitaciones es otra actividad central. No se limita a cursos; se diseñan experiencias de práctica guiada que conecten conocimiento con tarea: reuniones 1:1, feedback efectivo, solución de problemas, retrospectivas y acuerdos de interfaz. La formación acompaña a la implementación para reforzar los nuevos comportamientos y estándares. El consultor actúa como facilitador del aprendizaje colectivo, cuidando la seguridad psicológica y la transferencia al puesto mediante dinámicas breves, rúbricas de práctica y coaching a mandos medios.",
            },
            {
              type: "paragraph",
              text: "En proyectos de cambio —fusiones, reestructuras, transformaciones digitales— el consultor gestiona la transición: alinea líderes en torno a objetivos, clarifica mandatos, rediseña procesos afectados, define planes de comunicación y monitorea riesgos de carga de trabajo y salud psicosocial. También media conflictos interáreas traduciendo posiciones en intereses, estableciendo reglas de colaboración y protocolos de escalamiento. El prisma es sistémico: cada decisión técnica se valida por su efecto en personas, flujos y resultados.",
            },
            {
              type: "paragraph",
              text: "Otra actividad clave es la evaluación del impacto. Se diseñan métricas antes–después, se atribuyen efectos con prudencia y se documentan lecciones aprendidas. La evaluación no es trámite de cierre; alimenta un repositorio de prácticas que permite replicar éxitos y evitar errores. Este aprendizaje institucional reduce costos futuros de cambio y acelera la curva de adopción. El consultor asegura que los tableros se integren al gobierno del día a día, para que la mejora deje de depender del proyecto y se convierta en hábito.",
            },
            {
              type: "paragraph",
              text: "La colaboración con líderes atraviesa todas las actividades: clarificar expectativas, remover obstáculos, balancear carga y reconocer avances. El consultor también apoya la planificación estratégica, la gestión del talento (sucesión, desarrollo) y la actualización de manuales y procedimientos cuando el rediseño lo exige. Su valor agregado no es ‘hacer por la organización’, sino construir capacidades: tras cada intervención deben quedar estándares, rituales y personas capaces de sostener la mejora sin tutelaje externo.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el consultor cuida la comunicación: diseña mensajes honestos, comprensibles y oportunos que conectan datos con sentido. En ambientes de incertidumbre, la comunicación clara reduce rumores y ancla expectativas realistas sobre tiempos y resultados. Integrar estas actividades en un hilo coherente —diagnóstico, diseño, facilitación, gestión del cambio, evaluación y comunicación— define la práctica profesional del DO y su contribución tangible al desempeño y al bienestar organizacional.",
            },
            {
              type: "accordion",
              header: "Portafolio típico de actividades",
              open: false,
              text: "Diagnóstico; diseño e implementación; facilitación y formación; gestión de proyectos de cambio; evaluación de impacto; apoyo a liderazgo y estrategia; comunicación y coordinación interáreas.",
            },
            {
              type: "accordion",
              header: "Entregables esperados",
              open: false,
              text: "Mapa de procesos; cartera priorizada; acuerdos de interfaz; tableros de indicadores; guía de talleres; plan de comunicación; reporte de evaluación con lecciones y estándares actualizados.",
            },
          ],
        },
        {
          id: "3.3",
          numbering: "3.3",
          title: "Competencias del profesional del desarrollo organizacional",
          content: [
            {
              type: "paragraph",
              text: "El profesional de desarrollo organizacional (DO) integra un repertorio de competencias técnicas y humanas que le permiten diagnosticar, diseñar e implementar cambios con rigor y ética. No basta con conocer marcos conceptuales; se requiere oficio para leer sistemas reales, conversar con evidencia y convertir hallazgos en decisiones operables. El punto de partida es la competencia relacional: construir una alianza de trabajo con la dirección y con los equipos, basada en escucha activa, respeto y claridad de expectativas. Esta alianza no es complacencia: autoriza al consultor a decir verdades incómodas con cuidado y a proteger la confidencialidad de quienes aportan información. A la par, el DO cultiva criterio para distinguir síntomas de causas y priorizar palancas con mejor relación impacto/esfuerzo, evitando el activismo de intervenciones vistosas pero poco efectivas.",
            },
            {
              type: "paragraph",
              text: "Entre las destrezas nucleares destaca la capacidad de tratar a los clientes con profesionalismo y calidez. Implica presencia, puntualidad, claridad, cortesía y capacidad de modular el lenguaje según la audiencia. La escucha activa permite captar expectativas, miedos y esperanzas que rara vez aparecen en los indicadores, pero que condicionan la adopción de cualquier rediseño. El consultor eficiente evita el tecnicismo vacío y adopta un lenguaje claro, directo y respetuoso; sabe preguntar sin juzgar, pide ejemplos y documentos, y valida su comprensión para no construir sobre supuestos frágiles. Esta competencia genera confianza y abre la puerta a información de calidad.",
            },
            {
              type: "paragraph",
              text: "Reconocer la verdadera necesidad del cliente es otra competencia crítica. Se logra mediante entrevistas guiadas por hipótesis, revisión de procesos (SIPOC), análisis de datos y contraste de puntos de vista. El objetivo es separar ‘lo que duele’ de ‘lo que lo causa’. El DO formula preguntas que iluminan fronteras (entre áreas y con el entorno), reglas implícitas, incentivos cruzados y cuellos de botella. Con esa evidencia, traduce la narrativa en un mapa de problemas‑causas y en una línea base de indicadores. Sin esa claridad, las soluciones se vuelven genéricas; con ella, cada intervención se diseña a medida del sistema‑cliente y de sus restricciones reales de tiempo, presupuesto y capacidad de absorción.",
            },
            {
              type: "paragraph",
              text: "La habilidad para presentar soluciones efectivas combina síntesis, sentido común y diseño comunicacional. El consultor convierte diagnósticos extensos en propuestas comprensibles, con objetivos verificables, responsables, cronograma y métricas. Usa ayudas visuales (tableros, flujos, matrices RACI) y relata casos comparables para anclar expectativas. Evita prometer milagros: enuncia supuestos, riesgos y criterios de éxito. Esta competencia se evalúa en la claridad de los entregables y en la facilidad con que los equipos pueden llevar la propuesta a la práctica sin tutela constante. La calidad de una solución se mide por su adopción y por su efecto en resultados, no por la elocuencia del documento.",
            },
            {
              type: "paragraph",
              text: "La adaptabilidad y la personalización del servicio son indispensables. Cada empresa es un sistema singular por su historia, estructura, liderazgo y cultura. Lo que funcionó en un cliente puede dañar a otro. El DO ajusta intervenciones a madurez, capacidad técnica y marcos regulatorios; pacta alcances realistas, selecciona pilotos de bajo riesgo y prevé mecanismos de escalamiento. Trabaja en equipo con el cliente, sin apropiarse de decisiones que corresponden a la gestión. La flexibilidad no es improvisación: es disciplina para experimentar, medir y aprender, retirando lo que no funciona y estandarizando lo que sí.",
            },
            {
              type: "paragraph",
              text: "El compromiso profesional se expresa en cuidado por la relación, entrega de valor y gestión honesta de expectativas. El consultor sostiene la energía del cambio modelando paciencia y foco, especialmente cuando el cliente llega con urgencias y cansancio. Motiva sin manipular, reconoce avances y sostiene conversaciones difíciles cuando los acuerdos se incumplen. La credibilidad se construye cumpliendo promesas pequeñas, protegiendo la confidencialidad y diciendo la verdad aunque sea incómoda. Una competencia silenciosa, pero decisiva, es sostener el contrato psicológico: claridad sobre para qué estamos, qué haremos y qué no, con qué recursos y en qué plazos.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el DO domina herramientas de análisis y de facilitación: diseño de instrumentos (entrevistas, encuestas), análisis de datos, mapeo de procesos, acuerdos de interfaz, construcción de tableros, conducción de talleres, coaching a mandos medios y evaluación antes–después. Es visionario para anticipar riesgos y oportunidades; paciente para acompasar ritmos; y riguroso para documentar decisiones y aprendizajes. Esta combinación convierte su intervención en una transferencia de capacidades que permanece cuando el proyecto concluye.",
            },
            {
              type: "accordion",
              header: "Competencias clave (según material)",
              open: false,
              text: "Trato profesional al cliente; detección de la verdadera necesidad; presentación de soluciones viables y claras; adaptabilidad; compromiso; capacidad de motivar; trabajo en equipo; personalización; visión; paciencia.",
            },
            {
              type: "accordion",
              header: "Indicadores conductuales",
              open: false,
              text: "Entregables claros y útiles; entrevistas que separan síntomas/causas; pilotos con métricas; decisiones documentadas; confidencialidad respetada; lenguaje comprensible; aprendizaje institucionalizado.",
            },
          ],
        },
        {
          id: "3.4",
          numbering: "3.4",
          title: "Niveles de los consultores",
          content: [
            {
              type: "paragraph",
              text: "Los consultores de DO se clasifican por nivel de experiencia, responsabilidad y rol (interno o externo). Esta arquitectura de carrera ordena expectativas, define tareas y facilita el aprendizaje entre pares. En todos los niveles rige la misma ética y compromiso con resultados, pero difieren el tipo de problemas que enfrentan y la autonomía para decidir. Entender esta gradación permite conformar equipos balanceados: quienes aprenden ganan exposición a casos reales y quienes lideran garantizan dirección y cuidado de la relación con el cliente. La combinación adecuada de niveles reduce riesgos, acelera entregas y mejora la transferencia de capacidades a la organización.",
            },
            {
              type: "paragraph",
              text: "El nivel Asistente es la puerta de entrada. Su foco es aprender el oficio con tareas de apoyo: preparación de instrumentos, levantamiento de datos, sistematización de información, co‑facilitación y elaboración de minutas. Practica escucha, puntualidad y prolijidad documental. Aporta mirada fresca y preguntas básicas que, bien encauzadas, destapan supuestos. Trabaja bajo supervisión cercana y recibe retroalimentación frecuente. La medida de su progreso es la confiabilidad: lo que entrega es correcto, completo y a tiempo.",
            },
            {
              type: "paragraph",
              text: "El nivel Senior participa activamente en el desarrollo de proyectos: formula hipótesis, conduce entrevistas, mapea procesos y colabora en el diseño de intervenciones. Gestiona la relación cotidiana con mandos medios del cliente y cuida el contrato de trabajo (alcances, tiempos, indicadores). Traduce datos en hallazgos y hallazgos en opciones de diseño. Su juicio técnico comienza a guiar decisiones y se espera que modele comunicación clara y respeto por la confidencialidad. También entrena a asistentes y asegura coherencia metodológica en los entregables.",
            },
            {
              type: "paragraph",
              text: "El Supervisor coordina frentes de trabajo, asegura calidad y consistencia entre equipos y gestiona riesgos operativos. Resuelve bloqueos de agenda, escalamiento y acceso a información; facilita acuerdos de interfaz y se hace cargo de la devolución de hallazgos a grupos ejecutivos. El Gerente lidera varios proyectos, balancea portafolios, cuida la rentabilidad y la satisfacción del cliente, y toma decisiones sobre priorización y secuenciación de intervenciones. Ambos niveles requieren dominio técnico y madurez para conversar con distintas audiencias, desde el piso operativo hasta el consejo.",
            },
            {
              type: "paragraph",
              text: "El Director encabeza prácticas por sector o función: diseña propuestas complejas, construye alianzas, garantiza estándares de la firma y resuelve dilemas éticos. El Socio asume responsabilidades estratégicas y de gobierno: define posicionamiento, invierte en desarrollo de metodologías propias, tutela la cultura de la firma y resguarda su reputación. En todos los casos, el liderazgo es servicio: habilitar a otros para rendir mejor y aprender más rápido. La senioridad no se mide sólo por años, sino por la capacidad de generar resultados sostenibles preservando la dignidad de las personas y la confianza del cliente.",
            },
            {
              type: "paragraph",
              text: "La transición entre niveles exige evidencias: casos liderados, decisiones acertadas bajo presión, calidad de entregables, formación de talento y comentarios positivos de clientes. Un plan de desarrollo serio incluye mentoring, rotación por tipos de proyecto y espacios de reflexión sobre dilemas. En consultoría interna, además, se espera habilidad para navegar la política organizacional sin capturarse por intereses de facción; en consultoría externa, se cuida el conflicto de interés entre cuentas y se respetan cláusulas de confidencialidad y no captación de personal.",
            },
            {
              type: "paragraph",
              text: "En proyectos complejos conviene declarar la estructura de gobierno: patrocinador ejecutivo, comité de transformación, líder de proyecto del cliente y líder del equipo de consultoría, con sus responsabilidades y cadencias definidas. Asignar con intención Asistentes, Seniors, Supervisores y Gerentes a cada frente —diagnóstico, diseño, implementación, evaluación— permite cubrir profundidad analítica y capacidad de ejecución. Esta claridad evita solapamientos, acelera decisiones y protege el aprendizaje de los profesionales en formación.",
            },
            {
              type: "accordion",
              header: "Mapa de niveles y responsabilidades",
              open: false,
              text: "Asistente (apoyo, datos); Senior (hipótesis, relación operativa); Supervisor (coordinación, calidad); Gerente (portafolio, liderazgo); Director (prácticas, alianzas); Socio (estrategia, reputación).",
            },
            {
              type: "accordion",
              header: "Ruta de madurez profesional",
              open: false,
              text: "Evidencias de crecimiento: confiabilidad → criterio técnico → liderazgo de equipos → gobierno de portafolio → construcción de metodologías → resguardo ético y reputacional.",
            },
          ],
        },
        {
          id: "3.5",
          numbering: "3.5",
          title:
            "¿Por qué acuden las empresas a un consultor de desarrollo organizacional?",
          content: [
            {
              type: "paragraph",
              text: "Las organizaciones recurren a consultores de DO cuando enfrentan problemas administrativos y de desempeño que superan su capacidad interna de diagnóstico o de ejecución. Las dolencias típicas se ubican en la estructura (roles y autoridad difusos), en los procesos productivos (variabilidad, retrabajos), en recursos humanos (rotación, ausentismo, liderazgo frágil), en ventas (previsiones poco confiables) y en finanzas (costos crecientes, liquidez tensa). Más que ‘apagar incendios’, buscan elevar eficiencia, productividad, rentabilidad y colaboración transversal. El consultor aporta método, perspectiva externa y disciplina para priorizar. Su valor diferencial es convertir problemas vagos en hipótesis accionables, diseñar pilotos y traducir resultados en estándares estables.",
            },
            {
              type: "paragraph",
              text: "Una razón frecuente es la necesidad de alinear estrategias, políticas y prácticas con objetivos institucionales. La empresa detecta desajustes entre lo que declara y lo que sucede en el trabajo real. El consultor co‑diseña estrategias que aterrizan en procesos (flujo, roles, métricas) y en comportamientos (reuniones efectivas, feedback, coordinación). Así, los objetivos dejan de ser slogans y se convierten en acuerdos operativos revisados en tableros. La alineación reduce fricción, sobrecostos y tiempos de ciclo, y mejora la experiencia del cliente interno y externo.",
            },
            {
              type: "paragraph",
              text: "Otra causa es optimizar procesos operativos. El DO mapea entradas, transformación y salidas; define criterios de calidad en la fuente; identifica cuellos de botella; y propone rediseños basados en datos. El objetivo es eliminar desperdicios, estabilizar variabilidad y acercar decisiones al punto de valor. Esta optimización se sostiene con acuerdos de interfaz entre áreas y con estándares que describen el ‘cómo se hace el trabajo’ de manera clara y auditable. El resultado es mejor flujo, menos retrabajo y mayor confiabilidad en el cumplimiento de compromisos con clientes.",
            },
            {
              type: "paragraph",
              text: "También solicitan apoyo para actualizar manuales de organización y procedimientos. En muchos casos, los documentos existen pero no reflejan el trabajo real. El consultor lidera ejercicios de documentación participativa y de simplificación, de modo que los manuales sean útiles: describan tareas, decisiones, escalamiento y métricas. Cuando los estándares se vuelven herramientas de gestión —no piezas de biblioteca—, la empresa gana disciplina sin caer en burocracia improductiva.",
            },
            {
              type: "paragraph",
              text: "El desarrollo de personas es otra motivación. Las organizaciones requieren programas de capacitación que conecten con la tarea: liderazgo de servicio, solución de problemas, 1:1 efectivos, acuerdos de interfaz, seguridad y salud psicosocial. El consultor diseña experiencias de aprendizaje en el puesto, con práctica guiada y retroalimentación específica, y acompaña a mandos medios para que modelen los comportamientos esperados. Con ello, la formación deja de ser evento y se convierte en capacidad instalada.",
            },
            {
              type: "paragraph",
              text: "Crear una cultura de trabajo positiva y preparada para el cambio es objetivo recurrente. El DO ayuda a construir confianza, transparencia informativa y rituales de coordinación. En tiempos de transformación tecnológica, cultural y económica, también facilita la adaptación: gestiona los duelos por lo que se deja atrás, protege la dignidad y asegura que la innovación no comprometa la seguridad ni la calidad. Esta gestión del cambio responsable reduce resistencia y eleva la velocidad de aprendizaje organizacional.",
            },
            {
              type: "paragraph",
              text: "A fin de cuentas, se contrata a la consultoría por resultados. Un buen proyecto de DO define desde el principio los indicadores de éxito y su línea base; genera casos de negocio prudentes; instala tableros visibles; y documenta lecciones. La condición de éxito es dual: patrocinio real de la dirección y participación de quienes ejecutan el trabajo. Sin ambos, la intervención corre riesgo de quedar en discurso. Con ambos, el retorno se vuelve tangible en calidad, tiempo, costo, servicio, clima y seguridad.",
            },
            {
              type: "accordion",
              header: "Problemas típicos que motivan la contratación",
              open: false,
              text: "Estructura confusa; procesos variables; rotación/ausentismo; liderazgo frágil; costos altos; ventas impredecibles; manuales obsoletos; clima deteriorado; baja velocidad de aprendizaje.",
            },
            {
              type: "accordion",
              header: "Beneficios esperados (según material)",
              open: false,
              text: "Estrategias alineadas; procesos optimizados; manuales útiles; formación vinculada a la tarea; cultura de colaboración; adaptación responsable al cambio; mejora de indicadores clave.",
            },
          ],
        },
        {
          id: "3.6",
          numbering: "3.6",
          title: "Decálogo de conducta del consultor",
          content: [
            {
              type: "paragraph",
              text: "El decálogo de conducta sintetiza hábitos profesionales que sostienen la credibilidad del consultor. No es una lista decorativa: guía decisiones diarias y protege la relación con el cliente. El primer rasgo es la capacidad de convencer con integridad: las propuestas se apoyan en evidencia y en casos, no en promesas grandilocuentes. Convencer no es manipular; es mostrar con claridad el problema, la hipótesis de solución y la ruta de aprendizaje. Un consultor creíble se gana la confianza demostrando competencia, consistencia y prudencia al estimar impactos y tiempos.",
            },
            {
              type: "paragraph",
              text: "El segundo hábito es abrir espacios de demostración sin costo cuando conviene: seminarios breves o sesiones de prueba que permiten a la organización experimentar la metodología y al consultor comprender el contexto. El objetivo es reducir asimetrías de información y alinear expectativas. Estos espacios, bien diseñados, se enfocan en problemas reales, muestran herramientas (SIPOC, RACI, tableros) y establecen criterios de éxito observables. Funcionan como contratos psicológicos iniciales: si agregan valor en pequeño, hay base para escalar.",
            },
            {
              type: "paragraph",
              text: "Tercero, contribuir a la comunidad profesional mediante artículos y materiales públicos. Escribir obliga a pensar mejor, somete ideas a escrutinio y devuelve aprendizajes a la red que sostiene la práctica. Publicar también responsabiliza: cuando se defiende un enfoque en papel, es más difícil traicionarlo en campo. Esta visibilidad se complementa con participación en foros y con mentoría a profesionales más jóvenes, elevando el estándar de la profesión.",
            },
            {
              type: "paragraph",
              text: "Cuarto, ofrecer más de lo que se promete: ‘no dar gato por liebre’, sino —como reza la sátira— ‘liebre por gato’. En términos prácticos: entregar a tiempo y con calidad, añadir insights útiles no contemplados y documentar lecciones transferibles. Exceder expectativas no es trabajar de más sin contrato, sino cuidar detalles que elevan la utilidad del entregable. La honestidad intelectual exige explicitar límites y supuestos; la generosidad profesional se expresa en claridad y orden, para que la organización pueda sostener lo construido.",
            },
            {
              type: "paragraph",
              text: "Quinto, dedicar tiempo regular a actualizarse. La disciplina de estudio mantiene la práctica viva, evita recetas y permite integrar marcos contemporáneos —lean, agile, aprendizaje organizacional— con la tradición del DO. Esta actualización se traduce en mejores diagnósticos, diseños más sobrios y decisiones fundadas. Formarse no es lujo: es obligación ética para no experimentar irresponsablemente con las organizaciones.",
            },
            {
              type: "paragraph",
              text: "Sexto, comunicar, comunicar, comunicar. La transparencia informativa reduce ansiedad y rumores; alinea expectativas y acelera decisiones. Comunicar no es inundar de correos: es definir cadencias y contenidos pertinentes para cada audiencia. Séptimo, establecer un diagnóstico clave antes de intervenir: nunca prescribir sin comprender. Octavo, proponer soluciones factibles y proporcionales. Noveno, aportar experiencia y conocimiento de manera generosa y humilde. Décimo, desarrollar metodologías propias que diferencien la práctica, documentadas y compartibles.",
            },
            {
              type: "paragraph",
              text: "Este decálogo convierte la reputación en un activo gestionado conscientemente. Practicado con constancia, protege a la organización de modas y al consultor de la tentación del atajo. En conjunto, impulsa una profesión que aumenta capacidades y respeta la dignidad de las personas, fin último de cualquier cambio organizacional serio.",
            },
            {
              type: "accordion",
              header: "Decálogo (síntesis operativa)",
              open: false,
              text: "Convencer con evidencia; demostraciones con valor; compartir conocimiento; exceder expectativas con honestidad; actualización continua; comunicación disciplinada; diagnóstico antes de intervenir; soluciones factibles; experiencia generosa; metodologías propias.",
            },
            {
              type: "accordion",
              header: "Autoevaluación rápida",
              open: false,
              text: "¿Mi última propuesta cita evidencia y riesgos? ¿Ofrecí una demo útil? ¿Qué publiqué este trimestre? ¿Qué excedente de valor entregué? ¿Qué aprendí y apliqué? ¿Cómo están mis cadencias de comunicación? ¿Qué hipótesis diagnosticadas sostienen mis intervenciones?",
            },
          ],
        },
        {
          id: "3.7",
          numbering: "3.7",
          title: "Principios éticos",
          content: [
            {
              type: "paragraph",
              text: "Los principios éticos sostienen la credibilidad del consultor y protegen a las personas y a las organizaciones. La confidencialidad es primera línea de defensa: toda información recabada se resguarda con protocolos (anonimización, control de acceso, resguardo de archivos) y se usa estrictamente para los fines acordados. Compartir datos sin autorización o de manera que permita identificar a informantes vulnera la confianza y contamina futuras mediciones. La confidencialidad bien gestionada no es opacidad: los hallazgos se devuelven en forma agregada, útil y accionable, cuidando identidades.",
            },
            {
              type: "paragraph",
              text: "La objetividad exige independencia de juicio. El consultor reconoce sesgos, declara conflictos de interés y fundamenta recomendaciones en evidencia, no en simpatías o conveniencias. Objetividad no equivale a frialdad; implica cuidado por las personas y por la veracidad, sin maquillar datos para complacer a nadie. Cuando la evidencia contradice supuestos de la dirección, el deber profesional es reportarlo con respeto y claridad, ofreciendo alternativas para resolver o acotar riesgos.",
            },
            {
              type: "paragraph",
              text: "La integridad se expresa en honestidad, transparencia y coherencia entre medios y fines. Se dice la verdad con cuidado, se cumplen compromisos y se aceptan límites. La integridad prohíbe copiar metodologías ajenas sin atribución, inflar logros o esconder errores. En proyectos de alto impacto humano, la integridad incluye salvaguardas explícitas para la dignidad y la salud psicosocial de los colaboradores, priorizando intervenciones que minimicen daño y maximicen aprendizaje.",
            },
            {
              type: "paragraph",
              text: "La competencia técnica es un deber: quien no tiene la habilidad para una intervención debe declinarla o asociarse con quien la tenga. Se mantiene formación continua, se actualizan métodos y se validan instrumentos. La competencia también es organizativa: se diseña gobernanza, se cuidan cadencias y se dotan recursos. La ignorancia operativa es falta ética cuando se presenta como pericia.",
            },
            {
              type: "paragraph",
              text: "La responsabilidad social amplía el foco: las decisiones organizacionales tienen efectos sobre comunidades, proveedores y medio ambiente. El consultor pondera consecuencias y evita recomendar atajos que vulneren derechos o precaricen el trabajo. Los proyectos se evalúan no sólo por su ROI financiero, sino por su contribución a una convivencia más justa y segura. En este sentido, el DO es también un compromiso cívico.",
            },
            {
              type: "paragraph",
              text: "Llevar estos principios a la práctica requiere rituales: contratos claros, cláusulas de confidencialidad, protocolos de manejo de datos, carta de riesgos, comités de decisión, bitácoras de cambios y auditorías de proceso. La ética se vuelve visible cuando está documentada y es auditable. Así, deja de depender del carácter del individuo para anclarse en el sistema de trabajo.",
            },
            {
              type: "paragraph",
              text: "Los dilemas éticos son inevitables: demandas de revelar fuentes, presiones para acelerar sin diagnóstico, expectativas de resultados imposibles. El consultor responsable prepara respuestas anticipadas: explica límites, propone alternativas y, si es necesario, se retira. La lealtad primera es con la verdad y con la dignidad humana. Ese es el estándar que separa la consultoría madura de la mercenaria.",
            },
            {
              type: "accordion",
              header: "Principios (lista del material)",
              open: false,
              text: "Confidencialidad; objetividad; integridad; competencia; responsabilidad.",
            },
            {
              type: "accordion",
              header: "Protocolos mínimos",
              open: false,
              text: "Acuerdos de confidencialidad; matriz de acceso a datos; devolución agregada; declaración de conflictos; bitácora de decisiones; plan de riesgos éticos.",
            },
          ],
        },
        {
          id: "3.8",
          numbering: "3.8",
          title: "Ética profesional del consultor de desarrollo organizacional",
          content: [
            {
              type: "paragraph",
              text: "La ética profesional del consultor de DO se concreta en la relación de confianza con el cliente y en el cuidado por las personas afectadas por las intervenciones. Manejar relaciones, intervenciones e información confidencial exige estándares altos de conducta y controles formales. El consultor establece desde el inicio límites de rol (no sustituir la autoridad de la dirección), canales de comunicación y criterios de reporte. La relación se mide por transparencia, previsibilidad y respeto: se evitan promesas que no puedan cumplirse, se explicitan riesgos y se cuid a la dignidad en cada conversación.",
            },
            {
              type: "paragraph",
              text: "Las buenas prácticas recomendadas por asociaciones profesionales enfatizan eficiencia, calidad, honestidad y responsabilidad. Traducido al día a día: entregables que resuelven el problema, metodologías documentadas, citas y fuentes reconocidas, manejo escrupuloso de datos y rechazo frontal a conflictos de interés. Si el consultor ha trabajado o trabaja con competidores directos, lo declara y acuerda límites; si detecta presiones para ‘fabricar’ resultados, se niega y documenta. La reputación se construye con mil actos pequeños; se destruye con uno solo.",
            },
            {
              type: "paragraph",
              text: "La confidencialidad va más allá de cláusulas contractuales: incluye prácticas de anonimización, segregación de información sensible y custodia segura de archivos. En la devolución de hallazgos, se cuidan identidades y se enfocan patrones. En mediciones, se informa propósito y se solicita consentimiento. La ética también protege a denunciantes de buena fe y previene represalias. Un proyecto que genera miedo erosiona la validez de los datos y sabotea el aprendizaje colectivo.",
            },
            {
              type: "paragraph",
              text: "La gestión del conflicto de interés es otro pilar. El consultor evita recomendar soluciones de proveedores con los que tenga relación económica no declarada. Si participa en procesos de selección, se abstiene cuando hay lazos que comprometan su objetividad. La independencia de criterio se preserva con transparencia radical y con mecanismos de revisión por pares dentro de la firma o del área interna de DO.",
            },
            {
              type: "paragraph",
              text: "El manejo ético de la información incluye definir quién ve qué y para qué. Se establece una matriz de acceso por rol, se destruye información según políticas y se evita el uso de datos fuera del proyecto. En presentaciones públicas se eliminan marcas y se generalizan casos para proteger confidencias. La trazabilidad —quién modificó qué y cuándo— se conserva para auditoría, y se documentan decisiones sobre datos ambiguos o sensibles.",
            },
            {
              type: "paragraph",
              text: "El respeto por la autonomía de la organización es igualmente ético. El consultor acompaña, facilita, reta; no usurpa la dirección. Cuando la tentación de ‘mandar’ surge por la urgencia del cliente, se recuerda que la meta es dejar capacidades instaladas, no dependencia. Por eso, se forma a facilitadores internos, se entregan estándares y se acuerdan cadencias que la empresa puede sostener sola. La ética, así, se alinea con la efectividad: la mejor evidencia del trabajo bien hecho es que los resultados se mantienen sin el consultor.",
            },
            {
              type: "paragraph",
              text: "Finalmente, la ética se cultiva como cultura: discusiones regulares de casos, revisión de dilemas, actualización de códigos y evaluación de cumplimiento. El consultor madura cuando, además de resolver problemas, ayuda a la organización a construir su propio sistema de integridad: reglas claras, consecuencias proporcionadas y aprendizaje de incidentes. Este legado fortalece la licencia social para operar y protege la dignidad de quienes hacen posible la creación de valor.",
            },
            {
              type: "accordion",
              header: "Buenas prácticas recomendadas",
              open: false,
              text: "Eficiencia y calidad; honestidad; responsabilidad; manejo escrupuloso de datos; declaración de conflictos; límites de rol; consentimiento informado; protección a denunciantes; revisión por pares.",
            },
            {
              type: "accordion",
              header: "Checklist de cumplimiento ético",
              open: false,
              text: "Contrato y confidencialidad firmados; matriz de acceso a datos; plan de devolución; declaración de conflictos; estándares entregados; facilitadores internos formados; bitácora de decisiones y riesgos; auditoría de cierre.",
            },
          ],
        },
      ],
    },

    /* 4. Unidad principal */
    {
      id: "4",
      numbering: "Unidad 4",
      title:
        "El diagnóstico como etapa del proceso de desarrollo organizacional",
      content: [
        {
          type: "paragraph",
          text: "El diagnóstico organizacional inaugura el proceso de desarrollo organizacional porque pone a la vista, con método y evidencia, cómo funciona realmente la institución. No es un trámite previo, sino una investigación aplicada que integra estructura, cultura, procesos y desempeño laboral para identificar brechas y posibilidades de mejora. A partir de fuentes múltiples —encuestas, entrevistas, observación del trabajo y revisión documental— se construye una lectura integral de la situación actual. Esa lectura describe qué ocurre, por qué ocurre y dónde están las palancas con mejor relación impacto/esfuerzo. El foco es práctico: comprender para decidir. En consecuencia, el diagnóstico prepara la ruta de intervención, evita prescripciones genéricas y alinea a los actores clave en torno a un problema bien formulado, un alcance realista y métricas que permitan distinguir opinión de resultado.",
        },
        {
          type: "paragraph",
          text: "Conceptualmente, el diagnóstico es un análisis crítico y sistemático de todos los aspectos relevantes de la organización, orientado a descubrir fortalezas y debilidades internas, así como oportunidades y amenazas del entorno. Su valor reside en ofrecer insumos objetivos para la toma de decisiones, no en describirlo todo. Por ello, se define una línea base de indicadores y se jerarquizan hallazgos según impacto y urgencia. La metodología combina técnicas cuantitativas (encuestas y cifras operativas y financieras) y cualitativas (entrevistas, grupos de discusión, observación y análisis de documentos). Con esta triangulación se contrastan percepciones con datos duros, se detectan inconsistencias y se formulan hipótesis verificables. El resultado no es un catálogo de problemas, sino un mapa causal que guía el diseño de soluciones y orienta la evaluación posterior.",
        },
        {
          type: "paragraph",
          text: "Entre sus ventajas destaca que promueve la integración de equipos en lugar de islas funcionales, incrementa la participación informada, optimiza el uso de recursos humanos, materiales, técnicos y financieros, aporta evidencia para la planeación estratégica, táctica y operativa, y facilita la simplificación de procesos. No obstante, existen desventajas potenciales: no todas las personas están dispuestas a aportar su mejor esfuerzo en contextos de cambio y pueden surgir conflictos al hacer explícitas tensiones latentes. Estas objeciones no invalidan el ejercicio; advierten que el diagnóstico debe cuidar ética, confidencialidad y calidad de la devolución de hallazgos. Cuando se gestiona con transparencia y respeto, el proceso fortalece la confianza y convierte a los colaboradores en coautores de las soluciones, en lugar de espectadores escépticos.",
        },
        {
          type: "paragraph",
          text: "El alcance del diagnóstico puede ser específico o estratégico. El nivel específico se concentra en áreas o funciones —finanzas, recursos humanos, procesos— para medir salud financiera, gestión del talento, eficiencia operativa y otras variables concretas. El nivel estratégico examina la coherencia entre estrategias, políticas y objetivos institucionales, es decir, cuánto de lo que la organización declara se verifica en su operación cotidiana. Elegir el nivel adecuado evita sobre-o sub-diagnosticar. En ambos casos, las herramientas núcleo son la observación del trabajo real, las entrevistas planificadas, los cuestionarios bien diseñados y el análisis de información documental (manuales, estados financieros, planes y programas), complementadas con métodos de medición proporcionales a la pregunta y al riesgo.",
        },
        {
          type: "paragraph",
          text: "Los beneficios de un buen diagnóstico son tangibles: permite conocer con precisión problemas, causas y efectos; alinear objetivos con misión y visión; fortalecer cultura y prácticas de colaboración; y aumentar compromiso al mostrar avances medibles. Además, provee criterios para priorizar intervenciones, secuenciarlas sin sobrecargar a la organización y establecer tableros antes–después que convierten aprendizajes en estándares. En suma, el diagnóstico es una inversión que reduce incertidumbre, focaliza recursos y eleva la probabilidad de resultados sostenibles en calidad, tiempo, costo, seguridad y clima. Con esta base, las siguientes secciones profundizarán en concepto, ventajas y desventajas, niveles, herramientas, métodos y beneficios específicos.",
        },

        {
          type: "accordion",
          header: "Nivel 1 — Ideas fuerza del diagnóstico",
          open: false,
          text: "Primera etapa del DO; análisis integral (estructura, cultura, procesos, desempeño); triangulación de fuentes (encuestas, entrevistas, observación, documentos); línea base e hipótesis; decisiones informadas y trazables.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Kit mínimo de herramientas",
          open: false,
          text: "Observación del trabajo real; entrevistas individuales y grupales; cuestionarios/encuestas; revisión documental (manuales, estados financieros, planes); combinación de métodos cuantitativos y cualitativos.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ruta de estudio sugerida",
          open: false,
          text: "1) Precisar pregunta de diagnóstico y alcance (específico/estratégico); 2) definir indicadores y línea base; 3) seleccionar técnicas y muestra; 4) plan de levantamiento y ética; 5) mapa de hallazgos y prioridades; 6) tablero antes–después y plan de intervención.",
        },
      ],
      subthemes: [
        {
          id: "4.1",
          numbering: "4.1",
          title: "Concepto",
          content: [
            {
              type: "paragraph",
              text: "El diagnóstico organizacional es un proceso sistemático, ético y basado en evidencia que permite comprender cómo está funcionando una organización en un momento dado. No es un informe decorativo ni un trámite previo: constituye la primera decisión responsable de cualquier intervención de cambio, porque define el problema, acota el alcance y establece una línea base contra la cual se medirá el progreso. Como toda actividad profesional, el diagnóstico parte de una pregunta clara (qué se desea explicar o mejorar) y de supuestos explícitos (cómo creemos que el sistema produce los resultados actuales). El producto esperado no es la acumulación de datos, sino una explicación razonada de causas y efectos, priorizada por impacto y factibilidad. Así, el diagnóstico evita prescripciones improvisadas y orienta recursos hacia las palancas donde la relación impacto/esfuerzo es más favorable para la organización.",
            },
            {
              type: "paragraph",
              text: "En términos operativos, diagnosticar implica observar el sistema de trabajo desde tres niveles: organización (estrategia, estructura, cultura y resultados), unidades o procesos (coordinación interfuncional, fronteras y reglas de intercambio) y puestos/tareas (estándares, competencias y condiciones). Este enfoque multinivel permite distinguir síntomas locales de causas sistémicas y, sobre todo, reconocer interdependencias: pocas organizaciones fallan por ‘malas personas’; la mayoría presenta acoplamientos defectuosos, retroalimentación tardía o autoridad lejana del punto de valor. El diagnóstico de calidad describe qué sucede, dónde sucede y por qué sucede, mostrando cómo una corrección en un punto afecta (para bien o para mal) otras partes del sistema.",
            },
            {
              type: "paragraph",
              text: "Metodológicamente, el diagnóstico combina fuentes cuantitativas (indicadores de calidad, tiempo, costo, servicio, seguridad; estados financieros) y cualitativas (entrevistas, grupos focales, observación del trabajo real y revisión documental). La triangulación de métodos reduce sesgos y convierte percepciones en hipótesis contrastables. Un principio rector es la validez: los instrumentos deben medir lo que dicen medir y producir datos útiles para decidir. Por ello, se prefiere poco y bueno a mucho e irrelevante: un conjunto mínimo de métricas, claro y confiable, supera cualquier batería extensa de cuestionarios que no se conecte con decisiones operativas.",
            },
            {
              type: "paragraph",
              text: "La ética es inseparable del concepto de diagnóstico. Las personas participan y dicen la verdad cuando existen garantías de confidencialidad y de uso responsable de la información. Por eso, se comunica el propósito, el alcance y los límites del ejercicio; se recaba consentimiento; se anonimizan respuestas; y se acuerda la forma de devolución de hallazgos. El diagnóstico nunca es un mecanismo de sanción encubierta: su función es iluminar el sistema para aprender y mejorar. Allí donde se viola la confidencialidad o se manipulan datos, la organización pierde una herramienta y gana desconfianza difícil de revertir.",
            },
            {
              type: "paragraph",
              text: "Los entregables del diagnóstico —mapa de problemas‑causas, línea base de indicadores, cartera priorizada de intervenciones— sólo son valiosos si están diseñados para la acción. Por eso, cada hallazgo debe traducirse en hipótesis de intervención y en criterios de éxito (qué cambiará, quién será responsable, con qué recursos y en qué plazo). La claridad de estos vínculos permite que el diagnóstico ‘viva’ durante la implementación, guiando decisiones y ajustes, en lugar de convertirse en documento archivado. La trazabilidad entre ‘lo que vimos’ y ‘lo que haremos’ es la marca de un trabajo profesional.",
            },
            {
              type: "paragraph",
              text: "El concepto también incluye límites saludables: diagnosticar no es resolver todo. Intentar abarcarlo todo diluye foco y agota a la organización. La pregunta correcta es: ¿qué porción del sistema necesita ser comprendida ahora para mejorar resultados sin desestabilizar lo que funciona? Con esa prudencia, el diagnóstico delimita fronteras (qué entra y qué no entra), prioriza preguntas y elige métodos proporcionales al riesgo. Esta moderación, lejos de ser conservadurismo, es estrategia: permite avanzar por oleadas con aprendizaje acumulativo.",
            },
            {
              type: "paragraph",
              text: "En síntesis, el diagnóstico organizacional, entendido con rigor, es la disciplina de mirar antes de mover. Define problema, hipótesis y línea base; integra niveles y fuentes; resguarda ética y confidencialidad; y entrega explicaciones accionables. Al hacerlo, sienta las bases para un desarrollo organizacional que no prometa milagros, sino resultados sostenibles, verificables y respetuosos de la dignidad de quienes hacen el trabajo.",
            },
            {
              type: "accordion",
              header: "Elementos del concepto",
              open: false,
              text: "Pregunta clara; enfoque multinivel; triangulación de datos; ética y confidencialidad; entregables accionables; límites y foco.",
            },
            {
              type: "accordion",
              header: "Entregables mínimos",
              open: false,
              text: "Mapa problemas‑causas; línea base de indicadores; cartera priorizada con hipótesis, responsables, recursos y plazos.",
            },
          ],
        },
        {
          id: "4.2",
          numbering: "4.2",
          title: "Ventajas y desventajas del diagnóstico organizacional",
          content: [
            {
              type: "paragraph",
              text: "Entre las ventajas más sólidas del diagnóstico destaca su capacidad para integrar a la organización alrededor de una lectura compartida de la realidad. Cuando los datos se vuelven visibles y comprensibles, disminuyen las disputas interpretativas y aumenta la calidad de las decisiones. El diagnóstico alinea expectativas, reduce zonas grises y fortalece la cooperación interfuncional: ventas, operaciones, finanzas y recursos humanos conversan desde evidencia y no desde prejuicios. Además, el proceso de indagación, bien conducido, eleva la participación informada, pues convoca a quienes conocen el trabajo real a describirlo y a co‑diseñar mejoras. Esta participación es palanca de compromiso: las personas apoyan lo que ayudan a construir, sobre todo cuando ven que su voz se traduce en decisiones concretas.",
            },
            {
              type: "paragraph",
              text: "Otra ventaja es la optimización de recursos. El diagnóstico revela desperdicios (retrabajos, tiempos muertos, duplicidades), cuellos de botella, puntos únicos de falla y decisiones tardías. Con esa información, la organización prioriza intervenciones de alto rendimiento y evita inversiones costosas con bajo retorno. La línea base de indicadores permite medir con objetividad el antes‑después y ajustar el rumbo sobre la marcha. En términos de riesgo, un buen diagnóstico es un seguro: previene cambios desordenados que generan fatiga y deterioran la confianza. Por ello, se lo considera parte de la gobernanza del cambio y no sólo un insumo técnico.",
            },
            {
              type: "paragraph",
              text: "No obstante, el diagnóstico tiene desventajas potenciales si se realiza sin método o sin ética. La primera es la parálisis por análisis: recolectar datos sin criterio, multiplicar entrevistas y encuestas sin un plan de uso, o posponer decisiones esperando la ‘certeza perfecta’. Esta trampa se evita con una pregunta focal, un plan de levantamiento proporcional y una agenda de decisiones. Otra desventaja es el desgaste político si la devolución de hallazgos se hace con tono acusatorio o si se violan acuerdos de confidencialidad; el remedio es un diseño de devolución profesional y agregada, que se centre en procesos y reglas, no en personas.",
            },
            {
              type: "paragraph",
              text: "Un riesgo adicional es la captura del proceso por intereses particulares. Si un área usa el diagnóstico para justificar su narrativa o para concentrar poder, el ejercicio pierde legitimidad. La neutralidad del equipo diagnosticador —sea interno o externo— debe protegerse con reglas de juego: comité de patrocinio plural, criterios explícitos de priorización, acceso balanceado a la información y transparencia en los análisis. La independencia de juicio es cara, pero sus beneficios superan ampliamente los costos, porque protege la utilidad del diagnóstico para toda la organización.",
            },
            {
              type: "paragraph",
              text: "También existen desventajas logísticas: el levantamiento consume tiempo de colaboradores clave, interrumpe rutinas y puede generar ansiedad. La mitigación pasa por una planeación cuidadosa (muestras representativas, instrumentos breves y pertinentes, calendarios coordinados), por explicar el propósito y por devolver valor rápido (hallazgos tempranos, victorias iniciales). Cuando las personas sienten que el diagnóstico mejora su trabajo —y no sólo lo evalúa—, la percepción de costo disminuye y la cooperación aumenta.",
            },
            {
              type: "paragraph",
              text: "Finalmente, la mayor desventaja es realizar un diagnóstico que no conduce a acción. Informes extensos sin traducción en decisiones erosionan credibilidad y futuro acceso a información. Por eso, cada hallazgo debe vincularse a una hipótesis de intervención, a responsables y a métricas. La entrega del diagnóstico es, en sí misma, un evento de gestión del cambio: convoca a decidir, priorizar y comprometer recursos. Donde esto ocurre, el ejercicio es recordado como punto de inflexión; donde no, como un gasto innecesario.",
            },
            {
              type: "paragraph",
              text: "Balanceando ventajas y desventajas, el veredicto es claro: el diagnóstico agrega valor cuando es deliberado, proporcional y ético; es dañino cuando se usa como arma política o excusa para no decidir. La clave está en gobernarlo como parte del proceso de DO, con patrocinio real, participación informada y una ruta explícita de implementación y evaluación.",
            },
            {
              type: "accordion",
              header: "Ventajas clave",
              open: false,
              text: "Lectura compartida; participación informada; optimización de recursos; línea base y trazabilidad; prevención de riesgos del cambio.",
            },
            {
              type: "accordion",
              header: "Riesgos y mitigaciones",
              open: false,
              text: "Parálisis por análisis → pregunta focal y agenda de decisiones; desgaste político → devolución profesional y agregada; captura → gobernanza plural; costos de tiempo → planeación y valor rápido; informes sin acción → vínculo hallazgo‑decisión‑métrica.",
            },
          ],
        },
        {
          id: "4.3",
          numbering: "4.3",
          title:
            "Niveles del diagnóstico organizacional: específico y estratégico",
          content: [
            {
              type: "paragraph",
              text: "El diagnóstico específico se orienta a unidades, procesos o funciones delimitadas (p. ej., logística, ventas, cobranza, recursos humanos). Su propósito es mejorar desempeño operativo identificando variabilidad, cuellos de botella, retrabajos y reglas ambiguas. Trabaja con indicadores cercanos al flujo —tiempos de ciclo, defectos, OTIF, costos unitarios, cargas de trabajo— y con artefactos como SIPOC, RACI y acuerdos de interfaz. El alcance se define por fronteras claras: qué entra, qué sale y quién decide en cada punto del proceso. Su fortaleza es la precisión: al focalizar, permite victorias tempranas y aprendizaje tangible que puede escalarse a otras áreas de la organización.",
            },
            {
              type: "paragraph",
              text: "El diagnóstico estratégico examina la coherencia del sistema completo: misión y visión, estrategia competitiva, arquitectura organizativa, cultura y cartera de iniciativas. La pregunta guía es si lo que la organización declara (propósito, prioridades) se refleja en sus decisiones, estructuras, incentivos y rituales de gestión. Este nivel conecta desempeño operativo con dirección: por qué ciertas metas se persiguen o se abandonan; cómo se asignan recursos; qué tensiones estratégicas explican comportamientos locales. Trabaja con indicadores agregados (márgenes, crecimiento, satisfacción del cliente, rotación, seguridad), con análisis de portafolio y con revisión de gobernanza.",
            },
            {
              type: "paragraph",
              text: "Elegir entre diagnóstico específico y estratégico no es dicotómico: depende del problema y de la madurez de la organización. En entornos donde los síntomas son operativos y el norte estratégico es claro, conviene empezar por lo específico para construir credibilidad y flujo. Si, por el contrario, los síntomas parecen dispersos, las prioridades cambian cada mes y los incentivos se contradicen, un diagnóstico estratégico puede ordenar la agenda y evitar optimizaciones locales que empeoran el todo. La prudencia indica combinar niveles: victorias operativas que alimenten confianza y un hilo estratégico que evite esfuerzos inconexos.",
            },
            {
              type: "paragraph",
              text: "En ambos niveles, la variable crítica es la frontera. Un diagnóstico específico mal encuadrado termina abordando problemas estratégicos sin autoridad para resolverlos; uno estratégico sin sensibilidad operativa produce conclusiones abstractas sin poder de ejecución. Por ello, se traza un mapa de decisiones: cuáles pertenecen al nivel táctico (estándares, cargas, secuencias) y cuáles al nivel estratégico (prioridades, inversión, estructura). Esta claridad mejora la devolución de hallazgos y reduce frustración en los equipos.",
            },
            {
              type: "paragraph",
              text: "La selección de métodos también varía por nivel. En lo específico, prevalecen observación directa, cronometraje, análisis de variación, gembas y pruebas piloto. En lo estratégico, cobran peso la revisión documental, los talleres directivos, los análisis de portafolio y los ejercicios de escenarios. Sin embargo, ambos comparten la disciplina de medir antes‑después y de documentar lecciones para replicar o retirar intervenciones con criterio.",
            },
            {
              type: "paragraph",
              text: "La evaluación del éxito difiere: un diagnóstico específico se prueba en mejoras de tiempos, calidad o costos en procesos definidos; uno estratégico, en claridad de prioridades, foco del portafolio y consistencia de decisiones. En ambos, los resultados humanos importan: mayor confianza, mejores conversaciones, reducción de fricciones. La mezcla de métricas duras y blandas hace justicia a la complejidad del desempeño organizacional.",
            },
            {
              type: "paragraph",
              text: "En suma, hablar de niveles no es sofisticación teórica, sino una herramienta para asignar bien el esfuerzo. El DO profesional sabe cuándo afinar un proceso y cuándo revisar el timón; cuándo pedir más datos de piso y cuándo convocar a la alta dirección. Esta sensibilidad convierte al diagnóstico en palanca de aprendizaje organizacional y no en un ritual que consume tiempo sin transformar la realidad.",
            },
            {
              type: "accordion",
              header: "Cuándo usar cada nivel",
              open: false,
              text: "Específico: síntomas operativos en procesos claros. Estratégico: prioridades difusas, incentivos cruzados, portafolio disperso. Combinado: victorias tempranas + hilo de dirección.",
            },
            {
              type: "accordion",
              header: "Indicadores por nivel",
              open: false,
              text: "Específico: tiempos de ciclo, defectos, OTIF, costos unitarios. Estratégico: márgenes, crecimiento, NPS, rotación, seguridad, foco de portafolio.",
            },
          ],
        },
        {
          id: "4.4",
          numbering: "4.4",
          title: "Herramientas del diagnóstico organizacional",
          content: [
            {
              type: "paragraph",
              text: "Las herramientas de diagnóstico organizacional permiten convertir percepciones dispersas en información utilizable para decidir. No son fines en sí mismas, sino medios proporcionales a la pregunta y al riesgo. Un set básico, aplicable a múltiples contextos, incluye: observación del trabajo real (gemba), entrevistas semiestructuradas, encuestas breves, revisión documental (manuales, políticas, estados financieros, indicadores), mapeo de procesos (SIPOC) y clarificación de responsabilidades (matriz RACI). Con este núcleo se puede describir cómo fluye el trabajo, quién decide qué, con qué datos y bajo qué estándares. La potencia del set no reside en su sofisticación, sino en su coherencia: cada instrumento debe aportar evidencia complementaria y converger en un mapa de problemas‑causas priorizado por impacto y factibilidad.",
            },
            {
              type: "paragraph",
              text: "La observación del trabajo real (gemba) capta la distancia entre el proceso escrito y el proceso vivido. Requiere guion de observación, consentimiento, notas de campo y, cuando es pertinente, medición de tiempos y variabilidad. Las entrevistas semiestructuradas profundizan en significados, tensiones y acuerdos informales; se preparan con hipótesis, se graban o se registran con autorización y se codifican por temas. Las encuestas emplazan percepciones a escala; deben ser breves, válidas y confiables, y siempre acompañarse de una promesa de devolución de hallazgos para no desgastar la confianza. La revisión documental contrasta lo que la organización declara con lo que hace y aporta trazas para auditoría de decisiones.",
            },
            {
              type: "paragraph",
              text: "El mapeo de procesos con SIPOC identifica entradas, proveedores, proceso, salidas y clientes. Esta herramienta obliga a definir fronteras (qué entra y qué no), criterios de aceptación de entradas, estándares de calidad en la fuente y métricas de salida. Complementariamente, la matriz RACI explicita quién es Responsable, quién es Aprobador, quién debe ser Consultado y quién Informado en cada actividad. Juntas, SIPOC y RACI reducen ambigüedad de roles, previenen solapamientos y facilitan acuerdos de interfaz entre áreas. Estas herramientas convierten discusiones abstractas en compromisos operativos, medibles y auditables.",
            },
            {
              type: "paragraph",
              text: "Para analizar causas, se recurre a diagramas causa‑efecto (Ishikawa), 5 Porqués, Pareto y árboles de problemas. El objetivo no es acumular diagramas, sino priorizar hipótesis plausibles y ‘atacables’ con los medios disponibles. En procesos estables, los gráficos de control permiten distinguir variación común de especial y evitar reacciones espasmódicas a oscilaciones normales. En cadenas con múltiples traspasos, el mapeo de flujo de valor ayuda a localizar cuellos de botella, esperas y retrabajos. El análisis de riesgos identifica puntos únicos de falla y desenlaces severos para planear mitigaciones proporcionadas.",
            },
            {
              type: "paragraph",
              text: "Otras herramientas amplían el foco humano y relacional: mapeo de actores y de redes de colaboración (para identificar nodos críticos y cuellos de comunicación), evaluaciones de clima y seguridad psicológica (para anticipar la absorción del cambio) y análisis de carga de trabajo (para dimensionar capacidad real frente a la demanda). Estas lecturas evitan prescribir cambios técnicamente correctos pero socialmente inviables. La regla es simple: ningún rediseño complejo prospera si la gente no dispone de tiempo, información y seguridad para adoptarlo.",
            },
            {
              type: "paragraph",
              text: "El diseño de instrumentos exige criterios de validez, confiabilidad y utilidad. Validez: medir lo que se pretende medir. Confiabilidad: obtener resultados consistentes en condiciones similares. Utilidad: que la información generada sirva para tomar decisiones concretas. La ética atraviesa todo el ciclo: consentimiento informado, anonimización, resguardo de datos y devolución agregada. La disciplina consiste en elegir el mínimo conjunto de herramientas que, combinadas, respondan a la pregunta sin abrumar al sistema con levantamientos innecesarios.",
            },
            {
              type: "paragraph",
              text: "Finalmente, la visualización de hallazgos es también una herramienta: tableros antes–después, mapas de calor de riesgos, flujos simplificados y resúmenes ejecutivos con tres mensajes clave por público. Si los hallazgos no se hacen visibles, no guían decisiones. Por eso, el set de herramientas incluye plantillas de presentación y rituales de revisión (reuniones breves, comités de transformación) que conectan evidencia con acción disciplinada.",
            },
            {
              type: "accordion",
              header: "Selección de herramientas (reglas)",
              open: false,
              text: "Proporcionalidad a la pregunta y al riesgo; combinación de métodos (triangulación); foco en utilidad para decidir; ética y confidencialidad como no negociables.",
            },
            {
              type: "accordion",
              header: "Plantillas recomendadas",
              open: false,
              text: "Guion de gemba; pauta de entrevista; cuestionario breve; SIPOC; RACI; Ishikawa/5 Porqués; Pareto; tablero antes–después; mapa de riesgos; resumen ejecutivo 1‑3‑1.",
            },
          ],
        },
        {
          id: "4.5",
          numbering: "4.5",
          title: "Métodos para realizar un diagnóstico organizacional",
          content: [
            {
              type: "paragraph",
              text: "Los métodos de diagnóstico organizacional articulan el ‘cómo’ para producir evidencia de calidad. Un enfoque robusto combina métodos cualitativos y cuantitativos en un diseño mixto, secuencial o concurrente, según la pregunta. La secuencia típica comienza con exploración cualitativa (entrevistas, grupos focales, gemba) para formular hipótesis, seguida de mediciones cuantitativas (encuestas, indicadores operativos) para dimensionar y contrastar. Este ciclo se cierra con una fase de integración que convierte datos en explicaciones causales y en opciones de intervención. El criterio rector es la parsimonia: el método más simple que responda a la pregunta con suficiente confianza es preferible al más complejo que no aumente la utilidad para decidir.",
            },
            {
              type: "paragraph",
              text: "El método de entrevistas semiestructuradas parte de una guía con ejes temáticos (propósito, roles, flujo de información, decisiones, indicadores, riesgos). Se aplican a una muestra intencional que represente niveles y funciones clave; se registra audio con consentimiento o se transcribe en notas detalladas; se codifica por temas y se triangula con otras fuentes. Los grupos focales permiten observar interacciones, consensos y disensos; requieren facilitación experta para evitar sesgos de dominancia y se apoyan en preguntas abiertas y en dinámicas breves de priorización. Ambos métodos ofrecen profundidad explicativa y, usados con respeto, abren conversaciones que suelen permanecer implícitas.",
            },
            {
              type: "paragraph",
              text: "Las encuestas y cuestionarios cuantifican percepciones y prácticas a escala. Su diseño exige claridad en constructos, ítems validados y escalas consistentes. Deben pilotearse, estimar confiabilidad (p. ej., alfa de Cronbach) y especificar criterios de inclusión. El muestreo puede ser censal cuando el universo es acotado o probabilístico/estratificado cuando interesa inferir a una población mayor. La ética demanda comunicación previa, anonimato y devolución de resultados. La ventaja del método es su capacidad para detectar patrones y segmentaciones que guíen intervenciones focalizadas.",
            },
            {
              type: "paragraph",
              text: "La observación del trabajo real (gemba) documenta cómo se realiza la tarea en condiciones normales. Se define un guion: qué proceso, qué momentos, qué variables. Puede incluir cronometría, conteo de defectos, identificación de desperdicios y registro de variabilidad. La observación participante exige aclarar rol para no interferir en exceso; la no participante minimiza influencia, pero requiere mayor tiempo para captar contexto. En ambos casos, el valor reside en confrontar el estándar escrito con la práctica y en detectar restricciones materiales o informacionales invisibles en entrevistas o encuestas.",
            },
            {
              type: "paragraph",
              text: "El análisis documental revisa políticas, manuales, organigramas, estados financieros, tableros y minutas. Sirve para auditar coherencia: qué se promete, qué se exige, qué se mide y qué se decide. Se construye un inventario de documentos, se verifica vigencia, se busca consistencia entre versiones y se mapea alineación con procesos reales. En diagnósticos estratégicos, se incluye análisis de portafolio de proyectos y de gobernanza (comités, cadencias, criterios). El método revela obsolescencias, redundancias y lagunas normativas que, corregidas, disminuyen fricción y riesgo.",
            },
            {
              type: "paragraph",
              text: "Métodos complementarios amplían el campo: benchmarking prudente (comparar prácticas con organizaciones pares); análisis de redes organizacionales (ONA) para visualizar flujos de colaboración e identificar nodos críticos; y técnicas de análisis de causa raíz (Ishikawa, 5 Porqués, Pareto). En procesos complejos, el mapeo de flujo de valor muestra tiempos de agregación de valor y esperas, orientando rediseños de alto impacto. La selección del método depende de la pregunta, de la disponibilidad de datos y del costo aceptable de obtención de evidencia.",
            },
            {
              type: "paragraph",
              text: "Todo método se sostiene en criterios de calidad: validez, confiabilidad, ética y utilidad. Se documenta muestreo, instrumentos, procedimiento de levantamiento, resguardo de datos y análisis. La integración final presenta hallazgos con trazabilidad (de dónde sale cada afirmación), hipótesis de intervención y métricas propuestas. Así, el método deja de ser un apartado académico y se convierte en el camino auditado que justifica decisiones, protege a las personas y facilita el aprendizaje organizacional.",
            },
            {
              type: "accordion",
              header: "Diseño mixto recomendado",
              open: false,
              text: "Exploración cualitativa → medición cuantitativa → integración explicativa. Triangulación de fuentes y trazabilidad de hallazgos.",
            },
            {
              type: "accordion",
              header: "Resguardo y ética",
              open: false,
              text: "Consentimiento informado; anonimización; control de acceso; devolución agregada; destrucción/archivo seguro; comunicación transparente del propósito.",
            },
          ],
        },
        {
          id: "4.6",
          numbering: "4.6",
          title: "Beneficios del diagnóstico organizacional",
          content: [
            {
              type: "paragraph",
              text: "Los beneficios del diagnóstico organizacional se verifican en dos planos: resultados y capacidades. En resultados, un buen diagnóstico mejora calidad, tiempo y costo al eliminar desperdicios, reducir variabilidad y acortar bucles de decisión. En capacidades, instala disciplina de mejora continua: métricas visibles, conversaciones con evidencia, acuerdos de interfaz y aprendizaje documentado. Esta doble ganancia —desempeño hoy y aprendizaje para mañana— justifica el esfuerzo de levantamiento y análisis. La condición es gobernar el diagnóstico como parte del proceso de DO: patrocinio real, participación de quienes hacen el trabajo y vínculo explícito entre hallazgos, decisiones, responsables y métricas.",
            },
            {
              type: "paragraph",
              text: "El primer beneficio es contar con una lectura compartida de la realidad. Las organizaciones suelen padecer ‘ruido interpretativo’: cada área explica los problemas desde su trinchera. El diagnóstico, al triangular datos, reduce ese ruido y permite acordar prioridades. Cuando ventas, operaciones y finanzas observan el mismo tablero, las discusiones pasan de opiniones a opciones. Esta alineación estratégica y operativa ahorra energía política y acelera la ejecución.",
            },
            {
              type: "paragraph",
              text: "Otro beneficio es la optimización del uso de recursos humanos, materiales, técnicos y financieros. Al identificar cuellos de botella, duplicidades y puntos únicos de falla, la organización redistribuye carga, simplifica flujos y dirige inversión a palancas de alto rendimiento. El análisis de capacidades (competencias, herramientas, información) permite cerrar brechas con precisión, evitando formaciones genéricas o compras tecnológicas de bajo retorno. La consecuencia es una mejor relación costo/beneficio de las iniciativas y una mejora sensible en experiencia del cliente interno y externo.",
            },
            {
              type: "paragraph",
              text: "El diagnóstico fortalece la cultura de colaboración. Involucrar a las personas en la descripción del trabajo real y en la co‑creación de soluciones incrementa compromiso y sentido de pertenencia. La devolución profesional de hallazgos —respetuosa de la confidencialidad y centrada en procesos, no en personas— mejora la confianza y abre la puerta a conversaciones difíciles pero necesarias. Con el tiempo, los equipos internalizan el hábito de medir, reflexionar y ajustar, y disminuye la dependencia de héroes para ‘sacar’ problemas.",
            },
            {
              type: "paragraph",
              text: "Desde la perspectiva del riesgo, el diagnóstico actúa como seguro organizacional. Al explicitar restricciones, supuestos y vulnerabilidades, permite anticipar impactos y diseñar mitigaciones. En transformaciones tecnológicas o reestructuras, esta anticipación evita daños a la salud psicosocial, caídas de servicio o sanciones regulatorias. Documentar riesgos y decisiones deja rastro para aprender y para responder ante auditorías internas o externas.",
            },
            {
              type: "paragraph",
              text: "Un beneficio a menudo subestimado es la mejora de la calidad de la información. Al ordenar fuentes, depurar indicadores y establecer cadencias, el diagnóstico deja atrás reportes redundantes y datos poco confiables. Con menos, se decide mejor. Este saneamiento habilita tableros simples y poderosos que integran desempeño operativo, clima y riesgos, brindando una ‘única verdad’ para dirigir y para rendir cuentas.",
            },
            {
              type: "paragraph",
              text: "Por último, el diagnóstico produce aprendizaje institucional. Las lecciones documentadas —qué funcionó, qué no, por qué— alimentan repositorios reutilizables y aceleran futuras intervenciones. Este capital intelectual reduce costos, eleva estándares y fortalece la licencia social para operar. Cuando el diagnóstico se cierra con decisiones, métricas y seguimiento, se convierte en un punto de inflexión: la organización deja de reaccionar al azar y comienza a mejorar con método, cuidando a las personas y los resultados.",
            },
            {
              type: "accordion",
              header: "Beneficios tangibles",
              open: false,
              text: "Calidad, tiempo y costo; reducción de desperdicios; estabilidad de procesos; tableros confiables; satisfacción de clientes y colaboradores.",
            },
            {
              type: "accordion",
              header: "Condiciones para capturarlos",
              open: false,
              text: "Patrocinio y participación; vínculo hallazgo‑decisión‑métrica; devolución respetuosa; disciplina de seguimiento; documentación de lecciones y estandarización.",
            },
          ],
        },
      ],
    },

    /* 5. Unidad principal */
    {
      id: "5",
      numbering: "Unidad 5",
      title: "Instrumentos para la recopilación de información",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad aborda cómo transformar preguntas de diagnóstico en datos útiles mediante instrumentos bien diseñados. Un instrumento no es un formulario ni una moda: es un mecanismo para captar señales del sistema de trabajo con suficiente calidad como para decidir. La elección depende de la pregunta, del riesgo y del nivel de análisis (organizacional, de procesos o de puestos). Sostengo que la proporcionalidad es clave: pocos instrumentos, bien aplicados y conectados con decisiones concretas, superan cualquier batería extensa que no cambie nada. Asimismo, cada instrumento debe declarar su propósito, las variables que medirá, su población objetivo y la forma en que se integrará con otras fuentes. Sin esta trazabilidad, los datos se vuelven anecdóticos y el diagnóstico, vulnerable a sesgos. La unidad propone criterios firmes para elegir, diseñar, pilotear y aplicar instrumentos, y para convertir los hallazgos en hipótesis de intervención.",
        },
        {
          type: "paragraph",
          text: "Los criterios rectores son validez, confiabilidad y utilidad. Validez: que el instrumento mida lo que promete. Confiabilidad: que produzca resultados consistentes en condiciones comparables. Utilidad: que la información generada sirva para tomar decisiones y priorizar palancas. Estos criterios se aseguran con un diseño claro de constructos, ítems comprensibles, escalas adecuadas, muestras pertinentes y pruebas piloto. En instrumentos cualitativos, la saturación teórica y la triangulación refuerzan la calidad; en cuantitativos, los análisis de consistencia y de error de medición. Defiendo un principio operativo: si un dato no va a usarse para decidir, no se levanta. Además, la ética es innegociable: consentimiento informado, anonimización, control de acceso, resguardo seguro y devolución agregada de resultados. Un instrumento ético mejora la sinceridad de respuestas y, por tanto, la calidad del diagnóstico.",
        },
        {
          type: "paragraph",
          text: "El repertorio básico incluye entrevistas semiestructuradas, grupos focales, encuestas breves, observación del trabajo real (gemba) y revisión documental. A ello se suman instrumentos contemporáneos: análisis de registros digitales, telemetría de sistemas, minería de procesos y mapeo de redes de colaboración. Cada instrumento tiene fortalezas y límites: las entrevistas ofrecen profundidad pero no generalizan por sí solas; las encuestas escalan, pero requieren ítems válidos y economía de preguntas; la observación revela distancias entre el estándar escrito y la práctica; la revisión documental audita coherencia normativa; la analítica digital descubre cuellos de botella invisibles en discursos. La selección combina precisión técnica con viabilidad operativa: hay que medir lo suficiente, sin saturar a la organización.",
        },
        {
          type: "paragraph",
          text: "Implementar instrumentos exige un plan de levantamiento sobrio: calendario coordinado con operación, responsables por frente, guiones y plantillas, bitácora de versiones y criterios de muestreo. Recomiendo crear un repositorio vivo de instrumentos con control de cambios y evidencia de validez. Igual de importante es el ‘contrato psicológico’ con los participantes: se explica el propósito, se protege la identidad y se compromete una devolución útil. En paralelo, se acuerda una línea base de indicadores antes de levantar datos, para que la comparación antes–después sea legítima. Finalmente, se documenta la trazabilidad entre observación, interpretación y recomendación, de modo que cualquier afirmación pueda auditarse.",
        },
        {
          type: "paragraph",
          text: "La integración de datos es la última milla del instrumento. La unidad insiste en no confundir medición con comprensión: los hallazgos deben formar un mapa causal que explique por qué ocurre lo que ocurre y qué palancas mover. Para ello, se triangulan fuentes, se priorizan hipótesis por impacto y factibilidad, y se visualizan patrones en tableros simples que integren desempeño operativo, clima y riesgos. La narrativa resultante conecta cada dato con una decisión: qué cambiaremos, quién será responsable, con qué recursos y en qué plazo. Esta disciplina evita la ‘instrumentitis’ y convierte la medición en motor de acuerdos operativos y aprendizaje institucional.",
        },

        {
          type: "accordion",
          header: "Nivel 1 — Ideas fuerza de la unidad",
          open: false,
          text: "Instrumentos al servicio de decisiones; proporcionalidad (pocos y buenos); criterios de calidad (validez, confiabilidad, utilidad); ética innegociable; integración y trazabilidad hasta la decisión.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Kit mínimo recomendado",
          open: false,
          text: "Entrevistas semiestructuradas; grupos focales; encuestas breves; gemba; revisión documental; SIPOC y RACI como soportes; analítica de registros y minería de procesos donde aplique.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ruta de estudio y práctica",
          open: false,
          text: "1) Definir pregunta y población; 2) diseñar y pilotear instrumento; 3) plan de levantamiento y ética; 4) triangulación y visualización; 5) mapa causal y cartera de intervenciones; 6) tablero antes–después y lecciones aprendidas.",
        },
      ],
      subthemes: [
        {
          id: "5.1",
          numbering: "5.1",
          title: "Concepto",
          content: [
            {
              type: "paragraph",
              text: "Un instrumento de recopilación de información es un medio técnico diseñado para transformar preguntas de diagnóstico en datos válidos, confiables y útiles para la decisión. A diferencia del ‘método’ (enfoque general de indagación) o de la ‘técnica’ (procedimiento de aplicación), el instrumento es el formato concreto que captura observaciones, percepciones o registros (guía de entrevista, cuestionario, lista de cotejo, pauta de gemba, formato de revisión documental, etc.). Su valor no radica en su extensión, sino en su alineación con la pregunta y con la acción esperada. En desarrollo organizacional (DO), un buen instrumento permite leer con precisión la realidad del trabajo, relacionar causas con efectos y priorizar palancas de cambio; uno deficiente produce ruido, desgasta a la gente y conduce a decisiones discutibles. Por ello, cada instrumento declara propósito, variables, población objetivo y plan de uso de los datos.",
            },
            {
              type: "paragraph",
              text: "Tres criterios gobiernan su diseño: validez (mide lo que dice medir), confiabilidad (produce resultados consistentes) y utilidad (informa decisiones concretas). La validez se apoya en definiciones operativas claras, ítems pertinentes y lenguaje comprensible para el público. La confiabilidad se mejora con instrucciones estandarizadas, escalas consistentes y pilotaje. La utilidad exige que cada dato esté vinculado a una decisión; si un dato no se usará, no se levanta. Estos criterios se documentan en una ficha técnica de instrumento que acompaña al levantamiento y a la interpretación de resultados, garantizando trazabilidad desde la observación hasta la recomendación.",
            },
            {
              type: "paragraph",
              text: "Los instrumentos se ubican en niveles: organizacional (alineación estratégica, cultura, indicadores), de procesos (flujo, roles, interfaces, tiempos de ciclo) y de puestos/tareas (estándares, cargas, condiciones). Este enfoque multinivel evita confundir síntomas locales con causas sistémicas y permite combinar instrumentos complementarios: entrevistas con directivos para intenciones y restricciones; gemba para la práctica real; cuestionarios breves para patrones transversales; revisión documental para coherencia normativa; mapeos SIPOC y matrices RACI para clarificar fronteras y responsabilidades. La combinación proporcional de instrumentos fortalece la explicación causal y reduce sesgos de un único punto de vista.",
            },
            {
              type: "paragraph",
              text: "La ética es un componente inseparable. Los instrumentos declaran su propósito, resguardan confidencialidad, recaban consentimiento informado y limitan el acceso a datos personales. En contextos de cambio, la transparencia sobre el uso de información y la devolución agregada de hallazgos incrementan la sinceridad de respuestas y la licencia social para intervenir. Por el contrario, la opacidad o el uso punitivo destruyen confianza y vuelven inviable cualquier instrumento, por más elegante que sea su diseño. La ética no es un apartado final: condiciona la calidad de los datos desde el primer contacto con los participantes.",
            },
            {
              type: "paragraph",
              text: "En DO, el instrumento de mayor impacto es el que traduce hallazgos en opciones: cada pregunta anticipa un umbral de decisión (qué haríamos si X ocurre) y cada escala facilita comparar antes–después. Por ejemplo, una pauta de gemba bien diseñada no sólo observa desperdicios y variabilidad, sino que documenta condiciones de entrada, estándares visibles, retrabajos y riesgos, habilitando micro‑experimentos. Un cuestionario de clima no multiplica preguntas, sino que elige ítems con evidencia de validez y con acciones asociadas (retroalimentación, seguridad psicológica, claridad de rol).",
            },
            {
              type: "paragraph",
              text: "Otro rasgo clave es la economía cognitiva: ítems breves, unívocos y con jerga local; secuencias lógicas que facilitan el recuerdo; escalas con anclas claras. Se evitan dobles negaciones, preguntas de doble filo y saltos innecesarios. En instrumentos observacionales, la lista de cotejo privilegia conductas y condiciones observables sobre juicios vagos. La claridad del instrumento disminuye la varianza introducida por el aplicador y mejora la comparabilidad de los resultados, especialmente cuando participan varios consultores o sedes.",
            },
            {
              type: "paragraph",
              text: "Por último, el instrumento vive dentro de un ciclo: diseño → pilotaje → ajuste → levantamiento → análisis → devolución. Documentar cambios y razones, junto con métricas de calidad (tasas de respuesta, tiempos, consistencia interna), convierte cada aplicación en aprendizaje acumulable. Este ciclo distingue a las organizaciones que miden para mejorar de aquellas que sólo administran formularios. En suma, el concepto de instrumento en DO es pragmático: servir a la comprensión y a la acción, con método y respeto por las personas.",
            },
            {
              type: "accordion",
              header: "Criterios del buen instrumento",
              open: false,
              text: "Validez, confiabilidad y utilidad; lenguaje claro; ética y consentimiento; trazabilidad de datos a decisiones; pilotaje y control de calidad.",
            },
            {
              type: "accordion",
              header: "Errores comunes a evitar",
              open: false,
              text: "Preguntas ambiguas o dobles; exceso de longitud; levantar datos sin plan de uso; escalas inconsistentes; falta de devolución de hallazgos.",
            },
          ],
        },
        {
          id: "5.2",
          numbering: "5.2",
          title: "Planeación de la información recopilada",
          content: [
            {
              type: "paragraph",
              text: "Planear la información significa definir, antes de medir, qué se necesita saber, para qué decisión y con qué estándares de calidad. La planeación inicia con una pregunta focal, hipótesis preliminares y criterios de éxito. A partir de ello se delimitan alcance (qué entra/qué no), unidades de análisis, variables, indicadores, fuentes y momentos de medición. Se elabora una ficha de proyecto con objetivos, entregables, cronograma, responsables, riesgos y supuestos. Esta disciplina evita la parálisis por análisis y protege a la organización de mediciones que no conducen a nada. Cada indicador define fórmula, frecuencia, responsable de actualización y uso previsto en reuniones de gestión.",
            },
            {
              type: "paragraph",
              text: "El diseño muestral es el corazón operativo de la planeación. Se define el universo/población, se elabora el marco muestral y se elige el tipo de muestreo (censal, probabilístico —aleatorio simple, estratificado, por conglomerados— o no probabilístico —juicio, conveniencia, bola de nieve—) según precisión requerida, costo y tiempo. Se calculan tamaño de muestra, margen de error y nivel de confianza cuando aplica. En estudios cualitativos, se planifica la saturación teórica (número de entrevistas/grupos hasta que no emergen temas nuevos). La mezcla prudente de enfoques permite profundidad y generalización razonable sin sobredimensionar el esfuerzo.",
            },
            {
              type: "paragraph",
              text: "La logística de levantamiento incluye: guiones e instrumentos versionados, calendario acordado con operación, capacitación breve de aplicadores, consentimientos informados, controles de acceso y resguardo seguro de datos. Se definen puntos de control de calidad (piloto, revisión de consistencia, tasas de respuesta, tiempos de aplicación) y protocolos de contingencia (qué hacer ante baja participación, sesgos de deseabilidad social, interrupciones operativas). Un ‘centro de mando’ del diagnóstico consolida incidencias, ajusta rutas y mantiene informados a patrocinadores y líderes de área.",
            },
            {
              type: "paragraph",
              text: "El plan también prevé la integración y visualización de datos. Se diseñan plantillas de captura con campos validados, catálogos y reglas de negocio para minimizar errores; se establecen procesos de depuración (detección de atípicos, imputación prudente, documentación de supuestos) y se definen tableros antes–después con métricas clave. El principio es decidir con la menor cantidad de datos que permitan una decisión segura, no con todos los datos posibles. La claridad de los tableros reduce discusiones estériles y acelera iteraciones de mejora.",
            },
            {
              type: "paragraph",
              text: "En materia ética y legal, la planeación exige evaluar riesgos de privacidad y confidencialidad, anonimizar donde corresponda, establecer periodos de conservación y destrucción de datos y comunicar a los participantes el uso y los límites de la información. Esto incrementa la sinceridad de respuestas y protege a la organización de riesgos reputacionales y regulatorios. La ética se traduce en prácticas: resguardar archivos, limitar accesos, separar datos identificables de respuestas y devolver hallazgos de manera agregada y respetuosa.",
            },
            {
              type: "paragraph",
              text: "Un componente a menudo olvidado es el contrato de devolución de valor. Se acuerda, por adelantado, cómo y cuándo se compartirán hallazgos tempranos, qué decisiones se tomarán con cada corte y cómo se reconocerá el tiempo de los participantes (por ejemplo, devoluciones por área con mejoras concretas). Con esto, la colaboración deja de ser un favor y se convierte en una inversión compartida. Asimismo, se identifica la capacidad instalada para ejecutar cambios; medir sin capacidad de cambio sólo genera frustración.",
            },
            {
              type: "paragraph",
              text: "Finalmente, la planeación incorpora un mecanismo de aprendizaje: lecciones a capturar durante el levantamiento y la integración, para mejorar instrumentos, reducir carga y estandarizar prácticas. Cada oleada de medición debe dejar al equipo mejor preparado para la siguiente. Esta mentalidad de mejora continua convierte la medición en una ventaja competitiva y no en una carga recurrente.",
            },
            {
              type: "accordion",
              header: "Checklist de planeación",
              open: false,
              text: "Pregunta focal; hipótesis; alcance; variables e indicadores; muestra y logística; ética y resguardo; plantillas y tableros; contrato de devolución; plan de lecciones.",
            },
            {
              type: "accordion",
              header: "Riesgos y mitigaciones",
              open: false,
              text: "Baja participación → patrocinio visible y comunicación; sesgo de deseabilidad → anonimato y formatos indirectos; interrupciones operativas → calendario acordado; dispersión de datos → plantillas y reglas de negocio.",
            },
          ],
        },
        {
          id: "5.3",
          numbering: "5.3",
          title: "Concepto",
          content: [
            {
              type: "paragraph",
              text: "En esta sección, ‘Concepto’ se refiere a la noción operativa de recopilación en campo: el conjunto de actividades, roles y salvaguardas mediante las cuales los instrumentos se aplican para obtener datos confiables. Recopilar no es ‘pasar encuestas’: es ejecutar un protocolo que asegura que la información representa la realidad del trabajo y que su obtención respeta a las personas. Implica seleccionar aplicadores, preparar materiales, coordinar agendas con las áreas, asegurar condiciones adecuadas (tiempo, espacio, privacidad), supervisar calidad y documentar incidencias. El énfasis está en la profesionalidad del proceso: cada interacción es una oportunidad de construir confianza y de elevar la calidad de la conversación sobre el desempeño.",
            },
            {
              type: "paragraph",
              text: "El perfil del responsable de recopilación combina técnica y ética. Idealmente, es un consultor en DO —externo o interno con independencia— capaz de sostener entrevistas con escucha activa, facilitar grupos sin sesgos de dominancia, observar procesos con discreción y administrar cuestionarios con neutralidad. La independencia reduce conflictos de interés y la tentación de ‘dirigir’ respuestas. Cuando se trabaja con equipos internos, se define una separación de funciones: quien levanta no interpreta, y quien interpreta no evalúa personas. Este reparto protege la confianza y la utilidad futura de la medición.",
            },
            {
              type: "paragraph",
              text: "La estandarización es clave: guiones claros, instrucciones homogéneas, escalas con anclas comprensibles, tiempos máximos por instrumento y criterios de inclusión/exclusión. Se prevé un piloto para detectar ambigüedades y una bitácora de cambios para mantener trazabilidad. Durante el levantamiento, se monitorean tasas de respuesta, patrones de no‑respuesta y tiempos de aplicación; se corrigen sesgos en marcha (p. ej., sobre‑representación de un turno) con ajustes muestrales. La calidad de datos es una propiedad del proceso, no sólo del diseño del instrumento.",
            },
            {
              type: "paragraph",
              text: "La gestión de incidencias evita que obstáculos menores erosionen la calidad. Se definen protocolos para ausencias, interrupciones operativas, objeciones de jefaturas, fallas de conectividad o ambientes poco privados. En encuestas digitales, se cuida la compatibilidad con dispositivos, el guardado automático y la protección contra envíos duplicados. En entrevistas, se obtienen consentimientos, se acuerda grabación o toma de notas y se respetan límites de tiempo. Los grupos focales requieren reglas de convivencia y técnicas de facilitación para equilibrar voces y evitar sesgos de conformidad.",
            },
            {
              type: "paragraph",
              text: "La relación con los participantes se cuida con comunicación previa clara: propósito, duración, voluntariedad, confidencialidad, uso de datos y beneficios esperados. La devolución de valor —resúmenes por área, decisiones tomadas— se programa desde el inicio para honrar el tiempo invertido. Se evitan preguntas sensibles sin justificación y se habilitan canales para dudas o retiro. Así, la recopilación deja de percibirse como ‘auditoría’ y se vive como una conversación honesta sobre cómo mejorar el trabajo.",
            },
            {
              type: "paragraph",
              text: "Una vez concluido el levantamiento, se procede a la depuración: revisión de consistencia, detección de valores atípicos, análisis de ítems faltantes, verificación de reglas de salto y documentación de supuestos de imputación. Se construyen diccionarios de datos y se asegura la anonimización antes del análisis. La documentación permite auditar, replicar o escalar el ejercicio. La buena práctica incluye un cierre operativo con el equipo aplicador para capturar lecciones y oportunidades de simplificación para futuras rondas.",
            },
            {
              type: "paragraph",
              text: "El resultado de una buena recopilación es un acervo de datos listo para integrarse con otras fuentes y convertirse en explicaciones accionables. La diferencia entre una medición útil y una estéril rara vez está en la sofisticación estadística y casi siempre en la seriedad del campo. Cuidar el cómo se obtiene la información es cuidar la calidad de las decisiones que seguirán.",
            },
            {
              type: "accordion",
              header: "Roles en campo",
              open: false,
              text: "Patrocinador; líder de diagnóstico; aplicadores; analista de datos; enlace por área; auditor de calidad; responsable de resguardo.",
            },
            {
              type: "accordion",
              header: "Buenas prácticas de levantamiento",
              open: false,
              text: "Piloto y bitácora; instrucciones estandarizadas; monitoreo de tasas de respuesta; protocolos de incidencias; devolución temprana de hallazgos.",
            },
          ],
        }, // preservado tal como aparece en el material
        {
          id: "5.4",
          numbering: "5.4",
          title: "Términos",
          content: [
            {
              type: "paragraph",
              text: "Este subtema consolida un vocabulario operativo para planear, levantar e interpretar información en DO. ‘Universo’ es el conjunto total sobre el que se desea concluir; ‘población’, el subconjunto accesible; ‘marco muestral’, la lista o mecanismo que permite seleccionar casos. ‘Muestra’ es el subconjunto efectivamente observado; puede ser censal (todos) o probabilístico (aleatorio simple, estratificado, por conglomerados) o no probabilístico (juicio, conveniencia, bola de nieve), cada uno con implicaciones de inferencia y sesgo. ‘Variable’ es una característica observable; ‘indicador’, una función de variables que aproxima un constructo (p. ej., rotación mensual). Definir estos términos evita malentendidos metodológicos y controversias estériles al momento de decidir.",
            },
            {
              type: "paragraph",
              text: "En medición, ‘validez’ refiere al grado en que el instrumento captura el constructo de interés (de contenido, de criterio, de constructo); ‘confiabilidad’ a la consistencia de resultados (test‑retest, formas paralelas, consistencia interna); ‘precisión’ a la dispersión del error aleatorio; y ‘sesgo’ a los errores sistemáticos (deseabilidad social, no respuesta, formulación). En encuestas, las ‘escalas’ pueden ser nominales, ordinales, de intervalo o de razón; las escalas tipo Likert requieren anclas comportamentales claras para mejorar interpretación. En cualitativo, ‘saturación’ indica el punto donde nuevas entrevistas ya no aportan temas; la ‘triangulación’ combina fuentes y métodos para robustecer hallazgos.",
            },
            {
              type: "paragraph",
              text: "Otros términos clave: ‘gemba’ (observación del trabajo real en el lugar de valor), ‘SIPOC’ (mapa de proveedores‑entradas‑proceso‑salidas‑clientes), ‘RACI’ (matriz de responsabilidades), ‘VSM’ (mapeo de flujo de valor), ‘línea base’ (medición inicial contra la cual se comparará el desempeño futuro), ‘otif’ (entrega a tiempo y completa) y ‘capacidad’ (recursos disponibles para procesar demanda con estándares definidos). Usar un glosario compartido acelera conversaciones, estandariza expectativas y hace auditable el proceso de diagnóstico e intervención.",
            },
            {
              type: "paragraph",
              text: "Desde el punto de vista estadístico, el ‘margen de error’ expresa incertidumbre de estimación y depende del tamaño muestral, de la variabilidad y del nivel de confianza; el ‘nivel de confianza’ es la probabilidad de que el intervalo de estimación contenga el valor poblacional; el ‘error tipo I/II’ refieren a rechazar/aceptar hipótesis en falso. En análisis de procesos, ‘variación común’ describe fluctuaciones normales del sistema y ‘variación especial’, alteraciones por causas identificables; distinguirlas evita reacciones espasmódicas. Todos estos conceptos orientan decisiones prudentes, evitando sobreinterpretaciones de cambios triviales o de artefactos de medición.",
            },
            {
              type: "paragraph",
              text: "En protección de datos, ‘datos personales’ identifican o hacen identificable a una persona; ‘anonimización’ elimina vínculos con identidades; ‘seudonimización’ reemplaza identificadores por claves; ‘control de acceso’ delimita quién puede ver qué; ‘consentimiento informado’ explicita propósito, riesgos, beneficios y derechos. Estos términos no son formalidad: condicionan la cooperación y la legitimidad del proceso, especialmente cuando se indagan temas sensibles como clima, liderazgo o seguridad psicológica.",
            },
            {
              type: "paragraph",
              text: "En gestión del cambio, ‘licencia social para operar’ es la aceptación de los grupos de interés; ‘patrocinio’ se refiere al compromiso visible de líderes que habilitan el proceso; ‘contrato de devolución’ es el acuerdo sobre cómo y cuándo se compartirán hallazgos y decisiones; ‘victorias tempranas’ son mejoras de bajo costo y alto simbolismo que construyen credibilidad; ‘estandarización’ es la formalización de prácticas exitosas para consolidar resultados. Incorporar este lenguaje desde el diagnóstico alinea expectativas y fortalece la ejecución.",
            },
            {
              type: "paragraph",
              text: "Finalmente, ‘trazabilidad’ es la capacidad de seguir cada afirmación hasta su evidencia; ‘hipótesis de intervención’ enuncia qué se espera que ocurra si se aplica una palanca; ‘criterios de éxito’ definen cómo sabremos que funcionó; y ‘riesgo’ combina probabilidad e impacto de eventos adversos. Convertir términos en práctica —glosario vivo, plantillas con definiciones, revisión por pares— evita confusiones y eleva la calidad de discusión. Un lenguaje compartido es un activo: reduce fricción, acelera decisiones y protege la integridad del proceso de DO.",
            },
            {
              type: "paragraph",
              text: "Este glosario no pretende agotar la terminología, sino fijar mínimos profesionales para planear, levantar y analizar información de manera responsable. En futuras iteraciones, el equipo puede ampliar definiciones con ejemplos propios y métricas específicas del contexto, de modo que el diccionario evolucione junto con la organización y no se convierta en un anexo decorativo.",
            },
            {
              type: "accordion",
              header: "Glosario operativo (extracto)",
              open: false,
              text: "Universo, población, marco muestral, muestra, variable, indicador, validez, confiabilidad, precisión, sesgo, saturación, triangulación, margen de error, nivel de confianza.",
            },
            {
              type: "accordion",
              header: "Reglas de oro de muestreo",
              open: false,
              text: "Definir universo y marco; elegir tipo de muestreo por precisión/costo/tiempo; documentar supuestos; monitorear no‑respuesta; reportar límites de inferencia.",
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
          href: "https://www.youtube.com/watch?v=SnJz_2__fC0&t=12s", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Qué es el DIAGNÓSTICO ORGANIZACIONAL y para qué sirve? https://www.youtube.com/watch?v=SnJz_2__fC0&t=12s",
            "El proceso de consultoría y la importancia del desarrollo organizacional en las empresas actuales https://www.youtube.com/watch?v=CGonrYmvZHU",
            "Perspectiva teórica del desarrollo organizacional (lectura) https://www.youtube.com/watch?v=HBqLsZqM96Y",
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
            "Guízar Montúfar, R. (2011). Comportamiento organizacional: Principios y aplicaciones (3.ª ed.). McGraw-Hill.",
            "Lavín, I. (s. f.). Decálogo del consultor empresarial. https://www.ivanlavin.com.mx/decalogo-del-consultor-empresarial/",
            "OCC Solutions. (s. f.). Diagnóstico organizacional. https://occ-solutions.com/diagnostico-organizacional/",
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
