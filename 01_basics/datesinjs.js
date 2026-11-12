//dates and time

let mydate=new Date();//creating object instance variable 
// console.log(mydate)//unreadable output

    // console.log(mydate.toDateString())
    // console.log(mydate.toString())
    // console.log(mydate.toLocaleString())
    // console.log(mydate.toISOString())//each gives different format of date

// let getdate=new Date(2026,0,23)//decalaring our own date,and here month starts from 0 i.e (0=January)
// let getdate=new Date("07-22-2026")//can declare this way too
// // console.log(getdate)
// // console.log(getdate.toDateString())
// // console.log(typeof getdate)//object
// let mytimestamp=Date.now();//gives the value in millisecond from jan 1970 till now 
// console.log(mytimestamp)
// console.log(getdate.getTime())//gives the value in millisecond
// console.log(Math.floor(getdate.getTime()/1000))//gives the value in seconds

let date=new Date();
console.log(date.getDate())
console.log(date.getFullYear())//we have several get methods for date