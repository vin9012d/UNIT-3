console.log("1")
//const url="https://reqres.in/api/users";

//Method 1
/*
fetch(url)
.then(function(value){
    // console.log(value)
    return value.json()
}).then(function(value){
    console.log(value)//console.log(value.data)
})
.catch(function(error){
    console.log(error)
})
*/

// Method 2
/*
async function getData(){
    try{
        let res=await fetch(url);
        let users=await res.json();
        append(users.data)
        console.log(users.data)
    } catch (err){
        console.log(err)
    }
}
getData()

function append(data){
    data.forEach(function(ele){
        let div=document.createElement("div")
        let image=document.createElement("img");
        image.src=ele.avatar;
        let email=document.createElement("p")
        email.innerText=ele.email;
        let name=document.createElement("p")
        email.innerText=ele.first_name;
        div.append(image,email,name)
        document.querySelector("#container").append(div)
    })
    

}
*/
const url="https://fakestoreapi.com/products";

async function getData(){
    try{
        let res=await fetch(url);
        // console.log(res)
        let users=await res.json();

        append(users)
        console.log(users)
    } catch (err){
        console.log(err)
    }
}
getData()
function append(data){
    data.forEach(function(ele){
        let div=document.createElement("div")
        let image=document.createElement("img");
        image.src=ele.image;
        let title=document.createElement("p")
        title.innerText=ele.title;
        let price=document.createElement("p")
        price.innerText=ele.price;
        div.append(image,title,price)
        document.querySelector("#container").append(div)
    })
}