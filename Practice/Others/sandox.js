// Rest parameter
// Bundle up arguents inside a function into a single array parameter

const double = (...nums) => {
    const double = nums.map((num) => 2 * num);
    return double;
}

console.log(double(1,2,3,4,5,6,7,8,9,10));

// Spread syntax (Arrays)
// Spread them into their individual components

const people = ['shaun' , 'ryu' , 'crystal'];

console.log(...people);

const memebers = ['mario' , 'luigi', ...people];

console.log(memebers);

// Spread syntax (Objects)

const person = {
    name : 'shaun',
    age: 30,
    job: 'net'
}

const personClone = {...person}; // Entirely new copy!

console.log(personClone);

