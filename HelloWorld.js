console.log("Hello, World!"); //Print hello world

let name = "John Doe"; // String // data type  is let 
let age = 25; // Number
let isStudent = true; // Boolean

console.log(name);
console.log(age);
console.log(isStudent);


let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Outputs: Apple


let student = {
    name: "John Doe",
    age: 20,
    isStudent: true
};

console.log(student.name); // Outputs: John Doe  //json objects

function greet(name) {
    console.log("Hello, " + name);
}

greet("John Doe"); // Outputs: Hello, John Doelet age = 15;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}


//immediately invoked function expression (IIFE)
void function()
 {
     console.log("Hello World");
}() // Added parentheses to invoke the function


/*In JavaScript, you don't need a main method 
like you do in some other languages such as Java or C++. 
JavaScript is an event-driven language, 
which means it starts executing code from the top of the file and runs to the bottom, 
handling events and function calls as they occur.  */