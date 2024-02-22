//Declarando um function
function saudacao(){  // Não está recebendo parametros!
    console.log("Olá Mundo!")
}
// Não está sendo chamada

// Chamada de function
function saudacao2(){
    console.log("Olá Mundo!")
}
saudacao2() // Aqui temos a chamada da função, isso imprimirá "Olá, Mundo!" no console

// Parâmetros e argumentos

function somar(a, b){ // Aqui dentro dos parênteses temos os parâmetros
    console.log(a + b)
}
somar(5,3) // Aqui dentro dos parênteses temos os argumentos

// return de uma function
function multiplicar(x, y){
    return x * y
}
let resultado = multiplicar(4,5)
console.log(resultado)

// functions anônimas e expressões de functions
const  saudacao3 = function(){
    console.log("Oi")
} 
saudacao3()
