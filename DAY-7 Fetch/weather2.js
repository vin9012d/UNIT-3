const api_key="bac731751ef893cc6ae22894d02b1184"


function getData(){
    let city=document.querySelector("#city").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    // console.log(url)


async function dataGet(){
    try{
  let res= await fetch(url)
  let data= await res.json()
  append(data)
  console.log(data)
    }
    catch{

    }
}
dataGet()
}

function append(data){
    let container=document.querySelector("#container")
    container.innerHTML=null;
    let name=document.createElement("h3")
    name.innerText=`City Name: ${data.name}`;
    let maxTemp=document.createElement("p")
    maxTemp.innerText=`Maximum Tempreture: ${Math.floor(data.main.temp_max-273)}`;
   
    let minTemp=document.createElement("p")
    minTemp.innerText=`Minimum Temperature: ${Math.floor(data.main.temp_min-273)}`;
   
    console.log(name,maxTemp,minTemp)
    container.append(name,maxTemp,minTemp)
    let iframe=document.querySelector("#gmap_canvas");
    iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}
//src="https://maps.google.com/maps?q=Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"

function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
    }
  }
  getLocationWeather()  