//? Global Scope
var a = 1;
let b = 2;
const c = 3;
console.log("Global Scope", a, b, c);

//? function scope
// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

test();

//?  Block Scope
// if(true) {
//*  the 'var' variable is, initially, declare as global
//*  when we change it in the block level scope it will change outside ether assignment
//   var a = 4;
//* let isn't changing in outside of the block level scope
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// * in the end of the loop, a will be equal to 10 in the outside of the scope
// for(var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

// ! var changes the value of variable in the global scope from the block scope (but not from function scope)

console.log("Global Scope: ", a, b, c);
