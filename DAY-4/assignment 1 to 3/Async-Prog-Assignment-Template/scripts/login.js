let form=document.querySelector("form")
let signData=JSON.parse(localStorage.getItem("sign")) || []



function login(){
    event.preventDefault()
    // console.log("vinod bhaiya")
    let email=form.email.value;
    let password=form.password.value;
console.log("vinod bhai motibhai chaudhari")
let filtered=signData.filter(function(ele){
    return ele.email==email  && ele.password==password
})
console.log(filtered)
if(filtered.length<1){
    alert("Invalid Credential")
}
else{
    window.location.href="index.html"
}
}