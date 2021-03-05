// Implement Map and Set using Es6?
console.log("***************map****************")
let mymap=new Map();
mymap.set(1,1)
mymap.set("1",2)
mymap.set("2",3)
mymap.set(4,1)

console.log(mymap.get(1));
console.log(mymap.get("1"));;

mymap.forEach((val,key)=>{
    console.log(val+" "+key)
})

console.log(mymap.has(1));

console.log(mymap.keys());
console.log(mymap.values());
mymap.delete(4)

mymap.forEach((val,key)=>{
    console.log(val+" "+key)
})


/*********************************************************************/
console.log("**************set**********************")
let myset=new Set();

myset.add(1);

myset.add(1);
myset.add(2);
myset.add(2);
myset.add(12);
myset.add(33);
myset.add(12);


console.log(myset)

myset.delete(2)
console.log(myset)

console.log(myset.has(1))
console.log(myset.size);
myset.clear();
console.log(myset)