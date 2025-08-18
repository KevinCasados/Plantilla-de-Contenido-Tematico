/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MPCL", // Maestría en Psicología Clínica
  courseId: "MPCL-PBCC", // Psicoterapia breve cognitivo-conductual
  id: "MPCL-PBCC-mod3", // ID único del módulo 3

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Psicoterapia breve cognitivo-conductual",
  title: "Módulo 3. Terapia racional-emotiva (RET) de Ellis",
  semestre: "4° semestre",
  teacher: "Mtro. Iván López Ortiz",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar el modelo ABC de la terapia racional-emotiva de Ellis y su aplicación en las diferentes fases del proceso terapéutico.",
  competencies: [
    "Identifica la estructura general de la terapia racional-emotiva con la finalidad de identificar su impacto en la terapia cognitiva de Beck.",
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

    /* Unidad (según el PDF: “Terapia cognitiva”) */
    {
      id: "2",
      numbering: "Unidad 2",
      title: "Terapia cognitiva", // Encabezado de la ficha del material
      content: [
        // Párrafo 1 (~200 palabras)
        {
          type: "paragraph",
          text: "Esta unidad presenta los fundamentos, alcances y criterios de calidad de la terapia cognitiva en su sentido clínico estricto y en su integración con procedimientos conductuales. Partimos de una premisa operativa: las emociones y conductas no dependen únicamente de los hechos, sino de las interpretaciones que el individuo realiza sobre esos hechos. La intervención, por tanto, se centra en identificar y modificar patrones de pensamiento que sesgan la lectura del contexto, al tiempo que se diseñan experiencias conductuales que pongan a prueba nuevas hipótesis de forma verificable. A diferencia de aproximaciones inespecíficas, la terapia cognitiva que estudiarás aquí es breve, estructurada y gobernada por datos: cada sesión cuenta con agenda, metas y tareas entre sesiones, y los avances se monitorizan con indicadores sensibles al cambio. El foco no es “pensar positivo”, sino alinear teoría, evaluación y procedimiento para alterar funciones psicológicas mantenedoras del problema. Verás cómo se formula un caso, cómo se seleccionan técnicas por su función y cómo se documentan decisiones y resultados con estándares que aseguren replicabilidad, relevancia clínica y generalización de logros a contextos naturales.",
        },

        // Párrafo 2 (~200 palabras)
        {
          type: "paragraph",
          text: "Conceptualmente, trabajaremos con el modelo cognitivo que vincula situación, pensamiento, emoción y conducta, y con su articulación funcional con contingencias ambientales. En la práctica terapéutica, esto se traduce en dos líneas convergentes: (1) reestructuración cognitiva guiada, donde se identifican pensamientos automáticos, se examinan evidencias y se generan alternativas más ajustadas; y (2) experimentos conductuales, diseñados para contrastar predicciones del paciente con datos reales. El objetivo no es ganar debates abstractos, sino producir aprendizajes nuevos que reduzcan la evitación, amplíen repertorios de afrontamiento y modifiquen el significado de estímulos previamente amenazantes. La unidad te mostrará cómo convertir hipótesis en protocolos breves: elección de objetivos observables, tareas progresivas con criterios de maestría, y revisión de datos sesión a sesión. También revisarás el papel de la relación terapéutica como contexto de aprendizaje: colaboración estructurada, feedback inmediato y refuerzo contingente del esfuerzo. Con este andamiaje, “lo cognitivo” y “lo conductual” dejan de competir y se integran para aumentar la probabilidad de respuestas objetivo y asegurar que el cambio observado sea atribuible a manipulaciones identificables y replicables.",
        },

        // Párrafo 3 (~200 palabras)
        {
          type: "paragraph",
          text: "Metodológicamente, la unidad enfatiza la formulación funcional del caso. Antes de intervenir, se delimita la topografía del problema (morfología, frecuencia, duración, latencia), se identifican disparadores y consecuencias relevantes, y se mapean los sesgos cognitivos que sostienen interpretaciones desadaptativas. Este mapa permite seleccionar procedimientos con criterio: recondicionamiento cuando predomina ansiedad condicionada; arreglos operantes (reforzamiento diferencial, extinción, moldeamiento) cuando hay excesos o déficits conductuales; y herramientas cognitivas (autoinstrucciones, guías de afrontamiento, discusión socrática) para orientar la atención, organizar la práctica y consolidar nuevas reglas útiles. La toma de decisiones se documenta tecnológicamente (qué hacemos, con qué parámetros, bajo qué condiciones) y se conecta con los principios que la sustentan, evitando colecciones eclécticas de técnicas sin función. A nivel de seguimiento, la medición basada en resultados exige indicadores claros por objetivo y fase (síntoma, funcionamiento, adherencia), además de estrategias para generalización (variar contextos y estímulos) y mantenimiento (repasos espaciados).",
        },

        // Párrafo 4 (~200 palabras)
        {
          type: "paragraph",
          text: "Organizaremos el aprendizaje en ciclos breves y repetibles: agenda de sesión, revisión de tareas y datos, intervención guiada en vivo, planificación de nuevas tareas y retroalimentación. La agenda no es decorativa; estructura el foco y protege el tiempo para la práctica, especialmente cuando se realizan experimentos conductuales o ejercicios de reestructuración. Las tareas entre sesiones se formulan con criterios de éxito observables (qué, cuánto, cuándo, con qué recursos) y se enlazan a las metas del caso. Para optimizar adherencia y eficiencia, se gradúa la dificultad, se prevén barreras y se acuerdan reforzadores naturales. La retroalimentación cierra el ciclo: se validan dificultades reales sin reforzar la evitación, se ajustan hipótesis si los datos no confirman el plan y se documentan los cambios. Esta disciplina transforma la sesión en un taller de aprendizaje, orientado a producir efectos clínicos medibles y relevantes en el menor número razonable de encuentros, sin sacrificar seguridad, ética ni precisión técnica.",
        },

        // Párrafo 5 (~200 palabras)
        {
          type: "paragraph",
          text: "Finalmente, ubicarás la terapia cognitiva en diálogo con propuestas afines. En esta unidad revisaremos la RET de Ellis y su modelo A-B-C (con extensiones para el debate y la generación de creencias más funcionales), así como su implementación práctica paso a paso. Verás cómo la RET comparte con la terapia cognitiva clásica el énfasis en la relación entre ideas, emociones y conductas, pero aporta un marco explícito para intervenir sobre creencias rígidas y auto-exigencias absolutistas. También observarás cómo se integran técnicas conductuales para acelerar el aprendizaje (exposición, práctica programada, role-play, modelado), creando condiciones donde las nuevas interpretaciones no solo “suenan razonables”, sino que se vuelven más probables en conducta. Con este panorama, cerrarás la unidad con una caja de herramientas concreta y criterios firmes para decidir, en cada caso, qué procedimiento usar, con qué parámetros y cómo evaluar su impacto, manteniendo siempre el objetivo rector: cambios clínicamente significativos, sostenibles y transferibles a la vida cotidiana.",
        },

        // Acordeón (3 niveles)
        {
          type: "accordion",
          header: "Mapa de navegación de la unidad",
          open: false,
          items: [
            {
              title: "Qué aprenderás",
              text: "Formulación funcional; identificación y trabajo con pensamientos automáticos; diseño de experimentos conductuales; integración de técnicas cognitivas y conductuales; estándares de calidad (relevancia clínica, replicabilidad, generalización).",
            },
            {
              title: "Cómo lo practicarás",
              text: "Sesiones estructuradas con agenda; tareas entre sesiones con criterios de maestría; medición basada en resultados; retroalimentación y ajuste de hipótesis; uso de registros y guías breves para sostener la práctica.",
            },
            {
              title: "Cómo se evaluará el progreso",
              text: "Indicadores por objetivo (síntoma, funcionamiento, adherencia); revisión de datos por sesión; pruebas de generalización y mantenimiento; decisiones documentadas tecnológicamente para asegurar trazabilidad y aprendizaje supervisado.",
            },
          ],
          text: "",
        },
      ],

      /* → Temas (nivel 1 dentro de la unidad) */
      subthemes: [
        /* 2.10 */
        {
          id: "2.10",
          numbering: "2.10",
          title: "Terapia racional-emotiva de Ellis",
          content: [
            // Párrafo 1 (≈300 palabras) — Contexto e influencias
            {
              type: "paragraph",
              text: "La terapia racional-emotiva (RET) se ubica dentro de las terapias cognitivo-conductuales y se \
distingue por su énfasis en el papel de las creencias sobre las consecuencias emocionales y conductuales. \
En el marco de las TCC de segunda generación, la RET comparte con la terapia cognitiva el interés por \
cómo las interpretaciones influyen en la experiencia, pero aporta un desarrollo propio del modelo ABC y \
de procedimientos centrados en discutir activamente creencias irracionales. Históricamente, Albert Ellis \
(1913–2007) formuló la RET reconociendo influencias filosóficas notorias de tradiciones como el \
estoicismo; de hecho, retoma la célebre sentencia de Epicteto: “Las personas se perturban no por las \
cosas, sino por la visión que tienen de ellas”. Esta raíz filosófica orienta el foco sobre las creencias que \
organizan la conducta y la emoción, mientras que el elemento ‘conductual’ asegura que el cambio sea \
atribuible a procedimientos reproducibles y no a discusiones abstractas. En docencia y práctica, la RET \
se enseña como un sistema brevemente estructurado que integra evaluación, formulación y técnicas \
con un fin pragmático: ayudar a los pacientes a identificar y modificar creencias que conducen a \
perturbación y a respuestas desadaptativas, sustituyéndolas por creencias racionales efectivas que \
favorezcan conductas de autoayuda y bienestar sostenido. Con este encuadre, la unidad presentará el \
modelo ABC/ABCDE y sus aplicaciones, así como la secuencia operativa de intervención y material de \
apoyo para la práctica guiada.",
            },

            // Acordeón 1 — Guía rápida del modelo ABC/ABCDE
            {
              type: "accordion",
              header: "Modelo ABC/ABCDE en RET (guía rápida)",
              open: false,
              items: [
                {
                  title: "A-B-C: estructura básica",
                  text:
                    "A: Acontecimientos activadores (hechos, recuerdos, pensamientos). \n" +
                    "B: Creencias/interpretaciones sobre A (incluye Ci y Cr). \n" +
                    "C: Consecuencias cognitivas, emocionales y conductuales. \n" +
                    "Relación no lineal: A, B y C se influyen bidireccionalmente.",
                },
                {
                  title: "D-E-F: intervención y resultado",
                  text:
                    "D: Discusión activa de Ci (detectar → debatir → discriminar Ci vs. Cr). \n" +
                    "E: Creencias racionales efectivas (Cr) que reemplazan a Ci. \n" +
                    "F: Sentimientos y conductas posteriores a adoptar Cr (seguimiento/registro).",
                },
                {
                  title: "Formulario ABCDEF (uso clínico)",
                  text:
                    "Formato de autoayuda para identificar A, C, B (Ci), debatir (D), generar Cr (E) y consignar cambios (F). \n" +
                    "Se usa en psicoeducación y tareas entre sesiones para consolidar el aprendizaje.",
                },
              ],
              text: "",
            },

            // Párrafo 2 (≈300 palabras) — Modelo ABC y categorías de B
            {
              type: "paragraph",
              text: "El modelo ABC de la RET (no confundir con el ABC del análisis conductual) establece: A como \
acontecimientos activadores (situaciones, recuerdos, pensamientos); B como creencias, cogniciones o \
ideas que el individuo tiene sobre A; y C como las consecuencias cognitivas, afectivas y conductuales \
asociadas. La RET subraya que el peso de B sobre C es central, sin negar que en ciertas condiciones \
A pueda impactar de forma directa (p. ej., desastres). Metodológicamente, interesa discriminar entre \
creencias irracionales (Ci), que conducen a conductas autodestructivas o perturbación, y creencias \
racionales efectivas (Cr), que favorecen conductas de autoayuda. Para trabajo fino, conviene \
desglosar B en familias típicas: observaciones no evaluativas (descripciones neutras), evaluaciones \
de preferencia positivas (inferencia favorable respecto a A), evaluaciones de preferencia negativas \
(inferencia desfavorable), y evaluaciones absolutistas (núcleo de Ci). En la práctica, el clínico guía al \
paciente para traducir percepciones y pensamientos en formulaciones claras (qué A, qué B, qué C), \
identificando sesgos y reglas rígidas. Esta cartografía conceptual permite seleccionar procedimientos \
coherentes: si predominan Ci absolutistas, se prioriza la discusión (D) y la generación de Cr con \
tareas de verificación; si emergen conductas de evitación mantenidas por reforzamiento negativo, se \
combinan estrategias cognitivas con procedimientos conductuales (exposición, práctica programada, \
role-play), manteniendo criterios de evaluación por resultados. El objetivo no es solo ‘pensar distinto’, \
sino cambiar funciones: que las situaciones antes perturbadoras pierdan control y que aparezcan \
respuestas eficaces en escenarios reales.",
            },

            // Video — YouTube (puedes sustituir por otro recurso institucional)
            {
              type: "video",
              src: "https://www.youtube.com/embed/fk2snZpnoa8",
              title: "RET: Modelo ABC/ABCDE explicado (video educativo)",
              text: "",
            },

            // Acordeón 2 — Valores/metas en RET y nota metodológica
            {
              type: "accordion",
              header: "Valores y metas en RET (y una nota metodológica)",
              open: false,
              items: [
                {
                  title: "Valores/metas frecuentemente promovidos",
                  text:
                    "Aceptación incondicional de uno mismo y de los demás; flexibilidad y apertura al cambio; \n" +
                    "aceptación de la incertidumbre; compromiso con proyectos valiosos; pensamiento científico; \n" +
                    "tolerancia a la frustración; responsabilidad personal; hedonismo a largo plazo y realismo práctico.",
                },
                {
                  title: "Lo filosófico vs. lo evaluable",
                  text:
                    "Estos valores/metas no dependen de un modelo explicativo único y, como tales, no son objeto directo \n" +
                    "de prueba de eficacia. Lo que sí debe evaluarse empíricamente son los procedimientos de evaluación \n" +
                    "y cambio conductual empleados en la intervención.",
                },
                {
                  title: "Implicación para la práctica",
                  text:
                    "Anclar toda decisión técnica en formulación funcional y evidencias: el debate de Ci se integra con \n" +
                    "técnicas emotivas (imaginación racional-emotiva, ataque a la vergüenza, juego de roles) y conductuales \n" +
                    "cuando corresponde, documentando parámetros y resultados.",
                },
              ],
              text: "",
            },

            // Párrafo 3 (≈300 palabras) — Procedimiento D y materiales de trabajo
            {
              type: "paragraph",
              text: "El procedimiento emblemático de la RET es la discusión activa (D) de las creencias irracionales. En \
términos operativos, se descompone en tres pasos: detectar Ci y reconocer su ilogicidad o irrealismo; \
debatirlas hasta comprender por qué son irracionales; y discriminar de forma estable Ci frente a Cr, \
convenciéndose de sus efectos diferenciales sobre las consecuencias (C). Para consolidar E (Cr), se \
emplean estrategias de autoayuda: entrenamiento en semántica general, solución de problemas, \
distracción cognitiva y detención del pensamiento, entre otras. La RET también incorpora técnicas \
emotivas (imaginación racional-emotiva, ejercicios de ‘ataque a la vergüenza’, aceptación incondicional \
por parte del terapeuta, autoafirmaciones y autodidáctica guiada) y técnicas conductuales diversas, \
siempre supeditadas a su función en el caso. Como apoyo, el formulario ABCDEF de autoayuda guía \
la identificación de A, C y B (Ci), el debate D, la creación de Cr (E) y el registro de sentimientos y \
conductas resultantes (F), con ejemplos que facilitan la práctica entre sesiones. La evaluación del \
progreso combina indicadores sensibles (intensidad/latencia de respuestas emocionales, frecuencia \
de conductas de evitación/afrontamiento) y evidencia de generalización (transferencia de nuevas \
respuestas a contextos naturales). Con ello, la RET se enseña y se aplica como un sistema tecnológicamente \
describible, conceptualmente sistemático y orientado a resultados clínicamente relevantes.",
            },
          ],

          /* → Subtemas (según el PDF) */
          subthemes: [
            {
              id: "2.10.1",
              numbering: "2.10.1",
              title: "Introducción",
              content: [
                // Párrafo 1 (≈300 palabras) — Contexto histórico y encuadre
                {
                  type: "paragraph",
                  text: "La Terapia Racional-Emotiva (RET) de Albert Ellis se sitúa dentro del amplio paraguas de las \
terapias cognitivo-conductuales y se reconoce por su énfasis en el papel de las creencias sobre las \
consecuencias emocionales y conductuales. Históricamente, Ellis formó parte del entorno clínico \
psicoanalítico hasta comienzos de los años cincuenta; tras múltiples intentos por reformularlo en términos \
más científicos, abandona ese marco y desarrolla su propuesta original —primero denominada ‘terapia \
racional’ y, desde los sesenta, ‘terapia racional-emotiva’— articulando influencias filosóficas (en especial, \
el estoicismo) con procedimientos conductuales. La idea central es operativa: los acontecimientos \
activadores (A) no determinan de manera lineal lo que sentimos y hacemos; la forma en que los \
interpretamos (B) influye decisivamente en las consecuencias (C) cognitivas, emocionales y de acción. \
De esta premisa se desprende una agenda práctica: identificar creencias que generan perturbación y \
conductas desadaptativas, debatir su lógica y su evidencia, y sustituirlas por creencias racionales \
efectivas que favorezcan repertorios de autoayuda. Este marco no renuncia al componente conductual, \
sino que lo integra como garantía de cambio verificable: role-play, tareas graduadas, práctica deliberada y \
exposición se emplean allí donde su función lo exige. En síntesis, la RET propone un sistema de trabajo \
breve y estructurado que combina evaluación, psicoeducación y técnicas cognitivas y conductuales para \
modificar funciones psicológicas relevantes; su interés pedagógico no reside en ‘pensar positivo’, sino en \
instalar reglas y hábitos que reduzcan la evitación, aumenten la tolerancia a la frustración y mejoren la \
capacidad del paciente para actuar de acuerdo con metas valiosas y realistas.",
                },

                // Imagen (URL pública)
                {
                  type: "image",
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDAGqV3b-cMaVexdw_e857gm2mWaabiytRQ&s",
                  caption:
                    "Esquema ABC/ABCDE en RET: A (acontecimiento), B (creencias), C (consecuencias), D (discusión), E (creencias efectivas).",
                  alt: "Diagrama del modelo ABCDE de la Terapia Racional-Emotiva",
                  text: "",
                },

                // Párrafo 2 (≈300 palabras) — Valores, metas y distinciones clave
                {
                  type: "paragraph",
                  text: "La RET enmarca sus procedimientos en un conjunto de valores y metas que orientan el trabajo: \
pensamiento flexible y científico; aceptación de la incertidumbre; tolerancia a la frustración; compromiso \
con proyectos valiosos; autoaceptación y responsabilidad personal; hedonismo a largo plazo y realismo \
práctico. Estas metas no son ‘técnicas’ en sí mismas —no dependen de un único modelo explicativo—, \
pero sirven de brújula ética y formativa: señalan el tipo de resultados deseables y la clase de hábitos que \
merece la pena cultivar. En el plano clínico, la RET distingue entre creencias irracionales (absolutistas, \
dogmáticas, catastrofistas o devaluadoras) y creencias racionales efectivas (preferencias firmes pero no \
absolutas, evaluaciones basadas en evidencia, atribuciones flexibles). También diferencia emociones \
‘convenientes’ (negativas o positivas que, aun siendo displacenteras o intensas, ayudan a superar \
bloqueos y guiar la acción) de emociones ‘inconvenientes’ (aquellas que agravan la experiencia, fomentan \
la evitación o cronifican la autodevaluación); del mismo modo, contrasta actos o conductas ‘convenientes’ \
—que incrementan supervivencia y calidad de vida— frente a conductas ‘inconvenientes’ que interfieren \
seriamente con el bienestar. Estas distinciones no pretenden psicologizar la vida cotidiana, sino ofrecer un \
lenguaje operativo para orientar la intervención y la autoayuda: si una meta está definida por reglas \
absolutistas (“tengo que…”, “debo…”, “no puedo soportar…”), el terapeuta enseñará a describir hechos, \
formular preferencias fuertes, estimar riesgos y tolerar la incertidumbre, mientras diseña experiencias \
conductuales que confirmen, en la práctica, que es posible vivir sin los viejos imperativos.",
                },

                // Lista 1 — Submetas formativas que promueve la RET (síntesis)
                {
                  type: "list",
                  style: "unordered",
                  items: [
                    "Interés en uno mismo equilibrado con interés social.",
                    "Dirección propia y responsabilidad personal en metas y hábitos.",
                    "Tolerancia al error (propio/ajeno) y pensamiento flexible no dogmático.",
                    "Aceptación de la incertidumbre y disposición a asumir riesgos razonables.",
                    "Hedonismo a largo plazo y realismo (evitar ideales perfeccionistas).",
                  ],
                  text: "",
                },

                // Párrafo 3 (≈300 palabras) — Implicaciones metodológicas: ABC/ABCDE y papel de la discusión
                {
                  type: "paragraph",
                  text: "Metodológicamente, la RET se organiza alrededor del modelo ABC y su extensión ABCDE/ABCDEF \
como andamiaje de evaluación e intervención. En la práctica, el clínico enseña al paciente a \
diferenciar los componentes de un episodio problemático: acontecimiento activador (A), creencias (B) \
y consecuencias (C). Después guía la **discusión activa** de las creencias irracionales (D) mediante \
preguntas lógicas y empíricas (¿se sigue realmente esa conclusión?, ¿qué evidencia existe?, ¿qué \
alternativas plausibles hay?), promueve la formulación de creencias racionales efectivas (E) y registra \
los cambios en sentimientos y conductas asociados (F). Este proceso no se reduce a debates verbales \
—evita convertirse en una disputa abstracta—: se complementa con técnicas emotivas (imaginación \
racional-emotiva, ejercicios de ‘ataque a la vergüenza’, role-play) y con procedimientos conductuales \
(planificación de tareas, exposición, práctica deliberada) cuando su función es necesaria para instalar \
nuevas regularidades. El objetivo es alterar el control funcional sobre la conducta: que estímulos antes \
temidos pierdan poder, que aumente la tasa de afrontamiento y que se fortalezca la autovaloración \
incondicional. Por eso, la RET mantiene una documentación tecnológica de lo que se hace (formulario \
ABCDEF, parámetros de tareas, criterios de avance) y evalúa resultados con indicadores sensibles \
(intensidad/latencia de respuestas emocionales, evitación/afrontamiento, desempeño en metas \
conductuales). Así, el aprendizaje no queda en declaraciones: se convierte en repertorios observables, \
medibles y sostenibles en contextos naturales.",
                },

                // Lista 2 — Pistas prácticas para la discusión activa (D) y el uso del ABCDEF
                {
                  type: "list",
                  style: "ordered",
                  items: [
                    "Escribir A-B-C por separado: describir A como hechos; B como frases textuales; C con medidas (intensidad/latencia).",
                    "Localizar lenguaje absolutista (‘debo’, ‘tengo que’, ‘no soporto’) y traducirlo a preferencias fuertes.",
                    "Contrastar B con datos: ¿qué evidencia a favor/en contra?, ¿existen explicaciones alternativas?",
                    "Generar Cr operativas y diseñar tareas que las pongan a prueba (experimentos conductuales).",
                    "Registrar F: cambios en emoción y conducta; programar repasos para consolidar mantenimiento.",
                  ],
                  text: "",
                },
              ],
            },
            {
              id: "2.10.2",
              numbering: "2.10.2",
              title: "Técnicas",
              content: [
                // Párrafo 1 — Enfoque técnico y modelo ABC
                {
                  type: "paragraph",
                  text: "En la Terapia Racional-Emotiva (RET), el núcleo procedimental no es un catálogo de herramientas sueltas, sino un sistema técnico organizado cuyo rasgo distintivo es la discusión activa de las creencias irracionales (Ci). Este énfasis no se entiende sin su andamiaje conceptual: el modelo ABC de la RET. En este, A representa los acontecimientos activadores (hechos, recuerdos, incluso pensamientos sobre experiencias pasadas); B son las creencias, cogniciones o reglas con que la persona interpreta A; y C son las consecuencias cognitivas, emocionales y conductuales. A diferencia de lecturas lineales, la RET subraya la bidireccionalidad entre A, B y C, con especial foco en cómo B modula C. Técnicamente, esto implica que la intervención prioriza hacer explícito B, discriminar Ci de creencias racionales efectivas (Cr) y aplicar procedimientos que alteren las funciones que sostienen respuestas desadaptativas. Así, ‘enseñar’ a pensar diferente no es el fin, sino el medio para cambiar relaciones funcionales: que estímulos antes perturbadores pierdan control y que aumenten repertorios de afrontamiento. En una práctica responsable, cada elección técnica se justifica por su función en el caso y se documenta con claridad operativa (qué se hace, con qué parámetros, bajo qué condiciones), manteniendo coherencia con el modelo ABC y con los criterios de evaluación empírica de resultados. De este modo, la RET convierte su filosofía de base en decisiones clínicas reproducibles, auditables y orientadas a impacto clínico.",
                },

                // Acordeón 1 — Componentes operativos (marco para seleccionar técnicas)
                {
                  type: "accordion",
                  header:
                    "Componentes operativos (marco para seleccionar técnicas)",
                  open: false,
                  items: [
                    {
                      title: "Conjunto de componentes",
                      text:
                        "• Persuasión didáctica.\n" +
                        "• Entrenamiento en observación y discriminación de auto-afirmaciones.\n" +
                        "• Evaluación lógica y empírica de auto-afirmaciones.\n" +
                        "• Tareas de ejecución graduada.\n" +
                        "• Retroalimentación social inmediata.\n" +
                        "• Instrucciones y refuerzo selectivo por modificación de auto-afirmaciones.\n" +
                        "• Modelado y juego de roles de estilos de mediación cognitiva.",
                    },
                    {
                      title: "Criterio de uso",
                      text: "Selecciona el componente por su FUNCIÓN en el caso (qué mantiene el problema) y define parámetros observables (frecuencia, duración, latencia; criterios de maestría) para evaluar cambio y generalización.",
                    },
                  ],
                  text: "",
                },

                // Párrafo 2 — Discusión (D) y complementos emotivos/conductuales
                {
                  type: "paragraph",
                  text: "La discusión activa (D) de las Ci es el procedimiento emblema. Se despliega en tres pasos encadenados: (1) detectar las Ci y reconocer su ilogicidad o irrealismo; (2) debatirlas hasta comprender por qué son irracionales (análisis lógico y empírico); y (3) discriminar de manera estable entre Ci y Cr, convenciéndose de sus efectos diferenciales sobre las consecuencias (C). Para consolidar E (Cr) se incorporan apoyos de autoayuda y tareas: entrenamiento en semántica general, solución de problemas, fantasía positiva, distracción cognitiva, detención del pensamiento, entre otros. Cuando la función del problema lo requiere, se añaden técnicas emotivas (imaginación racional-emotiva, ataque a la vergüenza, role-play, aceptación incondicional) y procedimientos conductuales (exposición, práctica deliberada, reforzamiento selectivo) con parámetros explícitos. La clave operativa es evitar debates abstractos: toda discusión se vincula a tareas que generen datos y reduzcan la evitación. En la sesión, el ciclo típico es psicoeducación breve → identificación A-B-C → D guiado en vivo → diseño de tareas con criterios de maestría → revisión de resultados. Esta disciplina metodológica garantiza trazabilidad y aprendizaje: se registran cambios sensibles (intensidad/latencia de emociones, frecuencia de conductas de afrontamiento/evitación) y se planifican pruebas de generalización (variar estímulos, contextos y demoras) para consolidar mantenimiento.",
                },

                // Acordeón 2 — Ejemplos dentro de “Persuasión didáctica”
                {
                  type: "accordion",
                  header: "Ejemplos dentro de «Persuasión didáctica»",
                  open: false,
                  items: [
                    {
                      title: "Paquete de métodos (muestra)",
                      text:
                        "• Explicación no técnica de fundamentos y del porqué del plan (reduce resistencia).\n" +
                        "• Análisis lógico de Ci: validez de premisas y congruencia conducta-premisa.\n" +
                        "• Reducción al absurdo: llevar la Ci a sus últimas consecuencias para evidenciar el sin-sentido.\n" +
                        "• Análisis empírico: contrastar la Ci con datos del propio historial.\n" +
                        "• Contradecir el valor apreciado de la Ci, reacción incrédula estratégica y apelación a consecuencias.\n" +
                        "• Analogías negativas para re-etiquetar la Ci y aumentar su costo percibido.\n" +
                        "• Apelación a beneficios de reemplazar Ci por Cr y práctica programada para consolidarlas.",
                    },
                    {
                      title: "Uso responsable",
                      text: "La persuasión didáctica NO sustituye la medición: cada intervención debe conectarse a resultados observables (indicadores, criterios de éxito) y a su función clínica en el caso.",
                    },
                  ],
                  text: "",
                },

                // Imagen — esquema ABCDE (referencia visual)
                {
                  type: "image",
                  src: "https://psicmariajoseab.com/wp-content/uploads/2020/04/abcd.jpg",
                  caption:
                    "RET — Esquema ABCDE: A (acontecimiento), B (creencias), C (consecuencias), D (discusión) y E (creencias efectivas).",
                  alt: "Diagrama del modelo ABCDE utilizado en RET",
                  text: "",
                },

                // Párrafo 3 — Alcance, evidencia y estándares de decisión
                {
                  type: "paragraph",
                  text: "Aunque la RET dispone de un repertorio amplio de métodos activos dentro de sus componentes operativos, el propio campo reconoce que la evidencia comparativa sobre la eficacia de CADA técnica específica es escasa. Por ello, la buena práctica no se apoya en listados de ‘recursos’ sino en decisiones por función, hipótesis explícitas y datos de resultado. En términos pedagógicos, esto implica que el estudiante aprenda a: (a) trazar A-B-C con precisión; (b) aislar Ci nucleares (exigencia, catastrofismo, baja tolerancia a la frustración, auto-evaluación global) y priorizar el D guiado; (c) seleccionar complementos emotivos y conductuales cuando aporten a la función (p. ej., exposición para desactivar evitación); (d) definir indicadores sensibles al cambio y criterios de maestría; y (e) planificar generalización y mantenimiento. Finalmente, en coherencia con estándares conductuales, se distingue entre metas/valores (importantes para la dirección del tratamiento pero no objeto directo de ensayo de eficacia) y los procedimientos de evaluación y cambio, que sí deben someterse a validación empírica. El resultado buscado es un sistema replicable: decisiones trazables, intervención tecnológicamente descrita y efectos clínicamente relevantes en contextos naturales.",
                },
              ],
            },
            {
              id: "2.10.3",
              numbering: "2.10.3",
              title: "Aplicación",
              content: [
                // Párrafo 1 — Enfoque aplicado y encuadre ABC/ABCDE
                {
                  type: "paragraph",
                  text: "La aplicación clínica de la RET parte de una premisa operativa: los episodios problema se \
formulan como relaciones entre A (acontecimientos activadores), B (creencias/interpretaciones) y C \
(consecuencias cognitivas, emocionales y conductuales). La tarea práctica no es debatir en abstracto, \
sino **hacer visible B** y vincularlo a cambios observables en C mediante procedimientos replicables. \
En la sesión, el trabajo típico inicia con psicoeducación breve y un análisis rápido del episodio más \
reciente: se separan hechos (A) de interpretaciones (B) y de reacciones (C), y se decide si procede \
discutir B en vivo o diseñar una tarea fuera de sesión. A continuación, se ejecuta el ciclo ABCDE/ABCDEF: \
identificar A-B-C con lenguaje operativo; **discutir activamente** las creencias irracionales (D) por medio \
de análisis lógico y empírico; formular **creencias racionales efectivas** (E) escritas en primera persona; \
y registrar **cambios en sentimientos y conductas** (F) junto con un plan de práctica. La sesión termina \
con la planificación de tareas graduadas (exposición, ensayo conductual, auto-registros) y criterios de \
logro (frecuencia, latencia, intensidad) que permitan verificar efecto y preparar la generalización. \
Metodológicamente, este despliegue evita yuxtaponer ‘técnicas’ y obliga a justificar cada paso por su \
**función** en el caso (qué mantiene la evitación o la perturbación), manteniendo documentación \
tecnológica: qué se hizo, con qué parámetros y qué datos cambiaron. Así, la RET convierte principios \
claros en decisiones clínicas auditables, centradas en alterar el control funcional de estímulos sobre la \
conducta y en consolidar repertorios de afrontamiento útiles y sostenibles.",
                },

                // Acordeón 1 — Fases y foco de intervención (guía operativa)
                {
                  type: "accordion",
                  header: "Fases y foco de intervención en RET",
                  open: false,
                  items: [
                    {
                      title: "1) Formulación ABC y elección de objetivo",
                      text: "Separar A (hechos), B (creencias textuales) y C (reacciones medibles). Estimar función del problema \
(evitar/afrontar) y decidir si el foco inmediato es D en sesión o tarea entre sesiones.",
                    },
                    {
                      title: "2) Discusión activa y generación de alternativas",
                      text: "Aplicar D con preguntas lógicas/empíricas, reducir absolutismos y redactar creencias racionales \
efectivas (E) operativas, en primera persona, vinculadas a acciones observables.",
                    },
                    {
                      title: "3) Consolidación, generalización y mantenimiento",
                      text: "Diseñar práctica programada (exposición/ensayo), definir criterios de maestría y revisar indicadores \
sensibles (intensidad, frecuencia, latencia) para mantenimiento y transferencia.",
                    },
                  ],
                  text: "",
                },

                // Párrafo 2 — Discusión (D), tareas y control de calidad
                {
                  type: "paragraph",
                  text: "En la fase de trabajo racional-emotivo, la **discusión D** se despliega en tres pasos encadenados: \
detectar las creencias irracionales (Ci) y reconocer su ilogicidad/irrealismo; debatirlas hasta el \
convencimiento; y discriminar con estabilidad Ci frente a **creencias racionales (Cr)**, asociando cada \
tipo con consecuencias diferentes. Para consolidar E, se añaden apoyos de autoayuda (semántica \
general, solución de problemas, fantasía positiva, distracción cognitiva, detención del pensamiento) y, \
según la función del caso, técnicas emotivas (imaginación racional-emotiva, ejercicios de ‘ataque a la \
vergüenza’, role-play, aceptación incondicional) y **procedimientos conductuales** (exposición, práctica \
deliberada, reforzamiento selectivo). La clave de calidad es evitar debates desanclados: toda discusión \
se conecta con una tarea que produzca datos y reduzca evitación. En documentación, se deja constancia \
de hipótesis funcionales, parámetros (número de ensayos, ayudas y su desvanecimiento, criterios de \
maestría) y resultados por indicador. Esta gobernanza por datos convierte la sesión en un taller de \
aprendizaje, donde el objetivo no es ‘pensar bonito’, sino reconfigurar funciones: que estímulos \
previamente perturbadores pierdan control, que aumente la tasa de afrontamiento y que se mantenga el \
cambio en contextos naturales. La evaluación semanal revisa adherencia y efectos colaterales (p. ej., \
incremento temporal de malestar al inicio de exposición), ajustando plan y lenguaje de Cr cuando sea \
necesario.",
                },

                // Acordeón 2 — Herramientas prácticas (ABCDEF y plantillas)
                {
                  type: "accordion",
                  header:
                    "Herramientas prácticas de aplicación (ABCDEF, plantillas y tareas)",
                  open: false,
                  items: [
                    {
                      title: "Formulario ABCDEF (uso clínico y de autoayuda)",
                      text: "A: acontecimiento activador; C: consecuencia (emoción/conducta) a cambiar; B: creencias (Ci) que \
conducen a C; D: discusión activa; E: creencias racionales efectivas; F: sentimientos/conductas tras E. \
Se completa en sesión y como tarea para ganar precisión y seguimiento.",
                    },
                    {
                      title: "Diseño de tareas y criterios de maestría",
                      text: "Ensayos graduados, exposición/ensayo conductual, práctica deliberada. Criterios: p. ej., ≥80% de \
pasos correctos sin ayuda en dos sesiones; reducción ≥50% de latencia de evitación; incremento de \
respuestas de afrontamiento por semana.",
                    },
                    {
                      title: "Generalización y mantenimiento",
                      text: "Variar estímulos (personas/lugares/tiempos), espaciar repasos, entrenar auto-registro y \
auto-evaluación para sostener E en contextos naturales y prevenir recaídas.",
                    },
                  ],
                  text: "",
                },

                // Párrafo 3 — Lineamientos de sesión y trazabilidad
                {
                  type: "paragraph",
                  text: "Un **lineamiento de sesión** práctico es mantener un ciclo estable y económico en tiempo: 1) agenda \
y objetivo conductual del día; 2) revisión de tareas/datos; 3) formulación ABC del episodio más \
relevante; 4) D guiado en vivo hasta producir E útiles escritas en primera persona; 5) diseño de \
tarea con parámetros claros (contexto, ayudas, criterio de logro, reforzadores naturales); 6) resumen \
y retroalimentación. El **formulario ABCDEF** facilita la trazabilidad entre hipótesis, decisiones y efecto \
observado, y permite documentar explícitamente qué cambió y por qué. Además, conviene \
normalizar métricas sensibles al objetivo (frecuencia, duración, latencia, intensidad) y acompañarlas de \
indicadores de funcionamiento (p. ej., conductas de afrontamiento/evitación). Cuando el caso lo exige, \
se integran procedimientos conductuales (exposición, reforzamiento diferencial, práctica programada) \
para acelerar aprendizaje y consolidar control estimular adaptativo. Finalmente, la calidad del proceso \
se juzga por su relevancia clínica, replicabilidad y generalización: si el cambio no es observable, si no \
puede describirse tecnológicamente o si no se mantiene, debe ajustarse el plan. Esta disciplina asegura \
que la RET conserve su vocación aplicada: producir cambios útiles, sostenibles y verificables en la vida \
cotidiana del paciente.",
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
          href: "https://www.youtube.com/watch?v=zCVkUAPdOVE&ab_channel=InstitutodeInteracci%C3%B3nyDin%C3%A1micaPersonal", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Albert Ellis entrevista a Gloria https://www.youtube.com/watch?v=zCVkUAPdOVE&ab_channel=InstitutodeInteracci%C3%B3nyDin%C3%A1micaPersonal",
            "ALBERT ELLIS (1913–2007): PIONERO DE LOS MODELOS MEDIACIONALES DE INTERVENCIÓN https://www.behavioralpsycho.com/wp-content/uploads/2020/04/12.Perez_16-2oa.pdf",
            "A systematic review of the nature and efficacy of Rational Emotive Behaviour Therapy interventions https://pmc.ncbi.nlm.nih.gov/articles/PMC11232995/",
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
            "Beck, J. (2011). *Cognitive behavior therapy. Basics and beyond.* The Guilford Press.",
            "Ellis, A. y Bernard, M. (1990). ¿Qué es la terapia racional-emotiva (RET)? En A. Ellis y R. Grieger, *Manual de terapia racional-emotiva* (Vol. 2, pp. 19-46). Desclée de Brouwer.",
            "Cooper, J., Heron, T. & Heward, W. (2014). *Applied Behavior Analysis* (2° Ed.). Pearson Education Limited.",
            "Dryden, W. (1990). Métodos Activos en la Terapia Racional-Emotiva. En A. Ellis y R. Grieger, *Manual de terapia racional-emotiva* (Vol. 2, pp. 237-260). Desclée de Brouwer.",
            "Grieger, R. (1990). El Proceso de la Terapia Racional-Emotiva. En A. Ellis y R. Grieger, *Manual de terapia racional-emotiva* (Vol. 2, pp. 219-227). Desclée de Brouwer.",
            "Harrel, T., Beiman, I. y La Pointe, K. (1990). Técnicas Didácticas de Persuasión en la Reestructuración Cognitiva. En A. Ellis y R. Grieger, *Manual de terapia racional-emotiva* (Vol. 2, pp. 229-236). Desclée de Brouwer.",
            "Pérez, M. (2014). *Las terapias de tercera generación como terapias contextuales.* Síntesis.",
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
