//!DOM  Manipulation

//* More DOM events!
//*Copy event

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy',(e) =>{
    e.preventDefault(); // To Stop them from copying!! YAY!
    console.log('OI! mattt karrr')
})

const box = document.querySelector('.box');

box.addEventListener('mousemove',(e) => {
    console.log(e);
    box.textContent = `(${e.offsetX},${e.offsetY})`
})

document.addEventListener('wheel',(e) => {
    console.log(hi);
})


//* Event Bubling and Deligation
// const items = document.querySelectorAll('li');
// items.forEach((item) => {
//     item.addEventListener('click', (e) => { // Adds an event to the element referenced
//         e.target.remove(); // the event will bubble up and those events will also get triggered which are 
//         //associated with the parent element and all the parents in the heirarchy upwards.
//         // To Prevent This
//         e.stopPropagation();
//         // Even if we dont add the event listner here, it would still bubble up!!!!!
//     })
// })

//* Deligation //Beacuse of bubbling! damn
// const ul = document.querySelector('ul');

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'Something newww..';
//     ul.append(li);
// });

// // ul.addEventListener('click' , e => {
// //     console.log(e.target); // if i click on any li the event will bubble up
// //     // and trigger the event listner of the ul and e.target will print li
// //     //even though no event listner has been attached to the li !!!!
// // })

// ul.addEventListener('click' , e => {
//     if(e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// })


//* Create and Remove Elements
// const ul = document.querySelector('ul');
// // ul.remove()

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'Something newww..';
//     ul.append(li);
//     ul.prepend(li);
// });

// const items = document.querySelectorAll('li');
// items.forEach((item) => {
//     item.addEventListener('click', (e) => { // Adds an event to the element referenced
//         e.target.remove();
//     })
// })


//* Eventsss
// const button = document.querySelector('button');
// button.addEventListener('click', () => console.log('clicked hehe'));

// const items = document.querySelectorAll('li');
// items.forEach((item) => {
//     item.addEventListener('click', (e) => { // Adds an event to the element referenced
//         e.target.style.textDecoration = 'line-through'
//     })
// })


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


