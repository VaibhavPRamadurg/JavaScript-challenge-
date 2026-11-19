//Immediatley Invoked Function Exoression(IIFE)

(function chai(){
    //named iife
    console.log("Chai ka time")//iifes are basically used to prevent global scope pollution(many globally declared variables or anything may pollute the funcion that is why we use iife)
})();//when using two iifes dont forget to add semicolon to the first one cause it doesnt know when to end context

((name)=>{
    console.log(`Good morning,${name}`)
})("Vaibhav")