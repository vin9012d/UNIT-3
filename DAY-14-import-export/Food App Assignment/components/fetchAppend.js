async function getData(url){
    try{
        let res=await fetch(url);
        let data=await res.json();
        return data;
       
    }
    catch (error){
        console.log(error)
    }
}

function append(data,container){


    data.forEach(function(ele){
        let box=document.createElement("div");
        let image=document.createElement("img")
        image.src=ele.strMealThumb
        
        let name=document.createElement("p")
        name.innerText=ele.strMeal;
        let recepie=document.createElement("p");
        recepie.innerText=ele.strInstructions;
        box.append(image,name,recepie)
        container.append(box)
        //image.innerText=ele.sttrMealThumb
        
    })
}








export {getData,append} 