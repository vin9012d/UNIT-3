


function findMovie(e){
 
    e.preventDefault()
    document.querySelector("#container").innerHTML=null;
    console.log("Vinod")
    let form=document.querySelector("#form");
    let movieName=form.movie_name.value;
    const url=`https://www.omdbapi.com/?s=${movieName}&apikey=fd3f36f3`;
   
   
    console.log(movieName)

    async function getData(){
        try{
           let res= await fetch(url)  
           console.log(res)
           let movie=await res.json()
           console.log(movie.Response)
        if(movie.Response=="False"){
            console.log("-1")
            let image=document.createElement("img")
            image.src="https://img.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1927.jpg?size=626&ext=jpg&uid=R71396964&ga=GA1.2.87858757.1652874969"
            let container=document.querySelector("#container")
            container.append(image)
        }
           else  if(movie.Response=="True"){
               console.log(movie.Search)
                  append(movie.Search)
        }
    }
   

        catch(error){

let image=document.createElement("img")
image.src="https://img.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1927.jpg?size=626&ext=jpg&uid=R71396964&ga=GA1.2.87858757.1652874969"
let container=document.querySelector("#container")
container.append(image)
console.log(error)
console.log("myau")
        }

    }
    getData()
}

function   append(movies){
movies.forEach(function(ele){
    let container=document.querySelector("#container")
    let box=document.createElement("div");
   
  
    // image.setAttribute("alt","No photo available")
    let name=document.createElement("p")
    name.innerText=ele.Title
    let year=document.createElement("p")
    year.innerText=ele.Year;
    let type=document.createElement("p")
    type.innerText=ele.Type;
    
    if(ele.Poster=="N/A"){
        // box.append(image,name)
        // container.append(box)
    }
    else{
    let image=document.createElement("img")    
    image.src=ele.Poster;
    box.append(image,name,type,year)
    container.append(box)
    }
})
}


// 