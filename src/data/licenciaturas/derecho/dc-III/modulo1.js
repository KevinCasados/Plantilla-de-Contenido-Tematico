/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LD",
  courseId: "DerechoCivilIII",
  id: "DCIII-Mod1",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Derecho Civil III",
  title:
    "Módulo 1. De las sucesiones en general y de la sucesión testamentaria",
  semestre: "Tercero",
  teacher: "Ma. de Lourdes Suárez Hernández",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Que el alumno conozca qué son las sucesiones en general, los tipos de sucesión que existen, el concepto de herencia, sus estados y etapas, así como la figura del albacea. Además, que comprenda qué es la sucesión testamentaria y sus características, los sujetos involucrados y quién tiene capacidad para testar.",

  competencies: [
    "Comprender el concepto de sucesión, sus principios y distinguir entre sucesión testamentaria e intestada.",
    "Definir herencia e identificar la capacidad e incapacidad para heredar.",
    "Reconocer los estados y etapas de la herencia y su correcta secuencia.",
    "Identificar la figura del albacea y sus funciones en la administración y partición de la herencia.",
    "Explicar la sucesión testamentaria: características, sujetos (testador, heredero, sustituto) y la capacidad para testar.",
    "Distinguir modalidades del testamento, los legados y la figura de la sustitución.",
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
      title: "De las sucesiones en general",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad introduce el estudio de la sucesión mortis causa como institución que asegura la continuidad jurídica y económica de la persona tras su fallecimiento. Bajo la noción de herencia se comprende el conjunto de bienes, derechos y obligaciones transmisibles del causante, que pasan a sus sucesores conforme a reglas de orden público y a la voluntad del de cujus cuando existe testamento. Lejos de ser un tema estrictamente patrimonial, la sucesión articula valores sociales —protección de la familia, seguridad del tráfico y paz social— con técnicas jurídicas precisas —determinación de vocación hereditaria, modalidades de adquisición, administración y partición—. El estudio exige distinguir entre transmisión universal (herencia) y transmisión particular (legado), comprender la función de figuras como el albacea o administrador y ubicar, en su justa medida, los límites que derivan de acreedores, cargas hereditarias y derechos de terceros. Con esta base, la unidad prepara al estudiante para leer con método los actos y hechos que integran el fenómeno sucesorio.",
        },
        {
          type: "paragraph",
          text: "Dentro del Derecho civil patrimonial, la sucesión ocupa un lugar central porque resuelve la pregunta de quién continúa la titularidad y el ejercicio de los derechos del causante. En términos sistemáticos, el patrimonio hereditario constituye una universalidad jurídica diferenciada del patrimonio de los herederos hasta su adjudicación, con reglas propias de administración, inventario y liquidación. La sucesión puede abrirse por testamento —cuando el causante dispone de sus bienes conforme a la ley— o por intestado —cuando no hay disposición válida o no abarca la totalidad de los bienes—. La dogmática distingue sujetos (de cujus, herederos, legatarios, albacea, acreedores), objetos (bienes y deudas transmisibles), y actos (aceptación, repudiación, partición). Comprender esa anatomía permite advertir cuándo estamos ante una transmisión universal y cuándo frente a atribuciones singulares, así como los efectos de cada una sobre la responsabilidad por deudas y la representación del caudal hereditario.",
        },
        {
          type: "paragraph",
          text: "Los principios del Derecho sucesorio equilibran libertad y tutela. La libertad de testar permite ordenar el destino del patrimonio dentro de los márgenes legales; la tutela familiar y la seguridad del crédito imponen límites a esa autonomía, ya sea mediante reservas, porciones indefectibles o reglas que protegen a personas dependientes y a acreedores. A ello se suman principios funcionales: continuidad de relaciones jurídicas útiles, protección de la apariencia y estabilidad del tráfico, favor hereditatis para simplificar la adquisición de la herencia cuando concurren requisitos sustantivos, y buena fe en la administración del caudal. Estos principios se concretan en instituciones operativas —aceptación con beneficio de inventario, colación, mejoras, acrecimiento, sustituciones— que moderan los conflictos potenciales entre coherederos y terceros, buscando que la transmisión no se traduzca en rupturas sociales ni en incertidumbre económica.",
        },
        {
          type: "paragraph",
          text: "En el plano técnico, la sucesión se despliega en momentos y estados: la muerte del causante provoca la apertura; las normas fijan la vocación hereditaria (quiénes están llamados); la delación hace disponible el llamamiento para que el llamado pueda aceptar o repudiar; la adquisición consolida la transmisión con efectos retroactivos, según el sistema. Antes de la adjudicación, la herencia puede hallarse yacente, administrada provisionalmente para conservar el caudal y atender obligaciones. Operan además reglas de capacidad e indignidad para heredar, causas de desheredación, nulidades y caducidades testamentarias. Cada fase reclama actos formales —inventario, avalúo, cuentas, partición— y decisiones prudentes sobre administración, pago a acreedores y distribución, todo ello bajo la vigilancia judicial o notarial que establezca la legislación aplicable.",
        },
        {
          type: "paragraph",
          text: "La relevancia práctica del tema es inmediata: en sede notarial o judicial, la tramitación de sucesiones exige identificar el tipo de procedimiento (testamentario o intestamentario), verificar la validez del título sucesorio, delimitar el caudal, notificar a interesados, gestionar inventarios y avalúos, y resolver particiones con criterios de equidad y legalidad. Son frecuentes los conflictos por interpretación del testamento, colación de donaciones, inclusión o exclusión de bienes y responsabilidad por deudas. La herramienta jurídica para mitigarlos es el método: lectura sistemática de normas, correcta valoración probatoria y diseño de acuerdos entre coherederos que resguarden la función social del patrimonio. Esta unidad ofrece el andamiaje conceptual para que el alumnado aborde, más adelante, la sucesión testamentaria y la intestamentaria con solvencia técnica y criterio ético.",
        },
        {
          type: "accordion",
          header: "Nivel 1 — Ideas fuerza de la unidad",
          open: false,
          text: "La sucesión mortis causa asegura continuidad jurídica del patrimonio; combina libertad de testar con límites de tutela familiar y de acreedores; opera mediante momentos (apertura, vocación, delación y adquisición) y exige administración e inventario del caudal hasta la partición.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Conexiones prácticas",
          open: false,
          text: "Distinción herencia/legado; efectos frente a acreedores; capacidad e indignidad; aceptación con beneficio de inventario; rol del albacea; inventarios, avalúos y particiones en sede notarial o judicial.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ruta de estudio sugerida",
          open: false,
          text: "1) Definir conceptos básicos y sujetos; 2) estudiar momentos y estados de la herencia; 3) revisar límites a la libertad de testar; 4) practicar casos de aceptación/repudiación y partición; 5) analizar problemas probatorios y de administración del caudal.",
        },
      ],
      subthemes: [
        {
          id: "1.1",
          numbering: "1.1",
          title: "Ubicación de las sucesiones dentro de la ciencia jurídica",
          content: [
            {
              type: "paragraph",
              text: "Las sucesiones pertenecen al derecho sucesorio, rama del derecho civil encargada de regular la transmisión del patrimonio de una persona fallecida. Desde una perspectiva de sistema, su razón de ser es evitar la dispersión de bienes, reducir conflictos entre llamados a heredar y asegurar una continuidad ordenada de derechos y obligaciones. El encuadre civil importa porque define al fenómeno sucesorio como una relación entre particulares, sometida a principios de legalidad, seguridad jurídica y protección de la voluntad del causante, cuando ésta existe. Ubicar las sucesiones en el derecho civil también permite articularlas con áreas afines —familia, bienes, obligaciones y contratos— que condicionan la validez de disposiciones, la capacidad de los herederos y los efectos reales de la transmisión. De ahí que el estudio de sucesiones combine categorías patrimoniales (bienes, créditos, cargas) con categorías personales (parentesco, estado civil). Esta ubicación, además, subraya que la sucesión no es un mero reparto de cosas: es un procedimiento jurídico destinado a preservar el orden social y la paz familiar mediante reglas generales y decisiones jurisdiccionales cuando se requiere intervención del juez.",
            },
            {
              type: "paragraph",
              text: "El derecho sucesorio atiende tres finalidades prácticas: (1) identificar con certeza a los herederos y legatarios, sea por voluntad del testador o por designación legal; (2) determinar el caudal hereditario, incluyendo bienes, derechos y, en su caso, obligaciones transmisibles; y (3) establecer la forma, tiempos y condiciones de la adjudicación. La inserción en el derecho civil permite aplicar principios como autonomía de la voluntad, buena fe, equidad e igualdad entre coherederos, así como límites derivados de normas imperativas (indignidad, legítimas, alimentos). En el plano institucional, el cauce puede ser notarial o judicial, según concurran o no controversias y según la legislación local. Este anclaje civil distingue claramente las sucesiones de ámbitos públicos (fiscal, administrativo) que sólo inciden de manera accesoria —p. ej., en obligaciones tributarias por transmisión de dominio—. Por ello, el operador jurídico que ubica bien el fenómeno puede anticipar conflictos, elegir el procedimiento idóneo y orientar a las partes sobre consecuencias reales de sus decisiones.",
            },
            {
              type: "paragraph",
              text: "Históricamente, el tratamiento civil de las sucesiones consolidó categorías como la herencia (universalidad jurídica) y el legado (atribución particular), así como la diferencia entre título y modo de adquirir. Ese andamiaje conceptual explica por qué el llamado a heredar no implica, por sí, la inmediata apropiación de los bienes, sino un proceso que incluye aceptación, partición y adjudicación. Ubicar la sucesión en el derecho civil añade también la noción de responsabilidad por deudas hereditarias hasta el valor de los bienes recibidos, y el juego de acciones para proteger el caudal (petición de herencia, petición de herencia y reivindicatoria, colación, reducción). Lejos de ser tecnicismos, estas instituciones garantizan que la transmisión se realice de forma equilibrada, resguardando tanto la voluntad del causante como los derechos de los coherederos y de terceros acreedores. Así, la ubicación sistemática incide directamente en la solución de casos prácticos.",
            },
            {
              type: "paragraph",
              text: "Otro aspecto derivado de su ubicación en el derecho civil es la estrecha relación con el derecho de familia. La vocación hereditaria en sucesión intestada se construye a partir del parentesco por consanguinidad o afinidad y del matrimonio o concubinato, lo que obliga a interpretar conjuntamente normas de filiación, reconocimiento de hijos, adopción y régimen matrimonial. En sucesión testamentaria, aunque la voluntad del testador predomina, subsisten límites de orden público (por ejemplo, alimentos a determinados parientes) que provienen de esa misma esfera familiar. Esta interdependencia muestra por qué un dictamen sucesorio rara vez puede aislarse de la verificación del estado civil y de los vínculos familiares del de cujus, y por qué la acreditación probatoria de tales extremos resulta medular al inicio del procedimiento, evitando nulidades o adjudicaciones indebidas.",
            },
            {
              type: "paragraph",
              text: "La adscripción civil también explica el papel de los bienes y derechos reales. Es preciso distinguir entre bienes propios y comunes (si hubo sociedad conyugal), inmuebles y muebles, derechos reales limitados (usufructo, servidumbres), y derechos personales (créditos, acciones), pues su naturaleza condiciona la forma de transmisión y la oponibilidad frente a terceros. Por ejemplo, ciertos derechos se extinguen con la muerte (derechos personalísimos), mientras que otros requieren inscripciones registrales o notificaciones para surtir efectos. Desde esta óptica, la ubicación en el derecho civil no sólo contextualiza, sino que ordena el método: inventario y avalúo, calificación de bienes, determinación de cargas y trazado de un plan de partición compatible con la naturaleza de cada activo.",
            },
            {
              type: "paragraph",
              text: "Finalmente, considerar a las sucesiones como materia civil permite articular principios procesales adecuados: contradicción, igualdad procesal, derecho de defensa y carga probatoria sobre hechos constitutivos (v.gr., existencia y validez del testamento, filiación, posesión hereditaria). El procedimiento sucesorio —aun en su vertiente voluntaria— puede devenir contencioso si aparece oposición, por lo que el marco civil ofrece remedios y tránsitos entre vías. La correcta ubicación sistemática también define competencias (juzgados civiles o familiares, según legislación local) y habilita soluciones autocompositivas (convenios de partición) que el juez puede sancionar. Esta visión integral dota de seguridad y previsibilidad a un ámbito naturalmente sensible por su componente emocional y patrimonial, cumpliendo el propósito de paz social que informa al derecho civil.",
            },
            {
              type: "paragraph",
              text: "En síntesis, situar las sucesiones en el derecho civil —y, dentro de éste, en su vertiente patrimonial— permite comprender su lógica: transmisión ordenada del patrimonio, respeto de la voluntad del causante dentro de los límites de la ley y tutela de los derechos de los llamados a heredar. La ubicación es algo más que taxonomía: define reglas de juego, criterios de justicia y herramientas de tutela. Desde esta plataforma, las unidades siguientes podrán estudiar con detalle la definición de sucesión mortis causa, los principios que gobiernan su aplicación y los tipos de sucesión reconocidos por la legislación mexicana, conectando siempre las nociones generales con los problemas concretos que se presentan en la práctica forense.",
            },
            {
              type: "accordion",
              header: "Claves de ubicación sistemática",
              open: false,
              text: "Rama: Derecho civil (derecho sucesorio). Finalidad: continuidad patrimonial y paz familiar. Ámbitos conexos: familia, bienes, obligaciones. Procedimientos: notarial o judicial, según controversia.",
            },
            {
              type: "accordion",
              header: "Preguntas guía para el operador",
              open: false,
              text: "¿Quiénes son llamados? ¿Qué integra el caudal? ¿Qué límites impone la ley a la voluntad del causante? ¿Cuál es la vía procedimental idónea? ¿Qué derechos de terceros inciden?",
            },
          ],
        },
        {
          id: "1.2",
          numbering: "1.2",
          title: "Definición de sucesión mortis causa",
          content: [
            {
              type: "paragraph",
              text: "La expresión latina mortis causa significa ‘por causa de muerte’ y se emplea para designar actos o situaciones jurídicas cuyos efectos se producen a partir del fallecimiento de una persona. En el campo sucesorio, la ‘sucesión mortis causa’ es el conjunto de instituciones y procedimientos mediante los cuales el patrimonio transmisible del de cujus —bienes, derechos y obligaciones en la medida prevista por la ley— pasa a sus herederos o legatarios. La noción se contrapone a los actos inter vivos, cuyos efectos se despliegan entre personas vivas. Así, hablar de sucesión mortis causa es hablar de un título de adquisición que se perfecciona con la muerte del causante, pero que requiere un iter procedimental para su plena eficacia (aceptación, partición, adjudicación). Esta definición, aunque sencilla, condensa un programa: armonizar el respeto a la voluntad del causante con la observancia de normas imperativas que protegen a la familia, a los coherederos y a terceros acreedores.",
            },
            {
              type: "paragraph",
              text: "La sucesión mortis causa presenta rasgos característicos: su origen es la muerte del causante; su objeto es la transmisión de una universalidad (herencia) o de atribuciones singulares (legados); su base es un título (testamento o ley) que habilita la vocación hereditaria; y su despliegue exige actos formales de aceptación y partición. La muerte operará como hecho generador, pero no suple requisitos de validez del título (v.gr., capacidad del testador, solemnidades del testamento, inexistencia de causas de indignidad). La transmisión abarca, en principio, bienes y derechos, así como obligaciones transmisibles; quedan fuera los derechos personalísimos y aquellos que, por su naturaleza, se extinguen con la muerte. Este marco permite diferenciar la expectativa del llamado a heredar —derecho eventual— de la efectiva adquisición, que dependerá de actos y verificaciones propias del procedimiento sucesorio.",
            },
            {
              type: "paragraph",
              text: "La contraposición con los actos inter vivos ayuda a delimitar los efectos temporales y sustantivos de las disposiciones mortis causa. Mientras que una donación o compraventa despliega sus consecuencias inmediatamente entre vivos, la disposición testamentaria queda en suspenso hasta la muerte del testador, momento en que se abre la sucesión y nace para los designados la vocación hereditaria. Esta diferencia temporal justifica controles reforzados sobre capacidad, forma y contenido del testamento, así como reglas supletorias para el caso de intestación. Además, la sucesión mortis causa no es sólo un fenómeno privado: conecta con intereses públicos (orden público familiar, seguridad de tráfico jurídico), de ahí la presencia de normas imperativas que limitan la autonomía de la voluntad en protección de terceros y del núcleo familiar.",
            },
            {
              type: "paragraph",
              text: "Desde el punto de vista dogmático, la sucesión mortis causa puede tener fuente testamentaria o legal. En la primera, prevalece la voluntad del testador, expresada en un instrumento que cumple solemnidades, define herederos y legatarios y, en su caso, impone cargas o condiciones. En la segunda, ante la falta total o parcial de testamento válido, la ley determina quiénes suceden y en qué porciones, conforme a grados de parentesco y otras reglas. La doctrina menciona supuestos de ‘mixtura’ cuando coexisten disposiciones testamentarias con porciones regidas por la ley (por ejemplo, testamento que no agota la totalidad del caudal); sin embargo, a efectos clasificatorios, el sistema mexicano reconoce esencialmente la sucesión testamentaria e intestada como tipos básicos, y a partir de ellos organiza el procedimiento y la distribución.",
            },
            {
              type: "paragraph",
              text: "En términos prácticos, comprender la definición orienta decisiones iniciales: verificación del hecho muerte; identificación del título (testamento válido o intestación); determinación de llamados; y aseguramiento del caudal (inventario, administración). La claridad conceptual evita confusiones frecuentes, como creer que la designación testamentaria produce por sí sola transferencia inmediata, o que la inexistencia de testamento deja sin tutela a los deudos. El marco mortis causa garantiza continuidad patrimonial y define cauces —notarial o judicial— para dirimir controversias, siempre bajo principios de igualdad, legalidad y protección de personas vulnerables que puedan depender del caudal para su subsistencia (alimentos).",
            },
            {
              type: "paragraph",
              text: "La sucesión mortis causa despliega además efectos en obligaciones: los herederos suceden no sólo en bienes, sino en cargas transmisibles, con el límite del valor de los bienes recibidos si aceptan a beneficio de inventario, según régimen aplicable. Esta faceta refuerza que la herencia es una universalidad jurídica y no un conjunto fragmentario. Asimismo, el fenómeno comporta continuidad en relaciones jurídicas en curso (arrendamientos, acciones contractuales), lo que exige a los operadores revisar plazos, garantías y notificaciones necesarias para preservar derechos y cumplir cargas. El adecuado entendimiento del concepto mortis causa evita decisiones apresuradas que puedan comprometer el patrimonio hereditario o los derechos de los coherederos.",
            },
            {
              type: "paragraph",
              text: "En suma, la definición de sucesión mortis causa sintetiza un equilibrio entre libertad de disposición y orden público familiar. Nombrar herederos, delimitar el caudal, satisfacer deudas y adjudicar conforme a derecho son momentos de un mismo proceso, que comienza con la muerte pero se legitima por el respeto a la ley y a la evidencia documental. Las unidades siguientes desarrollarán los principios rectores de esta materia —universalidad, unidad, continuidad, igualdad, legalidad, autonomía, protección, transparencia y celeridad— y los tipos de sucesión que estructura el sistema mexicano, a fin de traducir la teoría en una guía práctica para la resolución de casos.",
            },
            {
              type: "accordion",
              header: "Rasgos de la sucesión mortis causa",
              open: false,
              text: "Hecho generador: muerte; Fuente: testamento o ley; Objeto: herencia/legados; Efectividad: aceptación, partición, adjudicación; Límites: normas imperativas y derechos de terceros.",
            },
            {
              type: "accordion",
              header: "Comparación con actos inter vivos",
              open: false,
              text: "Inter vivos = efectos inmediatos; Mortis causa = efectos desde la muerte; mayor control de forma/capacidad; reglas supletorias por ley ante falta de testamento.",
            },
          ],
          subthemes: [
            {
              id: "1.2.1",
              numbering: "1.2.1",
              title: "Principios en materia de sucesión",
              content: [
                {
                  type: "paragraph",
                  text: "Los principios orientan la interpretación y aplicación del derecho sucesorio, asegurando que la transmisión patrimonial ocurra con justicia, certeza y eficacia. El principio de universalidad afirma que la herencia comprende, como regla, la totalidad de bienes, derechos y obligaciones transmisibles del de cujus, concebidos como una universalidad jurídica. Ello impide particiones caprichosas que dejen fuera activos o cargas y garantiza que el inventario sea exhaustivo. La universalidad respalda, además, la tutela de acreedores del causante, quienes conservan vías para satisfacer créditos sobre el caudal. En paralelo, el principio de unidad considera la sucesión como un proceso indivisible: bienes y derechos se transmiten de manera concurrente, y las decisiones sobre aceptación y partición deben contemplar el conjunto, evitando privilegios indebidos o desmembramientos que vulneren a coherederos o terceros. Ambos principios, bien entendidos, ordenan el método de trabajo del operador jurídico desde el inicio del procedimiento.",
                },
                {
                  type: "paragraph",
                  text: "El principio de continuidad evita que la muerte produzca desorden patrimonial o vacíos de titularidad. Asegura que las relaciones jurídicas del causante continúen, sin solución de continuidad, en cabeza de los herederos, quienes asumen la posición jurídica según lo permita la ley. Es la razón por la cual se nombran administradores provisionales, se adoptan medidas de aseguramiento del caudal y se prevé la conservación de bienes perecederos o productivos. Este principio ampara también la idea de que ciertas obligaciones —como los alimentos a favor de dependientes— no pueden quedar desprotegidas por la sola muerte, sino que encuentran continuidad dentro del procedimiento sucesorio, con cargo al acervo. Su observancia protege a la familia, a terceros y al tráfico jurídico.",
                },
                {
                  type: "paragraph",
                  text: "El principio de igualdad proclama que todos los herederos llamados por un mismo título y grado tienen derecho a una porción igual, salvo disposición válida en contrario. La igualdad opera como regla de reparto y como criterio de trato procesal: ninguna parte puede ser privilegiada en el acceso a la información del expediente o en la toma de decisiones sobre administración del caudal. En sucesión testamentaria, la igualdad cede frente a la voluntad del testador cuando éste establece porciones distintas o legados particulares, siempre dentro de los límites legales. En intestada, la igualdad se traduce en cuotas hereditarias determinadas por la ley según el orden de llamamiento. Este principio, traducido en prácticas concretas (transparencia de inventarios, cuentas de administración, derecho de auditoría entre coherederos), previene agravios y litigios innecesarios.",
                },
                {
                  type: "paragraph",
                  text: "El principio de justicia —como directriz material— exige que la distribución se realice de manera equitativa y conforme a derecho, ponderando situaciones de vulnerabilidad y corrigiendo conductas indignas. Aunque la voluntad del causante es cardinal, no puede legitimar decisiones contrarias al orden público o a derechos de terceros. De ahí instituciones como la indignidad para suceder, la reducción de disposiciones inoficiosas y la colación entre descendientes, que operan como correctivos en pro de la justicia material dentro del reparto. Este principio también anima soluciones colaborativas —convenios de partición— que, respetando la ley, atiendan circunstancias particulares de los coherederos (uso de vivienda familiar, continuidad de empresa).",
                },
                {
                  type: "paragraph",
                  text: "El principio de legalidad somete cada acto del procedimiento a la ley: desde la validez del testamento y la capacidad de los llamados, hasta la forma de inventariar, valorar y adjudicar. Garantiza previsibilidad y control jurisdiccional o notarial, y resguarda el expediente frente a maniobras que busquen atajos incompatibles con el interés de todos los involucrados. Unido a la legalidad, la autonomía de la voluntad reconoce la libertad del testador para ordenar su herencia dentro de los límites legales; es piedra angular de la sucesión testamentaria y fundamento de numerosas instituciones (sustituciones, modos, condiciones), siempre que no lesionen normas imperativas ni derechos de terceros.",
                },
                {
                  type: "paragraph",
                  text: "A estos ejes se suman la protección del heredero, la transparencia y la celeridad. La protección del heredero demanda medidas para que quien acepta no sea sorprendido por deudas ocultas o actos de administración perjudiciales; instrumentos como el beneficio de inventario o los controles sobre el administrador cumplen esta finalidad. La transparencia se expresa en el acceso a la información del caudal, en la rendición de cuentas y en la publicidad registral de actos que afecten bienes. La celeridad impone que el proceso avance sin demoras indebidas, evitando que la herencia se deteriore o que se prolongue innecesariamente la incertidumbre. Estas directrices, combinadas, robustecen la confianza de las partes y del entorno en el sistema sucesorio.",
                },
                {
                  type: "paragraph",
                  text: "Concebir los principios como herramientas operativas —y no como retórica— cambia la práctica: guía decisiones sobre medidas cautelares, administración, acceso a expedientes, diseño de particiones y resolución de incidencias. Permite, además, revisar críticamente actuaciones contrarias a la equidad o a la legalidad y habilita recursos correctivos. En contextos complejos (empresas familiares, patrimonios con deudas, bienes en distintos registros), los principios operan como brújula para priorizar lo que preserva valor y dignidad, manteniendo el equilibrio entre voluntad, ley y justicia. Su comprensión es, por tanto, una competencia central para juristas que litigan, asesoran o fedatan en materia sucesoria.",
                },
                {
                  type: "accordion",
                  header: "Principios (síntesis)",
                  open: false,
                  text: "Universalidad, unidad, continuidad, igualdad, justicia, legalidad, autonomía de la voluntad, protección del heredero, transparencia y celeridad.",
                },
                {
                  type: "accordion",
                  header: "Aplicación práctica",
                  open: false,
                  text: "Beneficio de inventario, medidas de aseguramiento, rendición de cuentas, convenios de partición, reducción de disposiciones inoficiosas, control de administrador.",
                },
              ],
            },
            {
              id: "1.2.2",
              numbering: "1.2.2",
              title: "Tipos de sucesión",
              title: "Tipos de sucesión",
              content: [
                {
                  type: "paragraph",
                  text: "En el sistema mexicano, los tipos de sucesión reconocidos para fines clasificatorios son dos: la testamentaria y la intestada. La primera responde a la voluntad del causante válidamente expresada en testamento, instrumento solemne en el que se designan herederos, se pueden instituir legados, imponer cargas o condiciones y nombrar ejecutor. La segunda opera por ministerio de ley cuando no existe testamento, éste es nulo o no dispone de la totalidad del caudal; en tal caso, la ley fija el orden de llamamiento y las porciones de los llamados. Aunque en la práctica puedan coexistir disposiciones testamentarias con atribuciones legales residuales, la clasificación básica sigue siendo dual y determina cauces procedimentales y reglas de reparto. Esta distinción no es meramente académica: condiciona la prueba inicial, la competencia y la forma de acreditar vocaciones y porciones.",
                },
                {
                  type: "paragraph",
                  text: "La sucesión testamentaria exige verificar la existencia, validez y alcance del testamento. Implica revisar capacidad del testador, observancia de formalidades (según el tipo: público abierto, público cerrado, ológrafo, etc.), contenido de las disposiciones e identidad de instituidos. Acreditada la validez, la voluntad del causante guía la distribución, salvo límites de orden público. La institución de herederos puede ser pura y simple, condicional o sujeta a modos; los legados atribuyen bienes o derechos determinados a personas concretas. El testador puede prever sustituciones (vulgar, fideicomisaria en los casos y límites legales) y designar albacea para ejecutar la voluntad, administrar el caudal y rendir cuentas. El procedimiento tutela la autenticidad de la voluntad y su ejecución transparente.",
                },
                {
                  type: "paragraph",
                  text: "La sucesión intestada se rige por reglas legales de vocación hereditaria, fundadas, típicamente, en el parentesco y en la protección del cónyuge o concubina(o). La ley establece órdenes y grados (descendientes, ascendientes, cónyuge/concubina, colaterales), y las porciones que corresponden en cada caso, así como supuestos de concurrencia (por ejemplo, cónyuge con descendientes). Importa determinar con precisión el estado civil, la filiación y la calidad de las personas llamadas. La intestación no implica arbitrariedad: sigue un algoritmo normativo que pretende representar una distribución razonable cuando el causante guardó silencio o su testamento no cubre el todo. En este régimen, la autoridad juega un papel más fuerte en la identificación de llamados y en la conducción de la partición, todo ello dentro de las garantías del procedimiento.",
                },
                {
                  type: "paragraph",
                  text: "Existen, además, fenómenos que matizan la dicotomía. Puede haber intestación parcial si el testamento no dispone de todo el caudal o deviene ineficaz respecto de ciertos bienes; también puede ocurrir que disposiciones testamentarias queden sujetas a reducción por inoficiosidad, abriendo espacio a reglas legales. En tales supuestos, la articulación entre título testamentario y ley exige especial cuidado para respetar, hasta donde sea posible, la voluntad del causante sin sacrificar principios de justicia y legalidad. El operador jurídico debe ser capaz de identificar con nitidez qué parte de la distribución se rige por el testamento y cuál por la ley, evitando solapamientos o vacíos que deriven en litigio.",
                },
                {
                  type: "paragraph",
                  text: "Sea testamentaria o intestada, la sucesión comparte un tronco procedimental: aseguramiento del caudal, inventario y avalúo, determinación de cargas, aprobación (judicial o notarial) de bases de partición y adjudicación. La diferencia radica en la fuente de las porciones y en la necesidad de interpretar la voluntad del causante (en la testamentaria) o de aplicar reglas legales (en la intestada). En ambos casos, la transparencia y la rendición de cuentas en la administración del caudal resultan centrales para preservar la confianza entre coherederos y proteger a terceros acreedores. La elección de vía —notarial o judicial— dependerá de la concurrencia de controversias y de la legislación aplicable en la entidad federativa.",
                },
                {
                  type: "paragraph",
                  text: "En sucesión testamentaria, las impugnaciones típicas versan sobre la validez del testamento (vicios de forma o de voluntad), la interpretación de cláusulas oscuras y la eficacia de sustituciones o condiciones. En intestada, las controversias se centran en la calidad de heredero (prueba de parentesco, reconocimiento de concubinato), en la inclusión o exclusión de bienes del inventario y en la determinación de porciones. Conocer los tipos y sus frentes de litigio ayuda a diseñar estrategias probatorias y a promover soluciones anticipadas mediante convenios de partición que satisfagan a los interesados sin sacrificar legalidad ni justicia material.",
                },
                {
                  type: "paragraph",
                  text: "En conclusión, distinguir con precisión entre sucesión testamentaria e intestada es imprescindible para gestionar adecuadamente un proceso hereditario. La primera rinde homenaje a la autonomía de la voluntad, dentro de límites legales; la segunda asegura una distribución razonable cuando aquella falta o resulta ineficaz. En cualquier caso, la finalidad del sistema es común: preservar la continuidad patrimonial, proteger a la familia y garantizar que la transmisión se haga con seguridad y claridad. Este entendimiento prepara el terreno para estudiar con mayor detalle formalidades testamentarias, órdenes de llamamiento y mecanismos de administración y partición del caudal.",
                },
                {
                  type: "accordion",
                  header: "Tipos (resumen operativo)",
                  open: false,
                  text: "Testamentaria = prevalece voluntad del causante válida. Intestada = distribuye la ley por órdenes y grados. Puede haber intestación parcial si el testamento no cubre todo.",
                },
                {
                  type: "accordion",
                  header: "Pasos comunes del trámite",
                  open: false,
                  text: "Aseguramiento del caudal → inventario/avalúo → determinación de cargas → bases de partición → adjudicación → rendición de cuentas del administrador/albacea.",
                },
              ],
            },
          ],
        },
        {
          id: "1.3",
          numbering: "1.3",
          title: "Concepto de herencia",
          content: [
            {
              type: "paragraph",
              text: "En sentido técnico-jurídico, la herencia es la universalidad de bienes, derechos y obligaciones transmisibles del de cujus —aquellos que no se extinguen con su muerte— que pasan a los herederos en virtud de una causa legal o testamentaria. No se trata de un listado de cosas aisladas, sino de una masa patrimonial unificada (universalidad jurídica) que se rige por reglas propias hasta que se practica la partición. Por ello, mientras subsiste la indivisión hereditaria, los herederos no son titulares exclusivos de objetos concretos, sino copartícipes de una cuota ideal sobre el conjunto. Esa masa incluye activos (muebles, inmuebles, créditos) y pasivos (deudas y cargas) que el ordenamiento no extingue por la muerte, respetando, a la vez, limitaciones de intransmisibilidad (derechos personalísimos, ciertas acciones estrictamente vinculadas a la persona). El concepto, así entendido, articula el tránsito entre la personalidad patrimonial del causante y la continuidad jurídica de sus relaciones patrimoniales mediante sus sucesores, conciliando tutela de acreedores, voluntad del finado y seguridad de los terceros que contratan con el patrimonio sucesorio.",
            },
            {
              type: "paragraph",
              text: "La herencia cumple funciones económicas y sociales: asegura continuidad de relaciones jurídicas, estabilidad del tráfico y previsibilidad intergeneracional. Desde la perspectiva interna, organiza la transmisión con dos llaves: el título (testamento o ley) y el modo (aceptación o, en su caso, repudiación). Sin título, no hay vocación; sin modo, no hay adquisición definitiva. De ahí la importancia de distinguir entre expectativa (vocación hereditaria) y adquisición (efecto pleno tras aceptación). A su vez, el régimen protege a los acreedores del de cujus mediante reglas de responsabilidad y, en su caso, de administración y liquidación, evitando que la muerte desarticule garantías o frustre cobros. Socialmente, la herencia permite que proyectos familiares y empresariales no se extingan abruptamente, a la vez que impone límites y procedimientos para prevenir fraudes, ocultamientos de bienes o disposiciones contrarias al orden público.",
            },
            {
              type: "paragraph",
              text: "Conceptualmente, conviene deslindar herencia y legado. El heredero sucede a título universal: entra en la totalidad del patrimonio transmisible o en una cuota de él (porcentual), asumiendo activos y pasivos en los términos de la ley. El legatario, en cambio, recibe bienes o derechos determinados (título particular) y, salvo disposición expresa, no responde de las deudas más allá del valor del bien legado ni participa en la administración general de la sucesión. Esta distinción no es nominal: condiciona facultades, cargas, medios de defensa y legitimación procesal. Así, quien ostenta calidad de heredero puede promover actos de administración, inventario y partición; el legatario, en principio, exige la entrega de su bien una vez cubiertas deudas y cargas preferentes, sin intervenir en decisiones globales de la masa, salvo previsión expresa del testamento o habilitación legal.",
            },
            {
              type: "paragraph",
              text: "Otra pieza clave es la herencia yacente (o jacente): fase en la que el patrimonio del causante, separado de su persona por la muerte pero aún no adquirido definitivamente por herederos concretos, requiere tutela jurídica. Durante este estadio —desde la apertura hasta la aceptación y, en su caso, la designación de administrador o albacea— la ley establece mecanismos para conservar el caudal, formar inventario, notificar a interesados y asegurar el pago de deudas preferentes. La yacencia evita que la masa se deteriore por inacción, apropiación indebida o confusión patrimonial con quien temporalmente la gestiona. Doctrinalmente, se discute si la herencia yacente posee personalidad procesal propia o actúa por medio de representantes; en todo caso, el sistema reconoce necesidades prácticas de gestión y defensa mientras se define el destino final de la universalidad.",
            },
            {
              type: "paragraph",
              text: "El concepto de herencia incorpora la regla de la indivisión hereditaria: hasta la partición (voluntaria o judicial) la masa permanece unida y sometida a un régimen de administración común. Esto significa que, salvo actos conservatorios o autorizaciones específicas, ningún heredero puede disponer por sí de bienes singulares como si fueran propios; lo que puede ceder es su cuota ideal, con efectos limitados frente a los demás copartícipes. La indivisión, lejos de ser un capricho, protege a los acreedores, impide dilapidar activos necesarios para el pago de deudas y facilita una liquidación ordenada. Sólo después de inventario, avalúo, pago a acreedores y, en su caso, colaciones y recompensas, se practica la partición adjudicando bienes concretos, momento en el que cada heredero deviene propietario exclusivo de lo que se le adjudica.",
            },
            {
              type: "paragraph",
              text: "Desde la óptica de la transmisibilidad, no todo derecho del causante pasa a sus herederos. Quedan fuera los derechos personalísimos (por ejemplo, uso del nombre en cuanto atributo inalienable, salvo proyecciones patrimoniales como marcas registradas bajo reglas específicas), acciones de estado civil estrictas, alimentos como obligación personal (sin perjuicio de deudas alimentarias vencidas), y relaciones intuitu personae que el ordenamiento anuda a cualidades personales del causante. En cambio, sí se transmiten derechos reales patrimoniales, créditos y obligaciones pecuniarias, con el límite de la responsabilidad hereditaria conforme al sistema aplicable (p. ej., responsabilidad “ultra vires hereditatis” o “intra vires” según aceptación pura y simple o a beneficio de inventario, donde exista). Este deslinde preserva la coherencia del sistema y evita trasladar a terceros vínculos que carecen de sentido fuera de la persona del finado.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el concepto de herencia se proyecta en planos procesales y registrales: publicidad de la apertura, radicación del juicio sucesorio, anotaciones preventivas sobre inmuebles, medidas de aseguramiento, inventario y avalúo, rendición de cuentas del administrador y, en su momento, proyecto de partición. Cada hito tiene fundamento y finalidad: proteger derechos de herederos, legatarios y acreedores; evitar actos en fraude; y asegurar que la adjudicación final repose en una fotografía fiel de la masa, libre de sorpresas y con cargas satisfechas. Por eso, entender la herencia como universalidad y no como “bolsa” de cosas es la llave para leer correctamente el resto de instituciones sucesorias: capacidad para heredar, apertura, vocación, delación, aceptación/repudiación, estados y etapas de la herencia, así como la figura del albacea que administra y liquida conforme a derecho.",
            },
            {
              type: "accordion",
              header: "Ideas clave del concepto",
              open: false,
              text: "Herencia = universalidad jurídica (activos + pasivos transmisibles). Heredero (título universal) vs. legatario (título particular). Indivisión hasta la partición. Herencia yacente como fase de tutela. Título (testamento/ley) + modo (aceptación/repudiación).",
            },
            {
              type: "accordion",
              header: "Precauciones prácticas",
              open: false,
              text: "Separar bienes de la masa y del administrador; inventario/avalúo oportunos; publicidad registral; respeto a acreedores; evitar disposiciones singulares antes de la partición; documentar aceptación o repudio conforme a la ley aplicable.",
            },
          ],
          subthemes: [
            {
              id: "1.3.1",
              numbering: "1.3.1",
              title: "De la capacidad e incapacidad para heredar",
              content: [
                {
                  type: "paragraph",
                  text: "En sentido técnico-jurídico, la herencia es la universalidad de bienes, derechos y obligaciones transmisibles del de cujus —aquellos que no se extinguen con su muerte— que pasan a los herederos en virtud de una causa legal o testamentaria. No se trata de un listado de cosas aisladas, sino de una masa patrimonial unificada (universalidad jurídica) que se rige por reglas propias hasta que se practica la partición. Por ello, mientras subsiste la indivisión hereditaria, los herederos no son titulares exclusivos de objetos concretos, sino copartícipes de una cuota ideal sobre el conjunto. Esa masa incluye activos (muebles, inmuebles, créditos) y pasivos (deudas y cargas) que el ordenamiento no extingue por la muerte, respetando, a la vez, limitaciones de intransmisibilidad (derechos personalísimos, ciertas acciones estrictamente vinculadas a la persona). El concepto, así entendido, articula el tránsito entre la personalidad patrimonial del causante y la continuidad jurídica de sus relaciones patrimoniales mediante sus sucesores, conciliando tutela de acreedores, voluntad del finado y seguridad de los terceros que contratan con el patrimonio sucesorio.",
                },
                {
                  type: "paragraph",
                  text: "La herencia cumple funciones económicas y sociales: asegura continuidad de relaciones jurídicas, estabilidad del tráfico y previsibilidad intergeneracional. Desde la perspectiva interna, organiza la transmisión con dos llaves: el título (testamento o ley) y el modo (aceptación o, en su caso, repudiación). Sin título, no hay vocación; sin modo, no hay adquisición definitiva. De ahí la importancia de distinguir entre expectativa (vocación hereditaria) y adquisición (efecto pleno tras aceptación). A su vez, el régimen protege a los acreedores del de cujus mediante reglas de responsabilidad y, en su caso, de administración y liquidación, evitando que la muerte desarticule garantías o frustre cobros. Socialmente, la herencia permite que proyectos familiares y empresariales no se extingan abruptamente, a la vez que impone límites y procedimientos para prevenir fraudes, ocultamientos de bienes o disposiciones contrarias al orden público.",
                },
                {
                  type: "paragraph",
                  text: "Conceptualmente, conviene deslindar herencia y legado. El heredero sucede a título universal: entra en la totalidad del patrimonio transmisible o en una cuota de él (porcentual), asumiendo activos y pasivos en los términos de la ley. El legatario, en cambio, recibe bienes o derechos determinados (título particular) y, salvo disposición expresa, no responde de las deudas más allá del valor del bien legado ni participa en la administración general de la sucesión. Esta distinción no es nominal: condiciona facultades, cargas, medios de defensa y legitimación procesal. Así, quien ostenta calidad de heredero puede promover actos de administración, inventario y partición; el legatario, en principio, exige la entrega de su bien una vez cubiertas deudas y cargas preferentes, sin intervenir en decisiones globales de la masa, salvo previsión expresa del testamento o habilitación legal.",
                },
                {
                  type: "paragraph",
                  text: "Otra pieza clave es la herencia yacente (o jacente): fase en la que el patrimonio del causante, separado de su persona por la muerte pero aún no adquirido definitivamente por herederos concretos, requiere tutela jurídica. Durante este estadio —desde la apertura hasta la aceptación y, en su caso, la designación de administrador o albacea— la ley establece mecanismos para conservar el caudal, formar inventario, notificar a interesados y asegurar el pago de deudas preferentes. La yacencia evita que la masa se deteriore por inacción, apropiación indebida o confusión patrimonial con quien temporalmente la gestiona. Doctrinalmente, se discute si la herencia yacente posee personalidad procesal propia o actúa por medio de representantes; en todo caso, el sistema reconoce necesidades prácticas de gestión y defensa mientras se define el destino final de la universalidad.",
                },
                {
                  type: "paragraph",
                  text: "El concepto de herencia incorpora la regla de la indivisión hereditaria: hasta la partición (voluntaria o judicial) la masa permanece unida y sometida a un régimen de administración común. Esto significa que, salvo actos conservatorios o autorizaciones específicas, ningún heredero puede disponer por sí de bienes singulares como si fueran propios; lo que puede ceder es su cuota ideal, con efectos limitados frente a los demás copartícipes. La indivisión, lejos de ser un capricho, protege a los acreedores, impide dilapidar activos necesarios para el pago de deudas y facilita una liquidación ordenada. Sólo después de inventario, avalúo, pago a acreedores y, en su caso, colaciones y recompensas, se practica la partición adjudicando bienes concretos, momento en el que cada heredero deviene propietario exclusivo de lo que se le adjudica.",
                },
                {
                  type: "paragraph",
                  text: "Desde la óptica de la transmisibilidad, no todo derecho del causante pasa a sus herederos. Quedan fuera los derechos personalísimos (por ejemplo, uso del nombre en cuanto atributo inalienable, salvo proyecciones patrimoniales como marcas registradas bajo reglas específicas), acciones de estado civil estrictas, alimentos como obligación personal (sin perjuicio de deudas alimentarias vencidas), y relaciones intuitu personae que el ordenamiento anuda a cualidades personales del causante. En cambio, sí se transmiten derechos reales patrimoniales, créditos y obligaciones pecuniarias, con el límite de la responsabilidad hereditaria conforme al sistema aplicable (p. ej., responsabilidad “ultra vires hereditatis” o “intra vires” según aceptación pura y simple o a beneficio de inventario, donde exista). Este deslinde preserva la coherencia del sistema y evita trasladar a terceros vínculos que carecen de sentido fuera de la persona del finado.",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, el concepto de herencia se proyecta en planos procesales y registrales: publicidad de la apertura, radicación del juicio sucesorio, anotaciones preventivas sobre inmuebles, medidas de aseguramiento, inventario y avalúo, rendición de cuentas del administrador y, en su momento, proyecto de partición. Cada hito tiene fundamento y finalidad: proteger derechos de herederos, legatarios y acreedores; evitar actos en fraude; y asegurar que la adjudicación final repose en una fotografía fiel de la masa, libre de sorpresas y con cargas satisfechas. Por eso, entender la herencia como universalidad y no como “bolsa” de cosas es la llave para leer correctamente el resto de instituciones sucesorias: capacidad para heredar, apertura, vocación, delación, aceptación/repudiación, estados y etapas de la herencia, así como la figura del albacea que administra y liquida conforme a derecho.",
                },
                {
                  type: "accordion",
                  header: "Ideas clave del concepto",
                  open: false,
                  text: "Herencia = universalidad jurídica (activos + pasivos transmisibles). Heredero (título universal) vs. legatario (título particular). Indivisión hasta la partición. Herencia yacente como fase de tutela. Título (testamento/ley) + modo (aceptación/repudiación).",
                },
                {
                  type: "accordion",
                  header: "Precauciones prácticas",
                  open: false,
                  text: "Separar bienes de la masa y del administrador; inventario/avalúo oportunos; publicidad registral; respeto a acreedores; evitar disposiciones singulares antes de la partición; documentar aceptación o repudio conforme a la ley aplicable.",
                },
              ],
            },
            {
              id: "1.3.2",
              numbering: "1.3.2",
              title: "De la sucesión",
              content: [
                {
                  type: "paragraph",
                  text: "Esta sección introduce el régimen general de la sucesión mortis causa como proceso jurídico por el cual el patrimonio del causante —concebido como una universalidad de derechos y obligaciones transmisibles— se traslada a uno o varios sujetos. La sucesión puede tener como título la ley (sucesión legítima) o el testamento (sucesión testamentaria), y se desenvuelve en etapas concatenadas que aseguran continuidad patrimonial y seguridad del tráfico jurídico. Desde la apertura por muerte real o presunta, se activa una cadena de actos y efectos: llamamiento de posibles herederos y legatarios, puesta a su disposición del caudal (delación), decisión de aceptar o repudiar, administración e integración de la masa, pago de deudas y legados, y, por último, partición y adjudicación. Entender la sucesión como sistema evita confundir hechos (muerte), títulos (ley/testamento) y actos voluntarios (aceptación/repudio). También permite distinguir la posición del heredero —llamado a la universalidad— de la del legatario —beneficiario de disposiciones particulares—, con diferentes efectos en responsabilidad por deudas, modos de adquisición y publicidad registral.",
                },
                {
                  type: "paragraph",
                  text: "Los sujetos de la sucesión se ordenan por el título llamante y por reglas de capacidad. Pueden ser herederos o legatarios las personas físicas con existencia jurídica (nacidas o concebidas si el ordenamiento les reconoce expectativa, sujeto a condición de viabilidad) y, en su caso, las personas morales aptas según su objeto y régimen. Además de la capacidad, la ley contempla causas de indignidad o prohibiciones específicas que excluyen del llamamiento o anulan su eficacia (por ejemplo, atentados contra la vida del testador o delitos graves en su contra, de acuerdo con la legislación aplicable). En sucesión legítima, el orden de parientes determina la vocación a heredar y opera el derecho de representación en líneas descendente y colateral cuando así lo prevé la norma. En la sucesión testamentaria, la voluntad formalmente expresada del testador organiza instituciones, legados, cargas, sustituciones y modos, dentro de los límites legales. Si el sistema reconoce porciones indisponibles o legítimas, la libertad de testar puede verse recortada para proteger a determinados parientes; si no, prevalece la autonomía dispositiva, sin perjuicio del deber alimentario.",
                },
                {
                  type: "paragraph",
                  text: "El objeto de la sucesión es la herencia como universalidad jurídica: conjunto de bienes, derechos y obligaciones transmisibles del causante, con exclusión de los intransmisibles por su naturaleza (p. ej., derechos estrictamente personalísimos). Esta masa es dinámica: integra activos (dinero, inmuebles, créditos, participaciones) y pasivos (deudas, cargas, gastos funerarios y de última enfermedad, legados según su naturaleza) que deben inventariarse y valuar para conocer su consistencia real. En principio, el heredero que acepta pura y simplemente confunde su patrimonio con el hereditario y responde por deudas hereditarias; si lo hace a beneficio de inventario —cuando el ordenamiento lo prevé— limita su responsabilidad al valor de los bienes heredados, conservando separación patrimonial. La masa sirve de base para pagar acreedores y legatarios con prelación legal; sólo el remanente se distribuye entre coherederos conforme a sus cuotas. Esta lógica protege a terceros y evita que la herencia se trate como un ‘botín’ antes de cumplir obligaciones previas.",
                },
                {
                  type: "paragraph",
                  text: "La apertura de la sucesión —muerte real acreditada o muerte presunta judicialmente declarada— fija tiempo y lugar jurídicos relevantes: determina ley aplicable, competencia y domicilio sucesorio, y es el punto de partida de plazos, devengos fiscales y medidas conservatorias. A partir de ahí opera la vocación (llamamiento abstracto de quienes podrían heredar) y, una vez cumplidas condiciones y términos del título, la delación (puesta a disposición efectiva para aceptar o repudiar). Antes de la aceptación, la herencia puede estar yacente; durante ese periodo proceden medidas de conservación, inventario y nombramiento de administrador o albacea interino. En los sistemas que lo admiten, el testador puede ordenar sustituciones (vulgar, fideicomisaria) y modos, así como reconocer o negar el derecho de acrecer entre coherederos; la ley, por su parte, regula representación, transmisión del derecho de aceptar y efectos del repudio para asegurar continuidad y justicia distributiva.",
                },
                {
                  type: "accordion",
                  header: "Mapa general del proceso sucesorio",
                  open: false,
                  text: "Apertura (muerte) → Vocación (llamamiento abstracto) → Delación (puesta a disposición) → Aceptación/Repudio → Administración (inventario, avalúo, pago de deudas/legados) → Partición y adjudicación → Inscripción y cierre.",
                },
                {
                  type: "paragraph",
                  text: "La delación y la aceptación son ejes de la adquisición hereditaria. Sin delación, no hay poder jurídico para decidir; con delación, nace la facultad de aceptar o repudiar. La aceptación puede ser expresa (declaración formal) o tácita (actos que sólo podría realizar el heredero en tal calidad), es, por regla, irrevocable y retroactiva al momento de apertura, con modulaciones frente a terceros de buena fe. El repudio, solemne y absoluto, desplaza la porción del renunciante conforme a sustituciones, representación o acrecimiento. Si el llamado fallece sin decidir, sus herederos pueden ejercer el ius transmissionis según la normativa aplicable. Estas figuras se articulan con instituciones propias de la sucesión testamentaria, como las condiciones suspensivas o resolutorias, que pueden diferir delación y efectos, y con reglas de caducidad y prescripción de acciones sucesorias, incluidas las de petición de herencia y de nulidad de testamento.",
                },
                {
                  type: "paragraph",
                  text: "En el desarrollo del procedimiento, la administración hereditaria —a cargo del albacea o administrador— ordena el tránsito desde la yacencia o la indivisión hasta la partición. Se levanta inventario y avalúo, se publicitan edictos cuando procede, se cobran créditos, se atienden gastos preferentes y se pagan deudas y legados con su prelación. La comunidad hereditaria, formada por los coherederos que han aceptado, se rige por reglas de administración (mayorías) y disposición (unanimidades o autorizaciones) hasta la partición. Esta última puede ser convencional —por acuerdo— o judicial, respetando, en lo posible, igualdad cualitativa y cuantitativa y la voluntad del testador. La partición transforma cuotas ideales en titularidades concretas, habilita inscripción en registros y activa garantías de evicción entre coherederos, así como acciones de rescisión por lesión o aparición de bienes. La trazabilidad documental (minutas, resoluciones, inscripciones) da seguridad y cierra la cadena de transmisión para terceros.",
                },
                {
                  type: "accordion",
                  header: "Roles y principios rectores",
                  open: false,
                  text: "Heredero (universalidad y responsabilidad), legatario (disposición particular), albacea (ejecutor y administrador), acreedores (prelación), publicidad registral y protección de terceros; respeto a la voluntad del testador dentro de la ley.",
                },
                {
                  type: "paragraph",
                  text: "Como principios transversales destacan: continuidad del patrimonio (la herencia no se extingue con la persona; se transforma), respeto a la voluntad del testador dentro de los límites legales, protección de acreedores y terceros de buena fe, seguridad jurídica mediante formas y publicidad, y proporcionalidad entre derechos y cargas del heredero. La práctica cotidiana exige prudencia técnica: diferenciar vocación de delación, usar correctamente el beneficio de inventario cuando procede, documentar actos y mantener cuentas claras. La sucesión, bien conducida, combina humanidad —en el manejo del duelo y de expectativas— con rigor jurídico —en la custodia del valor, el cumplimiento de obligaciones y la exactitud de las transferencias—. Los subtemas que siguen (apertura, vocación, delación, adquisición) desgranarán con mayor detalle cada fase para dar al estudiante una guía operativa y sistemática de actuación.",
                },
              ],
              subthemes: [
                {
                  id: "1.3.2.1",
                  numbering: "1.3.2.1",
                  title: "Apertura de la sucesión",
                  content: [
                    {
                      type: "paragraph",
                      text: "La sucesión se abre por la muerte real o la declaración de muerte presunta del causante en los términos de la ley. Ese instante fija la ley aplicable, la extensión de la masa, la vocación de los llamados y el lugar de la apertura (último domicilio del de cujus) con sus consecuencias procesales y registrales. La apertura tiene efectos automáticos: cesa la personalidad del causante, nace la herencia yacente, se inmovilizan ciertos actos de disposición y se activan mecanismos de conservación del caudal (sellado, inventario, depósito). También empiezan a correr plazos: para impugnar, aceptar o repudiar; para ejercitar sustituciones o derechos de acrecer; y para promover procedimientos sucesorios. La precisión del momento y lugar evita conflictos de competencia y fraudes de última hora, y brinda seguridad a acreedores y a terceros de buena fe.",
                    },
                    {
                      type: "paragraph",
                      text: "Desde la apertura, la herencia constituye una universalidad distinta de los patrimonios personales de los llamados. Por ello, mientras no haya aceptación, la herencia permanece yacente y su administración recae en un albacea provisional, depositario o autoridad, según el régimen local. En esta fase se realizan actos conservatorios: inventario y avalúo, medidas de seguridad respecto de bienes perecederos, anotaciones preventivas sobre inmuebles y notificación a codemandados o deudores del causante. La finalidad es preservar valor y trazabilidad. La apertura no legitima apropiaciones singulares por los llamados; cualquier disposición sin título y modo adecuados puede ser ineficaz o generar responsabilidad.",
                    },
                    {
                      type: "accordion",
                      header: "Claves de la apertura",
                      open: false,
                      text: "Hecho generador: muerte real o presunta; fija ley aplicable, lugar y competencia; nace herencia yacente; se activan medidas de conservación y plazos sucesorios.",
                    },
                    {
                      type: "paragraph",
                      text: "El lugar de la apertura se vincula con el último domicilio del causante, sin perjuicio de reglas especiales para inmuebles situados en otra jurisdicción o bienes sujetos a regímenes registrales específicos (vehículos, marcas). Esta determinación incide en: autoridad competente, formalidades de la publicación de edictos, idioma y estructura del procedimiento. En sucesiones con bienes en varias demarcaciones, cobra relevancia la cooperación registral y, en su caso, el exequátur o reconocimiento de resoluciones si hay elementos extranjeros. Un manejo prolijo del lugar evita duplicidades y reduce litigiosidad sobre competencia.",
                    },
                    {
                      type: "paragraph",
                      text: "Cuando media declaración de muerte presunta, la apertura se condiciona a los presupuestos y a la sentencia que la pronuncia: plazo de desaparición, publicaciones y ausencia de noticias. Sus efectos suelen asimilarse a la muerte real, con cautelas: si reaparece el ausente, puede reclamar bienes no enajenados a terceros protegidos y se abren escenarios restitutorios complejos. Por eso, en estas sucesiones se extreman medidas de conservación y documentación de actos, para equilibrar seguridad jurídica y justicia con quien pudiera estar vivo.",
                    },
                    {
                      type: "paragraph",
                      text: "La apertura tiene también dimensión fiscal y laboral: cierre de obligaciones del causante, determinación de créditos fiscales, subrogación en relaciones laborales o extinción según su naturaleza, y continuidad de contratos con cláusulas de muerte. Una lectura sistémica del hecho generador evita sorpresas de responsabilidad para los llamados y para el administrador de la herencia. Desde el primer día conviene trazar mapa de obligaciones y riesgos, priorizando pagos preferentes y evitando confusión patrimonial.",
                    },
                    {
                      type: "accordion",
                      header: "Buenas prácticas iniciales",
                      open: false,
                      text: "Asegurar bienes; elaborar inventario/avalúo; comunicar a interesados y acreedores; inscribir medidas precautorias; definir administración provisional; trazar mapa fiscal y laboral.",
                    },
                  ],
                },
                {
                  id: "1.3.2.2",
                  numbering: "1.3.2.2",
                  title: "Vocación a la herencia",
                  content: [
                    {
                      type: "paragraph",
                      text: "La vocación hereditaria es el llamamiento potencial que, por ley o por testamento, recae sobre personas determinadas para suceder al causante. No confiere aún la cualidad de heredero adquirido —eso llegará con la delación y la aceptación—, pero delimita el elenco de quienes pueden convertir esa expectativa en derecho pleno. En sucesión testamentaria, la vocación emana de la voluntad del testador expresada con las formalidades legales: herederos universales, de cuota o legatarios particulares (estos últimos con régimen propio). En sucesión legítima, la vocación se ordena por parentesco, cónyuge o persona unida conforme a la ley, adopción y, en su caso, Estado; con reglas de preferencia, concurrencia y representación. Esta lista no es arbitraria: refleja deberes de solidaridad y protección familiar que el ordenamiento traduce en derechos sucesorios.",
                    },
                    {
                      type: "paragraph",
                      text: "La vocación admite modalidades: sustituciones (vulgar, fideicomisaria dentro de sus límites), condición, término o modo. La sustitución vulgar prevé quién ocupará el lugar del instituido si éste no llega a heredar por premoriencia, incapacidad, indignidad o renuncia. La sustitución fideicomisaria, cuando el sistema la admite, encadena llamamientos sucesivos con límites temporales y de finalidad. La condición suspensiva difiere la posibilidad de adquirir hasta que el hecho ocurra; la resolutoria extingue el derecho si sobreviene el evento. El modo impone cargas al llamado (p. ej., cuidado de una persona), cuya inobservancia genera efectos según su gravedad. Estas figuras requieren interpretación restrictiva para no lesionar la libertad de testar ni crear incertidumbre excesiva.",
                    },
                    {
                      type: "accordion",
                      header: "Vocación legítima (esquema básico)",
                      open: false,
                      text: "Descendientes → ascendientes → cónyuge/pareja conforme a la ley → colaterales → Estado. Convivencia con representación y derecho de acrecer según el caso.",
                    },
                    {
                      type: "paragraph",
                      text: "El derecho de representación permite que los descendientes de un llamado premuerto, incapaz o indigno ocupen su lugar y reciban por estirpe lo que a éste le habría correspondido. Su función es preservar la rama familiar y evitar vacíos por infortunios cronológicos. No opera por renuncia —salvo previsión legal expresa—, y su alcance varía entre líneas descendente y colateral. Diferente es el derecho de acrecer, que beneficia a los coherederos cuando una porción queda vacante y no hay sustituto ni representación: los partícipes aumentan su cuota en proporción a sus porciones. Ambas instituciones operan en etapas tempranas de la sucesión y deben preverse al redactar testamentos para respetar el plan del causante.",
                    },
                    {
                      type: "paragraph",
                      text: "La vocación puede coexistir con reservas y legítimas, si el sistema las reconoce. En esos casos, la libertad de testar se encuentra limitada por porciones indisponibles a favor de herederos forzosos, y cualquier disposición que las afecte puede reducirse. El cálculo de legítimas y mejoras exige inventario, avalúo y colaciones para igualar donaciones inoficiosas. Desde la perspectiva de la vocación, ello supone que ciertos llamados tienen un núcleo de protección reforzado que condiciona la arquitectura del testamento y la eventual partición. Un manejo técnico de estas instituciones reduce litigios y protege la voluntad lícita del testador.",
                    },
                    {
                      type: "paragraph",
                      text: "Finalmente, la vocación se actualiza con la delación (puesta a disposición) y se consolida con la aceptación. Entre tanto, los vocados no pueden disponer de bienes concretos; sólo cuentan con una expectativa regulada que impone deberes de lealtad y prohibiciones de apropiación. En sucesiones complejas, conviene documentar acuerdos provisionales entre vocados para administrar, proteger y, si procede, obtener rentas que cubran cargas y deudas, siempre bajo control judicial o del albacea cuando así lo exija el procedimiento. Convertir la vocación en proceso ordenado es clave para conservar valor y evitar conflictos innecesarios.",
                    },
                    {
                      type: "accordion",
                      header: "Acrecer vs. Representación",
                      open: false,
                      text: "Representación: descendientes ocupan el lugar del llamado premuerto/incapaz/indigno (reciben por estirpe). Acrecer: aumento proporcional de cuotas a favor de coherederos cuando queda porción vacante sin sustituto ni representación.",
                    },
                  ],
                },
                {
                  id: "1.3.2.3",
                  numbering: "1.3.2.3",
                  title: "Delación de la herencia",
                  content: [
                    {
                      type: "paragraph",
                      text: "La delación es el acto jurídico por el cual la herencia queda a disposición de los llamados, de modo que pueden aceptar o repudiar. Se distingue de la vocación (llamamiento abstracto) porque la delación es concreta: presupone la apertura de la sucesión y el cumplimiento de las condiciones que el título (ley o testamento) haya impuesto. Sin delación no hay posibilidad de adquirir; con delación se abre un poder jurídico de decidir. La delación opera ipso iure al ocurrir la muerte real o presunta del causante, salvo que el testador haya sujeto la institución a término o condición suspensiva. Si hay llamamientos sucesivos (sustituciones) la delación se desplazará a favor del sustituto cuando falle la delación del instituido. Esta institución ordena tiempos, prioridades y efectos, evitando apropiaciones prematuras de bienes hereditarios.",
                    },
                    {
                      type: "paragraph",
                      text: "La delación puede ser simultánea (varios coherederos llamados al mismo tiempo) o sucesiva (llamamientos encadenados), pura o sujeta a modalidades, y total o parcial según la amplitud de la institución. En sucesión legítima, la delación sigue el orden y grado de parentesco, con derecho de representación y de acrecer según corresponda. En sucesión testamentaria, la delación respeta la arquitectura del testamento: porciones, sustituciones, cargas y condiciones. La coexistencia de legados no impide la delación a los herederos universales, aunque introduce obligaciones preferentes de entrega y pago con el caudal. Un manejo prolijo de la delación reduce litigios sobre si el llamado puede ya aceptar, repudiar o ejercer derechos de administración provisional.",
                    },
                    {
                      type: "accordion",
                      header: "Vocación vs. delación (clave práctica)",
                      open: false,
                      text: "Vocación: aptitud abstracta para heredar (título llamante). Delación: puesta a disposición efectiva para aceptar/repudiar (tras la apertura y condiciones cumplidas). Sin delación no hay adquisición.",
                    },
                    {
                      type: "paragraph",
                      text: "El término legal para aceptar o repudiar normalmente corre desde que el llamado conoce la delación. Si el ordenamiento no fija plazo, rigen reglas supletorias de interpelación judicial: cualquier interesado puede requerir al llamado para que manifieste su decisión en un tiempo prudente; de no hacerlo, pueden operar presunciones o habilitarse la administración por albacea. La ley suele admitir la transmisibilidad del derecho de aceptar: si el llamado muere sin pronunciarse, sus herederos pueden aceptar en su nombre, con efectos retroactivos al momento de la apertura, salvo que existan prohibiciones o caducidades expresas.",
                    },
                    {
                      type: "paragraph",
                      text: "Las causas de suspensión o diferimiento de la delación incluyen: condición suspensiva no cumplida; término inicial no llegado; pendencia de declaración de muerte presunta; impugnación de la validez del testamento; y controversias sobre la capacidad del llamado. En tales casos, la herencia permanece yacente y se adoptan medidas de conservación (sellado, inventario, depósito). La suspensión no autoriza al llamado a disponer; sólo admite actos conservatorios cuando la ley lo permita. Esta prudencia protege a acreedores y a eventuales sustitutos o representantes.",
                    },
                    {
                      type: "paragraph",
                      text: "Cuando concurren varios llamados y alguno es incapaz, indigno o renuncia, su porción puede acrecer a los restantes si no hay sustitución ni representación. En herederos forzosos (si existen en el sistema), el juego de legítimas y mejoras puede limitar los efectos del acrecimiento, imponiendo reducciones. El operador debe revisar el título, la ley vigente al tiempo de la apertura y la situación de cada llamado para calcular porciones y efectos. La trazabilidad de decisiones (minutas, notificaciones, asientos registrales) evita conflictos posteriores.",
                    },
                    {
                      type: "paragraph",
                      text: "La delación tiene también implicaciones fiscales y registrales: punto de partida para devengos impositivos, inhibiciones de enajenación, anotaciones preventivas y comunicaciones a registros de bienes. En procedimientos notariales o judiciales, la acreditación de la delación —con acta de defunción, testamento y protocolización, o declaratoria de herederos— habilita actuaciones ulteriores: inventario, designación de albacea y, en su momento, aceptación o repudio. Una gestión ordenada de esta fase reduce costos y riesgos de nulidad.",
                    },
                    {
                      type: "accordion",
                      header: "Efectos procesales de la delación",
                      open: false,
                      text: "Inicia plazos para aceptar/repudiar; legitima medidas de conservación; habilita inventario/avalúo; permite requerimientos de interpelación; determina competencia y asientos registrales iniciales.",
                    },
                  ],
                },
                {
                  id: "1.3.2.4",
                  numbering: "1.3.2.4",
                  title: "Adquisición de la herencia",
                  content: [
                    {
                      type: "paragraph",
                      text: "La adquisición de la herencia presupone delación y se consuma con la aceptación. La aceptación es el acto por el cual el llamado hace suya la cualidad de heredero, con los efectos que la ley anuda a tal condición. Puede ser expresa (declaración formal ante autoridad o documento idóneo) o tácita (actos que necesariamente suponen la intención de aceptar y que no podría ejecutar sino como heredero). La aceptación es, por regla, irrevocable y retroactiva al momento de la apertura, salvo que la ley establezca otra cosa. Frente a terceros, la retroactividad se modula por la protección de buena fe y la publicidad registral.",
                    },
                    {
                      type: "paragraph",
                      text: "La aceptación pura y simple confunde patrimonios: el heredero responde de las deudas hereditarias con los bienes de la herencia y, en su caso, con los propios. Para limitar la responsabilidad, muchos ordenamientos prevén la aceptación a beneficio de inventario: el heredero conserva la separación patrimonial y responde sólo hasta el valor de los bienes hereditarios, con obligación de inventariar y pagar según orden de prelación. Este beneficio exige formas y plazos estrictos; su incumplimiento puede convertirla en aceptación simple. El beneficio protege a herederos prudentes y a acreedores, pues impone transparencia en activos y pasivos.",
                    },
                    {
                      type: "accordion",
                      header: "Expresa, tácita y a beneficio de inventario",
                      open: false,
                      text: "Expresa: declaración formal de aceptar. Tácita: actos inequívocos de heredero. Beneficio de inventario: separación patrimonial; respuesta limitada al valor del caudal, sujeta a inventario y prelación de pagos.",
                    },
                    {
                      type: "paragraph",
                      text: "La aceptación puede ser parcial o condicional sólo si el título lo permite; en general, la cualidad de heredero recae sobre la universalidad y no sobre bienes singulares. En cambio, el legatario adquiere por regla mediante tradición del bien legado y responde dentro de los límites de su beneficio. Coherederos que aceptan configuran una comunidad hereditaria indivisa hasta la partición. Durante la indivisión, rigen reglas de administración y de disposición: actos de conservación con mayoría, enajenaciones con unanimidad o autorización judicial, según el sistema. Esta fase exige coordinación y rendición de cuentas.",
                    },
                    {
                      type: "paragraph",
                      text: "El repudio es la contracara: acto solemne por el que el llamado renuncia a la herencia. Es irrevocable, no puede hacerse en parte ni a plazo ni condicionalmente y abre el juego de sustitución, representación o acrecimiento. El repudiando no deviene heredero y, por tanto, no responde de deudas hereditarias; sin embargo, ciertos ordenamientos exigen que, si repudió en fraude de acreedores personales, estos puedan impugnar el repudio hasta por el monto de sus créditos. El repudio por incapaces requiere autorizaciones especiales para proteger su interés.",
                    },
                    {
                      type: "paragraph",
                      text: "La transmisión del derecho de aceptar se presenta cuando el llamado muere sin decidir: sus herederos pueden aceptar o repudiar en su nombre (ius transmissionis). Si aceptan, la adquisición produce efectos con la retroacción propia; si repudian, se desplazan los llamamientos conforme a las reglas generales. Esta figura evita la caducidad injusta del llamamiento por un hecho (muerte del llamado) que no revela su voluntad sobre la herencia primigenia, y preserva la arquitectura del testamento o la ley en lo posible.",
                    },
                    {
                      type: "paragraph",
                      text: "La publicidad y la inscripción consolidan la adquisición frente a terceros. Si hay inmuebles o bienes registrables, la partición y adjudicación deben inscribirse para oponerlas a terceros. Antes de ello, la comunidad hereditaria puede gestionar bienes, pero la seguridad de tráfico exige asientos registrales que acrediten la titularidad adjudicada. La adquisición, por último, se integra con obligaciones: inventariar, avalúar, pagar deudas y legados, y rendir cuentas. El heredero responsable entiende la adquisición como un haz de derechos y obligaciones, no sólo como entrada de activos.",
                    },
                    {
                      type: "accordion",
                      header: "Efectos nucleares de la aceptación",
                      open: false,
                      text: "Nace la cualidad de heredero; responsabilidad por deudas (plena o limitada); formación de la comunidad hereditaria; deberes de inventario, pago y cuentas; exigencia de publicidad e inscripción para oponibilidad.",
                    },
                  ],
                },
              ],
            },
            {
              id: "1.3.3",
              numbering: "1.3.3",
              title: "Estados de la herencia",
              content: [
                {
                  type: "paragraph",
                  text: "La herencia atraviesa diferentes estados jurídicos desde la apertura hasta la partición. El primero es la herencia yacente: masa patrimonial sin titular definitivo, a la espera de aceptación. En esta fase hay universalidad jurídica distinta del patrimonio de los llamados; se adoptan medidas de conservación (sellado, inventario, depósito) y se designa administrador provisional o albacea interino. La yacencia no autoriza actos de disposición salvo los necesarios para evitar deterioro o pérdida. Acreedores pueden promover actuaciones para asegurar su cobro, respetando el orden de prelación y la integridad del caudal.",
                },
                {
                  type: "paragraph",
                  text: "Aceptada la herencia, surge la comunidad hereditaria indivisa: conjunto de coherederos cotitulares del acervo hasta la partición. La indivisión configura condominio especial con reglas reforzadas: necesidad de unanimidad para enajenaciones sustanciales, mayorías para actos de administración (según el régimen) y obligación de rendición de cuentas por quien gestione. La indivisión no debe prolongarse indebidamente; el ordenamiento suele reconocer el derecho de todo coheredero a pedir la partición en cualquier tiempo, salvo pacto temporal de indivisión o imposición testamentaria dentro de límites legales.",
                },
                {
                  type: "accordion",
                  header: "Yacente, indivisa y partible",
                  open: false,
                  text: "Yacente: sin heredero definitivo, medidas de conservación. Indivisa: aceptada pero no partida; reglas de administración. Partible/partida: adjudicación y salida de la comunidad.",
                },
                {
                  type: "paragraph",
                  text: "Un estado relevante es la herencia a beneficio de inventario: no es distinta masa, pero sí régimen protector de la responsabilidad del heredero. Exige inventario en forma, separación de masas y pago ordenado. Si el heredero incumple, puede perder el beneficio y quedar como aceptante puro y simple. La vigilancia judicial o notarial del inventario reduce litigios y protege a acreedores y legatarios.",
                },
                {
                  type: "paragraph",
                  text: "La herencia en administración por albacea es un estado funcional: mientras se inventaría, avalúa, se pagan deudas y legados y se preparan bases de la partición, el albacea ejerce facultades de conservación, cobro y pago, con deber de cuentas. La calidad y oportunidad de esta administración condiciona el valor que reciban los adjudicatarios. Una administración opaca o dilatoria erosiona el caudal y multiplica controversias.",
                },
                {
                  type: "paragraph",
                  text: "Tras la aprobación de inventario y avalúo y el pago de deudas y legados, la herencia deviene partible. La partición puede ser convencional (por acuerdo de coherederos) o judicial (a falta de acuerdo), atendiendo en su estructura a la voluntad del testador (asignaciones, mejoras, prohibiciones) y a la igualdad cualitativa y cuantitativa posible. La partición transforma cuotas ideales en titularidades concretas y permite la inscripción de adjudicaciones en registros públicos.",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, con la partición aprobada y la inscripción de adjudicaciones, el estado es de herencia partida y extinción de la comunidad. Quedan efectos residuales: garantías por evicción entre coherederos, colaciones pendientes y posibles rescindibilidades por lesión o aparición de bienes omitidos. Cada estado trae consigo reglas y cautelas; conocerlas es condición para administrar correctamente la sucesión.",
                },
                {
                  type: "accordion",
                  header: "Reglas prácticas por estado",
                  open: false,
                  text: "Yacente: conservar. Indivisa: administrar y rendir cuentas. Beneficio de inventario: separar y pagar ordenado. Partible: acordar bases y adjudicar. Partida: inscribir y cerrar cuentas con garantías.",
                },
              ],
            },
            {
              id: "1.3.4",
              numbering: "1.3.4",
              title: "Etapas de la herencia",
              content: [
                {
                  type: "paragraph",
                  text: "Primera etapa: apertura de la sucesión. Se verifica por muerte real o presunta del causante, fijando la ley aplicable, la competencia y el lugar de la apertura. En este hito nace la herencia como universalidad y se activan medidas de aseguramiento del caudal. Documentalmente, se incorporan acta de defunción, testamento y su protocolización o, en su caso, se tramita declaratoria de herederos. La apertura inaugura plazos y legitima a interesados para promover actuaciones cautelares.",
                },
                {
                  type: "paragraph",
                  text: "Segunda etapa: delación. La herencia se pone a disposición de los llamados por ley o testamento. Se determinan porciones, sustituciones y, si procede, vocaciones por representación. Pueden coexistir modalidades (condición, término, modo) que difieran o condicionen la delación. En esta fase se practican inventario y avalúo preliminares y se designa albacea o administrador provisional. La precisión de la delación evita disputas sobre quién puede aceptar o repudiar.",
                },
                {
                  type: "accordion",
                  header: "Hoja de ruta (resumen)",
                  open: false,
                  text: "1) Apertura; 2) Delación; 3) Aceptación/repudio; 4) Administración (inventario/avalúo, pago de deudas/legados); 5) Partición y adjudicación; 6) Inscripciones y cierre de cuentas.",
                },
                {
                  type: "paragraph",
                  text: "Tercera etapa: aceptación o repudio. Los llamados deciden. La aceptación puede ser pura y simple o a beneficio de inventario, con efectos sobre responsabilidad por deudas. El repudio desplaza llamamientos por sustitución, representación o acrecimiento. Es crucial respetar formas y plazos y documentar las decisiones, pues son actos solemnes e irrevocables. Esta etapa define si habrá comunidad hereditaria y bajo qué régimen.",
                },
                {
                  type: "paragraph",
                  text: "Cuarta etapa: administración hereditaria. Con la herencia aceptada (o incluso en yacencia, con cautelas) se inventaría y avalúa el caudal, se cobran créditos, se custodian bienes y se atienden gastos de última enfermedad y funeral. El albacea o administrador actúa con diligencia, rinde cuentas, solicita autorizaciones cuando la ley lo exige y preserva el valor del acervo. El éxito de la sucesión depende en gran medida de la calidad de esta administración.",
                },
                {
                  type: "paragraph",
                  text: "Quinta etapa: pago de deudas y legados. Se satisfacen créditos conforme al orden de prelación (preferentes, privilegiados, comunes) y se cumplen legados según su naturaleza (de cosa específica, de cantidad, de usufructo, de liberación). Si el activo no alcanza, se practican liquidaciones y, en su caso, reducciones de disposiciones inoficiosas. La transparencia en esta etapa previene impugnaciones y responsabilidades del administrador.",
                },
                {
                  type: "paragraph",
                  text: "Sexta y séptima etapas: partición, adjudicación e inscripción. Aprobados inventario y avalúo y satisfechas deudas y legados, los coherederos pueden partir. La partición puede ser amistosa o judicial, respetando en lo posible igualdad cualitativa y cuantitativa y la voluntad del testador. Adjudicados los lotes, se inscriben los bienes registrables y se cierran cuentas. Subsisten garantías por evicción y saneamiento y la posibilidad de rescindir la partición por lesión, dolo o aparición de bienes omitidos. Con inscripciones practicadas, concluye el proceso ordinario.",
                },
                {
                  type: "accordion",
                  header: "Errores comunes por etapa",
                  open: false,
                  text: "Apertura: omitir aseguramientos. Delación: confundir vocación con delación. Aceptación: perder beneficio de inventario por forma/plazo. Administración: actuar sin cuentas. Pago: ignorar prelación. Partición: no respetar voluntad o igualdad; no inscribir.",
                },
              ],
            },
          ],
        },
        {
          id: "1.4",
          numbering: "1.4",
          title: "El albacea",
          content: [
            {
              type: "paragraph",
              text: "El albacea es el órgano de la sucesión encargado de ejecutar la voluntad del causante y administrar el caudal hereditario hasta la partición, con deber de conservación, cobro, pago y rendición de cuentas. Puede ser designado por el testador (albacea testamentario), por los herederos (convencional) o por la autoridad (dativo o judicial) cuando falte o sea removido. Su nombramiento requiere aceptación, y su idoneidad se mide por capacidad, probidad y ausencia de conflictos que comprometan la administración. No es representante de un heredero en particular, sino de la herencia como universalidad y, por tanto, ha de actuar con imparcialidad.",
            },
            {
              type: "paragraph",
              text: "Facultades típicas: tomar posesión del caudal, practicar inventario y avalúo, conservar bienes, cobrar créditos, pagar gastos funerarios y de última enfermedad, satisfacer deudas y legados en el orden legal, defender el caudal en juicio, realizar actos de venta autorizados cuando sea necesario para pagar, y preparar bases de partición. Sus límites provienen de la ley, del testamento y de los acuerdos de herederos; para actos de dominio sobre inmuebles o bienes principales suele requerirse autorización judicial o consentimiento expreso de los interesados. El albacea es fiduciario en sentido amplio: maneja bien ajeno con deber de lealtad y diligencia.",
            },
            {
              type: "accordion",
              header: "Clases y designación",
              open: false,
              text: "Testamentario (designado por el causante), convencional (acordado por herederos), dativo/judicial (nombrado por autoridad). Siempre requiere aceptación y, en su caso, garantía.",
            },
            {
              type: "paragraph",
              text: "Obligaciones nucleares: levantar inventario en plazo; conservar el acervo; llevar contabilidad separada; rendir cuentas periódicas y finales; informar hechos relevantes; y obrar con diligencia profesional. La rendición de cuentas no es formalismo: es derecho de herederos, legatarios y acreedores para controlar la administración. Las cuentas deben ser claras, documentadas y verificables. El incumplimiento faculta remoción y responsabilidad por daños.",
            },
            {
              type: "paragraph",
              text: "La retribución del albacea puede estar fijada en el testamento o en la ley (aranceles o porcentajes) y está condicionada al cumplimiento de sus deberes. Gastos razonables y necesarios para la administración se reintegran con cargo al caudal. La remoción procede por causas como incapacidad sobrevenida, negligencia grave, abuso de facultades, falta de rendición de cuentas o contravención de órdenes judiciales. La autoridad puede exigir fianza para asegurar el correcto desempeño y resarcimiento de perjuicios.",
            },
            {
              type: "paragraph",
              text: "Relación con herederos y legatarios: el albacea coordina, no sustituye la voluntad de la mayoría cuando la ley la requiere. Debe mantener informados a los interesados, convocar a acuerdos, someter a aprobación inventario, avalúo, pagos y bases de partición, y canalizar controversias a la autoridad. Con acreedores, negocia dentro de marcos legales, respeta prelación y evita preferencias indebidas. Con legatarios, cumple con exactitud y oportunidad. La transparencia reduce desconfianza y litigiosidad.",
            },
            {
              type: "paragraph",
              text: "El albacea termina por cumplimiento del encargo, remoción, renuncia aceptada, muerte o expiración del plazo legal o testamentario. A su salida, rinde cuentas finales y entrega bienes y documentos. Un traspaso ordenado protege la continuidad de la administración. En sucesiones complejas, la figura puede apoyarse en peritos y auxiliares (contadores, valuadores, depositarios), pero la responsabilidad última frente a herederos y autoridad recae en el albacea. Su oficio es pieza clave para que la sucesión transite de manera eficiente, justa y respetuosa de la voluntad del causante.",
            },
            {
              type: "accordion",
              header: "Deberes y responsabilidades",
              open: false,
              text: "Inventariar y conservar; cobrar y pagar conforme a prelación; rendir cuentas; solicitar autorizaciones; actuar con lealtad y diligencia; responder por daños causados por culpa o abuso.",
            },
          ],
        },
      ],
    },

    /* 2. Unidad principal */
    {
      id: "2",
      numbering: "Unidad 2",
      title: "De la sucesión testamentaria",
      content: [
        {
          type: "paragraph",
          text: "La sucesión testamentaria es el procedimiento mediante el cual el patrimonio de una persona fallecida se transmite conforme a la voluntad que el propio causante plasmó en un testamento válido. A diferencia de la sucesión intestada —que se rige por la ley ante la ausencia de testamento—, aquí el eje es la autonomía de la voluntad del testador, dentro de los límites y formas que marca el derecho civil. En términos prácticos, el testamento ordena qué bienes, derechos y cargas se asignan a herederos y legatarios, define reglas de administración por medio del albacea y puede prever escenarios como sustituciones o condiciones. Este marco otorga certeza a la familia, reduce la conflictividad y orienta la tramitación judicial o notarial. En el aula, estudiar la sucesión testamentaria implica dominar sus conceptos, sujetos, modalidades y efectos, así como las garantías de forma y fondo que le dan eficacia. También exige diferenciar con claridad la figura del heredero —que sucede a título universal— del legatario —que recibe bienes o derechos determinados—, y reconocer cómo operan las etapas del proceso hasta la partición y entrega de la herencia.",
        },
        {
          type: "paragraph",
          text: "Desde la perspectiva dogmática, el testamento es un acto jurídico **unilateral, personalísimo, revocable y solemne**. Es unilateral porque emana de la sola voluntad del testador; personalísimo, porque nadie puede testar por otro; revocable, porque el autor puede modificar su disposición mientras conserve capacidad; y solemne, porque requiere formas específicas para su validez (p. ej., ante fedatario, con las formalidades locales). Es, además, recepticio en el sentido de que sus efectos se producen con la muerte del otorgante (mortis causa). Conocer estas notas ayuda a evaluar la validez de un testamento, identificar vicios del consentimiento o formalidades omitidas, y prever sus consecuencias. En clave de política jurídica, la institución busca compatibilizar la libertad dispositiva con la seguridad de los destinatarios, estableciendo salvaguardas de publicidad, fe pública y custodia documental. Por ello, la materia enlaza técnica y ética: no se trata sólo de ‘repartir bienes’, sino de garantizar decisiones informadas, claras y ejecutables, acordes con el orden público y los derechos de terceros.",
        },
        {
          type: "accordion",
          header: "Nivel 1 — Fundamentos y finalidad",
          open: false,
          text: "Finalidad: asegurar la transmisión ordenada del patrimonio conforme a la voluntad del causante. Notas del testamento: unilateral, personalísimo, revocable, solemne. Diferencias básicas con la sucesión intestada. Efectos mortis causa y rol de la forma para dar seguridad.",
        },
        {
          type: "paragraph",
          text: "Los **sujetos** de la sucesión testamentaria son, primordialmente, el testador, los herederos y legatarios, y el albacea. El **testador** debe contar con capacidad para testar conforme a la ley aplicable (edad, lucidez y ausencia de prohibiciones específicas). El **heredero** sucede a título universal: recibe el activo y, correlativamente, responde del pasivo hasta donde alcance la herencia; el **legatario** recibe bienes o derechos determinados (legados) y, en principio, no asume pasivos más allá de lo legado. El **albacea** es el ejecutor de la voluntad del testador: conserva y administra la masa, paga deudas y cargas, rinde cuentas y realiza la partición. El testamento puede prever **sustitutos** de heredero o de legatario (vulgar o fideicomisaria, según el sistema aplicable) para el caso de premoriencia, incapacidad, renuncia o incumplimiento de condiciones. Comprender la relación entre estos actores es crucial para analizar conflictos típicos: impugnaciones por incapacidad, interpretaciones de cláusulas ambiguas, cargas y modos, y coordinación entre varios llamados a heredar.",
        },
        {
          type: "paragraph",
          text: "En la práctica, la sucesión testamentaria ofrece **ventajas**: reduce la incertidumbre, permite planear cargas y legados con precisión, facilita la designación de tutores o albaceas, y puede incorporar condiciones o modos razonables. También tiene **riesgos** cuando se descuidan forma o claridad: testamentos contradictorios, disposiciones imposibles, omisión de bienes relevantes o afectación de derechos no disponibles. Por eso, el estudio exige revisar las **modalidades** previstas en cada legislación (abierto, cerrado, ológrafo y otros), sus requisitos y causales de nulidad. Un punto operativo es distinguir el ‘antes’ y el ‘después’: antes, la asesoría para testar con claridad y previsión; después, la tramitación ordenada de la sucesión: comprobación del testamento, reconocimiento de herederos y legatarios, inventario y avalúo, pago de deudas y cargas, y partición. Estas etapas conectan técnica civil, registral y procesal, y muestran cómo el diseño previo incide en la celeridad y equidad del reparto.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Sujetos y capacidad",
          open: false,
          text: "Sujetos: testador, herederos, legatarios y albacea. Capacidad para testar (requisitos y límites). Sustituciones del heredero o del legatario (supuestos de aplicación). Responsabilidades del albacea: conservación, administración, pagos y partición.",
        },
        {
          type: "paragraph",
          text: "Un componente didáctico clave es la **tipología de disposiciones** contenidas en testamento. Además de la institución de herederos, suelen coexistir **legados** (muebles, inmuebles, sumas de dinero, derechos, condonaciones), cargas o modos (encargos específicos), y **sustituciones** para asegurar continuidad si falla el primer llamado. Cada disposición tiene efectos distintos en el inventario y en la cuenta de administración del albacea: los legados se pagan con preferencia conforme a su naturaleza y límites; las cargas se ejecutan bajo vigilancia de los herederos y, en su caso, de la autoridad; las sustituciones operan automáticamente al actualizarse la condición. De ahí la importancia de redactar con precisión: identificar bienes, ubicar gravámenes, prever indivisiones transitorias si son necesarias y armonizar legados con la capacidad real de la masa. Finalmente, la sucesión testamentaria convive con reglas imperativas (p. ej., orden público, protección de incapaces), de modo que la libertad de testar se ejerce responsablemente dentro del marco legal vigente.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Modalidades y efectos",
          open: false,
          text: "Modalidades de testamento (según legislación local) y formalidades. Disposiciones típicas: institución de herederos, legados, cargas y sustituciones. Etapas de trámite: protocolización, inventario/avalúo, pago de deudas y partición; efectos frente a terceros.",
        },
      ],
      subthemes: [
        {
          id: "2.1",
          numbering: "2.1",
          title: "Sucesión testamentaria",
          content: [
            {
              type: "paragraph",
              text: "La sucesión testamentaria es el proceso mediante el cual el patrimonio de una persona fallecida se transmite conforme a lo dispuesto en su testamento. A diferencia de la sucesión intestada —que sigue el orden legal cuando no hay testamento— aquí prevalece la voluntad del causante, siempre que se hayan cumplido los requisitos formales y materiales exigidos por la ley. Su razón práctica es doble: por un lado, dar seguridad jurídica a los destinatarios; por el otro, garantizar que las decisiones patrimoniales del titular produzcan efectos una vez ocurrido el deceso. De ahí su nota central: la libertad de disposición dentro de los límites legales, con la intervención de un albacea que administra, liquida y distribuye conforme a lo ordenado por el testador. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "Este tipo de sucesión se identifica por características operativas claras: es voluntaria (emana de una decisión libre), depende de la existencia de un testamento válido y se despliega a través de un procedimiento en el que se reconoce a herederos/legatarios, se designa albacea, se forma inventario y avalúo, se rinden cuentas y, por último, se realiza la partición y adjudicación. Cuando el testamento contiene condiciones o cargas, corresponde verificarlas antes de la entrega final de bienes o derechos. Lo esencial es mantener la trazabilidad entre lo escrito por el testador y cada acto de administración y reparto.",
            },
            {
              type: "paragraph",
              text: "Entre sus ventajas, destaca que reduce la incertidumbre, acota conflictos familiares y permite al testador modular efectos (por ejemplo, legados específicos o sustituciones). También facilita la planeación patrimonial y fiscal. No está exenta de riesgos: la impugnación por vicios del consentimiento o por inobservancia de formalidades; los costos y tiempos del trámite; o ambigüedades redaccionales que requieran interpretación judicial. Por ello, la técnica testamentaria y la custodia del instrumento son tan importantes como la voluntad misma.",
            },
            {
              type: "paragraph",
              text: "El procedimiento práctico se articula en etapas. Primero, se verifica la existencia del testamento y su validez; después, el juez o notario —según el caso— tiene por reconocidos a los herederos y nombra al albacea. Sigue la formación del inventario y avalúo para conocer la masa hereditaria: bienes, derechos y deudas. Con base en ello, se pagan los pasivos y gastos, se liquidan cargas y, finalmente, se procede a la partición conforme a las cuotas o legados dispuestos. Cada fase debe documentarse para asegurar transparencia y rendición de cuentas.",
            },
            {
              type: "paragraph",
              text: "La coordinación entre herederos, legatarios y acreedores exige reglas de comunicación y plazos. Una buena práctica es publicar un plan de trabajo del albacea —con hitos y entregables— y fijar ventanas para objeciones o aclaraciones. La claridad procedimental disminuye la litigiosidad y permite resolver discrepancias con criterios previamente comunicados. Cuando el caudal incluye bienes registrales, se programan oportunamente los actos ante las oficinas competentes para evitar retrasos.",
            },
            {
              type: "paragraph",
              text: "El éxito de la sucesión testamentaria depende de la calidad del instrumento y de la conducta de sus partícipes. Testamentos claros —sin contradicciones, con identificaciones completas y cláusulas de sustitución— simplifican la ejecución. Herederos informados y un albacea diligente, que rinde cuentas periódicas y mantiene la documentación en orden, transforman un trámite complejo en un proceso previsible y justo. El estándar es doble: cumplir la ley y honrar la voluntad del testador.",
            },
            {
              type: "paragraph",
              text: "En contextos con patrimonio mixto (bienes muebles, inmuebles, derechos, obligaciones), conviene anticipar escenarios: legados de cosa cierta, cargas, condiciones suspensivas o resolutorias, y eventuales colisiones con porciones legítimas que la ley proteja. Documentar supuestos y dejar constancia de decisiones reduce la posibilidad de controversias futuras y preserva la integridad del proceso sucesorio.",
            },
            {
              type: "accordion",
              header: "Rasgos clave de la sucesión testamentaria",
              open: false,
              text: "Voluntaria y formal; prevalece la voluntad del testador; reconocimiento de herederos/legatarios; albacea como administrador; inventario–avalúo–cuentas–partición.",
            },
            {
              type: "accordion",
              header: "Ventajas y cautelas prácticas",
              open: false,
              text: "Seguridad y previsibilidad; evita conflictos; planeación patrimonial. Cuidar formalidades, claridad redaccional, y trazabilidad de actos del albacea.",
            },
          ],
        },
        {
          id: "2.2",
          numbering: "2.2",
          title: "Características del testamento",
          content: [
            {
              type: "paragraph",
              text: "El testamento es un acto jurídico por el cual una persona dispone de sus bienes y derechos para después de su muerte. En el material de estudio se subrayan notas clásicas: es unilateral (basta la voluntad del testador), unipersonal (no admite testamentos conjuntos), personalísimo (no se delega), recepticio en cuanto puede ser conocido por terceros en su otorgamiento, formal (requiere solemnidades) y esencialmente revocable (puede modificarse o reemplazarse hasta la muerte). Cada una de estas características protege la autenticidad y eficacia de la voluntad testamentaria dentro del marco legal aplicable. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "Su unilateralidad significa que no precisa aceptación previa de herederos o legatarios; éstos adquieren derechos a partir del fallecimiento y conforme a la delación. La unipersonalidad prohíbe testamentos mancomunados: se evita que la voluntad de una persona quede atada a otra y se resguarda el principio de libertad de testar. La personalísima naturaleza impide otorgarlo por representante; sólo el titular del patrimonio puede decidir su destino post mortem.",
            },
            {
              type: "paragraph",
              text: "El carácter formal no es un tecnicismo: procura certeza. Según el tipo (p. ej., público abierto, cerrado u holográfico en regímenes que lo admiten), se exigen solemnidades, presencia de fedatario y/o testigos, lectura, firma y resguardo. La inobservancia de estas formas puede anular total o parcialmente el instrumento. Por ello, la asesoría y el apego estricto a las formalidades son condiciones de validez, no meras recomendaciones.",
            },
            {
              type: "paragraph",
              text: "La revocabilidad preserva la libertad durante toda la vida del testador: nuevas circunstancias familiares o patrimoniales (matrimonio, nacimiento de descendientes, adquisiciones, enajenaciones) justifican ajustar disposiciones. El testamento posterior, con las mismas o mayores formalidades, deroga al anterior en lo incompatible, lo complementa o lo sustituye por completo. Esa plasticidad evita ‘congelar’ decisiones que, con el tiempo, podrían volverse injustas.",
            },
            {
              type: "paragraph",
              text: "La claridad redaccional es tan relevante como la forma. Identificar correctamente a personas (nombre completo, relaciones), describir con precisión bienes y derechos, y prever sustituciones ante repudio o premoriencia reduce litigios. Cláusulas sobre cargas y condiciones deben ser lícitas, posibles y determinadas; cualquier ambigüedad procesal se traduce en demoras y costos.",
            },
            {
              type: "paragraph",
              text: "Los límites a la libertad de testar derivan de la ley: por ejemplo, protección de determinados familiares en ciertos regímenes, o la imposibilidad de imponer cargas contrarias al orden público o a derechos fundamentales. Estos linderos equilibran autonomía con justicia y evitan despojos encubiertos o cláusulas abusivas. El testamento eficaz no sólo cumple formalidades: respeta estos límites y anticipa su aplicación.",
            },
            {
              type: "paragraph",
              text: "Finalmente, más allá del instrumento, la custodia y la trazabilidad importan: conservar copias, informar a personas de confianza y verificar que los bienes registrados tengan documentación actualizada. Un testamento impecable puede tropezar si la evidencia patrimonial es deficiente. Por eso, la planeación sucesoria integra voluntad, forma y soporte documental.",
            },
            {
              type: "accordion",
              header: "Notas esenciales",
              open: false,
              text: "Unilateral, unipersonal, personalísimo, formal y revocable. Límites legales a la libertad de testar.",
            },
            {
              type: "accordion",
              header: "Buenas prácticas de redacción y custodia",
              open: false,
              text: "Identificaciones completas; descripciones precisas; sustituciones; cargas lícitas; custodia segura y documentación patrimonial al día.",
            },
          ],
        },
        {
          id: "2.3",
          numbering: "2.3",
          title: "Sujetos del testamento",
          content: [
            {
              type: "paragraph",
              text: "En torno al testamento intervienen sujetos con funciones definidas: el testador (quien dispone), el albacea (quien ejecuta y administra), los herederos (quienes suceden a título universal) y los legatarios (beneficiarios a título particular). El material recuerda, además, la figura del sustituto (persona llamada a ocupar el lugar del heredero/legatario si éste no puede o no quiere aceptar). La correcta identificación de cada rol y de sus capacidades evita nulidades, conflictos de interés y dilaciones en la ejecución. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "paragraph",
              text: "Capacidad para testar: la regla es amplia; puede testar toda persona a quien la ley no lo prohíba, siempre que conserve aptitud para comprender y querer el acto. Este estándar protege decisiones libres y conscientes, excluyendo supuestos de incapacidad legal o de vicios del consentimiento. En la práctica, el fedatario verifica identidad, edad y condiciones, y documenta circunstancias para robustecer la validez del instrumento.",
            },
            {
              type: "paragraph",
              text: "El testador debe expresar con precisión su voluntad, sin imposiciones externas. Le corresponde decidir la designación de herederos y legatarios, fijar cuotas, ordenar legados, imponer cargas lícitas y prever sustituciones. Aunque no es requisito, la claridad sobre motivaciones y el uso de lenguaje inequívoco mitigan controversias. En todo caso, su libertad se ejerce dentro de los límites legales y formales expuestos en el subtema anterior.",
            },
            {
              type: "paragraph",
              text: "El heredero sucede a título universal: recibe derechos y, correlativamente, obligaciones y deudas de la herencia hasta donde alcance el caudal. Puede aceptar o repudiar y, al hacerlo, se activan escenarios procesales distintos. El legatario, en cambio, adquiere un bien o derecho determinado; su posición es más acotada, pero también sujeta a las cargas que el testador establezca. La coordinación entre ambas figuras —herederos y legatarios— es tarea típica del albacea.",
            },
            {
              type: "paragraph",
              text: "El albacea es el ejecutor de la voluntad del testador. Administra bienes, forma inventario y avalúo, paga deudas y gastos, rinde cuentas y realiza la partición. Puede ser testamentario (designado por el testador) o, a falta de éste, nombrado conforme a la ley. Su actuación está sometida a vigilancia judicial o de herederos, y su omisión o abuso genera responsabilidades. Una gestión profesional y documentada reduce fricciones y resguarda el valor del patrimonio.",
            },
            {
              type: "paragraph",
              text: "La sustitución —ordinaria u otras modalidades admitidas— cubre supuestos de premoriencia, incapacidad o repudio del llamado principal. Operar con sustitutos evita vacíos y acelera la ejecución, pues no obliga a recomponer toda la estructura del testamento. Para que la sustitución sea eficaz, debe redactarse con claridad (condiciones, alcances, bienes comprendidos) y ser compatible con el resto de disposiciones.",
            },
            {
              type: "paragraph",
              text: "En suma, el diseño de sujetos y roles conforma la ‘arquitectura’ del testamento. Un reparto claro, un albacea competente y sustituciones bien previstas simplifican el curso de la sucesión. Cuidar capacidades legales, evitar conflictos y documentar la gestión son decisiones que preservan la voluntad del testador y la paz familiar.",
            },
            {
              type: "accordion",
              header: "Mapa rápido de roles",
              open: false,
              text: "Testador (dispone); Albacea (administra y ejecuta); Heredero (título universal); Legatario (título particular); Sustituto (suplencia condicionada).",
            },
            {
              type: "accordion",
              header: "Recomendaciones prácticas",
              open: false,
              text: "Verificar capacidad; redacción clara y completa; prever sustituciones; elegir albacea idóneo; documentar rendiciones de cuentas.",
            },
          ],
          subthemes: [
            {
              id: "2.3.1",
              numbering: "2.3.1",
              title: "Capacidad para testar",
              content: [
                {
                  type: "paragraph",
                  text: "La capacidad para testar es la aptitud jurídica para emitir válidamente una declaración de voluntad por la cual una persona dispone de sus bienes y derechos para después de su muerte. En términos generales, la regla es incluyente: puede testar quien la ley no se lo prohíba. La exigencia central es que el sujeto posea capacidad legal suficiente para comprender el alcance de sus disposiciones y para expresarlas libremente, sin coacción ni error. La materia atiende a dos planos: a) capacidad, que se refiere a las cualidades del sujeto; y b) forma, que alude al cauce formal que la voluntad debe seguir. Por ello, aun cuando la persona goce de capacidad, la inobservancia de las solemnidades del tipo de testamento escogido puede anular total o parcialmente lo dispuesto. Como principio rector, la libertad de testar se ejerce dentro de los límites de la ley, la moral y el orden público, con respeto a derechos mínimos y a cargas fiscales derivadas.",
                },
                {
                  type: "paragraph",
                  text: "Bajo el estándar legal aplicable, la capacidad se presume, y lo excepcional son las prohibiciones o restricciones que la norma fija con criterios de protección. Entre los supuestos típicos de incapacidad se encuentran los estados que impiden comprender y querer (falta de discernimiento, trastornos que anulan la conciencia del acto en el momento de testar), así como las prohibiciones derivadas de situaciones de conflicto de interés o de indebida influencia. Esta lógica protectora no despoja a la persona de su autonomía, sino que busca asegurar que el testamento refleje auténticamente su querer. En la práctica, el fedatario público verifica signos de entendimiento y libertad, y documenta circunstancias del otorgamiento para dar certeza probatoria.",
                },
                {
                  type: "paragraph",
                  text: "Además de la capacidad subjetiva, opera la capacidad objetiva para disponer: el testador sólo puede ordenar sobre bienes y derechos de los cuales sea titular o de los que razonablemente espere serlo al momento de su muerte. Disposiciones sobre bienes ajenos, indeterminados o ilícitos devienen ineficaces. La buena técnica recomienda identificar claramente los bienes (inmuebles con datos registrales, cuentas, vehículos, derechos de autor o acciones) y precisar cargas, legados o condiciones, evitando expresiones ambiguas que dificulten la ejecución. La claridad reduce litigios sucesorios y protege a herederos y legatarios, quienes deberán asumir obligaciones fiscales y registrales derivadas de las adjudicaciones.",
                },
                {
                  type: "accordion",
                  header: "Claves operativas (capacidad para testar)",
                  open: false,
                  text: "Regla general: capacidad para quien la ley no prohíbe. Verificar discernimiento y libertad al otorgar; precisar bienes y cargas; observar la forma del testamento elegido; evitar disposiciones sobre bienes ajenos o ilícitos; documentar circunstancias del acto.",
                },
                {
                  type: "paragraph",
                  text: "La capacidad debe ser apreciada al tiempo del otorgamiento, no antes ni después. Esto significa que eventuales enfermedades o limitaciones previas o posteriores no anulan por sí mismas el testamento si, en el momento de firmarlo, el otorgante comprendía y quería lo que decía. Del mismo modo, la existencia de apoyos para el ejercicio de la capacidad, de acuerdo con marcos de igualdad y no discriminación, no significa ausencia de capacidad; al contrario, permiten que más personas ejerzan su derecho a decidir sobre su patrimonio mortis causa con ajustes razonables. El fedatario debe dejar constancia clara de la entrevista y de las explicaciones brindadas sobre efectos legales y fiscales del acto.",
                },
                {
                  type: "paragraph",
                  text: "En cuanto a la forma, el ordenamiento admite varias modalidades —abierto, cerrado, ológrafo, entre otras—, cada una con requisitos y controles. La elección de la modalidad impacta la manera de demostrar la autenticidad de la voluntad y la integridad del documento. En un testamento abierto, la presencia del notario y, en su caso, de testigos calificados, cimenta la fe pública; en el cerrado, la custodia del sobre sellado protege el secreto; el ológrafo exige escritura autógrafa y depósito en términos legales. El incumplimiento de estas exigencias de forma puede provocar nulidades que frustren la voluntad del testador, aun teniendo éste plena capacidad.",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, la capacidad para testar convive con límites materiales: la ley puede reservar porciones o imponer restricciones específicas (p. ej., en materia de alimentos, cargas o asignaciones forzosas cuando así lo prevé el ordenamiento aplicable). El consejo práctico es sencillo: a) verificar la capacidad del otorgante; b) identificar bienes y derechos; c) elegir modalidad con fedatario competente; d) prever sustituciones y cargas de manera clara; y e) conservar copias y constancias. Este cuidado preventivo evita impugnaciones futuras y respeta la última voluntad.",
                },
                {
                  type: "accordion",
                  header: "Checklist rápido para el fedatario",
                  open: false,
                  text: "1) Verificación de identidad y discernimiento; 2) Explicación de efectos; 3) Identificación precisa de bienes; 4) Revisión de sustituciones y cargas; 5) Cumplimiento de formalidades; 6) Constancias y resguardos.",
                },
              ],
            },
            {
              id: "2.3.2",
              numbering: "2.3.2",
              title: "Testador",
              content: [
                {
                  type: "paragraph",
                  text: "El testador es el sujeto activo del acto testamentario: la persona que, con capacidad legal y voluntad libre, ordena el destino de sus bienes y derechos para después de su muerte. Su rol no se agota en ‘firmar’; implica comprender el alcance de lo que dispone, identificar con precisión a herederos y legatarios, y establecer cargas, condiciones o sustituciones cuando estime conveniente. La ley exige que la voluntad sea personalísima: nadie puede testar por otro, ni siquiera mediante representante. Por ello, es esencial que el testador declare por sí la extensión de su patrimonio y la intención que lo guía, y que el fedatario capture esa voluntad con lenguaje claro, evitando fórmulas oscuras o contradictorias que abran margen a interpretaciones litigiosas.",
                },
                {
                  type: "paragraph",
                  text: "Un testamento técnicamente bien construido inicia por los datos de identificación del otorgante, la expresión de su estado civil y régimen patrimonial, y continúa con el nombramiento de herederos, en su caso legatarios, albacea y, cuando procede, tutor. La asignación de herederos puede ser por cuotas (universales) o por partes alícuotas; los legados versan sobre bienes o derechos determinados. La previsión de sustitutos para herederos o legatarios —por muerte, renuncia o incapacidad— evita que las asignaciones ‘caigan’ y se abran vacíos. La designación de un albacea con facultades expresas para inventariar, administrar y partir crea una vía de ejecución ordenada y reduce fricciones entre llamados a la sucesión.",
                },
                {
                  type: "paragraph",
                  text: "La libertad de testar se ejerce dentro de límites: el testador no puede disponer contra la ley ni causar perjuicio injustificado mediante cargas imposibles o ilícitas. La voluntad debe ser libre de vicios; amenazas, engaño o error sustancial son causas de nulidad. En la práctica, conviene que el fedatario interrogue al otorgante sobre el origen de su decisión, la comprensión de sus efectos y la inexistencia de presiones, dejando asentada la lectura y aprobación del documento. La transparencia en la redacción y la explicación de cláusulas —por ejemplo, condiciones suspensivas o resolutorias— previenen disputas y honran la voluntad del causante.",
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas de redacción (testador)",
                  open: false,
                  text: "Identificación completa; lenguaje preciso; nombramientos coherentes (herederos/legatarios/albacea/tutor); previsión de sustituciones; cargas lícitas y posibles; lectura y aprobación expresa; constancia de ausencia de coacción.",
                },
                {
                  type: "paragraph",
                  text: "Es recomendable que el testador realice un inventario de sus bienes y deudas al momento de testar, o cuando menos, una lista orientativa de los principales activos: inmuebles, cuentas, inversiones, vehículos, participaciones sociales, propiedad intelectual. Este ejercicio no crea derechos inmediatos, pero brinda claridad sobre la base patrimonial y evita omisiones o asignaciones contradictorias. Cuando existan bienes sujetos a regímenes particulares (sociedades conyugales, fideicomisos, copropiedad), las cláusulas deben armonizarse con dichos marcos para evitar nulidades parciales o dificultades registrales en la adjudicación.",
                },
                {
                  type: "paragraph",
                  text: "El testamento es, por naturaleza, revocable: mientras viva, el testador puede otorgar uno nuevo que modifique o revoque total o parcialmente disposiciones anteriores. Esta característica aconseja revisar y actualizar el instrumento cuando cambien circunstancias relevantes (matrimonio, divorcio, nacimiento de hijos, adquisición o enajenación de bienes significativos). La revocación expresa o tácita debe quedar debidamente documentada para no dejar coexistiendo instrumentos incompatibles que compliquen el trámite sucesorio. Un expediente notarial ordenado y un sistema personal de resguardos facilitan el trabajo posterior del albacea y de los llamados.",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, el testador responsable piensa en la ejecutabilidad de su voluntad: designa un albacea capaz, prevé mecanismos de desempate, utiliza criterios objetivos para repartir (porcentajes, lotes, avalúos), evita cláusulas que fomenten el conflicto entre llamados e incorpora, cuando lo desea, disposiciones de carácter familiar o moral que, sin ser exigibles coactivamente, orientan la conducción del caudal. Este equilibrio entre libertad y técnica asegura que el testamento cumpla su función: ordenar el destino del patrimonio con respeto a la dignidad de las personas involucradas.",
                },
                {
                  type: "accordion",
                  header: "Check de ejecutabilidad",
                  open: false,
                  text: "Albacea con facultades suficientes; reglas de adjudicación claras; sustituciones previstas; coherencia con regímenes especiales; indicaciones sobre deudas y cargas; actualización periódica del instrumento.",
                },
              ],
            },
            {
              id: "2.3.3",
              numbering: "2.3.3",
              title: "Heredero",
              content: [
                {
                  type: "paragraph",
                  text: "El heredero es la persona llamada a suceder al causante en la universalidad o en una cuota del patrimonio, conforme a lo dispuesto por el testamento o, a falta de éste, por la ley. La categoría abarca al heredero testamentario —designado expresamente por el testador— y al heredero legítimo —determinado por el orden legal—. A diferencia del legatario, que recibe bienes o derechos determinados, el heredero asume una porción del activo y del pasivo de la herencia. Ello conlleva derechos (a ser puesto en posesión, a pedir inventario y partición) y obligaciones (aceptar o repudiar, contribuir al pago de deudas hereditarias, cargas y tributos). La figura implica continuidad patrimonial responsable: no sólo se heredan activos; también se sucede en obligaciones hasta donde alcance el caudal.",
                },
                {
                  type: "paragraph",
                  text: "La ley suele distinguir entre herederos en línea directa (descendientes y ascendientes), colaterales (hermanos, sobrinos, tíos) y el cónyuge o concubina(o), estableciendo órdenes de preferencia para la sucesión legítima. En testamentos, el testador puede distribuir por cuotas o designar sustituciones para eventualidades. Es frecuente añadir cargas o modalidades (por ejemplo, obligación de cuidar a un tercero o de conservar un bien familiar). Estas cargas deben ser lícitas y posibles; de lo contrario, se tendrán por no puestas. Desde el punto de vista procesal, los herederos adquieren personalidad para promover o comparecer en el juicio sucesorio, impulsar inventario, avalúo y partición, y oponerse a pretensiones incompatibles con la voluntad del causante o con el orden legal.",
                },
                {
                  type: "paragraph",
                  text: "La aceptación es el acto por el cual el llamado consiente en adquirir la herencia. Puede ser expresa —mediante declaración— o tácita —por actos que suponen necesariamente la voluntad de aceptar—. El repudio es la renuncia a los derechos hereditarios. Ambos actos son, en principio, irrevocables y retrotraen sus efectos al momento de la muerte. Antes de aceptar, el llamado puede solicitar inventario para conocer la composición del caudal y optar informadamente, y puede pedir la administración por el albacea para conservar los bienes. En algunos ordenamientos, existen modalidades de aceptación a beneficio de inventario para limitar la responsabilidad del heredero a los bienes de la herencia, preservando su patrimonio personal.",
                },
                {
                  type: "accordion",
                  header: "Derechos y deberes del heredero",
                  open: false,
                  text: "Derechos: investir la posesión, pedir inventario, avalúo y partición, impugnar disposiciones contrarias a la ley o al testamento. Deberes: aceptar o repudiar, contribuir a deudas y cargas hasta el valor del caudal, acatar cargas lícitas impuestas por el testador.",
                },
                {
                  type: "paragraph",
                  text: "Una adecuada ejecución sucesoria exige cooperación entre herederos y albacea. La transparencia en inventarios, el acuerdo sobre criterios de valuación y la elección de fórmulas de partición (adjudicación por lotes, compensaciones en dinero, ventas y distribución) reducen litigios. El heredero diligente documenta su aceptación o repudio, conserva comprobantes de gastos hereditarios y participa en las juntas de herederos para adoptar resoluciones por mayoría cuando la ley así lo prevé. Los conflictos más comunes nacen de la ambigüedad en porcentajes, de la omisión de sustituciones y de cargas redactadas en términos vagos; por eso la calidad del testamento impacta directamente la paz sucesoria.",
                },
                {
                  type: "paragraph",
                  text: "Cuando concurren herederos con legatarios, se atiende primero el pago de deudas y cargas de la herencia, y luego el de legados preferentes, conforme al orden legal. Si el activo es insuficiente, pueden reducirse legados o practicarse ventas para cubrir obligaciones. El heredero no puede disponer válidamente de bienes hereditarios antes de la partición si con ello perjudica a los demás llamados; tales actos son susceptibles de impugnación. En presencia de menores de edad o personas con discapacidad, el juez vigila especialmente el respeto de sus derechos y puede exigir autorizaciones o medidas de protección adicionales.",
                },
                {
                  type: "paragraph",
                  text: "En síntesis, la condición de heredero implica una posición jurídica compleja que exige decisiones informadas. La prudencia aconseja asesorarse antes de aceptar, especialmente cuando se sospechan pasivos relevantes, y colaborar estrechamente con el albacea para una administración eficiente. La finalidad es doble: cumplir la voluntad del causante y asegurar una transición patrimonial ordenada, respetuosa de la ley y de los derechos de todos los interesados.",
                },
                {
                  type: "accordion",
                  header: "Errores frecuentes en la práctica",
                  open: false,
                  text: "Aceptar sin conocer pasivos; enajenar bienes hereditarios sin acuerdos; ignorar cargas del testamento; omitir sustituciones; prescindir de inventario y avalúo; litigar sin explorar acuerdos de partición.",
                },
              ],
            },
            {
              id: "2.3.4",
              numbering: "2.3.4",
              title: "Sustituto del heredero",
              content: [
                {
                  type: "paragraph",
                  text: "El sustituto del heredero es la persona designada para recibir la herencia en caso de que el heredero originalmente nombrado no llegue a adquirirla —por muerte previa o simultánea al causante, por incapacidad, por repudio o por otra causa legal—. La sustitución puede ser testamentaria (prevista por el testador en el propio instrumento) o legal (determinada por la ley cuando faltan los supuestos previstos por el causante). Su función es asegurar la continuidad de la transmisión patrimonial evitando vacíos o la apertura no deseada de una sucesión legítima. La cláusula de sustitución debe redactarse con claridad, indicando supuestos de entrada en juego y, de ser varios sustitutos, el orden de preferencia o la concurrencia por partes iguales.",
                },
                {
                  type: "paragraph",
                  text: "Para ser sustituto se exige, en términos generales, que la persona tenga capacidad legal para heredar, que no se encuentre comprendida en prohibiciones o causas de incapacidad y que no haya sido excluida por el propio testador. Es aconsejable prever sustitutos en cascada (primero A; en su defecto B; en su defecto C), así como reglas para supuestos de premoriencia y conmoriencia. Esta previsión dota de estabilidad al diseño testamentario y reduce la discrecionalidad judicial posterior. En testamentos con varios herederos por cuotas, la sustitución puede pactarse respecto de cada cuota o como sustitución recíproca, según convenga al plan patrimonial del otorgante.",
                },
                {
                  type: "paragraph",
                  text: "Los efectos de la sustitución, una vez actualizada la condición de entrada, equiparan al sustituto con el heredero que reemplaza: adquiere los derechos y asume las obligaciones que a éste le hubieren correspondido sobre la porción hereditaria respectiva. Si el testador impuso cargas o condiciones a la asignación original, éstas se transmiten al sustituto salvo disposición en contrario. La ejecución exige que el albacea y el juez sucesorio verifiquen la actualización del supuesto (p. ej., acta de defunción del heredero sustituido o escrito de repudio) y que corran traslado a interesados para asegurar transparencia y derecho de audiencia.",
                },
                {
                  type: "accordion",
                  header: "Tipos y supuestos típicos de sustitución",
                  open: false,
                  text: "Testamentaria: prevista por el causante; Legal: supletoria por ley. Supuestos: premoriencia/conmoriencia; incapacidad; repudio; condición incumplida; pérdida del derecho por causa legal.",
                },
                {
                  type: "paragraph",
                  text: "En presencia de legados, la sustitución opera de modo similar: el sustituto del legatario recibe el bien o derecho legado si el titular original no puede o no quiere hacerlo. Cuando el testador no prevé sustitución para legados y éstos ‘caen’, su valor puede incorporarse a la masa hereditaria y redistribuirse conforme a la voluntad residual o a la ley. Por ello, la técnica notarial recomienda prever sustituciones también para legados de especial importancia familiar (viviendas, empresas, piezas de valor afectivo), con reglas de conservación o administración cuando sea necesario.",
                },
                {
                  type: "paragraph",
                  text: "Es útil coordinar la sustitución con otras cláusulas preventivas: condición de sobrevivencia mínima (p. ej., ‘adquirirá quien sobreviva 30 días’), designación de beneficiarios contingentes, y reglas para herederos menores o con discapacidad (tutor, curador o administrador especial). En patrimonios con actividad empresarial, puede preverse la transmisión ordenada de partes sociales o acciones a sustitutos con habilidades y disponibilidad para continuar el negocio, evitando parálisis. Estas decisiones no sustituyen acuerdos societarios, pero se alinean con ellos para una transición coherente.",
                },
                {
                  type: "paragraph",
                  text: "En suma, la figura del sustituto protege la eficacia del testamento frente a contingencias. Su correcta previsión y documentación otorga seguridad jurídica a la sucesión, reduce litigios y asegura que la voluntad del causante se cumpla incluso cuando cambian circunstancias respecto de los herederos originalmente llamados. El principio práctico es simple: ‘testamento sin sustituciones es testamento con huecos’. La redacción cuidadosa convierte esta herramienta en un seguro de ejecutabilidad del plan sucesorio.",
                },
                {
                  type: "accordion",
                  header: "Errores que generan litigio",
                  open: false,
                  text: "No prever sustitutos; redactar cláusulas ambiguas; olvidar efectos sobre cargas; omitir evidencia de premoriencia/repudio; desalinear sustitución con legados, sociedad conyugal o acuerdos societarios.",
                },
              ],
            },
          ],
        },
        {
          id: "2.4",
          numbering: "2.4",
          title: "Modalidades a la que están sujetos los testamentos",
          content: [
            {
              type: "paragraph",
              text: "Al estudiar la sucesión testamentaria conviene distinguir las modalidades o formas en que la voluntad del causante puede exteriorizarse con validez jurídica. La forma no es un detalle accesorio: en materia sucesoria, la solemnidad protege la autenticidad de la voluntad, previene fraudes y brinda certeza a herederos y legatarios. De modo sintético, el material de estudio reconoce tres grandes modalidades: el testamento ológrafo, el testamento público abierto y el testamento público cerrado. Cada una responde a una lógica distinta de documentación, control y confidencialidad, y por ello plantea requisitos propios de otorgamiento, conservación y posterior ejecución. En el ológrafo, prevalece la autoría material del testador; en el público abierto, el control de legalidad y la publicidad mediante fedatario; y en el público cerrado, la reserva del contenido hasta el momento oportuno. Comprender sus diferencias permite elegir con prudencia, minimizar riesgos de nulidad y anticipar las implicaciones probatorias que, llegado el caso, tendrá el instrumento. En la práctica docente, esta clasificación sirve además para ordenar los ejemplos: ¿qué hacer si el testador desea máxima reserva?, ¿o si prefiere asesoría y lectura en voz alta?, ¿o si por razones personales quiere escribirlo de su puño y letra? La respuesta no es única: depende de la situación vital del otorgante, de su patrimonio, de su red familiar y de los medios de prueba que desea dejar. A partir de esta tipología, el curso avanza hacia legados, sustituciones y otras instituciones que se montan sobre el “continente” formal del testamento.",
            },
            {
              type: "accordion",
              header: "Vista rápida · Modalidades (según el material)",
              open: false,
              text: "OLOGRAFO: escrito y firmado por el testador. PÚBLICO ABIERTO: ante notario/funcionario competente, con testigos. PÚBLICO CERRADO: ante notario/funcionario competente, sellado y sin presencia de testigos.",
            },
            {
              type: "paragraph",
              text: "Testamento ológrafo. Esta modalidad descansa en la escritura autógrafa del testador: el documento es elaborado íntegramente de su puño y letra y debidamente firmado. Su principal atractivo es la inmediatez: el otorgante puede redactar en momentos de lucidez y calma, sin intermediación inmediata de terceros. Sin embargo, esa misma autonomía exige cuidados: (i) identificar con precisión al otorgante, (ii) fechar el documento, (iii) redactar con claridad las disposiciones (herencias, legados, sustituciones) y (iv) prever su custodia y posterior presentación. La práctica demuestra que muchos conflictos se originan en omisiones formales —fechas ambiguas, tachaduras, firmas dudosas— o en la pérdida material del escrito. Por eso, al evaluar el ológrafo debe ponderarse la seguridad de su guarda y la probanza futura de su autenticidad. En familias complejas, la ausencia de control externo puede alentar disputas. En cambio, cuando el patrimonio es sencillo y el testador puede custodiar el documento o someterlo luego a un procedimiento de depósito, el ológrafo ofrece una vía accesible, económica y fiel a la voluntad expresada sin intermediarios. En términos pedagógicos, conviene ejercitar redacciones claras, establecer cláusulas de legados de forma precisa (cosa, persona beneficiaria, modo de entrega) y anticipar sustituciones para supuestos de premoriencia o renuncia.",
            },
            {
              type: "paragraph",
              text: "Testamento público abierto. En esta modalidad, el testador otorga su voluntad ante notario o funcionario competente, con la presencia de testigos. La nota característica es el control de legalidad y de capacidad en el acto de otorgamiento: el fedatario identifica al testador, recibe su declaración, la redacta con técnica jurídica, la lee en voz alta y recoge conformidad expresa antes de firmar y protocolizar. Ello aporta ventajas sustantivas: disminuye el riesgo de ambigüedades, previene disposiciones contrarias a derecho y refuerza la prueba del acto por la intervención de un tercero imparcial. A su vez, la presencia de testigos sirve como salvaguarda adicional frente a futuras impugnaciones por vicios de voluntad o incapacidad sobrevenida. En contextos patrimoniales complejos —empresas familiares, bienes inmuebles múltiples, disposiciones en favor de personas con necesidades especiales— el público abierto suele ser la opción más ordenada, porque permite articular legados, cargas, sustituciones y albaceazgo en un solo instrumento técnicamente consistente. Su aparente “falta de reserva” se compensa con la seguridad jurídica: el contenido queda protocolizado, accesible conforme a las reglas del régimen notarial y de archivos, y listo para su ejecución al abrirse la sucesión.",
            },
            {
              type: "accordion",
              header: "Cuándo elegir cada modalidad (orientación práctica)",
              open: false,
              text: "Ológrafo: sencillez, acceso, autoría directa. Público abierto: patrimonios complejos, necesidad de control y asesoría. Público cerrado: alta reserva del contenido con constancia del otorgamiento.",
            },
            {
              type: "paragraph",
              text: "Testamento público cerrado. Esta modalidad busca preservar la confidencialidad del contenido mediante un sobre o cubierta sellada, que el testador presenta ante notario o funcionario competente. La intervención fedataria da fe del acto de entrega y de la identidad del otorgante, pero el texto mismo permanece reservado; en el material de estudio se subraya que esta forma se otorga sin presencia de testigos y sellado, destacando así el énfasis en la reserva del contenido. La contracara de la confidencialidad es el reto logístico: la integridad material del sobre, su conservación y la apertura conforme a derecho tras el fallecimiento. Desde la perspectiva de política jurídica, el cerrado equilibra dos bienes: privacidad del plan sucesorio y seguridad del acto de otorgamiento. Su empleo es razonable cuando el testador desea evitar la circulación anticipada de su voluntad, por ejemplo, para no alterar equilibrios familiares o empresariales en vida. El operador jurídico debe documentar con particular cuidado datos de identificación, sellos, constancias de recepción y protocolos de guarda, pues cualquier duda sobre manipulación puede erosionar la fuerza probatoria del instrumento. En suma, el cerrado ofrece confidencialidad reforzada a costa de mayores exigencias de custodia.",
            },
            {
              type: "paragraph",
              text: "Comparación funcional. Vistas en conjunto, las tres modalidades comparten el mismo fin —hacer eficaz la voluntad del causante— pero difieren en su estructura probatoria. En el ológrafo, la prueba se centra en la autenticidad de la letra y firma; en el público abierto, en el acta notarial y el control de legalidad; en el cerrado, en la fe de presentación y el estado de sellado hasta la apertura. Elegir la modalidad no es una simple preferencia estilística: condiciona cómo se acreditará mañana la validez y cómo se ejecutarán las disposiciones (ej., legados de bienes específicos o sustitución de herederos). Por ello, el consejo técnico suele partir de tres preguntas: ¿qué nivel de confidencialidad desea el testador en vida?, ¿qué complejidad presenta el patrimonio y las cargas?, ¿qué tan importante es que la voluntad quede inmediatamente protocolizada y disponible? A partir de esas respuestas, se diseña el instrumento de forma coherente con la estrategia sucesoria global. El estudio sistemático de casos —familias recompuestas, empresas familiares, patrimonio con bienes indivisibles— permite apreciar cómo la forma elegida incide en la coordinación post mortem.",
            },
            {
              type: "paragraph",
              text: "Implicaciones para la enseñanza y la práctica. Desde el punto de vista formativo, trabajar con modelos de redacción en cada modalidad ayuda a evitar nulidades por defectos ostensibles (falta de firma, enmiendas no salvadas, imprecisiones en legados, omisión de sustitutos). En clínica jurídica, acompañar a personas adultas mayores exige explicar ventajas y riesgos de cada modalidad sin presiones, verificando comprensión y voluntad libre de influencias indebidas. También importa la coordinación con otras instituciones de la unidad: legados (para atribuciones concretas), sustitución (para supuestos de premoriencia o renuncia), albaceazgo (para conducción ordenada de la sucesión) y, llegado el caso, previsión de cargas o modos vinculados a ciertos legados. Una cultura de planeación sucesoria responsable no comienza por “llenar formatos”, sino por escuchar objetivos del testador y traducirlos en disposiciones claras, factibles y compatibles con el orden jurídico. Elegida la modalidad, el operador debe cuidar la custodia documental y el acceso a la información por quienes, en su momento, deban solicitar la apertura de la sucesión.",
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
          href: "https://www.youtube.com/watch?v=xD6vklztdsU", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "EL ALBACEA — https://www.youtube.com/watch?v=xD6vklztdsU",
            "LA ADMINISTRACIÓN DE BIENES EN LAS SUCESIONES — https://www.youtube.com/watch?v=-MwM3AbNlkI",
            "Código Civil para el Estado de Veracruz de Ignacio de la Llave (PDF) — https://www.legisver.gob.mx/leyes/LeyesPDF/CODIGOCIVIL13062022.pdf",
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
            "Arellano García, C. (2001). Manuella del abogado. Práctica Jurídica. México: Porrúa.",
            "Capictant, C. y. (1987). instituciones de derecho civil. México: Porrúa.",
            "Código Civil para el Estado de Veracruz. (s.f.). Obtenido de https://www.legisver.gob.mx/leyes/LeyesPDF/CODIGOCIVIL13062022.pdf",
            "De Pina Vara, R. (1994). Derecho Civil Mexicano. México: Porrúa.",
            "Floris Margadant, G. (1997). derecho Romano. México: Esfinge.",
            "Ramírez, A. (2022). Introducción al derecho civil (4.ª ed.). Editorial Jurídica.",
            "Rojina Villegas, R. (1998). Derecho Civil Mexicano Bienes, Derechos reales y Posesión. México: Porrúa.",
            "Rojina Villegas, R. (2009). Compendio de derecho civil III. México: Porrúa.",
            "ROJINA, V. R. (2008). COMPENDIO DE DERECHO CIVIL II. MÉXICO: PORRÚA.",
            "Vara, D. P. (1965). Diccionario de Derecho. Porrua.",
            "Vazquez, A. C. (2012). Conceptos juridicos fundamentales. mexico: Universidad Nacional Autonoma de Mexico.",
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
