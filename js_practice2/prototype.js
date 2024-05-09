// Prototypes
// Every object in JavaScript has a prototype. The prototype is an object that the object inherits properties and methods from. The prototype of an object can be accessed using the __proto__ property.
// For example, the following code creates an object called person and sets its prototype to the Object.prototype object:
// JavaScript

// const person = {
//   name: "John Doe",
// };

// person.__proto__ = Object.prototype;
// The Object.prototype object is the prototype of all objects in JavaScript. It contains properties and methods that are common to all objects, such as the toString() method.
// Prototypal Inheritance
// Prototypal inheritance is a mechanism that allows objects to inherit properties and methods from other objects. When an object tries to access a property or method that it does not have, JavaScript will look for the property or method in the object's prototype. If the property or method is found in the prototype, JavaScript will use it.
// For example, the following code tries to access the age property of the person object:
// JavaScript

// const age = person.age;
// The person object does not have an age property, so JavaScript will look for the property in the person object's prototype, which is the Object.prototype object. The Object.prototype object does not have an age property, so JavaScript will return undefined.
