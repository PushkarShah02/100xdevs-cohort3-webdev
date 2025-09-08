interface UserType{
    name: string,
    age: number
}

function greet(user: UserType) {
    console.log("hello " + user.name)
}

let user: UserType = {
    name: "Pushkar",
    age: 22
}
greet(user);