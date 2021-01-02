//! Sort

//* Strings

const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort(); // manipulates the orignal array
names.reverse(); // to reverse the array

console.log(names); // sorts lexographically

//* Numbers

const scores = [10, 50, 20, 5, 25, 70, 45];

scores.sort(); // still sorts lexographically!!!

console.log(scores);

scores.sort((a,b) => {
    return a - b;
});

console.log(scores); // sorts normally!

//* Objects

const players = [
    {name: 'mario' , score: 20},
    {name: 'luigi' , score: 10},
    {name: 'chun-li' , score: 50},
    {name: 'yoshi' , score: 30},
    {name: 'shaun' , score: 70}
];

players.sort((a,b) => {
    return b.score - a.score;
});

console.log(players);


//! Find

// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// const result = scores.find((score) => {
//     return score > 50;
// });

// console.log(result);

//! Reduce

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((accumulator, current) => {
//     if(current > 50) accumulator++;
//     return accumulator;// returned value passed to the next accumulator;
// }, 0); // 2nd argument initial Value of accumulator;

// console.log(result);

// const scores = [
//     {player: 'mario' , score: 50},
//     {player: 'yoshi' , score: 30},
//     {player: 'mario' , score: 70},
//     {player: 'crystal' , score: 60},
// ];

// const result = scores.reduce((totalScore , score) => {
//     if(score.player === 'mario') totalScore += score.score;
//     return totalScore;
// }, 0); 

// console.log(result);

//! Map

// const prices = [20, 0, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map((price) => {
//     return price / 2;
// });

// console.log(salePrices);

// const products = [
//     {name: 'gold star' , price: 20},
//     {name: 'mushroom' , price: 40},
//     {name: 'green sheels' , price: 30},
//     {name: 'banana skin' , price: 10},
//     {name: 'red shells' , price: 50}
// ];

// const saleProducts = products.map((product) => {
//     return {
//         ...product,
//         price : product.price > 30 ? product.price / 2 : product.price
//     }
// })

// console.log(saleProducts);

//! Filter

// const scores = [10, 30, 15, 25, 50, 40 ,5];

// const res = scores.filter((item) => {
//     return item >= 20; // return true if you want to keep it
// });

// console.log(scores,res);

// const users = [
//     {name: 'shaun' , premium: true},
//     {name: 'yoshi' , premium: false},
//     {name: 'mario' , premium: false},
//     {name: 'chun-li' , premium: true}
// ]

// const premiumUsers = users.filter((user) => {
//     return user.premium;
// })

// console.log(premiumUsers);

