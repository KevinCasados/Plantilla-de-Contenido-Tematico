/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LICENCIATURA EN DERECHO",
  courseId: "DERECHO-CIVIL-III",
  id: "modulo3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Derecho Civil III",
  title: "Módulo 3. De la sucesión legítima",
  semestre: "Tercero",
  teacher: "Ma. de Lourdes Suárez Hernández",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Que el alumno conozca integralmente la sucesión legítima: su fundamento y principios, el orden de herederos (descendientes, ascendientes, cónyuge, colaterales, concubino y, en su caso, el Estado), así como la apertura del testamento, la aceptación y el repudio de la herencia, las funciones del albacea, el inventario y la liquidación, la partición y sus efectos, incluida la rescisión y nulidad.",

  competencies: [
    "Identificar los fundamentos y principios de la sucesión legítima (legalidad, heredabilidad, igualdad, proximidad, representación, sustitución, acumulación, conservación, justicia y respeto a la voluntad del difunto).",
    "Determinar el orden de herederos y aplicar las reglas de sucesión de descendientes, ascendientes, cónyuge, colaterales, concubino y, en su defecto, del Estado.",
    "Gestionar la apertura del testamento, comprendiendo plazos y legitimaciones para reclamar la herencia.",
    "Distinguir aceptación y repudio de la herencia (expresos y tácitos) y sus efectos, incluyendo supuestos con menores o incapaces.",
    "Desempeñar y supervisar el cargo de albacea: modalidades, funciones, rendición de cuentas y representación procesal.",
    "Elaborar inventario y liquidación: pago de deudas mortuorias, gastos de administración y créditos alimenticios; en su caso, enajenación de bienes.",
    "Realizar y controlar la partición (amigable o judicial), sus efectos y publicidad registral, identificando causales de rescisión y nulidad.",
    "Aplicar la figura de la representación en la sucesión intestada conforme al marco legal aplicable.",
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

    /* 1. Nodo / Unidad principal */
    {
      id: "1",
      numbering: "Unidad 4",
      title: "De la sucesión legítima",
      content: [
        {
          type: "paragraph",
          text: "La sucesión legítima es el procedimiento que opera cuando no existe testamento, éste es nulo o ha perdido validez; en tal supuesto, la ley determina quiénes heredan y en qué orden. Se trata de un juicio que puede sustanciarse ante autoridad judicial, y, si existe acuerdo entre quienes se consideran herederos, también ante notario. La finalidad es trasladar el patrimonio del de cujus a sus sucesores legales, observando los requisitos de competencia, forma y plazos. El módulo subraya su carácter supletorio de la sucesión testamentaria: la voluntad del difunto prevalece cuando fue válidamente expresada; de faltar o fallar ese testamento, la ley ‘suplanta’ esa voluntad mediante reglas preestablecidas. En suma, la sucesión legítima asegura continuidad patrimonial, tutela a los parientes llamados por la norma y evita disputas informales. El alumno debe identificar con precisión la causa de apertura (muerte o declaración de presunción de muerte), el foro competente y las piezas procesales mínimas para impulsar el trámite. Con esto, la teoría se vuelve método: reconocer si procede la vía intestamentaria, legitimar la intervención de cada interesado y encuadrar las pretensiones a la luz del orden legal aplicable.",
        },
        {
          type: "paragraph",
          text: "Los fundamentos de la sucesión legítima se expresan en un conjunto de principios que orientan la distribución: legalidad (la transmisión se rige por la ley), heredabilidad (los bienes hereditarios son transmisibles), igualdad (reparto equitativo salvo disposición legal en contrario), proximidad (preferencia de parientes más cercanos), representación (descendientes que ocupan el lugar del ascendiente premuerto o incapaz), sustitución (sustituir herederos en casos previstos para evitar pérdida), acumulación/conservación (reunir y preservar el caudal para su ulterior reparto), justicia (criterios de equidad en la distribución) y respeto a la voluntad del difunto (acatarla en la medida de lo posible). Estos principios no son meros lemas: se reflejan en reglas concretas del ordenamiento sucesorio, guían la motivación de resoluciones y sirven de brújula cuando existen colisiones aparentes entre llamados. Dominar su operatividad permite argumentar con rigor, por ejemplo, por qué una estirpe hereda por representación o cuándo procede desplazar a un llamado por incapacidad. Así, la técnica sucesoria combina dogmática y procedimiento para producir decisiones previsibles y justas.",
        },
        {
          type: "paragraph",
          text: "El orden de herederos articula la secuencia de llamados cuando se abre la intestación: en primer término, los descendientes y el cónyuge; después, los ascendientes; enseguida, los parientes colaterales hasta cuarto grado; asimismo, la concubina o el concubinario en los supuestos legales; y, a falta de todos ellos, el Estado. En la práctica, esta escala se traduce en reglas específicas de reparto: entre hijos, por partes iguales; si concurren con cónyuge, éste recibe como si fuera un hijo, con ajustes cuando carece de bienes o cuando sus bienes no igualan la porción filial; con descendientes de ulterior grado, rige la división por estirpes; si concurren hijos con ascendientes, éstos tienen derecho de alimentos dentro de límites cuantitativos. En colaterales, la doble porción de hermanos de doble vínculo frente a medios hermanos y la concurrencia con sobrinos se resuelven combinando cabezas y estirpes. En concubinato, se prevén derechos recíprocos de heredar con requisitos temporales o filiatorios. Dominar este ‘mapa’ evita nulidades por indebida integración de la litis y conduce a particiones coherentes con la ley.",
        },
        {
          type: "paragraph",
          text: "Las fases del procedimiento ordenan la tutela del caudal. La apertura sucede con la muerte o presunción de muerte. Si existe testamento y albacea, éste promueve las reclamaciones; de lo contrario, cualquier heredero legitimado puede actuar e incluso solicitar la remoción del albacea omiso. El derecho para reclamar la herencia prescribe, y su ejercicio puede transmitirse a los herederos del llamado que fallezca antes de aceptar o repudiar. La aceptación puede ser expresa (declaración terminante) o tácita (actos que revelan inequívocamente la intención); el repudio, por su parte, exige capacidad y, tratándose de menores o incapaces, autorización judicial tras oír al Ministerio Público. Estas categorías no son formalidades: definen quién permanece en el proceso, cómo se integra el reparto y qué efectos producen los actos realizados sobre la masa hereditaria. Un manejo preciso de plazos, legitimaciones y formas evita controversias posteriores y robustece la eficacia de la sentencia particional.",
        },
        {
          type: "paragraph",
          text: "Completan el cuadro el régimen del albacea, el inventario y la liquidación, y la partición. El albacea —testamentario, legítimo o dativo; universal o particular— administra, paga deudas y gastos, rinde cuentas, representa a la sucesión y asegura los bienes. Formado y aprobado el inventario, procede la liquidación: primero se cubren deudas mortuorias y de última enfermedad; después, gastos de administración y créditos alimentarios, incluso mediante enajenación de bienes si faltan recursos. La partición, amigable o judicial, divide y adjudica definitivamente, con efectos como adquisición plena de derechos por los herederos, final de la indivisión y publicidad registral. Frente a vicios, operan rescisión y nulidad (error, fraude, violencia, falta de capacidad o consentimiento, violación legal, simulación), bajo cargas probatorias y remedios propios. Finalmente, la representación en la intestada permite a descendientes ocupar el lugar del llamado impedido, asegurando justicia intergeneracional en el reparto. Con este método, el profesional convierte el programa legal en decisiones fundadas, motivadas y ejecutables.",
        },

        /* Acordeón con tres niveles */
        {
          type: "accordion",
          header: "Nivel 1 — Mapa general",
          open: false,
          text: "Apertura (muerte/presunción) → Llamados por ley (orden de herederos) → Aceptación/repudio → Albacea → Inventario y liquidación → Partición (efectos, publicidad) → Representación en intestada.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Preguntas guía para el caso",
          open: false,
          text: "¿Procede intestada? ¿Quién está legitimado? ¿Qué nivel del orden de herederos aplica (cabezas/estirpes)? ¿Hubo aceptación o repudio válidos? ¿El albacea actuó y rindió cuentas? ¿Inventario aprobado y liquidación correcta? ¿Partición motivada y publicitada?",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Checklist operativo",
          open: false,
          text: "1) Acredita muerte/presunción. 2) Integra círculo de herederos conforme a ley. 3) Documenta aceptación/repudio. 4) Verifica designación y actuación del albacea. 5) Inventario completo y liquidación en orden. 6) Partición: modalidad, efectos y posibles vicios (rescisión/nulidad).",
        },
      ],
      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "1.1",
          numbering: "4.1",
          title: "Fundamentos de la sucesión legítima",
          content: [
            {
              type: "paragraph",
              text: "Los fundamentos de la sucesión legítima constituyen el armazón conceptual que permite al Estado transferir el patrimonio del de cujus cuando no existe testamento válido o éste devino ineficaz. No son meros principios retóricos: orientan reglas concretas de llamamiento, reparto y control. El material los enumera y define: legalidad, heredabilidad, igualdad, proximidad, representación, sustitución, acumulación, conservación, justicia y respeto a la voluntad del difunto. El principio de legalidad asegura que el procedimiento, los sujetos llamados y el reparto se rijan por norma vigente; heredabilidad constata la transmisibilidad mortis causa del acervo; igualdad proclama, salvo excepción legal, la paridad en porciones; proximidad prioriza el parentesco más cercano; representación habilita a los descendientes a ocupar el lugar del ascendiente premuerto o incapaz; sustitución evita vacíos cuando un llamado no puede o no quiere heredar; acumulación y conservación preservan la integridad del caudal hasta su distribución; justicia exige un reparto equitativo conforme a derecho; respeto a la voluntad del difunto ordena acatar, en lo posible, la intención del autor de la herencia. Bajo esta gramática, la sucesión legítima es supletoria de la testamentaria: sólo opera cuando falta o falla el testamento, y al hacerlo lo sustituye con criterios legales objetivables. Para el operador, conocer estos fundamentos no es opcional: guía cómo integrar el círculo de herederos, cómo motivar una partición y cómo resolver tensiones entre estirpes, cabezas y grados. La técnica consiste en traducir cada principio a decisiones verificables: ¿qué norma habilita la solución?, ¿qué parentesco y circunstancias concurren?, ¿qué porción corresponde y por qué?, ¿qué remedio procede si se afectó la integridad del caudal?",
            },
            {
              type: "paragraph",
              text: "Legalidad y heredabilidad actúan como presupuesto y cauce. La legalidad exige título normativo en cada eslabón: apertura por muerte o presunción de muerte, competencia del órgano (juez o notaría cuando hay acuerdo), legitimación de quienes se dicen herederos, estructura de inventario, liquidación y partición, y motivación de cada resolución. Una decisión sin texto habilitante o sin forma debida es anulable y vulnera seguridad jurídica. La heredabilidad, por su parte, recuerda que la herencia no es una suma de expectativas morales, sino un conjunto de derechos y obligaciones transmisibles; desde la muerte, se produce la transmisión a quienes la ley designa, sujeta a aceptación o repudio y a la previa satisfacción de deudas mortuorias, gastos de administración y alimentos preferentes. En esta clave, el profesional debe probar la muerte o su presunción, individualizar el acervo y documentar la cadena de validez (ley aplicable, competencia, actos procesales). La observancia estricta de forma y fondo evita nulidades ulteriores y discusiones estériles. Además, la dupla legalidad–heredabilidad ordena el reparto: no caben decisiones discrecionales, sino soluciones legales con fundamento y motivación, verificables por los interesados y controlables por la autoridad revisora. Así, el procedimiento sucesorio deja de ser un campo de fuerzas familiares y se integra a la racionalidad del Derecho.",
            },

            {
              type: "accordion",
              header: "Glosario operativo (legalidad y heredabilidad)",
              open: false,
              text: "Legalidad: cada acto (apertura, inventario, liquidación, partición) requiere norma y forma. • Heredabilidad: el acervo es transmisible mortis causa; la transmisión se sujeta a aceptación/repudio y prelación de pagos (deudas mortuorias, administración, alimentos). • Resultado: seguridad jurídica y reparto verificable.",
            },

            {
              type: "paragraph",
              text: "Igualdad, proximidad y representación forman el eje distributivo. La igualdad establece, salvo disposición legal en contrario, la paridad entre herederos del mismo grado (v. gr., entre hijos por cabezas). La proximidad ordena la secuencia de llamados (descendientes y cónyuge; luego ascendientes; después colaterales hasta cierto grado; en su caso concubina/o; a falta de todos ellos, el Estado). Este criterio evita simultaneidades incompatibles y garantiza certeza. La representación corrige la contingencia de la vida: si un hijo falleció antes del de cujus, sus descendientes ocupan su lugar (por estirpes), impidiendo que una línea familiar quede injustamente excluida. Metodológicamente, el análisis arranca por ubicar el grado y la línea de cada interesado, para decidir si hereda por cabeza o por estirpe. La motivación debe explicitar por qué se opta por una u otra vía, con referencia a parentesco, líneas y grados. En la práctica, muchos conflictos derivan de no distinguir entre concurrencia por cabezas (mismo grado) y por estirpes (distinto grado en misma línea). El mapa correcto reduce litigios, acelera particiones y evita agravios comparativos. A la vez, impone prudencia probatoria: filiación, adopción, matrimonio o concubinato deben acreditarse con documentos idóneos, pues la paridad y el orden no descansan en percepciones sino en estados civiles comprobados.",
            },
            {
              type: "paragraph",
              text: "Sustitución, acumulación y conservación protegen la integridad del llamamiento y del caudal. La sustitución permite que, ante incapacidad para heredar, indignidad, renuncia o cualquier impedimento, otro sujeto ocupe la posición del llamado, evitando que la porción ‘se pierda’ o que el reparto se distorsione. Debe obedecer a supuestos legales y respetar el orden de parentesco, sin crear atajos. La acumulación concentra los bienes hereditarios bajo administración unitaria hasta la liquidación y partición, lo que impide enajenaciones prematuras, distracciones y confusiones de patrimonios. La conservación impone deberes de custodia y diligencia a quien administra (típicamente el albacea): asegurar bienes, levantar inventario completo, mantener su valor y rendir cuentas. En conjunto, estos principios blindan el proceso: garantizan que el reparto se haga sobre una base cierta y que ninguna maniobra oportunista debilite la masa hereditaria. Operativamente, la autoridad debe justificar medidas de aseguramiento (sellos, depósitos, interventores) y autorizar actos de disposición sólo cuando sean necesarios y proporcionales (pago de deudas mortuorias, gastos de administración, alimentos). Un expediente bien administrado vale tanto como una sentencia bien motivada: sin conservación y acumulación, la igualdad y la proximidad pueden quedar en el papel.",
            },

            {
              type: "accordion",
              header: "Buenas prácticas de administración del caudal",
              open: false,
              text: "• Inventario exhaustivo y oportuno (bienes, derechos y cargas). • Medidas de custodia proporcionadas. • Autorizaciones de disposición motivadas (necesidad y destino). • Rendición de cuentas periódica. • Separación patrimonial estricta (evitar confusión).",
            },

            {
              type: "paragraph",
              text: "Justicia y respeto a la voluntad del difunto actúan como criterios de cierre y de coherencia. Justicia no significa discrecionalidad, sino equidad conforme a derecho: aplicar las reglas sin sesgos y con razonabilidad en los márgenes que la ley concede (p. ej., al modular alimentos de ascendientes cuando concurren con hijos). El respeto a la voluntad del difunto recuerda que la intestada es supletoria: si existe testamento válido, rige la testamentaria; si no, la ley suple esa ausencia intentando aproximarse a lo que ordinariamente querría el causante (proteger descendencia, cónyuge/concubina/o, ascendientes y, en su caso, colaterales). Este respeto también opera en decisiones que no traicionen disposiciones válidas del finado (p. ej., reconocimiento de deudas o legados ya pagados). En motivaciones y resoluciones, explicitar ambos criterios refuerza legitimidad y aceptabilidad social del reparto, sobre todo en litigios con alta conflictividad familiar. La prudencia técnica incluye evitar fórmulas huecas: la justicia debe mostrarse en el encuadre correcto (cabezas/estirpes, grados, líneas), y el respeto a la voluntad, en la preferencia por reglas que resguarden expectativas familiares típicas sin violentar la ley.",
            },
            {
              type: "paragraph",
              text: "El método de aplicación de estos fundamentos puede expresarse en cinco pasos: (1) Identificar la causa de apertura y el foro competente; (2) Integrar el círculo de llamados con prueba del estado civil y, en su caso, de la relación de concubinato; (3) Reconstruir la prelación (proximidad) y la modalidad de reparto (cabezas/estirpes) asegurando igualdad; (4) Asegurar el caudal con medidas de conservación y administrar bajo acumulación, con inventario, rendición de cuentas y autorización motivada de actos de disposición; (5) Liquidar (deudas mortuorias, gastos de administración, alimentos) y partir con criterios de justicia, dejando constancia de aceptación/repudio, sustituciones y representaciones. Cada paso exige legalidad estricta y motivación suficiente. Si aparece un impedimento (indignidad, incapacidad, renuncia), se activa la sustitución conforme a ley, documentando su procedencia. En todo momento, la finalidad es doble: proteger derechos de los llamados y garantizar que el tránsito patrimonial ocurra con seguridad jurídica y resultados equitativos. Esta disciplina convierte los fundamentos en decisiones auditables, reduce litigiosidad y eleva la calidad de las resoluciones, en sede notarial o judicial.",
            },
            {
              type: "paragraph",
              text: "Conclusión operativa: los fundamentos de la sucesión legítima son criterios normativos con efectos prácticos medibles. Permiten decidir quién hereda, cómo se reparte y cómo se protege el acervo hasta la adjudicación. Su desconocimiento produce nulidades, repartos injustos o dilaciones; su aplicación rigurosa, por el contrario, asegura que la ley supla con racionalidad la falta de testamento y que los herederos reciban lo que corresponde, sin sorpresas ni privilegios indebidos. El operador debe dominar el vocabulario (legalidad, heredabilidad, igualdad, proximidad, representación, sustitución, acumulación, conservación, justicia y respeto a la voluntad), pero, sobre todo, su traducción a actos: identificar la norma fuente, probar parentesco y hechos relevantes, motivar el encuadre y elegir los remedios idóneos. Con ello, la intestada deja de ser terreno de disputas emocionales para convertirse en un procedimiento de legalidad, cuidado patrimonial y reparto equitativo, exactamente como lo exige el orden jurídico.",
            },
          ],
        },

        {
          id: "1.2",
          numbering: "4.2",
          title: "Orden de herederos",
          content: [
            {
              type: "paragraph",
              text: "El ‘orden de herederos’ es la secuencia legal que determina quiénes suceden cuando la herencia se abre sin testamento válido. El material establece la prelación típica: descendientes y cónyuge; en su defecto, ascendientes; después, parientes colaterales hasta cuarto grado; en ciertos supuestos, concubina o concubinario; y, a falta absoluta de todos, el Estado. Este mapa no es decorativo: gobierna legitimación, cálculo de porciones y la propia ruta procedimental ante juez o notaría cuando hay acuerdo. Aplicar la prelación significa, primero, ubicar a cada interesado en su línea y grado; segundo, distinguir si la concurrencia es por cabezas o por estirpes; y, tercero, verificar si concurren reglas especiales (doble vínculo en colaterales, alimentos de ascendientes, porción del cónyuge). Con ello, la intestada se convierte en un algoritmo verificable y no en un campo de fuerza familiar.",
            },
            {
              type: "paragraph",
              text: "La utilidad práctica de la prelación se aprecia desde la audiencia inicial: identificar rápidamente si hay descendientes con cónyuge coloca el caso en la cúspide del llamamiento; si faltan, se activa la secuencia de ascendientes; si tampoco existen, se avanza a colaterales y así sucesivamente. Cada escalón exige prueba documental del estado civil y parentesco (actas, resoluciones de reconocimiento/adopción), y, en su caso, constancias de convivencia para el concubinato. La autoridad debe motivar por qué ‘entra’ un orden y queda desplazado el siguiente; la falta de esta motivación suele desencadenar nulidades.",
            },

            {
              type: "accordion",
              header: "Prelación legal — recordatorio operativo",
              open: false,
              text: "1) Descendientes + cónyuge • 2) Ascendientes • 3) Colaterales (hasta 4.º grado) • 4) Concubina/o (en supuestos legales) • 5) Estado (regla de cierre).",
            },

            {
              type: "paragraph",
              text: "Cuando coexisten parientes dentro del mismo orden, rige igualdad entre quienes están en el mismo grado: hijos a partes iguales; padre y madre por mitades; abuelos de ambas líneas por mitad paterna/mitad materna, etc. Si en una misma línea concurren grados distintos (hijos y nietos), opera la representación: los de grado ulterior heredan por estirpes, ocupando el lugar del ascendiente premuerto, incapaz o renunciante. Esta ingeniería evita vacíos e impide que una rama familiar quede injustamente excluida.",
            },
            {
              type: "paragraph",
              text: "El cónyuge y el concubino introducen modulaciones. Con descendientes, el cónyuge puede recibir porción equivalente a la de un hijo en los supuestos previstos; con ascendientes, suele dividir por mitades; con hermanos del autor, la legislación referida en el material contempla hasta dos tercios para el cónyuge. El concubino/concubina, acreditando plazo de convivencia o hijos comunes, hereda en términos funcionalmente análogos al cónyuge, con ajustes si concurre con descendientes no comunes. La prueba del vínculo es condición de validez del llamamiento.",
            },

            {
              type: "accordion",
              header: "Errores frecuentes (y cómo evitarlos)",
              open: false,
              text: "• Repartir por cabezas cuando corresponde por estirpes • Omitir acreditar estado civil/parentesco • No motivar cambio de orden • Confundir cuota hereditaria con alimentos de ascendientes.",
            },

            {
              type: "paragraph",
              text: "Cláusula de cierre: si no existen parientes con derecho ni concubina/concubinario en los supuestos legales, hereda el Estado, representado por el Ministerio Público como albacea. Antes de llegar a esta etapa deben agotarse diligencias de localización y publicaciones. La adjudicación estatal se inscribe en registros para dotar de oponibilidad y cerrar el procedimiento con seguridad jurídica. Esta previsión evita bienes sin titular y disuade apropiaciones de hecho.",
            },
          ],
          /* → Sub-subtemas (profundidad 2) */
          subthemes: [
            {
              id: "1.2.1",
              numbering: "4.2.1",
              title: "Sucesión de los descendientes",
              content: [
                {
                  type: "paragraph",
                  text: "Los descendientes integran el primer orden del llamamiento. Si al fallecimiento sólo existen hijos, heredan por partes iguales (por cabezas). Si concurren hijos con el cónyuge, este obtiene, en los supuestos previstos por la ley, una porción equiparable a la de un hijo (especialmente cuando carece de bienes o sus bienes no igualan la porción filial). Cuando además existen nietos por premoriencia, incapacidad o repudio de su progenitor, opera la representación: los hijos heredan por cabezas, los nietos por estirpes, ocupando la porción del ascendiente ausente. Si sólo hay descendientes ulteriores (nietos), toda la herencia se divide por estirpes. El material también recuerda que el hijo adoptivo hereda como hijo, consolidando la igualdad de filiación.",
                },
                {
                  type: "paragraph",
                  text: "La concurrencia con ascendientes no desplaza a los descendientes, pero puede activar un derecho de alimentos en favor de aquellos, con tope cuantitativo (no exceder la porción de un hijo). Esta distinción —cuota hereditaria vs. alimentos— debe quedar nítidamente motivada para no confundir naturalezas y fuentes. En la práctica, fijar alimentos exige probar necesidad, capacidad del caudal y proporcionalidad, sin comprometer la porción debida a los hijos o estirpes.",
                },

                {
                  type: "accordion",
                  header: "Reglas operativas — descendientes",
                  open: false,
                  text: "• Sólo hijos → por cabezas • Hijos + cónyuge → porción del cónyuge como la de un hijo (supuestos legales) • Hijos + nietos → hijos por cabezas, nietos por estirpes • Sólo nietos → por estirpes • Hijos + ascendientes → alimentos para ascendientes (tope legal).",
                },

                {
                  type: "paragraph",
                  text: "La representación no es un ‘derecho autónomo’ del nieto, sino una técnica de transmisión de la porción del hijo ausente hacia su descendencia. El cálculo se hace por ramas: primero se determina qué habría correspondido al hijo premuerto/incapaz/renunciante; después se reparte entre sus hijos por partes iguales. La motivación debe mostrar esta aritmética con claridad auditable; omitirla provoca litigio y percepción de discrecionalidad.",
                },
                {
                  type: "paragraph",
                  text: "Desde la prueba, el itinerario es conocido: actas de nacimiento/reconocimiento/adopción; constancias de premoriencia o incapacidad; escrituras o documentos que acrediten bienes y, en su caso, pruebas de aceptación/repudio (expresa o tácita). Si intervienen menores o incapaces, el repudio exige autorización judicial con audiencia del Ministerio Público. Una administración diligente —aseguramiento, inventario, pagos preferentes y liquidación— previene particiones sobre bases inestables.",
                },

                {
                  type: "accordion",
                  header: "Checklist probatorio — descendientes",
                  open: false,
                  text: "1) Filiación (actas) • 2) Premoriencia/incapacidad/repudio • 3) Mapa de ramas y estirpes • 4) Aceptación/repudio válidos • 5) Inventario y pagos preferentes antes de partir.",
                },

                {
                  type: "paragraph",
                  text: "Conclusión: la sucesión de descendientes combina igualdad por cabezas y justicia intergeneracional por estirpes, armonizada con los derechos del cónyuge y los posibles alimentos de ascendientes. La clave es metodológica: reconstruir el árbol familiar, aplicar la regla correcta (cabezas/estirpes), documentar cada extremo y motivar el cálculo. Así, la decisión es verificable y resistente a impugnaciones.",
                },
              ],
            },
            {
              id: "1.2.2",
              numbering: "4.2.2",
              title: "Sucesión de los ascendientes",
              content: [
                {
                  type: "paragraph",
                  text: "La herencia pasa a los ascendientes cuando no hay descendientes ni cónyuge con derecho. Regla base: padre y madre heredan por partes iguales; si sólo vive uno, sucede en la totalidad. Cuando hay ascendientes por ambas líneas (paterna y materna), la herencia se divide en dos mitades; cada mitad se adjudica a la línea respectiva y, dentro de ella, los de igual grado reparten por partes iguales. Esta ‘división por líneas’ preserva la simetría familiar e impide desplazamientos arbitrarios. La preferencia del grado más próximo rige dentro de cada línea: sólo si falta el más próximo sube el inmediato.",
                },
                {
                  type: "paragraph",
                  text: "La coexistencia de ascendientes no anula, en su caso, el derecho de alimentos si concurren descendientes en el orden preferente; pero en el supuesto típico de esta sección —ausencia de descendientes y cónyuge— los ascendientes son herederos plenos conforme a su línea y grado. En todos los casos, la autoridad debe motivar con precisión por qué se aplicó la división por mitades y cómo se determinó el grado prevalente, evitando confundir alimentos con cuota.",
                },

                {
                  type: "accordion",
                  header: "Reglas clave — ascendientes",
                  open: false,
                  text: "• Falta de descendientes y cónyuge → ascienden los padres • Padre y madre → por mitades (o totalidad para el sobreviviente) • Ambas líneas → mitad paterna/mitad materna • Dentro de la línea → preferencia del grado más próximo.",
                },

                {
                  type: "paragraph",
                  text: "Probatoriamente, deben acreditarse los vínculos ascendentes (actas, resoluciones), descartar impedimentos (indignidad) y reconstruir la inexistencia de órdenes preferentes. En administración, asegurar bienes, formar inventario y liquidar deudas mortuorias/gastos de administración/créditos alimentarios antecede a la partición. La publicidad registral de adjudicaciones consolida seguridad jurídica y reduce litigios posteriores entre líneas.",
                },
                {
                  type: "paragraph",
                  text: "Un recordatorio esencial: la ‘representación’ es institución propia de la línea descendente; los ascendientes no representan a descendientes. Este deslinde, que el material explicita al trazar el orden, evita intentos de ‘subir’ porciones llamadas a generaciones posteriores. Con la metodología correcta —líneas, grados, inventario, liquidación y partición— la sucesión de ascendientes produce resultados estables y comprensibles.",
                },

                {
                  type: "accordion",
                  header: "Checklist del caso — ascendientes",
                  open: false,
                  text: "1) Verifica ausencia de órdenes preferentes • 2) Acredita líneas y grados • 3) Aplica división por mitades • 4) Gestiona inventario/liquidación • 5) Publicita adjudicaciones.",
                },

                {
                  type: "paragraph",
                  text: "Conclusión: esta sucesión ofrece un patrón de justicia formal claro. Su éxito depende de prueba sólida, motivación del reparto por líneas y una administración cuidadosa del caudal. Cuando el expediente sigue esta gramática, los conflictos se reducen a diferencias numéricas fácilmente auditables.",
                },
              ],
            },
            {
              id: "1.2.3",
              numbering: "4.2.3",
              title: "Sucesión del cónyuge",
              content: [
                {
                  type: "paragraph",
                  text: "El cónyuge sobreviviente integra el primer orden del llamamiento junto con los descendientes y, a falta de estos, desplaza a otras parentelas salvo la posible concurrencia con ascendientes. La pauta reseñada en el material es nítida: con descendientes, el cónyuge puede recibir una porción como la de un hijo cuando carece de bienes o los suyos no igualan la porción filial; con ascendientes, la herencia se divide por mitades; con hermanos del autor, el cónyuge alcanza hasta dos tercios, quedando el tercio restante para los colaterales por partes iguales. Estas modulaciones protegen al supérstite sin desatender la justicia distributiva con la familia del causante.",
                },
                {
                  type: "paragraph",
                  text: "El expediente debe acreditar matrimonio válido (y la inexistencia de divorcio o nulidad), así como el régimen patrimonial (sociedad conyugal o separación) para separar gananciales de la masa hereditaria. En sede de administración, antes de adjudicar cuotas al cónyuge se cubren deudas mortuorias, gastos de administración y, en su caso, créditos alimentarios. Si no hay liquidez, el albacea puede promover enajenaciones motivadas. La motivación de la resolución debe explicar concurrencia, base normativa y aritmética de la porción.",
                },

                {
                  type: "accordion",
                  header: "Concurrencias típicas — cónyuge",
                  open: false,
                  text: "• Con hijos → porción como la de un hijo (supuestos legales) • Con ascendientes → mitad para cónyuge/mitad para ascendientes • Con hermanos del autor → 2/3 para cónyuge; 1/3 para hermanos.",
                },

                {
                  type: "paragraph",
                  text: "La relación con descendientes no comunes exige prudencia: cuando el cónyuge concurre con hijos del causante que no son suyos, la legislación local puede contener ajustes para evitar desequilibrios. La sentencia/notaría debe razonar por qué procede (o no) la equiparación a la cuota de un hijo y, en su caso, explicar la reducción o mantenimiento de la porción conforme a derecho, siempre con soporte probatorio.",
                },
                {
                  type: "paragraph",
                  text: "Impedimentos como la indignidad o la renuncia alteran la participación del cónyuge. La aceptación puede ser expresa o tácita; el repudio exige capacidad y, si se trata de incapaces, autorización judicial con audiencia del Ministerio Público. Documentar estos actos define quién permanece en el proceso y en qué calidad, evitando ajustes improvisados en la fase de partición.",
                },

                {
                  type: "accordion",
                  header: "Checklist del caso — cónyuge",
                  open: false,
                  text: "1) Acta de matrimonio y régimen patrimonial • 2) Determina concurrencia (descendientes/ascendientes/hermanos) • 3) Separa gananciales vs. acervo • 4) Pagos preferentes antes de adjudicar • 5) Motiva cuota y, en su caso, alimentos.",
                },

                {
                  type: "paragraph",
                  text: "Conclusión: la sucesión del cónyuge equilibra protección del supérstite con justicia hacia la parentela del autor. La combinación de prueba sólida, contabilidad clara y motivación completa produce decisiones predecibles, legítimas y resistentes a impugnaciones.",
                },
              ],
            },
            {
              id: "1.2.4",
              numbering: "4.2.4",
              title: "Sucesión de los colaterales",
              content: [
                {
                  type: "paragraph",
                  text: "Los colaterales ingresan al llamamiento intestatario cuando no existen descendientes, cónyuge ni ascendientes con derecho. La directriz metodológica es identificar el grado de parentesco dentro del cuarto grado (hermanos, sobrinos, tíos y primos), reconstruir la línea familiar y aplicar la regla de igualdad entre quienes comparten grado. En presencia de hermanos, la herencia se reparte por cabezas entre ellos; si además concurren sobrinos de un hermano premuerto, incapaz o renunciante, los sobrinos heredan por estirpes la porción que habría correspondido a su progenitor. Estas pautas garantizan continuidad patrimonial dentro de cada rama y evitan desplazamientos arbitrarios. En todo caso, la legitimación se acredita con documentos de estado civil y, si procede, resoluciones de filiación.",
                },
                {
                  type: "paragraph",
                  text: "La práctica exige distinguir dos escenarios: i) concurrencia exclusivamente entre hermanos; ii) coexistencia de hermanos con descendientes de hermanos ausentes (sobrinos). En el primer supuesto, todos los hermanos comparten por partes iguales. En el segundo, los hermanos heredan por cabezas y, paralelamente, se abre la representación para la rama del hermano ausente: los sobrinos dividen por partes iguales la porción que habría correspondido a su padre o madre. Si no existen hermanos, heredan los sobrinos por estirpes; a falta de éstos, los colaterales siguientes hasta cuarto grado por partes iguales. Este orden, recogido en el desarrollo temático del material, preserva la prelación legal y evita conflictos innecesarios al convertir el reparto en un algoritmo verificable. ",
                },
                {
                  type: "accordion",
                  header: "Mapa operativo — colaterales",
                  open: false,
                  text: "1) Hermanos → por cabezas • 2) Hermanos + sobrinos por premoriencia/impedimento → hermanos por cabezas y sobrinos por estirpes • 3) Sin hermanos → sobrinos por estirpes • 4) Ausencia de los anteriores → colaterales hasta 4.º grado por partes iguales.",
                },
                {
                  type: "paragraph",
                  text: "La reconstrucción probatoria del árbol colateral requiere: actas de nacimiento, matrimonio de los progenitores cuando sea necesario para acreditar doble/medio vínculo, y constancias que demuestren premoriencia o impedimentos. La motivación debe exponer con claridad: (i) quiénes integran cada rama, (ii) por qué procede la representación en favor de los sobrinos y (iii) cómo se calculó la cuota de cada uno. Una exposición transparente reduce la litigiosidad y refuerza la legitimidad del reparto.",
                },
                {
                  type: "paragraph",
                  text: "La administración del caudal (aseguramiento, inventario, liquidación) no se relaja en esta etapa. El albacea debe actuar con diligencia reforzada, porque los colaterales suelen estar más alejados de los bienes y se incrementa el riesgo de pérdida o confusión patrimonial. Antes de adjudicar, se cubren deudas mortuorias, gastos de administración y, en su caso, créditos alimentarios acreditados, siguiendo el orden de prelación de pagos. ",
                },
                {
                  type: "accordion",
                  header: "Checklist de sentencia/notaría",
                  open: false,
                  text: "• Árbol colateral documentado • Premoriencia/impedimentos probados • Aritmética de cabezas/estirpes explicitada • Inventario aprobado y liquidación previa • Publicidad registral de adjudicaciones.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión: la sucesión colateral aplica igualdad de grado y representación por estirpes cuando falte un hermano, cuidando la integridad del caudal y la motivación del cálculo. En ausencia de órdenes preferentes, este esquema asegura una transferencia coherente con la función supletoria de la intestada. (Véase la enumeración del orden de herederos que incluye a los colaterales y la regla de cierre a favor del Estado). :contentReference[oaicite:1]{index=1}",
                },
              ],
            },
            {
              id: "1.2.5",
              numbering: "4.2.5",
              title: "Sucesión del concubino",
              content: [
                {
                  type: "paragraph",
                  text: "El concubinato recibe tutela sucesoria cuando se acredita la convivencia por el plazo legal o la existencia de hijos en común. La ratio es proteger a las familias de hecho sin desatender la prelación de parientes preferentes. En la intestada, el concubino o la concubina puede heredar en términos funcionalmente análogos al cónyuge, con ajustes cuando concurre con descendientes que no son comunes. La legitimación exige prueba reforzada del vínculo (domicilio compartido, testimonios, constancias administrativas, actas de nacimiento de hijos). La autoridad debe motivar expresamente por qué se actualizan los supuestos legales para evitar adjudicaciones anulables por falta de acreditación.",
                },
                {
                  type: "paragraph",
                  text: "Existen tres configuraciones típicas: i) con hijos comunes, la porción del concubino se asimila a la del cónyuge en condiciones equivalentes; ii) con descendientes del causante que no son del concubino, la porción puede modularse para equilibrar la justicia distributiva; iii) a falta de descendientes, cónyuge, ascendientes y colaterales hasta cuarto grado, el concubino puede recibir la totalidad. En todos los casos, la prueba es decisiva: la convivencia debe ser real, continua y pública; los documentos y testimonios deben converger y ser valorados con estándar de motivación suficiente.",
                },
                {
                  type: "accordion",
                  header: "Acreditación del concubinato",
                  open: false,
                  text: "• Constancias de domicilio y cohabitación • Testimoniales coherentes • Hijos en común (si los hay) • Inexistencia de matrimonio válido del causante con tercero en el momento del fallecimiento • Cronología clara de la relación.",
                },
                {
                  type: "paragraph",
                  text: "En administración, el concubino puede tener un rol práctico (custodia del domicilio, protección de bienes de uso inmediato) que conviene formalizar mediante medidas del albacea o del juez. Antes de adjudicar, deben cubrirse deudas mortuorias, gastos de administración y créditos alimentarios acreditados. Si la masa carece de liquidez, procede enajenar bienes con autorización motivada. La transparencia y la rendición de cuentas son indispensables para evitar reproches de apropiación o de trato privilegiado.",
                },
                {
                  type: "paragraph",
                  text: "Cuando el concubino concurre con descendientes no comunes, la resolución debe justificar la cuota asignada con una aritmética clara y fiel a la pauta legal. El objetivo es doble: proteger al proyecto de vida del causante y evitar agravio comparativo respecto de los hijos no comunes. Una sentencia/notaría bien motivada reduce la probabilidad de impugnaciones y consolida la validez del reparto.",
                },
                {
                  type: "accordion",
                  header: "Errores a evitar",
                  open: false,
                  text: "• Inferir concubinato sin prueba robusta • Confundir tutela sucesoria con desplazamiento de parientes preferentes • Omitir motivar modulaciones de cuota en concurrencia con descendientes no comunes • Ignorar pagos preferentes antes de adjudicar.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión: la sucesión del concubino operacionaliza igualdad sustantiva para familias de hecho, respetando la prelación y la prueba rigurosa del vínculo. El material sitúa expresamente al concubino dentro del orden intestatario, después de colaterales y antes de la regla de cierre, lo que orienta su llamamiento según los supuestos legales aplicables. :contentReference[oaicite:2]{index=2}",
                },
              ],
            },
            {
              id: "1.2.6",
              numbering: "4.2.6",
              title: "Sucesión del Estado",
              content: [
                {
                  type: "paragraph",
                  text: "La sucesión del Estado es la cláusula de cierre del sistema intestatario. Opera cuando no existen parientes con derecho (descendientes, cónyuge, ascendientes, colaterales dentro del cuarto grado) ni concubina/concubinario en los supuestos legales. Su finalidad es impedir que queden bienes sin titular y asegurar un destino conforme a legalidad y control público. En estos casos, la representación del fisco la asume el Ministerio Público, quien funge como albacea para asegurar, administrar y adjudicar el caudal conforme a Derecho.",
                },
                {
                  type: "paragraph",
                  text: "Antes de declarar a favor del Estado, la autoridad debe agotar diligencias de localización de parientes: publicaciones, oficios a registros civiles, bases de datos y demás medios idóneos. Esta ‘prueba negativa’ evita adjudicaciones prematuras y hace la decisión resistente a impugnaciones. Si durante el trámite aparece un pariente con mejor derecho y prueba idónea, el procedimiento debe reencauzarse para reconocer su llamamiento, manteniendo incólume el principio de legalidad y la justicia en la transmisión patrimonial.",
                },
                {
                  type: "accordion",
                  header: "Ruta procesal — fisco del Estado",
                  open: false,
                  text: "1) Diligencias de localización y publicaciones • 2) Aseguramiento del caudal • 3) Inventario y avalúos • 4) Liquidación (deudas mortuorias, gastos de administración, alimentos acreditados) • 5) Adjudicación a favor del Estado con publicidad registral.",
                },
                {
                  type: "paragraph",
                  text: "En la fase de administración, el Ministerio Público debe asegurar los bienes, levantar inventario exhaustivo, promover avalúos y cubrir pagos preferentes. La liquidación debe documentarse con transparencia reforzada, y toda enajenación requerirá autorización motivada que justifique necesidad y proporcionalidad. La finalidad es doble: proteger el caudal frente a deterioro o sustracción y garantizar que acreedores legítimos sean satisfechos antes de la adjudicación.",
                },
                {
                  type: "paragraph",
                  text: "La adjudicación al Estado se inscribe en los registros públicos correspondientes, otorgando oponibilidad frente a terceros y cerrando formalmente el expediente. Esta publicidad, además de dotar de certeza al tráfico jurídico, disuade apropiaciones de hecho o litigios tardíos. Cualquier reclamación sobrevenida deberá sustentarse en prueba robusta y seguirá la vía de impugnación prevista por la ley.",
                },
                {
                  type: "accordion",
                  header: "Criterios de transparencia y control",
                  open: false,
                  text: "• Expediente con cronología completa de diligencias • Inventario y avalúos verificables • Motivación de gastos y enajenaciones • Intervención del MP debidamente documentada • Inscripción registral de la adjudicación.",
                },
                {
                  type: "paragraph",
                  text: "Conclusión: la sucesión del Estado preserva la integridad del sistema cuando falta toda parentela con derecho. Es un remedio excepcional y garantista que demanda rigor probatorio, motivación exhaustiva y máxima publicidad. El material ubica esta figura como último eslabón de la prelación intestataria (tras colaterales y concubino), cumpliendo la función social de los bienes en ausencia total de herederos. :contentReference[oaicite:3]{index=3}",
                },
              ],
            },
          ],
        },

        {
          id: "1.3",
          numbering: "4.3",
          title: "Apertura del testamento",
          /* ───────────────────────── 4.3 Apertura del testamento ───────────────────────── */
          content: [
            {
              type: "paragraph",
              text: "La apertura del testamento marca el punto de partida del iter sucesorio cuando existe disposición de última voluntad. Según el material, la sucesión se abre por la muerte del autor o por la declaración de presunción de muerte; a partir de ese instante se activan las legitimaciones para reclamar, asegurar el caudal y, en su caso, presentar el testamento a la autoridad competente. La apertura no es un ritual simbólico, sino un hito procesal que ordena quién puede promover actuaciones y qué documentos deben exhibirse (testamento, acta de defunción o resolución de presunción de muerte, identificaciones, constancias registrales). Aun cuando la unidad estudia principalmente la intestada, aquí interesa subrayar que el testamento válido desplaza a la intestada: se respeta la voluntad del causante dentro de los límites legales (legítimas, derechos de cónyuge/concubino, alimentos, orden público). La técnica profesional exige distinguir con nitidez tres planos: (i) el hecho que abre la sucesión (muerte o presunción), (ii) la fuente que rige la transmisión (testamento válido o, en defecto, ley) y (iii) la ruta procedimental (judicial o notarial cuando hay acuerdo). El propósito de esta sección es convertir ese marco en método de trabajo: verificar vigencia y autenticidad del testamento, asegurar los bienes, identificar a herederos y legatarios, y preparar el terreno para inventario, liquidación y partición. Con ello se reduce la fricción familiar, se previenen medidas de hecho y se encarrila el proceso hacia una resolución fundada y motivada.",
            },
            {
              type: "paragraph",
              text: "Cuando existe testamento y albacea designado, éste es el primer llamado a promover la reclamación de la herencia ‘por entero’, es decir, en tutela del interés colectivo de la sucesión. El material puntualiza que, si el albacea omite su deber, los herederos pueden solicitar su remoción; esta regla desincentiva la parálisis administrativa y protege la integridad del caudal. A falta de albacea nombrado, cada heredero con legitimación puede accionar en defensa de la masa, sin que el demandado oponga con éxito excepciones basadas en la supuesta falta de legitimidad individual para reclamar la totalidad: el interés es común y los efectos, para todos. La apertura con testamento exige, además, contrastar el instrumento con los requisitos de forma y competencia notarial/judicial del lugar donde se otorgó; si hubo varios testamentos, se verifica cuál es el último y válido. Nada de esto es puramente formal: un testamento con vicios puede invalidarse, reencauzando el procedimiento a la vía intestada; y un testamento válido ordena el resto del juicio (albacea, legados, cargas, sustituciones, modo), modulando incluso la administración y la forma de partir.",
            },

            {
              type: "accordion",
              header: "Checklist de apertura (con testamento)",
              open: false,
              text: "• Acta de defunción o presunción de muerte • Testamento original/certificado y verificación de vigencia • Albacea designado (aceptación/capacidad) • Identificación de herederos/legatarios • Aseguramiento e inventario preliminar • Competencia de la autoridad (juez/notario).",
            },

            {
              type: "paragraph",
              text: "En términos temporales, el material recuerda un dato crucial: el derecho para reclamar la herencia prescribe en diez años y es transmisible a los propios herederos del llamado que fallece antes de aceptar o repudiar. Esta pauta de prescripción no debe confundirse con los plazos operativos de actos internos del trámite (p. ej., para presentar inventario o para rendir cuentas); sin embargo, su sola existencia obliga a ordenar cronológicamente el expediente desde el primer día. Una estrategia practicable: elaborar una línea de tiempo con (i) fecha de muerte o presunción, (ii) fecha de conocimiento del testamento por los interesados, (iii) actuaciones de aseguramiento y notificaciones, y (iv) hitos de inventario y liquidación. La gestión oportuna reduce el riesgo de actos de disposición indebidos, facilita el control de medidas cautelares (sellos, depósitos, interventores) y, sobre todo, evita que las pretensiones prescriban por omisión.",
            },
            {
              type: "paragraph",
              text: "La apertura del testamento también exige depurar el círculo de sujetos: distinguir herederos (quienes reciben la universalidad o una cuota ideal del patrimonio), legatarios (beneficiarios de bienes o derechos determinados), albacea (administrador y ejecutor), acreedores e interesados (p. ej., acreedores alimentarios). Esta cartografía evita inequívocos al momento de citar, dar vista o reconocer intervenciones. En paralelo, debe revisarse la existencia de sustituciones (vulgar, pupilar, ejemplar) y condiciones/modos que el causante impuso: su cumplimiento o incumplimiento incidirá en la eficacia de las disposiciones. En sede notarial, cuando hay acuerdo, la apertura y protocolización del testamento dinamizan el proceso; en sede judicial, el control de legalidad y la tutela de contradicciones prevalece. En ambos casos, el eje es el mismo: respetar la voluntad válida del difunto y asegurar la legalidad de cada paso.",
            },

            {
              type: "accordion",
              header: "Errores frecuentes y cómo evitarlos",
              open: false,
              text: "• Confundir legitimación individual con imposibilidad de reclamar ‘por entero’ • Desatender la prescripción decenal • No verificar última voluntad válida cuando hay testamentos múltiples • Omitir aseguramientos tempranos del caudal • No diferenciar herederos vs. legatarios.",
            },

            {
              type: "paragraph",
              text: "Desde la perspectiva de técnica forense, el acto de ‘abrir’ el testamento debe ir acompañado de medidas de aseguramiento proporcionales, comunicación transparente entre interesados y un plan de administración. A partir de la apertura, la prioridad es evitar deterioros/mermas, identificar activos y pasivos, y preparar el inventario formal. Todo esto se documenta: providencias precautorias, sellos, depósitos, designaciones de depositarios, avalúos preliminares. La motivación de cada decisión debe enlazar el hecho habilitante (apertura por muerte/presunción), la norma aplicable y la finalidad (proteger el caudal y ejecutar la voluntad). Con ese hilo conductor, la apertura del testamento deja de ser un trámite anecdótico y se convierte en el cimiento de un procedimiento eficiente, verificable y socialmente aceptable. Esta es la ruta que propone el material, que concluye destacando la centralidad del albacea activo y controlado por los herederos y por la autoridad.",
            },
            {
              type: "paragraph",
              text: "En síntesis, abrir el testamento es activar un engranaje: causa de apertura, prueba de la voluntad, identificación de sujetos, aseguramiento, cronograma, inventario y liquidación, y, finalmente, partición y publicidad registral. El éxito depende de rigor documental, oportunidad y motivación. Así se respeta el principio rector: si la voluntad fue válidamente expresada, ésta gobierna; sólo a falta o invalidez de testamento, la ley la suple con reglas preestablecidas. Esta claridad disipa disputas y legitima el desenlace. ",
            },
          ],
        },

        {
          id: "1.4",
          numbering: "4.4",
          title: "De la aceptación y repudio de la herencia",
          content: [
            {
              type: "paragraph",
              text: "Aceptar o repudiar la herencia es el acto por el cual el llamado manifiesta si incorpora la titularidad y cargas de la sucesión a su propio patrimonio o si, por el contrario, renuncia a dicho llamamiento. El material es claro: pueden aceptar o repudiar quienes tengan libre disposición de sus bienes; si se trata de menores o incapaces, la representación legal sólo puede repudiar con autorización judicial, previa audiencia del Ministerio Público. Esta cautela protege a las personas en situación de vulnerabilidad y reduce el riesgo de decisiones gravosas o simuladas. La aceptación puede ser **expresa** (declaración terminante) o **tácita** (actos que revelan inequívocamente la intención de aceptar); el repudio, por su parte, exige claridad y forma idónea. Estas categorías no son tecnicismos: determinan quién permanece en el procedimiento, cómo se integra el reparto y qué efectos produce sobre la masa hereditaria. Desde la apertura de la sucesión, conviene planear la estrategia: evaluar pasivos, cargas y condiciones antes de aceptar, o, en su caso, optar por el repudio si la herencia resulta antieconómica. En cualquier cenário, la decisión debe estar motivada, documentada y comunicada a la autoridad para surtir efectos frente a terceros. ",
            },
            {
              type: "paragraph",
              text: "La **aceptación expresa** se consuma con una manifestación inequívoca (escrito, acta notarial o comparecencia judicial) y conlleva la asunción de la posición jurídica de heredero. La **aceptación tácita** se infiere de actos que sólo podría realizar quien pretende la calidad de heredero (p. ej., disponer del caudal como propio, promover actos de administración que exceden lo conservatorio). Cuidado: no todo acto implica aceptación; existen **actos de mera conservación o administración necesaria** (asegurar bienes, realizar pagos urgentes para evitar pérdida) que no configuran aceptación si se realiza bajo reserva y a la brevedad. El repudio, en cambio, requiere forma y capacidad; tratándose de menores/incapaces, la autorización judicial y la intervención del Ministerio Público son condiciones de validez. En todos los supuestos, la fecha y el modo de la declaración deben constar en autos o en protocolo, para otorgar seguridad jurídica y oponibilidad. ",
            },

            {
              type: "accordion",
              header: "¿Cuándo es expresa, tácita o inválida?",
              open: false,
              text: "• Expresa: declaración terminante ante juez/notario. • Tácita: actos inequívocos de dueño (no meramente conservatorios). • Inválida: repudio sin capacidad o sin autorización en menores/incapaces; aceptación/repudio bajo error, dolo o violencia (impugnables).",
            },

            {
              type: "paragraph",
              text: "El material contempla que pueden coexistir llamados que acepten y otros que repudien; ello no vicia el procedimiento. Si algunos herederos repudian, su porción se redistribuye conforme a las reglas del orden aplicable (por cabezas, por estirpes, sustitución o, en su caso, llamamiento del siguiente orden). Si un heredero llamado **fallece antes** de aceptar o repudiar, el **derecho de aceptar o repudiar es transmisible a sus propios sucesores**: éstos decidirán si se incorporan a la cadena o si renuncian, preservando la continuidad del trámite. De nuevo, la clave es documental: actas que acrediten los decesos, escritos de aceptación o repudio y, tratándose de incapaces, las autorizaciones respectivas. Esta matriz evita que la sucesión quede en un limbo por la inacción de un llamado o por su muerte intempestiva.",
            },
            {
              type: "paragraph",
              text: "Efectos principales. La aceptación fija definitivamente la condición de heredero, habilita la intervención plena en el juicio y predispone la fase de inventario, liquidación y partición. A partir de ella, el heredero participa en las decisiones de administración y puede impugnar o consentir actos del albacea. El repudio, por el contrario, excluye al llamado, depura el círculo de quienes permanecen y evita que pasivos o cargas potenciales contaminen su patrimonio. Ambos actos impactan la aritmética del reparto: cada aceptación/repudio modifica el número de cabezas o estirpes, y, por ende, las porciones. La autoridad debe dejar constancia ordenada de cada declaración, actualizar el cuadro de herederos y, al momento de partir, motivar cómo esos actos alteraron la distribución. ",
            },

            {
              type: "accordion",
              header: "Checklist documental y de motivación",
              open: false,
              text: "• Identifica capacidad del llamado y, en su caso, tutores/MP • Redacta aceptación o repudio con forma idónea • Distingue actos conservatorios (no implican aceptación) • Actualiza el cuadro de herederos tras cada acto • Motiva la nueva aritmética de porciones.",
            },

            {
              type: "paragraph",
              text: "Interacciones con albacea e inventario. La decisión de aceptar o repudiar no se toma en el vacío: debe dialogar con la información del inventario preliminar y con la actuación del albacea. Si la herencia aparenta pasivos relevantes, el llamado podría valorar el repudio; si el acervo neto es positivo, la aceptación cobra sentido. En ambos casos, el albacea debe rendir cuentas oportunas y transparentes que permitan decisiones informadas. Además, al existir aceptación de unos y repudio de otros, el albacea ajustará su administración al nuevo grupo de herederos, sustituyendo notificaciones y reasignando cuotas de gastos. La trazabilidad de estas decisiones en el expediente fortalece la legitimidad del proceso y reduce impugnaciones. ",
            },
            {
              type: "paragraph",
              text: "Finalmente, la unidad recuerda la dimensión temporal: el **derecho para reclamar la herencia** prescribe a los **diez años** y es transmisible; aunque el material no fija un plazo distinto para aceptar/repudiar, la prudencia procesal aconseja decidir oportunamente para no bloquear inventarios ni particiones. Con todo, la regla de oro es constante: capacidad, forma y motivación. Una aceptación o un repudio bien documentados y oportunamente comunicados al juez/notario convierten una encrucijada potencialmente conflictiva en un paso limpio hacia la liquidación y la partición. Así, el procedimiento se mantiene dentro de los cauces de legalidad, economía procesal y paz familiar que inspira toda la unidad. ",
            },
          ],
        },

        {
          id: "1.5",
          numbering: "4.5",
          title: "De la albacea",
          content: [
            {
              type: "paragraph",
              text: "El albacea es la persona encargada de administrar la herencia desde el fallecimiento del autor hasta la entrega final a herederos y legatarios. No se limita a ‘cuidar’ bienes: debe ejecutar la voluntad del causante (si hay testamento) y, en cualquier caso, preservar el caudal, pagar deudas y gastos, rendir cuentas y distribuir conforme a Derecho. Según el material, representa a la sucesión en juicio y en trámites, informa a los interesados sobre el estado del procedimiento y actúa como garante de legalidad y transparencia. Su papel es funcional y técnico: asegurar, inventariar, valuar, liquidar y, sólo después, partir. Por eso la designación no es honorífica; es un encargo de alta responsabilidad que exige capacidad para administrar, comprender la prelación de pagos y sostener decisiones con motivación y soporte documental. La calidad del proceso sucesorio depende, en gran medida, de la diligencia del albacea.",
            },
            {
              type: "paragraph",
              text: "El documento precisa **quién puede ser albacea y cuáles son sus tipos**. Por origen del cargo: (i) **testamentario**, cuando lo nombra el propio testador; (ii) **legítimo**, si lo designan los herederos; y (iii) **dativo**, cuando lo nombra la autoridad ante desacuerdos o inexistencia de herederos. Por **alcance**, se distingue el **albacea universal**, responsable de todo lo relativo a la herencia, y el **albacea particular**, limitado a funciones específicas (por ejemplo, ejecutar un legado complejo o administrar un rubro patrimonial concreto). El material añade criterios de **capacidad**: no puede desempeñar el cargo quien no tenga libre disposición de sus bienes, mientras que una mujer mayor de edad, incluso casada, puede ser albacea sin autorización del cónyuge, reafirmando la igualdad jurídica. Estas reglas, lejos de formularse en abstracto, orientan nombramientos válidos y evitan nulidades posteriores por falta de capacidad.",
            },

            {
              type: "accordion",
              header: "Tipos de albacea y su alcance",
              open: false,
              text: "• Por origen: Testamentario • Legítimo • Dativo.  • Por alcance: Universal (toda la herencia) • Particular (funciones específicas).  • Requisito general: capacidad para disponer de bienes.",
            },

            {
              type: "paragraph",
              text: "Las **funciones** del albacea se agrupan en cuatro ejes: (1) **Administración**: custodia, conservación, contratación de servicios indispensables y adopción de medidas de aseguramiento (sellos, depósitos, inventarios temporales). (2) **Pago de deudas y gastos**: deudas mortuorias y de última enfermedad, gastos de administración y créditos alimentarios en el orden legal. (3) **Representación**: actuar en juicio y ante autoridades, promover las diligencias necesarias y oponerse a actos que lesionen la masa. (4) **Distribución**: una vez liquidada la herencia, ejecutar la partición y entregar a herederos y legatarios. Todo ello bajo el deber permanente de **rendir cuentas** y **informar** a los interesados. El material subraya que el albacea no sustituye la voluntad del difunto ni la ley: su cometido es hacerlas efectivas con legalidad y eficiencia.",
            },
            {
              type: "paragraph",
              text: "El cargo es **voluntario** en su aceptación, pero **obligatorio** en su cumplimiento una vez aceptado. Si el albacea nombrado omite promover la reclamación ‘por entero’ o incurre en negligencia, los herederos pueden solicitar su remoción; incluso pueden **revocar por unanimidad** cuando la ley lo permita. La regla protege a la sucesión frente a administraciones ineficientes o parciales. En paralelo, el albacea puede ser **heredero**; si lo es, debe extremar la transparencia para evitar conflictos de interés, separando nítidamente su beneficio personal de su deber fiduciario. La clave práctica es documentar decisiones, conservar soportes (facturas, avalúos, contratos) y permitir la **auditoría** de sus actos por los interesados y la autoridad.",
            },

            {
              type: "accordion",
              header: "Checklist operativo del albacea",
              open: false,
              text: "1) Asegurar bienes y documentación. 2) Formar inventario y promover avalúos. 3) Programar pagos según prelación legal. 4) Rendir cuentas periódicas a herederos. 5) Preparar proyecto de partición y ejecutarlo con publicidad registral.",
            },

            {
              type: "paragraph",
              text: "En la **fase inicial**, el albacea debe: identificar activos (bienes muebles, inmuebles, derechos, cuentas), pasivos (deudas, gastos funerarios, última enfermedad) y sujetos (herederos, legatarios, acreedores). Luego, activar medidas de conservación y solicitar providencias precautorias cuando existan riesgos de sustracción o deterioro. Concluida la **aprobación del inventario**, comenzará la **liquidación** y, sólo tras cubrir pagos preferentes, propondrá la **partición**. La trazabilidad —cronología clara de actos, resoluciones y pagos— es vital para la legitimidad del proceso. Así, el albacea convierte un conjunto de mandatos legales en un procedimiento ordenado, verificable y justo.",
            },
            {
              type: "paragraph",
              text: "En síntesis, el albacea es el **eje de gobernanza** del juicio sucesorio: su buen desempeño traduce principios (legalidad, conservación, justicia, respeto a la voluntad) en resultados concretos. Cuando administra con diligencia, rinde cuentas y ejecuta la partición conforme a Derecho, el trámite fluye; cuando falla, el procedimiento se fracciona en incidentes y nulidades. La unidad del módulo ofrece la brújula: tipología del cargo, funciones, capacidad, posibilidad de remoción y deber de información. Seguirla no es sólo cumplir una formalidad; es asegurar que la **herencia** llegue, íntegra y con paz jurídica, a quienes la ley o el testamento señalan. :contentReference[oaicite:1]{index=1}",
            },
          ],
          subthemes: [
            {
              id: "1.5.1",
              numbering: "4.5.1",
              title: "Del inventario y de la liquidación",
              content: [
                {
                  type: "paragraph",
                  text: "El **inventario** es la columna vertebral del juicio sucesorio: delimita qué integra la masa hereditaria y en qué estado se encuentra. El material indica que corresponde al **albacea definitivo** promover su formación; si éste omite hacerlo, **cualquier heredero** puede impulsarlo. Inventariar no es listar sin más: exige identificar y describir bienes, derechos y cargas, ubicar su documentación soporte (títulos, contratos, registros) y, cuando procede, solicitar **avalúos**. El objetivo es doble: (i) asegurar y transparentar el caudal, y (ii) proveer una base sólida para la **liquidación** y la **partición**. Un inventario incompleto o tardío contamina todo el proceso (pagos indebidos, adjudicaciones sobre bienes inexistentes o con gravámenes ocultos). Por eso, además de su **formación**, es crucial su **aprobación** por la autoridad, tras escuchar a herederos, legatarios y acreedores. Sólo así se transforma en parámetro vinculante de las etapas siguientes.",
                },
                {
                  type: "paragraph",
                  text: "La metodología recomendable es secuencial: 1) levantamiento de **inventario preliminar** y medidas de conservación; 2) recabación de títulos y certificaciones registrales; 3) avalúos y verificación de cargas; 4) proyecto de inventario definitivo; 5) **aprobación** con posibilidad de objeciones fundadas; 6) orden de formación de **liquidación**. Esta secuencia reduce espacios de controversia y permite que decisiones sensibles —como vender bienes para pagar deudas— se adopten con soporte técnico y control judicial/notarial. El inventario, además, debe incluir pasivos ciertos y estimados (gastos funerarios, de última enfermedad, adeudos fiscales), de forma que la ecuación de la herencia se examine de manera integral y no sólo desde el activo.",
                },

                {
                  type: "accordion",
                  header: "Contenido mínimo del inventario",
                  open: false,
                  text: "• Activos: inmuebles, muebles, cuentas, derechos, acciones, créditos. • Pasivos: deudas mortuorias, última enfermedad, fiscales, laborales. • Documentación soporte y avalúos. • Observaciones sobre posesión, gravámenes y riesgos.",
                },

                {
                  type: "paragraph",
                  text: "Aprobado el inventario, inicia la **liquidación**. El material fija la **prelación de pagos**: en primer lugar, **deudas mortuorias** (gastos del funeral y los generados por la última enfermedad del causante); en segundo término, **gastos de administración** de la herencia; y, en tercer lugar, **créditos alimentarios**. Esta prelación protege dignidad del de cujus, continuidad de la administración y tutela de sujetos vulnerables. Si **no hay liquidez**, el albacea puede **promover la enajenación** de bienes muebles o inmuebles, con autorización motivada, para obtener recursos y satisfacer los pagos. Es indispensable registrar cada desembolso y su justificación, conservando comprobantes y resguardos bancarios. La liquidación sin soporte contable válido es una nulidad en potencia.",
                },
                {
                  type: "paragraph",
                  text: "La venta de bienes durante la liquidación exige prudencia: debe estar precedida de avalúos actualizados, selección del medio de enajenación más idóneo (subasta, venta directa con condiciones), publicidad suficiente y justificación de **necesidad y proporcionalidad**. El producto de la venta se aplica rigurosamente a la prelación legal y se documenta su ingreso y egreso. Cuando existan bienes con valor afectivo o familiar, el albacea puede proponer alternativas (adjudicación con cargas o compensaciones) una vez cubierta la prelación, evitando conflictos innecesarios. Todo acto de disposición debe quedar asentado en autos o protocolo con sus soportes.",
                },

                {
                  type: "accordion",
                  header: "Prelación de pagos (recordatorio rápido)",
                  open: false,
                  text: "1) Deudas mortuorias (funeral y última enfermedad). 2) Gastos de administración. 3) Créditos alimentarios. 4) Demás acreedores conforme a ley y, sólo después, proyecto de partición.",
                },

                {
                  type: "paragraph",
                  text: "La **contabilidad** de la liquidación es tanto jurídica como financiera. Jurídica, porque cada pago debe tener fundamento (norma, resolución, contrato) y respetar el orden legal; financiera, porque requiere trazabilidad (fecha, monto, concepto, comprobante, saldo). Al cierre de la liquidación, el albacea debe rendir **cuentas** con estados claros, conciliando lo inventariado con lo efectivamente liquidado. La autoridad revisa, corrige si procede y sólo entonces habilita la **partición**. Saltarse este paso conduce a adjudicaciones impugnables y a responsabilidad del albacea.",
                },
                {
                  type: "paragraph",
                  text: "Una vez **liquidada** la herencia, la partición puede plantearse con seguridad: el caudal remanente es real y los pasivos han sido cubiertos. El material advierte que la liquidación es, en esencia, **convertir en dinero los bienes y derechos del difunto** para pagar deudas y obligaciones, distribuyendo el remanente entre los herederos. En la práctica, no siempre se convierte todo; basta con generar liquidez suficiente y mantener la integridad patrimonial de lo que será adjudicado. Con inventario aprobado, liquidación transparente y cuentas rendidas, la sucesión avanza a su desenlace sin espacios de opacidad. :contentReference[oaicite:2]{index=2}",
                },
              ],
            },
          ],
        },

        {
          id: "1.6",
          numbering: "4.6",
          title: "De la partición",
          content: [
            {
              type: "paragraph",
              text: "La partición es el procedimiento mediante el cual se divide y distribuye la herencia entre los herederos una vez concluido el inventario y la liquidación. Su objetivo es determinar con precisión las porciones y los bienes que corresponden a cada heredero, cerrar la indivisión y permitir la disposición libre de los bienes adjudicados. Esta etapa transforma el caudal hereditario —hasta entonces administrado unitariamente— en titularidades individuales perfectas. En términos funcionales, la partición se sustenta en el inventario aprobado y en la liquidación transparente; sin estas bases, cualquier reparto sería inestable o impugnable. El material subraya que la partición puede tramitarse ante juez o notario, según exista o no acuerdo entre los interesados, manteniendo siempre la legalidad y la trazabilidad de los actos. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "Existen dos vías: la partición amigable y la partición judicial. La primera procede cuando los herederos están de acuerdo sobre la composición del caudal, la valuación de bienes, la existencia de cargas y la asignación de lotes o derechos; su fuerza proviene del consentimiento informado y de la protocolización que dota de seguridad jurídica. La partición judicial opera cuando hay desacuerdo; en ella, el juez dirige la formación de lotes, resuelve objeciones sobre avalúos, integra compensaciones y dicta la adjudicación. En ambos casos, la regla de oro es la motivación: explicar cómo se arriba a cada cuota y por qué los bienes asignados satisfacen la proporción debida, con respaldo en inventario, avalúos y liquidación.",
            },

            {
              type: "accordion",
              header: "Rutas de partición (decisión rápida)",
              open: false,
              text: "• Amigable: acuerdo total + protocolización. • Judicial: desacuerdo → dirección judicial (lotes, compensaciones, adjudicación). • En ambos casos: partir sólo tras inventario aprobado y liquidación cumplida. :contentReference[oaicite:2]{index=2}",
            },

            {
              type: "paragraph",
              text: "Metodología práctica: (1) Confirmar que el inventario está aprobado y que la liquidación cubrió deudas mortuorias, gastos de administración y créditos alimentarios; (2) Determinar la fracción ideal de cada heredero (cabezas/estirpes) según el orden aplicable; (3) Formar lotes equivalentes en valor, procurando homogeneidad interna o, en su defecto, compensaciones en dinero; (4) Asignar lotes mediante acuerdo o por sorteo razonado cuando la ley lo prevea; (5) Redactar el convenio/sentencia de partición con plano de adjudicaciones, cargas, servidumbres y compensaciones; (6) Publicitar e inscribir para producir efectos frente a terceros. Este método reduce la litigiosidad y evita sesgos en la selección de bienes.",
            },
            {
              type: "paragraph",
              text: "Criterios de equidad: la partición debe procurar que cada porción sea proporcional en valor y razonable en su composición (p. ej., no concentrar todos los bienes líquidos en un solo heredero y todos los ilíquidos en otro). Cuando existan bienes indivisibles o de fuerte valor afectivo, pueden diseñarse adjudicaciones con compensaciones para equilibrar; si la masa carece de liquidez, se justifica enajenar con autorización para generar recursos. La imparcialidad del albacea y la supervisión judicial/notarial son esenciales para legitimar estas decisiones.",
            },

            {
              type: "accordion",
              header: "Checklist de trazabilidad",
              open: false,
              text: "• Aritmética de cuotas (cabezas/estirpes) • Cuadro de lotes y avalúos actualizados • Compensaciones justificadas • Actas y firmas de conformidad • Inscripción registral de adjudicaciones. :contentReference[oaicite:3]{index=3}",
            },

            {
              type: "paragraph",
              text: "La culminación de la partición produce efectos jurídicos relevantes: división definitiva, adquisición plena de derechos por los adjudicatarios, extinción de la indivisión, responsabilidad individual por la parte recibida y publicidad registral para oponibilidad. A partir de ese momento, cada heredero dispone libremente de sus bienes y no puede reclamar la parte de otro, salvo vicios que habiliten remedios (rescisión o nulidad). De ahí la importancia de documentar con rigor el proceso, pues una partición mal motivada reabre el conflicto y anula la finalidad pacificadora del juicio sucesorio. :contentReference[oaicite:4]{index=4}",
            },
          ],
          subthemes: [
            {
              id: "1.6.1",
              numbering: "4.6.1",
              title: "Efectos de la partición",
              content: [
                {
                  type: "paragraph",
                  text: "La partición genera la **división definitiva** de la herencia: el patrimonio unitario del causante se fracciona en adjudicaciones ciertas y autónomas. Desde el punto de vista sustantivo, esta división cierra el régimen de comunidad hereditaria y transforma las cuotas ideales en titularidades concretas sobre bienes o sumas de dinero. La definitividad no es retórica: estabiliza expectativas y permite el tráfico jurídico, evitando que los bienes sigan ‘atados’ a decisiones colectivas. Por ello, la técnica documental debe ser impecable, con planos de adjudicación y descripciones que permitan identificar cada bien sin ambigüedad. :contentReference[oaicite:5]{index=5}",
                },
                {
                  type: "paragraph",
                  text: "Se produce además la **adquisición de derechos plenos** por cada heredero sobre su porción. Esto implica poseer, usar, disfrutar y disponer de lo adjudicado, dentro de los límites generales del ordenamiento. Si la partición asigna bienes registrables (inmuebles, vehículos), la inscripción respectiva es condición de oponibilidad. La mutación subjetiva del derecho —del caudal hereditario a la órbita individual— exige una cadena perfecta de títulos: inventario, liquidación, resolución de partición y, finalmente, asiento registral. Sin esta cadena, terceros podrían cuestionar la validez de transmisiones posteriores.",
                },

                {
                  type: "accordion",
                  header: "Resumen de efectos (según material)",
                  open: false,
                  text: "• División definitiva • Adquisición de derechos plenos • Fin de la indivisión • Responsabilidad individual • Intangibilidad (no revocación salvo fraude/error) • Publicidad registral • Finalización del proceso. :contentReference[oaicite:6]{index=6}",
                },

                {
                  type: "paragraph",
                  text: "El **fin de la indivisión** significa que las decisiones sobre los bienes ya no requieren consenso de los demás herederos; cada adjudicatario actúa por sí en su esfera. Correlativamente, emerge la **responsabilidad individual**: cada uno responde por las deudas, cargas o gravámenes que pesen sobre lo que recibió, sin arrastrar a los demás. Este deslinde reduce costos de coordinación y conflictos futuros, y refuerza la seguridad jurídica de terceros contratantes.",
                },
                {
                  type: "paragraph",
                  text: "La **intangibilidad** de la partición impide su revocación, salvo que se acredite **fraude o error** u otro vicio relevante. Esta regla preserva la estabilidad del reparto y protege el tráfico. Por eso es crucial la motivación del cálculo de cuotas, la transparencia en avalúos y la traza de compensaciones: son el ‘seguro’ de la intangibilidad. Cuando haya indicios de vicio, el remedio no es reabrir informalmente el reparto, sino acudir a las acciones procedentes (rescisión o nulidad).",
                },

                {
                  type: "accordion",
                  header: "Buenas prácticas post-partición",
                  open: false,
                  text: "• Inscribir adjudicaciones de inmediato • Entregar posesiones materiales con actas • Migrar servicios y padrones a nombre del adjudicatario • Liquidar saldos y cancelar gravámenes • Conservar expediente con soportes por al menos 10 años. :contentReference[oaicite:7]{index=7}",
                },

                {
                  type: "paragraph",
                  text: "La **publicidad registral** de la partición cumple doble función: oponibilidad frente a terceros y cierre formal del proceso. Sin ella, la eficacia externa de la adjudicación puede verse comprometida. Finalmente, la partición **finaliza el proceso sucesorio**: con las adjudicaciones inscritas, cesa la administración unitaria, el albacea rinde cuentas finales y los herederos asumen la plena disponibilidad. En suma, los efectos descritos por el material conforman un sistema de cierre que combina certeza, eficiencia y tutela de terceros. :contentReference[oaicite:8]{index=8}",
                },
              ],
            },
            {
              id: "1.6.2",
              numbering: "4.6.2",
              title: "De la rescisión y nulidad",
              content: [
                {
                  type: "paragraph",
                  text: "La **rescisión** y la **nulidad** son remedios excepcionales que permiten atacar una partición viciada. La rescisión opera cuando, pese a haber existido formalmente una partición válida, se demuestra un vicio que la torna injusta o ineficaz (p. ej., error sustancial en la división, fraude, violencia o coacción, o incumplimiento de formalidades esenciales). La nulidad, por su parte, afirma que la partición nunca produjo efectos por faltar elementos estructurales (capacidad, consentimiento, objeto o causa lícitos) o por violar la ley de modo radical (simulación, ilicitud). El material enumera estas causas y sugiere tratarlas con prudencia: su función es restaurar legalidad, no abrir retroactivamente contiendas infundadas. :contentReference[oaicite:9]{index=9}",
                },
                {
                  type: "paragraph",
                  text: "Causales típicas de **rescisión**: (i) error relevante en la formación de lotes o en los avalúos que genere desequilibrio sustancial; (ii) fraude, entendido como maniobras para engañar o ocultar bienes; (iii) violencia o coacción que vicie la voluntad de algún heredero; (iv) incumplimiento de formalidades que, sin anular de raíz el acto, afecten su justicia. Causales de **nulidad**: (i) falta de capacidad de un interviniente; (ii) falta de consentimiento válido (ausencia total o vicio grave); (iii) violación frontal de la ley (p. ej., partir sin inventario/liquidación); (iv) simulación. La elección del remedio depende de la entidad del vicio y de los efectos que se busque: corregir (rescisión) o borrar (nulidad).",
                },

                {
                  type: "accordion",
                  header: "Causales y efectos — guía rápida",
                  open: false,
                  text: "• Rescisión: error, fraude, violencia, formalidades incumplidas → corrige o rehace en lo necesario. • Nulidad: incapacidad, falta de consentimiento, violación de la ley, simulación → borra efectos ex tunc y reabre el reparto. :contentReference[oaicite:10]{index=10}",
                },

                {
                  type: "paragraph",
                  text: "Carga de la prueba: quien impugna debe demostrar el vicio con evidencia robusta (documental, pericial en avalúos, testimoniales coherentes). En fraude o simulación, la prueba indiciaria y la trazabilidad contable son decisivas. En violencia o coacción, la inmediatez de la denuncia y los elementos periféricos (comunicaciones, constancias médicas) pesan en la convicción judicial. La mera inconformidad con la distribución no basta.",
                },
                {
                  type: "paragraph",
                  text: "Efectos y alcance: declarada la **rescisión**, el juez precisará qué aspectos se rehacen (p. ej., nuevo avalúo y redistribución de ciertos bienes) conservando lo demás. Declarada la **nulidad**, la partición se tiene por no realizada: se reconstituye la indivisión, se reactiva la administración y se rehace el reparto desde inventario y liquidación si fuese necesario. En ambos supuestos, se protege a terceros de buena fe: la sentencia debe armonizar la tutela de los herederos con la seguridad del tráfico.",
                },

                {
                  type: "accordion",
                  header: "Hoja de ruta para impugnar",
                  open: false,
                  text: "1) Precisar remedio (rescisión o nulidad) y causal. 2) Recolectar evidencia y, en su caso, peritajes. 3) Medidas cautelares para preservar bienes. 4) Petitorio claro (qué se rehace/qué se anula). 5) Plan de cumplimiento y reinscripción registral. :contentReference[oaicite:11]{index=11}",
                },

                {
                  type: "paragraph",
                  text: "Interacción con la publicidad registral: la rescisión o nulidad debe inscribirse para evitar dobles cadenas de titularidad. Si hubo transmisiones a terceros, la sentencia valorará su buena fe y, en su caso, delimitará restituciones y compensaciones. Al cerrar, el material enfatiza que la finalidad de estos remedios es **restablecer la justicia del reparto**, no perpetuar el conflicto: por ello, la motivación de la sentencia y la claridad operativa en la ejecución son tan importantes como la verificación del vicio. :contentReference[oaicite:12]{index=12}",
                },
              ],
            },
          ],
        },

        {
          id: "1.7",
          numbering: "4.7",
          title: "La representación en la sucesión intestada",
          content: [
            {
              type: "paragraph",
              text: "La representación en la sucesión intestada es la institución que permite que los descendientes de un llamado ocupen su lugar cuando este no puede heredar por premoriencia, incapacidad, indignidad o repudio. Su finalidad es preservar la continuidad patrimonial dentro de cada rama familiar, evitando que una línea quede excluida por hechos que impiden a su miembro inmediato recibir la porción que le habría correspondido. En la gramática de la intestada, la representación coexiste con los principios de igualdad, proximidad y justicia, y se articula con la regla distributiva por estirpes. El material del módulo perfila su función como técnica de equilibrio: cuando fallece un hijo del causante antes de la apertura, sus descendientes no heredan a la par de los demás hijos por cabezas, sino por ramas, proyectando la cuota del ausente hacia quienes le siguen en esa línea. Además, en la parentela colateral, habilita a los hijos de un hermano del autor para recibir la porción que a este habría tocado si viviera, con el mismo mecanismo de estirpes. Esta ingeniería evita saltos injustificados entre líneas y convierte el reparto en un algoritmo verificable. A diferencia de la sustitución (que regula escenarios de imposibilidad previstos en un testamento) y del derecho de acrecer (que distribuye excedentes entre coherederos del mismo llamamiento), la representación reubica la titularidad de la porción del predecesor dentro de su propia rama, sin alterar el orden global de parientes. En suma, no crea derechos nuevos: conserva, en cabeza de los descendientes, el derecho que el representante habría tenido, con la medida exacta de su cuota.",
            },
            {
              type: "paragraph",
              text: "Ámbito y límites. La representación opera, de manera típica, en la línea descendente del causante: hijos que no pueden heredar son representados por sus descendientes, quienes reciben por estirpes. El material, coherente con la regulación civil mexicana citada en la unidad, también reconoce su aplicación en la línea colateral inmediata: si un hermano del de cujus no puede heredar, sus hijos (sobrinos del autor) reciben por estirpes la porción que habría correspondido a aquel. En cambio, no procede en la línea ascendente: los padres o abuelos no representan a los descendientes; en la ascendente rige la proximidad de grado, no la proyección por ramas. Los supuestos habilitantes son cuatro y conviene diferenciarlos: la premoriencia (el llamado muere antes que el causante), la incapacidad para heredar (p. ej., falta de personalidad jurídica en casos extremos), la indignidad (sanción civil por conductas graves contra el autor o su familia) y el repudio (renuncia válida y formal de la herencia). En todos, la regla es la misma: no se pierde la porción, sino que se transmite por estirpe. Este marco evita decisiones discrecionales y fortalece la previsibilidad del sistema. La clave metodológica es ubicar la rama, identificar el llamado ausente, fijar la cuota que le habría correspondido y dividirla en partes iguales entre sus representantes.",
            },

            {
              type: "accordion",
              header: "Mapa rápido: ¿cuándo hay representación?",
              open: false,
              text: "• Descendientes: siempre que el hijo del causante no pueda heredar, su porción pasa por estirpes a sus descendientes. • Colaterales: hijos de un hermano del autor representan a su progenitor ausente. • No procede en ascendientes. • Supuestos habilitantes: premoriencia, incapacidad, indignidad o repudio. • Regla de cálculo: por estirpes sobre la cuota del ausente.",
            },

            {
              type: "paragraph",
              text: "Cálculo por estirpes: método paso a paso. Primero, se determina el conjunto de llamados del orden correspondiente (p. ej., descendientes con o sin cónyuge). Segundo, se calcula la porción ideal que habría recibido el ausente si estuviera presente; esa porción constituye la estirpe. Tercero, se divide la estirpe entre los representantes del ausente por partes iguales. Cuarto, se suman las estirpes y las porciones por cabezas de los demás coherederos para comprobar que la herencia está íntegramente distribuida. Ejemplo típico: el causante deja tres hijos, A, B y C; A falleció antes y dejó dos hijos. Si no hay cónyuge, B y C heredan por cabezas un tercio cada uno; los dos nietos heredan por estirpes el tercio de A, a razón de un sexto para cada uno. Si además concurre cónyuge en el supuesto legal que lo equipara a un hijo, se agrega una cuarta porción equivalente a la de un hijo, y la estirpe de A se recalcula sobre el nuevo denominador. En colaterales: si hay dos hermanos vivos y uno premuerto con un hijo, los dos hermanos heredan por cabezas y el sobrino por estirpes la parte del padre ausente. El método no se improvisa: sigue la aritmética que el material despliega al exponer igualdad por cabezas y representación por estirpes en descendientes y colaterales.",
            },
            {
              type: "paragraph",
              text: "Prueba y procedimiento. La representación no se presume: debe acreditarse con documentos idóneos que demuestren parentesco, premoriencia, incapacidad, indignidad o repudio. En descendientes: actas de nacimiento, reconocimiento o adopción, y defunción del hijo premuerto; en colaterales: actas que establezcan la línea fraterna. Cuando intervienen menores o personas con capacidad restringida, el Ministerio Público participa para salvaguardar su interés, especialmente si se requiere autorización para actos de repudio. La autoridad competente debe reconstruir el árbol familiar en autos y motivar la elección del mecanismo de estirpes, señalando la cuota del ausente y su proyección entre los representantes. El albacea, por su parte, debe reflejar la estructura por ramas en el inventario, liquidación y proyecto de partición, de modo que la contabilidad del caudal haga visible la ingeniería de estirpes. La congruencia documental entre parentesco, cálculos y adjudicaciones es el antídoto contra impugnaciones por error aritmético o por integración defectuosa del círculo de herederos. Finalmente, toda medida de aseguramiento y administración debe guardar neutralidad entre estirpes y cabezas, evitando privilegios fácticos que erosionen la igualdad entre ramas.",
            },

            {
              type: "accordion",
              header: "Errores frecuentes y antídotos",
              open: false,
              text: "• Repartir por cabezas cuando corresponde por estirpes → Identifica líneas y grados. • Admitir representación en ascendientes → No procede. • Confundir representación con acrecimiento o sustitución → La primera proyecta la cuota del ausente a su rama; el acrecimiento redistribuye entre coherederos del mismo llamamiento; la sustitución es categoría típicamente testamentaria. • Omitir prueba de premoriencia/repudio → Invalida el llamamiento. • No motivar la aritmética → Expón la cuota del ausente y su división.",
            },

            {
              type: "paragraph",
              text: "Concurrencias y modulaciones. La representación convive con reglas especiales del cónyuge y, en su caso, del concubino, así como con derechos de alimentos de ascendientes. Así, si concurren hijos, nietos por estirpes y cónyuge equiparado a un hijo, el denominador de la partición incorpora una cabeza adicional y la estirpe se recalcula en consecuencia. En colaterales, cuando compiten hermanos de doble vínculo con medios hermanos, primero se aplica la regla de doble porción para los de doble vínculo y, sólo después, la representación a favor de sobrinos por la rama del premuerto. En adopción plena, el hijo adoptivo representa como cualquier otro descendiente. La indignidad o la incapacidad del llamado activan la representación con los mismos efectos que la premoriencia; el repudio también, siempre que sea válido. Si la rama representada incluye descendientes de diferente grado, todos participan por estirpes dentro de esa rama; el salto de grados no desplaza a los más remotos si están en la misma línea del ausente. El objetivo es preservar la justicia intergeneracional que inspira la institución, de acuerdo con el desarrollo del módulo.",
            },
            {
              type: "paragraph",
              text: "Casuística avanzada y cierre operativo. En representaciones en cascada (nietos y bisnietos), el método se repite dentro de la estirpe: se fija la cuota del ausente y se divide entre sus descendientes del siguiente grado; si uno de ellos también está ausente, su porción se proyecta a su propia estirpe, y así sucesivamente, hasta agotar la línea. En escenarios mixtos de colaterales, puede haber hermanos presentes, un hermano premuerto con varios hijos y otro premuerto sin descendencia: la porción de este último se redistribuye entre los coherederos del mismo llamamiento por acrecimiento, mientras que la del primero baja por estirpes a sus hijos. Procesalmente, conviene incorporar al expediente un cuadro de estirpes y cabezas, con la fracción ideal de cada rama, vinculado al inventario y a los avalúos para sustentar la equivalencia de lotes. Para cerrar, la partición debe explicitar cómo se materializa la aritmética de estirpes en adjudicaciones concretas, con compensaciones cuando sea necesario. Solo así la representación cumple su función: asegurar que la ausencia del llamado no frustre a su descendencia y que el reparto refleje, con fidelidad y legalidad, la estructura familiar del causante.",
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
          href: "https://www.youtube.com/watch?v=gDvwrGv3dws", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "La sucesión legítima (Video) https://www.youtube.com/watch?v=gDvwrGv3dws",
            "Rendición de cuentas del albacea (Video) https://www.youtube.com/watch?v=17WpjuaEbvY",
            "Código Civil para el Estado de Veracruz de Ignacio de la Llave (Texto legal) https://www.legisver.gob.mx/leyes/LeyesPDF/CODIGOCIVIL13062022",
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
            "Arellano Garcia, C. (2001). Manuella del abogado. Práctica Jurídica. México: Porrua.",
            "Capictant, C. y. (1987). Instituciones de derecho civil. México: Porrúa.",
            "Código Civil para el Estado de Veracruz. (s.f.). Obtenido de https://www.legisver.gob.mx/leyes/LeyesPDF/CODIGOCIVIL13062022.pdf",
            "De Pina Vara, R. (1994). Derecho Civil Mexicano. México: Porrúa.",
            "Gutiérrez y González, E. (1996). Derecho de las Obligaciones. México: Porrúa.",
            "Ramírez, A. (2022). Introducción al derecho civil (4.ª ed.). Editorial Jurídica.",
            "Rojina Villegas, R. (1998). Derecho Civil Mexicano: Bienes, derechos reales y posesión. México: Porrúa.",
            "Rojina Villegas, R. (2009). Compendio de derecho civil III. México: Porrúa.",
            "Rojina Villegas, R. (2014). Compendio de derecho civil: Introducción, personas y familia. México: Porrúa.",
            "ROJINA, V. R. (2008). COMPENDIO DE DERECHO CIVIL II. MÉXICO: PORRÚA.",
            "Vara, D. P. (1965). Diccionario de Derecho. Porrúa.",
            "Vázquez, A. C. (2012). Conceptos jurídicos fundamentales. México: Universidad Nacional Autónoma de México.",
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
