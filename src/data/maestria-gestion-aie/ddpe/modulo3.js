/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAIE", // Maestría en Gestión y Administración de Instituciones Educativas
  courseId: "DDPE", // Diseño y desarrollo de proyectos educativos
  id: "DDPE-modulo3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Diseño y desarrollo de proyectos educativos",
  title: "Módulo 3. Comunicación y divulgación del proyecto",
  semestre: "Tercer semestre",
  teacher: "Dr. Jesús Agustín Zapata Velázquez",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Reconocer la importancia del liderazgo educativo en la puesta en marcha de un proyecto de mejora y dimensionar la relevancia de la comunicación efectiva; identificar los elementos clave para comunicar y dar seguimiento a la creación y puesta en marcha de un proyecto dentro de una institución educativa.",
  competencies: [
    "Dimensiona la importancia de la comunicación dentro de un proyecto de mejora.",
    "Conoce las estrategias adecuadas para dar a conocer un proyecto de mejora educativo.",
    "Domina métodos y herramientas necesarios para la divulgación y comunicación de un proyecto.",
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
      numbering: "Unidad 3",
      title: "Comunicación y divulgación del proyecto", // :contentReference[oaicite:0]{index=0}
      content: [
        {
          type: "paragraph",
          text: "Comunicar y divulgar un proyecto educativo no es un adorno: es el sistema circulatorio que mantiene vivo el proceso de mejora. La evidencia institucional muestra que el impacto de un proyecto depende, en gran medida, de las acciones deliberadas de comunicación y difusión que acompañan su arranque, su seguimiento y su cierre. Cuando estas acciones se diseñan como parte de la planificación estratégica —con objetivos, responsabilidades y momentos claros— la comunidad entiende el para qué, el cómo y el avance real del plan, lo que eleva la legitimidad de las decisiones y habilita correcciones a tiempo. A la inversa, la comunicación reactiva o improvisada tiende a fragmentar los esfuerzos y a erosionar la confianza. En esta unidad situaremos la comunicación como eje de gobernanza del proyecto: definiremos propósitos, audiencias, mensajes clave y canales; organizaremos los hitos informativos y explicitaremos criterios para documentar la retroalimentación. La meta no es “informar por informar”, sino sostener la ejecución y la evaluación con datos compartidos, trazabilidad y sentido de corresponsabilidad pedagógica. :contentReference[oaicite:0]{index=0}",
        },
        {
          type: "paragraph",
          text: "Partimos de una noción rigurosa de comunicación: acción de transmitir mensajes entre emisores y receptores mediante un código compartido y con una finalidad específica. Este fundamento ayuda a distinguir una buena práctica comunicativa de un mero intercambio de avisos. En el ámbito escolar, la comunicación ha acompañado históricamente las funciones de la institución; sin embargo, la consolidación de modelos de gestión moderna acentuó su papel estratégico: puede conducir tanto al éxito como al fracaso de una organización. Por ello, comunicamos con intención: clarificar el propósito del proyecto, alinear expectativas, transparentar avances y abrir espacios de diálogo que mejoren decisiones. Este enfoque evita dos riesgos frecuentes: reducir la comunicación a trámites administrativos o confundirla con propaganda. Lo que buscamos es precisión conceptual, pertinencia pedagógica y utilidad operativa, con mensajes comprensibles para cada actor y mecanismos de verificación del entendimiento. Con este piso conceptual, podremos elegir métodos y herramientas congruentes con la cultura institucional y con los resultados esperados. :contentReference[oaicite:1]{index=1}",
        },

        /* Acordeón de 3 niveles */
        {
          type: "accordion",
          header: "Propósito y alcance",
          open: false,
          text: "Antes de comunicar, define el porqué: ¿qué problema atiende el proyecto y qué cambio espera lograr? Ese propósito guía todo el diseño comunicativo. Luego, concreta el alcance con tres preguntas rectoras: ¿por qué comunicar?, ¿a quién comunicar? y ¿cuándo comunicar? La primera vincula mensajes con metas; la segunda segmenta audiencias (docentes, directivos, estudiantes, familias, aliados) según su rol en la implementación; la tercera establece una cadencia con hitos (presentación, seguimientos periódicos, cierre). Este tríptico evita la dispersión, porque cada acción informativa queda atada a un objetivo verificable y a un momento del ciclo del proyecto. Finalmente, documenta los acuerdos de cada hito y los compromisos asociados; esa trazabilidad es clave para corregir a tiempo y para evaluar con honestidad. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "accordion",
          header: "Audiencias y mensajes",
          open: false,
          text: "En la escuela conviven múltiples circuitos comunicativos. Diferencia con claridad entre comunicación interna (al interior de la institución) y externa (con familias, autoridades y comunidad). Distingue también registros formal e informal, así como modalidades escrita, oral y digital. Cada audiencia requiere un mensaje útil y un tono pertinente: al profesorado le interesan criterios técnicos y operativos; a las familias, propósitos, beneficios y calendarios; a los estudiantes, lo que cambia en su experiencia de aprendizaje. Evita mensajes genéricos: traduce el mismo avance a lenguajes distintos sin perder coherencia. Para asegurar comprensión, especifica el canal, el responsable y el instrumento de verificación del entendimiento (acta, minuta, confirmación de lectura o breve retroalimentación). Esta segmentación incrementa la relevancia del mensaje y reduce el ruido organizacional. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "accordion",
          header: "Momentos y canales",
          open: false,
          text: "Institucionaliza una línea de tiempo comunicativa: 1) presentación pública del proyecto una vez definidos diagnóstico, FODA, objetivos y metas; 2) reuniones de información calendarizadas para seguimiento; 3) cortes periódicos mediante informes o reportes; 4) informe final con balance de resultados. Complementa con canales adecuados a tu contexto (plenarios, pizarrón de avisos, correo, web, redes, boletines). Cada momento debe generar evidencia: minutas, tableros de avance y acuerdos accionables. La constancia en la cadencia es tan importante como el contenido: sostener la conversación mantiene el proyecto visible, permite celebrar logros intermedios y activa a tiempo las medidas correctivas. :contentReference[oaicite:4]{index=4}",
        },

        {
          type: "paragraph",
          text: "En el ámbito educativo, la investigación suele focalizar la comunicación didáctica dentro del aula; no obstante, la comunicación organizacional sigue menos explorada y, paradójicamente, es decisiva para orquestar proyectos de mejora que trascienden cursos y ciclos. Aquí la retroalimentación es la bisagra: escuchar y devolver información de manera continua permite comprender necesidades reales de los actores, detectar efectos no previstos y ajustar el plan sin perder dirección. La retroalimentación no debe ser un canal unidireccional desde la coordinación hacia los equipos, sino un intercambio entre pares y con la comunidad, donde la práctica reflexiva sostenga el aprendizaje institucional. Este enfoque exige asertividad: escuchar, sintetizar argumentos, deliberar y acordar rutas de acción, manteniendo el respeto y la claridad de roles. Con estas condiciones, la comunicación se convierte en capital social que multiplica la capacidad de ejecución del proyecto. :contentReference[oaicite:5]{index=5}",
        },
        {
          type: "paragraph",
          text: "Operativamente, conviene anclar la comunicación a instrumentos simples y periódicos: reuniones de información con orden del día y acuerdos; informes semanales que consolida la coordinación para tener ‘foto de avance’; reportes mensuales más analíticos que alimentan decisiones en los plenarios; e informe final que integra evidencias, resultados y lecciones aprendidas. Estos formatos no son burocracia si están bien diseñados: cada uno cumple una función distinta en el ciclo de planeación–seguimiento–evaluación, y todos deben dejar registro accesible. Su valor radica en crear hábitos de transparencia, consistencia de datos y memoria institucional, condiciones indispensables para sostener procesos de mejora en el tiempo y replicarlos con mayor eficiencia en proyectos futuros. :contentReference[oaicite:6]{index=6}",
        },
      ],

      /* → Subtemas de primer nivel (según 'Contenido temático de la unidad') */
      subthemes: [
        {
          id: "1.1",
          numbering: "3.1",
          title: "Alcance de la comunicación y divulgación del proyecto",
          content: [
            {
              type: "paragraph",
              text: "Definir el alcance de la comunicación y la divulgación del proyecto implica responder con precisión por qué, a quién, cuándo y cómo se informará cada avance, decisión y resultado. La comunicación cumple una función estratégica: alinea expectativas, legitima la intervención ante la comunidad y habilita correcciones a tiempo. Por ello, exige objetivos claros (informar, implicar, solicitar retroalimentación, rendir cuentas) y criterios de éxito verificables (por ejemplo, comprensión del mensaje por parte del profesorado y familias, oportuna asistencia a reuniones, adopción de acuerdos). La pregunta axial —¿para qué comunicamos?— evita que la comunicación derive en trámites rutinarios o en propaganda. Desde el primer día se establece una arquitectura mínima: responsables, calendario y evidencia de cada hito (actas, minutas, tableros, repositorios). Asimismo, se delimitan audiencias y canales, reconociendo que no todos los mensajes requieren la misma profundidad ni el mismo nivel de detalle. Un arranque bien diseñado produce entendimiento compartido del problema, de las metas y de los indicadores que medirán el avance; una ruta de seguimiento sostenida traduce el plan en hábitos de conversación informada y de toma de decisiones colegiada. En síntesis, el alcance fija bordes y prioridades: ayuda a decidir qué decir, a quién, con qué tono, cada cuánto y con qué propósito evaluable.",
            },
            {
              type: "paragraph",
              text: "A la hora de segmentar audiencias, conviene distinguir comunicación interna (docentes, directivos, personal de apoyo y estudiantes) y externa (familias, autoridades, aliados comunitarios). Internamente, el profesorado demanda mensajes técnicos-operativos: criterios de intervención, cronograma, instrumentos de evaluación, riesgos y mitigaciones. La dirección requiere vistas de conjunto y semáforos de avance; el personal de apoyo, instrucciones logísticas; el alumnado, cambios en su experiencia de aprendizaje y cómo participar. En el plano externo, las familias y aliados necesitan comprender propósito, beneficios, tiempos y vías de participación. Además de la segmentación por actor, hay que considerar el nivel de formalidad: mensajes formales (minutas, informes, memorándums) generan compromiso y trazabilidad; los informales (anuncios en reuniones breves, recordatorios) sostienen el pulso cotidiano. La variedad de registros —oral, escrito, digital— permite adaptar el mensaje al contexto y a la alfabetización informacional de cada grupo. Finalmente, la comunicación bidireccional es clave: tan relevante como informar es recoger retroalimentación y evidenciar cómo se incorpora a las decisiones. De otro modo, el proceso se percibe unidireccional y pierde legitimidad.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Propósito, audiencias y momentos clave",
              open: false,
              text: "El propósito orienta el diseño comunicativo (informar, implicar, rendir cuentas). Las audiencias se clasifican en internas (docentes, directivos, personal, estudiantes) y externas (familias, autoridades, aliados), y cada una demanda profundidad, tono y canal distintos. Los momentos clave estructuran la cadencia: presentación pública del proyecto, seguimientos periódicos con datos, cortes de reporte y cierre con balance de resultados y lecciones aprendidas. Cada momento deja evidencia y acuerdos accionables.",
            },

            {
              type: "paragraph",
              text: "La línea de tiempo comunicativa ancla el proyecto a una cadencia inteligible. En la fase de presentación se sintetizan diagnóstico, FODA, objetivos, metas e indicadores, explicitando roles y responsabilidades. Después, los seguimientos periódicos mantienen la visibilidad del plan y permiten identificar desviaciones a tiempo; su foco son datos y acuerdos, no discursos. Los cortes de reporte —semanales para coordinación, mensuales para claustro, trimestrales para comunidad— crean una narrativa acumulativa del avance. Finalmente, el cierre integra evidencias de proceso y de resultado, balancea logros y pendientes, y documenta aprendizajes transferibles. Esta temporalidad ordena la conversación y evita improvisaciones costosas. Si el contexto cambia (por ejemplo, contingencias sanitarias o presupuestales), la cadencia se ajusta con actas: se reprograman hitos, se recalibran metas y se comunica el porqué del cambio. Lo esencial es preservar la trazabilidad para sostener la confianza.",
            },

            /* Imagen intercalada */
            {
              type: "image",
              src: "https://concepto.de/wp-content/uploads/2019/12/elementos-de-la-comunicacion.jpg",
              alt: "Esquema del proceso de comunicación: emisor, mensaje, canal, receptor y retroalimentación",
              caption:
                "Proceso de comunicación con retroalimentación en ciclos de proyecto.",
            },

            {
              type: "paragraph",
              text: "La claridad del mensaje es condición de eficacia. Cada comunicación debe explicitar: qué cambió o cambiará, por qué es importante, qué se espera de cada actor y cómo se verificará el avance. Para ello, conviene emplear plantillas breves: ‘propósito’, ‘público objetivo’, ‘mensaje clave’, ‘canal’, ‘responsable’, ‘evidencia’, ‘fecha’ y ‘próximos pasos’. En piezas más extensas (informes o reportes), el resumen ejecutivo facilita la comprensión de directivos y familias con poco tiempo. Evita tecnicismos innecesarios; cuando sean imprescindibles, acompáñalos de glosarios o ejemplos. La consistencia visual (encabezados, tablas, gráficas simples) mejora la legibilidad y disminuye la carga cognitiva del lector. Finalmente, define un mecanismo de verificación de entendimiento —confirmación de lectura, breve encuesta, micro-actividad— para cerrar el circuito comunicativo y detectar malentendidos antes de que afecten la implementación.",
            },
            {
              type: "paragraph",
              text: "La cultura organizacional condiciona el alcance real de la comunicación. En escuelas con historial de comunicación vertical, la participación suele ser baja y los rumores suplen la información formal; en contextos de alta rotación o sobrecarga administrativa, los mensajes extensos se pierden. Por ello, es indispensable un diagnóstico cultural de arranque (hábitos comunicativos, canales preferidos, ritmos del calendario escolar) y una estrategia de transición que combine acciones de alto impacto (presentación pública) con rutinas de mantenimiento (boletines breves, tablones actualizados, recordatorios). La coherencia entre lo que se dice y lo que se hace construye credibilidad. Si se prometen espacios de escucha, estos deben traducirse en decisiones visibles y en devoluciones explícitas: qué se recogió, qué se cambiará y qué no (con razones). La confianza es la moneda de cambio de todo proyecto, y se acumula —o se erosiona— comunicación a comunicación.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Trazabilidad y rendición de cuentas",
              open: false,
              text: "Cada hito comunicativo debe dejar rastro: acta con acuerdos, tablero de indicadores, repositorio de materiales y evidencias de comprensión. La rendición de cuentas no es un evento aislado, sino una secuencia de micro-informes que muestran evolución y decisiones. Esta trazabilidad protege al proyecto, facilita auditorías internas y externas, y crea memoria institucional para futuros ciclos de mejora.",
            },

            {
              type: "paragraph",
              text: "Finalmente, el alcance se evalúa periódicamente. Indicadores simples —porcentaje de asistencia a reuniones, tasa de lectura de boletines, tiempos de respuesta, nivel de comprensión medido con ítems muy breves— permiten refinar mensajes y canales. La escucha activa (preguntas abiertas, foros, buzones) alimenta la mejora continua. Si los datos muestran fatiga informativa, se simplifica la frecuencia y se priorizan comunicados críticos; si revelan desalineación, se reitera el propósito con nuevos formatos. Comunicar bien no es hacer más ruido, sino dotar al proyecto de un sistema de información útil para decidir mejor y aprender juntos.",
            },
          ],
          subthemes: [],
        },
        {
          id: "1.2",
          numbering: "3.2",
          title: "Métodos y herramientas",
          content: [
            {
              type: "paragraph",
              text: "La comunicación efectiva se sostiene en métodos y herramientas que estandarizan la práctica y la hacen evaluable. El primer método es la planificación comunicativa: una matriz que vincula objetivos, audiencias, mensajes, canales, responsables, evidencias y calendario. Este instrumento evita improvisaciones y permite coordinar equipos. El segundo método es la comunicación por capas: piezas breves y frecuentes (recordatorios, micro-reportes) que mantienen el pulso; y piezas de profundidad (informes mensuales, plenarios) donde se analizan datos y se toman decisiones. El tercero es la retroalimentación estructurada: mecanismos para recoger, sintetizar y devolver opiniones de docentes, estudiantes y familias. El cuarto es la documentación viva: repositorios accesibles con versiones de documentos, minutas y tableros. Al integrar estos métodos, la comunicación pasa de ser un conjunto de acciones aisladas a un sistema de gestión que respalda la ejecución del proyecto y facilita su evaluación formativa y sumativa.",
            },
            {
              type: "paragraph",
              text: "En cuanto a herramientas, combina analógicas y digitales según contexto y accesibilidad. Para coordinación interna, documentos compartidos y hojas de cálculo permiten tableros de indicadores y actas colaborativas. Correo institucional y mensajería formal canalizan convocatorias y acuerdos; gestores de proyectos (o un Gantt sencillo) ordenan tareas y dependencias. Para comunicación externa, boletines electrónicos y carteles físicos aseguran cobertura; formularios en línea recogen retroalimentación sin fricción. En entornos con brecha digital, prioriza pizarrones informativos, reuniones presenciales y comunicados impresos; la clave es que el canal llegue a quien debe llegar. Antes de adoptar nuevas plataformas, define el caso de uso y quién las administrará; las herramientas son medios, no fines. Minimiza la proliferación de canales: pocos, bien operados y con reglas claras de uso producen mejores resultados que un ecosistema disperso.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Plantillas y tableros mínimos",
              open: false,
              text: "Opera con un kit ligero: (1) plantilla de comunicado (propósito, público, mensaje clave, canal, responsable, evidencia, fecha, próximos pasos); (2) minuta de reunión con acuerdos, responsables y vencimientos; (3) tablero de indicadores con objetivos, línea base, meta, frecuencia y estatus; (4) registro de riesgos con dueño y umbrales; y (5) repositorio con control de versiones. Con estos básicos, la comunicación gana consistencia y auditabilidad.",
            },

            {
              type: "paragraph",
              text: "Los formatos de seguimiento definen la calidad de la conversación. Las reuniones de información requieren orden del día, control de tiempos y foco en datos; los informes semanales consolidan avances y bloqueos para la coordinación; los reportes mensuales articulan narrativa de progreso con visualizaciones simples; y el informe final documenta resultados y lecciones aprendidas. Cada formato tiene un dueño y una audiencia. Para sostener la práctica, establece una cadencia fija (por ejemplo, semanal para coordinación, mensual para claustro, trimestral para comunidad) y un reloj común (calendario compartido con recordatorios). La evaluación de los formatos se hace con métricas de uso (asistencia, aperturas, tiempos de lectura) y con encuestas breves de utilidad percibida. La meta es iterar hasta hallar el punto de equilibrio entre claridad, frecuencia y carga de trabajo.",
            },

            /* Imagen intercalada */
            {
              type: "image",
              src: "https://marketplace.canva.com/EAGR2Hv-wSE/1/0/1600w/canva-gr%C3%A1fico-diagrama-de-gantt-profesional-multicolor-wPGirrtELhU.jpg",
              alt: "Diagrama de Gantt como herramienta de comunicación y seguimiento",
              caption:
                "El Gantt ayuda a comunicar dependencias, hitos y responsables.",
            },

            {
              type: "paragraph",
              text: "La retroalimentación es la bisagra del sistema: convierte la comunicación en una conversación con consecuencias. Implementa circuitos sencillos: buzones físicos o digitales para sugerencias; mini-encuestas tras reuniones clave; y sesiones de escucha con guion breve para temas sensibles. La clave es cerrar el ciclo: sintetizar lo recibido, decidir qué se cambia y comunicarlo. Sin devolución, la participación se erosiona. Para gestionar la carga, usa muestreos razonables (no todo se consulta siempre a todos) y convoca a las personas pertinentes cuando su experiencia aporte valor. En ambientes de alta exposición (redes sociales), define reglas de moderación y responde con datos y serenidad; ante ataques o desinformación, centraliza vocería y documenta fuentes.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Buenas prácticas y errores a evitar",
              open: false,
              text: "Buenas prácticas: claridad, cadencia, evidencia y escucha. Evita: mensajes genéricos sin público objetivo; cambios no comunicados; exceso de canales; piezas largas sin resumen; y datos sin fuente. Documenta todo lo relevante y protege la privacidad. Si un canal no funciona, cámbialo; si un formato satura, simplifícalo. La comunicación es un sistema vivo: se ajusta con datos y se gobierna con reglas simples.",
            },

            {
              type: "paragraph",
              text: "Finalmente, la sostenibilidad comunicativa depende de distribuir liderazgo y cuidar el bienestar del equipo. Designa roles rotativos (quién convoca, quién modera, quién registra, quién publica), ofrece microcapacitaciones en redacción clara y visualización de datos, y automatiza recordatorios y plantillas. Integra un calendario escolar realista que respete periodos de alta carga docente y evalúa la conveniencia de ventanas asincrónicas para consultas. La calidad de la comunicación se refleja en la calidad de las decisiones: mensajes oportunos y comprensibles, sumados a evidencias confiables y espacios de escucha, elevan la probabilidad de éxito del proyecto y consolidan aprendizaje organizacional transferible a futuras iniciativas.",
            },
          ],
          subthemes: [],
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
          href: "https://www.youtube.com/watch?v=_g5nwkXDIWA", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Comunicación asertiva: Todo lo que DEBES saber https://www.youtube.com/watch?v=_g5nwkXDIWA",
            "La comunicación estratégica https://www.youtube.com/watch?v=cILjJV0j2F0",
            "Gestión de las comunicaciones del proyecto (PMBOK 6) https://www.youtube.com/watch?v=-M3SDufbT5A",
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
            "Coll, C. & Solé, I. (2020). *Currículum y evaluación en la educación obligatoria: Desafíos y perspectivas.* Barcelona: Editorial Graó.",
            "Perrenoud, P. (2019). *La evaluación de los alumnos: De la producción de la excelencia a la regulación de los aprendizajes.* Madrid: Editorial Morata.",
            "De Alba Ceballos, A. (2018). *Teoría curricular: Nuevas tendencias y perspectivas.* Ciudad de México: Siglo XXI Editores.",
            "Díaz Barriga, A. (2018). *Metodología de diseño curricular: Un enfoque centrado en competencias.* Ciudad de México: Editorial Trillas.",
            "Gimeno Sacristán, J. (2017). *El currículum: Una reflexión sobre la práctica.* Madrid: Ediciones Morata.",
            "Zabalza, M. Á. (2019). *Diseño y desarrollo curricular: Cómo planificar e implementar el currículo en la educación superior.* Madrid: Narcea Ediciones.",
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
