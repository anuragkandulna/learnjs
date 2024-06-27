## Phases of JS code execution

1. Global Execution Context -> this
2. Function Execution Context
3. Eval Execution Context (This is part of 1. But executed after step 2.)

## What happens to JS code 
{} => 1. Memory Creating Phase
      2. Execution Phase

### Example with code
let var1 = 10
let var2 = 6
function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let res1 = addNum(var1, var2)
let res2 = addNume(4, 5)

1. Global Context => this
2. Memory Phase - Collect all variables and store it
    var1 = undefined
    var2 = undefined
    addNum = defination
    res1 = undefined
    res2 = undefined
3. Execution Phase
    var1 = 10
    var2 = 5
    addNum = {} - new variable environment + execution thread (new execution context)
        i. Memory Phase - new context for function addNum
            val1 = undefined
            val2 = undefined
            total = undefined
        ii. Execution Phase - for function addNum
            val1 = 10
            val2 = 6
            total = 16
            return total to Global Execution Context
            DELETE THE FUNCTION CONTEXT
    
    res1 = 16

    addNum = {} - new variable envionment + execution thread
    <truncated>
    res2 = 9

