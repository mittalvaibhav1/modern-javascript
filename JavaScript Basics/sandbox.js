//!DOM  Manipulation

//* Eventsss
const button = document.querySelector('button');
button.addEventListener('click', () => console.log('clicked hehe'));

const items = document.querySelectorAll('li');
items.forEach((item) => {
    item.addEventListener('click', (e) => { // Adds an event to the element referenced
        e.target.style.textDecoration = 'line-through'
    })
})



//*Parents,Children & Siblings
// const article = document.querySelector('article');
// console.log(Array.from(article.children)); // returns HTMLCollection of children

// Array.from(article.children).forEach((child)=> {
//     child.classList.add('article-element')
// })

// const title = document.querySelector('h2');
// console.log(title.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.nextElementSibling.previousElementSibling);


//* Adding / Removing Classes
//* Task 1
// const paras = document.querySelectorAll('p');
// paras.forEach((para) => {
//     if(para.textContent.includes('error')) { //textContent shows content even if its hidden.
//         para.classList.add('error');
//     }
//     else if(para.innerHTML.search('success') != -1) {
//         para.classList.add('success');
//     }
// })
// const title = document.querySelector('h1'); 
// title.classList.toggle('hellos');
//* classList
// const content = document.querySelector('p.error');
// console.log(content.classList);
// content.classList.remove('error');
// content.classList.add('success');


//* Changing Styles
// const title = document.querySelector('#page-title');
// console.log(title.getAttribute('style'));

// console.log(title.style)
// console.log(title.style.color)
// title.style.margin = '50px'


//* Modify Attributes
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://yahoo.com');
// link.innerHTML = 'Yahoo';

// const msg = document.querySelector('p.error');
// msg.setAttribute('class','success');
// console.log(msg.getAttribute('class'));


//* .inneHTML
// const para = document.querySelector('p');
// console.log(para.innerHTML);

// para.innerHTML = 'Amazing hehe'

// const paras = document.querySelectorAll('p');

// paras.forEach((para) => {
//     console.log(para.innerHTML);
//     para.innerHTML += '  wheeeeeeeee' 
// })

// const content = document.querySelector('div.error');
// console.log(content.innerHTML);
// content.innerHTML += "<h2> Hello, How are you today?";

// const people = ['mario','luigi','yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// })


//!To Query the DOM

//* Query Selector
// const para = document.querySelector('p'); //returns a single element
// //Returns the first element that matches the query
// console.log(para);

// const para2 = document.querySelector('p.error'); //filter by class 
// console.log(para2);

// const allParas = document.querySelectorAll('p'); //returns multiple elements 
// //Returns all the elements that matches the query
// console.log(allParas);

// allParas.forEach((para) => console.log(para)); //NodeList Array...


// *Other Methods... 
// const title = document.getElementById('page-title'); //returns a single element with given ID
// console.log(title);

// const errors = document.getElementsByClassName('error'); //returns an array of HTMLCollection with given class.
// console.log(errors);
// //errors.forEach((error) => console.log(error));// Cannot use forEach with HTMLCollection. Will give an error.

// const paras = document.getElementsByTagName('p');
// console.log(paras);


