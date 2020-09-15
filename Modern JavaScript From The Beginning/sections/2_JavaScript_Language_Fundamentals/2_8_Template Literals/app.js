const name = "john";
const age = 30;
const job = "web developer";
const city = "miami";

// ** many times we will need to add HTML from js
// ** there is tools like fetch/ajax that will help us reload the HTML
// ** but, in the end, we do it with JS

// ** we will need to create a temple HTML string with dynamic data and insert it to the page

// ! template string = template literals
// ? Without template string (ES5)
// ** first we will create the html string that we want to insert:
let html =
  "<ul><li>name: " +
  name +
  "</li><li>age: " +
  age +
  "</li><li>job: " +
  job +
  "</li><li>city: " +
  city +
  "</li></ul>";

//!! function for example:
function hello() {
  return "hello";
}

// ? with template strings
// ** template strings let us write this HTML string in an organize way
// ** we can interpolate variables, evaluation exp, function
html = `
"<ul>
    <li>name: ${name}</li>
    <li>age: ${age}</li>
    <li>job: ${job}</li>
    <li>city: ${city}</li>
    <li>evaluation: ${2 + 2}</li>
    <li>Function: ${hello()}</li>
    <li>if statement: ${age > 30 ? "old" : "young"}</li>
</ul>;
`;

// ** now we need to "catch" the body inside the HTML page (AKA DOM), and assign there the html string that we have made
document.body.innerHTML = html;
