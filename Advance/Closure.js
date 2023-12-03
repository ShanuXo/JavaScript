/*
 A Closure is the combination of a function bundled together(enclosed),
 with references to its surrounding state(the lexical environment).
 In other words,a closure gives you access to an outer function's scope
 from an inner function.In javscript,closures are created every time a 
 function is created,at a function creation time.
 */

 /*
 Uses Case of Closure:
  1.Module Design pattern
  2.Currying
  3.Functions like once
  4.memoize
  5.maintaining state in async world
  6.setTimeouts
  7.Iterators
 */
function z()
{
    var b=100
function x()
{
    var a=10;
    function y()
    {
        console.log(a,b)
    }
    y();
}
x();
}
z();


function a()
{
    var a1=10;
    function b()
    {
        console.log(a1);
    }
    var a1=100
    return b;
}
var c=a();
console.log(c);
c();