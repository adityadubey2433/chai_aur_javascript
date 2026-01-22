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
// console.log(typeof stringNumber);
// console.log(stringNumber);
 


// ***********************************************Operation****************************************************

// goto tc39.es and => 7. Abstract operation

let value = 21
let negvalue = -value
// console.log(negvalue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);

let str1 = "hello"
let str2 = "  Aditya"
// console.log(str1 + str2);
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // => 12
// console.log(1 + "2"); // => 12
// console.log("1" + "2"); // => 12
// console.log("1" + 2 + 2); // => 122 // agar string first me aata hai to  baad wale sare number ko string me convert kar dega  
// console.log(1 + 2 + "2"); // => 32 // agar number first me ata hai to pahle sare number ko add kar dega fir last wala number ko string me convert kar dega 


// ** sabse kharab code likhne ka tarika hai **
console.log(true);   // true hi aayega 

console.log(+true);  // 1 aayega   
// console.log(true+);  // error aayega 

console.log(+"");  // 0 aayega 
