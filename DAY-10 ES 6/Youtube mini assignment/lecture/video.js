let data=JSON.parse(localStorage.getItem("videos")) || []
let container=document.querySelector("#video");
let box=document.createElement("div");
let iframe=document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${data.videoId}`
let video_title=document.createElement("p");
video_title.innerText=data.title;
box.append(iframe,video_title)
container.append(box)

