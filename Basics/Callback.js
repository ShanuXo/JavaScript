console.log("Hi callback");
/*
Ques -> Can you call one function inside another function?
Ans -> Yes
*/

function square(n)
{
    return n *n;
}

function cube(n)
{
    return n * n * n;
}

function sumOfSquare(a,b)
{
    const num1=square(a);
    const num2=square(b);

    return num1+num2;
}

function sumOfCube(a,b)
{
    const num1=cube(a);
    const num2=cube(b);

    return num1+num2;
}
//Violate the DRY rule;
console.log(sumOfCube(5,6))
console.log(sumOfSquare(5,6));
//To overcome this :

function sumOfSomething(a,b,callback)
{
    console.log(a);
    console.log(b);
    console.log(callback);

    const num1=callback(a);
    const num2=callback(b);

    return num1+num2;
}

console.log(sumOfSomething(5,6,square));
sumOfSomething(a,b,function cube2(n)
{
    return n*n*n;
})





