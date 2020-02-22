define(["require", "exports", "./gerente", "./presidente", "./controle"], function (require, exports, gerente_1, presidente_1, controle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ger = new gerente_1.default("Alessandro", "071.346.319-82", 2000);
    var pre = new presidente_1.default("Bianca", "555.435.319-82", 5000);
    var cb = new controle_1.default();
    cb.registra(ger);
    cb.registra(pre);
    console.log("Bonificação:" + ger.getBonificacao());
});
//# sourceMappingURL=exemplo.js.map