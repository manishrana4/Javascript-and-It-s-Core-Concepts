

let numbers=[5,4,3,2,1];

let y = numbers.map((number)=>{
    return number*5;
});

console.log("y:",y);

let z = numbers.filter((number)=>{
    return number%2===0;
})

console.log("z:",z);

let red = numbers.reduce(( sum, number )=>{
    return sum+number;
},0)

console.log("reduced:",red);

numbers.forEach((number)=>{
    console.log(number)
})
