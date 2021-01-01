const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username'); not necessary.
//can get reference to all the fields if they have an ID or name, using the reference to the form!

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form.username.value);
});

const username = 'hihellolisten'
const pattern = /^[a-z]{6,}$/;

let result = pattern.test(username); // return boolean
// test if the parameter matches the regEX

console.log(result);

let res = username.search(pattern);  
// returns the index where pattern is found

console.log(res); 