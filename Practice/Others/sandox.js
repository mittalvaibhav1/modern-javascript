// Symbols // Primitive data type
//  No two symbols are ever going to be the same
// They might look the same but they are all different;
// Can be used as a key

const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne,symbolTwo,symbolOne === symbolTwo)

// Sets

const namesArray = ['ryu', 'chun-li' , 'ryu', 'shaun'];

console.log(namesArray);

const namesSet = new Set(namesArray); // Only way to create a set

console.log(namesSet);

const uniqueNames = [...namesSet];

console.log(uniqueNames);

// Or

const uniqueNames2 = [...new Set(namesArray)];

console.log(uniqueNames2);

const ages = new Set();

ages.add(1); 
ages.add(2).add(4); // to add elements into a set
ages.delete(2);
console.log(ages,ages.size); // Insetad of .length it has .size
console.log(ages.has(25)); // Boolean value if has that value or not

ages.clear(); // to empty it

// Rest parameter
// Bundle up arguents inside a function into a single array parameter

const double = (...nums) => {
    const double = nums.map((num) => 2 * num);
    return double;
}

//console.log(double(1,2,3,4,5,6,7,8,9,10));

// Spread syntax (Arrays)
// Spread them into their individual components

const people = ['shaun' , 'ryu' , 'crystal'];

//console.log(...people);

const memebers = ['mario' , 'luigi', ...people];

//console.log(memebers);

// Spread syntax (Objects)

const person = {
    name : 'shaun',
    age: 30,
    job: 'net'
}

const personClone = {...person}; // Entirely new copy!

//console.log(personClone);

