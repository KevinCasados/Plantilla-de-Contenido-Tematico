/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LD", // Licenciatura en Derecho
  courseId: "Derecho Civil V",
  id: "DCV-M2",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Derecho Civil V",
  title:
    "Módulo 2. Contratos traslativos de uso y disfrute, prestación de servicios y asociación",
  semestre: "5.º (Quinto)",
  teacher: "Mtra. Ma. de Lourdes Suárez Hernández",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Que el alumno conozca y domine los conceptos fundamentales de los contratos traslativos de uso y disfrute (especialmente el arrendamiento y el comodato), así como de los contratos de prestación de servicios (depósito, secuestro, mandato y sus variantes), de los contratos profesionales (incluidos obra a precio alzado y hospedaje) y de los contratos de asociación (asociación civil y sociedad civil); identificando definición, elementos, clasificación, derechos y obligaciones, submodalidades y causales de terminación.",
  competencies: [
    "Explicar elementos, clasificación, derechos y obligaciones en el arrendamiento; distinguir subarrendamiento y modos de terminación.",
    "Diferenciar el comodato de los derechos reales de uso y habitación; precisar obligaciones de comodante y comodatario.",
    "Caracterizar los contratos de prestación de servicios: depósito, secuestro y mandato; distinguir sus elementos, obligaciones de mandante/mandatario, efectos frente a terceros, variantes y causales de término.",
    "Reconocer la estructura y particularidades de los contratos profesionales; describir el contrato de obra a precio alzado y el contrato de hospedaje.",
    "Identificar y diferenciar los contratos de asociación: asociación civil y sociedad civil; ubicar su fundamento y finalidades.",
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

    /* 1. Nodo / Unidad principal (agrupa las Unidades 3, 4 y 5 del programa) */
    {
      id: "1",
      numbering: "Unidad 1",
      title:
        "Contratos traslativos de uso y disfrute, prestación de servicios y asociación",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad articula tres bloques que el operador jurídico enfrenta cotidianamente: (i) contratos traslativos de uso y disfrute (arrendamiento y comodato); (ii) contratos de prestación de servicios (depósito, secuestro y mandato, además de los profesionales, obra a precio alzado y hospedaje); y (iii) contratos de asociación (asociación civil y sociedad civil). El objetivo es dominar definiciones, elementos, clasificaciones, derechos y obligaciones, así como causales de terminación y efectos frente a terceros. La ruta combina comprensión conceptual y perspectiva práctica: se estudian los elementos personales (capacidad y representación), reales (objeto, licitud, determinación) y formales (consensualidad, escritura e inscripción cuando proceda), junto con matrices probatorias y de oponibilidad. La expectativa de desempeño es clara: que el estudiante traduzca la teoría en expedientes defendibles, con cláusulas eficaces, evidencia suficiente y remedios proporcionados ante el incumplimiento, preservando la seguridad jurídica del tráfico.",
        },
        {
          type: "paragraph",
          text: "En los **traslativos de uso y disfrute**, el **arrendamiento** destaca por su relevancia social y económica: el arrendador cede uso y goce temporal de un bien a cambio de una renta; el arrendatario paga y conserva la cosa según el destino convenido. Se enfatizan su **definición**, **elementos** (identidad de partes, descripción del bien, precio y forma de pago, inventario, jurisdicción), **clasificación** (bilateral, conmutativo, principal, de tracto sucesivo), **derechos y obligaciones** de las partes, y **términos de conclusión** (vencimiento, acuerdo, pérdida del bien, expropiación), incluyendo reglas prácticas sobre preavisos. En las **especies** se atiende el **subarrendamiento**, condicionado por consentimiento del arrendador y por la congruencia con el destino originalmente pactado. La técnica contractual exige redacción clara, evidencias de entrega/recepción y criterios de conservación, así como documentación de reparaciones y notificaciones para evitar disputas por uso indebido o faltas de pago.",
        },
        {
          type: "paragraph",
          text: "El **comodato** se estudia como préstamo de uso **gratuito** de bien **no fungible**: el comodante entrega para un fin o plazo y el comodatario **devuelve** en el estado debido, asumiendo gastos ordinarios de uso y conservación. Se analizan sus **características** (gratuidad, temporalidad, destino, intransmisibilidad sin consentimiento), requisitos de **validez** (consentimiento, capacidad, objeto cierto y causa lícita) y su **distinción** frente a los **derechos reales de uso y habitación**: en éstos, el titular tiene un goce limitado reconocido como derecho real; en el comodato, opera un vínculo obligacional con deber de restitución y sin transferencia de la titularidad. Se subraya la relevancia de advertir **vicios** preexistentes (responsabilidad del comodante por daños si no informa) y de documentar inventarios y estado del bien al inicio y al cierre. La clave es asegurar trazabilidad del destino y del cumplimiento para reducir litigios.",
        },
        {
          type: "paragraph",
          text: "En **prestación de servicios**, el **depósito** obliga al depositario a **custodiar** y **restituir** la cosa al depositante; el **secuestro** traslada a un tercero la guarda de una cosa **litigiosa** hasta su adjudicación; y el **mandato** faculta a un **mandatario** para gestionar **actos jurídicos** por cuenta (y, si hay representación, a nombre) del **mandante**. Se revisan **características**, **elementos**, **obligaciones recíprocas**, efectos frente a **terceros** (necesidad de poder para oponibilidad), **diversas formas** de mandato (general, especial, judicial, escrito o verbal, otorgado en el extranjero) y **causas de término** (ejecución del encargo, muerte, revocación). En contratos profesionales, se fija el marco de **servicios** con contraprestación y parámetros de independencia técnica; en **obra a precio alzado**, se perfila el precio **fijo** y la asunción de riesgos del contratista; en **hospedaje**, se deslinda el uso de habitaciones, servicios y custodia de efectos.",
        },
        {
          type: "paragraph",
          text: "En **contratos de asociación**, la **asociación civil** persigue fines **no lucrativos** y se apoya en la libertad de asociación (marco constitucional y de derechos humanos); la **sociedad civil** organiza aportaciones para fines comunes, con vocación de participación en resultados sin regirse por el derecho mercantil. Se precisan elementos estatutarios (denominación, objeto, patrimonio, domicilio, órganos), personalidad y patrimonio propios, y reglas de responsabilidad. La comparación funcional permite elegir la figura idónea según el fin perseguido, estructura de gobierno y fuentes de recursos. Al cierre, el estudiante debe ser capaz de: (i) calificar con rigor la figura aplicable; (ii) diseñar **cláusulas** y **evidencia** que aseguren oponibilidad; y (iii) anticipar **remedios** y **causales de terminación** proporcionadas, manteniendo la coherencia entre voluntad privada y orden público.",
        },
        {
          type: "accordion",
          header: "Mapa de estudio de la Unidad",
          open: false,
          items: [
            {
              header: "Nivel 1 · Traslativos de uso y disfrute",
              text: "Arrendamiento: definición, elementos, clasificación, derechos/obligaciones, término y subarrendamiento. Comodato: gratuidad, no fungibilidad, destino, restitución y distinción frente a uso/habitación.",
            },
            {
              header: "Nivel 2 · Prestación de servicios",
              text: "Depósito y secuestro: custodia y litigiosidad. Mandato: elementos, poderes frente a terceros, formas y término. Profesionales, obra a precio alzado y hospedaje: alcance, riesgos y documentación.",
            },
            {
              header: "Nivel 3 · Asociación civil y sociedad civil",
              text: "Fines, estatutos, órganos y responsabilidad. Criterios de elección de figura, personalidad y patrimonio. Coherencia con marco constitucional y de DD. HH.",
            },
          ],
        },
      ],

      /* → Temas según índice oficial */
      subthemes: [
        /* 3. CONTRATOS TRASLATIVOS DE USO Y DISFRUTE */
        {
          id: "1.3",
          numbering: "3",
          title: "Contratos traslativos de uso y disfrute",
          content: [
            {
              type: "paragraph",
              text: "Los contratos traslativos de uso y disfrute regulan la cesión temporal del uso o goce de bienes, sin transmitir la propiedad. En este bloque se estudian, principalmente, el arrendamiento y el comodato. El primero es un contrato oneroso de tracto sucesivo por el que el arrendador concede el uso o goce de un bien al arrendatario a cambio de una renta; el segundo es gratuito y recae sobre bienes no fungibles, imponiendo al comodatario el deber de restituir la misma cosa al término. La función práctica de estas figuras es capital: habilitan la circulación económica y social de viviendas, locales, maquinaria, vehículos y otros bienes, alineando utilidad privada con interés público mediante reglas mínimas de seguridad jurídica (identificación de partes, objeto, destino y plazo; precio, si lo hay; y previsiones de conservación y restitución). La distinción entre ambos no es meramente nominal: impacta en el régimen de riesgos, en el estándar de diligencia aplicable y en la asignación de gastos ordinarios o extraordinarios. Además, las legislaciones civiles exigen formas reforzadas (por ejemplo, escritura e inscripción en ciertos supuestos inmobiliarios) para garantizar oponibilidad frente a terceros y certeza probatoria.",
            },
            {
              type: "paragraph",
              text: "El arrendamiento, por su masiva utilización, concentra una tipología rica: puede ser urbano o rústico, de vivienda o de uso distinto (comercial, industrial, profesional), de bienes muebles o inmuebles, e incluso de obra o servicios cuando la ley lo prevé. Su estructura básica incluye: (i) elementos personales (capacidad de goce y de ejercicio; representación válida), (ii) elementos reales (bien determinado o determinable, lícito y apto para el destino pactado), y (iii) elementos formales (consenso suficiente y, cuando proceda, formalidades que aseguren prueba y oponibilidad). El precio o renta debe ser cierto o determinable y vincularse a un calendario de pago, reglas de actualización y remedios ante mora. La praxis contractual demanda inventARIO de estado y accesorios, reglas de conservación (reparaciones ordinarias/extraordinarias), delimitación de cargas (impuestos, servicios, cuotas) y cláusulas de terminación anticipada con preavisos proporcionales. En locales y naves, el destino económico pactado delimita el estándar de uso, las cargas de adecuación y las consecuencias del cambio de giro sin consentimiento.",
            },

            /* ——— Acordeón 1 ——— */
            {
              type: "accordion",
              header: "Marco normativo mínimo (guía rápida)",
              open: false,
              items: [
                {
                  header: "Arrendamiento",
                  text: "Definición, elementos, clasificación; derechos y obligaciones; terminación; especies (incluye subarrendamiento); documentación: contrato, inventario, recibos, notificaciones.",
                },
                {
                  header: "Comodato",
                  text: "Gratuidad, bien no fungible y destino; obligaciones de conservación y restitución; diferencia frente a uso y habitación; constancias de entrega y estado.",
                },
                {
                  header: "Oponibilidad y prueba",
                  text: "Escritura/inscripción cuando proceda; identificación del bien (linderos, cabida, número de serie); trazabilidad de pagos; avisos previos y actas de entrega.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "El comodato, por contraste, opera como préstamo de uso gratuito sobre cosas no fungibles; la gratuidad es su rasgo cardinal, pues si existiera renta nos desplazaríamos al arrendamiento. El comodante entrega la cosa para un fin y tiempo determinados; el comodatario debe utilizarla conforme al destino convenido, conservarla con la diligencia debida y restituirla en el estado recibido, respondiendo por deterioros imputables a culpa o uso diferente. La obligación de asumir los gastos ordinarios de uso y conservación suele recaer en el comodatario, en tanto que los extraordinarios corresponden, por regla, al comodante salvo pacto en contrario. La identificación del bien y del propósito del préstamo evita disputas sobre excesos de uso (por ejemplo, utilización profesional de un bien prestado para fines domésticos). En su dimensión probatoria, aun cuando la figura es consensual, la constancia escrita con inventario de estado, fotografías y plazos reduce la litigiosidad y facilita la restitución. La restitución tardía, además, puede generar responsabilidad por frutos y daños, según la normativa aplicable.",
            },
            {
              type: "paragraph",
              text: "La clasificación funcional de estos contratos se articula alrededor de su onerosidad (oneroso/gratuito), duración (plazo fijo/indeterminado), naturaleza del bien (mueble/inmueble; registrable/no registrable), y destino (habitacional, comercial, industrial). En arrendamiento, el subarrendamiento exige, como regla, consentimiento del arrendador y no puede exceder derechos ni plazos del contrato principal. Las partes deben atender a la compatibilidad entre destino y normatividad urbanística o administrativa (uso de suelo, licencias, reglamentos de condominio), pues el incumplimiento puede convertir una ocupación en ilícita o dar lugar a terminación anticipada. Por su parte, el comodato puede revocarse cuando el comodatario incurre en abuso o se incumplen condiciones esenciales. La técnica de redacción debe prever: (i) asignación de riesgos por caso fortuito y fuerza mayor, (ii) seguros y coberturas, (iii) reglas de inspección y acceso del arrendador, (iv) facultades de cesión y prohibiciones, y (v) remedios escalonados ante incumplimientos, privilegiando la conservación del valor del bien.",
            },

            /* ——— Acordeón 2 ——— */
            {
              type: "accordion",
              header: "Checklist operativo para la práctica",
              open: false,
              items: [
                {
                  header: "Antes de firmar",
                  text: "Identificar titularidad y cargas del bien; verificar destino permitido; pactar precio/renta o gratuidad; documentar estado e inventario; definir garantías y seguros.",
                },
                {
                  header: "Durante la ejecución",
                  text: "Calendario de pagos o uso; mantenimiento y reparaciones; avisos y autorizaciones (subarrendo, modificaciones); inspecciones razonables; conservación de evidencia.",
                },
                {
                  header: "Terminación y entrega",
                  text: "Preavisos; acta de entrega; liquidación de adeudos y daños; liberación de garantías; cancelación/inscripción cuando proceda; conservación de archivo probatorio.",
                },
              ],
            },

            {
              type: "paragraph",
              text: "Los derechos y obligaciones nucleares se sintetizan así: en arrendamiento, el arrendador debe entregar la cosa en estado de servir al uso convenido, mantenerla en ese estado durante el plazo, garantizar el goce pacífico y responder por vicios que la hagan impropia; el arrendatario debe pagar la renta, usar conforme al destino, conservar y restituir. En comodato, el comodatario asume el estándar de diligencia y la restitución; el comodante, los gastos extraordinarios y la información sobre vicios. La morosidad en renta habilita remedios como intereses, resolución o desocupación según procedimiento aplicable; la negativa a restituir en comodato puede aparejar indemnización por daños y frutos. En bienes registrables, la publicidad registral de ciertas cesiones o contratos (según legislación aplicable) refuerza oponibilidad y previene conflictos con acreedores o adquirentes de buena fe. La asignación de riesgos, la previsión de garantías (depósitos, fianzas) y la claridad en notificaciones son determinantes para un cierre ordenado.",
            },
            {
              type: "paragraph",
              text: "Un enfoque práctico exige traducir estos principios en cláusulas concretas y comprobables. Para arrendamientos de vivienda: describir con precisión el inmueble, anexar inventario con fotografías, delimitar quién asume servicios y cuotas, fijar reglas de mascotas y mejoras. En usos comerciales: contemplar adecuaciones, licencias, publicidad, horarios, convivencia con condóminos y límites al cambio de giro. En comodatos: establecer fin específico, horario de uso, medidas de seguridad y custodia, protocolos de devolución. En todos los casos: (i) establecer mecanismos de solución de controversias (negociación, mediación y, en su caso, jurisdicción competente), (ii) definir causales de terminación y sus efectos, (iii) ordenar la forma de notificar (domicilios convencionales y medios electrónicos) y (iv) proteger datos personales cuando se traten en el marco del contrato. La coherencia interna del instrumento —entre objeto, destino, cargas y remedios— es la mejor defensa para evitar nulidades y litigios innecesarios.",
            },
            {
              type: "paragraph",
              text: "Finalmente, debe recordarse que estos contratos interactúan con otros ámbitos: fiscal (retenciones o comprobación de rentas), administrativo (uso de suelo, protección civil), de propiedad horizontal (reglamentos de condominio y asambleas), e incluso con seguros (cobertura de responsabilidad civil, incendio, robo). La coordinación entre el contrato y esas capas normativas previene fricciones y costos. La documentación continua —recibos, reportes de mantenimiento, comunicaciones— construye la evidencia que, en caso de controversia, permitirá acreditar cumplimiento o incumplimiento. En suma, los traslativos de uso y disfrute son herramientas de organización social cuyo valor jurídico y económico se potencia mediante redacción técnica, formalidades adecuadas y disciplina probatoria desde el día uno hasta la entrega final.",
            },

            // Nota: el PDF base no incluye imágenes específicas para este tema; por ello no se inserta bloque {type:"image"}.
          ],

          subthemes: [
            /* 3.1 El arrendamiento */
            {
              id: "1.3.1",
              numbering: "3.1",
              title: "El arrendamiento",
              content: [
                {
                  type: "paragraph",
                  text: "Importancia, definición, elementos y clasificación del arrendamiento; derechos y obligaciones; especies y modos de terminación.",
                },
              ],
              subthemes: [
                {
                  id: "1.3.1.1",
                  numbering: "3.1.1",
                  title: "Su importancia teórica y práctica",
                  content: [
                    {
                      type: "paragraph",
                      text: "El arrendamiento es una de las figuras contractuales de mayor uso social: permite al titular de un bien ceder su uso o goce a un tercero a cambio de una renta, habilitando vivienda, comercio, industria y servicios sin requerir transmisión de la propiedad. Teóricamente, expresa una visión conmutativa del intercambio —prestaciones recíprocas y equilibrio— y, en la práctica, impone estándares de previsión probatoria, asignación de riesgos y cumplimiento escalonado en el tiempo. Su masificación exige reglas claras de identificación del bien, determinación de renta, destino pactado y mecanismos de terminación, porque en el arrendamiento confluyen intereses particulares y consideraciones de orden público (habitabilidad, seguridad, uso de suelo). Así, su importancia no es solo dogmática: es un instrumento de política habitacional y de dinamización económica, cuya correcta documentación reduce litigios y mejora la confianza en el tráfico jurídico.",
                    },
                    {
                      type: "paragraph",
                      text: "Desde la perspectiva operativa, el contrato organiza derechos y deberes: el arrendador entrega y garantiza el goce pacífico; el arrendatario paga puntualmente, usa conforme al destino y restituye en el estado debido. El carácter de tracto sucesivo exige prever calendarios de pago, ajustes, notificaciones y remedios ante la mora; la experiencia demuestra que inventarios de estado y cláusulas de mantenimiento disminuyen controversias sobre desperfectos y cargos. En sectores productivos, el arrendamiento permite acceder a activos (naves, maquinaria) sin descapitalizarse; en el ámbito de vivienda, facilita movilidad y adecuación a necesidades familiares. Para que esa función social se cumpla, el operador jurídico debe traducir los principios en cláusulas verificables y evidencia robusta (recibos, avisos, actas), alineadas con la normativa civil y administrativa aplicable.",
                    },
                    {
                      type: "accordion",
                      header: "Claves de impacto",
                      open: false,
                      items: [
                        {
                          header: "Dimensión social",
                          text: "Satisface necesidades habitacionales y productivas sin traspaso de dominio; favorece movilidad y acceso.",
                        },
                        {
                          header: "Dimensión económica",
                          text: "Asigna recursos eficientemente: el propietario monetiza su bien; el usuario despliega actividad sin inmovilizar capital.",
                        },
                        {
                          header: "Dimensión jurídica",
                          text: "Requiere prueba, publicidad cuando proceda, y remedios proporcionados ante incumplimientos.",
                        },
                      ],
                    },
                    {
                      type: "accordion",
                      header: "Buenas prácticas (síntesis)",
                      open: false,
                      items: [
                        {
                          header: "Antes",
                          text: "Verificar titularidad y cargas del bien; definir destino; fijar renta y garantías; preparar inventario y reglas de conservación.",
                        },
                        {
                          header: "Durante",
                          text: "Calendario de pagos; mantenimiento; inspecciones razonables; registros de comunicaciones.",
                        },
                        {
                          header: "Cierre",
                          text: "Preaviso, acta de entrega, liquidación de adeudos/daños y liberación de garantías.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "1.3.1.2",
                  numbering: "3.1.2",
                  title: "Definición",
                  content: [
                    {
                      type: "paragraph",
                      text: "El arrendamiento es el acuerdo por el cual una persona física o moral (arrendador) concede a otra (arrendatario) el uso o goce temporal de un bien mueble o inmueble —o, en ciertos marcos, de una obra o servicio— a cambio de una renta cierta o determinable. La esencia es la cesión temporal sin enajenación: el arrendatario adquiere facultades de uso conforme al destino convenido, no la titularidad. En tanto contrato bilateral, oneroso, conmutativo y de tracto sucesivo, genera obligaciones recíprocas y continuadas, cuya ejecución debe armonizarse con la normativa civil y, cuando proceda, con reglas administrativas (uso de suelo, seguridad, propiedad en condominio).",
                    },
                    {
                      type: "paragraph",
                      text: "Esta definición impone elementos mínimos de validez y eficacia: (i) capacidad de goce y de ejercicio de las partes, o representación válida; (ii) objeto lícito, posible y determinado o determinable, con individualización suficiente del bien; y (iii) precio o renta cierto o determinable, fijado con criterios objetivos (monto, periodicidad, actualización). La forma escrita, aunque el contrato sea consensual, opera como matriz probatoria y, tratándose de inmuebles o bienes registrables, puede requerirse formalidad reforzada (escritura/inscripción) para asegurar oponibilidad. Por su naturaleza finalista, la definición siempre remite al “para qué”: el destino pactado es la guía de uso permitido y del estándar de conservación exigible.",
                    },
                    {
                      type: "accordion",
                      header: "Elementos definitorios",
                      open: false,
                      items: [
                        {
                          header: "Temporalidad",
                          text: "Cesión de uso/goce por tiempo determinado o determinable.",
                        },
                        {
                          header: "Renta",
                          text: "Precio cierto o determinable, calendario y forma de pago.",
                        },
                        {
                          header: "Destino",
                          text: "Cláusula que limita el uso y orienta conservación y riesgos.",
                        },
                      ],
                    },
                    {
                      type: "accordion",
                      header: "Zonas grises típicas",
                      open: false,
                      items: [
                        {
                          header: "Arrendamiento vs. comodato",
                          text: "La renta distingue; sin contraprestación, será comodato.",
                        },
                        {
                          header: "Uso distinto al pactado",
                          text: "Puede habilitar rescisión o ajustes si compromete la cosa o su licitud.",
                        },
                        {
                          header: "Bien ajeno",
                          text: "La falta de legitimación del arrendador genera ineficacia y responsabilidades.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "1.3.1.3",
                  numbering: "3.1.3",
                  title: "Elementos",
                  content: [
                    {
                      type: "paragraph",
                      text: "Los elementos de un arrendamiento sólido abarcan lo personal, lo real y lo formal. En lo personal, identificación completa de arrendador y arrendatario (nombres, domicilios convencionales, datos de contacto) y, si procede, fiador o garante. En lo real, descripción precisa del bien: ubicación y linderos en inmuebles; marca, modelo y número de serie en muebles; inventario de accesorios y estado. Debe consignarse el destino (vivienda, local comercial, industrial), la renta, periodicidad, forma de pago y reglas de actualización. En lo formal, además de la firma, convienen anexos probatorios (inventario con fotografías, actas de entrega/recepción) y, cuando corresponda, escritura e inscripción para reforzar oponibilidad.",
                    },
                    {
                      type: "paragraph",
                      text: "La experiencia práctica muestra que detallar mantenimiento ordinario y extraordinario, distribución de cargas (impuestos, cuotas, servicios), reglas de autorización para mejoras o adecuaciones, inspecciones razonables y protocolo de notificaciones disminuye litigios. En controversias, la prueba documental (recibos, avisos, actas) y la coherencia entre cláusulas —objeto, destino, cargas y remedios— suelen definir el desenlace. En contratos de uso profesional o industrial, es imprescindible verificar compatibilidad con normatividad urbanística y de seguridad (uso de suelo, protección civil) y ajustar seguros, garantías y estándares de conservación al nivel de riesgo.",
                    },
                    {
                      type: "accordion",
                      header: "Checklist mínimo",
                      open: false,
                      items: [
                        {
                          header: "Partes y garantías",
                          text: "Identidad y domicilios; fiador/fianza si procede; facultades de representación.",
                        },
                        {
                          header: "Bien y destino",
                          text: "Descripción exhaustiva; inventario y estado; uso permitido.",
                        },
                        {
                          header: "Renta y pagos",
                          text: "Monto, calendario, actualización, penalidades y medios de pago.",
                        },
                      ],
                    },
                    {
                      type: "accordion",
                      header: "Evidencia útil",
                      open: false,
                      items: [
                        {
                          header: "Antes",
                          text: "Fotos y acta de entrega; comprobantes de situación jurídica del bien.",
                        },
                        {
                          header: "Durante",
                          text: "Recibos, reportes de mantenimiento, comunicaciones.",
                        },
                        {
                          header: "Cierre",
                          text: "Acta de devolución, liquidación de adeudos y liberaciones.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "1.3.1.4",
                  numbering: "3.1.4",
                  title: "Clasificación",
                  content: [
                    {
                      type: "paragraph",
                      text: "Dogmáticamente, el arrendamiento se clasifica como bilateral, oneroso, conmutativo, principal, consensual (con exigencias formales según el caso), nominado y de tracto sucesivo. Funcionalmente, atendiendo al bien y al destino, distingue arrendamientos de vivienda, de local o negocio, industriales, de plaza de garaje, de inmueble de temporada, de finca rústica, así como de vehículos y maquinaria. Cada especie conlleva matices: en vivienda, reglas de habitabilidad y convivencia; en locales, compatibilidad con uso de suelo, licencias y adecuaciones; en rústicos, ciclos, labores y riesgos propios; en maquinaria, estándares de mantenimiento y seguros. Además, en la práctica conviven figuras como el arrendamiento operativo o financiero (según el régimen aplicable) y pactos de opción de compra, que exigen redacción cuidadosa para no desnaturalizar la tipicidad.",
                    },
                    {
                      type: "paragraph",
                      text: "Estas categorías no son solo taxonomía; orientan prueba y responsabilidad. Por ejemplo, en inmuebles puede requerirse escritura e inscripción para oponer frente a terceros; en uso comercial, el cambio de giro sin consentimiento puede configurar incumplimiento grave; en rústicos, la pérdida de frutos por caso fortuito demanda pactos de asignación de riesgos. La previsión de subarrendamiento —siempre subordinado al consentimiento del arrendador y a no exceder derechos del contrato principal—, la cesión de posición contractual y los límites a mejoras y transformaciones completan la arquitectura clasificatoria útil para el foro.",
                    },
                    {
                      type: "accordion",
                      header: "Mapa de especies",
                      open: false,
                      items: [
                        {
                          header: "Por bien",
                          text: "Muebles (vehículos, maquinaria) • Inmuebles (vivienda, local, industrial, rústico).",
                        },
                        {
                          header: "Por destino",
                          text: "Habitacional • Comercial • Industrial • Temporal.",
                        },
                        {
                          header: "Figuras afines",
                          text: "Operativo/financiero • Opción de compra (cláusulas especiales).",
                        },
                      ],
                    },
                    {
                      type: "accordion",
                      header: "Riesgos y cautelas por especie",
                      open: false,
                      items: [
                        {
                          header: "Vivienda",
                          text: "Habitabilidad, convivencia, inventario y depósitos.",
                        },
                        {
                          header: "Comercial/industrial",
                          text: "Licencias, uso de suelo, adecuaciones y seguros.",
                        },
                        {
                          header: "Rústico",
                          text: "Ciclos y asignación de riesgos sobre frutos y labores.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "1.3.1.5",
                  numbering: "3.1.5",
                  title:
                    "Derechos y obligaciones del arrendador y del arrendatario",
                  content: [
                    {
                      type: "paragraph",
                      text: "El eje del arrendamiento es el intercambio equilibrado entre la **renta** y el **goce pacífico** del bien. En ese marco, los **derechos del arrendador** comprenden, de manera central, **recibir el pago** en el tiempo, lugar y monto convenidos; exigir la **congruencia del uso** con el destino pactado; ser **informado** de necesidades de reparación y, en supuestos de incumplimiento sustantivo, **dar por terminado** el contrato. Correspondientemente, los **derechos del arrendatario** incluyen recibir la cosa **apta** para el uso estipulado y **gozar** de ella pacíficamente durante toda la vigencia. Estas líneas generales, explicitadas en el material de estudio, deben traducirse en cláusulas claras sobre renta, conservaciones, comunicación de vicios y remedios, a fin de minimizar la litigiosidad y asegurar previsibilidad en la ejecución del contrato. :contentReference[oaicite:1]{index=1}",
                    },
                    {
                      type: "paragraph",
                      text: "En el **arrendador** recaen, como **obligaciones** nucleares, (i) **entregar** el bien en condiciones de servir al destino pactado; (ii) **mantenerlo** en ese estado durante el plazo —asumiendo las **reparaciones extraordinarias**— y (iii) garantizar el **goce pacífico**, respondiendo por evicción y por **vicios** que hagan impropia la cosa. El arrendador debe, además, respetar la esfera de uso del arrendatario, coordinando **inspecciones razonables** y acceso para reparaciones, con **avisos** previos y en horarios acordados. En inmuebles, es recomendable informar cargas y limitaciones (hipotecas, servidumbres, reglamentos de condominio), pues inciden en el goce. Estas prestaciones, si se documentan con actas de entrega, inventarios y constancias de reparación, constituyen prueba útil para acreditar cumplimiento y deslindar responsabilidades ante eventuales reclamos.",
                    },

                    /* — Acordeón 1 — */
                    {
                      type: "accordion",
                      header: "Derechos & obligaciones — Vista rápida",
                      open: false,
                      items: [
                        {
                          header: "Arrendador",
                          text: "Cobro de renta; goce pacífico; terminación por incumplimiento; deber de entrega y reparaciones extraordinarias.",
                        },
                        {
                          header: "Arrendatario",
                          text: "Recibir bien apto; uso conforme al destino; conservación ordinaria; restitución en el estado debido.",
                        },
                        {
                          header: "Comunicación",
                          text: "Aviso de vicios y de reparaciones; notificaciones con domicilio convencional y medio electrónico.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "Por su parte, el **arrendatario** debe **pagar la renta** en el calendario pactado; **usar** la cosa conforme al **destino**; **conservarla** con diligencia y **restituirla** al término. Asume, como regla, las **reparaciones ordinarias** (uso y desgaste) y los **gastos** vinculados a su actividad (servicios, consumos), mientras que las extraordinarias —estructurales o ajenas al uso— gravitan sobre el arrendador, salvo pacto en contrario. El arrendatario debe **informar oportunamente** sobre vicios o daños y **permitir** las intervenciones técnicas necesarias; ocultar fallas o impedir reparaciones puede traducirse en incumplimiento. El estándar de diligencia se eleva cuando el destino implica mayor riesgo (uso comercial/industrial), supuesto en el que conviene pactar **seguros** y reglas sobre **mejoras** o **adecuaciones**.",
                    },
                    {
                      type: "paragraph",
                      text: "El **uso conforme** al destino no es formalismo: delimita **riesgos** y **responsabilidad**. Un local pactado para giro comercial específico no puede mudarse a actividad riesgosa sin consentimiento; un inmueble de vivienda no debe destinarse a bodega o taller pesado. La **variación unilateral** del destino puede configurar causa de **rescisión** o activación de **remedios** (multas, vencimiento anticipado). Para evitar zonas grises, el contrato debe fijar una **cláusula de destino** precisa, prever **autorizaciones** escritas para cambios y establecer métricas de **conservación** (p. ej., reportes de mantenimiento). Esta gobernanza del uso protege la integridad del bien y la seguridad de terceros.",
                    },

                    /* — Acordeón 2 — */
                    {
                      type: "accordion",
                      header: "Riesgos y remedios",
                      open: false,
                      items: [
                        {
                          header: "Mora en renta",
                          text: "Intereses moratorios; imputación de pagos; cláusula penal proporcionada; eventual rescisión.",
                        },
                        {
                          header: "Uso indebido",
                          text: "Requerimiento de cese; plazos de corrección; rescisión si persiste; indemnización por daños.",
                        },
                        {
                          header: "Vicios/evicción",
                          text: "Obligación del arrendador de sanear o reparar; reducción de renta o terminación si la cosa deviene impropia.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "El **régimen de notificaciones** y **evidencias** es vertebral: los **recibos** de renta, las **comunicaciones** de mantenimiento, las **actas** de entrega/recepción y la **documentación** de reparaciones constituyen la matriz probatoria del cumplimiento o incumplimiento. Igual relevancia tienen los **domicilios convencionales** y la habilitación de **medios electrónicos** (correo institucional) para notificar. La trazabilidad documental reduce controversias sobre si se pagó, se avisó o se reparó y facilita la tutela judicial o convencional (mediación, arbitraje) cuando la relación se deteriora. Una arquitectura probatoria robusta suele ser decisiva en la práctica forense.",
                    },
                    {
                      type: "paragraph",
                      text: "En suma, la distribución de **derechos y obligaciones** preserva la **conmutatividad** del contrato: el arrendador monetiza el uso de su bien sin perder la propiedad; el arrendatario accede al disfrute pacífico sin inmovilizar capital. Esta simetría requiere **redacción técnica**, disciplina de **cumplimiento** y una **cultura de evidencias**. La ventaja práctica: menos litigios, mayor previsibilidad y seguridad del tráfico, tal como enfatiza el material del módulo para los efectos y límites de las partes en el arrendamiento. :contentReference[oaicite:2]{index=2}",
                    },
                  ],
                },
                {
                  id: "1.3.1.6",
                  numbering: "3.1.6",
                  title: "Término del arrendamiento",
                  content: [
                    {
                      type: "paragraph",
                      text: "El **término** del arrendamiento responde a causas **objetivas** y **convencionales**. Entre las primeras: **vencimiento del plazo**; **pérdida o destrucción** de la cosa por caso fortuito o fuerza mayor; **expropiación** por causa de utilidad pública; e **imposibilidad sobrevenida** que frustre la finalidad. Entre las segundas: **acuerdo expreso** de las partes y **rescisión** por incumplimiento. El material docente puntualiza, además, reglas de **aviso previo**: si el arrendador pretende terminar, debe **notificar** con **tres meses de anticipación**; si no se hubiese fijado plazo, la ley **permite un año**; cuando el contrato **no se celebró por tiempo determinado**, cualquiera de las partes puede extinguirlo con **15 días** de anticipación en **predios urbanos** y con **un año** en **rústicos**, criterios que orientan la práctica. :contentReference[oaicite:3]{index=3}",
                    },
                    {
                      type: "paragraph",
                      text: "El **vencimiento del plazo** es la hipótesis típica: opera por ministerio del contrato. Para evitar reconducciones tácitas o reclamaciones, conviene **preavisar** por escrito y, llegado el día, realizar **acta de entrega** con lectura de **medidores**, verificación de **estado** e identificación de **pendientes** (daños, adeudos). Cuando el término obedece a **pérdida** o **expropiación**, el cierre requiere acreditar el **evento** (dictámenes, resoluciones) y ajustar **liquidaciones** por rentas devengadas. En ambos supuestos, la liquidación ordenada reduce disputas y acelera la restitución del bien al arrendador.",
                    },

                    /* — Acordeón 1 — */
                    {
                      type: "accordion",
                      header: "Causas de término — Esquema",
                      open: false,
                      items: [
                        {
                          header: "Objetivas",
                          text: "Vencimiento; pérdida/destrucción; expropiación; imposibilidad sobrevenida.",
                        },
                        {
                          header: "Convencionales",
                          text: "Acuerdo expreso; rescisión por incumplimiento.",
                        },
                        {
                          header: "Avisos",
                          text: "3 meses (fin anticipado del arrendador); 1 año (si no hubo plazo); 15 días urbano/1 año rústico sin plazo.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "La **rescisión** exige un **incumplimiento** relevante que frustre el equilibrio del contrato: **falta de pago** reiterada, **uso contra el destino** pactado, **subarrendamiento** sin consentimiento, **daños graves** o **variaciones** sustantivas de la cosa sin autorización. La técnica recomienda escalonar remedios: **requerimiento** fehaciente, **plazo de corrección**, y, de persistir el incumplimiento, **terminación** y, en su caso, **indemnización**. Esta gradación muestra buena fe y suele ser apreciada por tribunales o por el árbitro, además de reducir costos relacionales.",
                    },
                    {
                      type: "paragraph",
                      text: "Cuando el contrato es **indeterminado**, las reglas de **aviso previo** cobran protagonismo. La práctica recomienda pactar **plazos mayores** a los mínimos legales para operaciones complejas (locales comerciales o industriales), considerando desinstalaciones, restitución de adecuaciones y cierre de servicios. En vivienda, un preaviso razonable evita tensiones y permite reacomodos. Siempre que exista **depósito en garantía** o **fianza**, el cierre debe documentar **deducciones** fundadas (daños, rentas pendientes) y la **devolución** del remanente, con evidencia fotográfica y actas firmadas por las partes.",
                    },

                    /* — Acordeón 2 — */
                    {
                      type: "accordion",
                      header: "Cierre ordenado — Checklist",
                      open: false,
                      items: [
                        {
                          header: "Preaviso y forma",
                          text: "Plazos, medio de notificación y domicilios convencionales.",
                        },
                        {
                          header: "Acta de entrega",
                          text: "Estado del bien; medidores; inventario; llaves y accesos.",
                        },
                        {
                          header: "Liquidación",
                          text: "Rentas/devengos; daños; devolución de depósito; cancelación de garantías.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "La **documentación** del término es tan importante como la contratación: además del **acta de entrega**, anexar **evidencia fotográfica**, **recibos** de pago y **constancias** de cancelación de garantías (fianzas, pólizas). Si existieron **adecuaciones** autorizadas, precisar si **quedan** o **se retiran** y quién asume el costo de restitución. En edificios o parques industriales, coordinar con **administración** (condominio, parque) la **liberación** de tarjetas de acceso, estacionamientos y servicios para evitar cargos posteriores.",
                    },
                    {
                      type: "paragraph",
                      text: "En resumen, terminar bien un arrendamiento es una cuestión de **gobernanza**: reglas claras, avisos a tiempo y **evidencia** suficiente. El material del módulo fija los **estándares de preaviso** y las **causas** más comunes; el operador jurídico debe convertirlos en **procedimientos**: cronogramas, minutas y actas, de modo que la finalización resulte **previsible, verificable y defendible** ante terceros. :contentReference[oaicite:4]{index=4}",
                    },
                  ],
                },
                {
                  id: "1.3.1.7",
                  numbering: "3.1.7",
                  title: "Especies de arrendamiento",
                  content: [
                    {
                      type: "paragraph",
                      text: "La tipología del arrendamiento responde al bien y al destino pactado. En lo esencial, podemos distinguir: (i) **vivienda**; (ii) **local o uso distinto del habitacional** (comercial, profesional, industrial); (iii) **rústico** (aprovechamiento agrícola/ganadero/forestal) y (iv) **muebles** (vehículos, maquinaria y equipos). También existe el arrendamiento **de temporada** (uso intensivo y breve) y combinaciones que, sin desnaturalizar la figura, exigen cláusulas específicas (p. ej., locales en condominios, naves en parques industriales). Esta clasificación no es meramente taxonómica: determina estándares de **habitabilidad**, **seguridad**, **seguros**, **mantenimiento** y **publicidad** (escritura/inscripción cuando proceda) para asegurar oponibilidad. Un mismo eje conceptual —uso o goce temporal a cambio de renta— se despliega en regímenes probatorios y operativos distintos según riesgos y cargas, con implicaciones en remedios y terminación. El material del módulo enfatiza esa diversidad práctica para traducirla en expedientes defendibles. :contentReference[oaicite:1]{index=1}",
                    },
                    {
                      type: "paragraph",
                      text: "**Vivienda.** Requiere cláusulas de **habitabilidad** y **conservación**: inventario con fotografías, estado inicial, reglas de pequeñas reparaciones (ordinarias vs. extraordinarias), depósito en garantía, y política de mascotas y subocupación. La renta debe ser **cierta** o determinable, con calendario, actualizaciones lícitas y medios de pago trazables. El **destino habitacional** prohíbe usos incompatibles (bodega, taller riesgoso), y el reglamento de condominio —cuando exista— integra el contrato (ruidos, horarios, uso de áreas comunes). La terminación demanda **preaviso** y acta de entrega con lectura de **medidores** y liquidación de adeudos. En vivienda de interés social o arrendamientos masivos, conviene normalizar formatos y checklists para reducir litigiosidad y tiempos de conflicto. La prueba documental (recibos, notificaciones, actas) es decisiva para acreditar cumplimiento o mora y, en su caso, facilitar medidas de desocupación conforme al procedimiento aplicable.",
                    },

                    {
                      type: "accordion",
                      header: "Vivienda — Puntos finos",
                      open: false,
                      items: [
                        {
                          header: "Conservación",
                          text: "Reparaciones ordinarias vs. extraordinarias; inventario y evidencias fotográficas.",
                        },
                        {
                          header: "Convivencia",
                          text: "Reglamentos, ruidos, mascotas, subocupación y usos prohibidos.",
                        },
                        {
                          header: "Cierre",
                          text: "Preavisos, acta de entrega, medidores y devolución de depósito.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "**Local comercial/profesional.** El **uso de suelo** y las **licencias** son críticos: el cambio de giro sin consentimiento es incumplimiento grave. Debe pactarse quién costea **adecuaciones** y cómo se revertirán al cierre (quedan o se retiran); prever **seguros** (responsabilidad civil, incendio, daños a terceros) y reglas de **publicidad**/anuncios. En centros o condominios comerciales, las **cuotas** y reglamentos de administración forman parte del contrato; conviene fijar aforos, horarios, logística de carga/descarga y ruido. La renta puede vincularse a parámetros mixtos (fijo + variable sobre ventas, cuando el marco lo permita), exigiendo **auditoría** de reportes. Estándares de limpieza, residuos y seguridad protegen la continuidad del negocio y la integridad del inmueble.",
                    },
                    {
                      type: "paragraph",
                      text: "**Industrial.** Implica riesgos superiores: procesos, químicos, tránsito de maquinaria. El contrato debe prever **cumplimiento regulatorio** (protección civil, ambiental), **seguros robustos**, **mantenimiento** programado y protocolos de **accidentes**. Las reparaciones **estructurales** son del arrendador, pero las derivadas del giro corresponden usualmente al arrendatario. La delimitación del **área arrendada**, servidumbres internas (pasos, andenes) y responsabilidades por áreas comunes es esencial. En parques industriales, la administración impone reglas (ruidos, emisiones, horarios) que deben incorporarse expresamente. La terminación exige desinstalación segura, retiro de residuos y, en su caso, certificaciones de saneamiento para evitar responsabilidades post-cierre.",
                    },

                    {
                      type: "accordion",
                      header: "Comercial/industrial — Checklist",
                      open: false,
                      items: [
                        {
                          header: "Regulatorio",
                          text: "Uso de suelo, licencias, protección civil, ambiente.",
                        },
                        {
                          header: "Adecuaciones",
                          text: "Autorizaciones, propiedad de mejoras, restitución.",
                        },
                        {
                          header: "Seguros y riesgos",
                          text: "Coberturas mínimas, deducibles, responsabilidad frente a terceros.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "**Rústico.** La estacionalidad manda: ciclos agrícolas, riesgos climáticos y pérdida de frutos deben tratarse con una **asignación de riesgos** explícita. El destino (siembra, pastoreo, plantaciones) condiciona labores y responsabilidades. Conviene pactar **accesos**, **agua**, **cercas** y **servidumbres** de paso; también quién asume **plagas** o fenómenos naturales (granizo, sequía), previendo seguros o criterios de reducción de renta por **caso fortuito**. La **ocupación pacífica** y respeto a colindancias previenen conflictos posesorios. Al cierre, el retiro de cultivos, instalaciones temporales y restitución del terreno en estado adecuado debe calendarizarse para evitar solapes con nuevas temporadas.",
                    },
                    {
                      type: "paragraph",
                      text: "**Muebles (vehículos, maquinaria y equipos).** Exigen especificaciones técnicas (marca, modelo, **número de serie**), manuales de uso, plan de **mantenimiento** y registros de horas/kilómetros. La **responsabilidad** por daños y la cobertura de **seguros** (robo, colisión, RC) deben detallarse; el uso indebido por personal no autorizado genera incumplimiento. La entrega y devolución se documentan con **actas** e inspecciones. La renta puede indexarse a uso (p. ej., horas de operación). En equipos críticos, la **garantía de disponibilidad** y tiempos de reparación definen el valor económico del contrato; la sustitución temporal y penalidades por inactividad deben contemplarse.",
                    },
                    {
                      type: "paragraph",
                      text: "**Temporada y esquemas mixtos.** En arrendamientos de **temporada**, el uso intensivo y breve requiere reglas claras de ocupación, limpieza, fianzas y atención de daños. Los **mixtos** (vivienda con consulta profesional, showroom con bodega) exigen compatibilizar destinos y permisos. En todos los casos, la especie de arrendamiento orienta **notificaciones**, **remedios** y **terminación**: la gobernanza documental —reglamentos aplicables, inventarios, seguros, actas— es el cimiento de un cierre ordenado y oponible frente a terceros.",
                    },
                  ],
                  subthemes: [
                    {
                      id: "1.3.1.7.1",
                      numbering: "3.1.7.1",
                      title: "Subarrendamiento",
                      content: [
                        {
                          type: "paragraph",
                          text: "El **subarrendamiento** es la cesión del uso o goce por parte del **arrendatario** a un **subarrendatario**. Es válido si el **arrendador lo consiente** y **nunca** puede otorgar al subarrendatario más derechos de los que el arrendatario posee. Estructuralmente, el subarriendo es **accesorio** y **subordinado** al contrato principal: depende de su vigencia y condiciones —plazo, destino, cargas—. Sin consentimiento, el subarriendo configura **incumplimiento** que puede habilitar **rescisión**. Por su potencial conflictivo, la autorización debe ser **expresa**, preferentemente por **escrito**, y precisa: objeto, área, plazo, renta, reglas de uso y de convivencia con el contrato matriz. El material del módulo destaca la prohibición de desbordar derechos del contrato principal y la necesidad de conservar la congruencia con el **destino pactado**. :contentReference[oaicite:2]{index=2}",
                        },
                        {
                          type: "paragraph",
                          text: "Documentalmente, el subarrendamiento requiere (i) **acreditación** del título del arrendatario (contrato principal y vigencia), (ii) **consentimiento** del arrendador, (iii) identificación precisa del **espacio** subarrendado y su relación con el resto del inmueble, y (iv) **coherencia** con reglamentos de condominio o administración. Si se subarrienda **parte** del inmueble, deben definirse accesos, áreas comunes y responsabilidades. La renta del subarrendamiento debe ser **trazable** y su pago no libera al arrendatario frente al arrendador: la relación principal subsiste. La experiencia indica incluir **cláusulas espejo** (uso, conservación, seguros, inspecciones) para evitar contradicciones entre contratos y para que el arrendador pueda exigir estándares mínimos al subarrendatario de forma indirecta.",
                        },

                        {
                          type: "accordion",
                          header: "Reglas cardinales",
                          open: false,
                          items: [
                            {
                              header: "Consentimiento",
                              text: "Expreso, por escrito y previo; detallar alcance y duración.",
                            },
                            {
                              header: "Subordinación",
                              text: "Nunca mayor derecho que el contrato principal; congruencia con el destino.",
                            },
                            {
                              header: "Responsabilidad",
                              text: "El arrendatario responde frente al arrendador; el subarrendatario responde frente al arrendatario.",
                            },
                          ],
                        },

                        {
                          type: "paragraph",
                          text: "La **renta** del subarrendamiento no altera la obligación del arrendatario de pagar la **renta principal**. Para mitigar riesgos, puede establecerse **pago directo** del subarrendatario al arrendador (con cargo a la renta principal) o **cesión** de derechos de cobro condicionada, siempre que el marco jurídico lo permita. Deben evitarse cláusulas que generen **usura** o que perviertan el destino (p. ej., sobreocupación). Respecto de **garantías**, el subarrendatario puede otorgar fianza o depósito, pero ello no sustituye las garantías principales. La prueba contable (recibos, transferencias) y la trazabilidad de **notificaciones** son esenciales para probar flujos y cumplimiento.",
                        },
                        {
                          type: "paragraph",
                          text: "En materia de **responsabilidad**, el arrendatario responde frente al arrendador por los **daños** causados por el subarrendatario y por su **incumplimiento**. Conviene pactar en el subarrendamiento obligaciones de **indemnidad** a favor del arrendatario y, cuando sea posible, **pólizas** que incluyan al arrendador como **beneficiario adicional**. En inmuebles con varios ocupantes, deben normarse **controles de acceso**, **seguridad** y **convivencia** (horarios, ruido, residuos). El incumplimiento material o reiterado del subarrendatario debe activar **remedios escalonados**: requerimiento, plazo de corrección, y, en su caso, terminación del subarriendo y desocupación.",
                        },

                        {
                          type: "accordion",
                          header: "Documentos imprescindibles",
                          open: false,
                          items: [
                            {
                              header: "Contrato principal",
                              text: "Con anexos, estado de vigencia y no incumplimiento.",
                            },
                            {
                              header: "Autorización del arrendador",
                              text: "Clara, específica y por escrito; alcance y condiciones.",
                            },
                            {
                              header: "Planos/anexos",
                              text: "Identificación del espacio, accesos y áreas comunes.",
                            },
                          ],
                        },

                        {
                          type: "paragraph",
                          text: "La **terminación** del contrato principal arrastra al subarrendamiento: extinguido aquel, éste **deviene ineficaz** sin necesidad de declaración adicional, salvo acuerdos de novación con el arrendador. Para un cierre ordenado, debe notificarse con **preaviso** y realizarse **acta de entrega** del espacio subarrendado, liquidando adeudos y tratando **mejoras** o adecuaciones según lo pactado. La **reconducción** tácita es especialmente riesgosa en esquemas de subarriendo; por ello, los calendarios y avisos deben ser más estrictos que en arrendamientos directos.",
                        },
                        {
                          type: "paragraph",
                          text: "Conclusión operativa: el subarrendamiento es una herramienta útil para optimizar espacios, pero sólo funciona con **consentimiento expreso**, cláusulas **espejo**, **trazabilidad** de pagos y notificaciones, y **subordinación** absoluta al contrato principal. De lo contrario, se transforma en foco de incumplimientos cruzados y litigios innecesarios que erosionan la conmutatividad del arrendamiento.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "1.3.1.8",
                  numbering: "3.1.8",
                  title: "Del modo de terminar el arrendamiento",
                  content: [
                    {
                      type: "paragraph",
                      text: "Más allá de las **causas** de término (vencimiento, acuerdo, rescisión, pérdida del bien, expropiación), interesa el **modo**: la **ruta procedimental** que asegura un cierre **previsible, verificable y defendible**. El material docente subraya estándares de **preaviso** y formalidades mínimas (domicilios convencionales, medios de notificación) para dar por concluido el vínculo sin sorpresas. La eficiencia del cierre depende de tres piezas: (i) **comunicaciones** claras y oportunas, (ii) **acta de entrega** con inventario y medidores, y (iii) **liquidación** transparente de rentas, daños y garantías. Si se sigue esta secuencia, disminuyen drásticamente la reconducción indeseada, las disputas por estado del bien y los cargos posteriores. :contentReference[oaicite:3]{index=3}",
                    },
                    {
                      type: "paragraph",
                      text: "**Mutuo acuerdo.** La terminación por convenio es la vía más eficiente cuando la relación está ordenada. Debe formalizarse en **adenda** o **convenio de terminación** que: (i) identifique el contrato y su vigencia, (ii) fije **fecha y hora** de entrega, (iii) establezca **lectura de medidores**, (iv) contenga **renuncias y liberaciones** recíprocas respecto de lo no controvertido, (v) documente la **devolución** de llaves, tarjetas y accesos, y (vi) especifique el **trato** de **adecuaciones** (quedan o se retiran) y del **depósito** en garantía. Este convenio opera como acta de paz y salvo, reduciendo la probabilidad de reclamaciones extemporáneas y facilitando la devolución oportuna de garantías.",
                    },

                    {
                      type: "accordion",
                      header: "Vías de terminación (ruta)",
                      open: false,
                      items: [
                        {
                          header: "Convencional",
                          text: "Mutuo acuerdo con convenio de terminación y liberaciones.",
                        },
                        {
                          header: "Por vencimiento",
                          text: "Preaviso, acta de entrega, liquidación y cancelación de garantías.",
                        },
                        {
                          header: "Por rescisión",
                          text: "Requerimiento, plazo de subsanación, terminación e indemnización proporcional.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "**Vencimiento del plazo.** Evita reconducciones con **preaviso** escrito. En la fecha, levanta **acta de entrega** con verificación del **estado** del bien, **fotografías**, **inventario** y **medidores**; liquida **rentas** devengadas y **servicios**. Si existe **depósito**, documenta deducciones fundadas (daños, adeudos) y la **devolución** del remanente. En inmuebles en condominio o parques, coordina con la **administración** la cancelación de accesos, cajones y cargos; esta bitácora previene reclamaciones posteriores. La **conservación de archivo** (contrato, recibos, comunicaciones) durante un periodo razonable blinda a las partes ante discrepancias tardías.",
                    },
                    {
                      type: "paragraph",
                      text: "**Rescisión por incumplimiento.** Exige un **requerimiento fehaciente** que precise el **incumplimiento** (falta de pago, uso contra destino, subarriendo no consentido, daños graves), otorgue **plazo de corrección** y anuncie la **terminación** si persiste. Acreditada la mora o el hecho, procede terminar y exigir **indemnización** y **desocupación** conforme al procedimiento aplicable (judicial o MASC con ejecución). La proporcionalidad es clave: no todo retraso amerita terminación; pero los incumplimientos que frustran la finalidad justifican remedios máximos. La **trazabilidad** (recibos, avisos, actas, peritajes) suele decidir el desenlace en sede forense.",
                    },

                    {
                      type: "accordion",
                      header: "Acta de entrega — contenidos mínimos",
                      open: false,
                      items: [
                        {
                          header: "Identificación",
                          text: "Partes, inmueble/bien, fecha y hora.",
                        },
                        {
                          header: "Estado",
                          text: "Inventario y fotografías; reparaciones pendientes; lectura de medidores.",
                        },
                        {
                          header: "Liquidación",
                          text: "Rentas, servicios, daños; devolución del depósito; cancelación de garantías.",
                        },
                      ],
                    },

                    {
                      type: "paragraph",
                      text: "**Supuestos objetivos.** La **pérdida** o **destrucción** de la cosa, la **expropiación** o la **imposibilidad sobrevenida** extinguen el contrato; debe acreditarse el evento (dictámenes, resoluciones) y liquidarse lo devengado. Si se afecta sólo parte del bien, puede analizarse **reducción** de renta o **resolución** según afectación. Las **adecuaciones** autorizadas se tratan conforme al contrato (restitución o quedarse), evitando enriquecimientos sin causa. La coordinación con aseguradoras acelera resarcimientos y evita dobles cobros.",
                    },
                    {
                      type: "paragraph",
                      text: "**Contratos sin plazo determinado.** El material destaca reglas de **aviso previo**: si el arrendador decide terminar, **tres meses** de anticipación; si no se hubiese fijado plazo, **un año**; y cuando el contrato **no se celebró por tiempo determinado**, cualquiera puede extinguirlo con **15 días** de anticipación en **predios urbanos** y con **un año** en **rústicos**. Estas guías deben reflejarse en cláusulas y cronogramas para evitar sorpresas y para compatibilizar desinstalaciones y restituciones con obligaciones fiscales o administrativas del arrendatario. :contentReference[oaicite:4]{index=4}",
                    },
                    {
                      type: "paragraph",
                      text: "Cierre operativo. Tras la entrega, archiva **cartas de liquidación**, **constancias** de pago final y **cancelaciones** de fianzas o pólizas. Si hubo **inscripción** o **avisos** registrales, promueve su **cancelación** oportuna. En locales y naves, asegúrate de **bajas** ante administración, servicios y seguridad. Esta gobernanza del término no sólo reduce litigios; también preserva la reputación contractual de las partes y facilita operaciones futuras.",
                    },
                  ],
                },
              ],
            },

            /* 3.2 Comodato */
            {
              id: "1.3.2",
              numbering: "3.2",
              title: "Comodato",
              content: [
                {
                  type: "paragraph",
                  text: "El comodato es un contrato por el cual una persona, llamada comodante, entrega a otra, denominada comodatario, una cosa no fungible para que la use temporalmente y la restituya en el mismo estado, sin que exista contraprestación de renta; su rasgo cardinal es, por tanto, la gratuidad. En el material del módulo se enfatiza que es una figura idónea para resolver necesidades puntuales de uso —por ejemplo, maquinaria facilitada para un proyecto específico—, sin transferencia del dominio ni remuneración, conservando el comodante la titularidad y el comodatario el deber de custodia, utilización conforme al destino pactado y devolución oportuna. La lógica del contrato es simple, pero sus consecuencias son relevantes: al no haber precio, la causa del negocio se ancla en la liberalidad de permitir el uso y en la finalidad práctica, lo que exige un estándar de diligencia elevado en la conservación y un régimen claro de riesgos. La prueba escrita no es constitutiva, pero es recomendable: acta de entrega con inventario y fotografías, cláusula de destino, fechas de inicio y término, y domicilios convencionales para notificaciones. Esta previsión probatoria disminuye la litigiosidad y encuadra la restitución en términos verificables. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "En el plano operativo, la determinación del **destino** cumple un papel estructural: delimita el modo de uso permitido y el estándar de conservación exigible. Usar la cosa para un fin diverso puede configurar incumplimiento; así, si se presta un equipo para uso doméstico y se explota con fines industriales, el comodatario se expone a responsabilidad por daños y a la terminación anticipada. El material ejemplifica prácticas comunes que ilustran la utilidad social del comodato: la entrega de un vehículo o de equipo de trabajo para ejecutar una actividad sin que el receptor adquiera la propiedad —como ocurre en ciertos esquemas del sector transporte, donde la posesión y la concesión se coordinan con un contrato de comodato a efectos de operación y control—; en todos los casos, el núcleo es que el uso sea congruente con la finalidad pactada y que la cosa sea restituida en tiempo y forma, manteniendo su integridad. :contentReference[oaicite:2]{index=2}",
                },
                {
                  type: "paragraph",
                  text: "La **temporalidad** del comodato exige precisar un plazo o una condición de devolución (por ejemplo, al concluir la obra o el proyecto); si el evento es incierto, se aconseja fijar una fecha máxima o habilitar terminación por aviso razonable del comodante, especialmente cuando concurren necesidades supervenientes. La asignación de **gastos** también debe quedar definida: por regla, los **ordinarios** de uso y conservación recaen en el comodatario; los **extraordinarios** —estructurales o ajenos al uso normal— corresponden al comodante, salvo pacto en contrario. El régimen de riesgos debe prever supuestos de pérdida o deterioro: el comodatario no responde por el desgaste natural ni por el caso fortuito cuando empleó la cosa conforme al destino y con diligencia; sí responde si medió abuso, culpa o uso diverso al autorizado. Estas coordenadas preservan el equilibrio del contrato y evitan enriquecimientos sin causa.",
                },
                {
                  type: "paragraph",
                  text: "Un eje crítico es la **información sobre vicios**. El comodante debe advertir vicios o defectos relevantes; de omitirlo y sobrevenir daños al comodatario por una falla que conocía o debía conocer, asume responsabilidad. Por su parte, el comodatario debe **inspeccionar** la cosa al recibirla, dejar constancia del estado y **avisar** oportunamente si detecta anomalías; la falta de aviso puede agravar daños e incrementar su deber de resarcir. La coordinación entre aviso, mantenimiento y acceso del comodante para revisiones extraordinarias es prudente, aun tratándose de un vínculo esencialmente gratuito. La evidencia documental —inventarios, reportes, fotografías y comunicaciones— opera como matriz de verdad en caso de controversia y facilita una restitución ordenada al término del uso permitido. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "paragraph",
                  text: "Finalmente, la **restitución** concentra la salida del contrato: debe realizarse en la **fecha** o condición pactada, con acta que describa el estado de la cosa y cierre los pendientes. Si se causaron **mejoras** necesarias y urgentes que incumbían al comodante, puede reclamarse su reembolso; las **útiles** o **voluptuarias** requieren acuerdo, pues en principio no generan crédito. Si la cosa fue entregada **tasada**, su pérdida puede generar la obligación de pagar el precio **tasado**; de lo contrario, la responsabilidad dependerá de culpa, abuso o desatención al destino. Con esta gobernanza mínima —destino, temporalidad, asignación de gastos, información de vicios y restitución documentada—, el comodato cumple su función social: facilitar el uso temporal de bienes sin despojar la propiedad, con seguridad jurídica para ambas partes. :contentReference[oaicite:4]{index=4}",
                },

                /* ——— Acordeón 1 ——— */
                {
                  type: "accordion",
                  header: "Claves operativas del comodato",
                  open: false,
                  items: [
                    {
                      header: "Gratuidad y no fungibilidad",
                      text: "Sin renta y sobre cosas no fungibles; si hay precio, la figura deviene arrendamiento.",
                    },
                    {
                      header: "Destino pactado",
                      text: "Delimita uso permitido, estándar de diligencia y responsabilidad.",
                    },
                    {
                      header: "Prueba suficiente",
                      text: "Acta de entrega, inventario, fotos y comunicaciones para acreditar estado y restitución.",
                    },
                  ],
                },

                /* ——— Acordeón 2 ——— */
                {
                  type: "accordion",
                  header: "Riesgos y asignación de gastos",
                  open: false,
                  items: [
                    {
                      header: "Gastos ordinarios",
                      text: "Uso y conservación a cargo del comodatario, salvo pacto en contrario.",
                    },
                    {
                      header: "Gastos extraordinarios",
                      text: "Estructurales o ajenos al uso normal, a cargo del comodante.",
                    },
                    {
                      header: "Vicios y responsabilidad",
                      text: "Aviso de vicios por el comodante; diligencia y aviso oportuno por el comodatario.",
                    },
                  ],
                },
              ],
              subthemes: [
                {
                  id: "1.3.2.1",
                  numbering: "3.2.1",
                  title: "Características generales",
                  content: [
                    {
                      type: "paragraph",
                      text: "Las **características** del comodato permiten distinguirlo de otras figuras y operar con criterios claros. Primero, es **gratuito**: no existe renta; si la hay, la relación se reubica en arrendamiento. Segundo, recae en **cosas no fungibles**: el bien debe ser restituible en especie; si la cosa se consume por el uso (fungible), el cauce típico es el mutuo. Tercero, es **temporal**: debe pactarse plazo o condición de devolución; la omisión genera incertidumbre y conviene suplirla con reglas de preaviso razonable. Cuarto, es **intransmisible** sin consentimiento: el comodatario no puede ceder el uso a terceros; la violación habilita terminación. Quinto, exige **uso conforme al destino**: la cláusula de finalidad orienta el estándar de diligencia y la responsabilidad por desviaciones. Sexto, requiere **capacidad** de las partes y **objeto lícito**: como todo contrato, se apoya en consentimiento válido y causa lícita. Séptimo, aunque **consensual**, la forma escrita y los anexos probatorios (inventario y fotografías) son prudenciales para disminuir litigios y facilitar la carga de la prueba en caso de que surjan daños o pérdidas. El material subraya también que el comodatario asume los **gastos ordinarios** y que el comodante conserva la titularidad y, como regla, los **extraordinarios**. :contentReference[oaicite:5]{index=5}",
                    },
                    {
                      type: "paragraph",
                      text: "En la práctica, estas notas se traducen en cláusulas concretas: identificación exhaustiva de la cosa (serie, marca, linderos), destino pormenorizado, plazos de uso, reglas de **mantenimiento**, delimitación de **gastos**, obligación de **aviso** de vicios y facultad del comodante para **verificaciones extraordinarias**. El contrato debe contemplar supuestos de **pérdida** total o parcial, y asignar consecuencias según exista culpa o caso fortuito. Cuando la cosa tenga valor operativo relevante (equipo, vehículo), conviene incorporar **seguros** y protocolos de uso, así como bitácoras de operación. Asimismo, debe abordarse el tratamiento de **mejoras** y accesorios, distinguiendo las **necesarias** —reintegrables si incumbían al comodante— de las **útiles** y **voluptuarias**, que en principio no generan crédito salvo acuerdo previo. Estas previsiones, aun siendo un contrato gratuito, protegen al comodante frente a abusos y al comodatario frente a reclamos infundados. :contentReference[oaicite:6]{index=6}",
                    },
                    {
                      type: "paragraph",
                      text: "El equilibrio del comodato descansa en la **diligencia** del comodatario. Debe usar la cosa como si fuera propia, dentro del destino convenido, y adoptar medidas razonables de cuidado. Si descubre vicios que la hacen peligrosa o impropia, debe **suspender** su uso y **notificar**; persistir en el uso defectuoso puede atribuirle responsabilidad. En el extremo, si la cosa fue **tasada** al entregarse, su **pérdida** puede obligarlo al pago del valor tasado; esta modalidad, destacada por la doctrina y reproducida en el material, opera como mecanismo de certeza económica cuando el bien es de difícil reposición o cuando las partes desean prevenir controversias sobre cuantificación de daños. La diligencia también se manifiesta en la **devolución**: limpiar, empacar, asegurar el transporte y levantar acta de entrega con fotografías son prácticas de cierre que reducen costos de fricción. :contentReference[oaicite:7]{index=7}",
                    },
                    {
                      type: "paragraph",
                      text: "Desde la perspectiva del comodante, la **información previa** es tan importante como la entrega: debe advertir **vicios** conocidos, proporcionar **manuales** de uso cuando existan y facilitar, si procede, **insumos** para el uso ordinario (p. ej., llaves, códigos, tarjetas). Debe, además, abstenerse de interferir con el uso autorizado, salvo verificación razonable acordada. Si el comodante requiere la cosa por **urgencia** legítima, debe activar la cláusula de **restitución anticipada** con preaviso razonable; la gratuidad no habilita arbitrariedades. En suma, ambos polos del contrato —liberalidad y uso— se equilibran si hay transparencia, comunicación oportuna y disciplina probatoria a lo largo de la relación. Estas pautas metodológicas son las que el material sugiere para trasladar la teoría a expedientes defendibles. :contentReference[oaicite:8]{index=8}",
                    },
                    {
                      type: "paragraph",
                      text: "Finalmente, el comodato tiene **utilidad social** innegable: facilita el acceso temporal a bienes sin despojo de propiedad, promueve cooperación entre particulares y empresas, y desincentiva la inmovilización de activos. Los **ejemplos** sectoriales son numerosos —vehículos, herramientas, dispositivos— y el material los vincula con prácticas de evidencia (contratos, inventarios, comunicaciones) que reducen la litigiosidad. En contextos donde coexisten títulos y permisos (como concesiones administrativas), el comodato puede ser el vehículo adecuado para viabilizar la operación coordinada, siempre que se respete la normativa de fondo y que se mantenga el eje de **gratuidad**. Con gobernanza adecuada, el comodato asegura el uso lícito, el cuidado de la cosa y el cierre ordenado, cumpliendo su función de engranaje entre necesidad práctica y seguridad jurídica. :contentReference[oaicite:9]{index=9}",
                    },

                    /* — Acordeón 1 — */
                    {
                      type: "accordion",
                      header: "Características — Resumen ejecutivo",
                      open: false,
                      items: [
                        {
                          header: "Gratuidad",
                          text: "Sin renta; si hay precio, es arrendamiento.",
                        },
                        {
                          header: "No fungible",
                          text: "Debe restituirse en especie; si se consume, el cauce es mutuo.",
                        },
                        {
                          header: "Temporalidad/destino",
                          text: "Plazo o condición y finalidad pactada guían el uso y la diligencia.",
                        },
                      ],
                    },

                    /* — Acordeón 2 — */
                    {
                      type: "accordion",
                      header: "Práctica probatoria",
                      open: false,
                      items: [
                        {
                          header: "Acta e inventario",
                          text: "Entrega con fotos y descripción; facilita atribución de daños.",
                        },
                        {
                          header: "Comunicación",
                          text: "Aviso de vicios y de eventos relevantes; domicilios convencionales.",
                        },
                        {
                          header: "Cierre",
                          text: "Acta de devolución; tratamiento de mejoras; protocolo de transporte.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "1.3.2.2",
                  numbering: "3.2.2",
                  title:
                    "Distinción del comodato y los derechos reales de uso y habitación",
                  content: [
                    {
                      type: "paragraph",
                      text: "El **comodato** es un contrato obligacional gratuito que otorga al comodatario la **tenencia** y el **uso** de una cosa no fungible con deber de restitución; los **derechos reales de uso y habitación** son derechos **reales** limitados que confieren a su titular un goce directo sobre la cosa, oponible erga omnes, sin transmisión del dominio. La diferencia medular es, pues, ontológica: en el comodato hay relación **personal** entre partes y obligación de devolver; en uso/habitación hay una **facultad real** que gravita sobre el bien, puede emanar de contrato o testamento y sigue a la cosa, con inscribibilidad cuando proceda. El material explica que, aunque ambos habilitan disfrute, el comodato es **precario** frente a terceros y se rige por el pacto; uso/habitación, en cambio, se ajusta a su marco real y a límites legales (p. ej., extensión a familia en habitación). Esta distinción práctica orienta la elección de la figura adecuada y previene confusiones en litigios. :contentReference[oaicite:10]{index=10}",
                    },
                    {
                      type: "paragraph",
                      text: "En el **comodato**, la oponibilidad está circunscrita a quienes consintieron; terceros de buena fe no quedan obligados, salvo supuestos de mala fe o fraude. En **uso/habitación**, la eficacia frente a terceros se robustece mediante la **publicidad registral** cuando procede, y su contenido se fija por ley: el derecho de **uso** permite aprovechar los frutos necesarios para el titular y su familia; el de **habitación** faculta a ocupar una vivienda para morada propia. En cambio, el **comodatario** no adquiere frutos para sí salvo autorización, y cualquier ampliación de uso más allá del destino pactado deviene incumplimiento. Así, mientras el titular de uso/habitación goza de un haz de facultades normativas, el comodatario se mueve dentro de la órbita contractual estrecha y debe restituir al vencer el plazo o cumplirse la condición. :contentReference[oaicite:11]{index=11}",
                    },
                    {
                      type: "paragraph",
                      text: "Otra línea divisoria es el **régimen de cargas**. En comodato, el comodatario asume **gastos ordinarios** de uso y conservación; los **extraordinarios** recaen en el comodante, salvo pacto. En uso/habitación, las cargas y contribuciones se distribuyen conforme al estatuto real y a lo pactado, pero la ley puede imponer deberes específicos vinculados a la conservación del bien, dada la eficacia erga omnes. Tampoco coincide el **tratamiento de mejoras**: en comodato, las necesarias reembolsables son excepcionales; en uso/habitación, depende del marco sustantivo y de la fuente (contrato/testamento). Si la finalidad es un disfrute estable con eficacia frente a terceros, el eje óptimo pueden ser los derechos reales; si la finalidad es uso **temporal** y gratuito sin publicidad registral, el cauce eficiente es el comodato. :contentReference[oaicite:12]{index=12}",
                    },
                    {
                      type: "paragraph",
                      text: "En la práctica forense, muchas controversias nacen de **confundir** ambas figuras. Llamar “comodato” a un disfrute estable, sin plazo y con tolerancia por años puede derivar en pretensiones de usucapión o en discusiones sobre enriquecimiento sin causa. El material alerta sobre la necesidad de **documentar** con precisión el término, la finalidad y la forma de restitución, e incluso, cuando el goce se pretende durable y oponible, **migrar** a un derecho real o a un arrendamiento según exista o no renta. La técnica del operador jurídico consiste en calificar con rigor y en dotar de **prueba** a los elementos definitorios: si la expectativa es estabilidad y defensa frente a terceros, la ruta adecuada no es el comodato precario. :contentReference[oaicite:13]{index=13}",
                    },
                    {
                      type: "paragraph",
                      text: "En conclusión, la distinción no es académica: impacta en **oponibilidad**, **riesgos** y **remedios**. Elegir comodato cuando lo adecuado era uso/habitación expone a pérdida de control sobre el bien y a litigios de posesión; usar uso/habitación cuando bastaba un comodato puede inmovilizar patrimonialmente la cosa. La guía del módulo es clara: partir de la **finalidad** (temporalidad, gratuidad, necesidad de oponibilidad) y del **patrón de riesgo** (gastos, mantenimiento, frutos) para seleccionar la figura correcta, redactando cláusulas y anexos acordes y, en su caso, realizando **publicidad registral**. La calificación correcta ahorra litigios y alinea expectativas con seguridad jurídica. :contentReference[oaicite:14]{index=14}",
                    },

                    /* — Acordeón 1 — */
                    {
                      type: "accordion",
                      header: "Comodato vs. uso/habitación — comparativa",
                      open: false,
                      items: [
                        {
                          header: "Naturaleza",
                          text: "Comodato: obligacional y gratuito • Uso/habitación: derecho real limitado.",
                        },
                        {
                          header: "Oponibilidad",
                          text: "Comodato: inter partes • Uso/habitación: erga omnes (con publicidad).",
                        },
                        {
                          header: "Restitución",
                          text: "Comodato: deber de devolver • Habitación: goce conforme a ley y estatuto real.",
                        },
                      ],
                    },

                    /* — Acordeón 2 — */
                    {
                      type: "accordion",
                      header: "Criterios de elección práctica",
                      open: false,
                      items: [
                        {
                          header: "Temporalidad",
                          text: "Uso breve y gratuito → comodato; disfrute estable → derecho real/arrendamiento.",
                        },
                        {
                          header: "Riesgos y gastos",
                          text: "Asignación clara de ordinarios/extraordinarios y de mejoras.",
                        },
                        {
                          header: "Publicidad",
                          text: "Si se requiere oponibilidad frente a terceros, evaluar inscripción.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "1.3.2.3",
                  numbering: "3.2.3",
                  title: "Obligaciones del comodante y comodatario",
                  content: [
                    {
                      type: "paragraph",
                      text: "**Comodante.** Debe **entregar** la cosa en estado apto para el uso convenido; **informar vicios** conocidos que puedan comprometer su integridad o la del comodatario; permitir el uso dentro del destino y, salvo pacto, asumir **gastos extraordinarios** de conservación. Si sobreviene **urgencia legítima**, puede requerir la **restitución anticipada** conforme a lo pactado. Debe además **conservar sus derechos** sobre la cosa (titularidad, no prescripción por tolerancias excesivas) y, en caso de entregar cosa **tasada**, atenerse al régimen pactado sobre pérdida. El material del módulo subraya este eje: transparencia sobre vicios, finalidad definida y gobernanza de gastos, para que la gratuidad no se traduzca en riesgos desmedidos para ninguna de las partes. :contentReference[oaicite:15]{index=15}",
                    },
                    {
                      type: "paragraph",
                      text: "**Comodatario.** Debe **usar** la cosa conforme al **destino** pactado, con **diligencia** y **cuidado**; **asumir** los **gastos ordinarios** de uso y conservación; **avisar** oportunamente sobre vicios o daños y **permitir** verificaciones razonables. Tiene el deber cardinal de **restituir** la cosa al concluir el plazo o cumplirse la condición, en estado adecuado, respondiendo por daños causados por culpa, abuso o uso diverso al autorizado. Si la cosa fue **tasada**, la **pérdida** puede acarrear el pago del precio tasado. No puede ceder el uso a terceros sin consentimiento; hacerlo habilita terminación e indemnización. Estas obligaciones, alineadas con la naturaleza gratuita del contrato, equilibran la liberalidad del comodante con la responsabilidad del usuario. :contentReference[oaicite:16]{index=16}",
                    },
                    {
                      type: "paragraph",
                      text: "La **asignación de riesgos** se resuelve atendiendo a culpa y caso fortuito: si el comodatario cumplió con diligencia y ocurrió un evento inevitable, no responde por la pérdida; si hubo **negligencia**, responde por daños y perjuicios. El comodante, por su parte, responde por **vicios** ocultos que conocía o debía conocer y que ocasionen daño. En cuanto a **frutos** y **accesiones**, salvo autorización, el comodatario no puede apropiárselos; si los percibe, debe restituirlos o compensar. La claridad en estas reglas disminuye fricciones, sobre todo cuando la cosa genera rendimientos (p. ej., equipo utilizado para actividad productiva), supuesto en el que conviene pactar expresamente la titularidad de frutos y excedentes. :contentReference[oaicite:17]{index=17}",
                    },
                    {
                      type: "paragraph",
                      text: "Respecto de **mejoras**, conviene distinguir: (i) **necesarias**, imprescindibles para la conservación; si incumbían al comodante y el comodatario las sufragó por urgencia, puede exigir **reembolso**; (ii) **útiles**, que aumentan el valor o utilidad; y (iii) **voluptuarias**, de mero ornato. Salvo pacto, las últimas no generan crédito; las **útiles** sólo si fueron autorizadas. El contrato debe prever si, al devolver, las mejoras **quedan** en la cosa o el comodatario debe **retirarlas** sin causar daño, así como quién asume los costos de **restitución** al estado original. Estas previsiones evitan controversias al cierre y previenen enriquecimientos sin causa. :contentReference[oaicite:18]{index=18}",
                    },
                    {
                      type: "paragraph",
                      text: "En el **cierre**, las partes deben levantar **acta de devolución** con descripción del estado, fotografías, inventario y firma; si hay **adeudos** por daños o gastos reembolsables, consignarlos y fijar un **cronograma** de pago. La **trazabilidad** documental (contrato, anexos, comunicaciones) protege al comodante de pérdidas y al comodatario de cargos improcedentes. En caso de **controversia**, activar mecanismos no jurisdiccionales (negociación, mediación) suele ser eficiente, y dejar constancia escrita de los acuerdos alcanzados blinda la solución. El módulo insiste en esta gobernanza: la gratuidad del comodato no dispensa la técnica; al contrario, exige disciplina para equilibrar liberalidad, uso responsable y seguridad jurídica. :contentReference[oaicite:19]{index=19}",
                    },

                    /* — Acordeón 1 — */
                    {
                      type: "accordion",
                      header: "Obligaciones — Esquema",
                      open: false,
                      items: [
                        {
                          header: "Comodante",
                          text: "Entregar apto; informar vicios; gastos extraordinarios; posible restitución anticipada justificada.",
                        },
                        {
                          header: "Comodatario",
                          text: "Uso conforme; diligencia; gastos ordinarios; aviso; restitución en tiempo y forma.",
                        },
                        {
                          header: "Prohibiciones",
                          text: "No ceder uso a terceros sin consentimiento; no cambiar el destino.",
                        },
                      ],
                    },

                    /* — Acordeón 2 — */
                    {
                      type: "accordion",
                      header: "Cierre y responsabilidad",
                      open: false,
                      items: [
                        {
                          header: "Acta de devolución",
                          text: "Estado, fotos, inventario, pendientes y cronograma.",
                        },
                        {
                          header: "Mejoras",
                          text: "Necesarias reembolsables si incumbían al comodante; útiles/voluptuarias según pacto.",
                        },
                        {
                          header: "Riesgos",
                          text: "Culpa vs. caso fortuito; pérdida de cosa tasada y efectos.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* 4. CONTRATOS DE PRESTACIÓN DE SERVICIOS */
        {
          id: "1.4",
          numbering: "4",
          title: "Contratos de prestación de servicios",
          content: [
            {
              type: "paragraph",
              text: "Los contratos de prestación de servicios articulan jurídicamente una obligación de hacer: una parte ejecuta actividades definidas técnica y jurídicamente y la otra remunera esa actividad conforme a condiciones pactadas. En este módulo se estudian tanto figuras de custodia (depósito y secuestro) como de gestión de actos jurídicos (mandato) y servicios profesionales, además de dos contratos clásicos con prestaciones compuestas: obra a precio alzado y hospedaje. La clave operativa es distinguir obligaciones de medios (prestar el servicio con diligencia, conforme a estándares) frente a obligaciones de resultado (entregar un producto o hito verificable). El encuadre civil exige identificar capacidad, consentimiento, objeto lícito y forma; la prueba escrita no siempre es constitutiva, pero es indispensable para delimitar alcances, responsabilidades, límites y terminación. La gobernanza documental —órdenes de servicio, reportes, actas, inventarios y políticas de calidad— sostiene la trazabilidad y reduce litigiosidad. Este bloque proporciona criterios para elegir la figura correcta, redactar cláusulas eficaces y administrar el riesgo con proporcionalidad y transparencia, de acuerdo con el desarrollo temático de la Unidad 4 del material base. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "En su estructura mínima, estos contratos deben precisar: (i) el alcance del servicio con entregables y métricas de aceptación; (ii) la temporalidad (plazos, hitos, ventanas de servicio y prórrogas); (iii) la contraprestación (precio, tarifas, reembolsables y condiciones de facturación); (iv) los estándares de diligencia y calidad (normas técnicas, manuales y protocolos); (v) los mecanismos de dirección y supervisión (órdenes, aprobaciones, cambios); y (vi) los criterios de terminación (por cumplimiento, por causa o por conveniencia). Además, resultan cruciales las cláusulas de confidencialidad, protección de datos, propiedad intelectual sobre resultados, conflictos de interés y no competencia cuando el servicio lo justifique. La subcontratación debe regularse con obligación de espejo y control del desempeño de terceros. En servicios que implican contacto con bienes ajenos (p. ej., depósito o mantenimiento), conviene incorporar inventarios, etiquetado, cadena de custodia y responsabilidades por pérdida o daño. Estas variables permiten traducir expectativas en compromisos verificables, orientando la ejecución y la prueba.",
            },
            {
              type: "paragraph",
              text: "La matriz de riesgo se administra mediante asignación clara de responsabilidades y remedios. El incumplimiento se atiende con escalamiento progresivo: notificación, oportunidad de corrección, descuentos o penalizaciones y, en su caso, terminación. Las causas de caso fortuito y fuerza mayor deben acotarse, con obligaciones de mitigación y de reanudación. En servicios especializados, la cobertura de seguros (responsabilidad civil, daños, equipo) y las limitaciones de responsabilidad protegen la viabilidad económica del acuerdo sin vaciar su contenido. La aceptación del servicio se documenta con actas o conformidades parciales: sin aceptación, difícilmente se consolidan hitos de pago. Una cláusula de solución de controversias que combine negociación, mediación o mecanismos alternos con jurisdicción competente reduce la incertidumbre. Finalmente, se recomienda un régimen de auditoría y conservación de archivos que respalde estados de avance, costos y decisiones técnicas, de modo que el expediente sea defendible en sede administrativa o judicial.",
            },
            {
              type: "paragraph",
              text: "El mapa del módulo diferencia con rigor seis figuras: depósito y secuestro (custodia y restitución, con neutralidad reforzada en el secuestro por tratarse de cosa litigiosa); mandato (gestión de actos jurídicos con o sin representación, apoyado en poderes suficientes para eficacia frente a terceros); contratos profesionales (prestación intelectual o técnica con reglas sobre honorarios, autonomía y responsabilidad); obra a precio alzado (obligación típicamente de resultado con precio cierto y riesgos calculados por el contratista); y hospedaje (conjunto de servicios de alojamiento, custodia y atención al huésped a cambio de tarifa). Cada figura exige una gramática propia de derechos, obligaciones, límites y remedios. El objetivo pedagógico es que el operador jurídico distinga la naturaleza de la prestación, seleccione la figura que mejor la expresa y la dote de cláusulas que aseguren calidad, continuidad y cierre ordenado. Esta taxonomía se desarrollará en los subtemas siguientes con criterios y checklists prácticos. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "Desde la perspectiva de competencias, el estudiante debe dominar: (a) calificación del servicio y elección de la figura contractual; (b) redacción de alcances, SLA y criterios de aceptación; (c) asignación de riesgos y remedios; (d) diseño de evidencias (inventarios, reportes, actas) y gobierno de cambios; y (e) terminación y liquidación ordenada. La innovación jurídica se traduce aquí en contratos claros, medibles y ejecutables, capaces de convivir con políticas internas de compliance, protección de datos y ética profesional. Como eje transversal, se privilegia la transparencia: si el servicio implica ingreso a instalaciones o manipulación de bienes, se establecen controles físicos; si implica actuación frente a terceros, se robustece la representación y la publicidad que exija la ley. Con esta base, los subtemas 4.1 a 4.6 desgranarán reglas específicas y casuística suficiente para la práctica profesional, manteniendo el equilibrio entre eficacia económica y seguridad jurídica.",
            },
            {
              type: "accordion",
              header: "Contrato de servicios — Guía rápida",
              open: false,
              items: [
                {
                  header: "Taxonomía del módulo",
                  text: "Depósito y secuestro (custodia) • Mandato (actos jurídicos) • Profesionales, obra a precio alzado y hospedaje (servicios compuestos).",
                },
                {
                  header: "Gobernanza contractual",
                  text: "Alcances y métricas; dirección del servicio; evidencia y aceptación; cambios y terminación.",
                },
                {
                  header: "Prevención de riesgos",
                  text: "Seguros y límites; confidencialidad y datos; penalizaciones proporcionales; MASC y jurisdicción.",
                },
              ],
            },
          ],
          subthemes: [
            {
              id: "1.4.1",
              numbering: "4.1",
              title: "El depósito",
              content: [
                {
                  type: "paragraph",
                  text: "El contrato de depósito se configura cuando una persona (**depositante**) confía una cosa a otra (**depositario**) para su guarda y conservación, con el compromiso de **restituirla** cuando aquél la solicite. Su finalidad es de **custodia**, no de uso, y por ello se distingue de figuras traslativas de uso o dominio. El material del módulo subraya que el depósito es, en su esencia, una relación de **confianza técnica y jurídica**: el depositante traslada la **tenencia** material sin ceder la propiedad, mientras el depositario asume un **deber de guarda diligente** y una obligación de **restitución inmediata** a la primera demanda legítima. Este diseño protege el patrimonio del depositante frente a riesgos de pérdida o sustracción, y delimita el ámbito de responsabilidad del depositario conforme al estándar de cuidado pactado o, en su defecto, al de un buen padre de familia. La escritura no es constitutiva, pero es altamente recomendable para describir el objeto, su estado, el lugar de guarda y el régimen de responsabilidad, de modo que las controversias se reduzcan.",
                },
                {
                  type: "paragraph",
                  text: "Desde una perspectiva operativa, conviene establecer **inventario** y **documentación fotográfica** del estado de la cosa al momento de la entrega, así como identificar a la persona responsable de su **vigilancia**, las **condiciones de almacenamiento** (temperatura, humedad, seguridad) y los **accesos** autorizados. El material explica que la **restitución** es la consecuencia natural del depósito y debe efectuarse con los **mismos accesorios** y envolventes, salvo desgaste derivado de la simple guarda. Si existe una **remuneración** por el servicio, ésta no transforma la naturaleza del contrato —permanece de custodia—, pero obliga a precisar si hay **seguros** contratados, **límites de responsabilidad** y **plazos** de preaviso para la devolución cuando la logística lo exija. En todo caso, la guarda no autoriza al depositario a **usar** la cosa ni a **retenerla** más allá de los supuestos legal o contractualmente previstos.",
                },

                /* — Acordeón 1 — */
                {
                  type: "accordion",
                  header: "Depósito — elementos esenciales",
                  open: false,
                  items: [
                    {
                      header: "Objeto",
                      text: "Bien corporal determinado y conservable; se entrega para custodia, no para uso.",
                    },
                    {
                      header: "Obligación del depositario",
                      text: "Guardar con diligencia y restituir a la primera solicitud del depositante.",
                    },
                    {
                      header: "Prueba útil",
                      text: "Contrato, inventario y fotografías; constancias de ingreso/salida y responsables de guarda.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La **responsabilidad** del depositario se mide por la **diligencia** prometida: si se comprometió a una guarda especializada (p. ej., cámaras con control climático), responderá por su incumplimiento salvo caso fortuito o fuerza mayor. El material de estudio presenta el depósito como un **acuerdo civil** cuyo objeto es la **custodia** con garantías; por ello, resulta prudente definir **protocolos de siniestro**, **cadenas de custodia** y **notificación inmediata** al depositante ante cualquier incidencia. La **oponibilidad** frente a terceros exige, en su caso, registros o constancias de recepción que permitan acreditar la tenencia legítima del depositario y el derecho preferente del depositante a la recuperación del bien. En depósitos de bienes de alto valor, la práctica aconseja describir números de serie, peritajes de autenticidad y, si procede, **tasación** referencial para efectos de cuantificación de daños.",
                },
                {
                  type: "paragraph",
                  text: "Una zona de fricción frecuente deriva de la **confusión** entre depósito y **comodato**: en el depósito el depositario no puede servirse de la cosa; en el comodato, el comodatario sí la **usa** conforme al destino. El material insiste en esta **diferencia funcional** para evitar defensas improcedentes. Otra fuente de conflicto es la **retención** por gastos de conservación o por controversias: salvo cláusula o norma expresa, el depositario debe **restituir**, y las diferencias económicas se ventilan por la vía correspondiente; ampliar unilateralmente el depósito a un derecho de retención sin base es fuente de responsabilidad. La **trazabilidad** documental —ingreso, movimientos internos, salida— reduce el espacio de incertidumbre probatoria.",
                },

                /* — Acordeón 2 — */
                {
                  type: "accordion",
                  header: "Riesgos y cautelas",
                  open: false,
                  items: [
                    {
                      header: "No uso",
                      text: "El depositario no puede usar la cosa; hacerlo genera incumplimiento y responsabilidad.",
                    },
                    {
                      header: "Logística",
                      text: "Define lugar de guarda, controles de acceso y protocolos de siniestro.",
                    },
                    {
                      header: "Seguro",
                      text: "Valora pólizas; fija límites de responsabilidad y procedimientos de reclamación.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "En depósitos con terceros **profesionales** (bodegas, almacenes generales), la **letra fina** del contrato regula horarios, movimientos autorizados, inspecciones y **liquidación** de servicios. El material reconoce que, aun tratándose de un contrato civil, las prácticas de industria pueden incorporar **condiciones generales**; corresponde al operador jurídico revisarlas para que no desnaturalicen el deber de custodia ni impongan renuncias desproporcionadas de responsabilidad. En depósitos **judiciales** o vinculados a controversias, las reglas del órgano jurisdiccional y las medidas de aseguramiento prevalecen: el depositario actúa como **auxiliar** y su margen de decisión es estrecho. En todos los escenarios, la clave es la **gobernanza probatoria**: inventarios, actas de retiro, etiquetas y firmas respaldan la integridad y facilitan la restitución sin litigio. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "Por último, la **restitución** debe ser **íntegra** y oportuna. Es recomendable programar la entrega con **citas** y levantar un **acta de salida** que verifique coincidencia con el inventario, estado de conservación y cierre de pendientes. Si el depositante no recoge en el plazo razonable y ello genera **gastos extraordinarios**, la solución es contractual: aviso, periodo de gracia y, en su caso, cobro de almacenajes conforme a lo pactado o a usos honestos. Esta disciplina operativa, alineada con el material del módulo, asegura que el depósito cumpla su finalidad de **custodia segura** y **restitución verificable**, minimizando riesgos y controversias. :contentReference[oaicite:2]{index=2}",
                },
              ],
            },
            {
              id: "1.4.2",
              numbering: "4.2",
              title: "El secuestro",
              content: [
                {
                  type: "paragraph",
                  text: "El contrato de depósito se configura cuando una persona (**depositante**) confía una cosa a otra (**depositario**) para su guarda y conservación, con el compromiso de **restituirla** cuando aquél la solicite. Su finalidad es de **custodia**, no de uso, y por ello se distingue de figuras traslativas de uso o dominio. El material del módulo subraya que el depósito es, en su esencia, una relación de **confianza técnica y jurídica**: el depositante traslada la **tenencia** material sin ceder la propiedad, mientras el depositario asume un **deber de guarda diligente** y una obligación de **restitución inmediata** a la primera demanda legítima. Este diseño protege el patrimonio del depositante frente a riesgos de pérdida o sustracción, y delimita el ámbito de responsabilidad del depositario conforme al estándar de cuidado pactado o, en su defecto, al de un buen padre de familia. La escritura no es constitutiva, pero es altamente recomendable para describir el objeto, su estado, el lugar de guarda y el régimen de responsabilidad, de modo que las controversias se reduzcan.",
                },
                {
                  type: "paragraph",
                  text: "Desde una perspectiva operativa, conviene establecer **inventario** y **documentación fotográfica** del estado de la cosa al momento de la entrega, así como identificar a la persona responsable de su **vigilancia**, las **condiciones de almacenamiento** (temperatura, humedad, seguridad) y los **accesos** autorizados. El material explica que la **restitución** es la consecuencia natural del depósito y debe efectuarse con los **mismos accesorios** y envolventes, salvo desgaste derivado de la simple guarda. Si existe una **remuneración** por el servicio, ésta no transforma la naturaleza del contrato —permanece de custodia—, pero obliga a precisar si hay **seguros** contratados, **límites de responsabilidad** y **plazos** de preaviso para la devolución cuando la logística lo exija. En todo caso, la guarda no autoriza al depositario a **usar** la cosa ni a **retenerla** más allá de los supuestos legal o contractualmente previstos.",
                },

                /* — Acordeón 1 — */
                {
                  type: "accordion",
                  header: "Depósito — elementos esenciales",
                  open: false,
                  items: [
                    {
                      header: "Objeto",
                      text: "Bien corporal determinado y conservable; se entrega para custodia, no para uso.",
                    },
                    {
                      header: "Obligación del depositario",
                      text: "Guardar con diligencia y restituir a la primera solicitud del depositante.",
                    },
                    {
                      header: "Prueba útil",
                      text: "Contrato, inventario y fotografías; constancias de ingreso/salida y responsables de guarda.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "La **responsabilidad** del depositario se mide por la **diligencia** prometida: si se comprometió a una guarda especializada (p. ej., cámaras con control climático), responderá por su incumplimiento salvo caso fortuito o fuerza mayor. El material de estudio presenta el depósito como un **acuerdo civil** cuyo objeto es la **custodia** con garantías; por ello, resulta prudente definir **protocolos de siniestro**, **cadenas de custodia** y **notificación inmediata** al depositante ante cualquier incidencia. La **oponibilidad** frente a terceros exige, en su caso, registros o constancias de recepción que permitan acreditar la tenencia legítima del depositario y el derecho preferente del depositante a la recuperación del bien. En depósitos de bienes de alto valor, la práctica aconseja describir números de serie, peritajes de autenticidad y, si procede, **tasación** referencial para efectos de cuantificación de daños.",
                },
                {
                  type: "paragraph",
                  text: "Una zona de fricción frecuente deriva de la **confusión** entre depósito y **comodato**: en el depósito el depositario no puede servirse de la cosa; en el comodato, el comodatario sí la **usa** conforme al destino. El material insiste en esta **diferencia funcional** para evitar defensas improcedentes. Otra fuente de conflicto es la **retención** por gastos de conservación o por controversias: salvo cláusula o norma expresa, el depositario debe **restituir**, y las diferencias económicas se ventilan por la vía correspondiente; ampliar unilateralmente el depósito a un derecho de retención sin base es fuente de responsabilidad. La **trazabilidad** documental —ingreso, movimientos internos, salida— reduce el espacio de incertidumbre probatoria.",
                },

                /* — Acordeón 2 — */
                {
                  type: "accordion",
                  header: "Riesgos y cautelas",
                  open: false,
                  items: [
                    {
                      header: "No uso",
                      text: "El depositario no puede usar la cosa; hacerlo genera incumplimiento y responsabilidad.",
                    },
                    {
                      header: "Logística",
                      text: "Define lugar de guarda, controles de acceso y protocolos de siniestro.",
                    },
                    {
                      header: "Seguro",
                      text: "Valora pólizas; fija límites de responsabilidad y procedimientos de reclamación.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "En depósitos con terceros **profesionales** (bodegas, almacenes generales), la **letra fina** del contrato regula horarios, movimientos autorizados, inspecciones y **liquidación** de servicios. El material reconoce que, aun tratándose de un contrato civil, las prácticas de industria pueden incorporar **condiciones generales**; corresponde al operador jurídico revisarlas para que no desnaturalicen el deber de custodia ni impongan renuncias desproporcionadas de responsabilidad. En depósitos **judiciales** o vinculados a controversias, las reglas del órgano jurisdiccional y las medidas de aseguramiento prevalecen: el depositario actúa como **auxiliar** y su margen de decisión es estrecho. En todos los escenarios, la clave es la **gobernanza probatoria**: inventarios, actas de retiro, etiquetas y firmas respaldan la integridad y facilitan la restitución sin litigio. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "paragraph",
                  text: "Por último, la **restitución** debe ser **íntegra** y oportuna. Es recomendable programar la entrega con **citas** y levantar un **acta de salida** que verifique coincidencia con el inventario, estado de conservación y cierre de pendientes. Si el depositante no recoge en el plazo razonable y ello genera **gastos extraordinarios**, la solución es contractual: aviso, periodo de gracia y, en su caso, cobro de almacenajes conforme a lo pactado o a usos honestos. Esta disciplina operativa, alineada con el material del módulo, asegura que el depósito cumpla su finalidad de **custodia segura** y **restitución verificable**, minimizando riesgos y controversias. :contentReference[oaicite:2]{index=2}",
                },
              ],
            },

            /* 4.3 Mandato */
            {
              id: "1.4.3",
              numbering: "4.3",
              title: "El mandato",
              content: [
                {
                  type: "paragraph",
                  text: "El **mandato** es el contrato por el cual una persona (**mandante**) encarga a otra (**mandatario**) la realización de **actos jurídicos** en su nombre o por su cuenta. El módulo destaca su carácter de **contrato principal** —existe por sí mismo— y su flexibilidad: puede ser **gratuito** o **remunerado**, y abarcar desde un encargo **general** (múltiples negocios) hasta uno **especial** (un acto concreto). Sus **elementos** son el mandante, el mandatario, el **encargo lícito** y el **consentimiento**; si se pretende eficacia frente a **terceros**, es imprescindible la **representación** instrumentada en **poder** suficiente. En su versión puramente interna, el mandatario puede actuar en **nombre propio pero por cuenta ajena**; cuando actúe **en nombre del mandante**, los efectos se proyectan directamente sobre éste, conforme al poder otorgado. Esta arquitectura permite organizar la gestión de negocios con precisión y seguridad. :contentReference[oaicite:7]{index=7}",
                },
                {
                  type: "paragraph",
                  text: "El contenido típico del mandato comprende **instrucciones** del mandante y la correlativa **diligencia** del mandatario. Éste debe **seguir** las directrices, **consultar** lo no previsto y, en ausencia de instrucciones, obrar con la **prudencia** de un buen gestor. El módulo recuerda que el mandante debe **proveer medios**, **pagar gastos** razonables, **remunerar** cuando se pacta y **indemnizar** los perjuicios sufridos por el mandatario en ejecución fiel del encargo. La relación requiere **transparencia** documental: minutas de instrucciones, **comprobantes** de gastos, reportes periódicos y **rendición de cuentas**. En operaciones con terceros, la **suficiencia** del poder —objeto, alcances, facultades— es decisiva para evitar nulidades o ineficacias frente a quienes contratan confiando en la representación.",
                },

                /* — Acordeón 1 — */
                {
                  type: "accordion",
                  header: "Estructura del mandato",
                  open: false,
                  items: [
                    {
                      header: "Sujetos",
                      text: "Mandante (encarga) • Mandatario (ejecuta actos jurídicos).",
                    },
                    {
                      header: "Ámbito",
                      text: "General (múltiples negocios) o especial (acto concreto).",
                    },
                    {
                      header: "Eficacia",
                      text: "Inter partes o frente a terceros vía poder suficiente.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "En cuanto a **responsabilidad**, el mandatario responde por **culpa** en la ejecución y por **excesos** o **desviaciones** del poder. Si se aparta de las instrucciones o actúa **sin poder** (o con poder insuficiente), compromete su **responsabilidad personal** frente a terceros y frente al mandante. A la inversa, cuando actúa dentro de los **límites** del poder, los efectos recaen en el mandante. El material recalca la necesidad de **delimitar** con precisión objeto y facultades (p. ej., pleitos y cobranzas, actos de administración, actos de dominio) y de atender a las formalidades exigidas para ciertos actos (escritura pública, inscripción), pues la representación no suple los **requisitos de forma** del negocio subyacente.",
                },
                {
                  type: "paragraph",
                  text: "El mandato puede coexistir con **relaciones profesionales** (p. ej., abogado-cliente). El módulo menciona los **contratos profesionales** y casos de **abogados litigantes**, donde el **poder judicial** o especial delimita la intervención del profesional ante tribunales. Aunque el vínculo de **prestación de servicios** regula aspectos económicos y de organización, la **representación** procesal requiere **poder** con facultades expresas; sin él, los actos podrían carecer de eficacia frente al órgano jurisdiccional. Así, contrato de servicios y poder son **instrumentos complementarios**: uno ordena la relación interna; el otro habilita la actuación externa.",
                },

                /* — Acordeón 2 — */
                {
                  type: "accordion",
                  header: "Mandato — buenas prácticas",
                  open: false,
                  items: [
                    {
                      header: "Poder suficiente",
                      text: "Redactar objeto y facultades; cuidar formalidades del acto a realizar.",
                    },
                    {
                      header: "Rendición de cuentas",
                      text: "Reportes periódicos; comprobación de gastos; archivo de soportes.",
                    },
                    {
                      header: "Gestión del riesgo",
                      text: "Delimitar vigencia, revocación y sustitución; exclusiones y conflictos de interés.",
                    },
                  ],
                },

                {
                  type: "paragraph",
                  text: "Respecto de la **vigencia** y **terminación**, el mandato cesa por **ejecución** del negocio, por **revocación** del mandante, por **renuncia** del mandatario con aviso, y —en su versión típicamente intuitu personae— por **muerte** de cualquiera de las partes, salvo **interés recíproco** que justifique su subsistencia en beneficio mutuo. La **revocación** debe comunicarse eficazmente y, si el mandato se ejercía frente a terceros, publicitarse conforme a los usos para evitar que se siga **contratando** de buena fe. La existencia de **sustituciones** o **submandatos** exige prever controles y responsabilidad por la elección del sustituto. El material advierte que la terminación no cancela, por sí sola, las **obligaciones pendientes** (p. ej., rendición de cuentas), que deben liquidarse ordenadamente. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "paragraph",
                  text: "Una fuente habitual de litigio radica en la **ambigüedad** del encargo: poderes **genéricos** que no precisan límites, o instrucciones verbales sin soporte escrito. La técnica aconseja **matrices de facultades** (administración, dominio, pleitos) con **umbrales** de autorización (montos, actos sujetos a aprobación expresa) y **plazos** definidos, además de cláusulas sobre **conflictos de interés** y **confidencialidad**. En operaciones complejas, la coordinación entre **mandato**, **contratos de servicios** y **garantías** reduce los vacíos. En sede forense, la prueba de **existencia** y **alcances** del mandato es decisiva; por ello, el módulo insiste en la **documentación** congruente del vínculo.",
                },
                {
                  type: "paragraph",
                  text: "En síntesis, el mandato es un **multiplicador jurídico** que permite al mandante proyectar su acción a través de otro, con eficacia condicionada por la **suficiencia del poder**, la **diligencia** del mandatario y la **claridad** de las instrucciones. Su versatilidad —general o especial; gratuito o remunerado— exige precisión de **alcances** y **formalidades**. Siguiendo las pautas del material (elementos, obligaciones recíprocas, eficacia frente a terceros y terminación), se obtiene una relación **eficiente** y **defendible**, con riesgos acotados y resultados alineados al interés del mandante. :contentReference[oaicite:9]{index=9}",
                },
              ],
              subthemes: [
                {
                  id: "1.4.3.1",
                  numbering: "4.3.1",
                  title: "Características",
                  content: [
                    {
                      type: "paragraph",
                      text: "El mandato es un contrato **principal** por el cual una persona (mandatario) se compromete a realizar o gestionar **actos jurídicos** en nombre de otra (mandante). Su carácter de contrato principal significa que **existe por sí mismo** y no depende de otro negocio para su validez. El material enfatiza que el mandato puede operar **con o sin representación** del mandante; es decir, la gestión puede ejecutarse en nombre propio por cuenta ajena o en nombre del mandante, según el poder conferido. Asimismo, puede ser **gratuito** cuando así se convenga, o **remunerado** conforme a los usos y a la complejidad del encargo; en ambos casos subsiste la exigencia de diligencia y lealtad. Los elementos que el propio texto cita como esenciales son el **mandante**, el **mandatario**, el **encargo lícito** (objeto) y el **consentimiento** (acuerdo de voluntades), de los que derivan las obligaciones nucleares: ejecutar conforme a instrucciones, informar, rendir cuentas y restituir documentos y valores. Estas notas estructurales distinguen al mandato de otros contratos de servicios que no proyectan efectos jurídicos directos en la esfera de quien encarga, y orientan su régimen de responsabilidad. :contentReference[oaicite:1]{index=1}",
                    },
                    {
                      type: "paragraph",
                      text: "Una **nota distintiva** es la **proyección externa** de la actuación: el mandato produce efectos **inter partes** por su sola celebración, pero **frente a terceros** la eficacia representativa exige **poder suficiente**. Sin poder —o si éste es insuficiente— la regla es que los actos no vinculan al mandante; en su caso, comprometen la responsabilidad del mandatario por actuar sin facultades o excederlas. Por ello, la representación no se presume: se **acredita** mediante el instrumento correspondiente (general o especial, y con las formalidades del acto subyacente). La fuente insiste en esta separación entre vínculo interno (contrato) y **legitimación externa** (poder), pues de ella dependen la **validez y oponibilidad** de lo actuado frente a terceros y la administración del riesgo. Esta arquitectura exige una cultura de **documentación**: el poder debe describir objeto, alcances y límites, y conservarse actualizado; mientras, el contrato puede especificar remuneración, gastos y estándares de desempeño, reforzando el control del mandante sobre la gestión. :contentReference[oaicite:2]{index=2}",
                    },
                    {
                      type: "accordion",
                      header: "Rasgos definitorios del mandato",
                      open: false,
                      items: [
                        {
                          header: "Contrato principal",
                          text: "Existe por sí mismo; no es accesorio de otro negocio.",
                        },
                        {
                          header: "Representación opcional",
                          text: "Puede o no proyectar efectos frente a terceros; requiere poder.",
                        },
                        {
                          header: "Gratuidad o remuneración",
                          text: "Admite ambas modalidades sin alterar su naturaleza.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Funcionalmente, el mandato es **instrumental**: habilita a un tercero a ejecutar negocios **ajenos** con eficiencia y continuidad. De ahí deriva su **intuitu personae**: la confianza en la idoneidad del mandatario es clave. No obstante, confianza no implica discrecionalidad ilimitada; la **diligencia** se califica por las instrucciones y por los estándares del encargo. El texto subraya que la **representación** puede no estar presente: hay escenarios de actuación en **nombre propio** por cuenta del mandante (mandato simple), en los que la relación con terceros se ordena mediante cesión, transmisión o rendición final, manteniendo incólume la responsabilidad interna por fidelidad a instrucciones. Esta flexibilidad explica su versatilidad en la vida económica y forense: desde la gestión de contratos cotidianos hasta la intervención en **juicios** con poderes especiales, el mandato actúa como **multiplicador de capacidad** del mandante, pero su potencia depende de una **delimitación clara** de facultades y controles. :contentReference[oaicite:3]{index=3}",
                    },
                    {
                      type: "paragraph",
                      text: "Desde la perspectiva de **riesgo**, las fuentes de conflicto más comunes provienen de (i) **ambigüedad** en el objeto y alcance; (ii) poderes **genéricos** que no cubren actos de administración o de dominio concretos; (iii) ausencia de **prueba** de instrucciones; y (iv) deficiente **rendición de cuentas**. La prevención exige una redacción **taxativa** de facultades (pleitos y cobranzas, actos de administración, actos de dominio), umbrales de autorización (montos o actos que requieren aprobación expresa), y un calendario de **reportes**. Cuando el mandato se inserta en un contrato de **servicios profesionales**, la coordinación entre ambas piezas es vital: el contrato regula economía y organización; el poder habilita la **proyección externa**. Una matriz de riesgos, con pólizas, límites de responsabilidad y protocolos de sustitución, completa el cuadro. En síntesis, el mandato conjuga **confianza** y **técnica documental**: con poder suficiente y gobernanza del encargo, reduce litigios y maximiza resultados.",
                    },
                    {
                      type: "accordion",
                      header: "Errores típicos y cómo evitarlos",
                      open: false,
                      items: [
                        {
                          header: "Poder insuficiente",
                          text: "Alinear forma y facultades al acto subyacente; actualizar vigencia.",
                        },
                        {
                          header: "Instrucciones vagas",
                          text: "Usar minutas y aprobaciones; establecer matriz de decisiones.",
                        },
                        {
                          header: "Falta de cuentas",
                          text: "Rendición periódica, soportes y archivo probatorio.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "La práctica recomienda asociar al mandato un **expediente** con: copia vigente del poder; **minutas** de instrucciones; indicadores del encargo; **comprobantes** y actas de aceptación de actos relevantes. Este expediente es la **columna probatoria** de la buena gestión y del correcto encuadre representativo. Cuando el negocio exige formalidades (escritura, inscripción), la representación **no suple** la forma: el acto debe cubrir los requisitos del régimen sustantivo aplicable. Así, el mandato **no es un atajo** formal, sino la vía para ejecutar con **legitimación** lo que corresponde al mandante. Por ello, sostengo que en operaciones complejas el estándar mínimo es: poder especial **ad hoc** para el acto trascendente, contrato con **SLA** jurídicos (tiempos, hitos, entregables), y **política de conflictos** que preserve independencia y lealtad. Con estas cautelas, el mandato rinde al máximo sin ampliar innecesariamente la exposición del mandante.",
                    },
                  ],
                },
                {
                  id: "1.4.3.2",
                  numbering: "4.3.2",
                  title: "Elementos",
                  content: [
                    {
                      type: "paragraph",
                      text: "Los **elementos** del mandato, según el material, son: (i) **mandante**, quien encarga; (ii) **mandatario**, quien acepta el cargo; (iii) **consentimiento** de ambas partes; (iv) **encargo lícito**, que constituye el **objeto** del contrato; y (v) la **representación**, cuando el acto se realiza a **nombre** del mandante. Además, se exige **capacidad** de obrar de quienes lo celebran y, cuando se pacte, el régimen de **remuneración**. La nota sobre representación es cardinal: puede existir o no dentro del contrato; su ejercicio hacia terceros requiere **poder**. Estas piezas conforman el armazón dogmático que permite calificar la validez del vínculo y proyectar sus efectos. La licitud del encargo delimita el **marco de legalidad** de la ejecución; el consentimiento, su **nacimiento**; la capacidad, su **eficacia**; y la eventual representación, su **oponibilidad** erga omnes. Carecer de cualquiera de estos presupuestos expone a nulidades o ineficacia. :contentReference[oaicite:4]{index=4}",
                    },
                    {
                      type: "paragraph",
                      text: "En la dimensión **externa**, el elemento **poder** es el vehículo de la representación: sin él, la actuación del mandatario no vincula al mandante frente a terceros. El poder debe **describir** el objeto y **acotar** facultades; además, si el acto subyacente exige forma solemne (p. ej., escritura pública para actos de **dominio**), el poder debe **guardarla** para que la representación sea eficaz. El material recalca expresamente que, para que el mandato tenga **validez frente a terceros**, se requiere poder; de lo contrario, la relación es **interna** y la ejecución en nombre propio queda sujeta a regularización posterior. Esta diferenciación protege la **confianza** del tráfico: terceros pueden verificar facultades y límites, reduciendo asimetrías informativas y evitando excesos. Por ello, sostengo que el poder no es accesorio administrativo sino **elemento operativo crítico** del mandato con proyección externa. :contentReference[oaicite:5]{index=5}",
                    },
                    {
                      type: "accordion",
                      header: "Checklist de elementos (validación rápida)",
                      open: false,
                      items: [
                        {
                          header: "Sujetos",
                          text: "Mandante identificado y capaz; mandatario idóneo y aceptante.",
                        },
                        {
                          header: "Objeto",
                          text: "Encargo lícito, determinado o determinable; alcance claro.",
                        },
                        {
                          header: "Representación",
                          text: "Poder congruente con el acto; forma y facultades adecuadas.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "El **objeto** del mandato debe estar **definido** con precisión suficiente para guiar la ejecución y medir el cumplimiento. La indeterminación excesiva abre espacio a desviaciones y disputas. En términos de **competencia**, el encargo debe recaer en actos que el mandante tiene **facultad** de realizar; el mandatario no puede suplir la falta de legitimación sustantiva del mandante. Además, si el encargo implica actos regulados (p. ej., gestión ante autoridad), conviene prever **requisitos habilitantes** adicionales (licencias, colegiaciones). La **remuneración**, cuando existe, forma parte del equilibrio conmutativo: puede condicionarse a hitos (éxito) o ser fija, pero debe armonizarse con la **naturaleza** del encargo (de medios o de resultado) y con el deber de **lealtad**.",
                    },
                    {
                      type: "paragraph",
                      text: "En la **forma**, el mandato como contrato no siempre exige solemnidad, pero la **representación** sí puede exigirla según el acto: poderes notariales para actos de **administración** o **dominio**, inscripciones o apostillas si hay efectos **transnacionales**. El material menciona, por ejemplo, el mandato **judicial** como poder especial para promover e intervenir en **juicios**; su suficiencia se mide por el catálogo de facultades procesales. En contexto transfronterizo, el **mandato otorgado por extranjero** puede requerir formalidades adicionales para surtir efectos en México. Todo ello confirma que la **prueba** del mandato se integra por el contrato y por el poder, cada cual con su función: el **contrato** organiza la relación interna; el **poder** legitima la actuación frente a terceros. :contentReference[oaicite:6]{index=6}",
                    },
                    {
                      type: "accordion",
                      header: "Prueba y forma — claves",
                      open: false,
                      items: [
                        {
                          header: "Contrato",
                          text: "Delimita objeto, remuneración, estándares, cuentas y terminación.",
                        },
                        {
                          header: "Poder",
                          text: "Instrumenta representación; respeta formalidad del acto subyacente.",
                        },
                        {
                          header: "Soportes",
                          text: "Minutas, aprobaciones, correspondencia y comprobantes.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "La **coherencia** entre elementos evita nulidades relativas y conflictos. Si el encargo es **especial**, el poder debe ser **especial**; si el encargo es **general**, define límites funcionales y económicos. Recomiendo un **matriz de facultades** que asigne rangos (pleitos y cobranzas; administración; dominio) y **umbrales** (montos, plazos), más cláusulas de **sustitución** y control del sustituto. Esta ingeniería contractual se traduce en **seguridad jurídica** para el mandante, previsibilidad para el mandatario y confiabilidad para terceros. En suma, los elementos del mandato operan como **condiciones de posibilidad** del negocio: cuando están bien ensamblados, el mandato se convierte en una herramienta de gestión potente y defendible.",
                    },
                  ],
                },
                {
                  id: "1.4.3.3",
                  numbering: "4.3.3",
                  title: "Obligaciones del mandatario y del mandante",
                  content: [
                    {
                      type: "paragraph",
                      text: "Las **obligaciones del mandante** comprenden: (i) **proporcionar** al mandatario todo lo necesario para ejecutar el encargo; (ii) **pagar** los **gastos razonables** incurridos; (iii) cubrir la **remuneración** pactada, si la hubiere; (iv) **reembolsar anticipos** con los **intereses** correspondientes; y (v) **indemnizar** las pérdidas sufridas por el mandatario por causa o en ocasión del mandato, cuando éste haya obrado fielmente. Estas cargas no son accesorias: son el **combustible** operativo del encargo y, al mismo tiempo, límites de responsabilidad si se cumplen oportunamente. Su omisión puede habilitar retenciones o la suspensión de la ejecución, y degradar la colaboración necesaria entre las partes. El material las recoge de forma explícita, con énfasis en la lógica de **equilibrio** conmutativo y en la continuidad del servicio en aquello que depende del mandante. :contentReference[oaicite:7]{index=7}",
                    },
                    {
                      type: "paragraph",
                      text: "Las **obligaciones del mandatario** son correlativas: (i) **seguir** las instrucciones; (ii) **no actuar en contra** de las exposiciones del mandante; (iii) **consultar** lo no previsto; y (iv) en ausencia de instrucciones concretas, obrar con la **prudencia** del buen padre de familia, como si se tratara de negocio propio. A ello se suman deberes de **información**, **rendición de cuentas** y **entrega** de lo obtenido o documentos del mandante. La diligencia del mandatario se mide por el **estándar** pactado o, en su defecto, por el estándar objetivo de su actividad. En toda desviación significativa, el mandatario asume **responsabilidad**; si la desviación es grave o dolosa, la responsabilidad se agrava. El texto fuente resume esta pauta con claridad, anclándola en la doble exigencia de **obediencia** y **prudencia**. :contentReference[oaicite:8]{index=8}",
                    },
                    {
                      type: "accordion",
                      header: "Obligaciones contrapuestas (mapa mental)",
                      open: false,
                      items: [
                        {
                          header: "Mandante",
                          text: "Medios, gastos, remuneración, anticipos con intereses, indemnidad.",
                        },
                        {
                          header: "Mandatario",
                          text: "Instrucciones, consulta, prudencia, información y cuentas.",
                        },
                        {
                          header: "Equilibrio",
                          text: "Cumplimientos recíprocos sostienen continuidad y calidad del encargo.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Respecto de **terceros**, la regla es técnica: el contrato de mandato produce efectos **entre las partes**; para **vincular** al mandante frente a terceros se requiere **poder**. De actuar **sin poder** o **excediendo** facultades, el mandatario compromete su **responsabilidad personal** por los actos celebrados. Esta regla, recogida por el material, preserva la **seguridad del tráfico** y delimita el alcance de la gestión. En la práctica, ello impone tres controles: (i) **verificación documental** previa de facultades; (ii) **congruencia** entre acto y poder (especial para actos singulares, general para gestión amplia); y (iii) **publicidad** oportuna de revocaciones o limitaciones para evitar que terceros de buena fe contraten en base a poderes caducos. :contentReference[oaicite:9]{index=9}",
                    },
                    {
                      type: "paragraph",
                      text: "La **rendición de cuentas** es una obligación estructural: asegura transparencia económica y jurídica. Debe ser **periódica**, verificable y acompañarse de **soportes** (facturas, comprobantes, minutas). En encargos complejos, recomiendo incorporar **indicadores** de desempeño y auditorías proporcionales. La **confidencialidad** y el **conflicto de interés** merecen régimen propio: el mandatario debe proteger la información del mandante y abstenerse de conductas que comprometan su imparcialidad o lealtad. Cuando el mandato convive con **contratos profesionales**, conviene armonizar niveles de servicio y **límites de responsabilidad** para evitar solapamientos y lagunas. Este ecosistema de obligaciones minimiza disputas y fortalece la ejecutabilidad del encargo.",
                    },
                    {
                      type: "accordion",
                      header: "Incumplimientos y remedios",
                      open: false,
                      items: [
                        {
                          header: "Del mandante",
                          text: "Falta de medios/pagos → suspensión, retención, resolución por causa.",
                        },
                        {
                          header: "Del mandatario",
                          text: "Desviación o exceso → indemnización, revocación, responsabilidad personal.",
                        },
                        {
                          header: "Frente a terceros",
                          text: "Acto sin poder → inoponibilidad al mandante y responsabilidad del gestor.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Finalmente, la gestión del incumplimiento reclama **cláusulas claras**: plazos de **subsanación**, **penalidades** proporcionales, terminación por **causa**, y mecanismos de solución **alternativa** de controversias antes de la vía judicial. En encargos expuestos a riesgos materiales o financieros, la cobertura de **seguros** (p. ej., responsabilidad civil profesional) puede ser condición de vigencia, así como **límites de responsabilidad** bien calibrados. Todo ello coadyuva a que el mandato sirva como **plataforma de ejecución** eficaz, alineada al interés del mandante y compatible con la protección debida al mandatario que obra con diligencia y lealtad. La fuente reafirma que el equilibrio entre derechos y obligaciones es el cimiento de un mandato **defendible** y **productivo**. :contentReference[oaicite:10]{index=10}",
                    },
                  ],
                },
                {
                  id: "1.4.3.4",
                  numbering: "4.3.4",
                  title:
                    "Derechos y obligaciones de las partes respecto a terceros",
                  content: [
                    {
                      type: "paragraph",
                      text: "El contrato de mandato despliega su eficacia inmediata entre mandante y mandatario; sin embargo, su proyección frente a terceros depende de la representación. La regla operativa es nítida: el mandato, por sí mismo, no vincula al mandante ante terceros; para que lo actuado sea oponible y válido erga omnes se requiere la exhibición de un poder suficiente y congruente con el acto subyacente. Cuando se actúa sin poder, o rebasando sus límites, el negocio no obliga al mandante y la responsabilidad puede recaer en el mandatario por haber comprometido a otro sin facultades. El material lo expresa de forma directa: el mandato tiene efectos inter partes, pero para que tenga validez frente a terceros se exige poder. Esta arquitectura protege la seguridad del tráfico jurídico, pues permite a los terceros verificar el título representativo antes de concluir. A partir de aquí, la técnica documental —identificación del tipo de poder, su alcance y formalidad— deviene el eje de la gobernanza contractual en relaciones tripartitas. :contentReference[oaicite:0]{index=0}",
                    },
                    {
                      type: "paragraph",
                      text: "La suficiencia del poder se calibra por el catálogo de facultades y por la forma que demande el acto final. Si el encargo incluye actos de administración (arrendar, cobrar, gestionar) bastará un poder con esa habilitación; si comprende actos de dominio (vender, hipotecar), la ley impone facultades expresas y solemnidades reforzadas. La congruencia entre objeto del poder y negocio concluido determina la oponibilidad al mandante. La publicidad de revocaciones y limitaciones resulta igualmente decisiva: frente a terceros de buena fe, la inercia registral o la ausencia de comunicación puede generar aparentes facultades. En clave preventiva, conviene documentar los umbrales que exigen autorización previa del mandante —monto, plazo, tipo de acto— y establecer protocolos de verificación para el tercero (lectura del poder, cotejo de vigencia, coincidencia de identidades). Con ello se reduce el riesgo de ultra vires y se facilita la imputación correcta de efectos.",
                    },
                    {
                      type: "accordion",
                      header: "Reglas frente a terceros (síntesis operativa)",
                      open: false,
                      items: [
                        {
                          header: "Eficacia externa",
                          text: "Exige poder suficiente y congruente con el acto.",
                        },
                        {
                          header: "Exceso o falta de poder",
                          text: "No obliga al mandante; el mandatario puede responder personalmente.",
                        },
                        {
                          header: "Publicidad y forma",
                          text: "Revocaciones notificadas; forma del poder conforma la del acto.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "La responsabilidad del mandatario frente a terceros surge cuando actúa sin poder o excediéndolo, o cuando omite informar límites conocidos. En estos supuestos, el tercero puede exigir el cumplimiento o la indemnización conforme a la teoría del gestor aparente o del representante sin poder, según el sistema aplicable. En sentido inverso, el tercero también tiene cargas: comprobar identidad y vigencia del poder; leer el alcance de facultades; y, en su caso, recabar constancias de autorización del mandante si el acto supera los umbrales acordados. A nivel interno, el mandante sostiene la oponibilidad cumpliendo su propio haz de obligaciones (suministro de medios, reembolsos, remuneración), pues la insuficiencia de soporte puede llevar al mandatario a suspender la ejecución para no exponerse a incumplimientos frente a terceros. Todo el andamiaje exige alineación entre contrato, poder y práctica probatoria.",
                    },
                    {
                      type: "paragraph",
                      text: "Una práctica sólida incorpora anexos estandarizados: (i) matriz de facultades (pleitos y cobranzas; administración; dominio) con ejemplos; (ii) lista de verificación para terceros (identificación, cotejo de poder, vigencia, forma); (iii) minuta de instrucciones relevantes; y (iv) constancias de recepción de documentos. Así, la operación diaria se vuelve replicable y verificable. Sostengo que el mínimo razonable en asuntos sensibles es poder especial ad hoc y constancia expresa de aprobación del mandante, especialmente cuando hay riesgo patrimonial alto o proyección registral. La claridad procedimental genera confianza y reduce litigiosidad: cada participante sabe qué puede exigir y qué debe acreditar. En síntesis, la relación con terceros es segura cuando el triángulo contrato–poder–prueba está bien cerrado. :contentReference[oaicite:1]{index=1}",
                    },
                    {
                      type: "accordion",
                      header: "Controles documentales recomendados",
                      open: false,
                      items: [
                        {
                          header: "Antes de contratar",
                          text: "Cotejar poder, identidad, límites y vigencia.",
                        },
                        {
                          header: "Durante la ejecución",
                          text: "Minutas de instrucciones, aprobaciones y umbrales.",
                        },
                        {
                          header: "Al cierre",
                          text: "Acta de aceptación y archivo probatorio completo.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "1.4.3.5",
                  numbering: "4.3.5",
                  title: "Diversas formas de mandato",
                  content: [
                    {
                      type: "paragraph",
                      text: "El material distingue con precisión varias formas de mandato: **general** y **especial**; **simple** (actuación en nombre propio por cuenta ajena) y **con representación**; **mandato judicial** (poder especial para promover e intervenir en juicios); y, por su formalización, **escrito** o **verbal**. Se agrega un caso práctico: el **mandato otorgado por extranjero**, cuando una persona se encuentra en territorio extranjero y debe ejecutar un acto jurídico en México, usualmente instrumentado mediante poder notarial con las formalidades de derecho aplicable. El mandato **general** habilita al mandatario para intervenir en todos —o en una categoría— de negocios del mandante; el **especial**, para un asunto determinado. Este mapa no solo clasifica; orienta a elegir la figura congruente con el riesgo y el objetivo del encargo, evitando tanto otorgar poderes desproporcionados como constreñir en exceso la actuación necesaria. :contentReference[oaicite:2]{index=2}",
                    },
                    {
                      type: "paragraph",
                      text: "La diferencia entre **simple** y **con representación** es cardinal. En el simple, el mandatario contrata en su propio nombre pero por cuenta del mandante; los efectos frente a terceros recaen inicialmente en el mandatario, quien luego los traslada internamente. En el representativo, el poder proyecta la actuación directamente a la esfera del mandante, con los requisitos de forma y suficiencia. La elección afecta la **trazabilidad** de obligaciones, los **requisitos probatorios** y la **gestión de riesgos**. Para operaciones seriadas y de baja cuantía, puede bastar un esquema simple con controles internos robustos; para actos de alto impacto o con publicidad registral, recomiendo un poder representativo **especial** con descripción taxativa del acto, montos y límites temporales. En sede judicial, el **mandato judicial** debe contener el catálogo de facultades procesales para legitimar la actuación. :contentReference[oaicite:3]{index=3}",
                    },
                    {
                      type: "accordion",
                      header: "Mapa de formas (del material base)",
                      open: false,
                      items: [
                        {
                          header: "General vs. especial",
                          text: "Ámbito amplio de negocios vs. caso determinado.",
                        },
                        {
                          header: "Simple vs. con representación",
                          text: "Actuación en nombre propio vs. en nombre del mandante.",
                        },
                        {
                          header: "Judicial / Escrito o verbal / Extranjero",
                          text: "Facultades procesales; formalización; poder notarial transfronterizo.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "La **forma** no es un adorno: condiciona la **eficacia**. Si el acto final requiere escritura pública, el poder que instrumenta la representación deberá **guardar la misma forma**, y, si proviene del extranjero, ser apostillado o legalizado e inscrito cuando proceda. Incluso en mandatos **verbales**, aconsejo corroborar por escrito el **encargo** y sus límites mediante minutas o intercambios electrónicos para consolidar prueba. La **temporalidad** (vigencia del poder) y la **revocabilidad** deben constar; en contextos corporativos, es útil programar renovaciones y revocaciones automáticas ligadas a cargos. En suma, la forma elegida y su mantenimiento determinan la calidad de la cobertura representativa, un aspecto sobrerrepresentado en los conflictos prácticos por deficiencias instrumentales. :contentReference[oaicite:4]{index=4}",
                    },
                    {
                      type: "paragraph",
                      text: "Para una política de poderes moderna, propongo una **matriz de diseño**: (i) elección del tipo (general/especial; simple/representativo); (ii) definición de **facultades** y **umbrales** (montos, plazos, tipos de acto); (iii) requisitos de **forma** y **publicidad**; (iv) reglas de **sustitución** y control del sustituto; y (v) plan de **revocación** y **archivo** probatorio. Esta matriz se adapta a la complejidad del negocio y a la tolerancia al riesgo del mandante. Agregar métricas de cumplimiento (tiempos de respuesta, porcentaje de actos con soporte íntegro) convierte la política en un sistema vivo, capaz de auditar la práctica y de corregir desalineaciones. De esta manera, el catálogo de formas del mandato deja de ser una lista y se transforma en una **estrategia de gobierno** de la representación. :contentReference[oaicite:5]{index=5}",
                    },
                    {
                      type: "accordion",
                      header: "Cuándo usar cada forma (guía práctica)",
                      open: false,
                      items: [
                        {
                          header: "General",
                          text: "Operación continua con controles internos y límites económicos.",
                        },
                        {
                          header: "Especial",
                          text: "Actos singulares de alto impacto o con registro.",
                        },
                        {
                          header: "Judicial",
                          text: "Necesidad de legitimación procesal con catálogo expreso.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "1.4.3.6",
                  numbering: "4.3.6",
                  title: "Término del mandato",
                  content: [
                    {
                      type: "paragraph",
                      text: "El mandato concluye por **ejecución del negocio**: una vez realizado el encargo, el contrato se extingue respecto de esa finalidad, aunque subsisten —hasta su cumplimiento— las obligaciones residuales de rendición de cuentas, reembolsos y entrega de documentos. El material lo afirma expresamente y, con buen criterio, aclara que la extinción por cumplimiento no borra de inmediato las prestaciones accesorias, sino que éstas fenecen al ser satisfechas. Este enfoque honra la lógica del contrato como instrumento para hacer y cerrar, asegurando que la liquidación final quede probada y ordenada. Por ello, la fase de cierre debe estar diseñada desde el inicio: checklist de entregables, acta de conformidad y corte de cuentas con soportes. Sin esa ingeniería, el cierre se diluye y reabre conflictos por faltantes o gastos no reconocidos. :contentReference[oaicite:6]{index=6}",
                    },
                    {
                      type: "paragraph",
                      text: "Otra causa típica de terminación es la **muerte del mandante o del mandatario**, dado el carácter personalísimo del vínculo, fundado en la confianza. El documento base lo remarca: es un contrato de confianza y, por ello, el fallecimiento suele extinguirlo. Con todo, la práctica reconoce supuestos en que, por el grado de avance o por necesidades de protección de la esfera jurídica del mandante, se habilitan actuaciones de **conservación** o de cierre inmediato para evitar perjuicios, siempre dentro de los márgenes legales. La principal enseñanza pedagógica es no apostar a la inercia: las partes deben prever, contractualmente, cómo se gestionan eventos disruptivos (incapacidad, ausencia, fallecimiento), a fin de no dejar desprotegidos actos en tránsito ni expuestos a reclamaciones por omisiones. :contentReference[oaicite:7]{index=7}",
                    },
                    {
                      type: "accordion",
                      header: "Causas de término (del material)",
                      open: false,
                      items: [
                        {
                          header: "Cumplimiento",
                          text: "Ejecutado el negocio → se extingue el mandato; subsisten cuentas hasta liquidación.",
                        },
                        {
                          header: "Muerte de partes",
                          text: "Extinción por carácter personal y de confianza.",
                        },
                        {
                          header: "Supuestos especiales",
                          text: "Suspensión de ejecución; interés recíproco pactado.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "El texto agrega la **suspensión de la ejecución de un acto** como supuesto relacionado, y menciona el **interés recíproco**: si las partes acordaron expresamente un interés de ambos en la continuación del negocio, el mandato **no termina** con la muerte del mandante. Esta técnica —mandato con interés— opera como excepción para conservar la utilidad económica común y evitar daños por interrupciones repentinas. En la práctica, exige una redacción rigurosa: identificación del interés recíproco, delimitación de actuaciones de cierre y mecanismos de supervisión para la fase posterior al evento. Es recomendable someter esta excepción a **condiciones** (p. ej., solo para actos de conservación) y a plazos breves de regularización mediante designación de nuevo representante. Con ello se equilibra continuidad con seguridad. :contentReference[oaicite:8]{index=8}",
                    },
                    {
                      type: "paragraph",
                      text: "Desde la gestión del riesgo, el **cierre ordenado** del mandato demanda un plan de transición: inventario de documentos y poderes, comunicación a terceros clave, revocación oportuna de poderes no necesarios y archivo de soporte. Recomiendo incorporar en el contrato: (i) cláusula de **avisos** obligatorios ante eventos de término; (ii) plazos de **rendición final**; (iii) reglas para **conservar** actos urgentes; y (iv) canales de **resolución de disputas** focalizados en la liquidación (peritajes contables, mediación). Con una arquitectura así, el término deja de ser una contingencia peligrosa y se convierte en una etapa más del ciclo de vida del mandato, trazable y verificada. Esta es la innovación práctica: diseñar el fin desde el inicio para reducir incertidumbre y litigiosidad. :contentReference[oaicite:9]{index=9}",
                    },
                    {
                      type: "accordion",
                      header: "Checklist de cierre",
                      open: false,
                      items: [
                        {
                          header: "Documentos",
                          text: "Acta de conformidad, cuentas finales, devolución de soportes.",
                        },
                        {
                          header: "Poderes",
                          text: "Revocación/publicidad y retiro de copias en circulación.",
                        },
                        {
                          header: "Terceros",
                          text: "Avisos a contrapartes y autoridades; continuidad solo si hay interés recíproco.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            /* 4.4 Contratos profesionales y otros */
            {
              id: "1.4.4",
              numbering: "4.4",
              title: "Contratos profesionales",
              content: [
                {
                  type: "paragraph",
                  text: "El contrato de prestación de servicios profesionales es un acuerdo **civil, bilateral y conmutativo** mediante el cual una persona con preparación técnica o científica se obliga a ejecutar una actividad intelectual o técnica en favor de un cliente, a cambio de una **remuneración**. El material base subraya que, a diferencia del trabajo subordinado, el profesional conserva **autonomía técnica** y no está sometido a horarios estrictos ni a órdenes jerárquicas, sin perjuicio de los estándares de diligencia y lealtad que rigen su actuación. La validez práctica del contrato exige precisar objeto, alcances, honorarios, plazos, entregables y régimen de **responsabilidad** (de medios o de resultado, según el caso). Asimismo, conviene ordenar la **propiedad intelectual** sobre los productos del servicio, la confidencialidad de la información del cliente y las reglas de **terminación** por cumplimiento o por causa. En términos probatorios, se recomienda formalizar por escrito la oferta, la aceptación, las **condiciones económicas** y los anexos técnicos que sirvan como criterios de aceptación. Esta gramática contractual hace operativas las notas que recoge el módulo: servicio autónomo, remuneración libremente pactada, y obligaciones de conducta compatibles con la ética profesional. :contentReference[oaicite:0]{index=0}",
                },
                {
                  type: "paragraph",
                  text: "El **alcance** del servicio se traduce en un plan de trabajo con hitos, métricas y entregables verificables. Para evitar ambigüedad, el contrato debe definir qué se entiende por **“cumplido”**, cómo se documenta la aceptación (acta o correo formal), y qué efectos tiene la falta de observaciones dentro de un plazo razonable (aceptación tácita). La **retribución** puede estructurarse por hora, por hito, a precio cerrado o con mezcla de esquemas (por ejemplo, una parte fija más un éxito regulado y verificable). En servicios complejos, la **gestión de cambios** (Change Orders) es esencial: cualquier variación de alcance debe quedar aprobada por escrito, con impacto en tiempos y honorarios. El equilibrio económico exige también reglas sobre **gastos reembolsables**, límites de viáticos y comprobación. Finalmente, el profesional debe reportar avances con la **periodicidad** pactada y mantener trazabilidad documental —minutas, entregables intermedios, repositorios— para sustentar su diligencia. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "accordion",
                  header: "Estructura mínima del contrato profesional",
                  open: false,
                  items: [
                    {
                      header: "Objeto y alcances",
                      text: "Descripción técnica, entregables, criterios de aceptación y exclusiones.",
                    },
                    {
                      header: "Honorarios y gastos",
                      text: "Esquema de cobro, reembolsables, facturación y moras.",
                    },
                    {
                      header: "Riesgos y cierre",
                      text: "Límites de responsabilidad, confidencialidad, PI, terminación y liquidación.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "En materia de **responsabilidad**, el estándar habitual en servicios profesionales es el de **obligación de medios**: actuar con la pericia y diligencia propias del oficio, sin garantizar un resultado específico salvo que se pacte expresamente. No obstante, ciertos encargos —p. ej., una **pericia** o un **dictamen**— pueden acercarse al terreno del **resultado** verificable. Para modular el riesgo, son útiles las cláusulas de **limitación de responsabilidad** (nunca absolutas), la exigencia de **seguros** (responsabilidad civil profesional) y un procedimiento de **reclamaciones** que privilegie la subsanación antes que la ruptura. En el eje ético, el módulo destaca la **confidencialidad** y la **lealtad**: el profesional debe abstenerse de conflictos de interés y garantizar la reserva de la información del cliente; el incumplimiento de estas cargas puede activar penas convencionales y la **terminación por causa**. En contratos seriados, una política de **calidad** y auditorías selectivas fortalecen la defensa técnica del servicio. :contentReference[oaicite:2]{index=2}",
                },
                {
                  type: "paragraph",
                  text: "La **terminación** debe diseñarse desde el inicio: por cumplimiento (con acta de conformidad y entrega de repositorio), por **conveniencia** del cliente (con preaviso y pago de lo efectivamente ejecutado), o por **causa** (incumplimiento grave, violación de confidencialidad, impago reiterado). Tras la terminación, subsisten obligaciones de **rendición de cuentas**, devolución de **documentos** y, si aplica, soporte transitorio para asegurar la **continuidad**. En servicios jurídicos, contables o de consultoría, conviene fijar un periodo de **retención** de expedientes y un canal de **acceso** para auditorías posteriores. La solución de controversias puede prever **mediación** previa y jurisdicción competente. En suma, el contrato profesional convierte la confianza en reglas verificables: define qué se hará, con qué calidad, a qué costo y bajo qué remedios, alineando la práctica con los principios pedagógicos que sintetiza el material. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "accordion",
                  header: "Buenas prácticas operativas",
                  open: false,
                  items: [
                    {
                      header: "Gobierno del alcance",
                      text: "Matriz de tareas, cambios controlados, responsables y cronograma.",
                    },
                    {
                      header: "Trazabilidad",
                      text: "Minutas, actas de aceptación, repositorios y respaldo probatorio.",
                    },
                    {
                      header: "Ética y compliance",
                      text: "Confidencialidad, anti-corrupción, conflicto de interés y protección de datos.",
                    },
                  ],
                },
              ],
              subthemes: [
                {
                  id: "1.4.4.1",
                  numbering: "4.4.1",
                  title: "Casos especiales de abogados litigantes",
                  content: [
                    {
                      type: "paragraph",
                      text: "El módulo ilustra un supuesto frecuente: la **prestación de servicios jurídicos** por abogados litigantes. Aunque a veces se **pacta verbalmente**, la técnica aconseja **instrumentar por escrito** el encargo, describiendo materia, estrategia procesal, **honorarios** (fijos, por fases o de éxito), gastos y criterios de comunicación. Este contrato convive con el **poder judicial** que legitima la representación procesal; el primero rige la relación **interna** (honorarios, organización del trabajo, deberes informativos) y el segundo habilita la **proyección externa** frente al órgano jurisdiccional. La claridad documental evita zonas grises: alcance del patrocinio (instancias, incidentes, medidas cautelares), supuestos de **conflicto de interés**, manejo de **fondos** del cliente y reglas de **archivo** del expediente. La experiencia enseña que la firma de un acuerdo marco y **órdenes de trabajo** por asunto ordenan la colaboración y reducen la litigiosidad colateral. :contentReference[oaicite:4]{index=4}",
                    },
                    {
                      type: "paragraph",
                      text: "En materia de **honorarios**, el equilibrio ético exige fijar tarifas **proporcionales** a la complejidad y al valor del asunto. Los **éxitos** pueden pactarse con condiciones objetivas (p. ej., porcentaje sobre recuperación líquida), evitando remuneraciones desproporcionadas o dependencias de **resultados ilícitos**. El contrato debe prever **anticipos**, calendario de **facturación**, y la obligación del cliente de **reembolsar** gastos (peritajes, notificaciones, viáticos) con soporte documental. En cuanto a la **información**, el abogado asume deberes reforzados de **confidencialidad** y **lealtad**: proteger datos sensibles, evitar conflictos y mantener informado al cliente sobre **riesgos** y **escenarios** del litigio. La **gestión de expectativas** es parte del servicio: ningún litigio ofrece garantías absolutas; el compromiso es de técnica y diligencia, no de resultado, salvo supuestos muy específicos. :contentReference[oaicite:5]{index=5}",
                    },
                    {
                      type: "accordion",
                      header: "Dúo contractual: servicios + poder",
                      open: false,
                      items: [
                        {
                          header: "Contrato de servicios",
                          text: "Organiza honorarios, gastos, reportes y ética; rige inter partes.",
                        },
                        {
                          header: "Poder judicial",
                          text: "Instrumenta la representación ante tribunales; rige frente a terceros.",
                        },
                        {
                          header: "Coherencia",
                          text: "Alcance del contrato y facultades del poder deben ser congruentes.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "La **estrategia procesal** y el **gobierno del expediente** se vuelven ejes de calidad: minutas de audiencia, calendarios de **plazos**, matrices de riesgo y bitácoras de actuaciones. La aceptación de **ofertas de convenio** o desistimientos debe sujetarse a **autorizaciones** expresas del cliente, documentadas. En el manejo de **fondos** (p. ej., depósitos de garantía o recibos judiciales), el contrato debe imponer cuentas separadas, **conciliaciones** periódicas y entrega de comprobantes. Ante eventuales **sanciones** o nulidades, conviene delimitar la **responsabilidad** profesional con estándares de diligencia y coberturas de **seguro**. Por último, las cláusulas de **terminación** deben permitir al cliente sustituir patrocinios con orden, garantizando la **entrega** del expediente y la continuidad del proceso sin perjuicio. :contentReference[oaicite:6]{index=6}",
                    },
                    {
                      type: "paragraph",
                      text: "En síntesis, la práctica forense impone una triple coherencia: (i) contrato de servicios **claro y ético**; (ii) **poder** suficiente y actualizado; y (iii) **trazabilidad** documental del proceso. Esta arquitectura, alineada con el material de estudio, eleva la calidad del patrocinio jurídico, protege al **cliente** y dota al **abogado** de un marco defendible para su intervención profesional. Cuando se cumplen estas bases —honorarios transparentes, comunicación efectiva, gobierno de riesgos—, el servicio jurídico no solo resuelve controversias, sino que genera **confianza institucional** en la justicia y en la abogacía misma. :contentReference[oaicite:7]{index=7}",
                    },
                    {
                      type: "accordion",
                      header: "Buenas prácticas en litigio",
                      open: false,
                      items: [
                        {
                          header: "Comunicación",
                          text: "Calendario de reportes; alertas de plazos; resumen de audiencias.",
                        },
                        {
                          header: "Riesgo y ética",
                          text: "Conflictos de interés, confidencialidad, manejo de fondos y seguros.",
                        },
                        {
                          header: "Cierre",
                          text: "Acta de entrega del expediente, cuentas finales y archivo seguro.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "1.4.5",
              numbering: "4.5",
              title: "Contrato de obra a precio alzado",
              content: [
                {
                  type: "paragraph",
                  text: "El módulo presenta la obra a **precio alzado** como un contrato en el que el **contratista** se obliga a ejecutar una obra completa por un **precio fijo**, asumiendo riesgos de costos de materiales, mano de obra e imprevistos, que debe **prever y calcular** en su oferta. Este rasgo —precio cierto e inmodificable salvo causas pactadas— brinda **certeza** al comitente y traslada al contratista la gestión de **eficiencia** y **riesgo**. A cambio, el contratista organiza medios y métodos, sujeta la ejecución a normas técnicas, permisos y seguridad. En esta lógica, la obra a precio alzado es típicamente una **obligación de resultado**: la conformidad se mide por la **entrega** de lo contratado con calidad y funcionalidad. El papel de **licitación** o proyecto ejecutivo, cuando existe, minimiza órdenes de cambio y da trazabilidad al alcance, lo que el material valora como una ventaja para decisiones **ágiles y seguras** del comitente. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "paragraph",
                  text: "La ingeniería contractual debe especificar: **proyecto** y especificaciones; **plazo** total y por hitos; **precio** y modalidad de pago; garantías de **calidad** y **vicios ocultos**; recepción **provisional** y **definitiva**; y régimen de **modificaciones** (solo por escrito). Para blindar el precio, es común pactar reglas de **variación** limitadas (eventos extraordinarios, fuerza mayor) y un mecanismo de **orden de cambio** con valuación objetiva. La **programación** de obra —ruta crítica, insumos críticos, hitos de avance— debe integrarse al contrato como anexo vivo. En materia de **seguridad y medio ambiente**, el contratista asume obligaciones de cumplimiento normativo, seguros y manejo responsable de residuos. La **aceptación** de entrega procede tras **pruebas** y **certificados** de calidad; la garantía corre por un periodo acordado. El expediente técnico —planos, memorias de cálculo, pruebas y manuales— forma parte de la **entrega**. :contentReference[oaicite:9]{index=9}",
                },
                {
                  type: "accordion",
                  header: "Claves del precio alzado",
                  open: false,
                  items: [
                    {
                      header: "Riesgo",
                      text: "El contratista asume variaciones de costos previsibles; excepciones pactadas.",
                    },
                    {
                      header: "Resultado",
                      text: "Aceptación por calidad y funcionalidad (recepciones y garantías).",
                    },
                    {
                      header: "Cambios",
                      text: "Sólo por órdenes formalizadas con valuación y extensión de plazo si procede.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "La **gestión de cambios** es el talón de Aquiles del precio alzado. Para que no se diluya la ventaja de certeza, todo cambio debe: describir alcance, cuantificar impacto en **costo** y **tiempo**, y contar con aprobación **previa**. Si el contratista enfrenta **hechos del comitente** (accesos, suministros, definiciones tardías) que obstruyen la ejecución, el contrato debe prever **prórrogas** y **ajustes**. En sentido inverso, el contratista será responsable por **defectos** de ejecución, **retrasos** imputables y **incumplimiento** de estándares. El **calendario de pagos** ligado a avances certificados contiene la tensión económica y motiva el rendimiento. Una cláusula de **penalizaciones** proporcional, más **bonos** por desempeño, puede alinear incentivos. La solución de controversias técnicas —comisiones de peritos— evita que todo conflicto escale a juicio, protegiendo cronograma y calidad. :contentReference[oaicite:10]{index=10}",
                },
                {
                  type: "paragraph",
                  text: "En el **cierre** de obra, la recepción definitiva acredita que se cumplieron especificaciones y que la obra es **operable**. Desde ahí corre la **garantía** por vicios, con plazos distintos para elementos estructurales y acabados, según lo pactado y la normativa aplicable. El **manual de operación** y los **as-built** (planos “como construido”) consolidan el traspaso de conocimiento al comitente. En términos de **responsabilidad**, el precio alzado no exime al contratista de reparar defectos imputables ni de responder por daños derivados de incumplimientos técnicos. Una gobernanza documental rigurosa —bitácora, estimaciones, pruebas— robustece la defensa de ambas partes. Con este diseño, la obra a precio alzado cumple su promesa de **certeza económica** y **calidad** técnica, conforme al enfoque del material de estudio. :contentReference[oaicite:11]{index=11}",
                },
                {
                  type: "accordion",
                  header: "Checklist de entrega y garantía",
                  open: false,
                  items: [
                    {
                      header: "Recepciones",
                      text: "Provisional con pendientes; definitiva tras subsanar y entregar dossier técnico.",
                    },
                    {
                      header: "Garantías",
                      text: "Plazos por sistemas; respuesta y reparación dentro de tiempos máximos.",
                    },
                    {
                      header: "Documentación",
                      text: "As-built, manuales, certificados y actas firmadas.",
                    },
                  ],
                },
              ],
            },
            {
              id: "1.4.6",
              numbering: "4.6",
              title: "Contrato de hospedaje",
              content: [
                {
                  type: "paragraph",
                  text: "El material describe el **hospedaje** como un contrato por el cual el titular de un establecimiento hotelero se obliga a **ceder el uso** de una o más habitaciones, prestar **servicios** complementarios (limpieza, recepción, resguardo básico de objetos) y **custodiar** ciertos bienes del huésped, a cambio de una **tarifa**. Su estructura combina elementos de arrendamiento de uso temporal con prestaciones de servicios y **custodia**, por lo que su régimen debe armonizar derechos de consumo con responsabilidades civiles específicas. La **reserva**, la **admisión** y la **estadía** se documentan con ficha de registro, políticas de cancelación, reglas de **check-in/check-out** y un reglamento interno que forma parte del contrato. A efectos probatorios, conviene enumerar bienes recibidos en **custodia** (p. ej., cajas fuertes, equipaje), delimitar **responsabilidades** por pérdida o daño, y fijar **límites** razonables, sin eludir la diligencia profesional exigible al prestador. :contentReference[oaicite:12]{index=12}",
                },
                {
                  type: "paragraph",
                  text: "El **precio** puede incluir solo alojamiento o un **paquete** (desayuno, estacionamiento, spa), y debe transparentar impuestos, comisiones y tasas. Las **políticas de cancelación** y no-show equilibran la ocupación del hotel con la protección del consumidor: claridad de plazos y **penalizaciones** proporcionales. En materia de **seguridad**, el establecimiento debe cumplir normas de protección civil, higiene, señalización y **protección de datos** de huéspedes. La **custodia** de objetos sigue la lógica de un depósito limitado: el hotel es responsable cuando **recibe** expresamente bienes y falla en su guarda; no responde por objetos fuera de custodia o abandonados, salvo deberes mínimos de prevención. Para evitar conflictos, los protocolos de **valuación**, **resguardo** y entrega de objetos olvidados deben ser públicos y auditables. :contentReference[oaicite:13]{index=13}",
                },
                {
                  type: "accordion",
                  header: "Componentes del hospedaje",
                  open: false,
                  items: [
                    {
                      header: "Alojamiento",
                      text: "Uso temporal de habitación con reglas de casa y check-in/check-out.",
                    },
                    {
                      header: "Servicios",
                      text: "Limpieza, atención, amenities; paquetes con alimentos o extras.",
                    },
                    {
                      header: "Custodia",
                      text: "Resguardo limitado de bienes; responsabilidad según recepción y protocolos.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Los **deberes del huésped** incluyen el uso **debido** de instalaciones, respeto a reglamento, cuidado de mobiliario y **pago** oportuno. El establecimiento puede resolver el contrato por **incumplimientos graves** (p. ej., daños, conductas peligrosas), siempre con protocolos que resguarden derechos de las personas. En caso de **daños** a instalaciones o mobiliario, el resarcimiento debe basarse en valuaciones objetivas y comprobables. Para servicios de **terceros** (tours, traslados), es recomendable aclarar si el hotel actúa como **intermediario** (sin responsabilidad por ejecución) o como **proveedor** directo. En situaciones de **sobreventa** o indisponibilidad, la mejor práctica es reubicar al huésped en condiciones equivalentes, asumiendo diferencias de precio y traslados. :contentReference[oaicite:14]{index=14}",
                },
                {
                  type: "paragraph",
                  text: "La **terminación** ordinaria ocurre con el check-out; subsiste la obligación del hotel de devolver bienes en custodia y del huésped de cubrir **consumos** pendientes. Extraordinariamente, el contrato puede terminar por **causa** imputable a cualquiera de las partes o por **fuerza mayor** (evacuaciones, cierres sanitarios), con reembolsos y apoyos proporcionales. La transparencia en **reclamaciones** —canales, plazos y escalamiento— reduce fricciones y refuerza la confianza. El hospedaje, bien gestionado, es un acuerdo de **intercambio claro**: uso y servicios a cambio de precio y observancia de reglas. El módulo lo presenta como una figura con especial énfasis en la **custodia** y la **tarifa**; la práctica moderna añade capas de **compliance** y experiencia de usuario que deben traducirse en cláusulas y protocolos operativos verificables. :contentReference[oaicite:15]{index=15}",
                },
                {
                  type: "accordion",
                  header: "Checklist operativo del hotel",
                  open: false,
                  items: [
                    {
                      header: "Reserva y registro",
                      text: "Confirmación, políticas de cancelación, identificación y protección de datos.",
                    },
                    {
                      header: "Seguridad y calidad",
                      text: "Protección civil, higiene, mantenimiento y atención de quejas.",
                    },
                    {
                      header: "Cierre de estancia",
                      text: "Estado de habitación, devolución de custodia, conciliación de cargos.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* 5. CONTRATOS DE ASOCIACIÓN */
        {
          id: "1.5",
          numbering: "5",
          title: "Contratos de asociación",
          content: [
            {
              type: "paragraph",
              text: "Los contratos de asociación regulan la colaboración estable y organizada entre personas que deciden coordinar recursos para un fin común. En el módulo se destacan dos vías típicas: la asociación civil (A.C.), destinada a fines no preponderantemente lucrativos, y la sociedad civil (S.C.), que permite un propósito económico no mercantil. La primera prioriza un objeto lícito de interés social sin reparto de utilidades; la segunda admite participación en resultados bajo reglas pactadas. En ambos casos la clave es transformar la voluntad de asociarse en un diseño institucional: personalidad jurídica propia, patrimonio separado y representación válida frente a terceros. Este tema fija el mapa conceptual y práctico para elegir el vehículo adecuado, redactar su marco normativo interno y operar con seguridad jurídica y trazabilidad documental.",
            },
            {
              type: "paragraph",
              text: "Constituir una A.C. o S.C. exige un acta constitutiva y estatutos claros: denominación, objeto, domicilio, integración del patrimonio inicial y reglas de gobierno. La personalidad jurídica separa el patrimonio social del de los integrantes y habilita contratar, recibir aportaciones o donativos (en su caso) y ejecutar proyectos. La redacción estatutaria debe ser taxativa respecto de facultades y límites, a fin de evitar actos ultra vires. Es indispensable definir la representación legal, congruente con poderes específicos, y prever los supuestos en que ciertos actos requieran aprobación reforzada (p. ej., disposición de bienes o endeudamiento). La forma no es un formalismo: es la fuente de validez interna y de oponibilidad ante terceros.",
            },
            {
              type: "paragraph",
              text: "La gobernanza mínima comprende Asamblea como órgano supremo; un órgano de administración con responsabilidades y controles; y, en su caso, un órgano de vigilancia. Los estatutos deben especificar quórums, mayorías, convocatoria, orden del día y levantamiento de actas. Deben existir reglas sobre conflictos de interés, remoción de cargos y sustituciones. Operativamente, la trazabilidad se sostiene con minutas, registros de acuerdos, matrices de firmas y archivo probatorio. Sin estas piezas, la organización depende de hábitos personales y se expone a nulidades internas o a la ineficacia de sus actos frente a terceros.",
            },
            {
              type: "paragraph",
              text: "En la A.C., el ingreso no se reparte entre asociados; se destina al objeto. Ello no impide actividades económicas accesorias, pero obliga a controles contables y de transparencia. En la S.C., los socios pueden convenir distribución de ganancias conforme a aportaciones o reglas distintas, siempre dentro de su naturaleza civil (no mercantil). En cualquier caso, la responsabilidad frente a terceros la asume la persona moral a través de sus representantes; los integrantes solo responden personalmente cuando actúan sin facultades o en abuso de representación. Esta distinción es decisiva para administrar riesgo y para negociar con contrapartes y autoridades.",
            },
            {
              type: "accordion",
              header: "Claves para elegir y diseñar la figura",
              open: false,
              items: [
                {
                  header: "Finalidad",
                  text: "A.C. → fin no lucrativo; S.C. → fin económico no mercantil.",
                },
                {
                  header: "Gobierno",
                  text: "Órganos definidos, facultades delimitadas y quórums claros.",
                },
                {
                  header: "Representación",
                  text: "Poderes congruentes con actos relevantes y controles de firma.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "La operación cotidiana exige reglas escritas: admisión y separación de miembros, régimen de cuotas o aportaciones, control de donativos (si existen), presupuesto anual y rendición de cuentas. La documentación comercial (contratos, recibos, reportes) debe alinearse con el objeto social; actuar fuera de objeto erosiona legitimidad y puede generar responsabilidad. Conforme al enfoque del módulo, la libertad de asociación se articula con deberes de licitud, organización y transparencia: la vida interna debe poder explicarse con documentos y no con usos informales.",
            },
            {
              type: "paragraph",
              text: "Cumplimiento y ética: políticas de integridad, protección de datos, manejo de recursos y prevención de lavado —cuando sea aplicable— elevan la confianza pública. Establecer calendarios de reporte, auditorías proporcionales y un esquema de atención de quejas consolida la reputación institucional. El vínculo con beneficiarios, donantes o clientes debe ser claro: contratos, avisos de privacidad y mecanismos de evaluación de resultados. La profesionalización no burocratiza; hace defendible la actuación y reduce fricciones legales.",
            },
            {
              type: "accordion",
              header: "Documentos imprescindibles",
              open: false,
              items: [
                {
                  header: "Acta y estatutos",
                  text: "Objeto, órganos, facultades, conflictos de interés y reglas de sesión.",
                },
                {
                  header: "Poderes",
                  text: "Representación para actos de administración y, si procede, de dominio.",
                },
                {
                  header: "Libro de actas y archivo",
                  text: "Minutas, acuerdos, estados financieros y contratos soporte.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "Cierre y cambios estructurales. Las causas de disolución y el proceso de liquidación deben estar previstas: inventario, pago de pasivos, destino del remanente y cancelaciones registrales. Antes de llegar allí, los estatutos pueden contemplar fusiones, escisiones o transformaciones para ajustar la figura al ciclo de vida del proyecto. La regla de oro es anticipar: diseñar el final desde el inicio evita improvisación en momentos críticos y protege a integrantes y terceros. Así, los contratos de asociación pasan de ser una aspiración a constituir una plataforma jurídica eficaz para la cooperación sostenida.",
            },
          ],
          subthemes: [
            {
              id: "1.5.1",
              numbering: "5.1",
              title: "La asociación civil",
              content: [
                {
                  type: "paragraph",
                  text: "La asociación civil (A.C.) es una persona moral integrada por individuos que deciden unirse de manera no transitoria para perseguir un fin común lícito de carácter primordialmente no lucrativo. El material enfatiza que el derecho a asociarse está protegido como libertad fundamental —garantizada en instrumentos internacionales y en la Constitución mexicana— siempre que el objeto sea lícito y pacífico. A partir de ese marco, la A.C. se constituye mediante un acuerdo de voluntades que cristaliza en estatutos: allí se fijan denominación, objeto, domicilio, patrimonio inicial, reglas de admisión y separación de asociados, así como la estructura orgánica (asamblea, órgano de administración y, en su caso, vigilancia). Esta naturaleza no lucrativa no impide actividades económicas accesorias; exige, sí, que los ingresos contribuyan al objeto y no se distribuyan utilidades entre los asociados. El valor pedagógico del tema es doble: identificar la A.C. como herramienta jurídica de participación social y traducir esa vocación en reglas de gobernanza, transparencia y responsabilidad frente a terceros. :contentReference[oaicite:0]{index=0}",
                },
                {
                  type: "paragraph",
                  text: "Constituir una A.C. implica definir el “para qué” (objeto) y el “cómo” (gobernanza). El acta constitutiva y los estatutos deben establecer un mapa claro de facultades: la asamblea como órgano supremo de decisión; un órgano de administración con representación legal; y, cuando sea pertinente, un comisariado o consejo de vigilancia. Esa arquitectura delimita quién convoca, cómo se sesiona y vota, cuáles actos requieren mayoría calificada y qué controles existen sobre conflictos de interés. El material insiste en la licitud del objeto y en la libertad de asociación; la técnica contemporánea añade estándares de cumplimiento: políticas de integridad, control de donativos y trazabilidad de gastos. El patrimonio de la A.C. se integra por aportaciones, donaciones y bienes que adquiera; su administración debe orientar recursos al objeto y someterse a rendición de cuentas. Esta combinación de voluntad, objeto lícito y reglas orgánicas convierte a la A.C. en un vehículo confiable para fines comunitarios. :contentReference[oaicite:1]{index=1}",
                },
                {
                  type: "image",
                  src: "https://image.jimcdn.com/app/cms/image/transf/none/path/sd17ce63d2d944620/image/i44252dba7f73c91e/version/1516570723/image.jpg",
                  alt: "Esquema orgánico de una asociación civil (asamblea, administración, vigilancia)",
                  caption:
                    "Mapa mínimo de gobierno asociativo —solo referencial para fines didácticos.",
                },
                {
                  type: "paragraph",
                  text: "Derechos y deberes de los asociados deben quedar escritos para evitar fricciones. Derechos típicos: voz y voto en asamblea, acceso a información, posibilidad de integrar órganos. Deberes: cumplir estatutos, cubrir cuotas (si existen), observar políticas internas y proteger el prestigio institucional. La admisión y separación han de ser objetivas y motivadas, evitando discrecionalidad. En materia de representación, la asociación se obliga frente a terceros a través de sus representantes estatutarios; por ello, es crucial la congruencia entre lo pactado en estatutos, los poderes otorgados y los actos celebrados. La responsabilidad civil de la A.C. como persona moral no traslada per se a los asociados; sin embargo, éstos pueden incurrir en responsabilidad personal si actúan ultra vires o en abuso de representación. Un reglamento interno operativo —complemento de estatutos— clarifica procedimientos de proyectos, compras y control documental.",
                },
                {
                  type: "accordion",
                  header: "Claves normativas y de gobernanza",
                  open: false,
                  items: [
                    {
                      header: "Libertad de asociación",
                      text: "Fundamento en instrumentos internacionales y en la Constitución; objeto lícito y pacífico. :contentReference[oaicite:2]{index=2}",
                    },
                    {
                      header: "Estatutos",
                      text: "Órganos, facultades, quórums, conflictos de interés, régimen disciplinario.",
                    },
                    {
                      header: "Transparencia",
                      text: "Rendición de cuentas, control de donativos y trazabilidad presupuestal.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "La vida asociativa se sostiene con procedimientos: convocatorias claras, orden del día, actas firmadas y archivo seguro. El control de donativos (en efectivo o especie) exige registros, conciliaciones y, en su caso, políticas de aceptación y de devolución. La gestión de proyectos debe alinearse con el objeto; actividades fuera de objeto erosionan la legitimidad y pueden generar responsabilidad. En relaciones con terceros (proveedores, beneficiarios, autoridades), el cumplimiento documental —contratos, recibos, reportes— respalda cada actuación. Si la asociación pretende beneficios fiscales o acreditaciones, los estatutos y la operación cotidiana deben reflejar estándares de integridad, prevención de lavado y protección de datos personales. Todo ello no burocratiza: profesionaliza y hace defendible el impacto social pretendido.",
                },
                {
                  type: "paragraph",
                  text: "Comparativamente, la asociación civil se diferencia de otras figuras del módulo: la sociedad civil (según el material, entendida en sentido amplio de tejido social) y las sociedades mercantiles. La A.C. persigue fines no preponderantemente económicos y organiza participación social; la “sociedad civil” como fenómeno social describe redes ciudadanas y organizaciones de diversa índole; y las sociedades mercantiles persiguen lucro con reparto de utilidades. Este contraste evita confusiones terminológicas y ayuda a elegir el vehículo adecuado para cada fin. En síntesis, la A.C. traduce el derecho de asociación en una estructura con reglas exigibles: finalidad lícita, gobierno responsable y rendición de cuentas ante asociados y terceros. :contentReference[oaicite:3]{index=3}",
                },
                {
                  type: "accordion",
                  header: "Checklist de constitución y operación",
                  open: false,
                  items: [
                    {
                      header: "Constitución",
                      text: "Denominación, objeto lícito, domicilio, patrimonio, estatutos y poderes.",
                    },
                    {
                      header: "Gobierno",
                      text: "Asamblea, administración, vigilancia; quórums y mayorías.",
                    },
                    {
                      header: "Operación",
                      text: "Actas, contratos, donativos, archivo y políticas de integridad.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Riesgos y cierre. Riesgos frecuentes: desviación de objeto, opacidad en donativos, representación defectuosa y conflictos internos. Mitigación: auditorías proporcionales, capacitación a directivos, política de conflictos, y manuales de procedimientos. Para disolver la A.C., los estatutos deben prever causales, quórums y destino del remanente patrimonial (consistente con el carácter no lucrativo). La liquidación exige inventario, pago de pasivos y entrega de bienes conforme a estatutos y a la ley. El aprendizaje que subraya el módulo es claro: la A.C. es un diseño institucional que, bien gobernado, potencia la cooperación social y legitima su actuación ante la comunidad y el Estado. :contentReference[oaicite:4]{index=4}",
                },
              ],
            },
            {
              id: "1.5.2",
              numbering: "5.2",
              title: "La sociedad civil",
              content: [
                {
                  type: "paragraph",
                  text: "En el material del módulo, “sociedad civil” se expone en sentido amplio: el conjunto organizado de personas y colectivos —distintos del Estado— que participan en la esfera pública para influir en decisiones, proponer soluciones y exigir rendición de cuentas. No se reduce a una figura jurídica única, sino a un **espacio cívico** de agrupación, deliberación y acción. Desde esa óptica, la sociedad civil opera mediante organizaciones, movimientos, redes y plataformas que se articulan con vehículos legales (asociaciones civiles, fundaciones u otras personas morales) para realizar proyectos y representar intereses legítimos. La finalidad es elevar demandas por vías institucionales, impulsar cambios y fortalecer la vida democrática, siempre sobre la base de la libertad de reunión y de asociación. El texto recalca su carácter **dinámico y cambiante**, históricamente asociado a transformaciones en la relación Estado–sociedad. Este encuadre sitúa el estudio jurídico en su contexto social: las normas habilitan, encauzan y controlan la actuación cívica. :contentReference[oaicite:5]{index=5}",
                },
                {
                  type: "paragraph",
                  text: "El marco constitucional y de derechos humanos protege la organización pacífica con objeto lícito; en México, la libertad de asociación y de reunión pacífica constituyen cimientos del espacio cívico. Sobre ese fundamento, la sociedad civil se expresa en iniciativas temáticas (educación, salud, ambiente), en mecanismos de participación (observatorios, contralorías ciudadanas) y en **colaboraciones público–sociales**. Para que esas expresiones sean efectivas, requieren canales de **legitimidad** (membresías claras, procesos representativos), **legalidad** (enrolamiento en figuras jurídicas cuando corresponda) y **conducta ética** (transparencia y rendición de cuentas). De allí que muchas organizaciones opten por constituirse como **asociaciones civiles**, que brindan personalidad jurídica, patrimonio propio y representación para contratar, recibir donativos y ejecutar proyectos. El material traza así un puente entre el concepto sociológico y las herramientas del derecho privado. :contentReference[oaicite:6]{index=6}",
                },
                {
                  type: "image",
                  src: "https://i.pinimg.com/736x/cf/58/c2/cf58c270f594a1a08a04945fef9593be.jpg",
                  alt: "Mapa conceptual del espacio cívico y sus vehículos jurídicos",
                  caption:
                    "Sociedad civil como tejido organizado: redes, asociaciones y plataformas.",
                },
                {
                  type: "paragraph",
                  text: "La sociedad civil es **evolutiva**: se reconfigura ante cambios tecnológicos, económicos y culturales. Ello plantea retos jurídicos: protección de datos en campañas, integridad en procuración de fondos, responsabilidad por mensajes y manejo de plataformas digitales. La respuesta no es burocratizar la participación, sino dotarla de **confianza pública**: reglas claras sobre quién decide, cómo se administra el patrimonio, qué controles existen frente a conflictos de interés y cómo se reportan resultados. La esfera cívica gana legitimidad cuando sus actores adoptan estándares de gobernanza comparables a los exigidos al sector público y al privado. El módulo invita a transitar de una visión abstracta de “sociedad civil” a una práctica institucionalizada que combina libertad con responsabilidad, participación con profesionalización y activismo con eficacia probatoria. :contentReference[oaicite:7]{index=7}",
                },
                {
                  type: "accordion",
                  header: "Rasgos del enfoque del módulo",
                  open: false,
                  items: [
                    {
                      header: "Ámbito",
                      text: "Espacio cívico organizado, distinto del Estado.",
                    },
                    {
                      header: "Finalidad",
                      text: "Incidir por vías institucionales en asuntos públicos.",
                    },
                    {
                      header: "Herramientas",
                      text: "Uso de vehículos jurídicos (p. ej., A.C.) para operar y representar.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "En la práctica, conviene distinguir entre el **concepto sociológico** de sociedad civil y la **figura jurídica** de sociedad civil del código civil (contrato por el que dos o más personas se obligan a combinar recursos para un fin común preponderantemente económico no especulativo). El material adopta el primer sentido; aun así, el operador jurídico debe ubicar los instrumentos disponibles: asociación civil para fines no lucrativos, sociedad civil (como persona moral de derecho privado) para actividades con finalidad económica no mercantil, y sociedades mercantiles para fines de lucro con especulación comercial. Este deslinde semántico y dogmático evita errores de encuadre y de compliance. En todos los casos, el respeto al derecho de asociación y la licitud del objeto funcionan como **mínimos** comunes. :contentReference[oaicite:8]{index=8}",
                },
                {
                  type: "accordion",
                  header: "Distinciones rápidas",
                  open: false,
                  items: [
                    {
                      header: "Sociedad civil (concepto social)",
                      text: "Tejido ciudadano organizado que incide en lo público. :contentReference[oaicite:9]{index=9}",
                    },
                    {
                      header: "Asociación civil",
                      text: "Persona moral no lucrativa para realizar un fin común lícito.",
                    },
                    {
                      header: "Sociedad civil (figura jurídica)",
                      text: "Persona moral con fin económico no mercantil (distinta de la mercantil).",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Régimen operativo recomendado. Toda organización del espacio cívico que opere con personalidad jurídica debe fortalecer: (i) **gobernanza** (estatutos claros, asambleas efectivas, órganos con funciones definidas); (ii) **transparencia** (presupuestos, informes, auditorías proporcionales); (iii) **cumplimiento** (políticas de integridad, protección de datos, prevención de lavado donde aplique); y (iv) **participación** (mecanismos de escucha y rendición de cuentas a beneficiarios y asociados). Estas capas no sustituyen la energía social; la canalizan con legitimidad y eficacia. El mensaje central del módulo es pragmático: la sociedad civil, concebida como actor colectivo, se robustece cuando su acción se apoya en diseños institucionales claros y en el uso correcto de figuras de derecho privado para sostener su misión ante la ley y la comunidad. :contentReference[oaicite:10]{index=10}",
                },
                {
                  type: "paragraph",
                  text: "Cierre y aplicaciones. Para diagnosticar y diseñar organizaciones del espacio cívico, use un **checklist**: misión y objeto; vehículo jurídico idóneo (A.C., S.C. u otro); mapa de partes interesadas; plan de financiamiento; matriz de riesgos; y sistema de evaluación de resultados. Vincule cada proyecto con indicadores y evidencias —actas, contratos, reportes, testimonios— que soporten rendición de cuentas. La claridad conceptual (qué entendemos por sociedad civil) y la precisión jurídica (bajo qué figura operamos) evitan errores frecuentes y litigios innecesarios. Así, la sociedad civil, lejos de ser una noción difusa, se convierte en **capacidad institucional** para transformar realidades con base en reglas claras, integridad y eficacia demostrable, tal como lo propone el material de estudio. :contentReference[oaicite:11]{index=11}",
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
          href: "https://www.youtube.com/watch?v=goD1C4a3cv4", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "CONTRATO DE COMODATO — Video (YouTube) https://www.youtube.com/watch?v=goD1C4a3cv4",
            "Código Civil para el Estado de Veracruz de Ignacio de la Llave — Texto oficial (PDF) https://www.legisver.gob.mx/leyes/LeyesPDF/CCIVIL231117.pdf",
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
            "Arellano García, C. (2001). Manual del abogado. Práctica jurídica. México: Porrúa.",
            "Calvo Marroquín, O. (1999). Derecho mercantil. México: Porrúa.",
            "Capictant, C. (1987). Instituciones de derecho civil. México: Porrúa.",
            "Código Civil para el Estado de Veracruz (s.f.). https://www.legisver.gob.mx/leyes/LeyesPDF/CODIGOCIVIL13062022.pdf",
            "De Pina Vara, R. (1994). Derecho civil mexicano. México: Porrúa.",
            'Real Academia Española (2023). Diccionario panhispánico del español jurídico (DPEJ): "incapaz". https://dpej.rae.es/lema/incapaz',
            "Gutiérrez y González, E. (1996). Derecho de las obligaciones. México: Porrúa.",
            "Constitución Política de los Estados Unidos Mexicanos, art. 9. https://mexico.justia.com/federales/constitucion-politica-de-los-estados-unidos-mexicanos/titulo-primero/capitulo-i/#articulo-9",
            "Justia México. Derecho mercantil. https://mexico.justia.com/derecho-mercantil/",
            "Latra, J. (2005). Fundamentos de derecho. México: McGraw-Hill.",
            "Ramírez, A. (2022). Introducción al derecho civil (4.ª ed.). Editorial Jurídica.",
            "Rojina Villegas, R. (1998). Derecho civil mexicano: Bienes, derechos reales y posesión. México: Porrúa.",
            "Rojina Villegas, R. (2009). Compendio de derecho civil III. México: Porrúa.",
            "Rojina Villegas, R. (2014). Compendio de derecho civil: Introducción, personas y familia. México: Porrúa.",
            "ROJINA, V. R. (2008). Compendio de derecho civil II. México: Porrúa.",
            "Treviño García, R. (1995). Los contratos civiles y sus generalidades. México: McGraw-Hill.",
            "Vara, D. P. (1965). Diccionario de Derecho. México: Porrúa.",
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
