// Find the possible combinations of a string and store them in a MAP? 



let str = "abad";
let ans = "";
const mymap = new Map();
function permutation(str, ans) {
    if (str.length == 0) {
        if (!mymap.has(ans)) mymap.set(ans, 1);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        let rstr = str.substring(0, i) + str.substring(i + 1);
        permutation(rstr, ans + str[i]);
    }


}
permutation(str, ans);
console.log(mymap);


// function permutation1(str){
//     if(str.length==0){
//     let baseans=[];
//     baseans.push("");
//     return baseans;
//     }
//     let myans=[];
//     for(let i=0;i<str.length;i++){
//         let rstr=str.substring(0,i)+str.substring(i+1);
//         let rans=permutation1(rstr,ans+str[i]);
//         for(let j=0;j<rans.length;j++){
//             myans.push(str[i]+rans[j]);
//         }
//     }
//     return myans;


// }


// let output=permutation1(str);
// console.log(output);