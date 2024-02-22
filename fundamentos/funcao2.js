// Armazenados uma função em uma várial
const soma = function(a,b){
    console.log(a + b)
}
soma(2,3)

// Armazenando uma função arrow em uma variável

const soma1 = (c,d) => {
    return c + d 
}
let resultado = soma1(10,10)
console.log(resultado)

// retorno implícito
const subtracao = (a,b) => a-b
console.log(subtracao(10,5))

// reduzindo ainda mais uma arrow faction
const imprimir = a => console.log(a)
imprimir("Olá, Mundo!")
