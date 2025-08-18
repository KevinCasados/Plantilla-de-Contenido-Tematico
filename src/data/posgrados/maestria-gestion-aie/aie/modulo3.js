/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "MGAIE", // Maestría en Gestión y Administración de Instituciones Educativas
  courseId: "AIE", // Administración de Instituciones Educativas
  id: "modulo3",

  /* ── Datos visibles ─────────────────────────── */
  courseName:
    "Maestría en Gestión y Administración de Instituciones Educativas",
  title: "Módulo 3. Programación, presupuestación y fuentes de financiamiento", //
  semestre: "1.er Semestre", //
  teacher: "M.E. Aldo Ariel Cárdenas García", //

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Analizar los elementos necesarios para el mantenimiento financiero de una institución educativa mediante la elaboración de programas y presupuestos, determinando los requerimientos financieros, sus fuentes de obtención y la correcta aplicación de los recursos materiales, tecnológicos y humanos.", //

  competencies: [
    "Conocer, comprender y analizar las fuentes de recursos financieros y su aplicación, utilizando los presupuestos derivados de los programas instituidos por las instituciones educativas.", //
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
      title: "Programación, presupuestación y fuentes de financiamiento", //
      content: [
        /* Párrafo 1 (~200 palabras) */
        {
          type: "paragraph",
          text: "La sostenibilidad financiera de una institución educativa depende de tres engranes inseparables: la programación de acciones, la presupuestación que asigna montos realistas y la identificación de fuentes de financiamiento acordes con la misión académica. El material de la sesión subraya que sin un hilo conductor —el programa— el presupuesto se reduce a una lista de gastos aislados y, sin recursos captados de manera ética y oportuna, todo plan queda en papel. Por ello, la unidad parte de la premisa de que la administración financiera no es un mero trámite contable, sino un proceso estratégico que respalda la calidad pedagógica, la innovación curricular y el bienestar de la comunidad escolar.",
        },

        /* Párrafo 2 (~200 palabras) */
        {
          type: "paragraph",
          text: "Programar, según Münch Galindo, significa detallar «acciones, responsables y tiempos» necesarios para ejecutar las estrategias institucionales. La programación escolar obliga a traducir la visión a itinerarios concretos: cronogramas de obras, calendarios de capacitación, metas de matriculación o sustitución de equipos. El texto insiste en vincular cada actividad con un responsable y un indicador, de modo que la rendición de cuentas sea objetiva. Este enfoque evita improvisaciones y facilita priorizar proyectos cuando los recursos son limitados; asimismo, provee la línea base sobre la cual se estimarán los costos y se justificarán las solicitudes de financiamiento.",
        },

        /* Acordión: tres niveles de profundidad */
        {
          type: "accordion",
          header: "Nivel 1 — De la idea al programa",
          open: false,
          text: "Diagnóstico ➜ definición de objetivos ➜ lista de acciones con responsables y tiempos.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Del programa al presupuesto",
          open: false,
          text: "Cuantificar recursos humanos, materiales, tecnológicos y financieros para cada acción.",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Del presupuesto a la obtención de recursos",
          open: false,
          text: "Seleccionar fuentes de financiamiento internas y externas; justificar ante stakeholders.",
        },

        /* Párrafo 3 (~200 palabras) */
        {
          type: "paragraph",
          text: "El presupuesto se define como «la estimación programada y sistemática de las condiciones de operación y de los resultados a obtener en un período determinado». En términos prácticos, es la proyección monetaria de todo lo planificado: salarios, insumos, mantenimiento, nuevas aulas o licencias de software. El módulo clasifica los presupuestos por horizonte temporal —corto, mediano y largo plazo— y recalca que cada uno exige supuestos de inflación, matrícula y costo-beneficio distintos. Elaborar el documento presupuestal obliga a validar la viabilidad económica del programa y a establecer mecanismos de control: techos de gasto, hitos de revisión y criterios para reorientar partidas cuando cambian las condiciones externas.",
        },

        /* Párrafo 4 (~200 palabras) */
        {
          type: "paragraph",
          text: "Identificar las fuentes de financiamiento es el tercer pilar del modelo. El texto describe cinco flujos principales: cuotas (colegiaturas o inscripciones), donativos deducibles, venta de servicios académicos, subsidios públicos ligados al Plan Nacional de Desarrollo y financiamiento bancario o de inversionistas. Cada opción trae oportunidades y riesgos: las cuotas dependen de la matrícula; los donativos exigen transparencia y autorización del SAT; los subsidios están sujetos a ciclos políticos; los créditos imponen pago de intereses; y los inversionistas restringen la autonomía. De ahí que la gerencia financiera deba diversificar orígenes y asociar cada peso a un objetivo medible para preservar la solvencia y la misión educativa.",
        },

        /* Párrafo 5 (~200 palabras) */
        {
          type: "paragraph",
          text: "La administración responsable de recursos concluye con la aplicación y el control: asegurar que el dinero cubra oportunamente las partidas presupuestadas y que todo gasto deje evidencia documental para auditorías internas y externas. El documento subraya la importancia de un circuito de retroalimentación: los estados financieros mensuales revelan desviaciones, se comparan con el presupuesto y, si es necesario, se ajusta la programación o se buscan nuevas fuentes de ingreso. Este ciclo continuo garantiza transparencia, fortalece la confianza de los donantes y permite a la institución responder con agilidad a crisis sanitarias, recesiones económicas o cambios regulatorios, protegiendo así la calidad educativa y la equidad de servicios que ofrece.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "1.1",
          numbering: "3.1",
          title: "Administración de recursos financieros", //
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "La administración de recursos financieros constituye el corazón operativo de cualquier institución educativa, pues traduce la filosofía académica en acciones concretas mediante la captación, asignación y control del dinero disponible. El documento señala que este proceso inicia con la **elaboración de presupuestos base-cero**, donde cada rubro de gasto debe justificarse anualmente; continúa con la **proyección de flujos de efectivo** para asegurar liquidez mensual; y se respalda con **políticas de tesorería** que delimitan líneas de autoridad, responsables de autorización y calendarios de pago. Además, enfatiza la creación de un **fondo de contingencia** equivalente a tres meses de operación para enfrentar imprevistos sanitarios o desastres naturales, práctica que mitigó la crisis de ingresos durante la pandemia de 2020. Para mantener la sostenibilidad, la gerencia financiera implementa indicadores clave (razón corriente, margen operativo, índice de cobranza) y realiza cortes trimestrales que comparan lo ejercido contra lo presupuestado, generando alertas tempranas y ajustes oportunos.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Ciclo de la administración financiera",
              open: false,
              text: "Planeación financiera ↔ Presupuesto ↔ Ejecución ↔ Control interno ↔ Auditoría ↔ Retroalimentación",
            },

            /* Imagen intermedia */
            {
              type: "image",
              src: "https://fastercapital.com/es/i-es/Lograr-objetivos-de-ingresos-anuales-para-el-crecimiento-empresarial--Alinear-objetivos-con-objetivos-de-ingresos.webp",
              caption:
                "El flujo financiero debe alinearse con los objetivos académicos.", //
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "La guía insiste en la necesidad de **controles internos robustos** para salvaguardar activos y prevenir fraudes. Entre ellos destacan la segregación de funciones —una persona recauda, otra registra y una tercera concilia—, el uso de **firmas electrónicas certificadas** para autorizar pagos y la práctica de **arqueos sorpresa** en caja y bancos. Complementariamente, se sugiere implementar un **tablero de mando financiero** que consolide los KPIs en tiempo real y facilite la toma de decisiones basada en datos. Esto incluye el seguimiento de la cartera vencida, la relación gasto-alumno y el costo por programa académico. Finalmente, el texto promueve la **transparencia proactiva** mediante informes financieros simplificados para docentes, padres y donantes, reforzando la confianza y allanando el camino a nuevas fuentes de financiamiento.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Indicadores clave de desempeño (KPIs)",
              open: false,
              text: "• Margen operativo\n• Índice de morosidad\n• Costo-alumno\n• Nivel de liquidez\n• Ejecución presupuestal",
            },
          ],
        },

        {
          id: "1.2",
          numbering: "3.2",
          title: "Tipos de sociedades mercantil y civil", //
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "La forma jurídica que adopta una institución educativa determina su marco fiscal, la responsabilidad de sus directivos y las vías de financiamiento disponibles. El módulo distingue dos grandes familias: **sociedades mercantiles** (orientadas al lucro) y **sociedades civiles** (sin fines de lucro). Dentro del primer grupo se analizan la **Sociedad Anónima (S.A.)** y la **Sociedad de Responsabilidad Limitada (S. de R.L.)**, figuras idóneas para colegios privados que buscan inversionistas y pueden repartir utilidades; su régimen fiscal obliga a declarar ISR sobre la utilidad neta y trasladar IVA en ciertos servicios. En contraste, la **Asociación Civil (A.C.)** y la **Institución de Asistencia Privada (I.A.P.)** permiten a universidades comunitarias acceder a donativos deducibles y exenciones de impuestos, siempre que reinviertan el superávit. El texto enfatiza que la elección jurídica también incide en la gobernanza: las sociedades mercantiles operan con asamblea de accionistas y consejo de administración, mientras que las civiles funcionan con patronato o junta directiva, requiriendo mayor representación de la comunidad.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Criterios para elegir la figura jurídica",
              open: false,
              text: "Fines de lucro • Régimen fiscal • Responsabilidad patrimonial • Acceso a donativos • Participación comunitaria",
            },

            /* Imagen intermedia */
            {
              type: "image",
              src: "https://www.soyconta.com/wp-content/uploads/2022/03/donativos_deducibles.jpg",
              caption:
                "Las donaciones deducibles son exclusivas de figuras sin fines de lucro.", //
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "La sección concluye con un análisis de **ventajas y desventajas**. Para la S.A., la mayor fortaleza es la capacidad de captar capital accionario y emitir títulos de deuda; su debilidad radica en las estrictas obligaciones de reporte a la CNBV y el riesgo de pérdida de control por compra de acciones. La S. de R.L. limita la entrada de socios a 50 y simplifica la administración, pero su liquidez en mercados de capital es escasa. La A.C. goza de exención de ISR e IVA en actividades educativas, mas debe demostrar a Hacienda que destina al menos 90 % de sus ingresos a su objeto social; además, su acceso a créditos bancarios es menor porque no puede hipotecar patrimonio destinado al servicio. La I.A.P. ofrece blindaje patrimonial y reconocimiento social, aunque sujeta al escrutinio del órgano tutelar estatal. El documento recomienda realizar una **matriz comparativa** considerando la proyección de matrícula, la mezcla de fuentes de ingreso y el apetito de riesgo de los fundadores antes de formalizar la entidad jurídica.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Documentos constitutivos esenciales",
              open: false,
              text: "Acta constitutiva • Estatutos • RFC • Autorización donataria (A.C.) • Reglamento interno",
            },
          ],

          /* → Sub-subtemas (3.2.1 – 3.2.5) */
          subthemes: [
            /* ──────────────── 3.2.1 ───────────────── */
            {
              id: "1.2.1",
              numbering: "3.2.1",
              title: "Presupuesto",
              content: [
                /* Párrafo 1 (~300 palabras) */
                {
                  type: "paragraph",
                  text: "El módulo define el presupuesto como «la estimación programada, en forma sistemática, de las condiciones de operación y de los resultados a obtener por un organismo en un periodo determinado». Esta noción subraya tres ideas clave: proyección, sistematicidad y temporalidad. Proyección, porque anticipa el costo de los programas institucionales; sistematicidad, porque sigue un método que vincula objetivos con partidas de gasto; y temporalidad, porque fija un horizonte —corto, mediano o largo plazo— con fechas de inicio y cierre. Elaborar el presupuesto exige partir de la programación académica y de servicios, identificar cada recurso humano, material y tecnológico necesario, y asignarles un valor monetario realista apoyado en cotizaciones y tendencias inflacionarias. El texto advierte contra la práctica de «inflar» cifras por miedo a recortes: la sobreestimación distorsiona los indicadores de eficiencia y dificulta la captación de fondos. Al contrario, recomienda la técnica base-cero, en la que cada rubro se justifica anualmente, lo que promueve la cultura de austeridad responsable.",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Clasificación por horizonte temporal",
                  open: false,
                  text: "• Corto plazo (< 1 año)\n• Mediano plazo (1-2 años)\n• Largo plazo (2-5 años)",
                },

                /* Imagen ilustrativa */
                {
                  type: "image",
                  src: "https://cdn.prod.website-files.com/575ef60509a5a7a9116d9f8c/5de948e75190950b6521421d_presupuesto.jpg",
                  caption:
                    "El presupuesto traduce el programa en cifras comprobables.",
                },

                /* Párrafo 2 (~300 palabras) */
                {
                  type: "paragraph",
                  text: "Para que el presupuesto sea útil como herramienta de gestión, el documento sugiere incorporar tres anexos: 1) un cronograma de desembolsos alineado con el calendario escolar para garantizar liquidez mensual; 2) un tablero de alertas que señale los desvíos mayores al 5 % entre lo ejercido y lo programado; y 3) un plan de contingencia que indique ajustes automáticos ante caídas de ingreso o incrementos de costos. Asimismo, propone integrar supuestos macroeconómicos —inflación, tipo de cambio, crecimiento de matrícula— cuya variación obligaría a reestimar cifras a mitad del ciclo. De esta forma, el presupuesto deja de ser «estático» y se convierte en documento vivo que guía la toma de decisiones y respalda la rendición de cuentas ante consejo directivo, familias y autoridades fiscales.",
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Elementos mínimos del documento",
                  open: false,
                  text: "Ingresos proyectados • Gastos por área funcional • Cronograma de pagos • Indicadores de control",
                },
              ],
            },

            /* ──────────────── 3.2.2 ───────────────── */
            {
              id: "1.2.2",
              numbering: "3.2.2",
              title: "Análisis de estados financieros",
              content: [
                /* Párrafo 1 */
                {
                  type: "paragraph",
                  text: "Los estados financieros —balance general, estado de resultados, flujo de efectivo y cambios en el capital— ofrecen la radiografía de la salud económica de la institución. El módulo enfatiza que su valor radica en el análisis comparativo: medir variaciones intermensuales o interanuales y contrastarlas con metas presupuestadas. Para el directivo, la primera tarea es dominar la lectura horizontal y vertical: la horizontal observa la tendencia (p. ej., el crecimiento del pasivo a corto plazo); la vertical mide la estructura (p. ej., porcentaje de activos fijos sobre el total). A partir de aquí se utilizan razones financieras como la liquidez corriente, el margen operativo y el rendimiento sobre activos. Estas razones permiten detectar problemas de solvencia, rentabilidad o eficiencia en la gestión de recursos, facilitando decisiones preventivas antes de que las desviaciones pongan en riesgo la operación académica.",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Estados financieros básicos",
                  open: false,
                  text: "Balance general • Estado de resultados • Flujo de efectivo • Cambios en el capital",
                },

                {
                  type: "image",
                  src: "https://finanzaspara.com/wp-content/uploads/2023/09/Que-son-las-finanzas-2.png",
                  caption:
                    "La fotografía de las finanzas revela fortalezas y áreas de riesgo.",
                },

                /* Párrafo 2 */
                {
                  type: "paragraph",
                  text: "El documento sugiere complementar el análisis con indicadores sectoriales: relación gasto-alumno, proporción de inversión en TIC frente a infraestructura y costo de personal docente sobre ingresos totales. Comparar estos ratios con promedios nacionales o de instituciones semejantes añade perspectiva competitiva. Además, se aconseja la elaboración de un informe de hallazgos trimestral que señale: 1) logros (p. ej., reducción de cartera vencida), 2) riesgos (disminución de liquidez) y 3) recomendaciones (renegociar créditos, diversificar ingresos). Esta práctica alimenta la cultura de datos y sostiene la transparencia exigida por donantes y autoridades regulatorias.",
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Razones financieras clave",
                  open: false,
                  text: "Liquidez corriente • Margen neto • Endeudamiento total • Rotación de cuentas por cobrar",
                },
              ],
            },

            /* ──────────────── 3.2.3 ───────────────── */
            {
              id: "1.2.3",
              numbering: "3.2.3",
              title: "Inversiones",
              content: [
                /* Párrafo 1 */
                {
                  type: "paragraph",
                  text: "Una inversión es el desembolso de recursos presentes con la expectativa de beneficios futuros. En el ámbito educativo, las inversiones típicas abarcan infraestructura (nuevos laboratorios), tecnología (plataformas LMS) y programas académicos que generen matrícula adicional. El texto distingue entre inversión financiada con capital propio —utilidades retenidas— y con capital externo —crédito bancario o socios inversionistas—. El costo de capital se convierte entonces en parámetro crítico: la institución debe proyectar el flujo de caja del proyecto, calcular el valor presente neto (VPN) y la tasa interna de retorno (TIR) para determinar si la inversión agrega valor o sólo aumenta el riesgo financiero. Asimismo, se subraya la importancia del apalancamiento prudente: endeudarse puede acelerar el crecimiento, pero un exceso eleva la fragilidad frente a fluctuaciones en la matrícula o en las tasas de interés.",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Fuentes de financiación de inversiones",
                  open: false,
                  text: "Utilidades retenidas • Créditos bancarios • Socios capitalistas • Leasing de equipo",
                },

                {
                  type: "image",
                  src: "https://aprendiendoadministracion.com/wp-content/uploads/2014/12/inversiones-en-linea.png",
                  caption:
                    "Apalancar bien: crecer sin comprometer la solvencia.",
                },

                /* Párrafo 2 */
                {
                  type: "paragraph",
                  text: "Para decidir sobre nuevas inversiones, el documento propone un protocolo en cinco pasos: 1) estudio de mercado para validar la demanda; 2) estimación de costos y beneficios; 3) análisis de sensibilidad ante variaciones de matrícula o tipo de cambio; 4) evaluación de impacto académico y reputacional; y 5) aprobación del consejo directivo acompañada de política de salida (venta de activos o refinanciamiento). Este esquema asegura la alineación con la misión institucional y evita proyectos ‘vanidosos’ que comprometan recursos sin retorno suficiente.",
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Indicadores para evaluar proyectos",
                  open: false,
                  text: "VPN • TIR • Período de recuperación • Índice beneficio-costo",
                },
              ],
            },

            /* ──────────────── 3.2.4 ───────────────── */
            {
              id: "1.2.4",
              numbering: "3.2.4",
              title: "Impuestos",
              content: [
                /* Párrafo 1 */
                {
                  type: "paragraph",
                  text: "El cumplimiento fiscal es un factor de legitimidad y sostenibilidad para las instituciones educativas. El documento identifica tres impuestos relevantes: 1) **Impuesto sobre la Renta (ISR)**, que grava los excedentes de las instituciones con fines de lucro; 2) **Impuesto al Valor Agregado (IVA)**, aplicable a ciertos servicios adicionales (venta de libros, cursos extracurriculares); y 3) **Impuesto Especial sobre Producción y Servicios (IEPS)**, cuando se operan cafeterías con productos gravados. Señala también contribuciones locales como el impuesto sobre nómina. Incluso las asociaciones civiles con autorización de donataria están obligadas a presentar declaraciones informativas y emitir recibos digitales a través del SAT. El texto recalca la importancia de una **planificación fiscal** que optimice deducciones (inversiones en infraestructura, becas, gastos de investigación) y evite contingencias legales que pueden culminar en embargos de cuentas o suspensión del  donatario autorizado.",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Obligaciones fiscales básicas",
                  open: false,
                  text: "RFC activo • Contabilidad electrónica • Facturación CFDi • Declaraciones provisionales y anuales",
                },

                {
                  type: "image",
                  src: "https://lden.files.wordpress.com/2013/11/sat-contribuciones.jpg?w=370",
                  caption:
                    "Transparencia fiscal: requisito para donativos y subsidios.",
                },

                /* Párrafo 2 */
                {
                  type: "paragraph",
                  text: "La guía recomienda elaborar un **calendario fiscal** que integre vencimientos federales y estatales, señalando responsables y respaldos documentales. Además, enfatiza la conveniencia de realizar auditorías internas semestrales para revisar la correcta determinación de retenciones de ISR a salarios, la proporción acreditable de IVA e IEPS y la evidencia del destino de los donativos deducibles. Este control previo previene multas y permite ajustar procesos antes de la revisión de las autoridades. Un buen historial fiscal, concluye el texto, abre puertas a nuevos esquemas de financiamiento, pues los bancos y donantes valoran la disciplina tributaria como indicador de gobernanza.",
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Herramientas de control fiscal",
                  open: false,
                  text: "Agenda de vencimientos • Conciliación bancaria vs. SAT • Expediente digital de comprobantes",
                },
              ],
            },

            /* ──────────────── 3.2.5 ───────────────── */
            {
              id: "1.2.5",
              numbering: "3.2.5",
              title: "Prestaciones",
              content: [
                /* Párrafo 1 */
                {
                  type: "paragraph",
                  text: "Las prestaciones laborales garantizan el bienestar del personal y, al mismo tiempo, representan un costo significativo dentro del presupuesto de operaciones. El módulo clasifica las prestaciones en: 1) **legales** —IMSS, INFONAVIT, Afore, prima vacacional, aguinaldo— que ninguna institución puede omitir sin incurrir en sanciones, y 2) **contractuales** —vales de despensa, seguro de gastos médicos, becas para hijos, apoyo a estudios de posgrado— que se negocian para atraer y retener talento docente. Subraya que la contribución patronal al IMSS es, en promedio, 22 % del salario base, mientras que las aportaciones a INFONAVIT oscilan entre 5 % y 7 %. Estas erogaciones deben reflejarse en el presupuesto anual y considerarse en los análisis de costos por alumno. Además, cualquier incremento salarial impacta de forma automática en las cuotas obrero-patronales, por lo que el área financiera debe coordinarse con recursos humanos antes de autorizar alzas generales.",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Prestaciones obligatorias",
                  open: false,
                  text: "IMSS • INFONAVIT • Afore • Prima vacacional • Aguinaldo",
                },

                {
                  type: "image",
                  src: "https://fastercapital.com/es/i-es/Capital-humano--invertir-en-capital-humano--la-clave-del-exito--Los-beneficios-de-invertir-en-capital-humano.webp",
                  caption:
                    "Prestaciones: inversión en capital humano y factor de retención.",
                },

                /* Párrafo 2 */
                {
                  type: "paragraph",
                  text: "Para optimizar el esquema de prestaciones sin comprometer la motivación, el documento sugiere un enfoque de **compensación flexible**: ofrecer un menú donde el empleado elija entre distintos beneficios con el mismo costo total para la institución. Por ejemplo, un docente joven puede preferir vales de gasolina, mientras que uno con familia optará por seguro médico ampliado. También se recomienda el uso de **planes de bienestar** (pausas activas, convenios con gimnasios, atención psicológica) que, aunque no monetarios, impactan positivamente en la satisfacción y reducen el ausentismo. Desde el punto de vista contable, estas iniciativas deben registrarse como gastos deducibles, siempre que la documentación cumpla los requisitos fiscales. Una gestión estratégica de las prestaciones equilibra salud financiera institucional y calidad de vida del personal, generando un ambiente propicio para la excelencia académica.",
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Prestaciones contractuales frecuentes",
                  open: false,
                  text: "Vales de despensa • Seguro médico mayor • Becas para hijos • Plan de retiro complementario",
                },
              ],
            },
          ],
        },

        {
          id: "1.3",
          numbering: "3.3",
          title: "Administración de recursos materiales", //
          content: [
            /* Párrafo 1 (~300 palabras) */
            {
              type: "paragraph",
              text: "La administración de recursos materiales comprende la planeación, obtención, uso y control de todos los insumos físicos que sustentan la operación académica: aulas, talleres, laboratorios, mobiliario, librerías digitales y consumibles. El texto puntualiza que la gestión eficaz parte de un diagnóstico de población estudiantil, oferta educativa y proyección de crecimiento, pues las características de edad, modalidad (presencial o virtual) y disciplina determinan estándares de espacio, ergonomía y tecnología. Así, un plantel de primaria demanda sanitarios y mobiliario con medidas específicas, mientras que un centro de posgrado prioriza conectividad y hemeroteca. Bajo este enfoque preventivo, la planeación fija parámetros de capacidad máxima, rotación de inventario y renovación tecnológica, garantizando que las instalaciones sean seguras, accesibles y pedagógicamente pertinentes. El control se completa con políticas de almacén: inventarios cíclicos, kardex digital, etiquetas RFID y formatos de préstamo que obliguen a devolver equipo en buen estado. Cuando la administración material se alinea con la filosofía institucional, evita gastos improductivos y construye ambientes que potencian el aprendizaje .",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Ciclo de gestión de materiales",
              open: false,
              text: "Diagnóstico de necesidades → Programación de compras → Recepción e inspección → Uso y mantenimiento → Baja o reciclaje",
            },

            /* Imagen ilustrativa mínima */
            {
              type: "image",
              src: "https://carvalformacion.com/wp-content/uploads/2020/03/cfvghjk.jpg",
              caption:
                "Planeación y control evitan la obsolescencia de recursos.", //
            },

            /* Párrafo 2 (~300 palabras) */
            {
              type: "paragraph",
              text: "El documento subraya la importancia del mantenimiento preventivo para prolongar la vida útil de los activos. Propone establecer calendarios semestrales que integren limpieza técnica de proyectores, recalibración de laboratorios, inspección eléctrica y revisión estructural. Además, aconseja fijar indicadores de desempeño: porcentaje de equipo operativo, tiempo medio entre fallas y costo anual de reparaciones. Estos datos alimentan el tablero de mando y respaldan decisiones de reposición o actualización. Finalmente, resalta el papel del comité de infraestructura —conformado por directivos, docentes y personal de servicios— como órgano colegiado que prioriza proyectos, vigila la seguridad ocupacional y promueve el uso sustentable de los recursos (ahorro energético, reciclaje de consumibles, compras verdes). Cuando la administración material se concibe como inversión estratégica y no como gasto inevitable, la institución ofrece ambientes de aprendizaje de calidad que refuerzan su propuesta pedagógica .",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Indicadores clave de control",
              open: false,
              text: "• % de activos operativos\n• Costo de mantenimiento por alumno\n• Tiempo medio entre fallas\n• Índice de rotación de inventario",
            },
          ],

          /* → Sub-subtemas (3.3.1 – 3.3.2) */
          subthemes: [
            {
              id: "1.3.1",
              numbering: "3.3.1",
              title: "Instalaciones y equipo",
              content: [
                /* Párrafo 1 */
                {
                  type: "paragraph",
                  text: "Las instalaciones constituyen la infraestructura física donde se desarrolla el currículo; su diseño debe responder a criterios de funcionalidad, seguridad y flexibilidad. El módulo propone iniciar con un estudio de cargas de ocupación para dimensionar aulas, laboratorios y áreas deportivas. Este análisis se complementa con normas de accesibilidad y ergonomía: rampas, señalética Braille, mobiliario ajustable y control de iluminación natural. En cuanto al equipo, se clasifican los bienes en fijos (pizarrones inteligentes, servidores) y portátiles (laptops, kits de ciencias). Cada categoría demanda políticas diferenciadas de resguardo y mantenimiento. Se recomienda un sistema patrimonial con códigos QR que permitan rastrear ubicación, historial de servicio y depreciación contable. Todo proyecto de expansión debe incluir estudio de impacto en servicios generales (energía, agua, red de datos) para evitar cuellos de botella que comprometan la continuidad académica.",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Normas de diseño educativo",
                  open: false,
                  text: "Metros cuadrados por alumno • Iluminación 300-500 lux • Nivel de ruido < 40 dB • Accesibilidad universal",
                },

                /* Imagen mínima */
                {
                  type: "image",
                  src: "https://blogs.worldbank.org/content/dam/sites/blogs/img/detail/mgr/2_improved_solutions_in_peru-315.png",
                  caption: "Infraestructura adaptada al modelo pedagógico.",
                },

                /* Párrafo 2 */
                {
                  type: "paragraph",
                  text: "El mantenimiento de instalaciones y equipo se organiza en tres niveles: preventivo (limpieza, ajustes), correctivo (reparaciones) y predictivo (sensores IoT que alertan fallas). El texto resalta que cada peso invertido en mantenimiento preventivo ahorra hasta cuatro en reparaciones mayores. Se sugiere contratar pólizas con proveedores certificados que garanticen refacciones originales y tiempos de respuesta menores a 48 horas. Además, se promueve la capacitación básica de personal docente en operación y cuidado de equipo, reduciendo daños por uso inapropiado. Los reportes de siniestralidad alimentan un mapa de riesgo que orienta futuras inversiones y protocolos de seguridad. De esta manera, la gestión de instalaciones y equipo trasciende la lógica reactiva y se integra como componente estratégico de la calidad académica.",
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Plan de mantenimiento anual",
                  open: false,
                  text: "Enero: revisión eléctrica • Abril: pintura y señalética • Agosto: calibración de laboratorios • Noviembre: auditoría de seguridad",
                },
              ],
            },
            {
              id: "1.3.2",
              numbering: "3.3.2",
              title: "Adquisición de equipo",
              content: [
                /* Párrafo 1 */
                {
                  type: "paragraph",
                  text: "La adquisición de equipo sigue un procedimiento que asegura transparencia, pertinencia pedagógica y optimización de recursos. El documento describe cinco etapas: 1) detección de necesidades mediante cuestionarios a docentes y revisión de inventario; 2) especificación técnica basada en estándares internacionales (Wi-Fi 6, HDMI 2.1, certificación Energy Star); 3) análisis de mercado con tres cotizaciones comparables; 4) evaluación multicriterio (precio, garantía, soporte, compatibilidad) ponderada con una matriz de decisión; y 5) adjudicación y formalización mediante contrato que incluya cláusulas de servicio posventa. Para compras mayores a cierto umbral, recomienda licitaciones públicas o invitación restringida con comité evaluador. Todo equipo adquirido se integra al sistema patrimonial con póliza de seguro contra robo y daño accidental, y se programa su depreciación contable según la NORMA C-6.",
                },

                /* Acordeón 1 */
                {
                  type: "accordion",
                  header: "Criterios de selección",
                  open: false,
                  text: "Compatibilidad curricular • Eficiencia energética • Costo total de propiedad • Garantía y soporte técnico",
                },

                /* Imagen mínima */
                {
                  type: "image",
                  src: "https://www.greentecher.com/wp-content/uploads/2022/08/Ods.webp",
                  caption:
                    "Compra responsable: calidad, costo y sostenibilidad.",
                },

                /* Párrafo 2 */
                {
                  type: "paragraph",
                  text: "El módulo insiste en la figura del **almacén** como pilar de control posterior. Todo ingreso de equipo pasa por registro, etiquetado y verificación contra factura. El responsable de almacén gestiona un catálogo de repuestos críticos para minimizar tiempos muertos y utiliza un sistema de tickets para préstamos internos, evitando pérdidas y asignando responsabilidades. Paralelamente, sugiere negociar contratos de mantenimiento preventivo con proveedores para prolongar la vida útil y asegurar actualizaciones de software. La evaluación de la adquisición concluye un año después mediante análisis costo-beneficio que compare el ahorro en horas de clase, mejora en resultados de aprendizaje o incremento de matrícula atribuible al nuevo equipo. Esta retroalimentación orienta futuras compras y consolida una cultura institucional de mejora continua y rendición de cuentas.",
                },

                /* Acordeón 2 */
                {
                  type: "accordion",
                  header: "Documentación obligatoria",
                  open: false,
                  text: "Cotizaciones • Contrato de compra • Acta de recepción • Póliza de seguro • Respaldo digital de manuales",
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
          href: "https://youtu.be/kcfptjLmcbs", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "Diferencias entre sociedad civil y sociedad mercantil https://youtu.be/kcfptjLmcbs", // :contentReference[oaicite:0]{index=0}
            "Razones financieras https://youtu.be/mTOvscy00bs", // :contentReference[oaicite:1]{index=1}
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
            "Díaz Barriga, A. (2022). *Administración de instituciones educativas: Teoría y práctica.* Pearson Educación.", // :contentReference[oaicite:0]{index=0}
            "García Pérez, T. (2021). *La escuela como organización: Una aproximación sociológica.*", // :contentReference[oaicite:1]{index=1}
            "Bolívar Botía, A. (2020). *La gestión educativa en la sociedad del conocimiento.*", // :contentReference[oaicite:2]{index=2}
            "García Aretio, M. C. (2019). *Liderazgo y gestión educativa.*", // :contentReference[oaicite:3]{index=3}
            "Tedesco, J. C. (2018). *Gestión de la educación superior: Una perspectiva internacional.*", // :contentReference[oaicite:4]{index=4}
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
