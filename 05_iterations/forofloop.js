
const myArray = [1,2,3,4,5]

for (const i of myArray) {
    console.log(i)
}

const greetings = "Hello World!"

for(const greet of greetings){
    console.log(greet)
}

const map = new Map()
map.set("IN","India")
map.set("USA","United states of Australia")

for (const [key,value] of map) {
    console.log(key ,':-',value)
}

