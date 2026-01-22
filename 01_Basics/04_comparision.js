console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 != 1);


console.log("2" > 1); // problem start here due to defferent data types
console.log("02" > 1);
// iss tarah ke conversion ko hamesha avoid krna chahiye.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// the reason is that an equality check == and comparison > < >= <= work diffrently.  Comparison conversion null to a number. treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log("2" === 2); // strictly check datatype also
