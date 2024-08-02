// Variable
// 1. var = Old School --> variable bisa di declare ulang maupun write ulang

var x = 0;
// var x = 10;
for (var i = 0; i <= 10; i++) {
    x = x + 1;
    console.log(x);
};
for (var i = 11;i >= 1; i--) {
    x = x - 1;
    console.log(x);
}
// Variable modern
// 1. let --> variable tidak bisa di declare ulang tapi bisa write ulang

let z = 10;
z = 5
console.log(z)

// 2. const --> variable ridak bisa di declare ulang dan tidak bisa write ulang
const y = 5;
// y = 3;
console.log(y)


// Aturan penamaan variable
// let 0 = --> tidak boleh diawali pakai angka
let z0 = 0;
// let @ = --> tidak boleh menggunakan symbol kecuali _ dan $
let _a = 0;
let $a$ = 0;
// let a* =
let Z0 = 15 // variable Case Sensitive

// Aturan Penulisan Variable
let isCarBroken = true;
const COLOR_RED = "red";
console.log(_a)