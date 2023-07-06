// SCOPE -> a region where a variable is accessible and beyond that it is not.

//Types of scope: Global, local, functional, block, lexical

function main(){
    let a;
    let b;
    return a+b;
}

//let has bloack scope but var does not
{
    var x = 10;
}



// Variabel Shadowing
function func(){
    var greet = "hello";

    if(true){
        let greet = "hi";          // "var" can be shadowed by let but vice versa is not allowed
        console.log(greet);
    }
    console.log(greet);
}
func();


//Declaration

var b;
var b; // allowed

let c;
// let c;  not allowed

const d = 10;  //is the only way to declare a const



//Re-intialization

// var and let can be updated but const cannot



//Hoisting
//During the declararion phase js engine moves the function and variable declaration to the top of the code

console.log(count);
var count = 5;

// let variabes are hoisted but in the "Temporal Dead Zone"
// TDZ is the time between the declartion and initialization of let and const variables