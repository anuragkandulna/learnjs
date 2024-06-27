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
    console.log(key)
}

// deserialize an array
for (const [key, value] of map) {
    console.log(key, ':', value)
}
