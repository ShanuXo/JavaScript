let x=1;
a()//Global Execution Control
b()//Global Execution Control
console.log(x)
function a()
{
    let x=10
    console.log(x);
}
function b()
{
    let x=100
    console.log(x);
}

/*
Output :
10
100
1
*/


