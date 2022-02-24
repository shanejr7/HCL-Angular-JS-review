export abstract class Shape{

    constructor(private _x : number,private _y: number){

    }

    public getX(): number{
       return this._x;
    }

    public getY(): number{
       return this._y;
    }

    public setX(num: number): void{
        this._x = num;
    }

    public setY(num: number): void{
        this._y = num;
    }

    abstract calculateArea(): number;

    public getInfo(): string {
        return `x=${this._x}, y=${this._y}`;
    }

}