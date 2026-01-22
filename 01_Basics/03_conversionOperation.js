// let score = "33" // value = 33
// let score = "50abcde" // it will return NaN not a number
// let score = null // value = 0
// let score = undefined // value = NaN
// let score = true // value = 1
let score = "Aditya" // value = NaN


// console.log(typeof score); //it will show string datatype
// console.log(typeof (score)); // it will also show sting datatype

// converting string to number

let valueInNumber = Number(score) // it will show Number datatype
// ye number me convert to kar dega but uski value NaN aayegi ,  but types Number hi rhega 
// console.log(typeof valueInNumber); // 

// console.log(valueInNumber);


let isloggedIn = "Aditya"
let booleanIsloggedIn = Boolean(isloggedIn)
// console.log(booleanIsloggedIn);


// null => false
// "" => false
// 0 => false
// 1 => true
// 2 => true and so on
// undefined => false
// Aditya => true


let someNumber = 21
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
