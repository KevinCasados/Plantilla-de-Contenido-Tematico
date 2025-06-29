import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UnitPage from './components/UnitPage';
import './App.css'; // CSS específico de la aplicación principal

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta dinámica para las unidades */}
          <Route path="/modulo/:unitId" element={<UnitPage />} />
          {/* Redirección por defecto a la unidad 1 si no se especifica */}
          <Route path="/" element={<Navigate to="/modulo/1" replace />} />
          {/* Puedes añadir una ruta 404 si lo deseas */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
