const add = require('./math')

if(add(3,3)!==5){
   throw new Error("Test failed: add(2,3) should be 5");
}
console.log("Test passed: add(2,3) is 5");