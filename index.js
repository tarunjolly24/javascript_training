
// function ab(){
    
//     function myfn(){
//         return this;
//     }
//    return myfn;

// }
// console.log(ab()())



// function ab(){
    
//     function myfn(){
//         return this;
//     }
//    return myfn();

// }
// console.log(ab());



// for(var i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }
//closure

var size="large";
var defautsize="medium";
function myfn(size){

    console.log(size);
    if(!size){
     size=defautsize;
    }

    return size;

}

console.log(size);
console.log(myfn());