//In JavaScript array can contains multiple datatype in a single array
let myArr=[1,2,3,4,5]
console.log(myArr);
myArr.push(6);
myArr.push(7);//insert at last
myArr.unshift(9);//Insert at first step
myArr.shift();
myArr.pop()
console.log(myArr);

//Shallow Copy:
/*
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.
Example code : 
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]

*/

/*
Deep Copy :
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.

Example Code : 

const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));

*/



let arr=[1,2,3,4]
console.log(arr.includes(5));
console.log(arr.indexOf(4));
console.log(arr.indexOf(9));

//Array to String

 let newArr=arr.join();
 console.log(arr)
 console.log(newArr)
 console.log(typeof newArr)


 //Slice and Splice
 console.log("Slice");
console.log(`A : ${arr}`)
 const a1=arr.slice(0,3)
 console.log(`New array ${a1}`);
 //Splice
 console.log("Splice")
 const a2=arr.splice(0,3)
 console.log(`New Array ${a2}`);
