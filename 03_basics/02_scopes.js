let a=100
// if(true){
//     let a=10
//     const b=20
//     console.log("INNER ",a)
// }
// console.log(a)//error
// console.log(b)//error
// console.log(c)//30 this is why we wont use var cause it wont follow block scope/global scope rules 
// console.log(a)//100

function one(){
    const myname="vaibhav"
    function two(){
        const website="google"
        console.log(myname)
    }
    //console.log(website)//error cause child function can access parents function varibles and vice versa cant happen
    two();
}
//one()
if(true){
    const myname="vaibhav"
    if(myname==="vaibhav"){
        const website=" leetcode"
        console.log(myname+website)
    }
}
//console.log(myname)
console.log(addone(5))//here we can call function before its declaration
function addone(num1){
    return num1+1
}
// addtwo(3)//here it gives error saying cannot access before its declaration this happens because of hoisting(will learn in depth later about hoisting)
const addtwo=function(num2){
    return num2+2
}
console.log(addtwo(3))