/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAP",
  courseId: "MercadotecniaPolitica",
  id: "MercPol-Mod3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Mercadotecnia política",
  title: "Módulo 3. Planeación de mercadotecnia política",
  semestre: "Tercer semestre",
  teacher: "Mtro. Carlos Alejandro Olvera Jiménez",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Planear estratégicamente la estructura mercadológica política basándose en las necesidades institucionales considerando la competitividad y calidad del partido o candidato político, siempre con el enfoque en la información obtenida por parte del electorado.",
  competencies: [
    "Empatía con la sociedad",
    "Creatividad e innovación",
    "Capacidad analítica",
    "Capacidad de organización",
    "Ética",
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

    /* 1. Unidad principal (según el material: Unidad 4) */
    {
      id: "1",
      numbering: "Unidad 4",
      title: "Planeación de mercadotecnia política",
      content: [
        {
          type: "paragraph",
          text: "La planeación de mercadotecnia política es un proceso sistemático de investigación, análisis y diseño estratégico cuyo fin es posicionar una imagen, candidato o partido en la mente del electorado. Parte del estudio riguroso de necesidades, gustos y preferencias para identificar oportunidades y amenazas, y se traduce en tácticas verificables que conectan mensaje y problemas públicos sentidos. A diferencia de la improvisación táctica, esta planeación establece objetivos medibles, define públicos y rutas de contacto, asigna recursos y consolida mecanismos de seguimiento y mejora continua. En términos operativos, integra herramientas de diagnóstico (encuestas, grupos focales, análisis de competencia) y un marco de decisión que liga cada acción a una hipótesis y a un indicador. El resultado es doble: claridad estratégica —qué se busca y por qué— y trazabilidad —cómo sabremos que avanzamos—. En contextos competitivos y de alta polarización, planear con evidencia no es un lujo: es la condición para sostener credibilidad, eficiencia del gasto y aprendizaje organizacional a lo largo del ciclo de campaña y de gobierno.",
        },
        {
          type: "paragraph",
          text: "El valor de la planeación emerge de su capacidad para articular estrategia, competitividad y calidad. Estrategia significa elegir: priorizar segmentos, problemas y mensajes, renunciando explícitamente a iniciativas de bajo impacto o alto costo reputacional. Competitividad entraña diferenciarse con propuestas viables y contrastables; exige conocer fortalezas y debilidades propias, así como el posicionamiento y repertorios narrativos del adversario. Calidad, por su parte, no remite solo a piezas creativas; implica consistencia entre promesas, factibilidad técnica y estándares éticos: veracidad de datos, trato digno, cuidado de la privacidad y uso responsable de recursos. Cuando estos tres componentes se alinean, el efecto es acumulativo: crece la predisposición a escuchar, mejora la conversión de mensaje en apoyo y se reduce la volatilidad del voto blando. La planeación, entonces, opera como un contrato de desempeño: fija expectativas realistas, define hitos y protege la reputación al hacer visible el método con el que se decide, se ejecuta y se corrige.",
        },
        {
          type: "paragraph",
          text: "Metodológicamente, una ruta probada organiza la planeación en cuatro fases encadenadas. Fase 1, análisis de la situación: investigación de mercado (encuestas, sondeos rápidos, entrevistas, social listening), evaluación de imagen y mapeo de competencia; objetivo: formular un diagnóstico con hipótesis prioritarias. Fase 2, objetivos y estrategias: metas concretas, retadoras y medibles; definición del mensaje eje, arquitectura de submensajes y segmentación del público objetivo por pertinencia del problema y barreras de acceso. Fase 3, plan de acción: selección de canales (territoriales y digitales), calendario de hitos, materiales necesarios, presupuestos y matriz de responsables con entregables intermedios. Fase 4, implementación y seguimiento: ejecución disciplinada, monitoreo con tableros, evaluación de resultados y ciclos de mejora continua. Este encuadre evita el “activismo sin norte”: cada táctica deriva de una hipótesis y cada ajuste se sustenta en evidencia, fortaleciendo la coherencia entre promesa, operación y evaluación.",
        },
        {
          type: "paragraph",
          text: "Trasladar la lógica de servicio al cliente al ámbito político significa diseñar experiencias de relación que pongan a la ciudadanía en el centro. No se trata de eslóganes empáticos, sino de protocolos: escucha activa con retorno de información, tiempos de respuesta claros, rutas de solución a quejas y figuras de enlace capaces de cerrar el ciclo con evidencia. En campaña, ello implica detectar fricciones —mensajes confusos, trámites engorrosos, expectativas no atendidas— y corregirlas con microinnovaciones: formatos accesibles, lenguaje llano, convocatorias segmentadas y mecanismos de participación que eviten la captura por minorías ruidosas. En el gobierno, esta orientación se concreta en ventanillas únicas, servicios digitales medibles, enfoque omnicanal y estándares de trato digno. La consecuencia estratégica es decisiva: cuando las interacciones son cuidadas y consistentes, la narrativa de calidad deja de depender de la propaganda y empieza a descansar en la experiencia real de las personas.",
        },
        {
          type: "paragraph",
          text: "Finalmente, un sistema de información de mercadotecnia política soporta la toma de decisiones y el aprendizaje continuo. Combina fuentes internas (base de simpatizantes, CRM de contacto, métricas de piezas, costos por punto de alcance) y externas (encuestas, estudios, analítica de medios, datos abiertos) para construir tableros con indicadores de proceso y de resultado. La clave está en la pertinencia y oportunidad de los datos: series comparables, cortes temporales definidos y criterios de calidad. Con ese andamiaje, la campaña deja de ser una suma de ocurrencias y se vuelve un ciclo de hipótesis, experimentación y ajuste: se prueba un mensaje, se mide impacto por segmento y canal, y se decide escalar, iterar o retirar. Esta disciplina, lejos de restar creatividad, la potencia: libera tiempo de la dirección para decidir sobre evidencia y preservar la coherencia estratégica, al tiempo que habilita relatos de rendición de cuentas que la ciudadanía puede verificar.",
        },

        /* Acordeón (3 niveles) */
        {
          type: "accordion",
          header: "Fases 1–2: diagnóstico y estrategia",
          open: false,
          text: "La Fase 1 construye un retrato honesto del terreno: qué preocupa, a quién y por qué; cómo nos perciben; qué hacen y dicen los competidores. No busca confirmar sesgos, sino tensionarlos con datos. Con ese insumo, la Fase 2 convierte información en elección estratégica: define metas medibles por segmento y decide el mensaje eje que articula propuestas, vocerías y tono. Aquí se elige dónde jugar —problemas y audiencias— y cómo ganar —ventajas distintivas y pruebas de factibilidad—. La regla de oro: menos es más; priorizar lo relevante y renunciar a lo accesorio.",
        },
        {
          type: "accordion",
          header: "Fases 3–4: plan de acción y mejora continua",
          open: false,
          text: "La Fase 3 aterriza la estrategia en un plan calendarizado: canales, piezas, responsables, presupuesto y riesgos con medidas de mitigación. La Fase 4 cierra el circuito con implementación disciplinada y monitoreo: tableros semanales, evaluaciones rápidas y ajustes documentados. Nada se ‘salva’ por intuición: lo que no funciona se corrige o se retira; lo que funciona se escala. La mejora continua es cultura, no evento: convierte cada interacción en aprendizaje y cada aprendizaje en una decisión trazable.",
        },
        {
          type: "accordion",
          header: "Competitividad, calidad y ética",
          open: false,
          text: "La diferenciación competitiva sin calidad ni ética es humo; la calidad sin competitividad es irrelevante. La planeación alinea las tres: promesas verificables, propuestas costeadas, tratamiento digno, protección de datos y comunicación veraz. Este estándar no solo reduce riesgos legales y reputacionales; también crea licencia social para decidir en contextos difíciles. La consigna operativa es clara: evidencia antes que ocurrencia, derechos antes que likes, aprendizaje antes que obstinación.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "1.1",
          numbering: "4.1",
          title: "Planeación estratégica corporativa",
          content: [
            {
              type: "paragraph",
              text: "La planeación estratégica corporativa en el ámbito político se ocupa de asegurar el rumbo de largo plazo del partido o institución más allá del ciclo electoral. Su propósito es traducir misión, visión y valores en objetivos medibles que guíen decisiones sobre posicionamiento, capacidades organizacionales y asignación de recursos. A diferencia de la táctica de campaña —intensa y de horizonte corto—, aquí la pregunta clave es qué capacidades debo construir hoy para competir y gobernar mejor en los próximos años: cuadros, sistemas de información, protocolos de integridad, alianzas y presencia territorial. El resultado esperado es una carta de navegación que prioriza iniciativas transformadoras, define indicadores de éxito intermedio y establece reglas de seguimiento con responsabilidad compartida.",
            },
            {
              type: "paragraph",
              text: "El proceso inicia con un diagnóstico estratégico del entorno (tendencias demográficas, tecnológicas, socioeconómicas y regulatorias), de los actores (competidores, aliados, grupos de interés) y de la propia organización (fortalezas, debilidades, activos tangibles e intangibles). Herramientas como PESTEL, análisis de competencia, mapas de poder y matrices FODA sirven para identificar oportunidades realistas y riesgos críticos. La clave es evitar tanto el voluntarismo como el fatalismo: la estrategia no adivina el futuro; prepara capacidades y opciones para distintos escenarios. Por ello, el diagnóstico debe basarse en series de datos, fuentes trianguladas y sesiones deliberativas que generen hipótesis contrastables.",
            },
            {
              type: "accordion",
              header: "Herramientas de planeación (uso operativo)",
              open: false,
              text: "• PESTEL: filtra señales del entorno que impactan legitimidad y viabilidad. • FODA: alinea oportunidades con fortalezas reales. • Cinco Fuerzas (adaptadas): intensidad competitiva, sustitutos comunicacionales, barreras de entrada en territorios, poder de grupos de interés y reglas del árbitro electoral. • Mapa de actores: intereses, recursos y probables alianzas. • Cuadro de mando integral: traduce la visión en metas financieras (eficiencia de gasto), de ciudadanía/clientes (confianza y satisfacción), procesos internos (tiempos de respuesta), y aprendizaje (formación de cuadros, innovación y cultura ética). Todo con responsables y periodicidad de revisión.",
            },
            {
              type: "paragraph",
              text: "Definir objetivos corporativos implica priorizar pocos frentes con alto impacto: fortalecer presencia en territorios clave; elevar la confianza ciudadana mediante protocolos de transparencia; profesionalizar vocerías y equipos de campaña; construir una base de datos trazable y segura; y desarrollar una oferta programática factible. Cada objetivo demanda metas (porcentaje de presencia, variación en indicadores de percepción), proyectos (por ejemplo, una escuela de liderazgo y servicio público), y un calendario que combine victorias tempranas con reformas de fondo. Sin esta priorización, los esfuerzos se diluyen y la organización queda atrapada en el cortoplacismo.",
            },
            {
              type: "image",
              src: "https://softgrade.mx/wp-content/uploads/2020/04/La_Cadena_de_Valor.jpg",
              alt: "Esquema de planeación estratégica corporativa",
              caption:
                "De visión a tableros de control: cadena de valor estratégica.",
            },
            {
              type: "paragraph",
              text: "La gobernanza de la estrategia requiere estructuras claras: un comité estratégico con mandato para decidir y rendir cuentas; rutas de escalamiento para resolver bloqueos; y tableros que muestren el avance con indicadores de proceso y resultado. La transparencia interna reduce la política de pasillos y eleva la cooperación entre áreas (organización, comunicación, finanzas, formación). Además, conviene institucionalizar revisiones trimestrales y una evaluación anual independiente que mida impacto, aprendizaje y pertinencia, alimentando el ciclo de mejora continua.",
            },
            {
              type: "accordion",
              header: "Corporativa vs. campaña: diferencias clave",
              open: false,
              text: "Horizonte: años vs. meses. Éxito: capacidades y reputación sostenidas vs. votos inmediatos. Métrica central: licencia social y calidad institucional vs. share-of-voice y preferencia coyuntural. Riesgo: acomodos que dañan la marca a largo plazo. Sin estrategia corporativa, las campañas ganadas pueden convertirse en gobiernos frágiles; con ella, incluso derrotas electorales dejan capacidades acumuladas para la siguiente oportunidad.",
            },
            {
              type: "paragraph",
              text: "Por último, la estrategia corporativa en política es inseparable de la integridad. El compromiso con la legalidad, la rendición de cuentas y la protección de datos no es un adorno reputacional: reduce riesgos judiciales, mejora la eficiencia del gasto y sostiene la confianza. Una organización que aprende, mide y corrige sobre evidencia resiste mejor la volatilidad y capitaliza oportunidades con agilidad. Este marco de largo plazo habilita —y disciplina— la planeación de mercadotecnia política que se despliega en campaña.",
            },
          ],
        },
        {
          id: "1.2",
          numbering: "4.2",
          title: "Mercadotecnia: estrategias, competitividad y calidad",
          content: [
            {
              type: "paragraph",
              text: "La mercadotecnia política ordena cómo se crea, comunica y entrega valor público a audiencias específicas. Estrategia, competitividad y calidad forman un triángulo que se refuerza: la estrategia elige dónde jugar y cómo ganar; la competitividad diferencia la propuesta frente a alternativas; la calidad asegura que la promesa sea veraz, pertinente y ejecutable. El punto de partida es una propuesta de valor clara: qué problema público se aborda, con qué soluciones y con qué evidencia de factibilidad. Sin propuesta, la comunicación cae en slogans; sin evidencia, en propaganda.",
            },
            {
              type: "paragraph",
              text: "Posicionar una candidatura exige una arquitectura de mensajes que conecte la idea fuerza con submensajes por segmento: jóvenes, mujeres, trabajadores, sector productivo, comunidades. Cada segmento recibe pruebas específicas (metas, costos, tiempos, responsables) y formatos accesibles. La estrategia multicanal combina territorio (asambleas, casa por casa, liderazgos comunitarios) con medios y entornos digitales (radio, prensa, redes sociales, mensajería), cuidando coherencia de tono y datos. La consistencia entre lo que se promete y lo que se puede implementar es el primer criterio de calidad.",
            },
            {
              type: "accordion",
              header: "Estrategias de mercadotecnia (marco rápido)",
              open: false,
              text: "Penetración (activar simpatías existentes), desarrollo de mercado (entrar en territorios/segmentos nuevos), desarrollo de ‘producto’ político (nuevas propuestas o atributos de liderazgo), y reposicionamiento (reencuadrar percepciones). En todos los casos: segmentar con datos, elegir mensajes prueba-error, y medir impacto incremental por canal y audiencia.",
            },
            {
              type: "paragraph",
              text: "La competitividad no se agota en creatividad. Exige análisis de la competencia —narrativas, rutas de movilización, vocerías—, costos de oportunidad y riesgos reputacionales. Diferenciarse puede significar evidenciar capacidades (historial de cumplimiento), innovar en la entrega (servicios públicos medibles), o elevar el estándar ético (transparencia radical). Cada ventaja requiere pruebas observables: indicadores abiertos, contratos, cronogramas, mecanismos de participación y seguimiento ciudadano. La ventaja que no puede demostrarse, no existe.",
            },
            {
              type: "image",
              src: "https://www.webyempresas.com/wp-content/uploads/2024/10/Jerarquias-de-las-Estrategias-Organizacionales.jpg",
              alt: "Triángulo estrategia-competitividad-calidad",
              caption:
                "Alineación: propuesta → evidencia → experiencia del ciudadano.",
            },
            {
              type: "paragraph",
              text: "Calidad en mercadotecnia política implica también cuidar la experiencia de contacto: accesibilidad del lenguaje, tiempos de respuesta, trato digno y protección de datos personales. Los tableros de calidad monitorean quejas y tiempos de resolución; los protocolos de crisis anticipan escenarios de desinformación y definen vocerías y pruebas. La credibilidad se construye con hábitos: documentar, verificar y corregir públicamente cuando procede.",
            },
            {
              type: "accordion",
              header: "Criterios de calidad y credibilidad",
              open: false,
              text: "Veracidad (fuentes citadas y verificables), factibilidad (costeo y competencias), coherencia (promesa ↔ trayectoria), experiencia (trato y tiempos), seguridad (datos personales), y evaluación independiente. La calidad no compite con la persuasión: la hace sostenible.",
            },
            {
              type: "paragraph",
              text: "Finalmente, medir es decidir: alcance útil, custo por punto de intención, tasa de conversación (interacciones que derivan en organización real), y variación de percepción por atributo (confianza, capacidad, cercanía). Con estos datos se ajusta la mezcla de canales, se escala lo que funciona y se retira lo que no. La mercadotecnia basada en evidencia evita el activismo sin norte y protege el activo más escaso en política: la confianza.",
            },
          ],
        },
        {
          id: "1.3",
          numbering: "4.3",
          title: "La estrategia al servicio del cliente (electorado)",
          content: [
            {
              type: "paragraph",
              text: "Llevar la lógica de servicio al ‘cliente’ al terreno político implica diseñar relaciones que pongan a la persona ciudadana en el centro. Se parte del ‘viaje del elector’: cómo descubre, compara, decide y evalúa a una candidatura o gobierno. En cada punto de contacto —territorio, teléfono, ventanilla, redes, medios— se definen estándares de experiencia: claridad del mensaje, trato digno, tiempos de respuesta y resolución efectiva. Esta orientación trasciende la simpatía discursiva y se concreta en protocolos, métricas y responsabilidades.",
            },
            {
              type: "paragraph",
              text: "La escucha activa es la primera pieza. No basta con ‘tomar nota’: se requiere cerrar el ciclo con devoluciones claras: qué se hará, cuándo y quién responde. Mecanismos como encuestas breves, entrevistas semiestructuradas, foros temáticos, social listening y mesas con grupos afectados sirven para identificar fricciones reales. El objetivo es convertir percepciones en evidencia y evidencia en micro-decisiones de mejora que la gente pueda notar. Cuando la ciudadanía constata cambios pequeños pero consistentes, crece la confianza.",
            },

            {
              type: "paragraph",
              text: "Un sistema de CRM cívico ordena la relación: historial de contactos, solicitudes, compromisos y seguimiento, con permisos diferenciados y protección de datos. Integrar CRM con analítica de mensajes y métricas de territorio permite priorizar acciones y personalizar la comunicación sin caer en prácticas invasivas. La accesibilidad es innegociable: lenguaje llano, formatos alternativos, traducción y canales inclusivos para personas con discapacidad o con conectividad limitada.",
            },
            {
              type: "accordion",
              header: "Beneficios esperados (valor público)",
              open: false,
              text: "1) Confianza: coherencia entre lo prometido y lo hecho. 2) Eficiencia: menos reprocesos y mejores tiempos de respuesta. 3) Participación: ciudadanía que aporta datos y soluciones. 4) Reputación: prueba viva de calidad, más allá de la propaganda. 5) Aprendizaje: cada interacción alimenta mejoras futuras. El servicio bien diseñado convierte a la comunidad en aliada de la ejecución.",
            },
            {
              type: "paragraph",
              text: "Diseñar servicio en política exige cuidar también la ética de la interacción. No todo lo técnicamente posible es moralmente aceptable: segmentar no autoriza discriminar; personalizar no autoriza invadir privacidad; persuadir no autoriza engañar. Protocolos de uso de datos, consentimiento informado, límites a micro-targeting sensible y auditorías independientes son salvaguardas mínimas. La integridad en el trato cotidiano protege la legitimidad de fondo.",
            },
            {
              type: "accordion",
              header: "Desafíos y limitaciones (cómo anticiparlos)",
              open: false,
              text: "Capacidad operativa limitada, asimetrías de información, captura por minorías ruidosas, desinformación, y sesgos en el diseño. Mitigaciones: priorización con datos, reglas de participación, transparencia radical de criterios, verificación de información y evaluación independiente. El objetivo no es eliminar el conflicto, sino gestionarlo con reglas claras y justas.",
            },
            {
              type: "paragraph",
              text: "En síntesis, servicio al electorado significa transformar la comunicación en experiencia verificable. Los equipos que miden tiempos, resuelven fricciones y comunican con evidencia convierten simpatías difusas en compromiso organizado. La diferencia competitiva deja de descansar en piezas creativas y aterriza en la vivencia cotidiana: ‘me escucharon, me explicaron, cumplieron’. Esa memoria de calidad es el mejor antídoto contra la volatilidad del apoyo.",
            },
          ],
        },
        {
          id: "1.4",
          numbering: "4.4",
          title: "Planeación institucional",
          content: [
            {
              type: "paragraph",
              text: "La planeación institucional, aplicada al ámbito político, es el proceso sistemático para definir y alcanzar objetivos de largo plazo que fortalezcan la capacidad del partido o de la organización para cumplir su misión con eficacia y legitimidad. Implica traducir visión y valores en metas medibles, seleccionar prioridades estratégicas y ordenar recursos humanos, financieros y comunicacionales. A diferencia del ciclo corto de campaña, la planeación institucional evita el cortoplacismo y construye capacidades: cuadros formados, procesos estandarizados, sistemas de información confiables y mecanismos de evaluación que sobreviven a los calendarios electorales. En este sentido, la planeación institucional actúa como el “sistema operativo” de la organización política: alinea estructuras, personas y procesos con resultados verificables, minimiza la improvisación y facilita que cada proyecto—incluidas las campañas—se ejecute con disciplina, transparencia y sentido público.",
            },
            {
              type: "paragraph",
              text: "Su punto de partida es un diagnóstico integral del entorno y de la organización. En el entorno, se analizan tendencias demográficas, económicas, tecnológicas y regulatorias; se mapean actores y grupos de interés; y se identifican oportunidades y riesgos. En la organización, se evalúan fortalezas y debilidades en liderazgo, talento, finanzas, comunicación, territorialidad y cultura ética. Con base en esa evidencia se formulan hipótesis, se priorizan problemas y se eligen pocas apuestas de alto impacto. Las herramientas citadas en la literatura—matriz FODA/DAFO, análisis de cinco fuerzas adaptado, mapas de estrategia, matriz BCG para portafolios de programas—no valen por sí mismas: su valor está en disciplinar la conversación directiva, revelar supuestos y crear trazabilidad entre decisiones y resultados.",
            },
            {
              type: "accordion",
              header: "Pasos clave de la planeación institucional",
              open: false,
              text: "1) Diagnóstico: entorno, actores, capacidades internas. 2) Definición de visión y metas a 3–5 años. 3) Selección de iniciativas estratégicas con criterios de impacto y factibilidad. 4) Diseño de portafolio con responsables, cronograma y presupuesto. 5) Gobierno de la estrategia: comités, reglas de decisión y tableros de control. 6) Evaluación anual e iteración. Cada paso debe generar artefactos verificables—no solo enunciados—para facilitar la rendición de cuentas y la mejora continua.",
            },
            {
              type: "paragraph",
              text: "Una planeación institucional robusta incorpora gestión de riesgos y estándares de integridad. En política, la reputación es tan crítica como la solvencia técnica: por ello se instituye una matriz de riesgos (operativos, legales, reputacionales) con medidas de mitigación, protocolos de crisis, umbrales de alerta y rutas de escalamiento. En paralelo, se definen políticas de datos, conflicto de interés, transparencia presupuestal y compras, así como procedimientos de auditoría. Estas salvaguardas no frenan la acción; la hacen sostenible. Los indicadores de éxito combinan resultados de percepción—confianza, cercanía, credibilidad—con métricas de proceso—tiempos de respuesta, cobertura de servicios, productividad territorial—y de aprendizaje—innovaciones probadas, profesionalización de cuadros.",
            },
            {
              type: "image",
              src: "https://bscdesigner.com/es/wp-content/uploads/2019/10/8-pasos-para-crear-un-mapa-estrategico.png",
              alt: "Mapa estratégico institucional",
              caption:
                "De visión a iniciativas: cadena de valor institucional.",
            },
            {
              type: "paragraph",
              text: "Finalmente, la planeación institucional orquesta el vínculo entre estrategia, presupuesto y personas. Cada iniciativa estratégica se desdobla en proyectos con responsables, entregables y costos; se calendarizan hitos y evaluaciones intermedias; y se anclan incentivos a desempeño (reconocimientos, desarrollo, rotaciones). El presupuesto deja de ser incremental y se vuelve programático: financia lo prioritario, no lo heredado. Asimismo, la comunicación interna asegura sentido compartido: por qué se eligió lo elegido, qué se espera de cada área y cómo se reconocerá el avance. Cuando esta lógica se mantiene viva—con revisiones trimestrales y ajustes informados—la organización gana resiliencia, aprende de sus errores y se legitima por resultados observables.",
            },
            {
              type: "accordion",
              header: "Herramientas y usos recomendados",
              open: false,
              text: "FODA/DAFO para priorización; mapas de actores para pactos y contención; matriz BCG para portafolios de programas; OKR/BSC para traducir metas en indicadores; y revisión estratégica anual externa para evitar la autocomplacencia. El criterio rector: cada herramienta debe producir decisiones, no solo gráficos.",
            },
          ],
        },
        {
          id: "1.5",
          numbering: "4.5",
          title: "Aplicación de la mercadotecnia política",
          content: [
            {
              type: "paragraph",
              text: "Aterrizar la mercadotecnia política significa convertir la estrategia en una operación medible: objetivos concretos, públicos priorizados, arquitectura de mensajes, mezcla de canales, cronograma con hitos y evaluación. Una campaña efectiva inicia con una hipótesis de valor (“qué problema resolvemos y cómo lo demostramos”) y la descompone en submensajes por segmento. Cada pieza creativa debe probar una afirmación con evidencia (datos, casos, compromisos costeados) y una llamada a la acción plausible. La logística integra frentes territoriales y digitales; articula movilización con vocerías; y establece protocolos de respuesta para objeciones y crisis. El objetivo no es solo persuadir: es construir confianza mediante experiencias de contacto claras, respetuosas y consistentes.",
            },
            {
              type: "paragraph",
              text: "Un ejemplo operativo típico contempla objetivos de alcance útil y variación de intención de voto en segmentos críticos, con metas temporales por corte quincenal. El público se estratifica por territorio y demografía, pero también por problema sentido (seguridad, empleo, servicios). El mensaje eje se traduce en propuestas con pruebas (metas, costos, responsables y tiempos), y se adapta por canal. La mezcla incluye casa por casa, asambleas, medios tradicionales, redes sociales, mensajería y eventos; cada canal tiene indicadores de insumo (piezas, contactos), de proceso (interacciones, tiempos de respuesta) y de resultado (cambios de percepción e intención). El cronograma prevé picos creativos, ventanas de pauta, debates y cierres; y el presupuesto se asigna con criterios de costo-efectividad marginal.",
            },
            {
              type: "accordion",
              header: "Ejemplo de plan mínimo viable",
              open: false,
              text: "Semana 1–2: lanzamiento y escucha intensiva; mapa de objeciones. Semanas 3–4: iteración de mensaje por segmento; A/B en piezas digitales; primeras asambleas temáticas. Semanas 5–6: escalamiento de lo que funcionó; alianzas con liderazgos; contenidos generados por la ciudadanía. Semanas 7–8: debates, comparativos, auditoría de promesas y cierre con llamados a verificación de propuestas.",
            },
            {
              type: "paragraph",
              text: "La coordinación inter-áreas es vital: finanzas, comunicación, territorio, jurídica y datos deben operar sobre un mismo tablero de control. La gestión de riesgos incluye protocolos para desinformación, ataques a la integridad del equipo y contingencias logísticas. Se definen umbrales de alerta: variaciones negativas en atributos clave, caídas de alcance útil o tiempos de respuesta excesivos. Ante desvíos, la regla es aprender rápido: retirar lo que no funciona, reforzar lo que sí y documentar el porqué. Al cierre, una evaluación post-mortem—con métricas, costos y lecciones—retroalimenta la planeación institucional para conservar capacidades y corregir brechas.",
            },
            {
              type: "image",
              src: "https://www.slideteam.net/media/catalog/product/cache/1280x720/m/a/marketing_campaign_performance_kpi_dashboard_slide01.jpg",
              alt: "Tablero de campaña con KPIs",
              caption:
                "Del mensaje al indicador: tablero de control de campaña.",
            },
            {
              type: "paragraph",
              text: "En la aplicación, la ética es condición de calidad. La persuasión legítima exige veracidad, respeto a derechos y protección de datos. Se prohíben prácticas invasivas o discriminatorias —microsegmentación sensible sin consentimiento, difusión de información engañosa—. La transparencia en contratos y gastos fortalece la licencia social. Además, se establecen mecanismos de participación ciudadana: buzones de propuestas, observatorios, contralorías sociales y auditorías independientes. Estas prácticas elevan la credibilidad, diferencian la oferta y reducen la volatilidad del apoyo. En suma, la ejecución es tanto técnica como moral: resultados medibles con procesos que honran a la ciudadanía.",
            },
            {
              type: "accordion",
              header: "Riesgos y mitigaciones frecuentes",
              open: false,
              text: "Saturación del mensaje: simplificar y variar formatos. Desalineación entre promesa y factibilidad: pruebas y costeo público. Dependencia de un solo canal: portafolio multicanal y redundancias. Crisis reputacional: protocolo de vocerías y verificación. Fatiga de equipos: rotaciones y cuidado psicosocial. Sin aprendizaje no hay ventaja sostenible.",
            },
          ],
        },
        {
          id: "1.6",
          numbering: "4.6",
          title: "Sistema de información de mercadotecnia política",
          content: [
            {
              type: "paragraph",
              text: "Un sistema de información de mercadotecnia política (SIMP) integra fuentes internas y externas para apoyar la toma de decisiones, monitorizar el entorno y medir resultados. Las fuentes internas incluyen bases de simpatizantes, CRM de contacto, métricas de piezas y costos por punto de alcance; las externas comprenden encuestas, grupos focales, analítica de medios y redes, datos abiertos y estudios académicos. Su propósito es convertir datos en inteligencia accionable: detectar oportunidades, anticipar riesgos y evaluar impacto. Para lograrlo, el SIMP establece estándares de calidad de datos (validez, actualidad, consistencia), define responsables y permisos, y automatiza tableros con indicadores de proceso y de resultado; no solo muestra números, los explica y vincula a decisiones.",
            },
            {
              type: "paragraph",
              text: "El diseño del SIMP parte de preguntas estratégicas: qué necesitamos saber, para qué, con qué frecuencia y con qué nivel de desagregación. Se construyen diccionarios de datos, se definen claves únicas (personas, territorios, piezas), y se armonizan catálogos para cruzar fuentes. En campañas, la oportunidad de la información es crítica: cortes semanales para tableros ejecutivos, diarios para operación y trimestrales para evaluación profunda. La seguridad y privacidad son innegociables: cifrado, control de accesos, minimización de datos y auditorías. Además, se documentan supuestos y se versionan modelos para evitar ‘magia’ analítica: todo cálculo debe ser reproducible.",
            },
            {
              type: "accordion",
              header: "Fuentes internas vs. externas",
              open: false,
              text: "Internas: CRM, asistencia a eventos, tiempos de respuesta, costos, productividad territorial. Externas: encuestas, sondeos, monitoreo de medios y redes, datos abiertos, estudios sectoriales. Las internas permiten gestionar desempeño; las externas contextualizan y comparan. La potencia surge de cruzarlas para entender causa–efecto.",
            },
            {
              type: "paragraph",
              text: "La medición se organiza en tres planos. En proceso: alcance útil por segmento y canal, frecuencia efectiva, interacción cualificada y tiempos de respuesta. En resultados intermedios: variación de atributos (confianza, capacidad, cercanía), tasa de conversión de interacción a organización y costo por punto de intención. En resultados finales: votos, participación y cumplimiento de promesas verificables. Cada indicador necesita meta, línea base, método de cálculo y responsable. La lectura se acompaña de narrativas causales y pruebas de robustez (sensibilidades, comparativos históricos, controles por territorio) para que los ajustes sean fundados y no espasmódicos.",
            },
            {
              type: "image",
              src: "https://media.licdn.com/dms/image/v2/D5612AQHMuVL9LnWQ-Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707356707837?e=2147483647&v=beta&t=GGMXj07EnJYtLhRD3UJx50s7yfiZPdmcAhCkHMZ61Yk",
              alt: "Flujo del sistema de información",
              caption:
                "Captura → integración → análisis → decisión → aprendizaje.",
            },
            {
              type: "paragraph",
              text: "El SIMP favorece el aprendizaje organizacional: instala ciclos de hipótesis, prueba y ajuste. Se recomienda un repositorio de experimentos (qué se probó, dónde, a quién, con qué pieza, resultado) y una gobernanza de datos con comité mixto (comunicación, territorio, finanzas, jurídica, tecnología). Así se evitan ‘verdades paralelas’ y se sostienen decisiones coherentes entre áreas. Finalmente, la transparencia proactiva—publicar metodologías y ciertos indicadores—eleva la confianza ciudadana y blinda frente a desinformación. En política, el mejor relato es el que puede verificarse: tableros, métodos y resultados abiertos que demuestran que la estrategia se decide y corrige con evidencia.",
            },
            {
              type: "accordion",
              header: "Indicadores recomendados",
              open: false,
              text: "Cobertura útil por segmento y canal; tasa de respuesta en <24 h; variación de atributos priorizados; costo por punto de intención; participación en eventos; cumplimiento de microcompromisos; y exactitud de proyecciones vs. resultados. Si no se mide, no se gestiona; si no se explica, no se aprende.",
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
          href: "https://www.youtube.com/watch?v=M2TgHrsM5vs", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "9 pasos sencillos para crear un plan de marketing práctico https://www.youtube.com/watch?v=M2TgHrsM5vs",
            "¿Cómo hacer una campaña política efectiva? https://www.tiktok.com/@guioquijano/video/7267591237362928902",
            "El marketing político y su importancia en 2024: un súper año electoral (Descarga) https://riunet.upv.es/handle/10251/38381",
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
            "Bobbio, N. (1993). *Ética y política.* Barcelona: Gedisa.",
            "Clow, K. E. (2010). *Publicidad, promoción y comunicación integral en marketing.* Ciudad de México: Pearson Educación.",
            "IA, M. (agosto de 2024). *Asistente de Inteligencia Artificial de Meta.*",
            "Ismael Crespo, A. G. (2021). *Manual de la comunicación política y estrategias de campaña.* Madrid: Biblos.",
            "Keller, K. y. (2012). *Dirección de marketing.* Ciudad de México: Pearson Educación.",
            "Portes, M. (1980). *Competitive strategy: Techniques for analysing industries and competitors.* New York: Free Press.",
            "Rodríguez, H. E. (2017). *Tecnologías de la información y comunicación y crecimiento económico.* Ciudad de México: Economía Informa UNAM.",
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
