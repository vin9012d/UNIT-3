tax=(x)=>{
    if(x<250000){
        return 0;
    }
    else if(x<=500000 && x>250000){
        x=Math.floor(x/2)
        if(x>=250000){
            return  Math.floor((x*10)/100)
        }
        else return 0;

    }
    else if(x>500000 && x<100000){
     let   y=Math.floor((x*30)/100);
        x=x-y;
        return Math.floor((x*20)/100)
    }
    else{
       let y=Math.floor((x*10)/100);
        x=x-y; 
        return Math.floor((x*30)/100)
    }
}

// let y=tax(5000000)
// console.log(y)
export default tax;