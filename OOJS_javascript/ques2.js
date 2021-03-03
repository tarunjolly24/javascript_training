//ques 2 
var arr=[1,2,3,4,5];
for(var i=0;i<5;i++){
   task(arr[i],i+1);
}

function task(arr,i){
    setTimeout(() => {
        console.log(arr);
    }, 3000*i);
}
