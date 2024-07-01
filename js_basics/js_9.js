// forEach loops - 3 variations

const lang = ['java', 'c++', 'python', 'javascript']

// lang.forEach(element => {
//     console.log(element)
// });

lang.forEach(function (val, index, arr) {
    console.log(val, index, arr)
})

// function printMe(item){
//     console.log(item)
// }

// lang.forEach(printMe)