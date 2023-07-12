// FUNCTIONS

//1. Function declaration
function square (num){
    return num*num;
}


//2. Function expression
const sum = function(a, b){
    return a+b;
}


//3. First Class Function: are the functions of a language where the function can treated as variables
// they can be passed as argumnets, manipulted etc.

function greet(name){
    return "Hello " + name;
}

let yourName = "John";
function greeting(callback){
    console.log(callback(yourName));
}
greeting(greet);


//4. IIFE: Immediately Invoked Function Expression

(function twice(num){
    console.log(num * 2);
})(5);

    //Qustion based on IIFE
    (function(x){
        return (function(y){
            console.log(x);          // 1 (due to closures)
        })(2);  
    })(1);


//5. Hoisting in functions
//the complete function declaration is hoisted at the top of the file

sayHello();

function sayHello(){
    console.log(n);
    var n = 25;
    console.log("Hello! how are you?");
}

    //Question on hoisting
    var x = 21;

    const fun = function(){
        console.log(x);
        var x = 20;
    };
    fun();


//6. Rest & Spread Operator

function product(...nums){   //rest: rest operator must be the last parameter
    console.log(nums);
};
let arr = [1,2,3];
product(...arr);    //spread


//7. Callback Functions: Its a function passed to another function as a argument, 
//which is then invoked in the outer function to perform some action

//ex: setTimeOut, map, filter, reduce

// function greet(name){
//     return "Hello " + name;
// }

// let yourName = "John";
// function greeting(callback){
//     console.log(callback(yourName));
// }
// greeting(greet);



//8. Arrow functions vs Regular functions

    //1. syntax
    function fn1(){
        console.log("normal function");
    }

    const fn1Arrow = () => console.log("arrow function");

    //2. implicit return statement in regular function
    function fn2(){
        return "normal function";
    }

    const fn2Arrow = () => "normal function";

    //3. Arguments
    function fn3(){
        console.log(arguments);    //accesible
    }
    fn3(1,23,34);

    const fn3Arrow = () => {
        // console.log(arguments);    //error
    }
    fn3Arrow(1,23,34);

    //4. "this" keyword
    let user = {
        username: "David",
        rc1() {
            console.log(this.username);
        },
        rc2: () => {
            console.log(this.username);        //dont have acces to "this" keyword
            // console.log(user.username);
        }
    };
    user.rc1();
    user.rc2();




