/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LDE", // Licenciatura en Derecho
  courseId: "LDE-DFII", // Derecho Fiscal II
  id: "LDE-DFII-M3", // Módulo 3

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Derecho Fiscal II",
  title:
    "Módulo 3. Derechos ISSSTE, juicio contencioso de nulidad e incidentes",
  semestre: "Séptimo semestre",
  teacher: "Dra. Alondra Lilí Villanueva Márquez",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar las prestaciones y facultades del ISSSTE y las fases del procedimiento administrativo de pensiones; estudiar el juicio contencioso de nulidad ante el TFJA —demanda, contestación, pruebas, alegatos y sentencia— y los incidentes procesales de previo y especial pronunciamiento.",

  competencies: [
    "Distinguir prestaciones y vigencia de derechos de los derechohabientes del ISSSTE (régimen obligatorio y voluntario).",
    "Identificar facultades del ISSSTE en cobranza y pensiones, y estructurar el expediente del procedimiento de pensiones (instrucción, decisión, eficacia).",
    "Reconocer la competencia, integración y funcionamiento del Tribunal Federal de Justicia Administrativa en el juicio de nulidad.",
    "Redactar escritos base del juicio contencioso (demanda, contestación y alegatos) con sustento en LFPA y LFPCA.",
    "Valorar causales de improcedencia y sobreseimiento, así como la admisibilidad y eficacia de pruebas.",
    "Gestionar incidentes de previo y especial pronunciamiento (incompetencia, acumulación, nulidad de notificaciones, recusación, entre otros).",
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

    /* 1. Nodo / Unidad principal (agrupa Unidades 8–10) */
    {
      id: "1",
      numbering: "Unidad 1",
      title:
        "ISSSTE: vigencia de derechos; juicio contencioso de nulidad e incidentes",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad integra, con enfoque sistemático, tres ejes que todo profesional debe dominar: (i) la vigencia de los derechos de los derechohabientes del ISSSTE y el catálogo de prestaciones en sus regímenes obligatorio y voluntario; (ii) la arquitectura del juicio contencioso de nulidad ante el Tribunal Federal de Justicia Administrativa (TFJA), incluyendo causales de improcedencia y sobreseimiento; y (iii) los incidentes de previo y especial pronunciamiento que condicionan el curso del proceso. La propuesta didáctica privilegia la claridad operativa: se parte de los derechos sustantivos (prestaciones, pensiones y facultades de cobranza) y se aterriza en las vías adjetivas para su defensa (procedimiento administrativo de pensiones, impugnaciones e incidenteo). Así, el alumno articula norma, procedimiento y estrategia probatoria en escenarios reales. :contentReference[oaicite:0]{index=0}",
        },
        {
          type: "paragraph",
          text: "En materia de seguridad social, el punto de partida es la cobertura del ISSSTE: salud (atención preventiva, curativa y de maternidad, rehabilitación), riesgos de trabajo, retiro/cesantía/vejez e invalidez y vida, así como prestaciones de vivienda (crédito hipotecario y financiamiento para adquisición, construcción o mejora). Bajo el régimen voluntario, el trabajador separado puede continuar cubierto, salvando excepciones y asumiendo cuotas y aportaciones. En el ecosistema institucional destaca PENSIONISSSTE como órgano desconcentrado encargado de administrar cuentas individuales y recibir aportaciones, sujeto a regulación de la CONSAR. El estudio pragmático de estas figuras exige dominar su finalidad, sujetos, base legal y efectos, además de las potestades de vigilancia, recaudación y cobranza que el Instituto ejerce para tutelar la solvencia del sistema y la continuidad de las prestaciones. :contentReference[oaicite:1]{index=1}",
        },
        {
          type: "paragraph",
          text: "El procedimiento administrativo de pensiones se estructura en tres fases concatenadas: instrucción (recolección y verificación de elementos de hecho y de derecho), decisión (valoración de requisitos y emisión de la resolución) y eficacia (producción de efectos jurídicos: reconocimiento de derechos u obligaciones). Todo ello se rige por los principios de economía, celeridad, eficacia, legalidad, publicidad y buena fe. Comprender estas etapas no es un formalismo: optimiza tiempos, mejora la calidad del expediente y reduce riesgos de nulidad por vicios de procedimiento o motivación insuficiente. El alumno debe aprender a mapear cada actuación (solicitud, integración de pruebas, dictámenes, notificaciones) con su respaldo normativo y sus plazos, anticipando medios de defensa cuando un acto sea contrario a derecho. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "paragraph",
          text: "El juicio contencioso de nulidad ante el TFJA constituye la vía idónea para combatir resoluciones definitivas y actos administrativos que agraven al particular. La unidad desglosa su esqueleto: competencia, causales de improcedencia y sobreseimiento, y secuencia lógico-procesal (demanda, contestación, pruebas, alegatos y sentencia). Se enfatiza un principio operativo: la litis se fija con la admisión; de ahí la importancia de una demanda técnicamente sólida (hechos, conceptos de impugnación y pruebas idóneas) y de una contestación estratégica que depure excepciones. Se estudian cargas probatorias y admisibilidad de medios probatorios (con exclusiones puntuales frente a autoridades), así como los estándares temporales para alegar y dictar sentencia, con impacto directo en la tutela judicial efectiva. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "paragraph",
          text: "Finalmente, se abordan los incidentes de previo y especial pronunciamiento: incompetencia por materia, acumulación de juicios, nulidad de notificaciones, recusación por impedimento, reposición de autos e interrupción por muerte o incapacidad, entre otros. Lejos de ser “trámites accesorios”, definen competencia, validez de actos de comunicación y economía procesal. La unidad precisa plazos, oportunidad y efectos, así como las sanciones por incidentes frívolos. La destreza consiste en decidir si conviene promoverlos —por economía y corrección del cauce— o reservar la queja para agravio en sentencia. Con ese criterio, el estudiante adquiere un repertorio táctico para conducir procesos con solvencia técnica, respeto al debido proceso y firmeza estratégica. :contentReference[oaicite:4]{index=4}",
        },

        {
          type: "accordion",
          header: "Guía rápida (mapa mental en tres capas)",
          open: false,
          items: [
            {
              header: "Capa 1 — Panorama esencial",
              text: "ISSSTE: derechos (salud, riesgos, retiro, invalidez/vida, vivienda), regímenes (obligatorio/voluntario) y PENSIONISSSTE; Pensiones: fases de instrucción → decisión → eficacia; Contencioso TFJA: competencia, improcedencia/sobreseimiento, demanda → contestación → pruebas → alegatos → sentencia; Incidentes: incompetencia, acumulación, nulidad de notificaciones, recusación, reposición, interrupción. :contentReference[oaicite:5]{index=5}",
            },
            {
              header: "Capa 2 — Rutas operativas",
              text: "Ruta ISSSTE: solicitud y expediente → verificación documental → resolución → ejecución → impugnaciones (queja/reembolso, reconsideración, amparo). Ruta TFJA: presentación (tradicional o en línea) → fijación de litis → desahogo probatorio → alegatos → proyecto y resolución dentro de plazos legales. Control de plazos y formalidades para evitar nulidades. :contentReference[oaicite:6]{index=6}",
            },
            {
              header: "Capa 3 — Checklist de validez y defensa",
              text: "Acto válido: competencia, objeto determinable, finalidad pública, fundamentación y motivación, formalidades y notificación correctas. Defensa eficaz: definir pretensión, clasificar pruebas útiles, evaluar incidentes oportunos y evitar promociones frívolas sancionables. Vincular cada actuación con su soporte normativo y evidencia. :contentReference[oaicite:7]{index=7}",
            },
          ],
        },
      ],

      /* → Temas 8–10 según índice oficial */
      subthemes: [
        /* 8. Vigencia de los derechos de los derechohabientes del ISSSTE */
        {
          id: "1.8",
          numbering: "8",
          title: "Vigencia de los derechos de los derechohabientes del ISSSTE",
          content: [
            {
              type: "paragraph",
              text: "La vigencia de derechos alude al periodo durante el cual la persona trabajadora del Estado y, en su caso, sus beneficiarios legales conservan acceso efectivo a las prestaciones del Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado (ISSSTE). Este intervalo no es estático ni uniforme, pues depende del vínculo jurídico con la dependencia o entidad, de las cuotas y aportaciones enteradas, de los supuestos de conservación de derechos y de la continuidad voluntaria permitida por la legislación. Comprender este encuadre permite distinguir qué seguros y servicios están activos, cuáles condiciones deben mantenerse (por ejemplo, estar en servicio o haber cubierto periodos mínimos de cotización) y qué alternativas existen cuando cesa la relación laboral. También clarifica el tránsito entre regímenes —obligatorio y voluntario— y la tutela de derechos adquiridos o expectativas legítimas, especialmente en materia de salud, riesgos de trabajo y pensiones.",
            },
            {
              type: "paragraph",
              text: "Desde un enfoque sistemático, la vigencia articula tres planos: a) el plano prestacional (seguros y servicios); b) el plano financiero (cuotas, aportaciones y reglas de continuidad); y c) el plano procedimental (cómo se solicitan, reconocen y ejecutan las prestaciones). En el plano prestacional convergen salud, riesgos del trabajo, retiro, cesantía en edad avanzada y vejez, invalidez y vida, así como vivienda, servicios sociales y culturales. En el plano financiero se ubican los requisitos de entero oportuno y la posibilidad de continuar voluntariamente en ciertos seguros cuando termina el servicio activo. En el plano procedimental, la ley y su normativa complementaria fijan las etapas para reconocer pensiones, atender quejas médicas y procesar reembolsos, con principios de economía, celeridad, legalidad y buena fe.",
            },
            {
              type: "paragraph",
              text: "La pérdida, conservación o recuperación de vigencia no se reduce a un hito único; es un continuo en el que cuentan hechos como licencias sin goce, renuncias, separaciones o reincorporaciones. Cuando hay adeudos por préstamos, se prevén reglas específicas de cobro y, agotadas gestiones, cancelaciones contra reservas, sin afectar la garantía institucional de los servicios esenciales. En pensiones, la arquitectura institucional contempla al Fondo Nacional de Pensiones de los Trabajadores al Servicio del Estado (PENSIONISSSTE) y la supervisión de CONSAR, lo que garantiza que la administración de cuentas individuales y el reconocimiento de derechos se sometan a estándares prudenciales y de transparencia. Así, la vigencia no sólo define quién tiene derecho, sino cómo se sostienen financieramente esos derechos.",
            },
            {
              type: "paragraph",
              text: "Para las personas trabajadoras que dejan el servicio sin adquirir calidad de pensionadas, la legislación admite su continuidad voluntaria en todos o algunos seguros del régimen obligatorio —con excepciones—, asumiendo íntegramente cuotas y aportaciones conforme al régimen financiero aplicable. Este mecanismo es clave para evitar lagunas de protección, especialmente en periodos de transición laboral. De forma complementaria, la vivienda y los servicios sociales/culturales se integran como prestaciones obligatorias mediante esquemas de crédito, mejoramiento y refinanciamiento, encuadrados en reglas de elegibilidad y de recuperación. La vigencia, por tanto, se sostiene no sólo en la permanencia en el puesto, sino en la habilitación de rutas para mantener cobertura.",
            },
            {
              type: "paragraph",
              text: "Desde la perspectiva de los beneficiarios, la vigencia implica acreditación de parentesco, dependencia económica y cumplimiento de formalidades, a fin de evitar fraudes o duplicidades. La documentación exigible y los mecanismos de verificación deben equilibrar rigor y trato digno, con canales de orientación e información suficientes. En materia de salud, el estándar de continuidad es particularmente sensible: interrupciones injustificadas pueden traducirse en afectaciones graves; de ahí la relevancia de procedimientos de queja y reembolso cuando exista negativa o deficiencia en la prestación del servicio médico institucional.",
            },
            {
              type: "paragraph",
              text: "La dimensión procedimental de la vigencia cobra especial relieve en pensiones: la fase de instrucción recopila y verifica requisitos; la de decisión valora el expediente y emite resolución; la de eficacia materializa efectos, ya sea otorgando o negando la pretensión. Estas etapas deben observar principios de legalidad, publicidad y buena fe, y pueden ser revisadas a través de medios de impugnación específicos cuando la persona usuaria estime que se vulneraron sus derechos. La claridad de las fases evita retrocesos y asegura trazabilidad de cada actuación administrativa.",
            },
            {
              type: "paragraph",
              text: "Finalmente, el enfoque de derechos humanos atraviesa la noción de vigencia: toda actuación del Instituto y de las unidades de atención debe promover, respetar, proteger y garantizar derechos, bajo criterios de igualdad y no discriminación. Esto se refleja en canales de atención accesibles, lenguaje claro, acompañamiento para grupos en situación de vulnerabilidad y decisiones fundadas y motivadas. Bajo este prisma, la vigencia no es un tecnicismo contable sino una condición esencial de la seguridad social como derecho constitucional.",
            },

            {
              type: "accordion",
              header: "Mapa de referencia de la vigencia",
              open: false,
              items: [
                {
                  header: "Plan prestacional",
                  text: "Seguros (salud, RT, retiro/vejez, invalidez y vida), vivienda, servicios sociales y culturales; reglas de acceso y conservación.",
                },
                {
                  header: "Plan financiero",
                  text: "Cuotas y aportaciones; continuidad voluntaria tras la separación; efectos de adeudos y medidas de cobranza.",
                },
                {
                  header: "Plan procedimental",
                  text: "Instrucción → decisión → eficacia; quejas médicas y reembolsos; medios de impugnación en pensiones.",
                },
              ],
            },

            {
              type: "image",
              src: "https://s3.studylib.net/store/data/025415712_1-de3990a3f0b7dccc75043d35a08e800c.png",
              caption:
                "Figura 2. Régimen Obligatorio del ISSSTE (esquema de seguros y prestaciones).",
            },

            {
              type: "accordion",
              header: "Checklist práctico para conservar la vigencia",
              open: false,
              items: [
                {
                  header: "Antes de separarte del servicio",
                  text: "Revisa adeudos, opciones de continuidad voluntaria y actualiza beneficiarios.",
                },
                {
                  header: "Durante trámites",
                  text: "Conserva acuses, integra expediente y verifica plazos de respuesta.",
                },
                {
                  header: "Si hay negativa o demora",
                  text: "Activa queja médica/reembolso o medios de impugnación; pide orientación formal.",
                },
              ],
            },
          ],

          subthemes: [
            /* 8.1 */
            {
              id: "1.8.1",
              numbering: "8.1",
              title: "Prestaciones que otorga el ISSSTE",
              content: [
                {
                  type: "paragraph",
                  text: "Las prestaciones se estructuran en un régimen obligatorio y un régimen voluntario. En el obligatorio se agrupan seguros de salud —con atención preventiva, curativa, maternidad y rehabilitación—, riesgos de trabajo, retiro/cesantía en edad avanzada y vejez, así como invalidez y vida. A este núcleo se suman préstamos hipotecarios y financiamientos de vivienda para adquisición, construcción, reparación, ampliación o mejoras, además de servicios sociales y culturales. El objetivo es proteger integralmente a la persona trabajadora y a su familia, durante y después de su vida laboral, evitando interrupciones que pongan en riesgo su bienestar.",
                },
                {
                  type: "paragraph",
                  text: "La cobertura en salud incluye prevención y tratamiento oportuno, con énfasis en rehabilitación física y mental. En riesgos de trabajo se contempla atención inmediata, prestaciones en dinero y en especie y, llegado el caso, reconocimientos de incapacidad parcial o total conforme a dictámenes técnicos. En retiro/cesantía y vejez, el andamiaje financiero articula cuotas y aportaciones con cuentas individuales; mientras que invalidez y vida proveen protección a quien pierde capacidad laboral por enfermedad no profesional o a sus deudos, según hipótesis legales. Estas prestaciones se activan mediante procedimientos reglados, con requisitos probatorios y plazos definidos.",
                },
                {
                  type: "image",
                  src: "https://dgfss.wordpress.com/wp-content/uploads/2017/07/prestaciones_21_1.jpeg",
                  caption:
                    "Régimen obligatorio del ISSSTE: seguros y prestaciones nucleares.",
                },
                {
                  type: "paragraph",
                  text: "El régimen voluntario habilita continuar, al dejar el servicio, en todos o algunos de los seguros del régimen obligatorio —salvo excepciones como riesgos de trabajo—, cubriendo íntegramente cuotas y aportaciones según el régimen financiero aplicable. Las cuotas se ajustan anualmente conforme a variaciones del sueldo básico de la categoría que se tenía en el último empleo. Este esquema permite preservar continuidad en salud y pensiones, cerrando brechas de protección en transiciones laborales, lo que es especialmente útil para quienes afrontan periodos intermedios antes de alcanzar condiciones de retiro o reingreso al servicio público.",
                },
                {
                  type: "paragraph",
                  text: "La vivienda y los servicios sociales complementan la protección: los préstamos y financiamientos cubren desde adquisición de terreno/casa hasta reparación o ampliación; pueden también refinanciar pasivos. Su recuperación se sujeta a políticas y lineamientos, con mecanismos de cobranza escalonados para resguardar la sostenibilidad del fondo y, a la vez, evitar cargas desproporcionadas a las personas acreditadas. La educación, cultura y recreación institucional fomentan el bienestar integral, elemento que coadyuva a la prevención de riesgos y a la salud pública.",
                },
                {
                  type: "accordion",
                  header: "Guía de prestaciones (vista rápida)",
                  open: false,
                  items: [
                    {
                      header: "Salud",
                      text: "Prevención, curación, maternidad, rehabilitación.",
                    },
                    {
                      header: "Seguros económicos",
                      text: "Riesgos de trabajo; retiro/cesantía/vejez; invalidez y vida.",
                    },
                    {
                      header: "Vivienda y sociales",
                      text: "Hipotecarios, mejoramiento, servicios sociales y culturales.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Casos frecuentes",
                  open: false,
                  items: [
                    {
                      header: "Separación sin pensión",
                      text: "Activar continuidad voluntaria y elegir seguros a conservar.",
                    },
                    {
                      header: "Negativa de servicio médico",
                      text: "Tramitar queja médica o reembolso conforme a reglamento aplicable.",
                    },
                    {
                      header: "Transición a pensión",
                      text: "Preparar expediente con constancias de cotización, dictámenes y beneficiarios.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "En síntesis, el catálogo prestacional del ISSSTE responde a una lógica de ciclo de vida: prevención, cobertura de contingencias y sostén en la etapa pasiva. Su eficacia depende de trámites oportunos, integración probatoria completa y conocimiento de las rutas de atención, incluidas las vías de defensa cuando se presenta una negativa o una prestación deficiente.",
                },
                {
                  type: "paragraph",
                  text: "El enfoque articulado de prestaciones y continuidad voluntaria reduce la vulnerabilidad en la población trabajadora al servicio del Estado, al tiempo que permite compatibilizar la estabilidad financiera del sistema con la garantía de derechos. La participación informada de las personas derechohabientes —mediante solicitudes, aclaraciones y uso de medios de impugnación— es clave para que el catálogo se traduzca en beneficios reales.",
                },
              ],
            },

            /* 8.2 */
            {
              id: "1.8.2",
              numbering: "8.2",
              title: "Facultades del ISSSTE para cobranza",
              content: [
                {
                  type: "paragraph",
                  text: "Cuando existen adeudos —por ejemplo, créditos personales o hipotecarios— el marco legal faculta al Instituto para desplegar gestiones de recuperación escalonadas y proporcionales. Si la persona acreditada solicita licencia sin goce de sueldo, renuncia o es separada, debe cubrir en un plazo no mayor a 90 días el saldo total; de lo contrario, la dependencia retendrá, al finiquito, el saldo insoluto reconocido. De persistir remanentes, el Instituto continuará con gestiones administrativas y legales para su recuperación, privilegiando primero vías persuasivas y de regularización, y sólo en última instancia mecanismos coactivos, preservando el debido proceso y la información al usuario.",
                },
                {
                  type: "paragraph",
                  text: "Este diseño equilibra la sustentabilidad de los fondos con la protección de la persona acreditada: después de un año de la separación y agotadas las gestiones de cobranza, el adeudo de capital e intereses puede cancelarse contra la reserva de garantía de créditos otorgados, conforme a lineamientos de administración del riesgo. La medida evita que saldos incobrables distorsionen la contabilidad del sistema y permite concentrar esfuerzos en prevenir la morosidad temprana mediante educación financiera, reestructuras y calendarios ajustados a la capacidad de pago.",
                },
                {
                  type: "paragraph",
                  text: "La actuación de cobranza debe estar fundada y motivada, con notificaciones claras sobre montos, causales, plazos y recursos disponibles. En todo momento rigen principios de legalidad, transparencia y trato digno, y se habilitan canales de atención para aclaraciones, regularización o convenios. Este enfoque reduce litigiosidad y mejora la recuperación efectiva, a la par que protege el acceso continuo a prestaciones esenciales cuando procede.",
                },
                {
                  type: "image",
                  src: "https://wisphub.net/media/uploadsCKEditor/fernando%40wisphub/2022/04/01/ciclo-punto-cobranza.png",
                  caption:
                    "Esquema de ruta de cobranza y puntos de decisión (informativo).",
                },
                {
                  type: "accordion",
                  header: "Ruta operativa de cobranza",
                  open: false,
                  items: [
                    {
                      header: "Fase preventiva",
                      text: "Avisos y recordatorios; opciones de reestructura.",
                    },
                    {
                      header: "Fase ejecutiva",
                      text: "Retenciones al finiquito; gestiones administrativas; acciones legales.",
                    },
                    {
                      header: "Cierre contable",
                      text: "Cancelación contra reservas cuando procede, tras un año y gestiones agotadas.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas para acreditados",
                  open: false,
                  items: [
                    {
                      header: "Comunicación temprana",
                      text: "Si cambias de situación laboral, informa y solicita plan de pago.",
                    },
                    {
                      header: "Documentación",
                      text: "Conserva estados, convenios y acuses de recepción.",
                    },
                    {
                      header: "Defensa",
                      text: "Si detectas errores, usa aclaraciones y medios de impugnación disponibles.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "En resumen, las facultades de cobranza se despliegan con etapas, topes y salvaguardas que buscan recuperar recursos públicos sin desconocer el estándar de protección social. La clave es gestionar el riesgo de crédito con información oportuna, flexibilidad razonable y apego estricto a la normatividad.",
                },
                {
                  type: "paragraph",
                  text: "El sistema gana eficacia cuando la persona acreditada conoce sus obligaciones y alternativas de regularización; y gana legitimidad cuando el Instituto comunica con claridad y actúa con proporcionalidad y legalidad, habilitando vías de queja o impugnación cuando corresponda.",
                },
              ],
            },

            /* 8.3 */
            {
              id: "1.8.3",
              numbering: "8.3",
              title: "Facultades del ISSSTE en materia de pensiones",
              content: [
                {
                  type: "paragraph",
                  text: "En pensiones, la arquitectura institucional incorpora al Fondo Nacional de Pensiones de los Trabajadores al Servicio del Estado (PENSIONISSSTE), órgano público desconcentrado con competencia funcional para abrir, administrar y operar cuentas individuales, recibir cuotas y aportaciones, individualizarlas y generar rendimientos, con excepción de la subcuenta de vivienda. Estas funciones se ejercen bajo regulación y supervisión de la Comisión Nacional del Sistema de Ahorro para el Retiro (CONSAR), y conforme a la Ley de los Sistemas de Ahorro para el Retiro y las reglas de carácter general aplicables. Esta supervisión asegura estándares prudenciales y de transparencia.",
                },
                {
                  type: "paragraph",
                  text: "Las facultades se traducen, en lo operativo, en la administración de cuentas, el registro de aportaciones, la inversión de recursos dentro de parámetros de riesgo autorizados, la información periódica a las personas trabajadoras y el apoyo documental para el reconocimiento de pensiones. También conllevan responsabilidades administrativas de su personal, sujetas a procedimientos correspondientes, así como coordinación con otras instancias para la correcta ejecución de resoluciones pensionarias y el pago de prestaciones económicas a favor de derechohabientes o beneficiarios.",
                },
                {
                  type: "paragraph",
                  text: "El foco de legalidad recae en que la determinación de derechos y el pago de pensiones observen requisitos y etapas procedimentales, con resoluciones fundadas y motivadas. Los expedientes deben integrar pruebas suficientes —cotización, salario base, semanas o años de servicio, dictámenes— y las decisiones han de ajustarse a los parámetros legales y financieros. El respeto a principios de economía, celeridad, eficacia, publicidad y buena fe fortalece la confianza en el sistema y reduce la litigiosidad.",
                },
                {
                  type: "accordion",
                  header: "Funciones clave de PENSIONISSSTE",
                  open: false,
                  items: [
                    {
                      header: "Cuentas individuales",
                      text: "Apertura, administración, individualización de cuotas y rendimientos.",
                    },
                    {
                      header: "Inversión y reporte",
                      text: "Inversión conforme a reglas CONSAR y reportes periódicos al trabajador.",
                    },
                    {
                      header: "Soporte a pensiones",
                      text: "Integración documental y ejecución de resoluciones.",
                    },
                  ],
                },
                {
                  type: "image",
                  src: "https://www.gob.mx/cms/uploads/image/file/831734/MicrosoftTeams-image__5_.jpeg",
                  caption:
                    "Esquema de ruta de cobranza y puntos de decisión (informativo).",
                },
                {
                  type: "image",
                  src: "https://www.gob.mx/cms/uploads/image/file/831733/MicrosoftTeams-image__6_.jpeg",
                  caption:
                    "Esquema de ruta de cobranza y puntos de decisión (informativo).",
                },
                {
                  type: "image",
                  src: "https://www.gob.mx/cms/uploads/image/file/831732/MicrosoftTeams-image__7_.jpeg",
                  caption:
                    "Esquema de ruta de cobranza y puntos de decisión (informativo).",
                },
                {
                  type: "accordion",
                  header: "Principios rectores en el trámite pensionario",
                  open: false,
                  items: [
                    {
                      header: "Legalidad y motivación",
                      text: "Resoluciones con base normativa y análisis probatorio suficiente.",
                    },
                    {
                      header: "Celeridad y economía",
                      text: "Evitar dilaciones y trámites redundantes.",
                    },
                    {
                      header: "Publicidad y buena fe",
                      text: "Información clara, veraz y accesible para el usuario.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "La correcta delimitación de facultades evita invasiones competenciales y asegura que cada acto administrativo produzca efectos válidos: de la instrucción a la eficacia, la trazabilidad del expediente y la comunicación con la persona usuaria son indispensables para materializar el derecho a la pensión.",
                },
                {
                  type: "paragraph",
                  text: "Con una gestión prudente y transparente, el sistema pensionario cumple su finalidad: convertir cotizaciones a lo largo de la vida laboral en prestaciones económicas y en especie oportunas, sostenibles y respetuosas de los derechos humanos.",
                },
              ],
            },

            /* 8.4 */
            {
              id: "1.8.4",
              numbering: "8.4",
              title: "Procedimiento administrativo de pensiones",
              content: [
                {
                  type: "paragraph",
                  text: "El procedimiento administrativo de pensiones se estructura en tres fases concatenadas: instrucción, decisión y eficacia. En la instrucción se integra el expediente con la solicitud, verificación de datos y recolección de documentos; en la decisión se estudia la procedencia y se emite resolución fundada y motivada; y en la eficacia se materializan los efectos jurídicos de la resolución, ya sea otorgando la pensión, imponiendo obligaciones o determinando otras consecuencias legales. Todo ello bajo principios de economía, celeridad, eficacia, legalidad, publicidad y buena fe.",
                },
                {
                  type: "paragraph",
                  text: "Este cauce no opera en el vacío: está enmarcado por la regulación del sistema de ahorro para el retiro y la supervisión de CONSAR, lo cual impone estándares de gobernanza, reporte y gestión de riesgos a las entidades que administran cuentas y procesan pensiones. Asimismo, el personal servidor público que interviene en la tramitación queda sujeto a responsabilidades administrativas si incumple la normatividad o vulnera derechos.",
                },
                {
                  type: "paragraph",
                  text: "Una adecuada gestión del expediente —con checklists de requisitos, control de plazos y notificaciones— previene nulidades, asegura trazabilidad y facilita la defensa en caso de impugnación. La persona promovente debe recibir información clara sobre avances, requerimientos y vías de aclaración, y contar con constancias de cada actuación. Esta transparencia aumenta la confianza y reduce controversias.",
                },
                {
                  type: "image",
                  src: "https://imgv2-2-f.scribdassets.com/img/document/717439714/original/330ea26252/1?v=1",
                  caption:
                    "Fases del procedimiento: instrucción → decisión → eficacia.",
                },
                {
                  type: "accordion",
                  header: "Documentos típicos en la instrucción",
                  open: false,
                  items: [
                    {
                      header: "Identidad y vínculo laboral",
                      text: "Identificación, nombramientos, constancias de servicios y sueldo.",
                    },
                    {
                      header: "Soporte técnico",
                      text: "Dictámenes médicos o de riesgos, historial de aportaciones.",
                    },
                    {
                      header: "Beneficiarios",
                      text: "Actas y medios de prueba del parentesco/dependencia.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Claves de la decisión y la eficacia",
                  open: false,
                  items: [
                    {
                      header: "Fundamentación y motivación",
                      text: "Análisis expreso de requisitos y pruebas.",
                    },
                    {
                      header: "Notificación y ejecución",
                      text: "Plazos, medios de pago y ajustes.",
                    },
                    {
                      header: "Vías de impugnación",
                      text: "Reglamentarias y contenciosas, según el acto.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "La observancia de estos pasos reduce riesgos de retroacción y asegura que el derecho a la seguridad social se materialice con oportunidad y certeza.",
                },
                {
                  type: "paragraph",
                  text: "Cuando exista inconformidad, la persona usuaria cuenta con mecanismos internos y externos para cuestionar actos presuntamente ilegales, lo que refuerza el control de legalidad y la mejora continua del procedimiento.",
                },
              ],
              subthemes: [
                {
                  id: "1.8.4.1",
                  numbering: "8.4.1",
                  title: "Fase de instrucción",
                  content: [
                    {
                      type: "paragraph",
                      text: "Etapa de recopilación y verificación: recepción de la solicitud, cotejo de datos, recolección de documentos y evaluación de autos para conocer del asunto. Se trata de asegurar que el expediente esté completo y depurado para evitar requerimientos innecesarios y decisiones mal fundadas.",
                    },
                    {
                      type: "paragraph",
                      text: "Buenas prácticas: checklist de requisitos, calendario de plazos, registro de notificaciones y mesa de ayuda para aclaraciones. Esto facilita el control interno y la transparencia hacia la persona promovente.",
                    },
                    {
                      type: "accordion",
                      header: "Checklist sugerido",
                      open: false,
                      items: [
                        {
                          header: "Identificación/servicios",
                          text: "Credencial, nombramientos, constancias de sueldo y tiempo.",
                        },
                        {
                          header: "Aportaciones",
                          text: "Historial de cuotas, estados de cuenta, movimientos.",
                        },
                        {
                          header: "Pruebas complementarias",
                          text: "Dictámenes, estudios y documentos de beneficiarios.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Un expediente bien integrado reduce tiempos y previene nulidades por deficiencias en la instrucción.",
                    },
                    {
                      type: "accordion",
                      header: "Alertas comunes",
                      open: false,
                      items: [
                        {
                          header: "Datos inconsistentes",
                          text: "Nombres o curp distintos entre documentos.",
                        },
                        {
                          header: "Lagunas de aportación",
                          text: "Periodos sin registro que deben aclararse.",
                        },
                        {
                          header: "Dictámenes incompletos",
                          text: "Falta de firmas, fechas o anexos técnicos.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "La instrucción no busca prejuzgar, sino preparar una decisión informada, fundada y motivada, con pleno respeto de plazos y derecho de audiencia.",
                    },
                    {
                      type: "paragraph",
                      text: "Conclusión de la fase: se declara expediente integrado y se remite a la autoridad competente para su estudio y resolución.",
                    },
                  ],
                },
                {
                  id: "1.8.4.2",
                  numbering: "8.4.2",
                  title: "Fase de decisión",
                  content: [
                    {
                      type: "paragraph",
                      text: "Momento de estudio y determinación sobre los documentos presentados en la instrucción: valoración de requisitos legales, análisis del material probatorio y emisión de la resolución correspondiente. La autoridad debe exponer la fundamentación normativa y la motivación fáctica.",
                    },
                    {
                      type: "paragraph",
                      text: "La resolución debe ser clara, congruente y exhaustiva; indicar prestaciones otorgadas o negadas, bases de cálculo, fecha de inicio y, en su caso, obligaciones o medidas adicionales. Debe notificarse por los medios previstos, abriendo cauces para aclaración o impugnación.",
                    },
                    {
                      type: "accordion",
                      header: "Estructura mínima de una resolución",
                      open: false,
                      items: [
                        {
                          header: "Antecedentes",
                          text: "Hechos, trámite y competencia.",
                        },
                        {
                          header: "Considerandos",
                          text: "Fundamentos y motivación con valoración probatoria.",
                        },
                        {
                          header: "Puntos resolutivos",
                          text: "Determinaciones precisas y efectos.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "La calidad de la motivación influye en la estabilidad del acto: decisiones debidamente explicadas resisten mejor la revisión y otorgan certeza al derechohabiente.",
                    },
                    {
                      type: "accordion",
                      header: "Errores frecuentes a evitar",
                      open: false,
                      items: [
                        {
                          header: "Omisión de pruebas",
                          text: "No analizar documentos clave del expediente.",
                        },
                        {
                          header: "Indeterminación",
                          text: "No precisar montos/fechas o supeditar a actos futuros.",
                        },
                        {
                          header: "Falta de competencia",
                          text: "Emitir resolución por autoridad no facultada.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Concluida la decisión, el expediente pasa a ejecución para materializar efectos.",
                    },
                    {
                      type: "paragraph",
                      text: "En caso de inconformidad, procede activar los medios de defensa previstos en la normativa aplicable.",
                    },
                  ],
                },
                {
                  id: "1.8.4.3",
                  numbering: "8.4.3",
                  title: "Fase de eficacia",
                  content: [
                    {
                      type: "paragraph",
                      text: "Consumada la decisión, el acto produce efectos jurídicos: otorga derechos, impone obligaciones o genera otras consecuencias legales. Aquí se programan pagos, se emiten credenciales o se actualizan registros. La autoridad debe asegurar que la ejecución sea fiel a lo resuelto.",
                    },
                    {
                      type: "paragraph",
                      text: "Rigen principios de economía, celeridad, eficacia, legalidad, publicidad y buena fe, con mecanismos de seguimiento y, en su caso, de corrección. Una ejecución diligente evita controversias y protege la confianza del usuario.",
                    },
                    {
                      type: "accordion",
                      header: "Control de ejecución",
                      open: false,
                      items: [
                        {
                          header: "Plazos y pagos",
                          text: "Calendarios y medios de pago verificados.",
                        },
                        {
                          header: "Comunicación",
                          text: "Notificaciones claras sobre derechos y obligaciones.",
                        },
                        {
                          header: "Retroalimentación",
                          text: "Ventanillas para aclaraciones y ajustes.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "La eficacia no se agota en pagar: incluye mantener actualizados expedientes y sistemas, y asegurar continuidad de prestaciones.",
                    },
                    {
                      type: "accordion",
                      header: "Acciones ante contingencias",
                      open: false,
                      items: [
                        {
                          header: "Errores materiales",
                          text: "Rectificación inmediata con constancia.",
                        },
                        {
                          header: "Fallas operativas",
                          text: "Protocolos para reprogramación sin afectar al beneficiario.",
                        },
                        {
                          header: "Seguimiento",
                          text: "Reportes de cumplimiento y cierre.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "El foco final es garantizar que la persona beneficiaria reciba lo que la resolución reconoce, sin cargas indebidas ni dilaciones.",
                    },
                    {
                      type: "paragraph",
                      text: "La trazabilidad y la transparencia de la ejecución consolidan la tutela efectiva del derecho a la seguridad social.",
                    },
                  ],
                },
              ],
            },

            /* 8.5 */
            {
              id: "1.8.5",
              numbering: "8.5",
              title:
                "Medios de impugnación en contra de actos en materia de pensiones civiles con cargo al ISSSTE",
              content: [
                {
                  type: "paragraph",
                  text: "Existen vías específicas para impugnar actos presuntamente ilegales relacionados con servicios de salud y prestaciones económicas. En el ámbito médico, el Reglamento de Quejas Médicas y Solicitudes de Reembolso regula el proceso para denunciar imposibilidad, negativa o deficiencia en la prestación, así como para pedir reembolso de gastos extrainstitucionales; prevé órganos competentes para sustanciación y resolución, y habilita un Recurso de Reconsideración. En lo económico, las resoluciones pensionarias y actos conexos pueden ser cuestionados por las vías administrativas y contenciosas previstas en la legislación aplicable.",
                },
                {
                  type: "paragraph",
                  text: "Estos mecanismos se tramitan bajo los principios de legalidad, honestidad, igualdad, transparencia, no discriminación e integridad. El promovente —por sí o por representante— puede autorizar personas para oír y recibir notificaciones y realizar trámites; las actuaciones se sujetan a la Ley Federal de Procedimiento Administrativo. La impugnación efectiva tutela derechos sustantivos y fomenta la mejora continua de la gestión pública.",
                },
                {
                  type: "image",
                  src: "https://imgv2-2-f.scribdassets.com/img/document/663838131/original/bcefce3e1d/1?v=1",
                  caption:
                    "Flujo general de impugnación: queja médica/reembolso y recursos aplicables.",
                },
                {
                  type: "accordion",
                  header: "Qué impugnar y ante quién",
                  open: false,
                  items: [
                    {
                      header: "Servicio médico",
                      text: "Queja médica y solicitud de reembolso; Recurso de Reconsideración.",
                    },
                    {
                      header: "Resolución pensionaria",
                      text: "Vías administrativas y, en su caso, juicio contencioso administrativo.",
                    },
                    {
                      header: "Actos de ejecución",
                      text: "Incidentes o recursos según la naturaleza del acto.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Consejos prácticos para el promovente",
                  open: false,
                  items: [
                    {
                      header: "Prueba",
                      text: "Conserva recetas, notas, dictámenes, comprobantes y acuses.",
                    },
                    {
                      header: "Plazos",
                      text: "Identifica términos de presentación y de resolución.",
                    },
                    {
                      header: "Representación",
                      text: "Otorga facultades por escrito a quien te apoye.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "En la práctica, elegir bien la vía —reglamentaria o contenciosa— y construir un expediente sólido marca la diferencia. La fundamentación de agravios, la precisión del acto combatido y la solicitud de medidas provisionales, cuando proceda, inciden en la eficacia de la tutela.",
                },
                {
                  type: "paragraph",
                  text: "Una cultura de defensa informada y de resolución responsable fortalece el sistema de seguridad social, corrige desviaciones y consolida la confianza de las personas derechohabientes.",
                },
                {
                  type: "paragraph",
                  text: "Cierre: los medios de impugnación son parte del ecosistema de vigencia, pues aseguran que el reconocimiento de derechos no se quede en el papel, sino que se haga valer frente a decisiones o actuaciones contrarias a derecho.",
                },
              ],
            },
          ],
        },
        /* 9. Juicio contencioso de nulidad. Procedimiento contencioso */
        {
          id: "1.9",
          numbering: "9",
          title: "Juicio contencioso de nulidad. Procedimiento contencioso",
          content: [
            {
              type: "paragraph",
              text: "El juicio contencioso de nulidad es el medio procesal por el cual los particulares controvierten, ante el Tribunal Federal de Justicia Administrativa (TFJA), resoluciones definitivas y actos administrativos que consideran ilegales. Su finalidad es restituir el orden jurídico vulnerado, ya sea anulando total o parcialmente el acto impugnado o reconociendo un derecho. Se trata de un proceso regido por los principios de legalidad, exhaustividad y debido proceso, donde la autoridad debe acreditar la validez del acto y el actor demostrar la lesión concreta a su esfera jurídica. A diferencia de los recursos administrativos —que son revisiones internas—, el juicio de nulidad es un control externo, autónomo y especializado. La estructura básica comprende demanda, contestación, ofrecimiento y desahogo de pruebas, alegatos y sentencia, con posibilidad de incidentes específicos. La plataforma de Justicia en Línea permite tramitarlo digitalmente, con efectos procesales idénticos a la vía tradicional, fortaleciendo la trazabilidad y la transparencia de las actuaciones.",
            },
            {
              type: "paragraph",
              text: "El presupuesto de toda impugnación es la existencia de un acto administrativo con apariencia de validez formal y material: competencia de la autoridad emisora, objeto lícito y determinable, finalidad de interés público, fundamentación y motivación, forma escrita y firma, referencia del expediente, fecha y lugar de emisión, así como la debida notificación y la mención de medios de defensa. La Ley Federal de Procedimiento Administrativo prevé que la omisión o irregularidad en estos elementos genera nulidad o anulabilidad, según el vicio y su trascendencia. En el juicio, el tribunal analizará tanto los vicios formales (por ejemplo, falta de competencia o notificación defectuosa) como los sustantivos (incorrecta aplicación normativa, error en la determinación de contribuciones o sanciones), aplicando criterios de instrumentalidad de las formas y tutela judicial efectiva. La adecuada integración del expediente administrativo es, por ello, decisiva para sostener o derrotar la presunción de legalidad del acto.",
            },
            {
              type: "image",
              src: "https://i.ytimg.com/vi/IEkzuhjtbnM/maxresdefault.jpg",
              alt: "Esquema del procedimiento contencioso de nulidad ante el TFJA",
              caption:
                "Ruta procesal: demanda → admisión/emplazamiento → contestación (y, en su caso, ampliación) → pruebas → alegatos → sentencia.",
            },
            {
              type: "paragraph",
              text: "La instancia se insta mediante demanda presentada ante Sala Regional competente, en vía tradicional o en línea. Elegida la vía, no puede variarse. El escrito debe contener identificación del acto impugnado, autoridad emisora, conceptos de impugnación, pruebas y puntos petitorios. Admitida la demanda, se emplaza a la autoridad para que conteste en el plazo legal; si omite hacerlo oportunamente o no rebate hechos puntuales, éstos pueden tenerse por ciertos, salvo desvirtuación con otras pruebas o hechos notorios. El proceso se rige por reglas de impulso oficioso y economía procesal; la Sala debe cuidar la regularidad del procedimiento y la garantía de audiencia. La posibilidad de ampliación de demanda ante actos conexos o nuevos fundamentos permite delimitar adecuadamente la litis sin sacrificar la defensa del actor.",
            },
            {
              type: "paragraph",
              text: "En materia probatoria rige el principio de libertad de prueba: se admiten todos los medios idóneos —documental, pericial, testimonial, inspección— con excepciones específicas (p. ej., confesión de autoridades por posiciones). La carga probatoria se distribuye: el actor acredita los hechos constitutivos de su pretensión y la violación a su derecho; la autoridad sostiene la legalidad y suficiencia del acto. Concluida la instrucción, las partes formulan alegatos, que no pueden ampliar la litis, y la Sala dicta sentencia por unanimidad o mayoría dentro del plazo legal. La resolución puede declarar la nulidad (lisa y llana o para efectos), reconocer derechos, o sobreseer por causas procesales, observando congruencia y exhaustividad. La ejecución de la sentencia se sujeta a los términos fijados, con vigilancia de la propia jurisdicción.",
            },
            {
              type: "paragraph",
              text: "Es crucial distinguir sobreseimiento e improcedencia. El sobreseimiento pone fin al proceso sin resolver el fondo por causas sobrevenidas o procesales (p. ej., satisfacción de la pretensión o desaparición de materia). La improcedencia opera ex ante, cuando el juicio no es la vía adecuada (falta de interés jurídico, consentimiento del acto, cosa juzgada, existencia de medio de defensa obligatorio, entre otras). La estrategia procesal debe valorar incidentes de previo y especial pronunciamiento, acumulación, nulidad de notificaciones e impedimentos, así como la conveniencia de acudir a juicio en línea para optimizar tiempos y trazabilidad. Una gestión probatoria temprana, un planteamiento claro de conceptos de impugnación y el cuidado de formalidades pueden ser determinantes para obtener una sentencia favorable.",
            },
            {
              type: "accordion",
              header: "Guía rápida del juicio de nulidad (tres capas)",
              open: false,
              items: [
                {
                  header: "Capa 1 — Arquitectura básica",
                  text: "Partes: actor ↔ autoridad. Órgano: TFJA (Sala Regional/Superior). Etapas: demanda → contestación → pruebas → alegatos → sentencia. Vías: tradicional o Justicia en Línea. Efectos: nulidad lisa y llana / para efectos / reconocimiento de derecho.",
                },
                {
                  header: "Capa 2 — Validez del acto impugnado",
                  text: "Competencia; objeto lícito y determinable; finalidad pública; fundamentación y motivación; forma escrita y firma; referencia de expediente; notificación válida; indicación de medios de defensa. Vicios formales y de fondo inciden en la nulidad.",
                },
                {
                  header: "Capa 3 — Riesgos y buenas prácticas",
                  text: "Delimitar la litis y conceptos de impugnación; cuidar plazos; ofrecer pruebas pertinentes y oportunas; documentar notificaciones; monitorear incidentes; prever ejecución de sentencia. Considerar criterios de economía procesal y tutela efectiva.",
                },
              ],
            },
          ],
          subthemes: [
            /* 9.1 Quién es el Tribunal Fiscal */
            {
              id: "1.9.1",
              numbering: "9.1",
              title: "Quién es el Tribunal Fiscal",
              content: [
                {
                  type: "paragraph",
                  text: "El Tribunal Federal de Justicia Fiscal y Administrativa (hoy TFJA) es el órgano jurisdiccional especializado en lo contencioso administrativo, dotado de plena autonomía para dictar sus fallos y con organización y atribuciones establecidas en su ley orgánica. Su razón de ser es controlar la legalidad de actos y resoluciones administrativas federales, especialmente en materia fiscal y de seguridad social, brindando a los gobernados una vía técnica e imparcial para impugnar determinaciones que afecten su esfera jurídica. La autonomía decisoria y la especialización de sus magistradas y magistrados aseguran consistencia interpretativa y tutela efectiva de la legalidad administrativa, factores indispensables para la confianza en el sistema tributario y regulatorio federal. :contentReference[oaicite:0]{index=0}",
                },
                {
                  type: "paragraph",
                  text: "Estructuralmente, el Tribunal se integra por una Sala Superior, Salas Regionales —que pueden ser especializadas o auxiliares— y una Junta de Gobierno y Administración encargada de funciones administrativas. Esta arquitectura permite distribuir la carga de trabajo, acercar la justicia administrativa a las regiones y desarrollar criterios por materia. La Sala Superior fija directrices y unifica criterios; las Salas Regionales conocen, en principio, de los asuntos según competencia territorial o especialidad, propiciando uniformidad y celeridad en la resolución de controversias contra actos de autoridades fiscales y de otros entes federales. La organización responde al mandato de eficacia y acceso a la justicia administrativa. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "image",
                  src: "https://i0.wp.com/aitfa.org/wp-content/uploads/mx-sede.jpg?resize=480%2C320&ssl=1",
                  alt: "Integración del Tribunal Federal de Justicia Fiscal y Administrativa (Sala Superior, Salas Regionales, Junta de Gobierno y Administración).",
                  caption:
                    "Figura: Integración orgánica del Tribunal. Fuente: elaboración propia con base en la Ley Orgánica del TFJFA.",
                },
                {
                  type: "paragraph",
                  text: "Funcionalmente, el Tribunal conoce de juicios que cuestionan resoluciones definitivas y actos administrativos que determinen obligaciones fiscales, impongan multas, nieguen devoluciones u ocasionen agravio fiscal; también de asuntos relativos a prestaciones de seguridad social para miembros de Fuerzas Armadas y derechohabientes, así como otros supuestos que su ley prevé. Este espectro competencial permite revisar tanto la legalidad formal (competencia, fundamentación y motivación, procedimiento) como la material (adecuación normativa y proporcionalidad) de los actos impugnados, garantizando un control integral de la actuación administrativa. :contentReference[oaicite:2]{index=2}",
                },
                {
                  type: "paragraph",
                  text: "La naturaleza contenciosa exige contradicción procesal entre actor y autoridad, con oportunidad de alegar y probar. El Tribunal opera bajo principios de economía y celeridad sin sacrificar garantías, y ha incorporado herramientas tecnológicas —como el Sistema de Justicia en Línea— para facilitar la promoción y seguimiento de procesos, reduciendo costos de transacción y ensanchando el acceso a la justicia, especialmente en materias técnicas como la tributaria. Esta combinación de especialidad, autonomía y digitalización robustecen la tutela judicial efectiva en el ámbito administrativo federal. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "accordion",
                  header: "Mapa rápido — ¿Qué es y cómo se integra?",
                  open: false,
                  items: [
                    {
                      header: "Naturaleza",
                      text: "Órgano jurisdiccional contencioso administrativo, autónomo para dictar fallos y especializado en legalidad de actos federales.",
                    },
                    {
                      header: "Estructura",
                      text: "Sala Superior, Salas Regionales (ordinarias, especializadas o auxiliares) y Junta de Gobierno y Administración. :contentReference[oaicite:4]{index=4}",
                    },
                    {
                      header: "Función clave",
                      text: "Control de legalidad de resoluciones definitivas, actos y procedimientos administrativos con impacto fiscal/administrativo.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Claves prácticas",
                  open: false,
                  items: [
                    {
                      header: "Competencia material",
                      text: "Revisar si el acto encaja en los supuestos legales (p. ej., determinación de crédito, multas, negativa de devolución).",
                    },
                    {
                      header: "Competencia orgánica",
                      text: "Identificar la Sala Regional/Superior aplicable (territorio, materia, especialización).",
                    },
                    {
                      header: "Estrategia procesal",
                      text: "Articular conceptos de impugnación sobre legalidad formal y material; valorar la vía en línea. :contentReference[oaicite:5]{index=5}",
                    },
                  ],
                },
              ],
            },

            /* 9.2 Su competencia */
            {
              id: "1.9.2",
              numbering: "9.2",
              title: "Su competencia",
              content: [
                {
                  type: "paragraph",
                  text: "La competencia del Tribunal se determina por materia, territorio y cuantía/supuestos legales. Conoce de juicios contra resoluciones definitivas de autoridades fiscales u organismos fiscales autónomos que establezcan obligaciones, fijen cantidades líquidas o sienten bases para su liquidación; contra negativas de devoluciones; contra multas por infracciones administrativas federales; y, en general, contra actos que causen agravio en materia fiscal. Asimismo, conoce de actos vinculados a prestaciones y obligaciones en materia de seguridad social de ciertos colectivos, y de otros casos previstos en la ley, lo que perfila una jurisdicción amplia para el control de la legalidad administrativa con impacto económico. :contentReference[oaicite:6]{index=6}",
                },
                {
                  type: "paragraph",
                  text: "El diseño competencial persigue evitar denegación de justicia por tecnicismos y propicia que controversias complejas —como determinaciones de créditos fiscales o negativas de devolución— se ventilen ante un órgano especializado capaz de ponderar pruebas contables, tributarias y regulatorias. La ley también prevé supuestos especiales (p. ej., controversias sobre pensiones militares) en los que la sentencia puede ceñirse a cuantías o bases de cálculo, respetando competencias sustantivas de la administración militar y circunscribiendo el control jurisdiccional a la arista económica o prestacional impugnada. :contentReference[oaicite:7]{index=7}",
                },
                {
                  type: "paragraph",
                  text: "Orgánicamente, la competencia interna se distribuye entre la Sala Superior y las Salas Regionales. Estas últimas atienden, en principio, los asuntos de su circunscripción y especialidad; la Sala Superior resuelve asuntos de mayor trascendencia, conflictos de criterios y recursos previstos en la ley orgánica. La posibilidad de Salas especializadas o auxiliares atiende picos de demanda y complejidad técnica (p. ej., comercio exterior o propiedad intelectual administrativa), asegurando respuesta oportuna y especializada. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "paragraph",
                  text: "La competencia también se ancla en estándares de legalidad del acto administrativo: órgano competente, objeto lícito y determinado, finalidad pública, forma escrita y firma, fundamentación y motivación, sujeción al procedimiento y ausencia de vicios como error, dolo o violencia. La infracción de estos elementos puede acarrear nulidad o anulabilidad, lo que habilita la intervención del Tribunal para corregir desviaciones y restituir derechos. En la práctica, los conceptos de impugnación suelen articular vicios formales y sustantivos de manera acumulativa. :contentReference[oaicite:9]{index=9}",
                },
                {
                  type: "paragraph",
                  text: "En cuanto a la vía procedimental, el sistema admite juicio tradicional y juicio en línea. El justiciable elige al presentar demanda; la autoridad demandada, cuando funge como parte actora, debe promover en línea. Este esquema híbrido impacta plazos, notificaciones y cargas procesales, y exige al litigante planificar su estrategia de información y prueba digital (por ejemplo, sellos de tiempo, constancias electrónicas y acuses). La elección informada de la vía puede optimizar costos y tiempos sin mermar el debido proceso. :contentReference[oaicite:10]{index=10}",
                },
                {
                  type: "accordion",
                  header: "Checklist de competencia",
                  open: false,
                  items: [
                    {
                      header: "Materia",
                      text: "¿Es resolución definitiva/acto en materia fiscal/administrativa federal con agravio? :contentReference[oaicite:11]{index=11}",
                    },
                    {
                      header: "Territorio",
                      text: "¿Corresponde a la circunscripción de la Sala Regional?",
                    },
                    {
                      header: "Supuesto especial",
                      text: "¿Prestaciones/obligaciones de seguridad social militar u otros supuestos de ley?",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Errores comunes al plantear competencia",
                  open: false,
                  items: [
                    {
                      header: "Vía inadecuada",
                      text: "Confundir recursos administrativos obligatorios/optativos con el juicio contencioso.",
                    },
                    {
                      header: "Actor impropio",
                      text: "Demandar actos no definitivos o no impugnables.",
                    },
                    {
                      header: "Plazo",
                      text: "Desatender caducidades/consentimiento tácito. :contentReference[oaicite:12]{index=12}",
                    },
                  ],
                },
              ],
            },

            /* 9.3 Causales de sobreseimiento */
            {
              id: "1.9.3",
              numbering: "9.3",
              title: "Causales de sobreseimiento",
              content: [
                {
                  type: "paragraph",
                  text: "El sobreseimiento extingue el proceso sin pronunciamiento de fondo cuando sobreviene una causa que lo vuelve innecesario o jurídicamente imposible. Procede, entre otros supuestos, por desistimiento expreso del actor; por aparición o sobreveniencia de una causal de improcedencia; por muerte del actor si su pretensión es intransmisible o queda sin materia; cuando la autoridad deja sin efectos el acto impugnado satisfaciendo la pretensión; o cuando, por disposición legal, hay impedimento para decidir el fondo. Puede ser total o parcial, según alcance del obstáculo procesal. Estas hipótesis protegen economía procesal y evitan sentencias inocuas, preservando recursos jurisdiccionales para litigios con materia subsistente. :contentReference[oaicite:13]{index=13}",
                },
                {
                  type: "paragraph",
                  text: "Desde una perspectiva estratégica, el actor debe valorar si conviene el desistimiento (p. ej., tras la satisfacción administrativa de su pretensión) y documentar el alcance de la conformidad para evitar controversias futuras. La autoridad, por su parte, al dejar sin efectos el acto, debe hacerlo de manera íntegra y verificable; de lo contrario, el juicio podría continuar respecto de extremos no colmados. El juzgador analiza si la causa es real, actual y suficiente, y si subsiste algún capítulo de la litis que requiera decisión, en cuyo caso el sobreseimiento parcial salvaguarda la parte aún controvertida. :contentReference[oaicite:14]{index=14}",
                },
                {
                  type: "paragraph",
                  text: "Procesalmente, el incidente de sobreseimiento suele decidirse con base en constancias objetivas (acuerdos de autoridad, copias certificadas, notificaciones, constancias de defunción, etc.). La carga de alegar y probar la causa corresponde a quien la hace valer; sin embargo, tratándose de satisfacción de la pretensión, la autoridad deberá exhibir los actos que acrediten la restitución o el otorgamiento pleno. La resolución que sobresee debe motivar la actualización de la causal y precisar los efectos, incluida la condena en costas si procede por temeridad o mala fe. :contentReference[oaicite:15]{index=15}",
                },
                {
                  type: "paragraph",
                  text: "En materia fiscal, son frecuentes sobreseimientos por autocorrección administrativa (p. ej., emisión de resolución sustitutiva favorable) o por pérdida de objeto (caducidad de facultades de la autoridad o modificación normativa que torna inútil el pronunciamiento). No obstante, el cambio de criterio administrativo sin anular formalmente el acto no basta para sobreseer; debe existir acto expreso que deje sin efectos el impugnado. La precisión en la redacción del acuerdo de autoridad es determinante para evitar litigios residuales. :contentReference[oaicite:16]{index=16}",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, el sobreseimiento no prejuzga el fondo salvo que derive de consentimiento tácito del acto por inactividad del actor; en ese evento, la firmeza impide reabrir la controversia. Por ello, la oportunidad en la promoción y el seguimiento procesal son esenciales para preservar la posibilidad de una sentencia de mérito. La parte debe monitorear plazos, notificaciones y subsistencia de la materia para no incurrir en actos u omisiones que desemboquen en un archivo prematuro del juicio. :contentReference[oaicite:17]{index=17}",
                },
                {
                  type: "accordion",
                  header: "Cuándo sobreseer (guía práctica)",
                  open: false,
                  items: [
                    {
                      header: "Sin materia",
                      text: "Acto deja de existir o se satisface la pretensión.",
                    },
                    {
                      header: "Causa legal",
                      text: "Aparece causal de improcedencia superveniente.",
                    },
                    {
                      header: "Intransmisibilidad",
                      text: "Fallece actor y la acción no se transmite. :contentReference[oaicite:18]{index=18}",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Documentos clave para acreditar la causal",
                  open: false,
                  items: [
                    {
                      header: "Acto de autoridad",
                      text: "Resolución que deja sin efectos o satisface pretensión.",
                    },
                    {
                      header: "Constancias",
                      text: "Notificaciones, certificaciones, constancia de defunción, etc.",
                    },
                    {
                      header: "Manifestación de parte",
                      text: "Escrito de desistimiento con firma y personalidad acreditada.",
                    },
                  ],
                },
              ],
            },

            /* 9.4 Causales de improcedencia */
            {
              id: "1.9.4",
              numbering: "9.4",
              title: "Causales de improcedencia",
              content: [
                {
                  type: "paragraph",
                  text: "La improcedencia impide entrar al estudio de fondo por inexistencia de presupuesto procesal o por veda legal. Entre las causales más relevantes: inexistencia de afectación al interés jurídico del actor (salvo legitimación legal expresa); incompetencia del Tribunal por materia/instancia; cosa juzgada cuando exista sentencia previa con identidad de partes y acto; consentimiento del acto (al no impugnarse en plazo o agotarse indebidamente la vía previa); litispendencia (pendencia de recurso o juicio sobre el mismo acto); y cuando el acto sea impugnable por medio de recurso obligatorio. Estas causales preservan la coherencia del sistema de medios de defensa y la seguridad jurídica, evitando duplicidad de procedimientos y sentencias contradictorias. :contentReference[oaicite:19]{index=19}",
                },
                {
                  type: "paragraph",
                  text: "El consentimiento —expreso o tácito— merece atención: hay consentimiento tácito cuando el actor omite promover medio de defensa en el plazo legal, consolidando la firmeza del acto. No hay consentimiento cuando la nueva resolución deriva o es consecuencia de otra expresamente impugnada (efecto reflejo), supuesto en el que puede cuestionarse el acto consecuencial. La adecuada identificación de la resolución definitiva y del término aplicable es crítica para impedir que la pretensión se frustre por extemporaneidad. :contentReference[oaicite:20]{index=20}",
                },
                {
                  type: "paragraph",
                  text: "La improcedencia por falta de interés jurídico exige verificar la titularidad y afectación concreta del derecho: no basta un agravio hipotético o difuso. En materia fiscal, el interés se ancla en la imposición de cargas tributarias o negación de devoluciones; en seguridad social, en la afectación de prestaciones. La demanda debe articular con claridad el nexo entre el acto y la lesión directa a la esfera jurídica del promovente, acompañando pruebas idóneas para superar un eventual desechamiento in limine. :contentReference[oaicite:21]{index=21}",
                },
                {
                  type: "paragraph",
                  text: "Cuando existe recurso administrativo obligatorio u optativo, la estrategia debe considerar sus efectos: si es obligatorio, su omisión genera improcedencia; si es optativo, la elección entre recurso o juicio es excluyente, de suerte que interponer ambos puede acarrear desechamiento por litispendencia o duplicidad. La adecuada lectura del régimen sectorial (p. ej., fiscal, comercio exterior, pensiones) es condición para seleccionar la vía más eficaz y oportuna. :contentReference[oaicite:22]{index=22}",
                },
                {
                  type: "paragraph",
                  text: "Procesalmente, la autoridad suele oponer improcedencias en la contestación; el Tribunal puede analizarlas de oficio. Si se actualizan, dicta acuerdo de desechamiento o sentencia que declara improcedente, sin abordar el fondo. Por ello, una debida preparación —identificación del acto definitivo, plazo, legitimación y vía— es el primer filtro de éxito. La claridad en la narrativa fáctica y en los conceptos de impugnación coadyuva a rebatir alegatos de improcedencia y a encauzar la litis hacia el examen sustantivo. :contentReference[oaicite:23]{index=23}",
                },
                {
                  type: "accordion",
                  header: "Radar de improcedencias frecuentes",
                  open: false,
                  items: [
                    {
                      header: "Plazo vencido",
                      text: "Consentimiento tácito del acto por presentación extemporánea. :contentReference[oaicite:24]{index=24}",
                    },
                    {
                      header: "Vía indebida",
                      text: "Existencia de recurso administrativo obligatorio no agotado.",
                    },
                    {
                      header: "Falta de interés",
                      text: "Agravio hipotético o no individualizado.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Cómo blindar la demanda",
                  open: false,
                  items: [
                    {
                      header: "Acto definitivo",
                      text: "Precisarlo y anexar notificación/constancias pertinentes.",
                    },
                    {
                      header: "Legitimación",
                      text: "Acreditar personalidad y afectación directa.",
                    },
                    {
                      header: "Plazo y vía",
                      text: "Calcular términos y optar por la vía idónea (tradicional o en línea).",
                    },
                  ],
                },
              ],
            },
            /* → Subtemas 9.5 a 9.9 (TFJA: juicio contencioso de nulidad) */
            {
              id: "1.9.5",
              numbering: "9.5",
              title: "Demanda",
              content: [
                {
                  type: "paragraph",
                  text: "La demanda inaugura formalmente la instancia contenciosa y fija los contornos de la litis. En el juicio contencioso administrativo federal puede promoverse en dos vías: tradicional (por escrito ante la Sala Regional competente) o en línea mediante el Sistema de Justicia en Línea (SJL). La elección de vía corresponde al actor al momento de presentar la demanda; si no la manifiesta, se entiende que opta por la vía tradicional. Cuando la autoridad actúa como demandante, la presentación es forzosamente en línea. Este diseño pretende garantizar acceso, trazabilidad y eficiencia, a la par que preserva requisitos clásicos de procedencia y oportunidad. :contentReference[oaicite:0]{index=0}",
                },
                {
                  type: "paragraph",
                  text: "Una demanda técnica debe cumplir con la identificación del acto impugnado, autoridad emisora, fecha de notificación y conceptos de impugnación fundados en agravios concretos. Asimismo, debe ofertar pruebas y señalar domicilio o medios para oír notificaciones, con especial cuidado si se elige el SJL (firma electrónica avanzada, buzón y sellos de tiempo). La claridad en los hechos y en la pretensión (nulidad lisa y llana, nulidad para efectos, reconocimiento de derecho) delimita la actividad probatoria subsiguiente y evita futuras causas de improcedencia o sobreseimiento.",
                },

                {
                  type: "accordion",
                  header: "Checklist de admisibilidad (vista práctica)",
                  open: false,
                  items: [
                    {
                      header: "Elementos indispensables",
                      text: "Identificación del acto y su notificación; autoridad emisora; hechos y agravios; prestaciones; pruebas ofrecidas; firma autógrafa o e.firma; elección de vía (tradicional/SJL); datos de notificación.",
                    },
                    {
                      header: "Riesgos frecuentes",
                      text: "Indeterminación del acto; falta de oportunidad; ausencia de interés jurídico; deficiencia en agravios; omisión de constancias de notificación o domicilio electrónico.",
                    },
                    {
                      header: "Estrategia",
                      text: "Vincular agravios con violaciones formales sustanciales y de fondo; anticipar prueba pericial/documental; plantear medida cautelar si procede.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La teoría del caso en materia fiscal/administrativa debe armonizar violaciones formales (competencia, fundamentación y motivación, notificación, plazos) con transgresiones sustantivas (interpretación normativa, indebida valoración probatoria, desviación de poder). En la plataforma digital, la narrativa fáctica se fortalece con metadatos y sellos; en la vía tradicional, con constancias originales y cotejos.",
                },

                {
                  type: "accordion",
                  header: "Plantilla mínima de estructura",
                  open: false,
                  items: [
                    {
                      header: "Encabezado",
                      text: "Órgano competente; datos del actor; tercero interesado (si lo hay); autoridad demandada; elección de vía.",
                    },
                    {
                      header: "Prestaciones y hechos",
                      text: "Pretensiones precisas; relato cronológico; identificación de cada actuación y evidencia.",
                    },
                    {
                      header: "Agravios y pruebas",
                      text: "Agravios por capítulos (formales/fondo); oferta probatoria con individualización y finalidad; puntos petitorios.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Elegida la vía, no podrá variarse. Esta regla disciplina la tramitación y evita nulidades por indefensión. La admisión abre traslado a la contraparte y activa el calendario procesal (contestación, pruebas, alegatos, sentencia). Una demanda sólida prevé incidentes, posibles causas de improcedencia y prueba idónea para demostrar la ilegalidad del acto. :contentReference[oaicite:1]{index=1}",
                },
              ],
            },

            {
              id: "1.9.6",
              numbering: "9.6",
              title: "Contestación",
              content: [
                {
                  type: "paragraph",
                  text: "Admitida la demanda, se corre traslado al demandado para que conteste dentro de los treinta días siguientes a aquel en que surta efectos el emplazamiento; la ampliación de demanda, si se admite, se contesta en diez días. La falta de contestación o la omisión de pronunciarse sobre hechos específicos puede acarrear su presunción de veracidad, salvo desvirtuación por prueba o hecho notorio. Este régimen incentiva la exhaustividad defensiva y la puntualidad en la narrativa fáctica y jurídica del demandado. :contentReference[oaicite:2]{index=2}",
                },
                {
                  type: "paragraph",
                  text: "La contestación debe abarcar: (i) excepciones procesales (improcedencia, falta de interés, extemporaneidad) y de fondo; (ii) refutación puntual de cada hecho; (iii) justificación normativa y teleológica del acto; y (iv) ofrecimiento de pruebas idóneas. Una defensa eficaz vincula las constancias administrativas a los elementos/ requisitos del acto (competencia, objeto, finalidad, fundamentación, motivación, formalidades) para sostener su validez.",
                },

                {
                  type: "accordion",
                  header: "Mapa de riesgos para la autoridad",
                  open: false,
                  items: [
                    {
                      header: "Silencio o ambigüedad",
                      text: "Omitir negar hechos concretos; contestación genérica; carecer de documental administrativa íntegra.",
                    },
                    {
                      header: "Caducidades/ plazos",
                      text: "Perder términos para contestar ampliación; desorden en acuse de notificaciones electrónicas.",
                    },
                    {
                      header: "Carga argumentativa",
                      text: "No articular la finalidad pública del acto ni su proporcionalidad/razonabilidad.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Para el particular que contesta (p. ej. tercero interesado), la estrategia suele concentrarse en sostener la validez del acto favorable (si lo hubiere) o en fortalecer elementos de hecho y de derecho que demuestren ausencia de agravio. En ambos casos, la trazabilidad documental (sellos, oficios, CFDI, acuses) es decisiva ante el estándar de prueba predominante en lo contencioso administrativo.",
                },

                {
                  type: "accordion",
                  header: "Guía de redacción de excepciones",
                  open: false,
                  items: [
                    {
                      header: "Procesales",
                      text: "Incompetencia; consentimiento tácito; cosa juzgada; litispendencia; falta de interés jurídico; improcedencia legal.",
                    },
                    {
                      header: "De fondo",
                      text: "Adecuada fundamentación/motivación; hecho generador acreditado; proporcionalidad de la sanción; inexistencia de violación procedimental sustancial.",
                    },
                    {
                      header: "Soporte probatorio",
                      text: "Individualizar documento, fecha, folio y finalidad probatoria; correlacionar prueba con hecho negado.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Una contestación bien construida anticipa la etapa probatoria, sugiere puntos de pericia (contable, valuatoria, técnica) y prepara alegatos. La disciplina de plazos en vía tradicional y electrónica exige sistemas de control de términos para no incurrir en preclusión. :contentReference[oaicite:3]{index=3}",
                },
              ],
            },

            {
              id: "1.9.7",
              numbering: "9.7",
              title: "Pruebas",
              content: [
                {
                  type: "paragraph",
                  text: "En el juicio ante el TFJA son admisibles toda clase de pruebas, con excepciones: no procede la confesional de autoridades por absolución de posiciones, ni la petición de informes salvo sobre hechos documentados en su poder. Predominan la documental pública/privada, pericial y testimonial, según el caso. La carga de la prueba se distribuye: el actor acredita hechos constitutivos de su derecho y la violación; el demandado, sus excepciones. :contentReference[oaicite:4]{index=4}",
                },
                {
                  type: "paragraph",
                  text: "La estrategia probatoria debe ser fina: individualizar cada medio, su finalidad y el hecho a demostrar; encadenar documentos administrativos (órdenes, actas, notificaciones) con requisitos del acto; y, cuando proceda, robustecer con periciales (contables, actuariales, informáticas) y testimoniales para aspectos fácticos específicos. El estándar de valoración exige coherencia, autenticidad y pertinencia, más que voluminosidad.",
                },

                {
                  type: "accordion",
                  header: "Buenas prácticas probatorias",
                  open: false,
                  items: [
                    {
                      header: "Trazabilidad",
                      text: "Sellos de tiempo/acuse en SJL; cadena de custodia de expedientes; cotejos y certificaciones.",
                    },
                    {
                      header: "Pertinencia y utilidad",
                      text: "Evitar prueba redundante; concentrarse en violaciones sustantivas y formales sustanciales.",
                    },
                    {
                      header: "Periciales",
                      text: "Plantear puntos claros, metodologías verificables y competencia técnica del perito.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La oportunidad en el ofrecimiento y la preparación logística (designación de peritos, recursos técnicos para desahogo remoto cuando proceda) son críticas. La omisión de acompañar documentos esenciales puede ser irreparable. Por el contrario, la producción de evidencia contextual (políticas internas, manuales, bitácoras) suele inclinar la valoración hacia la racionalidad del actuar administrativo o su nulidad.",
                },

                {
                  type: "accordion",
                  header: "Errores a evitar",
                  open: false,
                  items: [
                    {
                      header: "Formalismo vacío",
                      text: "Ofrecer ‘por ofrecer’ sin conectar prueba-hecho-agravio.",
                    },
                    {
                      header: "Desorden documental",
                      text: "Folios ilegibles, falta de índice, ausencia de cotejo/certificación.",
                    },
                    {
                      header: "Pericial débil",
                      text: "Conclusiones dogmáticas sin método ni soporte empírico.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "En síntesis, la prueba eficaz es selectiva, trazable y funcional a la teoría del caso. La Sala valorará integralmente, ponderando legalidad, finalidad pública y debido proceso. :contentReference[oaicite:5]{index=5}",
                },
              ],
            },

            {
              id: "1.9.8",
              numbering: "9.8",
              title: "Alegatos",
              content: [
                {
                  type: "paragraph",
                  text: "Concluida la instrucción o sin cuestión pendiente, el Magistrado Instructor notifica a las partes que cuentan con cinco días para formular alegatos por escrito. Su función no es introducir nueva litis, sino sintetizar lo bien probado, articular la teoría del caso con las constancias y maximizar la inteligibilidad del expediente para la decisión colegiada. Los alegatos oportunos deben ser considerados al dictar sentencia. :contentReference[oaicite:6]{index=6}",
                },
                {
                  type: "paragraph",
                  text: "Un alegato persuasivo reordena el material probatorio con criterios de relevancia, rescata precedentes útiles y remarca violaciones sustanciales (o su inexistencia). En asuntos electrónicos, conviene anexar índice hipervinculado a piezas clave y citas a sellos de tiempo; en vía tradicional, un índice con referencias de fojas y anexos facilita la revisión colegiada.",
                },

                {
                  type: "accordion",
                  header: "Estructura sugerida del alegato",
                  open: false,
                  items: [
                    {
                      header: "Resumen ejecutivo",
                      text: "Pretensión, norma aplicable, núcleo de agravios y prueba decisiva.",
                    },
                    {
                      header: "Desarrollo",
                      text: "Vinculación prueba-hecho-norma; control de legalidad/convencionalidad; proporcionalidad.",
                    },
                    {
                      header: "Cierre",
                      text: "Petitorio preciso (nulidad lisa y llana/para efectos; reconocimiento de derecho; condena accesoria).",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Los alegatos son espacio idóneo para responder implícitamente a líneas argumentales de la contraparte, ordenar contradicciones y depurar la narrativa. Deben evitar retórica excesiva y concentrarse en la utilidad decisoria del material probatorio y normativo.",
                },

                {
                  type: "accordion",
                  header: "Checklist de calidad",
                  open: false,
                  items: [
                    {
                      header: "Coherencia",
                      text: "Consistencia entre hechos, prueba y pretensión.",
                    },
                    {
                      header: "Brevedad sustantiva",
                      text: "Síntesis sin perder densidad jurídica; citar normas/criterios con precisión.",
                    },
                    {
                      header: "Orientación al fallo",
                      text: "Proponer ruta de decisión y efectos concretos de la sentencia.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "En suma, el alegato traduce el expediente a un guion de decisión; su eficacia depende de claridad, rigor y foco en lo indispensable. :contentReference[oaicite:7]{index=7}",
                },
              ],
            },

            {
              id: "1.9.9",
              numbering: "9.9",
              title: "Sentencia",
              content: [
                {
                  type: "paragraph",
                  text: "El órgano colegiado debe emitir sentencia dentro de los 45 días siguientes al cierre de instrucción; el Magistrado Instructor formula el proyecto en 30 días. El fallo puede ser por unanimidad o mayoría. Para el supuesto de sobreseimiento (p. ej., por causas del art. 9 LFPC), no se requiere cierre de instrucción. Estos plazos sostienen la celeridad y la seguridad jurídica del proceso. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "paragraph",
                  text: "La sentencia controla la legalidad del acto impugnado (y, en su caso, su razonabilidad/proporcionalidad), decide sobre la nulidad lisa y llana o para efectos, reconoce derechos o valida la actuación administrativa. Debe resolver todos los puntos planteados, identificar el órgano emisor, exponer fundamentación y motivación, y determinar con precisión los efectos del fallo (p. ej., reposición del procedimiento, emisión de nueva resolución, devolución/compensación).",
                },

                {
                  type: "accordion",
                  header: "Tipos de efectos prácticos",
                  open: false,
                  items: [
                    {
                      header: "Nulidad lisa y llana",
                      text: "Invalida completamente el acto con restitución plena.",
                    },
                    {
                      header: "Nulidad para efectos",
                      text: "Reponer etapas viciadas o emitir nueva resolución conforme a lineamientos.",
                    },
                    {
                      header: "Reconocimiento de derecho",
                      text: "Ordena a la autoridad materializar una situación jurídica individualizada.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "El razonamiento debe atender las violaciones formales sustanciales (competencia, notificación, audiencia, motivación) y las de fondo (adecuación normativa, hechos, proporcionalidad), con arreglo a los principios de economía, eficacia, legalidad, publicidad y buena fe que rigen el procedimiento administrativo.",
                },

                {
                  type: "accordion",
                  header: "Guía para lectura rápida del fallo",
                  open: false,
                  items: [
                    {
                      header: "Identificadores",
                      text: "Sala, fecha, integración, votación, expediente.",
                    },
                    {
                      header: "Litis y considerandos",
                      text: "Problemas jurídicos resueltos, pruebas clave, interpretación normativa.",
                    },
                    {
                      header: "Efectos",
                      text: "Qué debe hacer la autoridad; plazos; medidas de cumplimiento.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Una sentencia clara disminuye litigiosidad ulterior, orienta a la administración y fortalece la confianza en el contencioso administrativo. Su ejecución o cumplimiento cierra el ciclo de tutela judicial efectiva. :contentReference[oaicite:9]{index=9}",
                },
              ],
            },
          ],
        },

        /* 10. Incidentes dentro del procedimiento contencioso de nulidad */
        {
          id: "1.10",
          numbering: "10",
          title: "Incidentes dentro del procedimiento contencioso de nulidad",
          content: [
            {
              type: "paragraph",
              text: "En el juicio contencioso administrativo, los incidentes son cuestiones accesorias que, sin decidir el fondo de la litis, condicionan la regularidad y continuidad del proceso. Operan como válvulas de corrección para preservar el debido proceso y la tutela judicial efectiva, al permitir que la Sala resuelva de manera prioritaria problemas de competencia, integración y comunicación procesal, o hechos sobrevenidos que impedirían continuar válidamente con la causa. La Ley Federal de Procedimiento Contencioso Administrativo (LFPCAdm) cataloga ciertos incidentes como de previo y especial pronunciamiento, lo que significa que deben resolverse antes de seguir con la instrucción, pues su definición impacta la existencia misma del proceso o la validez de sus actuaciones. Esta categorización asegura que las actuaciones posteriores no queden viciadas por errores insubsanables (v. gr., la actuación de una Sala sin competencia material) y que las partes no sufran indefensión. Además, el régimen incidental fija plazos breves y reglas estrictas de oportunidad para evitar tácticas dilatorias, e incluso contempla sanciones económicas cuando la promoción es frívola o manifiestamente improcedente. En suma, los incidentes materializan un equilibrio entre celeridad y legalidad: por un lado, impiden que vicios procesales contaminen la sentencia; por el otro, evitan que su invocación se convierta en instrumento de obstaculización, estableciendo requisitos formales, cargas argumentativas y límites temporales precisos para su admisión y resolución por el órgano jurisdiccional competente.",
            },
            {
              type: "paragraph",
              text: "El artículo 29 de la LFPCAdm enumera los incidentes de previo y especial pronunciamiento: (I) incompetencia por materia; (II) acumulación de juicios; (III) nulidad de notificaciones; (IV) recusación por causa de impedimento; (V) reposición de autos, e (VI) interrupción por causa de muerte, disolución, declaratoria de ausencia o incapacidad. El denominador común es su aptitud para afectar la regularidad del procedimiento o la imparcialidad del juzgador, así como para impedir la audiencia efectiva de las partes si no se corrigen a tiempo. Ante su planteamiento, la Sala debe suspender el curso ordinario de la causa en lo conducente, sustanciar el incidente con vista a la contraparte y resolver mediante acuerdo o sentencia interlocutoria en el plazo legal. La decisión incidental puede traer como consecuencia la remisión del expediente a otra Sala (de prosperar la incompetencia), la reunión de procesos conexos (si procede la acumulación), la reposición de actuaciones a partir de la notificación viciada, la separación del magistrado impedido o del perito recusado, la reconstrucción del expediente o, incluso, la suspensión del procedimiento mientras se acredita y subsana la causa de interrupción. Esta lógica asegura que la sentencia definitiva descanse en un itinerario procesal válido y transparente, reforzando la confianza en el control jurisdiccional de la actividad administrativa.",
            },

            {
              type: "accordion",
              header: "Catálogo y efectos inmediatos (mapa de decisión)",
              open: false,
              items: [
                {
                  header: "Incompetencia por materia",
                  text: "Si prospera, la Sala remite a la competente; la Sala que conoce no puede declararse incompetente de oficio en esta vía; sólo la autoridad demandada o el tercero pueden hacerlo valer.",
                },
                {
                  header: "Acumulación de juicios",
                  text: "Procede cuando hay identidad o íntima conexión; sólo entre expedientes tramitados en la misma vía (tradicional o en línea); busca evitar sentencias contradictorias.",
                },
                {
                  header: "Nulidad de notificaciones / Reposición de autos",
                  text: "La declaratoria anula la notificación viciada y ordena reponer actuaciones para restituir defensas y plazos; la reposición opera desde el acto afectado.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "La incompetencia por materia es un valladar estructural: si la Sala no es competente, todo lo actuado es inútil. Sin embargo, en el proceso contencioso administrativo federal su planteamiento está limitado: únicamente la parte demandada o el tercero pueden promover el incidente; la Sala que conoce no puede declararse incompetente ni remitir el asunto a otra por iniciativa propia en esta vía. Esta regla, prevista para blindar la predictibilidad del sistema, obliga a la autoridad y al tercero a vigilar oportunamente la materia litigiosa y a expresar con claridad el título competencial del órgano llamado a conocer. En la sustanciación, la Sala corre traslado, recibe pruebas documentales y, en su caso, informes, y resuelve mediante acuerdo. Si el incidente es fundado, remite el expediente a la Sala que corresponda; si es infundado, continúa la instrucción en la misma. Esta mecánica evita itinerancias indebidas y protege el principio de juez natural. Desde la perspectiva estratégica, el actor debe anticipar el posible planteamiento de incompetencia y, en su demanda, robustecer la identificación de la materia para reducir incentivos a incidentar. La autoridad, por su parte, debe valorar con prontitud si la pretensión cae fuera del radio de competencia de la Sala, pues la extemporaneidad cierra la puerta a discutir esa cuestión. En un entorno de Justicia en Línea, este examen se facilita por la trazabilidad del asunto y la identificación digital de las Salas y materias.",
            },
            {
              type: "paragraph",
              text: "La acumulación de juicios busca coherencia y economía procesal. Procede cuando entre dos o más procesos existe identidad de partes, de acto impugnado o, al menos, conexión estrecha que haga conveniente resolverlos conjuntamente para evitar sentencias contradictorias o duplicidad de actividad jurisdiccional. Un límite clave es la vía: sólo se acumulan expedientes tramitados en la misma (tradicional con tradicional; en línea con en línea), lo que preserva la homogeneidad tecnológica y procedimental. El plazo para promoverla, tratándose de ciertas hipótesis, es de diez días contados a partir de que surta efectos la notificación del auto que tuvo por presentada la contestación de la demanda o, en su caso, de la ampliación. Si se declara procedente, la Sala define el expediente que funge como principal y ordena incorporar los demás; si no, la causa sigue separada. La utilidad práctica es múltiple: evita resoluciones incompatibles, permite una visión integral de la controversia y reduce cargas probatorias repetitivas. Tácticamente, conviene que el actor evalúe la acumulación cuando impugna actos seriados o cuando coexisten juicios espejo iniciados por coactores con idénticos fundamentos. Para la autoridad, puede ser funcional a fin de concentrar la defensa y disminuir el riesgo de criterios dispares.",
            },

            {
              type: "accordion",
              header:
                "Plazos, oportunidades y sanciones (hoja de ruta práctica)",
              open: false,
              items: [
                {
                  header: "Plazos breves",
                  text: "Acumulación y recusación (fraccs. II y IV): 10 días desde la notificación del auto que tuvo por presentada la contestación; nulidad de notificaciones y recusación de perito: 3 días desde que se conoce el hecho o designación.",
                },
                {
                  header: "Multa por frivolidad",
                  text: "Si el incidente es frívolo o improcedente, procede multa de 10 a 50 veces el salario mínimo general diario vigente en el área geográfica correspondiente.",
                },
                {
                  header: "Efectos procesales",
                  text: "La promoción o resolución puede suspender actuaciones, reponer etapas o separar a personas funcionarias/peritos; todo para restaurar la regularidad procesal sin afectar indebidamente la celeridad.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "La nulidad de notificaciones y la reposición de autos restauran el derecho de audiencia cuando los vicios comunicacionales privan a una parte de conocer, defenderse u ofrecer pruebas en tiempo. La nulidad acarrea deshacer la notificación defectuosa y repetir actos desde el punto contaminado, fijando nuevamente plazos legales. Por su parte, la recusación por causa de impedimento es garantía de imparcialidad: si prospera, separa al magistrado impedido (o al perito recusado), evitando sospechas de parcialidad. La oportunidad es estricta: la nulidad de notificaciones y la recusación de perito deben interponerse dentro de los tres días siguientes a que se conoció el hecho o a la designación, respectivamente; la recusación por impedimento y la acumulación, dentro de diez días desde la contestación. La carga argumentativa exige precisión: identificar acto, fecha, agravio, prueba y norma aplicable. En entorno electrónico, resulta clave conservar acuses, sellos de tiempo y constancias del Buzón o del Sistema de Justicia en Línea para acreditar la secuencia temporal. Finalmente, la multa por incidentes frívolos disuade su uso táctico; por ello, el promovente debe ponderar proporcionalidad y utilidad antes de incidentar, ya que la sanción impacta la economía del litigio y puede erosionar la credibilidad de su posición procesal ante la Sala.",
            },
            {
              type: "paragraph",
              text: "La interrupción por muerte, disolución, declaratoria de ausencia o incapacidad detiene el curso del proceso para preservar el derecho de defensa de quien sufre la contingencia personal o institucional. Su lógica es elemental: nadie debe quedar indefenso por un hecho insuperable que impida continuar la instancia. Promovida y declarada la interrupción, la Sala ordena las medidas necesarias para reconstituir la legitimación procesal (designación de representante, declaratoria de heredero, nombramiento de liquidador, etc.) y, una vez satisfechos los requisitos, reanuda la causa en el estado en que se encontraba. La práctica enseña que la coordinación con juzgados civiles o de lo familiar, notarías o autoridades corporativas resulta vital para agilizar la documentación habilitante (actas, poderes, oficios). La Sala, respetando el principio de economía, evita duplicidades y preserva las pruebas ya rendidas cuando ello no cause indefensión. Para las entidades públicas demandadas, la interrupción rara vez opera por muerte, pero sí por reorganizaciones o modificaciones orgánicas; allí, la línea de defensa debe acreditar continuidad institucional para descartar nulidades por indefensión. La correcta gestión de este incidente evita reposiciones innecesarias y asegura que la sentencia se emita con partes legítimas y debidamente representadas.",
            },
            {
              type: "paragraph",
              text: "Desde la perspectiva estratégica, conviene construir una matriz de decisión para incidentar sólo cuando el beneficio procesal supera el costo temporal y reputacional. Priorice: (a) incidentes que impactan jurisdicción (incompetencia) o coherencia decisional (acumulación); (b) incidentes que restituyen defensas esenciales (nulidad de notificaciones) y (c) aquellos que aseguran imparcialidad (recusación). Antes de promover, verifique oportunidad (plazos de 3 o 10 días), idoneidad probatoria (documental auténtica; constancias electrónicas), y relacione causal y efecto que se busca (remisión, reposición, separación, suspensión). Evite la promoción múltiple y seriada sin sustento, pues la LFPCAdm prevé multas por frivolidad. Documente cada paso con sellos de tiempo y acuses; en Justicia en Línea, descargue constancias del sistema. Finalmente, conecte el régimen incidental con otras categorías procesales: el sobreseimiento procede por causas sobrevenidas (p. ej., satisfacción de la pretensión) y la improcedencia por vicios ex ante (falta de interés jurídico, consentimiento del acto, cosa juzgada, medio obligatorio), de modo que incidentar no sustituye la debida construcción de la demanda, contestación y conceptos de impugnación. Una política de litigio responsable —centrada en legalidad y economía— incrementa la probabilidad de una sentencia de fondo congruente y exhaustiva.",
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
          href: "https://www.youtube.com/watch?v=3vp8SL5cpLI", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Jiménez, N. (2024). ¿Cuál es la diferencia entre conservación de derechos y vigencia de derechos? [Video]. https://www.youtube.com/watch?v=3vp8SL5cpLI",
            "Martínez, V. (2023). Acceso de los familiares Derechohabientes a las prestaciones de Seguros Sociales. Su inconstitucionalidad e inconvencionalidad. Revista Internacional y Comparada de Relaciones Laborales y Derecho del Empleo, 11(2). https://ejcls.adapt.it/index.php/rlde_adapt/article/view/1274",
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
            "Ley del Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado (2024). H. Cámara de Diputados, LXVI Legislatura.",
            "Ley Federal de Procedimiento Administrativo (2018). H. Cámara de Diputados, LXVI Legislatura.",
            "Ley Federal de Procedimiento Contencioso Administrativo (2024). H. Cámara de Diputados, LXVI Legislatura.",
            "Ley Orgánica del Tribunal Federal de Justicia Fiscal y Administrativa (2011). H. Cámara de Diputados, LXVI Legislatura.",
            "Diario Oficial de la Federación (2017, 28 de abril). Reglamento de Quejas Médicas y Solicitudes de Reembolso del ISSSTE.",
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
