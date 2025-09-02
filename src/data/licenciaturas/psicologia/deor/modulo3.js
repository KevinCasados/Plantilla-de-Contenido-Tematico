/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LPSIC",
  courseId: "PSIC-DO",
  id: "mod3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Desarrollo organizacional",
  title: "Módulo 3. Intervenciones de consultoría, conflicto e implementación",
  semestre: "Quinto",
  teacher: "Enrique Bombela Cuevas",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Comprender la importancia de implementar estrategias de desarrollo organizacional para solucionar conflictos que afectan los procesos productivos y las relaciones interpersonales, y orientar cambios planificados que mejoren la eficacia y competitividad de la empresa.",
  competencies: [
    "Reconoce la relevancia de implementar una estrategia de DO para la solución de conflictos organizacionales.",
    "Comprende la necesidad de mejorar el clima organizacional para hacer más competitiva y eficaz a la empresa.",
    "Identifica las etapas o fases del proceso de desarrollo organizacional.",
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

    /* 6. Unidad principal */
    {
      id: "6",
      numbering: "Unidad 6",
      title:
        "Intervenciones de consultoría: fases del desarrollo organizacional",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad presenta, con enfoque aplicado, las fases que articulan una intervención de consultoría en Desarrollo Organizacional (DO): entrada o ingreso, start-up o arranque, arranque con retroalimentación, plan de acción y ciclo de cambio-evaluación. El hilo conductor es claro y exigente: pasar de la intención a los resultados mediante decisiones trazables, evidencia suficiente y acuerdos operativos. Sostengo que una intervención profesional se reconoce por su gobernanza (patrocinio real, roles definidos, fronteras de alcance), por la calidad de sus datos (qué se mide y para qué), y por la disciplina con la que convierte hallazgos en hipótesis de intervención y éstas en cambios observables. El propósito es que el estudiante domine la anatomía del proceso y pueda diseñar, conducir y evaluar intervenciones que mejoren desempeño y clima, cuidando la ética y la experiencia de las personas.",
        },
        {
          type: "paragraph",
          text: "La fase de entrada o ingreso consolida el encuadre: se valida que exista necesidad y voluntad de cambio, se mapea a los actores clave, se aclaran expectativas y se formaliza un contrato de servicios con objetivos, alcance, entregables y reglas del juego. Una entrada rigurosa evita malentendidos y protege la legitimidad del proceso cuando, más adelante, la intervención haga visibles tensiones latentes. En el start-up, el consultor “modela rol”: instala cadencias, acuerda un plan de trabajo realista, contrasta iniciativas previas y alinea a patrocinadores y líderes operativos. Desde aquí se establece un principio rectctor: prometer menos y cumplir más. Toda promesa de medición o taller se vincula con decisiones previstas; lo demás es ruido que erosiona la confianza.",
        },
        {
          type: "paragraph",
          text: "En la etapa de arranque y retroalimentación se levanta información con instrumentos proporcionales al riesgo (entrevistas, observación de trabajo real, encuestas breves y revisión documental) y se triangulan fuentes para construir una lectura compartida de la situación. La devolución de hallazgos es un evento de gestión del cambio: se presentan problemas-causa priorizados por impacto y factibilidad, se separan hechos de interpretaciones y se acuerdan criterios de éxito. Retroalimentar no es “informar”, es negociar significado y compromiso. Un buen feedback convierte resistencias difusas en objeciones tratables, y habilita victorias tempranas que prueban la intervención y elevan la moral. La ética (consentimiento, confidencialidad, uso responsable de datos) es no negociable; sin ella, no hay sinceridad ni licencia social para operar.",
        },
        {
          type: "paragraph",
          text: "El plan de acción traduce la explicación en movimiento: define hipótesis de intervención, responsables, recursos, dependencias, riesgos y cronograma, con métricas antes–después y hitos de revisión. Combina intervenciones sobre procesos (flujo, estándares, interfaces), estructura (roles, cargas, autoridad), personas (habilidades, liderazgo, seguridad psicológica) y estrategia (foco del portafolio, prioridades, políticas), cuidando coherencia y secuencia. El criterio es pragmático: pocas palancas de alto rendimiento, implementadas con disciplina, superan programas grandilocuentes sin tracción. La comunicación deja de ser periférica: se pactan mensajes, audiencias y rituales (gembas, comités de transformación, retrospectivas) que conectan decisión con ejecución.",
        },
        {
          type: "paragraph",
          text: "Finalmente, el ciclo de cambio-evaluación implementa, mide y aprende. Se ejecutan intervenciones, se monitorean indicadores (calidad, tiempo, costo, servicio, seguridad y clima) y se corrige rumbo según evidencia. La evaluación no es un cierre ceremonial, es un mecanismo continuo que documenta lecciones y estandariza prácticas exitosas. Aquí se hace explícita la tipología de intervenciones: procesos humanos (grupos T, comunicación, equipos), tecno-estructurales (diseño organizativo, flujos), capital humano (prácticas de talento) y estratégicas/medio (posicionamiento, alianzas). El objetivo es doble: resultados hoy y capacidades mañana. Cuando el ciclo culmina, la organización debería decidir con mejores datos, conversar con mayor calidad y sostener mejoras sin depender de héroes.",
        },

        {
          type: "accordion",
          header: "Nivel 1 — Mapa de fases y propósito",
          open: false,
          text: "Entrada: encuadre y contrato. Start-up: plan y cadencias. Arranque + feedback: levantamiento y devolución de hallazgos. Plan de acción: hipótesis, responsables, recursos, riesgos y métricas. Ciclo de cambio-evaluación: implementación, monitoreo, aprendizaje y estandarización.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Entregables mínimos por fase",
          open: false,
          text: "Entrada/start-up: contrato, plan de trabajo, mapa de actores y de riesgos. Arranque/feedback: informe de hallazgos priorizados y acuerdo de criterios de éxito. Plan de acción: cartera priorizada con cronograma, responsables y tablero. Ciclo de cambio: tableros antes–después, retrospectivas y lecciones aprendidas.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ruta de estudio sugerida",
          open: false,
          text: "1) Leer 6.1–6.5; 2) construir un canvas de intervención con fases/entregables; 3) diseñar un feedback de hallazgos ficticio; 4) elaborar un plan de acción con tres palancas de alto impacto; 5) definir el tablero de seguimiento y la agenda de retrospectivas.",
        },
      ],
      subthemes: [
        {
          id: "6.1",
          numbering: "6.1",
          title: "La intervención: entrada o ingreso",
          content: [
            {
              type: "paragraph",
              text: "La entrada inaugura formalmente la relación de consultoría. Su objetivo es verificar dos condiciones simultáneas: que la organización desea cambiar y que necesita ayuda para hacerlo. De esta validación dependen el sentido y la legitimidad de todo el proceso posterior. La entrada no es una cita comercial; es un ejercicio de encuadre profesional que define problema, alcance, actores y reglas del juego. Se mapea la demanda (dolor declarado), los síntomas observables y las restricciones (tiempo, presupuesto, ventanas operativas), y se contrasta con la capacidad real de la empresa para sostener el cambio. Una buena entrada diferencia expectativas de promesas: lo que la consultoría puede y no puede ofrecer, y en qué plazos y condiciones. Sin este encuadre, la intervención nace con deuda de confianza y expectativas irreales que se pagan en las etapas siguientes.",
            },
            {
              type: "paragraph",
              text: "Además de escuchar el caso, la entrada exige identificar patrocinadores y partes interesadas. Se delimita quién decide, quién influye, quién paga y quién vive el cambio en el trabajo real. Esta cartografía de poder y responsabilidad evita que la intervención dependa solo del entusiasmo de un área y, a la vez, protege al consultor de pedidos cruzados. En organizaciones complejas es frecuente encontrar iniciativas simultáneas; por ello se revisa el historial de consultorías y proyectos recientes para no superponer mensajes ni agotar a los equipos. La entrada prudente integra antecedentes, detecta riesgos políticos y formula una hipótesis inicial de valor que deberá ponerse a prueba en el arranque.",
            },
            {
              type: "paragraph",
              text: "El contrato profesional cristaliza acuerdos. Debe especificar problema a atender, objetivos, entregables, alcance (qué entra y qué no), criterios de éxito, calendario de hitos, confidencialidad, propiedad intelectual, tarifas y condiciones de pago, así como gobernanza (comité de patrocinio, roles, cadencias de revisión). Un contrato claro preserva independencia técnica y evita que el consultor se convierta en ‘apagafuegos’ de urgencias cotidianas. También protege al cliente: previene sobreventa, garantiza trazabilidad de decisiones y acota el riesgo reputacional al normar el uso y la devolución de información sensible. En síntesis, el contrato es una herramienta de calidad y ética, no una simple formalidad administrativa.",
            },
            {
              type: "paragraph",
              text: "La entrada exige un diagnóstico relámpago para confirmar viabilidad. Se realiza una exploración breve con entrevistas clave y revisión documental básica para comprender el contexto, los límites del sistema y los incentivos en juego. La pregunta guía es pragmática: ¿existen condiciones mínimas para trabajar con transparencia y foco? Si la respuesta es negativa, la decisión profesional puede ser proponer condiciones previas (p. ej., definir un patrocinador real) o declinar. La intervención responsable comienza cuando la entrada confirma que hay voluntad, tiempo, acceso y protección ética para indagar sin manipulación de datos ni uso punitivo de la información.",
            },
            {
              type: "paragraph",
              text: "Otro elemento crítico es el contrato psicológico. Más allá del documento legal, la entrada instala un modo de trabajo: franqueza en hallazgos, confidencialidad, respuestas en tiempo, respeto por los rituales de operación y cuidado de la reputación de las personas. Cuando la consultoría se presenta como aliada del desempeño —no como auditor encubierto— aumenta la apertura y la calidad de la información. Para ello, la comunicación inicial debe ser sobria, sin prometer salvaciones rápidas, y anclar desde el inicio la relación entre evidencia, decisiones y aprendizaje.",
            },
            {
              type: "paragraph",
              text: "La entrada también anticipa la estrategia de involucramiento: a quién, cómo y cuándo convocar. Se planifican reuniones de encuadre con la alta dirección y sesiones breves con mandos y referentes para explicar el propósito y resolver inquietudes. Este ‘pre‑arranque’ reduce resistencias y prepara el terreno para el levantamiento de datos. Asimismo, se define el tablero de coordinación (agenda, responsables, medios, repositorio de documentos) que dará soporte a las fases venideras. La intervención gana velocidad cuando la logística inicial está resuelta y todas las partes saben dónde encontrar la última versión de los acuerdos.",
            },
            {
              type: "paragraph",
              text: "Finalmente, la entrada cierra con una propuesta de trabajo y un criterio de ‘go/no‑go’. Si el patrocinio es insuficiente, si no existen condiciones mínimas de acceso a la información o si el alcance pretendido compromete la ética, se debe renegociar o declinar. Esta firmeza protege a ambas partes y preserva la profesión. Cuando el encuadre es claro, el arranque se vuelve una consecuencia natural: hay un contrato, una agenda, reglas compartidas y una primera hipótesis de valor que se pondrá a prueba con datos.",
            },
            {
              type: "accordion",
              header: "Checklist de entrada",
              open: false,
              text: "Problema y alcance; patrocinio y actores; antecedentes y riesgos; contrato (objetivos, entregables, gobierno, confidencialidad); logística inicial y tablero; criterio go/no‑go.",
            },
            {
              type: "accordion",
              header: "Cláusulas clave del contrato",
              open: false,
              text: "Criterios de éxito y métricas; propiedad intelectual; protección de datos; uso y devolución de hallazgos; independencia técnica; calendario de hitos y pagos; comité de patrocinio.",
            },
          ],
        },
        {
          id: "6.2",
          numbering: "6.2",
          title: "Start-Up o arranque encendido",
          content: [
            {
              type: "paragraph",
              text: "Con el contrato firmado, el start‑up modela el rol del consultor y fija el tono de ejecución. Es una fase breve pero decisiva: se instalan cadencias, se alinean expectativas operativas y se asegura que no existan esfuerzos paralelos que colisionen con la intervención. La precisión en esta etapa previene desvíos posteriores: un detalle mal cuidado —una agenda confusa, roles sin definir, comunicaciones ambiguas— se multiplica en costos y fatiga organizacional. Por eso, el arranque inicia con una reunión ejecutiva para reconfirmar objetivos, alcance y reglas, y con una sesión de trabajo con el equipo núcleo para distribuir responsabilidades y acordar plantillas de uso común.",
            },
            {
              type: "paragraph",
              text: "El plan de trabajo del start‑up describe frentes, entregables y eventos clave: calendario de entrevistas, gembas, grupos focales, revisión documental, fechas de feedback y hitos de decisión. Todo evento debe tener propósito, responsables, insumos y productos definidos. Se construye un plan de riesgos con supuestos explícitos (p. ej., disponibilidad de jefaturas, ventanas sin picos operativos) y acciones de mitigación. La disciplina aquí es de proyecto: un tablero visible, actualizado semanalmente, con semáforos y acuerdos de ‘quién hace qué y para cuándo’, reduce incertidumbre y aumenta la confianza en la conducción.",
            },
            {
              type: "paragraph",
              text: "Una tarea central del arranque es calibrar el lenguaje y la cultura. Antes de levantar datos masivamente, el consultor observa reuniones, recorre el piso de trabajo y toma contacto con referentes informales para comprender normas no escritas, símbolos y tensiones latentes. Esto permite adaptar instrumentos (guías de entrevista, cuestionarios, listas de cotejo) al contexto local para que resulten comprensibles y pertinentes. El objetivo es eliminar ‘traducciones’ innecesarias y evitar que la intervención sea percibida como un cuerpo extraño que no reconoce la identidad de la organización.",
            },
            {
              type: "paragraph",
              text: "El arranque también revisa iniciativas previas: qué se intentó, qué funcionó, qué no y por qué. Este inventario evita repetir errores, suma aprendizajes y reconoce esfuerzos, reforzando la noción de continuidad más que de ‘borrón y cuenta nueva’. Con base en ello, se eligen victorias tempranas plausibles que generen tracción y credibilidad. Las victorias tempranas no son gestos cosméticos: deben resolver un dolor real con bajo costo y alta visibilidad, actuando como prueba de concepto del estilo de trabajo y del valor de la intervención.",
            },
            {
              type: "paragraph",
              text: "En comunicación, el start‑up diseña mensajes por audiencia (dirección, mandos, personal operativo, representantes sindicales, si aplica), con claridad sobre el porqué, el para qué y el cómo del proceso. Se establecen canales de ida y vuelta para preguntas y objeciones, y se explica la protección de datos y la confidencialidad de respuestas. Esta transparencia aumenta la sinceridad y disminuye la ansiedad frente a entrevistas y encuestas. El consultor, desde el primer día, debe ser ejemplo de puntualidad, claridad y respeto por la operación: se entra a aprender, no a juzgar.",
            },
            {
              type: "paragraph",
              text: "Otra decisión clave del arranque es la composición del equipo de proyecto. Se buscan perfiles con legitimidad técnica y social, y se establece la independencia mínima necesaria para procesar información sensible sin conflictos de interés. Se reparte el trabajo entre levantamiento, análisis, documentación y soporte logístico, con protocolos de reemplazo para sostener la marcha si alguien falta. El aprendizaje se captura desde el día uno en una bitácora de proyecto, porque la intervención es, también, un ejercicio de construcción de capacidades internas.",
            },
            {
              type: "paragraph",
              text: "El start‑up cierra con un ‘día cero’ operativo: instrumentos listos y piloteados, calendario distribuido, permisos de acceso, repositorio organizado, plantillas de notas, guiones validados y criterios de calidad acordados. A partir de allí, cada interacción producirá datos confiables y conversaciones útiles. La fase siguiente —arranque con feedback— se beneficiará de este orden inicial: menos fricción, más foco y un equipo que comparte lenguaje, cadencias y expectativas realistas.",
            },
            {
              type: "accordion",
              header: "Entregables del start‑up",
              open: false,
              text: "Plan de trabajo y riesgos; tablero de proyecto; set de instrumentos piloteados; agenda y permisos; plan de comunicación; criterios de calidad y ética; victorias tempranas.",
            },
            {
              type: "accordion",
              header: "Riesgos típicos y antídotos",
              open: false,
              text: "Desvíos por indefinición de roles → RACI y tablero visible; saturación de equipos → calendario consensuado; resistencias → comunicación segmentada y patrocinio activo; esfuerzos paralelos → inventario y coordinación.",
            },
          ],
        },
        {
          id: "6.3",
          numbering: "6.3",
          title: "Intervención de consultoría: arranque y feedback",
          content: [
            {
              type: "paragraph",
              text: "En esta etapa comienza el trabajo de campo: se recopila información mediante guías de entrevista, observación del trabajo real, encuestas breves y revisión documental. El propósito no es ‘juntar datos’, sino construir una explicación compartida y priorizada de causas y efectos. Por eso, cada instrumento responde a hipótesis y cada hipótesis anticipa una decisión. La calidad de la muestra, la estandarización de guiones y la disciplina de registro garantizan comparabilidad y trazabilidad. El equipo protege la confidencialidad y documenta incidencias para comprender sesgos de no respuesta o perturbaciones operativas.",
            },
            {
              type: "paragraph",
              text: "La integración de hallazgos se realiza en iteraciones. Tras cada bloque de levantamiento, el equipo se reúne para contrastar percepciones, revisar patrones y decidir si ajustar instrumentos o rutas. Este ciclo evita desperdiciar tiempo en preguntas poco informativas y permite profundizar en zonas críticas. Se construye un mapa causal que conecte problemas con reglas, flujos, capacidades e incentivos. El objetivo es llegar al feedback con mensajes claros, evidencia suficiente y alternativas plausibles, evitando listados interminables que confundan en lugar de orientar.",
            },
            {
              type: "paragraph",
              text: "El feedback es un evento de gestión del cambio. No se limita a ‘informar’ resultados; busca alinear comprensión y compromiso. Se estructura en tres capas: (1) hechos y evidencias; (2) interpretación e hipótesis; (3) opciones de intervención con criterios de éxito y riesgos. La presentación debe ser sobria, con pocas láminas de alto contenido, tableros antes–después y ejemplos de trabajo real observados. Se separan problemas de personas y se cuida el lenguaje para no desatar defensividad. La consigna es discutir opciones, no culpas.",
            },
            {
              type: "paragraph",
              text: "Una práctica útil es realizar pre‑feedback con el patrocinador para calibrar sensibilidad política y prever objeciones. Luego, en la sesión amplia, se invita a representantes de las áreas afectadas y se acuerdan criterios de priorización (impacto, urgencia, factibilidad). El consultor facilita la conversación, evitando que predominen voces dominantes y asegurando que las preocupaciones operativas sean escuchadas. El resultado buscado es una cartera preliminar de iniciativas y la autorización para elaborar el plan de acción con responsables y plazos.",
            },
            {
              type: "paragraph",
              text: "La ética vuelve a ser central: se protege la identidad de quienes aportaron información, se reportan resultados agregados y se explicita el uso de los datos. Si emergen temas sensibles (p. ej., conductas impropias), se acuerdan canales separados y protocolos para su tratamiento, sin confundir el proceso de DO con funciones disciplinarias. Esta claridad preserva la confianza y permite que futuras rondas de diagnóstico sigan contando con cooperación genuina.",
            },
            {
              type: "paragraph",
              text: "Las ‘victorias tempranas’ se utilizan como palancas simbólicas y prácticas. Al elegir una o dos intervenciones sencillas y de alto valor —por ejemplo, clarificar un acuerdo de interfaz entre áreas críticas o eliminar un reporte redundante que consume horas— se demuestra que la intervención produce beneficios reales. Estas mejoras elevan la motivación para afrontar cambios más complejos y actúan como prueba de la dinámica de trabajo basada en evidencia, acuerdos y seguimiento.",
            },
            {
              type: "paragraph",
              text: "El arranque y feedback concluye con un documento de decisiones: qué se prioriza, qué queda en backlog con criterio, quién lidera cada frente, cómo se medirá el resultado y cuál es la cadencia de seguimiento. Ese documento se convierte en contrato operativo del plan de acción. Con esto, la intervención pasa de la explicación a la ejecución, manteniendo una línea de aprendizaje que acompañará todo el ciclo de cambio‑evaluación.",
            },
            {
              type: "accordion",
              header: "Guion de devolución de hallazgos",
              open: false,
              text: "1) Hechos y evidencias; 2) hipótesis y alternativas; 3) criterios de priorización; 4) decisiones y responsables; 5) riesgos y mitigaciones; 6) próximos pasos y cadencias.",
            },
            {
              type: "accordion",
              header: "Métricas de calidad del feedback",
              open: false,
              text: "Asistencia de actores clave; claridad de decisiones; porcentaje de hallazgos accionados; compromisos con fecha; percepción de utilidad; seguimiento a 30/60/90 días.",
            },
          ],
        },
        {
          id: "6.4",
          numbering: "6.4",
          title: "Plan de acción intervención en toda la organización",
          content: [
            {
              type: "paragraph",
              text: "El plan de acción es el puente operativo entre el diagnóstico y la transformación. Su propósito es traducir hallazgos en decisiones, y decisiones en cambios observables, cuidando coherencia, secuencia y riesgos. Parte de una teoría del cambio explícita: si intervenimos en tales palancas (procesos, roles, información, habilidades), entonces se modificarán conductas clave y mejorarán los resultados (calidad, tiempo, costo, servicio, seguridad y clima). El plan no es un listado de tareas; es un sistema de compromisos con responsables, métricas y cadencias. Comienza delimitando alcance (qué entra y qué no), dependencias críticas y condiciones habilitantes. Con ello se construye un portafolio priorizado que balancea victorias tempranas (alto valor, bajo esfuerzo) con iniciativas estructurales (alto impacto, mayor complejidad), evitando saturar a la organización y respetando ventanas operativas. La claridad en definiciones previene el activismo improductivo: menos es más cuando lo menos está bien elegido y se ejecuta con disciplina.",
            },
            {
              type: "paragraph",
              text: "La priorización usa criterios transparentes: impacto esperado, urgencia, factibilidad técnica y social, y riesgo. Se valoran sinergias entre iniciativas (qué libera capacidad o destraba otras) y se mapea la ruta crítica. El portafolio se visualiza en un tablero que muestra cada iniciativa con su hipótesis de intervención, entregables, indicadores leading y lagging, y umbrales de éxito. La matriz de riesgos anota probabilidad, impacto y mitigaciones, y distingue entre riesgos de ejecución (retrasos, cuellos de botella), de adopción (resistencias, falta de habilidades), de integridad (datos, ética) y de sostenibilidad (rotación, cambio de prioridades). Esta transparencia reduce fricción política y facilita decisiones informadas cuando surgen imprevistos, porque el plan ya contiene criterios para reordenar el esfuerzo sin perder el rumbo estratégico.",
            },
            {
              type: "paragraph",
              text: "Las palancas se agrupan en cuatro campos complementarios. En procesos: estandarización, eliminación de desperdicios, rediseño de flujos y acuerdos de interfaz (SIPOC) con métricas a nivel de ciclo y calidad en la fuente. En estructura: clarificación de autoridad y responsabilidad (matrices RACI), ajustes de carga y límites WIP, y simplificación de foros de decisión. En personas: capacitación focalizada, retroalimentación efectiva, fortalecimiento de liderazgo medio y prácticas de reconocimiento que refuercen la conducta esperada. En estrategia/medio: foco del portafolio, alineación de políticas y criterios de priorización. El plan especifica para cada iniciativa su secuencia, entregables intermedios y ‘condiciones de salida’ que permitan declarar cierre real, no sólo actividad completada. La coherencia entre campos evita efectos colaterales: cambiar procesos sin dotar de habilidades o sin reglas claras produce recaídas.",
            },
            {
              type: "paragraph",
              text: "La gobernanza convierte el plan en ejecución coordinada. Se establece un comité de patrocinio con roles definidos (decidir, remover obstáculos, proteger foco), un equipo núcleo de implementación (planificar, sincronizar, medir) y responsables por frente. Se fijan cadencias: reuniones quincenales de seguimiento, gembas ejecutivas, retrospectivas mensuales y cortes 30‑60‑90 días. Cada cadencia usa un tablero común que integra avances, métricas y riesgos, y activa decisiones oportunas (replanificar, escalar, detener). La disciplina de gobierno separa espacios: el seguimiento no es un reporte de estado, es un foro de toma de decisiones con evidencia; la comunicación no es propaganda, es gestión de expectativas y de acuerdos. Sin gobernanza, los planes colapsan bajo el peso de la operación diaria.",
            },
            {
              type: "paragraph",
              text: "El plan incluye un diseño de comunicación y de involucramiento. Se segmentan audiencias (dirección, mandos, equipos, representantes sindicales, cuando aplique), con mensajes sobre el porqué, el para qué y el cómo. Se anuncian hitos, se explican beneficios, costos y riesgos, y se habilitan canales para preguntas y objeciones. Las ‘victorias tempranas’ se programan como demostraciones públicas de valor: pequeñas mejoras de alto simbolismo que prueban que el cambio es posible y deseable. La comunicación es bidireccional: además de informar, recoge señales del sistema para ajustar ruta. Cuidar el tono y la oportunidad de los mensajes reduce ansiedad y acelera la adopción, especialmente en cambios que tocan identidad profesional y rutinas arraigadas.",
            },
            {
              type: "paragraph",
              text: "Toda iniciativa detalla indicadores leading (esfuerzos y condiciones que predicen resultados) y lagging (resultados logrados). Ejemplo: para reducir tiempos de ciclo, leading puede ser porcentaje de procesos con estándar visible y acuerdos de interfaz firmados; lagging, el tiempo medio desde solicitud a entrega y la tasa de retrabajo. Se define línea base, metas y límites de control para distinguir variación común de especial. La medición sirve para decidir; por ello, cada indicador tiene dueño y se revisa en cadencias preacordadas. Los datos se depuran y documentan con reglas de negocio (diccionario, catálogos, trazabilidad). Los tableros simples, que integran desempeño operativo, clima y riesgos, son preferibles a paneles exuberantes que nadie usa para decidir.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el plan de acción prevé aprendizaje y sostenibilidad. Cada ciclo captura lecciones (qué funcionó, qué no, por qué), documenta cambios en instructivos y políticas, y actualiza formación. Se definen criterios de salida del consultor y de transferencia de capacidades: quién asumirá la gobernanza, cómo se mantendrán las cadencias, qué métricas quedarán institucionalizadas y qué auditorías internas asegurarán permanencia. Un plan maduro deja menos dependencia de héroes y más disciplina instalada. Si el plan no aumenta la capacidad de la organización para resolver problemas con método, la intervención habrá sido sólo un evento; el propósito es transformar hábitos de gestión para que la mejora sea continua.",
            },
            {
              type: "accordion",
              header: "Plantilla mínima del plan",
              open: false,
              text: "Objetivo y teoría del cambio; alcance y dependencias; cartera priorizada; SIPOC/RACI; riesgos y mitigaciones; métricas (leading/lagging) y líneas base; cadencias de gobierno; plan de comunicación; criterios de salida y transferencia.",
            },
            {
              type: "accordion",
              header: "Criterios de priorización",
              open: false,
              text: "Impacto y urgencia; factibilidad técnica y social; riesgo; sinergias/destrabes; capacidad de absorción; costo/beneficio; visibilidad para victorias tempranas.",
            },
          ],
        },
        {
          id: "6.5",
          numbering: "6.5",
          title: "Ciclo de cambio evaluación",
          content: [
            {
              type: "paragraph",
              text: "El ciclo de cambio‑evaluación convierte el plan en resultados y aprendizaje. Se organiza en bucles cortos (planear‑hacer‑verificar‑actuar) que permiten probar, medir y escalar. La premisa es pragmática: implementar no es ejecutar tareas, es producir efectos observables en desempeño y conducta. Por ello, cada intervención se despliega con hipótesis explícitas (‘si… entonces…’), criterios de éxito, responsables y riesgos. La ejecución se inicia con pilotos controlados en contextos de alta disposición, para reducir incertidumbre y ajustar con rapidez. Luego se amplía el alcance, cuidando capacidad de absorción del cambio y consistencia entre áreas. La evaluación no espera al final; acompaña desde el primer día con indicadores leading que advierten desvíos a tiempo. Al cierre de cada iteración se decide continuar, reconfigurar o detener, con disciplina para evitar costos hundidos.",
            },
            {
              type: "paragraph",
              text: "El monitoreo integra métricas de calidad, tiempo, costo, servicio, seguridad y clima, y las presenta en tableros visibles por público. La clave es distinguir señales útiles del ruido. Se definen límites de control para no reaccionar espasmódicamente a variaciones comunes, y se investigan sólo las especiales con análisis de causa raíz (5 Porqués, Ishikawa, Pareto). Los indicadores leading (p. ej., porcentaje de procesos con estándar actualizado, cadencia de feedback 1:1, horas de entrenamiento efectivo) anticipan resultados; los lagging (p. ej., productividad, defectos por unidad, NPS interno, incidentes) confirman impacto. La disciplina de datos exige depuración, trazabilidad y consistencia entre versiones. Sin datos confiables, la conversación estratégica se degrada en opiniones y la intervención pierde rumbo.",
            },
            {
              type: "paragraph",
              text: "La dimensión humana del cambio requiere un tratamiento explícito. Se preparan a mandos y referentes como ‘agentes de sentido’: explican propósito, cuidan la seguridad psicológica, modelan conductas y retiran obstáculos cotidianos. La formación es situada: micro‑habilidades aplicadas a problemas reales (reuniones efectivas, acuerdos de interfaz, feedback, resolución de conflictos). Se reconocen avances visibles para reforzar hábitos y se atienden resistencias con escucha profesional, diferenciando objeciones razonables (riesgos, cargas) de intereses particulares. Un cambio técnicamente impecable fracasa si no comunica valor y si no protege la dignidad de las personas que lo viven en el trabajo real.",
            },
            {
              type: "paragraph",
              text: "La gestión de riesgos acompaña cada iteración. Se monitorean eventos con potencial alto (interrupciones de servicio, fallas de seguridad, incumplimientos regulatorios) y se activan planes de contingencia con roles definidos. La lectura estadística ayuda: diferenciar variación común de especial evita reacciones innecesarias; observar tendencias y estacionalidades orienta decisiones de capacidad. En cadenas con múltiples traspasos, el mapeo de flujo de valor revela cuellos, esperas y retrabajos que, atendidos, producen saltos de desempeño. Documentar incidentes y su tratamiento alimenta un repositorio de aprendizaje útil para auditorías internas y para futuras intervenciones.",
            },
            {
              type: "paragraph",
              text: "La evaluación de resultados combina evidencia cuantitativa y cualitativa. Se contrastan líneas base con metas, se calculan deltas y, cuando es pertinente, se usan comparaciones controladas (antes–después por área, cohortes, o pruebas A/B en procesos digitales). Además de ROI financiero, se reporta valor para colaboradores y clientes (menor fricción, mayor claridad de rol, mejor experiencia). Se registran efectos no deseados y costos de oportunidad para corregir diseño. La evaluación honesta protege la credibilidad del patrocinio y legitima decisiones difíciles (continuar, ampliar, pivotear o clausurar iniciativas).",
            },
            {
              type: "paragraph",
              text: "El cierre responsable incluye transferencia de capacidades y estandarización. Las prácticas exitosas se formalizan en políticas, instructivos y tableros; se ajustan descripciones de rol y se integran métricas a la gestión normal. El equipo registra lecciones aprendidas y define pauta de auditoría interna para sostener logros. La ‘salida’ del consultor se programa como un proceso, no como un evento: handover documentado, acompañamiento decreciente y soporte por demanda. Sostener implica asegurar que la organización decide y mejora con método, sin depender de la consultoría para cada ajuste. Cuando esto ocurre, el ciclo ha cumplido su propósito: mejores resultados hoy y mayor capacidad para el mañana.",
            },
            {
              type: "paragraph",
              text: "La tipología de intervenciones se articula en cuatro familias complementarias. Procesos humanos: comunicación, trabajo en equipo, gestión de conflictos, sesiones de feedback estructurado, grupos T cuando son pertinentes. Tecno‑estructurales: rediseño organizativo, simplificación de procesos, sistemas de gestión visual, límites de trabajo en progreso. Capital humano: selección, desarrollo, compensación y desempeño alineados a la estrategia. Estratégicas y del medio: foco del portafolio, alianzas, políticas y ajustes regulatorios. El ciclo usa combinaciones prudentes según madurez y contexto, evitando ‘recetas’ universales. La coherencia entre familias maximiza impacto y reduce recaídas.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el ciclo instala una cultura de mejora continua. Se normalizan las retrospectivas, los experimentos controlados, el uso de datos confiables y las conversaciones basadas en evidencia. La organización aprende a elegir pocas prioridades, a ejecutarlas bien y a documentar su aprendizaje. Esa disciplina —más que cualquier herramienta— es la verdadera intervención: un modo de gestionar que cuida a las personas, protege la operación y entrega valor sostenido a clientes y comunidad.",
            },
            {
              type: "accordion",
              header: "Tablero 30‑60‑90 (guía)",
              open: false,
              text: "30 días: pilotos y victorias tempranas; 60 días: escalamiento controlado y métricas leading en verde; 90 días: resultados lagging, estandarización inicial y handover planificado.",
            },
            {
              type: "accordion",
              header: "Criterios de sostenibilidad",
              open: false,
              text: "Prácticas formalizadas; métricas institucionalizadas; cadencias en calendario; roles y RACI actualizados; auditoría interna definida; capacidad para resolver problemas sin consultor.",
            },
          ],
        },
      ],
    },

    /* 7. Unidad principal */
    {
      id: "7",
      numbering: "Unidad 7",
      title: "El conflicto y el desarrollo organizacional",
      content: [
        {
          type: "paragraph",
          text: "En esta unidad abordamos el conflicto como un fenómeno organizacional normal y, sobre todo, gestionable. Lo tratamos no como un defecto moral ni como una contingencia azarosa, sino como información sobre tensiones entre metas, recursos, identidades profesionales y reglas de juego. El Desarrollo Organizacional (DO) adopta una postura pragmática: el conflicto, bien leído y encuadrado, puede convertirse en energía de mejora. Para ello, distinguiremos niveles (intrapersonal, interpersonal, intra e intergrupal), dinámicas (latencia, percepción, manifestación, intensificación y resolución) y efectos (funcionales y disfuncionales). La clave es pasar de opiniones a evidencia: observar conductas, estructuras, flujos e incentivos que alimentan el desacuerdo, evitando personalizar problemas sistémicos. Este enfoque profesional amplía las opciones de solución y eleva la calidad de las conversaciones laborales.",
        },

        {
          type: "paragraph",
          text: "El conflicto rara vez nace de una sola causa. Puede surgir de metas incompatibles, ambigüedad de roles, escasez de recursos, estilos de liderazgo dispares, reglas no escritas o culturas en fricción. Por eso, la lectura útil integra tres planos: personas (habilidades, emociones, creencias), procesos (estándares, interfaces, tiempos de ciclo) y estructura (autoridad, cargas, foros de decisión). Un marco básico consiste en mapear actores, intereses y poder de decisión; analizar los puntos de contacto entre áreas con herramientas como SIPOC y RACI; y revisar el alineamiento entre políticas formales y prácticas reales. Este mapa evita simplificaciones y ancla el tratamiento del conflicto en causas modificables, no en estereotipos de personalidad o narrativas culposas.",
        },

        {
          type: "paragraph",
          text: "Gestionar conflictos es, en esencia, diseñar condiciones para el acuerdo productivo. La evidencia muestra que la calidad de la comunicación, la claridad de rol y la justicia percibida explican buena parte de la variabilidad en tensiones. De ahí que los métodos profesionales combinen protocolos de conversación (escucha activa, reformulación, criterios de éxito compartidos), mecanismos de solución (mediación, negociación basada en intereses, arbitraje cuando proceda) y cambios en el sistema (estándares visibles, acuerdos de interfaz, cadencias de coordinación). El consultor en DO no ‘apaga incendios’: instala capacidades internas para prevenir, encuadrar y resolver diferencias con rapidez y respeto, protegiendo la operación y la dignidad de las personas.",
        },

        {
          type: "paragraph",
          text: "La dimensión ética es ineludible. Tratar conflictos implica manejar información sensible, cuidar la confidencialidad y evitar usos punitivos de lo expresado. Se requiere un encuadre claro: propósito, límites, reglas de participación, canales de queja y protección contra represalias. Las intervenciones deben separar la resolución de conflictos de los procesos disciplinarios, aun cuando interactúen. Asimismo, es crucial monitorear sesgos (de estatus, de género, de afinidad) que distorsionan la interpretación de comportamientos y decisiones. La equidad procedimental —procesos consistentes, explicaciones razonadas y posibilidad de apelación— es un antídoto probado para reducir resentimientos y prevenir escaladas.",
        },

        {
          type: "paragraph",
          text: "Finalmente, proponemos concebir el conflicto como una fábrica de oportunidades de aprendizaje. Muchos desacuerdos anticipan riesgos operativos o revelan fricciones ocultas en procesos y políticas. Convertirlos en mejoras requiere documentar hallazgos, acordar cambios observables y medir resultados antes–después. Esta unidad conectará conceptos con práctica: tipología, fuentes y proceso del conflicto; métodos para su manejo; y la noción de ‘conflicto positivo’ cuando dispara innovación, clarificación de roles o nuevas rutinas de colaboración. El objetivo formativo es que puedas intervenir con método, criterio y respeto, elevando la efectividad organizacional sin sacrificar el bienestar de las personas.",
        },

        {
          type: "accordion",
          header: "Nivel 1 — Ideas fuerza de la unidad",
          open: false,
          text: "El conflicto es información; se gestiona, no se niega. Lectura multinivel (personas–procesos–estructura). Enfoque de evidencia y acuerdos. Ética y equidad procedimental como condiciones. Aprendizaje y mejora como salida deseable.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Conexiones prácticas (casos típicos)",
          open: false,
          text: "Ambigüedad de rol entre áreas; prioridades en pugna (servicio vs. costo); cuellos en el flujo; reglas no escritas que chocan con políticas; liderazgos con estilos incompatibles; recursos escasos y metas agresivas.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ruta de estudio y práctica",
          open: false,
          text: "1) Mapear actores, intereses y poder; 2) describir proceso y estructura (SIPOC/RACI); 3) identificar fuentes y tipo de conflicto; 4) elegir método (mediación/negociación) y cambios sistémicos; 5) medir efectos y documentar lecciones.",
        },
      ],
      subthemes: [
        {
          id: "7.1",
          numbering: "7.1",
          title: "Conceptualización del conflicto",
          content: [
            {
              type: "paragraph",
              text: "En el ámbito organizacional, el conflicto se entiende como una tensión percibida entre actores que dependen unos de otros para lograr resultados y, sin embargo, consideran incompatibles sus metas, medios, tiempos o criterios de calidad. No es un accidente ajeno a la vida de las empresas: forma parte de la interacción cotidiana entre personas, equipos y áreas que operan con información imperfecta, recursos limitados y presiones externas. Concebirlo así desplaza la pregunta de “¿cómo evitarlo por completo?” hacia “¿cómo reconocerlo a tiempo, contenerlo y transformarlo en mejoras?” Desde el enfoque de desarrollo organizacional (DO), el conflicto es señal de aprendizaje pendiente: revela supuestos ocultos, reglas de colaboración implícitas y desequilibrios de autoridad o carga de trabajo. Por ello, su manejo exige método: clarificar la tarea primaria, explicitar acuerdos, diseñar canales de comunicación y medir efectos en desempeño y clima.",
            },
            {
              type: "paragraph",
              text: "Una conceptualización útil distingue tres capas del conflicto: cognitiva (interpretaciones y expectativas), emocional (reacciones afectivas derivadas del agravio percibido) y conductual (respuestas observables como evitación, confrontación, bloqueo o cooperación). El trabajo con conflictos comienza por nombrar lo que sucede en cada capa sin culpabilizar: ¿qué datos tenemos?, ¿qué suposiciones operan?, ¿qué emociones están en juego?, ¿qué conductas inhiben el logro de la tarea? El lenguaje importa: describir comportamientos y efectos, más que etiquetas personales, permite avanzar. Con esta mirada, los desacuerdos dejan de ser “fallas de carácter” y pasan a ser “problemas de coordinación” susceptibles de diseño: acuerdos de interfaz, criterios de prioridad, protocolos de escalamiento y rituales de retroalimentación.",
            },
            {
              type: "paragraph",
              text: "El conflicto no siempre es disfuncional. Una dosis saludable mantiene viva la discusión técnica, previene la complacencia y expone riesgos operativos que la jerarquía o la inercia tienden a ocultar. El daño ocurre cuando las tensiones se personalizan, se cronifican o se convierten en luchas de poder desconectadas de la tarea. En esos casos, crecen el retrabajo y el desgaste, se resiente la seguridad psicológica y declina la calidad de la información que llega a la dirección. Por eso, el DO busca hacer “visible” el conflicto temprano, encuadrarlo en términos de propósito y datos, y dotar a los equipos de habilidades conversacionales y decisiones de diseño que reduzcan las oportunidades de fricción innecesaria.",
            },
            {
              type: "paragraph",
              text: "Otra clave conceptual es reconocer el papel de la interdependencia. Sin interdependencia no hay conflicto: si cada actor pudiera lograr sus metas sin afectación mutua, la tensión no emergería. En la práctica, ventas depende de producción, producción de compras y logística, y todas dependen de finanzas y tecnología; los tiempos, estándares y prioridades de una función impactan a las demás. El conflicto aparece cuando la arquitectura de esa interdependencia es opaca, ambigua o está mal secuenciada. El remedio rara vez es “pedir que la gente se lleve bien” y casi siempre es rediseñar reglas, información y decisiones en los puntos de acoplamiento.",
            },
            {
              type: "paragraph",
              text: "Conceptualizar el conflicto como “diferencia legítima a gestionar” habilita una ética de respeto: se discuten ideas, no dignidades; se separan hechos de interpretaciones; se aceptan límites de rol y se acuerdan formas de reparar cuando hay daño. Esta ética se institucionaliza mediante políticas claras de trato, mecanismos de escucha, mediación imparcial y seguimiento. Así, el manejo del conflicto deja de depender de “buenas voluntades” y se vuelve una competencia del sistema. En síntesis, el conflicto es un fenómeno ubicuo y gestionable que, abordado con método y cuidado, puede convertirse en palanca de aprendizaje y de desempeño.",
            },
            {
              type: "paragraph",
              text: "Una organización madura acepta que la discrepancia es costo de pensar y trabajar en conjunto. Por eso, define quién decide qué y con qué información, establece cadencias de revisión (diarias, semanales, mensuales) y crea espacios para surfacing de tensiones antes de que detonen. Al mismo tiempo, entrena a mandos y equipos en habilidades conversacionales: indagación, asertividad, re-encuadre de posiciones a intereses y uso de datos para anclar las discusiones. Con todo ello, el conflicto transita de “sorpresa incómoda” a “materia prima” de mejora continua.",
            },
            {
              type: "paragraph",
              text: "Finalmente, conceptualizar el conflicto exige reconocer límites: no todo desacuerdo es resoluble por acercamiento; existen asimetrías legítimas de autoridad y restricciones externas (regulación, presupuesto) que fijan fronteras. El objetivo no es armonía permanente, sino coordinación efectiva y trato digno aun en el desacuerdo. Este realismo evita promesas imposibles y orienta la energía a rediseños y acuerdos que el sistema puede sostener en el tiempo.",
            },
            {
              type: "accordion",
              header: "Ideas clave",
              open: false,
              text: "Conflicto = tensión en interdependencia; capas cognitiva–emocional–conductual; no siempre es disfuncional; requiere datos, acuerdos y diseño.",
            },
            {
              type: "accordion",
              header: "Preguntas de arranque",
              open: false,
              text: "¿Cuál es la tarea primaria? ¿Qué datos compartimos? ¿Qué reglas de interfaz faltan? ¿Quién decide y cómo escalamos?",
            },
          ],
        },

        {
          id: "7.2",
          numbering: "7.2",
          title: "Perspectiva histórica del conflicto",
          content: [
            {
              type: "paragraph",
              text: "Históricamente, el conflicto organizacional ha sido interpretado de manera muy distinta según la época. La visión clásica, influida por el taylorismo y por estructuras jerárquicas rígidas, lo consideró un fallo a suprimir: la “buena organización” era aquella sin disenso visible, con obediencia y disciplina como virtudes cardinales. En este marco, los desacuerdos eran sinónimo de indisciplina o de deficiencias individuales, y la prescripción habitual consistía en reforzar control y estandarización. El problema es que esta mirada confundió silencio con alineación y acalló señales tempranas sobre problemas de seguridad, calidad o equidad. El costo lo pagaban la innovación y la confianza.",
            },
            {
              type: "paragraph",
              text: "Con el movimiento de relaciones humanas (Hawthorne) y la sociotécnica (Tavistock), la perspectiva cambia: se reconoce que las personas no son piezas reemplazables y que la cooperación depende de sentido, información y estructura. La investigación organizacional empieza a ver al conflicto como fenómeno natural derivado de metas múltiples y de interdependencias. A la par, el pensamiento sistémico y la cibernética introducen la idea de retroalimentación: las tensiones son señales que pueden usarse para corregir el rumbo. La consultoría de procesos, la investigación-acción y el DO traducen este giro en prácticas: conversación de calidad, reglas de interfaz, aprendizaje en el trabajo.",
            },
            {
              type: "paragraph",
              text: "A finales del siglo XX y en el siglo XXI, la visión “interactiva” del conflicto se vuelve dominante: cierto nivel de conflicto, bien encuadrado, promueve creatividad, evita el pensamiento grupal y acelera decisiones informadas. El énfasis pasa de “eliminar” a “gestionar” y “canalizar”. Se diferencia entre conflicto de tarea (sano cuando mantiene el debate técnico), de proceso (sobre cómo se coordina el trabajo) y relacional (más riesgoso por su carga emocional). Las metodologías contemporáneas —lean, agile, organizaciones que aprenden— institucionalizan mecanismos para ventilar tensiones: retrospectivas, tableros, acuerdos explícitos y escalamiento.",
            },
            {
              type: "paragraph",
              text: "En paralelo, crece la sensibilidad hacia el clima laboral, la seguridad psicológica y la diversidad. Se reconoce que grupos históricamente subrepresentados han sido silenciados y que patrones de poder pueden convertir los conflictos en experiencias de daño. Las políticas de trato digno, la mediación imparcial y la formación en sesgos y habilidades conversacionales se vuelven parte del estándar profesional. El objetivo no es uniformidad, sino pluralidad canalizada por reglas claras que protegen la dignidad y promueven la cooperación.",
            },
            {
              type: "paragraph",
              text: "En América Latina, el enfoque ha debido dialogar con realidades laborales y sindicales específicas, con niveles variables de institucionalidad y con culturas de alta evitación del conflicto. El DO ha servido de puente práctico: en lugar de negar tensiones, las hace visibles y diseñables; en lugar de individualizarlas, las trata como problemas de sistema. Con ello, muchas organizaciones han convertido conflictos crónicos en proyectos de rediseño de procesos, roles e indicadores, elevando desempeño y confianza.",
            },
            {
              type: "paragraph",
              text: "La historia enseña prudencia: ni el maximalismo del “todo se negocia” ni el minimalismo del “todo se manda” producen resultados sostenibles. El arte directivo consiste en distinguir qué se decide centralmente, qué se decide localmente y qué se decide en foros de coordinación, con datos y criterios compartidos. Con ese encuadre, el conflicto ocupa su lugar: un flujo de información duro pero valioso que, bien usado, mejora decisiones y resultados.",
            },
            {
              type: "paragraph",
              text: "Así, la perspectiva histórica desemboca en una conclusión práctica: no gestionamos conflicto por moda, sino porque es condición de aprendizaje y de desempeño en sistemas abiertos. La madurez reside en instalar estructuras, rituales y habilidades para que el disenso se procese a favor del propósito común.",
            },
            {
              type: "accordion",
              header: "Tres enfoques en el tiempo",
              open: false,
              text: "Clásico (suprimir); Relaciones humanas/DO (entender y canalizar); Interactivo (aprovechar para innovar y decidir mejor).",
            },
            {
              type: "accordion",
              header: "Lecciones aplicables",
              open: false,
              text: "Silencio no es alineación; conflicto de tarea ≠ conflicto relacional; reglas y foros importan; seguridad psicológica habilita el aprendizaje.",
            },
          ],
        },

        {
          id: "7.3",
          numbering: "7.3",
          title: "La naturaleza del conflicto",
          content: [
            {
              type: "paragraph",
              text: "La naturaleza del conflicto combina elementos objetivos (recursos, procesos, roles) y subjetivos (percepciones, emociones, identidades). Suele iniciar cuando dos o más partes perciben incompatibilidad en metas o medios, bajo condiciones de interdependencia. Esa percepción activa interpretaciones (“no me priorizan”, “no cumplen”) y emociones asociadas (frustración, enojo, temor), que a su vez impulsan conductas (evitar, competir, colaborar). Por eso, abordarlo requiere intervenir en varias capas a la vez: hacer explícitos los datos, alinear expectativas, diseñar reglas de interacción y contener lo emocional sin negarlo. El DO trabaja sobre todas estas dimensiones, recordando que la “realidad objetiva” y la “realidad percibida” co-construyen el problema.",
            },
            {
              type: "paragraph",
              text: "Otra característica es su escalabilidad: puede manifestarse a nivel intrapersonal (dilemas y ambivalencias), interpersonal (entre dos personas), intragrupal (dentro de un equipo) e intergrupal (entre áreas o funciones). Cada nivel tiene dinámicas propias. Por ejemplo, en lo intragrupal, los subgrupos y alianzas influyen en la lectura de los hechos; en lo intergrupal, emergen estereotipos y sesgos de atribución (“ellos siempre retrasan”). La intervención proporcional considera el nivel predominante y diseña foros y reglas acordes: 1:1, reuniones de equipo, acuerdos de interfaz o comités de coordinación.",
            },
            {
              type: "paragraph",
              text: "La temporalidad también importa. Hay conflictos agudos (detonados por un evento) y crónicos (tensiones persistentes por reglas confusas, cargas desbalanceadas o métricas en conflicto). Los crónicos son más dañinos: erosiona la confianza, normalizan el retrabajo y consumen energía política. Diagnosticarlos implica preguntar por historia, intentos previos y cambios contextuales. Una señal típica de cronicidad es el “bucle de queja” sin experimentos: se repiten narrativas, pero no se prueba nada en el sistema de trabajo. Romper ese bucle exige pilotos con criterios de éxito y plazos breves.",
            },
            {
              type: "paragraph",
              text: "La asimetría de poder es rasgo constitutivo de muchos conflictos organizacionales. Quien decide presupuestos, evalúa desempeño o asigna carga de trabajo tiene más capacidad de moldear los términos del desacuerdo. El diseño institucional debe reconocer esa asimetría y proveer salvaguardas: métricas transparentes, procesos de apelación, mediación imparcial, y participación informada en decisiones que afectan significativamente el trabajo. Sin estas salvaguardas, los conflictos pueden derivar en daño y en silencios costosos para el desempeño.",
            },
            {
              type: "paragraph",
              text: "Asimismo, los conflictos no son puramente “psicológicos”: suelen anclarse en estructuras y procesos. Si dos áreas tienen metas incompatibles (volumen vs. variedad; rapidez vs. control), el conflicto está diseñado. Redefinir métricas, reglas de prioridad y protocolos de escalamiento es más efectivo que entrenar “actitudes” aisladas. Por eso, el DO distingue entre intervención en comportamiento (habilidades conversacionales) e intervención en sistema (procesos, roles, información), y secuencia ambas con deliberación.",
            },
            {
              type: "paragraph",
              text: "La cultura organiza patrones de conflicto: algunas culturas evitan el disenso y lo desplazan a conversaciones informales; otras lo afrontan frontalmente. Ningún estilo es universalmente superior; lo relevante es su congruencia con la tarea y con el entorno. La madurez consiste en ampliar repertorios: poder sostener debates técnicos con firmeza y respeto, y poder nombrar daños relacionales sin humillar. Esta flexibilidad se aprende practicando en foros seguros (retrospectivas, after action reviews) y con facilitación experta al inicio.",
            },
            {
              type: "paragraph",
              text: "En suma, la naturaleza del conflicto es sistémica y humana a la vez. Tratarlo como asunto de “caracteres” o como “mero diseño” reduce su complejidad y disminuye la eficacia de las soluciones. La vía profesional es combinar datos, diseño y cuidado por la experiencia de las personas que sostienen el trabajo, con el propósito de volver a centrar la energía en cumplir la tarea primaria con calidad, costo y tiempo acordados.",
            },
            {
              type: "accordion",
              header: "Rasgos esenciales",
              open: false,
              text: "Interdependencia; niveles (intra, inter, grupos); agudo vs. crónico; poder y salvaguardas; anclaje estructural; cultura y repertorios.",
            },
            {
              type: "accordion",
              header: "Claves de intervención",
              open: false,
              text: "Hacer visibles datos y reglas; alinear métricas; foros adecuados; pilotos con criterios de éxito; cuidado emocional; mediación imparcial cuando aplique.",
            },
          ],
        },

        {
          id: "7.4",
          numbering: "7.4",
          title: "Fuentes del conflicto",
          content: [
            {
              type: "paragraph",
              text: "Las fuentes del conflicto en organizaciones son múltiples y, a menudo, acumulativas. Una de las más frecuentes es la ambigüedad de roles y de autoridad: cuando no está claro quién decide, quién aprueba, qué estándares rigen o cómo se priorizan tareas, las fricciones son inevitables. Esta ambigüedad suele deberse a manuales desactualizados, procesos cambiantes no documentados o crecimiento orgánico sin rediseño. Otra fuente habitual es la escasez de recursos (tiempo, personal, equipo), que coloca a las áreas en competencia y favorece la optimización local a costa del desempeño global. También, la falta de información o su llegada tardía alimenta sospechas y decisiones contradictorias.",
            },
            {
              type: "paragraph",
              text: "Las diferencias de personalidad y estilos de trabajo contribuyen, pero rara vez explican solas un conflicto sostenido. Lo que las vuelve problemáticas es la ausencia de acuerdos de interacción: tiempos de respuesta, criterios de calidad, canales de contacto, reglas de cortesía profesional. El DO propone formalizar estas “interfaces” para quitarle discrecionalidad al trato cotidiano y convertir expectativas implícitas en compromisos explícitos. Asimismo, metas mal alineadas (por ejemplo, ventas premiada sólo por volumen frente a operaciones responsable por variabilidad) generan incentivos cruzados que casi garantizan tensiones.",
            },
            {
              type: "paragraph",
              text: "Condiciones laborales deficientes (salarios bajos en relación al mercado, prestaciones insuficientes, jornadas excesivas, equipos obsoletos) son caldo de cultivo para el conflicto. Más allá de la equidad, tienen efectos operativos: rotación, ausentismo, desgaste y pérdida de conocimiento tácito. El análisis honesto de costos y de propuesta de valor al empleado ayuda a desactivar conflictos que ninguna “técnica de comunicación” resolverá por sí sola. En organizaciones con sindicatos, la opacidad o la ruptura de canales formales también incrementa el riesgo de conflicto abierto.",
            },
            {
              type: "paragraph",
              text: "Los “conflictos de interés” emergen cuando objetivos personales o de área no están alineados con los institucionales. Sin transparencia y sin mecanismos de rendición de cuentas, es fácil que se prioricen agendas propias sobre la tarea primaria. Las reglas de gobierno, los tableros visibles de desempeño y los comités plurales reducen este riesgo. Por su parte, los cambios tecnológicos y regulatorios introducen tensiones al exigir nuevas competencias, redefinir procesos o alterar criterios de cumplimiento; si no se acompaña con formación y rediseño, la resistencia es predecible.",
            },
            {
              type: "paragraph",
              text: "Las diferencias culturales y de lenguaje profesional entre funciones (finanzas, ingeniería, comercial, legal) también son fuente de fricción. Cada comunidad maneja jergas, métricas y horizontes temporales distintos. Traducir entre mundos requiere intérpretes y artefactos: catálogos de servicios internos, acuerdos de servicio (SLA), glosarios compartidos y reuniones de frontera. Sin estos dispositivos, es común que conflictos técnicos se personalicen y se degraden.",
            },
            {
              type: "paragraph",
              text: "Finalmente, las fuentes personales no deben ignorarse: experiencias previas de injusticia, sesgos, inseguridad o estrés crónico influyen en la lectura de los hechos y en la reactividad. La salud psicosocial del sistema importa. Políticas claras de trato digno, canales de ayuda y acompañamiento, y cargas de trabajo razonables son barreras de contención frente a la escalada de conflictos.",
            },
            {
              type: "paragraph",
              text: "Identificar fuentes no basta: hay que priorizarlas. Un mapa de causas con estimación de impacto y esfuerzo permite intervenir donde la relación costo/beneficio es más favorable. Quitar una restricción estructural (criterios de prioridad, estándares de entrada, autoridad de decisión) suele aliviar múltiples tensiones de golpe. Esa es la vía profesional: diseñar el sistema para que cooperar sea más fácil que chocar.",
            },
            {
              type: "accordion",
              header: "Fuentes típicas (según material)",
              open: false,
              text: "Ambigüedad de autoridad y responsabilidades; diferencias de estilo; condiciones laborales; escasez de recursos; metas e incentivos cruzados; conflictos de interés; información tardía.",
            },
            {
              type: "accordion",
              header: "Antídotos de diseño",
              open: false,
              text: "Manual vivo de roles; acuerdos de interfaz; métricas alineadas; tableros visibles; foros de coordinación; reglas de prioridad; formación y acompañamiento al cambio.",
            },
          ],
        },
        {
          id: "7.5",
          numbering: "7.5",
          title: "Tipología del conflicto",
          content: [
            {
              type: "paragraph",
              text: "Una tipología útil distingue el conflicto según su localización: intrapersonal (tensión interna entre valores o metas), interpersonal (entre dos personas), intragrupal (dentro de un equipo) e intergrupal (entre áreas o unidades). En organizaciones, los dos últimos suelen tener mayor costo porque involucran coordinación y poder. Cada nivel exige estrategias distintas: lo intrapersonal se trabaja con clarificación de rol y coaching; lo interpersonal con conversaciones estructuradas; lo intra e intergrupal con rediseño de procesos, reglas de interfaz y, si es necesario, mediación. Mapear bien el nivel evita personalizar problemas que son sistémicos o, al revés, sobrerregular lo que es una diferencia de estilos. La clave es identificar dónde ocurre la fricción real y qué fronteras están mal definidas.",
            },
            {
              type: "paragraph",
              text: "También conviene tipificar por ‘contenido’: de tareas (qué y con qué criterios), de procesos (cómo y quién decide) y de relaciones (afectos, respeto, confianza). Los dos primeros pueden ser funcionales si aclaran prioridades y mejoran decisiones; el de relaciones tiende a ser disfuncional cuando contamina la cooperación. Un mismo desacuerdo puede mutar: inicia como discusión de tarea, se atasca en procesos y termina como agravio personal. Por eso, la intervención debe separar planos: primero, hechos y criterios; después, reglas y decisiones; finalmente, percepción y emoción. Este orden baja la temperatura y favorece acuerdos.",
            },
            {
              type: "paragraph",
              text: "Otra tipificación útil distingue conflicto vertical (entre niveles), horizontal (entre pares), línea-staff (operación–soporte) y externo (con proveedores o clientes). El vertical suele reflejar ambigüedad de autoridad; el horizontal, fallas de coordinación; el línea-staff, expectativas opuestas (control vs. velocidad); el externo, reglas comerciales o de servicio poco claras. Cada uno se previene con artefactos específicos: matriz RACI, acuerdos de interfaz, catálogos de servicio interno, SLA y protocolos de escalamiento. Diseñar estos dispositivos convierte muchos conflictos habituales en simples discrepancias gestionables.",
            },
            {
              type: "image",
              src: "https://nemdigitalstorage.blob.core.windows.net/nem-main/images/2023/02/03/0f6ca056-a5d9-4d5d-a124-5f6f829fab4e.png",
              alt: "Esquema de tipologías de conflicto (nivel, contenido y estructura)",
            },
            {
              type: "paragraph",
              text: "Desde la dinámica temporal, podemos hablar de conflictos latentes (causas presentes sin conciencia), percibidos (ya se notan), sentidos (ya duelen), manifiestos (conductas observables) y posteriores (resaca o aprendizaje). Intervenir demasiado tarde encarece costos: el conflicto se rigidiza, se acumulan interpretaciones hostiles y crecen los ‘seguidores’ de cada bando. Crear canales tempranos de ‘disenso seguro’ —retrospectivas, ventanillas de mejora, reuniones de interfaz— evita que lo latente se vuelva tóxico. La madurez organizacional se mide por la capacidad de ventilar desacuerdos antes de que escalen.",
            },
            {
              type: "paragraph",
              text: "Por su intensidad, hay conflictos agudos (evento puntual) y crónicos (patrón repetido). Los crónicos casi siempre indican diseño defectuoso: metas contrapuestas, incentivos mal alineados o frontera difusa. Atacarlos con talleres aislados fracasa; requieren rediseño de sistema. Por su visibilidad, hay conflictos abiertos (explícitos) y encubiertos (pasivo-agresivos, sabotaje suave, silencio). Los encubiertos son costosos porque no dan señales claras: se expresan en retrasos, calidad errática o rotación. Hacer visibles reglas, métricas y acuerdos reduce la economía sumergida del conflicto.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el conflicto puede ser funcional o disfuncional. Es funcional cuando mejora decisiones, acelera aprendizaje y fortalece reglas; es disfuncional cuando degrada confianza, desvía energía y oculta errores. La frontera no está en el desacuerdo, sino en el método: datos, respeto, tiempo y lugar adecuados, y una autoridad que cuide límites. Esta tipología no clasifica para etiquetar personas, sino para elegir la intervención proporcional al problema real.",
            },
            {
              type: "accordion",
              header: "Mapa rápido de tipologías",
              open: false,
              text: "Nivel: intra-/interpersonal; intra-/intergrupal. Contenido: tarea, proceso, relación. Estructura: vertical, horizontal, línea-staff, externo. Tiempo: latente→manifiesto. Intensidad: agudo vs. crónico. Visibilidad: abierto vs. encubierto. Función: funcional vs. disfuncional.",
            },
            {
              type: "accordion",
              header: "Señales de cada tipo",
              open: false,
              text: "Tarea: criterios contradictorios. Proceso: cuellos de decisión. Relación: sarcasmo, evitación. Vertical: escalamiento constante. Horizontal: ‘peloteo’ de responsabilidades. Encubierto: retrasos sin causa aparente. Crónico: queja recurrente en encuestas.",
            },
          ],
        },
        {
          id: "7.6",
          numbering: "7.6",
          title: "Proceso, dinámica y consecuencias del conflicto",
          content: [
            {
              type: "paragraph",
              text: "El conflicto suele seguir un ciclo: (1) condiciones latentes (metas incompatibles, información asimétrica, roles difusos); (2) incidente crítico o disparador; (3) percepción e interpretación (atribuciones de intención); (4) emocionalización (activación fisiológica, sesgo de confirmación); (5) conductas (evitar, confrontar, coaligar, escalar); (6) resultados (acuerdos, victorias pírricas, rupturas); y (7) aprendizaje o resaca organizacional. Comprender el ciclo permite intervenir a tiempo: antes del disparador, corrigiendo condiciones; tras el incidente, cuidando la lectura común; durante la emoción, regulando el proceso; en la conducta, proveyendo método; y al final, institucionalizando lecciones. Sin este enfoque, los conflictos se repiten con distintos protagonistas.",
            },
            {
              type: "paragraph",
              text: "La dinámica de escalamiento tiene patrones conocidos: escalada de compromiso (seguir invirtiendo por orgullo), deshumanización del otro (verlo como obstáculo, no como persona), triangulación (buscar aliados para legitimar narrativas) y profecía autocumplida (actúo defensivamente, provoco la respuesta que temía). Estas espirales se alimentan de ‘cuentas’ no saldadas y de reglas implícitas. Antídotos: reglas explícitas de debate (datos primero, luego juicios), pausas procesales (enfriamiento), facilitación neutral y devolución de datos agregados que reanclen la conversación. Las estructuras importan tanto como las habilidades.",
            },
            {
              type: "paragraph",
              text: "Las consecuencias del conflicto mal gestionado son visibles y ocultas. Visibles: retrasos, errores, costos legales, rotación, clientes insatisfechos. Ocultas: ansiedad, cinismo, pérdida de confianza, silos más rígidos, deterioro de la innovación. Muchas horas gerenciales se consumen en ‘gestionar tensiones’ sin métricas; poner números (tiempo invertido, costos de retrabajo, oportunidades perdidas) ayuda a dimensionar el daño y a justificar inversión en diseño y facilitación. No se trata de evitar todo conflicto, sino de evitar su degradación silenciosa.",
            },
            {
              type: "image",
              src: "https://thumbnails.genially.com/5fc9b1b7826b7a0f67619aff/screenshots/231ea93a-9aee-4a65-8c47-2dc865f4d0cf.jpg",
              alt: "Diagrama del ciclo del conflicto y puntos de intervención",
            },
            {
              type: "paragraph",
              text: "No todo es negativo: bien encauzado, el conflicto genera beneficios. Al poner en tensión hipótesis, mejora decisiones; al ventilar problemas ocultos, aumenta transparencia; al obligar a definir reglas, fortalece la coordinación. El ‘conflicto productivo’ requiere seguridad psicológica, estándares claros y un árbitro procesal (líder o facilitador) que cuide tiempos, turnos y respeto. Así, la energía que antes se iba en lucha de poder se convierte en aprendizaje y mejora continua.",
            },
            {
              type: "paragraph",
              text: "En DO, la dinámica también incluye el ‘after-action’: ¿qué aprendimos del caso?, ¿qué señales ignoramos?, ¿qué regla necesitamos para que no se repita? Formalizar cierres con acuerdos escritos, responsables y fechas convierte el conflicto en activo intelectual. Sin cierre, queda rencor; con cierre, queda capacidad. Documentar incidentes críticos, actualizar acuerdos de interfaz y revisar incentivos son prácticas que cierran el ciclo.",
            },
            {
              type: "paragraph",
              text: "En síntesis, el proceso y la dinámica del conflicto no son misterio ni accidente: responden a condiciones, emociones y estructuras previsibles. Gestionarlas con método evita costos invisibles y habilita consecuencias positivas: claridad, confianza y resultados. El DO aporta marco y herramientas para hacerlo sin teatralidad y con respeto por las personas.",
            },
            {
              type: "accordion",
              header: "Ciclo del conflicto (7 pasos)",
              open: false,
              text: "Condiciones latentes → disparador → interpretación → emoción → conducta → resultados → aprendizaje/cierre.",
            },
            {
              type: "accordion",
              header: "Costos y beneficios típicos",
              open: false,
              text: "Costos: tiempo gerencial, retrabajo, rotación, reputación. Beneficios (si se gestiona): mejores decisiones, transparencia, reglas más claras, innovación.",
            },
          ],
        },
        {
          id: "7.7",
          numbering: "7.7",
          title: "Métodos para manejar el conflicto",
          content: [
            {
              type: "paragraph",
              text: "Existen tres familias de intervención: preventivas (diseño), colaborativas (diálogo/negociación) y decisorias (arbitraje/autoridad). La prevención rediseña el sistema para bajar fricción: clarifica roles (RACI), fija reglas de interfaz, instala tableros y protocolos de escalamiento. Las colaborativas buscan acuerdos mutuamente aceptables mediante conversación estructurada, mediación o facilitación. Las decisorias resuelven cuando falla lo anterior o hay asimetrías fuertes: un tercero decide, o la autoridad define criterios por seguridad/continuidad. Elegir método exige leer nivel, contenido e intensidad del conflicto; aplicar arbitraje a un mal proceso es costoso e ineficaz.",
            },
            {
              type: "paragraph",
              text: "Un marco práctico es el modelo Thomas-Kilmann de estilos: competir (imponerse), colaborar (buscar ‘gana-gana’), comprometer (pacto intermedio), evitar (posponer) y acomodar (ceder). Ningún estilo es ‘malo’ en sí; su eficacia depende del contexto. Competir es útil en emergencias o por principios no negociables; colaborar, cuando hay tiempo y relación de largo plazo; comprometer, para destrabar; evitar, cuando el costo de intervenir supera el beneficio inmediato; acomodar, para preservar vínculos en asuntos menores. El liderazgo maduro navega estos estilos con intención, no por inercia.",
            },
            {
              type: "paragraph",
              text: "La negociación efectiva separa personas de problemas, se centra en intereses (no en posiciones), inventa opciones de beneficio mutuo y usa criterios objetivos. Preparación mínima: mapa de intereses, alternativas si no hay acuerdo (BATNA), variables de intercambio, límites y concesiones. En conflictos interáreas, sirve negociar ‘acuerdos de interfaz’ que definan entradas aceptables, tiempos de ciclo, definición de ‘hecho’ y protocolos de excepción. Convertir la negociación en documento operativo evita volver a discutir lo mismo cada mes.",
            },
            {
              type: "image",
              src: "https://www.piranirisk.com/hs-fs/hubfs/Blog%20Pirani/15%20M%C3%A9todos%20de%20an%C3%A1lisis%20de%20riesgos/metodos-de-analisis-de-riesgos.webp?width=850&height=636&name=metodos-de-analisis-de-riesgos.webp",
              alt: "Continuo de métodos: prevención, colaboración y decisión",
            },
            {
              type: "paragraph",
              text: "La mediación introduce un tercero neutral que cuida proceso y lenguaje, ayuda a clarificar intereses, traduce acusaciones en necesidades y facilita propuestas. Útil cuando el vínculo está erosionado y la conversación directa se contamina. La facilitación es más liviana: un tercero estructura la reunión, hace preguntas, sintetiza y asegura participación equilibrada. En ambos casos, el rol no es decidir, sino habilitar que las partes decidan con mejor información y menos defensividad.",
            },
            {
              type: "paragraph",
              text: "El arbitraje o la decisión de autoridad se reserva para impasses críticos o asuntos regulados (seguridad, compliance). Debe usarse con criterios explícitos y comunicados, para no erosionar confianza. Incluso allí, conviene acompañar con rediseño de reglas para que el mismo conflicto no vuelva. De lo contrario, la ‘resolución’ sólo aplaza la próxima crisis. La autoridad sana decide y enseña: explica razones, reconoce costos y convoca a mejorar el sistema.",
            },
            {
              type: "paragraph",
              text: "Por último, el manejo cotidiano requiere micro-hábitos: reuniones 1:1, feedback específico, retroalimentaciones de equipo, ‘check-ins’ emocionales breves y rituales de cierre de acuerdos. Estas prácticas evitan acumulación de tensión y convierten el conflicto en mantenimiento preventivo, no correctivo. El DO instala estos hábitos como parte del sistema de trabajo.",
            },
            {
              type: "accordion",
              header: "Cuándo usar cada método",
              open: false,
              text: "Prevención: conflictos crónicos y de proceso. Colaboración: relación de largo plazo y problemas complejos. Decisión: riesgos altos, regulados o impasse.",
            },
            {
              type: "accordion",
              header: "Checklist para una sesión difícil",
              open: false,
              text: "Definir propósito y reglas; empezar por datos; traducir posiciones en intereses; generar opciones; acordar criterios; documentar acuerdos, responsables y tiempos.",
            },
          ],
        },
        {
          id: "7.8",
          numbering: "7.8",
          title: "El conflicto positivo y el desarrollo organizacional",
          content: [
            {
              type: "paragraph",
              text: "Hablar de ‘conflicto positivo’ no es romanticismo: es reconocer que el desacuerdo bien encauzado es combustible para aprender, innovar y fortalecer la coordinación. El DO lo considera un recurso cuando está anclado en propósito, datos y respeto. Un equipo que nunca discrepa suele ocultar temas difíciles o sufrir pensamiento de grupo; uno que discrepa con método produce decisiones más robustas y resiliencia. La pregunta no es ‘cómo evitamos conflictos’, sino ‘cómo los convertimos en mejoras medibles sin dañar vínculos’.",
            },
            {
              type: "paragraph",
              text: "Tres condiciones habilitan el conflicto positivo: seguridad psicológica (se puede hablar con franqueza sin represalias), estándares claros (qué significa ‘bien hecho’) y un árbitro procesal (líder/facilitador) que cuida tiempos, turnos y lenguaje. Con estas bases, el disenso se formula como hipótesis a contrastar; la crítica se dirige a procesos e ideas, no a personas; y los acuerdos se documentan. El resultado es curiosidad en lugar de defensividad, y aprendizaje en lugar de desgaste.",
            },
            {
              type: "paragraph",
              text: "Prácticas concretas: retrospectivas periódicas, ‘pre-mortems’ (imaginar fracasos antes de iniciar), debates con posiciones asignadas, ‘red teams’, y sesiones de ‘disenso responsable’ donde se obliga a presentar datos y alternativas. Estas dinámicas disminuyen puntos ciegos y balancean optimismo con realismo. En interáreas, los ‘acuerdos de interfaz’ canalizan el conflicto en reglas; en la dirección, los ‘contratos de rol’ evitan duplicidades y vacíos. Todas descansan en un principio: desacordar para decidir mejor.",
            },
            {
              type: "image",
              src: "https://www.anahuac.mx/mexico/sites/default/files/styles/webp/public/noticias/DCA_Resolucion_Conflictos.jpg.webp?itok=zkGruBjs",
              alt: "Prácticas para canalizar el conflicto hacia el aprendizaje",
            },
            {
              type: "paragraph",
              text: "El conflicto positivo requiere métricas: ¿cuánto tiempo invertimos en discusión vs. ejecución?, ¿cuántas decisiones se revierten por información tardía?, ¿qué porcentaje de retrospectivas produce acciones cumplidas? Medir evita caer en ‘debateritis’ y muestra si el disenso mejora resultados. También pide ética: no se usa el ‘conflicto positivo’ para agredir; se vigilan asimetrías de poder; se protege a minorías, y se corrigen sesgos que silencian voces críticas.",
            },
            {
              type: "paragraph",
              text: "En cultura, el símbolo es el ‘permiso para disentir’ dado por la alta dirección con ejemplo personal: pedir contraargumentos, agradecer críticas bien fundadas y cambiar de opinión ante mejor evidencia. Cuando el liderazgo practica esto, el resto se siente autorizado a elevar riesgos y a proponer mejoras. Sin ese modelaje, el discurso queda vacío y las personas aprenden que es más seguro callar.",
            },
            {
              type: "paragraph",
              text: "El vínculo con DO es directo: cada intervención instala estructuras que transforman fricción en aprendizaje (tableros, acuerdos, cadencias) y desarrolla habilidades conversacionales (feedback, negociación, mediación). Con método, el conflicto deja de ser amenaza y se vuelve un circuito virtuoso de mejora continua. Ese es el sentido de ‘positivo’: útil, canalizado y respetuoso de la dignidad.",
            },
            {
              type: "accordion",
              header: "Principios del conflicto positivo",
              open: false,
              text: "Seguridad psicológica; estándares claros; árbitro procesal; crítica a ideas, no a personas; documentación de acuerdos; métricas de aprendizaje.",
            },
            {
              type: "accordion",
              header: "Métricas para monitorearlo",
              open: false,
              text: "Acciones cumplidas en retrospectivas; % de decisiones revisadas por nueva evidencia; tiempos de ciclo de decisión; calidad de acuerdos de interfaz; clima sobre libertad para disentir.",
            },
          ],
        },
      ],
    },

    /* 8. Unidad principal */
    {
      id: "8",
      numbering: "Unidad 8",
      title:
        "Implementación y seguimiento de un programa de desarrollo organizacional",
      content: [
        {
          type: "paragraph",
          text: "Implementar y dar seguimiento a un programa de desarrollo organizacional (DO) implica traducir un diagnóstico en decisiones, rituales de gestión y resultados observables. La implementación comienza por un plan rector que conecta metas estratégicas con iniciativas priorizadas, plazos y responsables. Ese plan debe explicitar hipótesis de cambio (qué palancas moverán qué indicadores), recursos disponibles y riesgos previstos. La secuencia recomendada es: pilotos controlados, evaluación con datos y escalamiento progresivo. De este modo, se evita el ‘gran lanzamiento’ sin aprendizaje y se privilegia la evidencia. Al mismo tiempo, el DO exige claridad contractual: alcance, entregables, criterios de éxito y salvaguardas éticas. Cuando la organización sabe para qué cambia, cómo lo hará y cómo aprenderá durante el proceso, la energía del cambio se orienta y las resistencias se convierten en información útil para ajustar. La implementación efectiva, por tanto, no es un acto único, sino un conjunto de iteraciones disciplinadas que acercan la operación cotidiana a la estrategia deseada.",
        },
        {
          type: "paragraph",
          text: "El gobierno del programa es decisivo. Se recomienda instalar un patrocinador ejecutivo visible, un comité de transformación con decisiones colegiadas y un equipo núcleo que coordine frentes (procesos, personas, tecnología y comunicación). Cada cuerpo de gobierno opera con una cadencia: reuniones quincenales de seguimiento táctico, mensuales de revisión ejecutiva y espacios breves diarios para gestionar el flujo operativo. Para asegurar trazabilidad, se documentan acuerdos, riesgos, dependencias y supuestos. La claridad de roles (matriz RACI) previene solapamientos y zonas grises: quién decide, quién ejecuta, quién asesora y quién debe estar informado. Asimismo, conviene definir reglas de interfaz entre áreas para el traspaso de trabajo y la resolución de conflictos; estas reglas se registran en acuerdos operativos medibles. Sin esta arquitectura de gobierno, la implementación se convierte en una suma de iniciativas aisladas; con ella, el programa obtiene coherencia, velocidad de aprendizaje y capacidad para reaccionar ante contingencias.",
        },
        {
          type: "paragraph",
          text: "La medición convierte la intención en gestión. Desde el inicio se establecen líneas base y tableros que integren indicadores de impacto (calidad, tiempo, costo, servicio, seguridad) y de adopción (uso de nuevas prácticas, cumplimiento de estándares, participación en rituales). La calidad de los datos importa: definiciones claras, fuentes estables, responsables de captura y validaciones periódicas. Para aprender rápido, se diseñan experimentos de bajo costo con hipótesis explícitas (‘si instalamos acuerdos de interfaz y tableros visuales, reduciremos el retrabajo en 20% en 8 semanas’). Las cadencias de revisión fomentan ajustes informados: lo que no funciona se retira o rediseña; lo que funciona se estandariza y escala. El tablero no es un ornamento: es la ‘vista’ del sistema para decidir. Además, se registran lecciones aprendidas y se preserva trazabilidad entre acciones y efectos, lo que protege la credibilidad del programa frente a auditorías internas y al escrutinio de los equipos.",
        },
        {
          type: "paragraph",
          text: "El componente humano del DO requiere una estrategia deliberada. La comunicación debe ser honesta, oportuna y diferenciada por audiencia: explicar por qué se cambia, qué permanecerá y qué se espera de cada rol. La formación se diseña como práctica guiada vinculada a la tarea (no como cursos sueltos): reuniones 1:1, retroalimentación efectiva, solución de problemas, uso de tableros y estándares. El acompañamiento a mandos medios es crítico porque traducen el programa a la rutina del equipo. Para gestionar resistencias, se usan mapas de fuerzas impulsoras y restrictivas y se atienden barreras sistémicas (metas contradictorias, herramientas deficientes, autoridad lejana al punto de valor). Asimismo, se cuidan la seguridad psicológica, la carga de trabajo y la salud psicosocial durante la transición. Implementar con respeto a la dignidad de las personas no es filantropía: es condición de adopción sostenida y de desempeño confiable en el tiempo.",
        },
        {
          type: "paragraph",
          text: "El seguimiento asegura que el cambio se vuelva hábito. Incluye auditorías ligeras al cumplimiento de estándares, retrospectivas periódicas para aprender, actualización de procedimientos y retiro de prácticas obsoletas. A nivel de portafolio, se prioriza y secuencia: no todo puede cambiarse a la vez sin saturar la capacidad de absorción del sistema. La sostenibilidad se logra institucionalizando los ‘rituales del trabajo’: tableros visibles, reuniones breves de coordinación, acuerdos de interfaz y revisiones ejecutivas con foco en resultados y aprendizaje. También se gestionan riesgos (operativos, de talento, regulatorios) con planes de contingencia y umbrales de decisión para pivotear o escalar. Cuando el seguimiento conecta datos con decisiones y refuerza comportamientos observables, el DO deja de ser un proyecto temporal y se convierte en una capacidad organizacional, capaz de adaptarse al entorno, resolver problemas complejos y mantener la dignidad y el desempeño como criterios inseparables.",
        },
        {
          type: "accordion",
          header: "Nivel estratégico: dirección y prioridades",
          open: false,
          text: "Patrocinio ejecutivo visible; narrativa de cambio; criterios de priorización; portafolio integrado; umbrales para escalar/pivotear; vínculo claro con clientes, regulación y objetivos financieros.",
        },
        {
          type: "accordion",
          header: "Nivel táctico: diseño y coordinación",
          open: false,
          text: "Plan rector con hipótesis e indicadores; matriz RACI; acuerdos de interfaz; cadencias de seguimiento; gestión de riesgos y dependencias; formación vinculada a la tarea; documentación viva de procesos.",
        },
        {
          type: "accordion",
          header: "Nivel operativo: hábitos y medición",
          open: false,
          text: "Tableros en el punto de valor; estándares visibles; reuniones breves diarias/semana; retroalimentación específica; auditorías ligeras; registro de lecciones; retiro de prácticas que no agregan valor.",
        },
      ],
      subthemes: [
        {
          id: "8.1",
          numbering: "8.1",
          title: "Estrategias de gestión del clima",
          content: [
            {
              type: "paragraph",
              text: 'Gestionar el clima organizacional significa cuidar, de forma deliberada y continua, la calidad de las experiencias de trabajo que viven las personas: su percepción de justicia, confianza, reconocimiento, colaboración y claridad de rumbo. Una estrategia sólida parte de una premisa: clima no es ánimo pasajero, es información de desempeño humano que debe gobernarse con el mismo rigor que los indicadores de calidad, costo o servicio. Por ello, el enfoque combina medición periódica y ligera, devoluciones rápidas a equipos, acuerdos de mejora y seguimiento visible. El objetivo no es "subir la moral" a costa de la realidad, sino conectar causas (diseño del trabajo, liderazgo, coordinación) con efectos (compromiso, rotación, seguridad, entrega a tiempo) para decidir con evidencia. Así, clima deja de ser un tema blando y se integra al sistema de gestión: estándares de conversación (1:1, retrospectivas), acuerdos de interfaz entre áreas y tableros que muestran tanto resultados como la experiencia que los habilita.',
            },
            {
              type: "paragraph",
              text: "La medición inteligente evita encuestas eternas y privilegia instrumentos breves, confiables y accionables. Entre ellos destacan las encuestas de clima tipo “pulso”, que permiten lecturas frecuentes y focalizadas sobre temas críticos —confianza, carga de trabajo, coordinación interáreas, percepción del liderazgo— y habilitan respuestas oportunas de los mandos. Plataformas de clima laboral facilitan diseñar cuestionarios a la medida (desde plantillas o desde cero), captar señales en tiempo casi real y consolidar la información para análisis y priorización, de forma que las áreas puedan observar tendencias y reaccionar antes de que los problemas se cronifiquen. Esta infraestructura tecnológica no sustituye el criterio, lo disciplina: convierte percepciones en datos comparables y sostiene un ciclo de mejora continua centrado en el trabajo real de las personas, no en impresiones aisladas. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "Con datos en mano, la estrategia se juega en la devolución y en la acción. La buena práctica es “cerrar el bucle” en tres semanas: (1) conversar resultados con cada equipo; (2) elegir 1–2 palancas de alto impacto (por ejemplo, reglas para priorizar trabajo o claridad de roles en el traspaso entre áreas); (3) documentar compromisos y (4) monitorear avance en la siguiente cadencia. Esta disciplina evita la fatiga de encuestar sin actuar. El gerente es clave: modela escucha, protege la franqueza y elimina obstáculos. Una política de confidencialidad explícita —quién ve qué y para qué— sostiene la participación honesta; y un protocolo de riesgos psicosociales evita que temas sensibles queden sin contención. Donde la devolución se centra en procesos y acuerdos (y no en culpas), el clima mejora porque el sistema aprende a resolver fricciones sin personalizarlas.",
            },
            {
              type: "paragraph",
              text: "Otra palanca estratégica es integrar clima con decisiones de negocio. Los tableros ejecutivos deberían mostrar, junto a la entrega a tiempo o el retrabajo, señales de experiencia del empleado (EX) relevantes para ese proceso: disponibilidad del jefe para desbloqueos, suficiencia de recursos, calidad de la coordinación con áreas colaterales. Las plataformas de clima ayudan a segmentar por equipos y a identificar “islas de excelencia” que vale la pena escalar; también permiten configurar encuestas específicas para proyectos (p. ej., despliegue de un ERP) y medir adopción y carga de trabajo. Esta función diagnóstica sirve para prevenir cuellos de botella humanos antes de que se traduzcan en defectos operativos o costos. En síntesis, el clima deja de ser reportería y se convierte en un sistema de alerta temprana que informa dónde intervenir primero y cómo sostener la mejora. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "La gestión del clima exige además reglas de conversación estables. Dos rituales mueven la aguja: las reuniones 1:1 quincenales (centradas en expectativas, retroalimentación específica y retiro de obstáculos) y las retrospectivas de equipo mensuales (qué funcionó, qué no y qué cambiaremos). Para que produzcan valor, se apoyan en guías simples de pregunta y en acuerdos de confidencialidad. La formación a mandos medios es decisiva: habilidades de feedback, manejo de conflicto, priorización y facilitación. Cuando los líderes aprenden a convertir tensión en diseño —aclarar fronteras, decidir criterios, distribuir autoridad cerca del punto de valor—, el clima mejora como efecto del buen gobierno del trabajo. El mensaje cultural es claro: “aquí hablamos con datos, decidimos pronto y cumplimos lo que acordamos”, lo cual eleva pertenencia y reduce rotación.",
            },
            {
              type: "paragraph",
              text: "No hay estrategia sin gobernanza. Un comité de clima (RR. HH., Operación, Seguridad y líderes de unidades) fija el calendario de medición, valida instrumentos, revisa patrones transversales y resuelve barreras sistémicas (metas contradictorias, reglas de interfaz difusas, puntos únicos de falla). Cada trimestre, el comité publica avances y reconoce aprendizajes. A nivel área, un “dueño” del plan de clima mantiene la trazabilidad entre hallazgos y acciones, y asegura que las mejoras exitosas se estandaricen. Por su parte, las áreas de soporte (TI, Jurídico, Comunicaciones) acompañan con herramientas, lineamientos de privacidad y narrativas honestas: explicar por qué medimos, qué cambia y qué no. Este andamiaje protege la credibilidad del proceso y evita que clima sea materia de campañas temporales sin continuidad.",
            },
            {
              type: "paragraph",
              text: "Finalmente, una estrategia responsable cuida la ética y la protección de datos. Cualquier instrumento debe informar propósito, uso y resguardo; las devoluciones deben anonimizar y enfocarse en patrones, nunca en personas identificables. La participación debe ser voluntaria y sin represalias; y los gerentes han de rendir cuentas por usar los hallazgos para mejorar condiciones de trabajo, no para control punitivo. La transparencia sobre “qué escuchamos y qué haremos” cierra el ciclo de confianza. Con estos elementos —medición ligera y útil, devolución con acuerdos, gobierno claro, líderes habilitados y resguardo ético— la gestión del clima se vuelve una capacidad organizacional que anticipa riesgos, estabiliza procesos y hace del trabajo un espacio de desempeño sostenible y digno para todos. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "accordion",
              header: "Palancas tácticas (resumen)",
              open: false,
              text: "Encuestas de pulso + segmentación por equipo; devoluciones en <3 semanas; elegir 1–2 acciones por ciclo; rituales 1:1 y retrospectivas; tableros con EX integrada; estandarización de mejoras.",
            },
            {
              type: "accordion",
              header: "Riesgos y mitigaciones",
              open: false,
              text: "Riesgo: encuestar sin actuar → Mitigación: calendario de cierres de bucle. Riesgo: desconfianza → Mitigación: privacidad y enfoque en patrones. Riesgo: sobrecarga de iniciativas → Mitigación: priorizar pocas palancas y medir impacto.",
            },
          ],
        },
        {
          id: "8.2",
          numbering: "8.2",
          title: "Estudio del clima laboral: encuestas",
          content: [
            {
              type: "paragraph",
              text: "El estudio del clima laboral mediante encuestas es una práctica central del desarrollo organizacional porque permite captar, de manera sistemática, percepciones y experiencias que influyen en el desempeño cotidiano. En el material base se sugiere utilizar los instrumentos ya revisados en el subtema 4.5 (métodos para diagnóstico), como punto de partida para construir una medición útil y comparable en el tiempo. :contentReference[oaicite:0]{index=0} A partir de allí, el diseño debe precisar: propósito (¿para qué medimos?), dominios (p. ej., liderazgo, colaboración interáreas, carga de trabajo, reconocimiento, seguridad psicológica), unidades de análisis (empresa, área, equipo) y decisiones que se tomarán con los hallazgos. Una encuesta de clima no es una ‘foto de humor’; es un insumo para decidir y ajustar el sistema de trabajo.",
            },
            {
              type: "paragraph",
              text: "El cuestionario debe traducir cada dominio en reactivos claros y conductuales, evitando ambigüedades y formulaciones dobles. Se privilegia el formato de respuesta tipo Likert (acuerdo o frecuencia) por su facilidad de comprensión y análisis, y porque permite estimar consistencia interna por escala. La redacción debe cuidar sesgos de deseabilidad social y extremidad, alternar ítems positivos y negativos con prudencia, y asegurar que el lenguaje sea inclusivo y comprensible para todos los colectivos. Las instrucciones explicitan confidencialidad, uso de datos y tiempo de respuesta. Un pre-test con una muestra pequeña ayuda a detectar interpretaciones no previstas y afinar longitudes para que la experiencia de respuesta sea ágil.",
            },
            {
              type: "paragraph",
              text: "En el muestreo, la regla es privilegiar la inclusión total cuando el tamaño lo permite (‘censo’); si no, se utiliza muestreo estratificado por área, turno y sede, para garantizar representatividad. Es clave equilibrar anonimato con granularidad: mientras más fino el recorte (p. ej., un equipo de cinco personas), mayor el riesgo de identificación. Por ello, se establecen umbrales mínimos para reportes desagregados (p. ej., n ≥ 8) y se agrupan células pequeñas con otras similares. También se definen ventanas operativas: fechas de aplicación que no coincidan con cierres contables, auditorías o periodos de alta carga, a fin de reducir el sesgo situacional.",
            },
            {
              type: "paragraph",
              text: "La logística de aplicación contempla canales (web, móvil, papel cuando sea necesario), recordatorios respetuosos, soporte técnico y accesibilidad para personas con limitaciones tecnológicas. Los tiempos de respuesta se comunican con claridad (p. ej., dos semanas) y se monitorea el avance por área para ofrecer apoyo sin presión indebida. Cuando existan colectivos sin fácil acceso digital (piso de planta, campo), se instalan kioscos o se habilitan jornadas con dispositivos compartidos. El objetivo es que participar sea sencillo y seguro: una encuesta inclusiva es, además, una señal de respeto organizacional.",
            },
            {
              type: "paragraph",
              text: "En el análisis, se calculan índices por escala y se identifican brechas entre áreas y segmentos (antigüedad, rol, turno) con cautela para no ‘etiquetar’ grupos. Se priorizan hallazgos accionables: relaciones entre prácticas de gestión y resultados (rotación, ausentismo, accidentes, calidad). Se incorporan preguntas abiertas para captar matices y se usan técnicas de minería de texto para agrupar temas recurrentes. Las comparaciones con líneas base y con benchmarks internos son más valiosas que las comparaciones genéricas entre empresas; lo que importa es la tendencia y la convergencia con otras evidencias (entrevistas, indicadores).",
            },
            {
              type: "paragraph",
              text: "La devolución es parte de la intervención: no basta con un reporte al comité. Se comparten resultados agregados con toda la organización, y cada líder recibe su corte con guía para leerlo y facilitar conversaciones de mejora con su equipo. Se definen ‘micro-compromisos’ de corto plazo (p. ej., mejorar la puntualidad de reuniones, clarificar la priorización de tareas), y se integran al tablero de gestión. Este cierre del ciclo evita la ‘fatiga de encuesta’ y demuestra que la voz de las personas produce cambios visibles.",
            },
            {
              type: "paragraph",
              text: "Finalmente, se institucionaliza una cadencia: una medición anual (o semestral cuando hay cambios intensos) y encuestas ‘pulso’ breves para monitorear focos críticos. Se documentan lecciones por ola, se ajustan ítems con prudencia para preservar series históricas y se protege la confidencialidad como condición no negociable. Con método y ética, la encuesta de clima se convierte en un sistema de aprendizaje organizacional que ilumina dónde intervenir y cómo medir el efecto de las mejoras, enlazando experiencia del colaborador con desempeño del negocio.",
            },
            {
              type: "accordion",
              header: "Checklist de una buena encuesta de clima",
              open: false,
              text: "Propósito claro; dominios definidos; ítems conductuales; Likert comprensible; anonimato con umbral mínimo; logística inclusiva; análisis con tendencia; devolución y compromisos.",
            },
            {
              type: "accordion",
              header: "Errores frecuentes",
              open: false,
              text: "Preguntar sin decidir; cuestionarios largos y vagos; cortes con n pequeño (riesgo de identificación); comparar ‘manzanas con peras’; no cerrar el ciclo con acciones visibles.",
            },
          ],
        },
        {
          id: "8.3",
          numbering: "8.3",
          title: "Cuestionarios",
          content: [
            {
              type: "paragraph",
              text: "El material indica que pueden reutilizarse los cuestionarios explicados en el subtema 4.5 del diagnóstico organizacional, como base para medir constructos específicos vinculados al clima, la cultura y las prácticas de gestión. :contentReference[oaicite:1]{index=1} A partir de ese inventario, conviene organizar un banco de ítems por dominios (p. ej., claridad de rol, coordinación interáreas, reconocimiento, carga de trabajo, seguridad psicológica, justicia procedimental). Un banco curado permite componer cuestionarios ‘a la carta’ según el objetivo de cada ola de medición y preservar comparabilidad con series históricas. La clave es que cada ítem describa comportamientos observables y evite jerga ambigua.",
            },
            {
              type: "paragraph",
              text: "Para garantizar calidad de medición, los cuestionarios deben pasar por pruebas de validez (de contenido, por panel de expertos; de constructo, con análisis factorial exploratorio cuando existan bases suficientes) y de confiabilidad (consistencia interna por escala, p. ej., alfa de Cronbach). En organizaciones medianas y grandes, es factible diseñar escalas estables —10-15 ítems por dominio— y complementarlas con ‘módulos rotantes’ por temas coyunturales (teletrabajo, rediseño de procesos, implantación de sistemas). Esta arquitectura balancea continuidad y flexibilidad, y evita encuestas excesivamente largas.",
            },
            {
              type: "paragraph",
              text: "La redacción de ítems sigue reglas simples: cada afirmación evalúa una sola cosa; se usa lenguaje directo y neutral; se evitan negaciones dobles; y se anclan escalas con descriptores claros (Totalmente en desacuerdo ↔ Totalmente de acuerdo; Nunca ↔ Siempre). Los ‘ítems inversos’ se emplean con moderación, pues pueden introducir ruido cognitivo. Siempre que sea posible, se contextualiza el referente (mi equipo, mi jefatura inmediata, mi área) para que la interpretación sea homogénea entre respondientes.",
            },
            {
              type: "paragraph",
              text: "Los cuestionarios pueden integrar preguntas de priorización (máx-dif o top-3) y de trade-offs (qué mejorar primero) para orientar el diseño de acciones. Incluir 1–2 preguntas abiertas bien planteadas aporta matices valiosos y señales de temas emergentes. La recogida de metadatos mínimos (área, rol, antigüedad, turno, sede) permite cortes relevantes sin comprometer anonimato. El equilibrio entre detalle analítico y protección de identidades se resuelve estableciendo umbrales de reporte y agregando células pequeñas.",
            },
            {
              type: "paragraph",
              text: "La experiencia del usuario (UX) de un cuestionario influye en la tasa y calidad de respuesta. Por ello, se cuida la longitud (10–15 minutos), se optimiza para dispositivos móviles, se permiten pausas y reinicios, y se reduce la fricción (autoguardado, barra de avance, accesibilidad). Se explican propósitos y usos de los datos al inicio y se agradece la colaboración al final, reforzando que la participación es voluntaria y confidencial.",
            },
            {
              type: "paragraph",
              text: "En el análisis, más allá de promedios, interesa la distribución (asimetrías, colas), los patrones por segmentos y la relación con indicadores operativos (rotación, ausentismo, accidentes, NPS interno). Se construyen índices sintéticos por dominio y un índice global de clima, con intervalos de confianza cuando el tamaño muestral lo permite. Las visualizaciones deben ser simples y accionables: semáforos por escala, mapas de calor por áreas, tendencias en el tiempo. La interpretación se valida en sesiones de devolución, donde equipos y líderes contrastan hallazgos con su realidad cotidiana.",
            },
            {
              type: "paragraph",
              text: "Finalmente, los cuestionarios viven dentro de un sistema: banco de ítems versionado, catálogos de dominios, convenciones de codificación, manual de aplicación y guías de lectura. Documentar este sistema evita ‘reinventar la rueda’ en cada medición y profesionaliza la conversación sobre clima y cultura. Con instrumentos bien cuidados, la organización gana continuidad de aprendizaje y una base confiable para priorizar intervenciones que verdaderamente mueven la aguja.",
            },
            {
              type: "accordion",
              header: "Buenas prácticas de diseño de cuestionarios",
              open: false,
              text: "Validez y confiabilidad; ítems conductuales; anclas claras; UX cuidada; metadatos mínimos; umbrales de reporte; módulos rotantes; manuales y versionamiento.",
            },
            {
              type: "accordion",
              header: "Indicadores útiles en el análisis",
              open: false,
              text: "Índices por escala; brechas entre segmentos; correlación con rotación/ausentismo/accidentes; mapas de calor por áreas; tendencias y comparación con línea base.",
            },
          ],
        },
        {
          id: "8.4",
          numbering: "8.4",
          title: "Uso del software en investigación del clima",
          content: [
            {
              type: "paragraph",
              text: "El uso de software especializado en investigación del clima laboral profesionaliza todo el ciclo de medición: diseño de la encuesta, distribución, recolección, análisis, visualización y devolución. Estas plataformas integran bancos de ítems, lógicas de ramificación y control de calidad de datos, lo que reduce sesgos de diseño y eleva la validez de los instrumentos. Además, permiten administrar campañas multicanal (correo, enlace seguro, QR), monitorear en tiempo real la tasa de respuesta por unidad y automatizar recordatorios respetuosos. La ventaja estratégica es doble: se acorta el tiempo entre ‘preguntar’ y ‘decidir’ y se preserva la trazabilidad de cada ola de medición para comparar con líneas base y detectar tendencias. El principio rector sigue siendo ético: anonimato, confidencialidad y uso responsable de la información.",
            },
            {
              type: "paragraph",
              text: "En la fase de diseño, los repositorios de ítems y las plantillas por dominios (liderazgo, coordinación, carga, reconocimiento, seguridad psicológica) permiten componer cuestionarios modulares sin perder comparabilidad histórica. Las anclas de respuesta, ayudas contextuales y pruebas piloto integradas reducen interpretaciones ambiguas. Asimismo, la segmentación por población (área, sede, rol, turno, antigüedad) se configura desde el inicio para habilitar cortes analíticos sin comprometer el umbral mínimo de anonimato. Esta disciplina técnica se traduce en reactivos conductuales, breves y comprensibles, que elevan la calidad de cada respuesta y, por tanto, de las decisiones posteriores.",
            },
            {
              type: "paragraph",
              text: "Durante la aplicación, la plataforma gestiona ventanas de tiempo, tokens de un solo uso y accesos desde móvil o kioscos físicos para colectivos sin dispositivo personal. El tablero de campo muestra avance por área, identifica focos de baja participación y sugiere acciones de apoyo (p. ej., habilitar horarios para responder). La seguridad técnica (cifrado en tránsito y reposo, control de accesos por rol) y la seguridad psicológica (comunicación clara del propósito y del uso de datos) son inseparables: sin confianza, los datos se distorsionan. Por eso, los mensajes de invitación y de cierre son parte del diseño, no un trámite.",
            },
            {
              type: "paragraph",
              text: "En el análisis, los motores estadísticos calculan índices por escala, intervalos de confianza y brechas entre segmentos; a la vez, los módulos de texto aplican clasificación temática sobre respuestas abiertas para descubrir patrones emergentes. Las visualizaciones (mapas de calor, semáforos, tendencias) son configurables por audiencia: comités ven panoramas; jefaturas, cortes accionables; equipos, hallazgos agregados. Lo crucial es la ‘analítica explicable’: cada gráfico debe revelar una pregunta de gestión y sugerir la siguiente conversación, no sólo adornar reportes.",
            },
            {
              type: "paragraph",
              text: "El verdadero valor surge en la devolución. El software facilita reportes por área con guías de lectura y recomendaciones iniciales basadas en evidencias (p. ej., vínculos entre claridad de rol y rotación). La organización traduce esos hallazgos en micro-compromisos y los incorpora al tablero operativo (reuniones de 1:1, acuerdos de interfaz, priorización), cerrando el ciclo de escucha→acción. Las plataformas más maduras permiten registrar planes de acción y dar seguimiento a sus avances, uniendo percepción y ejecución en un mismo ecosistema.",
            },
            {
              type: "paragraph",
              text: "Un riesgo común es ‘tecnologizar’ la escucha: creer que la plataforma resuelve por sí sola problemas de diseño, participación o ética. La herramienta potencia el método; no lo sustituye. Si el cuestionario es confuso, si el umbral de anonimato se ignora, o si no se devuelve con respeto y prontitud, el software sólo hará más rápido lo incorrecto. Por eso, conviene definir estándares: longitud máxima, claridad de glosarios, umbrales para cortes, cadencias de devolución y criterios para encuestas pulso entre olas anuales.",
            },
            {
              type: "paragraph",
              text: "Finalmente, la interoperabilidad con sistemas de personas y de operación permite correlacionar clima con indicadores de negocio (calidad, seguridad, servicio, rotación). Con gobernanza de datos, es posible construir casos de negocio que muestren cómo mejoras específicas (retroalimentación, carga, coordinación) impactan resultados. Esta trazabilidad protege la inversión en clima laboral y lo posiciona como sistema de aprendizaje continuo, no como evento aislado.",
            },
            {
              type: "accordion",
              header: "Checklist técnico-ético",
              open: false,
              text: "Bancos de ítems; plantillas por dominios; ramificación; tokens y umbrales de anonimato; cifrado y control de accesos; reportes por audiencia; registro de planes de acción.",
            },
            {
              type: "accordion",
              header: "Errores a evitar",
              open: false,
              text: "Cuestionarios largos; cortes con n bajo; no devolver resultados; confundir herramienta con método; usar datos para sanciones; no conectar hallazgos con planes verificables.",
            },
          ],
        },
        {
          id: "8.5",
          numbering: "8.5",
          title: "Instrumentos de consultoría en DO",
          content: [
            {
              type: "paragraph",
              text: "Los instrumentos de consultoría en desarrollo organizacional (DO) son artefactos que estructuran la observación, la conversación y la decisión. Su potencia reside en hacer visible el sistema de trabajo y en convertir intuiciones en hipótesis probables. Entre los básicos están las entrevistas semiestructuradas, los grupos focales y la observación del trabajo real; entre los estructurales, los mapas SIPOC (entradas-proceso-salidas-clientes), las matrices RACI (responsabilidad y decisión) y los acuerdos de interfaz entre áreas; entre los de medición, encuestas y cuestionarios modulares; y entre los de acción, tableros operativos, estándares de proceso y protocolos de escalamiento. Bien usados, todos convergen en un plan rector medible.",
            },
            {
              type: "paragraph",
              text: "Las entrevistas y grupos focales permiten comprender narrativas, identificar supuestos y captar matices no observables en indicadores. Se preparan con guías por hipótesis, se graban con consentimiento y se codifican en temas. La observación (Gemba) contrasta discursos con la ejecución real: tiempos, cuellos de botella, retrabajos. El principio es triangulación: ninguna fuente es suficiente por sí sola. La calidad del diagnóstico aumenta cuando datos cualitativos y cuantitativos se confirman mutuamente o explican sus discrepancias.",
            },
            {
              type: "paragraph",
              text: "Los instrumentos de mapeo estructuran el sistema. SIPOC define límites y criterios de calidad en la fuente; RACI clarifica quién decide, aprueba, consulta e informa; los acuerdos de interfaz fijan entradas aceptables, ventanas de entrega y protocolos de excepción entre funciones. Estas piezas reducen zonas grises, previenen conflictos y sientan bases para medir con justicia. Documentarlas de forma simple (una página por proceso) facilita adopción y auditoría.",
            },
            {
              type: "paragraph",
              text: "En medición, las encuestas de clima y los cuestionarios específicos por dominio (claridad de rol, coordinación, carga, reconocimiento, seguridad psicológica) combinan ítems conductuales con anclas claras. Los instrumentos pulso monitorean focos críticos entre olas anuales. El rigor exige validez y confiabilidad, umbrales de anonimato y comunicación transparente del propósito. La regla de oro: preguntar lo que se está dispuesto a usar para decidir y actuar.",
            },
            {
              type: "paragraph",
              text: "Para la ejecución, los tableros operativos concentran indicadores de proceso y de resultado; las rutinas de gestión (reuniones diarias, semanales, mensuales) crean cadencias de revisión; y los estándares describen ‘cómo se hace el trabajo’. Los protocolos de escalamiento resuelven colisiones de prioridades. Juntos, estos instrumentos convierten la mejora en hábito: ver, hablar, decidir y ajustar sobre evidencia. Sin ellos, las buenas intenciones se diluyen en la rutina.",
            },
            {
              type: "paragraph",
              text: "Un riesgo es fetichizar la herramienta: llenar formatos sin conversación, medir por medir, mapear sin cambiar. El criterio profesional manda: seleccionar pocos instrumentos bien hechos, con dueños claros, ciclos de actualización y entrenamiento. Además, cada artefacto debe ‘vivir’ donde se usa (piso de trabajo, reuniones de equipo) y no sólo en carpetas digitales. La utilidad se prueba en el desempeño y en la reducción de fricciones.",
            },
            {
              type: "paragraph",
              text: "La ética atraviesa todo el arsenal: consentimiento informado, confidencialidad, acceso por rol, transparencia y devolución de aprendizajes. Instrumentos poderosos sin ética erosionan confianza y sesgan datos; con ética, construyen ciudadanía organizacional. El portafolio se completa con lecciones aprendidas y estándares revisados, para que la organización conserve memoria y acelere la curva de adopción en futuras mejoras.",
            },
            {
              type: "accordion",
              header: "Kit esencial por fase",
              open: false,
              text: "Diagnóstico: entrevistas, Gemba, SIPOC, RACI. Diseño: acuerdos de interfaz, estándares, tableros. Implementación: cadencias, protocolos de escalamiento. Evaluación: indicadores antes-después, lecciones aprendidas.",
            },
            {
              type: "accordion",
              header: "Criterios de calidad de instrumentos",
              open: false,
              text: "Simplicidad; propósito claro; dueño y cadencia; validez/confiabilidad; ética (consentimiento, confidencialidad); utilidad demostrable en decisiones.",
            },
          ],
        },
        {
          id: "8.6",
          numbering: "8.6",
          title: "Clases de intervenciones: personas y procesos",
          content: [
            {
              type: "paragraph",
              text: "Las intervenciones en DO se agrupan, de manera práctica, en dos grandes familias que deben integrarse: personas y procesos. Intervenir en personas significa desarrollar capacidades, ajustar comportamientos y fortalecer relaciones (liderazgo, comunicación, coordinación, manejo de conflictos). Intervenir en procesos implica rediseñar flujos de trabajo, roles, estándares, interfaces y métricas. Separarlas produce cambios incompletos: capacitar sin rediseñar el proceso es pedir heroísmo; rediseñar el proceso sin desarrollar habilidades es condenar el diseño al papel. La clave es orquestar ambas dimensiones con una lógica de pilotos, evidencia y escalamiento.",
            },
            {
              type: "paragraph",
              text: "En el eje de personas, las intervenciones típicas incluyen talleres de liderazgo de servicio, feedback efectivo, reuniones 1:1, retroalimentación 360, coaching a mandos medios, construcción de seguridad psicológica y acuerdos de colaboración interáreas. Todas se diseñan como experiencias de práctica guiada, ancladas en la tarea real, con rúbricas de desempeño y seguimiento. El propósito es institucionalizar hábitos conversacionales que sostengan el sistema de trabajo: definir expectativas, coordinar compromisos, reconocer, corregir y aprender.",
            },
            {
              type: "paragraph",
              text: "En el eje de procesos, las palancas comunes son el mapeo de flujo de valor, la eliminación de desperdicios, la estandarización inteligente (‘lo mínimo indispensable’), la clarificación de decisiones (RACI), los acuerdos de interfaz, los tableros y las cadencias. Se busca reducir variabilidad no deseada, acercar decisiones al punto de valor y crear visibilidad para aprender rápido. El resultado deseado es confiabilidad: tiempos estables, calidad alta, costos controlados y seguridad.",
            },
            {
              type: "paragraph",
              text: "El hilo de integración es la hipótesis causal: ¿qué supone la intervención que cambiará y cómo lo mediremos? Por ejemplo, si se instala un estándar y una rutina diaria, se espera mejorar puntualidad y reducir retrabajos; si además se entrena a líderes en feedback, se espera elevar la calidad de la corrección y la velocidad de aprendizaje. Medir ambos efectos evita atribuciones engañosas y permite ajustar dosis: más práctica, más soporte, o más rediseño técnico según lo que muestren los datos.",
            },
            {
              type: "paragraph",
              text: "Un error habitual es sobredimensionar un eje: programas de ‘soft skills’ sin cambios en reglas e incentivos; o bien, proyectos de procesos que ignoran que alguien debe sostener nuevas conductas. La regla de oro es la congruencia: que los artefactos (estándares, tableros, acuerdos) y las competencias (feedback, facilitación, solución de problemas) se refuercen mutuamente. Esta congruencia baja el costo de coordinación y eleva la adopción, porque la gente entiende el ‘qué’ y el ‘cómo’ con señales consistentes.",
            },
            {
              type: "paragraph",
              text: "La ética y la participación son condiciones. Se acuerda el alcance, se explicitan riesgos, se protege la confidencialidad de datos y se diseñan pilotos con ventanas de tiempo razonables para no saturar al sistema. Las intervenciones con mejor retorno suelen ser las que resuelven fricciones visibles del día a día (p. ej., criterios de prioridad entre ventas y operaciones), porque liberan energía y credibilidad para cambios más profundos. La prioridad surge del diagnóstico, no de la moda.",
            },
            {
              type: "paragraph",
              text: "Finalmente, las intervenciones escalan cuando dejan capacidades instaladas: facilitadores internos formados, estándares vivos, tableros en uso, y comunidades de práctica que comparten lecciones. Ese es el indicador de madurez: que el desempeño se sostenga sin tutela externa y que la organización pueda seguir mejorando con su propio sistema de aprendizaje.",
            },
            {
              type: "accordion",
              header: "Mapa rápido de intervenciones",
              open: false,
              text: "PERSONAS: liderazgo, feedback, 1:1, coaching, seguridad psicológica. PROCESOS: SIPOC, estándar mínimo, RACI, acuerdos de interfaz, tableros, cadencias.",
            },
            {
              type: "accordion",
              header: "Criterios para escalar",
              open: false,
              text: "Evidencia de impacto; adopción en rutina; claridad de roles; capacidad interna instalada; ética y carga de trabajo bajo control.",
            },
          ],
        },
        {
          id: "8.7",
          numbering: "8.7",
          title:
            "Estrategias e intervención en el factor humano; áreas de aprendizaje; barreras personales e intergrupales",
          content: [
            {
              type: "paragraph",
              text: "Intervenir en el factor humano exige diseñar experiencias que conecten aprendizaje con tarea real. La estrategia combina tres capas: (1) condiciones de contexto (seguridad psicológica, reglas de interacción, tiempos protegidos para practicar); (2) metodologías activas (micro-talleres, role play, retrospectivas, coaching de mandos) y (3) artefactos de anclaje (acuerdos de interfaz, estándares de reuniones, tableros de seguimiento). El principio es ‘aprender haciendo’: cada sesión produce acuerdos observables que se verifican en la siguiente cadencia. De este modo, la formación deja de ser evento y se convierte en hábito. Las métricas (adopción de prácticas, calidad de feedback, cumplimiento de acuerdos) retroalimentan el diseño. La intervención respeta límites de carga, informa propósitos y mide bienestar para no forzar cambios a costa de la salud psicosocial.",
            },
            {
              type: "paragraph",
              text: "Las áreas de aprendizaje típicas apuntan a conductas palanca: liderazgo de servicio, coordinación efectiva, comunicación clara, solución colaborativa de problemas y manejo de conflictos. En liderazgo, se practican 1:1 estructuradas, establecimiento de expectativas y retroalimentación específica centrada en la tarea. En coordinación, se instalan acuerdos de interfaz entre áreas (qué entra, con qué calidad, en qué tiempo y cómo se escalan excepciones). La comunicación se trabaja con guías de mensajes y escucha activa. La solución de problemas adopta ciclos simples (definir, medir, analizar, actuar) aplicados a casos reales. El manejo de conflictos se aborda con marcos de interés y protocolos de mediación. Cada área incluye rúbricas de conducta para observar progreso.",
            },
            {
              type: "paragraph",
              text: "Las barreras personales más frecuentes incluyen sesgos cognitivos (confirmación, disponibilidad), temores a perder estatus o control, creencias limitantes sobre el propio rol y tolerancia baja a la ambigüedad. Se atienden combinando psicoeducación breve (nombrar el sesgo), prácticas guiadas (ensayar conversaciones difíciles), y diseño de entorno (reglas claras, indicadores visibles que reduzcan incertidumbre). La intervención cuida el ‘contrato psicológico’: expectativas realistas, retroalimentación respetuosa, reconocimiento de avances y espacios de cuidado. Se evita la culpabilización; el foco son conductas observables y restricciones del sistema. Cuando el entorno contradice el aprendizaje (incentivos cruzados, metas incongruentes), se ajusta el diseño organizacional para que el nuevo comportamiento sea sostenible.",
            },
            {
              type: "paragraph",
              text: "Las barreras intergrupales derivan de objetivos parciales, estereotipos funcionales y reglas de interfase implícitas. Ventas y operaciones, por ejemplo, chocan si no existen criterios compartidos de prioridad, ventanas de atención y datos consistentes. La intervención usa ‘acuerdos de interfaz’ como contrato operativo entre áreas: define entradas aceptables, tiempos, estándares de calidad y protocolos de excepción. Se complementa con espacios de alineación periódicos (células, scrums o comités de flujo) y con indicadores transversales que inhiben la optimización local. Las actividades de puente —rotaciones cortas, shadowing, mapeo conjunto del SIPOC— humanizan a la ‘otra’ área y convierten al cliente final en referencia común.",
            },
            {
              type: "paragraph",
              text: "En diseño pedagógico, conviene secuenciar en oleadas: sensibilización (nombrar problemas y diseñar reglas básicas), práctica guiada (ensayar habilidades con casos reales) y consolidación (medir adopción, ajustar y estandarizar). Cada ola dura lo suficiente para producir evidencias; no se abren frentes sin cerrar los anteriores. Los contenidos se personalizan por segmento (operativos, mandos medios, dirección) y se orquestan en una partitura única: los líderes modelan lo que se espera del resto. Sin coherencia vertical, el aprendizaje se desintegra. El soporte post-taller (coaching, microlecciones, guías rápidas) mantiene el pulso entre sesiones.",
            },
            {
              type: "paragraph",
              text: "El componente ético es transversal. Se protege confidencialidad en ejercicios, se evita exposición innecesaria y se respeta la diversidad. Las evaluaciones de aprendizaje se usan para mejorar, no para sancionar. El lenguaje es inclusivo y la logística considera accesibilidad. La intervención verifica carga de trabajo para que la práctica no implique horas extra encubiertas. Cuando surgen señales de riesgo psicosocial, se activan recursos de apoyo y se ajusta la cadencia. La consigna es clara: ningún resultado justifica vulnerar la dignidad de las personas.",
            },
            {
              type: "paragraph",
              text: "El seguimiento convierte el esfuerzo en capacidad instalada. Tableros sencillos registran acuerdos cumplidos, frecuencia de 1:1, uso de estándares y resolución de conflictos interáreas. Las comunidades de práctica comparten casos y trucos; los líderes revisan barreras persistentes y remueven obstáculos estructurales. Cada trimestre se documentan lecciones y se actualizan estándares. Así, el aprendizaje deja huella en artefactos y rutinas, y la organización puede sostener avances sin depender de facilitadores externos.",
            },
            {
              type: "accordion",
              header: "Mapa rápido de intervención humana",
              open: false,
              text: "Contexto (seguridad psicológica, reglas, tiempos) → Metodologías activas (role play, retrospectivas, coaching) → Artefactos (acuerdos de interfaz, estándares, tableros) → Seguimiento (métricas, comunidades de práctica).",
            },
            {
              type: "accordion",
              header: "Barreras y antídotos",
              open: false,
              text: "Personales: sesgos, miedo, creencias → psicoeducación + práctica + reglas. Intergrupales: objetivos parciales, estereotipos → indicadores transversales + acuerdos de interfaz + espacios de puente.",
            },
          ],
        },
        {
          id: "8.8",
          numbering: "8.8",
          title: "Técnicas para la dinámica de grupos",
          content: [
            {
              type: "paragraph",
              text: "La dinámica de grupos aporta técnicas para observar y mejorar cómo un conjunto de personas piensa, decide y actúa. Su valor en DO radica en transformar interacciones en resultados: convertir reuniones en espacios productivos, resolver tensiones con método y acelerar aprendizajes colectivos. El criterio para elegir técnica es funcional: ¿qué tarea habilitamos —explorar, priorizar, decidir, comprometer— y con qué restricciones —tiempo, tamaño, madurez del grupo—? La facilitación cuida contrato (propósito, tiempos, roles), reglas (escucha, concreción, respeto) y registro (decisiones, responsables, plazos). Las técnicas no suplen liderazgo; le ofrecen estructura para que la conversación produzca acuerdos verificables.",
            },
            {
              type: "paragraph",
              text: "El ‘role play’ y los ensayos de conversación difícil permiten practicar feedback, negociación o mediación en escenarios seguros. Se diseñan guiones breves, se modela la conducta esperada y se retroalimenta con criterios observables (claridad, respeto, concreción). El ‘fishbowl’ o pecera es útil para que una parte del grupo observe un diálogo focal mientras el resto registra patrones; luego se rota. Esta doble mirada —hacer y observar— acelera la toma de conciencia y evita interpretaciones personales. En ambos casos, el facilitador regula ritmo y asegura que la devolución sea específica y no invasiva.",
            },
            {
              type: "paragraph",
              text: "La Técnica de Grupo Nominal (TGN) mezcla pensamiento individual y consenso. Sirve para priorizar causas o acciones cuando hay ruido o poder asimétrico. Secuencia: generación silenciosa de ideas, ronda de listado sin debate, aclaraciones breves, votación ponderada y discusión final sobre las primeras posiciones. El resultado es un ranking transparente que legitima decisiones. Para problemas complejos, el ‘World Café’ enlaza conversaciones en mesas temáticas que rotan; se capturan patrones en mantel de papel y se sintetiza en plenaria. Favorece conexión de perspectivas y descubrimiento de relaciones no obvias.",
            },
            {
              type: "paragraph",
              text: "El ‘Open Space Technology’ convoca a que los propios participantes propongan temas bajo un propósito compartido. Útil para explorar posibilidades y comprometer voluntades en contextos de alta incertidumbre. La ley de los dos pies —quien no aprende ni aporta, se mueve— promueve responsabilidad personal. Para equipos que requieren foco en ejecución, las ‘retrospectivas’ estructuran aprendizaje continuo: qué funcionó, qué no, qué probamos; se derivan acciones con dueño y fecha. La magia está en la repetición disciplinada más que en la novedad técnica.",
            },
            {
              type: "paragraph",
              text: "Los sociogramas y mapas de red revelan patrones de colaboración: quién conecta áreas, dónde hay cuellos de información, quiénes están aislados. Al hacer visible la red, se diseñan intervenciones para fortalecer vínculos críticos (mentoría cruzada, comunidades de práctica) y aliviar sobrecarga en nodos saturados. En conflictos, el ‘mapeo de intereses’ separa posiciones de necesidades; se construyen opciones que satisfacen criterios compartidos. Estas técnicas desplazan la conversación de ‘quién tiene razón’ a ‘cómo satisfacemos el propósito común’.",
            },
            {
              type: "paragraph",
              text: "La ética de la facilitación requiere consentimiento informado, manejo cuidadoso de información sensible y consentimiento para grabaciones. Se evitan dinámicas que expongan innecesariamente a personas o que produzcan catarsis sin contención. Se define umbral de confidencialidad y se acuerda devolución agregada cuando corresponda. El objetivo no es ‘emocionar’, sino habilitar conversaciones difíciles con respeto y método. La diversidad cultural y de estilos de comunicación se considera explícitamente para ajustar ritmo y formatos.",
            },
            {
              type: "paragraph",
              text: "La transferencia al trabajo se logra con artefactos: minutas con acuerdos, tableros de acción, estándares de reunión (agenda, tiempos, roles), y calendarios de seguimiento. Cada técnica termina con ‘quién, qué, cuándo y cómo mediremos’. La evidencia de éxito no es la satisfacción del taller, sino la mejora en indicadores (tiempos de ciclo, calidad de decisiones, reducción de retrabajo, clima). Documentar lecciones integradas a un repositorio común alimenta la memoria organizacional y acelera futuras intervenciones.",
            },
            {
              type: "accordion",
              header: "Cuándo usar cada técnica",
              open: false,
              text: "Priorizar con asimetrías → TGN. Explorar posibilidades → World Café / Open Space. Practicar conductas → Role play / Fishbowl. Aprender de la ejecución → Retrospectiva. Mapear colaboración → Sociograma.",
            },
            {
              type: "accordion",
              header: "Reglas de oro de facilitación",
              open: false,
              text: "Propósito y reglas claras; tiempos y roles definidos; registro visible; cierre con acuerdos; confidencialidad; respeto y concreción; seguimiento con métricas.",
            },
          ],
        },
        {
          id: "8.9",
          numbering: "8.9",
          title: "Elaboración de un sistema basado en sistemas de Likert",
          content: [
            {
              type: "paragraph",
              text: "Construir un sistema de gestión inspirado en los ‘sistemas de dirección’ de Rensis Likert implica traducir el ideal participativo (Sistema 4) en prácticas, artefactos y métricas. El primer paso es un diagnóstico honesto del estilo predominante (S1 autoritario-explotador, S2 autoritario-benevolente, S3 consultivo, S4 participativo-grupo), observando cómo se toman decisiones, fluye la información y se reconoce el desempeño. Con esa línea base, se fijan objetivos de madurez (qué comportamientos y resultados esperamos ver) y se seleccionan palancas: tableros visibles, acuerdos de interfaz, reuniones breves de seguimiento, 1:1 de calidad, y mecanismos para que las decisiones se acerquen al punto de valor.",
            },
            {
              type: "paragraph",
              text: "El diseño se apoya en ‘grupos de enlace’ que conectan áreas mediante miembros compartidos. Estas células, con objetivos comunes y métricas transversales, reducen la optimización local y mejoran la coordinación. Se definen rituales: dailies operativas (15 minutos, problemas concretos), reuniones semanales de mandos (desbloqueos, decisiones) y comités mensuales de dirección (prioridades y recursos). Cada ritual tiene agenda estándar, dueño, tiempo límite y registro. La participación se estructura: no se trata de ‘votar todo’, sino de distribuir autoridad donde existe competencia y responsabilidad, con límites y protocolos de escalamiento.",
            },
            {
              type: "paragraph",
              text: "Las métricas sostienen el sistema. Además de indicadores de desempeño (calidad, tiempo, costo, servicio, seguridad), se miden prácticas de dirección: frecuencia y calidad de 1:1, puntualidad de devoluciones, acuerdos cumplidos, rotación interna, clima y seguridad psicológica. Estos indicadores alimentan tableros accesibles por rol y se revisan en cada cadencia. La transparencia protege de sesgos y crea sentido de agencia en mandos y equipos. La analítica se usa para aprender, no para castigar: cuando surge un desvío, la primera pregunta es de diseño (proceso, carga, información), no de culpa.",
            },
            {
              type: "paragraph",
              text: "El desarrollo de liderazgo acompaña el despliegue. Se entrena a jefaturas en establecimiento de expectativas, feedback, coaching breve y manejo de conflictos. Se modela la conducta esperada en el equipo directivo; sin este espejo, el sistema se percibe como retórica. La infraestructura documental (estándares, catálogos de servicios internos, RACI, acuerdos de interfaz) da soporte a la autonomía responsable. Con claridad de roles y reglas, la participación deja de depender del carisma del líder y se vuelve práctica institucional.",
            },
            {
              type: "paragraph",
              text: "Para aterrizar, se inicia con pilotos en procesos críticos. Se define hipótesis (p. ej., ‘con tableros y dailies reduciremos retrabajo 20% en 12 semanas’), se instala el paquete mínimo (rituales, indicadores, acuerdos), se entrena a líderes y se mide antes–después. La evidencia dicta el escalamiento y los ajustes. Este enfoque evita el ‘todo o nada’ y genera historias de éxito locales que legitiman el modelo. Documentar el kit de despliegue (lista de chequeo, guías de reunión, ejemplos) acelera la réplica.",
            },
            {
              type: "paragraph",
              text: "La ética del sistema Likert-inspirado descansa en confianza y veracidad. La participación sin transparencia es teatro; la transparencia sin cuidado es exposición. Por ello, se establece umbral de confidencialidad, se protege la voz disidente y se definen consecuencias proporcionadas y predecibles. La evaluación de líderes incluye conductas participativas (escucha, reconocimiento, desarrollo) además de resultados. Esta coherencia evita que el discurso participativo conviva con incentivos autoritarios.",
            },
            {
              type: "paragraph",
              text: "El cierre es capacidad instalada: facilitadores internos formados, documentación viva y comunidades de práctica. Periódicamente se reevalúa el sistema con la lente de Likert para calibrar avances y riesgos de regresión. La meta no es etiquetarse ‘S4’, sino sostener un ciclo virtuoso de información-conversación-decisión-aprendizaje que produzca desempeño alto y digno. Cuando esto sucede, el sistema deja de ser ‘del proyecto’ y se convierte en la manera normal de trabajar.",
            },
            {
              type: "accordion",
              header: "Paquete mínimo (versión piloto)",
              open: false,
              text: "Tableros visibles + dailies + 1:1 quincenales + acuerdos de interfaz + indicadores de clima/seguridad psicológica + entrenamiento breve de líderes + protocolo de escalamiento.",
            },
            {
              type: "accordion",
              header: "Señales de madurez hacia S4",
              open: false,
              text: "Decisiones cerca del trabajo; información que fluye; conflictos tratados con reglas; reconocimiento justo; equipos con autonomía responsable; aprendizaje documentado.",
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
          href: "https://www.youtube.com/watch?v=ldhpS8R5ods", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "¿Qué es el diseño curricular? ✔ [Concepto, Autores y Antecedentes] https://www.youtube.com/watch?v=ldhpS8R5ods",
            "Diseño Curricular QUÉ ES y CÓMO se HACE EJEMPLOS https://www.youtube.com/watch?v=3IOkwLKyHNE",
            "Evaluación Curricular Interna Y Externa || Nitzia Tavarez || https://www.youtube.com/watch?v=OR6YlkxNtps",
            //  Añade aquí las referencias reales extraídas del PDF
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
            "Coll, C. & Solé, I. (2020). *Currículum y evaluación en la educación obligatoria: Desafíos y perspectivas.* Barcelona: Editorial Graó.",
            "Perrenoud, P. (2019). *La evaluación de los alumnos: De la producción de la excelencia a la regulación de los aprendizajes.* Madrid: Editorial Morata.",
            "De Alba Ceballos, A. (2018). *Teoría curricular: Nuevas tendencias y perspectivas.* Ciudad de México: Siglo XXI Editores.",
            "Díaz Barriga, A. (2018). *Metodología de diseño curricular: Un enfoque centrado en competencias.* Ciudad de México: Editorial Trillas.",
            "Gimeno Sacristán, J. (2017). *El currículum: Una reflexión sobre la práctica.* Madrid: Ediciones Morata.",
            "Zabalza, M. Á. (2019). *Diseño y desarrollo curricular: Cómo planificar e implementar el currículo en la educación superior.* Madrid: Narcea Ediciones.",
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
