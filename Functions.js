//keywords used to declare variables  1. var 2. let 3. const
//var is function scoped and let is block scoped
//let and const are block scoped


//factorial using recursion
function factorial(n) 
{
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

//nth fibinocci  using recursion
function fib(n)
{
    if (n<=1)
    {
        return n;
    }
    else 
    {
        return fib(n-1)+fib(n-2);
    }
}


//calling the functions

console.log(fib(10));
let ans=factorial(5);
console.log(ans); 



//different kinds of functions

//function declaration
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Outputs: 8

//function expression
let multiply = function(a, b) {
    return a * b;
}

console.log(multiply(5, 3)); // Outputs: 15

//arrow function
let divide = (a, b) => {
    return a / b;
}

console.log(divide(15, 3)); // Outputs: 5

//Default parameters
function greet(name = "World") {
    console.log("Hello, " + name);
}

greet(); // Outputs: Hello, World
greet("John"); // Outputs: Hello, John


//Rest parameters
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15

//higher order functions
function add(a, b) {
    return a + b;
}

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(5, 3, add)); // Outputs: 8
