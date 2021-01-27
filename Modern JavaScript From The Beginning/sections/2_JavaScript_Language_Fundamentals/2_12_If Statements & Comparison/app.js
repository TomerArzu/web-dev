// ** IF ElSE and comparisons
// ** usual structure of if else statement
/* 
if(something) {
    !do something
} else {
    !do something else
  }
*/

const id = 100;

//? EQUAL TO
// ** in this case when we compare it to value with only two equal signs,
// ** the comparison done no matter if the value is a string or number
// ** behind the scene JS makes them in the same type (number or string)
// ** and then the comparison done.
// ** for example: if id was a string: id='100'
// ** and then we make id==100   ==> the return value will be true
// ** In summery, == compare only values and not type
if (id == 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

//? NOT EQUAL TO
if (id != 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

//? EQUAL TO VALUE & TYPE
// ** to compare type and value, we will use three equal signs
// ** now if id was a string with '100' the result was false
// ** as JS developers we probably use this operator most of the time
if (id === 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

//? EQUAL TO VALUE & TYPE
if (id !== 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

//? Test if variable is undefined
console.log("undefined TEST");
if (typeof id !== undefined) {
  console.log(`The ID is ${id}`);
} else {
  console.log("NO ID");
}

//? GREATER OR LESS THAN
if (id <= 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

const color = "yellow";

//? IF ELSE
if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("Color is not red or blue");
}

// LOGICAL OPERATORS

const name = "Steve";
const age = 70;

// ? AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else if (age >= 20 && age <= 90) {
  console.log(`${name} is a adult`);
} else {
  console.log(`${name} is an old`);
}

// ? OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// ? TERNARY OPERATOR
// ** [condition] ? true:false
console.log(id === 100 ? "CORRECT" : "INCORRECT");

// WITHOUT BRACES
if (id === 100) console.log("CORRECT");
else console.log("INCORRECT");

if (id === 100) console.log("CORRECT");
else console.log("INCORRECT");
