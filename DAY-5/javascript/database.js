let navData=JSON.parse(localStorage.getItem("students")) || [];
displayNavData(navData);
function displayNavData(Ndata){
    document.querySelector("#unitsContainer").innerHTML=null;
    console.log(Ndata)
let obj={}
 Ndata.forEach(function(ele){
    
     if(obj[ele.batch]==undefined){
        obj[ele.batch]=1;
     }
     else{
        obj[ele.batch]++;
     }
     
 })
 console.log(obj)
for(let key in obj){
    let name=document.createElement("p");
    name.innerText=key+" students : " +obj[key]
    document.querySelector("#unitsContainer").append(name)
}

}


let form=document.querySelector("#form");
let data=JSON.parse(localStorage.getItem("students")) || []

function Constructor(a,b,c,d,e){
    this.name=a;
    this.image=b;
    this.course=c;
    this.unit=d;
    this.batch=e;
}

function func(){
    event.preventDefault();
    let name=form.name.value;
    let image=form.image.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let batch=form.batch.value;

    let p1=new Constructor(name,image,course,unit,batch)
    data.push(p1)
    localStorage.setItem("students",JSON.stringify(data))
    let data1=JSON.parse(localStorage.getItem("students")) || []
    displayNavData(data1)
    
}