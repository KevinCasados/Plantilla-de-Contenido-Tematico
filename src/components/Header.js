import React, { useState, useEffect } from 'react';
import './Header.css'; // Asegúrate de que este CSS esté en el mismo directorio

// Importa tu logo. Asegúrate de que la ruta sea correcta.
// Por ejemplo, si tu logo está en 'src/assets/logo.webp'
import universityLogo from '../assets/logo.png'; // <--- ¡ACTUALIZA ESTA RUTA CON LA TUYA!

// Iconos SVG simples para sol y luna (mantienen su posición)
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-yellow-400"
  >
    <path
      fillRule="evenodd"
      d="M9.528 1.718a.75.75 0 0 1 .494 1.01l-3.34 6.68 1.346 1.346a.75.75 0 0 1-.502 1.252l-.634.195a.75.75 0 0 1-.86-.86l.195-.634a.75.75 0 0 1 1.252-.502l1.346-1.346-6.68 3.34a.75.75 0 0 1-.722 1.157L5.38 21.64h13.24l-1.92-3.84a.75.75 0 0 1-.722-1.157l-6.68-3.34 1.346-1.346a.75.75 0 0 1 1.252-.502l.195-.634a.75.75 0 0 1-.86-.86l-.634.195a.75.75 0 0 1-.502-1.252l1.346-1.346-3.34-6.68a.75.75 0 0 1 1.01-.494Z"
      clipRule="evenodd"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-gray-800"
  >
    <path
      fillRule="evenodd"
      d="M9.528 1.718a.75.75 0 0 1 .494 1.01l-3.34 6.68 1.346 1.346a.75.75 0 0 1-.502 1.252l-.634.195a.75.75 0 0 1-.86-.86l.195-.634a.75.75 0 0 1 1.252-.502l1.346-1.346-6.68 3.34a.75.75 0 0 1-.722 1.157L5.38 21.64h13.24l-1.92-3.84a.75.75 0 0 1-.722-1.157l-6.68-3.34 1.346-1.346a.75.75 0 0 1 1.252-.502l.195-.634a.75.75 0 0 1-.86-.86l-.634.195a.75.75 0 0 1-.502-1.252l1.346-1.346-3.34-6.68a.75.75 0 0 1 1.01-.494Z"
      clipRule="evenodd"
    />
  </svg>
);


function Header() {
  // Inicializa el tema desde localStorage o por defecto a 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    // Aplica la clase al elemento <body>
    document.body.className = theme;
    // Guarda el tema en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="app-header">
      <div className="header-left">
        {/* Mueve el logo aquí, antes del título */}
        <img
          src={universityLogo}
          alt="Logo Universidad Euro Hispanoamericana"
          className="university-logo"
        />
        <h1 className="app-title">Universidad Euro Hispanoamericana</h1>
      </div>
      <div className="header-right">
        {/* Botón de switch de tema */}
        <button
          className={`theme-toggle-button ${theme === 'dark' ? 'dark-mode' : ''}`}
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          <div className="toggle-track">
            <div className="toggle-thumb">
              {theme === 'light' ? <SunIcon /> : <MoonIcon />}
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;