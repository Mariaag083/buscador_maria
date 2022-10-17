let caja = document.querySelector("#modo"); //  devuelve el primero elemento dentro del documento que coincide con el selector modo
let posicion = 0;
buscar.addEventListener("click", BuscarTexto, true) //al hacer click en buscar llamará a la funcion BuscarTexto

function BuscarTexto(){
  let cajas= document.querySelectorAll("#cajas div");  // devuelve una lista de todos los elementos <div> del documento con una clase "cajas"

  for(i=0;i<cajas.length;i++){
    let informacion = cajas[i].innerHTML;
 
   let result=informacion.replaceAll(caja.value, "<b style='color:red'>" + caja.value + "</b>") //reemplaza todas las coincidencias de la caja y las pone en color rojo
    cajas[i].innerHTML = result;
}
}
