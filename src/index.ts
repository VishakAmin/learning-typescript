//Basic type
let id: number = 5
let company: string = "Vishak Amin"
let isCompleted: boolean = true
let x:any = "Hello"

let ids: number[] = [1,2,3]


//Tuple

let person: [number, string, boolean ] = [1,"Brad",true]

//union
let newId: string | number = 22

newId = "22"

newId = 5

//Enum

enum Direction1{
    up,
    down,
    left,
    right
}
console.log(Direction1.left);

//Objects

type User = {
    id: number,
    name: String
} 

const user: User= {
    id: 1,
    name:"Vishak"
}

//Type Assertion

let cid: any = 1
//let customerId = <number> cid
let customerId = cid as number

//Function

function addNum(x: number, y: number): number {
    return x+y
}

console.log(addNum(1,1));

//Void

function response(message:String | number):void{
    console.log(message);    
}

response("Hello");
