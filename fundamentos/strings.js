const escola = "Cod3er"
console.log(escola[4])
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Retorna o código
console.log(escola.indexOf("3"))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log("Escola " .concat(escola).concat("!")) // contaneção
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, "e")) // replace substitui a letra
console.log('Marcos, Roberto, Costa, Lopes'.split(",")) // Coloca a string em um array



/*
* Notação de Colchetes ([]):

* A notação de colchetes é uma forma mais concisa e comum de acessar caracteres em uma string.
* É mais curta e geralmente preferida quando você está apenas interessado em acessar um caractere específico.
* Exemplo: console.log(escola[4]);

* Método charAt():

* O método charAt() é um método específico para strings que retorna o caractere na posição especificada.
* Ele é mais explícito e pode ser útil quando você deseja enfatizar que está trabalhando com caracteres em uma string.
* Exemplo: console.log(escola.charAt(4));

* No entanto, em termos de funcionalidade, ambas as formas são equivalentes e retornarão o mesmo resultado. 
* A notação de colchetes é geralmente preferida pela sua brevidade e clareza, enquanto charAt() pode ser utilizado se você preferir uma abordagem mais explícita.
*/
