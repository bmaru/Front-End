var Carro = /** @class */ (function () {
    function Carro(fabricante, modelo, cor, ano, tetoSolar) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.tetoSolar = tetoSolar;
    }
    Carro.prototype.exibirDados = function () {
        var mensagem = "Os dados do ve\u00EDculo s\u00E3o:\n        \nFabricante: " + this.fabricante + "\n        \nModelo: " + this.modelo + "\n        \nCor: " + this.cor + "\n        \nAno: " + this.ano + "\n        \nTeto Solar: " + this.tetoSolar;
        console.log(mensagem);
    };
    return Carro;
}());
