// *******************SETTIMEOUT***********************
// function x()
// {
//     var i="Shanu"
//     setTimeout(function()
//     {
//         console.log(i)
//     });
//     console.log(`Hey ${i} welcome to Namaste Javascript`);
// }
// x();
// function y()
// {
//     for(let i=0;i<=5;i++)
//     {
//         setTimeout(function()
//         {
//             console.log(i)
//         },i*1000);
//     }
// }
// y();
//Now setTimeout with closure
function a()
{
    var ab="shanu";
    for(var i=0;i<ab.length;i++)
    {
        function closure(i)
        {
            setTimeout(function()
            {
                console.log(ab.charAt(i));
            },i*1000);
        }
        closure(i);
    }
}
a();