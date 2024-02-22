let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
console.log(typeof isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(typeof isAtivo)

// Uma negação em JS pode ser pela exclamação '!' 2 negaçãoes  torna o valor verdadeiro novamente

isAtivo = 2
console.log(! isAtivo) // tornando false
console.log(!! isAtivo) // tornando true

console.log('os verdadeiros...')
console.log(!! 3)
console.log(!! -1)
console.log(!! ' ')
console.log(!! 'texto')
console.log(!! [])
console.log(!! {})
console.log(!! Infinity)
console.log(!! (isAtivo = true)) // nesse exemplo não achei muito válido, pois se mudar de true para false ficará false!

console.log('os falsos...')
console.log(!! 0)
console.log(!! '')
console.log(!! null)
console.log(!! NaN)
console.log(!! undefined)
console.log(!! (isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log()

let nome1 = 'Lucas'
console.log(nome1 || 'Desconhecido!')

let nome2 = ''
console.log(nome2 || 'Desconhecido')
