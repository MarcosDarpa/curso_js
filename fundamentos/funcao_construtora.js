/*function sum(ar){
    let sums = 0
    for(let i = 0; i < ar.length; i++){
        sums += ar[i]
    }
    return sums
}
let result = sum([10,10,10])
console.log(result)
*/

function fatorial(n){
    let resultado = 1
    for(let i = 1; i <= n; i ++){
        resultado *= i
    }
    return resultado
}
console.log(fatorial(10))
