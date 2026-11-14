//OBJECTS IN JS

// const student ={
//     name : "Medinat",
//     age : 12,
//     height : 34,

// }
// console.log(student.name)

//NESTED OBJECT//
// const school = {
//     name: "Bright Future School",

//     student: {
//         name: "Musa",

//         contact: {
//             phone: "08012345678",
//             email: "musa@example.com"
//         }
//     }
// };

// console.log(school.student.name);
// console.log(school.student.contact.phone);

// //ANATOMY OF OBJECT//different parts that make up an object and work together
// //EXAMPLES//
// const person = {
//     name: "Ada", //string//
//     age: 23,      //number//
//     ismarried: true,   //Boolian//
//     hobbies: ["Reading", "coding"],  //Array//
//     Address: {city: Lagos}
// }

// //Object keys with spaces//
// const student = {
//     "first name": "Ada",
//     "last name": "Johnson",
//     "home address": "Lagos"
// };

// console.log(student["first name"]);
// console.log(student["last name"]);
// console.log(student["home address"]);


// //Object keys with special characters//
// const user = {
//     "user-name": "Ada",
//     "@email": "ada@example.com",
//     "favorite-color!": "Blue"
// };

// console.log(user["user-name"]);
// console.log(user["@email"]);
// console.log(user["favorite-color!"]);


// // Bracket Notation
// const car ={
//     "name.brand": "Toyota",
//     color: "red",
//     features: {
//         steeringwheelcolor: "red",
//         seatnumber : 34,
//        "home model": "toyota"
//     }
          
// }
// console.log(car.features["home model"])

// car.seatcolor = "red";
// console.log(car.seatcolor)

//1. Basic bracket notation//
// const student = {
//     name: "Ada",
//     age: 20,
//     course: "JavaScript"
// };
// console.log(student["name"]);
// console.log(student.name)
// //EXAMPLE 2// Accessing keys with spaces
// const person = {
//     "first name": "Nimah",
//     "@email": "exampleemail.com",
//     "last-name": "yusuf",
// }
// console.log(person["first name"]);
// console.log(person["@email"]);
// console.log(person["last-name"])

//EXAMPLE 3// Using a variable inside brackets
// const student = {
//     name: "Ada",
//     age: 27,
//     course: "Javascript"
// };
// const key = "name";
// console.log(student[key]);

// // EXAMPLE 4//Adding a property using bracket notation
// const student = {
//     name: "Ada"
// };

// student["age"] = 20;

// console.log(student);

// EXAMPLE 5//Changing an existing property//
// const product = {
//     name: "Blender",
//     price: 85000
// };

// product["price"] = 90000;

// console.log(product["price"]);

// // EXAMPLE 6//Bracket notation with a loop//
// const student = {
//     name: "Ada",
//     age: 20,
//     course: "JavaScript"
// };

// const keys = ["name", "age", "course"];

// keys.forEach(function(key) {
//     console.log(student[key]);
// });


//adding a new property to an already existing object means adding new information to an object after you have created it.
//Example 1//
// Add a new property using dot notation
// const student = {
//     name: "Ada",
//     age: 20
// };

// student.course = "JavaScript";

// console.log(student);

//EXAMPLE 2// 
// Add a new property using bracket notation
// const student = {
//     name: "Ada",
//     age: 20
// };

// student["course"] = "JavaScript";

// console.log(student);

//EXAMPLE 3//
// Add a property using a variable
// const student = {
//     name: "Ada",
//     age: 20
// };

// const newProperty = "course";

// student[newProperty] = "JavaScript";

// console.log(student);

//EXAMPLE 6//
//Add a nested object to an existing object//
// const student = {
//     name: "Ada",
//     age: 20
// };

// student.address = {
//     city: "Lagos",
//     country: "Nigeria"
// };

// console.log(student.address.city);


// ADDING NEW PROPERTY TO AN ALREDY EXISTING//
// const school ={
//     name: "bright future",
//     students: 27,
// }
//  school.classes = "jss1"
// };
// console.log(school.classes)

// student.cgpa = 4.1
// console.log(student.cgpa)

//  const student = {
//     name: "Ada",
//      age: 20,
//  };

//  studentcourse = "JavaScript";

//  console.log(studentcourse);

//  const student = {
//      name: "Ada",
//      age: 20,
//      course: "JavaScript",
//      features: ["name", "age", "course"]
//  }
//  console.log(student.features[1])


//ARRAY OF OBJECTS//
// const car =[
//      {carName: "honda", carColor: "blue", carproperty: "seatCover"},
//     {carName: "toyota", carColor: "red", carproperty: "seatCover"},

