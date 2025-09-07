const fs=require("fs");
function print(err,data){
    console.log(data);
    console.log(err);
}
fs.readFile("a.txt","utf-8",print)
fs.readFile("b.txt","utf-8",print)


console.log("all printing done!!")