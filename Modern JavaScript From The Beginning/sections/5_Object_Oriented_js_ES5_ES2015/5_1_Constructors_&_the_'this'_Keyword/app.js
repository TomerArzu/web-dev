// * Contractor and 'this'
// * we will learn this on ES5
// * ES6 its just a syntax's sugar

// * we already learned object literals:
// * they are good when we create one instance of an object, but when we want to create a multiple instance its getting complicated with a lot of copy code

const bradObject = {
    name: "brad",
};
console.log("this is a literal object: bradObject", bradObject);

// ? Person constructor
// * we can instantiate person object from this constructor
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    // console.log("this - constructor scope", this);

    // * Inside the constructor we can write a functionality
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
}

const bradPerson = new Person("Brad", "1981-12-17");
const johnPerson = new Person("John", "1991-07-23");

console.log("this is a person class: bradPerson", bradPerson);
console.log("this is a person class: johnPerson", johnPerson);

// * we can access each objects fields:
console.log("bradPerson.name", bradPerson.name);
console.log("bradPerson.birthday", bradPerson.birthday);
console.log("bradPerson.calculateAge", bradPerson.calculateAge());

// ! The 'this' keyword is refer to the current instance of the object
// * inside of an object it refers to the instance
// * in the global scope its refer to the window object
// console.log("this - global scope", this)
// this.alert("Global window alert")
