//singleton
//constructor method=singleton

//object literals
let mysym=Symbol("mykey1")

const myinfo={
    name:"Vaibhav",//by default name is treated as string
    "full name":"Vaibhav Ramadurg",
    [mysym]:"mykey1",//interview question i.e always use [] to declare symbol as a key in object
    location:"Bengaluru",
    isloggedin:true,
    sickleaves:['Monday','Saturday'],
    age:18
}

console.log(myinfo.name)
console.log(myinfo["name"])
// console.log(myinfo.full name)//error
// console.log(myinfo."full name")//error
console.log(myinfo["full name"])//using square brakets is the right method to access the objects 
console.log(myinfo[mysym])

myinfo.name="Vishwanath"
// Object.freeze(myinfo)//freeze the object
myinfo.name="Vaibhav"
console.log(myinfo)

myinfo.greeting=function(){
    console.log("Helloo")
}

myinfo.greetingtwo=function(){
    console.log(`Hellooo,${this["full name"]}`)//this refers to the current object
}
console.log(myinfo.greeting)//[Function (anonymous)]
console.log(myinfo.greeting())//Helloo
console.log(myinfo.greetingtwo())//Hellooo,Vaibhav Ramadurg