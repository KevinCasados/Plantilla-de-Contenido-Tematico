/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "UEH-MI", // Maestría en Impuestos (UEH)
  courseId: "UEH-MI-ImpuestosInternacionales",
  id: "UEH-MI-IMPINT-Mod3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Impuestos Internacionales",
  title: "Módulo 3. Principios rectores y modelos de tributación en los CDT",
  semestre: "4.º semestre",
  teacher: "Mtra. Eloisa Barrientos Landa",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Determinar cuáles son los principios que rigen el sistema tributario y cómo operan dentro de los convenios para evitar la doble imposición; identificar los requisitos para acceder a sus beneficios y reconocer los modelos de convenio (OCDE/ONU y EE. UU.) y su aplicación práctica.",
  competencies: [
    "Analiza los principios constitucionales tributarios (proporcionalidad, equidad, legalidad y destino al gasto público) y su impacto en la doble imposición.",
    "Interpreta el marco jurídico interno y externo aplicable a los tratados (Constitución, Ley sobre la Celebración de Tratados y Convención de Viena).",
    "Identifica sujetos, objeto, base y tasas en los tratados y explica los métodos para eliminar la doble tributación.",
    "Compara los modelos de convenios (OCDE/ONU y el tratado México–EE. UU.), señalando reservas y particularidades para México.",
    "Aplica criterios para el acceso a beneficios (cláusulas de limitación de beneficios, procedimiento amistoso) con enfoque de cumplimiento.",
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

    /* 1. Nodo / Unidad principal (mapea la Unidad II del PDF) */
    {
      id: "1",
      numbering: "Unidad 1",
      title:
        "Principios tributarios y modelos de convenios para evitar la doble imposición",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad sitúa al estudiante frente a los principios constitucionales que rigen el sistema tributario mexicano y su conexión práctica con la doble tributación internacional. El punto de partida es el artículo 31, fracción IV, de la Constitución, que consagra que toda persona debe contribuir al gasto público de manera proporcional y equitativa, conforme a lo que dispongan las leyes. De ese mandato derivan cuatro ejes: proporcionalidad (capacidad contributiva y progresividad), equidad (igual trato a quienes están en situaciones fiscales equivalentes), legalidad (reserva y preeminencia de la ley para fijar los elementos del tributo) y destino al gasto público (uso de los recursos para fines públicos). Comprender estos principios no es un ejercicio meramente teórico: orientan la legitimidad del sistema y delimitan qué puede exigir la autoridad. A partir de aquí se explica por qué la doble tributación—cuando dos jurisdicciones pretenden gravar la misma renta—requiere soluciones cooperativas. En síntesis, el marco constitucional fija el ‘piso’ de justicia fiscal doméstica sobre el cual se construyen, mediante tratados, las reglas de reparto de potestades entre países para evitar gravámenes superpuestos y, al mismo tiempo, combatir la evasión.",
        },
        {
          type: "paragraph",
          text: "La doble tributación se entiende mejor observando los criterios de sujeción internacional con que los Estados ejercen su potestad tributaria. En lo esencial, existen tres: fuente o territorialidad (el Estado grava la renta por su origen económico en su territorio), residencia (el Estado grava la renta mundial de sus residentes) y ciudadanía o nacionalidad (el Estado grava a sus nacionales, aun si no residen en su territorio). El principio de la fuente suele ser central para economías proveedoras de recursos o factores productivos, mientras que el de residencia privilegia la lealtad fiscal y la información disponible sobre los contribuyentes. La coexistencia de criterios genera solapamientos: por ejemplo, un residente de un país obtiene ingresos de fuente en otro; ambos Estados pueden pretender gravar. De ahí la utilidad de los convenios para evitar la doble imposición (CDI): instrumentos internacionales que distribuyen la potestad tributaria, fijan reglas de sujeción (p. ej., establecimiento permanente) y prevén métodos para eliminar la doble imposición (exención o acreditamiento).",
        },
        {
          type: "paragraph",
          text: "Para México, un referente clave es el Convenio con Estados Unidos de América en materia de impuestos sobre la renta, que ilustra cómo los CDI asignan potestades y limitan gravámenes. Por ejemplo, en beneficios empresariales (art. 7) se grava, por regla, en el Estado de residencia salvo que exista establecimiento permanente en la fuente; en navegación marítima o aérea (art. 8) los beneficios se gravan únicamente en el Estado de la empresa de transporte; en empresas asociadas (art. 9) se reconoce el ajuste correlativo por precios de transferencia; dividendos (art. 10) e intereses (art. 11) establecen retenciones y topes convencionales. Además, incorpora cláusulas de limitación de beneficios (LOB, art. 17) que condicionan el acceso a tasas preferentes para evitar el treaty shopping, exigiendo que el beneficiario sea, por ejemplo, persona física, entidad gubernamental, sociedad con acciones listadas en mercados reconocidos, organización sin fines de lucro o entidad que cumpla pruebas de propiedad y erogaciones. Esta arquitectura protege la integridad del tratado y al mismo tiempo brinda certeza a la inversión transfronteriza.",
        },
        {
          type: "paragraph",
          text: "En el plano ‘modelo’, los países se guían por plantillas que armonizan conceptos y distribución de potestades. La Convención Modelo de la OCDE sobre la Renta y el Capital es, para México, un insumo interpretativo y de diseño; prioriza la residencia en varios rubros y estandariza definiciones, métodos de eliminación de doble imposición y procedimientos amistosos. El Modelo de la ONU, por su parte, suele otorgar mayor participación al Estado de la fuente—relevante para países en desarrollo—incrementando, por ejemplo, márgenes de retención en pagos transfronterizos. También existe el Modelo de los Estados Unidos de América, que incorpora con detalle cláusulas antiabuso, reglas sobre establecimientos permanentes de servicios y versiones robustas de LOB. La adhesión de México a la OCDE en 1994 consolidó la convergencia con estándares internacionales y dejó constancia de reservas en ciertas materias fiscales, pero reafirmó el compromiso con la cooperación tributaria, el intercambio de información y la prevención de la evasión.",
        },
        {
          type: "paragraph",
          text: "Desde una perspectiva operativa, dominar estos principios y modelos permite leer con precisión cualquier CDI aplicable al caso concreto. El profesional debe verificar: (1) si el contribuyente califica para beneficios convencionales (residencia, pruebas LOB, titularidad efectiva), (2) si existe establecimiento permanente en el Estado de la fuente, (3) qué artículo del tratado gobierna la renta (empresariales, dividendos, intereses, regalías, servicios), (4) qué método elimina la doble imposición en el Estado de residencia (acreditamiento o exención) y (5) qué salvaguardas antiabuso podrían activar ajustes (empresas asociadas, precios de transferencia, limitaciones específicas). A ello se suma la necesidad de documentar comparabilidad, sustancia económica y propósito de las operaciones, pues la administración puede exigir pruebas de que los beneficios no se obtienen con fines impropios. En suma, el ‘idioma’ de los CDI traduce los principios de justicia tributaria al tráfico internacional de rentas, y su correcta aplicación evita litigios y costos fiscales innecesarios.",
        },

        /* ── Acordeones (texto en formato párrafo) ── */
        {
          type: "accordion",
          header:
            "Principios constitucionales tributarios (proporcionalidad, equidad, legalidad y destino)",
          open: false,
          text: "El artículo 31, fracción IV, de la Constitución fija el deber de contribuir al gasto público de manera proporcional y equitativa, conforme a la ley. Proporcionalidad significa aportar según la capacidad contributiva real, con progresividad en impuestos directos y coherencia de tasas en los indirectos; equidad exige trato igual a los iguales y trato distinto a quienes están en condiciones distintas, tanto en obligaciones sustantivas como en formales estrechamente vinculadas al tributo. La legalidad impone que los elementos esenciales del impuesto (hecho imponible, sujeto, objeto y cuantía) emanen de la ley, con reserva relativa en lo cuantitativo y preeminencia de la norma para la actuación administrativa. El destino al gasto público tutela que la recaudación financie necesidades colectivas, evitando desvíos. Estos principios no sólo legitiman el sistema interno, también condicionan la forma en que México negocia y aplica convenios internacionales, pues cualquier solución a la doble imposición debe ser compatible con la justicia fiscal doméstica y la seguridad jurídica del contribuyente.",
        },
        {
          type: "accordion",
          header:
            "Requisitos para acceder a beneficios de los convenios (cláusulas LOB)",
          open: false,
          text: "Muchos CDI condicionan las tasas reducidas y otras ventajas a que el perceptor cumpla criterios objetivos de elegibilidad. Las cláusulas de limitación de beneficios (LOB) exigen, entre otros supuestos, que el beneficiario sea persona física; o una entidad pública; o una sociedad cuyas acciones coticen sustancial y regularmente en un mercado reconocido; o una organización sin fines de lucro; o una entidad que supere pruebas combinadas de propiedad y de uso de ingresos (p. ej., umbrales de tenencia por residentes del Estado contratante o de países vinculados por acuerdos amplios, y límites al porcentaje de rentas que se destina a obligaciones con no elegibles). En la práctica, antes de aplicar una retención reducida sobre dividendos, intereses o regalías, debe verificarse documentalmente la residencia fiscal y el cumplimiento de los tests LOB; de no superarse, el tratado permite negar el beneficio o remitir el caso a autoridad competente para valorar si no hubo propósito principal de obtener ventajas indebidas. Esta disciplina protege la integridad del CDI sin obstaculizar operaciones genuinas.",
        },
        {
          type: "accordion",
          header:
            "Modelos de convenio (OCDE/ONU) y referencia del modelo de EUA",
          open: false,
          text: "Los modelos de CDI cumplen una función estandarizadora. El de la OCDE, al que México reconoce como referente interpretativo, ofrece definiciones uniformes (residente, establecimiento permanente, beneficios empresariales), categorías de renta con reglas de reparto y métodos de eliminación de doble imposición, además de un Comentario que guía su aplicación. El Modelo de la ONU, más favorable a la fuente, incrementa márgenes de retención y prevé supuestos que reflejan realidades de países en desarrollo. El Modelo de EUA enfatiza salvaguardas antiabuso y pruebas LOB detalladas, así como precisiones sobre servicios y EP. México, al adherirse a la OCDE en 1994, fortaleció su alineación con buenas prácticas y adoptó reservas específicas en materia fiscal; esto se traduce en tratados con redacción convergente y en una administración tributaria que recurre a procedimientos amistosos y ajustes correlativos para resolver controversias. Conocer las diferencias entre modelos permite anticipar el trato fiscal por tipo de renta y jurisdicción.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "1.1",
          numbering: "2.4",
          title: "Principios rectores de los modelos tributarios",
          content: [
            {
              type: "paragraph",
              text: "La Constitución Política de los Estados Unidos Mexicanos, en su artículo 31 fracción IV, establece que las personas deben contribuir al gasto público de manera proporcional y equitativa, con base en lo que dispongan las leyes. De ahí se desprenden cuatro principios rectores que atraviesan cualquier modelo tributario: proporcionalidad, equidad, legalidad y destino al gasto público. Estos principios no son meras cláusulas programáticas; funcionan como criterios de validez y de control de constitucionalidad sobre impuestos, derechos y contribuciones, y orientan la forma en que el legislador diseña los elementos esenciales del tributo (sujeto, objeto, base y tasa). En la práctica, su observancia condiciona también la coordinación fiscal entre órdenes de gobierno y la interacción con instrumentos internacionales, como los convenios para evitar la doble imposición. Por ello, su estudio es el punto de partida para comprender por qué los sistemas comparados (OCDE/ONU, EUA) convergen en reglas de neutralidad, capacidad contributiva y seguridad jurídica, así como los límites para el diseño de beneficios o tratamientos preferenciales. En síntesis, los principios constitucionales delimitan el espacio legítimo de la potestad tributaria e impiden la imposición arbitraria o regresiva. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "La proporcionalidad exige que la carga fiscal se distribuya según la capacidad económica del contribuyente, idealmente con tarifas progresivas en impuestos directos como el Impuesto sobre la Renta. La Suprema Corte ha sostenido desde 1969 que dicha progresividad materializa el mandato constitucional: quien obtiene más ingresos debe contribuir en mayor medida, siempre que el hecho imponible refleje una auténtica manifestación de riqueza. En impuestos indirectos, el estándar no es la progresividad, sino la razonabilidad de la tasa en función de la base gravada, evitando afectaciones desproporcionadas a derechos fundamentales o a la actividad económica. En cuanto a los “derechos”, la proporcionalidad se aprecia en la correlación entre costo del servicio público y cuota fija aplicada de forma igual a quienes reciben el mismo servicio, sin atender a la riqueza individual. Así, la proporcionalidad actúa como un filtro técnico-jurídico que conecta el diseño de tarifas, la estructura de deducciones/exenciones y la protección del “mínimo vital”, especialmente relevante en entornos inflacionarios y de desigualdad. :contentReference[oaicite:1]{index=1}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header:
                "Equidad e igualdad tributaria (trato igual a los iguales)",
              open: false,
              text: "La equidad, entendida como igualdad jurídica, demanda que quienes se hallan en condiciones fiscales semejantes reciban el mismo trato legal y administrativo, y que quienes estén en condiciones distintas reciban un trato diferenciado razonable. Opera en dos planos: equidad ante la ley (que prohíbe distinciones arbitrarias entre contribuyentes) y equidad en la ley (que impide que el propio texto normativo introduzca categorías o supuestos discriminatorios). Su alcance cubre tanto elementos sustantivos (causación, exenciones, devoluciones) como formales estrechamente vinculados al núcleo del tributo (por ejemplo, obligaciones de información que, si son desmedidas, pueden volverse inequitativas). La equidad, por tanto, es el anclaje para revisar tratamientos sectoriales, tasas preferenciales o umbrales, y exige justificación objetiva y razonable. En la práctica, se evalúa con datos: estructura de ingresos, incidencia efectiva del impuesto por decil y el impacto de beneficios fiscales; solo así se evita que la “neutralidad” aparente esconda sesgos que deterioren la legitimidad del sistema. :contentReference[oaicite:2]{index=2}",
            },

            {
              type: "paragraph",
              text: "El principio de legalidad tributaria impone reserva de ley para definir los elementos cualitativos de un tributo (sujeto y objeto) y permite que ciertos elementos cuantitativos (como bases y tasas) se desarrollen en normas secundarias dentro de límites previamente fijados por el legislador. Esta arquitectura persigue doble finalidad: asegurar que toda imposición tenga habilitación democrática (parlamentaria) y que la actuación administrativa se sujete estrictamente a derecho. Desde la óptica del contribuyente, la legalidad garantiza previsibilidad —sabrá quién paga, por qué paga y cuánto paga— y brinda un estándar para impugnar arbitrariedades. La legalidad, además, articula el sistema con los tratados: aunque estos tengan rango superior a la ley, su aplicación concreta debe encontrar cauce en normas internas conforme a la Constitución, evitando contradicciones de técnica legislativa o lagunas que abran espacio a incertidumbre o litigiosidad recurrente. :contentReference[oaicite:3]{index=3}",
            },
            {
              type: "paragraph",
              text: "El destino al gasto público justifica el “desprendimiento patrimonial” que implican los tributos: la recaudación debe financiar necesidades colectivas y no usos ajenos al interés general. La Suprema Corte lo ha reconocido como principio que impide desviar recursos a fines impropios y que, junto con la solidaridad, legitima la contribución. En un Estado federal, la regla admite que el gasto se realice en cualquiera de los órdenes de gobierno (Federación, entidades federativas o municipios), de acuerdo con los pactos de coordinación. Este principio vincula la recaudación con la legitimidad del gasto: transparencia, rendición de cuentas y evaluación del desempeño del presupuesto fortalecen la aceptabilidad social del sistema. En términos de política tributaria, refuerza que incentivos o beneficios fiscales se midan contra impactos reales en objetivos públicos (empleo, inversión, transición verde) y no como renuncias recaudatorias inerciales. :contentReference[oaicite:4]{index=4}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header:
                "Doble tributación y criterios de sujeción: fuente, residencia y nacionalidad",
              open: false,
              text: "La doble tributación surge cuando dos jurisdicciones ejercen potestad sobre la misma renta o contribuyente bajo criterios concurrentes: fuente (origen económico), residencia (renta mundial) y, en algunos países, nacionalidad/ciudadanía. El principio de la fuente se justifica por el “beneficio” y la “soberanía territorial”: quien utiliza infraestructura y servicios públicos para generar renta en un país contribuye allí; puede observarse por fuente productora o fuente pagadora. La residencia, a su vez, descansa en la lealtad fiscal y en la mayor capacidad del Estado de residencia para medir la habilidad de pago del individuo o entidad. La ciudadanía es excepcional (p. ej., EUA), pero ilustra cómo distintas anclas de sujeción conviven y generan solapamientos. Los convenios para evitar la doble imposición armonizan estos criterios con reglas distributivas, métodos para eliminar doble imposición y mecanismos de cooperación administrativa. :contentReference[oaicite:5]{index=5}",
            },

            {
              type: "paragraph",
              text: "En conjunto, proporcionalidad, equidad, legalidad y destino al gasto público se proyectan sobre la arquitectura de convenios y sobre la política fiscal doméstica. Los tratados no sustituyen la Constitución; se leen a su luz. Por eso, al diseñar regímenes de retención, límites a deducciones o estímulos, el legislador y la administración deben justificar su razonabilidad a la luz de capacidad contributiva, trato no discriminatorio, previsibilidad normativa y finalidad pública. Este andamiaje conceptual explica por qué los modelos OCDE/ONU privilegian reglas claras (definiciones, establecimiento permanente, métodos de eliminación de doble tributación) y salvaguardas antiabuso (LOB, PPT). Así, la coherencia entre principios internos y estándares internacionales reduce controversias, promueve inversión con certeza y sostiene la legitimidad del sistema. :contentReference[oaicite:6]{index=6}",
            },
          ],
        },
        {
          id: "1.2",
          numbering: "2.5",
          title:
            "Requisitos para tener derecho a los beneficios de los convenios",
          content: [
            {
              type: "paragraph",
              text: "Los convenios bilaterales distribuyen potestades tributarias y fijan topes de gravamen, pero sus beneficios no son automáticos: exigen cumplir requisitos de elegibilidad (residencia, naturaleza del perceptor, actividad sustantiva) y, en su caso, cláusulas de limitación de beneficios (LOB). El Convenio México–Estados Unidos ilustra este enfoque: regula beneficios empresariales (art. 7), navegación marítima y aérea (art. 8), empresas asociadas (art. 9), y pagos pasivos —dividendos, intereses, regalías— con condiciones específicas; además, incorpora una LOB robusta (art. 17) para evitar el treaty shopping. Por ello, el análisis práctico combina prueba de residencia fiscal, sustancia económica y verificación de umbrales de participación y de “no canalización” de rentas a terceros no elegibles. El cumplimiento documental (certificados de residencia, formularios y contratos) es parte inseparable de la planeación y defensa. :contentReference[oaicite:7]{index=7}",
            },
            {
              type: "paragraph",
              text: "En beneficios empresariales, la regla base es simple: la renta sólo puede gravarse en el Estado de residencia, salvo que exista un establecimiento permanente (EP) en el otro Estado; de haberlo, la imposición en la fuente se limita a la porción atribuible al EP. El Convenio México–EUA añade un matiz: ventas en el otro Estado de bienes idénticos o similares a los del EP pueden gravarse allí, salvo prueba de que no se busca un beneficio del Convenio. En transporte internacional, los beneficios de explotar buques o aeronaves sólo se gravan en el Estado de residencia de la empresa. Para empresas asociadas, procede ajuste correlativo cuando un Estado incremente utilidades por condiciones no arm’s length, siempre que el otro Estado acepte el ajuste mediante procedimiento amistoso. Estas reglas requieren sistemas contables y de precios de transferencia que documenten funciones, activos y riesgos. :contentReference[oaicite:8]{index=8}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Dividendos, intereses y regalías: acceso condicionado",
              open: false,
              text: "En pagos pasivos, los convenios suelen fijar tasas reducidas en la fuente condicionadas a la calidad del beneficiario efectivo y, en su caso, a umbrales de participación accionaria. El Convenio México–EUA prevé que dividendos e intereses pagados a un residente del otro Estado pueden someterse a imposición en ese otro Estado (residencia), pero también admite imposición limitada en la fuente bajo parámetros del tratado. Para aplicar la tasa reducida, el receptor debe probar residencia y, con frecuencia, sustancia; además, la LOB filtra estructuras cuya finalidad principal sea obtener beneficios del convenio. Por ello, las áreas de tesorería y fiscal deben coordinar certificaciones de residencia, análisis de beneficiario efectivo y trazabilidad de los flujos para resistir revisiones. Un incumplimiento formal (p. ej., certificados vencidos) puede frustrar la tasa preferencial. :contentReference[oaicite:9]{index=9}",
            },

            {
              type: "paragraph",
              text: "La cláusula de Limitación de Beneficios (LOB) del art. 17 en México–EUA enumera categorías elegibles: personas físicas; el propio Estado y entidades públicas; empresas con actividad empresarial sustantiva relacionada con la renta del otro Estado; sociedades cuyas acciones principales coticen sustancial y regularmente; entidades sin fines de lucro; y ciertos supuestos de propiedad y “no canalización” de ingresos a no elegibles. Incluso si el contribuyente no encaja en los supuestos, puede solicitar beneficios probando que su constitución y actividades no persiguen esencialmente obtener ventajas del Convenio. En términos operativos, esto exige “pruebas de sustancia”: personal, activos, riesgos y funciones que respalden la actividad; además, propiedad accionaria y financiamiento que no apunten a arbitraje de tratados. La LOB, así, institucionaliza un test antiabuso que convive con otros estándares como beneficiario efectivo y propósito principal. :contentReference[oaicite:10]{index=10}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Documentación y procedimiento amistoso",
              open: false,
              text: "Aun cumpliendo los requisitos materiales, la falta de soporte documental impide acceder a beneficios. Es indispensable: (1) certificado de residencia vigente; (2) contratos que detallen funciones y riesgos; (3) evidencia de beneficiario efectivo; (4) trazabilidad de pagos; y (5) políticas internas de precios de transferencia. Si, pese a ello, dos Estados gravan la misma renta, el contribuyente puede activar el procedimiento amistoso para buscar ajustes correlativos; el éxito depende de la coherencia técnica del caso y de la oportunidad en la solicitud. La coordinación temprana entre áreas jurídica, fiscal y de negocio reduce contingencias, especialmente en estructuras con EP, agrupaciones empresariales o cadenas de valor integradas. :contentReference[oaicite:11]{index=11}",
            },

            {
              type: "paragraph",
              text: "En la práctica, la elegibilidad bajo un tratado se valida operación por operación. Empresas que cotizan en bolsa o pertenecen a grupos del TLC pueden calificar con relativa facilidad, pero deben vigilar que menos de ciertos porcentajes de sus ingresos se canalicen a no elegibles. Las entidades con fines no lucrativos acceden si su exención es general y si la mayoría de beneficiarios tiene derecho a beneficios. Todo lo anterior muestra que la planeación con tratados no es una etiqueta estática, sino un marco que exige monitoreo continuo para sostener la tasa preferencial y para evitar reclasificaciones (p. ej., de intereses a utilidades empresariales) que alteren la regla aplicable. :contentReference[oaicite:12]{index=12}",
            },
          ],
        },
        {
          id: "1.3",
          numbering: "2.6",
          title: "Modelos tributarios",
          content: [
            {
              type: "paragraph",
              text: "La vía más eficaz para resolver la doble imposición es la celebración de convenios bilaterales con reglas distributivas armonizadas y mecanismos de cooperación administrativa. El andamiaje comparado pivota en dos referentes: el Modelo de Convenio de la OCDE sobre la Renta y el Capital y el enfoque de los Estados Unidos de América plasmado en su Modelo de Tratado sobre Impuestos. El primero privilegia la residencia y estándares como el arm’s length, definición de establecimiento permanente y métodos para eliminar la doble imposición; el segundo enfatiza salvaguardas antiabuso, definiciones de beneficiario efectivo y cláusulas LOB detalladas. México, como miembro de la OCDE desde 1994, ha adoptado estos estándares con reservas puntuales (p. ej., precios de transferencia, intercambio de información y procedimientos simultáneos), lo que explica la convergencia general con matices en la práctica doméstica. :contentReference[oaicite:13]{index=13}",
            },
            {
              type: "paragraph",
              text: "Históricamente, la OCDE surge de la transformación, en 1960, de la Organización Europea de Cooperación Económica; sus objetivos incluyen promover crecimiento y empleo, apoyar el desarrollo de países no miembros y expandir el comercio mundial sobre base multilateral y no discriminatoria. México aceptó sus obligaciones como miembro en 1994, con aprobación del Senado y publicación en el Diario Oficial, integrando así el acervo de recomendaciones y modelos en materia fiscal. El modelo OCDE ha servido de guía para la red de tratados de México, con adaptaciones a prioridades nacionales y coordinación con la Ley sobre Celebración de Tratados y la Convención de Viena, que rigen la celebración, entrada en vigor, interpretación e implementación de los convenios. :contentReference[oaicite:14]{index=14}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Modelo de EUA: rasgos y relación con México",
              open: false,
              text: "El Modelo de EUA enfatiza el control de abusos a través de cláusulas LOB prescriptivas, definiciones de establecimiento permanente con precisiones adicionales y artículos de pagos pasivos con límites claros. En la práctica, su tratado con México incorpora beneficios empresariales, transporte internacional y empresas asociadas (ajustes correlativos) y disciplina los pagos de dividendos e intereses con condiciones específicas. La LOB detalla supuestos elegibles (cotización bursátil, propiedad/ingresos por residentes elegibles, actividades sustantivas) y abre una puerta discrecional vía autoridades competentes. Para planificar, las empresas mexicanas deben atender no solo a la literalidad del tratado, sino a sustancia y propiedad efectiva, pues la administración estadounidense privilegia el propósito principal y la transparencia de estructuras. :contentReference[oaicite:15]{index=15}",
            },

            {
              type: "paragraph",
              text: "El Modelo OCDE, por su parte, ha evolucionado con BEPS y MLI, incorporando pruebas de propósito principal (PPT), estrechando definiciones de establecimientos permanentes artificiales y reforzando intercambio de información y cooperación. Aun así, su lógica sigue siendo de reparto: delimita cuándo grava la fuente y cuándo la residencia, y prescribe métodos para eliminar la doble imposición (exención o acreditamiento). Para México, adoptar el estándar OCDE supuso modernizar conceptos de establecimiento permanente, robustecer precios de transferencia y articular procedimientos amistosos más efectivos. La convergencia con la ONU se da especialmente en países en desarrollo, que buscan mayor gravamen en la fuente para actividades intensivas en recursos o mercado. :contentReference[oaicite:16]{index=16}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Reservas de México en materia fiscal dentro de la OCDE",
              open: false,
              text: "Al adherirse a la OCDE, México formuló reservas a recomendaciones del Consejo en materias como: determinación de precios de transferencia entre empresas asociadas; asistencia administrativa multilateral para devoluciones; formatos estandarizados para intercambio automático de información; eliminación de la doble imposición en impuestos patrimoniales; exámenes tributarios simultáneos, y aspectos de la Convención Modelo para Evitar la Doble Imposición. Estas reservas no implican rechazo del estándar, sino adaptación gradual a capacidades administrativas, prioridades de política pública y coherencia con la Constitución (proporcionalidad, equidad, legalidad, destino del gasto). El resultado ha sido una red de tratados compatible con el modelo, pero con cláusulas específicas negociadas caso por caso. :contentReference[oaicite:17]{index=17}",
            },

            {
              type: "paragraph",
              text: "Para la práctica profesional, conocer los modelos y sus principios permite anticipar dónde estarán las fronteras de imposición (fuente vs. residencia), qué documentos serán exigibles (residencia, beneficiario efectivo), cómo operarán las cláusulas antiabuso y cuáles son las rutas para resolver controversias (procedimiento amistoso, ajustes correlativos). Así, el profesional puede evaluar la conveniencia de estructuras, la sostenibilidad de tasas preferenciales y el riesgo de recaracterizaciones. En definitiva, los modelos tributarios no son plantillas estáticas, sino marcos vivos que, informados por los principios constitucionales y por la cooperación internacional, buscan equilibrar recaudación, inversión y justicia fiscal. :contentReference[oaicite:18]{index=18}",
            },
            {
              type: "paragraph",
              text: "Finalmente, el entendimiento de los modelos OCDE y EUA ayuda a alinear la política interna con la práctica internacional y con los objetivos macros de la OCDE: crecimiento, estabilidad financiera y expansión del comercio mundial. Esta alineación no es automática: exige evaluar impactos distributivos (proporcionalidad), garantizar trato no discriminatorio (equidad), mantener certeza normativa (legalidad) y demostrar que los recursos se destinan a fines públicos verificables (destino al gasto). Desde esta óptica, los convenios no son “privilegios”; son instrumentos de coordinación que, bien implementados, reducen fricciones, evitan doble gravamen y cierran espacios para la evasión y la doble no imposición. :contentReference[oaicite:19]{index=19}",
            },
          ],
          /* → Sub-subtemas del 2.6 */
          subthemes: [
            {
              id: "1.3.1",
              numbering: "2.6.1",
              title:
                "Tratado de los Estados Unidos de América sobre impuestos a la renta",
              content: [
                {
                  type: "paragraph",
                  text: "El enfoque estadounidense en materia de convenios para evitar la doble imposición se caracteriza por su énfasis en la protección de la base gravable a través de cláusulas robustas de limitación de beneficios (LOB) y por una arquitectura distributiva que clarifica con precisión dónde y cómo deben gravarse distintas categorías de renta. En su relación con México, el tratado bilateral configura un sistema que busca evitar la doble tributación sin abrir la puerta a la doble no imposición ni al treaty shopping, combinando reglas de atribución de beneficios empresariales, disposiciones específicas para dividendos, intereses y regalías, y un mecanismo de procedimiento amistoso para ajustes correlativos entre empresas asociadas. La lógica de política pública detrás de este diseño es doble: por un lado, alentar la inversión y el comercio transfronterizos mediante certidumbre tributaria; por el otro, prevenir estructuras de tenencia o de financiamiento interpuestas cuyo propósito principal sea el aprovechamiento indebido de tasas preferenciales. En términos operativos, el contribuyente debe atender a los umbrales de sustancia económica, a la calidad del establecimiento permanente y a las condiciones de mercado entre partes relacionadas. La instrumentación práctica exige una documentación consistente: contratos, análisis funcional y de riesgos, papeles de trabajo de precios de transferencia y, en su caso, pruebas de cotización bursátil o de naturaleza sin fines de lucro cuando se invoca la LOB. Finalmente, la coordinación administrativa entre autoridades cobra especial relevancia para destrabar controversias y evitar imposiciones no acordes con el tratado.",
                },
                {
                  type: "paragraph",
                  text: "En el capítulo de beneficios empresariales, el tratado dispone que las utilidades de una empresa residente sólo pueden gravarse en su Estado de residencia, salvo que opere en el otro Estado mediante un establecimiento permanente (EP). En ese supuesto, la potestad del otro Estado se limita a la porción atribuible al EP, incluyendo—en términos acotados—ciertas ventas de bienes idénticos o similares vinculadas con ese EP. Esta fórmula apunta a dos equilibrios: el primero, proteger el principio de la residencia como regla general de sujeción de rentas empresariales; el segundo, reconocer el nexo económico que el EP crea en la jurisdicción de la fuente. Para el contribuyente práctico, esto significa que la caracterización y la atribución al EP deben descansar en una contabilidad separada razonable y en un análisis de funciones, activos y riesgos que permita asignar utilidades conforme a plena competencia. También demanda consistencia entre los contratos y la ejecución real (substance over form) y disciplina en la segmentación de ingresos y costos que, de otra manera, podrían diluirse a nivel corporativo. Cuando la empresa realiza ventas directas en el otro Estado sin mediar EP, debe verificar que no se configuren supuestos asimilables o anti-fragmentación que terminen gatillando la creación de un EP de facto.",
                },
                {
                  type: "paragraph",
                  text: "El tratado también contiene reglas sectoriales con alto impacto operativo. En navegación marítima y aérea en tráfico internacional, se preserva la imposición exclusiva en el Estado de residencia de la empresa explotadora, atendiendo a la movilidad de activos y a la necesidad de evitar gravámenes superpuestos que distorsionen rutas y costos. Para empresas asociadas, la cláusula de ajustes correlativos permite que, si un Estado incrementa la base imponible de una vinculada por no plena competencia, el otro efectúe el ajuste espejo para evitar la doble tributación, activando el procedimiento amistoso. Operativamente, esto exige estudios de precios de transferencia robustos, con comparables pertinentes y márgenes dentro de rangos aceptados, así como trazabilidad documental que soporte re-caracterizaciones o políticas de reventa. En la práctica, la coordinación interadministrativa—incluyendo tiempos de respuesta y calidad de la información—puede ser tan determinante como la fortaleza técnica del análisis económico. Las empresas que operan flotas o cadenas logísticas globales deben armonizar sus calendarios contables y de cumplimiento con las ventanas de revisión de ambas autoridades, pues los desfasamientos incrementan riesgos de ajustes no sincronizados.",
                },
                {
                  type: "paragraph",
                  text: "En materia de inversión financiera y de retorno al capital, el tratado aborda dividendos e intereses con un diseño distributivo que equilibra necesidades de captación de ahorro y protección de la base. Los dividendos pagados por una sociedad residente de un Estado a un residente del otro pueden someterse a imposición en ambos, con topes de retención en la fuente que dependen de la relación accionaria y del cumplimiento de requisitos de beneficiario efectivo. Los intereses siguen la misma lógica de tributación compartida, sujeta a límites que reflejan el carácter movilísimo de esta renta y la propensión a planificaciones vía endeudamiento intragrupo. Para el contribuyente, esto impone tres tareas: validar la condición de beneficiario efectivo del receptor; verificar las condiciones de mercado del instrumento (tasa, plazos, garantías, subordinación); y gestionar certificados de residencia y formularios aplicables. Asimismo, deben alinearse criterios contables y fiscales para evitar reclasificaciones (por ejemplo, intereses vs. dividendos encubiertos) que desactiven el acceso a las tasas preferenciales. La correcta aplicación de estas reglas reduce litigios y volatilidad en el costo financiero de los proyectos transfronterizos.",
                },
                {
                  type: "paragraph",
                  text: "El sello distintivo del instrumento bilateral es su cláusula de Limitación de Beneficios (LOB), que condiciona el acceso a las ventajas del tratado a categorías de contribuyentes con sustancia suficiente. Se reconocen, entre otros, personas físicas; Estados y entidades públicas; entidades sin fines de lucro; sociedades con acciones cotizadas sustancial y regularmente en mercados reconocidos; y entidades que cumplan pruebas de propiedad y de erogaciones a no beneficiarios, con umbrales explícitos (p. ej., 50%, 60%, 70% o 40% según el subinciso aplicable). Para ingresos pasivos (dividendos, intereses, regalías), se añade una prueba específica con porcentajes de propiedad y límites a flujos hacia sujetos no elegibles, además de una vía residual de calificación ante la autoridad competente cuando el propósito principal no sea obtener beneficios del tratado. En la práctica, la LOB obliga a evaluar la cadena de tenencia, la condición de listado bursátil, la composición de beneficiarios y la dirección de pagos intragrupo. Su función es filtrar estructuras oportunistas y asegurar que los beneficios fluyan a quienes tienen una vinculación económica real con los Estados parte, reduciendo riesgos de arbitraje.",
                },

                /* Acordeones (texto tipo párrafo largo) */
                {
                  type: "accordion",
                  header: "Implicaciones operativas para contribuyentes",
                  open: false,
                  text: "Implementar el tratado exige un enfoque de compliance integral. Primero, mapear operaciones transfronterizas y clasificar rentas por artículo aplicable; segundo, acreditar residencia fiscal y beneficiario efectivo con documentación vigente; tercero, evaluar si la entidad califica por LOB, ya sea por listado bursátil, naturaleza sin fines de lucro o pruebas de propiedad y erogaciones; cuarto, alinear políticas de precios de transferencia con la atribución de utilidades al establecimiento permanente y con ajustes correlativos posibles; quinto, calendarizar certificados y formularios para retenciones preferenciales desde la fuente. En estructuras financieras, conviene vigilar thin capitalization e intereses no deducibles por reglas domésticas, pues pueden neutralizar ventajas convencionales. Para grupos con presencia logística, la regla exclusiva de transporte internacional demanda consistencia entre contratos de fletamento, control operativo y asunción de riesgos. Finalmente, cuando surjan controversias, activar pronto el procedimiento amistoso mejora la probabilidad de ajustes espejo y evita una doble imposición económica persistente. Un expediente ordenado y narrativas funcionales coherentes suelen ser tan decisivos como los porcentajes nominales de retención.",
                },
                {
                  type: "accordion",
                  header: "Errores comunes y buenas prácticas",
                  open: false,
                  text: "Entre los tropiezos habituales destacan: asumir tasas preferenciales sin verificar la LOB; tratar a una entidad vehículo como beneficiario efectivo cuando solo es un conduit; omitir pruebas funcionales que soporten la atribución de utilidades al EP; o confundir el alcance de la retención aplicable a intereses híbridos o dividendos extraordinarios. Las buenas prácticas incluyen: (i) due diligence previo de la cadena de propiedad y flujos; (ii) contratos alineados con la operación real y con matrices de funciones, activos y riesgos; (iii) políticas de TP con comparables pertinentes y documentación lista para auditoría; (iv) sincronizar cierres contables y fiscales en ambas jurisdicciones; (v) repositorios documentales con certificados de residencia, formularios y opiniones legales. Un enfoque preventivo reduce la litigiosidad, estabiliza costos fiscales y, sobre todo, protege la reputación de cumplimiento—un activo relevante cuando se negocian resoluciones anticipadas, se solicita asistencia mutua o se participa en mesas de procedimiento amistoso.",
                },
              ],
            },
            {
              id: "1.3.2",
              numbering: "2.6.1.1",
              title: "Modelos OCDE y ONU sobre doble tributación",
              content: [
                {
                  type: "paragraph",
                  text: "Los modelos de convenio de la OCDE y de la ONU son referentes técnicos que orientan la celebración e interpretación de tratados bilaterales para eliminar la doble imposición y prevenir la evasión fiscal. En términos institucionales, la OCDE persigue—entre otros fines—promover crecimiento, empleo y comercio sobre bases multilaterales no discriminatorias, lo que explica su interés en estándares tributarios comparables y en mecanismos de cooperación. México se adhirió formalmente a la Convención de la OCDE en 1994, con aprobación del Senado y publicación en el Diario Oficial de la Federación; ese paso integró al país en circuitos de diálogo técnico y mejores prácticas internacionales. Aunque el Modelo OCDE no es jurídicamente autoaplicable, su Comentario funciona como guía de interpretación en la práctica administrativa y jurisprudencial, aportando definiciones y soluciones a controversias comunes (beneficiario efectivo, establecimiento permanente, métodos para eliminar la doble imposición). El Modelo ONU, por su parte, se plantea con mayor sensibilidad a necesidades de países en desarrollo, reforzando la potestad de la fuente en ciertas rentas. La coexistencia de ambos modelos permite calibrar el balance residencia–fuente según la realidad económica de cada par de Estados, manteniendo un lenguaje técnico convergente y una estructura de artículos ampliamente reconocible entre tratados.",
                },
                {
                  type: "paragraph",
                  text: "En México, la relevancia del Modelo OCDE es doble. Por un lado, sirve como parámetro de diseño en la negociación de convenios, ayudando a definir artículos distributivos, cláusulas antiabuso, reglas de procedimiento amistoso y métodos para eliminar la doble imposición (exención o acreditamiento). Por otro, su Comentario se utiliza como criterio interpretativo en sede administrativa cuando el texto del tratado no resuelve de forma expresa un punto controvertido, siempre que sea compatible con la voluntad de las partes. La adhesión mexicana incluyó reservas en distintas materias fiscales—desde precios de transferencia y asistencia administrativa hasta formatos de intercambio automático—lo que subraya que la adopción de estándares internacionales va acompañada de salvaguardas de política pública. En el trabajo cotidiano, esta convergencia práctica se traduce en lineamientos sobre residencia, establecimiento permanente, empresas asociadas, dividendos, intereses y regalías, y en la consolidación de la LOB o pruebas análogas para blindar contra el treaty shopping. Para contribuyentes y asesores, conocer el alcance de las reservas y del Comentario vigente es clave para planificar estructuras de inversión y para documentar su sustancia económica.",
                },
                {
                  type: "paragraph",
                  text: "Comparativamente, el Modelo OCDE privilegia la imposición en el Estado de residencia en categorías como beneficios empresariales (salvo EP) y transporte internacional, con límites a retenciones en la fuente para rentas pasivas. El Modelo ONU conserva esa lógica de base, pero refuerza la potestad de la fuente en artículos particulares, ampliando la capacidad de los países en desarrollo para gravar ciertas rentas generadas en su territorio. En dividendos e intereses, ambos modelos prevén retenciones con techos diferenciados, aunque la versión de la ONU es más flexible para ceder mayor margen a la fuente. Las reglas sobre empresas asociadas y precios de transferencia son convergentes en la exigencia de plena competencia y en la apertura al procedimiento amistoso. Para las administraciones tributarias, la coexistencia de modelos brinda opciones para perfilar su red de tratados de acuerdo con prioridades de captación de inversión y protección de su base. Para los contribuyentes, la lectura comparada ayuda a anticipar dónde estará la carga impositiva principal y qué documentación será indispensable para acceder a beneficios y evitar controversias.",
                },
                {
                  type: "paragraph",
                  text: "El proceso de integración de México a la OCDE ilustró la interacción entre compromisos internacionales y control parlamentario interno. Tras la invitación del Consejo de la OCDE, el Ejecutivo presentó la aceptación de obligaciones al Senado, que la aprobó; posteriormente se publicó la promulgación en el Diario Oficial, cumpliendo la Ley sobre Celebración de Tratados. En su declaración de aceptación, México formuló reservas respecto de recomendaciones del Consejo en temas fiscales (determinación de precios de transferencia, asistencia administrativa multilateral, formatos de intercambio automático, doble imposición sobre patrimonio/herencias/donaciones, exámenes tributarios simultáneos y la propia Convención Modelo). Estas reservas no niegan el estándar; indican áreas en que el país adopta gradualmente o con matices los instrumentos recomendados. En la práctica, esto implica que, aunque el Modelo OCDE y su Comentario orientan la interpretación, debe atenderse siempre al texto específico del convenio suscrito por México con cada contraparte y a las reservas y declaraciones interpretativas pertinentes.",
                },
                {
                  type: "paragraph",
                  text: "Para la operación cotidiana, la utilidad de los Modelos radica en su función de ‘idioma común’. Los artículos sobre residencia, establecimiento permanente, empresas asociadas, dividendos, intereses y regalías, métodos para eliminar la doble imposición, no discriminación y procedimiento amistoso ofrecen un guion repetido con variaciones puntuales. El profesional debe identificar esas variaciones—tasas máximas de retención, definiciones ampliadas de EP, salvaguardas antiabuso adicionales—y documentar cómo su estructura satisface los requisitos del convenio aplicable. En auditorías, el Comentario al Modelo OCDE suele ser citado para dirimir ambigüedades, mientras que la orientación del Modelo ONU puede ser decisiva en jurisdicciones que buscan preservar potestad de fuente. Contribuyentes con operaciones regionales deben mapear su red de tratados para evitar cuellos de botella y aprovechar vías de procedimiento amistoso para resolver ajustes correlativos. En suma, dominar los Modelos no es un ejercicio teórico, sino una herramienta de gestión del riesgo fiscal internacional, útil para planear, ejecutar y defender posiciones tributarias en entornos de creciente cooperación administrativa.",
                },

                /* Acordeones (texto tipo párrafo largo) */
                {
                  type: "accordion",
                  header:
                    "Diferencias clave OCDE/ONU aplicadas a casos prácticos",
                  open: false,
                  text: "En un caso de servicios técnicos prestados desde el extranjero, el Modelo OCDE tendería a privilegiar la residencia (salvo EP), limitando la retención en fuente; el Modelo ONU, en cambio, puede admitir una retención específica en la fuente por la naturaleza del servicio, reforzando la potestad del país receptor. En licencias de intangibles, ambos modelos acotan tasas, pero la versión ONU puede permitir techos más altos si el Estado fuente lo negocia. En beneficios empresariales, las definiciones de EP convergen, aunque la negociación inspirada en la ONU podría ampliar supuestos (p. ej., agentes dependientes con umbrales más amplios). Para un exportador que utiliza un depósito en el país destino, estas diferencias pueden ser la frontera entre tener un EP o no. La conclusión operativa es que el análisis no se deriva sólo del ‘modelo de referencia’, sino del texto del convenio concreto—y de sus protocolos—y del contexto económico: funciones, activos y riesgos que revelan sustancia. Documentar el sustento fáctico y jurídico con referencia a comentarios autorizados reduce incertidumbre y fortalece defensas.",
                },
                {
                  type: "accordion",
                  header:
                    "Recomendaciones de cumplimiento y gestión de riesgos",
                  open: false,
                  text: "Primero, partir del tratado vigente entre los países implicados y leer sus protocolos; segundo, contrastar con el Comentario OCDE y, en su caso, con guías ONU para aclarar ambigüedades; tercero, preparar expedientes de beneficiario efectivo y de plena competencia, alineando contratos, contabilidad y operaciones reales; cuarto, calendarizar certificados de residencia y formularios para aplicar retenciones preferenciales; quinto, establecer alertas tempranas para activar el procedimiento amistoso si hay ajustes no correlativos. Cuando existan reservas mexicanas relacionadas con intercambio de información o con precios de transferencia, evaluar el impacto en tiempos y alcance de auditorías. Finalmente, adoptar un enfoque de gobernanza fiscal—políticas, controles y evidencia—convierte el tratado en una ventaja competitiva sostenible y no en un alivio transitorio sujeto a riesgos de recaracterización.",
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
          href: "", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Normas APA (7.ª edición) — Guía en PDF https://normas-apa.org/wp-content/uploads/Guia-Normas-APA-7ma-edicion.pdf",
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
            "De la Garza, S. F. (1992). Derecho financiero mexicano. México: Porrúa.",
            "Fedele, A. «La reserva de ley».",
            "Convenio entre el Gobierno de los Estados Unidos Mexicanos y el Gobierno de los Estados Unidos de América para evitar la doble imposición e impedir la evasión fiscal en materia de impuestos sobre la renta.",
            "Secretaría de Relaciones Exteriores (SRE) – Dirección General de Cooperación y Relaciones Económicas Bilaterales: https://directorio.sre.gob.mx/index.php/oficinas-centrales/direccion-general-de-cooperacion-y-relaciones-economicas-bilaterales",
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
