
 class Car{
constructor(){
this.wheel=4;
this.sideglass=2;
this.engine="Four Stroke";
this.wiper="Yes"

}
}

let nano=new Car()
nano.airbag="No"
console.log(nano)
  

let car1={
    wheel:4,
sideglass:2,
engine:"Four Stroke",
seat:4,
model:"V2",
}

let nano1= Object.create(car1)
console.log(nano1)