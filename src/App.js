import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

import Header from "./components/Header/Header";
import UnitPage from "./components/UnitPage/UnitPage";

function App() {
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setThemeName(stored);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeName((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  return (
    <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />

      <Router>
        <Header themeName={themeName} toggleTheme={toggleTheme} />

        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to="/programa/doctorado-educacion/materia/mifd/modulo/modulo1"
                replace
              />
            }
          />
          <Route
            path="/programa/:programId/materia/:courseId/modulo/:moduleId"
            element={<UnitPage />}
          />
          <Route path="*" element={<h2>404 – Página no encontrada</h2>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
