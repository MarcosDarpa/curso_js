/*
* Deve-se evitar criar variáveis utilizando a palavra-chave var dentro de blocos, 
* uma vez que o var não respeita o escopo de bloco. 
* Mesmo que a variável seja declarada dentro de um bloco, ela será visível em todo o código, 
* permanecendo no escopo global se não estiver dentro de uma função específica. 
* Isso pode levar a problemas de poluição do escopo global e a potenciais conflitos de variáveis.
*/

{
  {
    {
      {
        var sera = "Será";
      }
    }
  }
}
console.log(sera)

/*
* Ao utilizar a palavra-chave var para declarar variáveis dentro de uma função, 
* é importante notar que ela não se torna global. 
* A variável permanece no escopo da função, o que significa que ela pode ser acessada em qualquer lugar dentro dessa função. 
* No entanto, ela não estará disponível fora da função e não contaminará o escopo global. 
* Mesmo assim, é recomendável preferir let e const para declarar variáveis, pois eles respeitam melhor o escopo de bloco, 
* proporcionando uma melhor organização do código.
*/

function teste(){
    
    var local = 123
    console.log(local)

}
teste(123)

