const scores = [10, 30, 15, 25, 50, 40 ,5];

const res = scores.filter((item) => {
    return item >= 20; // return true if you want to keep it
});

console.log(scores,res);

const users = [
    {name: 'shaun' , premium: true},
    {name: 'yoshi' , premium: false},
    {name: 'mario' , premium: false},
    {name: 'chun-li' , premium: true}
]

const premiumUsers = users.filter((user) => {
    return user.premium;
})

console.log(premiumUsers);