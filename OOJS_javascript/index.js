//person->name,age
//employe->empid,dept
//developer->designation project

function Person(name,age){
    this.name=name;
    this.age=age;
}

function Employee(name,age,empid,dept){
    Person.call(this,name,age);
    this.empid=empid;
    this.dept=dept;
}

function Developer(name,age,empid,dept,desigation,project){
    Employee.call(this,name,age,empid,dept);
    this.desigation=desigation;
    this.project=project;
    
}
Employee.prototype=new Person();
Developer.prototype=new Employee();
// Object.defineProperty(Developer.prototype, 'constructor', {
//     value: Developer,
//     enumerable: false, // so that it does not appear in 'for in' loop
//     writable: true });

Developer.prototype.Display=function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.empid);
    console.log(this.dept);
    console.log(this.desigation);
    console.log(this.project);
    
};

var human=new Developer("tarun",12,4369,"MEAN","software engineer","vue");
// Display(human);
console.log(Developer.prototype)
console.log(human.Display())
//extra undefined is coming
// console.log(Developer.prototype)


//my try successfull
// var aa=new Employee('tarn',1,22,"me");

// var p=Developer.prototype.Display.bind(aa);
// console.log(p());

// console.log(Developer.prototype.Display.call(aa))

// console.log(aa);