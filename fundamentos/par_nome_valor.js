// par nome/valor

const saudacao = "Opa" // contexto léxico 1

function exec(){
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
 const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: 'Rua Maranata',
    numero: 'Indefinido'
 }
 console.log(exec())
 console.log(cliente)
 console.log(saudacao)
 