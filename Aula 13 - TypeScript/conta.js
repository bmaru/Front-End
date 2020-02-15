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
var Conta = /** @class */ (function () {
    function Conta(agencia, contaCorrente) {
        this.agencia = agencia;
        this.contaCorrente = contaCorrente;
    }
    return Conta;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(agencia, contaCorrente, nomeCliente, cpf) {
        var _this = _super.call(this, agencia, contaCorrente) || this;
        _this.agencia = agencia;
        _this.contaCorrente = contaCorrente;
        _this.nomeCliente = nomeCliente;
        _this.cpf = cpf;
        return _this;
    }
    PessoaFisica.prototype.exibirDados = function () {
        var mensagem = "Os dados da conta s\u00E3o:\n        \nAg\u00EAncia: " + this.agencia + "\n        \nConta Corrente: " + this.contaCorrente + "\n        \nNome do Cliente: " + this.nomeCliente + "\n        \nCPF: " + this.cpf;
        console.log(mensagem);
    };
    return PessoaFisica;
}(Conta));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(agencia, contaCorrente, nomeEmpresa, cnpj) {
        var _this = _super.call(this, agencia, contaCorrente) || this;
        _this.agencia = agencia;
        _this.contaCorrente = contaCorrente;
        _this.nomeEmpresa = nomeEmpresa;
        _this.cnpj = cnpj;
        return _this;
    }
    PessoaJuridica.prototype.exibirDados = function () {
        var mensagem = "Os dados da conta s\u00E3o:\n        \nAg\u00EAncia: " + this.agencia + "\n        \nConta Corrente: " + this.contaCorrente + "\n        \nNome da Empresa: " + this.nomeEmpresa + "\n        \nCNPJ: " + this.cnpj;
        console.log(mensagem);
    };
    return PessoaJuridica;
}(Conta));
