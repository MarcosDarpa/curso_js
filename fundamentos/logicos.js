function compras(trabalho1, trabalhos2){
    const comprarSorvete = trabalho1 || trabalhos2 // OU  se um ou o outro for verdadeiro e true 
    const comprarTv50 = trabalho1 && trabalhos2 // os dois tem que ser verdadeiro
    //const comprarTv32 = !!(trabalho1 ^ trabalhos2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalhos2 // diferente
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
