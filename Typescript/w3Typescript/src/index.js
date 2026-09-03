// some of the simple types in ts are
// string number boolean
// exp;ict and inference in type script simply that infer will conculde the type of the variable or the value where explict we explict give the type of the varibale
// eg:
var a = "this must be a string only";
var b = "here the tsc will infer the type based in the value  we assign";
// some of the special typesin ts are
// ->any
// ->unknown
// ->undefined
// ->null
// ->never
// arrays in ts
// eg :
var string_array = ["stringnOne", "stringTwo"];
var nummber_array = [123456, 9766];
var union_array = [
    123456,
    true,
    "this is string",
];
// tuples in ts
// so in our ts a tuple is a typed array with prefefined lenth and types of each index
// here is the example
var example = [26, "yash", true];
// and there is also a readonly tuple
var example2 = [18, "SofwareEngineer"];
// why we use the read only tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong");
console.log(ourTuple);
// object types in ts
// this is the specfic syntax for the objects in the ts
var car = {
    name: "buggati",
    price: 2300000,
    stock: true,
};
console.log(car);
