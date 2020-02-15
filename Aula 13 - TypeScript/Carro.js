var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.exibirDados = function () {
        var mensagem = "Os dados do veículo são:";
        mensagem += "\nFabricante: " + this.fabricante;
        mensagem += "\nModelo: " + this.modelo;
        mensagem += "\nCor: " + this.cor;
        mensagem += "\nAno: " + this.ano;
        mensagem += "\nTeto Solar: " + this.tetoSolar;
        alert(mensagem);
    };
    return Carro;
}());
