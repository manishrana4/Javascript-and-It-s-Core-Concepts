// Spread operator


let a = ["a", "b", "c", "d"];

let b = [...a];

console.log("a,b:", a, b);



b[0] = "x";

console.log("a,b:", a, b);


let x = {
    name: "harry",
    age: "40"
}

let y = {
    class: 12,
    faculty: "Science",
}

let z = { ...x };


console.log("x,z,", x, z);

let u={...x,...y};

console.log("u:",u)

z.name = "Patrick";

console.log("x,z,", x, z);

let numbers = [1, 2, 3];

function add(x, y, z) {
    return x + y + z;
}

let sum = add(...numbers);

console.log("sum:", sum);
