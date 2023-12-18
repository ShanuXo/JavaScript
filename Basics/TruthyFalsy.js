const usereEmail="shanu@google.com";
if(usereEmail)
{
    console.log("Got user Details");
}else{
    console.log("Don't have user Details");
}

console.log("Using Array");

const userEmail=["shanu@google.com","ai@gmail.com"];
if("ai@gmail.com"===userEmail[1])
{
    console.log(`Got ${userEmail[1]} Details`);
}else{
    console.log("Don't have user Details");
}

/*
Falsy Values : false,0,-0,BigInt 0n,"",null,undefined,NaN

Truthy Values: "0",'false'," ",[],{},function(){}
*/

const emptyObject={}

if(Object.keys(emptyObject).length===0)
{
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??)
let value;
value=5 ?? 10;
let value1=null??10;
let value2=undefined??15;
let value3=null??10??15;
console.log(value);
console.log(value1);
console.log(value2);
console.log(value3);


//Terniary Operator
/*
condition ? true : false;
*/

const iceTea=100;
iceTea>=80?console.log("YES"):console.log("NO");