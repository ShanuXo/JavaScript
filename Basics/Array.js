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



let arr=[1,2,3,4,5,6,7,8,9]
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
 console.log(arr);
console.log(`A : ${arr}`)
 const a1=arr.slice(1,3)
 console.log(`New array ${a1}`);
 //Splice : for adding, deleting or any modification in an array
 console.log("Splice")
 const a2=arr.splice(0,3)
 console.log(`New Array ${a2}`);

 //Array: Part 2
 const marvel=["Ironman","Spiderman","Thor"]
 const dc=["Superman","Batman","Flash"]
 //marvel.push(dc);// OP ; [ 'Ironman', 'Spiderman', 'Thor', [ 'Superman', 'Batman', 'Flash' ] ]

 const str=marvel.concat(dc)//OP :[ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'Batman', 'Flash' ] 
 //console.log(marvel);
 console.log(str);

 // SPREAD Operator
 const allHero=[...marvel,...dc]
 console.log(allHero);

 const newarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const useablenewArray=newarray.flat(Infinity);
console.log(useablenewArray);/*OP:[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ] 
  */

  // Convert the object into array
console.log(Array.isArray("Shanu"))
console.log(Array.from("Shanu"))
console.log(Array.from({name:"shanu"}))//Interview

let score1=100;
let score2=200;
let score3=300;
let score4=400;
console.log(Array.of(score1,score2,score3,score4));


