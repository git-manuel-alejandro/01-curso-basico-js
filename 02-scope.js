// scope

const scopeGlobal = "soy un scope global";

const saludar = () => {
  const scopeLocal = "soy un scope local";

  console.log(scopeLocal);
  console.log(scopeGlobal); //se puede acceder desde la funcion
};

console.log(scopeLocal); // no se puede acceder desde fuera de la funcion

saludar();
