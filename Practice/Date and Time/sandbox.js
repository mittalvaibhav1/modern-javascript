//! Date and time
const now = new Date();
console.log(now); // Date and Time both!

//* year , months , day , time , date

//year
console.log(now.getFullYear());

//month
console.log(now.getMonth());

//day 
console.log(now.getDay());

//timestamp
console.log(now.getTime()); //number of miliseconds since 1st Jan 1970

//date
console.log(now.getDate());

//hours
console.log(now.getHours());

//minutes
console.log(now.getMinutes());

//seconds
console.log(now.getSeconds());

//* date strings

console.log(now.toDateString()); // Only Date

console.log(now.toTimeString()); // Only Time

console.log(now.toLocaleString()); // Dat and time in local format.

// Dates

const before = new Date('Jan 3 2020 15:59:59');
console.log(before);

const diff = now.getTime() - before.getTime(); //In miliseconds
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
console.log(mins);

const hours = Math.round(mins / 60);
console.log(hours);

const days = Math.round(hours / 24);
console.log(days);
