import React, { useState } from 'react';
import './ContentArea.css'; // CSS para el área de contenido

function ContentArea({ unit, theme, onNavigateTheme, hasPrev, hasNext, transitionClass }) {
  const [accordionOpen, setAccordionOpen] = useState({});

  const toggleAccordion = (index) => {
    setAccordionOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Validaciones antes de renderizar
  if (!theme || !unit) { // Asegúrate de que 'unit' también esté disponible
    return <main className={`content-area ${transitionClass} no-content-selected`}>
             Cargando contenido...
           </main>;
  }

  // Si el tema es el de información de la unidad, renderiza esa información
  if (theme.isUnitInfo) {
    return (
      <main className={`content-area ${transitionClass} unit-info-section`}>
        <h2 className="theme-title">{unit.courseName}</h2>
        <h3 className="unit-subtitle">{unit.title}</h3>
        <p className="unit-meta"><strong>Semestre:</strong> {unit.semestre}</p>
        <p className="unit-meta"><strong>Docente:</strong> {unit.teacher}</p>
        
        <h4 className="section-heading">Objetivo</h4>
        <p className="unit-objective">{unit.objective}</p>

        <h4 className="section-heading">Competencias</h4>
        <ul className="unit-competencies">
          {unit.competencies && unit.competencies.map((competency, index) => (
            <li key={index}>{competency}</li>
          ))}
        </ul>

        <div className="theme-navigation-buttons">
            <button
              onClick={() => onNavigateTheme('prev')}
              disabled={!hasPrev}
              className="nav-button prev-button"
            >
              ← Tema Anterior
            </button>
            <button
              onClick={() => onNavigateTheme('next')}
              disabled={!hasNext}
              className="nav-button next-button"
            >
              Tema Siguiente →
            </button>
        </div>
      </main>
    );
  }

  // Si no es el tema de información de la unidad, renderiza el contenido normal
  return (
    <main className={`content-area ${transitionClass}`}>
      <h2 className="theme-title">{theme.numbering} {theme.title}</h2>

      {theme.content.map((block, index) => {
        if (block.type === 'paragraph') {
          return <p key={index} className="content-paragraph">{block.text}</p>;
        } else if (block.type === 'image') {
          return <img key={index} src={block.src} alt={block.alt} className="content-image" />;
        } else if (block.type === 'link') {
          return (
            <div key={index} className="content-link">
              <a href={block.url} target="_blank" rel="noopener noreferrer">
                {block.text || block.url}
              </a>
            </div>
          );
        } else if (block.type === 'video') {
            return (
                <div key={index} className="content-video">
                    <h3>{block.title}</h3>
                    <iframe
                        src={block.url.replace("watch?v=", "embed/")}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={block.title}
                    ></iframe>
                    {block.description && <p>{block.description}</p>}
                </div>
            );
        }
        else if (block.type === 'accordion') {
          return (
            <div key={index} className="content-accordion">
              <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                {block.header}
                <span className="accordion-icon">{accordionOpen[index] ? '−' : '+'}</span>
              </button>
              {accordionOpen[index] && (
                <div className="accordion-content">
                  {block.text}
                </div>
              )}
            </div>
          );
        }
        return null;
      })}

      <div className="theme-navigation-buttons">
        <button
          onClick={() => onNavigateTheme('prev')}
          disabled={!hasPrev}
          className="nav-button prev-button"
        >
          ← Tema Anterior
        </button>
        <button
          onClick={() => onNavigateTheme('next')}
          disabled={!hasNext}
          className="nav-button next-button"
        >
          Tema Siguiente →
        </button>
      </div>
    </main>
  );
}

export default ContentArea;