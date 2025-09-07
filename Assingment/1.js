function sum(a,b){
    console.log(a+b);
}

sum(2,3);
sum("ab","cd");
// alert("aaaj meri bahen ka badeeee hai");
// let a=prompt("enter the value of a");
// let b=prompt("enter the value of b");
// sum(a,b);

obj={          //creating object
    Myname:"Pushkar shah",
    Rollno:230817,
    College:"IIT Kanpur",
    Branch:"earth Science",
}
console.log(obj)          //printing whole object
console.log(obj.Branch)       //printing elements of obj
console.log(obj.College)

obj.age=21;
console.log(obj)          //printing whole object

for (const key in obj) {
    console.log(key,obj[key]);
}

console.log(`here i am printing a complete object :  ${obj.College}`)


