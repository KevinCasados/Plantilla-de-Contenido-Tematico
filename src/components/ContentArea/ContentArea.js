import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import { Player } from '@lottiefiles/react-lottie-player';  // Import Player for Lottie animations
import LottieRemote from '../common/LottieRemote';  
import {
  /* bloques base */
  ContentWrapper,
  ThemeTitle,
  Paragraph,

  /* multimedia y listas */
  Figure,
  BlockQuote,
  Ordered,
  Unordered,
  LinkBox,
  VideoBox,
  LottieBox,         

  /* NUEVO contenedor para centrar el botón */
  DownloadBtn,  
  DownloadWrapper, 

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
  /* ---------- ESTADO DEL ACORDEÓN ---------- */
  const [accordionOpen, setAccordionOpen] = useState({});

  /*  abre de forma predeterminada los bloques con { open:true }  */
  useEffect(() => {
    if (!theme) return;
    const init = {};
    theme.content.forEach((b, i) => {
      if (b.type === 'accordion' && b.open) init[i] = true;
    });
    setAccordionOpen(init);
  }, [theme]);

  /* ---------- CARGANDO / SIN CONTENIDO ---------- */
  if (!theme || !unit)
    return (
      <ContentWrapper $noContent className={transitionClass}>
        <div className="inner">Cargando contenido…</div>
      </ContentWrapper>
    );

  /* ---------- INFORMACIÓN GENERAL DEL MÓDULO ---------- */
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

  /* ---------- CONTENIDO DEL TEMA ---------- */

  /* ⚠️ CAMBIO – evita repetir texto si numbering === title */
  const displayTitle =
    theme.numbering && theme.numbering.trim() !== '' &&
    theme.numbering.trim() !== theme.title.trim()
      ? `${theme.numbering} ${theme.title}`
      : theme.title;

  return (
    <ContentWrapper className={transitionClass}>
      <div className="inner">
        {/* Título sin duplicaciones */}
        <ThemeTitle>{displayTitle}</ThemeTitle>

        {theme.content.map((block, idx) => {
          switch (block.type) {
            /* ----- texto en Markdown ----- */
            case 'paragraph':
              return (
                <Paragraph
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: marked.parse(block.text) }}
                />
              );

            /* ----- imagen ----- */
            case 'image':
              return (
                <Figure key={idx}>
                  <img src={block.src} alt={block.alt || ''} />
                  {block.caption && <figcaption>{block.caption}</figcaption>}
                </Figure>
              );

            /* ----- video ----- */
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

            /* ----- cita ----- */
            case 'blockquote':
              return <BlockQuote key={idx}>{block.text}</BlockQuote>;

            /* ----- lista ----- */
            case 'list':
              const ListTag = block.style === 'ordered' ? Ordered : Unordered;
              return (
                <ListTag key={idx}>
                  {block.items.map((it, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: marked.parseInline(it),
                      }}
                    />
                  ))}
                </ListTag>
              );

            /* ----- enlace simple ----- */
            case 'link':
              return (
                <LinkBox key={idx}>
                  <a href={block.url} target="_blank" rel="noopener noreferrer">
                    {block.text || block.url}
                  </a>
                </LinkBox>
              );

            /* ----- acordeón ----- */
            case 'accordion': {
              const isOpen = accordionOpen[idx] ?? false;
              return (
                <Accordion key={idx}>
                  <AccordionHeader
                    onClick={() =>
                      setAccordionOpen((prev) => ({ ...prev, [idx]: !isOpen }))
                    }
                  >
                    {block.header}
                    <span>{isOpen ? '−' : '+'}</span>
                  </AccordionHeader>

                  {isOpen && (
                    <AccordionContent
                      dangerouslySetInnerHTML={{
                        __html: marked.parse(block.text),
                      }}
                    />
                  )}
                </Accordion>
              );
            }

            /* ----- animación Lottie ----- */
            case 'lottie':
              return (
                <LottieBox key={idx}>
                  {/* Ahora LottieRemote ocupa 100 % por defecto */}
                  <LottieRemote url={block.src} />
                </LottieBox>
              );

            /* ---------- botón de descarga (uno o varios archivos) ---------- */
            case 'download': {
              const { text, href, files = [], icon } = block;
              const list = href ? [href] : files; // normaliza a array

              const handleDownload = () => {
                list.forEach((url) => {
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = url.split('/').pop(); // nombre base
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                });
              };

              return (
                <DownloadWrapper key={idx}>
                  <DownloadBtn onClick={handleDownload}>
                    {icon && (
                      <Player
                        autoplay
                        loop
                        src={icon}
                        className="lottie-icon"
                      />
                    )}
                    {text || 'Descargar'}
                  </DownloadBtn>
                </DownloadWrapper>
              );
            }

            default:
              return null;
          }
        })}

        {/* ---------- navegación entre temas ---------- */}
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