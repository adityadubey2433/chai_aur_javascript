const name = "Aditya"
const repoCount = 25

// console.log(name + repoCount + " Value"); aise code  kam use krte hai

console.log(`Hello my name is ${name} and my reo count is ${repoCount}`); // ( ``:- iska name backtick hai)  

const gameName = new String('AdityaAND')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// conole.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);


const newStringOne = "  Aditya    "
console.log(newStringOne);  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
console.log(newStringOne.trim());

const url = "https://adityatechnolabs.com/%20adityadubey"
console.log(url.replace('%20', '_'));


console.log(url.includes('adi'));

const newName = new String('Aditya-Nath-Dubey-Gopalganj-Bihar')

console.log(newName.split('-'));
console.log(newName.split('-', 3));

