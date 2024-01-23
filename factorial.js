const { Readline } = require("readline/promises");

//factorial using reduce function
function fact(num){
    let arr = Array.from(Array(num+1).keys());
    console.log(arr.slice(1,));
    let c= arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(c)
}
fact(5)

//factorial using loop
function factorial(number){
    let f=1;
    for (let index = 1; index <=number; index++) {
         f = f*index;    
    }
    return f;
}
console.log(factorial(6));