// ]
   
// console.log(car[1].carName);
// console.log(car[0].carproperty)


// const fruits = [
//     {name: "apple", color: "red", calories: 95},
//     {name: "orange", color: "orange", calories: 45},  
//     {name: "banana", color: "white", calories: 105},
//     {name: "coconut", color: "yellow", calories: 159},
//     {name: "pineapple", color: "brown", calories: 37},
//  ];
//  //console.log(fruits[4].calories)

//  fruits.push({name: "grape", color: "black", calories: 12});

// console.log(fruits);

// fruits.push({name: "grape", color: "black", calories: 12});

// console.log(fruits);

// fruits.splice(1, 1);

// console.log(fruits);

// fruits.splice(1, 0, {name: "mango", color: "yellow", calories: 60});

// fruits.forEach(fruit => {
//     console.log(fruit.name);
// });

// const fruitNames = fruits.map(fruit => fruit.name);

// console.log(fruitNames);

// const lowCalories = fruits.filter(fruit => fruit.calories < 100);

// console.log(lowCalories);

// const totalCalories = fruits.reduce((total, fruit) => {
//     return total + fruit.calories;
// }, 0);

// console.log(totalCalories);

// const highestCalories = Math.max(
//     ...fruits.map(fruit => fruit.calories)
// );

// console.log(highestCalories);

// const lowestCalories = Math.min(
//     ...fruits.map(fruit => fruit.calories)
// );

// console.log(lowestCalories);




// //checking whether a property exist
// const person ={
//     name: "medinat",
//     age: 20,
//     occupation: "seamstress"
// }
// console.log("name" in person);
// console.log("age" in person);
// console.log("occupation" in person);

// console.log("gender" in person);
// console.log("height" in person);
// console.log("address" in person)

// //An array of objects in JavaScript is an array that contains multiple objects.
// const students = [
//     {
//         name: "Ada",
//         age: 20,
//         course: "JavaScript"
//     },

//     {
//         name: "Musa",
//         age: 25,
//         course: "HTML"
//     },

//     {
//         name: "John",
//         age: 22,
//         course: "CSS"
//     }
// ];

// console.log(students);

// //Function with two parameters
// function addNumbers(a, b) {
//     console.log(a + b);
// }

// addNumbers(10, 5);
// addNumbers(20, 30);

// //Function with return
// function multiply(a, b) {
//     return a * b;
// }

// const result = multiply(5, 4);

// console.log(result);

// //Arrow function
// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(10, 20));

// //Object and Function working together
// const student = {
//     name: "Ada",
//     course: "JavaScript",

//     introduce: function() {
//         console.log("My name is " + this.name);
//     }
// };

// student.introduce();

// //Anonymous Function
// function() {
//     console.log("Hello!");
// }//it does not have a function name to be called therefore its anonymous

// //Anonymous Function with Parameters
// const add = function(a, b) {
//     console.log(a + b);
// };

// add(10, 20);
// add(5, 15);

// //. Anonymous Function with Return
// const multiply = function(a, b) {
//     return a * b;
// };

// const answer = multiply(5, 4);

// console.log(answer);

// //Anonymous Function inside an Array Method
// const fruits = ["Apple", "Mango", "Orange"];

// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });

// //Another example using .filter():
// const scores = [20, 45, 60, 80, 90];

// const passed = scores.filter(function(score) {
//     return score >= 50;
// });

// console.log(passed);

// //this refers to the object that is calling a function, when the function is called as an object method.
// const student = {
//     name: "Ada",
//     age: 20,

//     greet: function() {
//         console.log(this.name);
//     }
// };

// student.greet();

// //Using this to access multiple properties

// const person = {
//     firstName: "John",
//     lastName: "David",
//     age: 25,

//     introduce: function() {
//         console.log("My name is " + this.firstName + " " + this.lastName);
//         console.log("I am " + this.age + " years old");
//     }
// };

// person.introduce();

// //this in an arrow function
// //Regular function
// const person = {
//     name: "Ada",

//     greet: function() {
//         console.log(this.name);
//     }
// };

// person.greet();

// //Arrow function
// const person = {
//     name: "Ada",

//     greet: () => {
//         console.log(this.name);
//     }
// };

// person.greet();

// //How to copy an object
// //Imagine you have a student object:
// const student1 = {
//     name: "Ada",
//     age: 20,
//     course: "JavaScript"
// };


// //You want to make another object with the same information.

// //You might try this:
// const student2 = student1;

// console.log(student2);. 
