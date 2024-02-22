var numero = 1

{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

/*
* Em resumo, let é preferível quando você deseja limitar a visibilidade de uma variável a um bloco específico, e também ela é global, function e bloco.
* Enquanto var tem escopo de função e, quando declarada fora de uma função, 
* tem escopo global, o que pode levar a problemas de poluição do escopo global. 
* O uso de let é mais recomendado, especialmente em situações onde o escopo de bloco é desejado.
*/
