// ********Function In JS*****************
function sayMyName()
{
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("u");
}
sayMyName();

function addTwoNumber(num1,num2)
{
    console.log(num1+num2);
}
addTwoNumber(3,4);
addTwoNumber(3,"4");
addTwoNumber(3,null);
addTwoNumber(3,"a");
 const result=addTwoNumber(3,5);
 console.log(result);

 function addTwoNumber2(num1,num2)
 {
    let ans=num1+num2;
    return ans;
 }
 const ans=addTwoNumber2(5,5);
 console.log(ans);

 function login(username)
 {
    return `${username} just logged in`;
 }
 console.log(login("shanu"));

 function loginUser(username)
 {
    if(!username)
    {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
 }
 console.log(login("shanu"));
 console.log(loginUser());