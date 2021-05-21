// Comparing Objects

let a = {
    name: "Harry",
    age: 20,
}
let b = {
    name: "Harry",
    rate: 20,
}
let c = {
    name: "Larry",
    age: 20,
}

function compareObjects(obj1, obj2) {

    let obj1Keys=Object.keys(obj1);
    let obj2Keys=Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        console.log("not equal objects");
        return false;
    }

    for (objProp in obj1) {
        console.log("objProp:", objProp);
        if (obj1[objProp] !== obj2[objProp]) {
            console.log("Not equal objects");
            return false;
        }
    }
    console.log("Objects are equal");
    return true;
}

compareObjects(a, b);
compareObjects(a, c);
console.log("--------------");



let x = {
    name: "Harry",
    age: 20,
    info: {
        faculty: "Sci",
        Subject: "IT"
    }
}
let y = {
    name: "Harry",
    age: 20,
    info: {
        faculty: "Sci",
        Subject: "IT"
    }
}
let z = {
    name: "Harry",
    age: 20,
    info: {
        faculty: "Sci",
        Subject: "IT",
        Position: "Substitute Teacher"
    },
    // color:"red",
}

function isObject(obj) {
    return obj !== null && typeof (obj) === 'object';
}

function areObjectsEqual(obj1, obj2) {
    
    let obj1Keys=Object.keys(obj1);
    let obj2Keys=Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        console.log("Objects are equal");
        return false;
    }

    for (objProp in obj1) {
        console.log("objProp:", objProp);

        let areObjects = isObject(obj1[objProp]) && isObject(obj2[objProp]);
        console.log("areObjects", areObjects);

        if (areObjects && !areObjectsEqual(obj1[objProp], obj2[objProp]) || !areObjects && obj1[objProp] !== obj2[objProp]) {
            console.log("Objects are not equal");
            return false;
        }
    }

    console.log("Objects are equal");
    return true;
}


console.log("----x y:----")
areObjectsEqual(x, y);
console.log("---x z:---")
areObjectsEqual(x, z);

