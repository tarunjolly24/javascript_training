var instanceCounter=0;
var invocationCount=0;
function Person(name,age){
    this.name=name;
    this.age=age;
    instanceCounter+=1;
}
Person.prototype.display=function(){
    invocationCount+=1;
    console.log(this.name);
    console.log(this.age);
};

var p1=new Person("tarun",22);
var p2=new Person("sejal",21);

console.log(p1);
console.log(p1.display());
console.log(instanceCounter);
console.log(invocationCount)