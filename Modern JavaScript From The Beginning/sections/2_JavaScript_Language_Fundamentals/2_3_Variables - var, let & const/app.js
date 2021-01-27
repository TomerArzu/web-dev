// ** 3 possible keywords to define variables:
// ** var (since the beginning), let, const (introduced at ES6)
// ** let and const have a big advantage on var in terms of global scopes, block level scopes and functions (we talk about it later)
// ** at the beginning we use var, then we will move to const and let

// ? declare a variable
// var name = "John Doe"; // !! string can be we double quotes or single as well
// console.log(name);
// name = "Steve Smith"; // !! we can re-assign var (and let)
// console.log(name);

// ? initialize variable
// var greetings; // !! when  we defined variable without init value - its 'undefined'

// ** conventions of variables name to assign
// ** variable's name can be assign as: letters (characters), numbers, _, $ (recommended when using jQuery)
// ** we can use camelCase convention, underscore_name, PascalCase

// ? let and const:
// LET
// ** let works like var

// let name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// CONST
// const stands for constant - which mean its can't be re-assign

const name = "John";
console.log(name);
// name = "Tomer"; // !! can not re-assign
// ** when we use const we must initialize it

// ** when we talk about const reference types (object, arrays or others), we can change it but not re-assign it,
// ** For Example:
const person = {
  name: "John",
  age: 30,
};


console.log("the const person object: (before change)");
console.log(person);
person.name = "Sara";
person.age = 25;
console.log("the const person object: (after change)");
console.log(person);

// ** also with array:
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// !! we can add elements to an array:
numbers.push(6);
console.log(numbers);

// ** If we will look at the console we can see that the const variable is holds a reference and not actual data

// ** how to use const
// ** we are going to use const unless:
// ** 1.  we plan the value to be changed
// ** 2.  we need to initialized it
// ** 3.  we using it in loop

// ** otherwise, cost let the code more readability -
// ** the person who's looks at the code will know that this const variable should not be changed
// ** it also helps the code's security
