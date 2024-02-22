function tratarErroElencar(erro){
    throw new Error("...")
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.toUpperCase() + "!!!")
    } catch (e){
        tratarErroElencar(e)
    } finally {
        console.log('Final')
    }
}
imprimirNomeGritado("Marcos")