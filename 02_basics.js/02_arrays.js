const marvel_heroes=["captain america","spider man","iron man"]
const dc_heroes=["batman","superman","flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)//here it treats the pushed array as a whole new element 
// console.log(marvel_heroes[3][1])//3rd element and inside 3rd element print 1st element
// //push method directly pushes it into the existing array

// const allheroes=marvel_heroes.concat(dc_heroes)
// console.log(allheroes)//here the concat works as expected where it treats concatenated array elements individually
// //here concat creates a whole new array rather than pushing it to the existing one 

//theres another alternative method for concat and that is spread method and it overcomes concat method's limitation(only one argument can be passed)
// const my_heroes=[...marvel_heroes,...dc_heroes]
// console.log(my_heroes)

const array_1=[1,2,3,[2,3,[4,6,4]],3,5,[4,[5,7]]]//for example here you have really messy nested arrays you can convert this into a single dimensinal array
//using flat method
const array_2=array_1.flat(Infinity)//the depth of the flat method has to be passed 
console.log(array_2)

console.log(Array.isArray("Vaibhav"))//very useful methods for data scraping
console.log(Array.from("Vaibhav"))//converts it into array 
console.log(Array.from({name:"Vaibhav"}))//gives an empty array cause we havent specified which elements to be converted into array(keys or values)

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
