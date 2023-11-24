/*There are two type of Memory 
1. Stack(Primitive datatype)
2. Heap(Non-Primitive datatype)
*/

//Stack Memory : We get a copy 
let email="Shanu@gmail.com"
let anotheremail=email
anotheremail="test@gmail.com"
console.log(email)
console.log(anotheremail)
//Heap Memory : We get reference
let user1 ={
    email:"shanu1@gmail.com",
    upi:"test@ybl"
}
let user2=user1;
// user2.email="dfakdfh@gmnail.com"
console.log(user1.email)
console.log(user2.email)
user2={
    email:"shanu2@gmail.com",
    upi:"test2@ybl"
}
user2.email="xyz@gmail.com"
user1.email="abc@gmail.com"
console.log(user1)
console.log(user2)
