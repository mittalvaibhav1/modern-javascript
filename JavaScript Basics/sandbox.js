const para = document.querySelector('p'); //returns a single element
//Returns the first element that matches the query
console.log(para);

const para2 = document.querySelector('p.error'); //filter by class 
console.log(para2);

const allParas = document.querySelectorAll('p'); //returns multiple elements 
//Returns all the elements that matches the query
console.log(allParas);

allParas.forEach((para) => console.log(para)); //NodeList Array...