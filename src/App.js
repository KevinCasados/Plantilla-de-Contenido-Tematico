// src/App.js
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';

import Header from './components/Header/Header';
import UnitPage from './components/UnitPage/UnitPage';

function App() {
  /* ---------- estado del tema centralizado ---------- */
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setThemeName(stored);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeName(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  return (
    <ThemeProvider theme={themeName === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />

      {/* Paso al Header la función y el nombre del tema */}
      <Header themeName={themeName} toggleTheme={toggleTheme} />

      <Router>
        <Routes>
          <Route path="/modulo/:unitId" element={<UnitPage />} />
          <Route path="/" element={<Navigate to="/modulo/1" replace />} />
          <Route path="*" element={<h2>404 – Página no encontrada</h2>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
