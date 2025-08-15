/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "maestria-impuestos",
  courseId: "impuestos-internacionales",
  id: "modulo2",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Impuestos Internacionales",
  title: "Módulo 2. Convenios impositivos para evitar la doble tributación",
  semestre: "4° semestre",
  teacher: "Mtra. Eloisa Barrientos Landa",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Identificar el origen de los convenios impositivos para evitar la doble tributación; analizar y comprender la evolución del derecho tributario; y estudiar los mecanismos implementados ante el cambiante mundo de los negocios.",
  competencies: [
    "Actitudinales: perseverancia, responsabilidad y ética en el análisis fiscal.",
    "Instrumentales: comunicación eficaz, planificación y manejo de información jurídica.",
    "Cognitivas: comprensión y análisis de marcos nacionales e internacionales en materia tributaria.",
    "Habilidades: aprendizaje autónomo y trabajo con evidencias normativas y jurisprudenciales.",
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
      title: "Convenios impositivos para evitar la doble tributación",
      content: [
        {
          type: "paragraph",
          text: "Los convenios para evitar la doble tributación (CDI) surgen como respuesta a un problema clásico del comercio y la inversión transfronterizos: el mismo ingreso puede ser gravado por el país fuente y por el país de residencia. La solución se fue fraguando a lo largo del siglo XX: desde los trabajos de la Sociedad de las Naciones (1921–1933), las conferencias tributarias regionales (México, 1940 y 1943), y, más adelante, la labor sistemática de la OCDE (desde 1955) y la ONU (modelo de 1980), que cristalizaron en modelos de convenio con reglas distributivas y métodos para eliminar la doble imposición. Un CDI no elimina impuestos, sino que coordina jurisdicciones, asigna potestades y establece procedimientos de cooperación entre administraciones. En la práctica, esa coordinación otorga certidumbre jurídica, reduce litigios, desincentiva la planificación agresiva y facilita flujos de capital, bienes, servicios, tecnología y talento. Esta unidad ofrece un mapa de ruta para comprender antecedentes, marco jurídico, sujetos/objeto/base/tasas, y la anatomía de un tratado, con foco en su aplicación en México.",
        },
        {
          type: "paragraph",
          text: "El marco jurídico que sostiene a los CDI tiene dos planos. En el interno, rige la Constitución Política de los Estados Unidos Mexicanos; el Presidente, con aprobación del Senado, celebra y aprueba tratados, que se publican en el Diario Oficial y adquieren obligatoriedad. La Ley sobre la Celebración de Tratados regula facultades y formalidades, incluidos plenos poderes y acuerdos interinstitucionales. La Suprema Corte ha perfilado la jerarquía normativa: los tratados se sitúan por debajo de la Constitución y por encima de leyes federales y locales, obligando a todas las autoridades. En el plano externo, la Convención de Viena sobre el Derecho de los Tratados fija reglas sobre celebración, entrada en vigor, cumplimiento (pacta sunt servanda), interpretación y solución de controversias entre Estados. Para el contribuyente, esto se traduce en derechos y límites: puede invocar beneficios del CDI si acredita residencia y cumplimiento de requisitos, y la autoridad debe aplicar el convenio conforme a sus procedimientos y al principio de buena fe.",
        },
        {
          type: "paragraph",
          text: "Comprender la estructura de un CDI facilita su uso práctico. Típicamente, el Capítulo I delimita personas a las que aplica (residentes) e impuestos cubiertos. El Capítulo II define términos clave: “residente”, “establecimiento permanente”, entre otros. El Capítulo III contiene las reglas distributivas por tipo de renta (inmuebles, beneficios empresariales, navegación internacional, empresas asociadas/precios de transferencia, dividendos, intereses, regalías, ganancias de capital, trabajo dependiente e independiente, funciones directivas, artistas y deportistas, pensiones, función pública, estudiantes, otros ingresos). El Capítulo IV aborda el patrimonio (cuando aplica). El Capítulo V establece los métodos para eliminar la doble imposición: exención (23A) y crédito (23B). El Capítulo VI incorpora no discriminación, procedimiento amistoso (MAP), intercambio de información y asistencia en cobro. Por último, el Capítulo VII regula entrada en vigor y terminación. Esta “anatomía” permite localizar rápidamente qué Estado puede gravar y en qué medida, y cómo se evita la doble imposición.",
        },
        {
          type: "paragraph",
          text: "Desde la perspectiva tributaria, la obligación se configura por sujetos, objeto, base y tasa. El Estado (sujeto activo) exige a los contribuyentes (sujetos pasivos) prestaciones pecuniarias cuando se actualiza un hecho generador (por ejemplo, obtener renta en un territorio). Las obligaciones pueden ser sustantivas (pagar) o formales (inscribirse, llevar contabilidad, emitir CFDI, presentar declaraciones, efectuar retenciones, etc.). En un contexto internacional, el CDI delimita quién es “residente”, cuándo existe un establecimiento permanente, qué fuente se reconoce y cómo se calcula la base imponible para cada categoría de renta, además de fijar límites de tasa en el Estado fuente (p. ej., topes a retenciones en dividendos, intereses o regalías). Así, el CDI actúa como “filtro” que, aplicado antes de la ley doméstica, orienta la determinación de la obligación y la coordinación entre administraciones, asegurando que el ingreso no sea gravado dos veces más allá de lo previsto por el propio tratado.",
        },
        {
          type: "paragraph",
          text: "La interpretación y la solución de controversias son el “cinturón de seguridad” de los CDI. La Convención de Viena (arts. 31 y 32) ordena interpretar de buena fe, conforme al sentido corriente de los términos, en su contexto y atendiendo a objeto y fin; prevé apoyos complementarios (trabajos preparatorios) cuando exista ambigüedad. Puede haber interpretación auténtica (acuerdos ulteriores entre las Partes), judicial o unilateral (sin efectos para la otra Parte). En el terreno operativo, el Procedimiento de Acuerdo Mutuo (MAP) permite a un contribuyente acudir a la autoridad competente de su Estado de residencia para resolver casos de imposición no conforme al CDI; las autoridades buscan un arreglo amistoso, incluso con arbitraje cuando así lo estipule el tratado y lo acepten las Partes. Estos mecanismos, junto con el intercambio de información y la asistencia recíproca, sostienen la efectividad del CDI y fomentan certeza, cooperación y cumplimiento tributario.",
        },

        /* ── Acordeones (texto en formato de párrafo) ── */
        {
          type: "accordion",
          header: "Antecedentes y propósito de los CDI",
          open: false,
          text: "Los CDI son el resultado de un siglo de concertación internacional para evitar que un mismo ingreso sea gravado en dos jurisdicciones de forma no coordinada. Desde los estudios de la Sociedad de las Naciones en la década de 1920, pasando por conferencias regionales en América y la creación de modelos por la OCDE y la ONU, se consolidó un lenguaje común: categorías de renta, criterios de nexo (residencia/fuente/establecimiento permanente), métodos de eliminación de la doble imposición y cooperación administrativa. Su propósito no es “perdonar impuestos”, sino repartir potestades tributarias, acotar retenciones en fuente, prevenir conflictos y dar certidumbre a inversiones y comercio. En la operación diaria, un CDI se invoca cuando el contribuyente acredita residencia y cumple requisitos del tratado; la autoridad, por su parte, debe aplicar el texto de buena fe y conforme a su objeto y fin, utilizando los canales de asistencia e interpretación previstos.",
        },
        {
          type: "accordion",
          header: "Jerarquía normativa y aplicación en México",
          open: false,
          text: "En México, los tratados ocupan un rango inmediatamente inferior a la Constitución y superior a leyes federales y locales, de modo que vinculan a todas las autoridades una vez publicados en el Diario Oficial. El Presidente dirige la política exterior y celebra tratados; el Senado los aprueba. La Ley sobre la Celebración de Tratados detalla formalidades (plenos poderes, acuerdos interinstitucionales) y asegura trazabilidad jurídica. Hacia afuera, la Convención de Viena rige la celebración, la entrada en vigor, el cumplimiento y la interpretación de los tratados, incluyendo el principio pacta sunt servanda. Cuando un CDI limita la potestad de gravar del Estado fuente o impone un tope de retención, esa regla prevalece frente a la ley interna, siempre que el contribuyente cumpla las condiciones del propio CDI. La coordinación se materializa en figuras como el “procedimiento amistoso”, el intercambio de información y, en su caso, el arbitraje, que evitan la doble imposición no deseada.",
        },
        {
          type: "accordion",
          header: "Cómo leer la estructura de un CDI",
          open: false,
          text: "Un CDI típico inicia delimitando su alcance personal (residentes) y material (impuestos cubiertos). Continúa con definiciones que sirven de “diccionario” (residente, establecimiento permanente, empresa asociada). Luego, el corazón del tratado: reglas distributivas por tipo de ingreso (inmuebles, beneficios empresariales, dividendos, intereses, regalías, trabajo dependiente/independiente, etc.), que responden dos preguntas: ¿qué Estado puede gravar y con qué límites? y ¿cómo se evita la doble imposición en el Estado de residencia (exención o crédito)? Las disposiciones especiales añaden no discriminación, procedimiento amistoso, intercambio de información y asistencia en cobro. Cierra con reglas de entrada en vigor y terminación. En la práctica, el lector localiza el artículo aplicable al flujo específico, verifica definiciones, revisa si hay límites de tasa y, finalmente, aplica el método de eliminación de la doble imposición en residencia, dejando evidencia documental de la correcta aplicación.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "1.1",
          numbering: "2.1",
          title: "Antecedentes de los modelos de tributación",
          content: [
            {
              type: "paragraph",
              text: "Los convenios para evitar la doble tributación surgen como respuesta a un problema práctico: un mismo ingreso podía ser gravado en más de un país, desincentivando la inversión y entorpeciendo el comercio. Ya desde la Sociedad de las Naciones se impulsaron trabajos para establecer criterios comunes y, sobre todo, pautas de reparto de potestades tributarias entre Estados de residencia y de la fuente. Este impulso inicial cristalizó en proyectos de convenios bilaterales y en líneas de cooperación que más tarde retomaron organizaciones regionales y universales. Así se asentó la idea de que la doble tributación debía eliminarse mediante reglas distributivas claras y mecanismos de cooperación administrativa, sentando las bases de los modelos que hoy conocemos. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "En 1921, un grupo de expertos convocado por la Sociedad de las Naciones estudió por primera vez, de manera sistemática, los aspectos económicos de la doble tributación. A esa labor siguió, en 1922, un grupo de funcionarios fiscales que abordó las aristas administrativas y prácticas del fenómeno y, entre 1923 y 1927, se redactaron convenios bilaterales en materia de impuestos sobre la renta, la propiedad, sucesiones y asistencia administrativa y judicial. Estos primeros instrumentos trazaron la arquitectura conceptual: definición de residentes, de establecimientos permanentes y de categorías de renta, además de prever intercambios de información entre administraciones tributarias. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "Durante los años treinta y cuarenta del siglo XX, el trabajo técnico se profundizó. La Reunión General de Expertos Gubernamentales de 1929 propició la creación de un Comité Fiscal permanente que abordó cómo imputar los ingresos de empresas que operaban en varios países, esbozando un esquema para distribuir las rentas entre Estados involucrados. Más tarde, conferencias regionales (México 1940 y 1943) aprobaron modelos bilaterales de convenios sobre renta y sucesiones, y sobre asistencia en la cobranza. El hilo conductor fue pasar de soluciones ad hoc a fórmulas replicables, compatibles con los sistemas tributarios domésticos y con el principio de seguridad jurídica para contribuyentes y autoridades. :contentReference[oaicite:2]{index=2}",
            },

            /* Imagen intercalada (ilustrativa) */
            {
              type: "image",
              src: "https://0701.static.prezi.com/preview/v2/svckbvqnx7wn4rzlowvvqbb3ll6jc3sachvcdoaizecfr3dnitcq_3_0.png",
              alt: "Línea de tiempo: Sociedad de las Naciones → OCDE/ONU → Modelos contemporáneos",
              caption:
                "Evolución histórica de los modelos de doble tributación.",
            },

            {
              type: "paragraph",
              text: "Tras la Segunda Guerra Mundial, la labor se desplazó hacia la Organización de Cooperación Económica Europea, que en 1955 emitió su primera recomendación sobre doble tributación y, en 1956, creó su Comité Fiscal. Con la transformación de la OCEE en OCDE (1961), se abrió el camino para el conocido Modelo de Convenio de la OCDE, cuyo primer texto relevante en materia de patrimonios y herencias se difundió en 1966 y cuyo modelo de renta se consolidó en 1977 (con actualizaciones sucesivas). Paralelamente, la ONU publicó en 1980 su propio Modelo, pensado para equilibrar intereses de países desarrollados y en desarrollo en el reparto de potestades. :contentReference[oaicite:3]{index=3}",
            },
            {
              type: "paragraph",
              text: "En América Latina, se dieron esfuerzos complementarios. La ALALC (hoy ALADI) aprobó en 1976 criterios para evitar la doble tributación entre países de la región; y a nivel andino se elaboró en 1971 un modelo subregional. Estas iniciativas apuntalaron la difusión de estándares, adaptados a realidades productivas y administrativas distintas, pero convergentes en su propósito: evitar gravámenes múltiples sobre una misma renta, brindar certeza al inversor y facilitar el intercambio de información y la asistencia mutua entre administraciones tributarias. Así, la experiencia comparada fue afinando definiciones, cláusulas antiabuso y procedimientos amistosos. :contentReference[oaicite:4]{index=4}",
            },
            {
              type: "paragraph",
              text: "La madurez del régimen se refleja en dos pilares: (1) reglas distributivas detalladas para cada categoría de renta (inmuebles, beneficios empresariales, transporte internacional, dividendos, intereses, regalías, ganancias de capital, trabajo dependiente e independiente, entre otras) y (2) mecanismos para eliminar la doble imposición (métodos de exención o de crédito) y resolver controversias mediante el procedimiento de acuerdo mutuo (y, en ciertos casos, arbitraje). De este modo, los modelos OCDE y ONU se convirtieron en referentes para la negociación de tratados bilaterales, siempre sujetos a adaptación por cada par de Estados contratantes. :contentReference[oaicite:5]{index=5}",
            },

            /* Acordeones con texto en párrafos */
            {
              type: "accordion",
              header: "De los primeros estudios a los modelos de referencia",
              open: false,
              text: "Los estudios de 1921 a 1927 de la Sociedad de las Naciones no sólo diagnosticaron el problema económico de la doble tributación: también bosquejaron soluciones institucionales que hoy consideramos ‘clásicas’. La introducción de definiciones comunes (residente, establecimiento permanente) y la clasificación de rentas permitió asignar, con criterio, potestades a fuente y residencia. La posterior labor de la OCEE/OCDE sistematizó estas innovaciones en un texto-modelo de alcance global que, si bien fue pensado sobre todo para países de altos ingresos, estableció una gramática tributaria internacional que incluso la ONU, con su modelo de 1980, ajustó para atender preocupaciones de países en desarrollo. :contentReference[oaicite:6]{index=6}",
            },
            {
              type: "accordion",
              header: "El componente regional latinoamericano",
              open: false,
              text: "La región latinoamericana no fue un mero receptáculo de soluciones externas. La ALALC, en 1976, aprobó criterios para evitar la doble tributación, y el Grupo Andino elaboró en 1971 una convención modelo. Estas iniciativas respondieron a realidades de integración económica incipiente, estructuras productivas heterogéneas y administraciones tributarias en proceso de profesionalización. El resultado fue una hibridación útil: se incorporaron principios OCDE/ONU, pero se flexibilizaron ciertos artículos para proteger bases tributarias y facilitar la recaudación en países con mayores desafíos de cumplimiento. Este sustrato regional continúa influyendo en los textos bilaterales que los países de América Latina negocian hasta hoy. :contentReference[oaicite:7]{index=7}",
            },
          ],
        },

        {
          id: "1.2",
          numbering: "2.2",
          title:
            "Ámbito jurídico interno y externo de los instrumentos internacionales",
          content: [
            {
              type: "paragraph",
              text: "La eficacia de un convenio para evitar la doble tributación depende de dos planos normativos: el interno (constitución, leyes y procedimientos nacionales) y el externo (derecho internacional de los tratados). En México, la Constitución es la norma suprema; los tratados se ubican inmediatamente por debajo de ella y por encima del derecho federal y local, criterio que la Suprema Corte ha sostenido con base en el carácter estatal de los compromisos internacionales y la participación del Senado en su aprobación. Este escalonamiento garantiza que, una vez promulgado en el Diario Oficial, el convenio obligue a todas las autoridades. :contentReference[oaicite:8]{index=8}",
            },
            {
              type: "paragraph",
              text: "Para la celebración de tratados, la Constitución faculta al Presidente a dirigir la política exterior y suscribirlos, con aprobación del Senado. Complementariamente, la Ley sobre la Celebración de Tratados (LSCT) regula el procedimiento, incluyendo la posibilidad de otorgar plenos poderes a personas para representar al Estado en actos relativos a su celebración. Aunque la doctrina discute la delegabilidad de esa facultad, en la práctica, una vez cumplidos los requisitos constitucionales y legales, el convenio se publica y entra en vigor con fuerza obligatoria interna. Desde entonces, su aplicación es selectiva: sólo a residentes de los Estados contratantes que acrediten estar dentro de sus supuestos. :contentReference[oaicite:9]{index=9}",
            },
            {
              type: "paragraph",
              text: "En el plano internacional, la Convención de Viena sobre el Derecho de los Tratados establece principios cardinales: pacta sunt servanda, buena fe y reglas de interpretación (artículos 31 y 32). Además, delimita quiénes son los sujetos vinculados por un tratado y cómo se perfecciona su vida jurídica (conclusión, entrada en vigor, observancia, modificación y terminación). Para controversias, coexisten el Procedimiento de Acuerdo Mutuo (PAM) y, si las partes y los contribuyentes lo aceptan, el arbitraje, cuya decisión resulta obligatoria. Estos canales evitan que las diferencias de interpretación socaven el objetivo del convenio: impedir la doble imposición sin crear no imposición. :contentReference[oaicite:10]{index=10}",
            },

            /* Imagen intercalada (ilustrativa) */
            {
              type: "image",
              src: "https://imgv2-2-f.scribdassets.com/img/document/865289996/original/9a54806e58/1?v=1",
              alt: "Esquema de jerarquía normativa: Constitución, Tratados, leyes federales y locales",
              caption:
                "Jerarquía normativa y ámbitos de validez en la aplicación de convenios.",
            },

            {
              type: "paragraph",
              text: "La coordinación entre los dos planos exige directrices claras: cuando un convenio resulta aplicable, desplaza las normas internas incompatibles en lo que atañe a su materia, por su jerarquía. No obstante, subsisten obligaciones formales domésticas (por ejemplo, acreditar residencia o beneficiario efectivo) y límites de alcance (el tratado no confiere derechos a terceros Estados ni a contribuyentes que no cumplan sus condiciones). En la práctica, la autoridad mexicana aplica el convenio sólo si el contribuyente demuestra ser residente del otro Estado contratante, y, a la inversa, cuando México es Estado de la fuente, se ajusta a las tasas o exenciones pactadas. :contentReference[oaicite:11]{index=11}",
            },
            {
              type: "paragraph",
              text: "Las reglas de interpretación de la Convención de Viena privilegian el sentido corriente de los términos del tratado, su contexto (incluyendo preámbulo y anexos), su objeto y fin, así como los acuerdos y prácticas ulteriores entre las partes. Esta metodología reduce ambigüedades, favorece la coherencia y desincentiva interpretaciones unilaterales extensivas. A su vez, el PAM actúa como válvula técnica y diplomática para resolver casos concretos donde, por ejemplo, ambos Estados pretenden gravar una misma renta, o divergen en la calificación de un establecimiento permanente o de un beneficiario efectivo. :contentReference[oaicite:12]{index=12}",
            },
            {
              type: "paragraph",
              text: "Finalmente, el andamiaje institucional se completa con la cooperación administrativa (intercambio de información, asistencia en recaudación) y con la disciplina de publicación y entrada en vigor. Un convenio vigente genera expectativas legítimas para los contribuyentes y previsibilidad para la inversión. No obstante, su aplicación exige gobernanza documental (certificados de residencia, pruebas de cumplimiento) y claridad en la interacción entre autoridades. La práctica muestra que donde hay lineamientos internos sólidos y canales eficaces con la contraparte, la eliminación de la doble tributación se logra con menores costos de cumplimiento y litigio. :contentReference[oaicite:13]{index=13}",
            },

            /* Acordeones con texto en párrafos */
            {
              type: "accordion",
              header:
                "Plano interno: publicación, jerarquía y aplicación selectiva",
              open: false,
              text: "Publicar el convenio en el Diario Oficial de la Federación es clave para su exigibilidad; desde ese momento, su jerarquía lo sitúa por debajo de la Constitución y por encima de la legislación federal y local. La aplicación es selectiva: alcanza a residentes de los Estados contratantes y a los supuestos previstos. Si no concurren, rige el derecho interno. Así se evita extender beneficios convencionales a sujetos o situaciones no contemplados, preservando la integridad del sistema tributario nacional. La LSCT, por su parte, ordena el proceso de celebración y la emisión de plenos poderes, dotando de validez a los actos internacionales del Ejecutivo con control del Senado. :contentReference[oaicite:14]{index=14}",
            },
            {
              type: "accordion",
              header: "Plano externo: Convención de Viena, PAM y arbitraje",
              open: false,
              text: "La Convención de Viena consagra los principios que gobiernan la vida de los tratados y las reglas de interpretación, priorizando el texto, el contexto y el objetivo del instrumento. En materia fiscal, el Procedimiento de Acuerdo Mutuo es la primera vía para resolver fricciones de aplicación; y, cuando existe previsión y consentimiento, el arbitraje ofrece una salida vinculante. Estas herramientas preservan la finalidad del convenio: eliminar la doble imposición sin abrir espacios a la no imposición o al abuso. Asimismo, los artículos de cooperación administrativa facilitan el intercambio de información y la asistencia en la recaudación, reforzando la efectividad del instrumento. :contentReference[oaicite:15]{index=15}",
            },
          ],

          /* → Sub-subtemas (profundidad 2) */
          subthemes: [
            {
              id: "1.2.1",
              numbering: "2.2.1",
              title: "Ley sobre la celebración de tratados",
              content: [
                {
                  type: "paragraph",
                  text: "La Ley sobre la Celebración de Tratados (LSCT), publicada el 2 de enero de 1992, reglamenta los artículos 76, fracción I, y 133 de la Constitución. Su objeto es ordenar la celebración de tratados y acuerdos interinstitucionales, incorporando la figura de plenos poderes para que representantes designados actúen a nombre del Estado en actos relativos a los acuerdos. La ley también previó disposiciones sobre mecanismos internacionales de solución de controversias, reflejando la práctica de la época de grandes acuerdos comerciales como el TLCAN. Aunque la doctrina debate la delegabilidad de facultades presidenciales, la LSCT recoge y formaliza la práctica mexicana consolidando seguridad jurídica. :contentReference[oaicite:16]{index=16}",
                },
                {
                  type: "paragraph",
                  text: "La LSCT convive con la CPEUM y con la Convención de Viena: el Ejecutivo negocia y firma; el Senado aprueba; y, tras la promulgación y publicación, el tratado entra en vigor en el plano interno. A partir de ese momento, el convenio se integra al bloque de constitucionalidad lato sensu por su jerarquía superior a leyes federales y locales, exigiendo a las autoridades su observancia. Desde la perspectiva tributaria, esta ruta asegura que los beneficios y limitaciones acordados internacionalmente —tasas reducidas en dividendos, intereses o regalías; definiciones de establecimiento permanente; métodos para eliminar la doble imposición— tengan plena eficacia frente a actos de aplicación doméstica. :contentReference[oaicite:17]{index=17}",
                },

                /* Imagen intermedia (opcional) */
                {
                  type: "image",
                  src: "https://cdn-3.expansion.mx/dims4/default/c65a1c4/2147483647/strip/true/crop/362x217+0+0/resize/1200x719!/format/webp/quality/60/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fmedia%2F2011%2F11%2F22%2Fmexico-centroamerica-tlc-unico.jpg",
                  alt: "Flujo simplificado de celebración de tratados conforme a la LSCT",
                  caption:
                    "Negociación, firma, aprobación senatorial, promulgación y publicación.",
                },

                {
                  type: "accordion",
                  header: "Contenido esencial y práctica administrativa",
                  open: false,
                  text: "La LSCT compila once artículos y un transitorio que despejan dudas procedimentales: define qué es ‘tratado’ en el orden mexicano, distingue acuerdos interinstitucionales y autoriza el otorgamiento de plenos poderes. En la práctica, esta precisión reduce riesgos de nulidad, homologa expedientes y permite a la Secretaría de Relaciones Exteriores coordinar técnica y jurídicamente la tramitación. En materia fiscal, esa claridad habilita una negociación más ágil de convenios tributarios y un control parlamentario transparente sobre su contenido y compromisos. :contentReference[oaicite:18]{index=18}",
                },
                {
                  type: "accordion",
                  header: "Debate doctrinal sobre delegabilidad",
                  open: false,
                  text: "Parte de la doctrina cuestiona si la conducción de la política exterior y la firma de tratados son delegables. La LSCT admite plenos poderes, práctica común en derecho internacional público. El contrapeso está en el Senado, cuyo control político y jurídico robustece la legitimidad del instrumento y su conformidad con la Constitución. En la experiencia mexicana, los convenios fiscales han superado con regularidad ese doble tamiz, asegurando su aplicabilidad interna y su eficacia externa, sin perjuicio de que la interpretación final se rija por la Convención de Viena y, de ser necesario, por los mecanismos amistosos o arbitrales previstos en los propios convenios. :contentReference[oaicite:19]{index=19}",
                },
              ],
            },
            {
              id: "1.2.2",
              numbering: "2.2.2",
              title: "Decreto de promulgación de la Convención de Viena",
              content: [
                {
                  type: "paragraph",
                  text: "La Convención de Viena sobre el Derecho de los Tratados (1969) define el ‘tratado’ como un acuerdo internacional celebrado por escrito entre Estados y regido por el derecho internacional, cualquiera sea su denominación y estructura documental. Entraña la obligación de cumplirlos de buena fe (pacta sunt servanda) y codifica reglas de interpretación (artículos 31 y 32). Existe, además, la Convención de 1986 para tratados entre Estados y organizaciones internacionales; aunque no ha entrado en vigor, México la ratificó en 1988 y sus principios inspiran la práctica. En conjunto, ambas guían cómo nacen, se aplican y se terminan los tratados. :contentReference[oaicite:20]{index=20}",
                },
                {
                  type: "paragraph",
                  text: "En México, la celebración de tratados se rige por la CPEUM, la LSCT y la propia Convención de Viena. La LSCT (art. 2) precisa que ‘tratado’ es el convenio, regido por derecho internacional público, entre el Gobierno de México y sujetos de ese derecho mediante el cual se asumen compromisos. La práctica mexicana considera tratados, entre otros, los instrumentos que: versan sobre materias del artículo 73 constitucional; comprometen al Estado en su conjunto; afectan la esfera jurídica de particulares; amplían o modifican legislación; o generan obligaciones financieras relevantes. Estas pautas operativas evitan confusiones entre actos políticos o administrativos y tratados en sentido estricto. :contentReference[oaicite:21]{index=21}",
                },

                /* Imagen intermedia (opcional) */
                {
                  type: "image",
                  src: "https://imgv2-2-f.scribdassets.com/img/document/433247450/original/afadb710d2/1?v=1",
                  alt: "Esquema de la Convención de Viena: celebración, interpretación y cumplimiento",
                  caption:
                    "Elementos clave de la Convención de Viena aplicables a convenios tributarios.",
                },

                {
                  type: "accordion",
                  header: "Reglas de interpretación (arts. 31 y 32)",
                  open: false,
                  text: "La interpretación inicia en el texto: palabras según su sentido corriente, leídas en contexto (preámbulo y anexos) y a la luz del objeto y fin. Se consideran, además, acuerdos ulteriores sobre la interpretación, la práctica ulterior concordante y normas pertinentes de derecho internacional. Sólo subsidiariamente se recurre a ‘trabajos preparatorios’ cuando la interpretación según el artículo 31 deja el sentido ambiguo u oscuro. Los tribunales internacionales han reiterado que, si el sentido natural y ordinario de las palabras es claro, no es admisible forzar otro significado. Esta metodología fortalece previsibilidad y reduce espacios de arbitrariedad. :contentReference[oaicite:22]{index=22}",
                },
                {
                  type: "accordion",
                  header: "PAM y arbitraje: solución de controversias",
                  open: false,
                  text: "La Convención de Viena coexiste con mecanismos específicos en los convenios fiscales: el Procedimiento de Acuerdo Mutuo permite a las autoridades competentes resolver, caso por caso, situaciones de doble gravamen no conformes al tratado, sin requerir agotar primero vías internas. Si no hay solución, y cuando el convenio lo prevé y las partes lo consienten, cabe arbitraje; su laudo vincula a ambos Estados. Estos instrumentos, junto con el intercambio de información y la asistencia en recaudación, hacen operativa la promesa del convenio: eliminar la doble tributación y evitar la evasión sin menoscabar la potestad tributaria legítima de cada Estado. :contentReference[oaicite:23]{index=23}",
                },
              ],
            },
            {
              id: "1.2.3",
              numbering: "2.2.3",
              title:
                "Normatividad internacional para la interpretación de los convenios",
              content: [
                {
                  type: "paragraph",
                  text: "La interpretación de los tratados internacionales es una operación intelectual destinada a precisar el sentido y alcance de las cláusulas pactadas por los Estados, despejando ambigüedades y asegurando su aplicación coherente con el objeto y fin del instrumento. El marco de referencia positivo lo establecen los artículos 31 y 32 de la Convención de Viena sobre el Derecho de los Tratados (CVDT), que codifican reglas consuetudinarias aceptadas por la jurisprudencia internacional. Así, el punto de partida es el texto mismo, leído de buena fe, conforme al sentido corriente de sus términos en su contexto y atendiendo a su objeto y fin; el contexto integra el preámbulo y anexos, así como acuerdos e instrumentos vinculados celebrados con motivo del tratado. Complementariamente, la práctica ulterior común de las partes, los acuerdos interpretativos posteriores y las normas pertinentes de Derecho Internacional también informan el análisis. Cuando el tenor literal resulte oscuro o conduzca a un resultado manifiestamente absurdo o irrazonable, procede acudir a medios suplementarios —como los trabajos preparatorios— para confirmar o precisar el sentido. Estas pautas conviven con diversas sedes interpretativas: la interpretación auténtica de los propios Estados parte; la jurisdiccional, emitida por tribunales internacionales cuando existe competencia; y la unilateral, emitida por órganos estatales internos, cuyos efectos se constriñen al orden doméstico. La doctrina especializada influye, aunque carece de fuerza obligatoria. Desde la perspectiva tributaria, estas reglas guían la lectura de definiciones (p. ej., “residente” o “establecimiento permanente”), delimitan las reglas distributivas de potestad y encauzan mecanismos como el Procedimiento Amistoso. Su empleo sistemático permite resolver dudas, evitar conflictos y asegurar que las soluciones sean compatibles con la finalidad anti-doble imposición y anti-evasión que anima a los convenios.",
                },
                {
                  type: "accordion",
                  header: "Claves operativas de los artículos 31 y 32 CVDT",
                  open: false,
                  text: "Aplicar el artículo 31 exige construir el ‘contexto’ más allá del simple artículo en disputa: hay que traer el preámbulo (que suele declarar la finalidad de eliminar la doble imposición sin crear oportunidades de no imposición), anexos y protocolos, y cualquier acuerdo ulterior de las partes que aclare cómo han entendido y aplicado la cláusula con el paso del tiempo. El artículo 32 abre la puerta a medios suplementarios —trabajos preparatorios, circunstancias de la celebración— para corroborar la interpretación o resolver oscuridades. En materia fiscal, esto permite armonizar la letra del convenio con Comentarios de Modelos (OCDE/ONU), sin que estos sustituyan la voluntad de las partes.",
                },
                {
                  type: "paragraph",
                  text: "En la práctica, los operadores deben priorizar la coherencia teleológica: si una lectura literal conduce a un tratamiento que reinstala la doble imposición que el tratado quiso remover, o que facilita la evasión o elusión abusiva, corresponde preferir una interpretación conforme a la finalidad. Ejemplos típicos se presentan al aplicar cláusulas de ‘beneficiario efectivo’, al dilucidar si existe o no ‘establecimiento permanente’ en operaciones desmaterializadas, o al encuadrar pagos complejos (p. ej., licencias mixtas) en artículos sobre regalías o beneficios empresariales. La interpretación auténtica —materializada en acuerdos mutuos entre autoridades competentes— ayuda a uniformar criterios y reducir litigios, mientras que la jurisprudencia comparada y la práctica ulterior documentada orientan decisiones administrativas. Esta aproximación gradual, que comienza por el texto y se enriquece con el contexto, la finalidad y los medios suplementarios, habilita soluciones previsibles y respetuosas del equilibrio pactado entre Estado fuente y Estado de residencia.",
                },
                {
                  type: "accordion",
                  header: "Sedes interpretativas y efectos jurídicos",
                  open: false,
                  text: "La interpretación auténtica (acuerdo entre todas las partes) produce efectos erga omnes respecto del tratado; la interpretación jurisdiccional obliga a las partes del litigio en el caso concreto; la interpretación unilateral —por poderes u órganos internos— solo rige en el orden doméstico y no es oponible a otros Estados. La de órganos de organizaciones internacionales opera respecto de sus instrumentos constitutivos o promovidos. La doctrina carece de fuerza obligatoria, pero puede influir en decisiones y acuerdos. En fiscalidad internacional, el Procedimiento Amistoso funciona como sede privilegiada para lograr interpretaciones convergentes y ejecutables.",
                },
                {
                  type: "paragraph",
                  text: "Desde un enfoque metodológico, conviene documentar cada decisión interpretativa: (1) identificar el término y la cláusula; (2) reconstruir el contexto (preámbulo, anexos, protocolos, acuerdos/instrumentos conexos); (3) verificar acuerdos o prácticas ulteriores; (4) considerar normas internacionales pertinentes (p. ej., no discriminación, cooperación administrativa); (5) solo en caso necesario acudir a medios suplementarios; y (6) evaluar la consistencia con el objeto y fin general. Este itinerario favorece transparencia y repetibilidad, reduce incertidumbre para contribuyentes y administraciones y robustece la seguridad jurídica que los convenios prometen. Al cerrarse el círculo con acuerdos amistosos cuando surge controversia, la interpretación deja de ser un ejercicio abstracto y se concreta en soluciones bilaterales aplicables, evitando arbitrajes costosos y consolidando confianza en la red convencional.",
                },
              ],
            },
          ],
        },

        {
          id: "1.3",
          numbering: "2.3",
          title:
            "Sujetos, objeto, base impositiva y tasa en los tratados tributarios",
          content: [
            {
              type: "paragraph",
              text: "En el campo tributario, la obligación fiscal se concibe como el vínculo jurídico por el cual el Estado —sujeto activo— exige al contribuyente —sujeto pasivo— el cumplimiento de prestaciones principalmente pecuniarias. El nacimiento de esa obligación se ancla en el hecho generador: la realización de situaciones previstas en la ley (obtención de renta, posesión de patrimonio, etc.). Junto a la obligación principal (pago del tributo), coexisten obligaciones formales o adjetivas —inscribirse, declarar, llevar contabilidad, expedir comprobantes, efectuar retenciones— que viabilizan la fiscalización y el control. Los tratados tributarios no sustituyen ese andamiaje; lo coordinan: delimitan qué Estado puede gravar cada categoría de renta o patrimonio y en qué medida, creando un sistema de reparto de potestades que evita la doble imposición y, a la vez, acota oportunidades de no imposición. Por ello las definiciones personales y materiales son cruciales: quién es ‘residente’ a efectos del tratado; qué es ‘establecimiento permanente’; qué rentas se entienden procedentes del Estado fuente; y cómo se identifica al ‘beneficiario efectivo’ en flujos transfronterizos.",
            },
            {
              type: "accordion",
              header: "Delimitación de sujeto, objeto y base",
              open: false,
              text: "El ‘sujeto pasivo’ es la persona natural o jurídica respecto de la cual se verifica el hecho imponible; el ‘objeto’ es la manifestación de riqueza gravada (renta, capital, ganancias); la ‘base imponible’ es la cuantificación económica del objeto sobre la que se aplica la tasa. Los tratados, al definir residentes y atribuir potestades (vía reglas distributivas), no fijan tasas en abstracto, pero sí pueden limitarlas para ciertas rentas del no residente (p. ej., topes a retenciones sobre dividendos, intereses o regalías).",
            },
            {
              type: "paragraph",
              text: "La identificación correcta de la base imponible a efectos convencionales exige depurar la renta conforme a las reglas del artículo aplicable (beneficios empresariales, regalías, intereses, etc.) y, en su caso, aplicar limitaciones a la imposición en la fuente. Cuando ambos Estados conservan potestad concurrente (residencia y fuente), el tratado remite a métodos para eliminar la doble tributación: exención o crédito. El primero excluye de la base del Estado de residencia los ingresos gravables en la fuente; el segundo admite gravar en residencia pero reconoce un crédito por el impuesto satisfecho en la fuente, hasta el límite interno. La correcta articulación entre sujeto, objeto, base y tasa, y la elección del método elimino-doble, determinan el gravamen efectivo, por lo que su comprensión es imprescindible para planear inversiones, estructurar operaciones y evaluar riesgos de cumplimiento.",
            },
            {
              type: "accordion",
              header:
                "Obligaciones formales y sustantivas en clave convencional",
              open: false,
              text: "Los tratados no dispensan de cumplir las obligaciones formales internas: inscripción, declaraciones, retenciones, comprobantes. La ‘ventaja’ convencional (p. ej., tasa reducida) requiere acreditar residencia y, en su caso, ‘beneficiario efectivo’. En paralelo, las autoridades aplican cláusulas de cooperación (intercambio de información, asistencia en cobro) y no discriminación, que aseguran trato equitativo y refuerzan la capacidad de control sin sacrificar la finalidad anti-doble imposición.",
            },
            {
              type: "paragraph",
              text: "En suma, ‘quién’ tributa (sujeto), ‘qué’ se grava (objeto), ‘sobre cuánto’ (base) y ‘a qué porcentaje’ (tasa) solo se responden plenamente cuando se leen de forma integrada la ley interna y el tratado aplicable. La taxonomía de sujetos (residentes/no residentes; establecimientos permanentes; beneficiarios efectivos) y la precisión de categorías de renta evitan tanto superposiciones como lagunas. Con ello, los convenios aportan seguridad jurídica, previsibilidad en los costos fiscales y un entorno más propicio para la inversión y el comercio transfronterizo, siempre que se documenten debidamente los supuestos de hecho y se respeten las cargas formales de cada jurisdicción.",
            },
          ],
        },

        {
          id: "1.4",
          numbering: "2.4",
          title: "Estructura de los tratados tributarios",
          content: [
            {
              type: "paragraph",
              text: "Los tratados para evitar la doble tributación, usualmente bilaterales y modelados sobre los textos OCDE/ONU, presentan una arquitectura relativamente uniforme que facilita su comprensión y aplicación. Tras el Capítulo I, que delimita ‘personas’ y ‘impuestos comprendidos’, el Capítulo II fija definiciones esenciales: ‘términos generales’ (art. 3), ‘residente’ (art. 4) y ‘establecimiento permanente’ (art. 5). El corazón operativo se ubica en el Capítulo III, cuyas ‘reglas distributivas’ (arts. 6 a 21) reparten potestades entre Estado de residencia y Estado fuente para categorías de renta: inmuebles, beneficios empresariales, navegación, empresas asociadas (precios de transferencia), dividendos, intereses, regalías, ganancias de capital, servicios profesionales/independientes, empleo, directivos, artistas y deportistas, pensiones, función pública, estudiantes y ‘otros ingresos’. Cada artículo especifica si grava residencia, fuente o ambos, y —cuando corresponda— limita la tasa en la fuente.",
            },
            {
              type: "accordion",
              header:
                "Métodos para eliminar la doble tributación y disposiciones especiales",
              open: false,
              text: "El Capítulo V articula la eliminación de la doble imposición: exención (art. 23A) o crédito (art. 23B). El Capítulo VI incorpora garantías transversales: no discriminación (art. 24), Procedimiento de Acuerdo Mutuo —PAM— (art. 25), intercambio de información (art. 26) y asistencia en cobro (art. 27), además de la salvaguarda de privilegios fiscales diplomáticos (art. 28). Estas piezas aseguran coherencia sistémica, cooperación administrativa y vías de solución de controversias.",
            },
            {
              type: "paragraph",
              text: "El Capítulo VII establece las reglas de ‘entrada en vigor’ y ‘terminación’, cruciales para determinar a partir de qué períodos fiscales produce efectos el tratado y bajo qué condiciones puede denunciarse. En la práctica, muchos textos incluyen protocolos que aclaran o adaptan la redacción modelo a la relación bilateral concreta; esos protocolos tienen igual fuerza y deben leerse integradamente. La arquitectura descrita no es un corsé: admite variaciones (p. ej., cláusulas anti-abuso específicas, artículos sobre servicios técnicos o capital) y coexistencia con otros instrumentos internacionales. Sin embargo, su estabilidad estructural permite a contribuyentes y administraciones navegar de modo previsible por definiciones, reglas distributivas y mecanismos de alivio, reduciendo la litigiosidad y promoviendo la inversión transfronteriza responsable y transparente.",
            },
            {
              type: "accordion",
              header: "Lectura práctica del ‘mapa’ del tratado",
              open: false,
              text: "Para aplicar un tratado con solvencia: (1) verifique que la persona y el impuesto están comprendidos (Cap. I); (2) determine residencia y existencia de EP (Cap. II); (3) identifique el artículo de renta aplicable (Cap. III) y la potestad atribuida a fuente/residencia, incluida cualquier limitación de tasa; (4) si hay imposición concurrente, aplique exención o crédito (Cap. V); (5) use PAM e intercambio de información ante discrepancias (Cap. VI); y (6) confirme vigencia temporal (Cap. VII). Documente cada paso y, si existe protocolo, léalo como parte indisoluble del texto principal.",
            },
            {
              type: "paragraph",
              text: "Desde una óptica de gestión, la estructura típica también facilita el diseño de políticas de cumplimiento y el entrenamiento de equipos: la repetición de capítulos y categorías permite estandarizar procedimientos internos, plantillas de análisis y matrices de decisión. A nivel macro, la convergencia estructural entre modelos OCDE/ONU, con las adaptaciones bilaterales propias, contribuye a la interoperabilidad de redes de tratados, a la reducción de brechas interpretativas y al fortalecimiento de la seguridad jurídica. En última instancia, comprender el ‘esqueleto’ de un tratado no es un ejercicio académico sino una herramienta práctica para asignar correctamente potestades, prevenir conflictos y garantizar que los ingresos transfronterizos soporten una carga fiscal justa, sin doble imposición ni oportunidades artificiosas de no imposición.",
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
            "NORMAS APA (7.ª edición) — Guía rápida en PDF. https://normas-apa.org/wp-content/uploads/Guia-Normas-APA-7ma-edicion.pdf",
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
            "Castañeda, M. (s. f.). Introducción al sistema de tratados de Derechos Humanos de las Naciones Unidas. Fascículo 1. Colección CNDH.",
            "Arnold, B. J. (s. f.). Introducción a los tratados tributarios.",
            "Ríos Granados, G. (s. f.). Manual del derecho fiscal. UNAM.",
            "Bettinger Barrios, H. (s. f.). Estudio práctico sobre los convenios impositivos para evitar la doble tributación. ISEF.",
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
