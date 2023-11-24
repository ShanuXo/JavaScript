const name="Shanu"
const age=22
//String Interpolation
console.log(`My name is ${name.toUpperCase()} and my age is ${age}`)

const sb=new String("Kumar Shanu")
console.log(sb)
console.log(sb[0])
console.log(sb[1])
console.log(sb[2])
console.log(sb[3])
console.log(sb[4])
//To find Object
console.log(sb.__proto__)
console.log(sb.length)
console.log(sb.charAt(2))
console.log(sb.indexOf('S'))

const ans=sb.substring(0,5);//0->4
const res=sb.slice(-5,8)
console.log(res)
console.log(ans)

const url="https://shanu.com"
console.log(url.replace('shanu','google'))


