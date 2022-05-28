let id;
function throttle(func,delay){
    if(id){
        clearTimeout()
    }
    id=setTimeout(function(){
        func()
    },delay)
    
    }

    async function main(){
       
        let data= await getData()
        appendData(data)

    }
async function getData(){

    let name=document.querySelector("#search").value;
    if(name.length==0){
        let container=document.querySelector("#display");
        container.style.display="none"
        return false;
    }
    let url=` https://swapi.dev/api/people/?search=${name}`
    try{
    let res=await fetch(url);
    let data=await res.json()
    return data.results;
}
   catch (error){
    console.log(error)
 }
}


function  appendData(data){
    // console.log(data)
let container=document.querySelector("#display");
container.innerHTML=null;
container.style.display="block"
if(data==false){
    container.style.display="none"
    return false;
}
data.forEach(function(ele){
    let name=document.createElement("p")
    name.innerText=ele.name;
    container.append(name)
})


}