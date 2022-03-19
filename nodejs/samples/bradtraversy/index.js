//https://www.youtube.com/watch?v=fBNz5xF-Kx4    22:00
//https://github.com/bradtraversy/node_crash_course/blob/master/index.js 
//npm init
//npm install  uuid
//npm install  -D nodemon
//if  you delete node modules you can  rebuilld it by running:   npm install 


//https://nodejs.org/dist/latest-v16.x/docs/api/
const http = require("http");
const path = require("path");
const fs = require("fs");

const Person = require("./person");

const person1 = new  Person("john juo", 99) ;

console.log(person1);
person1.greeting();
 