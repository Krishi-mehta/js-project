const myObj = {
    name : "krishna",
    age : 18,
    education : "BCA",
    graduate : false,
    langauges : ["ml","python","react"]
}

console.log(myObj["name"]);

console.log(myObj.age)

myObj.education = "MCA"
console.log(myObj.education);
console.log(myObj);

// Object.freeze(myObj)

// myObj.education = "BBA"
// console.log(myObj);

myObj.email = function(){
    console.log("krishi@google.com");
}
myObj.ageTwo = function(){
    console.log(`hello everybody ${this.age}`);
    
}
console.log(myObj.email());

console.log(myObj.ageTwo());

