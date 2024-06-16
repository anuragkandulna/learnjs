//singleton
// object.create


// object literal
const mySym = Symbol("key2")


const userOne = {
    name: "Anurag",
    "user name": 'pirateslayer23',
    age: 10,
    location: "rnc",
    isLoggedIn: false,
    days: ["Mon", "Tue"],
    [mySym]: "my symbol 1"
}

// console.log(userOne.name)
// console.log(userOne["name"])
// console.log(userOne["user name"])
// console.log(typeof userOne[mySym])

userOne.name = "Player One"
// Object.freeze(userOne)
userOne.name = "Player 2"

console.log(userOne)

userOne.greeting = function(){
    console.log("Hello there!!")
}

userOne.greeting2 = function(){
    console.log(`This is 2nd greeting ${this.name}`)
}

console.log(userOne.greeting)
console.log(userOne.greeting2)
