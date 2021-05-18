// CLOSURES

function x(a){

    return function(b){
        var d= a*b;
        console.log("d:",d);
    }
}

var y=x(4);
var z=y(20);

function greet(language){
    if(language==="en"){
        return (name)=>{
            console.log(`Hello ${name}, nice to meet you!`)
        }
    }else if (language=="es"){
        return (name)=>{
            console.log(`Hola ${name}, nice to meet you@`)
        }
    }
}

var greetEn = greet("en");
var greetEs = greet("es");

greetEn("Harry");
greetEs("Harold");