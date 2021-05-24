// Spread operator

// in arrays
let a = ["a", "b", "c", "d"];

let b = [...a];

b[0] = "x";

let c = [...a, "e", "f"]

console.log("a,b,c :", a, b, c);

// in objects
let x = {
    name: "harry",
    age: "40"
}

let y = {
    class: 12,
    faculty: "Science",
}

let z = { ...x };

let u = { ...x, ...y };

z.name = "Patrick";

console.log("x,z,u", x, z, u);



