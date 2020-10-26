// ** there are several types of functions:
// ** function declarations, function expression, IIFEs, property methods

// ? FUNCTION DECLARATIONS
// ** this is a regular function with regular declaration
// ** without returning type because js is dynamically typed language

// ** we can define a default values for arguments and override them if i send args to function
function greet(firstName = "John", lastName = "Doe") {
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return "Hello " + firstName + " " + lastName;
}
// ** this is how i can call the function
console.log(greet());

// ? FUNCTION EXPRESIONS
// ** this types of function meant to be encapsulated on a variable
// ** this functions usually anonymous func (which mean that there is not actually declared name to the function)
// ** the syntax:
/*
const/let variableName = function(arg0, arg1, arg2 , ... , argM){
  function_statements...
  ...
  return statement
}
 ! to call the function:
variableName(arg0, arg1, arg2 , ... , argM)
*/

const square = function (x = 3) {
  return x * x;
};

// ** the function invocation is through the variable name that holds the function
console.log(square());

// ? IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// ** this function that i declare and run at the same time
// ** the syntax:
/*
(function (kargs...){
  function statements
})(kargs...);
*/
// ** the prentasize at the end is for the arguments that we need to send for the function
(function () {
  console.log("IIFE Run..");
})();

// ** IIFE with arguments
(function (name) {
  console.log("Hello " + name);
})("IIFE with arguments");

// ? PROPERTY METHODS
// ** in OOP i will need to use this functions inside an objects (which called methods)
const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};
// ** we can add a new method entry into an objects
todo.delete = function () {
  console.log("Delete todo...");
};

// ** the invocation from the object
todo.add();
todo.edit(22);
todo.delete();
