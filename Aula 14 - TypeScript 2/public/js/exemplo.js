define(["require", "exports", "./conta-corrente", "./conta-poupanca"], function (require, exports, conta_corrente_1, conta_poupanca_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cc = new conta_corrente_1.default();
    var cp = new conta_poupanca_1.default();
    cc.deposita(100);
    cp.deposita(100);
    console.log("Conta Corrente - saldo: " + cc.getSaldo());
    console.log("Conta Poupança - saldo: " + cp.getSaldo());
});
//# sourceMappingURL=exemplo.js.map