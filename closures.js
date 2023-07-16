//CLOSURES

//Closures give you access to the outer function's scope from inner function. 

//Lexical scope: inner scope is able to acces the outer scope varibales

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
init();


//Closures example
function fun1(){
    var a = 10;
    return function fun2(){
        var b = 2;
        console.log(a+b);
    };
};

var fn = fun1();
fn();



//Closures chaining
function add(a){
    var x = 10;
    return function(b){
        var y = 20;
        return function(c){
            console.log(a + b + c + x + y);
        }
    }
}
add(1)(2)(3);



//Questions
console.log("---------Questions-----------");

//1.
let count = 0;
(function printCount(){
    if(count === 0){
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();


//2.
function createBase(a){
    return function (b){
        console.log(a + b);
    }
}
var addSix = createBase(6);
addSix(10);
addSix(21);


//3. Time optimization
function find(){
    let arr = [];
    for(let i = 0; i<1000000; i++){
        arr[i] = i*i;
    }

    return function(index){
        console.log(arr[index]);
    }
}
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");

console.time("12");
closure(12);
console.timeEnd("12");


//4 Set Timeout + Block scope
function fn(){
    for(var i=0; i<3; i++){
        setTimeout(function log(){
            console.log(i);           //3(3) cuz "var" does have a block scope
        }, 1000);
    } 
}     

//if still you want to print 0, 1, 2 but using var only

function func(){
    for(var i=0; i<3; i++){
        function inner(i){
            setTimeout(function log(){
                console.log(i);         
            }, 1000);
        }
        inner(i);
    }  
}

//5. Implement private counter
function counter(){
    var _counter = 0;

    function add(num){
        _counter += num;
    }
    function retrive(){
        return "Counter: " + _counter;
    }

    return{
        add,
        retrive
    };

}
const c = counter();
c.add(5);
c.add(10);
console.log(c.retrive());


//6. Module Pattern
const Module = (function(){
    function privateFunction (){
        console.log("private");
    }
    return {
        publicFunction: function () {
            console.log("public");
        }
    }
})();

Module.publicFunction();
// Module.privateFunction();    //error


//7. Run it only once
let code;
function coding(){
    code = 0;

    return function(){
        if(code===0){
            console.log("Start coding");
            code++;
        }
        else{
            console.log("Coding already");
        }
    }
}

const c1 = coding();
c1();
c1();
c1();
