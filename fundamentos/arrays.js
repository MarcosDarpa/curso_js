const valores = [7.7, 8.9, 6.3, 9.2]
const ultimoElemento = valores[valores.length - 1] // Quando não sei o tamanho da lista, uso o length para pegar o ultimo elemento

console.log(valores[0], valores[3])
console.log(ultimoElemento)
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length) 

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

/*
* Ambos push, length e pop são metodos associados a arrays, que são tipos de objetos em JavaScript. 
* Eles são funcionalidades específicas para manipulação de arrays e não podem ser usados da mesma 
* forma em objetos não-array. 
* Essas funcionalidades são parte da API de arrays em JavaScript.
*/

const valoresNovo = valores.pop() // aqui posso usar o pop setando uma nova string ou diretamente no console.log
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)

