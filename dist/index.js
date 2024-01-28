"use strict";
let age = 36;
if (age < 50) {
    age += 10;
}
;
console.log(age);
let sales = 123456789;
let course = "TypeScript";
let isPublished = true;
let level;
let numbers = [1, 2, 3];
let obj = {
    "hello": "world",
    "numbers": numbers
};
let user = [1, "Ryan"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
function render(document) {
    console.log(...document);
}
numbers.forEach(n => console.log(n));
render(obj.numbers);
console.log("My Size: ", mySize);
//# sourceMappingURL=index.js.map