//anonymous Functions

//Functions with no name ,which are often used as arguments to other functions
let array = [1, 2, 3, 4, 5];

// Here, an anonymous function is passed as an argument to the `map` function
array = array.map(function(item) {
    return item * 2;
});

console.log(array); // Outputs: [2, 4, 6, 8, 10]

//Arrow Functions
//Arrow functions are a more concise way of writing function expressions in JavaScript.

// Here, an arrow function is passed as an argument to the `map` function
array = array.map(item => item ** 2);

console.log(array); // Outputs: [2, 4, 6, 8, 10]