const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0] // Array

// Sem usar callback
let notasBaixas1 = []
for(let i in notas){
    if (notas [i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

const notasMenor7 = notas => notas < 7

// Callback com function explicita
const notasBaixas2 = notas.filter(function(notas){
    return notas <7
})
console.log(notasBaixas2)

// Callback com arrow function
const notasBaixas3 = notas.filter(notasMenor7)
console.log(notasBaixas3)


