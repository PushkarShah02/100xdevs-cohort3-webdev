const fs = require("fs");
let content = fs.readFileSync("a.txt", "utf-8");
console.log(content);
content = fs.readFileSync("b.txt", "utf-8");
console.log(content);