/* Índice maestro de todos los programas */
import * as mifd from './doctorado-educacion/mifd'; // Modelo Integrador de Formación Docente
import * as dec  from './doctorado-educacion/dec'; // Diseño y Evaluación Curricular
import * as pddpe  from './doctorado-educacion/pddpe'; // Practica Docente desde la Perspectiva Evaluadora 

export const programs = {
  'doctorado-educacion': {
    mifd,            // Modelo Integrador de Formación Docente
    dec,             // Diseño y Evaluación Curricular
    pddpe,           // Practica Docente desde la Perspectiva Evaluadora 
    // otras materias…
  },
  // otros programas…
};