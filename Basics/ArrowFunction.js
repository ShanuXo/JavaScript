//this keyword tells us about the current context
const user={
    username:"Shanu",
    price:199,
    welcomeMessage: function()
    {
        console.log(`Welcome ${this.username} to our website`);
        console.log(this);
    }
}
//console.log(user.welcomeMessage());// OP : Undefined
console.log(this);
user.welcomeMessage();
user.username="Siddhant";
user.price=769;
user.welcomeMessage();

//In browser the global object is : Window

// *********************Arrow Function **********************

function xo()
{
    let user="Admin"
    console.log(this.user);//we cant access this inside an function//OP : undefined
}
xo();

const xo2=()=>{
    let user="Admin";
    console.log(this);//Undined
}
xo2();

// With or without return keyword;
//Explicit Return
const add=(num1,num2)=>{
    return num1+num2;
}
console.log(add(1,2));

//Implicit Return
const multiply = (num1,num2) => (num1*num2);
console.log(multiply(3,4));

const name=(num1,num2) => ({username:"test"})
console.log(name(1,2));
