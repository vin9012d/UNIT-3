let tableData=JSON.parse(localStorage.getItem("students")) || [];
displayNavData(tableData);
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


displayTableData(tableData)

function displayTableData(data){
    document.querySelector("#tbody").innerHTML=null;
    let count=0;
    data.forEach(function(ele){
        count++;
        let row=document.createElement("tr");
        let col1=document.createElement("td")
        col1.innerText=count;
        let col2=document.createElement("img")
        col2.src=ele.image;
        let col3=document.createElement("td")
        col3.innerText=ele.name;
        let col4=document.createElement("td")
        col4.innerText=ele.course;
     
        let col5=document.createElement("td")
        col5.innerText=ele.unit;
        let col6=document.createElement("td")
        col6.innerText=ele.batch;
        let col7=document.createElement("td")
        col7.innerText="Remove";
        col7.style.cursor="pointer"
        col7.style.backgroundColor="red"
        col7.style.color="white"
        col7.addEventListener("click",function(){
            removeFunc(ele)
        })
        row.append(col1,col2,col3,col4,col5,col6,col7)
        document.querySelector("#tbody").append(row)
    })
}

function   removeFunc(ele){
    // console.log(ele)
    let trashData=JSON.parse(localStorage.getItem("trash")) || [];
    trashData.push(ele);
    let filtered=tableData.filter(function(element){
        return element.name != ele.name;
    })

    localStorage.setItem("students",JSON.stringify(filtered))
     tableData=JSON.parse(localStorage.getItem("students")) || [];
    displayTableData(tableData)
    displayNavData(tableData)
}


