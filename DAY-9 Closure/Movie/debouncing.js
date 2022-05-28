let movies_div=document.querySelector("#movie")
let id;
//Function for Search bar
async function main(){
    let query=document.querySelector("#name").value;
    // console.log(query)
  let response=  searchmovie(query);
  let data= await response;  //async function sends/returns data with promise so we have to remove just promise cover
  appendData(data)
//   console.log(data)
}

function debounce(main,delay){
    if(id){
       clearTimeout(id)
    }
    id=setTimeout(function(){
       main()
    },delay)
}

async function searchmovie(query){
    try{
        let url=`https://www.omdbapi.com/?s=${query}&apikey=fd3f36f3`

        let res = await fetch(url);
        let data=await res.json();//res.collect()
        //   console.log(data)
         return data.Search;
    }
    catch (error){
        console.log(error)
    }
  
}

function  appendData(movies){
    // console.log(movies)
    movies_div.innerHTML=null;
    if(movies===undefined){
        movies_div.style.display="none";
       
        return false;
    }
    movies_div.style.display="block";
    movies.forEach(function(ele){
        
        let box=document.createElement("div")
        let name=document.createElement("p");  
        name.innerText=ele.Title;
        name.addEventListener("click",function(){
            movieName(ele)})
            let image=document.createElement("img")
             image.src=ele.Poster;
             if(ele.Poster!="N/A"){
             box.append(image,name)
        movies_div.append(box)
             }
    })
}




function movieName(ele){
    // console.log("vinod bhai")
    // let movie_name=ele.Title;
    document.querySelector("#name").value=ele.Title
    // debounce(main,1000)

}

//functon for get movie data
async function getData(){
    movies_div.style.display="none";
    let query=document.querySelector("#name").value;
    // console.log(query)
  let response=  searchmovie(query);
  let data= await response;  //async function sends/returns data with promise so we have to remove just promise cover
//   appendData(data)
    // container(data)
    // console.log(data)



}
function container(data){
    if(data===undefined){
        let container=document.querySelector("#container")
        container.innerHTML=null;
        let image=document.createElement("img")
        image.src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-10996.jpg?size=626&ext=jpg&uid=R71396964&ga=GA1.2.87858757.1652874969";
        container.append(image)
        return false
    }
    data.forEach( async function(ele){
        let container=document.querySelector("#container")
        container.innerHTML=null;
         let id=ele.imdbID;
         let url=`https://www.omdbapi.com/?i=${id}&apikey=fd3f36f3`

         let res = await fetch(url);
         let data=await res.json();
        //  console.log(data)
         
         let name=document.createElement("p");  
         name.innerText=ele.Title;
         let rating=data.imdbRating;
         let recomend=document.createElement("h3");
         recomend.innerText="Recomended"
         let box=document.createElement("div")
         box.addEventListener("click",function(){
             fulldata(data)
         })
         
         
         if(data.Poster!="N/A"){
            let image=document.createElement("img");
            image.src=data.Poster;
            if(rating>8.5){
                box.append(recomend,image,name)
                container.append(box)
            }
            else{
                box.append(image,name)
                container.append(box)
            }

         }

    })
}
function  fulldata(data){
    console.log("myav")
    console.log(data)
    let container=document.querySelector("#container")
        container.innerHTML=null;
        let box=document.createElement("div")
        let name=document.createElement("p");  
        name.innerText=data.Title;
        let runTime=document.createElement("p");  
        runTime.innerText=`Run time ${data.Runtime}`;
        console.log(data.Runtime)
        let language=document.createElement("p");  
        language.innerText=`Language: ${data.Language}`;
        let rating=document.createElement("p");  
        rating.innerText=`imdb rating: ${data.imdbRating}`;
        let realease=document.createElement("p");  
        realease.innerText=`Released: ${data.Released}`;
        let actor=document.createElement("p");  
        actor.innerText=`Actors: ${data.Actors}`;
        let image=document.createElement("img");
        image.src=data.Poster;
        box.append(image,name,runTime,language,rating,realease,actor)
        container.append(box)
         

}