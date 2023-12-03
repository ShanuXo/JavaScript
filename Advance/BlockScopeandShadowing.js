{
    //Block is known as :COMPOUND STATEMENT
    let a=10;
    console.log(a)
}
{
  let b=10
  var c=20
  const d=30  
}
// console.log(`C : ${c}`)
// console.log(`B : ${b}`)

// console.log(`D : ${d}`)

/*
Let and Const are block Scoped:Memory is assigned to them in their own block scoped memory
Var are Global Scoped
*/


// *************************SHADOWING*****************************

var x=100;
let y=200;
{
    var x=10;
    let y=20;
    const z=30;
    console.log(x)
    console.log(y)
    console.log(z)
}
console.log(x)
console.log(y)

// *****************Illegal Shadowing********************
console.log("Illegal Shadowing")
var p=100;
function func(){
    let p=10;
    console.log(p)
}
func()
console.log(p);