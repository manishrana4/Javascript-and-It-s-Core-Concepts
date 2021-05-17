// SCOPE

var a = 1;

function simpleFunction(){
    var a=4;
    console.log("Loacl Scope: a=",a);    
}

simpleFunction();

console.log("Global Scope: a=", a);

function X(){
    var a=100;

    function Y(){
        var b= 20;
        console.log("Scope inside Y function only, b:",b);
    }

    Y();
    // console.log("In X function but Outside Y funciton, b:",b); //it's not available here
    console.log("In X function Scope, a:",a);
}

X();

console.log("Global scope, Value of a:", a);




