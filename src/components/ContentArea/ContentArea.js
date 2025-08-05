import React, { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import ScrollReveal from "scrollreveal";
import { Player } from "@lottiefiles/react-lottie-player";
import LottieRemote from "../common/LottieRemote";

import {
  ContentWrapper,
  ThemeTitle,
  Paragraph,
  Figure,
  BlockQuote,
  Ordered,
  Unordered,
  LinkBox,
  VideoBox,
  LottieBox,
  DownloadBtn,
  DownloadWrapper,
  BibliographyGrid,
  Accordion,
  AccordionHeader,
  AccordionContent,
  NavButtons,
  NavButton,
  UnitInfoBox,
  ReadingBox,
} from "./ContentArea.styles";

// --- Sanitizador de citas incrustadas ---
const sanitize = (s = "") =>
  s
    // quita marcadores tipo :contentReference[oaicite:28]{index=28}
    .replace(/:contentReference\[oaicite:\d+\]\{index=\d+\}/g, "")
    // por si quedaron citas en corchetes de otra variante
    .replace(/【[^】]*】/g, "");

function ContentArea({
  unit,
  theme,
  onNavigateTheme,
  hasPrev,
  hasNext,
  transitionClass,
}) {
  const [accordionOpen, setAccordionOpen] = useState({});

  /* refs */
  const wrapperRef = useRef(null); // ⇠  contenedor que scrollea
  const innerRef = useRef(null); // ⇠  div.inner (ScrollReveal)

  /* — abrir acordeones con open:true — */
  useEffect(() => {
    if (!theme) return;
    const init = {};
    theme.content.forEach((b, i) => {
      if (b.type === "accordion" && b.open) init[i] = true;
    });
    setAccordionOpen(init);
  }, [theme]);

  /* — desplazarse al inicio al cambiar de tema — */
  useEffect(() => {
    // Contenedor con scroll interno
    wrapperRef.current?.scrollTo({ top: 0, behavior: "auto" });

    // Ventana / página completa
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [theme]);

  /* — ScrollReveal (usa el contenedor que scrollea) — */
  useEffect(() => {
    if (!innerRef.current) return;

    ScrollReveal().clean(innerRef.current.querySelectorAll(".sr-item"));

    ScrollReveal({
      distance: "40px",
      duration: 800,
      easing: "ease-out",
      origin: "bottom",
      container: wrapperRef.current, // ← escucha al ContentWrapper
      viewFactor: 0.15,
      reset: false, // anima solo la 1ª vez
    }).reveal(innerRef.current.querySelectorAll(".sr-item"), { interval: 100 });
  }, [theme]);

  /* — loading — */
  if (!theme || !unit) {
    return (
      <ContentWrapper ref={wrapperRef} $noContent className={transitionClass}>
        <div className="inner" ref={innerRef}>
          Cargando contenido…
        </div>
      </ContentWrapper>
    );
  }

  /* — Información general del módulo — */
  if (theme.isUnitInfo) {
    return (
      <ContentWrapper ref={wrapperRef} className={transitionClass}>
        <div className="inner" ref={innerRef}>
          <UnitInfoBox className="sr-item">
            <h2 className="unit-title">{unit.courseName}</h2>
            <h3 className="unit-subtitle">{unit.title}</h3>

            <p className="unit-meta">
              <strong>Semestre:</strong> {unit.semestre}
            </p>
            <p className="unit-meta-teacher">
              <strong>Docente:</strong> {unit.teacher}
            </p>

            <h4 className="section-heading">Objetivo</h4>
            <p className="objective">{unit.objective}</p>

            {!!unit.competencies?.length && (
              <>
                <h4 className="section-heading">Competencias</h4>
                <ul className="competencies">
                  {unit.competencies.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </>
            )}
          </UnitInfoBox>

          <NavButtons>
            <NavButton
              onClick={() => onNavigateTheme("prev")}
              disabled={!hasPrev}
            >
              ← Tema Anterior
            </NavButton>
            <NavButton
              $next
              onClick={() => onNavigateTheme("next")}
              disabled={!hasNext}
            >
              Tema Siguiente →
            </NavButton>
          </NavButtons>
        </div>
      </ContentWrapper>
    );
  }

  /* — Secciones normales — */
  const displayTitle =
    theme.numbering &&
    theme.numbering.trim() !== "" &&
    theme.numbering.trim() !== theme.title.trim()
      ? `${theme.numbering} ${theme.title}`
      : theme.title;

  const listBlock = theme.content.find((b) => b.type === "list");
  const lottieBlock = theme.content.find((b) => b.type === "lottie");

  return (
    <ContentWrapper ref={wrapperRef} className={transitionClass}>
      <div className="inner" ref={innerRef}>
        {/* título con clave única */}
        <ThemeTitle key={`title-${theme.id}`} className="sr-item">
          {displayTitle}
        </ThemeTitle>

        {/* — Bibliografía — */}
        {theme.id === "bib" && listBlock && (
          <BibliographyGrid className="sr-item">
            <div className="biblio-list">
              <Unordered>
                {listBlock.items.map((it, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: marked.parseInline(sanitize(it)) }}
                  />
                ))}
              </Unordered>
            </div>

            {lottieBlock && (
              <div className="lottie-block">
                <LottieRemote url={lottieBlock.src} />
              </div>
            )}
          </BibliographyGrid>
        )}

        {/* — Resto de bloques — */}
        {theme.id !== "bib" &&
          theme.content.map((block, idx) => {
            const key = `${theme.id}-${block.type}-${idx}`;

            switch (block.type) {
              case "paragraph":
                return (
                  <Paragraph
                    key={key}
                    className="sr-item"
                    dangerouslySetInnerHTML={{
                      __html: marked.parse(sanitize(block.text)),
                    }}
                  />
                );

              case "image":
                return (
                  <Figure key={key} className="sr-item">
                    <img src={block.src} alt={block.alt || ""} />
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                  </Figure>
                );

              case "video":
                return (
                  <VideoBox key={key} className="sr-item">
                    {block.title && <h3>{block.title}</h3>}
                    <iframe
                      src={block.src.replace("watch?v=", "embed/")}
                      title={block.title || "video"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    {block.caption && <p>{block.caption}</p>}
                  </VideoBox>
                );

              case "blockquote":
                return (
                  <BlockQuote key={key} className="sr-item">
                    {block.text}
                  </BlockQuote>
                );

              /* ─ LISTA: si estamos en Material Complementario (“cc”)
                  la envolvemos en ReadingBox con encabezado ─ */
              case "list": {
                const ListTag = block.style === "ordered" ? Ordered : Unordered;

                /* 1.  Bloque “cc” → caja destacada  */
                if (theme.id === "cc") {
                  return (
                    <ReadingBox key={key} className="sr-item">
                      <h3>Documentos de lectura</h3>
                      <ListTag>
                        {block.items.map((it, i) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{
                              __html: marked.parseInline(sanitize(it))
                            }}
                          />
                        ))}
                      </ListTag>
                    </ReadingBox>
                  );
                }

                /* 2.  Cualquier otro tema → lista normal */
                return (
                  <ListTag key={key} className="sr-item">
                    {block.items.map((it, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{
                          __html: marked.parseInline(sanitize(it)),
                        }}
                      />
                    ))}
                  </ListTag>
                );
              }

              case "link":
                return (
                  <LinkBox key={key} className="sr-item">
                    <a
                      href={block.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {block.text || block.url}
                    </a>
                  </LinkBox>
                );

              case "accordion": {
                const isOpen = accordionOpen[idx] ?? false;

                // Convertir 'items' a texto Markdown si existe esa variante
                let md = block.text;
                if (!md && Array.isArray(block.items)) {
                  md = block.items
                    .map(
                      (it) =>
                        (it.heading ? `### ${it.heading}\n` : "") +
                        (it.text ? `${it.text}\n` : "")
                    )
                    .join("\n");
                }

                return (
                  <Accordion key={key} className="sr-item">
                    <AccordionHeader
                      onClick={() =>
                        setAccordionOpen((p) => ({ ...p, [idx]: !isOpen }))
                      }
                    >
                      {block.header}
                      <span>{isOpen ? "−" : "+"}</span>
                    </AccordionHeader>
                    {isOpen && (
                      <AccordionContent
                        dangerouslySetInnerHTML={{
                          __html: marked.parse(sanitize(md || "")),
                        }}
                      />
                    )}
                  </Accordion>
                );
              }

              case "lottie":
                return (
                  <LottieBox key={key} className="sr-item">
                    <LottieRemote url={block.src} />
                  </LottieBox>
                );

              case "download": {
                const { text, href, files = [], icon, openInNewTab } = block;
                const list = href ? [href] : files;

                const handleClick = () => {
                  if (openInNewTab && list.length) {
                    window.open(list[0], "_blank", "noopener,noreferrer");
                    return;
                  }
                  /* descarga “clásica” ------------------------------------------------ */
                  list.forEach((url) => {
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = url.split("/").pop();
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                  });
                };

                return (
                  <DownloadWrapper key={key} className="sr-item">
                    <DownloadBtn onClick={handleClick}>
                      {icon && (
                        <Player
                          autoplay
                          loop
                          src={icon}
                          className="lottie-icon"
                        />
                      )}
                      {text || "Descargar"}
                    </DownloadBtn>
                  </DownloadWrapper>
                );
              }

              default:
                return null;
            }
          })}

        {/* navegación inferior */}
        <NavButtons>
          <NavButton
            onClick={() => onNavigateTheme("prev")}
            disabled={!hasPrev}
          >
            ← Tema Anterior
          </NavButton>
          <NavButton
            $next
            onClick={() => onNavigateTheme("next")}
            disabled={!hasNext}
          >
            Tema Siguiente →
          </NavButton>
        </NavButtons>
      </div>
    </ContentWrapper>
  );
}

export default ContentArea;
