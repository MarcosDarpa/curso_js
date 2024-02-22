const raio = 10.5
const area = Math.PI * Math.pow(raio, 2)
console.log(area.toFixed(2))
console.log(typeof Math)

/*
* Nesse explo aprendi que Math é um objeto, uma coriosidade, no objeto Math.pow(raio ** 2) deu como NaN
* Ele apenas funcionou com Math.pow(raio, 2)
*/