/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAIE", // :contentReference[oaicite:0]{index=0}
  courseId: "DDPE", // :contentReference[oaicite:1]{index=1}
  id: "DDPE-modulo4",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Diseño y desarrollo de proyectos educativos", // :contentReference[oaicite:2]{index=2}
  title: "Módulo 4. Seguimiento y evaluación del proyecto", // :contentReference[oaicite:3]{index=3}
  semestre: "Tercer semestre", // :contentReference[oaicite:4]{index=4}
  teacher: "Dr. Jesús Agustín Zapata Velázquez", // :contentReference[oaicite:5]{index=5}

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Identificar la importancia de la fase de seguimiento y evaluación para el logro del éxito del proyecto escolar de mejora.", // :contentReference[oaicite:6]{index=6}
  competencies: [
    "Identifica cómo dar seguimiento a un proyecto.", // :contentReference[oaicite:7]{index=7}
    "Conoce cómo evaluar un proyecto escolar.", // :contentReference[oaicite:8]{index=8}
    "Reconoce las habilidades que se deben de tener para ser un líder educativo.", // :contentReference[oaicite:9]{index=9}
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
      title: "Seguimiento y evaluación del proyecto", // :contentReference[oaicite:0]{index=0}
      content: [
        {
          type: "paragraph",
          text: "El seguimiento y la evaluación representan el tramo decisivo del ciclo de un proyecto educativo, porque convierten la intención en resultados verificables y los resultados en aprendizaje institucional. No son eventos aislados al final del proceso, sino prácticas sistemáticas que acompañan cada fase: planeación, implementación, ajuste y cierre. El seguimiento observa la ejecución cotidiana, detecta desvíos y documenta avances frente a los hitos planificados; la evaluación estima en qué medida se alcanzaron las metas, qué significado tienen los hallazgos y qué decisiones corresponde tomar. En ambos casos, la transparencia y la participación son mandatorias: la comunidad debe saber qué se medirá, con qué instrumentos y para qué fines. La distinción entre datos de proceso (actividades, entregables intermedios), de resultado (cambios observados) y de percepción (experiencia de actores) permite construir una mirada integral. Cuando estos componentes se articulan con claridad, el proyecto se protege de la improvisación, fortalece su legitimidad ante la comunidad e instala una cultura de mejora continua que trasciende a las personas. Evaluar, entonces, no es “examinar” a alguien, sino aprender juntos a decidir mejor.",
        },
        {
          type: "paragraph",
          text: "Operativamente, el sistema de seguimiento y evaluación se apoya en tres cimientos: una matriz de indicadores, una cadencia de reuniones con roles definidos y un repositorio de evidencias. La matriz alinea objetivos y metas con indicadores claros, cada uno con definición operacional, fuente, frecuencia, responsable y umbral de alerta. La cadencia —semanal para coordinación, mensual para claustro, trimestral para comunidad— evita tanto el activismo informativo sin datos como la parálisis por análisis; cada encuentro produce acuerdos y próximos pasos con responsable y fecha. El repositorio, por su parte, conserva minutas, instrumentos, bases y visualizaciones, con control de versiones y accesos adecuados para resguardar la privacidad. Este andamiaje ordena la conversación: ya no se discute desde impresiones, sino a partir de evidencias trianguladas (registros administrativos, observaciones, entrevistas). Cuando aparecen desviaciones, el equipo gana capacidad de reacción: reprograma actividades, reasigna recursos o ajusta estrategias, siempre documentando el porqué de los cambios y comunicándolos con lenguaje claro a las audiencias pertinentes.",
        },

        /* ── Acordeón 1 ── */
        {
          type: "accordion",
          header: "Propósito, audiencias y alcance",
          open: false,
          text: "El propósito del seguimiento y la evaluación es doble: sostener la ejecución con información útil y valorar el logro de metas con criterios explícitos. Su alcance se define según audiencias: interna (docentes, directivos, personal de apoyo, estudiantes) y externa (familias, autoridades, aliados). A cada público, un mensaje pertinente: operativo para quien implementa; estratégico para quien decide; comprensible y conciso para la comunidad. Delimitar alcances evita sobrecargar al equipo y focaliza la recolección de datos en lo que efectivamente informa decisiones.",
        },

        {
          type: "paragraph",
          text: "La calidad del dato determina la calidad de la decisión. Por ello, cada indicador debe formularse con precisión: qué mide (constructo), cómo se calcula (fórmula), con qué instrumento se obtiene (rúbrica, lista de cotejo, registro), quién lo reporta y con qué frecuencia. La línea base —obtenida del diagnóstico— permite estimar la magnitud del cambio; la meta define el valor esperado al cierre. La triangulación entre fuentes cuantitativas y cualitativas refuerza la validez y revela matices que un único método podría ocultar. También es clave anticipar sesgos (efecto de novedad, deseabilidad social) y riesgos operativos (baja tasa de respuesta, rotación de personal), estableciendo medidas de mitigación. Éticamente, la regla es proteger la privacidad y evitar usos punitivos de la información: el foco está en la mejora, no en la sanción. Finalmente, toda visualización debe ser parsimoniosa: tablas simples y gráficos legibles que ayuden a pensar, no a impresionar.",
        },

        /* ── Acordeón 2 ── */
        {
          type: "accordion",
          header: "Indicadores mínimos y evidencia",
          open: false,
          text: "Con un kit breve se puede gobernar bien: 3–5 indicadores de proceso (cumplimiento de cronograma, asistencia, uso de recursos), 2–3 de resultado (logros de aprendizaje o calidad de servicio) y 1–2 de percepción (satisfacción, clima). Cada valor debe rastrearse a evidencias disponibles y auditables. Si el costo de obtención supera el beneficio informativo, el indicador no es pertinente para la fase.",
        },

        {
          type: "paragraph",
          text: "El liderazgo educativo es el catalizador del sistema: distribuye responsabilidades, cuida el tiempo del equipo y convierte hallazgos en decisiones oportunas. Un comité de seguimiento pequeño y competente —coordinación, datos, documentación, comunicación— crea ritmo y protege el foco del proyecto. Su tarea no es “producir informes” sino sostener una conversación inteligente con la evidencia. Para lograrlo, necesita protocolos de reunión: orden del día con propósito, notas enviadas con antelación, acuerdos accionables y revisión explícita de compromisos previos. La comunicación externa requiere otro registro: mensajes breves y comprensibles sobre qué se observó, qué se decidió y qué ocurrirá a continuación. La legitimidad se construye cuando la comunidad percibe coherencia entre discurso y práctica, cuando las promesas se traducen en mejoras visibles y cuando los ajustes se explican con honestidad.",
        },

        /* ── Acordeón 3 ── */
        {
          type: "accordion",
          header: "Riesgos y mitigaciones frecuentes",
          open: false,
          text: "Riesgos típicos: metas vagas, indicadores sin instrumento, mediciones intermitentes, exceso de canales, informes sin decisiones y ‘fatiga de datos’. Mitigaciones: objetivos SMART, fichas de indicador, cadencia fija, repositorio único, plantillas de informe con sección obligatoria de acuerdos y responsables, y pausas de higiene informativa cuando el calendario escolar está en pico de carga.",
        },

        {
          type: "paragraph",
          text: "El cierre evaluativo no es un punto final, sino un punto de inflexión. El informe de cierre integra resultados, explica variaciones, reconoce esfuerzos, registra lecciones aprendidas y propone rutas para el siguiente ciclo. La mirada debe ir más allá del promedio: observar brechas entre grupos y efectos diferenciales para evitar que los éxitos aparentes oculten rezagos. Cuando una acción demostró efectividad, se documenta con detalle para su escalamiento; cuando no lo hizo, se valora si requiere rediseño, mayor soporte o reemplazo. En ambos casos, la institucionalización es clave: manuales vivos, repositorios ordenados y procesos de inducción aseguran que el capital del proyecto no se pierda con la rotación. Así, el seguimiento y la evaluación cumplen su promesa: sostener decisiones justas, transparentes y orientadas al aprendizaje de todos.",
        },
      ],
      /* → Subtemas de primer nivel (según el PDF) */
      subthemes: [
        {
          id: "1.1",
          numbering: "4.1",
          title: "Importancia del seguimiento y la evaluación",
          content: [
            {
              type: "paragraph",
              text: "El seguimiento y la evaluación constituyen el sistema nervioso del proyecto educativo: conectan la intención con la evidencia y la evidencia con la toma de decisiones. Entendidos como procesos —no como eventos—, proveen información oportuna sobre la implementación, los resultados y el sentido de las acciones emprendidas. El seguimiento observa la marcha cotidiana de las actividades (cumplimiento de cronograma, uso de recursos, desempeño de responsables), mientras que la evaluación emite juicios de valor sobre el logro de metas y su pertinencia para el contexto. En conjunto, posibilitan correcciones a tiempo, previenen derivas burocráticas y fortalecen la confianza de la comunidad. Concebirlos como prácticas participativas es crucial: cuando docentes, directivos, estudiantes y familias comprenden qué se mide, cómo se mide y para qué, el proyecto se vuelve un esfuerzo compartido y transparente. Esta unidad sitúa el seguimiento y la evaluación en el centro de la mejora institucional: su finalidad no es ‘auditar para sancionar’, sino aprender para decidir mejor, documentar logros y visibilizar aquello que aún requiere apoyo. La cultura de datos que proponemos combina rigor y sentido pedagógico: medir lo que importa, con instrumentos adecuados y sin sobrecargar al profesorado; leer los hallazgos como hipótesis para la acción; y cerrar siempre el ciclo con devolución clara a los actores involucrados.",
              // :contentReference[oaicite:0]{index=0}
            },
            {
              type: "paragraph",
              text: "Distinguir con precisión seguimiento y evaluación evita malentendidos organizacionales. El seguimiento es continuo, describe el ‘cómo vamos’: recoge insumos, actividades y productos intermedios, y compara el avance con los hitos planificados. La evaluación, en cambio, es periódica y valora el ‘qué logramos y qué significa’: contrasta metas con línea base, analiza efectos esperados e imprevistos, y formula recomendaciones. Ambos requieren indicadores claros. Los de proceso observan ejecución (p. ej., porcentaje de sesiones realizadas según plan, tiempo de respuesta a incidencias); los de resultado cuantifican cambios en aprendizajes o servicios (p. ej., variación en niveles de comprensión lectora); los de percepción capturan experiencia de usuarios y actores (p. ej., satisfacción de familias). Sin un andamiaje mínimo —definición operacional del indicador, fuente, frecuencia, responsable y umbral—, la conversación se desliza hacia opiniones. Por eso, el diseño de seguimiento y evaluación empieza con preguntas guía (‘¿cómo sabremos que avanzamos?’, ‘¿cómo sabremos que valió la pena?’) y se concreta en una matriz que alinea objetivos, metas e indicadores con decisiones posibles (ajustar estrategia, reasignar recursos, escalar una práctica exitosa).",
              // :contentReference[oaicite:1]{index=1}
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Principios operativos del S&E",
              open: false,
              text: "Cinco principios sostienen un buen sistema de seguimiento y evaluación (S&E): (1) Participación informada: los actores conocen qué se mide y cómo se usarán los datos; (2) Pertinencia: se miden variables que dialogan con metas y decisiones posibles; (3) Proporcionalidad: pocos indicadores, bien definidos y medibles con costo razonable; (4) Ética y cuidado: anonimato cuando corresponda, uso no punitivo, devolución clara; (5) Mejora continua: todo hallazgo conduce a una decisión explícita y documentada.",
            },

            {
              type: "paragraph",
              text: "La calidad de los datos determina la calidad de las decisiones. Por ello, conviene especificar para cada indicador: definición (qué significa exactamente), método de obtención (instrumento y procedimiento), criterios de validez y confiabilidad, frecuencia de medición, y responsable del registro. La triangulación —cruzar fuentes cuantitativas (bases administrativas, pruebas) y cualitativas (observaciones, entrevistas)— reduce sesgos y potencia la comprensión del fenómeno. Un tablero de control con semáforos facilita lecturas rápidas para la coordinación, pero siempre debe estar anclado a un archivo de evidencias que permita auditar el dato y comprender su contexto. Igualmente, es prudente anticipar márgenes de incertidumbre (p. ej., cohortes pequeñas) y evitar inferencias que excedan lo que puede concluirse. Evaluar con seriedad implica también reconocer límites: hay resultados dependientes de condiciones externas (infraestructura pública, entorno socioeconómico) que deben consignarse como supuestos, no como fallas del equipo. Así se mantiene la honestidad intelectual y se protege la motivación colectiva.",
              // :contentReference[oaicite:2]{index=2}
            },

            /* Imagen intercalada */
            {
              type: "image",
              src: "https://midias-blog-mkt.s3.amazonaws.com/uploads/2024/08/es-ciclo-pdca-1.png",
              alt: "Ciclo PDCA como marco para seguimiento y evaluación",
              caption:
                "Planear–Hacer–Verificar–Actuar: disciplina de revisión y ajuste periódico.",
            },

            {
              type: "paragraph",
              text: "El gobierno del S&E requiere estructura. Una práctica eficaz es conformar un pequeño comité de seguimiento con roles definidos: coordinación (convoca, sintetiza, propone decisiones), indicadores (depura y valida datos), documentación (resguarda evidencias y versiones) y comunicación (prepara devoluciones para audiencias internas y externas). La cadencia recomendada: micro-reportes semanales para coordinación operativa; reportes mensuales con análisis y acuerdos; y cortes trimestrales para comunidad, centrados en resultados y lecciones. Cada reunión debe dejar acta con acuerdos, responsables y fechas, que alimenta el repositorio del proyecto. Cuando emerjan desalineaciones, el comité activa rutas de ajuste: redefinir actividades, reasignar recursos, ampliar apoyos o pausar frentes de baja rentabilidad. Esta gobernanza de ritmo corto protege el proyecto del ‘activismo comunicacional’ (mucho ruido, poca evidencia) y de la parálisis por análisis.",
              // :contentReference[oaicite:3]{index=3}
            },
            {
              type: "paragraph",
              text: "El S&E es también una práctica de equidad. Los promedios pueden esconder rezagos en subpoblaciones (p. ej., estudiantes con NEE, grupos por turno). Por ello, desagregar indicadores por criterios relevantes y observar brechas es una obligación técnica y ética. Más aún, conviene incluir indicadores de experiencia (clima, percepción de apoyo) que den voz a quienes suelen quedar fuera de la conversación. La evaluación con enfoque de derechos privilegia el aprendizaje institucional sobre la sanción: no se trata de ‘encontrar culpables’, sino de ‘encontrar causas’ y ‘acordar remedios’. Esa perspectiva cambia el tono de las reuniones, anima la intervención de quienes conocen el aula y convierte los datos en palancas de cambio. Así, el S&E se vuelve un dispositivo de cuidado profesional, capaz de reconocer esfuerzos, celebrar avances —aunque sean incrementales— y sostener la energía del equipo para el siguiente tramo.",
              // :contentReference[oaicite:4]{index=4}
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "De los datos a las decisiones",
              open: false,
              text: "Disciplina mínima: cada hallazgo relevante debe desembocar en (a) una interpretación compartida, (b) una decisión, (c) un responsable y (d) un plazo. Si falta cualquiera de esas piezas, el dato se convierte en anécdota. Documentar la ‘línea de decisiones’ (qué cambió, por qué y con qué resultado) crea memoria institucional y fortalece la rendición de cuentas.",
            },

            {
              type: "paragraph",
              text: "Comunicar resultados con claridad cierra el circuito del S&E. La comunidad necesita conocer en lenguaje llano qué se observó, qué se decidió y qué se hará a continuación. Informes con resumen ejecutivo, gráficos simples y foco en implicaciones operativas maximizan la utilidad. En canales externos (familias, aliados), elige piezas breves y visuales; en espacios técnicos (claustro, dirección), entrega anexos con detalle metodológico y matrices de indicadores. La transparencia responsable exige proteger datos personales y evitar comparaciones estigmatizantes entre grupos o docentes. Cuando el proyecto logre metas, comparte historias de práctica que expliquen cómo se consiguió; cuando no, explica con honestidad qué aprendió el equipo y cómo se reorientará. El sentido de la evaluación es generar confianza informada: una comunidad que entiende el porqué y el cómo de las decisiones acompañará mejor los esfuerzos de mejora.",
              // :contentReference[oaicite:5]{index=5}
            },
          ],
          subthemes: [],
        },
        {
          id: "1.2",
          numbering: "4.2",
          title: "Liderazgo educativo",
          content: [
            {
              type: "paragraph",
              text: "El liderazgo educativo es la palanca que hace posible el seguimiento y la evaluación con sentido. Lejos de un rol carismático centrado en la figura del directivo, hablamos de una capacidad institucional para orientar, coordinar y cuidar el trabajo colectivo. Un liderazgo eficaz define una visión clara —centrada en el derecho a aprender—, instala rutinas de seguimiento, y convierte la evidencia en decisiones, sin perder de vista el bienestar del equipo. Implica distribuir responsabilidades, sostener conversaciones difíciles con respeto y gobernar los ritmos del proyecto para evitar la fatiga. En contextos de alta complejidad, liderar es priorizar: decir qué sí y qué no se hará, con qué recursos y en qué tiempos. También es crear condiciones: tiempo protegido para el trabajo colegiado, acceso a datos legibles, acompañamiento pedagógico y canales de retroalimentación. La legitimidad del liderazgo se construye demostrando coherencia entre lo que se pide y lo que se posibilita; entre la exigencia por resultados y el soporte para alcanzarlos.",
              // :contentReference[oaicite:6]{index=6}
            },
            {
              type: "paragraph",
              text: "Funciones clave del líder en proyectos escolares: establecer metas y expectativas compartidas; articular un plan estratégico con indicadores; cuidar la implementación (personas, procesos, recursos); promover desarrollo profesional docente; y rendir cuentas ante la comunidad. En la práctica, estas funciones se traducen en micro-acciones: clarificar criterios de éxito antes de iniciar, dar seguimiento con tableros y minutas, reconocer avances, intervenir cuando hay cuellos de botella y modelar el uso formativo de la evaluación. La comunicación es su herramienta estructural: mensajes claros, consistentes y oportunos que eviten rumores y orienten esfuerzos. Para sostener equipos diversos, el líder combina escucha activa con dirección firme: permite deliberación informada y, a la vez, cierra con acuerdos operables. La autoridad no proviene del cargo, sino de la competencia demostrada para convertir problemas en decisiones y decisiones en mejoras visibles en el aula.",
              // :contentReference[oaicite:7]{index=7}
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Cuatro ejes para un liderazgo eficaz",
              open: false,
              text: "1) (Re)definir responsabilidades: foco en apoyo a la calidad docente, metas y evaluación, administración estratégica de recursos y redes de colaboración. 2) Distribuir liderazgo: delegar con claridad, empoderar equipos y acompañar la toma de decisiones. 3) Desarrollar capacidades: trayectoria formativa coherente y pertinente para la función directiva. 4) Hacer atractiva la profesión: condiciones de selección, incentivos y reconocimiento que favorezcan la sostenibilidad del rol. (Síntesis inspirada en recomendaciones internacionales sobre liderazgo escolar).",
            },

            {
              type: "paragraph",
              text: "El liderazgo distribuido supera la lógica del ‘héroe solitario’. En lugar de concentrar decisiones, reparte responsabilidades con reglas claras: quién convoca, quién modera, quién registra acuerdos, quién valida evidencias y quién comunica. Así se crean ‘centros de competencia’ (p. ej., evaluación, recursos, convivencia) que aceleran respuestas y elevan la calidad técnica. La distribución no es fragmentación si existe una visión compartida, una agenda priorizada y rutinas que alinean esfuerzos (reuniones breves, tableros, actas). La figura directiva se vuelve arquitecta de condiciones: protege tiempos, arbitra conflictos, enlaza apoyos externos y cuida el clima laboral. Cuando la presión aumenta, el liderazgo distribuido amortigua sobrecargas y evita cuellos de botella. Lo central es cultivar confianza: dar autonomía con acompañamiento y pedir cuentas con justicia.",
              // :contentReference[oaicite:8]{index=8}
            },

            /* Imagen intercalada */
            {
              type: "image",
              src: "https://www.cetys.mx/educon/wp-content/uploads/2021/03/5278-scaled.jpg",
              alt: "Representación conceptual de liderazgo y coordinación de equipos",
              caption:
                "Liderar es coordinar propósito, personas, procesos y evidencias.",
            },

            {
              type: "paragraph",
              text: "Competencias críticas del líder escolar en clave de evaluación: alfabetización de datos (saber leer indicadores, preguntar por supuestos y límites), gestión del cambio (diagnosticar barreras, planear transiciones, comunicar riesgos), negociación (equilibrar intereses y recursos), y facilitación (estructurar reuniones productivas). A esto se suma el cuidado del tiempo: bloquear ventanas para trabajo colegiado y seguimiento, evitar reuniones sin propósito y proteger periodos críticos del calendario escolar. El liderazgo, además, debe ser pedagógico: observar aulas, ofrecer retroalimentación respetuosa y conectar las decisiones de gestión con su impacto en los aprendizajes. La coherencia entre discurso y práctica del líder da sentido a la exigencia por resultados y ancla la cultura de evaluación en la ética del cuidado del trabajo docente.",
              // :contentReference[oaicite:9]{index=9}
            },
            {
              type: "paragraph",
              text: "Conducir procesos de cambio implica gestionar emociones y expectativas. Toda innovación altera rutinas y distribuciones de poder; por eso, el líder explicita razones, reconoce esfuerzos y estructura espacios donde se pueda disentir sin miedo. Las resistencias no se ‘aplastan’; se comprenden y se encauzan con datos, pilotos acotados y victorias tempranas. En paralelo, se cuidan las condiciones de trabajo: cargas equilibradas, apoyos puntuales, acceso a materiales y acompañamiento cuando hay dificultades. Liderar también es poner límites: decir ‘no’ a iniciativas que diluyen el foco, y ‘todavía no’ a aquellas que requieren madurar. En tiempos de crisis, el liderazgo sereno y basado en evidencia brinda un marco de estabilidad que permite avanzar sin perder el norte pedagógico.",
              // :contentReference[oaicite:10]{index=10}
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Protocolos de reunión y decisión",
              open: false,
              text: "Para elevar la productividad: orden del día con propósito y tiempos; documentos de base enviados con antelación; roles (quién modera, quién registra, quién presenta datos); acuerdos con responsable y vencimiento; y seguimiento explícito en la reunión siguiente. Las decisiones se anclan en evidencias y se comunican con claridad a las audiencias pertinentes.",
            },

            {
              type: "paragraph",
              text: "La sostenibilidad del liderazgo se juega en el relevo y la institucionalización. Diseñar sucesión (formar subcoordinaciones, rotar roles), documentar procesos (manuales vivos, repositorios) y consolidar comunidades profesionales de aprendizaje crea una estructura que trasciende a las personas. Hacia afuera, el líder teje alianzas con otras escuelas, universidades y organizaciones para intercambiar saberes y acceder a apoyos. Hacia adentro, instala una ética de rendición de cuentas formativa: se rinde cuentas para aprender, no para castigar. Cuando el proyecto cierra, el liderazgo cuida el ‘después’: balance de resultados, lecciones aprendidas y acuerdos para el siguiente ciclo, de modo que el capital construido no se disipe. Así, el liderazgo deja de ser atributo individual y se convierte en una capacidad organizacional sostenible.",
              // :contentReference[oaicite:11]{index=11}
            },
          ],
          subthemes: [],
        },
        {
          id: "1.3",
          numbering: "4.3",
          title: "El seguimiento y la supervisión",
          content: [
            {
              type: "paragraph",
              text: "El seguimiento y la supervisión constituyen el andamiaje operativo que conecta la planificación con la ejecución real del proyecto. Siguiendo el espíritu del módulo, no se entienden como un control punitivo, sino como una práctica de acompañamiento profesional que documenta cómo avanzan las acciones, con qué calidad se realizan y qué efectos van logrando en la comunidad escolar. Supervisar es verificar, pero también apoyar: exige observar evidencias, contrastarlas con los compromisos del plan y activar apoyos concretos cuando aparecen cuellos de botella. De ahí que el primer acto de supervisión sea clarificar responsabilidades y tiempos: quién captura información, quién valida, quién analiza y quién comunica. Al diseñar el sistema conviene definir rutas de información simples y estables (quién reporta a quién, con qué formato y periodicidad) y una arquitectura mínima de decisiones (qué umbrales gatillan un ajuste y cuál es el protocolo para proponerlo). Cuando la supervisión se institucionaliza con criterios explícitos y trato respetuoso, se reduce la incertidumbre, se previenen improvisaciones costosas y se fortalece la confianza en el proyecto: todos conocen qué se espera, cómo se medirá y qué pasará con los hallazgos, trasladando la conversación desde las opiniones hacia la evidencia y el aprendizaje compartido. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "Una forma eficaz de organizar la supervisión es constituir un comité pequeño con funciones diferenciadas: coordinación (convoca, integra y propone decisiones), indicadores (depura, valida y mantiene actualizados los tableros), documentación (resguarda actas, instrumentos y bases con control de versiones) y comunicación (prepara devoluciones para audiencias internas y externas). Este comité precisa un mapa de procesos: qué actividades se observarán, con qué instrumentos (lista de cotejo, rúbrica, bitácora de aula, registro de asistencia), en qué momentos del calendario escolar y bajo qué criterios de calidad (validez, confiabilidad, oportunidad, ética). Para evitar sobrecarga, se recomienda empezar con un conjunto esencial de indicadores de proceso (cumplimiento de cronograma, uso de recursos, asistencia a sesiones), de resultado (cambios observables en aprendizaje o servicio) y de percepción (experiencia de usuarios), anclados a fuentes de datos existentes. La supervisión profesional no interrumpe el trabajo: lo hace visible y comprensible, reduce el ruido organizacional y convierte el monitoreo en una rutina de cuidado del proyecto.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Ruta operativa de S&E: tres pasos",
              open: false,
              text: "1) Recolección de información: definir insumos, instrumentos, responsables y ventanas de levantamiento para que el equipo se prepare y no se improvise. 2) Medición y evaluación de resultados: contrastar lo observado con metas y línea base para estimar logros y entender las variaciones. 3) Propuestas de corrección: cuando haga falta, acordar ajustes con recursos, responsables y fechas de revisión, documentando siempre el porqué del cambio y cómo se comunicará a la comunidad. :contentReference[oaicite:1]{index=1}",
            },

            {
              type: "paragraph",
              text: "El valor de la supervisión depende de la calidad de los datos y de la disciplina para leerlos. Por ello, cada indicador debe contar con una ficha técnica que precise definición operacional, fórmula de cálculo (si aplica), fuente primaria, frecuencia de actualización, responsable y umbral de alerta. Un tablero con semáforos facilita el diagnóstico rápido en coordinación, pero siempre debe estar respaldado por un repositorio auditable con evidencias (instrumentos, bases y notas de campo) que permitan comprender el contexto. La triangulación—cruzar registros administrativos, observaciones y entrevistas breves—reduce sesgos y ofrece una imagen más rica de la implementación. Además, la supervisión debe reconocer límites y supuestos (por ejemplo, rotación de personal o contingencias externas) y consignarlos en las actas para evitar lecturas injustas de los resultados. Esta honestidad técnica preserva la motivación y favorece decisiones proporcionadas al problema.",
            },

            /* Imagen intercalada */
            {
              type: "image",
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfholKGAGrvZleB0KoVwh8YXoym19WgF9B0g&s",
              alt: "Ciclo de mejora continua aplicado a seguimiento y supervisión",
              caption:
                "Ciclo de mejora: planear, ejecutar, observar (supervisar), ajustar.",
            },

            {
              type: "paragraph",
              text: "La supervisión efectiva cuida a las personas tanto como a los procesos. Por eso, los hallazgos se devuelven con claridad y respeto, centrándose en evidencias y en apoyo concreto—no en culpabilizar. Reuniones breves de retroalimentación, con un guion simple (qué se observó, qué significa, qué se decide, próximos pasos), evitan la fatiga y sostienen el foco. La transparencia responsable implica proteger datos personales, registrar acuerdos accionables y comunicar a cada audiencia el nivel de detalle pertinente: operativo para quien implementa; estratégico para quien decide; sintético y comprensible para la comunidad. Cuando el equipo percibe que la supervisión sirve para resolver problemas reales y no para acumular reportes, aumenta la cooperación, mejora la calidad del registro y se acelera el tiempo de respuesta ante desvíos operativos.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Comité de supervisión: composición y protocolos",
              open: false,
              text: "Composición sugerida: coordinación, datos, documentación y comunicación. Protocolos mínimos: calendario común, orden del día con propósito, materiales previos, acta con acuerdos (responsable y fecha), revisión de compromisos y reglas de escalamiento. Criterios: proporcionalidad (pocos indicadores, útiles), ética (uso no punitivo), trazabilidad (evidencias auditables) y mejora continua (cada hallazgo conduce a una decisión).",
            },

            {
              type: "paragraph",
              text: "Finalmente, la supervisión madura cuando alimenta el aprendizaje institucional: cada ciclo produce ‘líneas de decisión’ que registran qué se cambió, por qué y con qué resultado. Esas líneas nutren un repositorio vivo donde las estrategias exitosas quedan listas para escalarse y las que no funcionaron, para rediseñarse. La sistematicidad convierte la experiencia en conocimiento transferible a futuros proyectos; la coherencia entre datos, decisiones y comunicación, en capital social que preserva la confianza de la comunidad. Con este enfoque, supervisar deja de ser sinónimo de fiscalizar y pasa a ser un acto de liderazgo pedagógico que protege el tiempo docente, ordena la conversación y maximiza las probabilidades de logro. :contentReference[oaicite:2]{index=2}",
            },
          ],
          subthemes: [],
        },
        {
          id: "1.4",
          numbering: "4.4",
          title: "Evaluación final del proyecto",
          content: [
            {
              type: "paragraph",
              text: "La evaluación final es el punto de inflexión que transforma la experiencia de implementación en conocimiento útil para decidir: continuar, escalar, rediseñar o cerrar. En la línea de lo planteado en el módulo, su propósito no es sancionar sino comprender; no es acumular datos sino producir juicio de valor con criterios explícitos. La literatura citada la define como un proceso sistemático y riguroso de recogida y análisis de información para emitir juicios y fundamentar decisiones, lo que exige contrastar los resultados observados con la línea base y con las metas comprometidas, examinar efectos no previstos y extraer lecciones transferibles. Al tratarse del ‘cierre’ del ciclo, la evaluación final debe ser clara en su alcance (qué valora y qué no), prudente en sus inferencias (qué puede concluirse con la evidencia disponible) y honesta en la comunicación de incertidumbres y límites. Así, la institución honra la transparencia, cuida la motivación del equipo y establece una cultura de mejora basada en evidencias y no en impresiones. :contentReference[oaicite:3]{index=3}",
            },
            {
              type: "paragraph",
              text: "Para asegurar rigor y utilidad, conviene fijar criterios y categorías de valoración antes de levantar los últimos datos. Las categorías sugeridas en el material—coevaluación y autoevaluación—aportan miradas complementarias: la primera convoca al equipo a juzgar colectivamente logros e impactos con base en criterios compartidos; la segunda promueve reflexión personal sobre las propias contribuciones, aprendizajes y áreas de mejora. Junto con ellas, la heteroevaluación (por parte de un agente con rol evaluador) puede aportar perspectiva externa. En términos instrumentales, rúbricas, listas de cotejo y escalas estimativas resultan adecuados para valorar calidad de procesos y productos; su diseño debe cuidar validez de contenido, claridad de descriptores y consistencia interevaluador. Cada instrumento se acompaña de una guía de aplicación, muestra de evidencias y ejemplo resuelto para alinear criterios. Cuando las categorías y los instrumentos se anclan a metas e indicadores, la conversación final se vuelve concreta y accionable.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "¿Quién evalúa y con qué criterios?",
              open: false,
              text: "Coevaluación: juicio colegiado del equipo con criterios consensuados y evidencias compartidas. Autoevaluación: reflexión crítica de cada miembro sobre su aporte y aprendizaje. Heteroevaluación: mirada externa (asesor, directivo) para contrastar sesgos internos. Criterios mínimos: pertinencia (alineación problema–estrategia), eficacia (logro de metas), eficiencia (uso racional de recursos), equidad (brechas), sostenibilidad (continuidad y escalabilidad). :contentReference[oaicite:4]{index=4}",
            },

            {
              type: "paragraph",
              text: "El informe final es el artefacto que concentra evidencias y decisiones. Su estructura mínima incluye: resumen ejecutivo (propósito, alcance y principales hallazgos), metodología (fuentes, instrumentos, muestras, límites), resultados (por objetivo e indicador, con visualizaciones parsimoniosas), análisis (interpretación de variaciones, efectos no previstos, brechas entre grupos), conclusiones (juicios de valor) y recomendaciones (decisiones sugeridas con responsables y plazos). Acompaña anexos con instrumentos, fichas de indicador y bases depuradas, asegurando que cualquier lector pueda auditar el recorrido analítico. La narrativa del informe debe ser honesta: celebrar lo logrado, explicar lo no logrado y proponer rutas claras para el siguiente tramo. Comunicarlo a audiencias diversas exige dos versiones: una técnica para equipos y directivos, y otra síntesis para la comunidad educativa.",
            },

            {
              type: "paragraph",
              text: "La ética de la evaluación final demanda proteger la privacidad de estudiantes y docentes, evitar comparaciones estigmatizantes y distinguir entre error y aprendizaje. Antes de publicar resultados, se eliminan identificadores personales y se presentan datos agregados; si se describen casos, se anonimizan. Los hallazgos sensibles se trabajan en circuitos internos con acuerdos de mejora y acompañamientos específicos. En la dimensión de justicia, la evaluación debe observar la distribución de beneficios y costos: quiénes mejoraron, quiénes no y qué apoyos diferenciales necesita cada grupo. También debe reconocer condiciones externas que incidieron en los resultados (contexto socioeconómico, infraestructura, disponibilidad de recursos) para no atribuir a la escuela lo que no está bajo su control. Este cuidado ético fortalece la confianza y habilita conversaciones productivas sobre lo que sigue.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Estructura mínima del informe de cierre",
              open: false,
              text: "1) Resumen ejecutivo. 2) Metodología y límites. 3) Resultados por objetivo e indicador. 4) Análisis de variaciones y brechas. 5) Conclusiones con juicios de valor. 6) Recomendaciones con responsables y plazos. 7) Anexos (instrumentos, fichas de indicador, bases). La claridad del sumario y la trazabilidad de los datos marcan la calidad del cierre. :contentReference[oaicite:5]{index=5}",
            },

            {
              type: "paragraph",
              text: "La utilidad de la evaluación final reside en su capacidad de generar decisiones. Un buen cierre orienta tres tipos de rutas: continuidad (mantener lo que funciona y consolidar condiciones), escalamiento (ampliar la cobertura de prácticas efectivas con apoyos proporcionales) y rediseño/cierre (modificar o discontinuar acciones de baja rentabilidad). Para operar estas decisiones, el informe debe traducirse en un plan de mejora de siguiente ciclo, con metas realistas, indicadores revisados y una agenda de acompañamiento. Así, la evaluación no queda como un ejercicio documental, sino que se convierte en motor del aprendizaje organizacional: lo aprendido se vuelve política de la escuela, y las lecciones, patrimonio común del claustro. :contentReference[oaicite:6]{index=6}",
            },
          ],
          subthemes: [],
        },
        {
          id: "1.5",
          numbering: "4.5",
          title: "Naturaleza y finalidad de la evaluación",
          content: [
            {
              type: "paragraph",
              text: "La evaluación, desde la perspectiva del módulo, es un proceso sistemático, intencional y contextualizado de recogida y análisis de información para emitir juicios de valor, informar y tomar decisiones. En educación, su evolución conceptual ha transitado del énfasis exclusivo en los aprendizajes del alumnado a una mirada institucional que considera procesos, resultados e impacto. Esta ampliación reconoce que evaluar no es solo medir logros, sino comprender por qué ocurren y qué implicaciones tienen para la mejora. En clave de gobernanza de proyectos, la evaluación articula propósitos (para qué), criterios (con qué estándares), evidencias (con qué datos), juicios (qué significan) y decisiones (qué haremos a partir de ello). Concebirla como parte orgánica del ciclo evita la tentación de ‘examinar al final’ y reubica el foco en la utilidad: producir información pertinente y oportuna para orientar la acción y rendir cuentas con transparencia ante la comunidad. :contentReference[oaicite:7]{index=7}",
            },
            {
              type: "paragraph",
              text: "Una primera dimensión es la evaluación de procesos: observa cómo se ejecutan las acciones, con qué calidad y fidelidad respecto del diseño. Opera durante la implementación y tiene vocación formativa: detectar desvíos, comprender obstáculos y ajustar estrategias sin esperar al cierre. Sus instrumentos típicos son listas de cotejo, rúbricas de proceso, bitácoras de aula y registros de asistencia o uso de recursos. La pregunta guía es “¿cómo vamos?” y su criterio central es la coherencia entre lo planeado y lo realizado. Para ser útil, debe contar con indicadores claros y umbrales de alerta que activen decisiones (reprogramar, reasignar, reforzar). Evaluar procesos es cuidar el ‘cómo’ para que el ‘qué’—los resultados—sea alcanzable, ético y sostenible; es poner la lupa en la experiencia de implementación para reducir la distancia entre el plan y la práctica.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Formativa vs. sumativa (y cómo conviven)",
              open: false,
              text: "La evaluación formativa acompaña la ejecución para corregir el rumbo; la sumativa valora logros al cierre. Lejos de oponerse, se alimentan: sin buena formativa no hay sumativa confiable; sin sumativa, la formativa pierde horizonte. La clave es la cadencia: revisiones breves y frecuentes para aprender en marcha y un cierre que sintetiza aprendizajes y decide el siguiente ciclo. :contentReference[oaicite:8]{index=8}",
            },

            {
              type: "paragraph",
              text: "La segunda dimensión es la evaluación de productos o resultados: estima el grado de cumplimiento de metas y el cambio atribuible al proyecto en los aprendizajes o servicios. Opera con indicadores cuantitativos (variación de niveles, tasas, proporciones) y cualitativos (calidad de evidencias, portafolios), siempre contrastados con la línea base. Su fuerza reside en la claridad de las metas y en la fidelidad de los instrumentos de medición; su límite, en los factores de contexto que pueden mediar los resultados (rotación de personal, condiciones socioeconómicas). Una lectura madura de resultados reconoce la heterogeneidad: analiza brechas entre grupos, identifica efectos no previstos y evita generalizaciones abusivas. La comunicación responsable de resultados exige síntesis comprensibles para la comunidad y anexos técnicos para el claustro y la dirección, garantizando trazabilidad de datos y decisiones.",
            },

            /* Imagen intercalada */
            {
              type: "image",
              src: "https://acmplean.com/wp-content/uploads/2022/05/PDCA-ACMP-e1644328044987.png",
              alt: "Ciclo PDCA como fundamento de la evaluación continua",
              caption:
                "La evaluación como disciplina cíclica: planear, hacer, verificar y actuar.",
            },

            {
              type: "paragraph",
              text: "La tercera dimensión es la evaluación de impacto: observa cambios duraderos y su distribución en la comunidad. Requiere horizontes temporales más largos, criterios de sostenibilidad y, cuando es posible, comparadores (cohortes, series históricas). Su sensibilidad ética es alta: mide no solo cuánto se logró, sino para quiénes y con qué efectos colaterales. Dado su costo, no siempre es viable; por ello, el módulo sugiere realismo metodológico: cuando no se pueda medir impacto en sentido estricto, explicitar supuestos y aproximaciones (seguimiento a egresos, paneles reducidos, historias de práctica robustas). Lo esencial es que la noción de impacto recuerde al equipo que la mejora buscada debe perdurar y multiplicar beneficios sin generar brechas nuevas. Esta mirada orienta la selección de estrategias con mejor ‘retorno pedagógico’ por unidad de esfuerzo.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Finalidades: mejora, decisión y rendición de cuentas",
              open: false,
              text: "Tres finalidades ordenan la evaluación: (1) Mejorar (aprender y ajustar en marcha); (2) Decidir (continuar, escalar, rediseñar o cerrar); (3) Rendir cuentas (transparentar ante la comunidad). Toda acción evaluativa debe explicitar cuál de estas finalidades persigue, para calibrar profundidad, instrumentos y formato de comunicación. :contentReference[oaicite:9]{index=9}",
            },

            {
              type: "paragraph",
              text: "Para cerrar, la calidad de la evaluación se juega en cuatro atributos: pertinencia (mide lo que importa para la decisión), utilidad (produce información accionable en el momento adecuado), viabilidad (coste razonable frente al beneficio informativo) y ética (respeta a las personas y evita usos punitivos). Cuando estos atributos se combinan con una arquitectura de indicadores simple y una cadencia de revisión estable, la evaluación deja de ser un trámite y se convierte en una práctica profesional que protege el sentido pedagógico del proyecto. Su finalidad última es habilitar decisiones más justas y efectivas, sostener una cultura de aprendizaje institucional y fortalecer la confianza de la comunidad en que las mejoras que se prometen se persiguen con evidencia y transparencia. :contentReference[oaicite:10]{index=10}",
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
          href: "https://www.youtube.com/watch?v=z04ecw844FQ", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "¿Cómo hacer un proyecto educativo? https://www.youtube.com/watch?v=z04ecw844FQ",
            "¿Qué es el liderazgo educativo? https://www.youtube.com/watch?v=cT1wtKkNhPY",
            "Programa escolar de mejora — Luz Ma. Serradell https://www.youtube.com/watch?v=q4me3nXrO1Q",
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
            "Casanova, M. A. (1998). La evaluación educativa. Escuela Básica. México: SEP–Muralla.",
            "Castillo Arredondo, S., & Cabrerizzo Diago, J. (2010). Evaluación educativa de aprendizajes y competencias. Madrid, España: Pearson Educación.",
            "Cronbach, L. J. (1968). Mejora a través de la evaluación. New York: Hamilton.",
            "Bolívar, A. (2010). El liderazgo educativo y su papel en la mejora: una revisión actual de sus posibilidades y limitaciones. Psicoperspectivas, 9–33.",
            "Ghiso, A. (2008). La sistematización en contextos formativos universitarios. Revista Internacional del Magisterio.",
            "Maggio Chena, E. (2019). Estrategias de Dirección. Xalapa, México: Universidad Veracruzana.",
            "Pont, B., Deborah, N., & Hunter, M. (2009). Mejorar el liderazgo escolar. OCDE.",
            "Tyler, R. (1967). Evaluación educativa. Nueva York: McNally.",
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
