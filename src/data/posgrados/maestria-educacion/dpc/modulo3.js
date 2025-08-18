/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MED", // Maestría en Educación
  courseId: "MED-DPC", // Didáctica de los Procesos Cognitivos
  id: "MED-DPC-mod3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Didáctica de los procesos cognitivos", // :contentReference[oaicite:9]{index=9}
  title: "Módulo 3. ¿Cómo el alumno construye el conocimiento?", // :contentReference[oaicite:10]{index=10}
  semestre: "Tercer semestre", // :contentReference[oaicite:11]{index=11}
  teacher: "Dra. Rosa Dianeth Hernández Aguilera", // :contentReference[oaicite:12]{index=12}

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar la forma en cómo el alumno es capaz de construir su conocimiento.", // :contentReference[oaicite:13]{index=13}
  competencies: [
    "Identificar el rol del aprendiente desde el paradigma constructivista y las formas en que construye su conocimiento.", // :contentReference[oaicite:14]{index=14}
    "Explicar cómo el cambio en la organización cognitiva depende de la actividad del sujeto y su desarrollo.", // :contentReference[oaicite:15]{index=15}
    "Analizar la incidencia de la realidad social y la interacción en la construcción del conocimiento.", // :contentReference[oaicite:16]{index=16}
    "Aplicar principios constructivistas para favorecer aprendizajes significativos en la práctica profesional.", // Síntesis alineada al objetivo y competencias del módulo. :contentReference[oaicite:17]{index=17}
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

    /* 1. Unidad principal (según el PDF) */
    {
      id: "3",
      numbering: "Unidad 3",
      title: "¿Cómo el alumno construye el conocimiento?",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad propone una mirada rigurosa y operativa sobre cómo el estudiante construye conocimiento. Partimos de una premisa firme: aprender no es copiar la realidad ni acumular datos, sino reorganizar activamente estructuras cognitivas para dotar de sentido a la experiencia. Ello implica que la enseñanza debe diseñarse como una secuencia de situaciones problematizadoras que convoquen lo que el alumno ya sabe, introduzcan discrepancias productivas y habiliten herramientas para resolverlas. En términos prácticos, esto exige explicitar el propósito de cada actividad, modelar estrategias de pensamiento y ofrecer retroalimentación que haga consciente el proceso (no solo el resultado). También exige cuidar el clima emocional y las condiciones atencionales que permiten sostener la indagación. Al final, lo que buscamos no es memorización inerte, sino comprensión transferible que el estudiante pueda reutilizar en contextos nuevos.",
        },
        {
          type: "paragraph",
          text: "El punto de partida es el conocimiento previo. Ninguna explicación, por brillante que sea, prosperará si no se ancla a esquemas existentes y a intereses reales. Por eso, antes de introducir nuevos contenidos, conviene mapear ideas iniciales (lluvia de ideas, organizadores gráficos, preguntas de sondeo) y hacerlas visibles. Sobre esa base, la instrucción debe generar un ‘conflicto cognitivo’ calibrado: discrepancias entre lo que el alumno anticipa y la nueva evidencia que obligan a reestructurar su comprensión. El docente no ‘transfiere’ respuestas; diseña experiencias, preguntas y andamios que empujan al estudiante a reconstruirlas. La clave es que la dificultad sea óptima: suficientemente desafiante para movilizar recursos, pero no tan alta que frustre o rompa la motivación. Esta dosificación es un acto profesional que combina diagnóstico, selección de tareas y gestión fina del tiempo.",
        },
        {
          type: "paragraph",
          text: "La interacción social es el segundo motor de la construcción de conocimiento. Aprendemos conversando, contrastando perspectivas y coordinando acciones con otros. Por ello, estructurar el trabajo colaborativo no es ‘poner a los alumnos en equipo’, sino definir roles, protocolos de diálogo y criterios de calidad que obliguen a explicar, justificar y refutar con evidencia. Cuando el estudiante verbaliza su razonamiento, expone supuestos, recibe preguntas y corrige sesgos; cuando escucha, compara estrategias y amplía repertorios. El docente actúa como mediador: modela preguntas de alto nivel cognitivo, regula la participación y convierte el error en insumo para pensar mejor. La evaluación formativa—rúbricas transparentes, auto y coevaluación—cierra el circuito, porque transforma la interacción en información accionable para ajustar la práctica.",
        },
        {
          type: "paragraph",
          text: "El tercer pilar es la autorregulación: conciencia de lo que entiendo/no entiendo, de cómo utilizo mi atención y de qué estrategias me sirven. Esta capacidad no aparece por arte de magia; se enseña. Se promueve con metas claras, criterios de logro visibles, demostraciones de estrategias (p. ej., cómo resumir, comparar, analogar, reencuadrar), y pausas metacognitivas breves para que el estudiante explique qué hizo, por qué lo hizo y cómo lo mejoraría. En paralelo, se monitorea la carga cognitiva y emocional: tareas demasiado largas o ambiguas erosionan la atención; dinámicas bien secuenciadas la recuperan. El objetivo es que el alumno pase de ‘hacer por indicación’ a ‘elegir y justificar estrategias’, habilidad indispensable para transferir el aprendizaje más allá del aula.",
        },
        {
          type: "paragraph",
          text: "Finalmente, la unidad articula todo lo anterior en diseño didáctico concreto: situaciones auténticas, consignas con propósito, andamiajes decrecientes y evidencias de aprendizaje observables. En la práctica, esto significa planear activadores de interés (preguntas generadoras, casos breves), actividades centrales con variados modos de representación (texto, gráfico, esquema), y cierres que obliguen a integrar (explicación, mapa, producto). El docente documenta hallazgos, ajusta la secuencia y consolida un banco de errores frecuentes y respuestas modelo. Así, la construcción de conocimiento deja de ser un eslogan y se convierte en una cadena de decisiones instruccionales verificables. El estándar es claro: si el estudiante puede explicar, aplicar y justificar con criterios, el diseño funcionó; si no, iteramos. Enseñar es diseñar experiencias que hagan posible ese resultado.",
        },

        /* Acordeón (un solo componente con tres niveles) */
        {
          type: "accordion",
          header: "Guía rápida de la unidad: tres niveles de análisis",
          open: false,
          text:
            "• Nivel 1 — Actividad del sujeto.\n" +
            "  Foco: qué hace el alumno para construir sentido (activadores, tareas núcleo, cierres). Indicadores: calidad de preguntas, uso de estrategias, evidencias de comprensión.\n\n" +
            "• Nivel 2 — Reorganización cognitiva.\n" +
            "  Foco: cómo cambian los esquemas (conflicto cognitivo, analogías, contrajemplos). Indicadores: precisión conceptual, transferencia, corrección de errores típicos.\n\n" +
            "• Nivel 3 — Mediación social y evaluación formativa.\n" +
            "  Foco: interacción, roles, retroalimentación y clima. Indicadores: participación equitativa, argumentos con evidencia, uso de rúbricas y autorregulación.",
        },
      ],

      /* → TEMAS (nivel 1 dentro de la unidad) */
      subthemes: [
        {
          id: "3.1",
          numbering: "Tema 3.1",
          title:
            "La actividad del sujeto como condicionante de su organización",
          content: [
            {
              type: "paragraph",
              text: "En el marco del constructivismo, afirmar que la actividad del sujeto condiciona su organización cognitiva significa reconocer que aprender no es una operación pasiva de registro, sino un proceso de construcción en el que el estudiante interpreta, selecciona, reorganiza y valida información a la luz de sus esquemas previos. La actividad no se limita a manipular materiales o ‘hacer cosas’; es, ante todo, actividad mental: formular preguntas, establecer relaciones, elaborar explicaciones provisionales, contrastarlas con evidencia y, cuando corresponde, revisarlas. Esta perspectiva desplaza el foco desde la transmisión de contenidos hacia el diseño de experiencias de aprendizaje que disparen operaciones cognitivas de alto nivel (comparar, clasificar, abstraer, inferir, modelar), a la par que se cuida el andamiaje emocional y social que habilita la indagación sostenida. En términos prácticos, la actividad del sujeto requiere propósitos claros (¿para qué aprendemos esto?), consignas bien calibradas (desafío óptimo), criterios de logro visibles (qué cuenta como ‘bien hecho’) y retroalimentación específica sobre el proceso (qué hice, por qué funcionó, qué ajustaré). La organización cognitiva se reconfigura cuando el alumno enfrenta discrepancias entre lo que espera y lo que observa; allí aparece el ‘conflicto cognitivo’, motor de la reestructuración. Pero conflicto no es sinónimo de caos: el docente planifica tareas que tensan las ideas iniciales sin romper la motivación, ofrece pistas graduadas y modela estrategias metacognitivas (anticipar, monitorear, evaluar). Con este enfoque, la actividad deja huella: el estudiante entiende con mayor profundidad, transfiere lo aprendido a nuevos contextos y adquiere control progresivo sobre sus formas de pensar. Esa es la promesa de una enseñanza centrada en la actividad del aprendiente: convertir la clase en un laboratorio intelectual donde se aprende a pensar, no solo a responder.",
            },

            {
              type: "accordion",
              header: "Claves de diseño para activar la mente del estudiante",
              open: false,
              text:
                "• Propósito explícito → formula un ‘para qué’ significativo y contextualizado.\n" +
                "• Consignas con desafío óptimo → ni triviales ni inalcanzables; alineadas a criterios de logro.\n" +
                "• Variación de representaciones → texto, gráfico, esquema, caso, dato; exige traducir entre formatos.\n" +
                "• Pistas graduadas → primero metapistas (qué estrategia usar), luego micropistas (dónde mirar).\n" +
                "• Retroalimentación sobre proceso → qué estrategia funcionó y por qué, no solo ‘correcto/incorrecto’.",
            },

            {
              type: "paragraph",
              text: "Comprender la actividad del sujeto exige mapear sus conocimientos previos con rigor didáctico. Antes de abordar un nuevo contenido, conviene externalizar las ideas iniciales mediante organizadores previos, preguntas de sondeo, mapas conceptuales o pequeñas explicaciones en voz alta. Hacer visible lo que ya se cree saber permite al docente calibrar el punto de partida y al estudiante tomar conciencia de su propia comprensión. A partir de esa línea base, se introducen tareas que desencadenan contrastes fértiles: situaciones que no encajan del todo con las expectativas y demandan reconfigurar relaciones entre conceptos, criterios o procedimientos. El rol docente no es ‘dar la respuesta’, sino proveer experiencias ricas en información y estructurar interacciones que obliguen a justificar con evidencia. El estudiante, por su parte, asume responsabilidades cognitivas concretas: anticipa resultados, elige estrategias, monitorea su avance y evalúa si sus explicaciones dan cuenta de los datos. Cuando una consigna requiere traducir entre múltiples representaciones (por ejemplo, de un caso narrativo a un diagrama causal y luego a una regla general), la mente del alumno se ve forzada a reorganizarse: cada traducción revela huecos, sesgos o confusiones que difícilmente emergerían con ejercicios rutinarios. En este escenario, la actividad del sujeto no es caprichosa: responde a metas claras y criterios compartidos. Cuando el docente explicita qué cuenta como una buena explicación (claridad, coherencia, uso de evidencia, conexión con conceptos clave) y proporciona modelos de respuesta, el alumno dispone de estándares para autorregularse. Así, la actividad gana dirección: no es solo movimiento, es pensamiento intencional hacia una comprensión más potente.",
            },

            {
              type: "paragraph",
              text: "Otra dimensión indeclinable de la actividad del sujeto es su carácter socialmente mediado. El pensamiento se afina en la interacción, por eso diseñar dinámicas colaborativas con estructura es una decisión técnica, no un adorno. La consigna ‘trabajen en equipo’ suele ser insuficiente si no se definen roles (facilitador, relator, verificador de criterios), protocolos de diálogo (reclamar evidencia, parafrasear, preguntar antes de refutar) y productos intermedios que obliguen a explicar el razonamiento, no solo a repartir tareas. En equipos bien diseñados, el estudiante debe traducir su comprensión a un lenguaje compartido: al hacerlo, detecta lagunas, busca ejemplos y ajusta su explicación. Al escuchar a otros, compara estrategias y descubre alternativas. El docente, mientras tanto, circula con preguntas de alto impacto (‘¿qué evidencia respalda esa afirmación?’, ‘¿qué pasaría si…?’, ‘¿cómo cambia tu conclusión si varía este dato?’) y recoge evidencias rápidas (mini-pizarras, tarjetas de salida, semáforos de comprensión) para tomar decisiones en tiempo real: avanzar, pausar para modelar una estrategia, o proponer un contrajemplo que refine el concepto. La evaluación formativa cierra el circuito social: rúbricas transparentes, auto y coevaluación breve, y micro-metas que cada equipo fija y revisa. Bajo estas condiciones, la actividad del sujeto supera la mera ejecución: se vuelve explicativa y justificativa, que es la forma más poderosa de aprender. La interacción no sustituye el esfuerzo individual, lo potencia; y cuando el aula preserva un clima emocional seguro—donde equivocarse es parte del método—la actividad mental alcanza profundidad sin sacrificar la motivación.",
            },

            {
              type: "accordion",
              header:
                "Protocolos de interacción que elevan la exigencia cognitiva",
              open: false,
              text:
                "• Roles rotativos: facilitador (gestiona turnos), relator (sintetiza), verificador (contrasta con criterios), curador de evidencia (documenta).\n" +
                "• Reglas de diálogo: parafrasea antes de refutar; toda afirmación exige evidencia; diferencia dato, inferencia y juicio.\n" +
                "• Productos intermedios: mapa rápido de ideas, tabla ‘dato-inferencia-regla’, explicación de 90 segundos grabada, chequeo de criterios.",
            },

            {
              type: "paragraph",
              text: "Finalmente, la actividad del sujeto se robustece cuando la clase enseña a autorregular el propio aprendizaje. La metacognición no se invoca: se instruye. Para ello, el docente modela en voz alta cómo enfrenta una tarea: define el objetivo, elige una estrategia, anticipa posibles errores y decide cómo verificará su resultado. Luego, invita al alumnado a practicar la misma secuencia con plantillas sencillas (‘Antes-Durante-Después’): antes, declaro mi meta y estrategia; durante, monitoreo señales de avance (¿mi ejemplo cumple los criterios?); después, evalúo la calidad de mi explicación y planifico un ajuste. Este hábito se consolida con retroalimentación que nombra el proceso (‘observé que cambiaste de estrategia cuando el ejemplo no encajó, eso es autorregulación’), no solo con calificaciones. Además, se gestionan la carga cognitiva y la emocional: consignas con pasos visibles, tiempos pautados y pausas breves para ‘recuperar’ atención (respiración, micro-movimiento, micro-repaso). Integrar evidencias rápidas de aprendizaje (preguntas diagnósticas, tarjetas de salida) permite decidir con datos si escalar la complejidad o reforzar un prerequisito. En síntesis, la actividad del sujeto se convierte en un ciclo virtuoso: activa conocimientos previos, enfrenta discrepancias bien diseñadas, dialoga con otros bajo reglas que exigen evidencia, y se regula a sí mismo con metas y criterios claros. Ese ciclo explica, mejor que cualquier slogan, por qué algunas clases transforman la comprensión y otras apenas la rozan. Diseñar para ese ciclo es un acto profesional: requiere intención, método y evaluación continua.",
            },
          ],
          subthemes: [],
        },
        {
          id: "3.2",
          numbering: "Tema 3.2",
          title:
            "El cambio de la organización cognitiva depende de la actividad del sujeto",
          content: [
            {
              type: "paragraph",
              text: "Afirmar que el cambio de la organización cognitiva depende de la actividad del sujeto implica reconocer que la mente no almacena datos como recipientes, sino que reconfigura sus estructuras cuando actúa con sentido sobre problemas auténticos. La noción de ‘actividad’ desborda la manipulación física de materiales: es, ante todo, actividad intelectual intencional guiada por metas, criterios y retroalimentación. Desde un enfoque constructivista, el conocimiento se reconstruye cuando el estudiante enfrenta discrepancias entre lo que espera y lo que observa, compara explicaciones alternativas y negocia significados con otros. Esa fricción cognitiva—siempre calibrada—provoca desequilibrios que exigen acomodaciones: ajustes reales en las conexiones entre conceptos, reglas o procedimientos. En la práctica, la docencia que favorece el cambio organizativo diseña secuencias donde el estudiante debe anticipar resultados, explicitar supuestos, seleccionar evidencias y justificar por qué una inferencia es preferible a otra bajo criterios compartidos. Si el alumno solo reproduce pasos, memoriza fórmulas o copia definiciones sin argumentación, no hay razones poderosas para reorganizar la arquitectura de su comprensión. El cambio se produce cuando lo que ya sabe resulta insuficiente para explicar un caso, resolver una tarea o sostener una decisión. En ese punto, el docente no ‘corrige’ con un monólogo, sino que introduce andamiajes estratégicos: modelos de pensamiento en voz alta, representaciones múltiples del mismo fenómeno, preguntas que exigen precisión conceptual y ejemplos límite que obligan a refinar categorías. Así, la actividad no es agitación; es pensamiento dirigido por metas en contextos que obligan a transformar esquemas.",
            },
            {
              type: "accordion",
              header: "Motores del cambio cognitivo (síntesis operativa)",
              open: false,
              text:
                "• Conflicto cognitivo calibrado: discrepancia manejable entre expectativa y evidencia.\n" +
                "• Representaciones múltiples: obligan a traducir y detectar huecos (texto, gráfico, dato, caso).\n" +
                "• Criterios visibles de calidad: especifican qué cuenta como buena explicación o solución.\n" +
                "• Retroalimentación sobre proceso: nombra estrategias (comparar, abstraer, reencuadrar) y su efecto.",
            },
            {
              type: "paragraph",
              text: "Para que la actividad del sujeto produzca reorganización y no solo práctica mecánica, la tarea debe estar diseñada con un ‘desafío óptimo’: suficientemente exigente para exigir nuevas conexiones, pero no tan difícil que desborde los recursos disponibles. Aquí, el docente actúa como ingeniero de la carga cognitiva y emocional. Secuencia el contenido en micro-retos con metas parciales claras, explicita prerequisitos, ofrece plantillas de pensamiento (por ejemplo, ‘Dato → Inferencia → Regla’) y modela la autoexplicación como herramienta de control metacognitivo. Además, regula el clima para que el error sea fuente de información, no de amenaza. La reorganización cognitiva se acelera cuando el estudiante verbaliza su razonamiento, compara su explicación con un modelo experto y detecta discrepancias concretas: términos ambiguos, criterios implícitos, saltos lógicos, confusiones entre ejemplo y definición. La traducción entre formatos es un disparador potente: exigir que un caso narrativo se convierta en un diagrama causal y luego en un principio general fuerza a reestructurar relaciones. Por último, la evaluación formativa cierra el circuito: co-construye rúbricas centradas en evidencia y proceso; promueve auto y coevaluación breve; y vincula la calificación con la calidad del razonamiento, no solo con el resultado. Así, la organización cognitiva cambia porque la experiencia de aprendizaje obliga a pensar de otro modo.",
            },
            {
              type: "accordion",
              header: "Plantillas de autorregulación para la reorganización",
              open: false,
              text:
                "• Antes: ¿Qué sé? ¿Qué estrategia usaré? ¿Qué criterio probará que lo logré?\n" +
                "• Durante: ¿Qué evidencia respalda mi inferencia? ¿Qué alternativa compite con mi explicación?\n" +
                "• Después: ¿Dónde falló mi argumento? ¿Qué ajusto en mi esquema/concepto/procedimiento?",
            },
            {
              type: "paragraph",
              text: "Aunque la reorganización cognitiva es individual, rara vez ocurre en aislamiento. El diálogo disciplinado—no cualquier conversación—obliga a justificar con criterios y evidencia, a adoptar el punto de vista del otro y a distinguir dato de inferencia. Por ello, los protocolos de interacción (roles, turnos, preguntas estructuradas) no son accesorios, son mecanismos que fuerzan operaciones de alto nivel: comparar marcos explicativos, identificar supuestos, evaluar la suficiencia de la evidencia. En equipos, la necesidad de hacerse entender lleva a depurar el lenguaje técnico, a ejemplificar con precisión y a explicitar conexiones entre conceptos. El docente observa, recoge evidencias rápidas (pizarras, tarjetas de salida, sondeos), y decide si interviene modelando una estrategia, introduciendo un contraejemplo o escalando la complejidad. Un rasgo clave del cambio organizativo es su transferibilidad: si la nueva estructura es más poderosa, el estudiante puede aplicarla a problemas distintos sin instrucciones detalladas. Por eso, el cierre de cada secuencia didáctica debe incluir una fase de ‘prueba de transferencia’: un caso o pregunta que rompa la superficie del ejercicio original, obligando a usar la estructura y no el molde. Cuando el alumno puede explicar por qué su nueva manera de pensar explica mejor los datos, la reorganización dejó de ser local y se convirtió en avance real. Ese es el indicador que importa.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el cambio en la organización cognitiva no es lineal ni limpio: implica avances, retrocesos y reacomodos. La docencia se orienta entonces por ciclos de diseño–implementación–análisis: se planifica una hipótesis didáctica (qué operaciones dispararán la reestructuración), se ejecuta con mediciones rápidas de proceso (qué hacen y dicen los alumnos), y se ajusta con base en evidencias, no intuiciones. La metacognición se enseña y se evalúa: se piden micro-reflexiones (‘qué cambió hoy en mi explicación y por qué’), se promueve el registro de errores útiles y se normaliza la revisión. Esta ética del ensayo consciente requiere un clima donde el esfuerzo intelectual sea visible y valorado. En síntesis: cuando el diseño instruccional logra que el alumno tenga razones internas para reorganizar su pensamiento—no solo estímulos externos—, el cambio cognitivo sucede y se mantiene. La actividad se vuelve inteligencia en acto, y la clase, un taller de reconstrucción conceptual sostenida por criterios, evidencia y diálogo.",
            },
          ],
          subthemes: [],
        },
        {
          id: "3.3",
          numbering: "Tema 3.3",
          title:
            "La realidad social inmersa en la construcción del conocimiento",
          content: [
            {
              type: "paragraph",
              text: "La construcción del conocimiento no es un emprendimiento solitario ubicado en una mente abstracta; está inmersa en prácticas sociales, lenguajes compartidos, herramientas culturales y relaciones de poder que modelan qué se considera evidencia válida, qué preguntas son legítimas y qué soluciones son aceptables. Aprender es, por tanto, incorporarse a comunidades discursivas: modos de hablar, argumentar, representar y validar propios de una disciplina o de un oficio. Desde esta perspectiva socioconstructivista, el aula no es únicamente un espacio para transmitir contenidos, sino un entorno donde se ensayan identidades intelectuales: se habla ‘como’ biólogo, se argumenta ‘como’ historiador, se representa ‘como’ matemático. Este desplazamiento vuelve centrales las mediaciones: el lenguaje, los instrumentos (analógicos y digitales), los artefactos externos (tablas, mapas, simulaciones), y, sobre todo, las interacciones reguladas por normas de participación. El conocimiento escolar gana densidad cuando se ancla en situaciones socialmente significativas para los estudiantes y cuando los productos del aprendizaje tienen destinatarios reales o simulados plausibles. En ese marco, la evaluación deja de ser un monopolio del docente y se convierte en una práctica compartida: co-construcción de criterios, auto y coevaluación, revisión por pares. Lo social no diluye la exigencia; la eleva, porque obliga a hacer pública la propia comprensión y a sostenerla con razones.",
            },
            {
              type: "accordion",
              header: "Elementos socioculturales que moldean el aprendizaje",
              open: false,
              text:
                "• Lenguaje y géneros discursivos: definen cómo se formulan problemas y se justifican respuestas.\n" +
                "• Herramientas y artefactos: amplifican la cognición (diagramas, simuladores, bases de datos).\n" +
                "• Normas de participación: quién habla, cómo se replica, qué cuenta como evidencia aceptable.",
            },
            {
              type: "paragraph",
              text: "Si el conocimiento es socialmente situado, la didáctica debe diseñar ‘situaciones de participación’ que permitan a los alumnos desempeñar papeles intelectuales con responsabilidad real. La resolución de casos, los estudios de controversias, los proyectos con clientes internos/externos, las simulaciones con datos abiertos y los debates con reglas de evidencia convierten al alumno en un agente epistémico, no en un repetidor. Para hacerlo viable, el docente declara propósitos y productos, establece criterios visibles y secuencia interacciones: investigación de antecedentes, formulación de hipótesis en equipos, contraste con fuentes de distinta naturaleza, elaboración de explicaciones y defensa pública. En cada fase se demanda un lenguaje técnico suficiente y el uso de artefactos que hagan visible el razonamiento (mapas causales, tablas de ‘dato–inferencia–regla’, líneas de tiempo argumentadas). Además, se incluye un componente de responsabilidad social: ¿quiénes se ven afectados por esta decisión?, ¿qué perspectivas han quedado fuera?, ¿cómo justificamos la solución frente a criterios éticos y de impacto? Al incorporar estas preguntas, el aprendizaje dialoga con la realidad más allá del aula y la exigencia cognitiva se combina con la sensibilidad social. El resultado es un conocimiento más robusto porque ha sido probado en múltiples foros, no solo en el examen.",
            },
            {
              type: "accordion",
              header: "Protocolos de participación con alta densidad cognitiva",
              open: false,
              text:
                "• Controversia estructurada: equipos A/B investigan, intercambian posiciones y producen una síntesis común.\n" +
                "• Revisión por pares: rúbrica compartida; cada texto recibe preguntas de precisión y evidencias faltantes.\n" +
                "• Informe público: producto con destinatario; defensa oral con criterios de evidencia y claridad.",
            },
            {
              type: "paragraph",
              text: "La dimensión social del conocimiento exige también una gestión deliberada del clima y de la justicia epistémica en el aula. No todas las voces tienen la misma probabilidad de ser escuchadas: sesgos de participación, diferencias de capital cultural o experiencias previas pueden invisibilizar aportes valiosos. Por ello, la docencia inclusiva establece rutinas que redistribuyen la palabra (turnos, tarjetas, sorteos), solicita evidencias por escrito antes del diálogo (para proteger ideas incipientes), y ofrece andamiajes de lenguaje (glosarios dinámicos, marcos de frase) que reducen barreras. La evaluación reconoce la contribución intelectual en múltiples formatos (texto, esquema, modelo, prototipo) y valora el progreso, no solo el punto de llegada. El docente, como moderador epistémico, interviene cuando detecta ‘autoridad sin evidencia’ o ‘evidencia sin claridad’, devolviendo la conversación a los criterios acordados. Además, vincula los contenidos con problemas contemporáneos significativos para el grupo, para que la motivación no dependa únicamente de la nota, sino del sentido. Con estas medidas, lo social se convierte en palanca de aprendizaje profundo: amplifica perspectivas, obliga a justificar y modela hábitos de trabajo intelectual colaborativo que trascienden la escuela.",
            },
            {
              type: "paragraph",
              text: "Finalmente, integrar la realidad social al proceso de construcción del conocimiento no significa convertir la clase en una asamblea sin rigor, sino en un taller con reglas de evidencia, argumentación y respeto. La clave es el equilibrio entre apertura y exigencia: apertura a múltiples voces y contextos; exigencia de precisión conceptual, de uso de datos y de coherencia en las explicaciones. La transferencia se diseña explícitamente: los alumnos deben aplicar marcos conceptuales a contextos nuevos con restricciones reales (tiempo, recursos, destinatarios) y reflexionar sobre el impacto de sus decisiones. Se institucionalizan momentos de metacognición social (‘qué aprendimos de esta interacción’, ‘quién quedó fuera y cómo lo incluiremos’) y se documenta el aprendizaje en portafolios que muestren la evolución del pensamiento, no solo productos finales. Cuando el aula opera así, la construcción del conocimiento se vuelve una práctica pública responsable: se aprende a pensar con otros, para otros y frente a otros. Ese es el tipo de alfabetización intelectual y cívica que justifica el esfuerzo: formar personas capaces de entender problemas complejos, dialogar con evidencia y construir soluciones razonadas que honren el conocimiento disponible y la dignidad de quienes serán afectados por él.",
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
          href: "https://youtu.be/pm_QZiP_Ors", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Cuál es el PAPEL DEL DOCENTE Y ESTUDIANTE según Lev Vygotsky (ESFM EF) https://youtu.be/-id4Yrc105U",
            "DPC-Sem3 https://youtu.be/pm_QZiP_Ors",
            "La responsabilidad del estudiante en un modelo pedagógico constructivista en programas de Ciencias de la Salud http://www.scielo.org.co/pdf/sun/v27n1/v27n1a13.pdf",
            "Teoría del constructivismo social de Lev Vygotsky en comparación con la teoría de Jean Piaget https://es.scribd.com/doc/54348899/TEORIA-DEL-CONSTRUCTIVISMO-SOCIAL-DE-LEV-VYGOTSKY-EN-COMPARACION-CON-LA-TEORIA-JEAN-PIAGET",
            "El constructivismo como teoría y método de enseñanza https://www.redalyc.org/pdf/4418/441846096005.pdf",
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
            "Arancibia, V., Herrera, P. & Strasser, K. (2007). Manual de psicología educacional. Santiago: Digitalia.",
            "Arguelles, D. & Nagles, N. (2007). Estrategias para promover procesos de aprendizaje autónomo. Bogotá: Alfaomega.",
            "Ausubel, D. (1978). Psicología Educativa desde un punto de vista cognoscitivo. México: Trillas.",
            "Beltrán, Ll. J. & Bueno, J. (1995). Psicología de la educación. México: Alfa Omega.",
            "Bravo, V. L. (2009). Psicología educacional, psicopedagogía y educación especial. México: Revista IIPSI.",
            "Bruning, R. H., Schraw, G. J. & Nolrby, M. M. (2012). Psicología cognitiva y de la instrucción. Madrid: Pearson.",
            "Burén, J. (1990). Enseñar a aprender: Introducción a la metacognición. Bilbao: Mensajero.",
            "Camacho Caratón, T., Flores Rico, M. E., Gaibao Mier, D. M., Aguirre Lora, M. A., Pasive Castellanos, Y., & Murcia Neira, G. (2012). Estrategias pedagógicas en el ámbito educativo. Bogotá: Kimpes.",
            "Campanario, M. (2009). El desarrollo de la metacognición en el aprendizaje de las ciencias: estrategias para el profesor y actividades orientadas al alumno. Colección Digital Eudoxus, (8).",
            "Coll, S. C. (1990). Aprendizaje escolar y construcción del conocimiento. Madrid: Paidós.",
            "Del Prado, I. L. (2011). Aprendizaje Significativo (David Ausubel). Educ.ar. Disponible en: http://portal.educ.ar/debates/eid/docenteshoy/materiales-escolares/aprendizaje-significativo-davi.php",
            "Díaz, F. & Hernández, G. (2010). Estrategias docentes para un aprendizaje significativo. México: McGraw-Hill.",
            "Feldman, R. S. (2005). Psicología: con aplicaciones en países de habla hispana. México: McGraw Hill.",
            "García, E. (2001). Qué, el arte de preguntar para enseñar y aprender mejor. México: Byblos.",
            "Ledesma Aroya, M. (2014). Análisis de la teoría de: Vygotsky para la reconstrucción de la inteligencia social. Quito: EDUNICA.",
            "Mateos, M. (2001). Metacognición y educación. Buenos Aires: Aique.",
            "Newman, D., Griffin, P. & Cole, M. (1991). Zona de construcción del conocimiento. Trabajando por un cambio cognitivo en educación. Madrid: Morata.",
            "Nickerson, R., Perkins, D. & Smith, E. (1985). Enseñar a pensar; aspectos de la aptitud intelectual. Perspectivas para enseñar a pensar. Madrid: Paidós Ibérica.",
            "Osses, S. (2007). Hacia un aprendizaje autónomo en el ámbito científico. Inserción de la dimensión metacognitiva en el proceso educativo. Concurso Nacional Proyectos Fondecyt.",
            "Woolfolk, A. (2010). Psicología educativa. México: Pearson.",
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
