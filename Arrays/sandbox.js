//! Map

const prices = [20, 0, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map((price) => {
    return price / 2;
});

console.log(salePrices);

const products = [
    {name: 'gold star' , price: 20},
    {name: 'mushroom' , price: 40},
    {name: 'green sheels' , price: 30},
    {name: 'banana skin' , price: 10},
    {name: 'red shells' , price: 50}
];

const saleProducts = products.map((product) => {
    return {
        ...product,
        price : product.price > 30 ? product.price / 2 : product.price
    }
})

console.log(saleProducts);

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

