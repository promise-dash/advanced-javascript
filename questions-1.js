// QUESTIONS

//1. Implicit and Explicit binding

const obj1 = {
    name: "ABC",
    display1: () => {
      console.log(this.name);       
      // in arrow function "this" points to the window object
    },
    display2 () {
      console.log(this.name);       
      // "this" points to the object
    }
  }
  
  const obj2 = {
    name: "XYZ",
  }
  
  obj1.display2.call(obj2);
  
  
  
//2. Memoization

  const memoize = (fn) => {
    const cache = {};
    return function (...args){
      const key = JSON.stringify(...args);
      if(key in cache){
        return cache[key];
      }
      cache[key] = fn(...args);
      return cache[key];
    }
  }

  const square = (num) => {
    for(let i = 0; i<100000; i++){}
    return num**2;
  }

  const memoizedSquare = memoize(square);
  
  // console.log(memoizedSquare(45));
  // console.timeEnd("first call");

  // console.log(memoizedSquare(45));
  // console.timeEnd("second call");



// 3. Event Loop

  console.log("a");
  setTimeout(() => console.log("set"), 0);
  Promise.resolve(() => console.log("promise")).then((res) => res());
  console.log("b");



//4. Infinite currying

 const add = (a) => {
  return (b) => {
    if(b) return add(a+b);
    return a; 
  }
 }

  console.log(add(5)(2)(4)(8)());



//5. Implement this code

const calc = {
  total: 0,
  add: (a) => {
    calc.total += a;
    return calc;
  },
  multiply: (b) => {
    calc.total *= b;
    return calc;
  },
  subtract: (c) => {
    calc.total -= c;
    return calc;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);