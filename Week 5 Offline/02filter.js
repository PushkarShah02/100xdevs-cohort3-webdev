const arr =[1,2,3,4,5,6];

function fn(n){
    if(n>3){
        return true;
    }
    else{
        return false;
    }
}

const ans=arr.filter(fn);
console.log(ans);