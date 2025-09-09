/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAP", // Maestría en Gobierno y Asuntos Públicos
  courseId: "mercadotecnia-politica",
  id: "modulo4-publicidad-propaganda",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Mercadotecnia política",
  title: "Módulo 4. Publicidad y propaganda",
  semestre: "Tercero",
  teacher: "Mtro. Carlos Alejandro Olvera Jiménez",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Proyectar la imagen de un partido o candidatos ante la sociedad, por medio de campañas políticas que empleen comités, publicaciones locales, propaganda utilitaria y, sobre todo, medios masivos de comunicación.",
  competencies: [
    "Capacidad de comunicación",
    "Capacidad de análisis",
    "Creatividad e innovación",
    "Ética",
    "Dotes de organización",
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

    /* 1. Unidad principal (mapeo desde Unidad 5 del material) */
    {
      id: "1",
      numbering: "Unidad 5",
      title: "Publicidad y propaganda",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad delimita con precisión el campo de la publicidad y la propaganda en campañas políticas, subrayando su función persuasiva y su diferencial de propósito. La publicidad, orientada a fines de posicionamiento y promoción, busca visibilidad, recuerdo y preferencia; la propaganda, en cambio, pretende instalar o reforzar marcos ideológicos y comportamientos colectivos. En ambos casos, el punto de partida es un objetivo claro y medible que articule mensaje, portavoces y soportes con el público meta. De ahí se derivan decisiones sobre el tono, los recursos creativos y los criterios de eficacia. El material de la unidad enfatiza que, aunque comparten herramientas y escenarios —medios masivos y digitales, eventos, materiales impresos—, conviene distinguir sus finalidades para seleccionar indicadores pertinentes y evitar confusiones operativas. La ética se ubica como eje rector: toda acción comunicativa debe atenerse a la verdad, a la no manipulación y a la transparencia en el uso de datos y recursos. Así, la planeación comunicativa se concibe como un sistema integrado que alinea estrategia, creatividad, ejecución y evaluación para sostener la credibilidad de la candidatura y de la institución que la respalda.",
        },
        {
          type: "paragraph",
          text: "La proyección en medios de información masiva constituye la bisagra operativa del dispositivo persuasivo. Televisión, radio, prensa y plataformas digitales amplifican cuatro objetivos irrenunciables: visibilidad (ser conocidos y ubicables), imagen (configurar atributos y personalidad percibida), mensaje (transmitir propuestas claras y memorables) y credibilidad (generar confianza mediante coherencia y verificación). Para lograrlos se combinan tácticas pagadas (spots, páginas, banners), ganadas (cobertura noticiosa, entrevistas), compartidas (redes sociales) y propias (sitios y boletines), buscando convergencia narrativa y sinergias de alcance. La pauta se diseña según segmentación y consumo mediático, con calendarios que marcan picos de exposición, ventanas de contraste y momentos de reforzamiento. La unidad propone tratar cada aparición como evidencia pública de consistencia: mensajes estables, vocerías entrenadas, preparación de preguntas difíciles y gestión de riesgos reputacionales. Así, se convierte la exposición mediática en un proceso con metas, responsables e indicadores, y no en un conjunto disperso de apariciones sin continuidad.",
        },
        {
          type: "paragraph",
          text: "El diseño identitario —centrado en el logotipo— es el ancla visual de toda campaña. Un buen logotipo es legible, memorable y coherente con la promesa política; funciona en tamaños y fondos diversos, admite versiones monocromáticas y se integra en sistemas gráficos (tipografías, paletas, retículas) que aseguran consistencia a lo largo de todos los puntos de contacto. La unidad recalca que el logotipo no es un adorno sino un vector semiótico que condensa valores, tono y posicionamiento. De su correcta normalización dependen la eficiencia de la pauta, la claridad en las publicaciones y la facilidad de reconocimiento en materiales de tierra (volantes, lonas, espectaculares) y en ecosistemas digitales. Asociado a ello, el uso de revistas y publicaciones exige selección curada de medios por audiencia, línea editorial y costo por mil, cuidando que la creatividad responda a objetivos específicos (informar, movilizar, recaudar, contrarrestar) y que la medición considere tanto indicadores de exposición como de comportamiento (visitas, registros, asistencia, intención de voto).",
        },
        {
          type: "paragraph",
          text: "La propaganda utilitaria añade un vector experiencial: objetos y acciones con utilidad práctica que activan recordación y simpatía (calendarios, libretas, bolsas, servicios comunitarios). Su valor reside en el contacto prolongado con el símbolo y en el gesto de reciprocidad que comunica cercanía. No obstante, la unidad advierte límites y riesgos: saturación, desalineación con la propuesta, gasto ineficiente y, sobre todo, desbordes antiéticos (condicionamiento, clientelismo, desinformación). Por ello, se establecen criterios de pertinencia (¿aporta valor real a la comunidad?), oportunidad (¿en qué momento del ciclo electoral?), coherencia (¿refuerza el mensaje central?) y transparencia (¿se informa quién financia y con qué fines?). La propaganda utilitaria no sustituye la argumentación pública ni la rendición de cuentas; la complementa cuando es cuidadosa, focalizada y evaluada con métricas de costo-efectividad y efecto reputacional.",
        },
        {
          type: "paragraph",
          text: "Finalmente, la organización de comités de campaña traduce la estrategia en trabajo coordinado. La unidad propone comités con funciones claras —planeación, finanzas, comunicación, eventos, voluntariado—, encabezados por perfiles con experiencia y capacidad de rendición de cuentas. Cada comité opera con metas, cronogramas e indicadores, y reporta a una coordinación que asegura integración narrativa y disciplina operativa. La comunicación interna (briefs, minutas, tableros) ordena tareas y evita duplicidades; la capacitación estandariza prácticas de contacto ciudadano y atención de medios; y la supervisión corrige desvíos a tiempo. La estructura no es rígida: se adapta a contextos territoriales y a ritmos de campaña, pero siempre preserva la ética como restricción innegociable. Este andamiaje permite que logotipo, proyección mediática, publicaciones y propaganda utilitaria trabajen como un sistema consistente, evaluable y transparente al servicio del electorado.",
        },

        /* ── Acordeón (3 niveles) ─────────────────── */
        {
          type: "accordion",
          header:
            "Publicidad vs. propaganda: la distinción que ordena decisiones",
          open: false,
          text: "Distinguir finalidad es el primer acto estratégico. La publicidad persigue objetivos de posicionamiento, preferencia y acción inmediata (asistencia, registro, donación, intención de voto), midiendo exposición y respuesta. La propaganda orienta cambios en creencias y actitudes, instala marcos interpretativos y legitima decisiones colectivas; su éxito se evalúa por adhesión simbólica y estabilidad de narrativas. En campañas reales conviven ambas, pero confundirlas conduce a errores: exigir ventas de corto plazo a mensajes ideológicos, o pedir transformaciones culturales a piezas tácticas. La solución es definir, por frente y por momento del ciclo electoral, la combinación adecuada: piezas publicitarias para hitos operativos (arranque, contraste, cierre) y contenidos propagandísticos que sostienen el ‘por qué’ de la propuesta. Con esa claridad, se eligen voceros, tonos, formatos y métricas pertinentes, y se evita la dispersión de recursos.",
        },
        {
          type: "accordion",
          header: "Proyección en medios: objetivos, tácticas y medición",
          open: false,
          text: "El cuadrante Visibilidad-Imagen-Mensaje-Credibilidad guía la acción en TV, radio, prensa y plataformas digitales. Tácticas pagadas aseguran cobertura mínima; apariciones ganadas legitiman y expanden alcance; redes sociales activan conversación y escucha; y activos propios conservan control del archivo y de la trazabilidad. La pauta se calendariza por audiencias y hábitos de consumo, con picos de exposición antes de hitos (debates, cierres), y con refuerzos segmentados. La medición integra indicadores de exposición (GRPs, impresiones), interacción (engagement, CTR), comportamiento (registros, asistencia, voluntariado) y reputación (sentimiento, share of voice). Las decisiones se documentan en un tablero operativo y en un brief creativo vivo para sostener coherencia narrativa. La regla de oro: cada aparición debe ser consistente con el mensaje madre y con la evidencia programática, pues la credibilidad se construye con repetición disciplinada y contraste verificable.",
        },
        {
          type: "accordion",
          header: "Ética y límites: cómo evitar el terreno resbaladizo",
          open: false,
          text: "La unidad establece un principio rector: la eficacia comunicativa no justifica atajos antiéticos. Quedan fuera la desinformación, el uso opaco de datos personales, el condicionamiento de beneficios y cualquier práctica que anule autonomía ciudadana. El comisariado ético de campaña —formal o ad hoc— revisa piezas y tácticas, vigila la trazabilidad de recursos y estandariza protocolos de rectificación pública cuando haya errores. En propaganda utilitaria, el criterio es utilidad genuina y transparencia de financiamiento; en publicidad, claridad de fuente y verificación de afirmaciones. La formación de portavoces incluye manejo de preguntas difíciles y compromiso con la evidencia. Este enfoque previene crisis, fortalece legitimidad y, sobre todo, honra la finalidad pública de una campaña democrática: representar y servir, no manipular.",
        },
      ],

      /* → Subtemas (exactamente cinco, sin sub-subtemas) */
      subthemes: [
        {
          id: "1.1", // 5.1 en el material
          numbering: "5.1",
          title: "Logotipo de campañas",
          content: [
            {
              type: "paragraph",
              text: "El logotipo de campaña es el núcleo del sistema de identidad política: sintetiza en un signo visual la promesa de valor, el tono y los atributos que la candidatura desea proyectar. Su función es estratégica y operativa a la vez: debe diferenciar de competidores, facilitar el recuerdo en contextos de alta saturación y operar con consistencia en todos los puntos de contacto. Por ello, no basta con que ‘se vea bien’; debe obedecer a un razonamiento semiótico (qué evoca), funcional (dónde y cómo se usa) y normativo (cómo preserva su integridad). En campaña, un logotipo eficaz acelera la decodificación del mensaje y reduce el costo cognitivo para el electorado, lo que multiplica el rendimiento de la pauta, mejora la eficacia de materiales de tierra y consolida la presencia digital. La regla es simple pero exigente: claridad antes que ornamento. Una marca política confusa se penaliza en segundos; una marca clara y disciplinada crea familiaridad, y la familiaridad, en política, es ventaja competitiva cuando se vincula a credibilidad y propuesta.",
            },
            {
              type: "paragraph",
              text: "Los criterios de diseño priorizan legibilidad, memorabilidad y coherencia identitaria. Legibilidad implica reconocimiento inmediato en tamaños mínimos, fondos variables y soportes móviles; memorabilidad exige un gesto formal distintivo (tipográfico, cromático o icónico) que el público pueda recordar y reproducir mentalmente; coherencia demanda que el signo ‘suene’ igual que la narrativa de campaña: un logotipo sobrio no debe respaldar un tono estridente, ni uno lúdico un discurso tecnocrático. Estos criterios se validan con pruebas de contraste, reducción, inversión, accesibilidad (alto contraste) y pruebas con públicos objetivo. El color se selecciona por contraste, asociaciones culturales y compatibilidad legal. La tipografía privilegia claridad y versatilidad; los símbolos deben evitar ambigüedades y plagios. Todo se documenta en un manual de identidad que incluye áreas de seguridad, versiones, retículas y usos prohibidos. Sin esa normalización, la creatividad fragmenta la marca; con ella, la creatividad suma.",
            },

            /* Acordeón 1 (texto en párrafo) */
            {
              type: "accordion",
              header: "Tipos de logotipo y selección estratégica",
              open: false,
              text: "La unidad distingue logotipos tipográficos (wordmarks), isotipos (símbolos), imagotipos (combinados) e isologos (símbolo+nombre inseparable). En campaña, la elección responde a notoriedad del candidato, extensión del nombre, coaliciones y escalabilidad territorial. Un wordmark es eficiente cuando el apellido ya posee capital simbólico; el imagotipo facilita versiones compactas para avatares y señalética; el isotipo exige inversión en educación visual pero rinde en la fase de recordación; el isologo asegura cohesión cuando se teme uso inconsistente. La decisión no es estética sino de estrategia y medios: ¿en qué soportes vivirá la marca el 80% del tiempo?, ¿qué limitaciones impone la impresión de bajo costo?, ¿cómo se verá en banners móviles y micro-impresos? La selección debe anticipar esos contextos y responder con economía formal.",
            },

            {
              type: "paragraph",
              text: "El sistema gráfico que rodea al logotipo —paleta cromática principal y de apoyo, tipografías titulares y de texto, retículas, estilos de fotografía e iconografía— garantiza que el signo ‘respire’ en múltiples aplicaciones sin perder consistencia. En campañas políticas, donde los equipos son amplios y el tiempo escaso, este sistema evita discusiones improductivas: define plantillas para boletines, redes, lonas, volantes y presentaciones, con zonas para mensajes y disclaimers legales. También especifica variantes de alto contraste para accesibilidad y lineamientos de co-branding cuando hay alianzas. La consistencia no anula la creatividad: la canaliza. Un sistema bien diseñado reduce errores, acelera producción y refuerza la identidad en cada exposición. Es, además, una herramienta de control reputacional: lo que no está en el manual se revisa, se prueba y, si procede, se incorpora formalmente.",
            },

            /* Acordeón 2 (texto en párrafo) */
            {
              type: "accordion",
              header: "Pruebas, gobernanza y salvaguardas de marca",
              open: false,
              text: "Antes del despliegue, se realizan pruebas de reconocimiento y preferencia con segmentos clave (indecisos, jóvenes, primera vez). Se miden tiempo de identificación, asociaciones espontáneas, confusiones con marcas rivales y adecuación al mensaje madre. La gobernanza define quién autoriza cambios, cómo se versiona para territorios y qué hacer ante usos no autorizados. Salvaguardas: registro de marca donde aplique, repositorio oficial de archivos maestros, plantillas bloqueadas para proveedores y un canal de soporte para dudas de implementación. Con esto, la marca se protege sin frenar la operación.",
            },

            {
              type: "paragraph",
              text: "En la operación diaria, el logotipo debe ser ubicuo pero no invasivo. Su tamaño obedece a jerarquías: la prioridad es siempre el mensaje (propuesta verificable), luego el emisor (candidato/partido) y al final elementos decorativos. En redes, versiones cuadradas y circulares evitan recortes intempestivos; en señalética, las versiones horizontales facilitan lectura a distancia; en papelería, se privilegia tinta única para economías de escala. Una guía de maquetación por formato (historias, carruseles, flyers, espectaculares) evita improvisación. En impresos masivos, se prueban papeles por absorción y se ajusta el color para evitar virajes. Cada microdecisión preserva la promesa central: que el signo sea un atajo de confianza.",
            },
            {
              type: "paragraph",
              text: "Ética y legalidad atraviesan el diseño. Evitar apropiaciones culturales oportunistas, símbolos que estigmaticen o banalicen causas y cualquier ambigüedad que pueda interpretarse como desinformación es ineludible. Además, se respeta la normativa electoral sobre uso de escudos, colores oficiales o similitudes con instituciones públicas. La transparencia exige registrar a proveedores, publicar lineamientos y responder ante observaciones de la autoridad. Un buen logotipo no solo comunica: cuida la dignidad del espacio público. Esta disciplina fortalece la credibilidad y protege a la campaña en momentos de escrutinio.",
            },
            {
              type: "paragraph",
              text: "Conclusión operativa: diseñar es decidir. El logotipo correcto es el que mejora la eficiencia de la comunicación, ordena el ecosistema visual y soporta la narrativa. No se elige por gusto del equipo sino por desempeño en contexto. Cuando la identidad está al servicio de la estrategia y la ciudadanía, la marca política supera el plano estético y se convierte en un activo cívico: clarifica quién dice qué, para qué, y bajo qué responsabilidad.",
            },

            // Nota: No se inserta imagen porque el documento fuente no incorpora material gráfico específico para este subtema.
          ],
        },

        {
          id: "1.2", // 5.2 en el material
          numbering: "5.2",
          title: "Proyección en los medios de información masiva",
          content: [
            {
              type: "paragraph",
              text: "La proyección en medios masivos articula la visibilidad, la imagen, el mensaje y la credibilidad de la candidatura. No es ‘salir en la tele’, sino un sistema que combina pauta pagada, cobertura ganada, activos propios y conversación compartida. Su diseño comienza con objetivos: qué debe saber, sentir y hacer cada audiencia tras exponerse al contenido. De ahí se derivan mapas de medios por segmento y momento de campaña (arranque, contraste, cierre). La convergencia narrativa —decir lo mismo con voces distintas— es condición de eficacia: cada aparición refuerza la idea madre con evidencia y tono consistentes. La unidad enfatiza, además, la preparación de vocerías: mensajes clave, prueba de puenteo, manejo de preguntas difíciles y protocolos de rectificación pública. Sin esa disciplina, la visibilidad se vuelve ruido; con ella, se vuelve confianza.",
            },
            {
              type: "paragraph",
              text: "Televisión y radio aportan cobertura y legitimidad, prensa profundiza y archiva, y plataformas digitales permiten segmentación fina y escucha en tiempo real. La pauta se planifica por hábitos de consumo y eficiencia esperada (alcance, frecuencia efectiva, CPM, GRPs). La cobertura ganada requiere relaciones profesionales con medios: notas con valor noticioso, datos verificables, acceso ordenado a fuentes. En digital, se combinan formatos de alto impacto (video corto, carruseles informativos) con contenidos de profundidad (artículos, lives) para públicos con diferentes umbrales de atención. Todo ello se gobierna desde un calendario editorial y un war room de monitoreo que integra escucha social y seguimiento de agenda pública. La coherencia entre canales evita disonancias y fortalece la marca.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Objetivos y métricas que importan",
              open: false,
              text: "La unidad define cuatro objetivos: visibilidad, imagen, mensaje y credibilidad. Visibilidad se mide por alcance y frecuencia; imagen, por asociaciones deseadas y sentimiento; mensaje, por recuerdo asistido/no asistido; credibilidad, por confianza declarada y verificación de afirmaciones. Las métricas deben ser comparables en el tiempo y auditables. El tablero integra KPIs de medios pagados (GRPs, CPM, VTR), ganados (share of voice, tonalidad), propios (tráfico, retención) y compartidos (engagement, tasa de interacción útil). La interpretación es contextual: un pico de alcance sin comprensión del mensaje es ruido caro; una menor cobertura con alta claridad y credibilidad puede ser preferible en fases de consolidación.",
            },

            {
              type: "paragraph",
              text: "La coordinación operativa define responsables por canal, protocolos de aprobación creativa y ventanas de publicación. Se establecen umbrales de calidad (por ejemplo, no salir al aire sin subtítulos accesibles ni disclaimers legales), y se preparan versiones por territorio y lengua cuando aplique. El control de crisis incluye rutas de respuesta y voceros designados; las simulaciones de entrevista y debate reducen sobresaltos. Se documentan minutas y decisiones en un repositorio común que nutre la memoria institucional. Así, cada salida a medios deja aprendizaje y no solo impacto efímero. La consistencia es un activo: sostenerla exige método.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Estrategias combinadas: paid, earned, shared, owned",
              open: false,
              text: "Paid garantiza piso mínimo de cobertura; earned aporta legitimidad; shared activa conversación; owned asegura trazabilidad y control de archivo. La mezcla varía por fase: al arranque se invierte en paid para instalar nombre y propuesta; en contraste se estimula earned con hitos noticiosos y evidencia; hacia el cierre se refuerza shared con voluntariado digital y owned con repositorios de propuestas. El principio es simple: cada aparición debe empujar una acción medible (registro, asistencia, voluntariado, intención de voto).",
            },

            {
              type: "paragraph",
              text: "La ética es frontera y ventaja. Se excluyen prácticas de desinformación, compra encubierta de coberturas o manipulación algorítmica. Se declara la pauta, se separa opinión de información y se citan fuentes. La credibilidad —uno de los cuatro objetivos— no se compra: se construye con verdad verificable y consistencia en el tiempo. En un entorno de polarización y sobreinformación, este estándar protege a la campaña y respeta a la ciudadanía. Las piezas pasan por filtros de factualidad y por criterios de inclusión y accesibilidad. Comunicar bien es también comunicar con responsabilidad.",
            },
            {
              type: "paragraph",
              text: "Ejecutar con excelencia en medios masivos implica aceptar la complejidad y convertirla en proceso. Al final, la proyección efectiva es aquella que deja huella clara en la mente del electorado, encadena puntos de contacto coherentes y soporta la toma de decisiones del ciudadano con información útil. Si cada exposición suma comprensión, la probabilidad de apoyo crece; si solo aporta notoriedad vacía, termina por erosionar la confianza. La unidad es categórica: estrategia, disciplina y respeto por el público son irrenunciables.",
            },

            // Nota: No se inserta imagen porque el documento fuente no incorpora material gráfico específico para este subtema.
          ],
        },

        {
          id: "1.3", // 5.3 en el material
          numbering: "5.3",
          title: "Revistas y publicación",
          content: [
            {
              type: "paragraph",
              text: "La publicidad en revistas y publicaciones ofrece un territorio de segmentación natural: cada cabecera concentra audiencias con rasgos demográficos, intereses y hábitos definidos. En política, esta afinidad editorial permite conversaciones más profundas, piezas de lectura detenida y una estética cuidada que refuerza profesionalismo. La clave es la selección: ¿qué títulos leen nuestros públicos prioritarios?, ¿cuál es su circulación real (impresa y digital)?, ¿cómo encaja la línea editorial con el posicionamiento de campaña? La unidad sugiere tratar las revistas como espacios de construcción de credibilidad y detalle programático, donde el diseño editorial (tipografía, jerarquías, fotografía) apoye la comprensión. El objetivo no es solo ‘estar’, sino ‘estar donde conviene’ con mensajes que aporten valor informativo.",
            },
            {
              type: "paragraph",
              text: "El planeamiento combina formatos (página completa, media, publirreportaje claramente rotulado, suplementos) y versiones digitales (artículos patrocinados marcados, newsletters, podcast de la cabecera). Se negocian ubicaciones y calendarios en función de hitos (arranque, debates, cierres) y se exigen métricas verificables: tiraje, lectores por ejemplar, audiencia única, tiempo de permanencia, tasa de scroll y derivación a activos propios. La creatividad se escribe para lectura: titulares claros, bajadas informativas, cuerpos con evidencias y enlaces QR a propuestas verificables. Se evita el sobre-arte que entorpece la legibilidad. Una pauta sofisticada no es barroca: es pertinente y medible.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Criterios de selección y adecuación del mensaje",
              open: false,
              text: "Se priorizan cabeceras que alineen audiencia con el mapa de segmentos: sectoriales (salud, agro, negocios), regionales y de interés general con secciones políticas robustas. El mensaje se adecua al lector de cada medio: en negocios, énfasis en certidumbre regulatoria; en educación, mejoras de aprendizaje; en regionales, proyectos con evidencia local. Se cuida la coherencia con la línea editorial para evitar rechazo. Los acuerdos deben garantizar etiquetado claro de contenidos patrocinados para preservar la confianza del lector.",
            },

            {
              type: "paragraph",
              text: "El trabajo con editoriales exige respeto a la independencia periodística: cuando haya contenido patrocinado, se rotula; cuando se busque cobertura, se ofrece valor noticioso (datos, hallazgos, propuestas). La relación de largo plazo se gana con veracidad, puntualidad y disponibilidad de fuentes. La unidad advierte contra la tentación de ‘comprar’ simpatías: el costo reputacional es alto y la eficacia, efímera. Mejor invertir en historias bien documentadas y en argumentos que resistan escrutinio. Las publicaciones son archivo: lo que se imprime o publica digitalmente permanece y se cita. Por eso, cada pieza debe poder defenderse sola.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Métricas que justifican la inversión",
              open: false,
              text: "Además de tiraje y audiencia, se sigue la derivación a activos propios (tráfico referenciado, suscripciones al boletín, descargas de plan de gobierno), el recuerdo del mensaje y las acciones posteriores (asistencia a eventos, voluntariado, intención de voto). En digital, se observan tiempo de lectura, scroll, CTR de enlaces y retorno por cohorte. La evaluación compara costo por resultado con otras tácticas; si la revista no mueve indicadores relevantes, se rediseña o se retira la inversión.",
            },

            {
              type: "paragraph",
              text: "Operativamente, se prepara un kit para publicaciones: fotografías en alta, biografías verificadas, datos clave con fuentes, FAQs y contactos de prensa. Se definen ventanas de aprobación creativa con el medio y se establecen versiones para diferentes cierres editoriales. En paralelo, se prevén derechos de uso y licencias para reutilizar contenidos en redes propias. La consistencia visual con el sistema de identidad no es negociable: los lectores deben reconocer la campaña al primer golpe de vista. Esto reduce fricción cognitiva y multiplica la recordación.",
            },
            {
              type: "paragraph",
              text: "Ética y transparencia marcan el estándar: etiquetar contenido pagado, evitar claims no verificables, respetar derechos de autor y cuidar la diversidad y representación digna en fotografía e ilustración. En el ecosistema actual, donde la confianza en medios es un recurso escaso, la conducta responsable es, además, una ventaja estratégica. La unidad insiste: cada peso invertido debe sumar reputación, no solo exposición. Publicar es comprometerse con la verdad y con la ciudadanía.",
            },
            {
              type: "paragraph",
              text: "En síntesis, ‘Revistas y publicación’ no es un canal más, sino un entorno de calidad para construir argumentos y reputación. Seleccionar bien, escribir para el lector, medir con rigor y actuar con ética convierten la pauta editorial en una palanca de persuasión honesta y eficaz. Cuando el contenido informa y respeta, la ciudadanía responde con atención y, eventualmente, con apoyo.",
            },

            // Nota: No se inserta imagen porque el documento fuente no incorpora material gráfico específico para este subtema.
          ],
        },
        {
          id: "1.4", // 5.4 en el material
          numbering: "5.4",
          title: "Propaganda utilitaria",
          content: [
            {
              type: "paragraph",
              text: "La propaganda utilitaria es el uso planificado de objetos de uso cotidiano —calcomanías, lapiceros, libretas, bolsas, calendarios, playeras, botellas reutilizables, entre otros— para anclar la identidad de campaña en la vida diaria del electorado. Su lógica es de proximidad y repetición: cada vez que la persona usa el objeto, el emblema, los colores y la promesa política reaparecen sin intermediación de medios. Por eso su diseño no debe ser un ‘minipóster’, sino una pieza útil, sobria y duradera, que haga sentido por sí misma. La utilidad verdadera es el primer filtro ético: si el objeto es desechable o estorba, acaba en la basura y se asocia la marca con desperdicio. Cuando se piensa desde el usuario —su contexto, hábitos y necesidades— la propaganda utilitaria deja de ser un ‘regalito’ y se convierte en un vector de recordación amable, con baja fricción cognitiva y alta frecuencia de exposición.",
            },
            {
              type: "paragraph",
              text: "Para que funcione, la selección del objeto debe responder a criterios de relevancia (¿lo usará el segmento?), portabilidad (¿lo llevará consigo?), visibilidad (¿se verá el emblema en uso real?), vida útil (¿cuánto tiempo permanecerá?) y congruencia simbólica (¿el objeto transmite los valores que decimos promover?). En campañas responsables se incorporan criterios de sostenibilidad (materiales reciclables o reutilizables, mínima huella ambiental) y de seguridad (evitar objetos que puedan causar daño). A nivel de marca, conviene preferir cromáticas de alto contraste, tipografías legibles y versiones simplificadas del logotipo para escalas pequeñas. El mensaje breve —una idea fuerza verificable— es preferible al ‘slogan’ genérico: los objetos no son espacios de texto; son superficies para un signo claro. Finalmente, conviene anticipar el ciclo completo: proveedores auditados, control de calidad, bodegas, rutas de distribución y recuperación de sobrantes.",
            },

            {
              type: "accordion",
              header: "Planificación y segmentación de la utilería",
              open: false,
              text: "La planificación se integra al mapa de segmentos: estudiantes (libretas, pines, stickers), trabajadores móviles (termos, bolsas), adultos mayores (calendarios con tipografía grande), hogares (imanes de refrigerador con teléfonos de servicio). Cada segmento recibe pocos modelos, consistentes y con jerarquías visuales idénticas. El cronograma coloca picos antes de hitos (arranque, debates, cierres) y evita saturación. Se registran lotes y rutas para trazabilidad. El principio: menos variedad, más disciplina.",
            },

            {
              type: "paragraph",
              text: "La distribución en territorio exige protocolos que eviten el desperdicio y la percepción de compra indirecta de apoyo. Se vincula a acciones de valor público —brigadas de información, jornadas de escucha, eventos comunitarios—, no a repartos indiscriminados. Se documenta qué, dónde, a quién y por qué se entregó, con énfasis en transparencia. La entrega siempre va acompañada de una interacción breve pero sustantiva: dos o tres datos verificables y un canal de contacto (QR a propuestas, calendario de foros). La meta es que el objeto sea la ‘huella’ de una conversación, no un fin en sí mismo.",
            },
            {
              type: "paragraph",
              text: "Medir impacto es posible si se instrumenta desde el diseño. Se usan códigos QR únicos por lote, teléfonos o URLs específicos en ciertos artículos, y se miden tasas de acceso, permanencia y acciones posteriores (suscripción, asistencia, voluntariado). Las encuestas de poscontacto permiten estimar recordación y asociaciones. Por costo, la propaganda utilitaria compite con otras tácticas: su valor diferencial es la duración de la exposición y la construcción de familiaridad. Si los datos no muestran uso real o si el objeto se desecha con rapidez, se ajusta el portafolio. Sin datos, es fácil autoengañarse: la caja vacía no es evidencia de impacto.",
            },

            {
              type: "accordion",
              header: "Marco ético y normativo mínimo",
              open: false,
              text: "Se evita la entrega condicionada, el uso de objetos que estigmaticen, mensajes engañosos o diseños que se confundan con servicios públicos. Se respetan topes y reportes de gasto conforme a la normativa local y se documenta la cadena de proveedores. La regla operativa es simple: que el objeto sea útil por sí mismo y que el mensaje pueda sostenerse con hechos. La propaganda utilitaria debe sumar ciudadanía, no basura ni cinismo.",
            },

            {
              type: "paragraph",
              text: "Riesgos comunes: convertir el catálogo en una feria de vanidades (muchos modelos, poca coherencia), privilegiar el ‘gusto’ del equipo sobre la utilidad del usuario, ignorar costos logísticos, subestimar la complejidad del almacenamiento y la última milla, y omitir criterios de inclusión (tamaños, legibilidad, lenguaje claro). También es riesgoso saturar de logotipos objetos que por función requieren sobriedad. En cada decisión, la pregunta guía es: ¿qué necesidad del ciudadano resuelve esta pieza y qué idea fuerza refuerza?",
            },
            {
              type: "paragraph",
              text: "En síntesis, la propaganda utilitaria funciona cuando articula utilidad auténtica, diseño disciplinado, entrega con sentido y evaluación con datos. No es un accesorio menor: bien gestionada, crea una red silenciosa de recordación cotidiana; mal gestionada, devora presupuesto y credibilidad. La vara de medición es doble: que la pieza mejore la vida de quien la recibe y que eleve la conversación pública con información verificable. Ese es el estándar profesional que una campaña responsable debe exigirse.",
            },
          ],
        },

        {
          id: "1.5", // 5.5 en el material
          numbering: "5.5",
          title: "Organización de comités de campaña",
          content: [
            {
              type: "paragraph",
              text: "Los comités de campaña son la arquitectura operativa que traduce la estrategia en ejecución diaria. Son equipos con mandato, responsabilidades y reglas claras de coordinación que cuidan tres cosas: foco (prioridades), ritmo (calendario) y calidad (estándares). Su diseño comienza por el principio de subsidiariedad: cada decisión debe tomarse en el nivel más cercano a la acción, siempre que ese nivel cuente con información, criterio y controles. Por eso, antes de pensar en organigramas, se definen procesos críticos (mensajería, territorio, datos, recaudación, finanzas, legal, prensa, digital, voluntariado) y se trazan flujos de trabajo y de aprobación. Un comité bien diseñado reduce cuellos de botella, previene errores repetidos y permite escalar sin perder control.",
            },
            {
              type: "paragraph",
              text: "Estructuralmente, se conforma un Comité Central (dirección general, estrategia, finanzas, jurídico) y comités funcionales: Mensaje y Evidencia (investigación, propuestas, verificación), Comunicación y Medios (prensa, producción, pauta), Territorio (distritos, eventos, logística), Voluntariado (reclutamiento, capacitación, turnos), Datos y Análisis (encuestas, escucha social, tableros), Cumplimiento (normatividad, reportes, protección de datos) y Recaudación (pequeños donantes, eventos, control). Cada comité tiene un responsable, un número finito de frentes, rituales de seguimiento (dailies breves, semanales tácticas, quincenales estratégicas) y resultados esperados con indicadores. Los organigramas dependen del tamaño de la campaña, pero el principio es constante: claridad, redundancia mínima y relevos documentados.",
            },

            {
              type: "accordion",
              header: "Rituales de coordinación y toma de decisiones",
              open: false,
              text: "Los rituales estabilizan la operación. Un ‘daily’ de 15 minutos por comité resuelve bloqueos; una reunión de integración semanal sincroniza interdependencias; un comité de crisis con guardias rotativas acota respuestas en menos de 2 horas. La toma de decisiones sigue una matriz RACI (Responsable, Aprobador, Consultado, Informado). Toda decisión relevante deja rastro: acta breve, responsable, fecha, insumo y criterio. La disciplina documental protege contra la rotación de personal y la volatilidad de campaña.",
            },

            {
              type: "paragraph",
              text: "El talento y el voluntariado requieren procesos claros: reclutamiento con perfil, inducción breve, capacitación modular (mensajes clave, ética, protocolos de datos), asignación de roles y evaluación por cohortes. Se cuida la seguridad: datos personales en repositorios con permisos, control de accesos, mensajes oficiales en plantillas preaprobadas y canales únicos de comunicación. La motivación se sostiene con reconocimiento público, retornos de información (qué impacto tuvo su trabajo) y rutas de crecimiento. Un voluntariado cuidado multiplica capacidad instalada y legitimidad social.",
            },
            {
              type: "paragraph",
              text: "La logística es el arte de que todo llegue a tiempo y con calidad. Se gestionan inventarios, rutas, bodegas, transporte, montaje y desmontaje, con checklists por tipo de evento. Los comités de Territorio y Comunicación trabajan como ‘dupla’: lo que se promete en el volante o en la pauta debe existir en el evento y viceversa. Los tableros integran indicadores operativos (asistencias, entregas, incidencias), de comunicación (alcance, recuerdo de mensaje), de cumplimiento (reportes) y financieros (ejercicio contra presupuesto). Las alertas tempranas activan planes de contingencia con responsables designados.",
            },

            {
              type: "accordion",
              header: "Ética, cumplimiento y control interno",
              open: false,
              text: "El comité de Cumplimiento opera como ‘línea de defensa’: revisa materiales, pauta, recaudación y gastos contra la norma, emite criterios y mantiene un repositorio de evidencias. Protocolos antiacoso, de no discriminación y de protección de datos son obligatorios. Se documentan conflictos de interés y se establecen canales de denuncia con respuesta garantizada. La cultura ética no se delega: se practica en cada reunión, en cada contrato y en cada pieza que sale al público.",
            },

            {
              type: "paragraph",
              text: "La comunicación interna evita rumores y descoordinación. Se eligen pocos canales oficiales, se definen ventanas de difusión (resúmenes diarios y semanales) y se mantiene un repositorio vivo de documentos maestros (mensaje madre, Q&A, manuales, formatos). El principio es ‘una sola fuente de verdad’: así se reduce la entropía informativa. En paralelo, se instala una práctica de posmortem breve tras eventos clave para capturar lecciones aprendidas y ajustar procesos. La humildad operativa es ventaja competitiva.",
            },
            {
              type: "paragraph",
              text: "En conclusión, un comité de campaña profesional no es una suma de buenas voluntades sino un sistema de personas, procesos y principios. Su éxito no se mide solo en eventos realizados o materiales repartidos, sino en la coherencia entre lo que se promete y lo que se hace, en la capacidad de aprender mientras se corre y en el respeto inflexible por la ciudadanía. Cuando la organización está al servicio del propósito y de la ética, la campaña se vuelve una escuela de gobierno: hace, mide, corrige y rinde cuentas.",
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
          href: "https://www.youtube.com/watch?v=zEBTAnYq4rs", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Historia y análisis del Movimiento Naranja — https://www.youtube.com/watch?v=zEBTAnYq4rs",
            "La campaña “Fosfo Fosfo” que volteó el tablero político en Nuevo León — https://www.youtube.com/watch?v=fdcF37o-QmA",
            "Publicidad y propaganda: objetivos, semejanzas, ejemplos y diferencias entre propaganda y publicidad — https://www.cinconoticias.com/publicidad-y-propaganda/",
            "El papel de los medios de comunicación en la fabricación de recuerdos, emociones y creencias sobre el enemigo que facilitan la polarización política y legitiman la violencia — http://scielo.org.co/pdf/agor/v20n1/1657-8031-agor-20-01-18.pdf",
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
            "Garth Jowett, V. O. (2015). Propaganda y persuación. Estados Unidos: Paidós.",
            "IA, M. (agosto de 2024). Asistente de Inteligencia Artificial de Meta.",
            "Keller, K. y. (2012). Dirección de marketing. Ciudad de México: PEARSON EDUCACIÓN.",
            "México, G. d. (s.f.). EC0104 Ventas Consultivas. Ciudad de México: Secretaría de Economía.",
            "Rodríguez, S. H. (2011). Teoría general administrativa: origen evolución y vanguardia. Ciudad de México: Mc Graw Hill.",
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
