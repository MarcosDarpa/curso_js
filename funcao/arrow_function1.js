let dobro = function(a){
    return 2 * a
}

dobro = a => 2 * a // retorno implícito
console.log(dobro(Math.PI))

let ola = function () {
    return "Olá"
}
console.log(ola("Olá"))

ola = () => 'Ola'
ola = _ => 'Olá'
console.log(ola())

