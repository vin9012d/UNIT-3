time=(X)=>{
   let x=Math.floor(X/1000);
//    console.log(x)
   if(x<60){
       return `${x} seconds`
   }
   else if(x>=60 && x<3600){
let y=Math.floor(x/60);
let z=x-(y*60);

       return `${y} minutes ${z} seconds`
   }
   else{
    let y=Math.floor(x/3600);
    let z=x-(y*3600); 
    z=Math.floor(z/60) 
    return `${y} hours ${z} minutes`
   }
}

// let p=time(200000)
// console.log(p)

 export default time;