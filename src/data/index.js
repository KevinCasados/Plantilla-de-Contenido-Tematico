/* Índice maestro de todos los programas */
import * as mifd from './doctorado-educacion/mifd';
import * as dec  from './doctorado-educacion/dec'; // Diseño y Evaluación Curricular

export const programs = {
  'doctorado-educacion': {
    mifd,            // Modelo Integrador de Formación Docente
    dec,             // Diseño y Evaluación Curricular
    // otras materias…
  },
  // otros programas…
};