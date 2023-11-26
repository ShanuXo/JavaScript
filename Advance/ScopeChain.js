function a()
{
    c();
    //console.log(b);
    function c()
    {
        console.log(b);
    }
}
let b=10;
a();//OP : 10
//console.log(a())// OP: 10 undefined
