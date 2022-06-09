import navbar from "../component/navbar.js";

import axios from "axios";


import "../style/navbar.css"
let navbar_div=document.querySelector("#navbar");
navbar_div.innerHTML=navbar();


import {getData, append} from "../component/navbar.js";
// const url=`www.themealdb.com/api/json/v1/1/search.php?s=piz`
let container=document.querySelector("#container");

async function fetchData(){
    let data=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=pi`);
    console.log("myau")
    console.log(data.data.meals,"data")
    append(data.data.meals,container)
    // console.log(data.meals)
}
fetchData()



