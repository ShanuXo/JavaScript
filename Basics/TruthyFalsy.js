const usereEmail="shanu@google.com";
if(usereEmail)
{
    console.log("Got user Details");
}else{
    console.log("Don't have user Details");
}

console.log("Using Array");

const userEmail=["shanu@google.com","ai@gmail.com"];
if("ai@gmail.com"===userEmail[1])
{
    console.log(`Got ${userEmail[1]} Details`);
}else{
    console.log("Don't have user Details");
}