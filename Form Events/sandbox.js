const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username'); not necessary.
//can get reference to all the fields if they have an ID or name, using the reference to the form!
const feedback = document.querySelector('.feedback');

form.username.addEventListener('keyup', (e) => {
    const pattern = /^[a-zA-Z]{6,12}$/;
    if(!pattern.test(e.target.value)) {
        e.target.style.backgroundColor = 'rgba(220,60,20,0.5)';
    }
    else {
        e.target.style.backgroundColor = 'rgba(0,250,154,0.5)';
    }
});

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const username = form.username.value;
//     const pattern = /^[a-zA-Z]{6,12}$/;
//     if(pattern.test(username)) {
//         feedback.innerHTML = 'yeh bhe theek hai';
//     } else {
//         feedback.innerHTML = 'arey mat karooooo';
//     }

// });

// const username = 'hihellolisten'
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username); // return boolean
// // test if the parameter matches the regEX

// console.log(result);

// let res = username.search(pattern);  
// // returns the index where pattern is found

// console.log(res); 