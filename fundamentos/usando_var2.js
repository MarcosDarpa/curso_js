/*
* Apenas para confirmar que o "var" fica acessível no escopo global nos dois exemplos abaixo.
* Apenas no bloco de uma function ela é isolada e fica fora do escopo global
*/


var numero = 1

{
    var numero = 2
    console.log('dentro =' ,numero)
}

console.log(numero)