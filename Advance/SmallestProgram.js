// Global Scope : Anything which is outside the function is known as global Space  
 
let x=10;
function a ()
{
    let a=10
    console.log(`Value of a : ${a}`)
}
console.log(x)
//console.log(window.x)
console.log(a());