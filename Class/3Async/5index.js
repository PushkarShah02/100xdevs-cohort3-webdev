function random(resolve){
    setTimeout(resolve,3000);
}

let p=new Promise(random);


function callback(){
    console.log("Sab kushal mangal ho gaya")
}
p.then(callback)