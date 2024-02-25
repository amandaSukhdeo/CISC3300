/* 
Amanda Sukhdeo 
Internet and Web Programming 
Spring 2024 
Homework 5 
 */ 

// 1. Create a variable via a ternary operator that assigns a string based on an expression.
var age = 20; 
var message = (age >= 18)? 'You can vote!' : 'You must be at least 18 years old to vote.'; 
console.log(message); 

// 2. Create an object and loop through its properties, console logging each properties’ value
let user = {
    name: 'Amanda', 
    age: 20, 
    city: 'New York', 
}; 

for (let property in user) {
    if(user.hasOwnProperty(property)) {
        console.log(`${property}: ${user[property]}`); 
    }
}

// 3. Create an array of numbers. Using the map function, create a second array of those numbers squared.
const numArray = [1, 2, 3, 4, 5]; 
const numsSquared = numArray.map(number => number ** 2); 
console.log(numsSquared); 

/* 
4. What is the DOM? What is meant by the DOM tree?
    When a webpage is loaded, the browser creates a Document Object Model of the page. The DOM 
    is a tree-like representation of the web page that gets loaded into the browser, allowing you 
    to access and change a document's contents. It represents the webpage as a series of objects. 
    The root of the tree is the document object, which represents the page as a whole. Its child 
    objects represent other elements on the page. 
*/ 

/* 
5. What is a XSS attack? How do they work? How can you guard against them?
    Cross-Site Scripting (XSS) attacks are a type of security vulnerability commonly found in web 
    applications. They occur when an attacker injects malicious code into a site. These codes are
    then executed within the context of the victim's browser, allowing the attacker to steal sensitive 
    information, manipulate web page content, hijack user sessions, or perform other malicious actions.
    We can defend against XSS by using validation -- only letting users input the kind of characters 
    they need to when supplying information and limiting where this content will be shown on the page. 
    Do not allow untrusted users to submit HTML markup or JavaScript. 
*/

