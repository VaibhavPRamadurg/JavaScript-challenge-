const myobj={}//another way of declaring object
myobj.name="vaibhav"
myobj.email="vaibhav200704@gmail.com"
myobj.isloggedin=false

//console.log(myobj)
const myinfo={
    email:"username@gmail.com",//nested object structure
    username:{
        fullname:{
            firstname:"Vaibhav",
            lastname:"Ramdurg",
        }
    }

}
// console.log(myinfo.username.fullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj4=Object.assign({},obj1,obj2,obj3)//this is one method to combine two objects,where 1st para is target
//  rest all are source
const obj4={...obj1,...obj2,...obj3}//spread operator is the most commonly used operator to combine objects
// console.log(obj4)

//Array of objects:usually database always returns in array of objects form only 

const mydb=[
    {
        id1:"101",
        name:"vaibhav",
    },
    {
        id1:"102",
        name:"vaibhav",
    },

]
// console.log(mydb[0].id1)//accesing those variables

// console.log(Object.keys(myobj))//return all the keys in the form of an array
// console.log(Object.values(myobj))//return all the values in the form of an array
// console.log(Object.entries(myobj))//returns 2d array of the form [[key,value]]
// console.log(myobj.hasOwnProperty('isLoggedin'))//checks if that property is there or not in the object

//Object Destructuring

const coursedetails={
    cousename:"xyz",
    courseInstructor:"yzx",
    courseduration:100,
}

const {courseInstructor:teacher}=coursedetails//object destructure
console.log(teacher)//yzx
