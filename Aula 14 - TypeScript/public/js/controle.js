define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControleDeBonificacoes = /** @class */ (function () {
        function ControleDeBonificacoes(totalDeBonificacoes) {
            if (totalDeBonificacoes === void 0) { totalDeBonificacoes = 0; }
            this.totalDeBonificacoes = totalDeBonificacoes;
        }
        ControleDeBonificacoes.prototype.registra = function (fun) {
            console.log("Adicionando bonificação do funcionário: " + fun);
            this.totalDeBonificacoes += fun.getBonificacao();
        };
        ControleDeBonificacoes.prototype.getTotalDeBenificacoes = function () {
            return this.totalDeBonificacoes;
        };
        return ControleDeBonificacoes;
    }());
    exports.default = ControleDeBonificacoes;
});
//# sourceMappingURL=controle.js.map