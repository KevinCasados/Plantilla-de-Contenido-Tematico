/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MARH", // Maestría en Administración de Recursos Humanos
  courseId: "MARH-101", // Clave asignada a la materia
  id: "MARH-101-mod3", // Identificador único de este módulo

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Administración de Recursos Humanos",
  title: "Módulo 3. Internet, outsourcing y benchmarking",
  semestre: "Primer semestre",
  teacher: "Mtra. Mirna Angélica Palafox Mariscal",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Al término de este módulo el estudiante destacará la importancia de integrar el uso de Internet a la Administración de Recursos Humanos —incluyendo teletrabajo, e-business y e-commerce— así como el outsourcing y el benchmarking como métodos alternativos de operación que optimicen la gestión del capital humano y respalden la productividad diaria de los colaboradores.",

  competencies: [
    "Evalúa críticamente el teletrabajo, el e-business, el e-commerce, el outsourcing y el benchmarking como métodos operativos de la Administración de Recursos Humanos.",
    "Toma decisiones de forma lógica, imparcial y razonada para proponer soluciones originales a problemas de capital humano.",
    "Identifica alternativas creativas frente a métodos y enfoques tradicionales en la gestión de recursos humanos.",
    "Establece líneas de acción adecuadas para resolver problemas vinculados con la gestoría del talento.",
    "Demuestra flexibilidad y capacidad de adaptación ante cambios y oportunidades en el entorno organizacional.",
  ],

  /* ── Contenido temático (jerarquía recursiva) ─────────── */
  themes: [
    /* 0. Página Info (opcional) */
    {
      id: "3.info",
      numbering: "Info",
      title: "Información general del módulo",
      isUnitInfo: true,
      content: [],
    },

    /* ── Unidad 4 ── */
    {
      id: "4",
      numbering: "Unidad 4",
      title: "Internet en la empresa",
      content: [
        /* Párrafo 1 — Transformación digital e impacto en RH (~200 palabras) */
        {
          type: "paragraph",
          text: "Internet ha redefinido la manera en que las organizaciones planifican, operan y desarrollan a su capital humano. En el ámbito de Recursos Humanos (RH), los procesos críticos —atracción, selección, formación, comunicación interna, evaluación del desempeño y bienestar— se integran ahora con plataformas en la nube, analítica de datos y colaboración síncrona y asíncrona. Bajo este enfoque, el e‑business extiende la cadena de valor al terreno digital y el e‑commerce acelera la relación con clientes y proveedores; ambos presionan a RH para habilitar capacidades y competencias alineadas con la estrategia. La hiperconectividad permite flujos de información más transparentes, tableros de control en tiempo real y ciclos de retroalimentación continuos que acortan la distancia entre decisión y ejecución. A la vez, emergen nuevos retos: ciberseguridad, privacidad, sobrecarga informativa y fatiga digital. Para capitalizarlos, RH actúa como socio estratégico: identifica brechas de habilidades, impulsa alfabetización digital y diseña experiencias de aprendizaje continuo. Así, Internet deja de ser un mero canal y se convierte en un entorno de trabajo, colaboración y aprendizaje que reconfigura estructuras, redefine roles y demanda una cultura organizacional orientada a datos, innovación y servicio al cliente interno y externo.",
        },

        /* Párrafo 2 — Teletrabajo, flexibilidad y cumplimiento normativo (~200 palabras) */
        {
          type: "paragraph",
          text: "El teletrabajo se consolidó como una modalidad viable y productiva al combinar desempeño por objetivos, autonomía y soporte intensivo de TIC. Su adopción responsable exige marcos de gobernanza que contemplen ergonomía, salud psicosocial, desconexión digital y protección de datos. Desde RH, la gestión del trabajo remoto implica rediseñar procesos: selección y onboarding virtual, acuerdos de servicio y disponibilidad, medición por indicadores de resultados, y acompañamiento al liderazgo para practicar supervisión basada en confianza. También implica dotar de infraestructura adecuada y protocolos de seguridad, así como promover hábitos de autocuidado y coordinación de equipos distribuidos. La comunicación clara —canales, ritmos y propósitos— evita la saturación de mensajes y la solapación de horarios. En la formación, los entornos virtuales y microaprendizajes permiten personalizar rutas y evidenciar progreso mediante analítica de aprendizaje. Finalmente, la evaluación del desempeño migra de la observación presencial a evidencias objetivas y trazables (entregables, hitos, valor aportado), complementadas con retroalimentación 360° y reuniones de desarrollo. Internet, en suma, amplía la flexibilidad organizacional, pero demanda madurez cultural, consistencia en las reglas del juego y un enfoque deliberado en bienestar y sostenibilidad del trabajo.",
        },

        /* Párrafo 3 — e‑Business, e‑Commerce y nuevas competencias del talento (~200 palabras) */
        {
          type: "paragraph",
          text: "El e‑business integra procesos end‑to‑end soportados en plataformas digitales (CRM, ERP, LMS, ATS, HCM), lo que obliga a RH a perfilar, atraer y desarrollar talento con competencias digitales, pensamiento analítico, orientación al cliente, ciberhigiene y colaboración en red. El e‑commerce, por su parte, acelera la demanda de habilidades en marketing digital, logística ágil, experiencia de usuario, datos y servicio omnicanal. RH traduce estas necesidades en rutas de formación de alta frecuencia (bootcamps, labs, simulaciones), certificaciones internas y comunidades de práctica. En paralelo, impulsa la gestión del cambio: comunica la razón estratégica de las transformaciones, habilita a mandos medios como agentes de adopción y mide la curva de aprendizaje con indicadores de uso, satisfacción y productividad. La cultura se vuelve un activo crítico: se fomentan la experimentación segura, la toma de decisiones basada en evidencia y el aprendizaje a partir del error. Internet también habilita programas de reconocimiento social (badges, kudos) y canales de escucha activa (encuestas pulso) que retroalimentan mejoras continuas. En síntesis, el tejido digital del negocio redefine los perfiles críticos y posiciona a RH como arquitecto de capacidades, garantizando que la estrategia encuentre en el talento su principal palanca de ejecución.",
        },

        /* Párrafo 4 — E‑recruiting, marca empleadora y analítica de talento (~200 palabras) */
        {
          type: "paragraph",
          text: "El e‑recruiting aprovecha redes profesionales, portales especializados y sistemas de seguimiento de candidatos (ATS) para ampliar el alcance, acortar tiempos de cobertura y mejorar la experiencia de postulantes. La marca empleadora —nutrida por contenidos auténticos en sitios, blogs y redes— se convierte en un activo para atraer perfiles escasos. RH diseña pipelines segmentados, integra pruebas en línea y entrevistas estructuradas por competencias, y utiliza analítica descriptiva y predictiva para estimar probabilidad de ajuste y rotación. La automatización —desde chatbots de pre‑screening hasta agendado inteligente— libera tiempo para actividades de mayor valor, como entrevistas profundas y cierre consultivo. A la par, se atienden riesgos: sesgos algorítmicos, privacidad de datos y accesibilidad de procesos para diferentes perfiles. La inclusión se fortalece con vacantes redactadas en lenguaje neutro, filtros de evaluación centrados en desempeño potencial y facilidades para candidatos con diversidad funcional. Finalmente, la medición es clave: costo por contratación, calidad de contratación, tiempo a cubrir, NPS de candidatos y diversidad del funnel. Internet, bien utilizado, profesionaliza la atracción de talento y la hace más humana, transparente y orientada a experiencias.",
        },

        /* Párrafo 5 — Gobernanza tecnológica, ética y hoja de ruta de implantación (~200 palabras) */
        {
          type: "paragraph",
          text: "Adoptar Internet como plataforma de gestión del talento requiere una gobernanza clara: políticas de seguridad y privacidad, gestión del ciclo de vida de la información, matrices de acceso, continuidad del negocio y evaluación de riesgos. RH debe coordinarse con TI y Legal para asegurar cumplimiento regulatorio, contratos con proveedores cloud, niveles de servicio y cláusulas de protección de datos. En el plano ético, se establecen principios de uso responsable de datos de personas (finalidad, minimización, transparencia), criterios de explicabilidad para algoritmos que influyan en decisiones de personas y mecanismos de apelación. La hoja de ruta prioriza casos de uso con alto impacto y factibilidad: 1) digitalizar procesos críticos (reclutamiento, onboarding, formación); 2) estandarizar datos maestros de personas; 3) desplegar tableros de people analytics con KPIs accionables; 4) consolidar cultura de aprendizaje continuo; 5) escalar automatizaciones y experiencias self‑service. El cambio se gestiona con pilotos controlados, embajadores internos, capacitación práctica y métricas de adopción. El resultado esperado es un RH más ágil, seguro y estratégico, donde las decisiones se sustentan en evidencia y la tecnología amplifica —no sustituye— el juicio profesional y la centralidad humana.",
        },

        /* Acordeón — Tres niveles de síntesis y guía de estudio */
        {
          type: "accordion",
          header: "Mapa de la unidad: conceptos, procesos y riesgos",
          open: false,
          text:
            "**Nivel 1 — Conceptos clave.**  \n" +
            "• *e‑business:* digitalización integral de procesos del negocio.  \n" +
            "• *e‑commerce:* transacciones comerciales por Internet.  \n" +
            "• *Teletrabajo:* desempeño remoto con soporte TIC y reglas claras.  \n" +
            "• *E‑recruiting:* atracción y selección con plataformas y redes.  \n\n" +
            "**Nivel 2 — Procesos de RH impactados.**  \n" +
            "• Atracción y selección (ATS, pruebas en línea, marca empleadora).  \n" +
            "• Onboarding digital y firmas electrónicas.  \n" +
            "• Formación (LMS, microlearning, analítica de aprendizaje).  \n" +
            "• Comunicación interna y colaboración (suites en la nube).  \n" +
            "• Evaluación del desempeño y retroalimentación continua.  \n\n" +
            "**Nivel 3 — Indicadores y riesgos.**  \n" +
            "• KPIs: tiempo a cubrir, calidad de contratación, adopción de LMS, eNPS.  \n" +
            "• Riesgos: ciberseguridad, privacidad, sesgos algorítmicos, fatiga digital.  \n" +
            "• Controles: políticas de datos, acceso por roles, desconexión digital y soporte ergonómico.",
        },
      ],

      subthemes: [
        {
          id: "4.1",
          numbering: "4.1",
          title: "E‑business",
          content: [
            /* Párrafo 1 — Qué es el e‑business y cómo se relaciona con el e‑commerce (≈300 palabras) */
            {
              type: "paragraph",
              text: "En el contexto de la Administración de Recursos Humanos (ARH), el e‑business abarca todos los procesos empresariales que se ejecutan mediante medios electrónicos —sitios web, aplicaciones, redes sociales o mensajería instantánea— para crear, entregar y capturar valor con el apoyo de Internet. En términos operativos, puede entenderse como los intercambios empresariales que se realizan con ayuda de plataformas digitales, abarcando desde la comunicación hasta la coordinación de procesos internos y externos con clientes, proveedores y colaboradores. Un punto clave es reconocer que el e‑commerce es un subconjunto del e‑business: mientras el e‑business incluye la digitalización integral de procesos, el e‑commerce se centra en las transacciones comerciales (B2B y B2C) y en sus fases —compra, venta, negociación, pedido y pago— que se efectúan a través de Internet. Integrar ambos conceptos permite a las organizaciones articular cadenas de valor más ágiles, transparentes y medibles, lo que impacta directamente la forma en que se planifican y gestionan funciones de ARH como el reclutamiento, la capacitación y la evaluación del desempeño. En entornos de transformación digital, esta distinción no es meramente terminológica; orienta decisiones sobre qué procesos digitalizar primero, qué indicadores priorizar y qué competencias digitales desarrollar en el personal para sostener operaciones continuas y centradas en el usuario interno y externo. Al mismo tiempo, los cambios en los hábitos de consumo y la aceleración del comercio electrónico abren oportunidades para empresas de todos los tamaños que adopten tecnologías adecuadas y rediseñen procesos con enfoque en experiencia, datos y mejora continua.",
            },

            /* Acordeón 1 — Conceptos clave del subtema (viñetas del PDF) */
            {
              type: "accordion",
              header: "Conceptos clave: e‑business y e‑commerce",
              open: false,
              text:
                "* **E‑business:** procesos empresariales realizados por medios electrónicos (web, apps, redes sociales, mensajería).  \n" +
                "* **Relación con e‑commerce:** el e‑commerce es un componente del e‑business; se enfoca en transacciones (compra, venta, negociación, pedido y pago) por Internet.  \n" +
                "* **Oportunidad de mercado:** la transformación de hábitos de consumo impulsa a empresas de todos los tamaños a aprovechar el comercio electrónico con soporte tecnológico.  \n",
            },

            /* Párrafo 2 — Impacto del e‑business en ARH y la organización (≈300 palabras) */
            {
              type: "paragraph",
              text: "La adopción de e‑business está remodelando la gestión del capital humano y, con ello, el rol estratégico de ARH. En la medida en que los procesos de personal migran a plataformas digitales, las áreas de RR. HH. emprenden transformaciones e invierten en tecnología habilitada por Internet para ganar eficiencia, liberar tiempo administrativo y enfocarse en tareas de mayor impacto estratégico. Entre los efectos directos se incluyen mejoras en el compromiso de los colaboradores, mayor transparencia y canales de comunicación bidireccional entre directivos y empleados. Este cambio tecnológico no solo optimiza la operación: también habilita nuevas formas de organizar el trabajo, como el teletrabajo y los modelos híbridos, y empuja a crear divisiones digitales capaces de rediseñar productos y servicios —incluidos modelos de suscripción y soluciones apalancadas en software e inteligencia artificial. Para capitalizar estos beneficios en ARH, el e‑business exige alinear prácticas de reclutamiento y selección con competencias en TIC, actualizar perfiles de puesto, y desplegar analítica de personas para tomar decisiones informadas sobre atracción, desarrollo y retención de talento. Asimismo, el avance del comercio electrónico y de los servicios digitales obliga a revisar políticas, flujos y métricas de desempeño para sostener experiencias consistentes del empleado y del cliente, a la vez que se fortalecen capacidades organizacionales en aprendizaje continuo, gestión del cambio y colaboración virtual. En síntesis, el e‑business no es únicamente una capa tecnológica; es un vector de cambio organizacional que coloca a ARH en el centro de la estrategia digital.",
            },

            /* Acordeón 2 — Implicaciones para ARH (viñetas del PDF) */
            {
              type: "accordion",
              header: "Implicaciones para Recursos Humanos",
              open: false,
              text:
                "* **Transformación de RR. HH.:** proyectos e inversiones en tecnología liderados por Internet para gestionar personas con mayor eficiencia.  \n" +
                "* **Compromiso y comunicación:** soluciones digitales que elevan la transparencia y el intercambio entre líderes y colaboradores.  \n" +
                "* **Nuevas capacidades:** creación de divisiones digitales y adaptación de reclutamiento/selección a competencias TIC.  \n" +
                "  ",
            },
          ],
        },
        {
          id: "4.2",
          numbering: "4.2",
          title: "E‑commerce",
          content: [
            /* Párrafo 1 — Qué es y cómo se relaciona con el e‑business (~300 palabras) */
            {
              type: "paragraph",
              text: "El comercio electrónico (e‑commerce) es el conjunto de transacciones de compra–venta de bienes y servicios que se realizan total o parcialmente por medios electrónicos, típicamente a través de Internet. En el marco de la unidad “Internet en la empresa”, este subtema aborda el e‑commerce como una pieza específica dentro del e‑business: mientras el e‑business cubre la digitalización de procesos de negocio de punta a punta (logística, marketing, servicio a clientes, analítica, cumplimiento), el e‑commerce se enfoca en la interacción transaccional con el cliente —desde la consulta en línea de productos hasta el pedido, pago y confirmación— articulando flujos de datos que conectan catálogo, inventario, precios, promociones y medios de pago. Operativamente, su implementación exige alinear arquitectura tecnológica (sitio, pasarela de pago, CRM, ERP/WMS), gobernanza de datos (SKU, precios, stock, perfiles de cliente), y políticas de experiencia de usuario (UX/UI, accesibilidad, mobile‑first). Además, implica cumplir requisitos de seguridad y privacidad, particularmente en el manejo de datos personales y bancarios; de allí que las prácticas de cifrado, tokenización y adhesión a estándares de seguridad sean parte del diseño. En términos de propuesta de valor, el e‑commerce amplía el alcance geográfico del negocio, habilita personalización basada en datos de comportamiento y permite modelos de venta asincrónicos (24/7), pero también introduce retos: gestión de la última milla, prevención de fraude, atención omnicanal y consistencia de inventario. Esta visión integral subraya que el e‑commerce no es solo “una tienda en línea”, sino un engranaje que se acopla a la estrategia corporativa, a los procesos back‑office y a la cadena de suministro para crear una experiencia confiable, conveniente y segura para el cliente.",
            },

            /* Párrafo 2 — Modelos, cadena de valor y operación (~300 palabras) */
            {
              type: "paragraph",
              text: "Existen múltiples configuraciones de e‑commerce según el tipo de intercambio y la forma de operar. A nivel de mercado, destacan B2C (empresa‑consumidor), B2B (empresa‑empresa), C2C (entre consumidores mediante plataformas) y C2B (consumidor‑empresa en esquemas de crowdsourcing o marketplaces de servicios). También son relevantes D2C (fabricante directo al consumidor) y modelos híbridos omnicanal donde la compra es digital pero el cumplimiento puede ser envío a domicilio, retiro en tienda o taquillas inteligentes. Estas modalidades condicionan el diseño de catálogo, precios y logística (por ejemplo, B2B suele involucrar listas de precios por cliente, pedidos por volumen y facturación integrada; B2C se centra en conversión, promociones y devoluciones ágiles). En la cadena de valor digital, el recorrido típico del cliente comprende descubrimiento (SEO/SEM, redes), consideración (fichas detalladas, comparadores, reseñas), decisión (carrito, cupones), transacción (checkout seguro, medios de pago locales), y posventa (tracking, soporte, devoluciones). Para sostener este ciclo se requieren integraciones robustas con inventarios en tiempo real, reglas de surtido, cálculo de costos de envío y estimaciones de entrega, además de analítica para medir abandono de carrito, tasa de conversión y valor de vida del cliente. Operar bien implica también segmentación y personalización —recomendadores, bundles, cross‑sell— y procesos antifraude (3‑D Secure, validaciones por riesgo) que equilibren seguridad y fricción mínima. Finalmente, la madurez operativa se refleja en SLA de despacho y en políticas claras de cambios y garantías, factores que inciden de manera directa en la satisfacción y en la repetición de compra.",
            },

            /* Lista 1 — Tipologías y modelos de e‑commerce */
            {
              type: "list",
              heading: "Tipologías y modelos de e‑commerce (visión de mercado)",
              items: [
                "B2C (Business‑to‑Consumer): venta minorista directa al consumidor final.",
                "B2B (Business‑to‑Business): transacciones entre empresas; a menudo predominante por volumen.",
                "C2C (Consumer‑to‑Consumer): intercambios entre personas en plataformas/marketplaces.",
                "C2B (Consumer‑to‑Business): el consumidor ofrece productos/servicios a empresas.",
                "D2C (Direct‑to‑Consumer): fabricantes venden sin intermediarios al consumidor final.",
                "Marketplaces multivendedor: catálogo unificado, logística y pagos orquestados por la plataforma.",
              ],
            },

            /* Párrafo 3 — Cumplimiento, seguridad, métricas y mejora continua (~300 palabras) */
            {
              type: "paragraph",
              text: "El desempeño del e‑commerce depende de su capacidad para ejecutar con consistencia el cumplimiento del pedido, proteger la transacción y aprender del comportamiento del cliente. En cumplimiento, la precisión del inventario y la orquestación logística (picking, packing, rutas y tiempos de entrega) son críticas para mantener promesas de disponibilidad y plazos. En seguridad, el objetivo es procesar pagos con el menor riesgo posible: cifrar datos, evitar el almacenamiento de PAN, usar tokenización y autenticación fuerte del cliente en combinación con monitoreo de fraude. En experiencia, reducir fricciones en el checkout (formularios cortos, autocompletado, opciones de pago locales) y comunicar con transparencia costos y tiempos disminuye el abandono. La disciplina de medición transforma el canal: definir métricas (sesiones, conversión, valor promedio de pedido, recurrencia, tiempo hasta la entrega, tasa de devolución) y establecer bucles de mejora (tests A/B, análisis de embudo, cohortes) permite priorizar cambios que impactan ventas y margen. Paralelamente, la gestión de servicios posventa —seguimiento del envío, autoservicio para devoluciones y cambios, soporte en vivo— incide en la reputación y en el LTV del cliente. En mercados multicategoría, la estrategia de surtido y la logística segmentada (por temperatura, fragilidad, volumetría) requieren reglas diferenciadas de promesa de entrega. A nivel organizacional, el e‑commerce madura cuando se integra con finanzas (conciliación y facturación), comercial (pricing dinámico, promociones), y tecnología (observabilidad, escalabilidad ante picos estacionales). Una hoja de ruta sustentable combina eficiencia operativa, seguridad, cumplimiento normativo y una evolución continua de la experiencia digital para crear relaciones de largo plazo con los clientes y contribuir a los objetivos estratégicos de la empresa.",
            },

            /* Lista 2 — Métricas y buenas prácticas operativas */
            {
              type: "list",
              heading: "Métricas y buenas prácticas clave",
              items: [
                "KPI esenciales: tasa de conversión, ticket promedio (AOV), recurrencia y CLV; abandono de carrito y de checkout.",
                "Checkout seguro y con fricción mínima: autenticación reforzada + tokenización + métodos de pago locales.",
                "Inventario en tiempo real y reglas de disponibilidad: evita sobreventa y mejora la promesa de entrega.",
                "Logística flexible: envío a domicilio, retiro en tienda, lockers; SLA y tracking visibles para el cliente.",
                "Optimización continua: pruebas A/B de fichas, botones, formularios; personalización con recomendaciones.",
                "Analítica de embudos y cohortes: identifica cuellos de botella y prioriza mejoras de mayor impacto.",
              ],
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://cdn.shopify.com/s/files/1/0229/0839/files/pago_y_envio.png?5222026647048063260",
              alt: "Interfaz de una tienda en línea y proceso de pago en e‑commerce",
              caption:
                "Del descubrimiento a la compra: catálogo, carrito, checkout y confirmación integrados.",
            },
          ],
        },
        {
          id: "4.3",
          numbering: "4.3",
          title: "Teletrabajo",
          content: [
            /* Párrafo 1 — Concepto, alcances y política institucional (~300 palabras) */
            {
              type: "paragraph",
              text: "El teletrabajo es una modalidad de organización del trabajo en la que las actividades se realizan total o parcialmente fuera de las instalaciones de la empresa, apoyadas en tecnologías de la información y la comunicación. Puede adoptar configuraciones diversas: remoto total, híbrido (combinando días presenciales y a distancia), y trabajo móvil desde ubicaciones cambiantes. Desde la perspectiva de la Administración de Recursos Humanos, su despliegue no es solo un cambio de lugar, sino un rediseño de procesos, roles, supervisión y cultura. Una política institucional de teletrabajo debe delimitar objetivos, elegibilidad de puestos (criterios de tareas, confidencialidad, atención a clientes, requerimientos de equipo), responsabilidades del colaborador y de la organización (suministro de herramientas, soporte técnico, ciberseguridad), y un marco de cumplimiento (protección de datos, seguridad y salud en el trabajo, y derechos laborales). La selección de candidatos a teletrabajo incorpora competencias como autorregulación, manejo del tiempo, comunicación escrita efectiva y colaboración en entornos digitales. Para asegurar continuidad operativa, se definen canales oficiales de comunicación (sincrónicos y asincrónicos), ventanas de disponibilidad, acuerdos de servicio interno y protocolos ante incidentes tecnológicos. Finalmente, la empresa debe prever el “derecho a desconexión”, pautas de reunión (duración y propósito), y mecanismos de seguimiento basados en resultados, evitando el control invasivo. Esta visión estratégica vincula el teletrabajo con metas de productividad, atracción y retención de talento, inclusión (acceso a perfiles en otras regiones) y sostenibilidad (reducción de traslados), a la vez que reconoce riesgos como aislamiento, fatiga digital o difuminación de límites vida‑trabajo, los cuales deben ser gestionados mediante prácticas preventivas y soporte adecuado.",
            },

            /* Acordeón 1 — Lineamientos y buenas prácticas */
            {
              type: "accordion",
              header: "Lineamientos y buenas prácticas de teletrabajo",
              open: false,
              text:
                "* **Elegibilidad de puestos:** analizar tareas, flujos de información y requerimientos de atención presencial.\\n" +
                "* **Acuerdos claros:** objetivos, entregables, horarios de referencia y criterios de disponibilidad.\\n" +
                "* **Derecho a desconexión:** evitar comunicaciones fuera de horario salvo emergencias definidas.\\n" +
                "* **Ergonomía y salud:** orientación sobre mobiliario, pausas activas y microdescansos.\\n" +
                "* **Ciberseguridad:** VPN, MFA, políticas de contraseñas y manejo de información sensible.\\n" +
                "* **Comunicación efectiva:** rituales de coordinación (dailies breves), agendas y actas.\\n" +
                "* **Soporte TI:** mesa de ayuda, repositorio de guías y tiempos de respuesta (SLA).\\n" +
                "* **Onboarding remoto:** kit de bienvenida digital, mentoría y checklist de accesos.\\n" +
                "* **Inclusión:** prácticas que eviten sesgos entre equipos presenciales y remotos.",
            },

            /* Párrafo 2 — Implementación operativa y experiencia del colaborador (~300 palabras) */
            {
              type: "paragraph",
              text: "La implementación operativa del teletrabajo inicia con un diagnóstico de procesos (qué, quién, con qué herramientas y en qué secuencia) para identificar dependencias críticas, datos personales y puntos de control. A partir de ello se modela un “circuito digital” que integra: autenticación segura, espacios de colaboración documental, canales de mensajería y videoconferencia, y tableros de seguimiento. En paralelo, se habilita un esquema de soporte que contemple préstamos o subsidios de equipo, conectividad y mantenimiento básico. La experiencia del colaborador debe cuidarse desde el primer día: un onboarding remoto que articule cultura, objetivos y relaciones clave reduce la curva de aprendizaje y fortalece la pertenencia. En el plano del bienestar, las pautas de pausas activas, la gestión de reuniones (tiempos acotados, agendas claras), el uso de video de manera intencional y la alternancia entre canales sincrónicos y asincrónicos disminuyen la fatiga digital. La formación de líderes es decisiva: liderar a distancia demanda establecer expectativas medibles, dar retroalimentación frecuente y reconocer logros visibles para toda la red. Asimismo, conviene calendarizar espacios de socialización y aprendizaje entre pares para sostener la cohesión del equipo. En términos de cumplimiento, deben documentarse evaluaciones de riesgos del puesto remoto (ergonomía y seguridad de la información), así como consentimientos informados sobre el tratamiento de datos. Finalmente, el modelo debe ser revisado de forma iterativa mediante encuestas de pulso, métricas de servicio interno y análisis de incidentes, ajustando políticas y herramientas según la evidencia, no por inercia. Teletrabajo efectivo equivale a procesos claros, herramientas adecuadas y liderazgo basado en confianza y resultados.",
            },

            /* Acordeón 2 — Herramientas y métricas recomendadas */
            {
              type: "accordion",
              header:
                "Herramientas y métricas clave para gestionar equipos remotos",
              open: false,
              text:
                "* **Colaboración y gestión:** suites ofimáticas en la nube, tableros Kanban, wikis y repositorios.\\n" +
                "* **Comunicación:** mensajería corporativa (canales por proyecto), videoconferencias con grabación y transcripción.\\n" +
                "* **Seguridad:** VPN, gestión de identidades (SSO), autenticación multifactor (MFA) y cifrado de discos.\\n" +
                "* **Soporte y monitoreo:** mesa de ayuda con tickets, catálogos de servicios y alertas básicas.\\n" +
                "* **Métricas de desempeño:** cumplimiento de OKR/KPI, tiempos de ciclo, throughput de tareas, calidad (defectos/retrabajos).\\n" +
                "* **Clima y bienestar:** encuestas de pulso, eNPS, indicadores de carga de reuniones y equilibrio vida‑trabajo.\\n" +
                "* **Experiencia del cliente interno:** tiempos de respuesta entre áreas, satisfacción de usuarios internos.",
            },

            /* Párrafo 3 — Desempeño, cultura y sostenibilidad del modelo (~300 palabras) */
            {
              type: "paragraph",
              text: "La gestión del desempeño en teletrabajo debe desplazarse de la “presencia” hacia el logro de resultados verificables. Para ello, los equipos definen objetivos alineados (OKR) y establecen indicadores de valor de negocio (tiempo de entrega, calidad, satisfacción del cliente) y de salud del sistema (incidentes, tiempos de recuperación). La cadencia de seguimiento —revisiones semanales ligeras y retros mensuales— posibilita detectar cuellos de botella y ajustar compromisos sin perder tracción. La cultura es el pegamento: normas compartidas sobre comunicación (cuándo chat, cuándo correo, cuándo reunión), documentación mínima de acuerdos y transparencia en decisiones reducen malentendidos y favorecen la autonomía. Es clave evitar el “sesgo de proximidad”: las oportunidades, reconocimientos y proyectos estratégicos deben distribuirse independientemente de la presencia física. En seguridad y cumplimiento, conviene reforzar prácticas de “mínimo privilegio”, clasificación de información y formación periódica en phishing y resguardo de datos. En bienestar, observar señales de fatiga —exceso de reuniones, mensajes fuera de horario— permite intervenir con reglas simples (bloques sin reuniones, ventanas de foco, rotación de horarios). A medio plazo, la sostenibilidad del modelo depende de invertir en competencias digitales, rediseñar procesos con enfoque de experiencia (del empleado y del cliente) y medir tanto la productividad como la calidad de vida. Cuando el teletrabajo se gobierna con claridad, confianza y evidencia, se convierte en una ventaja competitiva: amplía el acceso a talento, habilita continuidad operativa y alinea la organización con formas de trabajo más flexibles y resilientes, sin sacrificar seguridad ni resultados.",
            },
          ],
        },
      ],
    },

    /* ── Unidad 5 ── */
    {
      id: "5",
      numbering: "Unidad 5",
      title: "Outsourcing",
      content: [
        /* Párrafo 1 — Qué es y por qué aparece (≈200 palabras) */
        {
          type: "paragraph",
          text: "El outsourcing, también llamado subcontratación o tercerización, es una práctica mediante la cual una organización encarga a un proveedor externo la ejecución de procesos, funciones o servicios que no forman parte del núcleo estratégico de su negocio. Su auge responde a entornos competitivos con alta presión por reducir costos, acelerar la adopción tecnológica y acceder a capacidades especializadas sin realizar grandes inversiones internas. En administración de recursos humanos, la subcontratación ha sido utilizada para tareas como reclutamiento y selección, nómina, capacitación específica, soporte legal‑laboral o gestión de plataformas. Lejos de ser una simple medida de ahorro, el outsourcing reconfigura la arquitectura operativa: permite reasignar recursos hacia actividades de alto valor, ganar flexibilidad ante picos de demanda y aprovechar economías de escala y de conocimiento del proveedor. No obstante, la decisión no es trivial: exige analizar el encaje con el modelo de negocio, los riesgos de dependencia, la pérdida de aprendizaje organizacional y los impactos en clima y cultura. Comprender qué, cuándo y cómo tercerizar es clave para mantener el control sobre los resultados, garantizar estándares de calidad y alinear la práctica con las obligaciones legales y éticas de la organización.",
        },

        /* Párrafo 2 — Alcance, beneficios y riesgos (≈200 palabras) */
        {
          type: "paragraph",
          text: "El alcance del outsourcing puede ir desde servicios puntuales (p. ej., levantamiento de descripciones de puesto) hasta contratos integrales (BPO) que abarcan procesos de extremo a extremo. Entre los beneficios más señalados destacan: reducción de costos fijos al convertirlos en variables; acceso inmediato a expertos y mejores prácticas; mejora de la productividad por especialización; y aceleración de la transformación digital. A la par, emergen riesgos que deben gestionarse: pérdida de visibilidad operativa, dependencia del proveedor, posibles brechas de seguridad y confidencialidad, y degradación del servicio si no hay métricas y gobierno efectivos. En personas, un traspaso apresurado de funciones puede generar incertidumbre, desmotivación o tensiones sindicales. Por ello, la subcontratación responsable exige mapas de procesos claros, acuerdos de niveles de servicio (SLA) medibles, cláusulas de continuidad del negocio, controles de protección de datos y planes de transición que consideren la transferencia de conocimiento. Una evaluación integral costo‑beneficio debe incluir no solo precio, sino también riesgos, tiempos de respuesta, experiencia sectorial, madurez tecnológica, cultura de cumplimiento y evidencias de desempeño. Con esta mirada sistémica, el outsourcing se convierte en palanca para enfocar a RH en lo estratégico.",
        },

        /* Párrafo 3 — Marco regulatorio y cumplimiento (≈200 palabras) */
        {
          type: "paragraph",
          text: "El marco regulatorio reciente ha redefinido la frontera entre subcontratación legítima y simulación laboral. En México, por ejemplo, la reforma de 2021 prohibió la subcontratación de personal que realiza actividades del objeto social o preponderantes de la empresa, y permitió exclusivamente la contratación de servicios u obras especializadas que no formen parte de ese núcleo, condicionadas al registro del proveedor y a obligaciones de transparencia, seguridad social y fiscales. Este giro busca evitar prácticas de evasión y precarización, a la vez que conserva el valor de la especialización externa. Para los responsables de RH, la implicación práctica es doble: (1) revisar el catálogo de funciones de la organización para distinguir el core de lo especializable, y (2) robustecer los procesos de debida diligencia de proveedores: verificación de registros y licencias, solvencia, cumplimiento laboral, historial de inspecciones, protección de datos y planes de higiene y seguridad. Los contratos deben precisar alcance, resultados, indicadores, responsabilidades solidarias, régimen de confidencialidad, medidas anticorrupción y cláusulas de terminación ordenada. Cumplir la ley no es únicamente evitar sanciones: habilita relaciones proveedor‑cliente más sanas, sostenibles y alineadas con los estándares ESG que exigen inversionistas, clientes y talento.",
        },

        /* Párrafo 4 — Implementación y gobierno del servicio (≈200 palabras) */
        {
          type: "paragraph",
          text: "Implementar outsourcing con éxito demanda un proyecto con fases definidas: diagnóstico (línea base de costos, desempeño y riesgos), diseño del caso de negocio, selección del modelo (por resultados, por transacción, híbrido), proceso competitivo de proveedores, transición y estabilización, y gobierno continuo. En la transición, es crucial un plan de traspaso de conocimiento y documentación operativa, acuerdos sobre herramientas y datos, y un calendario de hitos con responsables. En la estabilización, se instituyen comités de servicio, tableros con KPIs (tiempo de cobertura de vacantes, precisión de nómina, satisfacción del usuario, cumplimiento SLA), revisiones trimestrales y mecanismos de mejora continua. El gobierno efectivo equilibra control y colaboración: audita procesos críticos, ejecuta encuestas de satisfacción a usuarios internos y asegura reservas de capacidad para picos. La gestión de cambios (comunicación, formación, acompañamiento) reduce la resistencia y protege la experiencia del colaborador. Por último, la diversificación de proveedores y las cláusulas de salida mitigarán riesgos de concentración, mientras que evaluaciones periódicas de valor (benchmarking externo) acreditan que el servicio sigue siendo competitivo en costo, calidad y tecnología.",
        },

        /* Párrafo 5 — Criterios para decidir qué tercerizar (≈200 palabras) */
        {
          type: "paragraph",
          text: "No todo debe ni conviene tercerizar. Una regla práctica es preservar internamente las capacidades que diferencian al negocio o que constituyen competencias esenciales (p. ej., cultura, liderazgo de talento clave, analítica estratégica de fuerza laboral), y evaluar para outsourcing aquellas actividades estandarizables, repetitivas o con alta economía de escala externa. Criterios útiles: (a) impacto en la propuesta de valor; (b) criticidad y riesgo operativo; (c) madurez de procesos y facilidad de especificar resultados; (d) sensibilidad de datos tratados; (e) dinámica de demanda (picos/estacionalidad); (f) disponibilidad y profundidad del mercado proveedor; (g) efectos en la experiencia del colaborador; y (h) retorno esperado ajustado por riesgo. Antes de decidir, conviene comparar alternativas: automatizar internamente (RPA/IA), mejorar procesos, insourcing compartido (centros de servicio) o co‑sourcing (equipo mixto). Un piloto con alcance acotado permite validar supuestos y ajustar SLAs. Si la decisión es tercerizar, diseñar indicadores centrados en resultados (outcomes) y no solo en actividad, incentivar la innovación del proveedor, y establecer revisiones anuales del make‑or‑buy asegurará que la elección siga siendo la mejor a lo largo del tiempo.",
        },

        /* Acordeón — Guía práctica en tres niveles */
        {
          type: "accordion",
          header: "Guía práctica de outsourcing: de la idea a la operación",
          open: false,
          text:
            "**Nivel 1 · Decisión estratégica**  \n" +
            "• Delimita el *core* vs. actividades especializables.  \n" +
            "• Evalúa riesgos legales, laborales y de datos.  \n" +
            "• Define resultados esperados y caso de negocio.  \n\n" +
            "**Nivel 2 · Contratación y transición**  \n" +
            "• Due diligence del proveedor (registro, cumplimiento, solvencia).  \n" +
            "• SLA/KPI, privacidad, continuidad y cláusulas de salida.  \n" +
            "• Plan de transferencia de conocimiento y gestión del cambio.  \n\n" +
            "**Nivel 3 · Operación y mejora**  \n" +
            "• Gobierno del servicio (comités, tableros, auditorías).  \n" +
            "• Encuestas a usuarios y planes de mejora continua.  \n" +
            "• Revisión anual *make‑or‑buy* y benchmarking de valor.",
        },
      ],

      subthemes: [
        {
          id: "5.1",
          numbering: "5.1",
          title: "Antecedentes",
          content: [
            /* Párrafo 1 — Orígenes y sentido del outsourcing (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "El outsourcing, entendido en el ámbito empresarial como la subcontratación de servicios externos especializados, surge como respuesta a la necesidad de concentración estratégica en el giro principal de las organizaciones y al aprovechamiento de economías de escala y del conocimiento. Si bien etimológicamente la expresión proviene de out (fuera) y source (origen), en gestión se emplea para referir la decisión de delegar uno o varios procesos a un proveedor con mayor expertise y capacidad instalada, liberando a la empresa contratante para enfocar recursos en su core business. En el contexto mexicano, la práctica se expandió de la mano de la modernización organizacional y la adopción de tecnologías de la información que habilitaron integrar cadenas de valor extendidas con proveedores especializados. De esta manera, funciones como instalaciones de telecomunicaciones, soporte técnico, rediseño estructural, planeación estratégica, entrenamiento de personal o el diseño y mantenimiento de páginas web se volvieron candidatas frecuentes para externalizarse. La lógica de fondo combina eficiencia operativa, reducción de costos y acceso ágil a capacidades que sería costoso o lento desarrollar internamente. Sin embargo, estos antecedentes también dejan ver una frontera clave: no deben externalizarse actividades que constituyen el objeto social o la actividad económica preponderante de la empresa, pues se comprometería su identidad y control sobre los factores críticos de desempeño. En suma, los orígenes del outsourcing como práctica de gestión se explican por el equilibrio entre enfoque estratégico, especialización del proveedor y mejora en la calidad/tiempo/costo, siempre que se definan con claridad alcances, estándares y mecanismos de gobierno de la relación.",
            },

            /* Acordeón 1 — Ideas fuerza del apartado de antecedentes (según el PDF) */
            {
              type: "accordion",
              header: "Ideas clave de los antecedentes (síntesis del módulo)",
              open: false,
              text:
                "* **Sentido estratégico:** concentrarse en el giro principal y aprovechar economías de escala y del conocimiento.  \n" +
                "* **Ámbitos típicos de externalización:** telecomunicaciones y redes, soporte técnico, rediseño estructural, planeación, capacitación, diseño/mantenimiento web, reingeniería de procesos.  \n" +
                "* **Límite esencial:** no subcontratar funciones que forman parte del objeto social o actividad preponderante.",
            },

            /* Párrafo 2 — Evolución reciente y marco regulatorio (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "A partir de su adopción extendida, el outsourcing evolucionó desde acuerdos transaccionales hacia relaciones más integradas, con niveles de servicio (SLA), indicadores de desempeño y cláusulas de confidencialidad y propiedad intelectual. En México, esta madurez vino acompañada de una actualización regulatoria decisiva: la reforma de 2021 que prohíbe la subcontratación de personal y permite únicamente la contratación de servicios u obras especializadas que no formen parte del objeto social ni de la actividad económica preponderante. Este giro normativo respondió a abusos detectados (simulación de relaciones laborales, evasión de obligaciones) y colocó el énfasis en la trazabilidad, el registro de proveedores y la protección de derechos laborales. En términos de gestión, el nuevo entorno exige a las empresas justificar técnicamente por qué un servicio es especializado, describir con precisión entregables y transferencias, y garantizar condiciones laborales cuando exista personal del proveedor operando en sitio. Estos antecedentes regulatorios han reorientado las decisiones de make-or-buy hacia modelos de colaboración con alto control de cumplimiento, auditorías recurrentes y gestión de riesgos compartidos. A la par, la digitalización ha permitido operar esquemas de outsourcing con fuerte soporte de datos y herramientas de monitoreo, integrando tableros con indicadores de calidad, tiempos de respuesta, resolución a primer contacto y mejora continua. El resultado es una práctica más profesionalizada, con contratos que contemplan ajustes por inflación, soporte post-servicio, flexibilidad ante cambios no previstos y beneficios por avances tecnológicos, sin perder de vista que el fin último es potenciar la competitividad de la empresa contratante sin desdibujar su núcleo operativo.",
            },

            /* Acordeón 2 — Recomendaciones contractuales (síntesis del módulo) */
            {
              type: "accordion",
              header:
                "Recomendaciones al contratar outsourcing (según el módulo)",
              open: false,
              text:
                "1) **Definir el servicio**: alcance, entregables y forma de provisión.  \n" +
                "2) **Tiempos y fechas**: hitos y cronograma.  \n" +
                "3) **Estándares de desempeño**: métricas y SLA.  \n" +
                "4) **Condiciones de cancelación**: criterios y procesos.  \n" +
                "5) **Personal transferido temporalmente**: responsabilidades y supervisión.  \n" +
                "6) **Propiedad sobre resultados**: derechos y licencias.  \n" +
                "7) **Confidencialidad**: protección de información y datos.  \n" +
                "8) **Ajustes económicos**: fórmulas e inflación.  \n" +
                "9) **Soporte posservicio**: garantías y atención.  \n" +
                "10) **Beneficios tecnológicos**: actualización y mejoras.  \n" +
                "11) **Flexibilidad contractual**: gestión de cambios no previstos.",
            },

            /* Párrafo 3 — Beneficios, límites y enfoque actual (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Desde sus antecedentes, el outsourcing se concibe como una palanca para incrementar eficiencia, productividad y calidad, aprovechando la especialización acumulada de firmas expertas que han atendido múltiples organizaciones y sectores. Los beneficios típicos incluyen reducción de costos fijos, acceso ágil a competencias de nicho, incremento de la velocidad de implementación y mayor capacidad de escalamiento. No obstante, su efectividad depende de gobernanza rigurosa: selección y homologación de proveedores, indicadores compartidos, instancias de revisión de desempeño, y una matriz de riesgos que considere continuidad operativa, seguridad de la información y cumplimiento laboral-fiscal. En el plano estratégico, el límite es claro: no externalizar actividades que definen la propuesta de valor, la relación crítica con clientes o las capacidades distintivas de la empresa. En el plano operativo, la experiencia muestra que los mejores resultados provienen de contratos que alinean incentivos (p. ej., bonos por mejora sostenida), contemplan mecanismos de transición (entrada y salida), y prevén repositorios de conocimiento para evitar dependencia excesiva del proveedor. Finalmente, con la digitalización y el auge del trabajo distribuido, los antecedentes del outsourcing se entrelazan con modelos como el teletrabajo, e‑business y e‑commerce, lo que exige integrar cláusulas sobre ciberseguridad, protección de datos y continuidad tecnológica. Así, los aprendizajes históricos del outsourcing —foco en el core, especialización, y retos de control— se traducen hoy en ecosistemas colaborativos más robustos, que maximizan el valor sin comprometer el cumplimiento ni la identidad corporativa.",
            },
          ],
        },
        {
          id: "5.2",
          numbering: "5.2",
          title: "Definición",
          content: [
            /* Párrafo 1 — Qué es el outsourcing (≈300 palabras) */
            {
              type: "paragraph",
              text: "El outsourcing, también llamado subcontratación o externalización, es una práctica de gestión mediante la cual una organización encarga a un tercero especializado la ejecución de procesos, funciones o tareas que no forman parte de su actividad principal, con el propósito de incrementar la eficiencia, reducir costos, acceder a know‑how específico y concentrar los recursos internos en el core del negocio. En términos operativos, supone firmar un acuerdo de servicios con una empresa experta que asume con medios propios (personas, procesos, tecnología) la responsabilidad de entregar productos o resultados pactados bajo estándares y tiempos definidos. La lógica estratégica detrás de esta decisión se asienta en dos ideas: por un lado, aprovechar economías de escala y de conocimiento de proveedores que realizan esa función para múltiples clientes, y por otro, evitar dispersión gerencial en actividades de bajo aporte diferenciador para la ventaja competitiva. En la práctica, el outsourcing puede abarcar desde funciones de soporte (TI, nómina, mantenimiento, mesa de ayuda, diseño web, telemarketing) hasta servicios altamente especializados (ciberseguridad, analítica, formación, reclutamiento por proyectos). Sin embargo, la subcontratación no es sinónimo de ‘tercerizar todo’: requiere un análisis riguroso de qué procesos conviene mantener in‑house por su impacto estratégico o por contener capacidades distintivas. Además, conlleva obligaciones contractuales y de cumplimiento (SLA, confidencialidad, protección de datos, propiedad intelectual, continuidad operativa, auditorías), así como una gobernanza clara con indicadores y mecanismos de seguimiento. En contextos regulados, es crucial distinguir entre la prestación de servicios especializados y la mera intermediación de personal, diseñando esquemas que respeten la legislación laboral y preserven condiciones de trabajo dignas.",
            },

            /* Lista 1 (complemento) — Alcances y tipos frecuentes de outsourcing */
            {
              type: "list",
              title: "Alcances y modalidades frecuentes",
              style: "unordered",
              items: [
                "BPO (Business Process Outsourcing): nómina, contabilidad, atención al cliente, compras.",
                "ITO (IT Outsourcing): infraestructura, soporte, desarrollo y mantenimiento de software, ciberseguridad.",
                "KPO (Knowledge Process Outsourcing): analítica, investigación, ingeniería, diseño instruccional.",
                "RPO (Recruitment Process Outsourcing): reclutamiento y selección por volumen o por proyectos.",
                "MSP/ASC (servicios gestionados): proveedor opera con SLA y KPIs acordados, con reportes periódicos.",
              ],
            },

            /* Párrafo 2 — Beneficios y riesgos; criterios para decidir (≈300 palabras) */
            {
              type: "paragraph",
              text: "Entre los beneficios más citados de la subcontratación destacan la reducción de costos fijos, la conversión de CAPEX a OPEX, la rapidez para escalar capacidad, el acceso inmediato a tecnologías y prácticas de excelencia, y la mejora en tiempos de entrega al profesionalizar procesos de soporte. También facilita absorber picos de demanda sin sobredimensionar plantilla y puede elevar la calidad gracias a la experiencia acumulada del proveedor. No obstante, implica riesgos que deben gestionarse: pérdida de visibilidad sobre actividades críticas, dependencia de un tercero, posibles brechas de seguridad o de protección de datos, impactos en la cultura y en la experiencia del colaborador si el servicio afecta procesos de personas, y el riesgo de ‘lock‑in’ contractual. Para decidir qué externalizar conviene mapear procesos por valor estratégico y por madurez operativa, estimar el TCO (costo total de propiedad) actual vs. el costo del servicio, y comparar el nivel de servicio alcanzable internamente frente al SLA del proveedor. La debida diligencia debe revisar solvencia, certificaciones, capacidades técnicas, referencias y planes de continuidad del proveedor. En la etapa de contrato se definen entregables, KPIs, matriz RACI, gobernanza (comités, cadencia de revisión), gestión de incidencias y penalizaciones, esquema de transición, cláusulas de confidencialidad/propiedad intelectual, y condiciones de terminación y reversibilidad. La operación se apoya en tableros de seguimiento y auditorías; y, si el servicio toca datos personales, en controles de privacidad y seguridad alineados a normativa vigente. La combinación de un buen ‘case for outsourcing’, un contrato bien diseñado y una gestión activa del servicio determina el éxito del modelo.",
            },

            /* Lista 2 (complemento) — Buenas prácticas y cumplimiento */
            {
              type: "list",
              title: "Buenas prácticas de implementación y cumplimiento",
              style: "unordered",
              items: [
                "Definir objetivos claros (costo, calidad, tiempo) y KPIs medibles antes de licitar.",
                "Establecer SLA realistas, con umbrales, ventanas de servicio y penalizaciones proporcionales.",
                "Plan de transición: transferencia de conocimiento, inventario de activos, gestión del cambio y comunicación.",
                "Seguridad y privacidad: acuerdos de confidencialidad, controles de acceso, cifrado, evaluación de riesgos.",
                "Cumplimiento laboral y fiscal: delimitar ‘servicio especializado’ y evitar esquemas que impliquen simulación de relaciones laborales.",
                "Revisiones periódicas de desempeño y encuestas de satisfacción a usuarios internos.",
              ],
            },

            /* Párrafo 3 — Outsourcing en el marco de RH y del contexto regulatorio (≈300 palabras) */
            {
              type: "paragraph",
              text: "En el ámbito de Recursos Humanos, el outsourcing suele materializarse en servicios de nómina, administración de prestaciones, reclutamiento por volumen, capacitación por catálogo o gestión de centros de evaluación. Desde la perspectiva de la experiencia del colaborador, es clave cuidar niveles de servicio, tiempos de respuesta y canales de soporte para que la externalización no degrade la percepción interna. En mercados como el mexicano, la práctica ha evolucionado hacia modelos de ‘servicios especializados’ y de ejecución de obras específicas, distinguiéndose de la simple intermediación de personal. Esto exige revisar con detalle el objeto del contrato, la alineación con el objeto social y la actividad preponderante de cada parte, así como la trazabilidad de las obligaciones patronales para evitar riesgos legales, reputacionales y operativos. Para maximizar el valor, las áreas de RH deben operar una gobernanza conjunta con el proveedor (revisiones mensuales de KPIs, mejora continua, gestión de incidentes y planes de remediación), apalancar tableros de datos para anticipar cuellos de botella y garantizar cláusulas de reversibilidad que permitan una re‑internalización ordenada si el servicio deja de ser conveniente. Finalmente, es aconsejable mantener capacidades mínimas internas (‘smart buyer’) que permitan supervisar el contrato, interpretar métricas, proponer mejoras y negociar evolutivos. El outsourcing, bien concebido y gestionado, no sustituye la estrategia de RH: la potencia al liberar tiempo para iniciativas de talento, cultura y liderazgo mientras terceros especializados aseguran la operación con estándares consistentes.",
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://www.mckinsey.com/~/media/mckinsey/business%20functions/operations/our%20insights/taking%20supplier%20collaboration%20to%20the%20next%20level/es-svg-taking-supplier-exhibit-2.svg?cq=50&cpy=Center",
              alt: "Equipo colaborando con un proveedor externo",
              caption:
                "Outsourcing: colaboración con proveedores especializados para funciones de soporte o conocimiento.",
            },
          ],
        },
        {
          id: "5.3",
          numbering: "5.3",
          title: "Objetivos",
          content: [
            /* Párrafo 1 — Objetivos estratégicos y de enfoque (≈300 palabras) */
            {
              type: "paragraph",
              text: "Definir con precisión los objetivos del outsourcing es el primer paso para asegurar que la externalización contribuya a la estrategia y no se reduzca a un ejercicio táctico de ahorro de costos. En el plano estratégico, el propósito central es permitir que la organización concentre talento gerencial, inversión y tiempo en su core, trasladando a un especialista procesos que no son fuente directa de ventaja competitiva. Este enfoque libera capacidad para proyectos transformacionales (digitalización, expansión, innovación) al tiempo que mantiene la operación de soporte en manos expertas. Un segundo objetivo estratégico es acelerar el acceso a capacidades de clase mundial —tecnología actualizada, metodologías probadas, talento escaso— que serían costosas o lentas de construir internamente. Vinculado a lo anterior, muchas empresas persiguen mayor agilidad y escalabilidad: el proveedor ajusta rápidamente volúmenes y niveles de servicio ante picos estacionales o cambios de demanda, reduciendo la necesidad de sobredimensionar la estructura interna. Finalmente, un objetivo cada vez más relevante es reducir la complejidad operativa y el riesgo tecnológico, transfiriendo a un tercero parte de la responsabilidad de continuidad, actualización y seguridad del proceso. Para que estos objetivos se materialicen, es indispensable que la relación de outsourcing esté anclada a la estrategia corporativa (mapa de procesos, prioridades y OKR), que los resultados esperados se traduzcan en indicadores comparables (KPIs) y que exista una gobernanza con roles claros (patrocinador, dueño del proceso, gerente del contrato). En síntesis, el ‘por qué’ del outsourcing debe formularse en términos de foco estratégico, velocidad de ejecución, acceso a capacidades y simplificación del modelo operativo, evitando que el costo sea el único criterio de decisión.",
            },

            /* Acordeón 1 — Cómo alinear objetivos con la estrategia */
            {
              type: "accordion",
              header: "Alineación estratégica: del objetivo al KPI",
              open: false,
              text:
                "* **Foco en el core:** explicitar procesos ‘estratégicos’ vs. ‘de soporte’ y su aporte al valor.  \n" +
                "* **Hipótesis de negocio:** redactar beneficios esperados (agilidad, ‘time‑to‑value’, calidad).  \n" +
                "* **KPIs de impacto:** elegir 3–5 métricas ‘north star’ (p. ej., NPS interno, lead time, tasa de error).  \n" +
                "* **Gobernanza:** comités mensuales, RACI, plan de mejora continua y revisión trimestral de objetivos.  \n" +
                "* **Riesgos y supuestos:** definir límites (capacidad, datos, cumplimiento) y umbrales de alerta.",
            },

            /* Párrafo 2 — Objetivos operativos y de servicio (≈300 palabras) */
            {
              type: "paragraph",
              text: "En el plano operativo, los objetivos se orientan a elevar la calidad y la confiabilidad del proceso. El primero es estandarizar y documentar el servicio con procedimientos, controles y métricas que aseguren resultados consistentes, independientemente de rotaciones o picos de demanda. Un segundo objetivo es mejorar la experiencia del usuario interno (empleados, áreas cliente) mediante acuerdos de nivel de servicio (SLA) claros: tiempos de respuesta, tiempos de resolución, ventanas de servicio, disponibilidad, tasa de retrabajo, precisión y primera resolución. Conectado a lo anterior, se busca reducir errores y variabilidad apoyándose en automatización, analítica y mejores prácticas del proveedor, lo que se traduce en menos incidencias y menos costos de no calidad. También se establecen objetivos de continuidad operativa (planes de contingencia, RTO/RPO si aplica), seguridad de la información y protección de datos, así como objetivos de integración tecnológica (interfaces, catálogos, flujos y tableros). Además, se persigue acortar el ‘time‑to‑value’ del servicio: una transición bien planificada, con transferencia de conocimiento, salida en fases y pilotos, permite capturar beneficios desde etapas tempranas. Por último, debe incluirse un objetivo de aprendizaje organizacional: que la empresa compradora desarrolle capacidades de ‘smart buyer’, es decir, de supervisión, interpretación de indicadores y mejora conjunta con el proveedor. Estos objetivos operativos se aterrizan en una matriz de KPIs por dominio (calidad, servicio, productividad, continuidad, seguridad) y en un plan de mejora continua (CIP) con metas trimestrales. La transparencia —mediante tableros compartidos y postmortems de incidencias— es condición para detectar oportunidades y sostener avances en el tiempo.",
            },

            /* Acordeón 2 — KPIs operativos recomendados */
            {
              type: "accordion",
              header: "Tablero sugerido de servicio y operación",
              open: false,
              text:
                "* **SLA/ATS:** % de tickets dentro de tiempo acordado y tiempo promedio de atención.  \n" +
                "* **Calidad:** tasa de error/ retrabajo, exactitud (p. ej., en nómina), ‘first contact resolution’.  \n" +
                "* **Productividad:** casos por agente/hora, costo por transacción, utilización de capacidad.  \n" +
                "* **Continuidad:** disponibilidad del servicio, #incidencias críticas, MTTR, cumplimiento de DRP.  \n" +
                "* **Seguridad:** hallazgos de auditoría, cumplimiento de controles, incidentes de datos (0 tolerancia).",
            },

            /* Párrafo 3 — Objetivos financieros, de cumplimiento y relación (≈300 palabras) */
            {
              type: "paragraph",
              text: "Aunque la reducción de costos es un objetivo frecuente, conviene expresarla como eficiencia sostenible: disminuir el costo total de propiedad (TCO) sin sacrificar calidad ni control. Para ello, se fijan metas de ahorro por optimización del proceso (automatización, eliminación de retrabajos, economías de escala) y por conversión de costos fijos a variables, con cláusulas que incentiven la mejora continua y la innovación (gain‑sharing). En cumplimiento, el objetivo es asegurar que el servicio respete normativas laborales, fiscales y de privacidad, así como los estándares internos de ética y conducta; esto implica auditorías, trazabilidad y responsabilidades claramente definidas en el contrato. Un objetivo relacional clave es construir una asociación basada en transparencia y creación de valor compartido: más que un esquema puramente transaccional, se busca una relación de desempeño medido y mejora conjunta, con foros de innovación, revisiones ejecutivas y planes de evolución del servicio. Finalmente, se recomienda establecer objetivos de salida (exit/ reversibilidad): tiempos y condiciones para re‑internalizar o migrar a otro proveedor sin disrupciones, preservando la continuidad y la propiedad de datos/activos. El conjunto de objetivos financieros, de cumplimiento y relacionales debe quedar capturado en un ‘scorecard’ contractual con métricas, umbrales, incentivos y penalizaciones proporcionales, y revisiones trimestrales para recalibrar metas según el contexto del negocio. Así, el outsourcing no solo produce ahorros, sino que habilita capacidades, reduce riesgos y potencia la ejecución estratégica.",
            },

            /* Video — Objetivos y métricas en proyectos de outsourcing */
            {
              type: "video",
              title:
                "Cómo definir objetivos y KPIs para un outsourcing exitoso",
              src: "https://www.youtube.com/watch?v=p2wouXBBTe0",
              caption:
                "Guía práctica para traducir objetivos estratégicos en SLAs, KPIs y tableros de seguimiento.",
            },
          ],
        },
        {
          id: "5.4",
          numbering: "5.4",
          title: "Proceso de implementación",
          content: [
            /* Párrafo 1 — Diagnóstico, alcance y marco regulatorio (≈300 palabras) */
            {
              type: "paragraph",
              text: "Implementar outsourcing en Recursos Humanos requiere un proceso deliberado que inicia con un diagnóstico estratégico del problema a resolver y del valor que se espera generar. En esta etapa se clarifica el ‘por qué’ (eficiencia operativa, acceso a capacidades especializadas, velocidad de implementación, escalabilidad o reducción de costos) y el ‘qué’ (procesos a externalizar: reclutamiento, administración de nómina, capacitación, beneficios, analítica de personas, etc.). El análisis ‘make or buy’ compara desempeño actual, capacidades internas, costos totales (TCO), riesgos y nivel de criticidad del proceso para el negocio. Es clave delimitar el alcance: actividades incluidas y excluidas, interfaces con áreas internas, supuestos y dependencias tecnológicas. En paralelo, se revisa el marco regulatorio y de cumplimiento aplicable al contexto: límites de la subcontratación, condiciones para servicios especializados, obligaciones en materia laboral, fiscal, de seguridad y salud, así como protección de datos personales. Con base en lo anterior se elabora un caso de negocio que cuantifica beneficios esperados (ahorros, niveles de servicio, indicadores de calidad) y costos de transición (migración, integración tecnológica, gestión del cambio, curva de aprendizaje). Finalmente, se define el modelo de gobierno: roles y responsabilidades del área usuaria, compras, jurídico, TI y el futuro proveedor; la cadencia de información y la matriz RACI. Esta primera fase culmina con un plan de proyecto de alto nivel que establece hitos, riesgos y criterios de éxito, además de un conjunto preliminar de indicadores (KPIs) para monitorear tanto la transición como la operación estable.",
            },

            /* Lista 1 — Checklist contractual y de cumplimiento (buenas prácticas) */
            {
              type: "list",
              title: "Checklist para el contrato y el cumplimiento",
              style: "bullets",
              items: [
                "Definir con precisión el servicio: alcance, entregables y exclusiones.",
                "Alinear requisitos legales y de cumplimiento (laboral, fiscal, seguridad y datos).",
                "Establecer métricas y Acuerdos de Nivel de Servicio (SLA) medibles y auditables.",
                "Cláusulas de confidencialidad, protección de datos y propiedad intelectual.",
                "Esquema de precios (fijo, por volumen, por desempeño) y ajustes inflacionarios.",
                "Plan de transición y de reversibilidad/exit (cómo se regresa o migra el servicio).",
                "Gobernanza: comités, periodicidad de reportes, escalamiento y gestión de cambios.",
                "Penalizaciones/bonificaciones por desempeño, y plan de mejora continua.",
                "Soporte post‑implementación y garantías sobre calidad de servicio.",
                "Gestión de riesgos, continuidad operativa y requisitos de ciberseguridad.",
              ],
            },

            /* Párrafo 2 — Selección del proveedor, RFP y negociación (≈300 palabras) */
            {
              type: "paragraph",
              text: "Con el caso de negocio y el alcance definidos, se pasa a la selección del proveedor. Se recomienda generar un RFI/RFP con criterios claros: experiencia comprobable en el sector, certificaciones de calidad y seguridad, solidez financiera, referencias de clientes, capacidades tecnológicas (integraciones con HCM/LMS/ERP), cobertura geográfica y modelo de soporte. Durante la evaluación, las ‘demos’ y visitas técnicas permiten validar procesos, herramientas y cultura de servicio. La debida diligencia (due diligence) revisa controles de seguridad, continuidad del negocio, subcontratistas, prácticas de protección de datos y cumplimiento. Tras el análisis comparativo, la negociación debe convertir las expectativas en obligaciones contractuales: definición de SLAs y OLAs, estructura de comités, reporting, mecanismos de revisión de capacidad, ‘service credits’, así como planes de mejora continua (CIP). Es conveniente incorporar un plan de transición con cronograma, responsables y criterios de aceptación (UAT) por hito: descubrimiento, diseño detallado, construcción/configuración, pruebas, migración de datos, formación y arranque (‘go‑live’). Paralelamente, se diseña la gestión del cambio: comunicación a partes interesadas, capacitación a usuarios clave (‘super users’) y definición de canales de soporte de primer y segundo nivel. Una práctica crítica es la ‘matriz de controles’ que mapea riesgos (operativos, legales, reputacionales y tecnológicos) con mitigaciones específicas y dueños de control. Con el contrato firmado, se activa la oficina de proyecto (PMO) y se inicia la transición con rituales de gobierno (comités semanales de proyecto, quincenales operativos y mensuales ejecutivos), asegurando trazabilidad de decisiones y visibilidad ejecutiva del avance.",
            },

            /* Lista 2 — KPIs y monitoreo operativo (para operación estable) */
            {
              type: "list",
              title: "KPIs recomendados para la operación tercerizada",
              style: "bullets",
              items: [
                "Nivel de servicio (SLA) por proceso: cumplimiento %, tiempo de respuesta y de resolución.",
                "Calidad: tasa de retrabajos/errores, precisión de nómina, exactitud de expedientes.",
                "Experiencia del usuario: NPS/CSAT de managers y colaboradores atendidos.",
                "Eficiencia: costo por transacción, productividad por FTE, automatización (%).",
                "Tiempo de ciclo: ‘time‑to‑hire’, ‘time‑to‑pay’, ‘time‑to‑train’ según el caso.",
                "Cumplimiento y riesgo: hallazgos de auditoría, incidentes de seguridad, brechas de datos.",
                "Mejora continua: número de iniciativas implementadas y beneficio cuantificado.",
                "Continuidad: cumplimiento de RTO/RPO y disponibilidad de plataformas.",
              ],
            },

            /* Párrafo 3 — Arranque, estabilización, mejora continua y exit (≈300 palabras) */
            {
              type: "paragraph",
              text: "El arranque (‘go‑live’) marca el paso a operación productiva con monitoreo reforzado y criterios de ‘hypercare’ (soporte ampliado) durante las primeras semanas. En esta fase se validan capacidades clave: exactitud de la información migrada, cumplimiento de SLAs iniciales, fluidez en las integraciones, y efectividad del ‘help desk’. La estabilización cierra brechas detectadas y sienta la base de gobernanza continua: revisión mensual de desempeño, comités trimestrales de valor para priorizar automatizaciones (RPA, autoservicio, analítica) y optimizaciones de procesos end‑to‑end. La relación debe gestionarse como una alianza de resultados: cada trimestre se contrastan beneficios reales vs. caso de negocio, se actualiza el mapa de riesgos, se ejecutan auditorías de cumplimiento y se pactan iniciativas de mejora con ROI esperado. La transparencia es esencial: paneles de control compartidos y auditorías permiten una visión única del servicio. La gestión de conocimiento (playbooks, SOPs, catálogos de servicios) evita dependencia excesiva del proveedor y facilita la resiliencia ante cambios de personal. Un componente frecuentemente olvidado es el ‘exit plan’: condiciones y tiempos para la reversión o cambio de proveedor, devolución/migración de datos, transferencia de conocimientos y desmantelamiento seguro de accesos. Incluir este plan desde el inicio reduce el riesgo de ‘vendor lock‑in’. Finalmente, la madurez del modelo se mide por su capacidad para adaptarse al negocio: ampliaciones de alcance, variaciones estacionales de demanda y cambios regulatorios. Cuando el outsourcing se implementa con diagnóstico riguroso, contrato con SLAs claros, gobierno efectivo y cultura de mejora continua, se consolida como un habilitador de eficiencia, calidad de servicio y cumplimiento, liberando al área de RR. HH. para enfocarse en iniciativas estratégicas de talento.",
            },
          ],
        },
      ],
    },

    /* ── Unidad 6 ── */
    {
      id: "6",
      numbering: "Unidad 6",
      title: "Benchmarking",
      content: [
        /* Párrafo 1 — Qué es y para qué sirve (≈200 palabras) */
        {
          type: "paragraph",
          text: "El benchmarking es una metodología sistemática para comparar procesos, resultados y prácticas de una organización con referentes internos o externos que son considerados sobresalientes. Su propósito no es copiar, sino aprender con evidencia: identificar brechas de desempeño, comprender por qué ocurren y adaptar soluciones que funcionen en nuestro contexto. En Recursos Humanos y gestión organizacional, el benchmarking ayuda a contrastar indicadores como tiempo de cobertura de vacantes, costo por contratación, rotación voluntaria, clima y compromiso, diversidad e inclusión, productividad o inversión en formación. También ofrece perspectiva sobre prácticas de alto impacto (experiencia del empleado, modelos de trabajo flexible, analítica de personas o digitalización). Al combinar datos cuantitativos (KPIs) con hallazgos cualitativos (casos, visitas, entrevistas), el benchmarking se convierte en una palanca de mejora continua, alineada con la estrategia. Bien ejecutado, reduce la curva de aprendizaje, evita improvisaciones costosas y orienta decisiones de inversión. Para que sea útil, exige rigor metodológico, integridad ética, foco en el problema correcto y aterrizaje en planes concretos con responsables, plazos y criterios de éxito.",
        },

        /* Párrafo 2 — Tipos y alcances del benchmarking (≈200 palabras) */
        {
          type: "paragraph",
          text: "Existen diversos tipos de benchmarking según la fuente de comparación y el alcance. El benchmarking interno compara unidades, sedes o equipos de la misma organización para identificar prácticas superiores replicables; es rápido y de bajo costo, útil para estandarizar procesos. El benchmarking competitivo contrasta con organizaciones del mismo sector; aporta sensibilidad de mercado, pero enfrenta límites por confidencialidad y acceso a información. El benchmarking funcional o ‘best‑in‑class’ compara con líderes de procesos, aun si pertenecen a industrias distintas (por ejemplo, aprender de logística en retail para optimizar distribución farmacéutica); es una vía potente para innovar. Por alcance, puede ser de procesos (cómo se ejecuta reclutamiento), de desempeño (KPIs de resultado), estratégico (modelos de servicio, estructura, portafolio) o digital (herramientas, automatización, analítica). Elegir el tipo adecuado depende del objetivo: cerrar brechas de eficiencia, elevar calidad de servicio, rediseñar la experiencia del usuario interno o inspirar cambios de modelo operativo. Un buen diseño combina más de un tipo para equilibrar profundidad, velocidad y posibilidad real de adopción.",
        },

        /* Párrafo 3 — Proceso paso a paso (≈200 palabras) */
        {
          type: "paragraph",
          text: "El proceso típico incluye cinco etapas: 1) Planear: definir problema, alcance, métricas, fuentes y criterios de selección de referentes; fijar hipótesis y resultados esperados. 2) Levantar datos: recolectar información interna (histórica, transaccional) y externa (reportes, consorcios de datos, entrevistas, visitas técnicas), garantizando comparabilidad de definiciones. 3) Analizar: normalizar KPIs, identificar brechas y ‘drivers’ causales; mapear prácticas habilitadoras (procesos, tecnología, competencias) y barreras. 4) Adaptar: traducir aprendizajes en opciones de diseño y casos de negocio; priorizar iniciativas por impacto y factibilidad; cocrear con quienes operarán el cambio. 5) Implementar y monitorear: convertir la hoja de ruta en proyectos, con indicadores adelantados y rezagados, hitos y mecanismos de gobernanza. Dos elementos críticos son la calidad de las definiciones (qué entendemos por ‘time‑to‑hire’ o ‘rotación’) y la línea base confiable. Además, conviene documentar supuestos y asegurar trazabilidad entre hallazgo‑decisión‑resultado para aprender iterativamente. El cierre incluye capturar lecciones, actualizar estándares y planificar el siguiente ciclo de comparación.",
        },

        /* Párrafo 4 — Riesgos comunes y cómo mitigarlos (≈200 palabras) */
        {
          type: "paragraph",
          text: "El benchmarking falla cuando se compara lo incomparable o se copian recetas sin contexto. Algunos riesgos habituales: ‘cherry‑picking’ de métricas favorables; datos no homologados; muestras pequeñas; sesgo de supervivencia (solo mirar casos exitosos); extrapolar prácticas sin considerar cultura, capacidades o regulación; subestimar el costo del cambio; y confundir correlación con causalidad. Para mitigarlos, establezca un glosario de KPIs y un protocolo de validación de fuentes; triangule datos (cuantitativos y cualitativos); use intervalos y rangos, no valores puntuales; complemente con pilotos controlados; y evalúe elasticidad de resultados frente a recursos disponibles. En lo ético y legal, respete confidencialidad, propiedad intelectual y privacidad de datos; utilice fuentes autorizadas, acuerdos de intercambio o repositorios agregados. Finalmente, evite que el ejercicio se vuelva puramente descriptivo: cada insight debe perseguir una decisión o un cambio de proceso, con dueño, presupuesto y fecha. Un buen tablero distingue ‘insights’ (lo que aprendimos), ‘implications’ (lo que significa) y ‘actions’ (lo que haremos).",
        },

        /* Párrafo 5 — Aterrizaje en RR. HH. y cultura de mejora (≈200 palabras) */
        {
          type: "paragraph",
          text: "En RR. HH., el benchmarking se vuelve tangible al conectar indicadores con experiencias y resultados de negocio. Ejemplos: reducir el ‘time‑to‑hire’ adoptando prácticas de empresas con embudos digitales y evaluación estructurada; mejorar la calidad de contratación observando cómo líderes usan ‘job tryouts’ o analítica de predicción; elevar compromiso adaptando rituales de reconocimiento de organizaciones con alto eNPS; o rediseñar capacitación inspirándose en modelos ‘blended’ de compañías intensivas en conocimiento. Para sostener el valor, cree una cadencia: 1) tablero trimestral con KPIs comparados; 2) ‘deep‑dive’ semestral de un proceso crítico; 3) comunidad de práctica que documente casos; y 4) cartera viva de iniciativas con ROI esperado. Vincule el ejercicio a la estrategia y al presupuesto: cada iniciativa derivada debe tener caso de negocio, riesgos y plan de cambio. La cultura es clave: fomentar humildad para aprender de otros, disciplina en la medición y voluntad de adaptar—no copiar—acelera la madurez operativa. Así, el benchmarking deja de ser un informe y se convierte en un sistema permanente de aprendizaje organizacional.",
        },

        /* Acordeón — Niveles de benchmarking y usos */
        {
          type: "accordion",
          header:
            "Niveles de benchmarking: interno, competitivo y best‑in‑class",
          open: false,
          text:
            "**Nivel 1 — Interno (rápido y estandarizable)**  \n" +
            "• Compara sedes/equipos propios para detectar prácticas superiores.  \n" +
            "• Ideal para estandarizar procesos, reducir variabilidad y escalar ‘quick wins’.  \n" +
            "• Bajo costo, alta disponibilidad de datos; útil como primer paso.  \n\n" +
            "**Nivel 2 — Competitivo (sensibilidad de mercado)**  \n" +
            "• Contrasta con organizaciones del mismo sector y tamaño.  \n" +
            "• Apoya decisiones de posicionamiento, inversión y propuesta de valor.  \n" +
            "• Requiere fuentes confiables y cuidados de confidencialidad.  \n\n" +
            "**Nivel 3 — Best‑in‑class / Funcional (innovación cruzada)**  \n" +
            "• Aprende de líderes de proceso en otras industrias.  \n" +
            "• Potencia saltos de desempeño e innovación operativa.  \n" +
            "• Exige adaptación cuidadosa al contexto, capacidades y regulación.",
        },
      ],

      subthemes: [
        {
          id: "6.1",
          numbering: "6.1",
          title: "Antecedentes",
          content: [
            {
              type: "paragraph",
              text: "Antes de la adopción del benchmarking como enfoque sistemático, gran parte de la evaluación de la función de Recursos Humanos se comunicaba en términos cualitativos —“buena”, “satisfactoria”, “importante”—, lo que dificultaba traducir la contribución del área en resultados comparables y accionables. Esta constatación abrió paso a métodos que miraran hacia afuera para descubrir referentes de desempeño y aprender de ellos. En ese contexto surge el benchmarking como una búsqueda deliberada de prácticas de la industria que conducen a un rendimiento sobresaliente y que, por tanto, puedan convertirse en modelo a seguir. Su aportación clave no es solo catalogar “mejores prácticas”, sino comprender la capacidad para hacer las cosas de manera más eficiente y eficaz, trasladando esa comprensión a procesos, políticas y resultados del área de RH.",
            },

            /* — Acordeón 1 — */
            {
              type: "accordion",
              header: "Ideas fuerza del apartado (antecedentes)",
              open: false,
              text:
                "* **De lo cualitativo a lo comparativo‑cuantitativo:** el benchmarking convierte juicios generales en metas y métricas accionables.  \n" +
                "* **Búsqueda deliberada de excelencia:** identificar prácticas que explican desempeños superiores para adaptarlas al propio contexto.  \n" +
                "* **Aprender de líderes para corregir e innovar:** comparar procesos permite detectar errores, oportunidades y patrones decisionales trasladables.",
            },

            {
              type: "paragraph",
              text: "Desde esta perspectiva, el benchmarking es un proceso de evaluación entre organizaciones que examina productos, servicios y procesos para igualar o mejorar el desempeño propio. Al comparar cómo otra organización realiza una función concreta, se identifican oportunidades y patrones que pueden adaptarse al propio contexto. El énfasis está en la cooperación y el intercambio para elevar la calidad del servicio y alcanzar estándares superiores en tiempos, costos, satisfacción y resultados. Como técnica de aprendizaje organizacional, trasciende el inventario de prácticas: se centra en cómo internalizar aquello que explica la superioridad del referente y convertirlo en capacidades sostenibles.",
            },

            /* — Acordeón 2 — */
            {
              type: "accordion",
              header: "Tipos de benchmarking (síntesis práctica)",
              open: false,
              text:
                "* **Competitivo:** comparación directa con competidores para superar sus resultados o situarse “mejor en su clase”.  \n" +
                "* **Cooperativo / de colaboración:** intercambio de conocimientos entre empresas (a veces con coordinador externo) para que todas mejoren.  \n" +
                "* **Interno:** identificar y difundir prácticas de alto desempeño dentro de la misma organización como paso previo a estudios externos.",
            },
          ],
        },
        {
          id: "6.2",
          numbering: "6.2",
          title: "Objetivos",
          content: [
            /* Párrafo 1 — Sentido estratégico de los objetivos del benchmarking (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Definir con claridad los objetivos del benchmarking en Recursos Humanos es el punto de partida para traducir una práctica comparativa en resultados tangibles. En un plano estratégico, el objetivo central es identificar brechas de desempeño respecto a referentes internos y externos para alinear la función de RH con la estrategia de negocio. Esto implica formular metas verificables que orienten la mejora de procesos críticos: atraer talento adecuado, acelerar la cobertura de vacantes, disminuir la rotación, elevar el compromiso, optimizar la inversión en capacitación y robustecer la experiencia del colaborador. Para operacionalizarlo, conviene anclar los objetivos en indicadores clave (KPIs) y umbrales comparables: tiempo de cobertura (time-to-fill), costo por contratación, índice de rotación voluntaria e involuntaria, ausentismo, eNPS, tasa de promoción interna, cobertura de planes de sucesión o ROI de capacitación. Asimismo, el benchmarking debe perseguir objetivos de aprendizaje organizacional: comprender prácticas de alto desempeño, modelar rutinas de trabajo efectivas y adaptar innovaciones a la realidad de la empresa. Dado que existen distintos enfoques —interno, competitivo, funcional y de colaboración— conviene explicitar qué tipo de comparación se realizará y por qué, evitando métricas que no sean transferibles por diferencias de sector, tamaño o madurez digital. Por último, los objetivos deben incluir consideraciones éticas y de gobernanza de datos (consentimiento, confidencialidad, calidad de información), de modo que la comparación sea válida, justa y accionable, y que la toma de decisiones se sustente en evidencias y no solo en modas o rankings sin contexto.",
            },

            /* Acordeón 1 — Cómo formular objetivos SMART de benchmarking */
            {
              type: "accordion",
              header: "Guía rápida: objetivos SMART para benchmarking de RH",
              open: false,
              text:
                "* **Específicos:** delimita el proceso (p. ej., reclutamiento), el indicador (time‑to‑fill) y la cohorte (perfiles IT).\\n" +
                "* **Medibles:** establece línea base y fuentes (ATS, HRIS, encuestas) con criterios de calidad de datos.\\n" +
                "* **Alcanzables:** valida brechas realistas según madurez del área, presupuesto y capacidades actuales.\\n" +
                "* **Relevantes:** vincula cada objetivo con metas del negocio (crecimiento, eficiencia, CX/EX).\\n" +
                "* **Temporales:** fija horizontes (90‑180 días y 12 meses) y puntos de control (mensual/trimestral).\\n" +
                "* **Patrocinio:** nombra dueños del indicador y define foros de seguimiento.\\n" +
                "* **Ética y riesgos:** contempla privacidad, sesgos y uso responsable de datos.",
            },

            /* Párrafo 2 — Objetivos operativos por proceso de talento (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "En la dimensión operativa, los objetivos del benchmarking deben traducirse en metas por subproceso de talento. En atracción y selección, un objetivo típico es reducir en X% el tiempo de cobertura manteniendo la calidad de contratación (quality‑of‑hire), comparando contra percentiles del mercado y empresas pares. En onboarding, se busca acortar el tiempo a productividad y elevar la retención a 90 días. Para formación y desarrollo, los objetivos priorizan aumentar la cobertura de competencias críticas y elevar el impacto medido en transferencia al puesto (evaluación en nivel 3/4) y movilidad interna. En desempeño y compensación, se pretende aumentar la diferenciación basada en mérito, mejorar la equidad interna/externa y vincular el variable a indicadores de negocio. En clima y cultura, se apuntan metas de eNPS, sentido de pertenencia e inclusión, así como de participación en iniciativas de mejora continua. Transversalmente, un objetivo clave es fortalecer la capacidad analítica de RH (people analytics) para generar insights predictivos —riesgo de fuga, probabilidad de éxito en un rol, patrones de absentismo— que permitan intervenciones proactivas. Todo objetivo operativo debe incluir tres elementos: (1) una definición técnica del indicador y su método de cálculo; (2) la fuente de datos y el flujo de validación; (3) el plan de acción asociado (experimentos de mejora, responsables, hitos). Asimismo, es recomendable fijar objetivos de aprendizaje (qué prácticas piloto se testearán) y de escalamiento (criterios para extender una práctica si supera el desempeño de control), manteniendo la comparabilidad con paneles y glosarios compartidos.",
            },

            /* Acordeón 2 — Fuentes de referencia y líneas base sugeridas */
            {
              type: "accordion",
              header: "Dónde comparar: fuentes y referencias prácticas",
              open: false,
              text:
                "* **Referencias sectoriales:** reportes de tendencias de RH (p. ej., SHRM, Deloitte Human Capital Trends, Gartner) y asociaciones locales.\\n" +
                "* **Estándares/guías:** marcos como **ISO 30414** (información de capital humano) para definir indicadores comparables.\\n" +
                "* **Consorcios/peers:** grupos de empresas que comparten métricas de forma anónima y gobernada.\\n" +
                "* **Bench interno:** compara unidades/plantas/países para identificar mejores prácticas “en casa”.\\n" +
                "* **Marketplace de talento:** datos públicos de empleo y salarios como termómetro de oferta/demanda.\\n" +
                "* **Buenas prácticas de medición:** glosario único, fichas técnicas de KPIs y auditorías periódicas de datos.",
            },

            /* Párrafo 3 — Objetivos de implementación, seguimiento y resultados (≈ 300 palabras) */
            {
              type: "paragraph",
              text: "Definir objetivos también implica detallar cómo se implementarán, medirán y comunicarán los avances. Un objetivo de implementación clave es construir una **línea base** confiable y comparable, seguida de metas intermedias (quick wins a 90 días) y metas a 6‑12 meses. Otro objetivo esencial es institucionalizar un **ciclo de mejora continua** (PDCA) que combine revisiones mensuales de tableros, retrospectivas trimestrales y cierres semestrales con decisiones de inversión o escalamiento. En gestión del cambio, proponte elevar la adopción de nuevas prácticas por parte de líderes de línea (p. ej., que 80% use rúbricas estandarizadas en entrevistas o que 100% de managers realicen check‑ins quincenales). En comunicación, fija objetivos de transparencia: publicar tableros ejecutivos y versiones simplificadas para empleados, junto con narrativas que vinculen métricas con historias de impacto. En riesgos, establece objetivos de control para sesgos y privacidad (p. ej., pruebas de equidad en modelos de IA y revisiones legales de datos sensibles). Finalmente, plantea objetivos de **valor**: ahorro de costos por automatización, aumento de productividad por vacantes cubiertas más rápido, impacto en ventas/CSAT por mejoras en experiencia de servicio y reducción de rotación en roles críticos. Estos objetivos, cuando están bien definidos y respaldados por comparaciones pertinentes, evitan el “benchmarking cosmético” y convierten a RH en un socio estratégico que aprende del mercado, adapta con criterio y demuestra resultados en indicadores de negocio.",
            },

            /* Video — Introducción práctica al benchmarking en RH */
            {
              type: "video",
              title:
                "Benchmarking en Recursos Humanos: de la métrica a la mejora",
              src: "https://www.youtube.com/watch?v=ZnygMku3IZU",
              caption:
                "Recorrido introductorio por objetivos, indicadores y pasos de implementación del benchmarking aplicado a RH.",
            },
          ],
        },
        {
          id: "6.3",
          numbering: "6.3",
          title: "Tipos",
          content: [
            /* Párrafo 1 — Panorama y tipología clásica (≈300 palabras) */
            {
              type: "paragraph",
              text: "Hablar de tipos de benchmarking implica reconocer que no todas las comparaciones persiguen los mismos fines ni se realizan con los mismos socios, procesos o niveles de profundidad. En el plano clásico, suele distinguirse entre benchmarking competitivo, cooperativo/externo, de colaboración y benchmarking interno. El primero compara funciones, procesos y resultados con competidores directos, buscando superar su desempeño en indicadores clave (coste por contratación, tiempo de cobertura de vacantes, rotación, productividad por FTE, etcétera). El cooperativo/externo parte del intercambio con organizaciones que no necesariamente compiten en el mismo mercado, lo que permite abrir el enfoque a ‘mejores prácticas’ transferibles sin riesgos estratégicos inmediatos (por ejemplo, logística o atención al empleado). El benchmarking de colaboración organiza redes de empresas para compartir métricas y metodologías, normalmente con un tercero que coordina, anonimiza y estandariza los datos. Por su parte, el benchmarking interno compara áreas, plantas, regiones o unidades de negocio dentro de la misma organización para identificar ‘el mejor de casa’ y difundir sus prácticas. En Recursos Humanos, estas cuatro variantes se aplican a subsistemas diversos (atracción, formación, compensaciones, relaciones laborales, people analytics), pero exigen resolver cuestiones éticas y técnicas: comparabilidad de datos, definiciones operativas de cada indicador, resguardo de la confidencialidad y establecimiento de líneas base. Elegir el tipo adecuado no es una curiosidad taxonómica; condiciona la calidad de la evidencia, la facilidad de implementación de mejoras y el potencial de aprendizaje colectivo.",
            },

            /* Lista 1 — Tipología clásica por relación con el referente */
            {
              type: "list",
              title: "Tipología clásica según relación con el referente",
              items: [
                "Benchmarking competitivo: comparación directa con competidores para superar métricas clave (coste, calidad, tiempo).",
                "Benchmarking cooperativo/externo: intercambio con organizaciones no competidoras para adaptar mejores prácticas.",
                "Benchmarking de colaboración (consorcios): varias empresas comparten datos estandarizados bajo coordinación neutral.",
                "Benchmarking interno: compara unidades/áreas de la propia empresa para identificar y escalar ‘mejores prácticas’ internas.",
              ],
            },

            /* Párrafo 2 — Clasificaciones complementarias (≈300 palabras) */
            {
              type: "paragraph",
              text: "Además de la relación con el referente, existen clasificaciones complementarias útiles para planear un estudio. Por alcance funcional, se distingue el benchmarking de procesos (flujo de reclutamiento de extremo a extremo, onboarding, gestión del desempeño), el benchmarking funcional (comparar la función RH completa versus pares) y el benchmarking de mejores prácticas (prácticas puntuales, p. ej., diseño de EVP o encuestas de clima). Por nivel, puede ser estratégico (alineación RH‑negocio, estructura de la función, portafolio de capacidades) u operativo (SLA, TAT, costos unitarios). También se habla de ‘performance benchmarking’ cuando el foco está en los resultados medidos por KPIs estandarizados, y de ‘practice benchmarking’ cuando lo central es el cómo (métodos, políticas, herramientas). En entornos digitales cobra peso el ‘digital benchmarking’, que contrasta madurez tecnológica (HCM, ATS, LMS, analítica de personas, automatización) y experiencia del empleado en interfaces y autoservicio. Finalmente, hay una distinción metodológica entre estudios puntuales (foto instantánea) y paneles o cohortes longitudinales (series de tiempo) que permiten evaluar mejora continua y efectos de intervención. Elegir la combinación adecuada depende del objetivo (diagnóstico, diseño, caso de negocio), restricciones (acceso a datos, acuerdos de confidencialidad), y riesgos (sesgos de selección, falta de comparabilidad por diferencias de contexto). Una buena práctica es construir un ‘diccionario de métricas’ previo y realizar normalizaciones (por FTE, por evento, por ciclo) para que la comparación sea justa.",
            },

            /* Lista 2 — Clasificaciones y criterios de diseño */
            {
              type: "list",
              title: "Otras clasificaciones y criterios para elegir el tipo",
              items: [
                "Por objeto: de procesos, funcional, de mejores prácticas, de desempeño (KPIs).",
                "Por nivel: estratégico (modelo operativo, capacidades), operativo (SLA, costos unitarios).",
                "Por horizonte: puntual (corte) vs. longitudinal (panel/serie histórica).",
                "Por intensidad de intercambio: abierto (consorcios) vs. bilateral (pares seleccionados).",
                "Criterios de diseño: disponibilidad y calidad de datos, comparabilidad (definiciones), confidencialidad y gobernanza.",
              ],
            },

            /* Párrafo 3 — Aplicación en RH y línea de acción (≈300 palabras) */
            {
              type: "paragraph",
              text: "Para traducir la tipología en acción, conviene partir del problema que se desea resolver: ¿reducir el tiempo de cobertura?, ¿mejorar la tasa de finalización del onboarding?, ¿optimizar costos de capacitación?, ¿elevar el eNPS? Con un objetivo claro, el benchmarking competitivo aporta presión de mercado (¿qué tan rezagados estamos frente a nuestros rivales?), mientras que el cooperativo abre oportunidades de innovación cruzada (p. ej., prácticas de experiencia de cliente adaptadas a experiencia de empleado). El interno suele ser el punto de partida más rápido: identifica la unidad ‘estrella’, modela su proceso (mapa SIPOC, tiempos, roles, herramientas), contrasta KPIs y genera una guía de transferencia. En paralelo, el de colaboración permite acceder a paneles con muestras más amplias y datos anonimizados, útiles para construir casos de negocio (ROI de un ATS, impacto de un LMS en rotación temprana, reducción de re‑trabalho en nómina con RPA). Para evitar errores comunes, define un glosario de métricas (p. ej., ‘time‑to‑fill’ vs. ‘time‑to‑hire’), documenta supuestos (temporadas de alta demanda), normaliza por FTE o por volumen de requisiciones, y añade análisis cualitativo (entrevistas, gemba walks) que explique por qué un referente rinde mejor. Cierra con un plan de mejora priorizado (quick wins vs. iniciativas estructurales), metas trimestrales y un tablero de seguimiento. El valor del benchmarking no termina en la comparación: comienza allí, cuando convierte evidencia externa e interna en rediseños de procesos, decisiones tecnológicas y desarrollo de capacidades del equipo.",
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://yiminshum.com/wp-content/uploads/2020/07/PROCESO-O-FASES-DE-BENCHMARKIG-INFOGRAFIA-1.png",
              alt: "Esquema de benchmarking y comparación de métricas entre áreas",
              caption:
                "Visualización conceptual del ciclo de benchmarking: comparar, aprender, adaptar y escalar.",
            },
          ],
        },
        {
          id: "6.4",
          numbering: "6.4",
          title: "Resultados",
          content: [
            /* Párrafo 1 — ¿Qué debe entregar un ejercicio de benchmarking? (≈300 palabras) */
            {
              type: "paragraph",
              text: "El apartado de resultados en un proyecto de benchmarking sintetiza la evidencia que demuestra qué tan efectivas fueron las mejoras comparadas y qué tan viable es escalar dichas prácticas. Un buen reporte comienza explicando la línea base (desempeño antes del ejercicio) y las brechas detectadas contra referentes internos o externos, para después mostrar los indicadores clave de éxito (KPI) con su evolución temporal. En Administración de Recursos Humanos, estos indicadores suelen organizarse en cuatro bloques: eficiencia operativa (tiempos de cobertura, coste por contratación, lead time de capacitación), eficacia del talento (tasa de éxito del periodo de prueba, rotación voluntaria, cobertura de puestos críticos), experiencia de colaborador (eNPS, participación en programas, índice de clima) y retorno económico (ahorros netos, incremento de productividad vinculada a iniciativas de RH). La interpretación debe ir más allá de la cifra: conviene explicar qué práctica específica produjo el cambio, qué condiciones de contexto lo facilitaron y qué riesgos existen al trasladarla. Igualmente, los resultados deben mapearse a procesos de mejora continua —por ejemplo, un tablero mensual y revisiones trimestrales— para asegurar sostenibilidad. Finalmente, se recomienda cerrar con un plan de implementación que indique responsables, hitos y supuestos, así como un anexo metodológico que detalle fuentes de datos, definiciones y controles de calidad. Presentar así los resultados ayuda a tomar decisiones informadas, comunicar con claridad a la dirección y preparar a los equipos para ciclos siguientes de comparación y aprendizaje.",
            },

            /* Acordeón 1 — Beneficios/alcances del benchmarking (viñetas del PDF: bloque A) */
            {
              type: "accordion",
              header:
                "Beneficios y alcances del benchmarking (bloque A del PDF)",
              open: false,
              text:
                "* **Facilita crear redes** de organizaciones que asumen la evaluación comparativa como herramienta de mejora.  \n" +
                "* **Medio eficiente para introducir mejoras** basadas en prácticas observadas.  \n" +
                "* **No se limita a un solo subsistema**, puede aplicarse transversalmente.  \n" +
                "Fuente: Material de estudio, Módulo 3, viñetas del apartado de benchmarking. :contentReference[oaicite:5]{index=5}",
            },

            /* Párrafo 2 — Resultados esperados en RH (≈300 palabras) */
            {
              type: "paragraph",
              text: "Tras ejecutar el benchmarking, RH debe traducir hallazgos cualitativos en resultados cuantitativos que evidencien ventaja competitiva organizacional. Ello implica mostrar cómo los cambios adoptados impactan tanto en la operación diaria como en los activos intangibles (capacidad de atraer, desarrollar y comprometer talento). Por ejemplo, un rediseño del proceso de reclutamiento puede reducir el tiempo de cobertura y el coste por contratación, mientras que una nueva práctica de onboarding eleva la tasa de permanencia a seis y doce meses. En términos estratégicos, los resultados deben conectar con objetivos corporativos (crecimiento, rentabilidad, innovación, satisfacción del cliente) y respaldar decisiones sobre inversión en tecnología, rediseño de puestos o políticas de compensación. Un buen reporte también compara los resultados propios con el percentil del grupo de referencia, para posicionar a la organización y definir el siguiente horizonte de mejora. Además, conviene incluir historias breves de casos internos (mini‑estudios de caso) que muestren cómo un equipo o planta aplicó la práctica y qué cambió en sus indicadores. Finalmente, los resultados deben preparar el terreno para el escalamiento: qué prácticas pasarán a estándar, qué pilotos se extenderán y qué aprendizajes se documentarán en repositorios internos. La claridad con la que RH exhiba estos vínculos refuerza su rol como función que genera valor medible para toda la organización. :contentReference[oaicite:6]{index=6}",
            },

            /* Acordeón 2 — Beneficios/alcances del benchmarking (viñetas del PDF: bloque B) */
            {
              type: "accordion",
              header:
                "Beneficios y alcances del benchmarking (bloque B del PDF)",
              open: false,
              text:
                "* **Se basa en la experiencia de otras empresas**, acelerando el aprendizaje.  \n" +
                "* **Fomenta el aprendizaje organizacional y de los recursos humanos**, aprovechando conocimientos y habilidades para minimizar deficiencias.  \n" +
                "* **Apoya la mejora continua** al incorporar prácticas probadas.  \n" +
                "Fuente: Material de estudio, Módulo 3, viñetas del apartado de benchmarking (adaptado de Arias Gilart & Falcón, 2012). :contentReference[oaicite:7]{index=7}",
            },

            /* Párrafo 3 — Áreas donde se reflejan resultados y ejemplos (≈300 palabras) */
            {
              type: "paragraph",
              text: "En el ámbito de RH, los resultados del benchmarking suelen hacerse visibles en cuatro frentes operativos: **compensaciones y beneficios**, **costos laborales/impuestos del personal**, **atracción y selección**, y **capacitación y desarrollo**. En compensaciones y beneficios, es común documentar ahorros por optimización del mix (fijo/variable), negociación con proveedores o ajustes de elegibilidad; estos resultados deben acompañarse de análisis de equidad interna y competitividad externa para evitar efectos colaterales. En costos laborales, la revisión de procesos administrativos y de cumplimiento puede reducir retrabajos, multas o recargos, y acortar ciclos de nómina. En atracción y selección, la adopción de mejores prácticas (fuentes, filtrado, evaluación, oferta) tiende a disminuir el coste por contratación y el tiempo de cobertura, además de elevar la calidad de hire. Por último, en capacitación y desarrollo, comparar catálogos, modalidades y métricas de transferencia al puesto permite dirigir inversión a contenidos de mayor impacto y medir retorno mediante mejoras de productividad o seguridad. Para dar visibilidad, los resultados deben plasmarse en tableros que muestren tendencias y en revisiones ejecutivas que expliquen qué prácticas impulsaron cada cambio. Acompañar los datos con un plan de continuidad (dueños de proceso, rutinas de revisión y presupuesto) sostiene el efecto en el tiempo y habilita nuevas iteraciones de benchmarking sobre áreas no cubiertas en este ciclo. Estos focos de resultado son citados explícitamente en el material del módulo: compensaciones, beneficios, impuestos, reclutamiento y selección, e identificación oportuna de necesidades de capacitación. :contentReference[oaicite:8]{index=8}",
            },

            /* Video — Presentación de resultados en benchmarking */
            {
              type: "video",
              title:
                "Cómo presentar resultados de benchmarking en Recursos Humanos",
              src: "https://www.youtube.com/watch?v=OeYbrvBKz4E",
              caption:
                "Guía práctica para estructurar KPI, storytelling y planes de acción en informes ejecutivos de RH.",
            },
          ],
        },
        {
          id: "6.5",
          numbering: "6.5",
          title: "Visión del proyecto en su totalidad",
          content: [
            {
              type: "paragraph",
              text: "La visión del proyecto de benchmarking en su totalidad concibe el ejercicio como un proceso continuo y sistemático que compara nuestras prácticas de gestión del talento con las de organizaciones líderes, con el fin de aprender y adaptar aquello que demuestre mayor eficacia. En esta visión integral, el proyecto arranca con la definición estratégica del alcance (subprocesos, indicadores, pares de referencia) y con un mapa de interesados que alinee expectativas de Dirección, RH y áreas usuarias. A partir de ahí, se establecen fuentes de datos internas y externas, criterios de comparabilidad, protocolos de recolección y estándares de calidad de la información. La intención no es solo conocer “quién es el mejor”, sino comprender el “cómo” para traducirlo en decisiones operativas y en resultados cuantificables (costos, tiempos, calidad del servicio, satisfacción, rotación, productividad). El proyecto articula un ciclo de mejora: diagnóstico comparado → identificación de brechas → diseño de prácticas objetivo → piloto y escalamiento → monitoreo de KPIs y lecciones aprendidas. Se privilegia la colaboración interáreas y el aprendizaje organizacional, de modo que el conocimiento se capture y comparta mediante repositorios, comunidades de práctica y rutinas de retroalimentación. Con ello, la evaluación comparativa se convierte en una palanca para cambiar paradigmas, fijar metas ambiciosas y promover innovaciones realistas, manteniendo trazabilidad del impacto y gobernanza del cambio. Esta concepción es coherente con el planteamiento del módulo: benchmarking como proceso continuo de comparación con líderes para generar ideas nuevas y obtener resultados que puedan traducirse en números.",
            },
            {
              type: "paragraph",
              text: "Operativamente, la visión total del proyecto vincula el benchmarking de RH con beneficios concretos en clima, gestión, redes de colaboración y aprendizaje organizacional. Así, se espera: mejorar el clima laboral y la eficiencia; verificar sistemáticamente fortalezas y debilidades; obtener, analizar y adaptar prácticas, procesos y estrategias; y crear redes entre organizaciones para impulsar la mejora continua. La visión no se limita a un solo subsistema: busca abarcar compensaciones y beneficios, cargas patronales, reclutamiento, selección y formación, entre otros frentes, para convertir el desempeño cualitativo de RH en resultados cuantitativos que generen ventajas competitivas sostenibles. El cierre del proyecto contempla hoja de ruta, responsables, cronograma de implantación, mecanismos de reversión y planes de comunicación que faciliten la adopción, así como tableros de indicadores para el seguimiento. En suma, la visión global del benchmarking en RH pretende traducir la comparación externa en mejoras internas sostenidas, conectando el aprendizaje con decisiones presupuestales y operativas, y estableciendo metas superiores a las del mercado de referencia. Esta orientación integra la perspectiva del módulo sobre beneficios del benchmarking en RH y sobre las áreas donde su aplicación permite reducir gastos y reflejar resultados en utilidades, particularmente en compensaciones, beneficios, impuestos del personal, reclutamiento‑selección y detección oportuna de necesidades de capacitación.",
            },

            {
              type: "paragraph",
              text: "Beneficios clave del benchmarking en RH (según el módulo):",
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Mejora el clima laboral.",
                "Permite el cambio de paradigmas.",
                "Es un método simple y económico de mejorar la gestión.",
                "Proporciona metas desafiantes (aspirar y superar).",
                "Verifica fortalezas y debilidades de métodos actuales.",
                "Obtiene, analiza y adapta estrategias, procesos y prácticas.",
                "Crea redes de organizaciones para la mejora comparativa.",
                "Medio eficiente para introducir mejoras.",
                "No se limita a un solo subsistema y se apalanca en experiencias de otras empresas.",
                "Fomenta el aprendizaje organizacional en RH.",
              ],
            },

            {
              type: "paragraph",
              text: "Áreas prioritarias para medir y optimizar en la visión integral de RH:",
            },
            {
              type: "list",
              ordered: false,
              items: [
                "Compensaciones y beneficios (estructura, competitividad, costo-eficiencia).",
                "Impuestos y cargas del personal (cumplimiento y optimización).",
                "Reclutamiento y selección (tiempos de cobertura, calidad de contratación). :contentReference",
                "Identificación oportuna de necesidades de capacitación (brechas, impacto en desempeño).",
                "Conversión de resultados cualitativos en métricas cuantitativas para la toma de decisiones.",
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
          href: "https://www.youtube.com/watch?v=l1lMzGVWlB4&t=1s", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Gestión del talento humano https://www.youtube.com/watch?v=yZ7-ckjDE1I",
            "Ley Federal del Trabajo (2021), artículos 12–19 http://www.diputados.gob.mx/LeyesBiblio/pdf/125_230421.pdf",
            "La subcontratación en México (UNAM) https://archivos.juridicas.unam.mx/www/bjv/libros/7/3008/7.pdf",
            "La importancia del benchmarking como herramienta para incrementar la calidad en el servicio (IIESCA-UV) https://www.uv.mx/iiesca/files/2018/03/04CA201702.pdf",
            "Revista Creando valor RH (AMEDIRH) https://www.amedirh.com.mx/images/generales/revistarh/2021/Revista%20RH%20Enero%202021.pdf",
            "Procedimiento de benchmarking para el mejoramiento continuo de la gestión integrada de capital humano (EUMED) https://www.eumed.net/cursecon/ecolat/cu/2012/agrf.pdf",
            "Alles, Martha (2015). Dirección Estratégica de Recursos Humanos. Gestión por competencias (Granica) https://books.google.com.mx/books?id=FuMRCgAAQBAJ&printsec=frontcover&hl=es#v=onepage&q&f=false",
            "Vallejo Chávez, Luz (2016). Gestión del talento humano (ESPOCH) http://cimogsys.espoch.edu.ec/direccion-publicaciones/public/docs/books/2019-09-17-222134-gesti%C3%B3n%20del%20talento%20humano-comprimido.pdf",
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
            "ADP Iberia — El papel de Internet en Recursos Humanos https://www.es-adp.com/",
            "Universidad Cisneros — Gestión de Recursos Humanos: qué es, funciones y objetivos https://www.universidadcisneros.es/gestion-de-recursos-humanos-que-es-funciones-y-objetivos/",
            "Economipedia — Gestión (definición) https://economipedia.com/definiciones/gestion.html",
            "El Financiero — ¿Cuáles son los cambios que verás con la reforma sobre outsourcing? https://www.elfinanciero.com.mx/economia/2021/04/14/cuales-son-los-cambios-que-veras-con-la-reforma-sobre-outsourcing/",
            "EOI — Gestión de recursos humanos: importancia y objetivos https://www.eoi.es/blogs/mintecon/2015/05/04/gestion-de-recursos-humanos-importancia-y-objetivos/",
            "IIESCA-UV — La importancia del Benchmarking como herramienta para incrementar la calidad en el servicio https://www.uv.mx/iiesca/files/2018/03/04CA201702.pdf",
            "Gobierno de México — NOM-037-STPS-2023: Teletrabajo (condiciones de seguridad y salud) https://www.gob.mx/stps/prensa/se-publica-en-el-diario-oficial-de-la-federacion-la-nom-037-stps-2023-teletrabajo-condiciones-de-seguridad-y-salud-en-el-trabajo?idiom=es",
            "Universidad de Guantánamo (EUMED) — Procedimiento de Benchmarking para la gestión integrada de capital humano https://www.eumed.net/cursecon/ecolat/cu/2012/agrf.pdf",
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
