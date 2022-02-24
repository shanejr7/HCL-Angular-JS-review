import { Shape } from "./Shape";

export class Circle extends Shape{

    constructor(theX : number,theY: number,
        private _radius: number){

            super(theX,theY)

    }

    public getRadius(): number{
        return this._radius
    }

    public setRadius(radius:number): void{
        this._radius = radius;
    }


    public getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }

    
}