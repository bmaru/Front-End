define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Conta = /** @class */ (function () {
        function Conta(saldo) {
            this.saldo = saldo;
        }
        Conta.prototype.deposita = function (valor) {
            this.saldo += valor;
        };
        Conta.prototype.saca = function (valor) {
            if (this.saldo > valor) {
                this.saldo -= valor;
            }
            else {
                console.log("Saldo insuficiente");
            }
        };
        Conta.prototype.getSaldo = function () {
            return this.saldo;
        };
        return Conta;
    }());
    exports.default = Conta;
});
//# sourceMappingURL=conta.js.map