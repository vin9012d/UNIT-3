function navbar(){
    return `<div>
    <h3><a href="index.html">Home</a></h3>
</div>
<div id="option">
    <h3>
       <a href="recepie.html">Receipe of the day</a>
    </h3>
    <h3>
        <a href="random.html">Random receipie</a>
    </h3>
    <h3>
        <a id="signup"  href="signup.html">Signup</a>
    </h3>
    <h3>
        <a href="login.html">Login</a>
    </h3>
</div>
`
}

export default navbar;

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