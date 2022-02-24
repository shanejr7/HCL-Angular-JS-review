import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10,15);
console.log(myShape.getInfo());

let myCirlce = new Circle(5,10, 20);
console.log(myCirlce.getInfo());

let myRectangle = new Rectangle(0,0,3,7);
console.log(myRectangle.getInfo());

console.log("-------------------");

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCirlce);
theShapes.push(myRectangle);


for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}