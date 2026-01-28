// 1. Display even numbers from 1 to 100
console.log("Even numbers from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 2. Calculator function using switch
function calculate(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}

console.log("\nCalculator Output:");
console.log(calculate(10, 5, "add"));
console.log(calculate(10, 5, "subtract"));
console.log(calculate(10, 5, "multiply"));
console.log(calculate(10, 5, "divide"));

// 3. Tax calculation using switch
function findTax(salary) {
    let taxRate;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary <= 1500000):
            taxRate = 0.20;
            break;
        default:
            taxRate = 0.30;
    }

    return salary * taxRate;
}

console.log("\nTax Calculation:");
console.log(findTax(400000));
console.log(findTax(800000));
console.log(findTax(1200000));
console.log(findTax(2000000));

// 4. Sum of products of corresponding digits
function sumOfProduct(n1, n2) {
    let sum = 0;

    while (n1 > 0 || n2 > 0) {
        let d1 = n1 % 10;
        let d2 = n2 % 10;

        sum += d1 * d2;

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

console.log("\nSum of Product of Digits:");
console.log(sumOfProduct(6, 34)); // Output: 24
