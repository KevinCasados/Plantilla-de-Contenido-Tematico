import React, { useState } from 'react';
import {
  /* bloques base */
  ContentWrapper,
  ThemeTitle,
  Paragraph,

  /*  bloques multimedia  */
  Figure,
  BlockQuote,
  Ordered,
  Unordered,
  LinkBox,
  VideoBox,

  /* acordeón y navegación */
  Accordion,
  AccordionHeader,
  AccordionContent,
  NavButtons,
  NavButton,

  /* cuadro información de la unidad */
  UnitInfoBox,
} from './ContentArea.styles';

function ContentArea({
  unit,
  theme,
  onNavigateTheme,
  hasPrev,
  hasNext,
  transitionClass,
}) {
  const [accordionOpen, setAccordionOpen] = useState({});
  const toggleAccordion = (i) =>
    setAccordionOpen((p) => ({ ...p, [i]: !p[i] }));

  /* ——— estados de carga ——— */
  if (!theme || !unit)
    return (
      <ContentWrapper $noContent className={transitionClass}>
        <div className="inner">Cargando contenido…</div>
      </ContentWrapper>
    );

  /* ——— Información general del módulo ——— */
  if (theme.isUnitInfo) {
    return (
      <ContentWrapper className={transitionClass}>
        <div className="inner">
          <UnitInfoBox>
            <h2 className="unit-title">{unit.courseName}</h2>
            <h3 className="unit-subtitle">{unit.title}</h3>

            <p className="unit-meta">
              <strong>Semestre:</strong> {unit.semestre}
            </p>
            <p className="unit-meta">
              <strong>Docente:</strong> {unit.teacher}
            </p>

            <h4 className="section-heading">Objetivo</h4>
            <p className="objective">{unit.objective}</p>

            <h4 className="section-heading">Competencias</h4>
            <ul className="competencies">
              {unit.competencies?.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </UnitInfoBox>

          <NavButtons>
            <NavButton onClick={() => onNavigateTheme('prev')} disabled={!hasPrev}>
              ← Tema Anterior
            </NavButton>
            <NavButton
              $next
              onClick={() => onNavigateTheme('next')}
              disabled={!hasNext}
            >
              Tema Siguiente →
            </NavButton>
          </NavButtons>
        </div>
      </ContentWrapper>
    );
  }

  /* ——— CONTENIDO DEL TEMA ——— */
  return (
    <ContentWrapper className={transitionClass}>
      <div className="inner">
        <ThemeTitle>
          {theme.numbering} {theme.title}
        </ThemeTitle>

        {theme.content.map((block, idx) => {
          switch (block.type) {
            case 'paragraph':
              return <Paragraph key={idx}>{block.text}</Paragraph>;

            case 'image':
              return (
                <Figure key={idx}>
                  <img src={block.src} alt={block.alt || ''} />
                  {block.caption && <figcaption>{block.caption}</figcaption>}
                </Figure>
              );

            case 'video':
              return (
                <VideoBox key={idx}>
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
              return <BlockQuote key={idx}>{block.text}</BlockQuote>;

            case 'list':
              return block.style === 'ordered' ? (
                <Ordered key={idx}>
                  {block.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </Ordered>
              ) : (
                <Unordered key={idx}>
                  {block.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </Unordered>
              );

            case 'link':
              return (
                <LinkBox key={idx}>
                  <a href={block.url} target="_blank" rel="noopener noreferrer">
                    {block.text || block.url}
                  </a>
                </LinkBox>
              );

            case 'accordion':
              return (
                <Accordion key={idx}>
                  <AccordionHeader onClick={() => toggleAccordion(idx)}>
                    {block.header}
                    <span>{accordionOpen[idx] ? '−' : '+'}</span>
                  </AccordionHeader>
                  {accordionOpen[idx] && (
                    <AccordionContent>{block.text}</AccordionContent>
                  )}
                </Accordion>
              );

            default:
              return null;
          }
        })}

        <NavButtons>
          <NavButton onClick={() => onNavigateTheme('prev')} disabled={!hasPrev}>
            ← Tema Anterior
          </NavButton>
          <NavButton
            $next
            onClick={() => onNavigateTheme('next')}
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