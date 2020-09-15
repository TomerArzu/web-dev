//? Object literals (AKA Objects)
// ** we define object with name and curly braces
/*
type objectName={
  Key : 'value',
  Key : 'value',
  Key : 'value'
};
*/

//  ** object value can be: String, Array, Object (nested object), (even!!) functions or variable that holds one of those
// ** while the key is variable-like
const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 36,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    // ! in this case we want to access the object from the object itself
    // ! we cant do it because the object is not defined yet,
    // ! so to do it, we need to use "this" keyword
    return 2017 - this.age;
  },
};

// ? accessing the object:
let val;

// ** through variable that holds the object:
val = person;
const personName = val.firstName;

// ** through the object itself:
val = person;

// ** Get specific values by keys
val = person.firstName;
val = person["lastName"];
val = person.age;

// ** accessing array-value
val = person.hobbies[1];

// ** nested object-value
val = person.address.state;
val = person.address["city"];

// ** invoke function from object
val = person.getBirthYear();

console.log(val);

// ? define an array of objects:
const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
