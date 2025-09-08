
function delayed(fn: () => void): number {
    setTimeout(fn, 2000)
    return 1;
}

function hello() {
    console.log("Hello after 2 sec")
}

delayed(hello);