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


const myObj = {
    user: "abc",
    id:12
}

function callObject(objValue){
    return objValue
}

// console.log(callObject(myObj));
let newObj = callObject({
    user:"cde",
    password:345
})

console.log(newObj);


function anyValue(...num1){       //function anyValue(val1,val2,...num1)//output:[3,4]
    return num1
}

console.log(anyValue(1,2,3,4));

const myArray = [10,20,30,40]

function array_call(arrValue){
    return arrValue
}

console.log(array_call([100,200,300,400]));

