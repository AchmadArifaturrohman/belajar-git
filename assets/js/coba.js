// Variable
// 1. var = Old School --> variable bisa di declare ulang maupun write ulang

var x = 0;
// var x = 10;
for (var i = 0; i <= 10; i++) {
    x += 1;
    console.log(x);
};
for (var i = 11;i >= 1; i--) {
    x -= 1;
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

// Type data 
let text = "Hello World"; // string 
let number = 10; // number
let kosong = null; // null
// let undefined // undefined
// let undefined = undefined; // undefined
let isMorning = true; // boolean
let isEvening = false; // boolean

// Non primitive
// 1. object
const zenix = {
    brand: "Toyota",
    model: "Zenix",
    mesin: "Hybrid",
    tahun: 2024,
    warna: "Hitam",
    spec: {
        mesin: "2.01",
        rangka: "TNGA",
        tahun: 2024
    }
}
console.log(zenix);
console.log(zenix.brand);
console.log(zenix["model"]);
zenix.mesin = "Diesel";
console.log(zenix);
console.log(zenix.mesin);
// 2. array
const mobilToyota = ["Zenix", "Innova", "Prius"];
console.log(mobilToyota);
console.log(mobilToyota[0]);
console.log(mobilToyota[1]);
console.log(mobilToyota[2]);

mobilToyota[1] = "Innova Reborn";
console.log(mobilToyota);

const mobil = [
    {
        brand: "Toyota",
        model: "Zenix",
        mesin: "Hybrid",
        tahun: 2024,
        warna: "Hitam",
        spec: {
            mesin: "2.01",
            rangka: "TNGA",
            tahun: 2024
        }
    },
    {
        brand: "Toyota",
        model: "Innova",
        mesin: "Diesel",
        tahun: 2024,
        warna: "Hitam",
        spec: {
            mesin: "2.01",
            rangka: "TNGA",
            tahun: 2024
        }
    },
    {
        brand: "Toyota",
        model: "Prius",
        mesin: "Hybrid",
        tahun: 2024,
        warna: "Hitam",
        spec: {
            mesin: "2.01",
            rangka: "TNGA",
            tahun: 2024
        }
    }
]

// Operator =-*&%/!
// 1. == --> sama dengan
// 2. === --> sama dengan tipe datanya
// 3. != --> tidak sama dengan
// 4. !== --> tidak sama dengan tipe datanya
// 5. > --> lebih dari
// 6. < --> kurang dari
// 7. >= --> lebih dari sama dengan
// 8. <= --> kurang dari sama dengan
// 9. && --> dan
// 10. || --> atau
// 11. ! --> tidak
// 12. ? --> ternary
// 13. : --> ternary
// 14. , --> koma
// 15. . --> dot
// 16. () --> tanda kurung
// 17. [] --> tanda kurung siku
// 18. {} --> tanda kurung siku
// 19. => --> arrow function
// 20. -= --> dikurangi
// 21. += --> ditambah
// 22. *= --> dikali
// 23. /= --> dibagi
// 24. %= --> modulus
// 25. **= --> pangkat
// 26. ++ --> increment
// 27. -- --> decrement 
// 28. & --> and
// 29. % --> modulus
// 30. | --> or
// 31. ^ --> xor
// 32. ~ --> not
// 33. << --> shift left
// 34. >> --> shift right
// 35. >>> --> unsigned shift right
// 36. / --> dibagi
// 37. * --> dikali
// 38. + --> ditambah
// 39. - --> dikurangi
// 40. = --> sama dengan
// 41. ! --> tidak
// 42. && --> dan
// 43. || --> atau

// 1. Aritmatika
const tambah = 10 + 10; // tambah
const kurang = 10 - 10; // kurang
const kali = 10 * 10; // kali
const bagi = 10 / 10; // bagi
const modulus = 10 % 10; // sisa pembagian
const pangkat = 10 ** 10; // pangkat
const increment = 10; // increment
const decrement = 10;

// operand unary
const unary = 10;

// operand binary
const binary = 10;
const binaryTambah = binary + 10;
const binaryKurang = binary - 10;
console.log(binaryTambah);
console.log(binaryKurang);

// operand ternary
let age = 18;
let canVote = age >= 18 ? "Yes" : "No"; // canVote is "Yes"

// 2. String Concatenation
const firstName = "John";
const lastName = "Doe";
const greeting = "Hello, " + "World!"; // Concatenation
const templateLiteral = `Hello, ${firstName} ${lastName}!`; // Template literal
console.log(greeting, templateLiteral);

// 3. Assignment
let seribu = 1000;
seribu += 1000;
console.log(seribu);

// 4. Logical
const x1 = 1;
const x2 = 2;
const x3 = 3;
const x4 = 4;
const x5 = 5;
const x6 = 6;
const x7 = 7;
const x8 = 8;
const x9 = 9;
const x10 = 10;
const res = x2 > x1;
console.log(res);
const result = x2 > x10 ? "x2 is greater than x10" : "x2 is not greater than x10";
console.log(result);

// 4. Comparison 
const isEqual = 10 == "10"; // true, because == does type coercion
const isStrictEqual = 10 === "10"; // false, because === checks type as well
const isNotEqual = 10 != "10"; // false, because != does type coercion
const isStrictNotEqual = 10 !== "10"; // true, because !== checks type as well
console.log(isEqual, isStrictEqual, isNotEqual, isStrictNotEqual);

// 5. Bitwise
const bitwiseAnd = 5 & 1; // 1
const bitwiseOr = 5 | 1; // 5
const bitwiseXor = 5 ^ 1; // 4
const bitwiseNot = ~5; // -6
const bitwiseShiftLeft = 5 << 1; // 10
const bitwiseShiftRight = 5 >> 1; // 2
const bitwiseUnsignedShiftRight = 5 >>> 1; // 2
console.log(bitwiseAnd, bitwiseOr, bitwiseXor, bitwiseNot, bitwiseShiftLeft, bitwiseShiftRight, bitwiseUnsignedShiftRight);

// 6. Ternary
console.log(canVote);

// 7. String
console.log(greeting, templateLiteral);

// 8. Array
const fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date"); // Add to end
fruits.pop(); // Remove from end
fruits.unshift("Elderberry"); // Add to start
fruits.shift(); // Remove from start
console.log(fruits);

// 9. Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
person.age = 31; // Modify property
person.city = "New York"; // Add property
delete person.city; // Delete property
console.log(person);

// 10. Function
function add(a, b) {
    return a + b;
}
const sum = add(5, 10);
console.log(sum);

// 11. Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // Spread operator
console.log(arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // Spread operator
console.log(obj2);

// Find elements containing "nn"
const filteredMobilToyota = mobilToyota.filter(mobil => mobil.includes("nn"));
console.log(filteredMobilToyota);