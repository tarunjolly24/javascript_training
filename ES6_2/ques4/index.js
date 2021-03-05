// Write a program to implement a class having static functions

class Person{
    constructor(name,age){
        this.name=name
        this.age=age    
    }
    static func(){
    
        console.log("Person class static function")
    }

}

let  a=new Person("ta",12);
Person.func();
let  b=new Person("tar",12);
Person.func();



