const allUnitsData = {
  "1": { // Este es el 'unitId' que se usará en la URL, ej: /modulo/1
    id: "1",
    courseName: "Currículum y práctica docente",
    semestre: "Primer Semestre",
    teacher: "Dr. Jesús Agustín Zapata Velázquez",
    title: "Unidad 1. Currículum y Docencia",
    objective: "Analizar y comprender críticamente la interrelación entre teoría y práctica en el campo del currículum y la docencia, con el fin de desarrollar estrategias educativas efectivas y pertinentes que respondan a los desafíos y necesidades de los entornos educativos contemporáneos.",
    competencies: [
      "Desarrollar la habilidad para diseñar y adaptar currículos innovadores, inclusivos y pertinentes...",
      "Fortalecer la capacidad para analizar críticamente las teorías del currículum y la práctica docente...",
      "Desarrollar la capacidad para incorporar efectivamente la tecnología en el currículum y la práctica docente...",
      "Cultivar habilidades de liderazgo para promover y gestionar el cambio en instituciones educativas...",
    ],
    themes: [
      // === TEMA DE INFORMACIÓN DE LA UNIDAD 1 (DEBE SER EL PRIMERO) ===
      {
        id: "1.info", // ID único para la información de la unidad
        numbering: "Info",
        title: "Información de la Unidad",
        content: [], // El contenido se genera dinámicamente en ContentArea
        isUnitInfo: true // Bandera para identificar este tema especial
      },
      // === FIN TEMA DE INFORMACIÓN ===
      {
        id: "1.0",
        numbering: "Introducción",
        title: "Introducción a la Unidad 1",
        content: [
          { type: "paragraph", text: "Bienvenido a la Unidad 1 del programa de Doctorado en Educación: 'Currículum y práctica docente'. Esta unidad es fundamental para la comprensión y mejora de la educación. Nos enfocaremos en la relación simbiótica entre el currículum y la práctica docente." },
          { type: "paragraph", text: "El currículum es más que un plan de estudios; es una declaración de intenciones y una guía de lo que se enseña y cómo. La práctica docente, por su parte, es el arte y la ciencia de llevar el currículum a la vida en el aula." },
          { type: "paragraph", text: "En esta unidad, abordaremos los rápidos cambios en la sociedad, la tecnología y la economía, y cómo estos afectan la relación entre el currículum y la docencia, incluyendo la globalización, la inclusión, la diversidad y la tecnología educativa." },
          { type: "paragraph", text: "Nuestros objetivos son desarrollar una comprensión profunda del currículum y su impacto en la práctica docente, así como equiparte con herramientas para analizar, diseñar y aplicar currículos de manera efectiva y creativa." },
          { type: "paragraph", text: "La metodología incluirá lecturas, discusiones, estudios de caso y proyectos prácticos, fomentando la colaboración activa." }
        ]
      },
      {
        id: "1.1",
        numbering: "1.1",
        title: "Currículum y Docencia",
        content: [
          { type: "paragraph", text: "En este primer subtema, exploraremos la naturaleza intrínseca y la interacción dinámica entre el currículum y la docencia." },
          { type: "paragraph", text: "El currículum es una construcción compleja que integra diversos elementos y refleja los valores, creencias y prioridades de una sociedad o institución educativa. Es un documento vivo que evoluciona y se adapta." },
          { type: "paragraph", text: "El currículum incluye:" },
          { type: "paragraph", text: "• Objetivos Educacionales: Lo que se espera que los estudiantes conozcan y sean capaces de hacer al finalizar un curso o programa." },
          { type: "paragraph", text: "• Contenidos: Los temas, conceptos y habilidades específicos que se enseñarán." },
          { type: "paragraph", text: "• Metodologías de Enseñanza: Las estrategias y enfoques pedagógicos que los docentes utilizarán para entregar los contenidos." },
          { type: "paragraph", text: "• Evaluación: Los métodos y herramientas para medir y evaluar el aprendizaje de los estudiantes." },
          { type: "paragraph", text: "• Experiencias de Aprendizaje: Las actividades, proyectos y prácticas a través de las cuales los estudiantes interactúan con el contenido." }
        ],
        subthemes: [
          {
            id: "1.1.1",
            numbering: "1.1.1",
            title: "Concepto de Currículum y Docencia",
            content: [
              { type: "paragraph", text: "Aquí se profundiza en la definición de cada término y cómo interactúan." },
              { type: "paragraph", text: "La docencia, por su parte, abarca:" },
              { type: "paragraph", text: "• Planificación de Clases: La preparación cuidadosa de actividades y materiales de aprendizaje." },
              { type: "paragraph", text: "• Enseñanza: La presentación efectiva y atractiva de los contenidos en el aula." },
              { type: "paragraph", text: "• Evaluación y Retroalimentación: El monitoreo constante del progreso de los estudiantes y la provisión de feedback constructivo." },
              { type: "paragraph", text: "• Desarrollo Profesional: La actualización continua de conocimientos y habilidades pedagógicas." },
              { type: "paragraph", text: "La relación entre currículum y docencia es dinámica y recíproca; el currículum proporciona la estructura y la dirección, mientras que la docencia lo lleva a la vida en el aula." },
              { type: "accordion", header: "Actividad: Reflexión sobre el Currículum", text: "Para concluir este subtema te invito a ver el video: ¿Qué es y cómo funciona un currículo educativo? Reflexiona sobre: ¿Qué es el currículum?, ¿Cuáles son los cuatro elementos básicos de un currículum?, ¿Qué engloban los contenidos de un currículum?" },
              // === CORRECCIÓN DE URL DE YOUTUBE ===
              { type: "video", title: "¿Qué es y cómo funciona un currículo educativo?", url: "https://www.youtube.com/embed/RuVL6EG5E8I", description: "Video complementario para la reflexión sobre el currículum."} // **Cambia VIDEO_ID por el ID real del video**
            ]
          },
          {
            id: "1.1.2",
            numbering: "1.1.2",
            title: "El currículum como práctica pedagógica",
            content: [
              { type: "paragraph", text: "Este subtema explora cómo el currículum se entrelaza intrínsecamente con la pedagogía, influyendo en qué y cómo se enseña. El currículum es una manifestación de prácticas pedagógicas; cada decisión curricular tiene suposiciones pedagógicas implícitas." },
              { type: "paragraph", text: "Debe adaptarse a la diversidad de estilos de aprendizaje, diseñando experiencias inclusivas." },
              { type: "paragraph", text: "El rol docente es crucial en la implementación, interpretación y adaptación del currículum a situaciones concretas." },
              { type: "paragraph", text: "Tendencias importantes incluyen metodologías activas y participativas (aprendizaje basado en proyectos, cooperativo, tecnologías educativas)." }
            ]
          },
          {
            id: "1.1.3",
            numbering: "1.1.3",
            title: "El currículum y su vinculación con las instituciones educativas",
            content: [
              { type: "paragraph", text: "Explora cómo el currículum se conecta con la estructura, cultura y objetivos institucionales. Es una manifestación concreta de la misión y visión de la institución." },
              { type: "paragraph", text: "Las instituciones adaptan el currículum a sus necesidades y circunstancias específicas (tamaño, recursos, población estudiantil, contexto cultural y geográfico)." },
              { type: "paragraph", text: "El desarrollo curricular es un proceso participativo con administradores, docentes, estudiantes y, a veces, padres." },
              { type: "paragraph", text: "Desafíos de implementación: capacitación docente, disponibilidad de recursos, infraestructura y cambio organizacional." },
              { type: "accordion", header: "Actividad: Video '¿Qué es Currículum y cuáles son sus dimensiones?'", text: "Te invito a ver este video para complementar la información." },
              // === CORRECCIÓN DE URL DE YOUTUBE ===
              { type: "video", title: "¿Qué es Currículum y cuáles son sus dimensiones?", url: "https://www.youtube.com/embed/5-TsUQhZ2NA", description: "Un vistazo a las diferentes dimensiones del currículum."} // **Cambia VIDEO_ID por el ID real del video**
            ]
          },
          {
            id: "1.1.4",
            numbering: "1.1.4",
            title: "El quehacer docente, constructor del currículum",
            content: [
              { type: "paragraph", text: "Destaca el papel activo y creativo de los educadores en la formación y ejecución del currículum. Los docentes interpretan, adaptan y construyen el currículum en el aula, reflejando su experiencia, creatividad y comprensión pedagógica." },
              { type: "paragraph", text: "Cada experiencia de aprendizaje en el aula es única debido a la adaptación docente a las necesidades, intereses y contexto cultural de los estudiantes." },
              { type: "paragraph", text: "La adaptabilidad es esencial; los docentes ajustan métodos y materiales para maximizar la eficacia del aprendizaje." }
            ]
          },
          {
            id: "1.1.5",
            numbering: "1.1.5",
            title: "Función socializadora del currículum",
            content: [
              { type: "paragraph", text: "Refleja cómo la educación formal contribuye a la socialización de los individuos, desarrollando aspectos sociales, culturales y éticos. Actúa como mediador entre el individuo y la sociedad, transmitiendo normas, valores y expectativas sociales." },
              { type: "paragraph", text: "Contribuye a la construcción de la identidad individual y colectiva, transmitiendo valores como respeto, justicia, equidad y responsabilidad." },
              { type: "paragraph", text: "Prepara para la ciudadanía activa, desarrollando habilidades críticas y reflexivas, y fomentando la participación cívica." }
            ]
          },
          {
            id: "1.1.6",
            numbering: "1.1.6",
            title: "Los componentes del currículum",
            content: [
              { type: "paragraph", text: "El currículum es una estructura compleja de componentes interconectados." },
              { type: "paragraph", text: "Componentes Fundamentales: Objetivos Educativos, Contenido o Conocimiento, Metodologías de Enseñanza, Recursos Didácticos, Evaluación, Experiencias de Aprendizaje, Contexto del Currículum." },
              { type: "accordion", header: "Actividad: Video 'El Currículo educativo y su importancia'", text: "Te invito a ver este video para complementar la información y reflexionar sobre su impacto." },
              // === CORRECCIÓN DE URL DE YOUTUBE ===
              { type: "video", title: "El Currículo educativo y su importancia", url: "https://www.youtube.com/embed/NOvqWOIq8vM", description: "Un video que destaca la relevancia del currículum." } // **Cambia VIDEO_ID por el ID real del video**
            ]
          },
        ]
      },
      {
        id: "2.0",
        numbering: "Unidad 2",
        title: "Fundamentos Teóricos del Currículum",
        content: [
            { type: "paragraph", text: "Bienvenido a la Unidad 2, un viaje profundo en las bases teóricas que sustentan la creación y desarrollo del currículum. Esta unidad te invita a un análisis crítico y reflexivo de las teorías educativas que han influenciado y continúan moldeando el diseño e implementación del currículum." },
            { type: "paragraph", text: "El currículum no es un documento neutral; es un reflejo de la filosofía educativa, la cultura, los valores sociales y las aspiraciones de una sociedad. En esta unidad, examinaremos cómo diferentes teorías han dado forma a nuestra comprensión del currículum, desde enfoques tradicionales hasta contemporáneos." }
        ],
        subthemes: [
            // === ELIMINADO: ESTE TEMA '2.info' ESTABA DUPLICADO AQUÍ ===
            // {
            //   id: "2.info",
            //   numbering: "Info",
            //   title: "Información de la Unidad",
            //   content: [],
            //   isUnitInfo: true
            // },
            // === FIN ELIMINACIÓN ===
            {
                id: "2.1",
                numbering: "2.1",
                title: "Filosofía",
                content: [
                    { type: "paragraph", text: "La filosofía constituye la base de principios y prácticas educativas, reflejadas en las decisiones curriculares. La pregunta central aquí es el propósito de la educación: ¿es la transmisión de conocimientos, la preparación laboral, el fomento del pensamiento crítico o la formación de una ciudadanía ética?" },
                    { type: "paragraph", text: "La filosofía influye en la selección y organización del contenido según lo que se considera 'conocimiento válido' (empírico, científico, vivido, intuición, práctico)." },
                    { type: "paragraph", text: "También sustenta las teorías del aprendizaje y el desarrollo humano (constructivismo, instrucción directa) y los fundamentos éticos y valores promovidos (educación cívica, ética, sostenibilidad, justicia social)." }
                ]
            },
            {
                id: "2.2",
                numbering: "2.2",
                title: "Psicología",
                content: [
                    { type: "paragraph", text: "La psicología abarca teorías y principios del desarrollo y aprendizaje humano que informan la estructura y entrega del currículum. Es crucial para comprender cómo los estudiantes adquieren conocimientos, desarrollan habilidades y forman actitudes." },
                    { type: "paragraph", text: "Influencia en el diseño curricular a través de teorías del aprendizaje:" },
                    { type: "paragraph", text: "• Conductismo: Aprendizaje por interacción con el entorno (estímulos, respuestas, refuerzos). Reflejado en objetivos claros y refuerzos." },
                    { type: "paragraph", text: "• Cognitivismo: Procesos mentales internos (comprensión, procesamiento, retención). Incluye estrategias para pensamiento crítico y resolución de problemas." },
                    { type: "paragraph", text: "• Constructivismo: Aprendizaje como proceso activo de construcción del conocimiento." }
                ]
            }
        ]
      }
      // Asegúrate de que cualquier otra unidad siga el patrón de tener el tema .info al inicio de su arreglo 'themes'
    ]
  },
  // Si tuvieras más unidades (ej. "2", "3", etc.), DEBES agregar un tema de información similar:
  "2": { // Ejemplo de cómo la Unidad 2 debería estar estructurada si fuera una unidad principal
    id: "2",
    courseName: "Otra Materia",
    semestre: "Segundo Semestre",
    teacher: "Dr. Otro Docente",
    title: "Unidad 2. Título de la Unidad 2",
    objective: "Objetivo de la Unidad 2.",
    competencies: ["Competencia 1", "Competencia 2"],
    themes: [
      // === TEMA DE INFORMACIÓN DE LA UNIDAD 2 (DEBE SER EL PRIMERO SI LA UNIDAD 2 ES UNA ENTRADA PRINCIPAL) ===
      {
        id: "2.info", // ID único para la información de la unidad
        numbering: "Info",
        title: "Información de la Unidad",
        content: [],
        isUnitInfo: true
      },
      // === FIN TEMA DE INFORMACIÓN ===
      { id: "2.1", numbering: "2.1", title: "Tema de la Unidad 2", content: [{ type: "paragraph", text: "Contenido de la Unidad 2" }] }
    ]
  }
};

export const getUnitData = (unitId) => {
  return allUnitsData[unitId];
};

export const findThemeById = (themes, themeId) => {
  for (const theme of themes) {
    if (theme.id === themeId) {
      return theme;
    }
    if (theme.subthemes) {
      const foundSubtheme = findThemeById(theme.subthemes, themeId);
      if (foundSubtheme) {
        return foundSubtheme;
      }
    }
  }
  return null;
};

export const flattenThemes = (themes) => {
  let flatList = [];
  themes.forEach(theme => {
    flatList.push(theme);
    if (theme.subthemes && theme.subthemes.length > 0) {
      flatList = flatList.concat(flattenThemes(theme.subthemes));
    }
  });
  return flatList;
};