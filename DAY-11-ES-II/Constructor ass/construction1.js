// class PersonalName{
// constructor(n){
//     this.name=n;
// }


// }
// let p1=new PersonalName(n)

function Person(n){
    this.name=n;
    // this.print=function () {
    //     console.log(this.name)
    // }
}
Person.prototype.print = function(){
    console.log(this.name)
}
let p2=new Person("Vinod")
console.log(p2)

//
class Stack{
    constructor(){
        this.length=0;
        this.stack=[];
        this.top=-1;
    }

    push(x){
        this.top++;
        this.stack[this.top]=x;
        this.length++;
    }
    pop(){
        this.length--;
        this.top--;
        this.stack.pop()
       
    }
    peek(){
  if(this.length==0){
    console.log("Empty Stack")
}
else{
    console.log(this.stack[this.length-1])
}
    }
    print(){
        let bag="";
    // console.log(this.stack.join(" "))
    for(let x of this.stack){
    bag=bag+x+" "
    }
    console.log(bag)
    }

    printReverse(){
        let bag="";
        for(let i=this.top;i>=0;i--){
          
            bag=bag+this.stack[i]+" ";
        }
        console.log(bag)
        
    }
    size(){
        console.log(this.length)
    }
}

// We can also add method from outside
Stack.prototype.vinod=function(){
    console.log("vinodbhai")
}

let s1= new Stack();
s1.push(5)
s1.push(8)
console.log(s1)
s1.push(15)
console.log(s1)
s1.print()
s1.printReverse()
s1.size()
s1.peek()
s1.pop()
s1.peek()
s1.pop()
s1.peek()

console.log(s1)  