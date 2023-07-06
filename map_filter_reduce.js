// MAP, FILTER, REDUCE

//1. map()

const nums = [1,2,3,4];

const twice = nums.map((num, i, nums) => {
    return num*2 + i;
});


//Polyfill for Map()
Array.prototype.myMap = function(cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const thrice = nums.map((num, i, nums) => {
    return num*3;
});


//2. filter

const greaterThan2 = nums.filter((num, i, nums) => {
    return num > 2;
});


//Polyfill for filter()
Array.prototype.myFilter = function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp; 
}

const even = nums.myFilter((num, i, nums) => {
    return num%2 === 0;
});
// console.log(even);


//3. reduce

const sum = nums.reduce((prev, curr, i, nums) => {
    return prev + curr; 
}, 0);


//Polyfill for reduce
Array.prototype.myReduce = function(cb, initialValue){
    let accumulator = initialValue;
    for(let i = 0; i<this.length; i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}
const product = nums.myReduce((prev, curr, i, nums) => {
    return prev + curr;
},0);

// console.log(product);





//OUTPUT QUESTIONS

let students = [
    {name: 'Piyush', roll: 31, marks: 80},
    {name: 'Jenny', roll: 15, marks: 69},
    {name: 'Kushal', roll: 16, marks: 35},
    {name: 'Dilpreet', roll: 7, marks: 55},
];

//1. return only the names of students in uppercase
const studentNames = students.map((student) => {
    return student.name.toUpperCase();
});
console.log(studentNames);


//2. return the details of those who scored more than 60 marks
const details = students.filter((student) => {
    return student.marks > 60 && student.roll > 15;
});
console.log(details);


//3. sum of marks of all the students
const sumOfMarks = students.reduce((acc, curr) => {
    return acc + curr.marks;
}, 0);

console.log(sumOfMarks);


//4.return names of the students who scrored more than 60
const result = students.filter((student) => {
    return student.marks > 60;
}).map((student) => {
    return student.name;
});

console.log(result);


//5 Return the total marks for the students with the marks greater thsn 60 after 20 marks have been added to those scored less then 60

const output = students.map((student) => {
    if(student.marks < 60){
        student.marks += 20;
    }
    return student;
}).filter((student) => {
    return student.marks > 60;
}).reduce((acc, curr) => {
    return acc + curr.marks;
}, 0);

console.log(output);





