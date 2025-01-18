const myArray = [1,2,3,4,5]

for(const arr in myArray){
    console.log(arr)
}

for(const arr in myArray){
    console.log(myArray[arr])
}


const myObj = {
    username : "xyz",
    surname : "abc"
}

for(const obj in myObj){
    console.log(obj,myObj[obj])
}
for(const key in myObj){
    console.log(`${key} is ${myObj[key]}`)
}