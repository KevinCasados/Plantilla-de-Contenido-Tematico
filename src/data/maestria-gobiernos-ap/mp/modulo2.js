/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAP",
  courseId: "mercadotecnia-politica",
  id: "mgap-mercpol-mod2",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Mercadotecnia política",
  title: "Módulo 2. Campo político y ética",
  semestre: "Tercero",
  teacher: "Mtro. Carlos Alejandro Olvera Jiménez",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Establecer las bases del campo político bajo el conocimiento del entorno, clasificación y, sobre todo, principios éticos que deben regir la política en todos sus niveles, con la capacidad de aprender las mejores prácticas de los adversarios políticos.",
  competencies: [
    "Valores bien cimentados",
    "Capacidad de cambio de paradigma político",
    "Criterio",
    "Objetividad",
    "Facultad de servir",
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
      title: "Campo político y ética",
      content: [
        {
          type: "paragraph",
          text: "El campo político puede entenderse como el espacio donde se articulan instituciones, actores, ideologías y procedimientos orientados a la toma de decisiones públicas. En ese espacio concurren partidos, gobiernos, organismos autónomos, grupos de presión y ciudadanía organizada que compiten por credibilidad y capacidad de incidencia. Su dinámica no es lineal: combina reglas formales (marco jurídico, calendarios electorales, financiamiento) con prácticas informales (coaliciones, negociación, opinión pública). Desde la perspectiva de la mercadotecnia política, observar el campo exige distinguir entre hechos, percepciones y valores; la estrategia es viable cuando se ancla en información verificable y en una lectura ética de los fines y medios. Por ello, la ética pública deja de ser un apéndice para convertirse en criterio rector: establece límites, evita la manipulación, fomenta transparencia y orienta la comunicación hacia la rendición de cuentas. En este marco, la narrativa política debe explicar por qué un proyecto es socialmente valioso y cómo se materializan sus promesas. La calidad de la acción política se reconoce no solo por la eficacia para ganar apoyos, sino por la coherencia entre principios, propuestas y comportamiento institucional durante y después de las campañas.",
        },
        {
          type: "paragraph",
          text: "Comprender el campo político implica mapear instituciones (poderes del Estado, organismos electorales, entes de control), así como actores con intereses y repertorios de acción diversos: partidos, candidaturas, liderazgos sociales, medios, académicos, organizaciones civiles y ciudadanía digital. Cada actor opera con recursos simbólicos (marcos interpretativos, ideologías) y materiales (estructura, financiamiento, redes), y ocupa posiciones variables de influencia. La interacción se procesa en la esfera pública mediante debates, campañas, consultas y dispositivos de participación; allí, el discurso y la evidencia conviven con emociones y sesgos cognitivos, por lo que el diseño de mensajes debe ser claro, verificable y respetuoso de la dignidad de las personas. Esta arquitectura relacional explica por qué idénticos mensajes producen efectos heterogéneos: dependen del territorio, del historial de confianza y del clima informativo. La comunicación responsable reconoce incertidumbre, limita promesas maximalistas y establece compromisos auditablemente alcanzables. Así, la legitimidad se construye en dos vías: por desempeño (resultados) y por procedimiento (cumplimiento de reglas), y ambas requieren gestión deliberada para sostener consenso y gobernabilidad.",
        },
        {
          type: "accordion",
          header: "Marco conceptual del campo político",
          open: false,
          text: "El campo político es un sistema de relaciones en torno al poder y al bien común. Se compone de instituciones, actores y normas que canalizan la competencia por definir problemas, priorizar soluciones y distribuir recursos. Sus componentes clave incluyen: a) reglas del juego (constitución, leyes electorales, financiamiento y fiscalización); b) organización de la competencia (partidos, coaliciones, candidaturas, grupos de interés); c) circulación de información (medios, redes, foros deliberativos); y d) mecanismos de control (órganos electorales, auditorías, contrapesos). Analizarlo exige distinguir fines (legitimidad, derechos, desarrollo) de medios (campañas, negociación, movilización) e incorporar criterios éticos que orienten la acción.",
        },
        {
          type: "paragraph",
          text: "Una pieza central del campo político son los partidos y su diversidad. Pueden clasificarse por ideología (conservadores, liberales, socialdemócratas, entre otros), por estructura (masivos, de cuadros, de notables), por representación (nacionales, regionales, locales) o por grado de radicalismo (moderados, de ruptura). Sus finalidades abarcan articular demandas, formar cuadros, organizar la competencia y producir programas de gobierno. Junto a ellos actúan grupos de presión que, mediante vías legítimas, buscan influir en la decisión pública; se distinguen de grupos de choque que recurren a acciones confrontativas y, en ocasiones, al margen de la ley. Reconocer estas diferencias no solo facilita la estrategia de comunicación, sino que previene errores de encuadre que erosionan reputación. Desde la mercadotecnia política, el análisis combina mapeo de intereses, lectura de riesgos y construcción de propuestas verificables para que la contienda no derive en promesas inalcanzables ni en narrativas desinformativas. La evaluación ética criba tácticas que vulneren derechos o degraden la deliberación democrática.",
        },
        {
          type: "accordion",
          header: "Mapa de actores y relaciones de influencia",
          open: false,
          text: "El mapeo estratégico identifica actores clave, sus intereses, capacidades y vínculos. Se recomienda: 1) listar instituciones decisoras y de contrapeso; 2) perfilar partidos, liderazgos y coaliciones; 3) reconocer grupos de interés legítimos y sus repertorios; 4) trazar la red mediática y digital que filtra agenda y amplifica mensajes; 5) ubicar ciudadanía organizada y públicos específicos. Cada relación se valora por influencia, alineamiento y accesibilidad. El resultado es una cartografía que permite priorizar esfuerzos, seleccionar vocerías y diseñar canales de diálogo que reduzcan conflicto y mejoren aceptación de políticas.",
        },
        {
          type: "paragraph",
          text: "Los principios políticos —dignidad, justicia, legalidad, responsabilidad, transparencia y solidaridad— dotan de sentido al ejercicio del poder y orientan decisiones en contextos de escasez y presión. La ética pública no inhibe la eficacia; la encauza: define límites, exige verificación de datos, obliga a medir efectos distributivos y a rendir cuentas. Traducida a práctica, la ética implica campañas sin desinformación, financiamiento trazable, respeto a la privacidad y comunicación que explique costos y beneficios de las propuestas. En paralelo, la ciudadanía evalúa tanto resultados como procedimientos; por ello, la coherencia entre discurso y conducta es insumo estratégico. La formación de criterio dentro de equipos políticos —mediante códigos de integridad, protocolos de conflicto de interés y auditorías rápidas— se convierte en ventaja competitiva sostenible, pues protege la promesa pública frente a la volatilidad informativa y a incentivos de corto plazo.",
        },
        {
          type: "accordion",
          header: "Ética aplicada y lineamientos de integridad",
          open: false,
          text: "Operativizar la ética exige reglas claras y verificables: prohibición de desinformación, cumplimiento de topes de gasto, protección de datos personales, transparencia proactiva y canales de denuncia. Se sugiere: códigos de conducta con sanciones, control de calidad de piezas de comunicación (fact-checking), trazabilidad de acuerdos y publicación de indicadores de avance. La integridad se comunica con hechos y documentos, no solo con eslóganes.",
        },
        {
          type: "paragraph",
          text: "Una herramienta útil para elevar estándares es el benchmarking: observar, aprender y adaptar mejores prácticas de otros actores e instituciones, dentro del marco normativo local. El proceso incluye definir objetivos, seleccionar referentes pertinentes, comparar procesos y resultados, e incorporar mejoras con indicadores claros. En política, puede abarcar profesionalización de vocerías, protocolos de crisis, uso responsable de datos, mecanismos de participación y rendición de cuentas. El cuidado ético es condición de transferencia: no todo lo que ‘funciona’ es legítimo. La adopción responsable prioriza derechos, legalidad y evidencia. Cerrando el ciclo, el aprendizaje se documenta y comparte para consolidar cultura organizacional, de modo que la mejora sobreviva a los periodos electorales y se traduzca en políticas públicas más justas, eficaces y aceptadas socialmente.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        /* Bloque 2. Campo político */
        {
          id: "1.1",
          numbering: "2",
          title: "Campo político",
          content: [
            {
              type: "paragraph",
              text: "El campo político es el espacio donde se articulan poder, decisiones colectivas y gestión de los asuntos públicos. No es solo un mapa de instituciones formales; también integra reglas no escritas, creencias, ideologías, discursos y prácticas que delimitan lo posible. En él interactúan partidos, gobiernos, órganos autónomos, organizaciones de la sociedad civil, medios, grupos de interés y ciudadanía, disputando agenda, legitimidad y recursos escasos. Desde una perspectiva operativa, comprender el campo político supone reconocer sus relaciones de fuerza, los incentivos que producen las normas y los patrones discursivos que organizan la competencia. Esta comprensión evita confundir la política con mera campaña: coloca al centro la disputa por fines públicos y la responsabilidad de convertir promesas en bienes tangibles.",
            },
            {
              type: "paragraph",
              text: "Las instituciones políticas cumplen un papel preponderante al fijar reglas del juego, coordinar actores y estabilizar expectativas. Gobiernos y poderes públicos definen política, asignan presupuesto y ejecutan; los partidos agregan preferencias y canalizan representación; los organismos electorales y de control garantizan equidad y legalidad; y las organizaciones no gubernamentales introducen vigilancia, experticia técnica o contrapesos ciudadanos. La interacción entre estos vértices no es estática: cambia con reformas, ciclos electorales y crisis. Para el profesional de la comunicación y la mercadotecnia política, mapear esta trama institucional permite anticipar ventanas de oportunidad, restricciones regulatorias y puntos de veto que condicionan la viabilidad de cualquier estrategia.",
            },
            {
              type: "paragraph",
              text: "Junto a las instituciones, el campo político está poblado por actores: candidatos, dirigentes, militancia, liderazgos sociales, activistas, formadores de opinión y ciudadanía organizada o espontánea. Estos actores se movilizan en procesos como campañas, debates, negociaciones y coaliciones, donde se activan marcos interpretativos que buscan dotar de sentido a los problemas públicos. La competencia no se reduce a sumar votos; implica construir relatos verosímiles, demostrar capacidad de gobierno y sostener redes de apoyo territorial y digital. Por ello, la lectura del actor político exige atender motivaciones, alianzas, repertorios de acción y reputación, así como su inserción en estructuras organizativas y comunitarias.",
            },
            {
              type: "paragraph",
              text: "Las ideologías y los discursos ordenan la competencia al ofrecer explicaciones del mundo y orientaciones de política. En la práctica, el eje izquierda–centro–derecha funciona como atajo cognitivo para ubicar posturas en debates sobre igualdad, libertad, rol del Estado y cambio social; sin embargo, los clivajes reales son más complejos y pueden cruzar temas identitarios, territoriales, religiosos o ambientales. El comunicador político debe distinguir señales programáticas de meros rótulos estratégicos, así como traducir principios en propuestas medibles. En un ecosistema saturado de mensajes, la consistencia ideológica, la evidencia y el apego a derechos se vuelven activos reputacionales.",
            },
            {
              type: "paragraph",
              text: "El campo político también incluye la acción de grupos de presión —o de interés— que buscan influir en la decisión pública mediante cabildeo, movilización o campañas temáticas, y, en otro registro, grupos de choque que recurren a tácticas confrontativas o de acción directa. Distinguirlos es clave para diagnóstico y gestión de riesgos: mientras los primeros operan por canales institucionales y comunicación pública, los segundos pueden escalar el conflicto y trasladarlo al terreno del orden público. Para cualquier proyecto político, el mapeo de aliados, neutrales y opositores —con sus métodos, recursos y legitimidad— es condición para anticipar resistencias, construir coaliciones amplias y reducir costos sociales.",
            },
            {
              type: "paragraph",
              text: "Los principios y valores que deberían regir la política —legalidad, integridad, rendición de cuentas, respeto a derechos y búsqueda del bien común— funcionan como límites normativos y como ventaja competitiva. La ética no compite con la eficacia; la disciplina. En contextos de polarización y desinformación, sostener estándares de transparencia y veracidad eleva la credibilidad y genera licencia social para decidir. Además, ancla la comunicación en evidencia verificable, hace trazable el uso de recursos y facilita la evaluación distributiva de los resultados. En consecuencia, la estrategia político-comunicativa debe incorporar salvaguardas éticas y procedimientos de control desde su diseño.",
            },
            {
              type: "paragraph",
              text: "Desde la mercadotecnia política, el campo es el marco que convierte investigación, segmentación, propuesta de valor y narrativa en resultados. Conocer sus reglas y actores permite priorizar públicos, definir mensajes y seleccionar canales con pertinencia. El estudio de mercado identifica necesidades y expectativas; la segmentación perfila audiencias; el posicionamiento vincula oferta política y problemas sentidos; y el seguimiento con indicadores convierte la promesa en compromisos auditables. Así, la estrategia no solo persuade: también organiza la acción, coordina equipos y habilita la evaluación continua, preparando la entrada a los subtemas de clasificación de partidos, finalidades, grupos de presión, principios y clasificaciones de la política que se desarrollan a continuación.",
            },
          ],
          /* → Sub-subtemas (2.1 – 2.5) */
          subthemes: [
            {
              id: "1.1.1",
              numbering: "2.1",
              title: "Clasificación de los partidos políticos",
              content: [
                {
                  type: "paragraph",
                  text: "La clasificación de los partidos políticos permite ordenar un panorama complejo de organizaciones que compiten por el poder, median demandas sociales y articulan programas de gobierno. Una tipología clásica atiende a la ideología (conservadora, liberal, socialdemócrata, socialista, comunista, verde, entre otras) y ayuda a anticipar marcos de interpretación y prioridades de política pública. Otra tipología examina la estructura: partidos de masas con afiliación amplia y descentralización relativa; partidos de cuadros con núcleo reducido, profesionalizado y centralizado; y partidos de notables con liderazgo de élites y organización flexible. El nivel de representación también diferencia a los partidos nacionales, regionales o locales según su escala de competencia y la densidad territorial de su voto. Finalmente, el grado de radicalismo discrimina entre moderados (orientados al pacto y a cambios graduales) y radicales (proponen rupturas de alto impacto). Ninguna tipología agota la realidad: los partidos evolucionan, hibridan rasgos y se reconfiguran con el sistema electoral, el financiamiento y el comportamiento ciudadano. Por eso, la clasificación es un instrumento analítico y operativo: facilita mapeos, anticipa estrategias competitivas y ayuda a diseñar comunicación y alianzas con mayor precisión.",
                },
                {
                  type: "paragraph",
                  text: "En términos de campaña, la ideología condiciona el relato y el posicionamiento: partidos liberales pueden enfatizar libertades individuales y competencia; socialdemócratas, igualdad y cohesión social; conservadores, orden y continuidad. La estructura afecta la capacidad de movilización: una organización de masas soporta despliegues territoriales intensivos, mientras estructuras de cuadros privilegian vocerías técnicas y operaciones focalizadas. El nivel de representación define la escala del mensaje y la segmentación: nacional para agendas macro (crecimiento, seguridad social), regional para identidades productivas o culturales, y local para servicios públicos y proximidad. El radicalismo incide en el tono: proyectos moderados buscan mayorías, los radicales operan con núcleos duros y estrategias de ampliación selectiva. Estos rasgos encuentran límites en la legalidad y en la ética: la competencia se valida por reglas y por la calidad de la deliberación pública. De ahí que la mercadotecnia política responsable traduzca las tipologías a hipótesis accionables: cuál es la promesa central, qué evidencia la soporta, qué coaliciones son viables y cómo se sostendrá la gobernanza si se gana.",
                },
                {
                  type: "accordion",
                  header: "Criterios prácticos para tipificar partidos",
                  open: false,
                  text: "1) Ideología explícita y su consistencia programática. 2) Estructura (afiliación, mandos, descentralización). 3) Escala y densidad territorial del voto. 4) Grado de radicalismo y táctica de coalición. 5) Historia de gobierno y desempeño en políticas. 6) Cumplimiento legal y estándares éticos. Este checklist genera una matriz para comparar y proyectar escenarios de competencia y cooperación. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "En sistemas plurales, la convergencia programática produce partidos ‘catch-all’ con identidades menos nítidas. Allí, la diferenciación surge de la capacidad de ejecución, la probidad y el estilo de liderazgo. La comunicación debe evitar caricaturas ideológicas y priorizar la verificación: en contextos de sobreinformación, la credibilidad deriva de metadatos (fuentes, series temporales, auditorías) y del comportamiento consistente a través del tiempo. En territorio, la tipología guía la construcción de vocerías: cuadros técnicos para propuestas complejas; liderazgos comunitarios para legitimidad social; y militancia entrenada para logística electoral. En digital, permite modular tono, formatos y pruebas. En suma, clasificar no es encasillar: es anticipar cómo una oferta específica puede construir mayorías legítimas sin erosionar la deliberación democrática.",
                },
                {
                  type: "accordion",
                  header: "Riesgos y salvaguardas",
                  open: false,
                  text: "Riesgos: estereotipos ideológicos, fetichismo organizativo, sesgos de confirmación. Salvaguardas: triangulación de fuentes, auditorías externas, métricas de cumplimiento programático y protocolos éticos en comunicación (no desinformación, respeto a derechos). La tipología se valida en resultados y procedimientos. :contentReference[oaicite:2]{index=2}",
                },
                {
                  type: "paragraph",
                  text: "La formación de coaliciones reconfigura tipologías: partidos ideológicamente distantes pueden acercarse por objetivos de gobernabilidad. En tales casos, la mercadotecnia política debe elaborar una narrativa de congruencia —mínimos programáticos, tiempos y metas mensurables— y un mecanismo público de rendición de cuentas para sostener confianza. Esto es particularmente relevante cuando la coalición combina estructuras dispares: un socio con músculo territorial y otro con prestigio técnico. La promesa conjunta requiere ‘traducción’ a lenguaje ciudadano y evidencias de viabilidad.",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, la tipificación debe actualizarse en cada ciclo. Reformas electorales, cambios socioeconómicos y shocks (sanitarios, de seguridad o económicos) alteran agendas y preferencias. Por ello, los equipos deben mantener observatorios internos que documenten mutaciones ideológicas, fracturas organizativas, cambios de escala y giros estratégicos. La clasificación viva se convierte en tablero de control para prever ventanas de oportunidad y prevenir riesgos reputacionales. :contentReference[oaicite:3]{index=3}",
                },
              ],
            },
            {
              id: "1.1.2",
              numbering: "2.2",
              title: "Finalidades de los partidos",
              content: [
                {
                  type: "paragraph",
                  text: "Los partidos son organizaciones que agregan intereses, articulan demandas y transforman preferencias ciudadanas en programas de gobierno. Entre sus finalidades destacan: competir por el poder en elecciones libres, formar cuadros para la administración pública, socializar cultura democrática, elaborar plataformas programáticas, reclutar liderazgos y canalizar la rendición de cuentas. Como intermediarios, conectan expectativas ciudadanas con decisiones estatales y, cuando gobiernan, convierten promesas en políticas. Estas finalidades se ejercen bajo reglas de financiamiento, fiscalización y transparencia que buscan equilibrio entre pluralidad y equidad. En contextos de desafección, su legitimidad depende tanto de resultados (políticas efectivas) como de procedimientos (respeto a la ley, integridad). En suma, la función partidaria va más allá de la campaña: es infraestructura democrática permanente, que sostiene la circulación pacífica del poder y la deliberación pública informada.",
                },
                {
                  type: "paragraph",
                  text: "A nivel organizativo, los partidos diseñan mecanismos de selección de candidaturas (elecciones internas, designaciones, primarias abiertas), establecen escuelas de formación y definen sistemas de integridad (códigos, comités de ética, control de conflictos de interés). En su rol legislativo, construyen agendas, negocian coaliciones y supervisan al Ejecutivo. En su rol gubernamental, priorizan políticas, gestionan presupuestos y rinden cuentas. Estas funciones se equilibran con el sistema de contrapesos y con la sociedad civil organizada. Cuando fallan —clientelismo, opacidad, capturas— se erosiona la confianza y proliferan candidaturas ‘anti-partido’ que, paradójicamente, requieren estructura para gobernar. Por ello, profesionalizar la vida interna e innovar en participación (consultas programáticas, plataformas digitales de deliberación) se vuelve objetivo estratégico.",
                },
                {
                  type: "accordion",
                  header: "Objetivos y productos mínimos",
                  open: false,
                  text: "Objetivos: representación, gobernabilidad, formación cívica, control político. Productos: plataforma programática priorizada; mecanismos de selección y evaluación de candidatos; plan de gobierno con costos y fuentes; reportes de integridad y cumplimiento; sistemas de participación ciudadana. Sin estos entregables, el partido deviene en maquinaria electoral sin proyecto de país. :contentReference[oaicite:4]{index=4}",
                },
                {
                  type: "paragraph",
                  text: "Desde la mercadotecnia política, la finalidad se traduce en promesa de valor: ¿qué problema público resolverá mejor esta organización y cómo lo demostrará? La respuesta exige evidencia: casos, evaluaciones, comparativos internacionales y hojas de ruta. La comunicación debe evitar vacíos performativos y mostrar capacidad de ejecución con datos. La segmentación prioriza públicos que ganan o pierden con la propuesta; la ética obliga a comunicar costos y límites, reduciendo los incentivos a la demagogia. La reputación se construye en el tiempo: coherencia entre voto legislativo, gestión y mensaje.",
                },
                {
                  type: "accordion",
                  header: "Indicadores de desempeño partidario",
                  open: false,
                  text: "1) Cumplimiento programático (porcentajes y plazos). 2) Integridad: auditorías, sanciones, prevención. 3) Gobernanza interna: renovación, inclusión, democracia intrapartidaria. 4) Eficacia electoral: crecimiento en voto válido sin violar reglas. 5) Calidad de representación: asistencia y productividad legislativa. 6) Confianza ciudadana: encuestas y participación en mecanismos de rendición de cuentas. :contentReference[oaicite:5]{index=5}",
                },
                {
                  type: "paragraph",
                  text: "Una agenda moderna incorpora justicia intergeneracional, sostenibilidad y gobierno digital. Ello demanda capacidades analíticas, alianzas con academia y escucha a sectores productivos y sociales. En territorios con desigualdades profundas, la finalidad partidaria suma construir Estado de derecho efectivo, ampliar oportunidades y proteger libertades. Este horizonte programático robustece el vínculo representativo y facilita construir mayorías estables.",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, la finalidad se prueba en crisis: los partidos que sostienen integridad, informan con transparencia y corrigen con rapidez preservan su licencia social para operar. Esa resiliencia depende de protocolos previos, no de improvisación. En política, la ética es sistema operativo: sin ella, los éxitos tácticos devienen en derrotas estratégicas. :contentReference[oaicite:6]{index=6}",
                },
              ],
            },
            {
              id: "1.1.3",
              numbering: "2.3",
              title: "Grupos de presión",
              content: [
                {
                  type: "paragraph",
                  text: "Los grupos de presión —también llamados grupos de interés o lobbies— buscan influir en decisiones públicas mediante repertorios legítimos: cabildeo, posicionamientos técnicos, campañas informativas, litigio estratégico o colaboración con legisladores. Se distinguen de los ‘grupos de choque’, orientados a la confrontación y, a veces, a tácticas al margen de la ley. Entender esta diferencia es crucial para la ética democrática: el pluralismo reconoce la defensa de intereses —empresariales, laborales, ambientales, de derechos— siempre que se respeten la transparencia, la legalidad y los derechos de terceros. En la práctica, un grupo de interés eficaz combina evidencia, legitimidad social y trazabilidad de sus apoyos. Para el marketing político, mapearlos ayuda a evitar encuadres erróneos y a diseñar diálogos productivos que transformen conflicto en acuerdos verificables. :contentReference[oaicite:7]{index=7}",
                },
                {
                  type: "paragraph",
                  text: "La construcción de agenda entre partidos y grupos de interés puede producir sinergias o capturas. Las sinergias aceleran reformas cuando hay coincidencias públicas y mecanismos de rendición de cuentas. Las capturas distorsionan políticas a favor de minorías con poder de presión, erosionando legitimidad. El antídoto es la transparencia: reglas de cabildeo, registros públicos de reuniones, estudios de impacto y periodos de consulta. En campaña, la relación con grupos de interés debe someterse a estándares éticos: rechazar financiamiento opaco, publicar plataformas de integridad y evitar el uso instrumental de causas sociales. La comunicación responsable distingue protesta legítima de prácticas violentas, y condena estas últimas incluso si favorecen coyunturalmente a la propia causa.",
                },
                {
                  type: "accordion",
                  header: "Mapa y evaluación de grupos de interés",
                  open: false,
                  text: "1) Identificar actores por tema (económico, social, ambiental, derechos). 2) Evaluar legitimidad (representatividad, trayectoria, transparencia). 3) Medir capacidad de influencia (datos, redes, presencia territorial). 4) Estimar riesgos (captura, conflicto de interés, desinformación). 5) Definir estrategia de diálogo (objetivos, vocerías, compromisos públicos). 6) Registrar interacciones y publicar resultados. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "paragraph",
                  text: "En democracias digitales, los grupos de interés operan también en redes: ‘issue publics’ que emergen alrededor de causas específicas, coordinan acciones y generan atención mediática. El desafío es filtrar ruido de señal: plataformas permiten visibilidad, pero no toda viralidad equivale a representatividad. La respuesta estratégica es escuchar con métodos, contrastar con datos y abrir canales institucionales de participación. En gobierno, la colaboración se formaliza vía parlamentos abiertos, mesas de trabajo y evaluaciones de impacto regulatorio. En oposición, se traduce en vigilancia y propuestas alternativas basadas en evidencia.",
                },
                {
                  type: "accordion",
                  header: "Diferencias clave: presión vs. choque",
                  open: false,
                  text: "Grupos de presión: métodos pacíficos y legales; buscan persuadir con evidencia y movilización cívica; transparencia deseable. Grupos de choque: tácticas confrontativas (bloqueos, ocupaciones, violencia); riesgo de ilegalidad; efectos reputacionales negativos y daño a derechos de terceros. La comunicación política responsable no confunde ni normaliza prácticas violentas. :contentReference[oaicite:9]{index=9}",
                },
                {
                  type: "paragraph",
                  text: "Para campañas y gobiernos, institucionalizar el diálogo con grupos de interés reduce la probabilidad de crisis. Protocolos previos —calendarios de consulta, reglas de conflicto de interés, acceso equitativo— ordenan la interacción. La mercadotecnia política contribuye al crear piezas comprensibles, publicar datos y cerrar el ciclo con decisiones explicadas. El objetivo no es agradar a todos, sino decidir con razones públicas y proteger a los más vulnerables.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión: los grupos de presión son parte del ecosistema democrático cuando respetan reglas y derechos. La tarea del liderazgo es separar la paja del grano: abrir puertas a evidencia y cerrar el paso a la coacción. Solo así, la política convierte desacuerdos en políticas mejores. :contentReference[oaicite:10]{index=10}",
                },
              ],
            },
            {
              id: "1.1.4",
              numbering: "2.4",
              title: "Principios políticos",
              content: [
                {
                  type: "paragraph",
                  text: "Los principios políticos son brújula normativa y práctica para el ejercicio del poder: dignidad humana, legalidad, justicia, libertad, igualdad, solidaridad, responsabilidad, transparencia y respeto a los derechos humanos. No son adornos retóricos: estructuran decisiones bajo escasez y conflicto, y definen límites éticos a la competencia. En el aula y en la praxis, estos principios se vuelven criterios de evaluación: ¿qué política mejora la vida sin discriminar?, ¿qué decisión respeta la ley y rinde cuentas?, ¿qué acción distribuye cargas y beneficios de modo justo? La ciudadanía observa tanto lo que se promete como cómo se decide; por ello, la ética pública no compite con la eficacia: la hace sostenible. En contextos de polarización, los principios evitan la ‘victoria pírrica’ que destruye las bases de la convivencia. :contentReference[oaicite:11]{index=11}",
                },
                {
                  type: "paragraph",
                  text: "Operativizar principios exige institucionalidad: leyes claras, órganos autónomos, auditorías, acceso a la información, justicia abierta, contrapesos y mecanismos de participación. En campañas, implica financiamiento trazable, respeto a datos personales, no desinformación y narrativa honesta sobre costos y beneficios. En gobiernos, se traduce en presupuestos con evidencia, evaluaciones ex ante/ex post y correcciones públicas cuando se detectan fallas. La ética también es cultura interna: códigos, formación y sanciones efectivas. Sin enforcement, las declaraciones se quedan en papel.",
                },
                {
                  type: "accordion",
                  header: "Del principio al procedimiento",
                  open: false,
                  text: "Dignidad → prohibición de prácticas degradantes y sesgos. Legalidad → cumplimiento electoral y administrativo. Justicia → criterios de focalización y evaluación distributiva. Transparencia → datos abiertos y trazabilidad del gasto. Responsabilidad → planes con indicadores y metas. Participación → mecanismos accesibles y vinculantes. Estas traducciones evitan vacíos performativos. :contentReference[oaicite:12]{index=12}",
                },
                {
                  type: "paragraph",
                  text: "La pedagogía cívica refuerza principios al convertirlos en hábitos sociales: fact-checking, cultura de la evidencia, rechazo a la violencia y defensa del debido proceso. Los medios y el periodismo ético son aliados naturales cuando investigan con rigor y separan opinión de verificación. La esfera digital demanda protocolos contra la desinformación y campañas de alfabetización mediática; al mismo tiempo, requiere no censurar críticas legítimas.",
                },
                {
                  type: "accordion",
                  header: "Riesgos a los principios y cómo mitigarlos",
                  open: false,
                  text: "Riesgos: opacidad, clientelismo, captura regulatoria, populismo punitivo, desinformación. Mitigaciones: auditorías independientes, regulación de cabildeo, evaluaciones de políticas, protección a denunciantes, alfabetización digital, coaliciones por la integridad. La ética se protege con instituciones y ciudadanía activa. :contentReference[oaicite:13]{index=13}",
                },
                {
                  type: "paragraph",
                  text: "En la práctica partidaria, los principios se prueban al seleccionar candidaturas, tejer alianzas y gobernar. Códigos sin excepciones, criterios de idoneidad y contratos programáticos con metas verificables son señales de compromiso. Cuando hay errores, la corrección oportuna y la sanción proporcional restablecen confianza. La ética no elimina el conflicto, pero lo vuelve civilizado.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión: los principios políticos son el ‘sistema operativo’ de la democracia. Aseguran que la competencia produzca bienes públicos y no solo victorias electorales. La mercadotecnia política responsable los integra como límites y como promesa, comunicando con claridad qué se hará, por qué y cómo se comprobará. :contentReference[oaicite:14]{index=14}",
                },
              ],
            },
            {
              id: "1.1.5",
              numbering: "2.5",
              title: "Clasificación de la política",
              content: [
                {
                  type: "paragraph",
                  text: "La política puede clasificarse por niveles (local, estatal, nacional, internacional), por funciones (formulación, implementación, evaluación), por ámbitos (económica, social, ambiental, seguridad, exterior) y por estilo (consensual, mayoritaria, tecnocrática, participativa). En México, además, la organización federal establece competencias y responsabilidades diferenciadas por nivel de gobierno. Esta clasificación no es meramente académica: ayuda a definir capacidades requeridas, métricas de éxito y arquitectura institucional. Por ejemplo, la política local privilegia proximidad y servicios; la nacional, coordinación intergubernamental; la internacional, diplomacia y cumplimiento de tratados. En campaña, ubicar dónde vive el problema y en qué nivel se resuelve evita prometer lo que no compete.",
                },
                {
                  type: "paragraph",
                  text: "Otra clasificación útil distingue ciclos: agenda-setting, diseño, implementación, monitoreo y evaluación. Cada fase tiene herramientas y actores predominantes. También importa el grado de certidumbre: políticas en incertidumbre alta requieren iteración y pilotos; en certidumbre baja, experimentación controlada; en certidumbre alta, escalamiento. En términos de legitimidad, políticas participativas incorporan diseño colaborativo y control social; las tecnocráticas se apoyan en experticia, pero deben responder por resultados y por sus efectos distributivos. La clasificación, bien usada, ordena decisiones, prioriza recursos y mejora rendición de cuentas. :contentReference[oaicite:15]{index=15}",
                },
                {
                  type: "accordion",
                  header: "Niveles y competencias",
                  open: false,
                  text: "Local: servicios públicos, proximidad, participación comunitaria. Estatal: coordinación sectorial y regional. Nacional: políticas macro, regulación y redistribución. Internacional: tratados, diplomacia, cooperación. Cada nivel exige métricas y tiempos distintos; confundirlos genera expectativas imposibles y frustración ciudadana. :contentReference[oaicite:16]{index=16}",
                },
                {
                  type: "paragraph",
                  text: "Para el marketing político, clasificar la política permite diseñar propuestas verosímiles: quién decide, con qué recursos, en qué plazo y bajo qué indicadores. También previene el ‘inflacionismo programático’ que acumula promesas de distintos niveles sin gobernanza real. La comunicación honesta explicita coparticipaciones: muchas transformaciones requieren coordinación multinivel y alianzas público-sociales. El éxito se mide por resultados y por la calidad del proceso.",
                },
                {
                  type: "accordion",
                  header: "Claves para una clasificación útil",
                  open: false,
                  text: "1) Partir del problema público y su escala. 2) Identificar responsables institucionales. 3) Mapear herramientas efectivas por tipo y fase. 4) Definir indicadores comparables. 5) Anticipar riesgos y costos. 6) Comunicar límites y tiempos con transparencia. Clasificar no es fragmentar: es ordenar para ejecutar mejor. :contentReference[oaicite:17]{index=17}",
                },
                {
                  type: "paragraph",
                  text: "En el plano internacional, la política implica salvaguardar intereses nacionales sin dañar relaciones estratégicas. La comunicación imprudente puede escalar tensiones y afectar comercio, inversión o cooperación. Por ello, vocerías especializadas y coordinación interinstitucional son imprescindibles. En el plano local, la cercanía y la capacidad de respuesta inmediata definen reputación: arreglar lo concreto crea capital político para abordar lo estructural.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión: una clasificación consciente de la política convierte el programa en hoja de ruta ejecutable. Permite que la ciudadanía evalúe con criterios claros y que los equipos rindan cuentas con indicadores verificables. Es, en suma, una herramienta de gestión y de ética pública. :contentReference[oaicite:18]{index=18}",
                },
              ],
            },
          ],
        },

        /* Bloque 3. Ética y política */
        {
          id: "1.2",
          numbering: "3",
          title: "Ética y política",
          content: [
            {
              type: "paragraph",
              text: "La relación entre ética y política no es accesoria: constituye el cimiento que legitima la competencia por el poder y el ejercicio de gobierno. La ética ofrece criterios para decidir entre cursos de acción que siempre entrañan costos y dilemas, en los que pueden verse comprometidos derechos, recursos públicos y expectativas ciudadanas. Frente a la tentación de reducir la política a técnica de conquista de mayorías o a una batalla de percepciones, los principios —dignidad humana, justicia, legalidad, responsabilidad, transparencia y participación— funcionan como límites y como brújula. No solo acotan lo que no debe hacerse (mentir, manipular, discriminar, usar recursos con opacidad), también orientan lo que sí debe priorizarse: informar con evidencia, explicar costos y beneficios, escuchar a los afectados y rendir cuentas con métricas verificables. En este sentido, la ética amplia la noción de éxito político: no basta con ganar elecciones; se requiere gobernar respetando las reglas y maximizando el bien público.",
            },
            {
              type: "paragraph",
              text: "Entender la ética como ‘sistema operativo’ de la política supone traducir valores en procedimientos. La dignidad se convierte en protocolos contra prácticas degradantes y sesgos; la justicia en criterios de focalización y evaluación distributiva; la transparencia en datos abiertos, trazabilidad del gasto y publicidad de motivos; la participación en mecanismos accesibles de deliberación y control social. La política democrática es, así, una cadena de decisiones auditables en la que cada promesa tiene soporte documental, costos estimados y responsables identificados. Esta traducción no es trivial: exige capacidades técnicas (planeación basada en evidencia, evaluación ex ante/ex post) y cultura institucional (códigos de integridad, sanciones, protección a denunciantes). Sin enforcement, los principios quedan en el discurso; con enforcement, se convierten en hábitos y en reputación.",
            },
            {
              type: "image",
              src: "https://www.redalyc.org/journal/675/67560760008/1657-8651-opera-25-137-gf2.png",
              alt: "Diagrama de relación entre principios éticos y ciclo de políticas públicas",
              caption:
                "Ética aplicada al ciclo de política: del principio al procedimiento.",
            },
            {
              type: "paragraph",
              text: "La ética también ordena la comunicación política. En contextos de sobreinformación y polarización, la credibilidad no depende solo del carisma o de la creatividad de las piezas, sino de la verificabilidad de lo dicho y de la coherencia entre discurso y conducta. Comunicar éticamente implica evitar la desinformación, citar fuentes, reconocer incertidumbre, explicitar supuestos y no prometer lo que escapa a las competencias o a la disponibilidad de recursos. Del lado ciudadano, la alfabetización mediática es un complemento indispensable: promueve el análisis crítico de mensajes y reduce la tracción de bulos. Desde campaña hasta gobierno, la integridad comunicativa protege la deliberación pública y reduce el costo reputacional de rectificar cuando se cometen errores.",
            },
            {
              type: "accordion",
              header: "Criterios operativos de integridad",
              open: false,
              text: "1) Legalidad y financiamiento trazable (cumplimiento de topes, reportes públicos). 2) Veracidad y no desinformación (fact-checking previo, corrección eficaz). 3) Protección de datos personales y no estigmatización. 4) Participación informada (procesos abiertos, inclusión de afectados). 5) Rendición de cuentas (indicadores, auditorías, informes periódicos). 6) Gestión de conflictos de interés (declaraciones, recusaciones, sanciones). Estos criterios convierten valores en rutinas verificables y replicables.",
            },
            {
              type: "paragraph",
              text: "La evaluación ética de políticas exige reconocer efectos distributivos y externalidades. Decisiones con beneficios agregados pueden generar perdedores identificables; la ética no cancela la decisión, pero obliga a mitigaciones, compensaciones y justificaciones públicas. Igualmente, impone prudencia ante la incertidumbre: pilotajes, evaluaciones rápidas y revisión por pares reducen el riesgo de daños colaterales. La ética se prueba con especial dureza en crisis: la presión por “hacer algo” puede degradar estándares de evidencia o de derechos; sostenerlos no es un lujo, sino condición de legitimidad. La experiencia comparada muestra que instituciones con integridad preinstalada responden mejor y recuperan más rápido la confianza.",
            },
            {
              type: "accordion",
              header: "Ética, poder y resultados",
              open: false,
              text: "La ética no se opone a la eficacia; la encauza. Define límites (lo que no puede hacerse) y prioridades (lo que debe cuidarse primero) para que el logro de objetivos no destruya la base de la convivencia. En términos políticos: ganar sin integridad es perder a mediano plazo; gobernar con integridad construye licencia social sostenida.",
            },
            {
              type: "paragraph",
              text: "Conclusión: ética y política forman un binomio indisoluble. La primera otorga legitimidad, previsibilidad y sentido; la segunda aporta instrumentos para convertir los principios en bienes públicos. Cuando ambos se alinean, la ciudadanía puede evaluar con criterios claros y verificar avances; cuando se separan, la competencia se degrada en espectáculo y la confianza se evapora. Por ello, todo diseño institucional robusto incorpora salvaguardas éticas, canales de participación y sistemas de seguimiento y evaluación que aseguren aprendizaje y corrección continua.",
            },
          ],
          /* → Sub-subtemas (3.1 – 3.2) */
          subthemes: [
            {
              id: "1.2.1",
              numbering: "3.1",
              title: "Ética social",
              content: [
                {
                  type: "paragraph",
                  text: "La ética social traslada los principios morales —dignidad, justicia distributiva, solidaridad, participación y responsabilidad— al plano de la vida colectiva. Su núcleo es el reconocimiento de que las decisiones públicas impactan de forma desigual a grupos con posiciones distintas de poder y vulnerabilidad; por tanto, la evaluación de políticas debe atender no solo la eficiencia agregada, sino la equidad en la distribución de costos y beneficios. La ética social exige procedimientos que otorguen voz a los afectados, mecanismos de impugnación y reparación, y cuidados especiales para minorías y personas en situación de riesgo. En educación cívica, la ética social se aprende practicando: deliberación respetuosa, escucha activa, contraste de evidencia y disposición a revisar convicciones frente a mejores razones. En gestión pública, se traduce en presupuestos sensibles a derechos, metas mensurables y transparencia proactiva.",
                },
                {
                  type: "paragraph",
                  text: "Aplicada a la política, la ética social modula tres tensiones habituales. Primera: libertad-igualdad. Las políticas deben ampliar libertades reales (capacidades), no solo formales, evitando que la pobreza o la discriminación anulen opciones de vida. Segunda: mayorías-derechos. Decisiones mayoritarias no pueden suprimir derechos fundamentales; de ahí la relevancia de tribunales, órganos autónomos y contrapesos. Tercera: eficiencia-equidad. El uso óptimo de recursos puede ser injusto si ignora brechas históricas; por eso se recurre a criterios de focalización y a evaluaciones distributivas. Instrumentalmente, la ética social recomienda diseñar indicadores mixtos (resultado y proceso), incorporar análisis de impacto en grupos específicos y mantener trazabilidad de decisiones, de tal suerte que la ciudadanía pueda auditar el razonamiento público.",
                },
                {
                  type: "image",
                  src: "https://www.researchgate.net/publication/309136023/figure/fig2/AS:417047356952580@1476443246136/Figura-5-documentos-basicos-en-etica-de-la-intervencion-social-Principios-eticos.png",
                  alt: "Esquema de principios de ética social y áreas de aplicación",
                  caption:
                    "Ámbitos de aplicación: gobierno, economía, educación, medio ambiente y salud.",
                },
                {
                  type: "paragraph",
                  text: "La participación ciudadana es columna vertebral de la ética social. No equivale a plebiscitar todo; implica construir canales informados y vinculantes donde razones y evidencia pesen más que la fuerza del grito. Presupuestos participativos, parlamento abierto, audiencias públicas, gobierno abierto y ciencia de datos cívica son dispositivos que mejoran decisiones y reducen asimetrías de información. La participación, para ser ética, debe ser inclusiva (accesible para grupos históricamente excluidos), informada (con datos comprensibles) y responsable (respetuosa de derechos y tiempos). El resultado no es unanimidad, sino legitimidad: perdedores que aceptan decisiones porque reconocen reglas justas y procedimientos transparentes.",
                },
                {
                  type: "accordion",
                  header: "Principios → Procedimientos (traducción práctica)",
                  open: false,
                  text: "Dignidad → prohibición de tratos degradantes; accesibilidad universal. Justicia distributiva → focalización con evidencia y evaluación de brechas. Solidaridad → programas con corresponsabilidad y redes de apoyo. Participación → mecanismos con información previa y seguimiento. Responsabilidad → indicadores, reportes periódicos y sanciones por incumplimiento. Esta tabla de traducción previene ‘ética declamativa’ y consolida hábitos institucionales.",
                },
                {
                  type: "paragraph",
                  text: "La ética social enfrenta límites y desafíos: asimetrías de poder, captura regulatoria, populismo punitivo, desinformación y fatiga participativa. Para mitigarlos se recomiendan salvaguardas: regulación del cabildeo, registros públicos de reuniones, evaluaciones de impacto regulatorio, protección a denunciantes, alfabetización mediática y fortalecimiento de órganos garantes. Un aprendizaje central es que las buenas instituciones no sustituyen la virtud cívica, la requieren: sin cultura de integridad y disposición a cooperar, incluso el mejor diseño se vuelve letra muerta. Por ello, la formación ética debe acompañar al diseño institucional y a la innovación pública.",
                },
                {
                  type: "accordion",
                  header: "Checklist de ética social para políticas públicas",
                  open: false,
                  text: "1) ¿Quién gana y quién pierde? Informe distributivo. 2) ¿Se escuchó a los afectados? Actas y síntesis de argumentos. 3) ¿Hay evidencia suficiente? Fuentes, supuestos, sensibilidad. 4) ¿Se respetan derechos? Control de convencionalidad. 5) ¿Cómo se rinde cuentas? Indicadores y calendario de informes. 6) ¿Qué pasa si falla? Plan de mitigación y reparación. Este checklist eleva el estándar deliberativo y facilita la auditoría ciudadana.",
                },
              ],
            },
            {
              id: "1.2.2",
              numbering: "3.2",
              title: "Benchmarking",
              content: [
                {
                  type: "paragraph",
                  text: "El benchmarking es la adopción y adaptación consciente de mejores prácticas, procesos y resultados observados en organizaciones de referencia. En política y gobierno, permite comparar el desempeño de instituciones, programas o campañas con estándares internos (otras áreas de la misma organización) o externos (otras organizaciones, competidores o líderes del sector). Su propósito no es copiar mecánicamente, sino aprender con criterio: identificar brechas, fijar metas alcanzables y traducir prácticas probadas a contextos propios sin violar la legalidad ni los derechos. Para ello, se requiere definir con precisión el objeto a comparar (proceso, producto, resultado), seleccionar referentes pertinentes, acordar métricas comparables y establecer un plan de mejora con responsables, plazos y evidencia de avance. Hecho éticamente, el benchmarking acelera aprendizaje, reduce errores y eleva la calidad de la deliberación pública.",
                },
                {
                  type: "paragraph",
                  text: "Existen tipos de benchmarking con usos diferenciados. El interno compara áreas o periodos dentro de la misma organización para estandarizar y escalar lo que ya funciona. El externo contrasta con organismos pares —por ejemplo, otras alcaldías con retos similares— para detectar innovaciones transferibles. El competitivo mira a rivales directos (otros partidos o candidaturas) y exige mayor cuidado ético para evitar prácticas impropias o uso ilegítimo de datos. El de mejores prácticas se enfoca en referentes reconocidos —nacionales o internacionales— para elevar el estándar y construir hojas de ruta. En campañas, puede abarcar vocerías, protocolos de crisis, segmentación de audiencias, micro-targeting responsable, formatos de rendición de cuentas y mecanismos de participación. En gobierno, incluye trámites, compras públicas, servicios esenciales y plataformas de datos abiertos.",
                },
                {
                  type: "image",
                  src: "https://www.researchgate.net/publication/228270663/figure/fig1/AS:670011630825480@1536754629665/Figura-1-El-proceso-de-benchmarking-segun-M-J-Spendolini.png",
                  alt: "Flujo básico del benchmarking en política y gobierno",
                  caption:
                    "Etapas: definir → seleccionar referentes → medir → adaptar → implementar → evaluar.",
                },
                {
                  type: "paragraph",
                  text: "La ética del benchmarking impone salvaguardas. Primero, legalidad y respeto a la propiedad intelectual: aprender de una práctica no autoriza a replicar materiales protegidos ni a usar bases de datos sin consentimiento. Segundo, privacidad y protección de datos personales: la comparación no justifica la explotación de información sensible. Tercero, transparencia metodológica: documentar fuentes, decisiones de adaptación, costos y resultados evita ‘éxitos fantasma’. Cuarto, contextualización: lo que funciona en un entorno puede fracasar —o ser injusto— en otro; por ello, todo trasplante requiere análisis de pertinencia, riesgos y medidas de mitigación. Finalmente, integridad comunicativa: no inflar impactos ni borrar fracasos; el aprendizaje honesto de errores es un activo reputacional.",
                },
                {
                  type: "accordion",
                  header: "Tipos de benchmarking (uso rápido)",
                  open: false,
                  text: "Interno: estandarizar y escalar prácticas existentes. Externo: comparar con pares para innovar. Competitivo: observar rivales con cuidados éticos reforzados. Mejores prácticas: anclar estándares altos con referentes verificables. En todos: definir métricas, documentar adaptación y evaluar con independencia.",
                },
                {
                  type: "paragraph",
                  text: "Un proceso mínimo de seis pasos ordena el benchmarking. 1) Delimitar problema y objetivo con indicadores. 2) Seleccionar referentes pertinentes y accesibles; preferir aquellos con documentación pública. 3) Acordar métricas comparables y fechas de corte; evitar comparaciones de manzanas con naranjas. 4) Levantar datos y validar calidad (fuentes, series, sesgos). 5) Diseñar la adaptación: qué se replica igual, qué se ajusta, qué se descarta; estimar costos y riesgos. 6) Implementar con tablero de control y evaluación independiente. Comunicar cada etapa con claridad —incluyendo fracasos— fortalece confianza interna y externa, y evita el ‘teatrito de las mejores prácticas’ que presume éxitos sin sustento.",
                },
                {
                  type: "accordion",
                  header: "Checklist ético-técnico para implementar",
                  open: false,
                  text: "Legalidad (PI y datos), consentimiento informado, pertinencia contextual, trazabilidad de decisiones, evaluación independiente, publicación de resultados y lecciones aprendidas. Si algún punto falla, detener, corregir y re-evaluar. La prisa no justifica atajos que dañen derechos o reputación.",
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
          href: "https://www.tiktok.com/@royzepedac/video/7269049420174396677?_r=1&_t=8otvCGfzrrp", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Diferentes tipos de gobierno — TikTok (@royzepedac) https://www.tiktok.com/@royzepedac/video/7269049420174396677?_r=1&_t=8otvCGfzrrp",
            "La importancia de conocer la historia de los partidos políticos en México — TikTok (@abelardocuellardelgado) https://www.tiktok.com/@abelardocuellardelgado/video/7301761834523184389?_r=1&_t=8otv4vGLwMI",
            "Los valores ¡No son sustituibles! — TikTok (@unplebeyo) https://www.tiktok.com/@unplebeyo/video/7115394931719458053?_r=1&_t=8otuOmSfK58",
            "Crítica de la teoría de la cultura política — SciELO https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0188-77422006000200007&lng=es&nrm=iso&tlng=es",
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
            "Keller, K. (2012). Dirección de marketing. Ciudad de México: Pearson Educación.",
            "Maslow, A. (1970). Motivation and Personality. Estados Unidos: Harper & Row.",
            "Maslow, A. (1971). The Farther Reaches of Human Nature. Estados Unidos: Viking Press.",
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
