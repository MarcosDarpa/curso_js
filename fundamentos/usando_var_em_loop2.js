/*const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2]();
funcs[8]();
*/



const funcs = [];

for (let i = 1; i <= 10; i++) {
  funcs.push(
    (function (value) {
      return function () {
        console.log(value);
      };
    })(i)
  );
}

// Agora, ao chamar as funções, elas imprimirão os valores de 1 a 10
funcs.forEach(function (func) {
  func();
});

