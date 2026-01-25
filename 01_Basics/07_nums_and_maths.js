const score = 500
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(3));

 const otherNumber = 25.6589 // 25.7
// const otherNumber = 125.6589 // 126
// const otherNumber = 1125.6589 // 1.13e+3   (note:- 1.13 * 10^3)

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString('en-US'));
// console.log(hundreds.toLocaleString('en-CH'));
// console.log(hundreds.toLocaleString('en-GK'));
// console.log(hundreds.toLocaleString('en-NP'));
