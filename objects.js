//Objects

const user = {
    username: "Promise",
    age: 22,
    country: "India",
    "greeting from me": "Hello everyone!"
};

//property to add
const property = "phone";
const number = "123456789";

user.email = "user@gmail.com";    //add property
user[property] = number;

delete user.country;             // delete property (this works only for objects)
console.log(user);



//Looping in objects
for(key in user){
    console.log(key + ": " + user[key]);
}




//Questions

//1.
function fn(a){
    delete a;    //delete will not work here
    return a;
}
console.log(fn(5));


//2.
let obj = {
    a: "one",
    b: "two",
    a: "three",     
    // only one "a" will be there inside the object and will be updated to its latest value
};
console.log(obj);


//3.
let obj1 = {
    a: 100,
    b: 200,
    title: "The title",
};
console.log(obj1);

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof(obj[key]) === "number"){
            obj[key] *= 2;
        }
    }
}
multiplyByTwo(obj1);
console.log(obj1);


//4.
const a = {};
const b = {key: "b"};
const c = {key : "c"};

a[b] = 123;
a[c] = 456;
/*
    object cannt be assigned as a key that why
    a[b] => a["[object Object]"] = 123
    a[c] => a["[object Object]"] = 456
    
    as the latest value for the same key in "a" in 456 teh output in 456
    */
   console.log(a[b]);
   
 

//5. JSON.stringify vs JSON.parse
let stringified = JSON.stringify(user);     //object => string
console.log(stringified);
let parsed = JSON.parse(stringified);      // stringified string => object
console.log(parsed);

    //use cases
    localStorage.setItem("test", stringified);     //to store an object as a string value
    JSON.parse(localStorage.getItem("test"));



//6.
console.log([..."India"]);


//7.
let employee = {username: "John", age: 23};
let admin1 = {admin: true, employee};
let admin2 = {admin: true, ...employee};

console.log(admin1);
console.log(admin2);
   

//8.
const settings = { 
    username: 'Kevin', 
    level: 19, 
    health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']);  
console.log(data)       //only the specified prperties will be stringified


//9.
const shape = { 
    radius: 10, 
    diameter() { return this.radius * 2; }, 
    perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter()); 
console.log(shape.perimeter());


//10. Destructuring and renaming
let userObj={ 
    name:"Promise", 
    age:22 
}
const {name: myName, age: myAge}= userObj;
console.log(myName, myAge);


//11. Referencing
let x = { greeting: 'Hey!' };
let y;

y = x;              //pass by reference
x.greeting = 'Hello';
console.log(y.greeting); 


//12.
console.log({a:1} == {a:1});
console.log({a:1} === {a:1});



//13.
let person = { name: 'Lydia' };
const members = [person];

person = null;                //does not affect
// person.name = null;       //does affect

console.log(members);



//14.
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();    //20
multiply();    //20
multiply(value); //20
multiply(value); //40



//15. 
function changeAgeAndReference(person) {
    person.age = 25;
    person = {           //reassign
      name: 'John',
      age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?





   
   
   