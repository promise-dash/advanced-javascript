// SCOPE -> a region where a variable is accessible and beyond that it is not.

//Types of scope: Global, local, functional, block, lexical

function main(){
    let a;
    let b;
    return a+b;
}

//"let" has bloack scope but "var" does not
{
    var x = 10;
}

/* "var" vs "let" vs "char"
    1. var is functional scoped while let and const are block scoped
    2. var can be redeclared, but let and const cannot.
    3. var and let can be reinitialized but const cannot
    4. var and let can be declared without initialization but const as be initializsed.
*/


if (Math.random() > 0.5) {
    var x = 1;
  } else {
    var x = 2;
  }
console.log(x);      // this works because var doesnt have any block scope, here its treated as a global variable
//Thats why we should use let and const



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