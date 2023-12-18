const nums=[1,2,3,4,5,6,7,8,9,10]
for(let index=0;index<nums.length;index++)
{
    let ele=nums[index];
    console.log(ele);
}
for(let i=0;i<=3;i++)
{
    console.log(`Outer loop value ${i}`);
    for(let j=0;j<=3;j++)
    {
        console.log(`Inner loop value ${j} for outer loop value ${i}`);
    }
}

//break and continue;
for(let i=0;i<=5;i++)
{
    if(i==2)
    {
        console.log("found");
        break;
    }
    console.log(i);
}
for(let i=0;i<=5;i++)
{
    if(i==2)
    {
        console.log("found");
        continue;
    }
    console.log(i);
}

//While Loop :
console.log("hi");
function sum(n)
{
   let sum=0;
  while(n != 0)
  {
    let rem=n%10;
    sum=(sum)+rem;
    n=n/10;
   }
return sum;
} 
console.log(sum(54898));

// do while loop
let score=1;

do{
    console.log(`Score is ${score}`);
    score++;
} while(score <= 10);


// High Order Array Loops

const array=[1,2,3,4,5,6]
for(const num of array)
{
    console.log(num);
}
const greetings="Hello Xo Tech Programming"
for (const greet of greetings) {
    if(greet===" ")
    {
        continue;
    }
    console.log(`Each char is ${greet}`);
}


//Maps
const maps=new Map();
maps.set('a',1);
maps.set('b',2);
console.log(maps);
