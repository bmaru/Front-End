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
    var Presidente = /** @class */ (function (_super) {
        __extends(Presidente, _super);
        function Presidente(nome, cpf, salario) {
            var _this = _super.call(this, nome, cpf, salario) || this;
            _this.nome = nome;
            _this.cpf = cpf;
            _this.salario = salario;
            return _this;
        }
        Presidente.prototype.getBonificacao = function () {
            return this.salario * 2.5;
        };
        return Presidente;
    }(funcionario_1.default));
    exports.default = Presidente;
});
//# sourceMappingURL=presidente.js.map