//usally the data typres are categorized into two types based on how the data is stored and accessed in memory

//1 Primitive : here the data is passed as call by value(a copy of data is passed not the actual data or data referrence)
// 7 types 
// String,Number,Boolean,null,undefined,Symbol,Bigint

//javascript is dynamically typed language (you dont need to specify the type of data while declaring a variable)

const id=Symbol("123")
const id2=Symbol("123")
console.log(id===id2)//returns false cause symbol always returns different values even if you pass same values to it..

//2 Reference (Non Primitive):here the reference of the data is passed...so the modifications directly reflect the original data

//Array,Object,Functions
const names=["vaibhav","nitin","barath"]
let me={
    name:"Vaibhav",
    age:18,
}
const myfunction=function(){
    console.log("Hello Function")
}
console.log(typeof(myfunction))//also called as object function
console.log(typeof(names))//object
console.log(typeof(me))//object
console.log(myfunction)



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(primitive(copy of the data of variable or element is passed not the original one))
//Heap(non-primitive(reference of the data is passsed nothing but original object is only passed))

//for example
let accountname="Vaibhav@123"
let otheraccname=accountname
otheraccname="Vishwa@123"

console.log(accountname)
console.log(otheraccname)//both will produce diff outputf (stored in stack memory)

let myself={
    name:"vaibhav",
    id:123,
}
let yourself=myself
yourself.name="Vishwa"

console.log(myself)
console.log(yourself)//same output will be produced
