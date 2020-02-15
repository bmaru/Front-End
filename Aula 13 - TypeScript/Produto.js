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
var Produto = /** @class */ (function () {
    function Produto() {
    }
    Produto.prototype.mensagem = function () {
        console.log("Produto");
    };
    return Produto;
}());
var Produto2 = /** @class */ (function (_super) {
    __extends(Produto2, _super);
    function Produto2() {
        var _this = _super.call(this) || this;
        _this.mensagem();
        return _this;
    }
    Produto2.prototype.mensagem = function () {
        console.log("Produto 2");
    };
    return Produto2;
}(Produto));
