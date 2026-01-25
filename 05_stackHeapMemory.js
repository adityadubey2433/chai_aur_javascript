//Stack (Primitive) , Heap (Non - Primitive)

let myCompanyname = "Aditya AND"
let anothername = myCompanyname
anothername = "Aditya TechnoLabs"

console.log(myCompanyname);
console.log(anothername);

let userOne = {
    email: "aditya@example.com",
    upi: "aditya@oksbi"
}

let userTwo = userOne

userTwo.email = "aditya21@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);

