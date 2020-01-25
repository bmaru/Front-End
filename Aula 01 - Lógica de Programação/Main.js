console.log('Hello World')
var nome = 'Bianca Russo' //String
console.log(nome)
nome = 13456 //number
console.log(nome)
console.log(typeof nome)
var isDay = true
var lista = ['Olá', 13, false, []]
console.log(lista)
lista.forEach(function(value){
    console.log(value)
})
var teste
console.log(teste)
if (teste == null) {
    console.log('olá')
}
var carro = {
    cor: 'Branco',
    ano: 2019,
    marca: 'VW'
}
console.log(carro.cor)
console.log(typeof 'teste')
const test = 'const'
console.log(test)
function soma(num1, num2) {
    return num1 + num2;
}
var result = soma(10,17+1)
console.log('Resultado: ' + result)
console.log(5 + result);
['a', 'b', 'c'].forEach(function(value){
    console.log('Old: '+value)
});
['a', 'b', 'c'].forEach(a => console.log('ES6: '+a));