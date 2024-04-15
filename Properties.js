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

//toString() method
//1. It is used to convert an object to a string.
//example 1

let array =[1,'saikrishna','dalai',2263041,'centrica'];
console.log(array.toString()); // Outputs: 1,saikrishna,dalai,2263041,centrica

//example 2

// if you want convert object to string then use toString() method then it will return [object Object]
let person3 = {
    firstName: "krishna",
    lastName: "Dalai",
    age: 22,
    
};

console.log(person3.toString()); // Outputs: [object Object]


//example 2
//you need to override the toString() method to return the desired output.
let person4 = {
    firstName: "krishna",
    lastName: "Dalai",
    age: 22,
    toString: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person4.toString()); // Output : krishna Dalai

//conversion of string into number 
//1. by number constructor
let num = Number("123");
console.log(num); // Outputs: 123

//2. by parseInt() method
let str = "123456asdd";
let num2 =parseInt(str);
console.log(num2); // Outputs: 123456


//property attributes




