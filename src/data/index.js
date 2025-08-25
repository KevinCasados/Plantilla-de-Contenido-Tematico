/* Índice maestro de todos los programas */
import * as mifd from './posgrados/doctorado-educacion/mifd'; // Modelo Integrador de Formación Docente
import * as dec  from './posgrados/doctorado-educacion/dec'; // Diseño y Evaluación Curricular
import * as pddpe  from './posgrados/doctorado-educacion/pddpe'; // Practica Docente desde la Perspectiva Evaluadora 
import * as arh  from './posgrados/maestria-administracion-rh/arh';
import * as pbcc  from './posgrados/maestria-psicologia-clinica/pbcc'; // Psicoterapia Breve Conductivo-Conceptual
import * as ieie  from './posgrados/maestria-educacion/ieie'; // Implicaciones Educativas de la Inteligencia Emocional
import * as dpc  from './posgrados/maestria-educacion/dpc'; // Didactica de los Procesos Cognitivos
import * as pae  from './posgrados/maestria-educacion/pae'; // Didactica de los Procesos Cognitivos
import * as aie  from './posgrados/maestria-gestion-aie/aie'; // Administración de Instituciones Educativas
import * as ieie207  from './posgrados/especialdad-formacion-docente/ieie'; // Implicaciones Educativas de la Inteligencia Emocional (EFD 207) 
import * as ddpe  from './posgrados/maestria-gestion-aie/ddpe';  // Diseño y Desarrollo de Proyectos Educativos
import * as mp  from './posgrados/maestria-gobiernos-ap/mp';  // Mercadotecnia Política
import * as ii  from './posgrados/maestria-impuestos/ii';  // Impuestos Internacionales
import * as adm_1  from './licenciaturas/administracion/adm-1'; // Administración - I
import * as ied  from './licenciaturas/derecho/ied'; // Introducción al Estudio del Derecho
import * as dc_III  from './licenciaturas/derecho/dc-III'; // Derecho Civil III
import * as dc_V  from './licenciaturas/derecho/dc-V'; // Derecho Civil V
import * as df_II  from './licenciaturas/derecho/df-II'; // Derecho Fiscal II



export const programs = {
  /* --------------------- POSGRADOS --------------------- */
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

   'maestria-gobierno-asuntos-publicos': {
    mp,             // Mercadotecnia Política 
    // otras materias…
  },

  'maestria-impuestos': {
    ii,             // Impuestos Internacionales
    // otras materias…
  },

  /* --------------------- LICENCIATURAS --------------------- */
  'licenciatura-administracion': {
    adm_1,             // Administración - I
    // otras materias…
  },

   'licenciatura-derecho': {
    ied,             // introducción al Estudio del Derech
    dc_III,             // Derecho Civil III
    dc_V,             // Derecho Civil III
    df_II,             // Derecho Fiscal II
    // otras materias…
  },

  // otros programas…
};