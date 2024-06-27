// Arrow functions

const user = {
    username: "anurag",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`)
    }
}

// console.log(user.welcomeMessage())
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

function player(){
    let username = "anurag"
    console.log(this.username)

    // this does not work in functions. it works only on objects.
}
player()

const demo = function(){
    let username = "anurag"
    console.log(this.username)

    // this does not work in functions. it works only on objects.
}
demo()