//? FOR LOOP
// ** we need to use "let" type of indexer because its changes
console.log("FOR LOOP");
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite number");
    continue;
  }
  if (i === 5) {
    console.log("Stop the loop");
    break;
  }

  console.log("Number " + i);
}

//? WHILE LOOP

let i = 0;
console.log("WHILE");
while (i < 10) {
  console.log("Number " + i);
  i++;
}

//? DO WHILE

let x = 100;
console.log("DO WHILE");
do {
  console.log("Number " + x);
  i++;
} while (x < 10);

// ** LOOP THROUGH ARRAY
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// ? FOREACH
// ** foreach receive an anonymous callback function that expect:
// ** function(current object, it's numeric index, the iterable object[arrays,objects])
// ** the callback function can receive only the current object
// ** the syntax:
/*
TheObjectToIterateOver.forEach(function(current[, index, TheObjectToIterateOver]){
  ...statements...
});
! the content that in the [] are optional
 */
console.log("FOREACH");
cars.forEach(function (car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});

// ? MAP
// ** this kind of special function is meant to return a deferent array
// ** definition MDN: Calls a defined callback function on each element of an array, and returns an array that contains the results.
// ** by me: this function iterate over the users array and apply on each arrays element the callback function

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Karen" },
  { id: 4, name: "Steve" },
];

// ** for example : iterate over the users array and for each user we return its id
console.log("MAP");
const ids = users.map(function (user) {
  return user.id;
});
console.log(ids);

// ? FOR IN LOOP
// ** iterate over each object's key
console.log("FOR IN LOOP");
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
