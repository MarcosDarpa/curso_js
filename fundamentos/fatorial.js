function fatorial(n){
    let resultado = 1
    for(let i = 1; i <= n; i++){
        resultado *= i
    }
    return resultado
}

console.log(fatorial(10))
