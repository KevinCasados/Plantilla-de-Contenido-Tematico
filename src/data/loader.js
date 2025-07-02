/*  src/data/loader.js
    Carga los módulos y ofrece utilidades usadas en UnitPage.            */

import { programs } from './index';

/* ——— 1 · obtener objeto del módulo ——— */
export const getUnitData = (programId, courseId, moduleId) =>
  programs?.[programId]?.[courseId]?.[moduleId];

/* ——— 2 · encontrar un tema recursivamente ——— */
export const findThemeById = (themes, id) => {
  for (const t of themes) {
    if (t.id === id) return t;
    if (t.subthemes) {
      const found = findThemeById(t.subthemes, id);
      if (found) return found;
    }
  }
  return null;
};

/* ——— 3 · aplanar jerarquía de temas ——— */
export const flattenThemes = (themes) => {
  let flat = [];
  themes.forEach((t) => {
    flat.push(t);
    if (t.subthemes?.length) flat = flat.concat(flattenThemes(t.subthemes));
  });
  return flat;
};