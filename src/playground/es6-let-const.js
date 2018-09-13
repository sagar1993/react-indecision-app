var test = "1";
var test = "2";
// can be reassigned which may cause error hard to debug.
console.log(test);



let test_1 = "1";
test_1 = "1.1";
// can be reassigned
let test_1 = "2";
// es 6 error duplicate declaration test1
console.log(test);



const test2 = "1";
const test2 = "2";
// es 6 error duplicate declaration test2
test2 = "1.1";
// can not be reassigned



// let const are block scoped
// var is function scoped
var test1 = "2"
if (true) {
    var test2 = "3";
}
console.log(test2);
// error
let test1 = "2"
if (true) {
    let test2 = "3";
    const test3 = "4"
}
console.log(test2);
console.log(test3);




