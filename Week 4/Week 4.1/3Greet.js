const {Command}= require('commander');
const program= new Command();

program
 .option('-n,--name <name>',"Your Name")
 .option('-a,--age <number>','Yous Age')
 .parse()

const option =program.opts();
const name= option.name || "user";
const age=option.age;

console.log(`Hello, ${name} your age is ${age}`);