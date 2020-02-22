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
define(["require", "exports", "./conta"], function (require, exports, conta_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContaCorrente = /** @class */ (function (_super) {
        __extends(ContaCorrente, _super);
        function ContaCorrente(saldo) {
            if (saldo === void 0) { saldo = 0; }
            var _this = _super.call(this, saldo) || this;
            _this.saldo = saldo;
            return _this;
        }
        ContaCorrente.prototype.atualiza = function (taxa) {
            this.saldo += this.saldo * taxa * 2;
        };
        return ContaCorrente;
    }(conta_1.default));
    exports.default = ContaCorrente;
});
//# sourceMappingURL=conta-corrente.js.map