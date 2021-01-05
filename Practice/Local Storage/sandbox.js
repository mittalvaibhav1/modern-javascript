// Storing data in local storage
// Value should only be in the form of string

localStorage.setItem('name','mario');
localStorage.setItem('age',50); // value is converted to string from number

// Accesing data from local storage

const user = localStorage.getItem('name'); 
console.log(user);

const age = localStorage.getItem('age'); 
console.log(age);

// To update
localStorage.setItem('name','goku'); // just overwrite it

// Or

localStorage.name = 'vegeta'

console.log(localStorage.getItem('name')); // Output vegeta

// Delete items

localStorage.removeItem('name');

console.log(localStorage.getItem('name')); // null

// remove all items

localStorage.clear();


// Storing Objects // JSON Objects

const data = [
    {text:'abc',author:'klm'},
    {text:'def',author:'nop'},
    {text:'hij',author:'xyz'}
]

const dataString = JSON.stringify(data);
localStorage.setItem('data',dataString);

const fromls = localStorage.getItem('data');
console.log(fromls);

const ob = JSON.parse(fromls);
console.log(ob);
















