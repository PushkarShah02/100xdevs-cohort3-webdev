fetch("https://jsonplaceholder.typicode.com/posts/1").then(async (response)=>{
    const output = await response.json();
    console.log(output.title);
    console.log(output);
})

// both are same , but below one is syntatically good


async function main(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await response.json();
    console.log(json);

}

main();

console.log("1 2 ka 4 and 4 2 ka 1")