/* Índice maestro de todos los programas */
import * as mifd from './doctorado-educacion/mifd'; // Modelo Integrador de Formación Docente
import * as dec  from './doctorado-educacion/dec'; // Diseño y Evaluación Curricular
import * as pddpe  from './doctorado-educacion/pddpe'; // Practica Docente desde la Perspectiva Evaluadora 
import * as arh  from './maestria-administracion-rh/arh';
import * as pbcc  from './maestria-psicologia-clinica/pbcc'; // Psicoterapia Breve Conductivo-Conceptual
import * as ieie  from './maestria-educacion/ieie'; // Implicaciones Educativas de la Inteligencia Emocional
import * as dpc  from './maestria-educacion/dpc'; // Didactica de los Procesos Cognitivos
import * as pae  from './maestria-educacion/pae'; // Didactica de los Procesos Cognitivos
import * as aie  from './maestria-gestion-aie/aie'; // Administración de Instituciones Educativas
import * as ieie207  from './especialdad-formacion-docente/ieie'; // Implicaciones Educativas de la Inteligencia Emocional (EFD 207) 
import * as ddpe  from './maestria-gestion-aie/ddpe';  // Diseño y Desarrollo de Proyectos Educativos

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

  'maestria-psicologia-clinica': {
    pbcc,             // Psicoterapia Breve Conductivo-Conceptual
    // otras materias…
  },

  'maestria-educacion': {
    ieie, // Implicaciones Educativas de la Inteligencia Emocional
    dpc, // Didactica de los Procesos Cognitivos
    pae, // Paradigmas Actuales de la enseñanza
    // otras materias…
  },

  'maestria-gestion-aie': {
    aie,             // Administración de Instituciones Educativas
    ddpe,            // Diseño y Desarrollo de Proyectos Educativos
    // otras materias…
  },

  'especialidad-formacion-docente': {
    ieie207,             // Implicaciones Educativas de la Inteligencia Emocional (EFD 207) 
    // otras materias…
  },
  // otros programas…
};