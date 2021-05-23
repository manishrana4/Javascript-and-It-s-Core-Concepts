// Spread operator


let a=["a","b","c","d"];

let b=[...a];

console.log("a,b:",a,b);

b[0]="x";

console.log("a,b:",a,b);


let x={
    name:"harry",
    age:"40"
}


let z={...x};

console.log("x,z,",x,z);

z.name="Patrick";

console.log("x,z,",x,z);

