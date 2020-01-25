// 7 - Temos um vetor de 5 posições (mochila do jogador), com o nome de 5 itens que nosso herói carrega na mochila. 
// Quando o personagem chega numa porta, queremos detectar automaticamente se ele tem o não uma chave para deixá-lo passar. 
// Crie uma função TemChave que percorre o vetor comparando se cada item tem o nome “chave” e retorne verdadeiro se encontrar alguma. 
// Caso contrário, a função deve retornar falso.
function temChave(mochila) {
    for (let i = 0; i < mochila.length; i++) {
        const item = mochila[i];
        if (item == 'chave') {
            return true;
        }
    }
}
function temChave2(mochila) {
    let index = mochila.indexOf ('chave');
    console.log(index);
    return index >= 0;
}
let resultado = temChave2(['livro', 'chave', 'caneta', 'água'])
console.log(resultado);
