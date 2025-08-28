/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "CP", // Contaduría Pública
  courseId: "ARH", // Administración de Recursos Humanos
  id: "ARH-Mod2",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Administración de Recursos Humanos",
  title:
    "Módulo 2. Administración de sueldos y salarios y valuación de puestos",
  semestre: "Quinto",
  teacher: "Esp. Eduardo Antonio Alfaro Hernández",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Comprender la importancia que guarda la administración de los sueldos y salarios dentro de cualquier organización.",
  competencies: [
    "Conocimiento de los diferentes métodos de valuación de puestos.",
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

    /* 1. Unidad principal (agrupa Temas 2 y 3 del material) */
    {
      id: "1",
      numbering: "Unidad 1",
      title: "Administración de sueldos y salarios y valuación de puestos",
      content: [
        {
          type: "paragraph",
          text: "La administración de sueldos y salarios constituye el sistema mediante el cual una organización define la retribución económica de sus puestos y personas, preservando la equidad interna y la competitividad externa. Se apoya en políticas claras, procedimientos documentados y herramientas analíticas que permiten alinear la compensación con la estrategia, la estructura organizacional y el desempeño. En sentido amplio, la compensación total integra componentes fijos (sueldo base), variables (incentivos), prestaciones y reconocimientos no monetarios, todo ello articulado con la propuesta de valor al colaborador. Un diseño sólido reduce la rotación, favorece el compromiso y minimiza riesgos legales o de reputación. Esta unidad ofrece una visión integrada: primero, los fundamentos para construir una estructura salarial sustentada en datos de mercado y criterios objetivos; después, la valuación de puestos como técnica para determinar el valor relativo de cada rol. El recorrido enfatiza definiciones, métodos y decisiones prácticas, desde la formulación de tabuladores hasta los mecanismos de actualización y control, con foco en la transparencia, la trazabilidad y la comunicación efectiva hacia las personas.",
        },
        {
          type: "paragraph",
          text: "Las políticas salariales son el marco que guía decisiones cotidianas —contrataciones, promociones, ajustes por mérito y revisiones generales—, delimitando grados de libertad y responsabilidades. Una política bien redactada define objetivos (atracción, retención, equidad), fuentes de información (encuestas salariales), métricas (mediana, percentiles), bandas o rangos y criterios para excepciones. Las encuestas de salarios proveen la referencia externa: comparan puestos homólogos en organizaciones afines por tamaño, sector y región. Para aprovecharlas, se requiere asegurar comparabilidad: matching de puestos basado en contenido y no en título, normalizar jornadas/beneficios, y depurar atípicos. Con esa base, es posible estimar la curva de mercado por familia de puestos y decidir la posición objetivo (market target) según la estrategia de talento. La ética de datos es esencial: respetar confidencialidad de participantes y emplear metodologías robustas evita sesgos y conclusiones erróneas. Asimismo, un buen gobierno del proceso documenta fuentes, versiones y supuestos, permitiendo auditorías internas y revisiones periódicas.",
        },
        {
          type: "paragraph",
          text: "La remuneración del trabajo depende de múltiples factores que interactúan entre sí. Externamente inciden el mercado de talento (oferta y demanda por competencias), el costo de vida y la dinámica sectorial. Internamente destacan la estructura de puestos, el peso de cada rol en la cadena de valor, la complejidad y el impacto en resultados. La negociación colectiva e individual, las políticas de reconocimiento y los esquemas variables vinculados a indicadores (OKR/KPI) completan el cuadro. Todo ello debe enmarcarse en el cumplimiento legal: salario mínimo, igualdad de remuneración por trabajo de igual valor, no discriminación y obligaciones de seguridad social y fiscales. La transparencia salarial —con el nivel de detalle que la organización defina— fortalece la confianza y facilita conversaciones de desarrollo. Finalmente, la gestión de desempeño conecta mérito con incrementos, evitando automatismos inflacionarios y priorizando señales de productividad sostenible. Un sistema coherente evita compresiones salariales, reduce brechas injustificadas y habilita movilidad interna.",
        },
        {
          type: "paragraph",
          text: "La valuación de puestos determina el valor relativo de los roles con base en criterios objetivos y comparables, para sustentar la equidad interna. Parte de descripciones y perfiles bien elaborados —misión, funciones críticas, responsabilidades, relaciones, requisitos y condiciones—, y aplica métodos reconocidos. Los más extendidos son: (1) graduación previa, que ordena puestos por niveles genéricos; (2) alineamiento o comparación por pares, que jerarquiza puestos por juicio comparativo; y (3) el método por puntos, que asigna puntajes a factores compensables como conocimientos, habilidades, esfuerzo, responsabilidad y condiciones de trabajo. El método por puntos destaca por su trazabilidad, al desagregar factores y subfactores con escalas ancladas en comportamientos. La salida de la valuación es una jerarquía o mapa de grados que se traduce en bandas salariales. La participación de líderes y RH en comités de valuación, junto con calibraciones periódicas, es clave para reducir sesgos y mantener la vigencia del esquema ante cambios organizacionales.",
        },
        {
          type: "paragraph",
          text: "Integrar compensación y valuación exige una ruta metodológica disciplinada. Un enfoque práctico incluye: (1) consolidar la arquitectura de puestos y familias ocupacionales; (2) levantar o actualizar descripciones; (3) valuar con el método seleccionado y conformar grados; (4) levantar y analizar encuestas de mercado; (5) construir la curva de mercado y definir la política de posicionamiento (p. ej., P50 o P60); (6) diseñar tabuladores (mínimo–medio–máximo) por grado; (7) mapear cada puesto a un grado y cada persona a un punto del rango; (8) definir reglas de movimiento salarial (mérito, promoción, ajuste estructural) y gobernanza; (9) comunicar y capacitar a líderes; y (10) monitorear impactos y sesgos. Entre los riesgos frecuentes figuran descripciones desactualizadas, “títulos inflados”, excepciones no controladas y decisiones reactivas ante presiones del mercado. Como controles, ayudan comités de compensación, bitácoras de excepciones, revisiones semestrales y cuadros de mando que midan competitividad, dispersión, brechas y costos.",
        },

        /* Acordeón de 3 niveles */
        {
          type: "accordion",
          header: "Guía rápida (mapa mental en tres capas)",
          open: false,
          items: [
            {
              header: "Capa 1 — Conceptos clave",
              text: "Equidad interna (valuación de puestos) + competitividad externa (encuestas). Políticas salariales → criterios, rangos y excepciones. Compensación total = fijo + variable + prestaciones + reconocimiento.",
            },
            {
              header: "Capa 2 — Ruta metodológica",
              text: "Arquitectura y descripciones → valuación (graduación/alineamiento/puntos) → encuestas y curva de mercado → tabuladores por grado → reglas de movimientos → comunicación y control.",
            },
            {
              header: "Capa 3 — Buenas prácticas y riesgos",
              text: "Trazabilidad de datos y supuestos; matching riguroso con mercado; comités y bitácoras de excepciones; KPIs de competitividad y equidad. Riesgos: compresión salarial, títulos inflados, sesgos y decisiones ad hoc.",
            },
          ],
        },
      ],

      /* → Temas según el índice oficial */
      subthemes: [
        /* 2. ADMINISTRACIÓN DE SUELDOS Y SALARIOS */
        {
          id: "1.1",
          numbering: "2",
          title: "Administración de sueldos y salarios",
          content: [
            {
              type: "paragraph",
              text: "La administración de sueldos y salarios es el conjunto de políticas, procesos y herramientas para determinar, asignar y revisar la compensación de las personas en una organización. Su propósito es conciliar tres tensiones: la equidad interna (consistencia entre puestos y niveles), la competitividad externa (atracción/retención frente al mercado) y la sostenibilidad financiera (capacidad presupuestal). En la práctica, esto se traduce en estructuras salariales con rangos por grado, reglas de movimiento y criterios de ajuste que se aplican con disciplina y trazabilidad documental.",
            },
            {
              type: "paragraph",
              text: "‘Sueldo’ suele asociarse al componente fijo pagado periódicamente; ‘salario’ se usa como término legal más amplio. La compensación total, no obstante, integra componentes fijos (sueldo base), variables (bonos/ incentivos por desempeño o resultados) y prestaciones (dinero y en especie). La administración efectiva parte de descripciones de puesto actuales, valuación objetiva, mapeo de mercado y definición de bandas que alineen el valor relativo del puesto con el valor en el mercado de referencia.",
            },
            {
              type: "image",
              src: "https://media.licdn.com/dms/image/v2/D5622AQGP-9TN0gNqEw/feedshare-shrink_800/feedshare-shrink_800/0/1686675998313?e=2147483647&v=beta&t=d2CENSy8raUxUMbw6D8JMiUsRGTd2TR2IsLCZPn4eZo",
              alt: "Estructura de bandas salariales y posicionamiento de puestos",
            },
            {
              type: "paragraph",
              text: "La construcción de una estructura inicia con la valuación de puestos (puntos, factores, ranking o mercado puro). Después se agrupan puestos en grados, se calculan medianas objetivo por grado y se definen mínimos, medios y máximos (p. ej., amplitud del 40–60%). Herramientas como el compa-ratio y el posicionamiento por percentiles (p50 como referencia, p60–p75 para puestos críticos) permiten gestionar incrementos, ofertas de ingreso y riesgos de inequidad.",
            },
            {
              type: "accordion",
              header: "Guía rápida — pilares de la compensación",
              open: false,
              items: [
                {
                  header: "Equidad interna",
                  text: "Valuación consistente, factores claros (habilidad, responsabilidad, esfuerzo, condiciones). Evita solapamientos no deseados entre grados.",
                },
                {
                  header: "Competitividad externa",
                  text: "Mercado de referencia definido (sector, tamaño, región). Uso de percentiles para anclar bandas: p50/p60 y ajustes por escasez.",
                },
                {
                  header: "Sostenibilidad y gobierno",
                  text: "Presupuesto, topes por mérito/promoción, ventanas de ajuste, comités de compensación y trazabilidad en papeles de decisión.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "El componente variable alinea resultados y paga. Puede ser anual (bono por objetivos), trimestral (comisiones) o ad-hoc (incentivos de proyectos). Debe derivarse de indicadores controlables, con metas explícitas, fórmulas transparentes y límites a pagos extraordinarios. Su mezcla con el componente fijo depende del nivel del puesto, volatilidad del negocio y cultura de riesgo.",
            },
            {
              type: "paragraph",
              text: "Las prestaciones (legales y superiores) completan la propuesta de valor: vacaciones, prima vacacional, aguinaldo, seguros, fondos de ahorro, vales, planes de retiro, flexibilidad, bienestar y aprendizaje. Su diseño exige balance entre costo, valor percibido y cumplimiento normativo. Migrar a ‘beneficios flexibles’ permite personalizar sin elevar sustancialmente el costo total.",
            },
            {
              type: "paragraph",
              text: "La ejecución cotidiana requiere procesos: ofertas y tabulador de ingreso, revisiones salariales anuales (merit matrix), promociones y ajustes fuera de ciclo (con justificación), control de compa-ratios, análisis de brechas internas (incluida brecha de género), administración de encuestas de mercado y reporting ejecutivo. La transparencia —comunicar el ‘cómo’ y el ‘por qué’— reduce percepciones de injusticia y fortalece la confianza.",
            },
            {
              type: "accordion",
              header: "Checklist de implantación (paso a paso)",
              open: false,
              items: [
                {
                  header: "1) Insumos",
                  text: "Organigrama, descripciones de puesto, datos de nómina, resultados de desempeño, presupuesto y encuestas de mercado.",
                },
                {
                  header: "2) Diseño",
                  text: "Valuación, grados, bandas (mín-mid-máx), lineamientos de movimiento, política de ofertas y ajuste anual.",
                },
                {
                  header: "3) Operación",
                  text: "Matriz de mérito, control de excepciones, comunicación a líderes/colaboradores, monitoreo de dispersión y equidad.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "La gobernanza de compensación vive en políticas: definiciones, mercado objetivo, tiempos de revisión, elegibilidad de bono, reglas de promoción, límites de banda, autorizadores y documentación. Un comité de compensación (RH + Finanzas + Dirección) resuelve excepciones, aprueba promociones y vigila la higiene del tabulador. La analítica de compensación (dashboards de compa-ratio, penetración de banda, desviaciones) debe guiar decisiones, no solo describirlas.",
            },
          ],
          subthemes: [
            /* 2.1 Definición e importancia */
            {
              id: "1.1.1",
              numbering: "2.1",
              title: "Definición e importancia",
              content: [
                {
                  type: "paragraph",
                  text: "Desde una perspectiva de gestión, la compensación es la contraprestación total que la organización ofrece por el valor aportado por la persona. Su función no es ‘pagar por tiempo’, sino ‘pagar por contribución’, asegurando atracción, motivación y retención. En contextos de inflación y competencia por talento, el sistema debe ser adaptable sin perder consistencia.",
                },
                {
                  type: "paragraph",
                  text: "La importancia estratégica radica en su impacto sobre el desempeño: salarios mal alineados elevan rotación, ausentismo y conflictos; salarios bien diseñados anclan expectativas, ordenan trayectorias de carrera y permiten planear costos. La compensación total, comunicada como propuesta de valor, influye en la marca empleadora y en la experiencia del colaborador.",
                },
                {
                  type: "paragraph",
                  text: "En términos legales, ‘salario’ incluye percepciones fijas y variables integrables; por ello, definir qué integra o no el salario para efectos de cálculos laborales y de seguridad social es crítico. Operativamente, la precisión en conceptos de nómina, incidencias y registros contables evita contingencias.",
                },
                {
                  type: "accordion",
                  header: "Claves de gestión",
                  open: false,
                  items: [
                    {
                      header: "Coherencia interna",
                      text: "Relación sueldo-grado-desempeño; trayectorias claras para crecer sin inflar puestos.",
                    },
                    {
                      header: "Señales de mercado",
                      text: "Escasez de habilidades críticas puede justificar posicionamientos en p60-p75.",
                    },
                    {
                      header: "Higiene de nómina",
                      text: "Conceptos bien definidos, timbrado correcto, controles SOX/buena práctica.",
                    },
                  ],
                },
                {
                  type: "image",
                  src: "https://www.researchgate.net/publication/41805323/figure/fig1/AS:431514627383301@1479892512923/Figura-2-Valor-percibido-como-superavit-entre-beneficios-y-costes.png",
                  alt: "Matriz de valor percibido vs. costo de beneficios",
                },
                {
                  type: "paragraph",
                  text: "La compensación influye en la cultura: estructuras planas con bandas amplias fomentan movilidad y empowerment; estructuras muy rígidas favorecen orden, pero pueden limitar la agilidad. Por eso, el diseño debe dialogar con la estrategia —innovación, eficiencia, servicio— y con el tipo de talento que se busca escalar.",
                },
                {
                  type: "accordion",
                  header: "Riesgos y mitigaciones",
                  open: false,
                  items: [
                    {
                      header: "Compresión salarial",
                      text: "Nuevos con sueldos similares a veteranos → usar bandas y matrices de mérito.",
                    },
                    {
                      header: "Inequidad",
                      text: "Brechas por género/área → auditorías periódicas y ajustes focalizados.",
                    },
                    {
                      header: "Costos",
                      text: "Presupuesto insuficiente → priorizar roles críticos y pagos variables.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Finalmente, medir es gestionar: KPIs como rotación voluntaria, tiempo de cobertura, oferta rechazada por comp, desviación frente a mercado y penetración de banda muestran si la política está logrando sus fines. Sin data, la compensación se convierte en opinión; con data, en una palanca de ejecución estratégica.",
                },
              ],
            },

            /* 2.2 Políticas de sueldos y salarios */
            {
              id: "1.1.2",
              numbering: "2.2",
              title: "Políticas de sueldos y salarios",
              content: [
                {
                  type: "paragraph",
                  text: "Una política de sueldos y salarios define el ‘cómo’ se determinan, administran y comunican las decisiones de pago. Incluye mercado objetivo, método de valuación, estructura de bandas, elegibilidad y cálculo de variables, tiempos de revisión, reglas de promoción y niveles de autorización. Es el manual operativo que da certeza y reduce discrecionalidad.",
                },
                {
                  type: "paragraph",
                  text: "Las políticas creíbles especifican fuentes de mercado (encuestas), percentil de anclaje, amplitudes por grado, y lineamientos para ofertas de ingreso (p. ej., entre p40 y p60 salvo roles críticos). También establecen matrices de mérito que combinan desempeño y posición en banda, y límites para ajustes fuera de ciclo con justificación y aprobación colegiada.",
                },
                {
                  type: "paragraph",
                  text: "En promoción, se recomienda distinguir movimiento horizontal (ampliación de responsabilidades) de vertical (cambio de grado). Las reglas deben contemplar incrementos mínimos/máximos y validaciones de equidad con pares. En variables, la política define indicadores, ponderaciones, umbrales, techos y tratamiento de entradas/salidas parciales.",
                },
                {
                  type: "accordion",
                  header: "Elementos mínimos de una política",
                  open: false,
                  items: [
                    {
                      header: "Estructura y mercado",
                      text: "Grados, bandas, encuestas y percentiles.",
                    },
                    {
                      header: "Movimientos y revisiones",
                      text: "Ofertas, mérito, promociones, fuera de ciclo.",
                    },
                    {
                      header: "Gobierno y controles",
                      text: "Comité, autorizadores, documentación y auditoría interna.",
                    },
                  ],
                },
                {
                  type: "image",
                  src: "https://img.freepik.com/vettori-premium/vantaggi-e-svantaggi-della-valutazione-del-merito-e-del-merito-in-confronto-alla-valutazione-delle-prestazioni_466036-1622.jpg",
                  alt: "Flujo de decisión de compensación: ingreso, mérito, promoción",
                },
                {
                  type: "paragraph",
                  text: "La comunicación es parte de la política: niveles de transparencia (total, rangos por grado, filosofía general), materiales para líderes y un calendario de conversaciones salariales. Comunicar no eleva costos; desordena menos y mejora la percepción de justicia organizacional.",
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas",
                  open: false,
                  items: [
                    {
                      header: "Data hygiene",
                      text: "Homologar puestos y familias antes de encuestar/comparar.",
                    },
                    {
                      header: "Segmentación",
                      text: "Definir políticas diferenciadas para talento escaso o crítico.",
                    },
                    {
                      header: "Revisión anual",
                      text: "Ajustar por inflación/mercado con foco en equidad y roles clave.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Finalmente, alinear las políticas con Finanzas garantiza viabilidad: escenarios de presupuesto por grado, sensibilidad al tipo de cambio/inflación y simulaciones de impacto por cada 1% de incremento ayudan a tomar decisiones informadas y sostenibles.",
                },
              ],
              subthemes: [
                /* 2.2.1 Encuestas de salarios */
                {
                  id: "1.1.2.1",
                  numbering: "2.2.1",
                  title: "Encuestas de salarios",
                  content: [
                    {
                      type: "paragraph",
                      text: "Las encuestas de salarios proveen precios de mercado para puestos comparables. La clave es el job-matching: comparar responsabilidades y nivel de contribución, no solo títulos. Se selecciona un panel de empresas comparables por sector, tamaño y región, y se analizan percentiles (p25/p50/p75) para fijar referencias.",
                    },
                    {
                      type: "paragraph",
                      text: "Es recomendable ‘envejecer’ (aging) los datos según inflación o dinámica del sector y depurar outliers. Cruzar varias fuentes reduce sesgos. Con esa base se dibujan curvas de mercado por grado y se testean contra la realidad de atracción/retención (ofertas rechazadas, contra-ofertas, rotación).",
                    },
                    {
                      type: "accordion",
                      header: "Uso práctico",
                      open: false,
                      items: [
                        {
                          header: "Selección de fuentes",
                          text: "Encuestas confiables, metodología clara, cobertura regional.",
                        },
                        {
                          header: "Calibración",
                          text: "Ajustes por inflación, divisa y estacionalidad.",
                        },
                        {
                          header: "Aplicación",
                          text: "Definir percentil objetivo por familia/rol.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "El resultado no es ‘copiar el mercado’, sino decidir con criterio: quizá p50 para la mayoría, p60–p75 para roles escasos, y bandas más anchas en áreas de innovación para premiar habilidades críticas.",
                    },
                  ],
                },

                /* 2.2.2 Requisitos de la encuesta */
                {
                  id: "1.1.2.2",
                  numbering: "2.2.2",
                  title: "Requisitos de la encuesta",
                  content: [
                    {
                      type: "paragraph",
                      text: "Una encuesta útil debe garantizar: definiciones homogéneas (qué integra el salario base y la compensación total), muestra suficiente y representativa, metodología de levantamiento verificable y controles de calidad (detección de valores extremos). Debe permitir comparaciones por región, industria y tamaño.",
                    },
                    {
                      type: "paragraph",
                      text: "Exige además catálogos de puestos con descriptores y niveles, unidad de medida clara (mensual/anual), y variables complementarias (prestaciones, bonus target, prácticas de revisión). La trazabilidad (quién reporta, cuándo y cómo) y la confidencialidad son condiciones para confiar en los resultados.",
                    },
                    {
                      type: "accordion",
                      header: "Checklist técnico",
                      open: false,
                      items: [
                        {
                          header: "Cobertura",
                          text: "Nº de empresas y puestos mapeados por familia/grado.",
                        },
                        {
                          header: "Definiciones",
                          text: "Base, variable, total cash; integración (legales vs. superiores).",
                        },
                        {
                          header: "Calidad",
                          text: "Validaciones estadísticas y documentación pública.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "La organización debe documentar cómo ‘traduce’ la encuesta a su estructura, dejando evidencia en papeles de trabajo (matching, percentiles elegidos, supuestos de aging). Este archivo facilita auditorías internas y decisiones del comité de compensación.",
                    },
                  ],
                },

                /* 2.2.3 Principales datos a investigar */
                {
                  id: "1.1.2.3",
                  numbering: "2.2.3",
                  title: "Principales datos a investigar",
                  content: [
                    {
                      type: "paragraph",
                      text: "Además del sueldo base, conviene relevar: total cash (base + bono), política de incrementos (por mérito/promoción), elegibilidad y targets de variable por nivel, prestaciones clave (seguro de gastos médicos, vales, fondo de ahorro, planes de retiro), y prácticas de flexibilidad/beneficios no monetarios.",
                    },
                    {
                      type: "paragraph",
                      text: "Para roles comerciales o de operaciones, añadir fórmulas de comisión y caps; para tecnología, primas por habilidades; para liderazgo, long-term incentives. Complementar con indicadores de rotación, tiempo de cobertura y oferta rechazada por ‘comp’, ayuda a explicar diferencias entre ‘precio de mercado’ y realidad de atracción/retención.",
                    },
                    {
                      type: "accordion",
                      header: "Plantilla mínima de datos",
                      open: false,
                      items: [
                        {
                          header: "Compensación",
                          text: "Base, variable target, variable real, total cash, 12/13/14 pagas.",
                        },
                        {
                          header: "Prestaciones",
                          text: "Legales y superiores, esquemas flexibles, días de vacaciones.",
                        },
                        {
                          header: "Prácticas",
                          text: "Frecuencia de revisión, percentil objetivo, criterios de oferta.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Con estos datos, puedes construir tabuladores realistas, identificar brechas y priorizar ajustes. Lo esencial: decisiones documentadas, comunicadas y coherentes con la estrategia del negocio.",
                    },
                  ],
                },
              ],
            },

            {
              id: "1.1.3",
              numbering: "2.3",
              title: "Factores que determinan la remuneración del trabajo",
              content: [
                {
                  type: "paragraph",
                  text: "La remuneración es el conjunto de recompensas que recibe la persona por participar y contribuir en una organización, e incluye tanto la remuneración económica directa (salario, bonos, comisiones) como la indirecta (prestaciones y servicios). En su lógica fundamental, es una relación de intercambio entre el individuo y la empresa que debe diseñarse para alcanzar equidad interna y competitividad externa. Desde la gestión de personal, la determinación del pago no depende de un único criterio: influyen factores legales, sindicales, políticos y de equidad; y, en la comparación técnica de puestos, cobran relevancia los factores clásicos de valoración (habilidades, esfuerzo, responsabilidad y condiciones de trabajo). Bajo esta óptica, “remuneración” abarca todas las formas de pago (directas e indirectas) y se distingue del “salario” en sentido estricto, por lo que los planes retributivos se conciben como un sistema de premios e incentivos que refuerzan conductas y resultados deseados. El objetivo general es sostener estructuras justas, aceptables y comprensibles para las personas y viables para la empresa, integrando criterios de mercado, desempeño, permanencia y sostenibilidad financiera de la institución. :contentReference[oaicite:0]{index=0}",
                },
                {
                  type: "paragraph",
                  text: "Para establecer niveles de pago congruentes, la literatura señala un proceso de cinco etapas: (1) levantar y analizar encuestas de sueldos en el mercado para asegurar la equidad externa; (2) determinar la contribución relativa de cada puesto mediante valuación y clasificación, con base en descripciones y análisis de puestos, para garantizar la equidad interna; (3) agrupar los puestos en niveles o bandas de pago; (4) construir curvas salariales que permitan una progresión lógica entre niveles; y (5) ajustar los niveles conforme a la realidad competitiva y a la estrategia corporativa. Este andamiaje técnico se articula con una política salarial dinámica (no estática) que fija directrices sobre estructura de puestos y bandas, salarios de admisión, incrementos, promociones y tiempo extra. De forma complementaria, se promueve un sistema de incentivos alineado a objetivos de desempeño, oportunidades de desarrollo y seguridad en el empleo. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "Las tendencias contemporáneas han incorporado el “pago nuevo”: esquemas basados en habilidades y competencias (se remunera lo que la persona sabe y puede hacer), salarios variables vinculados a resultados, y ‘broadbanding’ o ampliación de rangos (reducir niveles jerárquicos a pocas bandas amplias) para ganar flexibilidad, facilitar movilidad horizontal y sostener equipos autoorganizados. Bajo estos enfoques, los incrementos salariales pueden asociarse a trayectorias de aprendizaje, evaluación de competencias y contribución efectiva a metas, más que a la pura ocupación de un puesto estable. Todo ello exige coherencia con la política salarial y con los mecanismos de evaluación del desempeño, para evitar inequidades y sesgos. La noción de equidad se desdobla en dos planos: interno (consistencia entre puestos de la casa) y externo (consistencia con el mercado). Una brecha en cualquiera de los dos planos erosiona atracción y retención de talento o presiona la sostenibilidad financiera. :contentReference[oaicite:2]{index=2}",
                },

                /* Imagen entre párrafos (esquema conceptual) */
                {
                  type: "image",
                  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pbjbKPU6SI07IFEnPa3uqrraholm1k3JzA&s",
                  alt: "Esquema de equilibrio entre equidad interna y competitividad externa en remuneración",
                  caption:
                    "Equidad interna (valuación de puestos) ↔ Competitividad externa (encuestas salariales).",
                },

                {
                  type: "paragraph",
                  text: "El contexto macro del mercado laboral condiciona la remuneración. La interacción entre oferta de trabajo (personas que buscan empleo) y demanda (empresas) se ve atravesada por regulación (salario mínimo), rigideces contractuales, negociaciones colectivas e impactos tecnológicos que transforman las habilidades valoradas. No es un mercado de competencia perfecta: existen fricciones (por ejemplo, desempleo friccional cuando se cambia voluntariamente de empleo), asimetrías de información y brechas de cualificaciones. Por ello, los planes de pago deben dialogar con la realidad sectorial y geográfica, con el pulso de la productividad y la inversión, y con las exigencias de cohesión social. La fijación salarial resulta, en suma, de un equilibrio entre condiciones del entorno (ciclo económico, innovación, regulación), objetivos de negocio y prácticas de gestión de personas que protejan la motivación y la justicia interna. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "paragraph",
                  text: "El costo de vida y la ubicación añaden otra capa: si los precios suben y la remuneración no, el salario real se erosiona; de ahí la práctica de indexar (parcialmente) ciertos ajustes a inflación o de utilizar tablas con diferenciales geográficos. Sin embargo, uniformar incrementos por costo de vida puede tensionar los aumentos por mérito, de modo que conviene separar mecanismos: uno que preserve el poder adquisitivo y otro que reconozca desempeño y resultados. En organizaciones multi-sede, los diferenciales geográficos pueden armonizarse con encuestas por plaza y con bandas locales, manteniendo coherencia con la política salarial global. En todos los escenarios, documentar supuestos y fuentes (encuestas, valuación, productividades) en el expediente de compensación permite auditar la consistencia del sistema ante auditorías internas y externas. :contentReference[oaicite:4]{index=4}",
                },

                /* Acordeón #1 */
                {
                  type: "accordion",
                  header: "Mapa de factores y procesos de remuneración",
                  open: false,
                  items: [
                    {
                      header: "Factores técnicos",
                      text: "Habilidades, esfuerzo, responsabilidad y condiciones de trabajo como base de la valuación; descripciones/análisis de puestos; clasificación en niveles y curvas salariales. :contentReference[oaicite:5]{index=5}",
                    },
                    {
                      header: "Factores de contexto",
                      text: "Legal, sindical, político y de equidad; mercado laboral, regulación, inflación, diferenciales geográficos y tecnología. :contentReference[oaicite:6]{index=6}",
                    },
                    {
                      header: "Tendencias y políticas",
                      text: "Pago por competencias, salario variable y ‘broadbanding’; política salarial dinámica: estructura, admisión, incrementos, promociones y tiempo extra. :contentReference[oaicite:7]{index=7}",
                    },
                  ],
                },

                /* Acordeón #2 */
                {
                  type: "accordion",
                  header:
                    "Checklist de política salarial eficaz (criterios tipo Patton)",
                  open: false,
                  items: [
                    {
                      header: "Adecuada y equitativa",
                      text: "Ir más allá de mínimos legales y guardar proporción con habilidades, esfuerzo y capacitación. :contentReference[oaicite:8]{index=8}",
                    },
                    {
                      header: "Equilibrada, eficiente y segura",
                      text: "Compensación total razonable, sostenible en costos y que brinde seguridad básica a las personas. :contentReference[oaicite:9]{index=9}",
                    },
                    {
                      header: "Motivadora y aceptable",
                      text: "Capaz de alentar desempeño productivo y ser comprendida/aceptada por la plantilla. :contentReference[oaicite:10]{index=10}",
                    },
                  ],
                },
              ],

              subthemes: [
                /* 2.3.1 Mercado de trabajo */
                {
                  id: "1.1.3.1",
                  numbering: "2.3.1",
                  title: "Mercado de trabajo",
                  content: [
                    {
                      type: "paragraph",
                      text: "El mercado de trabajo es el punto de encuentro entre la oferta de trabajo (personas) y la demanda (organizaciones). Los salarios operan como precio del trabajo e inciden en el equilibrio: a salarios altos aumenta la oferta; a salarios bajos, incrementa la demanda empresarial. Este mercado está regulado (p. ej., salario mínimo), presenta rigideces contractuales y es sensible a factores exógenos (cambios tecnológicos que revalúan habilidades cognitivas y creativas). No es perfectamente competitivo: existen asimetrías y costos de ajuste que generan desempleo friccional, movilidad ocupacional incompleta y brechas de cualificaciones entre lo que exige la empresa y lo que provee el sistema educativo. Para RH, comprender estas dinámicas permite fijar bandas salariales realistas por plaza y sector. :contentReference[oaicite:11]{index=11}",
                    },
                    {
                      type: "paragraph",
                      text: "Las encuestas salariales son el instrumento central para leer el mercado: pueden ser propias, de empresas especializadas o realizadas en consorcio con pares. La selección de puestos de referencia (muestras) debe cubrir diferentes niveles y áreas, y la muestra de compañías debe reflejar ubicación, giro, tamaño y políticas salariales. La periodicidad define cuán actual es la lectura; en entornos volátiles, conviene revisar con mayor frecuencia, al menos para puestos críticos. Los hallazgos alimentan ajustes a bandas, salarios de admisión y política de incrementos, y se conectan con la valuación interna para conciliar equidad y competitividad. :contentReference[oaicite:12]{index=12}",
                    },
                    {
                      type: "accordion",
                      header: "Claves operativas para leer el mercado",
                      open: false,
                      items: [
                        {
                          header: "Muestra y periodicidad",
                          text: "Define puestos ‘muestra’ y empresas comparables; renueva la encuesta con cadencia adecuada al sector. :contentReference[oaicite:13]{index=13}",
                        },
                        {
                          header: "Puestos de referencia",
                          text: "Incluye roles representativos del ‘mix’ interno y del mercado local; documenta perfiles, no sólo títulos. :contentReference[oaicite:14]{index=14}",
                        },
                        {
                          header: "De datos a decisiones",
                          text: "Traducir hallazgos en bandas, salarios de admisión y directrices de incrementos diferenciados. :contentReference[oaicite:15]{index=15}",
                        },
                      ],
                    },
                  ],
                },

                /* 2.3.2 Nivel de salario actual */
                {
                  id: "1.1.3.2",
                  numbering: "2.3.2",
                  title: "Nivel de salario actual",
                  content: [
                    {
                      type: "paragraph",
                      text: "Para gestionar el ‘nivel de salario actual’ se agrupan puestos en niveles o bandas (pay grades), más práctico que fijar micro-valores por puesto. La progresión se modela con una curva salarial, de manera que los movimientos dentro de la banda obedezcan a criterios de mérito, desarrollo y mercado. Un reto frecuente es el ‘techo’ de banda: cuando alguien llega al límite superior sin cambios de responsabilidad, se requieren medidas como ajustes generales, revaluación del puesto o movilidad lateral con desarrollo de nuevas competencias. La comunicación es clave para explicar cómo funcionan las bandas y por qué existen límites, evitando la percepción de arbitrariedad. :contentReference[oaicite:16]{index=16}",
                    },
                    {
                      type: "paragraph",
                      text: "El broadbanding reduce el número de niveles a pocas bandas amplias para ganar flexibilidad. Se complementa con salario variable y con pago por habilidades/competencias, donde los incrementos se asocian a logros de aprendizaje. Para sostener la consistencia, la evaluación del desempeño y de competencias debe ser formal, con criterios y evidencias, y el ‘mix’ fijo-variable debe alinearse con la capacidad de pago y el apetito de riesgo de la organización. El gobierno del sistema (quién aprueba, con qué evidencia y hasta qué tope) y su auditoría periódica aseguran trazabilidad y cumplimiento. :contentReference[oaicite:17]{index=17}",
                    },
                  ],
                },

                /* 2.3.3 Costo de vida */
                {
                  id: "1.1.3.3",
                  numbering: "2.3.3",
                  title: "Costo de vida",
                  content: [
                    {
                      type: "paragraph",
                      text: "Si la inflación supera los ajustes salariales, el salario real cae. Algunas organizaciones indexan parcialmente para preservar poder adquisitivo, diferenciando entre ajustes por costo de vida y aumentos por mérito. También existen diferenciales geográficos: ciudades con costos más altos pueden justificar bandas superiores o complementos locales. Sin embargo, trasladar de forma automática el índice de precios a la nómina puede desplazar la meritocracia y tensionar el presupuesto; de ahí la recomendación de separar mecanismos y de documentar supuestos para cada decisión de ajuste. :contentReference[oaicite:18]{index=18}",
                    },
                  ],
                },

                /* 2.3.4 Estructura interna de pago */
                {
                  id: "1.1.3.4",
                  numbering: "2.3.4",
                  title: "Estructura interna de pago",
                  content: [
                    {
                      type: "paragraph",
                      text: "La coherencia interna se apoya en procesos de descripción y análisis de puestos, seguidos por valuación (jerarquización, alineamiento/comparación por factores o método de puntos). Con la valuación se ordenan puestos por contribución relativa y se fundamentan bandas y trayectorias. El método de puntos (factor-grado-puntos) pondera requisitos mentales, físicos, responsabilidades y condiciones de trabajo; la comparación de factores estructura el orden por criterios amplios; y la jerarquización ofrece una vía simple, aunque menos discriminativa. La elección depende del tamaño y la complejidad organizacional y del nivel de formalidad requerido. :contentReference[oaicite:19]{index=19}",
                    },
                    {
                      type: "paragraph",
                      text: "La estructura interna no se congela: debe recalibrarse ante rediseños de procesos, automatización y nuevas familias de roles. La gobernanza incluye comité de valuación, criterios de actualización y registro histórico de resoluciones, de modo que la evolución sea trazable y defendible ante auditorías o negociaciones con representantes de personal. :contentReference[oaicite:20]{index=20}",
                    },
                  ],
                },

                /* 2.3.5 Negociación colectiva (contratos) */
                {
                  id: "1.1.3.5",
                  numbering: "2.3.5",
                  title: "Negociación colectiva (contratos)",
                  content: [
                    {
                      type: "paragraph",
                      text: "El contrato colectivo detalla condiciones de trabajo (jornadas, descansos, primas, tiempo extra, salarios base, ajustes, condiciones de despido, etc.) y se construye mediante negociación entre empresa y sindicato(s) en distintos niveles. En términos salariales, la negociación define mínimos y reglas de actualización que impactan la política interna y su margen de maniobra. Un proceso de negociación eficaz sigue etapas análogas a la toma de decisiones: diagnóstico, objetivos, opciones, criterios y acuerdos verificables, con mecanismos de seguimiento. :contentReference[oaicite:21]{index=21}",
                    },
                  ],
                },

                /* 2.3.6 Negociación individual */
                {
                  id: "1.1.3.6",
                  numbering: "2.3.6",
                  title: "Negociación individual",
                  content: [
                    {
                      type: "paragraph",
                      text: "En la negociación individual, las partes intercambian propuestas y concesiones hasta pactar condiciones aceptables, guiadas por su poder de negociación y sus alternativas. Para Recursos Humanos, acotar esta negociación a márgenes previstos por la política salarial es crucial para mantener equidad interna; por ello se usan rangos por banda, criterios de experiencia y evidencia de desempeño/competencias. Formalizar acuerdos por escrito y alinearlos con la estructura evita distorsiones y agravia comparativos. :contentReference[oaicite:22]{index=22}",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* 3. VALUACIÓN DE PUESTOS */
        {
          id: "1.2",
          numbering: "3",
          title: "Valuación de puestos",
          content: [
            {
              type: "paragraph",
              text: "La valuación de puestos es el componente de la administración de sueldos y salarios que busca asegurar la equidad interna al determinar el valor relativo de cada puesto dentro de la organización. Parte de descripciones y análisis de puestos para comparar exigencias, responsabilidades y condiciones de trabajo, y con base en ello ubicar cada puesto en un orden lógico que sirva para definir rangos salariales, bandas y trayectorias. Esta práctica no se orienta a personas, sino a los puestos como unidades organizativas; por eso brinda una base técnica para negociar, administrar incrementos y sostener estructuras salariales consistentes con el mercado externo. :contentReference[oaicite:0]{index=0}",
            },
          ],

          subthemes: [
            /* 3.1 Concepto */
            {
              id: "1.2.1",
              numbering: "3.1",
              title: "Concepto",
              content: [
                {
                  type: "paragraph",
                  text: "En sentido estricto, la valuación de puestos es un medio sistemático para determinar la posición que ocupa cada puesto en relación con los demás, con el propósito de establecer una estructura salarial justa, equitativa y aceptable. Al comparar puestos—y no personas—se busca capturar la contribución relativa de cada función organizacional según requisitos mentales y físicos, responsabilidades y condiciones del entorno. El resultado no es un número “científico”, sino una jerarquía razonada que sirva de ancla para decisiones de compensación y crecimiento. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "Esta jerarquía interna es la base para el equilibrio interno del sistema retributivo: permite alinear salarios de manera coherente con el valor del puesto y, al mismo tiempo, facilita conversar con los actores (RH, líderes, finanzas y comités) sobre consistencia, excepciones y ajustes. A la par, se articula con el equilibrio externo—las encuestas de mercado—de modo que la organización no sólo remunere con justicia interna, sino que también conserve su competitividad para atraer y retener talento clave. :contentReference[oaicite:2]{index=2}",
                },

                {
                  type: "accordion",
                  header: "Mapa del concepto (rápido)",
                  open: false,
                  items: [
                    {
                      header: "Qué es",
                      text: "Comparación estructurada entre puestos para fijar su valor relativo; insumo técnico para bandas y políticas salariales.",
                    },
                    {
                      header: "Qué no es",
                      text: "No mide desempeño individual ni define aumentos por mérito; no evalúa personas, sino puestos.",
                    },
                    {
                      header: "Para qué sirve",
                      text: "Sustenta estructura salarial, transparencia y negociación; habilita trayectorias y control de costos. :contentReference[oaicite:3]{index=3}",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La metodología elegida (jerarquización, factores, puntos, etc.) se selecciona según madurez de RH, recursos analíticos y complejidad del universo de puestos. Todas comparten el carácter comparativo: colocan los puestos en relación con un criterio o con otros puestos para resolver su orden relativo. En organizaciones dinámicas, la valuación debe revisarse periódicamente para reflejar cambios en procesos, tecnología, riesgos y responsabilidad. :contentReference[oaicite:4]{index=4}",
                },
                {
                  type: "paragraph",
                  text: "Además de su rol técnico, la valuación aporta gobernanza: al separar la discusión del “quién” (personas) del “qué” (puesto), reduce sesgos, facilita auditorías internas y provee trazabilidad ante revisiones o disputas. Esta trazabilidad se multiplica cuando la valuación se integra con descripciones, matrices de competencias y curvas salariales, generando un expediente robusto para justificar decisiones. :contentReference[oaicite:5]{index=5}",
                },

                {
                  type: "accordion",
                  header: "Claves de implementación",
                  open: false,
                  items: [
                    {
                      header: "Entrada",
                      text: "Descripciones y análisis de puestos vigentes; catálogo y familias; criterios/factores acordados.",
                    },
                    {
                      header: "Proceso",
                      text: "Comité de valuación; ponderaciones y escalas; pruebas piloto y consistencia transversal.",
                    },
                    {
                      header: "Salida",
                      text: "Jerarquía y puntos; mapeo a bandas; lineamientos de uso y revisión periódica. :contentReference[oaicite:6]{index=6}",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "En síntesis, el concepto de valuación de puestos ofrece un marco técnico y transparente para asignar valor organizacional a funciones heterogéneas, sirviendo de puente entre la estrategia de talento, la disciplina presupuestaria y la competitividad externa—sin sustituir, claro está, la gestión del desempeño ni la negociación colectiva o individual. :contentReference[oaicite:7]{index=7}",
                },
              ],
            },

            /* 3.2 Objetivos */
            {
              id: "1.2.2",
              numbering: "3.2",
              title: "Objetivos",
              content: [
                {
                  type: "paragraph",
                  text: "El objetivo central de la valuación de puestos es fijar la posición relativa de cada puesto dentro de la organización para distribuir salarios con justicia y consistencia, neutralizando arbitrariedades. Esto facilita que personas con demandas similares de habilidades, esfuerzo y responsabilidad reciban una compensación comparable, independientemente de quién ocupe el cargo. En la práctica, traduce la estrategia de compensación en reglas operativas para decidir bandas, admisión, progresiones y excepciones. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "paragraph",
                  text: "Como objetivos complementarios, la valuación busca: (a) establecer lenguaje común entre áreas; (b) dotar a RH de herramientas para negociar interna y externamente; (c) conectar el equilibrio interno (jerarquía de puestos) con el equilibrio externo (encuestas salariales) y (d) soportar auditorías, revisiones sindicales y procesos legales, al documentar criterios y resultados de forma trazable. Así, se vuelve un pilar de gobernanza retributiva. :contentReference[oaicite:9]{index=9}",
                },

                {
                  type: "accordion",
                  header: "Objetivos tácticos",
                  open: false,
                  items: [
                    {
                      header: "Estructura y control",
                      text: "Crear bandas y niveles claros; facilitar presupuestos y control de costos de personal.",
                    },
                    {
                      header: "Movilidad y carrera",
                      text: "Apoyar rutas de crecimiento y movilidad horizontal; claridad de diferencias entre niveles.",
                    },
                    {
                      header: "Negociación",
                      text: "Proveer base técnica para diálogo con sindicatos y líderes; soporte de decisiones excepcionales. :contentReference[oaicite:10]{index=10}",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La perspectiva de negocio exige que la valuación sea eficaz en costos: suficiente para diferenciar puestos, pero pragmática para mantener la administración liviana. Modelos de puntos con factores ponderados ofrecen granularidad; métodos más simples (jerarquización) pueden ser adecuados en empresas pequeñas o fases iniciales. En todos los casos, el objetivo es la consistencia, no la exactitud absoluta. :contentReference[oaicite:11]{index=11}",
                },
                {
                  type: "paragraph",
                  text: "A largo plazo, la valuación contribuye a la retención al comunicar justicia y predictibilidad: empleados entienden qué eleva el valor de un puesto (complejidad, riesgo, impacto, expertise) y qué trayectorias existen. Con ello, la compensación deja de ser sólo resultado de “negociar bien” y pasa a basarse en una arquitectura clara y defendible. :contentReference[oaicite:12]{index=12}",
                },

                {
                  type: "accordion",
                  header: "Resultados esperados",
                  open: false,
                  items: [
                    {
                      header: "Equidad interna",
                      text: "Coherencia entre puestos comparables; reducción de brechas injustificadas.",
                    },
                    {
                      header: "Competitividad externa",
                      text: "Alineación a mercado mediante conexión con encuestas salariales.",
                    },
                    {
                      header: "Trazabilidad",
                      text: "Evidencia documental que soporta decisiones y auditorías. :contentReference[oaicite:13]{index=13}",
                    },
                  ],
                },
              ],
            },

            /* 3.3 Necesidad */
            {
              id: "1.2.3",
              numbering: "3.3",
              title: "Necesidad",
              content: [
                {
                  type: "paragraph",
                  text: "La valuación de puestos se vuelve necesaria cuando la organización requiere una base consistente para remunerar funciones diversas en contextos cambiantes: rediseño organizacional, digitalización, nuevas líneas de negocio o cambios regulatorios. Al comparar y clasificar puestos, se mitigan sesgos, se ordenan expectativas y se fortalecen las decisiones de compensación, más aún cuando las categorías jerárquicas tradicionales se aplanan y los equipos se vuelven multifuncionales. :contentReference[oaicite:14]{index=14}",
                },
                {
                  type: "paragraph",
                  text: "Otra razón de necesidad es la gestión del riesgo laboral y legal. Sistemas opacos de pago abren espacio a reclamaciones por inequidad; la valuación, integrada a políticas salariales y encuestas, ayuda a defender criterios ante auditorías internas, inspecciones o negociaciones colectivas. También habilita ajustes estructurados (por ejemplo, ampliación de rangos o “broadbanding”) para acompañar estrategias de talento y productividad. :contentReference[oaicite:15]{index=15}",
                },

                {
                  type: "accordion",
                  header: "Señales de alerta (cuándo urge)",
                  open: false,
                  items: [
                    {
                      header: "Brechas injustificadas",
                      text: "Diferencias salariales entre puestos de demanda similar; excepciones frecuentes sin sustento.",
                    },
                    {
                      header: "Crecimiento desordenado",
                      text: "Nuevos puestos sin mapeo; solapamiento de niveles; ausencia de bandas.",
                    },
                    {
                      header: "Tensión externa",
                      text: "Dificultad para atraer/retener por falta de competitividad o mensajes poco claros. :contentReference[oaicite:16]{index=16}",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Como técnica de gestión, la valuación no es un ejercicio único; requiere mantenimiento. Cambios en tecnología, riesgos operativos o alcance de decisiones del puesto alteran su valor y justifican revaluaciones periódicas. Vincular la valuación con el proceso de diseño de puestos y con la actualización de descripciones evita obsolescencias y sostiene la correlación con el mercado. :contentReference[oaicite:17]{index=17}",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, la necesidad también es pedagógica: comunicar criterios y resultados mejora la comprensión del sistema de recompensas. Los colaboradores distinguen entre valor del puesto (arquitectura) y mérito individual (desempeño), y aceptan con mayor facilidad los límites de banda, la política de admisión y los movimientos laterales, reduciendo fricciones y fortaleciendo la cultura de equidad. :contentReference[oaicite:18]{index=18}",
                },

                {
                  type: "accordion",
                  header: "Buenas prácticas de sostenibilidad",
                  open: false,
                  items: [
                    {
                      header: "Revisión periódica",
                      text: "Calendario anual o bianual de revisión por familias críticas.",
                    },
                    {
                      header: "Gobernanza",
                      text: "Comité tripartito (RH–Negocio–Finanzas) y actas de decisiones.",
                    },
                    {
                      header: "Integración",
                      text: "Enlace con rutas de carrera, encuestas salariales y presupuesto. :contentReference[oaicite:19]{index=19}",
                    },
                  ],
                },
              ],
            },

            /* 3.4 Métodos de valuación de puestos */
            {
              id: "1.2.4",
              numbering: "3.4",
              title: "Métodos de valuación de puestos",
              content: [
                {
                  type: "paragraph",
                  text: "Los métodos se agrupan en enfoques comparativos simples y analíticos. Comparten su naturaleza comparativa: ubican los puestos unos respecto de otros o contra criterios de referencia. La elección depende del tamaño y complejidad organizacional, del número de puestos y de los recursos disponibles. Tres métodos relevantes en el material son: gradación previa, alineamiento (jerarquización) y valuación por puntos. :contentReference[oaicite:20]{index=20}",
                },

                {
                  type: "accordion",
                  header: "Panorama de métodos",
                  open: false,
                  items: [
                    {
                      header: "Comparación básica",
                      text: "Puesto contra puesto o contra escala global; bajo costo, menor discriminación.",
                    },
                    {
                      header: "No cuantitativos",
                      text: "Jerarquización por categorías predeterminadas; comparación del puesto como un todo.",
                    },
                    {
                      header: "Cuantitativos",
                      text: "Por factores y por puntos; asignan ponderaciones y escalas para capturar diferencias finas. :contentReference[oaicite:21]{index=21}",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "El método de gradación previa clasifica puestos en grados o niveles predefinidos con descripciones tipo: cada grado representa un tramo de complejidad y responsabilidad. Es ágil y didáctico, útil para comenzar o cuando el universo de puestos es acotado. Su limitante es la menor sensibilidad para distinguir diferencias finas entre puestos contiguos. :contentReference[oaicite:22]{index=22}",
                },
                {
                  type: "paragraph",
                  text: "El método de alineamiento (o jerarquización) ordena los puestos—de mayor a menor—según un criterio global (por ejemplo, contribución global o responsabilidad). Requiere un análisis básico de puestos y discusiones de consistencia. Ventajas: simplicidad, rapidez y bajo costo; desventajas: comparación global poco analítica, sin cuantificar “cuánto” se diferencian, lo que reduce poder explicativo frente a casos límite. :contentReference[oaicite:23]{index=23}",
                },

                {
                  type: "accordion",
                  header: "Valuación por puntos — pasos clave",
                  open: false,
                  items: [
                    {
                      header: "1) Elegir factores",
                      text: "Requisitos mentales y físicos, responsabilidad y condiciones de trabajo (familias de factores).",
                    },
                    {
                      header: "2) Ponderar y graduar",
                      text: "Asignar pesos relativos y crear escalas (grados) con puntos crecientes por nivel.",
                    },
                    {
                      header: "3) Aplicar y validar",
                      text: "Valuar puestos, probar consistencia transversal y mapear a bandas salariales. :contentReference[oaicite:24]{index=24}",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La valuación por puntos (también llamada por factores y puntos) es la más extendida en organizaciones medianas y grandes. Descompone el puesto en factores, pondera su importancia relativa y asigna escalas de puntos por grado de exigencia. La suma de puntos posiciona el puesto en la jerarquía y facilita su traducción a bandas. Ofrece granularidad y trazabilidad, a cambio de mayor esfuerzo de diseño y gobierno. :contentReference[oaicite:25]{index=25}",
                },
                {
                  type: "paragraph",
                  text: "Sea cual sea el método elegido, es clave pilotear, documentar criterios y asegurar consistencia inter-familias. Vincular el resultado con encuestas de mercado permite convertir el puntaje interno en valor monetario competitivo. Finalmente, la revisión periódica mantiene vigente la arquitectura retributiva, alineada a estrategia, riesgos y a la evolución del trabajo. :contentReference[oaicite:26]{index=26}",
                },
              ],
              subthemes: [
                /* 3.4.1 Método de graduación previa */
                {
                  id: "1.2.4.1",
                  numbering: "3.4.1",
                  title: "Método de graduación previa",
                  content: [
                    {
                      type: "paragraph",
                      text: "El método de graduación previa clasifica los puestos en niveles, clases o grados predefinidos; cada grado tiene una definición que captura complejidad, conocimientos, responsabilidad y condiciones de trabajo. Su lógica es construir una ‘rejilla’ de grados suficientemente descriptiva para acomodar todos los puestos, evitando comparaciones caso por caso y permitiendo una administración salarial más estable. En términos de equidad, la graduación previa favorece la coherencia interna: puestos con contenidos similares quedan en el mismo grado y comparten bandas salariales, lo que reduce arbitrariedad y facilita la comunicación de decisiones retributivas. Este enfoque es especialmente útil en organizaciones con muchos puestos de soporte y administrativos, donde la dispersión de funciones puede ordenarse en pocos niveles con descriptores claros. :contentReference[oaicite:0]{index=0}",
                    },
                    {
                      type: "paragraph",
                      text: "Su implementación inicia con descripciones y análisis de puestos; a partir de esa base, se diseñan de 6 a 12 grados tipo (el número varía según tamaño y diversidad de la empresa). Para cada grado se redacta una definición breve que sintetiza formación requerida, amplitud de tareas, nivel de autonomía, responsabilidad por recursos o personas y exposición a condiciones de trabajo. La clave es que las definiciones sean mutuamente excluyentes y colectivamente exhaustivas —es decir, que no se superpongan y que cubran todo el universo de puestos. Una vez aprobadas, se realiza una primera clasificación piloto con una muestra de puestos representativos y se corrigen solapes o vacíos antes de clasificar el resto.",
                    },
                    {
                      type: "accordion",
                      header: "Mapa de decisión para diseñar grados",
                      open: false,
                      items: [
                        {
                          header: "Paso 1 — Descriptores",
                          text: "Redacta descriptores por grado: conocimientos, complejidad, impacto, autonomía y condiciones.",
                        },
                        {
                          header: "Paso 2 — Prueba piloto",
                          text: "Clasifica 15–25 puestos faro; detecta solapes y lagunas y ajusta definiciones.",
                        },
                        {
                          header: "Paso 3 — Cierre y gobierno",
                          text: "Aprueba el catálogo de grados y define el proceso de altas/ajustes para mantener consistencia.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Entre sus ventajas destacan su sencillez, velocidad de implantación y facilidad de mantenimiento. La graduación previa no requiere ponderaciones ni cálculos de puntos, por lo que las áreas no especializadas pueden operarla con éxito. También se integra bien con políticas salariales por bandas: cada grado se asocia a una banda con mínimo, medio y máximo, facilitando administración de méritos y control de costos. Como contrapartida, al ser un método ‘global’ puede perder poder discriminante en familias técnicas muy distintas (p. ej., un técnico de laboratorio vs. un analista financiero) si los descriptores no están finamente redactados.",
                    },
                    {
                      type: "image",
                      src: "https://www.alkemy.org/wp-content/uploads/2024/02/Mesa-de-trabajo-7-1.png",
                      alt: "Esquema de grados: definiciones y bandas salariales",
                    },
                    {
                      type: "paragraph",
                      text: "Para mitigar sesgos, conviene acompañar la clasificación con una ‘mesa de calibración’ interáreas, donde RR. HH. y líderes funcionales revisan casos limítrofes y documentan criterios. Otro buen control es auditar anualmente movimientos de grado y su correlación con cambios reales de contenido de puesto (no solo desempeño de la persona); esto preserva la noción de que se valúa el puesto, no al ocupante. Asimismo, cruzar la estructura resultante con encuestas salariales del mercado ayuda a mantener competitividad externa sin erosionar la equidad interna. :contentReference[oaicite:1]{index=1}",
                    },
                    {
                      type: "accordion",
                      header: "Buenas prácticas y riesgos típicos",
                      open: false,
                      items: [
                        {
                          header: "Buenas prácticas",
                          text: "Definiciones claras por grado; comité de clasificación; bitácora de decisiones; revisión anual contra mercado.",
                        },
                        {
                          header: "Riesgos",
                          text: "Inflar grados por presión de retención; usar desempeño individual para mover ‘puestos’; descriptores ambiguos.",
                        },
                        {
                          header: "Indicadores clave",
                          text: "Distribución por grado, solapes salariales, % excepciones fuera de banda, rotación por grado.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "En síntesis, la graduación previa es un método idóneo cuando se busca rapidez, consistencia y gobierno simple del sistema de puestos y salarios. Su eficacia depende menos de cálculos y más de la calidad de los descriptores y la disciplina de gobernanza. Cuando la organización crece o se tecnifica, este método puede convivir con herramientas más analíticas (p. ej., factores) para familias críticas, manteniendo el marco de grados como lenguaje común. El resultado deseable: una arquitectura retributiva comprensible, predecible y percibida como justa por colaboradores y mandos.",
                    },
                  ],
                },

                /* 3.4.2 Método de alineamiento (jerarquización) */
                {
                  id: "1.2.4.2",
                  numbering: "3.4.2",
                  title: "Método de alineamiento",
                  content: [
                    {
                      type: "paragraph",
                      text: "El alineamiento (también llamado jerarquización) compara puestos ‘como un todo’ y los ordena del más alto al más bajo según un criterio global de valor organizacional. No descompone en factores ni asigna puntos; es, por diseño, el método más simple y económico. El proceso típico: (1) analizar descripciones, (2) seleccionar una muestra de puestos faro, (3) ordenar esos puestos por su contribución global y (4) insertar el resto por comparación. Su principal fortaleza es la velocidad y la utilidad en contextos de arranque, fusiones o rediseños, en los que se requiere una estructura preliminar para viabilizar decisiones salariales. :contentReference[oaicite:2]{index=2}",
                    },
                    {
                      type: "paragraph",
                      text: "Sin embargo, la simplicidad tiene costo: la comparación global puede ser superficial y sensible a sesgos de prestigio de áreas, influencia de jefaturas o estereotipos sobre ‘lo que más aporta’. Por eso se recomienda definir ex ante el criterio de comparación (por ejemplo, complejidad de problemas, alcance de decisiones e impacto económico) y aplicarlo de modo consistente. También ayuda usar paneles pluridisciplinarios y revisar la jerarquía resultante con datos objetivos (presupuesto manejado, número de reportes, criticidad de errores) para depurar efectos de percepción.",
                    },
                    {
                      type: "accordion",
                      header: "Criterios operativos para jerarquizar",
                      open: false,
                      items: [
                        {
                          header: "Complejidad y alcance",
                          text: "Variedad y dificultad de problemas, autonomía y nivel al que se toman decisiones.",
                        },
                        {
                          header: "Impacto y responsabilidad",
                          text: "Efecto en resultados/servicio; responsabilidad por recursos, personas y cumplimiento.",
                        },
                        {
                          header: "Condiciones y pericia",
                          text: "Entorno físico, riesgo, conocimientos y experiencia requeridos para la eficacia sostenida.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "En la práctica, el alineamiento rinde mejor cuando se usa como ‘foto inicial’ que luego se calibra con información de mercado y, si es preciso, se migra a un método analítico para familias donde la comparación global no discrimina bien (p. ej., puestos técnicos altamente especializados). Su poder comunicativo es alto: a las áreas les resulta intuitivo entender un ordenamiento general, y a RR. HH. le facilita explicar por qué dos puestos con etiquetas distintas quedan próximos en valor si su contribución global es similar.",
                    },
                    {
                      type: "image",
                      src: "https://capitalhumano2017.wordpress.com/wp-content/uploads/2017/02/valuacic3b3n.png",
                      alt: "Flujo de jerarquización de puestos (alineamiento)",
                    },
                    {
                      type: "paragraph",
                      text: "Entre los controles recomendables están: (a) documentar cada decisión de ubicación con una breve justificación contra el criterio, (b) revisar outliers (puestos ubicados muy arriba/abajo respecto de su familia o del mercado) y (c) establecer una ventana anual para reubicar solo si cambió el contenido del puesto, no por desempeño de la persona. Esto preserva el principio esencial del sistema: se valúa el puesto, no al ocupante. :contentReference[oaicite:3]{index=3}",
                    },
                    {
                      type: "accordion",
                      header: "Ventajas, límites y cuándo usarlo",
                      open: false,
                      items: [
                        {
                          header: "Ventajas",
                          text: "Rápido; bajo costo; lenguaje claro; útil para estructuras preliminares o compañías pequeñas.",
                        },
                        {
                          header: "Límites",
                          text: "Poca discriminación fina; exposición a sesgos; difícil justificar ante auditorías retributivas complejas.",
                        },
                        {
                          header: "Cuándo usar",
                          text: "Inicio de sistema; postfusión; rediseños; como antesala a métodos por factores en familias clave.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Bien gobernado, el alineamiento ordena el ‘tablero’ y permite operar bandas y presupuestos mientras se profundiza el análisis donde haga falta. Su rol estratégico es articular una narrativa coherente: puestos más altos por complejidad e impacto, puestos intermedios por especialidad y alcance, y puestos de entrada con enfoque operativo, todos conectados por trayectorias de desarrollo que hacen sentido en la organización.",
                    },
                  ],
                },

                /* 3.4.3 Método de valuación por puntos */
                {
                  id: "1.2.4.3",
                  numbering: "3.4.3",
                  title: "Método de valuación por puntos",
                  content: [
                    {
                      type: "paragraph",
                      text: "El método por puntos (también conocido como ‘factores y puntos’) es el estándar analítico más extendido. Su premisa: descomponer el puesto en factores (requisitos mentales y físicos, responsabilidad y condiciones de trabajo), ponderarlos por importancia relativa y asignarles grados con valores numéricos; la suma de puntos determina el valor relativo del puesto. Históricamente, su formalización moderna se atribuye a Merrill R. Lott; la práctica contemporánea ha refinado catálogos de factores y escalas para distintos giros y tamaños. :contentReference[oaicite:4]{index=4}",
                    },
                    {
                      type: "paragraph",
                      text: "La implantación sigue cuatro hitos: (1) elección de factores —alineados a la estrategia y a la mezcla real de habilidades/impactos; (2) ponderación —distribuir 100% entre factores para reflejar su peso; (3) construcción de escalas —definir grados por factor con descriptores conductuales y técnicos; (4) asignación y suma —valorar puestos contra cada factor y sumar puntos para ubicar en bandas. El método ofrece granularidad y trazabilidad: cada decisión puede explicarse factor por factor, lo que reduce la percepción de arbitrariedad y facilita auditorías de equidad interna.",
                    },
                    {
                      type: "accordion",
                      header: "Diseño de factores y escalas",
                      open: false,
                      items: [
                        {
                          header: "Selección de factores",
                          text: "Usa 4–6 factores máximos; evita redundancias; alinea con estrategia (p. ej., innovación, seguridad, servicio).",
                        },
                        {
                          header: "Ponderación",
                          text: "Distribuye pesos que sumen 100%; valida con comité directivo y prueba de sensibilidad.",
                        },
                        {
                          header: "Grados y anclajes",
                          text: "Redacta grados con anclajes claros (ejemplos) para minimizar interpretaciones divergentes.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Sus retos: demanda más trabajo inicial y disciplina de mantenimiento; si los descriptores son ambiguos, pueden aparecer ‘derivas’ —p. ej., inflar grados por presión de retención—. También existe el riesgo de ‘matematizar’ en exceso: los puntos son una convención útil, no una verdad absoluta. Por eso conviene combinar la suma de puntos con una revisión de calibración interáreas y un cotejo de mercado para asegurar que la estructura final sea a la vez justa por dentro y competitiva por fuera. :contentReference[oaicite:5]{index=5}",
                    },
                    {
                      type: "image",
                      src: "https://i.ytimg.com/vi/-LM9PoUiJVs/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDMgTyhyMA8=&rs=AOn4CLCzQS3AjI72MvcJdEBleLrymMcEwg",
                      alt: "Tabla ilustrativa de factores, ponderaciones y puntos por grado",
                    },
                    {
                      type: "paragraph",
                      text: "Operativamente, el método por puntos se integra bien con trayectorias de carrera y marcos de competencias: a cada rango de puntos puede asociarse un nivel de carrera (junior, pleno, senior, experto) y expectativas de dominio en competencias clave. Así, el sistema retributivo conversa con el de desarrollo, y la movilidad horizontal/vertical se vuelve más transparente para colaboradores y líderes. Documentar decisiones, registrar excepciones y auditar correlaciones entre cambios de puesto y puntos asignados son rituales necesarios para su salud.",
                    },
                    {
                      type: "accordion",
                      header: "Controles y métricas del sistema",
                      open: false,
                      items: [
                        {
                          header: "Gobernanza",
                          text: "Comité de valuación, bitácora de casos, ventana anual de cambios, capacitación de valuadores.",
                        },
                        {
                          header: "Métricas",
                          text: "% fuera de banda, dispersión por familia, revalúos por reorganización, correlación puntos–mercado.",
                        },
                        {
                          header: "Ciclo anual",
                          text: "Calibración, contraste con encuestas, ajustes de bandas y comunicación de impactos.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "En conclusión, el método por puntos brinda precisión, defendibilidad y alineación con la estrategia cuando los factores están bien definidos y gobernados. Es especialmente valioso en organizaciones medianas y grandes con diversidad de familias y exigencia de auditoría retributiva. Donde se requiera agilidad, puede convivir con graduación previa (como marco) y jerarquización (para ajustes rápidos), manteniendo la trazabilidad analítica para decisiones críticas.",
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
          href: "", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Impacto de los Objetivos de la Administración de Compensaciones en los Elementos de la Compensación Monetaria y No Monetaria. http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2448-76782016000100003",
            "La evaluación del desempeño, una nueva herramienta de la cultura de la transparencia aplicada al sector público en México. http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2448-63882021000300028",
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
            "Chiavenato, I. (2011). *Administración de Recursos Humanos*. McGraw-Hill Educación.",
            "Dessler, G. & Varela (2004). *Administración de Recursos Humanos: Enfoque latinoamericano*. Pearson Educación.",
            "Wayne, R. (2010). *Administración de Recursos Humanos*. Pearson Educación.",
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
