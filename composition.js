//composition multiple function  => running multiple function 1 by 1 in an order using one compose funcion

let a = 5;
function addFive(a){
    return a + 5;
}
function subtractTwo(a){
    return a - 2;
};
function multiplyFour(a){
    return a * 4;
}

const composedFunction = function (...funcs) {
    return function (value){
        let result = value;
        for(let i = funcs.length-1; i >= 0; i--){
            result = funcs[i](result);
        }
        return result;
    }
}   
console.log(composedFunction(addFive, subtractTwo, multiplyFour)(a));