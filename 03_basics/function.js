// function addTwoNumbers(){
//     let sum = 3+4
//     console.log(sum);
    
// }

// console.log(addTwoNumbers());


// function addTwoNumbers(a,b){
//     return a+b
// }

// const sum = addTwoNumbers(1,2)
// console.log(sum);

function userLogin(username){
    if(!username){
        console.log("Please enter a name");
        return
    }
    const userMsg = `${username} just logged in`
    console.log(userMsg);
    return
}

console.log(userLogin("krishi"));
console.log(userLogin(""));
console.log(userLogin());



