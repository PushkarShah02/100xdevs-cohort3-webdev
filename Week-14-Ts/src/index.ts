function greet(user:{
    name:string,
    age:number
}){
    console.log("hello " + user.name)
}

let user :{
    name:string,
    age:number
}={
    name:"Pushkar",
    age:22
}
greet(user);