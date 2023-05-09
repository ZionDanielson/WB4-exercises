"use strict";

let productCode = {
    supplierCode: "TTMS017",
    productNumber: "L1500998",
    size: "M",
}

console.log(productCode.supplierCode + ":" + productCode.productNumber + "-" + productCode.size)



function parsePartCode(code){
    //code is just a single string, but it is a composite of three values, here we want to create an object that separates those values...


}

let code1 = "TTMS017:L1500998-M";
let part = parsePartCode(code1);
// now we would have a part with three different properties, each that can be accessed separately..
console.log("only the size: " + part.size);
console.log("only the supplier code: " + part.size);
console.log("only the size: " + part.size);




