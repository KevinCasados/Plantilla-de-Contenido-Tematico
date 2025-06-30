import React, { useState } from 'react';
import {
  ContentWrapper,
  ThemeTitle,
  Paragraph,
  Image,
  LinkBox,
  VideoBox,
  Accordion,
  AccordionHeader,
  AccordionContent,
  NavButtons,
  NavButton,
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

  /* ---------- validaciones ---------- */
  if (!theme || !unit)
    return (
      <ContentWrapper $noContent className={transitionClass}>
        Cargando contenido...
      </ContentWrapper>
    );

  /* ---------- bloque de información de la unidad ---------- */
  if (theme.isUnitInfo) {
    return (
      <ContentWrapper className={transitionClass}>
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
      </ContentWrapper>
    );
  }

  /* ---------- contenido estándar del tema ---------- */
  return (
    <ContentWrapper className={transitionClass}>
      <ThemeTitle>
        {theme.numbering} {theme.title}
      </ThemeTitle>

      {theme.content.map((block, idx) => {
        switch (block.type) {
          case 'paragraph':
            return <Paragraph key={idx}>{block.text}</Paragraph>;

          case 'image':
            return <Image key={idx} src={block.src} alt={block.alt || ''} />;

          case 'link':
            return (
              <LinkBox key={idx}>
                <a href={block.url} target="_blank" rel="noopener noreferrer">
                  {block.text || block.url}
                </a>
              </LinkBox>
            );

          case 'video':
            return (
              <VideoBox key={idx}>
                {block.title && <h3>{block.title}</h3>}
                <iframe
                  src={block.url.replace('watch?v=', 'embed/')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={block.title}
                />
              </VideoBox>
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
    </ContentWrapper>
  );
}

export default ContentArea;