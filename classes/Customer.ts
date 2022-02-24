export class Customer{

    constructor(private _firstName: string, private _lastName: string){
    }

    public getFirstName() : string{
        return this._firstName;
    }

    public getLastName() : string{
        return this._lastName;
    }

    public setFirstName(theFirst: string) : void{
        this._firstName = theFirst;
    }

    public setLastName(theLast: string) : void{
        this._lastName = theLast;
    }
}



let myCustomer = new Customer("lenoardo","divinci");

console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
