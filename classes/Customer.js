"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    getFirstName() {
        return this._firstName;
    }
    getLastName() {
        return this._lastName;
    }
    setFirstName(theFirst) {
        this._firstName = theFirst;
    }
    setLastName(theLast) {
        this._lastName = theLast;
    }
}
exports.Customer = Customer;
let myCustomer = new Customer("lenoardo", "divinci");
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
