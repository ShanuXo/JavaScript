// <,>,<=,>=,==,!=,===,!== - Assignment operators

const isUserLoggedIn=true;
if(isUserLoggedIn)
{
    console.log(`Hello World`);
}
const ans=3!=2;
console.log(ans);
//Strict Checking(===)
if(2==='2')
{
    console.log("Executed");
}else{
    console.log("Not Executed");
}

function add(num1,num2)
{
    var sum=num1+num2;
    return sum;
}

console.log(add(5,6));

const score=300;
if(score > 100)
{
    let power="fly";
    console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`);

const isloggedIn=true;
const debitCard=true;
const loggedinFromPhone=false;
const loggedinFromEmail=true;

if(isloggedIn && debitCard)
{
    console.log("Allow to buy course");
}
if(loggedinFromPhone || loggedinFromEmail)
{
    console.log("Login Successfully");
}
