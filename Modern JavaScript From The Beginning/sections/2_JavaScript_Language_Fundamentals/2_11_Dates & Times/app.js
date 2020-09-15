let val;

// ** empty constructor return the today's date and time according to the GMT (Greenwich Mean Time)
const today = new Date();
console.log("today", today);
// let birthday = new Date("9-10-1981 11:25:00"); isn't working
birthday = new Date("September 10 1981");
console.log("birthday", birthday);
birthday = new Date("9/10/1981");
console.log("birthday", birthday);

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
