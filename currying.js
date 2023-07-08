//CURRYING - When a function takes arguments one at a time and return another funtion to accept the next argument 

function fn(a){
    return function (b){
        console.log(a, b);
    }
}
fn(3)(5);


//Questions

//1. sum function using curring
function sum(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
};
sum(2)(6)(1);

// Partial application
function sum1(a){
    return function(b,c){
        console.log(a+b+c);
    }
};
sum1(2)(6,1);


//2.
function evaluate(op){
    return function(a){
        return function(b){
            switch (op) {
                case "add":
                    console.log(a+b);
                    break;
                case "subtract":
                    console.log(a-b);
                    break;
                case "multiply":
                    console.log(a*b);
                    break;
                case "divide":
                    console.log(a/b);
                    break;
                default:
                    break;
            }
        }
    }
}
evaluate("add")(4)(2);
evaluate("subtract")(4)(2);
evaluate("multiply")(4)(2);
evaluate("divide")(4)(2);


//3. Infinite Currying
function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
}
console.log(add(1)(2)(3)());