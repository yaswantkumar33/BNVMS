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
