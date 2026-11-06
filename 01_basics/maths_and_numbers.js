// // const score=200//it automatically detects that its a number data type 
// // console.log(score)
// //output=200

// const score=new Number(12.97)
// console.log(score)//here we are explicitly specifying that it is a Number data type using new keyword 
// //output=[Number: 100]

// console.log(score.toString().length)
// console.log(score.toPrecision(3))
// console.log(score.toFixed(1))


// const hundreds=1000000000
// console.log(hundreds.toLocaleString('en-IN'))//put commas based in indian numbering system

//+++++++++++++++++++++MATHS+++++++++++++++++++++//
// console.log(Math)
// console.log(Math.abs(-1))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.99))//there are many such methods in js
// console.log(Math.min(2,3,4,4,5,3,2))
// console.log(Math.max(2,3,4,4,5,3,2))

console.log(Math.random())//gives random between 0 and 1
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min)+min))
