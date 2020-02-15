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
var Padrao = /** @class */ (function () {
    function Padrao(nome, idade, cidade, email, telefone) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.email = email;
        this.telefone = telefone;
    }
    return Padrao;
}());
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, idade, cidade, email, telefone, materia) {
        var _this = _super.call(this, nome, idade, cidade, email, telefone) || this;
        _this.nome = nome;
        _this.idade = idade;
        _this.cidade = cidade;
        _this.email = email;
        _this.telefone = telefone;
        _this.materia = materia;
        return _this;
    }
    Professor.prototype.listar = function () {
        var mensagem = "Os dados do aluno s\u00E3o:\n        \nNome: " + this.nome + "\n        \nIdade: " + this.idade + "\n        \nCidade: " + this.cidade + "\n        \nEmail: " + this.email + "\n        \nTelefone: " + this.telefone + "\n        \nMat\u00E9ria: " + this.materia;
        console.log(mensagem);
    };
    return Professor;
}(Padrao));
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, idade, cidade, email, telefone, nota1, nota2) {
        var _this = _super.call(this, nome, idade, cidade, email, telefone) || this;
        _this.nome = nome;
        _this.idade = idade;
        _this.cidade = cidade;
        _this.email = email;
        _this.telefone = telefone;
        _this.nota1 = nota1;
        _this.nota2 = nota2;
        return _this;
    }
    Aluno.prototype.listar = function () {
        var mensagem = "Os dados do aluno s\u00E3o:\n        \nNome: " + this.nome + "\n        \nIdade: " + this.idade + "\n        \nCidade: " + this.cidade + "\n        \nEmail: " + this.email + "\n        \nTelefone: " + this.telefone + "\n        \nNota 1: " + this.nota1 + "\n        \nNota 2: " + this.nota2;
        console.log(mensagem);
    };
    return Aluno;
}(Padrao));
