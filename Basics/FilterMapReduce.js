const coding=["Java","C++","Javascript","Python"]

coding.forEach((item)=>{
    console.log(item);
})

// const values=coding.forEach((item)=>{
//     return item;                         // OP : Undefined
// })
// console.log(values);

const myArr=[1,2,3,4,5,6,7,8,9,10];

// const newValue=myArr.filter((num)=> num >= 4)
const newValue=myArr.filter((num)=> {
    return num >= 4
})

console.log(newValue);

const newArr=[];
myArr.forEach((num)=>{
    if(num >= 8)
    {
        newArr.push(num);
    }
})
console.log(newArr);

const books=[
    {title:'Book 1',genre:'Fiction',price:139},
    {title:'Book 2',genre:'Non-Fiction',price:169},
    {title:'Book 3',genre:'Science',price:149},
    {title:'Book 4',genre:'Fiction',price:159},
    {title:'Book 5',genre:'Fiction',price:179},
    {title:'Book 6',genre:'History',price:189}
];

let userBooks=books.filter((bks)=> {
    if(bks.genre==='Fiction')
    {
        return bks.price;
    }
});
console.log(userBooks);

let user2=books.filter((bks)=>{ return bks.price>159 && bks.genre==='Fiction'})
console.log(user2);

//Map in JS

const myNumber=[1,2,3,4,5,6,7,8,9,10];
// const newNums=myNumber.map((num)=> num+10)
const newNums=myNumber.map((num)=> {return num+10})

console.log(newNums);

//Chaning in js

const chain=myNumber
                    .map((num)=> num*10)
                    .map((num)=>num+1)
                    .map((num)=> num*2)
                    .filter((num)=> num>=39);
console.log(chain);

/*Reduce in JS : The reduce() method executes a user-supplied "reducer" callback
function on each element of the Array,in order,passing in the return value from the calculation on the preceding element.
*/


const arr2=[1,2,3,4,5];

const myTotal=arr2.reduce(function (accumulator,currentvalue) {
    console.log(`Accumulator : ${accumulator} and CurrentValue : ${currentvalue}`)
    return accumulator+currentvalue
},0)//here 1 is accumulator ka value;
console.log(myTotal);
//Arrow Function
const myTot=arr2.reduce((acc,curr)=> acc+curr,0);
console.log(myTot);


const shoppimgCart=[
    {
        itemName:"Mastery JS",
        price:199
    },
    {
        itemName:".NET Development",
        price:899
    },
    {
        itemName:"DSA",
        price:1999
    },
    {
        itemName:"MERN Stack",
        price:599
    },
    {
        itemName:"Mobile Development",
        price:2999
   },
    {
        itemName:"Data Science",
        price:2999
    }
];

const priceToPay=shoppimgCart.reduce((accumulator,item)=>accumulator+item.price,0);
console.log(priceToPay);


const arr = [5,1,3,2,6];

function double (n)
{
    return n*2;
}
function triple (n)
{
    return n*3;
}

// function binary(n)
// {
//     return n.toString(2);
// }
const newArray = arr.map(double);
const newArray2 = arr.map(triple);
const newArray3 = arr.map((x) => x.toString(2));//passing anonymous function

console.log(newArray);
console.log(newArray2);
console.log(newArray3);
