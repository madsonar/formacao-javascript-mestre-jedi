//&& (AND)
var result = (10 == 10) && (5 == 5);
var result2 = true && true;
var result3 = true && "true";
var result4 = true && "true1";
var result5 = true && Boolean("true1");
console.log("1 - ",result);
console.log("2 - ",result2);
console.log("3 - ",result3);
console.log("4 - ",result4);
console.log("5 - ",result5);

//|| (OR)
var result6 = (10 == 10) || (5 == 3);
var result7 = (10 == 11) || (5 == 3);
console.log("6 - ",result6);
console.log("7 - ",result7);

//! (NOT)
var result8 = true;
var result9 = false;
console.log("8 - ",result8);
console.log("9 - ",!result8);
console.log("10 - ",!result9);
console.log("11 - ",!!result9);
console.log("11 - ",!"pedro");
console.log("11 - ",!!"pedro");