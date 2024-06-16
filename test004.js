// Functions

function calculateCartPrice(...num1){
    return num1
}

function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(1, 2, 4, 5, 6))

console.log(calculateCartPrice2(1, 2, 4, 5, 6))

const arr = [100, 200, 300, 500]

function getSecond(myarr){
    if (myarr.length >= 2) {
        return myarr[1]
    }
    return -1
}

console.log(getSecond(arr))