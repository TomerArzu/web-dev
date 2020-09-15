// ** type conversion - change the type of the data type
// ** when we take an input from a form, its gonna be string by default
// ** we may want to apply some calculations on it so we need to convert it

let val;

// ? type conversion to string
val = 5;
console.log(typeof val);

val = String(5);
console.log(typeof val);

// ** we can apply calculations within the String class constructor:
val = String(5 + 5);
console.log(typeof val + " => value: " + val);

// ** in general most of the data types, when we assign them to string constructor,
// ** it covert to string

// ** we can also use toString method:
// ? .toString()
val = true.toString();

// ? type conversion to number
// ** first convention by the Number constructor and toFixed() method
val = Number("5");
val = val.toFixed();
console.log(val);
console.log("type: " + typeof val);
// ! true = 1, false = 0, null = 0
// ! if we try convert characters/arrays/object to number we will receive NaN (stands for Not a Number)

// ** the method .parseInt() allow only for strings to integers
// ** we also have parseFloat for floats

val = "5"; //string
val = parseInt(val);
console.log(val);
console.log("type: " + typeof val);

// ** Js type coercion:
// ** js can change type of variable and change in for us automatically
const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log(
  "val1=5 , val2=6 => both numbers => val1+val2=sum = " +
    sum +
    " type of sum: " +
    typeof sum
);

// ** the js coercion engine make a decision that if one of the variables is a string it
// ** turn the other variable to string and concat them together
const val11 = String(5);
const val22 = 6;
const sum12 = val11 + val22;
console.log(
  "val11=String(5), val2=6 => val11 is string, val22 is number => val11+val22=sum12 = " +
    sum12 +
    " type of sum12: " +
    typeof sum12
);
