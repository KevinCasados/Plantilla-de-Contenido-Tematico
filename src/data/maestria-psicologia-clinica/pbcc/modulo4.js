/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MPCL", // Maestría en Psicología Clínica
  courseId: "MPCL-PBCC", // Psicoterapia breve cognitivo-conductual
  id: "MPCL-PBCC-mod4",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Psicoterapia breve cognitivo-conductual",
  title: "Módulo 4. Terapia cognitiva",
  semestre: "4° semestre",
  teacher: "Mtro. Iván López Ortiz",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Identificar la estructura general de la psicoterapia breve-cognitivo conductual y los " +
    "contenidos teóricos y prácticos que debe dominar el terapeuta cognitivo-conductual.",
  competencies: [
    "Identifica la estructura general y las técnicas de la terapia breve cognitivo-conductual para analizar los problemas clínicamente relevantes.",
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
      id: "3",
      numbering: "Unidad 3",
      title: "Terapia cognitiva",
      content: [
        // Párrafo 1 (~200 palabras)
        {
          type: "paragraph",
          text: "La terapia cognitiva se consolidó como un enfoque clínico breve, estructurado y gobernado por datos, \
capaz de traducir teoría psicológica en decisiones técnicas verificables. Su premisa operacional es clara: \
las respuestas emocionales y conductuales no dependen únicamente de los hechos, sino de cómo los \
interpretamos y de las reglas que guían nuestra atención, memoria y acción. En consecuencia, el trabajo \
terapéutico se centra en identificar pensamientos automáticos, creencias intermedias y supuestos \
nucleares que sesgan la lectura del contexto, y en diseñar experiencias de aprendizaje que permitan \
contrastarlos con evidencias. Esta unidad te introduce a ese andamiaje con una lógica de ingeniería \
clínica: formular el caso, seleccionar procedimientos por su función, describirlos tecnológicamente y \
evaluar su impacto con indicadores sensibles al cambio. El objetivo no es “pensar positivo”, sino \
alterar funciones: disminuir el control de estímulos que disparan evitación, aumentar la probabilidad de \
afrontamiento eficaz y consolidar repertorios útiles en contextos reales. Para ello, la agenda de sesión, \
las tareas entre sesiones y la retroalimentación inmediata se convierten en herramientas centrales, \
asegurando trazabilidad entre hipótesis, intervención y resultados clínicamente relevantes.",
        },

        // Párrafo 2 (~200 palabras)
        {
          type: "paragraph",
          text: "Metodológicamente, trabajaremos con un ciclo estable: agenda → revisión de datos → intervención \
guiada → planificación de tareas → retroalimentación y cierre. La agenda protege el foco y garantiza \
tiempo de práctica en vivo (restructuración cognitiva, experimentos conductuales, role-play), mientras \
que los datos sostienen la toma de decisiones: indicadores de frecuencia, duración y latencia de \
conductas objetivo; auto-registros; y medidas de malestar u otros correlatos relevantes. La formulación \
funcional del caso distingue si predomina un proceso respondiente (p. ej., ansiedad condicionada) u \
operante (conductas mantenidas por reforzamiento), lo que guía la integración de técnicas. Así, \
desensibilización, exposición y práctica deliberada conviven con análisis de pensamientos automáticos, \
autoinstrucciones y guías de afrontamiento, siempre bajo criterios de dosificación, seguridad y ética. \
El uso de hipótesis explícitas y criterios de maestría (“qué, cuánto, cuándo, con qué ayudas”) evita el \
eclecticismo y convierte el plan en un sistema replicable. A lo largo de la unidad, aprenderás a traducir \
objetivos abstractos en conductas observables y a documentar cada decisión para que cualquier colega \
pueda comprender qué se hizo, por qué, con qué parámetros y qué cambió.",
        },

        // Párrafo 3 (~200 palabras)
        {
          type: "paragraph",
          text: "Conceptualmente, la unidad recorrerá la relación entre procesamiento de la información y conducta: \
memoria a corto y largo plazo, almacenamiento sensorial, redes cognitivas y operaciones (atención, \
interpretación, inferencia). Este mapa nos permite entender por qué ciertas claves del entorno activan \
rápidamente esquemas y sesgos (catastrofismo, filtraje negativo, sobregeneralización) y cómo \
intervenir de modo que nuevas interpretaciones compitan con las antiguas. La terapia cognitiva no \
pretende “borrar” pensamientos, sino alterar la probabilidad de que se seleccionen y mantengan ciertos \
patrones frente a otros. De ahí el valor de los experimentos conductuales: transforman hipótesis en \
acciones y producen datos que debilitan reglas ineficaces. Verás también cómo la relación terapéutica \
funciona como contexto de aprendizaje: colaboración estructurada, feedback específico y reforzamiento \
contingente del esfuerzo. Con estas piezas, la unidad articula teoría y práctica sin perder el norte \
aplicado: relevancia clínica, replicabilidad, efectividad y generalización a los escenarios donde el \
paciente realmente vive, trabaja y se relaciona.",
        },

        // Párrafo 4 (~200 palabras)
        {
          type: "paragraph",
          text: "Operativamente, el diseño de intervención parte de objetivos con valor social y definición conductual: \
qué hará el paciente, con qué frecuencia o duración, en qué contextos y con qué apoyos. A partir de \
ahí, se eligen procedimientos por función: si el problema se mantiene por evitación (reforzamiento \
negativo), las tareas priorizan exposición graduada y prevención de respuesta; si el déficit es de \
habilidades, se programa modelado, moldeamiento y encadenamiento; y si el sesgo interpretativo \
domina la escena, se estructura discusión guiada, reatribución y entrenamiento en autoinstrucciones. \
Siempre se explicitan parámetros (ensayos, ayudas, desvanecimiento, criterios de avance) y se \
anticipan riesgos (p. ej., picos iniciales de malestar). La documentación no es burocracia: preserva la \
coherencia interna del tratamiento, facilita la supervisión, y permite aprender de los ajustes cuando los \
datos no confirman las hipótesis. Con esta gobernanza por datos, el progreso deja de depender de \
impresiones y pasa a sostenerse en evidencia recogida sesión a sesión, lo que fortalece la toma de \
decisiones y la calidad del resultado clínico.",
        },

        // Párrafo 5 (~200 palabras)
        {
          type: "paragraph",
          text: "Finalmente, situaremos la terapia cognitiva en su diálogo con propuestas cercanas. Revisarás la \
estructura general del enfoque de Beck y su énfasis en la relación pensamiento-emoción-conducta, así \
como su integración con procedimientos conductuales para acelerar aprendizaje y sostener cambios. \
También observarás, a modo de contraste útil, cómo la RET de Ellis aborda las creencias desde el \
modelo ABC/ABCDE y qué lecciones metodológicas aporta (claridad semántica, discusión activa, \
autoayuda estructurada). El objetivo es dotarte de criterios firmes para decidir cuándo una \
reestructuración es suficiente, cuándo requiere respaldo con experiencia dirigida y cuándo conviene \
replantear la hipótesis funcional. En todos los casos, la guía es la misma: decisiones por función, \
descripciones tecnológicas, medición sensible y orientación a resultados con valor para la vida diaria. \
Cerrarás la unidad con una caja de herramientas concreta y un patrón de trabajo replicable, capaz de \
integrar evidencia, ética y eficiencia sin sacrificar la individualidad de cada caso.",
        },

        // Acordeón (3 niveles)
        {
          type: "accordion",
          header: "Mapa de navegación de la unidad",
          open: false,
          items: [
            {
              title: "Qué aprenderás",
              text: "Formulación funcional; identificación de pensamientos automáticos y creencias; diseño de \
experimentos conductuales; integración de técnicas cognitivas y conductuales; criterios de relevancia, \
replicabilidad y generalización.",
            },
            {
              title: "Cómo lo practicarás",
              text: "Sesiones con agenda; tareas entre sesiones con criterios de maestría; registro ABC y métricas \
sensibles (frecuencia, duración, latencia); retroalimentación inmediata y ajustes iterativos.",
            },
            {
              title: "Cómo medirás el progreso",
              text: "Indicadores por objetivo (síntoma, funcionamiento, adherencia); revisión de datos por sesión; \
pruebas de generalización y mantenimiento; documentación tecnológica de decisiones y resultados.",
            },
          ],
          text: "",
        },
      ],

      /* → Temas (nivel 1 dentro de la unidad) */
      subthemes: [
        {
          id: "3.1",
          numbering: "3.1",
          title: "Desarrollo histórico",
          content: [
            {
              type: "paragraph",
              text: "El desarrollo histórico de la terapia cognitiva no puede comprenderse fuera del contexto de la \
llamada revolución cognitiva y del tránsito crítico de Aaron T. Beck desde el encuadre psicoanalítico \
hacia una psicoterapia basada en procesos cognitivos operacionalizables. En la segunda mitad del \
siglo XX, Beck advierte que los datos empíricos no sostienen explicaciones psicoanalíticas claves y \
reorienta su trabajo hacia la formulación de hipótesis contrastables sobre cómo los pensamientos \
automáticos y las creencias influyen en emoción y conducta. De forma convergente, la propuesta de \
Albert Ellis (RET) enfatiza el rol mediacional de las creencias en el malestar; ese énfasis permea la \
arquitectura cognitiva inicial, mientras que la práctica procedimental toma prestadas virtudes de la \
terapia conductual: terapeuta activo, metas por sesión, tareas graduadas y medición sistemática de \
resultados. A finales de los sesenta e inicios de los setenta, emerge el rótulo ‘terapia cognitiva’ y, \
pronto, ‘terapia cognitivo-conductual’, para reconocer explícitamente la imbricación entre componentes \
cognitivos y conductuales. En paralelo, el movimiento hacia formatos breves acelera el énfasis en \
agenda, conceptualización de caso y ciclos de aprendizaje concentrados (4–8 sesiones en promedio, \
en variantes breves). Este recorrido histórico no es una anécdota: explica por qué la terapia cognitiva \
debe sostenerse en formulaciones funcionales, decisiones por función y documentación tecnológica de \
procedimientos, distanciándose de eclecticismos poco trazables y guiando la enseñanza hacia la \
replicabilidad, la relevancia clínica y la generalización de resultados a contextos naturales. :contentReference[oaicite:14]{index=14}",
            },
            {
              type: "paragraph",
              text: "En su maduración, la terapia cognitiva consolida tres vectores que hoy siguen siendo su columna \
vertebral: (1) una **teoría operativa** que liga situación, interpretación y consecuencias, y que acepta la \
bidireccionalidad entre cognición, emoción y acción; (2) una **metodología aplicada** que transforma \
hipótesis en protocolos breves con metas observables, tareas entre sesiones y evaluación continua; y \
(3) una **ética de intervención** centrada en utilidad y economía de medios (lo necesario para producir \
cambio clínicamente significativo). Históricamente, Beck reconoce deudas con Kelly (constructos \
personales) y Ellis (modelo ABC), pero subraya que la práctica se alinea con estándares conductuales: \
operacionalización, control estimular, reforzamiento y verificación de efectos. De ahí que conceptos \
como ‘cuestionamiento socrático’, ‘registro de pensamiento’, ‘activación conductual’ o ‘exposición’ \
sean engranajes de un mismo sistema, más que técnicas sueltas. El viraje hacia **formatos breves** \
impulsa una lógica de ingeniería clínica: agenda estable, selección de un problema de alto valor \
funcional, intervención en vivo y tareas con criterios de maestría. Este hilo histórico desemboca en la \
didáctica actual: formar terapeutas que conceptualicen por función, diseñen experiencias de \
aprendizaje y documenten qué cambia, por qué y con qué parámetros, manteniendo la trazabilidad \
entre teoría, método y resultado. :contentReference[oaicite:15]{index=15}",
            },

            // Acordeón 1 — Hitos y actores
            {
              type: "accordion",
              header: "Hitos y actores del giro cognitivo",
              open: false,
              items: [
                {
                  title: "De la crítica empírica al psicoanálisis a la TC",
                  text: "Beck reorienta su trabajo al encontrar que sus datos no avalan supuestos psicoanalíticos y \
adopta hipótesis cognitivo-mediacionales con verificación empírica.",
                },
                {
                  title: "Ellis y el papel mediacional de las creencias",
                  text: "La RET aporta un modelo explícito (ABC) sobre creencias y consecuencias; su énfasis mediacional \
influye el andamiaje cognitivo.",
                },
                {
                  title: "Procedimientos conductuales en la práctica cognitiva",
                  text: "Participación activa del terapeuta, metas por sesión, tareas y medición de resultados se integran \
como estándares operativos.",
                },
              ],
              text: "",
            },

            // Acordeón 2 — De TC a TCC breve
            {
              type: "accordion",
              header: "De terapia cognitiva a formatos breves",
              open: false,
              items: [
                {
                  title: "Racionalidad de la brevedad",
                  text: "Concentrar aprendizaje en 4–8 sesiones (según guías breves) exige foco en problemas de alto \
valor funcional, práctica en vivo y tareas estratégicas.",
                },
                {
                  title: "Gobernanza por datos",
                  text: "Registro continuo, indicadores sensibles (frecuencia, duración, latencia) y criterios de maestría \
garantizan decisiones trazables.",
                },
                {
                  title: "Evitar el eclecticismo",
                  text: "La historia enseña a decidir por función y a describir procedimientos tecnológicamente, no por \
preferencia de ‘técnicas’ sueltas.",
                },
              ],
              text: "",
            },
          ],
        },

        {
          id: "3.2",
          numbering: "3.2",
          title: "Memoria a corto plazo",
          content: [
            {
              type: "paragraph",
              text: "La memoria a corto plazo (MCP) se entiende aquí como un sistema de almacenamiento transitorio \
y de capacidad limitada que mantiene información disponible para operaciones inmediatas (atender, \
comprender, decidir). En el marco de la terapia cognitiva, la MCP condiciona qué porciones de la \
experiencia pasan a primer plano y, por tanto, qué pensamientos automáticos se activan. En sesión, \
aprovechar la MCP significa estructurar tareas que reduzcan carga innecesaria (instrucciones claras, \
paso a paso), introducir claves salientes (resúmenes escritos, esquemas) y entrenar habilidades de \
focalización atencional (p. ej., segmentar problemas o guiar la autoobservación). La MCP también \
explica por qué la agenda ayuda: delimita objetivos y previene dispersión; a su vez, la práctica guiada \
con feedback inmediato fortalece la retención de procedimientos (p. ej., uso del registro de pensamiento) \
y mejora transferencia entre sesiones. Cuando el malestar interfiere con la MCP, se ‘descomprimen’ \
tareas (micro-pasos) y se utilizan ayudas externas (tarjetas con preguntas socráticas, recordatorios), \
desvaneciéndolas conforme crece la independencia del paciente. Esta mirada funcional evita convertir \
la MCP en teoría abstracta: la convierte en criterio de diseño didáctico y clínico (qué, cuánto y cómo \
enseñar en cada sesión para que realmente se aprenda y se use). :contentReference[oaicite:16]{index=16}",
            },
            {
              type: "paragraph",
              text: "Para integrar la MCP al plan terapéutico se utilizan tres líneas prácticas. Primera, **economía \
cognitiva**: simplificar instrucciones, reducir demandas simultáneas y establecer secuencias previsibles \
(agenda, práctica, tarea), con apoyos visuales que anclen el contenido clave. Segunda, **codificación \
profunda**: vincular la nueva habilidad con ejemplos personales (situaciones recientes), fomentar \
elaboración (el paciente explica con sus palabras el ‘por qué’ y el ‘cómo’ de la tarea) y promover práctica \
distribuida entre sesiones. Tercera, **recuperación asistida**: preparar disparadores externos (tarjetas, \
checklists, aplicaciones) y ensayar su uso en contextos reales. En problemas donde la rumiación o la \
ansiedad ocupan MCP con contenido irrelevante, se enseña a ‘limpiar el buffer’ con micro-técnicas de \
atención (poner nombre a la emoción, volver a la tarea concreta) y a diferir la preocupación al registro \
para trabajarlo en la parte cognitiva. Con ello, la MCP deja de ser un límite abstracto y pasa a ser un \
diseño de interfaz entre sesión y vida cotidiana, que facilita que lo aprendido sea recordado, aplicado y \
medido. :contentReference[oaicite:17]{index=17}",
            },

            // Acordeón 1 — Diseño de sesión sensible a MCP
            {
              type: "accordion",
              header: "Diseño de sesión sensible a la MCP",
              open: false,
              items: [
                {
                  title: "Agenda y foco",
                  text: "Delimitar 1–2 objetivos; evitar multitarea; reservar tiempo para práctica en vivo.",
                },
                {
                  title: "Apoyos externos",
                  text: "Esquemas breves, tarjetas con preguntas, formularios de registro; desvanecimiento progresivo.",
                },
                {
                  title: "Feedback inmediato",
                  text: "Corregir en el momento, reforzar aproximaciones y cerrar con resumen escrito.",
                },
              ],
              text: "",
            },

            // Acordeón 2 — Señales de sobrecarga y ajustes
            {
              type: "accordion",
              header: "Señales de sobrecarga y cómo ajustarlas",
              open: false,
              items: [
                {
                  title: "Indicadores",
                  text: "Olvidos frecuentes, dispersión, dificultad para completar registros o seguir secuencias.",
                },
                {
                  title: "Ajustes",
                  text: "Fragmentar tareas, reducir pasos, alternar explicación-ejecución, usar repasos espaciados.",
                },
                {
                  title: "Seguimiento",
                  text: "Anotar barreras y ayudas efectivas; revisarlas en la apertura de la sesión siguiente.",
                },
              ],
              text: "",
            },
          ],
        },

        {
          id: "3.3",
          numbering: "3.3",
          title: "Memoria a largo plazo",
          content: [
            {
              type: "paragraph",
              text: "La memoria a largo plazo (MLP) aloja conocimientos, creencias y reglas que guían la percepción y la \
acción; en terapia cognitiva, gran parte del trabajo apunta a **re-codificar** asociaciones y reglas \
disfuncionales en esquemas más ajustados. Esto se logra combinando reestructuración guiada con \
experiencias conductuales que generen nueva evidencia y, por tanto, nuevas rutas de recuperación. El \
registro de pensamiento es una herramienta de codificación: obliga a describir situación, pensamiento, \
evidencias y alternativas, generando huellas accesibles para la sesión y la vida diaria. La activación \
conductual, la exposición y los ejercicios de solución de problemas proveen ‘datos’ que reescriben \
reglas (‘si me expongo, no me derrumbo’, ‘si ensayo, mejoro’). En la MLP, la **elaboración** y la \
**congruencia afectiva** facilitan fijación: por ello se vinculan tareas con metas de valor personal y se \
refuerza explícitamente el afrontamiento efectivo. Del lado clínico, también se prevé que huellas antiguas \
compitan por la recuperación; por eso se planifican repasos, variación de contextos y pruebas \
periódicas de mantenimiento, de modo que las nuevas rutas sean más probables cuando más se \
necesitan. Así, la MLP deja de ser un ‘depósito’ y se convierte en el terreno donde se instala y prueba la \
nueva manera de pensar y actuar. :contentReference[oaicite:18]{index=18}",
            },
            {
              type: "paragraph",
              text: "Técnicamente, el diseño de intervención orientado a MLP incluye: **práctica espaciada** (evitar \
concentrar todo en una sesión; repartir ensayos con demoras crecientes), **variabilidad de estímulos** \
(personas, lugares, horarios) para prevenir dependencia contextual, y **recuperación activa** (el paciente \
explica y aplica sin ayudas) antes del cierre. Cuando la conceptualización del caso detecta reglas \
centrales rígidas (‘no valgo’, ‘debo hacerlo perfecto’), se formula un programa de evidencias \
acumulativas con tareas viables y métricas sensibles (frecuencia, intensidad, latencia). En paralelo, se \
descartan ‘ganancias’ del síntoma que refuercen reglas antiguas (escape, alivio inmediato), programando \
contingencias alternativas. La evaluación por resultados exige indicadores de mantenimiento (conductas \
de afrontamiento, exposición espontánea, uso autónomo de registros) y de generalización (transferencia \
a situaciones no practicadas). Este enfoque alinea teoría de memoria con ingeniería clínica: \
codificar→consolidar→recuperar, con decisiones trazables y economía de medios. :contentReference[oaicite:19]{index=19}",
            },

            // Acordeón 1 — Estrategias de fijación en MLP
            {
              type: "accordion",
              header: "Estrategias para fijar aprendizaje en MLP",
              open: false,
              items: [
                {
                  title: "Elaboración y significado personal",
                  text: "Vincular cada tarea a metas valiosas; pedir al paciente que explique el ‘por qué’ y ‘para qué’.",
                },
                {
                  title: "Práctica espaciada y variación contextual",
                  text: "Repetir con demoras; cambiar lugares/personas/horarios para robustecer huellas.",
                },
                {
                  title: "Recuperación activa",
                  text: "Ensayos sin ayudas; role-play donde el paciente enseña la habilidad al terapeuta.",
                },
              ],
              text: "",
            },

            // Acordeón 2 — Mantenimiento y prevención de recaídas
            {
              type: "accordion",
              header: "Mantenimiento y prevención de recaídas",
              open: false,
              items: [
                {
                  title: "Repasos programados",
                  text: "Sesiones de refuerzo y micro-tareas para reactivar rutas de recuperación clave.",
                },
                {
                  title: "Señales de alerta",
                  text: "Aumento de evitación, abandono de registros, retorno de reglas rígidas; intervenir de inmediato.",
                },
                {
                  title: "Plan de acción",
                  text: "Checklist de afrontamiento, contactos de apoyo, y tareas de primera respuesta ante disparadores.",
                },
              ],
              text: "",
            },
          ],
        },

        {
          id: "3.4",
          numbering: "3.4",
          title: "Almacenamiento sensorial",
          content: [
            {
              type: "paragraph",
              text: "El almacenamiento sensorial es el registro fugaz (milisegundos a segundos) que conserva trazas \
sensoriales inmediatas antes de su selección hacia la MCP. Aunque brevísimo, condiciona qué \
información gana acceso al procesamiento consciente: saliencias visuales o auditivas, señales de \
amenaza o de seguridad, y claves contextuales. En clínica, este nivel recuerda que el ‘qué vemos’ y \
‘qué escuchamos’ está mediado por atención y expectativas; por ello, se diseñan contextos de sesión \
con mínimas distracciones, instrucciones claras y ayudas visuales que capten lo relevante. En trastornos \
de ansiedad, donde señales ambiguas se interpretan como peligrosas, el trabajo combina \
psicoeducación (cómo funciona el sesgo atencional) con exposición graduada para recalibrar la \
asignación de saliencia. En depresión, se entrenan focalización y selección de estímulos que faciliten la \
activación conductual (claves para iniciar tareas, recordatorios). Al hablar de registro sensorial, no \
perseguimos explicar todo el sufrimiento por ‘percepción’; usamos el concepto para diseñar mejor \
intervenciones: controlar claves ambientales, reducir ruido, evidenciar lo importante y apoyar la \
atención en lo terapéuticamente central, antes de pedir procesos más complejos. :contentReference[oaicite:20]{index=20}",
            },
            {
              type: "paragraph",
              text: "En términos operativos, el almacenamiento sensorial orienta decisiones micro-diseño: ubicación del \
paciente en consulta (evitar back-lighting que distrae), empleo de fichas visuales para guiar el \
registro de pensamiento, uso de temporizadores o señales auditivas para delimitar bloques de trabajo \
y pausas. Se recomienda introducir elementos uno por vez y verificar comprensión inmediata (preguntas \
de chequeo), evitando saturar el canal sensorial con textos extensos o múltiples materiales en pantalla. \
Para tareas en casa, se proponen ‘anclas’ sensoriales que disparen ejecución (p. ej., tarjeta en la \
puerta para activar práctica de respiración), con desvanecimiento programado a medida que el control \
pase del estímulo artificial al contexto natural. Este nivel también alerta sobre el rol de las sensaciones \
interoceptivas: en pánico, por ejemplo, taquicardia o hiperventilación funcionan como claves que \
secuestran la atención; la exposición interoceptiva y la reatribución ayudan a resignificar esas señales. \
Así, el registro sensorial deja de ser un detalle neurocognitivo y se transforma en una pauta de diseño \
de entornos y materiales que facilitan aprendizaje, adherencia y transferencia. :contentReference[oaicite:21]{index=21}",
            },

            // Acordeón 1 — Buenas prácticas sensoriales en sesión
            {
              type: "accordion",
              header: "Buenas prácticas sensoriales en sesión",
              open: false,
              items: [
                {
                  title: "Ambiente y señalización",
                  text: "Iluminación uniforme, pocos distractores, pizarras o tarjetas con puntos clave visibles.",
                },
                {
                  title: "Protocolos de demostración",
                  text: "Mostrar primero, luego pedir ejecución; alternar micro-explicación y práctica.",
                },
                {
                  title: "Chequeo inmediato",
                  text: "Preguntas breves para confirmar comprensión antes de pasar al siguiente paso.",
                },
              ],
              text: "",
            },

            // Acordeón 2 — Diseño sensorial de tareas en casa
            {
              type: "accordion",
              header: "Diseño sensorial de tareas para casa",
              open: false,
              items: [
                {
                  title: "Anclas y recordatorios",
                  text: "Notas visuales, temporizadores, señales contextuales asociadas al inicio de la tarea.",
                },
                {
                  title: "Desvanecimiento",
                  text: "Retirar ayudas progresivamente para transferir control al contexto natural.",
                },
                {
                  title: "Prevención de ruido",
                  text: "Evitar multitarea; preparar el entorno antes de iniciar; pautas de inicio-fin claras.",
                },
              ],
              text: "",
            },
          ],
        },
        {
          id: "3.5",
          numbering: "3.5",
          title: "Red cognitiva",
          content: [
            {
              type: "paragraph",
              text: "En terapia cognitiva, la noción de red cognitiva describe cómo el conocimiento, las creencias y \
las reglas personales se organizan en nodos interrelacionados cuyas conexiones determinan la \
probabilidad de activación (priming) ante determinadas claves del entorno. De forma operativa, \
hablar de ‘red’ nos ayuda a comprender por qué ciertos estímulos disparan con rapidez patrones \
de interpretación y respuesta (p. ej., catastrofismo ante una sensación interoceptiva) y qué \
requisitos deben cumplir las experiencias de aprendizaje para competir con rutas antiguas bien \
consolidadas. En sesión, el objetivo no es ‘suprimir’ nodos, sino alterar la topología funcional de la \
red: debilitar vínculos que sostienen reglas disfuncionales (“si no es perfecto, es un fracaso”), \
fortalecer caminos alternativos más ajustados y aumentar la accesibilidad de claves contextuales \
que favorecen afrontamiento. Los procedimientos conductuales (exposición, práctica deliberada, \
ensayo en vivo) generan evidencia que, integrada con reestructuración guiada y autorregistros, \
modifica pesos de conexión en la práctica. Una conceptualización de caso sensible a redes exige \
precisar qué nodos (temas nucleares), qué disparadores (contextos, señales internas/externas) y \
qué consecuencias (escape, alivio, refuerzo social) sostienen la selección reiterada de ciertas \
rutas. Con esa cartografía, el diseño técnico puede escalar desde tareas simples (micro-experimentos \
con una clave y un resultado observable) hasta programas de generalización que varían \
personas, lugares y tiempos, de modo que las rutas nuevas resulten probabilísticamente \
preferibles en la vida cotidiana. Esta lectura en clave de ‘red’ evita intervenciones atomizadas y \
permite describir el cambio como una redistribución de accesibilidades dentro del sistema de \
creencias y habilidades del paciente. :contentReference[oaicite:6]{index=6}",
            },
            {
              type: "paragraph",
              text: "Traducir la red cognitiva a decisiones clínicas implica trabajar con tres palancas. Primero, \
**señales de entrada**: reorganizar el contexto para reducir ruido y elevar la saliencia de pistas \
funcionales (recordatorios visuales, guías breves, agendas con objetivos operativos). Segundo, \
**procesamiento**: diseñar experiencias que pidan al sistema ‘elegir’ activamente nuevas rutas \
(búsqueda de evidencias contradictorias, reatribución, ensayo conductual), con dosificación y \
feedback inmediato. Tercero, **consolidación**: aumentar la probabilidad de recuperación futura \
mediante práctica espaciada, variación de contextos y recuperación activa sin ayudas. En \
formulación, conviene representar explícitamente nodos (temas, reglas, auto-esquemas), enlaces \
(disparadores→pensamientos→respuestas) y ‘nudos’ de mantenimiento (evitación reforzada, \
reglas perfeccionistas, autocrítica). Ello permite alinear tareas con el cuello de botella real (p. ej., si \
la red “salta” rápidamente de una sensación a una catástrofe, la exposición interoceptiva y la \
matriz de evidencias reducen la fuerza del enlace). Finalmente, la red también se beneficia de \
contingencias de reforzamiento social y autorrefuerzo: documentar micro-logros, modelar \
autoinstrucciones de afrontamiento y crear repertorios de recuperación rápida. En suma, \
intervenimos en la arquitectura práctica de la red: qué se activa, con qué rapidez, con qué \
consecuencias, y cómo volver accesible —en el momento oportuno— aquello que favorece el \
funcionamiento valioso para el paciente.",
            },

            // Acordeón — Claves de diseño por “red”
            {
              type: "accordion",
              header: "Claves de diseño basadas en red cognitiva",
              open: false,
              items: [
                {
                  title: "Mapeo explícito",
                  text: "Esquematiza nodos, enlaces y disparadores; identifica ‘nudos’ de mantenimiento y rutas alternativas viables.",
                },
                {
                  title: "Experiencias competitivas",
                  text: "Genera datos en vivo que compitan con la lectura dominante (experimentos conductuales + reatribución).",
                },
                {
                  title: "Consolidación y generalización",
                  text: "Práctica espaciada, variabilidad contextual y recuperación activa sin ayudas.",
                },
              ],
              text: "",
            },

            // Lista — Aplicaciones clínicas
            {
              type: "list",
              style: "bullets",
              items: [
                "Ansiedad interoceptiva: exposición a sensaciones + registro de evidencias para debilitar el salto catastrófico.",
                "Perfeccionismo: experimentos de rendimiento ‘suficientemente bueno’ con criterios de maestría y reforzamiento contingente.",
                "Autocrítica: modelado de autoinstrucciones y búsqueda de micro-datos que reequilibren la red evaluativa.",
              ],
              text: "",
            },

            // Imagen
            {
              type: "image",
              src: "https://sistemasinformatica.istmo.tecnm.mx/wp-content/uploads/2024/06/Red_Semantica_Clasica.png",
              alt: "Ejemplo de red/semántica con nodos y enlaces",
              caption:
                "Representación esquemática de una red semántica (nodos y conexiones).",
              text: "",
            },
          ],
        },

        {
          id: "3.6",
          numbering: "3.6",
          title: "Operaciones cognitivas",
          content: [
            {
              type: "paragraph",
              text: "Las operaciones cognitivas —atender, codificar, mantener, recuperar, inferir, decidir— median la \
interacción entre situación y conducta; por ello, cualquier intervención que aspire a ser eficaz debe \
‘diseñarse’ para operar con, y no contra, sus límites y sesgos. En clínica, esto se traduce en \
estructurar sesiones que reduzcan carga de trabajo (segmentar, usar ayudas externas, ordenar la \
agenda), promuevan codificación profunda (vincular con metas personales, generar explicaciones \
propias) y ensayen recuperación activa (aplicar sin ayudas antes del cierre). La dimensión \
inferencial —cómo pasamos de datos a conclusiones— es especialmente sensible a sesgos \
habituales (catastrofismo, filtraje negativo, sobregeneralización), de modo que el **cuestionamiento \
guiado** y los **experimentos conductuales** funcionan como ‘filtros’ que depuran inferencias \
desalineadas con la evidencia. En trastornos de ansiedad, por ejemplo, aprender a demorar la \
conclusión (“¿qué datos faltan?”) ya modifica la operación inferencial; en depresión, la activación \
conductual provee datos que reequilibran predicciones pesimistas y evitan que la memoria recupere \
sólo fracasos. La clave metodológica es describir técnicamente cada operación implicada en una \
tarea: qué observa el paciente, qué anota, con qué señales se guía y cómo valida el resultado. \
Así, la terapia deja de depender de insight inespecífico y adopta la forma de un sistema \
instruccional que moldea operaciones concretas al servicio de metas clínicamente valiosas. :contentReference[oaicite:7]{index=7}",
            },
            {
              type: "paragraph",
              text: "Para intervenir sobre operaciones cognitivas conviene distinguir **errores de proceso** (p. ej., \
atención dispersa, codificación superficial) de **errores de producto** (conclusiones sesgadas). Los \
primeros se abordan con micro-diseño instruccional: instrucciones de un paso, alternancia \
explicar-hacer, resúmenes breves y feedback inmediato. Los segundos requieren procedimientos \
de validación: listas de evidencias a favor/en contra, reformulación de hipótesis, comparación de \
predicción vs. resultado. En ambos casos, la **práctica deliberada** —ensayos breves, criterio de \
maestría definido y consolidación— garantiza que lo aprendido esté disponible cuando se necesita. \
Además, la dosificación importa: tareas demasiado complejas colapsan la atención y favorecen \
atajos heurísticos, mientras que tareas demasiado simples no mueven la aguja clínica. Por ello, \
se escala progresivamente: del análisis de un único pensamiento automático a experimentos \
conductuales con variación de contextos, siempre con medición sensible (frecuencia, duración, \
latencia). Finalmente, se anota explícitamente qué operación mejoró (p. ej., “ahora identifica \
alternativas antes de concluir”), para mantener trazabilidad entre técnica y resultado y para \
facilitar tanto la supervisión como la autoevaluación del paciente.",
            },

            // Acordeón — Operaciones y errores frecuentes
            {
              type: "accordion",
              header: "Operaciones frecuentes y sus ‘atascos’ típicos",
              open: false,
              items: [
                {
                  title: "Atención y codificación",
                  text: "Evitar multitarea, usar ayudas visuales y dividir tareas complejas en micro-pasos.",
                },
                {
                  title: "Inferencia y predicción",
                  text: "Contrastar hipótesis con datos; demorar conclusiones; registrar resultados reales.",
                },
                {
                  title: "Recuperación y aplicación",
                  text: "Ensayar sin ayudas; variar contexto; checklist de primeros auxilios cognitivos.",
                },
              ],
              text: "",
            },

            // Lista — Técnicas prácticas por operación
            {
              type: "list",
              style: "bullets",
              items: [
                "Cuestionamiento guiado (preguntas ‘qué datos faltan’ / ‘qué alternativa es igual de plausible’).",
                "Experimentos conductuales (predicción vs. realidad) con criterios de maestría.",
                "Resúmenes escritos y tarjetas de autoinstrucciones para recuperación en contexto.",
              ],
              text: "",
            },

            // Imagen
            {
              type: "image",
              src: "https://www.researchgate.net/publication/272686736/figure/fig1/AS:391897261592590@1470446996816/FIGURA-1-Jerarquia-de-los-Procesos-Cognitivos-propuestos-por-Margarita-Amestoy-de.png",
              alt: "Mapa de sesgos cognitivos (Cognitive Bias Codex)",
              caption:
                "Operaciones e inferencias: recordar los sesgos más comunes ayuda a diseñar tareas que los compensen.",
              text: "",
            },
          ],
        },

        {
          id: "3.7",
          numbering: "3.7",
          title: "Estructuras cognitivas de Biran",
          content: [
            {
              type: "paragraph",
              text: "Bajo la rúbrica ‘estructuras cognitivas de Biran’ —tal como aparece en el programa de la unidad— \
se agrupa el análisis de niveles de organización del conocimiento personal que orientan la \
interpretación y la acción: desde esquemas nucleares (supuestos globales sobre uno mismo, los \
demás y el futuro) hasta reglas intermedias (‘si… entonces…’) y guías situacionales \
(pensamientos automáticos, autoinstrucciones). La utilidad clínica de distinguir niveles no es \
nominalista: cada nivel requiere **evidencias** y **procedimientos** distintos para cambiar. En los \
esquemas nucleares, la estrategia se apoya en paquetes de evidencia acumulativa y experiencias \
de contradicción vivida (p. ej., desempeño competente en tareas con exposición social que \
rebatirían “no valgo”), mientras que en reglas intermedias se trabaja con experimentos \
condicionales y análisis de costo/beneficio realista. A nivel de pensamientos automáticos, \
cuestionamiento guiado, reatribución y resolución de problemas ofrecen palancas rápidas. El \
mapa de estructuras también facilita rastrear ‘de dónde viene’ la persistencia de un patrón: quizá \
no es un ‘pensamiento negativo’, sino una regla perfeccionista que impone estándares \
inalcanzables y produce evitación reforzada. En formulación, etiquetar el nivel preciso evita \
eclecticismo: si identificas el cuello de botella en el esquema nuclear, ajustar sólo autoinstrucciones \
será insuficiente; si el problema es situacional y operativo, apuntar a reglas profundas puede \
sobredosificar la intervención. Esta gradación permite seleccionar **qué** cambiar, **con qué** \
procedimiento y **con qué evidencia** para producir impacto clínicamente relevante. :contentReference[oaicite:8]{index=8}",
            },
            {
              type: "paragraph",
              text: "Aplicado al día a día, trabajar con estructuras cognitivas implica tres tareas coordinadas. Primera, \
**evaluación jerárquica**: identificar indicadores que revelen el nivel implicado (lenguaje absolutista \
sugiere reglas rígidas; inferencias rápidas remiten a automáticos; descalificaciones globales \
apuntan a esquemas). Segunda, **alineación técnica**: si la rigidez está en reglas (‘no debo fallar’), \
los experimentos ‘suficientemente bueno’ y la exposición a la posibilidad de error con análisis \
funcional del resultado resultan idóneos; si el bloqueo es nuclear (‘soy incapaz’), conviene \
programar evidencias graduadas acumulativas y reforzamiento explícito del afrontamiento \
competente. Tercera, **consolidación**: práctica espaciada, variación de contextos y recuperación \
activa para que la nueva estructura sea más accesible cuando la situación lo demanda. Este \
enfoque evita discusiones interminables sobre contenido y traslada el esfuerzo a **funciones** \
(tarea que cambia conducta) y a **parámetros** (dosificación, ayudas, criterios de maestría). Así, el \
terapeuta gobierna por datos, el paciente entiende por qué cada ejercicio existe, y ambos pueden \
comprobar si la estructura objetivo realmente está cambiando.",
            },

            // Lista — Señales para ubicar el nivel estructural
            {
              type: "list",
              style: "bullets",
              items: [
                "Esquema nuclear: autodefiniciones globales (‘no valgo’, ‘soy un fracaso’) ante múltiples dominios.",
                "Reglas intermedias: condicionales rígidos (‘si no es perfecto, entonces es inútil’).",
                "Automáticos: inferencias rápidas ante situaciones específicas (‘se reirá de mí si hablo’).",
              ],
              text: "",
            },

            // Acordeón — Intervenciones por nivel
            {
              type: "accordion",
              header: "Intervenciones típicas por nivel estructural",
              open: false,
              items: [
                {
                  title: "Esquema nuclear",
                  text: "Paquetes de evidencia acumulativa, exposición a competencias, reforzamiento del afrontamiento.",
                },
                {
                  title: "Reglas intermedias",
                  text: "Experimentos ‘si… entonces…’, análisis costo/beneficio, flexibilización de estándares.",
                },
                {
                  title: "Automáticos",
                  text: "Cuestionamiento guiado, reatribución, resolución de problemas, autoinstrucciones.",
                },
              ],
              text: "",
            },

            // Imagen
            {
              type: "image",
              src: "https://www.researchgate.net/publication/329512564/figure/fig1/AS:719311471665152@1548508627531/Figura-3-Estructura-Cognitiva-Integradora.png",
              alt: "Mapa conceptual a modo de jerarquía de estructuras cognitivas",
              caption:
                "Esquemas, reglas y automáticos pueden representarse como jerarquías conectadas.",
              text: "",
            },
          ],
        },

        {
          id: "3.8",
          numbering: "3.8",
          title: "Terapia cognitiva-evolutiva de Mahoney",
          content: [
            {
              type: "paragraph",
              text: "La propuesta cognitiva-evolutiva de Michael Mahoney integra una mirada constructivista del \
desarrollo humano con procesos autorregulatorios y de organización del significado personal. Más \
que ‘corregir pensamientos’, plantea facilitar reorganizaciones en sistemas de significado que \
permitan un ajuste funcional sostenido. En esta perspectiva, el cambio terapéutico es un proceso \
evolutivo: períodos de estabilidad relativa, acumulación de discrepancias, desestabilización y \
reorganización en configuraciones más adaptativas. En la práctica, esto se traduce en trabajar con \
metas con valor personal, promover experiencias que desafíen reglas rígidas, legitimar la \
ambivalencia del cambio y acompañar transiciones sin forzar conclusiones prematuras. La \
relación terapéutica aporta un contexto seguro para experimentar nuevas narrativas de identidad y \
competencia. Aunque comparte con la terapia de Beck herramientas como la conceptualización \
funcional y los experimentos conductuales, Mahoney acentúa el carácter **procesual** y \
**desarrollativo** del cambio (cómo la persona aprende a organizar su experiencia), subrayando la \
necesidad de respetar ritmos y ciclos. Este encuadre es útil cuando la problemática rebasa \
hábitos aislados y compromete tramas identitarias amplias: ahí conviene graduar la intervención, \
sostener preguntas abiertas, documentar micro-evidencias de reorganización y utilizar tareas \
que favorezcan continuidad de sentido, más que únicamente reducción de síntomas. :contentReference[oaicite:9]{index=9}",
            },
            {
              type: "paragraph",
              text: "Operativamente, un itinerario cognitivo-evolutivo puede estructurarse en cuatro movimientos. \
(1) **Detección de discrepancias**: identificar tensiones entre reglas actuales y metas de valor \
personal (mapas de situación, escalas de coherencia). (2) **Movilización de recursos**: activar \
apoyos internos/externos y repertorios ya existentes (historia de éxitos, valores, relaciones clave). \
(3) **Experiencias de transición**: tareas diseñadas para explorar configuraciones alternativas de \
significado (experimentación conductual con foco en identidad y agencia, diarios dirigidos, \
narrativas preferidas), tolerando incertidumbre y ambivalencia. (4) **Reorganización y \
consolidación**: pautas para estabilizar nuevas configuraciones (práctica espaciada, rituales \
personales, revisión periódica de coherencia). A lo largo del proceso, se siguen indicadores de \
progreso sensibles al sentido —coherencia percibida, agencia— además de métricas \
conductuales. La toma de decisiones sigue siendo tecnológica: describir qué se hace, con qué \
parámetros, qué cambia y cómo se sostendrá. Este enfoque combina la precisión operativa de la \
TCC con el respeto a la complejidad del desarrollo personal, ofreciendo una vía robusta para \
problemas que involucran identidad, propósito y organización del proyecto vital.",
            },

            // Acordeón — Puntos clave del enfoque de Mahoney
            {
              type: "accordion",
              header: "Puntos clave del enfoque cognitivo-evolutivo (Mahoney)",
              open: false,
              items: [
                {
                  title: "Cambio como reorganización",
                  text: "De estabilidad → discrepancia → transición → nueva organización más ajustada.",
                },
                {
                  title: "Primacía del significado",
                  text: "Las técnicas sirven a metas con valor personal y a la coherencia identitaria.",
                },
                {
                  title: "Ritmo y proceso",
                  text: "Respetar tiempos, legitimar ambivalencia y acompañar ciclos de cambio.",
                },
              ],
              text: "",
            },

            // Lista — Tareas típicas en clave evolutiva
            {
              type: "list",
              style: "bullets",
              items: [
                "Diarios dirigidos sobre discrepancias (‘qué reglas chocan con mis metas’).",
                "Experimentos de rol/identidad en contextos seguros y luego en contextos naturales.",
                "Revisiones de coherencia (¿esta nueva pauta ‘encaja’ con mis valores y proyecto?).",
              ],
              text: "",
            },
          ],
        },

        /* 3.9 Terapia cognitiva de Beck + subapartados */
        {
          id: "3.9",
          numbering: "3.9",
          title: "Terapia cognitiva de Beck",
          content: [
            // Párrafo 1 — Origen, fundamentos y encuadre breve
            {
              type: "paragraph",
              text: "La terapia cognitiva de Beck emerge en el contexto de la revolución cognitiva, como una respuesta empíricamente orientada a las limitaciones explicativas del psicoanálisis. Su tesis de trabajo es operativa: lo que pensamos sobre las situaciones modula lo que sentimos y hacemos; por ello, la intervención apunta a identificar y modificar pensamientos automáticos, reglas intermedias y creencias centrales que sesgan la interpretación de la experiencia. El propio Beck reconoció dos influencias decisivas: la tradición mediacional (por ejemplo, el ABC de Ellis) y la práctica conductual (procedimientos descritos tecnológicamente, metas por sesión, tareas entre sesiones y medición de resultados). La propuesta de Beck evolucionó hacia la TCC y, en formatos breves, conserva la misma lógica estructurada con economía de medios: conceptualizar el caso, orientar al paciente en un lenguaje no técnico, fijar objetivos observables y desplegar un repertorio de técnicas que respetan la bidireccionalidad entre cognición, emoción y conducta. En síntesis, no es un conjunto de técnicas sueltas, sino un sistema decisional: cada procedimiento se elige por su función en el caso, se parametriza (qué, cuánto, cuándo, con qué ayudas) y se evalúa con indicadores sensibles al cambio (frecuencia, latencia, intensidad). Esta disciplina transforma la sesión en un taller de aprendizaje guiado, donde la evidencia generada por tareas y experimentos conductuales debilita reglas ineficaces y fortalece patrones más útiles, con transferencia a contextos naturales.",
            },

            // Lista 1 — Ideas fuerza (según el desarrollo de la unidad)
            {
              type: "list",
              style: "unordered",
              items: [
                "Fundador y consolidación: Aaron T. Beck; difusión y sistematización posterior (Judith Beck).",
                "Integración con conductual: terapeuta activo, metas por sesión, tareas, medición y replicabilidad.",
                "Formato breve (4–8 sesiones): agenda estable, foco en problemas de alto valor funcional.",
              ],
              text: "",
            },

            // Párrafo 2 — Estructura operativa (bCBT) y conceptualización de caso
            {
              type: "paragraph",
              text: "En su presentación breve, la TCC organiza el proceso en una secuencia estándar que alinea teoría, método y resultados. La pauta típica contempla: (1) orientación al paciente a la TCC (modelo teórico accesible, estructura y expectativas), (2) evaluación de preocupaciones y establecimiento de objetivos observables, (3) conceptualización de caso, y (4) entrenamiento en habilidades con práctica en vivo y tareas entre sesiones. Para conceptualizar, se inicia con inventarios y listados de problemas, se identifican pensamientos disfuncionales (equivalentes funcionales de las Ci) y se examinan disparadores y consecuencias conductuales mediante un ABC operante (no confundir con el ABC de Ellis). La hipótesis clínica integra lo cognitivo y lo conductual y desemboca en un plan de tratamiento colaborativo, con barreras y facilitadores explícitos. En las primeras sesiones se prioriza seleccionar objetivos alcanzables, descomponerlos en pasos semanales y parametrizar qué se hará fuera de sesión. La agenda de cada encuentro reserva los primeros minutos para delimitar temas, la mitad de la sesión para práctica guiada (p. ej., cuestionamiento socrático, role-play, ensayos conductuales) y el cierre para planificar tareas y reforzar la adherencia. La evaluación basada en resultados cruza indicadores del problema con medidas de proceso (uso autónomo de registros, cumplimiento de tareas, transferencia), asegurando trazabilidad y ajuste oportuno del plan.",
            },

            // Lista 2 — Bloques funcionales del trabajo con Beck (síntesis accionable)
            {
              type: "list",
              style: "ordered",
              items: [
                "Orientación y agenda: explicar el modelo TCC y acordar un foco acotado por sesión.",
                "Conceptualización: inventarios, listado de problemas, identificación de pensamientos y evaluación ABC operante.",
                "Objetivos y tareas: metas observables, criterios de maestría, barreras/facilitadores y seguimiento.",
                "Intervención: identificación y cuestionamiento de distorsiones, activación conductual, resolución de problemas, relajación y exposición.",
                "Cierre y mantenimiento: plan de recaída, sesiones de refuerzo y consolidación de repertorios útiles.",
              ],
              text: "",
            },

            // Video — Introducción a la TCC (divulgación)
            {
              type: "video",
              src: "https://www.youtube.com/embed/q6aAQgXauQw",
              title: "What is Cognitive Behavioral Therapy? (PsychHub)",
              text: "",
            },

            // Párrafo 3 — Técnicas nucleares y criterio de uso
            {
              type: "paragraph",
              text: "Las técnicas en Beck se seleccionan por su función en el caso y se combinan de forma parsimoniosa. En el componente cognitivo, la identificación de pensamientos automáticos y el cuestionamiento socrático se sustentan en registros que obligan a describir situación, evidencia a favor/en contra y alternativas; el objetivo no es ganar debates abstractos, sino producir nuevas predicciones y conductas más ajustadas. En el componente conductual, la activación y la exposición son palancas de alto impacto para derrotar la evitación y ampliar acceso al reforzamiento, con efectos en el estado de ánimo y la autoeficacia. La resolución de problemas estructura la toma de decisiones (p. ej., SOLVED), mientras que la relajación sirve como herramienta de autorregulación cuando la activación fisiológica interfiere con el desempeño. El cierre del tratamiento consolida habilidades y fija planes de mantenimiento con repasos y pruebas de generalización. Un principio rector gobierna todo el proceso: describir tecnológicamente qué se hace (parámetros, ayudas, criterios), por qué se hace (hipótesis funcional) y qué cambió (indicadores sensibles). Así, el terapeuta evita el eclecticismo y el alumno internaliza un patrón replicable: conceptualizar por función, intervenir con precisión y evaluar con datos.",
            },
          ],
          subthemes: [
            {
              id: "3.9.1",
              numbering: "3.9.1",
              title: "Introducción",
              content: [
                {
                  type: "paragraph",
                  text: "La terapia cognitiva de Beck se ubica en el cruce entre la revolución cognitiva y el afán por someter \
las hipótesis clínicas a comprobación empírica. Históricamente, se reconoce a Aaron T. Beck como su \
fundador principal y a Judith Beck como una de sus mayores sistematizadoras y difusoras contemporáneas; \
esta genealogía ayuda a entender el paso desde formulaciones iniciales hasta manuales de entrenamiento \
y guías de práctica actuales. La literatura de la unidad sitúa el surgimiento de la TCC a finales de los \
años sesenta o inicios de los setenta y subraya un punto terminológico relevante: la psicoterapia \
propuesta por Beck fue llamada originalmente ‘terapia cognitiva’, aunque posteriormente se usó como \
sinónimo de ‘terapia cognitivo-conductual’, reflejando su integración metodológica con procedimientos \
conductuales. En lo biográfico-intelectual, Beck se formó en psicoterapia psicoanalítica y, paradójicamente, \
fue su intento por validarla empíricamente lo que condujo al abandono de explicaciones que no cuadraban \
con los datos, abriendo la puerta a marcos cognitivos alternativos. En esta transición también pesaron \
influencias previas: la psicología de los constructos personales de George Kelly y el modelo ABC de Albert \
Ellis, que articularon con claridad la función mediacional de las creencias. Con estos mimbres, la terapia \
cognitiva adoptó un lenguaje accesible para el paciente, una relación colaborativa y una estructura \
técnica precisa (agenda, tareas, evaluación), todo ello en un marco que concibe emoción y conducta \
como moduladas por la interpretación de la experiencia y por reglas que pueden ponerse a prueba en \
situación. Este encuadre inaugura la lógica que desarrollarás en los apartados de técnicas y aplicación. :contentReference[oaicite:9]{index=9} :contentReference[oaicite:10]{index=10} :contentReference[oaicite:11]{index=11} :contentReference[oaicite:12]{index=12}",
                },

                {
                  type: "accordion",
                  header: "Hitos para ubicar la propuesta de Beck",
                  open: false,
                  items: [
                    {
                      title: "Del psicoanálisis al giro empírico",
                      text: "La búsqueda de validación empírica llevó a Beck a abandonar explicaciones que no encajaban con los datos y a formular hipótesis cognitivas contrastables.",
                    },
                    {
                      title: "De TC a TCC: una integración operativa",
                      text: "El término ‘terapia cognitivo-conductual’ refleja la incorporación de procedimientos conductuales a una teoría cognitiva del malestar.",
                    },
                    {
                      title: "Influencias reconocidas",
                      text: "Kelly (constructos personales) y Ellis (ABC) aportaron marcos mediacionales que facilitaron la organización técnica de la intervención.",
                    },
                  ],
                  text: "",
                },

                {
                  type: "paragraph",
                  text: "En su maduración, la propuesta de Beck no se define por una lista de ‘técnicas’, sino por un sistema \
decisional que elige procedimientos por su función en el caso y los describe con precisión tecnológica. \
Aquí cobra sentido la influencia de la terapia conductual sobre la estructura del tratamiento: participación \
activa del terapeuta, operacionalización de procedimientos, metas por sesión, tareas entre sesiones y \
medición tanto de variables mediacionales (cognitivas) como de resultados clínicos. El propio Beck \
destaca que, aunque la teoría se centra en procesos intrapsíquicos, el modo de intervenir se parece a la \
terapia conductual; este equilibrio explica la robustez del enfoque y su rápida transferencia a contextos \
reales. Otra derivada crucial es la consolidación de formatos breves de TCC (bCBT): reducir el número \
promedio de sesiones sin perder estructura exige foco en problemas de alto valor funcional, práctica en \
vivo y criterios de maestría bien definidos. En esta unidad, y siguiendo esas pautas, la organización de \
las sesiones partirá de una orientación clara, una conceptualización que integre disparadores, \
pensamientos, conductas y consecuencias, y un plan colaborativo sometido a evaluación continua. El \
resultado es una ingeniería clínica sobria: describir qué se hará (parámetros), por qué (hipótesis \
funcional) y cómo se comprobará el cambio (indicadores sensibles) para asegurar relevancia, \
replicabilidad y generalización. :contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14} :contentReference[oaicite:15]{index=15} :contentReference[oaicite:16]{index=16}",
                },

                {
                  type: "accordion",
                  header: "Implicaciones prácticas para tu quehacer clínico",
                  open: false,
                  items: [
                    {
                      title: "Estructura y colaboración",
                      text: "Agenda, metas observables, práctica en vivo y tareas son el esqueleto operativo; la relación terapéutica funciona como contexto de aprendizaje.",
                    },
                    {
                      title: "Medición y trazabilidad",
                      text: "Cruza indicadores del problema con medidas de proceso (uso autónomo de registros, adherencia) para ajustar decisiones en tiempo real.",
                    },
                    {
                      title: "Economía de medios (formato breve)",
                      text: "Selecciona objetivos de alto valor funcional; define criterios de maestría y diseña tareas con recuperación activa y variación de contextos.",
                    },
                  ],
                  text: "",
                },
              ],
            },
            {
              id: "3.9.2",
              numbering: "3.9.2",
              title: "Técnicas",
              content: [
                // Párrafo 1 — Núcleo cognitivo: identificación, cuestionamiento y registro
                {
                  type: "paragraph",
                  text: "En la terapia cognitiva de Beck, el bloque técnico cognitivo gira en torno a tres acciones \
estructuradas: identificar pensamientos automáticos, someterlos a cuestionamiento guiado y \
registrar la nueva evidencia para consolidar alternativas más ajustadas. Tras detectar los \
pensamientos disfuncionales (equivalentes funcionales de las ‘Ci’), el terapeuta entrena al \
paciente en el **cuestionamiento socrático**: una secuencia de preguntas que lleva a examinar qué \
datos apoyan la creencia, qué datos la contradicen y qué otras interpretaciones compiten por el \
significado de la situación. Este proceso no busca ‘debatir’ en abstracto, sino producir hipótesis \
contrastables que se prueban dentro y fuera de sesión. El **registro del pensamiento** es el \
andamiaje de esa práctica: anota situación, pensamiento, emoción con intensidad, evidencia a \
favor y en contra, y formula un pensamiento alternativo; al cierre se recalifica el estado de ánimo \
para verificar cambios. Esta disciplina convierte un evento cotidiano en un ensayo de aprendizaje, \
disminuye la reactividad emocional y crea huellas recuperables en contextos naturales. Didácticamente, \
el terapeuta controla la carga de trabajo (instrucciones breves, un paso por vez), modela la \
búsqueda de evidencia y pide recuperación activa (el paciente explica con sus palabras el ‘por qué’ \
y el ‘cómo’). Con ello se alinea la técnica con los límites de memoria y atención, y se evita la \
discusión circular. La clave es mantener la trazabilidad: qué se examinó, qué evidencia apareció, \
qué alternativa se ensayó y qué cambió en emoción y conducta al aplicar la nueva regla. :contentReference[oaicite:9]{index=9} :contentReference[oaicite:10]{index=10}",
                },

                // Acordeón 1 — Pautas operativas para cuestionamiento y registro
                {
                  type: "accordion",
                  header: "Guía práctica: cuestionamiento socrático y registro",
                  open: false,
                  items: [
                    {
                      title: "Secuencia mínima de preguntas",
                      text: "¿Qué sucedió? ¿Qué pensé? ¿Qué emoción sentí y cuán intensa fue? ¿Qué evidencia apoya/no apoya el pensamiento? ¿Cuál es una alternativa plausible?",
                    },
                    {
                      title: "Criterios de buena práctica",
                      text: "Lenguaje concreto, ejemplos recientes, una sola creencia por ensayo, verificación inmediata del cambio en emoción/conducta.",
                    },
                    {
                      title: "Errores frecuentes y solución",
                      text: "Debate abstracto (volver a datos), registros muy largos (reducir pasos), alternativas genéricas (anclar a situación y conducta objetivo).",
                    },
                  ],
                  text: "",
                },

                // Párrafo 2 — Paquete conductual y selección por función
                {
                  type: "paragraph",
                  text: "El componente conductual provee palancas de alto impacto que se seleccionan por su función en el caso \
y se parametrizan con claridad. La **activación conductual** incrementa el acceso a reforzamiento programando \
actividades valiosas para revertir evitación, mejorar el estado de ánimo y restablecer agencia; es uno de los \
pilares de la TCC y se integra pronto al plan de tratamiento. A ello se suman **resolución de problemas** \
(estructura para decidir y ejecutar pasos factibles), **relajación** (cuando la activación fisiológica interfiere) \
y **exposición** (respondiente y/o operante) para romper el círculo evitativo y recalibrar predicciones \
catastróficas. En formato breve, estas técnicas se introducen tras la conceptualización y el establecimiento de \
objetivos, y se revisitan iterativamente a lo largo de 4–8 sesiones. La dosificación importa: definir ensayos, \
ayudas y criterios de maestría; anticipar barreras logísticas o creenciales; y medir con indicadores sensibles \
(frecuencia, duración, latencia, intensidad de emoción) para ajustar el plan con evidencia. El objetivo no es \
aplicar ‘todo el menú’, sino elegir la herramienta más parsimoniosa que resuelva el cuello de botella funcional \
del caso (evitación, déficit de habilidades, sesgo inferencial). Así, la técnica se convierte en un sistema \
instruccional replicable: describir qué se hará (parámetros), por qué (hipótesis) y qué cambió (datos), \
enlazando cognición, emoción y conducta en una misma secuencia de aprendizaje. :contentReference[oaicite:11]{index=11} :contentReference[oaicite:12]{index=12}",
                },

                // Acordeón 2 — Implementación en TCC breve (4–8 sesiones)
                {
                  type: "accordion",
                  header: "Implementación en formato breve: qué, cuándo y cómo",
                  open: false,
                  items: [
                    {
                      title: "Momento de introducción",
                      text: "Tras orientar al paciente y fijar objetivos observables, iniciar con identificación de pensamientos + activación; añadir resolución de problemas/relajación/exposición según función.",
                    },
                    {
                      title: "Parámetros esenciales",
                      text: "Ensayos definidos, ayudas y desvanecimiento, práctica en vivo, tareas con criterios de maestría, revisión de barreras y facilitadores.",
                    },
                    {
                      title: "Seguimiento y ajuste",
                      text: "Indicadores del problema + medidas de proceso (uso de registros, adherencia). Reevaluar objetivos y refinar técnicas a mitad del plan.",
                    },
                  ],
                  text: "",
                },
              ],
            },
            {
              id: "3.9.3",
              numbering: "3.9.3",
              title: "Aplicación",
              content: [
                // Párrafo 1 — Lineamiento operativo de sesión y tareas iniciales
                {
                  type: "paragraph",
                  text: "Aplicar la terapia cognitiva de Beck en formato breve exige gobernanza por datos y una \
secuencia de sesión estable. El itinerario recomendado comienza con la **orientación** al paciente \
(en lenguaje no técnico) sobre el modelo TCC, estructura y expectativas —esto corrige creencias \
erróneas sobre ‘aconsejamiento’ o ‘charla’ y prepara el terreno para el trabajo activo— y continúa \
con la **conceptualización funcional** de los problemas: identificación de disparadores y \
consecuencias usando el **ABC operante** (no confundir con el ABC de Ellis), y mapeo de \
pensamientos disfuncionales vinculados a respuesta emocional y conductual. A partir de esa \
información, terapeuta y paciente **acuerdan un plan de tratamiento** colaborativo con metas \
observables y alcanzables, explorando **barreras** logísticas o de creencias para asegurar \
adherencia. Las tareas tempranas refuerzan la alianza de trabajo: registrar dudas sobre el proceso, \
aplicar el diagrama del modelo TCC en situaciones reales de la semana y elaborar breves listas de \
‘lo que funcionó’ / ‘lo que se mejoraría’, de modo que la sesión siguiente arranque con datos \
útiles. En esta fase, el uso del ABC y de registros explícitos mejora la precisión de la hipótesis y \
acorta la ruta hacia intervenciones potentes (activación, resolución de problemas, exposición). \
Criterio clave: la agenda por sesión limita objetivos y protege la **práctica en vivo**, garantizando \
tiempo para modelado, ensayo y planificación de tareas con **criterios de maestría** claros. :contentReference[oaicite:11]{index=11} :contentReference[oaicite:12]{index=12} :contentReference[oaicite:13]{index=13}",
                },

                // Acordeón 1 — Flujo de trabajo en sesión TCC breve
                {
                  type: "accordion",
                  header: "Flujo de trabajo por sesión (formato breve)",
                  open: false,
                  items: [
                    {
                      title: "Apertura (3–5 min)",
                      text: "Revisar estado y adherencia; acordar agenda; aclarar dudas sobre tareas y objetivos de la sesión.",
                    },
                    {
                      title: "Trabajo guiado (25–35 min)",
                      text: "Aplicar ABC operante y registros; práctica en vivo (cuestionamiento, activación, exposición); ajustar hipótesis por datos.",
                    },
                    {
                      title: "Cierre y tareas (5–10 min)",
                      text: "Sintetizar hallazgos; asignar tareas con criterios de maestría; anticipar barreras y plan de apoyo.",
                    },
                  ],
                  text: "",
                },

                // Imagen — Ciclo PDCA como metáfora de iteración clínica
                {
                  type: "image",
                  src: "https://safetyculture.com/_next/image/?url=https%3A%2F%2Fwp-website.safetyculture.com%2Fwp-content%2Fuploads%2Fsites%2F3%2F2023%2F12%2FEl-ciclo-PDCA.png&w=1200&q=75",
                  alt: "Ciclo PDCA: planificar–hacer–verificar–actuar, como metáfora del ajuste iterativo en TCC",
                  caption:
                    "La aplicación clínica se beneficia de ciclos breves: planificar la intervención, ejecutarla, medir y ajustar.",
                  text: "",
                },

                // Párrafo 2 — Objetivos, evaluación y ajuste continuo
                {
                  type: "paragraph",
                  text: "Los **objetivos** deben derivarse de preocupaciones con alto valor funcional y definirse de manera \
operacional (conductas observables, criterios de logro, contexto). Se recomienda establecerlos al \
final de la primera o segunda sesión, comenzando por alguna **meta rápidamente alcanzable** para \
elevar autoeficacia y compromiso, y descomponer cada objetivo general en **pasos semanales** \
(‘análisis de tarea’) con seguimiento explícito. La **evaluación de resultados** cruza indicadores del \
problema (frecuencia, intensidad, latencia) con **medidas de proceso** (uso autónomo de registros, \
adherencia a tareas, transferencia a contextos naturales). En medio del plan se reevalúan metas y \
se recalibran técnicas según evidencia; al cierre se documenta mantenimiento y prevención de \
recaídas. Este ciclo se sostiene pidiendo **retroalimentación continua** al paciente y explorando \
barreras potenciales (costos, traslado, creencias, apoyos), para diseñar ayudas específicas y \
asegurar continuidad. La práctica instruccional recomienda micro-pasos, ayudas externas \
(desvanecibles) y recuperación activa sin apoyos al final de cada sesión. Cuando el **ABC operante** \
muestra que la evitación mantiene el problema, se priorizan activación y exposición con métricas \
claras; si el cuello de botella es inferencial, se refuerzan registros y cuestionamiento guiado. Así, \
‘aplicación’ no es un recetario, sino una disciplina iterativa de decisiones por función, parámetros \
claros y medición sensible al cambio clínico. :contentReference[oaicite:14]{index=14} :contentReference[oaicite:15]{index=15} :contentReference[oaicite:16]{index=16} :contentReference[oaicite:17]{index=17}",
                },

                // Acordeón 2 — Implementación práctica: objetivos, tareas y adherencia
                {
                  type: "accordion",
                  header:
                    "Implementación práctica (objetivos, tareas, adherencia)",
                  open: false,
                  items: [
                    {
                      title: "Formulación de objetivos",
                      text: "Observables, medibles y alcanzables; fijarlos al final de la sesión 1–2; empezar con una meta fácil para ganar momentum; descomponer en pasos semanales. :contentReference[oaicite:18]{index=18}",
                    },
                    {
                      title: "Diseño de tareas",
                      text: "Instrucciones simples; práctica en vivo; criterios de maestría y variación de contextos; retroalimentación al inicio de la siguiente sesión. :contentReference[oaicite:19]{index=19}",
                    },
                    {
                      title: "Gestión de barreras",
                      text: "Explorar logística, creencias y soporte social; pactar ayudas y revisar adherencia semanal con indicadores de proceso. :contentReference[oaicite:20]{index=20}",
                    },
                  ],
                  text: "",
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
          href: "https://www.youtube.com/watch?v=xwgpDbIJP9o&ab_channel=ObjetividadyPsicolog%C3%ADa", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Conversatorio — Mtra. Scarlet Espinoza: del Modelo Cognitivo-Conductual al Análisis de Conducta https://www.youtube.com/watch?v=xwgpDbIJP9o&ab_channel=ObjetividadyPsicolog%C3%ADa",
            "Entrevista — Dr. Marino Pérez Álvarez: Modas, Mitos e Ideologías en la Psicología https://www.youtube.com/watch?v=KVUBdH6IS6I&t=227s&ab_channel=ObjetividadyPsicolog%C3%ADa",
            "The Home of Cognitive Behavior Therapy and Recovery-Oriented Cognitive Therapy (Beck Institute) https://beckinstitute.org/",
            "The evidence for cognitive behavioural therapy in any condition, population or context: a meta-review of systematic reviews and panoramic meta-analysis https://pubmed.ncbi.nlm.nih.gov/33455594/",
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
            "Beck, A. (2005). The Current State of Cognitive Therapy: A 40-Year Retrospective. *Archives of General Psychiatry*, 62, 953–959.",
            "Beck, J. (2011). *Cognitive Behavior Therapy: Basics and Beyond*. New York: The Guilford Press.",
            "Cully, J., Dawson, D., Hamer, J., & Tharp, A. (2021). *A Provider’s Guide to Brief Cognitive Behavioral Therapy*. Department of Veterans Affairs, South Central MIRECC.",
            "Froxán, M. (2020). *Análisis funcional de la conducta humana: Concepto, metodología y aplicaciones*. Madrid: Pirámide.",
            "Pérez, M. (2014). *Las terapias de tercera generación como terapias contextuales*. Madrid: Síntesis.",
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
