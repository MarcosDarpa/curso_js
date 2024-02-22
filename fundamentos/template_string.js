const nome = 'Rebeca'
const concatenacao = "Olá " + nome + '!'

const template = `
    Olá 
    ${nome}!`

console.log(concatenacao)
console.log(template)


// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Acabei de criar uma função que converte todas as letras de uma string para maiúsculas
console.log(`Ei...${up("cuidade!")}`)
