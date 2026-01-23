// Primitive
//   [notes:- these data types are call by value, when we get its copy original value]
// 7 types : String, Number, Boolean, null, undefined, Symbol, bigint



//   (Note:- javascript is a dynamicaly typed language) 



//**** second datatypes **** 
// Reference (Non primitive)
// Arrays, Objects, Functions,


const score = 100 // type : Number
const scoreValue = 100.3 // Type : Number 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); // false

const bigNumber = 21259354123215345612n  // last me 'n' lagate hai big int ke liye 
//console.log(typeof bigNumber);

const heros = ["shaktiman", "nagraj", "doga"];
//Objects-
let myObj = {
    name: "Aditya",
    age: 21,
}

const myFunction = function(){
    console.log("Hello Aditya");
}

console.log(typeof bigNumber);
// https://262.ecma-international.org/5.1/#sec-11.4.3