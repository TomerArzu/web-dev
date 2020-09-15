const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
// round up:
val = Math.ceil(2.4);
// round down:
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
// gives us a random decimal between 1 to 0
val = Math.random();

// manipulate random formula:
// Math.random() * MaxNumberWeWantStartsFromZero
val = Math.floor(Math.random() * 20 + 1);

console.log(val);
