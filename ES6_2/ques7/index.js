// Write a program to flatten a nested array to single level using arrow functions.


let arr=[ 1,3,3,[1,2,4,[4,78,55]],5,6 ]
// console.log(arr)

// console.log(typeof arr)
// console.log(typeof arr[0])
// console.log(typeof arr[3])

let output=[];

const flatten= (arr)=> {
    
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]=='object'){
            flatten(arr[i]);
        }else{
            output.push(arr[i])
        }
    }

}

flatten(arr);
console.log(output)