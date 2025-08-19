/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LD", // Licenciatura en Derecho
  courseId: "LD-IED", // Introducción al estudio del Derecho
  id: "LD-IED-MOD2",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Introducción al estudio del Derecho",
  title:
    "Módulo 2. Clasificación de normas, Estado de Derecho y ramas del Derecho",
  semestre: "Primero",
  teacher: "Dr. José Valentín Ramos Fajardo",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Profundizar en los conceptos básicos del área: clasificaciones de las normas jurídicas desde enfoques diversos; nociones fundamentales del Estado y del Estado de Derecho; diferencias entre Derecho Público, Privado y la vertiente Social; principales ramas del Derecho; y conceptos jurídicos esenciales como norma y supuesto jurídico, consecuencia de derecho y hecho jurídico, para afianzar el lenguaje y la práctica inicial del jurista.",
  competencies: [
    "Clasificar normas jurídicas conforme a sistema, fuente, ámbitos (espacial, temporal, material, personal), jerarquía, sanción, cualidad, complementación y voluntad de los particulares.",
    "Distinguir elementos del Estado (población, territorio y gobierno/poder) y explicar el sentido del Estado de Derecho.",
    "Diferenciar Derecho Público, Privado y Social, argumentando su pertinencia práctica.",
    "Reconocer y ubicar las principales ramas del Derecho público y privado, así como otras ramas de corte social.",
    "Definir y ejemplificar norma jurídica, supuesto de hecho, consecuencia jurídica y hecho/acto jurídico.",
    "Relacionar categorías teóricas con casos sencillos, empleando vocabulario jurídico preciso.",
    "Valorar la jerarquía normativa (bloque de constitucionalidad, leyes ordinarias, reglamentos y normas individualizadas) en escenarios de aplicación.",
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

    /* 5. Clasificación de las normas jurídicas */
    {
      id: "5",
      numbering: "Unidad 5",
      title: "Clasificación de las normas jurídicas",
      content: [
        {
          type: "paragraph",
          text: "Clasificar las normas jurídicas permite entender cómo, cuándo y a quién se aplican, así como su fuerza obligatoria y sus límites. Lejos de ser un ejercicio meramente taxonómico, la clasificación ofrece un mapa para operar el derecho en casos concretos: ayuda a identificar la fuente de la que proviene la norma, el espacio y tiempo en el que tiene vigencia, su relación con otras normas del sistema y la intensidad de las consecuencias jurídicas ante su incumplimiento. Autores clásicos como García Máynez muestran que una misma ley admite diversas lecturas clasificatorias según el ángulo elegido; por eso el estudio ordenado de criterios—sistema al que pertenecen, fuente, ámbitos de validez, jerarquía, sanción, cualidad, relaciones de complementación y voluntad de los particulares—se vuelve instrumental para el jurista. En esta unidad examinamos dichas claves con ejemplos cotidianos (p. ej., diferencias entre leyes federales y locales, normas generales e individualizadas, o reglas permisivas y prohibitivas) para que el alumnado consolide competencias de interpretación y argumentación desde el primer semestre. La meta es conectar teoría y práctica: que cada categoría sirva para razonar mejor un caso, redactar con precisión un escrito o anticipar los efectos de una reforma normativa.",
        },
        {
          type: "paragraph",
          text: "Un primer criterio ubica a las normas según el sistema al que pertenecen: nacionales, extranjeras o de derecho uniforme cuando dos o más Estados acuerdan reglas comunes. Otro criterio observa la fuente: derecho escrito (emanado del proceso legislativo) frente a normas provenientes de la costumbre o de la jurisprudencia. Esta doble mirada ilumina, por ejemplo, cómo resolver un conflicto de aplicación entre un código local y un tratado: no basta saber de dónde viene la norma; hay que determinar también su lugar en el orden jurídico y su radio de acción. En lo cotidiano, distinguir la procedencia evita confundir el carácter general de una ley formal con la especificidad de una norma individualizada (como un contrato o una sentencia), y guía la estrategia procesal: si invoco costumbre o jurisprudencia, debo justificar su existencia y pertinencia; si invoco ley, su vigencia y compatibilidad con normas superiores. Estas distinciones, lejos de ser abstractas, impactan en la vida de personas y organizaciones cuando una autoridad decide qué regla gobierna un hecho, en qué términos y con qué consecuencias.",
        },
        {
          type: "paragraph",
          text: "El estudio de los ámbitos de validez—espacial, temporal, material y personal—ofrece una brújula para aplicar correctamente una norma. El ámbito espacial delimita dónde rige: una ley federal alcanza todo el territorio nacional; una estatal, solo su entidad; una municipal, su demarcación. El ámbito temporal exige fijar inicio y, en su caso, término de vigencia, así como distinguir derogación (cesa eficacia de una norma por otra posterior) y abrogación (supresión total o parcial). El ámbito material conecta con grandes campos del derecho (público, privado y social) que orientan finalidades y técnicas de regulación. Por último, el ámbito personal distingue entre normas generales (dirigidas a una colectividad) e individualizadas (dictadas para sujetos concretos), que a su vez pueden ser privadas (contratos, testamentos) o públicas (sentencias, concesiones). Dominar estos ámbitos evita errores frecuentes: aplicar leyes fuera de su territorio, exigir efectos antes de su entrada en vigor o confundir destinatarios, lo que compromete la validez del acto y expone a nulidades o ineficacia.",
        },
        {
          type: "paragraph",
          text: "Otra pieza clave es la jerarquía normativa. En la cúspide se reconoce hoy el llamado bloque de constitucionalidad—Constitución y tratados internacionales—del que se desprende la validez y el control de compatibilidad del resto del ordenamiento. Debajo se sitúan las leyes generales u ordinarias y, en un nivel operativo, los reglamentos y disposiciones administrativas que desarrollan la ley, siempre subordinadas a ella. En el plano micro, aparecen las normas individualizadas que concretan la regla general en un caso (contratos, resoluciones). Conocer la jerarquía permite sostener con rigor un argumento de invalidez (por contradicción vertical), resolver antinomias y aplicar criterios de interpretación (especialidad, temporalidad, competencia). En la práctica, la defensa jurídica suele articularse en dos frentes: verificar la regularidad constitucional/convencional de la norma aplicada y, después, su ajuste a la ley y a los requisitos formales y materiales del procedimiento, cerrando con la correcta individualización de sus efectos sobre los sujetos involucrados.",
        },
        {
          type: "paragraph",
          text: "Finalmente, conviene revisar cuatro criterios adicionales. Por la sanción: leyes perfectas (anulan el acto contrario), más que perfectas (castigan sin anular), menos que perfectas (no impiden, pero sancionan) e imperfectas (fijan deberes sin sanción). Por la cualidad: normas permisivas/positivas frente a prohibitivas/negativas. Por la relación de complementación: primarias (autosuficientes) y secundarias (de vigencia, explicativas, permisivas, interpretativas, sancionadoras). Y por la voluntad de los particulares: taxativas (imperativas) versus dispositivas (dejeción a la autonomía de la voluntad). Estas categorías operan juntas cuando interpretamos un caso: no es igual incumplir una norma imperativa con sanción anulatoria que una permisiva con sanción meramente pecuniaria; tampoco es lo mismo una regla autosuficiente que otra que exige reglamentación para producir efectos. Al ejercitar estos lentes, el futuro jurista fortalece su criterio para escoger la norma aplicable, prever riesgos y diseñar soluciones que respeten jerarquía, vigencia y competencia material y personal.",
        },

        /* ── Acordeones (3 niveles) ── */
        {
          type: "accordion",
          header: "Fuentes y sistema al que pertenecen",
          open: false,
          text: "Desde la óptica del sistema, distinguimos normas nacionales, extranjeras y de derecho uniforme, útiles para coordinar ordenamientos entre Estados. Por fuente, diferenciamos derecho escrito (resultado del proceso legislativo) de la costumbre y la jurisprudencia. Esta doble clasificación guía la selección y el control de validez: si una autoridad aplica un tratado frente a una ley local, el parámetro jerárquico y de especialidad cobra relevancia; si se invoca costumbre, debe acreditarse su práctica constante y la convicción de obligatoriedad; si se invoca jurisprudencia, su fuerza vinculante según reglas del tribunal. Entender estas vías evita confundir origen con jerarquía y ayuda a plantear estrategias sólidas.",
        },
        {
          type: "accordion",
          header: "Ámbitos de validez y jerarquía",
          open: false,
          text: "El ámbito espacial delimita territorio de aplicación; el temporal, la vigencia; el material, la pertenencia al derecho público, privado o social; y el personal, los sujetos destinatarios (generales o individualizados, públicos o privados). En jerarquía, el bloque de constitucionalidad (Constitución y tratados) rige al resto del ordenamiento; le siguen leyes ordinarias y, después, reglamentos. Las normas individualizadas concretan la regla general. Con esta brújula resolvemos antinomias (por jerarquía, especialidad o temporalidad), prevenimos vicios de competencia y aplicamos efectos con precisión sobre sujetos y hechos jurídicos.",
        },
        {
          type: "accordion",
          header: "Sanción, cualidad y complementación",
          open: false,
          text: "Según la sanción, las normas pueden anular actos, castigarlos sin anularlos, sancionarlos sin impedir su realización o carecer de sanción expresa. Por su cualidad, habilitan (permisivas) o prohíben (negativas) conductas. En cuanto a complementación, hay normas primarias (completas) y secundarias (de vigencia, explicativas, permisivas, interpretativas, sancionadoras) que desarrollan a las primeras. Un último eje distingue entre normas taxativas (imperativas) y dispositivas (que dejan margen a la autonomía privada). Estas categorías combinadas permiten medir riesgos, diseñar actos válidos y encuadrar la respuesta jurídica adecuada ante infracciones o controversias.",
        },
      ],
      subthemes: [
        {
          id: "5.1",
          numbering: "5.1",
          title: "Diversas clasificaciones de las leyes",
          content: [
            {
              type: "paragraph",
              text: "Estudiar cómo se clasifican las leyes no es un ejercicio meramente taxonómico: permite comprender mejor su alcance, su fuerza obligatoria y las vías adecuadas para aplicarlas e interpretarlas en casos concretos. En el material se recuerda, primero, que la ley es la única fuente formal del Derecho que resulta del proceso legislativo; pero, una vez promulgada, esas leyes pueden ordenarse desde distintos puntos de vista que iluminan su uso práctico en la vida social. Siguiendo la pauta clásica de la doctrina —con especial referencia a García Máynez— se inicia por una clasificación según el sistema al que pertenecen: hay leyes nacionales, cuando el propio país las expide; extranjeras, cuando provienen de otro Estado; y de derecho uniforme, cuando dos o más países acuerdan una normatividad común válida para todos ellos. Desde el punto de vista de su fuente, el material distingue entre derecho escrito (el que emana del procedimiento legislativo ordinario) y las otras fuentes que conociste en la sesión anterior: la costumbre, que forma el derecho consuetudinario, y la jurisprudencia, entendida como el conjunto de criterios judiciales que dotan de sentido y uniformidad a la interpretación. Esta primera aproximación deja claro que no todas las leyes “valen” de la misma manera ni en el mismo espacio: dependen del sistema, del origen y del modo en que se integran al ordenamiento. A partir de esta base, la unidad profundiza en otras miradas complementarias —ámbitos de aplicación, jerarquía y cualidad— que permiten pasar de una visión abstracta a una comprensión operativa, útil para resolver problemas reales con precisión conceptual y técnica. :contentReference[oaicite:0]{index=0}",
            },
            {
              type: "paragraph",
              text: "La segunda gran familia de criterios gira en torno al ámbito de aplicación de la norma, siguiendo la estructura sugerida por Kelsen y retomada por García Máynez: espacial, temporal, material y personal. El ámbito espacial refiere al territorio sobre el cual la ley rige: en México, por ejemplo, distinguirás entre leyes federales —vigentes en todo el país—, estatales o locales —propias de cada entidad federativa— y municipales; además, el material menciona que hay leyes nacionales o generales cuando superan los niveles mencionados. El ámbito temporal atiende a la vigencia: cuándo inicia la obligatoriedad de la ley y en qué supuestos deja de surtir efectos. El texto destaca que, cuando una ley cesa en su totalidad, se produce su derogación; si sólo se dejan sin efecto algunas partes, se habla de abrogación; por ello, ubicar correctamente los momentos normativos es crucial para su aplicación en casos concretos. En el ámbito material, se apunta la grande división entre Derecho público y privado, a la que, en la experiencia mexicana, se suma el Derecho social como tercer eje temático por su relevancia histórica. Finalmente, el ámbito personal diferencia entre leyes generales —dirigidas a todos— y normas jurídicas individualizadas —dictadas para personas o casos concretos—; estas últimas, a su vez, pueden ser privadas (como contratos y testamentos) o públicas (sentencias y concesiones). Esta cuadruple mirada evita confusiones y ayuda a seleccionar la norma pertinente de acuerdo con lugar, tiempo, materia y destinatarios. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "image",
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9hkTP-m-9GOEbYC5GL8oMJlSF0YqjF1ZNQ&s",
              alt: "Esquema de clasificación de normas jurídicas",
              caption:
                "Ilustración de apoyo incluida en el material de la sesión.",
              credit: "Material de Estudio – Sesión 2",
            },
            {
              type: "paragraph",
              text: "Otra clave interpretativa decisiva es la jerarquía normativa. El material explica que hoy, en la mayoría de los países, la cúspide del ordenamiento no la ocupa exclusivamente la Constitución, pues a su nivel se ubican también los tratados internacionales que el Estado ha firmado y ratificado; a la suma de ambos se le conoce como Bloque de Constitucionalidad. Por debajo se encuentran las leyes ordinarias o generales, que desarrollan competencias y materias específicas siempre en armonía con el bloque superior (piensa, por ejemplo, en la Ley General de Salud, el Código de Comercio o la Ley Federal del Trabajo). En un tercer escalón están los reglamentos y demás disposiciones de carácter administrativo, dictados por las dependencias para hacer operativas las leyes que ejecutan; su validez depende de respetar el marco previsto por el legislador. En el último peldaño, se ubican las normas individualizadas, es decir, aquellas decisiones dirigidas a casos concretos —contratos, testamentos, concesiones, sentencias— que, por su propia naturaleza, dependen de la validez de los niveles superiores. Entender la jerarquía no es sólo un mapa abstracto: es la brújula que permite controlar constitucionalmente los excesos, resolver antinomias (conflictos entre normas) y, sobre todo, aplicar la regla con mayor fuerza cuando hay discrepancias. En el litigio y en el asesoramiento cotidiano, este orden jerárquico marca el camino para argumentar con corrección y para impugnar aquello que contravenga el nivel superior. :contentReference[oaicite:2]{index=2}",
            },
            {
              type: "accordion",
              header: "Cualidad de las leyes y tipos de sanción",
              open: false,
              text: "El material resume dos familias adicionales de clasificación con alto valor práctico. Primero, la cualidad: las leyes pueden ser positivas o permisivas cuando habilitan conductas (otorgan facultades, reconocen derechos, permiten realizar actos), y negativas o prohibitivas cuando impiden o restringen comportamientos. Esta distinción orienta la interpretación teleológica y sistemática: no se argumenta igual cuando se trata de hacer valer un permiso que cuando se busca evitar un acto prohibido. Segundo, la clasificación por sanciones —recogida por García Máynez a partir de Korkounov— distingue cuatro tipos: leyes perfectas, que anulan el acto contrario; más que perfectas, que aun sin poder anular, lo castigan; menos que perfectas, que no impiden la violación, pero también prevén castigo; e imperfectas, que fijan deberes sin prever sanción. ¿Para qué sirve esta tipología? Para anticipar consecuencias en juicio, elegir remedios jurídicos y calibrar la proporcionalidad de las respuestas estatales. Saber si un precepto es permisivo o prohibitivo, y qué sanción apareja su incumplimiento, reduce incertidumbre y fortalece el principio de seguridad jurídica. :contentReference[oaicite:3]{index=3}",
            },
            {
              type: "paragraph",
              text: "En lo relativo a las relaciones de complementación, el texto diferencia entre normas primarias —autosuficientes en su sentido— y secundarias —que necesitan de otras para integrarse plenamente—. Dentro de estas últimas, identifica los subtipos de vigencia, explicativas, permisivas, interpretativas y sancionadoras. Las de vigencia precisan cuándo entra en efecto y por cuánto tiempo rige un precepto; las explicativas aclaran términos o conceptos técnicos; las permisivas habilitan excepciones, dispensas o facultades; las interpretativas fijan el sentido auténtico de una disposición ambigua; y las sancionadoras describen consecuencias negativas por el incumplimiento de un deber. En la práctica, todo abogado recurre constantemente a estas piezas auxiliares para reconstruir el “rompecabezas” normativo aplicable a un caso concreto. Por ello, al analizar un problema nunca basta con leer una sola norma: suele ser necesario seguir las remisiones, revisar reglamentos, disposiciones transitorias y criterios jurisprudenciales que completan la regla primaria. En suma, reconocer la arquitectura de complementación permite argumentar con estructura, evita interpretaciones aisladas y ayuda a desactivar aparentes contradicciones mediante lecturas sistemáticas y armónicas del conjunto del ordenamiento. :contentReference[oaicite:4]{index=4}",
            },
            {
              type: "accordion",
              header: "Voluntad de los particulares y disponibilidad normativa",
              open: false,
              text: "Desde el punto de vista de la voluntad de los particulares, el material distingue entre leyes taxativas y dispositivas. Las primeras imponen una conducta ineludible: no admiten pacto en contrario —piensa en los mínimos de seguridad, orden público o ciertos límites en materia laboral—. Las dispositivas, en cambio, dejan a las partes margen para configurar sus relaciones: el legislador ofrece un modelo supletorio que rige “salvo pacto en contrario”. Esta separación no es meramente teórica: enseña cuándo procede la autonomía privada y cuándo rige la inderogabilidad del interés público. Quien redacta contratos, por ejemplo, debe identificar con claridad qué cláusulas pueden adaptarse (precio, plazos, garantías) y cuáles son intocables (derechos irrenunciables, requisitos de forma o límites legales). En litigio, la distinción orienta la estrategia: si la regla es taxativa, la defensa se centrará en la legalidad de la actuación; si es dispositiva, se argumentará en torno a la voluntad válida de las partes y a su congruencia con el marco supletorio. Esta brújula práctica refuerza la seguridad jurídica y la previsibilidad en la vida civil y mercantil, al tiempo que protege los bienes fundamentales tutelados por el ordenamiento. :contentReference[oaicite:5]{index=5}",
            },
            {
              type: "paragraph",
              text: "Como ves, las “diversas clasificaciones de las leyes” no compiten entre sí: se suman para ofrecer una radiografía completa del fenómeno normativo. Saber de qué sistema proviene una ley, cuál es su fuente, en qué ámbitos rige, en qué peldaño jerárquico se ubica, qué cualidad tiene, qué sanción contempla, cómo se complementa y qué margen deja a la autonomía privada, te permite operar con solvencia técnica. Esta caja de herramientas es valiosa tanto en el estudio como en la práctica: orienta la consulta legislativa, la elaboración de escritos forenses, la redacción de contratos y la evaluación de riesgos jurídicos. Además, conecta con los temas siguientes del módulo —Estado de Derecho; derecho público, privado y social; ramas del Derecho; y conceptos jurídicos fundamentales—, porque todos se apoyan en estas categorías para ordenar el razonamiento. Dominar esta cartografía conceptual te convierte en un jurista capaz de transitar de lo abstracto a lo concreto, de la regla general al caso particular, y de la interpretación a la decisión fundada y motivada, que es el corazón del trabajo jurídico profesional. :contentReference[oaicite:6]{index=6}",
            },
          ],
          subthemes: [],
        },
      ],
    },

    /* 6. Estado de Derecho */
    {
      id: "6",
      numbering: "Unidad 6",
      title: "Estado de Derecho",
      content: [
        {
          type: "paragraph",
          text: "El Estado de Derecho describe un orden político-jurídico en el que toda autoridad y toda persona quedan sometidas a la ley, y en el que las instituciones actúan conforme a competencias previamente fijadas. Para comprenderlo, conviene partir de la noción de Estado como organización política que concentra el monopolio legítimo de la coacción sobre una población situada en un territorio, con un gobierno que dirige y coordina la vida colectiva. Esta idea, que en la teoría clásica se apoya en autores como Heller y Weber, se traduce en tres elementos que la doctrina considera esenciales: población, territorio y gobierno, a partir de la conocida formulación de Jellinek. Desde esta base, el Estado de Derecho añade principios de supremacía constitucional, legalidad, división de poderes, control de la arbitrariedad y garantía de derechos, que en conjunto constituyen un dique frente al poder sin límites. Dicho marco no es puramente formal: exige procedimientos, transparencia y responsabilidad pública. Así, la Constitución y los tratados —como bloque de constitucionalidad— orientan la producción normativa, mientras que las leyes ordinarias y reglamentarias organizan la acción estatal. En síntesis, el Estado de Derecho articula estructura, reglas y fines para legitimar el ejercicio del poder y proteger a las personas. :contentReference[oaicite:0]{index=0}",
        },
        {
          type: "paragraph",
          text: "El primer componente del Estado es la población: sin comunidad humana a la que se dirija la normatividad, el fenómeno jurídico carecería de sentido. La población se vincula con categorías como ciudadanía, nacionalidad y residencia, que permiten distinguir entre quienes integran el cuerpo político y quienes se relacionan con él desde fuera. En segundo término está el territorio, entendido no sólo como el suelo, sino también las aguas interiores, la franja marítima y el espacio aéreo bajo jurisdicción. El territorio delimita la competencia espacial de las normas y da soporte a la idea de fronteras, recursos y administración pública. Por último, el gobierno (poder político organizado) expresa la capacidad de decisión y ejecución, y presupone instituciones que imparten justicia, administran bienes y definen políticas. La clásica tríada población-territorio-gobierno sirve, pues, para anclar las funciones estatales y para entender por qué la validez y eficacia de las leyes están situadas en un aquí y un ahora concretos: tienen ámbitos personal, espacial y temporal específicos de aplicación, y un rango dentro de la jerarquía normativa que condiciona su fuerza. :contentReference[oaicite:1]{index=1}",
        },

        /* Imagen intercalada (del propio material) */
        {
          type: "image",
          alt: "Esquema ilustrativo del Estado (población, territorio, gobierno).",
          src: "https://i0.wp.com/tuguiadeaprendizaje.co/wp-content/uploads/2020/08/el-Estado.webp",
          caption: "Elementos del Estado: población, territorio y gobierno.",
        },

        {
          type: "paragraph",
          text: "El paso de un Estado meramente legal a un Estado de Derecho implica que no basta con que exista ley; se requiere que ésta sea válida, jerarquizada y controlada. En la cúspide normativa se ubican la Constitución y los tratados internacionales, concebidos en conjunto como bloque de constitucionalidad, seguidos de las leyes generales u ordinarias, los reglamentos y las normas individualizadas (contratos, sentencias, concesiones) que derivan de aquéllas. Esta arquitectura asegura coherencia y control de la producción jurídica, limitando el poder y encauzando la actuación pública. A su vez, las leyes poseen ámbitos de validez espacial (federales, estatales, municipales), temporal (inicio y, en su caso, fin de vigencia por derogación o abrogación), material (materias: público, privado, social) y personal (general o individualizada). Comprender estas dimensiones ayuda a aplicar el Derecho a casos concretos sin invadir competencias ni desconocer derechos adquiridos. Desde esta perspectiva, el Estado de Derecho no es un eslogan: es una técnica institucional para hacer operativa la supremacía constitucional y proteger a las personas frente a decisiones discrecionales o irregulares. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "paragraph",
          text: "Entre los principios rectores destaca la soberanía, esto es, la autoridad última del Estado para decidir sobre sus asuntos sin subordinación externa, así como la potestad de crear y aplicar normas dentro de su territorio. La soberanía se ejerce por medio de un gobierno que debe ser legítimo, responsable y limitado por el Derecho; de ahí que el uso de la coacción (monopolio de la fuerza) sea legítimo sólo si respeta procedimientos, competencias y derechos. La población, por su parte, no es masa pasiva: su participación —mediante representación política, control social y acceso a la justicia— es condición de posibilidad del Estado de Derecho. Esta interacción entre poder y sociedad exige reglas claras sobre la producción y el control de las decisiones: procedimiento legislativo para crear leyes, jurisdicción para resolver controversias, y administración sometida al principio de legalidad. Cuando tales engranajes funcionan, el Estado produce seguridad jurídica y expectativas razonables de conducta; cuando fallan, se erosiona la confianza pública y se abren compuertas a la arbitrariedad. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "paragraph",
          text: "Finalmente, la Constitución del Estado cumple una doble función: organiza el poder (quién decide, cómo y con qué límites) y reconoce derechos fundamentales que operan como barreras infranqueables frente a la autoridad. En su dimensión orgánica, distribuye competencias y diseña mecanismos de pesos y contrapesos; en su dimensión dogmática, proclama derechos y fija garantías para su protección. Ese diseño se complementa con ramas del Derecho público (constitucional, administrativo, penal, procesal, financiero, tributario, electoral), privado (civil, mercantil, societario, concursal, internacional privado, ambiental) y social (laboral, agrario, seguridad social), que concretan principios en ámbitos específicos de la vida social. Por ello, la educación jurídica insiste en distinguir materias y saber aplicar la jerarquía normativa y los ámbitos de validez. Un Estado de Derecho robusto no es sólo el que promulga normas: es el que asegura su cumplimiento, corrige desviaciones y rinde cuentas, manteniendo el delicado equilibrio entre autoridad y libertad. :contentReference[oaicite:4]{index=4}",
        },

        /* Acordeones (3 niveles) con contenido en forma de párrafos */
        {
          type: "accordion",
          header: "Elementos esenciales: población, territorio y gobierno",
          open: false,
          text: "La teoría clásica identifica tres elementos del Estado. La población otorga sentido a la normatividad y permite diferenciar entre nacionales y extranjeros, así como determinar la titularidad de derechos y obligaciones. El territorio delimita la competencia espacial del orden jurídico e incluye suelo, aguas y espacio aéreo bajo jurisdicción. El gobierno expresa la organización del poder que crea, aplica y hace cumplir el Derecho. Esta tríada, sistematizada por Jellinek y desarrollada por Heller y Weber, no es decorativa: orienta la validez de las normas (ámbitos espacial, temporal, material y personal) y explica por qué la misma conducta puede tener consecuencias distintas según ocurran en otra demarcación o durante otra vigencia. Desde aquí se comprende que el Estado de Derecho no sólo requiere leyes, sino una administración sometida a procedimientos y controles que preserven el interés público y la dignidad de las personas. :contentReference[oaicite:5]{index=5}",
        },
        {
          type: "accordion",
          header: "Soberanía, coacción legítima y límites jurídicos",
          open: false,
          text: "La soberanía caracteriza la capacidad del Estado para decidir sobre sus asuntos internos y externos sin subordinación; se despliega a través de instituciones que ejercen el monopolio legítimo de la coacción. Sin embargo, esa potestad está constreñida por el Derecho: legalidad, competencia, debido proceso y control jurisdiccional. De ahí que no toda coacción estatal sea válida per se; lo es únicamente si fluye de una norma jerárquicamente superior, emitida por autoridad competente y aplicada conforme a procedimientos que respeten derechos. Cuando la coacción omite estos filtros, degenera en arbitrariedad y erosiona la legitimidad. Por el contrario, el Estado de Derecho canaliza la fuerza hacia fines constitucionales, garantiza participación y rendición de cuentas, y evita que la urgencia política suplante la razón jurídica. En síntesis, la soberanía no es licencia para el exceso, sino responsabilidad de actuar dentro del marco normativo. :contentReference[oaicite:6]{index=6}",
        },
        {
          type: "accordion",
          header: "Constitución y bloque de constitucionalidad",
          open: false,
          text: "La Constitución organiza el poder y reconoce derechos. Su supremacía se refuerza, en numerosos sistemas, por la incorporación de los tratados internacionales al nivel más alto de la jerarquía, conformando un bloque de constitucionalidad que orienta a las leyes ordinarias y a los reglamentos. Esta arquitectura exige coherencia: ninguna norma inferior puede contrariar a la superior sin quedar sujeta a invalidación. Además, la validez y eficacia de las disposiciones dependen de su ámbito: espacial (federal, estatal, municipal), temporal (inicio, derogación, abrogación), material (público, privado, social) y personal (general o individualizada). Comprender estos niveles permite resolver conflictos normativos, proteger derechos y asegurar el control democrático del poder. Así, el Estado de Derecho se mantiene no sólo con textos, sino con instituciones capaces de revisar, corregir y mejorar el orden jurídico conforme a la Constitución y los tratados. :contentReference[oaicite:7]{index=7}",
        },
      ],
      subthemes: [
        /* ─────────────────────────── Unidad 6 ─ Estado de Derecho ─────────────────────────── */

        /* 6.1 Estado */
        {
          id: "6.1",
          numbering: "6.1",
          title: "Estado",
          content: [
            {
              type: "paragraph",
              text: "En la teoría jurídica y política contemporánea, el Estado se concibe como la forma histórica de organización del poder que centraliza la autoridad sobre un territorio y una población bajo un orden jurídico reconocido como legítimo. Heller lo define como una estructura económica, jurídica y política de dominación que organiza la cooperación social de manera territorial con medios de poder propios, orientada por un orden que se reputa legítimo. Esta noción resalta que no basta la mera fuerza: la dominación ha de justificarse normativamente para que el conjunto de instituciones pueda exigir obediencia y administrar bienes públicos, resolver conflictos y hacer valer decisiones colectivas. De ahí su vínculo íntimo con la idea de constitucionalidad, pues es el Derecho el que institucionaliza la autoridad, delimita su ejercicio y establece los fines y límites del poder público.",
            },
            {
              type: "paragraph",
              text: "Weber añade una pieza clave: el Estado monopoliza la violencia legítima dentro de su territorio, es decir, concentra la facultad de coacción física para hacer cumplir el Derecho. Este monopolio, sin embargo, no es un cheque en blanco; su legitimidad depende de reglas, procedimientos y controles que lo subordinan a la legalidad. En la práctica, el concepto de Estado se desagrega en instituciones (legislativas, ejecutivas, jurisdiccionales y órganos autónomos), que reparten funciones y responsabilidades. La teoría clásica, retomada por Jellinek, identifica tres elementos mínimos para su existencia: población, territorio y gobierno (o poder público). Cada elemento es necesario, pero ninguno es suficiente por sí mismo: sin población no hay destinatarios del orden, sin territorio no hay ámbito de validez espacial, y sin gobierno no hay centro institucional que produzca y ejecute decisiones colectivas.",
            },

            /* Imagen intercalada según el material */
            {
              type: "image",
              src: "https://i0.wp.com/tuguiadeaprendizaje.co/wp-content/uploads/2020/08/el-Estado.webp",
              alt: "Esquema general del Estado",
              caption:
                "Elementos del Estado: población, territorio y gobierno (adaptado del material).",
            },

            {
              type: "paragraph",
              text: "Distinguir “Estado” de “nación” evita confusiones frecuentes. El primero alude a la organización jurídico-política soberana; la segunda, a una comunidad humana unida por lazos culturales e históricos. Pueden coincidir (Estado-nación), superponerse parcialmente o divergir. Esta distinción explica tensiones entre identidad cultural y estructura jurídico-política, y por qué el Derecho positivo organiza la convivencia más allá de afinidades culturales. En los regímenes constitucionales modernos, el Estado se somete a la ley y a un conjunto de derechos fundamentales, de manera que la obediencia de los gobernados presupone la obediencia del propio poder a las reglas que lo crean y limitan. Así, la idea de Estado de Derecho no sólo exige una legalidad formal, sino también principios materiales de justicia, control y rendición de cuentas que preserven la libertad y la igualdad frente al poder público.",
            },

            /* Acordeones (contenido en forma de párrafo) */
            {
              type: "accordion",
              header: "Definiciones canónicas y su utilidad analítica",
              open: false,
              text: "Las definiciones de Heller y Weber cumplen funciones complementarias. La primera enfatiza la dimensión estructural del Estado como organización de dominación orientada por un orden legítimo; la segunda ilumina el instrumento central para ejecutar ese orden: el monopolio de la coacción legítima. Juntas permiten explicar por qué el Derecho no es sólo un conjunto de normas, sino una práctica institucionalizada que necesita organización y fuerza para garantizar su eficacia. En el aula, estas definiciones sirven como andamiaje conceptual para distinguir el Estado de otras formas de autoridad (familia, empresa, iglesia) y para ubicar el poder público dentro de un sistema de competencias, procedimientos y límites. También facilitan el análisis de crisis institucionales: cuando falla la legitimidad (corrupción, arbitrariedad) o la capacidad de coacción (captura criminal del territorio), el Estado se debilita y el orden jurídico pierde efectividad.",
            },
            {
              type: "accordion",
              header: "Elementos clásicos: por qué importan hoy",
              open: false,
              text: "Población, territorio y gobierno siguen siendo categorías operativas. La población define a los destinatarios del Derecho y la pertenencia (ciudadanía, nacionalidad, extranjería). El territorio delimita la validez espacial del orden y condiciona la competencia de autoridades (federación, estados, municipios). El gobierno concretiza el poder: crea normas, las ejecuta y resuelve controversias. En esta tríada anidan debates contemporáneos: movilidad humana y estatus de migrantes; recursos naturales y soberanía ambiental; descentralización y autonomías; y la expansión de órganos constitucionales autónomos. Comprender estos elementos evita reduccionismos: por ejemplo, suponer que el Estado se agota en el Ejecutivo o que la nación equivale a ciudadanía legal. Para el jurista en formación, el mapeo fino de estos elementos permite argumentar con precisión en litigios de competencia, validez normativa y tutela de derechos.",
            },
          ],
        },

        /* 6.2 Población */
        {
          id: "6.2",
          numbering: "6.2",
          title: "Población",
          content: [
            {
              type: "paragraph",
              text: "La población es el elemento humano del Estado y su razón de ser: el orden jurídico regula relaciones entre personas y orienta instituciones al bien común. Desde el punto de vista jurídico, la población se estructura en estatus (nacionales, extranjeros, apátridas), categorías de pertenencia (ciudadanía) y situaciones especiales (refugio, asilo). Esta clasificación incide en derechos políticos, prestaciones, deberes tributarios y acceso a servicios. En la práctica, la demografía jurídica importa: distribución territorial, densidad, movilidad, envejecimiento y multiculturalidad repercuten en políticas públicas y en la organización del poder. Por ello, la categoría “pueblo” no equivale a una noción homogénea; el Derecho reconoce pluralidad y diseña mecanismos de inclusión, no discriminación y participación para convertir a esa diversidad en fuente de legitimidad y no de conflicto.",
            },
            {
              type: "paragraph",
              text: "La distinción entre Estado y nación ayuda a ordenar fenómenos de identidad dentro de la población. Puede haber varias naciones dentro de un mismo Estado, o una nación distribuida en varios Estados. El dato relevante para el Derecho es que, cualquiera sea la identidad cultural, el vínculo jurídico de pertenencia define competencias, derechos y obligaciones. Así, la población “constituye” al Estado no sólo como censo, sino como titular de la soberanía: en los sistemas constitucionales, el pueblo delega el poder a representantes y órganos, y conserva controles para exigir responsabilidad. Por ello, conceptos como ciudadanía sustantiva, participación y control social son parte del contenido jurídico de “población”, no un anexo sociológico: determinan cómo se produce, aplica y legitima el Derecho, y cómo se resuelven tensiones entre igualdad formal e igualdad material.",
            },

            /* Acordeones */
            {
              type: "accordion",
              header: "Ciudadanía, nacionalidad y extranjería",
              open: false,
              text: "La nacionalidad fija un vínculo jurídico-político con el Estado; la ciudadanía añade capacidades públicas (votar, ser votado, participar) condicionadas por la Constitución y la ley. La extranjería describe la situación de personas cuya nacionalidad pertenece a otro Estado y, por ello, sujeta ciertos derechos y deberes a reglas diferenciadas (migración, trabajo, inversión, debido proceso). Estas tres categorías no agotan la complejidad poblacional: hay apátridas, refugiados y estatutos especiales. Para el análisis jurídico, importa la fuente de adquisición de la nacionalidad (ius soli/ius sanguinis), las vías de naturalización y la compatibilidad con dobles nacionalidades. En clave constitucional, el tratamiento diferenciado debe respetar principios de igualdad y no discriminación, garantizando un núcleo duro de derechos a toda persona bajo jurisdicción.",
            },
            {
              type: "accordion",
              header: "Demografía y organización del poder",
              open: false,
              text: "Los rasgos demográficos condicionan el diseño institucional. Altas concentraciones urbanas exigen servicios y justicia cercana; la dispersión rural demanda esquemas de acceso y presencia administrativa flexible. La multiculturalidad tensiona el monismo jurídico y empuja al reconocimiento de pluralismos normativos (p. ej., sistemas normativos indígenas), siempre bajo parámetros constitucionales de derechos humanos. La movilidad transfronteriza obliga a coordinar jurisdicciones y a armonizar estándares internacionales. Estas realidades impactan el federalismo, la distribución de competencias y la política fiscal. El jurista debe leer indicadores demográficos como datos normativamente relevantes, pues muchas reglas (representación, financiamiento, delimitación territorial) descansan en cifras poblacionales que, mal interpretadas, distorsionan la igualdad política y material.",
            },
          ],
        },

        /* 6.3 Territorio */
        {
          id: "6.3",
          numbering: "6.3",
          title: "Territorio",
          content: [
            {
              type: "paragraph",
              text: "El territorio delimita la validez espacial del orden jurídico: es la porción de la superficie terrestre (suelo, subsuelo, aguas y, conforme al Derecho internacional, espacios aéreos y marinos hasta los límites permitidos) sobre la que el Estado ejerce competencia. Su función es doble. Primero, establece fronteras que separan jurisdicciones y definen hasta dónde alcanzan las normas, actos y decisiones de autoridades. Segundo, estructura internamente la distribución del poder: federación, entidades federativas y municipios se reparten atribuciones según reglas constitucionales, creando círculos concéntricos de validez normativa y de actuación administrativa y judicial. Esta arquitectura espacial evita choques de competencias, dota de certeza a los particulares y permite al Estado ejercer su monopolio de coacción con previsibilidad.",
            },
            {
              type: "paragraph",
              text: "La dimensión territorial también es material: recursos naturales y bienes públicos (ríos, bosques, hidrocarburos) plantean regímenes especiales de dominio, explotación y tutela ambiental. El territorio no es un mero mapa; es un conjunto de bienes y espacios sujetos a titularidad, límites y cargas. De ahí que la Constitución y las leyes distingan propiedad pública y privada, dominio directo y concesiones, así como zonas federales con regulación específica. En Derecho penal y procesal, la territorialidad incide en competencia y ejecución de sentencias; en Derecho administrativo, en permisos y autorizaciones; en Derecho fiscal, en obligaciones tributarias. La movilidad y la interconexión digital introducen desafíos (competencia por efectos o por destino), que el orden jurídico enfrenta con reglas de conexión y cooperación intergubernamental.",
            },

            /* Acordeones */
            {
              type: "accordion",
              header: "Ámbitos espacial y material: claves operativas",
              open: false,
              text: "Para aplicar correctamente el Derecho, conviene separar: (a) el ámbito espacial (¿en qué lugar rige la norma?, ¿qué autoridad es competente?) y (b) el ámbito material (¿sobre qué materias versa la norma?). Esta distinción, recogida por la doctrina clásica, evita errores prácticos, como exigir permisos locales donde rige fuertemente la competencia federal, o desconocer reservas territoriales con protección ambiental. En litigio, delimitar el ámbito espacial ayuda a plantear excepciones por incompetencia; en política pública, a planificar servicios y obras conforme a la titularidad y el uso del suelo. La cartografía jurídica es, así, una herramienta de control de legalidad y de diseño institucional.",
            },
            {
              type: "accordion",
              header: "Territorialidad y coordinación intergubernamental",
              open: false,
              text: "La realidad social trasciende límites administrativos: cuencas hidrológicas, áreas metropolitanas, corredores logísticos. Para que la territorialidad no se convierta en barrera, los órdenes federal, estatal y municipal articulan mecanismos de coordinación (convenios, comisiones, fondos) y planeación conjunta. En materia ambiental y urbana, los instrumentos de ordenamiento territorial y de impacto regulatorio buscan alinear competencias y evitar duplicidades o vacíos. El operador jurídico debe detectar cuándo una actuación requiere título competencial compartido o cooperación, y documentar trazabilidad (actas, convenios, dictámenes) para blindar decisiones ante controles judiciales.",
            },
          ],
        },

        /* 6.4 Poder */
        {
          id: "6.4",
          numbering: "6.4",
          title: "Poder",
          content: [
            {
              type: "paragraph",
              text: "El poder público es la capacidad institucional de crear, aplicar y hacer cumplir el Derecho en nombre de la colectividad. Comparte la raíz weberiana del monopolio de la coacción legítima, pero en el Estado constitucional está distribuido y limitado: separación de poderes, controles horizontales (contrapesos) y verticales (federalismo y participación social). Su finalidad es garantizar bienes públicos (seguridad, justicia, servicios) bajo legalidad, proporcionalidad y respeto a derechos humanos. En la práctica, el poder se concreta en órganos con competencias tasadas, procedimientos reglados y responsabilidad por el ejercicio de sus funciones. La legitimidad del poder no deriva sólo del origen democrático, sino de su sujeción a la Constitución y de la rendición de cuentas.",
            },
            {
              type: "paragraph",
              text: "Cuando el poder se emancipa de sus límites (arbitrariedad, corrupción, captura), el Estado de Derecho se erosiona. Por eso, las Constituciones incorporan frenos sustantivos (derechos fundamentales) y procesales (debido proceso, motivación, control judicial) que canalizan el poder y lo someten a razones públicas. La distinción entre gobierno y administración ayuda: el primero fija orientación política; la segunda ejecuta con criterios técnicos y sujeta a legalidad estricta. Órganos autónomos y sistemas anticorrupción añaden capas de control. En suma, hablar de “poder” en Derecho equivale a hablar de sujeción jurídica, distribución funcional y justificación constante ante la ciudadanía como titular originaria de la soberanía.",
            },

            /* Acordeones */
            {
              type: "accordion",
              header: "Gobierno, administración y jurisdicción",
              open: false,
              text: "Gobierno no es sinónimo de Estado. En sentido estricto, el gobierno (Ejecutivo) orienta políticas y asume conducción; la administración instrumenta mediante actos y procedimientos reglados; la jurisdicción resuelve conflictos y controla legalidad. Esta tripartición práctica refuerza el ideal de frenos y contrapesos: que quien decide políticamente no sea quien juzga su propia legalidad ni quien ejecuta sin control. Al estudiar competencias hay que mirar la fuente (Constitución, leyes) y la naturaleza del acto (político, administrativo, jurisdiccional) para ubicar el estándar de control aplicable.",
            },
            {
              type: "accordion",
              header: "Límites materiales del poder",
              open: false,
              text: "El poder está constreñido por la Constitución: fines (promoción de derechos, paz, desarrollo), principios (legalidad, igualdad, proporcionalidad) y prohibiciones (discriminación, tortura, censura previa). Además, los tratados internacionales en materia de derechos humanos integran el parámetro de control, reforzando límites materiales. Estos límites no son meramente declarativos: se traducen en cargas de justificación y control difuso/convencionalidad que cualquier autoridad debe observar. La cultura de la rendición de cuentas convierte a los límites en prácticas: motivar, transparentar, auditar y permitir la revisión independiente.",
            },
          ],
        },

        /* 6.5 Soberanía */
        {
          id: "6.5",
          numbering: "6.5",
          title: "Soberanía",
          content: [
            {
              type: "paragraph",
              text: "La soberanía expresa la autoridad última del Estado sobre su territorio y población: implica capacidad de autodeterminarse interna y externamente. Hacia adentro, la soberanía se traduce en supremacía del orden constitucional, producción normativa y dirección política. Hacia afuera, en independencia frente a otros Estados y en la facultad de celebrar tratados. En el Estado constitucional contemporáneo, la soberanía no es absoluta: se ejerce bajo el Derecho y, cada vez más, en un entramado de obligaciones internacionales (particularmente en derechos humanos) que el propio Estado acepta como límites autoimpuestos. Lejos de debilitarla, esta sujeción jurídica la legitima, pues compromete al poder público con estándares compartidos de dignidad humana.",
            },
            {
              type: "paragraph",
              text: "La soberanía también se distribuye: constituciones federales reparten competencias entre federación y entidades federativas, reservando a cada nivel materias específicas. Esta distribución evita la concentración de poder y acerca decisiones a las realidades locales. La doctrina distingue soberanía del concepto de gobierno: un Estado puede cambiar de gobierno sin perder su soberanía. Por su parte, el principio de no intervención protege la independencia externa, pero convive con deberes erga omnes (prohibición de genocidio, tortura) que habilitan responsabilidades internacionales. Comprender la soberanía en clave constitucional e internacional permite resolver tensiones entre autonomía estatal, cooperación y tutela de derechos.",
            },

            /* Acordeones */
            {
              type: "accordion",
              header:
                "Interna, externa y constitucionalización de la soberanía",
              open: false,
              text: "La dimensión interna supone supremacía constitucional, validez de las normas y obediencia a los poderes constituidos. La externa, independencia y capacidad para relacionarse conforme al Derecho internacional. La constitucionalización traduce la soberanía en reglas: proceso legislativo, control judicial, mecanismos de reforma, distribución de competencias y reconocimiento de tratados como parte del parámetro de validez. Esta vía evita nociones metafísicas y proyecta la soberanía como práctica jurídica verificable.",
            },
            {
              type: "accordion",
              header: "Soberanía, tratados y derechos humanos",
              open: false,
              text: "Muchos textos constitucionales reconocen jerarquía reforzada a los tratados en materia de derechos humanos, integrándolos al control de constitucionalidad y convencionalidad. Ello no merma la soberanía; la ejerce: el Estado decide vincularse y, a partir de entonces, debe armonizar su derecho interno. Para el litigio, esto abre la puerta a invocar estándares internacionales como parámetro de validez de actos y normas; para la administración, exige armonización normativa y capacitación; para el legislador, control de convencionalidad ex ante.",
            },
          ],
        },

        /* 6.6 La Constitución del Estado */
        {
          id: "6.6",
          numbering: "6.6",
          title: "La Constitución del Estado",
          content: [
            {
              type: "paragraph",
              text: "La Constitución organiza y limita el poder: establece la estructura del Estado, distribuye competencias, reconoce derechos y fija procedimientos para crear normas, gobernar y resolver controversias. Es norma jurídica suprema, cuyo cumplimiento condiciona la validez del resto del ordenamiento. En muchos sistemas, los tratados internacionales comparten cumbre jerárquica o integran el llamado “bloque de constitucionalidad”, reforzando el parámetro de control. La Constitución no es sólo texto: es práctica institucional (jurisdicción constitucional, control difuso, acciones colectivas) que vigila que el poder se mantenga dentro del Derecho y que las personas dispongan de remedios efectivos frente a violaciones.",
            },
            {
              type: "paragraph",
              text: "Su fuerza normativa depende de tres factores: claridad de reglas (división de poderes, federalismo, proceso legislativo), garantías de derechos (catálogo robusto y justiciable) y mecanismos de reforma que permitan adaptación sin sacrificar identidad constitucional. En la vida cotidiana del Derecho, la Constitución opera como brújula: orienta la interpretación de leyes, invalida normas inferiores incompatibles y sirve de parámetro para el control de actos de autoridad. Para el profesional, el razonamiento constitucional exige argumentar desde principios, ponderar bienes y justificar por qué una decisión es compatible con los fines del orden y los derechos de las personas.",
            },

            /* Acordeones */
            {
              type: "accordion",
              header: "Supremacía, rigidez y control de constitucionalidad",
              open: false,
              text: "La supremacía ubica a la Constitución en la cúspide normativa; la rigidez fija procedimientos agravados para su reforma; el control de constitucionalidad asegura su primacía frente a actos y normas inferiores. Este trípode convierte a la Constitución en norma viva: no sólo inspira, obliga. En su dimensión práctica, la supremacía exige motivar en clave constitucional, la rigidez ordena los cambios y el control corrige desviaciones. La cultura constitucional se mide por la calidad de estas prácticas.",
            },
            {
              type: "accordion",
              header: "Bloque de constitucionalidad y parámetro de control",
              open: false,
              text: "El bloque de constitucionalidad integra textos y principios con jerarquía constitucional o supralegal (p. ej., tratados en derechos humanos), conformando un parámetro único de validez. Su reconocimiento responde a la necesidad de articular la soberanía con compromisos internacionales y elevar los estándares de protección. En litigios, permite invocar normas internacionales como criterio de validez; en legislación y administración, obliga a armonizar y a prevenir conflictos. Para el aprendizaje, enseña a pensar la Constitución no como isla, sino como centro de una red normativa multinivel.",
            },
          ],
        },
      ],
    },

    /* 7. Derecho público y privado */
    {
      id: "7",
      numbering: "Unidad 7",
      title: "Derecho público y privado",
      content: [
        {
          type: "paragraph",
          text: "Distinguir entre Derecho público y Derecho privado permite ordenar el estudio del fenómeno jurídico y, sobre todo, elegir las reglas y procedimientos aplicables en cada controversia. En términos muy generales, en el ámbito público el Estado comparece como parte del vínculo jurídico —ya sea para ejercer potestades, para garantizar bienes colectivos o para administrar justicia—, mientras que en el ámbito privado se regulan relaciones entre particulares dotadas de autonomía de la voluntad. Esta separación no es un capricho académico: ayuda a decidir cuál es la autoridad competente, qué principios rigen (legalidad estricta o libertad residual), cómo se distribuyen las cargas probatorias y qué remedios proceden. Además, ilumina el sentido de instituciones clave como la supremacía constitucional, la responsabilidad patrimonial del Estado o la fuerza obligatoria de los contratos. Aunque algunos autores cuestionan su vigencia teórica, en la práctica forense y en la organización de los sistemas jurídicos contemporáneos continúa siendo una herramienta didáctica y operativa para clasificar ramas, diseñar procesos y comprender el alcance de los derechos involucrados en los conflictos cotidianos.",
        },
        {
          type: "paragraph",
          text: "El Derecho público se caracteriza por tutelar intereses generales y por reconocer a los órganos del poder público potestades que no poseen los particulares: imperio, coerción y un haz de prerrogativas para actuar en nombre de la colectividad. Abarca, entre otras, las ramas constitucional, administrativa, penal, procesal, financiera, tributaria, electoral e internacional pública. En este espacio normativo rigen con especial intensidad principios como el de legalidad, competencia, proporcionalidad, transparencia y rendición de cuentas. Su finalidad es asegurar el funcionamiento del Estado, la vigencia de los derechos fundamentales y el equilibrio entre libertad y autoridad. Cuando el Estado es parte en un litigio, la asimetría frente al particular exige controles reforzados para evitar arbitrariedad: procedimientos formales estrictos, límites materiales a la discrecionalidad, motivación suficiente de los actos y mecanismos de control judicial. Por ello, estudiar el Derecho público implica leer el orden jurídico desde la Constitución y comprender que toda actuación estatal debe estar explícitamente habilitada por una norma y sujeta a revisión.",
        },
        {
          type: "paragraph",
          text: "Por su parte, el Derecho privado regula relaciones entre sujetos que se presumen en plano de igualdad jurídica y que, en principio, pueden autorregular sus intereses mediante la autonomía de la voluntad, siempre dentro de los límites del orden público y las buenas costumbres. Sus ejes clásicos son el Derecho civil (personas, familia, bienes, obligaciones, contratos) y el Derecho mercantil (actos de comercio, empresas, títulos de crédito), a los que hoy se suman especialidades como el societario, el concursal o el internacional privado. La lógica que lo anima es distinta a la del Derecho público: lo que no está prohibido, está permitido; los remedios buscan restituir el equilibrio pactado o reparar daños; y la carga de probar suele distribuirse atendiendo a la disponibilidad de la prueba y a los riesgos contractuales. Conocer sus instituciones permite diseñar transacciones seguras, prevenir conflictos y, cuando éstos surgen, seleccionar acciones y excepciones idóneas ante el juez natural de la causa.",
        },
        {
          type: "paragraph",
          text: "La experiencia latinoamericana incorporó, además, una tercera familia: el Derecho social. Nacido de la constatación de desigualdades estructurales entre sujetos, corrige —mediante normas de orden público y principios pro persona— los desequilibrios en ámbitos como el trabajo, la seguridad social o el campo. En él, la igualdad formal cede ante criterios de justicia material: se invierte la carga de la prueba en beneficio de la parte débil, se establecen mínimos indisponibles y se consagran principios de irrenunciabilidad y tutela efectiva. Esta perspectiva no niega la división público/privado, pero la matiza al introducir una función promotora del Estado y un piso de protección reforzada. Para el estudiante, entender el surgimiento del Derecho social ayuda a leer críticamente la evolución del constitucionalismo y a comprender por qué ciertas reglas privadas deben ceder cuando se enfrentan a derechos fundamentales o a necesidades colectivas impostergables.",
        },
        {
          type: "paragraph",
          text: "En síntesis, la clasificación entre Derecho público y privado —con la cuña contemporánea del Derecho social— sigue siendo útil para cartografiar el sistema jurídico, organizar sus ramas y resolver problemas concretos con criterios adecuados. En el aula y en el foro se traduce en decisiones prácticas: ¿aplica un procedimiento contencioso administrativo o un juicio civil? ¿rige un principio de estricta legalidad o la libertad contractual? ¿opera una potestad sancionadora del Estado o una responsabilidad civil entre iguales? Al responder estas preguntas, el jurista identifica la autoridad competente, selecciona la acción procedente y determina los estándares de prueba y los remedios disponibles. El valor pedagógico de la distinción radica en que ofrece un andamiaje conceptual que, sin ser absoluto, orienta la argumentación y evita confundir planos normativos. A la vez, invita a pensar los puntos de intersección, como cuando un contrato privado se ve permeado por normas de protección al consumidor o por cláusulas de orden público económico.",
        },

        /* Acordeones (cada uno con desarrollo en forma de párrafo) */
        {
          type: "accordion",
          header: "Diferencias nucleares",
          open: false,
          text: "En el Derecho público el Estado actúa investido de potestades, persigue fines colectivos y está sujeto a un principio de estricta legalidad; en el privado, los particulares negocian en paridad formal, prima la autonomía de la voluntad y rige la regla de que lo no prohibido está permitido. Ello se refleja en consecuencias procesales y sustantivas: competencias distintas, cargas probatorias específicas, nulidades de derecho público más severas, límites a la renunciabilidad de derechos y remedios orientados al interés general frente a remedios restitutorios o compensatorios típicos de la órbita privada. El estándar de motivación y transparencia se intensifica cuando hay autoridad administrativa o penal, mientras que en lo civil-mercantil basta la justificación del interés legítimo y el respeto al pacto. Entender estas diferencias evita trasladar acríticamente categorías de un campo a otro y previene estrategias litigiosas improcedentes.",
        },
        {
          type: "accordion",
          header: "Implicaciones prácticas",
          open: false,
          text: "Clasificar correctamente un asunto incide en el éxito del caso: define juez natural, plazos, cargas, medios de impugnación y alcance de las pruebas. Un acto administrativo impugnable exige agotar vías específicas y acreditar vicios de legalidad o desviación de poder; un incumplimiento contractual se encauza por acciones de cumplimiento, resolución o daños. En contratación con el Estado, aunque haya cláusulas civiles, suelen coexistir prerrogativas públicas (modificación unilateral, caducidad) y controles reforzados de transparencia. En materia de consumo o laboral, la normativa social imperativa limita la libertad contractual, invierte cargas y fija estándares probatorios pro operario o pro consumidor. La práctica profesional demanda, pues, leer el caso desde la Constitución, identificar la rama aplicable y articular la estrategia con principios y remedios del campo correcto.",
        },
        {
          type: "accordion",
          header: "Controversias y puntos de encuentro",
          open: false,
          text: "La distinción público/privado ha sido cuestionada por su rigidez teórica; sin embargo, su utilidad pedagógica y práctica persiste. Hoy abundan zonas híbridas: servicios públicos gestionados por privados, asociaciones público-privadas, regulación económica de contratos, derechos fundamentales con eficacia horizontal, y soft law que influye en ambas esferas. Estas intersecciones exigen un enfoque principialista y de ponderación que integre supremacía constitucional, control de convencionalidad y corrección funcional de los contratos. El reto es evitar compartimentos estancos: reconocer que la autonomía privada está limitada por el orden público y los derechos humanos, y que la actuación estatal debe respetar la seguridad jurídica y la confianza legítima. Leído así, el mapa público/privado no es un muro, sino un continuo que orienta decisiones y resuelve conflictos con criterios de justicia material.",
        },
      ],
      subthemes: [
        /* ── 7.1 Tesis sobre la diferencia entre lo público y lo privado ───────── */
        {
          id: "7.1",
          numbering: "7.1",
          title: "Tesis sobre la diferencia entre lo público y lo privado",
          content: [
            {
              type: "paragraph",
              text: "La distinción entre Derecho público y Derecho privado ha sido objeto de debate teórico, pero conserva una utilidad práctica y pedagógica evidente en los ordenamientos contemporáneos. Desde una mirada histórica, se recuerda que la escisión cristaliza en la ciencia jurídica moderna y algunos autores la consideran propia del siglo XIX; sin embargo, su permanencia responde a razones funcionales: cuando el poder público interviene como parte en una relación jurídica (demandando o siendo demandado) se activan reglas, garantías y fines orientados a tutelar el interés general; cuando la relación se da entre particulares, las normas privilegian la autonomía de la voluntad, la igualdad formal y la solución de controversias inter privatos. En México, la práctica forense, la organización jurisdiccional y la enseñanza del Derecho siguen empleando la dicotomía para delimitar competencias, vías procesales y técnicas argumentativas, aun cuando la teoría contemporánea subraye los vasos comunicantes entre ambas esferas y advierta hibridaciones crecientes (p. ej., regulación económica, derechos fundamentales con eficacia horizontal o la incidencia de políticas públicas en ámbitos contractuales).",
            },
            {
              type: "paragraph",
              text: "El Derecho público se caracteriza por la presencia del Estado —o de entes con potestades públicas— defendiendo o haciendo valer prerrogativas orientadas al interés colectivo. En este campo se ubican, entre otras, las ramas constitucional, administrativa, penal, procesal, financiera, tributaria, electoral e internacional pública; todas suponen la posibilidad de ejercicio de potestad, coacción legítima y sujeción a principios como legalidad, competencia, proporcionalidad y debido proceso. A diferencia de ello, el Derecho privado regula la vida jurídica de los particulares y sus conflictos: personalidad, familia, bienes, obligaciones, contratos, sociedades, comercio, insolvencia, así como relaciones internacionales privadas cuando los elementos del caso conectan con diversos ordenamientos. La ratio de esta clasificación no niega la presencia del Estado como juez o regulador general; simplemente destaca que, si es parte material del litigio, cambia la fisonomía de la relación y de los instrumentos normativos y procesales activables. :contentReference[oaicite:0]{index=0}",
            },

            /* Imagen intercalada (del material) */
            {
              type: "image",
              src: "https://i.ytimg.com/vi/JN7ftznLDvM/maxresdefault.jpg",
              alt: "Esquema visual sobre Derecho público y privado (imagen citada en el material de estudio).",
              caption:
                "Derecho público y privado — apoyo visual citado en el material.",
            },

            {
              type: "paragraph",
              text: "Un tercer polo, el Derecho social, emergió para corregir asimetrías reales entre sujetos que, aunque formalmente iguales, se encuentran en condiciones materiales desiguales. Así, ramas como la laboral, la agraria y la de seguridad social colocan a una de las partes bajo una tutela reforzada que compensa desigualdades de poder, ingreso o información. Esta aparición no ‘borra’ la distinción público/privado: más bien la complejiza, pues técnicas del Derecho público (p. ej., principios de interés general o intervención administrativa) conviven con lógicas típicas del Derecho privado (contratos individuales o colectivos) y con instrumentos propios del constitucionalismo social (derechos prestacionales, justicia distributiva). El práctico del Derecho necesita reconocer cuándo opera cada lente para elegir la vía adecuada y construir estrategias coherentes con la finalidad de protección.",
            },
            {
              type: "paragraph",
              text: "Las tesis críticas —que llaman a superar la dicotomía— aducen que en toda relación jurídica está presente, de algún modo, el Estado: estableciendo el marco normativo, administrando justicia y garantizando la fuerza coactiva de las decisiones. Pero de ahí no se sigue que las categorías carezcan de valor: distinguir si el Estado participa como órgano de garantía o como parte material del conflicto resulta decisivo para conocer el régimen aplicable, la distribución de cargas y prerrogativas y la intensidad del control jurisdiccional. La línea divisoria, aunque porosa, sigue ofreciendo claridad organizativa para la enseñanza, para la defensa procesal y para la política legislativa: permite mapear competencias, diseñar procedimientos adecuados y orientar el análisis de constitucionalidad y convencionalidad.",
            },

            /* Acordeón 1 (texto en formato de párrafo, extenso) */
            {
              type: "accordion",
              header:
                "Criterios operativos para diferenciar lo público y lo privado",
              open: false,
              text: "Operativamente, la distinción puede apoyarse en cuatro preguntas: (1) ¿Quiénes son las partes? Si participa el poder público defendiendo un interés general o actuando con prerrogativas de ius imperii, el litigio se aproxima al ámbito público; si la relación es entre particulares en plano de igualdad, nos movemos en lo privado. (2) ¿Qué finalidad persigue la norma aplicada? Tutelar el interés colectivo y el orden público remite al Derecho público; satisfacer intereses individuales y autorregulados, al privado. (3) ¿Qué tipo de potestades se ejercen? La posibilidad de sancionar unilateralmente o de imponer actos administrativos con presunción de legitimidad sugiere el terreno público; la negociación y el consentimiento informan el privado. (4) ¿Cuál es la vía procesal idónea? Contencioso administrativo, amparo o control constitucional apuntan a lo público; procesos civiles–mercantiles y mecanismos autocompositivos suelen corresponder a lo privado. Estos criterios no son excluyentes, pero facilitan decisiones tácticas: elección de foro, medidas cautelares, cargas probatorias y estándar de motivación exigible al juzgador.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header:
                "Intersecciones y zonas grises (contratos públicos, servicios esenciales, eficacia horizontal de derechos)",
              open: false,
              text: "Las ‘zonas mixtas’ obligan a matizar: contratos públicos que se rigen parcialmente por reglas privadas; servicios esenciales (energía, agua, salud) prestados por privados bajo intensa regulación; y eficacia horizontal de derechos fundamentales, que permite exigir a particulares el respeto de garantías típicamente oponibles al Estado (no discriminación, privacidad, libertad de expresión). En estos espacios, el abogado debe articular principios de ambos mundos: control de proporcionalidad y debido proceso (público) con buena fe objetiva, equilibrio contractual y responsabilidad civil (privado). Además, la justicia constitucional y los sistemas internacionales de derechos humanos difuminan fronteras al irradiar sus estándares sobre todo el ordenamiento. La clave práctica consiste en identificar cuál interés prevalece —general o individual—, qué poderes se ejercen y qué remedios son pertinentes para restablecer la juridicidad sin sacrificar tutela efectiva.",
            },
          ],
          subthemes: [],
        },

        /* ── 7.2 Conclusiones ─────────────────────────────────────────────────── */
        {
          id: "7.2",
          numbering: "7.2",
          title: "Conclusiones",
          content: [
            {
              type: "paragraph",
              text: "La distinción entre Derecho público y Derecho privado no es un dogma, sino un instrumento analítico y didáctico que, usado con prudencia, mejora la comprensión de casos, la elección de estrategias y el diseño normativo. Su valor se confirma en la organización jurisdiccional, en la tipología de procesos, en la distribución de competencias y en la ingeniería institucional. Al mismo tiempo, su lectura debe actualizarse a la luz de la constitucionalización del ordenamiento, la expansión de los derechos fundamentales y las nuevas formas de intervención estatal en mercados y servicios. Reconocer su utilidad junto con sus límites evita falsas certezas: no toda controversia con participación estatal es ‘pública’, ni todo conflicto privado permanece inmune a pautas de interés general.",
            },
            {
              type: "paragraph",
              text: "Para efectos formativos, mantener la distinción facilita el aprendizaje progresivo: primero se dominan sus rasgos típicos (partes, fines, potestades, vías) y luego se exploran las intersecciones y los trasvases. En la práctica, la distinción orienta decisiones tácticas: ¿acción contencioso–administrativa o civil? ¿medidas cautelares propias de lo público o cautelas reales del proceso civil? ¿estándar reforzado de motivación por parte de la autoridad o deber de información y buena fe en relaciones privadas? Esta brújula ayuda a estructurar argumentaciones coherentes, a anticipar cargas y a medir riesgos. En síntesis, ‘público’ y ‘privado’ siguen siendo coordenadas útiles para navegar el mapa del Derecho positivo sin dejar de atender a la complejidad del caso concreto. :contentReference[oaicite:1]{index=1}",
            },

            /* Imagen (opcional). Si prefieres no repetir, puedes omitirla. */
            {
              type: "image",
              src: "https://i.ytimg.com/vi/JN7ftznLDvM/maxresdefault.jpg",
              alt: "Relación entre esferas pública y privada.",
              caption: "Intersección de esferas pública y privada.",
            },

            {
              type: "paragraph",
              text: "Las conclusiones prácticas derivan en tres mandatos: (a) leer el caso desde los fines que tutela cada régimen —interés general versus autonomía privada— para modular los estándares de control; (b) seleccionar la vía y las medidas procesales conforme a la naturaleza de la relación —pública, privada o mixta—; y (c) argumentar con principios transversales (proporcionalidad, razonabilidad, igualdad y no discriminación, seguridad jurídica) que hoy irradian todo el sistema jurídico. Esta triple pauta promueve decisiones más consistentes con el Estado constitucional de Derecho y con la tutela judicial efectiva, al tiempo que reconoce la pluralidad de técnicas normativas disponibles para resolver conflictos de manera justa y eficiente.",
            },

            /* Acordeones (texto en párrafo largo) */
            {
              type: "accordion",
              header: "Implicaciones para la abogacía y la política pública",
              open: false,
              text: "La abogacía estratégica exige mapear bien si el adversario es una autoridad con potestades públicas o un particular, pues cambia el repertorio de remedios (nulidad de actos administrativos, restablecimiento, condenas al pago, responsabilidad patrimonial del Estado, acciones colectivas) y las exigencias probatorias. Para la política pública, la distinción sirve para diseñar regulaciones proporcionadas: cuanto más intensa sea la afectación a derechos o a la competencia, mayor justificación y control; si se trata de ámbitos privados con fuerte interés público (servicios esenciales), la regulación debe equilibrar protección de usuarios, sostenibilidad del servicio y dinamismo del mercado. Esta mirada combinada, lejos de encasillar, amplía el margen de soluciones y evita el formalismo estéril.",
            },
            {
              type: "accordion",
              header:
                "Ruta de estudio sugerida y conexiones con otras unidades",
              open: false,
              text: "Una ruta eficaz de estudio encadena: (1) criterios de identificación (partes, fines, potestades, vías); (2) ramas paradigmáticas de cada bloque; (3) escenarios híbridos frecuentes (contratación pública, concesiones, cumplimiento regulatorio, eficacia horizontal de derechos); y (4) aterrizaje en casos. Esta unidad se conecta con la noción de Estado (unidad 6), con las ‘ramas’ (unidad 8) y con los ‘conceptos jurídicos fundamentales’ (unidad 9), pues la calificación público/privado condiciona supuestos, consecuencias y hechos relevantes. La evaluación puede combinar ejercicios de clasificación con microcasos que exijan justificar la vía y el estándar de control. El objetivo final no es memorizar listas, sino aprender a escoger el ‘lente’ correcto para cada problema jurídico.",
            },
          ],
          subthemes: [],
        },
      ],
    },

    /* 8. Ramas del Derecho */
    {
      id: "8",
      numbering: "Unidad 8",
      title: "Ramas del Derecho",
      content: [
        {
          type: "paragraph",
          text: "Clasificar el Derecho por ramas no es un ejercicio meramente académico: es una herramienta de orientación para entender qué principios, instituciones y procedimientos se activan ante un problema concreto. La distinción clásica entre Derecho público y privado, enriquecida en México por el llamado Derecho social, permite mapear ámbitos de actuación, niveles de tutela y finalidades regulatorias. En el Derecho público, el Estado aparece como parte para proteger el interés general; en el privado, el ordenamiento organiza relaciones entre particulares; en el social, se corrigen asimetrías materiales otorgando protección reforzada a sujetos en desventaja. Este mapa ayuda a ubicar materias, tribunales, formas procesales y fuentes específicas, así como a anticipar el tipo de consecuencias jurídicas (sanciones, nulidades, responsabilidades). Además, la clasificación acelera la lectura de casos: no se aborda igual un conflicto por contaminación (administrativo, penal y ambiental) que un divorcio (civil/familiar) o una huelga (laboral). Entender el porqué de cada familia de normas y su razón histórica de ser prepara al estudiante para transitar con solvencia entre textos constitucionales, códigos civiles, leyes administrativas o estatutos laborales y, sobre todo, para reconocer cuándo un mismo hecho activa varias ramas a la vez.",
        },
        {
          type: "paragraph",
          text: "Dentro del Derecho público se agrupan, entre otras, las ramas constitucional, administrativa, internacional pública, penal, procesal, financiera, tributaria y electoral. La constitucional fija la arquitectura del Estado y el catálogo de derechos; la administrativa regula la organización y actuación de la administración pública y el control de su legalidad; la internacional pública ordena la relación entre Estados y organismos internacionales; la penal tutela los bienes jurídicos más importantes mediante la amenaza de pena y el ius puniendi; la procesal establece las reglas del juego para tramitar y decidir los conflictos; la financiera y la tributaria rigen el ingreso y el gasto públicos, y la creación y recaudación de tributos; la electoral organiza la renovación pacífica del poder. Este conjunto persigue la efectividad del interés general, el control del poder y la protección de derechos fundamentales. En la práctica, estas ramas suelen entrelazarse: un procedimiento administrativo sancionador debe respetar garantías procesales; una política pública se sujeta a límites constitucionales y a disponibilidad presupuestaria; un tratado internacional puede irradiar al orden interno. Así, el Derecho público hace inteligible el ejercicio del poder y sus límites.",
        },
        {
          type: "paragraph",
          text: "En el Derecho privado, el foco está en las relaciones entre particulares y en la seguridad de las transacciones. El Derecho civil abarca personalidad, familia, bienes, contratos, responsabilidad y sucesiones; por su amplitud, hoy se distingue el Derecho de obligaciones del Derecho familiar. El Derecho mercantil disciplina los actos de comercio y a los comerciantes; el societario o corporativo regula la constitución, gobierno y disolución de sociedades; el concursal atiende insolvencia, quiebra y reestructuras; el internacional privado determina ley aplicable y jurisdicción en situaciones con elementos extranjeros. Aunque ciertos temas como el ambiental suelen tener proyección pública, también se ventilan en clave privada cuando median daños entre particulares o cláusulas contractuales de cumplimiento ambiental. Estas ramas proveen herramientas de previsibilidad (formas, registros, publicidad, títulos de crédito), reparación (daños y perjuicios) y organización patrimonial (sociedades, fideicomisos). Su conocimiento permite estructurar contratos eficaces, gestionar riesgos, diseñar vehículos corporativos y litigar con estrategia, evitando nulidades por vicios de forma o de consentimiento, y garantizando el equilibrio entre autonomía de la voluntad y límites de orden público.",
        },
        {
          type: "paragraph",
          text: "El Derecho social surge como respuesta a desigualdades estructurales y se expresa en tres grandes ramas: agrario, laboral y de seguridad social. El agrario protege la tenencia rural, la propiedad social y el uso colectivo de la tierra; el laboral reconoce la asimetría entre trabajador y empleador y establece pisos mínimos de protección (salario digno, jornada, seguridad e higiene, negociación colectiva, huelga); la seguridad social articula prestaciones y servicios para contingencias como enfermedad, maternidad, invalidez, vejez o desempleo. Estas ramas desplazan la ficción de igualdad absoluta entre partes y asumen un principio tuitivo: cuando existe desequilibrio, el orden jurídico compensa con reglas más favorables a la parte débil. En México, su evolución histórica se vincula con procesos sociales y constitucionales que ampliaron la noción de derechos. En la práctica, los casos sociales no se agotan en sus propias leyes: un conflicto laboral puede implicar responsabilidades administrativas o penales; un programa de seguridad social demanda finanzas públicas sostenibles; y un conflicto agrario dialoga con el régimen de propiedad y con el derecho ambiental.",
        },
        {
          type: "paragraph",
          text: "Operativamente, esta clasificación funciona como un ‘GPS’ jurídico: primero se ubica la familia normativa (público, privado, social) y luego la rama específica, con sus fuentes, autoridades competentes y procedimientos. Sin embargo, conviene no convertir el mapa en compartimentos estancos. La realidad es interdependiente y muchos asuntos son híbridos: una empresa puede enfrentar un procedimiento ambiental (administrativo), una querella por delito ecológico (penal) y, simultáneamente, demandas civiles por daños; una familia negocia alimentos (civil/familiar) y activa medidas de protección (administrativo) con perspectiva de derechos humanos (constitucional). Por ello, además de memorizar definiciones y catálogos, el objetivo es desarrollar la capacidad de leer problemas de manera integral, identificar puntos de contacto entre ramas y decidir rutas procesales viables. El estudio sistemático de las ramas —y su justificación— prepara para argumentar con coherencia, escoger la sede adecuada, medir tiempos y costos, y anticipar efectos colaterales. A la par, permite diferenciar cuándo un asunto debe resolverse privilegiando el interés público, la autonomía privada o la tutela reforzada propia del Derecho social.",
        },

        /* Acordeón (3 niveles) */
        {
          type: "accordion",
          header: "Ramas del Derecho público",
          open: false,
          text: "Incluye, entre otras, constitucional (estructura del Estado y derechos), administrativa (organización y actividad de la administración), internacional pública (relaciones entre Estados), penal (protección de bienes jurídicos mediante el ius puniendi), procesal (reglas del proceso), financiera y tributaria (ingreso y gasto públicos; creación y recaudación de tributos) y electoral (renovación del poder). Su denominador común es la protección del interés general, el control del poder y la vigencia efectiva de los derechos fundamentales, mediante competencias y procedimientos propios que limitan la arbitrariedad y aseguran la rendición de cuentas.",
        },
        {
          type: "accordion",
          header: "Ramas del Derecho privado",
          open: false,
          text: "Ordena relaciones entre particulares: civil (persona, familia, bienes, contratos, responsabilidad, sucesiones), mercantil (actos de comercio y comerciantes), societario/corporativo (organización y gobierno de sociedades), concursal (insolvencia y reestructuras) e internacional privado (ley aplicable y jurisdicción en situaciones con elementos extranjeros). Persigue seguridad jurídica, previsibilidad y equilibrio en las transacciones, combinando autonomía de la voluntad con límites de orden público y buenas costumbres, y ofreciendo remedios como nulidad, cumplimiento forzoso o indemnización de daños.",
        },
        {
          type: "accordion",
          header: "Derecho social y otras ramas con enfoque tuitivo",
          open: false,
          text: "Agrario (tenencia rural y propiedad social), laboral (protecciones mínimas, negociación colectiva, huelga) y seguridad social (prestaciones y servicios ante contingencias) corrigen desigualdades estructurales mediante reglas de tutela reforzada. Aunque poseen instituciones y autoridades especializadas, frecuentemente dialogan con ramas públicas (finanzas, administrativo, penal) y con principios constitucionales de igualdad sustantiva y no discriminación, lo que exige abordajes interdisciplinares y estrategias procesales coordinadas.",
        },
      ],
      subthemes: [
        /* ── Unidad 8 ─ Ramas del Derecho ─ Subtemas ─────────────────────────── */

        /* 8.1 Ramas del Derecho Público */
        {
          id: "8.1",
          numbering: "8.1",
          title: "Ramas del Derecho Público",
          content: [
            {
              type: "paragraph",
              text: "El Derecho público estudia y regula las relaciones en las que el poder público interviene como parte, con miras a preservar el interés general y la vigencia del orden constitucional. Bajo esta lógica, sus ramas comparten un común denominador: la sujeción del ejercicio del poder a límites normativos y procedimentales que garantizan derechos, estabilidad institucional y previsibilidad. La clasificación más utilizada incluye al Derecho constitucional, administrativo, internacional público, penal, procesal, financiero, tributario y electoral. Cada una de estas ramas aborda un segmento funcional del quehacer estatal (organización, actuación, responsabilidad, coerción, recaudación, gasto, procedimientos y acceso democrático al poder), pero todas se conectan en la idea matriz de legalidad y control. Comprender el alcance y las fronteras de cada rama facilita ubicar la norma aplicable, el órgano competente y el procedimiento correcto para encauzar conflictos con dimensión pública, a la vez que evita extender indebidamente potestades o invadir esferas reservadas al ámbito privado.",
            },
            {
              type: "paragraph",
              text: "El Derecho constitucional ocupa una posición rectora porque interpreta los textos fundamentales que organizan al Estado, distribuyen competencias y reconocen derechos. A partir de ese vértice se despliega el Derecho administrativo, que rige la estructura y la actuación de la administración pública, así como sus relaciones con las personas; el procesal, que ordena las formas y garantías del juzgamiento; y el penal, que legitima el poder punitivo y tipifica conductas, con su correlativo sistema de sanciones. Completa el cuadro el Derecho financiero y el tributario: el primero pauta el ciclo de los recursos públicos; el segundo, la creación, determinación y recaudación de contribuciones. Finalmente, el Derecho electoral asegura la periodicidad, autenticidad y legalidad de los procesos de renovación de cargos, resguardando la voluntad popular mediante instituciones especializadas y reglas de competencia equitativa.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Panorama operativo de ramas clave del Derecho público",
              open: false,
              text: "Constitucional: interpreta la norma fundamental y el ‘bloque de constitucionalidad’, controla la validez del resto del sistema y resuelve controversias competenciales. Administrativo: regula la organización, los actos y procedimientos de la administración; contempla potestades, deberes, responsabilidad y control jurisdiccional. Procesal: establece cauces, principios y garantías del proceso (contradicción, publicidad, debido proceso, doble instancia) para toda rama. Penal: delimita el ius puniendi mediante tipos, antijuridicidad, culpabilidad y penas; su ejercicio exige estricta legalidad y proporcionalidad. Internacional público: ordena vínculos entre Estados (tratados, responsabilidad internacional, solución pacífica de controversias). Financiero y tributario: planeación, presupuesto, gasto, deuda y recaudación, con sujeción a legalidad y destino al gasto público. Electoral: organiza comicios, fiscaliza partidos y campañas, resuelve medios de impugnación y garantiza derechos político-electorales.",
            },

            {
              type: "paragraph",
              text: "Aunque cada rama posee categorías y técnicas propias, su interacción es cotidiana: una decisión administrativa puede activar control constitucional; un procedimiento penal se somete a garantías procesales; un tributo debe emanar del legislador, respetar principios como legalidad, proporcionalidad y destino al gasto público, y ejecutarse mediante procedimientos reglados. Esta transversalidad refuerza la idea de ‘sistema’: el Estado actúa, pero siempre bajo cauces, límites y responsabilidades previamente definidos. En la práctica profesional, distinguir la rama pertinente permite elegir el foro, la acción y la prueba idónea, así como articular argumentos de convencionalidad y constitucionalidad que incrementen la solidez de la defensa o la impugnación.",
            },

            /* Imagen intercalada (procede del material de la sesión) */
            {
              type: "image",
              src: "https://lahumanaquelegisla.wordpress.com/wp-content/uploads/2016/02/bloque-iv-derecho-i-3-728.jpg",
              alt: "Mapa ilustrativo de ramas del Derecho",
              caption:
                "Esquema de ramas del Derecho que se emplea con fines pedagógicos.",
            },

            {
              type: "paragraph",
              text: "El enfoque público exige, además, una cultura de rendición de cuentas. Los actos estatales deben motivarse y fundamentarse; los procedimientos, documentarse y ser revisables; y las sanciones, anclarse en una ley previa, cierta y estricta. A ello se suma el control externo —jurisdiccional, legislativo, social— que corrige desviaciones y fortalece legitimidad. Este hábitus jurídico previene arbitrariedad y asegura que la primacía del interés público no derive en sacrificio desproporcionado de posiciones individuales. En suma: el Derecho público convierte fuerza en autoridad, y autoridad en servicio.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Criterios prácticos para identificar la vía pública",
              open: false,
              text: "1) ¿Hay un ente estatal actuando con prerrogativas de poder? Indicio de vía pública y control contencioso-administrativo o constitucional. 2) ¿La pretensión afecta derechos fundamentales o reglas de organización del poder? Cabe tutela constitucional o mecanismos de convencionalidad. 3) ¿Se discuten tributos, gasto o sanciones públicas? Se activan principios de legalidad, proporcionalidad y destino al gasto, y procedimientos específicos. 4) ¿La controversia versa sobre integridad del proceso democrático? La vía electoral es la adecuada. En todos los casos, la elección del cauce procesal correcto condiciona la eficacia del remedio.",
            },
          ],
          subthemes: [],
        },

        /* 8.2 Ramas del Derecho Privado */
        {
          id: "8.2",
          numbering: "8.2",
          title: "Ramas del Derecho Privado",
          content: [
            {
              type: "paragraph",
              text: "El Derecho privado regula relaciones entre particulares que se sitúan, en principio, en un plano de igualdad jurídica. Su racionalidad gira en torno a la autonomía de la voluntad, la buena fe, la responsabilidad por incumplimiento y la tutela del tráfico jurídico. Las ramas clásicas son el Derecho civil y el mercantil, a las que hoy se asocian campos de especialidad como el societario (corporativo), el concursal, el ambiental con proyección privada, y el internacional privado, que ofrece criterios para resolver conflictos de leyes, competencia judicial y reconocimiento de decisiones extranjeras. En conjunto, estas disciplinas hacen posible que las personas organicen su vida, su patrimonio y sus negocios con seguridad jurídica, articulando contratos, derechos reales, responsabilidad civil, títulos de crédito, sociedades, insolvencias y operaciones transnacionales.",
            },
            {
              type: "paragraph",
              text: "El Derecho civil es la ‘parte general’ del Derecho privado: persona, familia, bienes, sucesiones, obligaciones y contratos. Define categorías como capacidad, representación, objeto y causa, así como remedios pre y poscontractuales. El mercantil, por su parte, regula los actos de comercio y la actividad empresarial: títulos y operaciones de crédito, intermediación financiera, competencia, propiedad industrial y, cada vez más, economía digital. El societario profundiza en la constitución, gobierno y responsabilidad de sociedades y otras figuras asociativas, mientras que el concursal establece las soluciones a la insolvencia (conservación de la empresa viable o liquidación ordenada) equilibrando intereses de acreedores, deudor y mercado. El internacional privado, finalmente, aporta reglas para determinar la ley aplicable, el juez competente y la eficacia de sentencias y laudos foráneos.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Claves de técnica privada: autonomía, forma y remedios",
              open: false,
              text: "Autonomía de la voluntad: libertad para contratar dentro de límites de ley y orden público. Forma: escrita o ad solemnitatem según el acto (p. ej., enajenar inmuebles, garantías). Publicidad: registros para oponibilidad frente a terceros (propiedad, marcas, sociedades). Buena fe y equilibrio: interpretación, cláusulas abusivas, información y transparencia. Remedios: cumplimiento, resolución, daños y perjuicios, ejecución de garantías, medidas cautelares. Insolvencia: concurso para reestructurar o liquidar, con reglas de graduación y pago. Internacional privado: normas de conflicto, elección de foro y de ley, reconocimiento de sentencias (exequátur) y arbitraje comercial internacional.",
            },

            {
              type: "paragraph",
              text: "Aunque el prisma privado privilegia la libertad contractual, esta no es absoluta. El orden público económico, la tutela de consumidores, la protección de datos, la competencia y el medio ambiente introducen límites materiales y deberes de información, diligencia y seguridad. De ahí que múltiples instituciones ‘mixtas’ exijan coordinar categorías privadas con marcos regulatorios públicos (p. ej., mercados financieros o telecomunicaciones). Para la práctica forense y consultiva, esta hibridación obliga a diseñar contratos y estructuras societarias compatibles con la normativa sectorial, a planear estrategias probatorias desde el inicio y a prever mecanismos alternativos de solución de controversias que reduzcan riesgos de ejecución y costos de transacción.",
            },

            /* Imagen intercalada (misma lámina pedagógica, útil para ubicar ramas) */
            {
              type: "image",
              src: "https://lahumanaquelegisla.wordpress.com/wp-content/uploads/2016/02/bloque-iv-derecho-i-3-728.jpg",
              alt: "Esquema de ramas del Derecho con enfoque en lo privado",
              caption:
                "La lámina también permite ubicar el eje privado y sus cruces con lo público.",
            },

            {
              type: "paragraph",
              text: "En suma, el Derecho privado proporciona las herramientas para que la autonomía florezca sin renunciar a la equidad y la seguridad. La clave práctica está en traducir principios en cláusulas claras, asignar riesgos con criterios económicos y jurídicos, documentar adecuadamente la voluntad y, ante el conflicto, activar remedios proporcionales y eficaces. Al resolver con técnica privada, no sólo se protege el interés de las partes, sino que se contribuye a la eficiencia del tráfico y a la confianza en los mercados.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header: "Checklist contractual y societario para la práctica",
              open: false,
              text: "1) Identidad y capacidad de las partes; poderes y órganos societarios. 2) Objeto, precio/contraprestación y plazos; condiciones y ‘long-stop date’. 3) Representaciones y garantías; obligaciones de hacer/no hacer; estándares de diligencia. 4) Asignación de riesgos (fuerza mayor, cambios normativos, tipo de cambio). 5) Remedios y limitaciones de responsabilidad; penalidades y garantías. 6) Confidencialidad, protección de datos y propiedad intelectual. 7) Ley aplicable, jurisdicción o arbitraje; idioma, notificaciones y ejecución transfronteriza.",
            },
          ],
          subthemes: [],
        },

        /* 8.3 Otras ramas del Derecho (ámbito social) */
        {
          id: "8.3",
          numbering: "8.3",
          title: "Otras ramas del Derecho",
          content: [
            {
              type: "paragraph",
              text: "La evolución constitucional mexicana incorporó un eje social que reconoce asimetrías materiales entre sujetos, por lo que ciertas ramas del Derecho se orientan a corregir desigualdades estructurales y asegurar un piso de dignidad. Tradicionalmente se destacan tres: el Derecho agrario, el Derecho laboral y el Derecho de la seguridad social. El primero tutela la propiedad y tenencia de la tierra en el medio rural y regula ejidos, comunidades y sujetos agrarios; el segundo organiza las relaciones de trabajo, equilibrando intereses de trabajadores y empleadores mediante derechos mínimos, negociación colectiva y jurisdicción especializada; el tercero diseña y garantiza prestaciones vinculadas a salud, pensiones, riesgos de trabajo y otras contingencias sociales. Estas ramas, aunque dialogan con categorías públicas y privadas, responden a una racionalidad protectora: intervención estatal reforzada, irrenunciabilidad de derechos básicos y mecanismos ágiles de tutela.",
            },
            {
              type: "paragraph",
              text: "El Derecho agrario, con raíces en la reforma social del siglo XX, regula formas de propiedad social y el aprovechamiento colectivo de la tierra, procesos de dotación, restitución y regularización, así como la organización de los núcleos agrarios. Su finalidad no se agota en la seguridad jurídica de la tenencia: también persigue desarrollo rural sustentable y solución de conflictos a través de órganos jurisdiccionales especializados. La experiencia muestra que los litigios agrarios exigen peritajes técnicos (medición, deslinde) y un diálogo constante con autoridades administrativas y registrales, por lo que la estrategia probatoria debe diseñarse desde el inicio con enfoque interdisciplinario.",
            },

            /* Acordeón 1 */
            {
              type: "accordion",
              header: "Claves del Derecho laboral contemporáneo",
              open: false,
              text: "Garantiza derechos mínimos (salario, jornada, seguridad y salud), libertad sindical y negociación colectiva auténtica; regula contratación, modalidades de trabajo y terminación, así como mecanismos de solución de conflictos (conciliación prejudicial, tribunales laborales). La reforma procesal recentró la oralidad, la inmediatez y la celeridad, fortaleciendo la inspección y la ejecución. La práctica demanda diseñar contratos claros, políticas internas compatibles con no discriminación y protocolos de prevención; documentar desempeño con evidencia trazable; y prever esquemas de cumplimiento en tercerización, igualdad salarial y seguridad social.",
            },

            {
              type: "paragraph",
              text: "La seguridad social despliega un entramado de aseguramiento que cubre riesgos de enfermedad y maternidad, invalidez y vida, riesgos de trabajo, retiro, cesantía y vejez, entre otros. Su financiamiento mixto (aportaciones del trabajador, del empleador y del Estado) se administra por instituciones públicas que combinan reglas actuariales con mandatos de universalidad y suficiencia. En la asesoría y el litigio, los puntos críticos pasan por la correcta afiliación, clasificación de riesgos, semanas cotizadas, cálculo de pensiones, transición de marcos legales y compatibilidad de regímenes, lo que exige lectura integrada de normas sustantivas y procedimentales.",
            },

            /* Imagen intercalada (lámina pedagógica) */
            {
              type: "image",
              src: "https://lahumanaquelegisla.wordpress.com/wp-content/uploads/2016/02/bloque-iv-derecho-i-3-728.jpg",
              alt: "Ramas social, pública y privada en un mismo esquema",
              caption:
                "El eje social convive y se interseca con lo público y lo privado.",
            },

            {
              type: "paragraph",
              text: "La articulación de estas ramas con el resto del ordenamiento impone un enfoque de integralidad: problemas de tierra se conectan con ambiental, registral y penal; la relación laboral con lo mercantil y fiscal; y la seguridad social con el derecho administrativo y de datos personales. La consecuencia práctica es clara: el diseño de estrategias debe cruzar lo sustantivo con lo procesal, y lo nacional con lo convencional, para activar el remedio más eficaz y oportuno. Así, la función social del Derecho se traduce en tutela efectiva para personas y colectivos en situación de vulnerabilidad.",
            },

            /* Acordeón 2 */
            {
              type: "accordion",
              header:
                "Buenas prácticas para litigio y gestión en ramas sociales",
              open: false,
              text: "1) Diagnóstico temprano de vulnerabilidades y derechos irrenunciables. 2) Documentación exhaustiva y trazable (actas, planos, contratos, afiliaciones). 3) Coordinación con autoridades administrativas y registros. 4) Uso estratégico de medidas cautelares y mecanismos alternativos de solución de controversias. 5) Enfoque de derechos humanos y control de convencionalidad en la argumentación. 6) Evaluación de impacto colectivo y reparación integral cuando proceda.",
            },
          ],
          subthemes: [],
        },
      ],
    },

    /* 9. Conceptos jurídicos fundamentales */
    {
      id: "9",
      numbering: "Unidad 9",
      title: "Conceptos jurídicos fundamentales",
      content: [
        {
          type: "paragraph",
          text: "En esta unidad abordamos el corazón lógico del Derecho: los conceptos que permiten describir, explicar y decidir con rigor. El punto de partida es la norma jurídica como regla de conducta emanada de una autoridad legítima, distinta de pautas morales o de trato social por su carácter institucional y coercible. Toda norma articula expectativas y límites a la acción humana, y su estudio exige distinguir su validez dentro del sistema (fuentes, jerarquía, vigencia) de su eficacia social (grado de cumplimiento). Asumimos, además, que el razonamiento jurídico opera sobre estructuras formales que conectan situaciones de hecho con consecuencias normativas, de modo que el operador del Derecho pueda calificar casos, subsumirlos en categorías y, finalmente, decidir. Para ello es imprescindible dominar definiciones operativas, ejemplos, contraejemplos y criterios interpretativos. El objetivo práctico de la unidad es, por tanto, dotarte de un mapa conceptual funcional para leer normas, plantear problemas y justificar soluciones con un lenguaje técnico claro y prudente, a la vez que consciente de la finalidad de justicia que anima al orden jurídico. :contentReference[oaicite:0]{index=0}",
        },
        {
          type: "paragraph",
          text: "La norma jurídica suele explicarse como una relación condicional entre un supuesto de hecho y una consecuencia jurídica. El supuesto de hecho es una hipótesis que describe una situación que, de presentarse en la realidad, activa efectos previstos por el ordenamiento (creación, modificación o extinción de derechos y obligaciones). La consecuencia jurídica es el efecto mismo: deber de dar, hacer o no hacer; reconocimiento de un derecho; imposición de una sanción; o habilitación de una potestad pública. Esta estructura condicional es la base del razonamiento práctico de jueces, autoridades y abogados: identificar hechos relevantes, calificarlos, y verificar si se cumplen los elementos normativos exigidos. La doctrina kelseniana recuerda, además, que las normas sirven tanto para guiar conductas como para evaluar la juridicidad de actos de autoridades y particulares. Comprender esta lógica evita confundir moral con Derecho y ayuda a distinguir entre validez (pertenencia de la norma al sistema) y aplicación (uso para decidir casos concretos). :contentReference[oaicite:1]{index=1}",
        },

        {
          type: "image",
          src: "https://i.ytimg.com/vi/A3TLzDXp82Y/maxresdefault.jpg",
          alt: "Esquema norma–supuesto–consecuencia",
          caption:
            "Estructura básica del razonamiento jurídico (esquema conceptual).",
        },

        {
          type: "paragraph",
          text: "Junto a la noción de norma, esta unidad diferencia hechos y actos jurídicos. Todo hecho jurídico es un acontecimiento natural o humano al que el ordenamiento atribuye efectos (por ejemplo, el nacimiento o la muerte). Los actos jurídicos, en cambio, son hechos humanos voluntarios dirigidos precisamente a producir consecuencias jurídicas (contratos, testamentos, reconocimientos), que requieren la concurrencia de elementos: sujetos capaces que expresan voluntad, objeto lícito y posible, y una relación jurídica reconocida por la norma. El deslinde es crucial para imputar efectos: no se exige voluntad en los hechos naturales, mientras que en los actos la intención y la forma pueden ser determinantes para su validez o nulidad. De aquí se derivan problemas clásicos de teoría del acto (vicios del consentimiento, forma ad solemnitatem vs ad probationem) y de responsabilidad (dolo, culpa), que muestran cómo la calificación de la conducta incide en la consecuencia jurídica aplicable. :contentReference[oaicite:2]{index=2}",
        },
        {
          type: "accordion",
          header: "Nivel 1 · Norma, supuesto de hecho y consecuencia",
          open: false,
          text: "Comprender la tríada norma–supuesto–consecuencia permite leer cualquier disposición con método. Una técnica útil es descomponer la redacción normativa en sus elementos: (i) identificar los verbos rectores (“deberá”, “queda prohibido”, “se impondrá”); (ii) aislar condiciones objetivas y subjetivas (quién, qué, cuándo, dónde); y (iii) explicitar la consecuencia (derecho, obligación, sanción, potestad). Esta lectura se complementa con criterios de interpretación (literal, sistemática, teleológica), que ayudan a resolver ambigüedades e integrar lagunas. En la práctica, el análisis se apoya en jerarquía y vigencia: una norma válida debe emanar de la fuente competente, respetar el bloque de constitucionalidad y encontrarse vigente. La eficacia, distinta de la validez, remite al cumplimiento social y a la aplicación por autoridades. Al aplicar la norma, el jurista reconstruye los hechos relevantes del caso, verifica el encaje con el supuesto y deriva la consecuencia, justificando su decisión con razones comprensibles y controlables. :contentReference[oaicite:3]{index=3}",
        },
        {
          type: "paragraph",
          text: "Desde una perspectiva metodológica, el operador del Derecho trabaja con conceptos que son, a la vez, herramientas de análisis y criterios de decisión. La claridad conceptual evita errores de calificación, reduce discrecionalidad y mejora la previsibilidad. La distinción entre normas generales e individualizadas ilustra esta idea: las primeras dirigen conductas a una clase abierta de destinatarios; las segundas concretan efectos para personas determinadas (sentencias, contratos), siempre subordinadas a las normas de mayor rango. Igualmente, distinguir entre validez formal (regularidad en el proceso de creación) y congruencia material (compatibilidad con principios superiores) permite un control más fino de constitucionalidad y legalidad. Finalmente, la construcción del caso exige articular hechos probados, subsunción normativa e interpretación, explicando por qué se consideran relevantes ciertos elementos y no otros. La destreza consiste en conectar adecuadamente lenguaje natural de los hechos con lenguaje técnico de las categorías jurídicas. :contentReference[oaicite:4]{index=4}",
        },
        {
          type: "accordion",
          header: "Nivel 2 · Hecho jurídico y acto jurídico",
          open: false,
          text: "Los hechos jurídicos abarcan fenómenos naturales (nacimiento, muerte, desastre) y conductas humanas no intencionales a las que la ley atribuye efectos, mientras que los actos jurídicos suponen voluntad dirigida a producir consecuencias jurídicas. Esta distinción incide en requisitos y en control: en los hechos naturales interesa su acreditación; en los actos se examinan capacidad, forma y objeto. La doctrina subraya que todo acto jurídico combina elementos esenciales (consentimiento, objeto, forma cuando la ley lo exige) y de validez (ausencia de vicios, licitud), cuya falta puede acarrear nulidad o ineficacia. En sede de responsabilidad, la calificación de la conducta como dolosa o culposa impacta la consecuencia jurídica (por ejemplo, tipo y medida de la sanción). Entender estas diferencias ayuda a ordenar la prueba, seleccionar normas aplicables y justificar la decisión, evitando confundir efectos que provienen del simple acaecimiento de un hecho con aquellos que derivan de una voluntad jurídicamente relevante. :contentReference[oaicite:5]{index=5}",
        },
        {
          type: "paragraph",
          text: "Para cerrar, conviene afianzar dos ideas transversales. Primero, el Derecho opera con un vocabulario técnico cuya precisión no es decorativa: cambia resultados. Por eso, distinguir entre ‘supuesto de hecho’ y ‘hecho del caso’, entre ‘derecho subjetivo’ y ‘facultad’, o entre ‘norma’ y ‘disposición’, evita equívocos interpretativos. Segundo, toda decisión jurídica debe ser motivo de justificación: mostrar qué norma se aplica, cómo se interpretó y por qué los hechos encajan en el supuesto. Esta exigencia de razones públicas sostiene la legitimidad del sistema, facilita el control y permite la corrección de errores. En síntesis, los conceptos jurídicos fundamentales no son un inventario estático, sino un instrumental vivo que estructura la lectura de textos, la construcción de casos y la argumentación. Dominarlo te permitirá transitar con solvencia del lenguaje común al jurídico y, de regreso, explicar con claridad decisiones y sus efectos en la vida social. :contentReference[oaicite:6]{index=6}",
        },
        {
          type: "accordion",
          header: "Nivel 3 · Aplicación práctica y técnica argumentativa",
          open: false,
          text: "Aplicar conceptos requiere método. Una secuencia útil: (1) delimitar el problema jurídico con preguntas guía (¿qué se discute? ¿qué se pide?); (2) fijar hechos relevantes y su prueba; (3) identificar normas potencialmente aplicables (jerarquía, vigencia, competencia); (4) interpretar disposiciones (criterios literal, sistemático y teleológico); (5) subsumir hechos en supuestos; (6) derivar la consecuencia jurídica y valorar alternativas; (7) redactar una justificación clara y ordenada. Este itinerario es compatible con enfoques contemporáneos de argumentación y con la necesidad de motivar decisiones. En escenarios de duda, usa principios como proporcionalidad, razonabilidad y seguridad jurídica para ponderar soluciones. Y recuerda: la distinción entre validez y eficacia te ayuda a separar el análisis dogmático del sociológico, sin perder de vista que el fin de toda actividad jurídica es asegurar un orden legítimo que proteja derechos y resuelva conflictos con equidad. :contentReference[oaicite:7]{index=7}",
        },
      ],
      subthemes: [
        /* ── Subtemas Unidad 9 ─ Conceptos jurídicos fundamentales ─ */

        /* 9.1 Normas de Derecho y supuestos jurídicos */
        {
          id: "9.1",
          numbering: "9.1",
          title: "Normas de Derecho y supuestos jurídicos",
          // Fuente base del desarrollo: :contentReference[oaicite:0]{index=0}
          content: [
            {
              type: "paragraph",
              text: "La norma jurídica es una regla de conducta que proviene de una autoridad legítima y se integra a un sistema de validez: pertenece a un ordenamiento, goza de presunción de obligatoriedad y, en caso de incumplimiento, habilita la imposición de sanciones. A diferencia de las normas morales, la norma jurídica es bilateral (relaciona sujetos) y coercible (su incumplimiento puede hacerse valer por la fuerza pública). Doctrinalmente puede ser general —dirigida a una clase indeterminada de personas— o particular —concretada para un individuo o grupo específico (p. ej., una sentencia o una concesión)—. Su estructura mínima articula un supuesto de hecho y una consecuencia jurídica: la primera es la hipótesis normativa que anticipa una situación fáctica relevante; la segunda, el efecto que el ordenamiento enlaza a la actualización de ese supuesto. Esta forma hipotético–condicional permite que el sistema preserve consistencia, proporción y previsibilidad: no hay sanción sin una hipótesis previa que la gatille, ni derecho otorgado sin un hecho o condición que lo active. :contentReference[oaicite:1]{index=1}",
            },
            {
              type: "paragraph",
              text: "El supuesto de hecho (o presupuesto normativo) es una anticipación abstracta de realidad: describe con lenguaje técnico una conducta, estado o evento cuya realización otorga pertinencia a la consecuencia jurídica. Puede ser simple (un único elemento) o complejo (varios elementos concatenados), instantáneo (se actualiza en un acto) o de tracto sucesivo (requiere duración), objetivo (hechos externos) o subjetivo (volición, dolo o culpa). Su redacción exige claridad semántica y tipicidad, para que los intérpretes puedan verificar con evidencia si la hipótesis se cumplió. La práctica forense opera como contraste entre hechos probados y texto normativo: el litigio no decide si “la norma vale” —eso se presume— sino si “los hechos caben” en el tipo hipotético. Así, la técnica de subsunción (hecho a norma) y la prueba (hecho al expediente) son inseparables del concepto de supuesto de hecho.",
            },
            {
              type: "paragraph",
              text: "Junto a su estructura, la norma exhibe diversos “sentidos” en la teoría del derecho: puede designar i) un documento con autoridad (disposición escrita), ii) una práctica social dotada de actitud normativa (costumbre), iii) una unidad abstracta empleada por juristas para razonar, iv) una premisa de un razonamiento jurídico completo (para decidir casos), y v) una norma implícita reconstruida por la interpretación. Estas acepciones conviven en la práctica: un mismo conflicto puede citar una disposición (texto), apoyarse en una práctica consolidada (costumbre), formar una cadena argumentativa (unidad de discurso) y, finalmente, cristalizar en una regla de decisión (premisa mayor aplicada al caso). Entender esos estratos ayuda a distinguir lo que “dice” el texto, lo que “exige” la práctica y lo que “concluye” el tribunal.",
            },
            {
              type: "paragraph",
              text: "La clasificación de normas generales y normas individualizadas se conecta con su modo de producción. Las generales emanan del legislador (leyes, códigos, reglamentos) y vinculan a todos los integrantes de una clase; las individualizadas nacen por voluntad de particulares (contratos y testamentos) o por decisión del poder público (resoluciones y sentencias) y vinculan a sujetos determinados. Estas últimas prueban que el derecho no es solo un conjunto de textos previos: también se “produce” caso por caso mediante actos normativos que concretan deberes, derechos y efectos para personas identificables, siempre subordinados a las normas superiores.",
            },
            {
              type: "paragraph",
              text: "En suma, pensar la norma jurídica como un dispositivo hipotético–condicional, con múltiples sentidos operativos y diversos modos de producción, evita confundir moral con derecho, sanción con consecuencia, o texto con regla de decisión. Para el trabajo profesional, esta visión se traduce en tres hábitos: tipificar con precisión los supuestos de hecho relevantes; identificar la jerarquía y alcance de las fuentes aplicables; y formular consecuencias jurídicas proporcionadas al grado de actualización del supuesto, atendiendo a la prueba disponible y a la finalidad constitucional del sistema.",
            },

            /* Acordeones (texto largo para extender contenido) */
            {
              type: "accordion",
              header: "Estructura operativa: del hecho a la consecuencia",
              open: false,
              text: "La secuencia técnica común en la aplicación del derecho es observar–calificar–subsumir–decidir. Primero se fijan hechos mediante prueba; luego se califican con categorías (p. ej., “hecho jurídico”, “acto ilícito”, “dolo”); después se subsumen en el supuesto normativo tipificado; finalmente se declara la consecuencia (derecho, deber, nulidad, sanción). El control de proporcionalidad exige que la consecuencia sea idónea, necesaria y equilibrada respecto de la finalidad de la norma y la intensidad de afectación de derechos. Este marco ordena la argumentación y reduce discrecionalidad.",
            },
            {
              type: "accordion",
              header: "Sentidos de ‘norma’ y su utilidad práctica",
              open: false,
              text: "Usar ‘norma’ en sus distintos sentidos sirve para no confundir niveles del discurso: el documento (qué dice el texto), la costumbre (qué se hace y por qué), la unidad abstracta (cómo razonamos el caso), la premisa de decisión (qué regla cierra el silogismo) y la norma implícita (qué regla emerge de la mejor interpretación del sistema). Diferenciar esos planos ayuda a depurar argumentos, escoger evidencia pertinente y redactar decisiones claras y ejecutables.",
            },
          ],
          subthemes: [],
        },

        /* 9.2 Consecuencias de Derecho */
        {
          id: "9.2",
          numbering: "9.2",
          title: "Consecuencias de Derecho",
          // Fuente base del desarrollo: :contentReference[oaicite:2]{index=2}
          content: [
            {
              type: "paragraph",
              text: "La consecuencia jurídica es el efecto que el ordenamiento enlaza a la actualización de un supuesto de hecho: puede consistir en crear, reconocer, modificar, transferir o extinguir derechos y obligaciones; declarar nulidades o ineficacias; imponer sanciones; o habilitar remedios y vías de defensa. En lo penal, por ejemplo, si el supuesto de hecho tipifica “privar de la vida a otro”, la consecuencia es la pena prevista; en lo civil, si se configura el incumplimiento de una obligación, la consecuencia puede ser la indemnización de daños y perjuicios. La consecuencia no es, pues, sinónimo de castigo: es el haz de efectos que el sistema dispone para encauzar conductas y resolver conflictos conforme a sus fines de justicia y seguridad jurídica. :contentReference[oaicite:3]{index=3}",
            },
            {
              type: "paragraph",
              text: "El grado de responsabilidad y la concreción de la consecuencia dependen de elementos subjetivos y objetivos. La distinción entre dolo y culpa modula la intensidad de la respuesta: obrar con intención de producir el resultado (dolo) amerita, por regla, consecuencias más graves que ocasionarlo por imprudencia o negligencia (culpa). En el ámbito civil, esa graduación impacta el resarcimiento y, en ciertos sistemas, la procedencia de cláusulas penales; en el penal, incide en el marco punitivo, atenuantes y agravantes. La dogmática agrega filtros como causalidad, antijuridicidad y culpabilidad, de modo que la consecuencia no derive automáticamente del daño sino de la comprobación, paso a paso, de todos los elementos de la norma.",
            },
            {
              type: "paragraph",
              text: "También existen consecuencias jurídicas favorables (atribución de un derecho, concesión de un permiso, reconocimiento de personalidad) y consecuencias “procesales” (admisión de demanda, apertura a prueba, sobreseimiento) que ordenan el avance del procedimiento. Esta pluralidad evita reducir el derecho a un repertorio de prohibiciones: integra permisos, potestades y garantías, y asegura que el sistema no solo restrinja, también posibilite la vida en común. Por eso es decisivo caracterizar bien el tipo de consecuencia en disputa: no es lo mismo pedir la nulidad que la inoponibilidad, ni la restitución que el resarcimiento, ni la sanción administrativa que la penal.",
            },
            {
              type: "paragraph",
              text: "La proporcionalidad actúa como principio–puente entre supuesto y consecuencia: exige idoneidad (que la medida sirva al fin constitucional de la norma), necesidad (que no existan alternativas menos gravosas) y proporcionalidad en sentido estricto (que los beneficios superen los costos en derechos). En clave constitucional, incluso cuando el supuesto se acredita, ciertas consecuencias pueden reputarse inconstitucionales si desbordan esos parámetros. Esa es la razón por la que la técnica de la motivación —explicar cómo se pasa del hecho probado a la consecuencia elegida— es parte sustantiva de la validez de los actos de autoridad.",
            },
            {
              type: "paragraph",
              text: "En la práctica, pensar por consecuencias mejora la abogacía preventiva y la negociación: permite diseñar contratos con incentivos para el cumplimiento, prever remedios pactados (cláusulas aceleratorias, garantías), calibrar riesgos sancionatorios en sectores regulados y construir acuerdos reparatorios antes de escalar a pleitos. Del mismo modo, en política pública orienta a configurar consecuencias normativas que induzcan comportamientos deseables sin sobrerrestringir libertades. Así, la consecuencia jurídica deja de ser un “castigo” inevitable para convertirse en un instrumento racional y proporcionado de conducción social.",
            },

            /* Acordeones */
            {
              type: "accordion",
              header: "Ejemplos prácticos (civil, administrativo, penal)",
              open: false,
              text: "Civil: incumplimiento contractual → indemnización, cumplimiento forzoso o resolución. Administrativo: infracción regulatoria → multa, clausura, revocación de licencia. Penal: tipicidad y culpabilidad acreditadas → pena dentro del marco legal. Estos patrones muestran cómo la consecuencia varía según el bien jurídico protegido y el fin de la norma, manteniendo la proporcionalidad y la motivación como condiciones de validez.",
            },
            {
              type: "accordion",
              header: "Tipicidad, culpabilidad y graduación de consecuencias",
              open: false,
              text: "La tipicidad asegura que solo se sancione lo previamente descrito por la ley; la culpabilidad individualiza la respuesta en función de dolo–culpa, participación y circunstancias; la graduación fija el quantum atendiendo a atenuantes y agravantes. Este trípode evita respuestas automáticas y promueve decisiones fundadas en hechos, derecho y fines constitucionales.",
            },
          ],
          subthemes: [],
        },

        /* 9.3 Hechos jurídicos */
        {
          id: "9.3",
          numbering: "9.3",
          title: "Hechos jurídicos",
          // Fuente base del desarrollo: :contentReference[oaicite:4]{index=4}
          content: [
            {
              type: "paragraph",
              text: "Un hecho jurídico es cualquier acontecimiento natural o humano al que el ordenamiento atribuye efectos de creación, modificación o extinción de situaciones jurídicas. Esa atribución de consecuencias —no la “naturaleza” del suceso— es lo que convierte un evento en jurídicamente relevante: el nacimiento configura personalidad y capacidad; la muerte abre sucesión; una inundación dispara regímenes de responsabilidad o de protección civil; una declaración de guerra activa normas de derecho internacional. Dentro de esa gran categoría se distingue el acto jurídico: hecho humano voluntario dirigido a producir consecuencias jurídicas conforme a derecho. La dupla hechos–actos ofrece un mapa de causalidad normativa para razonar desde los eventos hasta los efectos.",
            },
            {
              type: "paragraph",
              text: "La clasificación más difundida separa hechos naturales (no dependen de la voluntad humana: fenómenos de la naturaleza, nacimiento, muerte) y hechos humanos (se originan en conductas voluntarias). Entre estos últimos, los actos jurídicos suponen intención de producir efectos conforme a derecho (p. ej., celebrar un contrato), mientras que los hechos ilícitos infringen deberes y traen aparejada una respuesta sancionatoria o resarcitoria. La utilidad de la clasificación es práctica: permite elegir el régimen aplicable (capacidad, forma, prueba, responsabilidad) y anticipar los efectos según la naturaleza del evento.",
            },
            /* Imagen incluida en el documento para 9.3 */
            {
              type: "image",
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJffEwU6vZpxWu8DYgZjm15V1NBuc0vwGT6A&s",
              alt: "Esquema ilustrativo de hechos y actos jurídicos",
              caption:
                "Hechos naturales, hechos humanos y actos jurídicos — relación y efectos (imagen de referencia del material).",
            },
            {
              type: "paragraph",
              text: "Cuando se trata de actos jurídicos, suelen identificarse tres elementos mínimos: sujetos (quienes expresan la voluntad), objeto (la cosa o conducta jurídicamente posible y determinada) y relación jurídica (el vínculo que el ordenamiento reconoce entre sujetos respecto del objeto). A partir de ahí, cada sistema añade requisitos de validez como forma, causa, licitud, y regímenes de ineficacia: nulidad, anulabilidad, inoponibilidad. En hechos naturales, en cambio, interesa fijar el momento, lugar y evidencia (acta de nacimiento o defunción, certificaciones) porque de ello dependen efectos como capacidad, tutela o apertura de herencia.",
            },
            {
              type: "paragraph",
              text: "Los ejemplos del material ilustran la amplitud del concepto: la muerte y el nacimiento como hechos gatillo; la declaración de guerra y la catástrofe sanitaria como hechos complejos que activan marcos constitucionales y de derecho internacional; o la firma de un contrato como acto jurídico que crea vínculos obligacionales. La distinción no es meramente académica: en un caso de responsabilidad, por ejemplo, probar que un daño provino de un hecho humano culposo y no de un fenómeno natural redefine la consecuencia (resarcimiento, seguros, eximentes).",
            },
            {
              type: "paragraph",
              text: "Operativamente, analizar “qué pasó” (hecho), “qué tipo de hecho es” (natural, humano, acto), “qué norma lo contempla” (supuesto de hecho) y “qué efectos activa” (consecuencia) permite construir decisiones sólidas y predecibles. Ese enfoque vincula la dogmática de hechos jurídicos con la técnica de los supuestos y las consecuencias desarrolladas en los subtemas 9.1 y 9.2, y cierra el círculo de razonamiento jurídico básico que sostendrá el resto de la formación profesional.",
            },

            /* Acordeones */
            {
              type: "accordion",
              header: "Hechos vs. actos jurídicos (clave práctica)",
              open: false,
              text: "Todo acto jurídico es un hecho jurídico humano, pero no todo hecho jurídico humano es un acto jurídico. El acto exige voluntad dirigida a producir efectos conformes a derecho (p. ej., contratar); el hecho humano sin esa dirección puede ser lícito (hecho neutro) o ilícito (infracción). Diferenciar ambos orienta la prueba (voluntad, forma) y la consecuencia (validez del acto, sanción por ilícito, o inexistencia de efectos).",
            },
            {
              type: "accordion",
              header: "Elementos del acto jurídico y regímenes de ineficacia",
              open: false,
              text: "Sujetos capaces, objeto posible y lícito, y relación jurídica son el núcleo. La ley puede exigir forma (escritura, registro) o causa (finalidad económica y social) y sanciona con nulidad o anulabilidad los defectos; también prevé inoponibilidad para proteger a terceros. Conocer estas salidas evita “todo o nada”: permite al juez modular efectos y al abogado diseñar remedios adecuados.",
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
          href: "https://www.youtube.com/watch?v=rwGZrlIQrfA", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "¿Qué es el ESTADO y cuáles son sus elementos? https://www.youtube.com/watch?v=rwGZrlIQrfA",
            "Derecho PÚBLICO y derecho PRIVADO https://www.youtube.com/watch?v=JN7ftznLDvM",
            "Elementos del Estado https://florescalixto.gitbooks.io/estado-constitucion-y-gobierno/content/S2elementos_del_estado.html",
            "La sociedad, el Derecho y el pensamiento político https://www.bcn.cl/formacioncivica/detalle_guia?h=10221.3/45670",
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
            "García, E. (2000). *Introducción al Estudio del Derecho.* México: Porrúa.",
            "Heller, H. (1983). *Teoría del Estado.* México: Fondo de Cultura Económica.",
            "Peniche, F. (2000). *Introducción al Estudio del Derecho.* México: Porrúa.",
            "Pereznieto, L. (2009). *Introducción al estudio del Derecho.* México: Oxford.",
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
