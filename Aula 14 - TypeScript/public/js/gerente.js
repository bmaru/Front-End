var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./funcionario"], function (require, exports, funcionario_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gerente = /** @class */ (function (_super) {
        __extends(Gerente, _super);
        function Gerente(nome, cpf, salario) {
            var _this = _super.call(this, nome, cpf, salario) || this;
            _this.nome = nome;
            _this.cpf = cpf;
            _this.salario = salario;
            return _this;
        }
        Gerente.prototype.getBonificacao = function () {
            return this.salario * 1.4;
        };
        return Gerente;
    }(funcionario_1.default));
    exports.default = Gerente;
});
//# sourceMappingURL=gerente.js.map