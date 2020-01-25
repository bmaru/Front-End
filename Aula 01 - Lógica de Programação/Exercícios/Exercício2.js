// 2 - Escreva uma função que recebe um número como parâmetro e mostre a tabuada (até 10x).
function tabuada(num) {
    let result = [];
    for (let index = 1; index <= 10; index++) {
        let value = index * num;
        result.push(value);
        console.log(index + ' X ' + num + '=' + value);
    }
    return result;
}
tabuada(5);