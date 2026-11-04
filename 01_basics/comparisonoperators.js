// console.log(2>2)
// console.log(2>=2)
// console.log(2==2)
// console.log(2<=2)
// console.log(2!=2)//normal comparision operators

// console.log("2">=2)
// console.log("2"!=2)//here the data conversions takes place while comparing two different data types
// console.log("02">=2)

// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)
// console.log(null<0)//sometimes the null gets converted to 0,sometimes to NaN so i.e why we avoid using null to compare anything

// console.log(undefined==0)
// console.log(undefined!=0)//avoid these types of conversions it's not professional
// console.log(undefined>0)//while using undefined if you compare with any datatype it will allways give you false

//=== is used for the strict equal operator which checks both the values and also datatype
console.log(2===2)//true
console.log("2"===2)//false