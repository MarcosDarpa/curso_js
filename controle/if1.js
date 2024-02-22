function notaAluno(nota){
    if(nota >= 7){
        console.log(`Aluno aprovado, nota ${nota}`)
    }
}
notaAluno(10)
notaAluno(6) // Não vai imprimir no console, só estamos tratando o if, se for verdade

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`É verdade ${valor}`)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
seForVerdadeEuFalo({undefined})

