import { Shape } from "./Shape";

export class Rectangle extends Shape{

    constructor(theX: number, theY: number,
        private _width:number, private _lenght: number){

        super(theX,theY);
    }

    public getInfo(): string {
        return super.getInfo() + `, width=${this._width}, length=${this._lenght}`;
        
    }

}