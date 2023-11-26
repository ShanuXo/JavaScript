// ******************************Dates********************************

let myDate=new Date()
console.log(myDate); // Op: 2023-11-26T13:08:13.722Z
console.log(String(myDate));//Op : Sun Nov 26 2023 13:08:13 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toString());// Op : Sun Nov 26 2023 13:08:13 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Op: Sun Nov 26 2023
console.log(myDate.toLocaleString());//Op: 11/26/2023, 1:10:50 PM
console.log(myDate.toDateString())//Op: Sun Nov 26 2023
console.log(typeof myDate);

//Lets create our own date

let cretaedDate=new Date(2023,0,23)
console.log(cretaedDate); // OP : 2023-01-23T00:00:00.000Z
console.log(cretaedDate.toString());// op: Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(cretaedDate.toDateString()); // OP : Mon Jan 23 2023


let createDate2=new Date(2023,0,23,5,3)
console.log(createDate2.toLocaleString()) //OP :1/23/2023, 5:03:00 AM 

// Date in form of "YYYY-MM-DD"
let x=new Date("04-10-2000")
console.log(x.toLocaleString()) //OP : 10/4/2000, 12:00:00 AM
console.log(x.toDateString()) //OP : Wed Oct 04 2000

// ****************************Time*****************************
let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(x.getTime())

//comparison
console.log(myTimeStamp/1000) 
console.log(Math.floor(myTimeStamp/1000))

 let newDate=new Date()
 console.log(newDate)
 console.log(newDate.getDay()+1)
 console.log(newDate.getMonth())

 newDate.toLocaleString('default',
 {
    weekday:"long"
 })
