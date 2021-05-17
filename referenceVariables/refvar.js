// REFERECE VARIABLES AND THEIR ASSIGNMENT

// There are two types of values that can be assigned to a variable. Primitive and Reference Values

// Here we can see the assignment of primitive values is simple.
// The primitive values are directly assigned too the variables, with no concern about the reference.

var a= 2; //assigned primitive value
var b; 

b=a; //assigned a to b, i.e value of b is assigned as of a

console.log(`a and b before changes: ${a}, ${b}`); // 2, 2

// value of b is changed i.e b is assigned another value 
b=5;

//Since the primitive values are directly assigned to the variables. The change in variable 
// b does not change value of the variable a. 
console.log(`a and b after changes in b variable: ${a}, ${b}`); // 2, 5

// Since a and b are assigned values of primitive type .. 
// the change in one of them does not change the other's value.

// However the case is a little different fo the reference variables

// The values of reference variables are not assigned directly.
        // The values are placed in the memory and the pointer or reference to the value assigned to the 
        // variable, hence the name reference variable.
        // Objects and Arrays are the example of reference values/type

// here we have created an object:
var personObj={
    name:"Harry",
    age:"30",
    hobby:"football"
}

// lets make a copy of that object:
var personObjCopy=personObj;
// here the value is assigned as an reference to both of the variables

console.log(`personObj and personObjCopy:`,personObj, personObjCopy)

personObjCopy.name="Leon";

console.log(`personObj and personObjCopy after change:`,personObj, personObjCopy)

// Change occurs in both since the value is assigned as reference to both the variables

var personObjCopy2={...personObj};
var personObjCopy3=Object.assign({}, personObj);
// this way a new copy of the object is created and the reference to that object
// is assinged to the object.. so it doesn't refernce to the same memory space as before
// because it creates a fresh new copy of object in new memory space and the reference value is assigned to the variable

personObjCopy2.name="Larry"; 
personObjCopy3.name="Barry";

console.log(`personObj,personObjCopy, personObjCopy2, personObjCopy3 after change:`,personObj, personObjCopy, personObjCopy2, personObjCopy3);
