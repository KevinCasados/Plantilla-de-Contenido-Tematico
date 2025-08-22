/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LD",
  courseId: "DCV",
  id: "DCV-M3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Derecho Civil V",
  title:
    "Módulo 3. Contratos de garantía, contratos aleatorios, contratación electrónica y decadencia del contrato",
  semestre: "Quinto",
  teacher: "Ma. de Lourdes Suárez Hernández",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Comprender los conceptos fundamentales de los contratos de garantía (fianza, hipoteca y prenda); analizar los contratos aleatorios (juego y apuesta, renta vitalicia y compra de esperanza); reconocer la estructura y particularidades de la contratación electrónica; y valorar la vigencia y los límites de la fuerza obligatoria del contrato en el contexto actual.",

  competencies: [
    "Distingue la naturaleza, caracteres y efectos de la fianza, su accesoriedad y modalidades; así como sus supuestos de extinción.",
    "Identifica en la hipoteca sus características, bienes susceptibles, publicidad/registro, formas de constitución, tipos y transmisión/extinción.",
    "Explica la prenda: definición, bienes objeto, características y elementos, derechos y obligaciones de las partes, y su transmisión, duración y extinción.",
    "Analiza los contratos aleatorios: juego y apuesta, renta vitalicia y compra de esperanza, precisando su riesgo y efectos.",
    "Reconoce elementos, forma y eficacia jurídica de la contratación electrónica y sus diferencias frente a la contratación tradicional.",
    "Valora la fuerza obligatoria del contrato y discute la noción de ‘decadencia’ del contrato a la luz de la práctica contemporánea.",
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

    /* 1. Nodo / Unidad principal (índice resumido) */
    {
      id: "1",
      numbering: "Unidad 1",
      title:
        "Garantías, contratos aleatorios, contratación electrónica y decadencia del contrato",
      content: [
        {
          type: "paragraph",
          text: "Este bloque integra, en una sola mirada, cuatro ejes que ordenan gran parte de la práctica civil contemporánea: los contratos de garantía (fianza, hipoteca y prenda), los contratos aleatorios (juego y apuesta, renta vitalicia y compra de esperanza), la contratación electrónica y la vigencia de la fuerza obligatoria del contrato. En los tres primeros ejes examinaremos la función económica y la técnica jurídica que hace posible asignar riesgos, asegurar pagos y admitir el azar como elemento estructural de la obligación. En el cuarto, contrastaremos la dogmática clásica con los desafíos que imponen la tecnología, la estandarización por adhesión y los nuevos contextos de consumo. El propósito es doble: entender la teoría con precisión y traducirla en decisiones documentales sólidas —qué cláusulas importan, qué pruebas necesito, qué límites operan—. Con este encuadre, cada subtema permitirá reconocer elementos, sujetos, objeto, forma y efectos, así como su régimen de extinción, para después aplicar criterios de validez, oponibilidad y responsabilidad frente a terceros. :contentReference[oaicite:1]{index=1}",
        },
        {
          type: "paragraph",
          text: "Las garantías operan como “andamiaje de confianza”: si la obligación principal falla, se activa una cobertura que prioriza el pago al acreedor. La fianza despliega una responsabilidad personal accesoria; su régimen distingue efectos entre partes, entre cofiadores, modalidades y causas de extinción. La hipoteca, garantía real por excelencia, recae normalmente sobre inmuebles, exige forma solemne, publicidad registral y permite al acreedor satisfacerse con el valor del bien en caso de incumplimiento; su dogmática incluye bienes hipotecables, tipos y reglas de transmisión o extinción. La prenda se erige sobre muebles, con o sin desplazamiento, y perfila derechos y cargas del acreedor pignoraticio y del deudor respecto de conservación, restitución y preferencia de pago. El hilo común es la accesoriedad y la lógica de cobertura: lo accesorio sigue a lo principal, con formalidades y límites que garantizan seguridad del tráfico y asignación transparente de riesgos. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "paragraph",
          text: "En los contratos aleatorios, el “alea” es constitutiva: el equilibrio de prestaciones depende, en todo o en parte, de un acontecimiento incierto. Juego y apuesta ilustran asignación de riesgos sobre un resultado; la renta vitalicia transforma un capital presente en pagos periódicos condicionados a la duración de la vida; la compra de esperanza admite que el comprador asuma el riesgo de inexistencia o escasez de frutos futuros, pagando un precio cierto por una expectativa. La técnica civil no legitima el azar sin controles: exige objeto lícito, consentimiento válido y límites a la lesión o al abuso. El estudio del módulo propone distinguir con rigor fuente de incertidumbre, alea asumida, régimen probatorio y remedios. Con esa brújula, podremos redactar, evaluar o impugnar contratos aleatorios con criterios de proporcionalidad, información suficiente y trazabilidad, evitando confusiones con contratos conmutativos que, aunque expuestos a contingencias, no hacen del riesgo su columna vertebral. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "accordion",
          header: "Mapa del módulo: de la teoría a la práctica",
          open: false,
          items: [
            {
              header: "Garantías (fianza, hipoteca, prenda)",
              text: "Accesoriedad, forma, publicidad y preferencia de pago para proteger al acreedor sin desnaturalizar la obligación principal.",
            },
            {
              header: "Aleatorios (juego, renta vitalicia, esperanza)",
              text: "Riesgo como elemento esencial; licitud del objeto y salvaguardas contra la lesión.",
            },
            {
              header: "Digital y fuerza obligatoria",
              text: "Contratación electrónica por adhesión y examen de la vigencia del pacta sunt servanda en entornos tecnológicos.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "La contratación electrónica representa un cambio de medio y de forma, no de esencia: el acuerdo se plasma en soportes digitales, con firmas electrónicas y reglas de atribución, integridad y conservación de mensajes de datos. Predomina el contrato de adhesión con condiciones predispuestas, lo que exige reforzar el control de información, la prueba de consentimiento y la protección del consumidor. La comparación con la contratación tradicional visibiliza continuidades (capacidad, objeto, causa, ausencia de vicios) y nuevas capas (validación tecnológica, trazabilidad, ciberseguridad). A nivel operativo, conviene alinear avisos de privacidad, políticas de cancelación y mecanismos de reclamación con la arquitectura probatoria del negocio, asegurando equivalencia funcional entre soporte papel y electrónico. El módulo invita a pensar la forma como garantía de eficacia y prueba, no como obstáculo, y a diseñar contratos digitales que resistan auditoría jurídica y técnica. :contentReference[oaicite:4]{index=4}",
        },
        {
          type: "paragraph",
          text: "Finalmente, la discusión sobre la “decadencia” del contrato exige matiz: el principio de fuerza obligatoria permanece, pero convive con límites contemporáneos —buena fe objetiva, función social, protección de consumidores, equilibrio informativo— y con contextos tecnológicos que reconfiguran cómo se forma, prueba y ejecuta el acuerdo. No se trata de un eclipse del contrato, sino de su adaptación: el derecho mantiene la exigibilidad del vínculo y actualiza remedios para gestionar asimetrías y riesgos sistémicos. Así, el operador jurídico no renuncia a la dogmática clásica; la complementa con herramientas de compliance, documentación robusta y diseño de remedios proporcionales. El objetivo pedagógico es que el estudiante argumente con seguridad cuándo exigir el cumplimiento, cuándo modularlo y cómo documentar decisiones que harán la diferencia en sede judicial o arbitral, tanto en papel como en entornos digitales. :contentReference[oaicite:5]{index=5}",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        /* 1.1 Contratos de garantía (resumido) */
        {
          id: "1.1",
          numbering: "1.1",
          title: "Contratos de garantía",
          content: [
            {
              type: "paragraph",
              text: "Este bloque integra, en una sola mirada, cuatro ejes que ordenan gran parte de la práctica civil contemporánea: los contratos de garantía (fianza, hipoteca y prenda), los contratos aleatorios (juego y apuesta, renta vitalicia y compra de esperanza), la contratación electrónica y la vigencia de la fuerza obligatoria del contrato. En los tres primeros ejes examinaremos la función económica y la técnica jurídica que hace posible asignar riesgos, asegurar pagos y admitir el azar como elemento estructural de la obligación. En el cuarto, contrastaremos la dogmática clásica con los desafíos que imponen la tecnología, la estandarización por adhesión y los nuevos contextos de consumo. El propósito es doble: entender la teoría con precisión y traducirla en decisiones documentales sólidas —qué cláusulas importan, qué pruebas necesito, qué límites operan—. Con este encuadre, cada subtema permitirá reconocer elementos, sujetos, objeto, forma y efectos, así como su régimen de extinción, para después aplicar criterios de validez, oponibilidad y responsabilidad frente a terceros. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "Las garantías operan como “andamiaje de confianza”: si la obligación principal falla, se activa una cobertura que prioriza el pago al acreedor. La fianza despliega una responsabilidad personal accesoria; su régimen distingue efectos entre partes, entre cofiadores, modalidades y causas de extinción. La hipoteca, garantía real por excelencia, recae normalmente sobre inmuebles, exige forma solemne, publicidad registral y permite al acreedor satisfacerse con el valor del bien en caso de incumplimiento; su dogmática incluye bienes hipotecables, tipos y reglas de transmisión o extinción. La prenda se erige sobre muebles, con o sin desplazamiento, y perfila derechos y cargas del acreedor pignoraticio y del deudor respecto de conservación, restitución y preferencia de pago. El hilo común es la accesoriedad y la lógica de cobertura: lo accesorio sigue a lo principal, con formalidades y límites que garantizan seguridad del tráfico y asignación transparente de riesgos. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "paragraph",
              text: "En los contratos aleatorios, el “alea” es constitutiva: el equilibrio de prestaciones depende, en todo o en parte, de un acontecimiento incierto. Juego y apuesta ilustran asignación de riesgos sobre un resultado; la renta vitalicia transforma un capital presente en pagos periódicos condicionados a la duración de la vida; la compra de esperanza admite que el comprador asuma el riesgo de inexistencia o escasez de frutos futuros, pagando un precio cierto por una expectativa. La técnica civil no legitima el azar sin controles: exige objeto lícito, consentimiento válido y límites a la lesión o al abuso. El estudio del módulo propone distinguir con rigor fuente de incertidumbre, alea asumida, régimen probatorio y remedios. Con esa brújula, podremos redactar, evaluar o impugnar contratos aleatorios con criterios de proporcionalidad, información suficiente y trazabilidad, evitando confusiones con contratos conmutativos que, aunque expuestos a contingencias, no hacen del riesgo su columna vertebral. :contentReference[oaicite:3]{index=3}",
            },
            {
              type: "accordion",
              header: "Mapa del módulo: de la teoría a la práctica",
              open: false,
              items: [
                {
                  header: "Garantías (fianza, hipoteca, prenda)",
                  text: "Accesoriedad, forma, publicidad y preferencia de pago para proteger al acreedor sin desnaturalizar la obligación principal.",
                },
                {
                  header: "Aleatorios (juego, renta vitalicia, esperanza)",
                  text: "Riesgo como elemento esencial; licitud del objeto y salvaguardas contra la lesión.",
                },
                {
                  header: "Digital y fuerza obligatoria",
                  text: "Contratación electrónica por adhesión y examen de la vigencia del pacta sunt servanda en entornos tecnológicos.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "La contratación electrónica representa un cambio de medio y de forma, no de esencia: el acuerdo se plasma en soportes digitales, con firmas electrónicas y reglas de atribución, integridad y conservación de mensajes de datos. Predomina el contrato de adhesión con condiciones predispuestas, lo que exige reforzar el control de información, la prueba de consentimiento y la protección del consumidor. La comparación con la contratación tradicional visibiliza continuidades (capacidad, objeto, causa, ausencia de vicios) y nuevas capas (validación tecnológica, trazabilidad, ciberseguridad). A nivel operativo, conviene alinear avisos de privacidad, políticas de cancelación y mecanismos de reclamación con la arquitectura probatoria del negocio, asegurando equivalencia funcional entre soporte papel y electrónico. El módulo invita a pensar la forma como garantía de eficacia y prueba, no como obstáculo, y a diseñar contratos digitales que resistan auditoría jurídica y técnica. :contentReference[oaicite:4]{index=4}",
            },
            {
              type: "paragraph",
              text: "Finalmente, la discusión sobre la “decadencia” del contrato exige matiz: el principio de fuerza obligatoria permanece, pero convive con límites contemporáneos —buena fe objetiva, función social, protección de consumidores, equilibrio informativo— y con contextos tecnológicos que reconfiguran cómo se forma, prueba y ejecuta el acuerdo. No se trata de un eclipse del contrato, sino de su adaptación: el derecho mantiene la exigibilidad del vínculo y actualiza remedios para gestionar asimetrías y riesgos sistémicos. Así, el operador jurídico no renuncia a la dogmática clásica; la complementa con herramientas de compliance, documentación robusta y diseño de remedios proporcionales. El objetivo pedagógico es que el estudiante argumente con seguridad cuándo exigir el cumplimiento, cuándo modularlo y cómo documentar decisiones que harán la diferencia en sede judicial o arbitral, tanto en papel como en entornos digitales. :contentReference[oaicite:5]{index=5}",
            },
          ],
          subthemes: [
            /* → Subtemas 1.1.1 a 1.1.3 */
            {
              id: "1.1.1",
              numbering: "1.1.1",
              title:
                "Fianza (características, accesoriedad, efectos, modalidades y extinción)",
              content: [
                {
                  type: "paragraph",
                  text: "La fianza es una garantía **personal** por la cual un tercero (fiador) se compromete frente al acreedor a cumplir la obligación del deudor principal si éste incumple. Su función económica es inequívoca: crear un **andamiaje de confianza** para viabilizar crédito y contratación, trasladando un riesgo de incumplimiento a un garante solvente. El material base subraya que se trata de un negocio **accesorio** —«lo accesorio sigue a lo principal»— y que, en la práctica mexicana contemporánea, la fianza suele emitirse mediante **pólizas** de instituciones afianzadoras. Esta nota de accesoriedad condiciona su nacimiento, alcance y extinción: sin obligación principal válida no hay fianza; si aquélla se modifica o extingue, la garantía se adecua o desaparece correlativamente. Por ello, el operador jurídico debe documentar con precisión el crédito afianzado, los límites de cobertura, los supuestos de reclamación y el **reembolso** del fiador frente al deudor. :contentReference[oaicite:0]{index=0}",
                },
                {
                  type: "paragraph",
                  text: "Estructuralmente, la fianza articula tres vínculos: (i) acreedor–deudor (obligación principal); (ii) acreedor–fiador (garantía de pago); y (iii) fiador–deudor (relación interna de **indemnización** en caso de pago por el garante). El texto destaca efectos entre **partes**: pagada la deuda por el fiador, nace su derecho a ser **indemnizado** por el deudor por el total desembolsado, intereses legales, gastos y daños; efectos frente al **acreedor**: éste puede **dirigirse** contra el fiador para exigir el cumplimiento, incluso sin agotar primero al deudor; y efectos entre **cofiadores**: quien paga puede repetir proporcionalmente contra los demás. Para evitar litigiosidad, conviene pactar beneficios, límites y **procedimientos de reclamación** que regulen tiempos, documentos y causas de oposición. Esta ingeniería contractual reduce asimetrías y hace **predecible** la ejecución de la garantía. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "Modalidades. El material distingue la **fianza convencional** (nace de la voluntad de las partes), la **legal** (impuesta por la ley para asegurar ciertos actos) y la **judicial** (ligada a medidas procesales como libertad provisional, cauciones o reparación del daño). A la práctica se suman fianzas de **obra y proveeduría**, **aduanales**, de **arrendamiento**, **permisos** y **fidelidad**, entre otras. Cada modalidad conlleva **riesgos** y **documentación** específica: en obra, cronogramas y pruebas de calidad; en arrendamiento, actas de entrega y estados del inmueble; en aduanal, cumplimiento de obligaciones fiscales y regulatorias. Elegir la modalidad adecuada implica alinear el **objeto garantizado**, los **eventos de siniestro** y los **mecanismos probatorios** que activan la cobertura. :contentReference[oaicite:2]{index=2}",
                },
                {
                  type: "paragraph",
                  text: "Extinción. La fianza se extingue, entre otras causas, por: **cumplimiento** de la obligación principal; **pago** del fiador; **prórroga** concedida al deudor sin consentimiento del fiador (cuando le perjudique); **prescripción** de la acción de la afianzadora conforme a plazos legales; e **inacción** del acreedor frente a un fiador obligado a tiempo determinado si no se demanda al deudor en el mes siguiente a la expiración del plazo. La lógica es coherente: al ser accesoria, la fianza nace, se modula y muere a la sombra de la obligación principal—y se tutela la **seguridad jurídica** del fiador, evitando que su responsabilidad se eternice. Un checklist de cierre (liberación escrita, cancelación de póliza, devolución de contragarantías) evita pasivos latentes. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "accordion",
                  header: "Claves operativas para pactar fianzas",
                  open: false,
                  items: [
                    {
                      header: "Cobertura y límites",
                      text: "Especificar monto máximo, intereses, gastos y eventos de siniestro.",
                    },
                    {
                      header: "Procedimiento de reclamación",
                      text: "Plazos, documentos, domicilio de notificaciones y causales de rechazo.",
                    },
                    {
                      header: "Relación interna",
                      text: "Contragarantía del deudor, derecho de regreso y garantías adicionales.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Riesgos frecuentes y mitigación",
                  open: false,
                  items: [
                    {
                      header: "Modificación del crédito",
                      text: "Cualquier cambio sustancial exige consentimiento del fiador.",
                    },
                    {
                      header: "Pluralidad de fiadores",
                      text: "Regular solidaridades y el beneficio de división para evitar sorpresas.",
                    },
                    {
                      header: "Caducidades",
                      text: "Controlar prescripciones y plazos de reclamación para no perder cobertura.",
                    },
                  ],
                },
              ],
            },

            {
              id: "1.1.2",
              numbering: "1.1.2",
              title:
                "Hipoteca (características, bienes, publicidad/registro, constitución, tipos y transmisión/extinción)",
              content: [
                {
                  type: "paragraph",
                  text: "La hipoteca es una **garantía real** que recae típicamente sobre **bienes inmuebles** para asegurar el cumplimiento de una obligación: ante incumplimiento, el acreedor se paga con el valor del bien. A diferencia de la prenda clásica, no hay desplazamiento de la posesión: el bien permanece con el deudor, pero queda sujeto a **persecución** y **preferencia**. El material resalta su formalismo: debe **constituirse por escrito**, suele instrumentarse en escritura pública y requiere **publicidad registral** para ser oponible y brindar transparencia en el tráfico jurídico. Estas notas hacen de la hipoteca un mecanismo idóneo para créditos de larga duración y alto monto, combinando seguridad del acreedor con explotación pacífica del bien por el deudor. :contentReference[oaicite:4]{index=4}",
                },
                {
                  type: "paragraph",
                  text: "Bienes hipotecables. Predominan los **inmuebles** (terrenos, casas, departamentos). El texto menciona incluso referencias a muebles identificados y a derechos de propiedad intelectual en términos amplios; con todo, en la dogmática civil la hipoteca se asienta en inmuebles y **derechos reales** susceptibles de inscripción. **Publicidad y registro** son vitales: el principio registral informa que terceros deben poder conocer la situación jurídica del bien, de ahí que la inscripción opere como **condición de seguridad** para bancos y adquirentes. Sin registro, la garantía pierde eficacia erga omnes. La registralidad ordena la prelación entre acreedores y previene doble gravamen. :contentReference[oaicite:5]{index=5}",
                },
                {
                  type: "paragraph",
                  text: "Constitución y efectos. Requisitos mínimos: **título** (crédito garantizado), **bien** determinable, **voluntad** del dueño con capacidad de enajenar, formalidad **escritura–registro** y, en su caso, consentimiento de cónyuge o copropietarios. La hipoteca **limita** el dominio: el deudor deberá coordinar actos de disposición (p. ej., arrendamientos relevantes) con el acreedor para no afectar el valor de la garantía. En ejecución, el acreedor puede promover **remate** y satisfacerse con el producto, conforme a reglas procesales. El bien no incluye automáticamente frutos industriales o rentas vencidas, salvo pacto o reglas específicas. El operador debe alinear **tasaciones**, **seguros** y **cláusulas de conservación** como obligaciones anexas del deudor. :contentReference[oaicite:6]{index=6}",
                },
                {
                  type: "paragraph",
                  text: "Tipos, transmisión y extinción. El material alude a hipotecas de diversa naturaleza según prácticas bancarias; dogmáticamente, interesan sus **variantes** (p. ej., abiertas, en garantía de obligaciones futuras) y sus **mecanismos de circulación**: **cesión** del crédito hipotecario y **subrogación** (sustitución del deudor o acreedor con continuidad del gravamen). La extinción opera por **pago** de la deuda, **destrucción** del bien, **resolución** del derecho del deudor, **expropiación**, **prescripción** o **dación en pago**, entre otras. El cierre requiere **cancelación registral** para limpiar la hoja del bien y evitar cargas residuales. Sin cancelación, el mercado castiga con menores valores y mayores costos de transacción. :contentReference[oaicite:7]{index=7}",
                },
                {
                  type: "accordion",
                  header: "Puntos de control en hipotecas",
                  open: false,
                  items: [
                    {
                      header: "Determinación del bien",
                      text: "Identificación registral y gravámenes previos.",
                    },
                    {
                      header: "Coberturas",
                      text: "Intereses, moras, gastos y protección con seguros.",
                    },
                    {
                      header: "Cancelación",
                      text: "Gestión de la liberación y constancias registrales.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Riesgos y mitigación",
                  open: false,
                  items: [
                    {
                      header: "Falta de registro",
                      text: "Disminuye o neutraliza la oponibilidad y prelación.",
                    },
                    {
                      header: "Deterioro del bien",
                      text: "Cláusulas de conservación, inspecciones y seguros.",
                    },
                    {
                      header: "Ejecución ineficiente",
                      text: "Planeación probatoria y valuaciones actualizadas.",
                    },
                  ],
                },
              ],
            },

            {
              id: "1.1.3",
              numbering: "1.1.3",
              title:
                "Prenda (definición, bienes, características, derechos/obligaciones, transmisión y extinción)",
              content: [
                {
                  type: "paragraph",
                  text: "La prenda es una **garantía real** que recae sobre **bienes muebles** para asegurar el pago de una obligación, otorgando al acreedor pignoraticio derecho de **retención** y **preferencia**. Tradicionalmente es **real** (exige entrega de la cosa), pero ordenamientos contemporáneos admiten variantes **sin desplazamiento**, manteniendo el bien en poder del deudor con control jurídico sobre su destino. El material explica que su finalidad es idéntica a la hipoteca—**preferencia de pago**—pero sobre objetos muebles (semovientes, frutos pendientes, mercancías, etc.). La elección entre prenda con o sin desplazamiento impacta logística, custodia y riesgo operativo, por lo que el contrato debe describir el bien con precisión, su localización y los **deberes de conservación**. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "paragraph",
                  text: "Características y elementos. La prenda es **accesoria**, **onerosa** y usualmente **indivisible**: la garantía subsiste íntegra hasta el pago total de la deuda. El material la califica como **unilateral** en clave de devolución del bien por el acreedor una vez pagada la deuda; en la práctica, el instrumento debe explicitar obligaciones de **custodia**, **no uso** (o uso permitido) y **seguro** sobre el bien. En prenda sin desplazamiento, la indivisibilidad y la trazabilidad exigen controles de inventario y **auditorías**. Un inventario con signos externos (números de serie, lotes) evita confusión de bienes y robustece la oponibilidad frente a terceros. :contentReference[oaicite:9]{index=9}",
                },
                {
                  type: "paragraph",
                  text: "Derechos y obligaciones. El acreedor puede **retener** el bien hasta el pago; hacerse **pagar** con su valor en ejecución; recuperar la prenda de manos de terceros; y ser **indemnizado** por gastos de conservación. El deudor tiene derecho a la **restitución** en el estado recibido, a la **custodia diligente** y, ante abuso del acreedor, a solicitar depósito en **tercero**. Estos equilibrios —descritos en el material— deben volcarse en cláusulas de inspección, mantenimiento y reportes periódicos. Asimismo, conviene pactar **eventos de incumplimiento** claros (deterioro no autorizado, traslado sin aviso, falta de seguro) para activar remedios antes de que el valor de la garantía se erosione. :contentReference[oaicite:10]{index=10}",
                },
                {
                  type: "paragraph",
                  text: "Transmisión, duración y extinción. El derecho pignoraticio puede **circular** con el crédito; la garantía suele **caducar** si no se reinscribe en registros especiales donde corresponda. Se **extingue** por pago, por pérdida total del bien (salvo subrogación en seguro), por consolidación (acreedor deviene propietario) o por remate que satisface la deuda. El material recuerda exigencias de **documentación**: contrato por escrito, duplicados para cada parte y, en su caso, inscripción. Un cierre ordenado —acta de devolución o de adjudicación, cancelaciones registrales— previene reclamaciones posteriores. En sectores de alta rotación (inventarios), la prenda debe ir acompañada de **gobernanza operativa**: conteos cíclicos, reconciliaciones y cláusulas de sustitución de bienes equivalentes. :contentReference[oaicite:11]{index=11}",
                },
                {
                  type: "accordion",
                  header: "Checklist contractual de prenda",
                  open: false,
                  items: [
                    {
                      header: "Identificación del bien",
                      text: "Descripción detallada, números de serie, ubicación y estado.",
                    },
                    {
                      header: "Conservación",
                      text: "Seguro, inspecciones, mantenimiento y prohibiciones de uso.",
                    },
                    {
                      header: "Ejecución",
                      text: "Causas, procedimiento, valuación y aplicación de remanentes.",
                    },
                  ],
                },
                {
                  type: "accordion",
                  header: "Alertas prácticas",
                  open: false,
                  items: [
                    {
                      header: "Confusión de bienes",
                      text: "Evitar mezclas; usar inventarios y señalización.",
                    },
                    {
                      header: "Depreciación acelerada",
                      text: "Cláusulas de reposición y seguros adecuados.",
                    },
                    {
                      header: "Plazos registrales",
                      text: "Controlar reinscripciones para conservar prioridad.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* 1.2 Contratos aleatorios */
        {
          id: "1.2",
          numbering: "1.2",
          title: "Contratos aleatorios",
          content: [
            {
              type: "paragraph",
              text: "Los contratos aleatorios se distinguen porque el equilibrio económico de las prestaciones depende de un acontecimiento incierto —el alea— aceptado de manera consciente por las partes. En ellos el sacrificio patrimonial no se equipara de antemano, sino que puede inclinarse hacia una u otra parte según cómo ocurra el hecho futuro. El módulo ubica en esta categoría al juego y la apuesta, la renta vitalicia y la compra de esperanza, figuras que comparten un núcleo conceptual: la asunción válida del riesgo y la previsión de sus efectos jurídicos. A diferencia de los contratos conmutativos, aquí la equivalencia no se fija ex ante; lo determinante es que el objeto sea lícito, el consentimiento esté libre de vicios y la incertidumbre esté claramente delimitada. Esta comprensión permite identificar cuándo estamos ante un verdadero contrato aleatorio y cuándo se trata de un contrato conmutativo expuesto a contingencias ordinarias que no definen su estructura. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "En juego y apuesta, el resultado incierto determina quién debe pagar y quién tiene derecho a cobrar; en la renta vitalicia, la duración de la vida del perceptor inclina el balance; en la compra de esperanza, el comprador asume el riesgo de inexistencia o escasez de los frutos esperados. El elemento común es que la incertidumbre no es un accidente, sino la columna vertebral del negocio. La licitud del objeto y la transparencia de las reglas son esenciales para la exigibilidad: si el resultado se manipula o si el consentimiento se obtuvo con error o dolo, proceden los remedios generales (nulidad, ineficacia, responsabilidad). La presentación del módulo enfatiza, además, que estos contratos deben describir con precisión el hecho incierto, los mecanismos de verificación y los efectos de su realización o no, con la finalidad de traducir el riesgo en reglas operativas claras. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "paragraph",
              text: "Desde la técnica contractual, la delimitación del alea exige definir: (i) el evento o hecho externo relevante, (ii) el periodo de observación, (iii) la forma de certificar el resultado y (iv) la consecuencia económica correspondiente. En la compra de esperanza, por ejemplo, conviene identificar la fuente de los frutos, el plazo y el reconocimiento expreso de que el precio se paga por la expectativa, no por la existencia garantizada; en la renta vitalicia, deben fijarse monto, periodicidad, inicio del pago y prueba de supervivencia; en juego y apuesta, el reglamento previo, la cuantía y el árbitro o medio de verificación. Esta arquitectura probatoria evita trasladar a los jueces lo que debió acordarse documentalmente y reduce la litigiosidad. El operador jurídico debe pensar la prueba desde el diseño: qué documento activará el pago, qué evidencia demostrará el resultado y cómo se manejarán controversias. :contentReference[oaicite:3]{index=3}",
            },
            {
              type: "paragraph",
              text: "La validez de los contratos aleatorios no relativiza los requisitos generales del acto jurídico: capacidad, objeto lícito y consentimiento sin vicios. La diferencia radica en la causa: se intercambia certeza presente por exposición a un riesgo conocido. Por ello, la buena fe objetiva impone deberes de información suficientes sobre la base fáctica de la expectativa (rendimientos esperados, reglas del juego, tabla de pagos). Si el riesgo asumido era imposible o estaba viciado por circunstancias preexistentes ocultas —por ejemplo, que la fuente de frutos jamás pudo producir—, la calificación cambia y el negocio puede devenir anulable. El módulo invita a distinguir con rigor la frontera entre aleatoriedad pactada y lesión: el hecho de que el resultado sea desfavorable no convierte, por sí mismo, en inválido al contrato; la invalidez proviene de vicios de consentimiento, ilicitud del objeto o fraude en el resultado. :contentReference[oaicite:4]{index=4}",
            },
            {
              type: "paragraph",
              text: "En contextos contemporáneos —incluyendo entornos digitales—, la ejecución de estos contratos requiere trazabilidad: registros de apuestas o juegos, constancias de vida para rentas vitalicias, anexos descriptivos y evidencia técnica en compras de esperanza. La equivalencia funcional de soportes electrónicos y papel facilita la prueba, siempre que se preserven integridad, autenticidad y conservación de los mensajes de datos. Con esta perspectiva, los contratos aleatorios no son espacios de excepción a la seguridad jurídica, sino instrumentos útiles cuando el riesgo es inevitable o deseado, y su asignación se documenta con precisión. La enseñanza central del módulo es operativa: describir el riesgo, pactar la verificación, y prever efectos claros. Bajo estas condiciones, el derecho civil reconoce y hace exigible la apuesta racional por lo incierto. :contentReference[oaicite:5]{index=5}",
            },
            {
              type: "accordion",
              header: "Mapa rápido del tema",
              open: false,
              items: [
                {
                  header: "Núcleo común",
                  text: "Alea constitutiva + objeto lícito + consentimiento válido.",
                },
                {
                  header: "Diseño probatorio",
                  text: "Reglas previas, certificación del resultado y documentación.",
                },
                {
                  header: "Figuras del módulo",
                  text: "Juego y apuesta, renta vitalicia, compra de esperanza.",
                },
              ],
            },
          ],
          subthemes: [
            {
              id: "1.2.1",
              numbering: "1.2.1",
              title: "Juego y apuesta",
              content: [
                {
                  type: "paragraph",
                  text: "El módulo explica que juego y apuesta se ubican dentro de los contratos aleatorios, en los que el equilibrio de prestaciones depende de un acontecimiento incierto. Se reseña que ciertos autores distinguen ambos conceptos: en el juego las partes intervienen directamente en la actividad lúdica que produce el resultado; en la apuesta, en cambio, las partes discrepan sobre un hecho ajeno a su intervención y vinculan un pago al acaecimiento de ese resultado. Con lenguaje pedagógico, el material define el contrato de juego como aquel en el que dos o más personas convienen que quienes pierdan entregarán una cantidad determinada a quienes resulten ganadores. En ambos supuestos la nota constitutiva es el alea: el sacrificio patrimonial se asume de antemano, a cambio de la posibilidad de obtener una ventaja si el resultado incierto favorece al contratante. Esta técnica no legaliza por sí misma cualquier juego o apuesta: el objeto debe ser lícito, y la formación del consentimiento, válida y libre de vicios. El estudio invita a pensar estas figuras como laboratorios de distribución del riesgo, útiles para diferenciar contratos conmutativos (precio–prestación equivalentes) de los que admiten una oscilación esencial en la relación de equivalencia. :contentReference[oaicite:0]{index=0}",
                },
                {
                  type: "paragraph",
                  text: "Bajo esa óptica, el régimen jurídico de juego y apuesta suele incorporar límites de política pública. El material subraya la centralidad del evento incierto y la existencia de una cantidad predeterminada; contemporáneamente, los ordenamientos añaden fronteras: prohibición de objetos ilícitos, restricciones etarias, licencias administrativas en ciertos juegos y, en su caso, tipificación penal del juego clandestino. En la esfera civil, afloran dos preguntas operativas: (i) ¿es exigible judicialmente el pago prometido por el perdedor?, y (ii) ¿qué remedios existen frente a dolo, error o manipulación del resultado? Aun cuando el texto no entra a detalle codificado, la lógica del módulo permite responder con criterios: si el objeto es lícito y la competencia se desarrolló conforme a reglas conocidas, el pago es exigible; si hubo vicios en la formación del consentimiento o alteración fraudulenta, procede la nulidad o la ineficacia, además de las consecuencias de responsabilidad. Así, la dogmática del riesgo no excusa el fraude ni suaviza los requisitos generales de validez del acto jurídico.",
                },
                {
                  type: "image",
                  src: "https://0701.static.prezi.com/preview/v2/nxclakufq4qkouxk3isg2y4fat6jc3sachvcdoaizecfr3dnitcq_3_0.png",
                  alt: "Diagrama comparativo de juego y apuesta",
                  caption:
                    "Juego: intervención directa en el resultado. Apuesta: discrepancia sobre un hecho externo.",
                },
                {
                  type: "paragraph",
                  text: "Desde la práctica, importa fijar reglas y prueba. Un contrato de apuesta mínimamente diligente precisa: hecho futuro y objetivamente verificable; cuantía; manera de certificar el resultado (árbitro, acta, documento oficial); y plazo de pago. En el juego, el reglamento previa y mutuamente aceptado evita litigios: determina condiciones de victoria, conductas sancionables y mecanismos de desempate. La documentación —aunque sea simple— sitúa la controversia en el terreno probatorio adecuado. El material motiva a identificar la «alea asumida»: cuanto más claro esté qué riesgo se toma (resultado deportivo, suceso meteorológico, desempeño de una habilidad), más nítida será la frontera entre incumplimiento verdadero y mero azar desfavorable. También debe descontarse la posibilidad de lesión o aprovechamiento de necesidad: una ventaja desproporcionada, arrancada sin información suficiente, hiere la causa del contrato y autoriza su corrección.",
                },
                {
                  type: "accordion",
                  header: "Claves doctrinales",
                  open: false,
                  items: [
                    {
                      header: "Alea constitutiva",
                      text: "El riesgo define el contrato; no es mero accidente de ejecución.",
                    },
                    {
                      header: "Objeto lícito",
                      text: "Sin licitud no hay exigibilidad, aunque exista consentimiento expreso.",
                    },
                    {
                      header: "Prueba del resultado",
                      text: "Arbitraje, acta, verificación objetiva para activar el pago.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "En entornos digitales, proliferan plataformas que intermedian juegos y apuestas. Aunque el módulo no desarrolla esta arista tecnológica, su brújula conceptual es útil: (i) transparencia en reglas y cuotas, (ii) información suficiente al usuario, (iii) equivalencia funcional de evidencias (registros electrónicos, sellos de tiempo), y (iv) respeto a restricciones regulatorias. El operador jurídico debe interrogar la trazabilidad de la operación (quién apostó, cuándo, por qué medio, bajo qué términos) y la integridad del resultado (cómo se prueba). Esa mirada evita confundir un incumplimiento con una disputa técnica o con un resultado manipulado. En síntesis, juego y apuesta son contratos válidos cuando el azar se canaliza por reglas claras y objeto lícito; cuando el riesgo se torna artificio para defraudar o vulnerar prohibiciones, el derecho civil restablece la racionalidad del intercambio con nulidad, inoponibilidad o responsabilidad.",
                },
                {
                  type: "accordion",
                  header: "Checklist de validez y ejecución",
                  open: false,
                  items: [
                    {
                      header: "Reglas previas",
                      text: "Condiciones de victoria y certificación del resultado.",
                    },
                    {
                      header: "Cuantía y pago",
                      text: "Monto predeterminado, plazos y medio de cumplimiento.",
                    },
                    {
                      header: "Salvaguardas",
                      text: "Cláusulas anti-fraude y consecuencias por manipulación del resultado.",
                    },
                  ],
                },
              ],
            },
            {
              id: "1.2.2",
              numbering: "1.2.2",
              title: "Renta vitalicia",
              content: [
                {
                  type: "paragraph",
                  text: "La renta vitalicia se presenta en el material como una figura a medio camino entre el contrato aleatorio y ciertos productos aseguradores: el beneficiario aporta una prima o capital inicial, y a cambio recibe pagos periódicos durante toda su vida. El elemento aleatorio reside en la duración incierta: si el perceptor vive más de lo esperado, la ventaja económica se inclina en su favor; si vive menos, el concedente se beneficia del diferencial. Esta estructura exige que el precio sea cierto y que la fuente de los pagos sea identificable, con asignación clara del riesgo de longevidad. Aunque el texto no desciende al detalle actuarial, sugiere —con lenguaje sencillo— que la renta vitalicia «garantiza una renta constante y periódica», asimilándola a un seguro de vida en su función de previsión. Desde el plano dogmático, el objeto es lícito y perfectamente determinable: una pensión periódica, condicionada al hecho incierto de la supervivencia del perceptor. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "Elementos estructurales: (i) capital o prima inicial; (ii) obligación de pagar rentas periódicas; (iii) condición de duración de la vida del perceptor (o de un tercero designado); y (iv) reglas de rescate o terminación si el contrato las prevé. La aleatoriedad no exime de transparencia: deben exponerse tablas de pagos, inicio de devengo, periodicidad, actualización, y supuestos de suspensión o pérdida de derecho (p. ej., fraude en la identidad o en la prueba de supervivencia). La tutela del perceptor demanda mecanismos probatorios sencillos: constancias de vida, comparecencias digitales con sello de tiempo o certificaciones de autoridad. A su vez, el concedente necesita salvaguardas frente a cambios extraordinarios (p. ej., imposibilidad sobrevenida de inversión) sin desconocer el pactum; allí el material propone una comprensión flexible de la fuerza obligatoria, pero sin relativizarla: el contrato debe cumplirse y solo admitirá modulaciones bajo causas previstas o reglas generales de derecho.",
                },
                {
                  type: "image",
                  src: "https://i.ytimg.com/vi/9vAusYPqrF4/maxresdefault.jpg",
                  alt: "Línea de tiempo de una renta vitalicia desde la prima inicial a los pagos periódicos",
                  caption:
                    "Alea de longevidad: el equilibrio se define por la duración efectiva de la vida del perceptor.",
                },
                {
                  type: "paragraph",
                  text: "Desde la perspectiva del riesgo, la renta vitalicia asigna al concedente la incertidumbre de la supervivencia y al perceptor el costo de oportunidad de inmovilizar un capital a cambio de flujo cierto. Por ello, la proporcionalidad entre prima y renta debe ser explicable ex ante —aun sin formalismo actuarial—. En contratos civiles simples, bastará un cuadro financiero razonable y una cláusula de revisión por eventos extraordinarios suficientemente objetiva. La experiencia comparada enseña que la litigiosidad surge por (i) opacidad de condiciones, (ii) dificultades para probar supervivencia o (iii) interpretaciones creativas sobre actualización de rentas. El método propuesto por el módulo es práctico: escribir, medir y probar; traducir la promesa en reglas verificables (fechas de pago, medios de cobro, indexación, documentación anual). Así, la alea se vuelve gobernable y el contrato, confiable.",
                },
                {
                  type: "accordion",
                  header: "Claves de diseño contractual",
                  open: false,
                  items: [
                    {
                      header: "Determinación de la renta",
                      text: "Monto, periodicidad, actualización y fecha de inicio.",
                    },
                    {
                      header: "Prueba de supervivencia",
                      text: "Mecanismos simples y proporcionados (acta, certificación, validación digital).",
                    },
                    {
                      header: "Rescate/terminación",
                      text: "Condiciones y costos si el contrato prevé salidas anticipadas.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "La calificación como contrato aleatorio no desdibuja los requisitos generales de validez: capacidad, consentimiento libre de vicios, objeto lícito y causa. El material enfatiza —en su enfoque de competencias— que el alumno debe reconocer el riesgo como elemento estructural, no como accidente. Operativamente, conviene prever (i) cláusulas de sustitución de medio de pago, (ii) canales de atención de quejas y (iii) auditoría documental. En contratos familiares o de pequeña escala, un acta complementaria sobre el origen del capital reduce conflictos hereditarios. En síntesis, la renta vitalicia es un instrumento civil que, bien documentado, satisface necesidades de previsión y redistribuye el riesgo de longevidad con reglas claras y verificables, en línea con la orientación docente del módulo.",
                },
                {
                  type: "accordion",
                  header: "Checklist probatorio",
                  open: false,
                  items: [
                    {
                      header: "Evidencia financiera",
                      text: "Recibos de prima, cuadro de pagos, estados de cuenta.",
                    },
                    {
                      header: "Evidencia personal",
                      text: "Identidad del perceptor y constancias de vida.",
                    },
                    {
                      header: "Ejecución",
                      text: "Reglas de pago, mora y actualización.",
                    },
                  ],
                },
              ],
            },
            {
              id: "1.2.3",
              numbering: "1.2.3",
              title: "Compra de esperanza",
              content: [
                {
                  type: "paragraph",
                  text: "El módulo define la compra de esperanza como el contrato por el cual se adquiere, por un precio cierto, una cantidad futura e incierta —por ejemplo, los frutos que una cosa produzca en un tiempo determinado—, asumiendo el comprador el riesgo de que tales frutos no lleguen a existir o sean inferiores a lo esperado. La regla que subraya el texto es nítida: el vendedor conserva derecho al precio aunque los frutos no se produzcan, porque precisamente el alea es el elemento estructural pactado. La figura se diferencia de la venta de cosa futura en que aquí no se promete un resultado concreto, sino la **esperanza** de un resultado, conocida y aceptada por el comprador. Sobre esa base, el intercambio es válido si el objeto es lícito y determinable (categoría de frutos, periodo, fuente), y si el consentimiento se formó con información suficiente sobre el riesgo asumido. :contentReference[oaicite:2]{index=2}",
                },
                {
                  type: "paragraph",
                  text: "La técnica documental debe atajar ambigüedades: (i) identificar la fuente de la expectativa (p. ej., «frutos de la huerta X durante la temporada Y»), (ii) delimitar el periodo cubierto, (iii) señalar expresamente que el comprador asume el riesgo de inexistencia o escasez y (iv) precisar si existen garantías accesorias (seguro agrícola, cobertura climática) o no. El precio fijo transforma esa esperanza en valor presente; por ello, la buena fe objetiva demanda transparencia sobre contingencias ordinarias (plagas, sequía) y sobre condiciones extraordinarias (caso fortuito o fuerza mayor). El equilibrio del contrato no depende de que el resultado ocurra, sino de que el riesgo **atribuido** sea auténticamente comprendido y aceptado. Cualquier inducción dolosa o ocultamiento de datos esenciales vicia el consentimiento y permite remedios de nulidad o responsabilidad.",
                },
                {
                  type: "image",
                  src: "https://thumbnails.genially.com/603865991808f33193c3dbdc/screenshots/fac46969-108c-4b5c-8449-6705a1f06e2b.jpg",
                  alt: "Flujo de compra de esperanza: identificación de fuente, periodo, precio y asunción de riesgo",
                  caption:
                    "El alea se traslada al comprador: el precio no depende del resultado efectivo.",
                },
                {
                  type: "paragraph",
                  text: "La práctica enseña dos zonas de fricción: (i) cuando la fuente jamás pudo producir por causa preexistente conocida por el vendedor (vicio oculto), y (ii) cuando el comprador alega que contrató una **cosa futura** con obligación de entrega y no una esperanza. Para evitarlo, el contrato debe describir la **expectativa** y no una cantidad mínima garantizada; si se desea umbral, ya no es compra de esperanza pura, sino una modalidad con precio y ajustes (cláusulas de floor/ceiling) que acercan la figura a contratos conmutativos. El material dirige al alumno a reconocer estos matices para calificar correctamente el negocio y, en su caso, sostener su defensa: no hay incumplimiento del vendedor cuando el riesgo contratado (inexistencia del fruto) se materializa sin dolo ni culpa, pues precisamente ello fue lo comprado.",
                },
                {
                  type: "accordion",
                  header: "Distinciones esenciales",
                  open: false,
                  items: [
                    {
                      header: "Esperanza vs. cosa futura",
                      text: "En la esperanza no hay garantía de existencia; en la cosa futura, sí hay promesa de entrega.",
                    },
                    {
                      header: "Precio cierto",
                      text: "Se paga por la expectativa; el monto no varía por el resultado.",
                    },
                    {
                      header: "Riesgo asignado",
                      text: "El comprador asume inexistencia o escasez, salvo dolo o vicio oculto.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Operativamente, conviene acompañar el contrato con anexos descriptivos: mapas de la finca, series históricas de producción, certificaciones fitosanitarias, fotografías y, si procede, notas técnicas de riego y clima. A nivel probatorio, esos documentos acreditan que el comprador conocía la base racional de la esperanza y que el vendedor no ocultó información crucial. En transacciones repetidas, las partes pueden introducir mecanismos de ajuste de precio por eventos extremos, manteniendo la esencia aleatoria pero mitigando colapsos económicos. El enfoque del módulo es pedagógico y práctico: entender qué se compra (la expectativa), aceptar que el resultado puede ser nulo sin incumplimiento y documentar la operación con suficiente trazabilidad para resistir controversias futuras.",
                },
                {
                  type: "accordion",
                  header: "Checklist contractual",
                  open: false,
                  items: [
                    {
                      header: "Fuente y periodo",
                      text: "Delimitar con precisión finca, lote, temporada o hecho generador.",
                    },
                    {
                      header: "Manifestaciones",
                      text: "Declaraciones sobre estado de la fuente y ausencia de vicios ocultos.",
                    },
                    {
                      header: "Prueba y archivos",
                      text: "Anexos fotográficos, históricos de producción y certificados técnicos.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* 1.3 Contratación electrónica */
        {
          id: "1.3",
          numbering: "1.3",
          title: "Contratación electrónica",
          content: [
            {
              type: "paragraph",
              text: "La contratación electrónica conserva la dogmática clásica del contrato —capacidad, consentimiento, objeto y causa— y transforma el soporte: del papel al mensaje de datos. Esta mutación exige sustituir solemnidad física por verificabilidad técnica. Sostengo que el eje no es “digitalizar por moda”, sino diseñar **evidencias robustas**: identidad del oferente y del aceptante, versión exacta del texto aceptado, sello de tiempo y constancias de integridad. La mayoría de los negocios se despliegan como contratos de adhesión; por ello, la transparencia previa y la información suficiente son condiciones de validez práctica. El operador jurídico debe construir un flujo auditable de oferta–aceptación, de modo que cada clic sea inequívocamente atribuible y reproducible ante un tercero —juez o árbitro—. He ahí la equivalencia funcional: la firma electrónica y los registros sustituyen a la rúbrica y al fedatario en su función probatoria.",
            },
            {
              type: "paragraph",
              text: "Los elementos esenciales no cambian, pero su **manifestación** sí. La capacidad se acredita con mecanismos de verificación (KYC proporcional, doble factor, certificados). El consentimiento exige un acto positivo de aceptación, sin ambigüedades ni casillas premarcadas; conviene usar confirmaciones escalonadas (“doble clic”) y un resumen ejecutivo previo a la aceptación para mitigar vicios. El objeto debe ser lícito y determinable; la causa —finalidad económica y jurídica— debe desprenderse del clausulado y de anexos claros (servicios, SLA, precios). Firme postura: si alguno de estos elementos se diluye por diseño deficiente de la interfaz, el problema no es “lo electrónico”, sino la **mala arquitectura contractual**. Documente la ruta completa: qué se mostró, cuándo, a quién y con qué versión, y guárdelo con un plan de conservación y acceso.",
            },
            {
              type: "image",
              src: "https://www.pagoscertificados.com/wp-content/uploads/2021/06/Flujo-prestamo-1024x576.png",
              alt: "Flujo de contratación electrónica: oferta → lectura de términos → aceptación → sellos de tiempo → archivo",
              caption:
                "La forma cambia, la exigibilidad no: la prueba sustituye a la ceremonia.",
            },
            {
              type: "paragraph",
              text: "Comparada con la contratación tradicional, la ventaja decisiva es la **trazabilidad**. Donde antes había actas y firmas húmedas, hoy hay logs, hashes, evidencias de servidor y acuses automáticos. Es un error tolerar opacidad bajo el pretexto de agilidad: velocidad sin prueba es litigio asegurado. Todo recorrido debe ser replicable —en un sandbox probatorio— para demostrar la correlación entre la identidad del usuario, la versión aceptada y el momento exacto de la manifestación de voluntad. Integre controles de cambios (versionado), avisos de actualización y consentimientos renovados cuando el clausulado se modifique. La regla práctica es sencilla y firme: **si no puede demostrarlo sin ambages, no lo dé por probado**. Esa disciplina reduce controversias sobre existencia, contenido y alcance del contrato.",
            },
            {
              type: "paragraph",
              text: "Efectos y límites. El contrato electrónico es plenamente exigible si la plataforma garantiza autenticidad, integridad y conservación. En contratos de consumo, la asimetría informativa impone umbrales reforzados: claridad de precios, cargos recurrentes, periodos de prueba, derecho de desistimiento donde proceda y prohibición de cláusulas sorpresivas. Incorporar capas de **ética del diseño** —lenguaje claro, jerarquía visual, advertencias prominentes— no es filantropía; es gestión del riesgo jurídico. La confidencialidad y la protección de datos personales no son anexos, sino condiciones materiales de validez social del intercambio. Cualquier tratamiento debe ser informado y proporcional. La frontera con lo ilícito no se mueve porque sea digital: contenidos prohibidos siguen siendo nulos, con independencia del medio.",
            },
            {
              type: "accordion",
              header: "Checklist operativo imprescindible",
              open: false,
              items: [
                {
                  header: "Evidencias",
                  text: "Sello de tiempo, huella digital del documento, logs de IP/dispositivo y constancias de envío/recepción.",
                },
                {
                  header: "Transparencia",
                  text: "Resumen ejecutivo pre-aceptación, precios visibles, términos legibles y accesibles.",
                },
                {
                  header: "Gobernanza",
                  text: "Versionado, política de cambios, conservación y acceso al expediente digital por todo el ciclo de vida.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "Recomendaciones de diseño contractual. (i) Inserte en portada un “cuadro de claves” con objeto, precio, vigencia, renovación y terminación; (ii) obligue a **scroll consciente** para recorrer los puntos críticos; (iii) entregue copia íntegra y verificable tras la aceptación; (iv) parametrice la firma electrónica acorde al riesgo (simple, avanzada, calificada); (v) defina una política de conservación con retención segura, inmutabilidad y trazas de acceso; (vi) prevea un canal de atención y rectificación antes de cerrar la transacción. Estas pautas convierten la interfaz en un instrumento probatorio. Concluyo sin rodeos: la contratación electrónica no debilita el **pacta sunt servanda**; lo fortalece cuando se respeta su liturgia técnica. La forma dejó de ser ceremonia para convertirse en protocolo verificable. Diseñe con esa lógica o se expone a impugnaciones que eran evitables.",
            },
          ],
          subthemes: [
            {
              id: "1.3.1",
              numbering: "1.3.1",
              title: "Características",
              content: [
                {
                  type: "paragraph",
                  text: "La contratación electrónica, tal como se presenta en el módulo, mantiene la esencia del contrato civil y modifica principalmente su soporte y dinámica operativa: el acuerdo se documenta en un archivo digital (por ejemplo, un PDF) y el consentimiento se formaliza mediante firma electrónica, integrando equivalencia funcional respecto del papel. La obra base subraya su naturaleza típicamente adhesiva: las condiciones son predispuestas por el proponente y al consumidor solo le queda aceptar o rechazar, lo que exige reforzar el control de información y la claridad del clausulado. Así, el rasgo diferencial no es la desaparición de los elementos del contrato, sino la mutación de la forma y de los medios probatorios. De ahí que la validez dependa de la capacidad de los contratantes, la licitud del objeto y la ausencia de vicios del consentimiento, como en cualquier contrato, mientras que la eficacia procesal se sustenta en integridad, autenticidad y conservación del mensaje de datos. En suma, la contratación electrónica suma velocidad y alcance, pero reclama rigor documental y trazabilidad que respalden la manifestación de voluntad y su oponibilidad a terceros. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "Estas características imponen un enfoque de gestión probatoria desde el diseño del proceso: políticas claras de información previa, mecanismos de aceptación inequívoca, constancias de tiempo y de identidad, así como reglas de archivo y consulta posterior. El módulo resalta que, aunque se prescinde del papel, no se prescinde de formalidad: la estructura del consentimiento debe ser verificable y reproducible, y las condiciones de adhesión, comprensibles. En consecuencia, las plataformas deben exhibir términos visibles, recogida explícita de aceptaciones y confirmaciones de transacción, de modo que el registro digital cumpla la función de acta. Este enfoque reduce disputas sobre existencia y contenido del contrato, y alinea la práctica con el principio de que la forma, en el entorno electrónico, es garantía de eficacia y de prueba, no un obstáculo para la libertad de contratar. :contentReference[oaicite:2]{index=2}",
                },

                {
                  type: "paragraph",
                  text: "La naturaleza adhesiva, señalada por el material, obliga a un escrutinio específico del equilibrio contractual: información suficiente, prohibición de cláusulas sorpresivas y mecanismos accesibles de desistimiento cuando la legislación aplicable así lo prevea. Aunque el temario no entra a detalle normativo sectorial, propone una brújula práctica: cuanto mayor sea la asimetría informativa y tecnológica entre las partes, mayor debe ser la transparencia y la claridad del flujo de contratación. Ello incluye avisos previos, resúmenes ejecutivos de condiciones y herramientas de confirmación por pasos (doble clic, confirmación vía correo). En síntesis, las características de la contratación electrónica son la adhesión, el soporte digital y la necesidad de equivalencia funcional en prueba y eficacia: el contrato subsiste, cambia su medio. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "accordion",
                  header: "Rasgos esenciales",
                  open: false,
                  items: [
                    {
                      header: "Soporte digital",
                      text: "El acuerdo se plasma en archivos electrónicos y mensajes de datos.",
                    },
                    {
                      header: "Adhesión",
                      text: "Condiciones predispuestas; el usuario acepta o rechaza.",
                    },
                    {
                      header: "Equivalencia funcional",
                      text: "Firma y evidencia electrónica sustituyen la rúbrica manuscrita y el papel.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Desde la operativa diaria, la confiabilidad se construye con procedimientos repetibles: identificación de la versión contractual aceptada, bitácoras de cambios, sellos de tiempo y acuses automáticos que dejen huella de la secuencia oferta–aceptación. El módulo recalca que, a diferencia de épocas en que la solemnidad bastaba para dotar de fuerza a la palabra, hoy la robustez del contrato electrónico depende de su verificabilidad y conservación. De este modo, la digitalización no relativiza el compromiso jurídico: simplemente desplaza el énfasis hacia la arquitectura de evidencias que lo sostienen. :contentReference[oaicite:4]{index=4}",
                },
                {
                  type: "accordion",
                  header: "Checklist operativo",
                  open: false,
                  items: [
                    {
                      header: "Información previa",
                      text: "Términos visibles y comprensibles antes de aceptar.",
                    },
                    {
                      header: "Consentimiento",
                      text: "Mecanismo inequívoco de aceptación (clic/firma electrónica).",
                    },
                    {
                      header: "Conservación",
                      text: "Archivo íntegro y accesible del contrato y sus evidencias.",
                    },
                  ],
                },
              ],
            },
            {
              id: "1.3.2",
              numbering: "1.3.2",
              title: "Elementos del contrato electrónico",
              content: [
                {
                  type: "paragraph",
                  text: "El material es categórico: los elementos del contrato electrónico no difieren de los del contrato civil común; se exigen capacidad, consentimiento libre de vicios, objeto lícito y causa. La novedad radica en la forma de exteriorizar y probar esos elementos. Por ello, la plataforma o medio técnico debe facilitar una identificación adecuada de los contratantes, una exposición clara del contenido obligacional y un mecanismo de aceptación que elimine dudas razonables sobre la voluntad de obligarse. La exigencia de licitud del objeto se mantiene incólume: el hecho de operar por medios electrónicos no legitima contenidos prohibidos. En cuanto a la causa, su entendimiento práctico se traduce en la finalidad económica y jurídica del intercambio, visible en el propio clausulado y en los anexos que lo acompañan. Con estos parámetros, el contrato electrónico se integra en la dogmática clásica sin necesidad de crear categorías exóticas: lo que cambia no es el qué, sino el cómo se manifiesta y custodia la voluntad. :contentReference[oaicite:5]{index=5}",
                },
                {
                  type: "paragraph",
                  text: "Capacidad y consentimiento exigen controles de identidad y de atribución. El módulo propone —en su enfoque pedagógico— imaginar la firma electrónica como el equivalente funcional de la rúbrica: debe ser propia, asociable a un acto concreto y difícilmente repudiable. En escenarios de adhesión, cobra relevancia la ausencia de vicios: información suficiente, claridad de precios y cargos, y posibilidad de revisar antes de aceptar. En paralelo, la prueba del consentimiento se asienta en evidencias técnicas: registros de servidor, huellas digitales de documentos, confirmaciones por correo y constancias de tiempo. La integración de estas piezas permite sostener en juicio que la manifestación de voluntad se produjo, que recayó sobre ese texto y que no se ha alterado desde su aceptación. :contentReference[oaicite:6]{index=6}",
                },
                {
                  type: "image",
                  src: "https://universidadeuropea.com/resources/media/images/evidencia-digital-1200x630.original.jpg",
                  alt: "Esquema de elementos: capacidad, consentimiento, objeto y causa con soportes digitales",
                  caption:
                    "Los elementos clásicos con soporte de evidencias electrónicas.",
                },
                {
                  type: "paragraph",
                  text: "El objeto lícito exige determinabilidad y compatibilidad con el orden jurídico; la licitud no se negocia ni se relativiza por el medio. La causa, aunque menos visible, suele desprenderse de la función económica del contrato y de sus anexos (descripciones de servicio, alcances, niveles de servicio). Para robustecerla, sirven resúmenes ejecutivos y tablas de contraprestaciones. Como refuerzo de buena fe, el material avala prácticas de transparencia: mostrar la versión y fecha del contrato, informar del derecho a conservar una copia y facilitar canales de atención a dudas antes de la aceptación. Estas medidas no solo son éticamente deseables: facilitan la prueba y disminuyen litigios al evitar sorpresas interpretativas. :contentReference[oaicite:7]{index=7}",
                },
                {
                  type: "accordion",
                  header: "Elementos y evidencias",
                  open: false,
                  items: [
                    {
                      header: "Capacidad",
                      text: "Verificación de identidad y aptitud para obligarse.",
                    },
                    {
                      header: "Consentimiento",
                      text: "Aceptación inequívoca con sello de tiempo y registro.",
                    },
                    {
                      header: "Objeto y causa",
                      text: "Definición precisa de prestaciones y finalidad del intercambio.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "La ausencia de vicios —error, dolo, violencia— reclama prácticas concretas: redacciones claras, simuladores de precio, advertencias sobre renovaciones automáticas y mecanismos para revisar o corregir antes de enviar la aceptación. El enfoque docente del módulo recuerda que la protección de la voluntad no es un obstáculo a la contratación, sino su condición de posibilidad: si el usuario entiende lo que acepta, la eficacia del contrato aumenta. En el mismo sentido, la conservación íntegra del expediente digital (términos, aceptaciones, comunicaciones) habilita la ejecución forzosa o la defensa frente a impugnaciones oportunistas. De nuevo, el medio no altera el fondo: los elementos clásicos siguen siendo el timón; las evidencias digitales, el casco que permite navegar con seguridad. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "accordion",
                  header: "Checklist mínimo",
                  open: false,
                  items: [
                    {
                      header: "Versionado",
                      text: "Identificar la versión contractual aceptada por la parte.",
                    },
                    {
                      header: "Conservación",
                      text: "Archivar contrato y logs asociados en repositorios seguros.",
                    },
                    {
                      header: "Transparencia",
                      text: "Resúmenes y avisos antes de la aceptación para evitar vicios.",
                    },
                  ],
                },
              ],
            },
            {
              id: "1.3.3",
              numbering: "1.3.3",
              title: "Cambio de forma en el sistema de contratación",
              content: [
                {
                  type: "paragraph",
                  text: "El módulo compara la práctica histórica —donde la solemnidad corporal y la lectura pública bastaban para investir fuerza obligatoria— con el presente, en el que la tecnología permite celebrar miles de contratos a distancia cada día. Esta transición no significa devaluar el contrato, sino reconfigurar su forma: del gesto solemne y la firma manuscrita al clic informado y a la firma electrónica, con idéntica vocación de exigibilidad. La enseñanza central es que el contrato sigue teniendo fuerza obligatoria; cambia el medio de expresión y de prueba. En la narrativa del material, los ritos de antaño (lectura solemne, juramento) han sido sustituidos por procedimientos digitales que buscan el mismo efecto: certidumbre sobre el contenido y la voluntad. Así, la modernización consiste en reubicar la solemnidad en la arquitectura de evidencias: sellos de tiempo, registros, notificaciones automáticas y conservación íntegra de documentos. :contentReference[oaicite:9]{index=9}",
                },
                {
                  type: "paragraph",
                  text: "Este cambio de forma exige una pedagogía de la prueba: si antes bastaba la presencia física, hoy la oponibilidad se apoya en la trazabilidad técnica. Por eso, el itinerario de contratación debe ser auditable: qué se mostró, cuándo, a quién y cómo se aceptó. El material destaca que la deslocalización de los contratantes no debilita el vínculo; por el contrario, amplía las oportunidades de intercambio, siempre que la plataforma garantice integridad y autenticidad. La elasticidad del medio electrónico permite reforzar deberes de información y de claridad, atenuando asimetrías con resúmenes, confirmaciones y accesos a copia íntegra del contrato. En otras palabras, la forma evoluciona de ceremonia a protocolo técnico, y la solemnidad se transforma en verificabilidad. :contentReference[oaicite:10]{index=10}",
                },
                {
                  type: "image",
                  src: "https://cdn.slidesharecdn.com/ss_thumbnails/mapamental-231113035602-358b30cd-thumbnail.jpg?width=640&height=640&fit=bounds",
                  alt: "Línea de tiempo: solemnidad tradicional → firma manuscrita → firma electrónica y logs",
                  caption:
                    "De la ceremonia a la verificabilidad: la forma como garantía probatoria.",
                },
                {
                  type: "paragraph",
                  text: "El contraste histórico que ofrece el módulo —del juramento y las cruces al archivo digital y la firma electrónica— revela un hilo conductor: la forma asegura la prueba del consentimiento. La novedad es que la solemnidad hoy se programa: pasos de aceptación, doble confirmación, políticas de cambios y acuses de recibo. Frente a objeciones sobre «decadencia» del contrato, el texto es claro: la fuerza obligatoria permanece, adaptándose a contextos tecnológicos que multiplican la distancia pero no diluyen el compromiso. En términos prácticos, la seguridad jurídica depende menos de tinta y papel, y más de la calidad del expediente digital que documenta el negocio. Ese es el verdadero cambio de forma: no menos derecho, sino más técnica probatoria. :contentReference[oaicite:11]{index=11}",
                },
                {
                  type: "accordion",
                  header: "De la solemnidad al protocolo",
                  open: false,
                  items: [
                    {
                      header: "Antes",
                      text: "Lectura y gestos solemnes como prueba de voluntad.",
                    },
                    {
                      header: "Ahora",
                      text: "Evidencias digitales (firma electrónica, sellos, logs) con igual fuerza.",
                    },
                    {
                      header: "Constante",
                      text: "Fuerza obligatoria del contrato y licitud del objeto.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "En conclusión, el sistema de contratación ha girado hacia procedimientos reproducibles y verificables. El operador jurídico debe diseñar recorridos de aceptación claros, accesibles y registrables; debe prever cómo acreditará, en juicio, que la voluntad se expresó sobre un contenido determinado y que se conservaron íntegros los mensajes. Con esa disciplina, el medio electrónico no es una excepción, sino la expresión contemporánea del mismo principio que gobierna desde siempre: pacta sunt servanda. La forma ha cambiado; la obligatoriedad, no. :contentReference[oaicite:12]{index=12}",
                },
                {
                  type: "accordion",
                  header: "Checklist de transición",
                  open: false,
                  items: [
                    {
                      header: "Diseño del flujo",
                      text: "Secuencia oferta–aceptación con pruebas en cada paso.",
                    },
                    {
                      header: "Conservación",
                      text: "Respaldo íntegro y accesible del expediente digital.",
                    },
                    {
                      header: "Transparencia",
                      text: "Información previa suficiente y copia del contrato al adherente.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* 1.4 Decadencia del contrato */
        {
          id: "1.4",
          numbering: "1.4",
          title: "Decadencia del contrato",
          content: [
            {
              type: "paragraph",
              text: "El temario plantea una pregunta provocadora: ¿ha decaído el contrato o conserva su vigencia material? La posición docente es clara: el contrato mantiene su fuerza obligatoria; lo que cambia es el contexto tecnológico y social que exige rediseñar la forma de documentarlo y probarlo. Afirmar decadencia supondría confundir mutación de soporte con erosión de obligatoriedad. El eje sigue siendo el mismo: voluntad válida, objeto lícito y causa, ejecutables bajo el principio pacta sunt servanda. En palabras del material, la obligatoriedad persiste «aunque la tecnología avance», lo que obliga a centrar la discusión en cómo acreditamos hoy el consentimiento, cómo aseguramos integridad de los textos y cómo gestionamos asimetrías informativas que se agravan en entornos de adhesión. De ahí que el problema no sea metafísico —¿ha muerto el contrato?— sino metodológico: ¿qué protocolos probatorios lo hacen exigible sin fisuras en lo digital y lo masivo? El enfoque operativo desplaza la solemnidad hacia la verificabilidad técnica y la transparencia de la interfaz, manteniendo incólume la estructura dogmática. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "Históricamente, la forma cumplía una función de solemnidad pública: lectura, juramento, rúbrica. Hoy la equivalencia funcional traslada esa solemnidad a sellos de tiempo, registros de servidor, firmas electrónicas y conservación íntegra del expediente digital. El material explica que ya no es indispensable el papel; basta el archivo electrónico y la firma para producir efectos obligatorios. Esta mutación no diluye requisitos: capacidad, consentimiento sin vicios, objeto y causa siguen siendo el corazón del vínculo. Lo que se intensifica es la exigencia de trazabilidad. En contratos de adhesión, el deber de información adquiere densidad práctica: términos visibles, precios claros, confirmaciones escalonadas y entrega automática de copia íntegra. Así, la retórica de la «decadencia» se desactiva cuando se exhibe un itinerario probatorio robusto. Si el recorrido oferta–aceptación–archivo es auditable, el contrato electrónico no es un atajo informal, sino una forma contemporánea de la misma promesa exigible. :contentReference[oaicite:1]{index=1}",
            },

            {
              type: "paragraph",
              text: "¿De dónde viene entonces la percepción de decadencia? De tres vectores: (i) masificación de contratos predispuestos que intensifican asimetrías; (ii) opacidad de interfaces que inducen a aceptar sin comprender; y (iii) dificultad para representar técnicamente la voluntad. Frente a ello, el derecho civil responde con herramientas clásicas y ajustes de gobernanza: nulidad por vicios del consentimiento, control de cláusulas sorpresivas, interpretación pro adherente cuando proceda y, sobre todo, diseño probatorio que cierre espacios de duda. La tesis central es firme: cuando el consentimiento se forma con información suficiente y queda debidamente trazado, el contrato es exigible con la misma o mayor fuerza que antes. La llamada «decadencia» es, en rigor, exigencia de profesionalizar el cómo: versionado de textos, registro de aceptaciones, bitácoras de cambios y custodia segura. Las controversias típicas —existencia, contenido, alcance— se previenen en la arquitectura, no en la retórica.",
            },
            {
              type: "accordion",
              header: "Tres tesis en debate",
              open: false,
              items: [
                {
                  header: "Decadencia real",
                  text: "Sostiene que la adhesión masiva vacía la voluntad. Respuesta: el control de información y prueba restituye eficacia.",
                },
                {
                  header: "Mutación formal",
                  text: "No hay decadencia; hay cambio de soporte. La prueba sustituye a la ceremonia.",
                },
                {
                  header: "Eficacia reforzada",
                  text: "Con trazabilidad técnica, la exigibilidad práctica del contrato aumenta.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "El material docente añade un contraste histórico útil: antaño bastaba la lectura solemne o incluso signos como cruces para exteriorizar la voluntad; hoy, el clic informado y la firma electrónica cumplen esa misma función con mayor precisión. Esto no es relativismo jurídico, sino actualización tecnológica del mismo principio de obligatoriedad. La clave es conservar el «hilo de oro» que une forma y prueba: cada paso que conduce de la oferta a la aceptación debe dejar una huella verificable. La plataforma que recoge el consentimiento debe garantizar autenticidad (quién), integridad (qué) y conservación (cuándo y cómo), de modo que un tercero imparcial pueda reconstruir el pacto sin incertidumbre. Esta disciplina no es accesoria: es la diferencia entre un contrato ejecutable y un conflicto costoso. El resultado práctico es contundente: el contrato no decae; se tecnifica.",
            },
            {
              type: "paragraph",
              text: "Una objeción frecuente apunta a los límites contemporáneos: datos personales, ciberseguridad, competencia económica, consumo. Lejos de desfondar el contrato, estos regímenes lo rodean de condiciones de validez social y probatoria. La privacidad exige información y proporcionalidad en el tratamiento; la ciberseguridad, estándares razonables de protección; la competencia, prácticas no engañosas; el consumo, transparencia reforzada. Ninguno de estos ejes invalida per se la fuerza del contrato; la encuadra. Si hay ilicitud del objeto o fraude, la sanción no es «debilitar» lo contractual, sino declarar su nulidad o imponer responsabilidad. El mensaje pedagógico es inequívoco: el contrato sigue siendo la herramienta central de organización del intercambio; su eficacia depende de cómo las partes diseñan la verificación, no del soporte que elijan. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "accordion",
              header: "Checklist docente de exigibilidad",
              open: false,
              items: [
                {
                  header: "Trazabilidad",
                  text: "Oferta → aceptación → archivo con sellos y logs verificables.",
                },
                {
                  header: "Transparencia",
                  text: "Términos legibles, precios claros, resumen ejecutivo pre-aceptación.",
                },
                {
                  header: "Conservación",
                  text: "Expediente íntegro, versión aceptada y política de acceso.",
                },
              ],
            },
          ],
          subthemes: [
            {
              id: "1.4.1",
              numbering: "1.4.1",
              title: "Fuerza obligatoria y límites contemporáneos",
              content: [
                {
                  type: "paragraph",
                  text: "El punto 9.1 del material es taxativo: el contrato «sigue teniendo su fuerza central de obligatoriedad». Esta afirmación no es un eslogan; es una tesis con implicaciones técnicas. El compromiso obligacional no se relativiza por el medio empleado (papel o electrónico) ni por la masividad del canal; se relativiza —y solo entonces— cuando faltan los presupuestos clásicos: capacidad, consentimiento sin vicios, objeto lícito y causa. Por ello, la discusión contemporánea debe ubicarse en el terreno de los límites: ¿qué barreras impone el orden jurídico para que la fuerza obligatoria sea justa y socialmente aceptable? La respuesta del módulo combina tradición y práctica: buena fe objetiva, claridad informativa y prueba suficiente. A partir de ahí, la fuerza vinculante no solo se mantiene, sino que se hace más operativa: un contrato con logs, sellos y custodia es más fácil de ejecutar que uno de «palabra» sin soporte. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "paragraph",
                  text: "Primer límite: la licitud del objeto y la congruencia con regímenes especiales (consumo, competencia, datos personales). La fuerza del contrato no legitima lo ilícito ni ampara cláusulas que burlen derechos irrenunciables. Segundo límite: la integridad del consentimiento. El entorno digital exige evitar prácticas de captura oscura (dark patterns), casillas premarcadas o textos ininteligibles que conviertan la aceptación en acto mecánico. Tercer límite: la transparencia funcional del precio y las cargas futuras (renovaciones, penalidades, indexaciones). Donde hay opacidad, hay riesgo de nulibilidad por error o dolo. Estos límites no son achaques a la libertad contractual, sino condiciones para su vigencia robusta. El operador jurídico debe pensar en «fricción buena»: pasos de revisión y confirmación que fortalezcan la voluntad en lugar de obstaculizarla.",
                },

                {
                  type: "paragraph",
                  text: "Cuarto límite: la prueba. Sin expediente digital completo —versión exacta aceptada, sello de tiempo, identificación del aceptante, trazas de envío y recepción— la exigibilidad se vuelve frágil. La «decadencia» que algunos perciben suele ser, en realidad, mala gobernanza probatoria. El módulo, al describir la contratación electrónica, enseña la solución: equivalencia funcional entre firma manuscrita y firma electrónica, y entre protocolo notarial y protocolo de evidencias. La corrección de asimetrías pasa por entregar copia íntegra tras la aceptación, permitir acceso posterior al contrato y documentar cambios con acuses. La máxima práctica es inequívoca: sin evidencia, no hay fuerza; con evidencia íntegra, la fuerza obligatoria se activa sin ambages. :contentReference[oaicite:4]{index=4}",
                },
                {
                  type: "accordion",
                  header: "Límites y remedios",
                  open: false,
                  items: [
                    {
                      header: "Vicios del consentimiento",
                      text: "Error esencial, dolo, violencia → nulidad/anulabilidad y daños.",
                    },
                    {
                      header: "Ilicitud del objeto",
                      text: "Nulidad absoluta; el medio digital no la sanea.",
                    },
                    {
                      header: "Cláusulas sorpresivas",
                      text: "Control de transparencia y, en su caso, inoponibilidad.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Quinto límite: la alteración extraordinaria de las circunstancias que torna excesivamente onerosa la prestación o frustra la finalidad del contrato. Sin entrar en desarrollos que exceden el módulo, la práctica civil reconoce válvulas como fuerza mayor, imposibilidad sobrevenida o, en ciertos sistemas, teorías de imprevisión que permiten revisión o resolución. Estas válvulas no niegan la fuerza obligatoria; la encauzan ante riesgos sistémicos no asignados. Sexto límite: la protección de personas en situación de vulnerabilidad (menores, incapaces, consumidores hipervulnerables), que impone umbrales reforzados de comprensión y asesoría. Séptimo límite: la ciberseguridad. Un contrato cuyo soporte es atacable sin medidas razonables erosiona su propia ejecutabilidad. La técnica —no la retórica— decide la suerte del vínculo: controles de acceso, integridad documental y sellos confiables.",
                },
                {
                  type: "paragraph",
                  text: "Con todo, la conclusión del curso es firme: la fuerza del contrato se mantiene porque el derecho ha aprendido a exigir lo que importa —prueba y buena fe— y a descartar lo superfluo —rituales vacíos. Implementación práctica: (i) diseñe un flujo de aceptación auditable; (ii) publique términos claros con resumen ejecutivo; (iii) registre y conserve evidencias con metadatos; (iv) notifique y recoja consentimientos renovados ante cambios relevantes; (v) establezca canales de consulta y rectificación pre-cierre. Bajo estas condiciones, hablar de «decadencia» es, en el mejor de los casos, una metáfora imprecisa. El contrato no declina: se afianza en la técnica y en la ética de la transparencia. Esa es la tesis que el material propone y que, en esta cátedra, sostenemos sin titubeos. :contentReference[oaicite:5]{index=5}",
                },
                {
                  type: "accordion",
                  header: "Checklist de fuerza obligatoria hoy",
                  open: false,
                  items: [
                    {
                      header: "Trazabilidad total",
                      text: "Oferta, aceptación, archivo y cambios con sellos y logs.",
                    },
                    {
                      header: "Transparencia real",
                      text: "Precios, renovaciones y penalidades explícitas y visibles.",
                    },
                    {
                      header: "Gobernanza y acceso",
                      text: "Copia íntegra entregada y consulta posterior garantizada.",
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
          href: "https://www.youtube.com/watch?v=s9wmWSSOiVU", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Contrato de hipoteca — https://www.youtube.com/watch?v=s9wmWSSOiVU",
            "La prenda — https://www.youtube.com/watch?v=yprNEKcy6Cg",
            "Código Civil para el Estado de Veracruz de Ignacio de la Llave — https://www.legisver.gob.mx/leyes/LeyesPDF/CCIVIL2911116.pdf",
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
            "Capictant, C. y. (1987). iNstuituciones de derecho civil. México: Porrúa.",
            "Código Civil para el Estado de Veracruz. (s.f.). Obtenido de https://www.legisver.gob.mx/leyes/LeyesPDF/CODIGOCIVIL13062022.pdf",
            "De Pina Vara, R. (1994). Derecho Civil Mexicano. México: Porrúa.",
            "Española, R. a. (2023). Diccionario prehispanico. Obtenido de https://dpej.rae.es/lema/incapaz",
            "Floris Margadant, G. (1997). derecho Romano. México: Esfinge.",
            "Gutiérrez y González, E. (1996). Derecho de las Obligaciones. México: Porrúa.",
            "Latra, J. (2005). Fundamentso de derecho. Mexico: McGraw-hill.",
            "Ramírez, A. (2022). Introducción al derecho civil (4.ª ed.). Editorial Jurídica.",
            "Rojina Villegas, R. (1998). Derecho Civil Mexicano Bienes, Derechos reales y Posesión. Mexico: Porrúa.",
            "Rojina Villegas, R. (2009). Compendio de derecho civil III. México: Porrúa.",
            "Rojina Villegas, R. (2014). Compendio de derecho civil, introduccion personas y familia. Mexico: Porrúa.",
            "ROJINA, V. R. (2008). COMPENDIO DE DERECHO CIVIL II. MÉXICO: PORRÚA.",
            "Treviño Garcia, R. (1995). Los Contratos Civiles y sus generalidades. México: McGraw-Hill.",
            "Vara, D. P. (1965). Diccionario de Derecho. Porrua.",
            "Vazquez, A. C. (2012). Conceptos juridicos fundamentales. mexico: Universidad Nacional Autonoma de Mexico.",
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
