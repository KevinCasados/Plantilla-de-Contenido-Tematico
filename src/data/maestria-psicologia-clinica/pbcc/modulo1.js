/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MPCL", // Maestría en Psicología Clínica
  courseId: "MPCL-PBCC", // Psicoterapia Breve Cognitivo‑Conductual
  id: "MPCLPBCC-mod1", // Módulo 1 del curso

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Psicoterapia Breve Cognitivo‑Conductual",
  title: "Módulo 1. Conceptos básicos y modelos conductuales",
  semestre: "4° semestre",
  teacher: "Mtro. Iván López Ortiz",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Conocer los antecedentes históricos de la terapia cognitivo‑conductual y los " +
    "principios del condicionamiento clásico y operante.",

  competencies: [
    "Sintetiza la evolución de la terapia cognitivo‑conductual para comprender su relación con sus antecedentes y desarrollos.",
    "Define los principios del condicionamiento clásico y operante para comprender problemas clínicos relevantes.",
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

    /* Unidad principal */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Conceptos básicos y Modelos conductuales",
      content: [
        // Párrafo 1 — Por qué ‘conceptos básicos’
        {
          type: "paragraph",
          text: "Este tema introduce la lógica de la terapia cognitivo‑conductual (TCC) situándola en su genealogía. La TCC suele considerarse representativa de las denominadas terapias de segunda generación; por ello, antes de abordar procedimientos y técnicas, conviene comprender su relación con las de primera generación (terapias conductuales basadas en condicionamiento clásico y operante) y con las de tercera generación (contextuales), que reubican el análisis funcional y la conducta verbal en el centro de la intervención. Este encuadre no es retórico: permite interpretar con rigor el sentido de los procedimientos y anticipar sus alcances y límites. Además, alinear esta introducción con el objetivo del módulo —conocer los antecedentes históricos de la TCC y los principios de condicionamiento— asegura un lenguaje común para el resto de la materia. Con ello, el estudiante podrá distinguir qué elementos provienen de la tradición conductual, cuáles se integran desde el giro cognitivo y cómo se articulan en propuestas breves contemporáneas. El resultado esperado es una comprensión sintética del marco conceptual que sirva de base para las decisiones clínicas: qué hacer, por qué, con quién y en qué secuencia.",
        },

        // Párrafo 2 — Origen histórico y nomenclatura
        {
          type: "paragraph",
          text: "Históricamente, la TCC se vincula a Aaron T. Beck. Sus primeros desarrollos se presentan a finales de los años sesenta y comienzos de los setenta, y en un inicio los denominó ‘terapia cognitiva’; con el tiempo, el término ‘terapia cognitivo‑conductual’ se popularizó como sinónimo, subrayando la integración operativa entre procedimientos de base conductual y esquemas de evaluación e intervención centrados en el procesamiento de la información. Comprender esta transición nomenclatural es útil para leer la literatura: muchos manuales clásicos siguen hablando de ‘terapia cognitiva’, mientras que en la práctica clínica y en la investigación aplicada se adopta TCC para remarcar la continuidad con el análisis funcional del comportamiento. Este matiz histórico facilita contrastar qué parte del andamiaje proviene del laboratorio conductual —diseño de tareas, metas por sesión, medición sistemática de variables y resultados— y cuál se orienta a identificar y modificar patrones de pensamiento desadaptativos. En suma, más que un rebranding, la evolución del nombre refleja la convergencia de dos tradiciones que, al integrarse, dotan de estructura y trazabilidad a la intervención.",
        },

        // Acordeón — Mapa rápido del Tema 1
        {
          type: "accordion",
          header: "Mapa rápido (3 niveles)",
          open: false,
          text:
            "**Nivel conceptual**  \n" +
            "• Segunda generación: puente entre lo conductual y lo cognitivo.  \n" +
            "• Unidad de análisis: relación entre eventos (A‑B‑C) y procesamiento.  \n" +
            "• Meta: modificar conductas y pensamientos disfuncionales.  \n" +
            "**Nivel histórico**  \n" +
            "• Precursores: condicionamiento clásico y operante; crítica al psicoanálisis.  \n" +
            "• Beck y la ‘terapia cognitiva’ → sinergia con procedimientos conductuales.  \n" +
            "• Emergencia de terapias contextuales en los 1990.  \n" +
            "**Nivel aplicado**  \n" +
            "• Estructura breve, metas por sesión, tareas intersesión, medición de resultados.  \n" +
            "• Selección de técnicas según función, no por rótulo.  \n" +
            "• Lectura de casos: del análisis funcional a la reestructuración y la activación.",
        },

        // Párrafo 3 — Ruptura con el psicoanálisis y giro cognitivo
        {
          type: "paragraph",
          text: "El origen de la TCC implica una ruptura con la psicoterapia psicoanalítica en la que Beck se formó. La evidencia empírica que recolectó cuestionó supuestos psicoanalíticos y le condujo a buscar explicaciones alternativas. Su marco cognitivo adoptó el modelo de procesamiento de la información: los síntomas no derivan de las experiencias en sí mismas, sino de su procesamiento sesgado, que genera interpretaciones distorsionadas; por consiguiente, el objetivo clínico es modificar patrones conductuales y cognitivos desadaptativos. Esta conceptualización no niega el valor de explorar significado, pero desplaza el énfasis desde lo inconsciente hacia lo accesible y actual, con procedimientos operacionalizables y medibles. La convergencia con lo conductual aporta método: participación activa del terapeuta, metas por sesión, tareas para casa y evaluación de resultados. En conjunto, el ‘giro cognitivo’ y la disciplina conductual establecen una práctica guiada por hipótesis contrastables, más cercana a los diseños de investigación que a la hermenéutica clínica clásica. Para el estudiante, esto implica aprender a traducir quejas en formulaciones funcionales y cognitivas que, una vez intervenidas, muestren cambios observables y sostenibles.",
        },

        // Párrafo 4 — Eficacia, eficiencia y modalidad breve
        {
          type: "paragraph",
          text: "La TCC ha mostrado eficacia en una amplia gama de trastornos y, desde su diseño, buscó también la eficiencia: estructura por fases, foco en problemas actuales y horizonte de corto plazo. De hecho, los modelos breves contemporáneos han reducido los ciclos típicos de 12–20 sesiones a rangos de 4–8 cuando la indicación y el caso lo permiten, sin perder calidad en los resultados. Esta orientación no es ‘minimalista’: exige precisión diagnóstica, objetivos conductuales nítidos, priorización y un sistema de trabajo que asigne a cada sesión un propósito verificable. Para la formación clínica, esto se traduce en dominar un set reducido pero potente de procedimientos con criterios de uso, contraindicaciones y marcadores de progreso; y en sostener rutinas de medición antes‑durante‑después que permitan atribuir cambios a las intervenciones. Así, la brevedad deja de ser una promesa y se convierte en una propiedad del diseño cuando el caso es adecuado y las contingencias del entorno terapéutico apoyan la adherencia y la transferencia.",
        },

        // Párrafo 5 — Críticas, tercera generación y continuidad
        {
          type: "paragraph",
          text: "Dos críticas recurrentes han impulsado la evolución del campo: i) no siempre está claro qué componente explica la efectividad de la TCC (cognitivo vs. conductual), y ii) faltan, en algunos programas, puentes explícitos con procesos psicológicos demostrados en laboratorio que subyacen a los procedimientos. En diálogo con ello emergen las terapias de tercera generación o contextuales (ACT, FAP, DBT, Activación Conductual), que reafirman el análisis funcional, la función del lenguaje y las relaciones de equivalencia. La Activación Conductual, por ejemplo, surge de análisis de componentes en depresión que muestran que el componente conductual puede ser tan eficaz como la TCC completa, lo que refuerza la necesidad de pensar por funciones y no por etiquetas. En este curso nos enfocaremos en TCC, pero con conciencia histórica y conceptual para integrar lo útil de cada tradición y distinguir cuándo una técnica es pertinente por su función en el caso, su compatibilidad con objetivos breves y su capacidad para producir cambios medibles y clínicamente significativos.",
        },
      ],

      /* → TEMAS (nivel 1 dentro de la unidad) */
      subthemes: [
        /* TEMA 1 */
        {
          id: "1.T1", // id único para evitar colisión con la unidad
          numbering: "Tema 1",
          title: "Conceptos básicos",
          content: [
            // Párrafo 1 (≈300 palabras)
            {
              type: "paragraph",
              text: "Este tema establece el andamiaje conceptual mínimo para transitar con solvencia el resto del curso. La psicoterapia breve cognitivo‑conductual (TCC), aun cuando será el foco de la materia, se enmarca en una genealogía más amplia: se la considera representativa de las llamadas terapias de segunda generación, por lo que resulta imprescindible situarla en relación con sus antecedentes (primera generación, de base conductual) y con desarrollos posteriores (tercera generación o contextuales). Este encuadre no es decorativo: anclar la TCC en su contexto histórico y funcional permite comprender su arquitectura (qué conserva, qué corrige, qué integra) y tomar decisiones clínicas con mejor criterio. Para efectos didácticos, partiremos de tres coordenadas. Primero, el objetivo formativo de la sesión: conocer los antecedentes históricos de la TCC y los principios del condicionamiento clásico y operante, ya que de ahí provienen muchas de sus rutinas de evaluación e intervención. Segundo, el lugar de la TCC dentro de la evolución de la psicoterapia de tradición conductual‑cognitiva, con especial atención a la convergencia entre el análisis de la conducta y el llamado “giro cognitivo”. Tercero, un mapa de referencias que nos permita distinguir conceptos, métodos y resultados: del análisis funcional al trabajo con pensamientos y creencias, de la medición conductual a los formatos breves contemporáneos. Con estas coordenadas, el estudiante podrá interpretar con rigor los procedimientos que vendrán y conectar cada técnica con su función, evitando el uso ritual o acrítico de protocolos.",
            },

            // Acordeón 1 — Viñetas del PDF (síntesis Conceptos básicos)
            {
              type: "accordion",
              header: "Conceptos básicos: puntos clave del material",
              open: false,
              text:
                "• La TCC se considera representativa de las ‘terapias de segunda generación’; por ello, debe comprenderse en relación con las de primera (conductuales) y tercera (contextuales).  \n" +
                "• Objetivo formativo de la sesión: conocer antecedentes de la TCC y principios del condicionamiento clásico y operante.  \n" +
                "• Fundador: Aaron T. Beck; cronología: finales de 1960 / inicios de 1970; denominación original: ‘terapia cognitiva’.  \n" +
                "• Influencias: revolución cognitiva; aportes de George Kelly y Albert Ellis.  \n" +
                "• Modelo explicativo: procesamiento de la información (sesgos → interpretaciones distorsionadas); objetivo clínico: modificar conductas y pensamientos disfuncionales.  \n" +
                "• Estructura de trabajo heredada de la terapia conductual: participación activa del terapeuta, procedimientos operacionalizados, metas por sesión, tareas y medición de variables/resultados.",
            },

            // Párrafo 2 (≈300 palabras)
            {
              type: "paragraph",
              text: "Desde el punto de vista histórico, la TCC se asocia al trabajo de Aaron T. Beck. El material identifica explícitamente a Beck como fundador (1921–2021) y subraya que, aunque la denominación ‘terapia cognitivo‑conductual’ se volvió común, la propuesta original de 1960 fue nombrada por él como ‘terapia cognitiva’; con el tiempo, ambas expresiones comenzaron a usarse como sinónimos. Esta precisión es útil para leer la literatura: ciertos manuales conservan el rótulo ‘cognitiva’, mientras que la práctica clínica y la investigación aplicada usan TCC para remarcar la síntesis operativa con la tradición conductual. También se señalan antecedentes formativos de Beck en psicoterapia psicoanalítica, así como la ruptura que siguió a la evidencia empírica que contradecía supuestos de ese enfoque; en consecuencia, se orientó hacia explicaciones alternativas ancladas en el modelo de procesamiento de la información. Las influencias teóricas específicas incluyen la psicología de los constructos personales de George Kelly y la terapia racional‑emotiva de Albert Ellis. Esta convergencia fue algo más que sumar etiquetas: aportó método (operacionalización, metas por sesión, tareas, medición) y un marco explicativo capaz de vincular datos, contexto y toma de decisiones clínicas. Entendida así, la TCC no renuncia al análisis del significado, pero lo desplaza a planos accesibles y actuales, trabajables con hipótesis observables y contrastables. En suma, la historia doctrinal ilumina su estilo práctico: claridad de objetivos, estructura por fases, instrumentos para medir cambio y una posición activa del terapeuta orientada a resultados clínicamente significativos.",
            },

            // Acordeón 2 — Viñetas del PDF (tercera generación y crítica a la TCC)
            {
              type: "accordion",
              header:
                "Terapias de tercera generación y discusión sobre componentes",
              open: false,
              text:
                "• En el contexto de críticas a la TCC (atribución de la efectividad al componente cognitivo vs. conductual; escaso anclaje en procesos psicológicos demostrados), surgen terapias de tercera generación o contextuales.  \n" +
                "• Se ubican en la década de 1990 y enfatizan el análisis funcional del comportamiento, la conducta verbal (Skinner, 1957) y las relaciones de equivalencia (Sidman, 1994).  \n" +
                "• Listado en el material: ACT (Aceptación y Compromiso), FAP (Psicoterapia Analítico‑Funcional), DBT (Terapia Dialéctico‑Conductual) y Activación Conductual (BA).  \n" +
                "• Hallazgo destacado: en depresión, un análisis de componentes mostró que la Activación Conductual, por sí sola, puede ser tan eficaz como la TCC ‘completa’, subrayando la importancia de pensar por funciones.",
            },

            // Párrafo 3 (≈300 palabras)
            {
              type: "paragraph",
              text: "El núcleo explicativo de la TCC que presenta el material es el modelo de procesamiento de la información. La hipótesis de trabajo es clara: los síntomas no derivan directamente de las experiencias, sino del modo sesgado en que se procesan, lo que genera interpretaciones distorsionadas y patrones conductuales desadaptativos. De ahí se desprende el objetivo clínico: modificar conductas y pensamientos disfuncionales mediante procedimientos estructurados y medibles. Lo distintivo de la TCC es el vínculo entre teoría y método: la influencia de la terapia conductual dotó a la práctica de un estilo operativo que incluye participación activa del terapeuta, operacionalización de procedimientos, establecimiento de metas para cada sesión, asignación sistemática de tareas entre sesiones y medición de variables y resultados. Estas características, que el material destaca de forma explícita, explican por qué la terapia cognitiva pronto se volvió sinónimo de terapia cognitivo‑conductual y por qué exige, para dominarla, conocimiento tanto de sus raíces conductuales como de su desarrollo cognitivo. En este marco, las modalidades breves que trabajaremos más adelante se comprenden como diseños que concentran la intervención en objetivos precisos, con trayectorias de cambio verificables en plazos acotados. Lo que las habilita no es la ‘prisa’, sino la precisión: un análisis funcional adecuado, hipótesis cognitivo‑conductuales bien formuladas, tareas pertinentes y un sistema de evaluación capaz de atribuir los cambios observados a las intervenciones aplicadas.",
            },

            // Video (apoyo didáctico)
            {
              type: "video",
              title:
                "¿Qué es la Terapia Cognitivo‑Conductual (TCC)? — Introducción breve",
              src: "https://www.youtube.com/watch?v=Xvu2tbspwcc",
              caption:
                "Video introductorio a la TCC (visión general, conceptos clave y ejemplos).",
              text: "",
            },
          ],

          /* Subtemas del Tema 1 */
          subthemes: [
            {
              id: "1.1",
              numbering: "1.1",
              title: "Antecedentes de la terapia cognitivo‑conductual",
              content: [
                // Párrafo 1 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "Para ubicar la terapia cognitivo‑conductual (TCC) en su contexto histórico conviene comenzar por su gestación y denominación. El material identifica a Aaron T. Beck como su fundador y precisa un consenso temporal: la propuesta emerge a finales de los años sesenta o inicios de los setenta; inicialmente la llamó ‘terapia cognitiva’ y con el tiempo se utilizó como sinónimo de ‘terapia cognitivo‑conductual’. Este dato no es menor: refleja la convergencia operativa entre procedimientos conductuales y un marco explicativo centrado en el procesamiento de la información. En su formación, Beck partió de la psicoterapia psicoanalítica, pero la evidencia empírica de sus propios estudios lo condujo a abandonar dicha explicación y a explorar alternativas. Entre las influencias que reconoce se encuentran la revolución cognitiva en psicología, la psicoterapia de los constructos personales de George Kelly y la terapia racional‑emotiva de Albert Ellis. A partir de ese cruce, el enfoque cognitivo formula una hipótesis central: los síntomas psicológicos no provienen directamente de la experiencia, sino del modo sesgado de procesarla, lo que produce interpretaciones distorsionadas. En consecuencia, la TCC se propone modificar conductas y pensamientos disfuncionales mediante procedimientos estructurados y observables. Esta síntesis histórico‑conceptual explica por qué el rótulo ‘cognitivo‑conductual’ ganó tracción: más que un cambio de nombre, hace visible la articulación entre teoría cognitiva y método conductual, y abre la puerta a una práctica terapéutica con metas claras, tareas entre sesiones y medición sistemática de resultados clínicos.",
                },

                // Párrafo 1 — Trazabilidad
                { type: "paragraph", text: " ", note: "fuente" },
                // (Citas al PDF para control académico)
                // El fundador, fechas y denominación; formación psicoanalítica y giro empírico; influencias y modelo de procesamiento; objetivo clínico.
                // :contentReference[oaicite:24]{index=24} :contentReference[oaicite:25]{index=25} :contentReference[oaicite:26]{index=26} :contentReference[oaicite:27]{index=27} :contentReference[oaicite:28]{index=28}

                // Párrafo 2 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "Los antecedentes inmediatos de la TCC se remontan a las terapias de primera generación, esto es, a la terapia conductual desarrollada a partir de la década de 1950. Al igual que la evolución posterior de Beck, este movimiento compartió un distanciamiento crítico del psicoanálisis: crecían las dudas sobre su eficacia y se evidenciaban inconsistencias entre sus postulados y los datos. La alternativa explicativa se buscó en la investigación experimental del aprendizaje, cristalizada en dos cuerpos teóricos: el condicionamiento clásico (pavloviano o respondiente) y el condicionamiento operante (skinneriano). La lógica clínica resultante fue directa: si los problemas psicológicos pueden caracterizarse como conductas aprendidas, entonces los mismos principios del aprendizaje pueden utilizarse para su modificación. En la práctica temprana se produjo una división de trabajo: por las diferencias en los tipos de conducta estudiados bajo cada paradigma, los procedimientos del condicionamiento clásico se aplicaron con mayor frecuencia a trastornos de tipo neurótico —por ejemplo, miedo o ansiedad—, mientras que los principios del condicionamiento operante se emplearon inicialmente en problemas del desarrollo infantil o en conductas simples de pacientes con psicosis grave. Este basamento conductual aportó a la psicoterapia un estilo de intervención verificable y replicable, que posteriormente facilitaría el encuentro con el enfoque cognitivo. Así, cuando la TCC se consolida, no parte de cero: hereda una tradición experimental y una gramática técnica que hacen posible traducir la teoría en procedimientos con criterios de uso, evaluación de resultados y aprendizaje para la práctica clínica cotidiana.",
                },

                // Párrafo 2 — Trazabilidad
                { type: "paragraph", text: " ", note: "fuente" },
                // (Citas al PDF)
                // Terapias de primera generación, investigación del aprendizaje y aplicaciones diferenciales de clásico/operante.
                // :contentReference[oaicite:29]{index=29} :contentReference[oaicite:30]{index=30} :contentReference[oaicite:31]{index=31}

                // Párrafo 3 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "El puente definitivo entre estos antecedentes conductuales y la terapia cognitiva se reconoce en la propia voz de Beck: si bien el armazón teórico de su propuesta se alejaba del psicoanálisis y ponía el acento en procesos intrapsíquicos accesibles, los **procedimientos** que la estructuraron se parecían a los de la terapia conductual. De ahí la relevancia del método: participación activa del terapeuta, operacionalización de los procedimientos, establecimiento de metas para cada sesión, asignación de tareas al paciente y medición de variables y resultados. Esta arquitectura operativa explica por qué la ‘terapia cognitiva’ devino rápidamente sinónimo de TCC y por qué el clínico que la practica necesita entender tanto las terapias conductuales previas como los desarrollos cognitivos posteriores. En términos formativos, reconocer esta genealogía ayuda a evitar dicotomías estériles (‘cognitivo’ vs. ‘conductual’) y a regresar a la lógica funcional: seleccionar procedimientos por su función en el caso, por la coherencia con los objetivos y por su capacidad de producir cambios clínicamente significativos. En suma, los antecedentes de la TCC no son un prólogo decorativo, sino la plataforma que habilita su modo de operar: una psicoterapia que pone a prueba hipótesis con datos, que alinea teoría y técnica y que somete sus resultados a verificación sistemática para aprender y mejorar la práctica.",
                },

                // Párrafo 3 — Trazabilidad
                { type: "paragraph", text: " ", note: "fuente" },
                // (Citas al PDF)
                // Procedimientos heredados; equivalencia práctica ‘terapia cognitiva’ ~ TCC; necesidad de conocer las terapias conductuales previas.
                // :contentReference[oaicite:32]{index=32} :contentReference[oaicite:33]{index=33} :contentReference[oaicite:34]{index=34}

                // Lista 1 — Complemento práctico (cronología y referencias básicas)
                {
                  type: "list",
                  style: "unordered",
                  items: [
                    "Finales de 1960 / inicios de 1970: consolidación de la propuesta de Beck; transición de ‘terapia cognitiva’ a ‘TCC’.",
                    "Influencias clave: George Kelly (constructos personales) y Albert Ellis (racional‑emotiva).",
                    "Herencia conductual: procedimientos estandarizados, metas por sesión, tareas y medición de resultados.",
                    "Idea‑fuerza cognitiva: sesgos en el procesamiento → interpretaciones distorsionadas → síntomas; foco en modificar conductas y pensamientos desadaptativos.",
                  ],
                  text: "",
                },

                // Imagen — Apoyo visual
                {
                  type: "image",
                  src: "https://kibbutzpsicologia.com/wp-content/uploads/desarrollos-terapeuticos-TCC.png",
                  caption:
                    "De los laboratorios de aprendizaje a la TCC: integración de teoría y método.",
                  alt: "Esquema conceptual sobre antecedentes de la TCC",
                  text: "",
                },

                // Lista 2 — Herramientas de estudio (para el alumno)
                {
                  type: "list",
                  style: "ordered",
                  items: [
                    "Elabora una línea de tiempo con autores, fechas y conceptos (conductual → cognitivo → TCC).",
                    "Relaciona técnicas con su función (exposición, activación, reestructuración) y define criterios de uso/contraindicación.",
                    "Construye un glosario operativo (condicionamiento clásico/operante; sesgos; procesamiento).",
                    "Asocia cada concepto a un ejemplo clínico breve verificable en sesión.",
                    "Prepara tres indicadores de resultado por intervención (síntoma, funcionamiento, adherencia).",
                  ],
                  text: "",
                },
              ],
            },
            {
              id: "1.2",
              numbering: "1.2",
              title: "Evolución y nuevas formulaciones teóricas",
              content: [
                // Párrafo 1 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "La terapia cognitivo‑conductual (TCC) se expandió globalmente por un doble atributo: eficacia y eficiencia. Eficacia, por la amplitud de trastornos en los que acumula evidencia; eficiencia, por su diseño estructurado y de corto plazo, con metas claras y medición sistemática del progreso. Esta doble característica abrió paso a desarrollos orientados a optimizar tiempos, adherencia y transferencia: los modelos breves. En la práctica clínica y en programas de salud, estos modelos acotan el número de sesiones, priorizan objetivos conductuales bien definidos, operan con tareas inter‑sesión precisas y usan indicadores de resultado por fase (síntoma, funcionamiento, recaída). No obstante, el crecimiento de la TCC también trajo preguntas legítimas sobre ‘qué’ produce el cambio: ¿el componente cognitivo, el conductual, su interacción, o procesos comunes? Además, se señaló la necesidad de explicitar los procesos psicológicos (derivados del laboratorio) que subyacen a los procedimientos clínicos. Estas observaciones no niegan la efectividad; la afinan. En respuesta, el campo adoptó diseños de investigación más analíticos (p. ej., estudios de componentes), guías de práctica basadas en evidencia y una lectura más funcional de las técnicas. Desde el punto de vista formativo, la lección es nítida: los procedimientos no se aplican por rótulo sino por función en el caso, con criterios de indicación y límites operativos. En suma, la ‘evolución’ no supone abandonar la TCC, sino depurar sus supuestos y alinear cada decisión terapéutica con procesos verificables y resultados clínicamente significativos dentro de marcos breves y medibles.",
                },

                // Acordeón 1 — Líneas de evolución (mapa rápido)
                {
                  type: "accordion",
                  header: "Líneas de evolución de la TCC (mapa rápido)",
                  open: false,
                  text:
                    "• Manualización rigurosa → sesiones estructuradas, metas y tareas.  \n" +
                    "• Modelos breves → reducción de 12–20 sesiones a ciclos acotados (p. ej., 4–8) cuando la indicación lo permite.  \n" +
                    "• Integración funcional → selección de técnicas por función, no por escuela.  \n" +
                    "• Modularidad y enfoque transdiagnóstico → intervención sobre procesos comunes.  \n" +
                    "• Medición basada en resultados (MBC) → decisiones clínicas informadas por datos.  \n" +
                    "• Implementación digital/híbrida → psicoeducación, tareas y seguimiento asincrónico.",
                },

                // Párrafo 2 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "Las críticas más fértiles a la TCC actuaron como palanca de innovación. Por un lado, persistió la duda sobre la contribución relativa de los componentes cognitivos y conductuales; por otro, se reclamó mayor anclaje en procesos psicológicos demostrados experimentalmente. En ese contexto aparecieron —y se consolidaron— propuestas denominadas ‘terapias de tercera generación’ o ‘contextuales’, que reafirman el análisis funcional del comportamiento e integran avances sobre conducta verbal y aprendizaje relacional. Entre ellas destacan la Terapia de Aceptación y Compromiso (ACT), la Psicoterapia Analítico‑Funcional (FAP), la Terapia Dialéctico‑Conductual (DBT) y la Activación Conductual (BA). Esta última es especialmente ilustrativa para la discusión: a partir de análisis de componentes en depresión se observó que la activación, por sí sola, podía igualar los resultados de la TCC completa, subrayando el peso del componente conductual cuando se trabaja con objetivos, tareas y contacto sistemático con contingencias reforzantes. El mensaje pedagógico no es ‘abandonar lo cognitivo’, sino pensar en términos de funciones y procesos: qué mantiene el problema, qué procedimientos lo impactan de forma más parsimoniosa y cómo demostramos el cambio. Así, la evolución contemporánea promueve decisiones clínicas basadas en hipótesis operativas, con criterios de indicación, contraindicaciones explícitas y evaluación continua, manteniendo el formato breve cuando el caso, el contexto y la adherencia lo permiten.",
                },

                // Acordeón 2 — Implicaciones didácticas y clínicas
                {
                  type: "accordion",
                  header:
                    "Implicaciones para la formación y la práctica clínica",
                  open: false,
                  text:
                    "• Pensar por procesos: formulación funcional + hipótesis cognitivo‑conductuales.  \n" +
                    "• Selección de técnicas minimalista: lo necesario, no todo lo disponible.  \n" +
                    "• Marcadores de progreso: define 2–3 indicadores por objetivo (síntoma, funcionamiento, adherencia).  \n" +
                    "• Diseño breve: metas por sesión, tareas con criterios de éxito, prevención de recaídas desde la sesión 1.  \n" +
                    "• Riesgos a vigilar: ritualización técnica, exceso de psicoeducación, tareas sin función, medición sin decisiones.",
                },

                // Párrafo 3 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "En la última década, la conversación se ha desplazado de ‘protocolos para trastornos’ hacia marcos centrados en procesos (process‑based therapy) y abordajes transdiagnóstico‑modulares. El argumento es pragmático: si múltiples problemas comparten procesos mantenedores (p. ej., evitación, desregulación atencional, patrones verbales rígidos), entonces conviene intervenir sobre esos procesos con módulos seleccionados y secuenciados según función y datos de progreso. Este viraje —compatible con la TCC— convive con otras tendencias que refuerzan su carácter breve y medible: medición basada en resultados (MBC) en cada sesión, uso de instrumentos ultrabreves para decisión clínica, tareas escalonadas con soporte digital (psicoeducación, diarios, activación), y una mayor personalización por objetivos y barreras específicas de adherencia. En paralelo, la expansión de formatos tele y combinados exige cuidar dos puntos: i) preservar la densidad técnica de cada sesión (foco, práctica, feedback), y ii) sostener la estructura de trabajo (agenda, tareas, revisión de datos) para que la brevedad no derive en superficialidad. De cara a la formación, esto implica aprender a formular por procesos, dominar un set acotado de procedimientos potentes (exposición/prevención, activación, reestructuración, habilidades de regulación) y tomar decisiones informadas por datos. La ‘nueva’ TCC no rompe con sus cimientos: los hace más explícitos, modulables y trazables, manteniendo la coherencia entre teoría, técnica, caso y resultados.",
                },
              ],
            },
          ],
        },

        /* TEMA 2 */
        {
          id: "1.T2",
          numbering: "Tema 2",
          title: "Modelos conductuales",
          content: [
            {
              type: "paragraph",
              text: "El estudio de los modelos conductuales emerge en la clínica a mediados del siglo XX impulsado por dos fuerzas convergentes: el cuestionamiento creciente a la eficacia del psicoanálisis —hasta entonces hegemónico— y la transferencia a problemas aplicados de los principios derivados de la investigación experimental del aprendizaje. En este marco se consolida la denominada ‘terapia conductual de primera generación’, cuyo representante más influyente es Joseph Wolpe. Su propuesta psicoterapéutica se nutre explícitamente de la teoría del aprendizaje —Pavlov, Thorndike, Watson, Hull, Skinner— y plantea que los trastornos clínicamente relevantes pueden comprenderse y modificarse si se analizan las contingencias que los mantienen. Dos rasgos definitorios atraviesan este enfoque: 1) un ambientalismo riguroso que subraya el papel de las condiciones del entorno (contingencias) en el origen y el cambio de la conducta, frente a explicaciones intrapsíquicas; y 2) un énfasis metodológico en la verificación empírica de la eficacia de los procedimientos, que desemboca en prácticas sistemáticas de evaluación de resultados y aporta bases a la psicología basada en evidencia. Esta doble apuesta —teórica y metodológica— explica la rápida expansión del enfoque y su persistente influencia sobre las terapias de segunda (cognitivo‑conductual) y tercera generación (contextuales). Así, el Tema 2 ofrece al estudiante un mapa de los cimientos conductuales sobre los que se edifica la psicoterapia cognitivo‑conductual breve: de los mecanismos básicos del condicionamiento a los procedimientos de intervención que se derivan, siempre con la mira puesta en el análisis funcional de la conducta, la medición de cambio y el entrenamiento de habilidades observables relevantes para el bienestar del paciente.",
            },
            {
              type: "paragraph",
              text: "El primer pilar es el condicionamiento clásico, cuyo descubrimiento se atribuye a Pavlov en el contexto de la fisiología de la digestión. En términos conductuales, se trata del proceso por el cual un estímulo inicialmente neutro (estímulo condicional, EC) adquiere la capacidad de provocar una respuesta semejante a la que produce un estímulo biológicamente eficaz (estímulo incondicional, EI), estableciéndose la respuesta condicional (RC) análoga a la respuesta incondicional (RI). Procedimentalmente, el rasgo distintivo es la contingencia estímulo‑estímulo (EC→EI): la ocurrencia del EI depende de la presentación del EC y es independiente de la actividad del organismo. De este proceso derivan principios centrales para la clínica: la generalización (aparición de RC ante estímulos semejantes al EC), la discriminación (restricción de la RC a rasgos específicos del EC) y la extinción (debilitamiento de la RC cuando el EC deja de acompañarse del EI). La historia de la psicología aplicada ofrece ejemplos canónicos: el condicionamiento del miedo en el ‘pequeño Albert’ (contingencias aversivas que generan respuestas emocionales) y los trabajos de Mary Cover Jones sobre eliminación de miedos mediante reacondicionamiento —introduciendo respuestas incompatibles con el miedo en presencia graduada del estímulo temido— y modelado social. En términos terapéuticos, estos hallazgos sustentan técnicas como la exposición con prevención de respuesta, la desensibilización y el manejo de señales y contextos que disparan respuestas emocionales.",
            },
            {
              type: "paragraph",
              text: "El segundo pilar es el condicionamiento operante, formulado por Skinner, que explica cómo la probabilidad de emisión de una conducta aumenta o disminuye en función de sus consecuencias. Una respuesta operante (R) se fortalece si produce un reforzador (Er), ya sea por introducción/aumento de estimulación (reforzamiento positivo) o por retirada/disminución de estimulación aversiva (reforzamiento negativo: escape o evitación). Esta relación se formaliza en la triple contingencia ED‑R‑ER (modelo ABC en clínica): en presencia de un estímulo discriminativo (ED) una respuesta tiene historia de ser seguida por una consecuencia reforzante; por el contrario, ante estímulos delta la misma respuesta no es reforzada. El castigo designa consecuencias que reducen la probabilidad de la conducta (positivo o negativo, según el cambio ambiental), aunque su uso clínico exige cautela. Dos operaciones resultan clave para el cambio terapéutico: el moldeamiento (reforzamiento diferencial de aproximaciones sucesivas hacia la conducta objetivo) y la inducción de la respuesta por modelado e instrucciones, especialmente en habilidades sociales y lenguaje. Además, la articulación entre procesos respondientes y operantes —por ejemplo, el control indirecto de respuestas viscerales mediante operantes que alteran la estimulación antecedente— y el papel del lenguaje (condicionamiento de segundo orden, generalización semántica) explican por qué la intervención conductual se combina fructíferamente con procedimientos cognitivos y por qué el aprendizaje observacional (Bandura) y la exposición guiada muestran tanta utilidad clínica.",
            },
          ],

          /* Subtemas del Tema 2 */
          subthemes: [
            {
              id: "2.1",
              numbering: "2.1",
              title: "Desarrollo histórico",
              content: [
                // Párrafo 1 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "El desarrollo de la terapia conductual en el ámbito clínico no fue un accidente aislado, sino la convergencia de dos fuerzas históricas muy claras. Por un lado, a partir de mediados del siglo XX se acentuó el cuestionamiento a la eficacia del psicoanálisis, hegemónico en la práctica clínica, tanto por la dificultad para verificar empíricamente sus postulados como por la ausencia de resultados consistentes en distintos cuadros. Por otro lado, la investigación del aprendizaje —en particular los principios del condicionamiento clásico y del condicionamiento operante— comenzó a trasladarse a dominios aplicados, entre ellos la clínica, aportando un lenguaje experimental y una metodología de intervención reproducible. El giro fue metodológico y programático: si los problemas psicológicos pueden describirse en términos de conducta aprendida y mantenida por contingencias específicas, entonces el cambio terapéutico debe intentar alterar esas contingencias de manera planificada y medible. Esta nueva orientación empujó a la psicoterapia hacia diseños más estructurados, con metas por sesión, procedimientos definidos y registro sistemático de resultados. En síntesis, la terapia conductual emergió como respuesta a la necesidad de eficacia demostrable y a la oportunidad de apropiarse, con criterio clínico, de leyes del aprendizaje validadas en laboratorio. Esa es la base histórica sobre la que se edifica la posterior integración cognitivo‑conductual y, más adelante, las formulaciones contextuales y basadas en procesos.",
                },

                // Acordeón 1 — Hitos del desarrollo
                {
                  type: "accordion",
                  header:
                    "Hitos clave (1950–1960): de la crítica al psicoanálisis a la clínica basada en aprendizaje",
                  open: false,
                  text:
                    "• Cuestionamientos a la eficacia del psicoanálisis en práctica clínica.  \n" +
                    "• Traslado de principios del condicionamiento clásico y operante a contextos aplicados (incluida la clínica).  \n" +
                    "• Consolidación de un enfoque estructurado: metas por sesión, procedimientos definidos y medición de resultados.  \n" +
                    "• Preparación del terreno para la integración cognitivo‑conductual posterior.",
                },

                // Párrafo 2 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "Entre los protagonistas de este viraje destaca el psiquiatra Joseph P. Wolpe, a menudo citado como representante paradigmático de la ‘primera generación’ de terapias conductuales. Su obra ‘Psicoterapia por inhibición recíproca’ (1958/1998) expone una postura nítida: la teoría de la neurosis y los métodos terapéuticos deben derivar de la teoría moderna del aprendizaje. La propia autobiografía intelectual de Wolpe ilustra el desplazamiento: partiendo de una adhesión al freudismo, pasó a revisar críticamente la universalidad de la teoría del Edipo y terminó orientándose a los hallazgos de Pavlov y, después, a Hull y los estudios de neurosis experimental, donde encontró claves procedimentales para innovar en psicoterapia. Más allá de la anécdota, lo decisivo es el método que propone: operacionalización de técnicas, selección de procedimientos por su función, uso de respuestas incompatibles con la ansiedad (inhibición recíproca), jerarquización de estímulos y práctica sistemática, todo ello bajo criterios explícitos de evaluación del cambio. Este énfasis en procedimientos replicables y en resultados observables posicionó a la terapia conductual como alternativa clínica con pretensión empírica y abrió el espacio para su encuentro con el enfoque cognitivo. Así, la historia no solo relata autores y fechas; explica por qué la clínica conductual introdujo estándares de verificación que hoy forman parte del ADN de la psicoterapia basada en evidencia: medir, comparar, ajustar y aprender de los datos del caso.",
                },

                // Acordeón 2 — Implicaciones clínicas y metodológicas
                {
                  type: "accordion",
                  header:
                    "Implicaciones metodológicas que dejó la ‘primera generación’",
                  open: false,
                  text:
                    "• Selección de técnicas por función (análisis de contingencias) y no por escuela.  \n" +
                    "• Estructura de trabajo: agenda, metas por sesión, tareas inter‑sesión y revisión de datos.  \n" +
                    "• Estándares de verificación: definición de indicadores y comparación pre‑/post‑intervención.  \n" +
                    "• Base para la integración posterior con lo cognitivo y para marcos breves, transdiagnóstico y basados en procesos.",
                },

                // Párrafo 3 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "Comprender este desarrollo histórico permite situar a la psicoterapia breve cognitivo‑conductual en su genealogía correcta. La terapia conductual aportó un suelo experimental y una gramática técnica orientada a la eficacia y la eficiencia: evaluar funciones de conducta, intervenir sobre contingencias específicas y demostrar cambios con criterios observables. Ese suelo, a su vez, facilitó la integración con el enfoque cognitivo, dando lugar a la TCC como práctica organizada por metas, tareas y medición. En la formación del clínico, esta secuencia histórica se traduce en competencias concretas: distinguir entre procedimientos por su función (no por su etiqueta), formular hipótesis contrastables, seleccionar la intervención más parsimoniosa y sostener una toma de decisiones informada por datos en cada fase del tratamiento. De ahí que el estudio del ‘origen conductual’ no sea un capítulo decorativo del temario, sino una plataforma conceptual y metodológica para el trabajo breve en TCC: cuanto más claro es el vínculo entre proceso mantenedor y técnica de intervención, más probable es lograr cambios clínicamente significativos en menos sesiones. Finalmente, este legado explica por qué las corrientes contextuales y basadas en procesos no rompen con la tradición, sino que la continúan: mantienen el foco funcional, refinan la selección de técnicas y preservan la cultura de medir y aprender sistemáticamente de los resultados clínicos.",
                },

                // Video (apoyo didáctico)
                {
                  type: "video",
                  title:
                    "Historia de la terapia conductual y su influencia en la TCC",
                  src: "https://www.youtube.com/watch?v=vyY2YZzMwBk",
                  caption:
                    "Panorama histórico y metodológico: de la terapia conductual a la integración cognitivo‑conductual.",
                  text: "",
                },
              ],
            },
            {
              id: "2.2",
              numbering: "2.2",
              title: "El condicionamiento clásico",
              content: [
                // Párrafo 1 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "El condicionamiento clásico describe cómo un estímulo inicialmente neutro puede adquirir la capacidad de provocar una respuesta al asociarse con un estímulo biológicamente eficaz. En este marco, el estímulo incondicional (EI) provoca una respuesta incondicional (RI) sin aprendizaje previo; tras pareamientos contingentes, el estímulo antes neutro se transforma en estímulo condicional (EC) y llega a eliciar una respuesta condicional (RC) semejante a la RI. Procedimentalmente, la clave es la contingencia estímulo‑estímulo (E‑E): la ocurrencia del EI depende de la presentación del EC, y —a diferencia del condicionamiento operante— es independiente de la actividad del organismo. Esta lógica permite explicar la emergencia de respuestas emocionales condicionadas y su generalización a estímulos físicamente semejantes al EC. Un ejemplo histórico es el estudio de Watson y Rayner con el ‘pequeño Albert’, donde un ruido estruendoso (EI) generaba miedo (RI), y, tras el apareamiento con una rata blanca (EC), la presencia de la rata llegó a provocar una RC de miedo; además, Albert mostró respuestas ante otros estímulos blancos (conejo, máscara, cabello canoso), ilustrando la generalización. En sentido opuesto, la discriminación restringe la RC a rasgos específicos del EC, y la extinción debilita la RC cuando el EC se presenta repetidamente sin el EI. Comprender con precisión estos elementos (EC, EI, RC, RI) y principios (contingencia E‑E, generalización, discriminación y extinción) es esencial para traducirlos a procedimientos clínicos rigurosos en terapia cognitivo‑conductual breve.",
                },

                // Lista 1 — Conceptos y principios (síntesis operativa)
                {
                  type: "list",
                  style: "unordered",
                  items: [
                    "Elementos: EI → RI; EC → RC (tras condicionamiento).",
                    "Contingencia E‑E: el EI ocurre condicionado a la presentación del EC; independencia de la actividad del organismo.",
                    "Principios: generalización (RC ante estímulos semejantes al EC), discriminación (RC restringida a rasgos del EC) y extinción (debilitamiento de la RC cuando EC se presenta sin EI).",
                  ],
                  text: "",
                },

                // Párrafo 2 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "En términos procedimentales, el condicionamiento clásico se establece exponiendo al organismo a pareamientos EC→EI hasta que la respuesta condicional emerge ante el EC. Factores como el modo de presentar EC y EI, su intensidad y el número/distribución de ensayos influyen en la velocidad y estabilidad del reflejo condicional. Una vez formado, la RC no se limita al EC ‘original’: puede generalizarse en función de la semejanza física con el EC, lo que clínicamente explica la ampliación de miedos hacia estímulos de apariencia similar. La cara complementaria es la discriminación: a través de experiencias diferenciales, la RC se restringe a rasgos del EC (p. ej., ‘blancura’ en el caso Albert), lo que permite diseñar entrenamientos para delimitar disparadores relevantes. Cuando el EC deja de acompañarse del EI, la RC se debilita (extinción), principio central para la exposición terapéutica. La literatura temprana sobre eliminación de miedos, impulsada por Mary Cover Jones, evaluó procedimientos como el desuso, la organización verbal, la extinción, el modelado social y el reacondicionamiento (condicionar respuestas incompatibles con el miedo mientras se expone gradualmente al EC); este último mostró ser el más eficaz. Estas observaciones históricas anclan prácticas contemporáneas: si una respuesta emocional es condicionable, también es modificable al alterar sistemáticamente las contingencias que la mantienen. Por ello, el clínico formulará hipótesis claras sobre qué estímulos funcionan como EC, qué señales acompañan al EI y cómo se observa la RC, para elegir entre exposición graduada, modelado, contracondicionamiento o combinaciones estratégicas dentro de programas breves.",
                },

                // Imagen — Apoyo visual
                {
                  type: "image",
                  src: "https://static.docsity.com/documents_first_pages/2024/04/05/912eb965cfd29e8619c04079f48f3ac4.png",
                  caption:
                    "Esquema del condicionamiento clásico: de EC+EI a la RC y sus moduladores.",
                  alt: "Diagrama conceptual con EC, EI, RC, RI, generalización, discriminación y extinción",
                  text: "",
                },

                // Párrafo 3 (≈300 palabras)
                {
                  type: "paragraph",
                  text: "La utilidad clínica del condicionamiento clásico en TCC breve reside en convertir estos principios en decisiones concretas. Primero, el mapa funcional: identificar EC (situaciones, objetos, señales internas), las condiciones en que solían aparecer con el EI (contingencia E‑E) y la topografía de la RC (conductual, fisiológica, verbal). Segundo, el diseño de intervención: si el objetivo es debilitar la RC, la exposición sistemática al EC sin EI —con suficiente duración, repetición y variabilidad— promueve extinción y nuevas asociaciones inhibitorias; si se requieren ganancias más rápidas o mayor tolerabilidad, se añade contracondicionamiento (respuestas incompatibles con el miedo) y modelado. Tercero, el control de generalización/discriminación: variar estímulos y contextos para que el aprendizaje se traslade fuera de la sesión, e introducir ensayos de discriminación para que el paciente detecte señales críticas y reduzca falsas alarmas. Cuarto, la medición: registrar intensidad/frecuencia de RC, latencia, evitación y recuperación espontánea para ajustar dosis y progresión. Finalmente, una cautela metodológica: porque la contingencia EC‑EI es independiente de la actividad del organismo, conviene no confundir mejoras por cambios operantes (consecuencias) con modificaciones respondientes; en la práctica, ambos procesos coexisten, de modo que el plan terapéutico integra intervención sobre disparadores (clásico) y sobre consecuencias/evitación (operante) para consolidar cambios clínicamente significativos en menos sesiones.",
                },

                // Lista 2 — Pautas y ejemplos clínicos (complemento)
                {
                  type: "list",
                  style: "ordered",
                  items: [
                    "Construye jerarquías de exposición por familias de EC (propiedades físicas y contextos).",
                    "Mezcla ensayos: intra‑sesión (prolongados) y entre‑sesiones (de tarea) para sostener extinción.",
                    "Incluye contracondicionamiento: respiración diafragmática, relajación aplicada, habilidades de afrontamiento durante EC.",
                    "Entrena discriminación de señales: identifica ‘rasgos críticos’ del EC para reducir falsas generalizaciones.",
                    "Monitorea recuperación espontánea y renovación contextual; planifica sesiones de repaso en contextos distintos.",
                  ],
                  text: "",
                },
              ],
            },
            {
              id: "2.3",
              numbering: "2.3",
              title: "El modelado o aprendizaje observacional",
              content: [
                {
                  type: "paragraph",
                  text: "El modelado, también denominado aprendizaje observacional, se integra en la lógica del condicionamiento operante como un procedimiento de instigación de la conducta que facilita el moldeamiento. A diferencia de una mera descripción verbal, en el modelado el terapeuta o un tercero ejecuta la conducta objetivo, aumentando la probabilidad de que el paciente la imite; cuando la imitación ocurre, se refuerza sistemáticamente para consolidar su frecuencia y calidad. Esta dinámica —demostración, imitación, refuerzo— permite acelerar la adquisición de repertorios que, de otro modo, requerirían numerosos pasos de aproximaciones sucesivas. En la práctica clínica, el modelado se emplea para habilidades sociales, estrategias de afrontamiento, conductas de autocuidado y respuestas específicas dentro de exposiciones conductuales. La propuesta se articula con otras dos vías humanas de instigación: el uso de instrucciones y el uso de reglas, que, cuando son comprendidas por el paciente, también favorecen la emisión inicial de la respuesta a moldear. En suma, el modelado opera como un catalizador dentro de programas de reforzamiento diferencial, reduciendo la ambigüedad funcional de la situación, proporcionando un patrón motor y verbal claro y acotando la variabilidad conductual inicial, todo ello sin abandonar la estructura de metas, tareas y medición característica de las terapias conductuales y cognitivas.",
                },
                {
                  type: "paragraph",
                  text: "El encuadre funcional del modelado exige ubicarlo en la relación entre conducta operante y sus consecuencias. La emisión de la conducta por parte del modelo funciona como estímulo que instaura condiciones para que el observador emita una respuesta semejante; el criterio de éxito no es la ‘belleza’ del ejemplo, sino el efecto que produce sobre la probabilidad de la conducta imitada cuando se entregan consecuencias reforzantes, positivas o negativas, según corresponda al análisis funcional. En contextos clínicos, la secuencia típica es: (1) análisis ABC de la conducta objetivo; (2) selección de un modelo competente y pertinente al caso; (3) demostración explícita con atención a estímulos discriminativos relevantes; (4) ensayo guiado de la persona; (5) reforzamiento diferencial de la aproximación y corrección de errores; (6) programación de práctica entre sesiones. Esta secuencia se complementa con instrucciones claras, que pueden ‘disparar’ la conducta en ausencia del modelo físico cuando el paciente domina el lenguaje de la tarea. El alcance del modelado va de conductas motoras simples hasta habilidades sociales complejas, siempre y cuando se conserven criterios observables y se definan reforzadores eficaces para esa persona.",
                },
                {
                  type: "paragraph",
                  text: "Comprender el modelado también exige considerar su articulación con respuestas respondientes (emocionales) y su manejo clínico. Aunque la contracción visceral o la activación autonómica no son directamente ‘voluntarias’, pueden modularse de modo indirecto mediante operantes: por ejemplo, dirigiendo la conducta de atención o respiración hacia estímulos que reducen la activación. En la consulta, el terapeuta modela no solo topografías motoras, sino también micro‑operantes verbales (autoinstrucciones) que, a través del lenguaje, adquieren control sobre respuestas respondientes —como demuestra la posibilidad de generar condicionamientos con palabras y, a la vez, usarlas para mediar el cambio—. De este modo, el modelado no se limita a ‘enseñar movimientos’; organiza contextos discriminativos, reglas e historias de reforzamiento que hacen más probable la conducta clínica objetivo y extinguen patrones desadaptativos. La clave es mantener la medición de resultados y el ajuste de las contingencias sesión a sesión, asegurando generalización y mantenimiento en ambientes naturales.",
                },

                {
                  type: "accordion",
                  header: "Modelado dentro del moldeamiento operante",
                  open: false,
                  items: [
                    {
                      title: "Función",
                      text: "El modelado insta la conducta esperada mostrando su ejecución; la imitación que siga se refuerza para aumentar su probabilidad.",
                    },
                    {
                      title: "Vías complementarias",
                      text: "Además de modelar, las instrucciones verbales pueden instigar la primera emisión de la conducta cuando el paciente comprende el lenguaje de la tarea.",
                    },
                    {
                      title: "Amplitud de aplicación",
                      text: "El procedimiento abarca desde movimientos simples hasta habilidades sociales complejas, integrándose a programas de reforzamiento diferencial y práctica guiada.",
                    },
                  ],
                },

                {
                  type: "accordion",
                  header:
                    "Articulación con conductas respondientes y el lenguaje",
                  open: false,
                  items: [
                    {
                      title: "Control indirecto",
                      text: "Las operantes pueden modular respuestas ‘involuntarias’ dirigiendo la acción hacia estímulos que alteran estados viscerales (p. ej., atención, respiración).",
                    },
                    {
                      title: "Palabra como estímulo",
                      text: "El lenguaje forma parte del repertorio operante y puede adquirir control sobre respuestas respondientes; usar palabras adecuadas permite disparar o atenuar reacciones.",
                    },
                    {
                      title: "Implicación clínica",
                      text: "Modelar micro‑operantes verbales (autoinstrucciones) y conductas visibles potencia la exposición, el afrontamiento y la generalización de nuevas respuestas.",
                    },
                  ],
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
          href: "https://www.youtube.com/watch?v=7QnYoFCbiO4&ab_channel=enGramaPsico%CE%A8", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "APRENDIZAJE NO ASOCIATIVO y CONDICIONAMIENTO CLÁSICO ~ Santiago Benjumea https://www.youtube.com/watch?v=GkH6pBdy5RM&ab_channel=enGramaPsico%CE%A8",
            "CONDICIONAMIENTO OPERANTE ~ Santiago Benjumea https://www.youtube.com/watch?v=7QnYoFCbiO4&ab_channel=enGramaPsico%CE%A8",
            "Baum, W. (1994). Para entender el conductismo (PDF) https://conductitlan.org.mx/03_seminariosporjaimevargas/Nueva%20carpeta/2.%20para_entender_el_conductismo_william_baum_1994.pdf",
            "Skinner, B. F. Sobre el conductismo https://www.conducteam.com/recursos-libros/sobre-el-conductismo/",
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
            "Beck, A. (2005). The Current State of Cognitive Therapy. A 40‑Year Retrospective. Arch Gen Psychiatry, 62, 953–959.",
            "Beck, J. (2011). Cognitive behavior therapy. Basics and beyond. The Guilford Press.",
            "Cully, J., Dawson, D., Hamer, J. & Tharp, A. (2021). A provider’s guide to brief cognitive behavioral therapy. Department of Veterans Affairs South Central MIRECC.",
            "Froxán, M. (2020). Análisis funcional de la conducta humana. Concepto, metodología y aplicaciones. Pirámide.",
            "Maier, N. R. & Schneirla, T. C. (1935/1964). Principles of animal psychology. Dover Publications.",
            "Pavlov, I. (1928). Lectures on conditioned reflexes. Twenty‑five years of objective study of the higher nervous activity (behavior) of animals. Volume one. International Publishers.",
            "Pérez, M. (2014). Las terapias de tercera generación como terapias contextuales. Síntesis.",
            "Riess, B. F. (1946). Genetic changes in semantic conditioning. Journal of Experimental Psychology, 36(2), 143–152. https://doi.org/10.1037/h0060465",
            "Ross, A. (1974). Psychological disorders of children. A behavioral approach to theory, research, and therapy. McGraw‑Hill.",
            "Sidman, M. (1994). Equivalence relations and behavior: A research story. Authors Cooperative.",
            "Skinner, B. F. (1938). The behavior of organisms. An experimental analysis. Appleton‑Century‑Crofts.",
            "Skinner, B. F. (1957). Verbal Behavior. Prentice‑Hall.",
            "Watson, J. B. (1924/1961). El conductismo. Paidos.",
            "Watson, J. B. & Rayner, R. (1920). Conditioned emotional reactions. Journal of Experimental Psychology, 3(1), 1–14.",
            "Wolpe, J. (1958/1998). Psicoterapia por inhibición recíproca (2.ª ed.). Desclée de Brouwer.",
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
