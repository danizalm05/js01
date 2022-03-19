//person.js
//https://github.com/bradtraversy/node_crash_course/blob/master/person.js

/// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      console.log(`My name is ${this.name} and I am ${this.age}`);
    }
  }
  
  module.exports = Person;