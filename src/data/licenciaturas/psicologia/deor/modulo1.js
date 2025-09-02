/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LPSIC",
  courseId: "LPSIC-DO",
  id: "LPSIC-DO-M1",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Desarrollo organizacional",
  title:
    "Módulo 1. Antecedentes y enfoque sistémico del desarrollo organizacional",
  semestre: "5º",
  teacher: "Enrique Bombela Cuevas",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "El alumno comprenderá qué es el desarrollo organizacional, los términos en que se basa y su origen y evolución, tanto en México como en el extranjero —principalmente en Estados Unidos—.",
  competencies: [
    "Reconocer la importancia del desarrollo organizacional como herramienta administrativa para alcanzar objetivos institucionales y para el bienestar de los colaboradores.",
    "Identificar técnicas para integrar grupos de alto rendimiento que incrementen la productividad y favorezcan un clima laboral agradable.",
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
      title: "Antecedentes del desarrollo organizacional",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad traza el origen y consolidación del desarrollo organizacional (DO) como campo aplicado de las ciencias del comportamiento orientado al cambio planificado. Partimos de una premisa operativa: las organizaciones se transforman de manera más efectiva cuando combinan datos, participación y aprendizaje continuo. En ese marco, el DO aporta métodos para diagnosticar procesos, alinear estructuras con estrategia y fortalecer vínculos humanos que sostienen el desempeño. El propósito del módulo es doble: comprender qué es el DO —sus conceptos y lenguaje— y reconocer su evolución en contextos internacionales y en México. Así se evita confundir modas gerenciales con un enfoque con soporte teórico y evidencia práctica. La unidad, por tanto, no se limita a recuentos históricos: traduce lecciones en criterios de intervención que el estudiante podrá aplicar con rigor y sentido humano dentro de organizaciones reales.",
        },
        {
          type: "paragraph",
          text: "El DO hunde sus raíces en cuatro corrientes que, articuladas, le dan identidad: (1) el entrenamiento en laboratorios de sensibilización (grupos “T”), que trabaja conciencia de conducta, escucha y procesos grupales; (2) la investigación y retroalimentación de encuestas, que convierte datos en decisiones de gestión con enfoque diferencial por niveles y responsabilidades; (3) la investigación-acción, que liga diagnóstico, intervención y evaluación cíclica; y (4) los enfoques socio-técnicos y socio-clínicos, que optimizan en conjunto la dimensión humana y la técnica del trabajo y fomentan la participación en el rediseño de sistemas. Estas fuentes dieron lugar a intervenciones de equipo, consultoría de procesos, confrontación constructiva y mejoras del clima, con impactos observables en comunicación, coordinación y aprendizaje organizacional sostenido.",
        },
        {
          type: "paragraph",
          text: "En el plano internacional, los estudios de Hawthorne evidenciaron que la productividad no depende solo de condiciones físicas, sino de factores sociales y de significado del trabajo, abriendo camino a una gestión más humana. Desde finales de los años cincuenta, experiencias en corporaciones industriales incorporaron dinámicas de sensibilidad y grupos “T”, y las universidades impulsaron metodologías de encuesta-feedback y de investigación-acción como estándares para el cambio. El hilo conductor fue claro: diagnosticar con datos, intervenir con participación informada y evaluar efectos para ajustar. Ese trípode —datos, diálogo y diseño— distingue al DO de iniciativas improvisadas. La unidad mostrará cómo esas prácticas se trasladaron al lenguaje contemporáneo de equipos de alto rendimiento, desarrollo de liderazgo, rediseño de procesos y cultura organizacional orientada al aprendizaje.",
        },
        {
          type: "paragraph",
          text: "En México, el desarrollo organizacional se institucionalizó en la academia y en la empresa a partir de la segunda mitad del siglo XX, con seminarios pioneros, primeras gerencias de DO en la industria y posgrados especializados. Se consolidó un ecosistema de consultoría, congresos y adopción empresarial que integró herramientas como grupos “T”, círculos de calidad y enfoques participativos. Este recorrido explica por qué, todavía hoy, el DO se confunde a veces con programas aislados de calidad o planeación estratégica: comparte instrumentos, pero su diferencia está en el énfasis en procesos humanos y en el ciclo diagnóstico-intervención-evaluación. Conocer el contexto nacional permite calibrar expectativas, evitar recetas universales y diseñar intervenciones sensibles a la cultura y a la regulación locales.",
        },
        {
          type: "paragraph",
          text: "Conceptualmente, el DO puede resumirse como una estrategia educativa planeada que, mediante intervenciones basadas en evidencia, redefine creencias, valores, prácticas y estructuras para mejorar simultáneamente bienestar y resultados. Definiciones de referencia lo describen como una corriente directiva que aplica técnicas sociológicas y psicológicas para resolver problemas y fortalecer equipos; y como el estudio de procesos internos para remover obstáculos a la efectividad grupal y elevar la calidad de las interrelaciones. Operativamente, el proceso típico integra tres etapas: diagnóstico organizacional, diseño del plan rector (con cartera de intervenciones y agenda) y presupuestación e implementación con evaluación continua. La unidad te dotará de lenguaje, criterios y herramientas mínimas para convertir esos principios en decisiones profesionales responsables.",
        },

        {
          type: "accordion",
          header: "Nivel 1 — Ideas fuerza de la unidad",
          open: false,
          text: "DO = cambio planificado con base en datos, participación y aprendizaje. Cuatro raíces: grupos “T”, encuesta-feedback, investigación-acción y enfoque socio-técnico/socio-clínico. Propósito: alinear desempeño y bienestar mediante intervenciones verificables.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Conexiones prácticas",
          open: false,
          text: "Diagnóstico multiescala (organización, áreas, puestos); diseño de intervenciones (equipos, procesos, clima); medición antes-durante-después; gestión del cambio con liderazgo y comunicación; ética y respeto a la dignidad en cada paso.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ruta de estudio sugerida",
          open: false,
          text: "1) Leer raíces históricas; 2) mapear conceptos clave y términos; 3) analizar casos nacionales e internacionales; 4) practicar instrumentos de diagnóstico; 5) diseñar mini-intervenciones con plan y métricas.",
        },
      ],
      subthemes: [
        {
          id: "1.2",
          numbering: "1.2",
          title:
            "Orígenes de la investigación y retroalimentación de encuestas",
          content: [
            {
              type: "paragraph",
              text: "La investigación y retroalimentación de encuestas surge como una de las raíces metodológicas del desarrollo organizacional (DO) a partir de los trabajos de Rensis Likert. Su apuesta fue dotar al diagnóstico organizacional de un andamiaje empírico que tradujera percepciones y conductas en datos comparables por áreas, niveles jerárquicos y procesos. Frente a decisiones basadas en intuiciones o narrativas parciales, la encuesta capta patrones de clima, liderazgo, comunicación y colaboración, y permite segmentar hallazgos para diseñar acciones específicas. La lógica no es ‘medir por medir’, sino vincular la medición con decisiones: identificar palancas de cambio, fijar metas, seleccionar intervenciones y monitorear avances. El ciclo virtuoso es claro: levantar datos, analizarlos con rigor, retroalimentar a los implicados, acordar compromisos y verificar su cumplimiento. Así, la encuesta deja de ser un evento aislado para convertirse en instrumento de aprendizaje continuo y de diseño participativo del cambio.",
            },
            {
              type: "paragraph",
              text: "La efectividad de esta herramienta descansa en el trato diferenciado por responsabilidades y contextos. No se retroalimenta igual a un director, a un mando medio o a un equipo operativo; cada uno enfrenta problemas, incentivos y horizontes temporales distintos. Por ello, la técnica incorpora cortes por unidad, área y puesto, y alinea la discusión con competencias de decisión: lo que una jefatura puede corregir en su ámbito no debe desplazarse al comité ejecutivo, y viceversa. El objetivo es evitar la ‘parálisis por diagnóstico’ concentrando la energía en palancas de alto impacto. Una buena práctica consiste en prefijar hipótesis (p. ej., comunicación interáreas, sobrecarga de roles, ambigüedad de objetivos), contrastarlas con datos y construir planes realistas con responsables, plazos e indicadores. La encuesta, usada así, disciplina el diálogo y transforma percepciones subjetivas en acuerdos operativos.",
            },
            {
              type: "paragraph",
              text: "Metodológicamente, el proceso incluye cuatro momentos: diseño del instrumento (dimensiones y reactivos válidos), levantamiento con garantías de confidencialidad, análisis segmentado (comparaciones longitudinales y entre grupos) y retroalimentación estructurada. La retroalimentación es la bisagra: traduce números en decisiones. Se recomienda iniciar con un ‘mapa de calor’ de brechas críticas, priorizar dos o tres frentes por equipo y definir acciones de corto y mediano plazo. La frecuencia (anual o semestral) depende de la capacidad de absorción del cambio y del ritmo del negocio; medir sin implementar mina la credibilidad. En empresas multisitio, la combinación de resultados globales y planes locales equilibra coherencia corporativa con soluciones a la medida.",
            },
            {
              type: "paragraph",
              text: "Ética y técnica van de la mano. La confidencialidad y el uso responsable de los datos son condiciones para que las personas respondan con honestidad. Sesgos de formulación (reactivos ambiguos, escalas mal ancladas) o de administración (presión para contestar de cierta forma) erosionan calidad y confianza. Por eso, conviene pilotear instrumentos, entrenar a facilitadores y explicitar límites: la encuesta no reemplaza la escucha cualitativa, sino que la complementa; no sanciona a individuos, sino que ilumina procesos. En organizaciones con sindicatos o alta diversidad cultural, adaptar lenguaje y ejemplos evita malentendidos. La integridad metodológica preserva el propósito: comprender para mejorar, no para ‘calificar personas’.",
            },
            {
              type: "paragraph",
              text: "La retroalimentación efectiva es conversacional: presenta hallazgos clave, invita a interpretar causas y co-diseñar respuestas. Herramientas como “cinco porqués” y “árbol de problemas” ayudan a pasar de síntomas (baja satisfacción) a causas (metas contradictorias, falta de autonomía, fallas de coordinación). Las intervenciones derivadas suelen incluir clarificación de roles, rediseño de reuniones, reglas de interfaz entre áreas, coaching a mandos y proyectos de mejora de procesos. El seguimiento trimestral con indicadores simples (cumplimiento de acciones, evolución de métricas) evita el efecto ‘encuesta estacional’ y consolida el aprendizaje. De este modo, la técnica encarna el espíritu del DO: datos que se convierten en diálogo y, luego, en diseño organizacional.",
            },
            {
              type: "paragraph",
              text: "En términos de madurez, las organizaciones pasan de encuestas puntuales a sistemas de escucha continua (pulse surveys, focus groups, buzones digitales) integrados con KPIs de negocio (rotación, ausentismo, NPS interno, productividad). La clave está en correlacionar: cuando una mejora de liderazgo coincide con menor rotación o mayor entrega a tiempo, el caso de negocio del DO se vuelve tangible. La analítica avanzada permite detectar patrones sutiles (p. ej., ‘efecto supervisor’), pero siempre debe usarse con límites éticos —sin microvigilancia ni rastreo individual— para preservar confianza y cumplir la ley.",
            },
            {
              type: "paragraph",
              text: "Por último, el enfoque de encuesta-feedback se alinea con otras raíces del DO: alimenta la investigación-acción (diagnóstico → intervención → evaluación) y legitima rediseños socio-técnicos al mostrar dónde la tecnología o la estructura frenan el desempeño humano. Bien diseñado y conducido, convierte a cada equipo en una unidad de aprendizaje responsable de sus mejoras, con soporte experto del área de DO o de consultores. Esa es la promesa: que los datos dejen de ser reportes para convertirse en decisiones que dignifican el trabajo y elevan resultados.",
            },
            {
              type: "accordion",
              header: "Puntos clave",
              open: false,
              text: "Datos válidos + retroalimentación diferenciada + acuerdos operativos. Confidencialidad, ética y segmentación por niveles. De medir a actuar y dar seguimiento.",
            },
            {
              type: "accordion",
              header: "Checklist de implementación",
              open: false,
              text: "Instrumento validado; comunicación previa; levantamiento confidencial; análisis segmentado; sesiones de feedback; 2–3 acciones por equipo; indicadores trimestrales; evaluación anual.",
            },
          ],
        },

        {
          id: "1.3",
          numbering: "1.3",
          title: "Orígenes de la investigación-acción",
          content: [
            {
              type: "paragraph",
              text: "La investigación-acción es pilar del DO: un proceso cíclico que conecta diagnóstico riguroso, intervención deliberada y evaluación sistemática con participación activa del ‘sistema cliente’. Su lógica rechaza el cambio por ensayo y error; propone, en cambio, aprender haciendo, con evidencia y reflexión conjunta. El ciclo típico arranca con la clarificación del problema (¿qué duele y por qué importa?), sigue con la recopilación de datos pertinentes, la devolución estructurada al grupo, la deliberación para acordar acciones y, finalmente, la evaluación de resultados para cerrar o reconfigurar el ciclo. De esta forma, la organización abandona el péndulo entre improvisación y parálisis y adquiere un método para transformar su experiencia en conocimiento operativo.",
            },
            {
              type: "paragraph",
              text: "En su formulación clásica, la investigación-acción define seis momentos: (1) diagnóstico; (2) recolección de datos; (3) retroalimentación al grupo cliente; (4) análisis conjunto; (5) acción; y (6) evaluación y aprendizaje. Cada eslabón exige competencias: entrevistas y encuestas bien diseñadas, facilitación de conversaciones difíciles, diseño de intervenciones plausibles y medición de efectos. El énfasis está en la copropiedad: los involucrados no reciben soluciones empaquetadas; interpretan y deciden junto con el facilitador. Esto eleva la viabilidad del cambio y reduce resistencias, porque quienes implementan ayudan a diseñar. La evidencia no es decorativa: es la base para priorizar y asignar recursos.",
            },
            {
              type: "paragraph",
              text: "La herramienta nació antes de que el término DO se popularizara y encontró terreno fértil en problemas complejos donde múltiples actores sostienen piezas del rompecabezas —por ejemplo, cuellos de botella interáreas, fallas de coordinación o culturas de baja confianza—. En esos contextos, los planes unilaterales fracasan: es preciso reunir a quienes poseen el trabajo para que reconstruyan procesos y reglas de colaboración. La investigación-acción ofrece el ritual para ello: datos comunes, conversación conducida y compromisos verificables. Su carácter iterativo permite corregir el rumbo sin perder el aprendizaje acumulado; cada ciclo incorpora hallazgos y ajusta hipótesis.",
            },
            {
              type: "paragraph",
              text: "Una fortaleza crucial es la transparencia metodológica. Los datos que sustentan decisiones se comparten (resguardando confidencialidad), las hipótesis se discuten, los criterios de priorización se explicitan y las medidas de éxito se acuerdan antes de intervenir. Esto reduce narrativas defensivas (‘no era mi área’, ‘faltó apoyo’) y enfoca a la organización en conductas y procesos observables. Asimismo, al documentar el antes y el después, la investigación-acción construye memoria institucional que evita ciclos recurrentes de ‘reinventar la rueda’ y facilita inducción de nuevos líderes y equipos.",
            },
            {
              type: "paragraph",
              text: "En la práctica, la técnica se despliega en talleres y reuniones de trabajo que combinan comprensión del problema con diseño de soluciones. El facilitador cuida la dinámica: alterna plenarias con trabajo por células, usa mapas de procesos, cuadros SIPOC, matric es de responsabilidades y tableros visuales para aterrizar acuerdos. La regla de oro es mantener la proporción 70/30: 70% del tiempo dedicado a definir con precisión tareas, responsables y fechas, y 30% a discutir causas sistémicas. Sin ese sesgo a la acción, el entusiasmo inicial se disipa. El seguimiento quincenal con métricas simples (plazos, calidad de entregables, eliminación de retrabajos) mantiene el ímpetu y produce evidencia de avance.",
            },
            {
              type: "paragraph",
              text: "La investigación-acción convive naturalmente con otras raíces del DO. Se alimenta de encuestas (para focalizar esfuerzos) y, a su vez, legitima rediseños socio-técnicos al mostrar el desajuste entre proceso y estructura. También habilita prácticas de grupos “T” en niveles seguros: sensibiliza sobre impacto interpersonal, pero siempre vinculado a tareas y resultados. En entornos regulados, su disciplina documental ayuda a auditar decisiones y a demostrar diligencia debida ante auditorías o certificaciones.",
            },
            {
              type: "paragraph",
              text: "Riesgos a evitar: fetichizar la herramienta (usar ciclos por inercia sin atender prioridades reales), tratar la retroalimentación como ‘descarga de quejas’ sin traducirla en decisiones, o delegar todo al consultor. El antídoto es el liderazgo responsable: patrocinar el proceso desde la alta dirección, proteger el tiempo de trabajo colaborativo, retirar obstáculos y modelar la coherencia entre discurso y conducta. Cuando se usa con honestidad y foco, la investigación-acción convierte a la organización en una comunidad de práctica que aprende y mejora de forma sostenida.",
            },
            {
              type: "accordion",
              header: "Mapa del ciclo",
              open: false,
              text: "Diagnóstico → recolección de datos → retroalimentación → análisis conjunto → acción → evaluación/aprendizaje (y vuelta al inicio).",
            },
            {
              type: "accordion",
              header: "Buenas prácticas",
              open: false,
              text: "Copropiedad de datos y planes; objetivos claros; priorización de alto impacto; seguimiento frecuente con métricas simples; documentación de aprendizajes.",
            },
          ],
        },
        {
          id: "1.4",
          numbering: "1.4",
          title: "Orígenes socio-técnicos y socio-clínicos",
          content: [
            {
              type: "paragraph",
              text: "El origen socio‑técnico del desarrollo organizacional (DO) remite a las investigaciones del Tavistock Institute (Trist, Emery), que observaron que el desempeño sostenible no depende únicamente de la tecnología o de la estructura, sino de la ‘optimización conjunta’ entre sistema técnico (procesos, equipos, métodos) y sistema social (roles, motivaciones, aprendizaje). A partir de minas, astilleros y manufactura, documentaron que los arreglos de trabajo que respetan la autonomía del grupo, la variedad de tareas y la retroalimentación inmediata producen mayor calidad, seguridad y compromiso. De esa evidencia emergieron diseños de células semi‑autónomas, enriquecimiento de puestos, rotación planificada y mecanismos de mejora continua local. El objetivo no era ‘humanizar’ la tecnología como adorno, sino rediseñar técnicamente el trabajo para que la cooperación sea posible sin heroísmos. Esta raíz dotó al DO de una brújula: cambiar estructuras y procesos para que las personas puedan, efectivamente, trabajar mejor juntas.",
            },
            {
              type: "paragraph",
              text: "El enfoque socio‑técnico introduce principios operativos aún vigentes: 1) congruencia entre demanda del entorno y diseño interno; 2) agrupación natural de tareas para evitar fragmentación excesiva; 3) criterios múltiples de desempeño (calidad, costo, tiempo, seguridad, aprendizaje); 4) control en la fuente (quien hace, controla); 5) autonomía responsable con límites claros; 6) soporte de información donde se ejecuta el trabajo; 7) retroalimentación rápida para ajustar. Estos principios desplazaron el paradigma taylorista de división extrema del trabajo hacia configuraciones que equilibran eficiencia y significado. En la práctica, se traducen en células de manufactura, células clínicas, células de servicio y en la figura del equipo como unidad de diseño, con indicadores visibles, rituales de aprendizaje y capacidad para resolver problemas en el punto de valor.",
            },
            {
              type: "paragraph",
              text: "Por su parte, la corriente socio‑clínica —con bases en la psicología dinámica, la sociología clínica y la consultoría de procesos— estudia cómo las dimensiones inconscientes, las ansiedades institucionales y los patrones de defensa influyen sobre roles, autoridad y fronteras. Modelos como la consultoría de procesos (Schein), la teoría de la acción (Argyris y Schön) y los estudios de grupo (Bion) orientan intervenciones para hacer conscientes rutinas defensivas, mejorar la calidad de la conversación y alinear las relaciones de poder con la tarea primaria. Se trabaja con contratos de rol, clarificación de mandatos y análisis de fronteras (entre unidades, con clientes, con proveedores internos) para reducir fricciones que no se resuelven únicamente con organigramas o procedimientos.",
            },
            {
              type: "paragraph",
              text: "El hilo común entre ambas vertientes es la centralidad del trabajo real. El socio‑técnico rediseña la tarea; el socio‑clínico hace visible lo que la tarea despierta en las personas y en los sistemas (ansiedad por el error, necesidad de control, estilos de dirección). Cuando se integran, la organización gana doblemente: estructuras y procesos más razonables y una conversación más madura sobre autoridad, conflictos y cooperación. Este matrimonio metodológico evita el ‘cosmético’ organizacional: cambios sólo de forma o talleres emocionales sin anclaje en el trabajo. En DO, transformar implica intervenir simultáneamente en procesos, relaciones y significados.",
            },
            {
              type: "paragraph",
              text: "Intervenciones típicas derivadas de la raíz socio‑técnica incluyen: análisis del flujo de valor y creación de células, tableros visuales y andons, rediseño de puestos con variedad y retroalimentación, y sistemas de mantenimiento autónomo. De la raíz socio‑clínica: reuniones de contrato de rol, coaching de equipos directivos, consultoría de procesos en comités, análisis de incidentes críticos, y laboratorios de autoridad y límites. En ambos casos, el facilitador cuida tres cosas: que la tarea sea clara, que la autoridad esté definida y que las fronteras estén bien gestionadas. Sin estas condiciones, las buenas intenciones se diluyen en ambigüedad y desgaste.",
            },
            {
              type: "paragraph",
              text: "Los riesgos de cada vertiente son complementarios. El socio‑técnico puede tecnocratizar el cambio si ignora la dimensión emocional; el socio‑clínico puede psicologizar en exceso si pierde de vista la tarea y el cliente. El antídoto es el contrato claro: propósito, resultados esperados, artefactos de trabajo (mapas, estándares, acuerdos) y métricas de seguimiento. El aprendizaje se consolida con ‘doble bucle’: no sólo corregir errores en el proceso, sino cuestionar supuestos que los generan (metas incompatibles, incentivos que castigan la colaboración, estilos de liderazgo poco coherentes con el diseño).",
            },
            {
              type: "paragraph",
              text: "Como método, conviene iniciar con una ‘lectura sistémica’ del problema: ¿qué de la tecnología, estructura, reglas, capacidades y cultura lo produce o sostiene?; ¿qué roles y fronteras están en conflicto?; ¿qué ansiedades dispara la tarea?; ¿qué experimentos seguros podemos hacer para aprender rápido? Esta disciplina convierte los orígenes socio‑técnicos y socio‑clínicos en una caja de herramientas pragmática para rediseñar el trabajo y fortalecer el tejido relacional que lo hace posible.",
            },
            {
              type: "accordion",
              header: "Principios socio‑técnicos esenciales",
              open: false,
              text: "Optimización conjunta; agrupación natural de tareas; criterios múltiples de desempeño; control en la fuente; autonomía responsable; información en el punto de valor; retroalimentación rápida.",
            },
            {
              type: "accordion",
              header: "Claves socio‑clínicas en intervención",
              open: false,
              text: "Contrato de rol; análisis de fronteras; consultoría de procesos; conversación de calidad; manejo de ansiedades institucionales; aprendizaje de doble bucle.",
            },
          ],
        },

        {
          id: "1.5",
          numbering: "1.5",
          title: "El desarrollo organizacional en el extranjero",
          content: [
            {
              type: "paragraph",
              text: "El DO se consolidó internacionalmente como respuesta al reto de cambiar organizaciones a la velocidad del entorno. En Estados Unidos, NTL y universidades difundieron grupos “T”, encuesta‑feedback e investigación‑acción; el mundo corporativo incorporó programas de calidad de vida en el trabajo, equipos autodirigidos y consultoría interna de procesos. Escandinavia desarrolló el ‘diseño participativo’ y la negociación social para rediseñar el trabajo en diálogo con sindicatos; Reino Unido impulsó proyectos socio‑técnicos en manufactura y servicios; Japón integró prácticas de mejora continua (círculos de calidad, kaizen, kanban) con una fuerte cultura de aprendizaje en el puesto. Estas tradiciones, con matices, comparten una tesis: las soluciones sostenibles nacen de la combinación entre evidencia, participación y disciplina operativa.",
            },
            {
              type: "paragraph",
              text: "Desde los noventa, el DO dialogó con grandes corrientes de gestión: reingeniería, calidad total, lean, seis sigma, organizaciones que aprenden, balanced scorecard y, más recientemente, agilidad, diseño centrado en el usuario y transformación digital. Lejos de diluirse, el DO aportó una capa humana y sistémica a estos enfoques: evitó que se transformaran en ‘proyectos de escritorio’ sin apropiación. La práctica internacional muestra que los procesos de cambio más duraderos combinan arquitectura (gobernanza y portafolio), intervención por oleadas (pilotos, escalamiento), métricas de negocio y cuidado de la experiencia de los colaboradores. En ese ecosistema, el profesional de DO funge como integrador: enlaza estrategia, procesos y cultura en una narrativa ejecutable.",
            },
            {
              type: "paragraph",
              text: "En Europa continental se fortalecieron enfoques de democracia industrial y co‑gestión, con mesas de trabajo tripartitas que incorporaron a sindicatos y reguladores. Los casos escandinavos (proyectos noruegos, plantas suecas) documentaron beneficios de equipos autónomos y rediseño de turnos para conciliar productividad con salud. En Asia, además del legado japonés, Corea y Singapur impulsaron programas de productividad con alto énfasis en formación y estandarización inteligente. En América Latina, universidades y empresas adoptaron tempranamente el DO en empresas públicas y privadas, con énfasis en clima, liderazgo y rediseño de procesos. La madurez de cada país depende de su marco institucional (relaciones laborales, competencia, educación) y de su densidad de consultoría y escuelas de gestión.",
            },
            {
              type: "paragraph",
              text: "La agenda contemporánea internacional incluye retos transversales: digitalización y automatización, trabajo híbrido, diversidad e inclusión, sostenibilidad y salud mental. En todos ellos, el DO aporta valor al alinear tecnología con roles, clarificar acuerdos de colaboración en remoto, construir métricas de experiencia del empleado (EX) y conectar objetivos ambientales, sociales y de gobernanza (ASG) con decisiones del día a día. La evidencia internacional muestra que las intervenciones que mejoran el ‘sistema de trabajo’ —y no sólo la moral— suelen producir efectos sostenidos en seguridad, calidad y costo, además de impacto reputacional.",
            },
            {
              type: "paragraph",
              text: "El aprendizaje clave del extranjero es de método, no de moda: empezar pequeño con pilotos bien medidos, ampliar con disciplina, adaptar a la cultura local y sostener con gobernanza. Importar acríticamente prácticas sin considerar regulación, relaciones laborales o capacidades reales conduce al teatro del cambio. Por ello, la práctica internacional insiste en capacidades internas: consultores internos formados, líderes con habilidades de facilitación, analítica de personas y mecanismos de aprendizaje transversal (comunidades de práctica, ‘chapters’ internos).",
            },
            {
              type: "paragraph",
              text: "La ética profesional es un denominador común: contratos claros, respeto a la dignidad, confidencialidad, información veraz, participación informada y evaluación honesta. En transformaciones de gran escala, las decisiones deben balancear resultados empresariales con empleo, salud y tejido social. El DO internacional ha aprendido que el costo de ignorar la dimensión humana aparece tarde o temprano en rotación, ausentismo, fallas de calidad, accidentes y daño reputacional. La función de DO contribuye a anticipar ese costo y a diseñar alternativas más inteligentes y justas.",
            },
            {
              type: "paragraph",
              text: "En síntesis, el DO en el extranjero es un campo maduro y diverso que ha demostrado su utilidad al orquestar cambios complejos con rigor humano. Para el estudiante, la lección es doble: dominar técnicas transferibles (diagnóstico, facilitación, rediseño, métricas) y aprender a leer el contexto institucional de cada país para adaptar, no copiar. Ese es el puente que conecta experiencia global con eficacia local.",
            },
            {
              type: "accordion",
              header: "Prácticas internacionales destacadas",
              open: false,
              text: "Diseño participativo (Escandinavia); equipos autónomos; círculos de calidad y kaizen (Japón); consultoría de procesos (EE. UU.); democracia industrial (Europa).",
            },
            {
              type: "accordion",
              header: "Claves de escalamiento",
              open: false,
              text: "Pilotos medibles; gobernanza y portafolio; adaptación cultural; capacidades internas; ética y evaluación honesta.",
            },
          ],
        },

        {
          id: "1.6",
          numbering: "1.6",
          title: "Evolución del desarrollo organizacional en México",
          content: [
            {
              type: "paragraph",
              text: "En México, el DO se difundió desde la segunda mitad del siglo XX en universidades, empresas públicas y privadas. Seminarios pioneros y consultores formados en el extranjero introdujeron grupos “T”, encuesta‑feedback y consultoría de procesos en industrias manufactureras y de servicios. Con el tiempo, surgieron posgrados y diplomados que consolidaron un lenguaje común y un mercado de servicios profesionales. La adopción inicial se enfocó en clima, liderazgo y comunicación; posteriormente se integraron enfoques socio‑técnicos, calidad total y rediseño de procesos. Este desarrollo permitió profesionalizar funciones de recursos humanos, crear áreas internas de DO y vincularlas con planeación estratégica y gestión de calidad.",
            },
            {
              type: "paragraph",
              text: "Durante los noventa, la apertura económica y la competencia internacional aceleraron la búsqueda de eficiencia y calidad. Muchas organizaciones mexicanas combinaron DO con TQM, ISO 9001, reingeniería y manufactura esbelta. Los aprendizajes fueron mixtos: donde el DO sirvió para anclar participación, claridad de roles y disciplina de seguimiento, las transformaciones prosperaron; donde se adoptaron recetas sin adaptación, hubo fatiga del cambio y cinismo. La experiencia mexicana subrayó la importancia de desarrollar capacidades internas (facilitación, analítica de personas, gestión de proyectos) y de construir alianzas con operaciones, finanzas y calidad para evitar islas funcionales.",
            },
            {
              type: "paragraph",
              text: "En el sector público, programas de modernización administrativa, mejora regulatoria y gobierno digital incorporaron prácticas de DO para simplificar trámites, rediseñar procesos y profesionalizar servicios. La lógica de ‘servicio al ciudadano’ impulsó métricas de experiencia, cartas de servicios y tableros de desempeño. En gobiernos subnacionales, la variabilidad institucional exigió adaptar métodos a realidades presupuestales y capacidades dispares, reforzando la idea de que el DO es, ante todo, ingeniería social aplicada con ética y evidencia.",
            },
            {
              type: "paragraph",
              text: "En la última década, tres vectores reconfiguraron la agenda: transformación digital, trabajo híbrido y bienestar psicosocial. La NOM‑035 visibilizó riesgos psicosociales y obligó a organizaciones a diagnosticar y actuar; la digitalización demandó rediseño de procesos, competencias y acuerdos de colaboración remota; la diversidad e inclusión asc endieron como prioridades estratégicas. El DO mexicano respondió integrando analítica de personas, diseño de experiencias del colaborador, tableros de OKR y metodologías ágiles, sin perder el eje humanista. En empresas medianas y micro, el reto ha sido adaptar instrumentos a escala: diagnósticos ligeros, pilotos cortos y métricas simples que no sobrecarguen la operación.",
            },
            {
              type: "paragraph",
              text: "Rasgos culturales locales —orientación a la jerarquía, centralización de decisiones, informalidad en acuerdos— plantean desafíos y oportunidades. El DO aporta prácticas para institucionalizar la conversación de desempeño, clarificar compromisos y construir ‘contratos psicológicos’ realistas. Asimismo, ayuda a transitar de liderazgos paternalistas a liderazgos de servicio y aprendizaje. Donde hay sindicatos, el enfoque participativo y los criterios de seguridad y salud encuentran terreno fértil para construir confianza y productividad, siempre que se opere con transparencia y respeto a los derechos colectivos.",
            },
            {
              type: "paragraph",
              text: "Los riesgos mexicanos más comunes incluyen: programas de moda desligados de estrategia, diagnósticos sin seguimiento, intervenciones superficiales centradas sólo en clima, y falta de gobernanza del portafolio de iniciativas. Para mitigarlos, las organizaciones exitosas han creado comités de transformación con patrocinio ejecutivo, han profesionalizado la consultoría interna, han vinculado métricas de personas con KPIs del negocio y han asegurado mecanismos de aprendizaje transversal. El mensaje es claro: el DO no es un evento, es un sistema de capacidades que se cultiva y se evalúa como cualquier otra función crítica.",
            },
            {
              type: "paragraph",
              text: "En resumen, la evolución del DO en México muestra un campo que ha madurado y que hoy puede sostener transformaciones complejas con rigor humano. El camino por delante pasa por fortalecer capacidades analíticas y de facilitación, articular DO con estrategia y tecnología, y cuidar la ética profesional en contextos de alta presión. La promesa es convertir a las organizaciones mexicanas en comunidades de aprendizaje capaces de competir con productividad y dignidad, honrando la diversidad del país y sus aspiraciones de desarrollo.",
            },
            {
              type: "accordion",
              header: "Hitos y palancas en México",
              open: false,
              text: "Difusión académica y consultoría; integración con calidad, ISO y lean; modernización del sector público; NOM‑035 y bienestar psicosocial; transformación digital y trabajo híbrido.",
            },
            {
              type: "accordion",
              header: "Claves para escalar DO en contextos locales",
              open: false,
              text: "Capacidades internas; gobernanza de portafolio; métricas conectadas al negocio; adaptación cultural; ética, participación y transparencia.",
            },
          ],
        },
        // Inserta este bloque en el array de subtemas de la Unidad 1

        {
          id: "1.4",
          numbering: "1.4",
          title: "Orígenes socio-técnicos y socio-clínicos",
          content: [
            {
              type: "paragraph",
              text: "El origen socio‑técnico del desarrollo organizacional (DO) remite a las investigaciones del Tavistock Institute (Trist, Emery), que observaron que el desempeño sostenible no depende únicamente de la tecnología o de la estructura, sino de la ‘optimización conjunta’ entre sistema técnico (procesos, equipos, métodos) y sistema social (roles, motivaciones, aprendizaje). A partir de minas, astilleros y manufactura, documentaron que los arreglos de trabajo que respetan la autonomía del grupo, la variedad de tareas y la retroalimentación inmediata producen mayor calidad, seguridad y compromiso. De esa evidencia emergieron diseños de células semi‑autónomas, enriquecimiento de puestos, rotación planificada y mecanismos de mejora continua local. El objetivo no era ‘humanizar’ la tecnología como adorno, sino rediseñar técnicamente el trabajo para que la cooperación sea posible sin heroísmos. Esta raíz dotó al DO de una brújula: cambiar estructuras y procesos para que las personas puedan, efectivamente, trabajar mejor juntas.",
            },
            {
              type: "paragraph",
              text: "El enfoque socio‑técnico introduce principios operativos aún vigentes: 1) congruencia entre demanda del entorno y diseño interno; 2) agrupación natural de tareas para evitar fragmentación excesiva; 3) criterios múltiples de desempeño (calidad, costo, tiempo, seguridad, aprendizaje); 4) control en la fuente (quien hace, controla); 5) autonomía responsable con límites claros; 6) soporte de información donde se ejecuta el trabajo; 7) retroalimentación rápida para ajustar. Estos principios desplazaron el paradigma taylorista de división extrema del trabajo hacia configuraciones que equilibran eficiencia y significado. En la práctica, se traducen en células de manufactura, células clínicas, células de servicio y en la figura del equipo como unidad de diseño, con indicadores visibles, rituales de aprendizaje y capacidad para resolver problemas en el punto de valor.",
            },
            {
              type: "paragraph",
              text: "Por su parte, la corriente socio‑clínica —con bases en la psicología dinámica, la sociología clínica y la consultoría de procesos— estudia cómo las dimensiones inconscientes, las ansiedades institucionales y los patrones de defensa influyen sobre roles, autoridad y fronteras. Modelos como la consultoría de procesos (Schein), la teoría de la acción (Argyris y Schön) y los estudios de grupo (Bion) orientan intervenciones para hacer conscientes rutinas defensivas, mejorar la calidad de la conversación y alinear las relaciones de poder con la tarea primaria. Se trabaja con contratos de rol, clarificación de mandatos y análisis de fronteras (entre unidades, con clientes, con proveedores internos) para reducir fricciones que no se resuelven únicamente con organigramas o procedimientos.",
            },
            {
              type: "paragraph",
              text: "El hilo común entre ambas vertientes es la centralidad del trabajo real. El socio‑técnico rediseña la tarea; el socio‑clínico hace visible lo que la tarea despierta en las personas y en los sistemas (ansiedad por el error, necesidad de control, estilos de dirección). Cuando se integran, la organización gana doblemente: estructuras y procesos más razonables y una conversación más madura sobre autoridad, conflictos y cooperación. Este matrimonio metodológico evita el ‘cosmético’ organizacional: cambios sólo de forma o talleres emocionales sin anclaje en el trabajo. En DO, transformar implica intervenir simultáneamente en procesos, relaciones y significados.",
            },
            {
              type: "paragraph",
              text: "Intervenciones típicas derivadas de la raíz socio‑técnica incluyen: análisis del flujo de valor y creación de células, tableros visuales y andons, rediseño de puestos con variedad y retroalimentación, y sistemas de mantenimiento autónomo. De la raíz socio‑clínica: reuniones de contrato de rol, coaching de equipos directivos, consultoría de procesos en comités, análisis de incidentes críticos, y laboratorios de autoridad y límites. En ambos casos, el facilitador cuida tres cosas: que la tarea sea clara, que la autoridad esté definida y que las fronteras estén bien gestionadas. Sin estas condiciones, las buenas intenciones se diluyen en ambigüedad y desgaste.",
            },
            {
              type: "paragraph",
              text: "Los riesgos de cada vertiente son complementarios. El socio‑técnico puede tecnocratizar el cambio si ignora la dimensión emocional; el socio‑clínico puede psicologizar en exceso si pierde de vista la tarea y el cliente. El antídoto es el contrato claro: propósito, resultados esperados, artefactos de trabajo (mapas, estándares, acuerdos) y métricas de seguimiento. El aprendizaje se consolida con ‘doble bucle’: no sólo corregir errores en el proceso, sino cuestionar supuestos que los generan (metas incompatibles, incentivos que castigan la colaboración, estilos de liderazgo poco coherentes con el diseño).",
            },
            {
              type: "paragraph",
              text: "Como método, conviene iniciar con una ‘lectura sistémica’ del problema: ¿qué de la tecnología, estructura, reglas, capacidades y cultura lo produce o sostiene?; ¿qué roles y fronteras están en conflicto?; ¿qué ansiedades dispara la tarea?; ¿qué experimentos seguros podemos hacer para aprender rápido? Esta disciplina convierte los orígenes socio‑técnicos y socio‑clínicos en una caja de herramientas pragmática para rediseñar el trabajo y fortalecer el tejido relacional que lo hace posible.",
            },
            {
              type: "accordion",
              header: "Principios socio‑técnicos esenciales",
              open: false,
              text: "Optimización conjunta; agrupación natural de tareas; criterios múltiples de desempeño; control en la fuente; autonomía responsable; información en el punto de valor; retroalimentación rápida.",
            },
            {
              type: "accordion",
              header: "Claves socio‑clínicas en intervención",
              open: false,
              text: "Contrato de rol; análisis de fronteras; consultoría de procesos; conversación de calidad; manejo de ansiedades institucionales; aprendizaje de doble bucle.",
            },
          ],
        },

        {
          id: "1.5",
          numbering: "1.5",
          title: "El desarrollo organizacional en el extranjero",
          content: [
            {
              type: "paragraph",
              text: "El DO se consolidó internacionalmente como respuesta al reto de cambiar organizaciones a la velocidad del entorno. En Estados Unidos, NTL y universidades difundieron grupos “T”, encuesta‑feedback e investigación‑acción; el mundo corporativo incorporó programas de calidad de vida en el trabajo, equipos autodirigidos y consultoría interna de procesos. Escandinavia desarrolló el ‘diseño participativo’ y la negociación social para rediseñar el trabajo en diálogo con sindicatos; Reino Unido impulsó proyectos socio‑técnicos en manufactura y servicios; Japón integró prácticas de mejora continua (círculos de calidad, kaizen, kanban) con una fuerte cultura de aprendizaje en el puesto. Estas tradiciones, con matices, comparten una tesis: las soluciones sostenibles nacen de la combinación entre evidencia, participación y disciplina operativa.",
            },
            {
              type: "paragraph",
              text: "Desde los noventa, el DO dialogó con grandes corrientes de gestión: reingeniería, calidad total, lean, seis sigma, organizaciones que aprenden, balanced scorecard y, más recientemente, agilidad, diseño centrado en el usuario y transformación digital. Lejos de diluirse, el DO aportó una capa humana y sistémica a estos enfoques: evitó que se transformaran en ‘proyectos de escritorio’ sin apropiación. La práctica internacional muestra que los procesos de cambio más duraderos combinan arquitectura (gobernanza y portafolio), intervención por oleadas (pilotos, escalamiento), métricas de negocio y cuidado de la experiencia de los colaboradores. En ese ecosistema, el profesional de DO funge como integrador: enlaza estrategia, procesos y cultura en una narrativa ejecutable.",
            },
            {
              type: "paragraph",
              text: "En Europa continental se fortalecieron enfoques de democracia industrial y co‑gestión, con mesas de trabajo tripartitas que incorporaron a sindicatos y reguladores. Los casos escandinavos (proyectos noruegos, plantas suecas) documentaron beneficios de equipos autónomos y rediseño de turnos para conciliar productividad con salud. En Asia, además del legado japonés, Corea y Singapur impulsaron programas de productividad con alto énfasis en formación y estandarización inteligente. En América Latina, universidades y empresas adoptaron tempranamente el DO en empresas públicas y privadas, con énfasis en clima, liderazgo y rediseño de procesos. La madurez de cada país depende de su marco institucional (relaciones laborales, competencia, educación) y de su densidad de consultoría y escuelas de gestión.",
            },
            {
              type: "paragraph",
              text: "La agenda contemporánea internacional incluye retos transversales: digitalización y automatización, trabajo híbrido, diversidad e inclusión, sostenibilidad y salud mental. En todos ellos, el DO aporta valor al alinear tecnología con roles, clarificar acuerdos de colaboración en remoto, construir métricas de experiencia del empleado (EX) y conectar objetivos ambientales, sociales y de gobernanza (ASG) con decisiones del día a día. La evidencia internacional muestra que las intervenciones que mejoran el ‘sistema de trabajo’ —y no sólo la moral— suelen producir efectos sostenidos en seguridad, calidad y costo, además de impacto reputacional.",
            },
            {
              type: "paragraph",
              text: "El aprendizaje clave del extranjero es de método, no de moda: empezar pequeño con pilotos bien medidos, ampliar con disciplina, adaptar a la cultura local y sostener con gobernanza. Importar acríticamente prácticas sin considerar regulación, relaciones laborales o capacidades reales conduce al teatro del cambio. Por ello, la práctica internacional insiste en capacidades internas: consultores internos formados, líderes con habilidades de facilitación, analítica de personas y mecanismos de aprendizaje transversal (comunidades de práctica, ‘chapters’ internos).",
            },
            {
              type: "paragraph",
              text: "La ética profesional es un denominador común: contratos claros, respeto a la dignidad, confidencialidad, información veraz, participación informada y evaluación honesta. En transformaciones de gran escala, las decisiones deben balancear resultados empresariales con empleo, salud y tejido social. El DO internacional ha aprendido que el costo de ignorar la dimensión humana aparece tarde o temprano en rotación, ausentismo, fallas de calidad, accidentes y daño reputacional. La función de DO contribuye a anticipar ese costo y a diseñar alternativas más inteligentes y justas.",
            },
            {
              type: "paragraph",
              text: "En síntesis, el DO en el extranjero es un campo maduro y diverso que ha demostrado su utilidad al orquestar cambios complejos con rigor humano. Para el estudiante, la lección es doble: dominar técnicas transferibles (diagnóstico, facilitación, rediseño, métricas) y aprender a leer el contexto institucional de cada país para adaptar, no copiar. Ese es el puente que conecta experiencia global con eficacia local.",
            },
            {
              type: "accordion",
              header: "Prácticas internacionales destacadas",
              open: false,
              text: "Diseño participativo (Escandinavia); equipos autónomos; círculos de calidad y kaizen (Japón); consultoría de procesos (EE. UU.); democracia industrial (Europa).",
            },
            {
              type: "accordion",
              header: "Claves de escalamiento",
              open: false,
              text: "Pilotos medibles; gobernanza y portafolio; adaptación cultural; capacidades internas; ética y evaluación honesta.",
            },
          ],
        },

        {
          id: "1.6",
          numbering: "1.6",
          title: "Evolución del desarrollo organizacional en México",
          content: [
            {
              type: "paragraph",
              text: "En México, el DO se difundió desde la segunda mitad del siglo XX en universidades, empresas públicas y privadas. Seminarios pioneros y consultores formados en el extranjero introdujeron grupos “T”, encuesta‑feedback y consultoría de procesos en industrias manufactureras y de servicios. Con el tiempo, surgieron posgrados y diplomados que consolidaron un lenguaje común y un mercado de servicios profesionales. La adopción inicial se enfocó en clima, liderazgo y comunicación; posteriormente se integraron enfoques socio‑técnicos, calidad total y rediseño de procesos. Este desarrollo permitió profesionalizar funciones de recursos humanos, crear áreas internas de DO y vincularlas con planeación estratégica y gestión de calidad.",
            },
            {
              type: "paragraph",
              text: "Durante los noventa, la apertura económica y la competencia internacional aceleraron la búsqueda de eficiencia y calidad. Muchas organizaciones mexicanas combinaron DO con TQM, ISO 9001, reingeniería y manufactura esbelta. Los aprendizajes fueron mixtos: donde el DO sirvió para anclar participación, claridad de roles y disciplina de seguimiento, las transformaciones prosperaron; donde se adoptaron recetas sin adaptación, hubo fatiga del cambio y cinismo. La experiencia mexicana subrayó la importancia de desarrollar capacidades internas (facilitación, analítica de personas, gestión de proyectos) y de construir alianzas con operaciones, finanzas y calidad para evitar islas funcionales.",
            },
            {
              type: "paragraph",
              text: "En el sector público, programas de modernización administrativa, mejora regulatoria y gobierno digital incorporaron prácticas de DO para simplificar trámites, rediseñar procesos y profesionalizar servicios. La lógica de ‘servicio al ciudadano’ impulsó métricas de experiencia, cartas de servicios y tableros de desempeño. En gobiernos subnacionales, la variabilidad institucional exigió adaptar métodos a realidades presupuestales y capacidades dispares, reforzando la idea de que el DO es, ante todo, ingeniería social aplicada con ética y evidencia.",
            },
            {
              type: "paragraph",
              text: "En la última década, tres vectores reconfiguraron la agenda: transformación digital, trabajo híbrido y bienestar psicosocial. La NOM‑035 visibilizó riesgos psicosociales y obligó a organizaciones a diagnosticar y actuar; la digitalización demandó rediseño de procesos, competencias y acuerdos de colaboración remota; la diversidad e inclusión asc endieron como prioridades estratégicas. El DO mexicano respondió integrando analítica de personas, diseño de experiencias del colaborador, tableros de OKR y metodologías ágiles, sin perder el eje humanista. En empresas medianas y micro, el reto ha sido adaptar instrumentos a escala: diagnósticos ligeros, pilotos cortos y métricas simples que no sobrecarguen la operación.",
            },
            {
              type: "paragraph",
              text: "Rasgos culturales locales —orientación a la jerarquía, centralización de decisiones, informalidad en acuerdos— plantean desafíos y oportunidades. El DO aporta prácticas para institucionalizar la conversación de desempeño, clarificar compromisos y construir ‘contratos psicológicos’ realistas. Asimismo, ayuda a transitar de liderazgos paternalistas a liderazgos de servicio y aprendizaje. Donde hay sindicatos, el enfoque participativo y los criterios de seguridad y salud encuentran terreno fértil para construir confianza y productividad, siempre que se opere con transparencia y respeto a los derechos colectivos.",
            },
            {
              type: "paragraph",
              text: "Los riesgos mexicanos más comunes incluyen: programas de moda desligados de estrategia, diagnósticos sin seguimiento, intervenciones superficiales centradas sólo en clima, y falta de gobernanza del portafolio de iniciativas. Para mitigarlos, las organizaciones exitosas han creado comités de transformación con patrocinio ejecutivo, han profesionalizado la consultoría interna, han vinculado métricas de personas con KPIs del negocio y han asegurado mecanismos de aprendizaje transversal. El mensaje es claro: el DO no es un evento, es un sistema de capacidades que se cultiva y se evalúa como cualquier otra función crítica.",
            },
            {
              type: "paragraph",
              text: "En resumen, la evolución del DO en México muestra un campo que ha madurado y que hoy puede sostener transformaciones complejas con rigor humano. El camino por delante pasa por fortalecer capacidades analíticas y de facilitación, articular DO con estrategia y tecnología, y cuidar la ética profesional en contextos de alta presión. La promesa es convertir a las organizaciones mexicanas en comunidades de aprendizaje capaces de competir con productividad y dignidad, honrando la diversidad del país y sus aspiraciones de desarrollo.",
            },
            {
              type: "accordion",
              header: "Hitos y palancas en México",
              open: false,
              text: "Difusión académica y consultoría; integración con calidad, ISO y lean; modernización del sector público; NOM‑035 y bienestar psicosocial; transformación digital y trabajo híbrido.",
            },
            {
              type: "accordion",
              header: "Claves para escalar DO en contextos locales",
              open: false,
              text: "Capacidades internas; gobernanza de portafolio; métricas conectadas al negocio; adaptación cultural; ética, participación y transparencia.",
            },
          ],
        },

        // ——— 1.7 Experiencias empresariales en DO ————————————————————
        {
          id: "1.7",
          numbering: "1.7",
          title: "Experiencias empresariales en desarrollo organizacional",
          content: [
            {
              type: "paragraph",
              text: "Las experiencias empresariales de desarrollo organizacional (DO) muestran que el cambio planificado produce resultados cuando combina evidencia, participación y disciplina operativa. En manufactura, servicios y sector público, los casos exitosos comparten un patrón: diagnóstico serio, patrocinio ejecutivo visible, portafolio de intervenciones priorizado y medición antes–durante–después. Un ejemplo típico es la implantación de células de trabajo con tableros visuales y reuniones diarias de 15 minutos; al cabo de 6–12 meses, se observan reducciones de retrabajo y accidentes, y mejoras en entrega a tiempo. En servicios, la formalización de acuerdos de interfaz entre áreas (SLA internos) disminuye tiempos de ciclo y conflictos. En ambos escenarios, el DO funge como integrador que alinea estrategia, procesos y cultura para que las mejoras trasciendan personas y sobrevivan a rotaciones o cambios de liderazgo.",
            },
            {
              type: "paragraph",
              text: "Otra experiencia recurrente es la transformación de mandos medios. La evidencia muestra que la calidad de la relación jefe–equipo explica buena parte de la rotación y del clima. Programas de liderazgo centrados en la tarea (definir expectativas claras, dar retroalimentación específica, remover obstáculos) y en la relación (escucha, reconocimiento, justicia procedimental) elevan desempeño con costos moderados. El DO traduce estos principios en rituales sencillos: reuniones 1:1 quincenales, contratos de rol, revisiones de tablero y protocolos para decisiones interáreas. El éxito radica en anclar el aprendizaje a la rutina del trabajo —no en cursos aislados— y en acompañar con coaching y métricas que hagan visible el progreso.",
            },
            {
              type: "paragraph",
              text: "En cadenas de suministro, proyectos de DO han rediseñado procesos de planificación, compras y logística para reducir variabilidad y cuellos de botella. Talleres de investigación–acción con equipos interfuncionales suelen mapear el flujo de valor, identificar desperdicios (esperas, retrabajos, inventarios innecesarios) y acordar contramedidas de corto plazo (estándares de entrada de pedidos, ventanas de recepción, reglas de reposición) y de mediano plazo (integración de sistemas, rediseño de roles). La combinación de métricas operativas y de clima evita compensaciones indeseadas: no sirve bajar costos si sube el ausentismo o la rotación por sobrecarga. El DO aporta esta mirada equilibrada y el método para sostenerla en el tiempo.",
            },
            {
              type: "paragraph",
              text: "La digitalización es otra fuente de casos. Muchas organizaciones aprendieron que ‘comprar tecnología’ sin rediseñar procesos y sin gestionar el cambio humano genera frustración y subutilización. Intervenciones de DO exitosas comienzan con diseño centrado en el usuario, clarifican roles y decisiones, ajustan indicadores y rediseñan la capacitación con enfoque de práctica guiada. En despliegues de ERP o CRM, la gestión de expectativas, la limpieza de datos maestros y el acompañamiento a superusuarios son palancas mayores. La adopción se mide con indicadores de uso efectivo y de calidad de datos, no sólo con ‘go live’. El DO, en este contexto, protege la inversión tecnológica asegurando que la solución se convierta en hábito productivo.",
            },
            {
              type: "paragraph",
              text: "En integraciones y reestructuras, el DO reduce riesgos al gestionar identidad, pertenencia y claridad de mandatos. Talleres de alineación estratégica, clarificación de la nueva arquitectura de roles y definición de reglas de colaboración permiten transitar sin pérdidas mayores de talento ni de clientes. La transparencia sobre criterios y tiempos, así como la construcción de un ‘relato de cambio’ honesto, previenen rumores y cinismo. El seguimiento puntual de cargas de trabajo y salud psicosocial protege a equipos críticos. La lección: no hay sinergias sin coordinación, y no hay coordinación sin conversaciones difíciles bien conducidas.",
            },
            {
              type: "paragraph",
              text: "También hay aprendizajes de fracasos. Intervenciones sin patrocinio real, diagnósticos que no se devuelven, portafolios sobrecargados y métricas inexistentes erosionan credibilidad. La ‘fatiga del cambio’ surge cuando se lanzan iniciativas sin terminar otras o cuando se comunican promesas sin respaldo. Para mitigar, el DO recomienda gobernanza del portafolio (priorizar, secuenciar, retirar iniciativas), pilotos con evaluación rigurosa y mecanismos de aprendizaje transversal (comunidades de práctica que comparten aciertos y errores). La honestidad profesional —decir ‘no’ a lo que no agrega valor— es parte de la ética del campo.",
            },
            {
              type: "paragraph",
              text: "El hilo conductor de estas experiencias es la conversión de principios en práctica: medir lo que importa, diseñar con quienes hacen el trabajo, experimentar de forma segura, institucionalizar lo que funciona y retirar lo que no. Cuando esto ocurre, el DO deja de ser un programa para convertirse en una capacidad organizacional: una manera de resolver problemas complejos con rigor humano y resultados sostenibles.",
            },
            {
              type: "accordion",
              header: "Patrones de éxito",
              open: false,
              text: "Patrocinio visible; diagnóstico serio; portafolio priorizado; pilotos medibles; rituales de gestión (tablero, 1:1, acuerdos de interfaz); métricas de negocio + clima; aprendizaje transversal.",
            },
            {
              type: "accordion",
              header: "Alertas frecuentes",
              open: false,
              text: "Iniciativas sin dueño; diagnósticos sin devolución; sobrecarga de proyectos; métricas ausentes; cambio cosmético; comunicación sin hechos.",
            },
          ],
        },

        // ——— 1.8 ¿Qué es el desarrollo organizacional? ————————————————
        {
          id: "1.8",
          numbering: "1.8",
          title: "¿Qué es el desarrollo organizacional?",
          content: [
            {
              type: "paragraph",
              text: "El desarrollo organizacional (DO) es una estrategia planeada de cambio que, mediante intervenciones basadas en evidencia y participación, mejora simultáneamente el desempeño y el bienestar en el trabajo. A diferencia de programas aislados, el DO integra diagnóstico, diseño, implementación y evaluación en ciclos de aprendizaje. Combina ciencias del comportamiento, teoría de sistemas y gestión de operaciones para rediseñar procesos, equipos y cultura con un propósito explícito: aumentar la efectividad organizacional respetando la dignidad de las personas. Su campo de acción va de lo estratégico (alineación y gobernanza) a lo operativo (flujo de valor, estándares, acuerdos de interfaz) y relacional (liderazgo, comunicación, confianza).",
            },
            {
              type: "paragraph",
              text: "En términos prácticos, DO significa trabajar con datos (encuestas, entrevistas, métricas), con conversaciones (retroalimentación, acuerdos) y con diseños (roles, procesos, tableros). El profesional de DO facilita que los equipos vean su trabajo como sistema, diferencien síntomas de causas, y conviertan hipótesis en experimentos controlados. La intervención no busca ‘hacer sentir bien’ de forma superficial, sino construir condiciones de desempeño sostenible: claridad de objetivos, autonomía responsable, coordinación efectiva y aprendizaje continuo. En organizaciones reguladas, el DO agrega disciplina documental para auditar decisiones y demostrar diligencia debida.",
            },
            {
              type: "paragraph",
              text: "El DO no es sinónimo de recursos humanos (RH), aunque colabora estrechamente. RH administra el ciclo de talento (atracción, desarrollo, compensación); DO rediseña el sistema de trabajo donde ese talento opera. Tampoco es psicoterapia aplicada a la empresa: aborda emociones en cuanto afectan la tarea y la cooperación, pero su foco son procesos observables y resultados verificables. Frente a modas gerenciales, el DO se reconoce por su método: evidencia → deliberación → decisión → implementación → evaluación. Sin este hilo, los cambios se diluyen en discursos sin tracción.",
            },
            {
              type: "paragraph",
              text: "Componentes esenciales del DO incluyen: patrocinio ejecutivo con poder para remover obstáculos; contrato claro sobre alcance y resultados; equipo núcleo de cambio con representantes de áreas clave; mapa de procesos y roles; indicadores que conectan personas y negocio; y un plan de cadencia (rituales, reuniones de seguimiento, revisiones ejecutivas). En contextos multi‑sitio, el DO equilibra coherencia corporativa con adaptación local: estándares comunes, libertad responsable para ajustarlos y compartir aprendizajes entre sedes.",
            },
            {
              type: "paragraph",
              text: "La ética es constitutiva: confidencialidad, consentimiento informado, respeto a la diversidad, veracidad en la comunicación y prudencia al usar datos. El DO cuida el ‘contrato psicológico’: expectativas realistas sobre lo que cambiará y lo que no. Prometer sin base destruye confianza; escuchar sin actuar genera cinismo. Por el contrario, cerrar consistentemente los ciclos de compromiso fortalece reputación interna y acelera futuras transformaciones. La integridad profesional exige además declarar conflictos de interés y evitar ‘dependencias’ del consultor: el objetivo es dejar capacidades instaladas.",
            },
            {
              type: "paragraph",
              text: "En ambientes de alta incertidumbre, el DO aporta portafolios adaptativos: experimentos de bajo costo, decisiones con ‘pivote’ si los datos contradicen supuestos, y escalamiento sólo cuando la evidencia respalda. Esta lógica evita megaproyectos rígidos y favorece entregas incrementales de valor. Al conectar mejoras humanas con indicadores duros (calidad, seguridad, costo, experiencia del cliente), el DO construye casos de negocio que sobreviven auditorías financieras y escrutinio público.",
            },
            {
              type: "paragraph",
              text: "En síntesis, el DO es la capacidad de una organización para verse, pensarse y rediseñarse con método y humanidad. Cuando se institucionaliza, las mejoras dejan de depender de héroes individuales y se vuelven propiedad de los equipos. Ese es su aporte distintivo: resultados sostenibles con personas que crecen mientras trabajan mejor juntas.",
            },
            {
              type: "accordion",
              header: "Definición operativa",
              open: false,
              text: "Estrategia planeada de cambio basada en evidencia y participación, orientada a desempeño + bienestar, desplegada en ciclos de diagnóstico→diseño→implementación→evaluación.",
            },
            {
              type: "accordion",
              header: "Qué NO es DO",
              open: false,
              text: "No es solo RH; no es terapia; no es moda. Es rediseño del sistema de trabajo, con datos, conversaciones y diseños que se prueban y miden.",
            },
          ],
        },

        // ——— 1.9 Orígenes del término DO ————————————————————————————
        {
          id: "1.9",
          numbering: "1.9",
          title: "Orígenes del término desarrollo organizacional",
          content: [
            {
              type: "paragraph",
              text: "El término ‘desarrollo organizacional’ emergió en la segunda mitad del siglo XX para nombrar un conjunto de prácticas que ya venían gestándose en laboratorios de sensibilización, programas de encuesta–feedback, investigación‑acción y rediseños socio‑técnicos. La etiqueta permitió articular una identidad profesional y académica para ese mosaico de métodos. En universidades y centros como NTL, y en empresas que experimentaban con nuevas formas de organizar el trabajo, la expresión ‘organizational development’ comenzó a circular para referir un enfoque integral de cambio planeado, distinto de la capacitación aislada o de la reingeniería puramente técnica. Los textos fundacionales insistieron en la idea de proceso continuo, participación y uso de datos para decidir.",
            },
            {
              type: "paragraph",
              text: "Con la popularización del término, se consolidó un vocabulario común: intervención, consultoría de procesos, contrato psicológico, grupos ‘T’, feedback, clima y cultura, entre otros. La noción de ‘desarrollo’ —y no sólo de ‘cambio’— subrayó la idea de crecimiento de capacidades organizacionales y humanas, no meras reestructuras. La etiqueta también ayudó a construir una ética: respeto a la dignidad, veracidad y responsabilidad por consecuencias. Con el tiempo, el campo dialogó con calidad total, lean, agilidad y transformación digital, ampliando su repertorio sin perder su eje humanista y sistémico.",
            },
            {
              type: "paragraph",
              text: "En la práctica latinoamericana, el término facilitó traducir tradiciones anglosajonas a contextos con marcos laborales y culturas distintas. Las universidades incorporaron el DO a planes de estudio y las empresas crearon áreas específicas o consolidaron consultorías internas. El ‘apellido’ organizacional evitó confundirlo con desarrollo personal o comunitario, y ancló la conversación en procesos de trabajo, estructuras, roles y resultados de negocio. Así, el nombre se volvió una plataforma para la conversación entre directivos, especialistas de personas y equipos operativos, alrededor de un objetivo compartido: construir organizaciones más efectivas y más humanas.",
            },
            {
              type: "paragraph",
              text: "La historia del término también es una historia de límites. Hubo momentos en que prácticas superficiales o de moda intentaron cobijarse bajo la etiqueta, generando escepticismo. El campo respondió reforzando el método —diagnóstico, evidencia, participación, evaluación— y haciendo visible el vínculo entre sus intervenciones y resultados verificables (calidad, costo, seguridad, experiencia del cliente, salud organizacional). Esta insistencia en el rigor preservó la credibilidad del DO y lo diferenció de iniciativas transitorias sin base empírica.",
            },
            {
              type: "paragraph",
              text: "Hoy, hablar de desarrollo organizacional es hablar de una disciplina aplicada que integra conocimientos de psicología, sociología, administración y operaciones para rediseñar sistemas de trabajo. Su utilidad se muestra en contextos de cambio acelerado y complejidad coordinativa, donde no bastan manuales: se requieren capacidades para ver el sistema, conversar con honestidad y experimentar soluciones. La etiqueta perdura porque nombra esta competencia colectiva para mejorar de manera continua y con sentido ético.",
            },
            {
              type: "paragraph",
              text: "Mirar los orígenes del término sirve para no perder el norte: DO no es un departamento ni un curso; es una forma de abordar problemas organizacionales que exige liderazgo responsable y ciudadanía organizacional. La pregunta rectora —‘¿cómo hacemos que el trabajo funcione mejor para todos?’— resume el espíritu del nombre y de la práctica. Cada intervención que responda con hechos a esa pregunta honra, en la práctica, el significado del término.",
            },
            {
              type: "paragraph",
              text: "En síntesis, el término ‘desarrollo organizacional’ surgió para dar identidad a un conjunto de prácticas de cambio planificado y participativo, ganó tracción al demostrar resultados y se mantiene vigente porque ofrece un método sobrio y humano para enfrentar la complejidad del trabajo contemporáneo.",
            },
            {
              type: "accordion",
              header: "Por qué ‘desarrollo’ y no solo ‘cambio’",
              open: false,
              text: "Apunta a crecimiento de capacidades, aprendizaje y sostenibilidad; no solo a ajustes puntuales o reestructuras coyunturales.",
            },
            {
              type: "accordion",
              header: "Señas de identidad",
              open: false,
              text: "Método (datos→diálogo→diseño→evaluación), participación, ética, foco en el sistema de trabajo y en resultados verificables.",
            },
          ],
        },

        // ——— 1.10 Términos básicos en el desarrollo organizacional ——————————
        {
          id: "1.10",
          numbering: "1.10",
          title: "Términos básicos en el desarrollo organizacional",
          content: [
            {
              type: "paragraph",
              text: "En desarrollo organizacional (DO), los términos operan como herramientas conceptuales que ordenan la acción. ‘Intervenciones’ designa los medios concretos para producir cambio planificado —desde reuniones de confrontación y consultoría de procesos hasta administración del estrés— y se eligen por su pertinencia frente a un diagnóstico específico. ‘Consultor’ nombra al profesional que, junto con la dirección, coordina y promueve el proceso de DO; funge como agente de cambio o facilitador, cuida el contrato psicológico, garantiza rigor metodológico y ética (confidencialidad, consentimiento, veracidad), y transfiere capacidades al sistema‑cliente. ‘Sistema’ refiere a un conjunto de elementos interrelacionados que actúan ordenadamente hacia un fin; por eso, el DO lee la organización como sistema abierto en constante intercambio con su entorno. ‘Sistema‑cliente’ es la organización —o unidad— donde se despliega el proceso de DO: su participación activa es condición de éxito. Estas definiciones no son glosario ornamental: son criterios de diseño que alinean lenguaje, expectativas y decisiones con la tarea primaria del negocio.",
            },
            {
              type: "paragraph",
              text: "‘Catarsis’ describe la descarga emocional que puede acompañar cambios profundos: afloran tensiones, miedos, frustraciones y esperanzas. En DO, la catarsis es un medio, no un fin: se gestiona responsablemente para liberar energía atrapada y convertirla en acuerdos y aprendizajes; nunca se induce para ‘espectáculo’ ni se deja sin contención. ‘Conflicto proactivo’ es la situación deliberadamente provocada por el consultor —con límites— para hacer visible una incongruencia (metas contradictorias, reglas implícitas, inequidades) y reencuadrarla como problema compartido. Lejos de estimular confrontación destructiva, el conflicto proactivo encuadra preguntas difíciles en espacios seguros, con método y propósito. Estas nociones recuerdan que el DO opera en la intersección entre tarea y emoción: se transforma lo que la gente hace y también cómo lo vive, para que el desempeño sea sostenible.",
            },
            {
              type: "paragraph",
              text: "‘Cambio’ es palabra clave en DO: implica redefinir creencias, actitudes, valores, estrategias y prácticas para adaptar el sistema a su entorno. Cambiar no es agitar; es aprender. Por ello, el cambio se articula en ciclos: diagnóstico (qué duele y por qué), diseño (qué haremos distinto y con qué recursos), implementación (quién, cómo y cuándo) y evaluación (qué funcionó, qué no y por qué). Las intervenciones —feedback 360, coaching, acuerdos de interfaz, rediseño de procesos, células semi‑autónomas, tableros visuales— son vehículos del cambio y deben demostrarse idóneas, necesarias y proporcionales al problema. El éxito se mide en indicadores duros (calidad, tiempo, costo, seguridad) y de salud organizacional (clima, rotación, ausentismo), con trazabilidad entre acciones y resultados para evitar ‘teatro de mejora’.",
            },
            {
              type: "paragraph",
              text: "El concepto de ‘sistema’ ancla la mirada: organizaciones como conjuntos de elementos (personas, procesos, tecnología, reglas, cultura) interdependientes que intercambian recursos e información con otros sistemas. Se distinguen entradas (recursos, demanda), procesos (transformaciones), salidas (bienes/servicios) y retroalimentación (información para ajustar). Los sistemas pueden ser cerrados —laboratorio, reloj—, pero las organizaciones son esencialmente abiertos: interactúan con clientes, proveedores, reguladores y comunidades. Esta condición impone disciplina de frontera: roles y acuerdos claros entre funciones (producción–ventas–finanzas), entre niveles (dirección–operación) y con el entorno (clientes y autoridades). Donde la frontera es difusa, emergen errores, duplicidades y conflictos que ninguna capacitación corrige por sí sola.",
            },
            {
              type: "paragraph",
              text: "‘Consultor’ y ‘sistema‑cliente’ definen la relación de trabajo. El consultor no manda: facilita procesos, provee método y espejea patrones invisibles al interior. La dirección patrocina, decide y asume consecuencias; el sistema‑cliente co‑interpreta datos y co‑diseña soluciones. El contrato explícito (alcance, entregables, límites, indicadores) evita expectativas mágicas. De la calidad de esa relación depende la profundidad del cambio: donde hay confianza y verdad, se puede trabajar sobre causas; donde se oculta información o se espera ‘recetas’, el esfuerzo se diluye. La coherencia se prueba en tres verbos: medir (evidencia), conversar (sentido) y decidir (diseño).",
            },
            {
              type: "paragraph",
              text: "‘Teoría del caos’, retomada por el DO, recuerda que el aparente desorden encierra patrones en niveles superiores de organización. Frente a contextos volátiles, el enfoque no busca control absoluto, sino crear estructuras suficientemente flexibles para absorber variabilidad sin colapsar: reglas simples, roles claros, cadencias de revisión y métricas visibles. La estabilidad, así entendida, es dinámica: el sistema se mantiene cerca de sus metas mediante microajustes continuos. Esta lectura previene dos extremos: burocratizar hasta la parálisis o improvisar hasta la entropía. El DO diseña marcos de coordinación que permiten experimentar sin perder control ni sentido.",
            },
            {
              type: "paragraph",
              text: "El conjunto de términos se vuelve operativo a través de checklists y artefactos: mapa de procesos SIPOC, matriz RACI de responsabilidades, tableros de indicadores, actas de acuerdos de interfaz, agendas de retroalimentación, contratos de rol, diarios de aprendizaje y protocolos de escalamiento. Su uso disciplinado baja el ruido, permite seguimiento y reduce la dependencia de ‘héroes’. Así, las palabras del DO dejan de ser jerga para convertirse en instrumentos que ordenan la atención y la energía colectiva hacia resultados verificables y una experiencia de trabajo más digna y efectiva.",
            },
            {
              type: "accordion",
              header: "Glosario operativo (según material)",
              open: false,
              text: "Intervenciones: medios de cambio (confrontación, consultoría de procesos, manejo del estrés). Consultor/agente de cambio: coordina el programa con la dirección. Sistema: elementos interrelacionados; sistema‑cliente: organización donde ocurre el DO. Catarsis: descarga emocional en el cambio. Conflicto proactivo: tensión deliberada para revelar incongruencias. Cambio: redefinición de creencias, valores y prácticas. Teoría del caos: orden en el aparente desorden.",
            },
            {
              type: "accordion",
              header: "Errores frecuentes al usar estos términos",
              open: false,
              text: "Confundir intervención con ‘curso’; delegar responsabilidad al consultor; tratar catarsis como fin; provocar conflicto sin contención; olvidar el carácter abierto del sistema; pretender control total en contextos complejos; medir sin retroalimentar ni decidir.",
            },
          ],
        },

        // ——— 1.11 Características del desarrollo organizacional ————————————
        {
          id: "1.11",
          numbering: "1.11",
          title: "Características del desarrollo organizacional",
          content: [
            {
              type: "paragraph",
              text: "El DO se reconoce por un conjunto de características que lo diferencian de iniciativas episódicas y de modas. Primero, es una estrategia educativa planeada: las personas aprenden nuevas formas de trabajar mediante experiencias diseñadas —no sólo discursos— que conectan saber, hacer y sentido. Esta intencionalidad pedagógica hace del lugar de trabajo un laboratorio de aprendizaje orientado a resultados. La planificación no significa rigidez; implica hipótesis claras, criterios de éxito y mecanismos de ajuste. Sin este andamiaje, el cambio queda a merced de impulsos o de la inercia organizacional. La estrategia educativa se sustenta en principios de aprendizaje de adultos: relevancia inmediata, práctica guiada, feedback específico y reflexión sobre la experiencia para consolidar hábitos.",
            },
            {
              type: "paragraph",
              text: "Segundo, el cambio está ligado a exigencias reales que la organización debe satisfacer —clientes, regulación, tecnología, competencia—. Esto evita intervenciones cosméticas. El DO parte de problemas concretos (calidad, tiempos, rotación, seguridad, clima) y diseña respuestas proporcionadas. La tracción proviene de conectar el ‘para qué’ con métricas y decisiones del negocio. Cuando la intervención no conversa con los retos del entorno, la organización la percibe como ‘ruido’ y la abandona. En cambio, si alinea demanda externa con rediseño interno, se convierte en palanca de ventaja competitiva y de bienestar laboral.",
            },
            {
              type: "paragraph",
              text: "Tercero, hace hincapié en el comportamiento humano: no sólo cambia procesos y estructuras, sino prácticas concretas de liderazgo, colaboración y comunicación. El DO trabaja con hábitos —definir expectativas, coordinar compromisos, gestionar conflictos, dar retroalimentación— porque sabe que la cultura se ‘hace’ todos los días en conversaciones y decisiones. Este énfasis humanista no es sentimentalismo: es pragmatismo. La evidencia muestra que la calidad de las interacciones explica gran parte del desempeño. Por ello, el DO modela conversaciones de calidad y establece rituales (1:1, retrospectivas, revisiones de tablero) que institucionalizan conductas efectivas.",
            },
            {
              type: "paragraph",
              text: "Cuarto, los agentes de cambio suelen ser externos al inicio, aunque, una vez instalado el programa, la organización desarrolla capacidad interna. Esta secuencia combina imparcialidad y transferencia de conocimiento: el externo rompe inercias y espejea patrones; el interno asegura continuidad y adaptación. El criterio no es ‘externo vs. interno’, sino idoneidad para cada fase. El éxito se mide en la autonomía que queda: un DO que perpetúa dependencia ha fallado su misión educativa. Por ello, el cierre de proyectos incluye manuales de práctica, coaching a facilitadores internos y mecanismos de seguimiento que la organización puede sostener sin tutelaje.",
            },
            {
              type: "paragraph",
              text: "Quinto, el DO implica relación cooperativa entre agente de cambio y organización. Nadie ‘hace DO a otro’; se hace con el otro. El contrato explicita roles, decisiones, confidencialidad, indicadores y tiempos. La cooperación se prueba cuando surgen tensiones: datos incómodos, resistencias, límites éticos. El marco cooperativo permite convertirlas en aprendizaje y rediseño, no en ruptura. La dirección patrocina y decide; el consultor facilita y reta; los equipos co‑producen soluciones. Este triángulo de responsabilidad compartida ancla la legitimidad del proceso y multiplica la probabilidad de adopción sostenida.",
            },
            {
              type: "paragraph",
              text: "Sexto, los agentes de cambio comparten metas normativas: mejorar capacidad interpersonal, transferir valores humanos, fomentar comprensión entre grupos, promover administración por equipos y desarrollar métodos maduros de solución de conflictos. Estas metas se traducen en artefactos concretos: protocolos de feedback, acuerdos de interfaz, estándares de roles, tableros de desempeño y procedimientos de mediación. La ética es transversal: se protege la dignidad, se dice la verdad con cuidado, se evitan manipulaciones y se documentan decisiones. La consistencia entre medios y fines es condición de credibilidad.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el DO es disciplina de evaluación: define indicadores de proceso y de resultado, compara antes–después, aprende de los desvíos y ajusta el diseño. Así evita la ‘fatiga del cambio’ y acumula capacidades. Las características anteriores —planeación educativa, anclaje en exigencias reales, foco en comportamiento, cooperación, metas normativas y evaluación— configuran una práctica sobria y eficaz. Cuando están presentes, el DO trasciende slogans y produce mejoras que resisten el escrutinio del tiempo, de las auditorías y de los propios colaboradores. Esa es su promesa distintiva en contextos de alta complejidad y cambio continuo.",
            },
            {
              type: "accordion",
              header: "Señas de identidad (según material)",
              open: false,
              text: "Estrategia educativa planeada; cambio vinculado a exigencias reales; énfasis en comportamiento humano; agente de cambio externo con transferencia a interno; relación cooperativa consultor–organización; metas normativas (capacidad interpersonal, valores humanos, comprensión intergrupal, trabajo en equipo, solución de conflictos).",
            },
            {
              type: "accordion",
              header: "Diagnóstico rápido de madurez DO",
              open: false,
              text: "¿Existe contrato claro y patrocinio? ¿El portafolio responde a retos reales? ¿Rituales de gestión instalados? ¿Capacidades internas en formación? ¿Métricas antes–después? ¿Prácticas de solución de conflictos y colaboración consolidadas?",
            },
          ],
        },
        {
          id: "1.12",
          numbering: "1.12",
          title: "Objetivos de desarrollo organizacional",
          content: [
            {
              type: "paragraph",
              text: "El objetivo general del DO consiste en rediseñar el comportamiento grupal mediante la revisión de valores, creencias, normas y hábitos para recuperar o elevar la competitividad de la empresa. Desde esta premisa, el DO orienta sus esfuerzos a alinear estrategia, estructura, procesos y cultura, de modo que la organización aprenda a adaptarse al entorno con eficacia y ética. El énfasis está en transformar cómo se trabaja (roles, flujos, decisiones) y cómo se convive (confianza, justicia procedimental, colaboración). Así, el propósito no se agota en mejorar el clima: busca resultados sostenibles en calidad, costo, servicio, seguridad y aprendizaje, asentados en prácticas que los equipos puedan replicar sin depender de héroes individuales.",
            },
            {
              type: "paragraph",
              text: "Un objetivo clave es fortalecer la capacidad de diagnóstico organizacional. Ello implica desarrollar en líderes y equipos la habilidad de distinguir síntomas de causas, leer el sistema como un conjunto interdependiente y priorizar palancas de alto impacto. Con datos válidos (encuestas, entrevistas, indicadores) y retroalimentación estructurada, el DO instala conversaciones que convierten evidencia en decisiones y decisiones en acuerdos operativos. La organización aprende a observarse con rigor y a ajustar sus procesos con ciclos cortos de aprendizaje, disminuyendo la improvisación y el voluntarismo que suelen erosionar la credibilidad de los cambios.",
            },
            {
              type: "paragraph",
              text: "Otro objetivo es elevar la efectividad de los equipos de trabajo. Se promueve claridad de propósito, definición de roles, acuerdos de interfaz entre áreas y rituales de gestión (tableros, 1:1, retrospectivas). El DO busca que la coordinación deje de descansar en esfuerzos heroicos y se apoye en sistemas visibles de compromiso. Esto repercute en entregas a tiempo, reducción de retrabajos y mejor experiencia del cliente. Al mismo tiempo, se cuida el bienestar de las personas, evitando que la búsqueda de resultados degrade la salud psicosocial o la seguridad.",
            },
            {
              type: "paragraph",
              text: "El DO persigue consolidar liderazgos de servicio capaces de modelar la cultura deseada. No se trata de carisma, sino de conductas observables: dar dirección, remover obstáculos, reconocer avances, sostener conversaciones difíciles y rendir cuentas. El objetivo es que cada mando medio convierta la estrategia en trabajo coordinado y aprendizaje, actuando como facilitador del desempeño de su equipo. Esta profesionalización del liderazgo reduce la rotación, mejora el clima y acelera la adopción de procesos rediseñados.",
            },
            {
              type: "paragraph",
              text: "Un propósito transversal es fortalecer la toma de decisiones basada en evidencia. Se promueve el uso disciplinado de indicadores que conecten personas con negocio (calidad, tiempos de ciclo, costo, NPS, rotación, ausentismo, seguridad). La meta no es “tener muchos números”, sino un set mínimo que permita aprender y corregir. El DO instala cadencias de revisión y tableros visuales para que todos observen el mismo fenómeno y actúen coordinados, disminuyendo zonas grises y conflictos de interpretación.",
            },
            {
              type: "paragraph",
              text: "También se busca institucionalizar el cambio como capacidad, no como evento. El objetivo es que la organización pueda pilotear, medir, escalar o retirar intervenciones con gobernanza clara. Esto incluye comités de transformación, portafolio priorizado, reglas de escalamiento, gestión de dependencias y mecanismos de transferencia de conocimientos. Cuando el cambio se vuelve rutina profesional, se reduce la fatiga y sube la tasa de éxito de las iniciativas.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el DO pretende salvaguardar la dignidad en el trabajo. Los objetivos técnicos se subordinan a principios que valoran a las personas como fin y no sólo como medio. Por eso, cada intervención incorpora criterios de equidad, inclusión y salud psicosocial, y respeta la confidencialidad y el consentimiento informado. La legitimidad del cambio descansa en que los fines (competitividad) y los medios (prácticas humanas) sean coherentes.",
            },
            {
              type: "accordion",
              header: "Mapa de objetivos (síntesis)",
              open: false,
              text: "Diagnóstico con evidencia; equipos efectivos; liderazgo de servicio; decisiones con datos; gobernanza del cambio; dignidad y equidad en el trabajo.",
            },
            {
              type: "accordion",
              header: "Indicadores sugeridos",
              open: false,
              text: "Calidad (defectos, retrabajos), tiempo (lead time), costo (unitario), servicio (NPS/OTIF), rotación y ausentismo, seguridad (accidentes), clima y compromiso.",
            },
          ],
        },

        {
          id: "1.13",
          numbering: "1.13",
          title: "Valores de desarrollo organizacional",
          content: [
            {
              type: "paragraph",
              text: "Los valores del DO orientan el cómo se realizan las transformaciones. Un primer valor es tratar a las personas como seres humanos completos, no como insumos anónimos. Ello implica construir entornos de trabajo que reconozcan la dignidad, la diversidad de necesidades y el derecho a ser escuchados. Este principio exige procesos justos, reglas claras y espacios psicológicamente seguros donde se pueda disentir sin represalias. La productividad que ignora la humanidad es insostenible; la que la integra resulta más consistente y ética.",
            },
            {
              type: "paragraph",
              text: "Un segundo valor es el desarrollo del potencial individual y colectivo. El DO defiende que cada persona y la organización en su conjunto puedan crecer, aprender y aportar más valor en el tiempo. Se favorecen trayectorias de aprendizaje, ampliación responsable de autonomía, retroalimentación frecuente y oportunidades de participación en el rediseño del trabajo. El aprendizaje en el puesto —no sólo el aula— se vuelve el centro de la propuesta.",
            },
            {
              type: "paragraph",
              text: "La eficiencia orientada a metas compartidas es un tercer valor. No se trata de “hacer más con menos” a cualquier precio, sino de alinear recursos con fines legítimos y medibles, evitando despilfarros técnicos y humanos. La eficiencia va de la mano con la transparencia: métricas visibles, decisiones explicadas, seguimiento público de compromisos. Así, la confianza sube y el costo de coordinación baja.",
            },
            {
              type: "paragraph",
              text: "Otro valor es el trabajo significativo y retador. El DO promueve diseños que ofrezcan variedad, relevancia, autonomía y retroalimentación, porque sabe que la motivación depende de la experiencia cotidiana de la tarea. Entornos donde las personas entienden el propósito y ven el efecto de su trabajo tienden a sostener altos estándares de calidad y seguridad.",
            },
            {
              type: "paragraph",
              text: "Se valora la participación informada en las decisiones que afectan el trabajo. Esto no equivale a asambleísmo, sino a mecanismos claros para influir: foros de mejora, comités interáreas, pruebas piloto, consultas a usuarios internos. La participación es un medio para elevar la calidad de las decisiones y para construir compromiso genuino con su implementación.",
            },
            {
              type: "paragraph",
              text: "La comprensión entre grupos y la solución madura de conflictos constituyen otro núcleo axiológico. El DO favorece que las diferencias de objetivos y lenguaje entre áreas se tramiten mediante acuerdos de interfaz, reglas de escalamiento y mediación profesional. Resolver conflictos a tiempo preserva la energía para la tarea primaria y cuida la relación de largo plazo.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el valor de la veracidad sostiene todo el proceso: datos reales, diagnósticos que no maquillan, comunicación honesta de avances y límites. Sin verdad, el DO degenera en teatro. Con verdad, incluso los retrocesos se convierten en aprendizaje. Estos valores son parámetros de diseño y criterios de auditoría ética del cambio.",
            },
            {
              type: "accordion",
              header: "Valores nucleares (síntesis)",
              open: false,
              text: "Dignidad humana; desarrollo del potencial; eficiencia con propósito; trabajo significativo; participación informada; cooperación intergrupal; veracidad.",
            },
            {
              type: "accordion",
              header: "Prácticas para vivir los valores",
              open: false,
              text: "Reglas de justicia procedimental; tableros visibles; retroalimentación continua; rediseño de puestos con autonomía; foros de mejora; mediación y acuerdos de interfaz; reportes honestos de avance.",
            },
          ],
        },

        {
          id: "1.14",
          numbering: "1.14",
          title: "Proceso del desarrollo organizacional",
          content: [
            {
              type: "paragraph",
              text: "El proceso estratégico–táctico del DO se integra por tres etapas: diagnóstico organizacional, plan rector e implementación con presupuesto. El diagnóstico mide procesos productivos, comportamiento y comunicación; identifica causas sistémicas y prioriza problemas. El plan rector traduce hallazgos en una cartera secuenciada de intervenciones con objetivos, responsables, recursos y métricas. El presupuesto asegura viabilidad y disciplina, asignando costos y beneficios esperados. Este encadenamiento evita saltar de la queja a la acción sin hipótesis ni criterios de éxito.",
            },
            {
              type: "paragraph",
              text: "El diagnóstico combina datos cuantitativos (indicadores, encuestas) y cualitativos (entrevistas, observación del trabajo real). Se analizan niveles organizacionales (empresa, áreas, puestos) y fronteras (entre funciones y con clientes/proveedores internos). El resultado es un mapa de problemas–causas con estimación de impacto, que permite elegir pocas palancas de alto rendimiento. La calidad del diagnóstico depende de la validez de datos, de la confidencialidad y de la participación de quienes conocen el proceso.",
            },
            {
              type: "paragraph",
              text: "El plan rector organiza la intervención por oleadas: pilotos, evaluación, escalamiento o retiro. Define gobernanza (comité de transformación), cadencias (revistas quincenales de avance), artefactos (tableros, acuerdos de interfaz, estándares), gestión de riesgos y dependencias. Incluye la estrategia de comunicación y de desarrollo de capacidades (coaching, formación de facilitadores internos). Sin plan, los esfuerzos se dispersan; con plan, el cambio se hace visible y gestionable.",
            },
            {
              type: "paragraph",
              text: "El presupuesto explicita costos (tiempo, tecnología, consultoría, formación) y beneficios esperados (ahorros, ingresos, calidad, seguridad, clima). Se establecen supuestos y umbrales para decidir escalamiento. El DO profesional presenta casos de negocio prudentes, con escenarios y métricas de seguimiento. Financiar el cambio no es un acto de fe, sino una decisión informada que compite con otros usos del capital.",
            },
            {
              type: "paragraph",
              text: "La implementación combina disciplina y aprendizaje. Se ejecutan pilotos con objetivos claros, se miden resultados, se documentan hallazgos y se decide el siguiente paso. Los líderes modelan conductas, retiran obstáculos y celebran avances. El acompañamiento cercano a mandos y equipos evita que los viejos hábitos devoren el diseño. La transparencia sobre desvíos y la rapidez para ajustar mantienen la credibilidad.",
            },
            {
              type: "paragraph",
              text: "La evaluación cierra el ciclo: compara antes–después, atribuye efectos, recoge aprendizajes y actualiza estándares. No se trata de “cerrar proyectos”, sino de institucionalizar lo que funcionó (procedimientos, métricas, formación) y retirar lo que no. La evaluación alimenta un repositorio de prácticas y lecciones que reduce futuros costos de cambio y acelera la curva de aprendizaje organizacional.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el proceso incluye salvaguardas éticas: consentimiento y confidencialidad en mediciones, no discriminación en decisiones, protección de salud psicosocial y coherencia entre discurso y práctica. El DO es, a la vez, técnica de mejora y compromiso con la dignidad. Su proceso formal asegura que ambos fines se cumplan.",
            },
            {
              type: "accordion",
              header: "Etapas y entregables",
              open: false,
              text: "Diagnóstico (mapa de problemas–causas, línea base); Plan rector (cartera, gobernanza, cadencias); Implementación y presupuesto (pilotos, caso de negocio, métricas); Evaluación (antes–después, lecciones, estándar actualizado).",
            },
            {
              type: "accordion",
              header: "Herramientas recomendadas",
              open: false,
              text: "Encuesta-feedback; entrevistas; mapa SIPOC; matriz RACI; acuerdos de interfaz; tableros visuales; retrospectivas; registro de decisiones y riesgos.",
            },
          ],
        },
      ],
    },

    /* 2. Unidad principal */
    {
      id: "2",
      numbering: "Unidad 2",
      title: "El desarrollo organizacional desde el enfoque sistémico",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad coloca al desarrollo organizacional (DO) dentro del enfoque sistémico: una manera de ver a la organización como un conjunto de elementos interrelacionados que persiguen fines comunes e intercambian información, energía y recursos con su entorno. Adoptar esta mirada evita soluciones parciales y permite intervenir sobre causas, no solo sobre síntomas. En contextos volátiles, esta perspectiva ofrece una brújula: antes de “arreglar” personas o áreas, hay que entender el sistema de trabajo (entradas, procesos, salidas y retroalimentación), sus fronteras (con otras áreas y con el exterior) y sus reglas formales e informales. Desde aquí, el DO busca optimizar la coherencia entre estrategia, estructura, procesos, tecnología y cultura, de modo que la organización aprenda y se adapte sin perder identidad ni propósito. Esta unidad provee conceptos, métodos y checklists para diagnosticar con rigor, diseñar con participación y evaluar con evidencia, integrando niveles organizacionales.",
        },
        {
          type: "paragraph",
          text: "Un sistema se define por componentes que interactúan de manera ordenada para lograr resultados; en la empresa, esto se traduce en personas, procesos, tecnología, información y normas que hacen posible la creación de valor. La teoría distingue sistemas cerrados (sin intercambio con el medio) y abiertos (los característicos de la vida organizacional). En los sistemas abiertos, cada organización es a la vez sistema y parte de un suprasistema (mercado, sector, marco regulatorio), y contiene subsistemas (direcciones, áreas, equipos) que deben coordinarse. El flujo básico —entradas, transformación, salidas y retroalimentación— proporciona un lenguaje operativo para mapear procesos y detectar cuellos de botella, desperdicios y puntos de control. Esta cuadrícula, sencilla pero poderosa, permite comparar cómo se trabaja con cómo debería trabajarse, y fundamenta decisiones de rediseño con base en evidencia y no en intuición.",
        },
        {
          type: "paragraph",
          text: "El diagnóstico sistémico, núcleo práctico de la unidad, se realiza en tres niveles: (1) organización como un todo (gobernanza, plantilla, cultura, procesos críticos); (2) unidades o departamentos (mecanismos de coordinación, comunicación, procedimientos); y (3) puestos o tareas individuales (definición de actividades, estándares, competencias). La clave es observar interdependencias y fronteras: ¿dónde se traspapelan responsabilidades?, ¿qué acuerdos de interfaz faltan?, ¿qué información llega tarde o desalineada? Al distinguir síntomas de causas y priorizar palancas de alto impacto, el diagnóstico evita “parálisis por análisis” y prepara el terreno para un plan rector realista. La evidencia —encuestas, entrevistas, indicadores, mapas de proceso— se devuelve a los equipos para construir copropiedad de los hallazgos y compromisos de mejora medibles en calidad, tiempo, costo, seguridad y clima.",
        },
        {
          type: "paragraph",
          text: "La unidad integra además el modelo de fuerzas impulsoras y restrictivas del cambio, útil para visualizar por qué ciertos comportamientos se mantienen “en equilibrio”. El comportamiento actual persiste cuando fuerzas que favorecen el cambio y fuerzas que lo frenan se compensan; modificar el estado requiere aumentar impulsores, disminuir restricciones o ambas. Este lente se conecta con la práctica del DO: antes de lanzar iniciativas, conviene mapear qué incentivos, procesos, creencias o capacidades sostienen el statu quo y qué palancas pueden moverlo con menor costo político y operativo. Con ello, el rediseño deja de ser una lista de deseos para convertirse en una estrategia con hipótesis explícitas, riesgos identificados y métricas de seguimiento, articulada con el plan rector y el presupuesto de implementación.",
        },
        {
          type: "paragraph",
          text: "Finalmente, el enfoque sistémico traduce teoría en oficio: leer el sistema, formular hipótesis, experimentar en pequeño, medir y escalar. La unidad anticipa sus subtemas: historia del pensamiento de sistemas, definiciones clave, sistemas abiertos, diagnóstico multinivel, el modelo de Rensis Likert y el análisis de fuerzas. Cada apartado aportará definiciones, ejemplos y artefactos (mapas SIPOC, matrices RACI, tableros e indicadores, acuerdos de interfaz) para que los estudiantes construyan una práctica profesional rigurosa. El objetivo no es acumular conceptos, sino instalar una forma de pensar y actuar que conecte decisiones diarias con resultados colectivos, haciendo del DO una capacidad organizacional y no un evento esporádico.",
        },

        {
          type: "accordion",
          header: "Nivel 1 — Ideas fuerza del enfoque sistémico",
          open: false,
          text: "Organizaciones como sistemas abiertos; entradas–procesos–salidas–retroalimentación; fronteras y coordinación; diagnóstico en tres niveles; cambio como gestión de fuerzas impulsoras y restrictivas.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Conexiones prácticas",
          open: false,
          text: "Mapear procesos con SIPOC; acordar interfaces entre áreas; tableros e indicadores mínimos; pilotos con medición antes–después; gobernanza del portafolio de cambio; documentación y aprendizaje.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ruta de estudio sugerida",
          open: false,
          text: "1) Repasar historia y conceptos de sistemas; 2) practicar diagnóstico multinivel; 3) aplicar análisis de fuerzas; 4) diseñar plan rector y piloto; 5) definir métricas y criterios de escalamiento.",
        },
      ],
      subthemes: [
        {
          id: "2.1",
          numbering: "2.1",
          title: "Historia del enfoque de sistemas",
          content: [
            {
              type: "paragraph",
              text: "La historia del enfoque de sistemas se remonta a intuiciones filosóficas antiguas sobre el cambio y la interdependencia. La sentencia de Heráclito —nadie se baña dos veces en el mismo río— sintetiza que todo sistema está en flujo y que comprenderlo exige observar relaciones, no piezas aisladas. En el siglo XX, este hilo se vuelve programa científico: la biología, la cibernética y la teoría de la información confluyen para estudiar organización, retroalimentación y homeostasis. En administración, esta mirada desplaza el mecanicismo y el reduccionismo: el rendimiento no se explica sólo por partes “óptimas”, sino por acoplamientos viables entre personas, procesos, tecnología y entorno. Desde entonces, hablar de sistemas equivale a pensar en propósitos, límites, variables de control y aprendizaje; esto es, pasar de reparar componentes a diseñar coherencia. Esta unidad se apoya en esa tradición para dotar al DO de método: ver patrones, formular hipótesis y ensayar cambios medibles en contextos reales.",
            },
            {
              type: "paragraph",
              text: "Un hito fundacional es la obra de Ludwig von Bertalanffy, quien a mediados del siglo XX propone la Teoría General de Sistemas (TGS) como marco interdisciplinario para estudiar totalidades organizadas y sus principios (equifinalidad, jerarquía, diferenciación, regulación). La TGS distingue entre sistemas cerrados (sin intercambio con el medio) y sistemas abiertos (en intercambio constante de energía, información y materia). Las organizaciones pertenecen a la segunda categoría, por lo que su desempeño depende tanto de su diseño interno como de su acoplamiento con un suprasistema (mercado, regulación, comunidad). Esta inflexión teórica permitió importar conceptos como entrada‑proceso‑salida, retroalimentación y homeostasis a la empresa, abriendo paso a diagnósticos más finos que los meramente contables o estructurales y preparando el terreno para el DO como ingeniería social aplicada.",
            },
            {
              type: "paragraph",
              text: "En paralelo, la cibernética (Wiener) y los primeros modelos de control retroalimentado aportan la noción de bucles: medir desviaciones respecto a un objetivo, actuar para corregirlas y aprender de los resultados. La administración moderna traduce estos principios en indicadores clave, tableros de control y rutinas de mejora continua. El enfoque sistémico no sustituye al juicio profesional, pero lo disciplina: antes de “arreglar” comportamientos, pregunta por la función que cumplen dentro del sistema; antes de culpar a individuos, indaga en reglas, flujos de información y acoplamientos defectuosos entre áreas. Este giro evita soluciones cosméticas y favorece intervenciones que armonizan lo técnico y lo humano.",
            },
            {
              type: "paragraph",
              text: "Otra contribución provino de la investigación en organizaciones socio‑técnicas y en relaciones humanas. Los estudios de Hawthorne mostraron la relevancia de factores sociales y de significado; Tavistock evidenció que rediseñar tareas y equipos altera el sistema completo. El enfoque sistémico dio lenguaje a estas observaciones: no hay ‘variables blandas’ y ‘duras’, sino interdependencias que, si se ignoran, generan efectos no intencionados. Así, el DO adopta el enfoque como brújula para coordinar cambios en estructura, procesos y comportamientos, y para evaluar resultados en varios ejes (calidad, costo, tiempo, seguridad, clima).",
            },
            {
              type: "paragraph",
              text: "A nivel práctico, la historia del enfoque se tradujo en herramientas: mapas SIPOC para delimitar entradas, procesos y salidas; matrices RACI para clarificar responsabilidades; análisis de causa raíz y de fallas para aprender de desviaciones; y tableros para visibilizar el estado del sistema. Estas herramientas comparten una premisa: lo que no se hace visible no se puede coordinar. Por ello, ver el sistema es un acto de diseño de información tanto como de gestión humana.",
            },
            {
              type: "paragraph",
              text: "La adopción en América Latina y México supuso traducir conceptos a marcos institucionales propios, con regulaciones, culturas laborales y capacidades técnicas diversas. La enseñanza universitaria y la consultoría fueron vehículos de difusión; los casos exitosos generaron aprendizaje acumulado sobre cómo adaptar, no copiar. De ahí que esta historia sea, también, la de una comunidad de práctica que comparte principios y experimentos. El enfoque de sistemas mantiene vigencia porque ofrece respuestas sobrias a la complejidad contemporánea: trabajar con bucles de aprendizaje, diseñar con quienes ejecutan y medir para decidir.",
            },
            {
              type: "paragraph",
              text: "Mirar la historia sirve para anclar expectativas: el enfoque de sistemas no es una moda ni una panacea; es una disciplina para ver y actuar mejor. Su aportación al DO consiste en convertir el cambio organizacional en hipótesis probables, experimentos controlados y aprendizaje estructurado. Desde esta base, el resto de subtemas profundiza en definiciones, niveles de diagnóstico y modelos que operacionalizan la mirada sistémica en proyectos reales de transformación.",
            },
            {
              type: "accordion",
              header: "Hitos del enfoque",
              open: false,
              text: "Heráclito (cambio); Bertalanffy (TGS); cibernética (retroalimentación); relaciones humanas (Hawthorne); socio‑técnica (Tavistock).",
            },
            {
              type: "accordion",
              header: "Traducción a DO",
              open: false,
              text: "SIPOC, RACI, indicadores; lectura de interdependencias; pilotos con medición; aprendizaje y ajuste continuo.",
            },
          ],
        },
        {
          id: "2.2",
          numbering: "2.2",
          title: "Diversas definiciones de sistemas",
          content: [
            {
              type: "paragraph",
              text: "Un sistema puede definirse, en términos generales, como un conjunto de elementos interrelacionados que actúan de manera ordenada para alcanzar un fin. En administración, esta idea adquiere concreción: procedimientos, personas, tecnologías e información se organizan según reglas explícitas e implícitas para producir bienes o servicios. Autores del campo han propuesto matices: redes de procedimientos integrados (Menschel), conjuntos de componentes orientados a un objetivo mediante un plan (Gómez Ceja) o estructuras de elementos íntimamente relacionados (Hernández). Estas fórmulas convergen en tres rasgos: propósito (para qué existe), estructura (cómo se conectan sus partes) y dinámica (cómo fluye la información y cómo se autorregula). Para el DO, estas definiciones no son teóricas; permiten diagnosticar si el ‘sistema de trabajo’ está bien ensamblado o si sufre de acoplamientos defectuosos, ambigüedad de roles o retroalimentación tardía.",
            },
            {
              type: "paragraph",
              text: "Todo sistema puede describirse con cuatro componentes funcionales: entradas (insumos), procesos (transformaciones), salidas (productos/servicios) y retroalimentación (información para corregir). Esta cuadrícula permite mapear desde una planta de producción hasta un proceso de atención al cliente. Las entradas pueden ser materiales, personas o datos; los procesos, actividades que agregan valor; las salidas, resultados medibles; y la retroalimentación, indicadores y señales cualitativas. Cuando la retroalimentación es tardía o incompleta, el sistema deriva en sobrecostos, retrabajos o servicio deficiente. Por eso, el diseño de métricas y tableros no es accesorio: constituye la ‘vista’ del sistema para orientar la acción.",
            },
            {
              type: "paragraph",
              text: "Se distingue entre sistemas cerrados y abiertos. Los cerrados —raros en la práctica organizacional— pueden describirse sin referencia a su entorno (un reloj). Los abiertos, por el contrario, intercambian constantemente recursos e información con otros sistemas. Una empresa es simultáneamente sistema y parte de un suprasistema (sector, regulación, comunidad) y, a la vez, contiene subsistemas (áreas, equipos, puestos). Esta recursividad obliga a pensar en niveles y fronteras: dónde empieza y termina la responsabilidad de cada función; qué acuerdos regulan la interacción; qué escalamiento se activa ante conflictos. Comprender esta arquitectura previene “zonas grises” y duplica la probabilidad de coordinación efectiva.",
            },
            {
              type: "paragraph",
              text: "Las definiciones operativas del sistema revelan criterios de diseño. Si el propósito es crear valor para el cliente, cada componente debe contribuir visible y mediblemente a ese fin; si no, es desperdicio. Si la estructura requiere cooperación interfuncional, se necesitan reglas de interfaz y tableros compartidos; de lo contrario, los indicadores competirán y la ‘optimización local’ saboteará el desempeño global. Si la dinámica exige aprender rápido, hay que acortar bucles de retroalimentación y crear espacios para inspeccionar y adaptar. Así, definir el sistema es el primer acto de diseño organizacional.",
            },
            {
              type: "paragraph",
              text: "El lenguaje de sistemas también ayuda a resolver controversias. Cuando se discute sobre ‘culpables’, el enfoque invita a preguntar por restricciones del sistema (capacidad, información, incentivos) y por supuestos que sostienen prácticas ineficientes. Se desplaza la conversación de personas a procesos, de opinión a evidencia, de posiciones a intereses. En ese tránsito, el DO habilita a los equipos para que se conviertan en diseñadores de su propio sistema de trabajo con apoyo experto, evitando externalizar problemas o esperar soluciones mágicas.",
            },
            {
              type: "paragraph",
              text: "En organizaciones complejas, varios sistemas interactúan: producción con compras y logística; ventas con crédito y cobranza; diseño con calidad. El desempeño depende de la calidad de estas acoplaciones. Las definiciones de sistema, entonces, se complementan con artefactos: SIPOC para mapear el flujo, RACI para clarificar decisiones, acuerdos de interfaz para fijar compromisos, y protocolos de escalamiento para resolver fricciones. Cada artefacto hace explícitas piezas del sistema que, si permanecen implícitas, generan errores y conflictos.",
            },
            {
              type: "paragraph",
              text: "Por último, las definiciones deben servir para aprender. Un buen diagnóstico formula hipótesis sobre qué componente o acoplamiento explica una brecha; un buen diseño define experimentos para probarlas; un buen seguimiento recoge retroalimentación para ajustar el sistema. Esta es la virtud del enfoque: no encierra a la organización en dogmas, sino que ofrece un lenguaje común para observar, conversar y decidir con mayor calidad.",
            },
            {
              type: "accordion",
              header: "Definiciones útiles",
              open: false,
              text: "Sistema = propósito + estructura + dinámica. Componentes: entradas, procesos, salidas, retroalimentación. Niveles: supra‑, sistema, sub‑sistemas.",
            },
            {
              type: "accordion",
              header: "Artefactos de diseño",
              open: false,
              text: "SIPOC; RACI; acuerdos de interfaz; protocolos de escalamiento; tableros e indicadores de flujo y calidad.",
            },
          ],
        },
        {
          id: "2.3",
          numbering: "2.3",
          title: "Enfoque de sistemas abiertos",
          content: [
            {
              type: "paragraph",
              text: "El enfoque de sistemas abiertos sostiene que toda organización mantiene intercambios constantes con su entorno: recibe insumos (personas, materiales, información), los transforma mediante procesos y devuelve salidas (bienes, servicios, decisiones) junto con señales que realimentan el sistema. En esta perspectiva, cada organización es parte de un suprasistema (sector, mercado, regulación) y, a la vez, contiene subsistemas (áreas, equipos, puestos). Esta recursividad implica coordinar horizontes y reglas en varios niveles para lograr coherencia. En la práctica, pensar en sistemas abiertos obliga a diseñar fronteras: qué entra, qué sale, quién decide y cómo se comparte información. Sin fronteras claras, la coordinación se degrada; con fronteras demasiado rígidas, la organización pierde adaptabilidad. El arte consiste en modular permeabilidad y autonomía para maximizar aprendizaje y desempeño.",
            },
            {
              type: "paragraph",
              text: "Un beneficio del enfoque es convertir la estrategia en arquitectura de sistemas. Si el entorno exige rapidez, se acortan bucles de decisión y se acercan competencias al punto de valor; si demanda confiabilidad, se refuerzan estándares y controles en la fuente; si premia personalización, se diseñan células con autonomía responsable. Estas decisiones se documentan en mapas de procesos, acuerdos de interfaz entre áreas, catálogos de servicios internos y tableros compartidos. El resultado es una organización capaz de reconocer señales externas, traducirlas en ajustes internos y medir su efecto en clientes y colaboradores.",
            },
            {
              type: "paragraph",
              text: "El marco de sistemas abiertos ilumina, además, el papel de la información. La retroalimentación oportuna reduce la distancia entre lo que se quiere y lo que sucede. Por eso, el diseño de indicadores y cadencias de revisión es esencial: reuniones diarias de 15 minutos para equipos operativos, semanales para mandos y mensuales para dirección, cada una con métricas pertinentes. La calidad de los datos —precisión, puntualidad, relevancia— determina la calidad de las decisiones. En sistemas con señales ruidosas o tardías, las correcciones llegan cuando el costo ya es alto.",
            },
            {
              type: "paragraph",
              text: "Vistas como sistemas abiertos, las organizaciones deben gestionar su acoplamiento con reguladores, proveedores y comunidades. Ello implica cumplir estándares, negociar expectativas y mitigar externalidades (ambientales, sociales). El DO aporta método para construir relaciones de beneficio mutuo: acuerdos claros, tableros de desempeño compartidos, espacios de diálogo y mecanismos de solución de controversias. Estas capacidades protegen licencias sociales para operar y reducen riesgos reputacionales y regulatorios.",
            },
            {
              type: "paragraph",
              text: "Un contrapeso al entusiasmo sistémico es recordar límites de absorción: ningún sistema puede procesar cambios ilimitados. Por ello, los portafolios de transformación deben priorizar y secuenciar iniciativas para no sobrecargar al sistema con excitación sin descanso. La estabilidad no es inmovilidad: es capacidad para mantener desempeño mientras se aprende y se adapta. Diseñar descansos, consolidar estándares y retirar lo que no funciona también es gestión de sistemas abiertos.",
            },
            {
              type: "paragraph",
              text: "El enfoque ofrece una lente ética: al estar abiertos al entorno, los sistemas impactan a personas y comunidades. El diseño debe cuidar inclusión, salud psicosocial y confidencialidad de datos. En el plano interno, la apertura responsable se refleja en transparencia informativa y participación informada en decisiones que afectan el trabajo. Estos principios refuerzan confianza y reducen el costo de coordinación y de cumplimiento.",
            },
            {
              type: "paragraph",
              text: "Operativamente, implementar el enfoque supone tres pasos: (1) mapear el sistema (SIPOC, actores externos, riesgos); (2) definir fronteras y reglas de intercambio (acuerdos de interfaz, catálogos de servicios, protocolos de escalamiento); y (3) establecer bucles de retroalimentación con métricas y cadencias. La prueba de fuego es el desempeño sostenido: tiempos de ciclo estables, calidad alta, costos controlados, seguridad y clima en mejora. Cuando eso ocurre, el enfoque de sistemas abiertos deja de ser teoría y se vuelve oficio cotidiano.",
            },
            {
              type: "accordion",
              header: "Claves del enfoque abierto",
              open: false,
              text: "Fronteras claras y permeables; indicadores y cadencias; acuerdos con actores externos; portafolio priorizado; ética de datos y cuidado psicosocial.",
            },
            {
              type: "accordion",
              header: "Artefactos recomendados",
              open: false,
              text: "Mapa de actores; SIPOC extendido; acuerdos de interfaz; catálogo de servicios internos; tableros compartidos; protocolos de escalamiento.",
            },
          ],
        },
        {
          id: "2.4",
          numbering: "2.4",
          title: "Diagnóstico del sistema organizacional",
          content: [
            {
              type: "paragraph",
              text: "Diagnosticar el sistema organizacional implica observar la empresa como totalidad y como red de subsistemas interdependientes. En el nivel más alto, se analiza la organización como conjunto: estrategia, estructura, gobernanza, plantilla, cultura, procesos críticos y resultados. El propósito es entender la alineación entre lo que la empresa declara (propósito, propuesta de valor) y la manera en que efectivamente opera (flujos, decisiones, incentivos). En el nivel medio, se estudian las unidades o departamentos: coordinación interáreas, reglas de interfaz, comunicación y procedimientos. En el nivel bajo, se examinan puestos y tareas: definición de actividades, estándares, competencias y condiciones de trabajo. Esta mirada multinivel revela interdependencias y cuellos de botella que no son visibles desde un solo punto de observación. El diagnóstico no es un inventario de problemas, sino una hipótesis estructurada sobre causas sistémicas y palancas de alto impacto, que orienta el diseño del plan rector de cambio.",
            },
            {
              type: "paragraph",
              text: "El proceso reúne datos cuantitativos y cualitativos. Entre los primeros: indicadores de calidad, tiempo, costo, seguridad, servicio al cliente, rotación y ausentismo; mapas de proceso (SIPOC), matrices RACI y tableros de control. Entre los segundos: entrevistas, grupos focales, observación del trabajo real (Gemba), revisión documental y análisis de incidentes críticos. La retroalimentación temprana de hallazgos a los equipos crea copropiedad y mejora la precisión del diagnóstico. Una regla clave es diferenciar síntoma de causa: entregas tardías pueden ser efecto de variabilidad en entradas, de reglas ambiguas de prioridad o de sobrecarga en un rol crítico; atacar el síntoma sin comprender el flujo solo desplaza el problema. Por ello, el diagnóstico formula hipótesis contrastables y evita juzgar personas antes de comprender restricciones del sistema.",
            },
            {
              type: "paragraph",
              text: "La delimitación de fronteras es decisiva. En sistemas abiertos, cada área es, a la vez, cliente y proveedor internos. Diagnosticar implica dibujar esas fronteras y acordar reglas de intercambio: entradas ‘aceptables’, tiempos de ciclo, criterios de calidad y protocolos de escalamiento. Herramientas como acuerdos de interfaz y catálogos de servicios internos formalizan compromisos y reducen zonas grises que suelen generar fricciones. El diagnóstico también identifica dependencias tecnológicas (sistemas de información, integraciones) y riesgos operativos (puntos únicos de falla, competencias no cubiertas), para priorizar inversiones y evit ar ‘soluciones heroicas’ que no escalan.",
            },
            {
              type: "paragraph",
              text: "La salud organizacional forma parte del diagnóstico. Se evalúan clima, liderazgo, confianza, justicia procedimental y seguridad psicológica, pues condicionan la adopción de cualquier rediseño. Encuestas de percepción, mapeo de redes de colaboración y análisis de conversaciones de desempeño ayudan a detectar patrones de coordinación y de conflicto. El objetivo no es ‘psicologizar’ la organización, sino identificar barreras relacionales que impiden que un buen diseño técnico funcione: por ejemplo, objetivos contradictorios, retroalimentación escasa o falta de autoridad para decidir cerca del punto de valor. Un diagnóstico honesto integra lo humano y lo técnico en una sola hipótesis de funcionamiento.",
            },
            {
              type: "paragraph",
              text: "La priorización convierte el diagnóstico en guía de acción. No todo problema merece la misma energía. Se pondera impacto (en clientes y resultados), urgencia, esfuerzo y riesgo, con criterios explícitos que eviten sesgos de poder o de ‘lo más visible’. Se seleccionan pocas palancas de alto rendimiento y se convoca a los dueños del proceso a diseñar pilotos. La trazabilidad es clave: cada hipótesis debe tener un experimento asociado, una métrica de éxito y una ventana de tiempo razonable. Así se previene la parálisis por análisis y se instala aprendizaje estructurado.",
            },
            {
              type: "paragraph",
              text: "La ética del diagnóstico demanda confidencialidad, consentimiento informado y transparencia sobre el uso de datos. Las personas participan con honestidad si confían en que la información no se usará para sanciones encubiertas. La devolución de hallazgos debe ser profesional: datos claros, lectura compartida de causas, propuestas viables y reconocimiento de límites. Donde se respeta la ética, el diagnóstico aumenta la confianza y se vuelve un bien público interno; donde se traiciona, genera cinismo y resistencia. Esta dimensión es inseparable del rigor técnico.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el diagnostico concluye con un mapa de problemas‑causas, una línea base de indicadores y una cartera priorizada de intervenciones. Todo ello se integra al plan rector y al presupuesto, con gobernanza definida (comité de transformación, cadencias de revisión) y mecanismos de aprendizaje transversal (comunidades de práctica). Con este cierre, el diagnóstico deja de ser un reporte y se convierte en plataforma de decisiones que la organización puede sostener en el tiempo.",
            },
            {
              type: "accordion",
              header: "Checklist de diagnóstico sistémico",
              open: false,
              text: "1) Definir niveles (organización, áreas, puestos); 2) integrar datos cuantitativos y cualitativos; 3) mapear fronteras y acuerdos de interfaz; 4) distinguir síntomas y causas; 5) priorizar palancas; 6) definir pilotos y métricas; 7) cuidar ética y confidencialidad.",
            },
            {
              type: "accordion",
              header: "Artefactos recomendados",
              open: false,
              text: "SIPOC; matriz RACI; catálogos de servicios internos; acuerdos de interfaz; mapa de actores y riesgos; tablero de indicadores antes–después; registro de lecciones aprendidas.",
            },
          ],
        },
        {
          id: "2.5",
          numbering: "2.5",
          title: "Modelo de Rensis Likert",
          content: [
            {
              type: "paragraph",
              text: "El modelo de Rensis Likert describe cuatro sistemas de dirección que explican cómo se gobiernan las organizaciones y cómo esas prácticas afectan el desempeño. El Sistema 1 (autoritario‑explotador) se caracteriza por decisiones centralizadas, desconfianza, control por miedo y escasa comunicación ascendente; genera obediencia aparente, baja calidad de información y resistencia pasiva. El Sistema 2 (autoritario‑benevolente) suaviza el control con recompensas, pero mantiene centralización y comunicación limitada; mejora el clima en la superficie sin resolver la raíz. El Sistema 3 (consultivo) delega más, escucha a mandos y equipos y permite cierta participación en decisiones; la información fluye mejor, aunque persisten fronteras rígidas. El Sistema 4 (participativo‑grupo) instala confianza, metas compartidas, toma de decisiones distribuida y comunicación bidireccional franca; los equipos operan con autonomía responsable y retroalimentación frecuente. Para Likert, el Sistema 4 es el que mayor desempeño sostenido produce porque alinea motivación, información y coordinación.",
            },
            {
              type: "paragraph",
              text: "El paso de un sistema a otro no es un salto retórico, sino un rediseño del sistema de trabajo: indicadores visibles, estándares, acuerdos de interfaz, autoridad cerca del punto de valor y rituales de gestión (reuniones breves, retrospectivas, 1:1). Likert subrayó el papel de los ‘grupos de enlace’ —equipos que comparten miembros entre unidades— para coordinar interdependencias y evitar la ‘optimización local’ que perjudica el desempeño global. La lógica es pragmática: donde la información circula con calidad, las decisiones se acercan al problema y las personas participan en el diseño, los resultados mejoran y el sistema aprende. Este enfoque conecta de forma natural con el DO: la cultura deseada se ancla en prácticas de dirección observables y medibles.",
            },
            {
              type: "paragraph",
              text: "Diagnosticar el sistema de dirección vigente implica observar cómo se toman decisiones, cómo fluye la información y cómo se reconocen los aportes. En un Sistema 1, la retroalimentación suele ser punitiva y los indicadores se usan para controlar, no para aprender; en un Sistema 4, los indicadores son herramientas de mejora y la retroalimentación es específica y respetuosa. Transitar hacia sistemas más participativos requiere construir seguridad psicológica, clarificar roles y diseñar tableros que permitan autogestión informada. No se trata de ‘votar todo’, sino de distribuir autoridad donde existe competencia y responsabilidad para ejercerla, con límites explícitos para proteger la coherencia organizacional.",
            },
            {
              type: "paragraph",
              text: "El modelo de Likert aporta, además, una teoría de causalidad organizacional: prácticas de liderazgo → clima y motivación → comunicación y cooperación → decisiones y ejecución → resultados. Esta cadena sugiere que los cambios culturales sin rediseño de prácticas tienden a diluirse, y que las mejoras técnicas sin cuidado del clima encuentran resistencia. Por ello, las intervenciones efectivas combinan entrenamiento de líderes, rediseño de procesos y métricas compartidas. El objetivo es que el sistema produzca, de manera natural, comportamientos que antes exigían esfuerzos heroicos.",
            },
            {
              type: "paragraph",
              text: "La evidencia empírica que inspiró el modelo proviene de estudios comparativos de plantas y unidades con diferentes estilos de dirección, en los que se observaron relaciones consistentes entre participación, calidad de la información, fijación de metas y desempeño. Estas observaciones se han actualizado en marcos contemporáneos (lean, agile, organizaciones que aprenden), que corroboran la utilidad de la participación informada y de la toma de decisiones cerca del trabajo real. Likert no propone democracia asamblearia, sino diseño inteligente de responsabilidades y de flujo de información para producir cooperación de alta calidad.",
            },
            {
              type: "paragraph",
              text: "En el tránsito, aparecen riesgos: ‘participacionismo’ sin foco (muchas reuniones, pocas decisiones), delegación sin competencias (autonomía sin estándares) o captura del discurso participativo por elites informales. Para mitigarlos, el DO recomienda empezar con pilotos, explicitar criterios de éxito, desarrollar habilidades de facilitación en mandos medios y sostener la coherencia entre discurso y práctica. El avance se mide en la calidad de las decisiones, en la velocidad de aprendizaje y en resultados operativos, no sólo en percepciones de clima.",
            },
            {
              type: "paragraph",
              text: "En síntesis, el modelo de Rensis Likert ofrece un mapa de madurez directiva que ayuda a planear intervenciones de DO: identificar el sistema predominante, diseñar prácticas que acerquen al Sistema 4 y medir efectos en clima y negocio. La meta no es adoptar una etiqueta, sino construir un sistema de trabajo donde la participación informada y la confianza se conviertan en capacidades que sostienen desempeño y dignidad en el trabajo.",
            },
            {
              type: "accordion",
              header: "Los cuatro sistemas (resumen)",
              open: false,
              text: "S1 Autoritario‑explotador; S2 Autoritario‑benevolente; S3 Consultivo; S4 Participativo‑grupo. Palancas: información, decisiones, confianza, rituales de gestión.",
            },
            {
              type: "accordion",
              header: "Cómo migrar hacia S4",
              open: false,
              text: "Pilotos; estándares y tableros visibles; acuerdos de interfaz; desarrollo de mandos medios; seguridad psicológica; límites claros de autoridad y escalamiento.",
            },
          ],
        },
        {
          id: "2.6",
          numbering: "2.6",
          title: "Fuerzas impulsoras y restrictivas",
          content: [
            {
              type: "paragraph",
              text: "El análisis de fuerzas impulsoras y restrictivas, inspirado en la teoría de campo de Kurt Lewin, parte de una idea sencilla: el comportamiento actual de un sistema se mantiene porque fuerzas que empujan hacia el cambio y fuerzas que lo frenan están en equilibrio. Para modificar ese estado, se puede aumentar la potencia de las fuerzas impulsoras (incentivos, capacidades, recursos), disminuir la de las restrictivas (miedos, costos, reglas, carencias) o combinar ambas tácticas. El valor del modelo es práctico: obliga a explicitar supuestos y a diseñar intervenciones proporcionales. Antes de ‘empujar’ con campañas de comunicación, conviene identificar qué restricciones estructurales (metas contradictorias, falta de autoridad cercana al punto de valor, información tardía) están anulando el cambio. Al removerlas, pequeños impulsos producen grandes efectos porque el sistema deja de resistirse.",
            },
            {
              type: "paragraph",
              text: "Aplicar el análisis sigue pasos claros: (1) definir con precisión la conducta o el desempeño a cambiar (p. ej., retrasos en la entrega); (2) listar fuerzas impulsoras y restrictivas con actores clave; (3) valorar su intensidad relativa; (4) identificar palancas viables para fortalecer impulsores o debilitar restricciones; (5) diseñar experimentos de bajo costo para comprobar hipótesis; (6) medir efectos y ajustar. La conversación que genera este ejercicio suele revelar supuestos ocultos —‘si delego, pierdo control’; ‘si comparto información, me vuelvo prescindible’— que explican resistencias. Hacerlos explícitos permite intervenir con respeto: formación específica, rediseño de roles, reglas de decisión y tableros que den visibilidad y seguridad.",
            },
            {
              type: "paragraph",
              text: "En la práctica, muchas organizaciones insisten en aumentar fuerzas impulsoras (bonos, campañas, cursos) sin tocar restricciones sistémicas (metas irrealistas, procesos saturados, herramientas deficientes). El resultado es fatiga y cinismo. El enfoque de Lewin recomienda comenzar por aliviar restricciones clave porque suele requerir menos energía política: aclarar prioridades, eliminar pasos sin valor, definir reglas de interfaz, acercar decisiones a donde sucede el trabajo. Una vez que el sistema deja de ‘frenar’, los incentivos y la formación encuentran terreno fértil. La secuencia importa tanto como el contenido.",
            },
            {
              type: "paragraph",
              text: "El análisis de fuerzas se conecta con el portafolio de cambio: cada iniciativa debe explicitar qué fuerza moviliza o qué restricción reduce y con qué evidencia se comprobará. Esta trazabilidad protege de proyectos de moda y permite retirar iniciativas que no mueven la aguja. También ayuda a secuenciar: a veces conviene posponer una tecnología hasta que las reglas de colaboración estén claras; otras, una intervención de liderazgo necesita estar precedida por estándares que definan qué significa ‘buen desempeño’. El método ordena prioridades y evita acciones simbólicas de alto costo y bajo impacto.",
            },
            {
              type: "paragraph",
              text: "Un uso valioso del análisis es en conflictos interáreas. Al reunir a representantes de funciones con objetivos distintos (ventas, operaciones, finanzas), el mapa de fuerzas explicita tensiones legítimas y permite construir acuerdos interfuncionales que equilibren necesidades. Lo que era lucha de posiciones se vuelve diseño de sistema: se fijan reglas de prioridad, criterios de excepción y protocolos de escalamiento. El resultado es menos fricción y más foco en el cliente. Este enfoque traslada la conversación del ‘quién tiene la culpa’ al ‘cómo rediseñamos para que funcione’.",
            },
            {
              type: "paragraph",
              text: "En contextos de alta incertidumbre, las fuerzas cambian con rapidez. Por ello, el análisis no es un ejercicio único, sino una herramienta de gestión continua que se revisa en las cadencias de seguimiento. Se incorporan datos nuevos, se recalibran intensidades y se ajustan palancas. El aprendizaje documentado permite replicar lo que funciona y evitar errores. La transparencia al compartir mapas de fuerzas fortalece confianza y alinea expectativas sobre lo que es posible en cada etapa del cambio.",
            },
            {
              type: "paragraph",
              text: "En síntesis, el modelo de fuerzas impulsoras y restrictivas convierte la intención de cambio en una estrategia práctica: define la conducta objetivo, ilumina barreras ocultas, prioriza intervenciones con mejor relación impacto/costo y establece un marco de evaluación. Usado con honestidad y método, reduce el desperdicio político y operativo del cambio y aumenta la probabilidad de lograr resultados sostenibles sin sacrificar la dignidad de las personas que los hacen posibles.",
            },
            {
              type: "accordion",
              header: "Pasos para aplicar el análisis",
              open: false,
              text: "1) Definir conducta/meta; 2) listar fuerzas a favor y en contra; 3) valorar intensidad; 4) elegir palancas (fortalecer impulsores, debilitar restricciones); 5) diseñar experimentos; 6) medir y ajustar.",
            },
            {
              type: "accordion",
              header: "Ejemplos de palancas",
              open: false,
              text: "Fortalecer impulsores: formación específica, tableros visibles, reconocimiento, recursos. Debilitar restricciones: retirar pasos sin valor, reglas claras, autoridad cercana al punto de valor, mejoras de herramienta/proceso.",
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
          href: "https://www.youtube.com/watch?v=Vw8odVltzWQ&t=554s", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Sembranza de Eugenio Garza Sada — https://www.youtube.com/watch?v=Vw8odVltzWQ&t=554s",
            "Documental: genio y figura: Felipe Carrillo Puerto y su legado universitario — https://www.youtube.com/watch?v=C6M2iL8IWJ8&t=11s",
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
            "Guízar Montúfar, R. (2011). *Comportamiento organizacional: Principios y aplicaciones* (3.ª ed.). México: McGraw-Hill.",
            "Hernández, S. & Rodríguez, S. (2011). *Administración: Teoría general administrativa, origen, evolución y vanguardia*. México: McGraw-Hill.",
            "Universidad de Sonora (s. f.). *Tesis digital – Capítulo 1: Desarrollo Organizacional*. http://tesis.uson.mx/digital/tesis/docs/9151/Capitulo1.pdf",
            "Consulta web de apoyo: «origen del término Desarrollo Organizacional». https://www.google.com/search?q=origen+del+termino+desarrollo+organizaional",
            "Consulta web de apoyo: «orígenes del término Desarrollo Organizacional». https://www.google.com/search?q=origenes+del+termino+Desarrollo+organizacional",
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
