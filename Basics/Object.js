// Object can be declare in two ways , 1.Literals, 2.Constructor
// Singleton
//Object.create
//Object Literals

const mySymbol=Symbol("key1");


const  jsUser={
    name:"Shanu",
    "full name":"Shanu kumar",
    age:22,
    [mySymbol]:"MySymbol Test",
    //mySymbol:"mySymbol Test",
    company:"GlobalLogic"
}
//First 
console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser.company);
console.log(jsUser.age);
//Second
console.log(jsUser["name"])
console.log(jsUser["full name"])
console.log(jsUser[mySymbol]);// It will give the required output but the concept of Symbol is not being used properly
// console.log(typeof jsUser.mySymbol);

// Change value in Object

jsUser.email="shanusah8001@gmail.com/";
console.log(jsUser);

// If you no one can change the value of the object : we can use Object.freeze() method

// Object.freeze(jsUser);
// jsUser.email="test@gmail.com";
// console.log(jsUser);

jsUser.greeting=function()
{
    console.log("Hello Object");
}

// we use `` for string exploatation

jsUser.greetingtwo=function()
{
    console.log(`Hello Object, ${this["full name"]}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());




