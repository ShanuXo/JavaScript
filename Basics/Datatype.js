"use strict" // treat all JS code as newer version
// alert(3+3); // We are using Nodejs not browser
//www.tc39.es
let name="Shanu"
let age=18
let isLoggedIn=true
console.table([name,age,isLoggedIn])

/* Primitive Datatype
Number = 2 to power 53
bigint
string =""
boolean = true/false
null= standalone value(null is basically representation of empty value)
undefined
symbol(to find uniqueness)
*/

/* Object

*/
console.log(typeof "Shanu");
console.log(typeof null);
console.log(typeof undefined);

// Dataype conversion and Operation
let score="33"
console.log(typeof score)
//using method
console.log(typeof(score))

// **********************Typecast : Coversion*******************

let score2="33abc"
let valueInNumber=Number(score2)
console.log(typeof valueInNumber) //output number
console.log(valueInNumber)//output NaN(Not an Number)

let score3=undefined
let value=Number(score2)
console.log(typeof value) //output number
console.log(value)//output NaN(Not an Number)

let bool=true;
let ans=Number(bool)
console.log(typeof ans);
console.log(ans)



let isLoggedInn=1
let boolLoggedIn=Boolean(isLoggedInn)
console.log(typeof boolLoggedIn)
console.log(boolLoggedIn)


let namify="Shanu"
let stringtoboolean=Boolean(namify)
console.log(typeof stringtoboolean)
console.log(stringtoboolean)

// 1 => true
// 0 => false
//"" => false
// "shanu" => true

let numberToString=33
let stringNumber=String(numberToString)
console.log(typeof stringNumber)
console.log(stringNumber)

// ***********************Operation***********************

let val=3
let negval=-val
console.log(negval);
//power
console.log(2**2)
 let str1="Hello"
 let str2=" Shanu"
 console.log(str1+str2);
 console.log("1"+2)//Output = 12
 console.log(1+"2") // Output = 12
//  what if 
console.log("1"+2+2)// output = 122
console.log(1+2+"2") //output = 32

console.log(true) //output = 1
console.log(+true)//output = 1
// console.log(true+)//output = error 

//Increment and Decrement
let a=3
let x=a++;
console.log(`a:${a}, x:${x}`)

let b=3
let y=++b
console.log(`b:${b},y:${y}`)

// ************************Comparison**********************

console.log("2">1)// Output : true
console.log("02">1)// output : true

console.log(null > 0) //op : false
console.log(null == 0)//Op : false
console.log(null >= 0)//Op : true

console.log(undefined==0)//Op:false

//Strict check :
console.log( "2" === 2) //Op: false

//Primitive datatypes in JS : Number,Symbol,Boolean ,Undefined,Null,Bigint,symbol
//Non-Primitive Datatype in JS (Reference) : Array,Object,Function

//Declare a Symbol

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)

//Declartion of an Arrays
const hero=["Ironman","Shaktiman","Superman"];
//Declartion of Object
let myObj={
    Name:"Shanu",
    Age:22
}
//Declartion of a Function
function myFunc()
{
    console.log("Hi, i am a function")
}
console.log(hero);
console.log(myObj)
console.log(myFunc())
console.log(myFunc)

// *****************Typeof Value of Datatype*******************
/*
Undefined = undefined
Null = object
Boolean = boolean
Number= number
String = string
*/

let ax=null
console.log(typeof ax);


