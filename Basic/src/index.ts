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

//Interface
interface UserInterface {
    readonly id: number
    name: String
    age?: number
} 

const user1: UserInterface = {
    id: 1,
    name:"Vishak"
}





//Classes
class Person {
     id:  number
    name: string

    constructor(id:number, name:string){
        this.id = id
        this.name = name
        console.log(id, name);
        
    }
    register(){
        return `${this.name} is Logged In`
    }
}

const vishak = new Person(1,"Vishak Amin")
console.log(vishak.register());

//extends

class Employee extends Person {
    position: string

    constructor(id:number, name:string, position: string){
       super(id, name)
       this.position = position
    }
}
const emp = new Employee(3, "Barry", "HR")

console.log(emp.register());

//Generics
function getArray<T>(items:T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["Vish","Hello"])

strArray.push("dsds")