// ? Create some arrays
const numbers = [43, 56, 33, 36, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];
console.log("mixed", mixed);

let val;

//** Get array length
val = numbers.length;
// ** Check if is array
val = Array.isArray(numbers);
console.log("isArray", val);

// ** Get single value
val = numbers[3];
val = numbers[0];

// ** Insert into array
numbers[2] = 100;

// ** Find index of the first instance of value
val = numbers.indexOf(36);
console.log("indexOf(36)", val);

console.log("numbers", numbers);
//? MUTATING ARRAYS
// **  Add on to end
numbers.push(250);
console.log("numbers => push(250)", numbers);

// ** Add on to front
numbers.unshift(120);
console.log("numbers => unshift(120)", numbers);

// ** Take off from end
numbers.pop();
console.log("numbers => pop()", numbers);

// ** Take off from front
numbers.shift();
console.log("numbers => shift()", numbers);

// ** Splice values splice(i, j) - removes the ith to the jth values from the array
numbers.splice(1, 3);
console.log("numbers => splice(1, 3)", numbers);

// ** Reverse
numbers.reverse();
console.log("numbers => reverse()", numbers);

// ** Concatenate array
val = numbers.concat(numbers2);
console.log("numbers", numbers);
console.log("numbers2", numbers2);
console.log("numbers => concat(numbers2)", val);

// ** Sorting arrays
// ** strings sorting by alphabetical way
val = fruit.sort();
console.log("fruit.sort()", val);
// ** order the number by the first digit from the left and go forward to the right digits
// ** to fix it and have appropriate sorting we nee to pass the the sort function comparator function
val = numbers.sort();
console.log("numbers.sort()", val);

// ? Use the "compare function"
// **  accenting order
val = numbers.sort(function (x, y) {
  return x - y;
});
console.log("numbers.sort(Compare_function_accenting)", val);

// ** descending order
val = numbers.sort(function (x, y) {
  return y - x;
});
console.log("numbers.sort(Compare_function_descending)", val);

// To use with Find function
function under50(num) {
  return num < 50;
}

// ** find - search and return the first value in the array by the rule that we pass (function or implicit value)
// ** we can pass the find function the rules that we want to search things in the array
val = numbers.find(under50);
console.log("numbers", numbers);
console.log("find(under50)", val);
