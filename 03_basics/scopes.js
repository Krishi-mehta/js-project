var a=10
let b=20
const c=30

if(true){
  var a =100
  let b =200
  const c = 300

  //console.log(b);
 // console.log(c);
  
}
// console.log(a);
// console.log(b);
// console.log(c);

function user(username){
  function userData(){
    const fullname = username
    console.log(fullname);
    
  }
  console.log(userData());
}
console.log(user("krishi mehta"));

console.log(one(1));        // access before the function
function one(num1){
  return num1
}
//console.log(one(1));


// console.log(two(2))
const two = function(num2){            // cant access before the function thats the 
  return num2                                    //  diff btween function syntax                                       
}

console.log(two(2))