/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LD", // Licenciatura en Derecho
  courseId: "IED", // Introducción al Estudio del Derecho
  id: "IED-mod1",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Introducción al Estudio del Derecho",
  title:
    "Módulo 1. Función social del Derecho, moral y derecho, tipos y fuentes",
  semestre: "1º (Primero)",
  teacher: "Dr. José Valentín Ramos Fajardo",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Asentar de forma clara y perdurable los conceptos fundamentales de la disciplina jurídica —función social del Derecho, distinción entre Derecho y derechos, tipos de Derecho y fuentes— para cimentar una ‘mente jurídica’ con bases teóricas sólidas que guíen el desempeño académico y profesional del estudiante.",
  competencies: [
    "Comprende y explica la disciplina del Derecho distinguiendo ‘Derecho’ (objetivo) de los ‘derechos’ (subjetivos).",
    "Analiza la función social del Derecho y su relación con la vida en sociedad.",
    "Diferencia moral y Derecho mediante los pares: unilateralidad/bilateralidad, interioridad/exterioridad, incoercibilidad/coercibilidad y autonomía/heteronomía.",
    "Identifica y contrasta los tipos de Derecho: objetivo/subjetivo, vigente/positivo y positivo/natural.",
    "Reconoce las fuentes del Derecho (históricas, reales y formales) y describe con precisión las fases del proceso legislativo como fuente formal principal.",
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

    /* ── Unidad 1 ─ Función social del Derecho ─ */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Función social del Derecho",
      content: [
        {
          type: "paragraph",
          text: "La función social del Derecho parte de un hecho elemental: las personas viven en sociedad porque esa vida compartida multiplica la posibilidad de satisfacer necesidades y reducir riesgos; sin embargo, para que esa convivencia sea posible, se requieren reglas que definan conductas permitidas, prohibidas y obligatorias. El Derecho surge así como un conjunto de normas que brinda orden, estabilidad y certeza, previene conflictos y establece mecanismos para resolverlos con criterios de igualdad, libertad y justicia. Desde esta perspectiva, la vida social es inviable sin un marco jurídico que organice las relaciones entre individuos y grupos, y que otorgue facultades y deberes recíprocos. La disciplina jurídica cumple, por ello, una misión estructurante (da forma al entramado social) y garantista (protege derechos y establece sanciones por incumplimiento). Comprender esta función es condición para formar una “mente jurídica” capaz de leer problemas públicos con lógica normativa, distinguir intereses en juego y decidir con prudencia. En síntesis, el Derecho no solo administra conflictos: es arquitectura de lo común, soporte de la confianza social y lenguaje compartido para coordinar acciones y expectativas en el tiempo. :contentReference[oaicite:0]{index=0}",
        },
        {
          type: "paragraph",
          text: "La relación entre Derecho y sociedad es dinámica y a veces tensa: la sociedad obtiene beneficios de la cooperación (seguridad, servicios, bienes públicos), pero asume límites a deseos y libertades individuales. Las normas jurídicas reflejan ese pacto: habilitan libertades, a la vez que establecen restricciones para proteger a terceros y el interés general. Porque la sociedad cambia (tecnología, hábitos, valores), el Derecho debe adaptarse para salvaguardar bienes emergentes (p. ej., privacidad y datos personales) y actualizar respuestas frente a nuevos riesgos. Un buen Estado de derecho reconoce cauces para reformar las reglas y corregir injusticias, evitando que las normas se vuelvan un instrumento de privilegio o de exclusión. Este equilibrio —estabilidad con posibilidad de cambio— es clave: sin reglas firmes no hay certeza; sin capacidad de revisión no hay justicia viva. De ahí que conocer cómo se crean, interpretan y reforman las normas sea tan importante como memorizar sus contenidos: la función social del Derecho también incluye su plasticidad institucional para acompasar las transformaciones del mundo social. :contentReference[oaicite:1]{index=1}",
        },
        {
          type: "paragraph",
          text: "Otra vertiente esencial es la educativa: el Derecho enseña valores y conductas compartidas. Al hacer explícitos los derechos y obligaciones, orienta decisiones cotidianas y modela expectativas recíprocas. Educar en legalidad no significa solo conocer artículos y sanciones; implica entender razones de las normas, principios que las inspiran y vías institucionales para su defensa y modificación. Esta alfabetización jurídica fortalece la cohesión social porque reduce la arbitrariedad, mejora la previsibilidad de la interacción y promueve una cultura de respeto y responsabilidad. En sociedades complejas, la mediación profesional de juristas es decisiva: traducen el lenguaje técnico, acompañan el ejercicio de derechos y ayudan a que las reglas se apliquen con proporcionalidad. En suma, el Derecho socializa, previene conflictos, canaliza desacuerdos y, al mismo tiempo, educa; por eso, conocerlo es indispensable para la ciudadanía crítica y para el desempeño profesional en cualquier campo vinculado con lo público. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "paragraph",
          text: "¿Qué entendemos por Derecho? En su acepción básica, no describe cómo son los hechos, sino cómo deberían ser: es una disciplina normativa, producto de la cultura, que objetiva el acontecer humano en forma de reglas para la vida pacífica. Se configura como un sistema de normas (escritas o no) que permiten, prohíben u obligan conductas y que, en su conjunto, definen instituciones y procedimientos. En definiciones contemporáneas, el Derecho puede verse como el conjunto de normas jurídicas que confieren facultades, imponen deberes y otorgan derechos para regular intercambios y convivencia, con base en criterios de certeza, seguridad, igualdad, libertad y justicia. Desde este enfoque, importa tanto la estructura (quién crea, interpreta y ejecuta la norma) como la finalidad (qué bienes protege, qué riesgos previene y cómo distribuye cargas). Por ello, identificar la diferencia entre la disciplina “Derecho” y los “derechos” que gozamos —susceptibles de exigirse— será un aprendizaje transversal en toda la unidad. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "paragraph",
          text: "Para ubicar mejor la función social del Derecho, conviene contrastarlo con otros órdenes normativos que también orientan la conducta: la moral, la religión o los usos sociales. El Derecho se distingue por su bilateralidad (deberes correlativos a facultades), exterioridad (su fuente es intersubjetiva, no el fuero interno), coercibilidad (cuenta con medios legítimos de apremio) y heteronomía (nos sujeta a un querer normativo ajeno aceptado socialmente). Estas notas no descalifican la moral: simplemente señalan que la exigibilidad de la norma jurídica y sus efectos públicos son de otra naturaleza. En la práctica, una sociedad justa requiere diálogo entre ambos planos (ético y jurídico), pero la función social del Derecho se concreta en su capacidad para coordinar expectativas, resolver disputas con autoridad legítima y actualizar valores compartidos en formas institucionales. Este contraste prepara el terreno para las unidades siguientes, donde profundizaremos en esas diferencias y en las fuentes formales del orden jurídico. :contentReference[oaicite:4]{index=4}",
        },

        /* ── Acordeones (3 secciones; contenido en párrafo largo) ── */
        {
          type: "accordion",
          header: "Ejemplos prácticos de la función social del Derecho",
          open: false,
          text: "Imagina tres escenas: (1) Tránsito urbano: sin reglas de preferencia, límites de velocidad y sanciones, la ciudad sería invivible; con normas, reducimos accidentes y mejoramos la movilidad. (2) Contratos cotidianos: desde una compra en línea hasta un arrendamiento, las reglas fijan derechos, obligaciones y remedios ante incumplimientos, lo que permite que personas desconocidas confíen y cooperen. (3) Espacio digital: la protección de datos personales y la ciberseguridad traducen valores como la dignidad y la privacidad en obligaciones para plataformas y usuarios. En los tres casos, el Derecho convierte ideales —seguridad, confianza, libertad— en estructuras verificables (procedimientos, autoridades, sanciones y garantías) que ordenan la convivencia. Por eso decimos que su función social no es abstracta: opera en cada interacción donde la norma posibilita coordinar acciones, reducir costos de transacción y distribuir con justicia los riesgos. :contentReference[oaicite:5]{index=5}",
        },
        {
          type: "accordion",
          header: "Cultura de legalidad y alfabetización jurídica",
          open: false,
          text: "La cultura de legalidad implica más que temor a la sanción: es comprensión de por qué obedecer la ley conviene al conjunto y a cada individuo, cómo ejercer derechos sin dañar a terceros y de qué modo impugnar normas injustas por vías institucionales. La alfabetización jurídica —saber qué dice la ley, cómo interpretarla y a qué autoridades acudir— es una competencia ciudadana esencial. Cuando la población desconoce reglas y procedimientos, crece la arbitrariedad y se multiplican los conflictos mal resueltos; cuando los domina, aumenta la confianza pública y se robustecen los incentivos para cumplir voluntariamente. De ahí la importancia de que el Derecho asuma explícitamente una función formativa: traducir principios en lenguaje claro, explicar razones y habilitar canales de participación para revisar y mejorar el orden normativo. :contentReference[oaicite:6]{index=6}",
        },
        {
          type: "accordion",
          header:
            "Puentes hacia los siguientes temas (moral, tipos y fuentes del Derecho)",
          open: false,
          text: "Esta unidad sienta la base conceptual para tres discusiones inmediatas. Primero, la comparación Derecho–moral: entender bilateralidad/exterioridad/coercibilidad/heteronomía permite distinguir planos sin confundirlos, y apreciar cómo se influyen mutuamente. Segundo, los tipos de Derecho: diferenciar Derecho objetivo (sistema de normas) y derechos subjetivos (facultades conferidas), así como las categorías de vigente/positivo/natural, ayuda a leer problemas con precisión conceptual. Tercero, las fuentes: reconocer el proceso legislativo como fuente formal central en nuestro sistema, junto con el papel de la costumbre y la jurisprudencia, aclara “de dónde viene” la norma que aplicamos. Estos puentes aseguran continuidad temática y evitan estudiar el Derecho como listas aisladas; muestran, por el contrario, un entramado coherente entre función social, categorías analíticas y procedimientos de creación normativa. :contentReference[oaicite:7]{index=7}",
        },
      ],
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "La función social del Derecho",
          content: [
            {
              type: "paragraph",
              text: "El punto de partida para comprender la función social del Derecho es reconocer que el ser humano vive en sociedad porque ello potencia su seguridad, bienestar y acceso a satisfactores que, en aislamiento, serían inalcanzables. La convivencia, sin embargo, exige un entramado estable de expectativas recíprocas: saber qué está permitido, qué está prohibido y qué cabe exigir a los demás. De ahí que el Derecho se constituya como un conjunto de reglas necesarias para sostener el orden, la certeza y la previsibilidad de la vida común. Sin este armazón normativo, la vida social se degradaría en inseguridad y sorpresa, minando la cooperación y el desarrollo. Desde esa perspectiva, el Derecho no es lujo cultural, sino condición de posibilidad de la convivencia pacífica. Además de organizar la vida social, las normas jurídicas protegen derechos, confieren facultades e imponen deberes con arreglo a criterios de justicia, igualdad y libertad; y lo hacen bajo el resguardo de tribunales que garantizan su observancia y resuelven disputas. En palabras del material, el Derecho regula relaciones entre individuos y grupos, delimita responsabilidades y sostiene la estructura de un Estado que tutela los derechos de todos. Por ello, su función social no se agota en “mandar y sancionar”: también previene conflictos, equilibra intereses y busca, mediante la institucionalización de procedimientos, que las soluciones a los desacuerdos sean imparciales y públicas. A mayor claridad normativa y mejor aplicación judicial, mayor confianza social, inversión de energías en fines productivos y crecimiento del capital cívico que permite a la comunidad sostener sus instituciones en el tiempo. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "image",
              alt: "Convivencia social y orden jurídico",
              src: "https://alderechodotorg.wordpress.com/wp-content/uploads/2018/11/sociedad-abogados.jpg",
            },
            {
              type: "paragraph",
              text: "Esta función social se aprecia también en su dimensión pedagógica: al transformar expectativas difusas en criterios públicos y previsibles, el Derecho “enseña” a vivir en sociedad. Su lenguaje general y abstracto se concreta en obligaciones y derechos definidos; su carácter público permite que cualquier persona conozca por adelantado qué consecuencias se asocian a sus decisiones. Por eso, además de la protección frente a daños, aporta seguridad jurídica: las personas pueden planear su vida, celebrar contratos, formar familias y emprender proyectos, confiadas en que las reglas no cambiarán arbitrariamente. El material subraya que el Derecho, como regulador de relaciones, establece límites y responsabilidades, preserva la igualdad y el respeto, y sostiene la solución pacífica de controversias mediante órganos jurisdiccionales. También enfatiza que un “buen Estado de Derecho” abre vías institucionales para reformar las reglas cuando resulten injustas o inadecuadas a nuevas realidades, de modo que la función social del Derecho no es inmovilista: combina estabilidad (certeza) con perfectibilidad (cambio ordenado). En suma, el Derecho cumple una función civilizatoria: crea las condiciones para que florezcan la cooperación, la confianza y la justicia, a la vez que reduce los incentivos a la violencia privada. Cuando las normas se conocen, se aplican y pueden impugnarse por vías jurídicas, la vida social gana en dignidad y previsibilidad, y el conflicto se canaliza hacia procedimientos con garantías para todas las partes. :contentReference[oaicite:1]{index=1}",
            },

            // Acordeones (en formato de párrafo, como pediste)
            {
              type: "accordion",
              header: "Orden, estabilidad y justicia",
              open: false,
              text: "La estabilidad que brinda el Derecho no es simple inmovilidad: es la continuidad razonable de reglas conocidas que permiten planear la vida personal y colectiva. El material destaca que, sin Derecho, imperaría la inseguridad y la sorpresa; con Derecho, en cambio, se trazan líneas claras entre lo permitido y lo prohibido, se asignan responsabilidades y se preserva la igualdad ante la ley. Esta estabilidad habilita la cooperación (porque confía en el cumplimiento de promesas), reduce los costos de transacción (porque evita renegociaciones constantes) y disminuye la violencia (porque canaliza el conflicto a tribunales). La justicia se persigue así mediante un doble movimiento: proteger la libertad y la propiedad, y, al mismo tiempo, restringir conductas dañinas mediante sanciones proporcionales. Cuando la ley se conoce y la jurisdicción es accesible, la ciudadanía internaliza pautas de comportamiento y aprende a resolver disputas pacíficamente; por eso, la función social del Derecho es también una función educativa y cívica. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "accordion",
              header: "Normas, tribunales y prevención de conflictos",
              open: false,
              text: "Una comunidad con reglas claras y tribunales eficaces no sólo resuelve pleitos: los previene. Al convertir expectativas dispersas en obligaciones y derechos verificables, el Derecho reduce ambigüedades que suelen detonar disputas. Además, el simple hecho de contar con remedios judiciales desincentiva la auto-tutela y la violencia privada. El material explica que los órganos jurisdiccionales tutelan derechos, resuelven desacuerdos y confieren certeza. A la par, la publicidad de las leyes refuerza la previsibilidad del sistema: cualquiera puede conocer con antelación las consecuencias de sus actos. Finalmente, cuando las reglas se muestran ineficaces o injustas, el propio orden jurídico abre canales de reforma, evitando que la demanda de cambio estalle por cauces extra-legales. De este modo, la prevención de conflictos es efecto combinado de buenas normas, instituciones confiables y vías de actualización normativa: una “ingeniería social” al servicio de la paz y el desarrollo. :contentReference[oaicite:3]{index=3}",
            },
          ],
        },

        {
          id: "1.2",
          numbering: "1.2",
          title: "El problema de la relación entre Derecho y Sociedad",
          content: [
            {
              type: "paragraph",
              text: "Vivir en sociedad implica un pacto de renuncias y ganancias: se ceden ciertas libertades para obtener seguridad, cooperación y acceso a bienes que nadie lograría en solitario. El material lo plantea con franqueza: la socialización exige aceptar límites a deseos y necesidades; de ahí surgen tensiones que explican muchos conflictos cotidianos, pues hay aspiraciones que las reglas sociales vedan por el bien común. A veces, además, las reglas fueron diseñadas por grupos con intereses concretos; reconocerlo no invalida el Derecho, pero sí obliga a dotarlo de procedimientos abiertos para su crítica y reforma. Así entendido, el Derecho asegura libertades y satisfactores, pero también impone restricciones. La clave es un Estado de Derecho que habilite a la ciudadanía a cambiar legalmente las normas, de modo que la relación Derecho-Sociedad no sea estática ni unidireccional: la sociedad moldea al Derecho y el Derecho, a su vez, estructura la sociedad. En esa dinámica, la legitimidad no proviene sólo del poder de coacción, sino de la razonabilidad de las reglas, su publicidad y su posibilidad de revisión. Cuando las personas experimentan que las normas reflejan valores compartidos y que existen vías efectivas para perfeccionarlas, la obediencia deja de ser mero temor a la sanción y se convierte en adhesión a un proyecto común de vida ordenada. :contentReference[oaicite:4]{index=4}",
            },
            {
              type: "paragraph",
              text: "El texto también subraya el papel del Derecho como motor de cambio social y como respuesta a innovaciones tecnológicas: históricamente, el orden jurídico ha debido adaptarse para proteger nuevos derechos (privacidad digital, acceso a la información) y resolver problemas inéditos. El Derecho fija la estructura del Estado, regula relaciones entre particulares y establece procedimientos para actualizarse, equilibrando continuidad y transformación. Así, la relación Derecho-Sociedad es bidireccional y evolutiva: la realidad demanda ajustes normativos, y la normatividad canaliza esas demandas dentro de cauces institucionales. Este ajuste continuo evita que la vida social derive en arbitrariedad o parálisis; al contrario, permite la modernización sin sacrificar la seguridad jurídica. En síntesis, el reto es sostener un Derecho capaz de preservar la convivencia y, a la vez, abrirse a revisiones informadas por la experiencia social. De ese equilibrio depende que la sociedad pueda desarrollarse con orden, equidad y respeto a la dignidad humana, manteniendo vigente la promesa de justicia que legitima a las instituciones. :contentReference[oaicite:5]{index=5}",
            },

            {
              type: "accordion",
              header: "Tensión libertad–orden: el ‘pacto’ de convivencia",
              open: false,
              text: "Toda sociedad articula un equilibrio entre libertades individuales y exigencias del bien común. El material expone que aceptamos límites para disfrutar ventajas de la vida social; cuando ese equilibrio se resquebraja (por exceso de restricciones o por laxitud que alimente abusos), se erosiona la confianza y proliferan conflictos. La respuesta jurídica adecuada combina reglas claras, participación ciudadana en su diseño y vías accesibles de impugnación. Así, la obediencia no descansa sólo en la amenaza de la fuerza, sino en la razonabilidad de la norma y en la experiencia de que ésta puede perfeccionarse por vías legales. :contentReference[oaicite:6]{index=6}",
            },
            {
              type: "accordion",
              header: "Cambio social, tecnología y actualización normativa",
              open: false,
              text: "El Derecho acompasa transformaciones sociales y tecnológicas: incorpora protecciones novedosas (v. gr., datos personales) y ajusta procedimientos para garantizar derechos en contextos emergentes. El documento recuerda que el orden jurídico no es mero freno, sino herramienta de modernización ordenada. Al institucionalizar mecanismos de reforma, evita que la demanda de cambio se exprese en rupturas violentas y, al mismo tiempo, preserva la seguridad jurídica indispensable para la cooperación social y la actividad económica. :contentReference[oaicite:7]{index=7}",
            },
          ],
        },

        {
          id: "1.3",
          numbering: "1.3",
          title: "El conocimiento de los valores jurídicos",
          content: [
            {
              type: "paragraph",
              text: "Para que el Derecho cumpla su función social, la ciudadanía debe conocer sus reglas y valores. Cuando las personas ignoran el contenido y el sentido de las normas, se multiplican las injusticias prácticas: decisiones mal informadas, incumplimientos involuntarios y desconfianza en las instituciones. Por ello, el material resalta la función educativa del Derecho: proporcionar comprensión de derechos y responsabilidades, y formar una cultura de legalidad que fortalezca la cohesión social. La educación jurídica no se limita a estudiantes de Derecho; compete a toda la comunidad, pues un orden normativo sólo adquiere efectividad plena si sus destinatarios pueden anticipar las consecuencias de sus actos. Además, la publicidad de la ley refuerza la previsibilidad: cualquiera puede consultar el contenido normativo y obrar en consecuencia. En este marco, la “alfabetización jurídica” empodera a la ciudadanía y reduce la asimetría frente a autoridades o particulares con mayor conocimiento técnico, promoviendo decisiones libres e informadas. :contentReference[oaicite:8]{index=8}",
            },
            {
              type: "paragraph",
              text: "El documento advierte, además, que la creciente complejidad del Derecho exige profesionales mejor preparados, capaces de traducir tecnicismos a un lenguaje accesible y de operar el sistema con integridad. Abogadas y abogados no sólo litigan: explican, previenen conflictos, diseñan soluciones, implementan políticas y sostienen el puente entre la abstracción normativa y los casos concretos. Ese rol docente-práctico incluye orientar a las personas en el uso del Derecho “en su beneficio” (dentro de la legalidad) y comunicar con claridad las vías procesales. En conjunto, este conocimiento de los valores jurídicos —justicia, igualdad, libertad, seguridad— fortalece la confianza pública: la gente acata no por miedo ciego, sino porque reconoce en la norma una guía razonable para la vida en común. Así, el aprendizaje jurídico se convierte en capital cívico, y la comunicación clara de las reglas reduce la litigiosidad innecesaria, acelera acuerdos y demuestra que la legalidad puede ser, también, una forma de solidaridad institucionalizada. :contentReference[oaicite:9]{index=9}",
            },

            {
              type: "accordion",
              header: "Educación jurídica y cultura de la legalidad",
              open: false,
              text: "Conocer derechos y deberes permite ejercer libertades sin invadir las ajenas y reclamar protecciones cuando proceda. El material enfatiza que la educación jurídica forma ciudadanos conscientes y respetuosos de la ley, lo que incrementa la cohesión social. Esta cultura de legalidad se asienta en la publicidad de las normas, su inteligibilidad y la posibilidad real de hacerlas valer ante tribunales imparciales. A mayor comprensión del sistema, menor margen para el abuso y la arbitrariedad, y mayores incentivos a resolver disputas mediante vías institucionales. :contentReference[oaicite:10]{index=10}",
            },
            {
              type: "accordion",
              header: "Profesionalización y comunicación del Derecho",
              open: false,
              text: "La complejidad creciente del orden jurídico demanda profesionistas capaces de articular el ‘idioma’ técnico de la ley con las necesidades reales de las personas. El documento señala que corresponde a quienes ejercen el Derecho explicar cómo funcionan las normas, ayudar a usarlas correctamente e instrumentarlas en casos concretos. Esta mediación práctica —de la norma al hecho— preserva la confianza en la justicia, reduce la incertidumbre y mejora la calidad de las decisiones públicas y privadas. :contentReference[oaicite:11]{index=11}",
            },
          ],
        },

        {
          id: "1.4",
          numbering: "1.4",
          title: "Las nociones del Derecho",
          content: [
            {
              type: "paragraph",
              text: "El material propone una pregunta guía: ¿qué es el Derecho? La respuesta parte de su carácter normativo: no describe cómo son las cosas, sino cómo deberían ser según criterios de justicia y conveniencia social. Por eso se le define como disciplina normativa —producto de la cultura— que objetiva el acontecer humano y organiza la convivencia mediante reglas. Esas reglas pueden ser escritas o no, pero siempre habitan la conciencia de los pueblos y tienden a perfeccionarse. En términos operativos, el Derecho se presenta como un vasto conjunto de normas que permiten, prohíben u obligan conductas y, en su caso, diseñan figuras e instituciones (propiedad, contrato, familia, proceso). Tal conjunto obtiene unidad gracias a su positivación (leyes, reglamentos) y a su aplicación por tribunales; pero su sentido último proviene de los valores que resguardan los sistemas democráticos: libertad, igualdad, seguridad y justicia. Comprender estas nociones iniciales evita confundir el derecho como fenómeno (Derecho objetivo) con los derechos que disfrutamos (derecho subjetivo) y sitúa a la persona estudiando Derecho en el terreno adecuado para distinguir significados, fuentes y efectos de la normatividad. El aprendizaje de esta arquitectura conceptual permite leer la ley con más profundidad y operar en la práctica con coherencia: cada caso se interpreta no como ocurrencia aislada, sino como engrane de un orden racional que procura la paz social. :contentReference[oaicite:12]{index=12}",
            },
            {
              type: "paragraph",
              text: "Entender el Derecho como ‘deber ser’ no implica desconocer su historicidad. Al contrario: subraya su naturaleza cultural y perfectible. Las sociedades cambian y con ellas lo hacen sus problemas, valores y lenguajes; por eso el Derecho requiere técnicas para revisarse sin perder continuidad (procesos legislativos, interpretación judicial, control constitucional). El material insiste en que las reglas pueden ser escritas o consuetudinarias, pero, en cualquier caso, expresan una aspiración de convivencia pacífica que se renueva en cada generación. Esta visión evita dos extremos: el relativismo paralizante (todo vale según el momento) y el dogmatismo inmóvil (nada cambia). Entre ambos, se consolida una noción práctica del Derecho como técnica de organización social orientada por valores, capaz de traducir fines en reglas y reglas en decisiones. Ese puente conceptual habilita a la comunidad jurídica para evaluar si las normas cumplen su promesa —proteger derechos, resolver conflictos, promover justicia— y, cuando no, para reformarlas por cauces institucionales. Así, las nociones del Derecho no son definiciones para memorizar, sino herramientas vivas para pensar y actuar con sentido jurídico en la realidad. :contentReference[oaicite:13]{index=13}",
            },

            {
              type: "accordion",
              header: "Derecho como orden normativo",
              open: false,
              text: "Definir el Derecho como “deber ser” aclara su naturaleza: reglas que orientan conductas, resuelven conflictos y estabilizan expectativas. El documento recalca que esas reglas pueden ser escritas o no, pero su legitimidad se sostiene en valores compartidos y en su capacidad de organizar la convivencia con justicia. Vista así, la ley no agota el Derecho, aunque sí le da forma positiva y exigible; por eso importan tanto los procesos de creación, interpretación y aplicación, que convierten principios en soluciones concretas. :contentReference[oaicite:14]{index=14}",
            },
            {
              type: "accordion",
              header: "Cultura jurídica y perfectibilidad",
              open: false,
              text: "Si el Derecho es producto de la cultura, también es perfectible. El material subraya que las normas se revisan y mejoran para responder a nuevas realidades sin sacrificar la seguridad jurídica. Este equilibrio entre continuidad y reforma depende de instituciones transparentes y participativas (proceso legislativo, control jurisdiccional) y de una ciudadanía que entienda el sentido de las reglas. La cultura jurídica madura acepta el cambio, pero lo demanda por vías legales, preservando la paz social y la confianza en las instituciones. :contentReference[oaicite:15]{index=15}",
            },
          ],
        },
      ],
    },

    /* ── Unidad 2 ─ Moral y Derecho ─ */
    {
      id: "2",
      numbering: "Unidad 2",
      title: "Unilateralidad de la moral y bilateralidad del Derecho",
      content: [
        {
          type: "paragraph",
          text: "Hablar de la unilateralidad de la moral y la bilateralidad del Derecho permite distinguir dos planos normativos que conviven en la vida social, pero que se organizan con lógicas distintas. La moral prescribe deberes que cada persona se impone a sí misma por convicción —desde la conciencia— y, por tanto, su cumplimiento no depende de una relación jurídica con otro sujeto que pueda exigirlo. El Derecho, en cambio, estructura expectativas recíprocas: al imponer obligaciones, simultáneamente confiere facultades a otras personas para demandar su observancia. Esta diferencia básica —unilateralidad frente a bilateralidad— explica por qué el orden jurídico puede articular procedimientos para reclamar el respeto de un derecho violado, mientras que los preceptos morales carecen de ese correlato exigible. Sin embargo, ambos sistemas no son ajenos: la moral ofrece sustratos valorativos que orientan la creación y la interpretación de las leyes; y el Derecho, al positivarse, traduce ciertas convicciones morales en reglas operativas, públicas y estables. Comprender esta distinción ayuda a no confundir reproches éticos con responsabilidades jurídicas, y a reconocer que la convivencia pacífica requiere reglas exigibles —Derecho— sin perder de vista la dimensión interior que cultiva la virtud —moral— y sostiene motivaciones para cumplir la ley más allá del temor a la sanción.",
        },
        {
          type: "paragraph",
          text: "Otra distinción clave se expresa en los criterios de valoración: la moral atiende principalmente a la interioridad —intenciones, motivos, deliberaciones—, mientras que el Derecho se enfoca en la exterioridad —hechos, conductas, efectos—. En ética, no es lo mismo hacer el bien por convicción que por conveniencia; la calidad moral del acto depende, en gran medida, de la intención. En el ámbito jurídico, en cambio, la validez de un contrato, la responsabilidad por daños o la tipicidad de un delito se analizan con base en conductas objetivables y pruebas disponibles. Ello no significa que el Derecho ignore por completo la subjetividad; conceptos como dolo, culpa o buena fe muestran que las intenciones pueden importar. Pero incluso esas categorías subjetivas se reconstruyen a partir de indicios verificables. Esta preferencia por lo externo responde a la necesidad de certeza y de igualdad: los jueces no pueden leer conciencias, pero sí valorar hechos acreditados con medios probatorios. La moral, al centrarse en la interioridad, aspira a la perfección del sujeto; el Derecho, al priorizar la exterioridad, aspira a la paz social mediante reglas generales, abstractas y aplicables a todos por igual, con independencia de virtudes o defectos personales.",
        },
        {
          type: "paragraph",
          text: "La coercibilidad distingue nuevamente a ambos órdenes. Las normas morales son incoercibles: su fuerza reside en la convicción íntima y en la presión social difusa (aprobación o desaprobación), pero no cuentan con un aparato institucional para imponer su cumplimiento. Las normas jurídicas, por su parte, son coercibles: el Estado dispone de medios legítimos —sanciones, ejecución forzosa— para asegurar que las obligaciones se cumplan o, en su caso, para reparar el daño. Conviene evitar un malentendido frecuente: que el Derecho sea coercible no significa que funcione sólo por la fuerza. La coercibilidad es una posibilidad, no una necesidad constante. Idealmente, la mayoría cumple la ley voluntariamente porque la considera razonable o porque valora la estabilidad que provee. Pero cuando la cooperación falla, la coacción legitima la tutela de derechos y la restauración del orden. En el plano práctico, la combinación de cumplimiento voluntario (ética cívica) y respaldo coercitivo (legalidad) reduce los incentivos a la violencia privada y desplaza el conflicto hacia procedimientos regulados, transparentes y con garantías, preservando así la confianza social y la seguridad jurídica.",
        },
        {
          type: "paragraph",
          text: "Un cuarto contraste se formula con las nociones de autonomía y heteronomía. La moral, entendida como auto-legislación racional, es autónoma: el sujeto se reconoce a sí mismo como autor de la norma que sigue; su obediencia brota del reconocimiento del valor del precepto, no de su mera imposición externa. El Derecho, en cambio, es típicamente heterónomo: sus reglas provienen de una autoridad distinta del destinatario (legislador, tribunal, administración) y su vigencia no depende de la adhesión subjetiva de cada persona. Esta heteronomía no devalúa al Derecho; al contrario, lo hace operable como lenguaje común en sociedades plurales, donde coexisten convicciones morales diversas. Precisamente porque nadie puede imponer su ética particular como ley de todos, la norma jurídica se redacta en términos generales y mínimos, buscando puntos de consenso y procedimientos para resolver desacuerdos. De ahí que la formación cívica exija el doble aprendizaje: cultivar la autonomía moral para actuar por convicción —aun cuando la coacción sea improbable— y acatar el marco heterónomo que ordena la convivencia —incluso cuando ciertas reglas no coinciden plenamente con preferencias personales—.",
        },
        {
          type: "paragraph",
          text: "Estas diferencias estructurales tienen consecuencias pedagógicas y profesionales. En la vida cotidiana, abundan situaciones donde un juicio moral severo no se traduce en sanción jurídica (v. gr., ingratitud), y otras en que existe responsabilidad legal aunque el reproche ético sea matizado (v. gr., incumplimientos formales sin intención de dañar). Para el estudio del Derecho, la distinción evita confundir la deseabilidad moral con la exigibilidad jurídica: lo primero orienta fines; lo segundo habilita remedios y procedimientos. En el diseño de políticas públicas, recordar que la moral es incoercible ayuda a no sobrecargar al Derecho con “misiones morales” que difícilmente puede cumplir sin lesionar libertades. A la inversa, reconocer la bilateralidad y la coercibilidad jurídicas impide desentenderse de violaciones que requieren respuesta institucional. En síntesis, una sociedad madura cultiva virtudes —para que la ley no tenga que intervenir en todo— y fortalece su Estado de Derecho —para que, cuando intervenga, lo haga con reglas claras, garantistas y proporcionales—; sólo así se equilibra la aspiración ética con la gobernanza jurídica.",
        },

        /* ── Acordeón (3 niveles) ── */
        {
          type: "accordion",
          header:
            "Nivel 1 · Unilateralidad vs. bilateralidad (estructura de las normas)",
          open: false,
          text: "La moral es unilateral porque obliga al propio sujeto desde la conciencia, sin otorgar a otros una facultad correlativa de exigir. El Derecho es bilateral porque cada deber presupone el derecho de otro a demandar su cumplimiento (p. ej., el acreedor frente al deudor, la víctima frente al responsable). Esta bilateralidad explica la existencia de acciones, defensas, cargas probatorias y sentencias: dispositivos que carecerían de sentido si las normas no generaran relaciones jurídicas entre, al menos, dos sujetos. En la práctica, identificar la bilateralidad permite construir pretensiones justiciables y diferenciar reclamos éticos no exigibles de verdaderas acciones legales.",
        },
        {
          type: "accordion",
          header:
            "Nivel 2 · Interioridad y exterioridad (criterios de valoración)",
          open: false,
          text: "La moral evalúa la interioridad —intención, convicción, motivos— y apunta a la perfección del agente. El Derecho, en aras de seguridad e igualdad, privilegia la exterioridad —hechos y efectos comprobables—, aunque incorpore categorías subjetivas (dolo, culpa, buena fe) reconstruidas con pruebas. Este sesgo hacia lo externo permite decisiones verificables y comparables entre casos, reduce arbitrariedades y sostiene la confianza en la imparcialidad institucional. La clave pedagógica es enseñar a traducir debates morales en descripciones fácticas y tipologías jurídicas que puedan acreditarse en juicio.",
        },
        {
          type: "accordion",
          header:
            "Nivel 3 · Coercibilidad e incoercibilidad; autonomía y heteronomía",
          open: false,
          text: "Las normas morales son incoercibles: su fuerza depende de la adhesión personal y de la sanción social difusa. Las normas jurídicas son coercibles: cuentan con respaldo institucional para imponerse o reparar el daño. A ello se suma la autonomía de la moral —auto-legislación racional— y la heteronomía del Derecho —normas emanadas de autoridad—, indispensable en sociedades plurales. La combinación prudente de ambos órdenes produce ciudadanos que obran por convicción y, a la vez, aceptan límites comunes, y un sistema jurídico que no pretende moralizarlo todo, sino asegurar espacios de libertad, igualdad y seguridad bajo reglas exigibles y garantistas.",
        },
      ],
      subthemes: [
        /* ── Unidad 2 ─ Moral y Derecho ─ */

        /* 2.1 Unilateralidad y bilateralidad */
        {
          id: "2.1",
          numbering: "2.1",
          title: "Unilateralidad y bilateralidad",
          content: [
            {
              type: "paragraph",
              text: "La distinción entre unilateralidad y bilateralidad permite trazar la línea que separa a las normas morales de las normas jurídicas. Las primeras son un compromiso del sujeto consigo mismo: obligan en conciencia y su observancia se verifica en el fuero interno, sin que exista un tercero facultado para exigir su cumplimiento. Las segundas, en cambio, establecen correlaciones entre deberes y derechos que habilitan a otra persona o a una autoridad para demandar su observancia. En lenguaje técnico, la moral es unilateral —impone deberes sin reconocer frente a alguien una facultad de exigir—, mientras que el Derecho es bilateral, porque a todo deber corresponde la facultad de otro y, a toda facultad, el deber correlativo de un tercero. Esta bilateralidad es condición de posibilidad de la convivencia: transforma la expectativa moral en una pretensión jurídicamente tutelable y, con ello, ofrece remedios institucionales cuando la conducta esperada no se cumple. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "Comprender esta dicotomía evita dos errores frecuentes. El primero, creer que toda obligación que consideramos ‘buena’ se convierte automáticamente en exigible ante tribunales. El segundo, asumir que, porque algo es jurídicamente reclamable, deja de tener dimensión ética. En realidad, ambos planos coexisten: el Derecho toma ciertos mínimos morales y los convierte en garantías intersubjetivas dotadas de procedimientos, órganos y sanciones. Por eso, el tránsito de la unilateralidad a la bilateralidad no es una degradación de la ética, sino una institucionalización de expectativas que la sociedad juzga indispensables para la paz social. Así, deberes de veracidad, lealtad o respeto —difíciles de vigilar en el fuero interno— encuentran su traducción jurídica cuando su incumplimiento compromete bienes colectivos, como la seguridad en el tráfico, la propiedad o la integridad de las personas. :contentReference[oaicite:1]{index=1}",
            },

            /* Imagen contextual intercalada */
            {
              type: "image",
              src: "https://alianza.bunam.unam.mx/wp-content/uploads/2023/12/Screenshot-2023-12-20-222141.png",
              caption:
                "Moral y Derecho en la vida social (imagen citada en el material).",
            },

            {
              type: "paragraph",
              text: "La bilateralidad también explica por qué el orden jurídico puede hablar de ‘obligaciones’ y ‘facultades’ con precisión técnica. En una compraventa, por ejemplo, el vendedor debe entregar la cosa y el comprador tiene la facultad de exigirla; a la inversa, el vendedor posee la facultad de exigir el precio, y el comprador el deber de pagarlo. En ética, ambos ‘deberes’ podrían formularse como ideales de conducta, pero nadie estaría legitimado para demandarlos coactivamente. El Derecho agrega, pues, un diseño institucional que distribuye cargas y poderes, prevé supuestos de incumplimiento e instala vías de tutela (reparación, cumplimiento forzoso, nulidad, etc.). Esta estructura relacional —yo debo frente a alguien que puede exigirme— es el sello de la bilateralidad. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "paragraph",
              text: "Conviene subrayar que la bilateralidad no equivale a simetría perfecta. No todas las partes ostentan idénticas facultades en todo momento: el orden jurídico crea posiciones dinámicas según etapas, condiciones y contextos (piénsese en contratos con obligaciones recíprocas, responsabilidad civil o relaciones de sujeción especial). Aun así, en cada relación jurídica se preserva la idea matriz: frente a mi deber existe la pretensión de otro; y frente a su deber, mi pretensión. Este juego de espejos hace operable la justicia como ‘dar a cada quien lo suyo’, porque define con nitidez quién debe qué y quién puede exigirlo, evitando que la moral quede a merced de la buena voluntad individual. :contentReference[oaicite:3]{index=3}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Ejemplos prácticos de unilateralidad y bilateralidad",
              open: false,
              text: "Si prometo —a título moral— ayudar a un vecino a estudiar, mi obligación es unilateral: no hay un tercero con poder jurídico para forzarme. En cambio, si suscribo un contrato de servicio educativo, la obligación se vuelve bilateral: el vecino (o su representante) puede exigir el cumplimiento y, en su caso, una autoridad puede imponerlo. De igual modo, decir la verdad es un ideal moral; pero en juicio, la obligación de decir verdad adquiere bilateralidad, pues el tribunal y la contraparte pueden reclamarla y sancionar su infracción. Esta traducción institucional convierte expectativas de convivencia en derechos exigibles, reduce incertidumbre y habilita remedios cuando la cooperación espontánea falla. :contentReference[oaicite:4]{index=4}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Por qué importa en la práctica forense",
              open: false,
              text: "Identificar si una expectativa es moral o jurídica define la estrategia: donde sólo hay unilateralidad, el camino es la persuasión ética, mediación o política pública; donde hay bilateralidad, procede la pretensión procesal con sus cargas probatorias. Además, la bilateralidad guía la redacción de contratos (cláusulas claras de prestación y remedios), el diseño de políticas (derechos justiciables) y la educación cívica (diferenciar ‘lo debido’ en conciencia de ‘lo exigible’ en derecho). En suma, evita confundir exhortaciones éticas con garantías jurídicas y fortalece la tutela efectiva de derechos. :contentReference[oaicite:5]{index=5}",
            },
          ],
          subthemes: [],
        },

        /* 2.2 Interioridad y exterioridad */
        {
          id: "2.2",
          numbering: "2.2",
          title: "Interioridad y exterioridad",
          content: [
            {
              type: "paragraph",
              text: "La segunda distinción clásica opone interioridad y exterioridad. La moral juzga la conducta desde la intención del agente: evalúa motivos, convicciones y decisiones en el fuero interno, incluso cuando el comportamiento externo coincide. Por eso, puede haber actos idénticos en apariencia con valoración moral distinta según el propósito. El Derecho, en cambio, valora actos desde su exterioridad: requiere hechos, consecuencias y tipicidad normativa verificables por un tercero, pues su función es ordenar conductas intersubjetivas y resolver conflictos con criterios comunes. Esta orientación no niega la relevancia de la intención —pensemos en dolo o culpa—, pero la somete a reglas probatorias y a parámetros objetivos, para no quedar a merced de apreciaciones subjetivas. :contentReference[oaicite:6]{index=6}",
            },
            {
              type: "paragraph",
              text: "La exterioridad es, ante todo, una garantía de imparcialidad. Si el Derecho se centrara en el mundo interior, careceríamos de estándares compartidos para decidir controversias: cada proceso dependería de escrutar conciencias. En su lugar, el orden jurídico fija conductas esperadas, establece consecuencias y construye dispositivos de prueba que acercan al juez a la ‘verdad procesal’. La moral, por su parte, preserva el territorio de la conciencia, donde la rectitud depende de convicciones y virtudes no siempre traducibles a evidencias. Esta división del trabajo protege libertades (nadie puede ser sancionado por pensamientos) y a la vez asegura previsibilidad (las normas describen hechos observables). :contentReference[oaicite:7]{index=7}",
            },

            /* Imagen contextual intercalada (del material) */
            {
              type: "image",
              src: "https://aprendederecho.com/wp-content/uploads/2023/07/Clasificacion-y-tipos-de-las-fuentes-del-derecho-768x432-1.webp",
              caption:
                "Representación gráfica de nociones jurídicas citada en el material.",
            },

            {
              type: "paragraph",
              text: "Esta diferencia se aprecia con nitidez en ámbitos como la responsabilidad. Moralmente, puedo reprochar una omisión por falta de caridad aunque no cause daño; jurídicamente, la responsabilidad surge cuando se actualizan elementos normativos (acción u omisión, daño, nexo causal, antijuridicidad, imputación) que pueden acreditarse con pruebas. Del mismo modo, el perdón moral puede sanar una ofensa; pero el desistimiento jurídico requiere formas y efectos previstos en la ley. Separar planos evita confundir el perdón con la extinción de acciones o pretensiones, y la culpa moral con la tipicidad de un ilícito. :contentReference[oaicite:8]{index=8}",
            },
            {
              type: "paragraph",
              text: "Aun así, interioridad y exterioridad dialogan. Los sistemas jurídicos incorporan categorías que capturan aspectos internos cuando son socialmente relevantes (intención defraudatoria, ánimo de lucro, mala fe), pero siempre mediadas por reglas de prueba. A la inversa, la cultura jurídica influye en la moral social al educar sobre límites y derechos. El reto para el jurista es discernir cuándo un debate pertenece al foro interno —y exige educación ética o deliberación pública— y cuándo amerita regulación y sanción. Esa prudencia técnica evita moralismos punitivos y también indiferencias normativas ante daños reales. :contentReference[oaicite:9]{index=9}",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Ejemplos: intención moral vs. valoración jurídica",
              open: false,
              text: "Quien dona para ‘ser visto’ actúa con intención moral discutible, pero jurídicamente cumple con la donación si respeta las formas; quien, en cambio, promete donar y difama a quien le reclama, puede incurrir en ilícitos aunque afirme ‘buenas intenciones’. En penal, el dolo es una categoría del mundo interno, pero se demuestra por actos externos (planificación, ocultamiento, medios empleados). En civil, la mala fe en un contrato no basta con alegarla: exige conductas verificables (reticencia, engaño, violación de deberes de información) que el juez pueda constatar. :contentReference[oaicite:10]{index=10}",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Claves didácticas para el aula y la práctica",
              open: false,
              text: "Enseñar interioridad/exterioridad con casos ayuda a distinguir planos: 1) plantear un acto con igual apariencia y motivaciones diversas; 2) identificar qué puede probarse; 3) mapear consecuencias morales y jurídicas. En práctica forense, traducir el ‘juicio moral’ en hechos y derechos exigibles exige formular hechos controvertidos, medios de prueba idóneos y normas aplicables. Así se honra la conciencia sin colonizarla jurídicamente, y se fortalece un Derecho que decide con objetividad y protege libertades. :contentReference[oaicite:11]{index=11}",
            },
          ],
          subthemes: [],
        },
        /* ── 2.3 Coercibilidad e incoercibilidad ── */
        {
          id: "2.3",
          numbering: "2.3",
          title: "Coercibilidad e incoercibilidad",
          content: [
            {
              type: "paragraph",
              text: "La coercibilidad es la posibilidad jurídica de imponer el cumplimiento de una norma mediante el uso legítimo de la fuerza estatal, o de aplicar una consecuencia desfavorable cuando el deber no se acata. En cambio, la incoercibilidad describe el modo propio de la moral: sus mandatos apelan a la conciencia y al autogobierno del sujeto, sin previsión de un tercero con potestad para forzar externamente la conducta. Esta distinción no significa que toda norma jurídica se aplique siempre por la fuerza ni que la moral carezca de todo efecto social; quiere decir, más bien, que el Derecho incorpora institucionalmente órganos, procedimientos y sanciones que tornan exigibles sus mandatos, mientras que la moral se sostiene en convicciones internas y sanciones difusas como la aprobación o el reproche social. Por ello, cuando una conducta es relevante para la paz pública, el orden jurídico convierte ciertos mínimos éticos en deberes coactivamente exigibles.",
            },
            {
              type: "paragraph",
              text: "La coercibilidad del Derecho se expresa en dos planos: preventivo y reactivo. En el plano preventivo, la amenaza creíble de la sanción (pena, multa, ejecución forzosa, inhabilitación) orienta la conducta conforme a la norma. En el plano reactivo, se activan remedios y sanciones si la regla se incumple. Un contrato ilustra bien el punto: la obligación del deudor es moralmente deseable (cumplir la palabra), pero jurídicamente el acreedor puede exigirla coactivamente y, en su caso, obtener la ejecución o la reparación de daños. En tránsito, la regla de velocidad es más que un consejo: su desconocimiento abre la puerta a la sanción y a la responsabilidad frente a terceros. Así, la coercibilidad no es mero castigo, sino un diseño institucional que asegura expectativas recíprocas en sociedades complejas.",
            },

            /* Imagen intercalada */
            {
              type: "image",
              src: "https://significado.com/wp-content/uploads/derecho/Coercibilidad-2.jpg",
              caption:
                "Coercibilidad jurídica vs. incoercibilidad moral: tutela institucional de expectativas.",
            },

            {
              type: "paragraph",
              text: "La moral es incoercible porque su fuerza radica en la interiorización de valores: honestidad, solidaridad, gratitud o templanza no pueden imponerse por decreto sin desvirtuar su sentido. Sin embargo, la vida social genera ‘sanciones blandas’: prestigio, reputación, confianza o desconfianza, que incentivan o desincentivan conductas. El Derecho reconoce ese trasfondo cultural, pero se distingue por su estructura formal: tipifica supuestos, define consecuencias, crea órganos imparciales y dota al conjunto de una fuerza ejecutiva. Por eso se dice que la coacción jurídica es institucional y la sanción moral es difusa. Confundir ambas es problemático: moralizar el Derecho diluye garantías y objetividad; juridificar en exceso la moral invade el fuero interno y restringe libertades.",
            },
            {
              type: "paragraph",
              text: "Un corolario importante es el principio de mínima intervención: la coacción jurídica debe reservarse para bienes cuya protección requiere tutela institucional (vida, integridad, propiedad, seguridad del tráfico, cumplimiento de contratos), mientras que otras expectativas permanecen en el ámbito del consejo o la virtud. También importa la proporcionalidad: la sanción ha de guardar relación con la gravedad del incumplimiento y su impacto social. En clave pedagógica, la coercibilidad bien diseñada no sustituye la educación cívica; la complementa. Se busca que las personas cumplan la ley no sólo por temor a la sanción, sino por convicción, de modo que la coacción opere como última ratio y no como único motor de obediencia.",
            },

            /* Acordeones (con texto en forma de párrafo) */
            {
              type: "accordion",
              header: "Tipos y finalidades de la sanción jurídica",
              open: false,
              text: "Las sanciones jurídicas adoptan formas y finalidades distintas según el sector: en penal predomina la prevención y la protección de bienes jurídicos; en civil, la reparación y el cumplimiento forzoso; en administrativo, la disciplina del orden público; en fiscal, el desincentivo a la evasión. Todas comparten un hilo conductor: restablecer expectativas y afirmar la vigencia de la norma. Su legitimidad exige legalidad previa, debido proceso, proporcionalidad y control jurisdiccional. Leídas así, las sanciones no son meros castigos, sino herramientas para corregir desajustes y preservar la cooperación social.",
            },
            {
              type: "accordion",
              header: "Tres errores comunes al aplicar la distinción",
              open: false,
              text: "Error 1: suponer que ‘moral’ equivale a irrelevante; muchas obligaciones morales transforman el clima de confianza que el Derecho necesita. Error 2: creer que toda obligación valiosa debe ser jurídicamente coactiva; convertir virtudes en deberes legales puede invadir la conciencia y generar rechazo. Error 3: confundir coacción jurídica con coacción social; la primera es institucional, con garantías; la segunda es difusa y puede derivar en linchamientos simbólicos. El jurista debe calibrar qué pasa a la caja de herramientas del Derecho y qué permanece en la esfera de la ética cívica.",
            },
          ],
          subthemes: [],
        },

        /* ── 2.4 Autonomía y heteronomía ── */
        {
          id: "2.4",
          numbering: "2.4",
          title: "Autonomía y heteronomía",
          content: [
            {
              type: "paragraph",
              text: "Autonomía significa darse a sí mismo la ley: la persona actúa porque reconoce racionalmente la validez del mandato y lo incorpora a su proyecto de vida. Heteronomía alude a la norma que proviene de otro: una autoridad, una mayoría democrática o una tradición. En ética, el ideal es la autonomía responsable; en Derecho, la heteronomía es estructural, pues los mandatos jurídicos se dictan por órganos competentes y obligan con independencia de la adhesión subjetiva. Lejos de oponerse, ambas nociones se complementan: el orden jurídico crea condiciones para el autogobierno (libertades, garantías, procedimientos), y la autonomía personal legitima la obediencia a la ley cuando ésta se percibe como razonable y justa.",
            },
            {
              type: "paragraph",
              text: "La tensión entre autonomía y heteronomía se resuelve en la práctica a través de dos principios. Primero, legalidad y legitimidad: la autoridad sólo puede exigir obediencia cuando actúa conforme a competencias y procedimientos, y cuando la ley es fruto de un proceso democrático que la dota de autoridad moral. Segundo, razonabilidad: la norma debe guardar proporción con los bienes que tutela y abrir espacio a opciones personales. Así, obedecemos por deber jurídico, pero lo hacemos mejor cuando la ley se alinea con convicciones que reconocemos como propias. Esta convergencia evita que la heteronomía derive en mero acatamiento por miedo y que la autonomía se vuelva pretexto para desconocer obligaciones públicas.",
            },

            /* Imagen intercalada */
            {
              type: "image",
              src: "https://website-assets.studocu.com/img/document_thumbnails/d995a76606142e2ac08e33904c695060/thumb_1200_1698.png",
              caption:
                "Autonomía (autogobierno) y heteronomía (autoridad legítima) en equilibrio.",
            },

            {
              type: "paragraph",
              text: "El Derecho positivo, sin embargo, reconoce ámbitos de autonomía dentro de su marco heterónomo. Es paradigmática la autonomía de la voluntad en contratos: las partes diseñan libremente su relación, pero sus pactos valen porque un orden jurídico los reconoce y limita por razones de orden público, buena fe, no discriminación y tutela de partes débiles. También la libertad de expresión, de asociación o de religión son espacios de autogobierno en los que la persona configura su plan de vida sin más límites que los necesarios para compatibilizar derechos ajenos y bienes colectivos. La clave es entender que la autonomía florece gracias a un suelo institucional que la hace posible.",
            },
            {
              type: "paragraph",
              text: "Existen asimismo tensiones prácticas: objeción de conciencia de profesionales frente a deberes legales, decisiones personales sobre el propio cuerpo frente a políticas públicas, o libertad empresarial frente a regulación. El tratamiento jurídico exige criterios de ponderación: evaluar la intensidad de la afectación, la disponibilidad de alternativas y el peso de los bienes en juego. No se trata de imponer heteronomía ‘porque sí’ ni de absolutizar la autonomía: se trata de armonizarlas. Cuando el Derecho ofrece cauces para formular excepciones y delimita con precisión sus condiciones, protege la conciencia sin debilitar la igualdad ante la ley.",
            },
            {
              type: "paragraph",
              text: "En la formación jurídica, educar para la autonomía significa cultivar juicio práctico, deliberación y responsabilidad; educar para la heteronomía implica comprender la fuerza obligatoria de la ley y el respeto a las instituciones. Un profesional del Derecho competente no se limita a ‘cumplir ordenes’: razona, argumenta y mejora las reglas desde dentro de los procedimientos. Así, el sistema se vuelve más legítimo y las personas obedecen no sólo por temor a sanciones, sino porque reconocen que la norma expresa un consenso razonable sobre cómo convivir en libertad e igualdad.",
            },

            /* Acordeones (con texto en forma de párrafo) */
            {
              type: "accordion",
              header: "Autonomía de la voluntad: alcance y límites",
              open: false,
              text: "La autonomía privada permite pactar contenidos, pero encuentra límites en la ley, el orden público y la buena fe. Cláusulas abusivas, renuncias a derechos irrenunciables o pactos discriminatorios son inválidos. Los límites no niegan la libertad, la protegen frente a asimetrías y prácticas lesivas. Un contrato justo no es el que ‘todo vale’, sino el que nace de consentimiento informado y equilibrio razonable de prestaciones, supervisado por un marco heterónomo que tutela la confianza y la seguridad del tráfico.",
            },
            {
              type: "accordion",
              header: "Autoridad legítima y obediencia por convicción",
              open: false,
              text: "La obediencia inteligente surge cuando la autoridad se gana confianza: actúa con transparencia, rinde cuentas y escucha. En ese contexto, la heteronomía no es servilismo sino cooperación con reglas comunes. Cuando la ley pierde legitimidad, crece el incumplimiento estratégico. Por eso, fortalecer procedimientos democráticos, participación y control judicial no sólo ‘limita’ al poder: también multiplica la autonomía ciudadana y hace sostenible la obediencia al Derecho como acto de convicción.",
            },
          ],
          subthemes: [],
        },
      ],
    },

    /* ── Unidad 3 ─ Tipos de Derecho ─ */
    {
      id: "3",
      numbering: "Unidad 3",
      title: "Tipos de Derecho",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad introduce tres pares de distinciones imprescindibles para pensar el fenómeno jurídico con precisión: derecho objetivo y derecho subjetivo; derecho vigente y derecho positivo; y derecho positivo y derecho natural. Comprenderlas no es un ejercicio meramente teórico: permite leer con rigor un texto legal, redactar con propiedad y argumentar sin ambigüedades. Llamamos Derecho (objetivo) al conjunto de normas que rigen la vida social en un tiempo y lugar; hablamos de derechos (subjetivos) cuando nos referimos a las facultades que esas normas confieren a las personas. Del mismo modo, distinguimos entre la norma escrita por el legislador (derecho positivo) y el subconjunto de esas normas que actualmente está en vigor (derecho vigente). Finalmente, contrastamos al derecho positivo con el derecho natural, que postula principios universales previos o superiores a la legislación positiva. A lo largo de la unidad usaremos ejemplos cotidianos y forenses para fijar cada noción y la correlación entre ellas, preparando al estudiante para identificar su uso correcto en casos reales y en doctrina. :contentReference[oaicite:0]{index=0}",
        },
        {
          type: "paragraph",
          text: "Derecho objetivo y derecho subjetivo forman una pareja conceptual que suele confundirse en el lenguaje común. El derecho objetivo es el sistema de normas que permiten, prohíben u obligan conductas; es decir, EL Derecho como fenómeno normativo vigente en una comunidad política. El derecho subjetivo, en cambio, es la facultad concreta que una persona obtiene porque así lo prevé el derecho objetivo: derecho al trabajo, a la educación, a la propiedad, a la tutela judicial, al libre tránsito. De ahí que se diga que el derecho subjetivo deriva del objetivo: sin una norma que lo reconozca, la facultad no nace ni es exigible. En la práctica profesional, esta distinción ordena la argumentación: cuando invocamos un derecho (subjetivo) debemos anclarlo en su fundamento de validez (la norma del derecho objetivo). Como regla mnemónica, muchos autores recomiendan escribir “Derecho” con mayúscula inicial para aludir al objetivo, y “derechos” en minúscula para las facultades, evitando equívocos en escritos y resoluciones. :contentReference[oaicite:1]{index=1}",
        },
        {
          type: "paragraph",
          text: "La diferencia entre derecho vigente y derecho positivo agrega la dimensión temporal y de validez formal. Derecho positivo es todo el conjunto de normas que han sido creadas por la autoridad competente mediante el proceso legislativo: están escritas, promulgadas y publicadas; son, por así decirlo, el inventario de leyes de un ordenamiento. Derecho vigente es el subconjunto de ese inventario que actualmente rige: normas no derogadas ni abrogadas y aplicables en el territorio y tiempo considerados. En términos prácticos, una ley puede ser positiva (existe en el sistema) pero no vigente (ya fue derogada o ha caducado su aplicación); inversamente, para ser vigente necesariamente pertenece al derecho positivo. Esta distinción obliga a verificar fechas de publicación, reformas y cláusulas transitorias antes de invocar una norma. Asimismo, recuerda que la eficacia social (que la gente efectivamente cumpla la ley) no se confunde con la vigencia jurídica: hay normas vigentes con baja observancia y normas no vigentes que aún influyen culturalmente. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "paragraph",
          text: "El contraste entre derecho positivo y derecho natural remite a una cuestión fundacional: ¿qué hace válida o justa una norma? El iuspositivismo sostiene que la validez proviene de su creación conforme a procedimiento por autoridad competente; así, una norma puede ser válida aunque discutamos su justicia. El iusnaturalismo, en cambio, apela a principios universales y atemporales derivados de la dignidad humana o de la razón práctica, que sirven de parámetro para juzgar leyes positivas y reclamar su reforma cuando las contrarían. En la docencia jurídica conviene evitar caricaturas: el profesional del Derecho navega entre ambos planos. Invoca normas positivas para resolver casos, pero también recurre a principios (igualdad, libertad, justicia) al interpretar lagunas o tensiones. En esta unidad estudiarás ejemplos donde se cruzan ambas perspectivas y el célebre diagrama que combina positividad, vigencia y naturalidad para pensar escenarios como “ley vigente e injusta” o “principio natural no positivizado”, útiles para el razonamiento crítico. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "paragraph",
          text: "Operativamente, estas clasificaciones te ayudan a diagnosticar con rapidez qué debes probar y cómo debes argumentar. Si invocas un derecho subjetivo, identifica su anclaje en el Derecho objetivo aplicable y demuestra la vigencia de la norma que lo reconoce (fechas, reformas, competencia). Si sostienes que una disposición no debe aplicarse tal como está redactada, argumenta su interpretación conforme a principios superiores o derechos humanos, explicitando el puente entre derecho natural y positivo (control de convencionalidad, test de proporcionalidad, precedentes). En investigación y redacción, rotula con cuidado cada concepto y cita con exactitud la fuente formal (ley, reglamento) o interpretativa (jurisprudencia), recordando que en nuestro ordenamiento la única fuente formal plenamente válida es el proceso legislativo; la costumbre y la jurisprudencia cumplen funciones auxiliares o interpretativas. Con estas herramientas conceptuales, tu lectura de casos y textos normativos ganará precisión y profundidad desde el inicio de la carrera. :contentReference[oaicite:4]{index=4}",
        },

        /* ── Acordeones (texto en párrafos largos) ── */
        {
          type: "accordion",
          header: "Objetivo vs. subjetivo: correlación práctica",
          open: false,
          text: "En la práctica forense, la correlación objetivo–subjetivo se traduce en una estructura de alegato muy concreta: (1) identificas el derecho subjetivo que pretendes (p. ej., acceso a la información, libertad de tránsito, indemnización); (2) localizas la norma de Derecho (objetivo) que lo confiere, con su artículo y fracción; (3) demuestras la vigencia temporal y espacial de esa norma; (4) acreditas los hechos que activan la hipótesis normativa; y (5) solicitas la consecuencia jurídica. Esta ruta evita confundir deseos con derechos y te obliga a distinguir nítidamente entre la pretensión y su fundamento. Además, permite mostrar al juzgador que no sólo reclamas una prerrogativa, sino que derivas tu facultad de una regla vigente del sistema, reforzando la coherencia del escrito. :contentReference[oaicite:5]{index=5}",
        },
        {
          type: "accordion",
          header: "Vigencia, positividad y técnica de citación",
          open: false,
          text: "Citar bien no es un formalismo: es condición de validez del argumento. Primero verifica si la norma está vigente (no basta con que sea positiva). Revisa reformas, derogaciones y transitorios. Luego, sitúa la norma en su jerarquía (constitución, ley, reglamento) y territorio. Finalmente, conecta el texto con el tiempo del caso (hechos ocurridos bajo cuál versión). Esta técnica evita invocar preceptos derogados o fuera de competencia y te da control sobre la narrativa temporal. Recuerda que el derecho positivo puede no ser vigente y que la eficacia social es un asunto distinto a la vigencia jurídica; no confundas obediencia con validez. :contentReference[oaicite:6]{index=6}",
        },
        {
          type: "accordion",
          header: "Natural vs. positivo: uso razonado en aula y foro",
          open: false,
          text: "El contraste natural–positivo es fértil si lo usas con método. Cuando encuentres una norma positiva que parece injusta o desproporcionada, formula el problema como tensión entre texto legal y principios superiores (dignidad, igualdad, libertad) y utiliza herramientas interpretativas aceptadas: interpretación conforme, test de proporcionalidad, control difuso o de convencionalidad según el foro competente. A la inversa, si invocas un principio sin anclaje normativo, explica cómo se positiviza (constitución, tratados, leyes generales) para que no quede en mera retórica. Así, el diálogo entre ambas nociones deja de ser abstracto y se convierte en una guía operativa para decidir casos difíciles con parámetros verificables. :contentReference[oaicite:7]{index=7}",
        },
      ],
      subthemes: [
        {
          id: "3.1",
          numbering: "3.1",
          title: "Derecho objetivo y subjetivo",
          content: [
            {
              type: "paragraph",
              text: "La distinción entre derecho objetivo y derecho subjetivo constituye el punto de partida para un uso técnico del vocabulario jurídico. El derecho objetivo designa el conjunto de normas jurídicas vigentes en un tiempo y territorio determinados: reglas que obligan, permiten o prohíben conductas y que, en su conjunto, estructuran la vida social (por eso, en redacción académica suele escribirse con mayúscula inicial: el Derecho). Desde esta perspectiva, hablar del derecho objetivo mexicano es referirnos al sistema normativo que organiza el orden democrático y define instituciones, competencias y garantías. El derecho subjetivo, en cambio, es la facultad o pretensión que la norma del derecho objetivo atribuye a un sujeto: el ‘tener derecho’ al trabajo, a la educación o a la propiedad surge precisamente porque una norma previa reconoce y delimita esa prerrogativa. En términos de correlación, el derecho subjetivo depende lógicamente del objetivo: no hay facultad sin norma que la reconozca. Comprender esta correlación evita confusiones frecuentes —por ejemplo, identificar cualquier expectativa moral como ‘derecho’— y obliga a anclar las pretensiones en fuentes positivas. Así, la técnica jurídica formará hábitos de lectura: localizar la norma fuente, identificar el supuesto de hecho y verificar si, en ese marco, nace una facultad exigible o solo una expectativa legítima. En suma, la diferencia no es meramente semántica; es estructural para razonar casos y escribir con precisión profesional. :contentReference[oaicite:0]{index=0}",
            },

            /* imagen ubicada entre párrafos (el PDF inserta recurso gráfico antes del tema 3) */
            {
              type: "image",
              src: "https://i.ytimg.com/vi/uPxZ8ut7lDs/sddefault.jpg",
              alt: "Representación visual de ‘Tipos de Derecho’ utilizada en el material de clase",
              caption: "Referencia visual del tema 3 en el material docente.",
            },

            {
              type: "paragraph",
              text: "El desarrollo doctrinal de esta pareja conceptual suele apoyarse en ejemplos claros para fijar su uso. Si decimos: ‘El Derecho mexicano prevé la acción de amparo’, hablamos del fenómeno normativo objetivo —el conjunto de reglas que crean y regulan la institución—. Cuando en un caso concreto afirmamos: ‘La persona X tiene derecho a ser protegida en su libertad personal’, estamos invocando una facultad subjetiva que deriva del marco normativo objetivo y que, por tanto, exige verificar su procedencia: competencia, procedimiento, plazos y, sobre todo, supuesto de hecho. La didáctica del tema insiste también en criterios de redacción: usar “Derecho” con mayúscula para la disciplina o el sistema de normas, y “derechos” con minúscula para las facultades subjetivas; citar norma-fuente antes de formular la pretensión; y distinguir deseo o interés de derecho exigible. Finalmente, la correlación entre deberes y facultades se traduce en estructura procesal: toda facultad subjetiva correlaciona con un deber jurídico (p. ej., de respetar, de dar o de hacer), lo que habilita la exigibilidad bilateral propia del ordenamiento. Esta claridad conceptual mejora la argumentación y evita errores comunes en exámenes y escritos forenses. :contentReference[oaicite:1]{index=1}",
            },

            /* acordeones en formato-parrafo extendido */
            {
              type: "accordion",
              header: "Ejemplos prácticos y correlación deber–facultad",
              open: false,
              text: "Imagina una ley estatal que reconoce el derecho a la información pública. Como derecho objetivo, el ordenamiento contiene artículos que regulan sujetos obligados, procedimientos y plazos de respuesta. Cuando una persona solicita un documento y la autoridad niega el acceso sin causa legal, se activa el derecho subjetivo a impugnar la negativa. La facultad del solicitante (derecho subjetivo) existe porque la norma (derecho objetivo) la reconoce y le da cauce procesal. Otro ejemplo: el derecho al libre tránsito. Objetivamente, la Constitución lo declara y la legislación secundaria lo reglamenta; subjetivamente, cada persona puede oponerlo frente a limitaciones injustificadas. En ambos casos, el análisis inicia localizando la norma-fuente (constitución, ley, reglamento), sigue con la verificación del supuesto de hecho, y culmina con la identificación del remedio idóneo. Este entrenamiento evita confundir convicciones morales con ‘derechos’ y conduce a estrategias jurídicas efectivas. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "accordion",
              header: "Criterios de redacción académica y forense",
              open: false,
              text: "Para escribir con precisión: 1) cuando te refieras al sistema normativo o a la disciplina, utiliza ‘Derecho’ (mayúscula inicial); si aludes a facultades concretas, usa ‘derechos’ (minúscula). 2) Ancla toda afirmación en una norma-fuente; evita construir ‘derechos’ desde preferencias morales. 3) Expón la correlación: toda facultad presupone un deber; explicítalo. 4) Diferencia pretensión de expectativa: no toda conveniencia es exigible. 5) Ordena el argumento en tres pasos: norma aplicable, hechos del caso, conclusión (nace/no nace la facultad). Estos hábitos mejoran la claridad y la defensa de casos reales y son consistentes con la enseñanza clásica del tema en la doctrina de referencia. :contentReference[oaicite:3]{index=3}",
            },
          ],
        },

        /* 3.2 Derecho vigente y positivo */
        {
          id: "3.2",
          numbering: "3.2",
          title: "Derecho vigente y positivo",
          content: [
            {
              type: "paragraph",
              text: "La pareja vigente/positivo introduce una segunda distinción clave: el derecho positivo es el conjunto de normas puestas por la autoridad competente —leyes, reglamentos, decretos—, mientras que el derecho vigente es la porción del derecho positivo actualmente aplicable, no derogada ni abrogada, con eficacia en un tiempo y territorio concretos. Decir que una norma es positiva no garantiza que esté viva en el ordenamiento; puede haber sido sustituida o carecer de vigencia por una nueva disposición. Por ello, el razonamiento jurídico operativo exige siempre un chequeo de vigencia: identificar fecha de publicación, entrada en vigor, reformas, derogaciones y, en su caso, disposiciones transitorias. Esta distinción revela un dato pedagógico importante: estudiar solo ‘lo que dice el libro’ sin revisar vigencia conduce a errores prácticos graves. En el aula, el material insiste en que el derecho positivo es público, coercible y dinámico; pero su aplicación depende de la vigencia real de cada regla. :contentReference[oaicite:4]{index=4}",
            },
            {
              type: "paragraph",
              text: "Desde la práctica profesional, la categoría de vigencia conecta con la seguridad jurídica: los particulares deben poder conocer anticipadamente qué reglas les obligan hoy. Así, el jurista contrasta la literalidad de la norma con su estado actual en diarios oficiales y repositorios autorizados. Esto repercute en la argumentación: al citar, se consigna no solo la ley y su artículo, sino también la versión aplicable (fecha de reforma) y, de ser preciso, la regla de derecho transitorio. Por otro lado, la relación entre ambas nociones permite entender que el cambio social y político reconfigura el derecho positivo, pero la técnica de vigencia selecciona qué fragmentos operan efectivamente en un momento dado. En síntesis: el derecho positivo responde a la pregunta ‘¿qué se ha puesto por la autoridad?’, y el derecho vigente a ‘¿qué parte de ello es aplicable ahora?’. Esta disciplina metodológica evita invocar normas muertas y fortalece la coherencia del razonamiento jurídico. :contentReference[oaicite:5]{index=5}",
            },
            {
              type: "accordion",
              header: "Cuadro comparativo narrado",
              open: false,
              text: "Derecho positivo: conjunto de normas escritas por el legislador (coercibles, públicas, cambiantes). Derecho vigente: subconjunto del derecho positivo que está en vigor (no derogado, con eficacia temporal y territorial). Indicadores operativos: el positivo responde a la fuente formal; la vigencia, al factor tiempo. Riesgo típico: citar reglas positivas no vigentes. Buenas prácticas: verificar reformas y transitorios, usar compilaciones oficiales y anotar fecha de versión. Resultado: seguridad jurídica y argumentos ajustados a la norma aplicable. :contentReference[oaicite:6]{index=6}",
            },
            {
              type: "accordion",
              header: "Preguntas guía para casos",
              open: false,
              text: "1) ¿Cuál es la ley aplicable por materia y territorio? 2) ¿Qué versión (reforma) estaba vigente al momento de los hechos? 3) ¿Existe disposición transitoria que altere la entrada en vigor o el régimen de aplicación? 4) ¿La norma fue derogada expresa o tácitamente? 5) ¿Hay jurisprudencia que oriente su interpretación sin sustituirla? Responder por escrito a estas preguntas antes de argumentar evita invocar normas fuera de tiempo y mejora la estrategia procesal. :contentReference[oaicite:7]{index=7}",
            },
          ],
        },

        /* 3.3 Derecho positivo y natural */
        {
          id: "3.3",
          numbering: "3.3",
          title: "Derecho positivo y natural",
          content: [
            {
              type: "paragraph",
              text: "La contraposición positivo/natural remite al fundamento de validez de las normas: el iuspositivismo ancla la juridicidad en el hecho de haber sido válidamente puestas por la autoridad competente, con independencia de su mayor o menor justicia; el iusnaturalismo, en cambio, postula principios universales y atemporales —propios de la naturaleza humana— que sirven como medida crítica del derecho positivo. Históricamente, estos enfoques se han influido mutuamente: el derecho positivo incorpora y positiviza valores (igualdad, libertad, dignidad), y el derecho natural reconoce la función ordenadora y garantista de la legislación. En la enseñanza del tema, el material propone distinguir origen (autoridad vs. razón moral), criterio de validez (procedimiento vs. justicia) y modo de conocimiento (texto normativo vs. reflexión práctica). Esta cartografía conceptual no es puramente teórica: en casos difíciles, la apelación a principios iusnaturalistas suele orientar la interpretación pro persona y la corrección de injusticias normativas persistentes. :contentReference[oaicite:8]{index=8}",
            },
            {
              type: "paragraph",
              text: "Un aporte didáctico clásico es el esquema de combinaciones sugerido por la tradición: lo óptimo sería la coincidencia entre lo natural, lo positivo y lo vigente; pero en la práctica encontramos normas positivas vigentes que se juzgan injustas, principios morales ampliamente aceptados pero no positivizados, e incluso reglas positivas no vigentes que conservan valor histórico o axiológico. Para razonar con solvencia, el alumno aprende a: 1) identificar el problema (¿conflicto entre literalidad y justicia?); 2) ubicar la fuente formal y su vigencia; 3) incorporar principios interpretativos (dignidad, igualdad, razonabilidad) que permitan ajustar la aplicación; y 4) distinguir lo que puede resolverse jurisdiccionalmente de lo que requiere reforma legislativa. Así, el contraste positivo/natural se vuelve una herramienta: depura argumentos, justifica decisiones y evita tanto el formalismo ciego como el moralismo sin anclaje normativo. En suma, el buen abogado combina respeto al procedimiento con sensibilidad por la justicia material. :contentReference[oaicite:9]{index=9}",
            },
            {
              type: "accordion",
              header: "Siete combinaciones posibles (lectura orientada)",
              open: false,
              text: "El material sugiere imaginar casos donde se combinen vigencia, positividad y justicia material: (a) positivo–vigente–justo; (b) positivo–vigente–injusto; (c) positivo–no vigente–justo; (d) positivo–no vigente–injusto; (e) no positivo–vigente (imposible por definición); (f) natural–no positivo–vigente (reivindicado por control difuso de convencionalidad y constitucionalidad cuando los principios se han incorporado en bloques de derechos); (g) natural–no positivo–no vigente (arquitectura moral pendiente de positivizar). El ejercicio no pretende fórmulas, sino entrenar la identificación de tensiones y rutas de solución (interpretación o reforma). :contentReference[oaicite:10]{index=10}",
            },
            {
              type: "accordion",
              header: "Heurística para casos difíciles",
              open: false,
              text: "Ante una norma positiva vigente cuestionada por su justicia: 1) verifica competencia y procedimiento (validez formal); 2) identifica derechos y principios aplicables (bloque constitucional y convencional); 3) aplica máxima interpretación pro persona; 4) contrasta fines y medios (proporcionalidad, razonabilidad); 5) decide si el conflicto es de interpretación (soluble judicialmente) o de diseño normativo (requiere reforma). Esta heurística, inspirada en la distinción positivo/natural, da estructura a alegatos y sentencias sin romper la separación de funciones entre legislador y juzgador. :contentReference[oaicite:11]{index=11}",
            },
          ],
        },
      ],
    },

    /* ── Unidad 4 ─ Fuentes del Derecho ─ */
    {
      id: "4",
      numbering: "Unidad 4",
      title: "Noción de fuente",
      content: [
        {
          type: "paragraph",
          text: "Hablar de “fuentes del Derecho” es preguntarnos por el origen de las normas que ordenan la vida social. La metáfora de la fuente es útil: remite al manantial del que brota algo. La doctrina distingue, con fines pedagógicos, fuentes reales, históricas y formales. Las reales son los hechos sociales, económicos y culturales que presionan para normar; las históricas son los documentos donde se plasma el Derecho de otros tiempos; y las formales son los procedimientos mediante los cuales se crean normas vigentes. En el contexto mexicano, el material subraya que la **única** fuente formal válida es el **proceso legislativo**; la costumbre y la jurisprudencia cumplen papeles relevantes, pero no sustituyen la vía legislativa como mecanismo de creación normativa. Esta delimitación evita confusiones: no todo aquello que influye en la vida jurídica “produce” Derecho en sentido técnico. Comprender la taxonomía de fuentes permite al estudiante situar correctamente qué inspira, qué documenta y qué efectivamente crea reglas obligatorias, reforzando los principios de certeza y seguridad jurídica cuando interpretamos o aplicamos una disposición. :contentReference[oaicite:0]{index=0}",
        },
        {
          type: "paragraph",
          text: "Las **fuentes reales** del Derecho son los factores y acontecimientos que inciden en el contenido de las normas. Movimientos sociales, transformaciones tecnológicas, cambios demográficos, nuevas sensibilidades en torno a la igualdad o a la protección de datos son ejemplos de hechos que “empujan” al legislador a actualizar el marco jurídico. El material explica que avances como el reconocimiento de derechos civiles o de nuevas formas de familia no surgen de la nada: responden a una realidad social que los exige y que, por tanto, alimenta la agenda normativa. Sin embargo, su papel es **determinante del contenido**, no de la forma: las fuentes reales no expiden por sí mismas reglas generales y obligatorias; requieren traducirse en iniciativas, debates y textos legales. Para el jurista, reconocer la fuerza de lo real evita lecturas “descontextualizadas” de la ley y mejora el diseño normativo: una buena técnica legislativa contrasta datos, impactos y valores colectivos antes de redactar. Así, la realidad no se impone como norma, pero sí **orienta** la forma en que el Derecho debe responder para organizar pacíficamente la convivencia y prevenir conflictos. :contentReference[oaicite:1]{index=1}",
        },
        {
          type: "paragraph",
          text: "Las **fuentes históricas** remiten a documentos y testimonios en los que se ha positivado el Derecho a lo largo del tiempo: códigos, constituciones, sentencias, tratados, compilaciones. En el material se citan ejemplos clásicos (del Código de Hammurabi a constituciones modernas) para subrayar dos ideas clave: primero, su valor didáctico, pues permiten rastrear cómo resolvieron otros pueblos problemas semejantes; segundo, su función de memoria institucional, útil para evitar errores y rescatar aciertos. Las fuentes históricas **no crean** Derecho vigente, pero sí influyen en la deliberación contemporánea ofreciendo modelos, advertencias y marcos comparados que enriquecen la argumentación. En el aula de Introducción al Estudio del Derecho, el uso de fuentes históricas entrena al estudiante en lectura crítica, analogía y distinción de contextos: no todo lo que fue es aplicable hoy, pero muchas instituciones conservan una lógica perdurable (v. gr., la idea de legalidad o de división de poderes). Entender esta capa histórica impide mitificar o desestimar tradiciones jurídicas y ayuda a justificar por qué ciertas soluciones siguen siendo razonables o, por el contrario, requieren reforma. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "paragraph",
          text: "La **costumbre** es una práctica social reiterada y tenida por jurídicamente obligatoria en la conciencia colectiva. El material la define con claridad: puede **ser reconocida** cuando no existe disposición legal aplicable, pero **no** puede prevalecer contra la ley. Esta precisión es fundamental en México: en ausencia de norma expresa, ciertos usos pueden operar como criterios auxiliares, siempre que no contravengan el texto legal. Por ello se insiste en distinguir entre su valor inspirador (aporta soluciones pragmáticas y ajustadas al contexto) y su carácter formal (limitado). Para efectos de técnica jurídica, la costumbre exige prueba de la práctica y de su convicción de obligatoriedad; además, suele requerir reconocimiento judicial. De ahí que el operador jurídico la trate como argumento **subsidiario** de interpretación o integración, y no como vía ordinaria de producción normativa. En suma, la costumbre ayuda a cerrar lagunas y a dotar de sentido a conductas estables, pero el cauce institucional para “hacer” Derecho sigue siendo el Legislativo. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "paragraph",
          text: "La **jurisprudencia** y el **proceso legislativo** cumplen funciones distintas. El material subraya que la jurisprudencia —construida por órganos jurisdiccionales al interpretar la ley— **no es** fuente formal creadora de Derecho: llena vacíos, clarifica ambigüedades y fija criterios obligatorios en los términos que la propia Constitución y las leyes procesales prevén, pero no sustituye al legislador. Por su parte, el **proceso legislativo** sí es la fuente formal por excelencia en México: comprende iniciativa, discusión, aprobación, sanción, publicación e inicio de vigencia (arts. 71 y 72 constitucionales), y es la vía por la cual se formulan normas generales y obligatorias. Esta arquitectura asegura legitimidad democrática, deliberación pública y control de calidad normativa; también impone límites al poder para evitar abusos. Para el estudiante, dominar esta distinción evita confundir la función interpretativa con la creadora, y permite ubicar cada producto (ley, precedente, norma consuetudinaria) en su jerarquía y efectos, garantizando así certeza y seguridad jurídica. :contentReference[oaicite:4]{index=4}",
        },

        /* ── Acordeones (3 niveles), con texto desarrollado ── */
        {
          type: "accordion",
          header: "Fuentes reales, históricas y formales: cómo se articulan",
          open: false,
          text: "Las fuentes reales proveen el ‘material’ (necesidades, conflictos, valores) que demanda regulación; las históricas brindan ejemplos y memoria para comparar soluciones; las formales convierten esa materia en normas vigentes. En el contexto mexicano, el material enfatiza que la formalidad se concentra en el proceso legislativo: sólo a través de él se crean reglas generales y obligatorias. Esta triada evita dos errores comunes: creer que todo cambio social es automáticamente Derecho (no lo es, si no pasa por el cauce legislativo) y, al revés, suponer que la ley puede ignorar la realidad y la experiencia histórica (si lo hace, será ineficaz). Para estudiar un tema, conviene mapear: ¿qué está pasando en la realidad (fuentes reales)? ¿qué aprendimos de otros momentos o sistemas (históricas)? ¿qué exige el procedimiento formal (iniciativa, discusión, aprobación, sanción, publicación, vigencia)? Este método alinea pertinencia social, coherencia técnica y validez formal. :contentReference[oaicite:5]{index=5}",
        },
        {
          type: "accordion",
          header: "Costumbre: uso subsidiario y límites frente a la ley",
          open: false,
          text: "La costumbre requiere repetición constante y convicción de obligatoriedad. Su utilidad práctica aparece cuando hay lagunas: orienta decisiones y aporta estándares que el legislador no previó. Pero el material es tajante: en México la costumbre no puede contravenir la ley; opera sólo en su ausencia y, típicamente, mediante reconocimiento judicial. ¿Qué significa en la práctica? Que un uso sectorial o local no basta si existe norma expresa en sentido contrario; y que, aun sin norma, la costumbre debe probarse (hecho y opinio iuris). En términos de técnica jurídica, es un criterio de **integración** o **interpretación**, no un atajo para crear reglas generales. Por ello se recomienda tratarla como argumento auxiliar, complementario de la literalidad, sistematicidad y teleología de la norma. Entender estos límites fortalece la seguridad jurídica y evita que prácticas informales erosionen el principio de legalidad. :contentReference[oaicite:6]{index=6}",
        },
        {
          type: "accordion",
          header: "Jurisprudencia vs. ley: interpretación y creación normativa",
          open: false,
          text: "La jurisprudencia cumple una función calificadamente interpretativa: armoniza textos, resuelve contradicciones y fija criterios obligatorios dentro de los cauces que la Constitución reconoce a los tribunales. El material insiste en que no ‘legisla’: su fuerza dimana de interpretar y aplicar el Derecho vigente, no de crearlo. La ley, en cambio, emana del proceso legislativo (iniciativa, discusión, aprobación, sanción, publicación e inicio de vigencia) y produce normas generales. ¿Cómo se relacionan? La ley establece el marco; la jurisprudencia lo hace operativo y coherente en casos concretos, especialmente cuando hay ambigüedad o laguna. Este reparto de funciones equilibra democracia y técnica: representación popular para crear, profesionalización judicial para interpretar. Para el operador jurídico, distinguir ambos planos es clave: invocar jurisprudencia no suple la falta de ley, y la reforma legal no se justifica sólo por un criterio judicial aislado. La calidad del sistema depende de respetar este equilibrio. :contentReference[oaicite:7]{index=7}",
        },
      ],
      subthemes: [
        /* 4.1 Fuentes del Derecho */
        {
          id: "4.1",
          numbering: "4.1",
          title: "Fuentes del Derecho",
          content: [
            {
              type: "paragraph",
              text:
                "Hablar de “fuentes del Derecho” es responder a la pregunta ¿de dónde surge el Derecho?; por eso, la metáfora de la fuente indica el punto de origen del que mana la normatividad que ordena la vida social. En el marco expositivo del módulo, se distinguen tres grandes familias: las fuentes históricas, las fuentes reales y las fuentes formales. Las primeras refieren a documentos, cuerpos legales y materiales del pasado (por ejemplo, el Código de Hammurabi, la legislación mosaica o constituciones modernas) que permiten reconstruir cómo se han producido y aplicado reglas en sociedades de distintos tiempos; no crean por sí mismas Derecho vigente, pero informan y orientan su elaboración. Las fuentes reales, por su parte, son los factores sociales, económicos, políticos o culturales que presionan por la aparición de nuevas normas o la reforma de las existentes (piénsese en los cambios de mentalidad respecto a igualdad de género, derechos civiles, privacidad o entornos digitales). Finalmente, las fuentes formales aluden a los procedimientos a través de los cuales una norma adquiere existencia jurídica válida; en el caso mexicano, el material destaca que, en sentido estricto, la única fuente formal plena es el proceso legislativo, mientras que costumbre y jurisprudencia funcionan con alcances más acotados y en términos auxiliares o inspiracionales, sin desplazar la centralidad de la ley. Esta clasificación ayuda a no confundir origen sociológico, antecedentes documentales y vías jurídico-positivas de producción normativa." +
                " :contentReference[oaicite:0]{index=0}",
            },

            {
              type: "paragraph",
              text:
                "Profundizar en estas distinciones evita errores frecuentes en la práctica. Por ejemplo, llamar “fuente formal” a todo aquello que incide en el Derecho diluye la diferencia entre lo que simplemente inspira (fuente real), lo que ofrece testimonio histórico (fuente histórica) y lo que verdaderamente crea normas obligatorias (fuente formal). En México, el proceso legislativo –del que resultan leyes generales, federales o locales– es el mecanismo dotado de legitimidad democrática y validez normativo-formal, porque sigue etapas constitucionalmente previstas (iniciativa, discusión, aprobación, sanción, publicación e inicio de vigencia). A su vez, la costumbre puede tener recepción en ausencia de ley expresa, pero no puede contrariarla; y la jurisprudencia, aunque guía e integra, opera primariamente como interpretación calificada de la ley por órganos jurisdiccionales, no como fuente creadora originaria en el mismo plano que el legislador. La utilidad didáctica de la tríada histórica-real-formal está en ubicar el “cómo”, el “por qué” y el “de dónde” del fenómeno jurídico, distinguiendo el plano de la sociología del Derecho (condiciones reales), el de la historia constitucional (documentos y experiencias) y el de la teoría del ordenamiento (procedimientos válidos de producción normativa)." +
                " :contentReference[oaicite:1]{index=1}",
            },

            {
              type: "paragraph",
              text:
                "Desde una perspectiva práctica, esta cartografía conceptual ofrece criterios para resolver casos: cuando aparece un problema nuevo (v.gr., protección de datos, IA, ciberacoso), primero se indagan las fuentes reales (qué hechos sociales reclaman regulación), luego se revisan fuentes históricas (antecedentes comparados y domésticos) y, finalmente, se acude a la fuente formal por excelencia (legislación) para determinar si existe norma aplicable o es necesaria su creación o reforma. En ausencia de ley, la costumbre podría operar supletoriamente si el propio sistema la reconoce, pero jamás en contra de la norma escrita. La jurisprudencia, por su parte, interpreta y armoniza el derecho vigente, colmando lagunas o precisando conceptos indeterminados, pero siempre dentro del marco que el proceso legislativo produjo. Comprender esta jerarquía evita confundir pautas sociales con obligaciones jurídicas o precedentes judiciales con legislación, y promueve decisiones más fundadas de autoridades, litigantes y operadores jurídicos en general." +
                " :contentReference[oaicite:2]{index=2}",
            },

            {
              type: "image",
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWxtrEtFiQ0qmrsQta3X99f5CcMHiPkucQw&s",
              alt: "Esquema didáctico de clasificación de las fuentes del Derecho (históricas, reales y formales).",
              caption:
                "Clasificación y tipos de las fuentes del Derecho (material del módulo). " +
                ":contentReference[oaicite:3]{index=3}",
            },

            {
              type: "paragraph",
              text:
                "En el texto de la unidad se subraya, además, un punto de método: la palabra “fuente” se usa a veces indiscriminadamente. Para evitar ambigüedad, conviene reservar “fuentes formales” para las vías de producción normativa previstas por el ordenamiento (en nuestro régimen, la legislación); “fuentes reales” para los condicionamientos fácticos que presionan la producción o modificación de normas; y “fuentes históricas” para testimonios documentales que permiten conocer el Derecho del pasado. Así, cuando un tribunal construye un criterio de interpretación, genera jurisprudencia que incidirá en decisiones futuras; no obstante, si el legislador reforma la ley, la fuente formal prevalece. A su vez, una práctica consuetudinaria puede ser elevada a ley (lo real deviene formal), pero mientras no se legisle, su fuerza estará condicionada a la apertura que el sistema reconozca. Este marco conceptual, más que una taxonomía rígida, es una guía operativa para razonar con precisión sobre qué “tipo de fuente” estamos invocando al argumentar." +
                " :contentReference[oaicite:4]{index=4}",
            },

            {
              type: "paragraph",
              text:
                "Finalmente, la unidad recuerda que el predominio de la legislación como fuente formal responde a razones democráticas y de seguridad jurídica: los ciudadanos conocen por publicación oficial qué está vigente, quién lo aprobó y bajo qué procedimiento; los poderes públicos aplican normas claras con criterios de generalidad y abstracción; y el control constitucional puede examinar su validez. En este esquema, las otras vías –costumbre y jurisprudencia– adquieren relevancia integradora, interpretativa o supletoria, pero sin desplazar a la ley. La moraleja es doble: (a) distinguir la fuerza normativa según el tipo de fuente invocada y (b) articular argumentos que, al usar historia y realidad, desemboquen en el cauce formal propio del Estado de Derecho. Esa es, precisamente, la clave para conjugar cambio social con legalidad, evitando que la práctica o el precedente suplanten ilegítimamente la potestad legislativa." +
                " :contentReference[oaicite:5]{index=5}",
            },

            {
              type: "accordion",
              header:
                "Fuentes históricas y reales: ¿para qué sirven en la práctica?",
              open: false,
              text:
                "Las fuentes históricas no obligan por sí mismas, pero cumplen un papel pedagógico y hermenéutico: permiten comparar soluciones, advertir riesgos y reconocer principios estables. Piensa en cómo constituciones o códigos de otros periodos muestran la evolución de derechos y de técnicas legislativas. Las fuentes reales, en cambio, son el pulso de la sociedad: problemas económicos, transformaciones tecnológicas o cambios culturales que exigen respuestas jurídicas. En litigio o asesoría, esta distinción te ayuda a construir argumentos: apoyarte en historia comparada para justificar por qué una reforma es deseable y en evidencia social para mostrar que es necesaria. El último paso, sin embargo, es siempre formal: convertir el diagnóstico en norma válida mediante el proceso legislativo, o en su defecto, acudir a interpretación judicial coherente con el sistema. Así, historia y realidad “alimentan” el Derecho sin suplantarlo." +
                " :contentReference[oaicite:6]{index=6}",
            },
            {
              type: "accordion",
              header: "La primacía del proceso legislativo",
              open: false,
              text:
                "El material enfatiza que, en México, la fuente formal por excelencia es la legislación, por razones de legitimidad democrática, publicidad, abstracción y control de constitucionalidad. De ahí que costumbre y jurisprudencia operen como apoyos: la primera, de modo supletorio y nunca contra legem; la segunda, como pauta interpretativa cualificada por órganos jurisdiccionales. La jerarquía práctica es clara: la ley fija la regla general; la jurisprudencia aclara su sentido y cierra lagunas; la costumbre ilumina o complementa cuando el sistema lo permite. En términos de técnica jurídica, esto te obliga a ordenar tus argumentos: ¿existe ley aplicable? ¿qué dicen los criterios jurisprudenciales? ¿hay prácticas consuetudinarias relevantes y compatibles? Solo después de mapear estas capas podrás argumentar con precisión ante una autoridad o diseñar una política pública con sustento normativo." +
                " :contentReference[oaicite:7]{index=7}",
            },
          ],
        },

        /* 4.2 La costumbre */
        {
          id: "4.2",
          numbering: "4.2",
          title: "La costumbre",
          content: [
            {
              type: "paragraph",
              text:
                "La costumbre es una práctica social reiterada y aceptada que, bajo ciertas condiciones, puede adquirir relevancia jurídica. El texto del módulo precisa que se trata de normas no escritas que se imponen por el uso constante, pero advierte un límite cardinal: la costumbre no puede prevalecer frente a la ley; sólo opera, en su caso, a falta de disposición expresa o cuando el propio ordenamiento la reconoce. Esto significa que su función ordinaria es supletoria o integradora, nunca derogatoria de la norma escrita. En México, hay supuestos donde la legislación permite atender a usos y costumbres (por ejemplo, en ámbitos comunitarios), pero ello no supone que cualquier hábito social sea jurídicamente vinculante: se requiere reconocimiento del sistema y compatibilidad con derechos fundamentales. La enseñanza práctica es doble: (1) no invocar la costumbre contra legem y (2) justificar su vigencia probando la reiteración de la práctica, su aceptación social y el “animus” de obligatoriedad." +
                " :contentReference[oaicite:8]{index=8}",
            },

            {
              type: "paragraph",
              text:
                "Desde la perspectiva probatoria, la costumbre exige demostración empírica: continuidad temporal, generalidad en la comunidad pertinente y convicción de obligatoriedad (opinio iuris sive necessitatis). Aun cuando el material no entra en tecnicismos procesales, sí marca la idea de que la costumbre, más que fuente formal en sentido estricto, suele inspirar la creación legislativa o servir de criterio de integración cuando la ley guarda silencio. Por eso, es pedagógicamente útil leer la costumbre con “doble lente”: como dato sociológico que empuja a legislar y como pauta que el sistema puede recibir de manera condicionada. En contextos contemporáneos, su papel crece en materias donde la regulación llega tarde o en ámbitos interculturales, pero sin perder de vista que el parámetro de validez final es el bloque de constitucionalidad y los tratados de derechos humanos." +
                " :contentReference[oaicite:9]{index=9}",
            },

            {
              type: "paragraph",
              text:
                "Una objeción frecuente es: si muchas prácticas sociales resultan ineficientes o incluso injustas, ¿por qué darles estatus jurídico? La respuesta reside precisamente en los filtros del sistema: reconocimiento legal expreso, compatibilidad con principios superiores y posibilidad de control jurisdiccional. La costumbre puede aportar soluciones pragmáticas en sectores productivos o comunidades locales, pero cuando es contraria a la ley o lesiona derechos, queda desplazada. Esta arquitectura evita el “gobierno del hábito” sin control democrático. A su vez, si una costumbre demuestra utilidad y legitimidad, el camino institucional correcto suele ser convertirla en ley, convirtiendo lo real en formal. Así, la costumbre opera como laboratorio social del Derecho: detecta prácticas eficientes, las pone a prueba y, de ser el caso, se positivizan por el cauce legislativo." +
                " :contentReference[oaicite:10]{index=10}",
            },

            {
              type: "image",
              src: "https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__a1af5c4b-3582-4835-9892-8b80f14caa4f&w=3840&q=75",
              alt: "Representación de usos y costumbres aceptados por una comunidad.",
              caption:
                "La costumbre como práctica social reiterada y aceptada; opera supletoriamente y nunca contra legem. " +
                ":contentReference[oaicite:11]{index=11}",
            },

            {
              type: "paragraph",
              text:
                "En la práctica forense, invocar costumbre requiere estrategia: delimitar el ámbito social donde existe (sector, territorio, gremio), especificar su contenido con precisión, demostrar consistencia y antigüedad, y probar que no contradice ley vigente ni derechos fundamentales. Donde la ley admite supletoriamente la costumbre (v.gr., usos mercantiles), la argumentación debe acompañarse de dictámenes periciales o pruebas documentales que acrediten su existencia. En cambio, si la ley regula exhaustivamente la materia, no hay espacio para la costumbre salvo como insumo histórico para reformas. Este enfoque evita “elevar” prácticas oportunistas a norma y preserva la seguridad jurídica, a la vez que permite que el Derecho dialogue con realidades vivas y cambiantes, especialmente en contextos interculturales." +
                " :contentReference[oaicite:12]{index=12}",
            },

            {
              type: "paragraph",
              text:
                "Una última nota didáctica del módulo enfatiza que la costumbre sirve más como inspiración que como fuente formal. Por ello, su estudio es obligado en cursos de introducción, no para absolutizar su fuerza, sino para ubicarla en el ecosistema normativo: recordar que la ley es la regla; la costumbre, la excepción condicionada. Esta brújula intelectual ayuda a evitar errores comunes (p.ej., confundir hábitos administrativos con normas válidas) y refuerza virtudes profesionales: prudencia argumentativa, atención a la evidencia social y respeto por la supremacía constitucional. En suma, la costumbre es relevante porque muestra cómo la vida social puede encaminar al legislador y cómo, en grietas del sistema, puede integrar soluciones prácticas, siempre que el propio ordenamiento lo permita." +
                " :contentReference[oaicite:13]{index=13}",
            },

            {
              type: "accordion",
              header: "Costumbre: requisitos y límites",
              open: false,
              text:
                "Requisitos: reiteración de la práctica, generalidad en el grupo social pertinente y convicción de obligatoriedad. Límite cardinal: nunca prevalece frente a la ley; opera, a lo sumo, de modo supletorio cuando el sistema lo reconoce. En clave operativa: (1) probar su existencia con evidencia robusta; (2) demostrar su compatibilidad con el orden constitucional; (3) justificar su pertinencia en ausencia de regulación expresa. En clave de política legislativa: convertir prácticas eficientes y legítimas en normas escritas para dotarlas de certeza y control democrático." +
                " :contentReference[oaicite:14]{index=14}",
            },
            {
              type: "accordion",
              header: "Costumbre, historia y legislación",
              open: false,
              text:
                "El material sugiere leer la costumbre como un puente entre historia y ley: prácticas comunitarias o sectoriales exitosas suelen operar como “pilotos” de regulación; su sistematización y evaluación comparada nutren la iniciativa legislativa; la promulgación, a su vez, transforma lo real en formal. Este itinerario mantiene el equilibrio entre cambio social y seguridad jurídica: la costumbre orienta, la historia documenta, la ley valida." +
                " :contentReference[oaicite:15]{index=15}",
            },
          ],
        },
        /* 4.3 La jurisprudencia */
        {
          id: "4.3",
          numbering: "4.3",
          title: "La jurisprudencia",
          content: [
            {
              type: "paragraph",
              text: "La jurisprudencia es el conjunto de criterios interpretativos que emiten los órganos jurisdiccionales al resolver casos, y que orientan –y en ciertos supuestos vinculan– la aplicación del Derecho. Su razón de ser es práctica: el legislador no puede prever todas las situaciones ni definir cada término con exactitud; por ello, los jueces aclaran ambigüedades, colman lagunas y armonizan normas en conflicto. Desde una mirada dogmática, la jurisprudencia no es mera opinión: es una técnica para estabilizar significados y consolidar estándares de decisión, reduciendo la arbitrariedad y favoreciendo la seguridad jurídica. Pedagógicamente conviene distinguir el “qué” (el contenido del criterio), el “quién” (el órgano que lo emite), el “cómo” (el procedimiento de formación y publicación) y el “para qué” (sus efectos). En la práctica profesional, el abogado no solo cita la regla jurisprudencial; reconstruye el problema que resolvió, identifica la ratio decidendi –la razón esencial de la decisión– y argumenta su aplicabilidad al caso nuevo. De ese modo, la jurisprudencia opera como puente entre el texto legal y la vida social, actualizando a la ley sin sustituir al legislador y haciendo operativos principios y derechos que, a veces, el propio texto no desarrolla con detalle.",
            },
            {
              type: "paragraph",
              text: "Una comprensión madura de la jurisprudencia exige verla como parte de un diálogo institucional. La ley expresa la voluntad democrática en términos generales; la jurisprudencia, al interpretar, preserva esa voluntad y la hace compatible con el resto del ordenamiento. Por eso, su fuerza no deriva de imponerse “sobre” el legislador, sino de asegurar que la ley se aplique de manera coherente, razonable y proporcional. En la formación de criterios, los tribunales ponderan principios, consideran precedentes, atienden a los fines de la norma y evalúan las consecuencias prácticas de su decisión. Esta racionalidad práctica es clave: no se trata de literalismo rígido ni de voluntarismo judicial, sino de una hermenéutica responsable. En términos de método, la argumentación judicial suele explicitar: (i) el problema jurídico, (ii) la norma aplicable, (iii) la interpretación propuesta, (iv) la justificación normativa y fáctica, y (v) la conclusión y sus efectos. Cuanto más clara sea esa estructura, mayor previsibilidad ofrece a operadores jurídicos, administraciones y ciudadanía.",
            },
            {
              type: "paragraph",
              text: "La fuerza de la jurisprudencia también tiene límites. Primero, su ámbito de validez está acotado por el propio sistema: una interpretación no puede crear delitos, tributos u obligaciones ex nihilo ni contradecir frontalmente la Constitución. Segundo, la jurisprudencia es revisable: cambios en el contexto social, en la ciencia jurídica o en el entendimiento de derechos fundamentales pueden motivar la sustitución de criterios. Este dinamismo es deseable si está debidamente motivado, porque evita petrificar soluciones que dejaron de ser razonables. Tercero, su uso forense exige honestidad intelectual: extrapolar criterios a casos no análogos o citar fragmentos fuera de contexto debilita la defensa y confunde al juzgador. Finalmente, su vocación es integradora: armoniza leyes, reglamentos y principios, y ofrece un faro cuando el texto legal es insuficiente para resolver con justicia un problema concreto.",
            },

            {
              type: "image",
              src: "https://introduccionalestudiodelderechounivia.wordpress.com/wp-content/uploads/2013/12/shutterstock_135337985.jpg",
              alt: "Esquema del rol de la jurisprudencia entre Constitución, ley y caso concreto.",
              caption:
                "La jurisprudencia como puente entre la ley y los casos: interpreta, integra y estabiliza.",
            },

            {
              type: "paragraph",
              text: "En la enseñanza del Derecho conviene ejercitar tres destrezas con la jurisprudencia: lectura, comparación y aplicación. La lectura exige identificar la ratio decidendi y diferenciarla de obiter dicta (consideraciones accesorias); la comparación requiere confrontar criterios compatibles o contradictorios y justificar cuál prevalece; la aplicación demanda conectar hechos del caso actual con la regla jurisprudencial, explicando por qué la analogía es válida o cuándo corresponde distinguir. Estas destrezas fortalecen la práctica profesional porque convierten a la jurisprudencia en herramienta –no en amuleto–: un recurso argumentativo solvente que añade rigor al razonamiento. Para los órganos administrativos, conocer y seguir criterios firmes previene litigios y aumenta la calidad de sus actos. Para la ciudadanía, la jurisprudencia decantada reduce incertidumbre, pues permite anticipar cómo resolverán disputas similares los tribunales.",
            },
            {
              type: "paragraph",
              text: "Por último, la jurisprudencia favorece una cultura de derechos. Cuando los tribunales hacen explícitos los estándares de debido proceso, igualdad, razonabilidad o proporcionalidad, establecen límites a la actuación estatal y al poder privado. Esa estandarización protege a las personas en su vida cotidiana (trabajo, consumo, propiedad, salud, educación) y mejora la actuación de empresas y autoridades. Sin embargo, ninguna jurisprudencia sustituye la ética profesional: jueces, litigantes y servidores públicos deben operar con integridad, transparencia y rendición de cuentas. Así, la jurisprudencia no es un fin en sí mismo, sino un medio para garantizar que las promesas del Estado de Derecho se cumplan de manera efectiva y previsible.",
            },

            {
              type: "accordion",
              header: "Funciones prácticas de la jurisprudencia",
              open: false,
              text: "• Interpretar: fija el sentido de conceptos indeterminados y resuelve antinomias. • Integrar: colma lagunas normativas sin invadir la esfera del legislador. • Homogeneizar: alinea decisiones para brindar seguridad jurídica. • Garantizar derechos: concreta estándares de igualdad, debido proceso y proporcionalidad. • Orientar políticas públicas: al establecer límites y buenas prácticas en la actuación administrativa. Clave operativa: identificar la ratio decidendi, justificar la analogía con el caso y explicitar por qué el criterio conduce a una solución justa y constitucionalmente adecuada.",
            },
            {
              type: "accordion",
              header: "Errores frecuentes al invocar jurisprudencia",
              open: false,
              text: "1) Citar por autoridad sin explicar pertinencia. 2) Arrancar la frase de su contexto y cambiar el problema jurídico. 3) Ignorar criterios posteriores o más específicos. 4) Pretender que la jurisprudencia “derogue” la ley. 5) No distinguir entre motivos determinantes (ratio) y obiter dicta. Buenas prácticas: reconstruye el caso que originó el criterio, muestra la analogía con tu asunto, contrasta con criterios rivales y concluye por qué tu interpretación es la más coherente con la Constitución, la ley y las consecuencias prácticas.",
            },
          ],
        },

        /* 4.4 Proceso legislativo */
        {
          id: "4.4",
          numbering: "4.4",
          title: "Proceso legislativo",
          content: [
            {
              type: "paragraph",
              text: "El proceso legislativo es la vía formal por excelencia para crear, reformar o derogar normas generales y abstractas; en él descansa la legitimidad democrática del orden jurídico. Su finalidad es traducir necesidades sociales y principios constitucionales en reglas claras, públicas y controlables. Desde la teoría del Derecho, el proceso legislativo cumple funciones de racionalización (establece etapas y controles), participación (permite deliberación plural) y publicidad (asegura conocimiento general). Normativamente, se articula en fases que garantizan que la norma no sea producto de improvisación, sino de discusión informada y contraste de razones. Su centralidad explica por qué, en nuestro sistema, la ley prevalece como fuente formal: ofrece previsibilidad a ciudadanos y autoridades, habilita el control de constitucionalidad y delimita la actuación de los poderes públicos. Sin proceso legislativo, la regulación quedaría a merced de decisiones fragmentarias, poco transparentes o carentes de control democrático.",
            },
            {
              type: "paragraph",
              text: "Las etapas clásicas –que pueden variar en su diseño institucional– incluyen: (i) iniciativa: la propuesta de crear o reformar una norma, acompañada de diagnóstico y exposición de motivos; (ii) discusión: análisis técnico y político en comisiones y plenos, con posibilidad de audiencias y comparecencias; (iii) aprobación: votación de la propuesta en los órganos legislativos competentes; (iv) sanción o revisión: control adicional y eventual devolución con observaciones; (v) promulgación: acto que confiere validez a la ley aprobada; (vi) publicación: difusión oficial que posibilita su conocimiento general; y (vii) entrada en vigor: momento en que la norma deviene exigible. A estas fases se suman prácticas de calidad regulatoria: análisis de impacto, estudios comparados, consultas públicas y evaluación ex post. Cada fase tiene una racionalidad: evitar la arbitrariedad, abrir espacios de participación, mejorar la técnica normativa y optimizar los efectos de la ley.",
            },
            {
              type: "paragraph",
              text: "Un proceso legislativo robusto no se limita a sumar audiencias o páginas; exige metodología. Primero, definir con precisión el problema público y sus causas, evitando legislar por anécdota. Segundo, evaluar alternativas regulatorias (autorregulación, soft law, incentivos, sanciones, información) y escoger la más proporcional y eficaz. Tercero, construir definiciones operativas y tipologías que reduzcan ambigüedad y litigiosidad innecesaria. Cuarto, prever mecanismos de implementación realistas (capacidad institucional, presupuestos, calendarios) y diseñar indicadores para evaluar resultados. Quinto, incorporar cláusulas de revisión y caducidad cuando el fenómeno es volátil. Sexto, asegurar coherencia horizontal (con otras leyes) y vertical (con la Constitución y tratados), evitando redundancias y contradicciones. Sin estas cautelas, la ley puede multiplicar costos de cumplimiento, generar incentivos perversos o, simplemente, quedar en letra muerta.",
            },

            {
              type: "image",
              src: "https://cdn.slidesharecdn.com/ss_thumbnails/procesolegislativogrfico-160617232245-thumbnail.jpg?width=640&height=640&fit=bounds",
              alt: "Diagrama general de las etapas del proceso legislativo.",
              caption:
                "Iniciativa → discusión → aprobación → sanción/promulgación → publicación → vigencia. Calidad regulatoria transversal.",
            },

            {
              type: "paragraph",
              text: "El proceso legislativo dialoga con las otras fuentes: atiende a las fuentes reales (hechos sociales y necesidades), se nutre de fuentes históricas (experiencias comparadas) y convive con la jurisprudencia, que interpretará y aplicará la ley resultante. Este diálogo exige disciplina: el legislador no puede ceder a la tentación de sobre-regular ni a la de abdicar su responsabilidad en cláusulas abiertas que trasladen todo a los tribunales. Las normas deben ser claras, y a la par, lo suficientemente flexibles para permitir adaptación razonable por la interpretación judicial. Por su parte, la administración debe preparar la implementación con reglamentos, manuales y capacitación, sin desnaturalizar el sentido de la ley. La coordinación interinstitucional es clave para evitar “cuellos de botella” en la puesta en marcha y asegurar que el ciudadano perciba mejoras reales.",
            },
            {
              type: "paragraph",
              text: "La evaluación ex post cierra el círculo. Una vez vigente, la ley debe monitorearse con indicadores de cumplimiento, eficacia y efectos no deseados. Si la norma no resuelve el problema o produce externalidades negativas, corresponde ajustar o derogar. Este enfoque iterativo mejora la calidad institucional y refuerza la confianza pública: el Derecho deja de ser un instrumento estático y se convierte en política de aprendizaje. Finalmente, el proceso legislativo es una escuela cívica: cuando es transparente y participativo, enseña a la ciudadanía cómo se transforman sus necesidades en reglas y por qué las reglas merecen ser obedecidas. Cuando es opaco, fomenta desafección y resistencia. Por ello, más allá de su entramado técnico, el proceso legislativo es, también, un compromiso ético con la deliberación pública y la responsabilidad democrática.",
            },

            {
              type: "accordion",
              header: "Etapas del proceso legislativo (síntesis operativa)",
              open: false,
              text: "1) Iniciativa con diagnóstico y exposición de motivos. 2) Discusión en comisiones y plenos, con audiencias técnicas y ciudadanas. 3) Aprobación por mayoría conforme a reglas internas. 4) Sanción/revisión y eventuales observaciones. 5) Promulgación como acto que confiere validez. 6) Publicación oficial. 7) Entrada en vigor. Transversalmente: análisis de impacto regulatorio, técnica legislativa, coherencia normativa e indicadores para evaluación ex post.",
            },
            {
              type: "accordion",
              header: "Buenas prácticas de técnica legislativa",
              open: false,
              text: "• Definiciones claras y operativas. • Estructura lógica (objeto, ámbito, principios, competencias, procedimientos, sanciones). • Lenguaje preciso y no discriminatorio. • Evitar remisiones innecesarias y redundancias. • Compatibilidad con Constitución y tratados. • Disposiciones transitorias coherentes. • Mecanismos de revisión periódica. Resultado: leyes aplicables, comprensibles y evaluables, que reducen litigios y mejoran la confianza en las instituciones.",
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
          href: "https://www.youtube.com/watch?v=IjB12qr5xSk", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "DERECHO Y MORAL — YouTube https://www.youtube.com/watch?v=IjB12qr5xSk",
            "LAS FUENTES DEL DERECHO Y SU CLASIFICACIÓN — YouTube https://www.youtube.com/watch?v=179qUdvHUNo",
            "El sistema jurídico mexicano — SCJN (PDF) https://www.scjn.gob.mx/sites/default/files/material_didactico/2016-11/Sistema-Juridico-Mexicano.pdf",
            "Diferencias entre derecho objetivo y derecho subjetivo — LP Derecho https://lpderecho.pe/diferencias-derecho-objetivo-subjetivo/",
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
            "Álvarez, M. (1995). Introducción al estudio del derecho. México: Mc Graw Hill.",
            "García, E. (2001). Introducción al estudio del Derecho. México: Porrúa.",
            "Peniche, E. (1974). Introducción al Derecho. México: Porrúa.",
            "Peniche, F. (2000). Introducción al Estudio del Derecho. México: Porrúa.",
            "Pereznieto, L. (2009). Introducción al estudio del derecho. México: Oxford.",
            "Villoro, M. (1994). Introducción al estudio del Derecho. México: Porrúa.",
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
