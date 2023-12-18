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