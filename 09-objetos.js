//objetos

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
