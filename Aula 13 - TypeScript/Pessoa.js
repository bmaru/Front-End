var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.exibirDados = function () {
        var mensagem = "Os dados pessoais são:";
        mensagem += "\nNome: " + this.nome;
        mensagem += "\nIdade: " + this.idade;
        mensagem += "\nCidade: " + this.cidade;
        alert(mensagem);
    };
    Pessoa.prototype.verificarIdade = function () {
        var mensagem = "";
        if (this.idade >= 18) {
            mensagem += "Maior de idade.";
        }
        else {
            mensagem += "Menor de idade.";
        }
        alert(mensagem);
    };
    return Pessoa;
}());
