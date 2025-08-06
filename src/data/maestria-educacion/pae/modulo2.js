/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath = process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
programId : "ME",                // Maestría en Educación
courseId  : "ME-PAE",            // Paradigmas Actuales de la Enseñanza
id        : "ME-PAE-M2",         // Módulo 2

/* ── Datos visibles ─────────────────────────── */
courseName: "Paradigmas actuales de la enseñanza",
title     : "Módulo 2. Paradigmas actuales de la enseñanza (Sesión 2)",
semestre  : "4º semestre",
teacher   : "Mtra. Lucila Yolanda Sánchez Orea",

/* ── Objetivo y competencias ────────────────── */
objective: "Valorar al paradigma constructivista como modelo de interacción y trabajo colaborativo en el proceso educativo y como parte de la formación docente que responde a necesidades actuales de los grupos escolares.",
competencies: [
  "Identificar las condiciones del paradigma del constructivismo, para mejorar la práctica docente.",
  "Reconocer la importancia del constructivismo, para generar nuevos espacios áulicos en el trabajo colaborativo.",
  "Valorar al constructivismo como un paradigma preocupado por la búsqueda de un aprendizaje colaborativo, para que el docente ajuste y rediseñe su actuar pedagógico.",
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

  /* 1. Unidad principal (según el PDF: Unidad 1) */
  {
    id: "1",
    numbering: "Unidad 1",
    title: "Paradigmas actuales de la enseñanza y la práctica escolar",
    content: [
    {
      type: "paragraph",
      text:
        "Esta unidad profundiza en el paradigma constructivista como marco para comprender cómo aprenden las personas y, sobre todo, cómo se diseña la enseñanza para que ese aprendizaje ocurra con sentido. Partimos de una idea clave: el conocimiento no se transfiere de forma mecánica del docente al alumno, sino que se construye activamente cuando el estudiante vincula nuevos contenidos con sus experiencias, saberes previos e intereses. Desde esta perspectiva, la enseñanza deja de ser un conjunto de explicaciones y ejercicios rutinarios para convertirse en el diseño de situaciones significativas: problemas auténticos, preguntas generadoras, proyectos colaborativos, estudio de casos, debates informados, exploraciones guiadas y tareas de desempeño. El papel del docente, por tanto, se redefine como mediador: quien organiza el ambiente, anticipa dificultades, ofrece andamiajes y retira apoyos de manera gradual conforme crece la autonomía. En paralelo, la evaluación migra hacia procesos formativos que retroalimentan, monitorean el progreso y hacen visibles las evidencias del aprender. Veremos cómo esta lógica se articula con las necesidades reales del aula y con los lineamientos de política educativa contemporánea que colocan a la escuela como espacio privilegiado para formar ciudadanía crítica, colaborativa y capaz de aprender a lo largo de la vida."
    },
    {
      type: "accordion",
      header: "Claves del enfoque (en una mirada rápida)",
      open: false,
      text:
        "- El alumno construye significado activamente a partir de saberes previos.\n" +
        "- Docente como mediador: diseña, andamia, retroalimenta y retira apoyos gradualmente.\n" +
        "- Evaluación formativa: evidencias, criterios explícitos y ciclos de mejora."
    },
    {
      type: "paragraph",
      text:
        "Un segundo foco de la unidad es la dimensión sociocultural del aprendizaje. Aprender no es sólo un acto individual; ocurre en interacción con otros y dentro de comunidades de práctica que comparten lenguajes, herramientas y propósitos. Por ello cobra relevancia la Zona de Desarrollo Próximo (ZDP): la distancia entre lo que un estudiante puede resolver de manera independiente y lo que logra con apoyo experto o entre pares más capaces. El andamiaje didáctico —preguntas que orientan, modelos de procedimiento, organizadores visuales, rúbricas claras, ejemplos comentados, protocolos de discusión— es la estrategia concreta con la que el docente convierte esa distancia en oportunidad. La colaboración, bien estructurada, no es “trabajo en equipo” sin más: implica roles definidos, metas compartidas, interdependencia positiva y responsabilidad individual. Así, la escuela deja de ser un espacio de memorización aislada para funcionar como laboratorio social del conocimiento, en el que los estudiantes negocian significados, contrastan evidencias, sostienen argumentos y transfieren lo aprendido a situaciones nuevas. Entender esta dinámica nos permitirá traducir el discurso constructivista en decisiones didácticas observables."
    },
    {
      type: "paragraph",
      text:
        "Diseñar con enfoque constructivista exige pensar de atrás hacia adelante: primero clarificar qué productos, desempeños o transformaciones evidencian el aprendizaje; luego determinar los criterios de calidad y, por último, planear experiencias que conduzcan hasta ahí. En este itinerario, activar saberes previos resulta crucial: llaves de lectura, preguntas de anticipación, mapas conceptuales iniciales o diagnósticos breves ayudan a detectar ideas alternativas y malentendidos. Después, el docente propone situaciones retadoras pero alcanzables que conectan con problemas del contexto del alumnado. Las explicaciones magistrales no desaparecen; se reubican para ofrecer marcos, síntesis o modelos cuando se necesitan. La práctica deliberada cierra el ciclo: los estudiantes aplican, reciben retroalimentación específica y revisan su trabajo. La evaluación formativa acompaña todo el proceso, combinando instrumentos variados (listas de cotejo, rúbricas, portafolios, diarios de aprendizaje) que no sólo califican, sino que enseñan a evaluar. El resultado es una secuencia didáctica coherente, donde cada actividad tiene propósito, criterios de éxito y oportunidades reales de mejora."
    },
    
    {
      type: "accordion",
      header: "Diseño didáctico paso a paso",
      open: false,
      text:
        "1) Define desempeños y criterios de calidad (qué evidenciará el aprendizaje).\n" +
        "2) Activa saberes previos y detecta ideas alternativas (diagnóstico breve).\n" +
        "3) Propón tareas auténticas con andamiajes y práctica deliberada.\n" +
        "4) Cierra con transferencia: aplicar lo aprendido en un contexto nuevo."
    },
    {
      type: "paragraph",
      text:
        "Otro componente esencial es la accesibilidad del aprendizaje. El constructivismo no se reduce a ‘dejar hacer’; demanda una planificación sensible a la diversidad. Diferenciar no significa diseñar una secuencia distinta por estudiante, sino ofrecer múltiples vías de acceso al contenido (textos, gráficos, videos, demostraciones), de participación (debates, simulaciones, construcción, escritura) y de evidencias (infografías, presentaciones, proyectos, pruebas prácticas) manteniendo expectativas altas y criterios comunes. El clima emocional del aula también es pedagógicamente decisivo: sin seguridad psicológica, el error se evita y la curiosidad se retrae. Por ello se trabajan rutinas de pensamiento, acuerdos de convivencia, protocolos de crítica amable y pausas para autorregulación. Esta dimensión socioemocional no ‘suaviza’ la exigencia; la hace posible, porque devuelve a los procesos ejecutivos (atención, memoria de trabajo, planificación) la energía que la ansiedad les roba. En suma, la inclusión se vuelve una práctica concreta de diseño y mediación que amplía la participación de todos."
    },
    {
      type: "paragraph",
      text:
        "Finalmente, conectamos el paradigma constructivista con la mejora de la práctica docente y la cultura escolar. La coherencia curricular se cuida articulando objetivos, metodologías y evaluación; la colaboración profesional entre docentes permite diseñar, observar y refinar clases con base en evidencias; y la comunicación con familias y comunidad alinea expectativas y multiplica oportunidades de aprendizaje fuera del aula. A nivel institucional, se promueven ciclos de indagación-acción: definir un problema de aprendizaje, probar intervenciones, recoger datos, reflexionar y ajustar. Así, el discurso se convierte en rutina organizativa. Esta unidad te proporcionará plantillas para planear por desempeños, ejemplos de andamiajes, repertorios de rutinas de pensamiento y modelos de retroalimentación descriptiva que podrás adaptar a tu contexto. El objetivo no es ‘aplicar’ el constructivismo como receta, sino desarrollar criterio didáctico para decidir con fundamento cuándo, cómo y por qué usar cada recurso. En breve: que la didáctica sea una ingeniería cuidadosa del aprendizaje significativo, colaborativo y transferible."
    },

    /* Acordeones (3 niveles) */
    {
      type: "accordion",
      header: "Riesgos frecuentes y cómo evitarlos",
      open: false,
      text:
        "- Actividades sin propósito: explicita siempre el ‘para qué’ y los criterios.\n" +
        "- Trabajo ‘en equipo’ sin estructura: define roles, tiempos y productos.\n" +
        "- Retroalimentación vaga: usa rúbricas breves, ejemplos y comentarios accionables."
    }
  ],

    /* → TEMAS de la unidad */
    subthemes: [
      {
        id: "1.T1",
        numbering: "Tema 1",
        title: "Los paradigmas actuales de la enseñanza y la práctica escolar",
        content: [
          {
            type: "paragraph",
            text:
              "Panorama del constructivismo y su impacto en el aula: antecedentes socioculturales, rol del docente, y pautas para la organización didáctica centrada en la participación del alumno."
          },
        ],

        /* → Subtemas del Tema 1 (según el PDF) */
        subthemes: [
          {
            id: "1.2",
            numbering: "1.2",
            title: "La práctica escolar dentro del enfoque constructivista",
            content: [
              {
                type: "paragraph",
                text:
                  "Descripción general de la práctica escolar desde el constructivismo y su orientación al aprendizaje colaborativo."
              },
            ],
            subthemes: [
              {
                id: "1.2.1",
                numbering: "1.2.1",
                title: "Principios del enfoque constructivista en la educación",
                content: [
                  { type: "paragraph", text: "Principios operativos para planear, enseñar y evaluar con base constructivista." },
                ],
              },
              {
                id: "1.2.2",
                numbering: "1.2.2",
                title: "Justificación de la concepción constructivista",
                content: [
                  { type: "paragraph", text: "Fundamentos teóricos y pedagógicos que sustentan la adopción del enfoque." },
                ],
              },
              {
                id: "1.2.3",
                numbering: "1.2.3",
                title: "Constructivismo y aprendizaje significativo",
                content: [
                  { type: "paragraph", text: "Relación entre conocimientos previos, nuevos significados y función del andamiaje." },
                ],
              },
              {
                id: "1.2.4",
                numbering: "1.2.4",
                title: "La función mediadora del docente y la interacción educativa",
                content: [
                  { type: "paragraph", text: "Mediación docente, ZDP, andamiaje y dinámicas de interacción social en el aula." },
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
          href: "https://www.youtube.com/watch?v=ldhpS8R5ods", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "¿Qué es el diseño curricular? ✔ [Concepto, Autores y Antecedentes] https://www.youtube.com/watch?v=ldhpS8R5ods",
            "Diseño Curricular QUÉ ES y CÓMO se HACE EJEMPLOS https://www.youtube.com/watch?v=3IOkwLKyHNE",
            "Evaluación Curricular Interna Y Externa || Nitzia Tavarez || https://www.youtube.com/watch?v=OR6YlkxNtps",
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
