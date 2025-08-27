/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "CONTADURIA_PUBLICA",
  courseId: "AUDITORIA_I",
  id: "AUDI-I-MOD3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Auditoría I",
  title:
    "Módulo 3. Ejecución del trabajo de auditoría y casos prácticos por rubro",
  semestre: "Séptimo",
  teacher: "M.F. Aldo Ariel Cárdenas García",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "El estudiante evaluará y ejecutará procedimientos de auditoría relacionados con el control interno y con partidas específicas de los estados financieros, identificará riesgos y aplicará las Normas Internacionales de Auditoría para sustentar su opinión profesional.",
  competencies: [
    "Aplicar técnicas de ejecución de auditoría (p. ej., pruebas selectivas y programas de trabajo) para verificar la información financiera.",
    "Evaluar el control interno y vincularlo con la planeación y el alcance de las pruebas de auditoría.",
    "Desarrollar procedimientos para auditar rubros clave: efectivo, cuentas por cobrar, inventarios, PPE/IME, pasivos, ingresos, capital, entre otros.",
    "Identificar contingencias, compromisos y eventos subsecuentes relevantes para la opinión del auditor.",
    "Integrar y documentar adecuadamente el legajo de auditoría como evidencia del trabajo realizado.",
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

    /* 1. Nodo / Unidad principal (Sesión 3) */
    {
      id: "1",
      numbering: "Unidad 4",
      title:
        "Ejecución del trabajo de auditoría y resolución de casos prácticos",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad integra la fase de ejecución del trabajo de auditoría (pruebas selectivas y programas de trabajo) y el desarrollo de casos prácticos, conectando control interno, NIA aplicables y revisión de partidas específicas de los estados financieros.",
        },

        {
          type: "paragraph",
          text: "La ejecución es la etapa operativa en la que el auditor transforma la planeación en procedimientos concretos para obtener evidencia suficiente y apropiada. Aquí se despliegan pruebas de controles y pruebas sustantivas, con énfasis en técnicas de selección y muestreo que optimizan tiempo y recursos sin sacrificar calidad. El objetivo es respaldar con documentación sólida (papeles de trabajo) los hallazgos que conducirán a una opinión profesional. Bajo el paraguas de las NIA —especialmente NIA 300 (planeación), NIA 315 (riesgos), NIA 330 (respuestas) y NIA 500/501/505 (evidencia y confirmaciones)— el auditor focaliza áreas de mayor riesgo (efectivo, cuentas por cobrar, inventarios, PPE, pasivos e ingresos), traza programas de trabajo flexibles y mantiene una comunicación constante con la dirección para ajustar el alcance cuando emergen riesgos nuevos o cambian las condiciones del encargo. :contentReference[oaicite:0]{index=0}",
        },

        {
          type: "paragraph",
          text: "Las pruebas selectivas son la espina dorsal de esta fase: se aplican a una parte representativa de la población para extraer conclusiones válidas sobre el todo. No se trata de “revisar menos”, sino de revisar mejor: definir poblaciones, estratificar por riesgo o materialidad, elegir métodos de selección (aleatoria, dirigida, monetaria) y definir el tamaño de muestra. Una selección poco representativa, la omisión de partidas significativas o la falta de actualización del programa ante riesgos emergentes pueden conducir a conclusiones erróneas. Por ello, el auditor documenta criterios de inclusión/exclusión, justifica las muestras y deja rastro de revisión (tick marks, referencias cruzadas, causas de diferencias y su resolución). Cuando corresponde, se usan confirmaciones externas (p. ej., bancos o clientes) y procedimientos analíticos que complementan los exámenes de detalle. :contentReference[oaicite:1]{index=1}",
        },

        {
          type: "paragraph",
          text: "El programa de trabajo convierte la estrategia global en una lista ordenada de procedimientos por rubro. Para cuentas por cobrar, por ejemplo, puede incluir confirmaciones positivas/negativas, análisis de antigüedad, verificación documental y evaluación de la estimación por incobrables; para inventarios, asistencia al conteo físico, reconciliaciones, pruebas de valuación (PEPS, promedio) y revisión de obsolescencia; para PPE, inspecciones físicas, conciliaciones con el mayor, pruebas de depreciación y autorizaciones. Este plan debe ser dinámico: si se detectan controles débiles o desviaciones materiales, el auditor aumenta la extensión o naturaleza de las pruebas; si los controles resultan eficaces, puede reducirse el alcance sustantivo, sin perder escepticismo profesional. La consistencia entre riesgos identificados, procedimientos aplicados y evidencia obtenida se refleja en papeles de trabajo claros, indexados y revisables. :contentReference[oaicite:2]{index=2}",
        },

        {
          type: "paragraph",
          text: "La unidad también desarrolla la conexión entre control interno y evidencia. Un buen entendimiento del control interno —ambiente de control, evaluación de riesgos, actividades de control, información/comunicación y monitoreo (COSO)— ayuda a ubicar puntos de falla y, por ende, a definir “dónde mirar” y “cuánto probar”. En la práctica, la combinación de entrevistas, cuestionarios, narrativas, flujogramas y walkthroughs ofrece un mapa del proceso para diseñar pruebas de cumplimiento. Sus resultados alimentan la evaluación de riesgos de incorrección material y condicionan la respuesta (incrementar pruebas, modificar su oportunidad o variar la naturaleza). La documentación de estas decisiones en el legajo permite entender por qué se eligió un procedimiento, cómo se ejecutó, qué se encontró y qué impacto tiene en la opinión. :contentReference[oaicite:3]{index=3}",
        },

        {
          type: "paragraph",
          text: "Finalmente, la resolución de casos prácticos integra todo lo anterior en situaciones reales: arqueos de caja y confirmaciones bancarias; confirmaciones a clientes y análisis de incobrables; asistencia a conteos de inventario y pruebas de valuación; inspección de PPE y cálculo de depreciaciones; búsqueda de pasivos no registrados; pruebas de corte de ingresos, costos y gastos; identificación de contingencias y eventos subsecuentes. Cada caso exige definir el objetivo de auditoría por aserción (existencia, integridad, derechos/obligaciones, valuación, presentación), seleccionar procedimientos y plasmar resultados en cédulas sumarias/analíticas con referencias cruzadas. El legajo resultante debe permitir a un revisor independiente replicar el razonamiento, verificar evidencia y comprender el nexo entre riesgos, pruebas, hallazgos y conclusiones profesionales. :contentReference[oaicite:4]{index=4}",
        },

        {
          type: "accordion",
          header: "Guía rápida (mapa mental en tres capas)",
          open: false,
          items: [
            {
              header: "Capa 1 — Núcleo de la ejecución",
              text: "Ejecución = aplicar procedimientos planeados para obtener evidencia suficiente y apropiada. Claves: pruebas selectivas (definir población, estratificar, tamaño de muestra), programas de trabajo por rubro y documentación robusta (papeles de trabajo, tick marks, referencias cruzadas). :contentReference[oaicite:5]{index=5}",
            },
            {
              header: "Capa 2 — Riesgos → Respuestas",
              text: "NIA 315: identificar y valorar riesgos de incorrección material. NIA 330: responder con pruebas de control y sustantivas, ajustando naturaleza, oportunidad y extensión. Controles fuertes ↓ pruebas sustantivas; controles débiles ↑ alcance y detalle. Mantener escepticismo y actualizar el programa cuando surjan nuevos riesgos. :contentReference[oaicite:6]{index=6}",
            },
            {
              header: "Capa 3 — Casos por rubro",
              text: "Efectivo: arqueo, conciliaciones, confirmaciones. CxC: confirmaciones, antigüedad, estimación. Inventarios: conteo físico, valuación, obsolescencia. PPE: inspección, depreciación, autorizaciones. Pasivo/CxP: confirmaciones, pagos posteriores, búsqueda de no registrados. Ingresos/costos/gastos: pruebas de corte y tendencias. Legajo: cédulas sumarias/analíticas bien indexadas. :contentReference[oaicite:7]{index=7}",
            },
          ],
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        /* 4. Ejecución del trabajo de auditoría */
        {
          id: "1.1",
          numbering: "4",
          title: "Ejecución del trabajo de auditoría",
          content: [
            {
              type: "paragraph",
              text: "La ejecución del trabajo de auditoría es la fase operativa en la que el auditor transforma la planeación en procedimientos concretos para obtener evidencia suficiente y apropiada. Supone desplegar las técnicas previstas en la estrategia global y en el programa de auditoría, ajustar el alcance ante nuevos riesgos y documentar de forma disciplinada cada paso en los papeles de trabajo. Conforme a las guías internacionales, en especial NIA 300 (planeación) y NIA 500 (evidencia), el énfasis es lograr que las pruebas seleccionadas deriven de la valoración de riesgos y se conecten con aseveraciones específicas (existencia, integridad, valuación, presentación y revelación). La ejecución no es una etapa rígida: incorpora un bucle de realimentación que permite refinar la naturaleza, oportunidad y extensión de pruebas cuando aparecen hechos inesperados o controles menos eficaces de lo previsto. Un buen trabajo de campo, por tanto, es sensible al riesgo, trazable en sus decisiones y transparente en su soporte documental. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "En la práctica, el auditor despliega procedimientos sustantivos (pruebas de detalle y sustantivas analíticas) y, cuando procede, pruebas de control. La selección de partidas, la definición de umbrales (materialidad) y el diseño de muestras están directamente influidos por la comprensión del negocio y del control interno. Por ejemplo, en un entorno con alto volumen transaccional y controles confiables, puede privilegiarse un enfoque analítico reforzado; mientras que en contextos con controles débiles convendrá ampliar pruebas de detalle sobre transacciones específicas. El desempeño profesional exige, además, mantener escepticismo y juicio profesional para evaluar incongruencias, sesgos gerenciales o indicios de fraude. Finalmente, la ejecución debe dejar rastro claro en cédulas sumarias y analíticas, con referencias cruzadas al legajo para facilitar la supervisión y revisión por parte de otros miembros del equipo. :contentReference[oaicite:1]{index=1}",
            },

            {
              type: "accordion",
              header: "Mapa táctico de la ejecución",
              open: false,
              items: [
                {
                  header: "Capas de decisión",
                  text: "1) Riesgos valorados → 2) Naturaleza, oportunidad y extensión de procedimientos → 3) Evidencia obtenida → 4) Recalibración del programa si emergen hallazgos.",
                },
                {
                  header: "Tipos de procedimientos",
                  text: "Pruebas de control; sustantivas (detalle y analíticas); confirmaciones externas; inspecciones físicas; recalculo; indagaciones y procedimientos analíticos.",
                },
                {
                  header: "Documentación mínima",
                  text: "Objetivo de cada prueba, población y criterios de selección, tamaño de muestra, desempeño, hallazgos, conclusiones y vínculo con aseveraciones.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Una ejecución eficaz se reconoce por su coherencia interna: los procedimientos se explican por los riesgos; las conclusiones son proporcionales a la evidencia; y los papeles de trabajo permiten replicar el razonamiento del auditor. La trazabilidad se asegura indicando el objetivo de cada prueba, la población de referencia, el método de selección (p. ej., muestreo aleatorio estratificado para facturas de venta), el tamaño de la muestra, los criterios de aceptación, los resultados y la conclusión. El uso disciplinado de índices y marcas (tick marks) agiliza la revisión cruzada y previene omisiones. Además, el programa debe mantenerse “vivo”: si una evidencia contradice supuestos, el auditor amplía el alcance, incorpora nuevas pruebas o eleva el nivel de escepticismo, dejando constancia de los cambios en el legajo. :contentReference[oaicite:2]{index=2}",
            },

            {
              type: "image",
              src: "https://assets.isu.pub/document-structure/240610124036-513ff8401c905c35df3defa6948579c5/v1/8954dcfdf3865750d6e5e341dbbc89a6.jpeg",
              alt: "Diagrama de flujo de la ejecución de auditoría: riesgos → programa → evidencia → conclusiones",
              caption:
                "Flujo operativo de la ejecución del trabajo de auditoría.",
            },

            {
              type: "paragraph",
              text: "El juicio profesional también gobierna el uso de muestreo y de procedimientos alternativos. Aunque las muestras reducen el volumen de revisión, la selección debe preservar la representatividad para no inducir conclusiones erróneas. En áreas de alto riesgo —efectivo, cuentas por cobrar, inventarios— se combinan pruebas de existencia, derechos y valuación, con confirmaciones externas, arqueos, observación de conteos físicos y verificaciones posteriores al cierre. En todas las áreas, la evidencia se evalúa por suficiencia y adecuación: cantidad y calidad. La supervisión y la revisión por un nivel jerárquico superior, previstas en la metodología del encargo, agregan una capa de control de calidad antes de emitir conclusiones. :contentReference[oaicite:3]{index=3}",
            },

            {
              type: "accordion",
              header: "Riesgos frecuentes y respuestas típicas",
              open: false,
              items: [
                {
                  header: "Selección no representativa",
                  text: "Mitigar con estratificación, criterios de riesgo y cobertura de montos significativos; documentar exclusiones y justificaciones. :contentReference[oaicite:4]{index=4}",
                },
                {
                  header: "Programas desactualizados",
                  text: "Actualizar ante cambios en alcance o hallazgos; registrar revisiones de supervisión y reejecución de pruebas críticas. :contentReference[oaicite:5]{index=5}",
                },
                {
                  header: "Evidencia insuficiente",
                  text: "Aumentar tamaño de muestra, cambiar la naturaleza de pruebas (de analíticas a detalle) o obtener confirmaciones directas. :contentReference[oaicite:6]{index=6}",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Conectar ejecución y conclusiones exige sintetizar hallazgos por rubro y aseveración, evaluar el efecto acumulado de incorrecciones y proponer ajustes cuando sea necesario. El cierre del trabajo de campo incluye resolver partidas pendientes, completar la lista de cotejo de documentación (checklist) y preparar el resumen de hallazgos significativos. Esta disciplina facilita la transición a la fase de formación de opinión y la consistencia con la materialidad definida. Cuando la evidencia contradice las afirmaciones de la administración, el auditor está obligado a ampliar pruebas, discutir los hallazgos y, de ser procedente, reconsiderar la conclusión prevista para el dictamen. :contentReference[oaicite:7]{index=7}",
            },
          ],
          subthemes: [
            /* 4.1 Pruebas selectivas */
            {
              id: "1.1.1",
              numbering: "4.1",
              title: "Pruebas selectivas",
              content: [
                {
                  type: "paragraph",
                  text: "Las pruebas selectivas consisten en aplicar procedimientos a una parte representativa de la población de transacciones o saldos, en vez de revisar el 100%. Su razón de ser es lograr eficiencia sin sacrificar la calidad del aseguramiento: focalizan esfuerzos donde el riesgo de incorrección material es mayor y donde la relación costo-beneficio de las pruebas resulta más favorable. Para ser válidas, requieren definir con precisión la población, el método de selección (aleatorio, sistemático, dirigido por riesgo, estratificado), el tamaño de muestra y los criterios para proyectar hallazgos. Un ejemplo típico es la selección de facturas de venta combinando estratos por importe y por antigüedad de saldos, para cubrir partidas de alto valor y clientes dudosos. El diseño debe quedar documentado en cédulas con referencias cruzadas al programa. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "paragraph",
                  text: "La selección puede ser puramente estadística o no estadística; en ambos casos, se exige juicio profesional y consistencia con los objetivos de la prueba. En entornos altamente automatizados, conviene apoyarse en extracción de datos (p. ej., filtros por rangos de importes, por fechas cercanas al cierre, por clientes con mayor riesgo) para formar subpoblaciones homogéneas. Además, la naturaleza de la aseveración determina el procedimiento: para ‘existencia’ se privilegia la inspección/confirmación; para ‘integridad’, el rastreo desde documentos fuente hasta el registro. La proyección de desviaciones a la población debe explicitar supuestos y, cuando se detectan outliers relevantes, considerarlos por separado para no distorsionar la estimación. :contentReference[oaicite:9]{index=9}",
                },

                {
                  type: "accordion",
                  header: "Diseño de muestra en tres pasos",
                  open: false,
                  items: [
                    {
                      header: "1) Definir población y objetivo",
                      text: "Aseveración objetivo, periodo, universo de documentos/saldos; excluir partidas no auditables con justificación y soporte.",
                    },
                    {
                      header: "2) Seleccionar método",
                      text: "Aleatorio simple, sistemático, estratificado, dirigido por riesgo; documentar parámetros y herramientas utilizadas.",
                    },
                    {
                      header: "3) Determinar tamaño y criterios",
                      text: "Cobertura de materialidad, tolerancia al error, nivel de confianza; umbrales para investigación y extrapolación.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Los riesgos típicos en pruebas selectivas incluyen: (a) sesgos de selección (priorizar conveniencia sobre representatividad), (b) muestras demasiado pequeñas frente a la dispersión de la población, y (c) extrapolaciones defectuosas que subestiman el error probable. Para mitigarlos, se recomienda estratificar por riesgo y monto, cubrir transacciones cercanas al corte, combinar selección estadística con ítems clave (key items) y, ante desviaciones significativas, ampliar la muestra o cambiar la naturaleza de la prueba. Toda decisión debe sustentarse en papeles de trabajo que permitan a un revisor independiente comprender el criterio aplicado y replicar los resultados. :contentReference[oaicite:10]{index=10}",
                },

                {
                  type: "image",
                  src: "https://fastercapital.com/es/i-es/Capas--eliminando-las-capas-de-las-estrategias-comerciales-circulares--Ejemplos-de-estrategias-de-estratificaci-n-exitosas.webp",
                  alt: "Esquema de estratificación y selección de muestra en auditoría",
                  caption:
                    "Ejemplo de estratificación por importe y riesgo para ventas.",
                },

                {
                  type: "paragraph",
                  text: "Ejemplo práctico: en la auditoría de ventas con 3,000 facturas anuales, el auditor selecciona 100 comprobantes mediante muestreo estratificado, cubriendo facturas de alto valor y clientes con saldos vencidos; verifica pedido, entrega y registro contable, y concluye sobre existencia y corte. Si se detectan desviaciones —p. ej., documentos de entrega faltantes—, se proyecta el error y se valora si afecta la materialidad. Este enfoque, además, se coordina con pruebas analíticas (tendencias de márgenes, rotación de cuentas por cobrar) para robustecer la conclusión. La combinación de procedimientos fortalece la evidencia y permite ajustar el programa cuando emergen hallazgos no previstos. :contentReference[oaicite:11]{index=11}",
                },

                {
                  type: "accordion",
                  header: "Errores comunes y cómo evitarlos",
                  open: false,
                  items: [
                    {
                      header: "Cobertura insuficiente",
                      text: "Asegura que la muestra cubra periodos críticos (cierre) y transacciones significativas; revisa el ‘gap’ con materialidad. :contentReference[oaicite:12]{index=12}",
                    },
                    {
                      header: "No documentar proyección",
                      text: "Incluye tabla de extrapolación y supuestos; si hay outliers, evalúalos de forma individual. :contentReference[oaicite:13]{index=13}",
                    },
                    {
                      header: "No ajustar el plan",
                      text: "Ante desviaciones, incrementa tamaño de muestra o cambia a pruebas de mayor contundencia (confirmaciones, inspección). :contentReference[oaicite:14]{index=14}",
                    },
                  ],
                },
              ],
            },

            /* 4.2 Programas de trabajo */
            {
              id: "1.1.2",
              numbering: "4.2",
              title: "Programas de trabajo",
              content: [
                {
                  type: "paragraph",
                  text: "El programa de trabajo es el plan detallado de procedimientos que ejecutará el equipo en cada área (p. ej., efectivo, cuentas por cobrar, inventarios). Traducen la estrategia global en tareas concretas con objetivos, alcance, responsables y evidencias previstas. Un buen programa es específico (qué se hará y por qué), flexible (se actualiza ante nuevos riesgos) y trazable (vincula pruebas con aseveraciones). En cuentas por cobrar, por ejemplo, puede incluir confirmaciones externas, revisión de antigüedad, análisis de estimación por incobrabilidad y verificación documental soporte de ventas. La clave es que cada procedimiento responda a riesgos valorados y a umbrales de materialidad, y que el resultado esperado se describa para facilitar la evaluación de suficiencia y adecuación de evidencia. :contentReference[oaicite:15]{index=15}",
                },
                {
                  type: "paragraph",
                  text: "El desarrollo del programa parte de la comprensión del control interno (NIA 315) y de la definición de respuestas a riesgos (NIA 330): si los controles son sólidos y probados, puede reducirse la extensión de pruebas sustantivas; si presentan debilidades, el programa incorpora pruebas adicionales de detalle o de corte. El documento debe indicar población, método de selección, tamaño de muestra, marcas de revisión, y referencias a cédulas y soportes (confirmaciones, conciliaciones, recálculos). Asimismo, establece hitos de supervisión y revisión, asegurando que cualquier cambio en alcance o en el enfoque quede oportunamente documentado, con sus razones y efectos en el plan global. :contentReference[oaicite:16]{index=16}",
                },

                {
                  type: "accordion",
                  header: "Estructura mínima de un programa",
                  open: false,
                  items: [
                    {
                      header: "Encabezado",
                      text: "Área, objetivo, aseveraciones cubiertas, materialidad aplicable, fecha y responsable.",
                    },
                    {
                      header: "Procedimientos",
                      text: "Lista secuenciada con naturaleza, oportunidad y extensión; población, muestra y criterios de aceptación.",
                    },
                    {
                      header: "Documentación y cierre",
                      text: "Papeles de trabajo requeridos, tick marks, referencias cruzadas, conclusiones y puntos pendientes.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Ejemplo: para cuentas por cobrar, el programa puede detallar: (1) Enviar confirmaciones positivas a clientes que cubran al menos X% del saldo; (2) Revisar antigüedad e identificar saldos vencidos; (3) Verificar documentación de ventas (pedidos, notas de entrega, CFDI); (4) Evaluar estimación por incobrables con historia de cobros; (5) Ejecutar pruebas de corte alrededor del cierre. Cada procedimiento se vincula con las aseveraciones de existencia, derechos y valuación. Los hallazgos se resumen en cédula sumaria y, si procede, se proponen ajustes y revelaciones. :contentReference[oaicite:17]{index=17}",
                },

                {
                  type: "paragraph",
                  text: "Entre los riesgos comunes en la gestión de programas destacan: omitir procedimientos críticos, no actualizar el plan ante cambios en alcance y documentar de forma insuficiente. Para mitigarlos, conviene usar listas de cotejo por rubro, reuniones de avance para recalibrar riesgos (stand-ups), revisión de supervisión en puntos intermedios y finales, y controles de calidad internos antes del cierre. La clave es mantener alineados riesgos, pruebas y conclusiones: si un hallazgo altera la valoración inicial, el programa debe reflejarlo —con notas de versión— y el legajo debe contener la evidencia adicional ejecutada, fortaleciendo la base de la opinión. :contentReference[oaicite:18]{index=18}",
                },

                {
                  type: "accordion",
                  header: "Buenas prácticas de mantenimiento",
                  open: false,
                  items: [
                    {
                      header: "Versionado y trazabilidad",
                      text: "Control de cambios con fecha, motivo y efecto en alcance; referencias a papeles reejecutados. :contentReference[oaicite:19]{index=19}",
                    },
                    {
                      header: "Vinculación con hallazgos",
                      text: "Cada ajuste propuesto debe apuntar al procedimiento que lo originó y a la evidencia soporte. :contentReference[oaicite:20]{index=20}",
                    },
                    {
                      header: "Cierre disciplinado",
                      text: "Checklist de documentación, resolución de pendientes y conclusiones por aseveración antes del archivado. :contentReference[oaicite:21]{index=21}",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* 5. Resolución de Casos Prácticos en Auditoría */
        {
          id: "1.2",
          numbering: "5",
          title: "Resolución de casos prácticos en auditoría",
          content: [
            {
              type: "paragraph",
              text: "La resolución de casos prácticos integra, en un contexto realista, los principios y técnicas de auditoría para emitir conclusiones sustentadas. El punto de partida es fijar el objetivo del encargo y el marco de información financiera aplicable, así como los criterios de materialidad y el nivel de seguridad razonable esperados. A partir de ahí, se articula un enfoque basado en riesgos conforme a NIA 315 y NIA 330: comprender la entidad y su entorno, identificar riesgos de incorrección material a nivel de estados financieros y de aseveración, valorar la efectividad de controles relevantes y diseñar respuestas de auditoría congruentes. El caso exige, además, demostrar escepticismo profesional, independencia y una documentación suficiente y apropiada que deje trazabilidad desde la estrategia global hasta las conclusiones. La dinámica didáctica privilegia la discusión técnica, la contrastación con NIF y la elaboración de papeles de trabajo que respalden la opinión.",
            },
            {
              type: "paragraph",
              text: "Fase 1 — Lectura técnica del caso. Se extraen hechos clave: modelo de negocio, procesos críticos (ingresos, compras, inventarios, tesorería, nómina), TI relevante y gobierno corporativo. Se identifican riesgos inherentes (complejidad de estimaciones, juicios contables, transacciones inusuales), riesgos de fraude (presión, oportunidad, racionalización) y factores del ambiente de control. Con base en ello, se define la materialidad global y de ejecución, se determinan riesgos significativos y se priorizan aseveraciones (existencia, integridad, valuación, derechos/obligaciones y presentación). El producto de esta fase es una estrategia global (NIA 300) y un programa preliminar de procedimientos, con hipótesis de dónde podrían surgir incorrecciones materiales y qué evidencia sería más persuasiva para refutarlas o confirmarlas.",
            },
            {
              type: "image",
              src: "https://www.researchgate.net/publication/331399917/figure/fig1/AS:731232618958848@1551350850245/El-sistema-comprende-cuatro-etapas-Deteccion-del-peligro-Evaluacion-del-riesgo-Alerta.ppm",
              alt: "Flujo de trabajo en casos prácticos de auditoría",
              caption:
                "Mapa de fases: comprensión → riesgos → respuestas → evidencia → hallazgos → conclusión.",
            },
            {
              type: "paragraph",
              text: "Fase 2 — Respuestas de auditoría y obtención de evidencia. Se decide si conviene probar controles (cuando, por diseño y operación, pueden prevenir o detectar incorrecciones) o si se enfoca el esfuerzo en pruebas sustantivas (detalle y analíticas). Se seleccionan procedimientos: inspección documental, observación, confirmaciones externas, recálculo, reejecución y analítica sustantiva. Se definen la naturaleza, oportunidad y extensión (NOE), así como las técnicas de muestreo (atributos/variables) y su tamaño. La calidad de la evidencia se evalúa por su relevancia y confiabilidad; en particular, la evidencia externa suele ser más persuasiva. Todo se documenta en papeles de trabajo con índices, marcas (tick marks), referencias cruzadas y conclusiones parciales, asegurando que otro profesional competente pueda reperformar el trabajo.",
            },
            {
              type: "accordion",
              header: "Guía rápida para abordar el caso",
              open: false,
              items: [
                {
                  header: "Capa 1 — Diagnóstico",
                  text: "Entender procesos y riesgos, fijar materialidad y riesgos significativos, ubicar aseveraciones críticas por rubro (efectivo, CxC, inventarios, PPE, CxP, ingresos).",
                },
                {
                  header: "Capa 2 — Respuestas",
                  text: "Decidir pruebas de control vs. sustantivas; planear confirmaciones, recálculos, pruebas de corte, observación de conteos y analítica dirigida.",
                },
                {
                  header: "Capa 3 — Evidencia y ajuste",
                  text: "Evaluar hallazgos, proyectar errores, proponer ajustes y comunicar deficiencias de control; actualizar la valoración de riesgos y el alcance.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "Fase 3 — Evaluación de hallazgos y comunicación. Terminados los procedimientos, se comparan los resultados con los criterios de materialidad y se proyectan las incorrecciones identificadas sobre la población, diferenciando errores fácticos, de juicio y extrapolados. Se formulan ajustes propuestos y se documentan deficiencias de control interno (significativas o no), con recomendaciones. La comunicación con la administración y con los encargados del gobierno corporativo se realiza de forma oportuna, clara y sustentada. Cuando sea pertinente, se consideran los efectos en el informe: párrafos de énfasis o de otras cuestiones, o incluso modificaciones de opinión si las incorrecciones no corregidas son materiales.",
            },
            {
              type: "paragraph",
              text: "Cierre — Conclusión y hoja de trabajo de opinión. Se integran las cédulas sumarias por rubro con sus conclusiones explícitas, se reconcilian saldos con estados financieros y se verifica la consistencia entre riesgos, procedimientos y hallazgos. El equipo contrasta las evidencias acumuladas con la hipótesis inicial y valida que la evidencia sea suficiente y apropiada (NIA 500) para sustentar la opinión. Finalmente, se elabora el borrador de informe y la carta de recomendaciones, dejando registro de revisiones internas y de control de calidad. El aprendizaje del caso se capitaliza en una reflexión sobre escepticismo profesional, sesgos cognitivos evitados y oportunidades de mejorar el diseño de programas para futuros encargos.",
            },
          ],
          subthemes: [
            /* 5.1 */
            {
              id: "1.2.1",
              numbering: "5.1",
              title: "Estudios y evaluación del control interno",
              content: [
                {
                  type: "paragraph",
                  text: "El estudio y evaluación del control interno es la base para dimensionar el riesgo de incorrección material y definir el alcance de pruebas. Inicia con la comprensión de procesos clave (ciclo de ingresos, egresos, inventarios, tesorería y nómina) y de la estructura de responsabilidades. Se documenta mediante entrevistas, cuestionarios, narrativas y diagramas de flujo, con énfasis en puntos de control, segregación de funciones y trazabilidad documental. Con ello, el auditor identifica dónde es probable que ocurran errores o fraude y qué controles buscan prevenirlos o detectarlos a tiempo.",
                },
                {
                  type: "paragraph",
                  text: "Tras comprender el sistema, se evalúa el diseño y la operación de controles relevantes. El diseño es adecuado si el control, de ejecutarse como se concibió, previene o detecta la incorrección; la operación es efectiva cuando el control se ejecuta por personal competente, con la frecuencia y evidencia debidas. Estas valoraciones guían si procede probar controles (pruebas de cumplimiento) o concentrarse en pruebas sustantivas. Debilidades en conciliaciones, revisiones independientes o autorizaciones suelen traducirse en mayor extensión de pruebas sustantivas.",
                },
                {
                  type: "accordion",
                  header: "Guía rápida: entender y evaluar",
                  open: false,
                  items: [
                    {
                      header: "Paso 1 — Entendimiento",
                      text: "Mapea procesos, roles y puntos de control; capta flujos con cuestionarios y flujogramas.",
                    },
                    {
                      header: "Paso 2 — Diseño",
                      text: "Verifica si el control, tal como está concebido, mitigaría el riesgo (aprobaciones, conciliaciones, segregación).",
                    },
                    {
                      header: "Paso 3 — Operación",
                      text: "Indaga evidencia de ejecución: firmas, sellos de tiempo, bitácoras, reportes automáticos y reprocesos de auditor.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Ejemplos típicos: en bancos, arqueos sorpresivos y conciliaciones diarias con revisión independiente; en cuentas por cobrar, confirmaciones externas y análisis de antigüedad; en inventarios, tomas físicas periódicas, controles de entradas y salidas y registros de diferencias; en PPE, políticas de capitalización y autorizaciones de adquisiciones/ bajas; en ingresos, pruebas de corte y correspondencia pedido–embarque–factura–registro.",
                },
                {
                  type: "image",
                  src: "https://imgv2-1-f.scribdassets.com/img/document/513259502/original/f0c58e0503/1?v=1",
                  alt: "Mapa de controles clave por ciclo",
                  caption:
                    "Controles típicos por ciclo (tesorería, ventas–cobranza, compras–pago, inventarios, PPE).",
                },
                {
                  type: "paragraph",
                  text: "Los hallazgos deben documentarse con claridad: condición (qué pasó), criterio (referencia normativa o política), causa, efecto y recomendación. Debilidades significativas se comunican oportunamente a la administración y, cuando corresponda, a los encargados del gobierno corporativo. El efecto de control interno en la estrategia de auditoría es directo: controles robustos permiten reducir extensión de pruebas sustantivas; controles débiles exigen incrementarlas o modificar su oportunidad y naturaleza.",
                },
                {
                  type: "accordion",
                  header: "Errores frecuentes y cómo mitigarlos",
                  open: false,
                  items: [
                    {
                      header: "Documentación insuficiente",
                      text: "Falta de evidencia de ejecución del control (p. ej., conciliaciones sin firma/fecha). Mitigación: listas de cotejo y revisiones independientes.",
                    },
                    {
                      header: "Segregación inadecuada",
                      text: "Una persona autoriza, ejecuta y registra. Mitigación: redistribuir tareas o establecer supervisión compensatoria.",
                    },
                    {
                      header: "Controles que no operan",
                      text: "Políticas en papel sin aplicación real. Mitigación: pruebas de cumplimiento y comunicación temprana del hallazgo.",
                    },
                  ],
                },
              ],
            },

            /* 5.2 */
            {
              id: "1.2.2",
              numbering: "5.2",
              title:
                "Definición, objetivo y elementos del control interno (COSO)",
              content: [
                {
                  type: "paragraph",
                  text: "El control interno, de acuerdo con el marco COSO, es un proceso implementado por el consejo, la dirección y el personal para proporcionar seguridad razonable en el logro de objetivos: operaciones eficaces y eficientes, información financiera confiable y cumplimiento normativo. Esta noción implica que los controles están integrados al quehacer diario, dependen de personas y ofrecen seguridad razonable (no absoluta) por limitaciones inherentes como errores humanos, colusión o elusión por la alta dirección.",
                },
                {
                  type: "paragraph",
                  text: "Cinco componentes lo estructuran: (1) Ambiente de control: integridad, valores éticos, estructura organizativa, competencias y tono desde la cima; (2) Evaluación de riesgos: identificación y análisis de riesgos relevantes, incluida la materialidad y la probabilidad; (3) Actividades de control: políticas y procedimientos (autorizaciones, conciliaciones, revisiones, segregación de funciones, controles automáticos); (4) Información y comunicación: calidad, oportunidad y accesibilidad de la información, incluidos reportes y sistemas; (5) Monitoreo: evaluaciones continuas o separadas que verifican si los controles siguen funcionando.",
                },
                {
                  type: "accordion",
                  header: "Capa práctica: COSO en acción",
                  open: false,
                  items: [
                    {
                      header: "Ambiente de control",
                      text: "Código de ética, comités de auditoría, descripciones de puesto y capacitación.",
                    },
                    {
                      header: "Actividades de control",
                      text: "Límites de autorización, conciliaciones periódicas, segregación de funciones, controles de TI (perfiles/roles).",
                    },
                    {
                      header: "Monitoreo",
                      text: "Indicadores clave, auditoría interna, revisiones gerenciales y remediación de hallazgos.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Ejemplo: para tesorería, la política de doble firma en cheques mayores a cierto umbral, conciliaciones bancarias mensuales con revisión independiente y limitación de accesos en banca electrónica. Para inventarios, conteos físicos cíclicos y bloqueo de movimientos sin documento soporte. Para ingresos, pruebas de corte y reconciliaciones entre facturación y embarques. Estos controles alinean riesgos con respuestas formales y trazables.",
                },
                {
                  type: "image",
                  src: "https://i.ytimg.com/vi/tGB3m9Oz83o/maxresdefault.jpg",
                  alt: "Esquema visual del marco COSO",
                  caption:
                    "Relación objetivos–componentes–unidades: vista matricial del marco COSO.",
                },
                {
                  type: "paragraph",
                  text: "Desde la perspectiva del auditor, COSO se conecta con NIA 315 y NIA 330: el entendimiento de cada componente alimenta la valoración del riesgo a nivel de estados financieros y de aseveraciones. Si los controles están bien diseñados y operan, procede probarlos para reducir la naturaleza o extensión de pruebas sustantivas; si son débiles, se responde con procedimientos sustantivos más extensos y oportunos. La comunicación oportuna de deficiencias y su seguimiento son claves para la mejora continua.",
                },
                {
                  type: "accordion",
                  header: "Checklist exprés por rubro",
                  open: false,
                  items: [
                    {
                      header: "Bancos",
                      text: "Arqueo y conciliación, límites de autorización, revisión independiente.",
                    },
                    {
                      header: "CxC / Ingresos",
                      text: "Confirmaciones, antigüedad de saldos, corte de ventas, políticas de incobrables.",
                    },
                    {
                      header: "Inventarios / PPE",
                      text: "Toma física, diferencias, políticas de capitalización, autorizaciones de alta/baja.",
                    },
                  ],
                },
              ],
            },

            /* 5.3  (intro general al trabajo por partidas) */
            {
              id: "1.2.3",
              numbering: "5.3",
              title: "Partidas específicas de los estados financieros",
              content: [
                {
                  type: "paragraph",
                  text: "El examen de partidas específicas combina controles y pruebas sustantivas para cubrir aseveraciones de existencia, integridad, derechos y obligaciones, valuación y presentación/revelación. Efectivo y equivalentes demandan arqueos, conciliaciones y confirmaciones; cuentas por cobrar, confirmaciones y análisis de antigüedad; inventarios, observación de conteos físicos y pruebas de valuación; PPE, inspecciones, verificación de títulos y cálculo de depreciaciones; pasivos y cuentas por pagar, confirmaciones, búsqueda de pasivos no registrados y revisión de pagos posteriores; ingresos, costos y gastos, pruebas de corte, analítica y documentación soporte; contingencias y eventos subsecuentes, indagaciones, revisión legal y actas; capital, cotejo con actas y registros societarios.",
                },
                {
                  type: "paragraph",
                  text: "La NIA 500 rige la evidencia de auditoría y la NIA 505 las confirmaciones externas. La NIA 501 establece pautas especiales para inventarios (asistencia al conteo físico) y litigios y reclamos; la NIA 560 orienta sobre eventos posteriores. Cada rubro exige papeles de trabajo organizados (cédulas sumarias/analíticas, índices y marcas), referencias cruzadas y conclusiones explícitas. La consistencia entre programas de trabajo, procedimientos aplicados y hallazgos es imprescindible para sostener la opinión.",
                },
                {
                  type: "accordion",
                  header: "Riesgos típicos por rubro",
                  open: false,
                  items: [
                    {
                      header: "Efectivo / Bancos",
                      text: "Malversaciones, conciliaciones desactualizadas, depósitos ficticios.",
                    },
                    {
                      header: "CxC / Ingresos",
                      text: "Sobrevaluación por incobrables no provisionados, reconocimiento anticipado.",
                    },
                    {
                      header: "Inventarios / PPE",
                      text: "Obsolescencia no reconocida, activos inexistentes o mal capitalizados.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "La evidencia debe ser suficiente (cantidad) y apropiada (calidad). Un solo tipo de evidencia rara vez es concluyente; la triangulación (documental, física, confirmaciones, analítica) aumenta la robustez. El auditor ajusta la naturaleza, oportunidad y extensión de pruebas según la materialidad, el riesgo y los resultados de controles. Si detecta desviaciones o indicios de fraude, amplía procedimientos, involucra a la dirección y reevalúa riesgos.",
                },
                {
                  type: "image",
                  src: "https://www.ticportal.es/wp-content/uploads/flujo-de-trabajo-documental-ejemplo.jpg?x19534",
                  alt: "Flujo de papeles de trabajo por rubro",
                  caption:
                    "De programa a conclusión: objetivo → procedimientos → evidencia → hallazgos → conclusión.",
                },
                {
                  type: "paragraph",
                  text: "El cierre por rubro requiere una conclusión explícita que conecte objetivos, procedimientos y hallazgos, más las incidencias relevantes (ajustes propuestos, deficiencias de control) y sus efectos. La integración final en el legajo de auditoría consolida evidencia y facilita la revisión. La consistencia entre pruebas, materialidad y riesgo valorado es el hilo conductor para sostener la razonabilidad de la opinión.",
                },
                {
                  type: "accordion",
                  header: "Papeles de trabajo recomendados",
                  open: false,
                  items: [
                    {
                      header: "Tesorería",
                      text: "PT-01 Arqueo, PT-02 Confirmaciones, PT-03 Conciliaciones, PT-04 Resumen de diferencias.",
                    },
                    {
                      header: "CxC / Inventarios",
                      text: "PT-05 Antigüedad, PT-06 Confirmaciones, PT-09 Acta de conteo, PT-12 Valuación.",
                    },
                    {
                      header: "PPE / Pasivos",
                      text: "PT-13 Listado PPE, PT-15 Depreciaciones, PT-18 Confirmaciones a proveedores, PT-19 Pagos posteriores.",
                    },
                  ],
                },
              ],
              subthemes: [
                /* 5.3.1 Efectivo y equivalentes de efectivo */
                {
                  id: "1.2.3.1",
                  numbering: "5.3.1",
                  title: "Efectivo y equivalentes de efectivo",
                  content: [
                    {
                      type: "paragraph",
                      text: "El examen del efectivo y sus equivalentes tiene como norte verificar que los saldos existan realmente, pertenezcan a la entidad, estén disponibles y se encuentren correctamente valuados y presentados al cierre. Ello implica comprobar, entre otros aspectos, que los depósitos, cheques en tránsito, cargos bancarios y conciliaciones estén depurados y reflejen la situación financiera con fidelidad. La planeación debe traducirse en procedimientos concretos que reduzcan el riesgo de malversación, errores de registro o sobrestimación de saldos por prácticas como registrar depósitos ficticios o diferir cargos bancarios. Al cierre, el auditor debe embragar evidencia de alta calidad y trazable que respalde su conclusión sobre la razonabilidad del rubro Caja y Bancos, considerando el principio de importancia relativa y los riesgos específicos detectados en el entorno de control y en la operación diaria de tesorería. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}",
                    },
                    {
                      type: "paragraph",
                      text: "En términos de procedimientos, el paquete mínimo e indispensable incluye conciliaciones bancarias actualizadas, conteos físicos de caja (arqueos) y confirmaciones directas de saldos con las instituciones financieras. Estas pruebas, ejecutadas con oportunidad y escepticismo, permiten detectar diferencias de corte, partidas pendientes sin sustento y prácticas irregulares. Las confirmaciones positivas a bancos son especialmente útiles cuando hay múltiples cuentas o movimientos significativos alrededor de la fecha de cierre; complementariamente, la revisión analítica de intereses, comisiones y movimientos extraordinarios puede revelar inconsistencias sutiles. Un programa de trabajo bien diseñado documenta la obtención de esa evidencia en papeles de trabajo estandarizados, numerados e indexados, facilitando la supervisión y el reejercicio posterior si fuese necesario. :contentReference[oaicite:2]{index=2} :contentReference[oaicite:3]{index=3}",
                    },
                    {
                      type: "paragraph",
                      text: "La evaluación de riesgos debe atender las fragilidades típicas de tesorería: segregación de funciones insuficiente, conciliaciones atrasadas, falta de controles sobre chequeras y banca electrónica, o registros incompletos de ingresos y pagos. El auditor debe identificar señales de alerta como conciliaciones con partidas antiguas, depósitos transitados reiteradamente, cheques no cobrados por lapsos inusuales y anulaciones frecuentes. La prueba sustantiva de detalle (vouching) sobre depósitos y retiros cercanos al cierre reduce el riesgo de manipular resultados, al tiempo que los arqueos sorpresivos desincentivan la malversación. En entidades intensivas en efectivo, técnicas de muestreo dirigidas por riesgo y procedimientos impredecibles elevan la probabilidad de descubrir irregularidades materiales. :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}",
                    },

                    {
                      type: "accordion",
                      header: "Checklist operativo — Caja y Bancos",
                      open: false,
                      items: [
                        {
                          header: "Conciliaciones",
                          text: "Conciliaciones al cierre con partidas identificadas, antigüedad y soporte de cada diferencia. Verificar contabilización oportuna posterior. :contentReference[oaicite:6]{index=6}",
                        },
                        {
                          header: "Confirmaciones",
                          text: "Confirmaciones directas a bancos, recepción y seguimiento de respuestas, y evaluación de diferencias. :contentReference[oaicite:7]{index=7}",
                        },
                        {
                          header: "Arqueos y corte",
                          text: "Arqueo físico y pruebas de corte para depósitos/retiros próximos al cierre, con rastreo a estados de cuenta. :contentReference[oaicite:8]{index=8}",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "La documentación debe dejar claro el nexo entre riesgos, respuesta de auditoría y evidencia obtenida: PT-01 para arqueo de caja, PT-02 para confirmaciones a bancos, PT-03 para conciliaciones con partidas pendientes y PT-04 para diferencias detectadas. Cada papel debe incluir propósito, fuente, procedimiento aplicado, hallazgos y conclusión, con referencias cruzadas a estados de cuenta y al libro mayor. Esta estructura facilita la revisión por un supervisor y soporta la conclusión de que la evidencia es suficiente y apropiada. En auditorías recurrentes, el comparativo interanual de partidas conciliatorias y la trazabilidad de diferencias históricas agregan potencia analítica para detectar patrones anómalos. :contentReference[oaicite:9]{index=9}",
                    },
                    {
                      type: "accordion",
                      header: "Riesgos frecuentes y cómo mitigarlos",
                      open: false,
                      items: [
                        {
                          header: "Malversación y fraudes",
                          text: "Mitigar con arqueos sorpresivos, segregación de funciones y revisión de accesos a banca electrónica. :contentReference[oaicite:10]{index=10}",
                        },
                        {
                          header: "Errores de registro",
                          text: "Pruebas de corte y conciliaciones oportunas; rastreo de partidas antiguas y cargos/abonos no registrados. :contentReference[oaicite:11]{index=11}",
                        },
                        {
                          header: "Sobreestimación de saldos",
                          text: "Indagar depósitos ficticios, cheques en tránsito improcedentes y comisiones no reconocidas. :contentReference[oaicite:12]{index=12}",
                        },
                      ],
                    },
                  ],
                },

                /* 5.3.2 Cuentas por cobrar */
                {
                  id: "1.2.3.2",
                  numbering: "5.3.2",
                  title: "Cuentas por cobrar",
                  content: [
                    {
                      type: "paragraph",
                      text: "Las cuentas por cobrar representan derechos de cobro por ventas a crédito y, por tanto, combinan riesgos de existencia, derechos y valuación con el de recuperabilidad. El objetivo de auditoría es verificar que los saldos sean reales, pertenezcan a la entidad, estén correctamente valuados (incluyendo estimaciones por incobrabilidad) y presentados con revelaciones suficientes. La combinación de confirmaciones externas y análisis de antigüedad permite evaluar la calidad de cartera; complementariamente, el examen de provisiones de incobrables y políticas de crédito otorga evidencia sobre la razonabilidad de la valuación. Estas pruebas se enmarcan en respuestas del auditor a riesgos valorados y en confirmaciones externas reguladas por NIA aplicables. :contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14}",
                    },
                    {
                      type: "paragraph",
                      text: "El conjunto de procedimientos típico incluye confirmaciones positivas o negativas a clientes, revisión de antigüedad de saldos, análisis de eventos posteriores (cobros después del cierre) y evaluación de la estimación por cuentas incobrables. Las confirmaciones positivas se prefieren cuando los saldos son significativos o el riesgo es alto; las negativas pueden ser eficientes en carteras muy dispersas y de menor riesgo. El análisis de cobros posteriores proporciona evidencia de alta calidad sobre existencia y valuación. La documentación debe incluir el diseño de la muestra, cartas enviadas y recibidas, conciliaciones de diferencias y el cálculo de la estimación por incobrables con su soporte estadístico o de política contable. :contentReference[oaicite:15]{index=15} :contentReference[oaicite:16]{index=16}",
                    },
                    {
                      type: "paragraph",
                      text: "Los riesgos más comunes son la sobrevaloración por falta de provisiones, facturación ficticia para inflar ingresos, aplicación incorrecta de pagos, y la insuficiente segregación de funciones en crédito y cobranza. Un análisis crítico de notas de crédito, cancelaciones y ajustes cerca del cierre ayuda a descubrir reconocimientos improcedentes de ingreso. La revisión de condiciones de venta, términos de devolución y acuerdos con clientes relevantes permite valorar si existen indicios de transacciones con partes relacionadas o prácticas de canal stuffing. Una adecuada combinación de pruebas sustantivas y de control, guiadas por la valoración de riesgos, eleva la probabilidad de detectar incorrecciones materiales. :contentReference[oaicite:17]{index=17}",
                    },

                    {
                      type: "accordion",
                      header: "Papeles de trabajo clave (cartera)",
                      open: false,
                      items: [
                        {
                          header: "PT-05 Antigüedad de saldos",
                          text: "Listados por tramos (0–30, 31–60, 61–90, +90) con indicadores de cobertura de provisión y cobros posteriores. :contentReference[oaicite:18]{index=18}",
                        },
                        {
                          header: "PT-06 Confirmaciones",
                          text: "Evidencia de envíos/recepción, conciliación de diferencias y análisis de no respuestas. :contentReference[oaicite:19]{index=19}",
                        },
                        {
                          header: "PT-07 Estimación incobrables",
                          text: "Cálculo y razonabilidad de la estimación; políticas y base de datos histórica. :contentReference[oaicite:20]{index=20}",
                        },
                      ],
                    },

                    {
                      type: "image",
                      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYCualbydGSoeShHq5SIksg-yi-0hADDSFth9pRxV2l_4ZJFwdLBT70E_HYJRHRI7fLPlKY18uemmbEGPjuNcoQGiQyuG6b2TUn0CDd4EKFlfg2ZVzmHRIGCDMEQR9g25WFpZZ34GvLaI/s1600/Cuentas+por+Cobrar+4.jpg",
                      alt: "Flujo de confirmaciones y evaluación de incobrabilidad en cuentas por cobrar",
                    },

                    {
                      type: "paragraph",
                      text: "Para robustecer la conclusión, el auditor debe triangular evidencia: (i) confirmaciones externas (respuestas y conciliaciones), (ii) cobros posteriores y (iii) pruebas de valuación (modelos de pérdida esperada o análisis histórico). La consistencia entre estas fuentes incrementa la confiabilidad del dictamen. En auditorías recurrentes, el comparativo interanual de rotación de cuentas por cobrar y la evolución de la tasa de incobrables es un indicador sensible de cambios en riesgo de crédito. La presentación final debe incluir revelaciones sobre políticas de crédito, factores de riesgo y concentraciones significativas de clientes, en línea con el marco de información financiera aplicable. :contentReference[oaicite:21]{index=21} :contentReference[oaicite:22]{index=22}",
                    },
                    {
                      type: "accordion",
                      header: "Riesgos y respuestas de auditoría",
                      open: false,
                      items: [
                        {
                          header: "Sobrevaloración",
                          text: "Aumentar tamaño de muestra en saldos vencidos; confirmar saldos grandes; revisar cobros posteriores y ajustar estimación. :contentReference[oaicite:23]{index=23}",
                        },
                        {
                          header: "Ingresos ficticios",
                          text: "Procedimientos de corte de ventas, rastreo a embarques y análisis de devoluciones/cancelaciones. :contentReference[oaicite:24]{index=24}",
                        },
                        {
                          header: "Aplicación incorrecta de pagos",
                          text: "Revisión por pruebas de detalle en conciliaciones de cliente y bitácoras de cobranza. :contentReference[oaicite:25]{index=25}",
                        },
                      ],
                    },
                  ],
                },

                /* 5.3.3 Inventarios */
                {
                  id: "1.2.3.3",
                  numbering: "5.3.3",
                  title: "Inventarios",
                  content: [
                    {
                      type: "paragraph",
                      text: "Los inventarios, como bienes destinados a la venta o al consumo en la producción, concentran riesgos de existencia física, propiedad, valuación y presentación. La NIA 501 exige la asistencia del auditor a la toma física cuando sea relevante, con el fin de obtener evidencia sobre la existencia e integridad de las cantidades. Además, la valuación conforme a las políticas (PEPS, promedio, etc.) y la identificación de obsolescencias o deterioros demandan pruebas sustantivas y analíticas. La adecuada presentación requiere clasificar inventarios por naturaleza y revelar políticas, restricciones y garantías, así como riesgos de obsolescencia. El enfoque debe enlazar controles operativos (kardex, segregación en almacenes) con pruebas de detalle y reconciliaciones a registros contables. :contentReference[oaicite:26]{index=26} :contentReference[oaicite:27]{index=27}",
                    },
                    {
                      type: "paragraph",
                      text: "Los procedimientos principales abarcan: asistencia a toma física, recuentos de prueba, reconciliación entre conteo y libro, pruebas de valuación bajo el método adoptado, y revisión de movimientos alrededor del cierre (recepciones y salidas). Cuando la toma física es previa al cierre, el auditor debe diseñar procedimientos de roll-forward/roll-back que aseguren la trazabilidad de cantidades al cierre. En industrias con múltiples ubicaciones, el muestreo estadístico y la evaluación del control de inventarios adquieren relevancia. La revisión de productos en consignación y de bienes de terceros en almacén evita registrar activos que no son de la entidad. :contentReference[oaicite:28]{index=28} :contentReference[oaicite:29]{index=29}",
                    },
                    {
                      type: "paragraph",
                      text: "Entre los riesgos más frecuentes están: obsolescencia no registrada, faltantes o sobrantes, manipulación para alterar costo de ventas, inclusión de mercancía en consignación como propia, y sobrevaluación por no reconocer deterioros. Responder a estos riesgos exige pruebas sorpresivas, observación de conteos, pruebas de valoración con énfasis en márgenes negativos y análisis de rotación por línea de producto. Las diferencias detectadas deben rastrearse hasta su resolución, documentando ajustes y causas raíz (errores de captura, conteos deficientes, mermas no registradas). La evidencia debe ser concluyente respecto a la razonabilidad del saldo y su variación interanual. :contentReference[oaicite:30]{index=30}",
                    },

                    {
                      type: "accordion",
                      header: "Papeles de trabajo — Inventarios",
                      open: false,
                      items: [
                        {
                          header: "PT-09 Toma física",
                          text: "Acta de observación y recuentos de prueba; diferencias detectadas y su conciliación. :contentReference[oaicite:31]{index=31}",
                        },
                        {
                          header: "PT-10 Reconciliación",
                          text: "Concordancia entre conteos y libro mayor/kardex; ajustes y justificación. :contentReference[oaicite:32]{index=32}",
                        },
                        {
                          header: "PT-12 Valuación",
                          text: "Pruebas PEPS/UEPS/Promedio y análisis de inventarios obsoletos o dañados. :contentReference[oaicite:33]{index=33}",
                        },
                      ],
                    },

                    {
                      type: "image",
                      src: "https://praisa.com.mx/wp-content/uploads/2019/11/conciliaci%C3%B3n-1.png",
                      alt: "Esquema de toma física y reconciliación de inventarios",
                    },

                    {
                      type: "paragraph",
                      text: "Cuando los inventarios son materiales, pequeñas debilidades de control pueden escalar a incorrecciones significativas. Por ello, la estrategia combina pruebas de control (autorizaciones, segregación, conteo cíclico) con sustantivas (observación, recuentos, valuación). En sectores con vida útil corta, el análisis de obsolescencia y la política de descuentos o destrucción requieren especial escrutinio. El auditor debe también evaluar que las revelaciones cumplan con el marco contable: políticas de valuación, inventarios pignorados, restricciones, pérdidas por deterioro y metodologías de coste. La conclusión debe vincular explícitamente la evidencia recopilada con la aseveración de existencia y valuación en el dictamen. :contentReference[oaicite:34]{index=34} :contentReference[oaicite:35]{index=35}",
                    },
                    {
                      type: "accordion",
                      header: "Riesgos claves y respuestas",
                      open: false,
                      items: [
                        {
                          header: "Obsolescencia",
                          text: "Analítica de rotación, márgenes negativos y antigüedad por SKU; pruebas de deterioro. :contentReference[oaicite:36]{index=36}",
                        },
                        {
                          header: "Manipulación del costo de ventas",
                          text: "Corte de entradas/salidas y reconciliaciones con órdenes de compra/producción. :contentReference[oaicite:37]{index=37}",
                        },
                        {
                          header: "Inclusión de bienes ajenos",
                          text: "Indagación sobre consignaciones y confirmación con terceros custodios. :contentReference[oaicite:38]{index=38}",
                        },
                      ],
                    },
                  ],
                },
                /* 5.3.4 Propiedades, planta y equipo (PPE) */
                {
                  id: "1.2.3.4",
                  numbering: "5.3.4",
                  title: "Propiedades, planta y equipo (PPE)",
                  content: [
                    {
                      type: "paragraph",
                      text: "El objetivo al auditar PPE es concluir si los activos existen, son propiedad de la entidad, están valuados correctamente (costo menos depreciación/deterioro), se presentan y revelan adecuadamente, y se encuentran disponibles para la operación. Ello exige vincular riesgos (capitalización indebida, depreciaciones insuficientes, activos en desuso) con respuestas de auditoría que incluyan pruebas de control y sustantivas, así como trabajo analítico sobre tasas de depreciación y tendencias interanuales. La estrategia también debe considerar ubicaciones múltiples, activos con componentes significativos y partidas en proceso (obra en curso) que pueden alterar la exposición al riesgo.",
                    },
                    {
                      type: "paragraph",
                      text: "Los procedimientos típicos abarcan: (i) inspección física selectiva y conciliación contra el registro de activos fijos, (ii) revisión de adiciones y bajas del periodo, con rastreo a facturas, contratos y actas de recepción, (iii) pruebas de corte, (iv) verificación de pólizas de seguro y posibles gravámenes, y (v) reconsideración de vidas útiles y métodos de depreciación. Para obra en curso, el auditor evalúa la razonabilidad del avance, pagos a contratistas, segregación entre gasto y capitalización, y eventual traslado a activo en operación una vez disponible para su uso.",
                    },

                    {
                      type: "accordion",
                      header: "Checklist operativo — PPE",
                      open: false,
                      items: [
                        {
                          header: "Existencia y propiedad",
                          text: "Inspección física; cotejo con placas/etiquetas; títulos de propiedad/contratos de compra y garantías.",
                        },
                        {
                          header: "Valuación",
                          text: "Pruebas de costo (facturas, gastos directos atribuibles), depreciación (método, vida útil, valor residual) y deterioro.",
                        },
                        {
                          header: "Presentación y revelación",
                          text: "Clasificación por naturaleza, revelaciones de restricciones, gravámenes, revaluaciones y obra en curso.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "Entre los riesgos clave destacan la capitalización de gastos de mantenimiento como mejoras, el diferimiento artificial de bajas para evitar pérdidas y el registro de activos no disponibles para su uso como si estuvieran en operación. Las respuestas de auditoría incluyen pruebas de detalle sobre adiciones cercanas al cierre, análisis de cuentas de mantenimiento para detectar capitalizaciones improcedentes, y revisión de bajas por desincorporación, robo o siniestro, verificando el adecuado reconocimiento de pérdidas o recuperaciones del seguro.",
                    },
                    {
                      type: "paragraph",
                      text: "Cuando la entidad tiene arrendamientos que generan activos por derecho de uso, el auditor corrobora la identificación de los contratos que califican, el cálculo del pasivo (tasas de descuento, plazos, opciones), la depreciación del derecho de uso y las revelaciones correspondientes. Asimismo, si existe revaluación (modelo de revaluación), se revisan avalúos, la consistencia metodológica y el reconocimiento en otro resultado integral. La materialidad y el juicio profesional orientan la extensión de pruebas.",
                    },
                    {
                      type: "paragraph",
                      text: "La documentación en papeles de trabajo debe dejar claro el nexo riesgo-procedimiento-evidencia-conclusión: listados de PPE conciliados con mayor, papeles de adiciones/bajas (con soporte), matrices de depreciación por clase de activo, evidencia de inspección física y evaluaciones de deterioro. Un índice sólido y marcas (tick marks) facilitan la revisión y la trazabilidad de hallazgos a los estados financieros.",
                    },

                    {
                      type: "accordion",
                      header: "Riesgos y respuestas — PPE",
                      open: false,
                      items: [
                        {
                          header: "Capitalización indebida",
                          text: "Revisión de gastos de mantenimiento; criterios de mejora vs. reparación; pruebas de corte y evidencia técnica.",
                        },
                        {
                          header: "Depreciaciones insuficientes",
                          text: "Analítica de tasas y vidas útiles; contraste con política, uso real y obsolescencia tecnológica.",
                        },
                        {
                          header: "Bajas omitidas",
                          text: "Rastrear activos inactivos; conciliación con pólizas de seguro, ventas y actas de desincorporación.",
                        },
                      ],
                    },
                  ],
                },

                /* 5.3.5 Inmuebles, Maquinaria y Equipo (IME) */
                {
                  id: "1.2.3.5",
                  numbering: "5.3.5",
                  title: "Inmuebles, Maquinaria y Equipo (IME)",
                  content: [
                    {
                      type: "paragraph",
                      text: "IME enfatiza partidas de alto valor y larga vida útil con riesgos de propiedad legal, gravámenes, valuación y deterioro. El auditor valida títulos de los inmuebles, verifica si existen hipotecas o restricciones, y comprueba que la maquinaria esté en condiciones de operación. En organizaciones intensivas en capital, el control de activos (etiquetado, inventarios físicos periódicos, mantenimiento programado) es un elemento central de la evaluación del control interno.",
                    },
                    {
                      type: "paragraph",
                      text: "Las adiciones se examinan por su soporte (contratos, órdenes de compra, recepción, actas de puesta en marcha), mientras que para la maquinaria importada se revisan pedimentos, aranceles y costos directamente atribuibles. Los avalúos, cuando se usan para fines de revaluación, deben ser ejecutados por peritos independientes y con metodologías consistentes. Para activos construidos internamente, el auditor analiza la capitalización de costos (materiales, mano de obra directa y gastos atribuibles) y la razonabilidad del interés capitalizado, si aplica.",
                    },

                    {
                      type: "accordion",
                      header: "Puntos finos — IME",
                      open: false,
                      items: [
                        {
                          header: "Propiedad y gravámenes",
                          text: "Títulos, folios registrales, contratos de garantía, servidumbres, hipotecas; conciliación con notas a los estados.",
                        },
                        {
                          header: "Mantenimiento vs. mejora",
                          text: "Criterios para capitalizar; evidencia técnica; segregación por componentes críticos (motor, transmisión, moldes).",
                        },
                        {
                          header: "Obra en curso",
                          text: "Curaduría de avances, valuación del progreso y traslado a operación al estar disponible para su uso.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "Los riesgos de fraude/error incluyen activar gastos corrientes, mantener activos obsoletos sin deterioro y no registrar pérdidas por baja de equipo. Como respuestas, el auditor realiza pruebas de detalle sobre partidas atípicas, revisa reportes de mantenimiento y tiempos de inactividad, y contrasta la producción esperada con la capacidad instalada para identificar activos improductivos. La inspección en planta y entrevistas con mantenimiento aportan evidencia adicional.",
                    },
                    {
                      type: "paragraph",
                      text: "La depreciación por componentes puede ser más fiel al patrón de consumo de beneficios económicos; el auditor evalúa si la política refleja la realidad operativa. Asimismo, la presencia de contratos de arrendamiento financiero disfrazados exige un escrutinio de términos (opciones de compra, valor residual garantizado) para determinar su adecuada clasificación y contabilización. Todo cambio de vida útil o método se documenta y se sustenta.",
                    },
                    {
                      type: "paragraph",
                      text: "La conclusión debe enlazar evidencia con aseveraciones: existencia (inspección), derechos (títulos), valuación (costo/depreciación/deterioro), presentación (clasificación por naturaleza) y revelación (gravámenes, revaluaciones, obra en curso). Papeles de trabajo bien indexados (PT-IME-01 a PT-IME-06) permitirán una revisión eficiente y replicable.",
                    },

                    {
                      type: "accordion",
                      header: "Riesgos y salvaguardas — IME",
                      open: false,
                      items: [
                        {
                          header: "Sobrevaluación",
                          text: "Analítica de márgenes, test de deterioro, contraste con productividad y obsolescencia.",
                        },
                        {
                          header: "Clasificación errónea",
                          text: "Revisión de arrendamientos y obra en curso; corte de capitalizaciones; evidencia de disponibilidad.",
                        },
                        {
                          header: "Restricciones no reveladas",
                          text: "Búsqueda de gravámenes en registros y confirmaciones con acreedores/aseguradoras.",
                        },
                      ],
                    },
                  ],
                },

                /* 5.3.6 Cargos diferidos y pagos anticipados */
                {
                  id: "1.2.3.6",
                  numbering: "5.3.6",
                  title: "Cargos diferidos y pagos anticipados",
                  content: [
                    {
                      type: "paragraph",
                      text: "Los pagos anticipados (seguros, rentas, mantenimientos, licencias) y otros cargos diferidos representan beneficios económicos futuros ya desembolsados. El objetivo de auditoría es verificar existencia (contratos/facturas), derechos (condiciones de reembolso/uso), valuación (amortización sistemática) y presentación (corriente/no corriente), así como que no se utilicen para diferir impropiamente gastos operativos y mejorar artificialmente resultados.",
                    },
                    {
                      type: "paragraph",
                      text: "Los procedimientos incluyen: rastreo del desembolso al contrato y a la factura, verificación de la cobertura temporal, recálculo de la amortización lineal u otro método razonable y pruebas de corte para asegurar que la porción devengada se reconozca como gasto del periodo. En anticipos relevantes se indaga la recuperabilidad (por ejemplo, cancelación de eventos o rescisión de contratos) y se revisan cláusulas de penalización o reembolso.",
                    },

                    {
                      type: "accordion",
                      header: "Checklist de auditoría — Anticipos",
                      open: false,
                      items: [
                        {
                          header: "Soporte y vigencia",
                          text: "Contrato y factura; periodo de cobertura; condiciones de uso o cancelación.",
                        },
                        {
                          header: "Amortización",
                          text: "Cronograma y método; recalcular y cotejar con política contable.",
                        },
                        {
                          header: "Presentación",
                          text: "Clasificar por corrientes/no corrientes; revelar conceptos y restricciones.",
                        },
                      ],
                    },

                    {
                      type: "image",
                      src: "https://fastercapital.com/es/i-es/Amortizacion--efecto-del-AVR-en-la-asignacion-de-costos-de-activos-a-lo-largo-del-tiempo--Factores-a-considerar-al-elegir-un-metodo-de-amortizaci-n.webp",
                      alt: "Línea de tiempo de un pago anticipado y su amortización contable",
                    },

                    {
                      type: "paragraph",
                      text: "Riesgos habituales: capitalizar desembolsos sin beneficio futuro (p. ej., gastos ya devengados), omitir amortizaciones o no registrar deterioros cuando el servicio no se recibirá. Las respuestas incluyen revisión analítica de variaciones mensuales del gasto, contraste con cronogramas de amortización y pruebas de eventos posteriores (cancelaciones, devoluciones).",
                    },
                    {
                      type: "paragraph",
                      text: "Los anticipos a proveedores exigen validar que se trate de avances sobre bienes/servicios futuros, evaluar el riesgo de crédito del proveedor y confirmar saldos cuando sea material. La conciliación con órdenes de compra y recepciones es clave para asegurar que los anticipos se apliquen oportunamente o se recuperen.",
                    },
                    {
                      type: "paragraph",
                      text: "La documentación debe incluir matriz de anticipos con saldo inicial, incrementos, amortizaciones y saldo final; evidencia contractual; cálculos de amortización y conclusiones sobre su razonabilidad. El índice y marcas claras facilitan la supervisión y el reejercicio.",
                    },

                    {
                      type: "accordion",
                      header: "Riesgos y respuestas — Diferidos",
                      open: false,
                      items: [
                        {
                          header: "Diferimiento improcedente",
                          text: "Revisión de naturaleza del gasto; requerir evidencia de beneficio futuro; pruebas de corte.",
                        },
                        {
                          header: "Amortización insuficiente",
                          text: "Recalcular y comparar con política; ajustar por cambios en la vida útil o cancelaciones.",
                        },
                        {
                          header: "Falta de revelación",
                          text: "Verificar notas sobre conceptos materiales, restricciones y contingencias.",
                        },
                      ],
                    },
                  ],
                },

                /* 5.3.7 Pasivo */
                {
                  id: "1.2.3.7",
                  numbering: "5.3.7",
                  title: "Pasivo",
                  content: [
                    {
                      type: "paragraph",
                      text: "La auditoría del pasivo se centra en integridad (que no falten obligaciones), existencia, valuación (incluyendo intereses, comisiones y contingencias), presentación (corto/largo plazo) y revelación (garantías y restricciones). A diferencia de rubros de activo, aquí el riesgo dominante suele ser de omisión: pasivos no registrados que subestiman obligaciones y mejoran artificialmente indicadores.",
                    },
                    {
                      type: "paragraph",
                      text: "Las respuestas incluyen la búsqueda de pasivos no registrados (BNR): revisión de pagos posteriores al cierre, análisis de facturas recibidas después del periodo, correspondencia con proveedores, contratos y minutas de consejo. Se aplican confirmaciones a proveedores y acreedores clave, así como pruebas de corte de compras y gastos, rastreando recepciones/servicios a su reconocimiento contable.",
                    },

                    {
                      type: "accordion",
                      header: "BNR — Procedimientos esenciales",
                      open: false,
                      items: [
                        {
                          header: "Pagos posteriores",
                          text: "Rastrear desembolsos del periodo siguiente a obligaciones del periodo auditado.",
                        },
                        {
                          header: "Facturas/recepciones",
                          text: "Cruzar facturas recibidas y órdenes de compra/recepciones cercanas al cierre.",
                        },
                        {
                          header: "Confirmaciones",
                          text: "Circularizar proveedores estratégicos; conciliar diferencias y notas de crédito.",
                        },
                      ],
                    },

                    {
                      type: "image",
                      src: "https://www.auditool.org/images/images/Fotolia_187853584_S_777b.jpg",
                      alt: "Flujo de búsqueda de pasivos no registrados (BNR)",
                    },

                    {
                      type: "paragraph",
                      text: "Para provisiones y contingencias, el auditor evalúa criterios de reconocimiento y medición (probabilidad, estimación fiable) y solicita cartas de abogados para contingencias legales. También analiza garantías otorgadas, covenants financieros y restricciones que deban revelarse. En pasivos financieros, se recalculan intereses efectivos, se revisan tasas, comisiones y cumplimiento de cláusulas.",
                    },
                    {
                      type: "paragraph",
                      text: "Los impuestos por pagar, prestaciones y nómina exigen conciliaciones con declaraciones, CFDI y reportes regulatorios. En pasivos con partes relacionadas, se revisan términos de mercado y revelaciones. Para arrendamientos, se valida el pasivo por arrendamiento (descuento, plazos, opciones) y su adecuada presentación. La clasificación entre corto y largo plazo debe ser consistente con vencimientos contractuales y con eventos posteriores.",
                    },
                    {
                      type: "paragraph",
                      text: "La evidencia se documenta en papeles de trabajo: PT-PAS-01 (BNR), PT-PAS-02 (confirmaciones), PT-PAS-03 (pasivos financieros y cálculo de intereses), PT-PAS-04 (provisiones y contingencias), dejando claras conclusiones sobre integridad y valuación. Un índice robusto y referencias cruzadas con cuentas de gasto y compras respaldan la opinión final.",
                    },

                    {
                      type: "accordion",
                      header: "Riesgos y respuestas — Pasivo",
                      open: false,
                      items: [
                        {
                          header: "Omisión de obligaciones",
                          text: "Expandir BNR, confirmar proveedores clave y revisar contratos/actas internas.",
                        },
                        {
                          header: "Valuación incorrecta",
                          text: "Recalcular intereses, provisiones y diferencias de cambio; cotejar con contratos y políticas.",
                        },
                        {
                          header: "Revelación insuficiente",
                          text: "Verificar notas sobre garantías, covenants, partes relacionadas y contingencias.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "1.2.3.8",
                  numbering: "5.3.8",
                  title: "Cuentas por pagar",
                  content: [
                    {
                      type: "paragraph",
                      text: "Las cuentas por pagar representan obligaciones presentes derivadas de bienes o servicios recibidos, por lo que su auditoría se centra en la existencia, integridad, valuación, presentación y revelación. En la práctica, los procedimientos combinan confirmaciones a proveedores, la revisión de pagos posteriores al cierre, el análisis de documentos soporte y pruebas de búsqueda de pasivos no registrados. Un enfoque eficaz arranca con un mapeo del ciclo de compras-proveedores, identificando puntos de riesgo (autorizaciones de compra, recepción de mercancías, registro de facturas y programación de pagos) para alinear las pruebas con los riesgos valorados. :contentReference[oaicite:0]{index=0}",
                    },

                    {
                      type: "paragraph",
                      text: "Para corroborar integridad, el auditor aplica ‘búsqueda de pasivos’ mediante la revisión de facturas recibidas no registradas y comprobación de pagos hechos después del cierre que correspondan a obligaciones previas. En valuación, se valida el registro de descuentos, notas de crédito y diferencias cambiarias; y en presentación, la correcta clasificación entre corto y largo plazo. El uso de confirmaciones (positivas o negativas) conforme a NIA 505 ayuda a obtener evidencia externa, mientras que las pruebas sustantivas analíticas (tendencias, rotaciones y razones con inventarios) refuerzan la razonabilidad global.",
                    },
                    {
                      type: "accordion",
                      header: "Guía rápida de procedimientos",
                      open: false,
                      items: [
                        {
                          header: "Confirmaciones y pagos posteriores",
                          text: "Enviar confirmaciones a proveedores significativos; conciliar respuestas con auxiliares. Revisar pagos posteriores al cierre para detectar obligaciones no registradas y reclasificar anticipos o notas de crédito.",
                        },
                        {
                          header: "Integridad y corte",
                          text: "Cruzar bitácoras de recepción con registros contables cerca del cierre; verificar que las compras recibidas en periodo se registren oportunamente y que no existan ‘facturas en cajón’.",
                        },
                        {
                          header: "Documentación (papeles de trabajo)",
                          text: "PT-17 antigüedad de saldos; PT-18 confirmaciones; PT-19 pagos posteriores; PT-20 búsqueda de pasivos no registrados, con referencias cruzadas al legajo general.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Riesgos típicos: omitir pasivos para mejorar indicadores de liquidez, registrar proveedores ficticios o duplicar pagos por fallas de control. Salvaguardas: segregación de funciones (compras/almacén/contabilidad/tesorería), autorizaciones formales, conciliaciones periódicas, y un programa de auditoría que combine pruebas de detalle con analíticas robustas para detectar desviaciones inusuales. :contentReference[oaicite:1]{index=1}",
                    },
                    {
                      type: "accordion",
                      header: "Errores frecuentes y señales de alerta",
                      open: false,
                      items: [
                        {
                          header: "Alertas contables",
                          text: "Saldos antiguos sin movimiento; proveedores con múltiples RFC/razones sociales; notas de crédito no aplicadas; partidas conciliatorias recurrentes sin sustento.",
                        },
                        {
                          header: "Errores de presentación",
                          text: "Clasificación incorrecta de pasivos de largo plazo como corto (o viceversa); falta de revelación de garantías y cláusulas restrictivas.",
                        },
                        {
                          header: "Fraude y control",
                          text: "Pagos a cuentas personales; modificaciones manuales a auxiliares; ausencia de órdenes de compra; diferencias entre recepción física y facturación.",
                        },
                      ],
                    },
                  ],
                },

                {
                  id: "1.2.3.9",
                  numbering: "5.3.9",
                  title: "Contingencias, compromisos y eventos subsecuentes",
                  content: [
                    {
                      type: "paragraph",
                      text: "Las contingencias, compromisos y eventos subsecuentes requieren un análisis combinado de probabilidad y cuantía para decidir su registro o revelación. El auditor revisa actas de asamblea y del consejo, contratos, litigios y cartas de abogados; además indaga con la gerencia y evalúa hechos posteriores al cierre (NIA 560) que puedan afectar los estados financieros. La evidencia debe demostrar que se identificaron obligaciones potenciales (por ejemplo, juicios laborales o fiscales) y compromisos relevantes (cláusulas de compra, garantías, covenants) y que su tratamiento contable y nota de revelación resulta apropiado. :contentReference[oaicite:2]{index=2}",
                    },
                    {
                      type: "image",
                      src: "https://www.slideteam.net/wp/wp-content/uploads/2022/08/Matriz-de-gestion-de-riesgos-que-muestra-probabilidad-e-impacto-y-alto-riesgo-bajo.png",
                      alt: "Matriz de probabilidad–impacto para contingencias",
                    },
                    {
                      type: "paragraph",
                      text: "Procedimientos típicos incluyen: (i) circularización a asesores legales; (ii) lectura de minutas y contratos; (iii) pruebas de hechos posteriores (eventos que confirman condiciones existentes al cierre vs. indicativos de nuevas condiciones); (iv) evaluación del reconocimiento (si es probable y cuantificable) o la revelación (si es posible o no mensurable con fiabilidad). Para compromisos, se valida la existencia de cláusulas que impongan obligaciones futuras significativas y su adecuada revelación. Para eventos subsecuentes, se distingue entre ajustes al periodo reportado o simples revelaciones narrativas.",
                    },
                    {
                      type: "accordion",
                      header: "Marco de decisión (simplificado)",
                      open: false,
                      items: [
                        {
                          header: "Contingencias probables y mensurables",
                          text: "Registrar provisión; documentar cálculo y supuestos; revelar naturaleza y estimación. Coordinación con legales y finanzas.",
                        },
                        {
                          header: "Posibles/no mensurables",
                          text: "No se registra provisión; se revela adecuadamente el riesgo, factores de incertidumbre y rango, si aplica.",
                        },
                        {
                          header: "Eventos subsecuentes",
                          text: "Si confirman condiciones existentes al cierre → ajuste; si surgen después → revelar. Mantener evidencia del corte de información.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Riesgos: omisión de litigios relevantes, subestimación de pasivos probables y falta de revelación de compromisos. Controles sugeridos: inventario legal actualizado, canal formal de comunicación con asesoría jurídica, revisión periódica de covenants y un checklist de cierre que obligue a releer minutas y contratos críticos antes de emitir la opinión. :contentReference[oaicite:3]{index=3}",
                    },
                    {
                      type: "accordion",
                      header: "Señales de alerta y documentación",
                      open: false,
                      items: [
                        {
                          header: "Alertas",
                          text: "Aumentos inusuales en gastos legales; litigios mediáticos; contratos con penalizaciones severas; incumplimientos de covenants.",
                        },
                        {
                          header: "Papeles de trabajo",
                          text: "Resumen de contingencias por tipo y probabilidad; copia de cartas de abogados; cronología de hechos subsecuentes; extractos de minutas.",
                        },
                        {
                          header: "Revisión final",
                          text: "Cruces con NIF y notas; lectura de estados finales; verificación de coherencia entre revelaciones y pruebas.",
                        },
                      ],
                    },
                  ],
                },

                {
                  id: "1.2.3.10",
                  numbering: "5.3.10",
                  title: "Capital contable",
                  content: [
                    {
                      type: "paragraph",
                      text: "El capital contable refleja el valor residual de los activos una vez deducidos los pasivos. La auditoría se enfoca en la legitimidad y evidencia jurídica de los movimientos (constitución, aumentos, disminuciones, dividendos), su correcta valuación, presentación y revelación en notas. Procedimientos clave: revisión del acta constitutiva y sus modificaciones, libros de actas de asamblea y del consejo, pólizas contables de movimientos de capital, cálculo de dividendos y cumplimiento de restricciones legales o contractuales. :contentReference[oaicite:4]{index=4}",
                    },
                    {
                      type: "image",
                      src: "https://blog.abaccor.com/wp-content/uploads/2025/03/cuentas-del-capital1_11zon.webp",
                      alt: "Estructura del capital contable y movimientos típicos",
                    },
                    {
                      type: "paragraph",
                      text: "Los riesgos incluyen registrar cambios sin soporte legal, omitir revelaciones de restricciones a dividendos o de reservas, y errores en la clasificación de aportaciones como utilidades retenidas (o viceversa). El auditor verifica, además, que los incrementos estén suscritos y pagados conforme a estatutos, y que las disminuciones sigan formalidades (publicaciones, derechos de terceros). En entidades con socios múltiples, se coteja la conciliación de participaciones y se revisa la consistencia de conversiones, primas de emisión y revaluaciones.",
                    },
                    {
                      type: "accordion",
                      header: "Checklist de verificación",
                      open: false,
                      items: [
                        {
                          header: "Soporte legal",
                          text: "Acta constitutiva, reformas, libros de actas, poderes y estatutos vigentes; evidencia de inscripción ante autoridades.",
                        },
                        {
                          header: "Movimientos y presentación",
                          text: "Conciliar saldos con subcuentas (capital social, prima, utilidades, reservas); validar distribución de dividendos y restricciones; notas completas.",
                        },
                        {
                          header: "Papeles de trabajo",
                          text: "PT-21 acta constitutiva; PT-22 movimientos de capital; PT-23 conciliación con estados; PT-24 revisión de notas.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Buenas prácticas: mantener un legajo legal actualizado, reconciliar trimestralmente los movimientos con actas y pólizas, y enlazar cada cambio con su nota correspondiente. En auditorías de grupos, verificar transacciones entre partes relacionadas que impacten el patrimonio (aportaciones o retiros) y su revelación. Estas medidas elevan la calidad de la evidencia y reducen el riesgo de opinión modificada por insuficiente soporte. :contentReference[oaicite:5]{index=5}",
                    },
                    {
                      type: "accordion",
                      header: "Errores comunes y cómo evitarlos",
                      open: false,
                      items: [
                        {
                          header: "Errores",
                          text: "Falta de actas de respaldo; dividendos sin utilidades distribuibles; reservas legales incompletas; notas omisas.",
                        },
                        {
                          header: "Prevención",
                          text: "Revisión jurídica previa; checklist de requisitos legales; conciliaciones formales; revisión cruzada entre contabilidad y legal.",
                        },
                        {
                          header: "Revelación",
                          text: "Asegurar notas claras de restricciones, políticas de dividendos y eventos relevantes que afecten el patrimonio.",
                        },
                      ],
                    },
                  ],
                },

                {
                  id: "1.2.3.11",
                  numbering: "5.3.11",
                  title: "Formulación del legajo de auditoría",
                  content: [
                    {
                      type: "paragraph",
                      text: "El legajo de auditoría integra toda la evidencia (cédulas sumarias y analíticas, programas, pruebas, conclusiones) que respalda el dictamen. Debe exhibir trazabilidad desde los riesgos identificados (NIA 315) y las respuestas diseñadas (NIA 330), hasta los hallazgos documentados (NIA 500/501/505/560). Un legajo robusto muestra que el equipo cumplió las NIA, facilita la revisión de calidad, protege legalmente al auditor y sirve de base para auditorías futuras. :contentReference[oaicite:6]{index=6}",
                    },

                    {
                      type: "paragraph",
                      text: "La organización típica incluye: índice maestro; secciones por rubro (efectivo, cuentas por cobrar, inventarios, PPE, pasivo, ingresos, capital, etc.); cédulas de planeación (estrategia global y programa, materialidad, matriz de riesgos), de ejecución (pruebas de controles y sustantivas con marcas e índices) y de cierre (conclusiones, carta de representación, eventos subsecuentes). Las referencias cruzadas entre cédulas permiten reconstruir el razonamiento y localizar evidencia rápidamente.",
                    },
                    {
                      type: "accordion",
                      header: "Buenas prácticas de documentación",
                      open: false,
                      items: [
                        {
                          header: "Claridad y suficiencia",
                          text: "Cada cédula debe indicar objetivo, procedimiento aplicado, fuente de datos, resultados y conclusión; anexar soporte clave y capturas de confirmaciones.",
                        },
                        {
                          header: "Indexado y marcas",
                          text: "Usar índices jerárquicos (A, A-1, A-1-a); marcas (‘tick marks’) con leyenda; controlar versiones y fechas; conservar evidencia de revisión y supervisión.",
                        },
                        {
                          header: "Conservación",
                          text: "Cumplir políticas de archivo y tiempos de retención; proteger confidencialidad; cerrar el archivo definitivo dentro del plazo post-emisión establecido.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Errores recurrentes: cédulas sin conclusión, falta de soporte de partidas clave, ausencia de conexión entre riesgos y pruebas, y legajos desorganizados que dificultan la revisión. Un cierre disciplinado (checklist de emisión, revisión de notas y consistencia entre hallazgos y opinión) eleva la calidad del encargo y reduce el riesgo de deficiencias en revisiones externas o inspecciones. :contentReference[oaicite:7]{index=7}",
                    },
                    {
                      type: "accordion",
                      header: "Checklist de cierre del encargo",
                      open: false,
                      items: [
                        {
                          header: "Conexión riesgo-prueba-conclusión",
                          text: "¿Cada riesgo significativo tiene respuesta documentada y conclusión explícita?",
                        },
                        {
                          header: "Evidencia externa",
                          text: "¿Confirmaciones, actas y contratos clave están archivados y referenciados?",
                        },
                        {
                          header: "Coherencia final",
                          text: "¿Las notas y estados finales reflejan los hallazgos? ¿La carta de representación cubre los asuntos relevantes?",
                        },
                      ],
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
          href: "https://youtu.be/uaOA8PH45Ls", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Muestreo de auditoría — https://youtu.be/uaOA8PH45Ls",
            "Ejemplo: programa de auditoría — https://www.youtube.com/watch?v=nfTG3pkGIBU",
            "Estudio y evaluación del control interno — https://www.youtube.com/watch?v=7wlmKskaqO0",
            "Capítulo 1: Legajos de auditoría — https://www.youtube.com/watch?v=73YNJZbwALg",
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
            "Comité de Organizaciones Patrocinadoras de la Comisión Treadway (COSO). (2013). *Marco integrado de control interno.* COSO.",
            "Federación Internacional de Contadores (IFAC). (2021). *Norma Internacional de Auditoría 315: Identificación y valoración de los riesgos de incorrección material mediante el conocimiento de la entidad y de su entorno.* IFAC.",
            "Federación Internacional de Contadores (IFAC). (2021). *Norma Internacional de Auditoría 330: Respuestas del auditor a los riesgos valorados.* IFAC.",
            "Mantilla, S. A. (2019). *Auditoría: enfoque integral* (5.ª ed.). Ecoe Ediciones.",
            "Messier, W. F., Glover, S. M., & Prawitt, D. F. (2018). *Auditoría: un enfoque integral* (10.ª ed.). McGraw-Hill.",
            "Whittington, O. R., & Pany, K. (2019). *Principios de auditoría* (21.ª ed.). Cengage Learning.",
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
