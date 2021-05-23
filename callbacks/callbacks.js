// Call backs in JS


let a = 10;

function callbackFunction() {
    console.log("All tasks complete !!!");
}

function add(x, y, callback) {

    let result = x + y;
    if (callback) {
        callback();
    }
    return result;
}

let z = add(3, 4, callbackFunction);
console.log('the result is:', z);

