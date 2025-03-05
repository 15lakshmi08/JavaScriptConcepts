// singleton
// Object.create

// object literals

const symbol = Symbol("key1")


const User = {
    name: "Lakshmi",
    "full name": "Lakshmi Singh",
    [symbol]: "mykey1",
    age: 18,
    location: "Lucknow",
    email: "lakshmi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(User.email)
// console.log(User["email"])
// console.log(User["full name"])
// console.log(User[symbol])

User.email = "lakshmi@gmail.com"
// Object.freeze(User)
User.email = "lakshmi@microsoft.com"
// console.log(User);

User.greeting = function(){
    console.log("Hello JS user");
}
User.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

User.greeting();
User.greetingTwo();