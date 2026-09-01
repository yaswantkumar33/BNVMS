// some of the simple types in ts are
// string number boolean
// exp;ict and inference in type script simply that infer will conculde the type of the variable or the value where explict we explict give the type of the varibale

// eg:
const a: string = "this must be a string only";
const b = "here the tsc will infer the type based in the value  we assign";

// some of the special typesin ts are
// ->any
// ->unknown
// ->undefined
// ->null
// ->never

// arrays in ts

// eg :
const string_array: string[] = ["stringnOne", "stringTwo"];
const nummber_array: number[] = [123456, 9766];
const union_array: (number | string | boolean)[] = [
  123456,
  true,
  "this is string",
];
// tuples in ts
// so in our ts a tuple is a typed array with prefefined lenth and types of each index
// here is the example
let example: [number, string, boolean] = [26, "yash", true];
// and there is also a readonly tuple
let example2: readonly [number, string] = [18, "SofwareEngineer"];
// why we use the read only tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong");
console.log(ourTuple);

// object types in ts
// this is the specfic syntax for the objects in the ts
const car: { name: string; price: number; stock: boolean; owner?: string } = {
  name: "buggati",
  price: 2300000,
  stock: true,
};
// it can also have inference  and can also have optional properties "?:"
console.log(car);

// here is the one of imp things
// INDEX SIGNATURE
const aboutYash: { [index: string]: number | string } = {};
aboutYash.name = "Yaswant Kumar S";
aboutYash.salary = "26lpa";
console.log(aboutYash);

// what if we need obj of obj dynamic
type Person = {
  name: string;
  age?: number;
  salary: number;
  place: string;
};

const people: { [index: string]: Person } = {
  yash: {
    name: "yash",
    salary: 18000000,
    place: "chennai",
  },
  stark: {
    name: "stark",
    salary: 18000000,
    place: "chennai",
  },
  marco: {
    name: "marco",
    salary: 18000000,
    place: "chennai",
  },
  barron: {
    name: "barron",
    salary: 18000000,
    place: "chennai",
  },
};
console.log(people);

// Eums in ts
// enum is special class in ts that represents a group of constants which in unchangeable
// there  are two types numeric and string

// Numeric ->
enum CardinalDirection {
  North, //0
  Sourth, //1
  East, //2
  West, //3
}
// byDefault the enum starts from the zero
let currentDirection = CardinalDirection.North;
let currentDirection2 = CardinalDirection.East;
console.log(currentDirection, currentDirection2);

// Numeric Enums - Initialized
enum CardinalDirection2 {
  North = 1, //1
  Sourth, //2
  East, //3
  West, //4
}
// Numeric Enums - Fully Initialized
enum statusCodes {
  NotFound = 404,
  Sucess = 200,
  Axeepted = 202,
  BadRequest = 400,
}

// string enums
enum CardinalDirection3 {
  North = "North",
  South = "South",
  East = "East",
  West = "West",
}

// 260826
// aliases and interfaces
// type script allows us to define the types of the varibale speprately whgihc can be used later

// ####Type aliases

type Car = string;
type Bike = string;
type User = {
  name: string;
  age: number;
  slary: number;
};

let carName: Car = "BMW M320I";
let bikeName: Bike = "triumph street triple rs";

let userData: User = {
  name: "Yash",
  age: 30,
  slary: 30000000,
};

console.log(".//////////////////////////////////////");
console.log(carName, bikeName, userData);
// these type alaiasa can bre used to primittive types and more complex ones ike objs and  array

// But our interfaces are more like type but they apply only to objects
// eg:
// only in  type aliasas we can do union and intersection types
// like these ones
type Animals = {
  name: string;
};
type Bear = Animals & {
  age: number;
};
type Status = "sucess" | "error";
interface CarData {
  name: string;
  price: number;
  instock: boolean;
  power: string;
}

let dataOfCar: CarData = {
  name: "buggati",
  price: 40000000,
  instock: true,
  power: "1200hp",
};
console.log(dataOfCar);
// And there is a another conept in interfaces
// that is interface merging
interface Animal {
  name: string;
}
interface Animal {
  age: number;
}

const dog = {
  name: "marco",
  age: "5",
};

// type script functions

// in ts it has it's oown syntax to return type and parameter type of function

// return type

function addTwoNumbers(): number {
  return 1 + 2;
}
//if the return typoe is not define the ts will inter the return type based on the value returned

// and if there is nothing to return meas we use void
function logthedata() {
  console.log("this is the load data from the function");
}

// now here is the paramaters are defined type
function abc(a: number, b: string): number | string {
  return a + b;
}
// and here is ourt optional paramaters

function def(a: number, b: string, c?: string): number | string {
  return a + b + c;
}

type Add = (a: number, c: number) => number;

let add: Add = (a, b) => {
  return a + b;
};
let a_add = add(1, 2);
console.log(a_add);

let x: unknown = "this is the test string";
console.log((<string>x).length);

// classes in typescript
class Carclass {
  private name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public getname(): string {
    return this.name;
  }
}

let carNameClass = new Carclass("bmw320 i");
console.log(carNameClass.getname());
// console.log(carNameClass.name); // error

// generics in ts
// generics let us write a code that works with different types while;e keeping the typescript aware of the exact type your using
// example

function testfun<T>(value: T): T {
  return value;
}

let atest = testfun<number>(4);
let btest = testfun<string>("this is the sting");
let ctest = testfun<boolean>(true);

let TestOne: Array<number> = [1, 2, 3, 4, 5];

type BoxType<T, K, Y> = {
  name: T;
  price: K;
  user: Y;
};

let BoxeRtype: BoxType<string, number, string> = {
  name: "marco",
  price: 1234567,
  user: "STark",
};

// utility types in typescript
// Partial
interface Point {
  x: number;
  y?: number;
}
// let pointPart: Partial<Point> = {};
// pointPart.x = 1234;
// pointPart.y = 5678;
let pointPart: Required<Point> = {
  x: 123456,
  y: 523846,
};

console.log(pointPart);

// Pick

interface PersonInterface {
  name: string;
  age: number;
  loccation?: string;
  role: string;
  yoe?: number;
}

const Yash: Pick<PersonInterface, "name" | "age" | "role"> = {
  name: "yash",
  age: 25,
  role: "SoftwareEngineer",
};

console.log(Yash);

//Omit

interface CarBrands {
  name: string;
  year: number;
  price: number;
  varient: string;
}

const buggati: Omit<CarBrands, "price" | "year"> = {
  name: "Buggati",
  varient: "Petrol",
};

console.log(buggati);

// Record

type Roles = "superAdmin" | "admin" | "api";

interface SystemUser {
  name: string;
  age: number;
}

const sysUsers: Record<Roles, SystemUser> = {
  superAdmin: {
    name: "userOne",
    age: 34,
  },
  admin: {
    name: "userOne",
    age: 34,
  },
  api: {
    name: "userOne",
    age: 34,
  },
};

console.log(sysUsers);
