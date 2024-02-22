Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirNota = function (nota) {
  // Expressão function anonima
  if (nota.entre(9, 10)) {
    console.log("Medalha de Honra");
  } else if (nota.entre(7, 8.99)) {
    console.log("Aprovado");
  } else if (nota.entre(4, 6.99)) {
      console.log("Recuperação");
  } else if (nota.entre(0, 3.99)){
    console.log("Reprovado!")
  }else{
    console.log("Nota inválida!")
  }
}

imprimirNota(10);
imprimirNota(8.99);
imprimirNota(6.99);
imprimirNota(3.99)
imprimirNota(15)
