// ** WINDOW METHODS / OBJECTS / PROPERTIES
// ** the window (also the browser) is the global object in the client side JS (global environment)
// ** its like the Node.js is a standalone process on the machine system and the environment is our computer
// ** so the window is the runtime for the client side (window is equivalent to the computer in this case)
// ** the document (HTML) is part of the window object
// ** the window include: local storage, fetch, navigator with geolocation and more that we go over them right now

// ? Alert
// ** just prompt message
// alert("Hello World");

//? Prompt
// ** just prompt message with input
// ** we prepare the input and attach it as argument to the alert
// const input = prompt();
// alert(input);

//? Confirm
// ** prompts a message with confirmation buttons as we define
// if (confirm("Are you sure")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

let val;

//? Outter height and width
// ** the width and the height of the window (entire window)
val = window.outerHeight;
console.log("window.outerHeight", window.outerHeight);
val = window.outerWidth;
console.log("window.outerWidth", window.outerWidth);

//? Inner height and width
// ** the width and the height of the page itself
val = window.innerHeight;
console.log("window.innerHeight", window.innerHeight);
val = window.innerWidth;
console.log("window.innerWidth", window.innerWidth);

//? Scroll points
// ** let us know how much we have scrolled (vertically or horizontally)
// ** its good for recognize scroll with animations
val = window.scrollY;
console.log("window.scrollY", window.scrollY);
val = window.scrollX;

//? Location Object
// ** location - is the data on the page like host's ip, port, protocol and more
val = window.location;
console.log("window.location", window.location);
// ** we can access each of the properties separately
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
// ** search by MDN: Returns the Location object's URL's query
// ** accessing to the query params
val = window.location.search;

//? Redirect
// ** we can redirect the use directly to some site
//window.location.href = 'http://google.com';
//? Reload
// ** we can refresh the page - with infinite loop
// window.location.reload();

//? History Object
// ** bring use back to where we have came from ith pages backwards
// window.history.go(-2);
// ** returned us the number of pages we have in the history
// val = window.history.length;

//? Navigator Object
// ** navigator object is related to the actually browser we use (firefox, chrome, IE ...)
val = window.navigator;
console.log("window.navigator", window.navigator);
// ** we can access the navigator's properties
// ** appName is going to be netscape unless we use IE
val = window.navigator.appName;

console.log("window.navigator.appName", window.navigator.appName);
val = window.navigator.appVersion;
console.log("window.navigator.appVersion", window.navigator.appVersion);
val = window.navigator.userAgent;
console.log("window.navigator.userAgent", window.navigator.userAgent);
val = window.navigator.platform;
console.log("window.navigator.platform", window.navigator.platform);
val = window.navigator.vendor;
console.log("window.navigator.vendor", window.navigator.vendor);
val = window.navigator.language;
console.log("window.navigator.language", window.navigator.language);

console.log(val);
