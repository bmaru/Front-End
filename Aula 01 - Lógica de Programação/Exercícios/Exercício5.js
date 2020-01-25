// 5 - Faça uma uma função que recebe a temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. 
// A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.
function temp(F) {
    var C = ((F-32)*5)/9;
    return C 
}
console.log(temp(100))