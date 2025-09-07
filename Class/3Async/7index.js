function delay(resolve){
    setTimeout(resolve,10000)
}

function Promisified(){
    const CAR=new Promise(delay)
    return CAR;
}

function car(name){
    console.log(`${name} car is booked`);
}


Promisified().then(function(){
    car("farrari");
})