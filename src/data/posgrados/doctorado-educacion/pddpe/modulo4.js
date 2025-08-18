/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "doctorado-educacion",
  courseId: "ded413-practica-docente-perspectiva-evaluadora",
  id: "ded413-m4",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "La práctica docente desde la perspectiva evaluadora",
  title:
    "Módulo 4. Actividades vinculadas con la sistematización y evaluación del aprendizaje",
  semestre: "Cuarto semestre",
  teacher: "Dr. Jesús Agustín Zapata Velázquez",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar y reflexionar sobre la importancia de la sistematización y evaluación del aprendizaje en la práctica docente, mediante el análisis retrospectivo de la formación profesional, el desarrollo de la competencia didáctica, la identificación de los retos del trabajo docente y la influencia del entorno escolar, con el propósito de mejorar los procesos de enseñanza y fortalecer estrategias de evaluación contextualizadas y efectivas.",
  competencies: [
    "Evalúa de manera reflexiva su trayectoria formativa y profesional, identificando logros, desafíos y oportunidades de mejora.",
    "Diseña estrategias didácticas efectivas que favorecen el aprendizaje colaborativo, la organización del trabajo en el aula y la construcción de conocimientos significativos.",
    "Identifica los principales desafíos del ejercicio docente y desarrolla estrategias de solución fundamentadas en la evaluación y sistematización del aprendizaje.",
    "Analiza la relación entre la escuela y su contexto, valorando su impacto en la enseñanza y proponiendo estrategias para una interacción efectiva entre la comunidad educativa y el aula.",
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
      id: "4",
      numbering: "Unidad 4",
      title:
        "Actividades vinculadas con la sistematización y evaluación del aprendizaje",
      content: [
        /* Párrafo 1 — Sentido formativo de la sistematización y la evaluación (~200 palabras) */
        {
          type: "paragraph",
          text: "Esta unidad coloca en el centro la idea de que enseñar no termina cuando cierra la clase: la práctica docente solo adquiere pleno sentido cuando es sistematizada, analizada y evaluada con propósito formativo. Comprender qué, cómo y por qué aprendieron los estudiantes —y qué, cómo y por qué decidimos enseñar de cierta manera— permite reorientar decisiones pedagógicas con base en evidencia. Desde esta perspectiva, la evaluación deja de ser un trámite sancionador para transformarse en un dispositivo de autorregulación profesional y de mejora continua. Sistematizar implica ordenar experiencias, reconstruir el proceso didáctico, identificar patrones y tomar decisiones informadas; evaluar, por su parte, supone contrastar lo realizado con criterios explícitos y compartidos. Ambas acciones, articuladas, potencian la innovación didáctica, el trabajo colaborativo y la pertinencia curricular, al tiempo que hacen visible el impacto real de la docencia en el desarrollo de competencias del estudiantado.",
        },

        /* Párrafo 2 — Análisis retrospectivo y construcción de trayectorias profesionales (~200 palabras) */
        {
          type: "paragraph",
          text: "El análisis retrospectivo de la formación docente es una práctica clave para comprender cómo se han configurado nuestras decisiones pedagógicas y qué transformaciones necesitamos impulsar. Mirar hacia atrás con lentes analíticos permite distinguir hitos, identificar tensiones entre teoría y práctica, reconocer sesgos, y explicitar saberes tácitos que suelen guiar la acción cotidiana sin ser discutidos. Esta reconstrucción biográfico‑profesional no se reduce a la memoria: requiere instrumentos (portafolios, diarios reflexivos, observación videograbada, coevaluación entre pares) que capturen evidencias y permitan trazar líneas de avance. Al objetivar la experiencia, el docente puede proyectar rutas de desarrollo profesional, detectar necesidades formativas específicas y alinear su práctica con los desafíos actuales: diversidad, uso crítico de tecnologías, evaluación auténtica, aprendizaje colaborativo, inclusión y (re)diseño curricular basado en competencias.",
        },

        /* Párrafo 3 — Competencia didáctica, trabajo en grupo y evaluación como retroalimentación (~200 palabras) */
        {
          type: "paragraph",
          text: "Desarrollar competencia didáctica implica planificar con claridad, gestionar ambientes de aprendizaje retadores y evaluar de manera coherente con los resultados esperados. En ese marco, el trabajo en grupo con estudiantes y entre docentes opera como un catalizador de mejora: promueve el contraste de ideas, el andamiaje entre pares, la metacognición y la corresponsabilidad. Evaluar colaborativamente —con rúbricas compartidas, coevaluación y autoevaluación— hace visible el proceso (no solo el producto), favorece la autorregulación y aporta evidencia rica para la toma de decisiones. La sistematización de esas interacciones (registros, bitácoras de equipo, matrices de seguimiento) permite identificar patrones de participación, desequilibrios en la distribución de tareas y oportunidades para rediseñar estrategias que incrementen la equidad, la pertinencia y la profundidad cognitiva del aprendizaje grupal.",
        },

        /* Párrafo 4 — Retos del trabajo docente y uso de datos para la mejora (~200 palabras) */
        {
          type: "paragraph",
          text: "Los retos contemporáneos del trabajo docente —diversidad de ritmos y estilos de aprendizaje, brecha digital, burocratización de la evaluación, desgaste profesional, presión por resultados estandarizados— exigen pasar de la intuición a la analítica educativa. Sistematizar y evaluar con propósito implica construir indicadores pertinentes (no solo cuantitativos), triangular fuentes (portafolios, observaciones, percepciones estudiantiles, evidencias de desempeño) y transformar los datos en retroalimentación accionable. El docente que interpreta sus datos de práctica puede anticipar riesgos, ajustar estrategias a tiempo, diseñar apoyos diferenciados y defender pedagógicamente sus decisiones ante la institución. Al mismo tiempo, requiere condiciones organizativas: tiempos para el análisis, comunidades de práctica, liderazgo distribuido y políticas que privilegien la evaluación formativa sobre el control sancionador.",
        },

        /* Párrafo 5 — Contexto escolar, comunidad y sentido público de la evaluación (~200 palabras) */
        {
          type: "paragraph",
          text: "La escuela está entrelazada con su entorno; por ello, la sistematización y la evaluación del aprendizaje deben dialogar con los condicionantes socioeconómicos, culturales e institucionales que enmarcan la práctica. Integrar el contexto —recursos disponibles, capital cultural de las familias, redes comunitarias, políticas educativas— no es relativizar los estándares, sino dotarlos de sentido y justicia. Una evaluación situada reconoce los esfuerzos y las restricciones reales, valora el trabajo colaborativo con la comunidad y visibiliza las estrategias que los docentes diseñan para compensar desigualdades. Esta mirada contextualizada amplía el foco: del aula a la institución; del profesor aislado a la comunidad profesional; del resultado puntual al proceso de transformación. En consecuencia, los productos de la evaluación (informes, planes de mejora, recomendaciones) se convierten en herramientas públicas de rendición de cuentas pedagógica y de construcción colectiva de soluciones.",
        },

        /* Acordeón — Tres niveles de análisis para sistematizar y evaluar */
        {
          type: "accordion",
          header:
            "Tres niveles para sistematizar y evaluar la práctica docente",
          open: false,
          text:
            "### Nivel 1. Mirada individual (docente)  \n" +
            "- Portafolio y diario reflexivo para explicitar decisiones didácticas.  \n" +
            "- Autoevaluación con rúbricas de competencia docente (planificación, gestión, evaluación).  \n" +
            "- Metas de mejora vinculadas a evidencia y seguimiento periódico.\n\n" +
            "### Nivel 2. Mirada del aula y del grupo  \n" +
            "- Triangulación de fuentes: desempeño del estudiantado, observaciones de clase, percepciones del alumnado.  \n" +
            "- Coevaluación entre pares docentes y trabajo colegiado sobre criterios comunes.  \n" +
            "- Analítica de participación y de productos para rediseñar tareas y apoyos diferenciados.\n\n" +
            "### Nivel 3. Mirada institucional y del contexto  \n" +
            "- Alineación con el proyecto educativo institucional y políticas de evaluación formativa.  \n" +
            "- Lectura del contexto socioeconómico y cultural para garantizar pertinencia y equidad.  \n" +
            "- Rendición de cuentas pedagógica y planes de mejora con seguimiento y retroalimentación sistémica.",
        },
      ],

      /* → Subtemas de primer nivel (según el PDF) */
      subthemes: [
        {
          id: "4.1",
          numbering: "4.1",
          title: "Análisis retrospectivo de la formación docente",
          content: [
            /* Párrafo 1 — Sentido del análisis retrospectivo (≈300 palabras) */
            {
              type: "paragraph",
              text: "La formación docente debe concebirse como un proceso continuo que trasciende la preparación inicial y acompaña toda la trayectoria profesional del educador. Desde esta perspectiva, el análisis retrospectivo permite comprender cómo se han transformado las propias concepciones pedagógicas, los dispositivos didácticos y la manera de evaluar, a partir de la experiencia, la actualización y la reflexión crítica. Tal como sostienen Perrenoud y Zabalza, el docente de hoy no solo domina contenidos disciplinares, sino que moviliza competencias para adaptar estrategias a contextos cambiantes, heterogéneos y tecnológicamente mediados. Mirar hacia atrás con lentes analíticos posibilita identificar hitos, tensiones y avances: ¿cuándo y por qué se modificaron ciertas prácticas? ¿cómo incidieron las reformas curriculares, la educación basada en competencias, la masificación de lo digital o los nuevos marcos de evaluación? Esta revisión rigurosa convierte la experiencia en conocimiento profesional sistematizado, evitando que el aprendizaje quede encapsulado en anécdotas dispersas. Además, al documentar evidencias (planeaciones, portafolios, registros de observación, resultados de evaluación formativa) el docente gana trazabilidad de sus decisiones y puede alinear mejor su práctica con propósitos formativos, criterios de calidad y contextos institucionales. Así, el análisis retrospectivo no es un ejercicio nostálgico, sino una metodología de investigación sobre la propia práctica, que alimenta la autorregulación, fundamenta los planes de mejora y fortalece la agencia profesional del maestro.",
            },

            /* Párrafo 2 — Etapas del desarrollo profesional docente (≈300 palabras) */
            {
              type: "paragraph",
              text: "Diversos autores han descrito etapas evolutivas del desarrollo profesional docente que ayudan a ordenar la mirada retrospectiva. Retomando la tipología inspirada en Scriven, puede distinguirse: (1) una fase inicial, centrada en la supervivencia en el aula, con fuerte dependencia de la formación universitaria y con dificultades para gestionar la heterogeneidad y evaluar de modo auténtico; (2) una fase de consolidación, donde el profesor ensaya metodologías, ajusta la gestión del aula, explora instrumentos de evaluación y empieza a sistematizar la experiencia; (3) una fase de especialización, caracterizada por la actualización permanente, el uso de tecnologías, la incorporación de enfoques por competencias y el interés por la investigación sobre la propia práctica; y (4) una fase de liderazgo y mentoría, en la que el docente acompaña a colegas, participa en comunidades profesionales de aprendizaje, impulsa proyectos institucionales e incide en la construcción de políticas y criterios de evaluación más justos y contextualizados. Ubicarse en una o varias de estas etapas —porque no siempre son lineales— ayuda a identificar prioridades formativas, brechas en competencias didácticas y necesidades de apoyo o acompañamiento. Asimismo, posibilita que la evaluación del desempeño deje de reducirse a resultados de estudiantes y se oriente a valorar trayectorias, repertorios de intervención, capacidades reflexivas y contribuciones al aprendizaje colectivo de la comunidad docente.",
            },

            /* Párrafo 3 — Herramientas para la reflexión, sistematización y evaluación (≈300 palabras) */
            {
              type: "paragraph",
              text: "Para que el análisis retrospectivo produzca mejora real, es indispensable apoyarse en herramientas de sistematización que capturen la complejidad de la práctica. Entre las más utilizadas se encuentran: el portafolio docente (con planeaciones, evidencias de los estudiantes, rúbricas, retroalimentaciones y reflexiones), los diarios de reflexión pedagógica (que registran dilemas, decisiones y aprendizajes), las observaciones de clase —incluido el videoanálisis— y la retroalimentación de colegas (coevaluación). Estas herramientas, cuando se articulan con criterios claros de evaluación formativa, permiten transformar datos en decisiones pedagógicas. A la par, la triangulación de fuentes (auto, co y heteroevaluación; indicadores cualitativos y cuantitativos; evidencias de proceso y de producto) fortalece la validez y equidad del juicio evaluativo sobre el desempeño. En clave de mejora continua, la información producida debe retroalimentar el diseño de planes individuales de desarrollo profesional, la selección de cursos o diplomados, y la redefinición de estrategias de enseñanza y evaluación en el aula. De este modo, la evaluación deja de ser un dispositivo externo de control para convertirse en un instrumento interno de autorregulación, coherente con una docencia reflexiva y con el compromiso ético de impactar positivamente en los aprendizajes del alumnado.",
            },

            /* Párrafo 4 — Desafíos actuales y proyección (≈300 palabras) */
            {
              type: "paragraph",
              text: "El análisis retrospectivo también revela desafíos emergentes que reconfiguran la formación docente: diversidad y equidad en el aula, alfabetización y ciudadanía digital, evaluación auténtica por competencias, atención al bienestar socioemocional, y uso responsable de analítica de datos educativos. Estos retos demandan un reposicionamiento del docente como profesional crítico, capaz de leer su contexto y de construir conocimiento práctico transferible. Implican, además, diseñar sistemas de evaluación del desempeño que valoren la capacidad de aprender a aprender, de colaborar, de innovar y de sostener procesos reflexivos documentados. En esta proyección, la formación continua deja de ser episódica y se convierte en un ecosistema de desarrollo, con comunidades profesionales de aprendizaje, mentorías entre pares, investigación-acción y ciclos iterativos de planificación–implementación–evaluación–reajuste. El resultado esperado es un profesorado que no solo acumula cursos, sino que demuestra, con evidencias, cómo transforma la retroalimentación en mejora pedagógica sostenible. Así, el docente se reconoce como sujeto epistémico de su práctica, y la institución educativa, como un entorno que favorece la sistematicidad, la evaluación formativa y la construcción colectiva de saber pedagógico.",
            },

            /* Acordeón 1 — Fases y herramientas clave del análisis retrospectivo */
            {
              type: "accordion",
              header:
                "Fases del desarrollo profesional y herramientas de análisis",
              open: false,
              text:
                "* **Fases del desarrollo profesional (inspiradas en Scriven):** inicial, consolidación, especialización, liderazgo/mentoría.  \n" +
                "* **Herramientas de sistematización:** portafolio docente, diarios de reflexión, observación y videoanálisis, co/heteroevaluación.  \n" +
                "* **Principios de evaluación formativa:** validez, equidad, transparencia, integralidad y retroalimentación orientada a la mejora.  \n" +
                "* **Triangulación de evidencias:** cuantitativas y cualitativas; proceso y producto; auto, co y heteroevaluación.",
            },

            /* Acordeón 2 — Desafíos actuales y líneas de acción */
            {
              type: "accordion",
              header:
                "Desafíos contemporáneos y líneas de acción para el docente",
              open: false,
              text:
                "* **Diversidad y equidad:** diferenciación pedagógica y atención a contextos.  \n" +
                "* **Competencias digitales y analítica de datos:** uso ético, formativo y reflexivo.  \n" +
                "* **Evaluación auténtica por competencias:** portafolios, rúbricas, proyectos, desempeño en contextos reales.  \n" +
                "* **Comunidades profesionales de aprendizaje:** mentoría entre pares, investigación‑acción, ciclos iterativos de mejora.",
            },

            /* Video sugerido en el material */
            {
              type: "video",
              title: "Retos e implicaciones de la formación docente",
              src: "https://www.youtube.com/watch?v=yESRwY8nS98", // reemplaza por el enlace exacto que tengas en tu “Material complementario IV”
              caption:
                "Reflexión sobre transformaciones, competencias y desafíos de la formación docente contemporánea.",
            },
          ],
        },
        {
          id: "4.2",
          numbering: "4.2",
          title: "La competencia didáctica y el trabajo en grupo",
          content: [
            /* Párrafo 1 — Qué es la competencia didáctica y por qué se vincula al trabajo en grupo (~300 palabras) */
            {
              type: "paragraph",
              text: "La competencia didáctica constituye el eje articulador del desempeño profesional docente, pues integra el saber disciplinar, el saber pedagógico y el saber práctico para transformar contextos de enseñanza en oportunidades de aprendizaje significativo. En el marco del socioconstructivismo, dicha competencia se expresa no solo en la selección de contenidos y métodos, sino en la capacidad de diseñar ambientes colaborativos donde el alumnado construye conocimientos de manera activa. En este sentido, el trabajo en grupo deja de ser una técnica accesoria para convertirse en un dispositivo privilegiado de mediación didáctica: promueve la interdependencia positiva, la responsabilidad individual y colectiva, la comunicación asertiva, la negociación argumentada y el desarrollo de habilidades socioemocionales clave. Perrenoud (2008) y Zabalza (2003) subrayan que el docente competente planifica, implementa y evalúa estrategias cooperativas alineadas con objetivos claros, criterios transparentes y evidencias de logro pertinentes; además, es capaz de ajustar dichas estrategias al perfil real del grupo (diversidad, ritmos, estilos de aprendizaje) y a las condiciones del entorno escolar. De ahí que hablar de competencia didáctica suponga reconocer al profesor como un profesional reflexivo que aprende de su práctica, triangula información para mejorarla y convierte la evaluación en un proceso formativo. Cuando el trabajo en grupo se diseña con roles definidos, tareas auténticas y mecanismos de coevaluación y autoevaluación, se potencia el aprendizaje profundo, se distribuye el liderazgo académico y se fortalece la cultura de colaboración en el aula, sentando bases para la mejora continua del desempeño.",
            },

            /* Párrafo 2 — Dimensiones operativas de la competencia didáctica (~300 palabras) */
            {
              type: "paragraph",
              text: "Scriven (1991) y Popham (2012) permiten organizar la competencia didáctica en, al menos, tres grandes dimensiones operativas. La primera es la planificación y el diseño instruccional, que supone traducir los propósitos curriculares en secuencias didácticas flexibles, criterios de evaluación explícitos y recursos alineados con las metas de aprendizaje. Aquí, el trabajo en grupo se anticipa desde la rúbrica, los instrumentos de seguimiento del proceso (p. ej., diarios de equipo) y la definición de productos colaborativos con sentido. La segunda dimensión es la gestión del aula, que rebasa la disciplina para centrarse en la construcción de climas socioafectivos favorables, la regulación del tiempo y el espacio, y la facilitación de interacciones ricas entre pares. El docente competente media conflictos, distribuye la palabra, promueve la escucha activa y cuida la equidad en la participación. La tercera dimensión es la evaluación para el aprendizaje, entendida como un ciclo continuo de recogida de evidencias, retroalimentación oportuna y toma de decisiones instruccionales. En contextos colaborativos, ello implica valorar tanto el desempeño grupal (calidad del producto, cohesión, regulación del trabajo) como el individual (aportaciones, responsabilidad, pensamiento crítico). Tobón (2010) propone, además, una lectura por competencias: planificar, enseñar, evaluar y reflexionar se convierten en procesos anclados a desempeños observables y progresivos, lo cual demanda instrumentos analíticos (rúbricas, listas de cotejo, guías de observación) que capturen la complejidad del actuar docente y del aprender en colaboración.",
            },

            /* Lista 1 — Competencias didácticas clave (síntesis operativa) */
            {
              type: "list",
              style: "bulleted",
              title:
                "Competencias didácticas clave del docente (síntesis operativa)",
              items: [
                "Planificar con enfoque de competencias, explicitando objetivos, criterios de evaluación y evidencias.",
                "Diseñar tareas auténticas y colaborativas con roles, tiempos y productos claros.",
                "Gestionar el clima socioafectivo: acuerdos de convivencia, resolución de conflictos y participación equitativa.",
                "Evaluar formativamente con rúbricas analíticas, co/auto‑evaluación y retroalimentación orientada a la acción.",
                "Usar datos (observación, analítica de LMS, registros de participación) para re‑planear y personalizar apoyos.",
                "Reflexionar sistemáticamente (portafolio, diarios, observación entre pares) para mejorar la práctica.",
              ],
            },

            /* Párrafo 3 — Trabajo en grupo: beneficios, riesgos y condiciones de calidad (~300 palabras) */
            {
              type: "paragraph",
              text: "El trabajo en grupo, cuando se orquesta con criterios pedagógicos claros, reporta beneficios ampliamente documentados: incrementa la motivación intrínseca, favorece la transferencia de conocimientos a situaciones auténticas, fortalece la autorregulación y las habilidades metacognitivas, y propicia el desarrollo de competencias interpersonales cruciales para la vida profesional. Sin embargo, también entraña riesgos recurrentes: distribución inequitativa de tareas, “polizones” sociales, conflictos no gestionados, evaluación centrada solo en el producto final o decisiones instruccionales que ignoran la diversidad del grupo. Para minimizar dichos riesgos, se recomienda definir roles rotativos (coordinación, relatoría, control de tiempo, curaduría de fuentes), establecer acuerdos de convivencia y protocolos de resolución de controversias, acompañar a los equipos con micro‑tutorías y utilizar rúbricas que ponderen proceso y resultado. Igualmente, conviene incorporar estrategias de coevaluación y autoevaluación para hacer visibles las contribuciones individuales, así como espacios de reflexión post‑tarea (metacognitivos) que permitan identificar aprendizajes, obstáculos y áreas de mejora. La competencia didáctica del docente se evidencia precisamente en su capacidad para diseñar estas estructuras de soporte, leer los datos que emergen del proceso (observaciones, registros de participación, analítica de plataformas) y retroalimentar a los estudiantes de modo específico, descriptivo y orientado a la acción. En suma, el trabajo en grupo no es un fin, sino un medio para concretar una enseñanza situada, inclusiva y centrada en el aprendizaje significativo.",
            },

            /* Párrafo 4 — Evaluación formativa y mejora continua de la competencia didáctica (~300 palabras) */
            {
              type: "paragraph",
              text: "Desde la perspectiva de la mejora continua, la competencia didáctica se nutre de ciclos iterativos de planeación, acción, observación, reflexión y re‑planeación (investigación‑acción). Esto exige que el docente documente su práctica (portafolio docente), triangule fuentes (autoevaluación, pares, estudiantes) y tome decisiones basadas en evidencias para ajustar sus estrategias colaborativas. La evaluación formativa, con foco en criterios y descriptores de logro, permite visibilizar los progresos del grupo y de cada estudiante, y abre la puerta a retroalimentaciones dialógicas que fomentan la autonomía. En paralelo, la analítica de aprendizaje que ofrecen los LMS (participación, tiempos de conexión, interacciones en foros, hitos de entrega) brinda insumos para personalizar apoyos y detectar tempranamente inequidades en la contribución grupal. Finalmente, la competencia didáctica también se expresa en la dimensión ética: diseñar experiencias cooperativas que respeten la diversidad, promuevan la justicia evaluativa y eviten sesgos; proteger la privacidad de los datos, y garantizar que la voz del estudiante tenga un lugar en la toma de decisiones didácticas. En conclusión, articular competencia didáctica y trabajo en grupo implica reconocer que la calidad de la experiencia colaborativa depende de la fineza del diseño pedagógico, la sensibilidad para gestionar la interacción humana y la robustez de los dispositivos de evaluación que sostienen, regulan y mejoran el aprendizaje.",
            },

            /* Lista 2 — Buenas prácticas para el trabajo en grupo (basadas en evidencia) */
            {
              type: "list",
              style: "bulleted",
              title:
                "Buenas prácticas para trabajo en grupo de alta calidad (basadas en evidencia internacional)",
              items: [
                "Interdependencia positiva y responsabilidad individual explícitas (contratos de equipo y rúbricas mixtas).",
                "Habilidades sociales enseñadas y evaluadas (escucha activa, feedback entre pares, gestión de conflictos).",
                "Procesamiento grupal: momentos formales para reflexionar sobre el cómo trabajamos, no solo el qué logramos.",
                "Rotación de roles para distribuir liderazgo y prevenir el “free‑riding”.",
                "Tareas desafiantes y auténticas que requieran colaboración real (no división mecánica del trabajo).",
                "Evaluación dual: valorar proceso (participación, regulación) y producto (calidad, pertinencia, originalidad).",
              ],
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://www.researchgate.net/publication/342348027/figure/fig4/AS:904905791389713@1592757761904/Figura-2-Componentes-de-la-competencia-de-analisis-e-intervencion-didactica-Fuente.jpg",
              alt: "Esquema de la competencia didáctica vinculada al trabajo en grupo",
              caption:
                "Dimensiones de la competencia didáctica y condiciones para un trabajo en grupo efectivo.",
            },
          ],
        },
        {
          id: "4.3",
          numbering: "4.3",
          title: "Los retos del trabajo docente",
          content: [
            /* Párrafo 1 (~300 palabras) — Complejidad creciente de la tarea docente */
            {
              type: "paragraph",
              text: "El trabajo docente se ha tornado crecientemente complejo por la convergencia de demandas pedagógicas, administrativas, tecnológicas y socioemocionales. Ya no basta con dominar contenidos disciplinares: hoy se exige diseñar experiencias de aprendizaje activas, gestionar la heterogeneidad del aula, integrar tecnologías digitales con criterio pedagógico, evaluar con un enfoque auténtico y, además, documentar evidencias para la rendición de cuentas. Perrenoud (2008) advierte que el reto central consiste en sostener un equilibrio entre la transmisión cultural y la construcción de competencias, sin sacrificar el acompañamiento socioemocional del estudiantado. A este panorama se suman factores sistémicos: reformas curriculares continuas, presiones por resultados estandarizados, burocracia creciente y brechas de infraestructura que impactan de modo desigual a los centros educativos. En paralelo, la diversidad —cultural, lingüística, funcional, socioeconómica— interpela al docente a diferenciar estrategias y ritmos, lo que implica planificar con flexibilidad, diseñar apoyos escalonados y evaluar con instrumentos válidos y contextualizados. Todo ello ocurre en una coyuntura de acelerada transformación tecnológica, donde el profesorado debe decidir qué herramientas incorporará, cómo protegerá los datos, de qué manera promoverá el pensamiento crítico frente a la sobreinformación y cómo evitar que la tecnología profundice las desigualdades. En suma, los retos docentes no son solo “técnicos” (métodos, instrumentos, TIC), sino también éticos y políticos: garantizar el derecho a aprender de todos los estudiantes, sostener prácticas inclusivas y participar activamente en comunidades profesionales que fortalezcan la autonomía docente y la mejora continua.",
            },

            /* Acordeón 1 — Retos estructurales y organizativos (síntesis ampliada) */
            {
              type: "accordion",
              header: "Retos estructurales y organizativos más frecuentes",
              open: false,
              text:
                "* **Sobrecarga administrativa:** tiempo invertido en reportes, evidencias y plataformas que resta espacio a la planificación y retroalimentación. \n" +
                "* **Recursos desiguales:** brechas en conectividad, infraestructura y apoyos especializados. \n" +
                "* **Reformas continuas:** actualización permanente del currículum y de los enfoques evaluativos. \n" +
                "* **Presiones de accountability:** cultura de la prueba estandarizada que puede desplazar la evaluación formativa. \n" +
                "* **Salud mental docente:** estrés, burnout y necesidad de políticas de bienestar laboral.",
            },

            /* Párrafo 2 (~300 palabras) — Gestión del aula, diversidad y evaluación auténtica */
            {
              type: "paragraph",
              text: "Uno de los desafíos más visibles está en la **gestión del aula**: promover un clima dialógico, respetuoso y participativo, capaz de sostener la motivación intrínseca frente a la distracción digital y la desafección escolar. La diversidad —en ritmos, estilos, trayectorias y capital cultural— demanda estrategias de **enseñanza diferenciada** (andamiaje, agrupamientos flexibles, tareas multinivel, materiales accesibles) y evaluación coherente, con **rúbricas, portafolios, tareas auténticas, co/auto‑evaluación**, para que el juicio profesional se apoye en evidencias ricas y contextualizadas. Este viraje hacia la evaluación para, como y del aprendizaje supone habilidades de diseño instruccional y una cultura de retroalimentación continua, que transforme los errores en oportunidades y convierta los datos en decisiones pedagógicas. El docente, además, debe navegar las tensiones entre la evaluación formativa y los sistemas sumativos de alto impacto, procurando que estos últimos no opaquen los objetivos formativos ni la atención a los procesos. A ello se agrega la alfabetización digital crítica: seleccionar herramientas con criterios de privacidad, accesibilidad y usabilidad; enseñar a los estudiantes a buscar, contrastar y crear información; y aprovechar analíticas de aprendizaje sin caer en reduccionismos numéricos. Finalmente, la **colaboración profesional** —observación entre pares, lecciones estudio, comunidades de práctica— emerge como estrategia indispensable para sostener el desarrollo docente; sin estructuras colegiadas y tiempos protegidos, la mejora queda al voluntarismo individual.",
            },

            /* Párrafo 3 (~300 palabras) — Tecnología, bienestar y profesionalización continua */
            {
              type: "paragraph",
              text: "La integración significativa de tecnologías educativas constituye otro frente de retos. No se trata de “digitalizar” la clase, sino de **re‑diseñarla**: qué problemas auténticos se pueden abordar, cómo promover colaboración síncrona y asíncrona, qué evidencias generará el estudiantado y de qué forma se aprovecharán los datos para retroalimentar. Este dominio pedagógico‑tecnológico exige actualización constante, pero también políticas institucionales que garanticen infraestructura, soporte y formación situada. Paralelamente, el **bienestar docente** requiere pasar del discurso al diseño organizacional: horarios realistas, distribución justa de cargas, acompañamiento socioemocional y reconocimiento del trabajo invisible (tutoría, mediación de conflictos, diseño de materiales, seguimiento individualizado). En términos de profesionalización, los enfoques de **investigación‑acción**, lesson study, mentoría y coaching instruccional se consolidan como vías poderosas para transformar la práctica desde la evidencia. La evaluación del desempeño docente, en este marco, debe ser **formativa, contextualizada y colegiada**, incorporando múltiples fuentes (auto, co y heteroevaluación; observación; portafolio; percepción estudiantil) y devolviendo retroalimentación útil y accionable. De lo contrario, deriva en burocracia que erosiona la motivación y desplaza la innovación. Finalmente, el reto ético‑político: sostener prácticas inclusivas y culturalmente pertinentes, defender condiciones dignas de trabajo y participar en la construcción de políticas que pongan el aprendizaje —y no solo los indicadores— en el centro.",
            },

            /* Acordeón 2 — Estrategias prácticas de afrontamiento (basadas en evidencia) */
            {
              type: "accordion",
              header:
                "Estrategias prácticas para afrontar los retos (selección basada en evidencia)",
              open: false,
              text:
                "* **Evaluación formativa sistemática:** rúbricas compartidas, retroalimentación descriptiva y ciclos de mejora continua. \n" +
                "* **Diseño Universal para el Aprendizaje (DUA):** múltiples medios de representación, acción/expresión y motivación. \n" +
                "* **Comunidades profesionales de aprendizaje:** observación entre pares, co‑planificación, análisis de datos y lecciones estudio. \n" +
                "* **Analítica de aprendizaje con ética:** usar datos para apoyar, no para etiquetar; transparencia y protección de la privacidad. \n" +
                "* **Gestión del bienestar docente:** tiempos protegidos para planear, límites claros a la carga administrativa, protocolos de apoyo psicosocial.",
            },

            /* Párrafo 4 (~300 palabras) — Cierre integrador */
            {
              type: "paragraph",
              text: "Superar los retos del trabajo docente exige mirar la práctica como un entramado donde confluyen decisiones micro (aula, evaluación, acompañamiento) y estructuras macro (políticas, condiciones laborales, cultura evaluativa). El docente necesita marcos conceptuales sólidos para diagnosticar problemas auténticos, competencias didácticas para diseñar experiencias inclusivas y herramientas de evaluación para tomar decisiones informadas. Pero, sobre todo, requiere **tiempo colegiado, liderazgo pedagógico y ecosistemas institucionales** que prioricen la mejora y no la mera compliance. En este sentido, la sistematización de experiencias, los portafolios profesionales, la investigación‑acción y los ciclos de retroalimentación transforman la evaluación en motor de desarrollo, y no en dispositivo de control. Avanzar implica transitar de culturas de aislamiento a **culturas de colaboración basada en evidencias**, donde la reflexión crítica, la co‑docencia, el acompañamiento entre pares y la participación activa en el diseño curricular sean prácticas habituales. Así, los retos del trabajo docente dejan de ser una carga exclusivamente individual y se convierten en un proyecto colectivo de profesionalización y justicia educativa.",
            },

            /* Video final */
            {
              type: "video",
              title:
                "Retos actuales del trabajo docente y claves para afrontarlos",
              src: "https://www.youtube.com/watch?v=OLKWN8yYECY", // sustituye si deseas otro recurso
              caption:
                "Síntesis de desafíos contemporáneos (diversidad, evaluación, tecnología, bienestar) y estrategias de mejora basadas en evidencia.",
            },
          ],
        },
        {
          id: "4.4",
          numbering: "4.4",
          title: "La escuela y su entorno en el trabajo del aula",
          content: [
            /* Párrafo 1 — El entorno como condicionante pedagógico (~300 palabras) */
            {
              type: "paragraph",
              text: "La escuela no es una isla: su dinámica cotidiana se entrelaza con el tejido social, económico y cultural que la rodea. El acceso o carencia de recursos, las expectativas familiares respecto a la educación, los códigos culturales locales y hasta la infraestructura del barrio inciden en lo que ocurre dentro del aula. Reconocer esta imbricación permite al docente desplazar la mirada desde un enfoque centrado exclusivamente en el aula hacia otro más amplio, donde la planificación, la evaluación y la gestión del aprendizaje se diseñan considerando las oportunidades y restricciones del contexto. En comunidades con alto rezago socioeconómico, por ejemplo, la equidad requiere flexibilizar tiempos, diversificar recursos y valorar evidencias alternativas de aprendizaje; mientras que en escuelas con fuerte capital cultural y tecnológico, el reto puede ser evitar el academicismo descontextualizado y promover proyectos con sentido social. Esta perspectiva relacional obliga a entender que los resultados de aprendizaje no dependen únicamente de la pericia didáctica del profesor, sino también de las condiciones materiales, simbólicas y afectivas en las que éste y sus estudiantes trabajan. De ahí la importancia de la sistematización: mapear actores, redes de apoyo, barreras y potencialidades del entorno ayuda a tomar decisiones curriculares, metodológicas y evaluativas más pertinentes, con foco en la justicia educativa y la reducción de brechas. Integrar el contexto al diseño didáctico no es una concesión retórica, sino una estrategia profesional imprescindible para que la enseñanza sea realmente significativa y transformadora.",
            },

            /* Imagen ilustrativa */
            {
              type: "image",
              src: "https://cdn.slidesharecdn.com/ss_thumbnails/escuela-comunidad-140323070910-phpapp02-thumbnail.jpg?width=640&height=640&fit=bounds",
              alt: "Docente dialogando con la comunidad alrededor de la escuela",
              caption:
                "La articulación escuela‑comunidad como base para decisiones didácticas contextualizadas.",
            },

            /* Lista 1 — Dimensiones del entorno que impactan el aula */
            {
              type: "list",
              title: "Dimensiones del entorno que impactan el aula",
              items: [
                "Socioeconómica: disponibilidad de materiales, conectividad, alimentación y tiempo de estudio.",
                "Cultural y lingüística: valores, prácticas, lenguas originarias y capital cultural del hogar.",
                "Institucional: infraestructura, clima organizacional, liderazgo directivo y políticas internas.",
                "Familiar y comunitaria: estilos de crianza, expectativas sobre la escuela, redes de apoyo.",
                "Política y normativa: marcos curriculares, sistemas de evaluación y programas compensatorios.",
              ],
            },

            /* Párrafo 2 — De la lectura de contexto a la didáctica situada (~300 palabras) */
            {
              type: "paragraph",
              text: "Traducir el análisis del entorno en acciones concretas exige una didáctica situada: planificación flexible, selección pertinente de materiales y evaluación auténtica alineada con las condiciones reales del estudiantado. Esto supone, en lo metodológico, priorizar estrategias que conecten los contenidos con problemas locales, proyectos de servicio a la comunidad, estudios de caso del propio contexto o aprendizaje basado en retos reales. En la evaluación, implica diversificar evidencias (portafolios, producciones orales, intervenciones comunitarias, diarios reflexivos) y ponderar el progreso relativo de cada estudiante considerando su punto de partida y sus recursos disponibles. En la gestión del aula, demanda construir normas de convivencia culturalmente sensibles y promover la participación de las familias como corresponsables del aprendizaje. El docente, desde esta clave, funge como mediador entre el currículo prescrito y la realidad vivida por sus estudiantes: recontextualiza objetivos, resignifica contenidos y negocia trayectorias de aprendizaje. Esta labor requiere, además, establecer alianzas con actores externos (organizaciones civiles, universidades, gobiernos locales) para ampliar las oportunidades de formación. La lectura permanente del contexto —no como un diagnóstico puntual sino como un proceso continuo de observación, diálogo y retroalimentación— permite ajustar decisiones pedagógicas y sostener procesos de mejora. Así, la escuela se convierte en un nodo de articulación social donde el conocimiento escolar dialoga con saberes comunitarios, y la evaluación deja de ser un ejercicio descontextualizado para transformarse en un dispositivo de justicia educativa.",
            },

            /* Lista 2 — Estrategias para vincular escuela y comunidad */
            {
              type: "list",
              title: "Estrategias para vincular escuela y comunidad",
              items: [
                "Proyectos de aprendizaje-servicio que aborden necesidades locales reales.",
                "Mapeo participativo de recursos comunitarios (bibliotecas, centros culturales, ONG, empresas).",
                "Talleres y círculos de estudio con familias para codiseñar criterios de evaluación y seguimiento.",
                "Uso de metodologías de investigación-acción participativa con estudiantes como coinvestigadores.",
                "Consejos consultivos escolares con representantes de la comunidad para alinear prioridades.",
              ],
            },

            /* Párrafo 3 — Desafíos y condiciones para la articulación efectiva (~300 palabras) */
            {
              type: "paragraph",
              text: "Vincular genuinamente la escuela con su entorno conlleva retos estructurales y culturales. Entre los primeros, destacan las desigualdades socioeconómicas que limitan el acceso a tecnologías, materiales o espacios seguros para estudiar; así como la sobrecarga administrativa docente que reduce el tiempo para el trabajo colaborativo con la comunidad. Entre los segundos, es frecuente encontrar desconfianza mutua, expectativas divergentes sobre la función de la escuela o resistencias a transformar prácticas tradicionales. Superar estas barreras requiere liderazgo pedagógico distribuido, tiempos institucionales protegidos para el trabajo interprofesional, protocolos claros de comunicación con familias y comunidades, y políticas de evaluación docente que reconozcan el esfuerzo contextualizador y no sólo indicadores estandarizados de logro. Asimismo, la formación continua debe incluir competencias para el análisis de contextos, la mediación intercultural y el diseño de evaluaciones auténticas. La ética profesional también es central: trabajar con la comunidad exige salvaguardar la privacidad de los datos, evitar la estigmatización de grupos y construir relaciones horizontales, basadas en el respeto y la reciprocidad. Finalmente, la sistematización rigurosa de las experiencias (lecciones aprendidas, evidencias de impacto, ajustes realizados) permite escalar prácticas exitosas y argumentar, con evidencias, ante autoridades educativas la necesidad de flexibilizar normativas o asignar recursos diferenciados. En síntesis, una escuela que lee su entorno, dialoga con él y lo integra a la experiencia curricular, avanza de la mera transmisión de contenidos a la construcción de aprendizajes socialmente situados y transformadores.",
            },
          ],
        },
        {
          id: "4.5",
          numbering: "4.5",
          title: "¿Qué he aprendido al trabajar en grupo?",
          content: [
            /* Párrafo 1 — Sentido formativo del trabajo colaborativo (~300 palabras) */
            {
              type: "paragraph",
              text: "Trabajar en grupo me ha permitido comprender que la docencia es, ante todo, un ejercicio colegiado y dialógico. La interacción con otros colegas abre un espacio para intercambiar experiencias, contrastar marcos teóricos y revisar críticamente la propia práctica, algo que difícilmente ocurre cuando se trabaja en soledad. El grupo se convierte en una comunidad de aprendizaje donde la retroalimentación deja de ser punitiva para transformarse en un dispositivo formativo que impulsa la innovación didáctica y la toma de decisiones basada en evidencias. Asimismo, he aprendido que la colaboración organizada —con roles claros, metas compartidas y acuerdos de funcionamiento— optimiza el diseño de planeaciones, la elaboración de instrumentos de evaluación y la interpretación colectiva de resultados. Esta dinámica también fortalece la dimensión socioemocional del profesorado: compartir dudas, logros y frustraciones reduce el estrés profesional, incrementa el sentido de autoeficacia y promueve la corresponsabilidad por la mejora continua. Finalmente, el trabajo en grupo me ha mostrado que la calidad de la enseñanza no depende únicamente del desempeño individual del docente, sino de la capacidad institucional para construir redes de apoyo, promover la reflexión crítica y sostener procesos sistemáticos de seguimiento y evaluación que integren múltiples voces.",
            },

            /* Párrafo 2 — Aprendizajes metacognitivos y evaluación entre pares (~300 palabras) */
            {
              type: "paragraph",
              text: "Desde una mirada metacognitiva, el trabajo colaborativo me ha enseñado a ‘pensar sobre mi manera de enseñar’. Las sesiones de coevaluación, la observación entre pares y el análisis de portafolios docentes posibilitan identificar patrones, sesgos o zonas ciegas que pasan inadvertidas cuando se evalúa en solitario. He aprendido a formular preguntas guía para orientar la reflexión (¿por qué tomé esta decisión didáctica?, ¿qué evidencias tengo de su impacto?, ¿qué alternativas no exploré?), a construir rúbricas compartidas que precisan los criterios de calidad y a negociar estándares comunes que dan coherencia al juicio evaluativo. Además, he constatado que la triangulación de evidencias —observaciones de aula, resultados de aprendizaje, percepciones estudiantiles y autoevaluaciones— enriquece la interpretación de los datos y conduce a planes de mejora más pertinentes. Esta cultura de indagación colaborativa favorece la transferencia de buenas prácticas: estrategias que a un docente le funcionan pasan a formar parte del repertorio colectivo del equipo y se adaptan a otros contextos. Finalmente, el trabajo en grupo refuerza la ética profesional: discutir abiertamente dilemas evaluativos, sesgos de calificación o tensiones entre la prescripción curricular y la realidad del aula fortalece el compromiso con la equidad, la transparencia y la validez de los procesos evaluativos.",
            },

            /* Párrafo 3 — Retos, tensiones y condiciones de posibilidad (~300 palabras) */
            {
              type: "paragraph",
              text: "No obstante sus beneficios, el trabajo en grupo también me ha mostrado retos estructurales y culturales. Coordinar tiempos y agendas, distribuir responsabilidades de forma equitativa y sostener la motivación en periodos de alta carga administrativa son desafíos recurrentes. Asimismo, emergen tensiones epistemológicas y metodológicas: colegas con enfoques pedagógicos distintos pueden discrepar en torno a los criterios de evaluación, al uso de tecnologías o al papel de la evidencia cuantitativa frente a la cualitativa. He aprendido que estas divergencias no se resuelven imponiendo un modelo único, sino mediante acuerdos explícitos, transparencia en los criterios y apertura al contraste de supuestos. Otra lección clave es la necesidad de apoyos institucionales: sin tiempos formales en el horario, sin reconocimiento académico y sin recursos para documentar, analizar y socializar las experiencias, el trabajo colaborativo suele diluirse o quedarse en voluntarismo. Por ello, es indispensable que la escuela o programa impulse estructuras estables (comunidades profesionales de aprendizaje, círculos de estudio, tutorías entre pares) y que integre el trabajo en equipo como parte de los sistemas de evaluación y desarrollo profesional docente.",
            },

            /* Párrafo 4 — Implicaciones para la evaluación docente y la mejora continua (~300 palabras) */
            {
              type: "paragraph",
              text: "Una síntesis central del aprendizaje colaborativo es que la evaluación docente cobra sentido cuando es co-construida, dialógica y orientada a la acción. He aprendido que los dispositivos colectivos —rúbricas compartidas, protocolos de observación, análisis conjunto de evidencias y planes de mejora colegiados— potencian la validez y la pertinencia del juicio evaluativo. También que la evaluación debe reconocer los esfuerzos del docente por contextualizar su enseñanza, articularse con la formación continua y generar ciclos iterativos de diagnóstico, intervención y seguimiento. El trabajo en grupo contribuye a pasar de una evaluación centrada en el control a una evaluación para el desarrollo profesional, en la que el error se interpreta como insumo diagnóstico y la retroalimentación como motor de transformación. Finalmente, he comprendido que consolidar esta cultura requiere liderazgo pedagógico distribuido, tiempos institucionalizados para la reflexión, y el compromiso de documentar, sistematizar y socializar lo aprendido, de modo que el conocimiento producido colectivamente impacte la organización escolar y, sobre todo, la experiencia de aprendizaje de los estudiantes.",
            },

            /* Video de apoyo */
            {
              type: "video",
              title:
                "Aprendizajes docentes del trabajo colaborativo: coevaluación, comunidades de práctica y mejora continua",
              src: "https://www.youtube.com/watch?v=wpiz_OUEulE",
              caption:
                "Video introductorio que ilustra cómo el trabajo en equipo transforma la evaluación y el desarrollo profesional docente.",
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
          href: "https://www.youtube.com/watch?v=8Do0OfuUda8", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Retos e implicaciones de la formación docente. https://www.youtube.com/watch?v=yESRwY8nS98",
            "Retos y problemas a los que el docente se enfrenta hoy en día. https://www.youtube.com/watch?v=2HU5FlXiLg0",
            //  Añade aquí las referencias reales extraídas del PDF
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
            "Perrenoud, P. (2019). *Diez nuevas competencias para enseñar*. Barcelona, España: Editorial Graó.",
            "Popham, W. J. (2012). *Evaluación educativa: Conceptos y aplicaciones*. Ciudad de México: Pearson.",
            "Scriven, M. (1991). *Evaluación de la enseñanza: Perspectivas y enfoques*. Madrid, España: Alianza Editorial.",
            "Tobón, S. (2010). *Formación basada en competencias: pensamiento complejo, diseño curricular y didáctica*. Bogotá, Colombia: ECOE Ediciones.",
            "Zabalza, M. A. (2003). *Competencias docentes del profesorado universitario: Calidad y desarrollo profesional*. Madrid, España: Narcea Ediciones.",
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
