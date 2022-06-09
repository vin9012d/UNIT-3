


async function search(){
    const key=`AIzaSyCUGE-_NCNTn_w28Jjfnra5mcaKthmetts`
    let query=document.querySelector("#query").value;
    const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${key}`
    try{
        let res= await fetch(url);
        let data= await res.json();
console.log(data.items)
     append(data.items)
    }
    catch(error){
        console.log(error)
    }

}

// function append(data){
    
// }

let append =(data)=>{
    let container=document.querySelector("#videos");
    container.innerHTML=null;
    data.forEach(function(ele){

    })
    data.forEach(({id:{videoId}, snippet:{title, thumbnails}})=>{
        console.log(videoId)
        console.log(title)
        console.log(thumbnails)
        let video={
            videoId:videoId,
            title:title

        }
        let box=document.createElement("div");
        let image=document.createElement("img")
        image.src=thumbnails.default.url;
        let tiTle=document.createElement("p")
        tiTle.innerText=title;
        box.onclick="function()"
        box.onclick =()=>{
         openvideo(video)
        }
        box.append(image,title)
        container.append(box)

    }) 

    
}
// function openvideo(video){

// }
let openvideo = (video)=>{  
    localStorage.setItem("videos",JSON.stringify(video))
    window.location.href="../lecture/video.html"
}  



// function  indiasMostWatched(){

// }

 let  indiasMostWatched = async () => {
  const key=`AIzaSyCUGE-_NCNTn_w28Jjfnra5mcaKthmetts`
  let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=viewCount&regionCode=IN&key=${key}`

  try{
      let res=await fetch(url);
      let data=await res.json();
    //   console.log(data)
    append(data.items)

  }
  catch(error){
      console.log(error)
  }
}

indiasMostWatched()