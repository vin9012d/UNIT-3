let form=document.querySelector("form")
let signData=JSON.parse(localStorage.getItem("sign")) || []

function SignUpData(a,b,c,d){
    this.name=a,
    this.contact=b,
    this.email=c,
    this.password=d;
}

function signUp(){
    event.preventDefault()
    // console.log("vinod bhaiya")
    let name=form.name.value;
    let contact=form.contact.value;
    let email=form.email.value;
    let password=form.password.value;

    let p1= new SignUpData(name,contact,email,password)
   signData.push(p1)
   localStorage.setItem("sign", JSON.stringify(signData))
   alert("Sign up successful")
   window.location.href="login.html"

}