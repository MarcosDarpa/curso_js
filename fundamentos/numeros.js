const peso1 = 1.0 // É um number porém é flutuante ou real (Mas no JavaScript 1.0 é Inteiro porém 1.1 já é considerado flutuante)
const peso2 = Number('2.0')

const peso3 = 1.1

console.log(`${peso1}  ${peso2}`)
console.log(`${typeof peso2}`)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

console.log(`${peso3}`)
console.log(`${typeof peso3}`)
console.log(`${Number.isInteger(peso3)}`)

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // deixa com duas casas decimais
console.log(media.toString())  // transformando um number em uma string
console.log(media.toString(2)) // transformando uma string em binário

