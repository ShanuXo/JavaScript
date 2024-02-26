/*
Synchronous - > One after the other sequentially , Only one task is executed at a time.
Asynchronous -> Multiple things are context switching with each other.
*/

/*
Ques -> Can JS delegate? Can JS context Switch?
Ans -> Yes ! Using Asynchronous Function
*/

function findSum(n)
{
    let sum=0;
    for(let i=0;i<n;i++)
    {
        sum+=i;
    }
    return sum;
}

function findSumTill100()
{
    console.log(findSum(100));
}

//Async Function
setTimeout(findSumTill100,1000);
console.log("Hi Async Function")

//busy waiting i.e Synchronous Function
function syncSleep()
{
    let a=1;
    for(let i=0;i<100000000;i++)
    {
        a++;
    }
}
syncSleep();
console.log("Sync Function");

/*
What are the common async functions ?
1. setTimeOut
2. fs.readFile - > to read a file from your fileSystem.
3. Fetch - > to fetch some data from an API endpoint

*/

// const fs = require("fs");
// fs.readFile("a.txt","utf-8", function(err,data)
// {
//     console.log(data);
// })

setTimeout(function()
{
    console.log("Hi from 40000 sec Async Function");
},4000);
setTimeout(function()
{
    console.log("Hi from 6000 sec Async Function");
},6000);

// PROMISE

// Promises are SYNTACTICAL SUGAR that make this code slightly more readable

/* 
Ques -> How can we create an asynchronous function of our own
Ans -> We can just create a wrapper on top of another async function, which is fine, Usually all async functions you will write will be on top of JS provided async functions like setTimeOut or fs.readFile
*/


const fs=require('fs');

function asyncFunctionShanu(callback)
{
    fs.readFile("a.txt","utf-8", function(err, data)
    {
        callback(data);
    });
}

function doneShanu(data){
    console.log(data);
}

asyncFunctionShanu(doneShanu);

