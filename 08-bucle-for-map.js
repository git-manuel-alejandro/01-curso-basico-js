// bucles

const frutas = ["manzana", "peras", "platanos"];

//map method
frutas.map((fruta) => {
  console.log("map method", fruta);
});

//for method
for (let i = 0; i < frutas.length; i++) {
  console.log("for", frutas[i]);
}

// for
const est = ["pedro", "manuel", "matias"];

const saludar = (nombre) => {
  console.log(`hola ${nombre}`);
};

for (let i = 0; i < est.length; i++) {
  saludar(est[i]);
}
