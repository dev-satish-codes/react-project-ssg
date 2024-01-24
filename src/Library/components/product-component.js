"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productcomponent = void 0;
var product_templates_1 = require("../templates/product-templates");
var Productcomponent = /** @class */ (function (_super) {
    __extends(Productcomponent, _super);
    function Productcomponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = 'samsung TV';
        _this.Price = 45000.33;
        _this.Qty = 2;
        return _this;
    }
    Productcomponent.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    Productcomponent.prototype.Print = function () {
        console.log("Name= ".concat(this.Name, "\n Price=").concat(this.Price, "\n Qty =").concat(this.Qty, "\n Total=").concat(this.Total()));
    };
    return Productcomponent;
}(product_templates_1.Producttemplates));
exports.Productcomponent = Productcomponent;
