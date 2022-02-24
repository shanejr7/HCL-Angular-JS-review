"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCirlce = new Circle_1.Circle(5, 10, 20);
console.log(myCirlce.getInfo());
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());
console.log("-------------------");
let theShapes = [];
theShapes.push(myCirlce);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log("Area=" + tempShape.calculateArea());
    console.log();
}
