/* Índice maestro de todos los programas */
import * as mifd from './doctorado-educacion/mifd'; // Modelo Integrador de Formación Docente
import * as dec  from './doctorado-educacion/dec'; // Diseño y Evaluación Curricular
import * as pddpe  from './doctorado-educacion/pddpe'; // Practica Docente desde la Perspectiva Evaluadora 
import * as arh  from './maestria-administracion-rh/arh';

export const programs = {
  'doctorado-educacion': {
    mifd,            // Modelo Integrador de Formación Docente
    dec,             // Diseño y Evaluación Curricular
    pddpe,           // Practica Docente desde la Perspectiva Evaluadora 
    // otras materias…
  },
  'maestria-administracion-recursos-humanos': {
    arh,             // Administración de Recursos Humanos
    // otras materias…
  },
  // otros programas…
};