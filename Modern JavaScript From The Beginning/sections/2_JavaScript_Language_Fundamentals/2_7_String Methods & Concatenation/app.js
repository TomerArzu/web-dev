const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design,web development,programming";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + firstName + " and I am " + age;

val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat()
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// access the index of the ith character
val = firstName[2];

// indexOf() - print the first/last instance of the specify character
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt() - print the character that in the specify index minus 1 (or in the specify place)
val = firstName.charAt("2");
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring(i,j) - return the substring from i index to j-1 index
val = firstName.substring(0, 4);
console.log(val);

// slice() - common is in arrays
val = firstName.slice(0, 4);
// negative case - start from the back and print the ith character from the end
val = firstName.slice(-3);

// split() - split a string into array based on separator
val = str.split(" ");
val = tags.split(",");

// replace(src, dest) - search the src and replace it with dest
val = str.replace("Brad", "Jack");

// includes(str) - search for the str in the string and return boolean
val = str.includes("foo");

console.log(val);
