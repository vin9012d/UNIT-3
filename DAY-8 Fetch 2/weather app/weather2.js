async function showData(){
    console.log("vinod")
    let id="bac731751ef893cc6ae22894d02b1184"
    let city=document.querySelector("#city").value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
   let res=await fetch(url);
   let data= await res.json()
//    console.log(data)
   if(data.cod===200){
  
    let lat=data.coord.lat;
    let lon=data.coord.lon;
    // console.log("city",city)
     getData(lat,lon,city)
   }
}

async function getData(lat,lon,city){
  
    let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts,current&appid=bac731751ef893cc6ae22894d02b1184`
    let res=await fetch(url);
    console.log(res,"kk")
    let data= await res.json()
//     console.log(data)
//   console.log(data.daily)
    appennd(data.daily,city)
//***** */
var d =data.daily[0].sunset;
var date=new Date(+d); //NB: use + before variable name

// console.log(d);
// console.log(date.toDateString());
// console.log(date.getFullYear());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getHours());
// console.log(date.toLocaleTimeString());

//expected: "5/16/2008"
}

function     appennd(data,city){
    let container=document.querySelector("#container")
    container.innerHTML=null;
    console.log(data)
    let iframe=document.querySelector("#gmap_canvas")
    iframe.src=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    // let x=city;
    data.forEach(function(ele){

    let box=document.createElement("div")
    let city=document.querySelector("#city").value;
    let cityName=document.createElement("p");
    cityName.innerText=`City ${city}`
  
    let dates=document.createElement("p")
    const unixTime = ele.dt;
  const date = new Date(unixTime*1000);
  let x=(date.toLocaleDateString("en-US"));
    dates.innerText=`Date: ${x}`
    let minTemp=document.createElement("p");
    minTemp.innerText=`Min Temp: ${Math.floor(ele.temp.min-273)}`
    let maxTemp=document.createElement("p");
    maxTemp.innerText=`Max Temp: ${Math.floor(ele.temp.max-273)}`
    let windSpeed=document.createElement("p");
    windSpeed.innerText=`Wind Sped: ${ele.wind_speed} m/s`
    let image=document.createElement("img")
    console.log(ele.temp.max)
    if(ele.temp.max>305){
        image.src="https://cdn-icons-png.flaticon.com/128/869/869869.png"
    }
   else if(ele.temp.max>297  && ele.temp.max<297){
        image.src="https://cdn-icons.flaticon.com/png/128/3406/premium/3406981.png?token=exp=1653764910~hmac=8f1a77e4c16b82ab1c0191831c7bd0ef"
    }
    else{
        image.src="https://cdn-icons.flaticon.com/png/128/3093/premium/3093390.png?token=exp=1653764910~hmac=a83d2d2d8892e3e07a09af46adc7a1cf"
    }
    box.append(image,cityName,dates,minTemp,maxTemp,windSpeed)
    container.append(box)
    
  

    
    
})
}

function geoLocation(){
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        getDataCurrent(latitude, longitude);
    
        console.log(latitude);
        console.log(longitude);
      }
}

geoLocation()

async function getDataCurrent(lat, lon){
 
let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bac731751ef893cc6ae22894d02b1184`
let res= await fetch(url)
let data= await res.json()
console.log("new")
console.log(data)

append(data,data.name)
}

function append(ele,city){
    let container=document.querySelector("#container")
    container.innerHTML=null;
    let iframe=document.querySelector("#gmap_canvas")
    iframe.src=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    let box=document.createElement("div")
  
    let cityName=document.createElement("p");
    cityName.innerText=`City ${city}`
  
//     let dates=document.createElement("p")
//     const unixTime = ele.dt;
//   const date = new Date(unixTime*1000);
//   let x=(date.toLocaleDateString("en-US"));
//     dates.innerText=`Date: ${x}`

    let minTemp=document.createElement("p");
    minTemp.innerText=`Min Temp: ${Math.floor(ele.main.temp_min-273)}`
    let maxTemp=document.createElement("p");
    maxTemp.innerText=`Max Temp: ${Math.floor(ele.main.temp_max-273)}`
    let image=document.createElement("img")
    if(ele.main.temp_max>30){
        image.src="https://cdn-icons-png.flaticon.com/128/869/869869.png"
    }
   else if(ele.main.temp_max>25  && ele.main.temp_max<30){
        image.src="https://cdn-icons.flaticon.com/png/128/3406/premium/3406981.png?token=exp=1653764910~hmac=8f1a77e4c16b82ab1c0191831c7bd0ef"
    }
    else{
        image.src="https://cdn-icons.flaticon.com/png/128/3093/premium/3093390.png?token=exp=1653764910~hmac=a83d2d2d8892e3e07a09af46adc7a1cf"
    }
    // let windSpeed=document.createElement("p");
    // windSpeed.innerText=`Wind Speed: ${ele.wind_speed} m/s`
    box.append(image,cityName,minTemp,maxTemp)
    container.append(box)
}