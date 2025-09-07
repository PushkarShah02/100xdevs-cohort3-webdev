 const arr=[1,2,3,4,5];
 
function transform (i){
    return i*2;
}

function map(arr){
    const newArray=[];
    for(let i=0; i<arr.length; i++){
        newArray.push(transform(arr[i]));
    }
    console.log(newArray)
}

const ans = arr.map(transform);
console.log(ans);

map(arr)