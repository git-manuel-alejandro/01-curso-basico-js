//objetos

function clasePersona(nombre, edad, carrera) {
  this.nombre = nombre;
  this.edad = edad;
  this.carrera = carrera;
}

const pedro = new clasePersona("pedro", 25, "engeenier");

console.log(pedro);

const persona = {
  nombre: "manuel",
  edad: "31",
  carrera: "developer",
  skils: ["front", "back", "cloud services"],
};

console.log(persona.nombre);
console.log(persona.skils);

const { carrera } = persona; // destructuring

console.log(carrera);
