let a=10;
var b=20;
const c=30;
console.log(a);
console.log(b);
console.log(c);


var z=50;
let x=10;
if(true)
{
    let x=100;
    const y=200;
    z=300;
    console.log(`Value of X : ${x}`)
}
console.log(x)
//console.log(y)
console.log(z)


var myArry=[1,2,3,4,5]
function sum(myArray)
{
    let sum=0;
    for(let i=0;i<myArry.length;i++)
    {
        sum+=myArray[i];
    }
    return sum;
}
console.log(sum(myArry));
console.log(typeof(typeof(10)))

// *****************Scope Level and Mini Hoisting ******************************

function one()
{
    const username="Shanu";
    function two()
    {
        const website="youtube";
        console.log(username);
        console.log(website);
    }
    //console.log(website);//Op: website is not defined;
    two();
}
one();
