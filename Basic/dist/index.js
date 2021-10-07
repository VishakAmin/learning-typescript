"use strict";
//Basic type
let id = 5;
let company = "Vishak Amin";
let isCompleted = true;
let x = "Hello";
let ids = [1, 2, 3];
//Tuple
let person = [1, "Brad", true];
//union
let newId = 22;
newId = "22";
newId = 5;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.left);
const user = {
    id: 1,
    name: "Vishak"
};
//Type Assertion
let cid = 1;
//let customerId = <number> cid
let customerId = cid;
//Function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 1));
//Void
function response(message) {
    console.log(message);
}
response("Hello");
const user1 = {
    id: 1,
    name: "Vishak"
};
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(id, name);
    }
    register() {
        return `${this.name} is Logged In`;
    }
}
const vishak = new Person(1, "Vishak Amin");
console.log(vishak.register());
//extends
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Barry", "HR");
console.log(emp.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Vish", "Hello"]);
strArray.push("dsds");
