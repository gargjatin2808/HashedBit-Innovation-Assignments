// 1. var, let, const – scope difference
function scopeDemo() {
  var a = 10;
  let b = 20;
  const c = 30;

  if (true) {
    var a = 100;      // function scoped
    let b = 200;      // block scoped
    const c = 300;    // block scoped
    console.log("Inside block:", a, b, c);
  }

  console.log("Outside block:");
  console.log(a); // 100
  console.log(b); // 20
  console.log(c); // 30
}
scopeDemo();


// 2. Array of fruits & return second fruit
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit() {
  return fruits[1];
}
console.log("Second fruit:", getSecondFruit());


// 3. Push and pop in array
function modifyArray(arr) {
  arr.push("NewElement");
  arr.pop();
  return arr;
}
console.log("Modified array:", modifyArray([1, 2, 3]));


// 4. Square numbers using map()
function squareNumbers(arr) {
  return arr.map(num => num * num);
}
console.log("Squared numbers:", squareNumbers([1, 2, 3, 4]));


// 5. Filter odd numbers using filter()
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Odd numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));


// 6. Object greeting function
const person = {
  name: "Jatin",
  age: 22,
  occupation: "Student"
};

function greetPerson(p) {
  console.log(
    `Hello, my name is ${p.name}. I am ${p.age} years old and a ${p.occupation}.`
  );
}
greetPerson(person);


// 7. Calculate area of rectangle
function calculateArea(rect) {
  return rect.width * rect.height;
}
console.log("Rectangle area:", calculateArea({ width: 10, height: 5 }));


// 8. Return object keys using Object.keys()
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("Object keys:", getObjectKeys(person));


// 9. Merge two objects using Object.assign()
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log(
  "Merged object:",
  mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })
);


// 10. Sum of numbers using reduce()
function sumNumbers(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of numbers:", sumNumbers([1, 2, 3, 4, 5]));
