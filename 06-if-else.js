const edad = 18;

if (edad == 18) {
  console.log("votando primera vez");
} else if (edad > 18) {
  console.log("ya has votado");
} else {
  console.log("menor de edad no puede votar");
}

//operador ternario
edad >= 18 ? console.log("puede votar") : console.log("no puede votar");
