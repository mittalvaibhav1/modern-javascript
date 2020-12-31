//DOM  Manipulation

const para = document.querySelector('p');
console.log(para.innerHTML);

para.innerHTML = 'Amazing hehe'

const paras = document.querySelectorAll('p');

paras.forEach((para) => {
    console.log(para.innerHTML);
    para.innerHTML += '  wheeeeeeeee' 
})

const content = document.querySelector('div.error');
console.log(content.innerHTML);
content.innerHTML += "<h2> Hello, How are you today?";

const people = ['mario','luigi','yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})



//To Query the DOM

// const para = document.querySelector('p'); //returns a single element
// //Returns the first element that matches the query
// console.log(para);

// const para2 = document.querySelector('p.error'); //filter by class 
// console.log(para2);

// const allParas = document.querySelectorAll('p'); //returns multiple elements 
// //Returns all the elements that matches the query
// console.log(allParas);

// allParas.forEach((para) => console.log(para)); //NodeList Array...

// //Other Methods... 

// const title = document.getElementById('page-title'); //returns a single element with given ID
// console.log(title);

// const errors = document.getElementsByClassName('error'); //returns an array of HTMLCollection with given class.
// console.log(errors);
// //errors.forEach((error) => console.log(error));// Cannot use forEach with HTMLCollection. Will give an error.

// const paras = document.getElementsByTagName('p');
// console.log(paras);


