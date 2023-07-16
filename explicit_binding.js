
const name = "Promise";
const obj = {
    name: "John"
};
function sayHello(time, greet){
    console.log("Hello " + this.name + " " + time + " " + greet);
};

//call() => takes the object on which "this" will point, also we can pass arguments
sayHello.call(obj, 10, "good morning!");

//apply() => same as call but the arguments should be passed as an array
sayHello.apply(obj, [12, "good afternoon"]);

//bind() => same as call but it returns a function that can be called with different arguments alter.
const bindFunc = sayHello.bind(obj);
bindFunc(6, "good evening");
bindFunc(8, "good night");


//--------------------QUESTIONs-------------------
//1.
var status = "😎";

setTimeout(() => {
    var status = "😍";

    const data = {
        status: "🥑",
        getStatus(){
            return this.status;
        },
    };

    console.log(data.getStatus());            //🥑
    console.log(data.getStatus.call(this));   //😎
}, 0);


//2
const numbers = [5, 6, 2, 3, 7];

let max = Math.max.apply(null, numbers); // equal to Math.max

let min = Math.min.apply(null, numbers); // equal to Math.min 

console.log(max, min);


//3.
function f() {
    console.log( this );
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();
  