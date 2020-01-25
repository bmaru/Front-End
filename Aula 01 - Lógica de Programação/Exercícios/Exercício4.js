// 4 - Escreva um algoritmo que recebe como parâmetro dois números e uma opção: A - Soma de 2 números. 
// B - Diferença entre 2 números (maior pelo menor). C - Produto entre 2 números. 
// D - Divisão entre 2 números (o denominador não pode ser zero). E execute a operação com os dois números lidos anteriormente. 
// Caso a opção digitada seja inválida, apresente a mensagem de “Opção inválida” para o usuário. 
// Lembre-se de usar funções para organizar seu programa.
function calc(num1, num2, opcao) {
    if ( num1 < 0 || num2 < 0 ) {
        console.log('Informe dois números válidos!');
        // return; acaba nessa função
    }
    if (opcao == 'A') {
        return num1 + num2;
    } else if (opcao == 'B') {
        return num1 > num2 ? num1 - num2 : num2 - num1 
        // se num1 for > num2 ele executa a subtração se não ele faz num2 - num1
    } else if (opcao == 'C') {
        return num1 % num2
    } else if (opcao == 'D') {
        return num1 / num2 
    } else {
        console.log('Opção inválida.');
        return;
    }
}
console.log(calc(10,15, 'A'))
console.log(calc(5,10, 'B'))
console.log(calc(10,3, 'C'))
console.log(calc(10,2, 'D'))