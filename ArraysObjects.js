//Arrays in js
//1. Arrays are a collection of elements
//2. Arrays can store any data type
//3. Arrays are zero-indexed
//4. Arrays are mutable
//5. Arrays can be nested
//6. Arrays have a length property
//7. Arrays have a variety of methods


//Creating an Array
let fruits = ["Apple", "Banana", "Cherry"];

//Accessing Elements
console.log(fruits[0]); // Outputs: Apple

//Modifying Elements
fruits[1] = "Blueberry";
console.log(fruits); // Outputs: ["Apple", "Blueberry", "Cherry"]

//Adding Elements
let array = [1, 2, 3,6,7,8,9,10];
array.push(4); // Adds 4 to the end of the array
console.log(array); // Outputs: [1, 2, 3, 4]

//Removing Elements

let lastElement = array.pop(); // Removes the last element from the array
console.log(array); // Outputs: [1, 2, 3]
console.log(lastElement); // Outputs: 4

//Finding Elements

let index = array.indexOf(1); 
console.log(index); 


//Removing an Element by Index
array.splice(1, 1); //REMOVES ONE ELEMENT FROM INDEX 1
console.log(array); 

//ITERATING OVER AN ARRAY

//1.USING FOR LOOP
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


//2.USING FOR...OF LOOP
array.forEach(function(item, index) {
    console.log(item, index); // Logs each item and its index
});

//MAPPING AN ARRAY
//MAP KEYWORD IS USED TO CREATE A NEW ARRAY BY APPLYING A FUNCTION TO EACH ELEMENT OF THE ORIGINAL ARRAY
let newArray = array.map(function(item) {
    return item * 2; 
});
console.log(newArray); 


//FILTERING AN ARRAY
//FILTER KEYWORD IS USED TO CREATE A NEW ARRAY WITH ELEMENTS THAT PASS A CERTAIN CONDITION
let filteredArray = array.filter(function(item) {
    return item > 2; 
});
console.log(filteredArray);



//Objects in js
//it is similar to array but it is a collection of key-value pairs
//it is also called as json objects
//Objects are mutable
//Objects can be nested
//Objects have a variety of methods
//can access by using property

//creating an object

obj = {
    name:"sai krishna",
    age:22,
    empId:2263041,
    clientName :"Centrica",


}

console.log(obj.clientName); // Outputs: Centrica
console.log(obj["name"]); // Outputs: sai krishna

//Modifying an Object
//adding a new property
obj.location = "Chennai";
console.log(obj.location); // Outputs: Chennai

//modifying the property
obj.name ="krishna Dalai";
console.log(obj.name); // Outputs: krishna Dalai

//deleting a property
delete obj.clientName;
console.log(obj.clientName); // Outputs: undefined

//Iterating over an Object
//1. USING FOR...IN LOOP
for (let key in obj) {
    console.log(key, obj[key]);
}

//2. USING OBJECT.KEYS METHOD
let keys = Object.keys(obj);
console.log(keys); // Outputs: ["name", "age", "empId", "location"]
let values = Object.values(obj);
console.log(values); // Outputs: ["krishna Dalai", 22, 2263041, "Chennai"]


//delete property from an object in js
//delete obj.clientName;
delete obj["clientName"];

console.log(obj); // Outputs: undefined