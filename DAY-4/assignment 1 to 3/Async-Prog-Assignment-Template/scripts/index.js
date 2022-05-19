let movieData=JSON.parse(localStorage.getItem("movies")) || [];

displayData(movieData);

function displayData(data){
document.querySelector("#movies").innerHTML=null;
    data.forEach(function(ele){
        let box=document.createElement("div");
        let name=document.createElement("p")
        name.innerText=ele.name;
        let date=document.createElement("p")
        date.innerText=ele.data;
        // console.log(ele.date)
        let rating=document.createElement("p");
        rating.innerText=ele.rating;
        let language=document.createElement("p");
        language.innerText=ele.language;
        let image=document.createElement("img");
        image.src=ele.image;
        box.append(image,name,date,rating,language)
        document.querySelector("#movies").append(box)
    })
}

function sortRating(){
   let sort= document.querySelector("#sortRating").value;
   if(sort=="LTH"){
   movieData.sort(function(a,b){
       return a.rating-b.rating;
   })
}

else if(sort=="HTL"){
    movieData.sort(function(a,b){
        return b.rating-a.rating;
    })
}
console.log(movieData)
displayData(movieData)
}

let slider=[
    {image:"https://assets-in.bmscdn.com/promotions/cms/creatives/1652782081861_bhool.jpg" },
    {image:"https://assets-in.bmscdn.com/promotions/cms/creatives/1652875071203_badgweb.jpg" },
    {image:"https://assets-in.bmscdn.com/promotions/cms/creatives/1651756540416_coindcx_web.jpg" },

]

let i=0;
let slide =document.querySelector("#slideshow")
let slideImage=document.createElement("img");
slide.append(slideImage);
let id=setInterval(function(){
    if(i===slider.length){
        i=0;
    }
  
slideImage.src=slider[i].image;
i++;

},2000)