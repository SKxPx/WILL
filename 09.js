/* 
  Importante: 
  No modificar ni el nombre ni los argumentos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la función 
*/
function filtrar(funcion) {
  // Escribí una función filtrar en el prototipo de Arrays,
  // que recibe una función (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa función
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCIÓN FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]
  Array.prototype.filtrar = function(cb){
    let nArray = [];
    this.forEach(item => {
      if(cb(item)){
        nArray.push(item);
      }
    });
    return nArray;
  };
};

// No modifiques nada debajo de esta linea //

module.exports = filtrar