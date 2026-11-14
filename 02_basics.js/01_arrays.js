//arrays

let arr1=[1,2,4,5,6,"hi",false,true]//can store any data types in it
let arr2=new Array(1,2,3,4)//different types of declaring an array

// console.log(arr1[5])//0-based indexing 

//arrays method

// arr1.push(4)//inserts the element at the end of the array
// console.log(arr1)
// arr1.pop()//removes the last element of the array
// console.log(arr1)
// arr1.unshift(0)//inserts the elements at the beginning of the array
// console.log(arr1)
// arr1.shift()//remove the first element of the array
// console.log(arr1)

// console.log(arr1.includes(2))//produces boolean value
// console.log(arr1.indexOf(2))//give the index of that value

// let arr3=arr2.join()
// console.log(arr2)
// console.log(arr3)//converts and binds the data into string one 
// console.log(typeof arr3)

//difference between slice and splice

console.log('A ',arr2)

const myn1=arr2.slice(1,3)//[1,3)
console.log('B ',arr2);
console.log(myn1)

const myn2=arr2.splice(1,3)//[1,3]//the splice the removes the part specified in the parameter from the original array only but slice doesnt do that
console.log('C ',arr2);
console.log(myn2)
