const user={
    username:"Vaibhav",
    price:999,
    greetfunction:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)//this always refers to current object/context
    }
}
// user.greetfunction()
// user.username="Vishwa"
// user.greetfunction()
// console.log(this)//this when used in global scope gives empty values cause theres no context here 

function samay(){
    let samay=10
    // console.log(this)//gives all the values/parameters regarding this current function/scope
    console.log(this.samay)//gives undefined output cause this doesnt work in functions
}
// samay()

const chai=function(){
    let username="Vaibhav"
    // console.log(this)//gives empty
    console.log(this.username)//gives undefined still
}
// chai()

const chai2=()=>{ //this is called as arrow function
    const username="Vaibhav"
    // console.log(this.username)//undefined
    console.log(this)//gives empty
}
chai2()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

// const addtwo=(num1,num2)=> num1+num2//13
// const addtwo=(num1,num2)=>(num1+num2)//13
const addtwo=(num1,num2)=>({username:"Vaibhav",myage:19})//when returning objects in this form including brackets is must

console.log(addtwo(6,7))
