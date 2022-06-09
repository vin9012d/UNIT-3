import navbar from "../components/navbar.js";
import "../style/style.css";
import axios from "axios";

let navbar_div=document.querySelector("#navbar");
navbar_div.innerHTML=navbar();
async function fetchData(){
    let data=await axios.get("https://fakestoreapi.com/products/category/jewelery");
    console.log("myau")
    console.log(data,"data")
}
fetchData()


