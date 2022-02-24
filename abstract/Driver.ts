import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCirlce = new Circle(5,10, 20);
console.log(myCirlce.getInfo());

let myRectangle = new Rectangle(0,0,3,7);
console.log(myRectangle.getInfo());

console.log("-------------------");

let theShapes: Shape[] = [];

theShapes.push(myCirlce);
theShapes.push(myRectangle);


for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log("Area=" + tempShape.calculateArea());
    console.log();
}