
// // function ab(){
    
// //     function myfn(){
// //         return this;
// //     }
// //    return myfn;

// // }
// // console.log(ab()())



// // function ab(){
    
// //     function myfn(){
// //         return this;
// //     }
// //    return myfn();

// // }
// // console.log(ab());



// // for(var i=0;i<3;i++){
// //     setTimeout(function(){
// //         console.log(i);
// //     },1000);
// // }
// //closure

// var size="large";
// var defautsize="medium";
// function myfn(size){

//     console.log(size);
//     if(!size){
//      size=defautsize;
//     }

//     return size;

// }

// console.log(size);
// console.log(myfn());

// var aa= '<ul> <li data-time="5:17">Flexbox Video</li> <li data-time="8:22">Flexbox Video</li> <li data-time="3:34">Redux Video</li> <li data-time="5:23">Flexbox Video</li> <li data-time="7:12">Flexbox Video</li> <li data-time="7:24">Redux Video</li> <li data-time="6:46">Flexbox Video</li> <li data-time="4:45">Flexbox Video</li> <li data-time="4:40">Flexbox Video</li> <li data-time="7:58">Redux Video</li> <li data-time="11:51">Flexbox Video</li> <li data-time="9:13">Flexbox Video</li><li data-time="5:50">Flexbox Video</li> <li data-time="5:52">Redux Video</li> <li data-time="5:49">Flexbox Video</li> <li data-time="8:57">Flexbox Video</li> <li data-time="11:29">Flexbox Video</li> <li data-time="3:07">Flexbox Video</li> <li data-time="5:59">Redux Video</li> <li data-time="3:31">Flexbox Video</li></ul>'

// console.log(aa.split("flexbox"));
// // console.log(aa);

function Person() {
    this.age = 23;
  
    const ab=function() {
      console.log(this.age);    // undefined
    };  
    return ab;
  }

  var a=Person();
  console.log(a());

  

  //if we use this then comes the case of refernceing 
  //if we dont use this then comes closure in case of function inside function