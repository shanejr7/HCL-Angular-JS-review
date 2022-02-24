"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(theX, theY, _radius) {
        super(theX, theY);
        this._radius = _radius;
    }
    getRadius() {
        return this._radius;
    }
    setRadius(radius) {
        this._radius = radius;
    }
    getInfo() {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}
exports.Circle = Circle;