//Hoisting in JS , we are accessing or calling a function or a variable before its initialization :

getName();
console.log(x);
console.log(getName)
var x=4
function getName()
{
    console.log("Hi, my name is Shanu");
}
// getName();
// console.log(x);
// console.log(getName)
//#-rd way to represent a function
var getName2 = function () {
}


//Call Stack
function getName3()
{
    console.log("Call stack debug")
}