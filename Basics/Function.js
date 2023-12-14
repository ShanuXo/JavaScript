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

//  *********Infinite Number of arguement********
//Rest Operator(...variable)
function calculateCartPrice(...num1)
{
    var sum=0;
    for(let i=0;i<num1.length;i++)
    {
        sum+=num1[i];
    }
    return sum;
}
console.log(calculateCartPrice(200,500,600,800));

const user={
    username:"shanu",
    phoneNumber:"9304641125"
}
function handleObjectinFunction(anyObject)
{
    console.log(`Username is ${anyObject.username} and Phonenumber is ${anyObject.phoneNumber}`);
}
handleObjectinFunction(user);
handleObjectinFunction({
    username:"Shanu Kumar",
    phoneNumber:"123456789"
})

const myArr=[10,20,30,40,50,60];
function returnSecondValue(getArray)
{
    return getArray[1];
}
console.log(returnSecondValue(myArr));
console.log(returnSecondValue([100,200,300,400]));
