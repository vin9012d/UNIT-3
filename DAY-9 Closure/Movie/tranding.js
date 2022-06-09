

async function main(){
    let url=`https://api.themoviedb.org/3/trending/movie/week?api_key=3780f0c40c41263ae7bb347fe4c2c4cc`;
    try{
    let res=await fetch(url)
    // console.log(res)
    let data=await res.json()
    appendData(data.results)
    // console.log(data)
    // let div=document.querySelector("#trending_container")
    // let image=document.createElement("img")
    // image.src=data.results[1].poster_path;
    // div.append(image)
    
    }
    catch (error){
        console.log(error)
    }

}

main()

function appendData(data){
    console.log(data)
    let div=document.querySelector("#trending_container")
    div.innerHTML=null;
    data.forEach(function(ele){
        let box=document.createElement("div")
        let image=document.createElement("img")
        image.src= `https://image.tmdb.org/t/p/original/${ele.poster_path}`;
        let name=document.createElement("p");
        name.innerText=ele.title;
        box.append(image,name)
        div.append(box)
    })

}