let getData= async (url)=>{
    // const url=`https://fakestoreapi.com/products/category/electronics`;

    try{

        let res=await fetch(url);
        let data= await res.json();
        // console.log(data)
        // append(data)
        return data;
    }
    catch(error){
        console.log(error)
    }
}


let  append =async(data,container)=>{
    // let container=  document.querySelector("#container")

        data.forEach(function(ele){

        let box=document.createElement('div');
        let image=document.createElement("img")
        image.src=ele.image;
        let name=document.createElement("p");
        name.innerText=ele.title;
        box.append(image,name)
        container.append(box)
    })
    
}

export {getData,append}