// Older method before classes

// Constructor function 

function User(username,email) {
    this.username = username;
    this.email = email;
}
User.prototype.login = function() {
    console.log(this.username + "Logged in");
}
const user1 = new User('Mario', 'mario@mamamia.net'); // Instance
console.log(user1);
user1.login();


const user2 = new User('Luigi', 'itsluigi@mamamia.net'); // Instance
console.log(user2);


// Prototype Model // Every object in javaScript has a protoype
// prototype contians all the methods for that object type

//Prototype inheritance

function Admin(username,email,role) {
    User.call(this,username,email);
    this.role = role;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.del = function() {
    console.log('Hi');
}
const user3 = new Admin('yoshi','abc@def.com','mentor'); 
console.log(user3);



// Object Literals

// const userOne = {
//     username : 'goku',
//     email : 'goku@dbs.anime',
//     login() {
//         console.log('User logged in');
//     },
//     logout() {
//         console.log('User logged out');
//     }
// }

// const userTwo = {
//     username : 'vegeta',
//     email : 'princevegeta@dbs.anime',
//     login() {
//         console.log('User logged in');
//     },
//     logout() {
//         console.log('User logged out');
//     }
// }

// console.log(userOne , userTwo);

// // To create more users this way , we will need to type the same code again
// // and again.
// // That's why we use classes , to increase the code re-usability.

// // Classes

// class User {
//     constructor(username , email) { // Set up properties
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     login = () => {
//         console.log(`${this.username} just logged in`);
//         return this;
//     }
//     logout()  {
//         console.log(`${this.username} just logged out`);
//         return this;
//     }
//     incScore () {
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }
// }

// // the 'new' keyword
// // 1 - It creates a new empty object { }
// // 2 - It binds the value of 'this' to the new empty object
// // 3 - It calls the constructor function to 'build  the object

// const user1 = new User('Mario', 'mario@mamamia.net'); // Instance
// console.log(user1);
// user1.login().incScore().incScore().incScore().incScore().incScore().incScore().incScore().logout();

// const user2 = new User('Luigi', 'itsluigi@mamamia.net'); // Instance
// console.log(user2);
// user2.login();
// user2.logout();

// // Sub classes

// class Admin extends User {
//     constructor(username,email,role) {
//         super(username,email);
//         this.role = role;
//     }
//     deleteUser(user) {
//         users = users.filter((u) => {
//             return u.username != user.username;
//         })
//     }
// }

// const user3 = new Admin('yoshi','yoshiboi@mamamia.net','mentor');
// console.log(user3);

// let users = [user1,user2,user3];
// console.log(users);

// user3.deleteUser(user2);

// console.log(users);