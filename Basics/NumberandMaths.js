// **************************Numbers********************************
const score=400
console.log(score)
console.log(typeof score)

const score1=new Number(100)
console.log(score1)
console.log(typeof score1)
console.log(score1.toString().length);
console.log(score1.toFixed(2));

const x=28.98765
console.log(x.toPrecision(5))

const y=2812.8796
console.log(`y : ${y.toPrecision(2)}`)

const hundred=1000000
console.log(hundred.toLocaleString())
console.log(hundred.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)

// ***************************MAths************************

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.abs(4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.8))
console.log(Math.min(4,3,2,1))
console.log(Math.max(4,3,2,1))

console.log((Math.random()*10)+1)

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))