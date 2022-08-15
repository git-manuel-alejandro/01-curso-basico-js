// hoisting

hey();
function hey() {
  console.log("holas");
}

console.log(otroNombre); // return undefined
console.log(nombre); // return Cannot access 'nombre' before initialization

const nombre = "manuel";
var otroNombre = "pedro";
