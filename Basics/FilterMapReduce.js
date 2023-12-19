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