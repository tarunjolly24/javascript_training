// Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.


// import { pi , areaCircle } from './lib';
const libjs=require('./lib')

console.log(libjs.areaCircle(5));
console.log(libjs.pi);
console.log(libjs.areaRectangle(5,4));
console.log(libjs.areaCyclinder(5,4));

