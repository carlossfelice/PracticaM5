function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  let fechaObjeto = new Date(fecha);
  return !isNaN(fechaObjeto.getTime());

}
  module.exports = esFechaValida;