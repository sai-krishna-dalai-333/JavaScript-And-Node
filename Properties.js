//Object literal
//1. It is a comma separated list of name-value pairs wrapped in curly braces.
//2. It is used when we need to create a single object with prioperties.
//3. It is also called as JSON objects.
let person = {
    firstName: "krishna",
    lastName: "Dalai",
    age: 22,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); // Outputs: krishna Dalai

//Object Constructor
//1. It is used when we need to create multiple objects with similar properties.
//2. It is used to create a blueprint for objects.
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

let person1 = new Person("krishna ", "Dalai", 22);
let person2 = new Person("Sai", "krishna", 21);

console.log(person1.fullName()); // Outputs: krishna Dalai
console.log(person2.fullName()); // Outputs: Sai krishna

//Ways to check whether a property exists in an object
//1.Using "IN" keyword
console.log("firstName" in person1); // Outputs: true
console.log("salary" in person2); // Outputs: false

//2.Using "hasOwnProperty" method
console.log(person2.hasOwnProperty("age")); // Outputs: true
console.log(person1.hasOwnProperty("salary")); // Outputs: false



