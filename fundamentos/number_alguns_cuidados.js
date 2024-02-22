console.log(7 / 0) // O resultado será INFINITY
console.log("10" / 2) // Essa divisão será execultada mesmo o 10 sendo uma string, isso acontece pq o JS e fracamente tipado!
console.log("Show!" * 2) // Em algumas liguagens a string seria multiplicada duas vezes porém no JS aparece NaN



/*
* Em JavaScript, a imprecisão nos cálculos de números de ponto flutuante, 
* devido à representação binária, pode levar a resultados não exatos, 
* como exemplificado pela expressão 0.1 + 0.7 não retornando exatamente 0.8.
* JavaScript utiliza o padrão IEEE 754 para representação de números de ponto flutuante
*/
console.log(0.1 + 0.7) // nesse exemplo teremos o resultado de 0.7999999999999999

console.log(10..toString)
console.log((10).toString())
console.log((10.345). toFixed(2))

/* 
* console.log(10.toString) Nesse caso dará [ERRO]
* Resultará em um erro, pois o interpretador do JavaScript
* não consegue lidar diretamente com a notação de ponto após um literal numérico 
* sem que haja espaços ou outros caracteres entre o número e o ponto.
*/

