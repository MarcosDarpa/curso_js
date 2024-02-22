const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 9:
        case 10:
            console.log("Quadro de honra")
            break
            
        case 7:
        case 8:
            console.log("Aprovado!")
            break

        case 6: case 5: case 4:
            console.log("Recuperação")
            break

        case 3: case 2: case 1:
            console.log("Aluno reprovado")
            break

        default:
            console.log("Nota inválida")


    }

}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

