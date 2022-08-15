// recorriendo array

const articulos = [
  { nombre: "bici", costo: 30 },
  { nombre: "laptop", costo: 300 },
  { nombre: "cuaderno", costo: 3000 },
  { nombre: "lapiz", costo: 1000 },
  { nombre: "cellphone", costo: 400 },
];

// filter : verifica una condicion
// map : recorre el array
// find : retorna el primer valor que cumple la condicion
// forEach : recorre el array
// some : devuelve true or false, según la condición

// filter
const filterArticulos = articulos.filter((articulo) => {
  return articulo.costo < 2500;
});
console.log(filterArticulos);

// map
const mapArticulos = articulos.map((articulo) => {
  return articulo.nombre;
});
console.log(mapArticulos);

// find
const findArray = articulos.find((articulo) => {
  return articulo.nombre === "laptop";
});

console.log(findArray);

// forEach
const forEachArticulos = articulos.forEach((articulo) => {
  console.log(articulo.nombre);
});

// some
const someArticulos = articulos.some((articulo) => {
  return articulo.costo >= 2500;
});
console.log(someArticulos);
