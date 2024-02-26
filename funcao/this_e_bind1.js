const pessoa = {
    saudacao: "Bom dia!",
    falar(){  //método
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()

