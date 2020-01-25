// 1 - Escreva uma função que recebe 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.
function soma(num1, num2) {
    let result = num1 + num2;
    if (result > 100) {
        return result; 
    }
}
let res = soma (100, 10);
// If ternário [comparação] ? [resultado se verdadeira] : [resultado se falso];
console.log (res ? res : '' )