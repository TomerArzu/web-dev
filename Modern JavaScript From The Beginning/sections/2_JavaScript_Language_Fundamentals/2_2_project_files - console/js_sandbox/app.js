// !! The console:
// ** the console main propose is to help us debug
// we can write a js commands in the browser console, after we run the command we will see in gray some returned value,
// if the value us "undefined" it's mean that the return value from the function is null
// by writing "document" the return function is the DOM that we are working on it.

// ? Log to console - print to console
// when we print to the log items it has a different meaning - for example: (in firefox) string are white and numbers are green
console.log("Hello World");
console.log(123);
console.log(true);
var myMsgArr = "we can print arrays";
console.log(myMsgArr);
console.log([1, 2, 3, 4]);
var myMsgObj = "This is an object";
console.log(myMsgObj);
console.log({ a: 1, b: 2 });
// this function prints objects as a table
console.table({ a: 1, b: 2 });

// ? log errors or warnings
// it prints the errors in red and warnings in yellow with the line of the error occurred
console.error("this is an error !!");
console.warn("this is a warning");

// ? clear the console:
// console.clear()

// ? the timer
// we can set timer that count the time between two section identifiers (starts from ".time" to ".timeEnd")
console.time("hello");
console.log("hello word");
console.log("hello word");
console.log("hello word");
console.log("hello word");
console.log("hello word");
console.log("hello word");
console.log("hello word");
console.log("hello word");
console.log("hello word");
console.log("hello word");
console.timeEnd("hello");
console.log(
  "this was the hello counter that count the time to print the lines of 'hello word' "
);

// !! we will use the console mostly to debug
