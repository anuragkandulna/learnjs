// forEach loops - 3 variations

const lang = ['java', 'c++', 'python', 'javascript']

lang.forEach(element => {
    console.log(element)
});

lang.forEach(function (val) {
    console.log(val)
})

function printMe(item){
    console.log(item)
}

lang.forEach(printMe)