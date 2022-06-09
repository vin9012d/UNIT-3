// let and const are block scope variable only difference is that in const value can not be reasigned.

//Arrow function

//conventional method
/*
function hello(){
    console.log("hello")
}
function hii(a){
    console.log(a)
}
hello()
hii()

*/
//With arrow function
/*
 hello=()=>{
    console.log("hello")
}
hello()

hii=(arg)=>{
    console.log(arg)
}
hii("Vinod")
*/
/*
data=[1,2,3,4,5]
data.forEach(function(ele){
    console.log(ele)
})
console.log("**********")
data.forEach((ele)=>{
    console.log(ele)
})
*/

//scope of "this" in arrow function, Arrow does not create a new scope.
/*
let obj={
    name:"vinod",
    c:function(){
console.log(this.name)
console.log(this)//here this act as a obj;
    },
    b:()=>{
        console.log("myau")
        console.log(this.name,this)
      
    }
}
// console.log(obj)
// obj.c()
obj.b()
*/

//for of loop
/*
let arr=[1,34,554,546,65,5645]
for(let x of arr){
    console.log(x)
}
*/

//Object and aray destructring

