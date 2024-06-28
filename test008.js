// Loops

// for of
const arr = [1,2,3,3,5,6,7]

// for (const num of arr) {
//     console.log(num)
// }


// Maps
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

// this prints key-value within an array
for (const key of map) {
    // console.log(key)
}

// deserialize array within the map
for (const [key, value] of map) {
    // console.log(key, ':', value)
}

// NOTE: only maps are iteratable. objects are not iteratable using above procedure. 
const names = {
    n1: 'james bond',
    n2: 'tom cruise',
    n3: 'johnny depp'
}
// this will fail
// for (const key of names){
//     console.log(key)
// }

for (const key in names){
    console.log(`${key} has value ${names[key]}`)
}

// test for in in arrays
for (const key in arr) {
    console.log(`${key} is the index and ${arr[key]} is the value in array`)
}

// NOTE: For-in is used on the iterables and For-of is used in non-iterables
