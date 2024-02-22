console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = "Bola"; // aqui estamos seguindo a notação ponto
obj1["nome"] = "Bola2"; // poderia ser no formato array
console.log(obj1.nome);

class Obj {
  // Criando uma classe chamada Obj
  constructor(nome) {
    // metodo especial quando um objeto é criado constructor que define uma propriedade chamada nome
    this.nome = nome;
    this.exec = function(){
        console.log("Olá Mundo!")
    }
  }
}
const Obj2 = new Obj("Cadeira"); // Aqui você está criando duas instâncias (objeto) da classe Obj
const Obj3 = new Obj("Mesa");
console.log(Obj2.nome);
console.log(Obj3.nome);
Obj3.exec()

/*
Essa transformação é mais uma recomendação de estilo e não uma mudança significativa na funcionalidade do código. 
A declaração de classes em JavaScript foi introduzida no ECMAScript 2015 (também conhecido como ES6),  
e ela fornece uma sintaxe mais concisa para a criação de objetos com construtores.

 function Obj(nome) {
    this.nome = nome;  
}
const Obj2 = new Obj("Cadeira"); 
const Obj3 = new Obj("Mesa");
console.log(Obj2.nome);
console.log(Obj3.nome);
*/
