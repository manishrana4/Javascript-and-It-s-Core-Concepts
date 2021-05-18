// De-structuring to extract properties from Objects

let obj = {
    name: "Harry",
    age: "20",
    hobby: "Football",
    subject: "Engineering"
}

let { name, age, ...rest } = obj;

console.log("name, age, rest:"+ name, age, rest);
// console.log(rest);

function x(someObject) {
    let { body, color, type } = someObject;

    console.log("body, color, type :", body, color, type);
}

x({
    body: "metal",
    color: "violet",
    type: "gun"
});


