// ** type of data that JS supports:
// ** Primitive Data Type:
// ** stored on the program's stack - when we access to it, we access by its direct value
// ** an actual memory address
// ** for example: string, number(int, float, double), boolean, null, undefined, symbols

// ** Reference Data Type:
// ** objects that the accessing to them is through theirs reference
// ** this kind of objects is stored on the heap (dynamic allocation)
// ** a pointer to location (address) in the memory
// ** for example: Arrays, object literals, functions, dates, anything else

// ** JS is dynamically typed language - which mean:
// **  - types of variables defined by their values => the same variables can hold multiple types
// **  - we don't need to specify types
// **  - there are JS's superset and addon to allow static typing like typescript and flow

// ! PRIMITIVE DATA TYPES:

// ? string
const name = "john doe";

// ? Number
const age = 45;

// ? boolean
const hasKids = true;

// ? Null
const car = null;
console.log("🚀 ~ file: app.js ~ line 31 ~ typeof(car)", typeof car);
// ** if we print the type of the null variable we can see that it will return and type of object
// ** but object is not a primitive type,  according to MDN:
//      In JavaScript, null is marked as one of the primitive values, because its behavior is seemingly primitive.
//      But in certain cases, null is not as "primitive" as it first seems! Every Object is derived from null value, and therefore typeof operator returns object for it.

// ? undefined
let test;

// ? symbol
const sym = Symbol();

// ! REFERENCE DATA TYPES:

// ? Arrays
const hobbies = ["movies", "music"];

// ? object literals
const address = {
  city: "boston",
  state: "MA",
};

// ? Dates
const today = new Date();
console.log(today);
