let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);
//before there was an string concatenation now it is fixed by converting age stringdatatype to Number datatype before declaration//"

let originalImplicit = 100;
let implicitResult = "The score is: " + originalImplicit;

console.log("--- Implicit Conversion ---");
console.log("Before:", originalImplicit, "(Type:", typeof originalImplicit, ")");
console.log("After:", implicitResult, "(Type:", typeof implicitResult, ")");

let edgeCaseImplicit = null + 5;
console.log("Edge Case (null + 5):", edgeCaseImplicit); 

let originalExplicit = "50.5";
let explicitResult = Number(originalExplicit);

console.log("\n--- Explicit Conversion ---");
console.log("Before:", originalExplicit, "(Type:", typeof originalExplicit, ")");
console.log("After:", explicitResult, "(Type:", typeof explicitResult, ")");

let edgeCaseExplicit = Number(undefined);
console.log("Edge Case (Number(undefined)):", edgeCaseExplicit);