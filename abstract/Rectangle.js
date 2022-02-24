"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, _width, _lenght) {
        super(theX, theY);
        this._width = _width;
        this._lenght = _lenght;
    }
    calculateArea() {
        return this._width * this._lenght;
    }
    getInfo() {
        return super.getInfo() + `, width=${this._width}, length=${this._lenght}`;
    }
}
exports.Rectangle = Rectangle;
