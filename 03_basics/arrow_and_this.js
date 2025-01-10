// const user = {
//     username:"dimple",
//     age:26,
//     userMessage : function (){
//        console.log (`${this.username}, Welcome`);
//        console.log(this);
       
//     }
// }

// console.log(user.userMessage());
// user.username = "krishna"
// console.log(user.userMessage());
// console.log(this);

//     const sum = (a,b)=>{
//     let add = a+b
//    console.log("hello");
//    console.log(add);
  
   
  
//     return
    
// // }
// console.log(sum(3,4))

// const sum = (num1,num2) => (num1+num2) // in () never use return


// const sum = (num1,num2) => {return num1+num2}  // in {} always use return   //this is explicit

//  const sum = (num1,num2) => num1+num2  // in simple you dont have to use return  //this is implicit

// console.log(sum(1,2))

// const myFun = () => ({username:"abc", age:18})

// console.log(myFun())

const This = ()=>{
    console.log(this);
}

console.log(This());

console.log(this);
