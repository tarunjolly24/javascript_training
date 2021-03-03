var person3 = {
    name: "tarun",
    print: function () {
      return this.name;
    },
   };
   var p = person3.print;
   console.log("p before bind : " + p());
//    p = p.bind(person3);
   console.log("p after bind : " + p.call(person3));
   