/* — PLANTILLA DE MÓDULO (v3) —                    */
/* Soporta sub‑temas ilimitados + animaciones Lottie */

const basePath =
  process.env.PUBLIC_URL + "/assets/MaterialComplementario/TODO‑carpeta";

export default {
  /* ── Metadatos ──────────────────────────────── */
  programId: "LAE",
  courseId: "LAE-105",
  id: "LAE-105-M3",

  /* ── Datos visibles ─────────────────────────── */
  courseName: "Introducción al Derecho",
  title: "Módulo 3. Estado y Derecho",
  semestre: "1º",
  teacher: "Mtra. Rosalia del Carmen Arostegui Silva",

  /* ── Objetivo y competencias ────────────────── */
  objective:
    "Comprender el concepto, elementos y finalidad del Estado, así como la relación entre Estado y derecho, con el fin de analizar cómo las normas y la organización política regulan la vida social y garantizan la justicia, el orden y el bienestar de la población.",
  competencies: [
    "Identificar los elementos esenciales del Estado (territorio, población, poder, soberanía y orden jurídico) y su interrelación en la estructura estatal.",
    "Analizar la función del derecho dentro del Estado, evaluando su importancia para mantener la convivencia, la justicia y la equidad social.",
    "Aplicar los conceptos de Estado y derecho para interpretar situaciones sociales y jurídicas, tomando decisiones fundamentadas y responsables.",
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
      numbering: "Unidad 4",
      title: "ESTADO Y DERECHO",
      content: [
        {
          type: "paragraph",
          text: "Esta unidad estudia el Estado como organización política y jurídica que estructura la convivencia y articula el poder con reglas, procedimientos y finalidades públicas. No basta definirlo; hay que comprender su arquitectura y su legitimidad. Hablaremos de su capacidad para crear y aplicar normas, de los límites que la Constitución impone y de cómo la ciudadanía convierte instituciones en vida cotidiana. La tesis de partida es clara: sin Estado no hay orden jurídico eficaz; sin Derecho, el Estado deviene arbitrario. La formación profesional debe, por tanto, reconocer el equilibrio entre autoridad y libertad, entre eficacia y justicia. Adoptaremos un enfoque operativo: de los conceptos pasaremos a los mecanismos (quién decide, cómo decide y con qué controles) y a los resultados que las personas experimentan como derechos, servicios y seguridad.",
        },
        {
          type: "paragraph",
          text: "Definiremos el Estado como comunidad política asentada en un territorio, con población permanente y un poder soberano que crea y aplica un orden jurídico. Esta definición no es retórica: explica por qué el territorio delimita la competencia, por qué la población condiciona las políticas y por qué el poder requiere controles. La soberanía no equivale a omnipotencia; significa autoridad última dentro del marco constitucional y conforme a compromisos internacionales. En lo que sigue, examinaremos los elementos del Estado y mostraremos cómo se combinan para producir decisiones públicas legítimas. Seremos exigentes: un Estado que no protege, no coordina y no rinde cuentas incumple su razón de ser.",
        },
        {
          type: "paragraph",
          text: "El Estado de Derecho es la forma civilizada del poder: toda autoridad actúa con fundamento y motivo en normas válidas, y toda persona conoce qué está permitido, prohibido u obligado. El principio de legalidad exige que los poderes públicos operen dentro de competencias y procedimientos; a la vez, reconoce que los particulares gozan de libertad salvo prohibición expresa. Este binomio sostiene la previsibilidad: las reglas se publican, se aplican con debido proceso y se revisan por tribunales independientes. La cultura del Estado de Derecho no se agota en textos; se demuestra en prácticas: transparencia, motivación de actos, proporcionalidad de sanciones y acceso real a la justicia.",
        },
        {
          type: "paragraph",
          text: "Trabajaremos los elementos del Estado con mirada funcional. El territorio fija el lugar de validez de las normas y de actuación de las autoridades; la población es el sujeto y el fin de la organización política; el poder —distribuido en funciones legislativa, ejecutiva y judicial— decide, ejecuta y controla; la soberanía afirma independencia frente a injerencias indebidas; el orden jurídico integra reglas y principios que organizan la vida social. La finalidad es orientar esos elementos hacia el bien común: derechos garantizados, paz social, oportunidades y desarrollo. Esta anatomía permitirá resolver casos: ¿qué autoridad es competente?, ¿qué norma aplica?, ¿qué derechos están en juego?, ¿qué control procede?",
        },
        {
          type: "paragraph",
          text: "La promesa de esta unidad es concreta: dotarte de un marco conceptual y de un método para analizar instituciones, leer la Constitución como proyecto de nación y evaluar políticas públicas con criterios jurídicos. Decidirás mejor si puedes articular por qué una ley es válida, por qué un acto administrativo es proporcional, o por qué una sentencia respeta el debido proceso. Seremos prácticos: conectaremos los conceptos con ejemplos locales (organización federal, ciudadanía, nacionalidad, competencias) y con los retos contemporáneos (coordinación entre niveles de gobierno, protección de derechos, seguridad y desarrollo). Tu desempeño profesional exigirá convertir estas ideas en argumentos y soluciones que resistan el escrutinio público.",
        },

        {
          type: "accordion",
          header: "Nivel 1 — Ideas fuerza de la unidad",
          open: false,
          text: "Estado = población + territorio + poder soberano + orden jurídico orientado al bien común. Estado de Derecho: principio de legalidad, debido proceso y control judicial. Finalidad: protección de derechos, paz social y desarrollo.",
        },
        {
          type: "accordion",
          header: "Nivel 2 — Conexiones operativas",
          open: false,
          text: "Competencia (¿quién decide?), Procedimiento (¿cómo decide?), Fundamento (¿con qué norma?), Control (¿quién revisa?), Resultados (¿qué impacto en derechos y bienes públicos?).",
        },
        {
          type: "accordion",
          header: "Nivel 3 — Ruta de estudio sugerida",
          open: false,
          text: "1) Definir Estado y Estado de Derecho; 2) mapear elementos (territorio, población, poder, soberanía, orden jurídico, finalidad); 3) analizar casos reales; 4) practicar control de legalidad y proporcionalidad; 5) extraer lecciones para la gestión pública y el litigio.",
        },
      ],

      /* → Subtemas de primer nivel */
      subthemes: [
        {
          id: "4.1",
          numbering: "4.1",
          title: "Concepto de Estado",
          content: [
            {
              type: "paragraph",
              text: "El Estado es, ante todo, una organización política y jurídica que ejerce autoridad sobre una población asentada en un territorio determinado, con la finalidad de garantizar derechos, mantener el orden y promover el bienestar común. Esta caracterización no es una etiqueta retórica: explica por qué el Estado crea y aplica normas obligatorias, y por qué sus decisiones —siempre sometidas a control— pretenden resolver conflictos en condiciones de paz social. Entendido así, el Estado funge como marco institucional de la convivencia; dota de procedimientos para producir reglas, de órganos para ejecutarlas y de jurisdicción para interpretarlas y hacerlas valer. La clave no es pensar al Estado como un fin en sí mismo, sino como una arquitectura al servicio de las personas. Cuando el Estado funciona, las reglas son públicas y previsibles, la autoridad rinde cuentas y los desacuerdos encuentran cauces institucionales; cuando falla, la arbitrariedad sustituye la legalidad, los abusos proliferan y los costos sociales se disparan.",
            },
            {
              type: "paragraph",
              text: "La noción de Estado integra elementos inseparables: territorio, población y poder soberano que crea y aplica un orden jurídico. La soberanía no equivale a omnipotencia: es la autoridad última para decidir dentro de los límites constitucionales y en diálogo con el derecho internacional. Distintas definiciones doctrinales coinciden en esta estructura. Se lo ha descrito como “sociedad política organizada que ocupa un territorio determinado, cuenta con un sistema jurídico y un gobierno que crea las normas que rigen a la sociedad”, y también como “sociedad humana asentada de manera permanente en un territorio, sujeta a un poder soberano que crea, define y aplica un orden jurídico para obtener el bien público temporal”. Estas fórmulas, al margen de matices, subrayan dos ideas-operativas: (i) la legitimidad del poder depende de la legalidad y de su finalidad pública, y (ii) el orden jurídico es condición de posibilidad de la vida común, no mero adorno institucional.",
            },
            {
              type: "paragraph",
              text: "La experiencia histórica muestra que sin límites jurídicos el poder deviene despotismo. Por eso hablamos de Estado de Derecho: el poder y la actividad estatal se encuentran reglados y controlados por la ley. El principio de legalidad significa que la autoridad solo puede actuar con fundamento y motivo en normas válidas, y que a los particulares les está permitido todo aquello que la ley no prohíbe. A ello se suma el debido proceso: nadie puede ser afectado sin que se respeten procedimientos y garantías. Esta cultura de legalidad no vive únicamente en los textos; se verifica en prácticas: publicidad de actos, motivación suficiente, proporcionalidad de sanciones y acceso real a la justicia. Cuando la legalidad se convierte en rutina institucional, el ciudadano puede prever consecuencias, planear su conducta y exigir rendición de cuentas; cuando se diluye, crecen la incertidumbre y la desconfianza.",
            },
            {
              type: "paragraph",
              text: "El Estado no flota en el aire: expresa valores, tensiones y proyectos de la sociedad que lo sostiene. Por ello, la finalidad del Estado es servir al bien común, entendido como el conjunto de condiciones que facilitan a todas las personas el acceso efectivo a sus derechos y oportunidades. Esta finalidad se concreta en políticas públicas: salud, educación, seguridad, infraestructura y protección del medio ambiente. Históricamente, el tránsito de formas autoritarias hacia modelos constitucionales y democráticos estuvo acompañado por el reconocimiento progresivo de derechos humanos y por la institucionalización de controles. El resultado es un Estado con deberes positivos (proteger, respetar, garantizar) y con límites precisos (no discriminar, no abusar, no intervenir sin base legal ni proporcionalidad). El estudio del Estado, por tanto, exige mirar a la vez su anatomía (elementos) y su fisiología (funciones y controles).",
            },
            {
              type: "paragraph",
              text: "Desde el punto de vista funcional, el Estado organiza el poder en órganos con competencias definidas para legislar, ejecutar y juzgar. Ninguna autoridad decide sobre todo; cada una lo hace dentro de su esfera y bajo reglas de coordinación y control. Esta distribución evita concentraciones peligrosas y mejora la calidad de las decisiones. El territorio delimita dónde rigen las normas; la población define a quiénes alcanzan; la soberanía cierra el perímetro de la autoridad; y el orden jurídico proporciona el lenguaje común que convierte conflictos en problemas jurídicos tratables. De este diseño se sigue un método para resolver casos: identificar la autoridad competente, el fundamento normativo, el procedimiento aplicable, el estándar de motivación y los mecanismos de impugnación.",
            },
            {
              type: "paragraph",
              text: "En el estudio del Estado conviene distinguir con precisión los conceptos afines que suelen confundirse. Gobierno no es lo mismo que Estado: el gobierno es la forma de organización y conducción política que, conforme a la Constitución, ocupa temporalmente los órganos a través de los cuales el Estado actúa. País alude a una realidad geográfica y cultural; nación, a un componente histórico-cultural; Estado, a la estructura jurídico-política que integra territorio, población y poder. Esta claridad conceptual previene errores prácticos: atribuir al “Estado” responsabilidades que corresponden a una administración en turno o esperar del gobierno lo que exige una reforma legal o constitucional.",
            },
            {
              type: "paragraph",
              text: "En suma, hablar de Estado es hablar de una arquitectura institucional orientada al bien común, encuadrada por la Constitución y controlada por el derecho. Su justificación reside en su capacidad para proteger derechos, coordinar esfuerzos y resolver pacíficamente conflictos. Cuando esta arquitectura se alinea con sus fines —legalidad, justicia, paz y desarrollo—, la ciudadanía la reconoce como legítima; cuando se divorcia de ellos, exige reformas o cambios de rumbo. Ese es el espíritu del estudio que guía esta unidad: conocer qué es el Estado, por qué es necesario, cómo se limita y cómo se evalúan sus resultados.",
            },
            {
              type: "accordion",
              header: "Definiciones doctrinales clave",
              open: false,
              text: "Estado como sociedad política organizada con sistema jurídico y gobierno; Estado como sociedad humana asentada en territorio, sujeta a poder soberano y a un orden jurídico orientado al bien común. Coincidencias: territorio, población, poder, orden jurídico y finalidad pública.",
            },
            {
              type: "accordion",
              header: "Estado de Derecho — puntos operativos",
              open: false,
              text: "Legalidad (fundamento y motivo), debido proceso, publicidad y motivación de actos, proporcionalidad, acceso a la justicia. Particulares: libertad salvo prohibición; autoridades: solo lo que la ley permite.",
            },
          ],
        },

        {
          id: "4.2",
          numbering: "4.2",
          title: "Elementos del Estado",
          content: [
            {
              type: "paragraph",
              text: "El Estado se compone de elementos esenciales que, engranados, permiten su existencia y legitimidad: territorio, población, poder, soberanía y orden jurídico. A ellos se asocia su finalidad: orientar la organización política hacia el bien común. Esta lectura no divide el Estado en piezas sueltas; muestra un sistema donde cada elemento condiciona a los demás. Sin territorio no hay ámbito de validez ni autoridad; sin población no hay sujetos ni fines que tutelar; sin poder —distribuido y controlado— no hay capacidad de decisión; sin soberanía no hay independencia para establecer reglas propias; sin orden jurídico no hay lenguaje común ni previsibilidad. Estudiar estos elementos es, por tanto, aprender a responder con método a las preguntas que estructuran toda decisión pública: ¿dónde rige?, ¿a quién alcanza?, ¿quién decide?, ¿con qué límites?, ¿qué norma lo autoriza?, ¿para qué fin?",
            },
            {
              type: "paragraph",
              text: "Territorio es el espacio geográfico sobre el que el Estado ejerce su autoridad y aplica sus normas: tierra firme, subsuelo, aguas y espacio aéreo. Su delimitación fija la competencia espacial de autoridades y tribunales, y su diseño institucional (federal, regional, municipal) coordina niveles de gobierno. En México, el territorio nacional comprende, entre otros, las partes integrantes de la Federación, islas y arrecifes adyacentes, Guadalupe y Revillagigedo, la plataforma continental, mares territoriales y el espacio situado sobre el territorio nacional conforme al derecho internacional. Esta definición materializa soberanía y validez: señala dónde aplican las leyes, qué recursos se administran y qué fronteras deben resguardarse. La porción territorial no es un dato neutro: condiciona políticas —ambientales, económicas, de seguridad— y exige responsabilidad intergeneracional en el uso de bienes comunes.",
            },
            {
              type: "image",
              alt: "Esquema — Elementos del Estado: población, territorio y gobierno (orden jurídico y soberanía como marco).",
              caption:
                "Esquema de referencia extraído del material: relación entre Estado, población, territorio y gobierno.",
              src: "https://static.docsity.com/documents_first_pages/2022/08/07/e17aaad011fcb90fd44fa25b27db7e52.png",
            },
            {
              type: "paragraph",
              text: "La Federación se integra por entidades libres y soberanas en lo concerniente a su régimen interior. Enumerarlas no es un formalismo; explica el reparto territorial del poder y la necesidad de coordinación vertical. Este arreglo federal condiciona la creación y aplicación de normas: leyes generales que fijan bases y leyes locales que las desarrollan, con competencias claramente asignadas. En la práctica, la identificación correcta de la entidad competente evita conflictos de jurisdicción, dobles regulaciones o vacíos normativos. La ciudadanía, por su parte, experimenta el federalismo en servicios cotidianos —salud, educación, seguridad— y en la posibilidad de incidir en decisiones más próximas a su comunidad.",
            },
            {
              type: "paragraph",
              text: "La población es el conjunto de personas que habitan el territorio del Estado —nacionales y extranjeras— y constituye razón y destino de la organización política. La nacionalidad es el vínculo jurídico que ata a la persona con un Estado; puede adquirirse por nacimiento o naturalización, con supuestos definidos. Además, la ciudadanía —que se obtiene al cumplir requisitos de mayoría de edad y modo honesto de vivir— confiere derechos políticos (votar, ser votado, asociarse) y correlativas obligaciones (contribuir, desempeñar cargos, participar en procesos democráticos). El reconocimiento de derechos humanos a todas las personas, incluidas las extranjeras dentro del territorio, concreta la dignidad como principio rector del ordenamiento. Población, en suma, no es masa amorfa: son titulares de derechos y obligaciones cuya participación legitima al Estado.",
            },
            {
              type: "paragraph",
              text: "El poder es la capacidad del Estado para imponer decisiones legítimas y garantizar su cumplimiento. Se encarna en órganos y funciones: legislar, ejecutar y juzgar. Una Constitución democrática establece que el poder dimana del pueblo y se ejerce por representantes y autoridades conforme a reglas, límites y controles. El diseño de frenos y contrapesos evita la concentración y la arbitrariedad: parlamentos que deliberan y controlan, administraciones que ejecutan con legalidad y proporcionalidad, tribunales que aseguran el debido proceso y la supremacía constitucional. La calidad del poder no se mide por su fuerza material, sino por su obediencia al derecho y por su capacidad para traducir fines públicos en resultados verificables.",
            },
            {
              type: "paragraph",
              text: "La soberanía expresa la autoridad suprema del Estado para decidir dentro de su territorio sin subordinación a poderes externos, y para relacionarse con otros Estados mediante el derecho internacional. Hacia dentro, ordena competencias y protege la independencia de la decisión pública; hacia fuera, habilita celebrar tratados y asumir responsabilidades comunes. En un mundo interdependiente, la soberanía no es aislamiento: se ejerce cooperando y cumpliendo compromisos. Su lectura contemporánea exige compatibilizar independencia con derechos humanos, comercio justo, protección ambiental y paz. Así, la soberanía se vuelve una disciplina de responsabilidad más que un pretexto para el abuso.",
            },
            {
              type: "paragraph",
              text: "El orden jurídico es el conjunto sistemático de normas —constitución, leyes, reglamentos, criterios jurisdiccionales— que regula la conducta de habitantes y autoridades, garantiza seguridad y justicia, y estructura procedimientos para resolver controversias. No es un cúmulo caótico: se organiza por jerarquía, especialidad y cronología; se interpreta conforme a principios y derechos; y se aplica con controles de legalidad y constitucionalidad. La finalidad del Estado corona al conjunto: proteger derechos, asegurar paz y promover bienestar mediante instituciones confiables, servicios públicos eficaces y políticas inclusivas. Evaluar estos elementos en conjunto permite diagnosticar fortalezas y debilidades institucionales y proponer mejoras ancladas en razones públicas y en evidencia.",
            },
            {
              type: "accordion",
              header: "Constitución — artículos clave (referencia)",
              open: false,
              text: "Territorio nacional (componentes y alcances); partes integrantes de la Federación; nacionalidad (por nacimiento y naturalización) y ciudadanía (requisitos); definición de personas extranjeras y sus derechos; forma de Estado y de gobierno (república, democracia, laicidad y federalismo).",
            },
            {
              type: "accordion",
              header: "Mapa operativo de elementos",
              open: false,
              text: "Territorio → ¿dónde rige? Población → ¿a quién alcanza? Poder → ¿quién decide y cómo? Soberanía → ¿con qué independencia y responsabilidades? Orden jurídico → ¿qué norma y con qué controles? Finalidad → ¿qué bienes y derechos protege?",
            },
          ],
          subthemes: [
            {
              id: "4.2.1",
              numbering: "4.2.1",
              title: "Territorio",
              content: [
                {
                  type: "paragraph",
                  text: "El territorio es el espacio geográfico sobre el cual el Estado ejerce su autoridad y aplica sus normas. Comprende la tierra firme, el subsuelo, las aguas interiores y marítimas, así como el espacio aéreo correspondiente. Esta delimitación no es un dato decorativo: fija el alcance espacial de la soberanía y, con ello, determina dónde rigen la Constitución, las leyes y las decisiones de las autoridades. Además, sirve para asignar competencias entre órdenes de gobierno y para trazar la jurisdicción de los tribunales. La noción de territorio también organiza la protección de bienes públicos (ecosistemas, cuencas, costas) y la administración de recursos estratégicos (minerales, hidrocarburos, zonas económicas). En síntesis, ‘territorio’ responde a la pregunta ¿dónde rige el Derecho?, y a partir de esa respuesta se construyen las políticas de seguridad, comercio, ambiente, movilidad y desarrollo regional.",
                },
                {
                  type: "paragraph",
                  text: "En el caso mexicano, el territorio nacional incluye —entre otros componentes— las partes integrantes de la Federación, las islas y arrecifes en mares adyacentes, las islas de Guadalupe y Revillagigedo, la plataforma continental y los zócalos submarinos, las aguas de los mares territoriales y el espacio situado sobre el territorio nacional conforme a lo previsto por el Derecho Internacional. Esta enumeración constitucional traduce soberanía en coordenadas verificables: indica con precisión dónde se pueden dictar y hacer valer normas, qué recursos se administran y qué fronteras deben resguardarse. La claridad espacial reduce incertidumbre, previene conflictos de jurisdicción y mejora la cooperación entre autoridades federales, estatales y municipales para la prestación de servicios y la protección de derechos.",
                },
                {
                  type: "image",
                  alt: "Esquema de Estado: población, territorio y gobierno",
                  caption:
                    "Relación entre Estado, población, territorio y gobierno (esquema de apoyo del material).",
                  src: "https://imgv2-2-f.scribdassets.com/img/document/426161053/original/4ea4123414/1?v=1",
                },
                {
                  type: "paragraph",
                  text: "La Federación se compone de entidades libres y soberanas en lo concerniente a su régimen interior. Enumerarlas no es formalismo: el listado de las 32 entidades y de la Ciudad de México precisa el reparto territorial del poder y las rutas de coordinación vertical. Este arreglo federal se refleja en la técnica normativa: leyes generales fijan bases y distribuciones de competencias; leyes federales y locales desarrollan materias específicas; reglamentos instrumentan. Para el operador jurídico, reconocer la entidad competente evita dobles regulaciones o vacíos, y para la ciudadanía, el federalismo se experimenta en servicios cotidianos (salud, educación, seguridad) y en la posibilidad de incidir en decisiones cercanas a su comunidad.",
                },
                {
                  type: "paragraph",
                  text: "El concepto de territorio también incorpora espacios marítimos (mar territorial, zona contigua, zona económica exclusiva) y aéreos, con reglas de alcance y tránsito conforme al Derecho Internacional. La plataforma continental y los zócalos submarinos determinan derechos de exploración y aprovechamiento de recursos; el espacio aéreo fija corredores de navegación y control. Este entrelazamiento exige coordinación técnica y diplomática, así como marcos regulatorios que combinen seguridad con libre comercio y protección ambiental. Las delimitaciones —internas y externas— no son estáticas: se actualizan por tratados, decisiones judiciales y avances científicos, lo que obliga a mantener cartografía y registros al día para evitar controversias.",
                },
                {
                  type: "paragraph",
                  text: "En la práctica, el territorio ordena políticas públicas: ordenamiento ecológico del territorio, catastro y registro público de la propiedad, infraestructura y movilidad, manejo de cuencas y costas, gestión de riesgos y protección civil. También condiciona el diseño institucional (zonas metropolitanas, regiones interestatales, áreas naturales protegidas) y la planeación económica (polos de desarrollo, corredores logísticos, turismo). Distinguir propiedad privada o social de soberanía estatal es clave: la primera define titularidades y usos; la segunda, el ámbito de validez de las normas y el poder de policía. La armonización entre ambas evita expropiaciones injustificadas o afectaciones arbitrarias a la propiedad y a los bienes comunes.",
                },
                {
                  type: "paragraph",
                  text: "Para resolver casos, conviene una lista de control territorial: (i) identificar el punto exacto donde ocurre el hecho relevante; (ii) verificar el régimen aplicable (federal, estatal, municipal; terrestre, marítimo, aéreo); (iii) reconocer la autoridad competente por materia y territorio; (iv) revisar si existen tratados o reglas internacionales incidentes; (v) comprobar la vigencia de normas locales y federales; (vi) documentar posibles superposiciones (áreas protegidas, zonas federales, servidumbres). Este método reduce litigios, evita sanciones nulas por incompetencia y mejora la eficacia de políticas y servicios públicos.",
                },
                {
                  type: "paragraph",
                  text: "En suma, el territorio convierte la soberanía en coordenadas y el orden jurídico en geografía normativa. Es el ‘dónde’ del Derecho y, por tanto, la base espacial de la legalidad, la planeación y la justicia. Cuidarlo —delimitarlo, ordenarlo, gobernarlo— es condición de efectividad institucional y de respeto a derechos de generaciones presentes y futuras.",
                },

                {
                  type: "accordion",
                  header: "Constitución — claves territoriales",
                  open: false,
                  text: "Componentes del territorio nacional (islas, arrecifes, plataforma continental, mares, espacio aéreo); partes integrantes de la Federación; coordinación federal–local; compatibilidad con Derecho Internacional.",
                },
                {
                  type: "accordion",
                  header: "Checklist territorial",
                  open: false,
                  text: "Ubicación exacta; régimen (federal/estatal/municipal; terrestre/marítimo/aéreo); autoridad competente; tratados aplicables; vigencia normativa; superposiciones y restricciones (ANP, zona federal, servidumbres).",
                },
              ],
            },

            {
              id: "4.2.2",
              numbering: "4.2.2",
              title: "Población",
              content: [
                {
                  type: "paragraph",
                  text: "La población es el conjunto de personas que habitan el territorio del Estado —nacionales y extranjeras— y constituye razón y fin de la organización política. Sin personas no habría necesidad de normas ni de autoridad; por eso, el diseño institucional gira en torno a sus derechos y obligaciones. Doctrinalmente se la define como el grupo humano que compone al Estado, asentado en un territorio determinado, anterior incluso a la formalización estatal. Esta centralidad se traduce en políticas de salud, educación, vivienda, trabajo y seguridad, y en mecanismos de participación que legitiman al poder. La población no es masa amorfa: son individuos con dignidad y proyectos de vida cuya diversidad (edad, género, lenguas, culturas, ocupaciones) debe reflejarse en el orden jurídico y en la gestión pública.",
                },
                {
                  type: "paragraph",
                  text: "Dos categorías son decisivas: nacionalidad y ciudadanía. La nacionalidad es el vínculo jurídico entre la persona y el Estado. En México, se adquiere por nacimiento (ius soli o ius sanguinis en supuestos constitucionales) o por naturalización (carta de naturalización, matrimonio y residencia con requisitos legales). La ciudadanía, por su parte, se obtiene —entre otros requisitos— al cumplir la mayoría de edad y tener modo honesto de vivir, y confiere derechos políticos (votar, ser votado, asociarse) y correlativas obligaciones (participar, desempeñar cargos, contribuir). Esta distinción explica por qué todas las personas gozan de derechos humanos, pero no todas tienen idénticos derechos políticos. Reconocerla evita confusiones prácticas en materia electoral, de acceso a cargos o de participación directa.",
                },
                {
                  type: "paragraph",
                  text: "El ordenamiento también define a las personas extranjeras —quienes no poseen las calidades constitucionales de mexicano por nacimiento o naturalización—, garantizándoles derechos humanos y procedimientos. Esta protección no es concesión graciosa: deriva de la dignidad y de compromisos internacionales. En la administración cotidiana, ello implica otorgar servicios básicos, reconocer documentos migratorios, asegurar debido proceso en procedimientos de control y evitar prácticas discriminatorias. La convivencia entre nacionales y extranjeros exige reglas claras para trabajo, educación, salud y participación comunitaria, y políticas de integración que combinen respeto a la cultura local con garantías para la diversidad.",
                },
                {
                  type: "paragraph",
                  text: "Demografía y territorio interactúan. El tamaño, la estructura por edades, la migración interna e internacional y la urbanización presionan servicios y redes (agua, transporte, salud), y exigen ajustes normativos y presupuestarios. El derecho administrativo, fiscal y urbanístico traduce esos cambios en planeación, infraestructura y regulación. Ignorar estas dinámicas produce normas desconectadas y baja eficacia. Por eso, el estudio de población no es solo conceptual: requiere datos e indicadores que orienten decisiones. La estadística oficial, los censos y encuestas permiten focalizar programas y evaluar resultados, cumpliendo a la vez con principios de igualdad y de no discriminación.",
                },
                {
                  type: "paragraph",
                  text: "En el plano de derechos, la población es titular de libertades y prestaciones exigibles: educación obligatoria, protección de la salud, identidad y registro civil, debido proceso, igualdad y no discriminación, libertad de expresión y asociación, entre otros. Estos derechos se garantizan mediante instituciones (defensorías, juzgados, fiscalías especializadas) y procedimientos (acciones colectivas, amparo). La eficacia de tales derechos depende de políticas públicas integrales y de presupuestos suficientes, así como de la participación ciudadana y del control judicial. La cultura cívica —votar informado, respetar la ley, exigir rendición de cuentas— es parte del ecosistema que convierte al texto constitucional en realidad cotidiana.",
                },
                {
                  type: "paragraph",
                  text: "Obligaciones y responsabilidades cierran el círculo. Contribuir al gasto público, observar la ley, respetar derechos de terceros, cuidar el entorno y participar en procesos democráticos son deberes que sostienen la convivencia. La educación cívica y la transparencia institucional reducen el costo de cumplimiento y fortalecen la confianza. En paralelo, el Estado debe evitar cargas desproporcionadas y asegurar procedimientos simples y accesibles. Un diseño que trate a la población como aliada —no como adversaria— multiplica el cumplimiento voluntario y disminuye la necesidad de coacción.",
                },
                {
                  type: "paragraph",
                  text: "Como método para casos, conviene: (i) identificar la calidad de la persona (mexicano por nacimiento/naturalización; extranjero); (ii) verificar si reúne requisitos de ciudadanía; (iii) precisar qué derecho u obligación está en juego; (iv) revisar las vías de exigibilidad y defensa; (v) evaluar impactos diferenciados (niñez, pueblos indígenas, personas con discapacidad). Este enfoque humaniza la gestión pública y orienta decisiones proporcionales y fundadas en el marco constitucional.",
                },

                {
                  type: "accordion",
                  header: "Nacionalidad y ciudadanía (referencia)",
                  open: false,
                  text: "Nacionalidad por nacimiento o naturalización; ciudadanía a partir de mayoría de edad y modo honesto de vivir; derechos y deberes políticos asociados; procedimientos de reconocimiento y pérdida.",
                },
                {
                  type: "accordion",
                  header: "Personas extranjeras — garantías",
                  open: false,
                  text: "Definición constitucional; derechos humanos y debido proceso; acceso a servicios; no discriminación; coordinación migratoria y local.",
                },
              ],
            },

            {
              id: "4.2.3",
              numbering: "4.2.3",
              title: "Poder",
              content: [
                {
                  type: "paragraph",
                  text: "El poder es la capacidad del Estado para adoptar decisiones legítimas y garantizar su cumplimiento. En un régimen constitucional, ese poder emana del pueblo y se distribuye en órganos y funciones para evitar la concentración y la arbitrariedad. La clásica división funcional —legislar, ejecutar y juzgar— no implica compartimentos estancos, sino tareas coordinadas bajo reglas de competencia, procedimiento y control. La legitimidad del poder se verifica en su obediencia al derecho: fundar y motivar actos, respetar derechos, sujetarse a procedimientos, rendir cuentas. Por ello, estudiar ‘poder’ es estudiar cómo se toman decisiones públicas con reglas y cómo se controlan sus efectos para asegurar justicia y eficacia.",
                },
                {
                  type: "paragraph",
                  text: "En México, la Constitución establece una República representativa, democrática, laica y federal. Este diseño materializa la voluntad popular en instituciones: el Congreso crea leyes (función legislativa), el Ejecutivo las implementa y administra recursos (función ejecutiva), y el Poder Judicial resuelve controversias y asegura la supremacía constitucional (función jurisdiccional). La distribución horizontal se complementa con la vertical (federalismo): Federación, entidades federativas y municipios comparten y coordinan competencias. El equilibrio se mantiene mediante contrapesos (veto, control parlamentario, revisión judicial) y transparencia (publicidad de actos, acceso a la información).",
                },
                {
                  type: "paragraph",
                  text: "La función legislativa transforma diagnósticos y consensos sociales en normas generales y abstractas. Requiere procedimientos deliberativos, publicidad y control de constitucionalidad. La calidad de la ley depende de diagnósticos serios, lenguaje claro, proporcionalidad de sanciones y adecuada coordinación con reglamentos. La función ejecutiva traduce la ley en políticas, programas y actos administrativos, sujetos a legalidad, razonabilidad y proporcionalidad; su éxito exige profesionalización, planeación y evaluación. La función jurisdiccional, por su parte, aplica el derecho a casos concretos, garantiza el debido proceso y corrige desviaciones normativas o de autoridad, con independencia e imparcialidad.",
                },
                {
                  type: "paragraph",
                  text: "Los controles son el corazón del Estado de Derecho. Existen controles políticos (rendición de cuentas ante parlamentos y ciudadanía), administrativos (recursos y revisiones internas), y jurisdiccionales (juicios y amparos). En materia de derechos humanos, el control de constitucionalidad y de convencionalidad exige interpretar y aplicar normas conforme a la Constitución y a los tratados. Estos mecanismos no paralizan al Estado: lo orientan y corrigen. Un sistema con controles claros y accesibles previene abusos, reduce litigios y mejora la confianza pública, condición indispensable para la cooperación social y la inversión.",
                },
                {
                  type: "paragraph",
                  text: "Ejemplos ilustran el funcionamiento del poder. Una política pública de seguridad vial nace en el legislativo (reforma legal), se despliega en el ejecutivo (reglamentos, operativos, infraestructura) y se revisa en el judicial (legalidad de sanciones, debido proceso). Una regulación ambiental fija estándares (ley), emite permisos (administración), sanciona incumplimientos (autoridad competente) y admite impugnaciones (tribunales). Esta orquesta institucional exige coordinación intergubernamental y profesionalismo. La ausencia de cualquiera de las funciones o controles produce ineficacia o injusticia.",
                },
                {
                  type: "paragraph",
                  text: "Para el operador jurídico, trabajar con poder implica preguntar: ¿quién es competente? ¿Cuál es el fundamento y el motivo del acto? ¿Qué procedimiento rige? ¿Se respetó el debido proceso y la proporcionalidad? ¿Qué recursos e impugnaciones proceden? Responder con método ordena la acción administrativa y la defensa de derechos. Además, la ética pública —conflictos de interés, integridad, servicio al interés general— no es accesorio: es la condición cultural que convierte normas en prácticas confiables.",
                },
                {
                  type: "paragraph",
                  text: "En síntesis, el poder orientado por el derecho y controlado por instituciones es un instrumento para realizar el bien común. Su estudio enseña a convertir fines públicos en decisiones justificadas, capaces de resistir escrutinio social y judicial. Sin poder, el Estado carece de eficacia; sin controles, el poder pierde legitimidad. El equilibrio entre ambos es la promesa del Estado de Derecho.",
                },

                {
                  type: "accordion",
                  header: "Distribución y controles",
                  open: false,
                  text: "Funciones: legislar, ejecutar, juzgar. Federalismo: Federación–Estados–Municipios. Controles: político, administrativo, jurisdiccional; constitucionalidad y convencionalidad.",
                },
                {
                  type: "accordion",
                  header: "Guía para auditar actos de autoridad",
                  open: false,
                  text: "Competencia; fundamento y motivo; procedimiento; debido proceso; proporcionalidad; medios de defensa; publicidad y rendición de cuentas.",
                },
              ],
            },
            {
              id: "4.2.4",
              numbering: "4.2.4",
              title: "Soberanía",
              content: [
                {
                  type: "paragraph",
                  text: "La soberanía es la autoridad suprema del Estado para decidir dentro de su territorio y para relacionarse con otros Estados conforme al Derecho Internacional. No significa omnipotencia; se ejerce enmarcada por la Constitución y por los derechos humanos, y hoy se entiende como responsabilidad antes que como pretexto de aislamiento. Hacia adentro, la soberanía ordena la organización del poder, delimita competencias y asegura que toda autoridad actúe con fundamento y motivo; hacia afuera, habilita a celebrar tratados, a cooperar y a resolver controversias pacíficamente. Esta lectura contemporánea sustituye el mito del poder ilimitado por una concepción jurídica: el Estado es señor en su casa, pero su casa está hecha de normas y controles. La soberanía, por tanto, no exime al Estado de cumplir estándares; lo obliga a construir instituciones capaces de proteger a su población y de honrar los compromisos con la comunidad internacional.",
                },
                {
                  type: "paragraph",
                  text: "En la dimensión interna, la soberanía se expresa en la supremacía constitucional: la Constitución es norma fundamental que organiza poderes, reconoce derechos y traza procedimientos. Todo acto de autoridad debe ajustarse a ella, so pena de invalidez. La distribución de competencias entre Federación, entidades federativas y municipios es decisión soberana que, a su vez, impone límites recíprocos. La ciudadanía, como depositaria última de la soberanía, controla a sus representantes mediante elecciones, transparencia y mecanismos de participación. De este modo, la soberanía popular, institucionalizada, evita que el poder se emancipe de su origen. La obediencia a la Constitución no debilita la soberanía; la realiza, porque convierte la voluntad de poder en voluntad de derecho.",
                },
                {
                  type: "paragraph",
                  text: "En la dimensión externa, la soberanía faculta al Estado para conducir su política exterior, firmar tratados, acreditar representantes y defender sus intereses. La regla general de igualdad soberana convive con obligaciones compartidas: respeto a los derechos humanos, solución pacífica de controversias, proscripción del uso de la fuerza y cooperación para el desarrollo. La interdependencia global redefine la práctica soberana: proteger el ambiente, regular mercados digitales o gestionar flujos migratorios exige coordinarse con otros. El ejercicio maduro de la soberanía, por ello, no es negarse a cooperar, sino diseñar compromisos que potencien capacidades y resguarden la autonomía decisional en materias esenciales.",
                },
                {
                  type: "paragraph",
                  text: "El discurso de soberanía suele invocarse para justificar medidas de excepción. La buena técnica constitucional exige distinguir: hay márgenes de apreciación legítimos para enfrentar emergencias, pero siempre bajo legalidad, temporalidad, proporcionalidad y control parlamentario y judicial. Estados de excepción sin límites acaban erosionando la propia base de la soberanía: la confianza de la ciudadanía. La doctrina del ‘poder de policía’ también requiere cuidado: habilita restricciones razonables a libertades para proteger bienes colectivos (salud, seguridad), pero nunca para anular el núcleo de los derechos ni para discriminar. La soberanía auténtica se mide en su capacidad de autocontención.",
                },
                {
                  type: "paragraph",
                  text: "Ejemplos ilustran su operatividad. La celebración de un tratado comercial evidencia ejercicio soberano externo; su incorporación al orden interno —según reglas constitucionales— muestra la coordinación entre soberanía y legalidad. La protección de recursos estratégicos (hidrocarburos, agua) se decide soberanamente, con respeto a propiedad, ambiente y derechos comunitarios. La delimitación del mar territorial y de la zona económica exclusiva combina facultades soberanas con parámetros internacionales. En todos los casos, el parámetro último es el bloque de constitucionalidad: no hay acto soberano legítimo que contradiga la Constitución y los tratados de derechos humanos.",
                },
                {
                  type: "paragraph",
                  text: "Metodológicamente, para analizar una decisión invocada en nombre de la soberanía conviene preguntar: (i) ¿qué dimensión está en juego (interna/externa)?; (ii) ¿cuál es su base constitucional y legal?; (iii) ¿qué derechos o bienes protege?; (iv) ¿existen alternativas menos restrictivas?; (v) ¿qué controles aplica (parlamentario, judicial, social)?; (vi) ¿cómo se articula con obligaciones internacionales? Esta lista de verificación convierte una consigna política en un examen jurídico transparente y replicable, condición para la responsabilidad pública.",
                },
                {
                  type: "paragraph",
                  text: "En síntesis, la soberanía ya no es la coartada del poder sin límites. Es una facultad jurídica para decidir con independencia, sí, pero también para someter ese poder a reglas y fines: derechos, paz, cooperación y desarrollo sostenible. El Estado que se sabe soberano es el que puede prometer y cumplir, dentro y fuera de sus fronteras, con razones públicas y con instituciones controlables.",
                },

                {
                  type: "accordion",
                  header: "Claves de soberanía (interno/externo)",
                  open: false,
                  text: "Interno: supremacía constitucional, distribución de competencias, control ciudadano. Externo: igualdad soberana, tratados, solución pacífica, prohibición del uso de la fuerza, cooperación.",
                },
                {
                  type: "accordion",
                  header:
                    "Checklist para decisiones ‘en nombre de la soberanía’",
                  open: false,
                  text: "Base constitucional y legal; finalidad legítima; idoneidad; necesidad; proporcionalidad; controles; compatibilidad con tratados y derechos humanos.",
                },
              ],
            },
            {
              id: "4.2.5",
              numbering: "4.2.5",
              title: "Orden jurídico",
              content: [
                {
                  type: "paragraph",
                  text: "El orden jurídico es el conjunto sistemático de normas que organiza la vida social y la actuación de las autoridades: Constitución, leyes, reglamentos, normas técnicas, criterios jurisdiccionales y, en su caso, tratados internacionales incorporados. No es una pila de textos; es un sistema articulado por jerarquía, competencia, especialidad y cronología. Su función es doble: ofrecer previsibilidad —las personas saben a qué atenerse— y asegurar control —las autoridades están sometidas a reglas—. Esta sistematicidad permite convertir conflictos en preguntas jurídicas tratables, con procedimientos y estándares de decisión. Un orden jurídico sano se reconoce porque reduce la discrecionalidad arbitraria, promueve la igualdad ante la ley y facilita la cooperación social a bajo costo.",
                },
                {
                  type: "paragraph",
                  text: "La Constitución ocupa la cúspide de la pirámide normativa: organiza poderes, reconoce derechos y establece procedimientos. Debajo, las leyes desarrollan materias con carácter general y abstracto; los reglamentos instrumentan su aplicación; otras disposiciones (lineamientos, normas oficiales) precisan técnicas y estándares dentro de la competencia administrativa. La jurisprudencia uniforma interpretación y los principios generales aseguran coherencia y justicia material. Esta arquitectura se mantiene estable mediante reglas de invalidez frente a vicios formales o sustantivos y mediante mecanismos de control: acciones de inconstitucionalidad, amparo, nulidades administrativas, entre otros. Así, la validez no depende de voluntad, sino de procedimiento y compatibilidad sistémica.",
                },
                {
                  type: "paragraph",
                  text: "Tres categorías técnicas ordenan el sistema: validez, vigencia y eficacia. Validez es conformidad con el procedimiento y con la jerarquía; vigencia es el periodo temporal en que la norma rige (entrada en vigor, derogación, abrogación, ultraactividad); eficacia es el grado en que la norma se cumple en la práctica. La interpretación se rige por métodos literal, sistemático y teleológico, además del principio pro persona en materia de derechos. Para resolver antinomias rigen criterios de jerarquía (norma superior prevalece sobre inferior), especialidad (norma especial sobre general) y cronología (posterior sobre anterior cuando no hay jerarquía). Documentar estos pasos evita arbitrariedad y errores de aplicación.",
                },
                {
                  type: "paragraph",
                  text: "El orden jurídico se proyecta territorial y materialmente mediante ámbitos de validez: espacial (dónde rige), temporal (cuándo), material (sobre qué materias) y personal (a quiénes alcanza). Sin esta cuadrícula, cualquier análisis es incompleto. Un reglamento local no puede pretender efectos extraterritoriales; una ley derogada no puede aplicarse a hechos nuevos; una norma sanitaria no regula contrataciones públicas salvo remisión; un requisito dirigido a servidores públicos no puede exigirse a particulares. La auditoría de ámbitos es una herramienta cotidiana de legalidad y de prevención de litigios.",
                },
                {
                  type: "paragraph",
                  text: "La técnica legislativa y regulatoria es condición del buen orden. Lenguaje claro, definición de destinatarios, proporcionalidad de sanciones, transitorios adecuados, coordinación entre niveles de gobierno y evaluación ex post son prácticas que elevan la calidad normativa. En administración, motivar los actos con hechos y derecho, publicar criterios y establecer mecanismos simples de cumplimiento reducen costos y disputas. En jurisdicción, razonar con transparencia —hechos, problema jurídico, ratio decidendi— fortalece la legitimidad del sistema. En todos los casos, el parámetro de control es la Constitución y los tratados de derechos humanos.",
                },
                {
                  type: "paragraph",
                  text: "Ejemplos clarifican. Una reforma fiscal crea obligaciones generales (ley), que se operativizan en reglas misceláneas (reglamentos/lineamientos); los tribunales interpretan alcances (jurisprudencia) y corrigen excesos. Una ley ambiental fija límites de emisiones; una norma técnica precisa estándares; la autoridad verifica y sanciona; los tribunales revisan debido proceso y proporcionalidad. Cada pieza cumple su función en el engranaje. Cuando una pieza se sale —por exceso de competencia, falta de procedimiento, contradicción con derechos—, el sistema dispone de herramientas para corregirla.",
                },
                {
                  type: "paragraph",
                  text: "Como método para casos, pregúntate: (i) ¿cuál es la norma aplicable y de qué nivel?; (ii) ¿está vigente?; (iii) ¿cuáles son los ámbitos de validez?; (iv) ¿existe conflicto entre normas y qué criterio lo resuelve?; (v) ¿hay jurisprudencia o principios relevantes?; (vi) ¿qué medios de impugnación proceden? Este protocolo convierte la complejidad normativa en un itinerario razonado, comprensible para ciudadanos, empresas y autoridades.",
                },

                {
                  type: "accordion",
                  header: "Pilares del sistema",
                  open: false,
                  text: "Constitución → leyes → reglamentos/lineamientos → jurisprudencia/principios. Reglas de invalidez y controles. Métodos de interpretación y criterios de solución de antinomias.",
                },
                {
                  type: "accordion",
                  header: "Checklist de auditoría normativa",
                  open: false,
                  text: "Identificar nivel y vigencia; ámbitos de validez; compatibilidad constitucional; proporcionalidad; existencia de jurisprudencia; medios de defensa; evaluación ex post.",
                },
              ],
            },
            {
              id: "4.2.6",
              numbering: "4.2.6",
              title: "Finalidad del Estado",
              content: [
                {
                  type: "paragraph",
                  text: "La finalidad del Estado es el bien común: crear y sostener las condiciones para que todas las personas ejerzan efectivamente sus derechos y desarrollen sus proyectos de vida en paz, con justicia y oportunidades. Esta noción se concreta en objetivos verificables: seguridad, justicia, salud, educación, trabajo digno, infraestructura, medio ambiente sano y una economía que distribuya costos y beneficios con equidad. El bien común no es suma de intereses particulares ni imposición de una visión única; es el resultado de instituciones que canalizan desacuerdos y priorizan bienes públicos. De aquí se desprenden deberes positivos del Estado (proteger, respetar, garantizar) y límites estrictos (no discriminar, no arbitrariedad, proporcionalidad). La finalidad fija el ‘para qué’ del aparato institucional y ofrece criterios para evaluar políticas y actos de autoridad.",
                },
                {
                  type: "paragraph",
                  text: "Los derechos humanos son brújula de la finalidad: orientan el diseño de leyes y políticas, definen mínimos de protección y articulan mecanismos de exigibilidad. La Constitución reconoce derechos civiles, políticos, económicos, sociales, culturales y ambientales que obligan a todas las autoridades. Materializar esta carta de derechos exige capacidades: información, presupuesto, personal profesional, coordinación intergubernamental y participación ciudadana. El enfoque basado en derechos (EBDH) ordena la acción pública: identifica titulares de derechos y de obligaciones, fija estándares, establece indicadores y prevé recursos de reparación. Con él, la finalidad deja de ser consigna y se vuelve plan de trabajo.",
                },
                {
                  type: "paragraph",
                  text: "El ciclo de política pública traduce fines en resultados: diagnóstico del problema, diseño de alternativas, decisión con base en evidencia y participación, implementación con gobernanza clara, evaluación y retroalimentación. Cada fase tiene exigencias jurídicas: legalidad de competencias, transparencia, análisis de impacto regulatorio, respeto al procedimiento, protección de datos, contratación pública íntegra y rendición de cuentas. La evaluación —ex ante, intermedia y ex post— evita políticas simbólicas y permite corregir rumbos. Sin evaluación, el Estado pierde aprendizaje y repite errores que cuestan recursos y confianza.",
                },
                {
                  type: "paragraph",
                  text: "La finalidad también se refleja en principios de buena administración: legalidad, eficacia, eficiencia, economía, imparcialidad y participación. En el ámbito fiscal, se vincula con tributación justa y gasto responsable; en el penal, con prevención y reinserción; en el ambiental, con sostenibilidad y precaución; en el laboral, con protección del trabajo digno; en el social, con inclusión y no discriminación. Estos principios no son eslóganes: generan estándares revisables por órganos de control y tribunales, y guían la priorización presupuestaria para maximizar bienestar con recursos limitados.",
                },
                {
                  type: "paragraph",
                  text: "Ejemplos muestran cómo la finalidad orienta decisiones. Una política de movilidad busca reducir accidentes y emisiones: se justifica por bienes públicos (vida, salud, ambiente), se diseña con evidencia (datos de siniestralidad), se implementa con infraestructura y educación vial, y se evalúa con indicadores (muertes evitadas, tiempos de traslado). Una estrategia de digitalización gubernamental pretende eficiencia y acceso: requiere marco de datos personales, ciberseguridad y transparencia; se mide por ahorros, satisfacción y reducción de tiempos de trámite. En ambos casos, la finalidad se traduce en métricas objetivas que sostienen la legitimidad de la acción pública.",
                },
                {
                  type: "paragraph",
                  text: "Riesgos a evitar: confundir fines con medios, sacrificar derechos en nombre de metas difusas, capturar políticas por intereses particulares, o priorizar anuncios sobre resultados. La ética pública —integridad, conflicto de interés, servicio al interés general— no es adorno; es condición para que la finalidad se materialice. La participación informada de la sociedad civil y el periodismo de investigación contribuyen a alinear decisiones con el bien común y a sancionar desviaciones. La planeación de largo plazo, a su vez, protege políticas esenciales de vaivenes coyunturales.",
                },
                {
                  type: "paragraph",
                  text: "Como método para casos, pregúntate: (i) ¿qué bien público está en juego?; (ii) ¿qué derechos se ven afectados o potenciados?; (iii) ¿existen alternativas menos gravosas?; (iv) ¿cómo se medirá el resultado?; (v) ¿qué mecanismos de transparencia y rendición de cuentas acompañarán la decisión? Este protocolo garantiza que la finalidad del Estado deje huella medible en la vida de las personas y que el poder se someta a razones, no a pulsiones coyunturales.",
                },

                {
                  type: "accordion",
                  header: "Bien común en clave operativa",
                  open: false,
                  text: "Derechos como brújula; ciclo de política pública; indicadores y evaluación; participación ciudadana; ética e integridad; rendición de cuentas.",
                },
                {
                  type: "accordion",
                  header: "Checklist de decisiones orientadas a fines",
                  open: false,
                  text: "Identificar bien público y derechos; diseñar alternativas y medir costos/beneficios; asegurar legalidad y procedimientos; proteger datos y transparencia; evaluar y ajustar.",
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
          href: "https://www.youtube.com/watch?v=OZ2vwyTC558", // vídeo hallado en el PDF
          openInNewTab: true, // ← abre en pestaña nueva
          icon: "https://lottie.host/64720b92-74e2-49a6-8137-a43976b8cba3/oEkht7b3Pb.json",
        },

        /* ③ Lista de bibliografía específica de este material */
        {
          type: "list",
          style: "unordered",
          items: [
            "CONCEPTO DE ESTADO Y DERECHO — En cinco minutos (Abog. Paulo C. Díaz Jiménez) https://www.youtube.com/watch?v=OZ2vwyTC558.",
            "¿QUÉ ES EL ESTADO? | Explicación en 5 minutos (Español latino) https://www.youtube.com/watch?v=iA9qrdYc5tY.",
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
            "Campa, S. F. (2018). *Ética 1*. México: Pearson.",
            "Martinez, J. L. (2017). *Derecho*. Mexico: Marya.",
            "Purón, R. A. (2019). *Derecho 1*. México: Patria Educación.",
            "Vargas, R. R. (2014). *Derecho*. México: Marya.",
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
