/* 
Filename: complexCode.js
Description: A complex and elaborate code that demonstrates various JavaScript concepts and functionalities.
*/

// Global variables
let username;
let age;

// User input validation
function validateUsername(input) {
    if (input.trim() === "") {
        throw new Error("Username cannot be empty!");
    }
    username = input;
}

function validateAge(input) {
    if (isNaN(input) || input < 0 || input > 120) {
        throw new Error("Invalid age!");
    }
    age = Number(input);
}

// Object-oriented programming
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Promises and asynchronous functions
function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

async function startApp() {
    try {
        await getUserInfo();

        console.log("Welcome to the complex application!");
        console.log("Please enter your information.");

        let userInput = prompt("Enter your username:");
        validateUsername(userInput);

        userInput = prompt("Enter your age:");
        validateAge(userInput);

        const person = new Person(username, age);
        person.greet();

        console.log("Application execution successfully completed!");
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// Event listeners and DOM manipulation
window.addEventListener("DOMContentLoaded", () => {
    startApp();
});

// Data structures and algorithms
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence:");
for (let i = 0; i <= 10; i++) {
    console.log(fibonacci(i));
}

// Other advanced functionalities
let intervalID;
let counter = 0;

function startCounter() {
    intervalID = setInterval(() => {
        console.log(`Counter: ${counter}`);
        counter++;
        if (counter === 10) {
            clearInterval(intervalID);
            console.log("Counter stopped!");
        }
    }, 1000);
}

startCounter();