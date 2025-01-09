const user = new Object()  //single tone

const myObj = {    //non-singletone
    name: "rahul",
    age:19,
    email:"rahul@gmail.com",
    userfullname: {
        firstname: "khushi",
        lastname: "patel"
    }
}

const customer = {
    email:"rakshit@gmail.com",
    password:{
        login:12345,
        personal:"rak123"
    }
}

let call_obj = myObj.userfullname.firstname
console.log(call_obj);

let call_customer = Object.keys(customer,customer.password)
console.log(call_customer);

const name = {
    1:"1",
    2:"2",
    3:"3"
}

const surName = {
    1:"1",
    2:"2",
    3:"3"
}

const obj3 = {...name,...surName}
console.log(obj3);

const obj4 = Object.assign({},name,surName)
console.log(obj4);

const customer_data = [
    {
        customer_name:"sudesh",
        customer_id:12
    },
    {
        customer_name:"radesh",
        customer_id:21
    },
    {
        customer_name:"krishna",
        customer_id:32
    }
]

console.log(customer_data[1]);
console.log(Object.keys(customer_data[1]));

