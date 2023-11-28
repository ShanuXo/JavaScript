// Let and Const declartions are Hoisted
// Let and Const are in temporal dead zone for time being
// Let is bit more stricter than var
/* 
Temporal Dead Zone : Is the time since when this let variable was hoisted and till it was initilaize with some value;
once the variable is in Temporal dead zone , we cannot accesss that variable .

In Simple Word : Time bewteen Hoisting of a variable and till we give it any value;
*/ 

//console.log(a);// OP : Cannot access 'a' before initialization
console.log(b); // Op : undefined
let a=10;
var b=100;

/*
var b=100
window.b // OP :100 

let a=10
window.a // OP:undefined
*/