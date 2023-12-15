//IIFE - Immediately Invoked Function Expressions
//We use IIFE to overcome the difficulties of Global variable or method pollution;

//Normal Function 
function normal()
{
    console.log("Hello World");
}
normal();
//Using IIFE

(function iife()
{
    console.log("Hello Shanu");
})();
//to stope the first immediate IIFe function we use (";")

//Using IIFE with arrow function

(() => {
    console.log("Hello Kumar");
})();

((name) => {
    console.log(`Hello ${name}`);
})('Shanu Kumar');