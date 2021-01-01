const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username'); not necessary.
//can get reference to all the fields if they have an ID or name, using the reference to the form!

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form.username.value);
});