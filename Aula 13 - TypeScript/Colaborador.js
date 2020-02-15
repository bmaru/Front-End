var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Colaborador = /** @class */ (function () {
    function Colaborador(cargo, salario) {
        this.cargo = cargo;
        this.salario = salario;
    }
    return Colaborador;
}());
var Pessoa = /** @class */ (function (_super) {
    __extends(Pessoa, _super);
    function Pessoa(cargo, salario, nome, idade, cidade) {
        var _this = _super.call(this, cargo, salario) || this;
        _this.cargo = cargo;
        _this.salario = salario;
        _this.nome = nome;
        _this.idade = idade;
        _this.cidade = cidade;
        return _this;
    }
    Pessoa.prototype.exibirDados = function () {
        var mensagem = "Os dados da pessoa s\u00E3o:\n        \nCargo: " + this.cargo + "\n        \nSal\u00E1rio: " + this.salario + "\n        \nNome: " + this.nome + "\n        \nIdade: " + this.idade + "\n        \nCidade: " + this.cidade;
        console.log(mensagem);
    };
    return Pessoa;
}(Colaborador));
