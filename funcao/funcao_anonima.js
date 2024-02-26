const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a,b))
}
imprimirResultado(10, 10)
imprimirResultado(10, 10, soma)

imprimirResultado(10, 4, function(x,y) {
    return x - y
})

imprimirResultado(3 , 4, (x , y) => x * y)

const pessoa = {
    falar: function() {
        console.log("Opa")
    }
}
pessoa.falar()