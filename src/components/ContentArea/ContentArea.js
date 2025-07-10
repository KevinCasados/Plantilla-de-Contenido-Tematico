import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import ScrollReveal from 'scrollreveal';               //  ←  ya lo usábamos
import { Player } from '@lottiefiles/react-lottie-player';
import LottieRemote from '../common/LottieRemote';

/* ───── importaciones de styled-components (sin cambios) ───── */
import {
  ContentWrapper, ThemeTitle, Paragraph,
  Figure, BlockQuote, Ordered, Unordered, LinkBox, VideoBox,
  LottieBox, DownloadBtn, DownloadWrapper,
  BibliographyGrid, Accordion, AccordionHeader, AccordionContent,
  NavButtons, NavButton, UnitInfoBox
} from './ContentArea.styles';

/* -------------------------------------------------------------------------- */
/*                                   Main                                     */
/* -------------------------------------------------------------------------- */
function ContentArea({
  unit,
  theme,
  onNavigateTheme,
  hasPrev,
  hasNext,
  transitionClass
}) {
  const [accordionOpen, setAccordionOpen] = useState({});
  const innerRef = useRef(null);          // <div className="inner"> (contenido)

  /* ────────────────────── 1. acordeones abiertos por defecto ───────────── */
  useEffect(() => {
    if (!theme) return;
    const init = {};
    theme.content.forEach((b, i) => {
      if (b.type === 'accordion' && b.open) init[i] = true;
    });
    setAccordionOpen(init);
  }, [theme]);

  /* ────────────────────── 2. ScrollReveal por tema ─────────────────────── */
  useEffect(() => {
    if (!innerRef.current) return;

    // el contenedor que realmente hace *scroll* es <ContentWrapper>,
    // que es el elemento padre directo de `.inner`
    const scrollContainer = innerRef.current.parentNode;

    // 1) limpiamos animaciones previas
    ScrollReveal().clean(innerRef.current.querySelectorAll('.sr-item'));

    // 2) registramos las nuevas animaciones
    ScrollReveal({
      distance   : '40px',
      duration   : 800,
      easing     : 'ease-out',
      origin     : 'bottom',
      reset      : false,
      viewFactor : 0.15,           // 15 % visible para disparar
      container  : scrollContainer // ⭐ ¡aquí el cambio importante!
    }).reveal(innerRef.current.querySelectorAll('.sr-item'), { interval: 100 });
  }, [theme]);                              // se ejecuta cada vez que cambia de tema

  /* ────────────────────── 3. pantalla de carga ─────────────────────────── */
  if (!theme || !unit) {
    return (
      <ContentWrapper $noContent className={transitionClass}>
        <div className="inner" ref={innerRef}>Cargando contenido…</div>
      </ContentWrapper>
    );
  }

  /* ────────────────────── 4. Información general del módulo ────────────── */
  if (theme.isUnitInfo) {
    return (
      <ContentWrapper className={transitionClass}>
        <div className="inner" ref={innerRef}>
          <UnitInfoBox className="sr-item">
            <h2 className="unit-title">{unit.courseName}</h2>
            <h3 className="unit-subtitle">{unit.title}</h3>

            <p className="unit-meta"><strong>Semestre:</strong> {unit.semestre}</p>
            <p className="unit-meta"><strong>Docente:</strong> {unit.teacher}</p>

            <h4 className="section-heading">Objetivo</h4>
            <p className="objective">{unit.objective}</p>

            {unit.competencies?.length > 0 && (
              <>
                <h4 className="section-heading">Competencias</h4>
                <ul className="competencies">
                  {unit.competencies.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </>
            )}
          </UnitInfoBox>

          <NavButtons>
            <NavButton onClick={() => onNavigateTheme('prev')} disabled={!hasPrev}>← Tema Anterior</NavButton>
            <NavButton $next onClick={() => onNavigateTheme('next')} disabled={!hasNext}>Tema Siguiente →</NavButton>
          </NavButtons>
        </div>
      </ContentWrapper>
    );
  }

  /* ────────────────────── 5. Secciones normales ────────────────────────── */
  const displayTitle =
    theme.numbering && theme.numbering.trim() !== '' && theme.numbering.trim() !== theme.title.trim()
      ? `${theme.numbering} ${theme.title}`
      : theme.title;

  const listBlock   = theme.content.find((b) => b.type === 'list');
  const lottieBlock = theme.content.find((b) => b.type === 'lottie');

  return (
    <ContentWrapper className={transitionClass}>
      <div className="inner" ref={innerRef}>
        <ThemeTitle className="sr-item">{displayTitle}</ThemeTitle>

        {/* ---- Bibliografía (en grid) ---- */}
        {theme.id === 'bib' && listBlock && (
          <BibliographyGrid className="sr-item">
            <div className="biblio-list">
              <Unordered>
                {listBlock.items.map((it, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: marked.parseInline(it) }} />
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

        {/* ---- Resto de bloques ---- */}
        {theme.id !== 'bib' &&
          theme.content.map((block, idx) => {
            const key = `${block.type}-${idx}`;

            switch (block.type) {
              case 'paragraph':
                return (
                  <Paragraph key={key} className="sr-item"
                    dangerouslySetInnerHTML={{ __html: marked.parse(block.text) }} />
                );

              case 'image':
                return (
                  <Figure key={key} className="sr-item">
                    <img src={block.src} alt={block.alt || ''} />
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                  </Figure>
                );

              case 'video':
                return (
                  <VideoBox key={key} className="sr-item">
                    {block.title && <h3>{block.title}</h3>}
                    <iframe
                      src={block.src.replace('watch?v=', 'embed/')}
                      title={block.title || 'video'}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    {block.caption && <p>{block.caption}</p>}
                  </VideoBox>
                );

              case 'blockquote':
                return <BlockQuote key={key} className="sr-item">{block.text}</BlockQuote>;

              case 'list': {
                const ListTag = block.style === 'ordered' ? Ordered : Unordered;
                return (
                  <ListTag key={key} className="sr-item">
                    {block.items.map((it, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: marked.parseInline(it) }} />
                    ))}
                  </ListTag>
                );
              }

              case 'link':
                return (
                  <LinkBox key={key} className="sr-item">
                    <a href={block.url} target="_blank" rel="noopener noreferrer">
                      {block.text || block.url}
                    </a>
                  </LinkBox>
                );

              case 'accordion': {
                const isOpen = accordionOpen[idx] ?? false;
                return (
                  <Accordion key={key} className="sr-item">
                    <AccordionHeader onClick={() =>
                      setAccordionOpen((prev) => ({ ...prev, [idx]: !isOpen }))
                    }>
                      {block.header}
                      <span>{isOpen ? '−' : '+'}</span>
                    </AccordionHeader>

                    {isOpen && (
                      <AccordionContent
                        dangerouslySetInnerHTML={{ __html: marked.parse(block.text) }}
                      />
                    )}
                  </Accordion>
                );
              }

              case 'lottie':
                return (
                  <LottieBox key={key} className="sr-item">
                    <LottieRemote url={block.src} />
                  </LottieBox>
                );

              case 'download': {
                const { text, href, files = [], icon } = block;
                const list = href ? [href] : files;

                const handleDownload = () => {
                  list.forEach((url) => {
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = url.split('/').pop();
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                  });
                };

                return (
                  <DownloadWrapper key={key} className="sr-item">
                    <DownloadBtn onClick={handleDownload}>
                      {icon && <Player autoplay loop src={icon} className="lottie-icon" />}
                      {text || 'Descargar'}
                    </DownloadBtn>
                  </DownloadWrapper>
                );
              }

              default:
                return null;
            }
          })}

        {/* ---- navegación inferior ---- */}
        <NavButtons>
          <NavButton onClick={() => onNavigateTheme('prev')} disabled={!hasPrev}>← Tema Anterior</NavButton>
          <NavButton $next onClick={() => onNavigateTheme('next')} disabled={!hasNext}>Tema Siguiente →</NavButton>
        </NavButtons>
      </div>
    </ContentWrapper>
  );
}

export default ContentArea;