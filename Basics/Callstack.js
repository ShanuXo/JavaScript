console.log(this); // OP : {} -global Execution Context
// Javascript Execution Context
//1.Global Execution Context
//2.Function Execution Context
//3.Eval Execution Context(Optional)


/*
{} -> Memory Execution Phase
   -> Execution Phase
*/

let val1=10;
let val2=20;
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function add(num1,num2)
{
    return num1+num2;
}
console.log(add(val1,val2));
console.log(add(1,2));
/*
Memory Phase
val1=undefined
val2=undefined
addNum=defination
result1=undefined
result2=undined
*/